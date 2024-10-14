/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  Health,
  Resources,
  healthFromJSON,
  healthToJSON,
} from "../../../../yandex/cloud/airflow/v1/common";
import {
  LogLevel_Level,
  logLevel_LevelFromJSON,
  logLevel_LevelToJSON,
} from "../../../../yandex/cloud/logging/v1/log_entry";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.airflow.v1";

/** Apache Airflow cluster. */
export interface Cluster {
  $type: "yandex.cloud.airflow.v1.Cluster";
  /**
   * Unique ID of the Apache Airflow cluster.
   * This ID is assigned by Cloud during cluster creation.
   */
  id: string;
  /** ID of the folder that the Apache Airflow cluster belongs to. */
  folderId: string;
  /** The time when the Apache Airflow cluster was created. */
  createdAt?: Date;
  /**
   * Name of the Apache Airflow cluster.
   * The name is unique within the folder. 1-64 characters long.
   */
  name: string;
  /** Description of the Apache Airflow cluster. 0-256 characters long. */
  description: string;
  /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
  labels: { [key: string]: string };
  /** Monitoring systems relevant to the Apache Airflow cluster. */
  monitoring: Monitoring[];
  /** Configuration of Apache Airflow components. */
  config?: ClusterConfig;
  /** Aggregated cluster health. */
  health: Health;
  /** Cluster status. */
  status: Cluster_Status;
  /** Network related configuration options. */
  network?: NetworkConfig;
  /** Parameters of the location and access to the code that will be executed in the cluster. */
  codeSync?: CodeSyncConfig;
  /** Deletion Protection inhibits deletion of the cluster. */
  deletionProtection: boolean;
  /** Address of Apache Airflow web UI. */
  webserverUrl: string;
  /**
   * Service account used to access Cloud resources.
   * For more information, see [documentation](/docs/managed-airflow/concepts/impersonation).
   */
  serviceAccountId: string;
  /** Cloud Logging configuration. */
  logging?: LoggingConfig;
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
    case "STATUS_UNKNOWN":
      return Cluster_Status.STATUS_UNKNOWN;
    case 1:
    case "CREATING":
      return Cluster_Status.CREATING;
    case 2:
    case "RUNNING":
      return Cluster_Status.RUNNING;
    case 3:
    case "ERROR":
      return Cluster_Status.ERROR;
    case 4:
    case "STOPPING":
      return Cluster_Status.STOPPING;
    case 5:
    case "STOPPED":
      return Cluster_Status.STOPPED;
    case 6:
    case "STARTING":
      return Cluster_Status.STARTING;
    case 7:
    case "UPDATING":
      return Cluster_Status.UPDATING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Cluster_Status.UNRECOGNIZED;
  }
}

export function cluster_StatusToJSON(object: Cluster_Status): string {
  switch (object) {
    case Cluster_Status.STATUS_UNKNOWN:
      return "STATUS_UNKNOWN";
    case Cluster_Status.CREATING:
      return "CREATING";
    case Cluster_Status.RUNNING:
      return "RUNNING";
    case Cluster_Status.ERROR:
      return "ERROR";
    case Cluster_Status.STOPPING:
      return "STOPPING";
    case Cluster_Status.STOPPED:
      return "STOPPED";
    case Cluster_Status.STARTING:
      return "STARTING";
    case Cluster_Status.UPDATING:
      return "UPDATING";
    default:
      return "UNKNOWN";
  }
}

export interface Cluster_LabelsEntry {
  $type: "yandex.cloud.airflow.v1.Cluster.LabelsEntry";
  key: string;
  value: string;
}

/** Monitoring system. */
export interface Monitoring {
  $type: "yandex.cloud.airflow.v1.Monitoring";
  /** Name of the monitoring system. */
  name: string;
  /** Description of the monitoring system. */
  description: string;
  /** Link to the monitoring system. */
  link: string;
}

