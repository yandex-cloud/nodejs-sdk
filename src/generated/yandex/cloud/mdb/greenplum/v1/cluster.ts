/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  MasterSubclusterConfig,
  SegmentSubclusterConfig,
  ConnectionPoolerConfigSet,
  BackgroundActivitiesConfig,
  Greenplumconfigset617,
  Greenplumconfigset619,
  Greenplumconfigset621,
  Greenplumconfigset622,
  GreenplumConfigSet6,
} from "../../../../../yandex/cloud/mdb/greenplum/v1/config";
import {
  MaintenanceWindow,
  MaintenanceOperation,
} from "../../../../../yandex/cloud/mdb/greenplum/v1/maintenance";
import { PXFConfigSet } from "../../../../../yandex/cloud/mdb/greenplum/v1/pxf";
import { TimeOfDay } from "../../../../../google/type/timeofday";
import { Timestamp } from "../../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.mdb.greenplum.v1";

/** A Greenplum® cluster resource. */
export interface Cluster {
  $type: "yandex.cloud.mdb.greenplum.v1.Cluster";
  /**
   * ID of the Greenplum® cluster.
   * This ID is assigned by the platform at the moment of cluster creation.
   */
  id: string;
  /** ID of the folder that the Greenplum® cluster belongs to. */
  folderId: string;
  /** Time when the cluster was created. */
  createdAt?: Date;
  /**
   * Name of the Greenplum® cluster.
   * The name is unique within the folder.
   */
  name: string;
  /** Greenplum® cluster configuration. */
  config?: GreenplumConfig;
  /** Description of the Greenplum® cluster. */
  description: string;
  /** Custom labels for the Greenplum® cluster as `key:value` pairs. Maximum 64 labels per resource. */
  labels: { [key: string]: string };
  /** Deployment environment of the Greenplum® cluster. */
  environment: Cluster_Environment;
  /** Description of monitoring systems relevant to the Greenplum® cluster. */
  monitoring: Monitoring[];
  /** Configuration of the Greenplum® master subcluster. */
  masterConfig?: MasterSubclusterConfig;
  /** Configuration of the Greenplum® segment subcluster. */
  segmentConfig?: SegmentSubclusterConfig;
  /** Number of hosts in the master subcluster. */
  masterHostCount: number;
  /** Number of hosts in the segment subcluster. */
  segmentHostCount: number;
  /** Number of segments per host. */
  segmentInHost: number;
  /** ID of the cloud network that the cluster belongs to. */
  networkId: string;
  /** Aggregated cluster health. */
  health: Cluster_Health;
  /** Current state of the cluster. */
  status: Cluster_Status;
  /** A Greenplum® cluster maintenance window. Should be defined by either one of the two options. */
  maintenanceWindow?: MaintenanceWindow;
  /** Maintenance operation planned at nearest [maintenance_window]. */
  plannedOperation?: MaintenanceOperation;
  /** User security groups. */
  securityGroupIds: string[];
  /** Owner user name. */
  userName: string;
  /** Determines whether the cluster is protected from being deleted. */
  deletionProtection: boolean;
  /** Host groups hosting VMs of the cluster. */
  hostGroupIds: string[];
  /** Greenplum® and Odyssey® configuration. */
  clusterConfig?: ClusterConfigSet;
  /** Cloud storage settings */
  cloudStorage?: CloudStorage;
}

export enum Cluster_Environment {
  ENVIRONMENT_UNSPECIFIED = 0,
  /** PRODUCTION - Stable environment with a conservative update policy: only hotfixes are applied during regular maintenance. */
  PRODUCTION = 1,
  /** PRESTABLE - Environment with more aggressive update policy: new versions are rolled out irrespective of backward compatibility. */
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
  /** HEALTH_UNKNOWN - Health of the cluster is unknown ([Host.health] for every host in the cluster is UNKNOWN). */
  HEALTH_UNKNOWN = 0,
  /** ALIVE - Cluster is working normally ([Host.health] for every host in the cluster is ALIVE). */
  ALIVE = 1,
  /** DEAD - Cluster is inoperable ([Host.health] for every host in the cluster is DEAD). */
  DEAD = 2,
  /** DEGRADED - Cluster is working below capacity ([Host.health] for at least one host in the cluster is not ALIVE). */
  DEGRADED = 3,
  /** UNBALANCED - Cluster is working below capacity ([Host.health] for at least one host in the cluster is UNBALANCED). */
  UNBALANCED = 4,
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
    case 4:
    case "UNBALANCED":
      return Cluster_Health.UNBALANCED;
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
    case Cluster_Health.UNBALANCED:
      return "UNBALANCED";
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
  /** ERROR - Cluster has encountered a problem and cannot operate. */
  ERROR = 3,
  /** UPDATING - Cluster is being updated. */
  UPDATING = 4,
  /** STOPPING - Cluster is stopping. */
  STOPPING = 5,
  /** STOPPED - Cluster has stopped. */
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
  $type: "yandex.cloud.mdb.greenplum.v1.Cluster.LabelsEntry";
  key: string;
  value: string;
}

