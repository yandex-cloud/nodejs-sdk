/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  MaintenanceWindow,
  MaintenanceOperation,
} from "../../../../../yandex/cloud/mdb/mysql/v1/maintenance";
import { TimeOfDay } from "../../../../../google/type/timeofday";
import { Timestamp } from "../../../../../google/protobuf/timestamp";
import { Mysqlconfigset57 } from "../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7";
import { Mysqlconfigset80 } from "../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0";
import { Int64Value } from "../../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.mdb.mysql.v1";

/**
 * An object that represents MySQL cluster.
 *
 * See [the documentation](/docs/managed-mysql/concepts) for details.
 */
export interface Cluster {
  $type: "yandex.cloud.mdb.mysql.v1.Cluster";
  /**
   * ID of the cluster.
   *
   * This ID is assigned by the platform at the time of creation.
   */
  id: string;
  /** ID of the folder that the cluster belongs to. */
  folderId: string;
  /** Creation timestamp of the cluster. */
  createdAt?: Date;
  /** Name of the cluster. */
  name: string;
  /** Description of the cluster. */
  description: string;
  /** Custom labels for the cluster as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Deployment environment of the cluster. */
  environment: Cluster_Environment;
  /** Monitoring systems data that is relevant to the cluster. */
  monitoring: Monitoring[];
  /** Configuration of the cluster. */
  config?: ClusterConfig;
  /** ID of the network that the cluster belongs to. */
  networkId: string;
  /** Aggregated health of the cluster. */
  health: Cluster_Health;
  /** Current state of the cluster. */
  status: Cluster_Status;
  /** Maintenance window settings for the cluster. */
  maintenanceWindow?: MaintenanceWindow;
  /** Planned maintenance operation to be started for the cluster within the nearest [maintenance_window]. */
  plannedOperation?: MaintenanceOperation;
  /** Effective list of security group IDs applied to the cluster. */
  securityGroupIds: string[];
  /** This option prevents unintended deletion of the cluster. */
  deletionProtection: boolean;
  /** Host groups hosting VMs of the cluster. */
  hostGroupIds: string[];
}

export enum Cluster_Environment {
  ENVIRONMENT_UNSPECIFIED = 0,
  /**
   * PRODUCTION - Environment for stable versions of your apps.
   * A conservative update policy is in effect: only bug fixes are applied during regular maintenance.
   */
  PRODUCTION = 1,
  /**
   * PRESTABLE - Environment for testing, including the Managed Service for MySQL itself.
   * This environment gets new features, improvements, and bug fixes in the first place, compared to the production environment.
   * However, not every update ensures backward compatibility.
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
  /** HEALTH_UNKNOWN - Health of the cluster is unknown ([Host.health] for every host in the cluster is `UNKNOWN`). */
  HEALTH_UNKNOWN = 0,
  /** ALIVE - Cluster is alive and well ([Host.health] for every host in the cluster is `ALIVE`). */
  ALIVE = 1,
  /** DEAD - Cluster is inoperable ([Host.health] for every host in the cluster is `DEAD`). */
  DEAD = 2,
  /** DEGRADED - Cluster is degraded ([Host.health] for at least one host in the cluster is not `ALIVE`). */
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
  /** STOPPED - Cluster is stopped. */
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
  $type: "yandex.cloud.mdb.mysql.v1.Cluster.LabelsEntry";
  key: string;
  value: string;
}

/** Cluster-related monitoring system data. */
export interface Monitoring {
  $type: "yandex.cloud.mdb.mysql.v1.Monitoring";
  /** Name of the monitoring system. */
  name: string;
  /** Description of the monitoring system. */
  description: string;
  /** Link to the monitoring system charts for the cluster. */
  link: string;
}

export interface ClusterConfig {
  $type: "yandex.cloud.mdb.mysql.v1.ClusterConfig";
  /** Version of MySQL used in the cluster. */
  version: string;
  /** Configuration of a MySQL 5.7 server. */
  mysqlConfig57?: Mysqlconfigset57 | undefined;
  /** Configuration of a MySQL 8.0 server. */
  mysqlConfig80?: Mysqlconfigset80 | undefined;
  /** Resource preset for the cluster hosts. */
  resources?: Resources;
  /** Time to start the daily backup, in the UTC timezone. */
  backupWindowStart?: TimeOfDay;
  /** Access policy for external services. */
  access?: Access;
  /** Configuration of the performance diagnostics service. */
  performanceDiagnostics?: PerformanceDiagnostics;
  /** Retention policy of automated backups. */
  backupRetainPeriodDays?: number;
}

