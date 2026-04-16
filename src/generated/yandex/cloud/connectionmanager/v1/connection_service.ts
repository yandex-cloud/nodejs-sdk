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
import {
    ConnectionParams,
    DBType,
    LockboxSecretSpec,
    Connection,
    dBTypeFromJSON,
    dBTypeToJSON,
} from './connection';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../operation/operation';
import { BoolValue } from '../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.connectionmanager.v1';

/** Request message for creating a new connection. */
export interface CreateConnectionRequest {
    /** Specification for creating a new Lockbox secret. */
    lockboxSecretSpec?: LockboxSecretSpec | undefined;
    /** ID of the folder to create the connection in. */
    folderId: string;
    /** Name of the connection. */
    name: string;
    /** Description of the connection. */
    description: string;
    /** Connection labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** Connection parameters specific to the database or service type. */
    params?: ConnectionParams;
}

export interface CreateConnectionRequest_LabelsEntry {
    key: string;
    value: string;
}

/** Metadata for the connection creation operation. */
export interface CreateConnectionMetadata {
    /** ID of the connection being created. */
    connectionId: string;
}

/** Request message for updating an existing connection. */
export interface UpdateConnectionRequest {
    /** ID of the connection to update. */
    connectionId: string;
    /** Field mask specifying which fields to update. */
    updateMask?: FieldMask;
    /** New name for the connection. */
    name: string;
    /** New description for the connection. */
    description: string;
    /** New connection labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** New connection parameters specific to the database or service type. */
    params?: ConnectionParams;
}

export interface UpdateConnectionRequest_LabelsEntry {
    key: string;
    value: string;
}

/** Metadata for the connection update operation. */
export interface UpdateConnectionMetadata {
    /** ID of the connection being updated. */
    connectionId: string;
}

/** Request message for deleting a connection. */
export interface DeleteConnectionRequest {
    /** ID of the connection to delete. */
    connectionId: string;
}

/** Metadata for the connection deletion operation. */
export interface DeleteConnectionMetadata {}

/** Request message for listing connections. */
export interface ListConnectionRequest {
    /** ID of the folder to list connections in. */
    folderId: string;
    /** ID of the managed database cluster to filter connections. */
    mdbClusterId: string;
    /** Maximum number of results per page. */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListConnectionResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /** Filter by connection name pattern or exact ID. */
    namePatternOrId: string;
    /** ID of the connection author to filter by. */
    authorId: string;
    /** Include only connections that the current user can use. */
    withCanUse: boolean;
    /** Filter by whether connections are on-premise. */
    isOnpremise?: boolean;
    /** Filter by whether connections are manually configured. */
    isManual?: boolean;
    /** Filter connections by database type. */
    dbType: DBType;
}

