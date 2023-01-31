import {
    ChannelCredentials,
    credentials,
    Metadata,
    ServiceDefinition,
} from '@grpc/grpc-js';
import axios from 'axios';
import { createChannel } from 'nice-grpc';
import { Required } from 'utility-types';
import {
    cloudApi,
    serviceClients,
} from '.';
import {
    DEFAULT_ENDPOINT,
    EndpointsResponse,
    getServiceClientEndpoint,
    SERVICE_ENDPOINTS_LIST,
    ServiceEndpointsList,
} from './service-endpoints';
import { IamTokenService } from './token-service/iam-token-service';
import { MetadataTokenService } from './token-service/metadata-token-service';
import {
    ChannelSslOptions,
    GeneratedServiceClientCtor,
    IamTokenCredentialsConfig,
    OAuthCredentialsConfig,
    ServiceAccountCredentialsConfig,
    SessionConfig,
    WrappedServiceClientType,
} from './types';
import { clientFactory } from './utils/client-factory';

const isOAuth = (config: SessionConfig): config is OAuthCredentialsConfig => 'oauthToken' in config;

const isIamToken = (config: SessionConfig): config is IamTokenCredentialsConfig => 'iamToken' in config;

const isServiceAccount = (config: SessionConfig): config is ServiceAccountCredentialsConfig => 'serviceAccountJson' in config;

const createIamToken = async (iamEndpoint: string, req: Partial<cloudApi.iam.iam_token_service.CreateIamTokenRequest>) => {
    const channel = createChannel(iamEndpoint, credentials.createSsl());
    const client = clientFactory.create(serviceClients.IamTokenServiceClient.service, channel);
    const resp = await client.create(cloudApi.iam.iam_token_service.CreateIamTokenRequest.fromPartial(req));

    return resp.iamToken;
};

const newTokenCreator = (config: SessionConfig, endpointResolver: () => Promise<ServiceEndpointsList>): () => Promise<string> => {
    if (isOAuth(config)) {
        return async () => {
            const iamEndpoint = await getServiceClientEndpoint(serviceClients.IamTokenServiceClient, endpointResolver);

            return createIamToken(iamEndpoint, {
                yandexPassportOauthToken: config.oauthToken,
            });
        };
    }
    if (isIamToken(config)) {
        const { iamToken } = config;

        return async () => iamToken;
    }

    const tokenService = isServiceAccount(config)
        ? new IamTokenService(config.serviceAccountJson, endpointResolver)
        : new MetadataTokenService();

    return async () => tokenService.getToken();
};

const newChannelCredentials = (tokenCreator: TokenCreator, sslOptions?: ChannelSslOptions) => credentials.combineChannelCredentials(
    credentials.createSsl(sslOptions?.rootCerts, sslOptions?.privateKey, sslOptions?.certChain),
    credentials.createFromMetadataGenerator(
        (
            params: { service_url: string },
            callback: (error: any, result?: any) => void,
        ) => {
            tokenCreator()
                .then((token) => {
                    const md = new Metadata();

                    md.set('authorization', `Bearer ${token}`);

                    return callback(null, md);
                })
                .catch((error) => callback(error));
        },
    ),
);

type TokenCreator = () => Promise<string>;

export class Session {
    private static readonly DEFAULT_CONFIG = {
        pollInterval: 1000,
    };
    private readonly config: Required<SessionConfig, 'pollInterval'>;
    private readonly channelCredentials: ChannelCredentials;
    private readonly tokenCreator: TokenCreator;
    private endpoints: ServiceEndpointsList | undefined;

    constructor(config?: SessionConfig) {
        this.config = {
            ...Session.DEFAULT_CONFIG,
            ...config,
        };
        this.tokenCreator = newTokenCreator(this.config, this.endpointResolver);
        this.channelCredentials = newChannelCredentials(this.tokenCreator, this.config.ssl);
    }

    get pollInterval(): number {
        return this.config.pollInterval;
    }

    endpointResolver = async (): Promise<ServiceEndpointsList> => {
        if (this.endpoints !== undefined) {
            return this.endpoints;
        }
        if (!this.config.endpoint || this.config.endpoint === DEFAULT_ENDPOINT) {
            this.endpoints = SERVICE_ENDPOINTS_LIST;
        } else {
            const res = await axios.get<EndpointsResponse>(this.config.endpoint);
            const endpointsMap = Object.fromEntries(res.data.endpoints.map(({ id, address }) => [id, address]));

            this.endpoints = SERVICE_ENDPOINTS_LIST.map((serviceEndpoint) => ({
                ...serviceEndpoint,
                endpoint: endpointsMap[serviceEndpoint.id],
            }));
        }

        return this.endpoints;
    };

    async client<S extends ServiceDefinition>(
        clientClass: GeneratedServiceClientCtor<S>,
        customEndpoint?: string,
    ): Promise<WrappedServiceClientType<S>> {
        const endpoint = customEndpoint || (await getServiceClientEndpoint(clientClass, this.endpointResolver));
        const channel = createChannel(endpoint, this.channelCredentials);

        return clientFactory.create(clientClass.service, channel);
    }
}
