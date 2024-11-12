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
import { Instance } from '../../../../../../yandex/cloud/marketplace/licensemanager/v1/instance';

export const protobufPackage = 'yandex.cloud.marketplace.licensemanager.saas.v1';

export interface GetInstanceRequest {
    $type: 'yandex.cloud.marketplace.licensemanager.saas.v1.GetInstanceRequest';
    /** ID of the subscription instance. */
    instanceId: string;
}

const baseGetInstanceRequest: object = {
    $type: 'yandex.cloud.marketplace.licensemanager.saas.v1.GetInstanceRequest',
    instanceId: '',
};

export const GetInstanceRequest = {
    $type: 'yandex.cloud.marketplace.licensemanager.saas.v1.GetInstanceRequest' as const,

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

messageTypeRegistry.set(GetInstanceRequest.$type, GetInstanceRequest);

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
} as const;

export interface InstanceServiceServer extends UntypedServiceImplementation {
    /** Returns the specified subscription instance. */
    get: handleUnaryCall<GetInstanceRequest, Instance>;
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
