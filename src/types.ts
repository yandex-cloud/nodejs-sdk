import {
    ChannelCredentials, ChannelOptions, Client, ServiceDefinition,
} from '@grpc/grpc-js';
import { RawClient } from 'nice-grpc';
import { NormalizedServiceDefinition } from 'nice-grpc/lib/service-definitions';
import { DeadlineOptions } from 'nice-grpc-client-middleware-deadline';

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

export interface ChannelSslOptions {
    rootCerts?: Buffer,
    privateKey?: Buffer,
    certChain?: Buffer,
}

export interface GenericCredentialsConfig {
    pollInterval?: number;
    ssl?: ChannelSslOptions
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

export type WrappedServiceClientType<S extends ServiceDefinition> = RawClient<NormalizedServiceDefinition<S>, DeadlineOptions>;
