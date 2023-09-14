/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  MaintenanceWindow,
  MaintenanceOperation,
} from "../../../../../yandex/cloud/mdb/clickhouse/v1/maintenance";
import { TimeOfDay } from "../../../../../google/type/timeofday";
import { ClickhouseConfigSet } from "../../../../../yandex/cloud/mdb/clickhouse/v1/config/clickhouse";
import { Timestamp } from "../../../../../google/protobuf/timestamp";
import {
  BoolValue,
  Int64Value,
  DoubleValue,
} from "../../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.mdb.clickhouse.v1";

/**
 * A ClickHouse Cluster resource. For more information, see the
 * [Cluster](/docs/managed-clickhouse/concepts) section in the Developer's Guide.
 */
export interface Cluster {
  $type: "yandex.cloud.mdb.clickhouse.v1.Cluster";
  /**
   * ID of the ClickHouse cluster.
   * This ID is assigned by MDB at creation time.
   */
  id: string;
  /** ID of the folder that the ClickHouse cluster belongs to. */
  folderId: string;
  /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  createdAt?: Date;
  /**
   * Name of the ClickHouse cluster.
   * The name is unique within the folder. 1-63 characters long.
   */
  name: string;
  /** Description of the ClickHouse cluster. 0-256 characters long. */
  description: string;
  /** Custom labels for the ClickHouse cluster as `key:value` pairs. Maximum 64 per resource. */
  labels: { [key: string]: string };
  /** Deployment environment of the ClickHouse cluster. */
  environment: Cluster_Environment;
  /** Description of monitoring systems relevant to the ClickHouse cluster. */
  monitoring: Monitoring[];
  /** Configuration of the ClickHouse cluster. */
  config?: ClusterConfig;
  /** ID of the network that the cluster belongs to. */
  networkId: string;
  /** Aggregated cluster health. */
  health: Cluster_Health;
  /** Current state of the cluster. */
  status: Cluster_Status;
  /** ID of the service account used for access to Object Storage. */
  serviceAccountId: string;
  /** Maintenance window for the cluster. */
  maintenanceWindow?: MaintenanceWindow;
  /** Planned maintenance operation to be started for the cluster within the nearest [maintenance_window]. */
  plannedOperation?: MaintenanceOperation;
  /** User security groups */
  securityGroupIds: string[];
  /** Deletion Protection inhibits deletion of the cluster */
  deletionProtection: boolean;
}

export enum Cluster_Environment {
  ENVIRONMENT_UNSPECIFIED = 0,
  /**
   * PRODUCTION - Stable environment with a conservative update policy:
   * only hotfixes are applied during regular maintenance.
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
    case "ENVIRONMENT_UNSPECIFIED":
      return Cluster_Environment.ENVIRONMENT_UNSPECIFIED;
    case 1:
    case "PRODUCTION":
      return Cluster_Environment.PRODUCTION;
    case 2:
    case "PRESTABLE":
      return Cluster_Environment.PRESTABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Cluster_Environment.UNRECOGNIZED;
  }
}

export function cluster_EnvironmentToJSON(object: Cluster_Environment): string {
  switch (object) {
    case Cluster_Environment.ENVIRONMENT_UNSPECIFIED:
      return "ENVIRONMENT_UNSPECIFIED";
    case Cluster_Environment.PRODUCTION:
      return "PRODUCTION";
    case Cluster_Environment.PRESTABLE:
      return "PRESTABLE";
    default:
      return "UNKNOWN";
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
    case "HEALTH_UNKNOWN":
      return Cluster_Health.HEALTH_UNKNOWN;
    case 1:
    case "ALIVE":
      return Cluster_Health.ALIVE;
    case 2:
    case "DEAD":
      return Cluster_Health.DEAD;
    case 3:
    case "DEGRADED":
      return Cluster_Health.DEGRADED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Cluster_Health.UNRECOGNIZED;
  }
}

export function cluster_HealthToJSON(object: Cluster_Health): string {
  switch (object) {
    case Cluster_Health.HEALTH_UNKNOWN:
      return "HEALTH_UNKNOWN";
    case Cluster_Health.ALIVE:
      return "ALIVE";
    case Cluster_Health.DEAD:
      return "DEAD";
    case Cluster_Health.DEGRADED:
      return "DEGRADED";
    default:
      return "UNKNOWN";
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
    case "UPDATING":
      return Cluster_Status.UPDATING;
    case 5:
    case "STOPPING":
      return Cluster_Status.STOPPING;
    case 6:
    case "STOPPED":
      return Cluster_Status.STOPPED;
    case 7:
    case "STARTING":
      return Cluster_Status.STARTING;
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
    case Cluster_Status.UPDATING:
      return "UPDATING";
    case Cluster_Status.STOPPING:
      return "STOPPING";
    case Cluster_Status.STOPPED:
      return "STOPPED";
    case Cluster_Status.STARTING:
      return "STARTING";
    default:
      return "UNKNOWN";
  }
}

export interface Cluster_LabelsEntry {
  $type: "yandex.cloud.mdb.clickhouse.v1.Cluster.LabelsEntry";
  key: string;
  value: string;
}

/** Monitoring system metadata. */
export interface Monitoring {
  $type: "yandex.cloud.mdb.clickhouse.v1.Monitoring";
  /** Name of the monitoring system. */
  name: string;
  /** Description of the monitoring system. */
  description: string;
  /** Link to the monitoring system charts for the ClickHouse cluster. */
  link: string;
}

export interface ClusterConfig {
  $type: "yandex.cloud.mdb.clickhouse.v1.ClusterConfig";
  /** Version of the ClickHouse server software. */
  version: string;
  /** Configuration and resource allocation for ClickHouse hosts. */
  clickhouse?: ClusterConfig_Clickhouse;
  /** Configuration and resource allocation for ZooKeeper hosts. */
  zookeeper?: ClusterConfig_Zookeeper;
  /** Time to start the daily backup, in the UTC timezone. */
  backupWindowStart?: TimeOfDay;
  /** Access policy for external services. */
  access?: Access;
  cloudStorage?: CloudStorage;
  /** Whether database management through SQL commands is enabled. */
  sqlDatabaseManagement?: boolean;
  /** Whether user management through SQL commands is enabled. */
  sqlUserManagement?: boolean;
  /** Whether cluster should use embedded Keeper instead of Zookeeper. */
  embeddedKeeper?: boolean;
}

export interface ClusterConfig_Clickhouse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ClusterConfig.Clickhouse";
  /** Configuration settings of a ClickHouse server. */
  config?: ClickhouseConfigSet;
  /** Resources allocated to ClickHouse hosts. */
  resources?: Resources;
}

