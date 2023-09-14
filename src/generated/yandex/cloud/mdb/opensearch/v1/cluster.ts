/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  MaintenanceWindow,
  MaintenanceOperation,
} from "../../../../../yandex/cloud/mdb/opensearch/v1/maintenance";
import { Timestamp } from "../../../../../google/protobuf/timestamp";
import { OpenSearchConfigSet2 } from "../../../../../yandex/cloud/mdb/opensearch/v1/config/opensearch";

export const protobufPackage = "yandex.cloud.mdb.opensearch.v1";

/** An OpenSearch cluster resource. */
export interface Cluster {
  $type: "yandex.cloud.mdb.opensearch.v1.Cluster";
  /**
   * ID of the OpenSearch cluster.
   * This ID is assigned by the platform at the moment of cluster creation.
   */
  id: string;
  /** ID of the folder that the OpenSearch cluster belongs to. */
  folderId: string;
  /** Time when the cluster was created. */
  createdAt?: Date;
  /**
   * Name of the OpenSearch cluster.
   * The name is unique within the folder. 1-63 characters long.
   */
  name: string;
  /** Description of the OpenSearch cluster. 0-256 characters long. */
  description: string;
  /**
   * Custom labels for the OpenSearch cluster as `key:value` pairs.
   * Maximum 64 labels per resource.
   */
  labels: { [key: string]: string };
  /** Deployment environment of the OpenSearch cluster. */
  environment: Cluster_Environment;
  /** Description of monitoring systems relevant to the OpenSearch cluster. */
  monitoring: Monitoring[];
  /** Configuration of the OpenSearch cluster. */
  config?: ClusterConfig;
  /** ID of the cloud network that the cluster belongs to. */
  networkId: string;
  /** Aggregated cluster health. */
  health: Cluster_Health;
  /** Current state of the cluster. */
  status: Cluster_Status;
  /** User security groups. */
  securityGroupIds: string[];
  /** ID of the service account used to access Object Storage. */
  serviceAccountId: string;
  /** Determines whether the cluster is protected from being deleted. */
  deletionProtection: boolean;
  /** Cluster maintenance window. Should be defined by either one of the two options. */
  maintenanceWindow?: MaintenanceWindow;
  /** Maintenance operation planned at nearest [maintenance_window]. */
  plannedOperation?: MaintenanceOperation;
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
  /** HEALTH_UNKNOWN - Health of the cluster is unknown ([Host.health] for every host in the cluster is UNKNOWN). */
  HEALTH_UNKNOWN = 0,
  /** ALIVE - Cluster is working normally ([Host.health] for every host in the cluster is ALIVE). */
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

/** Current state of the cluster. */
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
  $type: "yandex.cloud.mdb.opensearch.v1.Cluster.LabelsEntry";
  key: string;
  value: string;
}

/** Monitoring system metadata. */
export interface Monitoring {
  $type: "yandex.cloud.mdb.opensearch.v1.Monitoring";
  /** Name of the monitoring system. */
  name: string;
  /** Description of the monitoring system. */
  description: string;
  /** Link to the monitoring system charts for the OpenSearch cluster. */
  link: string;
}

/** The OpenSearch cluster configuration. */
export interface ClusterConfig {
  $type: "yandex.cloud.mdb.opensearch.v1.ClusterConfig";
  /** Version of the OpenSearch server software. */
  version: string;
  /** OpenSearch configuration. */
  opensearch?: OpenSearch;
  /** Dashboards configuration. */
  dashboards?: Dashboards;
  /** Access policy for external services. */
  access?: Access;
}

/** The OpenSearch host group type configuration. */
export interface OpenSearch {
  $type: "yandex.cloud.mdb.opensearch.v1.OpenSearch";
  /** Names of the cluster plugins. */
  plugins: string[];
  /** Host groups of the OpenSearch type. */
  nodeGroups: OpenSearch_NodeGroup[];
  opensearchConfigSet2?: OpenSearchConfigSet2 | undefined;
}

export enum OpenSearch_GroupRole {
  GROUP_ROLE_UNSPECIFIED = 0,
  DATA = 1,
  MANAGER = 2,
  UNRECOGNIZED = -1,
}

export function openSearch_GroupRoleFromJSON(
  object: any
): OpenSearch_GroupRole {
  switch (object) {
    case 0:
    case "GROUP_ROLE_UNSPECIFIED":
      return OpenSearch_GroupRole.GROUP_ROLE_UNSPECIFIED;
    case 1:
    case "DATA":
      return OpenSearch_GroupRole.DATA;
    case 2:
    case "MANAGER":
      return OpenSearch_GroupRole.MANAGER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OpenSearch_GroupRole.UNRECOGNIZED;
  }
}

