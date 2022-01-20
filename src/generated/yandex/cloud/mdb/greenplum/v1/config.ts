/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  Int64Value,
  StringValue,
  BoolValue,
  FloatValue,
} from "../../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.mdb.greenplum.v1";

export interface Resources {
  $type: "yandex.cloud.mdb.greenplum.v1.Resources";
  /**
   * ID of the preset for computational resources available to a host (CPU, memory etc.).
   * All available presets are listed in the [documentation](/docs/managed-greenplum/concepts/instance-types).
   */
  resourcePresetId: string;
  /** Volume of the storage available to a host. */
  diskSize: number;
  /**
   * Type of the storage environment for the host.
   *
   * Possible values:
   * * network-hdd - network HDD drive,
   * * network-ssd - network SSD drive,
   * * local-ssd - local SSD storage.
   */
  diskTypeId: string;
}

export interface ConnectionPoolerConfig {
  $type: "yandex.cloud.mdb.greenplum.v1.ConnectionPoolerConfig";
  /**
   * Odyssey route server pool mode. Default is session mode.
   * https://github.com/yandex/odyssey/blob/master/documentation/configuration.md#pool-string
   */
  mode: ConnectionPoolerConfig_PoolMode;
  /**
   * Odyssey Server pool size.
   * Keep the number of servers in the pool as much as 'pool_size'. Clients are put in a wait queue, when all servers are busy.
   * Set to zero to disable the limit.
   * https://github.com/yandex/odyssey/blob/master/documentation/configuration.md#pool_size-integer
   */
  size?: number;
  /**
   * Server pool idle timeout.
   * Close an server connection when it becomes idle for 'pool_ttl' seconds.
   * Set to zero to disable.
   * https://github.com/yandex/odyssey/blob/master/documentation/configuration.md#pool_ttl-integer
   */
  clientIdleTimeout?: number;
}

export enum ConnectionPoolerConfig_PoolMode {
  POOL_MODE_UNSPECIFIED = 0,
  SESSION = 1,
  TRANSACTION = 2,
  UNRECOGNIZED = -1,
}

export function connectionPoolerConfig_PoolModeFromJSON(
  object: any
): ConnectionPoolerConfig_PoolMode {
  switch (object) {
    case 0:
    case "POOL_MODE_UNSPECIFIED":
      return ConnectionPoolerConfig_PoolMode.POOL_MODE_UNSPECIFIED;
    case 1:
    case "SESSION":
      return ConnectionPoolerConfig_PoolMode.SESSION;
    case 2:
    case "TRANSACTION":
      return ConnectionPoolerConfig_PoolMode.TRANSACTION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ConnectionPoolerConfig_PoolMode.UNRECOGNIZED;
  }
}

export function connectionPoolerConfig_PoolModeToJSON(
  object: ConnectionPoolerConfig_PoolMode
): string {
  switch (object) {
    case ConnectionPoolerConfig_PoolMode.POOL_MODE_UNSPECIFIED:
      return "POOL_MODE_UNSPECIFIED";
    case ConnectionPoolerConfig_PoolMode.SESSION:
      return "SESSION";
    case ConnectionPoolerConfig_PoolMode.TRANSACTION:
      return "TRANSACTION";
    default:
      return "UNKNOWN";
  }
}

/** Configuration of master subcluster */
export interface MasterSubclusterConfig {
  $type: "yandex.cloud.mdb.greenplum.v1.MasterSubclusterConfig";
  /** Resources allocated to Greenplum master subcluster hosts. */
  resources?: Resources;
  /** Configuration settings of a Greenplum master server. */
  config?: GreenplumMasterConfigSet;
}

/** Configuration of segmet subcluster */
export interface SegmentSubclusterConfig {
  $type: "yandex.cloud.mdb.greenplum.v1.SegmentSubclusterConfig";
  /** Resources allocated to Greenplum segment subcluster hosts. */
  resources?: Resources;
  /** Configuration settings of a Greenplum segment server. */
  config?: GreenplumSegmentConfigSet;
}

/**
 * Greenplum master subcluster configuration options. Detailed description for each set of options
 *
 * Any options not listed here are not supported.
 */
