/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
    MaintenanceWindow,
    MaintenanceOperation,
} from '../../../../yandex/cloud/metastore/v1/maintenance';
import {
    LogLevel_Level,
    logLevel_LevelFromJSON,
    logLevel_LevelToJSON,
} from '../../../../yandex/cloud/logging/v1/log_entry';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.metastore.v1';

/** Hive Metastore Cluster. */
export interface Cluster {
    /**
     * ID of the Metastore cluster.
     * This ID is assigned by MDB at creation time.
     */
    id: string;
    /** ID of the folder that the Metastore cluster belongs to. */
    folderId: string;
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt?: Date;
    /**
     * Name of the Metastore cluster.
     * The name is unique within the folder. 1-63 characters long.
     */
    name: string;
    /** Description of the Metastore cluster. 0-256 characters long. */
    description: string;
    /**
     * Custom labels for the Metastore cluster as `` key:value `` pairs.
     * Maximum 64 per resource.
     */
    labels: { [key: string]: string };
    /** Aggregated cluster health. */
    health: Cluster_Health;
    /** Current state of the cluster. */
    status: Cluster_Status;
    /**
     * Subnet ids to put metastore servers
     *
     * @deprecated
     */
    subnetIds: string[];
    /** Minimum number of metastore servers per zone */
    minServersPerZone: number;
    /** Maximum number of metastore servers per zone */
    maxServersPerZone: number;
    /** Actual number of metastore servers per zone */
    serversPerZone: number;
    /**
     * User security groups
     *
     * @deprecated
     */
    securityGroupIds: string[];
    /** Host groups hosting VMs of the cluster. */
    hostGroupIds: string[];
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
    /** Metastore server version */
    version: string;
    /** Metastore network */
    networkId: string;
    /** IP address of metastore server balancer endpoint */
    endpointIp: string;
    /** Metastore cluster configuration */
    clusterConfig?: ClusterConfig;
    /** Service account that will be used to access a YC resources */
    serviceAccountId: string;
    /** Cloud logging configuration */
    logging?: LoggingConfig;
    /** Network related configuration options. */
    network?: NetworkConfig;
    /** Window of maintenance operations. */
    maintenanceWindow?: MaintenanceWindow;
    /** Maintenance operation planned at nearest maintenance_window. */
    plannedOperation?: MaintenanceOperation;
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

export interface ClusterConfig {
    resources?: Resources;
}

export interface NetworkConfig {
    /** IDs of VPC network subnets where instances of the cluster are attached. */
    subnetIds: string[];
    /** User security groups. */
    securityGroupIds: string[];
}

export interface Resources {
    /** ID of the preset for computational resources available to a pod (CPU, memory etc.). */
    resourcePresetId: string;
}

export interface LoggingConfig {
    enabled: boolean;
    folderId: string | undefined;
    logGroupId: string | undefined;
    minLevel: LogLevel_Level;
}

const baseCluster: object = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    health: 0,
    status: 0,
    subnetIds: '',
    minServersPerZone: 0,
    maxServersPerZone: 0,
    serversPerZone: 0,
    securityGroupIds: '',
    hostGroupIds: '',
    deletionProtection: false,
    version: '',
    networkId: '',
    endpointIp: '',
    serviceAccountId: '',
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
        if (message.health !== 0) {
            writer.uint32(64).int32(message.health);
        }
        if (message.status !== 0) {
            writer.uint32(72).int32(message.status);
        }
        for (const v of message.subnetIds) {
            writer.uint32(82).string(v!);
        }
        if (message.minServersPerZone !== 0) {
            writer.uint32(88).int64(message.minServersPerZone);
        }
        if (message.maxServersPerZone !== 0) {
            writer.uint32(96).int64(message.maxServersPerZone);
        }
        if (message.serversPerZone !== 0) {
            writer.uint32(104).int64(message.serversPerZone);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(114).string(v!);
        }
        for (const v of message.hostGroupIds) {
            writer.uint32(122).string(v!);
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
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Cluster {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCluster } as Cluster;
        message.labels = {};
        message.subnetIds = [];
        message.securityGroupIds = [];
        message.hostGroupIds = [];
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
                case 8:
                    message.health = reader.int32() as any;
                    break;
                case 9:
                    message.status = reader.int32() as any;
                    break;
                case 10:
                    message.subnetIds.push(reader.string());
                    break;
                case 11:
                    message.minServersPerZone = longToNumber(reader.int64() as Long);
                    break;
                case 12:
                    message.maxServersPerZone = longToNumber(reader.int64() as Long);
                    break;
                case 13:
                    message.serversPerZone = longToNumber(reader.int64() as Long);
                    break;
                case 14:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 15:
                    message.hostGroupIds.push(reader.string());
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
        message.health =
            object.health !== undefined && object.health !== null
                ? cluster_HealthFromJSON(object.health)
                : 0;
        message.status =
            object.status !== undefined && object.status !== null
                ? cluster_StatusFromJSON(object.status)
                : 0;
        message.subnetIds = (object.subnetIds ?? []).map((e: any) => String(e));
        message.minServersPerZone =
            object.minServersPerZone !== undefined && object.minServersPerZone !== null
                ? Number(object.minServersPerZone)
                : 0;
        message.maxServersPerZone =
            object.maxServersPerZone !== undefined && object.maxServersPerZone !== null
                ? Number(object.maxServersPerZone)
                : 0;
        message.serversPerZone =
            object.serversPerZone !== undefined && object.serversPerZone !== null
                ? Number(object.serversPerZone)
                : 0;
        message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) => String(e));
        message.hostGroupIds = (object.hostGroupIds ?? []).map((e: any) => String(e));
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
        message.health !== undefined && (obj.health = cluster_HealthToJSON(message.health));
        message.status !== undefined && (obj.status = cluster_StatusToJSON(message.status));
        if (message.subnetIds) {
            obj.subnetIds = message.subnetIds.map((e) => e);
        } else {
            obj.subnetIds = [];
        }
        message.minServersPerZone !== undefined &&
            (obj.minServersPerZone = Math.round(message.minServersPerZone));
        message.maxServersPerZone !== undefined &&
            (obj.maxServersPerZone = Math.round(message.maxServersPerZone));
        message.serversPerZone !== undefined &&
            (obj.serversPerZone = Math.round(message.serversPerZone));
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        } else {
            obj.securityGroupIds = [];
        }
        if (message.hostGroupIds) {
            obj.hostGroupIds = message.hostGroupIds.map((e) => e);
        } else {
            obj.hostGroupIds = [];
        }
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
        message.health = object.health ?? 0;
        message.status = object.status ?? 0;
        message.subnetIds = object.subnetIds?.map((e) => e) || [];
        message.minServersPerZone = object.minServersPerZone ?? 0;
        message.maxServersPerZone = object.maxServersPerZone ?? 0;
        message.serversPerZone = object.serversPerZone ?? 0;
        message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
        message.hostGroupIds = object.hostGroupIds?.map((e) => e) || [];
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
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
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
        return message;
    },

    toJSON(message: ClusterConfig): unknown {
        const obj: any = {};
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClusterConfig>, I>>(object: I): ClusterConfig {
        const message = { ...baseClusterConfig } as ClusterConfig;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
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

const baseResources: object = { resourcePresetId: '' };

export const Resources = {
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
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.logGroupId = reader.string();
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
        message.minLevel =
            object.minLevel !== undefined && object.minLevel !== null
                ? logLevel_LevelFromJSON(object.minLevel)
                : 0;
        return message;
    },

    toJSON(message: LoggingConfig): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        message.minLevel !== undefined && (obj.minLevel = logLevel_LevelToJSON(message.minLevel));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LoggingConfig>, I>>(object: I): LoggingConfig {
        const message = { ...baseLoggingConfig } as LoggingConfig;
        message.enabled = object.enabled ?? false;
        message.folderId = object.folderId ?? undefined;
        message.logGroupId = object.logGroupId ?? undefined;
        message.minLevel = object.minLevel ?? 0;
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