export interface ClusterConfig_Zookeeper {
  $type: "yandex.cloud.mdb.clickhouse.v1.ClusterConfig.Zookeeper";
  /** Resources allocated to ZooKeeper hosts. */
  resources?: Resources;
}

export interface Shard {
  $type: "yandex.cloud.mdb.clickhouse.v1.Shard";
  /** Name of the shard. */
  name: string;
  /** ID of the cluster that the shard belongs to. */
  clusterId: string;
  /** Configuration of the shard. */
  config?: ShardConfig;
}

export interface ShardGroup {
  $type: "yandex.cloud.mdb.clickhouse.v1.ShardGroup";
  /** Name of the shard group. */
  name: string;
  /** ID of the ClickHouse cluster that the shard group belongs to. */
  clusterId: string;
  /** Description of the shard group. 0-256 characters long. */
  description: string;
  /** List of shard names contained in the shard group. */
  shardNames: string[];
}

export interface ShardConfig {
  $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfig";
  /** ClickHouse configuration for a shard. */
  clickhouse?: ShardConfig_Clickhouse;
}

export interface ShardConfig_Clickhouse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfig.Clickhouse";
  /** ClickHouse settings for a shard. */
  config?: ClickhouseConfigSet;
  /** Computational resources for a shard. */
  resources?: Resources;
  /**
   * Relative weight of a shard considered when writing data to the cluster.
   * For details, see [ClickHouse documentation](https://clickhouse.com/docs/en/operations/table_engines/distributed/).
   */
  weight?: number;
}

export interface Host {
  $type: "yandex.cloud.mdb.clickhouse.v1.Host";
  /**
   * Name of the ClickHouse host. The host name is assigned by MDB at creation time, and cannot be changed.
   * 1-63 characters long.
   *
   * The name is unique across all MDB hosts that exist on the platform, as it defines the FQDN of the host.
   */
  name: string;
  /** ID of the ClickHouse host. The ID is assigned by MDB at creation time. */
  clusterId: string;
  /** ID of the availability zone where the ClickHouse host resides. */
  zoneId: string;
  /** Type of the host. */
  type: Host_Type;
  /** Resources allocated to the ClickHouse host. */
  resources?: Resources;
  /** Status code of the aggregated health of the host. */
  health: Host_Health;
  /** Services provided by the host. */
  services: Service[];
  /** ID of the subnet that the host belongs to. */
  subnetId: string;
  /** Flag showing public IP assignment status to this host. */
  assignPublicIp: boolean;
  shardName: string;
}

export enum Host_Type {
  TYPE_UNSPECIFIED = 0,
  /** CLICKHOUSE - ClickHouse host. */
  CLICKHOUSE = 1,
  /** ZOOKEEPER - ZooKeeper host. */
  ZOOKEEPER = 2,
  UNRECOGNIZED = -1,
}

export function host_TypeFromJSON(object: any): Host_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Host_Type.TYPE_UNSPECIFIED;
    case 1:
    case "CLICKHOUSE":
      return Host_Type.CLICKHOUSE;
    case 2:
    case "ZOOKEEPER":
      return Host_Type.ZOOKEEPER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Host_Type.UNRECOGNIZED;
  }
}

export function host_TypeToJSON(object: Host_Type): string {
  switch (object) {
    case Host_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case Host_Type.CLICKHOUSE:
      return "CLICKHOUSE";
    case Host_Type.ZOOKEEPER:
      return "ZOOKEEPER";
    default:
      return "UNKNOWN";
  }
}

export enum Host_Health {
  /** UNKNOWN - Health of the host is unknown. */
  UNKNOWN = 0,
  /** ALIVE - The host is performing all its functions normally. */
  ALIVE = 1,
  /** DEAD - The host is inoperable, and cannot perform any of its essential functions. */
  DEAD = 2,
  /** DEGRADED - The host is degraded, and can perform only some of its essential functions. */
  DEGRADED = 3,
  UNRECOGNIZED = -1,
}

export function host_HealthFromJSON(object: any): Host_Health {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return Host_Health.UNKNOWN;
    case 1:
    case "ALIVE":
      return Host_Health.ALIVE;
    case 2:
    case "DEAD":
      return Host_Health.DEAD;
    case 3:
    case "DEGRADED":
      return Host_Health.DEGRADED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Host_Health.UNRECOGNIZED;
  }
}

