/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.speechsense.v1.analysis';

export interface Assistants {
    /** List of assistants results */
    assistantResults: AssistantResult[];
}

export interface AssistantResult {
    /** Assistant id */
    assistantId: string;
    /** Per-field assistant results */
    results: AssistantFieldResult[];
}

export interface AssistantFieldResult {
    /** Result as a string */
    stringResult: string | undefined;
    /** Result as an integer */
    intResult: number | undefined;
    /** Result as a floating-point number */
    floatResult: number | undefined;
    /** Assistant result field id */
    fieldId: string;
}

const baseAssistants: object = {};

export const Assistants: {
    encode(message: Assistants, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Assistants;
    fromJSON(object: any): Assistants;
    toJSON(message: Assistants): unknown;
    fromPartial<I extends Exact<DeepPartial<Assistants>, I>>(object: I): Assistants;
} = {
    encode(message: Assistants, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.assistantResults) {
            AssistantResult.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Assistants {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAssistants } as Assistants;
        message.assistantResults = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assistantResults.push(AssistantResult.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Assistants {
        const message = { ...baseAssistants } as Assistants;
        message.assistantResults = (object.assistantResults ?? []).map((e: any) =>
            AssistantResult.fromJSON(e),
        );
        return message;
    },

    toJSON(message: Assistants): unknown {
        const obj: any = {};
        if (message.assistantResults) {
            obj.assistantResults = message.assistantResults.map((e) =>
                e ? AssistantResult.toJSON(e) : undefined,
            );
        } else {
            obj.assistantResults = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Assistants>, I>>(object: I): Assistants {
        const message = { ...baseAssistants } as Assistants;
        message.assistantResults =
            object.assistantResults?.map((e) => AssistantResult.fromPartial(e)) || [];
        return message;
    },
};

const baseAssistantResult: object = { assistantId: '' };

export const AssistantResult: {
    encode(message: AssistantResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssistantResult;
    fromJSON(object: any): AssistantResult;
    toJSON(message: AssistantResult): unknown;
    fromPartial<I extends Exact<DeepPartial<AssistantResult>, I>>(object: I): AssistantResult;
} = {
    encode(message: AssistantResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.assistantId !== '') {
            writer.uint32(10).string(message.assistantId);
        }
        for (const v of message.results) {
            AssistantFieldResult.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AssistantResult {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAssistantResult } as AssistantResult;
        message.results = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assistantId = reader.string();
                    break;
                case 2:
                    message.results.push(AssistantFieldResult.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AssistantResult {
        const message = { ...baseAssistantResult } as AssistantResult;
        message.assistantId =
            object.assistantId !== undefined && object.assistantId !== null
                ? String(object.assistantId)
                : '';
        message.results = (object.results ?? []).map((e: any) => AssistantFieldResult.fromJSON(e));
        return message;
    },

    toJSON(message: AssistantResult): unknown {
        const obj: any = {};
        message.assistantId !== undefined && (obj.assistantId = message.assistantId);
        if (message.results) {
            obj.results = message.results.map((e) =>
                e ? AssistantFieldResult.toJSON(e) : undefined,
            );
        } else {
            obj.results = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AssistantResult>, I>>(object: I): AssistantResult {
        const message = { ...baseAssistantResult } as AssistantResult;
        message.assistantId = object.assistantId ?? '';
        message.results = object.results?.map((e) => AssistantFieldResult.fromPartial(e)) || [];
        return message;
    },
};

const baseAssistantFieldResult: object = { fieldId: '' };

export const AssistantFieldResult: {
    encode(message: AssistantFieldResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssistantFieldResult;
    fromJSON(object: any): AssistantFieldResult;
    toJSON(message: AssistantFieldResult): unknown;
    fromPartial<I extends Exact<DeepPartial<AssistantFieldResult>, I>>(object: I): AssistantFieldResult;
} = {
    encode(message: AssistantFieldResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.stringResult !== undefined) {
            writer.uint32(18).string(message.stringResult);
        }
        if (message.intResult !== undefined) {
            writer.uint32(24).int64(message.intResult);
        }
        if (message.floatResult !== undefined) {
            writer.uint32(33).double(message.floatResult);
        }
        if (message.fieldId !== '') {
            writer.uint32(10).string(message.fieldId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AssistantFieldResult {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAssistantFieldResult } as AssistantFieldResult;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.stringResult = reader.string();
                    break;
                case 3:
                    message.intResult = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.floatResult = reader.double();
                    break;
                case 1:
                    message.fieldId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AssistantFieldResult {
        const message = { ...baseAssistantFieldResult } as AssistantFieldResult;
        message.stringResult =
            object.stringResult !== undefined && object.stringResult !== null
                ? String(object.stringResult)
                : undefined;
        message.intResult =
            object.intResult !== undefined && object.intResult !== null
                ? Number(object.intResult)
                : undefined;
        message.floatResult =
            object.floatResult !== undefined && object.floatResult !== null
                ? Number(object.floatResult)
                : undefined;
        message.fieldId =
            object.fieldId !== undefined && object.fieldId !== null ? String(object.fieldId) : '';
        return message;
    },

    toJSON(message: AssistantFieldResult): unknown {
        const obj: any = {};
        message.stringResult !== undefined && (obj.stringResult = message.stringResult);
        message.intResult !== undefined && (obj.intResult = Math.round(message.intResult));
        message.floatResult !== undefined && (obj.floatResult = message.floatResult);
        message.fieldId !== undefined && (obj.fieldId = message.fieldId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AssistantFieldResult>, I>>(
        object: I,
    ): AssistantFieldResult {
        const message = { ...baseAssistantFieldResult } as AssistantFieldResult;
        message.stringResult = object.stringResult ?? undefined;
        message.intResult = object.intResult ?? undefined;
        message.floatResult = object.floatResult ?? undefined;
        message.fieldId = object.fieldId ?? '';
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
