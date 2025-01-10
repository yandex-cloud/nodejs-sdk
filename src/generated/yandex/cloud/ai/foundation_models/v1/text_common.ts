/* eslint-disable */
import { messageTypeRegistry } from '../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { DoubleValue, Int64Value } from '../../../../../google/protobuf/wrappers';
import { Struct } from '../../../../../google/protobuf/struct';

export const protobufPackage = 'yandex.cloud.ai.foundation_models.v1';

/** Defines the options for completion generation. */
export interface CompletionOptions {
    $type: 'yandex.cloud.ai.foundation_models.v1.CompletionOptions';
    /** Enables streaming of partially generated text. */
    stream: boolean;
    /**
     * Affects creativity and randomness of responses. Should be a double number between 0 (inclusive) and 1 (inclusive).
     * Lower values produce more straightforward responses while higher values lead to increased creativity and randomness.
     * Default temperature: 0.3
     */
    temperature?: number;
    /**
     * The limit on the number of tokens used for single completion generation.
     * Must be greater than zero. This maximum allowed parameter value may depend on the model being used.
     */
    maxTokens?: number;
}

/** A message object representing a wrapper over the inputs and outputs of the completion model. */
export interface Message {
    $type: 'yandex.cloud.ai.foundation_models.v1.Message';
    /**
     * The ID of the message sender. Supported roles:
     * * `system`: Special role used to define the behaviour of the completion model.
     * * `assistant`: A role used by the model to generate responses.
     * * `user`: A role used by the user to describe requests to the model.
     */
    role: string;
    /** Textual content of the message. */
    text: string | undefined;
    /** List of tool calls made by the model as part of the response generation. */
    toolCallList?: ToolCallList | undefined;
    /** List of tool results returned from external tools that were invoked by the model. */
    toolResultList?: ToolResultList | undefined;
}

/** An object representing the number of content [tokens](/docs/foundation-models/concepts/yandexgpt/tokens) used by the completion model. */
export interface ContentUsage {
    $type: 'yandex.cloud.ai.foundation_models.v1.ContentUsage';
    /** The number of tokens in the textual part of the model input. */
    inputTextTokens: number;
    /** The number of tokens in the generated completion. */
    completionTokens: number;
    /** The total number of tokens, including all input tokens and all generated tokens. */
    totalTokens: number;
}

/** Represents a generated completion alternative, including its content and generation status. */
export interface Alternative {
    $type: 'yandex.cloud.ai.foundation_models.v1.Alternative';
    /** A message with the content of the alternative. */
    message?: Message;
    /** The generation status of the alternative. */
    status: Alternative_AlternativeStatus;
}

/** Enum representing the generation status of the alternative. */
export enum Alternative_AlternativeStatus {
    /** ALTERNATIVE_STATUS_UNSPECIFIED - Unspecified generation status. */
    ALTERNATIVE_STATUS_UNSPECIFIED = 0,
    /** ALTERNATIVE_STATUS_PARTIAL - Partially generated alternative. */
    ALTERNATIVE_STATUS_PARTIAL = 1,
    /** ALTERNATIVE_STATUS_TRUNCATED_FINAL - Incomplete final alternative resulting from reaching the maximum allowed number of tokens. */
    ALTERNATIVE_STATUS_TRUNCATED_FINAL = 2,
    /** ALTERNATIVE_STATUS_FINAL - Final alternative generated without running into any limits. */
    ALTERNATIVE_STATUS_FINAL = 3,
    /**
     * ALTERNATIVE_STATUS_CONTENT_FILTER - Generation was stopped due to the discovery of potentially sensitive content in the prompt or generated response.
     * To fix, modify the prompt and restart generation.
     */
    ALTERNATIVE_STATUS_CONTENT_FILTER = 4,
    /** ALTERNATIVE_STATUS_TOOL_CALLS - Tools were invoked during the completion generation. */
    ALTERNATIVE_STATUS_TOOL_CALLS = 5,
    UNRECOGNIZED = -1,
}

