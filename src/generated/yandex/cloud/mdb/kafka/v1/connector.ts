/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Int64Value } from '../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.mdb.kafka.v1';

/**
 * An object that represents an Apache Kafka® connector.
 *
 * See [the documentation](/docs/managed-kafka/concepts/connectors) for details.
 */
export interface ConnectorSpec {
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
    /** Configuration of Iceberg Sink connector. */
    connectorConfigIcebergSink?: ConnectorConfigIcebergSinkSpec | undefined;
}

export interface ConnectorSpec_PropertiesEntry {
    key: string;
    value: string;
}

export interface UpdateConnectorSpec {
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
    /** Update specification for Iceberg Sink Connector. */
    connectorConfigIcebergSink?: UpdateConnectorConfigIcebergSinkSpec | undefined;
}

export interface UpdateConnectorSpec_PropertiesEntry {
    key: string;
    value: string;
}

export interface ConnectorConfigMirrorMakerSpec {
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

export interface ThisClusterSpec {}

export interface ExternalClusterConnectionSpec {
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
    /** Name of the bucket. */
    bucketName: string;
    /** Configuration for connection to S3 storage. */
    externalS3?: ExternalS3StorageSpec | undefined;
}

export interface ExternalS3StorageSpec {
    /** ID of the AWS access key. */
    accessKeyId: string;
    /** Secret access key for the AWS access key. */
    secretAccessKey: string;
    /** S3 endpoint. */
    endpoint: string;
    /** AWS region. Default is 'us-east-1'. */
    region: string;
}

/** Specification for Kafka Iceberg Sink Connector. */
export interface ConnectorConfigIcebergSinkSpec {
    /** List of Kafka topics, separated by ','. */
    topics: string | undefined;
    /** Regex of Kafka topics. */
    topicsRegex: string | undefined;
    /** Control topic name for Iceberg connector. */
    controlTopic: string;
    /** Credentials for connecting to Managed Hive Metastore. */
    metastoreConnection?: MetastoreConnectionSpec;
    /** Credentials for connecting to S3 storage. */
    s3Connection?: IcebergS3ConnectionSpec;
    /** Static table routing */
    staticTables?: StaticTablesSpec | undefined;
    /** Dynamic table routing */
    dynamicTables?: DynamicTablesSpec | undefined;
    /** Optional table settings */
    tablesConfig?: IcebergTablesConfigSpec;
    /** Optional control settings */
    controlConfig?: IcebergControlSpec;
}

/** Specification for update Kafka Iceberg Sink Connector. */
export interface UpdateConnectorConfigIcebergSinkSpec {
    /** List of Kafka topics, separated by ','. */
    topics: string | undefined;
    /** Regex of Kafka topics. */
    topicsRegex: string | undefined;
    /** Control topic name for Iceberg connector. */
    controlTopic: string;
    /** Credentials for connecting to Managed Hive Metastore. */
    metastoreConnection?: MetastoreConnectionSpec;
    /** Credentials for connecting to S3 storage. */
    s3Connection?: IcebergS3ConnectionSpec;
    /** Optional table settings */
    tablesConfig?: IcebergTablesConfigSpec;
    /** Optional control settings */
    controlConfig?: IcebergControlSpec;
}

export interface StaticTablesSpec {
    /** List of tables, separated by ','. */
    tables: string;
}

export interface DynamicTablesSpec {
    /**
     * Field in the message to define the target table
     * The iceberg.tables.dynamic-enabled field is set to true
     */
    routeField: string;
}

export interface MetastoreConnectionSpec {
    /**
     * Thrift URI of Hive Metastore
     * Format: "thrift://host:9083"
     */
    catalogUri: string;
    /**
     * Warehouse root directory in S3
     * Format: "s3a://bucket-name/path/to/warehouse"
     * Can be any path within the bucket, not necessarily "/warehouse"
     */
    warehouse: string;
}

/**
 * Specification for IcebergS3Connection -
 * settings of connection to AWS-compatible S3 storage, that
 * are target of Kafka Iceberg-connectors.
 * YC Object Storage is AWS-compatible.
 */
export interface IcebergS3ConnectionSpec {
    /** Configuration for connection to S3 storage. */
    externalS3?: ExternalIcebergS3StorageSpec | undefined;
}

export interface ExternalIcebergS3StorageSpec {
    /** ID of the AWS access key. */
    accessKeyId: string;
    /** Secret access key for the AWS access key. */
    secretAccessKey: string;
    /** S3 endpoint. */
    endpoint: string;
    /** AWS region. Default is 'us-east-1'. */
    region: string;
}

export interface IcebergTablesConfigSpec {
    /**
     * Default Git-like branch name for Iceberg commits.
     * Default: "main"
     */
    defaultCommitBranch: string;
    /** List of columns used as identifiers for upsert operations, separated by ','. */
    defaultIdColumns: string;
    /**
     * Comma-separated list of columns or transform expressions for table partitioning.
     * Defines physical data layout for query optimization.
     * Examples:
     *   - "date"
     *   - "year,month"
     *   - "year(timestamp),month(timestamp)"
     *   - "days(timestamp)"
     *   - "bucket(16,user_id)"
     */
    defaultPartitionBy: string;
    /**
     * Enable automatic schema evolution.
     * Default: false
     */
    evolveSchemaEnabled: boolean;
    /**
     * Force all columns to be nullable (optional).
     * Default: false
     */
    schemaForceOptional: boolean;
    /**
     * Enable case-insensitive field name matching.
     * Default: false
     */
    schemaCaseInsensitive: boolean;
}

export interface IcebergControlSpec {
    /**
     * Consumer group ID prefix for control topic.
     * Default: "cg-control"
     */
    groupIdPrefix: string;
    /**
     * Interval between commits in milliseconds.
     * Default: 300000 (5 minutes)
     */
    commitIntervalMs?: number;
    /**
     * Commit operation timeout in milliseconds.
     * Default: 30000 (30 seconds)
     */
    commitTimeoutMs?: number;
    /**
     * Number of threads for commit operations.
     * Default: cores * 2
     */
    commitThreads?: number;
    /**
     * Prefix for transactional operations.
     * Default: ""
     */
    transactionalPrefix: string;
}

export interface Connector {
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
    /** Configuration of Iceberg Sink connector. */
    connectorConfigIcebergSink?: ConnectorConfigIcebergSink | undefined;
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
        case 'HEALTH_UNKNOWN':
            return Connector_Health.HEALTH_UNKNOWN;
        case 1:
        case 'ALIVE':
            return Connector_Health.ALIVE;
        case 2:
        case 'DEAD':
            return Connector_Health.DEAD;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Connector_Health.UNRECOGNIZED;
    }
}

export function connector_HealthToJSON(object: Connector_Health): string {
    switch (object) {
        case Connector_Health.HEALTH_UNKNOWN:
            return 'HEALTH_UNKNOWN';
        case Connector_Health.ALIVE:
            return 'ALIVE';
        case Connector_Health.DEAD:
            return 'DEAD';
        default:
            return 'UNKNOWN';
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
        case 'STATUS_UNKNOWN':
            return Connector_Status.STATUS_UNKNOWN;
        case 1:
        case 'RUNNING':
            return Connector_Status.RUNNING;
        case 2:
        case 'ERROR':
            return Connector_Status.ERROR;
        case 3:
        case 'PAUSED':
            return Connector_Status.PAUSED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Connector_Status.UNRECOGNIZED;
    }
}

export function connector_StatusToJSON(object: Connector_Status): string {
    switch (object) {
        case Connector_Status.STATUS_UNKNOWN:
            return 'STATUS_UNKNOWN';
        case Connector_Status.RUNNING:
            return 'RUNNING';
        case Connector_Status.ERROR:
            return 'ERROR';
        case Connector_Status.PAUSED:
            return 'PAUSED';
        default:
            return 'UNKNOWN';
    }
}

export interface Connector_PropertiesEntry {
    key: string;
    value: string;
}