export interface ClusterConfig {
  $type: "yandex.cloud.airflow.v1.ClusterConfig";
  /** Version of Apache that runs on the cluster. */
  versionId: string;
  /** Configuration of the Apache Airflow application itself. */
  airflow?: AirflowConfig;
  /** Configuration of webserver instances. */
  webserver?: WebserverConfig;
  /** Configuration of scheduler instances. */
  scheduler?: SchedulerConfig;
  /** Configuration of triggerer instances. */
  triggerer?: TriggererConfig;
  /** Configuration of worker instances. */
  worker?: WorkerConfig;
  /** The list of additional packages installed in the cluster. */
  dependencies?: Dependencies;
  /** Configuration of Lockbox Secret Backend. */
  lockbox?: LockboxConfig;
}

export interface AirflowConfig {
  $type: "yandex.cloud.airflow.v1.AirflowConfig";
  /** Properties to be passed to Apache Airflow configuration file. */
  config: { [key: string]: string };
}

export interface AirflowConfig_ConfigEntry {
  $type: "yandex.cloud.airflow.v1.AirflowConfig.ConfigEntry";
  key: string;
  value: string;
}

export interface WebserverConfig {
  $type: "yandex.cloud.airflow.v1.WebserverConfig";
  /** The number of webserver instances in the cluster. */
  count: number;
  /** Resources allocated to webserver instances. */
  resources?: Resources;
}

export interface SchedulerConfig {
  $type: "yandex.cloud.airflow.v1.SchedulerConfig";
  /** The number of scheduler instances in the cluster. */
  count: number;
  /** Resources allocated to scheduler instances. */
  resources?: Resources;
}

export interface TriggererConfig {
  $type: "yandex.cloud.airflow.v1.TriggererConfig";
  /** The number of triggerer instances in the cluster. */
  count: number;
  /** Resources allocated to triggerer instances. */
  resources?: Resources;
}

export interface WorkerConfig {
  $type: "yandex.cloud.airflow.v1.WorkerConfig";
  /** The minimum number of worker instances in the cluster. */
  minCount: number;
  /** The maximum number of worker instances in the cluster. */
  maxCount: number;
  /** Resources allocated to worker instances. */
  resources?: Resources;
}

export interface Dependencies {
  $type: "yandex.cloud.airflow.v1.Dependencies";
  /** Python packages that are installed in the cluster. */
  pipPackages: string[];
  /** System packages that are installed in the cluster. */
  debPackages: string[];
}

export interface NetworkConfig {
  $type: "yandex.cloud.airflow.v1.NetworkConfig";
  /** IDs of VPC network subnets where instances of the cluster are attached. */
  subnetIds: string[];
  /** User security groups. */
  securityGroupIds: string[];
}

export interface S3Config {
  $type: "yandex.cloud.airflow.v1.S3Config";
  /** The name of the Object Storage bucket that stores DAG files used in the cluster. */
  bucket: string;
}

export interface CodeSyncConfig {
  $type: "yandex.cloud.airflow.v1.CodeSyncConfig";
  s3?: S3Config | undefined;
}