export function alternative_AlternativeStatusFromJSON(object: any): Alternative_AlternativeStatus {
    switch (object) {
        case 0:
        case 'ALTERNATIVE_STATUS_UNSPECIFIED':
            return Alternative_AlternativeStatus.ALTERNATIVE_STATUS_UNSPECIFIED;
        case 1:
        case 'ALTERNATIVE_STATUS_PARTIAL':
            return Alternative_AlternativeStatus.ALTERNATIVE_STATUS_PARTIAL;
        case 2:
        case 'ALTERNATIVE_STATUS_TRUNCATED_FINAL':
            return Alternative_AlternativeStatus.ALTERNATIVE_STATUS_TRUNCATED_FINAL;
        case 3:
        case 'ALTERNATIVE_STATUS_FINAL':
            return Alternative_AlternativeStatus.ALTERNATIVE_STATUS_FINAL;
        case 4:
        case 'ALTERNATIVE_STATUS_CONTENT_FILTER':
            return Alternative_AlternativeStatus.ALTERNATIVE_STATUS_CONTENT_FILTER;
        case 5:
        case 'ALTERNATIVE_STATUS_TOOL_CALLS':
            return Alternative_AlternativeStatus.ALTERNATIVE_STATUS_TOOL_CALLS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Alternative_AlternativeStatus.UNRECOGNIZED;
    }
}

export function alternative_AlternativeStatusToJSON(object: Alternative_AlternativeStatus): string {
    switch (object) {
        case Alternative_AlternativeStatus.ALTERNATIVE_STATUS_UNSPECIFIED:
            return 'ALTERNATIVE_STATUS_UNSPECIFIED';
        case Alternative_AlternativeStatus.ALTERNATIVE_STATUS_PARTIAL:
            return 'ALTERNATIVE_STATUS_PARTIAL';
        case Alternative_AlternativeStatus.ALTERNATIVE_STATUS_TRUNCATED_FINAL:
            return 'ALTERNATIVE_STATUS_TRUNCATED_FINAL';
        case Alternative_AlternativeStatus.ALTERNATIVE_STATUS_FINAL:
            return 'ALTERNATIVE_STATUS_FINAL';
        case Alternative_AlternativeStatus.ALTERNATIVE_STATUS_CONTENT_FILTER:
            return 'ALTERNATIVE_STATUS_CONTENT_FILTER';
        case Alternative_AlternativeStatus.ALTERNATIVE_STATUS_TOOL_CALLS:
            return 'ALTERNATIVE_STATUS_TOOL_CALLS';
        default:
            return 'UNKNOWN';
    }
}

/** Represents a token, the basic unit of content, used by the foundation model. */
export interface Token {
    $type: 'yandex.cloud.ai.foundation_models.v1.Token';
    /** An internal token identifier. */
    id: number;
    /** The textual representation of the token. */
    text: string;
    /** Indicates whether the token is special or not. Special tokens may define the model's behavior and are not visible to users. */
    special: boolean;
}

/** Represents a tool that can be invoked during completion generation. */
export interface Tool {
    $type: 'yandex.cloud.ai.foundation_models.v1.Tool';
    /** Represents a function that can be called. */
    function?: FunctionTool | undefined;
}

/** Represents a function tool that can be invoked during completion generation. */
export interface FunctionTool {
    $type: 'yandex.cloud.ai.foundation_models.v1.FunctionTool';
    /** The name of the function. */
    name: string;
    /** A description of the function's purpose or behavior. */
    description: string;
    /**
     * A JSON Schema that defines the expected parameters for the function.
     * The schema should describe the required fields, their types, and any constraints or default values.
     */
    parameters?: { [key: string]: any };
}

