/* eslint-disable */
import { messageTypeRegistry } from "../../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  Int64Value,
  DoubleValue,
  BoolValue,
} from "../../../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.mdb.mysql.v1.config";

/** Options and structure of `MysqlConfig8_0` reflects MySQL 8.0 configuration file */
export interface Mysqlconfig80 {
  $type: "yandex.cloud.mdb.mysql.v1.config.MysqlConfig8_0";
  /**
   * Size of the InnoDB buffer pool used for caching table and index data.
   *
   * For details, see [MySQL documentation for the parameter](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_buffer_pool_size).
   */
  innodbBufferPoolSize?: number;
  /**
   * The maximum permitted number of simultaneous client connections.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_connections).
   */
  maxConnections?: number;
  /**
   * Time that it takes to process a query before it is considered slow.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_long_query_time).
   */
  longQueryTime?: number;
  /**
   * Enable writing of general query log of MySQL.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_general_log).
   */
  generalLog?: boolean;
  /**
   * Enable writing of audit log of MySQL.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/audit-log-reference.html#audit-log-options-variables).
   */
  auditLog?: boolean;
  /**
   * Server SQL mode of MySQL.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/sql-mode.html#sql-mode-setting).
   */
  sqlMode: Mysqlconfig80_SQLMode[];
  /**
   * The maximum size in bytes of one packet.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_allowed_packet).
   */
  maxAllowedPacket?: number;
  /**
   * Authentication plugin used in the managed MySQL cluster.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_default_authentication_plugin)
   */
  defaultAuthenticationPlugin: Mysqlconfig80_AuthPlugin;
  /**
   * Transaction log flush behaviour.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_flush_log_at_trx_commit)
   */
  innodbFlushLogAtTrxCommit?: number;
  /**
   * Max time in seconds for a transaction to wait for a row lock
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_lock_wait_timeout)
   */
  innodbLockWaitTimeout?: number;
  /**
   * Default transaction isolation level.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_transaction_isolation)
   */
  transactionIsolation: Mysqlconfig80_TransactionIsolation;
  /**
   * Print information about deadlocks in error log
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_print_all_deadlocks)
   */
  innodbPrintAllDeadlocks?: boolean;
  /**
   * The number of seconds to wait for more data from a connection before aborting the read.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_net_read_timeout)
   */
  netReadTimeout?: number;
  /**
   * The number of seconds to wait for a block to be written to a connection before aborting the write.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_net_write_timeout)
   */
  netWriteTimeout?: number;
  /**
   * The maximum permitted result length in bytes for the GROUP_CONCAT() function.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_group_concat_max_len)
   */
  groupConcatMaxLen?: number;
  /**
   * The maximum size of internal in-memory temporary tables.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_tmp_table_size)
   */
  tmpTableSize?: number;
  /**
   * This variable sets the maximum size to which user-created MEMORY tables are permitted to grow.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_heap_table_size)
   */
  maxHeapTableSize?: number;
  /**
   * The servers default time zone.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-options.html#option_mysqld_default-time-zone)
   */
  defaultTimeZone: string;
  /**
   * The servers default character set.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_character_set_server)
   */
  characterSetServer: string;
  /**
   * The server default collation.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_collation_server)
   */
  collationServer: string;
  /**
   * Enables Innodb adaptive hash index
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_adaptive_hash_index)
   */
  innodbAdaptiveHashIndex?: boolean;
  /**
   * Enables the NUMA interleave memory policy for allocation of the InnoDB buffer pool.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_numa_interleave)
   */
  innodbNumaInterleave?: boolean;
  /**
   * The size in bytes of the buffer that InnoDB uses to write to the log files on disk.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_log_buffer_size)
   */
  innodbLogBufferSize?: number;
  /**
   * The size in bytes of the single Innodb Redo log file.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_log_file_size)
   */
  innodbLogFileSize?: number;
  /**
   * Limits IO available for InnoDB background tasks
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_io_capacity)
   */
  innodbIoCapacity?: number;
  /**
   * Limits IO available for InnoDB background tasks
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_io_capacity_max)
   */
  innodbIoCapacityMax?: number;
  /**
   * The number of I/O threads for read operations in InnoDB.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_read_io_threads)
   */
  innodbReadIoThreads?: number;
  /**
   * The number of I/O threads for write operations in InnoDB.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_write_io_threads)
   */
  innodbWriteIoThreads?: number;
  /**
   * The number of background threads devoted to the InnoDB purge operation.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_purge_threads)
   */
  innodbPurgeThreads?: number;
  /**
   * Defines the maximum number of threads permitted inside of InnoDB.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_thread_concurrency)
   */
  innodbThreadConcurrency?: number;
  /**
   * Limits the max size of InnoDB temp tablespace
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_temp_data_file_path)
   */
  innodbTempDataFileMaxSize?: number;
  /**
   * How many threads the server should cache for reuse.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_thread_cache_size).
   */
  threadCacheSize?: number;
  /**
   * The stack size for each thread. The default is large enough for normal operation.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_thread_stack).
   */
  threadStack?: number;
  /**
   * The minimum size of the buffer that is used for plain index scans, range index scans, and joins that do not use indexes and thus perform full table scans.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_join_buffer_size).
   */
  joinBufferSize?: number;
  /**
   * Each session that must perform a sort allocates a buffer of this size.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_sort_buffer_size).
   */
  sortBufferSize?: number;
  /**
   * The number of table definitions that can be stored in the definition cache.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_table_definition_cache).
   */
  tableDefinitionCache?: number;
  /**
   * The number of open tables for all threads.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_table_open_cache).
   */
  tableOpenCache?: number;
  /**
   * The number of open tables cache instances.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_table_open_cache_instances).
   */
  tableOpenCacheInstances?: number;
  /**
   * This system variable determines whether the server enables certain nonstandard behaviors for default values and NULL-value handling in TIMESTAMP columns.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_explicit_defaults_for_timestamp).
   */
  explicitDefaultsForTimestamp?: boolean;
  /**
   * Can be used to control the operation of AUTO_INCREMENT columns.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/replication-options-master.html#sysvar_auto_increment_increment).
   */
  autoIncrementIncrement?: number;
  /**
   * Can be used to control the operation of AUTO_INCREMENT columns.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/replication-options-master.html#sysvar_auto_increment_offset).
   */
  autoIncrementOffset?: number;
  /**
   * Controls how often the MySQL server synchronizes the binary log to disk.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_sync_binlog).
   */
  syncBinlog?: number;
  /**
   * The size of the cache to hold changes to the binary log during a transaction.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_cache_size).
   */
  binlogCacheSize?: number;
  /**
   * Controls how many microseconds the binary log commit waits before synchronizing the binary log file to disk.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_group_commit_sync_delay).
   */
  binlogGroupCommitSyncDelay?: number;
  /**
   * For MySQL row-based replication, this variable determines how row images are written to the binary log.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_row_image).
   */
  binlogRowImage: Mysqlconfig80_BinlogRowImage;
  /**
   * When enabled, it causes the server to write informational log events such as row query log events into its binary log.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_rows_query_log_events).
   */
  binlogRowsQueryLogEvents?: boolean;
  /**
   * The number of replica acknowledgments the source must receive per transaction before proceeding.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/replication-options-master.html#sysvar_rpl_semi_sync_master_wait_for_slave_count).
   */
  rplSemiSyncMasterWaitForSlaveCount?: number;
  /**
   * When using a multithreaded replica, this variable specifies the policy used to decide which transactions are allowed to execute in parallel on the replica.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/replication-options-replica.html#sysvar_slave_parallel_type).
   */
  slaveParallelType: Mysqlconfig80_SlaveParallelType;
  /**
   * Sets the number of applier threads for executing replication transactions in parallel.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/replication-options-replica.html#sysvar_slave_parallel_workers).
   */
  slaveParallelWorkers?: number;
  /**
   * The time limit for regular expression matching operations performed by REGEXP_LIKE and similar functions
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/replication-options-replica.html#sysvar_regexp_time_limit).
   */
  regexpTimeLimit?: number;
  /** The size of the binary log to hold. */
  mdbPreserveBinlogBytes?: number;
  /**
   * The number of seconds the server waits for activity on an interactive connection before closing it.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_interactive_timeout).
   */
  interactiveTimeout?: number;
  /**
   * The number of seconds the server waits for activity on a noninteractive connection before closing it.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_wait_timeout).
   */
  waitTimeout?: number;
  /** Replication lag threshold (seconds) which will switch MySQL to 'offline_mode = ON' to prevent users from reading stale data. */
  mdbOfflineModeEnableLag?: number;
  /**
   * Replication lag threshold (seconds) which will switch MySQL to 'offline_mode = OFF'.
   * Should be less than mdb_offline_mode_enable_lag.
   */
  mdbOfflineModeDisableLag?: number;
  /**
   * The limit on memory consumption for the range optimizer.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_range_optimizer_max_mem_size).
   */
  rangeOptimizerMaxMemSize?: number;
  /**
   * Manages slow query log
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_slow_query_log).
   */
  slowQueryLog?: boolean;
  /**
   * Query execution time, after which query to be logged unconditionally, that is, log_slow_rate_limit will not apply to it
   *
   * For details, see [Percona documentation for the variable](https://www.percona.com/doc/percona-server/8.0/diagnostics/slow_extended.html#slow_query_log_always_write_time).
   */
  slowQueryLogAlwaysWriteTime?: number;
  /**
   * Specifies slow log granularity for log_slow_rate_limit: QUERY or SESSION
   *
   * For details, see [Percona documentation for the variable](https://www.percona.com/doc/percona-server/8.0/diagnostics/slow_extended.html#log_slow_rate_type).
   */
  logSlowRateType: Mysqlconfig80_LogSlowRateType;
  /**
   * Specifies what fraction of session/query should be logged. Logging is enabled for every nth session/query.
   *
   * For details, see [Percona documentation for the variable](https://www.percona.com/doc/percona-server/8.0/diagnostics/slow_extended.html#log_slow_rate_limit).
   */
  logSlowRateLimit?: number;
  /**
   * When TRUE, statements executed by stored procedures are logged to the slow log
   *
   * For details, see [Percona documentation for the variable](https://www.percona.com/doc/percona-server/8.0/diagnostics/slow_extended.html#log_slow_sp_statements).
   */
  logSlowSpStatements?: boolean;
  /**
   * Filters the slow log by the query's execution plan
   *
   * For details, see [Percona documentation for the variable](https://www.percona.com/doc/percona-server/8.0/diagnostics/slow_extended.html#log_slow_filter).
   */
  logSlowFilter: Mysqlconfig80_LogSlowFilterType[];
}

