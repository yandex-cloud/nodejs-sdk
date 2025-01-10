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
import { ExpirationConfig } from '../../../../../../yandex/cloud/ai/common/common';
import { FieldMask } from '../../../../../../google/protobuf/field_mask';
import { MessageData } from '../../../../../../yandex/cloud/ai/assistants/v1/threads/message';
import { Thread } from '../../../../../../yandex/cloud/ai/assistants/v1/threads/thread';

export const protobufPackage = 'yandex.cloud.ai.assistants.v1.threads';

/** Request message for creating a new thread. */
export interface CreateThreadRequest {
    $type: 'yandex.cloud.ai.assistants.v1.threads.CreateThreadRequest';
    folderId: string;
    /** List of messages to initialize the thread. */
    messages: MessageData[];
    /** Name of the thread. */
    name: string;
    /** Description of the thread. */
    description: string;
    /** Default user ID that will be used as the author for thread messages if no other author is specified. */
    defaultMessageAuthorId: string;
    /** Expiration configuration for the thread. */
    expirationConfig?: ExpirationConfig;
    /** Set of key-value pairs to label the thread. */
    labels: { [key: string]: string };
}

export interface CreateThreadRequest_LabelsEntry {
    $type: 'yandex.cloud.ai.assistants.v1.threads.CreateThreadRequest.LabelsEntry';
    key: string;
    value: string;
}

/** Request message for retrieving a thread by ID. */
export interface GetThreadRequest {
    $type: 'yandex.cloud.ai.assistants.v1.threads.GetThreadRequest';
    /** ID of the thread to retrieve. */
    threadId: string;
}

/** Request message for updating an existing thread. */
export interface UpdateThreadRequest {
    $type: 'yandex.cloud.ai.assistants.v1.threads.UpdateThreadRequest';
    /** ID of the thread to update. */
    threadId: string;
    /** Field mask specifying which fields to update. */
    updateMask?: FieldMask;
    /** New name for the thread. */
    name: string;
    /** New description for the thread. */
    description: string;
    /** New expiration configuration for the thread. */
    expirationConfig?: ExpirationConfig;
    /** New set of labels for the thread. */
    labels: { [key: string]: string };
}

export interface UpdateThreadRequest_LabelsEntry {
    $type: 'yandex.cloud.ai.assistants.v1.threads.UpdateThreadRequest.LabelsEntry';
    key: string;
    value: string;
}

/** Request message for deleting a thread by ID. */
export interface DeleteThreadRequest {
    $type: 'yandex.cloud.ai.assistants.v1.threads.DeleteThreadRequest';
    /** ID of the thread to delete. */
    threadId: string;
}

/** Response message for the delete operation. */
export interface DeleteThreadResponse {
    $type: 'yandex.cloud.ai.assistants.v1.threads.DeleteThreadResponse';
}

/** Request message for listing threads in a specific folder. */
export interface ListThreadsRequest {
    $type: 'yandex.cloud.ai.assistants.v1.threads.ListThreadsRequest';
    /** Folder ID from which to list threads. */
    folderId: string;
    /** Maximum number of threads to return per page. */
    pageSize: number;
    /** Token to retrieve the next page of results. */
    pageToken: string;
}

/** Response message for the list operation. */
export interface ListThreadsResponse {
    $type: 'yandex.cloud.ai.assistants.v1.threads.ListThreadsResponse';
    /** List of threads in the specified folder. */
    threads: Thread[];
    /** Token to retrieve the next page of results. */
    nextPageToken: string;
}

const baseCreateThreadRequest: object = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.CreateThreadRequest',
    folderId: '',
    name: '',
    description: '',
    defaultMessageAuthorId: '',
};

