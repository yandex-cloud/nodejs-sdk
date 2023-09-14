/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  MaintenanceWindow,
  MaintenanceOperation,
} from "../../../../../yandex/cloud/mdb/kafka/v1/maintenance";
import {
  CompressionType,
  SaslMechanism,
  compressionTypeFromJSON,
  saslMechanismFromJSON,
  compressionTypeToJSON,
  saslMechanismToJSON,
} from "../../../../../yandex/cloud/mdb/kafka/v1/common";
import { Timestamp } from "../../../../../google/protobuf/timestamp";
import { Int64Value, BoolValue } from "../../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.mdb.kafka.v1";

/**
 * An Apache Kafka® cluster resource.
 * For more information, see the [Concepts](/docs/managed-kafka/concepts) section of the documentation.
 */
export interface Cluster {
  $type: "yandex.cloud.mdb.kafka.v1.Cluster";
  /**
   * ID of the Apache Kafka® cluster.
   * This ID is assigned at creation time.
   */
  id: string;
  /** ID of the folder that the Apache Kafka® cluster belongs to. */
  folderId: string;
  /** Creation timestamp. */
  createdAt?: Date;
  /**
   * Name of the Apache Kafka® cluster.
   * The name must be unique within the folder. 1-63 characters long. Value must match the regular expression `[a-zA-Z0-9_-]*`.
   */
  name: string;
  /** Description of the Apache Kafka® cluster. 0-256 characters long. */
  description: string;
  /**
   * Custom labels for the Apache Kafka® cluster as `key:value` pairs.
   * A maximum of 64 labels per resource is allowed.
   */
  labels: { [key: string]: string };
  /** Deployment environment of the Apache Kafka® cluster. */
  environment: Cluster_Environment;
  /** Description of monitoring systems relevant to the Apache Kafka® cluster. */
  monitoring: Monitoring[];
  /** Configuration of the Apache Kafka® cluster. */
  config?: ConfigSpec;
  /** ID of the network that the cluster belongs to. */
  networkId: string;
  /** Aggregated cluster health. */
  health: Cluster_Health;
  /** Current state of the cluster. */
  status: Cluster_Status;
  /** User security groups */
  securityGroupIds: string[];
  /** Host groups hosting VMs of the cluster. */
  hostGroupIds: string[];
  /** Deletion Protection inhibits deletion of the cluster */
  deletionProtection: boolean;
  /** Window of maintenance operations. */
  maintenanceWindow?: MaintenanceWindow;
  /** Scheduled maintenance operation. */
  plannedOperation?: MaintenanceOperation;
}

export enum Cluster_Environment {
  ENVIRONMENT_UNSPECIFIED = 0,
  /** PRODUCTION - stable environment with a conservative update policy when only hotfixes are applied during regular maintenance. */
  PRODUCTION = 1,
  /** PRESTABLE - environment with a more aggressive update policy when new versions are rolled out irrespective of backward compatibility. */
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
  /** HEALTH_UNKNOWN - state of the cluster is unknown ([Host.health] of all hosts in the cluster is `UNKNOWN`). */
  HEALTH_UNKNOWN = 0,
  /** ALIVE - cluster is alive and well ([Host.health] of all hosts in the cluster is `ALIVE`). */
  ALIVE = 1,
  /** DEAD - cluster is inoperable ([Host.health] of all hosts in the cluster is `DEAD`). */
  DEAD = 2,
  /** DEGRADED - cluster is in degraded state ([Host.health] of at least one of the hosts in the cluster is not `ALIVE`). */
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
  /** STATUS_UNKNOWN - cluster state is unknown. */
  STATUS_UNKNOWN = 0,
  /** CREATING - cluster is being created. */
  CREATING = 1,
  /** RUNNING - cluster is running normally. */
  RUNNING = 2,
  /** ERROR - cluster encountered a problem and cannot operate. */
  ERROR = 3,
  /** UPDATING - cluster is being updated. */
  UPDATING = 4,
  /** STOPPING - cluster is stopping. */
  STOPPING = 5,
  /** STOPPED - cluster stopped. */
  STOPPED = 6,
  /** STARTING - cluster is starting. */
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
  $type: "yandex.cloud.mdb.kafka.v1.Cluster.LabelsEntry";
  key: string;
  value: string;
}

/** Metadata of monitoring system. */
export interface Monitoring {
  $type: "yandex.cloud.mdb.kafka.v1.Monitoring";
  /** Name of the monitoring system. */
  name: string;
  /** Description of the monitoring system. */
  description: string;
  /** Link to the monitoring system charts for the Apache Kafka® cluster. */
  link: string;
}

export interface ConfigSpec {
  $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec";
  /** Version of Apache Kafka® used in the cluster. Possible values: `2.1`, `2.6`. */
  version: string;
  /** Configuration and resource allocation for Kafka brokers. */
  kafka?: ConfigSpec_Kafka;
  /** Configuration and resource allocation for ZooKeeper hosts. */
  zookeeper?: ConfigSpec_Zookeeper;
  /** IDs of availability zones where Kafka brokers reside. */
  zoneId: string[];
  /** The number of Kafka brokers deployed in each availability zone. */
  brokersCount?: number;
  /**
   * The flag that defines whether a public IP address is assigned to the cluster.
   * If the value is `true`, then Apache Kafka® cluster is available on the Internet via it's public IP address.
   */
  assignPublicIp: boolean;
  /** Allows to manage topics via AdminAPI */
  unmanagedTopics: boolean;
  /** Enables managed schema registry on cluster */
  schemaRegistry: boolean;
  /** Access policy for external services. */
  access?: Access;
  /** Configuration of REST API. */
  restApiConfig?: ConfigSpec_RestAPIConfig;
}

export interface ConfigSpec_Kafka {
  $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.Kafka";
  /** Resources allocated to Kafka brokers. */
  resources?: Resources;
  kafkaConfig28?: Kafkaconfig28 | undefined;
  kafkaConfig3?: KafkaConfig3 | undefined;
}

export interface ConfigSpec_Zookeeper {
  $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.Zookeeper";
  /** Resources allocated to ZooKeeper hosts. */
  resources?: Resources;
}

export interface ConfigSpec_RestAPIConfig {
  $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.RestAPIConfig";
  /** Is REST API enabled for this cluster. */
  enabled: boolean;
}

export interface Resources {
  $type: "yandex.cloud.mdb.kafka.v1.Resources";
  /**
   * ID of the preset for computational resources available to a host (CPU, memory, etc.).
   * All available presets are listed in the [documentation](/docs/managed-kafka/concepts/instance-types).
   */
  resourcePresetId: string;
  /** Volume of the storage available to a host, in bytes. Must be greater than 2 * partition segment size in bytes * partitions count, so each partition can have one active segment file and one closed segment file that can be deleted. */
  diskSize: number;
  /** Type of the storage environment for the host. */
  diskTypeId: string;
}

