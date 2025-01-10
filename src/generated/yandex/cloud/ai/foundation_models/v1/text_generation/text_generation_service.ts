/* eslint-disable */
import { messageTypeRegistry } from '../../../../../../typeRegistry';
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
    Alternative,
    Token,
} from '../../../../../../yandex/cloud/ai/foundation_models/v1/text_common';
import { Operation } from '../../../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.ai.foundation_models.v1';

/** Request for the service to generate text completion. */
export interface CompletionRequest {
    $type: 'yandex.cloud.ai.foundation_models.v1.CompletionRequest';
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
}

/** Response containing generated text completions. */
export interface CompletionResponse {
    $type: 'yandex.cloud.ai.foundation_models.v1.CompletionResponse';
    /** A list of generated completion alternatives. */
    alternatives: Alternative[];
    /** A set of statistics describing the number of content tokens used by the completion model. */
    usage?: ContentUsage;
    /** The model version changes with each new releases. */
    modelVersion: string;
}

/** Request for the service to tokenize input text. */
export interface TokenizeRequest {
    $type: 'yandex.cloud.ai.foundation_models.v1.TokenizeRequest';
    /** The identifier of the model to be used for tokenization. */
    modelUri: string;
    /** Text to be tokenized. */
    text: string;
}

/** Response containing tokenized content from request. */
export interface TokenizeResponse {
    $type: 'yandex.cloud.ai.foundation_models.v1.TokenizeResponse';
    /** A list of tokens obtained from tokenization. */
    tokens: Token[];
    /** Model version (changes with model releases). */
    modelVersion: string;
}

const baseCompletionRequest: object = {
    $type: 'yandex.cloud.ai.foundation_models.v1.CompletionRequest',
    modelUri: '',
};

export const CompletionRequest = {
    $type: 'yandex.cloud.ai.foundation_models.v1.CompletionRequest' as const,

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
        return message;
    },
};

messageTypeRegistry.set(CompletionRequest.$type, CompletionRequest);

const baseCompletionResponse: object = {
    $type: 'yandex.cloud.ai.foundation_models.v1.CompletionResponse',
    modelVersion: '',
};

export const CompletionResponse = {
    $type: 'yandex.cloud.ai.foundation_models.v1.CompletionResponse' as const,

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

messageTypeRegistry.set(CompletionResponse.$type, CompletionResponse);

const baseTokenizeRequest: object = {
    $type: 'yandex.cloud.ai.foundation_models.v1.TokenizeRequest',
    modelUri: '',
    text: '',
};

export const TokenizeRequest = {
    $type: 'yandex.cloud.ai.foundation_models.v1.TokenizeRequest' as const,

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

messageTypeRegistry.set(TokenizeRequest.$type, TokenizeRequest);

const baseTokenizeResponse: object = {
    $type: 'yandex.cloud.ai.foundation_models.v1.TokenizeResponse',
    modelVersion: '',
};

export const TokenizeResponse = {
    $type: 'yandex.cloud.ai.foundation_models.v1.TokenizeResponse' as const,

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

messageTypeRegistry.set(TokenizeResponse.$type, TokenizeResponse);

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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
