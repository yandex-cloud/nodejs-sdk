/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Disk } from '../../../../yandex/cloud/baremetal/v1alpha/disk';

export const protobufPackage = 'yandex.cloud.baremetal.v1alpha';

/** Storage partition type. */
export enum StoragePartitionType {
    /** STORAGE_PARTITION_TYPE_UNSPECIFIED - Unspecified storage partition type. */
    STORAGE_PARTITION_TYPE_UNSPECIFIED = 0,
    /** EXT4 - ext4 file system partition type. */
    EXT4 = 1,
    /** SWAP - Swap partition type. */
    SWAP = 2,
    /** EXT3 - ext3 file system partition type. */
    EXT3 = 3,
    /** XFS - XFS file system partition type. */
    XFS = 4,
    UNRECOGNIZED = -1,
}

export function storagePartitionTypeFromJSON(object: any): StoragePartitionType {
    switch (object) {
        case 0:
        case 'STORAGE_PARTITION_TYPE_UNSPECIFIED':
            return StoragePartitionType.STORAGE_PARTITION_TYPE_UNSPECIFIED;
        case 1:
        case 'EXT4':
            return StoragePartitionType.EXT4;
        case 2:
        case 'SWAP':
            return StoragePartitionType.SWAP;
        case 3:
        case 'EXT3':
            return StoragePartitionType.EXT3;
        case 4:
        case 'XFS':
            return StoragePartitionType.XFS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return StoragePartitionType.UNRECOGNIZED;
    }
}

export function storagePartitionTypeToJSON(object: StoragePartitionType): string {
    switch (object) {
        case StoragePartitionType.STORAGE_PARTITION_TYPE_UNSPECIFIED:
            return 'STORAGE_PARTITION_TYPE_UNSPECIFIED';
        case StoragePartitionType.EXT4:
            return 'EXT4';
        case StoragePartitionType.SWAP:
            return 'SWAP';
        case StoragePartitionType.EXT3:
            return 'EXT3';
        case StoragePartitionType.XFS:
            return 'XFS';
        default:
            return 'UNKNOWN';
    }
}

/** RaidType represents different RAID configurations. */
export enum RaidType {
    /** RAID_TYPE_UNSPECIFIED - Unspecified RAID configuration. */
    RAID_TYPE_UNSPECIFIED = 0,
    /** RAID0 - RAID0 configuration. */
    RAID0 = 1,
    /** RAID1 - RAID1 configuration. */
    RAID1 = 2,
    /** RAID10 - RAID10 configuration. */
    RAID10 = 3,
    UNRECOGNIZED = -1,
}

export function raidTypeFromJSON(object: any): RaidType {
    switch (object) {
        case 0:
        case 'RAID_TYPE_UNSPECIFIED':
            return RaidType.RAID_TYPE_UNSPECIFIED;
        case 1:
        case 'RAID0':
            return RaidType.RAID0;
        case 2:
        case 'RAID1':
            return RaidType.RAID1;
        case 3:
        case 'RAID10':
            return RaidType.RAID10;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return RaidType.UNRECOGNIZED;
    }
}

export function raidTypeToJSON(object: RaidType): string {
    switch (object) {
        case RaidType.RAID_TYPE_UNSPECIFIED:
            return 'RAID_TYPE_UNSPECIFIED';
        case RaidType.RAID0:
            return 'RAID0';
        case RaidType.RAID1:
            return 'RAID1';
        case RaidType.RAID10:
            return 'RAID10';
        default:
            return 'UNKNOWN';
    }
}

export interface StoragePartition {
    /** Partition type. */
    type: StoragePartitionType;
    /** Size of the storage partition in gibibytes (2^30 bytes). */
    sizeGib: number;
    /** Storage mount point. */
    mountPoint: string;
}

/**
 * Storage, a OS-level storage entity used for creating partitions. For example, this could
 * represent a plain disk or a software RAID of disks.
 */
export interface Storage {
    /** Array of partitions created on the storage. */
    partitions: StoragePartition[];
    /** Disk storage. */
    disk?: Disk | undefined;
    /** RAID storage. */
    raid?: Raid | undefined;
}

/** RAID storage. */
export interface Raid {
    /** RAID type. */
    type: RaidType;
    /** Array of disks in the RAID configuration. */
    disks: Disk[];
}

const baseStoragePartition: object = { type: 0, sizeGib: 0, mountPoint: '' };