/** Response message for listing connections. */
export interface ListConnectionResponse {
    /** List of connections in the specified folder. */
    connection: Connection[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListConnectionRequest.page_size], use `next_page_token` as the value
     * for the [ListConnectionRequest.page_token] parameter in the next list request.
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

/** Request message for getting a connection. */
export interface GetConnectionRequest {
    /** ID of the connection to retrieve. */
    connectionId: string;
}

/** Request message for resolving cluster topology for a connection. */
export interface ResolveClusterRequest {
    /** ID of the connection to resolve cluster topology for. */
    connectionId: string;
}

/** Metadata for the version deletion operation. */
export interface DeleteVersionMetadata {
    /** ID of the connection. */
    connectionId: string;
    /** ID of the version being deleted. */
    versionId: string;
}

/** Request message for listing operations of a connection. */
export interface ListOperationsRequest {
    /** ID of the connection to list operations for. */
    connectionId: string;
    /** Maximum number of results per page. */
    pageSize: number;
    /** Token for getting the next page of results. */
    pageToken: string;
}

/** Response message for listing operations of a connection. */
export interface ListOperationsResponse {
    /** List of operations for the specified connection. */
    operations: Operation[];
    /** Token for getting the next page of results. */
    nextPageToken: string;
}

const baseCreateConnectionRequest: object = { folderId: '', name: '', description: '' };

export const CreateConnectionRequest: {
    encode(message: CreateConnectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateConnectionRequest;
    fromJSON(object: any): CreateConnectionRequest;
    toJSON(message: CreateConnectionRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateConnectionRequest>, I>>(object: I): CreateConnectionRequest;
} = {
    encode(message: CreateConnectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.lockboxSecretSpec !== undefined) {
            LockboxSecretSpec.encode(message.lockboxSecretSpec, writer.uint32(90).fork()).ldelim();
        }
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateConnectionRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        if (message.params !== undefined) {
            ConnectionParams.encode(message.params, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateConnectionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateConnectionRequest } as CreateConnectionRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 11:
                    message.lockboxSecretSpec = LockboxSecretSpec.decode(reader, reader.uint32());
                    break;
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = CreateConnectionRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.params = ConnectionParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateConnectionRequest {
        const message = { ...baseCreateConnectionRequest } as CreateConnectionRequest;
        message.lockboxSecretSpec =
            object.lockboxSecretSpec !== undefined && object.lockboxSecretSpec !== null
                ? LockboxSecretSpec.fromJSON(object.lockboxSecretSpec)
                : undefined;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.params =
            object.params !== undefined && object.params !== null
                ? ConnectionParams.fromJSON(object.params)
                : undefined;
        return message;
    },

    toJSON(message: CreateConnectionRequest): unknown {
        const obj: any = {};
        message.lockboxSecretSpec !== undefined &&
            (obj.lockboxSecretSpec = message.lockboxSecretSpec
                ? LockboxSecretSpec.toJSON(message.lockboxSecretSpec)
                : undefined);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.params !== undefined &&
            (obj.params = message.params ? ConnectionParams.toJSON(message.params) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateConnectionRequest>, I>>(
        object: I,
    ): CreateConnectionRequest {
        const message = { ...baseCreateConnectionRequest } as CreateConnectionRequest;
        message.lockboxSecretSpec =
            object.lockboxSecretSpec !== undefined && object.lockboxSecretSpec !== null
                ? LockboxSecretSpec.fromPartial(object.lockboxSecretSpec)
                : undefined;
        message.folderId = object.folderId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.params =
            object.params !== undefined && object.params !== null
                ? ConnectionParams.fromPartial(object.params)
                : undefined;
        return message;
    },
};

const baseCreateConnectionRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateConnectionRequest_LabelsEntry: {
    encode(message: CreateConnectionRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateConnectionRequest_LabelsEntry;
    fromJSON(object: any): CreateConnectionRequest_LabelsEntry;
    toJSON(message: CreateConnectionRequest_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateConnectionRequest_LabelsEntry>, I>>(object: I): CreateConnectionRequest_LabelsEntry;
} = {
    encode(
        message: CreateConnectionRequest_LabelsEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateConnectionRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateConnectionRequest_LabelsEntry,
        } as CreateConnectionRequest_LabelsEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateConnectionRequest_LabelsEntry {
        const message = {
            ...baseCreateConnectionRequest_LabelsEntry,
        } as CreateConnectionRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateConnectionRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateConnectionRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateConnectionRequest_LabelsEntry {
        const message = {
            ...baseCreateConnectionRequest_LabelsEntry,
        } as CreateConnectionRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateConnectionMetadata: object = { connectionId: '' };

export const CreateConnectionMetadata: {
    encode(message: CreateConnectionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateConnectionMetadata;
    fromJSON(object: any): CreateConnectionMetadata;
    toJSON(message: CreateConnectionMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateConnectionMetadata>, I>>(object: I): CreateConnectionMetadata;
} = {
    encode(
        message: CreateConnectionMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.connectionId !== '') {
            writer.uint32(10).string(message.connectionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateConnectionMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateConnectionMetadata } as CreateConnectionMetadata;
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

    fromJSON(object: any): CreateConnectionMetadata {
        const message = { ...baseCreateConnectionMetadata } as CreateConnectionMetadata;
        message.connectionId =
            object.connectionId !== undefined && object.connectionId !== null
                ? String(object.connectionId)
                : '';
        return message;
    },

    toJSON(message: CreateConnectionMetadata): unknown {
        const obj: any = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateConnectionMetadata>, I>>(
        object: I,
    ): CreateConnectionMetadata {
        const message = { ...baseCreateConnectionMetadata } as CreateConnectionMetadata;
        message.connectionId = object.connectionId ?? '';
        return message;
    },
};

const baseUpdateConnectionRequest: object = { connectionId: '', name: '', description: '' };

export const UpdateConnectionRequest: {
    encode(message: UpdateConnectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateConnectionRequest;
    fromJSON(object: any): UpdateConnectionRequest;
    toJSON(message: UpdateConnectionRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateConnectionRequest>, I>>(object: I): UpdateConnectionRequest;
} = {
    encode(message: UpdateConnectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.connectionId !== '') {
            writer.uint32(10).string(message.connectionId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateConnectionRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        if (message.params !== undefined) {
            ConnectionParams.encode(message.params, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateConnectionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateConnectionRequest } as UpdateConnectionRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = UpdateConnectionRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.params = ConnectionParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateConnectionRequest {
        const message = { ...baseUpdateConnectionRequest } as UpdateConnectionRequest;
        message.connectionId =
            object.connectionId !== undefined && object.connectionId !== null
                ? String(object.connectionId)
                : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.params =
            object.params !== undefined && object.params !== null
                ? ConnectionParams.fromJSON(object.params)
                : undefined;
        return message;
    },

    toJSON(message: UpdateConnectionRequest): unknown {
        const obj: any = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.params !== undefined &&
            (obj.params = message.params ? ConnectionParams.toJSON(message.params) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateConnectionRequest>, I>>(
        object: I,
    ): UpdateConnectionRequest {
        const message = { ...baseUpdateConnectionRequest } as UpdateConnectionRequest;
        message.connectionId = object.connectionId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.params =
            object.params !== undefined && object.params !== null
                ? ConnectionParams.fromPartial(object.params)
                : undefined;
        return message;
    },
};

const baseUpdateConnectionRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateConnectionRequest_LabelsEntry: {
    encode(message: UpdateConnectionRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateConnectionRequest_LabelsEntry;
    fromJSON(object: any): UpdateConnectionRequest_LabelsEntry;
    toJSON(message: UpdateConnectionRequest_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateConnectionRequest_LabelsEntry>, I>>(object: I): UpdateConnectionRequest_LabelsEntry;
} = {
    encode(
        message: UpdateConnectionRequest_LabelsEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateConnectionRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateConnectionRequest_LabelsEntry,
        } as UpdateConnectionRequest_LabelsEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateConnectionRequest_LabelsEntry {
        const message = {
            ...baseUpdateConnectionRequest_LabelsEntry,
        } as UpdateConnectionRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateConnectionRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateConnectionRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateConnectionRequest_LabelsEntry {
        const message = {
            ...baseUpdateConnectionRequest_LabelsEntry,
        } as UpdateConnectionRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateConnectionMetadata: object = { connectionId: '' };

export const UpdateConnectionMetadata: {
    encode(message: UpdateConnectionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateConnectionMetadata;
    fromJSON(object: any): UpdateConnectionMetadata;
    toJSON(message: UpdateConnectionMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateConnectionMetadata>, I>>(object: I): UpdateConnectionMetadata;
} = {
    encode(
        message: UpdateConnectionMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.connectionId !== '') {
            writer.uint32(10).string(message.connectionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateConnectionMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateConnectionMetadata } as UpdateConnectionMetadata;
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

    fromJSON(object: any): UpdateConnectionMetadata {
        const message = { ...baseUpdateConnectionMetadata } as UpdateConnectionMetadata;
        message.connectionId =
            object.connectionId !== undefined && object.connectionId !== null
                ? String(object.connectionId)
                : '';
        return message;
    },

    toJSON(message: UpdateConnectionMetadata): unknown {
        const obj: any = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateConnectionMetadata>, I>>(
        object: I,
    ): UpdateConnectionMetadata {
        const message = { ...baseUpdateConnectionMetadata } as UpdateConnectionMetadata;
        message.connectionId = object.connectionId ?? '';
        return message;
    },
};

const baseDeleteConnectionRequest: object = { connectionId: '' };

export const DeleteConnectionRequest: {
    encode(message: DeleteConnectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteConnectionRequest;
    fromJSON(object: any): DeleteConnectionRequest;
    toJSON(message: DeleteConnectionRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteConnectionRequest>, I>>(object: I): DeleteConnectionRequest;
} = {
    encode(message: DeleteConnectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.connectionId !== '') {
            writer.uint32(10).string(message.connectionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteConnectionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteConnectionRequest } as DeleteConnectionRequest;
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

    fromJSON(object: any): DeleteConnectionRequest {
        const message = { ...baseDeleteConnectionRequest } as DeleteConnectionRequest;
        message.connectionId =
            object.connectionId !== undefined && object.connectionId !== null
                ? String(object.connectionId)
                : '';
        return message;
    },

    toJSON(message: DeleteConnectionRequest): unknown {
        const obj: any = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteConnectionRequest>, I>>(
        object: I,
    ): DeleteConnectionRequest {
        const message = { ...baseDeleteConnectionRequest } as DeleteConnectionRequest;
        message.connectionId = object.connectionId ?? '';
        return message;
    },
};

const baseDeleteConnectionMetadata: object = {};

export const DeleteConnectionMetadata: {
    encode(message: DeleteConnectionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteConnectionMetadata;
    fromJSON(object: any): DeleteConnectionMetadata;
    toJSON(message: DeleteConnectionMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteConnectionMetadata>, I>>(object: I): DeleteConnectionMetadata;
} = {
    encode(_: DeleteConnectionMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteConnectionMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteConnectionMetadata } as DeleteConnectionMetadata;
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

    fromJSON(_: any): DeleteConnectionMetadata {
        const message = { ...baseDeleteConnectionMetadata } as DeleteConnectionMetadata;
        return message;
    },

    toJSON(_: DeleteConnectionMetadata): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteConnectionMetadata>, I>>(
        _: I,
    ): DeleteConnectionMetadata {
        const message = { ...baseDeleteConnectionMetadata } as DeleteConnectionMetadata;
        return message;
    },
};

const baseListConnectionRequest: object = {
    folderId: '',
    mdbClusterId: '',
    pageSize: 0,
    pageToken: '',
    namePatternOrId: '',
    authorId: '',
    withCanUse: false,
    dbType: 0,
};

export const ListConnectionRequest: {
    encode(message: ListConnectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListConnectionRequest;
    fromJSON(object: any): ListConnectionRequest;
    toJSON(message: ListConnectionRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListConnectionRequest>, I>>(object: I): ListConnectionRequest;
} = {
    encode(message: ListConnectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.mdbClusterId !== '') {
            writer.uint32(18).string(message.mdbClusterId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(32).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(42).string(message.pageToken);
        }
        if (message.namePatternOrId !== '') {
            writer.uint32(50).string(message.namePatternOrId);
        }
        if (message.authorId !== '') {
            writer.uint32(58).string(message.authorId);
        }
        if (message.withCanUse === true) {
            writer.uint32(64).bool(message.withCanUse);
        }
        if (message.isOnpremise !== undefined) {
            BoolValue.encode({ value: message.isOnpremise! }, writer.uint32(74).fork()).ldelim();
        }
        if (message.isManual !== undefined) {
            BoolValue.encode({ value: message.isManual! }, writer.uint32(82).fork()).ldelim();
        }
        if (message.dbType !== 0) {
            writer.uint32(88).int32(message.dbType);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListConnectionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListConnectionRequest } as ListConnectionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.mdbClusterId = reader.string();
                    break;
                case 4:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.pageToken = reader.string();
                    break;
                case 6:
                    message.namePatternOrId = reader.string();
                    break;
                case 7:
                    message.authorId = reader.string();
                    break;
                case 8:
                    message.withCanUse = reader.bool();
                    break;
                case 9:
                    message.isOnpremise = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.isManual = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.dbType = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListConnectionRequest {
        const message = { ...baseListConnectionRequest } as ListConnectionRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.mdbClusterId =
            object.mdbClusterId !== undefined && object.mdbClusterId !== null
                ? String(object.mdbClusterId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        message.namePatternOrId =
            object.namePatternOrId !== undefined && object.namePatternOrId !== null
                ? String(object.namePatternOrId)
                : '';
        message.authorId =
            object.authorId !== undefined && object.authorId !== null
                ? String(object.authorId)
                : '';
        message.withCanUse =
            object.withCanUse !== undefined && object.withCanUse !== null
                ? Boolean(object.withCanUse)
                : false;
        message.isOnpremise =
            object.isOnpremise !== undefined && object.isOnpremise !== null
                ? Boolean(object.isOnpremise)
                : undefined;
        message.isManual =
            object.isManual !== undefined && object.isManual !== null
                ? Boolean(object.isManual)
                : undefined;
        message.dbType =
            object.dbType !== undefined && object.dbType !== null
                ? dBTypeFromJSON(object.dbType)
                : 0;
        return message;
    },

    toJSON(message: ListConnectionRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.mdbClusterId !== undefined && (obj.mdbClusterId = message.mdbClusterId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.namePatternOrId !== undefined && (obj.namePatternOrId = message.namePatternOrId);
        message.authorId !== undefined && (obj.authorId = message.authorId);
        message.withCanUse !== undefined && (obj.withCanUse = message.withCanUse);
        message.isOnpremise !== undefined && (obj.isOnpremise = message.isOnpremise);
        message.isManual !== undefined && (obj.isManual = message.isManual);
        message.dbType !== undefined && (obj.dbType = dBTypeToJSON(message.dbType));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListConnectionRequest>, I>>(
        object: I,
    ): ListConnectionRequest {
        const message = { ...baseListConnectionRequest } as ListConnectionRequest;
        message.folderId = object.folderId ?? '';
        message.mdbClusterId = object.mdbClusterId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.namePatternOrId = object.namePatternOrId ?? '';
        message.authorId = object.authorId ?? '';
        message.withCanUse = object.withCanUse ?? false;
        message.isOnpremise = object.isOnpremise ?? undefined;
        message.isManual = object.isManual ?? undefined;
        message.dbType = object.dbType ?? 0;
        return message;
    },
};

const baseListConnectionResponse: object = { nextPageToken: '' };

export const ListConnectionResponse: {
    encode(message: ListConnectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListConnectionResponse;
    fromJSON(object: any): ListConnectionResponse;
    toJSON(message: ListConnectionResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListConnectionResponse>, I>>(object: I): ListConnectionResponse;
} = {
    encode(message: ListConnectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.connection) {
            Connection.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListConnectionResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListConnectionResponse } as ListConnectionResponse;
        message.connection = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection.push(Connection.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListConnectionResponse {
        const message = { ...baseListConnectionResponse } as ListConnectionResponse;
        message.connection = (object.connection ?? []).map((e: any) => Connection.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListConnectionResponse): unknown {
        const obj: any = {};
        if (message.connection) {
            obj.connection = message.connection.map((e) => (e ? Connection.toJSON(e) : undefined));
        } else {
            obj.connection = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListConnectionResponse>, I>>(
        object: I,
    ): ListConnectionResponse {
        const message = { ...baseListConnectionResponse } as ListConnectionResponse;
        message.connection = object.connection?.map((e) => Connection.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseGetConnectionRequest: object = { connectionId: '' };

export const GetConnectionRequest: {
    encode(message: GetConnectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetConnectionRequest;
    fromJSON(object: any): GetConnectionRequest;
    toJSON(message: GetConnectionRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetConnectionRequest>, I>>(object: I): GetConnectionRequest;
} = {
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

const baseResolveClusterRequest: object = { connectionId: '' };

export const ResolveClusterRequest: {
    encode(message: ResolveClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResolveClusterRequest;
    fromJSON(object: any): ResolveClusterRequest;
    toJSON(message: ResolveClusterRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ResolveClusterRequest>, I>>(object: I): ResolveClusterRequest;
} = {
    encode(message: ResolveClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.connectionId !== '') {
            writer.uint32(10).string(message.connectionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResolveClusterRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResolveClusterRequest } as ResolveClusterRequest;
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

    fromJSON(object: any): ResolveClusterRequest {
        const message = { ...baseResolveClusterRequest } as ResolveClusterRequest;
        message.connectionId =
            object.connectionId !== undefined && object.connectionId !== null
                ? String(object.connectionId)
                : '';
        return message;
    },

    toJSON(message: ResolveClusterRequest): unknown {
        const obj: any = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResolveClusterRequest>, I>>(
        object: I,
    ): ResolveClusterRequest {
        const message = { ...baseResolveClusterRequest } as ResolveClusterRequest;
        message.connectionId = object.connectionId ?? '';
        return message;
    },
};

const baseDeleteVersionMetadata: object = { connectionId: '', versionId: '' };

export const DeleteVersionMetadata: {
    encode(message: DeleteVersionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteVersionMetadata;
    fromJSON(object: any): DeleteVersionMetadata;
    toJSON(message: DeleteVersionMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteVersionMetadata>, I>>(object: I): DeleteVersionMetadata;
} = {
    encode(message: DeleteVersionMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.connectionId !== '') {
            writer.uint32(10).string(message.connectionId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteVersionMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteVersionMetadata } as DeleteVersionMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteVersionMetadata {
        const message = { ...baseDeleteVersionMetadata } as DeleteVersionMetadata;
        message.connectionId =
            object.connectionId !== undefined && object.connectionId !== null
                ? String(object.connectionId)
                : '';
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : '';
        return message;
    },

    toJSON(message: DeleteVersionMetadata): unknown {
        const obj: any = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteVersionMetadata>, I>>(
        object: I,
    ): DeleteVersionMetadata {
        const message = { ...baseDeleteVersionMetadata } as DeleteVersionMetadata;
        message.connectionId = object.connectionId ?? '';
        message.versionId = object.versionId ?? '';
        return message;
    },
};

const baseListOperationsRequest: object = { connectionId: '', pageSize: 0, pageToken: '' };

export const ListOperationsRequest: {
    encode(message: ListOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListOperationsRequest;
    fromJSON(object: any): ListOperationsRequest;
    toJSON(message: ListOperationsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListOperationsRequest>, I>>(object: I): ListOperationsRequest;
} = {
    encode(message: ListOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.connectionId !== '') {
            writer.uint32(10).string(message.connectionId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListOperationsRequest } as ListOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
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

    fromJSON(object: any): ListOperationsRequest {
        const message = { ...baseListOperationsRequest } as ListOperationsRequest;
        message.connectionId =
            object.connectionId !== undefined && object.connectionId !== null
                ? String(object.connectionId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListOperationsRequest): unknown {
        const obj: any = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListOperationsRequest>, I>>(
        object: I,
    ): ListOperationsRequest {
        const message = { ...baseListOperationsRequest } as ListOperationsRequest;
        message.connectionId = object.connectionId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListOperationsResponse: object = { nextPageToken: '' };

export const ListOperationsResponse: {
    encode(message: ListOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListOperationsResponse;
    fromJSON(object: any): ListOperationsResponse;
    toJSON(message: ListOperationsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListOperationsResponse>, I>>(object: I): ListOperationsResponse;
} = {
    encode(message: ListOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.operations) {
            Operation.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListOperationsResponse } as ListOperationsResponse;
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(Operation.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListOperationsResponse {
        const message = { ...baseListOperationsResponse } as ListOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListOperationsResponse>, I>>(
        object: I,
    ): ListOperationsResponse {
        const message = { ...baseListOperationsResponse } as ListOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** A set of methods for managing Connection resources. */
export const ConnectionServiceService = {
    /** Returns the specified connection. */
    get: {
        path: '/yandex.cloud.connectionmanager.v1.ConnectionService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetConnectionRequest) =>
            Buffer.from(GetConnectionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetConnectionRequest.decode(value),
        responseSerialize: (value: Connection) => Buffer.from(Connection.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Connection.decode(value),
    },
    /**
     * Returns the connection with the resolved cluster; that is,
     * * for connections to the on-premise clusters is identical to the Get RPC;
     * * for connections to the managed clusters, resolves the cluster topology
     * and returns it in the `on_premise` field of the connection parameters.
     * Requires `connection-manager.connections.resolveCluster` permission.
     */
    resolveCluster: {
        path: '/yandex.cloud.connectionmanager.v1.ConnectionService/ResolveCluster',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ResolveClusterRequest) =>
            Buffer.from(ResolveClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ResolveClusterRequest.decode(value),
        responseSerialize: (value: Connection) => Buffer.from(Connection.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Connection.decode(value),
    },
    /** Retrieves the list of connections in the specified folder. */
    list: {
        path: '/yandex.cloud.connectionmanager.v1.ConnectionService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListConnectionRequest) =>
            Buffer.from(ListConnectionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListConnectionRequest.decode(value),
        responseSerialize: (value: ListConnectionResponse) =>
            Buffer.from(ListConnectionResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListConnectionResponse.decode(value),
    },
    /** Creates a connection. */
    create: {
        path: '/yandex.cloud.connectionmanager.v1.ConnectionService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateConnectionRequest) =>
            Buffer.from(CreateConnectionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateConnectionRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified connection. */
    update: {
        path: '/yandex.cloud.connectionmanager.v1.ConnectionService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateConnectionRequest) =>
            Buffer.from(UpdateConnectionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateConnectionRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified connection. */
    delete: {
        path: '/yandex.cloud.connectionmanager.v1.ConnectionService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteConnectionRequest) =>
            Buffer.from(DeleteConnectionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteConnectionRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified connection. */
    listOperations: {
        path: '/yandex.cloud.connectionmanager.v1.ConnectionService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListOperationsRequest) =>
            Buffer.from(ListOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListOperationsRequest.decode(value),
        responseSerialize: (value: ListOperationsResponse) =>
            Buffer.from(ListOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListOperationsResponse.decode(value),
    },
} as const;

export interface ConnectionServiceServer extends UntypedServiceImplementation {
    /** Returns the specified connection. */
    get: handleUnaryCall<GetConnectionRequest, Connection>;
    /**
     * Returns the connection with the resolved cluster; that is,
     * * for connections to the on-premise clusters is identical to the Get RPC;
     * * for connections to the managed clusters, resolves the cluster topology
     * and returns it in the `on_premise` field of the connection parameters.
     * Requires `connection-manager.connections.resolveCluster` permission.
     */
    resolveCluster: handleUnaryCall<ResolveClusterRequest, Connection>;
    /** Retrieves the list of connections in the specified folder. */
    list: handleUnaryCall<ListConnectionRequest, ListConnectionResponse>;
    /** Creates a connection. */
    create: handleUnaryCall<CreateConnectionRequest, Operation>;
    /** Updates the specified connection. */
    update: handleUnaryCall<UpdateConnectionRequest, Operation>;
    /** Deletes the specified connection. */
    delete: handleUnaryCall<DeleteConnectionRequest, Operation>;
    /** Lists operations for the specified connection. */
    listOperations: handleUnaryCall<ListOperationsRequest, ListOperationsResponse>;
}

export interface ConnectionServiceClient extends Client {
    /** Returns the specified connection. */
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
    /**
     * Returns the connection with the resolved cluster; that is,
     * * for connections to the on-premise clusters is identical to the Get RPC;
     * * for connections to the managed clusters, resolves the cluster topology
     * and returns it in the `on_premise` field of the connection parameters.
     * Requires `connection-manager.connections.resolveCluster` permission.
     */
    resolveCluster(
        request: ResolveClusterRequest,
        callback: (error: ServiceError | null, response: Connection) => void,
    ): ClientUnaryCall;
    resolveCluster(
        request: ResolveClusterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Connection) => void,
    ): ClientUnaryCall;
    resolveCluster(
        request: ResolveClusterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Connection) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of connections in the specified folder. */
    list(
        request: ListConnectionRequest,
        callback: (error: ServiceError | null, response: ListConnectionResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListConnectionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListConnectionResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListConnectionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListConnectionResponse) => void,
    ): ClientUnaryCall;
    /** Creates a connection. */
    create(
        request: CreateConnectionRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateConnectionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateConnectionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified connection. */
    update(
        request: UpdateConnectionRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateConnectionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateConnectionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified connection. */
    delete(
        request: DeleteConnectionRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteConnectionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteConnectionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists operations for the specified connection. */
    listOperations(
        request: ListOperationsRequest,
        callback: (error: ServiceError | null, response: ListOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListOperationsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListOperationsResponse) => void,
    ): ClientUnaryCall;
}

export const ConnectionServiceClient = makeGenericClientConstructor(
    ConnectionServiceService,
    'yandex.cloud.connectionmanager.v1.ConnectionService',
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
