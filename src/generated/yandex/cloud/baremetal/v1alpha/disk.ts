/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.baremetal.v1alpha';

/** Disk drive type. */
export enum DiskDriveType {
    /** DISK_DRIVE_TYPE_UNSPECIFIED - Unspecified disk drive type. */
    DISK_DRIVE_TYPE_UNSPECIFIED = 0,
    /** HDD - Hard disk drive. */
    HDD = 1,
    /** SSD - Solid state drive. */
    SSD = 2,
    UNRECOGNIZED = -1,
}

export function diskDriveTypeFromJSON(object: any): DiskDriveType {
    switch (object) {
        case 0:
        case 'DISK_DRIVE_TYPE_UNSPECIFIED':
            return DiskDriveType.DISK_DRIVE_TYPE_UNSPECIFIED;
        case 1:
        case 'HDD':
            return DiskDriveType.HDD;
        case 2:
        case 'SSD':
            return DiskDriveType.SSD;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return DiskDriveType.UNRECOGNIZED;
    }
}

export function diskDriveTypeToJSON(object: DiskDriveType): string {
    switch (object) {
        case DiskDriveType.DISK_DRIVE_TYPE_UNSPECIFIED:
            return 'DISK_DRIVE_TYPE_UNSPECIFIED';
        case DiskDriveType.HDD:
            return 'HDD';
        case DiskDriveType.SSD:
            return 'SSD';
        default:
            return 'UNKNOWN';
    }
}

/** Disk. */
export interface Disk {
    /** ID of the disk. */
    id: string;
    /** Type of the disk drive. */
    type: DiskDriveType;
    /** Size of the disk in gibibytes (2^30 bytes). */
    sizeGib: number;
}

const baseDisk: object = { id: '', type: 0, sizeGib: 0 };

export const Disk = {
    encode(message: Disk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        if (message.sizeGib !== 0) {
            writer.uint32(24).int64(message.sizeGib);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Disk {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDisk } as Disk;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.type = reader.int32() as any;
                    break;
                case 3:
                    message.sizeGib = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Disk {
        const message = { ...baseDisk } as Disk;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.type =
            object.type !== undefined && object.type !== null
                ? diskDriveTypeFromJSON(object.type)
                : 0;
        message.sizeGib =
            object.sizeGib !== undefined && object.sizeGib !== null ? Number(object.sizeGib) : 0;
        return message;
    },

    toJSON(message: Disk): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined && (obj.type = diskDriveTypeToJSON(message.type));
        message.sizeGib !== undefined && (obj.sizeGib = Math.round(message.sizeGib));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Disk>, I>>(object: I): Disk {
        const message = { ...baseDisk } as Disk;
        message.id = object.id ?? '';
        message.type = object.type ?? 0;
        message.sizeGib = object.sizeGib ?? 0;
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