export interface Host {
  $type: "yandex.cloud.mdb.mysql.v1.Host";
  /**
   * Name of the host.
   *
   * This name is assigned by the platform at the time of creation.
   * The name is unique across all MDB hosts that exist on the platform, as it defines the FQDN of the host.
   */
  name: string;
  /** ID of the cluster the host belongs to. */
  clusterId: string;
  /** ID of the availability zone where the host resides. */
  zoneId: string;
  /** Resources allocated to the host. */
  resources?: Resources;
  /** Role of the host in the cluster. */
  role: Host_Role;
  /** Aggregated health of the host. */
  health: Host_Health;
  /** List of services provided by the host. */
  services: Service[];
  /** ID of the subnet that the host belongs to. */
  subnetId: string;
  /** Flag that shows if public IP address is assigned to the host so that the host can be accessed from the internet. */
  assignPublicIp: boolean;
  /** Name of the host to be used as the replication source for cascading replication. */
  replicationSource: string;
  /** Host backup priority. */
  backupPriority: number;
  /** Host master promotion priority. */
  priority: number;
}

export enum Host_Role {
  /** ROLE_UNKNOWN - Role of the host is unknown. */
  ROLE_UNKNOWN = 0,
  /** MASTER - Host is the master. */
  MASTER = 1,
  /** REPLICA - Host is a replica. */
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
  /** ALIVE - Host is performing all its functions normally. */
  ALIVE = 1,
  /** DEAD - Host is inoperable, and cannot perform any of its essential functions. */
  DEAD = 2,
  /** DEGRADED - Host is degraded, and can perform only some of its essential functions. */
  DEGRADED = 3,
  /** READONLY - Host is alive, but in read-only mode. */
  READONLY = 4,
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
    case 4:
    case "READONLY":
      return Host_Health.READONLY;
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
    case Host_Health.READONLY:
      return "READONLY";
    default:
      return "UNKNOWN";
  }
}

export interface Service {
  $type: "yandex.cloud.mdb.mysql.v1.Service";
  /** Type of the service provided by the host. */
  type: Service_Type;
  /** Aggregated health of the service. */
  health: Service_Health;
}

export enum Service_Type {
  TYPE_UNSPECIFIED = 0,
  /** MYSQL - The host is a MySQL server. */
  MYSQL = 1,
  UNRECOGNIZED = -1,
}

export function service_TypeFromJSON(object: any): Service_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Service_Type.TYPE_UNSPECIFIED;
    case 1:
    case "MYSQL":
      return Service_Type.MYSQL;
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
    case Service_Type.MYSQL:
      return "MYSQL";
    default:
      return "UNKNOWN";
  }
}

export enum Service_Health {
  /** HEALTH_UNKNOWN - Health of the service is unknown. */
  HEALTH_UNKNOWN = 0,
  /** ALIVE - The service is working normally. */
  ALIVE = 1,
  /** DEAD - The service is dead or unresponsive. */
  DEAD = 2,
  /** READONLY - The service is in read-only mode. */
  READONLY = 3,
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
    case 3:
    case "READONLY":
      return Service_Health.READONLY;
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
    case Service_Health.READONLY:
      return "READONLY";
    default:
      return "UNKNOWN";
  }
}

/** Cluster resource preset. */
export interface Resources {
  $type: "yandex.cloud.mdb.mysql.v1.Resources";
  /**
   * ID of the resource preset that defines available computational resources (vCPU, RAM, etc.) for a cluster host.
   *
   * All available presets are listed in [the documentation](/docs/managed-mysql/concepts/instance-types).
   */
  resourcePresetId: string;
  /** Volume of the storage (for each cluster host, in bytes). */
  diskSize: number;
  /**
   * Type of the storage.
   *
   * Possible values:
   * * `network-hdd` - standard network storage
   * * `network-ssd` - fast network storage
   * * `network-ssd-nonreplicated` - fast network nonreplicated storage
   * * `local-ssd` - fast local storage.
   *
   * See [the documentation](/docs/managed-mysql/concepts/storage) for details.
   */
  diskTypeId: string;
}

export interface Access {
  $type: "yandex.cloud.mdb.mysql.v1.Access";
  /**
   * Allows access from DataLens.
   *
   * See [the documentation](/docs/managed-mysql/operations/datalens-connect) for details.
   */
  dataLens: boolean;
  /**
   * Allows SQL queries to the cluster databases from management console.
   *
   * See [the documentation](/docs/managed-mysql/operations/web-sql-query) for details.
   */
  webSql: boolean;
  /** Allow access for DataTransfer. */
  dataTransfer: boolean;
}

