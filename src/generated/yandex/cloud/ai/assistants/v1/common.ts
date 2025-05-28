/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Int64Value, DoubleValue } from '../../../../../google/protobuf/wrappers';
import { Struct } from '../../../../../google/protobuf/struct';

export const protobufPackage = 'yandex.cloud.ai.assistants.v1';

/** Defines the options for truncating thread messages within a prompt. */
export interface PromptTruncationOptions {
    /**
     * The maximum number of tokens allowed in the prompt.
     * If the prompt exceeds this limit, the thread messages will be truncated.
     * Default max_prompt_tokens: 7000
     */
    maxPromptTokens?: number;
    autoStrategy?: PromptTruncationOptions_AutoStrategy | undefined;
    /**
     * Retains only the last `num_messages` messages in the thread.
     * If these messages exceed `max_prompt_tokens`, older messages will be further truncated to fit the limit.
     */
    lastMessagesStrategy?: PromptTruncationOptions_LastMessagesStrategy | undefined;
}

/** Auto truncation strategy. */
export interface PromptTruncationOptions_AutoStrategy {}

/** Truncates the prompt by retaining only the last `num_messages` messages in the thread. */
export interface PromptTruncationOptions_LastMessagesStrategy {
    /**
     * The number of most recent messages to retain in the prompt.
     * If these messages exceed `max_prompt_tokens`, older messages will be further truncated to fit the limit.
     */
    numMessages: number;
}

/** Defines the options for completion generation. */
export interface CompletionOptions {
    /**
     * The limit on the number of tokens used for single completion generation.
     * Must be greater than zero. This maximum allowed parameter value may depend on the model being used.
     */
    maxTokens?: number;
    /**
     * Affects creativity and randomness of responses. Should be a double number between 0 (inclusive) and 1 (inclusive).
     * Lower values produce more straightforward responses while higher values lead to increased creativity and randomness.
     * Default temperature: 0.3
     */
    temperature?: number;
}

/** Represents a general tool that can be one of several types. */
export interface Tool {
    /** SearchIndexTool tool that performs search across specified indexes. */
    searchIndex?: SearchIndexTool | undefined;
    /** Function tool that can be invoked by the assistant. */
    function?: FunctionTool | undefined;
}

/** Represents a call to a tool. */
export interface ToolCall {
    /** Represents a call to a function. */
    functionCall?: FunctionCall | undefined;
}

/** Represents a list of tool calls. */
export interface ToolCallList {
    /** A list of tool calls to be executed. */
    toolCalls: ToolCall[];
}

/** Represents the result of a tool call. */
export interface ToolResult {
    /** Represents the result of a function call. */
    functionResult?: FunctionResult | undefined;
}

/** Represents a list of tool results. */
export interface ToolResultList {
    /** A list of tool results. */
    toolResults: ToolResult[];
}

/** Configures a tool that enables Retrieval-Augmented Generation (RAG) by allowing the assistant to search across a specified search index. */
export interface SearchIndexTool {
    /** A list of search index IDs that this tool will query. Currently, only a single index ID is supported. */
    searchIndexIds: string[];
    /**
     * The maximum number of results to return from the search.
     * Fewer results may be returned if necessary to fit within the prompt's token limit.
     * This ensures that the combined prompt and search results do not exceed the token constraints.
     */
    maxNumResults?: number;
}

