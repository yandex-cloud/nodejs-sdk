/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  MaintenanceWindow,
  MaintenanceOperation,
} from "../../../../../yandex/cloud/mdb/mongodb/v1/maintenance";
import { TimeOfDay } from "../../../../../google/type/timeofday";
import {
  Mongodconfigset36,
  Mongocfgconfigset36,
  Mongosconfigset36,
} from "../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb3_6";
import {
  Mongodconfigset40,
  Mongocfgconfigset40,
  Mongosconfigset40,
} from "../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_0";
import {
  Mongodconfigset42,
  Mongocfgconfigset42,
  Mongosconfigset42,
} from "../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_2";
import {
  Mongodconfigset44,
  Mongocfgconfigset44,
  Mongosconfigset44,
} from "../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_4";
import {
  Mongodconfigset50,
  Mongocfgconfigset50,
  Mongosconfigset50,
} from "../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb5_0";
import { Timestamp } from "../../../../../google/protobuf/timestamp";
import { Int64Value } from "../../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.mdb.mongodb.v1";

/** A managed MongoDB cluster. For more information, see the [documentation](/docs/managed-mongodb/concepts). */
export interface Cluster {
  $type: "yandex.cloud.mdb.mongodb.v1.Cluster";
  /**
   * ID of the MongoDB cluster.
   * This ID is assigned by MDB at creation time.
   */
  id: string;
  /** ID of the folder that the MongoDB cluster belongs to. */
  folderId: string;
  /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  createdAt?: Date;
  /**
   * Name of the MongoDB cluster.
   * The name is unique within the folder. 1-63 characters long.
   */
  name: string;
  /** Description of the MongoDB cluster. 0-256 characters long. */
  description: string;
  /** Custom labels for the MongoDB cluster as `` key:value `` pairs. Maximum 64 per resource. */
  labels: { [key: string]: string };
  /** Deployment environment of the MongoDB cluster. */
  environment: Cluster_Environment;
  /** Description of monitoring systems relevant to the MongoDB cluster. */
  monitoring: Monitoring[];
  /** Configuration of the MongoDB cluster. */
  config?: ClusterConfig;
  /** ID of the network that the cluster belongs to. */
  networkId: string;
  /** Aggregated cluster health. */
  health: Cluster_Health;
  /** Current state of the cluster. */
  status: Cluster_Status;
  /** Indicates current sharding status of the cluster. */
  sharded: boolean;
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
  $type: "yandex.cloud.mdb.mongodb.v1.Cluster.LabelsEntry";
  key: string;
  value: string;
}

/** Monitoring system. */
export interface Monitoring {
  $type: "yandex.cloud.mdb.mongodb.v1.Monitoring";
  /** Name of the monitoring system. */
  name: string;
  /** Description of the monitoring system. */
  description: string;
  /** Link to the monitoring system charts for the MongoDB cluster. */
  link: string;
}

export interface ClusterConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.ClusterConfig";
  /** Version of MongoDB server software. Possible values: `3.6`, `4.0`, `4.2`, `4.4`, `5.0`. */
  version: string;
  /**
   * MongoDB feature compatibility version. See usage details in [MongoDB documentation](https://docs.mongodb.com/manual/reference/command/setFeatureCompatibilityVersion/).
   *
   * Possible values:
   * * `3.6` - persist data compatibility for version 3.6. After setting this option the data will not be compatible with 3.4 or lower.
   * * `4.0` - persist data compatibility for version 4.0. After setting this option the data will not be compatible with 3.6 or lower.
   * * `4.2` - persist data compatibility for version 4.2. After setting this option the data will not be compatible with 4.0 or lower.
   * * `4.4` - persist data compatibility for version 4.4. After setting this option the data will not be compatible with 4.2 or lower.
   * * `5.0` - persist data compatibility for version 5.0. After setting this option the data will not be compatible with 5.0 or lower.
   */
  featureCompatibilityVersion: string;
  /** Configuration and resource allocation for a MongoDB 3.6 cluster. */
  mongodb36?: Mongodb36 | undefined;
  /** Configuration and resource allocation for a MongoDB 4.0 cluster. */
  mongodb40?: Mongodb40 | undefined;
  /** Configuration and resource allocation for a MongoDB 4.2 cluster. */
  mongodb42?: Mongodb42 | undefined;
  /** Configuration and resource allocation for a MongoDB 4.4 cluster. */
  mongodb44?: Mongodb44 | undefined;
  /** Configuration and resource allocation for a MongoDB 5.0 cluster. */
  mongodb50?: Mongodb50 | undefined;
  /** Time to start the daily backup, in the UTC timezone. */
  backupWindowStart?: TimeOfDay;
  /** Retain period of automatically created backup in days */
  backupRetainPeriodDays?: number;
  /** Access policy to DB */
  access?: Access;
}

export interface Mongodb36 {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6";
  /** Configuration and resource allocation for mongod in a MongoDB 3.6 cluster. */
  mongod?: Mongodb36_Mongod;
  /** Configuration and resource allocation for mongocfg in a MongoDB 3.6 cluster. */
  mongocfg?: Mongodb36_MongoCfg;
  /** Configuration and resource allocation for mongos in a MongoDB 3.6 cluster. */
  mongos?: Mongodb36_Mongos;
  /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) in a MongoDB 3.6 cluster. */
  mongoinfra?: Mongodb36_MongoInfra;
}

export interface Mongodb36_Mongod {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod";
  /** Configuration for a mongod 3.6 hosts. */
  config?: Mongodconfigset36;
  /** Resources allocated to MongoDB hosts. */
  resources?: Resources;
}

export interface Mongodb36_MongoCfg {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg";
  config?: Mongocfgconfigset36;
  /** Resources allocated to mongocfg hosts. */
  resources?: Resources;
}

export interface Mongodb36_Mongos {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos";
  config?: Mongosconfigset36;
  /** Resources allocated to mongocfg hosts. */
  resources?: Resources;
}

export interface Mongodb36_MongoInfra {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra";
  configMongos?: Mongosconfigset36;
  configMongocfg?: Mongocfgconfigset36;
  /** Resources allocated to mongoinfra (mongos+mongocfg) hosts. */
  resources?: Resources;
}

export interface Mongodb40 {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0";
  /** Configuration and resource allocation for mongod in a MongoDB 4.0 cluster. */
  mongod?: Mongodb40_Mongod;
  /** Configuration and resource allocation for mongocfg in a MongoDB 4.0 cluster. */
  mongocfg?: Mongodb40_MongoCfg;
  /** Configuration and resource allocation for mongos in a MongoDB 4.0 cluster. */
  mongos?: Mongodb40_Mongos;
  /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) in a MongoDB 4.0 cluster. */
  mongoinfra?: Mongodb40_MongoInfra;
}

export interface Mongodb40_Mongod {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod";
  /** Configuration for mongod 4.0 hosts. */
  config?: Mongodconfigset40;
  /** Resources allocated to mongod hosts. */
  resources?: Resources;
}

export interface Mongodb40_MongoCfg {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg";
  /** Configuration for mongocfg 4.0 hosts. */
  config?: Mongocfgconfigset40;
  /** Resources allocated to mongocfg hosts. */
  resources?: Resources;
}

export interface Mongodb40_Mongos {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos";
  /** Configuration for mongos 4.0 hosts. */
  config?: Mongosconfigset40;
  /** Resources allocated to mongos hosts. */
  resources?: Resources;
}

export interface Mongodb40_MongoInfra {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra";
  configMongos?: Mongosconfigset40;
  configMongocfg?: Mongocfgconfigset40;
  /** Resources allocated to mongoinfra (mongos+mongocfg) hosts. */
  resources?: Resources;
}

export interface Mongodb42 {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2";
  /** Configuration and resource allocation for mongod in a MongoDB 4.2 cluster. */
  mongod?: Mongodb42_Mongod;
  /** Configuration and resource allocation for mongocfg in a MongoDB 4.2 cluster. */
  mongocfg?: Mongodb42_MongoCfg;
  /** Configuration and resource allocation for mongos in a MongoDB 4.2 cluster. */
  mongos?: Mongodb42_Mongos;
  /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) in a MongoDB 4.2 cluster. */
  mongoinfra?: Mongodb42_MongoInfra;
}

export interface Mongodb42_Mongod {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod";
  /** Configuration for mongod 4.2 hosts. */
  config?: Mongodconfigset42;
  /** Resources allocated to mongod hosts. */
  resources?: Resources;
}

