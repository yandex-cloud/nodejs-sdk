/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
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
import { Backup } from '../../../../yandex/cloud/ydb/v1/backup';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../../../yandex/cloud/access/access';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.ydb.v1';

export interface ListPathsRequest {
    $type: 'yandex.cloud.ydb.v1.ListPathsRequest';
    /** Required. ID of the YDB backup. */
    backupId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a `next_page_token` that can be used
     * to get the next page of results in subsequent ListPaths requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set `page_token` to the `next_page_token` returned by a previous ListPaths
     * request to get the next page of results.
     */
    pageToken: string;
}

export interface ListPathsResponse {
    $type: 'yandex.cloud.ydb.v1.ListPathsResponse';
    paths: string[];
    nextPageToken: string;
}

export interface GetBackupRequest {
    $type: 'yandex.cloud.ydb.v1.GetBackupRequest';
    /** Required. ID of the YDB backup. */
    backupId: string;
}

export interface ListBackupsRequest {
    $type: 'yandex.cloud.ydb.v1.ListBackupsRequest';
    folderId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a `next_page_token` that can be used
     * to get the next page of results in subsequent ListBackups requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set `page_token` to the `next_page_token` returned by a previous ListBackups
     * request to get the next page of results.
     */
    pageToken: string;
}