export enum Mysqlconfig80_SQLMode {
  SQLMODE_UNSPECIFIED = 0,
  ALLOW_INVALID_DATES = 1,
  ANSI_QUOTES = 2,
  ERROR_FOR_DIVISION_BY_ZERO = 3,
  HIGH_NOT_PRECEDENCE = 4,
  IGNORE_SPACE = 5,
  NO_AUTO_VALUE_ON_ZERO = 6,
  NO_BACKSLASH_ESCAPES = 7,
  NO_ENGINE_SUBSTITUTION = 8,
  NO_UNSIGNED_SUBTRACTION = 9,
  NO_ZERO_DATE = 10,
  NO_ZERO_IN_DATE = 11,
  ONLY_FULL_GROUP_BY = 15,
  PAD_CHAR_TO_FULL_LENGTH = 16,
  PIPES_AS_CONCAT = 17,
  REAL_AS_FLOAT = 18,
  STRICT_ALL_TABLES = 19,
  STRICT_TRANS_TABLES = 20,
  TIME_TRUNCATE_FRACTIONAL = 21,
  ANSI = 22,
  TRADITIONAL = 23,
  NO_DIR_IN_CREATE = 24,
  UNRECOGNIZED = -1,
}

export function mysqlconfig80_SQLModeFromJSON(
  object: any
): Mysqlconfig80_SQLMode {
  switch (object) {
    case 0:
    case "SQLMODE_UNSPECIFIED":
      return Mysqlconfig80_SQLMode.SQLMODE_UNSPECIFIED;
    case 1:
    case "ALLOW_INVALID_DATES":
      return Mysqlconfig80_SQLMode.ALLOW_INVALID_DATES;
    case 2:
    case "ANSI_QUOTES":
      return Mysqlconfig80_SQLMode.ANSI_QUOTES;
    case 3:
    case "ERROR_FOR_DIVISION_BY_ZERO":
      return Mysqlconfig80_SQLMode.ERROR_FOR_DIVISION_BY_ZERO;
    case 4:
    case "HIGH_NOT_PRECEDENCE":
      return Mysqlconfig80_SQLMode.HIGH_NOT_PRECEDENCE;
    case 5:
    case "IGNORE_SPACE":
      return Mysqlconfig80_SQLMode.IGNORE_SPACE;
    case 6:
    case "NO_AUTO_VALUE_ON_ZERO":
      return Mysqlconfig80_SQLMode.NO_AUTO_VALUE_ON_ZERO;
    case 7:
    case "NO_BACKSLASH_ESCAPES":
      return Mysqlconfig80_SQLMode.NO_BACKSLASH_ESCAPES;
    case 8:
    case "NO_ENGINE_SUBSTITUTION":
      return Mysqlconfig80_SQLMode.NO_ENGINE_SUBSTITUTION;
    case 9:
    case "NO_UNSIGNED_SUBTRACTION":
      return Mysqlconfig80_SQLMode.NO_UNSIGNED_SUBTRACTION;
    case 10:
    case "NO_ZERO_DATE":
      return Mysqlconfig80_SQLMode.NO_ZERO_DATE;
    case 11:
    case "NO_ZERO_IN_DATE":
      return Mysqlconfig80_SQLMode.NO_ZERO_IN_DATE;
    case 15:
    case "ONLY_FULL_GROUP_BY":
      return Mysqlconfig80_SQLMode.ONLY_FULL_GROUP_BY;
    case 16:
    case "PAD_CHAR_TO_FULL_LENGTH":
      return Mysqlconfig80_SQLMode.PAD_CHAR_TO_FULL_LENGTH;
    case 17:
    case "PIPES_AS_CONCAT":
      return Mysqlconfig80_SQLMode.PIPES_AS_CONCAT;
    case 18:
    case "REAL_AS_FLOAT":
      return Mysqlconfig80_SQLMode.REAL_AS_FLOAT;
    case 19:
    case "STRICT_ALL_TABLES":
      return Mysqlconfig80_SQLMode.STRICT_ALL_TABLES;
    case 20:
    case "STRICT_TRANS_TABLES":
      return Mysqlconfig80_SQLMode.STRICT_TRANS_TABLES;
    case 21:
    case "TIME_TRUNCATE_FRACTIONAL":
      return Mysqlconfig80_SQLMode.TIME_TRUNCATE_FRACTIONAL;
    case 22:
    case "ANSI":
      return Mysqlconfig80_SQLMode.ANSI;
    case 23:
    case "TRADITIONAL":
      return Mysqlconfig80_SQLMode.TRADITIONAL;
    case 24:
    case "NO_DIR_IN_CREATE":
      return Mysqlconfig80_SQLMode.NO_DIR_IN_CREATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mysqlconfig80_SQLMode.UNRECOGNIZED;
  }
}

export function mysqlconfig80_SQLModeToJSON(
  object: Mysqlconfig80_SQLMode
): string {
  switch (object) {
    case Mysqlconfig80_SQLMode.SQLMODE_UNSPECIFIED:
      return "SQLMODE_UNSPECIFIED";
    case Mysqlconfig80_SQLMode.ALLOW_INVALID_DATES:
      return "ALLOW_INVALID_DATES";
    case Mysqlconfig80_SQLMode.ANSI_QUOTES:
      return "ANSI_QUOTES";
    case Mysqlconfig80_SQLMode.ERROR_FOR_DIVISION_BY_ZERO:
      return "ERROR_FOR_DIVISION_BY_ZERO";
    case Mysqlconfig80_SQLMode.HIGH_NOT_PRECEDENCE:
      return "HIGH_NOT_PRECEDENCE";
    case Mysqlconfig80_SQLMode.IGNORE_SPACE:
      return "IGNORE_SPACE";
    case Mysqlconfig80_SQLMode.NO_AUTO_VALUE_ON_ZERO:
      return "NO_AUTO_VALUE_ON_ZERO";
    case Mysqlconfig80_SQLMode.NO_BACKSLASH_ESCAPES:
      return "NO_BACKSLASH_ESCAPES";
    case Mysqlconfig80_SQLMode.NO_ENGINE_SUBSTITUTION:
      return "NO_ENGINE_SUBSTITUTION";
    case Mysqlconfig80_SQLMode.NO_UNSIGNED_SUBTRACTION:
      return "NO_UNSIGNED_SUBTRACTION";
    case Mysqlconfig80_SQLMode.NO_ZERO_DATE:
      return "NO_ZERO_DATE";
    case Mysqlconfig80_SQLMode.NO_ZERO_IN_DATE:
      return "NO_ZERO_IN_DATE";
    case Mysqlconfig80_SQLMode.ONLY_FULL_GROUP_BY:
      return "ONLY_FULL_GROUP_BY";
    case Mysqlconfig80_SQLMode.PAD_CHAR_TO_FULL_LENGTH:
      return "PAD_CHAR_TO_FULL_LENGTH";
    case Mysqlconfig80_SQLMode.PIPES_AS_CONCAT:
      return "PIPES_AS_CONCAT";
    case Mysqlconfig80_SQLMode.REAL_AS_FLOAT:
      return "REAL_AS_FLOAT";
    case Mysqlconfig80_SQLMode.STRICT_ALL_TABLES:
      return "STRICT_ALL_TABLES";
    case Mysqlconfig80_SQLMode.STRICT_TRANS_TABLES:
      return "STRICT_TRANS_TABLES";
    case Mysqlconfig80_SQLMode.TIME_TRUNCATE_FRACTIONAL:
      return "TIME_TRUNCATE_FRACTIONAL";
    case Mysqlconfig80_SQLMode.ANSI:
      return "ANSI";
    case Mysqlconfig80_SQLMode.TRADITIONAL:
      return "TRADITIONAL";
    case Mysqlconfig80_SQLMode.NO_DIR_IN_CREATE:
      return "NO_DIR_IN_CREATE";
    default:
      return "UNKNOWN";
  }
}

