/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Int64Value, BoolValue } from "../../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.mdb.greenplum.v1";

export enum LogStatement {
  LOG_STATEMENT_UNSPECIFIED = 0,
  /** NONE - None statements are logged. */
  NONE = 1,
  /** DDL - Logs all data definition commands like `CREATE`, `ALTER`, and `DROP`. Default value. */
  DDL = 2,
  /** MOD - Logs all `DDL` statements, plus `INSERT`, `UPDATE`, `DELETE`, `TRUNCATE`, and `COPY FROM`. */
  MOD = 3,
  /** ALL - Logs all statements. */
  ALL = 4,
  UNRECOGNIZED = -1,
}

export function logStatementFromJSON(object: any): LogStatement {
  switch (object) {
    case 0:
    case "LOG_STATEMENT_UNSPECIFIED":
      return LogStatement.LOG_STATEMENT_UNSPECIFIED;
    case 1:
    case "NONE":
      return LogStatement.NONE;
    case 2:
    case "DDL":
      return LogStatement.DDL;
    case 3:
    case "MOD":
      return LogStatement.MOD;
    case 4:
    case "ALL":
      return LogStatement.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LogStatement.UNRECOGNIZED;
  }
}

export function logStatementToJSON(object: LogStatement): string {
  switch (object) {
    case LogStatement.LOG_STATEMENT_UNSPECIFIED:
      return "LOG_STATEMENT_UNSPECIFIED";
    case LogStatement.NONE:
      return "NONE";
    case LogStatement.DDL:
      return "DDL";
    case LogStatement.MOD:
      return "MOD";
    case LogStatement.ALL:
      return "ALL";
    default:
      return "UNKNOWN";
  }
}

export interface Resources {
  $type: "yandex.cloud.mdb.greenplum.v1.Resources";
  /**
   * ID of the preset for computational resources allocated to a host.
   *
   * Available presets are listed in the [documentation](/docs/managed-greenplum/concepts/instance-types).
   */
  resourcePresetId: string;
  /** Volume of the storage used by the host, in bytes. */
  diskSize: number;
  /** Type of the storage used by the host: `network-hdd`, `network-ssd` or `local-ssd`. */
  diskTypeId: string;
}

export interface ConnectionPoolerConfig {
  $type: "yandex.cloud.mdb.greenplum.v1.ConnectionPoolerConfig";
  /** Route server pool mode. */
  mode: ConnectionPoolerConfig_PoolMode;
  /**
   * The number of servers in the server pool. Clients are placed in a wait queue when all servers are busy.
   *
   * Set to zero to disable the limit.
   */
  size?: number;
  /**
   * Server pool idle timeout, in seconds.
   *
   * A server connection closes after being idle for the specified time.
   *
   * Set to zero to disable the limit.
   */
  clientIdleTimeout?: number;
}

