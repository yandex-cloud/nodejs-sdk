/* eslint-disable */
import { messageTypeRegistry } from "../../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  Int64Value,
  BoolValue,
} from "../../../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.mdb.clickhouse.v1.config";

/**
 * ClickHouse configuration options. Detailed description for each set of options
 * is available in [ClickHouse documentation](https://clickhouse.yandex/docs/en/operations/server_settings/settings/).
 *
 * Any options not listed here are not supported.
 */
export interface ClickhouseConfig {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig";
  /** Logging level for the ClickHouse cluster. Possible values: TRACE, DEBUG, INFORMATION, WARNING, ERROR. */
  logLevel: ClickhouseConfig_LogLevel;
  /**
   * Settings for the MergeTree engine.
   * See description in [ClickHouse documentation](https://clickhouse.yandex/docs/en/operations/server_settings/settings/#merge_tree).
   */
  mergeTree?: ClickhouseConfig_MergeTree;
  /**
   * Compression settings for the ClickHouse cluster.
   * See in-depth description in [ClickHouse documentation](https://clickhouse.yandex/docs/en/operations/server_settings/settings/#compression).
   */
  compression: ClickhouseConfig_Compression[];
  /**
   * Configuration of external dictionaries to be used by the ClickHouse cluster.
   * See in-depth description in [ClickHouse documentation](https://clickhouse.yandex/docs/en/query_language/dicts/external_dicts/).
   */
  dictionaries: ClickhouseConfig_ExternalDictionary[];
  /**
   * Settings for thinning Graphite data.
   * See in-depth description in [ClickHouse documentation](https://clickhouse.yandex/docs/en/operations/server_settings/settings/#server_settings-graphite_rollup).
   */
  graphiteRollup: ClickhouseConfig_GraphiteRollup[];
  kafka?: ClickhouseConfig_Kafka;
  kafkaTopics: ClickhouseConfig_KafkaTopic[];
  rabbitmq?: ClickhouseConfig_Rabbitmq;
  /** Maximum number of inbound connections. */
  maxConnections?: number;
  /** Maximum number of simultaneously processed requests. */
  maxConcurrentQueries?: number;
  /** Number of milliseconds that ClickHouse waits for incoming requests before closing the connection. */
  keepAliveTimeout?: number;
  /** Cache size (in bytes) for uncompressed data used by MergeTree tables. */
  uncompressedCacheSize?: number;
  /** Approximate size (in bytes) of the cache of "marks" used by MergeTree tables. */
  markCacheSize?: number;
  /** Maximum size of the table that can be deleted using a DROP query. */
  maxTableSizeToDrop?: number;
  /** Maximum size of the partition that can be deleted using a DROP query. */
  maxPartitionSizeToDrop?: number;
  /**
   * The setting is deprecated and has no effect.
   *
   * @deprecated
   */
  builtinDictionariesReloadInterval?: number;
  /** The server's time zone to be used in DateTime fields conversions. Specified as an IANA identifier. */
  timezone: string;
  /** Address of the archive with the user geobase in Object Storage. */
  geobaseUri: string;
  /**
   * The maximum size that query_log can grow to before old data will be removed. If set to 0, automatic removal of
   * query_log data based on size is disabled.
   */
  queryLogRetentionSize?: number;
  /**
   * The maximum time that query_log records will be retained before removal. If set to 0, automatic removal of
   * query_log data based on time is disabled.
   */
  queryLogRetentionTime?: number;
  /** Whether query_thread_log system table is enabled. */
  queryThreadLogEnabled?: boolean;
  /**
   * The maximum size that query_thread_log can grow to before old data will be removed. If set to 0, automatic removal of
   * query_thread_log data based on size is disabled.
   */
  queryThreadLogRetentionSize?: number;
  /**
   * The maximum time that query_thread_log records will be retained before removal. If set to 0, automatic removal of
   * query_thread_log data based on time is disabled.
   */
  queryThreadLogRetentionTime?: number;
  /**
   * The maximum size that part_log can grow to before old data will be removed. If set to 0, automatic removal of
   * part_log data based on size is disabled.
   */
  partLogRetentionSize?: number;
  /**
   * The maximum time that part_log records will be retained before removal. If set to 0, automatic removal of
   * part_log data based on time is disabled.
   */
  partLogRetentionTime?: number;
  /** Whether metric_log system table is enabled. */
  metricLogEnabled?: boolean;
  /**
   * The maximum size that metric_log can grow to before old data will be removed. If set to 0, automatic removal of
   * metric_log data based on size is disabled.
   */
  metricLogRetentionSize?: number;
  /**
   * The maximum time that metric_log records will be retained before removal. If set to 0, automatic removal of
   * metric_log data based on time is disabled.
   */
  metricLogRetentionTime?: number;
  /** Whether trace_log system table is enabled. */
  traceLogEnabled?: boolean;
  /**
   * The maximum size that trace_log can grow to before old data will be removed. If set to 0, automatic removal of
   * trace_log data based on size is disabled.
   */
  traceLogRetentionSize?: number;
  /**
   * The maximum time that trace_log records will be retained before removal. If set to 0, automatic removal of
   * trace_log data based on time is disabled.
   */
  traceLogRetentionTime?: number;
  /** Whether text_log system table is enabled. */
  textLogEnabled?: boolean;
  /**
   * The maximum size that text_log can grow to before old data will be removed. If set to 0, automatic removal of
   * text_log data based on size is disabled.
   */
  textLogRetentionSize?: number;
  /**
   * The maximum time that text_log records will be retained before removal. If set to 0, automatic removal of
   * text_log data based on time is disabled.
   */
  textLogRetentionTime?: number;
  /** Logging level for text_log system table. Possible values: TRACE, DEBUG, INFORMATION, WARNING, ERROR. */
  textLogLevel: ClickhouseConfig_LogLevel;
  backgroundPoolSize?: number;
  backgroundSchedulePoolSize?: number;
}

export enum ClickhouseConfig_LogLevel {
  LOG_LEVEL_UNSPECIFIED = 0,
  TRACE = 1,
  DEBUG = 2,
  INFORMATION = 3,
  WARNING = 4,
  ERROR = 5,
  UNRECOGNIZED = -1,
}

export function clickhouseConfig_LogLevelFromJSON(
  object: any
): ClickhouseConfig_LogLevel {
  switch (object) {
    case 0:
    case "LOG_LEVEL_UNSPECIFIED":
      return ClickhouseConfig_LogLevel.LOG_LEVEL_UNSPECIFIED;
    case 1:
    case "TRACE":
      return ClickhouseConfig_LogLevel.TRACE;
    case 2:
    case "DEBUG":
      return ClickhouseConfig_LogLevel.DEBUG;
    case 3:
    case "INFORMATION":
      return ClickhouseConfig_LogLevel.INFORMATION;
    case 4:
    case "WARNING":
      return ClickhouseConfig_LogLevel.WARNING;
    case 5:
    case "ERROR":
      return ClickhouseConfig_LogLevel.ERROR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClickhouseConfig_LogLevel.UNRECOGNIZED;
  }
}

export function clickhouseConfig_LogLevelToJSON(
  object: ClickhouseConfig_LogLevel
): string {
  switch (object) {
    case ClickhouseConfig_LogLevel.LOG_LEVEL_UNSPECIFIED:
      return "LOG_LEVEL_UNSPECIFIED";
    case ClickhouseConfig_LogLevel.TRACE:
      return "TRACE";
    case ClickhouseConfig_LogLevel.DEBUG:
      return "DEBUG";
    case ClickhouseConfig_LogLevel.INFORMATION:
      return "INFORMATION";
    case ClickhouseConfig_LogLevel.WARNING:
      return "WARNING";
    case ClickhouseConfig_LogLevel.ERROR:
      return "ERROR";
    default:
      return "UNKNOWN";
  }
}

/** Options specific to the MergeTree table engine. */
export interface ClickhouseConfig_MergeTree {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.MergeTree";
  /** Number of blocks of hashes to keep in ZooKeeper. */
  replicatedDeduplicationWindow?: number;
  /** Period of time to keep blocks of hashes for. */
  replicatedDeduplicationWindowSeconds?: number;
  /** If table contains at least that many active parts in single partition, artificially slow down insert into table. */
  partsToDelayInsert?: number;
  /** If more than this number active parts in single partition, throw 'Too many parts ...' exception. */
  partsToThrowInsert?: number;
  /** How many tasks of merging and mutating parts are allowed simultaneously in ReplicatedMergeTree queue. */
  maxReplicatedMergesInQueue?: number;
  /**
   * If there is less than specified number of free entries in background pool (or replicated queue), start to lower
   * maximum size of merge to process.
   */
  numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge?: number;
  /**
   * Maximum in total size of parts to merge, when there are minimum free threads in background pool (or entries
   * in replication queue).
   */
  maxBytesToMergeAtMinSpaceInPool?: number;
  maxBytesToMergeAtMaxSpaceInPool?: number;
}

export interface ClickhouseConfig_Kafka {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Kafka";
  securityProtocol: ClickhouseConfig_Kafka_SecurityProtocol;
  saslMechanism: ClickhouseConfig_Kafka_SaslMechanism;
  saslUsername: string;
  saslPassword: string;
}

export enum ClickhouseConfig_Kafka_SecurityProtocol {
  SECURITY_PROTOCOL_UNSPECIFIED = 0,
  SECURITY_PROTOCOL_PLAINTEXT = 1,
  SECURITY_PROTOCOL_SSL = 2,
  SECURITY_PROTOCOL_SASL_PLAINTEXT = 3,
  SECURITY_PROTOCOL_SASL_SSL = 4,
  UNRECOGNIZED = -1,
}

export function clickhouseConfig_Kafka_SecurityProtocolFromJSON(
  object: any
): ClickhouseConfig_Kafka_SecurityProtocol {
  switch (object) {
    case 0:
    case "SECURITY_PROTOCOL_UNSPECIFIED":
      return ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_UNSPECIFIED;
    case 1:
    case "SECURITY_PROTOCOL_PLAINTEXT":
      return ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_PLAINTEXT;
    case 2:
    case "SECURITY_PROTOCOL_SSL":
      return ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_SSL;
    case 3:
    case "SECURITY_PROTOCOL_SASL_PLAINTEXT":
      return ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_SASL_PLAINTEXT;
    case 4:
    case "SECURITY_PROTOCOL_SASL_SSL":
      return ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_SASL_SSL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClickhouseConfig_Kafka_SecurityProtocol.UNRECOGNIZED;
  }
}

export function clickhouseConfig_Kafka_SecurityProtocolToJSON(
  object: ClickhouseConfig_Kafka_SecurityProtocol
): string {
  switch (object) {
    case ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_UNSPECIFIED:
      return "SECURITY_PROTOCOL_UNSPECIFIED";
    case ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_PLAINTEXT:
      return "SECURITY_PROTOCOL_PLAINTEXT";
    case ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_SSL:
      return "SECURITY_PROTOCOL_SSL";
    case ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_SASL_PLAINTEXT:
      return "SECURITY_PROTOCOL_SASL_PLAINTEXT";
    case ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_SASL_SSL:
      return "SECURITY_PROTOCOL_SASL_SSL";
    default:
      return "UNKNOWN";
  }
}

export enum ClickhouseConfig_Kafka_SaslMechanism {
  SASL_MECHANISM_UNSPECIFIED = 0,
  SASL_MECHANISM_GSSAPI = 1,
  SASL_MECHANISM_PLAIN = 2,
  SASL_MECHANISM_SCRAM_SHA_256 = 3,
  SASL_MECHANISM_SCRAM_SHA_512 = 4,
  UNRECOGNIZED = -1,
}

export function clickhouseConfig_Kafka_SaslMechanismFromJSON(
  object: any
): ClickhouseConfig_Kafka_SaslMechanism {
  switch (object) {
    case 0:
    case "SASL_MECHANISM_UNSPECIFIED":
      return ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_UNSPECIFIED;
    case 1:
    case "SASL_MECHANISM_GSSAPI":
      return ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_GSSAPI;
    case 2:
    case "SASL_MECHANISM_PLAIN":
      return ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_PLAIN;
    case 3:
    case "SASL_MECHANISM_SCRAM_SHA_256":
      return ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_SCRAM_SHA_256;
    case 4:
    case "SASL_MECHANISM_SCRAM_SHA_512":
      return ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_SCRAM_SHA_512;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClickhouseConfig_Kafka_SaslMechanism.UNRECOGNIZED;
  }
}

export function clickhouseConfig_Kafka_SaslMechanismToJSON(
  object: ClickhouseConfig_Kafka_SaslMechanism
): string {
  switch (object) {
    case ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_UNSPECIFIED:
      return "SASL_MECHANISM_UNSPECIFIED";
    case ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_GSSAPI:
      return "SASL_MECHANISM_GSSAPI";
    case ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_PLAIN:
      return "SASL_MECHANISM_PLAIN";
    case ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_SCRAM_SHA_256:
      return "SASL_MECHANISM_SCRAM_SHA_256";
    case ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_SCRAM_SHA_512:
      return "SASL_MECHANISM_SCRAM_SHA_512";
    default:
      return "UNKNOWN";
  }
}

export interface ClickhouseConfig_KafkaTopic {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.KafkaTopic";
  name: string;
  settings?: ClickhouseConfig_Kafka;
}

export interface ClickhouseConfig_Rabbitmq {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Rabbitmq";
  username: string;
  password: string;
}

export interface ClickhouseConfig_Compression {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Compression";
  /** Compression method to use for the specified combination of `min_part_size` and `min_part_size_ratio`. */
  method: ClickhouseConfig_Compression_Method;
  /** Minimum size of a part of a table. */
  minPartSize: number;
  /** Minimum ratio of a part relative to the size of all the data in the table. */
  minPartSizeRatio: number;
}

export enum ClickhouseConfig_Compression_Method {
  METHOD_UNSPECIFIED = 0,
  /** LZ4 - [LZ4 compression algorithm](https://lz4.github.io/lz4/). */
  LZ4 = 1,
  /** ZSTD - [Zstandard compression algorithm](https://facebook.github.io/zstd/). */
  ZSTD = 2,
  UNRECOGNIZED = -1,
}

export function clickhouseConfig_Compression_MethodFromJSON(
  object: any
): ClickhouseConfig_Compression_Method {
  switch (object) {
    case 0:
    case "METHOD_UNSPECIFIED":
      return ClickhouseConfig_Compression_Method.METHOD_UNSPECIFIED;
    case 1:
    case "LZ4":
      return ClickhouseConfig_Compression_Method.LZ4;
    case 2:
    case "ZSTD":
      return ClickhouseConfig_Compression_Method.ZSTD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClickhouseConfig_Compression_Method.UNRECOGNIZED;
  }
}

