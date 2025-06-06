/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
    MaintenanceWindow,
    MaintenanceOperation,
} from '../../../../yandex/cloud/trino/v1/maintenance';
import {
    LogLevel_Level,
    logLevel_LevelFromJSON,
    logLevel_LevelToJSON,
} from '../../../../yandex/cloud/logging/v1/log_entry';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.trino.v1';

export enum Health {
    /** HEALTH_UNKNOWN - Object is in unknown state (we have no data) */
    HEALTH_UNKNOWN = 0,
    /** ALIVE - Object is alive and well (all hosts are alive) */
    ALIVE = 1,
    /** DEAD - Object is inoperable (it cannot perform any of its essential functions) */
    DEAD = 2,
    /** DEGRADED - Object is partially alive (it can perform some of its essential functions) */
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

/** Trino cluster. */
export interface Cluster {
    /**
     * Unique ID of the Trino cluster.
     * This ID is assigned by Cloud in the process of creating a Trino cluster.
     */
    id: string;
    /** ID of the folder that the Trino cluster belongs to. */
    folderId: string;
    /** The time when the Trino cluster was created. */
    createdAt?: Date;
    /**
     * Name of the Trino cluster.
     * The name is unique within the folder. 1-64 characters long.
     */
    name: string;
    /** Description of the Trino cluster. 0-256 characters long. */
    description: string;
    /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
    labels: { [key: string]: string };
    /** Monitoring systems relevant to the Trino cluster. */
    monitoring: Monitoring[];
    /** Configuration of the Trino cluster. */
    trino?: TrinoConfig;
    /** Aggregated cluster health. */
    health: Health;
    /** Cluster status. */
    status: Cluster_Status;
    /** Network related configuration options. */
    network?: NetworkConfig;
    /** Deletion Protection inhibits deletion of the cluster. */
    deletionProtection: boolean;
    /** Service account used to access Cloud resources. */
    serviceAccountId: string;
    /** Cloud logging configuration. */
    logging?: LoggingConfig;
    /** Address of Trino Coordinator. */
    coordinatorUrl: string;
    /** Window of maintenance operations. */
    maintenanceWindow?: MaintenanceWindow;
    /** Maintenance operation planned at nearest maintenance_window. */
    plannedOperation?: MaintenanceOperation;
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
    /** STOPPING - Cluster is stopping. */
    STOPPING = 4,
    /** STOPPED - Cluster is stopped. */
    STOPPED = 5,
    /** STARTING - Cluster is starting. */
    STARTING = 6,
    /** UPDATING - Cluster is being updated. */
    UPDATING = 7,
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
        case 'STOPPING':
            return Cluster_Status.STOPPING;
        case 5:
        case 'STOPPED':
            return Cluster_Status.STOPPED;
        case 6:
        case 'STARTING':
            return Cluster_Status.STARTING;
        case 7:
        case 'UPDATING':
            return Cluster_Status.UPDATING;
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
        case Cluster_Status.STOPPING:
            return 'STOPPING';
        case Cluster_Status.STOPPED:
            return 'STOPPED';
        case Cluster_Status.STARTING:
            return 'STARTING';
        case Cluster_Status.UPDATING:
            return 'UPDATING';
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
    /** Link to the monitoring system. */
    link: string;
}

export interface LoggingConfig {
    /** Logs generated by the Trino components are delivered to Cloud Logging. */
    enabled: boolean;
    /** Logs should be written to default log group for specified folder. */
    folderId: string | undefined;
    /** Logs should be written to log group resolved by ID. */
    logGroupId: string | undefined;
    /**
     * Minimum log entry level.
     *
     * See [LogLevel.Level] for details.
     */
    minLevel: LogLevel_Level;
}

export interface NetworkConfig {
    /** IDs of VPC network subnets where instances of the cluster are attached. */
    subnetIds: string[];
    /** User security groups. */
    securityGroupIds: string[];
}

export interface TrinoConfig {
    /** Configuration for the coordinator, specifying computational resources and other settings. */
    coordinatorConfig?: CoordinatorConfig;
    /** Configuration for worker nodes, including scaling policy and computational resources. */
    workerConfig?: WorkerConfig;
    /** Version of Trino. */
    version: string;
    /** Configuration for retry policy, specifying the spooling storage destination and other settings. */
    retryPolicy?: RetryPolicyConfig;
}

export interface CoordinatorConfig {
    /** Configuration for computational resources assigned to the coordinator instance. */
    resources?: Resources;
}

export interface WorkerConfig {
    /** Configuration for computational resources for worker instances. */
    resources?: Resources;
    /** Configuration for scaling policy for worker instances. */
    scalePolicy?: WorkerConfig_WorkerScalePolicy;
}

export interface WorkerConfig_WorkerScalePolicy {
    /** A fixed scaling policy that specifies a fixed number of worker instances. */
    fixedScale?: FixedScalePolicy | undefined;
    /**
     * A scaling policy that dynamically adjusts the number of worker instances
     * based on the cluster's workload. The system automatically increases or
     * decreases the number of instances within the defined range.
     */
    autoScale?: AutoScalePolicy | undefined;
}

export interface RetryPolicyConfig {
    /** Retry policy level. */
    policy: RetryPolicyConfig_RetryPolicy;
    /** Configuration for exchange manager. */
    exchangeManager?: ExchangeManagerConfig;
    /** Additional properties. */
    additionalProperties: { [key: string]: string };
}

export enum RetryPolicyConfig_RetryPolicy {
    RETRY_POLICY_UNSPECIFIED = 0,
    QUERY = 1,
    TASK = 2,
    UNRECOGNIZED = -1,
}

export function retryPolicyConfig_RetryPolicyFromJSON(object: any): RetryPolicyConfig_RetryPolicy {
    switch (object) {
        case 0:
        case 'RETRY_POLICY_UNSPECIFIED':
            return RetryPolicyConfig_RetryPolicy.RETRY_POLICY_UNSPECIFIED;
        case 1:
        case 'QUERY':
            return RetryPolicyConfig_RetryPolicy.QUERY;
        case 2:
        case 'TASK':
            return RetryPolicyConfig_RetryPolicy.TASK;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return RetryPolicyConfig_RetryPolicy.UNRECOGNIZED;
    }
}

export function retryPolicyConfig_RetryPolicyToJSON(object: RetryPolicyConfig_RetryPolicy): string {
    switch (object) {
        case RetryPolicyConfig_RetryPolicy.RETRY_POLICY_UNSPECIFIED:
            return 'RETRY_POLICY_UNSPECIFIED';
        case RetryPolicyConfig_RetryPolicy.QUERY:
            return 'QUERY';
        case RetryPolicyConfig_RetryPolicy.TASK:
            return 'TASK';
        default:
            return 'UNKNOWN';
    }
}

export interface RetryPolicyConfig_AdditionalPropertiesEntry {
    key: string;
    value: string;
}

export interface ExchangeManagerStorage {
    /** Use service side s3 bucket for exchange manager. */
    serviceS3?: ExchangeManagerStorage_ServiceS3 | undefined;
}

export interface ExchangeManagerStorage_ServiceS3 {}

export interface ExchangeManagerConfig {
    /** Additional properties. */
    additionalProperties: { [key: string]: string };
    storage?: ExchangeManagerStorage;
}

export interface ExchangeManagerConfig_AdditionalPropertiesEntry {
    key: string;
    value: string;
}

export interface Resources {
    /** ID of the preset for computational resources allocated to a instance (e.g., CPU, memory, etc.). */
    resourcePresetId: string;
}

export interface FixedScalePolicy {
    /** Specifies the number of worker instances. */
    count: number;
}

export interface AutoScalePolicy {
    minCount: number;
    maxCount: number;
}

const baseCluster: object = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    health: 0,
    status: 0,
    deletionProtection: false,
    serviceAccountId: '',
    coordinatorUrl: '',
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
        for (const v of message.monitoring) {
            Monitoring.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        if (message.trino !== undefined) {
            TrinoConfig.encode(message.trino, writer.uint32(66).fork()).ldelim();
        }
        if (message.health !== 0) {
            writer.uint32(72).int32(message.health);
        }
        if (message.status !== 0) {
            writer.uint32(80).int32(message.status);
        }
        if (message.network !== undefined) {
            NetworkConfig.encode(message.network, writer.uint32(90).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(96).bool(message.deletionProtection);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(106).string(message.serviceAccountId);
        }
        if (message.logging !== undefined) {
            LoggingConfig.encode(message.logging, writer.uint32(114).fork()).ldelim();
        }
        if (message.coordinatorUrl !== '') {
            writer.uint32(122).string(message.coordinatorUrl);
        }
        if (message.maintenanceWindow !== undefined) {
            MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(130).fork()).ldelim();
        }
        if (message.plannedOperation !== undefined) {
            MaintenanceOperation.encode(
                message.plannedOperation,
                writer.uint32(138).fork(),
            ).ldelim();
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
                    message.trino = TrinoConfig.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.health = reader.int32() as any;
                    break;
                case 10:
                    message.status = reader.int32() as any;
                    break;
                case 11:
                    message.network = NetworkConfig.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.deletionProtection = reader.bool();
                    break;
                case 13:
                    message.serviceAccountId = reader.string();
                    break;
                case 14:
                    message.logging = LoggingConfig.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.coordinatorUrl = reader.string();
                    break;
                case 16:
                    message.maintenanceWindow = MaintenanceWindow.decode(reader, reader.uint32());
                    break;
                case 17:
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
        message.monitoring = (object.monitoring ?? []).map((e: any) => Monitoring.fromJSON(e));
        message.trino =
            object.trino !== undefined && object.trino !== null
                ? TrinoConfig.fromJSON(object.trino)
                : undefined;
        message.health =
            object.health !== undefined && object.health !== null
                ? healthFromJSON(object.health)
                : 0;
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
        message.coordinatorUrl =
            object.coordinatorUrl !== undefined && object.coordinatorUrl !== null
                ? String(object.coordinatorUrl)
                : '';
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
        if (message.monitoring) {
            obj.monitoring = message.monitoring.map((e) => (e ? Monitoring.toJSON(e) : undefined));
        } else {
            obj.monitoring = [];
        }
        message.trino !== undefined &&
            (obj.trino = message.trino ? TrinoConfig.toJSON(message.trino) : undefined);
        message.health !== undefined && (obj.health = healthToJSON(message.health));
        message.status !== undefined && (obj.status = cluster_StatusToJSON(message.status));
        message.network !== undefined &&
            (obj.network = message.network ? NetworkConfig.toJSON(message.network) : undefined);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.logging !== undefined &&
            (obj.logging = message.logging ? LoggingConfig.toJSON(message.logging) : undefined);
        message.coordinatorUrl !== undefined && (obj.coordinatorUrl = message.coordinatorUrl);
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
        message.monitoring = object.monitoring?.map((e) => Monitoring.fromPartial(e)) || [];
        message.trino =
            object.trino !== undefined && object.trino !== null
                ? TrinoConfig.fromPartial(object.trino)
                : undefined;
        message.health = object.health ?? 0;
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
        message.coordinatorUrl = object.coordinatorUrl ?? '';
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

const baseTrinoConfig: object = { version: '' };

export const TrinoConfig = {
    encode(message: TrinoConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.coordinatorConfig !== undefined) {
            CoordinatorConfig.encode(message.coordinatorConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.workerConfig !== undefined) {
            WorkerConfig.encode(message.workerConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.version !== '') {
            writer.uint32(26).string(message.version);
        }
        if (message.retryPolicy !== undefined) {
            RetryPolicyConfig.encode(message.retryPolicy, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TrinoConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrinoConfig } as TrinoConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coordinatorConfig = CoordinatorConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.workerConfig = WorkerConfig.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.version = reader.string();
                    break;
                case 4:
                    message.retryPolicy = RetryPolicyConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TrinoConfig {
        const message = { ...baseTrinoConfig } as TrinoConfig;
        message.coordinatorConfig =
            object.coordinatorConfig !== undefined && object.coordinatorConfig !== null
                ? CoordinatorConfig.fromJSON(object.coordinatorConfig)
                : undefined;
        message.workerConfig =
            object.workerConfig !== undefined && object.workerConfig !== null
                ? WorkerConfig.fromJSON(object.workerConfig)
                : undefined;
        message.version =
            object.version !== undefined && object.version !== null ? String(object.version) : '';
        message.retryPolicy =
            object.retryPolicy !== undefined && object.retryPolicy !== null
                ? RetryPolicyConfig.fromJSON(object.retryPolicy)
                : undefined;
        return message;
    },

    toJSON(message: TrinoConfig): unknown {
        const obj: any = {};
        message.coordinatorConfig !== undefined &&
            (obj.coordinatorConfig = message.coordinatorConfig
                ? CoordinatorConfig.toJSON(message.coordinatorConfig)
                : undefined);
        message.workerConfig !== undefined &&
            (obj.workerConfig = message.workerConfig
                ? WorkerConfig.toJSON(message.workerConfig)
                : undefined);
        message.version !== undefined && (obj.version = message.version);
        message.retryPolicy !== undefined &&
            (obj.retryPolicy = message.retryPolicy
                ? RetryPolicyConfig.toJSON(message.retryPolicy)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TrinoConfig>, I>>(object: I): TrinoConfig {
        const message = { ...baseTrinoConfig } as TrinoConfig;
        message.coordinatorConfig =
            object.coordinatorConfig !== undefined && object.coordinatorConfig !== null
                ? CoordinatorConfig.fromPartial(object.coordinatorConfig)
                : undefined;
        message.workerConfig =
            object.workerConfig !== undefined && object.workerConfig !== null
                ? WorkerConfig.fromPartial(object.workerConfig)
                : undefined;
        message.version = object.version ?? '';
        message.retryPolicy =
            object.retryPolicy !== undefined && object.retryPolicy !== null
                ? RetryPolicyConfig.fromPartial(object.retryPolicy)
                : undefined;
        return message;
    },
};

const baseCoordinatorConfig: object = {};

export const CoordinatorConfig = {
    encode(message: CoordinatorConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CoordinatorConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCoordinatorConfig } as CoordinatorConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CoordinatorConfig {
        const message = { ...baseCoordinatorConfig } as CoordinatorConfig;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },

    toJSON(message: CoordinatorConfig): unknown {
        const obj: any = {};
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CoordinatorConfig>, I>>(object: I): CoordinatorConfig {
        const message = { ...baseCoordinatorConfig } as CoordinatorConfig;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};

const baseWorkerConfig: object = {};

export const WorkerConfig = {
    encode(message: WorkerConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            WorkerConfig_WorkerScalePolicy.encode(
                message.scalePolicy,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): WorkerConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWorkerConfig } as WorkerConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.scalePolicy = WorkerConfig_WorkerScalePolicy.decode(
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

    fromJSON(object: any): WorkerConfig {
        const message = { ...baseWorkerConfig } as WorkerConfig;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? WorkerConfig_WorkerScalePolicy.fromJSON(object.scalePolicy)
                : undefined;
        return message;
    },

    toJSON(message: WorkerConfig): unknown {
        const obj: any = {};
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? WorkerConfig_WorkerScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<WorkerConfig>, I>>(object: I): WorkerConfig {
        const message = { ...baseWorkerConfig } as WorkerConfig;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? WorkerConfig_WorkerScalePolicy.fromPartial(object.scalePolicy)
                : undefined;
        return message;
    },
};

const baseWorkerConfig_WorkerScalePolicy: object = {};

export const WorkerConfig_WorkerScalePolicy = {
    encode(
        message: WorkerConfig_WorkerScalePolicy,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.fixedScale !== undefined) {
            FixedScalePolicy.encode(message.fixedScale, writer.uint32(10).fork()).ldelim();
        }
        if (message.autoScale !== undefined) {
            AutoScalePolicy.encode(message.autoScale, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): WorkerConfig_WorkerScalePolicy {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWorkerConfig_WorkerScalePolicy } as WorkerConfig_WorkerScalePolicy;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fixedScale = FixedScalePolicy.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.autoScale = AutoScalePolicy.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WorkerConfig_WorkerScalePolicy {
        const message = { ...baseWorkerConfig_WorkerScalePolicy } as WorkerConfig_WorkerScalePolicy;
        message.fixedScale =
            object.fixedScale !== undefined && object.fixedScale !== null
                ? FixedScalePolicy.fromJSON(object.fixedScale)
                : undefined;
        message.autoScale =
            object.autoScale !== undefined && object.autoScale !== null
                ? AutoScalePolicy.fromJSON(object.autoScale)
                : undefined;
        return message;
    },

    toJSON(message: WorkerConfig_WorkerScalePolicy): unknown {
        const obj: any = {};
        message.fixedScale !== undefined &&
            (obj.fixedScale = message.fixedScale
                ? FixedScalePolicy.toJSON(message.fixedScale)
                : undefined);
        message.autoScale !== undefined &&
            (obj.autoScale = message.autoScale
                ? AutoScalePolicy.toJSON(message.autoScale)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<WorkerConfig_WorkerScalePolicy>, I>>(
        object: I,
    ): WorkerConfig_WorkerScalePolicy {
        const message = { ...baseWorkerConfig_WorkerScalePolicy } as WorkerConfig_WorkerScalePolicy;
        message.fixedScale =
            object.fixedScale !== undefined && object.fixedScale !== null
                ? FixedScalePolicy.fromPartial(object.fixedScale)
                : undefined;
        message.autoScale =
            object.autoScale !== undefined && object.autoScale !== null
                ? AutoScalePolicy.fromPartial(object.autoScale)
                : undefined;
        return message;
    },
};

const baseRetryPolicyConfig: object = { policy: 0 };

export const RetryPolicyConfig = {
    encode(message: RetryPolicyConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.policy !== 0) {
            writer.uint32(8).int32(message.policy);
        }
        if (message.exchangeManager !== undefined) {
            ExchangeManagerConfig.encode(
                message.exchangeManager,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        Object.entries(message.additionalProperties).forEach(([key, value]) => {
            RetryPolicyConfig_AdditionalPropertiesEntry.encode(
                { key: key as any, value },
                writer.uint32(26).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RetryPolicyConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRetryPolicyConfig } as RetryPolicyConfig;
        message.additionalProperties = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policy = reader.int32() as any;
                    break;
                case 2:
                    message.exchangeManager = ExchangeManagerConfig.decode(reader, reader.uint32());
                    break;
                case 3:
                    const entry3 = RetryPolicyConfig_AdditionalPropertiesEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry3.value !== undefined) {
                        message.additionalProperties[entry3.key] = entry3.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RetryPolicyConfig {
        const message = { ...baseRetryPolicyConfig } as RetryPolicyConfig;
        message.policy =
            object.policy !== undefined && object.policy !== null
                ? retryPolicyConfig_RetryPolicyFromJSON(object.policy)
                : 0;
        message.exchangeManager =
            object.exchangeManager !== undefined && object.exchangeManager !== null
                ? ExchangeManagerConfig.fromJSON(object.exchangeManager)
                : undefined;
        message.additionalProperties = Object.entries(object.additionalProperties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },

    toJSON(message: RetryPolicyConfig): unknown {
        const obj: any = {};
        message.policy !== undefined &&
            (obj.policy = retryPolicyConfig_RetryPolicyToJSON(message.policy));
        message.exchangeManager !== undefined &&
            (obj.exchangeManager = message.exchangeManager
                ? ExchangeManagerConfig.toJSON(message.exchangeManager)
                : undefined);
        obj.additionalProperties = {};
        if (message.additionalProperties) {
            Object.entries(message.additionalProperties).forEach(([k, v]) => {
                obj.additionalProperties[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RetryPolicyConfig>, I>>(object: I): RetryPolicyConfig {
        const message = { ...baseRetryPolicyConfig } as RetryPolicyConfig;
        message.policy = object.policy ?? 0;
        message.exchangeManager =
            object.exchangeManager !== undefined && object.exchangeManager !== null
                ? ExchangeManagerConfig.fromPartial(object.exchangeManager)
                : undefined;
        message.additionalProperties = Object.entries(object.additionalProperties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};

const baseRetryPolicyConfig_AdditionalPropertiesEntry: object = { key: '', value: '' };

export const RetryPolicyConfig_AdditionalPropertiesEntry = {
    encode(
        message: RetryPolicyConfig_AdditionalPropertiesEntry,
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): RetryPolicyConfig_AdditionalPropertiesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRetryPolicyConfig_AdditionalPropertiesEntry,
        } as RetryPolicyConfig_AdditionalPropertiesEntry;
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

    fromJSON(object: any): RetryPolicyConfig_AdditionalPropertiesEntry {
        const message = {
            ...baseRetryPolicyConfig_AdditionalPropertiesEntry,
        } as RetryPolicyConfig_AdditionalPropertiesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: RetryPolicyConfig_AdditionalPropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RetryPolicyConfig_AdditionalPropertiesEntry>, I>>(
        object: I,
    ): RetryPolicyConfig_AdditionalPropertiesEntry {
        const message = {
            ...baseRetryPolicyConfig_AdditionalPropertiesEntry,
        } as RetryPolicyConfig_AdditionalPropertiesEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseExchangeManagerStorage: object = {};

export const ExchangeManagerStorage = {
    encode(message: ExchangeManagerStorage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.serviceS3 !== undefined) {
            ExchangeManagerStorage_ServiceS3.encode(
                message.serviceS3,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeManagerStorage {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExchangeManagerStorage } as ExchangeManagerStorage;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceS3 = ExchangeManagerStorage_ServiceS3.decode(
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

    fromJSON(object: any): ExchangeManagerStorage {
        const message = { ...baseExchangeManagerStorage } as ExchangeManagerStorage;
        message.serviceS3 =
            object.serviceS3 !== undefined && object.serviceS3 !== null
                ? ExchangeManagerStorage_ServiceS3.fromJSON(object.serviceS3)
                : undefined;
        return message;
    },

    toJSON(message: ExchangeManagerStorage): unknown {
        const obj: any = {};
        message.serviceS3 !== undefined &&
            (obj.serviceS3 = message.serviceS3
                ? ExchangeManagerStorage_ServiceS3.toJSON(message.serviceS3)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ExchangeManagerStorage>, I>>(
        object: I,
    ): ExchangeManagerStorage {
        const message = { ...baseExchangeManagerStorage } as ExchangeManagerStorage;
        message.serviceS3 =
            object.serviceS3 !== undefined && object.serviceS3 !== null
                ? ExchangeManagerStorage_ServiceS3.fromPartial(object.serviceS3)
                : undefined;
        return message;
    },
};

const baseExchangeManagerStorage_ServiceS3: object = {};

export const ExchangeManagerStorage_ServiceS3 = {
    encode(
        _: ExchangeManagerStorage_ServiceS3,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeManagerStorage_ServiceS3 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseExchangeManagerStorage_ServiceS3,
        } as ExchangeManagerStorage_ServiceS3;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): ExchangeManagerStorage_ServiceS3 {
        const message = {
            ...baseExchangeManagerStorage_ServiceS3,
        } as ExchangeManagerStorage_ServiceS3;
        return message;
    },

    toJSON(_: ExchangeManagerStorage_ServiceS3): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ExchangeManagerStorage_ServiceS3>, I>>(
        _: I,
    ): ExchangeManagerStorage_ServiceS3 {
        const message = {
            ...baseExchangeManagerStorage_ServiceS3,
        } as ExchangeManagerStorage_ServiceS3;
        return message;
    },
};

const baseExchangeManagerConfig: object = {};

export const ExchangeManagerConfig = {
    encode(message: ExchangeManagerConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        Object.entries(message.additionalProperties).forEach(([key, value]) => {
            ExchangeManagerConfig_AdditionalPropertiesEntry.encode(
                { key: key as any, value },
                writer.uint32(10).fork(),
            ).ldelim();
        });
        if (message.storage !== undefined) {
            ExchangeManagerStorage.encode(message.storage, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeManagerConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExchangeManagerConfig } as ExchangeManagerConfig;
        message.additionalProperties = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = ExchangeManagerConfig_AdditionalPropertiesEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry1.value !== undefined) {
                        message.additionalProperties[entry1.key] = entry1.value;
                    }
                    break;
                case 2:
                    message.storage = ExchangeManagerStorage.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ExchangeManagerConfig {
        const message = { ...baseExchangeManagerConfig } as ExchangeManagerConfig;
        message.additionalProperties = Object.entries(object.additionalProperties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? ExchangeManagerStorage.fromJSON(object.storage)
                : undefined;
        return message;
    },

    toJSON(message: ExchangeManagerConfig): unknown {
        const obj: any = {};
        obj.additionalProperties = {};
        if (message.additionalProperties) {
            Object.entries(message.additionalProperties).forEach(([k, v]) => {
                obj.additionalProperties[k] = v;
            });
        }
        message.storage !== undefined &&
            (obj.storage = message.storage
                ? ExchangeManagerStorage.toJSON(message.storage)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ExchangeManagerConfig>, I>>(
        object: I,
    ): ExchangeManagerConfig {
        const message = { ...baseExchangeManagerConfig } as ExchangeManagerConfig;
        message.additionalProperties = Object.entries(object.additionalProperties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? ExchangeManagerStorage.fromPartial(object.storage)
                : undefined;
        return message;
    },
};

const baseExchangeManagerConfig_AdditionalPropertiesEntry: object = { key: '', value: '' };

export const ExchangeManagerConfig_AdditionalPropertiesEntry = {
    encode(
        message: ExchangeManagerConfig_AdditionalPropertiesEntry,
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): ExchangeManagerConfig_AdditionalPropertiesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseExchangeManagerConfig_AdditionalPropertiesEntry,
        } as ExchangeManagerConfig_AdditionalPropertiesEntry;
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

    fromJSON(object: any): ExchangeManagerConfig_AdditionalPropertiesEntry {
        const message = {
            ...baseExchangeManagerConfig_AdditionalPropertiesEntry,
        } as ExchangeManagerConfig_AdditionalPropertiesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: ExchangeManagerConfig_AdditionalPropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ExchangeManagerConfig_AdditionalPropertiesEntry>, I>>(
        object: I,
    ): ExchangeManagerConfig_AdditionalPropertiesEntry {
        const message = {
            ...baseExchangeManagerConfig_AdditionalPropertiesEntry,
        } as ExchangeManagerConfig_AdditionalPropertiesEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
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

const baseFixedScalePolicy: object = { count: 0 };

export const FixedScalePolicy = {
    encode(message: FixedScalePolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.count !== 0) {
            writer.uint32(8).int64(message.count);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): FixedScalePolicy {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFixedScalePolicy } as FixedScalePolicy;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.count = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): FixedScalePolicy {
        const message = { ...baseFixedScalePolicy } as FixedScalePolicy;
        message.count =
            object.count !== undefined && object.count !== null ? Number(object.count) : 0;
        return message;
    },

    toJSON(message: FixedScalePolicy): unknown {
        const obj: any = {};
        message.count !== undefined && (obj.count = Math.round(message.count));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<FixedScalePolicy>, I>>(object: I): FixedScalePolicy {
        const message = { ...baseFixedScalePolicy } as FixedScalePolicy;
        message.count = object.count ?? 0;
        return message;
    },
};

const baseAutoScalePolicy: object = { minCount: 0, maxCount: 0 };

export const AutoScalePolicy = {
    encode(message: AutoScalePolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.minCount !== 0) {
            writer.uint32(8).int64(message.minCount);
        }
        if (message.maxCount !== 0) {
            writer.uint32(16).int64(message.maxCount);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AutoScalePolicy {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAutoScalePolicy } as AutoScalePolicy;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minCount = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.maxCount = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AutoScalePolicy {
        const message = { ...baseAutoScalePolicy } as AutoScalePolicy;
        message.minCount =
            object.minCount !== undefined && object.minCount !== null ? Number(object.minCount) : 0;
        message.maxCount =
            object.maxCount !== undefined && object.maxCount !== null ? Number(object.maxCount) : 0;
        return message;
    },

    toJSON(message: AutoScalePolicy): unknown {
        const obj: any = {};
        message.minCount !== undefined && (obj.minCount = Math.round(message.minCount));
        message.maxCount !== undefined && (obj.maxCount = Math.round(message.maxCount));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AutoScalePolicy>, I>>(object: I): AutoScalePolicy {
        const message = { ...baseAutoScalePolicy } as AutoScalePolicy;
        message.minCount = object.minCount ?? 0;
        message.maxCount = object.maxCount ?? 0;
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