export interface GreenplumMasterConfig {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumMasterConfig";
  /** Logging level for the Greenplum master subcluster. Possible values: TRACE, DEBUG, INFORMATION, WARNING, ERROR. */
  logLevel: GreenplumMasterConfig_LogLevel;
  /** Maximum number of inbound connections. */
  maxConnections?: number;
  /** The server's time zone to be used in DateTime fields conversions. Specified as an IANA identifier. */
  timezone?: string;
  /** Odyssey pool settings */
  pool?: ConnectionPoolerConfig;
  /**
   * Sets the maximum number of transactions that can be in the "prepared" state simultaneously
   * https://www.postgresql.org/docs/9.6/runtime-config-resource.html
   */
  maxPreparedTransactions?: number;
  /**
   * For queries that are managed by resource queues or resource groups,
   * this parameter determines when Greenplum Database terminates running queries based on the amount of memory the queries are using.
   * A value of 100 disables the automatic termination of queries based on the percentage of memory that is utilized.
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#runaway_detector_activation_percent
   */
  runawayDetectorActivationPercent?: number;
  /**
   * How many keepalives may be lost before the connection is considered dead. A value of 0 uses the system default.
   * If TCP_KEEPCNT is not supported, this parameter must be 0.
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#tcp_keepalives_count
   */
  tcpKeepalivesCount?: number;
  /**
   * How many seconds to wait for a response to a keepalive before retransmitting. A value of 0 uses the system default.
   * If TCP_KEEPINTVL is not supported, this parameter must be 0.
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#tcp_keepalives_interval
   */
  tcpKeepalivesInterval?: number;
  /**
   * When an SQL query reads from an external table, the parameter value specifies the amount of time in seconds that
   * Greenplum Database waits before cancelling the query when data stops being returned from the external table.
   * The default value of 0, specifies no time out. Greenplum Database does not cancel the query.
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#readable_external_table_timeout
   */
  readableExternalTableTimeout?: number;
  /**
   * Sets the amount of data per-peer to be queued by the default UDPIFC interconnect on senders.
   * Increasing the depth from its default value will cause the system to use more memory, but may increase performance.
   * Reasonable values for this parameter are between 1 and 4. Increasing the value might radically increase the amount of memory used by the system.
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_interconnect_snd_queue_depth
   */
  gpInterconnectSndQueueDepth?: number;
  /**
   * Sets the amount of data per-peer to be queued by the Greenplum Database interconnect on receivers
   * (when data is received but no space is available to receive it the data will be dropped, and the transmitter will need to resend it)
   * for the default UDPIFC interconnect.
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_interconnect_queue_depth
   */
  gpInterconnectQueueDepth?: number;
  /**
   * Controls which SQL statements are logged. DDL logs all data definition commands like CREATE, ALTER, and DROP commands.
   * MOD logs all DDL statements, plus INSERT, UPDATE, DELETE, TRUNCATE, and COPY FROM.
   * PREPARE and EXPLAIN ANALYZE statements are also logged if their contained command is of an appropriate type.
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#log_statement
   * Default value is ddl
   */
  logStatement: GreenplumMasterConfig_LogStatement;
  /**
   * Causes the duration of every completed statement which satisfies log_statement to be logged.
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#log_duration
   */
  logDuration?: boolean;
  /**
   * For a partitioned table, controls whether the ROOTPARTITION keyword is required to collect root partition statistics
   * when the ANALYZE command is run on the table. GPORCA uses the root partition statistics when generating a query plan.
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#optimizer_analyze_root_partition
   */
  optimizerAnalyzeRootPartition?: boolean;
  /**
   * Sets the number of segments that will scan external table data during an external table operation,
   * the purpose being not to overload the system with scanning data and take away resources from other concurrent operations.
   * This only applies to external tables that use the gpfdist:// protocol to access external table data.
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_external_max_segs
   */
  gpExternalMaxSegs?: number;
  /**
   * Specifies the allowed timeout for the fault detection process (ftsprobe) to establish a connection to a segment before declaring it down.
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_fts_probe_timeout
   */
  gpFtsProbeTimeout?: number;
  /**
   * Specifies whether the temporary files created, when a hash aggregation or hash join operation spills to disk, are compressed.
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_workfile_compression
   */
  gpWorkfileCompression?: boolean;
  /** https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_autostats_mode_in_functions */
  gpAutostatsModeInFunctions: GreenplumMasterConfig_AutostatsModeInFunctions;
}

export enum GreenplumMasterConfig_LogLevel {
  LOG_LEVEL_UNSPECIFIED = 0,
  TRACE = 1,
  DEBUG = 2,
  INFORMATION = 3,
  WARNING = 4,
  ERROR = 5,
  UNRECOGNIZED = -1,
}

export function greenplumMasterConfig_LogLevelFromJSON(
  object: any
): GreenplumMasterConfig_LogLevel {
  switch (object) {
    case 0:
    case "LOG_LEVEL_UNSPECIFIED":
      return GreenplumMasterConfig_LogLevel.LOG_LEVEL_UNSPECIFIED;
    case 1:
    case "TRACE":
      return GreenplumMasterConfig_LogLevel.TRACE;
    case 2:
    case "DEBUG":
      return GreenplumMasterConfig_LogLevel.DEBUG;
    case 3:
    case "INFORMATION":
      return GreenplumMasterConfig_LogLevel.INFORMATION;
    case 4:
    case "WARNING":
      return GreenplumMasterConfig_LogLevel.WARNING;
    case 5:
    case "ERROR":
      return GreenplumMasterConfig_LogLevel.ERROR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GreenplumMasterConfig_LogLevel.UNRECOGNIZED;
  }
}

export function greenplumMasterConfig_LogLevelToJSON(
  object: GreenplumMasterConfig_LogLevel
): string {
  switch (object) {
    case GreenplumMasterConfig_LogLevel.LOG_LEVEL_UNSPECIFIED:
      return "LOG_LEVEL_UNSPECIFIED";
    case GreenplumMasterConfig_LogLevel.TRACE:
      return "TRACE";
    case GreenplumMasterConfig_LogLevel.DEBUG:
      return "DEBUG";
    case GreenplumMasterConfig_LogLevel.INFORMATION:
      return "INFORMATION";
    case GreenplumMasterConfig_LogLevel.WARNING:
      return "WARNING";
    case GreenplumMasterConfig_LogLevel.ERROR:
      return "ERROR";
    default:
      return "UNKNOWN";
  }
}

export enum GreenplumMasterConfig_LogStatement {
  LOG_STATEMENT_UNSPECIFIED = 0,
  NONE = 1,
  DDL = 2,
  MOD = 3,
  ALL = 4,
  UNRECOGNIZED = -1,
}

export function greenplumMasterConfig_LogStatementFromJSON(
  object: any
): GreenplumMasterConfig_LogStatement {
  switch (object) {
    case 0:
    case "LOG_STATEMENT_UNSPECIFIED":
      return GreenplumMasterConfig_LogStatement.LOG_STATEMENT_UNSPECIFIED;
    case 1:
    case "NONE":
      return GreenplumMasterConfig_LogStatement.NONE;
    case 2:
    case "DDL":
      return GreenplumMasterConfig_LogStatement.DDL;
    case 3:
    case "MOD":
      return GreenplumMasterConfig_LogStatement.MOD;
    case 4:
    case "ALL":
      return GreenplumMasterConfig_LogStatement.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GreenplumMasterConfig_LogStatement.UNRECOGNIZED;
  }
}