export interface ConnectorConfigMirrorMaker {
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

export interface ThisCluster {}

export interface ExternalClusterConnection {
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
    /** Name of the bucket. */
    bucketName: string;
    /** Configuration for connection to S3 storage. */
    externalS3?: ExternalS3Storage | undefined;
}

export interface ExternalS3Storage {
    /** ID of the AWS access key. */
    accessKeyId: string;
    /** S3 endpoint. */
    endpoint: string;
    /** AWS region. Default is 'us-east-1'. */
    region: string;
}

/** Resource for Kafka Iceberg Sink Connector. */
export interface ConnectorConfigIcebergSink {
    /** List of Kafka topics, separated by ','. */
    topics: string | undefined;
    /** Regex of Kafka topics. */
    topicsRegex: string | undefined;
    /** Control topic name for Iceberg connector. */
    controlTopic: string;
    /** Credentials for connecting to Managed Hive Metastore. */
    metastoreConnection?: MetastoreConnection;
    /** Credentials for connecting to S3 storage. */
    s3Connection?: IcebergS3Connection;
    /** Static table routing */
    staticTables?: StaticTables | undefined;
    /** Dynamic table routing */
    dynamicTables?: DynamicTables | undefined;
    /** Optional table settings */
    tablesConfig?: IcebergTablesConfig;
    /** Optional control settings */
    controlConfig?: IcebergControl;
}

export interface StaticTables {
    /** List of tables, separated by ','. */
    tables: string;
}

export interface DynamicTables {
    /**
     * Field in the message to define the target table
     * The iceberg.tables.dynamic-enabled field is set to true
     */
    routeField: string;
}

export interface MetastoreConnection {
    /**
     * Thrift URI of Hive Metastore
     * Format: "thrift://host:9083"
     */
    catalogUri: string;
    /**
     * Warehouse root directory in S3
     * Format: "s3a://bucket-name/path/to/warehouse"
     * Can be any path within the bucket, not necessarily "/warehouse"
     */
    warehouse: string;
}

/**
 * Resource for IcebergS3Connection -
 * settings of connection to AWS-compatible S3 storage, that
 * are target of Kafka Iceberg-connectors.
 * YC Object Storage is AWS-compatible.
 */
export interface IcebergS3Connection {
    /** Configuration for connection to S3 storage. */
    externalS3?: ExternalIcebergS3Storage | undefined;
}

export interface ExternalIcebergS3Storage {
    /** ID of the AWS access key. */
    accessKeyId: string;
    /** S3 endpoint. */
    endpoint: string;
    /** AWS region. Default is 'us-east-1'. */
    region: string;
}

export interface IcebergTablesConfig {
    /**
     * Default Git-like branch name for Iceberg commits.
     * Default: "main"
     */
    defaultCommitBranch: string;
    /** List of columns used as identifiers for upsert operations, separated by ','. */
    defaultIdColumns: string;
    /**
     * Comma-separated list of columns or transform expressions for table partitioning.
     * Defines physical data layout for query optimization.
     * Examples:
     *   - "date"
     *   - "year,month"
     *   - "year(timestamp),month(timestamp)"
     *   - "days(timestamp)"
     *   - "bucket(16,user_id)"
     */
    defaultPartitionBy: string;
    /**
     * Enable automatic schema evolution.
     * Default: false
     */
    evolveSchemaEnabled: boolean;
    /**
     * Force all columns to be nullable (optional).
     * Default: false
     */
    schemaForceOptional: boolean;
    /**
     * Enable case-insensitive field name matching.
     * Default: false
     */
    schemaCaseInsensitive: boolean;
}

export interface IcebergControl {
    /**
     * Consumer group ID prefix for control topic.
     * Default: "cg-control"
     */
    groupIdPrefix: string;
    /**
     * Interval between commits in milliseconds.
     * Default: 300000 (5 minutes)
     */
    commitIntervalMs?: number;
    /**
     * Commit operation timeout in milliseconds.
     * Default: 30000 (30 seconds)
     */
    commitTimeoutMs?: number;
    /**
     * Number of threads for commit operations.
     * Default: cores * 2
     */
    commitThreads?: number;
    /**
     * Prefix for transactional operations.
     * Default: ""
     */
    transactionalPrefix: string;
}

const baseConnectorSpec: object = { name: '' };

export const ConnectorSpec: {
    encode(message: ConnectorSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectorSpec;
    fromJSON(object: any): ConnectorSpec;
    toJSON(message: ConnectorSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<ConnectorSpec>, I>>(object: I): ConnectorSpec;
} = {
    encode(message: ConnectorSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.tasksMax !== undefined) {
            Int64Value.encode({ value: message.tasksMax! }, writer.uint32(18).fork()).ldelim();
        }
        Object.entries(message.properties).forEach(([key, value]) => {
            ConnectorSpec_PropertiesEntry.encode(
                { key: key as any, value },
                writer.uint32(26).fork(),
            ).ldelim();
        });
        if (message.connectorConfigMirrormaker !== undefined) {
            ConnectorConfigMirrorMakerSpec.encode(
                message.connectorConfigMirrormaker,
                writer.uint32(82).fork(),
            ).ldelim();
        }
        if (message.connectorConfigS3Sink !== undefined) {
            ConnectorConfigS3SinkSpec.encode(
                message.connectorConfigS3Sink,
                writer.uint32(90).fork(),
            ).ldelim();
        }
        if (message.connectorConfigIcebergSink !== undefined) {
            ConnectorConfigIcebergSinkSpec.encode(
                message.connectorConfigIcebergSink,
                writer.uint32(98).fork(),
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
                    const entry3 = ConnectorSpec_PropertiesEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.properties[entry3.key] = entry3.value;
                    }
                    break;
                case 10:
                    message.connectorConfigMirrormaker = ConnectorConfigMirrorMakerSpec.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 11:
                    message.connectorConfigS3Sink = ConnectorConfigS3SinkSpec.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 12:
                    message.connectorConfigIcebergSink = ConnectorConfigIcebergSinkSpec.decode(
                        reader,
                        reader.uint32(),
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
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
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
                ? ConnectorConfigMirrorMakerSpec.fromJSON(object.connectorConfigMirrormaker)
                : undefined;
        message.connectorConfigS3Sink =
            object.connectorConfigS3Sink !== undefined && object.connectorConfigS3Sink !== null
                ? ConnectorConfigS3SinkSpec.fromJSON(object.connectorConfigS3Sink)
                : undefined;
        message.connectorConfigIcebergSink =
            object.connectorConfigIcebergSink !== undefined &&
            object.connectorConfigIcebergSink !== null
                ? ConnectorConfigIcebergSinkSpec.fromJSON(object.connectorConfigIcebergSink)
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
                ? ConnectorConfigMirrorMakerSpec.toJSON(message.connectorConfigMirrormaker)
                : undefined);
        message.connectorConfigS3Sink !== undefined &&
            (obj.connectorConfigS3Sink = message.connectorConfigS3Sink
                ? ConnectorConfigS3SinkSpec.toJSON(message.connectorConfigS3Sink)
                : undefined);
        message.connectorConfigIcebergSink !== undefined &&
            (obj.connectorConfigIcebergSink = message.connectorConfigIcebergSink
                ? ConnectorConfigIcebergSinkSpec.toJSON(message.connectorConfigIcebergSink)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ConnectorSpec>, I>>(object: I): ConnectorSpec {
        const message = { ...baseConnectorSpec } as ConnectorSpec;
        message.name = object.name ?? '';
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
                ? ConnectorConfigMirrorMakerSpec.fromPartial(object.connectorConfigMirrormaker)
                : undefined;
        message.connectorConfigS3Sink =
            object.connectorConfigS3Sink !== undefined && object.connectorConfigS3Sink !== null
                ? ConnectorConfigS3SinkSpec.fromPartial(object.connectorConfigS3Sink)
                : undefined;
        message.connectorConfigIcebergSink =
            object.connectorConfigIcebergSink !== undefined &&
            object.connectorConfigIcebergSink !== null
                ? ConnectorConfigIcebergSinkSpec.fromPartial(object.connectorConfigIcebergSink)
                : undefined;
        return message;
    },
};

const baseConnectorSpec_PropertiesEntry: object = { key: '', value: '' };

export const ConnectorSpec_PropertiesEntry: {
    encode(message: ConnectorSpec_PropertiesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectorSpec_PropertiesEntry;
    fromJSON(object: any): ConnectorSpec_PropertiesEntry;
    toJSON(message: ConnectorSpec_PropertiesEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<ConnectorSpec_PropertiesEntry>, I>>(object: I): ConnectorSpec_PropertiesEntry;
} = {
    encode(
        message: ConnectorSpec_PropertiesEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectorSpec_PropertiesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConnectorSpec_PropertiesEntry } as ConnectorSpec_PropertiesEntry;
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
        const message = { ...baseConnectorSpec_PropertiesEntry } as ConnectorSpec_PropertiesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: ConnectorSpec_PropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ConnectorSpec_PropertiesEntry>, I>>(
        object: I,
    ): ConnectorSpec_PropertiesEntry {
        const message = { ...baseConnectorSpec_PropertiesEntry } as ConnectorSpec_PropertiesEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateConnectorSpec: object = {};

export const UpdateConnectorSpec: {
    encode(message: UpdateConnectorSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateConnectorSpec;
    fromJSON(object: any): UpdateConnectorSpec;
    toJSON(message: UpdateConnectorSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateConnectorSpec>, I>>(object: I): UpdateConnectorSpec;
} = {
    encode(message: UpdateConnectorSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.tasksMax !== undefined) {
            Int64Value.encode({ value: message.tasksMax! }, writer.uint32(10).fork()).ldelim();
        }
        Object.entries(message.properties).forEach(([key, value]) => {
            UpdateConnectorSpec_PropertiesEntry.encode(
                { key: key as any, value },
                writer.uint32(18).fork(),
            ).ldelim();
        });
        if (message.connectorConfigMirrormaker !== undefined) {
            ConnectorConfigMirrorMakerSpec.encode(
                message.connectorConfigMirrormaker,
                writer.uint32(82).fork(),
            ).ldelim();
        }
        if (message.connectorConfigS3Sink !== undefined) {
            UpdateConnectorConfigS3SinkSpec.encode(
                message.connectorConfigS3Sink,
                writer.uint32(90).fork(),
            ).ldelim();
        }
        if (message.connectorConfigIcebergSink !== undefined) {
            UpdateConnectorConfigIcebergSinkSpec.encode(
                message.connectorConfigIcebergSink,
                writer.uint32(98).fork(),
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
                        reader.uint32(),
                    );
                    if (entry2.value !== undefined) {
                        message.properties[entry2.key] = entry2.value;
                    }
                    break;
                case 10:
                    message.connectorConfigMirrormaker = ConnectorConfigMirrorMakerSpec.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 11:
                    message.connectorConfigS3Sink = UpdateConnectorConfigS3SinkSpec.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 12:
                    message.connectorConfigIcebergSink =
                        UpdateConnectorConfigIcebergSinkSpec.decode(reader, reader.uint32());
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
                ? ConnectorConfigMirrorMakerSpec.fromJSON(object.connectorConfigMirrormaker)
                : undefined;
        message.connectorConfigS3Sink =
            object.connectorConfigS3Sink !== undefined && object.connectorConfigS3Sink !== null
                ? UpdateConnectorConfigS3SinkSpec.fromJSON(object.connectorConfigS3Sink)
                : undefined;
        message.connectorConfigIcebergSink =
            object.connectorConfigIcebergSink !== undefined &&
            object.connectorConfigIcebergSink !== null
                ? UpdateConnectorConfigIcebergSinkSpec.fromJSON(object.connectorConfigIcebergSink)
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
                ? ConnectorConfigMirrorMakerSpec.toJSON(message.connectorConfigMirrormaker)
                : undefined);
        message.connectorConfigS3Sink !== undefined &&
            (obj.connectorConfigS3Sink = message.connectorConfigS3Sink
                ? UpdateConnectorConfigS3SinkSpec.toJSON(message.connectorConfigS3Sink)
                : undefined);
        message.connectorConfigIcebergSink !== undefined &&
            (obj.connectorConfigIcebergSink = message.connectorConfigIcebergSink
                ? UpdateConnectorConfigIcebergSinkSpec.toJSON(message.connectorConfigIcebergSink)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateConnectorSpec>, I>>(
        object: I,
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
                ? ConnectorConfigMirrorMakerSpec.fromPartial(object.connectorConfigMirrormaker)
                : undefined;
        message.connectorConfigS3Sink =
            object.connectorConfigS3Sink !== undefined && object.connectorConfigS3Sink !== null
                ? UpdateConnectorConfigS3SinkSpec.fromPartial(object.connectorConfigS3Sink)
                : undefined;
        message.connectorConfigIcebergSink =
            object.connectorConfigIcebergSink !== undefined &&
            object.connectorConfigIcebergSink !== null
                ? UpdateConnectorConfigIcebergSinkSpec.fromPartial(
                      object.connectorConfigIcebergSink,
                  )
                : undefined;
        return message;
    },
};

const baseUpdateConnectorSpec_PropertiesEntry: object = { key: '', value: '' };

export const UpdateConnectorSpec_PropertiesEntry: {
    encode(message: UpdateConnectorSpec_PropertiesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateConnectorSpec_PropertiesEntry;
    fromJSON(object: any): UpdateConnectorSpec_PropertiesEntry;
    toJSON(message: UpdateConnectorSpec_PropertiesEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateConnectorSpec_PropertiesEntry>, I>>(object: I): UpdateConnectorSpec_PropertiesEntry;
} = {
    encode(
        message: UpdateConnectorSpec_PropertiesEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateConnectorSpec_PropertiesEntry {
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
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateConnectorSpec_PropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateConnectorSpec_PropertiesEntry>, I>>(
        object: I,
    ): UpdateConnectorSpec_PropertiesEntry {
        const message = {
            ...baseUpdateConnectorSpec_PropertiesEntry,
        } as UpdateConnectorSpec_PropertiesEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseConnectorConfigMirrorMakerSpec: object = { topics: '' };

export const ConnectorConfigMirrorMakerSpec: {
    encode(message: ConnectorConfigMirrorMakerSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectorConfigMirrorMakerSpec;
    fromJSON(object: any): ConnectorConfigMirrorMakerSpec;
    toJSON(message: ConnectorConfigMirrorMakerSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<ConnectorConfigMirrorMakerSpec>, I>>(object: I): ConnectorConfigMirrorMakerSpec;
} = {
    encode(
        message: ConnectorConfigMirrorMakerSpec,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.sourceCluster !== undefined) {
            ClusterConnectionSpec.encode(message.sourceCluster, writer.uint32(10).fork()).ldelim();
        }
        if (message.targetCluster !== undefined) {
            ClusterConnectionSpec.encode(message.targetCluster, writer.uint32(18).fork()).ldelim();
        }
        if (message.topics !== '') {
            writer.uint32(26).string(message.topics);
        }
        if (message.replicationFactor !== undefined) {
            Int64Value.encode(
                { value: message.replicationFactor! },
                writer.uint32(34).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectorConfigMirrorMakerSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConnectorConfigMirrorMakerSpec } as ConnectorConfigMirrorMakerSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourceCluster = ClusterConnectionSpec.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.targetCluster = ClusterConnectionSpec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.topics = reader.string();
                    break;
                case 4:
                    message.replicationFactor = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ConnectorConfigMirrorMakerSpec {
        const message = { ...baseConnectorConfigMirrorMakerSpec } as ConnectorConfigMirrorMakerSpec;
        message.sourceCluster =
            object.sourceCluster !== undefined && object.sourceCluster !== null
                ? ClusterConnectionSpec.fromJSON(object.sourceCluster)
                : undefined;
        message.targetCluster =
            object.targetCluster !== undefined && object.targetCluster !== null
                ? ClusterConnectionSpec.fromJSON(object.targetCluster)
                : undefined;
        message.topics =
            object.topics !== undefined && object.topics !== null ? String(object.topics) : '';
        message.replicationFactor =
            object.replicationFactor !== undefined && object.replicationFactor !== null
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
        object: I,
    ): ConnectorConfigMirrorMakerSpec {
        const message = { ...baseConnectorConfigMirrorMakerSpec } as ConnectorConfigMirrorMakerSpec;
        message.sourceCluster =
            object.sourceCluster !== undefined && object.sourceCluster !== null
                ? ClusterConnectionSpec.fromPartial(object.sourceCluster)
                : undefined;
        message.targetCluster =
            object.targetCluster !== undefined && object.targetCluster !== null
                ? ClusterConnectionSpec.fromPartial(object.targetCluster)
                : undefined;
        message.topics = object.topics ?? '';
        message.replicationFactor = object.replicationFactor ?? undefined;
        return message;
    },
};

const baseClusterConnectionSpec: object = { alias: '' };

export const ClusterConnectionSpec: {
    encode(message: ClusterConnectionSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClusterConnectionSpec;
    fromJSON(object: any): ClusterConnectionSpec;
    toJSON(message: ClusterConnectionSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<ClusterConnectionSpec>, I>>(object: I): ClusterConnectionSpec;
} = {
    encode(message: ClusterConnectionSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.alias !== '') {
            writer.uint32(10).string(message.alias);
        }
        if (message.thisCluster !== undefined) {
            ThisClusterSpec.encode(message.thisCluster, writer.uint32(18).fork()).ldelim();
        }
        if (message.externalCluster !== undefined) {
            ExternalClusterConnectionSpec.encode(
                message.externalCluster,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClusterConnectionSpec {
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
                        reader.uint32(),
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
            object.alias !== undefined && object.alias !== null ? String(object.alias) : '';
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
        object: I,
    ): ClusterConnectionSpec {
        const message = { ...baseClusterConnectionSpec } as ClusterConnectionSpec;
        message.alias = object.alias ?? '';
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

const baseThisClusterSpec: object = {};

export const ThisClusterSpec: {
    encode(message: ThisClusterSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ThisClusterSpec;
    fromJSON(object: any): ThisClusterSpec;
    toJSON(message: ThisClusterSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<ThisClusterSpec>, I>>(object: I): ThisClusterSpec;
} = {
    encode(_: ThisClusterSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    fromPartial<I extends Exact<DeepPartial<ThisClusterSpec>, I>>(_: I): ThisClusterSpec {
        const message = { ...baseThisClusterSpec } as ThisClusterSpec;
        return message;
    },
};

const baseExternalClusterConnectionSpec: object = {
    bootstrapServers: '',
    saslUsername: '',
    saslPassword: '',
    saslMechanism: '',
    securityProtocol: '',
    sslTruststoreCertificates: '',
};

export const ExternalClusterConnectionSpec: {
    encode(message: ExternalClusterConnectionSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExternalClusterConnectionSpec;
    fromJSON(object: any): ExternalClusterConnectionSpec;
    toJSON(message: ExternalClusterConnectionSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<ExternalClusterConnectionSpec>, I>>(object: I): ExternalClusterConnectionSpec;
} = {
    encode(
        message: ExternalClusterConnectionSpec,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.bootstrapServers !== '') {
            writer.uint32(10).string(message.bootstrapServers);
        }
        if (message.saslUsername !== '') {
            writer.uint32(18).string(message.saslUsername);
        }
        if (message.saslPassword !== '') {
            writer.uint32(26).string(message.saslPassword);
        }
        if (message.saslMechanism !== '') {
            writer.uint32(34).string(message.saslMechanism);
        }
        if (message.securityProtocol !== '') {
            writer.uint32(42).string(message.securityProtocol);
        }
        if (message.sslTruststoreCertificates !== '') {
            writer.uint32(50).string(message.sslTruststoreCertificates);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ExternalClusterConnectionSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExternalClusterConnectionSpec } as ExternalClusterConnectionSpec;
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
        const message = { ...baseExternalClusterConnectionSpec } as ExternalClusterConnectionSpec;
        message.bootstrapServers =
            object.bootstrapServers !== undefined && object.bootstrapServers !== null
                ? String(object.bootstrapServers)
                : '';
        message.saslUsername =
            object.saslUsername !== undefined && object.saslUsername !== null
                ? String(object.saslUsername)
                : '';
        message.saslPassword =
            object.saslPassword !== undefined && object.saslPassword !== null
                ? String(object.saslPassword)
                : '';
        message.saslMechanism =
            object.saslMechanism !== undefined && object.saslMechanism !== null
                ? String(object.saslMechanism)
                : '';
        message.securityProtocol =
            object.securityProtocol !== undefined && object.securityProtocol !== null
                ? String(object.securityProtocol)
                : '';
        message.sslTruststoreCertificates =
            object.sslTruststoreCertificates !== undefined &&
            object.sslTruststoreCertificates !== null
                ? String(object.sslTruststoreCertificates)
                : '';
        return message;
    },

    toJSON(message: ExternalClusterConnectionSpec): unknown {
        const obj: any = {};
        message.bootstrapServers !== undefined && (obj.bootstrapServers = message.bootstrapServers);
        message.saslUsername !== undefined && (obj.saslUsername = message.saslUsername);
        message.saslPassword !== undefined && (obj.saslPassword = message.saslPassword);
        message.saslMechanism !== undefined && (obj.saslMechanism = message.saslMechanism);
        message.securityProtocol !== undefined && (obj.securityProtocol = message.securityProtocol);
        message.sslTruststoreCertificates !== undefined &&
            (obj.sslTruststoreCertificates = message.sslTruststoreCertificates);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ExternalClusterConnectionSpec>, I>>(
        object: I,
    ): ExternalClusterConnectionSpec {
        const message = { ...baseExternalClusterConnectionSpec } as ExternalClusterConnectionSpec;
        message.bootstrapServers = object.bootstrapServers ?? '';
        message.saslUsername = object.saslUsername ?? '';
        message.saslPassword = object.saslPassword ?? '';
        message.saslMechanism = object.saslMechanism ?? '';
        message.securityProtocol = object.securityProtocol ?? '';
        message.sslTruststoreCertificates = object.sslTruststoreCertificates ?? '';
        return message;
    },
};

const baseConnectorConfigS3SinkSpec: object = { topics: '', fileCompressionType: '' };

export const ConnectorConfigS3SinkSpec: {
    encode(message: ConnectorConfigS3SinkSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectorConfigS3SinkSpec;
    fromJSON(object: any): ConnectorConfigS3SinkSpec;
    toJSON(message: ConnectorConfigS3SinkSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<ConnectorConfigS3SinkSpec>, I>>(object: I): ConnectorConfigS3SinkSpec;
} = {
    encode(
        message: ConnectorConfigS3SinkSpec,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.topics !== '') {
            writer.uint32(10).string(message.topics);
        }
        if (message.fileCompressionType !== '') {
            writer.uint32(18).string(message.fileCompressionType);
        }
        if (message.fileMaxRecords !== undefined) {
            Int64Value.encode(
                { value: message.fileMaxRecords! },
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.s3Connection !== undefined) {
            S3ConnectionSpec.encode(message.s3Connection, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectorConfigS3SinkSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConnectorConfigS3SinkSpec } as ConnectorConfigS3SinkSpec;
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
                    message.fileMaxRecords = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.s3Connection = S3ConnectionSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ConnectorConfigS3SinkSpec {
        const message = { ...baseConnectorConfigS3SinkSpec } as ConnectorConfigS3SinkSpec;
        message.topics =
            object.topics !== undefined && object.topics !== null ? String(object.topics) : '';
        message.fileCompressionType =
            object.fileCompressionType !== undefined && object.fileCompressionType !== null
                ? String(object.fileCompressionType)
                : '';
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
        message.fileMaxRecords !== undefined && (obj.fileMaxRecords = message.fileMaxRecords);
        message.s3Connection !== undefined &&
            (obj.s3Connection = message.s3Connection
                ? S3ConnectionSpec.toJSON(message.s3Connection)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ConnectorConfigS3SinkSpec>, I>>(
        object: I,
    ): ConnectorConfigS3SinkSpec {
        const message = { ...baseConnectorConfigS3SinkSpec } as ConnectorConfigS3SinkSpec;
        message.topics = object.topics ?? '';
        message.fileCompressionType = object.fileCompressionType ?? '';
        message.fileMaxRecords = object.fileMaxRecords ?? undefined;
        message.s3Connection =
            object.s3Connection !== undefined && object.s3Connection !== null
                ? S3ConnectionSpec.fromPartial(object.s3Connection)
                : undefined;
        return message;
    },
};

const baseUpdateConnectorConfigS3SinkSpec: object = { topics: '' };

export const UpdateConnectorConfigS3SinkSpec: {
    encode(message: UpdateConnectorConfigS3SinkSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateConnectorConfigS3SinkSpec;
    fromJSON(object: any): UpdateConnectorConfigS3SinkSpec;
    toJSON(message: UpdateConnectorConfigS3SinkSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateConnectorConfigS3SinkSpec>, I>>(object: I): UpdateConnectorConfigS3SinkSpec;
} = {
    encode(
        message: UpdateConnectorConfigS3SinkSpec,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.topics !== '') {
            writer.uint32(10).string(message.topics);
        }
        if (message.fileMaxRecords !== undefined) {
            Int64Value.encode(
                { value: message.fileMaxRecords! },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.s3Connection !== undefined) {
            S3ConnectionSpec.encode(message.s3Connection, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateConnectorConfigS3SinkSpec {
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
                    message.fileMaxRecords = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.s3Connection = S3ConnectionSpec.decode(reader, reader.uint32());
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
            object.topics !== undefined && object.topics !== null ? String(object.topics) : '';
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
        message.fileMaxRecords !== undefined && (obj.fileMaxRecords = message.fileMaxRecords);
        message.s3Connection !== undefined &&
            (obj.s3Connection = message.s3Connection
                ? S3ConnectionSpec.toJSON(message.s3Connection)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateConnectorConfigS3SinkSpec>, I>>(
        object: I,
    ): UpdateConnectorConfigS3SinkSpec {
        const message = {
            ...baseUpdateConnectorConfigS3SinkSpec,
        } as UpdateConnectorConfigS3SinkSpec;
        message.topics = object.topics ?? '';
        message.fileMaxRecords = object.fileMaxRecords ?? undefined;
        message.s3Connection =
            object.s3Connection !== undefined && object.s3Connection !== null
                ? S3ConnectionSpec.fromPartial(object.s3Connection)
                : undefined;
        return message;
    },
};

const baseS3ConnectionSpec: object = { bucketName: '' };

export const S3ConnectionSpec: {
    encode(message: S3ConnectionSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): S3ConnectionSpec;
    fromJSON(object: any): S3ConnectionSpec;
    toJSON(message: S3ConnectionSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<S3ConnectionSpec>, I>>(object: I): S3ConnectionSpec;
} = {
    encode(message: S3ConnectionSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.bucketName !== '') {
            writer.uint32(10).string(message.bucketName);
        }
        if (message.externalS3 !== undefined) {
            ExternalS3StorageSpec.encode(message.externalS3, writer.uint32(18).fork()).ldelim();
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
                    message.externalS3 = ExternalS3StorageSpec.decode(reader, reader.uint32());
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
                : '';
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

    fromPartial<I extends Exact<DeepPartial<S3ConnectionSpec>, I>>(object: I): S3ConnectionSpec {
        const message = { ...baseS3ConnectionSpec } as S3ConnectionSpec;
        message.bucketName = object.bucketName ?? '';
        message.externalS3 =
            object.externalS3 !== undefined && object.externalS3 !== null
                ? ExternalS3StorageSpec.fromPartial(object.externalS3)
                : undefined;
        return message;
    },
};

const baseExternalS3StorageSpec: object = {
    accessKeyId: '',
    secretAccessKey: '',
    endpoint: '',
    region: '',
};

export const ExternalS3StorageSpec: {
    encode(message: ExternalS3StorageSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExternalS3StorageSpec;
    fromJSON(object: any): ExternalS3StorageSpec;
    toJSON(message: ExternalS3StorageSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<ExternalS3StorageSpec>, I>>(object: I): ExternalS3StorageSpec;
} = {
    encode(message: ExternalS3StorageSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.accessKeyId !== '') {
            writer.uint32(10).string(message.accessKeyId);
        }
        if (message.secretAccessKey !== '') {
            writer.uint32(18).string(message.secretAccessKey);
        }
        if (message.endpoint !== '') {
            writer.uint32(26).string(message.endpoint);
        }
        if (message.region !== '') {
            writer.uint32(34).string(message.region);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ExternalS3StorageSpec {
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
                : '';
        message.secretAccessKey =
            object.secretAccessKey !== undefined && object.secretAccessKey !== null
                ? String(object.secretAccessKey)
                : '';
        message.endpoint =
            object.endpoint !== undefined && object.endpoint !== null
                ? String(object.endpoint)
                : '';
        message.region =
            object.region !== undefined && object.region !== null ? String(object.region) : '';
        return message;
    },

    toJSON(message: ExternalS3StorageSpec): unknown {
        const obj: any = {};
        message.accessKeyId !== undefined && (obj.accessKeyId = message.accessKeyId);
        message.secretAccessKey !== undefined && (obj.secretAccessKey = message.secretAccessKey);
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        message.region !== undefined && (obj.region = message.region);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ExternalS3StorageSpec>, I>>(
        object: I,
    ): ExternalS3StorageSpec {
        const message = { ...baseExternalS3StorageSpec } as ExternalS3StorageSpec;
        message.accessKeyId = object.accessKeyId ?? '';
        message.secretAccessKey = object.secretAccessKey ?? '';
        message.endpoint = object.endpoint ?? '';
        message.region = object.region ?? '';
        return message;
    },
};

const baseConnectorConfigIcebergSinkSpec: object = { controlTopic: '' };

export const ConnectorConfigIcebergSinkSpec: {
    encode(message: ConnectorConfigIcebergSinkSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectorConfigIcebergSinkSpec;
    fromJSON(object: any): ConnectorConfigIcebergSinkSpec;
    toJSON(message: ConnectorConfigIcebergSinkSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<ConnectorConfigIcebergSinkSpec>, I>>(object: I): ConnectorConfigIcebergSinkSpec;
} = {
    encode(
        message: ConnectorConfigIcebergSinkSpec,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.topics !== undefined) {
            writer.uint32(10).string(message.topics);
        }
        if (message.topicsRegex !== undefined) {
            writer.uint32(18).string(message.topicsRegex);
        }
        if (message.controlTopic !== '') {
            writer.uint32(90).string(message.controlTopic);
        }
        if (message.metastoreConnection !== undefined) {
            MetastoreConnectionSpec.encode(
                message.metastoreConnection,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.s3Connection !== undefined) {
            IcebergS3ConnectionSpec.encode(message.s3Connection, writer.uint32(34).fork()).ldelim();
        }
        if (message.staticTables !== undefined) {
            StaticTablesSpec.encode(message.staticTables, writer.uint32(58).fork()).ldelim();
        }
        if (message.dynamicTables !== undefined) {
            DynamicTablesSpec.encode(message.dynamicTables, writer.uint32(66).fork()).ldelim();
        }
        if (message.tablesConfig !== undefined) {
            IcebergTablesConfigSpec.encode(message.tablesConfig, writer.uint32(74).fork()).ldelim();
        }
        if (message.controlConfig !== undefined) {
            IcebergControlSpec.encode(message.controlConfig, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectorConfigIcebergSinkSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConnectorConfigIcebergSinkSpec } as ConnectorConfigIcebergSinkSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.topics = reader.string();
                    break;
                case 2:
                    message.topicsRegex = reader.string();
                    break;
                case 11:
                    message.controlTopic = reader.string();
                    break;
                case 3:
                    message.metastoreConnection = MetastoreConnectionSpec.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 4:
                    message.s3Connection = IcebergS3ConnectionSpec.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.staticTables = StaticTablesSpec.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.dynamicTables = DynamicTablesSpec.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.tablesConfig = IcebergTablesConfigSpec.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.controlConfig = IcebergControlSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ConnectorConfigIcebergSinkSpec {
        const message = { ...baseConnectorConfigIcebergSinkSpec } as ConnectorConfigIcebergSinkSpec;
        message.topics =
            object.topics !== undefined && object.topics !== null
                ? String(object.topics)
                : undefined;
        message.topicsRegex =
            object.topicsRegex !== undefined && object.topicsRegex !== null
                ? String(object.topicsRegex)
                : undefined;
        message.controlTopic =
            object.controlTopic !== undefined && object.controlTopic !== null
                ? String(object.controlTopic)
                : '';
        message.metastoreConnection =
            object.metastoreConnection !== undefined && object.metastoreConnection !== null
                ? MetastoreConnectionSpec.fromJSON(object.metastoreConnection)
                : undefined;
        message.s3Connection =
            object.s3Connection !== undefined && object.s3Connection !== null
                ? IcebergS3ConnectionSpec.fromJSON(object.s3Connection)
                : undefined;
        message.staticTables =
            object.staticTables !== undefined && object.staticTables !== null
                ? StaticTablesSpec.fromJSON(object.staticTables)
                : undefined;
        message.dynamicTables =
            object.dynamicTables !== undefined && object.dynamicTables !== null
                ? DynamicTablesSpec.fromJSON(object.dynamicTables)
                : undefined;
        message.tablesConfig =
            object.tablesConfig !== undefined && object.tablesConfig !== null
                ? IcebergTablesConfigSpec.fromJSON(object.tablesConfig)
                : undefined;
        message.controlConfig =
            object.controlConfig !== undefined && object.controlConfig !== null
                ? IcebergControlSpec.fromJSON(object.controlConfig)
                : undefined;
        return message;
    },

    toJSON(message: ConnectorConfigIcebergSinkSpec): unknown {
        const obj: any = {};
        message.topics !== undefined && (obj.topics = message.topics);
        message.topicsRegex !== undefined && (obj.topicsRegex = message.topicsRegex);
        message.controlTopic !== undefined && (obj.controlTopic = message.controlTopic);
        message.metastoreConnection !== undefined &&
            (obj.metastoreConnection = message.metastoreConnection
                ? MetastoreConnectionSpec.toJSON(message.metastoreConnection)
                : undefined);
        message.s3Connection !== undefined &&
            (obj.s3Connection = message.s3Connection
                ? IcebergS3ConnectionSpec.toJSON(message.s3Connection)
                : undefined);
        message.staticTables !== undefined &&
            (obj.staticTables = message.staticTables
                ? StaticTablesSpec.toJSON(message.staticTables)
                : undefined);
        message.dynamicTables !== undefined &&
            (obj.dynamicTables = message.dynamicTables
                ? DynamicTablesSpec.toJSON(message.dynamicTables)
                : undefined);
        message.tablesConfig !== undefined &&
            (obj.tablesConfig = message.tablesConfig
                ? IcebergTablesConfigSpec.toJSON(message.tablesConfig)
                : undefined);
        message.controlConfig !== undefined &&
            (obj.controlConfig = message.controlConfig
                ? IcebergControlSpec.toJSON(message.controlConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ConnectorConfigIcebergSinkSpec>, I>>(
        object: I,
    ): ConnectorConfigIcebergSinkSpec {
        const message = { ...baseConnectorConfigIcebergSinkSpec } as ConnectorConfigIcebergSinkSpec;
        message.topics = object.topics ?? undefined;
        message.topicsRegex = object.topicsRegex ?? undefined;
        message.controlTopic = object.controlTopic ?? '';
        message.metastoreConnection =
            object.metastoreConnection !== undefined && object.metastoreConnection !== null
                ? MetastoreConnectionSpec.fromPartial(object.metastoreConnection)
                : undefined;
        message.s3Connection =
            object.s3Connection !== undefined && object.s3Connection !== null
                ? IcebergS3ConnectionSpec.fromPartial(object.s3Connection)
                : undefined;
        message.staticTables =
            object.staticTables !== undefined && object.staticTables !== null
                ? StaticTablesSpec.fromPartial(object.staticTables)
                : undefined;
        message.dynamicTables =
            object.dynamicTables !== undefined && object.dynamicTables !== null
                ? DynamicTablesSpec.fromPartial(object.dynamicTables)
                : undefined;
        message.tablesConfig =
            object.tablesConfig !== undefined && object.tablesConfig !== null
                ? IcebergTablesConfigSpec.fromPartial(object.tablesConfig)
                : undefined;
        message.controlConfig =
            object.controlConfig !== undefined && object.controlConfig !== null
                ? IcebergControlSpec.fromPartial(object.controlConfig)
                : undefined;
        return message;
    },
};

const baseUpdateConnectorConfigIcebergSinkSpec: object = { controlTopic: '' };

export const UpdateConnectorConfigIcebergSinkSpec: {
    encode(message: UpdateConnectorConfigIcebergSinkSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateConnectorConfigIcebergSinkSpec;
    fromJSON(object: any): UpdateConnectorConfigIcebergSinkSpec;
    toJSON(message: UpdateConnectorConfigIcebergSinkSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateConnectorConfigIcebergSinkSpec>, I>>(object: I): UpdateConnectorConfigIcebergSinkSpec;
} = {
    encode(
        message: UpdateConnectorConfigIcebergSinkSpec,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.topics !== undefined) {
            writer.uint32(10).string(message.topics);
        }
        if (message.topicsRegex !== undefined) {
            writer.uint32(18).string(message.topicsRegex);
        }
        if (message.controlTopic !== '') {
            writer.uint32(58).string(message.controlTopic);
        }
        if (message.metastoreConnection !== undefined) {
            MetastoreConnectionSpec.encode(
                message.metastoreConnection,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.s3Connection !== undefined) {
            IcebergS3ConnectionSpec.encode(message.s3Connection, writer.uint32(34).fork()).ldelim();
        }
        if (message.tablesConfig !== undefined) {
            IcebergTablesConfigSpec.encode(message.tablesConfig, writer.uint32(42).fork()).ldelim();
        }
        if (message.controlConfig !== undefined) {
            IcebergControlSpec.encode(message.controlConfig, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateConnectorConfigIcebergSinkSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateConnectorConfigIcebergSinkSpec,
        } as UpdateConnectorConfigIcebergSinkSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.topics = reader.string();
                    break;
                case 2:
                    message.topicsRegex = reader.string();
                    break;
                case 7:
                    message.controlTopic = reader.string();
                    break;
                case 3:
                    message.metastoreConnection = MetastoreConnectionSpec.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 4:
                    message.s3Connection = IcebergS3ConnectionSpec.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.tablesConfig = IcebergTablesConfigSpec.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.controlConfig = IcebergControlSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateConnectorConfigIcebergSinkSpec {
        const message = {
            ...baseUpdateConnectorConfigIcebergSinkSpec,
        } as UpdateConnectorConfigIcebergSinkSpec;
        message.topics =
            object.topics !== undefined && object.topics !== null
                ? String(object.topics)
                : undefined;
        message.topicsRegex =
            object.topicsRegex !== undefined && object.topicsRegex !== null
                ? String(object.topicsRegex)
                : undefined;
        message.controlTopic =
            object.controlTopic !== undefined && object.controlTopic !== null
                ? String(object.controlTopic)
                : '';
        message.metastoreConnection =
            object.metastoreConnection !== undefined && object.metastoreConnection !== null
                ? MetastoreConnectionSpec.fromJSON(object.metastoreConnection)
                : undefined;
        message.s3Connection =
            object.s3Connection !== undefined && object.s3Connection !== null
                ? IcebergS3ConnectionSpec.fromJSON(object.s3Connection)
                : undefined;
        message.tablesConfig =
            object.tablesConfig !== undefined && object.tablesConfig !== null
                ? IcebergTablesConfigSpec.fromJSON(object.tablesConfig)
                : undefined;
        message.controlConfig =
            object.controlConfig !== undefined && object.controlConfig !== null
                ? IcebergControlSpec.fromJSON(object.controlConfig)
                : undefined;
        return message;
    },

    toJSON(message: UpdateConnectorConfigIcebergSinkSpec): unknown {
        const obj: any = {};
        message.topics !== undefined && (obj.topics = message.topics);
        message.topicsRegex !== undefined && (obj.topicsRegex = message.topicsRegex);
        message.controlTopic !== undefined && (obj.controlTopic = message.controlTopic);
        message.metastoreConnection !== undefined &&
            (obj.metastoreConnection = message.metastoreConnection
                ? MetastoreConnectionSpec.toJSON(message.metastoreConnection)
                : undefined);
        message.s3Connection !== undefined &&
            (obj.s3Connection = message.s3Connection
                ? IcebergS3ConnectionSpec.toJSON(message.s3Connection)
                : undefined);
        message.tablesConfig !== undefined &&
            (obj.tablesConfig = message.tablesConfig
                ? IcebergTablesConfigSpec.toJSON(message.tablesConfig)
                : undefined);
        message.controlConfig !== undefined &&
            (obj.controlConfig = message.controlConfig
                ? IcebergControlSpec.toJSON(message.controlConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateConnectorConfigIcebergSinkSpec>, I>>(
        object: I,
    ): UpdateConnectorConfigIcebergSinkSpec {
        const message = {
            ...baseUpdateConnectorConfigIcebergSinkSpec,
        } as UpdateConnectorConfigIcebergSinkSpec;
        message.topics = object.topics ?? undefined;
        message.topicsRegex = object.topicsRegex ?? undefined;
        message.controlTopic = object.controlTopic ?? '';
        message.metastoreConnection =
            object.metastoreConnection !== undefined && object.metastoreConnection !== null
                ? MetastoreConnectionSpec.fromPartial(object.metastoreConnection)
                : undefined;
        message.s3Connection =
            object.s3Connection !== undefined && object.s3Connection !== null
                ? IcebergS3ConnectionSpec.fromPartial(object.s3Connection)
                : undefined;
        message.tablesConfig =
            object.tablesConfig !== undefined && object.tablesConfig !== null
                ? IcebergTablesConfigSpec.fromPartial(object.tablesConfig)
                : undefined;
        message.controlConfig =
            object.controlConfig !== undefined && object.controlConfig !== null
                ? IcebergControlSpec.fromPartial(object.controlConfig)
                : undefined;
        return message;
    },
};

const baseStaticTablesSpec: object = { tables: '' };

export const StaticTablesSpec: {
    encode(message: StaticTablesSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StaticTablesSpec;
    fromJSON(object: any): StaticTablesSpec;
    toJSON(message: StaticTablesSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<StaticTablesSpec>, I>>(object: I): StaticTablesSpec;
} = {
    encode(message: StaticTablesSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.tables !== '') {
            writer.uint32(10).string(message.tables);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StaticTablesSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStaticTablesSpec } as StaticTablesSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tables = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StaticTablesSpec {
        const message = { ...baseStaticTablesSpec } as StaticTablesSpec;
        message.tables =
            object.tables !== undefined && object.tables !== null ? String(object.tables) : '';
        return message;
    },

    toJSON(message: StaticTablesSpec): unknown {
        const obj: any = {};
        message.tables !== undefined && (obj.tables = message.tables);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StaticTablesSpec>, I>>(object: I): StaticTablesSpec {
        const message = { ...baseStaticTablesSpec } as StaticTablesSpec;
        message.tables = object.tables ?? '';
        return message;
    },
};

const baseDynamicTablesSpec: object = { routeField: '' };

export const DynamicTablesSpec: {
    encode(message: DynamicTablesSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DynamicTablesSpec;
    fromJSON(object: any): DynamicTablesSpec;
    toJSON(message: DynamicTablesSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<DynamicTablesSpec>, I>>(object: I): DynamicTablesSpec;
} = {
    encode(message: DynamicTablesSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.routeField !== '') {
            writer.uint32(10).string(message.routeField);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DynamicTablesSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDynamicTablesSpec } as DynamicTablesSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeField = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DynamicTablesSpec {
        const message = { ...baseDynamicTablesSpec } as DynamicTablesSpec;
        message.routeField =
            object.routeField !== undefined && object.routeField !== null
                ? String(object.routeField)
                : '';
        return message;
    },

    toJSON(message: DynamicTablesSpec): unknown {
        const obj: any = {};
        message.routeField !== undefined && (obj.routeField = message.routeField);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DynamicTablesSpec>, I>>(object: I): DynamicTablesSpec {
        const message = { ...baseDynamicTablesSpec } as DynamicTablesSpec;
        message.routeField = object.routeField ?? '';
        return message;
    },
};

const baseMetastoreConnectionSpec: object = { catalogUri: '', warehouse: '' };

export const MetastoreConnectionSpec: {
    encode(message: MetastoreConnectionSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MetastoreConnectionSpec;
    fromJSON(object: any): MetastoreConnectionSpec;
    toJSON(message: MetastoreConnectionSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<MetastoreConnectionSpec>, I>>(object: I): MetastoreConnectionSpec;
} = {
    encode(message: MetastoreConnectionSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.catalogUri !== '') {
            writer.uint32(10).string(message.catalogUri);
        }
        if (message.warehouse !== '') {
            writer.uint32(18).string(message.warehouse);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MetastoreConnectionSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMetastoreConnectionSpec } as MetastoreConnectionSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.catalogUri = reader.string();
                    break;
                case 2:
                    message.warehouse = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MetastoreConnectionSpec {
        const message = { ...baseMetastoreConnectionSpec } as MetastoreConnectionSpec;
        message.catalogUri =
            object.catalogUri !== undefined && object.catalogUri !== null
                ? String(object.catalogUri)
                : '';
        message.warehouse =
            object.warehouse !== undefined && object.warehouse !== null
                ? String(object.warehouse)
                : '';
        return message;
    },

    toJSON(message: MetastoreConnectionSpec): unknown {
        const obj: any = {};
        message.catalogUri !== undefined && (obj.catalogUri = message.catalogUri);
        message.warehouse !== undefined && (obj.warehouse = message.warehouse);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MetastoreConnectionSpec>, I>>(
        object: I,
    ): MetastoreConnectionSpec {
        const message = { ...baseMetastoreConnectionSpec } as MetastoreConnectionSpec;
        message.catalogUri = object.catalogUri ?? '';
        message.warehouse = object.warehouse ?? '';
        return message;
    },
};

const baseIcebergS3ConnectionSpec: object = {};

export const IcebergS3ConnectionSpec: {
    encode(message: IcebergS3ConnectionSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IcebergS3ConnectionSpec;
    fromJSON(object: any): IcebergS3ConnectionSpec;
    toJSON(message: IcebergS3ConnectionSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<IcebergS3ConnectionSpec>, I>>(object: I): IcebergS3ConnectionSpec;
} = {
    encode(message: IcebergS3ConnectionSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.externalS3 !== undefined) {
            ExternalIcebergS3StorageSpec.encode(
                message.externalS3,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): IcebergS3ConnectionSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIcebergS3ConnectionSpec } as IcebergS3ConnectionSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.externalS3 = ExternalIcebergS3StorageSpec.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): IcebergS3ConnectionSpec {
        const message = { ...baseIcebergS3ConnectionSpec } as IcebergS3ConnectionSpec;
        message.externalS3 =
            object.externalS3 !== undefined && object.externalS3 !== null
                ? ExternalIcebergS3StorageSpec.fromJSON(object.externalS3)
                : undefined;
        return message;
    },

    toJSON(message: IcebergS3ConnectionSpec): unknown {
        const obj: any = {};
        message.externalS3 !== undefined &&
            (obj.externalS3 = message.externalS3
                ? ExternalIcebergS3StorageSpec.toJSON(message.externalS3)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<IcebergS3ConnectionSpec>, I>>(
        object: I,
    ): IcebergS3ConnectionSpec {
        const message = { ...baseIcebergS3ConnectionSpec } as IcebergS3ConnectionSpec;
        message.externalS3 =
            object.externalS3 !== undefined && object.externalS3 !== null
                ? ExternalIcebergS3StorageSpec.fromPartial(object.externalS3)
                : undefined;
        return message;
    },
};

const baseExternalIcebergS3StorageSpec: object = {
    accessKeyId: '',
    secretAccessKey: '',
    endpoint: '',
    region: '',
};

export const ExternalIcebergS3StorageSpec: {
    encode(message: ExternalIcebergS3StorageSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExternalIcebergS3StorageSpec;
    fromJSON(object: any): ExternalIcebergS3StorageSpec;
    toJSON(message: ExternalIcebergS3StorageSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<ExternalIcebergS3StorageSpec>, I>>(object: I): ExternalIcebergS3StorageSpec;
} = {
    encode(
        message: ExternalIcebergS3StorageSpec,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.accessKeyId !== '') {
            writer.uint32(10).string(message.accessKeyId);
        }
        if (message.secretAccessKey !== '') {
            writer.uint32(18).string(message.secretAccessKey);
        }
        if (message.endpoint !== '') {
            writer.uint32(26).string(message.endpoint);
        }
        if (message.region !== '') {
            writer.uint32(34).string(message.region);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ExternalIcebergS3StorageSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExternalIcebergS3StorageSpec } as ExternalIcebergS3StorageSpec;
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

    fromJSON(object: any): ExternalIcebergS3StorageSpec {
        const message = { ...baseExternalIcebergS3StorageSpec } as ExternalIcebergS3StorageSpec;
        message.accessKeyId =
            object.accessKeyId !== undefined && object.accessKeyId !== null
                ? String(object.accessKeyId)
                : '';
        message.secretAccessKey =
            object.secretAccessKey !== undefined && object.secretAccessKey !== null
                ? String(object.secretAccessKey)
                : '';
        message.endpoint =
            object.endpoint !== undefined && object.endpoint !== null
                ? String(object.endpoint)
                : '';
        message.region =
            object.region !== undefined && object.region !== null ? String(object.region) : '';
        return message;
    },

    toJSON(message: ExternalIcebergS3StorageSpec): unknown {
        const obj: any = {};
        message.accessKeyId !== undefined && (obj.accessKeyId = message.accessKeyId);
        message.secretAccessKey !== undefined && (obj.secretAccessKey = message.secretAccessKey);
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        message.region !== undefined && (obj.region = message.region);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ExternalIcebergS3StorageSpec>, I>>(
        object: I,
    ): ExternalIcebergS3StorageSpec {
        const message = { ...baseExternalIcebergS3StorageSpec } as ExternalIcebergS3StorageSpec;
        message.accessKeyId = object.accessKeyId ?? '';
        message.secretAccessKey = object.secretAccessKey ?? '';
        message.endpoint = object.endpoint ?? '';
        message.region = object.region ?? '';
        return message;
    },
};

const baseIcebergTablesConfigSpec: object = {
    defaultCommitBranch: '',
    defaultIdColumns: '',
    defaultPartitionBy: '',
    evolveSchemaEnabled: false,
    schemaForceOptional: false,
    schemaCaseInsensitive: false,
};

export const IcebergTablesConfigSpec: {
    encode(message: IcebergTablesConfigSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IcebergTablesConfigSpec;
    fromJSON(object: any): IcebergTablesConfigSpec;
    toJSON(message: IcebergTablesConfigSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<IcebergTablesConfigSpec>, I>>(object: I): IcebergTablesConfigSpec;
} = {
    encode(message: IcebergTablesConfigSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.defaultCommitBranch !== '') {
            writer.uint32(10).string(message.defaultCommitBranch);
        }
        if (message.defaultIdColumns !== '') {
            writer.uint32(18).string(message.defaultIdColumns);
        }
        if (message.defaultPartitionBy !== '') {
            writer.uint32(26).string(message.defaultPartitionBy);
        }
        if (message.evolveSchemaEnabled === true) {
            writer.uint32(32).bool(message.evolveSchemaEnabled);
        }
        if (message.schemaForceOptional === true) {
            writer.uint32(40).bool(message.schemaForceOptional);
        }
        if (message.schemaCaseInsensitive === true) {
            writer.uint32(48).bool(message.schemaCaseInsensitive);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): IcebergTablesConfigSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIcebergTablesConfigSpec } as IcebergTablesConfigSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.defaultCommitBranch = reader.string();
                    break;
                case 2:
                    message.defaultIdColumns = reader.string();
                    break;
                case 3:
                    message.defaultPartitionBy = reader.string();
                    break;
                case 4:
                    message.evolveSchemaEnabled = reader.bool();
                    break;
                case 5:
                    message.schemaForceOptional = reader.bool();
                    break;
                case 6:
                    message.schemaCaseInsensitive = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): IcebergTablesConfigSpec {
        const message = { ...baseIcebergTablesConfigSpec } as IcebergTablesConfigSpec;
        message.defaultCommitBranch =
            object.defaultCommitBranch !== undefined && object.defaultCommitBranch !== null
                ? String(object.defaultCommitBranch)
                : '';
        message.defaultIdColumns =
            object.defaultIdColumns !== undefined && object.defaultIdColumns !== null
                ? String(object.defaultIdColumns)
                : '';
        message.defaultPartitionBy =
            object.defaultPartitionBy !== undefined && object.defaultPartitionBy !== null
                ? String(object.defaultPartitionBy)
                : '';
        message.evolveSchemaEnabled =
            object.evolveSchemaEnabled !== undefined && object.evolveSchemaEnabled !== null
                ? Boolean(object.evolveSchemaEnabled)
                : false;
        message.schemaForceOptional =
            object.schemaForceOptional !== undefined && object.schemaForceOptional !== null
                ? Boolean(object.schemaForceOptional)
                : false;
        message.schemaCaseInsensitive =
            object.schemaCaseInsensitive !== undefined && object.schemaCaseInsensitive !== null
                ? Boolean(object.schemaCaseInsensitive)
                : false;
        return message;
    },

    toJSON(message: IcebergTablesConfigSpec): unknown {
        const obj: any = {};
        message.defaultCommitBranch !== undefined &&
            (obj.defaultCommitBranch = message.defaultCommitBranch);
        message.defaultIdColumns !== undefined && (obj.defaultIdColumns = message.defaultIdColumns);
        message.defaultPartitionBy !== undefined &&
            (obj.defaultPartitionBy = message.defaultPartitionBy);
        message.evolveSchemaEnabled !== undefined &&
            (obj.evolveSchemaEnabled = message.evolveSchemaEnabled);
        message.schemaForceOptional !== undefined &&
            (obj.schemaForceOptional = message.schemaForceOptional);
        message.schemaCaseInsensitive !== undefined &&
            (obj.schemaCaseInsensitive = message.schemaCaseInsensitive);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<IcebergTablesConfigSpec>, I>>(
        object: I,
    ): IcebergTablesConfigSpec {
        const message = { ...baseIcebergTablesConfigSpec } as IcebergTablesConfigSpec;
        message.defaultCommitBranch = object.defaultCommitBranch ?? '';
        message.defaultIdColumns = object.defaultIdColumns ?? '';
        message.defaultPartitionBy = object.defaultPartitionBy ?? '';
        message.evolveSchemaEnabled = object.evolveSchemaEnabled ?? false;
        message.schemaForceOptional = object.schemaForceOptional ?? false;
        message.schemaCaseInsensitive = object.schemaCaseInsensitive ?? false;
        return message;
    },
};

const baseIcebergControlSpec: object = { groupIdPrefix: '', transactionalPrefix: '' };

export const IcebergControlSpec: {
    encode(message: IcebergControlSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IcebergControlSpec;
    fromJSON(object: any): IcebergControlSpec;
    toJSON(message: IcebergControlSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<IcebergControlSpec>, I>>(object: I): IcebergControlSpec;
} = {
    encode(message: IcebergControlSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.groupIdPrefix !== '') {
            writer.uint32(10).string(message.groupIdPrefix);
        }
        if (message.commitIntervalMs !== undefined) {
            Int64Value.encode(
                { value: message.commitIntervalMs! },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.commitTimeoutMs !== undefined) {
            Int64Value.encode(
                { value: message.commitTimeoutMs! },
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.commitThreads !== undefined) {
            Int64Value.encode({ value: message.commitThreads! }, writer.uint32(34).fork()).ldelim();
        }
        if (message.transactionalPrefix !== '') {
            writer.uint32(42).string(message.transactionalPrefix);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): IcebergControlSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIcebergControlSpec } as IcebergControlSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupIdPrefix = reader.string();
                    break;
                case 2:
                    message.commitIntervalMs = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.commitTimeoutMs = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.commitThreads = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.transactionalPrefix = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): IcebergControlSpec {
        const message = { ...baseIcebergControlSpec } as IcebergControlSpec;
        message.groupIdPrefix =
            object.groupIdPrefix !== undefined && object.groupIdPrefix !== null
                ? String(object.groupIdPrefix)
                : '';
        message.commitIntervalMs =
            object.commitIntervalMs !== undefined && object.commitIntervalMs !== null
                ? Number(object.commitIntervalMs)
                : undefined;
        message.commitTimeoutMs =
            object.commitTimeoutMs !== undefined && object.commitTimeoutMs !== null
                ? Number(object.commitTimeoutMs)
                : undefined;
        message.commitThreads =
            object.commitThreads !== undefined && object.commitThreads !== null
                ? Number(object.commitThreads)
                : undefined;
        message.transactionalPrefix =
            object.transactionalPrefix !== undefined && object.transactionalPrefix !== null
                ? String(object.transactionalPrefix)
                : '';
        return message;
    },

    toJSON(message: IcebergControlSpec): unknown {
        const obj: any = {};
        message.groupIdPrefix !== undefined && (obj.groupIdPrefix = message.groupIdPrefix);
        message.commitIntervalMs !== undefined && (obj.commitIntervalMs = message.commitIntervalMs);
        message.commitTimeoutMs !== undefined && (obj.commitTimeoutMs = message.commitTimeoutMs);
        message.commitThreads !== undefined && (obj.commitThreads = message.commitThreads);
        message.transactionalPrefix !== undefined &&
            (obj.transactionalPrefix = message.transactionalPrefix);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<IcebergControlSpec>, I>>(
        object: I,
    ): IcebergControlSpec {
        const message = { ...baseIcebergControlSpec } as IcebergControlSpec;
        message.groupIdPrefix = object.groupIdPrefix ?? '';
        message.commitIntervalMs = object.commitIntervalMs ?? undefined;
        message.commitTimeoutMs = object.commitTimeoutMs ?? undefined;
        message.commitThreads = object.commitThreads ?? undefined;
        message.transactionalPrefix = object.transactionalPrefix ?? '';
        return message;
    },
};

const baseConnector: object = { name: '', health: 0, status: 0, clusterId: '' };

export const Connector: {
    encode(message: Connector, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Connector;
    fromJSON(object: any): Connector;
    toJSON(message: Connector): unknown;
    fromPartial<I extends Exact<DeepPartial<Connector>, I>>(object: I): Connector;
} = {
    encode(message: Connector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.tasksMax !== undefined) {
            Int64Value.encode({ value: message.tasksMax! }, writer.uint32(18).fork()).ldelim();
        }
        Object.entries(message.properties).forEach(([key, value]) => {
            Connector_PropertiesEntry.encode(
                { key: key as any, value },
                writer.uint32(26).fork(),
            ).ldelim();
        });
        if (message.health !== 0) {
            writer.uint32(32).int32(message.health);
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.clusterId !== '') {
            writer.uint32(50).string(message.clusterId);
        }
        if (message.connectorConfigMirrormaker !== undefined) {
            ConnectorConfigMirrorMaker.encode(
                message.connectorConfigMirrormaker,
                writer.uint32(82).fork(),
            ).ldelim();
        }
        if (message.connectorConfigS3Sink !== undefined) {
            ConnectorConfigS3Sink.encode(
                message.connectorConfigS3Sink,
                writer.uint32(90).fork(),
            ).ldelim();
        }
        if (message.connectorConfigIcebergSink !== undefined) {
            ConnectorConfigIcebergSink.encode(
                message.connectorConfigIcebergSink,
                writer.uint32(98).fork(),
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
                    const entry3 = Connector_PropertiesEntry.decode(reader, reader.uint32());
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
                    message.connectorConfigMirrormaker = ConnectorConfigMirrorMaker.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 11:
                    message.connectorConfigS3Sink = ConnectorConfigS3Sink.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 12:
                    message.connectorConfigIcebergSink = ConnectorConfigIcebergSink.decode(
                        reader,
                        reader.uint32(),
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
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
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
                : '';
        message.connectorConfigMirrormaker =
            object.connectorConfigMirrormaker !== undefined &&
            object.connectorConfigMirrormaker !== null
                ? ConnectorConfigMirrorMaker.fromJSON(object.connectorConfigMirrormaker)
                : undefined;
        message.connectorConfigS3Sink =
            object.connectorConfigS3Sink !== undefined && object.connectorConfigS3Sink !== null
                ? ConnectorConfigS3Sink.fromJSON(object.connectorConfigS3Sink)
                : undefined;
        message.connectorConfigIcebergSink =
            object.connectorConfigIcebergSink !== undefined &&
            object.connectorConfigIcebergSink !== null
                ? ConnectorConfigIcebergSink.fromJSON(object.connectorConfigIcebergSink)
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
        message.health !== undefined && (obj.health = connector_HealthToJSON(message.health));
        message.status !== undefined && (obj.status = connector_StatusToJSON(message.status));
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorConfigMirrormaker !== undefined &&
            (obj.connectorConfigMirrormaker = message.connectorConfigMirrormaker
                ? ConnectorConfigMirrorMaker.toJSON(message.connectorConfigMirrormaker)
                : undefined);
        message.connectorConfigS3Sink !== undefined &&
            (obj.connectorConfigS3Sink = message.connectorConfigS3Sink
                ? ConnectorConfigS3Sink.toJSON(message.connectorConfigS3Sink)
                : undefined);
        message.connectorConfigIcebergSink !== undefined &&
            (obj.connectorConfigIcebergSink = message.connectorConfigIcebergSink
                ? ConnectorConfigIcebergSink.toJSON(message.connectorConfigIcebergSink)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Connector>, I>>(object: I): Connector {
        const message = { ...baseConnector } as Connector;
        message.name = object.name ?? '';
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
        message.clusterId = object.clusterId ?? '';
        message.connectorConfigMirrormaker =
            object.connectorConfigMirrormaker !== undefined &&
            object.connectorConfigMirrormaker !== null
                ? ConnectorConfigMirrorMaker.fromPartial(object.connectorConfigMirrormaker)
                : undefined;
        message.connectorConfigS3Sink =
            object.connectorConfigS3Sink !== undefined && object.connectorConfigS3Sink !== null
                ? ConnectorConfigS3Sink.fromPartial(object.connectorConfigS3Sink)
                : undefined;
        message.connectorConfigIcebergSink =
            object.connectorConfigIcebergSink !== undefined &&
            object.connectorConfigIcebergSink !== null
                ? ConnectorConfigIcebergSink.fromPartial(object.connectorConfigIcebergSink)
                : undefined;
        return message;
    },
};

const baseConnector_PropertiesEntry: object = { key: '', value: '' };

export const Connector_PropertiesEntry: {
    encode(message: Connector_PropertiesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Connector_PropertiesEntry;
    fromJSON(object: any): Connector_PropertiesEntry;
    toJSON(message: Connector_PropertiesEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<Connector_PropertiesEntry>, I>>(object: I): Connector_PropertiesEntry;
} = {
    encode(
        message: Connector_PropertiesEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Connector_PropertiesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConnector_PropertiesEntry } as Connector_PropertiesEntry;
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
        const message = { ...baseConnector_PropertiesEntry } as Connector_PropertiesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Connector_PropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Connector_PropertiesEntry>, I>>(
        object: I,
    ): Connector_PropertiesEntry {
        const message = { ...baseConnector_PropertiesEntry } as Connector_PropertiesEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseConnectorConfigMirrorMaker: object = { topics: '' };

export const ConnectorConfigMirrorMaker: {
    encode(message: ConnectorConfigMirrorMaker, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectorConfigMirrorMaker;
    fromJSON(object: any): ConnectorConfigMirrorMaker;
    toJSON(message: ConnectorConfigMirrorMaker): unknown;
    fromPartial<I extends Exact<DeepPartial<ConnectorConfigMirrorMaker>, I>>(object: I): ConnectorConfigMirrorMaker;
} = {
    encode(
        message: ConnectorConfigMirrorMaker,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.sourceCluster !== undefined) {
            ClusterConnection.encode(message.sourceCluster, writer.uint32(10).fork()).ldelim();
        }
        if (message.targetCluster !== undefined) {
            ClusterConnection.encode(message.targetCluster, writer.uint32(18).fork()).ldelim();
        }
        if (message.topics !== '') {
            writer.uint32(26).string(message.topics);
        }
        if (message.replicationFactor !== undefined) {
            Int64Value.encode(
                { value: message.replicationFactor! },
                writer.uint32(34).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectorConfigMirrorMaker {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConnectorConfigMirrorMaker } as ConnectorConfigMirrorMaker;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourceCluster = ClusterConnection.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.targetCluster = ClusterConnection.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.topics = reader.string();
                    break;
                case 4:
                    message.replicationFactor = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ConnectorConfigMirrorMaker {
        const message = { ...baseConnectorConfigMirrorMaker } as ConnectorConfigMirrorMaker;
        message.sourceCluster =
            object.sourceCluster !== undefined && object.sourceCluster !== null
                ? ClusterConnection.fromJSON(object.sourceCluster)
                : undefined;
        message.targetCluster =
            object.targetCluster !== undefined && object.targetCluster !== null
                ? ClusterConnection.fromJSON(object.targetCluster)
                : undefined;
        message.topics =
            object.topics !== undefined && object.topics !== null ? String(object.topics) : '';
        message.replicationFactor =
            object.replicationFactor !== undefined && object.replicationFactor !== null
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
        object: I,
    ): ConnectorConfigMirrorMaker {
        const message = { ...baseConnectorConfigMirrorMaker } as ConnectorConfigMirrorMaker;
        message.sourceCluster =
            object.sourceCluster !== undefined && object.sourceCluster !== null
                ? ClusterConnection.fromPartial(object.sourceCluster)
                : undefined;
        message.targetCluster =
            object.targetCluster !== undefined && object.targetCluster !== null
                ? ClusterConnection.fromPartial(object.targetCluster)
                : undefined;
        message.topics = object.topics ?? '';
        message.replicationFactor = object.replicationFactor ?? undefined;
        return message;
    },
};

const baseClusterConnection: object = { alias: '' };

export const ClusterConnection: {
    encode(message: ClusterConnection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClusterConnection;
    fromJSON(object: any): ClusterConnection;
    toJSON(message: ClusterConnection): unknown;
    fromPartial<I extends Exact<DeepPartial<ClusterConnection>, I>>(object: I): ClusterConnection;
} = {
    encode(message: ClusterConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.alias !== '') {
            writer.uint32(10).string(message.alias);
        }
        if (message.thisCluster !== undefined) {
            ThisCluster.encode(message.thisCluster, writer.uint32(18).fork()).ldelim();
        }
        if (message.externalCluster !== undefined) {
            ExternalClusterConnection.encode(
                message.externalCluster,
                writer.uint32(26).fork(),
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
                        reader.uint32(),
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
            object.alias !== undefined && object.alias !== null ? String(object.alias) : '';
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

    fromPartial<I extends Exact<DeepPartial<ClusterConnection>, I>>(object: I): ClusterConnection {
        const message = { ...baseClusterConnection } as ClusterConnection;
        message.alias = object.alias ?? '';
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

const baseThisCluster: object = {};

export const ThisCluster: {
    encode(message: ThisCluster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ThisCluster;
    fromJSON(object: any): ThisCluster;
    toJSON(message: ThisCluster): unknown;
    fromPartial<I extends Exact<DeepPartial<ThisCluster>, I>>(object: I): ThisCluster;
} = {
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

const baseExternalClusterConnection: object = {
    bootstrapServers: '',
    saslUsername: '',
    saslMechanism: '',
    securityProtocol: '',
};

export const ExternalClusterConnection: {
    encode(message: ExternalClusterConnection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExternalClusterConnection;
    fromJSON(object: any): ExternalClusterConnection;
    toJSON(message: ExternalClusterConnection): unknown;
    fromPartial<I extends Exact<DeepPartial<ExternalClusterConnection>, I>>(object: I): ExternalClusterConnection;
} = {
    encode(
        message: ExternalClusterConnection,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.bootstrapServers !== '') {
            writer.uint32(10).string(message.bootstrapServers);
        }
        if (message.saslUsername !== '') {
            writer.uint32(18).string(message.saslUsername);
        }
        if (message.saslMechanism !== '') {
            writer.uint32(34).string(message.saslMechanism);
        }
        if (message.securityProtocol !== '') {
            writer.uint32(42).string(message.securityProtocol);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ExternalClusterConnection {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExternalClusterConnection } as ExternalClusterConnection;
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
        const message = { ...baseExternalClusterConnection } as ExternalClusterConnection;
        message.bootstrapServers =
            object.bootstrapServers !== undefined && object.bootstrapServers !== null
                ? String(object.bootstrapServers)
                : '';
        message.saslUsername =
            object.saslUsername !== undefined && object.saslUsername !== null
                ? String(object.saslUsername)
                : '';
        message.saslMechanism =
            object.saslMechanism !== undefined && object.saslMechanism !== null
                ? String(object.saslMechanism)
                : '';
        message.securityProtocol =
            object.securityProtocol !== undefined && object.securityProtocol !== null
                ? String(object.securityProtocol)
                : '';
        return message;
    },

    toJSON(message: ExternalClusterConnection): unknown {
        const obj: any = {};
        message.bootstrapServers !== undefined && (obj.bootstrapServers = message.bootstrapServers);
        message.saslUsername !== undefined && (obj.saslUsername = message.saslUsername);
        message.saslMechanism !== undefined && (obj.saslMechanism = message.saslMechanism);
        message.securityProtocol !== undefined && (obj.securityProtocol = message.securityProtocol);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ExternalClusterConnection>, I>>(
        object: I,
    ): ExternalClusterConnection {
        const message = { ...baseExternalClusterConnection } as ExternalClusterConnection;
        message.bootstrapServers = object.bootstrapServers ?? '';
        message.saslUsername = object.saslUsername ?? '';
        message.saslMechanism = object.saslMechanism ?? '';
        message.securityProtocol = object.securityProtocol ?? '';
        return message;
    },
};

const baseConnectorConfigS3Sink: object = { topics: '', fileCompressionType: '' };

export const ConnectorConfigS3Sink: {
    encode(message: ConnectorConfigS3Sink, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectorConfigS3Sink;
    fromJSON(object: any): ConnectorConfigS3Sink;
    toJSON(message: ConnectorConfigS3Sink): unknown;
    fromPartial<I extends Exact<DeepPartial<ConnectorConfigS3Sink>, I>>(object: I): ConnectorConfigS3Sink;
} = {
    encode(message: ConnectorConfigS3Sink, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.topics !== '') {
            writer.uint32(10).string(message.topics);
        }
        if (message.fileCompressionType !== '') {
            writer.uint32(18).string(message.fileCompressionType);
        }
        if (message.fileMaxRecords !== undefined) {
            Int64Value.encode(
                { value: message.fileMaxRecords! },
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.s3Connection !== undefined) {
            S3Connection.encode(message.s3Connection, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectorConfigS3Sink {
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
                    message.fileMaxRecords = Int64Value.decode(reader, reader.uint32()).value;
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
            object.topics !== undefined && object.topics !== null ? String(object.topics) : '';
        message.fileCompressionType =
            object.fileCompressionType !== undefined && object.fileCompressionType !== null
                ? String(object.fileCompressionType)
                : '';
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
        message.fileMaxRecords !== undefined && (obj.fileMaxRecords = message.fileMaxRecords);
        message.s3Connection !== undefined &&
            (obj.s3Connection = message.s3Connection
                ? S3Connection.toJSON(message.s3Connection)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ConnectorConfigS3Sink>, I>>(
        object: I,
    ): ConnectorConfigS3Sink {
        const message = { ...baseConnectorConfigS3Sink } as ConnectorConfigS3Sink;
        message.topics = object.topics ?? '';
        message.fileCompressionType = object.fileCompressionType ?? '';
        message.fileMaxRecords = object.fileMaxRecords ?? undefined;
        message.s3Connection =
            object.s3Connection !== undefined && object.s3Connection !== null
                ? S3Connection.fromPartial(object.s3Connection)
                : undefined;
        return message;
    },
};

const baseS3Connection: object = { bucketName: '' };

export const S3Connection: {
    encode(message: S3Connection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): S3Connection;
    fromJSON(object: any): S3Connection;
    toJSON(message: S3Connection): unknown;
    fromPartial<I extends Exact<DeepPartial<S3Connection>, I>>(object: I): S3Connection;
} = {
    encode(message: S3Connection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.bucketName !== '') {
            writer.uint32(10).string(message.bucketName);
        }
        if (message.externalS3 !== undefined) {
            ExternalS3Storage.encode(message.externalS3, writer.uint32(18).fork()).ldelim();
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
                    message.externalS3 = ExternalS3Storage.decode(reader, reader.uint32());
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
                : '';
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

    fromPartial<I extends Exact<DeepPartial<S3Connection>, I>>(object: I): S3Connection {
        const message = { ...baseS3Connection } as S3Connection;
        message.bucketName = object.bucketName ?? '';
        message.externalS3 =
            object.externalS3 !== undefined && object.externalS3 !== null
                ? ExternalS3Storage.fromPartial(object.externalS3)
                : undefined;
        return message;
    },
};

const baseExternalS3Storage: object = { accessKeyId: '', endpoint: '', region: '' };

export const ExternalS3Storage: {
    encode(message: ExternalS3Storage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExternalS3Storage;
    fromJSON(object: any): ExternalS3Storage;
    toJSON(message: ExternalS3Storage): unknown;
    fromPartial<I extends Exact<DeepPartial<ExternalS3Storage>, I>>(object: I): ExternalS3Storage;
} = {
    encode(message: ExternalS3Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.accessKeyId !== '') {
            writer.uint32(10).string(message.accessKeyId);
        }
        if (message.endpoint !== '') {
            writer.uint32(18).string(message.endpoint);
        }
        if (message.region !== '') {
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
                : '';
        message.endpoint =
            object.endpoint !== undefined && object.endpoint !== null
                ? String(object.endpoint)
                : '';
        message.region =
            object.region !== undefined && object.region !== null ? String(object.region) : '';
        return message;
    },

    toJSON(message: ExternalS3Storage): unknown {
        const obj: any = {};
        message.accessKeyId !== undefined && (obj.accessKeyId = message.accessKeyId);
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        message.region !== undefined && (obj.region = message.region);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ExternalS3Storage>, I>>(object: I): ExternalS3Storage {
        const message = { ...baseExternalS3Storage } as ExternalS3Storage;
        message.accessKeyId = object.accessKeyId ?? '';
        message.endpoint = object.endpoint ?? '';
        message.region = object.region ?? '';
        return message;
    },
};

const baseConnectorConfigIcebergSink: object = { controlTopic: '' };

export const ConnectorConfigIcebergSink: {
    encode(message: ConnectorConfigIcebergSink, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectorConfigIcebergSink;
    fromJSON(object: any): ConnectorConfigIcebergSink;
    toJSON(message: ConnectorConfigIcebergSink): unknown;
    fromPartial<I extends Exact<DeepPartial<ConnectorConfigIcebergSink>, I>>(object: I): ConnectorConfigIcebergSink;
} = {
    encode(
        message: ConnectorConfigIcebergSink,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.topics !== undefined) {
            writer.uint32(10).string(message.topics);
        }
        if (message.topicsRegex !== undefined) {
            writer.uint32(18).string(message.topicsRegex);
        }
        if (message.controlTopic !== '') {
            writer.uint32(74).string(message.controlTopic);
        }
        if (message.metastoreConnection !== undefined) {
            MetastoreConnection.encode(
                message.metastoreConnection,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.s3Connection !== undefined) {
            IcebergS3Connection.encode(message.s3Connection, writer.uint32(34).fork()).ldelim();
        }
        if (message.staticTables !== undefined) {
            StaticTables.encode(message.staticTables, writer.uint32(42).fork()).ldelim();
        }
        if (message.dynamicTables !== undefined) {
            DynamicTables.encode(message.dynamicTables, writer.uint32(50).fork()).ldelim();
        }
        if (message.tablesConfig !== undefined) {
            IcebergTablesConfig.encode(message.tablesConfig, writer.uint32(58).fork()).ldelim();
        }
        if (message.controlConfig !== undefined) {
            IcebergControl.encode(message.controlConfig, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectorConfigIcebergSink {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConnectorConfigIcebergSink } as ConnectorConfigIcebergSink;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.topics = reader.string();
                    break;
                case 2:
                    message.topicsRegex = reader.string();
                    break;
                case 9:
                    message.controlTopic = reader.string();
                    break;
                case 3:
                    message.metastoreConnection = MetastoreConnection.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 4:
                    message.s3Connection = IcebergS3Connection.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.staticTables = StaticTables.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.dynamicTables = DynamicTables.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.tablesConfig = IcebergTablesConfig.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.controlConfig = IcebergControl.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ConnectorConfigIcebergSink {
        const message = { ...baseConnectorConfigIcebergSink } as ConnectorConfigIcebergSink;
        message.topics =
            object.topics !== undefined && object.topics !== null
                ? String(object.topics)
                : undefined;
        message.topicsRegex =
            object.topicsRegex !== undefined && object.topicsRegex !== null
                ? String(object.topicsRegex)
                : undefined;
        message.controlTopic =
            object.controlTopic !== undefined && object.controlTopic !== null
                ? String(object.controlTopic)
                : '';
        message.metastoreConnection =
            object.metastoreConnection !== undefined && object.metastoreConnection !== null
                ? MetastoreConnection.fromJSON(object.metastoreConnection)
                : undefined;
        message.s3Connection =
            object.s3Connection !== undefined && object.s3Connection !== null
                ? IcebergS3Connection.fromJSON(object.s3Connection)
                : undefined;
        message.staticTables =
            object.staticTables !== undefined && object.staticTables !== null
                ? StaticTables.fromJSON(object.staticTables)
                : undefined;
        message.dynamicTables =
            object.dynamicTables !== undefined && object.dynamicTables !== null
                ? DynamicTables.fromJSON(object.dynamicTables)
                : undefined;
        message.tablesConfig =
            object.tablesConfig !== undefined && object.tablesConfig !== null
                ? IcebergTablesConfig.fromJSON(object.tablesConfig)
                : undefined;
        message.controlConfig =
            object.controlConfig !== undefined && object.controlConfig !== null
                ? IcebergControl.fromJSON(object.controlConfig)
                : undefined;
        return message;
    },

    toJSON(message: ConnectorConfigIcebergSink): unknown {
        const obj: any = {};
        message.topics !== undefined && (obj.topics = message.topics);
        message.topicsRegex !== undefined && (obj.topicsRegex = message.topicsRegex);
        message.controlTopic !== undefined && (obj.controlTopic = message.controlTopic);
        message.metastoreConnection !== undefined &&
            (obj.metastoreConnection = message.metastoreConnection
                ? MetastoreConnection.toJSON(message.metastoreConnection)
                : undefined);
        message.s3Connection !== undefined &&
            (obj.s3Connection = message.s3Connection
                ? IcebergS3Connection.toJSON(message.s3Connection)
                : undefined);
        message.staticTables !== undefined &&
            (obj.staticTables = message.staticTables
                ? StaticTables.toJSON(message.staticTables)
                : undefined);
        message.dynamicTables !== undefined &&
            (obj.dynamicTables = message.dynamicTables
                ? DynamicTables.toJSON(message.dynamicTables)
                : undefined);
        message.tablesConfig !== undefined &&
            (obj.tablesConfig = message.tablesConfig
                ? IcebergTablesConfig.toJSON(message.tablesConfig)
                : undefined);
        message.controlConfig !== undefined &&
            (obj.controlConfig = message.controlConfig
                ? IcebergControl.toJSON(message.controlConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ConnectorConfigIcebergSink>, I>>(
        object: I,
    ): ConnectorConfigIcebergSink {
        const message = { ...baseConnectorConfigIcebergSink } as ConnectorConfigIcebergSink;
        message.topics = object.topics ?? undefined;
        message.topicsRegex = object.topicsRegex ?? undefined;
        message.controlTopic = object.controlTopic ?? '';
        message.metastoreConnection =
            object.metastoreConnection !== undefined && object.metastoreConnection !== null
                ? MetastoreConnection.fromPartial(object.metastoreConnection)
                : undefined;
        message.s3Connection =
            object.s3Connection !== undefined && object.s3Connection !== null
                ? IcebergS3Connection.fromPartial(object.s3Connection)
                : undefined;
        message.staticTables =
            object.staticTables !== undefined && object.staticTables !== null
                ? StaticTables.fromPartial(object.staticTables)
                : undefined;
        message.dynamicTables =
            object.dynamicTables !== undefined && object.dynamicTables !== null
                ? DynamicTables.fromPartial(object.dynamicTables)
                : undefined;
        message.tablesConfig =
            object.tablesConfig !== undefined && object.tablesConfig !== null
                ? IcebergTablesConfig.fromPartial(object.tablesConfig)
                : undefined;
        message.controlConfig =
            object.controlConfig !== undefined && object.controlConfig !== null
                ? IcebergControl.fromPartial(object.controlConfig)
                : undefined;
        return message;
    },
};

const baseStaticTables: object = { tables: '' };

export const StaticTables: {
    encode(message: StaticTables, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StaticTables;
    fromJSON(object: any): StaticTables;
    toJSON(message: StaticTables): unknown;
    fromPartial<I extends Exact<DeepPartial<StaticTables>, I>>(object: I): StaticTables;
} = {
    encode(message: StaticTables, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.tables !== '') {
            writer.uint32(10).string(message.tables);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StaticTables {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStaticTables } as StaticTables;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tables = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StaticTables {
        const message = { ...baseStaticTables } as StaticTables;
        message.tables =
            object.tables !== undefined && object.tables !== null ? String(object.tables) : '';
        return message;
    },

    toJSON(message: StaticTables): unknown {
        const obj: any = {};
        message.tables !== undefined && (obj.tables = message.tables);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StaticTables>, I>>(object: I): StaticTables {
        const message = { ...baseStaticTables } as StaticTables;
        message.tables = object.tables ?? '';
        return message;
    },
};

const baseDynamicTables: object = { routeField: '' };

export const DynamicTables: {
    encode(message: DynamicTables, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DynamicTables;
    fromJSON(object: any): DynamicTables;
    toJSON(message: DynamicTables): unknown;
    fromPartial<I extends Exact<DeepPartial<DynamicTables>, I>>(object: I): DynamicTables;
} = {
    encode(message: DynamicTables, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.routeField !== '') {
            writer.uint32(10).string(message.routeField);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DynamicTables {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDynamicTables } as DynamicTables;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeField = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DynamicTables {
        const message = { ...baseDynamicTables } as DynamicTables;
        message.routeField =
            object.routeField !== undefined && object.routeField !== null
                ? String(object.routeField)
                : '';
        return message;
    },

    toJSON(message: DynamicTables): unknown {
        const obj: any = {};
        message.routeField !== undefined && (obj.routeField = message.routeField);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DynamicTables>, I>>(object: I): DynamicTables {
        const message = { ...baseDynamicTables } as DynamicTables;
        message.routeField = object.routeField ?? '';
        return message;
    },
};

const baseMetastoreConnection: object = { catalogUri: '', warehouse: '' };

export const MetastoreConnection: {
    encode(message: MetastoreConnection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MetastoreConnection;
    fromJSON(object: any): MetastoreConnection;
    toJSON(message: MetastoreConnection): unknown;
    fromPartial<I extends Exact<DeepPartial<MetastoreConnection>, I>>(object: I): MetastoreConnection;
} = {
    encode(message: MetastoreConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.catalogUri !== '') {
            writer.uint32(10).string(message.catalogUri);
        }
        if (message.warehouse !== '') {
            writer.uint32(18).string(message.warehouse);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MetastoreConnection {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMetastoreConnection } as MetastoreConnection;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.catalogUri = reader.string();
                    break;
                case 2:
                    message.warehouse = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MetastoreConnection {
        const message = { ...baseMetastoreConnection } as MetastoreConnection;
        message.catalogUri =
            object.catalogUri !== undefined && object.catalogUri !== null
                ? String(object.catalogUri)
                : '';
        message.warehouse =
            object.warehouse !== undefined && object.warehouse !== null
                ? String(object.warehouse)
                : '';
        return message;
    },

    toJSON(message: MetastoreConnection): unknown {
        const obj: any = {};
        message.catalogUri !== undefined && (obj.catalogUri = message.catalogUri);
        message.warehouse !== undefined && (obj.warehouse = message.warehouse);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MetastoreConnection>, I>>(
        object: I,
    ): MetastoreConnection {
        const message = { ...baseMetastoreConnection } as MetastoreConnection;
        message.catalogUri = object.catalogUri ?? '';
        message.warehouse = object.warehouse ?? '';
        return message;
    },
};

const baseIcebergS3Connection: object = {};

export const IcebergS3Connection: {
    encode(message: IcebergS3Connection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IcebergS3Connection;
    fromJSON(object: any): IcebergS3Connection;
    toJSON(message: IcebergS3Connection): unknown;
    fromPartial<I extends Exact<DeepPartial<IcebergS3Connection>, I>>(object: I): IcebergS3Connection;
} = {
    encode(message: IcebergS3Connection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.externalS3 !== undefined) {
            ExternalIcebergS3Storage.encode(message.externalS3, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): IcebergS3Connection {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIcebergS3Connection } as IcebergS3Connection;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.externalS3 = ExternalIcebergS3Storage.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): IcebergS3Connection {
        const message = { ...baseIcebergS3Connection } as IcebergS3Connection;
        message.externalS3 =
            object.externalS3 !== undefined && object.externalS3 !== null
                ? ExternalIcebergS3Storage.fromJSON(object.externalS3)
                : undefined;
        return message;
    },

    toJSON(message: IcebergS3Connection): unknown {
        const obj: any = {};
        message.externalS3 !== undefined &&
            (obj.externalS3 = message.externalS3
                ? ExternalIcebergS3Storage.toJSON(message.externalS3)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<IcebergS3Connection>, I>>(
        object: I,
    ): IcebergS3Connection {
        const message = { ...baseIcebergS3Connection } as IcebergS3Connection;
        message.externalS3 =
            object.externalS3 !== undefined && object.externalS3 !== null
                ? ExternalIcebergS3Storage.fromPartial(object.externalS3)
                : undefined;
        return message;
    },
};

const baseExternalIcebergS3Storage: object = { accessKeyId: '', endpoint: '', region: '' };

export const ExternalIcebergS3Storage: {
    encode(message: ExternalIcebergS3Storage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExternalIcebergS3Storage;
    fromJSON(object: any): ExternalIcebergS3Storage;
    toJSON(message: ExternalIcebergS3Storage): unknown;
    fromPartial<I extends Exact<DeepPartial<ExternalIcebergS3Storage>, I>>(object: I): ExternalIcebergS3Storage;
} = {
    encode(
        message: ExternalIcebergS3Storage,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.accessKeyId !== '') {
            writer.uint32(10).string(message.accessKeyId);
        }
        if (message.endpoint !== '') {
            writer.uint32(18).string(message.endpoint);
        }
        if (message.region !== '') {
            writer.uint32(26).string(message.region);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ExternalIcebergS3Storage {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExternalIcebergS3Storage } as ExternalIcebergS3Storage;
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

    fromJSON(object: any): ExternalIcebergS3Storage {
        const message = { ...baseExternalIcebergS3Storage } as ExternalIcebergS3Storage;
        message.accessKeyId =
            object.accessKeyId !== undefined && object.accessKeyId !== null
                ? String(object.accessKeyId)
                : '';
        message.endpoint =
            object.endpoint !== undefined && object.endpoint !== null
                ? String(object.endpoint)
                : '';
        message.region =
            object.region !== undefined && object.region !== null ? String(object.region) : '';
        return message;
    },

    toJSON(message: ExternalIcebergS3Storage): unknown {
        const obj: any = {};
        message.accessKeyId !== undefined && (obj.accessKeyId = message.accessKeyId);
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        message.region !== undefined && (obj.region = message.region);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ExternalIcebergS3Storage>, I>>(
        object: I,
    ): ExternalIcebergS3Storage {
        const message = { ...baseExternalIcebergS3Storage } as ExternalIcebergS3Storage;
        message.accessKeyId = object.accessKeyId ?? '';
        message.endpoint = object.endpoint ?? '';
        message.region = object.region ?? '';
        return message;
    },
};

const baseIcebergTablesConfig: object = {
    defaultCommitBranch: '',
    defaultIdColumns: '',
    defaultPartitionBy: '',
    evolveSchemaEnabled: false,
    schemaForceOptional: false,
    schemaCaseInsensitive: false,
};

export const IcebergTablesConfig: {
    encode(message: IcebergTablesConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IcebergTablesConfig;
    fromJSON(object: any): IcebergTablesConfig;
    toJSON(message: IcebergTablesConfig): unknown;
    fromPartial<I extends Exact<DeepPartial<IcebergTablesConfig>, I>>(object: I): IcebergTablesConfig;
} = {
    encode(message: IcebergTablesConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.defaultCommitBranch !== '') {
            writer.uint32(10).string(message.defaultCommitBranch);
        }
        if (message.defaultIdColumns !== '') {
            writer.uint32(18).string(message.defaultIdColumns);
        }
        if (message.defaultPartitionBy !== '') {
            writer.uint32(26).string(message.defaultPartitionBy);
        }
        if (message.evolveSchemaEnabled === true) {
            writer.uint32(32).bool(message.evolveSchemaEnabled);
        }
        if (message.schemaForceOptional === true) {
            writer.uint32(40).bool(message.schemaForceOptional);
        }
        if (message.schemaCaseInsensitive === true) {
            writer.uint32(48).bool(message.schemaCaseInsensitive);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): IcebergTablesConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIcebergTablesConfig } as IcebergTablesConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.defaultCommitBranch = reader.string();
                    break;
                case 2:
                    message.defaultIdColumns = reader.string();
                    break;
                case 3:
                    message.defaultPartitionBy = reader.string();
                    break;
                case 4:
                    message.evolveSchemaEnabled = reader.bool();
                    break;
                case 5:
                    message.schemaForceOptional = reader.bool();
                    break;
                case 6:
                    message.schemaCaseInsensitive = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): IcebergTablesConfig {
        const message = { ...baseIcebergTablesConfig } as IcebergTablesConfig;
        message.defaultCommitBranch =
            object.defaultCommitBranch !== undefined && object.defaultCommitBranch !== null
                ? String(object.defaultCommitBranch)
                : '';
        message.defaultIdColumns =
            object.defaultIdColumns !== undefined && object.defaultIdColumns !== null
                ? String(object.defaultIdColumns)
                : '';
        message.defaultPartitionBy =
            object.defaultPartitionBy !== undefined && object.defaultPartitionBy !== null
                ? String(object.defaultPartitionBy)
                : '';
        message.evolveSchemaEnabled =
            object.evolveSchemaEnabled !== undefined && object.evolveSchemaEnabled !== null
                ? Boolean(object.evolveSchemaEnabled)
                : false;
        message.schemaForceOptional =
            object.schemaForceOptional !== undefined && object.schemaForceOptional !== null
                ? Boolean(object.schemaForceOptional)
                : false;
        message.schemaCaseInsensitive =
            object.schemaCaseInsensitive !== undefined && object.schemaCaseInsensitive !== null
                ? Boolean(object.schemaCaseInsensitive)
                : false;
        return message;
    },

    toJSON(message: IcebergTablesConfig): unknown {
        const obj: any = {};
        message.defaultCommitBranch !== undefined &&
            (obj.defaultCommitBranch = message.defaultCommitBranch);
        message.defaultIdColumns !== undefined && (obj.defaultIdColumns = message.defaultIdColumns);
        message.defaultPartitionBy !== undefined &&
            (obj.defaultPartitionBy = message.defaultPartitionBy);
        message.evolveSchemaEnabled !== undefined &&
            (obj.evolveSchemaEnabled = message.evolveSchemaEnabled);
        message.schemaForceOptional !== undefined &&
            (obj.schemaForceOptional = message.schemaForceOptional);
        message.schemaCaseInsensitive !== undefined &&
            (obj.schemaCaseInsensitive = message.schemaCaseInsensitive);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<IcebergTablesConfig>, I>>(
        object: I,
    ): IcebergTablesConfig {
        const message = { ...baseIcebergTablesConfig } as IcebergTablesConfig;
        message.defaultCommitBranch = object.defaultCommitBranch ?? '';
        message.defaultIdColumns = object.defaultIdColumns ?? '';
        message.defaultPartitionBy = object.defaultPartitionBy ?? '';
        message.evolveSchemaEnabled = object.evolveSchemaEnabled ?? false;
        message.schemaForceOptional = object.schemaForceOptional ?? false;
        message.schemaCaseInsensitive = object.schemaCaseInsensitive ?? false;
        return message;
    },
};

const baseIcebergControl: object = { groupIdPrefix: '', transactionalPrefix: '' };

export const IcebergControl: {
    encode(message: IcebergControl, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IcebergControl;
    fromJSON(object: any): IcebergControl;
    toJSON(message: IcebergControl): unknown;
    fromPartial<I extends Exact<DeepPartial<IcebergControl>, I>>(object: I): IcebergControl;
} = {
    encode(message: IcebergControl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.groupIdPrefix !== '') {
            writer.uint32(10).string(message.groupIdPrefix);
        }
        if (message.commitIntervalMs !== undefined) {
            Int64Value.encode(
                { value: message.commitIntervalMs! },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.commitTimeoutMs !== undefined) {
            Int64Value.encode(
                { value: message.commitTimeoutMs! },
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.commitThreads !== undefined) {
            Int64Value.encode({ value: message.commitThreads! }, writer.uint32(34).fork()).ldelim();
        }
        if (message.transactionalPrefix !== '') {
            writer.uint32(42).string(message.transactionalPrefix);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): IcebergControl {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIcebergControl } as IcebergControl;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupIdPrefix = reader.string();
                    break;
                case 2:
                    message.commitIntervalMs = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.commitTimeoutMs = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.commitThreads = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.transactionalPrefix = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): IcebergControl {
        const message = { ...baseIcebergControl } as IcebergControl;
        message.groupIdPrefix =
            object.groupIdPrefix !== undefined && object.groupIdPrefix !== null
                ? String(object.groupIdPrefix)
                : '';
        message.commitIntervalMs =
            object.commitIntervalMs !== undefined && object.commitIntervalMs !== null
                ? Number(object.commitIntervalMs)
                : undefined;
        message.commitTimeoutMs =
            object.commitTimeoutMs !== undefined && object.commitTimeoutMs !== null
                ? Number(object.commitTimeoutMs)
                : undefined;
        message.commitThreads =
            object.commitThreads !== undefined && object.commitThreads !== null
                ? Number(object.commitThreads)
                : undefined;
        message.transactionalPrefix =
            object.transactionalPrefix !== undefined && object.transactionalPrefix !== null
                ? String(object.transactionalPrefix)
                : '';
        return message;
    },

    toJSON(message: IcebergControl): unknown {
        const obj: any = {};
        message.groupIdPrefix !== undefined && (obj.groupIdPrefix = message.groupIdPrefix);
        message.commitIntervalMs !== undefined && (obj.commitIntervalMs = message.commitIntervalMs);
        message.commitTimeoutMs !== undefined && (obj.commitTimeoutMs = message.commitTimeoutMs);
        message.commitThreads !== undefined && (obj.commitThreads = message.commitThreads);
        message.transactionalPrefix !== undefined &&
            (obj.transactionalPrefix = message.transactionalPrefix);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<IcebergControl>, I>>(object: I): IcebergControl {
        const message = { ...baseIcebergControl } as IcebergControl;
        message.groupIdPrefix = object.groupIdPrefix ?? '';
        message.commitIntervalMs = object.commitIntervalMs ?? undefined;
        message.commitTimeoutMs = object.commitTimeoutMs ?? undefined;
        message.commitThreads = object.commitThreads ?? undefined;
        message.transactionalPrefix = object.transactionalPrefix ?? '';
        return message;
    },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
