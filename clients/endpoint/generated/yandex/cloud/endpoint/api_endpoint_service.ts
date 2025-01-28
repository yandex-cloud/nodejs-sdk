/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
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
import { ApiEndpoint } from '../../../yandex/cloud/endpoint/api_endpoint';

export const protobufPackage = 'yandex.cloud.endpoint';

export interface GetApiEndpointRequest {
    $type: 'yandex.cloud.endpoint.GetApiEndpointRequest';
    apiEndpointId: string;
}

export interface ListApiEndpointsRequest {
    $type: 'yandex.cloud.endpoint.ListApiEndpointsRequest';
    /** @deprecated */
    pageSize: number;
    /** @deprecated */
    pageToken: string;
}

export interface ListApiEndpointsResponse {
    $type: 'yandex.cloud.endpoint.ListApiEndpointsResponse';
    endpoints: ApiEndpoint[];
    nextPageToken: string;
}

const baseGetApiEndpointRequest: object = {
    $type: 'yandex.cloud.endpoint.GetApiEndpointRequest',
    apiEndpointId: '',
};

export const GetApiEndpointRequest = {
    $type: 'yandex.cloud.endpoint.GetApiEndpointRequest' as const,

    encode(message: GetApiEndpointRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.apiEndpointId !== '') {
            writer.uint32(10).string(message.apiEndpointId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetApiEndpointRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetApiEndpointRequest } as GetApiEndpointRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiEndpointId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetApiEndpointRequest {
        const message = { ...baseGetApiEndpointRequest } as GetApiEndpointRequest;
        message.apiEndpointId =
            object.apiEndpointId !== undefined && object.apiEndpointId !== null
                ? String(object.apiEndpointId)
                : '';
        return message;
    },

    toJSON(message: GetApiEndpointRequest): unknown {
        const obj: any = {};
        message.apiEndpointId !== undefined && (obj.apiEndpointId = message.apiEndpointId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetApiEndpointRequest>, I>>(
        object: I,
    ): GetApiEndpointRequest {
        const message = { ...baseGetApiEndpointRequest } as GetApiEndpointRequest;
        message.apiEndpointId = object.apiEndpointId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetApiEndpointRequest.$type, GetApiEndpointRequest);

const baseListApiEndpointsRequest: object = {
    $type: 'yandex.cloud.endpoint.ListApiEndpointsRequest',
    pageSize: 0,
    pageToken: '',
};

export const ListApiEndpointsRequest = {
    $type: 'yandex.cloud.endpoint.ListApiEndpointsRequest' as const,

    encode(message: ListApiEndpointsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.pageSize !== 0) {
            writer.uint32(8).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(18).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListApiEndpointsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListApiEndpointsRequest } as ListApiEndpointsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListApiEndpointsRequest {
        const message = { ...baseListApiEndpointsRequest } as ListApiEndpointsRequest;
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListApiEndpointsRequest): unknown {
        const obj: any = {};
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListApiEndpointsRequest>, I>>(
        object: I,
    ): ListApiEndpointsRequest {
        const message = { ...baseListApiEndpointsRequest } as ListApiEndpointsRequest;
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListApiEndpointsRequest.$type, ListApiEndpointsRequest);

const baseListApiEndpointsResponse: object = {
    $type: 'yandex.cloud.endpoint.ListApiEndpointsResponse',
    nextPageToken: '',
};

export const ListApiEndpointsResponse = {
    $type: 'yandex.cloud.endpoint.ListApiEndpointsResponse' as const,

    encode(
        message: ListApiEndpointsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.endpoints) {
            ApiEndpoint.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListApiEndpointsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListApiEndpointsResponse } as ListApiEndpointsResponse;
        message.endpoints = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.endpoints.push(ApiEndpoint.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListApiEndpointsResponse {
        const message = { ...baseListApiEndpointsResponse } as ListApiEndpointsResponse;
        message.endpoints = (object.endpoints ?? []).map((e: any) => ApiEndpoint.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListApiEndpointsResponse): unknown {
        const obj: any = {};
        if (message.endpoints) {
            obj.endpoints = message.endpoints.map((e) => (e ? ApiEndpoint.toJSON(e) : undefined));
        } else {
            obj.endpoints = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListApiEndpointsResponse>, I>>(
        object: I,
    ): ListApiEndpointsResponse {
        const message = { ...baseListApiEndpointsResponse } as ListApiEndpointsResponse;
        message.endpoints = object.endpoints?.map((e) => ApiEndpoint.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListApiEndpointsResponse.$type, ListApiEndpointsResponse);

export const ApiEndpointServiceService = {
    get: {
        path: '/yandex.cloud.endpoint.ApiEndpointService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetApiEndpointRequest) =>
            Buffer.from(GetApiEndpointRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetApiEndpointRequest.decode(value),
        responseSerialize: (value: ApiEndpoint) => Buffer.from(ApiEndpoint.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ApiEndpoint.decode(value),
    },
    list: {
        path: '/yandex.cloud.endpoint.ApiEndpointService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListApiEndpointsRequest) =>
            Buffer.from(ListApiEndpointsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListApiEndpointsRequest.decode(value),
        responseSerialize: (value: ListApiEndpointsResponse) =>
            Buffer.from(ListApiEndpointsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListApiEndpointsResponse.decode(value),
    },
} as const;

export interface ApiEndpointServiceServer extends UntypedServiceImplementation {
    get: handleUnaryCall<GetApiEndpointRequest, ApiEndpoint>;
    list: handleUnaryCall<ListApiEndpointsRequest, ListApiEndpointsResponse>;
}

export interface ApiEndpointServiceClient extends Client {
    get(
        request: GetApiEndpointRequest,
        callback: (error: ServiceError | null, response: ApiEndpoint) => void,
    ): ClientUnaryCall;
    get(
        request: GetApiEndpointRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ApiEndpoint) => void,
    ): ClientUnaryCall;
    get(
        request: GetApiEndpointRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ApiEndpoint) => void,
    ): ClientUnaryCall;
    list(
        request: ListApiEndpointsRequest,
        callback: (error: ServiceError | null, response: ListApiEndpointsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListApiEndpointsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListApiEndpointsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListApiEndpointsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListApiEndpointsResponse) => void,
    ): ClientUnaryCall;
}

export const ApiEndpointServiceClient = makeGenericClientConstructor(
    ApiEndpointServiceService,
    'yandex.cloud.endpoint.ApiEndpointService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ApiEndpointServiceClient;
    service: typeof ApiEndpointServiceService;
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

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
