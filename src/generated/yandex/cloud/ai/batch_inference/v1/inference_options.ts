/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { DoubleValue, Int64Value } from '../../../../../google/protobuf/wrappers';
import { Struct } from '../../../../../google/protobuf/struct';

export const protobufPackage = 'yandex.cloud.ai.batch_inference.v1';

export interface BatchCompletionRequest {
    modelUri: string;
    sourceDatasetId: string;
    completionOptions?: CompletionOptions;
    dataLoggingEnabled: boolean;
    jsonObject: boolean | undefined;
    jsonSchema?: JsonSchema | undefined;
}

export interface CompletionOptions {
    temperature?: number;
    maxTokens?: number;
    reasoningOptions?: ReasoningOptions;
}

export interface ReasoningOptions {
    mode: ReasoningOptions_ReasoningMode;
}

export enum ReasoningOptions_ReasoningMode {
    REASONING_MODE_UNSPECIFIED = 0,
    DISABLED = 1,
    ENABLED_HIDDEN = 2,
    UNRECOGNIZED = -1,
}

export function reasoningOptions_ReasoningModeFromJSON(
    object: any,
): ReasoningOptions_ReasoningMode {
    switch (object) {
        case 0:
        case 'REASONING_MODE_UNSPECIFIED':
            return ReasoningOptions_ReasoningMode.REASONING_MODE_UNSPECIFIED;
        case 1:
        case 'DISABLED':
            return ReasoningOptions_ReasoningMode.DISABLED;
        case 2:
        case 'ENABLED_HIDDEN':
            return ReasoningOptions_ReasoningMode.ENABLED_HIDDEN;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ReasoningOptions_ReasoningMode.UNRECOGNIZED;
    }
}

export function reasoningOptions_ReasoningModeToJSON(
    object: ReasoningOptions_ReasoningMode,
): string {
    switch (object) {
        case ReasoningOptions_ReasoningMode.REASONING_MODE_UNSPECIFIED:
            return 'REASONING_MODE_UNSPECIFIED';
        case ReasoningOptions_ReasoningMode.DISABLED:
            return 'DISABLED';
        case ReasoningOptions_ReasoningMode.ENABLED_HIDDEN:
            return 'ENABLED_HIDDEN';
        default:
            return 'UNKNOWN';
    }
}

export interface JsonSchema {
    schema?: { [key: string]: any };
}

const baseBatchCompletionRequest: object = {
    modelUri: '',
    sourceDatasetId: '',
    dataLoggingEnabled: false,
};