export function openSearch_GroupRoleToJSON(
  object: OpenSearch_GroupRole
): string {
  switch (object) {
    case OpenSearch_GroupRole.GROUP_ROLE_UNSPECIFIED:
      return "GROUP_ROLE_UNSPECIFIED";
    case OpenSearch_GroupRole.DATA:
      return "DATA";
    case OpenSearch_GroupRole.MANAGER:
      return "MANAGER";
    default:
      return "UNKNOWN";
  }
}

/** Configuration of the host group. */
export interface OpenSearch_NodeGroup {
  $type: "yandex.cloud.mdb.opensearch.v1.OpenSearch.NodeGroup";
  /** Name of the group. Must be 1-63 characters long. */
  name: string;
  /** Resources allocated to the hosts. */
  resources?: Resources;
  /** Number of hosts in the group. */
  hostsCount: number;
  /** IDs of the availability zones the hosts belong to. */
  zoneIds: string[];
  /** IDs of the subnets that the hosts belong to. */
  subnetIds: string[];
  /** Determines whether a public IP is assigned to the hosts in the group. */
  assignPublicIp: boolean;
  /** Roles of the host group. */
  roles: OpenSearch_GroupRole[];
}

/** The Dashboards host group type configuration. */
export interface Dashboards {
  $type: "yandex.cloud.mdb.opensearch.v1.Dashboards";
  /** Host groups of the Dashboards type. */
  nodeGroups: Dashboards_NodeGroup[];
}

export interface Dashboards_NodeGroup {
  $type: "yandex.cloud.mdb.opensearch.v1.Dashboards.NodeGroup";
  /** Name of the group. 1-63 characters long. */
  name: string;
  /** Resources allocated to the hosts. */
  resources?: Resources;
  /** Number of hosts in the group. */
  hostsCount: number;
  /** IDs of the availability zones the hosts belong to. */
  zoneIds: string[];
  /** IDs of the subnets that the hosts belong to. */
  subnetIds: string[];
  /** Determines whether a public IP is assigned to the hosts in the group. */
  assignPublicIp: boolean;
}

/** A list of computational resources allocated to a host. */
export interface Resources {
  $type: "yandex.cloud.mdb.opensearch.v1.Resources";
  /** ID of the preset for computational resources allocated to a host. */
  resourcePresetId: string;
  /** Volume of the storage used by the host, in bytes. */
  diskSize: number;
  /** Type of the storage used by the host: `network-hdd`, `network-ssd` or `local-ssd`. */
  diskTypeId: string;
}

/** An OpenSearch cluster host resource. */
export interface Host {
  $type: "yandex.cloud.mdb.opensearch.v1.Host";
  /**
   * Required. Name of the OpenSearch host.
   *
   * The host name is assigned by the platform at creation time and cannot be changed.
   *
   * The name is unique across all MDB hosts that exist on the platform, as it defines the FQDN of the host.
   */
  name: string;
  /** Required. ID of the OpenSearch cluster. The ID is assigned by the platform at creation time. */
  clusterId: string;
  /** ID of the availability zone the OpenSearch host belongs to. */
  zoneId: string;
  /** Resources allocated to the OpenSearch host. */
  resources?: Resources;
  /** Type of the host. */
  type: Host_Type;
  /** Status code of the aggregated health of the host. */
  health: Host_Health;
  /** ID of the subnet that the host belongs to. */
  subnetId: string;
  /** Determines whether a public IP is assigned to the host. */
  assignPublicIp: boolean;
  /** Resources used by the host. */
  system?: Host_SystemMetrics;
  /** Name of the host group that the host belongs to. */
  nodeGroup: string;
  /** Roles of the host. */
  roles: OpenSearch_GroupRole[];
}

export enum Host_Health {
  /** UNKNOWN - Health of the host is unknown. */
  UNKNOWN = 0,
  /** ALIVE - The host is performing all its functions normally. */
  ALIVE = 1,
  /** DEAD - The host is inoperable and cannot perform any of its essential functions. */
  DEAD = 2,
  /** DEGRADED - The host is working below capacity or not fully functional. */
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

export enum Host_Type {
  /** TYPE_UNSPECIFIED - The type is not specified. */
  TYPE_UNSPECIFIED = 0,
  /** OPENSEARCH - An OpenSearch type host. */
  OPENSEARCH = 1,
  /** DASHBOARDS - A Dashboards type host. */
  DASHBOARDS = 2,
  UNRECOGNIZED = -1,
}

export function host_TypeFromJSON(object: any): Host_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Host_Type.TYPE_UNSPECIFIED;
    case 1:
    case "OPENSEARCH":
      return Host_Type.OPENSEARCH;
    case 2:
    case "DASHBOARDS":
      return Host_Type.DASHBOARDS;
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
    case Host_Type.OPENSEARCH:
      return "OPENSEARCH";
    case Host_Type.DASHBOARDS:
      return "DASHBOARDS";
    default:
      return "UNKNOWN";
  }
}

