/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  MaintenanceWindow,
  MaintenanceOperation,
} from "../../../../../yandex/cloud/mdb/redis/v1/maintenance";
import { TimeOfDay } from "../../../../../google/type/timeofday";
import { RedisConfigSet } from "../../../../../yandex/cloud/mdb/redis/v1/config/redis";
import { Timestamp } from "../../../../../google/protobuf/timestamp";
import { Redisconfigset50 } from "../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0";
import { Redisconfigset60 } from "../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0";
import { Redisconfigset62 } from "../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2";
import { Redisconfigset70 } from "../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0";
import { Int64Value } from "../../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.mdb.redis.v1";

/**
 * Description of a Redis cluster. For more information, see
 * the Managed Service for Redis [documentation](/docs/managed-redis/concepts/).
 */
export interface Cluster {
  $type: "yandex.cloud.mdb.redis.v1.Cluster";
  /**
   * ID of the Redis cluster.
   * This ID is assigned by MDB at creation time.
   */
  id: string;
  /** ID of the folder that the Redis cluster belongs to. */
  folderId: string;
  /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  createdAt?: Date;
  /**
   * Name of the Redis cluster.
   * The name is unique within the folder. 3-63 characters long.
   */
  name: string;
  /** Description of the Redis cluster. 0-256 characters long. */
  description: string;
  /**
   * Custom labels for the Redis cluster as `key:value` pairs.
   * Maximum 64 per cluster.
   */
  labels: { [key: string]: string };
  /** Deployment environment of the Redis cluster. */
  environment: Cluster_Environment;
  /** Description of monitoring systems relevant to the Redis cluster. */
  monitoring: Monitoring[];
  /** Configuration of the Redis cluster. */
  config?: ClusterConfig;
  networkId: string;
  /** Aggregated cluster health. */
  health: Cluster_Health;
  /** Cluster status. */
  status: Cluster_Status;
  /** Redis cluster mode on/off. */
  sharded: boolean;
  /** Maintenance window for the cluster. */
  maintenanceWindow?: MaintenanceWindow;
  /** Planned maintenance operation to be started for the cluster within the nearest [maintenance_window]. */
  plannedOperation?: MaintenanceOperation;
  /** User security groups */
  securityGroupIds: string[];
  /** TLS port and functionality on\off */
  tlsEnabled: boolean;
  /** Deletion Protection inhibits deletion of the cluster */
  deletionProtection: boolean;
  /** Persistence mode */
  persistenceMode: Cluster_PersistenceMode;
  /** Enable FQDN instead of ip */
  announceHostnames: boolean;
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
  /** HEALTH_UNKNOWN - Cluster is in unknown state (we have no data) */
  HEALTH_UNKNOWN = 0,
  /** ALIVE - Cluster is alive and well (all hosts are alive) */
  ALIVE = 1,
  /** DEAD - Cluster is inoperable (it cannot perform any of its essential functions) */
  DEAD = 2,
  /** DEGRADED - Cluster is partially alive (it can perform some of its essential functions) */
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
  /** STATUS_UNKNOWN - Cluster status is unknown */
  STATUS_UNKNOWN = 0,
  /** CREATING - Cluster is being created */
  CREATING = 1,
  /** RUNNING - Cluster is running */
  RUNNING = 2,
  /** ERROR - Cluster failed */
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

export enum Cluster_PersistenceMode {
  /** ON - cluster persistence mode on */
  ON = 0,
  /** OFF - cluster persistence mode off */
  OFF = 1,
  UNRECOGNIZED = -1,
}

export function cluster_PersistenceModeFromJSON(
  object: any
): Cluster_PersistenceMode {
  switch (object) {
    case 0:
    case "ON":
      return Cluster_PersistenceMode.ON;
    case 1:
    case "OFF":
      return Cluster_PersistenceMode.OFF;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Cluster_PersistenceMode.UNRECOGNIZED;
  }
}

export function cluster_PersistenceModeToJSON(
  object: Cluster_PersistenceMode
): string {
  switch (object) {
    case Cluster_PersistenceMode.ON:
      return "ON";
    case Cluster_PersistenceMode.OFF:
      return "OFF";
    default:
      return "UNKNOWN";
  }
}

export interface Cluster_LabelsEntry {
  $type: "yandex.cloud.mdb.redis.v1.Cluster.LabelsEntry";
  key: string;
  value: string;
}

export interface Monitoring {
  $type: "yandex.cloud.mdb.redis.v1.Monitoring";
  /** Name of the monitoring system. */
  name: string;
  /** Description of the monitoring system. */
  description: string;
  /** Link to the monitoring system charts for the Redis cluster. */
  link: string;
}

export interface ClusterConfig {
  $type: "yandex.cloud.mdb.redis.v1.ClusterConfig";
  /** Version of Redis server software. */
  version: string;
  /** Configuration of a Redis 5.0 server. */
  redisConfig50?: Redisconfigset50 | undefined;
  /** Configuration of a Redis 6.0 server. */
  redisConfig60?: Redisconfigset60 | undefined;
  /** Configuration of a Redis 6.2 server. */
  redisConfig62?: Redisconfigset62 | undefined;
  /** Configuration of a Redis 7.0 server. */
  redisConfig70?: Redisconfigset70 | undefined;
  /** Resources allocated to Redis hosts. */
  resources?: Resources;
  /** Time to start the daily backup, in the UTC timezone. */
  backupWindowStart?: TimeOfDay;
  /** Access policy to DB */
  access?: Access;
  /** Unified configuration of a Redis cluster. */
  redis?: RedisConfigSet;
}

export interface Shard {
  $type: "yandex.cloud.mdb.redis.v1.Shard";
  /**
   * Name of the Redis shard. The shard name is assigned by user at creation time, and cannot be changed.
   * 1-63 characters long.
   */
  name: string;
  /** ID of the Redis cluster the shard belongs to. The ID is assigned by MDB at creation time. */
  clusterId: string;
}

export interface Host {
  $type: "yandex.cloud.mdb.redis.v1.Host";
  /**
   * Name of the Redis host. The host name is assigned by MDB at creation time, and cannot be changed.
   * 1-63 characters long.
   *
   * The name is unique across all MDB hosts that exist on the platform, as it defines the FQDN of the host.
   */
  name: string;
  /** ID of the Redis cluster. The ID is assigned by MDB at creation time. */
  clusterId: string;
  /** ID of the availability zone where the Redis host resides. */
  zoneId: string;
  /** ID of the subnet that the host belongs to. */
  subnetId: string;
  /** Resources allocated to the Redis host. */
  resources?: Resources;
  /** Role of the host in the cluster. */
  role: Host_Role;
  /** Status code of the aggregated health of the host. */
  health: Host_Health;
  /** Services provided by the host. */
  services: Service[];
  shardName: string;
  /**
   * A replica with a low priority number is considered better for promotion.
   * A replica with priority of 0 will never be selected by Redis Sentinel for promotion.
   * Works only for non-sharded clusters. Default value is 100.
   */
  replicaPriority?: number;
  /** Flag showing public IP assignment status to this host. */
  assignPublicIp: boolean;
}

export enum Host_Role {
  /** ROLE_UNKNOWN - Role of the host in the cluster is unknown. */
  ROLE_UNKNOWN = 0,
  /** MASTER - Host is the master Redis server in the cluster. */
  MASTER = 1,
  /** REPLICA - Host is a replica (standby) Redis server in the cluster. */
  REPLICA = 2,
  UNRECOGNIZED = -1,
}

export function host_RoleFromJSON(object: any): Host_Role {
  switch (object) {
    case 0:
    case "ROLE_UNKNOWN":
      return Host_Role.ROLE_UNKNOWN;
    case 1:
    case "MASTER":
      return Host_Role.MASTER;
    case 2:
    case "REPLICA":
      return Host_Role.REPLICA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Host_Role.UNRECOGNIZED;
  }
}

export function host_RoleToJSON(object: Host_Role): string {
  switch (object) {
    case Host_Role.ROLE_UNKNOWN:
      return "ROLE_UNKNOWN";
    case Host_Role.MASTER:
      return "MASTER";
    case Host_Role.REPLICA:
      return "REPLICA";
    default:
      return "UNKNOWN";
  }
}

export enum Host_Health {
  /** HEALTH_UNKNOWN - Health of the host is unknown. */
  HEALTH_UNKNOWN = 0,
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
    case "HEALTH_UNKNOWN":
      return Host_Health.HEALTH_UNKNOWN;
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
    case Host_Health.HEALTH_UNKNOWN:
      return "HEALTH_UNKNOWN";
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
  $type: "yandex.cloud.mdb.redis.v1.Service";
  /** Type of the service provided by the host. */
  type: Service_Type;
  /** Status code of server availability. */
  health: Service_Health;
}

export enum Service_Type {
  TYPE_UNSPECIFIED = 0,
  /** REDIS - The host is a Redis server. */
  REDIS = 1,
  /** ARBITER - The host provides a Sentinel-only service (a quorum node). */
  ARBITER = 2,
  /** REDIS_CLUSTER - The host is a Redis Cluster node. */
  REDIS_CLUSTER = 3,
  UNRECOGNIZED = -1,
}

export function service_TypeFromJSON(object: any): Service_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Service_Type.TYPE_UNSPECIFIED;
    case 1:
    case "REDIS":
      return Service_Type.REDIS;
    case 2:
    case "ARBITER":
      return Service_Type.ARBITER;
    case 3:
    case "REDIS_CLUSTER":
      return Service_Type.REDIS_CLUSTER;
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
    case Service_Type.REDIS:
      return "REDIS";
    case Service_Type.ARBITER:
      return "ARBITER";
    case Service_Type.REDIS_CLUSTER:
      return "REDIS_CLUSTER";
    default:
      return "UNKNOWN";
  }
}

