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
import { Connection } from '../../../../../../yandex/cloud/serverless/apigateway/websocket/v1/connection';

export const protobufPackage = 'yandex.cloud.serverless.apigateway.websocket.v1';

export interface GetConnectionRequest {
    $type: 'yandex.cloud.serverless.apigateway.websocket.v1.GetConnectionRequest';
    /** ID of the connection to get. */
    connectionId: string;
}

export interface SendToConnectionRequest {
    $type: 'yandex.cloud.serverless.apigateway.websocket.v1.SendToConnectionRequest';
    /** ID of the connection to which send. */
    connectionId: string;
    /** Data to send. */
    data: Buffer;
    /** Type of the sending data. */
    type: SendToConnectionRequest_DataType;
}

export enum SendToConnectionRequest_DataType {
    DATA_TYPE_UNSPECIFIED = 0,
    /** BINARY - Binary data. */
    BINARY = 1,
    /** TEXT - Text data. */
    TEXT = 2,
    UNRECOGNIZED = -1,
}

export function sendToConnectionRequest_DataTypeFromJSON(
    object: any,
): SendToConnectionRequest_DataType {
    switch (object) {
        case 0:
        case 'DATA_TYPE_UNSPECIFIED':
            return SendToConnectionRequest_DataType.DATA_TYPE_UNSPECIFIED;
        case 1:
        case 'BINARY':
            return SendToConnectionRequest_DataType.BINARY;
        case 2:
        case 'TEXT':
            return SendToConnectionRequest_DataType.TEXT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SendToConnectionRequest_DataType.UNRECOGNIZED;
    }
}

export function sendToConnectionRequest_DataTypeToJSON(
    object: SendToConnectionRequest_DataType,
): string {
    switch (object) {
        case SendToConnectionRequest_DataType.DATA_TYPE_UNSPECIFIED:
            return 'DATA_TYPE_UNSPECIFIED';
        case SendToConnectionRequest_DataType.BINARY:
            return 'BINARY';
        case SendToConnectionRequest_DataType.TEXT:
            return 'TEXT';
        default:
            return 'UNKNOWN';
    }
}

export interface SendToConnectionResponse {
    $type: 'yandex.cloud.serverless.apigateway.websocket.v1.SendToConnectionResponse';
}

export interface DisconnectRequest {
    $type: 'yandex.cloud.serverless.apigateway.websocket.v1.DisconnectRequest';
    /** ID of the connection to disconnect. */
    connectionId: string;
}

export interface DisconnectResponse {
    $type: 'yandex.cloud.serverless.apigateway.websocket.v1.DisconnectResponse';
}

const baseGetConnectionRequest: object = {
    $type: 'yandex.cloud.serverless.apigateway.websocket.v1.GetConnectionRequest',
    connectionId: '',
};

