/* eslint-disable */
import { messageTypeRegistry } from '../../../../../../typeRegistry';
import Long from 'long';
import {
    makeGenericClientConstructor,
    ChannelCredentials,
    ChannelOptions,
    UntypedServiceImplementation,
    handleUnaryCall,
    handleServerStreamingCall,
    Client,
    ClientUnaryCall,
    Metadata,
    CallOptions,
    ClientReadableStream,
    ServiceError,
} from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
import {
    PromptTruncationOptions,
    CompletionOptions,
} from '../../../../../../yandex/cloud/ai/assistants/v1/common';
import {
    MessageData,
    MessageContent,
    Message,
} from '../../../../../../yandex/cloud/ai/assistants/v1/threads/message';
import { Run } from '../../../../../../yandex/cloud/ai/assistants/v1/runs/run';
import { Error } from '../../../../../../yandex/cloud/ai/common/common';
import { Int64Value } from '../../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.ai.assistants.v1.runs';

export interface CreateRunRequest {
    $type: 'yandex.cloud.ai.assistants.v1.runs.CreateRunRequest';
    assistantId: string;
    threadId: string;
    labels: { [key: string]: string };
    additionalMessages: MessageData[];
    customPromptTruncationOptions?: PromptTruncationOptions;
    customCompletionOptions?: CompletionOptions;
    stream: boolean;
}

export interface CreateRunRequest_LabelsEntry {
    $type: 'yandex.cloud.ai.assistants.v1.runs.CreateRunRequest.LabelsEntry';
    key: string;
    value: string;
}

export interface ListenRunRequest {
    $type: 'yandex.cloud.ai.assistants.v1.runs.ListenRunRequest';
    runId: string;
    eventsStartIdx?: number;
}

export interface GetRunRequest {
    $type: 'yandex.cloud.ai.assistants.v1.runs.GetRunRequest';
    runId: string;
}

export interface GetLastRunByThreadRequest {
    $type: 'yandex.cloud.ai.assistants.v1.runs.GetLastRunByThreadRequest';
    threadId: string;
}

export interface ListRunsRequest {
    $type: 'yandex.cloud.ai.assistants.v1.runs.ListRunsRequest';
    folderId: string;
    pageSize: number;
    pageToken: string;
}

export interface ListRunsResponse {
    $type: 'yandex.cloud.ai.assistants.v1.runs.ListRunsResponse';
    runs: Run[];
    nextPageToken: string;
}

export interface StreamCursor {
    $type: 'yandex.cloud.ai.assistants.v1.runs.StreamCursor';
    currentEventIdx: number;
    numUserEventsReceived: number;
}

export interface StreamEvent {
    $type: 'yandex.cloud.ai.assistants.v1.runs.StreamEvent';
    eventType: StreamEvent_EventType;
    streamCursor?: StreamCursor;
    error?: Error | undefined;
    partialMessage?: MessageContent | undefined;
    completedMessage?: Message | undefined;
}

export enum StreamEvent_EventType {
    EVENT_TYPE_UNSPECIFIED = 0,
    PARTIAL_MESSAGE = 1,
    ERROR = 2,
    DONE = 3,
    UNRECOGNIZED = -1,
}

export function streamEvent_EventTypeFromJSON(object: any): StreamEvent_EventType {
    switch (object) {
        case 0:
        case 'EVENT_TYPE_UNSPECIFIED':
            return StreamEvent_EventType.EVENT_TYPE_UNSPECIFIED;
        case 1:
        case 'PARTIAL_MESSAGE':
            return StreamEvent_EventType.PARTIAL_MESSAGE;
        case 2:
        case 'ERROR':
            return StreamEvent_EventType.ERROR;
        case 3:
        case 'DONE':
            return StreamEvent_EventType.DONE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return StreamEvent_EventType.UNRECOGNIZED;
    }
}

export function streamEvent_EventTypeToJSON(object: StreamEvent_EventType): string {
    switch (object) {
        case StreamEvent_EventType.EVENT_TYPE_UNSPECIFIED:
            return 'EVENT_TYPE_UNSPECIFIED';
        case StreamEvent_EventType.PARTIAL_MESSAGE:
            return 'PARTIAL_MESSAGE';
        case StreamEvent_EventType.ERROR:
            return 'ERROR';
        case StreamEvent_EventType.DONE:
            return 'DONE';
        default:
            return 'UNKNOWN';
    }
}

