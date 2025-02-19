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
import { ExpirationConfig } from '../../../../../yandex/cloud/ai/common/common';
import {
    PromptTruncationOptions,
    CompletionOptions,
    Tool,
} from '../../../../../yandex/cloud/ai/assistants/v1/common';
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Assistant } from '../../../../../yandex/cloud/ai/assistants/v1/assistant';

export const protobufPackage = 'yandex.cloud.ai.assistants.v1';

/** Request to create a new assistant. */
export interface CreateAssistantRequest {
    folderId: string;
    /** Name of the assistant. */
    name: string;
    /** Description of the assistant. */
    description: string;
    /** Expiration configuration for the assistant. */
    expirationConfig?: ExpirationConfig;
    /** Set of key-value pairs to label the user. */
    labels: { [key: string]: string };
    /** The [ID of the model](/docs/foundation-models/concepts/yandexgpt/models) to be used for completion generation. */
    modelUri: string;
    /**
     * Instructions or guidelines that the assistant should follow when generating responses or performing tasks.
     * These instructions can help guide the assistant's behavior and responses.
     */
    instruction: string;
    /** Configuration options for truncating the prompt when the token count exceeds a specified limit. */
    promptTruncationOptions?: PromptTruncationOptions;
    /** Configuration options for completion generation. */
    completionOptions?: CompletionOptions;
    /**
     * List of tools that the assistant can use to perform additional tasks.
     * One example is the SearchIndexTool, which is used for Retrieval-Augmented Generation (RAG).
     */
    tools: Tool[];
}

export interface CreateAssistantRequest_LabelsEntry {
    key: string;
    value: string;
}

/** Request message for retrieving an assistant by ID. */
export interface GetAssistantRequest {
    /** ID of the assistant to retrieve. */
    assistantId: string;
}

/** Request message for updating an existing assistant. */
export interface UpdateAssistantRequest {
    /** ID of the assistant to update. */
    assistantId: string;
    /** Field mask specifying which fields to update. */
    updateMask?: FieldMask;
    /** New name for the assistant. */
    name: string;
    /** New description for the assistant. */
    description: string;
    /** New expiration configuration for the assistant. */
    expirationConfig?: ExpirationConfig;
    /** New set of labels for the assistant. */
    labels: { [key: string]: string };
    /** The new [ID of the model](/docs/foundation-models/concepts/yandexgpt/models) to be used for completion generation. */
    modelUri: string;
    /** New instructions or guidelines for the assistant to follow. */
    instruction: string;
    /** New configuration for truncating the prompt. */
    promptTruncationOptions?: PromptTruncationOptions;
    /** New configuration for completion generation. */
    completionOptions?: CompletionOptions;
    /** New list of tools the assistant can use. */
    tools: Tool[];
}

export interface UpdateAssistantRequest_LabelsEntry {
    key: string;
    value: string;
}

/** Request message for deleting an assistant by ID. */
export interface DeleteAssistantRequest {
    /** ID of the assistant to delete. */
    assistantId: string;
}

/** Response message for the delete operation. */
export interface DeleteAssistantResponse {}

/** Request message for listing assistants in a specific folder. */
export interface ListAssistantsRequest {
    /** Folder ID from which to list assistants. */
    folderId: string;
    /** Maximum number of assistants to return per page. */
    pageSize: number;
    /** Token to retrieve the next page of results. */
    pageToken: string;
}

/** Response message for the list operation. */
export interface ListAssistantsResponse {
    /** List of assistants in the specified folder. */
    assistants: Assistant[];
    /** Token to retrieve the next page of results. */
    nextPageToken: string;
}

/** Request to list all versions of a specific assistant. */
export interface ListAssistantVersionsRequest {
    /** ID of the assistant whose versions are to be listed. */
    assistantId: string;
    /** Maximum number of versions to return per page. */
    pageSize: number;
    /** Token to retrieve the next page of results. */
    pageToken: string;
}

/** Represents a specific version of an assistant. */
export interface AssistantVersion {
    /** ID of the assistant version. */
    id: string;
    /** Mask specifying which fields were updated in this version. */
    updateMask?: FieldMask;
    /** Assistant configuration for this version. */
    assistant?: Assistant;
}

/** Response message containing the list versions operation. */
export interface ListAssistantVersionsResponse {
    /** List of assistant versions. */
    versions: AssistantVersion[];
    /** Token to retrieve the next page of results. */
    nextPageToken: string;
}

