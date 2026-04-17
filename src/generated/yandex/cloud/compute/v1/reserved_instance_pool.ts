/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { ResourcesSpec } from './instance_service';
import { GpuSettings, NetworkSettings } from './instance';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.compute.v1';

export interface ProductIDs {
    /**
     * License IDs that indicate which licenses are attached to resource.
     * License IDs are used to calculate additional charges for the use of the virtual machine.
     */
    productIds: string[];
}

/**
 * Specification used to determine required product_ids
 * You can specify product ids explicitly or use disk_id|image_id|snapshot_id to infer products ids from them.
 */
export interface BootDiskSpec {
    /** Disk ID. */
    diskId: string | undefined;
    /** Image ID. */
    imageId: string | undefined;
    /** Snapshot ID. */
    snapshotId: string | undefined;
    /** Product IDs. */
    productIds?: ProductIDs | undefined;
}

/** A Reserved Instance Pool resource. */
export interface ReservedInstancePool {
    /** ID of the pool. */
    id: string;
    /** ID of the availability zone where the pool resides. */
    zoneId: string;
    /** ID of the cloud that the pool belongs to. */
    cloudId: string;
    /** ID of the folder that the pool belongs to. */
    folderId: string;
    /** Name of the pool. 1-63 characters long. */
    name: string;
    /** Description of the pool. 0-256 characters long. */
    description: string;
    /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
    labels: { [key: string]: string };
    createdAt?: Date;
    /** ID of the hardware platform configuration for pool instances. */
    platformId: string;
    /** Computing resources of pool instances, such as the amount of memory and number of cores. */
    resourcesSpec?: ResourcesSpec;
    /** GPU settings. */
    gpuSettings?: GpuSettings;
    /**
     * License IDs that indicate which licenses are attached to resource.
     * License IDs are used to calculate additional charges for the use of the virtual machine.
     */
    productIds: string[];
    /** Network Settings. */
    networkSettings?: NetworkSettings;
    /** Desired size of the pool (number of slots for instances in this pool). */
    size: number;
    /** Equals to the size field except when updates occur with allow_pending=true. In those cases, committed_size equals only the number of non-pending slots. */
    committedSize: number;
    /**
     * Allows the pool to contain more linked instances than the number of available slots (size without pending or unavailable slots).
     * While running instances are still limited by available slots, stopped instances can exceed this limit.
     * Warning: When this option is enabled, attempting to start more instances than the number of available slots will result in a "Not Enough Resources" error.
     */
    allowOversubscription: boolean;
    /** Statuses of the pool slots */
    slotStats?: ReservedInstancePool_SlotStats;
    /** Stats for instances of the pool */
    instanceStats?: ReservedInstancePool_InstanceStats;
}

export interface ReservedInstancePool_SlotStats {
    /** Equals to pool size (and equals to the sum of the following fields) */
    total: number;
    /** Number of slots used by running instances */
    used: number;
    /** Number of slots available for instances (but not currently used) */
    available: number;
    /** Number of slots unavailable for some reason (for example because of underlying host failure) */
    unavailable: number;
    /** Number of slots requested for async update, but still waiting for resources and not yet available for usage */
    pending: number;
}

export interface ReservedInstancePool_InstanceStats {
    /** Total number of instances linked to the pool */
    total: number;
}

export interface ReservedInstancePool_LabelsEntry {
    key: string;
    value: string;
}

const baseProductIDs: object = { productIds: '' };

