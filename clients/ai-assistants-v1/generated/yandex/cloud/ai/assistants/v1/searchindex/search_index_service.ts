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
import {
    TextSearchIndex,
    VectorSearchIndex,
    SearchIndex,
} from '../../../../../../yandex/cloud/ai/assistants/v1/searchindex/search_index';
import { Operation } from '../../../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.ai.assistants.v1.searchindex';

export interface CreateSearchIndexRequest {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.CreateSearchIndexRequest';
    folderId: string;
    fileIds: string[];
    name: string;
    description: string;
    expirationConfig?: ExpirationConfig;
    labels: { [key: string]: string };
    textSearchIndex?: TextSearchIndex | undefined;
    vectorSearchIndex?: VectorSearchIndex | undefined;
}

export interface CreateSearchIndexRequest_LabelsEntry {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.CreateSearchIndexRequest.LabelsEntry';
    key: string;
    value: string;
}

export interface GetSearchIndexRequest {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.GetSearchIndexRequest';
    searchIndexId: string;
}

export interface UpdateSearchIndexRequest {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.UpdateSearchIndexRequest';
    searchIndexId: string;
    updateMask?: FieldMask;
    name: string;
    description: string;
    expirationConfig?: ExpirationConfig;
    labels: { [key: string]: string };
}

export interface UpdateSearchIndexRequest_LabelsEntry {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.UpdateSearchIndexRequest.LabelsEntry';
    key: string;
    value: string;
}

export interface DeleteSearchIndexRequest {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.DeleteSearchIndexRequest';
    searchIndexId: string;
}

export interface DeleteSearchIndexResponse {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.DeleteSearchIndexResponse';
}

export interface ListSearchIndicesRequest {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.ListSearchIndicesRequest';
    folderId: string;
    pageSize: number;
    pageToken: string;
}

export interface ListSearchIndicesResponse {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.ListSearchIndicesResponse';
    indices: SearchIndex[];
    nextPageToken: string;
}

const baseCreateSearchIndexRequest: object = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.CreateSearchIndexRequest',
    folderId: '',
    fileIds: '',
    name: '',
    description: '',
};

