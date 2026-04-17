/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { MaintenanceWindow, MaintenanceOperation } from './maintenance';
import {
    LogLevel_Level,
    logLevel_LevelFromJSON,
    logLevel_LevelToJSON,
} from '../../logging/v1/log_entry';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.metastore.v1';

/** Metastore Cluster. */
export interface Cluster {
    /**
     * Unique ID of the Metastore Cluster.
     * This ID is assigned by Cloud in the process of creating a Metastore cluster.
     */
    id: string;
    /** ID of the folder that the Metastore Cluster belongs to. */
    folderId: string;
    /** The time the Metastore Cluster was created at. */
    createdAt?: Date;
    /**
     * Name of the Metastore Cluster.
     * The name is unique within the folder.
     */
    name: string;
    /** Description of the Metastore Cluster. */
    description: string;
    /** Custom labels for the Metastore Cluster as `` key:value `` pairs. */
    labels: { [key: string]: string };
    /** Monitoring systems relevant to the Metastore Cluster. */
    monitoring: Monitoring[];
    /** Aggregated cluster health. */
    health: Cluster_Health;
    /** Cluster status. */
    status: Cluster_Status;
    /** Deletion Protection prevents deletion of the cluster. */
    deletionProtection: boolean;
    /** Metastore server version. */
    version: string;
    /** Metastore network ID. */
    networkId: string;
    /** IP address of the Metastore server load balancer. */
    endpointIp: string;
    /** Configuration of the Metastore Cluster. */
    clusterConfig?: ClusterConfig;
    /** Service account used to access Cloud resources. */
    serviceAccountId: string;
    /** Cloud logging configuration. */
    logging?: LoggingConfig;
    /** Network-related configuration options. */
    network?: NetworkConfig;
    /** Maintenance window. */
    maintenanceWindow?: MaintenanceWindow;
    /** Maintenance operation scheduled for the nearest maintenance window. */
    plannedOperation?: MaintenanceOperation;
    /** Output only. Whether the cluster is configured for high availability (multiple zones). */
    isHa: boolean;
}

export enum Cluster_Health {
    /** HEALTH_UNKNOWN - Cluster is in unknown state (we have no data). */
    HEALTH_UNKNOWN = 0,
    /** ALIVE - Cluster is alive and operates properly. */
    ALIVE = 1,
    /** DEAD - Cluster is inoperable (it cannot perform any of its essential functions). */
    DEAD = 2,
    /** DEGRADED - Cluster is partially alive (it can perform some of its essential functions). */
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

export interface Monitoring {
    /** Name of the monitoring system. */
    name: string;
    /** Description of the monitoring system. */
    description: string;
    /** Link to the monitoring system. */
    link: string;
}

export interface ClusterConfig {
    /** Configuration for computational resources for Metastore server instances. */
    resources?: Resources;
    /** Configuration of warehouse. */
    warehouse?: WarehouseConfig;
}

export interface NetworkConfig {
    /** IDs of VPC network subnets where instances of the cluster are attached. */
    subnetIds: string[];
    /** User security groups. */
    securityGroupIds: string[];
}

export interface Resources {
    /** ID of the preset for computational resources allocated to an instance (e.g., CPU, memory, etc.). */
    resourcePresetId: string;
}

export interface LoggingConfig {
    /** Logs will be written to the default log group of the specified folder. */
    folderId: string | undefined;
    /** Logs will be written to the log group specified by its ID. */
    logGroupId: string | undefined;
    /** Logs generated by the Metastore server are delivered to Cloud Logging. */
    enabled: boolean;
    /**
     * Minimum severity level for log entries.
     * See [LogLevel.Level] for details.
     */
    minLevel: LogLevel_Level;
}

export interface WarehouseConfig {
    /** Yandex Cloud Object Storage. */
    s3?: WarehouseConfig_S3Warehouse | undefined;
}

export interface WarehouseConfig_S3Warehouse {
    /** Bucket name to use. */
    bucket: string;
    /** Path within the bucket to use. */
    path: string;
}

const baseCluster: object = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    health: 0,
    status: 0,
    deletionProtection: false,
    version: '',
    networkId: '',
    endpointIp: '',
    serviceAccountId: '',
    isHa: false,
};