/** CPU usage of the host. */
export interface Host_CPUMetric {
  $type: "yandex.cloud.mdb.opensearch.v1.Host.CPUMetric";
  /** Time of the record. */
  timestamp: number;
  /** Percentage of the CPU used. */
  used: number;
}

/** RAM usage of the host. */
export interface Host_MemoryMetric {
  $type: "yandex.cloud.mdb.opensearch.v1.Host.MemoryMetric";
  /** Time of the record. */
  timestamp: number;
  /** The amount of RAM used, in bytes. */
  used: number;
  /** Total amount of RAM allocated to the host. */
  total: number;
}

/** Disk usage of the host. */
export interface Host_DiskMetric {
  $type: "yandex.cloud.mdb.opensearch.v1.Host.DiskMetric";
  /** Time of the record. */
  timestamp: number;
  /** The amount of disk space used, in bytes. */
  used: number;
  /** Total amount of disk space allocated to the host. */
  total: number;
}

/** Resources used by the host. */
export interface Host_SystemMetrics {
  $type: "yandex.cloud.mdb.opensearch.v1.Host.SystemMetrics";
  /** CPU usage of the host. */
  cpu?: Host_CPUMetric;
  /** RAM usage of the host. */
  memory?: Host_MemoryMetric;
  /** Disk usage of the host. */
  disk?: Host_DiskMetric;
}

/** Access policy for external services. */
export interface Access {
  $type: "yandex.cloud.mdb.opensearch.v1.Access";
  /** Determines whether the access to Data Transfer is allowed. */
  dataTransfer: boolean;
  /** Determines whether the access to Serverless is allowed. */
  serverless: boolean;
}

const baseCluster: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.Cluster",
  id: "",
  folderId: "",
  name: "",
  description: "",
  environment: 0,
  networkId: "",
  health: 0,
  status: 0,
  securityGroupIds: "",
  serviceAccountId: "",
  deletionProtection: false,
};