export interface PerformanceDiagnostics {
  $type: "yandex.cloud.mdb.mysql.v1.PerformanceDiagnostics";
  /** Flag that shows if performance statistics gathering is enabled for the cluster. */
  enabled: boolean;
  /** Interval (in seconds) for `my_session` sampling. */
  sessionsSamplingInterval: number;
  /** Interval (in seconds) for `my_statements` sampling. */
  statementsSamplingInterval: number;
}

const baseCluster: object = {
  $type: "yandex.cloud.mdb.mysql.v1.Cluster",
  id: "",
  folderId: "",
  name: "",
  description: "",
  environment: 0,
  networkId: "",
  health: 0,
  status: 0,
  securityGroupIds: "",
  deletionProtection: false,
  hostGroupIds: "",
};

export const Cluster = {
  $type: "yandex.cloud.mdb.mysql.v1.Cluster" as const,

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
          $type: "yandex.cloud.mdb.mysql.v1.Cluster.LabelsEntry",
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
    if (message.maintenanceWindow !== undefined) {
      MaintenanceWindow.encode(
        message.maintenanceWindow,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.plannedOperation !== undefined) {
      MaintenanceOperation.encode(
        message.plannedOperation,
        writer.uint32(114).fork()
      ).ldelim();
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(122).string(v!);
    }
    if (message.deletionProtection === true) {
      writer.uint32(128).bool(message.deletionProtection);
    }
    for (const v of message.hostGroupIds) {
      writer.uint32(138).string(v!);
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
          message.maintenanceWindow = MaintenanceWindow.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.plannedOperation = MaintenanceOperation.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.securityGroupIds.push(reader.string());
          break;
        case 16:
          message.deletionProtection = reader.bool();
          break;
        case 17:
          message.hostGroupIds.push(reader.string());
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
    message.hostGroupIds = (object.hostGroupIds ?? []).map((e: any) =>
      String(e)
    );
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
    if (message.hostGroupIds) {
      obj.hostGroupIds = message.hostGroupIds.map((e) => e);
    } else {
      obj.hostGroupIds = [];
    }
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
    message.hostGroupIds = object.hostGroupIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Cluster.$type, Cluster);

const baseCluster_LabelsEntry: object = {
  $type: "yandex.cloud.mdb.mysql.v1.Cluster.LabelsEntry",
  key: "",
  value: "",
};

export const Cluster_LabelsEntry = {
  $type: "yandex.cloud.mdb.mysql.v1.Cluster.LabelsEntry" as const,

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
  $type: "yandex.cloud.mdb.mysql.v1.Monitoring",
  name: "",
  description: "",
  link: "",
};

export const Monitoring = {
  $type: "yandex.cloud.mdb.mysql.v1.Monitoring" as const,

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
  $type: "yandex.cloud.mdb.mysql.v1.ClusterConfig",
  version: "",
};

export const ClusterConfig = {
  $type: "yandex.cloud.mdb.mysql.v1.ClusterConfig" as const,

  encode(
    message: ClusterConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.mysqlConfig57 !== undefined) {
      Mysqlconfigset57.encode(
        message.mysqlConfig57,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.mysqlConfig80 !== undefined) {
      Mysqlconfigset80.encode(
        message.mysqlConfig80,
        writer.uint32(50).fork()
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
    if (message.performanceDiagnostics !== undefined) {
      PerformanceDiagnostics.encode(
        message.performanceDiagnostics,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.backupRetainPeriodDays !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.backupRetainPeriodDays!,
        },
        writer.uint32(66).fork()
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
          message.mysqlConfig57 = Mysqlconfigset57.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.mysqlConfig80 = Mysqlconfigset80.decode(
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
        case 7:
          message.performanceDiagnostics = PerformanceDiagnostics.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.backupRetainPeriodDays = Int64Value.decode(
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
    message.mysqlConfig57 =
      object.mysqlConfig_5_7 !== undefined && object.mysqlConfig_5_7 !== null
        ? Mysqlconfigset57.fromJSON(object.mysqlConfig_5_7)
        : undefined;
    message.mysqlConfig80 =
      object.mysqlConfig_8_0 !== undefined && object.mysqlConfig_8_0 !== null
        ? Mysqlconfigset80.fromJSON(object.mysqlConfig_8_0)
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
    message.performanceDiagnostics =
      object.performanceDiagnostics !== undefined &&
      object.performanceDiagnostics !== null
        ? PerformanceDiagnostics.fromJSON(object.performanceDiagnostics)
        : undefined;
    message.backupRetainPeriodDays =
      object.backupRetainPeriodDays !== undefined &&
      object.backupRetainPeriodDays !== null
        ? Number(object.backupRetainPeriodDays)
        : undefined;
    return message;
  },

  toJSON(message: ClusterConfig): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.mysqlConfig57 !== undefined &&
      (obj.mysqlConfig_5_7 = message.mysqlConfig57
        ? Mysqlconfigset57.toJSON(message.mysqlConfig57)
        : undefined);
    message.mysqlConfig80 !== undefined &&
      (obj.mysqlConfig_8_0 = message.mysqlConfig80
        ? Mysqlconfigset80.toJSON(message.mysqlConfig80)
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
    message.performanceDiagnostics !== undefined &&
      (obj.performanceDiagnostics = message.performanceDiagnostics
        ? PerformanceDiagnostics.toJSON(message.performanceDiagnostics)
        : undefined);
    message.backupRetainPeriodDays !== undefined &&
      (obj.backupRetainPeriodDays = message.backupRetainPeriodDays);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClusterConfig>, I>>(
    object: I
  ): ClusterConfig {
    const message = { ...baseClusterConfig } as ClusterConfig;
    message.version = object.version ?? "";
    message.mysqlConfig57 =
      object.mysqlConfig57 !== undefined && object.mysqlConfig57 !== null
        ? Mysqlconfigset57.fromPartial(object.mysqlConfig57)
        : undefined;
    message.mysqlConfig80 =
      object.mysqlConfig80 !== undefined && object.mysqlConfig80 !== null
        ? Mysqlconfigset80.fromPartial(object.mysqlConfig80)
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
    message.performanceDiagnostics =
      object.performanceDiagnostics !== undefined &&
      object.performanceDiagnostics !== null
        ? PerformanceDiagnostics.fromPartial(object.performanceDiagnostics)
        : undefined;
    message.backupRetainPeriodDays = object.backupRetainPeriodDays ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ClusterConfig.$type, ClusterConfig);

const baseHost: object = {
  $type: "yandex.cloud.mdb.mysql.v1.Host",
  name: "",
  clusterId: "",
  zoneId: "",
  role: 0,
  health: 0,
  subnetId: "",
  assignPublicIp: false,
  replicationSource: "",
  backupPriority: 0,
  priority: 0,
};

export const Host = {
  $type: "yandex.cloud.mdb.mysql.v1.Host" as const,

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
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(34).fork()).ldelim();
    }
    if (message.role !== 0) {
      writer.uint32(40).int32(message.role);
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
    if (message.replicationSource !== "") {
      writer.uint32(82).string(message.replicationSource);
    }
    if (message.backupPriority !== 0) {
      writer.uint32(88).int64(message.backupPriority);
    }
    if (message.priority !== 0) {
      writer.uint32(96).int64(message.priority);
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
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        case 5:
          message.role = reader.int32() as any;
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
          message.replicationSource = reader.string();
          break;
        case 11:
          message.backupPriority = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.priority = longToNumber(reader.int64() as Long);
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
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    message.assignPublicIp =
      object.assignPublicIp !== undefined && object.assignPublicIp !== null
        ? Boolean(object.assignPublicIp)
        : false;
    message.replicationSource =
      object.replicationSource !== undefined &&
      object.replicationSource !== null
        ? String(object.replicationSource)
        : "";
    message.backupPriority =
      object.backupPriority !== undefined && object.backupPriority !== null
        ? Number(object.backupPriority)
        : 0;
    message.priority =
      object.priority !== undefined && object.priority !== null
        ? Number(object.priority)
        : 0;
    return message;
  },

  toJSON(message: Host): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
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
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    message.assignPublicIp !== undefined &&
      (obj.assignPublicIp = message.assignPublicIp);
    message.replicationSource !== undefined &&
      (obj.replicationSource = message.replicationSource);
    message.backupPriority !== undefined &&
      (obj.backupPriority = Math.round(message.backupPriority));
    message.priority !== undefined &&
      (obj.priority = Math.round(message.priority));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Host>, I>>(object: I): Host {
    const message = { ...baseHost } as Host;
    message.name = object.name ?? "";
    message.clusterId = object.clusterId ?? "";
    message.zoneId = object.zoneId ?? "";
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    message.role = object.role ?? 0;
    message.health = object.health ?? 0;
    message.services =
      object.services?.map((e) => Service.fromPartial(e)) || [];
    message.subnetId = object.subnetId ?? "";
    message.assignPublicIp = object.assignPublicIp ?? false;
    message.replicationSource = object.replicationSource ?? "";
    message.backupPriority = object.backupPriority ?? 0;
    message.priority = object.priority ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Host.$type, Host);

const baseService: object = {
  $type: "yandex.cloud.mdb.mysql.v1.Service",
  type: 0,
  health: 0,
};

export const Service = {
  $type: "yandex.cloud.mdb.mysql.v1.Service" as const,

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
  $type: "yandex.cloud.mdb.mysql.v1.Resources",
  resourcePresetId: "",
  diskSize: 0,
  diskTypeId: "",
};

export const Resources = {
  $type: "yandex.cloud.mdb.mysql.v1.Resources" as const,

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
  $type: "yandex.cloud.mdb.mysql.v1.Access",
  dataLens: false,
  webSql: false,
  dataTransfer: false,
};

export const Access = {
  $type: "yandex.cloud.mdb.mysql.v1.Access" as const,

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
    if (message.dataTransfer === true) {
      writer.uint32(24).bool(message.dataTransfer);
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
    message.dataTransfer =
      object.dataTransfer !== undefined && object.dataTransfer !== null
        ? Boolean(object.dataTransfer)
        : false;
    return message;
  },

  toJSON(message: Access): unknown {
    const obj: any = {};
    message.dataLens !== undefined && (obj.dataLens = message.dataLens);
    message.webSql !== undefined && (obj.webSql = message.webSql);
    message.dataTransfer !== undefined &&
      (obj.dataTransfer = message.dataTransfer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Access>, I>>(object: I): Access {
    const message = { ...baseAccess } as Access;
    message.dataLens = object.dataLens ?? false;
    message.webSql = object.webSql ?? false;
    message.dataTransfer = object.dataTransfer ?? false;
    return message;
  },
};

messageTypeRegistry.set(Access.$type, Access);

const basePerformanceDiagnostics: object = {
  $type: "yandex.cloud.mdb.mysql.v1.PerformanceDiagnostics",
  enabled: false,
  sessionsSamplingInterval: 0,
  statementsSamplingInterval: 0,
};

export const PerformanceDiagnostics = {
  $type: "yandex.cloud.mdb.mysql.v1.PerformanceDiagnostics" as const,

  encode(
    message: PerformanceDiagnostics,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.sessionsSamplingInterval !== 0) {
      writer.uint32(16).int64(message.sessionsSamplingInterval);
    }
    if (message.statementsSamplingInterval !== 0) {
      writer.uint32(24).int64(message.statementsSamplingInterval);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PerformanceDiagnostics {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePerformanceDiagnostics } as PerformanceDiagnostics;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.sessionsSamplingInterval = longToNumber(
            reader.int64() as Long
          );
          break;
        case 3:
          message.statementsSamplingInterval = longToNumber(
            reader.int64() as Long
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PerformanceDiagnostics {
    const message = { ...basePerformanceDiagnostics } as PerformanceDiagnostics;
    message.enabled =
      object.enabled !== undefined && object.enabled !== null
        ? Boolean(object.enabled)
        : false;
    message.sessionsSamplingInterval =
      object.sessionsSamplingInterval !== undefined &&
      object.sessionsSamplingInterval !== null
        ? Number(object.sessionsSamplingInterval)
        : 0;
    message.statementsSamplingInterval =
      object.statementsSamplingInterval !== undefined &&
      object.statementsSamplingInterval !== null
        ? Number(object.statementsSamplingInterval)
        : 0;
    return message;
  },

  toJSON(message: PerformanceDiagnostics): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.sessionsSamplingInterval !== undefined &&
      (obj.sessionsSamplingInterval = Math.round(
        message.sessionsSamplingInterval
      ));
    message.statementsSamplingInterval !== undefined &&
      (obj.statementsSamplingInterval = Math.round(
        message.statementsSamplingInterval
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PerformanceDiagnostics>, I>>(
    object: I
  ): PerformanceDiagnostics {
    const message = { ...basePerformanceDiagnostics } as PerformanceDiagnostics;
    message.enabled = object.enabled ?? false;
    message.sessionsSamplingInterval = object.sessionsSamplingInterval ?? 0;
    message.statementsSamplingInterval = object.statementsSamplingInterval ?? 0;
    return message;
  },
};

messageTypeRegistry.set(PerformanceDiagnostics.$type, PerformanceDiagnostics);

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
