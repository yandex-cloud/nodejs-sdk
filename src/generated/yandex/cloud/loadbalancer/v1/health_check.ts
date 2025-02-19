/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Duration } from '../../../../google/protobuf/duration';

export const protobufPackage = 'yandex.cloud.loadbalancer.v1';

/** A HealthCheck resource. For more information, see [Health check](/docs/network-load-balancer/concepts/health-check). */
export interface HealthCheck {
    /** Name of the health check. The name must be unique for each target group that attached to a single load balancer. 3-63 characters long. */
    name: string;
    /** The interval between health checks. The default is 2 seconds. */
    interval?: Duration;
    /** Timeout for a target to return a response for the health check. The default is 1 second. */
    timeout?: Duration;
    /** Number of failed health checks before changing the status to `` UNHEALTHY ``. The default is 2. */
    unhealthyThreshold: number;
    /** Number of successful health checks required in order to set the `` HEALTHY `` status for the target. The default is 2. */
    healthyThreshold: number;
    /** Options for TCP health check. */
    tcpOptions?: HealthCheck_TcpOptions | undefined;
    /** Options for HTTP health check. */
    httpOptions?: HealthCheck_HttpOptions | undefined;
}

/** Configuration option for a TCP health check. */
export interface HealthCheck_TcpOptions {
    /** Port to use for TCP health checks. */
    port: number;
}

/** Configuration option for an HTTP health check. */
export interface HealthCheck_HttpOptions {
    /** Port to use for HTTP health checks. */
    port: number;
    /**
     * URL path to set for health checking requests for every target in the target group.
     * For example `` /ping ``. The default path is `` / ``.
     */
    path: string;
}

const baseHealthCheck: object = { name: '', unhealthyThreshold: 0, healthyThreshold: 0 };