/** Represents a call to a tool. */
export interface ToolCall {
    $type: 'yandex.cloud.ai.foundation_models.v1.ToolCall';
    /** Represents a call to a function. */
    functionCall?: FunctionCall | undefined;
}

/** Represents the invocation of a function with specific arguments. */
export interface FunctionCall {
    $type: 'yandex.cloud.ai.foundation_models.v1.FunctionCall';
    /** The name of the function being called. */
    name: string;
    /**
     * The structured arguments passed to the function.
     * These arguments must adhere to the JSON Schema defined in the corresponding function's parameters.
     */
    arguments?: { [key: string]: any };
}

/** Represents a list of tool calls. */
export interface ToolCallList {
    $type: 'yandex.cloud.ai.foundation_models.v1.ToolCallList';
    /** A list of tool calls to be executed. */
    toolCalls: ToolCall[];
}

/** Represents the result of a tool call. */
export interface ToolResult {
    $type: 'yandex.cloud.ai.foundation_models.v1.ToolResult';
    /** Represents the result of a function call. */
    functionResult?: FunctionResult | undefined;
}

/** Represents the result of a function call. */
export interface FunctionResult {
    $type: 'yandex.cloud.ai.foundation_models.v1.FunctionResult';
    /** The name of the function that was executed. */
    name: string;
    /**
     * The result of the function call, represented as a string.
     * This field can be used to store the output of the function.
     */
    content: string | undefined;
}

/** Represents a list of tool results. */
export interface ToolResultList {
    $type: 'yandex.cloud.ai.foundation_models.v1.ToolResultList';
    /** A list of tool results. */
    toolResults: ToolResult[];
}

const baseCompletionOptions: object = {
    $type: 'yandex.cloud.ai.foundation_models.v1.CompletionOptions',
    stream: false,
};

