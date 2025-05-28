/* eslint-disable */
import Long from 'long';
import {
    makeGenericClientConstructor,
    ChannelCredentials,
    ChannelOptions,
    UntypedServiceImplementation,
    handleServerStreamingCall,
    Client,
    CallOptions,
    ClientReadableStream,
    Metadata,
    handleUnaryCall,
    ClientUnaryCall,
    ServiceError,
} from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
import {
    CompletionOptions,
    ContentUsage,
    Message,
    Tool,
    JsonSchema,
    Alternative,
    Token,
} from '../../../../../../yandex/cloud/ai/foundation_models/v1/text_common';
import {
    BatchInferenceTaskStatus,
    batchInferenceTaskStatusFromJSON,
    batchInferenceTaskStatusToJSON,
} from '../../../../../../yandex/cloud/ai/foundation_models/v1/batch_inference_task_status';
import { Operation } from '../../../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.ai.foundation_models.v1';

/** Request for the service to generate text completion. */
export interface CompletionRequest {
    /** The [ID of the model](/docs/foundation-models/concepts/yandexgpt/models) to be used for completion generation. */
    modelUri: string;
    /** Configuration options for completion generation. */
    completionOptions?: CompletionOptions;
    /** A list of messages representing the context for the completion model. */
    messages: Message[];
    /**
     * List of tools that are available for the model to invoke during the completion generation.
     * Note: This parameter is not yet supported and will be ignored if provided.
     */
    tools: Tool[];
    /**
     * When set to true, the model will respond with a valid JSON object.
     * Be sure to explicitly ask the model for JSON.
     * Otherwise, it may generate excessive whitespace and run indefinitely until it reaches the token limit.
     */
    jsonObject: boolean | undefined;
    /** Enforces a specific JSON structure for the model's response based on a provided schema. */
    jsonSchema?: JsonSchema | undefined;
}

/** Response containing generated text completions. */
export interface CompletionResponse {
    /** A list of generated completion alternatives. */
    alternatives: Alternative[];
    /** A set of statistics describing the number of content tokens used by the completion model. */
    usage?: ContentUsage;
    /** The model version changes with each new releases. */
    modelVersion: string;
}

/** Request for the service to generate batch text completion. */
export interface BatchCompletionRequest {
    /** The [ID of the model](/docs/foundation-models/concepts/yandexgpt/models) to be used for batch completion generation. */
    modelUri: string;
    /** Configuration options for completion generation. */
    completionOptions?: CompletionOptions;
    /** ID of the dataset containing the context for the completion model. */
    sourceDatasetId: string | undefined;
}

/** Metadata of the batch completion operation. */
export interface BatchCompletionMetadata {
    /** The ID of the batch completion task. */
    taskId: string;
    /** The status of the batch completion task. */
    taskStatus: BatchInferenceTaskStatus;
    /** A number of currently completed batches of the completion task. */
    completedBatches: number;
    /** A number of total batches of the completion task. */
    totalBatches: number;
}

/** Response containing information about completion task. */
export interface BatchCompletionResponse {
    /** The ID of the batch completion task. */
    taskId: string;
    /** The status of the batch completion task. */
    taskStatus: BatchInferenceTaskStatus;
    /** The ID of the dataset containing completion results. */
    resultDatasetId: string;
}

/** Request for the service to tokenize input text. */
export interface TokenizeRequest {
    /** The identifier of the model to be used for tokenization. */
    modelUri: string;
    /** Text to be tokenized. */
    text: string;
}

/** Response containing tokenized content from request. */
export interface TokenizeResponse {
    /** A list of tokens obtained from tokenization. */
    tokens: Token[];
    /** Model version (changes with model releases). */
    modelVersion: string;
}

const baseCompletionRequest: object = { modelUri: '' };

