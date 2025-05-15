/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.ai.tuning.v1';

export interface TuningTypeLora {
    rank: number;
    /** Integer value */
    alpha: number;
    initialization: string;
    type: string;
}

export interface TuningTypePromptTune {
    virtualTokens: number;
}

const baseTuningTypeLora: object = { rank: 0, alpha: 0, initialization: '', type: '' };

export const TuningTypeLora = {
    encode(message: TuningTypeLora, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.rank !== 0) {
            writer.uint32(8).int64(message.rank);
        }
        if (message.alpha !== 0) {
            writer.uint32(17).double(message.alpha);
        }
        if (message.initialization !== '') {
            writer.uint32(26).string(message.initialization);
        }
        if (message.type !== '') {
            writer.uint32(34).string(message.type);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TuningTypeLora {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTuningTypeLora } as TuningTypeLora;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rank = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.alpha = reader.double();
                    break;
                case 3:
                    message.initialization = reader.string();
                    break;
                case 4:
                    message.type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TuningTypeLora {
        const message = { ...baseTuningTypeLora } as TuningTypeLora;
        message.rank = object.rank !== undefined && object.rank !== null ? Number(object.rank) : 0;
        message.alpha =
            object.alpha !== undefined && object.alpha !== null ? Number(object.alpha) : 0;
        message.initialization =
            object.initialization !== undefined && object.initialization !== null
                ? String(object.initialization)
                : '';
        message.type = object.type !== undefined && object.type !== null ? String(object.type) : '';
        return message;
    },

    toJSON(message: TuningTypeLora): unknown {
        const obj: any = {};
        message.rank !== undefined && (obj.rank = Math.round(message.rank));
        message.alpha !== undefined && (obj.alpha = message.alpha);
        message.initialization !== undefined && (obj.initialization = message.initialization);
        message.type !== undefined && (obj.type = message.type);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TuningTypeLora>, I>>(object: I): TuningTypeLora {
        const message = { ...baseTuningTypeLora } as TuningTypeLora;
        message.rank = object.rank ?? 0;
        message.alpha = object.alpha ?? 0;
        message.initialization = object.initialization ?? '';
        message.type = object.type ?? '';
        return message;
    },
};

const baseTuningTypePromptTune: object = { virtualTokens: 0 };

export const TuningTypePromptTune = {
    encode(message: TuningTypePromptTune, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.virtualTokens !== 0) {
            writer.uint32(8).int64(message.virtualTokens);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TuningTypePromptTune {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTuningTypePromptTune } as TuningTypePromptTune;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.virtualTokens = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TuningTypePromptTune {
        const message = { ...baseTuningTypePromptTune } as TuningTypePromptTune;
        message.virtualTokens =
            object.virtualTokens !== undefined && object.virtualTokens !== null
                ? Number(object.virtualTokens)
                : 0;
        return message;
    },

    toJSON(message: TuningTypePromptTune): unknown {
        const obj: any = {};
        message.virtualTokens !== undefined &&
            (obj.virtualTokens = Math.round(message.virtualTokens));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TuningTypePromptTune>, I>>(
        object: I,
    ): TuningTypePromptTune {
        const message = { ...baseTuningTypePromptTune } as TuningTypePromptTune;
        message.virtualTokens = object.virtualTokens ?? 0;
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