export enum ConnectionPoolerConfig_PoolMode {
  POOL_MODE_UNSPECIFIED = 0,
  /** SESSION - Assign server connection to a client until it disconnects. Default value. */
  SESSION = 1,
  /** TRANSACTION - Assign server connection to a client for a transaction processing. */
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

export interface BackgroundActivityStartAt {
  $type: "yandex.cloud.mdb.greenplum.v1.BackgroundActivityStartAt";
  hours: number;
  minutes: number;
}

export interface TableSizes {
  $type: "yandex.cloud.mdb.greenplum.v1.TableSizes";
  starts: BackgroundActivityStartAt[];
}

export interface AnalyzeAndVacuum {
  $type: "yandex.cloud.mdb.greenplum.v1.AnalyzeAndVacuum";
  start?: BackgroundActivityStartAt;
  /** in seconds 24*60*60-1 = 86399 */
  analyzeTimeout?: number;
  /** in seconds 24*60*60-1 = 86399 */
  vacuumTimeout?: number;
}

export interface BackgroundActivitiesConfig {
  $type: "yandex.cloud.mdb.greenplum.v1.BackgroundActivitiesConfig";
  tableSizes?: TableSizes;
  analyzeAndVacuum?: AnalyzeAndVacuum;
}

export interface MasterSubclusterConfig {
  $type: "yandex.cloud.mdb.greenplum.v1.MasterSubclusterConfig";
  /** Computational resources allocated to Greenplum® master subcluster hosts. */
  resources?: Resources;
}

export interface SegmentSubclusterConfig {
  $type: "yandex.cloud.mdb.greenplum.v1.SegmentSubclusterConfig";
  /** Computational resources allocated to Greenplum® segment subcluster hosts. */
  resources?: Resources;
}

export interface GreenplumConfig6 {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6";
  /** Maximum number of inbound connections on master segment */
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
   * Sets the maximum number of transactions that can be in the "prepared" state simultaneously
   * https://www.postgresql.org/docs/9.6/runtime-config-resource.html
   */
  maxPreparedTransactions?: number;
  /**
   * Specifies whether the temporary files created, when a hash aggregation or hash join operation spills to disk, are compressed.
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_workfile_compression
   */
  gpWorkfileCompression?: boolean;
  /**
   * Sets the maximum memory limit for a query. Helps avoid out-of-memory errors on a segment host during query processing as a result of setting statement_mem too high.
   * Taking into account the configuration of a single segment host, calculate max_statement_mem as follows:
   * (seghost_physical_memory) / (average_number_concurrent_queries)
   * When changing both max_statement_mem and statement_mem, max_statement_mem must be changed first, or listed first in the postgresql.conf file.
   * https://greenplum.docs.pivotal.io/6-19/ref_guide/config_params/guc-list.html#max_statement_mem
   * Default value is 2097152000 (2000MB)
   */
  maxStatementMem?: number;
  /**
   * Controls which SQL statements are logged. DDL logs all data definition commands like CREATE, ALTER, and DROP commands.
   * MOD logs all DDL statements, plus INSERT, UPDATE, DELETE, TRUNCATE, and COPY FROM.
   * PREPARE and EXPLAIN ANALYZE statements are also logged if their contained command is of an appropriate type.
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#log_statement
   * Default value is ddl
   */
  logStatement: LogStatement;
  /** https://docs.vmware.com/en/VMware-Tanzu-Greenplum/6/greenplum-database/GUID-ref_guide-config_params-guc-list.html#gp_add_column_inherits_table_setting */
  gpAddColumnInheritsTableSetting?: boolean;
}

export interface Greenplumconfig617 {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_17";
  /** Maximum number of inbound connections on master segment. */
  maxConnections?: number;
  /**
   * The maximum size of WAL files that replication slots are allowed to retain in the `pg_wal` directory at checkpoint time.
   *
   * More info in [PostgreSQL® documentation](https://www.postgresql.org/docs/current/runtime-config-replication.html).
   */
  maxSlotWalKeepSize?: number;
  /**
   * The maximum total disk size that all running queries are allowed to use for creating temporary spill files at each segment.
   *
   * The default value is 0 (no limit).
   *
   * More info in [Greenplum® documentation](https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_per_segment).
   */
  gpWorkfileLimitPerSegment?: number;
  /**
   * The maximum disk size that an individual query is allowed to use for creating temporary spill files at each segment.
   *
   * The default value is 0 (no limit).
   *
   * More info in [Greenplum® documentation](https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_per_query).
   */
  gpWorkfileLimitPerQuery?: number;
  /**
   * The maximum number of temporary spill files allowed per query at each segment.
   *
   * Spill files, also known as workfiles, are created when a query requires more memory than there is allocated.
   *
   * The current query is terminated if the limit is exceeded.
   *
   * Set to zero to disable the limit.
   *
   * Master session reloads if the parameter changes.
   *
   * Default value is 10000.
   *
   * More info in [Greenplum® documentation](https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_files_per_query).
   */
  gpWorkfileLimitFilesPerQuery?: number;
  /**
   * The maximum number of transactions that can be in the `prepared` state simultaneously.
   *
   * More info in [PostgreSQL® documentation](https://www.postgresql.org/docs/9.6/runtime-config-resource.html).
   */
  maxPreparedTransactions?: number;
  /**
   * Whether the spill files are compressed or not.
   *
   * More info in [Greenplum® documentation](https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_compression).
   */
  gpWorkfileCompression?: boolean;
}

export interface Greenplumconfig619 {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_19";
  /** Maximum number of inbound connections on master segment. */
  maxConnections?: number;
  /**
   * The maximum size of WAL files that replication slots are allowed to retain in the `pg_wal` directory at checkpoint time.
   *
   * More info in [PostgreSQL® documentation](https://www.postgresql.org/docs/current/runtime-config-replication.html).
   */
  maxSlotWalKeepSize?: number;
  /**
   * The maximum total disk size that all running queries are allowed to use for creating temporary spill files at each segment.
   *
   * The default value is 0 (no limit).
   *
   * More info in [Greenplum® documentation](https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_per_segment).
   */
  gpWorkfileLimitPerSegment?: number;
  /**
   * The maximum disk size that an individual query is allowed to use for creating temporary spill files at each segment.
   *
   * The default value is 0 (no limit).
   *
   * More info in [Greenplum® documentation](https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_per_query).
   */
  gpWorkfileLimitPerQuery?: number;
  /**
   * The maximum number of temporary spill files allowed per query at each segment.
   *
   * Spill files, also known as workfiles, are created when a query requires more memory than there is allocated.
   *
   * The current query is terminated if the limit is exceeded.
   *
   * Set to zero to disable the limit.
   *
   * Master session reloads if the parameter changes.
   *
   * Default value is 10000.
   *
   * More info in [Greenplum® documentation](https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_files_per_query).
   */
  gpWorkfileLimitFilesPerQuery?: number;
  /**
   * The maximum number of transactions that can be in the `prepared` state simultaneously.
   *
   * More info in [PostgreSQL® documentation](https://www.postgresql.org/docs/9.6/runtime-config-resource.html).
   */
  maxPreparedTransactions?: number;
  /**
   * Whether the spill files are compressed or not.
   *
   * More info in [Greenplum® documentation](https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_compression).
   */
  gpWorkfileCompression?: boolean;
  /**
   * The maximum memory limit for a query, in bytes.
   *
   * Helps to avoid out-of-memory errors on a segment host during query processing as a result of setting `statement_mem` too high.
   *
   * Taking into account the configuration of a single segment host, calculate [max_statement_mem] as follows: `seghost_physical_memory` / `average_number_concurrent_queries`.
   *
   * When changing both [max_statement_mem] and `statement_mem`, [max_statement_mem] must be changed first, or listed first in the `postgresql.conf` file.
   *
   * Default value is 2097152000 (2000 MB).
   *
   * More info in [Greenplum® documentation](https://greenplum.docs.pivotal.io/6-19/ref_guide/config_params/guc-list.html#max_statement_mem).
   */
  maxStatementMem?: number;
  /**
   * Logged SQL statements.
   *
   * `PREPARE` and `EXPLAIN ANALYZE` statements are also logged if their contained command belongs to an appropriate type.
   *
   * More info in [Greenplum® documentation](https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#log_statement).
   */
  logStatement: LogStatement;
}

export interface Greenplumconfig621 {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_21";
  /** Maximum number of inbound connections on master segment */
  maxConnections?: number;
  /**
   * Specify the maximum size of WAL files that replication slots are allowed to retain in the pg_wal directory at checkpoint time.
   * https://www.postgresql.org/docs/current/runtime-config-replication.html
   */
  maxSlotWalKeepSize?: number;
  /**
   * Sets the maximum total disk size that all running queries are allowed to use for creating temporary spill files at each segment.
   * The default value is 0, which means a limit is not enforced.
   * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_per_segment
   */
  gpWorkfileLimitPerSegment?: number;
  /**
   * Sets the maximum disk size an individual query is allowed to use for creating temporary spill files at each segment.
   * The default value is 0, which means a limit is not enforced.
   * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_per_query
   */
  gpWorkfileLimitPerQuery?: number;
  /**
   * Sets the maximum number of temporary spill files (also known as workfiles) allowed per query per segment.
   * Spill files are created when executing a query that requires more memory than it is allocated.
   * The current query is terminated when the limit is exceeded.
   * Set the value to 0 (zero) to allow an unlimited number of spill files. master session reload
   * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_files_per_query
   * Default value is 10000
   */
  gpWorkfileLimitFilesPerQuery?: number;
  /**
   * Sets the maximum number of transactions that can be in the "prepared" state simultaneously
   * https://www.postgresql.org/docs/9.6/runtime-config-resource.html
   */
  maxPreparedTransactions?: number;
  /**
   * Specifies whether the temporary files created, when a hash aggregation or hash join operation spills to disk, are compressed.
   * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_compression
   */
  gpWorkfileCompression?: boolean;
  /**
   * Sets the maximum memory limit for a query. Helps avoid out-of-memory errors on a segment host during query processing as a result of setting statement_mem too high.
   * Taking into account the configuration of a single segment host, calculate max_statement_mem as follows:
   * (seghost_physical_memory) / (average_number_concurrent_queries)
   * When changing both max_statement_mem and statement_mem, max_statement_mem must be changed first, or listed first in the postgresql.conf file.
   * https://greenplum.docs.pivotal.io/6-19/ref_guide/config_params/guc-list.html#max_statement_mem
   * Default value is 2097152000 (2000MB)
   */
  maxStatementMem?: number;
  /**
   * Controls which SQL statements are logged. DDL logs all data definition commands like CREATE, ALTER, and DROP commands.
   * MOD logs all DDL statements, plus INSERT, UPDATE, DELETE, TRUNCATE, and COPY FROM.
   * PREPARE and EXPLAIN ANALYZE statements are also logged if their contained command is of an appropriate type.
   * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#log_statement
   * Default value is ddl
   */
  logStatement: LogStatement;
  /** https://docs.vmware.com/en/VMware-Tanzu-Greenplum/6/greenplum-database/GUID-ref_guide-config_params-guc-list.html#gp_add_column_inherits_table_setting */
  gpAddColumnInheritsTableSetting?: boolean;
}

export interface Greenplumconfig622 {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_22";
  /** Maximum number of inbound connections on master segment */
  maxConnections?: number;
  /**
   * Specify the maximum size of WAL files that replication slots are allowed to retain in the pg_wal directory at checkpoint time.
   * https://www.postgresql.org/docs/current/runtime-config-replication.html
   */
  maxSlotWalKeepSize?: number;
  /**
   * Sets the maximum total disk size that all running queries are allowed to use for creating temporary spill files at each segment.
   * The default value is 0, which means a limit is not enforced.
   * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_per_segment
   */
  gpWorkfileLimitPerSegment?: number;
  /**
   * Sets the maximum disk size an individual query is allowed to use for creating temporary spill files at each segment.
   * The default value is 0, which means a limit is not enforced.
   * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_per_query
   */
  gpWorkfileLimitPerQuery?: number;
  /**
   * Sets the maximum number of temporary spill files (also known as workfiles) allowed per query per segment.
   * Spill files are created when executing a query that requires more memory than it is allocated.
   * The current query is terminated when the limit is exceeded.
   * Set the value to 0 (zero) to allow an unlimited number of spill files. master session reload
   * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_files_per_query
   * Default value is 10000
   */
  gpWorkfileLimitFilesPerQuery?: number;
  /**
   * Sets the maximum number of transactions that can be in the "prepared" state simultaneously
   * https://www.postgresql.org/docs/9.6/runtime-config-resource.html
   */
  maxPreparedTransactions?: number;
  /**
   * Specifies whether the temporary files created, when a hash aggregation or hash join operation spills to disk, are compressed.
   * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_compression
   */
  gpWorkfileCompression?: boolean;
  /**
   * Sets the maximum memory limit for a query. Helps avoid out-of-memory errors on a segment host during query processing as a result of setting statement_mem too high.
   * Taking into account the configuration of a single segment host, calculate max_statement_mem as follows:
   * (seghost_physical_memory) / (average_number_concurrent_queries)
   * When changing both max_statement_mem and statement_mem, max_statement_mem must be changed first, or listed first in the postgresql.conf file.
   * https://greenplum.docs.pivotal.io/6-19/ref_guide/config_params/guc-list.html#max_statement_mem
   * Default value is 2097152000 (2000MB)
   */
  maxStatementMem?: number;
  /**
   * Controls which SQL statements are logged. DDL logs all data definition commands like CREATE, ALTER, and DROP commands.
   * MOD logs all DDL statements, plus INSERT, UPDATE, DELETE, TRUNCATE, and COPY FROM.
   * PREPARE and EXPLAIN ANALYZE statements are also logged if their contained command is of an appropriate type.
   * https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#log_statement
   * Default value is ddl
   */
  logStatement: LogStatement;
  /** https://docs.vmware.com/en/VMware-Tanzu-Greenplum/6/greenplum-database/GUID-ref_guide-config_params-guc-list.html#gp_add_column_inherits_table_setting */
  gpAddColumnInheritsTableSetting?: boolean;
}

/** Configuration settings version 6.17 */
export interface Greenplumconfigset617 {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_17";
  /** Effective settings for a Greenplum® cluster (a combination of settings defined in [user_config] and [default_config]). */
  effectiveConfig?: Greenplumconfig617;
  /** User-defined settings for a Greenplum® cluster. */
  userConfig?: Greenplumconfig617;
  /** Default configuration for a Greenplum® cluster. */
  defaultConfig?: Greenplumconfig617;
}

/** Configuration settings version 6.19 */
export interface Greenplumconfigset619 {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_19";
  /** Effective settings for a Greenplum® cluster (a combination of settings defined in [user_config] and [default_config]). */
  effectiveConfig?: Greenplumconfig619;
  /** User-defined settings for a Greenplum® cluster. */
  userConfig?: Greenplumconfig619;
  /** Default configuration for a Greenplum® cluster. */
  defaultConfig?: Greenplumconfig619;
}

export interface Greenplumconfigset621 {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_21";
  /** Effective settings for a Greenplum®  cluster (a combination of settings defined in [user_config] and [default_config]). */
  effectiveConfig?: Greenplumconfig621;
  /** User-defined settings for a Greenplum® cluster. */
  userConfig?: Greenplumconfig621;
  /** Default configuration for a Greenplum® cluster. */
  defaultConfig?: Greenplumconfig621;
}

export interface Greenplumconfigset622 {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_22";
  /** Effective settings for a Greenplum®  cluster (a combination of settings defined in [user_config] and [default_config]). */
  effectiveConfig?: Greenplumconfig622;
  /** User-defined settings for a Greenplum® cluster. */
  userConfig?: Greenplumconfig622;
  /** Default configuration for a Greenplum® cluster. */
  defaultConfig?: Greenplumconfig622;
}

export interface GreenplumConfigSet6 {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6";
  /**
   * Effective settings for a Greenplum (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?: GreenplumConfig6;
  /** User-defined settings for a Greenplum. */
  userConfig?: GreenplumConfig6;
  /** Default configuration for a Greenplum. */
  defaultConfig?: GreenplumConfig6;
}

export interface ConnectionPoolerConfigSet {
  $type: "yandex.cloud.mdb.greenplum.v1.ConnectionPoolerConfigSet";
  /** Effective settings for an Odyssey® pooler (a combination of settings defined in [ConnectionPoolerConfigSet.user_config] and [ConnectionPoolerConfigSet.default_config]). */
  effectiveConfig?: ConnectionPoolerConfig;
  /** User-defined settings for an Odyssey® pooler. */
  userConfig?: ConnectionPoolerConfig;
  /** Default configuration for an Odyssey® pooler. */
  defaultConfig?: ConnectionPoolerConfig;
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

const baseBackgroundActivityStartAt: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.BackgroundActivityStartAt",
  hours: 0,
  minutes: 0,
};

export const BackgroundActivityStartAt = {
  $type: "yandex.cloud.mdb.greenplum.v1.BackgroundActivityStartAt" as const,

  encode(
    message: BackgroundActivityStartAt,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hours !== 0) {
      writer.uint32(8).int64(message.hours);
    }
    if (message.minutes !== 0) {
      writer.uint32(16).int64(message.minutes);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BackgroundActivityStartAt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBackgroundActivityStartAt,
    } as BackgroundActivityStartAt;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hours = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.minutes = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BackgroundActivityStartAt {
    const message = {
      ...baseBackgroundActivityStartAt,
    } as BackgroundActivityStartAt;
    message.hours =
      object.hours !== undefined && object.hours !== null
        ? Number(object.hours)
        : 0;
    message.minutes =
      object.minutes !== undefined && object.minutes !== null
        ? Number(object.minutes)
        : 0;
    return message;
  },

  toJSON(message: BackgroundActivityStartAt): unknown {
    const obj: any = {};
    message.hours !== undefined && (obj.hours = Math.round(message.hours));
    message.minutes !== undefined &&
      (obj.minutes = Math.round(message.minutes));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BackgroundActivityStartAt>, I>>(
    object: I
  ): BackgroundActivityStartAt {
    const message = {
      ...baseBackgroundActivityStartAt,
    } as BackgroundActivityStartAt;
    message.hours = object.hours ?? 0;
    message.minutes = object.minutes ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  BackgroundActivityStartAt.$type,
  BackgroundActivityStartAt
);

const baseTableSizes: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.TableSizes",
};

export const TableSizes = {
  $type: "yandex.cloud.mdb.greenplum.v1.TableSizes" as const,

  encode(
    message: TableSizes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.starts) {
      BackgroundActivityStartAt.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableSizes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTableSizes } as TableSizes;
    message.starts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.starts.push(
            BackgroundActivityStartAt.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TableSizes {
    const message = { ...baseTableSizes } as TableSizes;
    message.starts = (object.starts ?? []).map((e: any) =>
      BackgroundActivityStartAt.fromJSON(e)
    );
    return message;
  },

  toJSON(message: TableSizes): unknown {
    const obj: any = {};
    if (message.starts) {
      obj.starts = message.starts.map((e) =>
        e ? BackgroundActivityStartAt.toJSON(e) : undefined
      );
    } else {
      obj.starts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TableSizes>, I>>(
    object: I
  ): TableSizes {
    const message = { ...baseTableSizes } as TableSizes;
    message.starts =
      object.starts?.map((e) => BackgroundActivityStartAt.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(TableSizes.$type, TableSizes);

const baseAnalyzeAndVacuum: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.AnalyzeAndVacuum",
};

export const AnalyzeAndVacuum = {
  $type: "yandex.cloud.mdb.greenplum.v1.AnalyzeAndVacuum" as const,

  encode(
    message: AnalyzeAndVacuum,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.start !== undefined) {
      BackgroundActivityStartAt.encode(
        message.start,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.analyzeTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.analyzeTimeout! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.vacuumTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.vacuumTimeout! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzeAndVacuum {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAnalyzeAndVacuum } as AnalyzeAndVacuum;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = BackgroundActivityStartAt.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.analyzeTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.vacuumTimeout = Int64Value.decode(
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

  fromJSON(object: any): AnalyzeAndVacuum {
    const message = { ...baseAnalyzeAndVacuum } as AnalyzeAndVacuum;
    message.start =
      object.start !== undefined && object.start !== null
        ? BackgroundActivityStartAt.fromJSON(object.start)
        : undefined;
    message.analyzeTimeout =
      object.analyzeTimeout !== undefined && object.analyzeTimeout !== null
        ? Number(object.analyzeTimeout)
        : undefined;
    message.vacuumTimeout =
      object.vacuumTimeout !== undefined && object.vacuumTimeout !== null
        ? Number(object.vacuumTimeout)
        : undefined;
    return message;
  },

  toJSON(message: AnalyzeAndVacuum): unknown {
    const obj: any = {};
    message.start !== undefined &&
      (obj.start = message.start
        ? BackgroundActivityStartAt.toJSON(message.start)
        : undefined);
    message.analyzeTimeout !== undefined &&
      (obj.analyzeTimeout = message.analyzeTimeout);
    message.vacuumTimeout !== undefined &&
      (obj.vacuumTimeout = message.vacuumTimeout);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AnalyzeAndVacuum>, I>>(
    object: I
  ): AnalyzeAndVacuum {
    const message = { ...baseAnalyzeAndVacuum } as AnalyzeAndVacuum;
    message.start =
      object.start !== undefined && object.start !== null
        ? BackgroundActivityStartAt.fromPartial(object.start)
        : undefined;
    message.analyzeTimeout = object.analyzeTimeout ?? undefined;
    message.vacuumTimeout = object.vacuumTimeout ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(AnalyzeAndVacuum.$type, AnalyzeAndVacuum);

const baseBackgroundActivitiesConfig: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.BackgroundActivitiesConfig",
};

export const BackgroundActivitiesConfig = {
  $type: "yandex.cloud.mdb.greenplum.v1.BackgroundActivitiesConfig" as const,

  encode(
    message: BackgroundActivitiesConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tableSizes !== undefined) {
      TableSizes.encode(message.tableSizes, writer.uint32(10).fork()).ldelim();
    }
    if (message.analyzeAndVacuum !== undefined) {
      AnalyzeAndVacuum.encode(
        message.analyzeAndVacuum,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BackgroundActivitiesConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBackgroundActivitiesConfig,
    } as BackgroundActivitiesConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tableSizes = TableSizes.decode(reader, reader.uint32());
          break;
        case 2:
          message.analyzeAndVacuum = AnalyzeAndVacuum.decode(
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

  fromJSON(object: any): BackgroundActivitiesConfig {
    const message = {
      ...baseBackgroundActivitiesConfig,
    } as BackgroundActivitiesConfig;
    message.tableSizes =
      object.tableSizes !== undefined && object.tableSizes !== null
        ? TableSizes.fromJSON(object.tableSizes)
        : undefined;
    message.analyzeAndVacuum =
      object.analyzeAndVacuum !== undefined && object.analyzeAndVacuum !== null
        ? AnalyzeAndVacuum.fromJSON(object.analyzeAndVacuum)
        : undefined;
    return message;
  },

  toJSON(message: BackgroundActivitiesConfig): unknown {
    const obj: any = {};
    message.tableSizes !== undefined &&
      (obj.tableSizes = message.tableSizes
        ? TableSizes.toJSON(message.tableSizes)
        : undefined);
    message.analyzeAndVacuum !== undefined &&
      (obj.analyzeAndVacuum = message.analyzeAndVacuum
        ? AnalyzeAndVacuum.toJSON(message.analyzeAndVacuum)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BackgroundActivitiesConfig>, I>>(
    object: I
  ): BackgroundActivitiesConfig {
    const message = {
      ...baseBackgroundActivitiesConfig,
    } as BackgroundActivitiesConfig;
    message.tableSizes =
      object.tableSizes !== undefined && object.tableSizes !== null
        ? TableSizes.fromPartial(object.tableSizes)
        : undefined;
    message.analyzeAndVacuum =
      object.analyzeAndVacuum !== undefined && object.analyzeAndVacuum !== null
        ? AnalyzeAndVacuum.fromPartial(object.analyzeAndVacuum)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  BackgroundActivitiesConfig.$type,
  BackgroundActivitiesConfig
);

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
    return message;
  },

  toJSON(message: MasterSubclusterConfig): unknown {
    const obj: any = {};
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
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
    return message;
  },

  toJSON(message: SegmentSubclusterConfig): unknown {
    const obj: any = {};
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
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
    return message;
  },
};

messageTypeRegistry.set(SegmentSubclusterConfig.$type, SegmentSubclusterConfig);

const baseGreenplumConfig6: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6",
  logStatement: 0,
};

export const GreenplumConfig6 = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6" as const,

  encode(
    message: GreenplumConfig6,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maxConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxConnections! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.maxSlotWalKeepSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxSlotWalKeepSize!,
        },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.gpWorkfileLimitPerSegment !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.gpWorkfileLimitPerSegment!,
        },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.gpWorkfileLimitPerQuery !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.gpWorkfileLimitPerQuery!,
        },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.gpWorkfileLimitFilesPerQuery !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.gpWorkfileLimitFilesPerQuery!,
        },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.maxPreparedTransactions !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxPreparedTransactions!,
        },
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.gpWorkfileCompression !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.gpWorkfileCompression!,
        },
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.maxStatementMem !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxStatementMem!,
        },
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.logStatement !== 0) {
      writer.uint32(72).int32(message.logStatement);
    }
    if (message.gpAddColumnInheritsTableSetting !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.gpAddColumnInheritsTableSetting!,
        },
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumConfig6 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGreenplumConfig6 } as GreenplumConfig6;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxConnections = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 2:
          message.maxSlotWalKeepSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.gpWorkfileLimitPerSegment = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 4:
          message.gpWorkfileLimitPerQuery = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 5:
          message.gpWorkfileLimitFilesPerQuery = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 6:
          message.maxPreparedTransactions = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 7:
          message.gpWorkfileCompression = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 8:
          message.maxStatementMem = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 9:
          message.logStatement = reader.int32() as any;
          break;
        case 10:
          message.gpAddColumnInheritsTableSetting = BoolValue.decode(
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

  fromJSON(object: any): GreenplumConfig6 {
    const message = { ...baseGreenplumConfig6 } as GreenplumConfig6;
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
    message.maxPreparedTransactions =
      object.maxPreparedTransactions !== undefined &&
      object.maxPreparedTransactions !== null
        ? Number(object.maxPreparedTransactions)
        : undefined;
    message.gpWorkfileCompression =
      object.gpWorkfileCompression !== undefined &&
      object.gpWorkfileCompression !== null
        ? Boolean(object.gpWorkfileCompression)
        : undefined;
    message.maxStatementMem =
      object.maxStatementMem !== undefined && object.maxStatementMem !== null
        ? Number(object.maxStatementMem)
        : undefined;
    message.logStatement =
      object.logStatement !== undefined && object.logStatement !== null
        ? logStatementFromJSON(object.logStatement)
        : 0;
    message.gpAddColumnInheritsTableSetting =
      object.gpAddColumnInheritsTableSetting !== undefined &&
      object.gpAddColumnInheritsTableSetting !== null
        ? Boolean(object.gpAddColumnInheritsTableSetting)
        : undefined;
    return message;
  },

  toJSON(message: GreenplumConfig6): unknown {
    const obj: any = {};
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
    message.maxPreparedTransactions !== undefined &&
      (obj.maxPreparedTransactions = message.maxPreparedTransactions);
    message.gpWorkfileCompression !== undefined &&
      (obj.gpWorkfileCompression = message.gpWorkfileCompression);
    message.maxStatementMem !== undefined &&
      (obj.maxStatementMem = message.maxStatementMem);
    message.logStatement !== undefined &&
      (obj.logStatement = logStatementToJSON(message.logStatement));
    message.gpAddColumnInheritsTableSetting !== undefined &&
      (obj.gpAddColumnInheritsTableSetting =
        message.gpAddColumnInheritsTableSetting);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GreenplumConfig6>, I>>(
    object: I
  ): GreenplumConfig6 {
    const message = { ...baseGreenplumConfig6 } as GreenplumConfig6;
    message.maxConnections = object.maxConnections ?? undefined;
    message.maxSlotWalKeepSize = object.maxSlotWalKeepSize ?? undefined;
    message.gpWorkfileLimitPerSegment =
      object.gpWorkfileLimitPerSegment ?? undefined;
    message.gpWorkfileLimitPerQuery =
      object.gpWorkfileLimitPerQuery ?? undefined;
    message.gpWorkfileLimitFilesPerQuery =
      object.gpWorkfileLimitFilesPerQuery ?? undefined;
    message.maxPreparedTransactions =
      object.maxPreparedTransactions ?? undefined;
    message.gpWorkfileCompression = object.gpWorkfileCompression ?? undefined;
    message.maxStatementMem = object.maxStatementMem ?? undefined;
    message.logStatement = object.logStatement ?? 0;
    message.gpAddColumnInheritsTableSetting =
      object.gpAddColumnInheritsTableSetting ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(GreenplumConfig6.$type, GreenplumConfig6);

const baseGreenplumconfig617: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_17",
};

export const Greenplumconfig617 = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_17" as const,

  encode(
    message: Greenplumconfig617,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maxConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxConnections! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.maxSlotWalKeepSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxSlotWalKeepSize!,
        },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.gpWorkfileLimitPerSegment !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.gpWorkfileLimitPerSegment!,
        },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.gpWorkfileLimitPerQuery !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.gpWorkfileLimitPerQuery!,
        },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.gpWorkfileLimitFilesPerQuery !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.gpWorkfileLimitFilesPerQuery!,
        },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.maxPreparedTransactions !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxPreparedTransactions!,
        },
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.gpWorkfileCompression !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.gpWorkfileCompression!,
        },
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Greenplumconfig617 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGreenplumconfig617 } as Greenplumconfig617;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxConnections = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 2:
          message.maxSlotWalKeepSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.gpWorkfileLimitPerSegment = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 4:
          message.gpWorkfileLimitPerQuery = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 5:
          message.gpWorkfileLimitFilesPerQuery = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 6:
          message.maxPreparedTransactions = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 7:
          message.gpWorkfileCompression = BoolValue.decode(
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

  fromJSON(object: any): Greenplumconfig617 {
    const message = { ...baseGreenplumconfig617 } as Greenplumconfig617;
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
    message.maxPreparedTransactions =
      object.maxPreparedTransactions !== undefined &&
      object.maxPreparedTransactions !== null
        ? Number(object.maxPreparedTransactions)
        : undefined;
    message.gpWorkfileCompression =
      object.gpWorkfileCompression !== undefined &&
      object.gpWorkfileCompression !== null
        ? Boolean(object.gpWorkfileCompression)
        : undefined;
    return message;
  },

  toJSON(message: Greenplumconfig617): unknown {
    const obj: any = {};
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
    message.maxPreparedTransactions !== undefined &&
      (obj.maxPreparedTransactions = message.maxPreparedTransactions);
    message.gpWorkfileCompression !== undefined &&
      (obj.gpWorkfileCompression = message.gpWorkfileCompression);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Greenplumconfig617>, I>>(
    object: I
  ): Greenplumconfig617 {
    const message = { ...baseGreenplumconfig617 } as Greenplumconfig617;
    message.maxConnections = object.maxConnections ?? undefined;
    message.maxSlotWalKeepSize = object.maxSlotWalKeepSize ?? undefined;
    message.gpWorkfileLimitPerSegment =
      object.gpWorkfileLimitPerSegment ?? undefined;
    message.gpWorkfileLimitPerQuery =
      object.gpWorkfileLimitPerQuery ?? undefined;
    message.gpWorkfileLimitFilesPerQuery =
      object.gpWorkfileLimitFilesPerQuery ?? undefined;
    message.maxPreparedTransactions =
      object.maxPreparedTransactions ?? undefined;
    message.gpWorkfileCompression = object.gpWorkfileCompression ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Greenplumconfig617.$type, Greenplumconfig617);

const baseGreenplumconfig619: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_19",
  logStatement: 0,
};

export const Greenplumconfig619 = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_19" as const,

  encode(
    message: Greenplumconfig619,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maxConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxConnections! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.maxSlotWalKeepSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxSlotWalKeepSize!,
        },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.gpWorkfileLimitPerSegment !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.gpWorkfileLimitPerSegment!,
        },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.gpWorkfileLimitPerQuery !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.gpWorkfileLimitPerQuery!,
        },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.gpWorkfileLimitFilesPerQuery !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.gpWorkfileLimitFilesPerQuery!,
        },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.maxPreparedTransactions !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxPreparedTransactions!,
        },
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.gpWorkfileCompression !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.gpWorkfileCompression!,
        },
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.maxStatementMem !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxStatementMem!,
        },
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.logStatement !== 0) {
      writer.uint32(72).int32(message.logStatement);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Greenplumconfig619 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGreenplumconfig619 } as Greenplumconfig619;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxConnections = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 2:
          message.maxSlotWalKeepSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.gpWorkfileLimitPerSegment = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 4:
          message.gpWorkfileLimitPerQuery = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 5:
          message.gpWorkfileLimitFilesPerQuery = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 6:
          message.maxPreparedTransactions = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 7:
          message.gpWorkfileCompression = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 8:
          message.maxStatementMem = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 9:
          message.logStatement = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Greenplumconfig619 {
    const message = { ...baseGreenplumconfig619 } as Greenplumconfig619;
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
    message.maxPreparedTransactions =
      object.maxPreparedTransactions !== undefined &&
      object.maxPreparedTransactions !== null
        ? Number(object.maxPreparedTransactions)
        : undefined;
    message.gpWorkfileCompression =
      object.gpWorkfileCompression !== undefined &&
      object.gpWorkfileCompression !== null
        ? Boolean(object.gpWorkfileCompression)
        : undefined;
    message.maxStatementMem =
      object.maxStatementMem !== undefined && object.maxStatementMem !== null
        ? Number(object.maxStatementMem)
        : undefined;
    message.logStatement =
      object.logStatement !== undefined && object.logStatement !== null
        ? logStatementFromJSON(object.logStatement)
        : 0;
    return message;
  },

  toJSON(message: Greenplumconfig619): unknown {
    const obj: any = {};
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
    message.maxPreparedTransactions !== undefined &&
      (obj.maxPreparedTransactions = message.maxPreparedTransactions);
    message.gpWorkfileCompression !== undefined &&
      (obj.gpWorkfileCompression = message.gpWorkfileCompression);
    message.maxStatementMem !== undefined &&
      (obj.maxStatementMem = message.maxStatementMem);
    message.logStatement !== undefined &&
      (obj.logStatement = logStatementToJSON(message.logStatement));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Greenplumconfig619>, I>>(
    object: I
  ): Greenplumconfig619 {
    const message = { ...baseGreenplumconfig619 } as Greenplumconfig619;
    message.maxConnections = object.maxConnections ?? undefined;
    message.maxSlotWalKeepSize = object.maxSlotWalKeepSize ?? undefined;
    message.gpWorkfileLimitPerSegment =
      object.gpWorkfileLimitPerSegment ?? undefined;
    message.gpWorkfileLimitPerQuery =
      object.gpWorkfileLimitPerQuery ?? undefined;
    message.gpWorkfileLimitFilesPerQuery =
      object.gpWorkfileLimitFilesPerQuery ?? undefined;
    message.maxPreparedTransactions =
      object.maxPreparedTransactions ?? undefined;
    message.gpWorkfileCompression = object.gpWorkfileCompression ?? undefined;
    message.maxStatementMem = object.maxStatementMem ?? undefined;
    message.logStatement = object.logStatement ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Greenplumconfig619.$type, Greenplumconfig619);

const baseGreenplumconfig621: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_21",
  logStatement: 0,
};