export function host_HealthToJSON(object: Host_Health): string {
  switch (object) {
    case Host_Health.UNKNOWN:
      return "UNKNOWN";
    case Host_Health.ALIVE:
      return "ALIVE";
    case Host_Health.DEAD:
      return "DEAD";
    case Host_Health.DEGRADED:
      return "DEGRADED";
    default:
      return "UNKNOWN";
  }
}

export interface Service {
  $type: "yandex.cloud.mdb.clickhouse.v1.Service";
  /** Type of the service provided by the host. */
  type: Service_Type;
  /** Status code of server availability. */
  health: Service_Health;
}

export enum Service_Type {
  TYPE_UNSPECIFIED = 0,
  /** CLICKHOUSE - The host is a ClickHouse server. */
  CLICKHOUSE = 1,
  /** ZOOKEEPER - The host is a ZooKeeper server. */
  ZOOKEEPER = 2,
  UNRECOGNIZED = -1,
}

export function service_TypeFromJSON(object: any): Service_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Service_Type.TYPE_UNSPECIFIED;
    case 1:
    case "CLICKHOUSE":
      return Service_Type.CLICKHOUSE;
    case 2:
    case "ZOOKEEPER":
      return Service_Type.ZOOKEEPER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Service_Type.UNRECOGNIZED;
  }
}

export function service_TypeToJSON(object: Service_Type): string {
  switch (object) {
    case Service_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case Service_Type.CLICKHOUSE:
      return "CLICKHOUSE";
    case Service_Type.ZOOKEEPER:
      return "ZOOKEEPER";
    default:
      return "UNKNOWN";
  }
}

export enum Service_Health {
  /** UNKNOWN - Health of the server is unknown. */
  UNKNOWN = 0,
  /** ALIVE - The server is working normally. */
  ALIVE = 1,
  /** DEAD - The server is dead or unresponsive. */
  DEAD = 2,
  UNRECOGNIZED = -1,
}

export function service_HealthFromJSON(object: any): Service_Health {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return Service_Health.UNKNOWN;
    case 1:
    case "ALIVE":
      return Service_Health.ALIVE;
    case 2:
    case "DEAD":
      return Service_Health.DEAD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Service_Health.UNRECOGNIZED;
  }
}

export function service_HealthToJSON(object: Service_Health): string {
  switch (object) {
    case Service_Health.UNKNOWN:
      return "UNKNOWN";
    case Service_Health.ALIVE:
      return "ALIVE";
    case Service_Health.DEAD:
      return "DEAD";
    default:
      return "UNKNOWN";
  }
}

export interface Resources {
  $type: "yandex.cloud.mdb.clickhouse.v1.Resources";
  /**
   * ID of the preset for computational resources available to a host (CPU, memory etc.).
   * All available presets are listed in the [documentation](/docs/managed-clickhouse/concepts/instance-types)
   */
  resourcePresetId: string;
  /** Volume of the storage available to a host, in bytes. */
  diskSize: number;
  /**
   * Type of the storage environment for the host.
   * Possible values:
   * * network-hdd - network HDD drive,
   * * network-ssd - network SSD drive,
   * * local-ssd - local SSD storage.
   */
  diskTypeId: string;
}

export interface Access {
  $type: "yandex.cloud.mdb.clickhouse.v1.Access";
  /** Allow to export data from the cluster to DataLens. */
  dataLens: boolean;
  /**
   * Allow SQL queries to the cluster databases from the management console.
   *
   * See [SQL queries in the management console](/docs/managed-clickhouse/operations/web-sql-query) for more details.
   */
  webSql: boolean;
  /**
   * Allow to import data from Yandex Metrica and AppMetrica to the cluster.
   *
   * See [AppMetrica documentation](https://appmetrica.yandex.com/docs/cloud/index.html) for more details.
   */
  metrika: boolean;
  /** Allow access to cluster for Serverless. */
  serverless: boolean;
  /** Allow access for DataTransfer */
  dataTransfer: boolean;
  /** Allow access for Query */
  yandexQuery: boolean;
}

export interface CloudStorage {
  $type: "yandex.cloud.mdb.clickhouse.v1.CloudStorage";
  /** Whether to use Object Storage for storing ClickHouse data. */
  enabled: boolean;
  moveFactor?: number;
  dataCacheEnabled?: boolean;
  dataCacheMaxSize?: number;
  preferNotToMerge?: boolean;
}

const baseCluster: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.Cluster",
  id: "",
  folderId: "",
  name: "",
  description: "",
  environment: 0,
  networkId: "",
  health: 0,
  status: 0,
  serviceAccountId: "",
  securityGroupIds: "",
  deletionProtection: false,
};