export interface ClusterConfigSet {
  $type: "yandex.cloud.mdb.greenplum.v1.ClusterConfigSet";
  greenplumConfigSet617?: Greenplumconfigset617 | undefined;
  greenplumConfigSet619?: Greenplumconfigset619 | undefined;
  greenplumConfigSet621?: Greenplumconfigset621 | undefined;
  greenplumConfigSet622?: Greenplumconfigset622 | undefined;
  greenplumConfigSet6?: GreenplumConfigSet6 | undefined;
  /** Odyssey® pool settings. */
  pool?: ConnectionPoolerConfigSet;
  backgroundActivities?: BackgroundActivitiesConfig;
  pxfConfig?: PXFConfigSet;
}

/** Monitoring system metadata. */
export interface Monitoring {
  $type: "yandex.cloud.mdb.greenplum.v1.Monitoring";
  /** Name of the monitoring system. */
  name: string;
  /** Description of the monitoring system. */
  description: string;
  /** Link to the monitoring system charts for the Greenplum® cluster. */
  link: string;
}

export interface GreenplumConfig {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig";
  /** Version of the Greenplum® server software. */
  version: string;
  /** Time to start the daily backup, in the UTC timezone. */
  backupWindowStart?: TimeOfDay;
  /** Access policy for external services. */
  access?: Access;
  /**
   * ID of the availability zone the cluster belongs to.
   * To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request.
   */
  zoneId: string;
  /** ID of the subnet the cluster belongs to. This subnet should be a part of the cloud network the cluster belongs to (see [Cluster.network_id]). */
  subnetId: string;
  /**
   * Determines whether the cluster has a public IP address.
   *
   * After the cluster has been created, this setting cannot be changed.
   */
  assignPublicIp: boolean;
}

export interface Access {
  $type: "yandex.cloud.mdb.greenplum.v1.Access";
  /** Allows data export from the cluster to DataLens. */
  dataLens: boolean;
  /** Allows SQL queries to the cluster databases from the management console. */
  webSql: boolean;
  /** Allows access for DataTransfer. */
  dataTransfer: boolean;
}

export interface GreenplumRestoreConfig {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumRestoreConfig";
  /** Time to start the daily backup, in the UTC timezone. */
  backupWindowStart?: TimeOfDay;
  /** Access policy for external services. */
  access?: Access;
  /**
   * ID of the availability zone where the host resides.
   *
   * To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request.
   */
  zoneId: string;
  /**
   * ID of the subnet that the host should belong to. This subnet should be a part of the network that the cluster belongs to.
   * The ID of the network is set in the field [Cluster.network_id].
   */
  subnetId: string;
  /**
   * Determines whether the host should get a public IP address on creation.
   *
   * After a host has been created, this setting cannot be changed.
   *
   * To remove an assigned public IP, or to assign a public IP to a host without one, recreate the host with [assign_public_ip] set as needed.
   *
   * Possible values:
   * * `false` - do not assign a public IP to the master host.
   * * `true` - assign a public IP to the master host.
   */
  assignPublicIp: boolean;
}

export interface RestoreResources {
  $type: "yandex.cloud.mdb.greenplum.v1.RestoreResources";
  /** ID of the preset for computational resources available to a host (CPU, memory, etc.). */
  resourcePresetId: string;
  /** Volume of the storage available to a host. */
  diskSize: number;
}

/** Cloud Storage Settings */
export interface CloudStorage {
  $type: "yandex.cloud.mdb.greenplum.v1.CloudStorage";
  /** enable Cloud Storage for cluster */
  enable: boolean;
}

