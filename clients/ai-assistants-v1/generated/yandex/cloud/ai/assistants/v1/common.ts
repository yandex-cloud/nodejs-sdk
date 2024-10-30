/* eslint-disable */
import { messageTypeRegistry } from '../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Int64Value, DoubleValue } from '../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.ai.assistants.v1';

export interface PromptTruncationOptions {
    $type: 'yandex.cloud.ai.assistants.v1.PromptTruncationOptions';
    maxPromptTokens?: number;
}

export interface CompletionOptions {
    $type: 'yandex.cloud.ai.assistants.v1.CompletionOptions';
    maxTokens?: number;
    temperature?: number;
}

export interface SearchIndexTool {
    $type: 'yandex.cloud.ai.assistants.v1.SearchIndexTool';
    searchIndexIds: string[];
    maxNumResults?: number;
}

export interface Tool {
    $type: 'yandex.cloud.ai.assistants.v1.Tool';
    searchIndex?: SearchIndexTool | undefined;
}

const basePromptTruncationOptions: object = {
    $type: 'yandex.cloud.ai.assistants.v1.PromptTruncationOptions',
};

export const PromptTruncationOptions = {
    $type: 'yandex.cloud.ai.assistants.v1.PromptTruncationOptions' as const,

    encode(message: PromptTruncationOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.maxPromptTokens !== undefined) {
            Int64Value.encode(
                { $type: 'google.protobuf.Int64Value', value: message.maxPromptTokens! },
                writer.uint32(10).fork(),
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
        return message;
    },

    toJSON(message: PromptTruncationOptions): unknown {
        const obj: any = {};
        message.maxPromptTokens !== undefined && (obj.maxPromptTokens = message.maxPromptTokens);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PromptTruncationOptions>, I>>(
        object: I,
    ): PromptTruncationOptions {
        const message = { ...basePromptTruncationOptions } as PromptTruncationOptions;
        message.maxPromptTokens = object.maxPromptTokens ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(PromptTruncationOptions.$type, PromptTruncationOptions);

const baseCompletionOptions: object = { $type: 'yandex.cloud.ai.assistants.v1.CompletionOptions' };

export const CompletionOptions = {
    $type: 'yandex.cloud.ai.assistants.v1.CompletionOptions' as const,

    encode(message: CompletionOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.maxTokens !== undefined) {
            Int64Value.encode(
                { $type: 'google.protobuf.Int64Value', value: message.maxTokens! },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.temperature !== undefined) {
            DoubleValue.encode(
                { $type: 'google.protobuf.DoubleValue', value: message.temperature! },
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

messageTypeRegistry.set(CompletionOptions.$type, CompletionOptions);

const baseSearchIndexTool: object = {
    $type: 'yandex.cloud.ai.assistants.v1.SearchIndexTool',
    searchIndexIds: '',
};

export const SearchIndexTool = {
    $type: 'yandex.cloud.ai.assistants.v1.SearchIndexTool' as const,

    encode(message: SearchIndexTool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.searchIndexIds) {
            writer.uint32(10).string(v!);
        }
        if (message.maxNumResults !== undefined) {
            Int64Value.encode(
                { $type: 'google.protobuf.Int64Value', value: message.maxNumResults! },
                writer.uint32(18).fork(),
            ).ldelim();
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

messageTypeRegistry.set(SearchIndexTool.$type, SearchIndexTool);

const baseTool: object = { $type: 'yandex.cloud.ai.assistants.v1.Tool' };

export const Tool = {
    $type: 'yandex.cloud.ai.assistants.v1.Tool' as const,

    encode(message: Tool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.searchIndex !== undefined) {
            SearchIndexTool.encode(message.searchIndex, writer.uint32(10).fork()).ldelim();
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
        return message;
    },

    toJSON(message: Tool): unknown {
        const obj: any = {};
        message.searchIndex !== undefined &&
            (obj.searchIndex = message.searchIndex
                ? SearchIndexTool.toJSON(message.searchIndex)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Tool>, I>>(object: I): Tool {
        const message = { ...baseTool } as Tool;
        message.searchIndex =
            object.searchIndex !== undefined && object.searchIndex !== null
                ? SearchIndexTool.fromPartial(object.searchIndex)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Tool.$type, Tool);

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