export const Cluster = {
  $type: "yandex.cloud.mdb.clickhouse.v1.Cluster" as const,

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
          $type: "yandex.cloud.mdb.clickhouse.v1.Cluster.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
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
    if (message.networkId !== "") {
      writer.uint32(82).string(message.networkId);
    }
    if (message.health !== 0) {
      writer.uint32(88).int32(message.health);
    }
    if (message.status !== 0) {
      writer.uint32(96).int32(message.status);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(106).string(message.serviceAccountId);
    }
    if (message.maintenanceWindow !== undefined) {
      MaintenanceWindow.encode(
        message.maintenanceWindow,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.plannedOperation !== undefined) {
      MaintenanceOperation.encode(
        message.plannedOperation,
        writer.uint32(122).fork()
      ).ldelim();
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(130).string(v!);
    }
    if (message.deletionProtection === true) {
      writer.uint32(136).bool(message.deletionProtection);
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
          message.serviceAccountId = reader.string();
          break;
        case 14:
          message.maintenanceWindow = MaintenanceWindow.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.plannedOperation = MaintenanceOperation.decode(
            reader,
            reader.uint32()
          );
          break;
        case 16:
          message.securityGroupIds.push(reader.string());
          break;
        case 17:
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
    message.environment =
      object.environment !== undefined && object.environment !== null
        ? cluster_EnvironmentFromJSON(object.environment)
        : 0;
    message.monitoring = (object.monitoring ?? []).map((e: any) =>
      Monitoring.fromJSON(e)
    );
    message.config =
      object.config !== undefined && object.config !== null
        ? ClusterConfig.fromJSON(object.config)
        : undefined;
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    message.health =
      object.health !== undefined && object.health !== null
        ? cluster_HealthFromJSON(object.health)
        : 0;
    message.status =
      object.status !== undefined && object.status !== null
        ? cluster_StatusFromJSON(object.status)
        : 0;
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.maintenanceWindow =
      object.maintenanceWindow !== undefined &&
      object.maintenanceWindow !== null
        ? MaintenanceWindow.fromJSON(object.maintenanceWindow)
        : undefined;
    message.plannedOperation =
      object.plannedOperation !== undefined && object.plannedOperation !== null
        ? MaintenanceOperation.fromJSON(object.plannedOperation)
        : undefined;
    message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) =>
      String(e)
    );
    message.deletionProtection =
      object.deletionProtection !== undefined &&
      object.deletionProtection !== null
        ? Boolean(object.deletionProtection)
        : false;
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
    message.environment !== undefined &&
      (obj.environment = cluster_EnvironmentToJSON(message.environment));
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
    message.networkId !== undefined && (obj.networkId = message.networkId);
    message.health !== undefined &&
      (obj.health = cluster_HealthToJSON(message.health));
    message.status !== undefined &&
      (obj.status = cluster_StatusToJSON(message.status));
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
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
    message.environment = object.environment ?? 0;
    message.monitoring =
      object.monitoring?.map((e) => Monitoring.fromPartial(e)) || [];
    message.config =
      object.config !== undefined && object.config !== null
        ? ClusterConfig.fromPartial(object.config)
        : undefined;
    message.networkId = object.networkId ?? "";
    message.health = object.health ?? 0;
    message.status = object.status ?? 0;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.maintenanceWindow =
      object.maintenanceWindow !== undefined &&
      object.maintenanceWindow !== null
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

messageTypeRegistry.set(Cluster.$type, Cluster);

const baseCluster_LabelsEntry: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.Cluster.LabelsEntry",
  key: "",
  value: "",
};

export const Cluster_LabelsEntry = {
  $type: "yandex.cloud.mdb.clickhouse.v1.Cluster.LabelsEntry" as const,

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
  $type: "yandex.cloud.mdb.clickhouse.v1.Monitoring",
  name: "",
  description: "",
  link: "",
};

export const Monitoring = {
  $type: "yandex.cloud.mdb.clickhouse.v1.Monitoring" as const,

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
  $type: "yandex.cloud.mdb.clickhouse.v1.ClusterConfig",
  version: "",
};