export enum Mysqlconfig80_AuthPlugin {
  AUTH_PLUGIN_UNSPECIFIED = 0,
  /** MYSQL_NATIVE_PASSWORD - Using [Native Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/native-pluggable-authentication.html). */
  MYSQL_NATIVE_PASSWORD = 1,
  /** CACHING_SHA2_PASSWORD - Using [Caching SHA-2 Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/caching-sha2-pluggable-authentication.html). */
  CACHING_SHA2_PASSWORD = 2,
  /** SHA256_PASSWORD - Using [SHA-256 Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/sha256-pluggable-authentication.html). */
  SHA256_PASSWORD = 3,
  UNRECOGNIZED = -1,
}

export function mysqlconfig80_AuthPluginFromJSON(
  object: any
): Mysqlconfig80_AuthPlugin {
  switch (object) {
    case 0:
    case "AUTH_PLUGIN_UNSPECIFIED":
      return Mysqlconfig80_AuthPlugin.AUTH_PLUGIN_UNSPECIFIED;
    case 1:
    case "MYSQL_NATIVE_PASSWORD":
      return Mysqlconfig80_AuthPlugin.MYSQL_NATIVE_PASSWORD;
    case 2:
    case "CACHING_SHA2_PASSWORD":
      return Mysqlconfig80_AuthPlugin.CACHING_SHA2_PASSWORD;
    case 3:
    case "SHA256_PASSWORD":
      return Mysqlconfig80_AuthPlugin.SHA256_PASSWORD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mysqlconfig80_AuthPlugin.UNRECOGNIZED;
  }
}

export function mysqlconfig80_AuthPluginToJSON(
  object: Mysqlconfig80_AuthPlugin
): string {
  switch (object) {
    case Mysqlconfig80_AuthPlugin.AUTH_PLUGIN_UNSPECIFIED:
      return "AUTH_PLUGIN_UNSPECIFIED";
    case Mysqlconfig80_AuthPlugin.MYSQL_NATIVE_PASSWORD:
      return "MYSQL_NATIVE_PASSWORD";
    case Mysqlconfig80_AuthPlugin.CACHING_SHA2_PASSWORD:
      return "CACHING_SHA2_PASSWORD";
    case Mysqlconfig80_AuthPlugin.SHA256_PASSWORD:
      return "SHA256_PASSWORD";
    default:
      return "UNKNOWN";
  }
}

export enum Mysqlconfig80_TransactionIsolation {
  TRANSACTION_ISOLATION_UNSPECIFIED = 0,
  READ_COMMITTED = 1,
  REPEATABLE_READ = 2,
  SERIALIZABLE = 3,
  UNRECOGNIZED = -1,
}

export function mysqlconfig80_TransactionIsolationFromJSON(
  object: any
): Mysqlconfig80_TransactionIsolation {
  switch (object) {
    case 0:
    case "TRANSACTION_ISOLATION_UNSPECIFIED":
      return Mysqlconfig80_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED;
    case 1:
    case "READ_COMMITTED":
      return Mysqlconfig80_TransactionIsolation.READ_COMMITTED;
    case 2:
    case "REPEATABLE_READ":
      return Mysqlconfig80_TransactionIsolation.REPEATABLE_READ;
    case 3:
    case "SERIALIZABLE":
      return Mysqlconfig80_TransactionIsolation.SERIALIZABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mysqlconfig80_TransactionIsolation.UNRECOGNIZED;
  }
}

export function mysqlconfig80_TransactionIsolationToJSON(
  object: Mysqlconfig80_TransactionIsolation
): string {
  switch (object) {
    case Mysqlconfig80_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED:
      return "TRANSACTION_ISOLATION_UNSPECIFIED";
    case Mysqlconfig80_TransactionIsolation.READ_COMMITTED:
      return "READ_COMMITTED";
    case Mysqlconfig80_TransactionIsolation.REPEATABLE_READ:
      return "REPEATABLE_READ";
    case Mysqlconfig80_TransactionIsolation.SERIALIZABLE:
      return "SERIALIZABLE";
    default:
      return "UNKNOWN";
  }
}

export enum Mysqlconfig80_BinlogRowImage {
  BINLOG_ROW_IMAGE_UNSPECIFIED = 0,
  FULL = 1,
  MINIMAL = 2,
  NOBLOB = 3,
  UNRECOGNIZED = -1,
}

export function mysqlconfig80_BinlogRowImageFromJSON(
  object: any
): Mysqlconfig80_BinlogRowImage {
  switch (object) {
    case 0:
    case "BINLOG_ROW_IMAGE_UNSPECIFIED":
      return Mysqlconfig80_BinlogRowImage.BINLOG_ROW_IMAGE_UNSPECIFIED;
    case 1:
    case "FULL":
      return Mysqlconfig80_BinlogRowImage.FULL;
    case 2:
    case "MINIMAL":
      return Mysqlconfig80_BinlogRowImage.MINIMAL;
    case 3:
    case "NOBLOB":
      return Mysqlconfig80_BinlogRowImage.NOBLOB;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mysqlconfig80_BinlogRowImage.UNRECOGNIZED;
  }
}

export function mysqlconfig80_BinlogRowImageToJSON(
  object: Mysqlconfig80_BinlogRowImage
): string {
  switch (object) {
    case Mysqlconfig80_BinlogRowImage.BINLOG_ROW_IMAGE_UNSPECIFIED:
      return "BINLOG_ROW_IMAGE_UNSPECIFIED";
    case Mysqlconfig80_BinlogRowImage.FULL:
      return "FULL";
    case Mysqlconfig80_BinlogRowImage.MINIMAL:
      return "MINIMAL";
    case Mysqlconfig80_BinlogRowImage.NOBLOB:
      return "NOBLOB";
    default:
      return "UNKNOWN";
  }
}

export enum Mysqlconfig80_SlaveParallelType {
  SLAVE_PARALLEL_TYPE_UNSPECIFIED = 0,
  DATABASE = 1,
  LOGICAL_CLOCK = 2,
  UNRECOGNIZED = -1,
}

export function mysqlconfig80_SlaveParallelTypeFromJSON(
  object: any
): Mysqlconfig80_SlaveParallelType {
  switch (object) {
    case 0:
    case "SLAVE_PARALLEL_TYPE_UNSPECIFIED":
      return Mysqlconfig80_SlaveParallelType.SLAVE_PARALLEL_TYPE_UNSPECIFIED;
    case 1:
    case "DATABASE":
      return Mysqlconfig80_SlaveParallelType.DATABASE;
    case 2:
    case "LOGICAL_CLOCK":
      return Mysqlconfig80_SlaveParallelType.LOGICAL_CLOCK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mysqlconfig80_SlaveParallelType.UNRECOGNIZED;
  }
}

export function mysqlconfig80_SlaveParallelTypeToJSON(
  object: Mysqlconfig80_SlaveParallelType
): string {
  switch (object) {
    case Mysqlconfig80_SlaveParallelType.SLAVE_PARALLEL_TYPE_UNSPECIFIED:
      return "SLAVE_PARALLEL_TYPE_UNSPECIFIED";
    case Mysqlconfig80_SlaveParallelType.DATABASE:
      return "DATABASE";
    case Mysqlconfig80_SlaveParallelType.LOGICAL_CLOCK:
      return "LOGICAL_CLOCK";
    default:
      return "UNKNOWN";
  }
}

export enum Mysqlconfig80_LogSlowRateType {
  LOG_SLOW_RATE_TYPE_UNSPECIFIED = 0,
  SESSION = 1,
  QUERY = 2,
  UNRECOGNIZED = -1,
}