export function greenplumMasterConfig_LogStatementToJSON(
  object: GreenplumMasterConfig_LogStatement
): string {
  switch (object) {
    case GreenplumMasterConfig_LogStatement.LOG_STATEMENT_UNSPECIFIED:
      return "LOG_STATEMENT_UNSPECIFIED";
    case GreenplumMasterConfig_LogStatement.NONE:
      return "NONE";
    case GreenplumMasterConfig_LogStatement.DDL:
      return "DDL";
    case GreenplumMasterConfig_LogStatement.MOD:
      return "MOD";
    case GreenplumMasterConfig_LogStatement.ALL:
      return "ALL";
    default:
      return "UNKNOWN";
  }
}

export enum GreenplumMasterConfig_AutostatsModeInFunctions {
  AUTOSTATS_MODE_IN_FUNCTIONS_UNSPECIFIED = 0,
  MODE_NONE = 1,
  ON_CHANGE = 2,
  ON_NO_STATS = 3,
  UNRECOGNIZED = -1,
}

export function greenplumMasterConfig_AutostatsModeInFunctionsFromJSON(
  object: any
): GreenplumMasterConfig_AutostatsModeInFunctions {
  switch (object) {
    case 0:
    case "AUTOSTATS_MODE_IN_FUNCTIONS_UNSPECIFIED":
      return GreenplumMasterConfig_AutostatsModeInFunctions.AUTOSTATS_MODE_IN_FUNCTIONS_UNSPECIFIED;
    case 1:
    case "MODE_NONE":
      return GreenplumMasterConfig_AutostatsModeInFunctions.MODE_NONE;
    case 2:
    case "ON_CHANGE":
      return GreenplumMasterConfig_AutostatsModeInFunctions.ON_CHANGE;
    case 3:
    case "ON_NO_STATS":
      return GreenplumMasterConfig_AutostatsModeInFunctions.ON_NO_STATS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GreenplumMasterConfig_AutostatsModeInFunctions.UNRECOGNIZED;
  }
}

export function greenplumMasterConfig_AutostatsModeInFunctionsToJSON(
  object: GreenplumMasterConfig_AutostatsModeInFunctions
): string {
  switch (object) {
    case GreenplumMasterConfig_AutostatsModeInFunctions.AUTOSTATS_MODE_IN_FUNCTIONS_UNSPECIFIED:
      return "AUTOSTATS_MODE_IN_FUNCTIONS_UNSPECIFIED";
    case GreenplumMasterConfig_AutostatsModeInFunctions.MODE_NONE:
      return "MODE_NONE";
    case GreenplumMasterConfig_AutostatsModeInFunctions.ON_CHANGE:
      return "ON_CHANGE";
    case GreenplumMasterConfig_AutostatsModeInFunctions.ON_NO_STATS:
      return "ON_NO_STATS";
    default:
      return "UNKNOWN";
  }
}

/**
 * Greenplum segment subcluster configuration options. Detailed description for each set of options
 *
 * Any options not listed here are not supported.
 */
export interface GreenplumSegmentConfig {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumSegmentConfig";
  /** Logging level for the Greenplum segment subcluster. Possible values: TRACE, DEBUG, INFORMATION, WARNING, ERROR. */
  logLevel: GreenplumSegmentConfig_LogLevel;
  /** Maximum number of inbound connections. */
  maxConnections?: number;
  /**
   * Specify the maximum size of WAL files that replication slots are allowed to retain in the pg_wal directory at checkpoint time.
   * https://www.postgresql.org/docs/current/runtime-config-replication.html
   */
  maxSlotWalKeepSize?: number;
  /**
   * Sets the maximum total disk size that all running queries are allowed to use for creating temporary spill files at each segment.
   * The default value is 0, which means a limit is not enforced.
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_workfile_limit_per_segment
   */
  gpWorkfileLimitPerSegment?: number;
  /**
   * Sets the maximum disk size an individual query is allowed to use for creating temporary spill files at each segment.
   * The default value is 0, which means a limit is not enforced.
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_workfile_limit_per_query
   */
  gpWorkfileLimitPerQuery?: number;
  /**
   * Sets the maximum number of temporary spill files (also known as workfiles) allowed per query per segment.
   * Spill files are created when executing a query that requires more memory than it is allocated.
   * The current query is terminated when the limit is exceeded.
   * Set the value to 0 (zero) to allow an unlimited number of spill files. master session reload
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_workfile_limit_files_per_query
   * Default value is 10000
   */
  gpWorkfileLimitFilesPerQuery?: number;
  /**
   * Identifies the resource management scheme currently enabled in the Greenplum Database cluster. The default scheme is to use resource queues.
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_resource_manager
   * "group" is the default value
   */
  gpResourceManager: GreenplumSegmentConfig_GPResourceManager;
  /**
   * Identifies the maximum percentage of system CPU resources to allocate to resource groups on each Greenplum Database segment node.
   * Note: The gp_resource_group_cpu_limit server configuration parameter is enforced only when resource group-based resource management is active.
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_resource_group_cpu_limit
   */
  gpResourceGroupCpuLimit?: number;
  /**
   * Identifies the maximum percentage of system memory resources to allocate to resource groups on each Greenplum Database segment node.
   * Note: The gp_resource_group_memory_limit server configuration parameter is enforced only when resource group-based resource management is active.
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_resource_group_memory_limit
   */
  gpResourceGroupMemoryLimit?: number;
}

export enum GreenplumSegmentConfig_LogLevel {
  LOG_LEVEL_UNSPECIFIED = 0,
  TRACE = 1,
  DEBUG = 2,
  INFORMATION = 3,
  WARNING = 4,
  ERROR = 5,
  UNRECOGNIZED = -1,
}

export function greenplumSegmentConfig_LogLevelFromJSON(
  object: any
): GreenplumSegmentConfig_LogLevel {
  switch (object) {
    case 0:
    case "LOG_LEVEL_UNSPECIFIED":
      return GreenplumSegmentConfig_LogLevel.LOG_LEVEL_UNSPECIFIED;
    case 1:
    case "TRACE":
      return GreenplumSegmentConfig_LogLevel.TRACE;
    case 2:
    case "DEBUG":
      return GreenplumSegmentConfig_LogLevel.DEBUG;
    case 3:
    case "INFORMATION":
      return GreenplumSegmentConfig_LogLevel.INFORMATION;
    case 4:
    case "WARNING":
      return GreenplumSegmentConfig_LogLevel.WARNING;
    case 5:
    case "ERROR":
      return GreenplumSegmentConfig_LogLevel.ERROR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GreenplumSegmentConfig_LogLevel.UNRECOGNIZED;
  }
}

