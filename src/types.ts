import {
    ChannelCredentials, ChannelOptions, Client, ServiceDefinition,
} from '@grpc/grpc-js';
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
    /**
     * Enable OpenTelemetry tracing for all SDK gRPC calls. Lazily loads
     * `nice-grpc-opentelemetry` and attaches its default client middleware. The package
     * must be installed as a peer dependency together with `@opentelemetry/api`;
     * otherwise Session construction throws.
     */
    tracing?: boolean;
}

/**
 * @deprecated By the end of 2026, the use of oauth tokens in the Yandex cloud will be discontinued.
 * Please consider to use another credentials provider.
 */
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
