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
import { ExpirationConfig } from '../../../../../yandex/cloud/ai/common/common';
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { File } from '../../../../../yandex/cloud/ai/files/v1/file';

export const protobufPackage = 'yandex.cloud.ai.files.v1';

/** Request message for creating a new file. */
export interface CreateFileRequest {
    $type: 'yandex.cloud.ai.files.v1.CreateFileRequest';
    folderId: string;
    /** Name of the file. */
    name: string;
    /** Description of the file. */
    description: string;
    /**
     * MIME type of the file, indicating the file's format (e.g., "application/pdf").
     * If not specified, will be deduced automatically based on the file content.
     */
    mimeType: string;
    /** Binary content of the file. */
    content: Buffer;
    /** Set of key-value pairs to label the file. */
    labels: { [key: string]: string };
    /** Expiration configuration for the file. */
    expirationConfig?: ExpirationConfig;
}

export interface CreateFileRequest_LabelsEntry {
    $type: 'yandex.cloud.ai.files.v1.CreateFileRequest.LabelsEntry';
    key: string;
    value: string;
}

/** Request message for retrieving a file by ID. */
export interface GetFileRequest {
    $type: 'yandex.cloud.ai.files.v1.GetFileRequest';
    /** ID of the file to retrieve. */
    fileId: string;
}

/** Request message for retrieving the URL of a specific file. */
export interface GetFileUrlRequest {
    $type: 'yandex.cloud.ai.files.v1.GetFileUrlRequest';
    /** ID of the file which the URL is requested. */
    fileId: string;
}

/** Response message containing the URL to access the requested file. */
export interface GetFileUrlResponse {
    $type: 'yandex.cloud.ai.files.v1.GetFileUrlResponse';
    /** URL that can be used to access or download the file. */
    url: string;
}

/** Request message for updating an existing file. */
export interface UpdateFileRequest {
    $type: 'yandex.cloud.ai.files.v1.UpdateFileRequest';
    /** ID of the file to update. */
    fileId: string;
    /** Field mask specifying which fields to update. */
    updateMask?: FieldMask;
    /** New name for the file. */
    name: string;
    /** New description for the file. */
    description: string;
    /** New expiration configuration for the file. */
    expirationConfig?: ExpirationConfig;
    /** New set of labels for the file. */
    labels: { [key: string]: string };
}

export interface UpdateFileRequest_LabelsEntry {
    $type: 'yandex.cloud.ai.files.v1.UpdateFileRequest.LabelsEntry';
    key: string;
    value: string;
}

/** Request message for deleting a file by ID. */
export interface DeleteFileRequest {
    $type: 'yandex.cloud.ai.files.v1.DeleteFileRequest';
    /** ID of the file to delete. */
    fileId: string;
}

/** Response message for the delete operation. */
export interface DeleteFileResponse {
    $type: 'yandex.cloud.ai.files.v1.DeleteFileResponse';
}

/** Request message for listing files in a specific folder. */
export interface ListFilesRequest {
    $type: 'yandex.cloud.ai.files.v1.ListFilesRequest';
    /** Folder ID from which to list files. */
    folderId: string;
    /** Maximum number of files to return per page. */
    pageSize: number;
    /** Token to retrieve the next page of results. */
    pageToken: string;
}

/** Response message for the list operation. */
export interface ListFilesResponse {
    $type: 'yandex.cloud.ai.files.v1.ListFilesResponse';
    /** List of files in the specified folder. */
    files: File[];
    /** Token to retrieve the next page of results. */
    nextPageToken: string;
}

const baseCreateFileRequest: object = {
    $type: 'yandex.cloud.ai.files.v1.CreateFileRequest',
    folderId: '',
    name: '',
    description: '',
    mimeType: '',
};