export const StoragePartition = {
    encode(message: StoragePartition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.sizeGib !== 0) {
            writer.uint32(16).int64(message.sizeGib);
        }
        if (message.mountPoint !== '') {
            writer.uint32(26).string(message.mountPoint);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StoragePartition {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStoragePartition } as StoragePartition;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32() as any;
                    break;
                case 2:
                    message.sizeGib = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.mountPoint = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StoragePartition {
        const message = { ...baseStoragePartition } as StoragePartition;
        message.type =
            object.type !== undefined && object.type !== null
                ? storagePartitionTypeFromJSON(object.type)
                : 0;
        message.sizeGib =
            object.sizeGib !== undefined && object.sizeGib !== null ? Number(object.sizeGib) : 0;
        message.mountPoint =
            object.mountPoint !== undefined && object.mountPoint !== null
                ? String(object.mountPoint)
                : '';
        return message;
    },

    toJSON(message: StoragePartition): unknown {
        const obj: any = {};
        message.type !== undefined && (obj.type = storagePartitionTypeToJSON(message.type));
        message.sizeGib !== undefined && (obj.sizeGib = Math.round(message.sizeGib));
        message.mountPoint !== undefined && (obj.mountPoint = message.mountPoint);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StoragePartition>, I>>(object: I): StoragePartition {
        const message = { ...baseStoragePartition } as StoragePartition;
        message.type = object.type ?? 0;
        message.sizeGib = object.sizeGib ?? 0;
        message.mountPoint = object.mountPoint ?? '';
        return message;
    },
};

const baseStorage: object = {};

export const Storage = {
    encode(message: Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.partitions) {
            StoragePartition.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        if (message.disk !== undefined) {
            Disk.encode(message.disk, writer.uint32(34).fork()).ldelim();
        }
        if (message.raid !== undefined) {
            Raid.encode(message.raid, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Storage {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStorage } as Storage;
        message.partitions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.partitions.push(StoragePartition.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.disk = Disk.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.raid = Raid.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Storage {
        const message = { ...baseStorage } as Storage;
        message.partitions = (object.partitions ?? []).map((e: any) =>
            StoragePartition.fromJSON(e),
        );
        message.disk =
            object.disk !== undefined && object.disk !== null
                ? Disk.fromJSON(object.disk)
                : undefined;
        message.raid =
            object.raid !== undefined && object.raid !== null
                ? Raid.fromJSON(object.raid)
                : undefined;
        return message;
    },

    toJSON(message: Storage): unknown {
        const obj: any = {};
        if (message.partitions) {
            obj.partitions = message.partitions.map((e) =>
                e ? StoragePartition.toJSON(e) : undefined,
            );
        } else {
            obj.partitions = [];
        }
        message.disk !== undefined &&
            (obj.disk = message.disk ? Disk.toJSON(message.disk) : undefined);
        message.raid !== undefined &&
            (obj.raid = message.raid ? Raid.toJSON(message.raid) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Storage>, I>>(object: I): Storage {
        const message = { ...baseStorage } as Storage;
        message.partitions = object.partitions?.map((e) => StoragePartition.fromPartial(e)) || [];
        message.disk =
            object.disk !== undefined && object.disk !== null
                ? Disk.fromPartial(object.disk)
                : undefined;
        message.raid =
            object.raid !== undefined && object.raid !== null
                ? Raid.fromPartial(object.raid)
                : undefined;
        return message;
    },
};

const baseRaid: object = { type: 0 };

export const Raid = {
    encode(message: Raid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        for (const v of message.disks) {
            Disk.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Raid {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRaid } as Raid;
        message.disks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32() as any;
                    break;
                case 2:
                    message.disks.push(Disk.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Raid {
        const message = { ...baseRaid } as Raid;
        message.type =
            object.type !== undefined && object.type !== null ? raidTypeFromJSON(object.type) : 0;
        message.disks = (object.disks ?? []).map((e: any) => Disk.fromJSON(e));
        return message;
    },

    toJSON(message: Raid): unknown {
        const obj: any = {};
        message.type !== undefined && (obj.type = raidTypeToJSON(message.type));
        if (message.disks) {
            obj.disks = message.disks.map((e) => (e ? Disk.toJSON(e) : undefined));
        } else {
            obj.disks = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Raid>, I>>(object: I): Raid {
        const message = { ...baseRaid } as Raid;
        message.type = object.type ?? 0;
        message.disks = object.disks?.map((e) => Disk.fromPartial(e)) || [];
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
