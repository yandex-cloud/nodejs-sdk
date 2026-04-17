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
    /** Performs web retrieval and generative synthesis. */
    genSearch?: GenSearchTool | undefined;
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
    /**
     * Options for rephrasing user queries.
     * Used to rewrite the last user message for search,
     * incorporating context from the previous conversation.
     */
    rephraserOptions?: RephraserOptions;
    /**
     * Defines the strategy for triggering search.
     * Controls whether search results are always included or returned only when
     * the model explicitly calls the tool.
     */
    callStrategy?: CallStrategy;
}

/** Defines when the assistant uses the search tool. */
export interface CallStrategy {
    alwaysCall?: CallStrategy_AlwaysCall | undefined;
    autoCall?: CallStrategy_AutoCall | undefined;
}

/** Always includes retrieved search results in the prompt. */
export interface CallStrategy_AlwaysCall {}

/**
 * Exposes the tool as a callable function.
 * The model decides when to trigger search based on the instruction.
 */
export interface CallStrategy_AutoCall {
    /** The name of the tool as exposed to the model. */
    name: string;
    /** Required instruction that helps the model decide when to call the tool. */
    instruction: string;
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

/** Options for configuring the rephrasing the last user message for search using context from previous conversation. */
export interface RephraserOptions {
    /** The ID of the model used to rephrase the last user message for search. */
    rephraserUri: string;
}

/** Represents the expected structure of the model's response using a JSON Schema. */
export interface JsonSchema {
    /** The JSON Schema that the model's output must conform to. */
    schema?: { [key: string]: any };
}

/** Specifies the format of the model's response. */
export interface ResponseFormat {
    /**
     * When set to true, the model will respond with a valid JSON object.
     * Be sure to explicitly ask the model for JSON.
     * Otherwise, it may generate excessive whitespace and run indefinitely until it reaches the token limit.
     */
    jsonObject: boolean | undefined;
    /** Enforces a specific JSON structure for the model's response based on a provided schema. */
    jsonSchema?: JsonSchema | undefined;
}

export interface GenSearchTool {
    /** Scoping and filtering rules for the search query */
    options?: GenSearchOptions;
    /** description of the purpose */
    description: string;
}

export interface GenSearchOptions {
    site?: GenSearchOptions_SiteOption | undefined;
    host?: GenSearchOptions_HostOption | undefined;
    url?: GenSearchOptions_UrlOption | undefined;
    /** Use the documents inaccessible from the front page. */
    enableNrfmDocs: boolean;
    /** Restricts the search by date, document formats or language. */
    searchFilters: GenSearchOptions_SearchFilter[];
}

/** Restricts the search to the specific websites. */
export interface GenSearchOptions_SiteOption {
    site: string[];
}

/** Restricts the search to the specific pages. */
export interface GenSearchOptions_UrlOption {
    url: string[];
}

/** Restricts the search to the specific hosts. */
export interface GenSearchOptions_HostOption {
    host: string[];
}

export interface GenSearchOptions_SearchFilter {
    /** Restrict by document date */
    date: string | undefined;
    /** Restrict by document language. Use ISO 639-1 language codes. */
    lang: string | undefined;
    /** Restrict by document format. */
    format: GenSearchOptions_SearchFilter_DocFormat | undefined;
}

export enum GenSearchOptions_SearchFilter_DocFormat {
    DOC_FORMAT_UNSPECIFIED = 0,
    DOC_FORMAT_PDF = 1,
    DOC_FORMAT_XLS = 2,
    DOC_FORMAT_ODS = 3,
    DOC_FORMAT_RTF = 4,
    DOC_FORMAT_PPT = 5,
    DOC_FORMAT_ODP = 6,
    DOC_FORMAT_SWF = 7,
    DOC_FORMAT_ODT = 8,
    DOC_FORMAT_ODG = 9,
    DOC_FORMAT_DOC = 10,
    UNRECOGNIZED = -1,
}

export function genSearchOptions_SearchFilter_DocFormatFromJSON(
    object: any,
): GenSearchOptions_SearchFilter_DocFormat {
    switch (object) {
        case 0:
        case 'DOC_FORMAT_UNSPECIFIED':
            return GenSearchOptions_SearchFilter_DocFormat.DOC_FORMAT_UNSPECIFIED;
        case 1:
        case 'DOC_FORMAT_PDF':
            return GenSearchOptions_SearchFilter_DocFormat.DOC_FORMAT_PDF;
        case 2:
        case 'DOC_FORMAT_XLS':
            return GenSearchOptions_SearchFilter_DocFormat.DOC_FORMAT_XLS;
        case 3:
        case 'DOC_FORMAT_ODS':
            return GenSearchOptions_SearchFilter_DocFormat.DOC_FORMAT_ODS;
        case 4:
        case 'DOC_FORMAT_RTF':
            return GenSearchOptions_SearchFilter_DocFormat.DOC_FORMAT_RTF;
        case 5:
        case 'DOC_FORMAT_PPT':
            return GenSearchOptions_SearchFilter_DocFormat.DOC_FORMAT_PPT;
        case 6:
        case 'DOC_FORMAT_ODP':
            return GenSearchOptions_SearchFilter_DocFormat.DOC_FORMAT_ODP;
        case 7:
        case 'DOC_FORMAT_SWF':
            return GenSearchOptions_SearchFilter_DocFormat.DOC_FORMAT_SWF;
        case 8:
        case 'DOC_FORMAT_ODT':
            return GenSearchOptions_SearchFilter_DocFormat.DOC_FORMAT_ODT;
        case 9:
        case 'DOC_FORMAT_ODG':
            return GenSearchOptions_SearchFilter_DocFormat.DOC_FORMAT_ODG;
        case 10:
        case 'DOC_FORMAT_DOC':
            return GenSearchOptions_SearchFilter_DocFormat.DOC_FORMAT_DOC;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return GenSearchOptions_SearchFilter_DocFormat.UNRECOGNIZED;
    }
}

export function genSearchOptions_SearchFilter_DocFormatToJSON(
    object: GenSearchOptions_SearchFilter_DocFormat,
): string {
    switch (object) {
        case GenSearchOptions_SearchFilter_DocFormat.DOC_FORMAT_UNSPECIFIED:
            return 'DOC_FORMAT_UNSPECIFIED';
        case GenSearchOptions_SearchFilter_DocFormat.DOC_FORMAT_PDF:
            return 'DOC_FORMAT_PDF';
        case GenSearchOptions_SearchFilter_DocFormat.DOC_FORMAT_XLS:
            return 'DOC_FORMAT_XLS';
        case GenSearchOptions_SearchFilter_DocFormat.DOC_FORMAT_ODS:
            return 'DOC_FORMAT_ODS';
        case GenSearchOptions_SearchFilter_DocFormat.DOC_FORMAT_RTF:
            return 'DOC_FORMAT_RTF';
        case GenSearchOptions_SearchFilter_DocFormat.DOC_FORMAT_PPT:
            return 'DOC_FORMAT_PPT';
        case GenSearchOptions_SearchFilter_DocFormat.DOC_FORMAT_ODP:
            return 'DOC_FORMAT_ODP';
        case GenSearchOptions_SearchFilter_DocFormat.DOC_FORMAT_SWF:
            return 'DOC_FORMAT_SWF';
        case GenSearchOptions_SearchFilter_DocFormat.DOC_FORMAT_ODT:
            return 'DOC_FORMAT_ODT';
        case GenSearchOptions_SearchFilter_DocFormat.DOC_FORMAT_ODG:
            return 'DOC_FORMAT_ODG';
        case GenSearchOptions_SearchFilter_DocFormat.DOC_FORMAT_DOC:
            return 'DOC_FORMAT_DOC';
        default:
            return 'UNKNOWN';
    }
}

const basePromptTruncationOptions: object = {};

export const PromptTruncationOptions: {
    encode(message: PromptTruncationOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PromptTruncationOptions;
    fromJSON(object: any): PromptTruncationOptions;
    toJSON(message: PromptTruncationOptions): unknown;
    fromPartial<I extends Exact<DeepPartial<PromptTruncationOptions>, I>>(object: I): PromptTruncationOptions;
} = {
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

export const PromptTruncationOptions_AutoStrategy: {
    encode(message: PromptTruncationOptions_AutoStrategy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PromptTruncationOptions_AutoStrategy;
    fromJSON(object: any): PromptTruncationOptions_AutoStrategy;
    toJSON(message: PromptTruncationOptions_AutoStrategy): unknown;
    fromPartial<I extends Exact<DeepPartial<PromptTruncationOptions_AutoStrategy>, I>>(object: I): PromptTruncationOptions_AutoStrategy;
} = {
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

export const PromptTruncationOptions_LastMessagesStrategy: {
    encode(message: PromptTruncationOptions_LastMessagesStrategy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PromptTruncationOptions_LastMessagesStrategy;
    fromJSON(object: any): PromptTruncationOptions_LastMessagesStrategy;
    toJSON(message: PromptTruncationOptions_LastMessagesStrategy): unknown;
    fromPartial<I extends Exact<DeepPartial<PromptTruncationOptions_LastMessagesStrategy>, I>>(object: I): PromptTruncationOptions_LastMessagesStrategy;
} = {
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

export const CompletionOptions: {
    encode(message: CompletionOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CompletionOptions;
    fromJSON(object: any): CompletionOptions;
    toJSON(message: CompletionOptions): unknown;
    fromPartial<I extends Exact<DeepPartial<CompletionOptions>, I>>(object: I): CompletionOptions;
} = {
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

export const Tool: {
    encode(message: Tool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Tool;
    fromJSON(object: any): Tool;
    toJSON(message: Tool): unknown;
    fromPartial<I extends Exact<DeepPartial<Tool>, I>>(object: I): Tool;
} = {
    encode(message: Tool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.searchIndex !== undefined) {
            SearchIndexTool.encode(message.searchIndex, writer.uint32(10).fork()).ldelim();
        }
        if (message.function !== undefined) {
            FunctionTool.encode(message.function, writer.uint32(18).fork()).ldelim();
        }
        if (message.genSearch !== undefined) {
            GenSearchTool.encode(message.genSearch, writer.uint32(26).fork()).ldelim();
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
                case 3:
                    message.genSearch = GenSearchTool.decode(reader, reader.uint32());
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
        message.genSearch =
            object.genSearch !== undefined && object.genSearch !== null
                ? GenSearchTool.fromJSON(object.genSearch)
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
        message.genSearch !== undefined &&
            (obj.genSearch = message.genSearch
                ? GenSearchTool.toJSON(message.genSearch)
                : undefined);
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
        message.genSearch =
            object.genSearch !== undefined && object.genSearch !== null
                ? GenSearchTool.fromPartial(object.genSearch)
                : undefined;
        return message;
    },
};

const baseToolCall: object = {};

export const ToolCall: {
    encode(message: ToolCall, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ToolCall;
    fromJSON(object: any): ToolCall;
    toJSON(message: ToolCall): unknown;
    fromPartial<I extends Exact<DeepPartial<ToolCall>, I>>(object: I): ToolCall;
} = {
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

export const ToolCallList: {
    encode(message: ToolCallList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ToolCallList;
    fromJSON(object: any): ToolCallList;
    toJSON(message: ToolCallList): unknown;
    fromPartial<I extends Exact<DeepPartial<ToolCallList>, I>>(object: I): ToolCallList;
} = {
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

export const ToolResult: {
    encode(message: ToolResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ToolResult;
    fromJSON(object: any): ToolResult;
    toJSON(message: ToolResult): unknown;
    fromPartial<I extends Exact<DeepPartial<ToolResult>, I>>(object: I): ToolResult;
} = {
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

export const ToolResultList: {
    encode(message: ToolResultList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ToolResultList;
    fromJSON(object: any): ToolResultList;
    toJSON(message: ToolResultList): unknown;
    fromPartial<I extends Exact<DeepPartial<ToolResultList>, I>>(object: I): ToolResultList;
} = {
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

export const SearchIndexTool: {
    encode(message: SearchIndexTool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SearchIndexTool;
    fromJSON(object: any): SearchIndexTool;
    toJSON(message: SearchIndexTool): unknown;
    fromPartial<I extends Exact<DeepPartial<SearchIndexTool>, I>>(object: I): SearchIndexTool;
} = {
    encode(message: SearchIndexTool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.searchIndexIds) {
            writer.uint32(10).string(v!);
        }
        if (message.maxNumResults !== undefined) {
            Int64Value.encode({ value: message.maxNumResults! }, writer.uint32(18).fork()).ldelim();
        }
        if (message.rephraserOptions !== undefined) {
            RephraserOptions.encode(message.rephraserOptions, writer.uint32(26).fork()).ldelim();
        }
        if (message.callStrategy !== undefined) {
            CallStrategy.encode(message.callStrategy, writer.uint32(34).fork()).ldelim();
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
                case 3:
                    message.rephraserOptions = RephraserOptions.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.callStrategy = CallStrategy.decode(reader, reader.uint32());
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
        message.rephraserOptions =
            object.rephraserOptions !== undefined && object.rephraserOptions !== null
                ? RephraserOptions.fromJSON(object.rephraserOptions)
                : undefined;
        message.callStrategy =
            object.callStrategy !== undefined && object.callStrategy !== null
                ? CallStrategy.fromJSON(object.callStrategy)
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
        message.rephraserOptions !== undefined &&
            (obj.rephraserOptions = message.rephraserOptions
                ? RephraserOptions.toJSON(message.rephraserOptions)
                : undefined);
        message.callStrategy !== undefined &&
            (obj.callStrategy = message.callStrategy
                ? CallStrategy.toJSON(message.callStrategy)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SearchIndexTool>, I>>(object: I): SearchIndexTool {
        const message = { ...baseSearchIndexTool } as SearchIndexTool;
        message.searchIndexIds = object.searchIndexIds?.map((e) => e) || [];
        message.maxNumResults = object.maxNumResults ?? undefined;
        message.rephraserOptions =
            object.rephraserOptions !== undefined && object.rephraserOptions !== null
                ? RephraserOptions.fromPartial(object.rephraserOptions)
                : undefined;
        message.callStrategy =
            object.callStrategy !== undefined && object.callStrategy !== null
                ? CallStrategy.fromPartial(object.callStrategy)
                : undefined;
        return message;
    },
};

const baseCallStrategy: object = {};

export const CallStrategy: {
    encode(message: CallStrategy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CallStrategy;
    fromJSON(object: any): CallStrategy;
    toJSON(message: CallStrategy): unknown;
    fromPartial<I extends Exact<DeepPartial<CallStrategy>, I>>(object: I): CallStrategy;
} = {
    encode(message: CallStrategy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.alwaysCall !== undefined) {
            CallStrategy_AlwaysCall.encode(message.alwaysCall, writer.uint32(10).fork()).ldelim();
        }
        if (message.autoCall !== undefined) {
            CallStrategy_AutoCall.encode(message.autoCall, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CallStrategy {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCallStrategy } as CallStrategy;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alwaysCall = CallStrategy_AlwaysCall.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.autoCall = CallStrategy_AutoCall.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CallStrategy {
        const message = { ...baseCallStrategy } as CallStrategy;
        message.alwaysCall =
            object.alwaysCall !== undefined && object.alwaysCall !== null
                ? CallStrategy_AlwaysCall.fromJSON(object.alwaysCall)
                : undefined;
        message.autoCall =
            object.autoCall !== undefined && object.autoCall !== null
                ? CallStrategy_AutoCall.fromJSON(object.autoCall)
                : undefined;
        return message;
    },

    toJSON(message: CallStrategy): unknown {
        const obj: any = {};
        message.alwaysCall !== undefined &&
            (obj.alwaysCall = message.alwaysCall
                ? CallStrategy_AlwaysCall.toJSON(message.alwaysCall)
                : undefined);
        message.autoCall !== undefined &&
            (obj.autoCall = message.autoCall
                ? CallStrategy_AutoCall.toJSON(message.autoCall)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CallStrategy>, I>>(object: I): CallStrategy {
        const message = { ...baseCallStrategy } as CallStrategy;
        message.alwaysCall =
            object.alwaysCall !== undefined && object.alwaysCall !== null
                ? CallStrategy_AlwaysCall.fromPartial(object.alwaysCall)
                : undefined;
        message.autoCall =
            object.autoCall !== undefined && object.autoCall !== null
                ? CallStrategy_AutoCall.fromPartial(object.autoCall)
                : undefined;
        return message;
    },
};

const baseCallStrategy_AlwaysCall: object = {};

export const CallStrategy_AlwaysCall: {
    encode(message: CallStrategy_AlwaysCall, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CallStrategy_AlwaysCall;
    fromJSON(object: any): CallStrategy_AlwaysCall;
    toJSON(message: CallStrategy_AlwaysCall): unknown;
    fromPartial<I extends Exact<DeepPartial<CallStrategy_AlwaysCall>, I>>(object: I): CallStrategy_AlwaysCall;
} = {
    encode(_: CallStrategy_AlwaysCall, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CallStrategy_AlwaysCall {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCallStrategy_AlwaysCall } as CallStrategy_AlwaysCall;
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

    fromJSON(_: any): CallStrategy_AlwaysCall {
        const message = { ...baseCallStrategy_AlwaysCall } as CallStrategy_AlwaysCall;
        return message;
    },

    toJSON(_: CallStrategy_AlwaysCall): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CallStrategy_AlwaysCall>, I>>(
        _: I,
    ): CallStrategy_AlwaysCall {
        const message = { ...baseCallStrategy_AlwaysCall } as CallStrategy_AlwaysCall;
        return message;
    },
};

const baseCallStrategy_AutoCall: object = { name: '', instruction: '' };

export const CallStrategy_AutoCall: {
    encode(message: CallStrategy_AutoCall, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CallStrategy_AutoCall;
    fromJSON(object: any): CallStrategy_AutoCall;
    toJSON(message: CallStrategy_AutoCall): unknown;
    fromPartial<I extends Exact<DeepPartial<CallStrategy_AutoCall>, I>>(object: I): CallStrategy_AutoCall;
} = {
    encode(message: CallStrategy_AutoCall, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.instruction !== '') {
            writer.uint32(18).string(message.instruction);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CallStrategy_AutoCall {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCallStrategy_AutoCall } as CallStrategy_AutoCall;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.instruction = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CallStrategy_AutoCall {
        const message = { ...baseCallStrategy_AutoCall } as CallStrategy_AutoCall;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.instruction =
            object.instruction !== undefined && object.instruction !== null
                ? String(object.instruction)
                : '';
        return message;
    },

    toJSON(message: CallStrategy_AutoCall): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.instruction !== undefined && (obj.instruction = message.instruction);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CallStrategy_AutoCall>, I>>(
        object: I,
    ): CallStrategy_AutoCall {
        const message = { ...baseCallStrategy_AutoCall } as CallStrategy_AutoCall;
        message.name = object.name ?? '';
        message.instruction = object.instruction ?? '';
        return message;
    },
};

const baseFunctionTool: object = { name: '', description: '' };

export const FunctionTool: {
    encode(message: FunctionTool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FunctionTool;
    fromJSON(object: any): FunctionTool;
    toJSON(message: FunctionTool): unknown;
    fromPartial<I extends Exact<DeepPartial<FunctionTool>, I>>(object: I): FunctionTool;
} = {
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

export const FunctionCall: {
    encode(message: FunctionCall, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FunctionCall;
    fromJSON(object: any): FunctionCall;
    toJSON(message: FunctionCall): unknown;
    fromPartial<I extends Exact<DeepPartial<FunctionCall>, I>>(object: I): FunctionCall;
} = {
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

export const FunctionResult: {
    encode(message: FunctionResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FunctionResult;
    fromJSON(object: any): FunctionResult;
    toJSON(message: FunctionResult): unknown;
    fromPartial<I extends Exact<DeepPartial<FunctionResult>, I>>(object: I): FunctionResult;
} = {
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

const baseRephraserOptions: object = { rephraserUri: '' };

export const RephraserOptions: {
    encode(message: RephraserOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RephraserOptions;
    fromJSON(object: any): RephraserOptions;
    toJSON(message: RephraserOptions): unknown;
    fromPartial<I extends Exact<DeepPartial<RephraserOptions>, I>>(object: I): RephraserOptions;
} = {
    encode(message: RephraserOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.rephraserUri !== '') {
            writer.uint32(10).string(message.rephraserUri);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RephraserOptions {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRephraserOptions } as RephraserOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rephraserUri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RephraserOptions {
        const message = { ...baseRephraserOptions } as RephraserOptions;
        message.rephraserUri =
            object.rephraserUri !== undefined && object.rephraserUri !== null
                ? String(object.rephraserUri)
                : '';
        return message;
    },

    toJSON(message: RephraserOptions): unknown {
        const obj: any = {};
        message.rephraserUri !== undefined && (obj.rephraserUri = message.rephraserUri);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RephraserOptions>, I>>(object: I): RephraserOptions {
        const message = { ...baseRephraserOptions } as RephraserOptions;
        message.rephraserUri = object.rephraserUri ?? '';
        return message;
    },
};

const baseJsonSchema: object = {};

export const JsonSchema: {
    encode(message: JsonSchema, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): JsonSchema;
    fromJSON(object: any): JsonSchema;
    toJSON(message: JsonSchema): unknown;
    fromPartial<I extends Exact<DeepPartial<JsonSchema>, I>>(object: I): JsonSchema;
} = {
    encode(message: JsonSchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.schema !== undefined) {
            Struct.encode(Struct.wrap(message.schema), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): JsonSchema {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseJsonSchema } as JsonSchema;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.schema = Struct.unwrap(Struct.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): JsonSchema {
        const message = { ...baseJsonSchema } as JsonSchema;
        message.schema = typeof object.schema === 'object' ? object.schema : undefined;
        return message;
    },

    toJSON(message: JsonSchema): unknown {
        const obj: any = {};
        message.schema !== undefined && (obj.schema = message.schema);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<JsonSchema>, I>>(object: I): JsonSchema {
        const message = { ...baseJsonSchema } as JsonSchema;
        message.schema = object.schema ?? undefined;
        return message;
    },
};

const baseResponseFormat: object = {};

export const ResponseFormat: {
    encode(message: ResponseFormat, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseFormat;
    fromJSON(object: any): ResponseFormat;
    toJSON(message: ResponseFormat): unknown;
    fromPartial<I extends Exact<DeepPartial<ResponseFormat>, I>>(object: I): ResponseFormat;
} = {
    encode(message: ResponseFormat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.jsonObject !== undefined) {
            writer.uint32(8).bool(message.jsonObject);
        }
        if (message.jsonSchema !== undefined) {
            JsonSchema.encode(message.jsonSchema, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseFormat {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResponseFormat } as ResponseFormat;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.jsonObject = reader.bool();
                    break;
                case 2:
                    message.jsonSchema = JsonSchema.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResponseFormat {
        const message = { ...baseResponseFormat } as ResponseFormat;
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

    toJSON(message: ResponseFormat): unknown {
        const obj: any = {};
        message.jsonObject !== undefined && (obj.jsonObject = message.jsonObject);
        message.jsonSchema !== undefined &&
            (obj.jsonSchema = message.jsonSchema
                ? JsonSchema.toJSON(message.jsonSchema)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResponseFormat>, I>>(object: I): ResponseFormat {
        const message = { ...baseResponseFormat } as ResponseFormat;
        message.jsonObject = object.jsonObject ?? undefined;
        message.jsonSchema =
            object.jsonSchema !== undefined && object.jsonSchema !== null
                ? JsonSchema.fromPartial(object.jsonSchema)
                : undefined;
        return message;
    },
};

const baseGenSearchTool: object = { description: '' };

export const GenSearchTool: {
    encode(message: GenSearchTool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenSearchTool;
    fromJSON(object: any): GenSearchTool;
    toJSON(message: GenSearchTool): unknown;
    fromPartial<I extends Exact<DeepPartial<GenSearchTool>, I>>(object: I): GenSearchTool;
} = {
    encode(message: GenSearchTool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.options !== undefined) {
            GenSearchOptions.encode(message.options, writer.uint32(10).fork()).ldelim();
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GenSearchTool {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenSearchTool } as GenSearchTool;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.options = GenSearchOptions.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GenSearchTool {
        const message = { ...baseGenSearchTool } as GenSearchTool;
        message.options =
            object.options !== undefined && object.options !== null
                ? GenSearchOptions.fromJSON(object.options)
                : undefined;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        return message;
    },

    toJSON(message: GenSearchTool): unknown {
        const obj: any = {};
        message.options !== undefined &&
            (obj.options = message.options ? GenSearchOptions.toJSON(message.options) : undefined);
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GenSearchTool>, I>>(object: I): GenSearchTool {
        const message = { ...baseGenSearchTool } as GenSearchTool;
        message.options =
            object.options !== undefined && object.options !== null
                ? GenSearchOptions.fromPartial(object.options)
                : undefined;
        message.description = object.description ?? '';
        return message;
    },
};

const baseGenSearchOptions: object = { enableNrfmDocs: false };

export const GenSearchOptions: {
    encode(message: GenSearchOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenSearchOptions;
    fromJSON(object: any): GenSearchOptions;
    toJSON(message: GenSearchOptions): unknown;
    fromPartial<I extends Exact<DeepPartial<GenSearchOptions>, I>>(object: I): GenSearchOptions;
} = {
    encode(message: GenSearchOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.site !== undefined) {
            GenSearchOptions_SiteOption.encode(message.site, writer.uint32(10).fork()).ldelim();
        }
        if (message.host !== undefined) {
            GenSearchOptions_HostOption.encode(message.host, writer.uint32(18).fork()).ldelim();
        }
        if (message.url !== undefined) {
            GenSearchOptions_UrlOption.encode(message.url, writer.uint32(26).fork()).ldelim();
        }
        if (message.enableNrfmDocs === true) {
            writer.uint32(32).bool(message.enableNrfmDocs);
        }
        for (const v of message.searchFilters) {
            GenSearchOptions_SearchFilter.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GenSearchOptions {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenSearchOptions } as GenSearchOptions;
        message.searchFilters = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.site = GenSearchOptions_SiteOption.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.host = GenSearchOptions_HostOption.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.url = GenSearchOptions_UrlOption.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.enableNrfmDocs = reader.bool();
                    break;
                case 5:
                    message.searchFilters.push(
                        GenSearchOptions_SearchFilter.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GenSearchOptions {
        const message = { ...baseGenSearchOptions } as GenSearchOptions;
        message.site =
            object.site !== undefined && object.site !== null
                ? GenSearchOptions_SiteOption.fromJSON(object.site)
                : undefined;
        message.host =
            object.host !== undefined && object.host !== null
                ? GenSearchOptions_HostOption.fromJSON(object.host)
                : undefined;
        message.url =
            object.url !== undefined && object.url !== null
                ? GenSearchOptions_UrlOption.fromJSON(object.url)
                : undefined;
        message.enableNrfmDocs =
            object.enableNrfmDocs !== undefined && object.enableNrfmDocs !== null
                ? Boolean(object.enableNrfmDocs)
                : false;
        message.searchFilters = (object.searchFilters ?? []).map((e: any) =>
            GenSearchOptions_SearchFilter.fromJSON(e),
        );
        return message;
    },

    toJSON(message: GenSearchOptions): unknown {
        const obj: any = {};
        message.site !== undefined &&
            (obj.site = message.site
                ? GenSearchOptions_SiteOption.toJSON(message.site)
                : undefined);
        message.host !== undefined &&
            (obj.host = message.host
                ? GenSearchOptions_HostOption.toJSON(message.host)
                : undefined);
        message.url !== undefined &&
            (obj.url = message.url ? GenSearchOptions_UrlOption.toJSON(message.url) : undefined);
        message.enableNrfmDocs !== undefined && (obj.enableNrfmDocs = message.enableNrfmDocs);
        if (message.searchFilters) {
            obj.searchFilters = message.searchFilters.map((e) =>
                e ? GenSearchOptions_SearchFilter.toJSON(e) : undefined,
            );
        } else {
            obj.searchFilters = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GenSearchOptions>, I>>(object: I): GenSearchOptions {
        const message = { ...baseGenSearchOptions } as GenSearchOptions;
        message.site =
            object.site !== undefined && object.site !== null
                ? GenSearchOptions_SiteOption.fromPartial(object.site)
                : undefined;
        message.host =
            object.host !== undefined && object.host !== null
                ? GenSearchOptions_HostOption.fromPartial(object.host)
                : undefined;
        message.url =
            object.url !== undefined && object.url !== null
                ? GenSearchOptions_UrlOption.fromPartial(object.url)
                : undefined;
        message.enableNrfmDocs = object.enableNrfmDocs ?? false;
        message.searchFilters =
            object.searchFilters?.map((e) => GenSearchOptions_SearchFilter.fromPartial(e)) || [];
        return message;
    },
};

const baseGenSearchOptions_SiteOption: object = { site: '' };

export const GenSearchOptions_SiteOption: {
    encode(message: GenSearchOptions_SiteOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenSearchOptions_SiteOption;
    fromJSON(object: any): GenSearchOptions_SiteOption;
    toJSON(message: GenSearchOptions_SiteOption): unknown;
    fromPartial<I extends Exact<DeepPartial<GenSearchOptions_SiteOption>, I>>(object: I): GenSearchOptions_SiteOption;
} = {
    encode(
        message: GenSearchOptions_SiteOption,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.site) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GenSearchOptions_SiteOption {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenSearchOptions_SiteOption } as GenSearchOptions_SiteOption;
        message.site = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.site.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GenSearchOptions_SiteOption {
        const message = { ...baseGenSearchOptions_SiteOption } as GenSearchOptions_SiteOption;
        message.site = (object.site ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: GenSearchOptions_SiteOption): unknown {
        const obj: any = {};
        if (message.site) {
            obj.site = message.site.map((e) => e);
        } else {
            obj.site = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GenSearchOptions_SiteOption>, I>>(
        object: I,
    ): GenSearchOptions_SiteOption {
        const message = { ...baseGenSearchOptions_SiteOption } as GenSearchOptions_SiteOption;
        message.site = object.site?.map((e) => e) || [];
        return message;
    },
};

const baseGenSearchOptions_UrlOption: object = { url: '' };

export const GenSearchOptions_UrlOption: {
    encode(message: GenSearchOptions_UrlOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenSearchOptions_UrlOption;
    fromJSON(object: any): GenSearchOptions_UrlOption;
    toJSON(message: GenSearchOptions_UrlOption): unknown;
    fromPartial<I extends Exact<DeepPartial<GenSearchOptions_UrlOption>, I>>(object: I): GenSearchOptions_UrlOption;
} = {
    encode(
        message: GenSearchOptions_UrlOption,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.url) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GenSearchOptions_UrlOption {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenSearchOptions_UrlOption } as GenSearchOptions_UrlOption;
        message.url = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GenSearchOptions_UrlOption {
        const message = { ...baseGenSearchOptions_UrlOption } as GenSearchOptions_UrlOption;
        message.url = (object.url ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: GenSearchOptions_UrlOption): unknown {
        const obj: any = {};
        if (message.url) {
            obj.url = message.url.map((e) => e);
        } else {
            obj.url = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GenSearchOptions_UrlOption>, I>>(
        object: I,
    ): GenSearchOptions_UrlOption {
        const message = { ...baseGenSearchOptions_UrlOption } as GenSearchOptions_UrlOption;
        message.url = object.url?.map((e) => e) || [];
        return message;
    },
};

const baseGenSearchOptions_HostOption: object = { host: '' };

export const GenSearchOptions_HostOption: {
    encode(message: GenSearchOptions_HostOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenSearchOptions_HostOption;
    fromJSON(object: any): GenSearchOptions_HostOption;
    toJSON(message: GenSearchOptions_HostOption): unknown;
    fromPartial<I extends Exact<DeepPartial<GenSearchOptions_HostOption>, I>>(object: I): GenSearchOptions_HostOption;
} = {
    encode(
        message: GenSearchOptions_HostOption,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.host) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GenSearchOptions_HostOption {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenSearchOptions_HostOption } as GenSearchOptions_HostOption;
        message.host = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.host.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GenSearchOptions_HostOption {
        const message = { ...baseGenSearchOptions_HostOption } as GenSearchOptions_HostOption;
        message.host = (object.host ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: GenSearchOptions_HostOption): unknown {
        const obj: any = {};
        if (message.host) {
            obj.host = message.host.map((e) => e);
        } else {
            obj.host = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GenSearchOptions_HostOption>, I>>(
        object: I,
    ): GenSearchOptions_HostOption {
        const message = { ...baseGenSearchOptions_HostOption } as GenSearchOptions_HostOption;
        message.host = object.host?.map((e) => e) || [];
        return message;
    },
};

const baseGenSearchOptions_SearchFilter: object = {};

export const GenSearchOptions_SearchFilter: {
    encode(message: GenSearchOptions_SearchFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenSearchOptions_SearchFilter;
    fromJSON(object: any): GenSearchOptions_SearchFilter;
    toJSON(message: GenSearchOptions_SearchFilter): unknown;
    fromPartial<I extends Exact<DeepPartial<GenSearchOptions_SearchFilter>, I>>(object: I): GenSearchOptions_SearchFilter;
} = {
    encode(
        message: GenSearchOptions_SearchFilter,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.date !== undefined) {
            writer.uint32(10).string(message.date);
        }
        if (message.lang !== undefined) {
            writer.uint32(18).string(message.lang);
        }
        if (message.format !== undefined) {
            writer.uint32(24).int32(message.format);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GenSearchOptions_SearchFilter {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenSearchOptions_SearchFilter } as GenSearchOptions_SearchFilter;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.date = reader.string();
                    break;
                case 2:
                    message.lang = reader.string();
                    break;
                case 3:
                    message.format = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GenSearchOptions_SearchFilter {
        const message = { ...baseGenSearchOptions_SearchFilter } as GenSearchOptions_SearchFilter;
        message.date =
            object.date !== undefined && object.date !== null ? String(object.date) : undefined;
        message.lang =
            object.lang !== undefined && object.lang !== null ? String(object.lang) : undefined;
        message.format =
            object.format !== undefined && object.format !== null
                ? genSearchOptions_SearchFilter_DocFormatFromJSON(object.format)
                : undefined;
        return message;
    },

    toJSON(message: GenSearchOptions_SearchFilter): unknown {
        const obj: any = {};
        message.date !== undefined && (obj.date = message.date);
        message.lang !== undefined && (obj.lang = message.lang);
        message.format !== undefined &&
            (obj.format =
                message.format !== undefined
                    ? genSearchOptions_SearchFilter_DocFormatToJSON(message.format)
                    : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GenSearchOptions_SearchFilter>, I>>(
        object: I,
    ): GenSearchOptions_SearchFilter {
        const message = { ...baseGenSearchOptions_SearchFilter } as GenSearchOptions_SearchFilter;
        message.date = object.date ?? undefined;
        message.lang = object.lang ?? undefined;
        message.format = object.format ?? undefined;
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
