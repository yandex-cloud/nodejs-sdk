/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.clouddesktop.v1.api';

/** Disk specificaton. */
export interface DiskSpec {
    /** Type of disk. */
    type: DiskSpec_Type;
    /** Size of disk. */
    size: number;
}

export enum DiskSpec_Type {
    /** TYPE_UNSPECIFIED - Disk type is not specified. */
    TYPE_UNSPECIFIED = 0,
    /** HDD - HDD disk type. */
    HDD = 1,
    /** SSD - SSD disk type. */
    SSD = 2,
    UNRECOGNIZED = -1,
}

export function diskSpec_TypeFromJSON(object: any): DiskSpec_Type {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return DiskSpec_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'HDD':
            return DiskSpec_Type.HDD;
        case 2:
        case 'SSD':
            return DiskSpec_Type.SSD;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return DiskSpec_Type.UNRECOGNIZED;
    }
}

export function diskSpec_TypeToJSON(object: DiskSpec_Type): string {
    switch (object) {
        case DiskSpec_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case DiskSpec_Type.HDD:
            return 'HDD';
        case DiskSpec_Type.SSD:
            return 'SSD';
        default:
            return 'UNKNOWN';
    }
}

const baseDiskSpec: object = { type: 0, size: 0 };

export const DiskSpec = {
    encode(message: DiskSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.size !== 0) {
            writer.uint32(32).int64(message.size);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DiskSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDiskSpec } as DiskSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.type = reader.int32() as any;
                    break;
                case 4:
                    message.size = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DiskSpec {
        const message = { ...baseDiskSpec } as DiskSpec;
        message.type =
            object.type !== undefined && object.type !== null
                ? diskSpec_TypeFromJSON(object.type)
                : 0;
        message.size = object.size !== undefined && object.size !== null ? Number(object.size) : 0;
        return message;
    },

    toJSON(message: DiskSpec): unknown {
        const obj: any = {};
        message.type !== undefined && (obj.type = diskSpec_TypeToJSON(message.type));
        message.size !== undefined && (obj.size = Math.round(message.size));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DiskSpec>, I>>(object: I): DiskSpec {
        const message = { ...baseDiskSpec } as DiskSpec;
        message.type = object.type ?? 0;
        message.size = object.size ?? 0;
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