export const ProductIDs: {
    encode(message: ProductIDs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProductIDs;
    fromJSON(object: any): ProductIDs;
    toJSON(message: ProductIDs): unknown;
    fromPartial<I extends Exact<DeepPartial<ProductIDs>, I>>(object: I): ProductIDs;
} = {
    encode(message: ProductIDs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.productIds) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ProductIDs {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseProductIDs } as ProductIDs;
        message.productIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.productIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ProductIDs {
        const message = { ...baseProductIDs } as ProductIDs;
        message.productIds = (object.productIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: ProductIDs): unknown {
        const obj: any = {};
        if (message.productIds) {
            obj.productIds = message.productIds.map((e) => e);
        } else {
            obj.productIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ProductIDs>, I>>(object: I): ProductIDs {
        const message = { ...baseProductIDs } as ProductIDs;
        message.productIds = object.productIds?.map((e) => e) || [];
        return message;
    },
};

const baseBootDiskSpec: object = {};

export const BootDiskSpec: {
    encode(message: BootDiskSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BootDiskSpec;
    fromJSON(object: any): BootDiskSpec;
    toJSON(message: BootDiskSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<BootDiskSpec>, I>>(object: I): BootDiskSpec;
} = {
    encode(message: BootDiskSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.diskId !== undefined) {
            writer.uint32(10).string(message.diskId);
        }
        if (message.imageId !== undefined) {
            writer.uint32(18).string(message.imageId);
        }
        if (message.snapshotId !== undefined) {
            writer.uint32(26).string(message.snapshotId);
        }
        if (message.productIds !== undefined) {
            ProductIDs.encode(message.productIds, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BootDiskSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBootDiskSpec } as BootDiskSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskId = reader.string();
                    break;
                case 2:
                    message.imageId = reader.string();
                    break;
                case 3:
                    message.snapshotId = reader.string();
                    break;
                case 4:
                    message.productIds = ProductIDs.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BootDiskSpec {
        const message = { ...baseBootDiskSpec } as BootDiskSpec;
        message.diskId =
            object.diskId !== undefined && object.diskId !== null
                ? String(object.diskId)
                : undefined;
        message.imageId =
            object.imageId !== undefined && object.imageId !== null
                ? String(object.imageId)
                : undefined;
        message.snapshotId =
            object.snapshotId !== undefined && object.snapshotId !== null
                ? String(object.snapshotId)
                : undefined;
        message.productIds =
            object.productIds !== undefined && object.productIds !== null
                ? ProductIDs.fromJSON(object.productIds)
                : undefined;
        return message;
    },

    toJSON(message: BootDiskSpec): unknown {
        const obj: any = {};
        message.diskId !== undefined && (obj.diskId = message.diskId);
        message.imageId !== undefined && (obj.imageId = message.imageId);
        message.snapshotId !== undefined && (obj.snapshotId = message.snapshotId);
        message.productIds !== undefined &&
            (obj.productIds = message.productIds
                ? ProductIDs.toJSON(message.productIds)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BootDiskSpec>, I>>(object: I): BootDiskSpec {
        const message = { ...baseBootDiskSpec } as BootDiskSpec;
        message.diskId = object.diskId ?? undefined;
        message.imageId = object.imageId ?? undefined;
        message.snapshotId = object.snapshotId ?? undefined;
        message.productIds =
            object.productIds !== undefined && object.productIds !== null
                ? ProductIDs.fromPartial(object.productIds)
                : undefined;
        return message;
    },
};

const baseReservedInstancePool: object = {
    id: '',
    zoneId: '',
    cloudId: '',
    folderId: '',
    name: '',
    description: '',
    platformId: '',
    productIds: '',
    size: 0,
    committedSize: 0,
    allowOversubscription: false,
};

export const ReservedInstancePool: {
    encode(message: ReservedInstancePool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReservedInstancePool;
    fromJSON(object: any): ReservedInstancePool;
    toJSON(message: ReservedInstancePool): unknown;
    fromPartial<I extends Exact<DeepPartial<ReservedInstancePool>, I>>(object: I): ReservedInstancePool;
} = {
    encode(message: ReservedInstancePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.zoneId !== '') {
            writer.uint32(18).string(message.zoneId);
        }
        if (message.cloudId !== '') {
            writer.uint32(26).string(message.cloudId);
        }
        if (message.folderId !== '') {
            writer.uint32(34).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(42).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(50).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            ReservedInstancePool_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(58).fork(),
            ).ldelim();
        });
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(66).fork()).ldelim();
        }
        if (message.platformId !== '') {
            writer.uint32(74).string(message.platformId);
        }
        if (message.resourcesSpec !== undefined) {
            ResourcesSpec.encode(message.resourcesSpec, writer.uint32(82).fork()).ldelim();
        }
        if (message.gpuSettings !== undefined) {
            GpuSettings.encode(message.gpuSettings, writer.uint32(90).fork()).ldelim();
        }
        for (const v of message.productIds) {
            writer.uint32(98).string(v!);
        }
        if (message.networkSettings !== undefined) {
            NetworkSettings.encode(message.networkSettings, writer.uint32(106).fork()).ldelim();
        }
        if (message.size !== 0) {
            writer.uint32(112).int64(message.size);
        }
        if (message.committedSize !== 0) {
            writer.uint32(120).int64(message.committedSize);
        }
        if (message.allowOversubscription === true) {
            writer.uint32(128).bool(message.allowOversubscription);
        }
        if (message.slotStats !== undefined) {
            ReservedInstancePool_SlotStats.encode(
                message.slotStats,
                writer.uint32(138).fork(),
            ).ldelim();
        }
        if (message.instanceStats !== undefined) {
            ReservedInstancePool_InstanceStats.encode(
                message.instanceStats,
                writer.uint32(146).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ReservedInstancePool {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReservedInstancePool } as ReservedInstancePool;
        message.labels = {};
        message.productIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.zoneId = reader.string();
                    break;
                case 3:
                    message.cloudId = reader.string();
                    break;
                case 4:
                    message.folderId = reader.string();
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    const entry7 = ReservedInstancePool_LabelsEntry.decode(reader, reader.uint32());
                    if (entry7.value !== undefined) {
                        message.labels[entry7.key] = entry7.value;
                    }
                    break;
                case 8:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.platformId = reader.string();
                    break;
                case 10:
                    message.resourcesSpec = ResourcesSpec.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.gpuSettings = GpuSettings.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.productIds.push(reader.string());
                    break;
                case 13:
                    message.networkSettings = NetworkSettings.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.size = longToNumber(reader.int64() as Long);
                    break;
                case 15:
                    message.committedSize = longToNumber(reader.int64() as Long);
                    break;
                case 16:
                    message.allowOversubscription = reader.bool();
                    break;
                case 17:
                    message.slotStats = ReservedInstancePool_SlotStats.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 18:
                    message.instanceStats = ReservedInstancePool_InstanceStats.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ReservedInstancePool {
        const message = { ...baseReservedInstancePool } as ReservedInstancePool;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null ? String(object.zoneId) : '';
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null ? String(object.cloudId) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.platformId =
            object.platformId !== undefined && object.platformId !== null
                ? String(object.platformId)
                : '';
        message.resourcesSpec =
            object.resourcesSpec !== undefined && object.resourcesSpec !== null
                ? ResourcesSpec.fromJSON(object.resourcesSpec)
                : undefined;
        message.gpuSettings =
            object.gpuSettings !== undefined && object.gpuSettings !== null
                ? GpuSettings.fromJSON(object.gpuSettings)
                : undefined;
        message.productIds = (object.productIds ?? []).map((e: any) => String(e));
        message.networkSettings =
            object.networkSettings !== undefined && object.networkSettings !== null
                ? NetworkSettings.fromJSON(object.networkSettings)
                : undefined;
        message.size = object.size !== undefined && object.size !== null ? Number(object.size) : 0;
        message.committedSize =
            object.committedSize !== undefined && object.committedSize !== null
                ? Number(object.committedSize)
                : 0;
        message.allowOversubscription =
            object.allowOversubscription !== undefined && object.allowOversubscription !== null
                ? Boolean(object.allowOversubscription)
                : false;
        message.slotStats =
            object.slotStats !== undefined && object.slotStats !== null
                ? ReservedInstancePool_SlotStats.fromJSON(object.slotStats)
                : undefined;
        message.instanceStats =
            object.instanceStats !== undefined && object.instanceStats !== null
                ? ReservedInstancePool_InstanceStats.fromJSON(object.instanceStats)
                : undefined;
        return message;
    },

    toJSON(message: ReservedInstancePool): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.platformId !== undefined && (obj.platformId = message.platformId);
        message.resourcesSpec !== undefined &&
            (obj.resourcesSpec = message.resourcesSpec
                ? ResourcesSpec.toJSON(message.resourcesSpec)
                : undefined);
        message.gpuSettings !== undefined &&
            (obj.gpuSettings = message.gpuSettings
                ? GpuSettings.toJSON(message.gpuSettings)
                : undefined);
        if (message.productIds) {
            obj.productIds = message.productIds.map((e) => e);
        } else {
            obj.productIds = [];
        }
        message.networkSettings !== undefined &&
            (obj.networkSettings = message.networkSettings
                ? NetworkSettings.toJSON(message.networkSettings)
                : undefined);
        message.size !== undefined && (obj.size = Math.round(message.size));
        message.committedSize !== undefined &&
            (obj.committedSize = Math.round(message.committedSize));
        message.allowOversubscription !== undefined &&
            (obj.allowOversubscription = message.allowOversubscription);
        message.slotStats !== undefined &&
            (obj.slotStats = message.slotStats
                ? ReservedInstancePool_SlotStats.toJSON(message.slotStats)
                : undefined);
        message.instanceStats !== undefined &&
            (obj.instanceStats = message.instanceStats
                ? ReservedInstancePool_InstanceStats.toJSON(message.instanceStats)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ReservedInstancePool>, I>>(
        object: I,
    ): ReservedInstancePool {
        const message = { ...baseReservedInstancePool } as ReservedInstancePool;
        message.id = object.id ?? '';
        message.zoneId = object.zoneId ?? '';
        message.cloudId = object.cloudId ?? '';
        message.folderId = object.folderId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.createdAt = object.createdAt ?? undefined;
        message.platformId = object.platformId ?? '';
        message.resourcesSpec =
            object.resourcesSpec !== undefined && object.resourcesSpec !== null
                ? ResourcesSpec.fromPartial(object.resourcesSpec)
                : undefined;
        message.gpuSettings =
            object.gpuSettings !== undefined && object.gpuSettings !== null
                ? GpuSettings.fromPartial(object.gpuSettings)
                : undefined;
        message.productIds = object.productIds?.map((e) => e) || [];
        message.networkSettings =
            object.networkSettings !== undefined && object.networkSettings !== null
                ? NetworkSettings.fromPartial(object.networkSettings)
                : undefined;
        message.size = object.size ?? 0;
        message.committedSize = object.committedSize ?? 0;
        message.allowOversubscription = object.allowOversubscription ?? false;
        message.slotStats =
            object.slotStats !== undefined && object.slotStats !== null
                ? ReservedInstancePool_SlotStats.fromPartial(object.slotStats)
                : undefined;
        message.instanceStats =
            object.instanceStats !== undefined && object.instanceStats !== null
                ? ReservedInstancePool_InstanceStats.fromPartial(object.instanceStats)
                : undefined;
        return message;
    },
};

const baseReservedInstancePool_SlotStats: object = {
    total: 0,
    used: 0,
    available: 0,
    unavailable: 0,
    pending: 0,
};

export const ReservedInstancePool_SlotStats: {
    encode(message: ReservedInstancePool_SlotStats, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReservedInstancePool_SlotStats;
    fromJSON(object: any): ReservedInstancePool_SlotStats;
    toJSON(message: ReservedInstancePool_SlotStats): unknown;
    fromPartial<I extends Exact<DeepPartial<ReservedInstancePool_SlotStats>, I>>(object: I): ReservedInstancePool_SlotStats;
} = {
    encode(
        message: ReservedInstancePool_SlotStats,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.total !== 0) {
            writer.uint32(8).int64(message.total);
        }
        if (message.used !== 0) {
            writer.uint32(16).int64(message.used);
        }
        if (message.available !== 0) {
            writer.uint32(24).int64(message.available);
        }
        if (message.unavailable !== 0) {
            writer.uint32(32).int64(message.unavailable);
        }
        if (message.pending !== 0) {
            writer.uint32(40).int64(message.pending);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ReservedInstancePool_SlotStats {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReservedInstancePool_SlotStats } as ReservedInstancePool_SlotStats;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.used = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.available = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.unavailable = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.pending = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ReservedInstancePool_SlotStats {
        const message = { ...baseReservedInstancePool_SlotStats } as ReservedInstancePool_SlotStats;
        message.total =
            object.total !== undefined && object.total !== null ? Number(object.total) : 0;
        message.used = object.used !== undefined && object.used !== null ? Number(object.used) : 0;
        message.available =
            object.available !== undefined && object.available !== null
                ? Number(object.available)
                : 0;
        message.unavailable =
            object.unavailable !== undefined && object.unavailable !== null
                ? Number(object.unavailable)
                : 0;
        message.pending =
            object.pending !== undefined && object.pending !== null ? Number(object.pending) : 0;
        return message;
    },

    toJSON(message: ReservedInstancePool_SlotStats): unknown {
        const obj: any = {};
        message.total !== undefined && (obj.total = Math.round(message.total));
        message.used !== undefined && (obj.used = Math.round(message.used));
        message.available !== undefined && (obj.available = Math.round(message.available));
        message.unavailable !== undefined && (obj.unavailable = Math.round(message.unavailable));
        message.pending !== undefined && (obj.pending = Math.round(message.pending));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ReservedInstancePool_SlotStats>, I>>(
        object: I,
    ): ReservedInstancePool_SlotStats {
        const message = { ...baseReservedInstancePool_SlotStats } as ReservedInstancePool_SlotStats;
        message.total = object.total ?? 0;
        message.used = object.used ?? 0;
        message.available = object.available ?? 0;
        message.unavailable = object.unavailable ?? 0;
        message.pending = object.pending ?? 0;
        return message;
    },
};

const baseReservedInstancePool_InstanceStats: object = { total: 0 };

export const ReservedInstancePool_InstanceStats: {
    encode(message: ReservedInstancePool_InstanceStats, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReservedInstancePool_InstanceStats;
    fromJSON(object: any): ReservedInstancePool_InstanceStats;
    toJSON(message: ReservedInstancePool_InstanceStats): unknown;
    fromPartial<I extends Exact<DeepPartial<ReservedInstancePool_InstanceStats>, I>>(object: I): ReservedInstancePool_InstanceStats;
} = {
    encode(
        message: ReservedInstancePool_InstanceStats,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.total !== 0) {
            writer.uint32(8).int64(message.total);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ReservedInstancePool_InstanceStats {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseReservedInstancePool_InstanceStats,
        } as ReservedInstancePool_InstanceStats;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ReservedInstancePool_InstanceStats {
        const message = {
            ...baseReservedInstancePool_InstanceStats,
        } as ReservedInstancePool_InstanceStats;
        message.total =
            object.total !== undefined && object.total !== null ? Number(object.total) : 0;
        return message;
    },

    toJSON(message: ReservedInstancePool_InstanceStats): unknown {
        const obj: any = {};
        message.total !== undefined && (obj.total = Math.round(message.total));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ReservedInstancePool_InstanceStats>, I>>(
        object: I,
    ): ReservedInstancePool_InstanceStats {
        const message = {
            ...baseReservedInstancePool_InstanceStats,
        } as ReservedInstancePool_InstanceStats;
        message.total = object.total ?? 0;
        return message;
    },
};

const baseReservedInstancePool_LabelsEntry: object = { key: '', value: '' };

export const ReservedInstancePool_LabelsEntry: {
    encode(message: ReservedInstancePool_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReservedInstancePool_LabelsEntry;
    fromJSON(object: any): ReservedInstancePool_LabelsEntry;
    toJSON(message: ReservedInstancePool_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<ReservedInstancePool_LabelsEntry>, I>>(object: I): ReservedInstancePool_LabelsEntry;
} = {
    encode(
        message: ReservedInstancePool_LabelsEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ReservedInstancePool_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseReservedInstancePool_LabelsEntry,
        } as ReservedInstancePool_LabelsEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ReservedInstancePool_LabelsEntry {
        const message = {
            ...baseReservedInstancePool_LabelsEntry,
        } as ReservedInstancePool_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: ReservedInstancePool_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ReservedInstancePool_LabelsEntry>, I>>(
        object: I,
    ): ReservedInstancePool_LabelsEntry {
        const message = {
            ...baseReservedInstancePool_LabelsEntry,
        } as ReservedInstancePool_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
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

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

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
