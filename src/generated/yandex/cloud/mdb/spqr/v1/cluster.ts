/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
    MaintenanceWindow,
    MaintenanceOperation,
} from '../../../../../yandex/cloud/mdb/spqr/v1/maintenance';
import { SPQRConfig } from '../../../../../yandex/cloud/mdb/spqr/v1/config';
import { TimeOfDay } from '../../../../../google/type/timeofday';
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import { Int64Value, BoolValue } from '../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.mdb.spqr.v1';

/** A managed SPQR cluster. For more information, see the [documentation](/docs/managed-spqr/concepts). */
export interface Cluster {
    /**
     * ID of the SPQR cluster.
     * This ID is assigned by MDB at creation time.
     */
    id: string;
    /** ID of the folder that the SPQR cluster belongs to. */
    folderId: string;
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt?: Date;
    /**
     * Name of the SPQR cluster.
     * The name is unique within the folder. 1-63 characters long.
     */
    name: string;
    /** Description of the SPQR cluster. 0-256 characters long. */
    description: string;
    /** Custom labels for the SPQR cluster as `` key:value `` pairs. Maximum 64 per resource. */
    labels: { [key: string]: string };
    /** Deployment environment of the SPQR cluster. */
    environment: Cluster_Environment;
    /** Description of monitoring systems relevant to the SPQR cluster. */
    monitoring: Monitoring[];
    /** Configuration of the SPQR cluster. */
    config?: ClusterConfig;
    /** ID of the network that the cluster belongs to. */
    networkId: string;
    /** Aggregated cluster health. */
    health: Cluster_Health;
    /** Current state of the cluster. */
    status: Cluster_Status;
    /** Maintenance window for the cluster. */
    maintenanceWindow?: MaintenanceWindow;
    /** Planned maintenance operation to be started for the cluster within the nearest [maintenance_window]. */
    plannedOperation?: MaintenanceOperation;
    /** User security groups */
    securityGroupIds: string[];
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
}

/** Deployment environment. */
export enum Cluster_Environment {
    ENVIRONMENT_UNSPECIFIED = 0,
    /**
     * PRODUCTION - Stable environment with a conservative update policy: only hotfixes
     * are applied during regular maintenance.
     */
    PRODUCTION = 1,
    /**
     * PRESTABLE - Environment with more aggressive update policy: new versions
     * are rolled out irrespective of backward compatibility.
     */
    PRESTABLE = 2,
    UNRECOGNIZED = -1,
}

export function cluster_EnvironmentFromJSON(object: any): Cluster_Environment {
    switch (object) {
        case 0:
        case 'ENVIRONMENT_UNSPECIFIED':
            return Cluster_Environment.ENVIRONMENT_UNSPECIFIED;
        case 1:
        case 'PRODUCTION':
            return Cluster_Environment.PRODUCTION;
        case 2:
        case 'PRESTABLE':
            return Cluster_Environment.PRESTABLE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Cluster_Environment.UNRECOGNIZED;
    }
}

export function cluster_EnvironmentToJSON(object: Cluster_Environment): string {
    switch (object) {
        case Cluster_Environment.ENVIRONMENT_UNSPECIFIED:
            return 'ENVIRONMENT_UNSPECIFIED';
        case Cluster_Environment.PRODUCTION:
            return 'PRODUCTION';
        case Cluster_Environment.PRESTABLE:
            return 'PRESTABLE';
        default:
            return 'UNKNOWN';
    }
}

export enum Cluster_Health {
    /** HEALTH_UNKNOWN - State of the cluster is unknown ([Host.health] for every host in the cluster is UNKNOWN). */
    HEALTH_UNKNOWN = 0,
    /** ALIVE - Cluster is alive and well ([Host.health] for every host in the cluster is ALIVE). */
    ALIVE = 1,
    /** DEAD - Cluster is inoperable ([Host.health] for every host in the cluster is DEAD). */
    DEAD = 2,
    /** DEGRADED - Cluster is working below capacity ([Host.health] for at least one host in the cluster is not ALIVE). */
    DEGRADED = 3,
    UNRECOGNIZED = -1,
}