export function clickhouseConfig_Compression_MethodToJSON(
  object: ClickhouseConfig_Compression_Method
): string {
  switch (object) {
    case ClickhouseConfig_Compression_Method.METHOD_UNSPECIFIED:
      return "METHOD_UNSPECIFIED";
    case ClickhouseConfig_Compression_Method.LZ4:
      return "LZ4";
    case ClickhouseConfig_Compression_Method.ZSTD:
      return "ZSTD";
    default:
      return "UNKNOWN";
  }
}

export interface ClickhouseConfig_ExternalDictionary {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary";
  /** Name of the external dictionary. */
  name: string;
  /**
   * Set of attributes for the external dictionary.
   * For in-depth description, see [ClickHouse documentation](https://clickhouse.yandex/docs/en/query_language/dicts/external_dicts_dict_structure/).
   */
  structure?: ClickhouseConfig_ExternalDictionary_Structure;
  /**
   * Layout for storing the dictionary in memory.
   * For in-depth description, see [ClickHouse documentation](https://clickhouse.yandex/docs/en/query_language/dicts/external_dicts_dict_layout/).
   */
  layout?: ClickhouseConfig_ExternalDictionary_Layout;
  /** Fixed interval between dictionary updates. */
  fixedLifetime: number | undefined;
  /** Range of intervals between dictionary updates for ClickHouse to choose from. */
  lifetimeRange?: ClickhouseConfig_ExternalDictionary_Range | undefined;
  /** HTTP source for the dictionary. */
  httpSource?: ClickhouseConfig_ExternalDictionary_HttpSource | undefined;
  /** MySQL source for the dictionary. */
  mysqlSource?: ClickhouseConfig_ExternalDictionary_MysqlSource | undefined;
  /** ClickHouse source for the dictionary. */
  clickhouseSource?:
    | ClickhouseConfig_ExternalDictionary_ClickhouseSource
    | undefined;
  /** MongoDB source for the dictionary. */
  mongodbSource?: ClickhouseConfig_ExternalDictionary_MongodbSource | undefined;
  /** PostgreSQL source for the dictionary. */
  postgresqlSource?:
    | ClickhouseConfig_ExternalDictionary_PostgresqlSource
    | undefined;
}

export interface ClickhouseConfig_ExternalDictionary_HttpSource {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.HttpSource";
  /** URL of the source dictionary available over HTTP. */
  url: string;
  /** The data format. Valid values are all formats supported by ClickHouse SQL dialect. */
  format: string;
}

export interface ClickhouseConfig_ExternalDictionary_MysqlSource {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MysqlSource";
  /** Name of the MySQL database to connect to. */
  db: string;
  /** Name of the database table to use as a ClickHouse dictionary. */
  table: string;
  /** Default port to use when connecting to a replica of the dictionary source. */
  port: number;
  /** Name of the default user for replicas of the dictionary source. */
  user: string;
  /** Password of the default user for replicas of the dictionary source. */
  password: string;
  /** List of MySQL replicas of the database used as dictionary source. */
  replicas: ClickhouseConfig_ExternalDictionary_MysqlSource_Replica[];
  /** Selection criteria for the data in the specified MySQL table. */
  where: string;
  /**
   * Query for checking the dictionary status, to pull only updated data.
   * For more details, see [ClickHouse documentation on dictionaries](https://clickhouse.yandex/docs/en/query_language/dicts/external_dicts_dict_lifetime/).
   */
  invalidateQuery: string;
}

export interface ClickhouseConfig_ExternalDictionary_MysqlSource_Replica {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MysqlSource.Replica";
  /** MySQL host of the replica. */
  host: string;
  /**
   * The priority of the replica that ClickHouse takes into account when connecting.
   * Replica with the highest priority should have this field set to the lowest number.
   */
  priority: number;
  /**
   * Port to use when connecting to the replica.
   * If a port is not specified for a replica, ClickHouse uses the port specified for the source.
   */
  port: number;
  /** Name of the MySQL database user. */
  user: string;
  /** Password of the MySQL database user. */
  password: string;
}

export interface ClickhouseConfig_ExternalDictionary_ClickhouseSource {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.ClickhouseSource";
  /** Name of the ClickHouse database. */
  db: string;
  /** Name of the table in the specified database to be used as the dictionary source. */
  table: string;
  /** ClickHouse host of the specified database. */
  host: string;
  /** Port to use when connecting to the host. */
  port: number;
  /** Name of the ClickHouse database user. */
  user: string;
  /** Password of the ClickHouse database user. */
  password: string;
  /** Selection criteria for the data in the specified ClickHouse table. */
  where: string;
}

export interface ClickhouseConfig_ExternalDictionary_MongodbSource {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MongodbSource";
  /** Name of the MongoDB database. */
  db: string;
  /** Name of the collection in the specified database to be used as the dictionary source. */
  collection: string;
  /** MongoDB host of the specified database. */
  host: string;
  /** Port to use when connecting to the host. */
  port: number;
  /** Name of the MongoDB database user. */
  user: string;
  /** Password of the MongoDB database user. */
  password: string;
}

export interface ClickhouseConfig_ExternalDictionary_PostgresqlSource {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.PostgresqlSource";
  /** Name of the PostrgreSQL database. */
  db: string;
  /** Name of the table in the specified database to be used as the dictionary source. */
  table: string;
  /** Name of the PostrgreSQL host */
  hosts: string[];
  /** Port to use when connecting to the host. */
  port: number;
  /** Name of the PostrgreSQL database user. */
  user: string;
  /** Password of the PostrgreSQL database user. */
  password: string;
  /**
   * Query for checking the dictionary status, to pull only updated data.
   * For more details, see [ClickHouse documentation on dictionaries](https://clickhouse.yandex/docs/en/query_language/dicts/external_dicts_dict_lifetime/).
   */
  invalidateQuery: string;
  /**
   * Mode of SSL TCP/IP connection to the PostgreSQL host.
   * For more details, see [PostgreSQL documentation](https://www.postgresql.org/docs/current/libpq-ssl.html).
   */
  sslMode: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode;
}

export enum ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode {
  SSL_MODE_UNSPECIFIED = 0,
  /** DISABLE - Only try a non-SSL connection. */
  DISABLE = 1,
  /** ALLOW - First try a non-SSL connection; if that fails, try an SSL connection. */
  ALLOW = 2,
  /** PREFER - First try an SSL connection; if that fails, try a non-SSL connection. */
  PREFER = 3,
  /** VERIFY_CA - Only try an SSL connection, and verify that the server certificate is issued by a trusted certificate authority (CA). */
  VERIFY_CA = 4,
  /** VERIFY_FULL - Only try an SSL connection, verify that the server certificate is issued by a trusted CA and that the requested server host name matches that in the certificate. */
  VERIFY_FULL = 5,
  UNRECOGNIZED = -1,
}

export function clickhouseConfig_ExternalDictionary_PostgresqlSource_SslModeFromJSON(
  object: any
): ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode {
  switch (object) {
    case 0:
    case "SSL_MODE_UNSPECIFIED":
      return ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.SSL_MODE_UNSPECIFIED;
    case 1:
    case "DISABLE":
      return ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.DISABLE;
    case 2:
    case "ALLOW":
      return ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.ALLOW;
    case 3:
    case "PREFER":
      return ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.PREFER;
    case 4:
    case "VERIFY_CA":
      return ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.VERIFY_CA;
    case 5:
    case "VERIFY_FULL":
      return ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.VERIFY_FULL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.UNRECOGNIZED;
  }
}

export function clickhouseConfig_ExternalDictionary_PostgresqlSource_SslModeToJSON(
  object: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode
): string {
  switch (object) {
    case ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.SSL_MODE_UNSPECIFIED:
      return "SSL_MODE_UNSPECIFIED";
    case ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.DISABLE:
      return "DISABLE";
    case ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.ALLOW:
      return "ALLOW";
    case ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.PREFER:
      return "PREFER";
    case ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.VERIFY_CA:
      return "VERIFY_CA";
    case ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.VERIFY_FULL:
      return "VERIFY_FULL";
    default:
      return "UNKNOWN";
  }
}

export interface ClickhouseConfig_ExternalDictionary_Structure {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure";
  /** Single numeric key column for the dictionary. */
  id?: ClickhouseConfig_ExternalDictionary_Structure_Id;
  /**
   * Composite key for the dictionary, containing of one or more key columns.
   * For details, see [ClickHouse documentation](https://clickhouse.yandex/docs/en/query_language/dicts/external_dicts_dict_structure/#composite-key).
   */
  key?: ClickhouseConfig_ExternalDictionary_Structure_Key;
  /**
   * Field holding the beginning of the range for dictionaries with `RANGE_HASHED` layout.
   * For details, see [ClickHouse documentation](https://clickhouse.yandex/docs/en/query_language/dicts/external_dicts_dict_layout/#range-hashed).
   */
  rangeMin?: ClickhouseConfig_ExternalDictionary_Structure_Attribute;
  /**
   * Field holding the end of the range for dictionaries with `RANGE_HASHED` layout.
   * For details, see [ClickHouse documentation](https://clickhouse.yandex/docs/en/query_language/dicts/external_dicts_dict_layout/#range-hashed).
   */
  rangeMax?: ClickhouseConfig_ExternalDictionary_Structure_Attribute;
  /**
   * Description of the fields available for database queries.
   * For details, see [ClickHouse documentation](https://clickhouse.yandex/docs/en/query_language/dicts/external_dicts_dict_structure/#attributes).
   */
  attributes: ClickhouseConfig_ExternalDictionary_Structure_Attribute[];
}

export interface ClickhouseConfig_ExternalDictionary_Structure_Attribute {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Attribute";
  /** Name of the column. */
  name: string;
  /** Type of the column. */
  type: string;
  /** Default value for an element without data (for example, an empty string). */
  nullValue: string;
  /** Expression, describing the attribute, if applicable. */
  expression: string;
  /**
   * Indication of hierarchy support.
   * Default value: `false`.
   */
  hierarchical: boolean;
  /**
   * Indication of injective mapping "id -> attribute".
   * Default value: `false`.
   */
  injective: boolean;
}

/** Numeric key. */
export interface ClickhouseConfig_ExternalDictionary_Structure_Id {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Id";
  /** Name of the numeric key. */
  name: string;
}

/** Complex key. */
export interface ClickhouseConfig_ExternalDictionary_Structure_Key {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Key";
  /** Attributes of a complex key. */
  attributes: ClickhouseConfig_ExternalDictionary_Structure_Attribute[];
}

/** Layout determining how to store the dictionary in memory. */
export interface ClickhouseConfig_ExternalDictionary_Layout {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Layout";
  /** Layout type for an external dictionary. */
  type: ClickhouseConfig_ExternalDictionary_Layout_Type;
  /**
   * Number of cells in the cache. Rounded up to a power of two.
   * Applicable only for CACHE and COMPLEX_KEY_CACHE layout types.
   */
  sizeInCells: number;
}

export enum ClickhouseConfig_ExternalDictionary_Layout_Type {
  TYPE_UNSPECIFIED = 0,
  /**
   * FLAT - The entire dictionary is stored in memory in the form of flat arrays.
   * Available for all dictionary sources.
   */
  FLAT = 1,
  /**
   * HASHED - The entire dictionary is stored in memory in the form of a hash table.
   * Available for all dictionary sources.
   */
  HASHED = 2,
  /**
   * COMPLEX_KEY_HASHED - Similar to HASHED, to be used with composite keys.
   * Available for all dictionary sources.
   */
  COMPLEX_KEY_HASHED = 3,
  /**
   * RANGE_HASHED - The entire dictionary is stored in memory in the form of a hash table,
   * with an ordered array of ranges and their corresponding values.
   * Available for all dictionary sources.
   */
  RANGE_HASHED = 4,
  /**
   * CACHE - The dictionary is stored in a cache with a set number of cells.
   * Available for MySQL, ClickHouse and HTTP dictionary sources.
   */
  CACHE = 5,
  /**
   * COMPLEX_KEY_CACHE - Similar to CACHE, to be used with composite keys.
   * Available for MySQL, ClickHouse and HTTP dictionary sources.
   */
  COMPLEX_KEY_CACHE = 6,
  UNRECOGNIZED = -1,
}

export function clickhouseConfig_ExternalDictionary_Layout_TypeFromJSON(
  object: any
): ClickhouseConfig_ExternalDictionary_Layout_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return ClickhouseConfig_ExternalDictionary_Layout_Type.TYPE_UNSPECIFIED;
    case 1:
    case "FLAT":
      return ClickhouseConfig_ExternalDictionary_Layout_Type.FLAT;
    case 2:
    case "HASHED":
      return ClickhouseConfig_ExternalDictionary_Layout_Type.HASHED;
    case 3:
    case "COMPLEX_KEY_HASHED":
      return ClickhouseConfig_ExternalDictionary_Layout_Type.COMPLEX_KEY_HASHED;
    case 4:
    case "RANGE_HASHED":
      return ClickhouseConfig_ExternalDictionary_Layout_Type.RANGE_HASHED;
    case 5:
    case "CACHE":
      return ClickhouseConfig_ExternalDictionary_Layout_Type.CACHE;
    case 6:
    case "COMPLEX_KEY_CACHE":
      return ClickhouseConfig_ExternalDictionary_Layout_Type.COMPLEX_KEY_CACHE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClickhouseConfig_ExternalDictionary_Layout_Type.UNRECOGNIZED;
  }
}

export function clickhouseConfig_ExternalDictionary_Layout_TypeToJSON(
  object: ClickhouseConfig_ExternalDictionary_Layout_Type
): string {
  switch (object) {
    case ClickhouseConfig_ExternalDictionary_Layout_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case ClickhouseConfig_ExternalDictionary_Layout_Type.FLAT:
      return "FLAT";
    case ClickhouseConfig_ExternalDictionary_Layout_Type.HASHED:
      return "HASHED";
    case ClickhouseConfig_ExternalDictionary_Layout_Type.COMPLEX_KEY_HASHED:
      return "COMPLEX_KEY_HASHED";
    case ClickhouseConfig_ExternalDictionary_Layout_Type.RANGE_HASHED:
      return "RANGE_HASHED";
    case ClickhouseConfig_ExternalDictionary_Layout_Type.CACHE:
      return "CACHE";
    case ClickhouseConfig_ExternalDictionary_Layout_Type.COMPLEX_KEY_CACHE:
      return "COMPLEX_KEY_CACHE";
    default:
      return "UNKNOWN";
  }
}

