/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { Int64Value } from '../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.datasphere.v1';

/** A Project resource. */
export interface Project {
    $type: 'yandex.cloud.datasphere.v1.Project';
    /** ID of the project. */
    id: string;
    /** ID of the folder that the project belongs to. */
    folderId: string;
    createdAt?: Date;
    /** Name of the project. 1-63 characters long. */
    name: string;
    /** Description of the project. 0-256 characters long. */
    description: string;
    /** Settings of the project. */
    settings?: Project_Settings;
    /** Limits of the project. */
    limits?: Project_Limits;
}

export interface Project_Settings {
    $type: 'yandex.cloud.datasphere.v1.Project.Settings';
    /** ID of the service account, on whose behalf all operations with clusters will be performed. */
    serviceAccountId: string;
    /**
     * ID of the subnet where the DataProc cluster resides.
     * Currently only subnets created in the availability zone ru-central1-a are supported.
     */
    subnetId: string;
    /** ID of the DataProc cluster. */
    dataProcClusterId: string;
    /** Network interfaces security groups. */
    securityGroupIds: string[];
}

export interface Project_Limits {
    $type: 'yandex.cloud.datasphere.v1.Project.Limits';
    /** The number of units that can be spent per hour. */
    maxUnitsPerHour?: number;
    /** The number of units that can be spent on the one execution. */
    maxUnitsPerExecution?: number;
}

const baseProject: object = {
    $type: 'yandex.cloud.datasphere.v1.Project',
    id: '',
    folderId: '',
    name: '',
    description: '',
};

export const Project = {
    $type: 'yandex.cloud.datasphere.v1.Project' as const,

    encode(message: Project, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
        if (message.settings !== undefined) {
            Project_Settings.encode(message.settings, writer.uint32(50).fork()).ldelim();
        }
        if (message.limits !== undefined) {
            Project_Limits.encode(message.limits, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Project {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseProject } as Project;
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
                    message.settings = Project_Settings.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.limits = Project_Limits.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Project {
        const message = { ...baseProject } as Project;
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
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? Project_Settings.fromJSON(object.settings)
                : undefined;
        message.limits =
            object.limits !== undefined && object.limits !== null
                ? Project_Limits.fromJSON(object.limits)
                : undefined;
        return message;
    },

    toJSON(message: Project): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? Project_Settings.toJSON(message.settings)
                : undefined);
        message.limits !== undefined &&
            (obj.limits = message.limits ? Project_Limits.toJSON(message.limits) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Project>, I>>(object: I): Project {
        const message = { ...baseProject } as Project;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? Project_Settings.fromPartial(object.settings)
                : undefined;
        message.limits =
            object.limits !== undefined && object.limits !== null
                ? Project_Limits.fromPartial(object.limits)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Project.$type, Project);

const baseProject_Settings: object = {
    $type: 'yandex.cloud.datasphere.v1.Project.Settings',
    serviceAccountId: '',
    subnetId: '',
    dataProcClusterId: '',
    securityGroupIds: '',
};

export const Project_Settings = {
    $type: 'yandex.cloud.datasphere.v1.Project.Settings' as const,

    encode(message: Project_Settings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.serviceAccountId !== '') {
            writer.uint32(10).string(message.serviceAccountId);
        }
        if (message.subnetId !== '') {
            writer.uint32(18).string(message.subnetId);
        }
        if (message.dataProcClusterId !== '') {
            writer.uint32(26).string(message.dataProcClusterId);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(42).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Project_Settings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseProject_Settings } as Project_Settings;
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
                    break;
                case 2:
                    message.subnetId = reader.string();
                    break;
                case 3:
                    message.dataProcClusterId = reader.string();
                    break;
                case 5:
                    message.securityGroupIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Project_Settings {
        const message = { ...baseProject_Settings } as Project_Settings;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : '';
        message.dataProcClusterId =
            object.dataProcClusterId !== undefined && object.dataProcClusterId !== null
                ? String(object.dataProcClusterId)
                : '';
        message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: Project_Settings): unknown {
        const obj: any = {};
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.dataProcClusterId !== undefined &&
            (obj.dataProcClusterId = message.dataProcClusterId);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        } else {
            obj.securityGroupIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Project_Settings>, I>>(object: I): Project_Settings {
        const message = { ...baseProject_Settings } as Project_Settings;
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.subnetId = object.subnetId ?? '';
        message.dataProcClusterId = object.dataProcClusterId ?? '';
        message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
        return message;
    },
};

messageTypeRegistry.set(Project_Settings.$type, Project_Settings);

const baseProject_Limits: object = { $type: 'yandex.cloud.datasphere.v1.Project.Limits' };

export const Project_Limits = {
    $type: 'yandex.cloud.datasphere.v1.Project.Limits' as const,

    encode(message: Project_Limits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.maxUnitsPerHour !== undefined) {
            Int64Value.encode(
                { $type: 'google.protobuf.Int64Value', value: message.maxUnitsPerHour! },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.maxUnitsPerExecution !== undefined) {
            Int64Value.encode(
                { $type: 'google.protobuf.Int64Value', value: message.maxUnitsPerExecution! },
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Project_Limits {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseProject_Limits } as Project_Limits;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.maxUnitsPerHour = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.maxUnitsPerExecution = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Project_Limits {
        const message = { ...baseProject_Limits } as Project_Limits;
        message.maxUnitsPerHour =
            object.maxUnitsPerHour !== undefined && object.maxUnitsPerHour !== null
                ? Number(object.maxUnitsPerHour)
                : undefined;
        message.maxUnitsPerExecution =
            object.maxUnitsPerExecution !== undefined && object.maxUnitsPerExecution !== null
                ? Number(object.maxUnitsPerExecution)
                : undefined;
        return message;
    },

    toJSON(message: Project_Limits): unknown {
        const obj: any = {};
        message.maxUnitsPerHour !== undefined && (obj.maxUnitsPerHour = message.maxUnitsPerHour);
        message.maxUnitsPerExecution !== undefined &&
            (obj.maxUnitsPerExecution = message.maxUnitsPerExecution);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Project_Limits>, I>>(object: I): Project_Limits {
        const message = { ...baseProject_Limits } as Project_Limits;
        message.maxUnitsPerHour = object.maxUnitsPerHour ?? undefined;
        message.maxUnitsPerExecution = object.maxUnitsPerExecution ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(Project_Limits.$type, Project_Limits);

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

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