export function cluster_HealthFromJSON(object: any): Cluster_Health {
    switch (object) {
        case 0:
        case 'HEALTH_UNKNOWN':
            return Cluster_Health.HEALTH_UNKNOWN;
        case 1:
        case 'ALIVE':
            return Cluster_Health.ALIVE;
        case 2:
        case 'DEAD':
            return Cluster_Health.DEAD;
        case 3:
        case 'DEGRADED':
            return Cluster_Health.DEGRADED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Cluster_Health.UNRECOGNIZED;
    }
}

export function cluster_HealthToJSON(object: Cluster_Health): string {
    switch (object) {
        case Cluster_Health.HEALTH_UNKNOWN:
            return 'HEALTH_UNKNOWN';
        case Cluster_Health.ALIVE:
            return 'ALIVE';
        case Cluster_Health.DEAD:
            return 'DEAD';
        case Cluster_Health.DEGRADED:
            return 'DEGRADED';
        default:
            return 'UNKNOWN';
    }
}

export enum Cluster_Status {
    /** STATUS_UNKNOWN - Cluster state is unknown. */
    STATUS_UNKNOWN = 0,
    /** CREATING - Cluster is being created. */
    CREATING = 1,
    /** RUNNING - Cluster is running normally. */
    RUNNING = 2,
    /** ERROR - Cluster encountered a problem and cannot operate. */
    ERROR = 3,
    /** UPDATING - Cluster is being updated. */
    UPDATING = 4,
    /** STOPPING - Cluster is stopping. */
    STOPPING = 5,
    /** STOPPED - Cluster stopped. */
    STOPPED = 6,
    /** STARTING - Cluster is starting. */
    STARTING = 7,
    UNRECOGNIZED = -1,
}

export function cluster_StatusFromJSON(object: any): Cluster_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNKNOWN':
            return Cluster_Status.STATUS_UNKNOWN;
        case 1:
        case 'CREATING':
            return Cluster_Status.CREATING;
        case 2:
        case 'RUNNING':
            return Cluster_Status.RUNNING;
        case 3:
        case 'ERROR':
            return Cluster_Status.ERROR;
        case 4:
        case 'UPDATING':
            return Cluster_Status.UPDATING;
        case 5:
        case 'STOPPING':
            return Cluster_Status.STOPPING;
        case 6:
        case 'STOPPED':
            return Cluster_Status.STOPPED;
        case 7:
        case 'STARTING':
            return Cluster_Status.STARTING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Cluster_Status.UNRECOGNIZED;
    }
}

export function cluster_StatusToJSON(object: Cluster_Status): string {
    switch (object) {
        case Cluster_Status.STATUS_UNKNOWN:
            return 'STATUS_UNKNOWN';
        case Cluster_Status.CREATING:
            return 'CREATING';
        case Cluster_Status.RUNNING:
            return 'RUNNING';
        case Cluster_Status.ERROR:
            return 'ERROR';
        case Cluster_Status.UPDATING:
            return 'UPDATING';
        case Cluster_Status.STOPPING:
            return 'STOPPING';
        case Cluster_Status.STOPPED:
            return 'STOPPED';
        case Cluster_Status.STARTING:
            return 'STARTING';
        default:
            return 'UNKNOWN';
    }
}

export interface Cluster_LabelsEntry {
    key: string;
    value: string;
}

/** Monitoring system. */
export interface Monitoring {
    /** Name of the monitoring system. */
    name: string;
    /** Description of the monitoring system. */
    description: string;
    /** Link to the monitoring system charts for the SPQR cluster. */
    link: string;
}

export interface ClusterConfig {
    /** Configuration for SPQR servers in the cluster. */
    spqrConfig?: SPQRConfig;
    /** Time to start the daily backup, in the UTC timezone. */
    backupWindowStart?: TimeOfDay;
    /** Retain period of automatically created backup in days */
    backupRetainPeriodDays?: number;
    /** Access policy to DB */
    access?: Access;
    soxAudit?: boolean;
}