export const Cluster = {
  $type: "yandex.cloud.mdb.opensearch.v1.Cluster" as const,

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
          $type: "yandex.cloud.mdb.opensearch.v1.Cluster.LabelsEntry",
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
    for (const v of message.securityGroupIds) {
      writer.uint32(106).string(v!);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(114).string(message.serviceAccountId);
    }
    if (message.deletionProtection === true) {
      writer.uint32(120).bool(message.deletionProtection);
    }
    if (message.maintenanceWindow !== undefined) {
      MaintenanceWindow.encode(
        message.maintenanceWindow,
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.plannedOperation !== undefined) {
      MaintenanceOperation.encode(
        message.plannedOperation,
        writer.uint32(138).fork()
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
          message.securityGroupIds.push(reader.string());
          break;
        case 14:
          message.serviceAccountId = reader.string();
          break;
        case 15:
          message.deletionProtection = reader.bool();
          break;
        case 16:
          message.maintenanceWindow = MaintenanceWindow.decode(
            reader,
            reader.uint32()
          );
          break;
        case 17:
          message.plannedOperation = MaintenanceOperation.decode(
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
    message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) =>
      String(e)
    );
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.deletionProtection =
      object.deletionProtection !== undefined &&
      object.deletionProtection !== null
        ? Boolean(object.deletionProtection)
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
    if (message.securityGroupIds) {
      obj.securityGroupIds = message.securityGroupIds.map((e) => e);
    } else {
      obj.securityGroupIds = [];
    }
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.deletionProtection !== undefined &&
      (obj.deletionProtection = message.deletionProtection);
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
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.deletionProtection = object.deletionProtection ?? false;
    message.maintenanceWindow =
      object.maintenanceWindow !== undefined &&
      object.maintenanceWindow !== null
        ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
        : undefined;
    message.plannedOperation =
      object.plannedOperation !== undefined && object.plannedOperation !== null
        ? MaintenanceOperation.fromPartial(object.plannedOperation)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Cluster.$type, Cluster);

const baseCluster_LabelsEntry: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.Cluster.LabelsEntry",
  key: "",
  value: "",
};

export const Cluster_LabelsEntry = {
  $type: "yandex.cloud.mdb.opensearch.v1.Cluster.LabelsEntry" as const,

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
  $type: "yandex.cloud.mdb.opensearch.v1.Monitoring",
  name: "",
  description: "",
  link: "",
};

export const Monitoring = {
  $type: "yandex.cloud.mdb.opensearch.v1.Monitoring" as const,

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
  $type: "yandex.cloud.mdb.opensearch.v1.ClusterConfig",
  version: "",
};

export const ClusterConfig = {
  $type: "yandex.cloud.mdb.opensearch.v1.ClusterConfig" as const,

  encode(
    message: ClusterConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.opensearch !== undefined) {
      OpenSearch.encode(message.opensearch, writer.uint32(18).fork()).ldelim();
    }
    if (message.dashboards !== undefined) {
      Dashboards.encode(message.dashboards, writer.uint32(26).fork()).ldelim();
    }
    if (message.access !== undefined) {
      Access.encode(message.access, writer.uint32(34).fork()).ldelim();
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
          message.opensearch = OpenSearch.decode(reader, reader.uint32());
          break;
        case 3:
          message.dashboards = Dashboards.decode(reader, reader.uint32());
          break;
        case 4:
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
    message.opensearch =
      object.opensearch !== undefined && object.opensearch !== null
        ? OpenSearch.fromJSON(object.opensearch)
        : undefined;
    message.dashboards =
      object.dashboards !== undefined && object.dashboards !== null
        ? Dashboards.fromJSON(object.dashboards)
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
    message.opensearch !== undefined &&
      (obj.opensearch = message.opensearch
        ? OpenSearch.toJSON(message.opensearch)
        : undefined);
    message.dashboards !== undefined &&
      (obj.dashboards = message.dashboards
        ? Dashboards.toJSON(message.dashboards)
        : undefined);
    message.access !== undefined &&
      (obj.access = message.access ? Access.toJSON(message.access) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClusterConfig>, I>>(
    object: I
  ): ClusterConfig {
    const message = { ...baseClusterConfig } as ClusterConfig;
    message.version = object.version ?? "";
    message.opensearch =
      object.opensearch !== undefined && object.opensearch !== null
        ? OpenSearch.fromPartial(object.opensearch)
        : undefined;
    message.dashboards =
      object.dashboards !== undefined && object.dashboards !== null
        ? Dashboards.fromPartial(object.dashboards)
        : undefined;
    message.access =
      object.access !== undefined && object.access !== null
        ? Access.fromPartial(object.access)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ClusterConfig.$type, ClusterConfig);

const baseOpenSearch: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.OpenSearch",
  plugins: "",
};

export const OpenSearch = {
  $type: "yandex.cloud.mdb.opensearch.v1.OpenSearch" as const,

  encode(
    message: OpenSearch,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.plugins) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.nodeGroups) {
      OpenSearch_NodeGroup.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.opensearchConfigSet2 !== undefined) {
      OpenSearchConfigSet2.encode(
        message.opensearchConfigSet2,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenSearch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOpenSearch } as OpenSearch;
    message.plugins = [];
    message.nodeGroups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plugins.push(reader.string());
          break;
        case 2:
          message.nodeGroups.push(
            OpenSearch_NodeGroup.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.opensearchConfigSet2 = OpenSearchConfigSet2.decode(
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

  fromJSON(object: any): OpenSearch {
    const message = { ...baseOpenSearch } as OpenSearch;
    message.plugins = (object.plugins ?? []).map((e: any) => String(e));
    message.nodeGroups = (object.nodeGroups ?? []).map((e: any) =>
      OpenSearch_NodeGroup.fromJSON(e)
    );
    message.opensearchConfigSet2 =
      object.opensearchConfigSet_2 !== undefined &&
      object.opensearchConfigSet_2 !== null
        ? OpenSearchConfigSet2.fromJSON(object.opensearchConfigSet_2)
        : undefined;
    return message;
  },

  toJSON(message: OpenSearch): unknown {
    const obj: any = {};
    if (message.plugins) {
      obj.plugins = message.plugins.map((e) => e);
    } else {
      obj.plugins = [];
    }
    if (message.nodeGroups) {
      obj.nodeGroups = message.nodeGroups.map((e) =>
        e ? OpenSearch_NodeGroup.toJSON(e) : undefined
      );
    } else {
      obj.nodeGroups = [];
    }
    message.opensearchConfigSet2 !== undefined &&
      (obj.opensearchConfigSet_2 = message.opensearchConfigSet2
        ? OpenSearchConfigSet2.toJSON(message.opensearchConfigSet2)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OpenSearch>, I>>(
    object: I
  ): OpenSearch {
    const message = { ...baseOpenSearch } as OpenSearch;
    message.plugins = object.plugins?.map((e) => e) || [];
    message.nodeGroups =
      object.nodeGroups?.map((e) => OpenSearch_NodeGroup.fromPartial(e)) || [];
    message.opensearchConfigSet2 =
      object.opensearchConfigSet2 !== undefined &&
      object.opensearchConfigSet2 !== null
        ? OpenSearchConfigSet2.fromPartial(object.opensearchConfigSet2)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(OpenSearch.$type, OpenSearch);

const baseOpenSearch_NodeGroup: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.OpenSearch.NodeGroup",
  name: "",
  hostsCount: 0,
  zoneIds: "",
  subnetIds: "",
  assignPublicIp: false,
  roles: 0,
};

export const OpenSearch_NodeGroup = {
  $type: "yandex.cloud.mdb.opensearch.v1.OpenSearch.NodeGroup" as const,

  encode(
    message: OpenSearch_NodeGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    if (message.hostsCount !== 0) {
      writer.uint32(24).int64(message.hostsCount);
    }
    for (const v of message.zoneIds) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.subnetIds) {
      writer.uint32(42).string(v!);
    }
    if (message.assignPublicIp === true) {
      writer.uint32(48).bool(message.assignPublicIp);
    }
    writer.uint32(58).fork();
    for (const v of message.roles) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OpenSearch_NodeGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOpenSearch_NodeGroup } as OpenSearch_NodeGroup;
    message.zoneIds = [];
    message.subnetIds = [];
    message.roles = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        case 3:
          message.hostsCount = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.zoneIds.push(reader.string());
          break;
        case 5:
          message.subnetIds.push(reader.string());
          break;
        case 6:
          message.assignPublicIp = reader.bool();
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.roles.push(reader.int32() as any);
            }
          } else {
            message.roles.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpenSearch_NodeGroup {
    const message = { ...baseOpenSearch_NodeGroup } as OpenSearch_NodeGroup;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    message.hostsCount =
      object.hostsCount !== undefined && object.hostsCount !== null
        ? Number(object.hostsCount)
        : 0;
    message.zoneIds = (object.zoneIds ?? []).map((e: any) => String(e));
    message.subnetIds = (object.subnetIds ?? []).map((e: any) => String(e));
    message.assignPublicIp =
      object.assignPublicIp !== undefined && object.assignPublicIp !== null
        ? Boolean(object.assignPublicIp)
        : false;
    message.roles = (object.roles ?? []).map((e: any) =>
      openSearch_GroupRoleFromJSON(e)
    );
    return message;
  },

  toJSON(message: OpenSearch_NodeGroup): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    message.hostsCount !== undefined &&
      (obj.hostsCount = Math.round(message.hostsCount));
    if (message.zoneIds) {
      obj.zoneIds = message.zoneIds.map((e) => e);
    } else {
      obj.zoneIds = [];
    }
    if (message.subnetIds) {
      obj.subnetIds = message.subnetIds.map((e) => e);
    } else {
      obj.subnetIds = [];
    }
    message.assignPublicIp !== undefined &&
      (obj.assignPublicIp = message.assignPublicIp);
    if (message.roles) {
      obj.roles = message.roles.map((e) => openSearch_GroupRoleToJSON(e));
    } else {
      obj.roles = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OpenSearch_NodeGroup>, I>>(
    object: I
  ): OpenSearch_NodeGroup {
    const message = { ...baseOpenSearch_NodeGroup } as OpenSearch_NodeGroup;
    message.name = object.name ?? "";
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    message.hostsCount = object.hostsCount ?? 0;
    message.zoneIds = object.zoneIds?.map((e) => e) || [];
    message.subnetIds = object.subnetIds?.map((e) => e) || [];
    message.assignPublicIp = object.assignPublicIp ?? false;
    message.roles = object.roles?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(OpenSearch_NodeGroup.$type, OpenSearch_NodeGroup);

const baseDashboards: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.Dashboards",
};

export const Dashboards = {
  $type: "yandex.cloud.mdb.opensearch.v1.Dashboards" as const,

  encode(
    message: Dashboards,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.nodeGroups) {
      Dashboards_NodeGroup.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dashboards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashboards } as Dashboards;
    message.nodeGroups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.nodeGroups.push(
            Dashboards_NodeGroup.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Dashboards {
    const message = { ...baseDashboards } as Dashboards;
    message.nodeGroups = (object.nodeGroups ?? []).map((e: any) =>
      Dashboards_NodeGroup.fromJSON(e)
    );
    return message;
  },

  toJSON(message: Dashboards): unknown {
    const obj: any = {};
    if (message.nodeGroups) {
      obj.nodeGroups = message.nodeGroups.map((e) =>
        e ? Dashboards_NodeGroup.toJSON(e) : undefined
      );
    } else {
      obj.nodeGroups = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Dashboards>, I>>(
    object: I
  ): Dashboards {
    const message = { ...baseDashboards } as Dashboards;
    message.nodeGroups =
      object.nodeGroups?.map((e) => Dashboards_NodeGroup.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Dashboards.$type, Dashboards);

const baseDashboards_NodeGroup: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.Dashboards.NodeGroup",
  name: "",
  hostsCount: 0,
  zoneIds: "",
  subnetIds: "",
  assignPublicIp: false,
};

export const Dashboards_NodeGroup = {
  $type: "yandex.cloud.mdb.opensearch.v1.Dashboards.NodeGroup" as const,

  encode(
    message: Dashboards_NodeGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
    }
    if (message.hostsCount !== 0) {
      writer.uint32(24).int64(message.hostsCount);
    }
    for (const v of message.zoneIds) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.subnetIds) {
      writer.uint32(42).string(v!);
    }
    if (message.assignPublicIp === true) {
      writer.uint32(48).bool(message.assignPublicIp);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Dashboards_NodeGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDashboards_NodeGroup } as Dashboards_NodeGroup;
    message.zoneIds = [];
    message.subnetIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        case 3:
          message.hostsCount = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.zoneIds.push(reader.string());
          break;
        case 5:
          message.subnetIds.push(reader.string());
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

  fromJSON(object: any): Dashboards_NodeGroup {
    const message = { ...baseDashboards_NodeGroup } as Dashboards_NodeGroup;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    message.hostsCount =
      object.hostsCount !== undefined && object.hostsCount !== null
        ? Number(object.hostsCount)
        : 0;
    message.zoneIds = (object.zoneIds ?? []).map((e: any) => String(e));
    message.subnetIds = (object.subnetIds ?? []).map((e: any) => String(e));
    message.assignPublicIp =
      object.assignPublicIp !== undefined && object.assignPublicIp !== null
        ? Boolean(object.assignPublicIp)
        : false;
    return message;
  },

  toJSON(message: Dashboards_NodeGroup): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    message.hostsCount !== undefined &&
      (obj.hostsCount = Math.round(message.hostsCount));
    if (message.zoneIds) {
      obj.zoneIds = message.zoneIds.map((e) => e);
    } else {
      obj.zoneIds = [];
    }
    if (message.subnetIds) {
      obj.subnetIds = message.subnetIds.map((e) => e);
    } else {
      obj.subnetIds = [];
    }
    message.assignPublicIp !== undefined &&
      (obj.assignPublicIp = message.assignPublicIp);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Dashboards_NodeGroup>, I>>(
    object: I
  ): Dashboards_NodeGroup {
    const message = { ...baseDashboards_NodeGroup } as Dashboards_NodeGroup;
    message.name = object.name ?? "";
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    message.hostsCount = object.hostsCount ?? 0;
    message.zoneIds = object.zoneIds?.map((e) => e) || [];
    message.subnetIds = object.subnetIds?.map((e) => e) || [];
    message.assignPublicIp = object.assignPublicIp ?? false;
    return message;
  },
};

messageTypeRegistry.set(Dashboards_NodeGroup.$type, Dashboards_NodeGroup);

const baseResources: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.Resources",
  resourcePresetId: "",
  diskSize: 0,
  diskTypeId: "",
};

export const Resources = {
  $type: "yandex.cloud.mdb.opensearch.v1.Resources" as const,

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

const baseHost: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.Host",
  name: "",
  clusterId: "",
  zoneId: "",
  type: 0,
  health: 0,
  subnetId: "",
  assignPublicIp: false,
  nodeGroup: "",
  roles: 0,
};

export const Host = {
  $type: "yandex.cloud.mdb.opensearch.v1.Host" as const,

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
    if (message.type !== 0) {
      writer.uint32(40).int32(message.type);
    }
    if (message.health !== 0) {
      writer.uint32(48).int32(message.health);
    }
    if (message.subnetId !== "") {
      writer.uint32(66).string(message.subnetId);
    }
    if (message.assignPublicIp === true) {
      writer.uint32(72).bool(message.assignPublicIp);
    }
    if (message.system !== undefined) {
      Host_SystemMetrics.encode(
        message.system,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.nodeGroup !== "") {
      writer.uint32(90).string(message.nodeGroup);
    }
    writer.uint32(98).fork();
    for (const v of message.roles) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Host {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHost } as Host;
    message.roles = [];
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
          message.type = reader.int32() as any;
          break;
        case 6:
          message.health = reader.int32() as any;
          break;
        case 8:
          message.subnetId = reader.string();
          break;
        case 9:
          message.assignPublicIp = reader.bool();
          break;
        case 10:
          message.system = Host_SystemMetrics.decode(reader, reader.uint32());
          break;
        case 11:
          message.nodeGroup = reader.string();
          break;
        case 12:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.roles.push(reader.int32() as any);
            }
          } else {
            message.roles.push(reader.int32() as any);
          }
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
    message.type =
      object.type !== undefined && object.type !== null
        ? host_TypeFromJSON(object.type)
        : 0;
    message.health =
      object.health !== undefined && object.health !== null
        ? host_HealthFromJSON(object.health)
        : 0;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    message.assignPublicIp =
      object.assignPublicIp !== undefined && object.assignPublicIp !== null
        ? Boolean(object.assignPublicIp)
        : false;
    message.system =
      object.system !== undefined && object.system !== null
        ? Host_SystemMetrics.fromJSON(object.system)
        : undefined;
    message.nodeGroup =
      object.nodeGroup !== undefined && object.nodeGroup !== null
        ? String(object.nodeGroup)
        : "";
    message.roles = (object.roles ?? []).map((e: any) =>
      openSearch_GroupRoleFromJSON(e)
    );
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
    message.type !== undefined && (obj.type = host_TypeToJSON(message.type));
    message.health !== undefined &&
      (obj.health = host_HealthToJSON(message.health));
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    message.assignPublicIp !== undefined &&
      (obj.assignPublicIp = message.assignPublicIp);
    message.system !== undefined &&
      (obj.system = message.system
        ? Host_SystemMetrics.toJSON(message.system)
        : undefined);
    message.nodeGroup !== undefined && (obj.nodeGroup = message.nodeGroup);
    if (message.roles) {
      obj.roles = message.roles.map((e) => openSearch_GroupRoleToJSON(e));
    } else {
      obj.roles = [];
    }
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
    message.type = object.type ?? 0;
    message.health = object.health ?? 0;
    message.subnetId = object.subnetId ?? "";
    message.assignPublicIp = object.assignPublicIp ?? false;
    message.system =
      object.system !== undefined && object.system !== null
        ? Host_SystemMetrics.fromPartial(object.system)
        : undefined;
    message.nodeGroup = object.nodeGroup ?? "";
    message.roles = object.roles?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Host.$type, Host);

const baseHost_CPUMetric: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.Host.CPUMetric",
  timestamp: 0,
  used: 0,
};

export const Host_CPUMetric = {
  $type: "yandex.cloud.mdb.opensearch.v1.Host.CPUMetric" as const,

  encode(
    message: Host_CPUMetric,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timestamp !== 0) {
      writer.uint32(8).int64(message.timestamp);
    }
    if (message.used !== 0) {
      writer.uint32(17).double(message.used);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Host_CPUMetric {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHost_CPUMetric } as Host_CPUMetric;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.used = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Host_CPUMetric {
    const message = { ...baseHost_CPUMetric } as Host_CPUMetric;
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Number(object.timestamp)
        : 0;
    message.used =
      object.used !== undefined && object.used !== null
        ? Number(object.used)
        : 0;
    return message;
  },

  toJSON(message: Host_CPUMetric): unknown {
    const obj: any = {};
    message.timestamp !== undefined &&
      (obj.timestamp = Math.round(message.timestamp));
    message.used !== undefined && (obj.used = message.used);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Host_CPUMetric>, I>>(
    object: I
  ): Host_CPUMetric {
    const message = { ...baseHost_CPUMetric } as Host_CPUMetric;
    message.timestamp = object.timestamp ?? 0;
    message.used = object.used ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Host_CPUMetric.$type, Host_CPUMetric);

const baseHost_MemoryMetric: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.Host.MemoryMetric",
  timestamp: 0,
  used: 0,
  total: 0,
};

export const Host_MemoryMetric = {
  $type: "yandex.cloud.mdb.opensearch.v1.Host.MemoryMetric" as const,

  encode(
    message: Host_MemoryMetric,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timestamp !== 0) {
      writer.uint32(8).int64(message.timestamp);
    }
    if (message.used !== 0) {
      writer.uint32(16).int64(message.used);
    }
    if (message.total !== 0) {
      writer.uint32(24).int64(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Host_MemoryMetric {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHost_MemoryMetric } as Host_MemoryMetric;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.used = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.total = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Host_MemoryMetric {
    const message = { ...baseHost_MemoryMetric } as Host_MemoryMetric;
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Number(object.timestamp)
        : 0;
    message.used =
      object.used !== undefined && object.used !== null
        ? Number(object.used)
        : 0;
    message.total =
      object.total !== undefined && object.total !== null
        ? Number(object.total)
        : 0;
    return message;
  },

  toJSON(message: Host_MemoryMetric): unknown {
    const obj: any = {};
    message.timestamp !== undefined &&
      (obj.timestamp = Math.round(message.timestamp));
    message.used !== undefined && (obj.used = Math.round(message.used));
    message.total !== undefined && (obj.total = Math.round(message.total));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Host_MemoryMetric>, I>>(
    object: I
  ): Host_MemoryMetric {
    const message = { ...baseHost_MemoryMetric } as Host_MemoryMetric;
    message.timestamp = object.timestamp ?? 0;
    message.used = object.used ?? 0;
    message.total = object.total ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Host_MemoryMetric.$type, Host_MemoryMetric);

const baseHost_DiskMetric: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.Host.DiskMetric",
  timestamp: 0,
  used: 0,
  total: 0,
};

export const Host_DiskMetric = {
  $type: "yandex.cloud.mdb.opensearch.v1.Host.DiskMetric" as const,

  encode(
    message: Host_DiskMetric,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timestamp !== 0) {
      writer.uint32(8).int64(message.timestamp);
    }
    if (message.used !== 0) {
      writer.uint32(16).int64(message.used);
    }
    if (message.total !== 0) {
      writer.uint32(24).int64(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Host_DiskMetric {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHost_DiskMetric } as Host_DiskMetric;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.used = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.total = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Host_DiskMetric {
    const message = { ...baseHost_DiskMetric } as Host_DiskMetric;
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Number(object.timestamp)
        : 0;
    message.used =
      object.used !== undefined && object.used !== null
        ? Number(object.used)
        : 0;
    message.total =
      object.total !== undefined && object.total !== null
        ? Number(object.total)
        : 0;
    return message;
  },

  toJSON(message: Host_DiskMetric): unknown {
    const obj: any = {};
    message.timestamp !== undefined &&
      (obj.timestamp = Math.round(message.timestamp));
    message.used !== undefined && (obj.used = Math.round(message.used));
    message.total !== undefined && (obj.total = Math.round(message.total));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Host_DiskMetric>, I>>(
    object: I
  ): Host_DiskMetric {
    const message = { ...baseHost_DiskMetric } as Host_DiskMetric;
    message.timestamp = object.timestamp ?? 0;
    message.used = object.used ?? 0;
    message.total = object.total ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Host_DiskMetric.$type, Host_DiskMetric);

const baseHost_SystemMetrics: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.Host.SystemMetrics",
};

export const Host_SystemMetrics = {
  $type: "yandex.cloud.mdb.opensearch.v1.Host.SystemMetrics" as const,

  encode(
    message: Host_SystemMetrics,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cpu !== undefined) {
      Host_CPUMetric.encode(message.cpu, writer.uint32(10).fork()).ldelim();
    }
    if (message.memory !== undefined) {
      Host_MemoryMetric.encode(
        message.memory,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.disk !== undefined) {
      Host_DiskMetric.encode(message.disk, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Host_SystemMetrics {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHost_SystemMetrics } as Host_SystemMetrics;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cpu = Host_CPUMetric.decode(reader, reader.uint32());
          break;
        case 2:
          message.memory = Host_MemoryMetric.decode(reader, reader.uint32());
          break;
        case 3:
          message.disk = Host_DiskMetric.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Host_SystemMetrics {
    const message = { ...baseHost_SystemMetrics } as Host_SystemMetrics;
    message.cpu =
      object.cpu !== undefined && object.cpu !== null
        ? Host_CPUMetric.fromJSON(object.cpu)
        : undefined;
    message.memory =
      object.memory !== undefined && object.memory !== null
        ? Host_MemoryMetric.fromJSON(object.memory)
        : undefined;
    message.disk =
      object.disk !== undefined && object.disk !== null
        ? Host_DiskMetric.fromJSON(object.disk)
        : undefined;
    return message;
  },

  toJSON(message: Host_SystemMetrics): unknown {
    const obj: any = {};
    message.cpu !== undefined &&
      (obj.cpu = message.cpu ? Host_CPUMetric.toJSON(message.cpu) : undefined);
    message.memory !== undefined &&
      (obj.memory = message.memory
        ? Host_MemoryMetric.toJSON(message.memory)
        : undefined);
    message.disk !== undefined &&
      (obj.disk = message.disk
        ? Host_DiskMetric.toJSON(message.disk)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Host_SystemMetrics>, I>>(
    object: I
  ): Host_SystemMetrics {
    const message = { ...baseHost_SystemMetrics } as Host_SystemMetrics;
    message.cpu =
      object.cpu !== undefined && object.cpu !== null
        ? Host_CPUMetric.fromPartial(object.cpu)
        : undefined;
    message.memory =
      object.memory !== undefined && object.memory !== null
        ? Host_MemoryMetric.fromPartial(object.memory)
        : undefined;
    message.disk =
      object.disk !== undefined && object.disk !== null
        ? Host_DiskMetric.fromPartial(object.disk)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Host_SystemMetrics.$type, Host_SystemMetrics);

const baseAccess: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.Access",
  dataTransfer: false,
  serverless: false,
};

export const Access = {
  $type: "yandex.cloud.mdb.opensearch.v1.Access" as const,

  encode(
    message: Access,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dataTransfer === true) {
      writer.uint32(8).bool(message.dataTransfer);
    }
    if (message.serverless === true) {
      writer.uint32(16).bool(message.serverless);
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
          message.dataTransfer = reader.bool();
          break;
        case 2:
          message.serverless = reader.bool();
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
    message.dataTransfer =
      object.dataTransfer !== undefined && object.dataTransfer !== null
        ? Boolean(object.dataTransfer)
        : false;
    message.serverless =
      object.serverless !== undefined && object.serverless !== null
        ? Boolean(object.serverless)
        : false;
    return message;
  },

  toJSON(message: Access): unknown {
    const obj: any = {};
    message.dataTransfer !== undefined &&
      (obj.dataTransfer = message.dataTransfer);
    message.serverless !== undefined && (obj.serverless = message.serverless);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Access>, I>>(object: I): Access {
    const message = { ...baseAccess } as Access;
    message.dataTransfer = object.dataTransfer ?? false;
    message.serverless = object.serverless ?? false;
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