export interface ClickhouseConfig_ExternalDictionary_Range {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Range";
  /** Minimum dictionary lifetime. */
  min: number;
  /** Maximum dictionary lifetime. */
  max: number;
}

/** Rollup settings for the GraphiteMergeTree table engine. */
export interface ClickhouseConfig_GraphiteRollup {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup";
  /** Name for the specified combination of settings for Graphite rollup. */
  name: string;
  /** Pattern to use for the rollup. */
  patterns: ClickhouseConfig_GraphiteRollup_Pattern[];
}

export interface ClickhouseConfig_GraphiteRollup_Pattern {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup.Pattern";
  /** Pattern for metric names. */
  regexp: string;
  /** Name of the aggregating function to apply to data of the age specified in [retention]. */
  function: string;
  /** Age of data to use for thinning. */
  retention: ClickhouseConfig_GraphiteRollup_Pattern_Retention[];
}

export interface ClickhouseConfig_GraphiteRollup_Pattern_Retention {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup.Pattern.Retention";
  /** Minimum age of the data in seconds. */
  age: number;
  /** Precision of determining the age of the data, in seconds. */
  precision: number;
}

export interface ClickhouseConfigSet {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfigSet";
  /**
   * Effective settings for a ClickHouse cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?: ClickhouseConfig;
  /** User-defined settings for a ClickHouse cluster. */
  userConfig?: ClickhouseConfig;
  /** Default configuration for a ClickHouse cluster. */
  defaultConfig?: ClickhouseConfig;
}

const baseClickhouseConfig: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig",
  logLevel: 0,
  timezone: "",
  geobaseUri: "",
  textLogLevel: 0,
};