export interface Mongodb42_MongoCfg {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg";
  /** Configuration for mongocfg 4.2 hosts. */
  config?: Mongocfgconfigset42;
  /** Resources allocated to mongocfg hosts. */
  resources?: Resources;
}

export interface Mongodb42_Mongos {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos";
  /** Configuration for mongos 4.2 hosts. */
  config?: Mongosconfigset42;
  /** Resources allocated to mongos hosts. */
  resources?: Resources;
}

export interface Mongodb42_MongoInfra {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra";
  configMongos?: Mongosconfigset42;
  configMongocfg?: Mongocfgconfigset42;
  /** Resources allocated to mongoinfra (mongos+mongocfg) hosts. */
  resources?: Resources;
}

export interface Mongodb44 {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4";
  /** Configuration and resource allocation for mongod in a MongoDB 4.4 cluster. */
  mongod?: Mongodb44_Mongod;
  /** Configuration and resource allocation for mongocfg in a MongoDB 4.4 cluster. */
  mongocfg?: Mongodb44_MongoCfg;
  /** Configuration and resource allocation for mongos in a MongoDB 4.4 cluster. */
  mongos?: Mongodb44_Mongos;
  /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) in a MongoDB 4.4 cluster. */
  mongoinfra?: Mongodb44_MongoInfra;
}

export interface Mongodb44_Mongod {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod";
  /** Configuration for mongod 4.4 hosts. */
  config?: Mongodconfigset44;
  /** Resources allocated to mongod hosts. */
  resources?: Resources;
}

export interface Mongodb44_MongoCfg {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg";
  /** Configuration for mongocfg 4.4 hosts. */
  config?: Mongocfgconfigset44;
  /** Resources allocated to mongocfg hosts. */
  resources?: Resources;
}

export interface Mongodb44_Mongos {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos";
  /** Configuration for mongos 4.4 hosts. */
  config?: Mongosconfigset44;
  /** Resources allocated to mongos hosts. */
  resources?: Resources;
}

export interface Mongodb44_MongoInfra {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra";
  configMongos?: Mongosconfigset44;
  configMongocfg?: Mongocfgconfigset44;
  /** Resources allocated to mongoinfra (mongos+mongocfg) hosts. */
  resources?: Resources;
}

export interface Mongodb50 {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0";
  /** Configuration and resource allocation for mongod in a MongoDB 5.0 cluster. */
  mongod?: Mongodb50_Mongod;
  /** Configuration and resource allocation for mongocfg in a MongoDB 5.0 cluster. */
  mongocfg?: Mongodb50_MongoCfg;
  /** Configuration and resource allocation for mongos in a MongoDB 5.0 cluster. */
  mongos?: Mongodb50_Mongos;
  /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) in a MongoDB 5.0 cluster. */
  mongoinfra?: Mongodb50_MongoInfra;
}

export interface Mongodb50_Mongod {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod";
  /** Configuration for mongod 5.0 hosts. */
  config?: Mongodconfigset50;
  /** Resources allocated to mongod hosts. */
  resources?: Resources;
}

export interface Mongodb50_MongoCfg {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg";
  /** Configuration for mongocfg 5.0 hosts. */
  config?: Mongocfgconfigset50;
  /** Resources allocated to mongocfg hosts. */
  resources?: Resources;
}

export interface Mongodb50_Mongos {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos";
  /** Configuration for mongos 5.0 hosts. */
  config?: Mongosconfigset50;
  /** Resources allocated to mongos hosts. */
  resources?: Resources;
}

export interface Mongodb50_MongoInfra {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra";
  configMongos?: Mongosconfigset50;
  configMongocfg?: Mongocfgconfigset50;
  /** Resources allocated to mongoinfra (mongos+mongocfg) hosts. */
  resources?: Resources;
}

export interface Shard {
  $type: "yandex.cloud.mdb.mongodb.v1.Shard";
  /** Name of the shard. */
  name: string;
  /** ID of the cluster that the shard belongs to. */
  clusterId: string;
}

export interface Host {
  $type: "yandex.cloud.mdb.mongodb.v1.Host";
  /**
   * Name of the MongoDB host. The host name is assigned by MDB at creation time, and cannot be changed.
   * 1-63 characters long.
   *
   * The name is unique across all existing MDB hosts in Yandex.Cloud, as it defines the FQDN of the host.
   */
  name: string;
  /** ID of the MongoDB host. The ID is assigned by MDB at creation time. */
  clusterId: string;
  /** ID of the availability zone where the MongoDB host resides. */
  zoneId: string;
  /** Resources allocated to the MongoDB host. */
  resources?: Resources;
  /** Role of the host in the cluster. */
  role: Host_Role;
  /** Status code of the aggregated health of the host. */
  health: Host_Health;
  /** Services provided by the host. */
  services: Service[];
  /** ID of the subnet that the host belongs to. */
  subnetId: string;
  /** Flag showing public IP assignment status to this host. */
  assignPublicIp: boolean;
  /** Shard which this host belongs to. */
  shardName: string;
  /** Host type */
  type: Host_Type;
}

export enum Host_Type {
  TYPE_UNSPECIFIED = 0,
  /** MONGOD - A mongod host. */
  MONGOD = 1,
  /** MONGOS - A mongos host. */
  MONGOS = 2,
  /** MONGOCFG - A mongocfg host. */
  MONGOCFG = 3,
  /** MONGOINFRA - A mongoinfra (mongos+mongocfg) host. */
  MONGOINFRA = 4,
  UNRECOGNIZED = -1,
}

export function host_TypeFromJSON(object: any): Host_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Host_Type.TYPE_UNSPECIFIED;
    case 1:
    case "MONGOD":
      return Host_Type.MONGOD;
    case 2:
    case "MONGOS":
      return Host_Type.MONGOS;
    case 3:
    case "MONGOCFG":
      return Host_Type.MONGOCFG;
    case 4:
    case "MONGOINFRA":
      return Host_Type.MONGOINFRA;
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
    case Host_Type.MONGOD:
      return "MONGOD";
    case Host_Type.MONGOS:
      return "MONGOS";
    case Host_Type.MONGOCFG:
      return "MONGOCFG";
    case Host_Type.MONGOINFRA:
      return "MONGOINFRA";
    default:
      return "UNKNOWN";
  }
}

export enum Host_Role {
  /** ROLE_UNKNOWN - Role of the host in the cluster is unknown. */
  ROLE_UNKNOWN = 0,
  /** PRIMARY - Host is the primary MongoDB server in the cluster. */
  PRIMARY = 1,
  /** SECONDARY - Host is a secondary MongoDB server in the cluster. */
  SECONDARY = 2,
  UNRECOGNIZED = -1,
}

export function host_RoleFromJSON(object: any): Host_Role {
  switch (object) {
    case 0:
    case "ROLE_UNKNOWN":
      return Host_Role.ROLE_UNKNOWN;
    case 1:
    case "PRIMARY":
      return Host_Role.PRIMARY;
    case 2:
    case "SECONDARY":
      return Host_Role.SECONDARY;
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
    case Host_Role.PRIMARY:
      return "PRIMARY";
    case Host_Role.SECONDARY:
      return "SECONDARY";
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
  $type: "yandex.cloud.mdb.mongodb.v1.Service";
  /** Type of the service provided by the host. */
  type: Service_Type;
  /** Status code of server availability. */
  health: Service_Health;
}

export enum Service_Type {
  TYPE_UNSPECIFIED = 0,
  /** MONGOD - The host is running a mongod daemon. */
  MONGOD = 1,
  /** MONGOS - The host is running a mongos daemon. */
  MONGOS = 2,
  /** MONGOCFG - The host is running a MongoDB config server. */
  MONGOCFG = 3,
  UNRECOGNIZED = -1,
}

export function service_TypeFromJSON(object: any): Service_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Service_Type.TYPE_UNSPECIFIED;
    case 1:
    case "MONGOD":
      return Service_Type.MONGOD;
    case 2:
    case "MONGOS":
      return Service_Type.MONGOS;
    case 3:
    case "MONGOCFG":
      return Service_Type.MONGOCFG;
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
    case Service_Type.MONGOD:
      return "MONGOD";
    case Service_Type.MONGOS:
      return "MONGOS";
    case Service_Type.MONGOCFG:
      return "MONGOCFG";
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
  $type: "yandex.cloud.mdb.mongodb.v1.Resources";
  /**
   * ID of the preset for computational resources available to a host (CPU, memory etc.).
   * All available presets are listed in the [documentation](/docs/managed-mongodb/concepts/instance-types).
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
  $type: "yandex.cloud.mdb.mongodb.v1.Access";
  /** Allow access for DataLens */
  dataLens: boolean;
}