export const Cluster: {
    encode(message: Cluster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Cluster;
    fromJSON(object: any): Cluster;
    toJSON(message: Cluster): unknown;
    fromPartial<I extends Exact<DeepPartial<Cluster>, I>>(object: I): Cluster;
} = {
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
        for (const v of message.monitoring) {
            Monitoring.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        if (message.health !== 0) {
            writer.uint32(64).int32(message.health);
        }
        if (message.status !== 0) {
            writer.uint32(72).int32(message.status);
        }
        if (message.deletionProtection === true) {
            writer.uint32(128).bool(message.deletionProtection);
        }
        if (message.version !== '') {
            writer.uint32(138).string(message.version);
        }
        if (message.networkId !== '') {
            writer.uint32(146).string(message.networkId);
        }
        if (message.endpointIp !== '') {
            writer.uint32(154).string(message.endpointIp);
        }
        if (message.clusterConfig !== undefined) {
            ClusterConfig.encode(message.clusterConfig, writer.uint32(162).fork()).ldelim();
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(170).string(message.serviceAccountId);
        }
        if (message.logging !== undefined) {
            LoggingConfig.encode(message.logging, writer.uint32(178).fork()).ldelim();
        }
        if (message.network !== undefined) {
            NetworkConfig.encode(message.network, writer.uint32(186).fork()).ldelim();
        }
        if (message.maintenanceWindow !== undefined) {
            MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(194).fork()).ldelim();
        }
        if (message.plannedOperation !== undefined) {
            MaintenanceOperation.encode(
                message.plannedOperation,
                writer.uint32(202).fork(),
            ).ldelim();
        }
        if (message.isHa === true) {
            writer.uint32(208).bool(message.isHa);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Cluster {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCluster } as Cluster;
        message.labels = {};
        message.monitoring = [];
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
                    message.monitoring.push(Monitoring.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.health = reader.int32() as any;
                    break;
                case 9:
                    message.status = reader.int32() as any;
                    break;
                case 16:
                    message.deletionProtection = reader.bool();
                    break;
                case 17:
                    message.version = reader.string();
                    break;
                case 18:
                    message.networkId = reader.string();
                    break;
                case 19:
                    message.endpointIp = reader.string();
                    break;
                case 20:
                    message.clusterConfig = ClusterConfig.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.serviceAccountId = reader.string();
                    break;
                case 22:
                    message.logging = LoggingConfig.decode(reader, reader.uint32());
                    break;
                case 23:
                    message.network = NetworkConfig.decode(reader, reader.uint32());
                    break;
                case 24:
                    message.maintenanceWindow = MaintenanceWindow.decode(reader, reader.uint32());
                    break;
                case 25:
                    message.plannedOperation = MaintenanceOperation.decode(reader, reader.uint32());
                    break;
                case 26:
                    message.isHa = reader.bool();
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
        message.monitoring = (object.monitoring ?? []).map((e: any) => Monitoring.fromJSON(e));
        message.health =
            object.health !== undefined && object.health !== null
                ? cluster_HealthFromJSON(object.health)
                : 0;
        message.status =
            object.status !== undefined && object.status !== null
                ? cluster_StatusFromJSON(object.status)
                : 0;
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.version =
            object.version !== undefined && object.version !== null ? String(object.version) : '';
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : '';
        message.endpointIp =
            object.endpointIp !== undefined && object.endpointIp !== null
                ? String(object.endpointIp)
                : '';
        message.clusterConfig =
            object.clusterConfig !== undefined && object.clusterConfig !== null
                ? ClusterConfig.fromJSON(object.clusterConfig)
                : undefined;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        message.logging =
            object.logging !== undefined && object.logging !== null
                ? LoggingConfig.fromJSON(object.logging)
                : undefined;
        message.network =
            object.network !== undefined && object.network !== null
                ? NetworkConfig.fromJSON(object.network)
                : undefined;
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined && object.maintenanceWindow !== null
                ? MaintenanceWindow.fromJSON(object.maintenanceWindow)
                : undefined;
        message.plannedOperation =
            object.plannedOperation !== undefined && object.plannedOperation !== null
                ? MaintenanceOperation.fromJSON(object.plannedOperation)
                : undefined;
        message.isHa =
            object.isHa !== undefined && object.isHa !== null ? Boolean(object.isHa) : false;
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
        if (message.monitoring) {
            obj.monitoring = message.monitoring.map((e) => (e ? Monitoring.toJSON(e) : undefined));
        } else {
            obj.monitoring = [];
        }
        message.health !== undefined && (obj.health = cluster_HealthToJSON(message.health));
        message.status !== undefined && (obj.status = cluster_StatusToJSON(message.status));
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.version !== undefined && (obj.version = message.version);
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.endpointIp !== undefined && (obj.endpointIp = message.endpointIp);
        message.clusterConfig !== undefined &&
            (obj.clusterConfig = message.clusterConfig
                ? ClusterConfig.toJSON(message.clusterConfig)
                : undefined);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.logging !== undefined &&
            (obj.logging = message.logging ? LoggingConfig.toJSON(message.logging) : undefined);
        message.network !== undefined &&
            (obj.network = message.network ? NetworkConfig.toJSON(message.network) : undefined);
        message.maintenanceWindow !== undefined &&
            (obj.maintenanceWindow = message.maintenanceWindow
                ? MaintenanceWindow.toJSON(message.maintenanceWindow)
                : undefined);
        message.plannedOperation !== undefined &&
            (obj.plannedOperation = message.plannedOperation
                ? MaintenanceOperation.toJSON(message.plannedOperation)
                : undefined);
        message.isHa !== undefined && (obj.isHa = message.isHa);
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
        message.monitoring = object.monitoring?.map((e) => Monitoring.fromPartial(e)) || [];
        message.health = object.health ?? 0;
        message.status = object.status ?? 0;
        message.deletionProtection = object.deletionProtection ?? false;
        message.version = object.version ?? '';
        message.networkId = object.networkId ?? '';
        message.endpointIp = object.endpointIp ?? '';
        message.clusterConfig =
            object.clusterConfig !== undefined && object.clusterConfig !== null
                ? ClusterConfig.fromPartial(object.clusterConfig)
                : undefined;
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.logging =
            object.logging !== undefined && object.logging !== null
                ? LoggingConfig.fromPartial(object.logging)
                : undefined;
        message.network =
            object.network !== undefined && object.network !== null
                ? NetworkConfig.fromPartial(object.network)
                : undefined;
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined && object.maintenanceWindow !== null
                ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
                : undefined;
        message.plannedOperation =
            object.plannedOperation !== undefined && object.plannedOperation !== null
                ? MaintenanceOperation.fromPartial(object.plannedOperation)
                : undefined;
        message.isHa = object.isHa ?? false;
        return message;
    },
};

const baseCluster_LabelsEntry: object = { key: '', value: '' };

export const Cluster_LabelsEntry: {
    encode(message: Cluster_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Cluster_LabelsEntry;
    fromJSON(object: any): Cluster_LabelsEntry;
    toJSON(message: Cluster_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<Cluster_LabelsEntry>, I>>(object: I): Cluster_LabelsEntry;
} = {
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

export const Monitoring: {
    encode(message: Monitoring, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Monitoring;
    fromJSON(object: any): Monitoring;
    toJSON(message: Monitoring): unknown;
    fromPartial<I extends Exact<DeepPartial<Monitoring>, I>>(object: I): Monitoring;
} = {
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

export const ClusterConfig: {
    encode(message: ClusterConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClusterConfig;
    fromJSON(object: any): ClusterConfig;
    toJSON(message: ClusterConfig): unknown;
    fromPartial<I extends Exact<DeepPartial<ClusterConfig>, I>>(object: I): ClusterConfig;
} = {
    encode(message: ClusterConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.warehouse !== undefined) {
            WarehouseConfig.encode(message.warehouse, writer.uint32(26).fork()).ldelim();
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
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.warehouse = WarehouseConfig.decode(reader, reader.uint32());
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
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.warehouse =
            object.warehouse !== undefined && object.warehouse !== null
                ? WarehouseConfig.fromJSON(object.warehouse)
                : undefined;
        return message;
    },

    toJSON(message: ClusterConfig): unknown {
        const obj: any = {};
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.warehouse !== undefined &&
            (obj.warehouse = message.warehouse
                ? WarehouseConfig.toJSON(message.warehouse)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClusterConfig>, I>>(object: I): ClusterConfig {
        const message = { ...baseClusterConfig } as ClusterConfig;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.warehouse =
            object.warehouse !== undefined && object.warehouse !== null
                ? WarehouseConfig.fromPartial(object.warehouse)
                : undefined;
        return message;
    },
};

const baseNetworkConfig: object = { subnetIds: '', securityGroupIds: '' };

export const NetworkConfig: {
    encode(message: NetworkConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NetworkConfig;
    fromJSON(object: any): NetworkConfig;
    toJSON(message: NetworkConfig): unknown;
    fromPartial<I extends Exact<DeepPartial<NetworkConfig>, I>>(object: I): NetworkConfig;
} = {
    encode(message: NetworkConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.subnetIds) {
            writer.uint32(10).string(v!);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): NetworkConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNetworkConfig } as NetworkConfig;
        message.subnetIds = [];
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetIds.push(reader.string());
                    break;
                case 2:
                    message.securityGroupIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): NetworkConfig {
        const message = { ...baseNetworkConfig } as NetworkConfig;
        message.subnetIds = (object.subnetIds ?? []).map((e: any) => String(e));
        message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: NetworkConfig): unknown {
        const obj: any = {};
        if (message.subnetIds) {
            obj.subnetIds = message.subnetIds.map((e) => e);
        } else {
            obj.subnetIds = [];
        }
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        } else {
            obj.securityGroupIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<NetworkConfig>, I>>(object: I): NetworkConfig {
        const message = { ...baseNetworkConfig } as NetworkConfig;
        message.subnetIds = object.subnetIds?.map((e) => e) || [];
        message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
        return message;
    },
};

const baseResources: object = { resourcePresetId: '' };

export const Resources: {
    encode(message: Resources, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Resources;
    fromJSON(object: any): Resources;
    toJSON(message: Resources): unknown;
    fromPartial<I extends Exact<DeepPartial<Resources>, I>>(object: I): Resources;
} = {
    encode(message: Resources, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resourcePresetId !== '') {
            writer.uint32(10).string(message.resourcePresetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Resources {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResources } as Resources;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourcePresetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Resources {
        const message = { ...baseResources } as Resources;
        message.resourcePresetId =
            object.resourcePresetId !== undefined && object.resourcePresetId !== null
                ? String(object.resourcePresetId)
                : '';
        return message;
    },

    toJSON(message: Resources): unknown {
        const obj: any = {};
        message.resourcePresetId !== undefined && (obj.resourcePresetId = message.resourcePresetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Resources>, I>>(object: I): Resources {
        const message = { ...baseResources } as Resources;
        message.resourcePresetId = object.resourcePresetId ?? '';
        return message;
    },
};

const baseLoggingConfig: object = { enabled: false, minLevel: 0 };

export const LoggingConfig: {
    encode(message: LoggingConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LoggingConfig;
    fromJSON(object: any): LoggingConfig;
    toJSON(message: LoggingConfig): unknown;
    fromPartial<I extends Exact<DeepPartial<LoggingConfig>, I>>(object: I): LoggingConfig;
} = {
    encode(message: LoggingConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== undefined) {
            writer.uint32(18).string(message.folderId);
        }
        if (message.logGroupId !== undefined) {
            writer.uint32(26).string(message.logGroupId);
        }
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.minLevel !== 0) {
            writer.uint32(32).int32(message.minLevel);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LoggingConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLoggingConfig } as LoggingConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.logGroupId = reader.string();
                    break;
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 4:
                    message.minLevel = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LoggingConfig {
        const message = { ...baseLoggingConfig } as LoggingConfig;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : undefined;
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : undefined;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.minLevel =
            object.minLevel !== undefined && object.minLevel !== null
                ? logLevel_LevelFromJSON(object.minLevel)
                : 0;
        return message;
    },

    toJSON(message: LoggingConfig): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.minLevel !== undefined && (obj.minLevel = logLevel_LevelToJSON(message.minLevel));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LoggingConfig>, I>>(object: I): LoggingConfig {
        const message = { ...baseLoggingConfig } as LoggingConfig;
        message.folderId = object.folderId ?? undefined;
        message.logGroupId = object.logGroupId ?? undefined;
        message.enabled = object.enabled ?? false;
        message.minLevel = object.minLevel ?? 0;
        return message;
    },
};

const baseWarehouseConfig: object = {};

export const WarehouseConfig: {
    encode(message: WarehouseConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WarehouseConfig;
    fromJSON(object: any): WarehouseConfig;
    toJSON(message: WarehouseConfig): unknown;
    fromPartial<I extends Exact<DeepPartial<WarehouseConfig>, I>>(object: I): WarehouseConfig;
} = {
    encode(message: WarehouseConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.s3 !== undefined) {
            WarehouseConfig_S3Warehouse.encode(message.s3, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): WarehouseConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWarehouseConfig } as WarehouseConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.s3 = WarehouseConfig_S3Warehouse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WarehouseConfig {
        const message = { ...baseWarehouseConfig } as WarehouseConfig;
        message.s3 =
            object.s3 !== undefined && object.s3 !== null
                ? WarehouseConfig_S3Warehouse.fromJSON(object.s3)
                : undefined;
        return message;
    },

    toJSON(message: WarehouseConfig): unknown {
        const obj: any = {};
        message.s3 !== undefined &&
            (obj.s3 = message.s3 ? WarehouseConfig_S3Warehouse.toJSON(message.s3) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<WarehouseConfig>, I>>(object: I): WarehouseConfig {
        const message = { ...baseWarehouseConfig } as WarehouseConfig;
        message.s3 =
            object.s3 !== undefined && object.s3 !== null
                ? WarehouseConfig_S3Warehouse.fromPartial(object.s3)
                : undefined;
        return message;
    },
};

const baseWarehouseConfig_S3Warehouse: object = { bucket: '', path: '' };

export const WarehouseConfig_S3Warehouse: {
    encode(message: WarehouseConfig_S3Warehouse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WarehouseConfig_S3Warehouse;
    fromJSON(object: any): WarehouseConfig_S3Warehouse;
    toJSON(message: WarehouseConfig_S3Warehouse): unknown;
    fromPartial<I extends Exact<DeepPartial<WarehouseConfig_S3Warehouse>, I>>(object: I): WarehouseConfig_S3Warehouse;
} = {
    encode(
        message: WarehouseConfig_S3Warehouse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.bucket !== '') {
            writer.uint32(10).string(message.bucket);
        }
        if (message.path !== '') {
            writer.uint32(18).string(message.path);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): WarehouseConfig_S3Warehouse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWarehouseConfig_S3Warehouse } as WarehouseConfig_S3Warehouse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bucket = reader.string();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WarehouseConfig_S3Warehouse {
        const message = { ...baseWarehouseConfig_S3Warehouse } as WarehouseConfig_S3Warehouse;
        message.bucket =
            object.bucket !== undefined && object.bucket !== null ? String(object.bucket) : '';
        message.path = object.path !== undefined && object.path !== null ? String(object.path) : '';
        return message;
    },

    toJSON(message: WarehouseConfig_S3Warehouse): unknown {
        const obj: any = {};
        message.bucket !== undefined && (obj.bucket = message.bucket);
        message.path !== undefined && (obj.path = message.path);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<WarehouseConfig_S3Warehouse>, I>>(
        object: I,
    ): WarehouseConfig_S3Warehouse {
        const message = { ...baseWarehouseConfig_S3Warehouse } as WarehouseConfig_S3Warehouse;
        message.bucket = object.bucket ?? '';
        message.path = object.path ?? '';
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