/** Kafka version 2.8 broker configuration. */
export interface Kafkaconfig28 {
  $type: "yandex.cloud.mdb.kafka.v1.KafkaConfig2_8";
  /** Cluster topics compression type. */
  compressionType: CompressionType;
  /**
   * The number of messages accumulated on a log partition before messages are flushed to disk.
   *
   * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_8.flush_messages] setting.
   */
  logFlushIntervalMessages?: number;
  /**
   * The maximum time (in milliseconds) that a message in any topic is kept in memory before flushed to disk.
   * If not set, the value of [log_flush_scheduler_interval_ms] is used.
   *
   * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_8.flush_ms] setting.
   */
  logFlushIntervalMs?: number;
  /**
   * The frequency of checks (in milliseconds) for any logs that need to be flushed to disk.
   * This check is done by the log flusher.
   */
  logFlushSchedulerIntervalMs?: number;
  /**
   * Partition size limit; Kafka will discard old log segments to free up space if `delete` [TopicConfig2_8.cleanup_policy] is in effect.
   * This setting is helpful if you need to control the size of a log due to limited disk space.
   *
   * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_8.retention_bytes] setting.
   */
  logRetentionBytes?: number;
  /** The number of hours to keep a log segment file before deleting it. */
  logRetentionHours?: number;
  /**
   * The number of minutes to keep a log segment file before deleting it.
   *
   * If not set, the value of [log_retention_hours] is used.
   */
  logRetentionMinutes?: number;
  /**
   * The number of milliseconds to keep a log segment file before deleting it.
   *
   * If not set, the value of [log_retention_minutes] is used.
   *
   * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_8.retention_ms] setting.
   */
  logRetentionMs?: number;
  /**
   * The maximum size of a single log file.
   *
   * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_8.segment_bytes] setting.
   */
  logSegmentBytes?: number;
  /**
   * Should pre allocate file when create new segment?
   *
   * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_8.preallocate] setting.
   */
  logPreallocate?: boolean;
  /** The SO_SNDBUF buffer of the socket server sockets. If the value is -1, the OS default will be used. */
  socketSendBufferBytes?: number;
  /** The SO_RCVBUF buffer of the socket server sockets. If the value is -1, the OS default will be used. */
  socketReceiveBufferBytes?: number;
  /** Enable auto creation of topic on the server */
  autoCreateTopicsEnable?: boolean;
  /** Default number of partitions per topic on the whole cluster */
  numPartitions?: number;
  /** Default replication factor of the topic on the whole cluster */
  defaultReplicationFactor?: number;
  /** The largest record batch size allowed by Kafka. Default value: 1048588. */
  messageMaxBytes?: number;
  /** The number of bytes of messages to attempt to fetch for each partition. Default value: 1048576. */
  replicaFetchMaxBytes?: number;
  /** A list of cipher suites. */
  sslCipherSuites: string[];
  /** Offset storage time after a consumer group loses all its consumers. Default: 10080. */
  offsetsRetentionMinutes?: number;
  /** The list of SASL mechanisms enabled in the Kafka server. Default: [SCRAM_SHA_512]. */
  saslEnabledMechanisms: SaslMechanism[];
}

/** Kafka version 3.x broker configuration. */
export interface KafkaConfig3 {
  $type: "yandex.cloud.mdb.kafka.v1.KafkaConfig3";
  /** Cluster topics compression type. */
  compressionType: CompressionType;
  /**
   * The number of messages accumulated on a log partition before messages are flushed to disk.
   *
   * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig3.flush_messages] setting.
   */
  logFlushIntervalMessages?: number;
  /**
   * The maximum time (in milliseconds) that a message in any topic is kept in memory before flushed to disk.
   * If not set, the value of [log_flush_scheduler_interval_ms] is used.
   *
   * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig3.flush_ms] setting.
   */
  logFlushIntervalMs?: number;
  /**
   * The frequency of checks (in milliseconds) for any logs that need to be flushed to disk.
   * This check is done by the log flusher.
   */
  logFlushSchedulerIntervalMs?: number;
  /**
   * Partition size limit; Kafka will discard old log segments to free up space if `delete` [TopicConfig3.cleanup_policy] is in effect.
   * This setting is helpful if you need to control the size of a log due to limited disk space.
   *
   * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig3.retention_bytes] setting.
   */
  logRetentionBytes?: number;
  /** The number of hours to keep a log segment file before deleting it. */
  logRetentionHours?: number;
  /**
   * The number of minutes to keep a log segment file before deleting it.
   *
   * If not set, the value of [log_retention_hours] is used.
   */
  logRetentionMinutes?: number;
  /**
   * The number of milliseconds to keep a log segment file before deleting it.
   *
   * If not set, the value of [log_retention_minutes] is used.
   *
   * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig3.retention_ms] setting.
   */
  logRetentionMs?: number;
  /**
   * The maximum size of a single log file.
   *
   * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig3.segment_bytes] setting.
   */
  logSegmentBytes?: number;
  /**
   * Should pre allocate file when create new segment?
   *
   * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig3.preallocate] setting.
   */
  logPreallocate?: boolean;
  /** The SO_SNDBUF buffer of the socket server sockets. If the value is -1, the OS default will be used. */
  socketSendBufferBytes?: number;
  /** The SO_RCVBUF buffer of the socket server sockets. If the value is -1, the OS default will be used. */
  socketReceiveBufferBytes?: number;
  /** Enable auto creation of topic on the server */
  autoCreateTopicsEnable?: boolean;
  /** Default number of partitions per topic on the whole cluster */
  numPartitions?: number;
  /** Default replication factor of the topic on the whole cluster */
  defaultReplicationFactor?: number;
  /** The largest record batch size allowed by Kafka. Default value: 1048588. */
  messageMaxBytes?: number;
  /** The number of bytes of messages to attempt to fetch for each partition. Default value: 1048576. */
  replicaFetchMaxBytes?: number;
  /** A list of cipher suites. */
  sslCipherSuites: string[];
  /** Offset storage time after a consumer group loses all its consumers. Default: 10080. */
  offsetsRetentionMinutes?: number;
  /** The list of SASL mechanisms enabled in the Kafka server. Default: [SCRAM_SHA_512]. */
  saslEnabledMechanisms: SaslMechanism[];
}

/** Cluster host metadata. */
export interface Host {
  $type: "yandex.cloud.mdb.kafka.v1.Host";
  /** Name of the host. */
  name: string;
  /** ID of the Apache Kafka® cluster. */
  clusterId: string;
  /** ID of the availability zone where the host resides. */
  zoneId: string;
  /** Host role. */
  role: Host_Role;
  /** Computational resources allocated to the host. */
  resources?: Resources;
  /** Aggregated host health data. */
  health: Host_Health;
  /** ID of the subnet the host resides in. */
  subnetId: string;
  /**
   * The flag that defines whether a public IP address is assigned to the node.
   *
   * If the value is `true`, then this node is available on the Internet via it's public IP address.
   */
  assignPublicIp: boolean;
}