const baseCluster: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.Cluster",
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
  deletionProtection: false,
};

export const Cluster = {
  $type: "yandex.cloud.mdb.mongodb.v1.Cluster" as const,

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
          $type: "yandex.cloud.mdb.mongodb.v1.Cluster.LabelsEntry",
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
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(Cluster.$type, Cluster);

const baseCluster_LabelsEntry: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.Cluster.LabelsEntry",
  key: "",
  value: "",
};

export const Cluster_LabelsEntry = {
  $type: "yandex.cloud.mdb.mongodb.v1.Cluster.LabelsEntry" as const,

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
  $type: "yandex.cloud.mdb.mongodb.v1.Monitoring",
  name: "",
  description: "",
  link: "",
};

export const Monitoring = {
  $type: "yandex.cloud.mdb.mongodb.v1.Monitoring" as const,

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
  $type: "yandex.cloud.mdb.mongodb.v1.ClusterConfig",
  version: "",
  featureCompatibilityVersion: "",
};

export const ClusterConfig = {
  $type: "yandex.cloud.mdb.mongodb.v1.ClusterConfig" as const,

  encode(
    message: ClusterConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.featureCompatibilityVersion !== "") {
      writer.uint32(42).string(message.featureCompatibilityVersion);
    }
    if (message.mongodb36 !== undefined) {
      Mongodb36.encode(message.mongodb36, writer.uint32(18).fork()).ldelim();
    }
    if (message.mongodb40 !== undefined) {
      Mongodb40.encode(message.mongodb40, writer.uint32(34).fork()).ldelim();
    }
    if (message.mongodb42 !== undefined) {
      Mongodb42.encode(message.mongodb42, writer.uint32(58).fork()).ldelim();
    }
    if (message.mongodb44 !== undefined) {
      Mongodb44.encode(message.mongodb44, writer.uint32(66).fork()).ldelim();
    }
    if (message.mongodb50 !== undefined) {
      Mongodb50.encode(message.mongodb50, writer.uint32(82).fork()).ldelim();
    }
    if (message.backupWindowStart !== undefined) {
      TimeOfDay.encode(
        message.backupWindowStart,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.backupRetainPeriodDays !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.backupRetainPeriodDays!,
        },
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.access !== undefined) {
      Access.encode(message.access, writer.uint32(50).fork()).ldelim();
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
        case 5:
          message.featureCompatibilityVersion = reader.string();
          break;
        case 2:
          message.mongodb36 = Mongodb36.decode(reader, reader.uint32());
          break;
        case 4:
          message.mongodb40 = Mongodb40.decode(reader, reader.uint32());
          break;
        case 7:
          message.mongodb42 = Mongodb42.decode(reader, reader.uint32());
          break;
        case 8:
          message.mongodb44 = Mongodb44.decode(reader, reader.uint32());
          break;
        case 10:
          message.mongodb50 = Mongodb50.decode(reader, reader.uint32());
          break;
        case 3:
          message.backupWindowStart = TimeOfDay.decode(reader, reader.uint32());
          break;
        case 9:
          message.backupRetainPeriodDays = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 6:
          message.access = Access.decode(reader, reader.uint32());
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
    message.featureCompatibilityVersion =
      object.featureCompatibilityVersion !== undefined &&
      object.featureCompatibilityVersion !== null
        ? String(object.featureCompatibilityVersion)
        : "";
    message.mongodb36 =
      object.mongodb_3_6 !== undefined && object.mongodb_3_6 !== null
        ? Mongodb36.fromJSON(object.mongodb_3_6)
        : undefined;
    message.mongodb40 =
      object.mongodb_4_0 !== undefined && object.mongodb_4_0 !== null
        ? Mongodb40.fromJSON(object.mongodb_4_0)
        : undefined;
    message.mongodb42 =
      object.mongodb_4_2 !== undefined && object.mongodb_4_2 !== null
        ? Mongodb42.fromJSON(object.mongodb_4_2)
        : undefined;
    message.mongodb44 =
      object.mongodb_4_4 !== undefined && object.mongodb_4_4 !== null
        ? Mongodb44.fromJSON(object.mongodb_4_4)
        : undefined;
    message.mongodb50 =
      object.mongodb_5_0 !== undefined && object.mongodb_5_0 !== null
        ? Mongodb50.fromJSON(object.mongodb_5_0)
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
    return message;
  },

  toJSON(message: ClusterConfig): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.featureCompatibilityVersion !== undefined &&
      (obj.featureCompatibilityVersion = message.featureCompatibilityVersion);
    message.mongodb36 !== undefined &&
      (obj.mongodb_3_6 = message.mongodb36
        ? Mongodb36.toJSON(message.mongodb36)
        : undefined);
    message.mongodb40 !== undefined &&
      (obj.mongodb_4_0 = message.mongodb40
        ? Mongodb40.toJSON(message.mongodb40)
        : undefined);
    message.mongodb42 !== undefined &&
      (obj.mongodb_4_2 = message.mongodb42
        ? Mongodb42.toJSON(message.mongodb42)
        : undefined);
    message.mongodb44 !== undefined &&
      (obj.mongodb_4_4 = message.mongodb44
        ? Mongodb44.toJSON(message.mongodb44)
        : undefined);
    message.mongodb50 !== undefined &&
      (obj.mongodb_5_0 = message.mongodb50
        ? Mongodb50.toJSON(message.mongodb50)
        : undefined);
    message.backupWindowStart !== undefined &&
      (obj.backupWindowStart = message.backupWindowStart
        ? TimeOfDay.toJSON(message.backupWindowStart)
        : undefined);
    message.backupRetainPeriodDays !== undefined &&
      (obj.backupRetainPeriodDays = message.backupRetainPeriodDays);
    message.access !== undefined &&
      (obj.access = message.access ? Access.toJSON(message.access) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClusterConfig>, I>>(
    object: I
  ): ClusterConfig {
    const message = { ...baseClusterConfig } as ClusterConfig;
    message.version = object.version ?? "";
    message.featureCompatibilityVersion =
      object.featureCompatibilityVersion ?? "";
    message.mongodb36 =
      object.mongodb36 !== undefined && object.mongodb36 !== null
        ? Mongodb36.fromPartial(object.mongodb36)
        : undefined;
    message.mongodb40 =
      object.mongodb40 !== undefined && object.mongodb40 !== null
        ? Mongodb40.fromPartial(object.mongodb40)
        : undefined;
    message.mongodb42 =
      object.mongodb42 !== undefined && object.mongodb42 !== null
        ? Mongodb42.fromPartial(object.mongodb42)
        : undefined;
    message.mongodb44 =
      object.mongodb44 !== undefined && object.mongodb44 !== null
        ? Mongodb44.fromPartial(object.mongodb44)
        : undefined;
    message.mongodb50 =
      object.mongodb50 !== undefined && object.mongodb50 !== null
        ? Mongodb50.fromPartial(object.mongodb50)
        : undefined;
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
    return message;
  },
};

messageTypeRegistry.set(ClusterConfig.$type, ClusterConfig);

const baseMongodb36: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6",
};

