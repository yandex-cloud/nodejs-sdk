import {
    ChannelCredentials, credentials, Metadata, ServiceDefinition,
} from '@grpc/grpc-js';
import { createChannel } from 'nice-grpc';
import { Required } from 'utility-types';
import {
    GeneratedServiceClientCtor,
    IamTokenCredentialsConfig,
    OAuthCredentialsConfig,
    ServiceAccountCredentialsConfig, WrappedServiceClientType,
    SessionConfig,
} from './types';
import { IamTokenService } from './token-service/iam-token-service';
import { MetadataTokenService } from './token-service/metadata-token-service';
import { clientFactory } from './utils/client-factory';
import { serviceClients, cloudApi } from '.';
import { getServiceClientEndpoint } from './service-endpoints';

const isOAuth = (config: SessionConfig): config is OAuthCredentialsConfig => 'oauthToken' in config;

const isIamToken = (config: SessionConfig): config is IamTokenCredentialsConfig => 'iamToken' in config;

const isServiceAccount = (config: SessionConfig): config is ServiceAccountCredentialsConfig => 'serviceAccountJson' in config;

const createIamToken = async (iamEndpoint: string, req: Partial<cloudApi.iam.iam_token_service.CreateIamTokenRequest>) => {
    const channel = createChannel(iamEndpoint, credentials.createSsl());
    const client = clientFactory.create(serviceClients.IamTokenServiceClient.service, channel);
    const resp = await client.create(cloudApi.iam.iam_token_service.CreateIamTokenRequest.fromPartial(req));

    return resp.iamToken;
};

const newTokenCreator = (config: SessionConfig): () => Promise<string> => {
    if (isOAuth(config)) {
        return () => {
            const iamEndpoint = getServiceClientEndpoint(serviceClients.IamTokenServiceClient);

            return createIamToken(iamEndpoint, {
                yandexPassportOauthToken: config.oauthToken,
            });
        };
    } if (isIamToken(config)) {
        const { iamToken } = config;

        return async () => iamToken;
    }

    const tokenService = isServiceAccount(config) ? new IamTokenService(config.serviceAccountJson) : new MetadataTokenService();

    return async () => tokenService.getToken();
};

const newChannelCredentials = (tokenCreator: TokenCreator) => credentials.combineChannelCredentials(
    credentials.createSsl(),
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
    private readonly config: Required<SessionConfig, 'pollInterval'>;
    private readonly channelCredentials: ChannelCredentials;
    private readonly tokenCreator: TokenCreator;

    private static readonly DEFAULT_CONFIG = {
        pollInterval: 1000,
    };

    constructor(config?: SessionConfig) {
        this.config = {
            ...Session.DEFAULT_CONFIG,
            ...config,
        };
        this.tokenCreator = newTokenCreator(this.config);
        this.channelCredentials = newChannelCredentials(this.tokenCreator);
    }

    get pollInterval(): number {
        return this.config.pollInterval;
    }

    client<S extends ServiceDefinition>(clientClass: GeneratedServiceClientCtor<S>, customEndpoint?: string): WrappedServiceClientType<S> {
        const endpoint = customEndpoint || getServiceClientEndpoint(clientClass);
        const channel = createChannel(endpoint, this.channelCredentials);

        return clientFactory.create(clientClass.service, channel);
    }
}
