/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { MaintenanceOperation } from '../../../../yandex/cloud/gitlab/v1/maintenance';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.gitlab.v1';

export interface Instance {
    id: string;
    folderId: string;
    createdAt?: Date;
    updatedAt?: Date;
    name: string;
    description: string;
    labels: { [key: string]: string };
    resourcePresetId: string;
    diskSize: number;
    status: Instance_Status;
    adminLogin: string;
    adminEmail: string;
    domain: string;
    subnetId: string;
    plannedOperation?: MaintenanceOperation;
    backupRetainPeriodDays: number;
    maintenanceDeleteUntagged: boolean;
    deletionProtection: boolean;
    approvalRulesId: string;
    gitlabVersion: string;
}

export enum Instance_Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    RUNNING = 2,
    UPDATING = 3,
    ERROR = 4,
    DELETING = 5,
    BACKUP_CREATING = 6,
    BACKUP_RESTORING = 7,
    STARTING = 8,
    STOPPING = 9,
    STOPPED = 10,
    BACKGROUND_MIGRATIONS = 11,
    OBJECT_STORAGE_MIGRATIONS = 12,
    SNAPSHOT_RESTORING = 13,
    UNRECOGNIZED = -1,
}

export function instance_StatusFromJSON(object: any): Instance_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Instance_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return Instance_Status.CREATING;
        case 2:
        case 'RUNNING':
            return Instance_Status.RUNNING;
        case 3:
        case 'UPDATING':
            return Instance_Status.UPDATING;
        case 4:
        case 'ERROR':
            return Instance_Status.ERROR;
        case 5:
        case 'DELETING':
            return Instance_Status.DELETING;
        case 6:
        case 'BACKUP_CREATING':
            return Instance_Status.BACKUP_CREATING;
        case 7:
        case 'BACKUP_RESTORING':
            return Instance_Status.BACKUP_RESTORING;
        case 8:
        case 'STARTING':
            return Instance_Status.STARTING;
        case 9:
        case 'STOPPING':
            return Instance_Status.STOPPING;
        case 10:
        case 'STOPPED':
            return Instance_Status.STOPPED;
        case 11:
        case 'BACKGROUND_MIGRATIONS':
            return Instance_Status.BACKGROUND_MIGRATIONS;
        case 12:
        case 'OBJECT_STORAGE_MIGRATIONS':
            return Instance_Status.OBJECT_STORAGE_MIGRATIONS;
        case 13:
        case 'SNAPSHOT_RESTORING':
            return Instance_Status.SNAPSHOT_RESTORING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Instance_Status.UNRECOGNIZED;
    }
}

export function instance_StatusToJSON(object: Instance_Status): string {
    switch (object) {
        case Instance_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Instance_Status.CREATING:
            return 'CREATING';
        case Instance_Status.RUNNING:
            return 'RUNNING';
        case Instance_Status.UPDATING:
            return 'UPDATING';
        case Instance_Status.ERROR:
            return 'ERROR';
        case Instance_Status.DELETING:
            return 'DELETING';
        case Instance_Status.BACKUP_CREATING:
            return 'BACKUP_CREATING';
        case Instance_Status.BACKUP_RESTORING:
            return 'BACKUP_RESTORING';
        case Instance_Status.STARTING:
            return 'STARTING';
        case Instance_Status.STOPPING:
            return 'STOPPING';
        case Instance_Status.STOPPED:
            return 'STOPPED';
        case Instance_Status.BACKGROUND_MIGRATIONS:
            return 'BACKGROUND_MIGRATIONS';
        case Instance_Status.OBJECT_STORAGE_MIGRATIONS:
            return 'OBJECT_STORAGE_MIGRATIONS';
        case Instance_Status.SNAPSHOT_RESTORING:
            return 'SNAPSHOT_RESTORING';
        default:
            return 'UNKNOWN';
    }
}

export interface Instance_LabelsEntry {
    key: string;
    value: string;
}

