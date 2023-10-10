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

/** Options and structure of `MysqlConfig5_7` reflects MySQL 5.7 configuration file. */
export interface Mysqlconfig57 {
  $type: "yandex.cloud.mdb.mysql.v1.config.MysqlConfig5_7";
  /**
   * Size of the InnoDB buffer pool used for caching table and index data.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_buffer_pool_size) for details.
   */
  innodbBufferPoolSize?: number;
  /**
   * The maximum permitted number of simultaneous client connections.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_max_connections) for details.
   */
  maxConnections?: number;
  /**
   * Time that it takes to process a query before it is considered slow.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_long_query_time) for details.
   */
  longQueryTime?: number;
  /**
   * Enable writing of general query log of MySQL.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_general_log) for details.
   */
  generalLog?: boolean;
  /**
   * Enable writing of audit log of MySQL.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/mysql-security-excerpt/5.7/en/audit-log-reference.html#audit-log-options-variables) for details.
   */
  auditLog?: boolean;
  /**
   * Server SQL mode of MySQL.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/sql-mode.html#sql-mode-setting) for details.
   */
  sqlMode: Mysqlconfig57_SQLMode[];
  /**
   * The maximum size in bytes of one packet.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_max_allowed_packet) for details.
   */
  maxAllowedPacket?: number;
  /**
   * Authentication plugin used in the managed MySQL cluster.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_default_authentication_plugin) for details.
   */
  defaultAuthenticationPlugin: Mysqlconfig57_AuthPlugin;
  /**
   * Transaction log flush behaviour.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_flush_log_at_trx_commit) for details.
   */
  innodbFlushLogAtTrxCommit?: number;
  /**
   * Max time in seconds for a transaction to wait for a row lock.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_lock_wait_timeout) for details.
   */
  innodbLockWaitTimeout?: number;
  /**
   * Default transaction isolation level.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_transaction_isolation) for details.
   */
  transactionIsolation: Mysqlconfig57_TransactionIsolation;
  /**
   * Print information about deadlocks in error log.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_print_all_deadlocks) for details.
   */
  innodbPrintAllDeadlocks?: boolean;
  /**
   * The number of seconds to wait for more data from a connection before aborting the read.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_net_read_timeout) for details.
   */
  netReadTimeout?: number;
  /**
   * The number of seconds to wait for a block to be written to a connection before aborting the write.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_net_write_timeout) for details.
   */
  netWriteTimeout?: number;
  /**
   * The maximum permitted result length in bytes for the GROUP_CONCAT() function.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_group_concat_max_len) for details.
   */
  groupConcatMaxLen?: number;
  /**
   * The maximum size of internal in-memory temporary tables.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_tmp_table_size) for details.
   */
  tmpTableSize?: number;
  /**
   * This variable sets the maximum size to which user-created MEMORY tables are permitted to grow.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_max_heap_table_size) for details.
   */
  maxHeapTableSize?: number;
  /**
   * The servers default time zone.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-options.html#option_mysqld_default-time-zone) for details.
   */
  defaultTimeZone: string;
  /**
   * The servers default character set.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_character_set_server) for details.
   */
  characterSetServer: string;
  /**
   * The server default collation.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_collation_server) for details.
   */
  collationServer: string;
  /**
   * Enables InnoDB adaptive hash index.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_adaptive_hash_index) for details.
   */
  innodbAdaptiveHashIndex?: boolean;
  /**
   * Enables the NUMA interleave memory policy for allocation of the InnoDB buffer pool.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_numa_interleave) for details.
   */
  innodbNumaInterleave?: boolean;
  /**
   * The size in bytes of the buffer that InnoDB uses to write to the log files on disk.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_log_buffer_size) for details.
   */
  innodbLogBufferSize?: number;
  /**
   * The size in bytes of the single InnoDB Redo log file.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_log_file_size) for details.
   */
  innodbLogFileSize?: number;
  /**
   * Limits IO available for InnoDB background tasks.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_io_capacity) for details.
   */
  innodbIoCapacity?: number;
  /**
   * Limits IO available for InnoDB background tasks.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_io_capacity_max) for details.
   */
  innodbIoCapacityMax?: number;
  /**
   * The number of I/O threads for read operations in InnoDB.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_read_io_threads) for details.
   */
  innodbReadIoThreads?: number;
  /**
   * The number of I/O threads for write operations in InnoDB.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_write_io_threads) for details.
   */
  innodbWriteIoThreads?: number;
  /**
   * The number of background threads devoted to the InnoDB purge operation.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_purge_threads) for details.
   */
  innodbPurgeThreads?: number;
  /**
   * Defines the maximum number of threads permitted inside of InnoDB.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_thread_concurrency) for details.
   */
  innodbThreadConcurrency?: number;
  /**
   * Limits the max size of InnoDB temp tablespace.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_temp_data_file_path) for details.
   */
  innodbTempDataFileMaxSize?: number;
  /**
   * A number of threads the server should cache for reuse.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_thread_cache_size) for details.
   */
  threadCacheSize?: number;
  /**
   * The stack size for each thread. The default is large enough for normal operation.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_thread_stack) for details.
   */
  threadStack?: number;
  /**
   * The minimum size of the buffer that is used for plain index scans, range index scans, and joins that do not use indexes and thus perform full table scans.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_join_buffer_size) for details.
   */
  joinBufferSize?: number;
  /**
   * Each session that must perform a sort allocates a buffer of this size.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_sort_buffer_size) for details.
   */
  sortBufferSize?: number;
  /**
   * The number of table definitions that can be stored in the definition cache.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_table_definition_cache) for details.
   */
  tableDefinitionCache?: number;
  /**
   * The number of open tables for all threads.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_table_open_cache) for details.
   */
  tableOpenCache?: number;
  /**
   * The number of open tables cache instances.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_table_open_cache_instances) for details.
   */
  tableOpenCacheInstances?: number;
  /**
   * Determines whether the server enables certain nonstandard behaviors for default values and NULL-value handling in TIMESTAMP columns.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_explicit_defaults_for_timestamp) for details.
   */
  explicitDefaultsForTimestamp?: boolean;
  /**
   * Can be used to control the operation of AUTO_INCREMENT columns.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/replication-options-source.html#sysvar_auto_increment_increment) for details.
   */
  autoIncrementIncrement?: number;
  /**
   * Can be used to control the operation of AUTO_INCREMENT columns.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/replication-options-source.html#sysvar_auto_increment_offset) for details.
   */
  autoIncrementOffset?: number;
  /**
   * Controls how often the MySQL server synchronizes the binary log to disk.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/replication-options-binary-log.html#sysvar_sync_binlog) for details.
   */
  syncBinlog?: number;
  /**
   * The size of the cache to hold changes to the binary log during a transaction.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/replication-options-binary-log.html#sysvar_binlog_cache_size) for details.
   */
  binlogCacheSize?: number;
  /**
   * Controls how many microseconds the binary log commit waits before synchronizing the binary log file to disk.
   *
   * See [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/replication-options-binary-log.html#sysvar_binlog_group_commit_sync_delay) for details.
   */
  binlogGroupCommitSyncDelay?: number;
  /**
   * For MySQL row-based replication, this variable determines how row images are written to the binary log.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/replication-options-binary-log.html#sysvar_binlog_row_image) for details.
   */
  binlogRowImage: Mysqlconfig57_BinlogRowImage;
  /**
   * When enabled, it causes the server to write informational log events such as row query log events into its binary log.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/replication-options-binary-log.html#sysvar_binlog_rows_query_log_events) for details.
   */
  binlogRowsQueryLogEvents?: boolean;
  /**
   * The number of replica acknowledgments the source must receive per transaction before proceeding.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/replication-options-source.html#sysvar_rpl_semi_sync_master_wait_for_slave_count) for details.
   */
  rplSemiSyncMasterWaitForSlaveCount?: number;
  /**
   * When using a multi-threaded replica, this variable specifies the policy used to decide which transactions are allowed to execute in parallel on the replica.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/replication-options-replica.html#sysvar_slave_parallel_type) for details.
   */
  slaveParallelType: Mysqlconfig57_SlaveParallelType;
  /**
   * Sets the number of applier threads for executing replication transactions in parallel.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/replication-options-replica.html#sysvar_slave_parallel_workers) for details.
   */
  slaveParallelWorkers?: number;
  /** The size of the binary log to hold. */
  mdbPreserveBinlogBytes?: number;
  /**
   * The number of seconds the server waits for activity on an interactive connection before closing it.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_interactive_timeout) for details.
   */
  interactiveTimeout?: number;
  /**
   * The number of seconds the server waits for activity on a noninteractive connection before closing it.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_wait_timeout) for details.
   */
  waitTimeout?: number;
  /** Replication lag threshold (seconds) which will switch MySQL to 'offline_mode = ON' to prevent users from reading stale data. */
  mdbOfflineModeEnableLag?: number;
  /**
   * Replication lag threshold (seconds) which will switch MySQL to 'offline_mode = OFF'.
   * Should be less than mdb_offline_mode_enable_lag value.
   */
  mdbOfflineModeDisableLag?: number;
  /**
   * The limit on memory consumption for the range optimizer.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_range_optimizer_max_mem_size) for details.
   */
  rangeOptimizerMaxMemSize?: number;
  /**
   * Manages slow query log.
   *
   * See [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_slow_query_log) for details.
   */
  slowQueryLog?: boolean;
  /**
   * Query execution time, after which query to be logged unconditionally, that is, `log_slow_rate_limit`` will not apply to it.
   *
   * See [Percona documentation](https://www.percona.com/doc/percona-server/8.0/diagnostics/slow_extended.html#slow_query_log_always_write_time) for details.
   */
  slowQueryLogAlwaysWriteTime?: number;
  /**
   * Specifies slow log granularity for `log_slow_rate_limit` values QUERY or SESSION.
   *
   * See [Percona documentation](https://www.percona.com/doc/percona-server/8.0/diagnostics/slow_extended.html#log_slow_rate_type) for details.
   */
  logSlowRateType: Mysqlconfig57_LogSlowRateType;
  /**
   * Specifies what fraction of session/query should be logged. Logging is enabled for every nth session/query.
   *
   * See [Percona documentation](https://www.percona.com/doc/percona-server/8.0/diagnostics/slow_extended.html#log_slow_rate_limit) for details.
   */
  logSlowRateLimit?: number;
  /**
   * When TRUE, statements executed by stored procedures are logged to the slow log.
   *
   * See [Percona documentation](https://www.percona.com/doc/percona-server/8.0/diagnostics/slow_extended.html#log_slow_sp_statements) for details.
   */
  logSlowSpStatements?: boolean;
  /**
   * Filters the slow log by the query's execution plan.
   *
   * See [Percona documentation](https://www.percona.com/doc/percona-server/8.0/diagnostics/slow_extended.html#log_slow_filter) for details.
   */
  logSlowFilter: Mysqlconfig57_LogSlowFilterType[];
  /**
   * Replication lag threshold (seconds) which allows replica to be promoted to master while executing "switchover from".
   * Should be less than mdb_offline_mode_disable_lag.
   */
  mdbPriorityChoiceMaxLag?: number;
  /**
   * Specifies the page size for InnoDB tablespaces.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_page_size).
   */
  innodbPageSize?: number;
  /**
   * The limit in bytes on the size of the temporary log files used during online DDL operations
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_online_alter_log_max_size).
   */
  innodbOnlineAlterLogMaxSize?: number;
  /**
   * Minimum length of words that are stored in an InnoDB FULLTEXT index
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_ft_min_token_size).
   */
  innodbFtMinTokenSize?: number;
  /**
   * Maximum length of words that are stored in an InnoDB FULLTEXT index
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_ft_max_token_size).
   */
  innodbFtMaxTokenSize?: number;
  /**
   * Table names storage and comparison strategy
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_lower_case_table_names).
   */
  lowerCaseTableNames?: number;
  /**
   * Manages MySQL 5.6 compatibility
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_show_compatibility_56).
   */
  showCompatibility56?: boolean;
  /**
   * The number of times that any given stored procedure may be called recursively.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_max_sp_recursion_depth).
   */
  maxSpRecursionDepth?: number;
  /**
   * The level of zlib compression to use for InnoDB compressed tables and indexes.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_compression_level).
   */
  innodbCompressionLevel?: number;
  /**
   * Specifies how the source mysqld generates the dependency information that it writes in the binary log to help replicas determine which transactions can be executed in parallel.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/replication-options-binary-log.html#sysvar_binlog_transaction_dependency_tracking).
   */
  binlogTransactionDependencyTracking: Mysqlconfig57_BinlogTransactionDependencyTracking;
  /**
   * Config specific will be all changes to a table take effect immediately or you must use COMMIT to accept a transaction or ROLLBACK to cancel it.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_autocommit).
   */
  autocommit?: boolean;
  /**
   * Enables or disables periodic output for the standard InnoDB Monitor.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_status_output).
   */
  innodbStatusOutput?: boolean;
  /**
   * When innodb_strict_mode is enabled, InnoDB returns errors rather than warnings when checking for invalid or incompatible table options.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_strict_mode).
   */
  innodbStrictMode?: boolean;
  /**
   * Makes InnoDB to write information about all lock wait timeout errors into the log file.
   *
   * For details, see [Percona documentation for the variable](https://docs.percona.com/percona-server/5.7/diagnostics/innodb_show_status.html?highlight=innodb_print_lock_wait_timeout_info).
   */
  innodbPrintLockWaitTimeoutInfo?: boolean;
  /**
   * System variable specifies the verbosity for handling events intended for the error log
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_log_error_verbosity).
   */
  logErrorVerbosity?: number;
  /**
   * The maximum number of bytes of memory reserved per session for computation of normalized statement digests.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_max_digest_length).
   */
  maxDigestLength?: number;
  /**
   * Do not cache results that are larger than this number of bytes.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_query_cache_limit).
   */
  queryCacheLimit?: number;
  /**
   * The amount of memory allocated for caching query results.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_query_cache_size).
   */
  queryCacheSize?: number;
  /**
   * Set the query cache type.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_query_cache_type).
   */
  queryCacheType?: number;
  /**
   * // This variable specifies the timeout in seconds for attempts to acquire metadata locks
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_lock_wait_timeout).
   */
  lockWaitTimeout?: number;
  /**
   * This variable limits the total number of prepared statements in the server.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_max_prepared_stmt_count).
   */
  maxPreparedStmtCount?: number;
  /**
   * The system variable enables control over optimizer behavior.
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_optimizer_switch)
   * https://dev.mysql.com/doc/refman/5.7/en/switchable-optimizations.html
   */
  optimizerSwitch: string;
  /**
   * The maximum depth of search performed by the query optimizer
   *
   * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html)
   */
  optimizerSearchDepth?: number;
  /**
   * Enables and disables collection of query times
   *
   * For details, see [Percona documentation for the variable](https://docs.percona.com/percona-server/5.7/diagnostics/response_time_distribution.html#query_response_time_stats).
   */
  queryResponseTimeStats?: boolean;
}

