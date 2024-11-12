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
import {
    PromptTruncationOptions,
    CompletionOptions,
    Tool,
} from '../../../../../yandex/cloud/ai/assistants/v1/common';
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Assistant } from '../../../../../yandex/cloud/ai/assistants/v1/assistant';

export const protobufPackage = 'yandex.cloud.ai.assistants.v1';

export interface CreateAssistantRequest {
    $type: 'yandex.cloud.ai.assistants.v1.CreateAssistantRequest';
    folderId: string;
    name: string;
    description: string;
    expirationConfig?: ExpirationConfig;
    labels: { [key: string]: string };
    modelUri: string;
    instruction: string;
    promptTruncationOptions?: PromptTruncationOptions;
    completionOptions?: CompletionOptions;
    tools: Tool[];
}

export interface CreateAssistantRequest_LabelsEntry {
    $type: 'yandex.cloud.ai.assistants.v1.CreateAssistantRequest.LabelsEntry';
    key: string;
    value: string;
}

export interface GetAssistantRequest {
    $type: 'yandex.cloud.ai.assistants.v1.GetAssistantRequest';
    assistantId: string;
}

export interface UpdateAssistantRequest {
    $type: 'yandex.cloud.ai.assistants.v1.UpdateAssistantRequest';
    assistantId: string;
    updateMask?: FieldMask;
    name: string;
    description: string;
    expirationConfig?: ExpirationConfig;
    labels: { [key: string]: string };
    modelUri: string;
    instruction: string;
    promptTruncationOptions?: PromptTruncationOptions;
    completionOptions?: CompletionOptions;
    tools: Tool[];
}

export interface UpdateAssistantRequest_LabelsEntry {
    $type: 'yandex.cloud.ai.assistants.v1.UpdateAssistantRequest.LabelsEntry';
    key: string;
    value: string;
}

export interface DeleteAssistantRequest {
    $type: 'yandex.cloud.ai.assistants.v1.DeleteAssistantRequest';
    assistantId: string;
}

export interface DeleteAssistantResponse {
    $type: 'yandex.cloud.ai.assistants.v1.DeleteAssistantResponse';
}

export interface ListAssistantsRequest {
    $type: 'yandex.cloud.ai.assistants.v1.ListAssistantsRequest';
    folderId: string;
    pageSize: number;
    pageToken: string;
}

export interface ListAssistantsResponse {
    $type: 'yandex.cloud.ai.assistants.v1.ListAssistantsResponse';
    assistants: Assistant[];
    nextPageToken: string;
}

export interface ListAssistantVersionsRequest {
    $type: 'yandex.cloud.ai.assistants.v1.ListAssistantVersionsRequest';
    assistantId: string;
    pageSize: number;
    pageToken: string;
}

export interface AssistantVersion {
    $type: 'yandex.cloud.ai.assistants.v1.AssistantVersion';
    id: string;
    updateMask?: FieldMask;
    assistant?: Assistant;
}

export interface ListAssistantVersionsResponse {
    $type: 'yandex.cloud.ai.assistants.v1.ListAssistantVersionsResponse';
    versions: AssistantVersion[];
    nextPageToken: string;
}

const baseCreateAssistantRequest: object = {
    $type: 'yandex.cloud.ai.assistants.v1.CreateAssistantRequest',
    folderId: '',
    name: '',
    description: '',
    modelUri: '',
    instruction: '',
};

