/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Int64Value } from "../../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.mdb.kafka.v1";

/**
 * An object that represents an Apache Kafka® connector.
 *
 * See [the documentation](/docs/managed-kafka/concepts/connectors) for details.
 */
export interface ConnectorSpec {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorSpec";
  /** Name of the connector. */
  name: string;
  /** Maximum number of connector tasks. Default value is the number of brokers. */
  tasksMax?: number;
  /**
   * A set of properties passed to Managed Service for Apache Kafka® with the connector configuration.
   * Example: `sync.topics.config.enabled: true`.
   */
  properties: { [key: string]: string };
  /** Configuration of the MirrorMaker connector. */
  connectorConfigMirrormaker?: ConnectorConfigMirrorMakerSpec | undefined;
  /** Configuration of S3-Sink connector. */
  connectorConfigS3Sink?: ConnectorConfigS3SinkSpec | undefined;
}

export interface ConnectorSpec_PropertiesEntry {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorSpec.PropertiesEntry";
  key: string;
  value: string;
}

export interface UpdateConnectorSpec {
  $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorSpec";
  /** Maximum number of connector tasks to update. */
  tasksMax?: number;
  /**
   * A set of new or changed properties to update for the connector. They are passed with the connector configuration to Managed Service for Apache Kafka®.
   * Example: `sync.topics.config.enabled: false`.
   */
  properties: { [key: string]: string };
  /** Configuration of the MirrorMaker connector. */
  connectorConfigMirrormaker?: ConnectorConfigMirrorMakerSpec | undefined;
  /** Update specification for S3-Sink Connector. */
  connectorConfigS3Sink?: UpdateConnectorConfigS3SinkSpec | undefined;
}

export interface UpdateConnectorSpec_PropertiesEntry {
  $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorSpec.PropertiesEntry";
  key: string;
  value: string;
}

export interface ConnectorConfigMirrorMakerSpec {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigMirrorMakerSpec";
  /** Source cluster configuration for the MirrorMaker connector. */
  sourceCluster?: ClusterConnectionSpec;
  /** Target cluster configuration for the MirrorMaker connector. */
  targetCluster?: ClusterConnectionSpec;
  /** List of Kafka topics, separated by `,`. */
  topics: string;
  /** Replication factor for automatically created topics. */
  replicationFactor?: number;
}

export interface ClusterConnectionSpec {
  $type: "yandex.cloud.mdb.kafka.v1.ClusterConnectionSpec";
  /**
   * Alias of cluster connection configuration.
   * Examples: `source`, `target`.
   */
  alias: string;
  /** Connection configuration of the cluster the connector belongs to. As all credentials are already known, leave this parameter empty. */
  thisCluster?: ThisClusterSpec | undefined;
  /** Configuration of connection to an external cluster with all the necessary credentials. */
  externalCluster?: ExternalClusterConnectionSpec | undefined;
}

export interface ThisClusterSpec {
  $type: "yandex.cloud.mdb.kafka.v1.ThisClusterSpec";
}

export interface ExternalClusterConnectionSpec {
  $type: "yandex.cloud.mdb.kafka.v1.ExternalClusterConnectionSpec";
  /** List of bootstrap servers of the cluster, separated by `,`. */
  bootstrapServers: string;
  /** SASL username to use for connection to the cluster. */
  saslUsername: string;
  /** SASL password to use for connection to the cluster. */
  saslPassword: string;
  /** SASL mechanism to use for connection to the cluster. */
  saslMechanism: string;
  /** Security protocol to use for connection to the cluster. */
  securityProtocol: string;
  /**
   * CA in PEM format to connect to external cluster.
   * Lines of certificate separated by '\n' symbol.
   */
  sslTruststoreCertificates: string;
}

/** Specification for Kafka S3-Sink Connector. */
export interface ConnectorConfigS3SinkSpec {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigS3SinkSpec";
  /** List of Kafka topics, separated by ','. */
  topics: string;
  /**
   * The compression type used for files put on GCS.
   * The supported values are: `gzip`, `snappy`, `zstd`, `none`.
   * Optional, the default is `none`.
   */
  fileCompressionType: string;
  /** Max records per file. */
  fileMaxRecords?: number;
  /** Credentials for connecting to S3 storage. */
  s3Connection?: S3ConnectionSpec;
}

/** Specification for update Kafka S3-Sink Connector. */
export interface UpdateConnectorConfigS3SinkSpec {
  $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorConfigS3SinkSpec";
  /** List of Kafka topics, separated by ','. */
  topics: string;
  /** Max records per file. */
  fileMaxRecords?: number;
  /** Credentials for connecting to S3 storage. */
  s3Connection?: S3ConnectionSpec;
}

/**
 * Specification for S3Connection -
 * settings of connection to AWS-compatible S3 storage, that
 * are source or target of Kafka S3-connectors.
 * YC Object Storage is AWS-compatible.
 */
export interface S3ConnectionSpec {
  $type: "yandex.cloud.mdb.kafka.v1.S3ConnectionSpec";
  bucketName: string;
  externalS3?: ExternalS3StorageSpec | undefined;
}

export interface ExternalS3StorageSpec {
  $type: "yandex.cloud.mdb.kafka.v1.ExternalS3StorageSpec";
  accessKeyId: string;
  secretAccessKey: string;
  endpoint: string;
  /** Default is 'us-east-1'. */
  region: string;
}

export interface Connector {
  $type: "yandex.cloud.mdb.kafka.v1.Connector";
  /** Name of the connector. */
  name: string;
  /** Maximum number of connector tasks. Default value is the number of brokers. */
  tasksMax?: number;
  /**
   * A set of properties passed to Managed Service for Apache Kafka® with the connector configuration.
   * Example: `sync.topics.config.enabled: true`.
   */
  properties: { [key: string]: string };
  /** Connector health. */
  health: Connector_Health;
  /** Current status of the connector. */
  status: Connector_Status;
  /** ID of the Apache Kafka® cluster that the connector belongs to. */
  clusterId: string;
  /** Configuration of the MirrorMaker connector. */
  connectorConfigMirrormaker?: ConnectorConfigMirrorMaker | undefined;
  /** Configuration of S3-Sink connector. */
  connectorConfigS3Sink?: ConnectorConfigS3Sink | undefined;
}

export enum Connector_Health {
  /** HEALTH_UNKNOWN - Health of the connector is unknown. */
  HEALTH_UNKNOWN = 0,
  /** ALIVE - Connector is running. */
  ALIVE = 1,
  /** DEAD - Connector has failed to start. */
  DEAD = 2,
  UNRECOGNIZED = -1,
}

export function connector_HealthFromJSON(object: any): Connector_Health {
  switch (object) {
    case 0:
    case "HEALTH_UNKNOWN":
      return Connector_Health.HEALTH_UNKNOWN;
    case 1:
    case "ALIVE":
      return Connector_Health.ALIVE;
    case 2:
    case "DEAD":
      return Connector_Health.DEAD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Connector_Health.UNRECOGNIZED;
  }
}

export function connector_HealthToJSON(object: Connector_Health): string {
  switch (object) {
    case Connector_Health.HEALTH_UNKNOWN:
      return "HEALTH_UNKNOWN";
    case Connector_Health.ALIVE:
      return "ALIVE";
    case Connector_Health.DEAD:
      return "DEAD";
    default:
      return "UNKNOWN";
  }
}

export enum Connector_Status {
  /** STATUS_UNKNOWN - Connector state is unknown. */
  STATUS_UNKNOWN = 0,
  /** RUNNING - Connector is running normally. */
  RUNNING = 1,
  /** ERROR - Connector has encountered a problem and cannot operate. */
  ERROR = 2,
  /** PAUSED - Connector is paused. */
  PAUSED = 3,
  UNRECOGNIZED = -1,
}