export const ClickhouseConfig = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig" as const,

  encode(
    message: ClickhouseConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.logLevel !== 0) {
      writer.uint32(8).int32(message.logLevel);
    }
    if (message.mergeTree !== undefined) {
      ClickhouseConfig_MergeTree.encode(
        message.mergeTree,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.compression) {
      ClickhouseConfig_Compression.encode(
        v!,
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.dictionaries) {
      ClickhouseConfig_ExternalDictionary.encode(
        v!,
        writer.uint32(34).fork()
      ).ldelim();
    }
    for (const v of message.graphiteRollup) {
      ClickhouseConfig_GraphiteRollup.encode(
        v!,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.kafka !== undefined) {
      ClickhouseConfig_Kafka.encode(
        message.kafka,
        writer.uint32(282).fork()
      ).ldelim();
    }
    for (const v of message.kafkaTopics) {
      ClickhouseConfig_KafkaTopic.encode(
        v!,
        writer.uint32(290).fork()
      ).ldelim();
    }
    if (message.rabbitmq !== undefined) {
      ClickhouseConfig_Rabbitmq.encode(
        message.rabbitmq,
        writer.uint32(298).fork()
      ).ldelim();
    }
    if (message.maxConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxConnections! },
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.maxConcurrentQueries !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxConcurrentQueries!,
        },
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.keepAliveTimeout !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.keepAliveTimeout!,
        },
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.uncompressedCacheSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.uncompressedCacheSize!,
        },
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.markCacheSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.markCacheSize! },
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.maxTableSizeToDrop !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxTableSizeToDrop!,
        },
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.maxPartitionSizeToDrop !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxPartitionSizeToDrop!,
        },
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.builtinDictionariesReloadInterval !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.builtinDictionariesReloadInterval!,
        },
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.timezone !== "") {
      writer.uint32(114).string(message.timezone);
    }
    if (message.geobaseUri !== "") {
      writer.uint32(122).string(message.geobaseUri);
    }
    if (message.queryLogRetentionSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.queryLogRetentionSize!,
        },
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.queryLogRetentionTime !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.queryLogRetentionTime!,
        },
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.queryThreadLogEnabled !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.queryThreadLogEnabled!,
        },
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.queryThreadLogRetentionSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.queryThreadLogRetentionSize!,
        },
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.queryThreadLogRetentionTime !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.queryThreadLogRetentionTime!,
        },
        writer.uint32(162).fork()
      ).ldelim();
    }
    if (message.partLogRetentionSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.partLogRetentionSize!,
        },
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.partLogRetentionTime !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.partLogRetentionTime!,
        },
        writer.uint32(178).fork()
      ).ldelim();
    }
    if (message.metricLogEnabled !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.metricLogEnabled!,
        },
        writer.uint32(186).fork()
      ).ldelim();
    }
    if (message.metricLogRetentionSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.metricLogRetentionSize!,
        },
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.metricLogRetentionTime !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.metricLogRetentionTime!,
        },
        writer.uint32(202).fork()
      ).ldelim();
    }
    if (message.traceLogEnabled !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.traceLogEnabled! },
        writer.uint32(210).fork()
      ).ldelim();
    }
    if (message.traceLogRetentionSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.traceLogRetentionSize!,
        },
        writer.uint32(218).fork()
      ).ldelim();
    }
    if (message.traceLogRetentionTime !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.traceLogRetentionTime!,
        },
        writer.uint32(226).fork()
      ).ldelim();
    }
    if (message.textLogEnabled !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.textLogEnabled! },
        writer.uint32(234).fork()
      ).ldelim();
    }
    if (message.textLogRetentionSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.textLogRetentionSize!,
        },
        writer.uint32(242).fork()
      ).ldelim();
    }
    if (message.textLogRetentionTime !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.textLogRetentionTime!,
        },
        writer.uint32(250).fork()
      ).ldelim();
    }
    if (message.textLogLevel !== 0) {
      writer.uint32(256).int32(message.textLogLevel);
    }
    if (message.backgroundPoolSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.backgroundPoolSize!,
        },
        writer.uint32(266).fork()
      ).ldelim();
    }
    if (message.backgroundSchedulePoolSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.backgroundSchedulePoolSize!,
        },
        writer.uint32(274).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClickhouseConfig } as ClickhouseConfig;
    message.compression = [];
    message.dictionaries = [];
    message.graphiteRollup = [];
    message.kafkaTopics = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.logLevel = reader.int32() as any;
          break;
        case 2:
          message.mergeTree = ClickhouseConfig_MergeTree.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.compression.push(
            ClickhouseConfig_Compression.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.dictionaries.push(
            ClickhouseConfig_ExternalDictionary.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.graphiteRollup.push(
            ClickhouseConfig_GraphiteRollup.decode(reader, reader.uint32())
          );
          break;
        case 35:
          message.kafka = ClickhouseConfig_Kafka.decode(
            reader,
            reader.uint32()
          );
          break;
        case 36:
          message.kafkaTopics.push(
            ClickhouseConfig_KafkaTopic.decode(reader, reader.uint32())
          );
          break;
        case 37:
          message.rabbitmq = ClickhouseConfig_Rabbitmq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.maxConnections = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 7:
          message.maxConcurrentQueries = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 8:
          message.keepAliveTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 9:
          message.uncompressedCacheSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 10:
          message.markCacheSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 11:
          message.maxTableSizeToDrop = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 13:
          message.maxPartitionSizeToDrop = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 12:
          message.builtinDictionariesReloadInterval = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 14:
          message.timezone = reader.string();
          break;
        case 15:
          message.geobaseUri = reader.string();
          break;
        case 16:
          message.queryLogRetentionSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 17:
          message.queryLogRetentionTime = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 18:
          message.queryThreadLogEnabled = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 19:
          message.queryThreadLogRetentionSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 20:
          message.queryThreadLogRetentionTime = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 21:
          message.partLogRetentionSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 22:
          message.partLogRetentionTime = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 23:
          message.metricLogEnabled = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 24:
          message.metricLogRetentionSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 25:
          message.metricLogRetentionTime = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 26:
          message.traceLogEnabled = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 27:
          message.traceLogRetentionSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 28:
          message.traceLogRetentionTime = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 29:
          message.textLogEnabled = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 30:
          message.textLogRetentionSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 31:
          message.textLogRetentionTime = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 32:
          message.textLogLevel = reader.int32() as any;
          break;
        case 33:
          message.backgroundPoolSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 34:
          message.backgroundSchedulePoolSize = Int64Value.decode(
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

  fromJSON(object: any): ClickhouseConfig {
    const message = { ...baseClickhouseConfig } as ClickhouseConfig;
    message.logLevel =
      object.logLevel !== undefined && object.logLevel !== null
        ? clickhouseConfig_LogLevelFromJSON(object.logLevel)
        : 0;
    message.mergeTree =
      object.mergeTree !== undefined && object.mergeTree !== null
        ? ClickhouseConfig_MergeTree.fromJSON(object.mergeTree)
        : undefined;
    message.compression = (object.compression ?? []).map((e: any) =>
      ClickhouseConfig_Compression.fromJSON(e)
    );
    message.dictionaries = (object.dictionaries ?? []).map((e: any) =>
      ClickhouseConfig_ExternalDictionary.fromJSON(e)
    );
    message.graphiteRollup = (object.graphiteRollup ?? []).map((e: any) =>
      ClickhouseConfig_GraphiteRollup.fromJSON(e)
    );
    message.kafka =
      object.kafka !== undefined && object.kafka !== null
        ? ClickhouseConfig_Kafka.fromJSON(object.kafka)
        : undefined;
    message.kafkaTopics = (object.kafkaTopics ?? []).map((e: any) =>
      ClickhouseConfig_KafkaTopic.fromJSON(e)
    );
    message.rabbitmq =
      object.rabbitmq !== undefined && object.rabbitmq !== null
        ? ClickhouseConfig_Rabbitmq.fromJSON(object.rabbitmq)
        : undefined;
    message.maxConnections =
      object.maxConnections !== undefined && object.maxConnections !== null
        ? Number(object.maxConnections)
        : undefined;
    message.maxConcurrentQueries =
      object.maxConcurrentQueries !== undefined &&
      object.maxConcurrentQueries !== null
        ? Number(object.maxConcurrentQueries)
        : undefined;
    message.keepAliveTimeout =
      object.keepAliveTimeout !== undefined && object.keepAliveTimeout !== null
        ? Number(object.keepAliveTimeout)
        : undefined;
    message.uncompressedCacheSize =
      object.uncompressedCacheSize !== undefined &&
      object.uncompressedCacheSize !== null
        ? Number(object.uncompressedCacheSize)
        : undefined;
    message.markCacheSize =
      object.markCacheSize !== undefined && object.markCacheSize !== null
        ? Number(object.markCacheSize)
        : undefined;
    message.maxTableSizeToDrop =
      object.maxTableSizeToDrop !== undefined &&
      object.maxTableSizeToDrop !== null
        ? Number(object.maxTableSizeToDrop)
        : undefined;
    message.maxPartitionSizeToDrop =
      object.maxPartitionSizeToDrop !== undefined &&
      object.maxPartitionSizeToDrop !== null
        ? Number(object.maxPartitionSizeToDrop)
        : undefined;
    message.builtinDictionariesReloadInterval =
      object.builtinDictionariesReloadInterval !== undefined &&
      object.builtinDictionariesReloadInterval !== null
        ? Number(object.builtinDictionariesReloadInterval)
        : undefined;
    message.timezone =
      object.timezone !== undefined && object.timezone !== null
        ? String(object.timezone)
        : "";
    message.geobaseUri =
      object.geobaseUri !== undefined && object.geobaseUri !== null
        ? String(object.geobaseUri)
        : "";
    message.queryLogRetentionSize =
      object.queryLogRetentionSize !== undefined &&
      object.queryLogRetentionSize !== null
        ? Number(object.queryLogRetentionSize)
        : undefined;
    message.queryLogRetentionTime =
      object.queryLogRetentionTime !== undefined &&
      object.queryLogRetentionTime !== null
        ? Number(object.queryLogRetentionTime)
        : undefined;
    message.queryThreadLogEnabled =
      object.queryThreadLogEnabled !== undefined &&
      object.queryThreadLogEnabled !== null
        ? Boolean(object.queryThreadLogEnabled)
        : undefined;
    message.queryThreadLogRetentionSize =
      object.queryThreadLogRetentionSize !== undefined &&
      object.queryThreadLogRetentionSize !== null
        ? Number(object.queryThreadLogRetentionSize)
        : undefined;
    message.queryThreadLogRetentionTime =
      object.queryThreadLogRetentionTime !== undefined &&
      object.queryThreadLogRetentionTime !== null
        ? Number(object.queryThreadLogRetentionTime)
        : undefined;
    message.partLogRetentionSize =
      object.partLogRetentionSize !== undefined &&
      object.partLogRetentionSize !== null
        ? Number(object.partLogRetentionSize)
        : undefined;
    message.partLogRetentionTime =
      object.partLogRetentionTime !== undefined &&
      object.partLogRetentionTime !== null
        ? Number(object.partLogRetentionTime)
        : undefined;
    message.metricLogEnabled =
      object.metricLogEnabled !== undefined && object.metricLogEnabled !== null
        ? Boolean(object.metricLogEnabled)
        : undefined;
    message.metricLogRetentionSize =
      object.metricLogRetentionSize !== undefined &&
      object.metricLogRetentionSize !== null
        ? Number(object.metricLogRetentionSize)
        : undefined;
    message.metricLogRetentionTime =
      object.metricLogRetentionTime !== undefined &&
      object.metricLogRetentionTime !== null
        ? Number(object.metricLogRetentionTime)
        : undefined;
    message.traceLogEnabled =
      object.traceLogEnabled !== undefined && object.traceLogEnabled !== null
        ? Boolean(object.traceLogEnabled)
        : undefined;
    message.traceLogRetentionSize =
      object.traceLogRetentionSize !== undefined &&
      object.traceLogRetentionSize !== null
        ? Number(object.traceLogRetentionSize)
        : undefined;
    message.traceLogRetentionTime =
      object.traceLogRetentionTime !== undefined &&
      object.traceLogRetentionTime !== null
        ? Number(object.traceLogRetentionTime)
        : undefined;
    message.textLogEnabled =
      object.textLogEnabled !== undefined && object.textLogEnabled !== null
        ? Boolean(object.textLogEnabled)
        : undefined;
    message.textLogRetentionSize =
      object.textLogRetentionSize !== undefined &&
      object.textLogRetentionSize !== null
        ? Number(object.textLogRetentionSize)
        : undefined;
    message.textLogRetentionTime =
      object.textLogRetentionTime !== undefined &&
      object.textLogRetentionTime !== null
        ? Number(object.textLogRetentionTime)
        : undefined;
    message.textLogLevel =
      object.textLogLevel !== undefined && object.textLogLevel !== null
        ? clickhouseConfig_LogLevelFromJSON(object.textLogLevel)
        : 0;
    message.backgroundPoolSize =
      object.backgroundPoolSize !== undefined &&
      object.backgroundPoolSize !== null
        ? Number(object.backgroundPoolSize)
        : undefined;
    message.backgroundSchedulePoolSize =
      object.backgroundSchedulePoolSize !== undefined &&
      object.backgroundSchedulePoolSize !== null
        ? Number(object.backgroundSchedulePoolSize)
        : undefined;
    return message;
  },

  toJSON(message: ClickhouseConfig): unknown {
    const obj: any = {};
    message.logLevel !== undefined &&
      (obj.logLevel = clickhouseConfig_LogLevelToJSON(message.logLevel));
    message.mergeTree !== undefined &&
      (obj.mergeTree = message.mergeTree
        ? ClickhouseConfig_MergeTree.toJSON(message.mergeTree)
        : undefined);
    if (message.compression) {
      obj.compression = message.compression.map((e) =>
        e ? ClickhouseConfig_Compression.toJSON(e) : undefined
      );
    } else {
      obj.compression = [];
    }
    if (message.dictionaries) {
      obj.dictionaries = message.dictionaries.map((e) =>
        e ? ClickhouseConfig_ExternalDictionary.toJSON(e) : undefined
      );
    } else {
      obj.dictionaries = [];
    }
    if (message.graphiteRollup) {
      obj.graphiteRollup = message.graphiteRollup.map((e) =>
        e ? ClickhouseConfig_GraphiteRollup.toJSON(e) : undefined
      );
    } else {
      obj.graphiteRollup = [];
    }
    message.kafka !== undefined &&
      (obj.kafka = message.kafka
        ? ClickhouseConfig_Kafka.toJSON(message.kafka)
        : undefined);
    if (message.kafkaTopics) {
      obj.kafkaTopics = message.kafkaTopics.map((e) =>
        e ? ClickhouseConfig_KafkaTopic.toJSON(e) : undefined
      );
    } else {
      obj.kafkaTopics = [];
    }
    message.rabbitmq !== undefined &&
      (obj.rabbitmq = message.rabbitmq
        ? ClickhouseConfig_Rabbitmq.toJSON(message.rabbitmq)
        : undefined);
    message.maxConnections !== undefined &&
      (obj.maxConnections = message.maxConnections);
    message.maxConcurrentQueries !== undefined &&
      (obj.maxConcurrentQueries = message.maxConcurrentQueries);
    message.keepAliveTimeout !== undefined &&
      (obj.keepAliveTimeout = message.keepAliveTimeout);
    message.uncompressedCacheSize !== undefined &&
      (obj.uncompressedCacheSize = message.uncompressedCacheSize);
    message.markCacheSize !== undefined &&
      (obj.markCacheSize = message.markCacheSize);
    message.maxTableSizeToDrop !== undefined &&
      (obj.maxTableSizeToDrop = message.maxTableSizeToDrop);
    message.maxPartitionSizeToDrop !== undefined &&
      (obj.maxPartitionSizeToDrop = message.maxPartitionSizeToDrop);
    message.builtinDictionariesReloadInterval !== undefined &&
      (obj.builtinDictionariesReloadInterval =
        message.builtinDictionariesReloadInterval);
    message.timezone !== undefined && (obj.timezone = message.timezone);
    message.geobaseUri !== undefined && (obj.geobaseUri = message.geobaseUri);
    message.queryLogRetentionSize !== undefined &&
      (obj.queryLogRetentionSize = message.queryLogRetentionSize);
    message.queryLogRetentionTime !== undefined &&
      (obj.queryLogRetentionTime = message.queryLogRetentionTime);
    message.queryThreadLogEnabled !== undefined &&
      (obj.queryThreadLogEnabled = message.queryThreadLogEnabled);
    message.queryThreadLogRetentionSize !== undefined &&
      (obj.queryThreadLogRetentionSize = message.queryThreadLogRetentionSize);
    message.queryThreadLogRetentionTime !== undefined &&
      (obj.queryThreadLogRetentionTime = message.queryThreadLogRetentionTime);
    message.partLogRetentionSize !== undefined &&
      (obj.partLogRetentionSize = message.partLogRetentionSize);
    message.partLogRetentionTime !== undefined &&
      (obj.partLogRetentionTime = message.partLogRetentionTime);
    message.metricLogEnabled !== undefined &&
      (obj.metricLogEnabled = message.metricLogEnabled);
    message.metricLogRetentionSize !== undefined &&
      (obj.metricLogRetentionSize = message.metricLogRetentionSize);
    message.metricLogRetentionTime !== undefined &&
      (obj.metricLogRetentionTime = message.metricLogRetentionTime);
    message.traceLogEnabled !== undefined &&
      (obj.traceLogEnabled = message.traceLogEnabled);
    message.traceLogRetentionSize !== undefined &&
      (obj.traceLogRetentionSize = message.traceLogRetentionSize);
    message.traceLogRetentionTime !== undefined &&
      (obj.traceLogRetentionTime = message.traceLogRetentionTime);
    message.textLogEnabled !== undefined &&
      (obj.textLogEnabled = message.textLogEnabled);
    message.textLogRetentionSize !== undefined &&
      (obj.textLogRetentionSize = message.textLogRetentionSize);
    message.textLogRetentionTime !== undefined &&
      (obj.textLogRetentionTime = message.textLogRetentionTime);
    message.textLogLevel !== undefined &&
      (obj.textLogLevel = clickhouseConfig_LogLevelToJSON(
        message.textLogLevel
      ));
    message.backgroundPoolSize !== undefined &&
      (obj.backgroundPoolSize = message.backgroundPoolSize);
    message.backgroundSchedulePoolSize !== undefined &&
      (obj.backgroundSchedulePoolSize = message.backgroundSchedulePoolSize);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClickhouseConfig>, I>>(
    object: I
  ): ClickhouseConfig {
    const message = { ...baseClickhouseConfig } as ClickhouseConfig;
    message.logLevel = object.logLevel ?? 0;
    message.mergeTree =
      object.mergeTree !== undefined && object.mergeTree !== null
        ? ClickhouseConfig_MergeTree.fromPartial(object.mergeTree)
        : undefined;
    message.compression =
      object.compression?.map((e) =>
        ClickhouseConfig_Compression.fromPartial(e)
      ) || [];
    message.dictionaries =
      object.dictionaries?.map((e) =>
        ClickhouseConfig_ExternalDictionary.fromPartial(e)
      ) || [];
    message.graphiteRollup =
      object.graphiteRollup?.map((e) =>
        ClickhouseConfig_GraphiteRollup.fromPartial(e)
      ) || [];
    message.kafka =
      object.kafka !== undefined && object.kafka !== null
        ? ClickhouseConfig_Kafka.fromPartial(object.kafka)
        : undefined;
    message.kafkaTopics =
      object.kafkaTopics?.map((e) =>
        ClickhouseConfig_KafkaTopic.fromPartial(e)
      ) || [];
    message.rabbitmq =
      object.rabbitmq !== undefined && object.rabbitmq !== null
        ? ClickhouseConfig_Rabbitmq.fromPartial(object.rabbitmq)
        : undefined;
    message.maxConnections = object.maxConnections ?? undefined;
    message.maxConcurrentQueries = object.maxConcurrentQueries ?? undefined;
    message.keepAliveTimeout = object.keepAliveTimeout ?? undefined;
    message.uncompressedCacheSize = object.uncompressedCacheSize ?? undefined;
    message.markCacheSize = object.markCacheSize ?? undefined;
    message.maxTableSizeToDrop = object.maxTableSizeToDrop ?? undefined;
    message.maxPartitionSizeToDrop = object.maxPartitionSizeToDrop ?? undefined;
    message.builtinDictionariesReloadInterval =
      object.builtinDictionariesReloadInterval ?? undefined;
    message.timezone = object.timezone ?? "";
    message.geobaseUri = object.geobaseUri ?? "";
    message.queryLogRetentionSize = object.queryLogRetentionSize ?? undefined;
    message.queryLogRetentionTime = object.queryLogRetentionTime ?? undefined;
    message.queryThreadLogEnabled = object.queryThreadLogEnabled ?? undefined;
    message.queryThreadLogRetentionSize =
      object.queryThreadLogRetentionSize ?? undefined;
    message.queryThreadLogRetentionTime =
      object.queryThreadLogRetentionTime ?? undefined;
    message.partLogRetentionSize = object.partLogRetentionSize ?? undefined;
    message.partLogRetentionTime = object.partLogRetentionTime ?? undefined;
    message.metricLogEnabled = object.metricLogEnabled ?? undefined;
    message.metricLogRetentionSize = object.metricLogRetentionSize ?? undefined;
    message.metricLogRetentionTime = object.metricLogRetentionTime ?? undefined;
    message.traceLogEnabled = object.traceLogEnabled ?? undefined;
    message.traceLogRetentionSize = object.traceLogRetentionSize ?? undefined;
    message.traceLogRetentionTime = object.traceLogRetentionTime ?? undefined;
    message.textLogEnabled = object.textLogEnabled ?? undefined;
    message.textLogRetentionSize = object.textLogRetentionSize ?? undefined;
    message.textLogRetentionTime = object.textLogRetentionTime ?? undefined;
    message.textLogLevel = object.textLogLevel ?? 0;
    message.backgroundPoolSize = object.backgroundPoolSize ?? undefined;
    message.backgroundSchedulePoolSize =
      object.backgroundSchedulePoolSize ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ClickhouseConfig.$type, ClickhouseConfig);

const baseClickhouseConfig_MergeTree: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.MergeTree",
};

export const ClickhouseConfig_MergeTree = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.MergeTree" as const,

  encode(
    message: ClickhouseConfig_MergeTree,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.replicatedDeduplicationWindow !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.replicatedDeduplicationWindow!,
        },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.replicatedDeduplicationWindowSeconds !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.replicatedDeduplicationWindowSeconds!,
        },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.partsToDelayInsert !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.partsToDelayInsert!,
        },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.partsToThrowInsert !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.partsToThrowInsert!,
        },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.maxReplicatedMergesInQueue !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxReplicatedMergesInQueue!,
        },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge!,
        },
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.maxBytesToMergeAtMinSpaceInPool !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxBytesToMergeAtMinSpaceInPool!,
        },
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.maxBytesToMergeAtMaxSpaceInPool !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxBytesToMergeAtMaxSpaceInPool!,
        },
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClickhouseConfig_MergeTree {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClickhouseConfig_MergeTree,
    } as ClickhouseConfig_MergeTree;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.replicatedDeduplicationWindow = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 2:
          message.replicatedDeduplicationWindowSeconds = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.partsToDelayInsert = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 4:
          message.partsToThrowInsert = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 5:
          message.maxReplicatedMergesInQueue = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 6:
          message.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge =
            Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 7:
          message.maxBytesToMergeAtMinSpaceInPool = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 8:
          message.maxBytesToMergeAtMaxSpaceInPool = Int64Value.decode(
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

  fromJSON(object: any): ClickhouseConfig_MergeTree {
    const message = {
      ...baseClickhouseConfig_MergeTree,
    } as ClickhouseConfig_MergeTree;
    message.replicatedDeduplicationWindow =
      object.replicatedDeduplicationWindow !== undefined &&
      object.replicatedDeduplicationWindow !== null
        ? Number(object.replicatedDeduplicationWindow)
        : undefined;
    message.replicatedDeduplicationWindowSeconds =
      object.replicatedDeduplicationWindowSeconds !== undefined &&
      object.replicatedDeduplicationWindowSeconds !== null
        ? Number(object.replicatedDeduplicationWindowSeconds)
        : undefined;
    message.partsToDelayInsert =
      object.partsToDelayInsert !== undefined &&
      object.partsToDelayInsert !== null
        ? Number(object.partsToDelayInsert)
        : undefined;
    message.partsToThrowInsert =
      object.partsToThrowInsert !== undefined &&
      object.partsToThrowInsert !== null
        ? Number(object.partsToThrowInsert)
        : undefined;
    message.maxReplicatedMergesInQueue =
      object.maxReplicatedMergesInQueue !== undefined &&
      object.maxReplicatedMergesInQueue !== null
        ? Number(object.maxReplicatedMergesInQueue)
        : undefined;
    message.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge =
      object.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge !== undefined &&
      object.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge !== null
        ? Number(object.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge)
        : undefined;
    message.maxBytesToMergeAtMinSpaceInPool =
      object.maxBytesToMergeAtMinSpaceInPool !== undefined &&
      object.maxBytesToMergeAtMinSpaceInPool !== null
        ? Number(object.maxBytesToMergeAtMinSpaceInPool)
        : undefined;
    message.maxBytesToMergeAtMaxSpaceInPool =
      object.maxBytesToMergeAtMaxSpaceInPool !== undefined &&
      object.maxBytesToMergeAtMaxSpaceInPool !== null
        ? Number(object.maxBytesToMergeAtMaxSpaceInPool)
        : undefined;
    return message;
  },

  toJSON(message: ClickhouseConfig_MergeTree): unknown {
    const obj: any = {};
    message.replicatedDeduplicationWindow !== undefined &&
      (obj.replicatedDeduplicationWindow =
        message.replicatedDeduplicationWindow);
    message.replicatedDeduplicationWindowSeconds !== undefined &&
      (obj.replicatedDeduplicationWindowSeconds =
        message.replicatedDeduplicationWindowSeconds);
    message.partsToDelayInsert !== undefined &&
      (obj.partsToDelayInsert = message.partsToDelayInsert);
    message.partsToThrowInsert !== undefined &&
      (obj.partsToThrowInsert = message.partsToThrowInsert);
    message.maxReplicatedMergesInQueue !== undefined &&
      (obj.maxReplicatedMergesInQueue = message.maxReplicatedMergesInQueue);
    message.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge !== undefined &&
      (obj.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge =
        message.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge);
    message.maxBytesToMergeAtMinSpaceInPool !== undefined &&
      (obj.maxBytesToMergeAtMinSpaceInPool =
        message.maxBytesToMergeAtMinSpaceInPool);
    message.maxBytesToMergeAtMaxSpaceInPool !== undefined &&
      (obj.maxBytesToMergeAtMaxSpaceInPool =
        message.maxBytesToMergeAtMaxSpaceInPool);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClickhouseConfig_MergeTree>, I>>(
    object: I
  ): ClickhouseConfig_MergeTree {
    const message = {
      ...baseClickhouseConfig_MergeTree,
    } as ClickhouseConfig_MergeTree;
    message.replicatedDeduplicationWindow =
      object.replicatedDeduplicationWindow ?? undefined;
    message.replicatedDeduplicationWindowSeconds =
      object.replicatedDeduplicationWindowSeconds ?? undefined;
    message.partsToDelayInsert = object.partsToDelayInsert ?? undefined;
    message.partsToThrowInsert = object.partsToThrowInsert ?? undefined;
    message.maxReplicatedMergesInQueue =
      object.maxReplicatedMergesInQueue ?? undefined;
    message.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge =
      object.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge ?? undefined;
    message.maxBytesToMergeAtMinSpaceInPool =
      object.maxBytesToMergeAtMinSpaceInPool ?? undefined;
    message.maxBytesToMergeAtMaxSpaceInPool =
      object.maxBytesToMergeAtMaxSpaceInPool ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_MergeTree.$type,
  ClickhouseConfig_MergeTree
);

const baseClickhouseConfig_Kafka: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Kafka",
  securityProtocol: 0,
  saslMechanism: 0,
  saslUsername: "",
  saslPassword: "",
};

export const ClickhouseConfig_Kafka = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Kafka" as const,

  encode(
    message: ClickhouseConfig_Kafka,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.securityProtocol !== 0) {
      writer.uint32(8).int32(message.securityProtocol);
    }
    if (message.saslMechanism !== 0) {
      writer.uint32(16).int32(message.saslMechanism);
    }
    if (message.saslUsername !== "") {
      writer.uint32(26).string(message.saslUsername);
    }
    if (message.saslPassword !== "") {
      writer.uint32(34).string(message.saslPassword);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClickhouseConfig_Kafka {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClickhouseConfig_Kafka } as ClickhouseConfig_Kafka;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.securityProtocol = reader.int32() as any;
          break;
        case 2:
          message.saslMechanism = reader.int32() as any;
          break;
        case 3:
          message.saslUsername = reader.string();
          break;
        case 4:
          message.saslPassword = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_Kafka {
    const message = { ...baseClickhouseConfig_Kafka } as ClickhouseConfig_Kafka;
    message.securityProtocol =
      object.securityProtocol !== undefined && object.securityProtocol !== null
        ? clickhouseConfig_Kafka_SecurityProtocolFromJSON(
            object.securityProtocol
          )
        : 0;
    message.saslMechanism =
      object.saslMechanism !== undefined && object.saslMechanism !== null
        ? clickhouseConfig_Kafka_SaslMechanismFromJSON(object.saslMechanism)
        : 0;
    message.saslUsername =
      object.saslUsername !== undefined && object.saslUsername !== null
        ? String(object.saslUsername)
        : "";
    message.saslPassword =
      object.saslPassword !== undefined && object.saslPassword !== null
        ? String(object.saslPassword)
        : "";
    return message;
  },

  toJSON(message: ClickhouseConfig_Kafka): unknown {
    const obj: any = {};
    message.securityProtocol !== undefined &&
      (obj.securityProtocol = clickhouseConfig_Kafka_SecurityProtocolToJSON(
        message.securityProtocol
      ));
    message.saslMechanism !== undefined &&
      (obj.saslMechanism = clickhouseConfig_Kafka_SaslMechanismToJSON(
        message.saslMechanism
      ));
    message.saslUsername !== undefined &&
      (obj.saslUsername = message.saslUsername);
    message.saslPassword !== undefined &&
      (obj.saslPassword = message.saslPassword);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClickhouseConfig_Kafka>, I>>(
    object: I
  ): ClickhouseConfig_Kafka {
    const message = { ...baseClickhouseConfig_Kafka } as ClickhouseConfig_Kafka;
    message.securityProtocol = object.securityProtocol ?? 0;
    message.saslMechanism = object.saslMechanism ?? 0;
    message.saslUsername = object.saslUsername ?? "";
    message.saslPassword = object.saslPassword ?? "";
    return message;
  },
};

messageTypeRegistry.set(ClickhouseConfig_Kafka.$type, ClickhouseConfig_Kafka);

const baseClickhouseConfig_KafkaTopic: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.KafkaTopic",
  name: "",
};

export const ClickhouseConfig_KafkaTopic = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.KafkaTopic" as const,

  encode(
    message: ClickhouseConfig_KafkaTopic,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.settings !== undefined) {
      ClickhouseConfig_Kafka.encode(
        message.settings,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClickhouseConfig_KafkaTopic {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClickhouseConfig_KafkaTopic,
    } as ClickhouseConfig_KafkaTopic;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.settings = ClickhouseConfig_Kafka.decode(
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

  fromJSON(object: any): ClickhouseConfig_KafkaTopic {
    const message = {
      ...baseClickhouseConfig_KafkaTopic,
    } as ClickhouseConfig_KafkaTopic;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.settings =
      object.settings !== undefined && object.settings !== null
        ? ClickhouseConfig_Kafka.fromJSON(object.settings)
        : undefined;
    return message;
  },

  toJSON(message: ClickhouseConfig_KafkaTopic): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.settings !== undefined &&
      (obj.settings = message.settings
        ? ClickhouseConfig_Kafka.toJSON(message.settings)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClickhouseConfig_KafkaTopic>, I>>(
    object: I
  ): ClickhouseConfig_KafkaTopic {
    const message = {
      ...baseClickhouseConfig_KafkaTopic,
    } as ClickhouseConfig_KafkaTopic;
    message.name = object.name ?? "";
    message.settings =
      object.settings !== undefined && object.settings !== null
        ? ClickhouseConfig_Kafka.fromPartial(object.settings)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_KafkaTopic.$type,
  ClickhouseConfig_KafkaTopic
);

const baseClickhouseConfig_Rabbitmq: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Rabbitmq",
  username: "",
  password: "",
};

export const ClickhouseConfig_Rabbitmq = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Rabbitmq" as const,

  encode(
    message: ClickhouseConfig_Rabbitmq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClickhouseConfig_Rabbitmq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClickhouseConfig_Rabbitmq,
    } as ClickhouseConfig_Rabbitmq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.username = reader.string();
          break;
        case 2:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_Rabbitmq {
    const message = {
      ...baseClickhouseConfig_Rabbitmq,
    } as ClickhouseConfig_Rabbitmq;
    message.username =
      object.username !== undefined && object.username !== null
        ? String(object.username)
        : "";
    message.password =
      object.password !== undefined && object.password !== null
        ? String(object.password)
        : "";
    return message;
  },

  toJSON(message: ClickhouseConfig_Rabbitmq): unknown {
    const obj: any = {};
    message.username !== undefined && (obj.username = message.username);
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClickhouseConfig_Rabbitmq>, I>>(
    object: I
  ): ClickhouseConfig_Rabbitmq {
    const message = {
      ...baseClickhouseConfig_Rabbitmq,
    } as ClickhouseConfig_Rabbitmq;
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_Rabbitmq.$type,
  ClickhouseConfig_Rabbitmq
);

const baseClickhouseConfig_Compression: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Compression",
  method: 0,
  minPartSize: 0,
  minPartSizeRatio: 0,
};

export const ClickhouseConfig_Compression = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Compression" as const,

  encode(
    message: ClickhouseConfig_Compression,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.method !== 0) {
      writer.uint32(8).int32(message.method);
    }
    if (message.minPartSize !== 0) {
      writer.uint32(16).int64(message.minPartSize);
    }
    if (message.minPartSizeRatio !== 0) {
      writer.uint32(25).double(message.minPartSizeRatio);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClickhouseConfig_Compression {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClickhouseConfig_Compression,
    } as ClickhouseConfig_Compression;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.method = reader.int32() as any;
          break;
        case 2:
          message.minPartSize = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.minPartSizeRatio = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_Compression {
    const message = {
      ...baseClickhouseConfig_Compression,
    } as ClickhouseConfig_Compression;
    message.method =
      object.method !== undefined && object.method !== null
        ? clickhouseConfig_Compression_MethodFromJSON(object.method)
        : 0;
    message.minPartSize =
      object.minPartSize !== undefined && object.minPartSize !== null
        ? Number(object.minPartSize)
        : 0;
    message.minPartSizeRatio =
      object.minPartSizeRatio !== undefined && object.minPartSizeRatio !== null
        ? Number(object.minPartSizeRatio)
        : 0;
    return message;
  },

  toJSON(message: ClickhouseConfig_Compression): unknown {
    const obj: any = {};
    message.method !== undefined &&
      (obj.method = clickhouseConfig_Compression_MethodToJSON(message.method));
    message.minPartSize !== undefined &&
      (obj.minPartSize = Math.round(message.minPartSize));
    message.minPartSizeRatio !== undefined &&
      (obj.minPartSizeRatio = message.minPartSizeRatio);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClickhouseConfig_Compression>, I>>(
    object: I
  ): ClickhouseConfig_Compression {
    const message = {
      ...baseClickhouseConfig_Compression,
    } as ClickhouseConfig_Compression;
    message.method = object.method ?? 0;
    message.minPartSize = object.minPartSize ?? 0;
    message.minPartSizeRatio = object.minPartSizeRatio ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_Compression.$type,
  ClickhouseConfig_Compression
);

const baseClickhouseConfig_ExternalDictionary: object = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary",
  name: "",
};

export const ClickhouseConfig_ExternalDictionary = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary" as const,

  encode(
    message: ClickhouseConfig_ExternalDictionary,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.structure !== undefined) {
      ClickhouseConfig_ExternalDictionary_Structure.encode(
        message.structure,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.layout !== undefined) {
      ClickhouseConfig_ExternalDictionary_Layout.encode(
        message.layout,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.fixedLifetime !== undefined) {
      writer.uint32(32).int64(message.fixedLifetime);
    }
    if (message.lifetimeRange !== undefined) {
      ClickhouseConfig_ExternalDictionary_Range.encode(
        message.lifetimeRange,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.httpSource !== undefined) {
      ClickhouseConfig_ExternalDictionary_HttpSource.encode(
        message.httpSource,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.mysqlSource !== undefined) {
      ClickhouseConfig_ExternalDictionary_MysqlSource.encode(
        message.mysqlSource,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.clickhouseSource !== undefined) {
      ClickhouseConfig_ExternalDictionary_ClickhouseSource.encode(
        message.clickhouseSource,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.mongodbSource !== undefined) {
      ClickhouseConfig_ExternalDictionary_MongodbSource.encode(
        message.mongodbSource,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.postgresqlSource !== undefined) {
      ClickhouseConfig_ExternalDictionary_PostgresqlSource.encode(
        message.postgresqlSource,
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClickhouseConfig_ExternalDictionary {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClickhouseConfig_ExternalDictionary,
    } as ClickhouseConfig_ExternalDictionary;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.structure =
            ClickhouseConfig_ExternalDictionary_Structure.decode(
              reader,
              reader.uint32()
            );
          break;
        case 3:
          message.layout = ClickhouseConfig_ExternalDictionary_Layout.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.fixedLifetime = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.lifetimeRange =
            ClickhouseConfig_ExternalDictionary_Range.decode(
              reader,
              reader.uint32()
            );
          break;
        case 6:
          message.httpSource =
            ClickhouseConfig_ExternalDictionary_HttpSource.decode(
              reader,
              reader.uint32()
            );
          break;
        case 7:
          message.mysqlSource =
            ClickhouseConfig_ExternalDictionary_MysqlSource.decode(
              reader,
              reader.uint32()
            );
          break;
        case 8:
          message.clickhouseSource =
            ClickhouseConfig_ExternalDictionary_ClickhouseSource.decode(
              reader,
              reader.uint32()
            );
          break;
        case 9:
          message.mongodbSource =
            ClickhouseConfig_ExternalDictionary_MongodbSource.decode(
              reader,
              reader.uint32()
            );
          break;
        case 10:
          message.postgresqlSource =
            ClickhouseConfig_ExternalDictionary_PostgresqlSource.decode(
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

  fromJSON(object: any): ClickhouseConfig_ExternalDictionary {
    const message = {
      ...baseClickhouseConfig_ExternalDictionary,
    } as ClickhouseConfig_ExternalDictionary;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.structure =
      object.structure !== undefined && object.structure !== null
        ? ClickhouseConfig_ExternalDictionary_Structure.fromJSON(
            object.structure
          )
        : undefined;
    message.layout =
      object.layout !== undefined && object.layout !== null
        ? ClickhouseConfig_ExternalDictionary_Layout.fromJSON(object.layout)
        : undefined;
    message.fixedLifetime =
      object.fixedLifetime !== undefined && object.fixedLifetime !== null
        ? Number(object.fixedLifetime)
        : undefined;
    message.lifetimeRange =
      object.lifetimeRange !== undefined && object.lifetimeRange !== null
        ? ClickhouseConfig_ExternalDictionary_Range.fromJSON(
            object.lifetimeRange
          )
        : undefined;
    message.httpSource =
      object.httpSource !== undefined && object.httpSource !== null
        ? ClickhouseConfig_ExternalDictionary_HttpSource.fromJSON(
            object.httpSource
          )
        : undefined;
    message.mysqlSource =
      object.mysqlSource !== undefined && object.mysqlSource !== null
        ? ClickhouseConfig_ExternalDictionary_MysqlSource.fromJSON(
            object.mysqlSource
          )
        : undefined;
    message.clickhouseSource =
      object.clickhouseSource !== undefined && object.clickhouseSource !== null
        ? ClickhouseConfig_ExternalDictionary_ClickhouseSource.fromJSON(
            object.clickhouseSource
          )
        : undefined;
    message.mongodbSource =
      object.mongodbSource !== undefined && object.mongodbSource !== null
        ? ClickhouseConfig_ExternalDictionary_MongodbSource.fromJSON(
            object.mongodbSource
          )
        : undefined;
    message.postgresqlSource =
      object.postgresqlSource !== undefined && object.postgresqlSource !== null
        ? ClickhouseConfig_ExternalDictionary_PostgresqlSource.fromJSON(
            object.postgresqlSource
          )
        : undefined;
    return message;
  },

  toJSON(message: ClickhouseConfig_ExternalDictionary): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.structure !== undefined &&
      (obj.structure = message.structure
        ? ClickhouseConfig_ExternalDictionary_Structure.toJSON(
            message.structure
          )
        : undefined);
    message.layout !== undefined &&
      (obj.layout = message.layout
        ? ClickhouseConfig_ExternalDictionary_Layout.toJSON(message.layout)
        : undefined);
    message.fixedLifetime !== undefined &&
      (obj.fixedLifetime = Math.round(message.fixedLifetime));
    message.lifetimeRange !== undefined &&
      (obj.lifetimeRange = message.lifetimeRange
        ? ClickhouseConfig_ExternalDictionary_Range.toJSON(
            message.lifetimeRange
          )
        : undefined);
    message.httpSource !== undefined &&
      (obj.httpSource = message.httpSource
        ? ClickhouseConfig_ExternalDictionary_HttpSource.toJSON(
            message.httpSource
          )
        : undefined);
    message.mysqlSource !== undefined &&
      (obj.mysqlSource = message.mysqlSource
        ? ClickhouseConfig_ExternalDictionary_MysqlSource.toJSON(
            message.mysqlSource
          )
        : undefined);
    message.clickhouseSource !== undefined &&
      (obj.clickhouseSource = message.clickhouseSource
        ? ClickhouseConfig_ExternalDictionary_ClickhouseSource.toJSON(
            message.clickhouseSource
          )
        : undefined);
    message.mongodbSource !== undefined &&
      (obj.mongodbSource = message.mongodbSource
        ? ClickhouseConfig_ExternalDictionary_MongodbSource.toJSON(
            message.mongodbSource
          )
        : undefined);
    message.postgresqlSource !== undefined &&
      (obj.postgresqlSource = message.postgresqlSource
        ? ClickhouseConfig_ExternalDictionary_PostgresqlSource.toJSON(
            message.postgresqlSource
          )
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ClickhouseConfig_ExternalDictionary>, I>
  >(object: I): ClickhouseConfig_ExternalDictionary {
    const message = {
      ...baseClickhouseConfig_ExternalDictionary,
    } as ClickhouseConfig_ExternalDictionary;
    message.name = object.name ?? "";
    message.structure =
      object.structure !== undefined && object.structure !== null
        ? ClickhouseConfig_ExternalDictionary_Structure.fromPartial(
            object.structure
          )
        : undefined;
    message.layout =
      object.layout !== undefined && object.layout !== null
        ? ClickhouseConfig_ExternalDictionary_Layout.fromPartial(object.layout)
        : undefined;
    message.fixedLifetime = object.fixedLifetime ?? undefined;
    message.lifetimeRange =
      object.lifetimeRange !== undefined && object.lifetimeRange !== null
        ? ClickhouseConfig_ExternalDictionary_Range.fromPartial(
            object.lifetimeRange
          )
        : undefined;
    message.httpSource =
      object.httpSource !== undefined && object.httpSource !== null
        ? ClickhouseConfig_ExternalDictionary_HttpSource.fromPartial(
            object.httpSource
          )
        : undefined;
    message.mysqlSource =
      object.mysqlSource !== undefined && object.mysqlSource !== null
        ? ClickhouseConfig_ExternalDictionary_MysqlSource.fromPartial(
            object.mysqlSource
          )
        : undefined;
    message.clickhouseSource =
      object.clickhouseSource !== undefined && object.clickhouseSource !== null
        ? ClickhouseConfig_ExternalDictionary_ClickhouseSource.fromPartial(
            object.clickhouseSource
          )
        : undefined;
    message.mongodbSource =
      object.mongodbSource !== undefined && object.mongodbSource !== null
        ? ClickhouseConfig_ExternalDictionary_MongodbSource.fromPartial(
            object.mongodbSource
          )
        : undefined;
    message.postgresqlSource =
      object.postgresqlSource !== undefined && object.postgresqlSource !== null
        ? ClickhouseConfig_ExternalDictionary_PostgresqlSource.fromPartial(
            object.postgresqlSource
          )
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_ExternalDictionary.$type,
  ClickhouseConfig_ExternalDictionary
);

const baseClickhouseConfig_ExternalDictionary_HttpSource: object = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.HttpSource",
  url: "",
  format: "",
};

export const ClickhouseConfig_ExternalDictionary_HttpSource = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.HttpSource" as const,

  encode(
    message: ClickhouseConfig_ExternalDictionary_HttpSource,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.format !== "") {
      writer.uint32(18).string(message.format);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClickhouseConfig_ExternalDictionary_HttpSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_HttpSource,
    } as ClickhouseConfig_ExternalDictionary_HttpSource;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        case 2:
          message.format = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_ExternalDictionary_HttpSource {
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_HttpSource,
    } as ClickhouseConfig_ExternalDictionary_HttpSource;
    message.url =
      object.url !== undefined && object.url !== null ? String(object.url) : "";
    message.format =
      object.format !== undefined && object.format !== null
        ? String(object.format)
        : "";
    return message;
  },

  toJSON(message: ClickhouseConfig_ExternalDictionary_HttpSource): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.format !== undefined && (obj.format = message.format);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ClickhouseConfig_ExternalDictionary_HttpSource>,
      I
    >
  >(object: I): ClickhouseConfig_ExternalDictionary_HttpSource {
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_HttpSource,
    } as ClickhouseConfig_ExternalDictionary_HttpSource;
    message.url = object.url ?? "";
    message.format = object.format ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_ExternalDictionary_HttpSource.$type,
  ClickhouseConfig_ExternalDictionary_HttpSource
);

const baseClickhouseConfig_ExternalDictionary_MysqlSource: object = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MysqlSource",
  db: "",
  table: "",
  port: 0,
  user: "",
  password: "",
  where: "",
  invalidateQuery: "",
};

export const ClickhouseConfig_ExternalDictionary_MysqlSource = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MysqlSource" as const,

  encode(
    message: ClickhouseConfig_ExternalDictionary_MysqlSource,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.db !== "") {
      writer.uint32(10).string(message.db);
    }
    if (message.table !== "") {
      writer.uint32(18).string(message.table);
    }
    if (message.port !== 0) {
      writer.uint32(24).int64(message.port);
    }
    if (message.user !== "") {
      writer.uint32(34).string(message.user);
    }
    if (message.password !== "") {
      writer.uint32(42).string(message.password);
    }
    for (const v of message.replicas) {
      ClickhouseConfig_ExternalDictionary_MysqlSource_Replica.encode(
        v!,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.where !== "") {
      writer.uint32(58).string(message.where);
    }
    if (message.invalidateQuery !== "") {
      writer.uint32(66).string(message.invalidateQuery);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClickhouseConfig_ExternalDictionary_MysqlSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_MysqlSource,
    } as ClickhouseConfig_ExternalDictionary_MysqlSource;
    message.replicas = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.db = reader.string();
          break;
        case 2:
          message.table = reader.string();
          break;
        case 3:
          message.port = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.user = reader.string();
          break;
        case 5:
          message.password = reader.string();
          break;
        case 6:
          message.replicas.push(
            ClickhouseConfig_ExternalDictionary_MysqlSource_Replica.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        case 7:
          message.where = reader.string();
          break;
        case 8:
          message.invalidateQuery = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_ExternalDictionary_MysqlSource {
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_MysqlSource,
    } as ClickhouseConfig_ExternalDictionary_MysqlSource;
    message.db =
      object.db !== undefined && object.db !== null ? String(object.db) : "";
    message.table =
      object.table !== undefined && object.table !== null
        ? String(object.table)
        : "";
    message.port =
      object.port !== undefined && object.port !== null
        ? Number(object.port)
        : 0;
    message.user =
      object.user !== undefined && object.user !== null
        ? String(object.user)
        : "";
    message.password =
      object.password !== undefined && object.password !== null
        ? String(object.password)
        : "";
    message.replicas = (object.replicas ?? []).map((e: any) =>
      ClickhouseConfig_ExternalDictionary_MysqlSource_Replica.fromJSON(e)
    );
    message.where =
      object.where !== undefined && object.where !== null
        ? String(object.where)
        : "";
    message.invalidateQuery =
      object.invalidateQuery !== undefined && object.invalidateQuery !== null
        ? String(object.invalidateQuery)
        : "";
    return message;
  },

  toJSON(message: ClickhouseConfig_ExternalDictionary_MysqlSource): unknown {
    const obj: any = {};
    message.db !== undefined && (obj.db = message.db);
    message.table !== undefined && (obj.table = message.table);
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.user !== undefined && (obj.user = message.user);
    message.password !== undefined && (obj.password = message.password);
    if (message.replicas) {
      obj.replicas = message.replicas.map((e) =>
        e
          ? ClickhouseConfig_ExternalDictionary_MysqlSource_Replica.toJSON(e)
          : undefined
      );
    } else {
      obj.replicas = [];
    }
    message.where !== undefined && (obj.where = message.where);
    message.invalidateQuery !== undefined &&
      (obj.invalidateQuery = message.invalidateQuery);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ClickhouseConfig_ExternalDictionary_MysqlSource>,
      I
    >
  >(object: I): ClickhouseConfig_ExternalDictionary_MysqlSource {
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_MysqlSource,
    } as ClickhouseConfig_ExternalDictionary_MysqlSource;
    message.db = object.db ?? "";
    message.table = object.table ?? "";
    message.port = object.port ?? 0;
    message.user = object.user ?? "";
    message.password = object.password ?? "";
    message.replicas =
      object.replicas?.map((e) =>
        ClickhouseConfig_ExternalDictionary_MysqlSource_Replica.fromPartial(e)
      ) || [];
    message.where = object.where ?? "";
    message.invalidateQuery = object.invalidateQuery ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_ExternalDictionary_MysqlSource.$type,
  ClickhouseConfig_ExternalDictionary_MysqlSource
);

const baseClickhouseConfig_ExternalDictionary_MysqlSource_Replica: object = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MysqlSource.Replica",
  host: "",
  priority: 0,
  port: 0,
  user: "",
  password: "",
};

export const ClickhouseConfig_ExternalDictionary_MysqlSource_Replica = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MysqlSource.Replica" as const,

  encode(
    message: ClickhouseConfig_ExternalDictionary_MysqlSource_Replica,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.host !== "") {
      writer.uint32(10).string(message.host);
    }
    if (message.priority !== 0) {
      writer.uint32(16).int64(message.priority);
    }
    if (message.port !== 0) {
      writer.uint32(24).int64(message.port);
    }
    if (message.user !== "") {
      writer.uint32(34).string(message.user);
    }
    if (message.password !== "") {
      writer.uint32(42).string(message.password);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClickhouseConfig_ExternalDictionary_MysqlSource_Replica {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_MysqlSource_Replica,
    } as ClickhouseConfig_ExternalDictionary_MysqlSource_Replica;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.host = reader.string();
          break;
        case 2:
          message.priority = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.port = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.user = reader.string();
          break;
        case 5:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(
    object: any
  ): ClickhouseConfig_ExternalDictionary_MysqlSource_Replica {
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_MysqlSource_Replica,
    } as ClickhouseConfig_ExternalDictionary_MysqlSource_Replica;
    message.host =
      object.host !== undefined && object.host !== null
        ? String(object.host)
        : "";
    message.priority =
      object.priority !== undefined && object.priority !== null
        ? Number(object.priority)
        : 0;
    message.port =
      object.port !== undefined && object.port !== null
        ? Number(object.port)
        : 0;
    message.user =
      object.user !== undefined && object.user !== null
        ? String(object.user)
        : "";
    message.password =
      object.password !== undefined && object.password !== null
        ? String(object.password)
        : "";
    return message;
  },

  toJSON(
    message: ClickhouseConfig_ExternalDictionary_MysqlSource_Replica
  ): unknown {
    const obj: any = {};
    message.host !== undefined && (obj.host = message.host);
    message.priority !== undefined &&
      (obj.priority = Math.round(message.priority));
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.user !== undefined && (obj.user = message.user);
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ClickhouseConfig_ExternalDictionary_MysqlSource_Replica>,
      I
    >
  >(object: I): ClickhouseConfig_ExternalDictionary_MysqlSource_Replica {
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_MysqlSource_Replica,
    } as ClickhouseConfig_ExternalDictionary_MysqlSource_Replica;
    message.host = object.host ?? "";
    message.priority = object.priority ?? 0;
    message.port = object.port ?? 0;
    message.user = object.user ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_ExternalDictionary_MysqlSource_Replica.$type,
  ClickhouseConfig_ExternalDictionary_MysqlSource_Replica
);

const baseClickhouseConfig_ExternalDictionary_ClickhouseSource: object = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.ClickhouseSource",
  db: "",
  table: "",
  host: "",
  port: 0,
  user: "",
  password: "",
  where: "",
};

export const ClickhouseConfig_ExternalDictionary_ClickhouseSource = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.ClickhouseSource" as const,

  encode(
    message: ClickhouseConfig_ExternalDictionary_ClickhouseSource,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.db !== "") {
      writer.uint32(10).string(message.db);
    }
    if (message.table !== "") {
      writer.uint32(18).string(message.table);
    }
    if (message.host !== "") {
      writer.uint32(26).string(message.host);
    }
    if (message.port !== 0) {
      writer.uint32(32).int64(message.port);
    }
    if (message.user !== "") {
      writer.uint32(42).string(message.user);
    }
    if (message.password !== "") {
      writer.uint32(50).string(message.password);
    }
    if (message.where !== "") {
      writer.uint32(58).string(message.where);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClickhouseConfig_ExternalDictionary_ClickhouseSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_ClickhouseSource,
    } as ClickhouseConfig_ExternalDictionary_ClickhouseSource;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.db = reader.string();
          break;
        case 2:
          message.table = reader.string();
          break;
        case 3:
          message.host = reader.string();
          break;
        case 4:
          message.port = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.user = reader.string();
          break;
        case 6:
          message.password = reader.string();
          break;
        case 7:
          message.where = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_ExternalDictionary_ClickhouseSource {
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_ClickhouseSource,
    } as ClickhouseConfig_ExternalDictionary_ClickhouseSource;
    message.db =
      object.db !== undefined && object.db !== null ? String(object.db) : "";
    message.table =
      object.table !== undefined && object.table !== null
        ? String(object.table)
        : "";
    message.host =
      object.host !== undefined && object.host !== null
        ? String(object.host)
        : "";
    message.port =
      object.port !== undefined && object.port !== null
        ? Number(object.port)
        : 0;
    message.user =
      object.user !== undefined && object.user !== null
        ? String(object.user)
        : "";
    message.password =
      object.password !== undefined && object.password !== null
        ? String(object.password)
        : "";
    message.where =
      object.where !== undefined && object.where !== null
        ? String(object.where)
        : "";
    return message;
  },

  toJSON(
    message: ClickhouseConfig_ExternalDictionary_ClickhouseSource
  ): unknown {
    const obj: any = {};
    message.db !== undefined && (obj.db = message.db);
    message.table !== undefined && (obj.table = message.table);
    message.host !== undefined && (obj.host = message.host);
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.user !== undefined && (obj.user = message.user);
    message.password !== undefined && (obj.password = message.password);
    message.where !== undefined && (obj.where = message.where);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ClickhouseConfig_ExternalDictionary_ClickhouseSource>,
      I
    >
  >(object: I): ClickhouseConfig_ExternalDictionary_ClickhouseSource {
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_ClickhouseSource,
    } as ClickhouseConfig_ExternalDictionary_ClickhouseSource;
    message.db = object.db ?? "";
    message.table = object.table ?? "";
    message.host = object.host ?? "";
    message.port = object.port ?? 0;
    message.user = object.user ?? "";
    message.password = object.password ?? "";
    message.where = object.where ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_ExternalDictionary_ClickhouseSource.$type,
  ClickhouseConfig_ExternalDictionary_ClickhouseSource
);

const baseClickhouseConfig_ExternalDictionary_MongodbSource: object = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MongodbSource",
  db: "",
  collection: "",
  host: "",
  port: 0,
  user: "",
  password: "",
};

export const ClickhouseConfig_ExternalDictionary_MongodbSource = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MongodbSource" as const,

  encode(
    message: ClickhouseConfig_ExternalDictionary_MongodbSource,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.db !== "") {
      writer.uint32(10).string(message.db);
    }
    if (message.collection !== "") {
      writer.uint32(18).string(message.collection);
    }
    if (message.host !== "") {
      writer.uint32(26).string(message.host);
    }
    if (message.port !== 0) {
      writer.uint32(32).int64(message.port);
    }
    if (message.user !== "") {
      writer.uint32(42).string(message.user);
    }
    if (message.password !== "") {
      writer.uint32(50).string(message.password);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClickhouseConfig_ExternalDictionary_MongodbSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_MongodbSource,
    } as ClickhouseConfig_ExternalDictionary_MongodbSource;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.db = reader.string();
          break;
        case 2:
          message.collection = reader.string();
          break;
        case 3:
          message.host = reader.string();
          break;
        case 4:
          message.port = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.user = reader.string();
          break;
        case 6:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_ExternalDictionary_MongodbSource {
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_MongodbSource,
    } as ClickhouseConfig_ExternalDictionary_MongodbSource;
    message.db =
      object.db !== undefined && object.db !== null ? String(object.db) : "";
    message.collection =
      object.collection !== undefined && object.collection !== null
        ? String(object.collection)
        : "";
    message.host =
      object.host !== undefined && object.host !== null
        ? String(object.host)
        : "";
    message.port =
      object.port !== undefined && object.port !== null
        ? Number(object.port)
        : 0;
    message.user =
      object.user !== undefined && object.user !== null
        ? String(object.user)
        : "";
    message.password =
      object.password !== undefined && object.password !== null
        ? String(object.password)
        : "";
    return message;
  },

  toJSON(message: ClickhouseConfig_ExternalDictionary_MongodbSource): unknown {
    const obj: any = {};
    message.db !== undefined && (obj.db = message.db);
    message.collection !== undefined && (obj.collection = message.collection);
    message.host !== undefined && (obj.host = message.host);
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.user !== undefined && (obj.user = message.user);
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ClickhouseConfig_ExternalDictionary_MongodbSource>,
      I
    >
  >(object: I): ClickhouseConfig_ExternalDictionary_MongodbSource {
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_MongodbSource,
    } as ClickhouseConfig_ExternalDictionary_MongodbSource;
    message.db = object.db ?? "";
    message.collection = object.collection ?? "";
    message.host = object.host ?? "";
    message.port = object.port ?? 0;
    message.user = object.user ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_ExternalDictionary_MongodbSource.$type,
  ClickhouseConfig_ExternalDictionary_MongodbSource
);

const baseClickhouseConfig_ExternalDictionary_PostgresqlSource: object = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.PostgresqlSource",
  db: "",
  table: "",
  hosts: "",
  port: 0,
  user: "",
  password: "",
  invalidateQuery: "",
  sslMode: 0,
};

export const ClickhouseConfig_ExternalDictionary_PostgresqlSource = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.PostgresqlSource" as const,

  encode(
    message: ClickhouseConfig_ExternalDictionary_PostgresqlSource,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.db !== "") {
      writer.uint32(10).string(message.db);
    }
    if (message.table !== "") {
      writer.uint32(18).string(message.table);
    }
    for (const v of message.hosts) {
      writer.uint32(26).string(v!);
    }
    if (message.port !== 0) {
      writer.uint32(32).int64(message.port);
    }
    if (message.user !== "") {
      writer.uint32(42).string(message.user);
    }
    if (message.password !== "") {
      writer.uint32(50).string(message.password);
    }
    if (message.invalidateQuery !== "") {
      writer.uint32(58).string(message.invalidateQuery);
    }
    if (message.sslMode !== 0) {
      writer.uint32(64).int32(message.sslMode);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClickhouseConfig_ExternalDictionary_PostgresqlSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_PostgresqlSource,
    } as ClickhouseConfig_ExternalDictionary_PostgresqlSource;
    message.hosts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.db = reader.string();
          break;
        case 2:
          message.table = reader.string();
          break;
        case 3:
          message.hosts.push(reader.string());
          break;
        case 4:
          message.port = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.user = reader.string();
          break;
        case 6:
          message.password = reader.string();
          break;
        case 7:
          message.invalidateQuery = reader.string();
          break;
        case 8:
          message.sslMode = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_ExternalDictionary_PostgresqlSource {
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_PostgresqlSource,
    } as ClickhouseConfig_ExternalDictionary_PostgresqlSource;
    message.db =
      object.db !== undefined && object.db !== null ? String(object.db) : "";
    message.table =
      object.table !== undefined && object.table !== null
        ? String(object.table)
        : "";
    message.hosts = (object.hosts ?? []).map((e: any) => String(e));
    message.port =
      object.port !== undefined && object.port !== null
        ? Number(object.port)
        : 0;
    message.user =
      object.user !== undefined && object.user !== null
        ? String(object.user)
        : "";
    message.password =
      object.password !== undefined && object.password !== null
        ? String(object.password)
        : "";
    message.invalidateQuery =
      object.invalidateQuery !== undefined && object.invalidateQuery !== null
        ? String(object.invalidateQuery)
        : "";
    message.sslMode =
      object.sslMode !== undefined && object.sslMode !== null
        ? clickhouseConfig_ExternalDictionary_PostgresqlSource_SslModeFromJSON(
            object.sslMode
          )
        : 0;
    return message;
  },

  toJSON(
    message: ClickhouseConfig_ExternalDictionary_PostgresqlSource
  ): unknown {
    const obj: any = {};
    message.db !== undefined && (obj.db = message.db);
    message.table !== undefined && (obj.table = message.table);
    if (message.hosts) {
      obj.hosts = message.hosts.map((e) => e);
    } else {
      obj.hosts = [];
    }
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.user !== undefined && (obj.user = message.user);
    message.password !== undefined && (obj.password = message.password);
    message.invalidateQuery !== undefined &&
      (obj.invalidateQuery = message.invalidateQuery);
    message.sslMode !== undefined &&
      (obj.sslMode =
        clickhouseConfig_ExternalDictionary_PostgresqlSource_SslModeToJSON(
          message.sslMode
        ));
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ClickhouseConfig_ExternalDictionary_PostgresqlSource>,
      I
    >
  >(object: I): ClickhouseConfig_ExternalDictionary_PostgresqlSource {
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_PostgresqlSource,
    } as ClickhouseConfig_ExternalDictionary_PostgresqlSource;
    message.db = object.db ?? "";
    message.table = object.table ?? "";
    message.hosts = object.hosts?.map((e) => e) || [];
    message.port = object.port ?? 0;
    message.user = object.user ?? "";
    message.password = object.password ?? "";
    message.invalidateQuery = object.invalidateQuery ?? "";
    message.sslMode = object.sslMode ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_ExternalDictionary_PostgresqlSource.$type,
  ClickhouseConfig_ExternalDictionary_PostgresqlSource
);

const baseClickhouseConfig_ExternalDictionary_Structure: object = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure",
};

export const ClickhouseConfig_ExternalDictionary_Structure = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure" as const,

  encode(
    message: ClickhouseConfig_ExternalDictionary_Structure,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ClickhouseConfig_ExternalDictionary_Structure_Id.encode(
        message.id,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.key !== undefined) {
      ClickhouseConfig_ExternalDictionary_Structure_Key.encode(
        message.key,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.rangeMin !== undefined) {
      ClickhouseConfig_ExternalDictionary_Structure_Attribute.encode(
        message.rangeMin,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.rangeMax !== undefined) {
      ClickhouseConfig_ExternalDictionary_Structure_Attribute.encode(
        message.rangeMax,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.attributes) {
      ClickhouseConfig_ExternalDictionary_Structure_Attribute.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClickhouseConfig_ExternalDictionary_Structure {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_Structure,
    } as ClickhouseConfig_ExternalDictionary_Structure;
    message.attributes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ClickhouseConfig_ExternalDictionary_Structure_Id.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.key =
            ClickhouseConfig_ExternalDictionary_Structure_Key.decode(
              reader,
              reader.uint32()
            );
          break;
        case 4:
          message.rangeMin =
            ClickhouseConfig_ExternalDictionary_Structure_Attribute.decode(
              reader,
              reader.uint32()
            );
          break;
        case 5:
          message.rangeMax =
            ClickhouseConfig_ExternalDictionary_Structure_Attribute.decode(
              reader,
              reader.uint32()
            );
          break;
        case 2:
          message.attributes.push(
            ClickhouseConfig_ExternalDictionary_Structure_Attribute.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_ExternalDictionary_Structure {
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_Structure,
    } as ClickhouseConfig_ExternalDictionary_Structure;
    message.id =
      object.id !== undefined && object.id !== null
        ? ClickhouseConfig_ExternalDictionary_Structure_Id.fromJSON(object.id)
        : undefined;
    message.key =
      object.key !== undefined && object.key !== null
        ? ClickhouseConfig_ExternalDictionary_Structure_Key.fromJSON(object.key)
        : undefined;
    message.rangeMin =
      object.rangeMin !== undefined && object.rangeMin !== null
        ? ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromJSON(
            object.rangeMin
          )
        : undefined;
    message.rangeMax =
      object.rangeMax !== undefined && object.rangeMax !== null
        ? ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromJSON(
            object.rangeMax
          )
        : undefined;
    message.attributes = (object.attributes ?? []).map((e: any) =>
      ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ClickhouseConfig_ExternalDictionary_Structure): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = message.id
        ? ClickhouseConfig_ExternalDictionary_Structure_Id.toJSON(message.id)
        : undefined);
    message.key !== undefined &&
      (obj.key = message.key
        ? ClickhouseConfig_ExternalDictionary_Structure_Key.toJSON(message.key)
        : undefined);
    message.rangeMin !== undefined &&
      (obj.rangeMin = message.rangeMin
        ? ClickhouseConfig_ExternalDictionary_Structure_Attribute.toJSON(
            message.rangeMin
          )
        : undefined);
    message.rangeMax !== undefined &&
      (obj.rangeMax = message.rangeMax
        ? ClickhouseConfig_ExternalDictionary_Structure_Attribute.toJSON(
            message.rangeMax
          )
        : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e
          ? ClickhouseConfig_ExternalDictionary_Structure_Attribute.toJSON(e)
          : undefined
      );
    } else {
      obj.attributes = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ClickhouseConfig_ExternalDictionary_Structure>,
      I
    >
  >(object: I): ClickhouseConfig_ExternalDictionary_Structure {
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_Structure,
    } as ClickhouseConfig_ExternalDictionary_Structure;
    message.id =
      object.id !== undefined && object.id !== null
        ? ClickhouseConfig_ExternalDictionary_Structure_Id.fromPartial(
            object.id
          )
        : undefined;
    message.key =
      object.key !== undefined && object.key !== null
        ? ClickhouseConfig_ExternalDictionary_Structure_Key.fromPartial(
            object.key
          )
        : undefined;
    message.rangeMin =
      object.rangeMin !== undefined && object.rangeMin !== null
        ? ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromPartial(
            object.rangeMin
          )
        : undefined;
    message.rangeMax =
      object.rangeMax !== undefined && object.rangeMax !== null
        ? ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromPartial(
            object.rangeMax
          )
        : undefined;
    message.attributes =
      object.attributes?.map((e) =>
        ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromPartial(e)
      ) || [];
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_ExternalDictionary_Structure.$type,
  ClickhouseConfig_ExternalDictionary_Structure
);

const baseClickhouseConfig_ExternalDictionary_Structure_Attribute: object = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Attribute",
  name: "",
  type: "",
  nullValue: "",
  expression: "",
  hierarchical: false,
  injective: false,
};

export const ClickhouseConfig_ExternalDictionary_Structure_Attribute = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Attribute" as const,

  encode(
    message: ClickhouseConfig_ExternalDictionary_Structure_Attribute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.nullValue !== "") {
      writer.uint32(26).string(message.nullValue);
    }
    if (message.expression !== "") {
      writer.uint32(34).string(message.expression);
    }
    if (message.hierarchical === true) {
      writer.uint32(40).bool(message.hierarchical);
    }
    if (message.injective === true) {
      writer.uint32(48).bool(message.injective);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClickhouseConfig_ExternalDictionary_Structure_Attribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_Structure_Attribute,
    } as ClickhouseConfig_ExternalDictionary_Structure_Attribute;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.nullValue = reader.string();
          break;
        case 4:
          message.expression = reader.string();
          break;
        case 5:
          message.hierarchical = reader.bool();
          break;
        case 6:
          message.injective = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(
    object: any
  ): ClickhouseConfig_ExternalDictionary_Structure_Attribute {
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_Structure_Attribute,
    } as ClickhouseConfig_ExternalDictionary_Structure_Attribute;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    message.nullValue =
      object.nullValue !== undefined && object.nullValue !== null
        ? String(object.nullValue)
        : "";
    message.expression =
      object.expression !== undefined && object.expression !== null
        ? String(object.expression)
        : "";
    message.hierarchical =
      object.hierarchical !== undefined && object.hierarchical !== null
        ? Boolean(object.hierarchical)
        : false;
    message.injective =
      object.injective !== undefined && object.injective !== null
        ? Boolean(object.injective)
        : false;
    return message;
  },

  toJSON(
    message: ClickhouseConfig_ExternalDictionary_Structure_Attribute
  ): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = message.type);
    message.nullValue !== undefined && (obj.nullValue = message.nullValue);
    message.expression !== undefined && (obj.expression = message.expression);
    message.hierarchical !== undefined &&
      (obj.hierarchical = message.hierarchical);
    message.injective !== undefined && (obj.injective = message.injective);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ClickhouseConfig_ExternalDictionary_Structure_Attribute>,
      I
    >
  >(object: I): ClickhouseConfig_ExternalDictionary_Structure_Attribute {
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_Structure_Attribute,
    } as ClickhouseConfig_ExternalDictionary_Structure_Attribute;
    message.name = object.name ?? "";
    message.type = object.type ?? "";
    message.nullValue = object.nullValue ?? "";
    message.expression = object.expression ?? "";
    message.hierarchical = object.hierarchical ?? false;
    message.injective = object.injective ?? false;
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_ExternalDictionary_Structure_Attribute.$type,
  ClickhouseConfig_ExternalDictionary_Structure_Attribute
);

const baseClickhouseConfig_ExternalDictionary_Structure_Id: object = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Id",
  name: "",
};

export const ClickhouseConfig_ExternalDictionary_Structure_Id = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Id" as const,

  encode(
    message: ClickhouseConfig_ExternalDictionary_Structure_Id,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClickhouseConfig_ExternalDictionary_Structure_Id {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_Structure_Id,
    } as ClickhouseConfig_ExternalDictionary_Structure_Id;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_ExternalDictionary_Structure_Id {
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_Structure_Id,
    } as ClickhouseConfig_ExternalDictionary_Structure_Id;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: ClickhouseConfig_ExternalDictionary_Structure_Id): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ClickhouseConfig_ExternalDictionary_Structure_Id>,
      I
    >
  >(object: I): ClickhouseConfig_ExternalDictionary_Structure_Id {
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_Structure_Id,
    } as ClickhouseConfig_ExternalDictionary_Structure_Id;
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_ExternalDictionary_Structure_Id.$type,
  ClickhouseConfig_ExternalDictionary_Structure_Id
);

const baseClickhouseConfig_ExternalDictionary_Structure_Key: object = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Key",
};

export const ClickhouseConfig_ExternalDictionary_Structure_Key = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Key" as const,

  encode(
    message: ClickhouseConfig_ExternalDictionary_Structure_Key,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.attributes) {
      ClickhouseConfig_ExternalDictionary_Structure_Attribute.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClickhouseConfig_ExternalDictionary_Structure_Key {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_Structure_Key,
    } as ClickhouseConfig_ExternalDictionary_Structure_Key;
    message.attributes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attributes.push(
            ClickhouseConfig_ExternalDictionary_Structure_Attribute.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_ExternalDictionary_Structure_Key {
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_Structure_Key,
    } as ClickhouseConfig_ExternalDictionary_Structure_Key;
    message.attributes = (object.attributes ?? []).map((e: any) =>
      ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ClickhouseConfig_ExternalDictionary_Structure_Key): unknown {
    const obj: any = {};
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e
          ? ClickhouseConfig_ExternalDictionary_Structure_Attribute.toJSON(e)
          : undefined
      );
    } else {
      obj.attributes = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ClickhouseConfig_ExternalDictionary_Structure_Key>,
      I
    >
  >(object: I): ClickhouseConfig_ExternalDictionary_Structure_Key {
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_Structure_Key,
    } as ClickhouseConfig_ExternalDictionary_Structure_Key;
    message.attributes =
      object.attributes?.map((e) =>
        ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromPartial(e)
      ) || [];
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_ExternalDictionary_Structure_Key.$type,
  ClickhouseConfig_ExternalDictionary_Structure_Key
);

const baseClickhouseConfig_ExternalDictionary_Layout: object = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Layout",
  type: 0,
  sizeInCells: 0,
};

export const ClickhouseConfig_ExternalDictionary_Layout = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Layout" as const,

  encode(
    message: ClickhouseConfig_ExternalDictionary_Layout,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.sizeInCells !== 0) {
      writer.uint32(16).int64(message.sizeInCells);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClickhouseConfig_ExternalDictionary_Layout {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_Layout,
    } as ClickhouseConfig_ExternalDictionary_Layout;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.sizeInCells = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_ExternalDictionary_Layout {
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_Layout,
    } as ClickhouseConfig_ExternalDictionary_Layout;
    message.type =
      object.type !== undefined && object.type !== null
        ? clickhouseConfig_ExternalDictionary_Layout_TypeFromJSON(object.type)
        : 0;
    message.sizeInCells =
      object.sizeInCells !== undefined && object.sizeInCells !== null
        ? Number(object.sizeInCells)
        : 0;
    return message;
  },

  toJSON(message: ClickhouseConfig_ExternalDictionary_Layout): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = clickhouseConfig_ExternalDictionary_Layout_TypeToJSON(
        message.type
      ));
    message.sizeInCells !== undefined &&
      (obj.sizeInCells = Math.round(message.sizeInCells));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ClickhouseConfig_ExternalDictionary_Layout>, I>
  >(object: I): ClickhouseConfig_ExternalDictionary_Layout {
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_Layout,
    } as ClickhouseConfig_ExternalDictionary_Layout;
    message.type = object.type ?? 0;
    message.sizeInCells = object.sizeInCells ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_ExternalDictionary_Layout.$type,
  ClickhouseConfig_ExternalDictionary_Layout
);

