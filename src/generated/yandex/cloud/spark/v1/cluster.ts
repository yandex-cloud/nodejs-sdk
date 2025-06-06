/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
    MaintenanceWindow,
    MaintenanceOperation,
} from '../../../../yandex/cloud/spark/v1/maintenance';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.spark.v1';

export enum Health {
    /** HEALTH_UNKNOWN - Cluster is in unknown state (we have no data). */
    HEALTH_UNKNOWN = 0,
    /** ALIVE - Cluster is alive and well. */
    ALIVE = 1,
    /** DEAD - Cluster is inoperable (it cannot perform any of its essential functions). */
    DEAD = 2,
    /** DEGRADED - Cluster is partially alive (it can perform some of its essential functions). */
    DEGRADED = 3,
    UNRECOGNIZED = -1,
}

export function healthFromJSON(object: any): Health {
    switch (object) {
        case 0:
        case 'HEALTH_UNKNOWN':
            return Health.HEALTH_UNKNOWN;
        case 1:
        case 'ALIVE':
            return Health.ALIVE;
        case 2:
        case 'DEAD':
            return Health.DEAD;
        case 3:
        case 'DEGRADED':
            return Health.DEGRADED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Health.UNRECOGNIZED;
    }
}

export function healthToJSON(object: Health): string {
    switch (object) {
        case Health.HEALTH_UNKNOWN:
            return 'HEALTH_UNKNOWN';
        case Health.ALIVE:
            return 'ALIVE';
        case Health.DEAD:
            return 'DEAD';
        case Health.DEGRADED:
            return 'DEGRADED';
        default:
            return 'UNKNOWN';
    }
}

/** Spark cluster. */
export interface Cluster {
    /**
     * Unique ID of the Spark cluster.
     * This ID is assigned by Cloud in the process of creating a Spark cluster.
     */
    id: string;
    /** ID of the folder that the Spark cluster belongs to. */
    folderId: string;
    /** The time when the Spark cluster was created. */
    createdAt?: Date;
    /**
     * Name of the Spark cluster.
     * The name is unique within the folder. 1-64 characters long.
     */
    name: string;
    /** Description of the Spark cluster. 0-256 characters long. */
    description: string;
    labels: { [key: string]: string };
    /** Configuration of the Spark cluster. */
    config?: ClusterConfig;
    /** Cluster status. */
    status: Cluster_Status;
    network?: NetworkConfig;
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
    /** Service account that will be used to access a YC resources */
    serviceAccountId: string;
    /** Cloud logging configuration. */
    logging?: LoggingConfig;
    /** Aggregated cluster health. */
    health: Health;
    /** UI URLs */
    links: UILink[];
    /** Window of maintenance operations. */
    maintenanceWindow?: MaintenanceWindow;
    /** Maintenance operation planned at nearest maintenance_window. */
    plannedOperation?: MaintenanceOperation;
}

