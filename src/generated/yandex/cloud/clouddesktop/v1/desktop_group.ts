/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { DiskSpec } from '../../../../yandex/cloud/clouddesktop/v1/disk';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { Subject } from '../../../../yandex/cloud/access/access';

export const protobufPackage = 'yandex.cloud.clouddesktop.v1.api';

/** A desktop group resource. */
export interface DesktopGroup {
    /** Desktop group ID. */
    id: string;
    /** ID of the folder that the desktop group belongs to. */
    folderId: string;
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt?: Date;
    /** Status of the desktop group. */
    status: DesktopGroup_Status;
    /** Name of the desktop group. */
    name: string;
    /** Description of the desktop group. */
    description: string;
    /** Resource specification of the desktop group. */
    resourcesSpec?: ResourcesSpec;
    /** Network interface specification of the desktop group. */
    networkInterfaceSpec?: NetworkInterfaceSpec;
    /** Labels of the desktop group. */
    labels: { [key: string]: string };
    /** Boot disk specification of the desktop group. */
    bootDiskSpec?: DiskSpec;
    /** Data disk specification of the desktop group. */
    dataDiskSpec?: DiskSpec;
    /** Desktop group configuration. */
    groupConfig?: DesktopGroupConfiguration;
}

export enum DesktopGroup_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Desktop group is being created. */
    CREATING = 1,
    /** ACTIVE - Desktop group is ready to use. */
    ACTIVE = 2,
    /** DELETING - Desktop group is being deleted. */
    DELETING = 3,
    UNRECOGNIZED = -1,
}

export function desktopGroup_StatusFromJSON(object: any): DesktopGroup_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return DesktopGroup_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return DesktopGroup_Status.CREATING;
        case 2:
        case 'ACTIVE':
            return DesktopGroup_Status.ACTIVE;
        case 3:
        case 'DELETING':
            return DesktopGroup_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return DesktopGroup_Status.UNRECOGNIZED;
    }
}