export const BatchCompletionRequest = {
    encode(message: BatchCompletionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.modelUri !== '') {
            writer.uint32(10).string(message.modelUri);
        }
        if (message.sourceDatasetId !== '') {
            writer.uint32(18).string(message.sourceDatasetId);
        }
        if (message.completionOptions !== undefined) {
            CompletionOptions.encode(message.completionOptions, writer.uint32(26).fork()).ldelim();
        }
        if (message.dataLoggingEnabled === true) {
            writer.uint32(32).bool(message.dataLoggingEnabled);
        }
        if (message.jsonObject !== undefined) {
            writer.uint32(40).bool(message.jsonObject);
        }
        if (message.jsonSchema !== undefined) {
            JsonSchema.encode(message.jsonSchema, writer.uint32(50).fork()).ldelim();
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
                    message.sourceDatasetId = reader.string();
                    break;
                case 3:
                    message.completionOptions = CompletionOptions.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.dataLoggingEnabled = reader.bool();
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

    fromJSON(object: any): BatchCompletionRequest {
        const message = { ...baseBatchCompletionRequest } as BatchCompletionRequest;
        message.modelUri =
            object.modelUri !== undefined && object.modelUri !== null
                ? String(object.modelUri)
                : '';
        message.sourceDatasetId =
            object.sourceDatasetId !== undefined && object.sourceDatasetId !== null
                ? String(object.sourceDatasetId)
                : '';
        message.completionOptions =
            object.completionOptions !== undefined && object.completionOptions !== null
                ? CompletionOptions.fromJSON(object.completionOptions)
                : undefined;
        message.dataLoggingEnabled =
            object.dataLoggingEnabled !== undefined && object.dataLoggingEnabled !== null
                ? Boolean(object.dataLoggingEnabled)
                : false;
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

    toJSON(message: BatchCompletionRequest): unknown {
        const obj: any = {};
        message.modelUri !== undefined && (obj.modelUri = message.modelUri);
        message.sourceDatasetId !== undefined && (obj.sourceDatasetId = message.sourceDatasetId);
        message.completionOptions !== undefined &&
            (obj.completionOptions = message.completionOptions
                ? CompletionOptions.toJSON(message.completionOptions)
                : undefined);
        message.dataLoggingEnabled !== undefined &&
            (obj.dataLoggingEnabled = message.dataLoggingEnabled);
        message.jsonObject !== undefined && (obj.jsonObject = message.jsonObject);
        message.jsonSchema !== undefined &&
            (obj.jsonSchema = message.jsonSchema
                ? JsonSchema.toJSON(message.jsonSchema)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchCompletionRequest>, I>>(
        object: I,
    ): BatchCompletionRequest {
        const message = { ...baseBatchCompletionRequest } as BatchCompletionRequest;
        message.modelUri = object.modelUri ?? '';
        message.sourceDatasetId = object.sourceDatasetId ?? '';
        message.completionOptions =
            object.completionOptions !== undefined && object.completionOptions !== null
                ? CompletionOptions.fromPartial(object.completionOptions)
                : undefined;
        message.dataLoggingEnabled = object.dataLoggingEnabled ?? false;
        message.jsonObject = object.jsonObject ?? undefined;
        message.jsonSchema =
            object.jsonSchema !== undefined && object.jsonSchema !== null
                ? JsonSchema.fromPartial(object.jsonSchema)
                : undefined;
        return message;
    },
};

const baseCompletionOptions: object = {};

export const CompletionOptions = {
    encode(message: CompletionOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.temperature !== undefined) {
            DoubleValue.encode({ value: message.temperature! }, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxTokens !== undefined) {
            Int64Value.encode({ value: message.maxTokens! }, writer.uint32(18).fork()).ldelim();
        }
        if (message.reasoningOptions !== undefined) {
            ReasoningOptions.encode(message.reasoningOptions, writer.uint32(26).fork()).ldelim();
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
                    message.temperature = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.maxTokens = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.reasoningOptions = ReasoningOptions.decode(reader, reader.uint32());
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
        message.temperature =
            object.temperature !== undefined && object.temperature !== null
                ? Number(object.temperature)
                : undefined;
        message.maxTokens =
            object.maxTokens !== undefined && object.maxTokens !== null
                ? Number(object.maxTokens)
                : undefined;
        message.reasoningOptions =
            object.reasoningOptions !== undefined && object.reasoningOptions !== null
                ? ReasoningOptions.fromJSON(object.reasoningOptions)
                : undefined;
        return message;
    },

    toJSON(message: CompletionOptions): unknown {
        const obj: any = {};
        message.temperature !== undefined && (obj.temperature = message.temperature);
        message.maxTokens !== undefined && (obj.maxTokens = message.maxTokens);
        message.reasoningOptions !== undefined &&
            (obj.reasoningOptions = message.reasoningOptions
                ? ReasoningOptions.toJSON(message.reasoningOptions)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CompletionOptions>, I>>(object: I): CompletionOptions {
        const message = { ...baseCompletionOptions } as CompletionOptions;
        message.temperature = object.temperature ?? undefined;
        message.maxTokens = object.maxTokens ?? undefined;
        message.reasoningOptions =
            object.reasoningOptions !== undefined && object.reasoningOptions !== null
                ? ReasoningOptions.fromPartial(object.reasoningOptions)
                : undefined;
        return message;
    },
};

const baseReasoningOptions: object = { mode: 0 };

export const ReasoningOptions = {
    encode(message: ReasoningOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ReasoningOptions {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReasoningOptions } as ReasoningOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ReasoningOptions {
        const message = { ...baseReasoningOptions } as ReasoningOptions;
        message.mode =
            object.mode !== undefined && object.mode !== null
                ? reasoningOptions_ReasoningModeFromJSON(object.mode)
                : 0;
        return message;
    },

    toJSON(message: ReasoningOptions): unknown {
        const obj: any = {};
        message.mode !== undefined &&
            (obj.mode = reasoningOptions_ReasoningModeToJSON(message.mode));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ReasoningOptions>, I>>(object: I): ReasoningOptions {
        const message = { ...baseReasoningOptions } as ReasoningOptions;
        message.mode = object.mode ?? 0;
        return message;
    },
};

const baseJsonSchema: object = {};

export const JsonSchema = {
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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