export const CreateAssistantRequest = {
    $type: 'yandex.cloud.ai.assistants.v1.CreateAssistantRequest' as const,

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
                {
                    $type: 'yandex.cloud.ai.assistants.v1.CreateAssistantRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
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

messageTypeRegistry.set(CreateAssistantRequest.$type, CreateAssistantRequest);

const baseCreateAssistantRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.ai.assistants.v1.CreateAssistantRequest.LabelsEntry',
    key: '',
    value: '',
};

export const CreateAssistantRequest_LabelsEntry = {
    $type: 'yandex.cloud.ai.assistants.v1.CreateAssistantRequest.LabelsEntry' as const,

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

messageTypeRegistry.set(
    CreateAssistantRequest_LabelsEntry.$type,
    CreateAssistantRequest_LabelsEntry,
);

const baseGetAssistantRequest: object = {
    $type: 'yandex.cloud.ai.assistants.v1.GetAssistantRequest',
    assistantId: '',
};

export const GetAssistantRequest = {
    $type: 'yandex.cloud.ai.assistants.v1.GetAssistantRequest' as const,

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

messageTypeRegistry.set(GetAssistantRequest.$type, GetAssistantRequest);

const baseUpdateAssistantRequest: object = {
    $type: 'yandex.cloud.ai.assistants.v1.UpdateAssistantRequest',
    assistantId: '',
    name: '',
    description: '',
    modelUri: '',
    instruction: '',
};

export const UpdateAssistantRequest = {
    $type: 'yandex.cloud.ai.assistants.v1.UpdateAssistantRequest' as const,

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
                {
                    $type: 'yandex.cloud.ai.assistants.v1.UpdateAssistantRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
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

messageTypeRegistry.set(UpdateAssistantRequest.$type, UpdateAssistantRequest);

const baseUpdateAssistantRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.ai.assistants.v1.UpdateAssistantRequest.LabelsEntry',
    key: '',
    value: '',
};

export const UpdateAssistantRequest_LabelsEntry = {
    $type: 'yandex.cloud.ai.assistants.v1.UpdateAssistantRequest.LabelsEntry' as const,

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

messageTypeRegistry.set(
    UpdateAssistantRequest_LabelsEntry.$type,
    UpdateAssistantRequest_LabelsEntry,
);

const baseDeleteAssistantRequest: object = {
    $type: 'yandex.cloud.ai.assistants.v1.DeleteAssistantRequest',
    assistantId: '',
};

export const DeleteAssistantRequest = {
    $type: 'yandex.cloud.ai.assistants.v1.DeleteAssistantRequest' as const,

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

messageTypeRegistry.set(DeleteAssistantRequest.$type, DeleteAssistantRequest);

const baseDeleteAssistantResponse: object = {
    $type: 'yandex.cloud.ai.assistants.v1.DeleteAssistantResponse',
};

export const DeleteAssistantResponse = {
    $type: 'yandex.cloud.ai.assistants.v1.DeleteAssistantResponse' as const,

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

messageTypeRegistry.set(DeleteAssistantResponse.$type, DeleteAssistantResponse);

const baseListAssistantsRequest: object = {
    $type: 'yandex.cloud.ai.assistants.v1.ListAssistantsRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListAssistantsRequest = {
    $type: 'yandex.cloud.ai.assistants.v1.ListAssistantsRequest' as const,

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

messageTypeRegistry.set(ListAssistantsRequest.$type, ListAssistantsRequest);

const baseListAssistantsResponse: object = {
    $type: 'yandex.cloud.ai.assistants.v1.ListAssistantsResponse',
    nextPageToken: '',
};

export const ListAssistantsResponse = {
    $type: 'yandex.cloud.ai.assistants.v1.ListAssistantsResponse' as const,

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

messageTypeRegistry.set(ListAssistantsResponse.$type, ListAssistantsResponse);

const baseListAssistantVersionsRequest: object = {
    $type: 'yandex.cloud.ai.assistants.v1.ListAssistantVersionsRequest',
    assistantId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListAssistantVersionsRequest = {
    $type: 'yandex.cloud.ai.assistants.v1.ListAssistantVersionsRequest' as const,

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

messageTypeRegistry.set(ListAssistantVersionsRequest.$type, ListAssistantVersionsRequest);

const baseAssistantVersion: object = {
    $type: 'yandex.cloud.ai.assistants.v1.AssistantVersion',
    id: '',
};

export const AssistantVersion = {
    $type: 'yandex.cloud.ai.assistants.v1.AssistantVersion' as const,

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

messageTypeRegistry.set(AssistantVersion.$type, AssistantVersion);

const baseListAssistantVersionsResponse: object = {
    $type: 'yandex.cloud.ai.assistants.v1.ListAssistantVersionsResponse',
    nextPageToken: '',
};

export const ListAssistantVersionsResponse = {
    $type: 'yandex.cloud.ai.assistants.v1.ListAssistantVersionsResponse' as const,

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

messageTypeRegistry.set(ListAssistantVersionsResponse.$type, ListAssistantVersionsResponse);

export const AssistantServiceService = {
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
    create: handleUnaryCall<CreateAssistantRequest, Assistant>;
    get: handleUnaryCall<GetAssistantRequest, Assistant>;
    update: handleUnaryCall<UpdateAssistantRequest, Assistant>;
    delete: handleUnaryCall<DeleteAssistantRequest, DeleteAssistantResponse>;
    list: handleUnaryCall<ListAssistantsRequest, ListAssistantsResponse>;
    listVersions: handleUnaryCall<ListAssistantVersionsRequest, ListAssistantVersionsResponse>;
}

export interface AssistantServiceClient extends Client {
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
