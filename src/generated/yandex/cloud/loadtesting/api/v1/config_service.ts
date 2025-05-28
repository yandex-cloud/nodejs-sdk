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
import { Config } from '../../../../../yandex/cloud/loadtesting/api/v1/config/config';
import { Operation } from '../../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.loadtesting.api.v1';

export interface CreateConfigRequest {
    /** ID of the folder to create a config in. */
    folderId: string;
    /** Config content provided as a string in YAML format. */
    yamlString: string | undefined;
    /** Name of the config. */
    name: string;
}

export interface CreateConfigMetadata {
    /** ID of the config that is being created. */
    configId: string;
}

export interface GetConfigRequest {
    /** ID of the config to return. */
    configId: string;
}

export interface ListConfigsRequest {
    /** ID of the folder to list configs in. */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListConfigsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListConfigsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /** A filter expression that filters tests listed in the response. */
    filter: string;
}

export interface ListConfigsResponse {
    /** List of configs in the specified folder. */
    configs: Config[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListConfigsRequest.page_size], use `next_page_token` as the value
     * for the [ListConfigsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface DeleteConfigRequest {
    /** ID of the config to deleted. */
    configId: string;
}

export interface DeleteConfigMetadata {
    /** ID of the config that is being deleted. */
    configId: string;
}

const baseCreateConfigRequest: object = { folderId: '', name: '' };

export const CreateConfigRequest = {
    encode(message: CreateConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.yamlString !== undefined) {
            writer.uint32(18).string(message.yamlString);
        }
        if (message.name !== '') {
            writer.uint32(82).string(message.name);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateConfigRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateConfigRequest } as CreateConfigRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.yamlString = reader.string();
                    break;
                case 10:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateConfigRequest {
        const message = { ...baseCreateConfigRequest } as CreateConfigRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.yamlString =
            object.yamlString !== undefined && object.yamlString !== null
                ? String(object.yamlString)
                : undefined;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        return message;
    },

    toJSON(message: CreateConfigRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.yamlString !== undefined && (obj.yamlString = message.yamlString);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateConfigRequest>, I>>(
        object: I,
    ): CreateConfigRequest {
        const message = { ...baseCreateConfigRequest } as CreateConfigRequest;
        message.folderId = object.folderId ?? '';
        message.yamlString = object.yamlString ?? undefined;
        message.name = object.name ?? '';
        return message;
    },
};

const baseCreateConfigMetadata: object = { configId: '' };

export const CreateConfigMetadata = {
    encode(message: CreateConfigMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.configId !== '') {
            writer.uint32(10).string(message.configId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateConfigMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateConfigMetadata } as CreateConfigMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateConfigMetadata {
        const message = { ...baseCreateConfigMetadata } as CreateConfigMetadata;
        message.configId =
            object.configId !== undefined && object.configId !== null
                ? String(object.configId)
                : '';
        return message;
    },

    toJSON(message: CreateConfigMetadata): unknown {
        const obj: any = {};
        message.configId !== undefined && (obj.configId = message.configId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateConfigMetadata>, I>>(
        object: I,
    ): CreateConfigMetadata {
        const message = { ...baseCreateConfigMetadata } as CreateConfigMetadata;
        message.configId = object.configId ?? '';
        return message;
    },
};

const baseGetConfigRequest: object = { configId: '' };

export const GetConfigRequest = {
    encode(message: GetConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.configId !== '') {
            writer.uint32(10).string(message.configId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetConfigRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetConfigRequest } as GetConfigRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetConfigRequest {
        const message = { ...baseGetConfigRequest } as GetConfigRequest;
        message.configId =
            object.configId !== undefined && object.configId !== null
                ? String(object.configId)
                : '';
        return message;
    },

    toJSON(message: GetConfigRequest): unknown {
        const obj: any = {};
        message.configId !== undefined && (obj.configId = message.configId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetConfigRequest>, I>>(object: I): GetConfigRequest {
        const message = { ...baseGetConfigRequest } as GetConfigRequest;
        message.configId = object.configId ?? '';
        return message;
    },
};

const baseListConfigsRequest: object = { folderId: '', pageSize: 0, pageToken: '', filter: '' };

export const ListConfigsRequest = {
    encode(message: ListConfigsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListConfigsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListConfigsRequest } as ListConfigsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListConfigsRequest {
        const message = { ...baseListConfigsRequest } as ListConfigsRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        return message;
    },

    toJSON(message: ListConfigsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListConfigsRequest>, I>>(
        object: I,
    ): ListConfigsRequest {
        const message = { ...baseListConfigsRequest } as ListConfigsRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListConfigsResponse: object = { nextPageToken: '' };

export const ListConfigsResponse = {
    encode(message: ListConfigsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.configs) {
            Config.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListConfigsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListConfigsResponse } as ListConfigsResponse;
        message.configs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configs.push(Config.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListConfigsResponse {
        const message = { ...baseListConfigsResponse } as ListConfigsResponse;
        message.configs = (object.configs ?? []).map((e: any) => Config.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListConfigsResponse): unknown {
        const obj: any = {};
        if (message.configs) {
            obj.configs = message.configs.map((e) => (e ? Config.toJSON(e) : undefined));
        } else {
            obj.configs = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListConfigsResponse>, I>>(
        object: I,
    ): ListConfigsResponse {
        const message = { ...baseListConfigsResponse } as ListConfigsResponse;
        message.configs = object.configs?.map((e) => Config.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseDeleteConfigRequest: object = { configId: '' };

export const DeleteConfigRequest = {
    encode(message: DeleteConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.configId !== '') {
            writer.uint32(10).string(message.configId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteConfigRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteConfigRequest } as DeleteConfigRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteConfigRequest {
        const message = { ...baseDeleteConfigRequest } as DeleteConfigRequest;
        message.configId =
            object.configId !== undefined && object.configId !== null
                ? String(object.configId)
                : '';
        return message;
    },

    toJSON(message: DeleteConfigRequest): unknown {
        const obj: any = {};
        message.configId !== undefined && (obj.configId = message.configId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteConfigRequest>, I>>(
        object: I,
    ): DeleteConfigRequest {
        const message = { ...baseDeleteConfigRequest } as DeleteConfigRequest;
        message.configId = object.configId ?? '';
        return message;
    },
};

const baseDeleteConfigMetadata: object = { configId: '' };

export const DeleteConfigMetadata = {
    encode(message: DeleteConfigMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.configId !== '') {
            writer.uint32(10).string(message.configId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteConfigMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteConfigMetadata } as DeleteConfigMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteConfigMetadata {
        const message = { ...baseDeleteConfigMetadata } as DeleteConfigMetadata;
        message.configId =
            object.configId !== undefined && object.configId !== null
                ? String(object.configId)
                : '';
        return message;
    },

    toJSON(message: DeleteConfigMetadata): unknown {
        const obj: any = {};
        message.configId !== undefined && (obj.configId = message.configId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteConfigMetadata>, I>>(
        object: I,
    ): DeleteConfigMetadata {
        const message = { ...baseDeleteConfigMetadata } as DeleteConfigMetadata;
        message.configId = object.configId ?? '';
        return message;
    },
};

/** A set of methods for managing test configurations. */
export const ConfigServiceService = {
    /** Creates a test config in the specified folder. */
    create: {
        path: '/yandex.cloud.loadtesting.api.v1.ConfigService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateConfigRequest) =>
            Buffer.from(CreateConfigRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateConfigRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Returns the specified config.
     *
     * To get the list of all available configs, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.loadtesting.api.v1.ConfigService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetConfigRequest) =>
            Buffer.from(GetConfigRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetConfigRequest.decode(value),
        responseSerialize: (value: Config) => Buffer.from(Config.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Config.decode(value),
    },
    /** Retrieves the list of configs in the specified folder. */
    list: {
        path: '/yandex.cloud.loadtesting.api.v1.ConfigService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListConfigsRequest) =>
            Buffer.from(ListConfigsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListConfigsRequest.decode(value),
        responseSerialize: (value: ListConfigsResponse) =>
            Buffer.from(ListConfigsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListConfigsResponse.decode(value),
    },
    /** Deletes the specified config. */
    delete: {
        path: '/yandex.cloud.loadtesting.api.v1.ConfigService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteConfigRequest) =>
            Buffer.from(DeleteConfigRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteConfigRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface ConfigServiceServer extends UntypedServiceImplementation {
    /** Creates a test config in the specified folder. */
    create: handleUnaryCall<CreateConfigRequest, Operation>;
    /**
     * Returns the specified config.
     *
     * To get the list of all available configs, make a [List] request.
     */
    get: handleUnaryCall<GetConfigRequest, Config>;
    /** Retrieves the list of configs in the specified folder. */
    list: handleUnaryCall<ListConfigsRequest, ListConfigsResponse>;
    /** Deletes the specified config. */
    delete: handleUnaryCall<DeleteConfigRequest, Operation>;
}

export interface ConfigServiceClient extends Client {
    /** Creates a test config in the specified folder. */
    create(
        request: CreateConfigRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateConfigRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateConfigRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Returns the specified config.
     *
     * To get the list of all available configs, make a [List] request.
     */
    get(
        request: GetConfigRequest,
        callback: (error: ServiceError | null, response: Config) => void,
    ): ClientUnaryCall;
    get(
        request: GetConfigRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Config) => void,
    ): ClientUnaryCall;
    get(
        request: GetConfigRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Config) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of configs in the specified folder. */
    list(
        request: ListConfigsRequest,
        callback: (error: ServiceError | null, response: ListConfigsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListConfigsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListConfigsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListConfigsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListConfigsResponse) => void,
    ): ClientUnaryCall;
    /** Deletes the specified config. */
    delete(
        request: DeleteConfigRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteConfigRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteConfigRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const ConfigServiceClient = makeGenericClientConstructor(
    ConfigServiceService,
    'yandex.cloud.loadtesting.api.v1.ConfigService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ConfigServiceClient;
    service: typeof ConfigServiceService;
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