const baseInstance: object = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    resourcePresetId: '',
    diskSize: 0,
    status: 0,
    adminLogin: '',
    adminEmail: '',
    domain: '',
    subnetId: '',
    backupRetainPeriodDays: 0,
    maintenanceDeleteUntagged: false,
    deletionProtection: false,
    approvalRulesId: '',
    gitlabVersion: '',
};

export const Instance = {
    encode(message: Instance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(42).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(50).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Instance_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(58).fork(),
            ).ldelim();
        });
        if (message.resourcePresetId !== '') {
            writer.uint32(66).string(message.resourcePresetId);
        }
        if (message.diskSize !== 0) {
            writer.uint32(72).int64(message.diskSize);
        }
        if (message.status !== 0) {
            writer.uint32(80).int32(message.status);
        }
        if (message.adminLogin !== '') {
            writer.uint32(90).string(message.adminLogin);
        }
        if (message.adminEmail !== '') {
            writer.uint32(98).string(message.adminEmail);
        }
        if (message.domain !== '') {
            writer.uint32(106).string(message.domain);
        }
        if (message.subnetId !== '') {
            writer.uint32(114).string(message.subnetId);
        }
        if (message.plannedOperation !== undefined) {
            MaintenanceOperation.encode(
                message.plannedOperation,
                writer.uint32(130).fork(),
            ).ldelim();
        }
        if (message.backupRetainPeriodDays !== 0) {
            writer.uint32(136).int64(message.backupRetainPeriodDays);
        }
        if (message.maintenanceDeleteUntagged === true) {
            writer.uint32(152).bool(message.maintenanceDeleteUntagged);
        }
        if (message.deletionProtection === true) {
            writer.uint32(160).bool(message.deletionProtection);
        }
        if (message.approvalRulesId !== '') {
            writer.uint32(178).string(message.approvalRulesId);
        }
        if (message.gitlabVersion !== '') {
            writer.uint32(186).string(message.gitlabVersion);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Instance {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInstance } as Instance;
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
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    const entry7 = Instance_LabelsEntry.decode(reader, reader.uint32());
                    if (entry7.value !== undefined) {
                        message.labels[entry7.key] = entry7.value;
                    }
                    break;
                case 8:
                    message.resourcePresetId = reader.string();
                    break;
                case 9:
                    message.diskSize = longToNumber(reader.int64() as Long);
                    break;
                case 10:
                    message.status = reader.int32() as any;
                    break;
                case 11:
                    message.adminLogin = reader.string();
                    break;
                case 12:
                    message.adminEmail = reader.string();
                    break;
                case 13:
                    message.domain = reader.string();
                    break;
                case 14:
                    message.subnetId = reader.string();
                    break;
                case 16:
                    message.plannedOperation = MaintenanceOperation.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.backupRetainPeriodDays = longToNumber(reader.int64() as Long);
                    break;
                case 19:
                    message.maintenanceDeleteUntagged = reader.bool();
                    break;
                case 20:
                    message.deletionProtection = reader.bool();
                    break;
                case 22:
                    message.approvalRulesId = reader.string();
                    break;
                case 23:
                    message.gitlabVersion = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Instance {
        const message = { ...baseInstance } as Instance;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.updatedAt =
            object.updatedAt !== undefined && object.updatedAt !== null
                ? fromJsonTimestamp(object.updatedAt)
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
        message.resourcePresetId =
            object.resourcePresetId !== undefined && object.resourcePresetId !== null
                ? String(object.resourcePresetId)
                : '';
        message.diskSize =
            object.diskSize !== undefined && object.diskSize !== null ? Number(object.diskSize) : 0;
        message.status =
            object.status !== undefined && object.status !== null
                ? instance_StatusFromJSON(object.status)
                : 0;
        message.adminLogin =
            object.adminLogin !== undefined && object.adminLogin !== null
                ? String(object.adminLogin)
                : '';
        message.adminEmail =
            object.adminEmail !== undefined && object.adminEmail !== null
                ? String(object.adminEmail)
                : '';
        message.domain =
            object.domain !== undefined && object.domain !== null ? String(object.domain) : '';
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : '';
        message.plannedOperation =
            object.plannedOperation !== undefined && object.plannedOperation !== null
                ? MaintenanceOperation.fromJSON(object.plannedOperation)
                : undefined;
        message.backupRetainPeriodDays =
            object.backupRetainPeriodDays !== undefined && object.backupRetainPeriodDays !== null
                ? Number(object.backupRetainPeriodDays)
                : 0;
        message.maintenanceDeleteUntagged =
            object.maintenanceDeleteUntagged !== undefined &&
            object.maintenanceDeleteUntagged !== null
                ? Boolean(object.maintenanceDeleteUntagged)
                : false;
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.approvalRulesId =
            object.approvalRulesId !== undefined && object.approvalRulesId !== null
                ? String(object.approvalRulesId)
                : '';
        message.gitlabVersion =
            object.gitlabVersion !== undefined && object.gitlabVersion !== null
                ? String(object.gitlabVersion)
                : '';
        return message;
    },

    toJSON(message: Instance): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.resourcePresetId !== undefined && (obj.resourcePresetId = message.resourcePresetId);
        message.diskSize !== undefined && (obj.diskSize = Math.round(message.diskSize));
        message.status !== undefined && (obj.status = instance_StatusToJSON(message.status));
        message.adminLogin !== undefined && (obj.adminLogin = message.adminLogin);
        message.adminEmail !== undefined && (obj.adminEmail = message.adminEmail);
        message.domain !== undefined && (obj.domain = message.domain);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.plannedOperation !== undefined &&
            (obj.plannedOperation = message.plannedOperation
                ? MaintenanceOperation.toJSON(message.plannedOperation)
                : undefined);
        message.backupRetainPeriodDays !== undefined &&
            (obj.backupRetainPeriodDays = Math.round(message.backupRetainPeriodDays));
        message.maintenanceDeleteUntagged !== undefined &&
            (obj.maintenanceDeleteUntagged = message.maintenanceDeleteUntagged);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.approvalRulesId !== undefined && (obj.approvalRulesId = message.approvalRulesId);
        message.gitlabVersion !== undefined && (obj.gitlabVersion = message.gitlabVersion);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Instance>, I>>(object: I): Instance {
        const message = { ...baseInstance } as Instance;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
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
        message.resourcePresetId = object.resourcePresetId ?? '';
        message.diskSize = object.diskSize ?? 0;
        message.status = object.status ?? 0;
        message.adminLogin = object.adminLogin ?? '';
        message.adminEmail = object.adminEmail ?? '';
        message.domain = object.domain ?? '';
        message.subnetId = object.subnetId ?? '';
        message.plannedOperation =
            object.plannedOperation !== undefined && object.plannedOperation !== null
                ? MaintenanceOperation.fromPartial(object.plannedOperation)
                : undefined;
        message.backupRetainPeriodDays = object.backupRetainPeriodDays ?? 0;
        message.maintenanceDeleteUntagged = object.maintenanceDeleteUntagged ?? false;
        message.deletionProtection = object.deletionProtection ?? false;
        message.approvalRulesId = object.approvalRulesId ?? '';
        message.gitlabVersion = object.gitlabVersion ?? '';
        return message;
    },
};

const baseInstance_LabelsEntry: object = { key: '', value: '' };

export const Instance_LabelsEntry = {
    encode(message: Instance_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Instance_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInstance_LabelsEntry } as Instance_LabelsEntry;
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

    fromJSON(object: any): Instance_LabelsEntry {
        const message = { ...baseInstance_LabelsEntry } as Instance_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Instance_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Instance_LabelsEntry>, I>>(
        object: I,
    ): Instance_LabelsEntry {
        const message = { ...baseInstance_LabelsEntry } as Instance_LabelsEntry;
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