const baseCreateRunRequest: object = {
    $type: 'yandex.cloud.ai.assistants.v1.runs.CreateRunRequest',
    assistantId: '',
    threadId: '',
    stream: false,
};

export const CreateRunRequest = {
    $type: 'yandex.cloud.ai.assistants.v1.runs.CreateRunRequest' as const,

    encode(message: CreateRunRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.assistantId !== '') {
            writer.uint32(10).string(message.assistantId);
        }
        if (message.threadId !== '') {
            writer.uint32(18).string(message.threadId);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateRunRequest_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.ai.assistants.v1.runs.CreateRunRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(26).fork(),
            ).ldelim();
        });
        for (const v of message.additionalMessages) {
            MessageData.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        if (message.customPromptTruncationOptions !== undefined) {
            PromptTruncationOptions.encode(
                message.customPromptTruncationOptions,
                writer.uint32(42).fork(),
            ).ldelim();
        }
        if (message.customCompletionOptions !== undefined) {
            CompletionOptions.encode(
                message.customCompletionOptions,
                writer.uint32(50).fork(),
            ).ldelim();
        }
        if (message.stream === true) {
            writer.uint32(56).bool(message.stream);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateRunRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateRunRequest } as CreateRunRequest;
        message.labels = {};
        message.additionalMessages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assistantId = reader.string();
                    break;
                case 2:
                    message.threadId = reader.string();
                    break;
                case 3:
                    const entry3 = CreateRunRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.labels[entry3.key] = entry3.value;
                    }
                    break;
                case 4:
                    message.additionalMessages.push(MessageData.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.customPromptTruncationOptions = PromptTruncationOptions.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 6:
                    message.customCompletionOptions = CompletionOptions.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 7:
                    message.stream = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateRunRequest {
        const message = { ...baseCreateRunRequest } as CreateRunRequest;
        message.assistantId =
            object.assistantId !== undefined && object.assistantId !== null
                ? String(object.assistantId)
                : '';
        message.threadId =
            object.threadId !== undefined && object.threadId !== null
                ? String(object.threadId)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.additionalMessages = (object.additionalMessages ?? []).map((e: any) =>
            MessageData.fromJSON(e),
        );
        message.customPromptTruncationOptions =
            object.customPromptTruncationOptions !== undefined &&
            object.customPromptTruncationOptions !== null
                ? PromptTruncationOptions.fromJSON(object.customPromptTruncationOptions)
                : undefined;
        message.customCompletionOptions =
            object.customCompletionOptions !== undefined && object.customCompletionOptions !== null
                ? CompletionOptions.fromJSON(object.customCompletionOptions)
                : undefined;
        message.stream =
            object.stream !== undefined && object.stream !== null ? Boolean(object.stream) : false;
        return message;
    },

    toJSON(message: CreateRunRequest): unknown {
        const obj: any = {};
        message.assistantId !== undefined && (obj.assistantId = message.assistantId);
        message.threadId !== undefined && (obj.threadId = message.threadId);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        if (message.additionalMessages) {
            obj.additionalMessages = message.additionalMessages.map((e) =>
                e ? MessageData.toJSON(e) : undefined,
            );
        } else {
            obj.additionalMessages = [];
        }
        message.customPromptTruncationOptions !== undefined &&
            (obj.customPromptTruncationOptions = message.customPromptTruncationOptions
                ? PromptTruncationOptions.toJSON(message.customPromptTruncationOptions)
                : undefined);
        message.customCompletionOptions !== undefined &&
            (obj.customCompletionOptions = message.customCompletionOptions
                ? CompletionOptions.toJSON(message.customCompletionOptions)
                : undefined);
        message.stream !== undefined && (obj.stream = message.stream);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateRunRequest>, I>>(object: I): CreateRunRequest {
        const message = { ...baseCreateRunRequest } as CreateRunRequest;
        message.assistantId = object.assistantId ?? '';
        message.threadId = object.threadId ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.additionalMessages =
            object.additionalMessages?.map((e) => MessageData.fromPartial(e)) || [];
        message.customPromptTruncationOptions =
            object.customPromptTruncationOptions !== undefined &&
            object.customPromptTruncationOptions !== null
                ? PromptTruncationOptions.fromPartial(object.customPromptTruncationOptions)
                : undefined;
        message.customCompletionOptions =
            object.customCompletionOptions !== undefined && object.customCompletionOptions !== null
                ? CompletionOptions.fromPartial(object.customCompletionOptions)
                : undefined;
        message.stream = object.stream ?? false;
        return message;
    },
};

messageTypeRegistry.set(CreateRunRequest.$type, CreateRunRequest);

const baseCreateRunRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.ai.assistants.v1.runs.CreateRunRequest.LabelsEntry',
    key: '',
    value: '',
};

