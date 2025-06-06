/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
    MaintenancePolicy,
    maintenancePolicyFromJSON,
    maintenancePolicyToJSON,
} from '../../../../yandex/cloud/compute/v1/maintenance';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.compute.v1';

/** Represents group of dedicated hosts */
export interface HostGroup {
    /** ID of the group. */
    id: string;
    /** ID of the folder that the group belongs to. */
    folderId: string;
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt?: Date;
    /** Name of the group. The name is unique within the folder. */
    name: string;
    /** Description of the group. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** Availability zone where all dedicated hosts are allocated. */
    zoneId: string;
    /** Status of the group. */
    status: HostGroup_Status;
    /** ID of host type. Resources provided by each host of the group. */
    typeId: string;
    /** Behaviour on maintenance events. */
    maintenancePolicy: MaintenancePolicy;
    /** Scale policy. Only fixed number of hosts are supported at this moment. */
    scalePolicy?: ScalePolicy;
}

export enum HostGroup_Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    READY = 2,
    UPDATING = 3,
    DELETING = 4,
    UNRECOGNIZED = -1,
}

export function hostGroup_StatusFromJSON(object: any): HostGroup_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return HostGroup_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return HostGroup_Status.CREATING;
        case 2:
        case 'READY':
            return HostGroup_Status.READY;
        case 3:
        case 'UPDATING':
            return HostGroup_Status.UPDATING;
        case 4:
        case 'DELETING':
            return HostGroup_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return HostGroup_Status.UNRECOGNIZED;
    }
}

export function hostGroup_StatusToJSON(object: HostGroup_Status): string {
    switch (object) {
        case HostGroup_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case HostGroup_Status.CREATING:
            return 'CREATING';
        case HostGroup_Status.READY:
            return 'READY';
        case HostGroup_Status.UPDATING:
            return 'UPDATING';
        case HostGroup_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}

export interface HostGroup_LabelsEntry {
    key: string;
    value: string;
}

/** Represents a dedicated host */
export interface Host {
    /** ID of the host. */
    id: string;
    /** Current status of the host. New instances are unable to start on host in DOWN status. */
    status: Host_Status;
    /** ID of the physical server that the host belongs to. */
    serverId: string;
    /** Set temporarily if maintenance is planned for this host, and a new host was provided as a replacement. */
    replacement?: Replacement;
}

export enum Host_Status {
    STATUS_UNSPECIFIED = 0,
    UP = 1,
    DOWN = 2,
    UNRECOGNIZED = -1,
}

export function host_StatusFromJSON(object: any): Host_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Host_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'UP':
            return Host_Status.UP;
        case 2:
        case 'DOWN':
            return Host_Status.DOWN;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Host_Status.UNRECOGNIZED;
    }
}

export function host_StatusToJSON(object: Host_Status): string {
    switch (object) {
        case Host_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Host_Status.UP:
            return 'UP';
        case Host_Status.DOWN:
            return 'DOWN';
        default:
            return 'UNKNOWN';
    }
}

export interface ScalePolicy {
    fixedScale?: ScalePolicy_FixedScale | undefined;
}

export interface ScalePolicy_FixedScale {
    size: number;
}

export interface Replacement {
    /** ID of the host which replaces this one. */
    hostId: string;
    /** The date and time when this host will be automatically freed of instances. */
    deadlineAt?: Date;
}

const baseHostGroup: object = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    zoneId: '',
    status: 0,
    typeId: '',
    maintenancePolicy: 0,
};

