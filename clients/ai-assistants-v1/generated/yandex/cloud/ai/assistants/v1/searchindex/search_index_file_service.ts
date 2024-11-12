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
import { SearchIndexFile } from '../../../../../../yandex/cloud/ai/assistants/v1/searchindex/search_index_file';

export const protobufPackage = 'yandex.cloud.ai.assistants.v1.searchindex';

export interface GetSearchIndexFileRequest {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.GetSearchIndexFileRequest';
    fileId: string;
    searchIndexId: string;
}

export interface ListSearchIndexFilesRequest {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.ListSearchIndexFilesRequest';
    searchIndexId: string;
    pageSize: number;
    pageToken: string;
}

export interface ListSearchIndexFilesResponse {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.ListSearchIndexFilesResponse';
    files: SearchIndexFile[];
    nextPageToken: string;
}

const baseGetSearchIndexFileRequest: object = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.GetSearchIndexFileRequest',
    fileId: '',
    searchIndexId: '',
};

export const GetSearchIndexFileRequest = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.GetSearchIndexFileRequest' as const,

    encode(
        message: GetSearchIndexFileRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.fileId !== '') {
            writer.uint32(10).string(message.fileId);
        }
        if (message.searchIndexId !== '') {
            writer.uint32(18).string(message.searchIndexId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetSearchIndexFileRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetSearchIndexFileRequest } as GetSearchIndexFileRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fileId = reader.string();
                    break;
                case 2:
                    message.searchIndexId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetSearchIndexFileRequest {
        const message = { ...baseGetSearchIndexFileRequest } as GetSearchIndexFileRequest;
        message.fileId =
            object.fileId !== undefined && object.fileId !== null ? String(object.fileId) : '';
        message.searchIndexId =
            object.searchIndexId !== undefined && object.searchIndexId !== null
                ? String(object.searchIndexId)
                : '';
        return message;
    },

    toJSON(message: GetSearchIndexFileRequest): unknown {
        const obj: any = {};
        message.fileId !== undefined && (obj.fileId = message.fileId);
        message.searchIndexId !== undefined && (obj.searchIndexId = message.searchIndexId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetSearchIndexFileRequest>, I>>(
        object: I,
    ): GetSearchIndexFileRequest {
        const message = { ...baseGetSearchIndexFileRequest } as GetSearchIndexFileRequest;
        message.fileId = object.fileId ?? '';
        message.searchIndexId = object.searchIndexId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetSearchIndexFileRequest.$type, GetSearchIndexFileRequest);

const baseListSearchIndexFilesRequest: object = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.ListSearchIndexFilesRequest',
    searchIndexId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListSearchIndexFilesRequest = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.ListSearchIndexFilesRequest' as const,

    encode(
        message: ListSearchIndexFilesRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.searchIndexId !== '') {
            writer.uint32(10).string(message.searchIndexId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListSearchIndexFilesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListSearchIndexFilesRequest } as ListSearchIndexFilesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.searchIndexId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListSearchIndexFilesRequest {
        const message = { ...baseListSearchIndexFilesRequest } as ListSearchIndexFilesRequest;
        message.searchIndexId =
            object.searchIndexId !== undefined && object.searchIndexId !== null
                ? String(object.searchIndexId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListSearchIndexFilesRequest): unknown {
        const obj: any = {};
        message.searchIndexId !== undefined && (obj.searchIndexId = message.searchIndexId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListSearchIndexFilesRequest>, I>>(
        object: I,
    ): ListSearchIndexFilesRequest {
        const message = { ...baseListSearchIndexFilesRequest } as ListSearchIndexFilesRequest;
        message.searchIndexId = object.searchIndexId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListSearchIndexFilesRequest.$type, ListSearchIndexFilesRequest);

const baseListSearchIndexFilesResponse: object = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.ListSearchIndexFilesResponse',
    nextPageToken: '',
};

export const ListSearchIndexFilesResponse = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.ListSearchIndexFilesResponse' as const,

    encode(
        message: ListSearchIndexFilesResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.files) {
            SearchIndexFile.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListSearchIndexFilesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListSearchIndexFilesResponse } as ListSearchIndexFilesResponse;
        message.files = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.files.push(SearchIndexFile.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListSearchIndexFilesResponse {
        const message = { ...baseListSearchIndexFilesResponse } as ListSearchIndexFilesResponse;
        message.files = (object.files ?? []).map((e: any) => SearchIndexFile.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListSearchIndexFilesResponse): unknown {
        const obj: any = {};
        if (message.files) {
            obj.files = message.files.map((e) => (e ? SearchIndexFile.toJSON(e) : undefined));
        } else {
            obj.files = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListSearchIndexFilesResponse>, I>>(
        object: I,
    ): ListSearchIndexFilesResponse {
        const message = { ...baseListSearchIndexFilesResponse } as ListSearchIndexFilesResponse;
        message.files = object.files?.map((e) => SearchIndexFile.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListSearchIndexFilesResponse.$type, ListSearchIndexFilesResponse);

export const SearchIndexFileServiceService = {
    get: {
        path: '/yandex.cloud.ai.assistants.v1.searchindex.SearchIndexFileService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetSearchIndexFileRequest) =>
            Buffer.from(GetSearchIndexFileRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetSearchIndexFileRequest.decode(value),
        responseSerialize: (value: SearchIndexFile) =>
            Buffer.from(SearchIndexFile.encode(value).finish()),
        responseDeserialize: (value: Buffer) => SearchIndexFile.decode(value),
    },
    list: {
        path: '/yandex.cloud.ai.assistants.v1.searchindex.SearchIndexFileService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListSearchIndexFilesRequest) =>
            Buffer.from(ListSearchIndexFilesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListSearchIndexFilesRequest.decode(value),
        responseSerialize: (value: ListSearchIndexFilesResponse) =>
            Buffer.from(ListSearchIndexFilesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListSearchIndexFilesResponse.decode(value),
    },
} as const;

export interface SearchIndexFileServiceServer extends UntypedServiceImplementation {
    get: handleUnaryCall<GetSearchIndexFileRequest, SearchIndexFile>;
    list: handleUnaryCall<ListSearchIndexFilesRequest, ListSearchIndexFilesResponse>;
}

export interface SearchIndexFileServiceClient extends Client {
    get(
        request: GetSearchIndexFileRequest,
        callback: (error: ServiceError | null, response: SearchIndexFile) => void,
    ): ClientUnaryCall;
    get(
        request: GetSearchIndexFileRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: SearchIndexFile) => void,
    ): ClientUnaryCall;
    get(
        request: GetSearchIndexFileRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: SearchIndexFile) => void,
    ): ClientUnaryCall;
    list(
        request: ListSearchIndexFilesRequest,
        callback: (error: ServiceError | null, response: ListSearchIndexFilesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListSearchIndexFilesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListSearchIndexFilesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListSearchIndexFilesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListSearchIndexFilesResponse) => void,
    ): ClientUnaryCall;
}

export const SearchIndexFileServiceClient = makeGenericClientConstructor(
    SearchIndexFileServiceService,
    'yandex.cloud.ai.assistants.v1.searchindex.SearchIndexFileService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): SearchIndexFileServiceClient;
    service: typeof SearchIndexFileServiceService;
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