const baseCreateAssistantRequest: object = {
    folderId: '',
    name: '',
    description: '',
    modelUri: '',
    instruction: '',
};

export const CreateAssistantRequest = {
    encode(message: CreateAssistantRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.expirationConfig !== undefined) {
            ExpirationConfig.encode(message.expirationConfig, writer.uint32(34).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateAssistantRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        if (message.modelUri !== '') {
            writer.uint32(50).string(message.modelUri);
        }
        if (message.instruction !== '') {
            writer.uint32(58).string(message.instruction);
        }
        if (message.promptTruncationOptions !== undefined) {
            PromptTruncationOptions.encode(
                message.promptTruncationOptions,
                writer.uint32(66).fork(),
            ).ldelim();
        }
        if (message.completionOptions !== undefined) {
            CompletionOptions.encode(message.completionOptions, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.tools) {
            Tool.encode(v!, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateAssistantRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateAssistantRequest } as CreateAssistantRequest;
        message.labels = {};
        message.tools = [];
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
                    message.expirationConfig = ExpirationConfig.decode(reader, reader.uint32());
                    break;
                case 5:
                    const entry5 = CreateAssistantRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.modelUri = reader.string();
                    break;
                case 7:
                    message.instruction = reader.string();
                    break;
                case 8:
                    message.promptTruncationOptions = PromptTruncationOptions.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 9:
                    message.completionOptions = CompletionOptions.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.tools.push(Tool.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateAssistantRequest {
        const message = { ...baseCreateAssistantRequest } as CreateAssistantRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
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
        message.modelUri =
            object.modelUri !== undefined && object.modelUri !== null
                ? String(object.modelUri)
                : '';
        message.instruction =
            object.instruction !== undefined && object.instruction !== null
                ? String(object.instruction)
                : '';
        message.promptTruncationOptions =
            object.promptTruncationOptions !== undefined && object.promptTruncationOptions !== null
                ? PromptTruncationOptions.fromJSON(object.promptTruncationOptions)
                : undefined;
        message.completionOptions =
            object.completionOptions !== undefined && object.completionOptions !== null
                ? CompletionOptions.fromJSON(object.completionOptions)
                : undefined;
        message.tools = (object.tools ?? []).map((e: any) => Tool.fromJSON(e));
        return message;
    },

    toJSON(message: CreateAssistantRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
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
        message.modelUri !== undefined && (obj.modelUri = message.modelUri);
        message.instruction !== undefined && (obj.instruction = message.instruction);
        message.promptTruncationOptions !== undefined &&
            (obj.promptTruncationOptions = message.promptTruncationOptions
                ? PromptTruncationOptions.toJSON(message.promptTruncationOptions)
                : undefined);
        message.completionOptions !== undefined &&
            (obj.completionOptions = message.completionOptions
                ? CompletionOptions.toJSON(message.completionOptions)
                : undefined);
        if (message.tools) {
            obj.tools = message.tools.map((e) => (e ? Tool.toJSON(e) : undefined));
        } else {
            obj.tools = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateAssistantRequest>, I>>(
        object: I,
    ): CreateAssistantRequest {
        const message = { ...baseCreateAssistantRequest } as CreateAssistantRequest;
        message.folderId = object.folderId ?? '';
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
        message.modelUri = object.modelUri ?? '';
        message.instruction = object.instruction ?? '';
        message.promptTruncationOptions =
            object.promptTruncationOptions !== undefined && object.promptTruncationOptions !== null
                ? PromptTruncationOptions.fromPartial(object.promptTruncationOptions)
                : undefined;
        message.completionOptions =
            object.completionOptions !== undefined && object.completionOptions !== null
                ? CompletionOptions.fromPartial(object.completionOptions)
                : undefined;
        message.tools = object.tools?.map((e) => Tool.fromPartial(e)) || [];
        return message;
    },
};

const baseCreateAssistantRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateAssistantRequest_LabelsEntry = {
    encode(
        message: CreateAssistantRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateAssistantRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateAssistantRequest_LabelsEntry,
        } as CreateAssistantRequest_LabelsEntry;
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

    fromJSON(object: any): CreateAssistantRequest_LabelsEntry {
        const message = {
            ...baseCreateAssistantRequest_LabelsEntry,
        } as CreateAssistantRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateAssistantRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateAssistantRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateAssistantRequest_LabelsEntry {
        const message = {
            ...baseCreateAssistantRequest_LabelsEntry,
        } as CreateAssistantRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseGetAssistantRequest: object = { assistantId: '' };

export const GetAssistantRequest = {
    encode(message: GetAssistantRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.assistantId !== '') {
            writer.uint32(10).string(message.assistantId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetAssistantRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetAssistantRequest } as GetAssistantRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assistantId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetAssistantRequest {
        const message = { ...baseGetAssistantRequest } as GetAssistantRequest;
        message.assistantId =
            object.assistantId !== undefined && object.assistantId !== null
                ? String(object.assistantId)
                : '';
        return message;
    },

    toJSON(message: GetAssistantRequest): unknown {
        const obj: any = {};
        message.assistantId !== undefined && (obj.assistantId = message.assistantId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetAssistantRequest>, I>>(
        object: I,
    ): GetAssistantRequest {
        const message = { ...baseGetAssistantRequest } as GetAssistantRequest;
        message.assistantId = object.assistantId ?? '';
        return message;
    },
};

const baseUpdateAssistantRequest: object = {
    assistantId: '',
    name: '',
    description: '',
    modelUri: '',
    instruction: '',
};

export const UpdateAssistantRequest = {
    encode(message: UpdateAssistantRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.assistantId !== '') {
            writer.uint32(10).string(message.assistantId);
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
            UpdateAssistantRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        if (message.modelUri !== '') {
            writer.uint32(58).string(message.modelUri);
        }
        if (message.instruction !== '') {
            writer.uint32(66).string(message.instruction);
        }
        if (message.promptTruncationOptions !== undefined) {
            PromptTruncationOptions.encode(
                message.promptTruncationOptions,
                writer.uint32(74).fork(),
            ).ldelim();
        }
        if (message.completionOptions !== undefined) {
            CompletionOptions.encode(message.completionOptions, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.tools) {
            Tool.encode(v!, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAssistantRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateAssistantRequest } as UpdateAssistantRequest;
        message.labels = {};
        message.tools = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assistantId = reader.string();
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
                    const entry6 = UpdateAssistantRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.modelUri = reader.string();
                    break;
                case 8:
                    message.instruction = reader.string();
                    break;
                case 9:
                    message.promptTruncationOptions = PromptTruncationOptions.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 10:
                    message.completionOptions = CompletionOptions.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.tools.push(Tool.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateAssistantRequest {
        const message = { ...baseUpdateAssistantRequest } as UpdateAssistantRequest;
        message.assistantId =
            object.assistantId !== undefined && object.assistantId !== null
                ? String(object.assistantId)
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
        message.modelUri =
            object.modelUri !== undefined && object.modelUri !== null
                ? String(object.modelUri)
                : '';
        message.instruction =
            object.instruction !== undefined && object.instruction !== null
                ? String(object.instruction)
                : '';
        message.promptTruncationOptions =
            object.promptTruncationOptions !== undefined && object.promptTruncationOptions !== null
                ? PromptTruncationOptions.fromJSON(object.promptTruncationOptions)
                : undefined;
        message.completionOptions =
            object.completionOptions !== undefined && object.completionOptions !== null
                ? CompletionOptions.fromJSON(object.completionOptions)
                : undefined;
        message.tools = (object.tools ?? []).map((e: any) => Tool.fromJSON(e));
        return message;
    },

    toJSON(message: UpdateAssistantRequest): unknown {
        const obj: any = {};
        message.assistantId !== undefined && (obj.assistantId = message.assistantId);
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
        message.modelUri !== undefined && (obj.modelUri = message.modelUri);
        message.instruction !== undefined && (obj.instruction = message.instruction);
        message.promptTruncationOptions !== undefined &&
            (obj.promptTruncationOptions = message.promptTruncationOptions
                ? PromptTruncationOptions.toJSON(message.promptTruncationOptions)
                : undefined);
        message.completionOptions !== undefined &&
            (obj.completionOptions = message.completionOptions
                ? CompletionOptions.toJSON(message.completionOptions)
                : undefined);
        if (message.tools) {
            obj.tools = message.tools.map((e) => (e ? Tool.toJSON(e) : undefined));
        } else {
            obj.tools = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateAssistantRequest>, I>>(
        object: I,
    ): UpdateAssistantRequest {
        const message = { ...baseUpdateAssistantRequest } as UpdateAssistantRequest;
        message.assistantId = object.assistantId ?? '';
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
        message.modelUri = object.modelUri ?? '';
        message.instruction = object.instruction ?? '';
        message.promptTruncationOptions =
            object.promptTruncationOptions !== undefined && object.promptTruncationOptions !== null
                ? PromptTruncationOptions.fromPartial(object.promptTruncationOptions)
                : undefined;
        message.completionOptions =
            object.completionOptions !== undefined && object.completionOptions !== null
                ? CompletionOptions.fromPartial(object.completionOptions)
                : undefined;
        message.tools = object.tools?.map((e) => Tool.fromPartial(e)) || [];
        return message;
    },
};

const baseUpdateAssistantRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateAssistantRequest_LabelsEntry = {
    encode(
        message: UpdateAssistantRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAssistantRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateAssistantRequest_LabelsEntry,
        } as UpdateAssistantRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateAssistantRequest_LabelsEntry {
        const message = {
            ...baseUpdateAssistantRequest_LabelsEntry,
        } as UpdateAssistantRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateAssistantRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateAssistantRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateAssistantRequest_LabelsEntry {
        const message = {
            ...baseUpdateAssistantRequest_LabelsEntry,
        } as UpdateAssistantRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseDeleteAssistantRequest: object = { assistantId: '' };

export const DeleteAssistantRequest = {
    encode(message: DeleteAssistantRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.assistantId !== '') {
            writer.uint32(10).string(message.assistantId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAssistantRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteAssistantRequest } as DeleteAssistantRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assistantId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteAssistantRequest {
        const message = { ...baseDeleteAssistantRequest } as DeleteAssistantRequest;
        message.assistantId =
            object.assistantId !== undefined && object.assistantId !== null
                ? String(object.assistantId)
                : '';
        return message;
    },

    toJSON(message: DeleteAssistantRequest): unknown {
        const obj: any = {};
        message.assistantId !== undefined && (obj.assistantId = message.assistantId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteAssistantRequest>, I>>(
        object: I,
    ): DeleteAssistantRequest {
        const message = { ...baseDeleteAssistantRequest } as DeleteAssistantRequest;
        message.assistantId = object.assistantId ?? '';
        return message;
    },
};

const baseDeleteAssistantResponse: object = {};

export const DeleteAssistantResponse = {
    encode(_: DeleteAssistantResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAssistantResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteAssistantResponse } as DeleteAssistantResponse;
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

    fromJSON(_: any): DeleteAssistantResponse {
        const message = { ...baseDeleteAssistantResponse } as DeleteAssistantResponse;
        return message;
    },

    toJSON(_: DeleteAssistantResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteAssistantResponse>, I>>(
        _: I,
    ): DeleteAssistantResponse {
        const message = { ...baseDeleteAssistantResponse } as DeleteAssistantResponse;
        return message;
    },
};

const baseListAssistantsRequest: object = { folderId: '', pageSize: 0, pageToken: '' };

export const ListAssistantsRequest = {
    encode(message: ListAssistantsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListAssistantsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListAssistantsRequest } as ListAssistantsRequest;
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

    fromJSON(object: any): ListAssistantsRequest {
        const message = { ...baseListAssistantsRequest } as ListAssistantsRequest;
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

    toJSON(message: ListAssistantsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListAssistantsRequest>, I>>(
        object: I,
    ): ListAssistantsRequest {
        const message = { ...baseListAssistantsRequest } as ListAssistantsRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListAssistantsResponse: object = { nextPageToken: '' };

export const ListAssistantsResponse = {
    encode(message: ListAssistantsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.assistants) {
            Assistant.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListAssistantsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListAssistantsResponse } as ListAssistantsResponse;
        message.assistants = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assistants.push(Assistant.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListAssistantsResponse {
        const message = { ...baseListAssistantsResponse } as ListAssistantsResponse;
        message.assistants = (object.assistants ?? []).map((e: any) => Assistant.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListAssistantsResponse): unknown {
        const obj: any = {};
        if (message.assistants) {
            obj.assistants = message.assistants.map((e) => (e ? Assistant.toJSON(e) : undefined));
        } else {
            obj.assistants = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListAssistantsResponse>, I>>(
        object: I,
    ): ListAssistantsResponse {
        const message = { ...baseListAssistantsResponse } as ListAssistantsResponse;
        message.assistants = object.assistants?.map((e) => Assistant.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseListAssistantVersionsRequest: object = { assistantId: '', pageSize: 0, pageToken: '' };

export const ListAssistantVersionsRequest = {
    encode(
        message: ListAssistantVersionsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.assistantId !== '') {
            writer.uint32(10).string(message.assistantId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListAssistantVersionsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListAssistantVersionsRequest } as ListAssistantVersionsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assistantId = reader.string();
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

    fromJSON(object: any): ListAssistantVersionsRequest {
        const message = { ...baseListAssistantVersionsRequest } as ListAssistantVersionsRequest;
        message.assistantId =
            object.assistantId !== undefined && object.assistantId !== null
                ? String(object.assistantId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListAssistantVersionsRequest): unknown {
        const obj: any = {};
        message.assistantId !== undefined && (obj.assistantId = message.assistantId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListAssistantVersionsRequest>, I>>(
        object: I,
    ): ListAssistantVersionsRequest {
        const message = { ...baseListAssistantVersionsRequest } as ListAssistantVersionsRequest;
        message.assistantId = object.assistantId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseAssistantVersion: object = { id: '' };

export const AssistantVersion = {
    encode(message: AssistantVersion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.assistant !== undefined) {
            Assistant.encode(message.assistant, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AssistantVersion {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAssistantVersion } as AssistantVersion;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.assistant = Assistant.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AssistantVersion {
        const message = { ...baseAssistantVersion } as AssistantVersion;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.assistant =
            object.assistant !== undefined && object.assistant !== null
                ? Assistant.fromJSON(object.assistant)
                : undefined;
        return message;
    },

    toJSON(message: AssistantVersion): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.assistant !== undefined &&
            (obj.assistant = message.assistant ? Assistant.toJSON(message.assistant) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AssistantVersion>, I>>(object: I): AssistantVersion {
        const message = { ...baseAssistantVersion } as AssistantVersion;
        message.id = object.id ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.assistant =
            object.assistant !== undefined && object.assistant !== null
                ? Assistant.fromPartial(object.assistant)
                : undefined;
        return message;
    },
};

const baseListAssistantVersionsResponse: object = { nextPageToken: '' };

export const ListAssistantVersionsResponse = {
    encode(
        message: ListAssistantVersionsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.versions) {
            AssistantVersion.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListAssistantVersionsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListAssistantVersionsResponse } as ListAssistantVersionsResponse;
        message.versions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.versions.push(AssistantVersion.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListAssistantVersionsResponse {
        const message = { ...baseListAssistantVersionsResponse } as ListAssistantVersionsResponse;
        message.versions = (object.versions ?? []).map((e: any) => AssistantVersion.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListAssistantVersionsResponse): unknown {
        const obj: any = {};
        if (message.versions) {
            obj.versions = message.versions.map((e) =>
                e ? AssistantVersion.toJSON(e) : undefined,
            );
        } else {
            obj.versions = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListAssistantVersionsResponse>, I>>(
        object: I,
    ): ListAssistantVersionsResponse {
        const message = { ...baseListAssistantVersionsResponse } as ListAssistantVersionsResponse;
        message.versions = object.versions?.map((e) => AssistantVersion.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** AssistantService provides operations for managing assistants. */
export const AssistantServiceService = {
    /** Create a new assistant. */
    create: {
        path: '/yandex.cloud.ai.assistants.v1.AssistantService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateAssistantRequest) =>
            Buffer.from(CreateAssistantRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateAssistantRequest.decode(value),
        responseSerialize: (value: Assistant) => Buffer.from(Assistant.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Assistant.decode(value),
    },
    /** Retrieve details of a specific assistant by its ID. */
    get: {
        path: '/yandex.cloud.ai.assistants.v1.AssistantService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetAssistantRequest) =>
            Buffer.from(GetAssistantRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetAssistantRequest.decode(value),
        responseSerialize: (value: Assistant) => Buffer.from(Assistant.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Assistant.decode(value),
    },
    /** Update an existing assistant. */
    update: {
        path: '/yandex.cloud.ai.assistants.v1.AssistantService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAssistantRequest) =>
            Buffer.from(UpdateAssistantRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateAssistantRequest.decode(value),
        responseSerialize: (value: Assistant) => Buffer.from(Assistant.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Assistant.decode(value),
    },
    /** Delete an assistant by its ID. */
    delete: {
        path: '/yandex.cloud.ai.assistants.v1.AssistantService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteAssistantRequest) =>
            Buffer.from(DeleteAssistantRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteAssistantRequest.decode(value),
        responseSerialize: (value: DeleteAssistantResponse) =>
            Buffer.from(DeleteAssistantResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => DeleteAssistantResponse.decode(value),
    },
    /** List assistants in a specific folder. */
    list: {
        path: '/yandex.cloud.ai.assistants.v1.AssistantService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAssistantsRequest) =>
            Buffer.from(ListAssistantsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAssistantsRequest.decode(value),
        responseSerialize: (value: ListAssistantsResponse) =>
            Buffer.from(ListAssistantsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAssistantsResponse.decode(value),
    },
    /** Lists all versions of a specific assistant. */
    listVersions: {
        path: '/yandex.cloud.ai.assistants.v1.AssistantService/ListVersions',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAssistantVersionsRequest) =>
            Buffer.from(ListAssistantVersionsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAssistantVersionsRequest.decode(value),
        responseSerialize: (value: ListAssistantVersionsResponse) =>
            Buffer.from(ListAssistantVersionsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAssistantVersionsResponse.decode(value),
    },
} as const;

export interface AssistantServiceServer extends UntypedServiceImplementation {
    /** Create a new assistant. */
    create: handleUnaryCall<CreateAssistantRequest, Assistant>;
    /** Retrieve details of a specific assistant by its ID. */
    get: handleUnaryCall<GetAssistantRequest, Assistant>;
    /** Update an existing assistant. */
    update: handleUnaryCall<UpdateAssistantRequest, Assistant>;
    /** Delete an assistant by its ID. */
    delete: handleUnaryCall<DeleteAssistantRequest, DeleteAssistantResponse>;
    /** List assistants in a specific folder. */
    list: handleUnaryCall<ListAssistantsRequest, ListAssistantsResponse>;
    /** Lists all versions of a specific assistant. */
    listVersions: handleUnaryCall<ListAssistantVersionsRequest, ListAssistantVersionsResponse>;
}

export interface AssistantServiceClient extends Client {
    /** Create a new assistant. */
    create(
        request: CreateAssistantRequest,
        callback: (error: ServiceError | null, response: Assistant) => void,
    ): ClientUnaryCall;
    create(
        request: CreateAssistantRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Assistant) => void,
    ): ClientUnaryCall;
    create(
        request: CreateAssistantRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Assistant) => void,
    ): ClientUnaryCall;
    /** Retrieve details of a specific assistant by its ID. */
    get(
        request: GetAssistantRequest,
        callback: (error: ServiceError | null, response: Assistant) => void,
    ): ClientUnaryCall;
    get(
        request: GetAssistantRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Assistant) => void,
    ): ClientUnaryCall;
    get(
        request: GetAssistantRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Assistant) => void,
    ): ClientUnaryCall;
    /** Update an existing assistant. */
    update(
        request: UpdateAssistantRequest,
        callback: (error: ServiceError | null, response: Assistant) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateAssistantRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Assistant) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateAssistantRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Assistant) => void,
    ): ClientUnaryCall;
    /** Delete an assistant by its ID. */
    delete(
        request: DeleteAssistantRequest,
        callback: (error: ServiceError | null, response: DeleteAssistantResponse) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteAssistantRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: DeleteAssistantResponse) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteAssistantRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: DeleteAssistantResponse) => void,
    ): ClientUnaryCall;
    /** List assistants in a specific folder. */
    list(
        request: ListAssistantsRequest,
        callback: (error: ServiceError | null, response: ListAssistantsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListAssistantsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListAssistantsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListAssistantsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListAssistantsResponse) => void,
    ): ClientUnaryCall;
    /** Lists all versions of a specific assistant. */
    listVersions(
        request: ListAssistantVersionsRequest,
        callback: (error: ServiceError | null, response: ListAssistantVersionsResponse) => void,
    ): ClientUnaryCall;
    listVersions(
        request: ListAssistantVersionsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListAssistantVersionsResponse) => void,
    ): ClientUnaryCall;
    listVersions(
        request: ListAssistantVersionsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListAssistantVersionsResponse) => void,
    ): ClientUnaryCall;
}

export const AssistantServiceClient = makeGenericClientConstructor(
    AssistantServiceService,
    'yandex.cloud.ai.assistants.v1.AssistantService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): AssistantServiceClient;
    service: typeof AssistantServiceService;
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