export const HealthCheck = {
    encode(message: HealthCheck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.interval !== undefined) {
            Duration.encode(message.interval, writer.uint32(18).fork()).ldelim();
        }
        if (message.timeout !== undefined) {
            Duration.encode(message.timeout, writer.uint32(26).fork()).ldelim();
        }
        if (message.unhealthyThreshold !== 0) {
            writer.uint32(32).int64(message.unhealthyThreshold);
        }
        if (message.healthyThreshold !== 0) {
            writer.uint32(40).int64(message.healthyThreshold);
        }
        if (message.tcpOptions !== undefined) {
            HealthCheck_TcpOptions.encode(message.tcpOptions, writer.uint32(50).fork()).ldelim();
        }
        if (message.httpOptions !== undefined) {
            HealthCheck_HttpOptions.encode(message.httpOptions, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheck {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHealthCheck } as HealthCheck;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.interval = Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.timeout = Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.unhealthyThreshold = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.healthyThreshold = longToNumber(reader.int64() as Long);
                    break;
                case 6:
                    message.tcpOptions = HealthCheck_TcpOptions.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.httpOptions = HealthCheck_HttpOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HealthCheck {
        const message = { ...baseHealthCheck } as HealthCheck;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.interval =
            object.interval !== undefined && object.interval !== null
                ? Duration.fromJSON(object.interval)
                : undefined;
        message.timeout =
            object.timeout !== undefined && object.timeout !== null
                ? Duration.fromJSON(object.timeout)
                : undefined;
        message.unhealthyThreshold =
            object.unhealthyThreshold !== undefined && object.unhealthyThreshold !== null
                ? Number(object.unhealthyThreshold)
                : 0;
        message.healthyThreshold =
            object.healthyThreshold !== undefined && object.healthyThreshold !== null
                ? Number(object.healthyThreshold)
                : 0;
        message.tcpOptions =
            object.tcpOptions !== undefined && object.tcpOptions !== null
                ? HealthCheck_TcpOptions.fromJSON(object.tcpOptions)
                : undefined;
        message.httpOptions =
            object.httpOptions !== undefined && object.httpOptions !== null
                ? HealthCheck_HttpOptions.fromJSON(object.httpOptions)
                : undefined;
        return message;
    },

    toJSON(message: HealthCheck): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.interval !== undefined &&
            (obj.interval = message.interval ? Duration.toJSON(message.interval) : undefined);
        message.timeout !== undefined &&
            (obj.timeout = message.timeout ? Duration.toJSON(message.timeout) : undefined);
        message.unhealthyThreshold !== undefined &&
            (obj.unhealthyThreshold = Math.round(message.unhealthyThreshold));
        message.healthyThreshold !== undefined &&
            (obj.healthyThreshold = Math.round(message.healthyThreshold));
        message.tcpOptions !== undefined &&
            (obj.tcpOptions = message.tcpOptions
                ? HealthCheck_TcpOptions.toJSON(message.tcpOptions)
                : undefined);
        message.httpOptions !== undefined &&
            (obj.httpOptions = message.httpOptions
                ? HealthCheck_HttpOptions.toJSON(message.httpOptions)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HealthCheck>, I>>(object: I): HealthCheck {
        const message = { ...baseHealthCheck } as HealthCheck;
        message.name = object.name ?? '';
        message.interval =
            object.interval !== undefined && object.interval !== null
                ? Duration.fromPartial(object.interval)
                : undefined;
        message.timeout =
            object.timeout !== undefined && object.timeout !== null
                ? Duration.fromPartial(object.timeout)
                : undefined;
        message.unhealthyThreshold = object.unhealthyThreshold ?? 0;
        message.healthyThreshold = object.healthyThreshold ?? 0;
        message.tcpOptions =
            object.tcpOptions !== undefined && object.tcpOptions !== null
                ? HealthCheck_TcpOptions.fromPartial(object.tcpOptions)
                : undefined;
        message.httpOptions =
            object.httpOptions !== undefined && object.httpOptions !== null
                ? HealthCheck_HttpOptions.fromPartial(object.httpOptions)
                : undefined;
        return message;
    },
};

const baseHealthCheck_TcpOptions: object = { port: 0 };

export const HealthCheck_TcpOptions = {
    encode(message: HealthCheck_TcpOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.port !== 0) {
            writer.uint32(8).int64(message.port);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheck_TcpOptions {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHealthCheck_TcpOptions } as HealthCheck_TcpOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HealthCheck_TcpOptions {
        const message = { ...baseHealthCheck_TcpOptions } as HealthCheck_TcpOptions;
        message.port = object.port !== undefined && object.port !== null ? Number(object.port) : 0;
        return message;
    },

    toJSON(message: HealthCheck_TcpOptions): unknown {
        const obj: any = {};
        message.port !== undefined && (obj.port = Math.round(message.port));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HealthCheck_TcpOptions>, I>>(
        object: I,
    ): HealthCheck_TcpOptions {
        const message = { ...baseHealthCheck_TcpOptions } as HealthCheck_TcpOptions;
        message.port = object.port ?? 0;
        return message;
    },
};

const baseHealthCheck_HttpOptions: object = { port: 0, path: '' };

export const HealthCheck_HttpOptions = {
    encode(message: HealthCheck_HttpOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.port !== 0) {
            writer.uint32(8).int64(message.port);
        }
        if (message.path !== '') {
            writer.uint32(18).string(message.path);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheck_HttpOptions {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHealthCheck_HttpOptions } as HealthCheck_HttpOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HealthCheck_HttpOptions {
        const message = { ...baseHealthCheck_HttpOptions } as HealthCheck_HttpOptions;
        message.port = object.port !== undefined && object.port !== null ? Number(object.port) : 0;
        message.path = object.path !== undefined && object.path !== null ? String(object.path) : '';
        return message;
    },

    toJSON(message: HealthCheck_HttpOptions): unknown {
        const obj: any = {};
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.path !== undefined && (obj.path = message.path);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HealthCheck_HttpOptions>, I>>(
        object: I,
    ): HealthCheck_HttpOptions {
        const message = { ...baseHealthCheck_HttpOptions } as HealthCheck_HttpOptions;
        message.port = object.port ?? 0;
        message.path = object.path ?? '';
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