export enum Service_Health {
  /** HEALTH_UNKNOWN - Health of the server is unknown. */
  HEALTH_UNKNOWN = 0,
  /** ALIVE - The server is working normally. */
  ALIVE = 1,
  /** DEAD - The server is dead or unresponsive. */
  DEAD = 2,
  UNRECOGNIZED = -1,
}

export function service_HealthFromJSON(object: any): Service_Health {
  switch (object) {
    case 0:
    case "HEALTH_UNKNOWN":
      return Service_Health.HEALTH_UNKNOWN;
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
    case Service_Health.HEALTH_UNKNOWN:
      return "HEALTH_UNKNOWN";
    case Service_Health.ALIVE:
      return "ALIVE";
    case Service_Health.DEAD:
      return "DEAD";
    default:
      return "UNKNOWN";
  }
}

export interface Resources {
  $type: "yandex.cloud.mdb.redis.v1.Resources";
  /**
   * ID of the preset for computational resources available to a host (CPU, memory etc.).
   * All available presets are listed in the [documentation](/docs/managed-redis/concepts/instance-types).
   */
  resourcePresetId: string;
  /** Volume of the storage available to a host, in bytes. */
  diskSize: number;
  /**
   * Type of the storage environment for the host.
   * Possible values:
   * * network-ssd - network SSD drive,
   * * local-ssd - local SSD storage.
   */
  diskTypeId: string;
}