export const CompletionRequest = {
    encode(message: CompletionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.modelUri !== '') {
            writer.uint32(10).string(message.modelUri);
        }
        if (message.completionOptions !== undefined) {
            CompletionOptions.encode(message.completionOptions, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.messages) {
            Message.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.tools) {
            Tool.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        if (message.jsonObject !== undefined) {
            writer.uint32(40).bool(message.jsonObject);
        }
        if (message.jsonSchema !== undefined) {
            JsonSchema.encode(message.jsonSchema, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CompletionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCompletionRequest } as CompletionRequest;
        message.messages = [];
        message.tools = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.modelUri = reader.string();
                    break;
                case 2:
                    message.completionOptions = CompletionOptions.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.messages.push(Message.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.tools.push(Tool.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.jsonObject = reader.bool();
                    break;
                case 6:
                    message.jsonSchema = JsonSchema.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CompletionRequest {
        const message = { ...baseCompletionRequest } as CompletionRequest;
        message.modelUri =
            object.modelUri !== undefined && object.modelUri !== null
                ? String(object.modelUri)
                : '';
        message.completionOptions =
            object.completionOptions !== undefined && object.completionOptions !== null
                ? CompletionOptions.fromJSON(object.completionOptions)
                : undefined;
        message.messages = (object.messages ?? []).map((e: any) => Message.fromJSON(e));
        message.tools = (object.tools ?? []).map((e: any) => Tool.fromJSON(e));
        message.jsonObject =
            object.jsonObject !== undefined && object.jsonObject !== null
                ? Boolean(object.jsonObject)
                : undefined;
        message.jsonSchema =
            object.jsonSchema !== undefined && object.jsonSchema !== null
                ? JsonSchema.fromJSON(object.jsonSchema)
                : undefined;
        return message;
    },

    toJSON(message: CompletionRequest): unknown {
        const obj: any = {};
        message.modelUri !== undefined && (obj.modelUri = message.modelUri);
        message.completionOptions !== undefined &&
            (obj.completionOptions = message.completionOptions
                ? CompletionOptions.toJSON(message.completionOptions)
                : undefined);
        if (message.messages) {
            obj.messages = message.messages.map((e) => (e ? Message.toJSON(e) : undefined));
        } else {
            obj.messages = [];
        }
        if (message.tools) {
            obj.tools = message.tools.map((e) => (e ? Tool.toJSON(e) : undefined));
        } else {
            obj.tools = [];
        }
        message.jsonObject !== undefined && (obj.jsonObject = message.jsonObject);
        message.jsonSchema !== undefined &&
            (obj.jsonSchema = message.jsonSchema
                ? JsonSchema.toJSON(message.jsonSchema)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CompletionRequest>, I>>(object: I): CompletionRequest {
        const message = { ...baseCompletionRequest } as CompletionRequest;
        message.modelUri = object.modelUri ?? '';
        message.completionOptions =
            object.completionOptions !== undefined && object.completionOptions !== null
                ? CompletionOptions.fromPartial(object.completionOptions)
                : undefined;
        message.messages = object.messages?.map((e) => Message.fromPartial(e)) || [];
        message.tools = object.tools?.map((e) => Tool.fromPartial(e)) || [];
        message.jsonObject = object.jsonObject ?? undefined;
        message.jsonSchema =
            object.jsonSchema !== undefined && object.jsonSchema !== null
                ? JsonSchema.fromPartial(object.jsonSchema)
                : undefined;
        return message;
    },
};

const baseCompletionResponse: object = { modelVersion: '' };

export const CompletionResponse = {
    encode(message: CompletionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.alternatives) {
            Alternative.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.usage !== undefined) {
            ContentUsage.encode(message.usage, writer.uint32(18).fork()).ldelim();
        }
        if (message.modelVersion !== '') {
            writer.uint32(26).string(message.modelVersion);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CompletionResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCompletionResponse } as CompletionResponse;
        message.alternatives = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alternatives.push(Alternative.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.usage = ContentUsage.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.modelVersion = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CompletionResponse {
        const message = { ...baseCompletionResponse } as CompletionResponse;
        message.alternatives = (object.alternatives ?? []).map((e: any) => Alternative.fromJSON(e));
        message.usage =
            object.usage !== undefined && object.usage !== null
                ? ContentUsage.fromJSON(object.usage)
                : undefined;
        message.modelVersion =
            object.modelVersion !== undefined && object.modelVersion !== null
                ? String(object.modelVersion)
                : '';
        return message;
    },

    toJSON(message: CompletionResponse): unknown {
        const obj: any = {};
        if (message.alternatives) {
            obj.alternatives = message.alternatives.map((e) =>
                e ? Alternative.toJSON(e) : undefined,
            );
        } else {
            obj.alternatives = [];
        }
        message.usage !== undefined &&
            (obj.usage = message.usage ? ContentUsage.toJSON(message.usage) : undefined);
        message.modelVersion !== undefined && (obj.modelVersion = message.modelVersion);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CompletionResponse>, I>>(
        object: I,
    ): CompletionResponse {
        const message = { ...baseCompletionResponse } as CompletionResponse;
        message.alternatives = object.alternatives?.map((e) => Alternative.fromPartial(e)) || [];
        message.usage =
            object.usage !== undefined && object.usage !== null
                ? ContentUsage.fromPartial(object.usage)
                : undefined;
        message.modelVersion = object.modelVersion ?? '';
        return message;
    },
};

const baseBatchCompletionRequest: object = { modelUri: '' };

export const BatchCompletionRequest = {
    encode(message: BatchCompletionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.modelUri !== '') {
            writer.uint32(10).string(message.modelUri);
        }
        if (message.completionOptions !== undefined) {
            CompletionOptions.encode(message.completionOptions, writer.uint32(18).fork()).ldelim();
        }
        if (message.sourceDatasetId !== undefined) {
            writer.uint32(26).string(message.sourceDatasetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchCompletionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchCompletionRequest } as BatchCompletionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.modelUri = reader.string();
                    break;
                case 2:
                    message.completionOptions = CompletionOptions.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.sourceDatasetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchCompletionRequest {
        const message = { ...baseBatchCompletionRequest } as BatchCompletionRequest;
        message.modelUri =
            object.modelUri !== undefined && object.modelUri !== null
                ? String(object.modelUri)
                : '';
        message.completionOptions =
            object.completionOptions !== undefined && object.completionOptions !== null
                ? CompletionOptions.fromJSON(object.completionOptions)
                : undefined;
        message.sourceDatasetId =
            object.sourceDatasetId !== undefined && object.sourceDatasetId !== null
                ? String(object.sourceDatasetId)
                : undefined;
        return message;
    },

    toJSON(message: BatchCompletionRequest): unknown {
        const obj: any = {};
        message.modelUri !== undefined && (obj.modelUri = message.modelUri);
        message.completionOptions !== undefined &&
            (obj.completionOptions = message.completionOptions
                ? CompletionOptions.toJSON(message.completionOptions)
                : undefined);
        message.sourceDatasetId !== undefined && (obj.sourceDatasetId = message.sourceDatasetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchCompletionRequest>, I>>(
        object: I,
    ): BatchCompletionRequest {
        const message = { ...baseBatchCompletionRequest } as BatchCompletionRequest;
        message.modelUri = object.modelUri ?? '';
        message.completionOptions =
            object.completionOptions !== undefined && object.completionOptions !== null
                ? CompletionOptions.fromPartial(object.completionOptions)
                : undefined;
        message.sourceDatasetId = object.sourceDatasetId ?? undefined;
        return message;
    },
};

const baseBatchCompletionMetadata: object = {
    taskId: '',
    taskStatus: 0,
    completedBatches: 0,
    totalBatches: 0,
};

export const BatchCompletionMetadata = {
    encode(message: BatchCompletionMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.taskId !== '') {
            writer.uint32(10).string(message.taskId);
        }
        if (message.taskStatus !== 0) {
            writer.uint32(16).int32(message.taskStatus);
        }
        if (message.completedBatches !== 0) {
            writer.uint32(24).int64(message.completedBatches);
        }
        if (message.totalBatches !== 0) {
            writer.uint32(32).int64(message.totalBatches);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchCompletionMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchCompletionMetadata } as BatchCompletionMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.taskId = reader.string();
                    break;
                case 2:
                    message.taskStatus = reader.int32() as any;
                    break;
                case 3:
                    message.completedBatches = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.totalBatches = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchCompletionMetadata {
        const message = { ...baseBatchCompletionMetadata } as BatchCompletionMetadata;
        message.taskId =
            object.taskId !== undefined && object.taskId !== null ? String(object.taskId) : '';
        message.taskStatus =
            object.taskStatus !== undefined && object.taskStatus !== null
                ? batchInferenceTaskStatusFromJSON(object.taskStatus)
                : 0;
        message.completedBatches =
            object.completedBatches !== undefined && object.completedBatches !== null
                ? Number(object.completedBatches)
                : 0;
        message.totalBatches =
            object.totalBatches !== undefined && object.totalBatches !== null
                ? Number(object.totalBatches)
                : 0;
        return message;
    },

    toJSON(message: BatchCompletionMetadata): unknown {
        const obj: any = {};
        message.taskId !== undefined && (obj.taskId = message.taskId);
        message.taskStatus !== undefined &&
            (obj.taskStatus = batchInferenceTaskStatusToJSON(message.taskStatus));
        message.completedBatches !== undefined &&
            (obj.completedBatches = Math.round(message.completedBatches));
        message.totalBatches !== undefined && (obj.totalBatches = Math.round(message.totalBatches));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchCompletionMetadata>, I>>(
        object: I,
    ): BatchCompletionMetadata {
        const message = { ...baseBatchCompletionMetadata } as BatchCompletionMetadata;
        message.taskId = object.taskId ?? '';
        message.taskStatus = object.taskStatus ?? 0;
        message.completedBatches = object.completedBatches ?? 0;
        message.totalBatches = object.totalBatches ?? 0;
        return message;
    },
};

const baseBatchCompletionResponse: object = { taskId: '', taskStatus: 0, resultDatasetId: '' };

export const BatchCompletionResponse = {
    encode(message: BatchCompletionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.taskId !== '') {
            writer.uint32(10).string(message.taskId);
        }
        if (message.taskStatus !== 0) {
            writer.uint32(16).int32(message.taskStatus);
        }
        if (message.resultDatasetId !== '') {
            writer.uint32(26).string(message.resultDatasetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchCompletionResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchCompletionResponse } as BatchCompletionResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.taskId = reader.string();
                    break;
                case 2:
                    message.taskStatus = reader.int32() as any;
                    break;
                case 3:
                    message.resultDatasetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchCompletionResponse {
        const message = { ...baseBatchCompletionResponse } as BatchCompletionResponse;
        message.taskId =
            object.taskId !== undefined && object.taskId !== null ? String(object.taskId) : '';
        message.taskStatus =
            object.taskStatus !== undefined && object.taskStatus !== null
                ? batchInferenceTaskStatusFromJSON(object.taskStatus)
                : 0;
        message.resultDatasetId =
            object.resultDatasetId !== undefined && object.resultDatasetId !== null
                ? String(object.resultDatasetId)
                : '';
        return message;
    },

    toJSON(message: BatchCompletionResponse): unknown {
        const obj: any = {};
        message.taskId !== undefined && (obj.taskId = message.taskId);
        message.taskStatus !== undefined &&
            (obj.taskStatus = batchInferenceTaskStatusToJSON(message.taskStatus));
        message.resultDatasetId !== undefined && (obj.resultDatasetId = message.resultDatasetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchCompletionResponse>, I>>(
        object: I,
    ): BatchCompletionResponse {
        const message = { ...baseBatchCompletionResponse } as BatchCompletionResponse;
        message.taskId = object.taskId ?? '';
        message.taskStatus = object.taskStatus ?? 0;
        message.resultDatasetId = object.resultDatasetId ?? '';
        return message;
    },
};

const baseTokenizeRequest: object = { modelUri: '', text: '' };

export const TokenizeRequest = {
    encode(message: TokenizeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.modelUri !== '') {
            writer.uint32(10).string(message.modelUri);
        }
        if (message.text !== '') {
            writer.uint32(18).string(message.text);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TokenizeRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTokenizeRequest } as TokenizeRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.modelUri = reader.string();
                    break;
                case 2:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TokenizeRequest {
        const message = { ...baseTokenizeRequest } as TokenizeRequest;
        message.modelUri =
            object.modelUri !== undefined && object.modelUri !== null
                ? String(object.modelUri)
                : '';
        message.text = object.text !== undefined && object.text !== null ? String(object.text) : '';
        return message;
    },

    toJSON(message: TokenizeRequest): unknown {
        const obj: any = {};
        message.modelUri !== undefined && (obj.modelUri = message.modelUri);
        message.text !== undefined && (obj.text = message.text);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TokenizeRequest>, I>>(object: I): TokenizeRequest {
        const message = { ...baseTokenizeRequest } as TokenizeRequest;
        message.modelUri = object.modelUri ?? '';
        message.text = object.text ?? '';
        return message;
    },
};

const baseTokenizeResponse: object = { modelVersion: '' };

export const TokenizeResponse = {
    encode(message: TokenizeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.tokens) {
            Token.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.modelVersion !== '') {
            writer.uint32(18).string(message.modelVersion);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TokenizeResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTokenizeResponse } as TokenizeResponse;
        message.tokens = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokens.push(Token.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.modelVersion = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TokenizeResponse {
        const message = { ...baseTokenizeResponse } as TokenizeResponse;
        message.tokens = (object.tokens ?? []).map((e: any) => Token.fromJSON(e));
        message.modelVersion =
            object.modelVersion !== undefined && object.modelVersion !== null
                ? String(object.modelVersion)
                : '';
        return message;
    },

    toJSON(message: TokenizeResponse): unknown {
        const obj: any = {};
        if (message.tokens) {
            obj.tokens = message.tokens.map((e) => (e ? Token.toJSON(e) : undefined));
        } else {
            obj.tokens = [];
        }
        message.modelVersion !== undefined && (obj.modelVersion = message.modelVersion);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TokenizeResponse>, I>>(object: I): TokenizeResponse {
        const message = { ...baseTokenizeResponse } as TokenizeResponse;
        message.tokens = object.tokens?.map((e) => Token.fromPartial(e)) || [];
        message.modelVersion = object.modelVersion ?? '';
        return message;
    },
};

/** Service for text generation. */
export const TextGenerationServiceService = {
    /** A method for generating text completions in [synchronous mode](/docs/foundation-models/concepts/#working-mode). */
    completion: {
        path: '/yandex.cloud.ai.foundation_models.v1.TextGenerationService/Completion',
        requestStream: false,
        responseStream: true,
        requestSerialize: (value: CompletionRequest) =>
            Buffer.from(CompletionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CompletionRequest.decode(value),
        responseSerialize: (value: CompletionResponse) =>
            Buffer.from(CompletionResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => CompletionResponse.decode(value),
    },
} as const;

export interface TextGenerationServiceServer extends UntypedServiceImplementation {
    /** A method for generating text completions in [synchronous mode](/docs/foundation-models/concepts/#working-mode). */
    completion: handleServerStreamingCall<CompletionRequest, CompletionResponse>;
}

export interface TextGenerationServiceClient extends Client {
    /** A method for generating text completions in [synchronous mode](/docs/foundation-models/concepts/#working-mode). */
    completion(
        request: CompletionRequest,
        options?: Partial<CallOptions>,
    ): ClientReadableStream<CompletionResponse>;
    completion(
        request: CompletionRequest,
        metadata?: Metadata,
        options?: Partial<CallOptions>,
    ): ClientReadableStream<CompletionResponse>;
}

export const TextGenerationServiceClient = makeGenericClientConstructor(
    TextGenerationServiceService,
    'yandex.cloud.ai.foundation_models.v1.TextGenerationService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): TextGenerationServiceClient;
    service: typeof TextGenerationServiceService;
};

/** Service for asynchronous text generation. */
export const TextGenerationAsyncServiceService = {
    /** A method for generating text completions in [asynchronous mode](/docs/foundation-models/concepts/#working-mode). */
    completion: {
        path: '/yandex.cloud.ai.foundation_models.v1.TextGenerationAsyncService/Completion',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CompletionRequest) =>
            Buffer.from(CompletionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CompletionRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface TextGenerationAsyncServiceServer extends UntypedServiceImplementation {
    /** A method for generating text completions in [asynchronous mode](/docs/foundation-models/concepts/#working-mode). */
    completion: handleUnaryCall<CompletionRequest, Operation>;
}

export interface TextGenerationAsyncServiceClient extends Client {
    /** A method for generating text completions in [asynchronous mode](/docs/foundation-models/concepts/#working-mode). */
    completion(
        request: CompletionRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    completion(
        request: CompletionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    completion(
        request: CompletionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const TextGenerationAsyncServiceClient = makeGenericClientConstructor(
    TextGenerationAsyncServiceService,
    'yandex.cloud.ai.foundation_models.v1.TextGenerationAsyncService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): TextGenerationAsyncServiceClient;
    service: typeof TextGenerationAsyncServiceService;
};

/** Service for text generation. */
export const TextGenerationBatchServiceService = {
    /**
     * A method for generating text completions in [synchronous mode](/docs/foundation-models/concepts/#working-mode).
     * Note: Not implemented yet
     */
    completion: {
        path: '/yandex.cloud.ai.foundation_models.v1.TextGenerationBatchService/Completion',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: BatchCompletionRequest) =>
            Buffer.from(BatchCompletionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => BatchCompletionRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface TextGenerationBatchServiceServer extends UntypedServiceImplementation {
    /**
     * A method for generating text completions in [synchronous mode](/docs/foundation-models/concepts/#working-mode).
     * Note: Not implemented yet
     */
    completion: handleUnaryCall<BatchCompletionRequest, Operation>;
}

export interface TextGenerationBatchServiceClient extends Client {
    /**
     * A method for generating text completions in [synchronous mode](/docs/foundation-models/concepts/#working-mode).
     * Note: Not implemented yet
     */
    completion(
        request: BatchCompletionRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    completion(
        request: BatchCompletionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    completion(
        request: BatchCompletionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const TextGenerationBatchServiceClient = makeGenericClientConstructor(
    TextGenerationBatchServiceService,
    'yandex.cloud.ai.foundation_models.v1.TextGenerationBatchService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): TextGenerationBatchServiceClient;
    service: typeof TextGenerationBatchServiceService;
};

/** Service for tokenizing input content. */
export const TokenizerServiceService = {
    /** RPC method for tokenizing text. */
    tokenize: {
        path: '/yandex.cloud.ai.foundation_models.v1.TokenizerService/Tokenize',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: TokenizeRequest) =>
            Buffer.from(TokenizeRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => TokenizeRequest.decode(value),
        responseSerialize: (value: TokenizeResponse) =>
            Buffer.from(TokenizeResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => TokenizeResponse.decode(value),
    },
    /** RPC method for tokenizing content of CompletionRequest */
    tokenizeCompletion: {
        path: '/yandex.cloud.ai.foundation_models.v1.TokenizerService/TokenizeCompletion',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CompletionRequest) =>
            Buffer.from(CompletionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CompletionRequest.decode(value),
        responseSerialize: (value: TokenizeResponse) =>
            Buffer.from(TokenizeResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => TokenizeResponse.decode(value),
    },
} as const;

export interface TokenizerServiceServer extends UntypedServiceImplementation {
    /** RPC method for tokenizing text. */
    tokenize: handleUnaryCall<TokenizeRequest, TokenizeResponse>;
    /** RPC method for tokenizing content of CompletionRequest */
    tokenizeCompletion: handleUnaryCall<CompletionRequest, TokenizeResponse>;
}

export interface TokenizerServiceClient extends Client {
    /** RPC method for tokenizing text. */
    tokenize(
        request: TokenizeRequest,
        callback: (error: ServiceError | null, response: TokenizeResponse) => void,
    ): ClientUnaryCall;
    tokenize(
        request: TokenizeRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: TokenizeResponse) => void,
    ): ClientUnaryCall;
    tokenize(
        request: TokenizeRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: TokenizeResponse) => void,
    ): ClientUnaryCall;
    /** RPC method for tokenizing content of CompletionRequest */
    tokenizeCompletion(
        request: CompletionRequest,
        callback: (error: ServiceError | null, response: TokenizeResponse) => void,
    ): ClientUnaryCall;
    tokenizeCompletion(
        request: CompletionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: TokenizeResponse) => void,
    ): ClientUnaryCall;
    tokenizeCompletion(
        request: CompletionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: TokenizeResponse) => void,
    ): ClientUnaryCall;
}

export const TokenizerServiceClient = makeGenericClientConstructor(
    TokenizerServiceService,
    'yandex.cloud.ai.foundation_models.v1.TokenizerService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): TokenizerServiceClient;
    service: typeof TokenizerServiceService;
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
