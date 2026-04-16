/* eslint-disable */
import Long from 'long';
import {
    makeGenericClientConstructor,
    ChannelCredentials,
    ChannelOptions,
    UntypedServiceImplementation,
    handleUnaryCall,
    Client,
    ClientUnaryCall,
    Metadata,
    CallOptions,
    ServiceError,
} from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
import { RegisterRequest } from './license_server';
import { Operation } from '../../../operation/operation';
import { SyncRequest } from './sync';

export const protobufPackage = 'yandex.cloud.marketplace.stacklandlicenseapi.v1';

/** Service for managing license servers */
export const LicenseServerServiceService = {
    /** Register a new license server */
    register: {
        path: '/yandex.cloud.marketplace.stacklandlicenseapi.v1.LicenseServerService/Register',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: RegisterRequest) =>
            Buffer.from(RegisterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => RegisterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Synchronize: get license limits and submit usage data */
    syncUsage: {
        path: '/yandex.cloud.marketplace.stacklandlicenseapi.v1.LicenseServerService/SyncUsage',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SyncRequest) => Buffer.from(SyncRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SyncRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface LicenseServerServiceServer extends UntypedServiceImplementation {
    /** Register a new license server */
    register: handleUnaryCall<RegisterRequest, Operation>;
    /** Synchronize: get license limits and submit usage data */
    syncUsage: handleUnaryCall<SyncRequest, Operation>;
}

export interface LicenseServerServiceClient extends Client {
    /** Register a new license server */
    register(
        request: RegisterRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    register(
        request: RegisterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    register(
        request: RegisterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Synchronize: get license limits and submit usage data */
    syncUsage(
        request: SyncRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    syncUsage(
        request: SyncRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    syncUsage(
        request: SyncRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const LicenseServerServiceClient = makeGenericClientConstructor(
    LicenseServerServiceService,
    'yandex.cloud.marketplace.stacklandlicenseapi.v1.LicenseServerService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): LicenseServerServiceClient;
    service: typeof LicenseServerServiceService;
};

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