export const ClusterConfig = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ClusterConfig" as const,

  encode(
    message: ClusterConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.clickhouse !== undefined) {
      ClusterConfig_Clickhouse.encode(
        message.clickhouse,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.zookeeper !== undefined) {
      ClusterConfig_Zookeeper.encode(
        message.zookeeper,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.backupWindowStart !== undefined) {
      TimeOfDay.encode(
        message.backupWindowStart,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.access !== undefined) {
      Access.encode(message.access, writer.uint32(42).fork()).ldelim();
    }
    if (message.cloudStorage !== undefined) {
      CloudStorage.encode(
        message.cloudStorage,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.sqlDatabaseManagement !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.sqlDatabaseManagement!,
        },
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.sqlUserManagement !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.sqlUserManagement!,
        },
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.embeddedKeeper !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.embeddedKeeper! },
        writer.uint32(74).fork()
      ).ldelim();
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
          message.version = reader.string();
          break;
        case 2:
          message.clickhouse = ClusterConfig_Clickhouse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.zookeeper = ClusterConfig_Zookeeper.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.backupWindowStart = TimeOfDay.decode(reader, reader.uint32());
          break;
        case 5:
          message.access = Access.decode(reader, reader.uint32());
          break;
        case 6:
          message.cloudStorage = CloudStorage.decode(reader, reader.uint32());
          break;
        case 7:
          message.sqlDatabaseManagement = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 8:
          message.sqlUserManagement = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 9:
          message.embeddedKeeper = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
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
    message.version =
      object.version !== undefined && object.version !== null
        ? String(object.version)
        : "";
    message.clickhouse =
      object.clickhouse !== undefined && object.clickhouse !== null
        ? ClusterConfig_Clickhouse.fromJSON(object.clickhouse)
        : undefined;
    message.zookeeper =
      object.zookeeper !== undefined && object.zookeeper !== null
        ? ClusterConfig_Zookeeper.fromJSON(object.zookeeper)
        : undefined;
    message.backupWindowStart =
      object.backupWindowStart !== undefined &&
      object.backupWindowStart !== null
        ? TimeOfDay.fromJSON(object.backupWindowStart)
        : undefined;
    message.access =
      object.access !== undefined && object.access !== null
        ? Access.fromJSON(object.access)
        : undefined;
    message.cloudStorage =
      object.cloudStorage !== undefined && object.cloudStorage !== null
        ? CloudStorage.fromJSON(object.cloudStorage)
        : undefined;
    message.sqlDatabaseManagement =
      object.sqlDatabaseManagement !== undefined &&
      object.sqlDatabaseManagement !== null
        ? Boolean(object.sqlDatabaseManagement)
        : undefined;
    message.sqlUserManagement =
      object.sqlUserManagement !== undefined &&
      object.sqlUserManagement !== null
        ? Boolean(object.sqlUserManagement)
        : undefined;
    message.embeddedKeeper =
      object.embeddedKeeper !== undefined && object.embeddedKeeper !== null
        ? Boolean(object.embeddedKeeper)
        : undefined;
    return message;
  },

  toJSON(message: ClusterConfig): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.clickhouse !== undefined &&
      (obj.clickhouse = message.clickhouse
        ? ClusterConfig_Clickhouse.toJSON(message.clickhouse)
        : undefined);
    message.zookeeper !== undefined &&
      (obj.zookeeper = message.zookeeper
        ? ClusterConfig_Zookeeper.toJSON(message.zookeeper)
        : undefined);
    message.backupWindowStart !== undefined &&
      (obj.backupWindowStart = message.backupWindowStart
        ? TimeOfDay.toJSON(message.backupWindowStart)
        : undefined);
    message.access !== undefined &&
      (obj.access = message.access ? Access.toJSON(message.access) : undefined);
    message.cloudStorage !== undefined &&
      (obj.cloudStorage = message.cloudStorage
        ? CloudStorage.toJSON(message.cloudStorage)
        : undefined);
    message.sqlDatabaseManagement !== undefined &&
      (obj.sqlDatabaseManagement = message.sqlDatabaseManagement);
    message.sqlUserManagement !== undefined &&
      (obj.sqlUserManagement = message.sqlUserManagement);
    message.embeddedKeeper !== undefined &&
      (obj.embeddedKeeper = message.embeddedKeeper);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClusterConfig>, I>>(
    object: I
  ): ClusterConfig {
    const message = { ...baseClusterConfig } as ClusterConfig;
    message.version = object.version ?? "";
    message.clickhouse =
      object.clickhouse !== undefined && object.clickhouse !== null
        ? ClusterConfig_Clickhouse.fromPartial(object.clickhouse)
        : undefined;
    message.zookeeper =
      object.zookeeper !== undefined && object.zookeeper !== null
        ? ClusterConfig_Zookeeper.fromPartial(object.zookeeper)
        : undefined;
    message.backupWindowStart =
      object.backupWindowStart !== undefined &&
      object.backupWindowStart !== null
        ? TimeOfDay.fromPartial(object.backupWindowStart)
        : undefined;
    message.access =
      object.access !== undefined && object.access !== null
        ? Access.fromPartial(object.access)
        : undefined;
    message.cloudStorage =
      object.cloudStorage !== undefined && object.cloudStorage !== null
        ? CloudStorage.fromPartial(object.cloudStorage)
        : undefined;
    message.sqlDatabaseManagement = object.sqlDatabaseManagement ?? undefined;
    message.sqlUserManagement = object.sqlUserManagement ?? undefined;
    message.embeddedKeeper = object.embeddedKeeper ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ClusterConfig.$type, ClusterConfig);

const baseClusterConfig_Clickhouse: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ClusterConfig.Clickhouse",
};

