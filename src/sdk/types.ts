import { ChannelCredentials, ChannelOptions, Client, ServiceDefinition } from '@grpc/grpc-js';
import { ClientError, RawClient, Status } from 'nice-grpc';
import { DeadlineOptions } from 'nice-grpc-client-middleware-deadline';
import { NormalizedServiceDefinition } from 'nice-grpc/lib/service-definitions';

import { Operation } from '../generated/yandex/cloud/operation/operation';
import { Reader } from 'protobufjs';

type RetryOptions = {
    /**
     * Boolean indicating whether retries are enabled.
     *
     * If the method is marked as idempotent in Protobuf, i.e. has
     *
     *     option idempotency_level = IDEMPOTENT;
     *
     * then the default is `true`. Otherwise, the default is `false`.
     *
     * Method options currently work only when compiling with `ts-proto`.
     */
    retry?: boolean;
    /**
     * Base delay between retry attempts in milliseconds.
     *
     * Defaults to 1000.
     *
     * Example: if `retryBaseDelayMs` is 100, then retries will be attempted in
     * 100ms, 200ms, 400ms etc. (not counting jitter).
     */
    retryBaseDelayMs?: number;
    /**
     * Maximum delay between attempts in milliseconds.
     *
     * Defaults to 15 seconds.
     *
     * Example: if `retryBaseDelayMs` is 1000 and `retryMaxDelayMs` is 3000, then
     * retries will be attempted in 1000ms, 2000ms, 3000ms, 3000ms etc (not
     * counting jitter).
     */
    retryMaxDelayMs?: number;
    /**
     * Maximum for the total number of attempts. `Infinity` is supported.
     *
     * Defaults to 1, i.e. a single retry will be attempted.
     */
    retryMaxAttempts?: number;
    /**
     * Array of retryable status codes.
     *
     * Default is `[UNKNOWN, RESOURCE_EXHAUSTED, INTERNAL, UNAVAILABLE]`.
     */
    retryableStatuses?: Status[];
    /**
     * Called after receiving error with retryable status code before setting
     * backoff delay timer.
     *
     * If the error code is not retryable, or the maximum attempts exceeded, this
     * function will not be called and the error will be thrown from the client
     * method.
     */
    onRetryableError?(error: ClientError, attempt: number, delayMs: number): void;
};

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

export type ClientCallArgs = DeadlineOptions & RetryOptions;

export type WrappedServiceClientType<S extends ServiceDefinition> = RawClient<
    NormalizedServiceDefinition<S>,
    ClientCallArgs
>;

export type ClientType = <S extends ServiceDefinition>(
    clientClass: GeneratedServiceClientCtor<S>,
    customEndpoint?: string,
) => WrappedServiceClientType<S>;

export type SessionArg = { client: ClientType };

export type TypeFromProtoc<T extends object, NotPartialKey extends keyof T = never> = {
    [Key in NotPartialKey]: T[Key];
} & Partial<T>;

export type OperationWithDecoder<DecoderT> = Operation & {
    decoder: (input: Reader | Uint8Array, length?: number) => DecoderT;
};