export interface Access {
  $type: "yandex.cloud.mdb.redis.v1.Access";
  /** Allow access for DataLens */
  dataLens: boolean;
}

const baseCluster: object = {
  $type: "yandex.cloud.mdb.redis.v1.Cluster",
  id: "",
  folderId: "",
  name: "",
  description: "",
  environment: 0,
  networkId: "",
  health: 0,
  status: 0,
  sharded: false,
  securityGroupIds: "",
  tlsEnabled: false,
  deletionProtection: false,
  persistenceMode: 0,
  announceHostnames: false,
};

export const Cluster = {
  $type: "yandex.cloud.mdb.redis.v1.Cluster" as const,

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
          $type: "yandex.cloud.mdb.redis.v1.Cluster.LabelsEntry",
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
    if (message.sharded === true) {
      writer.uint32(104).bool(message.sharded);
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
    if (message.tlsEnabled === true) {
      writer.uint32(136).bool(message.tlsEnabled);
    }
    if (message.deletionProtection === true) {
      writer.uint32(144).bool(message.deletionProtection);
    }
    if (message.persistenceMode !== 0) {
      writer.uint32(152).int32(message.persistenceMode);
    }
    if (message.announceHostnames === true) {
      writer.uint32(160).bool(message.announceHostnames);
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
          message.sharded = reader.bool();
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
          message.tlsEnabled = reader.bool();
          break;
        case 18:
          message.deletionProtection = reader.bool();
          break;
        case 19:
          message.persistenceMode = reader.int32() as any;
          break;
        case 20:
          message.announceHostnames = reader.bool();
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
    message.sharded =
      object.sharded !== undefined && object.sharded !== null
        ? Boolean(object.sharded)
        : false;
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
    message.tlsEnabled =
      object.tlsEnabled !== undefined && object.tlsEnabled !== null
        ? Boolean(object.tlsEnabled)
        : false;
    message.deletionProtection =
      object.deletionProtection !== undefined &&
      object.deletionProtection !== null
        ? Boolean(object.deletionProtection)
        : false;
    message.persistenceMode =
      object.persistenceMode !== undefined && object.persistenceMode !== null
        ? cluster_PersistenceModeFromJSON(object.persistenceMode)
        : 0;
    message.announceHostnames =
      object.announceHostnames !== undefined &&
      object.announceHostnames !== null
        ? Boolean(object.announceHostnames)
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
    message.sharded !== undefined && (obj.sharded = message.sharded);
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
    message.tlsEnabled !== undefined && (obj.tlsEnabled = message.tlsEnabled);
    message.deletionProtection !== undefined &&
      (obj.deletionProtection = message.deletionProtection);
    message.persistenceMode !== undefined &&
      (obj.persistenceMode = cluster_PersistenceModeToJSON(
        message.persistenceMode
      ));
    message.announceHostnames !== undefined &&
      (obj.announceHostnames = message.announceHostnames);
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
    message.sharded = object.sharded ?? false;
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
    message.tlsEnabled = object.tlsEnabled ?? false;
    message.deletionProtection = object.deletionProtection ?? false;
    message.persistenceMode = object.persistenceMode ?? 0;
    message.announceHostnames = object.announceHostnames ?? false;
    return message;
  },
};

messageTypeRegistry.set(Cluster.$type, Cluster);

const baseCluster_LabelsEntry: object = {
  $type: "yandex.cloud.mdb.redis.v1.Cluster.LabelsEntry",
  key: "",
  value: "",
};

export const Cluster_LabelsEntry = {
  $type: "yandex.cloud.mdb.redis.v1.Cluster.LabelsEntry" as const,

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
  $type: "yandex.cloud.mdb.redis.v1.Monitoring",
  name: "",
  description: "",
  link: "",
};

export const Monitoring = {
  $type: "yandex.cloud.mdb.redis.v1.Monitoring" as const,

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
  $type: "yandex.cloud.mdb.redis.v1.ClusterConfig",
  version: "",
};

export const ClusterConfig = {
  $type: "yandex.cloud.mdb.redis.v1.ClusterConfig" as const,

  encode(
    message: ClusterConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.redisConfig50 !== undefined) {
      Redisconfigset50.encode(
        message.redisConfig50,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.redisConfig60 !== undefined) {
      Redisconfigset60.encode(
        message.redisConfig60,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.redisConfig62 !== undefined) {
      Redisconfigset62.encode(
        message.redisConfig62,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.redisConfig70 !== undefined) {
      Redisconfigset70.encode(
        message.redisConfig70,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
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
    if (message.redis !== undefined) {
      RedisConfigSet.encode(message.redis, writer.uint32(74).fork()).ldelim();
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
          message.redisConfig50 = Redisconfigset50.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.redisConfig60 = Redisconfigset60.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.redisConfig62 = Redisconfigset62.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.redisConfig70 = Redisconfigset70.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        case 4:
          message.backupWindowStart = TimeOfDay.decode(reader, reader.uint32());
          break;
        case 5:
          message.access = Access.decode(reader, reader.uint32());
          break;
        case 9:
          message.redis = RedisConfigSet.decode(reader, reader.uint32());
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
    message.redisConfig50 =
      object.redisConfig_5_0 !== undefined && object.redisConfig_5_0 !== null
        ? Redisconfigset50.fromJSON(object.redisConfig_5_0)
        : undefined;
    message.redisConfig60 =
      object.redisConfig_6_0 !== undefined && object.redisConfig_6_0 !== null
        ? Redisconfigset60.fromJSON(object.redisConfig_6_0)
        : undefined;
    message.redisConfig62 =
      object.redisConfig_6_2 !== undefined && object.redisConfig_6_2 !== null
        ? Redisconfigset62.fromJSON(object.redisConfig_6_2)
        : undefined;
    message.redisConfig70 =
      object.redisConfig_7_0 !== undefined && object.redisConfig_7_0 !== null
        ? Redisconfigset70.fromJSON(object.redisConfig_7_0)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
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
    message.redis =
      object.redis !== undefined && object.redis !== null
        ? RedisConfigSet.fromJSON(object.redis)
        : undefined;
    return message;
  },

  toJSON(message: ClusterConfig): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.redisConfig50 !== undefined &&
      (obj.redisConfig_5_0 = message.redisConfig50
        ? Redisconfigset50.toJSON(message.redisConfig50)
        : undefined);
    message.redisConfig60 !== undefined &&
      (obj.redisConfig_6_0 = message.redisConfig60
        ? Redisconfigset60.toJSON(message.redisConfig60)
        : undefined);
    message.redisConfig62 !== undefined &&
      (obj.redisConfig_6_2 = message.redisConfig62
        ? Redisconfigset62.toJSON(message.redisConfig62)
        : undefined);
    message.redisConfig70 !== undefined &&
      (obj.redisConfig_7_0 = message.redisConfig70
        ? Redisconfigset70.toJSON(message.redisConfig70)
        : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    message.backupWindowStart !== undefined &&
      (obj.backupWindowStart = message.backupWindowStart
        ? TimeOfDay.toJSON(message.backupWindowStart)
        : undefined);
    message.access !== undefined &&
      (obj.access = message.access ? Access.toJSON(message.access) : undefined);
    message.redis !== undefined &&
      (obj.redis = message.redis
        ? RedisConfigSet.toJSON(message.redis)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClusterConfig>, I>>(
    object: I
  ): ClusterConfig {
    const message = { ...baseClusterConfig } as ClusterConfig;
    message.version = object.version ?? "";
    message.redisConfig50 =
      object.redisConfig50 !== undefined && object.redisConfig50 !== null
        ? Redisconfigset50.fromPartial(object.redisConfig50)
        : undefined;
    message.redisConfig60 =
      object.redisConfig60 !== undefined && object.redisConfig60 !== null
        ? Redisconfigset60.fromPartial(object.redisConfig60)
        : undefined;
    message.redisConfig62 =
      object.redisConfig62 !== undefined && object.redisConfig62 !== null
        ? Redisconfigset62.fromPartial(object.redisConfig62)
        : undefined;
    message.redisConfig70 =
      object.redisConfig70 !== undefined && object.redisConfig70 !== null
        ? Redisconfigset70.fromPartial(object.redisConfig70)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
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
    message.redis =
      object.redis !== undefined && object.redis !== null
        ? RedisConfigSet.fromPartial(object.redis)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ClusterConfig.$type, ClusterConfig);

const baseShard: object = {
  $type: "yandex.cloud.mdb.redis.v1.Shard",
  name: "",
  clusterId: "",
};

export const Shard = {
  $type: "yandex.cloud.mdb.redis.v1.Shard" as const,

  encode(message: Shard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.clusterId !== "") {
      writer.uint32(18).string(message.clusterId);
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
    return message;
  },

  toJSON(message: Shard): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Shard>, I>>(object: I): Shard {
    const message = { ...baseShard } as Shard;
    message.name = object.name ?? "";
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Shard.$type, Shard);

const baseHost: object = {
  $type: "yandex.cloud.mdb.redis.v1.Host",
  name: "",
  clusterId: "",
  zoneId: "",
  subnetId: "",
  role: 0,
  health: 0,
  shardName: "",
  assignPublicIp: false,
};

export const Host = {
  $type: "yandex.cloud.mdb.redis.v1.Host" as const,

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
    if (message.subnetId !== "") {
      writer.uint32(34).string(message.subnetId);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(42).fork()).ldelim();
    }
    if (message.role !== 0) {
      writer.uint32(48).int32(message.role);
    }
    if (message.health !== 0) {
      writer.uint32(56).int32(message.health);
    }
    for (const v of message.services) {
      Service.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.shardName !== "") {
      writer.uint32(74).string(message.shardName);
    }
    if (message.replicaPriority !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.replicaPriority!,
        },
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.assignPublicIp === true) {
      writer.uint32(88).bool(message.assignPublicIp);
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
          message.subnetId = reader.string();
          break;
        case 5:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        case 6:
          message.role = reader.int32() as any;
          break;
        case 7:
          message.health = reader.int32() as any;
          break;
        case 8:
          message.services.push(Service.decode(reader, reader.uint32()));
          break;
        case 9:
          message.shardName = reader.string();
          break;
        case 10:
          message.replicaPriority = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 11:
          message.assignPublicIp = reader.bool();
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
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    message.role =
      object.role !== undefined && object.role !== null
        ? host_RoleFromJSON(object.role)
        : 0;
    message.health =
      object.health !== undefined && object.health !== null
        ? host_HealthFromJSON(object.health)
        : 0;
    message.services = (object.services ?? []).map((e: any) =>
      Service.fromJSON(e)
    );
    message.shardName =
      object.shardName !== undefined && object.shardName !== null
        ? String(object.shardName)
        : "";
    message.replicaPriority =
      object.replicaPriority !== undefined && object.replicaPriority !== null
        ? Number(object.replicaPriority)
        : undefined;
    message.assignPublicIp =
      object.assignPublicIp !== undefined && object.assignPublicIp !== null
        ? Boolean(object.assignPublicIp)
        : false;
    return message;
  },

  toJSON(message: Host): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    message.role !== undefined && (obj.role = host_RoleToJSON(message.role));
    message.health !== undefined &&
      (obj.health = host_HealthToJSON(message.health));
    if (message.services) {
      obj.services = message.services.map((e) =>
        e ? Service.toJSON(e) : undefined
      );
    } else {
      obj.services = [];
    }
    message.shardName !== undefined && (obj.shardName = message.shardName);
    message.replicaPriority !== undefined &&
      (obj.replicaPriority = message.replicaPriority);
    message.assignPublicIp !== undefined &&
      (obj.assignPublicIp = message.assignPublicIp);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Host>, I>>(object: I): Host {
    const message = { ...baseHost } as Host;
    message.name = object.name ?? "";
    message.clusterId = object.clusterId ?? "";
    message.zoneId = object.zoneId ?? "";
    message.subnetId = object.subnetId ?? "";
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    message.role = object.role ?? 0;
    message.health = object.health ?? 0;
    message.services =
      object.services?.map((e) => Service.fromPartial(e)) || [];
    message.shardName = object.shardName ?? "";
    message.replicaPriority = object.replicaPriority ?? undefined;
    message.assignPublicIp = object.assignPublicIp ?? false;
    return message;
  },
};

messageTypeRegistry.set(Host.$type, Host);

const baseService: object = {
  $type: "yandex.cloud.mdb.redis.v1.Service",
  type: 0,
  health: 0,
};

export const Service = {
  $type: "yandex.cloud.mdb.redis.v1.Service" as const,

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
  $type: "yandex.cloud.mdb.redis.v1.Resources",
  resourcePresetId: "",
  diskSize: 0,
  diskTypeId: "",
};

export const Resources = {
  $type: "yandex.cloud.mdb.redis.v1.Resources" as const,

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
  $type: "yandex.cloud.mdb.redis.v1.Access",
  dataLens: false,
};

export const Access = {
  $type: "yandex.cloud.mdb.redis.v1.Access" as const,

  encode(
    message: Access,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dataLens === true) {
      writer.uint32(8).bool(message.dataLens);
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
    return message;
  },

  toJSON(message: Access): unknown {
    const obj: any = {};
    message.dataLens !== undefined && (obj.dataLens = message.dataLens);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Access>, I>>(object: I): Access {
    const message = { ...baseAccess } as Access;
    message.dataLens = object.dataLens ?? false;
    return message;
  },
};

messageTypeRegistry.set(Access.$type, Access);

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