export const HostGroup = {
    encode(message: HostGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            HostGroup_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        if (message.zoneId !== '') {
            writer.uint32(58).string(message.zoneId);
        }
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        if (message.typeId !== '') {
            writer.uint32(74).string(message.typeId);
        }
        if (message.maintenancePolicy !== 0) {
            writer.uint32(80).int32(message.maintenancePolicy);
        }
        if (message.scalePolicy !== undefined) {
            ScalePolicy.encode(message.scalePolicy, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HostGroup {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHostGroup } as HostGroup;
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
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = HostGroup_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.zoneId = reader.string();
                    break;
                case 8:
                    message.status = reader.int32() as any;
                    break;
                case 9:
                    message.typeId = reader.string();
                    break;
                case 10:
                    message.maintenancePolicy = reader.int32() as any;
                    break;
                case 11:
                    message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HostGroup {
        const message = { ...baseHostGroup } as HostGroup;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
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
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null ? String(object.zoneId) : '';
        message.status =
            object.status !== undefined && object.status !== null
                ? hostGroup_StatusFromJSON(object.status)
                : 0;
        message.typeId =
            object.typeId !== undefined && object.typeId !== null ? String(object.typeId) : '';
        message.maintenancePolicy =
            object.maintenancePolicy !== undefined && object.maintenancePolicy !== null
                ? maintenancePolicyFromJSON(object.maintenancePolicy)
                : 0;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? ScalePolicy.fromJSON(object.scalePolicy)
                : undefined;
        return message;
    },

    toJSON(message: HostGroup): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.status !== undefined && (obj.status = hostGroup_StatusToJSON(message.status));
        message.typeId !== undefined && (obj.typeId = message.typeId);
        message.maintenancePolicy !== undefined &&
            (obj.maintenancePolicy = maintenancePolicyToJSON(message.maintenancePolicy));
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HostGroup>, I>>(object: I): HostGroup {
        const message = { ...baseHostGroup } as HostGroup;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.createdAt = object.createdAt ?? undefined;
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
        message.zoneId = object.zoneId ?? '';
        message.status = object.status ?? 0;
        message.typeId = object.typeId ?? '';
        message.maintenancePolicy = object.maintenancePolicy ?? 0;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? ScalePolicy.fromPartial(object.scalePolicy)
                : undefined;
        return message;
    },
};

const baseHostGroup_LabelsEntry: object = { key: '', value: '' };

export const HostGroup_LabelsEntry = {
    encode(message: HostGroup_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HostGroup_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHostGroup_LabelsEntry } as HostGroup_LabelsEntry;
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

    fromJSON(object: any): HostGroup_LabelsEntry {
        const message = { ...baseHostGroup_LabelsEntry } as HostGroup_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: HostGroup_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HostGroup_LabelsEntry>, I>>(
        object: I,
    ): HostGroup_LabelsEntry {
        const message = { ...baseHostGroup_LabelsEntry } as HostGroup_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseHost: object = { id: '', status: 0, serverId: '' };

export const Host = {
    encode(message: Host, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        if (message.serverId !== '') {
            writer.uint32(26).string(message.serverId);
        }
        if (message.replacement !== undefined) {
            Replacement.encode(message.replacement, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Host {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHost } as Host;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.status = reader.int32() as any;
                    break;
                case 3:
                    message.serverId = reader.string();
                    break;
                case 4:
                    message.replacement = Replacement.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Host {
        const message = { ...baseHost } as Host;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.status =
            object.status !== undefined && object.status !== null
                ? host_StatusFromJSON(object.status)
                : 0;
        message.serverId =
            object.serverId !== undefined && object.serverId !== null
                ? String(object.serverId)
                : '';
        message.replacement =
            object.replacement !== undefined && object.replacement !== null
                ? Replacement.fromJSON(object.replacement)
                : undefined;
        return message;
    },

    toJSON(message: Host): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.status !== undefined && (obj.status = host_StatusToJSON(message.status));
        message.serverId !== undefined && (obj.serverId = message.serverId);
        message.replacement !== undefined &&
            (obj.replacement = message.replacement
                ? Replacement.toJSON(message.replacement)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Host>, I>>(object: I): Host {
        const message = { ...baseHost } as Host;
        message.id = object.id ?? '';
        message.status = object.status ?? 0;
        message.serverId = object.serverId ?? '';
        message.replacement =
            object.replacement !== undefined && object.replacement !== null
                ? Replacement.fromPartial(object.replacement)
                : undefined;
        return message;
    },
};

const baseScalePolicy: object = {};

export const ScalePolicy = {
    encode(message: ScalePolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.fixedScale !== undefined) {
            ScalePolicy_FixedScale.encode(message.fixedScale, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ScalePolicy {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScalePolicy } as ScalePolicy;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fixedScale = ScalePolicy_FixedScale.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ScalePolicy {
        const message = { ...baseScalePolicy } as ScalePolicy;
        message.fixedScale =
            object.fixedScale !== undefined && object.fixedScale !== null
                ? ScalePolicy_FixedScale.fromJSON(object.fixedScale)
                : undefined;
        return message;
    },

    toJSON(message: ScalePolicy): unknown {
        const obj: any = {};
        message.fixedScale !== undefined &&
            (obj.fixedScale = message.fixedScale
                ? ScalePolicy_FixedScale.toJSON(message.fixedScale)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ScalePolicy>, I>>(object: I): ScalePolicy {
        const message = { ...baseScalePolicy } as ScalePolicy;
        message.fixedScale =
            object.fixedScale !== undefined && object.fixedScale !== null
                ? ScalePolicy_FixedScale.fromPartial(object.fixedScale)
                : undefined;
        return message;
    },
};

const baseScalePolicy_FixedScale: object = { size: 0 };

export const ScalePolicy_FixedScale = {
    encode(message: ScalePolicy_FixedScale, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.size !== 0) {
            writer.uint32(8).int64(message.size);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ScalePolicy_FixedScale {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScalePolicy_FixedScale } as ScalePolicy_FixedScale;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.size = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ScalePolicy_FixedScale {
        const message = { ...baseScalePolicy_FixedScale } as ScalePolicy_FixedScale;
        message.size = object.size !== undefined && object.size !== null ? Number(object.size) : 0;
        return message;
    },

    toJSON(message: ScalePolicy_FixedScale): unknown {
        const obj: any = {};
        message.size !== undefined && (obj.size = Math.round(message.size));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ScalePolicy_FixedScale>, I>>(
        object: I,
    ): ScalePolicy_FixedScale {
        const message = { ...baseScalePolicy_FixedScale } as ScalePolicy_FixedScale;
        message.size = object.size ?? 0;
        return message;
    },
};

const baseReplacement: object = { hostId: '' };

export const Replacement = {
    encode(message: Replacement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.hostId !== '') {
            writer.uint32(10).string(message.hostId);
        }
        if (message.deadlineAt !== undefined) {
            Timestamp.encode(toTimestamp(message.deadlineAt), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Replacement {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReplacement } as Replacement;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostId = reader.string();
                    break;
                case 2:
                    message.deadlineAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Replacement {
        const message = { ...baseReplacement } as Replacement;
        message.hostId =
            object.hostId !== undefined && object.hostId !== null ? String(object.hostId) : '';
        message.deadlineAt =
            object.deadlineAt !== undefined && object.deadlineAt !== null
                ? fromJsonTimestamp(object.deadlineAt)
                : undefined;
        return message;
    },

    toJSON(message: Replacement): unknown {
        const obj: any = {};
        message.hostId !== undefined && (obj.hostId = message.hostId);
        message.deadlineAt !== undefined && (obj.deadlineAt = message.deadlineAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Replacement>, I>>(object: I): Replacement {
        const message = { ...baseReplacement } as Replacement;
        message.hostId = object.hostId ?? '';
        message.deadlineAt = object.deadlineAt ?? undefined;
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