const baseClickhouseConfig_ExternalDictionary_Range: object = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Range",
  min: 0,
  max: 0,
};

export const ClickhouseConfig_ExternalDictionary_Range = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Range" as const,

  encode(
    message: ClickhouseConfig_ExternalDictionary_Range,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.min !== 0) {
      writer.uint32(8).int64(message.min);
    }
    if (message.max !== 0) {
      writer.uint32(16).int64(message.max);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClickhouseConfig_ExternalDictionary_Range {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_Range,
    } as ClickhouseConfig_ExternalDictionary_Range;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.min = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.max = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_ExternalDictionary_Range {
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_Range,
    } as ClickhouseConfig_ExternalDictionary_Range;
    message.min =
      object.min !== undefined && object.min !== null ? Number(object.min) : 0;
    message.max =
      object.max !== undefined && object.max !== null ? Number(object.max) : 0;
    return message;
  },

  toJSON(message: ClickhouseConfig_ExternalDictionary_Range): unknown {
    const obj: any = {};
    message.min !== undefined && (obj.min = Math.round(message.min));
    message.max !== undefined && (obj.max = Math.round(message.max));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ClickhouseConfig_ExternalDictionary_Range>, I>
  >(object: I): ClickhouseConfig_ExternalDictionary_Range {
    const message = {
      ...baseClickhouseConfig_ExternalDictionary_Range,
    } as ClickhouseConfig_ExternalDictionary_Range;
    message.min = object.min ?? 0;
    message.max = object.max ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_ExternalDictionary_Range.$type,
  ClickhouseConfig_ExternalDictionary_Range
);

const baseClickhouseConfig_GraphiteRollup: object = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup",
  name: "",
};