export interface Access {
    /** Allow access for DataLens. */
    dataLens: boolean;
    /** Allow access for Web SQL. */
    webSql: boolean;
    /** Allow access for DataTransfer. */
    dataTransfer: boolean;
    /**
     * Allow access for Serverless.
     * NOTE: Do not propagate to public API until Serverless integration is required.
     */
    serverless: boolean;
}

const baseCluster: object = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    environment: 0,
    networkId: '',
    health: 0,
    status: 0,
    securityGroupIds: '',
    deletionProtection: false,
};

export const Cluster = {
    encode(message: Cluster, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
            Cluster_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        if (message.environment !== 0) {
            writer.uint32(56).int32(message.environment);
        }
        for (const v of message.monitoring) {
            Monitoring.encode(v!, writer.uint32(66).fork()).ldelim();
        }
        if (message.config !== undefined) {
            ClusterConfig.encode(message.config, writer.uint32(74).fork()).ldelim();
        }
        if (message.networkId !== '') {
            writer.uint32(82).string(message.networkId);
        }
        if (message.health !== 0) {
            writer.uint32(88).int32(message.health);
        }
        if (message.status !== 0) {
            writer.uint32(96).int32(message.status);
        }
        if (message.maintenanceWindow !== undefined) {
            MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(106).fork()).ldelim();
        }
        if (message.plannedOperation !== undefined) {
            MaintenanceOperation.encode(
                message.plannedOperation,
                writer.uint32(114).fork(),
            ).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(122).string(v!);
        }
        if (message.deletionProtection === true) {
            writer.uint32(128).bool(message.deletionProtection);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Cluster {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCluster } as Cluster;
        message.labels = {};
        message.monitoring = [];
        message.securityGroupIds = [];
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
                    const entry6 = Cluster_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.environment = reader.int32() as any;
                    break;
                case 8:
                    message.monitoring.push(Monitoring.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.config = ClusterConfig.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.networkId = reader.string();
                    break;
                case 11:
                    message.health = reader.int32() as any;
                    break;
                case 12:
                    message.status = reader.int32() as any;
                    break;
                case 13:
                    message.maintenanceWindow = MaintenanceWindow.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.plannedOperation = MaintenanceOperation.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 16:
                    message.deletionProtection = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Cluster {
        const message = { ...baseCluster } as Cluster;
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
        message.environment =
            object.environment !== undefined && object.environment !== null
                ? cluster_EnvironmentFromJSON(object.environment)
                : 0;
        message.monitoring = (object.monitoring ?? []).map((e: any) => Monitoring.fromJSON(e));
        message.config =
            object.config !== undefined && object.config !== null
                ? ClusterConfig.fromJSON(object.config)
                : undefined;
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : '';
        message.health =
            object.health !== undefined && object.health !== null
                ? cluster_HealthFromJSON(object.health)
                : 0;
        message.status =
            object.status !== undefined && object.status !== null
                ? cluster_StatusFromJSON(object.status)
                : 0;
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined && object.maintenanceWindow !== null
                ? MaintenanceWindow.fromJSON(object.maintenanceWindow)
                : undefined;
        message.plannedOperation =
            object.plannedOperation !== undefined && object.plannedOperation !== null
                ? MaintenanceOperation.fromJSON(object.plannedOperation)
                : undefined;
        message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) => String(e));
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        return message;
    },

    toJSON(message: Cluster): unknown {
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
        message.environment !== undefined &&
            (obj.environment = cluster_EnvironmentToJSON(message.environment));
        if (message.monitoring) {
            obj.monitoring = message.monitoring.map((e) => (e ? Monitoring.toJSON(e) : undefined));
        } else {
            obj.monitoring = [];
        }
        message.config !== undefined &&
            (obj.config = message.config ? ClusterConfig.toJSON(message.config) : undefined);
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.health !== undefined && (obj.health = cluster_HealthToJSON(message.health));
        message.status !== undefined && (obj.status = cluster_StatusToJSON(message.status));
        message.maintenanceWindow !== undefined &&
            (obj.maintenanceWindow = message.maintenanceWindow
                ? MaintenanceWindow.toJSON(message.maintenanceWindow)
                : undefined);
        message.plannedOperation !== undefined &&
            (obj.plannedOperation = message.plannedOperation
                ? MaintenanceOperation.toJSON(message.plannedOperation)
                : undefined);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        } else {
            obj.securityGroupIds = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Cluster>, I>>(object: I): Cluster {
        const message = { ...baseCluster } as Cluster;
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
        message.environment = object.environment ?? 0;
        message.monitoring = object.monitoring?.map((e) => Monitoring.fromPartial(e)) || [];
        message.config =
            object.config !== undefined && object.config !== null
                ? ClusterConfig.fromPartial(object.config)
                : undefined;
        message.networkId = object.networkId ?? '';
        message.health = object.health ?? 0;
        message.status = object.status ?? 0;
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined && object.maintenanceWindow !== null
                ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
                : undefined;
        message.plannedOperation =
            object.plannedOperation !== undefined && object.plannedOperation !== null
                ? MaintenanceOperation.fromPartial(object.plannedOperation)
                : undefined;
        message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
        message.deletionProtection = object.deletionProtection ?? false;
        return message;
    },
};

const baseCluster_LabelsEntry: object = { key: '', value: '' };

export const Cluster_LabelsEntry = {
    encode(message: Cluster_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Cluster_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCluster_LabelsEntry } as Cluster_LabelsEntry;
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

    fromJSON(object: any): Cluster_LabelsEntry {
        const message = { ...baseCluster_LabelsEntry } as Cluster_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Cluster_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Cluster_LabelsEntry>, I>>(
        object: I,
    ): Cluster_LabelsEntry {
        const message = { ...baseCluster_LabelsEntry } as Cluster_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseMonitoring: object = { name: '', description: '', link: '' };

export const Monitoring = {
    encode(message: Monitoring, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (message.link !== '') {
            writer.uint32(26).string(message.link);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Monitoring {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMonitoring } as Monitoring;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.link = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Monitoring {
        const message = { ...baseMonitoring } as Monitoring;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.link = object.link !== undefined && object.link !== null ? String(object.link) : '';
        return message;
    },

    toJSON(message: Monitoring): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.link !== undefined && (obj.link = message.link);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Monitoring>, I>>(object: I): Monitoring {
        const message = { ...baseMonitoring } as Monitoring;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.link = object.link ?? '';
        return message;
    },
};

const baseClusterConfig: object = {};

export const ClusterConfig = {
    encode(message: ClusterConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.spqrConfig !== undefined) {
            SPQRConfig.encode(message.spqrConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.backupWindowStart !== undefined) {
            TimeOfDay.encode(message.backupWindowStart, writer.uint32(18).fork()).ldelim();
        }
        if (message.backupRetainPeriodDays !== undefined) {
            Int64Value.encode(
                { value: message.backupRetainPeriodDays! },
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.access !== undefined) {
            Access.encode(message.access, writer.uint32(34).fork()).ldelim();
        }
        if (message.soxAudit !== undefined) {
            BoolValue.encode({ value: message.soxAudit! }, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClusterConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClusterConfig } as ClusterConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spqrConfig = SPQRConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.backupWindowStart = TimeOfDay.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.backupRetainPeriodDays = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 4:
                    message.access = Access.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.soxAudit = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClusterConfig {
        const message = { ...baseClusterConfig } as ClusterConfig;
        message.spqrConfig =
            object.spqrConfig !== undefined && object.spqrConfig !== null
                ? SPQRConfig.fromJSON(object.spqrConfig)
                : undefined;
        message.backupWindowStart =
            object.backupWindowStart !== undefined && object.backupWindowStart !== null
                ? TimeOfDay.fromJSON(object.backupWindowStart)
                : undefined;
        message.backupRetainPeriodDays =
            object.backupRetainPeriodDays !== undefined && object.backupRetainPeriodDays !== null
                ? Number(object.backupRetainPeriodDays)
                : undefined;
        message.access =
            object.access !== undefined && object.access !== null
                ? Access.fromJSON(object.access)
                : undefined;
        message.soxAudit =
            object.soxAudit !== undefined && object.soxAudit !== null
                ? Boolean(object.soxAudit)
                : undefined;
        return message;
    },

    toJSON(message: ClusterConfig): unknown {
        const obj: any = {};
        message.spqrConfig !== undefined &&
            (obj.spqrConfig = message.spqrConfig
                ? SPQRConfig.toJSON(message.spqrConfig)
                : undefined);
        message.backupWindowStart !== undefined &&
            (obj.backupWindowStart = message.backupWindowStart
                ? TimeOfDay.toJSON(message.backupWindowStart)
                : undefined);
        message.backupRetainPeriodDays !== undefined &&
            (obj.backupRetainPeriodDays = message.backupRetainPeriodDays);
        message.access !== undefined &&
            (obj.access = message.access ? Access.toJSON(message.access) : undefined);
        message.soxAudit !== undefined && (obj.soxAudit = message.soxAudit);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClusterConfig>, I>>(object: I): ClusterConfig {
        const message = { ...baseClusterConfig } as ClusterConfig;
        message.spqrConfig =
            object.spqrConfig !== undefined && object.spqrConfig !== null
                ? SPQRConfig.fromPartial(object.spqrConfig)
                : undefined;
        message.backupWindowStart =
            object.backupWindowStart !== undefined && object.backupWindowStart !== null
                ? TimeOfDay.fromPartial(object.backupWindowStart)
                : undefined;
        message.backupRetainPeriodDays = object.backupRetainPeriodDays ?? undefined;
        message.access =
            object.access !== undefined && object.access !== null
                ? Access.fromPartial(object.access)
                : undefined;
        message.soxAudit = object.soxAudit ?? undefined;
        return message;
    },
};

const baseAccess: object = {
    dataLens: false,
    webSql: false,
    dataTransfer: false,
    serverless: false,
};

export const Access = {
    encode(message: Access, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.dataLens === true) {
            writer.uint32(8).bool(message.dataLens);
        }
        if (message.webSql === true) {
            writer.uint32(16).bool(message.webSql);
        }
        if (message.dataTransfer === true) {
            writer.uint32(24).bool(message.dataTransfer);
        }
        if (message.serverless === true) {
            writer.uint32(32).bool(message.serverless);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Access {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAccess } as Access;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataLens = reader.bool();
                    break;
                case 2:
                    message.webSql = reader.bool();
                    break;
                case 3:
                    message.dataTransfer = reader.bool();
                    break;
                case 4:
                    message.serverless = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Access {
        const message = { ...baseAccess } as Access;
        message.dataLens =
            object.dataLens !== undefined && object.dataLens !== null
                ? Boolean(object.dataLens)
                : false;
        message.webSql =
            object.webSql !== undefined && object.webSql !== null ? Boolean(object.webSql) : false;
        message.dataTransfer =
            object.dataTransfer !== undefined && object.dataTransfer !== null
                ? Boolean(object.dataTransfer)
                : false;
        message.serverless =
            object.serverless !== undefined && object.serverless !== null
                ? Boolean(object.serverless)
                : false;
        return message;
    },

    toJSON(message: Access): unknown {
        const obj: any = {};
        message.dataLens !== undefined && (obj.dataLens = message.dataLens);
        message.webSql !== undefined && (obj.webSql = message.webSql);
        message.dataTransfer !== undefined && (obj.dataTransfer = message.dataTransfer);
        message.serverless !== undefined && (obj.serverless = message.serverless);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Access>, I>>(object: I): Access {
        const message = { ...baseAccess } as Access;
        message.dataLens = object.dataLens ?? false;
        message.webSql = object.webSql ?? false;
        message.dataTransfer = object.dataTransfer ?? false;
        message.serverless = object.serverless ?? false;
        return message;
    },
};

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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