export function greenplumSegmentConfig_LogLevelToJSON(
  object: GreenplumSegmentConfig_LogLevel
): string {
  switch (object) {
    case GreenplumSegmentConfig_LogLevel.LOG_LEVEL_UNSPECIFIED:
      return "LOG_LEVEL_UNSPECIFIED";
    case GreenplumSegmentConfig_LogLevel.TRACE:
      return "TRACE";
    case GreenplumSegmentConfig_LogLevel.DEBUG:
      return "DEBUG";
    case GreenplumSegmentConfig_LogLevel.INFORMATION:
      return "INFORMATION";
    case GreenplumSegmentConfig_LogLevel.WARNING:
      return "WARNING";
    case GreenplumSegmentConfig_LogLevel.ERROR:
      return "ERROR";
    default:
      return "UNKNOWN";
  }
}

export enum GreenplumSegmentConfig_GPResourceManager {
  GP_RESOURCE_MANAGER_UNSPECIFIED = 0,
  QUEUE = 1,
  GROUP = 2,
  UNRECOGNIZED = -1,
}

export function greenplumSegmentConfig_GPResourceManagerFromJSON(
  object: any
): GreenplumSegmentConfig_GPResourceManager {
  switch (object) {
    case 0:
    case "GP_RESOURCE_MANAGER_UNSPECIFIED":
      return GreenplumSegmentConfig_GPResourceManager.GP_RESOURCE_MANAGER_UNSPECIFIED;
    case 1:
    case "QUEUE":
      return GreenplumSegmentConfig_GPResourceManager.QUEUE;
    case 2:
    case "GROUP":
      return GreenplumSegmentConfig_GPResourceManager.GROUP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GreenplumSegmentConfig_GPResourceManager.UNRECOGNIZED;
  }
}

export function greenplumSegmentConfig_GPResourceManagerToJSON(
  object: GreenplumSegmentConfig_GPResourceManager
): string {
  switch (object) {
    case GreenplumSegmentConfig_GPResourceManager.GP_RESOURCE_MANAGER_UNSPECIFIED:
      return "GP_RESOURCE_MANAGER_UNSPECIFIED";
    case GreenplumSegmentConfig_GPResourceManager.QUEUE:
      return "QUEUE";
    case GreenplumSegmentConfig_GPResourceManager.GROUP:
      return "GROUP";
    default:
      return "UNKNOWN";
  }
}

export interface GreenplumMasterConfigSet {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumMasterConfigSet";
  /**
   * Effective settings for a Greenplum master subcluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?: GreenplumMasterConfig;
  /** User-defined settings for a Greenplum master subcluster. */
  userConfig?: GreenplumMasterConfig;
  /** Default configuration for a Greenplum master subcluster. */
  defaultConfig?: GreenplumMasterConfig;
}

export interface GreenplumSegmentConfigSet {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumSegmentConfigSet";
  /**
   * Effective settings for a Greenplum segment subcluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?: GreenplumSegmentConfig;
  /** User-defined settings for a Greenplum segment subcluster. */
  userConfig?: GreenplumSegmentConfig;
  /** Default configuration for a Greenplum segment subcluster. */
  defaultConfig?: GreenplumSegmentConfig;
}

const baseResources: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.Resources",
  resourcePresetId: "",
  diskSize: 0,
  diskTypeId: "",
};

export const Resources = {
  $type: "yandex.cloud.mdb.greenplum.v1.Resources" as const,

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

const baseConnectionPoolerConfig: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.ConnectionPoolerConfig",
  mode: 0,
};

