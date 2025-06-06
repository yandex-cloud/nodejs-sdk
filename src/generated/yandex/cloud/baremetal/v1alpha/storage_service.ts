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
import { Storage } from '../../../../yandex/cloud/baremetal/v1alpha/storage';

export const protobufPackage = 'yandex.cloud.baremetal.v1alpha';

export interface DefaultStorage {
    /**
     * ID of the configuration.
     *
     * To get the configuration ID, use a [ConfigurationService.List] request.
     */
    configurationId: string;
    /** List of default storages. */
    storages: Storage[];
}

export interface GetDefaultStorageRequest {
    /** ID of the configuration. */
    configurationId: string;
}

export interface BatchGetDefaultStoragesRequest {
    /** List of configuration IDs. */
    configurationIds: string[];
}

export interface BatchGetDefaultStoragesResponse {
    /** List of default storages. */
    defaultStorages: DefaultStorage[];
}

const baseDefaultStorage: object = { configurationId: '' };

export const DefaultStorage = {
    encode(message: DefaultStorage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.configurationId !== '') {
            writer.uint32(10).string(message.configurationId);
        }
        for (const v of message.storages) {
            Storage.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DefaultStorage {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDefaultStorage } as DefaultStorage;
        message.storages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configurationId = reader.string();
                    break;
                case 2:
                    message.storages.push(Storage.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DefaultStorage {
        const message = { ...baseDefaultStorage } as DefaultStorage;
        message.configurationId =
            object.configurationId !== undefined && object.configurationId !== null
                ? String(object.configurationId)
                : '';
        message.storages = (object.storages ?? []).map((e: any) => Storage.fromJSON(e));
        return message;
    },

    toJSON(message: DefaultStorage): unknown {
        const obj: any = {};
        message.configurationId !== undefined && (obj.configurationId = message.configurationId);
        if (message.storages) {
            obj.storages = message.storages.map((e) => (e ? Storage.toJSON(e) : undefined));
        } else {
            obj.storages = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DefaultStorage>, I>>(object: I): DefaultStorage {
        const message = { ...baseDefaultStorage } as DefaultStorage;
        message.configurationId = object.configurationId ?? '';
        message.storages = object.storages?.map((e) => Storage.fromPartial(e)) || [];
        return message;
    },
};

const baseGetDefaultStorageRequest: object = { configurationId: '' };

export const GetDefaultStorageRequest = {
    encode(
        message: GetDefaultStorageRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.configurationId !== '') {
            writer.uint32(10).string(message.configurationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetDefaultStorageRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetDefaultStorageRequest } as GetDefaultStorageRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configurationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetDefaultStorageRequest {
        const message = { ...baseGetDefaultStorageRequest } as GetDefaultStorageRequest;
        message.configurationId =
            object.configurationId !== undefined && object.configurationId !== null
                ? String(object.configurationId)
                : '';
        return message;
    },

    toJSON(message: GetDefaultStorageRequest): unknown {
        const obj: any = {};
        message.configurationId !== undefined && (obj.configurationId = message.configurationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetDefaultStorageRequest>, I>>(
        object: I,
    ): GetDefaultStorageRequest {
        const message = { ...baseGetDefaultStorageRequest } as GetDefaultStorageRequest;
        message.configurationId = object.configurationId ?? '';
        return message;
    },
};

const baseBatchGetDefaultStoragesRequest: object = { configurationIds: '' };

export const BatchGetDefaultStoragesRequest = {
    encode(
        message: BatchGetDefaultStoragesRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.configurationIds) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchGetDefaultStoragesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchGetDefaultStoragesRequest } as BatchGetDefaultStoragesRequest;
        message.configurationIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configurationIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchGetDefaultStoragesRequest {
        const message = { ...baseBatchGetDefaultStoragesRequest } as BatchGetDefaultStoragesRequest;
        message.configurationIds = (object.configurationIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: BatchGetDefaultStoragesRequest): unknown {
        const obj: any = {};
        if (message.configurationIds) {
            obj.configurationIds = message.configurationIds.map((e) => e);
        } else {
            obj.configurationIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchGetDefaultStoragesRequest>, I>>(
        object: I,
    ): BatchGetDefaultStoragesRequest {
        const message = { ...baseBatchGetDefaultStoragesRequest } as BatchGetDefaultStoragesRequest;
        message.configurationIds = object.configurationIds?.map((e) => e) || [];
        return message;
    },
};

const baseBatchGetDefaultStoragesResponse: object = {};

export const BatchGetDefaultStoragesResponse = {
    encode(
        message: BatchGetDefaultStoragesResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.defaultStorages) {
            DefaultStorage.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchGetDefaultStoragesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseBatchGetDefaultStoragesResponse,
        } as BatchGetDefaultStoragesResponse;
        message.defaultStorages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.defaultStorages.push(DefaultStorage.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchGetDefaultStoragesResponse {
        const message = {
            ...baseBatchGetDefaultStoragesResponse,
        } as BatchGetDefaultStoragesResponse;
        message.defaultStorages = (object.defaultStorages ?? []).map((e: any) =>
            DefaultStorage.fromJSON(e),
        );
        return message;
    },

    toJSON(message: BatchGetDefaultStoragesResponse): unknown {
        const obj: any = {};
        if (message.defaultStorages) {
            obj.defaultStorages = message.defaultStorages.map((e) =>
                e ? DefaultStorage.toJSON(e) : undefined,
            );
        } else {
            obj.defaultStorages = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchGetDefaultStoragesResponse>, I>>(
        object: I,
    ): BatchGetDefaultStoragesResponse {
        const message = {
            ...baseBatchGetDefaultStoragesResponse,
        } as BatchGetDefaultStoragesResponse;
        message.defaultStorages =
            object.defaultStorages?.map((e) => DefaultStorage.fromPartial(e)) || [];
        return message;
    },
};

/** A set of methods to retrieve information about default storages. */
export const StorageServiceService = {
    /** Returns the default storage for the specified configuration. */
    getDefault: {
        path: '/yandex.cloud.baremetal.v1alpha.StorageService/GetDefault',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetDefaultStorageRequest) =>
            Buffer.from(GetDefaultStorageRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetDefaultStorageRequest.decode(value),
        responseSerialize: (value: DefaultStorage) =>
            Buffer.from(DefaultStorage.encode(value).finish()),
        responseDeserialize: (value: Buffer) => DefaultStorage.decode(value),
    },
    /** Returns the default storages for the specified configurations. */
    batchGetDefault: {
        path: '/yandex.cloud.baremetal.v1alpha.StorageService/BatchGetDefault',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: BatchGetDefaultStoragesRequest) =>
            Buffer.from(BatchGetDefaultStoragesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => BatchGetDefaultStoragesRequest.decode(value),
        responseSerialize: (value: BatchGetDefaultStoragesResponse) =>
            Buffer.from(BatchGetDefaultStoragesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => BatchGetDefaultStoragesResponse.decode(value),
    },
} as const;

export interface StorageServiceServer extends UntypedServiceImplementation {
    /** Returns the default storage for the specified configuration. */
    getDefault: handleUnaryCall<GetDefaultStorageRequest, DefaultStorage>;
    /** Returns the default storages for the specified configurations. */
    batchGetDefault: handleUnaryCall<
        BatchGetDefaultStoragesRequest,
        BatchGetDefaultStoragesResponse
    >;
}

export interface StorageServiceClient extends Client {
    /** Returns the default storage for the specified configuration. */
    getDefault(
        request: GetDefaultStorageRequest,
        callback: (error: ServiceError | null, response: DefaultStorage) => void,
    ): ClientUnaryCall;
    getDefault(
        request: GetDefaultStorageRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: DefaultStorage) => void,
    ): ClientUnaryCall;
    getDefault(
        request: GetDefaultStorageRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: DefaultStorage) => void,
    ): ClientUnaryCall;
    /** Returns the default storages for the specified configurations. */
    batchGetDefault(
        request: BatchGetDefaultStoragesRequest,
        callback: (error: ServiceError | null, response: BatchGetDefaultStoragesResponse) => void,
    ): ClientUnaryCall;
    batchGetDefault(
        request: BatchGetDefaultStoragesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: BatchGetDefaultStoragesResponse) => void,
    ): ClientUnaryCall;
    batchGetDefault(
        request: BatchGetDefaultStoragesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: BatchGetDefaultStoragesResponse) => void,
    ): ClientUnaryCall;
}

export const StorageServiceClient = makeGenericClientConstructor(
    StorageServiceService,
    'yandex.cloud.baremetal.v1alpha.StorageService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): StorageServiceClient;
    service: typeof StorageServiceService;
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