export interface ListBackupsResponse {
    $type: 'yandex.cloud.ydb.v1.ListBackupsResponse';
    backups: Backup[];
    /**
     * This token allows you to get the next page of results for ListBackups requests,
     * if the number of results is larger than `page_size` specified in the request.
     * To get the next page, specify the value of `next_page_token` as a value for
     * the `page_token` parameter in the next ListBackups request. Subsequent ListBackups
     * requests will have their own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface DeleteBackupRequest {
    $type: 'yandex.cloud.ydb.v1.DeleteBackupRequest';
    backupId: string;
}

export interface DeleteBackupMetadata {
    $type: 'yandex.cloud.ydb.v1.DeleteBackupMetadata';
    backupId: string;
    databaseId: string;
}

const baseListPathsRequest: object = {
    $type: 'yandex.cloud.ydb.v1.ListPathsRequest',
    backupId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListPathsRequest = {
    $type: 'yandex.cloud.ydb.v1.ListPathsRequest' as const,

    encode(message: ListPathsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.backupId !== '') {
            writer.uint32(10).string(message.backupId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListPathsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListPathsRequest } as ListPathsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backupId = reader.string();
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

    fromJSON(object: any): ListPathsRequest {
        const message = { ...baseListPathsRequest } as ListPathsRequest;
        message.backupId =
            object.backupId !== undefined && object.backupId !== null
                ? String(object.backupId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListPathsRequest): unknown {
        const obj: any = {};
        message.backupId !== undefined && (obj.backupId = message.backupId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPathsRequest>, I>>(object: I): ListPathsRequest {
        const message = { ...baseListPathsRequest } as ListPathsRequest;
        message.backupId = object.backupId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListPathsRequest.$type, ListPathsRequest);

const baseListPathsResponse: object = {
    $type: 'yandex.cloud.ydb.v1.ListPathsResponse',
    paths: '',
    nextPageToken: '',
};

export const ListPathsResponse = {
    $type: 'yandex.cloud.ydb.v1.ListPathsResponse' as const,

    encode(message: ListPathsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.paths) {
            writer.uint32(10).string(v!);
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListPathsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListPathsResponse } as ListPathsResponse;
        message.paths = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.paths.push(reader.string());
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

    fromJSON(object: any): ListPathsResponse {
        const message = { ...baseListPathsResponse } as ListPathsResponse;
        message.paths = (object.paths ?? []).map((e: any) => String(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListPathsResponse): unknown {
        const obj: any = {};
        if (message.paths) {
            obj.paths = message.paths.map((e) => e);
        } else {
            obj.paths = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPathsResponse>, I>>(object: I): ListPathsResponse {
        const message = { ...baseListPathsResponse } as ListPathsResponse;
        message.paths = object.paths?.map((e) => e) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListPathsResponse.$type, ListPathsResponse);

const baseGetBackupRequest: object = {
    $type: 'yandex.cloud.ydb.v1.GetBackupRequest',
    backupId: '',
};

export const GetBackupRequest = {
    $type: 'yandex.cloud.ydb.v1.GetBackupRequest' as const,

    encode(message: GetBackupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.backupId !== '') {
            writer.uint32(10).string(message.backupId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetBackupRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetBackupRequest } as GetBackupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetBackupRequest {
        const message = { ...baseGetBackupRequest } as GetBackupRequest;
        message.backupId =
            object.backupId !== undefined && object.backupId !== null
                ? String(object.backupId)
                : '';
        return message;
    },

    toJSON(message: GetBackupRequest): unknown {
        const obj: any = {};
        message.backupId !== undefined && (obj.backupId = message.backupId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetBackupRequest>, I>>(object: I): GetBackupRequest {
        const message = { ...baseGetBackupRequest } as GetBackupRequest;
        message.backupId = object.backupId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetBackupRequest.$type, GetBackupRequest);

const baseListBackupsRequest: object = {
    $type: 'yandex.cloud.ydb.v1.ListBackupsRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListBackupsRequest = {
    $type: 'yandex.cloud.ydb.v1.ListBackupsRequest' as const,

    encode(message: ListBackupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListBackupsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListBackupsRequest } as ListBackupsRequest;
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListBackupsRequest {
        const message = { ...baseListBackupsRequest } as ListBackupsRequest;
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
        return message;
    },

    toJSON(message: ListBackupsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListBackupsRequest>, I>>(
        object: I,
    ): ListBackupsRequest {
        const message = { ...baseListBackupsRequest } as ListBackupsRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListBackupsRequest.$type, ListBackupsRequest);

const baseListBackupsResponse: object = {
    $type: 'yandex.cloud.ydb.v1.ListBackupsResponse',
    nextPageToken: '',
};

export const ListBackupsResponse = {
    $type: 'yandex.cloud.ydb.v1.ListBackupsResponse' as const,

    encode(message: ListBackupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.backups) {
            Backup.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListBackupsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListBackupsResponse } as ListBackupsResponse;
        message.backups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backups.push(Backup.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListBackupsResponse {
        const message = { ...baseListBackupsResponse } as ListBackupsResponse;
        message.backups = (object.backups ?? []).map((e: any) => Backup.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListBackupsResponse): unknown {
        const obj: any = {};
        if (message.backups) {
            obj.backups = message.backups.map((e) => (e ? Backup.toJSON(e) : undefined));
        } else {
            obj.backups = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListBackupsResponse>, I>>(
        object: I,
    ): ListBackupsResponse {
        const message = { ...baseListBackupsResponse } as ListBackupsResponse;
        message.backups = object.backups?.map((e) => Backup.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListBackupsResponse.$type, ListBackupsResponse);

const baseDeleteBackupRequest: object = {
    $type: 'yandex.cloud.ydb.v1.DeleteBackupRequest',
    backupId: '',
};

export const DeleteBackupRequest = {
    $type: 'yandex.cloud.ydb.v1.DeleteBackupRequest' as const,

    encode(message: DeleteBackupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.backupId !== '') {
            writer.uint32(10).string(message.backupId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBackupRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteBackupRequest } as DeleteBackupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteBackupRequest {
        const message = { ...baseDeleteBackupRequest } as DeleteBackupRequest;
        message.backupId =
            object.backupId !== undefined && object.backupId !== null
                ? String(object.backupId)
                : '';
        return message;
    },

    toJSON(message: DeleteBackupRequest): unknown {
        const obj: any = {};
        message.backupId !== undefined && (obj.backupId = message.backupId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteBackupRequest>, I>>(
        object: I,
    ): DeleteBackupRequest {
        const message = { ...baseDeleteBackupRequest } as DeleteBackupRequest;
        message.backupId = object.backupId ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeleteBackupRequest.$type, DeleteBackupRequest);

const baseDeleteBackupMetadata: object = {
    $type: 'yandex.cloud.ydb.v1.DeleteBackupMetadata',
    backupId: '',
    databaseId: '',
};

export const DeleteBackupMetadata = {
    $type: 'yandex.cloud.ydb.v1.DeleteBackupMetadata' as const,

    encode(message: DeleteBackupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.backupId !== '') {
            writer.uint32(10).string(message.backupId);
        }
        if (message.databaseId !== '') {
            writer.uint32(18).string(message.databaseId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBackupMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteBackupMetadata } as DeleteBackupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backupId = reader.string();
                    break;
                case 2:
                    message.databaseId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteBackupMetadata {
        const message = { ...baseDeleteBackupMetadata } as DeleteBackupMetadata;
        message.backupId =
            object.backupId !== undefined && object.backupId !== null
                ? String(object.backupId)
                : '';
        message.databaseId =
            object.databaseId !== undefined && object.databaseId !== null
                ? String(object.databaseId)
                : '';
        return message;
    },

    toJSON(message: DeleteBackupMetadata): unknown {
        const obj: any = {};
        message.backupId !== undefined && (obj.backupId = message.backupId);
        message.databaseId !== undefined && (obj.databaseId = message.databaseId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteBackupMetadata>, I>>(
        object: I,
    ): DeleteBackupMetadata {
        const message = { ...baseDeleteBackupMetadata } as DeleteBackupMetadata;
        message.backupId = object.backupId ?? '';
        message.databaseId = object.databaseId ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeleteBackupMetadata.$type, DeleteBackupMetadata);

/** A set of methods for managing backups. */
export const BackupServiceService = {
    /** Returns the specified backup. */
    get: {
        path: '/yandex.cloud.ydb.v1.BackupService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetBackupRequest) =>
            Buffer.from(GetBackupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetBackupRequest.decode(value),
        responseSerialize: (value: Backup) => Buffer.from(Backup.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Backup.decode(value),
    },
    listPaths: {
        path: '/yandex.cloud.ydb.v1.BackupService/ListPaths',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListPathsRequest) =>
            Buffer.from(ListPathsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListPathsRequest.decode(value),
        responseSerialize: (value: ListPathsResponse) =>
            Buffer.from(ListPathsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListPathsResponse.decode(value),
    },
    /** Retrieves a list of backups. */
    list: {
        path: '/yandex.cloud.ydb.v1.BackupService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListBackupsRequest) =>
            Buffer.from(ListBackupsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListBackupsRequest.decode(value),
        responseSerialize: (value: ListBackupsResponse) =>
            Buffer.from(ListBackupsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListBackupsResponse.decode(value),
    },
    listAccessBindings: {
        path: '/yandex.cloud.ydb.v1.BackupService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessBindingsRequest) =>
            Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
        responseSerialize: (value: ListAccessBindingsResponse) =>
            Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
    },
    setAccessBindings: {
        path: '/yandex.cloud.ydb.v1.BackupService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetAccessBindingsRequest) =>
            Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    updateAccessBindings: {
        path: '/yandex.cloud.ydb.v1.BackupService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAccessBindingsRequest) =>
            Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified backup. */
    delete: {
        path: '/yandex.cloud.ydb.v1.BackupService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteBackupRequest) =>
            Buffer.from(DeleteBackupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteBackupRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface BackupServiceServer extends UntypedServiceImplementation {
    /** Returns the specified backup. */
    get: handleUnaryCall<GetBackupRequest, Backup>;
    listPaths: handleUnaryCall<ListPathsRequest, ListPathsResponse>;
    /** Retrieves a list of backups. */
    list: handleUnaryCall<ListBackupsRequest, ListBackupsResponse>;
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
    /** Deletes the specified backup. */
    delete: handleUnaryCall<DeleteBackupRequest, Operation>;
}

export interface BackupServiceClient extends Client {
    /** Returns the specified backup. */
    get(
        request: GetBackupRequest,
        callback: (error: ServiceError | null, response: Backup) => void,
    ): ClientUnaryCall;
    get(
        request: GetBackupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Backup) => void,
    ): ClientUnaryCall;
    get(
        request: GetBackupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Backup) => void,
    ): ClientUnaryCall;
    listPaths(
        request: ListPathsRequest,
        callback: (error: ServiceError | null, response: ListPathsResponse) => void,
    ): ClientUnaryCall;
    listPaths(
        request: ListPathsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListPathsResponse) => void,
    ): ClientUnaryCall;
    listPaths(
        request: ListPathsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListPathsResponse) => void,
    ): ClientUnaryCall;
    /** Retrieves a list of backups. */
    list(
        request: ListBackupsRequest,
        callback: (error: ServiceError | null, response: ListBackupsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListBackupsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListBackupsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListBackupsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListBackupsResponse) => void,
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
    ): ClientUnaryCall;
    setAccessBindings(
        request: SetAccessBindingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setAccessBindings(
        request: SetAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setAccessBindings(
        request: SetAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified backup. */
    delete(
        request: DeleteBackupRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteBackupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteBackupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const BackupServiceClient = makeGenericClientConstructor(
    BackupServiceService,
    'yandex.cloud.ydb.v1.BackupService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): BackupServiceClient;
    service: typeof BackupServiceService;
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