export function desktopGroup_StatusToJSON(object: DesktopGroup_Status): string {
    switch (object) {
        case DesktopGroup_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case DesktopGroup_Status.CREATING:
            return 'CREATING';
        case DesktopGroup_Status.ACTIVE:
            return 'ACTIVE';
        case DesktopGroup_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}

export interface DesktopGroup_LabelsEntry {
    key: string;
    value: string;
}

export interface DesktopGroupConfiguration {
    /** Minimum number of ready desktops. */
    minReadyDesktops: number;
    /** Maximum number of desktops. */
    maxDesktopsAmount: number;
    /** Type of the desktop. */
    desktopType: DesktopGroupConfiguration_DesktopType;
    /** List of members of the desktop group. */
    members: Subject[];
}

export enum DesktopGroupConfiguration_DesktopType {
    DESKTOP_TYPE_UNSPECIFIED = 0,
    PERSISTENT = 1,
    NON_PERSISTENT = 2,
    UNRECOGNIZED = -1,
}

export function desktopGroupConfiguration_DesktopTypeFromJSON(
    object: any,
): DesktopGroupConfiguration_DesktopType {
    switch (object) {
        case 0:
        case 'DESKTOP_TYPE_UNSPECIFIED':
            return DesktopGroupConfiguration_DesktopType.DESKTOP_TYPE_UNSPECIFIED;
        case 1:
        case 'PERSISTENT':
            return DesktopGroupConfiguration_DesktopType.PERSISTENT;
        case 2:
        case 'NON_PERSISTENT':
            return DesktopGroupConfiguration_DesktopType.NON_PERSISTENT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return DesktopGroupConfiguration_DesktopType.UNRECOGNIZED;
    }
}

export function desktopGroupConfiguration_DesktopTypeToJSON(
    object: DesktopGroupConfiguration_DesktopType,
): string {
    switch (object) {
        case DesktopGroupConfiguration_DesktopType.DESKTOP_TYPE_UNSPECIFIED:
            return 'DESKTOP_TYPE_UNSPECIFIED';
        case DesktopGroupConfiguration_DesktopType.PERSISTENT:
            return 'PERSISTENT';
        case DesktopGroupConfiguration_DesktopType.NON_PERSISTENT:
            return 'NON_PERSISTENT';
        default:
            return 'UNKNOWN';
    }
}

export interface ResourcesSpec {
    /** RAM volume, in bytes. */
    memory: number;
    /** Number of CPU cores. */
    cores: number;
    /**
     * Baseline level of CPU performance with the ability to burst performance above that baseline level.
     * This field sets baseline performance for each core.
     */
    coreFraction: number;
}

export interface NetworkInterfaceSpec {
    /** ID of the network interface specification. */
    networkId: string;
    /** List of subnet IDs. */
    subnetIds: string[];
}

const baseDesktopGroup: object = { id: '', folderId: '', status: 0, name: '', description: '' };

export const DesktopGroup = {
    encode(message: DesktopGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.name !== '') {
            writer.uint32(90).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(98).string(message.description);
        }
        if (message.resourcesSpec !== undefined) {
            ResourcesSpec.encode(message.resourcesSpec, writer.uint32(170).fork()).ldelim();
        }
        if (message.networkInterfaceSpec !== undefined) {
            NetworkInterfaceSpec.encode(
                message.networkInterfaceSpec,
                writer.uint32(178).fork(),
            ).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            DesktopGroup_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(186).fork(),
            ).ldelim();
        });
        if (message.bootDiskSpec !== undefined) {
            DiskSpec.encode(message.bootDiskSpec, writer.uint32(194).fork()).ldelim();
        }
        if (message.dataDiskSpec !== undefined) {
            DiskSpec.encode(message.dataDiskSpec, writer.uint32(202).fork()).ldelim();
        }
        if (message.groupConfig !== undefined) {
            DesktopGroupConfiguration.encode(
                message.groupConfig,
                writer.uint32(210).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DesktopGroup {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDesktopGroup } as DesktopGroup;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.status = reader.int32() as any;
                    break;
                case 11:
                    message.name = reader.string();
                    break;
                case 12:
                    message.description = reader.string();
                    break;
                case 21:
                    message.resourcesSpec = ResourcesSpec.decode(reader, reader.uint32());
                    break;
                case 22:
                    message.networkInterfaceSpec = NetworkInterfaceSpec.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 23:
                    const entry23 = DesktopGroup_LabelsEntry.decode(reader, reader.uint32());
                    if (entry23.value !== undefined) {
                        message.labels[entry23.key] = entry23.value;
                    }
                    break;
                case 24:
                    message.bootDiskSpec = DiskSpec.decode(reader, reader.uint32());
                    break;
                case 25:
                    message.dataDiskSpec = DiskSpec.decode(reader, reader.uint32());
                    break;
                case 26:
                    message.groupConfig = DesktopGroupConfiguration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DesktopGroup {
        const message = { ...baseDesktopGroup } as DesktopGroup;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.status =
            object.status !== undefined && object.status !== null
                ? desktopGroup_StatusFromJSON(object.status)
                : 0;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.resourcesSpec =
            object.resourcesSpec !== undefined && object.resourcesSpec !== null
                ? ResourcesSpec.fromJSON(object.resourcesSpec)
                : undefined;
        message.networkInterfaceSpec =
            object.networkInterfaceSpec !== undefined && object.networkInterfaceSpec !== null
                ? NetworkInterfaceSpec.fromJSON(object.networkInterfaceSpec)
                : undefined;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.bootDiskSpec =
            object.bootDiskSpec !== undefined && object.bootDiskSpec !== null
                ? DiskSpec.fromJSON(object.bootDiskSpec)
                : undefined;
        message.dataDiskSpec =
            object.dataDiskSpec !== undefined && object.dataDiskSpec !== null
                ? DiskSpec.fromJSON(object.dataDiskSpec)
                : undefined;
        message.groupConfig =
            object.groupConfig !== undefined && object.groupConfig !== null
                ? DesktopGroupConfiguration.fromJSON(object.groupConfig)
                : undefined;
        return message;
    },

    toJSON(message: DesktopGroup): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.status !== undefined && (obj.status = desktopGroup_StatusToJSON(message.status));
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.resourcesSpec !== undefined &&
            (obj.resourcesSpec = message.resourcesSpec
                ? ResourcesSpec.toJSON(message.resourcesSpec)
                : undefined);
        message.networkInterfaceSpec !== undefined &&
            (obj.networkInterfaceSpec = message.networkInterfaceSpec
                ? NetworkInterfaceSpec.toJSON(message.networkInterfaceSpec)
                : undefined);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.bootDiskSpec !== undefined &&
            (obj.bootDiskSpec = message.bootDiskSpec
                ? DiskSpec.toJSON(message.bootDiskSpec)
                : undefined);
        message.dataDiskSpec !== undefined &&
            (obj.dataDiskSpec = message.dataDiskSpec
                ? DiskSpec.toJSON(message.dataDiskSpec)
                : undefined);
        message.groupConfig !== undefined &&
            (obj.groupConfig = message.groupConfig
                ? DesktopGroupConfiguration.toJSON(message.groupConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DesktopGroup>, I>>(object: I): DesktopGroup {
        const message = { ...baseDesktopGroup } as DesktopGroup;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.status = object.status ?? 0;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.resourcesSpec =
            object.resourcesSpec !== undefined && object.resourcesSpec !== null
                ? ResourcesSpec.fromPartial(object.resourcesSpec)
                : undefined;
        message.networkInterfaceSpec =
            object.networkInterfaceSpec !== undefined && object.networkInterfaceSpec !== null
                ? NetworkInterfaceSpec.fromPartial(object.networkInterfaceSpec)
                : undefined;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.bootDiskSpec =
            object.bootDiskSpec !== undefined && object.bootDiskSpec !== null
                ? DiskSpec.fromPartial(object.bootDiskSpec)
                : undefined;
        message.dataDiskSpec =
            object.dataDiskSpec !== undefined && object.dataDiskSpec !== null
                ? DiskSpec.fromPartial(object.dataDiskSpec)
                : undefined;
        message.groupConfig =
            object.groupConfig !== undefined && object.groupConfig !== null
                ? DesktopGroupConfiguration.fromPartial(object.groupConfig)
                : undefined;
        return message;
    },
};

const baseDesktopGroup_LabelsEntry: object = { key: '', value: '' };

export const DesktopGroup_LabelsEntry = {
    encode(
        message: DesktopGroup_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): DesktopGroup_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDesktopGroup_LabelsEntry } as DesktopGroup_LabelsEntry;
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

    fromJSON(object: any): DesktopGroup_LabelsEntry {
        const message = { ...baseDesktopGroup_LabelsEntry } as DesktopGroup_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: DesktopGroup_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DesktopGroup_LabelsEntry>, I>>(
        object: I,
    ): DesktopGroup_LabelsEntry {
        const message = { ...baseDesktopGroup_LabelsEntry } as DesktopGroup_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseDesktopGroupConfiguration: object = {
    minReadyDesktops: 0,
    maxDesktopsAmount: 0,
    desktopType: 0,
};

export const DesktopGroupConfiguration = {
    encode(
        message: DesktopGroupConfiguration,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.minReadyDesktops !== 0) {
            writer.uint32(8).int64(message.minReadyDesktops);
        }
        if (message.maxDesktopsAmount !== 0) {
            writer.uint32(16).int64(message.maxDesktopsAmount);
        }
        if (message.desktopType !== 0) {
            writer.uint32(24).int32(message.desktopType);
        }
        for (const v of message.members) {
            Subject.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DesktopGroupConfiguration {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDesktopGroupConfiguration } as DesktopGroupConfiguration;
        message.members = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minReadyDesktops = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.maxDesktopsAmount = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.desktopType = reader.int32() as any;
                    break;
                case 4:
                    message.members.push(Subject.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DesktopGroupConfiguration {
        const message = { ...baseDesktopGroupConfiguration } as DesktopGroupConfiguration;
        message.minReadyDesktops =
            object.minReadyDesktops !== undefined && object.minReadyDesktops !== null
                ? Number(object.minReadyDesktops)
                : 0;
        message.maxDesktopsAmount =
            object.maxDesktopsAmount !== undefined && object.maxDesktopsAmount !== null
                ? Number(object.maxDesktopsAmount)
                : 0;
        message.desktopType =
            object.desktopType !== undefined && object.desktopType !== null
                ? desktopGroupConfiguration_DesktopTypeFromJSON(object.desktopType)
                : 0;
        message.members = (object.members ?? []).map((e: any) => Subject.fromJSON(e));
        return message;
    },

    toJSON(message: DesktopGroupConfiguration): unknown {
        const obj: any = {};
        message.minReadyDesktops !== undefined &&
            (obj.minReadyDesktops = Math.round(message.minReadyDesktops));
        message.maxDesktopsAmount !== undefined &&
            (obj.maxDesktopsAmount = Math.round(message.maxDesktopsAmount));
        message.desktopType !== undefined &&
            (obj.desktopType = desktopGroupConfiguration_DesktopTypeToJSON(message.desktopType));
        if (message.members) {
            obj.members = message.members.map((e) => (e ? Subject.toJSON(e) : undefined));
        } else {
            obj.members = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DesktopGroupConfiguration>, I>>(
        object: I,
    ): DesktopGroupConfiguration {
        const message = { ...baseDesktopGroupConfiguration } as DesktopGroupConfiguration;
        message.minReadyDesktops = object.minReadyDesktops ?? 0;
        message.maxDesktopsAmount = object.maxDesktopsAmount ?? 0;
        message.desktopType = object.desktopType ?? 0;
        message.members = object.members?.map((e) => Subject.fromPartial(e)) || [];
        return message;
    },
};

const baseResourcesSpec: object = { memory: 0, cores: 0, coreFraction: 0 };

export const ResourcesSpec = {
    encode(message: ResourcesSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.memory !== 0) {
            writer.uint32(8).int64(message.memory);
        }
        if (message.cores !== 0) {
            writer.uint32(16).int64(message.cores);
        }
        if (message.coreFraction !== 0) {
            writer.uint32(24).int64(message.coreFraction);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResourcesSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResourcesSpec } as ResourcesSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.memory = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.cores = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.coreFraction = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourcesSpec {
        const message = { ...baseResourcesSpec } as ResourcesSpec;
        message.memory =
            object.memory !== undefined && object.memory !== null ? Number(object.memory) : 0;
        message.cores =
            object.cores !== undefined && object.cores !== null ? Number(object.cores) : 0;
        message.coreFraction =
            object.coreFraction !== undefined && object.coreFraction !== null
                ? Number(object.coreFraction)
                : 0;
        return message;
    },

    toJSON(message: ResourcesSpec): unknown {
        const obj: any = {};
        message.memory !== undefined && (obj.memory = Math.round(message.memory));
        message.cores !== undefined && (obj.cores = Math.round(message.cores));
        message.coreFraction !== undefined && (obj.coreFraction = Math.round(message.coreFraction));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResourcesSpec>, I>>(object: I): ResourcesSpec {
        const message = { ...baseResourcesSpec } as ResourcesSpec;
        message.memory = object.memory ?? 0;
        message.cores = object.cores ?? 0;
        message.coreFraction = object.coreFraction ?? 0;
        return message;
    },
};

const baseNetworkInterfaceSpec: object = { networkId: '', subnetIds: '' };

export const NetworkInterfaceSpec = {
    encode(message: NetworkInterfaceSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.networkId !== '') {
            writer.uint32(10).string(message.networkId);
        }
        for (const v of message.subnetIds) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): NetworkInterfaceSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNetworkInterfaceSpec } as NetworkInterfaceSpec;
        message.subnetIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkId = reader.string();
                    break;
                case 2:
                    message.subnetIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): NetworkInterfaceSpec {
        const message = { ...baseNetworkInterfaceSpec } as NetworkInterfaceSpec;
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : '';
        message.subnetIds = (object.subnetIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: NetworkInterfaceSpec): unknown {
        const obj: any = {};
        message.networkId !== undefined && (obj.networkId = message.networkId);
        if (message.subnetIds) {
            obj.subnetIds = message.subnetIds.map((e) => e);
        } else {
            obj.subnetIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<NetworkInterfaceSpec>, I>>(
        object: I,
    ): NetworkInterfaceSpec {
        const message = { ...baseNetworkInterfaceSpec } as NetworkInterfaceSpec;
        message.networkId = object.networkId ?? '';
        message.subnetIds = object.subnetIds?.map((e) => e) || [];
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