export interface LoggingConfig {
  $type: "yandex.cloud.airflow.v1.LoggingConfig";
  /** Logs generated by the Airflow components are delivered to Cloud Logging. */
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

export interface LockboxConfig {
  $type: "yandex.cloud.airflow.v1.LockboxConfig";
  /** The setting allows to enable Lockbox Secret Backend. */
  enabled: boolean;
}

const baseCluster: object = {
  $type: "yandex.cloud.airflow.v1.Cluster",
  id: "",
  folderId: "",
  name: "",
  description: "",
  health: 0,
  status: 0,
  deletionProtection: false,
  webserverUrl: "",
  serviceAccountId: "",
};

export const Cluster = {
  $type: "yandex.cloud.airflow.v1.Cluster" as const,

  encode(
    message: Cluster,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Cluster_LabelsEntry.encode(
        {
          $type: "yandex.cloud.airflow.v1.Cluster.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
      ).ldelim();
    });
    for (const v of message.monitoring) {
      Monitoring.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.config !== undefined) {
      ClusterConfig.encode(message.config, writer.uint32(74).fork()).ldelim();
    }
    if (message.health !== 0) {
      writer.uint32(80).int32(message.health);
    }
    if (message.status !== 0) {
      writer.uint32(88).int32(message.status);
    }
    if (message.network !== undefined) {
      NetworkConfig.encode(message.network, writer.uint32(98).fork()).ldelim();
    }
    if (message.codeSync !== undefined) {
      CodeSyncConfig.encode(
        message.codeSync,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.deletionProtection === true) {
      writer.uint32(112).bool(message.deletionProtection);
    }
    if (message.webserverUrl !== "") {
      writer.uint32(122).string(message.webserverUrl);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(130).string(message.serviceAccountId);
    }
    if (message.logging !== undefined) {
      LoggingConfig.encode(message.logging, writer.uint32(138).fork()).ldelim();
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
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
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
          message.monitoring.push(Monitoring.decode(reader, reader.uint32()));
          break;
        case 9:
          message.config = ClusterConfig.decode(reader, reader.uint32());
          break;
        case 10:
          message.health = reader.int32() as any;
          break;
        case 11:
          message.status = reader.int32() as any;
          break;
        case 12:
          message.network = NetworkConfig.decode(reader, reader.uint32());
          break;
        case 13:
          message.codeSync = CodeSyncConfig.decode(reader, reader.uint32());
          break;
        case 14:
          message.deletionProtection = reader.bool();
          break;
        case 15:
          message.webserverUrl = reader.string();
          break;
        case 16:
          message.serviceAccountId = reader.string();
          break;
        case 17:
          message.logging = LoggingConfig.decode(reader, reader.uint32());
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
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.monitoring = (object.monitoring ?? []).map((e: any) =>
      Monitoring.fromJSON(e)
    );
    message.config =
      object.config !== undefined && object.config !== null
        ? ClusterConfig.fromJSON(object.config)
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
    message.codeSync =
      object.codeSync !== undefined && object.codeSync !== null
        ? CodeSyncConfig.fromJSON(object.codeSync)
        : undefined;
    message.deletionProtection =
      object.deletionProtection !== undefined &&
      object.deletionProtection !== null
        ? Boolean(object.deletionProtection)
        : false;
    message.webserverUrl =
      object.webserverUrl !== undefined && object.webserverUrl !== null
        ? String(object.webserverUrl)
        : "";
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.logging =
      object.logging !== undefined && object.logging !== null
        ? LoggingConfig.fromJSON(object.logging)
        : undefined;
    return message;
  },

  toJSON(message: Cluster): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    if (message.monitoring) {
      obj.monitoring = message.monitoring.map((e) =>
        e ? Monitoring.toJSON(e) : undefined
      );
    } else {
      obj.monitoring = [];
    }
    message.config !== undefined &&
      (obj.config = message.config
        ? ClusterConfig.toJSON(message.config)
        : undefined);
    message.health !== undefined && (obj.health = healthToJSON(message.health));
    message.status !== undefined &&
      (obj.status = cluster_StatusToJSON(message.status));
    message.network !== undefined &&
      (obj.network = message.network
        ? NetworkConfig.toJSON(message.network)
        : undefined);
    message.codeSync !== undefined &&
      (obj.codeSync = message.codeSync
        ? CodeSyncConfig.toJSON(message.codeSync)
        : undefined);
    message.deletionProtection !== undefined &&
      (obj.deletionProtection = message.deletionProtection);
    message.webserverUrl !== undefined &&
      (obj.webserverUrl = message.webserverUrl);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.logging !== undefined &&
      (obj.logging = message.logging
        ? LoggingConfig.toJSON(message.logging)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Cluster>, I>>(object: I): Cluster {
    const message = { ...baseCluster } as Cluster;
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.monitoring =
      object.monitoring?.map((e) => Monitoring.fromPartial(e)) || [];
    message.config =
      object.config !== undefined && object.config !== null
        ? ClusterConfig.fromPartial(object.config)
        : undefined;
    message.health = object.health ?? 0;
    message.status = object.status ?? 0;
    message.network =
      object.network !== undefined && object.network !== null
        ? NetworkConfig.fromPartial(object.network)
        : undefined;
    message.codeSync =
      object.codeSync !== undefined && object.codeSync !== null
        ? CodeSyncConfig.fromPartial(object.codeSync)
        : undefined;
    message.deletionProtection = object.deletionProtection ?? false;
    message.webserverUrl = object.webserverUrl ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.logging =
      object.logging !== undefined && object.logging !== null
        ? LoggingConfig.fromPartial(object.logging)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Cluster.$type, Cluster);

const baseCluster_LabelsEntry: object = {
  $type: "yandex.cloud.airflow.v1.Cluster.LabelsEntry",
  key: "",
  value: "",
};

export const Cluster_LabelsEntry = {
  $type: "yandex.cloud.airflow.v1.Cluster.LabelsEntry" as const,

  encode(
    message: Cluster_LabelsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
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
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Cluster_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Cluster_LabelsEntry>, I>>(
    object: I
  ): Cluster_LabelsEntry {
    const message = { ...baseCluster_LabelsEntry } as Cluster_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Cluster_LabelsEntry.$type, Cluster_LabelsEntry);

const baseMonitoring: object = {
  $type: "yandex.cloud.airflow.v1.Monitoring",
  name: "",
  description: "",
  link: "",
};

export const Monitoring = {
  $type: "yandex.cloud.airflow.v1.Monitoring" as const,

  encode(
    message: Monitoring,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.link !== "") {
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
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.link =
      object.link !== undefined && object.link !== null
        ? String(object.link)
        : "";
    return message;
  },

  toJSON(message: Monitoring): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.link !== undefined && (obj.link = message.link);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Monitoring>, I>>(
    object: I
  ): Monitoring {
    const message = { ...baseMonitoring } as Monitoring;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.link = object.link ?? "";
    return message;
  },
};

messageTypeRegistry.set(Monitoring.$type, Monitoring);

const baseClusterConfig: object = {
  $type: "yandex.cloud.airflow.v1.ClusterConfig",
  versionId: "",
};

export const ClusterConfig = {
  $type: "yandex.cloud.airflow.v1.ClusterConfig" as const,

  encode(
    message: ClusterConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.versionId !== "") {
      writer.uint32(10).string(message.versionId);
    }
    if (message.airflow !== undefined) {
      AirflowConfig.encode(message.airflow, writer.uint32(18).fork()).ldelim();
    }
    if (message.webserver !== undefined) {
      WebserverConfig.encode(
        message.webserver,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.scheduler !== undefined) {
      SchedulerConfig.encode(
        message.scheduler,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.triggerer !== undefined) {
      TriggererConfig.encode(
        message.triggerer,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.worker !== undefined) {
      WorkerConfig.encode(message.worker, writer.uint32(50).fork()).ldelim();
    }
    if (message.dependencies !== undefined) {
      Dependencies.encode(
        message.dependencies,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.lockbox !== undefined) {
      LockboxConfig.encode(message.lockbox, writer.uint32(66).fork()).ldelim();
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
          message.versionId = reader.string();
          break;
        case 2:
          message.airflow = AirflowConfig.decode(reader, reader.uint32());
          break;
        case 3:
          message.webserver = WebserverConfig.decode(reader, reader.uint32());
          break;
        case 4:
          message.scheduler = SchedulerConfig.decode(reader, reader.uint32());
          break;
        case 5:
          message.triggerer = TriggererConfig.decode(reader, reader.uint32());
          break;
        case 6:
          message.worker = WorkerConfig.decode(reader, reader.uint32());
          break;
        case 7:
          message.dependencies = Dependencies.decode(reader, reader.uint32());
          break;
        case 8:
          message.lockbox = LockboxConfig.decode(reader, reader.uint32());
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
    message.versionId =
      object.versionId !== undefined && object.versionId !== null
        ? String(object.versionId)
        : "";
    message.airflow =
      object.airflow !== undefined && object.airflow !== null
        ? AirflowConfig.fromJSON(object.airflow)
        : undefined;
    message.webserver =
      object.webserver !== undefined && object.webserver !== null
        ? WebserverConfig.fromJSON(object.webserver)
        : undefined;
    message.scheduler =
      object.scheduler !== undefined && object.scheduler !== null
        ? SchedulerConfig.fromJSON(object.scheduler)
        : undefined;
    message.triggerer =
      object.triggerer !== undefined && object.triggerer !== null
        ? TriggererConfig.fromJSON(object.triggerer)
        : undefined;
    message.worker =
      object.worker !== undefined && object.worker !== null
        ? WorkerConfig.fromJSON(object.worker)
        : undefined;
    message.dependencies =
      object.dependencies !== undefined && object.dependencies !== null
        ? Dependencies.fromJSON(object.dependencies)
        : undefined;
    message.lockbox =
      object.lockbox !== undefined && object.lockbox !== null
        ? LockboxConfig.fromJSON(object.lockbox)
        : undefined;
    return message;
  },

  toJSON(message: ClusterConfig): unknown {
    const obj: any = {};
    message.versionId !== undefined && (obj.versionId = message.versionId);
    message.airflow !== undefined &&
      (obj.airflow = message.airflow
        ? AirflowConfig.toJSON(message.airflow)
        : undefined);
    message.webserver !== undefined &&
      (obj.webserver = message.webserver
        ? WebserverConfig.toJSON(message.webserver)
        : undefined);
    message.scheduler !== undefined &&
      (obj.scheduler = message.scheduler
        ? SchedulerConfig.toJSON(message.scheduler)
        : undefined);
    message.triggerer !== undefined &&
      (obj.triggerer = message.triggerer
        ? TriggererConfig.toJSON(message.triggerer)
        : undefined);
    message.worker !== undefined &&
      (obj.worker = message.worker
        ? WorkerConfig.toJSON(message.worker)
        : undefined);
    message.dependencies !== undefined &&
      (obj.dependencies = message.dependencies
        ? Dependencies.toJSON(message.dependencies)
        : undefined);
    message.lockbox !== undefined &&
      (obj.lockbox = message.lockbox
        ? LockboxConfig.toJSON(message.lockbox)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClusterConfig>, I>>(
    object: I
  ): ClusterConfig {
    const message = { ...baseClusterConfig } as ClusterConfig;
    message.versionId = object.versionId ?? "";
    message.airflow =
      object.airflow !== undefined && object.airflow !== null
        ? AirflowConfig.fromPartial(object.airflow)
        : undefined;
    message.webserver =
      object.webserver !== undefined && object.webserver !== null
        ? WebserverConfig.fromPartial(object.webserver)
        : undefined;
    message.scheduler =
      object.scheduler !== undefined && object.scheduler !== null
        ? SchedulerConfig.fromPartial(object.scheduler)
        : undefined;
    message.triggerer =
      object.triggerer !== undefined && object.triggerer !== null
        ? TriggererConfig.fromPartial(object.triggerer)
        : undefined;
    message.worker =
      object.worker !== undefined && object.worker !== null
        ? WorkerConfig.fromPartial(object.worker)
        : undefined;
    message.dependencies =
      object.dependencies !== undefined && object.dependencies !== null
        ? Dependencies.fromPartial(object.dependencies)
        : undefined;
    message.lockbox =
      object.lockbox !== undefined && object.lockbox !== null
        ? LockboxConfig.fromPartial(object.lockbox)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ClusterConfig.$type, ClusterConfig);

const baseAirflowConfig: object = {
  $type: "yandex.cloud.airflow.v1.AirflowConfig",
};

export const AirflowConfig = {
  $type: "yandex.cloud.airflow.v1.AirflowConfig" as const,

  encode(
    message: AirflowConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.config).forEach(([key, value]) => {
      AirflowConfig_ConfigEntry.encode(
        {
          $type: "yandex.cloud.airflow.v1.AirflowConfig.ConfigEntry",
          key: key as any,
          value,
        },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AirflowConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAirflowConfig } as AirflowConfig;
    message.config = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = AirflowConfig_ConfigEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.config[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AirflowConfig {
    const message = { ...baseAirflowConfig } as AirflowConfig;
    message.config = Object.entries(object.config ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: AirflowConfig): unknown {
    const obj: any = {};
    obj.config = {};
    if (message.config) {
      Object.entries(message.config).forEach(([k, v]) => {
        obj.config[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AirflowConfig>, I>>(
    object: I
  ): AirflowConfig {
    const message = { ...baseAirflowConfig } as AirflowConfig;
    message.config = Object.entries(object.config ?? {}).reduce<{
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

messageTypeRegistry.set(AirflowConfig.$type, AirflowConfig);

const baseAirflowConfig_ConfigEntry: object = {
  $type: "yandex.cloud.airflow.v1.AirflowConfig.ConfigEntry",
  key: "",
  value: "",
};

export const AirflowConfig_ConfigEntry = {
  $type: "yandex.cloud.airflow.v1.AirflowConfig.ConfigEntry" as const,

  encode(
    message: AirflowConfig_ConfigEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AirflowConfig_ConfigEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAirflowConfig_ConfigEntry,
    } as AirflowConfig_ConfigEntry;
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

  fromJSON(object: any): AirflowConfig_ConfigEntry {
    const message = {
      ...baseAirflowConfig_ConfigEntry,
    } as AirflowConfig_ConfigEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: AirflowConfig_ConfigEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AirflowConfig_ConfigEntry>, I>>(
    object: I
  ): AirflowConfig_ConfigEntry {
    const message = {
      ...baseAirflowConfig_ConfigEntry,
    } as AirflowConfig_ConfigEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  AirflowConfig_ConfigEntry.$type,
  AirflowConfig_ConfigEntry
);

const baseWebserverConfig: object = {
  $type: "yandex.cloud.airflow.v1.WebserverConfig",
  count: 0,
};

export const WebserverConfig = {
  $type: "yandex.cloud.airflow.v1.WebserverConfig" as const,

  encode(
    message: WebserverConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.count !== 0) {
      writer.uint32(8).int64(message.count);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WebserverConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWebserverConfig } as WebserverConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.count = longToNumber(reader.int64() as Long);
          break;
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

  fromJSON(object: any): WebserverConfig {
    const message = { ...baseWebserverConfig } as WebserverConfig;
    message.count =
      object.count !== undefined && object.count !== null
        ? Number(object.count)
        : 0;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: WebserverConfig): unknown {
    const obj: any = {};
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WebserverConfig>, I>>(
    object: I
  ): WebserverConfig {
    const message = { ...baseWebserverConfig } as WebserverConfig;
    message.count = object.count ?? 0;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(WebserverConfig.$type, WebserverConfig);

const baseSchedulerConfig: object = {
  $type: "yandex.cloud.airflow.v1.SchedulerConfig",
  count: 0,
};

export const SchedulerConfig = {
  $type: "yandex.cloud.airflow.v1.SchedulerConfig" as const,

  encode(
    message: SchedulerConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.count !== 0) {
      writer.uint32(8).int64(message.count);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SchedulerConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSchedulerConfig } as SchedulerConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.count = longToNumber(reader.int64() as Long);
          break;
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

  fromJSON(object: any): SchedulerConfig {
    const message = { ...baseSchedulerConfig } as SchedulerConfig;
    message.count =
      object.count !== undefined && object.count !== null
        ? Number(object.count)
        : 0;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: SchedulerConfig): unknown {
    const obj: any = {};
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SchedulerConfig>, I>>(
    object: I
  ): SchedulerConfig {
    const message = { ...baseSchedulerConfig } as SchedulerConfig;
    message.count = object.count ?? 0;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(SchedulerConfig.$type, SchedulerConfig);

const baseTriggererConfig: object = {
  $type: "yandex.cloud.airflow.v1.TriggererConfig",
  count: 0,
};

export const TriggererConfig = {
  $type: "yandex.cloud.airflow.v1.TriggererConfig" as const,

  encode(
    message: TriggererConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.count !== 0) {
      writer.uint32(8).int64(message.count);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TriggererConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTriggererConfig } as TriggererConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.count = longToNumber(reader.int64() as Long);
          break;
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

  fromJSON(object: any): TriggererConfig {
    const message = { ...baseTriggererConfig } as TriggererConfig;
    message.count =
      object.count !== undefined && object.count !== null
        ? Number(object.count)
        : 0;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: TriggererConfig): unknown {
    const obj: any = {};
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TriggererConfig>, I>>(
    object: I
  ): TriggererConfig {
    const message = { ...baseTriggererConfig } as TriggererConfig;
    message.count = object.count ?? 0;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(TriggererConfig.$type, TriggererConfig);

const baseWorkerConfig: object = {
  $type: "yandex.cloud.airflow.v1.WorkerConfig",
  minCount: 0,
  maxCount: 0,
};

export const WorkerConfig = {
  $type: "yandex.cloud.airflow.v1.WorkerConfig" as const,

  encode(
    message: WorkerConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.minCount !== 0) {
      writer.uint32(8).int64(message.minCount);
    }
    if (message.maxCount !== 0) {
      writer.uint32(16).int64(message.maxCount);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
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
          message.minCount = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.maxCount = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.resources = Resources.decode(reader, reader.uint32());
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
    message.minCount =
      object.minCount !== undefined && object.minCount !== null
        ? Number(object.minCount)
        : 0;
    message.maxCount =
      object.maxCount !== undefined && object.maxCount !== null
        ? Number(object.maxCount)
        : 0;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: WorkerConfig): unknown {
    const obj: any = {};
    message.minCount !== undefined &&
      (obj.minCount = Math.round(message.minCount));
    message.maxCount !== undefined &&
      (obj.maxCount = Math.round(message.maxCount));
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WorkerConfig>, I>>(
    object: I
  ): WorkerConfig {
    const message = { ...baseWorkerConfig } as WorkerConfig;
    message.minCount = object.minCount ?? 0;
    message.maxCount = object.maxCount ?? 0;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(WorkerConfig.$type, WorkerConfig);

const baseDependencies: object = {
  $type: "yandex.cloud.airflow.v1.Dependencies",
  pipPackages: "",
  debPackages: "",
};

export const Dependencies = {
  $type: "yandex.cloud.airflow.v1.Dependencies" as const,

  encode(
    message: Dependencies,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  fromPartial<I extends Exact<DeepPartial<Dependencies>, I>>(
    object: I
  ): Dependencies {
    const message = { ...baseDependencies } as Dependencies;
    message.pipPackages = object.pipPackages?.map((e) => e) || [];
    message.debPackages = object.debPackages?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Dependencies.$type, Dependencies);

const baseNetworkConfig: object = {
  $type: "yandex.cloud.airflow.v1.NetworkConfig",
  subnetIds: "",
  securityGroupIds: "",
};

export const NetworkConfig = {
  $type: "yandex.cloud.airflow.v1.NetworkConfig" as const,

  encode(
    message: NetworkConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) =>
      String(e)
    );
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

  fromPartial<I extends Exact<DeepPartial<NetworkConfig>, I>>(
    object: I
  ): NetworkConfig {
    const message = { ...baseNetworkConfig } as NetworkConfig;
    message.subnetIds = object.subnetIds?.map((e) => e) || [];
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(NetworkConfig.$type, NetworkConfig);

const baseS3Config: object = {
  $type: "yandex.cloud.airflow.v1.S3Config",
  bucket: "",
};

export const S3Config = {
  $type: "yandex.cloud.airflow.v1.S3Config" as const,

  encode(
    message: S3Config,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bucket !== "") {
      writer.uint32(26).string(message.bucket);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): S3Config {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseS3Config } as S3Config;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.bucket = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): S3Config {
    const message = { ...baseS3Config } as S3Config;
    message.bucket =
      object.bucket !== undefined && object.bucket !== null
        ? String(object.bucket)
        : "";
    return message;
  },

  toJSON(message: S3Config): unknown {
    const obj: any = {};
    message.bucket !== undefined && (obj.bucket = message.bucket);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<S3Config>, I>>(object: I): S3Config {
    const message = { ...baseS3Config } as S3Config;
    message.bucket = object.bucket ?? "";
    return message;
  },
};

messageTypeRegistry.set(S3Config.$type, S3Config);

const baseCodeSyncConfig: object = {
  $type: "yandex.cloud.airflow.v1.CodeSyncConfig",
};

export const CodeSyncConfig = {
  $type: "yandex.cloud.airflow.v1.CodeSyncConfig" as const,

  encode(
    message: CodeSyncConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.s3 !== undefined) {
      S3Config.encode(message.s3, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CodeSyncConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCodeSyncConfig } as CodeSyncConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.s3 = S3Config.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CodeSyncConfig {
    const message = { ...baseCodeSyncConfig } as CodeSyncConfig;
    message.s3 =
      object.s3 !== undefined && object.s3 !== null
        ? S3Config.fromJSON(object.s3)
        : undefined;
    return message;
  },

  toJSON(message: CodeSyncConfig): unknown {
    const obj: any = {};
    message.s3 !== undefined &&
      (obj.s3 = message.s3 ? S3Config.toJSON(message.s3) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CodeSyncConfig>, I>>(
    object: I
  ): CodeSyncConfig {
    const message = { ...baseCodeSyncConfig } as CodeSyncConfig;
    message.s3 =
      object.s3 !== undefined && object.s3 !== null
        ? S3Config.fromPartial(object.s3)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CodeSyncConfig.$type, CodeSyncConfig);

const baseLoggingConfig: object = {
  $type: "yandex.cloud.airflow.v1.LoggingConfig",
  enabled: false,
  minLevel: 0,
};

export const LoggingConfig = {
  $type: "yandex.cloud.airflow.v1.LoggingConfig" as const,

  encode(
    message: LoggingConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    message.minLevel !== undefined &&
      (obj.minLevel = logLevel_LevelToJSON(message.minLevel));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoggingConfig>, I>>(
    object: I
  ): LoggingConfig {
    const message = { ...baseLoggingConfig } as LoggingConfig;
    message.enabled = object.enabled ?? false;
    message.folderId = object.folderId ?? undefined;
    message.logGroupId = object.logGroupId ?? undefined;
    message.minLevel = object.minLevel ?? 0;
    return message;
  },
};

messageTypeRegistry.set(LoggingConfig.$type, LoggingConfig);

const baseLockboxConfig: object = {
  $type: "yandex.cloud.airflow.v1.LockboxConfig",
  enabled: false,
};

export const LockboxConfig = {
  $type: "yandex.cloud.airflow.v1.LockboxConfig" as const,

  encode(
    message: LockboxConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockboxConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLockboxConfig } as LockboxConfig;
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

  fromJSON(object: any): LockboxConfig {
    const message = { ...baseLockboxConfig } as LockboxConfig;
    message.enabled =
      object.enabled !== undefined && object.enabled !== null
        ? Boolean(object.enabled)
        : false;
    return message;
  },

  toJSON(message: LockboxConfig): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LockboxConfig>, I>>(
    object: I
  ): LockboxConfig {
    const message = { ...baseLockboxConfig } as LockboxConfig;
    message.enabled = object.enabled ?? false;
    return message;
  },
};

messageTypeRegistry.set(LockboxConfig.$type, LockboxConfig);

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P> | "$type">,
        never
      >;

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
