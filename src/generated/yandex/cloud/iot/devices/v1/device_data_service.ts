/* eslint-disable */
import { messageTypeRegistry } from '../../../../../typeRegistry';
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

export const protobufPackage = 'yandex.cloud.iot.devices.v1';

export interface PublishDeviceDataRequest {
    $type: 'yandex.cloud.iot.devices.v1.PublishDeviceDataRequest';
    /** ID of device publishing message */
    deviceId: string;
    /** Topic where message should be published */
    topic: string;
    /** Content of the message */
    data: Buffer;
}

export interface PublishDeviceDataResponse {
    $type: 'yandex.cloud.iot.devices.v1.PublishDeviceDataResponse';
}

const basePublishDeviceDataRequest: object = {
    $type: 'yandex.cloud.iot.devices.v1.PublishDeviceDataRequest',
    deviceId: '',
    topic: '',
};

export const PublishDeviceDataRequest = {
    $type: 'yandex.cloud.iot.devices.v1.PublishDeviceDataRequest' as const,

    encode(
        message: PublishDeviceDataRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.topic !== '') {
            writer.uint32(18).string(message.topic);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PublishDeviceDataRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePublishDeviceDataRequest } as PublishDeviceDataRequest;
        message.data = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.topic = reader.string();
                    break;
                case 3:
                    message.data = reader.bytes() as Buffer;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PublishDeviceDataRequest {
        const message = { ...basePublishDeviceDataRequest } as PublishDeviceDataRequest;
        message.deviceId =
            object.deviceId !== undefined && object.deviceId !== null
                ? String(object.deviceId)
                : '';
        message.topic =
            object.topic !== undefined && object.topic !== null ? String(object.topic) : '';
        message.data =
            object.data !== undefined && object.data !== null
                ? Buffer.from(bytesFromBase64(object.data))
                : Buffer.alloc(0);
        return message;
    },

    toJSON(message: PublishDeviceDataRequest): unknown {
        const obj: any = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.topic !== undefined && (obj.topic = message.topic);
        message.data !== undefined &&
            (obj.data = base64FromBytes(
                message.data !== undefined ? message.data : Buffer.alloc(0),
            ));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PublishDeviceDataRequest>, I>>(
        object: I,
    ): PublishDeviceDataRequest {
        const message = { ...basePublishDeviceDataRequest } as PublishDeviceDataRequest;
        message.deviceId = object.deviceId ?? '';
        message.topic = object.topic ?? '';
        message.data = object.data ?? Buffer.alloc(0);
        return message;
    },
};

messageTypeRegistry.set(PublishDeviceDataRequest.$type, PublishDeviceDataRequest);

const basePublishDeviceDataResponse: object = {
    $type: 'yandex.cloud.iot.devices.v1.PublishDeviceDataResponse',
};

export const PublishDeviceDataResponse = {
    $type: 'yandex.cloud.iot.devices.v1.PublishDeviceDataResponse' as const,

    encode(_: PublishDeviceDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PublishDeviceDataResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePublishDeviceDataResponse } as PublishDeviceDataResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): PublishDeviceDataResponse {
        const message = { ...basePublishDeviceDataResponse } as PublishDeviceDataResponse;
        return message;
    },

    toJSON(_: PublishDeviceDataResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PublishDeviceDataResponse>, I>>(
        _: I,
    ): PublishDeviceDataResponse {
        const message = { ...basePublishDeviceDataResponse } as PublishDeviceDataResponse;
        return message;
    },
};

messageTypeRegistry.set(PublishDeviceDataResponse.$type, PublishDeviceDataResponse);

/** A set of methods to work with IoT Core messages on behalf of device */
export const DeviceDataServiceService = {
    /** Publishes message on behalf of specified device */
    publish: {
        path: '/yandex.cloud.iot.devices.v1.DeviceDataService/Publish',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: PublishDeviceDataRequest) =>
            Buffer.from(PublishDeviceDataRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => PublishDeviceDataRequest.decode(value),
        responseSerialize: (value: PublishDeviceDataResponse) =>
            Buffer.from(PublishDeviceDataResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => PublishDeviceDataResponse.decode(value),
    },
} as const;

export interface DeviceDataServiceServer extends UntypedServiceImplementation {
    /** Publishes message on behalf of specified device */
    publish: handleUnaryCall<PublishDeviceDataRequest, PublishDeviceDataResponse>;
}

export interface DeviceDataServiceClient extends Client {
    /** Publishes message on behalf of specified device */
    publish(
        request: PublishDeviceDataRequest,
        callback: (error: ServiceError | null, response: PublishDeviceDataResponse) => void,
    ): ClientUnaryCall;
    publish(
        request: PublishDeviceDataRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: PublishDeviceDataResponse) => void,
    ): ClientUnaryCall;
    publish(
        request: PublishDeviceDataRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: PublishDeviceDataResponse) => void,
    ): ClientUnaryCall;
}

export const DeviceDataServiceClient = makeGenericClientConstructor(
    DeviceDataServiceService,
    'yandex.cloud.iot.devices.v1.DeviceDataService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): DeviceDataServiceClient;
    service: typeof DeviceDataServiceService;
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

const atob: (b64: string) => string =
    globalThis.atob || ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}

const btoa: (bin: string) => string =
    globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
    const bin: string[] = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(''));
}

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