export const ClickhouseConfig_GraphiteRollup = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup" as const,

  encode(
    message: ClickhouseConfig_GraphiteRollup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.patterns) {
      ClickhouseConfig_GraphiteRollup_Pattern.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClickhouseConfig_GraphiteRollup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClickhouseConfig_GraphiteRollup,
    } as ClickhouseConfig_GraphiteRollup;
    message.patterns = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.patterns.push(
            ClickhouseConfig_GraphiteRollup_Pattern.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_GraphiteRollup {
    const message = {
      ...baseClickhouseConfig_GraphiteRollup,
    } as ClickhouseConfig_GraphiteRollup;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.patterns = (object.patterns ?? []).map((e: any) =>
      ClickhouseConfig_GraphiteRollup_Pattern.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ClickhouseConfig_GraphiteRollup): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.patterns) {
      obj.patterns = message.patterns.map((e) =>
        e ? ClickhouseConfig_GraphiteRollup_Pattern.toJSON(e) : undefined
      );
    } else {
      obj.patterns = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClickhouseConfig_GraphiteRollup>, I>>(
    object: I
  ): ClickhouseConfig_GraphiteRollup {
    const message = {
      ...baseClickhouseConfig_GraphiteRollup,
    } as ClickhouseConfig_GraphiteRollup;
    message.name = object.name ?? "";
    message.patterns =
      object.patterns?.map((e) =>
        ClickhouseConfig_GraphiteRollup_Pattern.fromPartial(e)
      ) || [];
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_GraphiteRollup.$type,
  ClickhouseConfig_GraphiteRollup
);

const baseClickhouseConfig_GraphiteRollup_Pattern: object = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup.Pattern",
  regexp: "",
  function: "",
};

export const ClickhouseConfig_GraphiteRollup_Pattern = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup.Pattern" as const,

  encode(
    message: ClickhouseConfig_GraphiteRollup_Pattern,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.regexp !== "") {
      writer.uint32(10).string(message.regexp);
    }
    if (message.function !== "") {
      writer.uint32(18).string(message.function);
    }
    for (const v of message.retention) {
      ClickhouseConfig_GraphiteRollup_Pattern_Retention.encode(
        v!,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClickhouseConfig_GraphiteRollup_Pattern {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClickhouseConfig_GraphiteRollup_Pattern,
    } as ClickhouseConfig_GraphiteRollup_Pattern;
    message.retention = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.regexp = reader.string();
          break;
        case 2:
          message.function = reader.string();
          break;
        case 3:
          message.retention.push(
            ClickhouseConfig_GraphiteRollup_Pattern_Retention.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_GraphiteRollup_Pattern {
    const message = {
      ...baseClickhouseConfig_GraphiteRollup_Pattern,
    } as ClickhouseConfig_GraphiteRollup_Pattern;
    message.regexp =
      object.regexp !== undefined && object.regexp !== null
        ? String(object.regexp)
        : "";
    message.function =
      object.function !== undefined && object.function !== null
        ? String(object.function)
        : "";
    message.retention = (object.retention ?? []).map((e: any) =>
      ClickhouseConfig_GraphiteRollup_Pattern_Retention.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ClickhouseConfig_GraphiteRollup_Pattern): unknown {
    const obj: any = {};
    message.regexp !== undefined && (obj.regexp = message.regexp);
    message.function !== undefined && (obj.function = message.function);
    if (message.retention) {
      obj.retention = message.retention.map((e) =>
        e
          ? ClickhouseConfig_GraphiteRollup_Pattern_Retention.toJSON(e)
          : undefined
      );
    } else {
      obj.retention = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ClickhouseConfig_GraphiteRollup_Pattern>, I>
  >(object: I): ClickhouseConfig_GraphiteRollup_Pattern {
    const message = {
      ...baseClickhouseConfig_GraphiteRollup_Pattern,
    } as ClickhouseConfig_GraphiteRollup_Pattern;
    message.regexp = object.regexp ?? "";
    message.function = object.function ?? "";
    message.retention =
      object.retention?.map((e) =>
        ClickhouseConfig_GraphiteRollup_Pattern_Retention.fromPartial(e)
      ) || [];
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_GraphiteRollup_Pattern.$type,
  ClickhouseConfig_GraphiteRollup_Pattern
);

const baseClickhouseConfig_GraphiteRollup_Pattern_Retention: object = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup.Pattern.Retention",
  age: 0,
  precision: 0,
};

export const ClickhouseConfig_GraphiteRollup_Pattern_Retention = {
  $type:
    "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup.Pattern.Retention" as const,

  encode(
    message: ClickhouseConfig_GraphiteRollup_Pattern_Retention,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.age !== 0) {
      writer.uint32(8).int64(message.age);
    }
    if (message.precision !== 0) {
      writer.uint32(16).int64(message.precision);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClickhouseConfig_GraphiteRollup_Pattern_Retention {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClickhouseConfig_GraphiteRollup_Pattern_Retention,
    } as ClickhouseConfig_GraphiteRollup_Pattern_Retention;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.age = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.precision = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConfig_GraphiteRollup_Pattern_Retention {
    const message = {
      ...baseClickhouseConfig_GraphiteRollup_Pattern_Retention,
    } as ClickhouseConfig_GraphiteRollup_Pattern_Retention;
    message.age =
      object.age !== undefined && object.age !== null ? Number(object.age) : 0;
    message.precision =
      object.precision !== undefined && object.precision !== null
        ? Number(object.precision)
        : 0;
    return message;
  },

  toJSON(message: ClickhouseConfig_GraphiteRollup_Pattern_Retention): unknown {
    const obj: any = {};
    message.age !== undefined && (obj.age = Math.round(message.age));
    message.precision !== undefined &&
      (obj.precision = Math.round(message.precision));
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ClickhouseConfig_GraphiteRollup_Pattern_Retention>,
      I
    >
  >(object: I): ClickhouseConfig_GraphiteRollup_Pattern_Retention {
    const message = {
      ...baseClickhouseConfig_GraphiteRollup_Pattern_Retention,
    } as ClickhouseConfig_GraphiteRollup_Pattern_Retention;
    message.age = object.age ?? 0;
    message.precision = object.precision ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConfig_GraphiteRollup_Pattern_Retention.$type,
  ClickhouseConfig_GraphiteRollup_Pattern_Retention
);

const baseClickhouseConfigSet: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfigSet",
};

export const ClickhouseConfigSet = {
  $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfigSet" as const,

  encode(
    message: ClickhouseConfigSet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      ClickhouseConfig.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      ClickhouseConfig.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      ClickhouseConfig.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConfigSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClickhouseConfigSet } as ClickhouseConfigSet;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = ClickhouseConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = ClickhouseConfig.decode(reader, reader.uint32());
          break;
        case 3:
          message.defaultConfig = ClickhouseConfig.decode(
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

  fromJSON(object: any): ClickhouseConfigSet {
    const message = { ...baseClickhouseConfigSet } as ClickhouseConfigSet;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? ClickhouseConfig.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? ClickhouseConfig.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? ClickhouseConfig.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: ClickhouseConfigSet): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? ClickhouseConfig.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? ClickhouseConfig.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? ClickhouseConfig.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClickhouseConfigSet>, I>>(
    object: I
  ): ClickhouseConfigSet {
    const message = { ...baseClickhouseConfigSet } as ClickhouseConfigSet;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? ClickhouseConfig.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? ClickhouseConfig.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? ClickhouseConfig.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ClickhouseConfigSet.$type, ClickhouseConfigSet);

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