export function connector_StatusFromJSON(object: any): Connector_Status {
  switch (object) {
    case 0:
    case "STATUS_UNKNOWN":
      return Connector_Status.STATUS_UNKNOWN;
    case 1:
    case "RUNNING":
      return Connector_Status.RUNNING;
    case 2:
    case "ERROR":
      return Connector_Status.ERROR;
    case 3:
    case "PAUSED":
      return Connector_Status.PAUSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Connector_Status.UNRECOGNIZED;
  }
}

export function connector_StatusToJSON(object: Connector_Status): string {
  switch (object) {
    case Connector_Status.STATUS_UNKNOWN:
      return "STATUS_UNKNOWN";
    case Connector_Status.RUNNING:
      return "RUNNING";
    case Connector_Status.ERROR:
      return "ERROR";
    case Connector_Status.PAUSED:
      return "PAUSED";
    default:
      return "UNKNOWN";
  }
}

export interface Connector_PropertiesEntry {
  $type: "yandex.cloud.mdb.kafka.v1.Connector.PropertiesEntry";
  key: string;
  value: string;
}

export interface ConnectorConfigMirrorMaker {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigMirrorMaker";
  /** Source cluster connection configuration. */
  sourceCluster?: ClusterConnection;
  /** Target cluster connection configuration. */
  targetCluster?: ClusterConnection;
  /** List of Kafka topics, separated by `,`. */
  topics: string;
  /** Replication factor for automatically created topics. */
  replicationFactor?: number;
}

export interface ClusterConnection {
  $type: "yandex.cloud.mdb.kafka.v1.ClusterConnection";
  /**
   * Alias of cluster connection configuration.
   * Examples: `source`, `target`.
   */
  alias: string;
  /** Connection configuration of the cluster the connector belongs to. As all credentials are already known, leave this parameter empty. */
  thisCluster?: ThisCluster | undefined;
  /** Configuration of connection to an external cluster with all the necessary credentials. */
  externalCluster?: ExternalClusterConnection | undefined;
}

export interface ThisCluster {
  $type: "yandex.cloud.mdb.kafka.v1.ThisCluster";
}

export interface ExternalClusterConnection {
  $type: "yandex.cloud.mdb.kafka.v1.ExternalClusterConnection";
  /** List of bootstrap servers of the cluster, separated by `,`. */
  bootstrapServers: string;
  /** SASL username to use for connection to the cluster. */
  saslUsername: string;
  /** SASL mechanism to use for connection to the cluster. */
  saslMechanism: string;
  /** Security protocol to use for connection to the cluster. */
  securityProtocol: string;
}

/**
 * An Apache Kafka® S3-Sink
 * connector resource.
 */
export interface ConnectorConfigS3Sink {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigS3Sink";
  /** List of Kafka topics, separated by ','. */
  topics: string;
  /**
   * The compression type used for files put on GCS.
   * The supported values are: `gzip`, `snappy`, `zstd`, `none`.
   * Optional, the default is `none`.
   */
  fileCompressionType: string;
  /** Max records per file. */
  fileMaxRecords?: number;
  /** Credentials for connecting to S3 storage. */
  s3Connection?: S3Connection;
}

/**
 * Resource for S3Connection -
 * settings of connection to AWS-compatible S3 storage, that
 * are source or target of Kafka S3-connectors.
 * YC Object Storage is AWS-compatible.
 */
export interface S3Connection {
  $type: "yandex.cloud.mdb.kafka.v1.S3Connection";
  bucketName: string;
  externalS3?: ExternalS3Storage | undefined;
}

export interface ExternalS3Storage {
  $type: "yandex.cloud.mdb.kafka.v1.ExternalS3Storage";
  accessKeyId: string;
  endpoint: string;
  /** Default is 'us-east-1' */
  region: string;
}

const baseConnectorSpec: object = {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorSpec",
  name: "",
};

