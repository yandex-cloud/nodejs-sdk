/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.apploadbalancer.v1';

/** RateLimit is a set of settings for global rate limiting. */
export interface RateLimit {
    $type: 'yandex.cloud.apploadbalancer.v1.RateLimit';
    /** AllRequests is a rate limit configuration applied to all incoming requests. */
    allRequests?: RateLimit_Limit;
    /**
     * RequestsPerIp is a rate limit configuration applied separately for each set of requests
     * grouped by client IP address.
     */
    requestsPerIp?: RateLimit_Limit;
}

/** Limit is a rate limit value settings. */
export interface RateLimit_Limit {
    $type: 'yandex.cloud.apploadbalancer.v1.RateLimit.Limit';
    /** PerSecond is a limit value specified with per second time unit. */
    perSecond: number | undefined;
    /** PerMinute is a limit value specified with per minute time unit. */
    perMinute: number | undefined;
}

const baseRateLimit: object = { $type: 'yandex.cloud.apploadbalancer.v1.RateLimit' };

export const RateLimit = {
    $type: 'yandex.cloud.apploadbalancer.v1.RateLimit' as const,

    encode(message: RateLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.allRequests !== undefined) {
            RateLimit_Limit.encode(message.allRequests, writer.uint32(26).fork()).ldelim();
        }
        if (message.requestsPerIp !== undefined) {
            RateLimit_Limit.encode(message.requestsPerIp, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RateLimit {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRateLimit } as RateLimit;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.allRequests = RateLimit_Limit.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.requestsPerIp = RateLimit_Limit.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RateLimit {
        const message = { ...baseRateLimit } as RateLimit;
        message.allRequests =
            object.allRequests !== undefined && object.allRequests !== null
                ? RateLimit_Limit.fromJSON(object.allRequests)
                : undefined;
        message.requestsPerIp =
            object.requestsPerIp !== undefined && object.requestsPerIp !== null
                ? RateLimit_Limit.fromJSON(object.requestsPerIp)
                : undefined;
        return message;
    },

    toJSON(message: RateLimit): unknown {
        const obj: any = {};
        message.allRequests !== undefined &&
            (obj.allRequests = message.allRequests
                ? RateLimit_Limit.toJSON(message.allRequests)
                : undefined);
        message.requestsPerIp !== undefined &&
            (obj.requestsPerIp = message.requestsPerIp
                ? RateLimit_Limit.toJSON(message.requestsPerIp)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RateLimit>, I>>(object: I): RateLimit {
        const message = { ...baseRateLimit } as RateLimit;
        message.allRequests =
            object.allRequests !== undefined && object.allRequests !== null
                ? RateLimit_Limit.fromPartial(object.allRequests)
                : undefined;
        message.requestsPerIp =
            object.requestsPerIp !== undefined && object.requestsPerIp !== null
                ? RateLimit_Limit.fromPartial(object.requestsPerIp)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(RateLimit.$type, RateLimit);

const baseRateLimit_Limit: object = { $type: 'yandex.cloud.apploadbalancer.v1.RateLimit.Limit' };

export const RateLimit_Limit = {
    $type: 'yandex.cloud.apploadbalancer.v1.RateLimit.Limit' as const,

    encode(message: RateLimit_Limit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.perSecond !== undefined) {
            writer.uint32(8).int64(message.perSecond);
        }
        if (message.perMinute !== undefined) {
            writer.uint32(16).int64(message.perMinute);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RateLimit_Limit {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRateLimit_Limit } as RateLimit_Limit;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.perSecond = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.perMinute = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RateLimit_Limit {
        const message = { ...baseRateLimit_Limit } as RateLimit_Limit;
        message.perSecond =
            object.perSecond !== undefined && object.perSecond !== null
                ? Number(object.perSecond)
                : undefined;
        message.perMinute =
            object.perMinute !== undefined && object.perMinute !== null
                ? Number(object.perMinute)
                : undefined;
        return message;
    },

    toJSON(message: RateLimit_Limit): unknown {
        const obj: any = {};
        message.perSecond !== undefined && (obj.perSecond = Math.round(message.perSecond));
        message.perMinute !== undefined && (obj.perMinute = Math.round(message.perMinute));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RateLimit_Limit>, I>>(object: I): RateLimit_Limit {
        const message = { ...baseRateLimit_Limit } as RateLimit_Limit;
        message.perSecond = object.perSecond ?? undefined;
        message.perMinute = object.perMinute ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(RateLimit_Limit.$type, RateLimit_Limit);

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