export const CreateThreadRequest = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.CreateThreadRequest' as const,

    encode(message: CreateThreadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        for (const v of message.messages) {
            MessageData.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.defaultMessageAuthorId !== '') {
            writer.uint32(42).string(message.defaultMessageAuthorId);
        }
        if (message.expirationConfig !== undefined) {
            ExpirationConfig.encode(message.expirationConfig, writer.uint32(50).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateThreadRequest_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.ai.assistants.v1.threads.CreateThreadRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(58).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateThreadRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateThreadRequest } as CreateThreadRequest;
        message.messages = [];
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.messages.push(MessageData.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.defaultMessageAuthorId = reader.string();
                    break;
                case 6:
                    message.expirationConfig = ExpirationConfig.decode(reader, reader.uint32());
                    break;
                case 7:
                    const entry7 = CreateThreadRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry7.value !== undefined) {
                        message.labels[entry7.key] = entry7.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateThreadRequest {
        const message = { ...baseCreateThreadRequest } as CreateThreadRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.messages = (object.messages ?? []).map((e: any) => MessageData.fromJSON(e));
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.defaultMessageAuthorId =
            object.defaultMessageAuthorId !== undefined && object.defaultMessageAuthorId !== null
                ? String(object.defaultMessageAuthorId)
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

    toJSON(message: CreateThreadRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        if (message.messages) {
            obj.messages = message.messages.map((e) => (e ? MessageData.toJSON(e) : undefined));
        } else {
            obj.messages = [];
        }
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.defaultMessageAuthorId !== undefined &&
            (obj.defaultMessageAuthorId = message.defaultMessageAuthorId);
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

    fromPartial<I extends Exact<DeepPartial<CreateThreadRequest>, I>>(
        object: I,
    ): CreateThreadRequest {
        const message = { ...baseCreateThreadRequest } as CreateThreadRequest;
        message.folderId = object.folderId ?? '';
        message.messages = object.messages?.map((e) => MessageData.fromPartial(e)) || [];
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.defaultMessageAuthorId = object.defaultMessageAuthorId ?? '';
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

messageTypeRegistry.set(CreateThreadRequest.$type, CreateThreadRequest);

const baseCreateThreadRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.CreateThreadRequest.LabelsEntry',
    key: '',
    value: '',
};

export const CreateThreadRequest_LabelsEntry = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.CreateThreadRequest.LabelsEntry' as const,

    encode(
        message: CreateThreadRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateThreadRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateThreadRequest_LabelsEntry,
        } as CreateThreadRequest_LabelsEntry;
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

    fromJSON(object: any): CreateThreadRequest_LabelsEntry {
        const message = {
            ...baseCreateThreadRequest_LabelsEntry,
        } as CreateThreadRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateThreadRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateThreadRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateThreadRequest_LabelsEntry {
        const message = {
            ...baseCreateThreadRequest_LabelsEntry,
        } as CreateThreadRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(CreateThreadRequest_LabelsEntry.$type, CreateThreadRequest_LabelsEntry);

const baseGetThreadRequest: object = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.GetThreadRequest',
    threadId: '',
};

export const GetThreadRequest = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.GetThreadRequest' as const,

    encode(message: GetThreadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.threadId !== '') {
            writer.uint32(10).string(message.threadId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetThreadRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetThreadRequest } as GetThreadRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.threadId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetThreadRequest {
        const message = { ...baseGetThreadRequest } as GetThreadRequest;
        message.threadId =
            object.threadId !== undefined && object.threadId !== null
                ? String(object.threadId)
                : '';
        return message;
    },

    toJSON(message: GetThreadRequest): unknown {
        const obj: any = {};
        message.threadId !== undefined && (obj.threadId = message.threadId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetThreadRequest>, I>>(object: I): GetThreadRequest {
        const message = { ...baseGetThreadRequest } as GetThreadRequest;
        message.threadId = object.threadId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetThreadRequest.$type, GetThreadRequest);

const baseUpdateThreadRequest: object = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.UpdateThreadRequest',
    threadId: '',
    name: '',
    description: '',
};

export const UpdateThreadRequest = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.UpdateThreadRequest' as const,

    encode(message: UpdateThreadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.threadId !== '') {
            writer.uint32(10).string(message.threadId);
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
            UpdateThreadRequest_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.ai.assistants.v1.threads.UpdateThreadRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateThreadRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateThreadRequest } as UpdateThreadRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.threadId = reader.string();
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
                    const entry6 = UpdateThreadRequest_LabelsEntry.decode(reader, reader.uint32());
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

    fromJSON(object: any): UpdateThreadRequest {
        const message = { ...baseUpdateThreadRequest } as UpdateThreadRequest;
        message.threadId =
            object.threadId !== undefined && object.threadId !== null
                ? String(object.threadId)
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

    toJSON(message: UpdateThreadRequest): unknown {
        const obj: any = {};
        message.threadId !== undefined && (obj.threadId = message.threadId);
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

    fromPartial<I extends Exact<DeepPartial<UpdateThreadRequest>, I>>(
        object: I,
    ): UpdateThreadRequest {
        const message = { ...baseUpdateThreadRequest } as UpdateThreadRequest;
        message.threadId = object.threadId ?? '';
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

messageTypeRegistry.set(UpdateThreadRequest.$type, UpdateThreadRequest);

const baseUpdateThreadRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.UpdateThreadRequest.LabelsEntry',
    key: '',
    value: '',
};

export const UpdateThreadRequest_LabelsEntry = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.UpdateThreadRequest.LabelsEntry' as const,

    encode(
        message: UpdateThreadRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateThreadRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateThreadRequest_LabelsEntry,
        } as UpdateThreadRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateThreadRequest_LabelsEntry {
        const message = {
            ...baseUpdateThreadRequest_LabelsEntry,
        } as UpdateThreadRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateThreadRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateThreadRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateThreadRequest_LabelsEntry {
        const message = {
            ...baseUpdateThreadRequest_LabelsEntry,
        } as UpdateThreadRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(UpdateThreadRequest_LabelsEntry.$type, UpdateThreadRequest_LabelsEntry);

const baseDeleteThreadRequest: object = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.DeleteThreadRequest',
    threadId: '',
};

export const DeleteThreadRequest = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.DeleteThreadRequest' as const,

    encode(message: DeleteThreadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.threadId !== '') {
            writer.uint32(10).string(message.threadId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteThreadRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteThreadRequest } as DeleteThreadRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.threadId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteThreadRequest {
        const message = { ...baseDeleteThreadRequest } as DeleteThreadRequest;
        message.threadId =
            object.threadId !== undefined && object.threadId !== null
                ? String(object.threadId)
                : '';
        return message;
    },

    toJSON(message: DeleteThreadRequest): unknown {
        const obj: any = {};
        message.threadId !== undefined && (obj.threadId = message.threadId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteThreadRequest>, I>>(
        object: I,
    ): DeleteThreadRequest {
        const message = { ...baseDeleteThreadRequest } as DeleteThreadRequest;
        message.threadId = object.threadId ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeleteThreadRequest.$type, DeleteThreadRequest);

const baseDeleteThreadResponse: object = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.DeleteThreadResponse',
};

export const DeleteThreadResponse = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.DeleteThreadResponse' as const,

    encode(_: DeleteThreadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteThreadResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteThreadResponse } as DeleteThreadResponse;
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

    fromJSON(_: any): DeleteThreadResponse {
        const message = { ...baseDeleteThreadResponse } as DeleteThreadResponse;
        return message;
    },

    toJSON(_: DeleteThreadResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteThreadResponse>, I>>(_: I): DeleteThreadResponse {
        const message = { ...baseDeleteThreadResponse } as DeleteThreadResponse;
        return message;
    },
};

messageTypeRegistry.set(DeleteThreadResponse.$type, DeleteThreadResponse);

const baseListThreadsRequest: object = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.ListThreadsRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListThreadsRequest = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.ListThreadsRequest' as const,

    encode(message: ListThreadsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListThreadsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListThreadsRequest } as ListThreadsRequest;
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

    fromJSON(object: any): ListThreadsRequest {
        const message = { ...baseListThreadsRequest } as ListThreadsRequest;
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

    toJSON(message: ListThreadsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListThreadsRequest>, I>>(
        object: I,
    ): ListThreadsRequest {
        const message = { ...baseListThreadsRequest } as ListThreadsRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListThreadsRequest.$type, ListThreadsRequest);

const baseListThreadsResponse: object = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.ListThreadsResponse',
    nextPageToken: '',
};

export const ListThreadsResponse = {
    $type: 'yandex.cloud.ai.assistants.v1.threads.ListThreadsResponse' as const,

    encode(message: ListThreadsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.threads) {
            Thread.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListThreadsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListThreadsResponse } as ListThreadsResponse;
        message.threads = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.threads.push(Thread.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListThreadsResponse {
        const message = { ...baseListThreadsResponse } as ListThreadsResponse;
        message.threads = (object.threads ?? []).map((e: any) => Thread.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListThreadsResponse): unknown {
        const obj: any = {};
        if (message.threads) {
            obj.threads = message.threads.map((e) => (e ? Thread.toJSON(e) : undefined));
        } else {
            obj.threads = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListThreadsResponse>, I>>(
        object: I,
    ): ListThreadsResponse {
        const message = { ...baseListThreadsResponse } as ListThreadsResponse;
        message.threads = object.threads?.map((e) => Thread.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListThreadsResponse.$type, ListThreadsResponse);

/** ThreadService provides operations for managing threads. */
export const ThreadServiceService = {
    /** Create a new thread. */
    create: {
        path: '/yandex.cloud.ai.assistants.v1.threads.ThreadService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateThreadRequest) =>
            Buffer.from(CreateThreadRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateThreadRequest.decode(value),
        responseSerialize: (value: Thread) => Buffer.from(Thread.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Thread.decode(value),
    },
    /** Retrieve details of a specific thread by its ID. */
    get: {
        path: '/yandex.cloud.ai.assistants.v1.threads.ThreadService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetThreadRequest) =>
            Buffer.from(GetThreadRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetThreadRequest.decode(value),
        responseSerialize: (value: Thread) => Buffer.from(Thread.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Thread.decode(value),
    },
    /** Update an existing thread. */
    update: {
        path: '/yandex.cloud.ai.assistants.v1.threads.ThreadService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateThreadRequest) =>
            Buffer.from(UpdateThreadRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateThreadRequest.decode(value),
        responseSerialize: (value: Thread) => Buffer.from(Thread.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Thread.decode(value),
    },
    /** Delete a thread by its ID. */
    delete: {
        path: '/yandex.cloud.ai.assistants.v1.threads.ThreadService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteThreadRequest) =>
            Buffer.from(DeleteThreadRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteThreadRequest.decode(value),
        responseSerialize: (value: DeleteThreadResponse) =>
            Buffer.from(DeleteThreadResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => DeleteThreadResponse.decode(value),
    },
    /** List threads in a specific folder. */
    list: {
        path: '/yandex.cloud.ai.assistants.v1.threads.ThreadService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListThreadsRequest) =>
            Buffer.from(ListThreadsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListThreadsRequest.decode(value),
        responseSerialize: (value: ListThreadsResponse) =>
            Buffer.from(ListThreadsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListThreadsResponse.decode(value),
    },
} as const;

export interface ThreadServiceServer extends UntypedServiceImplementation {
    /** Create a new thread. */
    create: handleUnaryCall<CreateThreadRequest, Thread>;
    /** Retrieve details of a specific thread by its ID. */
    get: handleUnaryCall<GetThreadRequest, Thread>;
    /** Update an existing thread. */
    update: handleUnaryCall<UpdateThreadRequest, Thread>;
    /** Delete a thread by its ID. */
    delete: handleUnaryCall<DeleteThreadRequest, DeleteThreadResponse>;
    /** List threads in a specific folder. */
    list: handleUnaryCall<ListThreadsRequest, ListThreadsResponse>;
}

export interface ThreadServiceClient extends Client {
    /** Create a new thread. */
    create(
        request: CreateThreadRequest,
        callback: (error: ServiceError | null, response: Thread) => void,
    ): ClientUnaryCall;
    create(
        request: CreateThreadRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Thread) => void,
    ): ClientUnaryCall;
    create(
        request: CreateThreadRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Thread) => void,
    ): ClientUnaryCall;
    /** Retrieve details of a specific thread by its ID. */
    get(
        request: GetThreadRequest,
        callback: (error: ServiceError | null, response: Thread) => void,
    ): ClientUnaryCall;
    get(
        request: GetThreadRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Thread) => void,
    ): ClientUnaryCall;
    get(
        request: GetThreadRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Thread) => void,
    ): ClientUnaryCall;
    /** Update an existing thread. */
    update(
        request: UpdateThreadRequest,
        callback: (error: ServiceError | null, response: Thread) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateThreadRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Thread) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateThreadRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Thread) => void,
    ): ClientUnaryCall;
    /** Delete a thread by its ID. */
    delete(
        request: DeleteThreadRequest,
        callback: (error: ServiceError | null, response: DeleteThreadResponse) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteThreadRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: DeleteThreadResponse) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteThreadRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: DeleteThreadResponse) => void,
    ): ClientUnaryCall;
    /** List threads in a specific folder. */
    list(
        request: ListThreadsRequest,
        callback: (error: ServiceError | null, response: ListThreadsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListThreadsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListThreadsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListThreadsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListThreadsResponse) => void,
    ): ClientUnaryCall;
}

export const ThreadServiceClient = makeGenericClientConstructor(
    ThreadServiceService,
    'yandex.cloud.ai.assistants.v1.threads.ThreadService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ThreadServiceClient;
    service: typeof ThreadServiceService;
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