export const Greenplumconfig621 = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_21" as const,

  encode(
    message: Greenplumconfig621,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maxConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxConnections! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.maxSlotWalKeepSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxSlotWalKeepSize!,
        },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.gpWorkfileLimitPerSegment !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.gpWorkfileLimitPerSegment!,
        },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.gpWorkfileLimitPerQuery !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.gpWorkfileLimitPerQuery!,
        },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.gpWorkfileLimitFilesPerQuery !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.gpWorkfileLimitFilesPerQuery!,
        },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.maxPreparedTransactions !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxPreparedTransactions!,
        },
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.gpWorkfileCompression !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.gpWorkfileCompression!,
        },
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.maxStatementMem !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxStatementMem!,
        },
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.logStatement !== 0) {
      writer.uint32(72).int32(message.logStatement);
    }
    if (message.gpAddColumnInheritsTableSetting !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.gpAddColumnInheritsTableSetting!,
        },
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Greenplumconfig621 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGreenplumconfig621 } as Greenplumconfig621;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxConnections = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 2:
          message.maxSlotWalKeepSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.gpWorkfileLimitPerSegment = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 4:
          message.gpWorkfileLimitPerQuery = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 5:
          message.gpWorkfileLimitFilesPerQuery = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 6:
          message.maxPreparedTransactions = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 7:
          message.gpWorkfileCompression = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 8:
          message.maxStatementMem = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 9:
          message.logStatement = reader.int32() as any;
          break;
        case 10:
          message.gpAddColumnInheritsTableSetting = BoolValue.decode(
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

  fromJSON(object: any): Greenplumconfig621 {
    const message = { ...baseGreenplumconfig621 } as Greenplumconfig621;
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
    message.maxPreparedTransactions =
      object.maxPreparedTransactions !== undefined &&
      object.maxPreparedTransactions !== null
        ? Number(object.maxPreparedTransactions)
        : undefined;
    message.gpWorkfileCompression =
      object.gpWorkfileCompression !== undefined &&
      object.gpWorkfileCompression !== null
        ? Boolean(object.gpWorkfileCompression)
        : undefined;
    message.maxStatementMem =
      object.maxStatementMem !== undefined && object.maxStatementMem !== null
        ? Number(object.maxStatementMem)
        : undefined;
    message.logStatement =
      object.logStatement !== undefined && object.logStatement !== null
        ? logStatementFromJSON(object.logStatement)
        : 0;
    message.gpAddColumnInheritsTableSetting =
      object.gpAddColumnInheritsTableSetting !== undefined &&
      object.gpAddColumnInheritsTableSetting !== null
        ? Boolean(object.gpAddColumnInheritsTableSetting)
        : undefined;
    return message;
  },

  toJSON(message: Greenplumconfig621): unknown {
    const obj: any = {};
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
    message.maxPreparedTransactions !== undefined &&
      (obj.maxPreparedTransactions = message.maxPreparedTransactions);
    message.gpWorkfileCompression !== undefined &&
      (obj.gpWorkfileCompression = message.gpWorkfileCompression);
    message.maxStatementMem !== undefined &&
      (obj.maxStatementMem = message.maxStatementMem);
    message.logStatement !== undefined &&
      (obj.logStatement = logStatementToJSON(message.logStatement));
    message.gpAddColumnInheritsTableSetting !== undefined &&
      (obj.gpAddColumnInheritsTableSetting =
        message.gpAddColumnInheritsTableSetting);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Greenplumconfig621>, I>>(
    object: I
  ): Greenplumconfig621 {
    const message = { ...baseGreenplumconfig621 } as Greenplumconfig621;
    message.maxConnections = object.maxConnections ?? undefined;
    message.maxSlotWalKeepSize = object.maxSlotWalKeepSize ?? undefined;
    message.gpWorkfileLimitPerSegment =
      object.gpWorkfileLimitPerSegment ?? undefined;
    message.gpWorkfileLimitPerQuery =
      object.gpWorkfileLimitPerQuery ?? undefined;
    message.gpWorkfileLimitFilesPerQuery =
      object.gpWorkfileLimitFilesPerQuery ?? undefined;
    message.maxPreparedTransactions =
      object.maxPreparedTransactions ?? undefined;
    message.gpWorkfileCompression = object.gpWorkfileCompression ?? undefined;
    message.maxStatementMem = object.maxStatementMem ?? undefined;
    message.logStatement = object.logStatement ?? 0;
    message.gpAddColumnInheritsTableSetting =
      object.gpAddColumnInheritsTableSetting ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Greenplumconfig621.$type, Greenplumconfig621);

const baseGreenplumconfig622: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_22",
  logStatement: 0,
};

export const Greenplumconfig622 = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_22" as const,

  encode(
    message: Greenplumconfig622,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maxConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxConnections! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.maxSlotWalKeepSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxSlotWalKeepSize!,
        },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.gpWorkfileLimitPerSegment !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.gpWorkfileLimitPerSegment!,
        },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.gpWorkfileLimitPerQuery !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.gpWorkfileLimitPerQuery!,
        },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.gpWorkfileLimitFilesPerQuery !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.gpWorkfileLimitFilesPerQuery!,
        },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.maxPreparedTransactions !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxPreparedTransactions!,
        },
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.gpWorkfileCompression !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.gpWorkfileCompression!,
        },
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.maxStatementMem !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxStatementMem!,
        },
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.logStatement !== 0) {
      writer.uint32(72).int32(message.logStatement);
    }
    if (message.gpAddColumnInheritsTableSetting !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.gpAddColumnInheritsTableSetting!,
        },
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Greenplumconfig622 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGreenplumconfig622 } as Greenplumconfig622;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxConnections = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 2:
          message.maxSlotWalKeepSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.gpWorkfileLimitPerSegment = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 4:
          message.gpWorkfileLimitPerQuery = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 5:
          message.gpWorkfileLimitFilesPerQuery = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 6:
          message.maxPreparedTransactions = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 7:
          message.gpWorkfileCompression = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 8:
          message.maxStatementMem = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 9:
          message.logStatement = reader.int32() as any;
          break;
        case 10:
          message.gpAddColumnInheritsTableSetting = BoolValue.decode(
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

  fromJSON(object: any): Greenplumconfig622 {
    const message = { ...baseGreenplumconfig622 } as Greenplumconfig622;
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
    message.maxPreparedTransactions =
      object.maxPreparedTransactions !== undefined &&
      object.maxPreparedTransactions !== null
        ? Number(object.maxPreparedTransactions)
        : undefined;
    message.gpWorkfileCompression =
      object.gpWorkfileCompression !== undefined &&
      object.gpWorkfileCompression !== null
        ? Boolean(object.gpWorkfileCompression)
        : undefined;
    message.maxStatementMem =
      object.maxStatementMem !== undefined && object.maxStatementMem !== null
        ? Number(object.maxStatementMem)
        : undefined;
    message.logStatement =
      object.logStatement !== undefined && object.logStatement !== null
        ? logStatementFromJSON(object.logStatement)
        : 0;
    message.gpAddColumnInheritsTableSetting =
      object.gpAddColumnInheritsTableSetting !== undefined &&
      object.gpAddColumnInheritsTableSetting !== null
        ? Boolean(object.gpAddColumnInheritsTableSetting)
        : undefined;
    return message;
  },

  toJSON(message: Greenplumconfig622): unknown {
    const obj: any = {};
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
    message.maxPreparedTransactions !== undefined &&
      (obj.maxPreparedTransactions = message.maxPreparedTransactions);
    message.gpWorkfileCompression !== undefined &&
      (obj.gpWorkfileCompression = message.gpWorkfileCompression);
    message.maxStatementMem !== undefined &&
      (obj.maxStatementMem = message.maxStatementMem);
    message.logStatement !== undefined &&
      (obj.logStatement = logStatementToJSON(message.logStatement));
    message.gpAddColumnInheritsTableSetting !== undefined &&
      (obj.gpAddColumnInheritsTableSetting =
        message.gpAddColumnInheritsTableSetting);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Greenplumconfig622>, I>>(
    object: I
  ): Greenplumconfig622 {
    const message = { ...baseGreenplumconfig622 } as Greenplumconfig622;
    message.maxConnections = object.maxConnections ?? undefined;
    message.maxSlotWalKeepSize = object.maxSlotWalKeepSize ?? undefined;
    message.gpWorkfileLimitPerSegment =
      object.gpWorkfileLimitPerSegment ?? undefined;
    message.gpWorkfileLimitPerQuery =
      object.gpWorkfileLimitPerQuery ?? undefined;
    message.gpWorkfileLimitFilesPerQuery =
      object.gpWorkfileLimitFilesPerQuery ?? undefined;
    message.maxPreparedTransactions =
      object.maxPreparedTransactions ?? undefined;
    message.gpWorkfileCompression = object.gpWorkfileCompression ?? undefined;
    message.maxStatementMem = object.maxStatementMem ?? undefined;
    message.logStatement = object.logStatement ?? 0;
    message.gpAddColumnInheritsTableSetting =
      object.gpAddColumnInheritsTableSetting ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Greenplumconfig622.$type, Greenplumconfig622);

const baseGreenplumconfigset617: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_17",
};

export const Greenplumconfigset617 = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_17" as const,

  encode(
    message: Greenplumconfigset617,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      Greenplumconfig617.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      Greenplumconfig617.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      Greenplumconfig617.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Greenplumconfigset617 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGreenplumconfigset617 } as Greenplumconfigset617;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = Greenplumconfig617.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = Greenplumconfig617.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.defaultConfig = Greenplumconfig617.decode(
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

  fromJSON(object: any): Greenplumconfigset617 {
    const message = { ...baseGreenplumconfigset617 } as Greenplumconfigset617;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Greenplumconfig617.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Greenplumconfig617.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Greenplumconfig617.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: Greenplumconfigset617): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? Greenplumconfig617.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? Greenplumconfig617.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? Greenplumconfig617.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Greenplumconfigset617>, I>>(
    object: I
  ): Greenplumconfigset617 {
    const message = { ...baseGreenplumconfigset617 } as Greenplumconfigset617;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Greenplumconfig617.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Greenplumconfig617.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Greenplumconfig617.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Greenplumconfigset617.$type, Greenplumconfigset617);

const baseGreenplumconfigset619: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_19",
};

export const Greenplumconfigset619 = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_19" as const,

  encode(
    message: Greenplumconfigset619,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      Greenplumconfig619.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      Greenplumconfig619.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      Greenplumconfig619.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Greenplumconfigset619 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGreenplumconfigset619 } as Greenplumconfigset619;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = Greenplumconfig619.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = Greenplumconfig619.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.defaultConfig = Greenplumconfig619.decode(
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

  fromJSON(object: any): Greenplumconfigset619 {
    const message = { ...baseGreenplumconfigset619 } as Greenplumconfigset619;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Greenplumconfig619.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Greenplumconfig619.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Greenplumconfig619.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: Greenplumconfigset619): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? Greenplumconfig619.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? Greenplumconfig619.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? Greenplumconfig619.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Greenplumconfigset619>, I>>(
    object: I
  ): Greenplumconfigset619 {
    const message = { ...baseGreenplumconfigset619 } as Greenplumconfigset619;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Greenplumconfig619.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Greenplumconfig619.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Greenplumconfig619.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Greenplumconfigset619.$type, Greenplumconfigset619);

const baseGreenplumconfigset621: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_21",
};

export const Greenplumconfigset621 = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_21" as const,

  encode(
    message: Greenplumconfigset621,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      Greenplumconfig621.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      Greenplumconfig621.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      Greenplumconfig621.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Greenplumconfigset621 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGreenplumconfigset621 } as Greenplumconfigset621;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = Greenplumconfig621.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = Greenplumconfig621.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.defaultConfig = Greenplumconfig621.decode(
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

  fromJSON(object: any): Greenplumconfigset621 {
    const message = { ...baseGreenplumconfigset621 } as Greenplumconfigset621;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Greenplumconfig621.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Greenplumconfig621.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Greenplumconfig621.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: Greenplumconfigset621): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? Greenplumconfig621.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? Greenplumconfig621.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? Greenplumconfig621.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Greenplumconfigset621>, I>>(
    object: I
  ): Greenplumconfigset621 {
    const message = { ...baseGreenplumconfigset621 } as Greenplumconfigset621;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Greenplumconfig621.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Greenplumconfig621.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Greenplumconfig621.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Greenplumconfigset621.$type, Greenplumconfigset621);

const baseGreenplumconfigset622: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_22",
};

export const Greenplumconfigset622 = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_22" as const,

  encode(
    message: Greenplumconfigset622,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      Greenplumconfig622.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      Greenplumconfig622.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      Greenplumconfig622.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Greenplumconfigset622 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGreenplumconfigset622 } as Greenplumconfigset622;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = Greenplumconfig622.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = Greenplumconfig622.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.defaultConfig = Greenplumconfig622.decode(
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

  fromJSON(object: any): Greenplumconfigset622 {
    const message = { ...baseGreenplumconfigset622 } as Greenplumconfigset622;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Greenplumconfig622.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Greenplumconfig622.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Greenplumconfig622.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: Greenplumconfigset622): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? Greenplumconfig622.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? Greenplumconfig622.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? Greenplumconfig622.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Greenplumconfigset622>, I>>(
    object: I
  ): Greenplumconfigset622 {
    const message = { ...baseGreenplumconfigset622 } as Greenplumconfigset622;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Greenplumconfig622.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Greenplumconfig622.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Greenplumconfig622.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Greenplumconfigset622.$type, Greenplumconfigset622);

const baseGreenplumConfigSet6: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6",
};

export const GreenplumConfigSet6 = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6" as const,

  encode(
    message: GreenplumConfigSet6,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      GreenplumConfig6.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      GreenplumConfig6.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      GreenplumConfig6.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumConfigSet6 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGreenplumConfigSet6 } as GreenplumConfigSet6;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = GreenplumConfig6.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = GreenplumConfig6.decode(reader, reader.uint32());
          break;
        case 3:
          message.defaultConfig = GreenplumConfig6.decode(
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

  fromJSON(object: any): GreenplumConfigSet6 {
    const message = { ...baseGreenplumConfigSet6 } as GreenplumConfigSet6;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? GreenplumConfig6.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? GreenplumConfig6.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? GreenplumConfig6.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: GreenplumConfigSet6): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? GreenplumConfig6.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? GreenplumConfig6.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? GreenplumConfig6.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GreenplumConfigSet6>, I>>(
    object: I
  ): GreenplumConfigSet6 {
    const message = { ...baseGreenplumConfigSet6 } as GreenplumConfigSet6;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? GreenplumConfig6.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? GreenplumConfig6.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? GreenplumConfig6.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(GreenplumConfigSet6.$type, GreenplumConfigSet6);

const baseConnectionPoolerConfigSet: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.ConnectionPoolerConfigSet",
};

export const ConnectionPoolerConfigSet = {
  $type: "yandex.cloud.mdb.greenplum.v1.ConnectionPoolerConfigSet" as const,

  encode(
    message: ConnectionPoolerConfigSet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      ConnectionPoolerConfig.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      ConnectionPoolerConfig.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      ConnectionPoolerConfig.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ConnectionPoolerConfigSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseConnectionPoolerConfigSet,
    } as ConnectionPoolerConfigSet;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = ConnectionPoolerConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = ConnectionPoolerConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.defaultConfig = ConnectionPoolerConfig.decode(
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

  fromJSON(object: any): ConnectionPoolerConfigSet {
    const message = {
      ...baseConnectionPoolerConfigSet,
    } as ConnectionPoolerConfigSet;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? ConnectionPoolerConfig.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? ConnectionPoolerConfig.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? ConnectionPoolerConfig.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: ConnectionPoolerConfigSet): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? ConnectionPoolerConfig.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? ConnectionPoolerConfig.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? ConnectionPoolerConfig.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConnectionPoolerConfigSet>, I>>(
    object: I
  ): ConnectionPoolerConfigSet {
    const message = {
      ...baseConnectionPoolerConfigSet,
    } as ConnectionPoolerConfigSet;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? ConnectionPoolerConfig.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? ConnectionPoolerConfig.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? ConnectionPoolerConfig.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ConnectionPoolerConfigSet.$type,
  ConnectionPoolerConfigSet
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