export const Mongodb36 = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6" as const,

  encode(
    message: Mongodb36,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mongod !== undefined) {
      Mongodb36_Mongod.encode(
        message.mongod,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.mongocfg !== undefined) {
      Mongodb36_MongoCfg.encode(
        message.mongocfg,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.mongos !== undefined) {
      Mongodb36_Mongos.encode(
        message.mongos,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.mongoinfra !== undefined) {
      Mongodb36_MongoInfra.encode(
        message.mongoinfra,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb36 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodb36 } as Mongodb36;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mongod = Mongodb36_Mongod.decode(reader, reader.uint32());
          break;
        case 2:
          message.mongocfg = Mongodb36_MongoCfg.decode(reader, reader.uint32());
          break;
        case 3:
          message.mongos = Mongodb36_Mongos.decode(reader, reader.uint32());
          break;
        case 4:
          message.mongoinfra = Mongodb36_MongoInfra.decode(
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

  fromJSON(object: any): Mongodb36 {
    const message = { ...baseMongodb36 } as Mongodb36;
    message.mongod =
      object.mongod !== undefined && object.mongod !== null
        ? Mongodb36_Mongod.fromJSON(object.mongod)
        : undefined;
    message.mongocfg =
      object.mongocfg !== undefined && object.mongocfg !== null
        ? Mongodb36_MongoCfg.fromJSON(object.mongocfg)
        : undefined;
    message.mongos =
      object.mongos !== undefined && object.mongos !== null
        ? Mongodb36_Mongos.fromJSON(object.mongos)
        : undefined;
    message.mongoinfra =
      object.mongoinfra !== undefined && object.mongoinfra !== null
        ? Mongodb36_MongoInfra.fromJSON(object.mongoinfra)
        : undefined;
    return message;
  },

  toJSON(message: Mongodb36): unknown {
    const obj: any = {};
    message.mongod !== undefined &&
      (obj.mongod = message.mongod
        ? Mongodb36_Mongod.toJSON(message.mongod)
        : undefined);
    message.mongocfg !== undefined &&
      (obj.mongocfg = message.mongocfg
        ? Mongodb36_MongoCfg.toJSON(message.mongocfg)
        : undefined);
    message.mongos !== undefined &&
      (obj.mongos = message.mongos
        ? Mongodb36_Mongos.toJSON(message.mongos)
        : undefined);
    message.mongoinfra !== undefined &&
      (obj.mongoinfra = message.mongoinfra
        ? Mongodb36_MongoInfra.toJSON(message.mongoinfra)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodb36>, I>>(
    object: I
  ): Mongodb36 {
    const message = { ...baseMongodb36 } as Mongodb36;
    message.mongod =
      object.mongod !== undefined && object.mongod !== null
        ? Mongodb36_Mongod.fromPartial(object.mongod)
        : undefined;
    message.mongocfg =
      object.mongocfg !== undefined && object.mongocfg !== null
        ? Mongodb36_MongoCfg.fromPartial(object.mongocfg)
        : undefined;
    message.mongos =
      object.mongos !== undefined && object.mongos !== null
        ? Mongodb36_Mongos.fromPartial(object.mongos)
        : undefined;
    message.mongoinfra =
      object.mongoinfra !== undefined && object.mongoinfra !== null
        ? Mongodb36_MongoInfra.fromPartial(object.mongoinfra)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb36.$type, Mongodb36);

const baseMongodb36_Mongod: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod",
};

export const Mongodb36_Mongod = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod" as const,

  encode(
    message: Mongodb36_Mongod,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.config !== undefined) {
      Mongodconfigset36.encode(
        message.config,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb36_Mongod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodb36_Mongod } as Mongodb36_Mongod;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = Mongodconfigset36.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb36_Mongod {
    const message = { ...baseMongodb36_Mongod } as Mongodb36_Mongod;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongodconfigset36.fromJSON(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: Mongodb36_Mongod): unknown {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config
        ? Mongodconfigset36.toJSON(message.config)
        : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodb36_Mongod>, I>>(
    object: I
  ): Mongodb36_Mongod {
    const message = { ...baseMongodb36_Mongod } as Mongodb36_Mongod;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongodconfigset36.fromPartial(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb36_Mongod.$type, Mongodb36_Mongod);

const baseMongodb36_MongoCfg: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg",
};

export const Mongodb36_MongoCfg = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg" as const,

  encode(
    message: Mongodb36_MongoCfg,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.config !== undefined) {
      Mongocfgconfigset36.encode(
        message.config,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb36_MongoCfg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodb36_MongoCfg } as Mongodb36_MongoCfg;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = Mongocfgconfigset36.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb36_MongoCfg {
    const message = { ...baseMongodb36_MongoCfg } as Mongodb36_MongoCfg;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongocfgconfigset36.fromJSON(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: Mongodb36_MongoCfg): unknown {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config
        ? Mongocfgconfigset36.toJSON(message.config)
        : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodb36_MongoCfg>, I>>(
    object: I
  ): Mongodb36_MongoCfg {
    const message = { ...baseMongodb36_MongoCfg } as Mongodb36_MongoCfg;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongocfgconfigset36.fromPartial(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb36_MongoCfg.$type, Mongodb36_MongoCfg);

const baseMongodb36_Mongos: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos",
};

export const Mongodb36_Mongos = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos" as const,

  encode(
    message: Mongodb36_Mongos,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.config !== undefined) {
      Mongosconfigset36.encode(
        message.config,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb36_Mongos {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodb36_Mongos } as Mongodb36_Mongos;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = Mongosconfigset36.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb36_Mongos {
    const message = { ...baseMongodb36_Mongos } as Mongodb36_Mongos;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongosconfigset36.fromJSON(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: Mongodb36_Mongos): unknown {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config
        ? Mongosconfigset36.toJSON(message.config)
        : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodb36_Mongos>, I>>(
    object: I
  ): Mongodb36_Mongos {
    const message = { ...baseMongodb36_Mongos } as Mongodb36_Mongos;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongosconfigset36.fromPartial(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb36_Mongos.$type, Mongodb36_Mongos);

const baseMongodb36_MongoInfra: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra",
};

export const Mongodb36_MongoInfra = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra" as const,

  encode(
    message: Mongodb36_MongoInfra,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.configMongos !== undefined) {
      Mongosconfigset36.encode(
        message.configMongos,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.configMongocfg !== undefined) {
      Mongocfgconfigset36.encode(
        message.configMongocfg,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongodb36_MongoInfra {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodb36_MongoInfra } as Mongodb36_MongoInfra;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.configMongos = Mongosconfigset36.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.configMongocfg = Mongocfgconfigset36.decode(
            reader,
            reader.uint32()
          );
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

  fromJSON(object: any): Mongodb36_MongoInfra {
    const message = { ...baseMongodb36_MongoInfra } as Mongodb36_MongoInfra;
    message.configMongos =
      object.configMongos !== undefined && object.configMongos !== null
        ? Mongosconfigset36.fromJSON(object.configMongos)
        : undefined;
    message.configMongocfg =
      object.configMongocfg !== undefined && object.configMongocfg !== null
        ? Mongocfgconfigset36.fromJSON(object.configMongocfg)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: Mongodb36_MongoInfra): unknown {
    const obj: any = {};
    message.configMongos !== undefined &&
      (obj.configMongos = message.configMongos
        ? Mongosconfigset36.toJSON(message.configMongos)
        : undefined);
    message.configMongocfg !== undefined &&
      (obj.configMongocfg = message.configMongocfg
        ? Mongocfgconfigset36.toJSON(message.configMongocfg)
        : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodb36_MongoInfra>, I>>(
    object: I
  ): Mongodb36_MongoInfra {
    const message = { ...baseMongodb36_MongoInfra } as Mongodb36_MongoInfra;
    message.configMongos =
      object.configMongos !== undefined && object.configMongos !== null
        ? Mongosconfigset36.fromPartial(object.configMongos)
        : undefined;
    message.configMongocfg =
      object.configMongocfg !== undefined && object.configMongocfg !== null
        ? Mongocfgconfigset36.fromPartial(object.configMongocfg)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb36_MongoInfra.$type, Mongodb36_MongoInfra);

const baseMongodb40: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0",
};

export const Mongodb40 = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0" as const,

  encode(
    message: Mongodb40,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mongod !== undefined) {
      Mongodb40_Mongod.encode(
        message.mongod,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.mongocfg !== undefined) {
      Mongodb40_MongoCfg.encode(
        message.mongocfg,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.mongos !== undefined) {
      Mongodb40_Mongos.encode(
        message.mongos,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.mongoinfra !== undefined) {
      Mongodb40_MongoInfra.encode(
        message.mongoinfra,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb40 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodb40 } as Mongodb40;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mongod = Mongodb40_Mongod.decode(reader, reader.uint32());
          break;
        case 2:
          message.mongocfg = Mongodb40_MongoCfg.decode(reader, reader.uint32());
          break;
        case 3:
          message.mongos = Mongodb40_Mongos.decode(reader, reader.uint32());
          break;
        case 4:
          message.mongoinfra = Mongodb40_MongoInfra.decode(
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

  fromJSON(object: any): Mongodb40 {
    const message = { ...baseMongodb40 } as Mongodb40;
    message.mongod =
      object.mongod !== undefined && object.mongod !== null
        ? Mongodb40_Mongod.fromJSON(object.mongod)
        : undefined;
    message.mongocfg =
      object.mongocfg !== undefined && object.mongocfg !== null
        ? Mongodb40_MongoCfg.fromJSON(object.mongocfg)
        : undefined;
    message.mongos =
      object.mongos !== undefined && object.mongos !== null
        ? Mongodb40_Mongos.fromJSON(object.mongos)
        : undefined;
    message.mongoinfra =
      object.mongoinfra !== undefined && object.mongoinfra !== null
        ? Mongodb40_MongoInfra.fromJSON(object.mongoinfra)
        : undefined;
    return message;
  },

  toJSON(message: Mongodb40): unknown {
    const obj: any = {};
    message.mongod !== undefined &&
      (obj.mongod = message.mongod
        ? Mongodb40_Mongod.toJSON(message.mongod)
        : undefined);
    message.mongocfg !== undefined &&
      (obj.mongocfg = message.mongocfg
        ? Mongodb40_MongoCfg.toJSON(message.mongocfg)
        : undefined);
    message.mongos !== undefined &&
      (obj.mongos = message.mongos
        ? Mongodb40_Mongos.toJSON(message.mongos)
        : undefined);
    message.mongoinfra !== undefined &&
      (obj.mongoinfra = message.mongoinfra
        ? Mongodb40_MongoInfra.toJSON(message.mongoinfra)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodb40>, I>>(
    object: I
  ): Mongodb40 {
    const message = { ...baseMongodb40 } as Mongodb40;
    message.mongod =
      object.mongod !== undefined && object.mongod !== null
        ? Mongodb40_Mongod.fromPartial(object.mongod)
        : undefined;
    message.mongocfg =
      object.mongocfg !== undefined && object.mongocfg !== null
        ? Mongodb40_MongoCfg.fromPartial(object.mongocfg)
        : undefined;
    message.mongos =
      object.mongos !== undefined && object.mongos !== null
        ? Mongodb40_Mongos.fromPartial(object.mongos)
        : undefined;
    message.mongoinfra =
      object.mongoinfra !== undefined && object.mongoinfra !== null
        ? Mongodb40_MongoInfra.fromPartial(object.mongoinfra)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb40.$type, Mongodb40);

const baseMongodb40_Mongod: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod",
};

export const Mongodb40_Mongod = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod" as const,

  encode(
    message: Mongodb40_Mongod,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.config !== undefined) {
      Mongodconfigset40.encode(
        message.config,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb40_Mongod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodb40_Mongod } as Mongodb40_Mongod;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = Mongodconfigset40.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb40_Mongod {
    const message = { ...baseMongodb40_Mongod } as Mongodb40_Mongod;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongodconfigset40.fromJSON(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: Mongodb40_Mongod): unknown {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config
        ? Mongodconfigset40.toJSON(message.config)
        : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodb40_Mongod>, I>>(
    object: I
  ): Mongodb40_Mongod {
    const message = { ...baseMongodb40_Mongod } as Mongodb40_Mongod;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongodconfigset40.fromPartial(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb40_Mongod.$type, Mongodb40_Mongod);

const baseMongodb40_MongoCfg: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg",
};

export const Mongodb40_MongoCfg = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg" as const,

  encode(
    message: Mongodb40_MongoCfg,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.config !== undefined) {
      Mongocfgconfigset40.encode(
        message.config,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb40_MongoCfg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodb40_MongoCfg } as Mongodb40_MongoCfg;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = Mongocfgconfigset40.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb40_MongoCfg {
    const message = { ...baseMongodb40_MongoCfg } as Mongodb40_MongoCfg;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongocfgconfigset40.fromJSON(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: Mongodb40_MongoCfg): unknown {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config
        ? Mongocfgconfigset40.toJSON(message.config)
        : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodb40_MongoCfg>, I>>(
    object: I
  ): Mongodb40_MongoCfg {
    const message = { ...baseMongodb40_MongoCfg } as Mongodb40_MongoCfg;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongocfgconfigset40.fromPartial(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb40_MongoCfg.$type, Mongodb40_MongoCfg);

const baseMongodb40_Mongos: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos",
};

export const Mongodb40_Mongos = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos" as const,

  encode(
    message: Mongodb40_Mongos,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.config !== undefined) {
      Mongosconfigset40.encode(
        message.config,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb40_Mongos {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodb40_Mongos } as Mongodb40_Mongos;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = Mongosconfigset40.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb40_Mongos {
    const message = { ...baseMongodb40_Mongos } as Mongodb40_Mongos;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongosconfigset40.fromJSON(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: Mongodb40_Mongos): unknown {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config
        ? Mongosconfigset40.toJSON(message.config)
        : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodb40_Mongos>, I>>(
    object: I
  ): Mongodb40_Mongos {
    const message = { ...baseMongodb40_Mongos } as Mongodb40_Mongos;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongosconfigset40.fromPartial(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb40_Mongos.$type, Mongodb40_Mongos);

const baseMongodb40_MongoInfra: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra",
};

export const Mongodb40_MongoInfra = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra" as const,

  encode(
    message: Mongodb40_MongoInfra,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.configMongos !== undefined) {
      Mongosconfigset40.encode(
        message.configMongos,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.configMongocfg !== undefined) {
      Mongocfgconfigset40.encode(
        message.configMongocfg,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongodb40_MongoInfra {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodb40_MongoInfra } as Mongodb40_MongoInfra;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.configMongos = Mongosconfigset40.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.configMongocfg = Mongocfgconfigset40.decode(
            reader,
            reader.uint32()
          );
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

  fromJSON(object: any): Mongodb40_MongoInfra {
    const message = { ...baseMongodb40_MongoInfra } as Mongodb40_MongoInfra;
    message.configMongos =
      object.configMongos !== undefined && object.configMongos !== null
        ? Mongosconfigset40.fromJSON(object.configMongos)
        : undefined;
    message.configMongocfg =
      object.configMongocfg !== undefined && object.configMongocfg !== null
        ? Mongocfgconfigset40.fromJSON(object.configMongocfg)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: Mongodb40_MongoInfra): unknown {
    const obj: any = {};
    message.configMongos !== undefined &&
      (obj.configMongos = message.configMongos
        ? Mongosconfigset40.toJSON(message.configMongos)
        : undefined);
    message.configMongocfg !== undefined &&
      (obj.configMongocfg = message.configMongocfg
        ? Mongocfgconfigset40.toJSON(message.configMongocfg)
        : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodb40_MongoInfra>, I>>(
    object: I
  ): Mongodb40_MongoInfra {
    const message = { ...baseMongodb40_MongoInfra } as Mongodb40_MongoInfra;
    message.configMongos =
      object.configMongos !== undefined && object.configMongos !== null
        ? Mongosconfigset40.fromPartial(object.configMongos)
        : undefined;
    message.configMongocfg =
      object.configMongocfg !== undefined && object.configMongocfg !== null
        ? Mongocfgconfigset40.fromPartial(object.configMongocfg)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb40_MongoInfra.$type, Mongodb40_MongoInfra);

const baseMongodb42: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2",
};

export const Mongodb42 = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2" as const,

  encode(
    message: Mongodb42,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mongod !== undefined) {
      Mongodb42_Mongod.encode(
        message.mongod,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.mongocfg !== undefined) {
      Mongodb42_MongoCfg.encode(
        message.mongocfg,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.mongos !== undefined) {
      Mongodb42_Mongos.encode(
        message.mongos,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.mongoinfra !== undefined) {
      Mongodb42_MongoInfra.encode(
        message.mongoinfra,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb42 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodb42 } as Mongodb42;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mongod = Mongodb42_Mongod.decode(reader, reader.uint32());
          break;
        case 2:
          message.mongocfg = Mongodb42_MongoCfg.decode(reader, reader.uint32());
          break;
        case 3:
          message.mongos = Mongodb42_Mongos.decode(reader, reader.uint32());
          break;
        case 4:
          message.mongoinfra = Mongodb42_MongoInfra.decode(
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

  fromJSON(object: any): Mongodb42 {
    const message = { ...baseMongodb42 } as Mongodb42;
    message.mongod =
      object.mongod !== undefined && object.mongod !== null
        ? Mongodb42_Mongod.fromJSON(object.mongod)
        : undefined;
    message.mongocfg =
      object.mongocfg !== undefined && object.mongocfg !== null
        ? Mongodb42_MongoCfg.fromJSON(object.mongocfg)
        : undefined;
    message.mongos =
      object.mongos !== undefined && object.mongos !== null
        ? Mongodb42_Mongos.fromJSON(object.mongos)
        : undefined;
    message.mongoinfra =
      object.mongoinfra !== undefined && object.mongoinfra !== null
        ? Mongodb42_MongoInfra.fromJSON(object.mongoinfra)
        : undefined;
    return message;
  },

  toJSON(message: Mongodb42): unknown {
    const obj: any = {};
    message.mongod !== undefined &&
      (obj.mongod = message.mongod
        ? Mongodb42_Mongod.toJSON(message.mongod)
        : undefined);
    message.mongocfg !== undefined &&
      (obj.mongocfg = message.mongocfg
        ? Mongodb42_MongoCfg.toJSON(message.mongocfg)
        : undefined);
    message.mongos !== undefined &&
      (obj.mongos = message.mongos
        ? Mongodb42_Mongos.toJSON(message.mongos)
        : undefined);
    message.mongoinfra !== undefined &&
      (obj.mongoinfra = message.mongoinfra
        ? Mongodb42_MongoInfra.toJSON(message.mongoinfra)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodb42>, I>>(
    object: I
  ): Mongodb42 {
    const message = { ...baseMongodb42 } as Mongodb42;
    message.mongod =
      object.mongod !== undefined && object.mongod !== null
        ? Mongodb42_Mongod.fromPartial(object.mongod)
        : undefined;
    message.mongocfg =
      object.mongocfg !== undefined && object.mongocfg !== null
        ? Mongodb42_MongoCfg.fromPartial(object.mongocfg)
        : undefined;
    message.mongos =
      object.mongos !== undefined && object.mongos !== null
        ? Mongodb42_Mongos.fromPartial(object.mongos)
        : undefined;
    message.mongoinfra =
      object.mongoinfra !== undefined && object.mongoinfra !== null
        ? Mongodb42_MongoInfra.fromPartial(object.mongoinfra)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb42.$type, Mongodb42);

const baseMongodb42_Mongod: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod",
};

export const Mongodb42_Mongod = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod" as const,

  encode(
    message: Mongodb42_Mongod,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.config !== undefined) {
      Mongodconfigset42.encode(
        message.config,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb42_Mongod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodb42_Mongod } as Mongodb42_Mongod;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = Mongodconfigset42.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb42_Mongod {
    const message = { ...baseMongodb42_Mongod } as Mongodb42_Mongod;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongodconfigset42.fromJSON(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: Mongodb42_Mongod): unknown {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config
        ? Mongodconfigset42.toJSON(message.config)
        : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodb42_Mongod>, I>>(
    object: I
  ): Mongodb42_Mongod {
    const message = { ...baseMongodb42_Mongod } as Mongodb42_Mongod;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongodconfigset42.fromPartial(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb42_Mongod.$type, Mongodb42_Mongod);

const baseMongodb42_MongoCfg: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg",
};

export const Mongodb42_MongoCfg = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg" as const,

  encode(
    message: Mongodb42_MongoCfg,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.config !== undefined) {
      Mongocfgconfigset42.encode(
        message.config,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb42_MongoCfg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodb42_MongoCfg } as Mongodb42_MongoCfg;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = Mongocfgconfigset42.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb42_MongoCfg {
    const message = { ...baseMongodb42_MongoCfg } as Mongodb42_MongoCfg;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongocfgconfigset42.fromJSON(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: Mongodb42_MongoCfg): unknown {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config
        ? Mongocfgconfigset42.toJSON(message.config)
        : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodb42_MongoCfg>, I>>(
    object: I
  ): Mongodb42_MongoCfg {
    const message = { ...baseMongodb42_MongoCfg } as Mongodb42_MongoCfg;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongocfgconfigset42.fromPartial(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb42_MongoCfg.$type, Mongodb42_MongoCfg);

const baseMongodb42_Mongos: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos",
};

export const Mongodb42_Mongos = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos" as const,

  encode(
    message: Mongodb42_Mongos,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.config !== undefined) {
      Mongosconfigset42.encode(
        message.config,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb42_Mongos {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodb42_Mongos } as Mongodb42_Mongos;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = Mongosconfigset42.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb42_Mongos {
    const message = { ...baseMongodb42_Mongos } as Mongodb42_Mongos;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongosconfigset42.fromJSON(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: Mongodb42_Mongos): unknown {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config
        ? Mongosconfigset42.toJSON(message.config)
        : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodb42_Mongos>, I>>(
    object: I
  ): Mongodb42_Mongos {
    const message = { ...baseMongodb42_Mongos } as Mongodb42_Mongos;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongosconfigset42.fromPartial(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb42_Mongos.$type, Mongodb42_Mongos);

const baseMongodb42_MongoInfra: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra",
};

export const Mongodb42_MongoInfra = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra" as const,

  encode(
    message: Mongodb42_MongoInfra,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.configMongos !== undefined) {
      Mongosconfigset42.encode(
        message.configMongos,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.configMongocfg !== undefined) {
      Mongocfgconfigset42.encode(
        message.configMongocfg,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongodb42_MongoInfra {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodb42_MongoInfra } as Mongodb42_MongoInfra;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.configMongos = Mongosconfigset42.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.configMongocfg = Mongocfgconfigset42.decode(
            reader,
            reader.uint32()
          );
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

  fromJSON(object: any): Mongodb42_MongoInfra {
    const message = { ...baseMongodb42_MongoInfra } as Mongodb42_MongoInfra;
    message.configMongos =
      object.configMongos !== undefined && object.configMongos !== null
        ? Mongosconfigset42.fromJSON(object.configMongos)
        : undefined;
    message.configMongocfg =
      object.configMongocfg !== undefined && object.configMongocfg !== null
        ? Mongocfgconfigset42.fromJSON(object.configMongocfg)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: Mongodb42_MongoInfra): unknown {
    const obj: any = {};
    message.configMongos !== undefined &&
      (obj.configMongos = message.configMongos
        ? Mongosconfigset42.toJSON(message.configMongos)
        : undefined);
    message.configMongocfg !== undefined &&
      (obj.configMongocfg = message.configMongocfg
        ? Mongocfgconfigset42.toJSON(message.configMongocfg)
        : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodb42_MongoInfra>, I>>(
    object: I
  ): Mongodb42_MongoInfra {
    const message = { ...baseMongodb42_MongoInfra } as Mongodb42_MongoInfra;
    message.configMongos =
      object.configMongos !== undefined && object.configMongos !== null
        ? Mongosconfigset42.fromPartial(object.configMongos)
        : undefined;
    message.configMongocfg =
      object.configMongocfg !== undefined && object.configMongocfg !== null
        ? Mongocfgconfigset42.fromPartial(object.configMongocfg)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb42_MongoInfra.$type, Mongodb42_MongoInfra);

const baseMongodb44: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4",
};

export const Mongodb44 = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4" as const,

  encode(
    message: Mongodb44,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mongod !== undefined) {
      Mongodb44_Mongod.encode(
        message.mongod,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.mongocfg !== undefined) {
      Mongodb44_MongoCfg.encode(
        message.mongocfg,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.mongos !== undefined) {
      Mongodb44_Mongos.encode(
        message.mongos,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.mongoinfra !== undefined) {
      Mongodb44_MongoInfra.encode(
        message.mongoinfra,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb44 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodb44 } as Mongodb44;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mongod = Mongodb44_Mongod.decode(reader, reader.uint32());
          break;
        case 2:
          message.mongocfg = Mongodb44_MongoCfg.decode(reader, reader.uint32());
          break;
        case 3:
          message.mongos = Mongodb44_Mongos.decode(reader, reader.uint32());
          break;
        case 4:
          message.mongoinfra = Mongodb44_MongoInfra.decode(
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

  fromJSON(object: any): Mongodb44 {
    const message = { ...baseMongodb44 } as Mongodb44;
    message.mongod =
      object.mongod !== undefined && object.mongod !== null
        ? Mongodb44_Mongod.fromJSON(object.mongod)
        : undefined;
    message.mongocfg =
      object.mongocfg !== undefined && object.mongocfg !== null
        ? Mongodb44_MongoCfg.fromJSON(object.mongocfg)
        : undefined;
    message.mongos =
      object.mongos !== undefined && object.mongos !== null
        ? Mongodb44_Mongos.fromJSON(object.mongos)
        : undefined;
    message.mongoinfra =
      object.mongoinfra !== undefined && object.mongoinfra !== null
        ? Mongodb44_MongoInfra.fromJSON(object.mongoinfra)
        : undefined;
    return message;
  },

  toJSON(message: Mongodb44): unknown {
    const obj: any = {};
    message.mongod !== undefined &&
      (obj.mongod = message.mongod
        ? Mongodb44_Mongod.toJSON(message.mongod)
        : undefined);
    message.mongocfg !== undefined &&
      (obj.mongocfg = message.mongocfg
        ? Mongodb44_MongoCfg.toJSON(message.mongocfg)
        : undefined);
    message.mongos !== undefined &&
      (obj.mongos = message.mongos
        ? Mongodb44_Mongos.toJSON(message.mongos)
        : undefined);
    message.mongoinfra !== undefined &&
      (obj.mongoinfra = message.mongoinfra
        ? Mongodb44_MongoInfra.toJSON(message.mongoinfra)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodb44>, I>>(
    object: I
  ): Mongodb44 {
    const message = { ...baseMongodb44 } as Mongodb44;
    message.mongod =
      object.mongod !== undefined && object.mongod !== null
        ? Mongodb44_Mongod.fromPartial(object.mongod)
        : undefined;
    message.mongocfg =
      object.mongocfg !== undefined && object.mongocfg !== null
        ? Mongodb44_MongoCfg.fromPartial(object.mongocfg)
        : undefined;
    message.mongos =
      object.mongos !== undefined && object.mongos !== null
        ? Mongodb44_Mongos.fromPartial(object.mongos)
        : undefined;
    message.mongoinfra =
      object.mongoinfra !== undefined && object.mongoinfra !== null
        ? Mongodb44_MongoInfra.fromPartial(object.mongoinfra)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb44.$type, Mongodb44);

const baseMongodb44_Mongod: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod",
};

export const Mongodb44_Mongod = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod" as const,

  encode(
    message: Mongodb44_Mongod,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.config !== undefined) {
      Mongodconfigset44.encode(
        message.config,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb44_Mongod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodb44_Mongod } as Mongodb44_Mongod;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = Mongodconfigset44.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb44_Mongod {
    const message = { ...baseMongodb44_Mongod } as Mongodb44_Mongod;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongodconfigset44.fromJSON(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: Mongodb44_Mongod): unknown {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config
        ? Mongodconfigset44.toJSON(message.config)
        : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodb44_Mongod>, I>>(
    object: I
  ): Mongodb44_Mongod {
    const message = { ...baseMongodb44_Mongod } as Mongodb44_Mongod;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongodconfigset44.fromPartial(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb44_Mongod.$type, Mongodb44_Mongod);

const baseMongodb44_MongoCfg: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg",
};

export const Mongodb44_MongoCfg = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg" as const,

  encode(
    message: Mongodb44_MongoCfg,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.config !== undefined) {
      Mongocfgconfigset44.encode(
        message.config,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb44_MongoCfg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodb44_MongoCfg } as Mongodb44_MongoCfg;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = Mongocfgconfigset44.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb44_MongoCfg {
    const message = { ...baseMongodb44_MongoCfg } as Mongodb44_MongoCfg;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongocfgconfigset44.fromJSON(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: Mongodb44_MongoCfg): unknown {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config
        ? Mongocfgconfigset44.toJSON(message.config)
        : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodb44_MongoCfg>, I>>(
    object: I
  ): Mongodb44_MongoCfg {
    const message = { ...baseMongodb44_MongoCfg } as Mongodb44_MongoCfg;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongocfgconfigset44.fromPartial(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb44_MongoCfg.$type, Mongodb44_MongoCfg);

const baseMongodb44_Mongos: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos",
};

export const Mongodb44_Mongos = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos" as const,

  encode(
    message: Mongodb44_Mongos,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.config !== undefined) {
      Mongosconfigset44.encode(
        message.config,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb44_Mongos {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodb44_Mongos } as Mongodb44_Mongos;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = Mongosconfigset44.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb44_Mongos {
    const message = { ...baseMongodb44_Mongos } as Mongodb44_Mongos;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongosconfigset44.fromJSON(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: Mongodb44_Mongos): unknown {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config
        ? Mongosconfigset44.toJSON(message.config)
        : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodb44_Mongos>, I>>(
    object: I
  ): Mongodb44_Mongos {
    const message = { ...baseMongodb44_Mongos } as Mongodb44_Mongos;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongosconfigset44.fromPartial(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb44_Mongos.$type, Mongodb44_Mongos);

const baseMongodb44_MongoInfra: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra",
};

export const Mongodb44_MongoInfra = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra" as const,

  encode(
    message: Mongodb44_MongoInfra,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.configMongos !== undefined) {
      Mongosconfigset44.encode(
        message.configMongos,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.configMongocfg !== undefined) {
      Mongocfgconfigset44.encode(
        message.configMongocfg,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongodb44_MongoInfra {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodb44_MongoInfra } as Mongodb44_MongoInfra;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.configMongos = Mongosconfigset44.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.configMongocfg = Mongocfgconfigset44.decode(
            reader,
            reader.uint32()
          );
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

  fromJSON(object: any): Mongodb44_MongoInfra {
    const message = { ...baseMongodb44_MongoInfra } as Mongodb44_MongoInfra;
    message.configMongos =
      object.configMongos !== undefined && object.configMongos !== null
        ? Mongosconfigset44.fromJSON(object.configMongos)
        : undefined;
    message.configMongocfg =
      object.configMongocfg !== undefined && object.configMongocfg !== null
        ? Mongocfgconfigset44.fromJSON(object.configMongocfg)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: Mongodb44_MongoInfra): unknown {
    const obj: any = {};
    message.configMongos !== undefined &&
      (obj.configMongos = message.configMongos
        ? Mongosconfigset44.toJSON(message.configMongos)
        : undefined);
    message.configMongocfg !== undefined &&
      (obj.configMongocfg = message.configMongocfg
        ? Mongocfgconfigset44.toJSON(message.configMongocfg)
        : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodb44_MongoInfra>, I>>(
    object: I
  ): Mongodb44_MongoInfra {
    const message = { ...baseMongodb44_MongoInfra } as Mongodb44_MongoInfra;
    message.configMongos =
      object.configMongos !== undefined && object.configMongos !== null
        ? Mongosconfigset44.fromPartial(object.configMongos)
        : undefined;
    message.configMongocfg =
      object.configMongocfg !== undefined && object.configMongocfg !== null
        ? Mongocfgconfigset44.fromPartial(object.configMongocfg)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb44_MongoInfra.$type, Mongodb44_MongoInfra);

const baseMongodb50: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0",
};

export const Mongodb50 = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0" as const,

  encode(
    message: Mongodb50,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mongod !== undefined) {
      Mongodb50_Mongod.encode(
        message.mongod,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.mongocfg !== undefined) {
      Mongodb50_MongoCfg.encode(
        message.mongocfg,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.mongos !== undefined) {
      Mongodb50_Mongos.encode(
        message.mongos,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.mongoinfra !== undefined) {
      Mongodb50_MongoInfra.encode(
        message.mongoinfra,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb50 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodb50 } as Mongodb50;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mongod = Mongodb50_Mongod.decode(reader, reader.uint32());
          break;
        case 2:
          message.mongocfg = Mongodb50_MongoCfg.decode(reader, reader.uint32());
          break;
        case 3:
          message.mongos = Mongodb50_Mongos.decode(reader, reader.uint32());
          break;
        case 4:
          message.mongoinfra = Mongodb50_MongoInfra.decode(
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

  fromJSON(object: any): Mongodb50 {
    const message = { ...baseMongodb50 } as Mongodb50;
    message.mongod =
      object.mongod !== undefined && object.mongod !== null
        ? Mongodb50_Mongod.fromJSON(object.mongod)
        : undefined;
    message.mongocfg =
      object.mongocfg !== undefined && object.mongocfg !== null
        ? Mongodb50_MongoCfg.fromJSON(object.mongocfg)
        : undefined;
    message.mongos =
      object.mongos !== undefined && object.mongos !== null
        ? Mongodb50_Mongos.fromJSON(object.mongos)
        : undefined;
    message.mongoinfra =
      object.mongoinfra !== undefined && object.mongoinfra !== null
        ? Mongodb50_MongoInfra.fromJSON(object.mongoinfra)
        : undefined;
    return message;
  },

  toJSON(message: Mongodb50): unknown {
    const obj: any = {};
    message.mongod !== undefined &&
      (obj.mongod = message.mongod
        ? Mongodb50_Mongod.toJSON(message.mongod)
        : undefined);
    message.mongocfg !== undefined &&
      (obj.mongocfg = message.mongocfg
        ? Mongodb50_MongoCfg.toJSON(message.mongocfg)
        : undefined);
    message.mongos !== undefined &&
      (obj.mongos = message.mongos
        ? Mongodb50_Mongos.toJSON(message.mongos)
        : undefined);
    message.mongoinfra !== undefined &&
      (obj.mongoinfra = message.mongoinfra
        ? Mongodb50_MongoInfra.toJSON(message.mongoinfra)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodb50>, I>>(
    object: I
  ): Mongodb50 {
    const message = { ...baseMongodb50 } as Mongodb50;
    message.mongod =
      object.mongod !== undefined && object.mongod !== null
        ? Mongodb50_Mongod.fromPartial(object.mongod)
        : undefined;
    message.mongocfg =
      object.mongocfg !== undefined && object.mongocfg !== null
        ? Mongodb50_MongoCfg.fromPartial(object.mongocfg)
        : undefined;
    message.mongos =
      object.mongos !== undefined && object.mongos !== null
        ? Mongodb50_Mongos.fromPartial(object.mongos)
        : undefined;
    message.mongoinfra =
      object.mongoinfra !== undefined && object.mongoinfra !== null
        ? Mongodb50_MongoInfra.fromPartial(object.mongoinfra)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb50.$type, Mongodb50);

const baseMongodb50_Mongod: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod",
};

export const Mongodb50_Mongod = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod" as const,

  encode(
    message: Mongodb50_Mongod,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.config !== undefined) {
      Mongodconfigset50.encode(
        message.config,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb50_Mongod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodb50_Mongod } as Mongodb50_Mongod;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = Mongodconfigset50.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb50_Mongod {
    const message = { ...baseMongodb50_Mongod } as Mongodb50_Mongod;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongodconfigset50.fromJSON(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: Mongodb50_Mongod): unknown {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config
        ? Mongodconfigset50.toJSON(message.config)
        : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodb50_Mongod>, I>>(
    object: I
  ): Mongodb50_Mongod {
    const message = { ...baseMongodb50_Mongod } as Mongodb50_Mongod;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongodconfigset50.fromPartial(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb50_Mongod.$type, Mongodb50_Mongod);

const baseMongodb50_MongoCfg: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg",
};

export const Mongodb50_MongoCfg = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg" as const,

  encode(
    message: Mongodb50_MongoCfg,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.config !== undefined) {
      Mongocfgconfigset50.encode(
        message.config,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb50_MongoCfg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodb50_MongoCfg } as Mongodb50_MongoCfg;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = Mongocfgconfigset50.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb50_MongoCfg {
    const message = { ...baseMongodb50_MongoCfg } as Mongodb50_MongoCfg;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongocfgconfigset50.fromJSON(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: Mongodb50_MongoCfg): unknown {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config
        ? Mongocfgconfigset50.toJSON(message.config)
        : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodb50_MongoCfg>, I>>(
    object: I
  ): Mongodb50_MongoCfg {
    const message = { ...baseMongodb50_MongoCfg } as Mongodb50_MongoCfg;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongocfgconfigset50.fromPartial(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb50_MongoCfg.$type, Mongodb50_MongoCfg);

const baseMongodb50_Mongos: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos",
};

export const Mongodb50_Mongos = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos" as const,

  encode(
    message: Mongodb50_Mongos,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.config !== undefined) {
      Mongosconfigset50.encode(
        message.config,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodb50_Mongos {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodb50_Mongos } as Mongodb50_Mongos;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = Mongosconfigset50.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mongodb50_Mongos {
    const message = { ...baseMongodb50_Mongos } as Mongodb50_Mongos;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongosconfigset50.fromJSON(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: Mongodb50_Mongos): unknown {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config
        ? Mongosconfigset50.toJSON(message.config)
        : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodb50_Mongos>, I>>(
    object: I
  ): Mongodb50_Mongos {
    const message = { ...baseMongodb50_Mongos } as Mongodb50_Mongos;
    message.config =
      object.config !== undefined && object.config !== null
        ? Mongosconfigset50.fromPartial(object.config)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb50_Mongos.$type, Mongodb50_Mongos);

const baseMongodb50_MongoInfra: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra",
};

export const Mongodb50_MongoInfra = {
  $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra" as const,

  encode(
    message: Mongodb50_MongoInfra,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.configMongos !== undefined) {
      Mongosconfigset50.encode(
        message.configMongos,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.configMongocfg !== undefined) {
      Mongocfgconfigset50.encode(
        message.configMongocfg,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongodb50_MongoInfra {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodb50_MongoInfra } as Mongodb50_MongoInfra;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.configMongos = Mongosconfigset50.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.configMongocfg = Mongocfgconfigset50.decode(
            reader,
            reader.uint32()
          );
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

  fromJSON(object: any): Mongodb50_MongoInfra {
    const message = { ...baseMongodb50_MongoInfra } as Mongodb50_MongoInfra;
    message.configMongos =
      object.configMongos !== undefined && object.configMongos !== null
        ? Mongosconfigset50.fromJSON(object.configMongos)
        : undefined;
    message.configMongocfg =
      object.configMongocfg !== undefined && object.configMongocfg !== null
        ? Mongocfgconfigset50.fromJSON(object.configMongocfg)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: Mongodb50_MongoInfra): unknown {
    const obj: any = {};
    message.configMongos !== undefined &&
      (obj.configMongos = message.configMongos
        ? Mongosconfigset50.toJSON(message.configMongos)
        : undefined);
    message.configMongocfg !== undefined &&
      (obj.configMongocfg = message.configMongocfg
        ? Mongocfgconfigset50.toJSON(message.configMongocfg)
        : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodb50_MongoInfra>, I>>(
    object: I
  ): Mongodb50_MongoInfra {
    const message = { ...baseMongodb50_MongoInfra } as Mongodb50_MongoInfra;
    message.configMongos =
      object.configMongos !== undefined && object.configMongos !== null
        ? Mongosconfigset50.fromPartial(object.configMongos)
        : undefined;
    message.configMongocfg =
      object.configMongocfg !== undefined && object.configMongocfg !== null
        ? Mongocfgconfigset50.fromPartial(object.configMongocfg)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodb50_MongoInfra.$type, Mongodb50_MongoInfra);

const baseShard: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.Shard",
  name: "",
  clusterId: "",
};

export const Shard = {
  $type: "yandex.cloud.mdb.mongodb.v1.Shard" as const,

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
  $type: "yandex.cloud.mdb.mongodb.v1.Host",
  name: "",
  clusterId: "",
  zoneId: "",
  role: 0,
  health: 0,
  subnetId: "",
  assignPublicIp: false,
  shardName: "",
  type: 0,
};

export const Host = {
  $type: "yandex.cloud.mdb.mongodb.v1.Host" as const,

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
    if (message.shardName !== "") {
      writer.uint32(82).string(message.shardName);
    }
    if (message.type !== 0) {
      writer.uint32(88).int32(message.type);
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
          message.shardName = reader.string();
          break;
        case 11:
          message.type = reader.int32() as any;
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
    message.shardName =
      object.shardName !== undefined && object.shardName !== null
        ? String(object.shardName)
        : "";
    message.type =
      object.type !== undefined && object.type !== null
        ? host_TypeFromJSON(object.type)
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
    message.shardName !== undefined && (obj.shardName = message.shardName);
    message.type !== undefined && (obj.type = host_TypeToJSON(message.type));
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
    message.shardName = object.shardName ?? "";
    message.type = object.type ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Host.$type, Host);

const baseService: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.Service",
  type: 0,
  health: 0,
};

export const Service = {
  $type: "yandex.cloud.mdb.mongodb.v1.Service" as const,

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
  $type: "yandex.cloud.mdb.mongodb.v1.Resources",
  resourcePresetId: "",
  diskSize: 0,
  diskTypeId: "",
};

export const Resources = {
  $type: "yandex.cloud.mdb.mongodb.v1.Resources" as const,

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
  $type: "yandex.cloud.mdb.mongodb.v1.Access",
  dataLens: false,
};

export const Access = {
  $type: "yandex.cloud.mdb.mongodb.v1.Access" as const,

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
