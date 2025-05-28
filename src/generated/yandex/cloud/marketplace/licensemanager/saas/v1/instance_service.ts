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
import { Instance } from '../../../../../../yandex/cloud/marketplace/licensemanager/v1/instance';
import { UserInfo } from '../../../../../../yandex/cloud/marketplace/licensemanager/v1/user_info';

export const protobufPackage = 'yandex.cloud.marketplace.licensemanager.saas.v1';

export interface GetInstanceRequest {
    /** ID of the subscription instance. */
    instanceId: string;
}

export interface GetUserInfoRequest {
    /** ID of the subscription instance. */
    instanceId: string;
}

const baseGetInstanceRequest: object = { instanceId: '' };

export const GetInstanceRequest = {
    encode(message: GetInstanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetInstanceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetInstanceRequest } as GetInstanceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetInstanceRequest {
        const message = { ...baseGetInstanceRequest } as GetInstanceRequest;
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : '';
        return message;
    },

    toJSON(message: GetInstanceRequest): unknown {
        const obj: any = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetInstanceRequest>, I>>(
        object: I,
    ): GetInstanceRequest {
        const message = { ...baseGetInstanceRequest } as GetInstanceRequest;
        message.instanceId = object.instanceId ?? '';
        return message;
    },
};

const baseGetUserInfoRequest: object = { instanceId: '' };

export const GetUserInfoRequest = {
    encode(message: GetUserInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instanceId !== '') {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetUserInfoRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetUserInfoRequest } as GetUserInfoRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetUserInfoRequest {
        const message = { ...baseGetUserInfoRequest } as GetUserInfoRequest;
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : '';
        return message;
    },

    toJSON(message: GetUserInfoRequest): unknown {
        const obj: any = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetUserInfoRequest>, I>>(
        object: I,
    ): GetUserInfoRequest {
        const message = { ...baseGetUserInfoRequest } as GetUserInfoRequest;
        message.instanceId = object.instanceId ?? '';
        return message;
    },
};

/** A set of methods for managing subscription instances. */
export const InstanceServiceService = {
    /** Returns the specified subscription instance. */
    get: {
        path: '/yandex.cloud.marketplace.licensemanager.saas.v1.InstanceService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetInstanceRequest) =>
            Buffer.from(GetInstanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetInstanceRequest.decode(value),
        responseSerialize: (value: Instance) => Buffer.from(Instance.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Instance.decode(value),
    },
    /** Returns information about legal person (Russia only) who owns this subscription instance. */
    getUserInfo: {
        path: '/yandex.cloud.marketplace.licensemanager.saas.v1.InstanceService/GetUserInfo',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetUserInfoRequest) =>
            Buffer.from(GetUserInfoRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetUserInfoRequest.decode(value),
        responseSerialize: (value: UserInfo) => Buffer.from(UserInfo.encode(value).finish()),
        responseDeserialize: (value: Buffer) => UserInfo.decode(value),
    },
} as const;

export interface InstanceServiceServer extends UntypedServiceImplementation {
    /** Returns the specified subscription instance. */
    get: handleUnaryCall<GetInstanceRequest, Instance>;
    /** Returns information about legal person (Russia only) who owns this subscription instance. */
    getUserInfo: handleUnaryCall<GetUserInfoRequest, UserInfo>;
}

export interface InstanceServiceClient extends Client {
    /** Returns the specified subscription instance. */
    get(
        request: GetInstanceRequest,
        callback: (error: ServiceError | null, response: Instance) => void,
    ): ClientUnaryCall;
    get(
        request: GetInstanceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Instance) => void,
    ): ClientUnaryCall;
    get(
        request: GetInstanceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Instance) => void,
    ): ClientUnaryCall;
    /** Returns information about legal person (Russia only) who owns this subscription instance. */
    getUserInfo(
        request: GetUserInfoRequest,
        callback: (error: ServiceError | null, response: UserInfo) => void,
    ): ClientUnaryCall;
    getUserInfo(
        request: GetUserInfoRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: UserInfo) => void,
    ): ClientUnaryCall;
    getUserInfo(
        request: GetUserInfoRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: UserInfo) => void,
    ): ClientUnaryCall;
}

export const InstanceServiceClient = makeGenericClientConstructor(
    InstanceServiceService,
    'yandex.cloud.marketplace.licensemanager.saas.v1.InstanceService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): InstanceServiceClient;
    service: typeof InstanceServiceService;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