export const ConnectorSpec = {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorSpec" as const,

  encode(
    message: ConnectorSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.tasksMax !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.tasksMax! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    Object.entries(message.properties).forEach(([key, value]) => {
      ConnectorSpec_PropertiesEntry.encode(
        {
          $type: "yandex.cloud.mdb.kafka.v1.ConnectorSpec.PropertiesEntry",
          key: key as any,
          value,
        },
        writer.uint32(26).fork()
      ).ldelim();
    });
    if (message.connectorConfigMirrormaker !== undefined) {
      ConnectorConfigMirrorMakerSpec.encode(
        message.connectorConfigMirrormaker,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.connectorConfigS3Sink !== undefined) {
      ConnectorConfigS3SinkSpec.encode(
        message.connectorConfigS3Sink,
        writer.uint32(90).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectorSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConnectorSpec } as ConnectorSpec;
    message.properties = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.tasksMax = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 3:
          const entry3 = ConnectorSpec_PropertiesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.properties[entry3.key] = entry3.value;
          }
          break;
        case 10:
          message.connectorConfigMirrormaker =
            ConnectorConfigMirrorMakerSpec.decode(reader, reader.uint32());
          break;
        case 11:
          message.connectorConfigS3Sink = ConnectorConfigS3SinkSpec.decode(
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

  fromJSON(object: any): ConnectorSpec {
    const message = { ...baseConnectorSpec } as ConnectorSpec;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.tasksMax =
      object.tasksMax !== undefined && object.tasksMax !== null
        ? Number(object.tasksMax)
        : undefined;
    message.properties = Object.entries(object.properties ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.connectorConfigMirrormaker =
      object.connectorConfigMirrormaker !== undefined &&
      object.connectorConfigMirrormaker !== null
        ? ConnectorConfigMirrorMakerSpec.fromJSON(
            object.connectorConfigMirrormaker
          )
        : undefined;
    message.connectorConfigS3Sink =
      object.connectorConfigS3Sink !== undefined &&
      object.connectorConfigS3Sink !== null
        ? ConnectorConfigS3SinkSpec.fromJSON(object.connectorConfigS3Sink)
        : undefined;
    return message;
  },

  toJSON(message: ConnectorSpec): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.tasksMax !== undefined && (obj.tasksMax = message.tasksMax);
    obj.properties = {};
    if (message.properties) {
      Object.entries(message.properties).forEach(([k, v]) => {
        obj.properties[k] = v;
      });
    }
    message.connectorConfigMirrormaker !== undefined &&
      (obj.connectorConfigMirrormaker = message.connectorConfigMirrormaker
        ? ConnectorConfigMirrorMakerSpec.toJSON(
            message.connectorConfigMirrormaker
          )
        : undefined);
    message.connectorConfigS3Sink !== undefined &&
      (obj.connectorConfigS3Sink = message.connectorConfigS3Sink
        ? ConnectorConfigS3SinkSpec.toJSON(message.connectorConfigS3Sink)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConnectorSpec>, I>>(
    object: I
  ): ConnectorSpec {
    const message = { ...baseConnectorSpec } as ConnectorSpec;
    message.name = object.name ?? "";
    message.tasksMax = object.tasksMax ?? undefined;
    message.properties = Object.entries(object.properties ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.connectorConfigMirrormaker =
      object.connectorConfigMirrormaker !== undefined &&
      object.connectorConfigMirrormaker !== null
        ? ConnectorConfigMirrorMakerSpec.fromPartial(
            object.connectorConfigMirrormaker
          )
        : undefined;
    message.connectorConfigS3Sink =
      object.connectorConfigS3Sink !== undefined &&
      object.connectorConfigS3Sink !== null
        ? ConnectorConfigS3SinkSpec.fromPartial(object.connectorConfigS3Sink)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConnectorSpec.$type, ConnectorSpec);

const baseConnectorSpec_PropertiesEntry: object = {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorSpec.PropertiesEntry",
  key: "",
  value: "",
};

export const ConnectorSpec_PropertiesEntry = {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorSpec.PropertiesEntry" as const,

  encode(
    message: ConnectorSpec_PropertiesEntry,
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
  ): ConnectorSpec_PropertiesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseConnectorSpec_PropertiesEntry,
    } as ConnectorSpec_PropertiesEntry;
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

  fromJSON(object: any): ConnectorSpec_PropertiesEntry {
    const message = {
      ...baseConnectorSpec_PropertiesEntry,
    } as ConnectorSpec_PropertiesEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: ConnectorSpec_PropertiesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConnectorSpec_PropertiesEntry>, I>>(
    object: I
  ): ConnectorSpec_PropertiesEntry {
    const message = {
      ...baseConnectorSpec_PropertiesEntry,
    } as ConnectorSpec_PropertiesEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ConnectorSpec_PropertiesEntry.$type,
  ConnectorSpec_PropertiesEntry
);

const baseUpdateConnectorSpec: object = {
  $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorSpec",
};

export const UpdateConnectorSpec = {
  $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorSpec" as const,

  encode(
    message: UpdateConnectorSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tasksMax !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.tasksMax! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    Object.entries(message.properties).forEach(([key, value]) => {
      UpdateConnectorSpec_PropertiesEntry.encode(
        {
          $type:
            "yandex.cloud.mdb.kafka.v1.UpdateConnectorSpec.PropertiesEntry",
          key: key as any,
          value,
        },
        writer.uint32(18).fork()
      ).ldelim();
    });
    if (message.connectorConfigMirrormaker !== undefined) {
      ConnectorConfigMirrorMakerSpec.encode(
        message.connectorConfigMirrormaker,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.connectorConfigS3Sink !== undefined) {
      UpdateConnectorConfigS3SinkSpec.encode(
        message.connectorConfigS3Sink,
        writer.uint32(90).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateConnectorSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateConnectorSpec } as UpdateConnectorSpec;
    message.properties = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tasksMax = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 2:
          const entry2 = UpdateConnectorSpec_PropertiesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry2.value !== undefined) {
            message.properties[entry2.key] = entry2.value;
          }
          break;
        case 10:
          message.connectorConfigMirrormaker =
            ConnectorConfigMirrorMakerSpec.decode(reader, reader.uint32());
          break;
        case 11:
          message.connectorConfigS3Sink =
            UpdateConnectorConfigS3SinkSpec.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateConnectorSpec {
    const message = { ...baseUpdateConnectorSpec } as UpdateConnectorSpec;
    message.tasksMax =
      object.tasksMax !== undefined && object.tasksMax !== null
        ? Number(object.tasksMax)
        : undefined;
    message.properties = Object.entries(object.properties ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.connectorConfigMirrormaker =
      object.connectorConfigMirrormaker !== undefined &&
      object.connectorConfigMirrormaker !== null
        ? ConnectorConfigMirrorMakerSpec.fromJSON(
            object.connectorConfigMirrormaker
          )
        : undefined;
    message.connectorConfigS3Sink =
      object.connectorConfigS3Sink !== undefined &&
      object.connectorConfigS3Sink !== null
        ? UpdateConnectorConfigS3SinkSpec.fromJSON(object.connectorConfigS3Sink)
        : undefined;
    return message;
  },

  toJSON(message: UpdateConnectorSpec): unknown {
    const obj: any = {};
    message.tasksMax !== undefined && (obj.tasksMax = message.tasksMax);
    obj.properties = {};
    if (message.properties) {
      Object.entries(message.properties).forEach(([k, v]) => {
        obj.properties[k] = v;
      });
    }
    message.connectorConfigMirrormaker !== undefined &&
      (obj.connectorConfigMirrormaker = message.connectorConfigMirrormaker
        ? ConnectorConfigMirrorMakerSpec.toJSON(
            message.connectorConfigMirrormaker
          )
        : undefined);
    message.connectorConfigS3Sink !== undefined &&
      (obj.connectorConfigS3Sink = message.connectorConfigS3Sink
        ? UpdateConnectorConfigS3SinkSpec.toJSON(message.connectorConfigS3Sink)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateConnectorSpec>, I>>(
    object: I
  ): UpdateConnectorSpec {
    const message = { ...baseUpdateConnectorSpec } as UpdateConnectorSpec;
    message.tasksMax = object.tasksMax ?? undefined;
    message.properties = Object.entries(object.properties ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.connectorConfigMirrormaker =
      object.connectorConfigMirrormaker !== undefined &&
      object.connectorConfigMirrormaker !== null
        ? ConnectorConfigMirrorMakerSpec.fromPartial(
            object.connectorConfigMirrormaker
          )
        : undefined;
    message.connectorConfigS3Sink =
      object.connectorConfigS3Sink !== undefined &&
      object.connectorConfigS3Sink !== null
        ? UpdateConnectorConfigS3SinkSpec.fromPartial(
            object.connectorConfigS3Sink
          )
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateConnectorSpec.$type, UpdateConnectorSpec);

const baseUpdateConnectorSpec_PropertiesEntry: object = {
  $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorSpec.PropertiesEntry",
  key: "",
  value: "",
};

export const UpdateConnectorSpec_PropertiesEntry = {
  $type:
    "yandex.cloud.mdb.kafka.v1.UpdateConnectorSpec.PropertiesEntry" as const,

  encode(
    message: UpdateConnectorSpec_PropertiesEntry,
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
  ): UpdateConnectorSpec_PropertiesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateConnectorSpec_PropertiesEntry,
    } as UpdateConnectorSpec_PropertiesEntry;
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

  fromJSON(object: any): UpdateConnectorSpec_PropertiesEntry {
    const message = {
      ...baseUpdateConnectorSpec_PropertiesEntry,
    } as UpdateConnectorSpec_PropertiesEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateConnectorSpec_PropertiesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateConnectorSpec_PropertiesEntry>, I>
  >(object: I): UpdateConnectorSpec_PropertiesEntry {
    const message = {
      ...baseUpdateConnectorSpec_PropertiesEntry,
    } as UpdateConnectorSpec_PropertiesEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateConnectorSpec_PropertiesEntry.$type,
  UpdateConnectorSpec_PropertiesEntry
);

const baseConnectorConfigMirrorMakerSpec: object = {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigMirrorMakerSpec",
  topics: "",
};

export const ConnectorConfigMirrorMakerSpec = {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigMirrorMakerSpec" as const,

  encode(
    message: ConnectorConfigMirrorMakerSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sourceCluster !== undefined) {
      ClusterConnectionSpec.encode(
        message.sourceCluster,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.targetCluster !== undefined) {
      ClusterConnectionSpec.encode(
        message.targetCluster,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.topics !== "") {
      writer.uint32(26).string(message.topics);
    }
    if (message.replicationFactor !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.replicationFactor!,
        },
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ConnectorConfigMirrorMakerSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseConnectorConfigMirrorMakerSpec,
    } as ConnectorConfigMirrorMakerSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceCluster = ClusterConnectionSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.targetCluster = ClusterConnectionSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.topics = reader.string();
          break;
        case 4:
          message.replicationFactor = Int64Value.decode(
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

  fromJSON(object: any): ConnectorConfigMirrorMakerSpec {
    const message = {
      ...baseConnectorConfigMirrorMakerSpec,
    } as ConnectorConfigMirrorMakerSpec;
    message.sourceCluster =
      object.sourceCluster !== undefined && object.sourceCluster !== null
        ? ClusterConnectionSpec.fromJSON(object.sourceCluster)
        : undefined;
    message.targetCluster =
      object.targetCluster !== undefined && object.targetCluster !== null
        ? ClusterConnectionSpec.fromJSON(object.targetCluster)
        : undefined;
    message.topics =
      object.topics !== undefined && object.topics !== null
        ? String(object.topics)
        : "";
    message.replicationFactor =
      object.replicationFactor !== undefined &&
      object.replicationFactor !== null
        ? Number(object.replicationFactor)
        : undefined;
    return message;
  },

  toJSON(message: ConnectorConfigMirrorMakerSpec): unknown {
    const obj: any = {};
    message.sourceCluster !== undefined &&
      (obj.sourceCluster = message.sourceCluster
        ? ClusterConnectionSpec.toJSON(message.sourceCluster)
        : undefined);
    message.targetCluster !== undefined &&
      (obj.targetCluster = message.targetCluster
        ? ClusterConnectionSpec.toJSON(message.targetCluster)
        : undefined);
    message.topics !== undefined && (obj.topics = message.topics);
    message.replicationFactor !== undefined &&
      (obj.replicationFactor = message.replicationFactor);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConnectorConfigMirrorMakerSpec>, I>>(
    object: I
  ): ConnectorConfigMirrorMakerSpec {
    const message = {
      ...baseConnectorConfigMirrorMakerSpec,
    } as ConnectorConfigMirrorMakerSpec;
    message.sourceCluster =
      object.sourceCluster !== undefined && object.sourceCluster !== null
        ? ClusterConnectionSpec.fromPartial(object.sourceCluster)
        : undefined;
    message.targetCluster =
      object.targetCluster !== undefined && object.targetCluster !== null
        ? ClusterConnectionSpec.fromPartial(object.targetCluster)
        : undefined;
    message.topics = object.topics ?? "";
    message.replicationFactor = object.replicationFactor ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ConnectorConfigMirrorMakerSpec.$type,
  ConnectorConfigMirrorMakerSpec
);

const baseClusterConnectionSpec: object = {
  $type: "yandex.cloud.mdb.kafka.v1.ClusterConnectionSpec",
  alias: "",
};

export const ClusterConnectionSpec = {
  $type: "yandex.cloud.mdb.kafka.v1.ClusterConnectionSpec" as const,

  encode(
    message: ClusterConnectionSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.alias !== "") {
      writer.uint32(10).string(message.alias);
    }
    if (message.thisCluster !== undefined) {
      ThisClusterSpec.encode(
        message.thisCluster,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.externalCluster !== undefined) {
      ExternalClusterConnectionSpec.encode(
        message.externalCluster,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClusterConnectionSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClusterConnectionSpec } as ClusterConnectionSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alias = reader.string();
          break;
        case 2:
          message.thisCluster = ThisClusterSpec.decode(reader, reader.uint32());
          break;
        case 3:
          message.externalCluster = ExternalClusterConnectionSpec.decode(
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

  fromJSON(object: any): ClusterConnectionSpec {
    const message = { ...baseClusterConnectionSpec } as ClusterConnectionSpec;
    message.alias =
      object.alias !== undefined && object.alias !== null
        ? String(object.alias)
        : "";
    message.thisCluster =
      object.thisCluster !== undefined && object.thisCluster !== null
        ? ThisClusterSpec.fromJSON(object.thisCluster)
        : undefined;
    message.externalCluster =
      object.externalCluster !== undefined && object.externalCluster !== null
        ? ExternalClusterConnectionSpec.fromJSON(object.externalCluster)
        : undefined;
    return message;
  },

  toJSON(message: ClusterConnectionSpec): unknown {
    const obj: any = {};
    message.alias !== undefined && (obj.alias = message.alias);
    message.thisCluster !== undefined &&
      (obj.thisCluster = message.thisCluster
        ? ThisClusterSpec.toJSON(message.thisCluster)
        : undefined);
    message.externalCluster !== undefined &&
      (obj.externalCluster = message.externalCluster
        ? ExternalClusterConnectionSpec.toJSON(message.externalCluster)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClusterConnectionSpec>, I>>(
    object: I
  ): ClusterConnectionSpec {
    const message = { ...baseClusterConnectionSpec } as ClusterConnectionSpec;
    message.alias = object.alias ?? "";
    message.thisCluster =
      object.thisCluster !== undefined && object.thisCluster !== null
        ? ThisClusterSpec.fromPartial(object.thisCluster)
        : undefined;
    message.externalCluster =
      object.externalCluster !== undefined && object.externalCluster !== null
        ? ExternalClusterConnectionSpec.fromPartial(object.externalCluster)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ClusterConnectionSpec.$type, ClusterConnectionSpec);

const baseThisClusterSpec: object = {
  $type: "yandex.cloud.mdb.kafka.v1.ThisClusterSpec",
};

export const ThisClusterSpec = {
  $type: "yandex.cloud.mdb.kafka.v1.ThisClusterSpec" as const,

  encode(
    _: ThisClusterSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ThisClusterSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseThisClusterSpec } as ThisClusterSpec;
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

  fromJSON(_: any): ThisClusterSpec {
    const message = { ...baseThisClusterSpec } as ThisClusterSpec;
    return message;
  },

  toJSON(_: ThisClusterSpec): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ThisClusterSpec>, I>>(
    _: I
  ): ThisClusterSpec {
    const message = { ...baseThisClusterSpec } as ThisClusterSpec;
    return message;
  },
};

messageTypeRegistry.set(ThisClusterSpec.$type, ThisClusterSpec);

const baseExternalClusterConnectionSpec: object = {
  $type: "yandex.cloud.mdb.kafka.v1.ExternalClusterConnectionSpec",
  bootstrapServers: "",
  saslUsername: "",
  saslPassword: "",
  saslMechanism: "",
  securityProtocol: "",
  sslTruststoreCertificates: "",
};

export const ExternalClusterConnectionSpec = {
  $type: "yandex.cloud.mdb.kafka.v1.ExternalClusterConnectionSpec" as const,

  encode(
    message: ExternalClusterConnectionSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bootstrapServers !== "") {
      writer.uint32(10).string(message.bootstrapServers);
    }
    if (message.saslUsername !== "") {
      writer.uint32(18).string(message.saslUsername);
    }
    if (message.saslPassword !== "") {
      writer.uint32(26).string(message.saslPassword);
    }
    if (message.saslMechanism !== "") {
      writer.uint32(34).string(message.saslMechanism);
    }
    if (message.securityProtocol !== "") {
      writer.uint32(42).string(message.securityProtocol);
    }
    if (message.sslTruststoreCertificates !== "") {
      writer.uint32(50).string(message.sslTruststoreCertificates);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExternalClusterConnectionSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseExternalClusterConnectionSpec,
    } as ExternalClusterConnectionSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bootstrapServers = reader.string();
          break;
        case 2:
          message.saslUsername = reader.string();
          break;
        case 3:
          message.saslPassword = reader.string();
          break;
        case 4:
          message.saslMechanism = reader.string();
          break;
        case 5:
          message.securityProtocol = reader.string();
          break;
        case 6:
          message.sslTruststoreCertificates = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExternalClusterConnectionSpec {
    const message = {
      ...baseExternalClusterConnectionSpec,
    } as ExternalClusterConnectionSpec;
    message.bootstrapServers =
      object.bootstrapServers !== undefined && object.bootstrapServers !== null
        ? String(object.bootstrapServers)
        : "";
    message.saslUsername =
      object.saslUsername !== undefined && object.saslUsername !== null
        ? String(object.saslUsername)
        : "";
    message.saslPassword =
      object.saslPassword !== undefined && object.saslPassword !== null
        ? String(object.saslPassword)
        : "";
    message.saslMechanism =
      object.saslMechanism !== undefined && object.saslMechanism !== null
        ? String(object.saslMechanism)
        : "";
    message.securityProtocol =
      object.securityProtocol !== undefined && object.securityProtocol !== null
        ? String(object.securityProtocol)
        : "";
    message.sslTruststoreCertificates =
      object.sslTruststoreCertificates !== undefined &&
      object.sslTruststoreCertificates !== null
        ? String(object.sslTruststoreCertificates)
        : "";
    return message;
  },

  toJSON(message: ExternalClusterConnectionSpec): unknown {
    const obj: any = {};
    message.bootstrapServers !== undefined &&
      (obj.bootstrapServers = message.bootstrapServers);
    message.saslUsername !== undefined &&
      (obj.saslUsername = message.saslUsername);
    message.saslPassword !== undefined &&
      (obj.saslPassword = message.saslPassword);
    message.saslMechanism !== undefined &&
      (obj.saslMechanism = message.saslMechanism);
    message.securityProtocol !== undefined &&
      (obj.securityProtocol = message.securityProtocol);
    message.sslTruststoreCertificates !== undefined &&
      (obj.sslTruststoreCertificates = message.sslTruststoreCertificates);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExternalClusterConnectionSpec>, I>>(
    object: I
  ): ExternalClusterConnectionSpec {
    const message = {
      ...baseExternalClusterConnectionSpec,
    } as ExternalClusterConnectionSpec;
    message.bootstrapServers = object.bootstrapServers ?? "";
    message.saslUsername = object.saslUsername ?? "";
    message.saslPassword = object.saslPassword ?? "";
    message.saslMechanism = object.saslMechanism ?? "";
    message.securityProtocol = object.securityProtocol ?? "";
    message.sslTruststoreCertificates = object.sslTruststoreCertificates ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ExternalClusterConnectionSpec.$type,
  ExternalClusterConnectionSpec
);

const baseConnectorConfigS3SinkSpec: object = {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigS3SinkSpec",
  topics: "",
  fileCompressionType: "",
};

export const ConnectorConfigS3SinkSpec = {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigS3SinkSpec" as const,

  encode(
    message: ConnectorConfigS3SinkSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.topics !== "") {
      writer.uint32(10).string(message.topics);
    }
    if (message.fileCompressionType !== "") {
      writer.uint32(18).string(message.fileCompressionType);
    }
    if (message.fileMaxRecords !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.fileMaxRecords! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.s3Connection !== undefined) {
      S3ConnectionSpec.encode(
        message.s3Connection,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ConnectorConfigS3SinkSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseConnectorConfigS3SinkSpec,
    } as ConnectorConfigS3SinkSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.topics = reader.string();
          break;
        case 2:
          message.fileCompressionType = reader.string();
          break;
        case 3:
          message.fileMaxRecords = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 4:
          message.s3Connection = S3ConnectionSpec.decode(
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

  fromJSON(object: any): ConnectorConfigS3SinkSpec {
    const message = {
      ...baseConnectorConfigS3SinkSpec,
    } as ConnectorConfigS3SinkSpec;
    message.topics =
      object.topics !== undefined && object.topics !== null
        ? String(object.topics)
        : "";
    message.fileCompressionType =
      object.fileCompressionType !== undefined &&
      object.fileCompressionType !== null
        ? String(object.fileCompressionType)
        : "";
    message.fileMaxRecords =
      object.fileMaxRecords !== undefined && object.fileMaxRecords !== null
        ? Number(object.fileMaxRecords)
        : undefined;
    message.s3Connection =
      object.s3Connection !== undefined && object.s3Connection !== null
        ? S3ConnectionSpec.fromJSON(object.s3Connection)
        : undefined;
    return message;
  },

  toJSON(message: ConnectorConfigS3SinkSpec): unknown {
    const obj: any = {};
    message.topics !== undefined && (obj.topics = message.topics);
    message.fileCompressionType !== undefined &&
      (obj.fileCompressionType = message.fileCompressionType);
    message.fileMaxRecords !== undefined &&
      (obj.fileMaxRecords = message.fileMaxRecords);
    message.s3Connection !== undefined &&
      (obj.s3Connection = message.s3Connection
        ? S3ConnectionSpec.toJSON(message.s3Connection)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConnectorConfigS3SinkSpec>, I>>(
    object: I
  ): ConnectorConfigS3SinkSpec {
    const message = {
      ...baseConnectorConfigS3SinkSpec,
    } as ConnectorConfigS3SinkSpec;
    message.topics = object.topics ?? "";
    message.fileCompressionType = object.fileCompressionType ?? "";
    message.fileMaxRecords = object.fileMaxRecords ?? undefined;
    message.s3Connection =
      object.s3Connection !== undefined && object.s3Connection !== null
        ? S3ConnectionSpec.fromPartial(object.s3Connection)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ConnectorConfigS3SinkSpec.$type,
  ConnectorConfigS3SinkSpec
);

const baseUpdateConnectorConfigS3SinkSpec: object = {
  $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorConfigS3SinkSpec",
  topics: "",
};

export const UpdateConnectorConfigS3SinkSpec = {
  $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorConfigS3SinkSpec" as const,

  encode(
    message: UpdateConnectorConfigS3SinkSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.topics !== "") {
      writer.uint32(10).string(message.topics);
    }
    if (message.fileMaxRecords !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.fileMaxRecords! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.s3Connection !== undefined) {
      S3ConnectionSpec.encode(
        message.s3Connection,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateConnectorConfigS3SinkSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateConnectorConfigS3SinkSpec,
    } as UpdateConnectorConfigS3SinkSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.topics = reader.string();
          break;
        case 2:
          message.fileMaxRecords = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.s3Connection = S3ConnectionSpec.decode(
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

  fromJSON(object: any): UpdateConnectorConfigS3SinkSpec {
    const message = {
      ...baseUpdateConnectorConfigS3SinkSpec,
    } as UpdateConnectorConfigS3SinkSpec;
    message.topics =
      object.topics !== undefined && object.topics !== null
        ? String(object.topics)
        : "";
    message.fileMaxRecords =
      object.fileMaxRecords !== undefined && object.fileMaxRecords !== null
        ? Number(object.fileMaxRecords)
        : undefined;
    message.s3Connection =
      object.s3Connection !== undefined && object.s3Connection !== null
        ? S3ConnectionSpec.fromJSON(object.s3Connection)
        : undefined;
    return message;
  },

  toJSON(message: UpdateConnectorConfigS3SinkSpec): unknown {
    const obj: any = {};
    message.topics !== undefined && (obj.topics = message.topics);
    message.fileMaxRecords !== undefined &&
      (obj.fileMaxRecords = message.fileMaxRecords);
    message.s3Connection !== undefined &&
      (obj.s3Connection = message.s3Connection
        ? S3ConnectionSpec.toJSON(message.s3Connection)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateConnectorConfigS3SinkSpec>, I>>(
    object: I
  ): UpdateConnectorConfigS3SinkSpec {
    const message = {
      ...baseUpdateConnectorConfigS3SinkSpec,
    } as UpdateConnectorConfigS3SinkSpec;
    message.topics = object.topics ?? "";
    message.fileMaxRecords = object.fileMaxRecords ?? undefined;
    message.s3Connection =
      object.s3Connection !== undefined && object.s3Connection !== null
        ? S3ConnectionSpec.fromPartial(object.s3Connection)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  UpdateConnectorConfigS3SinkSpec.$type,
  UpdateConnectorConfigS3SinkSpec
);

const baseS3ConnectionSpec: object = {
  $type: "yandex.cloud.mdb.kafka.v1.S3ConnectionSpec",
  bucketName: "",
};

export const S3ConnectionSpec = {
  $type: "yandex.cloud.mdb.kafka.v1.S3ConnectionSpec" as const,

  encode(
    message: S3ConnectionSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bucketName !== "") {
      writer.uint32(10).string(message.bucketName);
    }
    if (message.externalS3 !== undefined) {
      ExternalS3StorageSpec.encode(
        message.externalS3,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): S3ConnectionSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseS3ConnectionSpec } as S3ConnectionSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bucketName = reader.string();
          break;
        case 2:
          message.externalS3 = ExternalS3StorageSpec.decode(
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

  fromJSON(object: any): S3ConnectionSpec {
    const message = { ...baseS3ConnectionSpec } as S3ConnectionSpec;
    message.bucketName =
      object.bucketName !== undefined && object.bucketName !== null
        ? String(object.bucketName)
        : "";
    message.externalS3 =
      object.externalS3 !== undefined && object.externalS3 !== null
        ? ExternalS3StorageSpec.fromJSON(object.externalS3)
        : undefined;
    return message;
  },

  toJSON(message: S3ConnectionSpec): unknown {
    const obj: any = {};
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.externalS3 !== undefined &&
      (obj.externalS3 = message.externalS3
        ? ExternalS3StorageSpec.toJSON(message.externalS3)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<S3ConnectionSpec>, I>>(
    object: I
  ): S3ConnectionSpec {
    const message = { ...baseS3ConnectionSpec } as S3ConnectionSpec;
    message.bucketName = object.bucketName ?? "";
    message.externalS3 =
      object.externalS3 !== undefined && object.externalS3 !== null
        ? ExternalS3StorageSpec.fromPartial(object.externalS3)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(S3ConnectionSpec.$type, S3ConnectionSpec);

const baseExternalS3StorageSpec: object = {
  $type: "yandex.cloud.mdb.kafka.v1.ExternalS3StorageSpec",
  accessKeyId: "",
  secretAccessKey: "",
  endpoint: "",
  region: "",
};

export const ExternalS3StorageSpec = {
  $type: "yandex.cloud.mdb.kafka.v1.ExternalS3StorageSpec" as const,

  encode(
    message: ExternalS3StorageSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accessKeyId !== "") {
      writer.uint32(10).string(message.accessKeyId);
    }
    if (message.secretAccessKey !== "") {
      writer.uint32(18).string(message.secretAccessKey);
    }
    if (message.endpoint !== "") {
      writer.uint32(26).string(message.endpoint);
    }
    if (message.region !== "") {
      writer.uint32(34).string(message.region);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExternalS3StorageSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExternalS3StorageSpec } as ExternalS3StorageSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accessKeyId = reader.string();
          break;
        case 2:
          message.secretAccessKey = reader.string();
          break;
        case 3:
          message.endpoint = reader.string();
          break;
        case 4:
          message.region = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExternalS3StorageSpec {
    const message = { ...baseExternalS3StorageSpec } as ExternalS3StorageSpec;
    message.accessKeyId =
      object.accessKeyId !== undefined && object.accessKeyId !== null
        ? String(object.accessKeyId)
        : "";
    message.secretAccessKey =
      object.secretAccessKey !== undefined && object.secretAccessKey !== null
        ? String(object.secretAccessKey)
        : "";
    message.endpoint =
      object.endpoint !== undefined && object.endpoint !== null
        ? String(object.endpoint)
        : "";
    message.region =
      object.region !== undefined && object.region !== null
        ? String(object.region)
        : "";
    return message;
  },

  toJSON(message: ExternalS3StorageSpec): unknown {
    const obj: any = {};
    message.accessKeyId !== undefined &&
      (obj.accessKeyId = message.accessKeyId);
    message.secretAccessKey !== undefined &&
      (obj.secretAccessKey = message.secretAccessKey);
    message.endpoint !== undefined && (obj.endpoint = message.endpoint);
    message.region !== undefined && (obj.region = message.region);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExternalS3StorageSpec>, I>>(
    object: I
  ): ExternalS3StorageSpec {
    const message = { ...baseExternalS3StorageSpec } as ExternalS3StorageSpec;
    message.accessKeyId = object.accessKeyId ?? "";
    message.secretAccessKey = object.secretAccessKey ?? "";
    message.endpoint = object.endpoint ?? "";
    message.region = object.region ?? "";
    return message;
  },
};

messageTypeRegistry.set(ExternalS3StorageSpec.$type, ExternalS3StorageSpec);

const baseConnector: object = {
  $type: "yandex.cloud.mdb.kafka.v1.Connector",
  name: "",
  health: 0,
  status: 0,
  clusterId: "",
};

export const Connector = {
  $type: "yandex.cloud.mdb.kafka.v1.Connector" as const,

  encode(
    message: Connector,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.tasksMax !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.tasksMax! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    Object.entries(message.properties).forEach(([key, value]) => {
      Connector_PropertiesEntry.encode(
        {
          $type: "yandex.cloud.mdb.kafka.v1.Connector.PropertiesEntry",
          key: key as any,
          value,
        },
        writer.uint32(26).fork()
      ).ldelim();
    });
    if (message.health !== 0) {
      writer.uint32(32).int32(message.health);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.clusterId !== "") {
      writer.uint32(50).string(message.clusterId);
    }
    if (message.connectorConfigMirrormaker !== undefined) {
      ConnectorConfigMirrorMaker.encode(
        message.connectorConfigMirrormaker,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.connectorConfigS3Sink !== undefined) {
      ConnectorConfigS3Sink.encode(
        message.connectorConfigS3Sink,
        writer.uint32(90).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Connector {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConnector } as Connector;
    message.properties = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.tasksMax = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 3:
          const entry3 = Connector_PropertiesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.properties[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.health = reader.int32() as any;
          break;
        case 5:
          message.status = reader.int32() as any;
          break;
        case 6:
          message.clusterId = reader.string();
          break;
        case 10:
          message.connectorConfigMirrormaker =
            ConnectorConfigMirrorMaker.decode(reader, reader.uint32());
          break;
        case 11:
          message.connectorConfigS3Sink = ConnectorConfigS3Sink.decode(
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

  fromJSON(object: any): Connector {
    const message = { ...baseConnector } as Connector;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.tasksMax =
      object.tasksMax !== undefined && object.tasksMax !== null
        ? Number(object.tasksMax)
        : undefined;
    message.properties = Object.entries(object.properties ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.health =
      object.health !== undefined && object.health !== null
        ? connector_HealthFromJSON(object.health)
        : 0;
    message.status =
      object.status !== undefined && object.status !== null
        ? connector_StatusFromJSON(object.status)
        : 0;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.connectorConfigMirrormaker =
      object.connectorConfigMirrormaker !== undefined &&
      object.connectorConfigMirrormaker !== null
        ? ConnectorConfigMirrorMaker.fromJSON(object.connectorConfigMirrormaker)
        : undefined;
    message.connectorConfigS3Sink =
      object.connectorConfigS3Sink !== undefined &&
      object.connectorConfigS3Sink !== null
        ? ConnectorConfigS3Sink.fromJSON(object.connectorConfigS3Sink)
        : undefined;
    return message;
  },

  toJSON(message: Connector): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.tasksMax !== undefined && (obj.tasksMax = message.tasksMax);
    obj.properties = {};
    if (message.properties) {
      Object.entries(message.properties).forEach(([k, v]) => {
        obj.properties[k] = v;
      });
    }
    message.health !== undefined &&
      (obj.health = connector_HealthToJSON(message.health));
    message.status !== undefined &&
      (obj.status = connector_StatusToJSON(message.status));
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.connectorConfigMirrormaker !== undefined &&
      (obj.connectorConfigMirrormaker = message.connectorConfigMirrormaker
        ? ConnectorConfigMirrorMaker.toJSON(message.connectorConfigMirrormaker)
        : undefined);
    message.connectorConfigS3Sink !== undefined &&
      (obj.connectorConfigS3Sink = message.connectorConfigS3Sink
        ? ConnectorConfigS3Sink.toJSON(message.connectorConfigS3Sink)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Connector>, I>>(
    object: I
  ): Connector {
    const message = { ...baseConnector } as Connector;
    message.name = object.name ?? "";
    message.tasksMax = object.tasksMax ?? undefined;
    message.properties = Object.entries(object.properties ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.health = object.health ?? 0;
    message.status = object.status ?? 0;
    message.clusterId = object.clusterId ?? "";
    message.connectorConfigMirrormaker =
      object.connectorConfigMirrormaker !== undefined &&
      object.connectorConfigMirrormaker !== null
        ? ConnectorConfigMirrorMaker.fromPartial(
            object.connectorConfigMirrormaker
          )
        : undefined;
    message.connectorConfigS3Sink =
      object.connectorConfigS3Sink !== undefined &&
      object.connectorConfigS3Sink !== null
        ? ConnectorConfigS3Sink.fromPartial(object.connectorConfigS3Sink)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Connector.$type, Connector);

const baseConnector_PropertiesEntry: object = {
  $type: "yandex.cloud.mdb.kafka.v1.Connector.PropertiesEntry",
  key: "",
  value: "",
};

export const Connector_PropertiesEntry = {
  $type: "yandex.cloud.mdb.kafka.v1.Connector.PropertiesEntry" as const,

  encode(
    message: Connector_PropertiesEntry,
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
  ): Connector_PropertiesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseConnector_PropertiesEntry,
    } as Connector_PropertiesEntry;
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

  fromJSON(object: any): Connector_PropertiesEntry {
    const message = {
      ...baseConnector_PropertiesEntry,
    } as Connector_PropertiesEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Connector_PropertiesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Connector_PropertiesEntry>, I>>(
    object: I
  ): Connector_PropertiesEntry {
    const message = {
      ...baseConnector_PropertiesEntry,
    } as Connector_PropertiesEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  Connector_PropertiesEntry.$type,
  Connector_PropertiesEntry
);

const baseConnectorConfigMirrorMaker: object = {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigMirrorMaker",
  topics: "",
};

export const ConnectorConfigMirrorMaker = {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigMirrorMaker" as const,

  encode(
    message: ConnectorConfigMirrorMaker,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sourceCluster !== undefined) {
      ClusterConnection.encode(
        message.sourceCluster,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.targetCluster !== undefined) {
      ClusterConnection.encode(
        message.targetCluster,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.topics !== "") {
      writer.uint32(26).string(message.topics);
    }
    if (message.replicationFactor !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.replicationFactor!,
        },
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ConnectorConfigMirrorMaker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseConnectorConfigMirrorMaker,
    } as ConnectorConfigMirrorMaker;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceCluster = ClusterConnection.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.targetCluster = ClusterConnection.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.topics = reader.string();
          break;
        case 4:
          message.replicationFactor = Int64Value.decode(
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

  fromJSON(object: any): ConnectorConfigMirrorMaker {
    const message = {
      ...baseConnectorConfigMirrorMaker,
    } as ConnectorConfigMirrorMaker;
    message.sourceCluster =
      object.sourceCluster !== undefined && object.sourceCluster !== null
        ? ClusterConnection.fromJSON(object.sourceCluster)
        : undefined;
    message.targetCluster =
      object.targetCluster !== undefined && object.targetCluster !== null
        ? ClusterConnection.fromJSON(object.targetCluster)
        : undefined;
    message.topics =
      object.topics !== undefined && object.topics !== null
        ? String(object.topics)
        : "";
    message.replicationFactor =
      object.replicationFactor !== undefined &&
      object.replicationFactor !== null
        ? Number(object.replicationFactor)
        : undefined;
    return message;
  },

  toJSON(message: ConnectorConfigMirrorMaker): unknown {
    const obj: any = {};
    message.sourceCluster !== undefined &&
      (obj.sourceCluster = message.sourceCluster
        ? ClusterConnection.toJSON(message.sourceCluster)
        : undefined);
    message.targetCluster !== undefined &&
      (obj.targetCluster = message.targetCluster
        ? ClusterConnection.toJSON(message.targetCluster)
        : undefined);
    message.topics !== undefined && (obj.topics = message.topics);
    message.replicationFactor !== undefined &&
      (obj.replicationFactor = message.replicationFactor);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConnectorConfigMirrorMaker>, I>>(
    object: I
  ): ConnectorConfigMirrorMaker {
    const message = {
      ...baseConnectorConfigMirrorMaker,
    } as ConnectorConfigMirrorMaker;
    message.sourceCluster =
      object.sourceCluster !== undefined && object.sourceCluster !== null
        ? ClusterConnection.fromPartial(object.sourceCluster)
        : undefined;
    message.targetCluster =
      object.targetCluster !== undefined && object.targetCluster !== null
        ? ClusterConnection.fromPartial(object.targetCluster)
        : undefined;
    message.topics = object.topics ?? "";
    message.replicationFactor = object.replicationFactor ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ConnectorConfigMirrorMaker.$type,
  ConnectorConfigMirrorMaker
);

const baseClusterConnection: object = {
  $type: "yandex.cloud.mdb.kafka.v1.ClusterConnection",
  alias: "",
};

export const ClusterConnection = {
  $type: "yandex.cloud.mdb.kafka.v1.ClusterConnection" as const,

  encode(
    message: ClusterConnection,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.alias !== "") {
      writer.uint32(10).string(message.alias);
    }
    if (message.thisCluster !== undefined) {
      ThisCluster.encode(
        message.thisCluster,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.externalCluster !== undefined) {
      ExternalClusterConnection.encode(
        message.externalCluster,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClusterConnection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClusterConnection } as ClusterConnection;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alias = reader.string();
          break;
        case 2:
          message.thisCluster = ThisCluster.decode(reader, reader.uint32());
          break;
        case 3:
          message.externalCluster = ExternalClusterConnection.decode(
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

  fromJSON(object: any): ClusterConnection {
    const message = { ...baseClusterConnection } as ClusterConnection;
    message.alias =
      object.alias !== undefined && object.alias !== null
        ? String(object.alias)
        : "";
    message.thisCluster =
      object.thisCluster !== undefined && object.thisCluster !== null
        ? ThisCluster.fromJSON(object.thisCluster)
        : undefined;
    message.externalCluster =
      object.externalCluster !== undefined && object.externalCluster !== null
        ? ExternalClusterConnection.fromJSON(object.externalCluster)
        : undefined;
    return message;
  },

  toJSON(message: ClusterConnection): unknown {
    const obj: any = {};
    message.alias !== undefined && (obj.alias = message.alias);
    message.thisCluster !== undefined &&
      (obj.thisCluster = message.thisCluster
        ? ThisCluster.toJSON(message.thisCluster)
        : undefined);
    message.externalCluster !== undefined &&
      (obj.externalCluster = message.externalCluster
        ? ExternalClusterConnection.toJSON(message.externalCluster)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClusterConnection>, I>>(
    object: I
  ): ClusterConnection {
    const message = { ...baseClusterConnection } as ClusterConnection;
    message.alias = object.alias ?? "";
    message.thisCluster =
      object.thisCluster !== undefined && object.thisCluster !== null
        ? ThisCluster.fromPartial(object.thisCluster)
        : undefined;
    message.externalCluster =
      object.externalCluster !== undefined && object.externalCluster !== null
        ? ExternalClusterConnection.fromPartial(object.externalCluster)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ClusterConnection.$type, ClusterConnection);

const baseThisCluster: object = {
  $type: "yandex.cloud.mdb.kafka.v1.ThisCluster",
};

export const ThisCluster = {
  $type: "yandex.cloud.mdb.kafka.v1.ThisCluster" as const,

  encode(_: ThisCluster, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ThisCluster {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseThisCluster } as ThisCluster;
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

  fromJSON(_: any): ThisCluster {
    const message = { ...baseThisCluster } as ThisCluster;
    return message;
  },

  toJSON(_: ThisCluster): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ThisCluster>, I>>(_: I): ThisCluster {
    const message = { ...baseThisCluster } as ThisCluster;
    return message;
  },
};

messageTypeRegistry.set(ThisCluster.$type, ThisCluster);

const baseExternalClusterConnection: object = {
  $type: "yandex.cloud.mdb.kafka.v1.ExternalClusterConnection",
  bootstrapServers: "",
  saslUsername: "",
  saslMechanism: "",
  securityProtocol: "",
};

export const ExternalClusterConnection = {
  $type: "yandex.cloud.mdb.kafka.v1.ExternalClusterConnection" as const,

  encode(
    message: ExternalClusterConnection,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bootstrapServers !== "") {
      writer.uint32(10).string(message.bootstrapServers);
    }
    if (message.saslUsername !== "") {
      writer.uint32(18).string(message.saslUsername);
    }
    if (message.saslMechanism !== "") {
      writer.uint32(34).string(message.saslMechanism);
    }
    if (message.securityProtocol !== "") {
      writer.uint32(42).string(message.securityProtocol);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExternalClusterConnection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseExternalClusterConnection,
    } as ExternalClusterConnection;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bootstrapServers = reader.string();
          break;
        case 2:
          message.saslUsername = reader.string();
          break;
        case 4:
          message.saslMechanism = reader.string();
          break;
        case 5:
          message.securityProtocol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExternalClusterConnection {
    const message = {
      ...baseExternalClusterConnection,
    } as ExternalClusterConnection;
    message.bootstrapServers =
      object.bootstrapServers !== undefined && object.bootstrapServers !== null
        ? String(object.bootstrapServers)
        : "";
    message.saslUsername =
      object.saslUsername !== undefined && object.saslUsername !== null
        ? String(object.saslUsername)
        : "";
    message.saslMechanism =
      object.saslMechanism !== undefined && object.saslMechanism !== null
        ? String(object.saslMechanism)
        : "";
    message.securityProtocol =
      object.securityProtocol !== undefined && object.securityProtocol !== null
        ? String(object.securityProtocol)
        : "";
    return message;
  },

  toJSON(message: ExternalClusterConnection): unknown {
    const obj: any = {};
    message.bootstrapServers !== undefined &&
      (obj.bootstrapServers = message.bootstrapServers);
    message.saslUsername !== undefined &&
      (obj.saslUsername = message.saslUsername);
    message.saslMechanism !== undefined &&
      (obj.saslMechanism = message.saslMechanism);
    message.securityProtocol !== undefined &&
      (obj.securityProtocol = message.securityProtocol);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExternalClusterConnection>, I>>(
    object: I
  ): ExternalClusterConnection {
    const message = {
      ...baseExternalClusterConnection,
    } as ExternalClusterConnection;
    message.bootstrapServers = object.bootstrapServers ?? "";
    message.saslUsername = object.saslUsername ?? "";
    message.saslMechanism = object.saslMechanism ?? "";
    message.securityProtocol = object.securityProtocol ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ExternalClusterConnection.$type,
  ExternalClusterConnection
);

const baseConnectorConfigS3Sink: object = {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigS3Sink",
  topics: "",
  fileCompressionType: "",
};

export const ConnectorConfigS3Sink = {
  $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigS3Sink" as const,

  encode(
    message: ConnectorConfigS3Sink,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.topics !== "") {
      writer.uint32(10).string(message.topics);
    }
    if (message.fileCompressionType !== "") {
      writer.uint32(18).string(message.fileCompressionType);
    }
    if (message.fileMaxRecords !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.fileMaxRecords! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.s3Connection !== undefined) {
      S3Connection.encode(
        message.s3Connection,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ConnectorConfigS3Sink {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConnectorConfigS3Sink } as ConnectorConfigS3Sink;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.topics = reader.string();
          break;
        case 2:
          message.fileCompressionType = reader.string();
          break;
        case 3:
          message.fileMaxRecords = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 4:
          message.s3Connection = S3Connection.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConnectorConfigS3Sink {
    const message = { ...baseConnectorConfigS3Sink } as ConnectorConfigS3Sink;
    message.topics =
      object.topics !== undefined && object.topics !== null
        ? String(object.topics)
        : "";
    message.fileCompressionType =
      object.fileCompressionType !== undefined &&
      object.fileCompressionType !== null
        ? String(object.fileCompressionType)
        : "";
    message.fileMaxRecords =
      object.fileMaxRecords !== undefined && object.fileMaxRecords !== null
        ? Number(object.fileMaxRecords)
        : undefined;
    message.s3Connection =
      object.s3Connection !== undefined && object.s3Connection !== null
        ? S3Connection.fromJSON(object.s3Connection)
        : undefined;
    return message;
  },

  toJSON(message: ConnectorConfigS3Sink): unknown {
    const obj: any = {};
    message.topics !== undefined && (obj.topics = message.topics);
    message.fileCompressionType !== undefined &&
      (obj.fileCompressionType = message.fileCompressionType);
    message.fileMaxRecords !== undefined &&
      (obj.fileMaxRecords = message.fileMaxRecords);
    message.s3Connection !== undefined &&
      (obj.s3Connection = message.s3Connection
        ? S3Connection.toJSON(message.s3Connection)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConnectorConfigS3Sink>, I>>(
    object: I
  ): ConnectorConfigS3Sink {
    const message = { ...baseConnectorConfigS3Sink } as ConnectorConfigS3Sink;
    message.topics = object.topics ?? "";
    message.fileCompressionType = object.fileCompressionType ?? "";
    message.fileMaxRecords = object.fileMaxRecords ?? undefined;
    message.s3Connection =
      object.s3Connection !== undefined && object.s3Connection !== null
        ? S3Connection.fromPartial(object.s3Connection)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConnectorConfigS3Sink.$type, ConnectorConfigS3Sink);

const baseS3Connection: object = {
  $type: "yandex.cloud.mdb.kafka.v1.S3Connection",
  bucketName: "",
};

export const S3Connection = {
  $type: "yandex.cloud.mdb.kafka.v1.S3Connection" as const,

  encode(
    message: S3Connection,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bucketName !== "") {
      writer.uint32(10).string(message.bucketName);
    }
    if (message.externalS3 !== undefined) {
      ExternalS3Storage.encode(
        message.externalS3,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): S3Connection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseS3Connection } as S3Connection;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bucketName = reader.string();
          break;
        case 2:
          message.externalS3 = ExternalS3Storage.decode(
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

  fromJSON(object: any): S3Connection {
    const message = { ...baseS3Connection } as S3Connection;
    message.bucketName =
      object.bucketName !== undefined && object.bucketName !== null
        ? String(object.bucketName)
        : "";
    message.externalS3 =
      object.externalS3 !== undefined && object.externalS3 !== null
        ? ExternalS3Storage.fromJSON(object.externalS3)
        : undefined;
    return message;
  },

  toJSON(message: S3Connection): unknown {
    const obj: any = {};
    message.bucketName !== undefined && (obj.bucketName = message.bucketName);
    message.externalS3 !== undefined &&
      (obj.externalS3 = message.externalS3
        ? ExternalS3Storage.toJSON(message.externalS3)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<S3Connection>, I>>(
    object: I
  ): S3Connection {
    const message = { ...baseS3Connection } as S3Connection;
    message.bucketName = object.bucketName ?? "";
    message.externalS3 =
      object.externalS3 !== undefined && object.externalS3 !== null
        ? ExternalS3Storage.fromPartial(object.externalS3)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(S3Connection.$type, S3Connection);

const baseExternalS3Storage: object = {
  $type: "yandex.cloud.mdb.kafka.v1.ExternalS3Storage",
  accessKeyId: "",
  endpoint: "",
  region: "",
};

export const ExternalS3Storage = {
  $type: "yandex.cloud.mdb.kafka.v1.ExternalS3Storage" as const,

  encode(
    message: ExternalS3Storage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accessKeyId !== "") {
      writer.uint32(10).string(message.accessKeyId);
    }
    if (message.endpoint !== "") {
      writer.uint32(18).string(message.endpoint);
    }
    if (message.region !== "") {
      writer.uint32(26).string(message.region);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExternalS3Storage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExternalS3Storage } as ExternalS3Storage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accessKeyId = reader.string();
          break;
        case 2:
          message.endpoint = reader.string();
          break;
        case 3:
          message.region = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExternalS3Storage {
    const message = { ...baseExternalS3Storage } as ExternalS3Storage;
    message.accessKeyId =
      object.accessKeyId !== undefined && object.accessKeyId !== null
        ? String(object.accessKeyId)
        : "";
    message.endpoint =
      object.endpoint !== undefined && object.endpoint !== null
        ? String(object.endpoint)
        : "";
    message.region =
      object.region !== undefined && object.region !== null
        ? String(object.region)
        : "";
    return message;
  },

  toJSON(message: ExternalS3Storage): unknown {
    const obj: any = {};
    message.accessKeyId !== undefined &&
      (obj.accessKeyId = message.accessKeyId);
    message.endpoint !== undefined && (obj.endpoint = message.endpoint);
    message.region !== undefined && (obj.region = message.region);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExternalS3Storage>, I>>(
    object: I
  ): ExternalS3Storage {
    const message = { ...baseExternalS3Storage } as ExternalS3Storage;
    message.accessKeyId = object.accessKeyId ?? "";
    message.endpoint = object.endpoint ?? "";
    message.region = object.region ?? "";
    return message;
  },
};

messageTypeRegistry.set(ExternalS3Storage.$type, ExternalS3Storage);

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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