export function mysqlconfig80_LogSlowRateTypeFromJSON(
  object: any
): Mysqlconfig80_LogSlowRateType {
  switch (object) {
    case 0:
    case "LOG_SLOW_RATE_TYPE_UNSPECIFIED":
      return Mysqlconfig80_LogSlowRateType.LOG_SLOW_RATE_TYPE_UNSPECIFIED;
    case 1:
    case "SESSION":
      return Mysqlconfig80_LogSlowRateType.SESSION;
    case 2:
    case "QUERY":
      return Mysqlconfig80_LogSlowRateType.QUERY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mysqlconfig80_LogSlowRateType.UNRECOGNIZED;
  }
}

export function mysqlconfig80_LogSlowRateTypeToJSON(
  object: Mysqlconfig80_LogSlowRateType
): string {
  switch (object) {
    case Mysqlconfig80_LogSlowRateType.LOG_SLOW_RATE_TYPE_UNSPECIFIED:
      return "LOG_SLOW_RATE_TYPE_UNSPECIFIED";
    case Mysqlconfig80_LogSlowRateType.SESSION:
      return "SESSION";
    case Mysqlconfig80_LogSlowRateType.QUERY:
      return "QUERY";
    default:
      return "UNKNOWN";
  }
}

export enum Mysqlconfig80_LogSlowFilterType {
  LOG_SLOW_FILTER_TYPE_UNSPECIFIED = 0,
  FULL_SCAN = 1,
  FULL_JOIN = 2,
  TMP_TABLE = 3,
  TMP_TABLE_ON_DISK = 4,
  FILESORT = 5,
  FILESORT_ON_DISK = 6,
  UNRECOGNIZED = -1,
}

export function mysqlconfig80_LogSlowFilterTypeFromJSON(
  object: any
): Mysqlconfig80_LogSlowFilterType {
  switch (object) {
    case 0:
    case "LOG_SLOW_FILTER_TYPE_UNSPECIFIED":
      return Mysqlconfig80_LogSlowFilterType.LOG_SLOW_FILTER_TYPE_UNSPECIFIED;
    case 1:
    case "FULL_SCAN":
      return Mysqlconfig80_LogSlowFilterType.FULL_SCAN;
    case 2:
    case "FULL_JOIN":
      return Mysqlconfig80_LogSlowFilterType.FULL_JOIN;
    case 3:
    case "TMP_TABLE":
      return Mysqlconfig80_LogSlowFilterType.TMP_TABLE;
    case 4:
    case "TMP_TABLE_ON_DISK":
      return Mysqlconfig80_LogSlowFilterType.TMP_TABLE_ON_DISK;
    case 5:
    case "FILESORT":
      return Mysqlconfig80_LogSlowFilterType.FILESORT;
    case 6:
    case "FILESORT_ON_DISK":
      return Mysqlconfig80_LogSlowFilterType.FILESORT_ON_DISK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mysqlconfig80_LogSlowFilterType.UNRECOGNIZED;
  }
}

export function mysqlconfig80_LogSlowFilterTypeToJSON(
  object: Mysqlconfig80_LogSlowFilterType
): string {
  switch (object) {
    case Mysqlconfig80_LogSlowFilterType.LOG_SLOW_FILTER_TYPE_UNSPECIFIED:
      return "LOG_SLOW_FILTER_TYPE_UNSPECIFIED";
    case Mysqlconfig80_LogSlowFilterType.FULL_SCAN:
      return "FULL_SCAN";
    case Mysqlconfig80_LogSlowFilterType.FULL_JOIN:
      return "FULL_JOIN";
    case Mysqlconfig80_LogSlowFilterType.TMP_TABLE:
      return "TMP_TABLE";
    case Mysqlconfig80_LogSlowFilterType.TMP_TABLE_ON_DISK:
      return "TMP_TABLE_ON_DISK";
    case Mysqlconfig80_LogSlowFilterType.FILESORT:
      return "FILESORT";
    case Mysqlconfig80_LogSlowFilterType.FILESORT_ON_DISK:
      return "FILESORT_ON_DISK";
    default:
      return "UNKNOWN";
  }
}

export interface Mysqlconfigset80 {
  $type: "yandex.cloud.mdb.mysql.v1.config.MysqlConfigSet8_0";
  /**
   * Effective settings for a MySQL 8.0 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?: Mysqlconfig80;
  /** User-defined settings for a MySQL 8.0 cluster. */
  userConfig?: Mysqlconfig80;
  /** Default configuration for a MySQL 8.0 cluster. */
  defaultConfig?: Mysqlconfig80;
}

const baseMysqlconfig80: object = {
  $type: "yandex.cloud.mdb.mysql.v1.config.MysqlConfig8_0",
  sqlMode: 0,
  defaultAuthenticationPlugin: 0,
  transactionIsolation: 0,
  defaultTimeZone: "",
  characterSetServer: "",
  collationServer: "",
  binlogRowImage: 0,
  slaveParallelType: 0,
  logSlowRateType: 0,
  logSlowFilter: 0,
};