export enum Mysqlconfig57_SQLMode {
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
  NO_FIELD_OPTIONS = 12,
  NO_KEY_OPTIONS = 13,
  NO_TABLE_OPTIONS = 14,
  ONLY_FULL_GROUP_BY = 15,
  PAD_CHAR_TO_FULL_LENGTH = 16,
  PIPES_AS_CONCAT = 17,
  REAL_AS_FLOAT = 18,
  STRICT_ALL_TABLES = 19,
  STRICT_TRANS_TABLES = 20,
  ANSI = 21,
  TRADITIONAL = 22,
  DB2 = 23,
  MAXDB = 24,
  MSSQL = 25,
  MYSQL323 = 26,
  MYSQL40 = 27,
  ORACLE = 28,
  POSTGRESQL = 29,
  NO_AUTO_CREATE_USER = 30,
  NO_DIR_IN_CREATE = 31,
  UNRECOGNIZED = -1,
}

export function mysqlconfig57_SQLModeFromJSON(
  object: any
): Mysqlconfig57_SQLMode {
  switch (object) {
    case 0:
    case "SQLMODE_UNSPECIFIED":
      return Mysqlconfig57_SQLMode.SQLMODE_UNSPECIFIED;
    case 1:
    case "ALLOW_INVALID_DATES":
      return Mysqlconfig57_SQLMode.ALLOW_INVALID_DATES;
    case 2:
    case "ANSI_QUOTES":
      return Mysqlconfig57_SQLMode.ANSI_QUOTES;
    case 3:
    case "ERROR_FOR_DIVISION_BY_ZERO":
      return Mysqlconfig57_SQLMode.ERROR_FOR_DIVISION_BY_ZERO;
    case 4:
    case "HIGH_NOT_PRECEDENCE":
      return Mysqlconfig57_SQLMode.HIGH_NOT_PRECEDENCE;
    case 5:
    case "IGNORE_SPACE":
      return Mysqlconfig57_SQLMode.IGNORE_SPACE;
    case 6:
    case "NO_AUTO_VALUE_ON_ZERO":
      return Mysqlconfig57_SQLMode.NO_AUTO_VALUE_ON_ZERO;
    case 7:
    case "NO_BACKSLASH_ESCAPES":
      return Mysqlconfig57_SQLMode.NO_BACKSLASH_ESCAPES;
    case 8:
    case "NO_ENGINE_SUBSTITUTION":
      return Mysqlconfig57_SQLMode.NO_ENGINE_SUBSTITUTION;
    case 9:
    case "NO_UNSIGNED_SUBTRACTION":
      return Mysqlconfig57_SQLMode.NO_UNSIGNED_SUBTRACTION;
    case 10:
    case "NO_ZERO_DATE":
      return Mysqlconfig57_SQLMode.NO_ZERO_DATE;
    case 11:
    case "NO_ZERO_IN_DATE":
      return Mysqlconfig57_SQLMode.NO_ZERO_IN_DATE;
    case 12:
    case "NO_FIELD_OPTIONS":
      return Mysqlconfig57_SQLMode.NO_FIELD_OPTIONS;
    case 13:
    case "NO_KEY_OPTIONS":
      return Mysqlconfig57_SQLMode.NO_KEY_OPTIONS;
    case 14:
    case "NO_TABLE_OPTIONS":
      return Mysqlconfig57_SQLMode.NO_TABLE_OPTIONS;
    case 15:
    case "ONLY_FULL_GROUP_BY":
      return Mysqlconfig57_SQLMode.ONLY_FULL_GROUP_BY;
    case 16:
    case "PAD_CHAR_TO_FULL_LENGTH":
      return Mysqlconfig57_SQLMode.PAD_CHAR_TO_FULL_LENGTH;
    case 17:
    case "PIPES_AS_CONCAT":
      return Mysqlconfig57_SQLMode.PIPES_AS_CONCAT;
    case 18:
    case "REAL_AS_FLOAT":
      return Mysqlconfig57_SQLMode.REAL_AS_FLOAT;
    case 19:
    case "STRICT_ALL_TABLES":
      return Mysqlconfig57_SQLMode.STRICT_ALL_TABLES;
    case 20:
    case "STRICT_TRANS_TABLES":
      return Mysqlconfig57_SQLMode.STRICT_TRANS_TABLES;
    case 21:
    case "ANSI":
      return Mysqlconfig57_SQLMode.ANSI;
    case 22:
    case "TRADITIONAL":
      return Mysqlconfig57_SQLMode.TRADITIONAL;
    case 23:
    case "DB2":
      return Mysqlconfig57_SQLMode.DB2;
    case 24:
    case "MAXDB":
      return Mysqlconfig57_SQLMode.MAXDB;
    case 25:
    case "MSSQL":
      return Mysqlconfig57_SQLMode.MSSQL;
    case 26:
    case "MYSQL323":
      return Mysqlconfig57_SQLMode.MYSQL323;
    case 27:
    case "MYSQL40":
      return Mysqlconfig57_SQLMode.MYSQL40;
    case 28:
    case "ORACLE":
      return Mysqlconfig57_SQLMode.ORACLE;
    case 29:
    case "POSTGRESQL":
      return Mysqlconfig57_SQLMode.POSTGRESQL;
    case 30:
    case "NO_AUTO_CREATE_USER":
      return Mysqlconfig57_SQLMode.NO_AUTO_CREATE_USER;
    case 31:
    case "NO_DIR_IN_CREATE":
      return Mysqlconfig57_SQLMode.NO_DIR_IN_CREATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mysqlconfig57_SQLMode.UNRECOGNIZED;
  }
}