export const CreateFileRequest = {
    $type: 'yandex.cloud.ai.files.v1.CreateFileRequest' as const,

    encode(message: CreateFileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.mimeType !== '') {
            writer.uint32(34).string(message.mimeType);
        }
        if (message.content.length !== 0) {
            writer.uint32(42).bytes(message.content);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateFileRequest_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.ai.files.v1.CreateFileRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        if (message.expirationConfig !== undefined) {
            ExpirationConfig.encode(message.expirationConfig, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateFileRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateFileRequest } as CreateFileRequest;
        message.labels = {};
        message.content = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
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
                    message.mimeType = reader.string();
                    break;
                case 5:
                    message.content = reader.bytes() as Buffer;
                    break;
                case 6:
                    const entry6 = CreateFileRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.expirationConfig = ExpirationConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateFileRequest {
        const message = { ...baseCreateFileRequest } as CreateFileRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.mimeType =
            object.mimeType !== undefined && object.mimeType !== null
                ? String(object.mimeType)
                : '';
        message.content =
            object.content !== undefined && object.content !== null
                ? Buffer.from(bytesFromBase64(object.content))
                : Buffer.alloc(0);
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.expirationConfig =
            object.expirationConfig !== undefined && object.expirationConfig !== null
                ? ExpirationConfig.fromJSON(object.expirationConfig)
                : undefined;
        return message;
    },

    toJSON(message: CreateFileRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.mimeType !== undefined && (obj.mimeType = message.mimeType);
        message.content !== undefined &&
            (obj.content = base64FromBytes(
                message.content !== undefined ? message.content : Buffer.alloc(0),
            ));
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.expirationConfig !== undefined &&
            (obj.expirationConfig = message.expirationConfig
                ? ExpirationConfig.toJSON(message.expirationConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateFileRequest>, I>>(object: I): CreateFileRequest {
        const message = { ...baseCreateFileRequest } as CreateFileRequest;
        message.folderId = object.folderId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.mimeType = object.mimeType ?? '';
        message.content = object.content ?? Buffer.alloc(0);
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.expirationConfig =
            object.expirationConfig !== undefined && object.expirationConfig !== null
                ? ExpirationConfig.fromPartial(object.expirationConfig)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(CreateFileRequest.$type, CreateFileRequest);

const baseCreateFileRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.ai.files.v1.CreateFileRequest.LabelsEntry',
    key: '',
    value: '',
};

export const CreateFileRequest_LabelsEntry = {
    $type: 'yandex.cloud.ai.files.v1.CreateFileRequest.LabelsEntry' as const,

    encode(
        message: CreateFileRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateFileRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateFileRequest_LabelsEntry } as CreateFileRequest_LabelsEntry;
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

    fromJSON(object: any): CreateFileRequest_LabelsEntry {
        const message = { ...baseCreateFileRequest_LabelsEntry } as CreateFileRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateFileRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateFileRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateFileRequest_LabelsEntry {
        const message = { ...baseCreateFileRequest_LabelsEntry } as CreateFileRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(CreateFileRequest_LabelsEntry.$type, CreateFileRequest_LabelsEntry);

const baseGetFileRequest: object = { $type: 'yandex.cloud.ai.files.v1.GetFileRequest', fileId: '' };

export const GetFileRequest = {
    $type: 'yandex.cloud.ai.files.v1.GetFileRequest' as const,

    encode(message: GetFileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.fileId !== '') {
            writer.uint32(10).string(message.fileId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetFileRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetFileRequest } as GetFileRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fileId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetFileRequest {
        const message = { ...baseGetFileRequest } as GetFileRequest;
        message.fileId =
            object.fileId !== undefined && object.fileId !== null ? String(object.fileId) : '';
        return message;
    },

    toJSON(message: GetFileRequest): unknown {
        const obj: any = {};
        message.fileId !== undefined && (obj.fileId = message.fileId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetFileRequest>, I>>(object: I): GetFileRequest {
        const message = { ...baseGetFileRequest } as GetFileRequest;
        message.fileId = object.fileId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetFileRequest.$type, GetFileRequest);

const baseGetFileUrlRequest: object = {
    $type: 'yandex.cloud.ai.files.v1.GetFileUrlRequest',
    fileId: '',
};

export const GetFileUrlRequest = {
    $type: 'yandex.cloud.ai.files.v1.GetFileUrlRequest' as const,

    encode(message: GetFileUrlRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.fileId !== '') {
            writer.uint32(10).string(message.fileId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetFileUrlRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetFileUrlRequest } as GetFileUrlRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fileId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetFileUrlRequest {
        const message = { ...baseGetFileUrlRequest } as GetFileUrlRequest;
        message.fileId =
            object.fileId !== undefined && object.fileId !== null ? String(object.fileId) : '';
        return message;
    },

    toJSON(message: GetFileUrlRequest): unknown {
        const obj: any = {};
        message.fileId !== undefined && (obj.fileId = message.fileId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetFileUrlRequest>, I>>(object: I): GetFileUrlRequest {
        const message = { ...baseGetFileUrlRequest } as GetFileUrlRequest;
        message.fileId = object.fileId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetFileUrlRequest.$type, GetFileUrlRequest);

const baseGetFileUrlResponse: object = {
    $type: 'yandex.cloud.ai.files.v1.GetFileUrlResponse',
    url: '',
};

export const GetFileUrlResponse = {
    $type: 'yandex.cloud.ai.files.v1.GetFileUrlResponse' as const,

    encode(message: GetFileUrlResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.url !== '') {
            writer.uint32(10).string(message.url);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetFileUrlResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetFileUrlResponse } as GetFileUrlResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetFileUrlResponse {
        const message = { ...baseGetFileUrlResponse } as GetFileUrlResponse;
        message.url = object.url !== undefined && object.url !== null ? String(object.url) : '';
        return message;
    },

    toJSON(message: GetFileUrlResponse): unknown {
        const obj: any = {};
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetFileUrlResponse>, I>>(
        object: I,
    ): GetFileUrlResponse {
        const message = { ...baseGetFileUrlResponse } as GetFileUrlResponse;
        message.url = object.url ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetFileUrlResponse.$type, GetFileUrlResponse);

const baseUpdateFileRequest: object = {
    $type: 'yandex.cloud.ai.files.v1.UpdateFileRequest',
    fileId: '',
    name: '',
    description: '',
};

export const UpdateFileRequest = {
    $type: 'yandex.cloud.ai.files.v1.UpdateFileRequest' as const,

    encode(message: UpdateFileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.fileId !== '') {
            writer.uint32(10).string(message.fileId);
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
        if (message.expirationConfig !== undefined) {
            ExpirationConfig.encode(message.expirationConfig, writer.uint32(42).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateFileRequest_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.ai.files.v1.UpdateFileRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFileRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateFileRequest } as UpdateFileRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fileId = reader.string();
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
                    message.expirationConfig = ExpirationConfig.decode(reader, reader.uint32());
                    break;
                case 6:
                    const entry6 = UpdateFileRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateFileRequest {
        const message = { ...baseUpdateFileRequest } as UpdateFileRequest;
        message.fileId =
            object.fileId !== undefined && object.fileId !== null ? String(object.fileId) : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.expirationConfig =
            object.expirationConfig !== undefined && object.expirationConfig !== null
                ? ExpirationConfig.fromJSON(object.expirationConfig)
                : undefined;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: UpdateFileRequest): unknown {
        const obj: any = {};
        message.fileId !== undefined && (obj.fileId = message.fileId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.expirationConfig !== undefined &&
            (obj.expirationConfig = message.expirationConfig
                ? ExpirationConfig.toJSON(message.expirationConfig)
                : undefined);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateFileRequest>, I>>(object: I): UpdateFileRequest {
        const message = { ...baseUpdateFileRequest } as UpdateFileRequest;
        message.fileId = object.fileId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.expirationConfig =
            object.expirationConfig !== undefined && object.expirationConfig !== null
                ? ExpirationConfig.fromPartial(object.expirationConfig)
                : undefined;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        return message;
    },
};

messageTypeRegistry.set(UpdateFileRequest.$type, UpdateFileRequest);

const baseUpdateFileRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.ai.files.v1.UpdateFileRequest.LabelsEntry',
    key: '',
    value: '',
};

export const UpdateFileRequest_LabelsEntry = {
    $type: 'yandex.cloud.ai.files.v1.UpdateFileRequest.LabelsEntry' as const,

    encode(
        message: UpdateFileRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFileRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateFileRequest_LabelsEntry } as UpdateFileRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateFileRequest_LabelsEntry {
        const message = { ...baseUpdateFileRequest_LabelsEntry } as UpdateFileRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateFileRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateFileRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateFileRequest_LabelsEntry {
        const message = { ...baseUpdateFileRequest_LabelsEntry } as UpdateFileRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(UpdateFileRequest_LabelsEntry.$type, UpdateFileRequest_LabelsEntry);

const baseDeleteFileRequest: object = {
    $type: 'yandex.cloud.ai.files.v1.DeleteFileRequest',
    fileId: '',
};

export const DeleteFileRequest = {
    $type: 'yandex.cloud.ai.files.v1.DeleteFileRequest' as const,

    encode(message: DeleteFileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.fileId !== '') {
            writer.uint32(10).string(message.fileId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFileRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteFileRequest } as DeleteFileRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fileId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteFileRequest {
        const message = { ...baseDeleteFileRequest } as DeleteFileRequest;
        message.fileId =
            object.fileId !== undefined && object.fileId !== null ? String(object.fileId) : '';
        return message;
    },

    toJSON(message: DeleteFileRequest): unknown {
        const obj: any = {};
        message.fileId !== undefined && (obj.fileId = message.fileId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteFileRequest>, I>>(object: I): DeleteFileRequest {
        const message = { ...baseDeleteFileRequest } as DeleteFileRequest;
        message.fileId = object.fileId ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeleteFileRequest.$type, DeleteFileRequest);

const baseDeleteFileResponse: object = { $type: 'yandex.cloud.ai.files.v1.DeleteFileResponse' };

export const DeleteFileResponse = {
    $type: 'yandex.cloud.ai.files.v1.DeleteFileResponse' as const,

    encode(_: DeleteFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFileResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteFileResponse } as DeleteFileResponse;
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

    fromJSON(_: any): DeleteFileResponse {
        const message = { ...baseDeleteFileResponse } as DeleteFileResponse;
        return message;
    },

    toJSON(_: DeleteFileResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteFileResponse>, I>>(_: I): DeleteFileResponse {
        const message = { ...baseDeleteFileResponse } as DeleteFileResponse;
        return message;
    },
};

messageTypeRegistry.set(DeleteFileResponse.$type, DeleteFileResponse);

const baseListFilesRequest: object = {
    $type: 'yandex.cloud.ai.files.v1.ListFilesRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListFilesRequest = {
    $type: 'yandex.cloud.ai.files.v1.ListFilesRequest' as const,

    encode(message: ListFilesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListFilesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListFilesRequest } as ListFilesRequest;
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

    fromJSON(object: any): ListFilesRequest {
        const message = { ...baseListFilesRequest } as ListFilesRequest;
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

    toJSON(message: ListFilesRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListFilesRequest>, I>>(object: I): ListFilesRequest {
        const message = { ...baseListFilesRequest } as ListFilesRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListFilesRequest.$type, ListFilesRequest);

const baseListFilesResponse: object = {
    $type: 'yandex.cloud.ai.files.v1.ListFilesResponse',
    nextPageToken: '',
};

export const ListFilesResponse = {
    $type: 'yandex.cloud.ai.files.v1.ListFilesResponse' as const,

    encode(message: ListFilesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.files) {
            File.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListFilesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListFilesResponse } as ListFilesResponse;
        message.files = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.files.push(File.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListFilesResponse {
        const message = { ...baseListFilesResponse } as ListFilesResponse;
        message.files = (object.files ?? []).map((e: any) => File.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListFilesResponse): unknown {
        const obj: any = {};
        if (message.files) {
            obj.files = message.files.map((e) => (e ? File.toJSON(e) : undefined));
        } else {
            obj.files = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListFilesResponse>, I>>(object: I): ListFilesResponse {
        const message = { ...baseListFilesResponse } as ListFilesResponse;
        message.files = object.files?.map((e) => File.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListFilesResponse.$type, ListFilesResponse);

/** FileService provides operations for managing files. */
export const FileServiceService = {
    /** Create a new file. */
    create: {
        path: '/yandex.cloud.ai.files.v1.FileService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateFileRequest) =>
            Buffer.from(CreateFileRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateFileRequest.decode(value),
        responseSerialize: (value: File) => Buffer.from(File.encode(value).finish()),
        responseDeserialize: (value: Buffer) => File.decode(value),
    },
    /** Retrieve details of a specific file by its ID. */
    get: {
        path: '/yandex.cloud.ai.files.v1.FileService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetFileRequest) =>
            Buffer.from(GetFileRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetFileRequest.decode(value),
        responseSerialize: (value: File) => Buffer.from(File.encode(value).finish()),
        responseDeserialize: (value: Buffer) => File.decode(value),
    },
    /** Retrieve a URL for accessing or downloading a specific file. */
    getUrl: {
        path: '/yandex.cloud.ai.files.v1.FileService/GetUrl',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetFileUrlRequest) =>
            Buffer.from(GetFileUrlRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetFileUrlRequest.decode(value),
        responseSerialize: (value: GetFileUrlResponse) =>
            Buffer.from(GetFileUrlResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetFileUrlResponse.decode(value),
    },
    /** Update an existing file. */
    update: {
        path: '/yandex.cloud.ai.files.v1.FileService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateFileRequest) =>
            Buffer.from(UpdateFileRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateFileRequest.decode(value),
        responseSerialize: (value: File) => Buffer.from(File.encode(value).finish()),
        responseDeserialize: (value: Buffer) => File.decode(value),
    },
    /** Delete a file by its ID. */
    delete: {
        path: '/yandex.cloud.ai.files.v1.FileService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteFileRequest) =>
            Buffer.from(DeleteFileRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteFileRequest.decode(value),
        responseSerialize: (value: DeleteFileResponse) =>
            Buffer.from(DeleteFileResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => DeleteFileResponse.decode(value),
    },
    /** List files in a specific folder. */
    list: {
        path: '/yandex.cloud.ai.files.v1.FileService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListFilesRequest) =>
            Buffer.from(ListFilesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListFilesRequest.decode(value),
        responseSerialize: (value: ListFilesResponse) =>
            Buffer.from(ListFilesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListFilesResponse.decode(value),
    },
} as const;

export interface FileServiceServer extends UntypedServiceImplementation {
    /** Create a new file. */
    create: handleUnaryCall<CreateFileRequest, File>;
    /** Retrieve details of a specific file by its ID. */
    get: handleUnaryCall<GetFileRequest, File>;
    /** Retrieve a URL for accessing or downloading a specific file. */
    getUrl: handleUnaryCall<GetFileUrlRequest, GetFileUrlResponse>;
    /** Update an existing file. */
    update: handleUnaryCall<UpdateFileRequest, File>;
    /** Delete a file by its ID. */
    delete: handleUnaryCall<DeleteFileRequest, DeleteFileResponse>;
    /** List files in a specific folder. */
    list: handleUnaryCall<ListFilesRequest, ListFilesResponse>;
}

export interface FileServiceClient extends Client {
    /** Create a new file. */
    create(
        request: CreateFileRequest,
        callback: (error: ServiceError | null, response: File) => void,
    ): ClientUnaryCall;
    create(
        request: CreateFileRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: File) => void,
    ): ClientUnaryCall;
    create(
        request: CreateFileRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: File) => void,
    ): ClientUnaryCall;
    /** Retrieve details of a specific file by its ID. */
    get(
        request: GetFileRequest,
        callback: (error: ServiceError | null, response: File) => void,
    ): ClientUnaryCall;
    get(
        request: GetFileRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: File) => void,
    ): ClientUnaryCall;
    get(
        request: GetFileRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: File) => void,
    ): ClientUnaryCall;
    /** Retrieve a URL for accessing or downloading a specific file. */
    getUrl(
        request: GetFileUrlRequest,
        callback: (error: ServiceError | null, response: GetFileUrlResponse) => void,
    ): ClientUnaryCall;
    getUrl(
        request: GetFileUrlRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetFileUrlResponse) => void,
    ): ClientUnaryCall;
    getUrl(
        request: GetFileUrlRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetFileUrlResponse) => void,
    ): ClientUnaryCall;
    /** Update an existing file. */
    update(
        request: UpdateFileRequest,
        callback: (error: ServiceError | null, response: File) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateFileRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: File) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateFileRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: File) => void,
    ): ClientUnaryCall;
    /** Delete a file by its ID. */
    delete(
        request: DeleteFileRequest,
        callback: (error: ServiceError | null, response: DeleteFileResponse) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteFileRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: DeleteFileResponse) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteFileRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: DeleteFileResponse) => void,
    ): ClientUnaryCall;
    /** List files in a specific folder. */
    list(
        request: ListFilesRequest,
        callback: (error: ServiceError | null, response: ListFilesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListFilesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListFilesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListFilesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListFilesResponse) => void,
    ): ClientUnaryCall;
}

export const FileServiceClient = makeGenericClientConstructor(
    FileServiceService,
    'yandex.cloud.ai.files.v1.FileService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): FileServiceClient;
    service: typeof FileServiceService;
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