export const Mysqlconfig80 = {
  $type: "yandex.cloud.mdb.mysql.v1.config.MysqlConfig8_0" as const,

  encode(
    message: Mysqlconfig80,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.innodbBufferPoolSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.innodbBufferPoolSize!,
        },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.maxConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxConnections! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.longQueryTime !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.longQueryTime! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.generalLog !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.generalLog! },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.auditLog !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.auditLog! },
        writer.uint32(42).fork()
      ).ldelim();
    }
    writer.uint32(50).fork();
    for (const v of message.sqlMode) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.maxAllowedPacket !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxAllowedPacket!,
        },
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.defaultAuthenticationPlugin !== 0) {
      writer.uint32(64).int32(message.defaultAuthenticationPlugin);
    }
    if (message.innodbFlushLogAtTrxCommit !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.innodbFlushLogAtTrxCommit!,
        },
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.innodbLockWaitTimeout !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.innodbLockWaitTimeout!,
        },
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.transactionIsolation !== 0) {
      writer.uint32(88).int32(message.transactionIsolation);
    }
    if (message.innodbPrintAllDeadlocks !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.innodbPrintAllDeadlocks!,
        },
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.netReadTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.netReadTimeout! },
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.netWriteTimeout !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.netWriteTimeout!,
        },
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.groupConcatMaxLen !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.groupConcatMaxLen!,
        },
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.tmpTableSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.tmpTableSize! },
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.maxHeapTableSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxHeapTableSize!,
        },
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.defaultTimeZone !== "") {
      writer.uint32(146).string(message.defaultTimeZone);
    }
    if (message.characterSetServer !== "") {
      writer.uint32(154).string(message.characterSetServer);
    }
    if (message.collationServer !== "") {
      writer.uint32(162).string(message.collationServer);
    }
    if (message.innodbAdaptiveHashIndex !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.innodbAdaptiveHashIndex!,
        },
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.innodbNumaInterleave !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.innodbNumaInterleave!,
        },
        writer.uint32(178).fork()
      ).ldelim();
    }
    if (message.innodbLogBufferSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.innodbLogBufferSize!,
        },
        writer.uint32(186).fork()
      ).ldelim();
    }
    if (message.innodbLogFileSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.innodbLogFileSize!,
        },
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.innodbIoCapacity !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.innodbIoCapacity!,
        },
        writer.uint32(202).fork()
      ).ldelim();
    }
    if (message.innodbIoCapacityMax !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.innodbIoCapacityMax!,
        },
        writer.uint32(210).fork()
      ).ldelim();
    }
    if (message.innodbReadIoThreads !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.innodbReadIoThreads!,
        },
        writer.uint32(218).fork()
      ).ldelim();
    }
    if (message.innodbWriteIoThreads !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.innodbWriteIoThreads!,
        },
        writer.uint32(226).fork()
      ).ldelim();
    }
    if (message.innodbPurgeThreads !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.innodbPurgeThreads!,
        },
        writer.uint32(234).fork()
      ).ldelim();
    }
    if (message.innodbThreadConcurrency !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.innodbThreadConcurrency!,
        },
        writer.uint32(242).fork()
      ).ldelim();
    }
    if (message.innodbTempDataFileMaxSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.innodbTempDataFileMaxSize!,
        },
        writer.uint32(250).fork()
      ).ldelim();
    }
    if (message.threadCacheSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.threadCacheSize!,
        },
        writer.uint32(258).fork()
      ).ldelim();
    }
    if (message.threadStack !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.threadStack! },
        writer.uint32(266).fork()
      ).ldelim();
    }
    if (message.joinBufferSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.joinBufferSize! },
        writer.uint32(274).fork()
      ).ldelim();
    }
    if (message.sortBufferSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.sortBufferSize! },
        writer.uint32(282).fork()
      ).ldelim();
    }
    if (message.tableDefinitionCache !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.tableDefinitionCache!,
        },
        writer.uint32(290).fork()
      ).ldelim();
    }
    if (message.tableOpenCache !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.tableOpenCache! },
        writer.uint32(298).fork()
      ).ldelim();
    }
    if (message.tableOpenCacheInstances !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.tableOpenCacheInstances!,
        },
        writer.uint32(306).fork()
      ).ldelim();
    }
    if (message.explicitDefaultsForTimestamp !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.explicitDefaultsForTimestamp!,
        },
        writer.uint32(314).fork()
      ).ldelim();
    }
    if (message.autoIncrementIncrement !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.autoIncrementIncrement!,
        },
        writer.uint32(322).fork()
      ).ldelim();
    }
    if (message.autoIncrementOffset !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.autoIncrementOffset!,
        },
        writer.uint32(330).fork()
      ).ldelim();
    }
    if (message.syncBinlog !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.syncBinlog! },
        writer.uint32(338).fork()
      ).ldelim();
    }
    if (message.binlogCacheSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.binlogCacheSize!,
        },
        writer.uint32(346).fork()
      ).ldelim();
    }
    if (message.binlogGroupCommitSyncDelay !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.binlogGroupCommitSyncDelay!,
        },
        writer.uint32(354).fork()
      ).ldelim();
    }
    if (message.binlogRowImage !== 0) {
      writer.uint32(360).int32(message.binlogRowImage);
    }
    if (message.binlogRowsQueryLogEvents !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.binlogRowsQueryLogEvents!,
        },
        writer.uint32(370).fork()
      ).ldelim();
    }
    if (message.rplSemiSyncMasterWaitForSlaveCount !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.rplSemiSyncMasterWaitForSlaveCount!,
        },
        writer.uint32(378).fork()
      ).ldelim();
    }
    if (message.slaveParallelType !== 0) {
      writer.uint32(384).int32(message.slaveParallelType);
    }
    if (message.slaveParallelWorkers !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.slaveParallelWorkers!,
        },
        writer.uint32(394).fork()
      ).ldelim();
    }
    if (message.regexpTimeLimit !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.regexpTimeLimit!,
        },
        writer.uint32(402).fork()
      ).ldelim();
    }
    if (message.mdbPreserveBinlogBytes !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.mdbPreserveBinlogBytes!,
        },
        writer.uint32(410).fork()
      ).ldelim();
    }
    if (message.interactiveTimeout !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.interactiveTimeout!,
        },
        writer.uint32(418).fork()
      ).ldelim();
    }
    if (message.waitTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.waitTimeout! },
        writer.uint32(426).fork()
      ).ldelim();
    }
    if (message.mdbOfflineModeEnableLag !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.mdbOfflineModeEnableLag!,
        },
        writer.uint32(434).fork()
      ).ldelim();
    }
    if (message.mdbOfflineModeDisableLag !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.mdbOfflineModeDisableLag!,
        },
        writer.uint32(442).fork()
      ).ldelim();
    }
    if (message.rangeOptimizerMaxMemSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.rangeOptimizerMaxMemSize!,
        },
        writer.uint32(450).fork()
      ).ldelim();
    }
    if (message.slowQueryLog !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.slowQueryLog! },
        writer.uint32(458).fork()
      ).ldelim();
    }
    if (message.slowQueryLogAlwaysWriteTime !== undefined) {
      DoubleValue.encode(
        {
          $type: "google.protobuf.DoubleValue",
          value: message.slowQueryLogAlwaysWriteTime!,
        },
        writer.uint32(466).fork()
      ).ldelim();
    }
    if (message.logSlowRateType !== 0) {
      writer.uint32(472).int32(message.logSlowRateType);
    }
    if (message.logSlowRateLimit !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.logSlowRateLimit!,
        },
        writer.uint32(482).fork()
      ).ldelim();
    }
    if (message.logSlowSpStatements !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.logSlowSpStatements!,
        },
        writer.uint32(490).fork()
      ).ldelim();
    }
    writer.uint32(498).fork();
    for (const v of message.logSlowFilter) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mysqlconfig80 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMysqlconfig80 } as Mysqlconfig80;
    message.sqlMode = [];
    message.logSlowFilter = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.innodbBufferPoolSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 2:
          message.maxConnections = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.longQueryTime = DoubleValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 4:
          message.generalLog = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 5:
          message.auditLog = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sqlMode.push(reader.int32() as any);
            }
          } else {
            message.sqlMode.push(reader.int32() as any);
          }
          break;
        case 7:
          message.maxAllowedPacket = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 8:
          message.defaultAuthenticationPlugin = reader.int32() as any;
          break;
        case 9:
          message.innodbFlushLogAtTrxCommit = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 10:
          message.innodbLockWaitTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 11:
          message.transactionIsolation = reader.int32() as any;
          break;
        case 12:
          message.innodbPrintAllDeadlocks = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 13:
          message.netReadTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 14:
          message.netWriteTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 15:
          message.groupConcatMaxLen = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 16:
          message.tmpTableSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 17:
          message.maxHeapTableSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 18:
          message.defaultTimeZone = reader.string();
          break;
        case 19:
          message.characterSetServer = reader.string();
          break;
        case 20:
          message.collationServer = reader.string();
          break;
        case 21:
          message.innodbAdaptiveHashIndex = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 22:
          message.innodbNumaInterleave = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 23:
          message.innodbLogBufferSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 24:
          message.innodbLogFileSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 25:
          message.innodbIoCapacity = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 26:
          message.innodbIoCapacityMax = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 27:
          message.innodbReadIoThreads = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 28:
          message.innodbWriteIoThreads = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 29:
          message.innodbPurgeThreads = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 30:
          message.innodbThreadConcurrency = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 31:
          message.innodbTempDataFileMaxSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 32:
          message.threadCacheSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 33:
          message.threadStack = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 34:
          message.joinBufferSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 35:
          message.sortBufferSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 36:
          message.tableDefinitionCache = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 37:
          message.tableOpenCache = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 38:
          message.tableOpenCacheInstances = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 39:
          message.explicitDefaultsForTimestamp = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 40:
          message.autoIncrementIncrement = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 41:
          message.autoIncrementOffset = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 42:
          message.syncBinlog = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 43:
          message.binlogCacheSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 44:
          message.binlogGroupCommitSyncDelay = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 45:
          message.binlogRowImage = reader.int32() as any;
          break;
        case 46:
          message.binlogRowsQueryLogEvents = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 47:
          message.rplSemiSyncMasterWaitForSlaveCount = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 48:
          message.slaveParallelType = reader.int32() as any;
          break;
        case 49:
          message.slaveParallelWorkers = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 50:
          message.regexpTimeLimit = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 51:
          message.mdbPreserveBinlogBytes = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 52:
          message.interactiveTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 53:
          message.waitTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 54:
          message.mdbOfflineModeEnableLag = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 55:
          message.mdbOfflineModeDisableLag = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 56:
          message.rangeOptimizerMaxMemSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 57:
          message.slowQueryLog = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 58:
          message.slowQueryLogAlwaysWriteTime = DoubleValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 59:
          message.logSlowRateType = reader.int32() as any;
          break;
        case 60:
          message.logSlowRateLimit = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 61:
          message.logSlowSpStatements = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 62:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.logSlowFilter.push(reader.int32() as any);
            }
          } else {
            message.logSlowFilter.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Mysqlconfig80 {
    const message = { ...baseMysqlconfig80 } as Mysqlconfig80;
    message.innodbBufferPoolSize =
      object.innodbBufferPoolSize !== undefined &&
      object.innodbBufferPoolSize !== null
        ? Number(object.innodbBufferPoolSize)
        : undefined;
    message.maxConnections =
      object.maxConnections !== undefined && object.maxConnections !== null
        ? Number(object.maxConnections)
        : undefined;
    message.longQueryTime =
      object.longQueryTime !== undefined && object.longQueryTime !== null
        ? Number(object.longQueryTime)
        : undefined;
    message.generalLog =
      object.generalLog !== undefined && object.generalLog !== null
        ? Boolean(object.generalLog)
        : undefined;
    message.auditLog =
      object.auditLog !== undefined && object.auditLog !== null
        ? Boolean(object.auditLog)
        : undefined;
    message.sqlMode = (object.sqlMode ?? []).map((e: any) =>
      mysqlconfig80_SQLModeFromJSON(e)
    );
    message.maxAllowedPacket =
      object.maxAllowedPacket !== undefined && object.maxAllowedPacket !== null
        ? Number(object.maxAllowedPacket)
        : undefined;
    message.defaultAuthenticationPlugin =
      object.defaultAuthenticationPlugin !== undefined &&
      object.defaultAuthenticationPlugin !== null
        ? mysqlconfig80_AuthPluginFromJSON(object.defaultAuthenticationPlugin)
        : 0;
    message.innodbFlushLogAtTrxCommit =
      object.innodbFlushLogAtTrxCommit !== undefined &&
      object.innodbFlushLogAtTrxCommit !== null
        ? Number(object.innodbFlushLogAtTrxCommit)
        : undefined;
    message.innodbLockWaitTimeout =
      object.innodbLockWaitTimeout !== undefined &&
      object.innodbLockWaitTimeout !== null
        ? Number(object.innodbLockWaitTimeout)
        : undefined;
    message.transactionIsolation =
      object.transactionIsolation !== undefined &&
      object.transactionIsolation !== null
        ? mysqlconfig80_TransactionIsolationFromJSON(
            object.transactionIsolation
          )
        : 0;
    message.innodbPrintAllDeadlocks =
      object.innodbPrintAllDeadlocks !== undefined &&
      object.innodbPrintAllDeadlocks !== null
        ? Boolean(object.innodbPrintAllDeadlocks)
        : undefined;
    message.netReadTimeout =
      object.netReadTimeout !== undefined && object.netReadTimeout !== null
        ? Number(object.netReadTimeout)
        : undefined;
    message.netWriteTimeout =
      object.netWriteTimeout !== undefined && object.netWriteTimeout !== null
        ? Number(object.netWriteTimeout)
        : undefined;
    message.groupConcatMaxLen =
      object.groupConcatMaxLen !== undefined &&
      object.groupConcatMaxLen !== null
        ? Number(object.groupConcatMaxLen)
        : undefined;
    message.tmpTableSize =
      object.tmpTableSize !== undefined && object.tmpTableSize !== null
        ? Number(object.tmpTableSize)
        : undefined;
    message.maxHeapTableSize =
      object.maxHeapTableSize !== undefined && object.maxHeapTableSize !== null
        ? Number(object.maxHeapTableSize)
        : undefined;
    message.defaultTimeZone =
      object.defaultTimeZone !== undefined && object.defaultTimeZone !== null
        ? String(object.defaultTimeZone)
        : "";
    message.characterSetServer =
      object.characterSetServer !== undefined &&
      object.characterSetServer !== null
        ? String(object.characterSetServer)
        : "";
    message.collationServer =
      object.collationServer !== undefined && object.collationServer !== null
        ? String(object.collationServer)
        : "";
    message.innodbAdaptiveHashIndex =
      object.innodbAdaptiveHashIndex !== undefined &&
      object.innodbAdaptiveHashIndex !== null
        ? Boolean(object.innodbAdaptiveHashIndex)
        : undefined;
    message.innodbNumaInterleave =
      object.innodbNumaInterleave !== undefined &&
      object.innodbNumaInterleave !== null
        ? Boolean(object.innodbNumaInterleave)
        : undefined;
    message.innodbLogBufferSize =
      object.innodbLogBufferSize !== undefined &&
      object.innodbLogBufferSize !== null
        ? Number(object.innodbLogBufferSize)
        : undefined;
    message.innodbLogFileSize =
      object.innodbLogFileSize !== undefined &&
      object.innodbLogFileSize !== null
        ? Number(object.innodbLogFileSize)
        : undefined;
    message.innodbIoCapacity =
      object.innodbIoCapacity !== undefined && object.innodbIoCapacity !== null
        ? Number(object.innodbIoCapacity)
        : undefined;
    message.innodbIoCapacityMax =
      object.innodbIoCapacityMax !== undefined &&
      object.innodbIoCapacityMax !== null
        ? Number(object.innodbIoCapacityMax)
        : undefined;
    message.innodbReadIoThreads =
      object.innodbReadIoThreads !== undefined &&
      object.innodbReadIoThreads !== null
        ? Number(object.innodbReadIoThreads)
        : undefined;
    message.innodbWriteIoThreads =
      object.innodbWriteIoThreads !== undefined &&
      object.innodbWriteIoThreads !== null
        ? Number(object.innodbWriteIoThreads)
        : undefined;
    message.innodbPurgeThreads =
      object.innodbPurgeThreads !== undefined &&
      object.innodbPurgeThreads !== null
        ? Number(object.innodbPurgeThreads)
        : undefined;
    message.innodbThreadConcurrency =
      object.innodbThreadConcurrency !== undefined &&
      object.innodbThreadConcurrency !== null
        ? Number(object.innodbThreadConcurrency)
        : undefined;
    message.innodbTempDataFileMaxSize =
      object.innodbTempDataFileMaxSize !== undefined &&
      object.innodbTempDataFileMaxSize !== null
        ? Number(object.innodbTempDataFileMaxSize)
        : undefined;
    message.threadCacheSize =
      object.threadCacheSize !== undefined && object.threadCacheSize !== null
        ? Number(object.threadCacheSize)
        : undefined;
    message.threadStack =
      object.threadStack !== undefined && object.threadStack !== null
        ? Number(object.threadStack)
        : undefined;
    message.joinBufferSize =
      object.joinBufferSize !== undefined && object.joinBufferSize !== null
        ? Number(object.joinBufferSize)
        : undefined;
    message.sortBufferSize =
      object.sortBufferSize !== undefined && object.sortBufferSize !== null
        ? Number(object.sortBufferSize)
        : undefined;
    message.tableDefinitionCache =
      object.tableDefinitionCache !== undefined &&
      object.tableDefinitionCache !== null
        ? Number(object.tableDefinitionCache)
        : undefined;
    message.tableOpenCache =
      object.tableOpenCache !== undefined && object.tableOpenCache !== null
        ? Number(object.tableOpenCache)
        : undefined;
    message.tableOpenCacheInstances =
      object.tableOpenCacheInstances !== undefined &&
      object.tableOpenCacheInstances !== null
        ? Number(object.tableOpenCacheInstances)
        : undefined;
    message.explicitDefaultsForTimestamp =
      object.explicitDefaultsForTimestamp !== undefined &&
      object.explicitDefaultsForTimestamp !== null
        ? Boolean(object.explicitDefaultsForTimestamp)
        : undefined;
    message.autoIncrementIncrement =
      object.autoIncrementIncrement !== undefined &&
      object.autoIncrementIncrement !== null
        ? Number(object.autoIncrementIncrement)
        : undefined;
    message.autoIncrementOffset =
      object.autoIncrementOffset !== undefined &&
      object.autoIncrementOffset !== null
        ? Number(object.autoIncrementOffset)
        : undefined;
    message.syncBinlog =
      object.syncBinlog !== undefined && object.syncBinlog !== null
        ? Number(object.syncBinlog)
        : undefined;
    message.binlogCacheSize =
      object.binlogCacheSize !== undefined && object.binlogCacheSize !== null
        ? Number(object.binlogCacheSize)
        : undefined;
    message.binlogGroupCommitSyncDelay =
      object.binlogGroupCommitSyncDelay !== undefined &&
      object.binlogGroupCommitSyncDelay !== null
        ? Number(object.binlogGroupCommitSyncDelay)
        : undefined;
    message.binlogRowImage =
      object.binlogRowImage !== undefined && object.binlogRowImage !== null
        ? mysqlconfig80_BinlogRowImageFromJSON(object.binlogRowImage)
        : 0;
    message.binlogRowsQueryLogEvents =
      object.binlogRowsQueryLogEvents !== undefined &&
      object.binlogRowsQueryLogEvents !== null
        ? Boolean(object.binlogRowsQueryLogEvents)
        : undefined;
    message.rplSemiSyncMasterWaitForSlaveCount =
      object.rplSemiSyncMasterWaitForSlaveCount !== undefined &&
      object.rplSemiSyncMasterWaitForSlaveCount !== null
        ? Number(object.rplSemiSyncMasterWaitForSlaveCount)
        : undefined;
    message.slaveParallelType =
      object.slaveParallelType !== undefined &&
      object.slaveParallelType !== null
        ? mysqlconfig80_SlaveParallelTypeFromJSON(object.slaveParallelType)
        : 0;
    message.slaveParallelWorkers =
      object.slaveParallelWorkers !== undefined &&
      object.slaveParallelWorkers !== null
        ? Number(object.slaveParallelWorkers)
        : undefined;
    message.regexpTimeLimit =
      object.regexpTimeLimit !== undefined && object.regexpTimeLimit !== null
        ? Number(object.regexpTimeLimit)
        : undefined;
    message.mdbPreserveBinlogBytes =
      object.mdbPreserveBinlogBytes !== undefined &&
      object.mdbPreserveBinlogBytes !== null
        ? Number(object.mdbPreserveBinlogBytes)
        : undefined;
    message.interactiveTimeout =
      object.interactiveTimeout !== undefined &&
      object.interactiveTimeout !== null
        ? Number(object.interactiveTimeout)
        : undefined;
    message.waitTimeout =
      object.waitTimeout !== undefined && object.waitTimeout !== null
        ? Number(object.waitTimeout)
        : undefined;
    message.mdbOfflineModeEnableLag =
      object.mdbOfflineModeEnableLag !== undefined &&
      object.mdbOfflineModeEnableLag !== null
        ? Number(object.mdbOfflineModeEnableLag)
        : undefined;
    message.mdbOfflineModeDisableLag =
      object.mdbOfflineModeDisableLag !== undefined &&
      object.mdbOfflineModeDisableLag !== null
        ? Number(object.mdbOfflineModeDisableLag)
        : undefined;
    message.rangeOptimizerMaxMemSize =
      object.rangeOptimizerMaxMemSize !== undefined &&
      object.rangeOptimizerMaxMemSize !== null
        ? Number(object.rangeOptimizerMaxMemSize)
        : undefined;
    message.slowQueryLog =
      object.slowQueryLog !== undefined && object.slowQueryLog !== null
        ? Boolean(object.slowQueryLog)
        : undefined;
    message.slowQueryLogAlwaysWriteTime =
      object.slowQueryLogAlwaysWriteTime !== undefined &&
      object.slowQueryLogAlwaysWriteTime !== null
        ? Number(object.slowQueryLogAlwaysWriteTime)
        : undefined;
    message.logSlowRateType =
      object.logSlowRateType !== undefined && object.logSlowRateType !== null
        ? mysqlconfig80_LogSlowRateTypeFromJSON(object.logSlowRateType)
        : 0;
    message.logSlowRateLimit =
      object.logSlowRateLimit !== undefined && object.logSlowRateLimit !== null
        ? Number(object.logSlowRateLimit)
        : undefined;
    message.logSlowSpStatements =
      object.logSlowSpStatements !== undefined &&
      object.logSlowSpStatements !== null
        ? Boolean(object.logSlowSpStatements)
        : undefined;
    message.logSlowFilter = (object.logSlowFilter ?? []).map((e: any) =>
      mysqlconfig80_LogSlowFilterTypeFromJSON(e)
    );
    return message;
  },

  toJSON(message: Mysqlconfig80): unknown {
    const obj: any = {};
    message.innodbBufferPoolSize !== undefined &&
      (obj.innodbBufferPoolSize = message.innodbBufferPoolSize);
    message.maxConnections !== undefined &&
      (obj.maxConnections = message.maxConnections);
    message.longQueryTime !== undefined &&
      (obj.longQueryTime = message.longQueryTime);
    message.generalLog !== undefined && (obj.generalLog = message.generalLog);
    message.auditLog !== undefined && (obj.auditLog = message.auditLog);
    if (message.sqlMode) {
      obj.sqlMode = message.sqlMode.map((e) => mysqlconfig80_SQLModeToJSON(e));
    } else {
      obj.sqlMode = [];
    }
    message.maxAllowedPacket !== undefined &&
      (obj.maxAllowedPacket = message.maxAllowedPacket);
    message.defaultAuthenticationPlugin !== undefined &&
      (obj.defaultAuthenticationPlugin = mysqlconfig80_AuthPluginToJSON(
        message.defaultAuthenticationPlugin
      ));
    message.innodbFlushLogAtTrxCommit !== undefined &&
      (obj.innodbFlushLogAtTrxCommit = message.innodbFlushLogAtTrxCommit);
    message.innodbLockWaitTimeout !== undefined &&
      (obj.innodbLockWaitTimeout = message.innodbLockWaitTimeout);
    message.transactionIsolation !== undefined &&
      (obj.transactionIsolation = mysqlconfig80_TransactionIsolationToJSON(
        message.transactionIsolation
      ));
    message.innodbPrintAllDeadlocks !== undefined &&
      (obj.innodbPrintAllDeadlocks = message.innodbPrintAllDeadlocks);
    message.netReadTimeout !== undefined &&
      (obj.netReadTimeout = message.netReadTimeout);
    message.netWriteTimeout !== undefined &&
      (obj.netWriteTimeout = message.netWriteTimeout);
    message.groupConcatMaxLen !== undefined &&
      (obj.groupConcatMaxLen = message.groupConcatMaxLen);
    message.tmpTableSize !== undefined &&
      (obj.tmpTableSize = message.tmpTableSize);
    message.maxHeapTableSize !== undefined &&
      (obj.maxHeapTableSize = message.maxHeapTableSize);
    message.defaultTimeZone !== undefined &&
      (obj.defaultTimeZone = message.defaultTimeZone);
    message.characterSetServer !== undefined &&
      (obj.characterSetServer = message.characterSetServer);
    message.collationServer !== undefined &&
      (obj.collationServer = message.collationServer);
    message.innodbAdaptiveHashIndex !== undefined &&
      (obj.innodbAdaptiveHashIndex = message.innodbAdaptiveHashIndex);
    message.innodbNumaInterleave !== undefined &&
      (obj.innodbNumaInterleave = message.innodbNumaInterleave);
    message.innodbLogBufferSize !== undefined &&
      (obj.innodbLogBufferSize = message.innodbLogBufferSize);
    message.innodbLogFileSize !== undefined &&
      (obj.innodbLogFileSize = message.innodbLogFileSize);
    message.innodbIoCapacity !== undefined &&
      (obj.innodbIoCapacity = message.innodbIoCapacity);
    message.innodbIoCapacityMax !== undefined &&
      (obj.innodbIoCapacityMax = message.innodbIoCapacityMax);
    message.innodbReadIoThreads !== undefined &&
      (obj.innodbReadIoThreads = message.innodbReadIoThreads);
    message.innodbWriteIoThreads !== undefined &&
      (obj.innodbWriteIoThreads = message.innodbWriteIoThreads);
    message.innodbPurgeThreads !== undefined &&
      (obj.innodbPurgeThreads = message.innodbPurgeThreads);
    message.innodbThreadConcurrency !== undefined &&
      (obj.innodbThreadConcurrency = message.innodbThreadConcurrency);
    message.innodbTempDataFileMaxSize !== undefined &&
      (obj.innodbTempDataFileMaxSize = message.innodbTempDataFileMaxSize);
    message.threadCacheSize !== undefined &&
      (obj.threadCacheSize = message.threadCacheSize);
    message.threadStack !== undefined &&
      (obj.threadStack = message.threadStack);
    message.joinBufferSize !== undefined &&
      (obj.joinBufferSize = message.joinBufferSize);
    message.sortBufferSize !== undefined &&
      (obj.sortBufferSize = message.sortBufferSize);
    message.tableDefinitionCache !== undefined &&
      (obj.tableDefinitionCache = message.tableDefinitionCache);
    message.tableOpenCache !== undefined &&
      (obj.tableOpenCache = message.tableOpenCache);
    message.tableOpenCacheInstances !== undefined &&
      (obj.tableOpenCacheInstances = message.tableOpenCacheInstances);
    message.explicitDefaultsForTimestamp !== undefined &&
      (obj.explicitDefaultsForTimestamp = message.explicitDefaultsForTimestamp);
    message.autoIncrementIncrement !== undefined &&
      (obj.autoIncrementIncrement = message.autoIncrementIncrement);
    message.autoIncrementOffset !== undefined &&
      (obj.autoIncrementOffset = message.autoIncrementOffset);
    message.syncBinlog !== undefined && (obj.syncBinlog = message.syncBinlog);
    message.binlogCacheSize !== undefined &&
      (obj.binlogCacheSize = message.binlogCacheSize);
    message.binlogGroupCommitSyncDelay !== undefined &&
      (obj.binlogGroupCommitSyncDelay = message.binlogGroupCommitSyncDelay);
    message.binlogRowImage !== undefined &&
      (obj.binlogRowImage = mysqlconfig80_BinlogRowImageToJSON(
        message.binlogRowImage
      ));
    message.binlogRowsQueryLogEvents !== undefined &&
      (obj.binlogRowsQueryLogEvents = message.binlogRowsQueryLogEvents);
    message.rplSemiSyncMasterWaitForSlaveCount !== undefined &&
      (obj.rplSemiSyncMasterWaitForSlaveCount =
        message.rplSemiSyncMasterWaitForSlaveCount);
    message.slaveParallelType !== undefined &&
      (obj.slaveParallelType = mysqlconfig80_SlaveParallelTypeToJSON(
        message.slaveParallelType
      ));
    message.slaveParallelWorkers !== undefined &&
      (obj.slaveParallelWorkers = message.slaveParallelWorkers);
    message.regexpTimeLimit !== undefined &&
      (obj.regexpTimeLimit = message.regexpTimeLimit);
    message.mdbPreserveBinlogBytes !== undefined &&
      (obj.mdbPreserveBinlogBytes = message.mdbPreserveBinlogBytes);
    message.interactiveTimeout !== undefined &&
      (obj.interactiveTimeout = message.interactiveTimeout);
    message.waitTimeout !== undefined &&
      (obj.waitTimeout = message.waitTimeout);
    message.mdbOfflineModeEnableLag !== undefined &&
      (obj.mdbOfflineModeEnableLag = message.mdbOfflineModeEnableLag);
    message.mdbOfflineModeDisableLag !== undefined &&
      (obj.mdbOfflineModeDisableLag = message.mdbOfflineModeDisableLag);
    message.rangeOptimizerMaxMemSize !== undefined &&
      (obj.rangeOptimizerMaxMemSize = message.rangeOptimizerMaxMemSize);
    message.slowQueryLog !== undefined &&
      (obj.slowQueryLog = message.slowQueryLog);
    message.slowQueryLogAlwaysWriteTime !== undefined &&
      (obj.slowQueryLogAlwaysWriteTime = message.slowQueryLogAlwaysWriteTime);
    message.logSlowRateType !== undefined &&
      (obj.logSlowRateType = mysqlconfig80_LogSlowRateTypeToJSON(
        message.logSlowRateType
      ));
    message.logSlowRateLimit !== undefined &&
      (obj.logSlowRateLimit = message.logSlowRateLimit);
    message.logSlowSpStatements !== undefined &&
      (obj.logSlowSpStatements = message.logSlowSpStatements);
    if (message.logSlowFilter) {
      obj.logSlowFilter = message.logSlowFilter.map((e) =>
        mysqlconfig80_LogSlowFilterTypeToJSON(e)
      );
    } else {
      obj.logSlowFilter = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mysqlconfig80>, I>>(
    object: I
  ): Mysqlconfig80 {
    const message = { ...baseMysqlconfig80 } as Mysqlconfig80;
    message.innodbBufferPoolSize = object.innodbBufferPoolSize ?? undefined;
    message.maxConnections = object.maxConnections ?? undefined;
    message.longQueryTime = object.longQueryTime ?? undefined;
    message.generalLog = object.generalLog ?? undefined;
    message.auditLog = object.auditLog ?? undefined;
    message.sqlMode = object.sqlMode?.map((e) => e) || [];
    message.maxAllowedPacket = object.maxAllowedPacket ?? undefined;
    message.defaultAuthenticationPlugin =
      object.defaultAuthenticationPlugin ?? 0;
    message.innodbFlushLogAtTrxCommit =
      object.innodbFlushLogAtTrxCommit ?? undefined;
    message.innodbLockWaitTimeout = object.innodbLockWaitTimeout ?? undefined;
    message.transactionIsolation = object.transactionIsolation ?? 0;
    message.innodbPrintAllDeadlocks =
      object.innodbPrintAllDeadlocks ?? undefined;
    message.netReadTimeout = object.netReadTimeout ?? undefined;
    message.netWriteTimeout = object.netWriteTimeout ?? undefined;
    message.groupConcatMaxLen = object.groupConcatMaxLen ?? undefined;
    message.tmpTableSize = object.tmpTableSize ?? undefined;
    message.maxHeapTableSize = object.maxHeapTableSize ?? undefined;
    message.defaultTimeZone = object.defaultTimeZone ?? "";
    message.characterSetServer = object.characterSetServer ?? "";
    message.collationServer = object.collationServer ?? "";
    message.innodbAdaptiveHashIndex =
      object.innodbAdaptiveHashIndex ?? undefined;
    message.innodbNumaInterleave = object.innodbNumaInterleave ?? undefined;
    message.innodbLogBufferSize = object.innodbLogBufferSize ?? undefined;
    message.innodbLogFileSize = object.innodbLogFileSize ?? undefined;
    message.innodbIoCapacity = object.innodbIoCapacity ?? undefined;
    message.innodbIoCapacityMax = object.innodbIoCapacityMax ?? undefined;
    message.innodbReadIoThreads = object.innodbReadIoThreads ?? undefined;
    message.innodbWriteIoThreads = object.innodbWriteIoThreads ?? undefined;
    message.innodbPurgeThreads = object.innodbPurgeThreads ?? undefined;
    message.innodbThreadConcurrency =
      object.innodbThreadConcurrency ?? undefined;
    message.innodbTempDataFileMaxSize =
      object.innodbTempDataFileMaxSize ?? undefined;
    message.threadCacheSize = object.threadCacheSize ?? undefined;
    message.threadStack = object.threadStack ?? undefined;
    message.joinBufferSize = object.joinBufferSize ?? undefined;
    message.sortBufferSize = object.sortBufferSize ?? undefined;
    message.tableDefinitionCache = object.tableDefinitionCache ?? undefined;
    message.tableOpenCache = object.tableOpenCache ?? undefined;
    message.tableOpenCacheInstances =
      object.tableOpenCacheInstances ?? undefined;
    message.explicitDefaultsForTimestamp =
      object.explicitDefaultsForTimestamp ?? undefined;
    message.autoIncrementIncrement = object.autoIncrementIncrement ?? undefined;
    message.autoIncrementOffset = object.autoIncrementOffset ?? undefined;
    message.syncBinlog = object.syncBinlog ?? undefined;
    message.binlogCacheSize = object.binlogCacheSize ?? undefined;
    message.binlogGroupCommitSyncDelay =
      object.binlogGroupCommitSyncDelay ?? undefined;
    message.binlogRowImage = object.binlogRowImage ?? 0;
    message.binlogRowsQueryLogEvents =
      object.binlogRowsQueryLogEvents ?? undefined;
    message.rplSemiSyncMasterWaitForSlaveCount =
      object.rplSemiSyncMasterWaitForSlaveCount ?? undefined;
    message.slaveParallelType = object.slaveParallelType ?? 0;
    message.slaveParallelWorkers = object.slaveParallelWorkers ?? undefined;
    message.regexpTimeLimit = object.regexpTimeLimit ?? undefined;
    message.mdbPreserveBinlogBytes = object.mdbPreserveBinlogBytes ?? undefined;
    message.interactiveTimeout = object.interactiveTimeout ?? undefined;
    message.waitTimeout = object.waitTimeout ?? undefined;
    message.mdbOfflineModeEnableLag =
      object.mdbOfflineModeEnableLag ?? undefined;
    message.mdbOfflineModeDisableLag =
      object.mdbOfflineModeDisableLag ?? undefined;
    message.rangeOptimizerMaxMemSize =
      object.rangeOptimizerMaxMemSize ?? undefined;
    message.slowQueryLog = object.slowQueryLog ?? undefined;
    message.slowQueryLogAlwaysWriteTime =
      object.slowQueryLogAlwaysWriteTime ?? undefined;
    message.logSlowRateType = object.logSlowRateType ?? 0;
    message.logSlowRateLimit = object.logSlowRateLimit ?? undefined;
    message.logSlowSpStatements = object.logSlowSpStatements ?? undefined;
    message.logSlowFilter = object.logSlowFilter?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Mysqlconfig80.$type, Mysqlconfig80);

const baseMysqlconfigset80: object = {
  $type: "yandex.cloud.mdb.mysql.v1.config.MysqlConfigSet8_0",
};

export const Mysqlconfigset80 = {
  $type: "yandex.cloud.mdb.mysql.v1.config.MysqlConfigSet8_0" as const,

  encode(
    message: Mysqlconfigset80,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      Mysqlconfig80.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      Mysqlconfig80.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      Mysqlconfig80.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mysqlconfigset80 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMysqlconfigset80 } as Mysqlconfigset80;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = Mysqlconfig80.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = Mysqlconfig80.decode(reader, reader.uint32());
          break;
        case 3:
          message.defaultConfig = Mysqlconfig80.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Mysqlconfigset80 {
    const message = { ...baseMysqlconfigset80 } as Mysqlconfigset80;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Mysqlconfig80.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Mysqlconfig80.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Mysqlconfig80.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: Mysqlconfigset80): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? Mysqlconfig80.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? Mysqlconfig80.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? Mysqlconfig80.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mysqlconfigset80>, I>>(
    object: I
  ): Mysqlconfigset80 {
    const message = { ...baseMysqlconfigset80 } as Mysqlconfigset80;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Mysqlconfig80.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Mysqlconfig80.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Mysqlconfig80.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mysqlconfigset80.$type, Mysqlconfigset80);

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