export function mysqlconfig57_SQLModeToJSON(
  object: Mysqlconfig57_SQLMode
): string {
  switch (object) {
    case Mysqlconfig57_SQLMode.SQLMODE_UNSPECIFIED:
      return "SQLMODE_UNSPECIFIED";
    case Mysqlconfig57_SQLMode.ALLOW_INVALID_DATES:
      return "ALLOW_INVALID_DATES";
    case Mysqlconfig57_SQLMode.ANSI_QUOTES:
      return "ANSI_QUOTES";
    case Mysqlconfig57_SQLMode.ERROR_FOR_DIVISION_BY_ZERO:
      return "ERROR_FOR_DIVISION_BY_ZERO";
    case Mysqlconfig57_SQLMode.HIGH_NOT_PRECEDENCE:
      return "HIGH_NOT_PRECEDENCE";
    case Mysqlconfig57_SQLMode.IGNORE_SPACE:
      return "IGNORE_SPACE";
    case Mysqlconfig57_SQLMode.NO_AUTO_VALUE_ON_ZERO:
      return "NO_AUTO_VALUE_ON_ZERO";
    case Mysqlconfig57_SQLMode.NO_BACKSLASH_ESCAPES:
      return "NO_BACKSLASH_ESCAPES";
    case Mysqlconfig57_SQLMode.NO_ENGINE_SUBSTITUTION:
      return "NO_ENGINE_SUBSTITUTION";
    case Mysqlconfig57_SQLMode.NO_UNSIGNED_SUBTRACTION:
      return "NO_UNSIGNED_SUBTRACTION";
    case Mysqlconfig57_SQLMode.NO_ZERO_DATE:
      return "NO_ZERO_DATE";
    case Mysqlconfig57_SQLMode.NO_ZERO_IN_DATE:
      return "NO_ZERO_IN_DATE";
    case Mysqlconfig57_SQLMode.NO_FIELD_OPTIONS:
      return "NO_FIELD_OPTIONS";
    case Mysqlconfig57_SQLMode.NO_KEY_OPTIONS:
      return "NO_KEY_OPTIONS";
    case Mysqlconfig57_SQLMode.NO_TABLE_OPTIONS:
      return "NO_TABLE_OPTIONS";
    case Mysqlconfig57_SQLMode.ONLY_FULL_GROUP_BY:
      return "ONLY_FULL_GROUP_BY";
    case Mysqlconfig57_SQLMode.PAD_CHAR_TO_FULL_LENGTH:
      return "PAD_CHAR_TO_FULL_LENGTH";
    case Mysqlconfig57_SQLMode.PIPES_AS_CONCAT:
      return "PIPES_AS_CONCAT";
    case Mysqlconfig57_SQLMode.REAL_AS_FLOAT:
      return "REAL_AS_FLOAT";
    case Mysqlconfig57_SQLMode.STRICT_ALL_TABLES:
      return "STRICT_ALL_TABLES";
    case Mysqlconfig57_SQLMode.STRICT_TRANS_TABLES:
      return "STRICT_TRANS_TABLES";
    case Mysqlconfig57_SQLMode.ANSI:
      return "ANSI";
    case Mysqlconfig57_SQLMode.TRADITIONAL:
      return "TRADITIONAL";
    case Mysqlconfig57_SQLMode.DB2:
      return "DB2";
    case Mysqlconfig57_SQLMode.MAXDB:
      return "MAXDB";
    case Mysqlconfig57_SQLMode.MSSQL:
      return "MSSQL";
    case Mysqlconfig57_SQLMode.MYSQL323:
      return "MYSQL323";
    case Mysqlconfig57_SQLMode.MYSQL40:
      return "MYSQL40";
    case Mysqlconfig57_SQLMode.ORACLE:
      return "ORACLE";
    case Mysqlconfig57_SQLMode.POSTGRESQL:
      return "POSTGRESQL";
    case Mysqlconfig57_SQLMode.NO_AUTO_CREATE_USER:
      return "NO_AUTO_CREATE_USER";
    case Mysqlconfig57_SQLMode.NO_DIR_IN_CREATE:
      return "NO_DIR_IN_CREATE";
    default:
      return "UNKNOWN";
  }
}