export enum Host_Role {
  ROLE_UNSPECIFIED = 0,
  /** KAFKA - the host is a Kafka broker. */
  KAFKA = 1,
  /** ZOOKEEPER - the host is a ZooKeeper server. */
  ZOOKEEPER = 2,
  UNRECOGNIZED = -1,
}

export function host_RoleFromJSON(object: any): Host_Role {
  switch (object) {
    case 0:
    case "ROLE_UNSPECIFIED":
      return Host_Role.ROLE_UNSPECIFIED;
    case 1:
    case "KAFKA":
      return Host_Role.KAFKA;
    case 2:
    case "ZOOKEEPER":
      return Host_Role.ZOOKEEPER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Host_Role.UNRECOGNIZED;
  }
}

export function host_RoleToJSON(object: Host_Role): string {
  switch (object) {
    case Host_Role.ROLE_UNSPECIFIED:
      return "ROLE_UNSPECIFIED";
    case Host_Role.KAFKA:
      return "KAFKA";
    case Host_Role.ZOOKEEPER:
      return "ZOOKEEPER";
    default:
      return "UNKNOWN";
  }
}

export enum Host_Health {
  /** UNKNOWN - health of the host is unknown. */
  UNKNOWN = 0,
  /** ALIVE - the host is performing all its functions normally. */
  ALIVE = 1,
  /** DEAD - the host is inoperable and cannot perform any of its essential functions. */
  DEAD = 2,
  /** DEGRADED - the host is degraded and can perform only some of its essential functions. */
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

export interface Access {
  $type: "yandex.cloud.mdb.kafka.v1.Access";
  /** Allow access for DataTransfer. */
  dataTransfer: boolean;
}

const baseCluster: object = {
  $type: "yandex.cloud.mdb.kafka.v1.Cluster",
  id: "",
  folderId: "",
  name: "",
  description: "",
  environment: 0,
  networkId: "",
  health: 0,
  status: 0,
  securityGroupIds: "",
  hostGroupIds: "",
  deletionProtection: false,
};

export const Cluster = {
  $type: "yandex.cloud.mdb.kafka.v1.Cluster" as const,

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
          $type: "yandex.cloud.mdb.kafka.v1.Cluster.LabelsEntry",
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
      ConfigSpec.encode(message.config, writer.uint32(74).fork()).ldelim();
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
    for (const v of message.hostGroupIds) {
      writer.uint32(114).string(v!);
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
          message.config = ConfigSpec.decode(reader, reader.uint32());
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
          message.hostGroupIds.push(reader.string());
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
        ? ConfigSpec.fromJSON(object.config)
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
    message.hostGroupIds = (object.hostGroupIds ?? []).map((e: any) =>
      String(e)
    );
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
        ? ConfigSpec.toJSON(message.config)
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
    if (message.hostGroupIds) {
      obj.hostGroupIds = message.hostGroupIds.map((e) => e);
    } else {
      obj.hostGroupIds = [];
    }
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
        ? ConfigSpec.fromPartial(object.config)
        : undefined;
    message.networkId = object.networkId ?? "";
    message.health = object.health ?? 0;
    message.status = object.status ?? 0;
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.hostGroupIds = object.hostGroupIds?.map((e) => e) || [];
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
  $type: "yandex.cloud.mdb.kafka.v1.Cluster.LabelsEntry",
  key: "",
  value: "",
};

export const Cluster_LabelsEntry = {
  $type: "yandex.cloud.mdb.kafka.v1.Cluster.LabelsEntry" as const,

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
  $type: "yandex.cloud.mdb.kafka.v1.Monitoring",
  name: "",
  description: "",
  link: "",
};

export const Monitoring = {
  $type: "yandex.cloud.mdb.kafka.v1.Monitoring" as const,

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

const baseConfigSpec: object = {
  $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec",
  version: "",
  zoneId: "",
  assignPublicIp: false,
  unmanagedTopics: false,
  schemaRegistry: false,
};

export const ConfigSpec = {
  $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec" as const,

  encode(
    message: ConfigSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.kafka !== undefined) {
      ConfigSpec_Kafka.encode(message.kafka, writer.uint32(18).fork()).ldelim();
    }
    if (message.zookeeper !== undefined) {
      ConfigSpec_Zookeeper.encode(
        message.zookeeper,
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.zoneId) {
      writer.uint32(34).string(v!);
    }
    if (message.brokersCount !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.brokersCount! },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.assignPublicIp === true) {
      writer.uint32(48).bool(message.assignPublicIp);
    }
    if (message.unmanagedTopics === true) {
      writer.uint32(56).bool(message.unmanagedTopics);
    }
    if (message.schemaRegistry === true) {
      writer.uint32(64).bool(message.schemaRegistry);
    }
    if (message.access !== undefined) {
      Access.encode(message.access, writer.uint32(74).fork()).ldelim();
    }
    if (message.restApiConfig !== undefined) {
      ConfigSpec_RestAPIConfig.encode(
        message.restApiConfig,
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConfigSpec } as ConfigSpec;
    message.zoneId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.kafka = ConfigSpec_Kafka.decode(reader, reader.uint32());
          break;
        case 3:
          message.zookeeper = ConfigSpec_Zookeeper.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.zoneId.push(reader.string());
          break;
        case 5:
          message.brokersCount = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 6:
          message.assignPublicIp = reader.bool();
          break;
        case 7:
          message.unmanagedTopics = reader.bool();
          break;
        case 8:
          message.schemaRegistry = reader.bool();
          break;
        case 9:
          message.access = Access.decode(reader, reader.uint32());
          break;
        case 10:
          message.restApiConfig = ConfigSpec_RestAPIConfig.decode(
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

  fromJSON(object: any): ConfigSpec {
    const message = { ...baseConfigSpec } as ConfigSpec;
    message.version =
      object.version !== undefined && object.version !== null
        ? String(object.version)
        : "";
    message.kafka =
      object.kafka !== undefined && object.kafka !== null
        ? ConfigSpec_Kafka.fromJSON(object.kafka)
        : undefined;
    message.zookeeper =
      object.zookeeper !== undefined && object.zookeeper !== null
        ? ConfigSpec_Zookeeper.fromJSON(object.zookeeper)
        : undefined;
    message.zoneId = (object.zoneId ?? []).map((e: any) => String(e));
    message.brokersCount =
      object.brokersCount !== undefined && object.brokersCount !== null
        ? Number(object.brokersCount)
        : undefined;
    message.assignPublicIp =
      object.assignPublicIp !== undefined && object.assignPublicIp !== null
        ? Boolean(object.assignPublicIp)
        : false;
    message.unmanagedTopics =
      object.unmanagedTopics !== undefined && object.unmanagedTopics !== null
        ? Boolean(object.unmanagedTopics)
        : false;
    message.schemaRegistry =
      object.schemaRegistry !== undefined && object.schemaRegistry !== null
        ? Boolean(object.schemaRegistry)
        : false;
    message.access =
      object.access !== undefined && object.access !== null
        ? Access.fromJSON(object.access)
        : undefined;
    message.restApiConfig =
      object.restApiConfig !== undefined && object.restApiConfig !== null
        ? ConfigSpec_RestAPIConfig.fromJSON(object.restApiConfig)
        : undefined;
    return message;
  },

  toJSON(message: ConfigSpec): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.kafka !== undefined &&
      (obj.kafka = message.kafka
        ? ConfigSpec_Kafka.toJSON(message.kafka)
        : undefined);
    message.zookeeper !== undefined &&
      (obj.zookeeper = message.zookeeper
        ? ConfigSpec_Zookeeper.toJSON(message.zookeeper)
        : undefined);
    if (message.zoneId) {
      obj.zoneId = message.zoneId.map((e) => e);
    } else {
      obj.zoneId = [];
    }
    message.brokersCount !== undefined &&
      (obj.brokersCount = message.brokersCount);
    message.assignPublicIp !== undefined &&
      (obj.assignPublicIp = message.assignPublicIp);
    message.unmanagedTopics !== undefined &&
      (obj.unmanagedTopics = message.unmanagedTopics);
    message.schemaRegistry !== undefined &&
      (obj.schemaRegistry = message.schemaRegistry);
    message.access !== undefined &&
      (obj.access = message.access ? Access.toJSON(message.access) : undefined);
    message.restApiConfig !== undefined &&
      (obj.restApiConfig = message.restApiConfig
        ? ConfigSpec_RestAPIConfig.toJSON(message.restApiConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfigSpec>, I>>(
    object: I
  ): ConfigSpec {
    const message = { ...baseConfigSpec } as ConfigSpec;
    message.version = object.version ?? "";
    message.kafka =
      object.kafka !== undefined && object.kafka !== null
        ? ConfigSpec_Kafka.fromPartial(object.kafka)
        : undefined;
    message.zookeeper =
      object.zookeeper !== undefined && object.zookeeper !== null
        ? ConfigSpec_Zookeeper.fromPartial(object.zookeeper)
        : undefined;
    message.zoneId = object.zoneId?.map((e) => e) || [];
    message.brokersCount = object.brokersCount ?? undefined;
    message.assignPublicIp = object.assignPublicIp ?? false;
    message.unmanagedTopics = object.unmanagedTopics ?? false;
    message.schemaRegistry = object.schemaRegistry ?? false;
    message.access =
      object.access !== undefined && object.access !== null
        ? Access.fromPartial(object.access)
        : undefined;
    message.restApiConfig =
      object.restApiConfig !== undefined && object.restApiConfig !== null
        ? ConfigSpec_RestAPIConfig.fromPartial(object.restApiConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConfigSpec.$type, ConfigSpec);

const baseConfigSpec_Kafka: object = {
  $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.Kafka",
};

export const ConfigSpec_Kafka = {
  $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.Kafka" as const,

  encode(
    message: ConfigSpec_Kafka,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    if (message.kafkaConfig28 !== undefined) {
      Kafkaconfig28.encode(
        message.kafkaConfig28,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.kafkaConfig3 !== undefined) {
      KafkaConfig3.encode(
        message.kafkaConfig3,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigSpec_Kafka {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConfigSpec_Kafka } as ConfigSpec_Kafka;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        case 4:
          message.kafkaConfig28 = Kafkaconfig28.decode(reader, reader.uint32());
          break;
        case 5:
          message.kafkaConfig3 = KafkaConfig3.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfigSpec_Kafka {
    const message = { ...baseConfigSpec_Kafka } as ConfigSpec_Kafka;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    message.kafkaConfig28 =
      object.kafkaConfig_2_8 !== undefined && object.kafkaConfig_2_8 !== null
        ? Kafkaconfig28.fromJSON(object.kafkaConfig_2_8)
        : undefined;
    message.kafkaConfig3 =
      object.kafkaConfig_3 !== undefined && object.kafkaConfig_3 !== null
        ? KafkaConfig3.fromJSON(object.kafkaConfig_3)
        : undefined;
    return message;
  },

  toJSON(message: ConfigSpec_Kafka): unknown {
    const obj: any = {};
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    message.kafkaConfig28 !== undefined &&
      (obj.kafkaConfig_2_8 = message.kafkaConfig28
        ? Kafkaconfig28.toJSON(message.kafkaConfig28)
        : undefined);
    message.kafkaConfig3 !== undefined &&
      (obj.kafkaConfig_3 = message.kafkaConfig3
        ? KafkaConfig3.toJSON(message.kafkaConfig3)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfigSpec_Kafka>, I>>(
    object: I
  ): ConfigSpec_Kafka {
    const message = { ...baseConfigSpec_Kafka } as ConfigSpec_Kafka;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    message.kafkaConfig28 =
      object.kafkaConfig28 !== undefined && object.kafkaConfig28 !== null
        ? Kafkaconfig28.fromPartial(object.kafkaConfig28)
        : undefined;
    message.kafkaConfig3 =
      object.kafkaConfig3 !== undefined && object.kafkaConfig3 !== null
        ? KafkaConfig3.fromPartial(object.kafkaConfig3)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConfigSpec_Kafka.$type, ConfigSpec_Kafka);

const baseConfigSpec_Zookeeper: object = {
  $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.Zookeeper",
};

export const ConfigSpec_Zookeeper = {
  $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.Zookeeper" as const,

  encode(
    message: ConfigSpec_Zookeeper,
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
  ): ConfigSpec_Zookeeper {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConfigSpec_Zookeeper } as ConfigSpec_Zookeeper;
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

  fromJSON(object: any): ConfigSpec_Zookeeper {
    const message = { ...baseConfigSpec_Zookeeper } as ConfigSpec_Zookeeper;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: ConfigSpec_Zookeeper): unknown {
    const obj: any = {};
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfigSpec_Zookeeper>, I>>(
    object: I
  ): ConfigSpec_Zookeeper {
    const message = { ...baseConfigSpec_Zookeeper } as ConfigSpec_Zookeeper;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConfigSpec_Zookeeper.$type, ConfigSpec_Zookeeper);

const baseConfigSpec_RestAPIConfig: object = {
  $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.RestAPIConfig",
  enabled: false,
};

export const ConfigSpec_RestAPIConfig = {
  $type: "yandex.cloud.mdb.kafka.v1.ConfigSpec.RestAPIConfig" as const,

  encode(
    message: ConfigSpec_RestAPIConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ConfigSpec_RestAPIConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseConfigSpec_RestAPIConfig,
    } as ConfigSpec_RestAPIConfig;
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

  fromJSON(object: any): ConfigSpec_RestAPIConfig {
    const message = {
      ...baseConfigSpec_RestAPIConfig,
    } as ConfigSpec_RestAPIConfig;
    message.enabled =
      object.enabled !== undefined && object.enabled !== null
        ? Boolean(object.enabled)
        : false;
    return message;
  },

  toJSON(message: ConfigSpec_RestAPIConfig): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfigSpec_RestAPIConfig>, I>>(
    object: I
  ): ConfigSpec_RestAPIConfig {
    const message = {
      ...baseConfigSpec_RestAPIConfig,
    } as ConfigSpec_RestAPIConfig;
    message.enabled = object.enabled ?? false;
    return message;
  },
};

messageTypeRegistry.set(
  ConfigSpec_RestAPIConfig.$type,
  ConfigSpec_RestAPIConfig
);

const baseResources: object = {
  $type: "yandex.cloud.mdb.kafka.v1.Resources",
  resourcePresetId: "",
  diskSize: 0,
  diskTypeId: "",
};

export const Resources = {
  $type: "yandex.cloud.mdb.kafka.v1.Resources" as const,

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

const baseKafkaconfig28: object = {
  $type: "yandex.cloud.mdb.kafka.v1.KafkaConfig2_8",
  compressionType: 0,
  sslCipherSuites: "",
  saslEnabledMechanisms: 0,
};

export const Kafkaconfig28 = {
  $type: "yandex.cloud.mdb.kafka.v1.KafkaConfig2_8" as const,

  encode(
    message: Kafkaconfig28,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.compressionType !== 0) {
      writer.uint32(8).int32(message.compressionType);
    }
    if (message.logFlushIntervalMessages !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.logFlushIntervalMessages!,
        },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.logFlushIntervalMs !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.logFlushIntervalMs!,
        },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.logFlushSchedulerIntervalMs !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.logFlushSchedulerIntervalMs!,
        },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.logRetentionBytes !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.logRetentionBytes!,
        },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.logRetentionHours !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.logRetentionHours!,
        },
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.logRetentionMinutes !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.logRetentionMinutes!,
        },
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.logRetentionMs !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logRetentionMs! },
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.logSegmentBytes !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.logSegmentBytes!,
        },
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.logPreallocate !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.logPreallocate! },
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.socketSendBufferBytes !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.socketSendBufferBytes!,
        },
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.socketReceiveBufferBytes !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.socketReceiveBufferBytes!,
        },
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.autoCreateTopicsEnable !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.autoCreateTopicsEnable!,
        },
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.numPartitions !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.numPartitions! },
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.defaultReplicationFactor !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.defaultReplicationFactor!,
        },
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.messageMaxBytes !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.messageMaxBytes!,
        },
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.replicaFetchMaxBytes !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.replicaFetchMaxBytes!,
        },
        writer.uint32(138).fork()
      ).ldelim();
    }
    for (const v of message.sslCipherSuites) {
      writer.uint32(146).string(v!);
    }
    if (message.offsetsRetentionMinutes !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.offsetsRetentionMinutes!,
        },
        writer.uint32(154).fork()
      ).ldelim();
    }
    writer.uint32(162).fork();
    for (const v of message.saslEnabledMechanisms) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Kafkaconfig28 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseKafkaconfig28 } as Kafkaconfig28;
    message.sslCipherSuites = [];
    message.saslEnabledMechanisms = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.compressionType = reader.int32() as any;
          break;
        case 2:
          message.logFlushIntervalMessages = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.logFlushIntervalMs = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 4:
          message.logFlushSchedulerIntervalMs = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 5:
          message.logRetentionBytes = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 6:
          message.logRetentionHours = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 7:
          message.logRetentionMinutes = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 8:
          message.logRetentionMs = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 9:
          message.logSegmentBytes = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 10:
          message.logPreallocate = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 11:
          message.socketSendBufferBytes = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 12:
          message.socketReceiveBufferBytes = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 13:
          message.autoCreateTopicsEnable = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 14:
          message.numPartitions = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 15:
          message.defaultReplicationFactor = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 16:
          message.messageMaxBytes = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 17:
          message.replicaFetchMaxBytes = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 18:
          message.sslCipherSuites.push(reader.string());
          break;
        case 19:
          message.offsetsRetentionMinutes = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 20:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.saslEnabledMechanisms.push(reader.int32() as any);
            }
          } else {
            message.saslEnabledMechanisms.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Kafkaconfig28 {
    const message = { ...baseKafkaconfig28 } as Kafkaconfig28;
    message.compressionType =
      object.compressionType !== undefined && object.compressionType !== null
        ? compressionTypeFromJSON(object.compressionType)
        : 0;
    message.logFlushIntervalMessages =
      object.logFlushIntervalMessages !== undefined &&
      object.logFlushIntervalMessages !== null
        ? Number(object.logFlushIntervalMessages)
        : undefined;
    message.logFlushIntervalMs =
      object.logFlushIntervalMs !== undefined &&
      object.logFlushIntervalMs !== null
        ? Number(object.logFlushIntervalMs)
        : undefined;
    message.logFlushSchedulerIntervalMs =
      object.logFlushSchedulerIntervalMs !== undefined &&
      object.logFlushSchedulerIntervalMs !== null
        ? Number(object.logFlushSchedulerIntervalMs)
        : undefined;
    message.logRetentionBytes =
      object.logRetentionBytes !== undefined &&
      object.logRetentionBytes !== null
        ? Number(object.logRetentionBytes)
        : undefined;
    message.logRetentionHours =
      object.logRetentionHours !== undefined &&
      object.logRetentionHours !== null
        ? Number(object.logRetentionHours)
        : undefined;
    message.logRetentionMinutes =
      object.logRetentionMinutes !== undefined &&
      object.logRetentionMinutes !== null
        ? Number(object.logRetentionMinutes)
        : undefined;
    message.logRetentionMs =
      object.logRetentionMs !== undefined && object.logRetentionMs !== null
        ? Number(object.logRetentionMs)
        : undefined;
    message.logSegmentBytes =
      object.logSegmentBytes !== undefined && object.logSegmentBytes !== null
        ? Number(object.logSegmentBytes)
        : undefined;
    message.logPreallocate =
      object.logPreallocate !== undefined && object.logPreallocate !== null
        ? Boolean(object.logPreallocate)
        : undefined;
    message.socketSendBufferBytes =
      object.socketSendBufferBytes !== undefined &&
      object.socketSendBufferBytes !== null
        ? Number(object.socketSendBufferBytes)
        : undefined;
    message.socketReceiveBufferBytes =
      object.socketReceiveBufferBytes !== undefined &&
      object.socketReceiveBufferBytes !== null
        ? Number(object.socketReceiveBufferBytes)
        : undefined;
    message.autoCreateTopicsEnable =
      object.autoCreateTopicsEnable !== undefined &&
      object.autoCreateTopicsEnable !== null
        ? Boolean(object.autoCreateTopicsEnable)
        : undefined;
    message.numPartitions =
      object.numPartitions !== undefined && object.numPartitions !== null
        ? Number(object.numPartitions)
        : undefined;
    message.defaultReplicationFactor =
      object.defaultReplicationFactor !== undefined &&
      object.defaultReplicationFactor !== null
        ? Number(object.defaultReplicationFactor)
        : undefined;
    message.messageMaxBytes =
      object.messageMaxBytes !== undefined && object.messageMaxBytes !== null
        ? Number(object.messageMaxBytes)
        : undefined;
    message.replicaFetchMaxBytes =
      object.replicaFetchMaxBytes !== undefined &&
      object.replicaFetchMaxBytes !== null
        ? Number(object.replicaFetchMaxBytes)
        : undefined;
    message.sslCipherSuites = (object.sslCipherSuites ?? []).map((e: any) =>
      String(e)
    );
    message.offsetsRetentionMinutes =
      object.offsetsRetentionMinutes !== undefined &&
      object.offsetsRetentionMinutes !== null
        ? Number(object.offsetsRetentionMinutes)
        : undefined;
    message.saslEnabledMechanisms = (object.saslEnabledMechanisms ?? []).map(
      (e: any) => saslMechanismFromJSON(e)
    );
    return message;
  },

  toJSON(message: Kafkaconfig28): unknown {
    const obj: any = {};
    message.compressionType !== undefined &&
      (obj.compressionType = compressionTypeToJSON(message.compressionType));
    message.logFlushIntervalMessages !== undefined &&
      (obj.logFlushIntervalMessages = message.logFlushIntervalMessages);
    message.logFlushIntervalMs !== undefined &&
      (obj.logFlushIntervalMs = message.logFlushIntervalMs);
    message.logFlushSchedulerIntervalMs !== undefined &&
      (obj.logFlushSchedulerIntervalMs = message.logFlushSchedulerIntervalMs);
    message.logRetentionBytes !== undefined &&
      (obj.logRetentionBytes = message.logRetentionBytes);
    message.logRetentionHours !== undefined &&
      (obj.logRetentionHours = message.logRetentionHours);
    message.logRetentionMinutes !== undefined &&
      (obj.logRetentionMinutes = message.logRetentionMinutes);
    message.logRetentionMs !== undefined &&
      (obj.logRetentionMs = message.logRetentionMs);
    message.logSegmentBytes !== undefined &&
      (obj.logSegmentBytes = message.logSegmentBytes);
    message.logPreallocate !== undefined &&
      (obj.logPreallocate = message.logPreallocate);
    message.socketSendBufferBytes !== undefined &&
      (obj.socketSendBufferBytes = message.socketSendBufferBytes);
    message.socketReceiveBufferBytes !== undefined &&
      (obj.socketReceiveBufferBytes = message.socketReceiveBufferBytes);
    message.autoCreateTopicsEnable !== undefined &&
      (obj.autoCreateTopicsEnable = message.autoCreateTopicsEnable);
    message.numPartitions !== undefined &&
      (obj.numPartitions = message.numPartitions);
    message.defaultReplicationFactor !== undefined &&
      (obj.defaultReplicationFactor = message.defaultReplicationFactor);
    message.messageMaxBytes !== undefined &&
      (obj.messageMaxBytes = message.messageMaxBytes);
    message.replicaFetchMaxBytes !== undefined &&
      (obj.replicaFetchMaxBytes = message.replicaFetchMaxBytes);
    if (message.sslCipherSuites) {
      obj.sslCipherSuites = message.sslCipherSuites.map((e) => e);
    } else {
      obj.sslCipherSuites = [];
    }
    message.offsetsRetentionMinutes !== undefined &&
      (obj.offsetsRetentionMinutes = message.offsetsRetentionMinutes);
    if (message.saslEnabledMechanisms) {
      obj.saslEnabledMechanisms = message.saslEnabledMechanisms.map((e) =>
        saslMechanismToJSON(e)
      );
    } else {
      obj.saslEnabledMechanisms = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Kafkaconfig28>, I>>(
    object: I
  ): Kafkaconfig28 {
    const message = { ...baseKafkaconfig28 } as Kafkaconfig28;
    message.compressionType = object.compressionType ?? 0;
    message.logFlushIntervalMessages =
      object.logFlushIntervalMessages ?? undefined;
    message.logFlushIntervalMs = object.logFlushIntervalMs ?? undefined;
    message.logFlushSchedulerIntervalMs =
      object.logFlushSchedulerIntervalMs ?? undefined;
    message.logRetentionBytes = object.logRetentionBytes ?? undefined;
    message.logRetentionHours = object.logRetentionHours ?? undefined;
    message.logRetentionMinutes = object.logRetentionMinutes ?? undefined;
    message.logRetentionMs = object.logRetentionMs ?? undefined;
    message.logSegmentBytes = object.logSegmentBytes ?? undefined;
    message.logPreallocate = object.logPreallocate ?? undefined;
    message.socketSendBufferBytes = object.socketSendBufferBytes ?? undefined;
    message.socketReceiveBufferBytes =
      object.socketReceiveBufferBytes ?? undefined;
    message.autoCreateTopicsEnable = object.autoCreateTopicsEnable ?? undefined;
    message.numPartitions = object.numPartitions ?? undefined;
    message.defaultReplicationFactor =
      object.defaultReplicationFactor ?? undefined;
    message.messageMaxBytes = object.messageMaxBytes ?? undefined;
    message.replicaFetchMaxBytes = object.replicaFetchMaxBytes ?? undefined;
    message.sslCipherSuites = object.sslCipherSuites?.map((e) => e) || [];
    message.offsetsRetentionMinutes =
      object.offsetsRetentionMinutes ?? undefined;
    message.saslEnabledMechanisms =
      object.saslEnabledMechanisms?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Kafkaconfig28.$type, Kafkaconfig28);

const baseKafkaConfig3: object = {
  $type: "yandex.cloud.mdb.kafka.v1.KafkaConfig3",
  compressionType: 0,
  sslCipherSuites: "",
  saslEnabledMechanisms: 0,
};

export const KafkaConfig3 = {
  $type: "yandex.cloud.mdb.kafka.v1.KafkaConfig3" as const,

  encode(
    message: KafkaConfig3,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.compressionType !== 0) {
      writer.uint32(8).int32(message.compressionType);
    }
    if (message.logFlushIntervalMessages !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.logFlushIntervalMessages!,
        },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.logFlushIntervalMs !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.logFlushIntervalMs!,
        },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.logFlushSchedulerIntervalMs !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.logFlushSchedulerIntervalMs!,
        },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.logRetentionBytes !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.logRetentionBytes!,
        },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.logRetentionHours !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.logRetentionHours!,
        },
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.logRetentionMinutes !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.logRetentionMinutes!,
        },
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.logRetentionMs !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logRetentionMs! },
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.logSegmentBytes !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.logSegmentBytes!,
        },
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.logPreallocate !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.logPreallocate! },
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.socketSendBufferBytes !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.socketSendBufferBytes!,
        },
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.socketReceiveBufferBytes !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.socketReceiveBufferBytes!,
        },
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.autoCreateTopicsEnable !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.autoCreateTopicsEnable!,
        },
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.numPartitions !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.numPartitions! },
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.defaultReplicationFactor !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.defaultReplicationFactor!,
        },
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.messageMaxBytes !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.messageMaxBytes!,
        },
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.replicaFetchMaxBytes !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.replicaFetchMaxBytes!,
        },
        writer.uint32(138).fork()
      ).ldelim();
    }
    for (const v of message.sslCipherSuites) {
      writer.uint32(146).string(v!);
    }
    if (message.offsetsRetentionMinutes !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.offsetsRetentionMinutes!,
        },
        writer.uint32(154).fork()
      ).ldelim();
    }
    writer.uint32(162).fork();
    for (const v of message.saslEnabledMechanisms) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KafkaConfig3 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseKafkaConfig3 } as KafkaConfig3;
    message.sslCipherSuites = [];
    message.saslEnabledMechanisms = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.compressionType = reader.int32() as any;
          break;
        case 2:
          message.logFlushIntervalMessages = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.logFlushIntervalMs = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 4:
          message.logFlushSchedulerIntervalMs = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 5:
          message.logRetentionBytes = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 6:
          message.logRetentionHours = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 7:
          message.logRetentionMinutes = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 8:
          message.logRetentionMs = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 9:
          message.logSegmentBytes = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 10:
          message.logPreallocate = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 11:
          message.socketSendBufferBytes = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 12:
          message.socketReceiveBufferBytes = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 13:
          message.autoCreateTopicsEnable = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 14:
          message.numPartitions = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 15:
          message.defaultReplicationFactor = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 16:
          message.messageMaxBytes = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 17:
          message.replicaFetchMaxBytes = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 18:
          message.sslCipherSuites.push(reader.string());
          break;
        case 19:
          message.offsetsRetentionMinutes = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 20:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.saslEnabledMechanisms.push(reader.int32() as any);
            }
          } else {
            message.saslEnabledMechanisms.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KafkaConfig3 {
    const message = { ...baseKafkaConfig3 } as KafkaConfig3;
    message.compressionType =
      object.compressionType !== undefined && object.compressionType !== null
        ? compressionTypeFromJSON(object.compressionType)
        : 0;
    message.logFlushIntervalMessages =
      object.logFlushIntervalMessages !== undefined &&
      object.logFlushIntervalMessages !== null
        ? Number(object.logFlushIntervalMessages)
        : undefined;
    message.logFlushIntervalMs =
      object.logFlushIntervalMs !== undefined &&
      object.logFlushIntervalMs !== null
        ? Number(object.logFlushIntervalMs)
        : undefined;
    message.logFlushSchedulerIntervalMs =
      object.logFlushSchedulerIntervalMs !== undefined &&
      object.logFlushSchedulerIntervalMs !== null
        ? Number(object.logFlushSchedulerIntervalMs)
        : undefined;
    message.logRetentionBytes =
      object.logRetentionBytes !== undefined &&
      object.logRetentionBytes !== null
        ? Number(object.logRetentionBytes)
        : undefined;
    message.logRetentionHours =
      object.logRetentionHours !== undefined &&
      object.logRetentionHours !== null
        ? Number(object.logRetentionHours)
        : undefined;
    message.logRetentionMinutes =
      object.logRetentionMinutes !== undefined &&
      object.logRetentionMinutes !== null
        ? Number(object.logRetentionMinutes)
        : undefined;
    message.logRetentionMs =
      object.logRetentionMs !== undefined && object.logRetentionMs !== null
        ? Number(object.logRetentionMs)
        : undefined;
    message.logSegmentBytes =
      object.logSegmentBytes !== undefined && object.logSegmentBytes !== null
        ? Number(object.logSegmentBytes)
        : undefined;
    message.logPreallocate =
      object.logPreallocate !== undefined && object.logPreallocate !== null
        ? Boolean(object.logPreallocate)
        : undefined;
    message.socketSendBufferBytes =
      object.socketSendBufferBytes !== undefined &&
      object.socketSendBufferBytes !== null
        ? Number(object.socketSendBufferBytes)
        : undefined;
    message.socketReceiveBufferBytes =
      object.socketReceiveBufferBytes !== undefined &&
      object.socketReceiveBufferBytes !== null
        ? Number(object.socketReceiveBufferBytes)
        : undefined;
    message.autoCreateTopicsEnable =
      object.autoCreateTopicsEnable !== undefined &&
      object.autoCreateTopicsEnable !== null
        ? Boolean(object.autoCreateTopicsEnable)
        : undefined;
    message.numPartitions =
      object.numPartitions !== undefined && object.numPartitions !== null
        ? Number(object.numPartitions)
        : undefined;
    message.defaultReplicationFactor =
      object.defaultReplicationFactor !== undefined &&
      object.defaultReplicationFactor !== null
        ? Number(object.defaultReplicationFactor)
        : undefined;
    message.messageMaxBytes =
      object.messageMaxBytes !== undefined && object.messageMaxBytes !== null
        ? Number(object.messageMaxBytes)
        : undefined;
    message.replicaFetchMaxBytes =
      object.replicaFetchMaxBytes !== undefined &&
      object.replicaFetchMaxBytes !== null
        ? Number(object.replicaFetchMaxBytes)
        : undefined;
    message.sslCipherSuites = (object.sslCipherSuites ?? []).map((e: any) =>
      String(e)
    );
    message.offsetsRetentionMinutes =
      object.offsetsRetentionMinutes !== undefined &&
      object.offsetsRetentionMinutes !== null
        ? Number(object.offsetsRetentionMinutes)
        : undefined;
    message.saslEnabledMechanisms = (object.saslEnabledMechanisms ?? []).map(
      (e: any) => saslMechanismFromJSON(e)
    );
    return message;
  },

  toJSON(message: KafkaConfig3): unknown {
    const obj: any = {};
    message.compressionType !== undefined &&
      (obj.compressionType = compressionTypeToJSON(message.compressionType));
    message.logFlushIntervalMessages !== undefined &&
      (obj.logFlushIntervalMessages = message.logFlushIntervalMessages);
    message.logFlushIntervalMs !== undefined &&
      (obj.logFlushIntervalMs = message.logFlushIntervalMs);
    message.logFlushSchedulerIntervalMs !== undefined &&
      (obj.logFlushSchedulerIntervalMs = message.logFlushSchedulerIntervalMs);
    message.logRetentionBytes !== undefined &&
      (obj.logRetentionBytes = message.logRetentionBytes);
    message.logRetentionHours !== undefined &&
      (obj.logRetentionHours = message.logRetentionHours);
    message.logRetentionMinutes !== undefined &&
      (obj.logRetentionMinutes = message.logRetentionMinutes);
    message.logRetentionMs !== undefined &&
      (obj.logRetentionMs = message.logRetentionMs);
    message.logSegmentBytes !== undefined &&
      (obj.logSegmentBytes = message.logSegmentBytes);
    message.logPreallocate !== undefined &&
      (obj.logPreallocate = message.logPreallocate);
    message.socketSendBufferBytes !== undefined &&
      (obj.socketSendBufferBytes = message.socketSendBufferBytes);
    message.socketReceiveBufferBytes !== undefined &&
      (obj.socketReceiveBufferBytes = message.socketReceiveBufferBytes);
    message.autoCreateTopicsEnable !== undefined &&
      (obj.autoCreateTopicsEnable = message.autoCreateTopicsEnable);
    message.numPartitions !== undefined &&
      (obj.numPartitions = message.numPartitions);
    message.defaultReplicationFactor !== undefined &&
      (obj.defaultReplicationFactor = message.defaultReplicationFactor);
    message.messageMaxBytes !== undefined &&
      (obj.messageMaxBytes = message.messageMaxBytes);
    message.replicaFetchMaxBytes !== undefined &&
      (obj.replicaFetchMaxBytes = message.replicaFetchMaxBytes);
    if (message.sslCipherSuites) {
      obj.sslCipherSuites = message.sslCipherSuites.map((e) => e);
    } else {
      obj.sslCipherSuites = [];
    }
    message.offsetsRetentionMinutes !== undefined &&
      (obj.offsetsRetentionMinutes = message.offsetsRetentionMinutes);
    if (message.saslEnabledMechanisms) {
      obj.saslEnabledMechanisms = message.saslEnabledMechanisms.map((e) =>
        saslMechanismToJSON(e)
      );
    } else {
      obj.saslEnabledMechanisms = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KafkaConfig3>, I>>(
    object: I
  ): KafkaConfig3 {
    const message = { ...baseKafkaConfig3 } as KafkaConfig3;
    message.compressionType = object.compressionType ?? 0;
    message.logFlushIntervalMessages =
      object.logFlushIntervalMessages ?? undefined;
    message.logFlushIntervalMs = object.logFlushIntervalMs ?? undefined;
    message.logFlushSchedulerIntervalMs =
      object.logFlushSchedulerIntervalMs ?? undefined;
    message.logRetentionBytes = object.logRetentionBytes ?? undefined;
    message.logRetentionHours = object.logRetentionHours ?? undefined;
    message.logRetentionMinutes = object.logRetentionMinutes ?? undefined;
    message.logRetentionMs = object.logRetentionMs ?? undefined;
    message.logSegmentBytes = object.logSegmentBytes ?? undefined;
    message.logPreallocate = object.logPreallocate ?? undefined;
    message.socketSendBufferBytes = object.socketSendBufferBytes ?? undefined;
    message.socketReceiveBufferBytes =
      object.socketReceiveBufferBytes ?? undefined;
    message.autoCreateTopicsEnable = object.autoCreateTopicsEnable ?? undefined;
    message.numPartitions = object.numPartitions ?? undefined;
    message.defaultReplicationFactor =
      object.defaultReplicationFactor ?? undefined;
    message.messageMaxBytes = object.messageMaxBytes ?? undefined;
    message.replicaFetchMaxBytes = object.replicaFetchMaxBytes ?? undefined;
    message.sslCipherSuites = object.sslCipherSuites?.map((e) => e) || [];
    message.offsetsRetentionMinutes =
      object.offsetsRetentionMinutes ?? undefined;
    message.saslEnabledMechanisms =
      object.saslEnabledMechanisms?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(KafkaConfig3.$type, KafkaConfig3);

const baseHost: object = {
  $type: "yandex.cloud.mdb.kafka.v1.Host",
  name: "",
  clusterId: "",
  zoneId: "",
  role: 0,
  health: 0,
  subnetId: "",
  assignPublicIp: false,
};

export const Host = {
  $type: "yandex.cloud.mdb.kafka.v1.Host" as const,

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
    if (message.role !== 0) {
      writer.uint32(32).int32(message.role);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(42).fork()).ldelim();
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Host {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHost } as Host;
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
          message.role = reader.int32() as any;
          break;
        case 5:
          message.resources = Resources.decode(reader, reader.uint32());
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
    message.role =
      object.role !== undefined && object.role !== null
        ? host_RoleFromJSON(object.role)
        : 0;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
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
    return message;
  },

  toJSON(message: Host): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.role !== undefined && (obj.role = host_RoleToJSON(message.role));
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    message.health !== undefined &&
      (obj.health = host_HealthToJSON(message.health));
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    message.assignPublicIp !== undefined &&
      (obj.assignPublicIp = message.assignPublicIp);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Host>, I>>(object: I): Host {
    const message = { ...baseHost } as Host;
    message.name = object.name ?? "";
    message.clusterId = object.clusterId ?? "";
    message.zoneId = object.zoneId ?? "";
    message.role = object.role ?? 0;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    message.health = object.health ?? 0;
    message.subnetId = object.subnetId ?? "";
    message.assignPublicIp = object.assignPublicIp ?? false;
    return message;
  },
};

messageTypeRegistry.set(Host.$type, Host);

const baseAccess: object = {
  $type: "yandex.cloud.mdb.kafka.v1.Access",
  dataTransfer: false,
};

export const Access = {
  $type: "yandex.cloud.mdb.kafka.v1.Access" as const,

  encode(
    message: Access,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dataTransfer === true) {
      writer.uint32(8).bool(message.dataTransfer);
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
    return message;
  },

  toJSON(message: Access): unknown {
    const obj: any = {};
    message.dataTransfer !== undefined &&
      (obj.dataTransfer = message.dataTransfer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Access>, I>>(object: I): Access {
    const message = { ...baseAccess } as Access;
    message.dataTransfer = object.dataTransfer ?? false;
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
