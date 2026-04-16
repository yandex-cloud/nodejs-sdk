/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.monitoring.v3';

export interface Timeline {
    /** default time window */
    period: string;
    /** default refresh interval */
    refreshInterval?: number | undefined;
}

const baseTimeline: object = { period: '' };

export const Timeline = {
    encode(message: Timeline, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.period !== '') {
            writer.uint32(10).string(message.period);
        }
        if (message.refreshInterval !== undefined) {
            writer.uint32(16).int64(message.refreshInterval);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Timeline {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTimeline } as Timeline;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.period = reader.string();
                    break;
                case 2:
                    message.refreshInterval = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Timeline {
        const message = { ...baseTimeline } as Timeline;
        message.period =
            object.period !== undefined && object.period !== null ? String(object.period) : '';
        message.refreshInterval =
            object.refreshInterval !== undefined && object.refreshInterval !== null
                ? Number(object.refreshInterval)
                : undefined;
        return message;
    },

    toJSON(message: Timeline): unknown {
        const obj: any = {};
        message.period !== undefined && (obj.period = message.period);
        message.refreshInterval !== undefined &&
            (obj.refreshInterval = Math.round(message.refreshInterval));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Timeline>, I>>(object: I): Timeline {
        const message = { ...baseTimeline } as Timeline;
        message.period = object.period ?? '';
        message.refreshInterval = object.refreshInterval ?? undefined;
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
