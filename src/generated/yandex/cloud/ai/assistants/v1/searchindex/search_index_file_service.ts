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
import { Operation } from '../../../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.ai.assistants.v1.searchindex';

/** Request message for creating multiple files within a search index. */
export interface BatchCreateSearchIndexFileRequest {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.BatchCreateSearchIndexFileRequest';
    fileIds: string[];
    searchIndexId: string;
}

/** Response message for the BatchCreate operation. */
export interface BatchCreateSearchIndexFileResponse {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.BatchCreateSearchIndexFileResponse';
    files: SearchIndexFile[];
}

/** Request message for retrieving a file from a search index. */
export interface GetSearchIndexFileRequest {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.GetSearchIndexFileRequest';
    /** ID of the file to retrieve. */
    fileId: string;
    /** ID of the search index that contains the file. */
    searchIndexId: string;
}

/** Request message for listing files in a specific search index. */
export interface ListSearchIndexFilesRequest {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.ListSearchIndexFilesRequest';
    /** ID of the search index whose files will be listed. */
    searchIndexId: string;
    /** Maximum number of files to return per page. */
    pageSize: number;
    /** Token to retrieve the next page of results. */
    pageToken: string;
}

/** Response message for the list operation. */
export interface ListSearchIndexFilesResponse {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.ListSearchIndexFilesResponse';
    /** List of files in the specified search index. */
    files: SearchIndexFile[];
    /** Token to retrieve the next page of results. */
    nextPageToken: string;
}

const baseBatchCreateSearchIndexFileRequest: object = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.BatchCreateSearchIndexFileRequest',
    fileIds: '',
    searchIndexId: '',
};

export const BatchCreateSearchIndexFileRequest = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.BatchCreateSearchIndexFileRequest' as const,

    encode(
        message: BatchCreateSearchIndexFileRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.fileIds) {
            writer.uint32(10).string(v!);
        }
        if (message.searchIndexId !== '') {
            writer.uint32(18).string(message.searchIndexId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchCreateSearchIndexFileRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseBatchCreateSearchIndexFileRequest,
        } as BatchCreateSearchIndexFileRequest;
        message.fileIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fileIds.push(reader.string());
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

    fromJSON(object: any): BatchCreateSearchIndexFileRequest {
        const message = {
            ...baseBatchCreateSearchIndexFileRequest,
        } as BatchCreateSearchIndexFileRequest;
        message.fileIds = (object.fileIds ?? []).map((e: any) => String(e));
        message.searchIndexId =
            object.searchIndexId !== undefined && object.searchIndexId !== null
                ? String(object.searchIndexId)
                : '';
        return message;
    },

    toJSON(message: BatchCreateSearchIndexFileRequest): unknown {
        const obj: any = {};
        if (message.fileIds) {
            obj.fileIds = message.fileIds.map((e) => e);
        } else {
            obj.fileIds = [];
        }
        message.searchIndexId !== undefined && (obj.searchIndexId = message.searchIndexId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchCreateSearchIndexFileRequest>, I>>(
        object: I,
    ): BatchCreateSearchIndexFileRequest {
        const message = {
            ...baseBatchCreateSearchIndexFileRequest,
        } as BatchCreateSearchIndexFileRequest;
        message.fileIds = object.fileIds?.map((e) => e) || [];
        message.searchIndexId = object.searchIndexId ?? '';
        return message;
    },
};

messageTypeRegistry.set(BatchCreateSearchIndexFileRequest.$type, BatchCreateSearchIndexFileRequest);

const baseBatchCreateSearchIndexFileResponse: object = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.BatchCreateSearchIndexFileResponse',
};

export const BatchCreateSearchIndexFileResponse = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.BatchCreateSearchIndexFileResponse' as const,

    encode(
        message: BatchCreateSearchIndexFileResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.files) {
            SearchIndexFile.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchCreateSearchIndexFileResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseBatchCreateSearchIndexFileResponse,
        } as BatchCreateSearchIndexFileResponse;
        message.files = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.files.push(SearchIndexFile.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchCreateSearchIndexFileResponse {
        const message = {
            ...baseBatchCreateSearchIndexFileResponse,
        } as BatchCreateSearchIndexFileResponse;
        message.files = (object.files ?? []).map((e: any) => SearchIndexFile.fromJSON(e));
        return message;
    },

    toJSON(message: BatchCreateSearchIndexFileResponse): unknown {
        const obj: any = {};
        if (message.files) {
            obj.files = message.files.map((e) => (e ? SearchIndexFile.toJSON(e) : undefined));
        } else {
            obj.files = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchCreateSearchIndexFileResponse>, I>>(
        object: I,
    ): BatchCreateSearchIndexFileResponse {
        const message = {
            ...baseBatchCreateSearchIndexFileResponse,
        } as BatchCreateSearchIndexFileResponse;
        message.files = object.files?.map((e) => SearchIndexFile.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(
    BatchCreateSearchIndexFileResponse.$type,
    BatchCreateSearchIndexFileResponse,
);

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

/** SearchIndexFileService provides operations for managing files within search indexes. */
export const SearchIndexFileServiceService = {
    /** Creates multiple files within a search index in [asynchronous mode](/docs/foundation-models/concepts/#working-mode). */
    batchCreate: {
        path: '/yandex.cloud.ai.assistants.v1.searchindex.SearchIndexFileService/BatchCreate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: BatchCreateSearchIndexFileRequest) =>
            Buffer.from(BatchCreateSearchIndexFileRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => BatchCreateSearchIndexFileRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Retrieves details of a specific file that has been indexed within a search index. */
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
    /** List files that are indexed within a specific search index. */
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
    /** Creates multiple files within a search index in [asynchronous mode](/docs/foundation-models/concepts/#working-mode). */
    batchCreate: handleUnaryCall<BatchCreateSearchIndexFileRequest, Operation>;
    /** Retrieves details of a specific file that has been indexed within a search index. */
    get: handleUnaryCall<GetSearchIndexFileRequest, SearchIndexFile>;
    /** List files that are indexed within a specific search index. */
    list: handleUnaryCall<ListSearchIndexFilesRequest, ListSearchIndexFilesResponse>;
}

export interface SearchIndexFileServiceClient extends Client {
    /** Creates multiple files within a search index in [asynchronous mode](/docs/foundation-models/concepts/#working-mode). */
    batchCreate(
        request: BatchCreateSearchIndexFileRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    batchCreate(
        request: BatchCreateSearchIndexFileRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    batchCreate(
        request: BatchCreateSearchIndexFileRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Retrieves details of a specific file that has been indexed within a search index. */
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
    /** List files that are indexed within a specific search index. */
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