export const CompletionOptions = {
    $type: 'yandex.cloud.ai.foundation_models.v1.CompletionOptions' as const,

    encode(message: CompletionOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.stream === true) {
            writer.uint32(8).bool(message.stream);
        }
        if (message.temperature !== undefined) {
            DoubleValue.encode(
                { $type: 'google.protobuf.DoubleValue', value: message.temperature! },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.maxTokens !== undefined) {
            Int64Value.encode(
                { $type: 'google.protobuf.Int64Value', value: message.maxTokens! },
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CompletionOptions {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCompletionOptions } as CompletionOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stream = reader.bool();
                    break;
                case 2:
                    message.temperature = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.maxTokens = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CompletionOptions {
        const message = { ...baseCompletionOptions } as CompletionOptions;
        message.stream =
            object.stream !== undefined && object.stream !== null ? Boolean(object.stream) : false;
        message.temperature =
            object.temperature !== undefined && object.temperature !== null
                ? Number(object.temperature)
                : undefined;
        message.maxTokens =
            object.maxTokens !== undefined && object.maxTokens !== null
                ? Number(object.maxTokens)
                : undefined;
        return message;
    },

    toJSON(message: CompletionOptions): unknown {
        const obj: any = {};
        message.stream !== undefined && (obj.stream = message.stream);
        message.temperature !== undefined && (obj.temperature = message.temperature);
        message.maxTokens !== undefined && (obj.maxTokens = message.maxTokens);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CompletionOptions>, I>>(object: I): CompletionOptions {
        const message = { ...baseCompletionOptions } as CompletionOptions;
        message.stream = object.stream ?? false;
        message.temperature = object.temperature ?? undefined;
        message.maxTokens = object.maxTokens ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(CompletionOptions.$type, CompletionOptions);

const baseMessage: object = { $type: 'yandex.cloud.ai.foundation_models.v1.Message', role: '' };

export const Message = {
    $type: 'yandex.cloud.ai.foundation_models.v1.Message' as const,

    encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.role !== '') {
            writer.uint32(10).string(message.role);
        }
        if (message.text !== undefined) {
            writer.uint32(18).string(message.text);
        }
        if (message.toolCallList !== undefined) {
            ToolCallList.encode(message.toolCallList, writer.uint32(26).fork()).ldelim();
        }
        if (message.toolResultList !== undefined) {
            ToolResultList.encode(message.toolResultList, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Message {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMessage } as Message;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.role = reader.string();
                    break;
                case 2:
                    message.text = reader.string();
                    break;
                case 3:
                    message.toolCallList = ToolCallList.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.toolResultList = ToolResultList.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Message {
        const message = { ...baseMessage } as Message;
        message.role = object.role !== undefined && object.role !== null ? String(object.role) : '';
        message.text =
            object.text !== undefined && object.text !== null ? String(object.text) : undefined;
        message.toolCallList =
            object.toolCallList !== undefined && object.toolCallList !== null
                ? ToolCallList.fromJSON(object.toolCallList)
                : undefined;
        message.toolResultList =
            object.toolResultList !== undefined && object.toolResultList !== null
                ? ToolResultList.fromJSON(object.toolResultList)
                : undefined;
        return message;
    },

    toJSON(message: Message): unknown {
        const obj: any = {};
        message.role !== undefined && (obj.role = message.role);
        message.text !== undefined && (obj.text = message.text);
        message.toolCallList !== undefined &&
            (obj.toolCallList = message.toolCallList
                ? ToolCallList.toJSON(message.toolCallList)
                : undefined);
        message.toolResultList !== undefined &&
            (obj.toolResultList = message.toolResultList
                ? ToolResultList.toJSON(message.toolResultList)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Message>, I>>(object: I): Message {
        const message = { ...baseMessage } as Message;
        message.role = object.role ?? '';
        message.text = object.text ?? undefined;
        message.toolCallList =
            object.toolCallList !== undefined && object.toolCallList !== null
                ? ToolCallList.fromPartial(object.toolCallList)
                : undefined;
        message.toolResultList =
            object.toolResultList !== undefined && object.toolResultList !== null
                ? ToolResultList.fromPartial(object.toolResultList)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Message.$type, Message);

const baseContentUsage: object = {
    $type: 'yandex.cloud.ai.foundation_models.v1.ContentUsage',
    inputTextTokens: 0,
    completionTokens: 0,
    totalTokens: 0,
};

export const ContentUsage = {
    $type: 'yandex.cloud.ai.foundation_models.v1.ContentUsage' as const,

    encode(message: ContentUsage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.inputTextTokens !== 0) {
            writer.uint32(8).int64(message.inputTextTokens);
        }
        if (message.completionTokens !== 0) {
            writer.uint32(16).int64(message.completionTokens);
        }
        if (message.totalTokens !== 0) {
            writer.uint32(24).int64(message.totalTokens);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ContentUsage {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseContentUsage } as ContentUsage;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inputTextTokens = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.completionTokens = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.totalTokens = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ContentUsage {
        const message = { ...baseContentUsage } as ContentUsage;
        message.inputTextTokens =
            object.inputTextTokens !== undefined && object.inputTextTokens !== null
                ? Number(object.inputTextTokens)
                : 0;
        message.completionTokens =
            object.completionTokens !== undefined && object.completionTokens !== null
                ? Number(object.completionTokens)
                : 0;
        message.totalTokens =
            object.totalTokens !== undefined && object.totalTokens !== null
                ? Number(object.totalTokens)
                : 0;
        return message;
    },

    toJSON(message: ContentUsage): unknown {
        const obj: any = {};
        message.inputTextTokens !== undefined &&
            (obj.inputTextTokens = Math.round(message.inputTextTokens));
        message.completionTokens !== undefined &&
            (obj.completionTokens = Math.round(message.completionTokens));
        message.totalTokens !== undefined && (obj.totalTokens = Math.round(message.totalTokens));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ContentUsage>, I>>(object: I): ContentUsage {
        const message = { ...baseContentUsage } as ContentUsage;
        message.inputTextTokens = object.inputTextTokens ?? 0;
        message.completionTokens = object.completionTokens ?? 0;
        message.totalTokens = object.totalTokens ?? 0;
        return message;
    },
};

messageTypeRegistry.set(ContentUsage.$type, ContentUsage);

const baseAlternative: object = {
    $type: 'yandex.cloud.ai.foundation_models.v1.Alternative',
    status: 0,
};

export const Alternative = {
    $type: 'yandex.cloud.ai.foundation_models.v1.Alternative' as const,

    encode(message: Alternative, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.message !== undefined) {
            Message.encode(message.message, writer.uint32(10).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Alternative {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAlternative } as Alternative;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = Message.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.status = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Alternative {
        const message = { ...baseAlternative } as Alternative;
        message.message =
            object.message !== undefined && object.message !== null
                ? Message.fromJSON(object.message)
                : undefined;
        message.status =
            object.status !== undefined && object.status !== null
                ? alternative_AlternativeStatusFromJSON(object.status)
                : 0;
        return message;
    },

    toJSON(message: Alternative): unknown {
        const obj: any = {};
        message.message !== undefined &&
            (obj.message = message.message ? Message.toJSON(message.message) : undefined);
        message.status !== undefined &&
            (obj.status = alternative_AlternativeStatusToJSON(message.status));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Alternative>, I>>(object: I): Alternative {
        const message = { ...baseAlternative } as Alternative;
        message.message =
            object.message !== undefined && object.message !== null
                ? Message.fromPartial(object.message)
                : undefined;
        message.status = object.status ?? 0;
        return message;
    },
};

messageTypeRegistry.set(Alternative.$type, Alternative);

const baseToken: object = {
    $type: 'yandex.cloud.ai.foundation_models.v1.Token',
    id: 0,
    text: '',
    special: false,
};

export const Token = {
    $type: 'yandex.cloud.ai.foundation_models.v1.Token' as const,

    encode(message: Token, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== 0) {
            writer.uint32(8).int64(message.id);
        }
        if (message.text !== '') {
            writer.uint32(18).string(message.text);
        }
        if (message.special === true) {
            writer.uint32(24).bool(message.special);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Token {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseToken } as Token;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.text = reader.string();
                    break;
                case 3:
                    message.special = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Token {
        const message = { ...baseToken } as Token;
        message.id = object.id !== undefined && object.id !== null ? Number(object.id) : 0;
        message.text = object.text !== undefined && object.text !== null ? String(object.text) : '';
        message.special =
            object.special !== undefined && object.special !== null
                ? Boolean(object.special)
                : false;
        return message;
    },

    toJSON(message: Token): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        message.text !== undefined && (obj.text = message.text);
        message.special !== undefined && (obj.special = message.special);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Token>, I>>(object: I): Token {
        const message = { ...baseToken } as Token;
        message.id = object.id ?? 0;
        message.text = object.text ?? '';
        message.special = object.special ?? false;
        return message;
    },
};

messageTypeRegistry.set(Token.$type, Token);

const baseTool: object = { $type: 'yandex.cloud.ai.foundation_models.v1.Tool' };

export const Tool = {
    $type: 'yandex.cloud.ai.foundation_models.v1.Tool' as const,

    encode(message: Tool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.function !== undefined) {
            FunctionTool.encode(message.function, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Tool {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTool } as Tool;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.function = FunctionTool.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Tool {
        const message = { ...baseTool } as Tool;
        message.function =
            object.function !== undefined && object.function !== null
                ? FunctionTool.fromJSON(object.function)
                : undefined;
        return message;
    },

    toJSON(message: Tool): unknown {
        const obj: any = {};
        message.function !== undefined &&
            (obj.function = message.function ? FunctionTool.toJSON(message.function) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Tool>, I>>(object: I): Tool {
        const message = { ...baseTool } as Tool;
        message.function =
            object.function !== undefined && object.function !== null
                ? FunctionTool.fromPartial(object.function)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Tool.$type, Tool);

const baseFunctionTool: object = {
    $type: 'yandex.cloud.ai.foundation_models.v1.FunctionTool',
    name: '',
    description: '',
};

export const FunctionTool = {
    $type: 'yandex.cloud.ai.foundation_models.v1.FunctionTool' as const,

    encode(message: FunctionTool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (message.parameters !== undefined) {
            Struct.encode(Struct.wrap(message.parameters), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): FunctionTool {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFunctionTool } as FunctionTool;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.parameters = Struct.unwrap(Struct.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): FunctionTool {
        const message = { ...baseFunctionTool } as FunctionTool;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.parameters = typeof object.parameters === 'object' ? object.parameters : undefined;
        return message;
    },

    toJSON(message: FunctionTool): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.parameters !== undefined && (obj.parameters = message.parameters);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<FunctionTool>, I>>(object: I): FunctionTool {
        const message = { ...baseFunctionTool } as FunctionTool;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.parameters = object.parameters ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(FunctionTool.$type, FunctionTool);

const baseToolCall: object = { $type: 'yandex.cloud.ai.foundation_models.v1.ToolCall' };

export const ToolCall = {
    $type: 'yandex.cloud.ai.foundation_models.v1.ToolCall' as const,

    encode(message: ToolCall, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.functionCall !== undefined) {
            FunctionCall.encode(message.functionCall, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ToolCall {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseToolCall } as ToolCall;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionCall = FunctionCall.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ToolCall {
        const message = { ...baseToolCall } as ToolCall;
        message.functionCall =
            object.functionCall !== undefined && object.functionCall !== null
                ? FunctionCall.fromJSON(object.functionCall)
                : undefined;
        return message;
    },

    toJSON(message: ToolCall): unknown {
        const obj: any = {};
        message.functionCall !== undefined &&
            (obj.functionCall = message.functionCall
                ? FunctionCall.toJSON(message.functionCall)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ToolCall>, I>>(object: I): ToolCall {
        const message = { ...baseToolCall } as ToolCall;
        message.functionCall =
            object.functionCall !== undefined && object.functionCall !== null
                ? FunctionCall.fromPartial(object.functionCall)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(ToolCall.$type, ToolCall);

const baseFunctionCall: object = {
    $type: 'yandex.cloud.ai.foundation_models.v1.FunctionCall',
    name: '',
};

export const FunctionCall = {
    $type: 'yandex.cloud.ai.foundation_models.v1.FunctionCall' as const,

    encode(message: FunctionCall, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.arguments !== undefined) {
            Struct.encode(Struct.wrap(message.arguments), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): FunctionCall {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFunctionCall } as FunctionCall;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.arguments = Struct.unwrap(Struct.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): FunctionCall {
        const message = { ...baseFunctionCall } as FunctionCall;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.arguments = typeof object.arguments === 'object' ? object.arguments : undefined;
        return message;
    },

    toJSON(message: FunctionCall): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.arguments !== undefined && (obj.arguments = message.arguments);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<FunctionCall>, I>>(object: I): FunctionCall {
        const message = { ...baseFunctionCall } as FunctionCall;
        message.name = object.name ?? '';
        message.arguments = object.arguments ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(FunctionCall.$type, FunctionCall);

const baseToolCallList: object = { $type: 'yandex.cloud.ai.foundation_models.v1.ToolCallList' };

export const ToolCallList = {
    $type: 'yandex.cloud.ai.foundation_models.v1.ToolCallList' as const,

    encode(message: ToolCallList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.toolCalls) {
            ToolCall.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ToolCallList {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseToolCallList } as ToolCallList;
        message.toolCalls = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.toolCalls.push(ToolCall.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ToolCallList {
        const message = { ...baseToolCallList } as ToolCallList;
        message.toolCalls = (object.toolCalls ?? []).map((e: any) => ToolCall.fromJSON(e));
        return message;
    },

    toJSON(message: ToolCallList): unknown {
        const obj: any = {};
        if (message.toolCalls) {
            obj.toolCalls = message.toolCalls.map((e) => (e ? ToolCall.toJSON(e) : undefined));
        } else {
            obj.toolCalls = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ToolCallList>, I>>(object: I): ToolCallList {
        const message = { ...baseToolCallList } as ToolCallList;
        message.toolCalls = object.toolCalls?.map((e) => ToolCall.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(ToolCallList.$type, ToolCallList);

const baseToolResult: object = { $type: 'yandex.cloud.ai.foundation_models.v1.ToolResult' };

export const ToolResult = {
    $type: 'yandex.cloud.ai.foundation_models.v1.ToolResult' as const,

    encode(message: ToolResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.functionResult !== undefined) {
            FunctionResult.encode(message.functionResult, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ToolResult {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseToolResult } as ToolResult;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionResult = FunctionResult.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ToolResult {
        const message = { ...baseToolResult } as ToolResult;
        message.functionResult =
            object.functionResult !== undefined && object.functionResult !== null
                ? FunctionResult.fromJSON(object.functionResult)
                : undefined;
        return message;
    },

    toJSON(message: ToolResult): unknown {
        const obj: any = {};
        message.functionResult !== undefined &&
            (obj.functionResult = message.functionResult
                ? FunctionResult.toJSON(message.functionResult)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ToolResult>, I>>(object: I): ToolResult {
        const message = { ...baseToolResult } as ToolResult;
        message.functionResult =
            object.functionResult !== undefined && object.functionResult !== null
                ? FunctionResult.fromPartial(object.functionResult)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(ToolResult.$type, ToolResult);

const baseFunctionResult: object = {
    $type: 'yandex.cloud.ai.foundation_models.v1.FunctionResult',
    name: '',
};

export const FunctionResult = {
    $type: 'yandex.cloud.ai.foundation_models.v1.FunctionResult' as const,

    encode(message: FunctionResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.content !== undefined) {
            writer.uint32(18).string(message.content);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): FunctionResult {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFunctionResult } as FunctionResult;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): FunctionResult {
        const message = { ...baseFunctionResult } as FunctionResult;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.content =
            object.content !== undefined && object.content !== null
                ? String(object.content)
                : undefined;
        return message;
    },

    toJSON(message: FunctionResult): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.content !== undefined && (obj.content = message.content);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<FunctionResult>, I>>(object: I): FunctionResult {
        const message = { ...baseFunctionResult } as FunctionResult;
        message.name = object.name ?? '';
        message.content = object.content ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(FunctionResult.$type, FunctionResult);

const baseToolResultList: object = { $type: 'yandex.cloud.ai.foundation_models.v1.ToolResultList' };

export const ToolResultList = {
    $type: 'yandex.cloud.ai.foundation_models.v1.ToolResultList' as const,

    encode(message: ToolResultList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.toolResults) {
            ToolResult.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ToolResultList {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseToolResultList } as ToolResultList;
        message.toolResults = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.toolResults.push(ToolResult.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ToolResultList {
        const message = { ...baseToolResultList } as ToolResultList;
        message.toolResults = (object.toolResults ?? []).map((e: any) => ToolResult.fromJSON(e));
        return message;
    },

    toJSON(message: ToolResultList): unknown {
        const obj: any = {};
        if (message.toolResults) {
            obj.toolResults = message.toolResults.map((e) =>
                e ? ToolResult.toJSON(e) : undefined,
            );
        } else {
            obj.toolResults = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ToolResultList>, I>>(object: I): ToolResultList {
        const message = { ...baseToolResultList } as ToolResultList;
        message.toolResults = object.toolResults?.map((e) => ToolResult.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(ToolResultList.$type, ToolResultList);

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
