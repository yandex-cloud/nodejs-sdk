/* eslint-disable */
import { MessageType, messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  MaintenanceWindow,
  MaintenanceOperation,
} from "../../../../../yandex/cloud/mdb/postgresql/v1/maintenance";
import { TimeOfDay } from "../../../../../google/type/timeofday";
import { Timestamp } from "../../../../../google/protobuf/timestamp";
import { Postgresqlconfigset96 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql9_6";
import { Postgresqlconfigset101c } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql10_1c";
import { PostgresqlConfigSet10 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql10";
import { PostgresqlConfigSet11 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql11";
import { Postgresqlconfigset111c } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql11_1c";
import { PostgresqlConfigSet12 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql12";
import { Postgresqlconfigset121c } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql12_1c";
import { PostgresqlConfigSet13 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql13";
import { Postgresqlconfigset131c } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql13_1c";
import { PostgresqlConfigSet14 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql14";
import { Postgresqlconfigset141c } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql14_1c";
import { PostgresqlConfigSet15 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql15";
import { Postgresqlconfigset151c } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql15_1c";
import { PostgresqlConfigSet16 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql16";
import { Postgresqlconfigset161c } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql16_1c";
import { Postgresqlhostconfig96 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host9_6";
import { Postgresqlhostconfig101c } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host10_1c";
import { PostgresqlHostConfig10 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host10";
import { PostgresqlHostConfig11 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host11";
import { Postgresqlhostconfig111c } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host11_1c";
import { PostgresqlHostConfig12 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host12";
import { Postgresqlhostconfig121c } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host12_1c";
import { PostgresqlHostConfig13 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host13";
import { Postgresqlhostconfig131c } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host13_1c";
import { PostgresqlHostConfig14 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host14";
import { Postgresqlhostconfig141c } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host14_1c";
import { PostgresqlHostConfig15 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host15";
import { Postgresqlhostconfig151c } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host15_1c";
import { PostgresqlHostConfig16 } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host16";
import { Postgresqlhostconfig161c } from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host16_1c";
import { BoolValue, Int64Value } from "../../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.mdb.postgresql.v1";

/**
 * A PostgreSQL Cluster resource. For more information, see
 * the [Concepts](/docs/managed-postgresql/concepts) section of the documentation.
 */
export interface Cluster {
  $type: "yandex.cloud.mdb.postgresql.v1.Cluster";
  /**
   * ID of the PostgreSQL cluster.
   * This ID is assigned by MDB at creation time.
   */
  id: string;
  /** ID of the folder that the PostgreSQL cluster belongs to. */
  folderId: string;
  /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  createdAt?: Date;
  /**
   * Name of the PostgreSQL cluster.
   * The name is unique within the folder. 1-63 characters long.
   */
  name: string;
  /** Description of the PostgreSQL cluster. 0-256 characters long. */
  description: string;
  /**
   * Custom labels for the PostgreSQL cluster as `` key:value `` pairs.
   * Maximum 64 per resource.
   */
  labels: { [key: string]: string };
  /** Deployment environment of the PostgreSQL cluster. */
  environment: Cluster_Environment;
  /** Description of monitoring systems relevant to the PostgreSQL cluster. */
  monitoring: Monitoring[];
  /** Configuration of the PostgreSQL cluster. */
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
  /** Host groups hosting VMs of the cluster. */
  hostGroupIds: string[];
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
  $type: "yandex.cloud.mdb.postgresql.v1.Cluster.LabelsEntry";
  key: string;
  value: string;
}

/** Monitoring system. */
export interface Monitoring {
  $type: "yandex.cloud.mdb.postgresql.v1.Monitoring";
  /** Name of the monitoring system. */
  name: string;
  /** Description of the monitoring system. */
  description: string;
  /** Link to the monitoring system charts for the PostgreSQL cluster. */
  link: string;
}

export interface ClusterConfig {
  $type: "yandex.cloud.mdb.postgresql.v1.ClusterConfig";
  /** Version of PostgreSQL server software. */
  version: string;
  /** Configuration of a PostgreSQL 9.6 server. */
  postgresqlConfig96?: Postgresqlconfigset96 | undefined;
  /** Configuration of a PostgreSQL 10 1C server. */
  postgresqlConfig101c?: Postgresqlconfigset101c | undefined;
  /** Configuration of a PostgreSQL 10 server. */
  postgresqlConfig10?: PostgresqlConfigSet10 | undefined;
  /** Configuration of a PostgreSQL 11 server. */
  postgresqlConfig11?: PostgresqlConfigSet11 | undefined;
  /** Configuration of a PostgreSQL 11 1C server. */
  postgresqlConfig111c?: Postgresqlconfigset111c | undefined;
  /** Configuration of a PostgreSQL 12 server. */
  postgresqlConfig12?: PostgresqlConfigSet12 | undefined;
  /** Configuration of a PostgreSQL 12 1C server. */
  postgresqlConfig121c?: Postgresqlconfigset121c | undefined;
  /** Configuration of a PostgreSQL 13 server. */
  postgresqlConfig13?: PostgresqlConfigSet13 | undefined;
  /** Configuration of a PostgreSQL 13 1C server. */
  postgresqlConfig131c?: Postgresqlconfigset131c | undefined;
  /** Configuration of a PostgreSQL 14 server. */
  postgresqlConfig14?: PostgresqlConfigSet14 | undefined;
  /** Configuration of a PostgreSQL 14 1C server. */
  postgresqlConfig141c?: Postgresqlconfigset141c | undefined;
  /** Configuration of a PostgreSQL 15 server. */
  postgresqlConfig15?: PostgresqlConfigSet15 | undefined;
  /** Configuration of a PostgreSQL 15 1C server. */
  postgresqlConfig151c?: Postgresqlconfigset151c | undefined;
  /** Configuration of a PostgreSQL 16 server. */
  postgresqlConfig16?: PostgresqlConfigSet16 | undefined;
  /** Configuration of a PostgreSQL 16 1C server. */
  postgresqlConfig161c?: Postgresqlconfigset161c | undefined;
  /** Configuration of the connection pooler. */
  poolerConfig?: ConnectionPoolerConfig;
  /** Resources allocated to PostgreSQL hosts. */
  resources?: Resources;
  /** Configuration setting which enables/disables autofailover in cluster. */
  autofailover?: boolean;
  /** Time to start the daily backup, in the UTC timezone. */
  backupWindowStart?: TimeOfDay;
  /** Retention policy of automated backups. */
  backupRetainPeriodDays?: number;
  /** Access policy to DB */
  access?: Access;
  /** Configuration of the performance diagnostics service. */
  performanceDiagnostics?: PerformanceDiagnostics;
  /** Disk size autoscaling */
  diskSizeAutoscaling?: DiskSizeAutoscaling;
}

export interface ConnectionPoolerConfig {
  $type: "yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig";
  /**
   * Mode that the connection pooler is working in.
   * See descriptions of all modes in the [documentation for PgBouncer](https://pgbouncer.github.io/usage).
   */
  poolingMode: ConnectionPoolerConfig_PoolingMode;
  /** Setting `server_reset_query_always` parameter in PgBouncer. */
  poolDiscard?: boolean;
}

export enum ConnectionPoolerConfig_PoolingMode {
  POOLING_MODE_UNSPECIFIED = 0,
  /** SESSION - Session pooling mode. */
  SESSION = 1,
  /** TRANSACTION - Transaction pooling mode. */
  TRANSACTION = 2,
  /** STATEMENT - Statement pooling mode. */
  STATEMENT = 3,
  UNRECOGNIZED = -1,
}

export function connectionPoolerConfig_PoolingModeFromJSON(
  object: any
): ConnectionPoolerConfig_PoolingMode {
  switch (object) {
    case 0:
    case "POOLING_MODE_UNSPECIFIED":
      return ConnectionPoolerConfig_PoolingMode.POOLING_MODE_UNSPECIFIED;
    case 1:
    case "SESSION":
      return ConnectionPoolerConfig_PoolingMode.SESSION;
    case 2:
    case "TRANSACTION":
      return ConnectionPoolerConfig_PoolingMode.TRANSACTION;
    case 3:
    case "STATEMENT":
      return ConnectionPoolerConfig_PoolingMode.STATEMENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ConnectionPoolerConfig_PoolingMode.UNRECOGNIZED;
  }
}

export function connectionPoolerConfig_PoolingModeToJSON(
  object: ConnectionPoolerConfig_PoolingMode
): string {
  switch (object) {
    case ConnectionPoolerConfig_PoolingMode.POOLING_MODE_UNSPECIFIED:
      return "POOLING_MODE_UNSPECIFIED";
    case ConnectionPoolerConfig_PoolingMode.SESSION:
      return "SESSION";
    case ConnectionPoolerConfig_PoolingMode.TRANSACTION:
      return "TRANSACTION";
    case ConnectionPoolerConfig_PoolingMode.STATEMENT:
      return "STATEMENT";
    default:
      return "UNKNOWN";
  }
}

export interface Host {
  $type: "yandex.cloud.mdb.postgresql.v1.Host";
  /**
   * Name of the PostgreSQL host. The host name is assigned by MDB at creation time, and cannot be changed.
   * 1-63 characters long.
   *
   * The name is unique across all MDB hosts that exist on the platform, as it defines the FQDN of the host.
   */
  name: string;
  /** ID of the PostgreSQL host. The ID is assigned by MDB at creation time. */
  clusterId: string;
  /** ID of the availability zone where the PostgreSQL host resides. */
  zoneId: string;
  /** Resources allocated to the PostgreSQL host. */
  resources?: Resources;
  /** Role of the host in the cluster. */
  role: Host_Role;
  /** Status code of the aggregated health of the host. */
  health: Host_Health;
  /** Services provided by the host. */
  services: Service[];
  /** ID of the subnet that the host belongs to. */
  subnetId: string;
  /** Name of the host to be used as the replication source for cascading replication. */
  replicationSource: string;
  /**
   * Priority of the host as a replica. Higher value means higher priority.
   *
   * The host with the highest priority is the synchronous replica. All others are asynchronous.
   * The synchronous replica replaces the master when needed.
   *
   * When a replica becomes the master, its priority is ignored.
   */
  priority?: number;
  /** Configuration of a PostgreSQL server for the host. */
  config?: HostConfig;
  /** Flag showing public IP assignment status to this host. */
  assignPublicIp: boolean;
  replicaType: Host_ReplicaType;
}

export enum Host_Role {
  /** ROLE_UNKNOWN - Role of the host in the cluster is unknown. */
  ROLE_UNKNOWN = 0,
  /** MASTER - Host is the master PostgreSQL server in the cluster. */
  MASTER = 1,
  /** REPLICA - Host is a replica (standby) PostgreSQL server in the cluster. */
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

export enum Host_ReplicaType {
  /** REPLICA_TYPE_UNKNOWN - Replica type is unknown (we have no data) or it's master */
  REPLICA_TYPE_UNKNOWN = 0,
  ASYNC = 1,
  SYNC = 2,
  QUORUM = 3,
  UNRECOGNIZED = -1,
}

export function host_ReplicaTypeFromJSON(object: any): Host_ReplicaType {
  switch (object) {
    case 0:
    case "REPLICA_TYPE_UNKNOWN":
      return Host_ReplicaType.REPLICA_TYPE_UNKNOWN;
    case 1:
    case "ASYNC":
      return Host_ReplicaType.ASYNC;
    case 2:
    case "SYNC":
      return Host_ReplicaType.SYNC;
    case 3:
    case "QUORUM":
      return Host_ReplicaType.QUORUM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Host_ReplicaType.UNRECOGNIZED;
  }
}

export function host_ReplicaTypeToJSON(object: Host_ReplicaType): string {
  switch (object) {
    case Host_ReplicaType.REPLICA_TYPE_UNKNOWN:
      return "REPLICA_TYPE_UNKNOWN";
    case Host_ReplicaType.ASYNC:
      return "ASYNC";
    case Host_ReplicaType.SYNC:
      return "SYNC";
    case Host_ReplicaType.QUORUM:
      return "QUORUM";
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
  /** READONLY - The host is alive, but in read-only mode. */
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

export interface HostConfig {
  $type: "yandex.cloud.mdb.postgresql.v1.HostConfig";
  /** Configuration for a host with PostgreSQL 9.6 server deployed. */
  postgresqlConfig96?: Postgresqlhostconfig96 | undefined;
  /** Configuration for a host with PostgreSQL 10 1C server deployed. */
  postgresqlConfig101c?: Postgresqlhostconfig101c | undefined;
  /** Configuration for a host with PostgreSQL 10 server deployed. */
  postgresqlConfig10?: PostgresqlHostConfig10 | undefined;
  /** Configuration for a host with PostgreSQL 11 server deployed. */
  postgresqlConfig11?: PostgresqlHostConfig11 | undefined;
  /** Configuration for a host with PostgreSQL 11 1C server deployed. */
  postgresqlConfig111c?: Postgresqlhostconfig111c | undefined;
  /** Configuration for a host with PostgreSQL 12 server deployed. */
  postgresqlConfig12?: PostgresqlHostConfig12 | undefined;
  /** Configuration for a host with PostgreSQL 12 1C server deployed. */
  postgresqlConfig121c?: Postgresqlhostconfig121c | undefined;
  /** Configuration for a host with PostgreSQL 13 server deployed. */
  postgresqlConfig13?: PostgresqlHostConfig13 | undefined;
  /** Configuration for a host with PostgreSQL 13 1C server deployed. */
  postgresqlConfig131c?: Postgresqlhostconfig131c | undefined;
  /** Configuration for a host with PostgreSQL 14 server deployed. */
  postgresqlConfig14?: PostgresqlHostConfig14 | undefined;
  /** Configuration for a host with PostgreSQL 14 1C server deployed. */
  postgresqlConfig141c?: Postgresqlhostconfig141c | undefined;
  /** Configuration for a host with PostgreSQL 15 server deployed. */
  postgresqlConfig15?: PostgresqlHostConfig15 | undefined;
  /** Configuration for a host with PostgreSQL 15 1C server deployed. */
  postgresqlConfig151c?: Postgresqlhostconfig151c | undefined;
  /** Configuration for a host with PostgreSQL 16 server deployed. */
  postgresqlConfig16?: PostgresqlHostConfig16 | undefined;
  /** Configuration for a host with PostgreSQL 16 1C server deployed. */
  postgresqlConfig161c?: Postgresqlhostconfig161c | undefined;
}

export interface Service {
  $type: "yandex.cloud.mdb.postgresql.v1.Service";
  /** Type of the service provided by the host. */
  type: Service_Type;
  /** Status code of server availability. */
  health: Service_Health;
}

export enum Service_Type {
  TYPE_UNSPECIFIED = 0,
  /** POSTGRESQL - The host is a PostgreSQL server. */
  POSTGRESQL = 1,
  /** POOLER - The host is a PgBouncer server. */
  POOLER = 2,
  UNRECOGNIZED = -1,
}

export function service_TypeFromJSON(object: any): Service_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Service_Type.TYPE_UNSPECIFIED;
    case 1:
    case "POSTGRESQL":
      return Service_Type.POSTGRESQL;
    case 2:
    case "POOLER":
      return Service_Type.POOLER;
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
    case Service_Type.POSTGRESQL:
      return "POSTGRESQL";
    case Service_Type.POOLER:
      return "POOLER";
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
  /** READONLY - The server is in read-only mode. */
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

export interface Resources {
  $type: "yandex.cloud.mdb.postgresql.v1.Resources";
  /**
   * ID of the preset for computational resources available to a host (CPU, memory etc.).
   * All available presets are listed in the [documentation](/docs/managed-postgresql/concepts/instance-types).
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
  $type: "yandex.cloud.mdb.postgresql.v1.Access";
  /** Allow access for DataLens */
  dataLens: boolean;
  /**
   * Allow SQL queries to the cluster databases from the management console.
   *
   * See [SQL queries in the management console](/docs/managed-postgresql/operations/web-sql-query) for more details.
   */
  webSql: boolean;
  /** Allow access for Serverless */
  serverless: boolean;
  /** Allow access for DataTransfer. */
  dataTransfer: boolean;
  /** Allow access for YandexQuery. */
  yandexQuery: boolean;
}

export interface PerformanceDiagnostics {
  $type: "yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics";
  /** Configuration setting which enables/disables performance diagnostics service in cluster. */
  enabled: boolean;
  /** Interval (in seconds) for pg_stat_activity sampling */
  sessionsSamplingInterval: number;
  /** Interval (in seconds) for pg_stat_statements sampling */
  statementsSamplingInterval: number;
}

export interface DiskSizeAutoscaling {
  $type: "yandex.cloud.mdb.postgresql.v1.DiskSizeAutoscaling";
  /** Amount of used storage for automatic disk scaling in the maintenance window, 0 means disabled, in percent. */
  plannedUsageThreshold: number;
  /** Amount of used storage for immediately  automatic disk scaling, 0 means disabled, in percent. */
  emergencyUsageThreshold: number;
  /** Limit on how large the storage for database instances can automatically grow, in bytes. */
  diskSizeLimit: number;
}

const baseCluster: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.Cluster",
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

export const Cluster: MessageType<Cluster> = {
  $type: "yandex.cloud.mdb.postgresql.v1.Cluster" as const,

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
          $type: "yandex.cloud.mdb.postgresql.v1.Cluster.LabelsEntry",
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
  $type: "yandex.cloud.mdb.postgresql.v1.Cluster.LabelsEntry",
  key: "",
  value: "",
};

export const Cluster_LabelsEntry = {
  $type: "yandex.cloud.mdb.postgresql.v1.Cluster.LabelsEntry" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.Monitoring",
  name: "",
  description: "",
  link: "",
};

export const Monitoring = {
  $type: "yandex.cloud.mdb.postgresql.v1.Monitoring" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.ClusterConfig",
  version: "",
};

export const ClusterConfig: MessageType<ClusterConfig> = {
  $type: "yandex.cloud.mdb.postgresql.v1.ClusterConfig" as const,

  encode(
    message: ClusterConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.postgresqlConfig96 !== undefined) {
      Postgresqlconfigset96.encode(
        message.postgresqlConfig96,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig101c !== undefined) {
      Postgresqlconfigset101c.encode(
        message.postgresqlConfig101c,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig10 !== undefined) {
      PostgresqlConfigSet10.encode(
        message.postgresqlConfig10,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig11 !== undefined) {
      PostgresqlConfigSet11.encode(
        message.postgresqlConfig11,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig111c !== undefined) {
      Postgresqlconfigset111c.encode(
        message.postgresqlConfig111c,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig12 !== undefined) {
      PostgresqlConfigSet12.encode(
        message.postgresqlConfig12,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig121c !== undefined) {
      Postgresqlconfigset121c.encode(
        message.postgresqlConfig121c,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig13 !== undefined) {
      PostgresqlConfigSet13.encode(
        message.postgresqlConfig13,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig131c !== undefined) {
      Postgresqlconfigset131c.encode(
        message.postgresqlConfig131c,
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig14 !== undefined) {
      PostgresqlConfigSet14.encode(
        message.postgresqlConfig14,
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig141c !== undefined) {
      Postgresqlconfigset141c.encode(
        message.postgresqlConfig141c,
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig15 !== undefined) {
      PostgresqlConfigSet15.encode(
        message.postgresqlConfig15,
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig151c !== undefined) {
      Postgresqlconfigset151c.encode(
        message.postgresqlConfig151c,
        writer.uint32(178).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig16 !== undefined) {
      PostgresqlConfigSet16.encode(
        message.postgresqlConfig16,
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig161c !== undefined) {
      Postgresqlconfigset161c.encode(
        message.postgresqlConfig161c,
        writer.uint32(202).fork()
      ).ldelim();
    }
    if (message.poolerConfig !== undefined) {
      ConnectionPoolerConfig.encode(
        message.poolerConfig,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(42).fork()).ldelim();
    }
    if (message.autofailover !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.autofailover! },
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.backupWindowStart !== undefined) {
      TimeOfDay.encode(
        message.backupWindowStart,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.backupRetainPeriodDays !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.backupRetainPeriodDays!,
        },
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.access !== undefined) {
      Access.encode(message.access, writer.uint32(74).fork()).ldelim();
    }
    if (message.performanceDiagnostics !== undefined) {
      PerformanceDiagnostics.encode(
        message.performanceDiagnostics,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.diskSizeAutoscaling !== undefined) {
      DiskSizeAutoscaling.encode(
        message.diskSizeAutoscaling,
        writer.uint32(186).fork()
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
          message.postgresqlConfig96 = Postgresqlconfigset96.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.postgresqlConfig101c = Postgresqlconfigset101c.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.postgresqlConfig10 = PostgresqlConfigSet10.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.postgresqlConfig11 = PostgresqlConfigSet11.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.postgresqlConfig111c = Postgresqlconfigset111c.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.postgresqlConfig12 = PostgresqlConfigSet12.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.postgresqlConfig121c = Postgresqlconfigset121c.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.postgresqlConfig13 = PostgresqlConfigSet13.decode(
            reader,
            reader.uint32()
          );
          break;
        case 18:
          message.postgresqlConfig131c = Postgresqlconfigset131c.decode(
            reader,
            reader.uint32()
          );
          break;
        case 16:
          message.postgresqlConfig14 = PostgresqlConfigSet14.decode(
            reader,
            reader.uint32()
          );
          break;
        case 19:
          message.postgresqlConfig141c = Postgresqlconfigset141c.decode(
            reader,
            reader.uint32()
          );
          break;
        case 21:
          message.postgresqlConfig15 = PostgresqlConfigSet15.decode(
            reader,
            reader.uint32()
          );
          break;
        case 22:
          message.postgresqlConfig151c = Postgresqlconfigset151c.decode(
            reader,
            reader.uint32()
          );
          break;
        case 24:
          message.postgresqlConfig16 = PostgresqlConfigSet16.decode(
            reader,
            reader.uint32()
          );
          break;
        case 25:
          message.postgresqlConfig161c = Postgresqlconfigset161c.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.poolerConfig = ConnectionPoolerConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        case 6:
          message.autofailover = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 7:
          message.backupWindowStart = TimeOfDay.decode(reader, reader.uint32());
          break;
        case 17:
          message.backupRetainPeriodDays = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 9:
          message.access = Access.decode(reader, reader.uint32());
          break;
        case 12:
          message.performanceDiagnostics = PerformanceDiagnostics.decode(
            reader,
            reader.uint32()
          );
          break;
        case 23:
          message.diskSizeAutoscaling = DiskSizeAutoscaling.decode(
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

  fromJSON(object: any): ClusterConfig {
    const message = { ...baseClusterConfig } as ClusterConfig;
    message.version =
      object.version !== undefined && object.version !== null
        ? String(object.version)
        : "";
    message.postgresqlConfig96 =
      object.postgresqlConfig_9_6 !== undefined &&
      object.postgresqlConfig_9_6 !== null
        ? Postgresqlconfigset96.fromJSON(object.postgresqlConfig_9_6)
        : undefined;
    message.postgresqlConfig101c =
      object.postgresqlConfig_10_1c !== undefined &&
      object.postgresqlConfig_10_1c !== null
        ? Postgresqlconfigset101c.fromJSON(object.postgresqlConfig_10_1c)
        : undefined;
    message.postgresqlConfig10 =
      object.postgresqlConfig_10 !== undefined &&
      object.postgresqlConfig_10 !== null
        ? PostgresqlConfigSet10.fromJSON(object.postgresqlConfig_10)
        : undefined;
    message.postgresqlConfig11 =
      object.postgresqlConfig_11 !== undefined &&
      object.postgresqlConfig_11 !== null
        ? PostgresqlConfigSet11.fromJSON(object.postgresqlConfig_11)
        : undefined;
    message.postgresqlConfig111c =
      object.postgresqlConfig_11_1c !== undefined &&
      object.postgresqlConfig_11_1c !== null
        ? Postgresqlconfigset111c.fromJSON(object.postgresqlConfig_11_1c)
        : undefined;
    message.postgresqlConfig12 =
      object.postgresqlConfig_12 !== undefined &&
      object.postgresqlConfig_12 !== null
        ? PostgresqlConfigSet12.fromJSON(object.postgresqlConfig_12)
        : undefined;
    message.postgresqlConfig121c =
      object.postgresqlConfig_12_1c !== undefined &&
      object.postgresqlConfig_12_1c !== null
        ? Postgresqlconfigset121c.fromJSON(object.postgresqlConfig_12_1c)
        : undefined;
    message.postgresqlConfig13 =
      object.postgresqlConfig_13 !== undefined &&
      object.postgresqlConfig_13 !== null
        ? PostgresqlConfigSet13.fromJSON(object.postgresqlConfig_13)
        : undefined;
    message.postgresqlConfig131c =
      object.postgresqlConfig_13_1c !== undefined &&
      object.postgresqlConfig_13_1c !== null
        ? Postgresqlconfigset131c.fromJSON(object.postgresqlConfig_13_1c)
        : undefined;
    message.postgresqlConfig14 =
      object.postgresqlConfig_14 !== undefined &&
      object.postgresqlConfig_14 !== null
        ? PostgresqlConfigSet14.fromJSON(object.postgresqlConfig_14)
        : undefined;
    message.postgresqlConfig141c =
      object.postgresqlConfig_14_1c !== undefined &&
      object.postgresqlConfig_14_1c !== null
        ? Postgresqlconfigset141c.fromJSON(object.postgresqlConfig_14_1c)
        : undefined;
    message.postgresqlConfig15 =
      object.postgresqlConfig_15 !== undefined &&
      object.postgresqlConfig_15 !== null
        ? PostgresqlConfigSet15.fromJSON(object.postgresqlConfig_15)
        : undefined;
    message.postgresqlConfig151c =
      object.postgresqlConfig_15_1c !== undefined &&
      object.postgresqlConfig_15_1c !== null
        ? Postgresqlconfigset151c.fromJSON(object.postgresqlConfig_15_1c)
        : undefined;
    message.postgresqlConfig16 =
      object.postgresqlConfig_16 !== undefined &&
      object.postgresqlConfig_16 !== null
        ? PostgresqlConfigSet16.fromJSON(object.postgresqlConfig_16)
        : undefined;
    message.postgresqlConfig161c =
      object.postgresqlConfig_16_1c !== undefined &&
      object.postgresqlConfig_16_1c !== null
        ? Postgresqlconfigset161c.fromJSON(object.postgresqlConfig_16_1c)
        : undefined;
    message.poolerConfig =
      object.poolerConfig !== undefined && object.poolerConfig !== null
        ? ConnectionPoolerConfig.fromJSON(object.poolerConfig)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    message.autofailover =
      object.autofailover !== undefined && object.autofailover !== null
        ? Boolean(object.autofailover)
        : undefined;
    message.backupWindowStart =
      object.backupWindowStart !== undefined &&
      object.backupWindowStart !== null
        ? TimeOfDay.fromJSON(object.backupWindowStart)
        : undefined;
    message.backupRetainPeriodDays =
      object.backupRetainPeriodDays !== undefined &&
      object.backupRetainPeriodDays !== null
        ? Number(object.backupRetainPeriodDays)
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
    message.diskSizeAutoscaling =
      object.diskSizeAutoscaling !== undefined &&
      object.diskSizeAutoscaling !== null
        ? DiskSizeAutoscaling.fromJSON(object.diskSizeAutoscaling)
        : undefined;
    return message;
  },

  toJSON(message: ClusterConfig): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.postgresqlConfig96 !== undefined &&
      (obj.postgresqlConfig_9_6 = message.postgresqlConfig96
        ? Postgresqlconfigset96.toJSON(message.postgresqlConfig96)
        : undefined);
    message.postgresqlConfig101c !== undefined &&
      (obj.postgresqlConfig_10_1c = message.postgresqlConfig101c
        ? Postgresqlconfigset101c.toJSON(message.postgresqlConfig101c)
        : undefined);
    message.postgresqlConfig10 !== undefined &&
      (obj.postgresqlConfig_10 = message.postgresqlConfig10
        ? PostgresqlConfigSet10.toJSON(message.postgresqlConfig10)
        : undefined);
    message.postgresqlConfig11 !== undefined &&
      (obj.postgresqlConfig_11 = message.postgresqlConfig11
        ? PostgresqlConfigSet11.toJSON(message.postgresqlConfig11)
        : undefined);
    message.postgresqlConfig111c !== undefined &&
      (obj.postgresqlConfig_11_1c = message.postgresqlConfig111c
        ? Postgresqlconfigset111c.toJSON(message.postgresqlConfig111c)
        : undefined);
    message.postgresqlConfig12 !== undefined &&
      (obj.postgresqlConfig_12 = message.postgresqlConfig12
        ? PostgresqlConfigSet12.toJSON(message.postgresqlConfig12)
        : undefined);
    message.postgresqlConfig121c !== undefined &&
      (obj.postgresqlConfig_12_1c = message.postgresqlConfig121c
        ? Postgresqlconfigset121c.toJSON(message.postgresqlConfig121c)
        : undefined);
    message.postgresqlConfig13 !== undefined &&
      (obj.postgresqlConfig_13 = message.postgresqlConfig13
        ? PostgresqlConfigSet13.toJSON(message.postgresqlConfig13)
        : undefined);
    message.postgresqlConfig131c !== undefined &&
      (obj.postgresqlConfig_13_1c = message.postgresqlConfig131c
        ? Postgresqlconfigset131c.toJSON(message.postgresqlConfig131c)
        : undefined);
    message.postgresqlConfig14 !== undefined &&
      (obj.postgresqlConfig_14 = message.postgresqlConfig14
        ? PostgresqlConfigSet14.toJSON(message.postgresqlConfig14)
        : undefined);
    message.postgresqlConfig141c !== undefined &&
      (obj.postgresqlConfig_14_1c = message.postgresqlConfig141c
        ? Postgresqlconfigset141c.toJSON(message.postgresqlConfig141c)
        : undefined);
    message.postgresqlConfig15 !== undefined &&
      (obj.postgresqlConfig_15 = message.postgresqlConfig15
        ? PostgresqlConfigSet15.toJSON(message.postgresqlConfig15)
        : undefined);
    message.postgresqlConfig151c !== undefined &&
      (obj.postgresqlConfig_15_1c = message.postgresqlConfig151c
        ? Postgresqlconfigset151c.toJSON(message.postgresqlConfig151c)
        : undefined);
    message.postgresqlConfig16 !== undefined &&
      (obj.postgresqlConfig_16 = message.postgresqlConfig16
        ? PostgresqlConfigSet16.toJSON(message.postgresqlConfig16)
        : undefined);
    message.postgresqlConfig161c !== undefined &&
      (obj.postgresqlConfig_16_1c = message.postgresqlConfig161c
        ? Postgresqlconfigset161c.toJSON(message.postgresqlConfig161c)
        : undefined);
    message.poolerConfig !== undefined &&
      (obj.poolerConfig = message.poolerConfig
        ? ConnectionPoolerConfig.toJSON(message.poolerConfig)
        : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    message.autofailover !== undefined &&
      (obj.autofailover = message.autofailover);
    message.backupWindowStart !== undefined &&
      (obj.backupWindowStart = message.backupWindowStart
        ? TimeOfDay.toJSON(message.backupWindowStart)
        : undefined);
    message.backupRetainPeriodDays !== undefined &&
      (obj.backupRetainPeriodDays = message.backupRetainPeriodDays);
    message.access !== undefined &&
      (obj.access = message.access ? Access.toJSON(message.access) : undefined);
    message.performanceDiagnostics !== undefined &&
      (obj.performanceDiagnostics = message.performanceDiagnostics
        ? PerformanceDiagnostics.toJSON(message.performanceDiagnostics)
        : undefined);
    message.diskSizeAutoscaling !== undefined &&
      (obj.diskSizeAutoscaling = message.diskSizeAutoscaling
        ? DiskSizeAutoscaling.toJSON(message.diskSizeAutoscaling)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClusterConfig>, I>>(
    object: I
  ): ClusterConfig {
    const message = { ...baseClusterConfig } as ClusterConfig;
    message.version = object.version ?? "";
    message.postgresqlConfig96 =
      object.postgresqlConfig96 !== undefined &&
      object.postgresqlConfig96 !== null
        ? Postgresqlconfigset96.fromPartial(object.postgresqlConfig96)
        : undefined;
    message.postgresqlConfig101c =
      object.postgresqlConfig101c !== undefined &&
      object.postgresqlConfig101c !== null
        ? Postgresqlconfigset101c.fromPartial(object.postgresqlConfig101c)
        : undefined;
    message.postgresqlConfig10 =
      object.postgresqlConfig10 !== undefined &&
      object.postgresqlConfig10 !== null
        ? PostgresqlConfigSet10.fromPartial(object.postgresqlConfig10)
        : undefined;
    message.postgresqlConfig11 =
      object.postgresqlConfig11 !== undefined &&
      object.postgresqlConfig11 !== null
        ? PostgresqlConfigSet11.fromPartial(object.postgresqlConfig11)
        : undefined;
    message.postgresqlConfig111c =
      object.postgresqlConfig111c !== undefined &&
      object.postgresqlConfig111c !== null
        ? Postgresqlconfigset111c.fromPartial(object.postgresqlConfig111c)
        : undefined;
    message.postgresqlConfig12 =
      object.postgresqlConfig12 !== undefined &&
      object.postgresqlConfig12 !== null
        ? PostgresqlConfigSet12.fromPartial(object.postgresqlConfig12)
        : undefined;
    message.postgresqlConfig121c =
      object.postgresqlConfig121c !== undefined &&
      object.postgresqlConfig121c !== null
        ? Postgresqlconfigset121c.fromPartial(object.postgresqlConfig121c)
        : undefined;
    message.postgresqlConfig13 =
      object.postgresqlConfig13 !== undefined &&
      object.postgresqlConfig13 !== null
        ? PostgresqlConfigSet13.fromPartial(object.postgresqlConfig13)
        : undefined;
    message.postgresqlConfig131c =
      object.postgresqlConfig131c !== undefined &&
      object.postgresqlConfig131c !== null
        ? Postgresqlconfigset131c.fromPartial(object.postgresqlConfig131c)
        : undefined;
    message.postgresqlConfig14 =
      object.postgresqlConfig14 !== undefined &&
      object.postgresqlConfig14 !== null
        ? PostgresqlConfigSet14.fromPartial(object.postgresqlConfig14)
        : undefined;
    message.postgresqlConfig141c =
      object.postgresqlConfig141c !== undefined &&
      object.postgresqlConfig141c !== null
        ? Postgresqlconfigset141c.fromPartial(object.postgresqlConfig141c)
        : undefined;
    message.postgresqlConfig15 =
      object.postgresqlConfig15 !== undefined &&
      object.postgresqlConfig15 !== null
        ? PostgresqlConfigSet15.fromPartial(object.postgresqlConfig15)
        : undefined;
    message.postgresqlConfig151c =
      object.postgresqlConfig151c !== undefined &&
      object.postgresqlConfig151c !== null
        ? Postgresqlconfigset151c.fromPartial(object.postgresqlConfig151c)
        : undefined;
    message.postgresqlConfig16 =
      object.postgresqlConfig16 !== undefined &&
      object.postgresqlConfig16 !== null
        ? PostgresqlConfigSet16.fromPartial(object.postgresqlConfig16)
        : undefined;
    message.postgresqlConfig161c =
      object.postgresqlConfig161c !== undefined &&
      object.postgresqlConfig161c !== null
        ? Postgresqlconfigset161c.fromPartial(object.postgresqlConfig161c)
        : undefined;
    message.poolerConfig =
      object.poolerConfig !== undefined && object.poolerConfig !== null
        ? ConnectionPoolerConfig.fromPartial(object.poolerConfig)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    message.autofailover = object.autofailover ?? undefined;
    message.backupWindowStart =
      object.backupWindowStart !== undefined &&
      object.backupWindowStart !== null
        ? TimeOfDay.fromPartial(object.backupWindowStart)
        : undefined;
    message.backupRetainPeriodDays = object.backupRetainPeriodDays ?? undefined;
    message.access =
      object.access !== undefined && object.access !== null
        ? Access.fromPartial(object.access)
        : undefined;
    message.performanceDiagnostics =
      object.performanceDiagnostics !== undefined &&
      object.performanceDiagnostics !== null
        ? PerformanceDiagnostics.fromPartial(object.performanceDiagnostics)
        : undefined;
    message.diskSizeAutoscaling =
      object.diskSizeAutoscaling !== undefined &&
      object.diskSizeAutoscaling !== null
        ? DiskSizeAutoscaling.fromPartial(object.diskSizeAutoscaling)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ClusterConfig.$type, ClusterConfig);

const baseConnectionPoolerConfig: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig",
  poolingMode: 0,
};

export const ConnectionPoolerConfig = {
  $type: "yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig" as const,

  encode(
    message: ConnectionPoolerConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolingMode !== 0) {
      writer.uint32(8).int32(message.poolingMode);
    }
    if (message.poolDiscard !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.poolDiscard! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ConnectionPoolerConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConnectionPoolerConfig } as ConnectionPoolerConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolingMode = reader.int32() as any;
          break;
        case 2:
          message.poolDiscard = BoolValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConnectionPoolerConfig {
    const message = { ...baseConnectionPoolerConfig } as ConnectionPoolerConfig;
    message.poolingMode =
      object.poolingMode !== undefined && object.poolingMode !== null
        ? connectionPoolerConfig_PoolingModeFromJSON(object.poolingMode)
        : 0;
    message.poolDiscard =
      object.poolDiscard !== undefined && object.poolDiscard !== null
        ? Boolean(object.poolDiscard)
        : undefined;
    return message;
  },

  toJSON(message: ConnectionPoolerConfig): unknown {
    const obj: any = {};
    message.poolingMode !== undefined &&
      (obj.poolingMode = connectionPoolerConfig_PoolingModeToJSON(
        message.poolingMode
      ));
    message.poolDiscard !== undefined &&
      (obj.poolDiscard = message.poolDiscard);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConnectionPoolerConfig>, I>>(
    object: I
  ): ConnectionPoolerConfig {
    const message = { ...baseConnectionPoolerConfig } as ConnectionPoolerConfig;
    message.poolingMode = object.poolingMode ?? 0;
    message.poolDiscard = object.poolDiscard ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ConnectionPoolerConfig.$type, ConnectionPoolerConfig);

const baseHost: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.Host",
  name: "",
  clusterId: "",
  zoneId: "",
  role: 0,
  health: 0,
  subnetId: "",
  replicationSource: "",
  assignPublicIp: false,
  replicaType: 0,
};

export const Host = {
  $type: "yandex.cloud.mdb.postgresql.v1.Host" as const,

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
    if (message.replicationSource !== "") {
      writer.uint32(74).string(message.replicationSource);
    }
    if (message.priority !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.priority! },
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.config !== undefined) {
      HostConfig.encode(message.config, writer.uint32(90).fork()).ldelim();
    }
    if (message.assignPublicIp === true) {
      writer.uint32(96).bool(message.assignPublicIp);
    }
    if (message.replicaType !== 0) {
      writer.uint32(104).int32(message.replicaType);
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
          message.replicationSource = reader.string();
          break;
        case 10:
          message.priority = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 11:
          message.config = HostConfig.decode(reader, reader.uint32());
          break;
        case 12:
          message.assignPublicIp = reader.bool();
          break;
        case 13:
          message.replicaType = reader.int32() as any;
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
    message.replicationSource =
      object.replicationSource !== undefined &&
      object.replicationSource !== null
        ? String(object.replicationSource)
        : "";
    message.priority =
      object.priority !== undefined && object.priority !== null
        ? Number(object.priority)
        : undefined;
    message.config =
      object.config !== undefined && object.config !== null
        ? HostConfig.fromJSON(object.config)
        : undefined;
    message.assignPublicIp =
      object.assignPublicIp !== undefined && object.assignPublicIp !== null
        ? Boolean(object.assignPublicIp)
        : false;
    message.replicaType =
      object.replicaType !== undefined && object.replicaType !== null
        ? host_ReplicaTypeFromJSON(object.replicaType)
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
    message.replicationSource !== undefined &&
      (obj.replicationSource = message.replicationSource);
    message.priority !== undefined && (obj.priority = message.priority);
    message.config !== undefined &&
      (obj.config = message.config
        ? HostConfig.toJSON(message.config)
        : undefined);
    message.assignPublicIp !== undefined &&
      (obj.assignPublicIp = message.assignPublicIp);
    message.replicaType !== undefined &&
      (obj.replicaType = host_ReplicaTypeToJSON(message.replicaType));
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
    message.replicationSource = object.replicationSource ?? "";
    message.priority = object.priority ?? undefined;
    message.config =
      object.config !== undefined && object.config !== null
        ? HostConfig.fromPartial(object.config)
        : undefined;
    message.assignPublicIp = object.assignPublicIp ?? false;
    message.replicaType = object.replicaType ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Host.$type, Host);

const baseHostConfig: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.HostConfig",
};

export const HostConfig = {
  $type: "yandex.cloud.mdb.postgresql.v1.HostConfig" as const,

  encode(
    message: HostConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.postgresqlConfig96 !== undefined) {
      Postgresqlhostconfig96.encode(
        message.postgresqlConfig96,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig101c !== undefined) {
      Postgresqlhostconfig101c.encode(
        message.postgresqlConfig101c,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig10 !== undefined) {
      PostgresqlHostConfig10.encode(
        message.postgresqlConfig10,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig11 !== undefined) {
      PostgresqlHostConfig11.encode(
        message.postgresqlConfig11,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig111c !== undefined) {
      Postgresqlhostconfig111c.encode(
        message.postgresqlConfig111c,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig12 !== undefined) {
      PostgresqlHostConfig12.encode(
        message.postgresqlConfig12,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig121c !== undefined) {
      Postgresqlhostconfig121c.encode(
        message.postgresqlConfig121c,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig13 !== undefined) {
      PostgresqlHostConfig13.encode(
        message.postgresqlConfig13,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig131c !== undefined) {
      Postgresqlhostconfig131c.encode(
        message.postgresqlConfig131c,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig14 !== undefined) {
      PostgresqlHostConfig14.encode(
        message.postgresqlConfig14,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig141c !== undefined) {
      Postgresqlhostconfig141c.encode(
        message.postgresqlConfig141c,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig15 !== undefined) {
      PostgresqlHostConfig15.encode(
        message.postgresqlConfig15,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig151c !== undefined) {
      Postgresqlhostconfig151c.encode(
        message.postgresqlConfig151c,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig16 !== undefined) {
      PostgresqlHostConfig16.encode(
        message.postgresqlConfig16,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.postgresqlConfig161c !== undefined) {
      Postgresqlhostconfig161c.encode(
        message.postgresqlConfig161c,
        writer.uint32(122).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HostConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHostConfig } as HostConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postgresqlConfig96 = Postgresqlhostconfig96.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.postgresqlConfig101c = Postgresqlhostconfig101c.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.postgresqlConfig10 = PostgresqlHostConfig10.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.postgresqlConfig11 = PostgresqlHostConfig11.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.postgresqlConfig111c = Postgresqlhostconfig111c.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.postgresqlConfig12 = PostgresqlHostConfig12.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.postgresqlConfig121c = Postgresqlhostconfig121c.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.postgresqlConfig13 = PostgresqlHostConfig13.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.postgresqlConfig131c = Postgresqlhostconfig131c.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.postgresqlConfig14 = PostgresqlHostConfig14.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.postgresqlConfig141c = Postgresqlhostconfig141c.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.postgresqlConfig15 = PostgresqlHostConfig15.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.postgresqlConfig151c = Postgresqlhostconfig151c.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.postgresqlConfig16 = PostgresqlHostConfig16.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.postgresqlConfig161c = Postgresqlhostconfig161c.decode(
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

  fromJSON(object: any): HostConfig {
    const message = { ...baseHostConfig } as HostConfig;
    message.postgresqlConfig96 =
      object.postgresqlHostConfig_9_6 !== undefined &&
      object.postgresqlHostConfig_9_6 !== null
        ? Postgresqlhostconfig96.fromJSON(object.postgresqlHostConfig_9_6)
        : undefined;
    message.postgresqlConfig101c =
      object.postgresqlHostConfig_10_1c !== undefined &&
      object.postgresqlHostConfig_10_1c !== null
        ? Postgresqlhostconfig101c.fromJSON(object.postgresqlHostConfig_10_1c)
        : undefined;
    message.postgresqlConfig10 =
      object.postgresqlHostConfig_10 !== undefined &&
      object.postgresqlHostConfig_10 !== null
        ? PostgresqlHostConfig10.fromJSON(object.postgresqlHostConfig_10)
        : undefined;
    message.postgresqlConfig11 =
      object.postgresqlHostConfig_11 !== undefined &&
      object.postgresqlHostConfig_11 !== null
        ? PostgresqlHostConfig11.fromJSON(object.postgresqlHostConfig_11)
        : undefined;
    message.postgresqlConfig111c =
      object.postgresqlHostConfig_11_1c !== undefined &&
      object.postgresqlHostConfig_11_1c !== null
        ? Postgresqlhostconfig111c.fromJSON(object.postgresqlHostConfig_11_1c)
        : undefined;
    message.postgresqlConfig12 =
      object.postgresqlHostConfig_12 !== undefined &&
      object.postgresqlHostConfig_12 !== null
        ? PostgresqlHostConfig12.fromJSON(object.postgresqlHostConfig_12)
        : undefined;
    message.postgresqlConfig121c =
      object.postgresqlHostConfig_12_1c !== undefined &&
      object.postgresqlHostConfig_12_1c !== null
        ? Postgresqlhostconfig121c.fromJSON(object.postgresqlHostConfig_12_1c)
        : undefined;
    message.postgresqlConfig13 =
      object.postgresqlHostConfig_13 !== undefined &&
      object.postgresqlHostConfig_13 !== null
        ? PostgresqlHostConfig13.fromJSON(object.postgresqlHostConfig_13)
        : undefined;
    message.postgresqlConfig131c =
      object.postgresqlHostConfig_13_1c !== undefined &&
      object.postgresqlHostConfig_13_1c !== null
        ? Postgresqlhostconfig131c.fromJSON(object.postgresqlHostConfig_13_1c)
        : undefined;
    message.postgresqlConfig14 =
      object.postgresqlHostConfig_14 !== undefined &&
      object.postgresqlHostConfig_14 !== null
        ? PostgresqlHostConfig14.fromJSON(object.postgresqlHostConfig_14)
        : undefined;
    message.postgresqlConfig141c =
      object.postgresqlHostConfig_14_1c !== undefined &&
      object.postgresqlHostConfig_14_1c !== null
        ? Postgresqlhostconfig141c.fromJSON(object.postgresqlHostConfig_14_1c)
        : undefined;
    message.postgresqlConfig15 =
      object.postgresqlHostConfig_15 !== undefined &&
      object.postgresqlHostConfig_15 !== null
        ? PostgresqlHostConfig15.fromJSON(object.postgresqlHostConfig_15)
        : undefined;
    message.postgresqlConfig151c =
      object.postgresqlHostConfig_15_1c !== undefined &&
      object.postgresqlHostConfig_15_1c !== null
        ? Postgresqlhostconfig151c.fromJSON(object.postgresqlHostConfig_15_1c)
        : undefined;
    message.postgresqlConfig16 =
      object.postgresqlHostConfig_16 !== undefined &&
      object.postgresqlHostConfig_16 !== null
        ? PostgresqlHostConfig16.fromJSON(object.postgresqlHostConfig_16)
        : undefined;
    message.postgresqlConfig161c =
      object.postgresqlHostConfig_16_1c !== undefined &&
      object.postgresqlHostConfig_16_1c !== null
        ? Postgresqlhostconfig161c.fromJSON(object.postgresqlHostConfig_16_1c)
        : undefined;
    return message;
  },

  toJSON(message: HostConfig): unknown {
    const obj: any = {};
    message.postgresqlConfig96 !== undefined &&
      (obj.postgresqlHostConfig_9_6 = message.postgresqlConfig96
        ? Postgresqlhostconfig96.toJSON(message.postgresqlConfig96)
        : undefined);
    message.postgresqlConfig101c !== undefined &&
      (obj.postgresqlHostConfig_10_1c = message.postgresqlConfig101c
        ? Postgresqlhostconfig101c.toJSON(message.postgresqlConfig101c)
        : undefined);
    message.postgresqlConfig10 !== undefined &&
      (obj.postgresqlHostConfig_10 = message.postgresqlConfig10
        ? PostgresqlHostConfig10.toJSON(message.postgresqlConfig10)
        : undefined);
    message.postgresqlConfig11 !== undefined &&
      (obj.postgresqlHostConfig_11 = message.postgresqlConfig11
        ? PostgresqlHostConfig11.toJSON(message.postgresqlConfig11)
        : undefined);
    message.postgresqlConfig111c !== undefined &&
      (obj.postgresqlHostConfig_11_1c = message.postgresqlConfig111c
        ? Postgresqlhostconfig111c.toJSON(message.postgresqlConfig111c)
        : undefined);
    message.postgresqlConfig12 !== undefined &&
      (obj.postgresqlHostConfig_12 = message.postgresqlConfig12
        ? PostgresqlHostConfig12.toJSON(message.postgresqlConfig12)
        : undefined);
    message.postgresqlConfig121c !== undefined &&
      (obj.postgresqlHostConfig_12_1c = message.postgresqlConfig121c
        ? Postgresqlhostconfig121c.toJSON(message.postgresqlConfig121c)
        : undefined);
    message.postgresqlConfig13 !== undefined &&
      (obj.postgresqlHostConfig_13 = message.postgresqlConfig13
        ? PostgresqlHostConfig13.toJSON(message.postgresqlConfig13)
        : undefined);
    message.postgresqlConfig131c !== undefined &&
      (obj.postgresqlHostConfig_13_1c = message.postgresqlConfig131c
        ? Postgresqlhostconfig131c.toJSON(message.postgresqlConfig131c)
        : undefined);
    message.postgresqlConfig14 !== undefined &&
      (obj.postgresqlHostConfig_14 = message.postgresqlConfig14
        ? PostgresqlHostConfig14.toJSON(message.postgresqlConfig14)
        : undefined);
    message.postgresqlConfig141c !== undefined &&
      (obj.postgresqlHostConfig_14_1c = message.postgresqlConfig141c
        ? Postgresqlhostconfig141c.toJSON(message.postgresqlConfig141c)
        : undefined);
    message.postgresqlConfig15 !== undefined &&
      (obj.postgresqlHostConfig_15 = message.postgresqlConfig15
        ? PostgresqlHostConfig15.toJSON(message.postgresqlConfig15)
        : undefined);
    message.postgresqlConfig151c !== undefined &&
      (obj.postgresqlHostConfig_15_1c = message.postgresqlConfig151c
        ? Postgresqlhostconfig151c.toJSON(message.postgresqlConfig151c)
        : undefined);
    message.postgresqlConfig16 !== undefined &&
      (obj.postgresqlHostConfig_16 = message.postgresqlConfig16
        ? PostgresqlHostConfig16.toJSON(message.postgresqlConfig16)
        : undefined);
    message.postgresqlConfig161c !== undefined &&
      (obj.postgresqlHostConfig_16_1c = message.postgresqlConfig161c
        ? Postgresqlhostconfig161c.toJSON(message.postgresqlConfig161c)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HostConfig>, I>>(
    object: I
  ): HostConfig {
    const message = { ...baseHostConfig } as HostConfig;
    message.postgresqlConfig96 =
      object.postgresqlConfig96 !== undefined &&
      object.postgresqlConfig96 !== null
        ? Postgresqlhostconfig96.fromPartial(object.postgresqlConfig96)
        : undefined;
    message.postgresqlConfig101c =
      object.postgresqlConfig101c !== undefined &&
      object.postgresqlConfig101c !== null
        ? Postgresqlhostconfig101c.fromPartial(object.postgresqlConfig101c)
        : undefined;
    message.postgresqlConfig10 =
      object.postgresqlConfig10 !== undefined &&
      object.postgresqlConfig10 !== null
        ? PostgresqlHostConfig10.fromPartial(object.postgresqlConfig10)
        : undefined;
    message.postgresqlConfig11 =
      object.postgresqlConfig11 !== undefined &&
      object.postgresqlConfig11 !== null
        ? PostgresqlHostConfig11.fromPartial(object.postgresqlConfig11)
        : undefined;
    message.postgresqlConfig111c =
      object.postgresqlConfig111c !== undefined &&
      object.postgresqlConfig111c !== null
        ? Postgresqlhostconfig111c.fromPartial(object.postgresqlConfig111c)
        : undefined;
    message.postgresqlConfig12 =
      object.postgresqlConfig12 !== undefined &&
      object.postgresqlConfig12 !== null
        ? PostgresqlHostConfig12.fromPartial(object.postgresqlConfig12)
        : undefined;
    message.postgresqlConfig121c =
      object.postgresqlConfig121c !== undefined &&
      object.postgresqlConfig121c !== null
        ? Postgresqlhostconfig121c.fromPartial(object.postgresqlConfig121c)
        : undefined;
    message.postgresqlConfig13 =
      object.postgresqlConfig13 !== undefined &&
      object.postgresqlConfig13 !== null
        ? PostgresqlHostConfig13.fromPartial(object.postgresqlConfig13)
        : undefined;
    message.postgresqlConfig131c =
      object.postgresqlConfig131c !== undefined &&
      object.postgresqlConfig131c !== null
        ? Postgresqlhostconfig131c.fromPartial(object.postgresqlConfig131c)
        : undefined;
    message.postgresqlConfig14 =
      object.postgresqlConfig14 !== undefined &&
      object.postgresqlConfig14 !== null
        ? PostgresqlHostConfig14.fromPartial(object.postgresqlConfig14)
        : undefined;
    message.postgresqlConfig141c =
      object.postgresqlConfig141c !== undefined &&
      object.postgresqlConfig141c !== null
        ? Postgresqlhostconfig141c.fromPartial(object.postgresqlConfig141c)
        : undefined;
    message.postgresqlConfig15 =
      object.postgresqlConfig15 !== undefined &&
      object.postgresqlConfig15 !== null
        ? PostgresqlHostConfig15.fromPartial(object.postgresqlConfig15)
        : undefined;
    message.postgresqlConfig151c =
      object.postgresqlConfig151c !== undefined &&
      object.postgresqlConfig151c !== null
        ? Postgresqlhostconfig151c.fromPartial(object.postgresqlConfig151c)
        : undefined;
    message.postgresqlConfig16 =
      object.postgresqlConfig16 !== undefined &&
      object.postgresqlConfig16 !== null
        ? PostgresqlHostConfig16.fromPartial(object.postgresqlConfig16)
        : undefined;
    message.postgresqlConfig161c =
      object.postgresqlConfig161c !== undefined &&
      object.postgresqlConfig161c !== null
        ? Postgresqlhostconfig161c.fromPartial(object.postgresqlConfig161c)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(HostConfig.$type, HostConfig);

const baseService: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.Service",
  type: 0,
  health: 0,
};

export const Service = {
  $type: "yandex.cloud.mdb.postgresql.v1.Service" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.Resources",
  resourcePresetId: "",
  diskSize: 0,
  diskTypeId: "",
};

export const Resources = {
  $type: "yandex.cloud.mdb.postgresql.v1.Resources" as const,

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
  $type: "yandex.cloud.mdb.postgresql.v1.Access",
  dataLens: false,
  webSql: false,
  serverless: false,
  dataTransfer: false,
  yandexQuery: false,
};

export const Access = {
  $type: "yandex.cloud.mdb.postgresql.v1.Access" as const,

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
    if (message.serverless === true) {
      writer.uint32(24).bool(message.serverless);
    }
    if (message.dataTransfer === true) {
      writer.uint32(32).bool(message.dataTransfer);
    }
    if (message.yandexQuery === true) {
      writer.uint32(40).bool(message.yandexQuery);
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
          message.serverless = reader.bool();
          break;
        case 4:
          message.dataTransfer = reader.bool();
          break;
        case 5:
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
    message.serverless = object.serverless ?? false;
    message.dataTransfer = object.dataTransfer ?? false;
    message.yandexQuery = object.yandexQuery ?? false;
    return message;
  },
};

messageTypeRegistry.set(Access.$type, Access);

const basePerformanceDiagnostics: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics",
  enabled: false,
  sessionsSamplingInterval: 0,
  statementsSamplingInterval: 0,
};

export const PerformanceDiagnostics = {
  $type: "yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics" as const,

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

const baseDiskSizeAutoscaling: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.DiskSizeAutoscaling",
  plannedUsageThreshold: 0,
  emergencyUsageThreshold: 0,
  diskSizeLimit: 0,
};

export const DiskSizeAutoscaling = {
  $type: "yandex.cloud.mdb.postgresql.v1.DiskSizeAutoscaling" as const,

  encode(
    message: DiskSizeAutoscaling,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.plannedUsageThreshold !== 0) {
      writer.uint32(8).int64(message.plannedUsageThreshold);
    }
    if (message.emergencyUsageThreshold !== 0) {
      writer.uint32(16).int64(message.emergencyUsageThreshold);
    }
    if (message.diskSizeLimit !== 0) {
      writer.uint32(24).int64(message.diskSizeLimit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiskSizeAutoscaling {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDiskSizeAutoscaling } as DiskSizeAutoscaling;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plannedUsageThreshold = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.emergencyUsageThreshold = longToNumber(
            reader.int64() as Long
          );
          break;
        case 3:
          message.diskSizeLimit = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DiskSizeAutoscaling {
    const message = { ...baseDiskSizeAutoscaling } as DiskSizeAutoscaling;
    message.plannedUsageThreshold =
      object.plannedUsageThreshold !== undefined &&
      object.plannedUsageThreshold !== null
        ? Number(object.plannedUsageThreshold)
        : 0;
    message.emergencyUsageThreshold =
      object.emergencyUsageThreshold !== undefined &&
      object.emergencyUsageThreshold !== null
        ? Number(object.emergencyUsageThreshold)
        : 0;
    message.diskSizeLimit =
      object.diskSizeLimit !== undefined && object.diskSizeLimit !== null
        ? Number(object.diskSizeLimit)
        : 0;
    return message;
  },

  toJSON(message: DiskSizeAutoscaling): unknown {
    const obj: any = {};
    message.plannedUsageThreshold !== undefined &&
      (obj.plannedUsageThreshold = Math.round(message.plannedUsageThreshold));
    message.emergencyUsageThreshold !== undefined &&
      (obj.emergencyUsageThreshold = Math.round(
        message.emergencyUsageThreshold
      ));
    message.diskSizeLimit !== undefined &&
      (obj.diskSizeLimit = Math.round(message.diskSizeLimit));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DiskSizeAutoscaling>, I>>(
    object: I
  ): DiskSizeAutoscaling {
    const message = { ...baseDiskSizeAutoscaling } as DiskSizeAutoscaling;
    message.plannedUsageThreshold = object.plannedUsageThreshold ?? 0;
    message.emergencyUsageThreshold = object.emergencyUsageThreshold ?? 0;
    message.diskSizeLimit = object.diskSizeLimit ?? 0;
    return message;
  },
};

messageTypeRegistry.set(DiskSizeAutoscaling.$type, DiskSizeAutoscaling);

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