export enum Mysqlconfig57_AuthPlugin {
  AUTH_PLUGIN_UNSPECIFIED = 0,
  /** MYSQL_NATIVE_PASSWORD - Using [Native Pluggable Authentication](https://dev.mysql.com/doc/refman/5.7/en/native-pluggable-authentication.html). */
  MYSQL_NATIVE_PASSWORD = 1,
  /** @deprecated */
  CACHING_SHA2_PASSWORD = 2,
  /** SHA256_PASSWORD - Using [SHA-256 Pluggable Authentication](https://dev.mysql.com/doc/refman/5.7/en/sha256-pluggable-authentication.html). */
  SHA256_PASSWORD = 3,
  UNRECOGNIZED = -1,
}

export function mysqlconfig57_AuthPluginFromJSON(
  object: any
): Mysqlconfig57_AuthPlugin {
  switch (object) {
    case 0:
    case "AUTH_PLUGIN_UNSPECIFIED":
      return Mysqlconfig57_AuthPlugin.AUTH_PLUGIN_UNSPECIFIED;
    case 1:
    case "MYSQL_NATIVE_PASSWORD":
      return Mysqlconfig57_AuthPlugin.MYSQL_NATIVE_PASSWORD;
    case 2:
    case "CACHING_SHA2_PASSWORD":
      return Mysqlconfig57_AuthPlugin.CACHING_SHA2_PASSWORD;
    case 3:
    case "SHA256_PASSWORD":
      return Mysqlconfig57_AuthPlugin.SHA256_PASSWORD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mysqlconfig57_AuthPlugin.UNRECOGNIZED;
  }
}

export function mysqlconfig57_AuthPluginToJSON(
  object: Mysqlconfig57_AuthPlugin
): string {
  switch (object) {
    case Mysqlconfig57_AuthPlugin.AUTH_PLUGIN_UNSPECIFIED:
      return "AUTH_PLUGIN_UNSPECIFIED";
    case Mysqlconfig57_AuthPlugin.MYSQL_NATIVE_PASSWORD:
      return "MYSQL_NATIVE_PASSWORD";
    case Mysqlconfig57_AuthPlugin.CACHING_SHA2_PASSWORD:
      return "CACHING_SHA2_PASSWORD";
    case Mysqlconfig57_AuthPlugin.SHA256_PASSWORD:
      return "SHA256_PASSWORD";
    default:
      return "UNKNOWN";
  }
}

export enum Mysqlconfig57_TransactionIsolation {
  TRANSACTION_ISOLATION_UNSPECIFIED = 0,
  READ_COMMITTED = 1,
  REPEATABLE_READ = 2,
  SERIALIZABLE = 3,
  UNRECOGNIZED = -1,
}

export function mysqlconfig57_TransactionIsolationFromJSON(
  object: any
): Mysqlconfig57_TransactionIsolation {
  switch (object) {
    case 0:
    case "TRANSACTION_ISOLATION_UNSPECIFIED":
      return Mysqlconfig57_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED;
    case 1:
    case "READ_COMMITTED":
      return Mysqlconfig57_TransactionIsolation.READ_COMMITTED;
    case 2:
    case "REPEATABLE_READ":
      return Mysqlconfig57_TransactionIsolation.REPEATABLE_READ;
    case 3:
    case "SERIALIZABLE":
      return Mysqlconfig57_TransactionIsolation.SERIALIZABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mysqlconfig57_TransactionIsolation.UNRECOGNIZED;
  }
}

export function mysqlconfig57_TransactionIsolationToJSON(
  object: Mysqlconfig57_TransactionIsolation
): string {
  switch (object) {
    case Mysqlconfig57_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED:
      return "TRANSACTION_ISOLATION_UNSPECIFIED";
    case Mysqlconfig57_TransactionIsolation.READ_COMMITTED:
      return "READ_COMMITTED";
    case Mysqlconfig57_TransactionIsolation.REPEATABLE_READ:
      return "REPEATABLE_READ";
    case Mysqlconfig57_TransactionIsolation.SERIALIZABLE:
      return "SERIALIZABLE";
    default:
      return "UNKNOWN";
  }
}

export enum Mysqlconfig57_BinlogRowImage {
  BINLOG_ROW_IMAGE_UNSPECIFIED = 0,
  FULL = 1,
  MINIMAL = 2,
  NOBLOB = 3,
  UNRECOGNIZED = -1,
}

export function mysqlconfig57_BinlogRowImageFromJSON(
  object: any
): Mysqlconfig57_BinlogRowImage {
  switch (object) {
    case 0:
    case "BINLOG_ROW_IMAGE_UNSPECIFIED":
      return Mysqlconfig57_BinlogRowImage.BINLOG_ROW_IMAGE_UNSPECIFIED;
    case 1:
    case "FULL":
      return Mysqlconfig57_BinlogRowImage.FULL;
    case 2:
    case "MINIMAL":
      return Mysqlconfig57_BinlogRowImage.MINIMAL;
    case 3:
    case "NOBLOB":
      return Mysqlconfig57_BinlogRowImage.NOBLOB;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mysqlconfig57_BinlogRowImage.UNRECOGNIZED;
  }
}

export function mysqlconfig57_BinlogRowImageToJSON(
  object: Mysqlconfig57_BinlogRowImage
): string {
  switch (object) {
    case Mysqlconfig57_BinlogRowImage.BINLOG_ROW_IMAGE_UNSPECIFIED:
      return "BINLOG_ROW_IMAGE_UNSPECIFIED";
    case Mysqlconfig57_BinlogRowImage.FULL:
      return "FULL";
    case Mysqlconfig57_BinlogRowImage.MINIMAL:
      return "MINIMAL";
    case Mysqlconfig57_BinlogRowImage.NOBLOB:
      return "NOBLOB";
    default:
      return "UNKNOWN";
  }
}

export enum Mysqlconfig57_SlaveParallelType {
  SLAVE_PARALLEL_TYPE_UNSPECIFIED = 0,
  DATABASE = 1,
  LOGICAL_CLOCK = 2,
  UNRECOGNIZED = -1,
}