export const ConnectionPoolerConfig = {
  $type: "yandex.cloud.mdb.greenplum.v1.ConnectionPoolerConfig" as const,

  encode(
    message: ConnectionPoolerConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    if (message.size !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.size! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.clientIdleTimeout !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.clientIdleTimeout!,
        },
        writer.uint32(26).fork()
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
          message.mode = reader.int32() as any;
          break;
        case 2:
          message.size = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 3:
          message.clientIdleTimeout = Int64Value.decode(
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

  fromJSON(object: any): ConnectionPoolerConfig {
    const message = { ...baseConnectionPoolerConfig } as ConnectionPoolerConfig;
    message.mode =
      object.mode !== undefined && object.mode !== null
        ? connectionPoolerConfig_PoolModeFromJSON(object.mode)
        : 0;
    message.size =
      object.size !== undefined && object.size !== null
        ? Number(object.size)
        : undefined;
    message.clientIdleTimeout =
      object.clientIdleTimeout !== undefined &&
      object.clientIdleTimeout !== null
        ? Number(object.clientIdleTimeout)
        : undefined;
    return message;
  },

  toJSON(message: ConnectionPoolerConfig): unknown {
    const obj: any = {};
    message.mode !== undefined &&
      (obj.mode = connectionPoolerConfig_PoolModeToJSON(message.mode));
    message.size !== undefined && (obj.size = message.size);
    message.clientIdleTimeout !== undefined &&
      (obj.clientIdleTimeout = message.clientIdleTimeout);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConnectionPoolerConfig>, I>>(
    object: I
  ): ConnectionPoolerConfig {
    const message = { ...baseConnectionPoolerConfig } as ConnectionPoolerConfig;
    message.mode = object.mode ?? 0;
    message.size = object.size ?? undefined;
    message.clientIdleTimeout = object.clientIdleTimeout ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ConnectionPoolerConfig.$type, ConnectionPoolerConfig);

const baseMasterSubclusterConfig: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.MasterSubclusterConfig",
};

export const MasterSubclusterConfig = {
  $type: "yandex.cloud.mdb.greenplum.v1.MasterSubclusterConfig" as const,

  encode(
    message: MasterSubclusterConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    if (message.config !== undefined) {
      GreenplumMasterConfigSet.encode(
        message.config,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MasterSubclusterConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMasterSubclusterConfig } as MasterSubclusterConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        case 2:
          message.config = GreenplumMasterConfigSet.decode(
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

  fromJSON(object: any): MasterSubclusterConfig {
    const message = { ...baseMasterSubclusterConfig } as MasterSubclusterConfig;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    message.config =
      object.config !== undefined && object.config !== null
        ? GreenplumMasterConfigSet.fromJSON(object.config)
        : undefined;
    return message;
  },

  toJSON(message: MasterSubclusterConfig): unknown {
    const obj: any = {};
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    message.config !== undefined &&
      (obj.config = message.config
        ? GreenplumMasterConfigSet.toJSON(message.config)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MasterSubclusterConfig>, I>>(
    object: I
  ): MasterSubclusterConfig {
    const message = { ...baseMasterSubclusterConfig } as MasterSubclusterConfig;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    message.config =
      object.config !== undefined && object.config !== null
        ? GreenplumMasterConfigSet.fromPartial(object.config)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MasterSubclusterConfig.$type, MasterSubclusterConfig);

const baseSegmentSubclusterConfig: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.SegmentSubclusterConfig",
};

export const SegmentSubclusterConfig = {
  $type: "yandex.cloud.mdb.greenplum.v1.SegmentSubclusterConfig" as const,

  encode(
    message: SegmentSubclusterConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    if (message.config !== undefined) {
      GreenplumSegmentConfigSet.encode(
        message.config,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SegmentSubclusterConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSegmentSubclusterConfig,
    } as SegmentSubclusterConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        case 2:
          message.config = GreenplumSegmentConfigSet.decode(
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

  fromJSON(object: any): SegmentSubclusterConfig {
    const message = {
      ...baseSegmentSubclusterConfig,
    } as SegmentSubclusterConfig;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    message.config =
      object.config !== undefined && object.config !== null
        ? GreenplumSegmentConfigSet.fromJSON(object.config)
        : undefined;
    return message;
  },

  toJSON(message: SegmentSubclusterConfig): unknown {
    const obj: any = {};
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    message.config !== undefined &&
      (obj.config = message.config
        ? GreenplumSegmentConfigSet.toJSON(message.config)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SegmentSubclusterConfig>, I>>(
    object: I
  ): SegmentSubclusterConfig {
    const message = {
      ...baseSegmentSubclusterConfig,
    } as SegmentSubclusterConfig;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    message.config =
      object.config !== undefined && object.config !== null
        ? GreenplumSegmentConfigSet.fromPartial(object.config)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(SegmentSubclusterConfig.$type, SegmentSubclusterConfig);

const baseGreenplumMasterConfig: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumMasterConfig",
  logLevel: 0,
  logStatement: 0,
  gpAutostatsModeInFunctions: 0,
};

export const GreenplumMasterConfig = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumMasterConfig" as const,

  encode(
    message: GreenplumMasterConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.logLevel !== 0) {
      writer.uint32(8).int32(message.logLevel);
    }
    if (message.maxConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxConnections! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.timezone !== undefined) {
      StringValue.encode(
        { $type: "google.protobuf.StringValue", value: message.timezone! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.pool !== undefined) {
      ConnectionPoolerConfig.encode(
        message.pool,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.maxPreparedTransactions !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxPreparedTransactions!,
        },
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.runawayDetectorActivationPercent !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.runawayDetectorActivationPercent!,
        },
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.tcpKeepalivesCount !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.tcpKeepalivesCount!,
        },
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.tcpKeepalivesInterval !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.tcpKeepalivesInterval!,
        },
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.readableExternalTableTimeout !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.readableExternalTableTimeout!,
        },
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.gpInterconnectSndQueueDepth !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.gpInterconnectSndQueueDepth!,
        },
        writer.uint32(162).fork()
      ).ldelim();
    }
    if (message.gpInterconnectQueueDepth !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.gpInterconnectQueueDepth!,
        },
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.logStatement !== 0) {
      writer.uint32(176).int32(message.logStatement);
    }
    if (message.logDuration !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.logDuration! },
        writer.uint32(186).fork()
      ).ldelim();
    }
    if (message.optimizerAnalyzeRootPartition !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.optimizerAnalyzeRootPartition!,
        },
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.gpExternalMaxSegs !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.gpExternalMaxSegs!,
        },
        writer.uint32(202).fork()
      ).ldelim();
    }
    if (message.gpFtsProbeTimeout !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.gpFtsProbeTimeout!,
        },
        writer.uint32(210).fork()
      ).ldelim();
    }
    if (message.gpWorkfileCompression !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.gpWorkfileCompression!,
        },
        writer.uint32(218).fork()
      ).ldelim();
    }
    if (message.gpAutostatsModeInFunctions !== 0) {
      writer.uint32(224).int32(message.gpAutostatsModeInFunctions);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GreenplumMasterConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGreenplumMasterConfig } as GreenplumMasterConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.logLevel = reader.int32() as any;
          break;
        case 2:
          message.maxConnections = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.timezone = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 4:
          message.pool = ConnectionPoolerConfig.decode(reader, reader.uint32());
          break;
        case 13:
          message.maxPreparedTransactions = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 14:
          message.runawayDetectorActivationPercent = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 15:
          message.tcpKeepalivesCount = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 16:
          message.tcpKeepalivesInterval = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 19:
          message.readableExternalTableTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 20:
          message.gpInterconnectSndQueueDepth = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 21:
          message.gpInterconnectQueueDepth = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 22:
          message.logStatement = reader.int32() as any;
          break;
        case 23:
          message.logDuration = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 24:
          message.optimizerAnalyzeRootPartition = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 25:
          message.gpExternalMaxSegs = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 26:
          message.gpFtsProbeTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 27:
          message.gpWorkfileCompression = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 28:
          message.gpAutostatsModeInFunctions = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GreenplumMasterConfig {
    const message = { ...baseGreenplumMasterConfig } as GreenplumMasterConfig;
    message.logLevel =
      object.logLevel !== undefined && object.logLevel !== null
        ? greenplumMasterConfig_LogLevelFromJSON(object.logLevel)
        : 0;
    message.maxConnections =
      object.maxConnections !== undefined && object.maxConnections !== null
        ? Number(object.maxConnections)
        : undefined;
    message.timezone =
      object.timezone !== undefined && object.timezone !== null
        ? String(object.timezone)
        : undefined;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? ConnectionPoolerConfig.fromJSON(object.pool)
        : undefined;
    message.maxPreparedTransactions =
      object.maxPreparedTransactions !== undefined &&
      object.maxPreparedTransactions !== null
        ? Number(object.maxPreparedTransactions)
        : undefined;
    message.runawayDetectorActivationPercent =
      object.runawayDetectorActivationPercent !== undefined &&
      object.runawayDetectorActivationPercent !== null
        ? Number(object.runawayDetectorActivationPercent)
        : undefined;
    message.tcpKeepalivesCount =
      object.tcpKeepalivesCount !== undefined &&
      object.tcpKeepalivesCount !== null
        ? Number(object.tcpKeepalivesCount)
        : undefined;
    message.tcpKeepalivesInterval =
      object.tcpKeepalivesInterval !== undefined &&
      object.tcpKeepalivesInterval !== null
        ? Number(object.tcpKeepalivesInterval)
        : undefined;
    message.readableExternalTableTimeout =
      object.readableExternalTableTimeout !== undefined &&
      object.readableExternalTableTimeout !== null
        ? Number(object.readableExternalTableTimeout)
        : undefined;
    message.gpInterconnectSndQueueDepth =
      object.gpInterconnectSndQueueDepth !== undefined &&
      object.gpInterconnectSndQueueDepth !== null
        ? Number(object.gpInterconnectSndQueueDepth)
        : undefined;
    message.gpInterconnectQueueDepth =
      object.gpInterconnectQueueDepth !== undefined &&
      object.gpInterconnectQueueDepth !== null
        ? Number(object.gpInterconnectQueueDepth)
        : undefined;
    message.logStatement =
      object.logStatement !== undefined && object.logStatement !== null
        ? greenplumMasterConfig_LogStatementFromJSON(object.logStatement)
        : 0;
    message.logDuration =
      object.logDuration !== undefined && object.logDuration !== null
        ? Boolean(object.logDuration)
        : undefined;
    message.optimizerAnalyzeRootPartition =
      object.optimizerAnalyzeRootPartition !== undefined &&
      object.optimizerAnalyzeRootPartition !== null
        ? Boolean(object.optimizerAnalyzeRootPartition)
        : undefined;
    message.gpExternalMaxSegs =
      object.gpExternalMaxSegs !== undefined &&
      object.gpExternalMaxSegs !== null
        ? Number(object.gpExternalMaxSegs)
        : undefined;
    message.gpFtsProbeTimeout =
      object.gpFtsProbeTimeout !== undefined &&
      object.gpFtsProbeTimeout !== null
        ? Number(object.gpFtsProbeTimeout)
        : undefined;
    message.gpWorkfileCompression =
      object.gpWorkfileCompression !== undefined &&
      object.gpWorkfileCompression !== null
        ? Boolean(object.gpWorkfileCompression)
        : undefined;
    message.gpAutostatsModeInFunctions =
      object.gpAutostatsModeInFunctions !== undefined &&
      object.gpAutostatsModeInFunctions !== null
        ? greenplumMasterConfig_AutostatsModeInFunctionsFromJSON(
            object.gpAutostatsModeInFunctions
          )
        : 0;
    return message;
  },

  toJSON(message: GreenplumMasterConfig): unknown {
    const obj: any = {};
    message.logLevel !== undefined &&
      (obj.logLevel = greenplumMasterConfig_LogLevelToJSON(message.logLevel));
    message.maxConnections !== undefined &&
      (obj.maxConnections = message.maxConnections);
    message.timezone !== undefined && (obj.timezone = message.timezone);
    message.pool !== undefined &&
      (obj.pool = message.pool
        ? ConnectionPoolerConfig.toJSON(message.pool)
        : undefined);
    message.maxPreparedTransactions !== undefined &&
      (obj.maxPreparedTransactions = message.maxPreparedTransactions);
    message.runawayDetectorActivationPercent !== undefined &&
      (obj.runawayDetectorActivationPercent =
        message.runawayDetectorActivationPercent);
    message.tcpKeepalivesCount !== undefined &&
      (obj.tcpKeepalivesCount = message.tcpKeepalivesCount);
    message.tcpKeepalivesInterval !== undefined &&
      (obj.tcpKeepalivesInterval = message.tcpKeepalivesInterval);
    message.readableExternalTableTimeout !== undefined &&
      (obj.readableExternalTableTimeout = message.readableExternalTableTimeout);
    message.gpInterconnectSndQueueDepth !== undefined &&
      (obj.gpInterconnectSndQueueDepth = message.gpInterconnectSndQueueDepth);
    message.gpInterconnectQueueDepth !== undefined &&
      (obj.gpInterconnectQueueDepth = message.gpInterconnectQueueDepth);
    message.logStatement !== undefined &&
      (obj.logStatement = greenplumMasterConfig_LogStatementToJSON(
        message.logStatement
      ));
    message.logDuration !== undefined &&
      (obj.logDuration = message.logDuration);
    message.optimizerAnalyzeRootPartition !== undefined &&
      (obj.optimizerAnalyzeRootPartition =
        message.optimizerAnalyzeRootPartition);
    message.gpExternalMaxSegs !== undefined &&
      (obj.gpExternalMaxSegs = message.gpExternalMaxSegs);
    message.gpFtsProbeTimeout !== undefined &&
      (obj.gpFtsProbeTimeout = message.gpFtsProbeTimeout);
    message.gpWorkfileCompression !== undefined &&
      (obj.gpWorkfileCompression = message.gpWorkfileCompression);
    message.gpAutostatsModeInFunctions !== undefined &&
      (obj.gpAutostatsModeInFunctions =
        greenplumMasterConfig_AutostatsModeInFunctionsToJSON(
          message.gpAutostatsModeInFunctions
        ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GreenplumMasterConfig>, I>>(
    object: I
  ): GreenplumMasterConfig {
    const message = { ...baseGreenplumMasterConfig } as GreenplumMasterConfig;
    message.logLevel = object.logLevel ?? 0;
    message.maxConnections = object.maxConnections ?? undefined;
    message.timezone = object.timezone ?? undefined;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? ConnectionPoolerConfig.fromPartial(object.pool)
        : undefined;
    message.maxPreparedTransactions =
      object.maxPreparedTransactions ?? undefined;
    message.runawayDetectorActivationPercent =
      object.runawayDetectorActivationPercent ?? undefined;
    message.tcpKeepalivesCount = object.tcpKeepalivesCount ?? undefined;
    message.tcpKeepalivesInterval = object.tcpKeepalivesInterval ?? undefined;
    message.readableExternalTableTimeout =
      object.readableExternalTableTimeout ?? undefined;
    message.gpInterconnectSndQueueDepth =
      object.gpInterconnectSndQueueDepth ?? undefined;
    message.gpInterconnectQueueDepth =
      object.gpInterconnectQueueDepth ?? undefined;
    message.logStatement = object.logStatement ?? 0;
    message.logDuration = object.logDuration ?? undefined;
    message.optimizerAnalyzeRootPartition =
      object.optimizerAnalyzeRootPartition ?? undefined;
    message.gpExternalMaxSegs = object.gpExternalMaxSegs ?? undefined;
    message.gpFtsProbeTimeout = object.gpFtsProbeTimeout ?? undefined;
    message.gpWorkfileCompression = object.gpWorkfileCompression ?? undefined;
    message.gpAutostatsModeInFunctions = object.gpAutostatsModeInFunctions ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GreenplumMasterConfig.$type, GreenplumMasterConfig);

const baseGreenplumSegmentConfig: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumSegmentConfig",
  logLevel: 0,
  gpResourceManager: 0,
};

export const GreenplumSegmentConfig = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumSegmentConfig" as const,

  encode(
    message: GreenplumSegmentConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.logLevel !== 0) {
      writer.uint32(8).int32(message.logLevel);
    }
    if (message.maxConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxConnections! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.maxSlotWalKeepSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxSlotWalKeepSize!,
        },
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.gpWorkfileLimitPerSegment !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.gpWorkfileLimitPerSegment!,
        },
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.gpWorkfileLimitPerQuery !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.gpWorkfileLimitPerQuery!,
        },
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.gpWorkfileLimitFilesPerQuery !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.gpWorkfileLimitFilesPerQuery!,
        },
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.gpResourceManager !== 0) {
      writer.uint32(88).int32(message.gpResourceManager);
    }
    if (message.gpResourceGroupCpuLimit !== undefined) {
      FloatValue.encode(
        {
          $type: "google.protobuf.FloatValue",
          value: message.gpResourceGroupCpuLimit!,
        },
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.gpResourceGroupMemoryLimit !== undefined) {
      FloatValue.encode(
        {
          $type: "google.protobuf.FloatValue",
          value: message.gpResourceGroupMemoryLimit!,
        },
        writer.uint32(146).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GreenplumSegmentConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGreenplumSegmentConfig } as GreenplumSegmentConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.logLevel = reader.int32() as any;
          break;
        case 2:
          message.maxConnections = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 7:
          message.maxSlotWalKeepSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 8:
          message.gpWorkfileLimitPerSegment = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 9:
          message.gpWorkfileLimitPerQuery = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 10:
          message.gpWorkfileLimitFilesPerQuery = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 11:
          message.gpResourceManager = reader.int32() as any;
          break;
        case 17:
          message.gpResourceGroupCpuLimit = FloatValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 18:
          message.gpResourceGroupMemoryLimit = FloatValue.decode(
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

  fromJSON(object: any): GreenplumSegmentConfig {
    const message = { ...baseGreenplumSegmentConfig } as GreenplumSegmentConfig;
    message.logLevel =
      object.logLevel !== undefined && object.logLevel !== null
        ? greenplumSegmentConfig_LogLevelFromJSON(object.logLevel)
        : 0;
    message.maxConnections =
      object.maxConnections !== undefined && object.maxConnections !== null
        ? Number(object.maxConnections)
        : undefined;
    message.maxSlotWalKeepSize =
      object.maxSlotWalKeepSize !== undefined &&
      object.maxSlotWalKeepSize !== null
        ? Number(object.maxSlotWalKeepSize)
        : undefined;
    message.gpWorkfileLimitPerSegment =
      object.gpWorkfileLimitPerSegment !== undefined &&
      object.gpWorkfileLimitPerSegment !== null
        ? Number(object.gpWorkfileLimitPerSegment)
        : undefined;
    message.gpWorkfileLimitPerQuery =
      object.gpWorkfileLimitPerQuery !== undefined &&
      object.gpWorkfileLimitPerQuery !== null
        ? Number(object.gpWorkfileLimitPerQuery)
        : undefined;
    message.gpWorkfileLimitFilesPerQuery =
      object.gpWorkfileLimitFilesPerQuery !== undefined &&
      object.gpWorkfileLimitFilesPerQuery !== null
        ? Number(object.gpWorkfileLimitFilesPerQuery)
        : undefined;
    message.gpResourceManager =
      object.gpResourceManager !== undefined &&
      object.gpResourceManager !== null
        ? greenplumSegmentConfig_GPResourceManagerFromJSON(
            object.gpResourceManager
          )
        : 0;
    message.gpResourceGroupCpuLimit =
      object.gpResourceGroupCpuLimit !== undefined &&
      object.gpResourceGroupCpuLimit !== null
        ? Number(object.gpResourceGroupCpuLimit)
        : undefined;
    message.gpResourceGroupMemoryLimit =
      object.gpResourceGroupMemoryLimit !== undefined &&
      object.gpResourceGroupMemoryLimit !== null
        ? Number(object.gpResourceGroupMemoryLimit)
        : undefined;
    return message;
  },

  toJSON(message: GreenplumSegmentConfig): unknown {
    const obj: any = {};
    message.logLevel !== undefined &&
      (obj.logLevel = greenplumSegmentConfig_LogLevelToJSON(message.logLevel));
    message.maxConnections !== undefined &&
      (obj.maxConnections = message.maxConnections);
    message.maxSlotWalKeepSize !== undefined &&
      (obj.maxSlotWalKeepSize = message.maxSlotWalKeepSize);
    message.gpWorkfileLimitPerSegment !== undefined &&
      (obj.gpWorkfileLimitPerSegment = message.gpWorkfileLimitPerSegment);
    message.gpWorkfileLimitPerQuery !== undefined &&
      (obj.gpWorkfileLimitPerQuery = message.gpWorkfileLimitPerQuery);
    message.gpWorkfileLimitFilesPerQuery !== undefined &&
      (obj.gpWorkfileLimitFilesPerQuery = message.gpWorkfileLimitFilesPerQuery);
    message.gpResourceManager !== undefined &&
      (obj.gpResourceManager = greenplumSegmentConfig_GPResourceManagerToJSON(
        message.gpResourceManager
      ));
    message.gpResourceGroupCpuLimit !== undefined &&
      (obj.gpResourceGroupCpuLimit = message.gpResourceGroupCpuLimit);
    message.gpResourceGroupMemoryLimit !== undefined &&
      (obj.gpResourceGroupMemoryLimit = message.gpResourceGroupMemoryLimit);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GreenplumSegmentConfig>, I>>(
    object: I
  ): GreenplumSegmentConfig {
    const message = { ...baseGreenplumSegmentConfig } as GreenplumSegmentConfig;
    message.logLevel = object.logLevel ?? 0;
    message.maxConnections = object.maxConnections ?? undefined;
    message.maxSlotWalKeepSize = object.maxSlotWalKeepSize ?? undefined;
    message.gpWorkfileLimitPerSegment =
      object.gpWorkfileLimitPerSegment ?? undefined;
    message.gpWorkfileLimitPerQuery =
      object.gpWorkfileLimitPerQuery ?? undefined;
    message.gpWorkfileLimitFilesPerQuery =
      object.gpWorkfileLimitFilesPerQuery ?? undefined;
    message.gpResourceManager = object.gpResourceManager ?? 0;
    message.gpResourceGroupCpuLimit =
      object.gpResourceGroupCpuLimit ?? undefined;
    message.gpResourceGroupMemoryLimit =
      object.gpResourceGroupMemoryLimit ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(GreenplumSegmentConfig.$type, GreenplumSegmentConfig);

const baseGreenplumMasterConfigSet: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumMasterConfigSet",
};

export const GreenplumMasterConfigSet = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumMasterConfigSet" as const,

  encode(
    message: GreenplumMasterConfigSet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      GreenplumMasterConfig.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      GreenplumMasterConfig.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      GreenplumMasterConfig.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GreenplumMasterConfigSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGreenplumMasterConfigSet,
    } as GreenplumMasterConfigSet;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = GreenplumMasterConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = GreenplumMasterConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.defaultConfig = GreenplumMasterConfig.decode(
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

  fromJSON(object: any): GreenplumMasterConfigSet {
    const message = {
      ...baseGreenplumMasterConfigSet,
    } as GreenplumMasterConfigSet;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? GreenplumMasterConfig.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? GreenplumMasterConfig.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? GreenplumMasterConfig.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: GreenplumMasterConfigSet): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? GreenplumMasterConfig.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? GreenplumMasterConfig.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? GreenplumMasterConfig.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GreenplumMasterConfigSet>, I>>(
    object: I
  ): GreenplumMasterConfigSet {
    const message = {
      ...baseGreenplumMasterConfigSet,
    } as GreenplumMasterConfigSet;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? GreenplumMasterConfig.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? GreenplumMasterConfig.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? GreenplumMasterConfig.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  GreenplumMasterConfigSet.$type,
  GreenplumMasterConfigSet
);

const baseGreenplumSegmentConfigSet: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumSegmentConfigSet",
};

export const GreenplumSegmentConfigSet = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumSegmentConfigSet" as const,

  encode(
    message: GreenplumSegmentConfigSet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      GreenplumSegmentConfig.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      GreenplumSegmentConfig.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      GreenplumSegmentConfig.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GreenplumSegmentConfigSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGreenplumSegmentConfigSet,
    } as GreenplumSegmentConfigSet;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = GreenplumSegmentConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = GreenplumSegmentConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.defaultConfig = GreenplumSegmentConfig.decode(
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

  fromJSON(object: any): GreenplumSegmentConfigSet {
    const message = {
      ...baseGreenplumSegmentConfigSet,
    } as GreenplumSegmentConfigSet;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? GreenplumSegmentConfig.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? GreenplumSegmentConfig.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? GreenplumSegmentConfig.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: GreenplumSegmentConfigSet): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? GreenplumSegmentConfig.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? GreenplumSegmentConfig.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? GreenplumSegmentConfig.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GreenplumSegmentConfigSet>, I>>(
    object: I
  ): GreenplumSegmentConfigSet {
    const message = {
      ...baseGreenplumSegmentConfigSet,
    } as GreenplumSegmentConfigSet;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? GreenplumSegmentConfig.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? GreenplumSegmentConfig.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? GreenplumSegmentConfig.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  GreenplumSegmentConfigSet.$type,
  GreenplumSegmentConfigSet
);

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
