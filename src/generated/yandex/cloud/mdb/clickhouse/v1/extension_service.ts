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
import { Extension } from '../../../../../yandex/cloud/mdb/clickhouse/v1/extension';

export const protobufPackage = 'yandex.cloud.mdb.clickhouse.v1';

export interface GetExtensionRequest {
    extensionName: string;
    folderId: string;
}

export interface ListExtensionsRequest {
    pageSize: number;
    pageToken: string;
    folderId: string;
}

export interface ListExtensionsResponse {
    extensions: Extension[];
    nextPageToken: string;
}

const baseGetExtensionRequest: object = { extensionName: '', folderId: '' };

export const GetExtensionRequest = {
    encode(message: GetExtensionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.extensionName !== '') {
            writer.uint32(10).string(message.extensionName);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetExtensionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetExtensionRequest } as GetExtensionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.extensionName = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetExtensionRequest {
        const message = { ...baseGetExtensionRequest } as GetExtensionRequest;
        message.extensionName =
            object.extensionName !== undefined && object.extensionName !== null
                ? String(object.extensionName)
                : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        return message;
    },

    toJSON(message: GetExtensionRequest): unknown {
        const obj: any = {};
        message.extensionName !== undefined && (obj.extensionName = message.extensionName);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetExtensionRequest>, I>>(
        object: I,
    ): GetExtensionRequest {
        const message = { ...baseGetExtensionRequest } as GetExtensionRequest;
        message.extensionName = object.extensionName ?? '';
        message.folderId = object.folderId ?? '';
        return message;
    },
};

const baseListExtensionsRequest: object = { pageSize: 0, pageToken: '', folderId: '' };

export const ListExtensionsRequest = {
    encode(message: ListExtensionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.pageSize !== 0) {
            writer.uint32(8).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(18).string(message.pageToken);
        }
        if (message.folderId !== '') {
            writer.uint32(26).string(message.folderId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListExtensionsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListExtensionsRequest } as ListExtensionsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.pageToken = reader.string();
                    break;
                case 3:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListExtensionsRequest {
        const message = { ...baseListExtensionsRequest } as ListExtensionsRequest;
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        return message;
    },

    toJSON(message: ListExtensionsRequest): unknown {
        const obj: any = {};
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListExtensionsRequest>, I>>(
        object: I,
    ): ListExtensionsRequest {
        const message = { ...baseListExtensionsRequest } as ListExtensionsRequest;
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.folderId = object.folderId ?? '';
        return message;
    },
};

const baseListExtensionsResponse: object = { nextPageToken: '' };

export const ListExtensionsResponse = {
    encode(message: ListExtensionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.extensions) {
            Extension.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListExtensionsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListExtensionsResponse } as ListExtensionsResponse;
        message.extensions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.extensions.push(Extension.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListExtensionsResponse {
        const message = { ...baseListExtensionsResponse } as ListExtensionsResponse;
        message.extensions = (object.extensions ?? []).map((e: any) => Extension.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListExtensionsResponse): unknown {
        const obj: any = {};
        if (message.extensions) {
            obj.extensions = message.extensions.map((e) => (e ? Extension.toJSON(e) : undefined));
        } else {
            obj.extensions = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListExtensionsResponse>, I>>(
        object: I,
    ): ListExtensionsResponse {
        const message = { ...baseListExtensionsResponse } as ListExtensionsResponse;
        message.extensions = object.extensions?.map((e) => Extension.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

export const ExtensionServiceService = {
    get: {
        path: '/yandex.cloud.mdb.clickhouse.v1.ExtensionService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetExtensionRequest) =>
            Buffer.from(GetExtensionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetExtensionRequest.decode(value),
        responseSerialize: (value: Extension) => Buffer.from(Extension.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Extension.decode(value),
    },
    list: {
        path: '/yandex.cloud.mdb.clickhouse.v1.ExtensionService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListExtensionsRequest) =>
            Buffer.from(ListExtensionsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListExtensionsRequest.decode(value),
        responseSerialize: (value: ListExtensionsResponse) =>
            Buffer.from(ListExtensionsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListExtensionsResponse.decode(value),
    },
} as const;

export interface ExtensionServiceServer extends UntypedServiceImplementation {
    get: handleUnaryCall<GetExtensionRequest, Extension>;
    list: handleUnaryCall<ListExtensionsRequest, ListExtensionsResponse>;
}

export interface ExtensionServiceClient extends Client {
    get(
        request: GetExtensionRequest,
        callback: (error: ServiceError | null, response: Extension) => void,
    ): ClientUnaryCall;
    get(
        request: GetExtensionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Extension) => void,
    ): ClientUnaryCall;
    get(
        request: GetExtensionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Extension) => void,
    ): ClientUnaryCall;
    list(
        request: ListExtensionsRequest,
        callback: (error: ServiceError | null, response: ListExtensionsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListExtensionsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListExtensionsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListExtensionsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListExtensionsResponse) => void,
    ): ClientUnaryCall;
}

export const ExtensionServiceClient = makeGenericClientConstructor(
    ExtensionServiceService,
    'yandex.cloud.mdb.clickhouse.v1.ExtensionService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ExtensionServiceClient;
    service: typeof ExtensionServiceService;
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
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

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