export const CreateRunRequest_LabelsEntry = {
    $type: 'yandex.cloud.ai.assistants.v1.runs.CreateRunRequest.LabelsEntry' as const,

    encode(
        message: CreateRunRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateRunRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateRunRequest_LabelsEntry } as CreateRunRequest_LabelsEntry;
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

    fromJSON(object: any): CreateRunRequest_LabelsEntry {
        const message = { ...baseCreateRunRequest_LabelsEntry } as CreateRunRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateRunRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateRunRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateRunRequest_LabelsEntry {
        const message = { ...baseCreateRunRequest_LabelsEntry } as CreateRunRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(CreateRunRequest_LabelsEntry.$type, CreateRunRequest_LabelsEntry);

const baseListenRunRequest: object = {
    $type: 'yandex.cloud.ai.assistants.v1.runs.ListenRunRequest',
    runId: '',
};

export const ListenRunRequest = {
    $type: 'yandex.cloud.ai.assistants.v1.runs.ListenRunRequest' as const,

    encode(message: ListenRunRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.runId !== '') {
            writer.uint32(10).string(message.runId);
        }
        if (message.eventsStartIdx !== undefined) {
            Int64Value.encode(
                { $type: 'google.protobuf.Int64Value', value: message.eventsStartIdx! },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListenRunRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListenRunRequest } as ListenRunRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.runId = reader.string();
                    break;
                case 2:
                    message.eventsStartIdx = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListenRunRequest {
        const message = { ...baseListenRunRequest } as ListenRunRequest;
        message.runId =
            object.runId !== undefined && object.runId !== null ? String(object.runId) : '';
        message.eventsStartIdx =
            object.eventsStartIdx !== undefined && object.eventsStartIdx !== null
                ? Number(object.eventsStartIdx)
                : undefined;
        return message;
    },

    toJSON(message: ListenRunRequest): unknown {
        const obj: any = {};
        message.runId !== undefined && (obj.runId = message.runId);
        message.eventsStartIdx !== undefined && (obj.eventsStartIdx = message.eventsStartIdx);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListenRunRequest>, I>>(object: I): ListenRunRequest {
        const message = { ...baseListenRunRequest } as ListenRunRequest;
        message.runId = object.runId ?? '';
        message.eventsStartIdx = object.eventsStartIdx ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(ListenRunRequest.$type, ListenRunRequest);

const baseGetRunRequest: object = {
    $type: 'yandex.cloud.ai.assistants.v1.runs.GetRunRequest',
    runId: '',
};

export const GetRunRequest = {
    $type: 'yandex.cloud.ai.assistants.v1.runs.GetRunRequest' as const,

    encode(message: GetRunRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.runId !== '') {
            writer.uint32(10).string(message.runId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetRunRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetRunRequest } as GetRunRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.runId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetRunRequest {
        const message = { ...baseGetRunRequest } as GetRunRequest;
        message.runId =
            object.runId !== undefined && object.runId !== null ? String(object.runId) : '';
        return message;
    },

    toJSON(message: GetRunRequest): unknown {
        const obj: any = {};
        message.runId !== undefined && (obj.runId = message.runId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetRunRequest>, I>>(object: I): GetRunRequest {
        const message = { ...baseGetRunRequest } as GetRunRequest;
        message.runId = object.runId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetRunRequest.$type, GetRunRequest);

const baseGetLastRunByThreadRequest: object = {
    $type: 'yandex.cloud.ai.assistants.v1.runs.GetLastRunByThreadRequest',
    threadId: '',
};

export const GetLastRunByThreadRequest = {
    $type: 'yandex.cloud.ai.assistants.v1.runs.GetLastRunByThreadRequest' as const,

    encode(
        message: GetLastRunByThreadRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.threadId !== '') {
            writer.uint32(10).string(message.threadId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetLastRunByThreadRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetLastRunByThreadRequest } as GetLastRunByThreadRequest;
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

    fromJSON(object: any): GetLastRunByThreadRequest {
        const message = { ...baseGetLastRunByThreadRequest } as GetLastRunByThreadRequest;
        message.threadId =
            object.threadId !== undefined && object.threadId !== null
                ? String(object.threadId)
                : '';
        return message;
    },

    toJSON(message: GetLastRunByThreadRequest): unknown {
        const obj: any = {};
        message.threadId !== undefined && (obj.threadId = message.threadId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetLastRunByThreadRequest>, I>>(
        object: I,
    ): GetLastRunByThreadRequest {
        const message = { ...baseGetLastRunByThreadRequest } as GetLastRunByThreadRequest;
        message.threadId = object.threadId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetLastRunByThreadRequest.$type, GetLastRunByThreadRequest);

const baseListRunsRequest: object = {
    $type: 'yandex.cloud.ai.assistants.v1.runs.ListRunsRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListRunsRequest = {
    $type: 'yandex.cloud.ai.assistants.v1.runs.ListRunsRequest' as const,

    encode(message: ListRunsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListRunsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListRunsRequest } as ListRunsRequest;
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

    fromJSON(object: any): ListRunsRequest {
        const message = { ...baseListRunsRequest } as ListRunsRequest;
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

    toJSON(message: ListRunsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListRunsRequest>, I>>(object: I): ListRunsRequest {
        const message = { ...baseListRunsRequest } as ListRunsRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListRunsRequest.$type, ListRunsRequest);

const baseListRunsResponse: object = {
    $type: 'yandex.cloud.ai.assistants.v1.runs.ListRunsResponse',
    nextPageToken: '',
};

export const ListRunsResponse = {
    $type: 'yandex.cloud.ai.assistants.v1.runs.ListRunsResponse' as const,

    encode(message: ListRunsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.runs) {
            Run.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListRunsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListRunsResponse } as ListRunsResponse;
        message.runs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.runs.push(Run.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListRunsResponse {
        const message = { ...baseListRunsResponse } as ListRunsResponse;
        message.runs = (object.runs ?? []).map((e: any) => Run.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListRunsResponse): unknown {
        const obj: any = {};
        if (message.runs) {
            obj.runs = message.runs.map((e) => (e ? Run.toJSON(e) : undefined));
        } else {
            obj.runs = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListRunsResponse>, I>>(object: I): ListRunsResponse {
        const message = { ...baseListRunsResponse } as ListRunsResponse;
        message.runs = object.runs?.map((e) => Run.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListRunsResponse.$type, ListRunsResponse);

const baseStreamCursor: object = {
    $type: 'yandex.cloud.ai.assistants.v1.runs.StreamCursor',
    currentEventIdx: 0,
    numUserEventsReceived: 0,
};

export const StreamCursor = {
    $type: 'yandex.cloud.ai.assistants.v1.runs.StreamCursor' as const,

    encode(message: StreamCursor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.currentEventIdx !== 0) {
            writer.uint32(8).int64(message.currentEventIdx);
        }
        if (message.numUserEventsReceived !== 0) {
            writer.uint32(16).int64(message.numUserEventsReceived);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StreamCursor {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStreamCursor } as StreamCursor;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.currentEventIdx = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.numUserEventsReceived = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StreamCursor {
        const message = { ...baseStreamCursor } as StreamCursor;
        message.currentEventIdx =
            object.currentEventIdx !== undefined && object.currentEventIdx !== null
                ? Number(object.currentEventIdx)
                : 0;
        message.numUserEventsReceived =
            object.numUserEventsReceived !== undefined && object.numUserEventsReceived !== null
                ? Number(object.numUserEventsReceived)
                : 0;
        return message;
    },

    toJSON(message: StreamCursor): unknown {
        const obj: any = {};
        message.currentEventIdx !== undefined &&
            (obj.currentEventIdx = Math.round(message.currentEventIdx));
        message.numUserEventsReceived !== undefined &&
            (obj.numUserEventsReceived = Math.round(message.numUserEventsReceived));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StreamCursor>, I>>(object: I): StreamCursor {
        const message = { ...baseStreamCursor } as StreamCursor;
        message.currentEventIdx = object.currentEventIdx ?? 0;
        message.numUserEventsReceived = object.numUserEventsReceived ?? 0;
        return message;
    },
};

messageTypeRegistry.set(StreamCursor.$type, StreamCursor);

const baseStreamEvent: object = {
    $type: 'yandex.cloud.ai.assistants.v1.runs.StreamEvent',
    eventType: 0,
};

export const StreamEvent = {
    $type: 'yandex.cloud.ai.assistants.v1.runs.StreamEvent' as const,

    encode(message: StreamEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.eventType !== 0) {
            writer.uint32(8).int32(message.eventType);
        }
        if (message.streamCursor !== undefined) {
            StreamCursor.encode(message.streamCursor, writer.uint32(18).fork()).ldelim();
        }
        if (message.error !== undefined) {
            Error.encode(message.error, writer.uint32(26).fork()).ldelim();
        }
        if (message.partialMessage !== undefined) {
            MessageContent.encode(message.partialMessage, writer.uint32(34).fork()).ldelim();
        }
        if (message.completedMessage !== undefined) {
            Message.encode(message.completedMessage, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StreamEvent {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStreamEvent } as StreamEvent;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventType = reader.int32() as any;
                    break;
                case 2:
                    message.streamCursor = StreamCursor.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.error = Error.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.partialMessage = MessageContent.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.completedMessage = Message.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StreamEvent {
        const message = { ...baseStreamEvent } as StreamEvent;
        message.eventType =
            object.eventType !== undefined && object.eventType !== null
                ? streamEvent_EventTypeFromJSON(object.eventType)
                : 0;
        message.streamCursor =
            object.streamCursor !== undefined && object.streamCursor !== null
                ? StreamCursor.fromJSON(object.streamCursor)
                : undefined;
        message.error =
            object.error !== undefined && object.error !== null
                ? Error.fromJSON(object.error)
                : undefined;
        message.partialMessage =
            object.partialMessage !== undefined && object.partialMessage !== null
                ? MessageContent.fromJSON(object.partialMessage)
                : undefined;
        message.completedMessage =
            object.completedMessage !== undefined && object.completedMessage !== null
                ? Message.fromJSON(object.completedMessage)
                : undefined;
        return message;
    },

    toJSON(message: StreamEvent): unknown {
        const obj: any = {};
        message.eventType !== undefined &&
            (obj.eventType = streamEvent_EventTypeToJSON(message.eventType));
        message.streamCursor !== undefined &&
            (obj.streamCursor = message.streamCursor
                ? StreamCursor.toJSON(message.streamCursor)
                : undefined);
        message.error !== undefined &&
            (obj.error = message.error ? Error.toJSON(message.error) : undefined);
        message.partialMessage !== undefined &&
            (obj.partialMessage = message.partialMessage
                ? MessageContent.toJSON(message.partialMessage)
                : undefined);
        message.completedMessage !== undefined &&
            (obj.completedMessage = message.completedMessage
                ? Message.toJSON(message.completedMessage)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StreamEvent>, I>>(object: I): StreamEvent {
        const message = { ...baseStreamEvent } as StreamEvent;
        message.eventType = object.eventType ?? 0;
        message.streamCursor =
            object.streamCursor !== undefined && object.streamCursor !== null
                ? StreamCursor.fromPartial(object.streamCursor)
                : undefined;
        message.error =
            object.error !== undefined && object.error !== null
                ? Error.fromPartial(object.error)
                : undefined;
        message.partialMessage =
            object.partialMessage !== undefined && object.partialMessage !== null
                ? MessageContent.fromPartial(object.partialMessage)
                : undefined;
        message.completedMessage =
            object.completedMessage !== undefined && object.completedMessage !== null
                ? Message.fromPartial(object.completedMessage)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(StreamEvent.$type, StreamEvent);

export const RunServiceService = {
    create: {
        path: '/yandex.cloud.ai.assistants.v1.runs.RunService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateRunRequest) =>
            Buffer.from(CreateRunRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateRunRequest.decode(value),
        responseSerialize: (value: Run) => Buffer.from(Run.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Run.decode(value),
    },
    listen: {
        path: '/yandex.cloud.ai.assistants.v1.runs.RunService/Listen',
        requestStream: false,
        responseStream: true,
        requestSerialize: (value: ListenRunRequest) =>
            Buffer.from(ListenRunRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListenRunRequest.decode(value),
        responseSerialize: (value: StreamEvent) => Buffer.from(StreamEvent.encode(value).finish()),
        responseDeserialize: (value: Buffer) => StreamEvent.decode(value),
    },
    get: {
        path: '/yandex.cloud.ai.assistants.v1.runs.RunService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetRunRequest) =>
            Buffer.from(GetRunRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetRunRequest.decode(value),
        responseSerialize: (value: Run) => Buffer.from(Run.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Run.decode(value),
    },
    getLastByThread: {
        path: '/yandex.cloud.ai.assistants.v1.runs.RunService/GetLastByThread',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetLastRunByThreadRequest) =>
            Buffer.from(GetLastRunByThreadRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetLastRunByThreadRequest.decode(value),
        responseSerialize: (value: Run) => Buffer.from(Run.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Run.decode(value),
    },
    list: {
        path: '/yandex.cloud.ai.assistants.v1.runs.RunService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListRunsRequest) =>
            Buffer.from(ListRunsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListRunsRequest.decode(value),
        responseSerialize: (value: ListRunsResponse) =>
            Buffer.from(ListRunsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListRunsResponse.decode(value),
    },
} as const;

export interface RunServiceServer extends UntypedServiceImplementation {
    create: handleUnaryCall<CreateRunRequest, Run>;
    listen: handleServerStreamingCall<ListenRunRequest, StreamEvent>;
    get: handleUnaryCall<GetRunRequest, Run>;
    getLastByThread: handleUnaryCall<GetLastRunByThreadRequest, Run>;
    list: handleUnaryCall<ListRunsRequest, ListRunsResponse>;
}

export interface RunServiceClient extends Client {
    create(
        request: CreateRunRequest,
        callback: (error: ServiceError | null, response: Run) => void,
    ): ClientUnaryCall;
    create(
        request: CreateRunRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Run) => void,
    ): ClientUnaryCall;
    create(
        request: CreateRunRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Run) => void,
    ): ClientUnaryCall;
    listen(
        request: ListenRunRequest,
        options?: Partial<CallOptions>,
    ): ClientReadableStream<StreamEvent>;
    listen(
        request: ListenRunRequest,
        metadata?: Metadata,
        options?: Partial<CallOptions>,
    ): ClientReadableStream<StreamEvent>;
    get(
        request: GetRunRequest,
        callback: (error: ServiceError | null, response: Run) => void,
    ): ClientUnaryCall;
    get(
        request: GetRunRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Run) => void,
    ): ClientUnaryCall;
    get(
        request: GetRunRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Run) => void,
    ): ClientUnaryCall;
    getLastByThread(
        request: GetLastRunByThreadRequest,
        callback: (error: ServiceError | null, response: Run) => void,
    ): ClientUnaryCall;
    getLastByThread(
        request: GetLastRunByThreadRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Run) => void,
    ): ClientUnaryCall;
    getLastByThread(
        request: GetLastRunByThreadRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Run) => void,
    ): ClientUnaryCall;
    list(
        request: ListRunsRequest,
        callback: (error: ServiceError | null, response: ListRunsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListRunsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListRunsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListRunsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListRunsResponse) => void,
    ): ClientUnaryCall;
}

export const RunServiceClient = makeGenericClientConstructor(
    RunServiceService,
    'yandex.cloud.ai.assistants.v1.runs.RunService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): RunServiceClient;
    service: typeof RunServiceService;
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
