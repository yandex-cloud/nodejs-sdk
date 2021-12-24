import {
    ChannelCredentials, ChannelOptions, Client, ServiceDefinition,
} from '@grpc/grpc-js';

export interface TokenService {
    getToken: () => Promise<string>;
}

export interface GeneratedServiceClientCtor<T extends ServiceDefinition> {
    new(
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): Client;
    service: T
}

export interface IIAmCredentials {
    serviceAccountId: string;
    accessKeyId: string;
    privateKey: Buffer | string;
}

export interface ISslCredentials {
    rootCertificates?: Buffer;
    clientPrivateKey?: Buffer;
    clientCertChain?: Buffer;
}

export interface GenericCredentialsConfig {
    pollInterval?: number;
}

export interface OAuthCredentialsConfig extends GenericCredentialsConfig {
    oauthToken: string;
}

export interface IamTokenCredentialsConfig extends GenericCredentialsConfig {
    iamToken: string;
}

export interface ServiceAccountCredentialsConfig extends GenericCredentialsConfig {
    serviceAccountJson: IIAmCredentials;
}

export type SessionConfig =
    | OAuthCredentialsConfig
    | IamTokenCredentialsConfig
    | ServiceAccountCredentialsConfig
    | GenericCredentialsConfig;