export const ClusterConfig_Clickhouse = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ClusterConfig.Clickhouse" as const,

  encode(
    message: ClusterConfig_Clickhouse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.config !== undefined) {
      ClickhouseConfigSet.encode(
        message.config,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClusterConfig_Clickhouse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClusterConfig_Clickhouse,
    } as ClusterConfig_Clickhouse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = ClickhouseConfigSet.decode(reader, reader.uint32());
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

  fromJSON(object: any): ClusterConfig_Clickhouse {
    const message = {
      ...baseClusterConfig_Clickhouse,
    } as ClusterConfig_Clickhouse;
    message.config =
      object.config !== undefined && object.config !== null
        ? ClickhouseConfigSet.fromJSON(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: ClusterConfig_Clickhouse): unknown {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config
        ? ClickhouseConfigSet.toJSON(message.config)
        : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClusterConfig_Clickhouse>, I>>(
    object: I
  ): ClusterConfig_Clickhouse {
    const message = {
      ...baseClusterConfig_Clickhouse,
    } as ClusterConfig_Clickhouse;
    message.config =
      object.config !== undefined && object.config !== null
        ? ClickhouseConfigSet.fromPartial(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ClusterConfig_Clickhouse.$type,
  ClusterConfig_Clickhouse
);

const baseClusterConfig_Zookeeper: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ClusterConfig.Zookeeper",
};

export const ClusterConfig_Zookeeper = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ClusterConfig.Zookeeper" as const,

  encode(
    message: ClusterConfig_Zookeeper,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClusterConfig_Zookeeper {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClusterConfig_Zookeeper,
    } as ClusterConfig_Zookeeper;
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

  fromJSON(object: any): ClusterConfig_Zookeeper {
    const message = {
      ...baseClusterConfig_Zookeeper,
    } as ClusterConfig_Zookeeper;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: ClusterConfig_Zookeeper): unknown {
    const obj: any = {};
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClusterConfig_Zookeeper>, I>>(
    object: I
  ): ClusterConfig_Zookeeper {
    const message = {
      ...baseClusterConfig_Zookeeper,
    } as ClusterConfig_Zookeeper;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ClusterConfig_Zookeeper.$type, ClusterConfig_Zookeeper);

const baseShard: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.Shard",
  name: "",
  clusterId: "",
};

export const Shard = {
  $type: "yandex.cloud.mdb.clickhouse.v1.Shard" as const,

  encode(message: Shard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.clusterId !== "") {
      writer.uint32(18).string(message.clusterId);
    }
    if (message.config !== undefined) {
      ShardConfig.encode(message.config, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Shard {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseShard } as Shard;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.clusterId = reader.string();
          break;
        case 3:
          message.config = ShardConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Shard {
    const message = { ...baseShard } as Shard;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.config =
      object.config !== undefined && object.config !== null
        ? ShardConfig.fromJSON(object.config)
        : undefined;
    return message;
  },

  toJSON(message: Shard): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.config !== undefined &&
      (obj.config = message.config
        ? ShardConfig.toJSON(message.config)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Shard>, I>>(object: I): Shard {
    const message = { ...baseShard } as Shard;
    message.name = object.name ?? "";
    message.clusterId = object.clusterId ?? "";
    message.config =
      object.config !== undefined && object.config !== null
        ? ShardConfig.fromPartial(object.config)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Shard.$type, Shard);

const baseShardGroup: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ShardGroup",
  name: "",
  clusterId: "",
  description: "",
  shardNames: "",
};

export const ShardGroup = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ShardGroup" as const,

  encode(
    message: ShardGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.clusterId !== "") {
      writer.uint32(18).string(message.clusterId);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    for (const v of message.shardNames) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShardGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseShardGroup } as ShardGroup;
    message.shardNames = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.clusterId = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.shardNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShardGroup {
    const message = { ...baseShardGroup } as ShardGroup;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.shardNames = (object.shardNames ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: ShardGroup): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.shardNames) {
      obj.shardNames = message.shardNames.map((e) => e);
    } else {
      obj.shardNames = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ShardGroup>, I>>(
    object: I
  ): ShardGroup {
    const message = { ...baseShardGroup } as ShardGroup;
    message.name = object.name ?? "";
    message.clusterId = object.clusterId ?? "";
    message.description = object.description ?? "";
    message.shardNames = object.shardNames?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(ShardGroup.$type, ShardGroup);

const baseShardConfig: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfig",
};

export const ShardConfig = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfig" as const,

  encode(
    message: ShardConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clickhouse !== undefined) {
      ShardConfig_Clickhouse.encode(
        message.clickhouse,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShardConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseShardConfig } as ShardConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clickhouse = ShardConfig_Clickhouse.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShardConfig {
    const message = { ...baseShardConfig } as ShardConfig;
    message.clickhouse =
      object.clickhouse !== undefined && object.clickhouse !== null
        ? ShardConfig_Clickhouse.fromJSON(object.clickhouse)
        : undefined;
    return message;
  },

  toJSON(message: ShardConfig): unknown {
    const obj: any = {};
    message.clickhouse !== undefined &&
      (obj.clickhouse = message.clickhouse
        ? ShardConfig_Clickhouse.toJSON(message.clickhouse)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ShardConfig>, I>>(
    object: I
  ): ShardConfig {
    const message = { ...baseShardConfig } as ShardConfig;
    message.clickhouse =
      object.clickhouse !== undefined && object.clickhouse !== null
        ? ShardConfig_Clickhouse.fromPartial(object.clickhouse)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ShardConfig.$type, ShardConfig);

const baseShardConfig_Clickhouse: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfig.Clickhouse",
};

export const ShardConfig_Clickhouse = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfig.Clickhouse" as const,

  encode(
    message: ShardConfig_Clickhouse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.config !== undefined) {
      ClickhouseConfigSet.encode(
        message.config,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    if (message.weight !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.weight! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ShardConfig_Clickhouse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseShardConfig_Clickhouse } as ShardConfig_Clickhouse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = ClickhouseConfigSet.decode(reader, reader.uint32());
          break;
        case 2:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        case 3:
          message.weight = Int64Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShardConfig_Clickhouse {
    const message = { ...baseShardConfig_Clickhouse } as ShardConfig_Clickhouse;
    message.config =
      object.config !== undefined && object.config !== null
        ? ClickhouseConfigSet.fromJSON(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    message.weight =
      object.weight !== undefined && object.weight !== null
        ? Number(object.weight)
        : undefined;
    return message;
  },

  toJSON(message: ShardConfig_Clickhouse): unknown {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config
        ? ClickhouseConfigSet.toJSON(message.config)
        : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ShardConfig_Clickhouse>, I>>(
    object: I
  ): ShardConfig_Clickhouse {
    const message = { ...baseShardConfig_Clickhouse } as ShardConfig_Clickhouse;
    message.config =
      object.config !== undefined && object.config !== null
        ? ClickhouseConfigSet.fromPartial(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    message.weight = object.weight ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ShardConfig_Clickhouse.$type, ShardConfig_Clickhouse);

const baseHost: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.Host",
  name: "",
  clusterId: "",
  zoneId: "",
  type: 0,
  health: 0,
  subnetId: "",
  assignPublicIp: false,
  shardName: "",
};

export const Host = {
  $type: "yandex.cloud.mdb.clickhouse.v1.Host" as const,

  encode(message: Host, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.clusterId !== "") {
      writer.uint32(18).string(message.clusterId);
    }
    if (message.zoneId !== "") {
      writer.uint32(26).string(message.zoneId);
    }
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(42).fork()).ldelim();
    }
    if (message.health !== 0) {
      writer.uint32(48).int32(message.health);
    }
    for (const v of message.services) {
      Service.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.subnetId !== "") {
      writer.uint32(66).string(message.subnetId);
    }
    if (message.assignPublicIp === true) {
      writer.uint32(72).bool(message.assignPublicIp);
    }
    if (message.shardName !== "") {
      writer.uint32(82).string(message.shardName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Host {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHost } as Host;
    message.services = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.clusterId = reader.string();
          break;
        case 3:
          message.zoneId = reader.string();
          break;
        case 4:
          message.type = reader.int32() as any;
          break;
        case 5:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        case 6:
          message.health = reader.int32() as any;
          break;
        case 7:
          message.services.push(Service.decode(reader, reader.uint32()));
          break;
        case 8:
          message.subnetId = reader.string();
          break;
        case 9:
          message.assignPublicIp = reader.bool();
          break;
        case 10:
          message.shardName = reader.string();
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
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.zoneId =
      object.zoneId !== undefined && object.zoneId !== null
        ? String(object.zoneId)
        : "";
    message.type =
      object.type !== undefined && object.type !== null
        ? host_TypeFromJSON(object.type)
        : 0;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    message.health =
      object.health !== undefined && object.health !== null
        ? host_HealthFromJSON(object.health)
        : 0;
    message.services = (object.services ?? []).map((e: any) =>
      Service.fromJSON(e)
    );
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    message.assignPublicIp =
      object.assignPublicIp !== undefined && object.assignPublicIp !== null
        ? Boolean(object.assignPublicIp)
        : false;
    message.shardName =
      object.shardName !== undefined && object.shardName !== null
        ? String(object.shardName)
        : "";
    return message;
  },

  toJSON(message: Host): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.type !== undefined && (obj.type = host_TypeToJSON(message.type));
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    message.health !== undefined &&
      (obj.health = host_HealthToJSON(message.health));
    if (message.services) {
      obj.services = message.services.map((e) =>
        e ? Service.toJSON(e) : undefined
      );
    } else {
      obj.services = [];
    }
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    message.assignPublicIp !== undefined &&
      (obj.assignPublicIp = message.assignPublicIp);
    message.shardName !== undefined && (obj.shardName = message.shardName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Host>, I>>(object: I): Host {
    const message = { ...baseHost } as Host;
    message.name = object.name ?? "";
    message.clusterId = object.clusterId ?? "";
    message.zoneId = object.zoneId ?? "";
    message.type = object.type ?? 0;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    message.health = object.health ?? 0;
    message.services =
      object.services?.map((e) => Service.fromPartial(e)) || [];
    message.subnetId = object.subnetId ?? "";
    message.assignPublicIp = object.assignPublicIp ?? false;
    message.shardName = object.shardName ?? "";
    return message;
  },
};

messageTypeRegistry.set(Host.$type, Host);

const baseService: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.Service",
  type: 0,
  health: 0,
};

export const Service = {
  $type: "yandex.cloud.mdb.clickhouse.v1.Service" as const,

  encode(
    message: Service,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.health !== 0) {
      writer.uint32(16).int32(message.health);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Service {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseService } as Service;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.health = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Service {
    const message = { ...baseService } as Service;
    message.type =
      object.type !== undefined && object.type !== null
        ? service_TypeFromJSON(object.type)
        : 0;
    message.health =
      object.health !== undefined && object.health !== null
        ? service_HealthFromJSON(object.health)
        : 0;
    return message;
  },

  toJSON(message: Service): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = service_TypeToJSON(message.type));
    message.health !== undefined &&
      (obj.health = service_HealthToJSON(message.health));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Service>, I>>(object: I): Service {
    const message = { ...baseService } as Service;
    message.type = object.type ?? 0;
    message.health = object.health ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Service.$type, Service);

const baseResources: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.Resources",
  resourcePresetId: "",
  diskSize: 0,
  diskTypeId: "",
};

export const Resources = {
  $type: "yandex.cloud.mdb.clickhouse.v1.Resources" as const,

  encode(
    message: Resources,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resourcePresetId !== "") {
      writer.uint32(10).string(message.resourcePresetId);
    }
    if (message.diskSize !== 0) {
      writer.uint32(16).int64(message.diskSize);
    }
    if (message.diskTypeId !== "") {
      writer.uint32(26).string(message.diskTypeId);
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
        case 2:
          message.diskSize = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.diskTypeId = reader.string();
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
        : "";
    message.diskSize =
      object.diskSize !== undefined && object.diskSize !== null
        ? Number(object.diskSize)
        : 0;
    message.diskTypeId =
      object.diskTypeId !== undefined && object.diskTypeId !== null
        ? String(object.diskTypeId)
        : "";
    return message;
  },

  toJSON(message: Resources): unknown {
    const obj: any = {};
    message.resourcePresetId !== undefined &&
      (obj.resourcePresetId = message.resourcePresetId);
    message.diskSize !== undefined &&
      (obj.diskSize = Math.round(message.diskSize));
    message.diskTypeId !== undefined && (obj.diskTypeId = message.diskTypeId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Resources>, I>>(
    object: I
  ): Resources {
    const message = { ...baseResources } as Resources;
    message.resourcePresetId = object.resourcePresetId ?? "";
    message.diskSize = object.diskSize ?? 0;
    message.diskTypeId = object.diskTypeId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Resources.$type, Resources);

const baseAccess: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.Access",
  dataLens: false,
  webSql: false,
  metrika: false,
  serverless: false,
  dataTransfer: false,
  yandexQuery: false,
};

export const Access = {
  $type: "yandex.cloud.mdb.clickhouse.v1.Access" as const,

  encode(
    message: Access,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dataLens === true) {
      writer.uint32(8).bool(message.dataLens);
    }
    if (message.webSql === true) {
      writer.uint32(16).bool(message.webSql);
    }
    if (message.metrika === true) {
      writer.uint32(24).bool(message.metrika);
    }
    if (message.serverless === true) {
      writer.uint32(32).bool(message.serverless);
    }
    if (message.dataTransfer === true) {
      writer.uint32(40).bool(message.dataTransfer);
    }
    if (message.yandexQuery === true) {
      writer.uint32(48).bool(message.yandexQuery);
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
          message.metrika = reader.bool();
          break;
        case 4:
          message.serverless = reader.bool();
          break;
        case 5:
          message.dataTransfer = reader.bool();
          break;
        case 6:
          message.yandexQuery = reader.bool();
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
      object.webSql !== undefined && object.webSql !== null
        ? Boolean(object.webSql)
        : false;
    message.metrika =
      object.metrika !== undefined && object.metrika !== null
        ? Boolean(object.metrika)
        : false;
    message.serverless =
      object.serverless !== undefined && object.serverless !== null
        ? Boolean(object.serverless)
        : false;
    message.dataTransfer =
      object.dataTransfer !== undefined && object.dataTransfer !== null
        ? Boolean(object.dataTransfer)
        : false;
    message.yandexQuery =
      object.yandexQuery !== undefined && object.yandexQuery !== null
        ? Boolean(object.yandexQuery)
        : false;
    return message;
  },

  toJSON(message: Access): unknown {
    const obj: any = {};
    message.dataLens !== undefined && (obj.dataLens = message.dataLens);
    message.webSql !== undefined && (obj.webSql = message.webSql);
    message.metrika !== undefined && (obj.metrika = message.metrika);
    message.serverless !== undefined && (obj.serverless = message.serverless);
    message.dataTransfer !== undefined &&
      (obj.dataTransfer = message.dataTransfer);
    message.yandexQuery !== undefined &&
      (obj.yandexQuery = message.yandexQuery);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Access>, I>>(object: I): Access {
    const message = { ...baseAccess } as Access;
    message.dataLens = object.dataLens ?? false;
    message.webSql = object.webSql ?? false;
    message.metrika = object.metrika ?? false;
    message.serverless = object.serverless ?? false;
    message.dataTransfer = object.dataTransfer ?? false;
    message.yandexQuery = object.yandexQuery ?? false;
    return message;
  },
};

messageTypeRegistry.set(Access.$type, Access);

const baseCloudStorage: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.CloudStorage",
  enabled: false,
};

export const CloudStorage = {
  $type: "yandex.cloud.mdb.clickhouse.v1.CloudStorage" as const,

  encode(
    message: CloudStorage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.moveFactor !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.moveFactor! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.dataCacheEnabled !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.dataCacheEnabled!,
        },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.dataCacheMaxSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.dataCacheMaxSize!,
        },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.preferNotToMerge !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.preferNotToMerge!,
        },
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CloudStorage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCloudStorage } as CloudStorage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.moveFactor = DoubleValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.dataCacheEnabled = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 4:
          message.dataCacheMaxSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 5:
          message.preferNotToMerge = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CloudStorage {
    const message = { ...baseCloudStorage } as CloudStorage;
    message.enabled =
      object.enabled !== undefined && object.enabled !== null
        ? Boolean(object.enabled)
        : false;
    message.moveFactor =
      object.moveFactor !== undefined && object.moveFactor !== null
        ? Number(object.moveFactor)
        : undefined;
    message.dataCacheEnabled =
      object.dataCacheEnabled !== undefined && object.dataCacheEnabled !== null
        ? Boolean(object.dataCacheEnabled)
        : undefined;
    message.dataCacheMaxSize =
      object.dataCacheMaxSize !== undefined && object.dataCacheMaxSize !== null
        ? Number(object.dataCacheMaxSize)
        : undefined;
    message.preferNotToMerge =
      object.preferNotToMerge !== undefined && object.preferNotToMerge !== null
        ? Boolean(object.preferNotToMerge)
        : undefined;
    return message;
  },

  toJSON(message: CloudStorage): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.moveFactor !== undefined && (obj.moveFactor = message.moveFactor);
    message.dataCacheEnabled !== undefined &&
      (obj.dataCacheEnabled = message.dataCacheEnabled);
    message.dataCacheMaxSize !== undefined &&
      (obj.dataCacheMaxSize = message.dataCacheMaxSize);
    message.preferNotToMerge !== undefined &&
      (obj.preferNotToMerge = message.preferNotToMerge);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CloudStorage>, I>>(
    object: I
  ): CloudStorage {
    const message = { ...baseCloudStorage } as CloudStorage;
    message.enabled = object.enabled ?? false;
    message.moveFactor = object.moveFactor ?? undefined;
    message.dataCacheEnabled = object.dataCacheEnabled ?? undefined;
    message.dataCacheMaxSize = object.dataCacheMaxSize ?? undefined;
    message.preferNotToMerge = object.preferNotToMerge ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(CloudStorage.$type, CloudStorage);

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