export const GetConnectionRequest = {
    $type: 'yandex.cloud.serverless.apigateway.websocket.v1.GetConnectionRequest' as const,

    encode(message: GetConnectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.connectionId !== '') {
            writer.uint32(10).string(message.connectionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetConnectionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetConnectionRequest } as GetConnectionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetConnectionRequest {
        const message = { ...baseGetConnectionRequest } as GetConnectionRequest;
        message.connectionId =
            object.connectionId !== undefined && object.connectionId !== null
                ? String(object.connectionId)
                : '';
        return message;
    },

    toJSON(message: GetConnectionRequest): unknown {
        const obj: any = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetConnectionRequest>, I>>(
        object: I,
    ): GetConnectionRequest {
        const message = { ...baseGetConnectionRequest } as GetConnectionRequest;
        message.connectionId = object.connectionId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetConnectionRequest.$type, GetConnectionRequest);

const baseSendToConnectionRequest: object = {
    $type: 'yandex.cloud.serverless.apigateway.websocket.v1.SendToConnectionRequest',
    connectionId: '',
    type: 0,
};

export const SendToConnectionRequest = {
    $type: 'yandex.cloud.serverless.apigateway.websocket.v1.SendToConnectionRequest' as const,

    encode(message: SendToConnectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.connectionId !== '') {
            writer.uint32(10).string(message.connectionId);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SendToConnectionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSendToConnectionRequest } as SendToConnectionRequest;
        message.data = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
                    break;
                case 2:
                    message.data = reader.bytes() as Buffer;
                    break;
                case 3:
                    message.type = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SendToConnectionRequest {
        const message = { ...baseSendToConnectionRequest } as SendToConnectionRequest;
        message.connectionId =
            object.connectionId !== undefined && object.connectionId !== null
                ? String(object.connectionId)
                : '';
        message.data =
            object.data !== undefined && object.data !== null
                ? Buffer.from(bytesFromBase64(object.data))
                : Buffer.alloc(0);
        message.type =
            object.type !== undefined && object.type !== null
                ? sendToConnectionRequest_DataTypeFromJSON(object.type)
                : 0;
        return message;
    },

    toJSON(message: SendToConnectionRequest): unknown {
        const obj: any = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.data !== undefined &&
            (obj.data = base64FromBytes(
                message.data !== undefined ? message.data : Buffer.alloc(0),
            ));
        message.type !== undefined &&
            (obj.type = sendToConnectionRequest_DataTypeToJSON(message.type));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SendToConnectionRequest>, I>>(
        object: I,
    ): SendToConnectionRequest {
        const message = { ...baseSendToConnectionRequest } as SendToConnectionRequest;
        message.connectionId = object.connectionId ?? '';
        message.data = object.data ?? Buffer.alloc(0);
        message.type = object.type ?? 0;
        return message;
    },
};

messageTypeRegistry.set(SendToConnectionRequest.$type, SendToConnectionRequest);

const baseSendToConnectionResponse: object = {
    $type: 'yandex.cloud.serverless.apigateway.websocket.v1.SendToConnectionResponse',
};

export const SendToConnectionResponse = {
    $type: 'yandex.cloud.serverless.apigateway.websocket.v1.SendToConnectionResponse' as const,

    encode(_: SendToConnectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SendToConnectionResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSendToConnectionResponse } as SendToConnectionResponse;
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

    fromJSON(_: any): SendToConnectionResponse {
        const message = { ...baseSendToConnectionResponse } as SendToConnectionResponse;
        return message;
    },

    toJSON(_: SendToConnectionResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SendToConnectionResponse>, I>>(
        _: I,
    ): SendToConnectionResponse {
        const message = { ...baseSendToConnectionResponse } as SendToConnectionResponse;
        return message;
    },
};

messageTypeRegistry.set(SendToConnectionResponse.$type, SendToConnectionResponse);

const baseDisconnectRequest: object = {
    $type: 'yandex.cloud.serverless.apigateway.websocket.v1.DisconnectRequest',
    connectionId: '',
};

export const DisconnectRequest = {
    $type: 'yandex.cloud.serverless.apigateway.websocket.v1.DisconnectRequest' as const,

    encode(message: DisconnectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.connectionId !== '') {
            writer.uint32(10).string(message.connectionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DisconnectRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDisconnectRequest } as DisconnectRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DisconnectRequest {
        const message = { ...baseDisconnectRequest } as DisconnectRequest;
        message.connectionId =
            object.connectionId !== undefined && object.connectionId !== null
                ? String(object.connectionId)
                : '';
        return message;
    },

    toJSON(message: DisconnectRequest): unknown {
        const obj: any = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DisconnectRequest>, I>>(object: I): DisconnectRequest {
        const message = { ...baseDisconnectRequest } as DisconnectRequest;
        message.connectionId = object.connectionId ?? '';
        return message;
    },
};

messageTypeRegistry.set(DisconnectRequest.$type, DisconnectRequest);

const baseDisconnectResponse: object = {
    $type: 'yandex.cloud.serverless.apigateway.websocket.v1.DisconnectResponse',
};

export const DisconnectResponse = {
    $type: 'yandex.cloud.serverless.apigateway.websocket.v1.DisconnectResponse' as const,

    encode(_: DisconnectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DisconnectResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDisconnectResponse } as DisconnectResponse;
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

    fromJSON(_: any): DisconnectResponse {
        const message = { ...baseDisconnectResponse } as DisconnectResponse;
        return message;
    },

    toJSON(_: DisconnectResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DisconnectResponse>, I>>(_: I): DisconnectResponse {
        const message = { ...baseDisconnectResponse } as DisconnectResponse;
        return message;
    },
};

messageTypeRegistry.set(DisconnectResponse.$type, DisconnectResponse);

/** A set of methods for managing API Gateway WebSocket connections. */
export const ConnectionServiceService = {
    /** Returns the specified connection info. */
    get: {
        path: '/yandex.cloud.serverless.apigateway.websocket.v1.ConnectionService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetConnectionRequest) =>
            Buffer.from(GetConnectionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetConnectionRequest.decode(value),
        responseSerialize: (value: Connection) => Buffer.from(Connection.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Connection.decode(value),
    },
    /** Sends data to the specified connection. */
    send: {
        path: '/yandex.cloud.serverless.apigateway.websocket.v1.ConnectionService/Send',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SendToConnectionRequest) =>
            Buffer.from(SendToConnectionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SendToConnectionRequest.decode(value),
        responseSerialize: (value: SendToConnectionResponse) =>
            Buffer.from(SendToConnectionResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => SendToConnectionResponse.decode(value),
    },
    /** Disconnects the specified connection. */
    disconnect: {
        path: '/yandex.cloud.serverless.apigateway.websocket.v1.ConnectionService/Disconnect',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DisconnectRequest) =>
            Buffer.from(DisconnectRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DisconnectRequest.decode(value),
        responseSerialize: (value: DisconnectResponse) =>
            Buffer.from(DisconnectResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => DisconnectResponse.decode(value),
    },
} as const;

export interface ConnectionServiceServer extends UntypedServiceImplementation {
    /** Returns the specified connection info. */
    get: handleUnaryCall<GetConnectionRequest, Connection>;
    /** Sends data to the specified connection. */
    send: handleUnaryCall<SendToConnectionRequest, SendToConnectionResponse>;
    /** Disconnects the specified connection. */
    disconnect: handleUnaryCall<DisconnectRequest, DisconnectResponse>;
}

export interface ConnectionServiceClient extends Client {
    /** Returns the specified connection info. */
    get(
        request: GetConnectionRequest,
        callback: (error: ServiceError | null, response: Connection) => void,
    ): ClientUnaryCall;
    get(
        request: GetConnectionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Connection) => void,
    ): ClientUnaryCall;
    get(
        request: GetConnectionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Connection) => void,
    ): ClientUnaryCall;
    /** Sends data to the specified connection. */
    send(
        request: SendToConnectionRequest,
        callback: (error: ServiceError | null, response: SendToConnectionResponse) => void,
    ): ClientUnaryCall;
    send(
        request: SendToConnectionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: SendToConnectionResponse) => void,
    ): ClientUnaryCall;
    send(
        request: SendToConnectionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: SendToConnectionResponse) => void,
    ): ClientUnaryCall;
    /** Disconnects the specified connection. */
    disconnect(
        request: DisconnectRequest,
        callback: (error: ServiceError | null, response: DisconnectResponse) => void,
    ): ClientUnaryCall;
    disconnect(
        request: DisconnectRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: DisconnectResponse) => void,
    ): ClientUnaryCall;
    disconnect(
        request: DisconnectRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: DisconnectResponse) => void,
    ): ClientUnaryCall;
}

export const ConnectionServiceClient = makeGenericClientConstructor(
    ConnectionServiceService,
    'yandex.cloud.serverless.apigateway.websocket.v1.ConnectionService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ConnectionServiceClient;
    service: typeof ConnectionServiceService;
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