export function mysqlconfig57_SlaveParallelTypeFromJSON(
  object: any
): Mysqlconfig57_SlaveParallelType {
  switch (object) {
    case 0:
    case "SLAVE_PARALLEL_TYPE_UNSPECIFIED":
      return Mysqlconfig57_SlaveParallelType.SLAVE_PARALLEL_TYPE_UNSPECIFIED;
    case 1:
    case "DATABASE":
      return Mysqlconfig57_SlaveParallelType.DATABASE;
    case 2:
    case "LOGICAL_CLOCK":
      return Mysqlconfig57_SlaveParallelType.LOGICAL_CLOCK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mysqlconfig57_SlaveParallelType.UNRECOGNIZED;
  }
}

export function mysqlconfig57_SlaveParallelTypeToJSON(
  object: Mysqlconfig57_SlaveParallelType
): string {
  switch (object) {
    case Mysqlconfig57_SlaveParallelType.SLAVE_PARALLEL_TYPE_UNSPECIFIED:
      return "SLAVE_PARALLEL_TYPE_UNSPECIFIED";
    case Mysqlconfig57_SlaveParallelType.DATABASE:
      return "DATABASE";
    case Mysqlconfig57_SlaveParallelType.LOGICAL_CLOCK:
      return "LOGICAL_CLOCK";
    default:
      return "UNKNOWN";
  }
}

export enum Mysqlconfig57_LogSlowRateType {
  LOG_SLOW_RATE_TYPE_UNSPECIFIED = 0,
  SESSION = 1,
  QUERY = 2,
  UNRECOGNIZED = -1,
}

export function mysqlconfig57_LogSlowRateTypeFromJSON(
  object: any
): Mysqlconfig57_LogSlowRateType {
  switch (object) {
    case 0:
    case "LOG_SLOW_RATE_TYPE_UNSPECIFIED":
      return Mysqlconfig57_LogSlowRateType.LOG_SLOW_RATE_TYPE_UNSPECIFIED;
    case 1:
    case "SESSION":
      return Mysqlconfig57_LogSlowRateType.SESSION;
    case 2:
    case "QUERY":
      return Mysqlconfig57_LogSlowRateType.QUERY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mysqlconfig57_LogSlowRateType.UNRECOGNIZED;
  }
}

export function mysqlconfig57_LogSlowRateTypeToJSON(
  object: Mysqlconfig57_LogSlowRateType
): string {
  switch (object) {
    case Mysqlconfig57_LogSlowRateType.LOG_SLOW_RATE_TYPE_UNSPECIFIED:
      return "LOG_SLOW_RATE_TYPE_UNSPECIFIED";
    case Mysqlconfig57_LogSlowRateType.SESSION:
      return "SESSION";
    case Mysqlconfig57_LogSlowRateType.QUERY:
      return "QUERY";
    default:
      return "UNKNOWN";
  }
}

export enum Mysqlconfig57_LogSlowFilterType {
  LOG_SLOW_FILTER_TYPE_UNSPECIFIED = 0,
  FULL_SCAN = 1,
  FULL_JOIN = 2,
  TMP_TABLE = 3,
  TMP_TABLE_ON_DISK = 4,
  FILESORT = 5,
  FILESORT_ON_DISK = 6,
  UNRECOGNIZED = -1,
}

export function mysqlconfig57_LogSlowFilterTypeFromJSON(
  object: any
): Mysqlconfig57_LogSlowFilterType {
  switch (object) {
    case 0:
    case "LOG_SLOW_FILTER_TYPE_UNSPECIFIED":
      return Mysqlconfig57_LogSlowFilterType.LOG_SLOW_FILTER_TYPE_UNSPECIFIED;
    case 1:
    case "FULL_SCAN":
      return Mysqlconfig57_LogSlowFilterType.FULL_SCAN;
    case 2:
    case "FULL_JOIN":
      return Mysqlconfig57_LogSlowFilterType.FULL_JOIN;
    case 3:
    case "TMP_TABLE":
      return Mysqlconfig57_LogSlowFilterType.TMP_TABLE;
    case 4:
    case "TMP_TABLE_ON_DISK":
      return Mysqlconfig57_LogSlowFilterType.TMP_TABLE_ON_DISK;
    case 5:
    case "FILESORT":
      return Mysqlconfig57_LogSlowFilterType.FILESORT;
    case 6:
    case "FILESORT_ON_DISK":
      return Mysqlconfig57_LogSlowFilterType.FILESORT_ON_DISK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mysqlconfig57_LogSlowFilterType.UNRECOGNIZED;
  }
}

export function mysqlconfig57_LogSlowFilterTypeToJSON(
  object: Mysqlconfig57_LogSlowFilterType
): string {
  switch (object) {
    case Mysqlconfig57_LogSlowFilterType.LOG_SLOW_FILTER_TYPE_UNSPECIFIED:
      return "LOG_SLOW_FILTER_TYPE_UNSPECIFIED";
    case Mysqlconfig57_LogSlowFilterType.FULL_SCAN:
      return "FULL_SCAN";
    case Mysqlconfig57_LogSlowFilterType.FULL_JOIN:
      return "FULL_JOIN";
    case Mysqlconfig57_LogSlowFilterType.TMP_TABLE:
      return "TMP_TABLE";
    case Mysqlconfig57_LogSlowFilterType.TMP_TABLE_ON_DISK:
      return "TMP_TABLE_ON_DISK";
    case Mysqlconfig57_LogSlowFilterType.FILESORT:
      return "FILESORT";
    case Mysqlconfig57_LogSlowFilterType.FILESORT_ON_DISK:
      return "FILESORT_ON_DISK";
    default:
      return "UNKNOWN";
  }
}

export enum Mysqlconfig57_BinlogTransactionDependencyTracking {
  BINLOG_TRANSACTION_DEPENDENCY_TRACKING_UNSPECIFIED = 0,
  COMMIT_ORDER = 1,
  WRITESET = 2,
  WRITESET_SESSION = 3,
  UNRECOGNIZED = -1,
}

export function mysqlconfig57_BinlogTransactionDependencyTrackingFromJSON(
  object: any
): Mysqlconfig57_BinlogTransactionDependencyTracking {
  switch (object) {
    case 0:
    case "BINLOG_TRANSACTION_DEPENDENCY_TRACKING_UNSPECIFIED":
      return Mysqlconfig57_BinlogTransactionDependencyTracking.BINLOG_TRANSACTION_DEPENDENCY_TRACKING_UNSPECIFIED;
    case 1:
    case "COMMIT_ORDER":
      return Mysqlconfig57_BinlogTransactionDependencyTracking.COMMIT_ORDER;
    case 2:
    case "WRITESET":
      return Mysqlconfig57_BinlogTransactionDependencyTracking.WRITESET;
    case 3:
    case "WRITESET_SESSION":
      return Mysqlconfig57_BinlogTransactionDependencyTracking.WRITESET_SESSION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mysqlconfig57_BinlogTransactionDependencyTracking.UNRECOGNIZED;
  }
}

export function mysqlconfig57_BinlogTransactionDependencyTrackingToJSON(
  object: Mysqlconfig57_BinlogTransactionDependencyTracking
): string {
  switch (object) {
    case Mysqlconfig57_BinlogTransactionDependencyTracking.BINLOG_TRANSACTION_DEPENDENCY_TRACKING_UNSPECIFIED:
      return "BINLOG_TRANSACTION_DEPENDENCY_TRACKING_UNSPECIFIED";
    case Mysqlconfig57_BinlogTransactionDependencyTracking.COMMIT_ORDER:
      return "COMMIT_ORDER";
    case Mysqlconfig57_BinlogTransactionDependencyTracking.WRITESET:
      return "WRITESET";
    case Mysqlconfig57_BinlogTransactionDependencyTracking.WRITESET_SESSION:
      return "WRITESET_SESSION";
    default:
      return "UNKNOWN";
  }
}