const baseCluster: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.Cluster",
  id: "",
  folderId: "",
  name: "",
  description: "",
  environment: 0,
  masterHostCount: 0,
  segmentHostCount: 0,
  segmentInHost: 0,
  networkId: "",
  health: 0,
  status: 0,
  securityGroupIds: "",
  userName: "",
  deletionProtection: false,
  hostGroupIds: "",
};

export const Cluster = {
  $type: "yandex.cloud.mdb.greenplum.v1.Cluster" as const,

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
    if (message.config !== undefined) {
      GreenplumConfig.encode(message.config, writer.uint32(42).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Cluster_LabelsEntry.encode(
        {
          $type: "yandex.cloud.mdb.greenplum.v1.Cluster.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(58).fork()
      ).ldelim();
    });
    if (message.environment !== 0) {
      writer.uint32(64).int32(message.environment);
    }
    for (const v of message.monitoring) {
      Monitoring.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.masterConfig !== undefined) {
      MasterSubclusterConfig.encode(
        message.masterConfig,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.segmentConfig !== undefined) {
      SegmentSubclusterConfig.encode(
        message.segmentConfig,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.masterHostCount !== 0) {
      writer.uint32(96).int64(message.masterHostCount);
    }
    if (message.segmentHostCount !== 0) {
      writer.uint32(104).int64(message.segmentHostCount);
    }
    if (message.segmentInHost !== 0) {
      writer.uint32(112).int64(message.segmentInHost);
    }
    if (message.networkId !== "") {
      writer.uint32(122).string(message.networkId);
    }
    if (message.health !== 0) {
      writer.uint32(128).int32(message.health);
    }
    if (message.status !== 0) {
      writer.uint32(136).int32(message.status);
    }
    if (message.maintenanceWindow !== undefined) {
      MaintenanceWindow.encode(
        message.maintenanceWindow,
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.plannedOperation !== undefined) {
      MaintenanceOperation.encode(
        message.plannedOperation,
        writer.uint32(154).fork()
      ).ldelim();
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(162).string(v!);
    }
    if (message.userName !== "") {
      writer.uint32(170).string(message.userName);
    }
    if (message.deletionProtection === true) {
      writer.uint32(176).bool(message.deletionProtection);
    }
    for (const v of message.hostGroupIds) {
      writer.uint32(186).string(v!);
    }
    if (message.clusterConfig !== undefined) {
      ClusterConfigSet.encode(
        message.clusterConfig,
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.cloudStorage !== undefined) {
      CloudStorage.encode(
        message.cloudStorage,
        writer.uint32(210).fork()
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
          message.config = GreenplumConfig.decode(reader, reader.uint32());
          break;
        case 6:
          message.description = reader.string();
          break;
        case 7:
          const entry7 = Cluster_LabelsEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.labels[entry7.key] = entry7.value;
          }
          break;
        case 8:
          message.environment = reader.int32() as any;
          break;
        case 9:
          message.monitoring.push(Monitoring.decode(reader, reader.uint32()));
          break;
        case 10:
          message.masterConfig = MasterSubclusterConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.segmentConfig = SegmentSubclusterConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.masterHostCount = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.segmentHostCount = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.segmentInHost = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.networkId = reader.string();
          break;
        case 16:
          message.health = reader.int32() as any;
          break;
        case 17:
          message.status = reader.int32() as any;
          break;
        case 18:
          message.maintenanceWindow = MaintenanceWindow.decode(
            reader,
            reader.uint32()
          );
          break;
        case 19:
          message.plannedOperation = MaintenanceOperation.decode(
            reader,
            reader.uint32()
          );
          break;
        case 20:
          message.securityGroupIds.push(reader.string());
          break;
        case 21:
          message.userName = reader.string();
          break;
        case 22:
          message.deletionProtection = reader.bool();
          break;
        case 23:
          message.hostGroupIds.push(reader.string());
          break;
        case 24:
          message.clusterConfig = ClusterConfigSet.decode(
            reader,
            reader.uint32()
          );
          break;
        case 26:
          message.cloudStorage = CloudStorage.decode(reader, reader.uint32());
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
    message.config =
      object.config !== undefined && object.config !== null
        ? GreenplumConfig.fromJSON(object.config)
        : undefined;
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
    message.masterConfig =
      object.masterConfig !== undefined && object.masterConfig !== null
        ? MasterSubclusterConfig.fromJSON(object.masterConfig)
        : undefined;
    message.segmentConfig =
      object.segmentConfig !== undefined && object.segmentConfig !== null
        ? SegmentSubclusterConfig.fromJSON(object.segmentConfig)
        : undefined;
    message.masterHostCount =
      object.masterHostCount !== undefined && object.masterHostCount !== null
        ? Number(object.masterHostCount)
        : 0;
    message.segmentHostCount =
      object.segmentHostCount !== undefined && object.segmentHostCount !== null
        ? Number(object.segmentHostCount)
        : 0;
    message.segmentInHost =
      object.segmentInHost !== undefined && object.segmentInHost !== null
        ? Number(object.segmentInHost)
        : 0;
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
    message.userName =
      object.userName !== undefined && object.userName !== null
        ? String(object.userName)
        : "";
    message.deletionProtection =
      object.deletionProtection !== undefined &&
      object.deletionProtection !== null
        ? Boolean(object.deletionProtection)
        : false;
    message.hostGroupIds = (object.hostGroupIds ?? []).map((e: any) =>
      String(e)
    );
    message.clusterConfig =
      object.clusterConfig !== undefined && object.clusterConfig !== null
        ? ClusterConfigSet.fromJSON(object.clusterConfig)
        : undefined;
    message.cloudStorage =
      object.cloudStorage !== undefined && object.cloudStorage !== null
        ? CloudStorage.fromJSON(object.cloudStorage)
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
    message.config !== undefined &&
      (obj.config = message.config
        ? GreenplumConfig.toJSON(message.config)
        : undefined);
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
    message.masterConfig !== undefined &&
      (obj.masterConfig = message.masterConfig
        ? MasterSubclusterConfig.toJSON(message.masterConfig)
        : undefined);
    message.segmentConfig !== undefined &&
      (obj.segmentConfig = message.segmentConfig
        ? SegmentSubclusterConfig.toJSON(message.segmentConfig)
        : undefined);
    message.masterHostCount !== undefined &&
      (obj.masterHostCount = Math.round(message.masterHostCount));
    message.segmentHostCount !== undefined &&
      (obj.segmentHostCount = Math.round(message.segmentHostCount));
    message.segmentInHost !== undefined &&
      (obj.segmentInHost = Math.round(message.segmentInHost));
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
    message.userName !== undefined && (obj.userName = message.userName);
    message.deletionProtection !== undefined &&
      (obj.deletionProtection = message.deletionProtection);
    if (message.hostGroupIds) {
      obj.hostGroupIds = message.hostGroupIds.map((e) => e);
    } else {
      obj.hostGroupIds = [];
    }
    message.clusterConfig !== undefined &&
      (obj.clusterConfig = message.clusterConfig
        ? ClusterConfigSet.toJSON(message.clusterConfig)
        : undefined);
    message.cloudStorage !== undefined &&
      (obj.cloudStorage = message.cloudStorage
        ? CloudStorage.toJSON(message.cloudStorage)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Cluster>, I>>(object: I): Cluster {
    const message = { ...baseCluster } as Cluster;
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.name = object.name ?? "";
    message.config =
      object.config !== undefined && object.config !== null
        ? GreenplumConfig.fromPartial(object.config)
        : undefined;
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
    message.masterConfig =
      object.masterConfig !== undefined && object.masterConfig !== null
        ? MasterSubclusterConfig.fromPartial(object.masterConfig)
        : undefined;
    message.segmentConfig =
      object.segmentConfig !== undefined && object.segmentConfig !== null
        ? SegmentSubclusterConfig.fromPartial(object.segmentConfig)
        : undefined;
    message.masterHostCount = object.masterHostCount ?? 0;
    message.segmentHostCount = object.segmentHostCount ?? 0;
    message.segmentInHost = object.segmentInHost ?? 0;
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
    message.userName = object.userName ?? "";
    message.deletionProtection = object.deletionProtection ?? false;
    message.hostGroupIds = object.hostGroupIds?.map((e) => e) || [];
    message.clusterConfig =
      object.clusterConfig !== undefined && object.clusterConfig !== null
        ? ClusterConfigSet.fromPartial(object.clusterConfig)
        : undefined;
    message.cloudStorage =
      object.cloudStorage !== undefined && object.cloudStorage !== null
        ? CloudStorage.fromPartial(object.cloudStorage)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Cluster.$type, Cluster);

const baseCluster_LabelsEntry: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.Cluster.LabelsEntry",
  key: "",
  value: "",
};

export const Cluster_LabelsEntry = {
  $type: "yandex.cloud.mdb.greenplum.v1.Cluster.LabelsEntry" as const,

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

const baseClusterConfigSet: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.ClusterConfigSet",
};

export const ClusterConfigSet = {
  $type: "yandex.cloud.mdb.greenplum.v1.ClusterConfigSet" as const,

  encode(
    message: ClusterConfigSet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.greenplumConfigSet617 !== undefined) {
      Greenplumconfigset617.encode(
        message.greenplumConfigSet617,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.greenplumConfigSet619 !== undefined) {
      Greenplumconfigset619.encode(
        message.greenplumConfigSet619,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.greenplumConfigSet621 !== undefined) {
      Greenplumconfigset621.encode(
        message.greenplumConfigSet621,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.greenplumConfigSet622 !== undefined) {
      Greenplumconfigset622.encode(
        message.greenplumConfigSet622,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.greenplumConfigSet6 !== undefined) {
      GreenplumConfigSet6.encode(
        message.greenplumConfigSet6,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.pool !== undefined) {
      ConnectionPoolerConfigSet.encode(
        message.pool,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.backgroundActivities !== undefined) {
      BackgroundActivitiesConfig.encode(
        message.backgroundActivities,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.pxfConfig !== undefined) {
      PXFConfigSet.encode(message.pxfConfig, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClusterConfigSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClusterConfigSet } as ClusterConfigSet;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.greenplumConfigSet617 = Greenplumconfigset617.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.greenplumConfigSet619 = Greenplumconfigset619.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.greenplumConfigSet621 = Greenplumconfigset621.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.greenplumConfigSet622 = Greenplumconfigset622.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.greenplumConfigSet6 = GreenplumConfigSet6.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.pool = ConnectionPoolerConfigSet.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.backgroundActivities = BackgroundActivitiesConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.pxfConfig = PXFConfigSet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClusterConfigSet {
    const message = { ...baseClusterConfigSet } as ClusterConfigSet;
    message.greenplumConfigSet617 =
      object.greenplumConfigSet_6_17 !== undefined &&
      object.greenplumConfigSet_6_17 !== null
        ? Greenplumconfigset617.fromJSON(object.greenplumConfigSet_6_17)
        : undefined;
    message.greenplumConfigSet619 =
      object.greenplumConfigSet_6_19 !== undefined &&
      object.greenplumConfigSet_6_19 !== null
        ? Greenplumconfigset619.fromJSON(object.greenplumConfigSet_6_19)
        : undefined;
    message.greenplumConfigSet621 =
      object.greenplumConfigSet_6_21 !== undefined &&
      object.greenplumConfigSet_6_21 !== null
        ? Greenplumconfigset621.fromJSON(object.greenplumConfigSet_6_21)
        : undefined;
    message.greenplumConfigSet622 =
      object.greenplumConfigSet_6_22 !== undefined &&
      object.greenplumConfigSet_6_22 !== null
        ? Greenplumconfigset622.fromJSON(object.greenplumConfigSet_6_22)
        : undefined;
    message.greenplumConfigSet6 =
      object.greenplumConfigSet_6 !== undefined &&
      object.greenplumConfigSet_6 !== null
        ? GreenplumConfigSet6.fromJSON(object.greenplumConfigSet_6)
        : undefined;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? ConnectionPoolerConfigSet.fromJSON(object.pool)
        : undefined;
    message.backgroundActivities =
      object.backgroundActivities !== undefined &&
      object.backgroundActivities !== null
        ? BackgroundActivitiesConfig.fromJSON(object.backgroundActivities)
        : undefined;
    message.pxfConfig =
      object.pxfConfig !== undefined && object.pxfConfig !== null
        ? PXFConfigSet.fromJSON(object.pxfConfig)
        : undefined;
    return message;
  },

  toJSON(message: ClusterConfigSet): unknown {
    const obj: any = {};
    message.greenplumConfigSet617 !== undefined &&
      (obj.greenplumConfigSet_6_17 = message.greenplumConfigSet617
        ? Greenplumconfigset617.toJSON(message.greenplumConfigSet617)
        : undefined);
    message.greenplumConfigSet619 !== undefined &&
      (obj.greenplumConfigSet_6_19 = message.greenplumConfigSet619
        ? Greenplumconfigset619.toJSON(message.greenplumConfigSet619)
        : undefined);
    message.greenplumConfigSet621 !== undefined &&
      (obj.greenplumConfigSet_6_21 = message.greenplumConfigSet621
        ? Greenplumconfigset621.toJSON(message.greenplumConfigSet621)
        : undefined);
    message.greenplumConfigSet622 !== undefined &&
      (obj.greenplumConfigSet_6_22 = message.greenplumConfigSet622
        ? Greenplumconfigset622.toJSON(message.greenplumConfigSet622)
        : undefined);
    message.greenplumConfigSet6 !== undefined &&
      (obj.greenplumConfigSet_6 = message.greenplumConfigSet6
        ? GreenplumConfigSet6.toJSON(message.greenplumConfigSet6)
        : undefined);
    message.pool !== undefined &&
      (obj.pool = message.pool
        ? ConnectionPoolerConfigSet.toJSON(message.pool)
        : undefined);
    message.backgroundActivities !== undefined &&
      (obj.backgroundActivities = message.backgroundActivities
        ? BackgroundActivitiesConfig.toJSON(message.backgroundActivities)
        : undefined);
    message.pxfConfig !== undefined &&
      (obj.pxfConfig = message.pxfConfig
        ? PXFConfigSet.toJSON(message.pxfConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClusterConfigSet>, I>>(
    object: I
  ): ClusterConfigSet {
    const message = { ...baseClusterConfigSet } as ClusterConfigSet;
    message.greenplumConfigSet617 =
      object.greenplumConfigSet617 !== undefined &&
      object.greenplumConfigSet617 !== null
        ? Greenplumconfigset617.fromPartial(object.greenplumConfigSet617)
        : undefined;
    message.greenplumConfigSet619 =
      object.greenplumConfigSet619 !== undefined &&
      object.greenplumConfigSet619 !== null
        ? Greenplumconfigset619.fromPartial(object.greenplumConfigSet619)
        : undefined;
    message.greenplumConfigSet621 =
      object.greenplumConfigSet621 !== undefined &&
      object.greenplumConfigSet621 !== null
        ? Greenplumconfigset621.fromPartial(object.greenplumConfigSet621)
        : undefined;
    message.greenplumConfigSet622 =
      object.greenplumConfigSet622 !== undefined &&
      object.greenplumConfigSet622 !== null
        ? Greenplumconfigset622.fromPartial(object.greenplumConfigSet622)
        : undefined;
    message.greenplumConfigSet6 =
      object.greenplumConfigSet6 !== undefined &&
      object.greenplumConfigSet6 !== null
        ? GreenplumConfigSet6.fromPartial(object.greenplumConfigSet6)
        : undefined;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? ConnectionPoolerConfigSet.fromPartial(object.pool)
        : undefined;
    message.backgroundActivities =
      object.backgroundActivities !== undefined &&
      object.backgroundActivities !== null
        ? BackgroundActivitiesConfig.fromPartial(object.backgroundActivities)
        : undefined;
    message.pxfConfig =
      object.pxfConfig !== undefined && object.pxfConfig !== null
        ? PXFConfigSet.fromPartial(object.pxfConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ClusterConfigSet.$type, ClusterConfigSet);

const baseMonitoring: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.Monitoring",
  name: "",
  description: "",
  link: "",
};

export const Monitoring = {
  $type: "yandex.cloud.mdb.greenplum.v1.Monitoring" as const,

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

const baseGreenplumConfig: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig",
  version: "",
  zoneId: "",
  subnetId: "",
  assignPublicIp: false,
};

export const GreenplumConfig = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig" as const,

  encode(
    message: GreenplumConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.backupWindowStart !== undefined) {
      TimeOfDay.encode(
        message.backupWindowStart,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.access !== undefined) {
      Access.encode(message.access, writer.uint32(26).fork()).ldelim();
    }
    if (message.zoneId !== "") {
      writer.uint32(34).string(message.zoneId);
    }
    if (message.subnetId !== "") {
      writer.uint32(42).string(message.subnetId);
    }
    if (message.assignPublicIp === true) {
      writer.uint32(48).bool(message.assignPublicIp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGreenplumConfig } as GreenplumConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.backupWindowStart = TimeOfDay.decode(reader, reader.uint32());
          break;
        case 3:
          message.access = Access.decode(reader, reader.uint32());
          break;
        case 4:
          message.zoneId = reader.string();
          break;
        case 5:
          message.subnetId = reader.string();
          break;
        case 6:
          message.assignPublicIp = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GreenplumConfig {
    const message = { ...baseGreenplumConfig } as GreenplumConfig;
    message.version =
      object.version !== undefined && object.version !== null
        ? String(object.version)
        : "";
    message.backupWindowStart =
      object.backupWindowStart !== undefined &&
      object.backupWindowStart !== null
        ? TimeOfDay.fromJSON(object.backupWindowStart)
        : undefined;
    message.access =
      object.access !== undefined && object.access !== null
        ? Access.fromJSON(object.access)
        : undefined;
    message.zoneId =
      object.zoneId !== undefined && object.zoneId !== null
        ? String(object.zoneId)
        : "";
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    message.assignPublicIp =
      object.assignPublicIp !== undefined && object.assignPublicIp !== null
        ? Boolean(object.assignPublicIp)
        : false;
    return message;
  },

  toJSON(message: GreenplumConfig): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.backupWindowStart !== undefined &&
      (obj.backupWindowStart = message.backupWindowStart
        ? TimeOfDay.toJSON(message.backupWindowStart)
        : undefined);
    message.access !== undefined &&
      (obj.access = message.access ? Access.toJSON(message.access) : undefined);
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    message.assignPublicIp !== undefined &&
      (obj.assignPublicIp = message.assignPublicIp);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GreenplumConfig>, I>>(
    object: I
  ): GreenplumConfig {
    const message = { ...baseGreenplumConfig } as GreenplumConfig;
    message.version = object.version ?? "";
    message.backupWindowStart =
      object.backupWindowStart !== undefined &&
      object.backupWindowStart !== null
        ? TimeOfDay.fromPartial(object.backupWindowStart)
        : undefined;
    message.access =
      object.access !== undefined && object.access !== null
        ? Access.fromPartial(object.access)
        : undefined;
    message.zoneId = object.zoneId ?? "";
    message.subnetId = object.subnetId ?? "";
    message.assignPublicIp = object.assignPublicIp ?? false;
    return message;
  },
};

messageTypeRegistry.set(GreenplumConfig.$type, GreenplumConfig);

const baseAccess: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.Access",
  dataLens: false,
  webSql: false,
  dataTransfer: false,
};

export const Access = {
  $type: "yandex.cloud.mdb.greenplum.v1.Access" as const,

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

const baseGreenplumRestoreConfig: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumRestoreConfig",
  zoneId: "",
  subnetId: "",
  assignPublicIp: false,
};

export const GreenplumRestoreConfig = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumRestoreConfig" as const,

  encode(
    message: GreenplumRestoreConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.backupWindowStart !== undefined) {
      TimeOfDay.encode(
        message.backupWindowStart,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.access !== undefined) {
      Access.encode(message.access, writer.uint32(18).fork()).ldelim();
    }
    if (message.zoneId !== "") {
      writer.uint32(26).string(message.zoneId);
    }
    if (message.subnetId !== "") {
      writer.uint32(34).string(message.subnetId);
    }
    if (message.assignPublicIp === true) {
      writer.uint32(40).bool(message.assignPublicIp);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GreenplumRestoreConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGreenplumRestoreConfig } as GreenplumRestoreConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backupWindowStart = TimeOfDay.decode(reader, reader.uint32());
          break;
        case 2:
          message.access = Access.decode(reader, reader.uint32());
          break;
        case 3:
          message.zoneId = reader.string();
          break;
        case 4:
          message.subnetId = reader.string();
          break;
        case 5:
          message.assignPublicIp = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GreenplumRestoreConfig {
    const message = { ...baseGreenplumRestoreConfig } as GreenplumRestoreConfig;
    message.backupWindowStart =
      object.backupWindowStart !== undefined &&
      object.backupWindowStart !== null
        ? TimeOfDay.fromJSON(object.backupWindowStart)
        : undefined;
    message.access =
      object.access !== undefined && object.access !== null
        ? Access.fromJSON(object.access)
        : undefined;
    message.zoneId =
      object.zoneId !== undefined && object.zoneId !== null
        ? String(object.zoneId)
        : "";
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    message.assignPublicIp =
      object.assignPublicIp !== undefined && object.assignPublicIp !== null
        ? Boolean(object.assignPublicIp)
        : false;
    return message;
  },

  toJSON(message: GreenplumRestoreConfig): unknown {
    const obj: any = {};
    message.backupWindowStart !== undefined &&
      (obj.backupWindowStart = message.backupWindowStart
        ? TimeOfDay.toJSON(message.backupWindowStart)
        : undefined);
    message.access !== undefined &&
      (obj.access = message.access ? Access.toJSON(message.access) : undefined);
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    message.assignPublicIp !== undefined &&
      (obj.assignPublicIp = message.assignPublicIp);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GreenplumRestoreConfig>, I>>(
    object: I
  ): GreenplumRestoreConfig {
    const message = { ...baseGreenplumRestoreConfig } as GreenplumRestoreConfig;
    message.backupWindowStart =
      object.backupWindowStart !== undefined &&
      object.backupWindowStart !== null
        ? TimeOfDay.fromPartial(object.backupWindowStart)
        : undefined;
    message.access =
      object.access !== undefined && object.access !== null
        ? Access.fromPartial(object.access)
        : undefined;
    message.zoneId = object.zoneId ?? "";
    message.subnetId = object.subnetId ?? "";
    message.assignPublicIp = object.assignPublicIp ?? false;
    return message;
  },
};

messageTypeRegistry.set(GreenplumRestoreConfig.$type, GreenplumRestoreConfig);

const baseRestoreResources: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.RestoreResources",
  resourcePresetId: "",
  diskSize: 0,
};

export const RestoreResources = {
  $type: "yandex.cloud.mdb.greenplum.v1.RestoreResources" as const,

  encode(
    message: RestoreResources,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resourcePresetId !== "") {
      writer.uint32(10).string(message.resourcePresetId);
    }
    if (message.diskSize !== 0) {
      writer.uint32(16).int64(message.diskSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestoreResources {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRestoreResources } as RestoreResources;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourcePresetId = reader.string();
          break;
        case 2:
          message.diskSize = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RestoreResources {
    const message = { ...baseRestoreResources } as RestoreResources;
    message.resourcePresetId =
      object.resourcePresetId !== undefined && object.resourcePresetId !== null
        ? String(object.resourcePresetId)
        : "";
    message.diskSize =
      object.diskSize !== undefined && object.diskSize !== null
        ? Number(object.diskSize)
        : 0;
    return message;
  },

  toJSON(message: RestoreResources): unknown {
    const obj: any = {};
    message.resourcePresetId !== undefined &&
      (obj.resourcePresetId = message.resourcePresetId);
    message.diskSize !== undefined &&
      (obj.diskSize = Math.round(message.diskSize));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RestoreResources>, I>>(
    object: I
  ): RestoreResources {
    const message = { ...baseRestoreResources } as RestoreResources;
    message.resourcePresetId = object.resourcePresetId ?? "";
    message.diskSize = object.diskSize ?? 0;
    return message;
  },
};

messageTypeRegistry.set(RestoreResources.$type, RestoreResources);

const baseCloudStorage: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.CloudStorage",
  enable: false,
};

export const CloudStorage = {
  $type: "yandex.cloud.mdb.greenplum.v1.CloudStorage" as const,

  encode(
    message: CloudStorage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enable === true) {
      writer.uint32(8).bool(message.enable);
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
          message.enable = reader.bool();
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
    message.enable =
      object.enable !== undefined && object.enable !== null
        ? Boolean(object.enable)
        : false;
    return message;
  },

  toJSON(message: CloudStorage): unknown {
    const obj: any = {};
    message.enable !== undefined && (obj.enable = message.enable);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CloudStorage>, I>>(
    object: I
  ): CloudStorage {
    const message = { ...baseCloudStorage } as CloudStorage;
    message.enable = object.enable ?? false;
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
