/* eslint-disable */
import { messageTypeRegistry } from '../../../../../../typeRegistry';
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
import { Operation } from '../../../../../../yandex/cloud/operation/operation';
import { Lock } from '../../../../../../yandex/cloud/marketplace/licensemanager/v1/lock';

export const protobufPackage = 'yandex.cloud.marketplace.licensemanager.saas.v1';

export interface EnsureLockRequest {
    $type: 'yandex.cloud.marketplace.licensemanager.saas.v1.EnsureLockRequest';
    /** Signed JWT token which contains information about subscription. */
    instanceToken: string;
    /** ID of the resource to which the subscription will be locked. */
    resourceId: string;
}

export interface EnsureLockMetadata {
    $type: 'yandex.cloud.marketplace.licensemanager.saas.v1.EnsureLockMetadata';
    /** ID of the subscription lock. */
    lockId: string;
}

export interface GetLockRequest {
    $type: 'yandex.cloud.marketplace.licensemanager.saas.v1.GetLockRequest';
    /** ID of the subscription lock. */
    lockId: string;
}

const baseEnsureLockRequest: object = {
    $type: 'yandex.cloud.marketplace.licensemanager.saas.v1.EnsureLockRequest',
    instanceToken: '',
    resourceId: '',
};

export const EnsureLockRequest = {
    $type: 'yandex.cloud.marketplace.licensemanager.saas.v1.EnsureLockRequest' as const,

    encode(message: EnsureLockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instanceToken !== '') {
            writer.uint32(10).string(message.instanceToken);
        }
        if (message.resourceId !== '') {
            writer.uint32(18).string(message.resourceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EnsureLockRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEnsureLockRequest } as EnsureLockRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceToken = reader.string();
                    break;
                case 2:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): EnsureLockRequest {
        const message = { ...baseEnsureLockRequest } as EnsureLockRequest;
        message.instanceToken =
            object.instanceToken !== undefined && object.instanceToken !== null
                ? String(object.instanceToken)
                : '';
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : '';
        return message;
    },

    toJSON(message: EnsureLockRequest): unknown {
        const obj: any = {};
        message.instanceToken !== undefined && (obj.instanceToken = message.instanceToken);
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<EnsureLockRequest>, I>>(object: I): EnsureLockRequest {
        const message = { ...baseEnsureLockRequest } as EnsureLockRequest;
        message.instanceToken = object.instanceToken ?? '';
        message.resourceId = object.resourceId ?? '';
        return message;
    },
};

messageTypeRegistry.set(EnsureLockRequest.$type, EnsureLockRequest);

const baseEnsureLockMetadata: object = {
    $type: 'yandex.cloud.marketplace.licensemanager.saas.v1.EnsureLockMetadata',
    lockId: '',
};

export const EnsureLockMetadata = {
    $type: 'yandex.cloud.marketplace.licensemanager.saas.v1.EnsureLockMetadata' as const,

    encode(message: EnsureLockMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.lockId !== '') {
            writer.uint32(10).string(message.lockId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EnsureLockMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEnsureLockMetadata } as EnsureLockMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): EnsureLockMetadata {
        const message = { ...baseEnsureLockMetadata } as EnsureLockMetadata;
        message.lockId =
            object.lockId !== undefined && object.lockId !== null ? String(object.lockId) : '';
        return message;
    },

    toJSON(message: EnsureLockMetadata): unknown {
        const obj: any = {};
        message.lockId !== undefined && (obj.lockId = message.lockId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<EnsureLockMetadata>, I>>(
        object: I,
    ): EnsureLockMetadata {
        const message = { ...baseEnsureLockMetadata } as EnsureLockMetadata;
        message.lockId = object.lockId ?? '';
        return message;
    },
};

messageTypeRegistry.set(EnsureLockMetadata.$type, EnsureLockMetadata);

const baseGetLockRequest: object = {
    $type: 'yandex.cloud.marketplace.licensemanager.saas.v1.GetLockRequest',
    lockId: '',
};

export const GetLockRequest = {
    $type: 'yandex.cloud.marketplace.licensemanager.saas.v1.GetLockRequest' as const,

    encode(message: GetLockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.lockId !== '') {
            writer.uint32(10).string(message.lockId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetLockRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetLockRequest } as GetLockRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetLockRequest {
        const message = { ...baseGetLockRequest } as GetLockRequest;
        message.lockId =
            object.lockId !== undefined && object.lockId !== null ? String(object.lockId) : '';
        return message;
    },

    toJSON(message: GetLockRequest): unknown {
        const obj: any = {};
        message.lockId !== undefined && (obj.lockId = message.lockId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetLockRequest>, I>>(object: I): GetLockRequest {
        const message = { ...baseGetLockRequest } as GetLockRequest;
        message.lockId = object.lockId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetLockRequest.$type, GetLockRequest);

/** A set of methods for managing subscription locks. */
export const LockServiceService = {
    /**
     * Checks if the she specified subscription is already locked to the specified resource.
     * If it is not locked, locks the subscription to the resource.
     */
    ensure: {
        path: '/yandex.cloud.marketplace.licensemanager.saas.v1.LockService/Ensure',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: EnsureLockRequest) =>
            Buffer.from(EnsureLockRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => EnsureLockRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Returns the specified subscription lock. */
    get: {
        path: '/yandex.cloud.marketplace.licensemanager.saas.v1.LockService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetLockRequest) =>
            Buffer.from(GetLockRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetLockRequest.decode(value),
        responseSerialize: (value: Lock) => Buffer.from(Lock.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Lock.decode(value),
    },
} as const;

export interface LockServiceServer extends UntypedServiceImplementation {
    /**
     * Checks if the she specified subscription is already locked to the specified resource.
     * If it is not locked, locks the subscription to the resource.
     */
    ensure: handleUnaryCall<EnsureLockRequest, Operation>;
    /** Returns the specified subscription lock. */
    get: handleUnaryCall<GetLockRequest, Lock>;
}

export interface LockServiceClient extends Client {
    /**
     * Checks if the she specified subscription is already locked to the specified resource.
     * If it is not locked, locks the subscription to the resource.
     */
    ensure(
        request: EnsureLockRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    ensure(
        request: EnsureLockRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    ensure(
        request: EnsureLockRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Returns the specified subscription lock. */
    get(
        request: GetLockRequest,
        callback: (error: ServiceError | null, response: Lock) => void,
    ): ClientUnaryCall;
    get(
        request: GetLockRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Lock) => void,
    ): ClientUnaryCall;
    get(
        request: GetLockRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Lock) => void,
    ): ClientUnaryCall;
}

export const LockServiceClient = makeGenericClientConstructor(
    LockServiceService,
    'yandex.cloud.marketplace.licensemanager.saas.v1.LockService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): LockServiceClient;
    service: typeof LockServiceService;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
              Exclude<keyof I, KeysOfUnion<P> | '$type'>,
              never
          >;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