export interface Mysqlconfigset57 {
  $type: "yandex.cloud.mdb.mysql.v1.config.MysqlConfigSet5_7";
  /**
   * Effective settings for a MySQL 5.7 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?: Mysqlconfig57;
  /** User-defined settings for a MySQL 5.7 cluster. */
  userConfig?: Mysqlconfig57;
  /** Default configuration for a MySQL 5.7 cluster. */
  defaultConfig?: Mysqlconfig57;
}

const baseMysqlconfig57: object = {
  $type: "yandex.cloud.mdb.mysql.v1.config.MysqlConfig5_7",
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
  binlogTransactionDependencyTracking: 0,
  optimizerSwitch: "",
};

export const Mysqlconfig57 = {
  $type: "yandex.cloud.mdb.mysql.v1.config.MysqlConfig5_7" as const,

  encode(
    message: Mysqlconfig57,
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
    if (message.mdbPreserveBinlogBytes !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.mdbPreserveBinlogBytes!,
        },
        writer.uint32(402).fork()
      ).ldelim();
    }
    if (message.interactiveTimeout !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.interactiveTimeout!,
        },
        writer.uint32(410).fork()
      ).ldelim();
    }
    if (message.waitTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.waitTimeout! },
        writer.uint32(418).fork()
      ).ldelim();
    }
    if (message.mdbOfflineModeEnableLag !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.mdbOfflineModeEnableLag!,
        },
        writer.uint32(426).fork()
      ).ldelim();
    }
    if (message.mdbOfflineModeDisableLag !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.mdbOfflineModeDisableLag!,
        },
        writer.uint32(434).fork()
      ).ldelim();
    }
    if (message.rangeOptimizerMaxMemSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.rangeOptimizerMaxMemSize!,
        },
        writer.uint32(442).fork()
      ).ldelim();
    }
    if (message.slowQueryLog !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.slowQueryLog! },
        writer.uint32(450).fork()
      ).ldelim();
    }
    if (message.slowQueryLogAlwaysWriteTime !== undefined) {
      DoubleValue.encode(
        {
          $type: "google.protobuf.DoubleValue",
          value: message.slowQueryLogAlwaysWriteTime!,
        },
        writer.uint32(458).fork()
      ).ldelim();
    }
    if (message.logSlowRateType !== 0) {
      writer.uint32(464).int32(message.logSlowRateType);
    }
    if (message.logSlowRateLimit !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.logSlowRateLimit!,
        },
        writer.uint32(474).fork()
      ).ldelim();
    }
    if (message.logSlowSpStatements !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.logSlowSpStatements!,
        },
        writer.uint32(482).fork()
      ).ldelim();
    }
    writer.uint32(490).fork();
    for (const v of message.logSlowFilter) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.mdbPriorityChoiceMaxLag !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.mdbPriorityChoiceMaxLag!,
        },
        writer.uint32(498).fork()
      ).ldelim();
    }
    if (message.innodbPageSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.innodbPageSize! },
        writer.uint32(506).fork()
      ).ldelim();
    }
    if (message.innodbOnlineAlterLogMaxSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.innodbOnlineAlterLogMaxSize!,
        },
        writer.uint32(514).fork()
      ).ldelim();
    }
    if (message.innodbFtMinTokenSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.innodbFtMinTokenSize!,
        },
        writer.uint32(522).fork()
      ).ldelim();
    }
    if (message.innodbFtMaxTokenSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.innodbFtMaxTokenSize!,
        },
        writer.uint32(530).fork()
      ).ldelim();
    }
    if (message.lowerCaseTableNames !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.lowerCaseTableNames!,
        },
        writer.uint32(538).fork()
      ).ldelim();
    }
    if (message.showCompatibility56 !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.showCompatibility56!,
        },
        writer.uint32(546).fork()
      ).ldelim();
    }
    if (message.maxSpRecursionDepth !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxSpRecursionDepth!,
        },
        writer.uint32(554).fork()
      ).ldelim();
    }
    if (message.innodbCompressionLevel !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.innodbCompressionLevel!,
        },
        writer.uint32(562).fork()
      ).ldelim();
    }
    if (message.binlogTransactionDependencyTracking !== 0) {
      writer.uint32(568).int32(message.binlogTransactionDependencyTracking);
    }
    if (message.autocommit !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.autocommit! },
        writer.uint32(578).fork()
      ).ldelim();
    }
    if (message.innodbStatusOutput !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.innodbStatusOutput!,
        },
        writer.uint32(586).fork()
      ).ldelim();
    }
    if (message.innodbStrictMode !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.innodbStrictMode!,
        },
        writer.uint32(594).fork()
      ).ldelim();
    }
    if (message.innodbPrintLockWaitTimeoutInfo !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.innodbPrintLockWaitTimeoutInfo!,
        },
        writer.uint32(602).fork()
      ).ldelim();
    }
    if (message.logErrorVerbosity !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.logErrorVerbosity!,
        },
        writer.uint32(610).fork()
      ).ldelim();
    }
    if (message.maxDigestLength !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxDigestLength!,
        },
        writer.uint32(618).fork()
      ).ldelim();
    }
    if (message.queryCacheLimit !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.queryCacheLimit!,
        },
        writer.uint32(626).fork()
      ).ldelim();
    }
    if (message.queryCacheSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.queryCacheSize! },
        writer.uint32(634).fork()
      ).ldelim();
    }
    if (message.queryCacheType !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.queryCacheType! },
        writer.uint32(642).fork()
      ).ldelim();
    }
    if (message.lockWaitTimeout !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.lockWaitTimeout!,
        },
        writer.uint32(650).fork()
      ).ldelim();
    }
    if (message.maxPreparedStmtCount !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxPreparedStmtCount!,
        },
        writer.uint32(658).fork()
      ).ldelim();
    }
    if (message.optimizerSwitch !== "") {
      writer.uint32(666).string(message.optimizerSwitch);
    }
    if (message.optimizerSearchDepth !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.optimizerSearchDepth!,
        },
        writer.uint32(674).fork()
      ).ldelim();
    }
    if (message.queryResponseTimeStats !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.queryResponseTimeStats!,
        },
        writer.uint32(682).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mysqlconfig57 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMysqlconfig57 } as Mysqlconfig57;
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
          message.mdbPreserveBinlogBytes = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 51:
          message.interactiveTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 52:
          message.waitTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 53:
          message.mdbOfflineModeEnableLag = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 54:
          message.mdbOfflineModeDisableLag = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 55:
          message.rangeOptimizerMaxMemSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 56:
          message.slowQueryLog = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 57:
          message.slowQueryLogAlwaysWriteTime = DoubleValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 58:
          message.logSlowRateType = reader.int32() as any;
          break;
        case 59:
          message.logSlowRateLimit = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 60:
          message.logSlowSpStatements = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 61:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.logSlowFilter.push(reader.int32() as any);
            }
          } else {
            message.logSlowFilter.push(reader.int32() as any);
          }
          break;
        case 62:
          message.mdbPriorityChoiceMaxLag = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 63:
          message.innodbPageSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 64:
          message.innodbOnlineAlterLogMaxSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 65:
          message.innodbFtMinTokenSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 66:
          message.innodbFtMaxTokenSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 67:
          message.lowerCaseTableNames = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 68:
          message.showCompatibility56 = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 69:
          message.maxSpRecursionDepth = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 70:
          message.innodbCompressionLevel = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 71:
          message.binlogTransactionDependencyTracking = reader.int32() as any;
          break;
        case 72:
          message.autocommit = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 73:
          message.innodbStatusOutput = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 74:
          message.innodbStrictMode = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 75:
          message.innodbPrintLockWaitTimeoutInfo = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 76:
          message.logErrorVerbosity = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 77:
          message.maxDigestLength = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 78:
          message.queryCacheLimit = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 79:
          message.queryCacheSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 80:
          message.queryCacheType = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 81:
          message.lockWaitTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 82:
          message.maxPreparedStmtCount = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 83:
          message.optimizerSwitch = reader.string();
          break;
        case 84:
          message.optimizerSearchDepth = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 85:
          message.queryResponseTimeStats = BoolValue.decode(
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

  fromJSON(object: any): Mysqlconfig57 {
    const message = { ...baseMysqlconfig57 } as Mysqlconfig57;
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
      mysqlconfig57_SQLModeFromJSON(e)
    );
    message.maxAllowedPacket =
      object.maxAllowedPacket !== undefined && object.maxAllowedPacket !== null
        ? Number(object.maxAllowedPacket)
        : undefined;
    message.defaultAuthenticationPlugin =
      object.defaultAuthenticationPlugin !== undefined &&
      object.defaultAuthenticationPlugin !== null
        ? mysqlconfig57_AuthPluginFromJSON(object.defaultAuthenticationPlugin)
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
        ? mysqlconfig57_TransactionIsolationFromJSON(
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
        ? mysqlconfig57_BinlogRowImageFromJSON(object.binlogRowImage)
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
        ? mysqlconfig57_SlaveParallelTypeFromJSON(object.slaveParallelType)
        : 0;
    message.slaveParallelWorkers =
      object.slaveParallelWorkers !== undefined &&
      object.slaveParallelWorkers !== null
        ? Number(object.slaveParallelWorkers)
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
        ? mysqlconfig57_LogSlowRateTypeFromJSON(object.logSlowRateType)
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
      mysqlconfig57_LogSlowFilterTypeFromJSON(e)
    );
    message.mdbPriorityChoiceMaxLag =
      object.mdbPriorityChoiceMaxLag !== undefined &&
      object.mdbPriorityChoiceMaxLag !== null
        ? Number(object.mdbPriorityChoiceMaxLag)
        : undefined;
    message.innodbPageSize =
      object.innodbPageSize !== undefined && object.innodbPageSize !== null
        ? Number(object.innodbPageSize)
        : undefined;
    message.innodbOnlineAlterLogMaxSize =
      object.innodbOnlineAlterLogMaxSize !== undefined &&
      object.innodbOnlineAlterLogMaxSize !== null
        ? Number(object.innodbOnlineAlterLogMaxSize)
        : undefined;
    message.innodbFtMinTokenSize =
      object.innodbFtMinTokenSize !== undefined &&
      object.innodbFtMinTokenSize !== null
        ? Number(object.innodbFtMinTokenSize)
        : undefined;
    message.innodbFtMaxTokenSize =
      object.innodbFtMaxTokenSize !== undefined &&
      object.innodbFtMaxTokenSize !== null
        ? Number(object.innodbFtMaxTokenSize)
        : undefined;
    message.lowerCaseTableNames =
      object.lowerCaseTableNames !== undefined &&
      object.lowerCaseTableNames !== null
        ? Number(object.lowerCaseTableNames)
        : undefined;
    message.showCompatibility56 =
      object.showCompatibility_56 !== undefined &&
      object.showCompatibility_56 !== null
        ? Boolean(object.showCompatibility_56)
        : undefined;
    message.maxSpRecursionDepth =
      object.maxSpRecursionDepth !== undefined &&
      object.maxSpRecursionDepth !== null
        ? Number(object.maxSpRecursionDepth)
        : undefined;
    message.innodbCompressionLevel =
      object.innodbCompressionLevel !== undefined &&
      object.innodbCompressionLevel !== null
        ? Number(object.innodbCompressionLevel)
        : undefined;
    message.binlogTransactionDependencyTracking =
      object.binlogTransactionDependencyTracking !== undefined &&
      object.binlogTransactionDependencyTracking !== null
        ? mysqlconfig57_BinlogTransactionDependencyTrackingFromJSON(
            object.binlogTransactionDependencyTracking
          )
        : 0;
    message.autocommit =
      object.autocommit !== undefined && object.autocommit !== null
        ? Boolean(object.autocommit)
        : undefined;
    message.innodbStatusOutput =
      object.innodbStatusOutput !== undefined &&
      object.innodbStatusOutput !== null
        ? Boolean(object.innodbStatusOutput)
        : undefined;
    message.innodbStrictMode =
      object.innodbStrictMode !== undefined && object.innodbStrictMode !== null
        ? Boolean(object.innodbStrictMode)
        : undefined;
    message.innodbPrintLockWaitTimeoutInfo =
      object.innodbPrintLockWaitTimeoutInfo !== undefined &&
      object.innodbPrintLockWaitTimeoutInfo !== null
        ? Boolean(object.innodbPrintLockWaitTimeoutInfo)
        : undefined;
    message.logErrorVerbosity =
      object.logErrorVerbosity !== undefined &&
      object.logErrorVerbosity !== null
        ? Number(object.logErrorVerbosity)
        : undefined;
    message.maxDigestLength =
      object.maxDigestLength !== undefined && object.maxDigestLength !== null
        ? Number(object.maxDigestLength)
        : undefined;
    message.queryCacheLimit =
      object.queryCacheLimit !== undefined && object.queryCacheLimit !== null
        ? Number(object.queryCacheLimit)
        : undefined;
    message.queryCacheSize =
      object.queryCacheSize !== undefined && object.queryCacheSize !== null
        ? Number(object.queryCacheSize)
        : undefined;
    message.queryCacheType =
      object.queryCacheType !== undefined && object.queryCacheType !== null
        ? Number(object.queryCacheType)
        : undefined;
    message.lockWaitTimeout =
      object.lockWaitTimeout !== undefined && object.lockWaitTimeout !== null
        ? Number(object.lockWaitTimeout)
        : undefined;
    message.maxPreparedStmtCount =
      object.maxPreparedStmtCount !== undefined &&
      object.maxPreparedStmtCount !== null
        ? Number(object.maxPreparedStmtCount)
        : undefined;
    message.optimizerSwitch =
      object.optimizerSwitch !== undefined && object.optimizerSwitch !== null
        ? String(object.optimizerSwitch)
        : "";
    message.optimizerSearchDepth =
      object.optimizerSearchDepth !== undefined &&
      object.optimizerSearchDepth !== null
        ? Number(object.optimizerSearchDepth)
        : undefined;
    message.queryResponseTimeStats =
      object.queryResponseTimeStats !== undefined &&
      object.queryResponseTimeStats !== null
        ? Boolean(object.queryResponseTimeStats)
        : undefined;
    return message;
  },

  toJSON(message: Mysqlconfig57): unknown {
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
      obj.sqlMode = message.sqlMode.map((e) => mysqlconfig57_SQLModeToJSON(e));
    } else {
      obj.sqlMode = [];
    }
    message.maxAllowedPacket !== undefined &&
      (obj.maxAllowedPacket = message.maxAllowedPacket);
    message.defaultAuthenticationPlugin !== undefined &&
      (obj.defaultAuthenticationPlugin = mysqlconfig57_AuthPluginToJSON(
        message.defaultAuthenticationPlugin
      ));
    message.innodbFlushLogAtTrxCommit !== undefined &&
      (obj.innodbFlushLogAtTrxCommit = message.innodbFlushLogAtTrxCommit);
    message.innodbLockWaitTimeout !== undefined &&
      (obj.innodbLockWaitTimeout = message.innodbLockWaitTimeout);
    message.transactionIsolation !== undefined &&
      (obj.transactionIsolation = mysqlconfig57_TransactionIsolationToJSON(
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
      (obj.binlogRowImage = mysqlconfig57_BinlogRowImageToJSON(
        message.binlogRowImage
      ));
    message.binlogRowsQueryLogEvents !== undefined &&
      (obj.binlogRowsQueryLogEvents = message.binlogRowsQueryLogEvents);
    message.rplSemiSyncMasterWaitForSlaveCount !== undefined &&
      (obj.rplSemiSyncMasterWaitForSlaveCount =
        message.rplSemiSyncMasterWaitForSlaveCount);
    message.slaveParallelType !== undefined &&
      (obj.slaveParallelType = mysqlconfig57_SlaveParallelTypeToJSON(
        message.slaveParallelType
      ));
    message.slaveParallelWorkers !== undefined &&
      (obj.slaveParallelWorkers = message.slaveParallelWorkers);
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
      (obj.logSlowRateType = mysqlconfig57_LogSlowRateTypeToJSON(
        message.logSlowRateType
      ));
    message.logSlowRateLimit !== undefined &&
      (obj.logSlowRateLimit = message.logSlowRateLimit);
    message.logSlowSpStatements !== undefined &&
      (obj.logSlowSpStatements = message.logSlowSpStatements);
    if (message.logSlowFilter) {
      obj.logSlowFilter = message.logSlowFilter.map((e) =>
        mysqlconfig57_LogSlowFilterTypeToJSON(e)
      );
    } else {
      obj.logSlowFilter = [];
    }
    message.mdbPriorityChoiceMaxLag !== undefined &&
      (obj.mdbPriorityChoiceMaxLag = message.mdbPriorityChoiceMaxLag);
    message.innodbPageSize !== undefined &&
      (obj.innodbPageSize = message.innodbPageSize);
    message.innodbOnlineAlterLogMaxSize !== undefined &&
      (obj.innodbOnlineAlterLogMaxSize = message.innodbOnlineAlterLogMaxSize);
    message.innodbFtMinTokenSize !== undefined &&
      (obj.innodbFtMinTokenSize = message.innodbFtMinTokenSize);
    message.innodbFtMaxTokenSize !== undefined &&
      (obj.innodbFtMaxTokenSize = message.innodbFtMaxTokenSize);
    message.lowerCaseTableNames !== undefined &&
      (obj.lowerCaseTableNames = message.lowerCaseTableNames);
    message.showCompatibility56 !== undefined &&
      (obj.showCompatibility_56 = message.showCompatibility56);
    message.maxSpRecursionDepth !== undefined &&
      (obj.maxSpRecursionDepth = message.maxSpRecursionDepth);
    message.innodbCompressionLevel !== undefined &&
      (obj.innodbCompressionLevel = message.innodbCompressionLevel);
    message.binlogTransactionDependencyTracking !== undefined &&
      (obj.binlogTransactionDependencyTracking =
        mysqlconfig57_BinlogTransactionDependencyTrackingToJSON(
          message.binlogTransactionDependencyTracking
        ));
    message.autocommit !== undefined && (obj.autocommit = message.autocommit);
    message.innodbStatusOutput !== undefined &&
      (obj.innodbStatusOutput = message.innodbStatusOutput);
    message.innodbStrictMode !== undefined &&
      (obj.innodbStrictMode = message.innodbStrictMode);
    message.innodbPrintLockWaitTimeoutInfo !== undefined &&
      (obj.innodbPrintLockWaitTimeoutInfo =
        message.innodbPrintLockWaitTimeoutInfo);
    message.logErrorVerbosity !== undefined &&
      (obj.logErrorVerbosity = message.logErrorVerbosity);
    message.maxDigestLength !== undefined &&
      (obj.maxDigestLength = message.maxDigestLength);
    message.queryCacheLimit !== undefined &&
      (obj.queryCacheLimit = message.queryCacheLimit);
    message.queryCacheSize !== undefined &&
      (obj.queryCacheSize = message.queryCacheSize);
    message.queryCacheType !== undefined &&
      (obj.queryCacheType = message.queryCacheType);
    message.lockWaitTimeout !== undefined &&
      (obj.lockWaitTimeout = message.lockWaitTimeout);
    message.maxPreparedStmtCount !== undefined &&
      (obj.maxPreparedStmtCount = message.maxPreparedStmtCount);
    message.optimizerSwitch !== undefined &&
      (obj.optimizerSwitch = message.optimizerSwitch);
    message.optimizerSearchDepth !== undefined &&
      (obj.optimizerSearchDepth = message.optimizerSearchDepth);
    message.queryResponseTimeStats !== undefined &&
      (obj.queryResponseTimeStats = message.queryResponseTimeStats);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mysqlconfig57>, I>>(
    object: I
  ): Mysqlconfig57 {
    const message = { ...baseMysqlconfig57 } as Mysqlconfig57;
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
    message.mdbPriorityChoiceMaxLag =
      object.mdbPriorityChoiceMaxLag ?? undefined;
    message.innodbPageSize = object.innodbPageSize ?? undefined;
    message.innodbOnlineAlterLogMaxSize =
      object.innodbOnlineAlterLogMaxSize ?? undefined;
    message.innodbFtMinTokenSize = object.innodbFtMinTokenSize ?? undefined;
    message.innodbFtMaxTokenSize = object.innodbFtMaxTokenSize ?? undefined;
    message.lowerCaseTableNames = object.lowerCaseTableNames ?? undefined;
    message.showCompatibility56 = object.showCompatibility56 ?? undefined;
    message.maxSpRecursionDepth = object.maxSpRecursionDepth ?? undefined;
    message.innodbCompressionLevel = object.innodbCompressionLevel ?? undefined;
    message.binlogTransactionDependencyTracking =
      object.binlogTransactionDependencyTracking ?? 0;
    message.autocommit = object.autocommit ?? undefined;
    message.innodbStatusOutput = object.innodbStatusOutput ?? undefined;
    message.innodbStrictMode = object.innodbStrictMode ?? undefined;
    message.innodbPrintLockWaitTimeoutInfo =
      object.innodbPrintLockWaitTimeoutInfo ?? undefined;
    message.logErrorVerbosity = object.logErrorVerbosity ?? undefined;
    message.maxDigestLength = object.maxDigestLength ?? undefined;
    message.queryCacheLimit = object.queryCacheLimit ?? undefined;
    message.queryCacheSize = object.queryCacheSize ?? undefined;
    message.queryCacheType = object.queryCacheType ?? undefined;
    message.lockWaitTimeout = object.lockWaitTimeout ?? undefined;
    message.maxPreparedStmtCount = object.maxPreparedStmtCount ?? undefined;
    message.optimizerSwitch = object.optimizerSwitch ?? "";
    message.optimizerSearchDepth = object.optimizerSearchDepth ?? undefined;
    message.queryResponseTimeStats = object.queryResponseTimeStats ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Mysqlconfig57.$type, Mysqlconfig57);

const baseMysqlconfigset57: object = {
  $type: "yandex.cloud.mdb.mysql.v1.config.MysqlConfigSet5_7",
};

export const Mysqlconfigset57 = {
  $type: "yandex.cloud.mdb.mysql.v1.config.MysqlConfigSet5_7" as const,

  encode(
    message: Mysqlconfigset57,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      Mysqlconfig57.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      Mysqlconfig57.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      Mysqlconfig57.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mysqlconfigset57 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMysqlconfigset57 } as Mysqlconfigset57;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = Mysqlconfig57.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = Mysqlconfig57.decode(reader, reader.uint32());
          break;
        case 3:
          message.defaultConfig = Mysqlconfig57.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Mysqlconfigset57 {
    const message = { ...baseMysqlconfigset57 } as Mysqlconfigset57;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Mysqlconfig57.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Mysqlconfig57.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Mysqlconfig57.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: Mysqlconfigset57): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? Mysqlconfig57.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? Mysqlconfig57.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? Mysqlconfig57.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mysqlconfigset57>, I>>(
    object: I
  ): Mysqlconfigset57 {
    const message = { ...baseMysqlconfigset57 } as Mysqlconfigset57;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Mysqlconfig57.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Mysqlconfig57.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Mysqlconfig57.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mysqlconfigset57.$type, Mysqlconfigset57);

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