export enum Cluster_Status {
    /** STATUS_UNKNOWN - Cluster status is unknown */
    STATUS_UNKNOWN = 0,
    /** CREATING - Cluster is being created */
    CREATING = 1,
    /** RUNNING - Cluster is running normally. */
    RUNNING = 2,
    /** UPDATING - Cluster is being updated. */
    UPDATING = 3,
    /** ERROR - Cluster encountered a problem and cannot operate. */
    ERROR = 4,
    /** STOPPING - Cluster is stopping. */
    STOPPING = 5,
    /** STOPPED - Cluster is stopped. */
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
        case 'UPDATING':
            return Cluster_Status.UPDATING;
        case 4:
        case 'ERROR':
            return Cluster_Status.ERROR;
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
        case Cluster_Status.UPDATING:
            return 'UPDATING';
        case Cluster_Status.ERROR:
            return 'ERROR';
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

export interface ClusterConfig {
    resourcePools?: ResourcePools;
    /** Configuration for HistoryServer */
    historyServer?: HistoryServerConfig;
    /** Container custom environment dependencies */
    dependencies?: Dependencies;
    /** Metastore Cluster */
    metastore?: Metastore;
}

export interface HistoryServerConfig {
    enabled: boolean;
}

export interface NetworkConfig {
    /** IDs of VPC network subnets where instances of the cluster are attached. */
    subnetIds: string[];
    /** User security groups */
    securityGroupIds: string[];
}

export interface ResourcePools {
    driver?: ResourcePool;
    executor?: ResourcePool;
}

export interface ResourcePool {
    /** ID of the preset for computational resources allocated to a instance (e.g., CPU, memory, etc.). */
    resourcePresetId: string;
    scalePolicy?: ScalePolicy;
}

export interface ScalePolicy {
    fixedScale?: ScalePolicy_FixedScale | undefined;
    autoScale?: ScalePolicy_AutoScale | undefined;
}

export interface ScalePolicy_FixedScale {
    size: number;
}

export interface ScalePolicy_AutoScale {
    minSize: number;
    maxSize: number;
}

export interface Dependencies {
    pipPackages: string[];
    debPackages: string[];
}

export interface Metastore {
    clusterId: string;
}

export interface LoggingConfig {
    enabled: boolean;
    folderId: string | undefined;
    logGroupId: string | undefined;
}

export interface UILink {
    name: string;
    url: string;
}

const baseCluster: object = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    status: 0,
    deletionProtection: false,
    serviceAccountId: '',
    health: 0,
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
        if (message.config !== undefined) {
            ClusterConfig.encode(message.config, writer.uint32(58).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        if (message.network !== undefined) {
            NetworkConfig.encode(message.network, writer.uint32(74).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(80).bool(message.deletionProtection);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(90).string(message.serviceAccountId);
        }
        if (message.logging !== undefined) {
            LoggingConfig.encode(message.logging, writer.uint32(98).fork()).ldelim();
        }
        if (message.health !== 0) {
            writer.uint32(104).int32(message.health);
        }
        for (const v of message.links) {
            UILink.encode(v!, writer.uint32(114).fork()).ldelim();
        }
        if (message.maintenanceWindow !== undefined) {
            MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(122).fork()).ldelim();
        }
        if (message.plannedOperation !== undefined) {
            MaintenanceOperation.encode(
                message.plannedOperation,
                writer.uint32(130).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Cluster {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCluster } as Cluster;
        message.labels = {};
        message.links = [];
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
                    message.config = ClusterConfig.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.status = reader.int32() as any;
                    break;
                case 9:
                    message.network = NetworkConfig.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.deletionProtection = reader.bool();
                    break;
                case 11:
                    message.serviceAccountId = reader.string();
                    break;
                case 12:
                    message.logging = LoggingConfig.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.health = reader.int32() as any;
                    break;
                case 14:
                    message.links.push(UILink.decode(reader, reader.uint32()));
                    break;
                case 15:
                    message.maintenanceWindow = MaintenanceWindow.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.plannedOperation = MaintenanceOperation.decode(reader, reader.uint32());
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
        message.config =
            object.config !== undefined && object.config !== null
                ? ClusterConfig.fromJSON(object.config)
                : undefined;
        message.status =
            object.status !== undefined && object.status !== null
                ? cluster_StatusFromJSON(object.status)
                : 0;
        message.network =
            object.network !== undefined && object.network !== null
                ? NetworkConfig.fromJSON(object.network)
                : undefined;
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        message.logging =
            object.logging !== undefined && object.logging !== null
                ? LoggingConfig.fromJSON(object.logging)
                : undefined;
        message.health =
            object.health !== undefined && object.health !== null
                ? healthFromJSON(object.health)
                : 0;
        message.links = (object.links ?? []).map((e: any) => UILink.fromJSON(e));
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined && object.maintenanceWindow !== null
                ? MaintenanceWindow.fromJSON(object.maintenanceWindow)
                : undefined;
        message.plannedOperation =
            object.plannedOperation !== undefined && object.plannedOperation !== null
                ? MaintenanceOperation.fromJSON(object.plannedOperation)
                : undefined;
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
        message.config !== undefined &&
            (obj.config = message.config ? ClusterConfig.toJSON(message.config) : undefined);
        message.status !== undefined && (obj.status = cluster_StatusToJSON(message.status));
        message.network !== undefined &&
            (obj.network = message.network ? NetworkConfig.toJSON(message.network) : undefined);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.logging !== undefined &&
            (obj.logging = message.logging ? LoggingConfig.toJSON(message.logging) : undefined);
        message.health !== undefined && (obj.health = healthToJSON(message.health));
        if (message.links) {
            obj.links = message.links.map((e) => (e ? UILink.toJSON(e) : undefined));
        } else {
            obj.links = [];
        }
        message.maintenanceWindow !== undefined &&
            (obj.maintenanceWindow = message.maintenanceWindow
                ? MaintenanceWindow.toJSON(message.maintenanceWindow)
                : undefined);
        message.plannedOperation !== undefined &&
            (obj.plannedOperation = message.plannedOperation
                ? MaintenanceOperation.toJSON(message.plannedOperation)
                : undefined);
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
        message.config =
            object.config !== undefined && object.config !== null
                ? ClusterConfig.fromPartial(object.config)
                : undefined;
        message.status = object.status ?? 0;
        message.network =
            object.network !== undefined && object.network !== null
                ? NetworkConfig.fromPartial(object.network)
                : undefined;
        message.deletionProtection = object.deletionProtection ?? false;
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.logging =
            object.logging !== undefined && object.logging !== null
                ? LoggingConfig.fromPartial(object.logging)
                : undefined;
        message.health = object.health ?? 0;
        message.links = object.links?.map((e) => UILink.fromPartial(e)) || [];
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined && object.maintenanceWindow !== null
                ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
                : undefined;
        message.plannedOperation =
            object.plannedOperation !== undefined && object.plannedOperation !== null
                ? MaintenanceOperation.fromPartial(object.plannedOperation)
                : undefined;
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

const baseClusterConfig: object = {};

export const ClusterConfig = {
    encode(message: ClusterConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resourcePools !== undefined) {
            ResourcePools.encode(message.resourcePools, writer.uint32(10).fork()).ldelim();
        }
        if (message.historyServer !== undefined) {
            HistoryServerConfig.encode(message.historyServer, writer.uint32(18).fork()).ldelim();
        }
        if (message.dependencies !== undefined) {
            Dependencies.encode(message.dependencies, writer.uint32(26).fork()).ldelim();
        }
        if (message.metastore !== undefined) {
            Metastore.encode(message.metastore, writer.uint32(34).fork()).ldelim();
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
                    message.resourcePools = ResourcePools.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.historyServer = HistoryServerConfig.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.dependencies = Dependencies.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.metastore = Metastore.decode(reader, reader.uint32());
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
        message.resourcePools =
            object.resourcePools !== undefined && object.resourcePools !== null
                ? ResourcePools.fromJSON(object.resourcePools)
                : undefined;
        message.historyServer =
            object.historyServer !== undefined && object.historyServer !== null
                ? HistoryServerConfig.fromJSON(object.historyServer)
                : undefined;
        message.dependencies =
            object.dependencies !== undefined && object.dependencies !== null
                ? Dependencies.fromJSON(object.dependencies)
                : undefined;
        message.metastore =
            object.metastore !== undefined && object.metastore !== null
                ? Metastore.fromJSON(object.metastore)
                : undefined;
        return message;
    },

    toJSON(message: ClusterConfig): unknown {
        const obj: any = {};
        message.resourcePools !== undefined &&
            (obj.resourcePools = message.resourcePools
                ? ResourcePools.toJSON(message.resourcePools)
                : undefined);
        message.historyServer !== undefined &&
            (obj.historyServer = message.historyServer
                ? HistoryServerConfig.toJSON(message.historyServer)
                : undefined);
        message.dependencies !== undefined &&
            (obj.dependencies = message.dependencies
                ? Dependencies.toJSON(message.dependencies)
                : undefined);
        message.metastore !== undefined &&
            (obj.metastore = message.metastore ? Metastore.toJSON(message.metastore) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClusterConfig>, I>>(object: I): ClusterConfig {
        const message = { ...baseClusterConfig } as ClusterConfig;
        message.resourcePools =
            object.resourcePools !== undefined && object.resourcePools !== null
                ? ResourcePools.fromPartial(object.resourcePools)
                : undefined;
        message.historyServer =
            object.historyServer !== undefined && object.historyServer !== null
                ? HistoryServerConfig.fromPartial(object.historyServer)
                : undefined;
        message.dependencies =
            object.dependencies !== undefined && object.dependencies !== null
                ? Dependencies.fromPartial(object.dependencies)
                : undefined;
        message.metastore =
            object.metastore !== undefined && object.metastore !== null
                ? Metastore.fromPartial(object.metastore)
                : undefined;
        return message;
    },
};

const baseHistoryServerConfig: object = { enabled: false };

export const HistoryServerConfig = {
    encode(message: HistoryServerConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HistoryServerConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHistoryServerConfig } as HistoryServerConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HistoryServerConfig {
        const message = { ...baseHistoryServerConfig } as HistoryServerConfig;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        return message;
    },

    toJSON(message: HistoryServerConfig): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HistoryServerConfig>, I>>(
        object: I,
    ): HistoryServerConfig {
        const message = { ...baseHistoryServerConfig } as HistoryServerConfig;
        message.enabled = object.enabled ?? false;
        return message;
    },
};

const baseNetworkConfig: object = { subnetIds: '', securityGroupIds: '' };

export const NetworkConfig = {
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

const baseResourcePools: object = {};

export const ResourcePools = {
    encode(message: ResourcePools, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.driver !== undefined) {
            ResourcePool.encode(message.driver, writer.uint32(10).fork()).ldelim();
        }
        if (message.executor !== undefined) {
            ResourcePool.encode(message.executor, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResourcePools {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResourcePools } as ResourcePools;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.driver = ResourcePool.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.executor = ResourcePool.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourcePools {
        const message = { ...baseResourcePools } as ResourcePools;
        message.driver =
            object.driver !== undefined && object.driver !== null
                ? ResourcePool.fromJSON(object.driver)
                : undefined;
        message.executor =
            object.executor !== undefined && object.executor !== null
                ? ResourcePool.fromJSON(object.executor)
                : undefined;
        return message;
    },

    toJSON(message: ResourcePools): unknown {
        const obj: any = {};
        message.driver !== undefined &&
            (obj.driver = message.driver ? ResourcePool.toJSON(message.driver) : undefined);
        message.executor !== undefined &&
            (obj.executor = message.executor ? ResourcePool.toJSON(message.executor) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResourcePools>, I>>(object: I): ResourcePools {
        const message = { ...baseResourcePools } as ResourcePools;
        message.driver =
            object.driver !== undefined && object.driver !== null
                ? ResourcePool.fromPartial(object.driver)
                : undefined;
        message.executor =
            object.executor !== undefined && object.executor !== null
                ? ResourcePool.fromPartial(object.executor)
                : undefined;
        return message;
    },
};

const baseResourcePool: object = { resourcePresetId: '' };

export const ResourcePool = {
    encode(message: ResourcePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resourcePresetId !== '') {
            writer.uint32(10).string(message.resourcePresetId);
        }
        if (message.scalePolicy !== undefined) {
            ScalePolicy.encode(message.scalePolicy, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResourcePool {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResourcePool } as ResourcePool;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourcePresetId = reader.string();
                    break;
                case 2:
                    message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourcePool {
        const message = { ...baseResourcePool } as ResourcePool;
        message.resourcePresetId =
            object.resourcePresetId !== undefined && object.resourcePresetId !== null
                ? String(object.resourcePresetId)
                : '';
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? ScalePolicy.fromJSON(object.scalePolicy)
                : undefined;
        return message;
    },

    toJSON(message: ResourcePool): unknown {
        const obj: any = {};
        message.resourcePresetId !== undefined && (obj.resourcePresetId = message.resourcePresetId);
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResourcePool>, I>>(object: I): ResourcePool {
        const message = { ...baseResourcePool } as ResourcePool;
        message.resourcePresetId = object.resourcePresetId ?? '';
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? ScalePolicy.fromPartial(object.scalePolicy)
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
        if (message.autoScale !== undefined) {
            ScalePolicy_AutoScale.encode(message.autoScale, writer.uint32(18).fork()).ldelim();
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
                case 2:
                    message.autoScale = ScalePolicy_AutoScale.decode(reader, reader.uint32());
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
        message.autoScale =
            object.autoScale !== undefined && object.autoScale !== null
                ? ScalePolicy_AutoScale.fromJSON(object.autoScale)
                : undefined;
        return message;
    },

    toJSON(message: ScalePolicy): unknown {
        const obj: any = {};
        message.fixedScale !== undefined &&
            (obj.fixedScale = message.fixedScale
                ? ScalePolicy_FixedScale.toJSON(message.fixedScale)
                : undefined);
        message.autoScale !== undefined &&
            (obj.autoScale = message.autoScale
                ? ScalePolicy_AutoScale.toJSON(message.autoScale)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ScalePolicy>, I>>(object: I): ScalePolicy {
        const message = { ...baseScalePolicy } as ScalePolicy;
        message.fixedScale =
            object.fixedScale !== undefined && object.fixedScale !== null
                ? ScalePolicy_FixedScale.fromPartial(object.fixedScale)
                : undefined;
        message.autoScale =
            object.autoScale !== undefined && object.autoScale !== null
                ? ScalePolicy_AutoScale.fromPartial(object.autoScale)
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

const baseScalePolicy_AutoScale: object = { minSize: 0, maxSize: 0 };

export const ScalePolicy_AutoScale = {
    encode(message: ScalePolicy_AutoScale, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.minSize !== 0) {
            writer.uint32(8).int64(message.minSize);
        }
        if (message.maxSize !== 0) {
            writer.uint32(16).int64(message.maxSize);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ScalePolicy_AutoScale {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScalePolicy_AutoScale } as ScalePolicy_AutoScale;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minSize = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.maxSize = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ScalePolicy_AutoScale {
        const message = { ...baseScalePolicy_AutoScale } as ScalePolicy_AutoScale;
        message.minSize =
            object.minSize !== undefined && object.minSize !== null ? Number(object.minSize) : 0;
        message.maxSize =
            object.maxSize !== undefined && object.maxSize !== null ? Number(object.maxSize) : 0;
        return message;
    },

    toJSON(message: ScalePolicy_AutoScale): unknown {
        const obj: any = {};
        message.minSize !== undefined && (obj.minSize = Math.round(message.minSize));
        message.maxSize !== undefined && (obj.maxSize = Math.round(message.maxSize));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ScalePolicy_AutoScale>, I>>(
        object: I,
    ): ScalePolicy_AutoScale {
        const message = { ...baseScalePolicy_AutoScale } as ScalePolicy_AutoScale;
        message.minSize = object.minSize ?? 0;
        message.maxSize = object.maxSize ?? 0;
        return message;
    },
};

const baseDependencies: object = { pipPackages: '', debPackages: '' };

export const Dependencies = {
    encode(message: Dependencies, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.pipPackages) {
            writer.uint32(10).string(v!);
        }
        for (const v of message.debPackages) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Dependencies {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDependencies } as Dependencies;
        message.pipPackages = [];
        message.debPackages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pipPackages.push(reader.string());
                    break;
                case 2:
                    message.debPackages.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Dependencies {
        const message = { ...baseDependencies } as Dependencies;
        message.pipPackages = (object.pipPackages ?? []).map((e: any) => String(e));
        message.debPackages = (object.debPackages ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: Dependencies): unknown {
        const obj: any = {};
        if (message.pipPackages) {
            obj.pipPackages = message.pipPackages.map((e) => e);
        } else {
            obj.pipPackages = [];
        }
        if (message.debPackages) {
            obj.debPackages = message.debPackages.map((e) => e);
        } else {
            obj.debPackages = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Dependencies>, I>>(object: I): Dependencies {
        const message = { ...baseDependencies } as Dependencies;
        message.pipPackages = object.pipPackages?.map((e) => e) || [];
        message.debPackages = object.debPackages?.map((e) => e) || [];
        return message;
    },
};

const baseMetastore: object = { clusterId: '' };

export const Metastore = {
    encode(message: Metastore, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Metastore {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMetastore } as Metastore;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Metastore {
        const message = { ...baseMetastore } as Metastore;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        return message;
    },

    toJSON(message: Metastore): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Metastore>, I>>(object: I): Metastore {
        const message = { ...baseMetastore } as Metastore;
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

const baseLoggingConfig: object = { enabled: false };

export const LoggingConfig = {
    encode(message: LoggingConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.folderId !== undefined) {
            writer.uint32(18).string(message.folderId);
        }
        if (message.logGroupId !== undefined) {
            writer.uint32(26).string(message.logGroupId);
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
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.logGroupId = reader.string();
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
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : undefined;
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : undefined;
        return message;
    },

    toJSON(message: LoggingConfig): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LoggingConfig>, I>>(object: I): LoggingConfig {
        const message = { ...baseLoggingConfig } as LoggingConfig;
        message.enabled = object.enabled ?? false;
        message.folderId = object.folderId ?? undefined;
        message.logGroupId = object.logGroupId ?? undefined;
        return message;
    },
};

const baseUILink: object = { name: '', url: '' };

export const UILink = {
    encode(message: UILink, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.url !== '') {
            writer.uint32(18).string(message.url);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UILink {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUILink } as UILink;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UILink {
        const message = { ...baseUILink } as UILink;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.url = object.url !== undefined && object.url !== null ? String(object.url) : '';
        return message;
    },

    toJSON(message: UILink): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UILink>, I>>(object: I): UILink {
        const message = { ...baseUILink } as UILink;
        message.name = object.name ?? '';
        message.url = object.url ?? '';
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