/** Represents a function tool that can be invoked by the assistant. */
export interface FunctionTool {
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

/** Represents the invocation of a function with specific arguments. */
export interface FunctionCall {
    /** The name of the function being called. */
    name: string;
    /**
     * The structured arguments passed to the function.
     * These arguments must adhere to the JSON Schema defined in the corresponding function's parameters.
     */
    arguments?: { [key: string]: any };
}

/** Represents the result of a function call. */
export interface FunctionResult {
    /** The name of the function that was executed. */
    name: string;
    /**
     * The result of the function call, represented as a string.
     * This field can be used to store the output of the function.
     */
    content: string | undefined;
}

const basePromptTruncationOptions: object = {};

export const PromptTruncationOptions = {
    encode(message: PromptTruncationOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.maxPromptTokens !== undefined) {
            Int64Value.encode(
                { value: message.maxPromptTokens! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.autoStrategy !== undefined) {
            PromptTruncationOptions_AutoStrategy.encode(
                message.autoStrategy,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.lastMessagesStrategy !== undefined) {
            PromptTruncationOptions_LastMessagesStrategy.encode(
                message.lastMessagesStrategy,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PromptTruncationOptions {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePromptTruncationOptions } as PromptTruncationOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxPromptTokens = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.autoStrategy = PromptTruncationOptions_AutoStrategy.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.lastMessagesStrategy =
                        PromptTruncationOptions_LastMessagesStrategy.decode(
                            reader,
                            reader.uint32(),
                        );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PromptTruncationOptions {
        const message = { ...basePromptTruncationOptions } as PromptTruncationOptions;
        message.maxPromptTokens =
            object.maxPromptTokens !== undefined && object.maxPromptTokens !== null
                ? Number(object.maxPromptTokens)
                : undefined;
        message.autoStrategy =
            object.autoStrategy !== undefined && object.autoStrategy !== null
                ? PromptTruncationOptions_AutoStrategy.fromJSON(object.autoStrategy)
                : undefined;
        message.lastMessagesStrategy =
            object.lastMessagesStrategy !== undefined && object.lastMessagesStrategy !== null
                ? PromptTruncationOptions_LastMessagesStrategy.fromJSON(object.lastMessagesStrategy)
                : undefined;
        return message;
    },

    toJSON(message: PromptTruncationOptions): unknown {
        const obj: any = {};
        message.maxPromptTokens !== undefined && (obj.maxPromptTokens = message.maxPromptTokens);
        message.autoStrategy !== undefined &&
            (obj.autoStrategy = message.autoStrategy
                ? PromptTruncationOptions_AutoStrategy.toJSON(message.autoStrategy)
                : undefined);
        message.lastMessagesStrategy !== undefined &&
            (obj.lastMessagesStrategy = message.lastMessagesStrategy
                ? PromptTruncationOptions_LastMessagesStrategy.toJSON(message.lastMessagesStrategy)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PromptTruncationOptions>, I>>(
        object: I,
    ): PromptTruncationOptions {
        const message = { ...basePromptTruncationOptions } as PromptTruncationOptions;
        message.maxPromptTokens = object.maxPromptTokens ?? undefined;
        message.autoStrategy =
            object.autoStrategy !== undefined && object.autoStrategy !== null
                ? PromptTruncationOptions_AutoStrategy.fromPartial(object.autoStrategy)
                : undefined;
        message.lastMessagesStrategy =
            object.lastMessagesStrategy !== undefined && object.lastMessagesStrategy !== null
                ? PromptTruncationOptions_LastMessagesStrategy.fromPartial(
                      object.lastMessagesStrategy,
                  )
                : undefined;
        return message;
    },
};

const basePromptTruncationOptions_AutoStrategy: object = {};

export const PromptTruncationOptions_AutoStrategy = {
    encode(
        _: PromptTruncationOptions_AutoStrategy,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PromptTruncationOptions_AutoStrategy {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePromptTruncationOptions_AutoStrategy,
        } as PromptTruncationOptions_AutoStrategy;
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

    fromJSON(_: any): PromptTruncationOptions_AutoStrategy {
        const message = {
            ...basePromptTruncationOptions_AutoStrategy,
        } as PromptTruncationOptions_AutoStrategy;
        return message;
    },

    toJSON(_: PromptTruncationOptions_AutoStrategy): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PromptTruncationOptions_AutoStrategy>, I>>(
        _: I,
    ): PromptTruncationOptions_AutoStrategy {
        const message = {
            ...basePromptTruncationOptions_AutoStrategy,
        } as PromptTruncationOptions_AutoStrategy;
        return message;
    },
};

const basePromptTruncationOptions_LastMessagesStrategy: object = { numMessages: 0 };

export const PromptTruncationOptions_LastMessagesStrategy = {
    encode(
        message: PromptTruncationOptions_LastMessagesStrategy,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.numMessages !== 0) {
            writer.uint32(8).int64(message.numMessages);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): PromptTruncationOptions_LastMessagesStrategy {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePromptTruncationOptions_LastMessagesStrategy,
        } as PromptTruncationOptions_LastMessagesStrategy;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.numMessages = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PromptTruncationOptions_LastMessagesStrategy {
        const message = {
            ...basePromptTruncationOptions_LastMessagesStrategy,
        } as PromptTruncationOptions_LastMessagesStrategy;
        message.numMessages =
            object.numMessages !== undefined && object.numMessages !== null
                ? Number(object.numMessages)
                : 0;
        return message;
    },

    toJSON(message: PromptTruncationOptions_LastMessagesStrategy): unknown {
        const obj: any = {};
        message.numMessages !== undefined && (obj.numMessages = Math.round(message.numMessages));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PromptTruncationOptions_LastMessagesStrategy>, I>>(
        object: I,
    ): PromptTruncationOptions_LastMessagesStrategy {
        const message = {
            ...basePromptTruncationOptions_LastMessagesStrategy,
        } as PromptTruncationOptions_LastMessagesStrategy;
        message.numMessages = object.numMessages ?? 0;
        return message;
    },
};

const baseCompletionOptions: object = {};

export const CompletionOptions = {
    encode(message: CompletionOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.maxTokens !== undefined) {
            Int64Value.encode({ value: message.maxTokens! }, writer.uint32(18).fork()).ldelim();
        }
        if (message.temperature !== undefined) {
            DoubleValue.encode({ value: message.temperature! }, writer.uint32(26).fork()).ldelim();
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
                case 2:
                    message.maxTokens = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.temperature = DoubleValue.decode(reader, reader.uint32()).value;
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
        message.maxTokens =
            object.maxTokens !== undefined && object.maxTokens !== null
                ? Number(object.maxTokens)
                : undefined;
        message.temperature =
            object.temperature !== undefined && object.temperature !== null
                ? Number(object.temperature)
                : undefined;
        return message;
    },

    toJSON(message: CompletionOptions): unknown {
        const obj: any = {};
        message.maxTokens !== undefined && (obj.maxTokens = message.maxTokens);
        message.temperature !== undefined && (obj.temperature = message.temperature);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CompletionOptions>, I>>(object: I): CompletionOptions {
        const message = { ...baseCompletionOptions } as CompletionOptions;
        message.maxTokens = object.maxTokens ?? undefined;
        message.temperature = object.temperature ?? undefined;
        return message;
    },
};

const baseTool: object = {};

export const Tool = {
    encode(message: Tool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.searchIndex !== undefined) {
            SearchIndexTool.encode(message.searchIndex, writer.uint32(10).fork()).ldelim();
        }
        if (message.function !== undefined) {
            FunctionTool.encode(message.function, writer.uint32(18).fork()).ldelim();
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
                    message.searchIndex = SearchIndexTool.decode(reader, reader.uint32());
                    break;
                case 2:
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
        message.searchIndex =
            object.searchIndex !== undefined && object.searchIndex !== null
                ? SearchIndexTool.fromJSON(object.searchIndex)
                : undefined;
        message.function =
            object.function !== undefined && object.function !== null
                ? FunctionTool.fromJSON(object.function)
                : undefined;
        return message;
    },

    toJSON(message: Tool): unknown {
        const obj: any = {};
        message.searchIndex !== undefined &&
            (obj.searchIndex = message.searchIndex
                ? SearchIndexTool.toJSON(message.searchIndex)
                : undefined);
        message.function !== undefined &&
            (obj.function = message.function ? FunctionTool.toJSON(message.function) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Tool>, I>>(object: I): Tool {
        const message = { ...baseTool } as Tool;
        message.searchIndex =
            object.searchIndex !== undefined && object.searchIndex !== null
                ? SearchIndexTool.fromPartial(object.searchIndex)
                : undefined;
        message.function =
            object.function !== undefined && object.function !== null
                ? FunctionTool.fromPartial(object.function)
                : undefined;
        return message;
    },
};

const baseToolCall: object = {};

export const ToolCall = {
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

const baseToolCallList: object = {};

export const ToolCallList = {
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

const baseToolResult: object = {};

export const ToolResult = {
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

const baseToolResultList: object = {};

export const ToolResultList = {
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

const baseSearchIndexTool: object = { searchIndexIds: '' };

export const SearchIndexTool = {
    encode(message: SearchIndexTool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.searchIndexIds) {
            writer.uint32(10).string(v!);
        }
        if (message.maxNumResults !== undefined) {
            Int64Value.encode({ value: message.maxNumResults! }, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SearchIndexTool {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSearchIndexTool } as SearchIndexTool;
        message.searchIndexIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.searchIndexIds.push(reader.string());
                    break;
                case 2:
                    message.maxNumResults = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SearchIndexTool {
        const message = { ...baseSearchIndexTool } as SearchIndexTool;
        message.searchIndexIds = (object.searchIndexIds ?? []).map((e: any) => String(e));
        message.maxNumResults =
            object.maxNumResults !== undefined && object.maxNumResults !== null
                ? Number(object.maxNumResults)
                : undefined;
        return message;
    },

    toJSON(message: SearchIndexTool): unknown {
        const obj: any = {};
        if (message.searchIndexIds) {
            obj.searchIndexIds = message.searchIndexIds.map((e) => e);
        } else {
            obj.searchIndexIds = [];
        }
        message.maxNumResults !== undefined && (obj.maxNumResults = message.maxNumResults);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SearchIndexTool>, I>>(object: I): SearchIndexTool {
        const message = { ...baseSearchIndexTool } as SearchIndexTool;
        message.searchIndexIds = object.searchIndexIds?.map((e) => e) || [];
        message.maxNumResults = object.maxNumResults ?? undefined;
        return message;
    },
};

const baseFunctionTool: object = { name: '', description: '' };

export const FunctionTool = {
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

const baseFunctionCall: object = { name: '' };

export const FunctionCall = {
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

const baseFunctionResult: object = { name: '' };

export const FunctionResult = {
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
