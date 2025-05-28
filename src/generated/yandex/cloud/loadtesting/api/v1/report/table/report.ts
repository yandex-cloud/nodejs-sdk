/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Quantiles } from '../../../../../../../yandex/cloud/loadtesting/api/v1/common/quantiles';

export const protobufPackage = 'yandex.cloud.loadtesting.api.v1.report.table';

/** Aggregated test results. */
export interface Report {
    /** Total count of HTTP responses, grouped by HTTP response code. */
    httpCodes: { [key: number]: number };
    /** Total count of network responses, grouped by response code. */
    netCodes: { [key: number]: number };
    /** Response time statistics, aggregated by quantiles. */
    quantiles?: Quantiles;
}

export interface Report_HttpCodesEntry {
    key: number;
    value: number;
}

export interface Report_NetCodesEntry {
    key: number;
    value: number;
}

const baseReport: object = {};

export const Report = {
    encode(message: Report, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        Object.entries(message.httpCodes).forEach(([key, value]) => {
            Report_HttpCodesEntry.encode(
                { key: key as any, value },
                writer.uint32(10).fork(),
            ).ldelim();
        });
        Object.entries(message.netCodes).forEach(([key, value]) => {
            Report_NetCodesEntry.encode(
                { key: key as any, value },
                writer.uint32(18).fork(),
            ).ldelim();
        });
        if (message.quantiles !== undefined) {
            Quantiles.encode(message.quantiles, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Report {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReport } as Report;
        message.httpCodes = {};
        message.netCodes = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = Report_HttpCodesEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.httpCodes[entry1.key] = entry1.value;
                    }
                    break;
                case 2:
                    const entry2 = Report_NetCodesEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.netCodes[entry2.key] = entry2.value;
                    }
                    break;
                case 3:
                    message.quantiles = Quantiles.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Report {
        const message = { ...baseReport } as Report;
        message.httpCodes = Object.entries(object.httpCodes ?? {}).reduce<{
            [key: number]: number;
        }>((acc, [key, value]) => {
            acc[Number(key)] = Number(value);
            return acc;
        }, {});
        message.netCodes = Object.entries(object.netCodes ?? {}).reduce<{ [key: number]: number }>(
            (acc, [key, value]) => {
                acc[Number(key)] = Number(value);
                return acc;
            },
            {},
        );
        message.quantiles =
            object.quantiles !== undefined && object.quantiles !== null
                ? Quantiles.fromJSON(object.quantiles)
                : undefined;
        return message;
    },

    toJSON(message: Report): unknown {
        const obj: any = {};
        obj.httpCodes = {};
        if (message.httpCodes) {
            Object.entries(message.httpCodes).forEach(([k, v]) => {
                obj.httpCodes[k] = Math.round(v);
            });
        }
        obj.netCodes = {};
        if (message.netCodes) {
            Object.entries(message.netCodes).forEach(([k, v]) => {
                obj.netCodes[k] = Math.round(v);
            });
        }
        message.quantiles !== undefined &&
            (obj.quantiles = message.quantiles ? Quantiles.toJSON(message.quantiles) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Report>, I>>(object: I): Report {
        const message = { ...baseReport } as Report;
        message.httpCodes = Object.entries(object.httpCodes ?? {}).reduce<{
            [key: number]: number;
        }>((acc, [key, value]) => {
            if (value !== undefined) {
                acc[Number(key)] = Number(value);
            }
            return acc;
        }, {});
        message.netCodes = Object.entries(object.netCodes ?? {}).reduce<{ [key: number]: number }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[Number(key)] = Number(value);
                }
                return acc;
            },
            {},
        );
        message.quantiles =
            object.quantiles !== undefined && object.quantiles !== null
                ? Quantiles.fromPartial(object.quantiles)
                : undefined;
        return message;
    },
};

const baseReport_HttpCodesEntry: object = { key: 0, value: 0 };

export const Report_HttpCodesEntry = {
    encode(message: Report_HttpCodesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== 0) {
            writer.uint32(8).int64(message.key);
        }
        if (message.value !== 0) {
            writer.uint32(16).int64(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Report_HttpCodesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReport_HttpCodesEntry } as Report_HttpCodesEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.value = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Report_HttpCodesEntry {
        const message = { ...baseReport_HttpCodesEntry } as Report_HttpCodesEntry;
        message.key = object.key !== undefined && object.key !== null ? Number(object.key) : 0;
        message.value =
            object.value !== undefined && object.value !== null ? Number(object.value) : 0;
        return message;
    },

    toJSON(message: Report_HttpCodesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = Math.round(message.key));
        message.value !== undefined && (obj.value = Math.round(message.value));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Report_HttpCodesEntry>, I>>(
        object: I,
    ): Report_HttpCodesEntry {
        const message = { ...baseReport_HttpCodesEntry } as Report_HttpCodesEntry;
        message.key = object.key ?? 0;
        message.value = object.value ?? 0;
        return message;
    },
};

const baseReport_NetCodesEntry: object = { key: 0, value: 0 };

export const Report_NetCodesEntry = {
    encode(message: Report_NetCodesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== 0) {
            writer.uint32(8).int64(message.key);
        }
        if (message.value !== 0) {
            writer.uint32(16).int64(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Report_NetCodesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReport_NetCodesEntry } as Report_NetCodesEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.value = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Report_NetCodesEntry {
        const message = { ...baseReport_NetCodesEntry } as Report_NetCodesEntry;
        message.key = object.key !== undefined && object.key !== null ? Number(object.key) : 0;
        message.value =
            object.value !== undefined && object.value !== null ? Number(object.value) : 0;
        return message;
    },

    toJSON(message: Report_NetCodesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = Math.round(message.key));
        message.value !== undefined && (obj.value = Math.round(message.value));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Report_NetCodesEntry>, I>>(
        object: I,
    ): Report_NetCodesEntry {
        const message = { ...baseReport_NetCodesEntry } as Report_NetCodesEntry;
        message.key = object.key ?? 0;
        message.value = object.value ?? 0;
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
