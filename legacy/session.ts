import grpc, { ChannelCredentials } from 'grpc';
import util from './lib/util';
import { EndpointResolver } from './lib/endpoint';
import metadata from './lib/metadata';
import iam from './api/iam/v1';

type TokenCreator = () => Promise<string>;

interface ClientClass<T> {
    new(address: string, credentials: ChannelCredentials, options?: object, tokenCreator?: TokenCreator): T;
    __endpointId: string;
}

interface GenericConfig {
    pollInterval?: number;
}

export interface OAuthCredentialsConfig extends GenericConfig {
    oauthToken: string;
}

export interface IamTokenCredentialsConfig extends GenericConfig {
    iamToken: string;
}

export type SessionConfig = OAuthCredentialsConfig | IamTokenCredentialsConfig | GenericConfig;

const createIamToken = async (iamEndpoint: string, req: unknown) => {
    const Ctor = iam.IamTokenService.makeGrpcConstructor();
    let client = new Ctor(iamEndpoint, grpc.credentials.createSsl());

    client = util.pimpServiceInstance(client);
    const resp = await client.create(req);

    return resp.iamToken;
};

const newTokenCreator = (config: SessionConfig, iamEndpoint: string): TokenCreator => {
    if ('oauthToken' in config) {
        return () => createIamToken(iamEndpoint, {
            yandexPassportOauthToken: config.oauthToken,
        });
    }

    if ('iamToken' in config) {
        return async () => config.iamToken;
    }

    const tokenService = new metadata.TokenService();

    return async () => {
        await tokenService.initialize();

        return tokenService.getToken();
    };
};

const newChannelCredentials = (tokenCreator: TokenCreator) => grpc.credentials.combineChannelCredentials(
    grpc.credentials.createSsl(),
    grpc.credentials.createFromMetadataGenerator((params, callback) => {
        tokenCreator()
            .then((token) => {
                const md = new grpc.Metadata();

                md.set('authorization', `Bearer ${token}`);

                return callback(null, md);
            })
            .catch((error) => callback(error));
    }),
);

export class Session {
    private static defaultConfig: Partial<SessionConfig> = {
        pollInterval: 1000,
    };

    private readonly __config: SessionConfig;
    private readonly __endpointResolver: EndpointResolver;
    private readonly __tokenCreator: TokenCreator;
    private readonly __channelCredentials: ChannelCredentials;

    constructor(config: SessionConfig) {
        this.__config = {
            ...Session.defaultConfig,
            ...config,
        };
        this.__endpointResolver = new EndpointResolver();
        this.__tokenCreator = newTokenCreator(
            this.__config,
            this.__endpointResolver.resolve('iam'),
        );
        this.__channelCredentials = newChannelCredentials(this.__tokenCreator);
    }

    async setEndpoint(newEndpoint: string) {
        await this.__endpointResolver.updateEndpointList(newEndpoint);
    }

    client<T>(Cls: ClientClass<T>): T {
        return util.pimpServiceInstance(
            new Cls(
                // eslint-disable-next-line no-underscore-dangle
                this.__endpointResolver.resolve(Cls.__endpointId),
                this.__channelCredentials,
                undefined,
                this.__tokenCreator,
            ),
        );
    }
}