export const CreateSearchIndexRequest = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.CreateSearchIndexRequest' as const,

    encode(
        message: CreateSearchIndexRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        for (const v of message.fileIds) {
            writer.uint32(18).string(v!);
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
            CreateSearchIndexRequest_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.ai.assistants.v1.searchindex.CreateSearchIndexRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        if (message.textSearchIndex !== undefined) {
            TextSearchIndex.encode(message.textSearchIndex, writer.uint32(58).fork()).ldelim();
        }
        if (message.vectorSearchIndex !== undefined) {
            VectorSearchIndex.encode(message.vectorSearchIndex, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateSearchIndexRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateSearchIndexRequest } as CreateSearchIndexRequest;
        message.fileIds = [];
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.fileIds.push(reader.string());
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
                    const entry6 = CreateSearchIndexRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.textSearchIndex = TextSearchIndex.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.vectorSearchIndex = VectorSearchIndex.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateSearchIndexRequest {
        const message = { ...baseCreateSearchIndexRequest } as CreateSearchIndexRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.fileIds = (object.fileIds ?? []).map((e: any) => String(e));
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
        message.textSearchIndex =
            object.textSearchIndex !== undefined && object.textSearchIndex !== null
                ? TextSearchIndex.fromJSON(object.textSearchIndex)
                : undefined;
        message.vectorSearchIndex =
            object.vectorSearchIndex !== undefined && object.vectorSearchIndex !== null
                ? VectorSearchIndex.fromJSON(object.vectorSearchIndex)
                : undefined;
        return message;
    },

    toJSON(message: CreateSearchIndexRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        if (message.fileIds) {
            obj.fileIds = message.fileIds.map((e) => e);
        } else {
            obj.fileIds = [];
        }
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
        message.textSearchIndex !== undefined &&
            (obj.textSearchIndex = message.textSearchIndex
                ? TextSearchIndex.toJSON(message.textSearchIndex)
                : undefined);
        message.vectorSearchIndex !== undefined &&
            (obj.vectorSearchIndex = message.vectorSearchIndex
                ? VectorSearchIndex.toJSON(message.vectorSearchIndex)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateSearchIndexRequest>, I>>(
        object: I,
    ): CreateSearchIndexRequest {
        const message = { ...baseCreateSearchIndexRequest } as CreateSearchIndexRequest;
        message.folderId = object.folderId ?? '';
        message.fileIds = object.fileIds?.map((e) => e) || [];
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
        message.textSearchIndex =
            object.textSearchIndex !== undefined && object.textSearchIndex !== null
                ? TextSearchIndex.fromPartial(object.textSearchIndex)
                : undefined;
        message.vectorSearchIndex =
            object.vectorSearchIndex !== undefined && object.vectorSearchIndex !== null
                ? VectorSearchIndex.fromPartial(object.vectorSearchIndex)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(CreateSearchIndexRequest.$type, CreateSearchIndexRequest);

const baseCreateSearchIndexRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.CreateSearchIndexRequest.LabelsEntry',
    key: '',
    value: '',
};

export const CreateSearchIndexRequest_LabelsEntry = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.CreateSearchIndexRequest.LabelsEntry' as const,

    encode(
        message: CreateSearchIndexRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateSearchIndexRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateSearchIndexRequest_LabelsEntry,
        } as CreateSearchIndexRequest_LabelsEntry;
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

    fromJSON(object: any): CreateSearchIndexRequest_LabelsEntry {
        const message = {
            ...baseCreateSearchIndexRequest_LabelsEntry,
        } as CreateSearchIndexRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateSearchIndexRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateSearchIndexRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateSearchIndexRequest_LabelsEntry {
        const message = {
            ...baseCreateSearchIndexRequest_LabelsEntry,
        } as CreateSearchIndexRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(
    CreateSearchIndexRequest_LabelsEntry.$type,
    CreateSearchIndexRequest_LabelsEntry,
);

const baseGetSearchIndexRequest: object = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.GetSearchIndexRequest',
    searchIndexId: '',
};

export const GetSearchIndexRequest = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.GetSearchIndexRequest' as const,

    encode(message: GetSearchIndexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.searchIndexId !== '') {
            writer.uint32(10).string(message.searchIndexId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetSearchIndexRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetSearchIndexRequest } as GetSearchIndexRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.searchIndexId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetSearchIndexRequest {
        const message = { ...baseGetSearchIndexRequest } as GetSearchIndexRequest;
        message.searchIndexId =
            object.searchIndexId !== undefined && object.searchIndexId !== null
                ? String(object.searchIndexId)
                : '';
        return message;
    },

    toJSON(message: GetSearchIndexRequest): unknown {
        const obj: any = {};
        message.searchIndexId !== undefined && (obj.searchIndexId = message.searchIndexId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetSearchIndexRequest>, I>>(
        object: I,
    ): GetSearchIndexRequest {
        const message = { ...baseGetSearchIndexRequest } as GetSearchIndexRequest;
        message.searchIndexId = object.searchIndexId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetSearchIndexRequest.$type, GetSearchIndexRequest);

const baseUpdateSearchIndexRequest: object = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.UpdateSearchIndexRequest',
    searchIndexId: '',
    name: '',
    description: '',
};

export const UpdateSearchIndexRequest = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.UpdateSearchIndexRequest' as const,

    encode(
        message: UpdateSearchIndexRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.searchIndexId !== '') {
            writer.uint32(10).string(message.searchIndexId);
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
            UpdateSearchIndexRequest_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.ai.assistants.v1.searchindex.UpdateSearchIndexRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSearchIndexRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateSearchIndexRequest } as UpdateSearchIndexRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.searchIndexId = reader.string();
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
                    const entry6 = UpdateSearchIndexRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
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

    fromJSON(object: any): UpdateSearchIndexRequest {
        const message = { ...baseUpdateSearchIndexRequest } as UpdateSearchIndexRequest;
        message.searchIndexId =
            object.searchIndexId !== undefined && object.searchIndexId !== null
                ? String(object.searchIndexId)
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

    toJSON(message: UpdateSearchIndexRequest): unknown {
        const obj: any = {};
        message.searchIndexId !== undefined && (obj.searchIndexId = message.searchIndexId);
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

    fromPartial<I extends Exact<DeepPartial<UpdateSearchIndexRequest>, I>>(
        object: I,
    ): UpdateSearchIndexRequest {
        const message = { ...baseUpdateSearchIndexRequest } as UpdateSearchIndexRequest;
        message.searchIndexId = object.searchIndexId ?? '';
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

messageTypeRegistry.set(UpdateSearchIndexRequest.$type, UpdateSearchIndexRequest);

const baseUpdateSearchIndexRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.UpdateSearchIndexRequest.LabelsEntry',
    key: '',
    value: '',
};

export const UpdateSearchIndexRequest_LabelsEntry = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.UpdateSearchIndexRequest.LabelsEntry' as const,

    encode(
        message: UpdateSearchIndexRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSearchIndexRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSearchIndexRequest_LabelsEntry,
        } as UpdateSearchIndexRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateSearchIndexRequest_LabelsEntry {
        const message = {
            ...baseUpdateSearchIndexRequest_LabelsEntry,
        } as UpdateSearchIndexRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateSearchIndexRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateSearchIndexRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateSearchIndexRequest_LabelsEntry {
        const message = {
            ...baseUpdateSearchIndexRequest_LabelsEntry,
        } as UpdateSearchIndexRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(
    UpdateSearchIndexRequest_LabelsEntry.$type,
    UpdateSearchIndexRequest_LabelsEntry,
);

const baseDeleteSearchIndexRequest: object = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.DeleteSearchIndexRequest',
    searchIndexId: '',
};

export const DeleteSearchIndexRequest = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.DeleteSearchIndexRequest' as const,

    encode(
        message: DeleteSearchIndexRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.searchIndexId !== '') {
            writer.uint32(10).string(message.searchIndexId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSearchIndexRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteSearchIndexRequest } as DeleteSearchIndexRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.searchIndexId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteSearchIndexRequest {
        const message = { ...baseDeleteSearchIndexRequest } as DeleteSearchIndexRequest;
        message.searchIndexId =
            object.searchIndexId !== undefined && object.searchIndexId !== null
                ? String(object.searchIndexId)
                : '';
        return message;
    },

    toJSON(message: DeleteSearchIndexRequest): unknown {
        const obj: any = {};
        message.searchIndexId !== undefined && (obj.searchIndexId = message.searchIndexId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteSearchIndexRequest>, I>>(
        object: I,
    ): DeleteSearchIndexRequest {
        const message = { ...baseDeleteSearchIndexRequest } as DeleteSearchIndexRequest;
        message.searchIndexId = object.searchIndexId ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeleteSearchIndexRequest.$type, DeleteSearchIndexRequest);

const baseDeleteSearchIndexResponse: object = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.DeleteSearchIndexResponse',
};

export const DeleteSearchIndexResponse = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.DeleteSearchIndexResponse' as const,

    encode(_: DeleteSearchIndexResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSearchIndexResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteSearchIndexResponse } as DeleteSearchIndexResponse;
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

    fromJSON(_: any): DeleteSearchIndexResponse {
        const message = { ...baseDeleteSearchIndexResponse } as DeleteSearchIndexResponse;
        return message;
    },

    toJSON(_: DeleteSearchIndexResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteSearchIndexResponse>, I>>(
        _: I,
    ): DeleteSearchIndexResponse {
        const message = { ...baseDeleteSearchIndexResponse } as DeleteSearchIndexResponse;
        return message;
    },
};

messageTypeRegistry.set(DeleteSearchIndexResponse.$type, DeleteSearchIndexResponse);

const baseListSearchIndicesRequest: object = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.ListSearchIndicesRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListSearchIndicesRequest = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.ListSearchIndicesRequest' as const,

    encode(
        message: ListSearchIndicesRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListSearchIndicesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListSearchIndicesRequest } as ListSearchIndicesRequest;
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

    fromJSON(object: any): ListSearchIndicesRequest {
        const message = { ...baseListSearchIndicesRequest } as ListSearchIndicesRequest;
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

    toJSON(message: ListSearchIndicesRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListSearchIndicesRequest>, I>>(
        object: I,
    ): ListSearchIndicesRequest {
        const message = { ...baseListSearchIndicesRequest } as ListSearchIndicesRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListSearchIndicesRequest.$type, ListSearchIndicesRequest);

const baseListSearchIndicesResponse: object = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.ListSearchIndicesResponse',
    nextPageToken: '',
};

export const ListSearchIndicesResponse = {
    $type: 'yandex.cloud.ai.assistants.v1.searchindex.ListSearchIndicesResponse' as const,

    encode(
        message: ListSearchIndicesResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.indices) {
            SearchIndex.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListSearchIndicesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListSearchIndicesResponse } as ListSearchIndicesResponse;
        message.indices = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.indices.push(SearchIndex.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListSearchIndicesResponse {
        const message = { ...baseListSearchIndicesResponse } as ListSearchIndicesResponse;
        message.indices = (object.indices ?? []).map((e: any) => SearchIndex.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListSearchIndicesResponse): unknown {
        const obj: any = {};
        if (message.indices) {
            obj.indices = message.indices.map((e) => (e ? SearchIndex.toJSON(e) : undefined));
        } else {
            obj.indices = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListSearchIndicesResponse>, I>>(
        object: I,
    ): ListSearchIndicesResponse {
        const message = { ...baseListSearchIndicesResponse } as ListSearchIndicesResponse;
        message.indices = object.indices?.map((e) => SearchIndex.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListSearchIndicesResponse.$type, ListSearchIndicesResponse);

export const SearchIndexServiceService = {
    create: {
        path: '/yandex.cloud.ai.assistants.v1.searchindex.SearchIndexService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateSearchIndexRequest) =>
            Buffer.from(CreateSearchIndexRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateSearchIndexRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    get: {
        path: '/yandex.cloud.ai.assistants.v1.searchindex.SearchIndexService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetSearchIndexRequest) =>
            Buffer.from(GetSearchIndexRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetSearchIndexRequest.decode(value),
        responseSerialize: (value: SearchIndex) => Buffer.from(SearchIndex.encode(value).finish()),
        responseDeserialize: (value: Buffer) => SearchIndex.decode(value),
    },
    update: {
        path: '/yandex.cloud.ai.assistants.v1.searchindex.SearchIndexService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateSearchIndexRequest) =>
            Buffer.from(UpdateSearchIndexRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateSearchIndexRequest.decode(value),
        responseSerialize: (value: SearchIndex) => Buffer.from(SearchIndex.encode(value).finish()),
        responseDeserialize: (value: Buffer) => SearchIndex.decode(value),
    },
    delete: {
        path: '/yandex.cloud.ai.assistants.v1.searchindex.SearchIndexService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteSearchIndexRequest) =>
            Buffer.from(DeleteSearchIndexRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteSearchIndexRequest.decode(value),
        responseSerialize: (value: DeleteSearchIndexResponse) =>
            Buffer.from(DeleteSearchIndexResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => DeleteSearchIndexResponse.decode(value),
    },
    list: {
        path: '/yandex.cloud.ai.assistants.v1.searchindex.SearchIndexService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListSearchIndicesRequest) =>
            Buffer.from(ListSearchIndicesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListSearchIndicesRequest.decode(value),
        responseSerialize: (value: ListSearchIndicesResponse) =>
            Buffer.from(ListSearchIndicesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListSearchIndicesResponse.decode(value),
    },
} as const;

export interface SearchIndexServiceServer extends UntypedServiceImplementation {
    create: handleUnaryCall<CreateSearchIndexRequest, Operation>;
    get: handleUnaryCall<GetSearchIndexRequest, SearchIndex>;
    update: handleUnaryCall<UpdateSearchIndexRequest, SearchIndex>;
    delete: handleUnaryCall<DeleteSearchIndexRequest, DeleteSearchIndexResponse>;
    list: handleUnaryCall<ListSearchIndicesRequest, ListSearchIndicesResponse>;
}

export interface SearchIndexServiceClient extends Client {
    create(
        request: CreateSearchIndexRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateSearchIndexRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateSearchIndexRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    get(
        request: GetSearchIndexRequest,
        callback: (error: ServiceError | null, response: SearchIndex) => void,
    ): ClientUnaryCall;
    get(
        request: GetSearchIndexRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: SearchIndex) => void,
    ): ClientUnaryCall;
    get(
        request: GetSearchIndexRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: SearchIndex) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateSearchIndexRequest,
        callback: (error: ServiceError | null, response: SearchIndex) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateSearchIndexRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: SearchIndex) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateSearchIndexRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: SearchIndex) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteSearchIndexRequest,
        callback: (error: ServiceError | null, response: DeleteSearchIndexResponse) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteSearchIndexRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: DeleteSearchIndexResponse) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteSearchIndexRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: DeleteSearchIndexResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListSearchIndicesRequest,
        callback: (error: ServiceError | null, response: ListSearchIndicesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListSearchIndicesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListSearchIndicesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListSearchIndicesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListSearchIndicesResponse) => void,
    ): ClientUnaryCall;
}

export const SearchIndexServiceClient = makeGenericClientConstructor(
    SearchIndexServiceService,
    'yandex.cloud.ai.assistants.v1.searchindex.SearchIndexService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): SearchIndexServiceClient;
    service: typeof SearchIndexServiceService;
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
