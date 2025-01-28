import { ChannelCredentials, ChannelOptions, Client, ServiceDefinition } from '@grpc/grpc-js';
import { RawClient } from 'nice-grpc';
import { NormalizedServiceDefinition } from 'nice-grpc/lib/service-definitions';

import { ClientCallArgs } from './utils/client-factory';
export { ClientCallArgs } from './utils/client-factory';

export interface TokenService {
    getToken: () => Promise<string>;
}

export interface GeneratedServiceClientCtor<T extends ServiceDefinition> {
    service: T;

    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): Client;
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

export interface ChannelSslOptions {
    rootCerts?: Buffer;
    privateKey?: Buffer;
    certChain?: Buffer;
}

export interface GenericCredentialsConfig {
    pollInterval?: number;
    ssl?: ChannelSslOptions;
    headers?: Record<string, string>;
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

export type WrappedServiceClientType<S extends ServiceDefinition> = RawClient<
    NormalizedServiceDefinition<S>,
    ClientCallArgs
>;
