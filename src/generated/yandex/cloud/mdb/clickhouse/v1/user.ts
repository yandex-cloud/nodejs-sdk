/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  Int64Value,
  BoolValue,
  DoubleValue,
} from "../../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.mdb.clickhouse.v1";

/**
 * A ClickHouse User resource. For more information, see
 * the [Developer's guide](/docs/managed-clickhouse/concepts).
 */
export interface User {
  $type: "yandex.cloud.mdb.clickhouse.v1.User";
  /** Name of the ClickHouse user. */
  name: string;
  /** ID of the ClickHouse cluster the user belongs to. */
  clusterId: string;
  /** Set of permissions granted to the user. */
  permissions: Permission[];
  settings?: UserSettings;
  /** Set of quotas assigned to the user. */
  quotas: UserQuota[];
}

export interface Permission {
  $type: "yandex.cloud.mdb.clickhouse.v1.Permission";
  /** Name of the database that the permission grants access to. */
  databaseName: string;
}

export interface UserSpec {
  $type: "yandex.cloud.mdb.clickhouse.v1.UserSpec";
  /** Name of the ClickHouse user. */
  name: string;
  /** Password of the ClickHouse user. */
  password: string;
  /** Set of permissions to grant to the user. If not set, it's granted permissions to access all databases. */
  permissions: Permission[];
  settings?: UserSettings;
  /** Set of quotas assigned to the user. */
  quotas: UserQuota[];
}

/**
 * ClickHouse user settings. Supported settings are a limited subset of all settings
 * described in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/).
 */
export interface UserSettings {
  $type: "yandex.cloud.mdb.clickhouse.v1.UserSettings";
  /**
   * Restricts permissions for non-DDL queries. To restrict permissions for DDL queries, use [allow_ddl] instead.
   * * **0** (default)-no restrictions.
   * * **1**-only read data queries are allowed.
   * * **2**-read data and change settings queries are allowed.
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/permissions-for-queries/#settings_readonly).
   */
  readonly?: number;
  /**
   * Determines whether DDL queries are allowed (e.g., **CREATE**, **ALTER**, **RENAME**, etc).
   *
   * Default value: **true**.
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/permissions-for-queries/#settings_allow_ddl).
   */
  allowDdl?: boolean;
  /**
   * Enables [introspections functions](https://clickhouse.com/docs/en/sql-reference/functions/introspection) for query profiling.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-allow_introspection_functions).
   */
  allowIntrospectionFunctions?: boolean;
  /**
   * Connection timeout in milliseconds.
   *
   * Value must be greater than **0** (default: **10000**, 10 seconds).
   */
  connectTimeout?: number;
  /**
   * The timeout in milliseconds for connecting to a remote server for a Distributed table engine. Applies only if the cluster uses sharding and replication. If unsuccessful, several attempts are made to connect to various replicas.
   *
   * Default value: **50**.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#connect-timeout-with-failover-ms).
   */
  connectTimeoutWithFailover?: number;
  /**
   * Receive timeout in milliseconds.
   *
   * Value must be greater than **0** (default: **300000**, 300 seconds or 5 minutes).
   */
  receiveTimeout?: number;
  /**
   * Send timeout in milliseconds.
   *
   * Value must be greater than **0** (default: **300000**, 300 seconds or 5 minutes).
   */
  sendTimeout?: number;
  /**
   * Timeout (in seconds) between checks of execution speed. It is checked that execution speed is not less that specified in [min_execution_speed] parameter.
   *
   * Default value: **10**.
   */
  timeoutBeforeCheckingExecutionSpeed?: number;
  /**
   * Enables or disables write quorum for ClickHouse cluster.
   * If the value is less than **2**, then write quorum is disabled, otherwise it is enabled.
   *
   * When used, write quorum guarantees that ClickHouse has written data to the quorum of **insert_quorum** replicas with no errors until the [insert_quorum_timeout] expires.
   * All replicas in the quorum are in the consistent state, meaning that they contain linearized data from the previous **INSERT** queries.
   * Employ write quorum, if you need the guarantees that the written data would not be lost in case of one or more replicas failure.
   *
   * You can use [select_sequential_consistency] setting to read the data written with write quorum.
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-insert_quorum).
   */
  insertQuorum?: number;
  /**
   * Quorum write timeout in milliseconds.
   *
   * If the write quorum is enabled in the cluster, this timeout expires and some data is not written to the [insert_quorum] replicas, then ClickHouse will abort the execution of **INSERT** query and return an error.
   * In this case, the client must send the query again to write the data block into the same or another replica.
   *
   * Minimum value: **1000**, 1 second (default: **60000**, 1 minute).
   */
  insertQuorumTimeout?: number;
  /** See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-insert_quorum_parallel). */
  insertQuorumParallel?: boolean;
  /**
   * Enables the insertion of default values instead of NULL into columns with not nullable data type.
   *
   * Default value: **true**.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#insert_null_as_default).
   */
  insertNullAsDefault?: boolean;
  /**
   * Determines the behavior of **SELECT** queries from the replicated table: if enabled, ClickHouse will terminate a query with error message in case the replica does not have a chunk written with the quorum and will not read the parts that have not yet been written with the quorum.
   *
   * Default value: **false** (sequential consistency is disabled).
   */
  selectSequentialConsistency?: boolean;
  /** See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-deduplicate-blocks-in-dependent-materialized-views). */
  deduplicateBlocksInDependentMaterializedViews?: boolean;
  /**
   * Wait mode for asynchronous actions in **ALTER** queries on replicated tables:
   *
   * * **0**-do not wait for replicas.
   * * **1**-only wait for own execution (default).
   * * **2**-wait for all replicas.
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/sql-reference/statements/alter/#synchronicity-of-alter-queries).
   */
  replicationAlterPartitionsSync?: number;
  /**
   * Max replica delay in milliseconds. If a replica lags more than the set value, this replica is not used and becomes a stale one.
   *
   * Minimum value: **1000**, 1 second (default: **300000**, 300 seconds or 5 minutes).
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-max_replica_delay_for_distributed_queries).
   */
  maxReplicaDelayForDistributedQueries?: number;
  /**
   * Enables or disables query forcing to a stale replica in case the actual data is unavailable.
   * If enabled, ClickHouse will choose the most up-to-date replica and force the query to use the data in this replica.
   * This setting can be used when doing **SELECT** query from a distributed table that points to replicated tables.
   *
   * Default value: **true** (query forcing is enabled).
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-fallback_to_stale_replicas_for_distributed_queries).
   */
  fallbackToStaleReplicasForDistributedQueries?: boolean;
  /**
   * Determine the behavior of distributed subqueries.
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#distributed-product-mode).
   */
  distributedProductMode: UserSettings_DistributedProductMode;
  /**
   * Enables of disables memory saving mode when doing distributed aggregation.
   *
   * When ClickHouse works with a distributed query, external aggregation is done on remote servers.
   * Enable this setting to achieve a smaller memory footprint on the server that sourced such a distributed query.
   *
   * Default value: **false** (memory saving mode is disabled).
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/sql-reference/statements/select/group-by/#select-group-by-in-external-memory).
   */
  distributedAggregationMemoryEfficient?: boolean;
  /** Timeout for DDL queries, in milliseconds. */
  distributedDdlTaskTimeout?: number;
  /**
   * Enables or disables silent skipping of unavailable shards.
   *
   * A shard is considered unavailable if all its replicas are also unavailable.
   *
   * Default value: **false** (silent skipping is disabled).
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-skip_unavailable_shards).
   */
  skipUnavailableShards?: boolean;
  /**
   * Enables or disables expression compilation.
   * If you execute a lot of queries that contain identical expressions, then enable this setting.
   * As a result, such queries may be executed faster due to use of compiled expressions.
   *
   * Use this setting in combination with [min_count_to_compile_expression] setting.
   *
   * Default value: **false** (expression compilation is disabled).
   */
  compileExpressions?: boolean;
  /**
   * How many identical expressions ClickHouse has to encounter before they are compiled.
   *
   * Minimum value: **0** (default: **3**).
   *
   * For the **0** value compilation is synchronous: a query waits for expression compilation process to complete prior to continuing execution.
   * It is recommended to set this value only for testing purposes.
   *
   * For all other values, compilation is asynchronous: the compilation process executes in a separate thread.
   * When a compiled expression is ready, it will be used by ClickHouse for eligible queries, including the ones that are currently running.
   */
  minCountToCompileExpression?: number;
  /**
   * The maximum block size for reading.
   *
   * Data in ClickHouse is organized and processed by blocks (block is a set of columns' parts).
   * The internal processing cycles for a single block are efficient enough, but there are noticeable expenditures on each block.
   *
   * This setting is a recommendation for size of block (in a count of rows) that should be loaded from tables.
   *
   * Value must be greater than **0** (default: **65536**).
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#setting-max_block_size).
   */
  maxBlockSize?: number;
  /**
   * Limits the minimum number of rows in a block to be inserted in a table by **INSERT** query.
   * Blocks that are smaller than the specified value, will be squashed together into the bigger blocks.
   *
   * Minimal value: **0**, block squashing is disabled (default: **1048576**).
   */
  minInsertBlockSizeRows?: number;
  /**
   * Limits the minimum number of bytes in a block to be inserted in a table by **INSERT** query.
   * Blocks that are smaller than the specified value, will be squashed together into the bigger blocks.
   *
   * Minimal value: **0**, block squashing is disabled (default: **268435456**, 256 MB).
   */
  minInsertBlockSizeBytes?: number;
  /**
   * Allows to form blocks of the specified size (in bytes) when inserting data in a table.
   * This setting has effect only if server is creating such blocks by itself.
   *
   * Value must be greater than **0** (default: **1048576**).
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-max_insert_block_size).
   */
  maxInsertBlockSize?: number;
  /**
   * Limits the minimum number of bytes to enable unbuffered direct reads from disk (Direct I/O).
   *
   * By default, ClickHouse does not read data directly from disk, but relies on the filesystem and its cache instead.
   * Such reading strategy is effective when the data volume is small.
   * If the amount of the data to read is huge, it is more effective to read directly from the disk, bypassing the filesystem cache.
   *
   * If the total amount of the data to read is greater than the value of this setting, then ClickHouse will fetch this data directly from the disk.
   *
   * Minimal value and default value: **0**, Direct I/O is disabled.
   */
  minBytesToUseDirectIo?: number;
  /**
   * Determines whether to use the cache of uncompressed blocks, or not.
   * Using this cache can significantly reduce latency and increase the throughput when a huge amount of small queries is to be processed.
   * Enable this setting for the users who instantiates small queries frequently.
   *
   * This setting has effect only for tables of the MergeTree family.
   *
   * Default value: **false** (uncompressed cache is disabled).
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#setting-use_uncompressed_cache).
   */
  useUncompressedCache?: boolean;
  /**
   * Limits the maximum size in rows of the request that can use the cache of uncompressed data. The cache is not used for requests larger
   * than the specified value.
   *
   * Use this setting in combination with [use_uncompressed_cache] setting.
   *
   * Value must be greater than **0** (default: **128x8192**).
   */
  mergeTreeMaxRowsToUseCache?: number;
  /**
   * Limits the maximum size in bytes of the request that can use the cache of uncompressed data. The cache is not used for requests larger
   * than the specified value.
   *
   * Use this setting in combination with [use_uncompressed_cache] setting.
   *
   * Value must be greater than **0** (default: **192x10x1024x1024**).
   */
  mergeTreeMaxBytesToUseCache?: number;
  /**
   * Limits the minimum number of rows to be read from a file to enable concurrent read.
   * If the number of rows to be read exceeds this value, then ClickHouse will try to use a few threads to read from a file concurrently.
   *
   * This setting has effect only for tables of the MergeTree family.
   *
   * Value must be greater than **0** (default: **20x8192**).
   */
  mergeTreeMinRowsForConcurrentRead?: number;
  /**
   * Limits the number of bytes to be read from a file to enable concurrent read.
   * If the number of bytes to be read exceeds this value, then ClickHouse will try to use a few threads to read from a file concurrently.
   *
   * This setting has effect only for tables of the MergeTree family.
   *
   * Value must be greater than **0** (default: **24x10x1024x1024**).
   */
  mergeTreeMinBytesForConcurrentRead?: number;
  /**
   * Sets the threshold of RAM consumption (in bytes) after that the temporary data, collected during the **GROUP BY** operation, should be flushed to disk to limit the RAM comsumption.
   *
   * By default, aggregation is done by employing hash table that resides in RAM.
   * A query can result in aggregation of huge data volumes that can lead to memory exhaustion and abortion of the query (see the [max_memory_usage] setting).
   * For such queries, you can use this setting to force ClickHouse to do flushing and complete aggregation successfully.
   *
   * Minimal value and default value: **0**, **GROUP BY** in the external memory is disabled.
   *
   * When using aggregation in external memory, it is recommended to set the value of this setting twice as low as the [max_memory_usage] setting value (by default, the maximum memory usage is limited to ten gigabytes).
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/sql-reference/statements/select/group-by/#select-group-by-in-external-memory).
   *
   * See also: the [distributed_aggregation_memory_efficient] setting.
   */
  maxBytesBeforeExternalGroupBy?: number;
  /** This setting is equivalent of the [max_bytes_before_external_group_by] setting, except for it is for sort operation (**ORDER BY**), not aggregation. */
  maxBytesBeforeExternalSort?: number;
  /**
   * Sets the threshold of the number of keys, after that the two-level aggregation should be used.
   *
   * Minimal value: **0**, threshold is not set (default: **10000**).
   */
  groupByTwoLevelThreshold?: number;
  /**
   * Sets the threshold of the number of bytes, after that the two-level aggregation should be used.
   *
   * Minimal value: **0**, threshold is not set (default: **100000000**).
   */
  groupByTwoLevelThresholdBytes?: number;
  /**
   * Sets the priority of a query.
   *
   * * **0**-priority is not used.
   * * **1**-the highest priority.
   * * and so on. The higher the number, the lower a query's priority.
   *
   * This setting should be set up for each query individually.
   *
   * If ClickHouse is working with the high-priority queries, and a low-priority query enters, then the low-priority query is paused until higher-priority queries are completed.
   *
   * Minimal value and default value: **0**, priority is not used.
   */
  priority?: number;
  /**
   * Limits the maximum number of threads to process the request (setting does not take threads that read data from remote servers into account).
   *
   * This setting applies to threads that perform the same stages of the query processing pipeline in parallel.
   *
   * Minimal value and default value: **0** (the thread number is calculated automatically based on the number of physical CPU cores, no HyperThreading cores are taken into account).
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-max_threads).
   */
  maxThreads?: number;
  /**
   * Limits the maximum memory usage (in bytes) for processing of a single user's query on a single server.
   * This setting does not take server's free RAM amount or total RAM amount into account.
   *
   * This limitation is enforced for any user's single query on a single server.
   *
   * Minimal value: **0**, no limitation is set.
   * Value that is set in the ClickHouse default config file: **10737418240** (10 GB).
   *
   * If you use [max_bytes_before_external_group_by] or [max_bytes_before_external_sort] setting, then it is recommended to set their values twice as low as [max_memory_usage] setting value.
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/query-complexity/#settings_max_memory_usage).
   */
  maxMemoryUsage?: number;
  /**
   * Limits the maximum memory usage (in bytes) for processing of user's queries on a single server.
   * This setting does not take server's free RAM amount or total RAM amount into account.
   *
   * This limitation is enforced for all queries that belong to one user and run simultaneously on a single server.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxMemoryUsageForUser?: number;
  /**
   * The maximum speed of data exchange over the network in bytes per second for a query.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxNetworkBandwidth?: number;
  /**
   * The maximum speed of data exchange over the network in bytes per second for all concurrently running user queries.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxNetworkBandwidthForUser?: number;
  /** See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/ru/operations/settings/query-complexity/#max-partitions-per-insert-block). */
  maxPartitionsPerInsertBlock?: number;
  /**
   * The maximum number of concurrent requests per user.
   * Default value: 0 (no limit).
   */
  maxConcurrentQueriesForUser?: number;
  /**
   * If enabled, query is not executed if the ClickHouse can't use index by date.
   * This setting has effect only for tables of the MergeTree family.
   *
   * Default value: **false** (setting is disabled, query executes even if ClickHouse can't use index by date).
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-force_index_by_date).
   */
  forceIndexByDate?: boolean;
  /**
   * If enabled, query is not executed if the ClickHouse can't use index by primary key.
   * This setting has effect only for tables of the MergeTree family.
   *
   * Default value: **false** (setting is disabled, query executes even if ClickHouse can't use index by primary key).
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#force-primary-key).
   */
  forcePrimaryKey?: boolean;
  /**
   * Limits the maximum number of rows that can be read from a table when running a query.
   *
   * Minimal value and default value: **0**, no limitation is set.
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/query-complexity/#max-rows-to-read).
   */
  maxRowsToRead?: number;
  /**
   * Limits the maximum number of bytes (uncompressed data) that can be read from a table when running a query.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxBytesToRead?: number;
  /**
   * Determines the behavior on exceeding [limits](https://clickhouse.com/docs/en/operations/settings/query-complexity/#restrictions-on-query-complexity) while reading the data.
   *
   * * **throw**-abort query execution, return an error.
   * * **break**-stop query execution, return partial result.
   */
  readOverflowMode: UserSettings_OverflowMode;
  /**
   * Limits the maximum number of unique keys received from aggregation function.
   * This setting helps to reduce RAM consumption while doing aggregation.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxRowsToGroupBy?: number;
  /**
   * Determines the behavior on exceeding [limits](https://clickhouse.com/docs/en/operations/settings/query-complexity/#restrictions-on-query-complexity) while doing aggregation.
   *
   * * **throw**-abort query execution, return an error.
   * * **break**-stop query execution, return partial result.
   * * **any**-perform approximate **GROUP BY** operation by continuing aggregation for the keys that got into the set, but don't add new keys to the set.
   */
  groupByOverflowMode: UserSettings_GroupByOverflowMode;
  /**
   * Limits the maximum number of rows that can be read from a table for sorting.
   * This setting helps to reduce RAM consumption.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxRowsToSort?: number;
  /**
   * Limits the maximum number of bytes (uncompressed data) that can be read from a table for sorting.
   * This setting helps to reduce RAM consumption.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxBytesToSort?: number;
  /**
   * Determines the behavior on exceeding [limits](https://clickhouse.com/docs/en/operations/settings/query-complexity/#restrictions-on-query-complexity) while sorting.
   *
   * * **throw**-abort query execution, return an error.
   * * **break**-stop query execution, return partial result.
   */
  sortOverflowMode: UserSettings_OverflowMode;
  /**
   * Limits the number of rows in the result.
   * This limitation is also checked for subqueries and parts of distributed queries that run on remote servers.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxResultRows?: number;
  /**
   * Limits the number of bytes in the result.
   * This limitation is also checked for subqueries and parts of distributed queries that run on remote servers.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxResultBytes?: number;
  /**
   * Determines the behavior on exceeding [limits](https://clickhouse.com/docs/en/operations/settings/query-complexity/#restrictions-on-query-complexity) while forming result.
   *
   * * **throw**-abort query execution, return an error.
   * * **break**-stop query execution, return partial result.
   */
  resultOverflowMode: UserSettings_OverflowMode;
  /**
   * Limits the maximum number of different rows when using **DISTINCT**.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxRowsInDistinct?: number;
  /** Limits the maximum size of a hash table in bytes (uncompressed data) when using **DISTINCT**. */
  maxBytesInDistinct?: number;
  /**
   * Determines the behavior on exceeding [limits](https://clickhouse.com/docs/en/operations/settings/query-complexity/#restrictions-on-query-complexity) while doing **DISCTINCT**.
   *
   * * **throw**-abort query execution, return an error.
   * * **break**-stop query execution, return partial result.
   */
  distinctOverflowMode: UserSettings_OverflowMode;
  /**
   * Limits the maximum number of rows that can be passed to a remote server or saved in a temporary table when using **GLOBAL IN**.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxRowsToTransfer?: number;
  /**
   * Limits the maximum number of bytes (uncompressed data) that can be passed to a remote server or saved in a temporary
   * table when using **GLOBAL IN**.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxBytesToTransfer?: number;
  /**
   * Determines the behavior on exceeding [limits](https://clickhouse.com/docs/en/operations/settings/query-complexity/#restrictions-on-query-complexity) while doing transfers.
   *
   * * **throw**-abort query execution, return an error.
   * * **break**-stop query execution, return partial result.
   */
  transferOverflowMode: UserSettings_OverflowMode;
  /**
   * Limits the maximum query execution time in milliseconds.
   * At this moment, this limitation is not checked when passing one of the sorting stages, as well as merging and finalizing aggregation funictions.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxExecutionTime?: number;
  /**
   * Determines the behavior on exceeding [limits](https://clickhouse.com/docs/en/operations/settings/query-complexity/#restrictions-on-query-complexity) of execution time.
   *
   * * **throw**-abort query execution, return an error.
   * * **break**-stop query execution, return partial result.
   */
  timeoutOverflowMode: UserSettings_OverflowMode;
  /** Limit on the number of rows in the set resulting from the execution of the IN section. */
  maxRowsInSet?: number;
  /** Limit on the number of bytes in the set resulting from the execution of the IN section. */
  maxBytesInSet?: number;
  /**
   * Determine the behavior on exceeding max_rows_in_set or max_bytes_in_set limit.
   * Possible values: OVERFLOW_MODE_THROW, OVERFLOW_MODE_BREAK.
   */
  setOverflowMode: UserSettings_OverflowMode;
  /** Limit on maximum size of the hash table for JOIN, in rows. */
  maxRowsInJoin?: number;
  /** Limit on maximum size of the hash table for JOIN, in bytes. */
  maxBytesInJoin?: number;
  /**
   * Determine the behavior on exceeding max_rows_in_join or max_bytes_in_join limit.
   * Possible values: OVERFLOW_MODE_THROW, OVERFLOW_MODE_BREAK.
   */
  joinOverflowMode: UserSettings_OverflowMode;
  /** See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-join_algorithm). */
  joinAlgorithm: UserSettings_JoinAlgorithm[];
  /** See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#any_join_distinct_right_table_keys). */
  anyJoinDistinctRightTableKeys?: boolean;
  /**
   * Limits the maximum number of columns that can be read from a table in a single query.
   * If the query requires to read more columns to complete, then it will be aborted.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxColumnsToRead?: number;
  /**
   * Limits the maximum number of temporary columns that must be kept in RAM at the same time when running a query, including constant columns.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxTemporaryColumns?: number;
  /**
   * Limits the maximum number of temporary columns that must be kept in RAM at the same time when running a query, excluding constant columns.
   *
   * Minimal value and default value: **0**, no limitation is set.
   */
  maxTemporaryNonConstColumns?: number;
  /**
   * Limits the size of the part of a query that can be transferred to RAM for parsing with the SQL parser, in bytes.
   *
   * Value must be greater than **0** (default: **262144**).
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-max_query_size).
   */
  maxQuerySize?: number;
  /**
   * Limits the maximum depth of query syntax tree.
   *
   * Executing a big and complex query may result in building a syntax tree of enormous depth.
   * By using this setting, you can prohibit execution of over-sized or non-optimized queries for huge tables.
   *
   * For example, the **SELECT *** query may result in more complex and deeper syntax tree, compared to the **SELECT ... WHERE ...** query, containing constraints and conditions, in the most cases.
   * A user can be forced to construct more optimized queries, if this setting is used.
   *
   * Value must be greater than **0** (default: **1000**).
   * If a too small value is set, it may render ClickHouse unable to execute even simple queries.
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/query-complexity/#max-ast-depth).
   */
  maxAstDepth?: number;
  /**
   * Limits the maximum size of query syntax tree in number of nodes.
   *
   * Executing a big and complex query may result in building a syntax tree of enormous size.
   * By using this setting, you can prohibit execution of over-sized or non-optimized queries for huge tables.
   *
   * Value must be greater than **0** (default: **50000**).
   * If a too small value is set, it may render ClickHouse unable to execute even simple queries.
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/query-complexity/#max-ast-elements).
   */
  maxAstElements?: number;
  /**
   * Limits the maximum size of query syntax tree in number of nodes after expansion of aliases and the asterisk values.
   *
   * Executing a big and complex query may result in building a syntax tree of enormous size.
   * By using this setting, you can prohibit execution of over-sized or non-optimized queries for huge tables.
   *
   * Value must be greater than **0** (default: **500000**).
   * If a too small value is set, it may render ClickHouse unable to execute even simple queries.
   */
  maxExpandedAstElements?: number;
  /** Minimal execution speed in rows per second. */
  minExecutionSpeed?: number;
  /** Minimal execution speed in bytes per second. */
  minExecutionSpeedBytes?: number;
  /** Aggregate function to use for implementation of count(DISTINCT ...). */
  countDistinctImplementation: UserSettings_CountDistinctImplementation;
  /**
   * Enables or disables SQL parser if the fast stream parser cannot parse the data.
   *
   * Enable this setting, if the data that you want to insert into a table contains SQL expressions.
   *
   * For example, the stream parser is unable to parse a value that contains **now()** expression; therefore an **INSERT** query for this value will fail and no data will be inserted into a table.
   * With enabled SQL parser, this expression is parsed correctly: the **now()** expression will be parsed as SQL function, interpreted, and the current date and time will be inserted into the table as a result.
   *
   * This setting has effect only if you use [Values](https://clickhouse.com/docs/en/interfaces/formats/#data-format-values) format when inserting data.
   *
   * Default value: **true** (SQL parser is enabled).
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#settings-input_format_values_interpret_expressions).
   */
  inputFormatValuesInterpretExpressions?: boolean;
  /**
   * Enables or disables replacing omitted input values with default values of the respective columns when performing **INSERT** queries.
   *
   * Default value: **true** (replacing is enabled).
   */
  inputFormatDefaultsForOmittedFields?: boolean;
  /** See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#input_format_null_as_default). */
  inputFormatNullAsDefault?: boolean;
  /** See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#date_time_input_format). */
  dateTimeInputFormat: UserSettings_DateTimeInputFormat;
  /** See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#input_format_with_names_use_header). */
  inputFormatWithNamesUseHeader?: boolean;
  /**
   * Enables quoting of 64-bit integers in JSON output format.
   *
   * If this setting is enabled, then 64-bit integers (**UInt64** and **Int64**) will be quoted when written to JSON output in order to maintain compatibility with the most of the JavaScript engines.
   * Otherwise, such integers will not be quoted.
   *
   * Default value: **false** (quoting 64-bit integers is disabled).
   */
  outputFormatJsonQuote64bitIntegers?: boolean;
  /**
   * Enables special floating-point values (**+nan**, **-nan**, **+inf** and **-inf**) in JSON output format.
   *
   * Default value: **false** (special values do not present in output).
   */
  outputFormatJsonQuoteDenormals?: boolean;
  /** See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#date_time_output_format). */
  dateTimeOutputFormat: UserSettings_DateTimeOutputFormat;
  /**
   * Determines whether to use LowCardinality type in Native format.
   *
   * * **true** (default)-yes, use.
   * * **false**-convert LowCardinality columns to regular columns when doing **SELECT**, and convert regular columns to LowCardinality when doing **INSERT**.
   *
   * LowCardinality columns (aka sparse columns) store data in more effective way, compared to regular columns, by using hash tables.
   * If data to insert suits this storage format, ClickHouse will place them into LowCardinality column.
   *
   * If you use a third-party ClickHouse client that can't work with LowCardinality columns, then this client will not be able to correctly interpret the result of the query that asks for data stored in LowCardinality column.
   * Disable this setting to convert LowCardinality column to regular column when creating the result, so such clients will be able to process the result.
   *
   * Official ClickHouse client works with LowCardinality columns out-of-the-box.
   *
   * Default value: **true** (LowCardinality columns are used in Native format).
   */
  lowCardinalityAllowInNativeFormat?: boolean;
  /**
   * Allows specifying **LowCardinality** modifier for types of small fixed size (8 or less) in CREATE TABLE statements. Enabling this may increase merge times and memory consumption.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#allow_suspicious_low_cardinality_types).
   */
  allowSuspiciousLowCardinalityTypes?: boolean;
  /**
   * Enables returning of empty result when aggregating without keys (with **GROUP BY** operation absent) on empty set (e.g., **SELECT count(*) FROM table WHERE 0**).
   *
   * * **true**-ClickHouse will return an empty result for such queries.
   * * **false** (default)-ClickHouse will return a single-line result consisting of **NULL** values for aggregation functions, in accordance with SQL standard.
   */
  emptyResultForAggregationByEmptySet?: boolean;
  /**
   * HTTP connection timeout, in milliseconds.
   *
   * Value must be greater than **0** (default: **1000**, 1 second).
   */
  httpConnectionTimeout?: number;
  /**
   * HTTP receive timeout, in milliseconds.
   *
   * Value must be greater than **0** (default: **1800000**, 1800 seconds, 30 minutes).
   */
  httpReceiveTimeout?: number;
  /**
   * HTTP send timeout, in milliseconds.
   *
   * Value must be greater than **0** (default: **1800000**, 1800 seconds, 30 minutes).
   */
  httpSendTimeout?: number;
  /**
   * Enables or disables data compression in HTTP responses.
   *
   * By default, ClickHouse stores data compressed. When executing a query, its result is uncompressed.
   * Use this setting to command ClickHouse to compress the result when sending it via HTTP.
   *
   * Enable this setting and add the **Accept-Encoding: <compression method>** HTTP header in a HTTP request to force compression of HTTP response from ClickHouse.
   *
   * ClickHouse support the following compression methods: **gzip**, **br** and **deflate**.
   *
   * Default value: **false** (compression is disabled).
   *
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/interfaces/http/).
   */
  enableHttpCompression?: boolean;
  /**
   * Enables progress notifications using **X-ClickHouse-Progress** HTTP header.
   *
   * Default value: **false** (notifications disabled).
   */
  sendProgressInHttpHeaders?: boolean;
  /**
   * Minimum interval between progress notifications with **X-ClickHouse-Progress** HTTP header, in milliseconds.
   *
   * Value must be greater than **0** (default: **100**).
   */
  httpHeadersProgressInterval?: number;
  /**
   * Adds CORS header in HTTP responses.
   *
   * Default value: **false** (header is not added).
   */
  addHttpCorsHeader?: boolean;
  /**
   * Cancels HTTP read-only queries (e.g. SELECT) when a client closes the connection without waiting for the response.
   *
   * Default value: **false**.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#cancel-http-readonly-queries-on-client-close).
   */
  cancelHttpReadonlyQueriesOnClientClose?: boolean;
  /**
   * Limits the maximum number of HTTP GET redirect hops for [URL-engine](https://clickhouse.com/docs/en/engines/table-engines/special/url) tables.
   *
   * If the parameter is set to **0** (default), no hops is allowed.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#setting-max_http_get_redirects).
   */
  maxHttpGetRedirects?: number;
  joinedSubqueryRequiresAlias?: boolean;
  joinUseNulls?: boolean;
  transformNullIn?: boolean;
  /** Quota accounting mode. Possible values: QUOTA_MODE_DEFAULT, QUOTA_MODE_KEYED and QUOTA_MODE_KEYED_BY_IP. */
  quotaMode: UserSettings_QuotaMode;
  /**
   * Sets the data format of a [nested](https://clickhouse.com/docs/en/sql-reference/data-types/nested-data-structures/nested) columns.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#flatten-nested).
   */
  flattenNested?: boolean;
  /** Regular expression (for Regexp format) */
  formatRegexp: string;
  /** See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#format_regexp_escaping_rule). */
  formatRegexpEscapingRule: UserSettings_FormatRegexpEscapingRule;
  /** See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#format_regexp_skip_unmatched). */
  formatRegexpSkipUnmatched?: boolean;
  /**
   * Enables asynchronous inserts.
   *
   * Disabled by default.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#async-insert).
   */
  asyncInsert?: boolean;
  /**
   * The maximum number of threads for background data parsing and insertion.
   *
   * If the parameter is set to **0**, asynchronous insertions are disabled. Default value: **16**.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#async-insert-threads).
   */
  asyncInsertThreads?: number;
  /**
   * Enables waiting for processing of asynchronous insertion. If enabled, server returns OK only after the data is inserted.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#wait-for-async-insert).
   */
  waitForAsyncInsert?: boolean;
  /**
   * The timeout (in seconds) for waiting for processing of asynchronous insertion.
   *
   * Default value: **120**.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#wait-for-async-insert-timeout).
   */
  waitForAsyncInsertTimeout?: number;
  /**
   * The maximum size of the unparsed data in bytes collected per query before being inserted.
   *
   * If the parameter is set to **0**, asynchronous insertions are disabled. Default value: **100000**.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#async-insert-max-data-size).
   */
  asyncInsertMaxDataSize?: number;
  /**
   * The maximum timeout in milliseconds since the first INSERT query before inserting collected data.
   *
   * If the parameter is set to **0**, the timeout is disabled. Default value: **200**.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#async-insert-busy-timeout-ms).
   */
  asyncInsertBusyTimeout?: number;
  /**
   * The maximum timeout in milliseconds since the last INSERT query before dumping collected data. If enabled, the settings prolongs the [async_insert_busy_timeout] with every INSERT query as long as [async_insert_max_data_size] is not exceeded.
   *
   * More info see in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings/#async-insert-stale-timeout-ms).
   */
  asyncInsertStaleTimeout?: number;
  /**
   * Memory profiler step (in bytes).
   *
   * If the next query step requires more memory than this parameter specifies, the memory profiler collects the allocating stack trace. Values lower than a few megabytes slow down query processing.
   *
   * Default value: **4194304** (4 MB). Zero means disabled memory profiler.
   */
  memoryProfilerStep?: number;
  /**
   * Collect random allocations and deallocations and write them into system.trace_log with 'MemorySample' trace_type. The probability is for every alloc/free regardless to the size of the allocation.
   *
   * Possible values: from **0** to **1**. Default: **0**.
   */
  memoryProfilerSampleProbability?: number;
  /**
   * Sets the maximum number of parallel threads for the SELECT query data read phase with the FINAL modifier.
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings#max-final-threads).
   */
  maxFinalThreads?: number;
  /**
   * Enables or disables order-preserving parallel parsing of data formats. Supported only for [TSV](https://clickhouse.com/docs/en/interfaces/formats#tabseparated), [TKSV](https://clickhouse.com/docs/en/interfaces/formats#tskv), [CSV](https://clickhouse.com/docs/en/interfaces/formats#csv) and [JSONEachRow](https://clickhouse.com/docs/en/interfaces/formats#jsoneachrow) formats.
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings#input-format-parallel-parsing)
   */
  inputFormatParallelParsing?: boolean;
  /**
   * Enables or disables the insertion of JSON data with nested objects.
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings#input-format-parallel-parsing)
   */
  inputFormatImportNestedJson?: boolean;
  /** Method of reading data from local filesystem, one of: read, pread, mmap, io_uring, pread_threadpool. The 'io_uring' method is experimental and does not work for Log, TinyLog, StripeLog, File, Set and Join, and other tables with append-able files in presence of concurrent reads and writes. */
  localFilesystemReadMethod: UserSettings_LocalFilesystemReadMethod;
  /**
   * The maximum size of the buffer to read from the filesystem.
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/codebrowser/ClickHouse/src/Core/Settings.h.html#DB::SettingsTraits::Data::max_read_buffer_size)
   */
  maxReadBufferSize?: number;
  /**
   * The setting sets the maximum number of retries for ClickHouse Keeper (or ZooKeeper) requests during insert into replicated MergeTree. Only Keeper requests which failed due to network error, Keeper session timeout, or request timeout are considered for retries.
   * Default: 20 from 23.2, 0(disabled) before
   * Min_version: 22.11
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings#insert_keeper_max_retries)
   */
  insertKeeperMaxRetries?: number;
  /**
   * The maximum amount of data consumed by temporary files on disk in bytes for all concurrently running user queries. Zero means unlimited.
   * Default: 0 - unlimited
   * Min_version: 22.10
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/query-complexity#settings_max_temporary_data_on_disk_size_for_user)
   */
  maxTemporaryDataOnDiskSizeForUser?: number;
  /**
   * The maximum amount of data consumed by temporary files on disk in bytes for all concurrently running queries. Zero means unlimited.
   * Default: 0 - unlimited
   * Min_version: 22.10
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/query-complexity#settings_max_temporary_data_on_disk_size_for_query)
   */
  maxTemporaryDataOnDiskSizeForQuery?: number;
  /**
   * Limits maximum recursion depth in the recursive descent parser. Allows controlling the stack size.
   * Default: 1000
   * Special: 0 - unlimited
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings#max_parser_depth)
   */
  maxParserDepth?: number;
  /**
   * Method of reading data from remote filesystem, one of: read, threadpool.
   * Default: read
   * Min_version: 21.11
   * See in-depth description in [ClickHouse GitHub](https://github.com/ClickHouse/ClickHouse/blob/f9558345e886876b9132d9c018e357f7fa9b22a3/src/Core/Settings.h#L660)
   */
  remoteFilesystemReadMethod: UserSettings_RemoteFilesystemReadMethod;
  /**
   * It represents soft memory limit in case when hard limit is reached on user level. This value is used to compute overcommit ratio for the query. Zero means skip the query.
   * Default: 1GiB
   * Min_version: 22.5
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings#memory_overcommit_ratio_denominator)
   */
  memoryOvercommitRatioDenominator?: number;
  /**
   * It represents soft memory limit in case when hard limit is reached on global level. This value is used to compute overcommit ratio for the query. Zero means skip the query.
   * Default: 1GiB
   * Min_version: 22.5
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings#memory_overcommit_ratio_denominator_for_user)
   */
  memoryOvercommitRatioDenominatorForUser?: number;
  /**
   * Maximum time thread will wait for memory to be freed in the case of memory overcommit on a user level. If the timeout is reached and memory is not freed, an exception is thrown.
   * Default: 5000000
   * Min_version: 22.5
   * See in-depth description in [ClickHouse documentation](https://clickhouse.com/docs/en/operations/settings/settings#memory_usage_overcommit_max_wait_microseconds)
   */
  memoryUsageOvercommitMaxWaitMicroseconds?: number;
  /**
   * The setting is deprecated and has no effect.
   *
   * @deprecated
   */
  compile?: boolean;
  /**
   * The setting is deprecated and has no effect.
   *
   * @deprecated
   */
  minCountToCompile?: number;
}

export enum UserSettings_OverflowMode {
  OVERFLOW_MODE_UNSPECIFIED = 0,
  OVERFLOW_MODE_THROW = 1,
  OVERFLOW_MODE_BREAK = 2,
  UNRECOGNIZED = -1,
}

export function userSettings_OverflowModeFromJSON(
  object: any
): UserSettings_OverflowMode {
  switch (object) {
    case 0:
    case "OVERFLOW_MODE_UNSPECIFIED":
      return UserSettings_OverflowMode.OVERFLOW_MODE_UNSPECIFIED;
    case 1:
    case "OVERFLOW_MODE_THROW":
      return UserSettings_OverflowMode.OVERFLOW_MODE_THROW;
    case 2:
    case "OVERFLOW_MODE_BREAK":
      return UserSettings_OverflowMode.OVERFLOW_MODE_BREAK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserSettings_OverflowMode.UNRECOGNIZED;
  }
}

export function userSettings_OverflowModeToJSON(
  object: UserSettings_OverflowMode
): string {
  switch (object) {
    case UserSettings_OverflowMode.OVERFLOW_MODE_UNSPECIFIED:
      return "OVERFLOW_MODE_UNSPECIFIED";
    case UserSettings_OverflowMode.OVERFLOW_MODE_THROW:
      return "OVERFLOW_MODE_THROW";
    case UserSettings_OverflowMode.OVERFLOW_MODE_BREAK:
      return "OVERFLOW_MODE_BREAK";
    default:
      return "UNKNOWN";
  }
}

export enum UserSettings_GroupByOverflowMode {
  GROUP_BY_OVERFLOW_MODE_UNSPECIFIED = 0,
  GROUP_BY_OVERFLOW_MODE_THROW = 1,
  GROUP_BY_OVERFLOW_MODE_BREAK = 2,
  GROUP_BY_OVERFLOW_MODE_ANY = 3,
  UNRECOGNIZED = -1,
}

export function userSettings_GroupByOverflowModeFromJSON(
  object: any
): UserSettings_GroupByOverflowMode {
  switch (object) {
    case 0:
    case "GROUP_BY_OVERFLOW_MODE_UNSPECIFIED":
      return UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_UNSPECIFIED;
    case 1:
    case "GROUP_BY_OVERFLOW_MODE_THROW":
      return UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_THROW;
    case 2:
    case "GROUP_BY_OVERFLOW_MODE_BREAK":
      return UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_BREAK;
    case 3:
    case "GROUP_BY_OVERFLOW_MODE_ANY":
      return UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_ANY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserSettings_GroupByOverflowMode.UNRECOGNIZED;
  }
}

export function userSettings_GroupByOverflowModeToJSON(
  object: UserSettings_GroupByOverflowMode
): string {
  switch (object) {
    case UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_UNSPECIFIED:
      return "GROUP_BY_OVERFLOW_MODE_UNSPECIFIED";
    case UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_THROW:
      return "GROUP_BY_OVERFLOW_MODE_THROW";
    case UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_BREAK:
      return "GROUP_BY_OVERFLOW_MODE_BREAK";
    case UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_ANY:
      return "GROUP_BY_OVERFLOW_MODE_ANY";
    default:
      return "UNKNOWN";
  }
}

export enum UserSettings_DistributedProductMode {
  DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED = 0,
  /** DISTRIBUTED_PRODUCT_MODE_DENY - Default value. Prohibits using these types of subqueries (returns the "Double-distributed in/JOIN subqueries is denied" exception). */
  DISTRIBUTED_PRODUCT_MODE_DENY = 1,
  /** DISTRIBUTED_PRODUCT_MODE_LOCAL - Replaces the database and table in the subquery with local ones for the destination server (shard), leaving the normal IN/JOIN. */
  DISTRIBUTED_PRODUCT_MODE_LOCAL = 2,
  /** DISTRIBUTED_PRODUCT_MODE_GLOBAL - Replaces the IN/JOIN query with GLOBAL IN/GLOBAL JOIN. */
  DISTRIBUTED_PRODUCT_MODE_GLOBAL = 3,
  /** DISTRIBUTED_PRODUCT_MODE_ALLOW - Allows the use of these types of subqueries. */
  DISTRIBUTED_PRODUCT_MODE_ALLOW = 4,
  UNRECOGNIZED = -1,
}

export function userSettings_DistributedProductModeFromJSON(
  object: any
): UserSettings_DistributedProductMode {
  switch (object) {
    case 0:
    case "DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED":
      return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED;
    case 1:
    case "DISTRIBUTED_PRODUCT_MODE_DENY":
      return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_DENY;
    case 2:
    case "DISTRIBUTED_PRODUCT_MODE_LOCAL":
      return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_LOCAL;
    case 3:
    case "DISTRIBUTED_PRODUCT_MODE_GLOBAL":
      return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_GLOBAL;
    case 4:
    case "DISTRIBUTED_PRODUCT_MODE_ALLOW":
      return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_ALLOW;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserSettings_DistributedProductMode.UNRECOGNIZED;
  }
}

export function userSettings_DistributedProductModeToJSON(
  object: UserSettings_DistributedProductMode
): string {
  switch (object) {
    case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED:
      return "DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED";
    case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_DENY:
      return "DISTRIBUTED_PRODUCT_MODE_DENY";
    case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_LOCAL:
      return "DISTRIBUTED_PRODUCT_MODE_LOCAL";
    case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_GLOBAL:
      return "DISTRIBUTED_PRODUCT_MODE_GLOBAL";
    case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_ALLOW:
      return "DISTRIBUTED_PRODUCT_MODE_ALLOW";
    default:
      return "UNKNOWN";
  }
}

export enum UserSettings_QuotaMode {
  QUOTA_MODE_UNSPECIFIED = 0,
  QUOTA_MODE_DEFAULT = 1,
  QUOTA_MODE_KEYED = 2,
  QUOTA_MODE_KEYED_BY_IP = 3,
  UNRECOGNIZED = -1,
}

export function userSettings_QuotaModeFromJSON(
  object: any
): UserSettings_QuotaMode {
  switch (object) {
    case 0:
    case "QUOTA_MODE_UNSPECIFIED":
      return UserSettings_QuotaMode.QUOTA_MODE_UNSPECIFIED;
    case 1:
    case "QUOTA_MODE_DEFAULT":
      return UserSettings_QuotaMode.QUOTA_MODE_DEFAULT;
    case 2:
    case "QUOTA_MODE_KEYED":
      return UserSettings_QuotaMode.QUOTA_MODE_KEYED;
    case 3:
    case "QUOTA_MODE_KEYED_BY_IP":
      return UserSettings_QuotaMode.QUOTA_MODE_KEYED_BY_IP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserSettings_QuotaMode.UNRECOGNIZED;
  }
}

export function userSettings_QuotaModeToJSON(
  object: UserSettings_QuotaMode
): string {
  switch (object) {
    case UserSettings_QuotaMode.QUOTA_MODE_UNSPECIFIED:
      return "QUOTA_MODE_UNSPECIFIED";
    case UserSettings_QuotaMode.QUOTA_MODE_DEFAULT:
      return "QUOTA_MODE_DEFAULT";
    case UserSettings_QuotaMode.QUOTA_MODE_KEYED:
      return "QUOTA_MODE_KEYED";
    case UserSettings_QuotaMode.QUOTA_MODE_KEYED_BY_IP:
      return "QUOTA_MODE_KEYED_BY_IP";
    default:
      return "UNKNOWN";
  }
}

export enum UserSettings_CountDistinctImplementation {
  COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED = 0,
  COUNT_DISTINCT_IMPLEMENTATION_UNIQ = 1,
  COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED = 2,
  COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64 = 3,
  COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12 = 4,
  COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT = 5,
  UNRECOGNIZED = -1,
}

export function userSettings_CountDistinctImplementationFromJSON(
  object: any
): UserSettings_CountDistinctImplementation {
  switch (object) {
    case 0:
    case "COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED":
      return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED;
    case 1:
    case "COUNT_DISTINCT_IMPLEMENTATION_UNIQ":
      return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ;
    case 2:
    case "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED":
      return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED;
    case 3:
    case "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64":
      return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64;
    case 4:
    case "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12":
      return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12;
    case 5:
    case "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT":
      return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserSettings_CountDistinctImplementation.UNRECOGNIZED;
  }
}

export function userSettings_CountDistinctImplementationToJSON(
  object: UserSettings_CountDistinctImplementation
): string {
  switch (object) {
    case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED:
      return "COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED";
    case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ:
      return "COUNT_DISTINCT_IMPLEMENTATION_UNIQ";
    case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED:
      return "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED";
    case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64:
      return "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64";
    case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12:
      return "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12";
    case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT:
      return "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT";
    default:
      return "UNKNOWN";
  }
}

export enum UserSettings_JoinAlgorithm {
  JOIN_ALGORITHM_UNSPECIFIED = 0,
  JOIN_ALGORITHM_HASH = 1,
  JOIN_ALGORITHM_PARALLEL_HASH = 2,
  JOIN_ALGORITHM_PARTIAL_MERGE = 3,
  JOIN_ALGORITHM_DIRECT = 4,
  JOIN_ALGORITHM_AUTO = 5,
  JOIN_ALGORITHM_FULL_SORTING_MERGE = 6,
  JOIN_ALGORITHM_PREFER_PARTIAL_MERGE = 7,
  UNRECOGNIZED = -1,
}

export function userSettings_JoinAlgorithmFromJSON(
  object: any
): UserSettings_JoinAlgorithm {
  switch (object) {
    case 0:
    case "JOIN_ALGORITHM_UNSPECIFIED":
      return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_UNSPECIFIED;
    case 1:
    case "JOIN_ALGORITHM_HASH":
      return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_HASH;
    case 2:
    case "JOIN_ALGORITHM_PARALLEL_HASH":
      return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_PARALLEL_HASH;
    case 3:
    case "JOIN_ALGORITHM_PARTIAL_MERGE":
      return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_PARTIAL_MERGE;
    case 4:
    case "JOIN_ALGORITHM_DIRECT":
      return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_DIRECT;
    case 5:
    case "JOIN_ALGORITHM_AUTO":
      return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_AUTO;
    case 6:
    case "JOIN_ALGORITHM_FULL_SORTING_MERGE":
      return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_FULL_SORTING_MERGE;
    case 7:
    case "JOIN_ALGORITHM_PREFER_PARTIAL_MERGE":
      return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_PREFER_PARTIAL_MERGE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserSettings_JoinAlgorithm.UNRECOGNIZED;
  }
}

export function userSettings_JoinAlgorithmToJSON(
  object: UserSettings_JoinAlgorithm
): string {
  switch (object) {
    case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_UNSPECIFIED:
      return "JOIN_ALGORITHM_UNSPECIFIED";
    case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_HASH:
      return "JOIN_ALGORITHM_HASH";
    case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_PARALLEL_HASH:
      return "JOIN_ALGORITHM_PARALLEL_HASH";
    case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_PARTIAL_MERGE:
      return "JOIN_ALGORITHM_PARTIAL_MERGE";
    case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_DIRECT:
      return "JOIN_ALGORITHM_DIRECT";
    case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_AUTO:
      return "JOIN_ALGORITHM_AUTO";
    case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_FULL_SORTING_MERGE:
      return "JOIN_ALGORITHM_FULL_SORTING_MERGE";
    case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_PREFER_PARTIAL_MERGE:
      return "JOIN_ALGORITHM_PREFER_PARTIAL_MERGE";
    default:
      return "UNKNOWN";
  }
}

export enum UserSettings_FormatRegexpEscapingRule {
  FORMAT_REGEXP_ESCAPING_RULE_UNSPECIFIED = 0,
  FORMAT_REGEXP_ESCAPING_RULE_ESCAPED = 1,
  FORMAT_REGEXP_ESCAPING_RULE_QUOTED = 2,
  FORMAT_REGEXP_ESCAPING_RULE_CSV = 3,
  FORMAT_REGEXP_ESCAPING_RULE_JSON = 4,
  FORMAT_REGEXP_ESCAPING_RULE_XML = 5,
  FORMAT_REGEXP_ESCAPING_RULE_RAW = 6,
  UNRECOGNIZED = -1,
}

export function userSettings_FormatRegexpEscapingRuleFromJSON(
  object: any
): UserSettings_FormatRegexpEscapingRule {
  switch (object) {
    case 0:
    case "FORMAT_REGEXP_ESCAPING_RULE_UNSPECIFIED":
      return UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_UNSPECIFIED;
    case 1:
    case "FORMAT_REGEXP_ESCAPING_RULE_ESCAPED":
      return UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_ESCAPED;
    case 2:
    case "FORMAT_REGEXP_ESCAPING_RULE_QUOTED":
      return UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_QUOTED;
    case 3:
    case "FORMAT_REGEXP_ESCAPING_RULE_CSV":
      return UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_CSV;
    case 4:
    case "FORMAT_REGEXP_ESCAPING_RULE_JSON":
      return UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_JSON;
    case 5:
    case "FORMAT_REGEXP_ESCAPING_RULE_XML":
      return UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_XML;
    case 6:
    case "FORMAT_REGEXP_ESCAPING_RULE_RAW":
      return UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_RAW;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserSettings_FormatRegexpEscapingRule.UNRECOGNIZED;
  }
}

export function userSettings_FormatRegexpEscapingRuleToJSON(
  object: UserSettings_FormatRegexpEscapingRule
): string {
  switch (object) {
    case UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_UNSPECIFIED:
      return "FORMAT_REGEXP_ESCAPING_RULE_UNSPECIFIED";
    case UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_ESCAPED:
      return "FORMAT_REGEXP_ESCAPING_RULE_ESCAPED";
    case UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_QUOTED:
      return "FORMAT_REGEXP_ESCAPING_RULE_QUOTED";
    case UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_CSV:
      return "FORMAT_REGEXP_ESCAPING_RULE_CSV";
    case UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_JSON:
      return "FORMAT_REGEXP_ESCAPING_RULE_JSON";
    case UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_XML:
      return "FORMAT_REGEXP_ESCAPING_RULE_XML";
    case UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_RAW:
      return "FORMAT_REGEXP_ESCAPING_RULE_RAW";
    default:
      return "UNKNOWN";
  }
}

export enum UserSettings_DateTimeInputFormat {
  DATE_TIME_INPUT_FORMAT_UNSPECIFIED = 0,
  DATE_TIME_INPUT_FORMAT_BEST_EFFORT = 1,
  DATE_TIME_INPUT_FORMAT_BASIC = 2,
  DATE_TIME_INPUT_FORMAT_BEST_EFFORT_US = 3,
  UNRECOGNIZED = -1,
}

export function userSettings_DateTimeInputFormatFromJSON(
  object: any
): UserSettings_DateTimeInputFormat {
  switch (object) {
    case 0:
    case "DATE_TIME_INPUT_FORMAT_UNSPECIFIED":
      return UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_UNSPECIFIED;
    case 1:
    case "DATE_TIME_INPUT_FORMAT_BEST_EFFORT":
      return UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_BEST_EFFORT;
    case 2:
    case "DATE_TIME_INPUT_FORMAT_BASIC":
      return UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_BASIC;
    case 3:
    case "DATE_TIME_INPUT_FORMAT_BEST_EFFORT_US":
      return UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_BEST_EFFORT_US;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserSettings_DateTimeInputFormat.UNRECOGNIZED;
  }
}

export function userSettings_DateTimeInputFormatToJSON(
  object: UserSettings_DateTimeInputFormat
): string {
  switch (object) {
    case UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_UNSPECIFIED:
      return "DATE_TIME_INPUT_FORMAT_UNSPECIFIED";
    case UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_BEST_EFFORT:
      return "DATE_TIME_INPUT_FORMAT_BEST_EFFORT";
    case UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_BASIC:
      return "DATE_TIME_INPUT_FORMAT_BASIC";
    case UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_BEST_EFFORT_US:
      return "DATE_TIME_INPUT_FORMAT_BEST_EFFORT_US";
    default:
      return "UNKNOWN";
  }
}

export enum UserSettings_DateTimeOutputFormat {
  DATE_TIME_OUTPUT_FORMAT_UNSPECIFIED = 0,
  DATE_TIME_OUTPUT_FORMAT_SIMPLE = 1,
  DATE_TIME_OUTPUT_FORMAT_ISO = 2,
  DATE_TIME_OUTPUT_FORMAT_UNIX_TIMESTAMP = 3,
  UNRECOGNIZED = -1,
}

export function userSettings_DateTimeOutputFormatFromJSON(
  object: any
): UserSettings_DateTimeOutputFormat {
  switch (object) {
    case 0:
    case "DATE_TIME_OUTPUT_FORMAT_UNSPECIFIED":
      return UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_UNSPECIFIED;
    case 1:
    case "DATE_TIME_OUTPUT_FORMAT_SIMPLE":
      return UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_SIMPLE;
    case 2:
    case "DATE_TIME_OUTPUT_FORMAT_ISO":
      return UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_ISO;
    case 3:
    case "DATE_TIME_OUTPUT_FORMAT_UNIX_TIMESTAMP":
      return UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_UNIX_TIMESTAMP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserSettings_DateTimeOutputFormat.UNRECOGNIZED;
  }
}

export function userSettings_DateTimeOutputFormatToJSON(
  object: UserSettings_DateTimeOutputFormat
): string {
  switch (object) {
    case UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_UNSPECIFIED:
      return "DATE_TIME_OUTPUT_FORMAT_UNSPECIFIED";
    case UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_SIMPLE:
      return "DATE_TIME_OUTPUT_FORMAT_SIMPLE";
    case UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_ISO:
      return "DATE_TIME_OUTPUT_FORMAT_ISO";
    case UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_UNIX_TIMESTAMP:
      return "DATE_TIME_OUTPUT_FORMAT_UNIX_TIMESTAMP";
    default:
      return "UNKNOWN";
  }
}

export enum UserSettings_LocalFilesystemReadMethod {
  LOCAL_FILESYSTEM_READ_METHOD_UNSPECIFIED = 0,
  LOCAL_FILESYSTEM_READ_METHOD_READ = 1,
  LOCAL_FILESYSTEM_READ_METHOD_PREAD_THREADPOOL = 2,
  LOCAL_FILESYSTEM_READ_METHOD_PREAD = 3,
  LOCAL_FILESYSTEM_READ_METHOD_NMAP = 4,
  UNRECOGNIZED = -1,
}

export function userSettings_LocalFilesystemReadMethodFromJSON(
  object: any
): UserSettings_LocalFilesystemReadMethod {
  switch (object) {
    case 0:
    case "LOCAL_FILESYSTEM_READ_METHOD_UNSPECIFIED":
      return UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_UNSPECIFIED;
    case 1:
    case "LOCAL_FILESYSTEM_READ_METHOD_READ":
      return UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_READ;
    case 2:
    case "LOCAL_FILESYSTEM_READ_METHOD_PREAD_THREADPOOL":
      return UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_PREAD_THREADPOOL;
    case 3:
    case "LOCAL_FILESYSTEM_READ_METHOD_PREAD":
      return UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_PREAD;
    case 4:
    case "LOCAL_FILESYSTEM_READ_METHOD_NMAP":
      return UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_NMAP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserSettings_LocalFilesystemReadMethod.UNRECOGNIZED;
  }
}

export function userSettings_LocalFilesystemReadMethodToJSON(
  object: UserSettings_LocalFilesystemReadMethod
): string {
  switch (object) {
    case UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_UNSPECIFIED:
      return "LOCAL_FILESYSTEM_READ_METHOD_UNSPECIFIED";
    case UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_READ:
      return "LOCAL_FILESYSTEM_READ_METHOD_READ";
    case UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_PREAD_THREADPOOL:
      return "LOCAL_FILESYSTEM_READ_METHOD_PREAD_THREADPOOL";
    case UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_PREAD:
      return "LOCAL_FILESYSTEM_READ_METHOD_PREAD";
    case UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_NMAP:
      return "LOCAL_FILESYSTEM_READ_METHOD_NMAP";
    default:
      return "UNKNOWN";
  }
}

export enum UserSettings_RemoteFilesystemReadMethod {
  REMOTE_FILESYSTEM_READ_METHOD_UNSPECIFIED = 0,
  REMOTE_FILESYSTEM_READ_METHOD_READ = 1,
  REMOTE_FILESYSTEM_READ_METHOD_THREADPOOL = 2,
  UNRECOGNIZED = -1,
}

export function userSettings_RemoteFilesystemReadMethodFromJSON(
  object: any
): UserSettings_RemoteFilesystemReadMethod {
  switch (object) {
    case 0:
    case "REMOTE_FILESYSTEM_READ_METHOD_UNSPECIFIED":
      return UserSettings_RemoteFilesystemReadMethod.REMOTE_FILESYSTEM_READ_METHOD_UNSPECIFIED;
    case 1:
    case "REMOTE_FILESYSTEM_READ_METHOD_READ":
      return UserSettings_RemoteFilesystemReadMethod.REMOTE_FILESYSTEM_READ_METHOD_READ;
    case 2:
    case "REMOTE_FILESYSTEM_READ_METHOD_THREADPOOL":
      return UserSettings_RemoteFilesystemReadMethod.REMOTE_FILESYSTEM_READ_METHOD_THREADPOOL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserSettings_RemoteFilesystemReadMethod.UNRECOGNIZED;
  }
}

export function userSettings_RemoteFilesystemReadMethodToJSON(
  object: UserSettings_RemoteFilesystemReadMethod
): string {
  switch (object) {
    case UserSettings_RemoteFilesystemReadMethod.REMOTE_FILESYSTEM_READ_METHOD_UNSPECIFIED:
      return "REMOTE_FILESYSTEM_READ_METHOD_UNSPECIFIED";
    case UserSettings_RemoteFilesystemReadMethod.REMOTE_FILESYSTEM_READ_METHOD_READ:
      return "REMOTE_FILESYSTEM_READ_METHOD_READ";
    case UserSettings_RemoteFilesystemReadMethod.REMOTE_FILESYSTEM_READ_METHOD_THREADPOOL:
      return "REMOTE_FILESYSTEM_READ_METHOD_THREADPOOL";
    default:
      return "UNKNOWN";
  }
}

/**
 * ClickHouse quota representation. Each quota associated with an user and limits it resource usage for an interval.
 * See in-depth description [ClickHouse documentation](https://clickhouse.com/docs/en/operations/quotas/).
 */
export interface UserQuota {
  $type: "yandex.cloud.mdb.clickhouse.v1.UserQuota";
  /**
   * Duration of interval for quota in milliseconds.
   * Minimal value is 1 second.
   */
  intervalDuration?: number;
  /**
   * The total number of queries.
   * 0 - unlimited.
   */
  queries?: number;
  /**
   * The number of queries that threw exception.
   * 0 - unlimited.
   */
  errors?: number;
  /**
   * The total number of rows given as the result..
   * 0 - unlimited.
   */
  resultRows?: number;
  /**
   * The total number of source rows read from tables for running the query, on all remote servers.
   * 0 - unlimited.
   */
  readRows?: number;
  /**
   * The total query execution time, in milliseconds (wall time).
   * 0 - unlimited.
   */
  executionTime?: number;
}

const baseUser: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.User",
  name: "",
  clusterId: "",
};

export const User = {
  $type: "yandex.cloud.mdb.clickhouse.v1.User" as const,

  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.clusterId !== "") {
      writer.uint32(18).string(message.clusterId);
    }
    for (const v of message.permissions) {
      Permission.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.settings !== undefined) {
      UserSettings.encode(message.settings, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.quotas) {
      UserQuota.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUser } as User;
    message.permissions = [];
    message.quotas = [];
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
          message.permissions.push(Permission.decode(reader, reader.uint32()));
          break;
        case 4:
          message.settings = UserSettings.decode(reader, reader.uint32());
          break;
        case 5:
          message.quotas.push(UserQuota.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): User {
    const message = { ...baseUser } as User;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.permissions = (object.permissions ?? []).map((e: any) =>
      Permission.fromJSON(e)
    );
    message.settings =
      object.settings !== undefined && object.settings !== null
        ? UserSettings.fromJSON(object.settings)
        : undefined;
    message.quotas = (object.quotas ?? []).map((e: any) =>
      UserQuota.fromJSON(e)
    );
    return message;
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    if (message.permissions) {
      obj.permissions = message.permissions.map((e) =>
        e ? Permission.toJSON(e) : undefined
      );
    } else {
      obj.permissions = [];
    }
    message.settings !== undefined &&
      (obj.settings = message.settings
        ? UserSettings.toJSON(message.settings)
        : undefined);
    if (message.quotas) {
      obj.quotas = message.quotas.map((e) =>
        e ? UserQuota.toJSON(e) : undefined
      );
    } else {
      obj.quotas = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = { ...baseUser } as User;
    message.name = object.name ?? "";
    message.clusterId = object.clusterId ?? "";
    message.permissions =
      object.permissions?.map((e) => Permission.fromPartial(e)) || [];
    message.settings =
      object.settings !== undefined && object.settings !== null
        ? UserSettings.fromPartial(object.settings)
        : undefined;
    message.quotas = object.quotas?.map((e) => UserQuota.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(User.$type, User);

const basePermission: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.Permission",
  databaseName: "",
};

export const Permission = {
  $type: "yandex.cloud.mdb.clickhouse.v1.Permission" as const,

  encode(
    message: Permission,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.databaseName !== "") {
      writer.uint32(10).string(message.databaseName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Permission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePermission } as Permission;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.databaseName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Permission {
    const message = { ...basePermission } as Permission;
    message.databaseName =
      object.databaseName !== undefined && object.databaseName !== null
        ? String(object.databaseName)
        : "";
    return message;
  },

  toJSON(message: Permission): unknown {
    const obj: any = {};
    message.databaseName !== undefined &&
      (obj.databaseName = message.databaseName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Permission>, I>>(
    object: I
  ): Permission {
    const message = { ...basePermission } as Permission;
    message.databaseName = object.databaseName ?? "";
    return message;
  },
};

messageTypeRegistry.set(Permission.$type, Permission);

const baseUserSpec: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UserSpec",
  name: "",
  password: "",
};

export const UserSpec = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UserSpec" as const,

  encode(
    message: UserSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    for (const v of message.permissions) {
      Permission.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.settings !== undefined) {
      UserSettings.encode(message.settings, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.quotas) {
      UserQuota.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserSpec } as UserSpec;
    message.permissions = [];
    message.quotas = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.password = reader.string();
          break;
        case 3:
          message.permissions.push(Permission.decode(reader, reader.uint32()));
          break;
        case 4:
          message.settings = UserSettings.decode(reader, reader.uint32());
          break;
        case 5:
          message.quotas.push(UserQuota.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserSpec {
    const message = { ...baseUserSpec } as UserSpec;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.password =
      object.password !== undefined && object.password !== null
        ? String(object.password)
        : "";
    message.permissions = (object.permissions ?? []).map((e: any) =>
      Permission.fromJSON(e)
    );
    message.settings =
      object.settings !== undefined && object.settings !== null
        ? UserSettings.fromJSON(object.settings)
        : undefined;
    message.quotas = (object.quotas ?? []).map((e: any) =>
      UserQuota.fromJSON(e)
    );
    return message;
  },

  toJSON(message: UserSpec): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.password !== undefined && (obj.password = message.password);
    if (message.permissions) {
      obj.permissions = message.permissions.map((e) =>
        e ? Permission.toJSON(e) : undefined
      );
    } else {
      obj.permissions = [];
    }
    message.settings !== undefined &&
      (obj.settings = message.settings
        ? UserSettings.toJSON(message.settings)
        : undefined);
    if (message.quotas) {
      obj.quotas = message.quotas.map((e) =>
        e ? UserQuota.toJSON(e) : undefined
      );
    } else {
      obj.quotas = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserSpec>, I>>(object: I): UserSpec {
    const message = { ...baseUserSpec } as UserSpec;
    message.name = object.name ?? "";
    message.password = object.password ?? "";
    message.permissions =
      object.permissions?.map((e) => Permission.fromPartial(e)) || [];
    message.settings =
      object.settings !== undefined && object.settings !== null
        ? UserSettings.fromPartial(object.settings)
        : undefined;
    message.quotas = object.quotas?.map((e) => UserQuota.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(UserSpec.$type, UserSpec);

const baseUserSettings: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UserSettings",
  distributedProductMode: 0,
  readOverflowMode: 0,
  groupByOverflowMode: 0,
  sortOverflowMode: 0,
  resultOverflowMode: 0,
  distinctOverflowMode: 0,
  transferOverflowMode: 0,
  timeoutOverflowMode: 0,
  setOverflowMode: 0,
  joinOverflowMode: 0,
  joinAlgorithm: 0,
  countDistinctImplementation: 0,
  dateTimeInputFormat: 0,
  dateTimeOutputFormat: 0,
  quotaMode: 0,
  formatRegexp: "",
  formatRegexpEscapingRule: 0,
  localFilesystemReadMethod: 0,
  remoteFilesystemReadMethod: 0,
};

export const UserSettings = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UserSettings" as const,

  encode(
    message: UserSettings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.readonly !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.readonly! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.allowDdl !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.allowDdl! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.allowIntrospectionFunctions !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.allowIntrospectionFunctions!,
        },
        writer.uint32(770).fork()
      ).ldelim();
    }
    if (message.connectTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.connectTimeout! },
        writer.uint32(314).fork()
      ).ldelim();
    }
    if (message.connectTimeoutWithFailover !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.connectTimeoutWithFailover!,
        },
        writer.uint32(778).fork()
      ).ldelim();
    }
    if (message.receiveTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.receiveTimeout! },
        writer.uint32(322).fork()
      ).ldelim();
    }
    if (message.sendTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.sendTimeout! },
        writer.uint32(330).fork()
      ).ldelim();
    }
    if (message.timeoutBeforeCheckingExecutionSpeed !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.timeoutBeforeCheckingExecutionSpeed!,
        },
        writer.uint32(786).fork()
      ).ldelim();
    }
    if (message.insertQuorum !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.insertQuorum! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.insertQuorumTimeout !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.insertQuorumTimeout!,
        },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.insertQuorumParallel !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.insertQuorumParallel!,
        },
        writer.uint32(794).fork()
      ).ldelim();
    }
    if (message.insertNullAsDefault !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.insertNullAsDefault!,
        },
        writer.uint32(802).fork()
      ).ldelim();
    }
    if (message.selectSequentialConsistency !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.selectSequentialConsistency!,
        },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.deduplicateBlocksInDependentMaterializedViews !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.deduplicateBlocksInDependentMaterializedViews!,
        },
        writer.uint32(810).fork()
      ).ldelim();
    }
    if (message.replicationAlterPartitionsSync !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.replicationAlterPartitionsSync!,
        },
        writer.uint32(338).fork()
      ).ldelim();
    }
    if (message.maxReplicaDelayForDistributedQueries !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxReplicaDelayForDistributedQueries!,
        },
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.fallbackToStaleReplicasForDistributedQueries !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.fallbackToStaleReplicasForDistributedQueries!,
        },
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.distributedProductMode !== 0) {
      writer.uint32(344).int32(message.distributedProductMode);
    }
    if (message.distributedAggregationMemoryEfficient !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.distributedAggregationMemoryEfficient!,
        },
        writer.uint32(578).fork()
      ).ldelim();
    }
    if (message.distributedDdlTaskTimeout !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.distributedDdlTaskTimeout!,
        },
        writer.uint32(586).fork()
      ).ldelim();
    }
    if (message.skipUnavailableShards !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.skipUnavailableShards!,
        },
        writer.uint32(650).fork()
      ).ldelim();
    }
    if (message.compileExpressions !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.compileExpressions!,
        },
        writer.uint32(370).fork()
      ).ldelim();
    }
    if (message.minCountToCompileExpression !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.minCountToCompileExpression!,
        },
        writer.uint32(378).fork()
      ).ldelim();
    }
    if (message.maxBlockSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxBlockSize! },
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.minInsertBlockSizeRows !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.minInsertBlockSizeRows!,
        },
        writer.uint32(386).fork()
      ).ldelim();
    }
    if (message.minInsertBlockSizeBytes !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.minInsertBlockSizeBytes!,
        },
        writer.uint32(394).fork()
      ).ldelim();
    }
    if (message.maxInsertBlockSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxInsertBlockSize!,
        },
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.minBytesToUseDirectIo !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.minBytesToUseDirectIo!,
        },
        writer.uint32(402).fork()
      ).ldelim();
    }
    if (message.useUncompressedCache !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.useUncompressedCache!,
        },
        writer.uint32(410).fork()
      ).ldelim();
    }
    if (message.mergeTreeMaxRowsToUseCache !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.mergeTreeMaxRowsToUseCache!,
        },
        writer.uint32(418).fork()
      ).ldelim();
    }
    if (message.mergeTreeMaxBytesToUseCache !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.mergeTreeMaxBytesToUseCache!,
        },
        writer.uint32(426).fork()
      ).ldelim();
    }
    if (message.mergeTreeMinRowsForConcurrentRead !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.mergeTreeMinRowsForConcurrentRead!,
        },
        writer.uint32(434).fork()
      ).ldelim();
    }
    if (message.mergeTreeMinBytesForConcurrentRead !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.mergeTreeMinBytesForConcurrentRead!,
        },
        writer.uint32(442).fork()
      ).ldelim();
    }
    if (message.maxBytesBeforeExternalGroupBy !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxBytesBeforeExternalGroupBy!,
        },
        writer.uint32(594).fork()
      ).ldelim();
    }
    if (message.maxBytesBeforeExternalSort !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxBytesBeforeExternalSort!,
        },
        writer.uint32(602).fork()
      ).ldelim();
    }
    if (message.groupByTwoLevelThreshold !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.groupByTwoLevelThreshold!,
        },
        writer.uint32(610).fork()
      ).ldelim();
    }
    if (message.groupByTwoLevelThresholdBytes !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.groupByTwoLevelThresholdBytes!,
        },
        writer.uint32(618).fork()
      ).ldelim();
    }
    if (message.priority !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.priority! },
        writer.uint32(450).fork()
      ).ldelim();
    }
    if (message.maxThreads !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxThreads! },
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.maxMemoryUsage !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxMemoryUsage! },
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.maxMemoryUsageForUser !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxMemoryUsageForUser!,
        },
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.maxNetworkBandwidth !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxNetworkBandwidth!,
        },
        writer.uint32(458).fork()
      ).ldelim();
    }
    if (message.maxNetworkBandwidthForUser !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxNetworkBandwidthForUser!,
        },
        writer.uint32(466).fork()
      ).ldelim();
    }
    if (message.maxPartitionsPerInsertBlock !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxPartitionsPerInsertBlock!,
        },
        writer.uint32(818).fork()
      ).ldelim();
    }
    if (message.maxConcurrentQueriesForUser !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxConcurrentQueriesForUser!,
        },
        writer.uint32(826).fork()
      ).ldelim();
    }
    if (message.forceIndexByDate !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.forceIndexByDate!,
        },
        writer.uint32(474).fork()
      ).ldelim();
    }
    if (message.forcePrimaryKey !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.forcePrimaryKey! },
        writer.uint32(482).fork()
      ).ldelim();
    }
    if (message.maxRowsToRead !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxRowsToRead! },
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.maxBytesToRead !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxBytesToRead! },
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.readOverflowMode !== 0) {
      writer.uint32(120).int32(message.readOverflowMode);
    }
    if (message.maxRowsToGroupBy !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxRowsToGroupBy!,
        },
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.groupByOverflowMode !== 0) {
      writer.uint32(136).int32(message.groupByOverflowMode);
    }
    if (message.maxRowsToSort !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxRowsToSort! },
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.maxBytesToSort !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxBytesToSort! },
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.sortOverflowMode !== 0) {
      writer.uint32(160).int32(message.sortOverflowMode);
    }
    if (message.maxResultRows !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxResultRows! },
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.maxResultBytes !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxResultBytes! },
        writer.uint32(178).fork()
      ).ldelim();
    }
    if (message.resultOverflowMode !== 0) {
      writer.uint32(184).int32(message.resultOverflowMode);
    }
    if (message.maxRowsInDistinct !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxRowsInDistinct!,
        },
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.maxBytesInDistinct !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxBytesInDistinct!,
        },
        writer.uint32(202).fork()
      ).ldelim();
    }
    if (message.distinctOverflowMode !== 0) {
      writer.uint32(208).int32(message.distinctOverflowMode);
    }
    if (message.maxRowsToTransfer !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxRowsToTransfer!,
        },
        writer.uint32(218).fork()
      ).ldelim();
    }
    if (message.maxBytesToTransfer !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxBytesToTransfer!,
        },
        writer.uint32(226).fork()
      ).ldelim();
    }
    if (message.transferOverflowMode !== 0) {
      writer.uint32(232).int32(message.transferOverflowMode);
    }
    if (message.maxExecutionTime !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxExecutionTime!,
        },
        writer.uint32(242).fork()
      ).ldelim();
    }
    if (message.timeoutOverflowMode !== 0) {
      writer.uint32(248).int32(message.timeoutOverflowMode);
    }
    if (message.maxRowsInSet !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxRowsInSet! },
        writer.uint32(698).fork()
      ).ldelim();
    }
    if (message.maxBytesInSet !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxBytesInSet! },
        writer.uint32(706).fork()
      ).ldelim();
    }
    if (message.setOverflowMode !== 0) {
      writer.uint32(712).int32(message.setOverflowMode);
    }
    if (message.maxRowsInJoin !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxRowsInJoin! },
        writer.uint32(722).fork()
      ).ldelim();
    }
    if (message.maxBytesInJoin !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxBytesInJoin! },
        writer.uint32(730).fork()
      ).ldelim();
    }
    if (message.joinOverflowMode !== 0) {
      writer.uint32(736).int32(message.joinOverflowMode);
    }
    writer.uint32(834).fork();
    for (const v of message.joinAlgorithm) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.anyJoinDistinctRightTableKeys !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.anyJoinDistinctRightTableKeys!,
        },
        writer.uint32(842).fork()
      ).ldelim();
    }
    if (message.maxColumnsToRead !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxColumnsToRead!,
        },
        writer.uint32(258).fork()
      ).ldelim();
    }
    if (message.maxTemporaryColumns !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxTemporaryColumns!,
        },
        writer.uint32(266).fork()
      ).ldelim();
    }
    if (message.maxTemporaryNonConstColumns !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxTemporaryNonConstColumns!,
        },
        writer.uint32(274).fork()
      ).ldelim();
    }
    if (message.maxQuerySize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxQuerySize! },
        writer.uint32(282).fork()
      ).ldelim();
    }
    if (message.maxAstDepth !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxAstDepth! },
        writer.uint32(290).fork()
      ).ldelim();
    }
    if (message.maxAstElements !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxAstElements! },
        writer.uint32(298).fork()
      ).ldelim();
    }
    if (message.maxExpandedAstElements !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxExpandedAstElements!,
        },
        writer.uint32(306).fork()
      ).ldelim();
    }
    if (message.minExecutionSpeed !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.minExecutionSpeed!,
        },
        writer.uint32(674).fork()
      ).ldelim();
    }
    if (message.minExecutionSpeedBytes !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.minExecutionSpeedBytes!,
        },
        writer.uint32(682).fork()
      ).ldelim();
    }
    if (message.countDistinctImplementation !== 0) {
      writer.uint32(688).int32(message.countDistinctImplementation);
    }
    if (message.inputFormatValuesInterpretExpressions !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.inputFormatValuesInterpretExpressions!,
        },
        writer.uint32(490).fork()
      ).ldelim();
    }
    if (message.inputFormatDefaultsForOmittedFields !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.inputFormatDefaultsForOmittedFields!,
        },
        writer.uint32(498).fork()
      ).ldelim();
    }
    if (message.inputFormatNullAsDefault !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.inputFormatNullAsDefault!,
        },
        writer.uint32(850).fork()
      ).ldelim();
    }
    if (message.dateTimeInputFormat !== 0) {
      writer.uint32(856).int32(message.dateTimeInputFormat);
    }
    if (message.inputFormatWithNamesUseHeader !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.inputFormatWithNamesUseHeader!,
        },
        writer.uint32(866).fork()
      ).ldelim();
    }
    if (message.outputFormatJsonQuote64bitIntegers !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.outputFormatJsonQuote64bitIntegers!,
        },
        writer.uint32(506).fork()
      ).ldelim();
    }
    if (message.outputFormatJsonQuoteDenormals !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.outputFormatJsonQuoteDenormals!,
        },
        writer.uint32(514).fork()
      ).ldelim();
    }
    if (message.dateTimeOutputFormat !== 0) {
      writer.uint32(872).int32(message.dateTimeOutputFormat);
    }
    if (message.lowCardinalityAllowInNativeFormat !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.lowCardinalityAllowInNativeFormat!,
        },
        writer.uint32(626).fork()
      ).ldelim();
    }
    if (message.allowSuspiciousLowCardinalityTypes !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.allowSuspiciousLowCardinalityTypes!,
        },
        writer.uint32(882).fork()
      ).ldelim();
    }
    if (message.emptyResultForAggregationByEmptySet !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.emptyResultForAggregationByEmptySet!,
        },
        writer.uint32(634).fork()
      ).ldelim();
    }
    if (message.httpConnectionTimeout !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.httpConnectionTimeout!,
        },
        writer.uint32(522).fork()
      ).ldelim();
    }
    if (message.httpReceiveTimeout !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.httpReceiveTimeout!,
        },
        writer.uint32(530).fork()
      ).ldelim();
    }
    if (message.httpSendTimeout !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.httpSendTimeout!,
        },
        writer.uint32(538).fork()
      ).ldelim();
    }
    if (message.enableHttpCompression !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.enableHttpCompression!,
        },
        writer.uint32(546).fork()
      ).ldelim();
    }
    if (message.sendProgressInHttpHeaders !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.sendProgressInHttpHeaders!,
        },
        writer.uint32(554).fork()
      ).ldelim();
    }
    if (message.httpHeadersProgressInterval !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.httpHeadersProgressInterval!,
        },
        writer.uint32(562).fork()
      ).ldelim();
    }
    if (message.addHttpCorsHeader !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.addHttpCorsHeader!,
        },
        writer.uint32(570).fork()
      ).ldelim();
    }
    if (message.cancelHttpReadonlyQueriesOnClientClose !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.cancelHttpReadonlyQueriesOnClientClose!,
        },
        writer.uint32(890).fork()
      ).ldelim();
    }
    if (message.maxHttpGetRedirects !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxHttpGetRedirects!,
        },
        writer.uint32(898).fork()
      ).ldelim();
    }
    if (message.joinedSubqueryRequiresAlias !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.joinedSubqueryRequiresAlias!,
        },
        writer.uint32(746).fork()
      ).ldelim();
    }
    if (message.joinUseNulls !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.joinUseNulls! },
        writer.uint32(754).fork()
      ).ldelim();
    }
    if (message.transformNullIn !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.transformNullIn! },
        writer.uint32(762).fork()
      ).ldelim();
    }
    if (message.quotaMode !== 0) {
      writer.uint32(640).int32(message.quotaMode);
    }
    if (message.flattenNested !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.flattenNested! },
        writer.uint32(906).fork()
      ).ldelim();
    }
    if (message.formatRegexp !== "") {
      writer.uint32(914).string(message.formatRegexp);
    }
    if (message.formatRegexpEscapingRule !== 0) {
      writer.uint32(920).int32(message.formatRegexpEscapingRule);
    }
    if (message.formatRegexpSkipUnmatched !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.formatRegexpSkipUnmatched!,
        },
        writer.uint32(930).fork()
      ).ldelim();
    }
    if (message.asyncInsert !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.asyncInsert! },
        writer.uint32(938).fork()
      ).ldelim();
    }
    if (message.asyncInsertThreads !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.asyncInsertThreads!,
        },
        writer.uint32(946).fork()
      ).ldelim();
    }
    if (message.waitForAsyncInsert !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.waitForAsyncInsert!,
        },
        writer.uint32(954).fork()
      ).ldelim();
    }
    if (message.waitForAsyncInsertTimeout !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.waitForAsyncInsertTimeout!,
        },
        writer.uint32(962).fork()
      ).ldelim();
    }
    if (message.asyncInsertMaxDataSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.asyncInsertMaxDataSize!,
        },
        writer.uint32(970).fork()
      ).ldelim();
    }
    if (message.asyncInsertBusyTimeout !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.asyncInsertBusyTimeout!,
        },
        writer.uint32(978).fork()
      ).ldelim();
    }
    if (message.asyncInsertStaleTimeout !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.asyncInsertStaleTimeout!,
        },
        writer.uint32(986).fork()
      ).ldelim();
    }
    if (message.memoryProfilerStep !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.memoryProfilerStep!,
        },
        writer.uint32(994).fork()
      ).ldelim();
    }
    if (message.memoryProfilerSampleProbability !== undefined) {
      DoubleValue.encode(
        {
          $type: "google.protobuf.DoubleValue",
          value: message.memoryProfilerSampleProbability!,
        },
        writer.uint32(1002).fork()
      ).ldelim();
    }
    if (message.maxFinalThreads !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxFinalThreads!,
        },
        writer.uint32(1010).fork()
      ).ldelim();
    }
    if (message.inputFormatParallelParsing !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.inputFormatParallelParsing!,
        },
        writer.uint32(1018).fork()
      ).ldelim();
    }
    if (message.inputFormatImportNestedJson !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.inputFormatImportNestedJson!,
        },
        writer.uint32(1026).fork()
      ).ldelim();
    }
    if (message.localFilesystemReadMethod !== 0) {
      writer.uint32(1032).int32(message.localFilesystemReadMethod);
    }
    if (message.maxReadBufferSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxReadBufferSize!,
        },
        writer.uint32(1042).fork()
      ).ldelim();
    }
    if (message.insertKeeperMaxRetries !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.insertKeeperMaxRetries!,
        },
        writer.uint32(1050).fork()
      ).ldelim();
    }
    if (message.maxTemporaryDataOnDiskSizeForUser !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxTemporaryDataOnDiskSizeForUser!,
        },
        writer.uint32(1058).fork()
      ).ldelim();
    }
    if (message.maxTemporaryDataOnDiskSizeForQuery !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxTemporaryDataOnDiskSizeForQuery!,
        },
        writer.uint32(1066).fork()
      ).ldelim();
    }
    if (message.maxParserDepth !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxParserDepth! },
        writer.uint32(1074).fork()
      ).ldelim();
    }
    if (message.remoteFilesystemReadMethod !== 0) {
      writer.uint32(1080).int32(message.remoteFilesystemReadMethod);
    }
    if (message.memoryOvercommitRatioDenominator !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.memoryOvercommitRatioDenominator!,
        },
        writer.uint32(1090).fork()
      ).ldelim();
    }
    if (message.memoryOvercommitRatioDenominatorForUser !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.memoryOvercommitRatioDenominatorForUser!,
        },
        writer.uint32(1098).fork()
      ).ldelim();
    }
    if (message.memoryUsageOvercommitMaxWaitMicroseconds !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.memoryUsageOvercommitMaxWaitMicroseconds!,
        },
        writer.uint32(1106).fork()
      ).ldelim();
    }
    if (message.compile !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.compile! },
        writer.uint32(354).fork()
      ).ldelim();
    }
    if (message.minCountToCompile !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.minCountToCompile!,
        },
        writer.uint32(362).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserSettings } as UserSettings;
    message.joinAlgorithm = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.readonly = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 2:
          message.allowDdl = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 96:
          message.allowIntrospectionFunctions = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 39:
          message.connectTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 97:
          message.connectTimeoutWithFailover = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 40:
          message.receiveTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 41:
          message.sendTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 98:
          message.timeoutBeforeCheckingExecutionSpeed = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.insertQuorum = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 4:
          message.insertQuorumTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 99:
          message.insertQuorumParallel = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 100:
          message.insertNullAsDefault = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 5:
          message.selectSequentialConsistency = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 101:
          message.deduplicateBlocksInDependentMaterializedViews =
            BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 42:
          message.replicationAlterPartitionsSync = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 6:
          message.maxReplicaDelayForDistributedQueries = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 7:
          message.fallbackToStaleReplicasForDistributedQueries =
            BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 43:
          message.distributedProductMode = reader.int32() as any;
          break;
        case 72:
          message.distributedAggregationMemoryEfficient = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 73:
          message.distributedDdlTaskTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 81:
          message.skipUnavailableShards = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 46:
          message.compileExpressions = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 47:
          message.minCountToCompileExpression = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 9:
          message.maxBlockSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 48:
          message.minInsertBlockSizeRows = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 49:
          message.minInsertBlockSizeBytes = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 10:
          message.maxInsertBlockSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 50:
          message.minBytesToUseDirectIo = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 51:
          message.useUncompressedCache = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 52:
          message.mergeTreeMaxRowsToUseCache = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 53:
          message.mergeTreeMaxBytesToUseCache = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 54:
          message.mergeTreeMinRowsForConcurrentRead = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 55:
          message.mergeTreeMinBytesForConcurrentRead = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 74:
          message.maxBytesBeforeExternalGroupBy = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 75:
          message.maxBytesBeforeExternalSort = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 76:
          message.groupByTwoLevelThreshold = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 77:
          message.groupByTwoLevelThresholdBytes = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 56:
          message.priority = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 8:
          message.maxThreads = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 11:
          message.maxMemoryUsage = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 12:
          message.maxMemoryUsageForUser = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 57:
          message.maxNetworkBandwidth = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 58:
          message.maxNetworkBandwidthForUser = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 102:
          message.maxPartitionsPerInsertBlock = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 103:
          message.maxConcurrentQueriesForUser = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 59:
          message.forceIndexByDate = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 60:
          message.forcePrimaryKey = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 13:
          message.maxRowsToRead = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 14:
          message.maxBytesToRead = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 15:
          message.readOverflowMode = reader.int32() as any;
          break;
        case 16:
          message.maxRowsToGroupBy = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 17:
          message.groupByOverflowMode = reader.int32() as any;
          break;
        case 18:
          message.maxRowsToSort = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 19:
          message.maxBytesToSort = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 20:
          message.sortOverflowMode = reader.int32() as any;
          break;
        case 21:
          message.maxResultRows = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 22:
          message.maxResultBytes = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 23:
          message.resultOverflowMode = reader.int32() as any;
          break;
        case 24:
          message.maxRowsInDistinct = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 25:
          message.maxBytesInDistinct = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 26:
          message.distinctOverflowMode = reader.int32() as any;
          break;
        case 27:
          message.maxRowsToTransfer = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 28:
          message.maxBytesToTransfer = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 29:
          message.transferOverflowMode = reader.int32() as any;
          break;
        case 30:
          message.maxExecutionTime = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 31:
          message.timeoutOverflowMode = reader.int32() as any;
          break;
        case 87:
          message.maxRowsInSet = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 88:
          message.maxBytesInSet = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 89:
          message.setOverflowMode = reader.int32() as any;
          break;
        case 90:
          message.maxRowsInJoin = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 91:
          message.maxBytesInJoin = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 92:
          message.joinOverflowMode = reader.int32() as any;
          break;
        case 104:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.joinAlgorithm.push(reader.int32() as any);
            }
          } else {
            message.joinAlgorithm.push(reader.int32() as any);
          }
          break;
        case 105:
          message.anyJoinDistinctRightTableKeys = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 32:
          message.maxColumnsToRead = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 33:
          message.maxTemporaryColumns = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 34:
          message.maxTemporaryNonConstColumns = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 35:
          message.maxQuerySize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 36:
          message.maxAstDepth = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 37:
          message.maxAstElements = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 38:
          message.maxExpandedAstElements = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 84:
          message.minExecutionSpeed = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 85:
          message.minExecutionSpeedBytes = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 86:
          message.countDistinctImplementation = reader.int32() as any;
          break;
        case 61:
          message.inputFormatValuesInterpretExpressions = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 62:
          message.inputFormatDefaultsForOmittedFields = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 106:
          message.inputFormatNullAsDefault = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 107:
          message.dateTimeInputFormat = reader.int32() as any;
          break;
        case 108:
          message.inputFormatWithNamesUseHeader = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 63:
          message.outputFormatJsonQuote64bitIntegers = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 64:
          message.outputFormatJsonQuoteDenormals = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 109:
          message.dateTimeOutputFormat = reader.int32() as any;
          break;
        case 78:
          message.lowCardinalityAllowInNativeFormat = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 110:
          message.allowSuspiciousLowCardinalityTypes = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 79:
          message.emptyResultForAggregationByEmptySet = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 65:
          message.httpConnectionTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 66:
          message.httpReceiveTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 67:
          message.httpSendTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 68:
          message.enableHttpCompression = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 69:
          message.sendProgressInHttpHeaders = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 70:
          message.httpHeadersProgressInterval = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 71:
          message.addHttpCorsHeader = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 111:
          message.cancelHttpReadonlyQueriesOnClientClose = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 112:
          message.maxHttpGetRedirects = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 93:
          message.joinedSubqueryRequiresAlias = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 94:
          message.joinUseNulls = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 95:
          message.transformNullIn = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 80:
          message.quotaMode = reader.int32() as any;
          break;
        case 113:
          message.flattenNested = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 114:
          message.formatRegexp = reader.string();
          break;
        case 115:
          message.formatRegexpEscapingRule = reader.int32() as any;
          break;
        case 116:
          message.formatRegexpSkipUnmatched = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 117:
          message.asyncInsert = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 118:
          message.asyncInsertThreads = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 119:
          message.waitForAsyncInsert = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 120:
          message.waitForAsyncInsertTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 121:
          message.asyncInsertMaxDataSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 122:
          message.asyncInsertBusyTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 123:
          message.asyncInsertStaleTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 124:
          message.memoryProfilerStep = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 125:
          message.memoryProfilerSampleProbability = DoubleValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 126:
          message.maxFinalThreads = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 127:
          message.inputFormatParallelParsing = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 128:
          message.inputFormatImportNestedJson = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 129:
          message.localFilesystemReadMethod = reader.int32() as any;
          break;
        case 130:
          message.maxReadBufferSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 131:
          message.insertKeeperMaxRetries = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 132:
          message.maxTemporaryDataOnDiskSizeForUser = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 133:
          message.maxTemporaryDataOnDiskSizeForQuery = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 134:
          message.maxParserDepth = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 135:
          message.remoteFilesystemReadMethod = reader.int32() as any;
          break;
        case 136:
          message.memoryOvercommitRatioDenominator = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 137:
          message.memoryOvercommitRatioDenominatorForUser = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 138:
          message.memoryUsageOvercommitMaxWaitMicroseconds = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 44:
          message.compile = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 45:
          message.minCountToCompile = Int64Value.decode(
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

  fromJSON(object: any): UserSettings {
    const message = { ...baseUserSettings } as UserSettings;
    message.readonly =
      object.readonly !== undefined && object.readonly !== null
        ? Number(object.readonly)
        : undefined;
    message.allowDdl =
      object.allowDdl !== undefined && object.allowDdl !== null
        ? Boolean(object.allowDdl)
        : undefined;
    message.allowIntrospectionFunctions =
      object.allowIntrospectionFunctions !== undefined &&
      object.allowIntrospectionFunctions !== null
        ? Boolean(object.allowIntrospectionFunctions)
        : undefined;
    message.connectTimeout =
      object.connectTimeout !== undefined && object.connectTimeout !== null
        ? Number(object.connectTimeout)
        : undefined;
    message.connectTimeoutWithFailover =
      object.connectTimeoutWithFailover !== undefined &&
      object.connectTimeoutWithFailover !== null
        ? Number(object.connectTimeoutWithFailover)
        : undefined;
    message.receiveTimeout =
      object.receiveTimeout !== undefined && object.receiveTimeout !== null
        ? Number(object.receiveTimeout)
        : undefined;
    message.sendTimeout =
      object.sendTimeout !== undefined && object.sendTimeout !== null
        ? Number(object.sendTimeout)
        : undefined;
    message.timeoutBeforeCheckingExecutionSpeed =
      object.timeoutBeforeCheckingExecutionSpeed !== undefined &&
      object.timeoutBeforeCheckingExecutionSpeed !== null
        ? Number(object.timeoutBeforeCheckingExecutionSpeed)
        : undefined;
    message.insertQuorum =
      object.insertQuorum !== undefined && object.insertQuorum !== null
        ? Number(object.insertQuorum)
        : undefined;
    message.insertQuorumTimeout =
      object.insertQuorumTimeout !== undefined &&
      object.insertQuorumTimeout !== null
        ? Number(object.insertQuorumTimeout)
        : undefined;
    message.insertQuorumParallel =
      object.insertQuorumParallel !== undefined &&
      object.insertQuorumParallel !== null
        ? Boolean(object.insertQuorumParallel)
        : undefined;
    message.insertNullAsDefault =
      object.insertNullAsDefault !== undefined &&
      object.insertNullAsDefault !== null
        ? Boolean(object.insertNullAsDefault)
        : undefined;
    message.selectSequentialConsistency =
      object.selectSequentialConsistency !== undefined &&
      object.selectSequentialConsistency !== null
        ? Boolean(object.selectSequentialConsistency)
        : undefined;
    message.deduplicateBlocksInDependentMaterializedViews =
      object.deduplicateBlocksInDependentMaterializedViews !== undefined &&
      object.deduplicateBlocksInDependentMaterializedViews !== null
        ? Boolean(object.deduplicateBlocksInDependentMaterializedViews)
        : undefined;
    message.replicationAlterPartitionsSync =
      object.replicationAlterPartitionsSync !== undefined &&
      object.replicationAlterPartitionsSync !== null
        ? Number(object.replicationAlterPartitionsSync)
        : undefined;
    message.maxReplicaDelayForDistributedQueries =
      object.maxReplicaDelayForDistributedQueries !== undefined &&
      object.maxReplicaDelayForDistributedQueries !== null
        ? Number(object.maxReplicaDelayForDistributedQueries)
        : undefined;
    message.fallbackToStaleReplicasForDistributedQueries =
      object.fallbackToStaleReplicasForDistributedQueries !== undefined &&
      object.fallbackToStaleReplicasForDistributedQueries !== null
        ? Boolean(object.fallbackToStaleReplicasForDistributedQueries)
        : undefined;
    message.distributedProductMode =
      object.distributedProductMode !== undefined &&
      object.distributedProductMode !== null
        ? userSettings_DistributedProductModeFromJSON(
            object.distributedProductMode
          )
        : 0;
    message.distributedAggregationMemoryEfficient =
      object.distributedAggregationMemoryEfficient !== undefined &&
      object.distributedAggregationMemoryEfficient !== null
        ? Boolean(object.distributedAggregationMemoryEfficient)
        : undefined;
    message.distributedDdlTaskTimeout =
      object.distributedDdlTaskTimeout !== undefined &&
      object.distributedDdlTaskTimeout !== null
        ? Number(object.distributedDdlTaskTimeout)
        : undefined;
    message.skipUnavailableShards =
      object.skipUnavailableShards !== undefined &&
      object.skipUnavailableShards !== null
        ? Boolean(object.skipUnavailableShards)
        : undefined;
    message.compileExpressions =
      object.compileExpressions !== undefined &&
      object.compileExpressions !== null
        ? Boolean(object.compileExpressions)
        : undefined;
    message.minCountToCompileExpression =
      object.minCountToCompileExpression !== undefined &&
      object.minCountToCompileExpression !== null
        ? Number(object.minCountToCompileExpression)
        : undefined;
    message.maxBlockSize =
      object.maxBlockSize !== undefined && object.maxBlockSize !== null
        ? Number(object.maxBlockSize)
        : undefined;
    message.minInsertBlockSizeRows =
      object.minInsertBlockSizeRows !== undefined &&
      object.minInsertBlockSizeRows !== null
        ? Number(object.minInsertBlockSizeRows)
        : undefined;
    message.minInsertBlockSizeBytes =
      object.minInsertBlockSizeBytes !== undefined &&
      object.minInsertBlockSizeBytes !== null
        ? Number(object.minInsertBlockSizeBytes)
        : undefined;
    message.maxInsertBlockSize =
      object.maxInsertBlockSize !== undefined &&
      object.maxInsertBlockSize !== null
        ? Number(object.maxInsertBlockSize)
        : undefined;
    message.minBytesToUseDirectIo =
      object.minBytesToUseDirectIo !== undefined &&
      object.minBytesToUseDirectIo !== null
        ? Number(object.minBytesToUseDirectIo)
        : undefined;
    message.useUncompressedCache =
      object.useUncompressedCache !== undefined &&
      object.useUncompressedCache !== null
        ? Boolean(object.useUncompressedCache)
        : undefined;
    message.mergeTreeMaxRowsToUseCache =
      object.mergeTreeMaxRowsToUseCache !== undefined &&
      object.mergeTreeMaxRowsToUseCache !== null
        ? Number(object.mergeTreeMaxRowsToUseCache)
        : undefined;
    message.mergeTreeMaxBytesToUseCache =
      object.mergeTreeMaxBytesToUseCache !== undefined &&
      object.mergeTreeMaxBytesToUseCache !== null
        ? Number(object.mergeTreeMaxBytesToUseCache)
        : undefined;
    message.mergeTreeMinRowsForConcurrentRead =
      object.mergeTreeMinRowsForConcurrentRead !== undefined &&
      object.mergeTreeMinRowsForConcurrentRead !== null
        ? Number(object.mergeTreeMinRowsForConcurrentRead)
        : undefined;
    message.mergeTreeMinBytesForConcurrentRead =
      object.mergeTreeMinBytesForConcurrentRead !== undefined &&
      object.mergeTreeMinBytesForConcurrentRead !== null
        ? Number(object.mergeTreeMinBytesForConcurrentRead)
        : undefined;
    message.maxBytesBeforeExternalGroupBy =
      object.maxBytesBeforeExternalGroupBy !== undefined &&
      object.maxBytesBeforeExternalGroupBy !== null
        ? Number(object.maxBytesBeforeExternalGroupBy)
        : undefined;
    message.maxBytesBeforeExternalSort =
      object.maxBytesBeforeExternalSort !== undefined &&
      object.maxBytesBeforeExternalSort !== null
        ? Number(object.maxBytesBeforeExternalSort)
        : undefined;
    message.groupByTwoLevelThreshold =
      object.groupByTwoLevelThreshold !== undefined &&
      object.groupByTwoLevelThreshold !== null
        ? Number(object.groupByTwoLevelThreshold)
        : undefined;
    message.groupByTwoLevelThresholdBytes =
      object.groupByTwoLevelThresholdBytes !== undefined &&
      object.groupByTwoLevelThresholdBytes !== null
        ? Number(object.groupByTwoLevelThresholdBytes)
        : undefined;
    message.priority =
      object.priority !== undefined && object.priority !== null
        ? Number(object.priority)
        : undefined;
    message.maxThreads =
      object.maxThreads !== undefined && object.maxThreads !== null
        ? Number(object.maxThreads)
        : undefined;
    message.maxMemoryUsage =
      object.maxMemoryUsage !== undefined && object.maxMemoryUsage !== null
        ? Number(object.maxMemoryUsage)
        : undefined;
    message.maxMemoryUsageForUser =
      object.maxMemoryUsageForUser !== undefined &&
      object.maxMemoryUsageForUser !== null
        ? Number(object.maxMemoryUsageForUser)
        : undefined;
    message.maxNetworkBandwidth =
      object.maxNetworkBandwidth !== undefined &&
      object.maxNetworkBandwidth !== null
        ? Number(object.maxNetworkBandwidth)
        : undefined;
    message.maxNetworkBandwidthForUser =
      object.maxNetworkBandwidthForUser !== undefined &&
      object.maxNetworkBandwidthForUser !== null
        ? Number(object.maxNetworkBandwidthForUser)
        : undefined;
    message.maxPartitionsPerInsertBlock =
      object.maxPartitionsPerInsertBlock !== undefined &&
      object.maxPartitionsPerInsertBlock !== null
        ? Number(object.maxPartitionsPerInsertBlock)
        : undefined;
    message.maxConcurrentQueriesForUser =
      object.maxConcurrentQueriesForUser !== undefined &&
      object.maxConcurrentQueriesForUser !== null
        ? Number(object.maxConcurrentQueriesForUser)
        : undefined;
    message.forceIndexByDate =
      object.forceIndexByDate !== undefined && object.forceIndexByDate !== null
        ? Boolean(object.forceIndexByDate)
        : undefined;
    message.forcePrimaryKey =
      object.forcePrimaryKey !== undefined && object.forcePrimaryKey !== null
        ? Boolean(object.forcePrimaryKey)
        : undefined;
    message.maxRowsToRead =
      object.maxRowsToRead !== undefined && object.maxRowsToRead !== null
        ? Number(object.maxRowsToRead)
        : undefined;
    message.maxBytesToRead =
      object.maxBytesToRead !== undefined && object.maxBytesToRead !== null
        ? Number(object.maxBytesToRead)
        : undefined;
    message.readOverflowMode =
      object.readOverflowMode !== undefined && object.readOverflowMode !== null
        ? userSettings_OverflowModeFromJSON(object.readOverflowMode)
        : 0;
    message.maxRowsToGroupBy =
      object.maxRowsToGroupBy !== undefined && object.maxRowsToGroupBy !== null
        ? Number(object.maxRowsToGroupBy)
        : undefined;
    message.groupByOverflowMode =
      object.groupByOverflowMode !== undefined &&
      object.groupByOverflowMode !== null
        ? userSettings_GroupByOverflowModeFromJSON(object.groupByOverflowMode)
        : 0;
    message.maxRowsToSort =
      object.maxRowsToSort !== undefined && object.maxRowsToSort !== null
        ? Number(object.maxRowsToSort)
        : undefined;
    message.maxBytesToSort =
      object.maxBytesToSort !== undefined && object.maxBytesToSort !== null
        ? Number(object.maxBytesToSort)
        : undefined;
    message.sortOverflowMode =
      object.sortOverflowMode !== undefined && object.sortOverflowMode !== null
        ? userSettings_OverflowModeFromJSON(object.sortOverflowMode)
        : 0;
    message.maxResultRows =
      object.maxResultRows !== undefined && object.maxResultRows !== null
        ? Number(object.maxResultRows)
        : undefined;
    message.maxResultBytes =
      object.maxResultBytes !== undefined && object.maxResultBytes !== null
        ? Number(object.maxResultBytes)
        : undefined;
    message.resultOverflowMode =
      object.resultOverflowMode !== undefined &&
      object.resultOverflowMode !== null
        ? userSettings_OverflowModeFromJSON(object.resultOverflowMode)
        : 0;
    message.maxRowsInDistinct =
      object.maxRowsInDistinct !== undefined &&
      object.maxRowsInDistinct !== null
        ? Number(object.maxRowsInDistinct)
        : undefined;
    message.maxBytesInDistinct =
      object.maxBytesInDistinct !== undefined &&
      object.maxBytesInDistinct !== null
        ? Number(object.maxBytesInDistinct)
        : undefined;
    message.distinctOverflowMode =
      object.distinctOverflowMode !== undefined &&
      object.distinctOverflowMode !== null
        ? userSettings_OverflowModeFromJSON(object.distinctOverflowMode)
        : 0;
    message.maxRowsToTransfer =
      object.maxRowsToTransfer !== undefined &&
      object.maxRowsToTransfer !== null
        ? Number(object.maxRowsToTransfer)
        : undefined;
    message.maxBytesToTransfer =
      object.maxBytesToTransfer !== undefined &&
      object.maxBytesToTransfer !== null
        ? Number(object.maxBytesToTransfer)
        : undefined;
    message.transferOverflowMode =
      object.transferOverflowMode !== undefined &&
      object.transferOverflowMode !== null
        ? userSettings_OverflowModeFromJSON(object.transferOverflowMode)
        : 0;
    message.maxExecutionTime =
      object.maxExecutionTime !== undefined && object.maxExecutionTime !== null
        ? Number(object.maxExecutionTime)
        : undefined;
    message.timeoutOverflowMode =
      object.timeoutOverflowMode !== undefined &&
      object.timeoutOverflowMode !== null
        ? userSettings_OverflowModeFromJSON(object.timeoutOverflowMode)
        : 0;
    message.maxRowsInSet =
      object.maxRowsInSet !== undefined && object.maxRowsInSet !== null
        ? Number(object.maxRowsInSet)
        : undefined;
    message.maxBytesInSet =
      object.maxBytesInSet !== undefined && object.maxBytesInSet !== null
        ? Number(object.maxBytesInSet)
        : undefined;
    message.setOverflowMode =
      object.setOverflowMode !== undefined && object.setOverflowMode !== null
        ? userSettings_OverflowModeFromJSON(object.setOverflowMode)
        : 0;
    message.maxRowsInJoin =
      object.maxRowsInJoin !== undefined && object.maxRowsInJoin !== null
        ? Number(object.maxRowsInJoin)
        : undefined;
    message.maxBytesInJoin =
      object.maxBytesInJoin !== undefined && object.maxBytesInJoin !== null
        ? Number(object.maxBytesInJoin)
        : undefined;
    message.joinOverflowMode =
      object.joinOverflowMode !== undefined && object.joinOverflowMode !== null
        ? userSettings_OverflowModeFromJSON(object.joinOverflowMode)
        : 0;
    message.joinAlgorithm = (object.joinAlgorithm ?? []).map((e: any) =>
      userSettings_JoinAlgorithmFromJSON(e)
    );
    message.anyJoinDistinctRightTableKeys =
      object.anyJoinDistinctRightTableKeys !== undefined &&
      object.anyJoinDistinctRightTableKeys !== null
        ? Boolean(object.anyJoinDistinctRightTableKeys)
        : undefined;
    message.maxColumnsToRead =
      object.maxColumnsToRead !== undefined && object.maxColumnsToRead !== null
        ? Number(object.maxColumnsToRead)
        : undefined;
    message.maxTemporaryColumns =
      object.maxTemporaryColumns !== undefined &&
      object.maxTemporaryColumns !== null
        ? Number(object.maxTemporaryColumns)
        : undefined;
    message.maxTemporaryNonConstColumns =
      object.maxTemporaryNonConstColumns !== undefined &&
      object.maxTemporaryNonConstColumns !== null
        ? Number(object.maxTemporaryNonConstColumns)
        : undefined;
    message.maxQuerySize =
      object.maxQuerySize !== undefined && object.maxQuerySize !== null
        ? Number(object.maxQuerySize)
        : undefined;
    message.maxAstDepth =
      object.maxAstDepth !== undefined && object.maxAstDepth !== null
        ? Number(object.maxAstDepth)
        : undefined;
    message.maxAstElements =
      object.maxAstElements !== undefined && object.maxAstElements !== null
        ? Number(object.maxAstElements)
        : undefined;
    message.maxExpandedAstElements =
      object.maxExpandedAstElements !== undefined &&
      object.maxExpandedAstElements !== null
        ? Number(object.maxExpandedAstElements)
        : undefined;
    message.minExecutionSpeed =
      object.minExecutionSpeed !== undefined &&
      object.minExecutionSpeed !== null
        ? Number(object.minExecutionSpeed)
        : undefined;
    message.minExecutionSpeedBytes =
      object.minExecutionSpeedBytes !== undefined &&
      object.minExecutionSpeedBytes !== null
        ? Number(object.minExecutionSpeedBytes)
        : undefined;
    message.countDistinctImplementation =
      object.countDistinctImplementation !== undefined &&
      object.countDistinctImplementation !== null
        ? userSettings_CountDistinctImplementationFromJSON(
            object.countDistinctImplementation
          )
        : 0;
    message.inputFormatValuesInterpretExpressions =
      object.inputFormatValuesInterpretExpressions !== undefined &&
      object.inputFormatValuesInterpretExpressions !== null
        ? Boolean(object.inputFormatValuesInterpretExpressions)
        : undefined;
    message.inputFormatDefaultsForOmittedFields =
      object.inputFormatDefaultsForOmittedFields !== undefined &&
      object.inputFormatDefaultsForOmittedFields !== null
        ? Boolean(object.inputFormatDefaultsForOmittedFields)
        : undefined;
    message.inputFormatNullAsDefault =
      object.inputFormatNullAsDefault !== undefined &&
      object.inputFormatNullAsDefault !== null
        ? Boolean(object.inputFormatNullAsDefault)
        : undefined;
    message.dateTimeInputFormat =
      object.dateTimeInputFormat !== undefined &&
      object.dateTimeInputFormat !== null
        ? userSettings_DateTimeInputFormatFromJSON(object.dateTimeInputFormat)
        : 0;
    message.inputFormatWithNamesUseHeader =
      object.inputFormatWithNamesUseHeader !== undefined &&
      object.inputFormatWithNamesUseHeader !== null
        ? Boolean(object.inputFormatWithNamesUseHeader)
        : undefined;
    message.outputFormatJsonQuote64bitIntegers =
      object.outputFormatJsonQuote_64bitIntegers !== undefined &&
      object.outputFormatJsonQuote_64bitIntegers !== null
        ? Boolean(object.outputFormatJsonQuote_64bitIntegers)
        : undefined;
    message.outputFormatJsonQuoteDenormals =
      object.outputFormatJsonQuoteDenormals !== undefined &&
      object.outputFormatJsonQuoteDenormals !== null
        ? Boolean(object.outputFormatJsonQuoteDenormals)
        : undefined;
    message.dateTimeOutputFormat =
      object.dateTimeOutputFormat !== undefined &&
      object.dateTimeOutputFormat !== null
        ? userSettings_DateTimeOutputFormatFromJSON(object.dateTimeOutputFormat)
        : 0;
    message.lowCardinalityAllowInNativeFormat =
      object.lowCardinalityAllowInNativeFormat !== undefined &&
      object.lowCardinalityAllowInNativeFormat !== null
        ? Boolean(object.lowCardinalityAllowInNativeFormat)
        : undefined;
    message.allowSuspiciousLowCardinalityTypes =
      object.allowSuspiciousLowCardinalityTypes !== undefined &&
      object.allowSuspiciousLowCardinalityTypes !== null
        ? Boolean(object.allowSuspiciousLowCardinalityTypes)
        : undefined;
    message.emptyResultForAggregationByEmptySet =
      object.emptyResultForAggregationByEmptySet !== undefined &&
      object.emptyResultForAggregationByEmptySet !== null
        ? Boolean(object.emptyResultForAggregationByEmptySet)
        : undefined;
    message.httpConnectionTimeout =
      object.httpConnectionTimeout !== undefined &&
      object.httpConnectionTimeout !== null
        ? Number(object.httpConnectionTimeout)
        : undefined;
    message.httpReceiveTimeout =
      object.httpReceiveTimeout !== undefined &&
      object.httpReceiveTimeout !== null
        ? Number(object.httpReceiveTimeout)
        : undefined;
    message.httpSendTimeout =
      object.httpSendTimeout !== undefined && object.httpSendTimeout !== null
        ? Number(object.httpSendTimeout)
        : undefined;
    message.enableHttpCompression =
      object.enableHttpCompression !== undefined &&
      object.enableHttpCompression !== null
        ? Boolean(object.enableHttpCompression)
        : undefined;
    message.sendProgressInHttpHeaders =
      object.sendProgressInHttpHeaders !== undefined &&
      object.sendProgressInHttpHeaders !== null
        ? Boolean(object.sendProgressInHttpHeaders)
        : undefined;
    message.httpHeadersProgressInterval =
      object.httpHeadersProgressInterval !== undefined &&
      object.httpHeadersProgressInterval !== null
        ? Number(object.httpHeadersProgressInterval)
        : undefined;
    message.addHttpCorsHeader =
      object.addHttpCorsHeader !== undefined &&
      object.addHttpCorsHeader !== null
        ? Boolean(object.addHttpCorsHeader)
        : undefined;
    message.cancelHttpReadonlyQueriesOnClientClose =
      object.cancelHttpReadonlyQueriesOnClientClose !== undefined &&
      object.cancelHttpReadonlyQueriesOnClientClose !== null
        ? Boolean(object.cancelHttpReadonlyQueriesOnClientClose)
        : undefined;
    message.maxHttpGetRedirects =
      object.maxHttpGetRedirects !== undefined &&
      object.maxHttpGetRedirects !== null
        ? Number(object.maxHttpGetRedirects)
        : undefined;
    message.joinedSubqueryRequiresAlias =
      object.joinedSubqueryRequiresAlias !== undefined &&
      object.joinedSubqueryRequiresAlias !== null
        ? Boolean(object.joinedSubqueryRequiresAlias)
        : undefined;
    message.joinUseNulls =
      object.joinUseNulls !== undefined && object.joinUseNulls !== null
        ? Boolean(object.joinUseNulls)
        : undefined;
    message.transformNullIn =
      object.transformNullIn !== undefined && object.transformNullIn !== null
        ? Boolean(object.transformNullIn)
        : undefined;
    message.quotaMode =
      object.quotaMode !== undefined && object.quotaMode !== null
        ? userSettings_QuotaModeFromJSON(object.quotaMode)
        : 0;
    message.flattenNested =
      object.flattenNested !== undefined && object.flattenNested !== null
        ? Boolean(object.flattenNested)
        : undefined;
    message.formatRegexp =
      object.formatRegexp !== undefined && object.formatRegexp !== null
        ? String(object.formatRegexp)
        : "";
    message.formatRegexpEscapingRule =
      object.formatRegexpEscapingRule !== undefined &&
      object.formatRegexpEscapingRule !== null
        ? userSettings_FormatRegexpEscapingRuleFromJSON(
            object.formatRegexpEscapingRule
          )
        : 0;
    message.formatRegexpSkipUnmatched =
      object.formatRegexpSkipUnmatched !== undefined &&
      object.formatRegexpSkipUnmatched !== null
        ? Boolean(object.formatRegexpSkipUnmatched)
        : undefined;
    message.asyncInsert =
      object.asyncInsert !== undefined && object.asyncInsert !== null
        ? Boolean(object.asyncInsert)
        : undefined;
    message.asyncInsertThreads =
      object.asyncInsertThreads !== undefined &&
      object.asyncInsertThreads !== null
        ? Number(object.asyncInsertThreads)
        : undefined;
    message.waitForAsyncInsert =
      object.waitForAsyncInsert !== undefined &&
      object.waitForAsyncInsert !== null
        ? Boolean(object.waitForAsyncInsert)
        : undefined;
    message.waitForAsyncInsertTimeout =
      object.waitForAsyncInsertTimeout !== undefined &&
      object.waitForAsyncInsertTimeout !== null
        ? Number(object.waitForAsyncInsertTimeout)
        : undefined;
    message.asyncInsertMaxDataSize =
      object.asyncInsertMaxDataSize !== undefined &&
      object.asyncInsertMaxDataSize !== null
        ? Number(object.asyncInsertMaxDataSize)
        : undefined;
    message.asyncInsertBusyTimeout =
      object.asyncInsertBusyTimeout !== undefined &&
      object.asyncInsertBusyTimeout !== null
        ? Number(object.asyncInsertBusyTimeout)
        : undefined;
    message.asyncInsertStaleTimeout =
      object.asyncInsertStaleTimeout !== undefined &&
      object.asyncInsertStaleTimeout !== null
        ? Number(object.asyncInsertStaleTimeout)
        : undefined;
    message.memoryProfilerStep =
      object.memoryProfilerStep !== undefined &&
      object.memoryProfilerStep !== null
        ? Number(object.memoryProfilerStep)
        : undefined;
    message.memoryProfilerSampleProbability =
      object.memoryProfilerSampleProbability !== undefined &&
      object.memoryProfilerSampleProbability !== null
        ? Number(object.memoryProfilerSampleProbability)
        : undefined;
    message.maxFinalThreads =
      object.maxFinalThreads !== undefined && object.maxFinalThreads !== null
        ? Number(object.maxFinalThreads)
        : undefined;
    message.inputFormatParallelParsing =
      object.inputFormatParallelParsing !== undefined &&
      object.inputFormatParallelParsing !== null
        ? Boolean(object.inputFormatParallelParsing)
        : undefined;
    message.inputFormatImportNestedJson =
      object.inputFormatImportNestedJson !== undefined &&
      object.inputFormatImportNestedJson !== null
        ? Boolean(object.inputFormatImportNestedJson)
        : undefined;
    message.localFilesystemReadMethod =
      object.localFilesystemReadMethod !== undefined &&
      object.localFilesystemReadMethod !== null
        ? userSettings_LocalFilesystemReadMethodFromJSON(
            object.localFilesystemReadMethod
          )
        : 0;
    message.maxReadBufferSize =
      object.maxReadBufferSize !== undefined &&
      object.maxReadBufferSize !== null
        ? Number(object.maxReadBufferSize)
        : undefined;
    message.insertKeeperMaxRetries =
      object.insertKeeperMaxRetries !== undefined &&
      object.insertKeeperMaxRetries !== null
        ? Number(object.insertKeeperMaxRetries)
        : undefined;
    message.maxTemporaryDataOnDiskSizeForUser =
      object.maxTemporaryDataOnDiskSizeForUser !== undefined &&
      object.maxTemporaryDataOnDiskSizeForUser !== null
        ? Number(object.maxTemporaryDataOnDiskSizeForUser)
        : undefined;
    message.maxTemporaryDataOnDiskSizeForQuery =
      object.maxTemporaryDataOnDiskSizeForQuery !== undefined &&
      object.maxTemporaryDataOnDiskSizeForQuery !== null
        ? Number(object.maxTemporaryDataOnDiskSizeForQuery)
        : undefined;
    message.maxParserDepth =
      object.maxParserDepth !== undefined && object.maxParserDepth !== null
        ? Number(object.maxParserDepth)
        : undefined;
    message.remoteFilesystemReadMethod =
      object.remoteFilesystemReadMethod !== undefined &&
      object.remoteFilesystemReadMethod !== null
        ? userSettings_RemoteFilesystemReadMethodFromJSON(
            object.remoteFilesystemReadMethod
          )
        : 0;
    message.memoryOvercommitRatioDenominator =
      object.memoryOvercommitRatioDenominator !== undefined &&
      object.memoryOvercommitRatioDenominator !== null
        ? Number(object.memoryOvercommitRatioDenominator)
        : undefined;
    message.memoryOvercommitRatioDenominatorForUser =
      object.memoryOvercommitRatioDenominatorForUser !== undefined &&
      object.memoryOvercommitRatioDenominatorForUser !== null
        ? Number(object.memoryOvercommitRatioDenominatorForUser)
        : undefined;
    message.memoryUsageOvercommitMaxWaitMicroseconds =
      object.memoryUsageOvercommitMaxWaitMicroseconds !== undefined &&
      object.memoryUsageOvercommitMaxWaitMicroseconds !== null
        ? Number(object.memoryUsageOvercommitMaxWaitMicroseconds)
        : undefined;
    message.compile =
      object.compile !== undefined && object.compile !== null
        ? Boolean(object.compile)
        : undefined;
    message.minCountToCompile =
      object.minCountToCompile !== undefined &&
      object.minCountToCompile !== null
        ? Number(object.minCountToCompile)
        : undefined;
    return message;
  },

  toJSON(message: UserSettings): unknown {
    const obj: any = {};
    message.readonly !== undefined && (obj.readonly = message.readonly);
    message.allowDdl !== undefined && (obj.allowDdl = message.allowDdl);
    message.allowIntrospectionFunctions !== undefined &&
      (obj.allowIntrospectionFunctions = message.allowIntrospectionFunctions);
    message.connectTimeout !== undefined &&
      (obj.connectTimeout = message.connectTimeout);
    message.connectTimeoutWithFailover !== undefined &&
      (obj.connectTimeoutWithFailover = message.connectTimeoutWithFailover);
    message.receiveTimeout !== undefined &&
      (obj.receiveTimeout = message.receiveTimeout);
    message.sendTimeout !== undefined &&
      (obj.sendTimeout = message.sendTimeout);
    message.timeoutBeforeCheckingExecutionSpeed !== undefined &&
      (obj.timeoutBeforeCheckingExecutionSpeed =
        message.timeoutBeforeCheckingExecutionSpeed);
    message.insertQuorum !== undefined &&
      (obj.insertQuorum = message.insertQuorum);
    message.insertQuorumTimeout !== undefined &&
      (obj.insertQuorumTimeout = message.insertQuorumTimeout);
    message.insertQuorumParallel !== undefined &&
      (obj.insertQuorumParallel = message.insertQuorumParallel);
    message.insertNullAsDefault !== undefined &&
      (obj.insertNullAsDefault = message.insertNullAsDefault);
    message.selectSequentialConsistency !== undefined &&
      (obj.selectSequentialConsistency = message.selectSequentialConsistency);
    message.deduplicateBlocksInDependentMaterializedViews !== undefined &&
      (obj.deduplicateBlocksInDependentMaterializedViews =
        message.deduplicateBlocksInDependentMaterializedViews);
    message.replicationAlterPartitionsSync !== undefined &&
      (obj.replicationAlterPartitionsSync =
        message.replicationAlterPartitionsSync);
    message.maxReplicaDelayForDistributedQueries !== undefined &&
      (obj.maxReplicaDelayForDistributedQueries =
        message.maxReplicaDelayForDistributedQueries);
    message.fallbackToStaleReplicasForDistributedQueries !== undefined &&
      (obj.fallbackToStaleReplicasForDistributedQueries =
        message.fallbackToStaleReplicasForDistributedQueries);
    message.distributedProductMode !== undefined &&
      (obj.distributedProductMode = userSettings_DistributedProductModeToJSON(
        message.distributedProductMode
      ));
    message.distributedAggregationMemoryEfficient !== undefined &&
      (obj.distributedAggregationMemoryEfficient =
        message.distributedAggregationMemoryEfficient);
    message.distributedDdlTaskTimeout !== undefined &&
      (obj.distributedDdlTaskTimeout = message.distributedDdlTaskTimeout);
    message.skipUnavailableShards !== undefined &&
      (obj.skipUnavailableShards = message.skipUnavailableShards);
    message.compileExpressions !== undefined &&
      (obj.compileExpressions = message.compileExpressions);
    message.minCountToCompileExpression !== undefined &&
      (obj.minCountToCompileExpression = message.minCountToCompileExpression);
    message.maxBlockSize !== undefined &&
      (obj.maxBlockSize = message.maxBlockSize);
    message.minInsertBlockSizeRows !== undefined &&
      (obj.minInsertBlockSizeRows = message.minInsertBlockSizeRows);
    message.minInsertBlockSizeBytes !== undefined &&
      (obj.minInsertBlockSizeBytes = message.minInsertBlockSizeBytes);
    message.maxInsertBlockSize !== undefined &&
      (obj.maxInsertBlockSize = message.maxInsertBlockSize);
    message.minBytesToUseDirectIo !== undefined &&
      (obj.minBytesToUseDirectIo = message.minBytesToUseDirectIo);
    message.useUncompressedCache !== undefined &&
      (obj.useUncompressedCache = message.useUncompressedCache);
    message.mergeTreeMaxRowsToUseCache !== undefined &&
      (obj.mergeTreeMaxRowsToUseCache = message.mergeTreeMaxRowsToUseCache);
    message.mergeTreeMaxBytesToUseCache !== undefined &&
      (obj.mergeTreeMaxBytesToUseCache = message.mergeTreeMaxBytesToUseCache);
    message.mergeTreeMinRowsForConcurrentRead !== undefined &&
      (obj.mergeTreeMinRowsForConcurrentRead =
        message.mergeTreeMinRowsForConcurrentRead);
    message.mergeTreeMinBytesForConcurrentRead !== undefined &&
      (obj.mergeTreeMinBytesForConcurrentRead =
        message.mergeTreeMinBytesForConcurrentRead);
    message.maxBytesBeforeExternalGroupBy !== undefined &&
      (obj.maxBytesBeforeExternalGroupBy =
        message.maxBytesBeforeExternalGroupBy);
    message.maxBytesBeforeExternalSort !== undefined &&
      (obj.maxBytesBeforeExternalSort = message.maxBytesBeforeExternalSort);
    message.groupByTwoLevelThreshold !== undefined &&
      (obj.groupByTwoLevelThreshold = message.groupByTwoLevelThreshold);
    message.groupByTwoLevelThresholdBytes !== undefined &&
      (obj.groupByTwoLevelThresholdBytes =
        message.groupByTwoLevelThresholdBytes);
    message.priority !== undefined && (obj.priority = message.priority);
    message.maxThreads !== undefined && (obj.maxThreads = message.maxThreads);
    message.maxMemoryUsage !== undefined &&
      (obj.maxMemoryUsage = message.maxMemoryUsage);
    message.maxMemoryUsageForUser !== undefined &&
      (obj.maxMemoryUsageForUser = message.maxMemoryUsageForUser);
    message.maxNetworkBandwidth !== undefined &&
      (obj.maxNetworkBandwidth = message.maxNetworkBandwidth);
    message.maxNetworkBandwidthForUser !== undefined &&
      (obj.maxNetworkBandwidthForUser = message.maxNetworkBandwidthForUser);
    message.maxPartitionsPerInsertBlock !== undefined &&
      (obj.maxPartitionsPerInsertBlock = message.maxPartitionsPerInsertBlock);
    message.maxConcurrentQueriesForUser !== undefined &&
      (obj.maxConcurrentQueriesForUser = message.maxConcurrentQueriesForUser);
    message.forceIndexByDate !== undefined &&
      (obj.forceIndexByDate = message.forceIndexByDate);
    message.forcePrimaryKey !== undefined &&
      (obj.forcePrimaryKey = message.forcePrimaryKey);
    message.maxRowsToRead !== undefined &&
      (obj.maxRowsToRead = message.maxRowsToRead);
    message.maxBytesToRead !== undefined &&
      (obj.maxBytesToRead = message.maxBytesToRead);
    message.readOverflowMode !== undefined &&
      (obj.readOverflowMode = userSettings_OverflowModeToJSON(
        message.readOverflowMode
      ));
    message.maxRowsToGroupBy !== undefined &&
      (obj.maxRowsToGroupBy = message.maxRowsToGroupBy);
    message.groupByOverflowMode !== undefined &&
      (obj.groupByOverflowMode = userSettings_GroupByOverflowModeToJSON(
        message.groupByOverflowMode
      ));
    message.maxRowsToSort !== undefined &&
      (obj.maxRowsToSort = message.maxRowsToSort);
    message.maxBytesToSort !== undefined &&
      (obj.maxBytesToSort = message.maxBytesToSort);
    message.sortOverflowMode !== undefined &&
      (obj.sortOverflowMode = userSettings_OverflowModeToJSON(
        message.sortOverflowMode
      ));
    message.maxResultRows !== undefined &&
      (obj.maxResultRows = message.maxResultRows);
    message.maxResultBytes !== undefined &&
      (obj.maxResultBytes = message.maxResultBytes);
    message.resultOverflowMode !== undefined &&
      (obj.resultOverflowMode = userSettings_OverflowModeToJSON(
        message.resultOverflowMode
      ));
    message.maxRowsInDistinct !== undefined &&
      (obj.maxRowsInDistinct = message.maxRowsInDistinct);
    message.maxBytesInDistinct !== undefined &&
      (obj.maxBytesInDistinct = message.maxBytesInDistinct);
    message.distinctOverflowMode !== undefined &&
      (obj.distinctOverflowMode = userSettings_OverflowModeToJSON(
        message.distinctOverflowMode
      ));
    message.maxRowsToTransfer !== undefined &&
      (obj.maxRowsToTransfer = message.maxRowsToTransfer);
    message.maxBytesToTransfer !== undefined &&
      (obj.maxBytesToTransfer = message.maxBytesToTransfer);
    message.transferOverflowMode !== undefined &&
      (obj.transferOverflowMode = userSettings_OverflowModeToJSON(
        message.transferOverflowMode
      ));
    message.maxExecutionTime !== undefined &&
      (obj.maxExecutionTime = message.maxExecutionTime);
    message.timeoutOverflowMode !== undefined &&
      (obj.timeoutOverflowMode = userSettings_OverflowModeToJSON(
        message.timeoutOverflowMode
      ));
    message.maxRowsInSet !== undefined &&
      (obj.maxRowsInSet = message.maxRowsInSet);
    message.maxBytesInSet !== undefined &&
      (obj.maxBytesInSet = message.maxBytesInSet);
    message.setOverflowMode !== undefined &&
      (obj.setOverflowMode = userSettings_OverflowModeToJSON(
        message.setOverflowMode
      ));
    message.maxRowsInJoin !== undefined &&
      (obj.maxRowsInJoin = message.maxRowsInJoin);
    message.maxBytesInJoin !== undefined &&
      (obj.maxBytesInJoin = message.maxBytesInJoin);
    message.joinOverflowMode !== undefined &&
      (obj.joinOverflowMode = userSettings_OverflowModeToJSON(
        message.joinOverflowMode
      ));
    if (message.joinAlgorithm) {
      obj.joinAlgorithm = message.joinAlgorithm.map((e) =>
        userSettings_JoinAlgorithmToJSON(e)
      );
    } else {
      obj.joinAlgorithm = [];
    }
    message.anyJoinDistinctRightTableKeys !== undefined &&
      (obj.anyJoinDistinctRightTableKeys =
        message.anyJoinDistinctRightTableKeys);
    message.maxColumnsToRead !== undefined &&
      (obj.maxColumnsToRead = message.maxColumnsToRead);
    message.maxTemporaryColumns !== undefined &&
      (obj.maxTemporaryColumns = message.maxTemporaryColumns);
    message.maxTemporaryNonConstColumns !== undefined &&
      (obj.maxTemporaryNonConstColumns = message.maxTemporaryNonConstColumns);
    message.maxQuerySize !== undefined &&
      (obj.maxQuerySize = message.maxQuerySize);
    message.maxAstDepth !== undefined &&
      (obj.maxAstDepth = message.maxAstDepth);
    message.maxAstElements !== undefined &&
      (obj.maxAstElements = message.maxAstElements);
    message.maxExpandedAstElements !== undefined &&
      (obj.maxExpandedAstElements = message.maxExpandedAstElements);
    message.minExecutionSpeed !== undefined &&
      (obj.minExecutionSpeed = message.minExecutionSpeed);
    message.minExecutionSpeedBytes !== undefined &&
      (obj.minExecutionSpeedBytes = message.minExecutionSpeedBytes);
    message.countDistinctImplementation !== undefined &&
      (obj.countDistinctImplementation =
        userSettings_CountDistinctImplementationToJSON(
          message.countDistinctImplementation
        ));
    message.inputFormatValuesInterpretExpressions !== undefined &&
      (obj.inputFormatValuesInterpretExpressions =
        message.inputFormatValuesInterpretExpressions);
    message.inputFormatDefaultsForOmittedFields !== undefined &&
      (obj.inputFormatDefaultsForOmittedFields =
        message.inputFormatDefaultsForOmittedFields);
    message.inputFormatNullAsDefault !== undefined &&
      (obj.inputFormatNullAsDefault = message.inputFormatNullAsDefault);
    message.dateTimeInputFormat !== undefined &&
      (obj.dateTimeInputFormat = userSettings_DateTimeInputFormatToJSON(
        message.dateTimeInputFormat
      ));
    message.inputFormatWithNamesUseHeader !== undefined &&
      (obj.inputFormatWithNamesUseHeader =
        message.inputFormatWithNamesUseHeader);
    message.outputFormatJsonQuote64bitIntegers !== undefined &&
      (obj.outputFormatJsonQuote_64bitIntegers =
        message.outputFormatJsonQuote64bitIntegers);
    message.outputFormatJsonQuoteDenormals !== undefined &&
      (obj.outputFormatJsonQuoteDenormals =
        message.outputFormatJsonQuoteDenormals);
    message.dateTimeOutputFormat !== undefined &&
      (obj.dateTimeOutputFormat = userSettings_DateTimeOutputFormatToJSON(
        message.dateTimeOutputFormat
      ));
    message.lowCardinalityAllowInNativeFormat !== undefined &&
      (obj.lowCardinalityAllowInNativeFormat =
        message.lowCardinalityAllowInNativeFormat);
    message.allowSuspiciousLowCardinalityTypes !== undefined &&
      (obj.allowSuspiciousLowCardinalityTypes =
        message.allowSuspiciousLowCardinalityTypes);
    message.emptyResultForAggregationByEmptySet !== undefined &&
      (obj.emptyResultForAggregationByEmptySet =
        message.emptyResultForAggregationByEmptySet);
    message.httpConnectionTimeout !== undefined &&
      (obj.httpConnectionTimeout = message.httpConnectionTimeout);
    message.httpReceiveTimeout !== undefined &&
      (obj.httpReceiveTimeout = message.httpReceiveTimeout);
    message.httpSendTimeout !== undefined &&
      (obj.httpSendTimeout = message.httpSendTimeout);
    message.enableHttpCompression !== undefined &&
      (obj.enableHttpCompression = message.enableHttpCompression);
    message.sendProgressInHttpHeaders !== undefined &&
      (obj.sendProgressInHttpHeaders = message.sendProgressInHttpHeaders);
    message.httpHeadersProgressInterval !== undefined &&
      (obj.httpHeadersProgressInterval = message.httpHeadersProgressInterval);
    message.addHttpCorsHeader !== undefined &&
      (obj.addHttpCorsHeader = message.addHttpCorsHeader);
    message.cancelHttpReadonlyQueriesOnClientClose !== undefined &&
      (obj.cancelHttpReadonlyQueriesOnClientClose =
        message.cancelHttpReadonlyQueriesOnClientClose);
    message.maxHttpGetRedirects !== undefined &&
      (obj.maxHttpGetRedirects = message.maxHttpGetRedirects);
    message.joinedSubqueryRequiresAlias !== undefined &&
      (obj.joinedSubqueryRequiresAlias = message.joinedSubqueryRequiresAlias);
    message.joinUseNulls !== undefined &&
      (obj.joinUseNulls = message.joinUseNulls);
    message.transformNullIn !== undefined &&
      (obj.transformNullIn = message.transformNullIn);
    message.quotaMode !== undefined &&
      (obj.quotaMode = userSettings_QuotaModeToJSON(message.quotaMode));
    message.flattenNested !== undefined &&
      (obj.flattenNested = message.flattenNested);
    message.formatRegexp !== undefined &&
      (obj.formatRegexp = message.formatRegexp);
    message.formatRegexpEscapingRule !== undefined &&
      (obj.formatRegexpEscapingRule =
        userSettings_FormatRegexpEscapingRuleToJSON(
          message.formatRegexpEscapingRule
        ));
    message.formatRegexpSkipUnmatched !== undefined &&
      (obj.formatRegexpSkipUnmatched = message.formatRegexpSkipUnmatched);
    message.asyncInsert !== undefined &&
      (obj.asyncInsert = message.asyncInsert);
    message.asyncInsertThreads !== undefined &&
      (obj.asyncInsertThreads = message.asyncInsertThreads);
    message.waitForAsyncInsert !== undefined &&
      (obj.waitForAsyncInsert = message.waitForAsyncInsert);
    message.waitForAsyncInsertTimeout !== undefined &&
      (obj.waitForAsyncInsertTimeout = message.waitForAsyncInsertTimeout);
    message.asyncInsertMaxDataSize !== undefined &&
      (obj.asyncInsertMaxDataSize = message.asyncInsertMaxDataSize);
    message.asyncInsertBusyTimeout !== undefined &&
      (obj.asyncInsertBusyTimeout = message.asyncInsertBusyTimeout);
    message.asyncInsertStaleTimeout !== undefined &&
      (obj.asyncInsertStaleTimeout = message.asyncInsertStaleTimeout);
    message.memoryProfilerStep !== undefined &&
      (obj.memoryProfilerStep = message.memoryProfilerStep);
    message.memoryProfilerSampleProbability !== undefined &&
      (obj.memoryProfilerSampleProbability =
        message.memoryProfilerSampleProbability);
    message.maxFinalThreads !== undefined &&
      (obj.maxFinalThreads = message.maxFinalThreads);
    message.inputFormatParallelParsing !== undefined &&
      (obj.inputFormatParallelParsing = message.inputFormatParallelParsing);
    message.inputFormatImportNestedJson !== undefined &&
      (obj.inputFormatImportNestedJson = message.inputFormatImportNestedJson);
    message.localFilesystemReadMethod !== undefined &&
      (obj.localFilesystemReadMethod =
        userSettings_LocalFilesystemReadMethodToJSON(
          message.localFilesystemReadMethod
        ));
    message.maxReadBufferSize !== undefined &&
      (obj.maxReadBufferSize = message.maxReadBufferSize);
    message.insertKeeperMaxRetries !== undefined &&
      (obj.insertKeeperMaxRetries = message.insertKeeperMaxRetries);
    message.maxTemporaryDataOnDiskSizeForUser !== undefined &&
      (obj.maxTemporaryDataOnDiskSizeForUser =
        message.maxTemporaryDataOnDiskSizeForUser);
    message.maxTemporaryDataOnDiskSizeForQuery !== undefined &&
      (obj.maxTemporaryDataOnDiskSizeForQuery =
        message.maxTemporaryDataOnDiskSizeForQuery);
    message.maxParserDepth !== undefined &&
      (obj.maxParserDepth = message.maxParserDepth);
    message.remoteFilesystemReadMethod !== undefined &&
      (obj.remoteFilesystemReadMethod =
        userSettings_RemoteFilesystemReadMethodToJSON(
          message.remoteFilesystemReadMethod
        ));
    message.memoryOvercommitRatioDenominator !== undefined &&
      (obj.memoryOvercommitRatioDenominator =
        message.memoryOvercommitRatioDenominator);
    message.memoryOvercommitRatioDenominatorForUser !== undefined &&
      (obj.memoryOvercommitRatioDenominatorForUser =
        message.memoryOvercommitRatioDenominatorForUser);
    message.memoryUsageOvercommitMaxWaitMicroseconds !== undefined &&
      (obj.memoryUsageOvercommitMaxWaitMicroseconds =
        message.memoryUsageOvercommitMaxWaitMicroseconds);
    message.compile !== undefined && (obj.compile = message.compile);
    message.minCountToCompile !== undefined &&
      (obj.minCountToCompile = message.minCountToCompile);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserSettings>, I>>(
    object: I
  ): UserSettings {
    const message = { ...baseUserSettings } as UserSettings;
    message.readonly = object.readonly ?? undefined;
    message.allowDdl = object.allowDdl ?? undefined;
    message.allowIntrospectionFunctions =
      object.allowIntrospectionFunctions ?? undefined;
    message.connectTimeout = object.connectTimeout ?? undefined;
    message.connectTimeoutWithFailover =
      object.connectTimeoutWithFailover ?? undefined;
    message.receiveTimeout = object.receiveTimeout ?? undefined;
    message.sendTimeout = object.sendTimeout ?? undefined;
    message.timeoutBeforeCheckingExecutionSpeed =
      object.timeoutBeforeCheckingExecutionSpeed ?? undefined;
    message.insertQuorum = object.insertQuorum ?? undefined;
    message.insertQuorumTimeout = object.insertQuorumTimeout ?? undefined;
    message.insertQuorumParallel = object.insertQuorumParallel ?? undefined;
    message.insertNullAsDefault = object.insertNullAsDefault ?? undefined;
    message.selectSequentialConsistency =
      object.selectSequentialConsistency ?? undefined;
    message.deduplicateBlocksInDependentMaterializedViews =
      object.deduplicateBlocksInDependentMaterializedViews ?? undefined;
    message.replicationAlterPartitionsSync =
      object.replicationAlterPartitionsSync ?? undefined;
    message.maxReplicaDelayForDistributedQueries =
      object.maxReplicaDelayForDistributedQueries ?? undefined;
    message.fallbackToStaleReplicasForDistributedQueries =
      object.fallbackToStaleReplicasForDistributedQueries ?? undefined;
    message.distributedProductMode = object.distributedProductMode ?? 0;
    message.distributedAggregationMemoryEfficient =
      object.distributedAggregationMemoryEfficient ?? undefined;
    message.distributedDdlTaskTimeout =
      object.distributedDdlTaskTimeout ?? undefined;
    message.skipUnavailableShards = object.skipUnavailableShards ?? undefined;
    message.compileExpressions = object.compileExpressions ?? undefined;
    message.minCountToCompileExpression =
      object.minCountToCompileExpression ?? undefined;
    message.maxBlockSize = object.maxBlockSize ?? undefined;
    message.minInsertBlockSizeRows = object.minInsertBlockSizeRows ?? undefined;
    message.minInsertBlockSizeBytes =
      object.minInsertBlockSizeBytes ?? undefined;
    message.maxInsertBlockSize = object.maxInsertBlockSize ?? undefined;
    message.minBytesToUseDirectIo = object.minBytesToUseDirectIo ?? undefined;
    message.useUncompressedCache = object.useUncompressedCache ?? undefined;
    message.mergeTreeMaxRowsToUseCache =
      object.mergeTreeMaxRowsToUseCache ?? undefined;
    message.mergeTreeMaxBytesToUseCache =
      object.mergeTreeMaxBytesToUseCache ?? undefined;
    message.mergeTreeMinRowsForConcurrentRead =
      object.mergeTreeMinRowsForConcurrentRead ?? undefined;
    message.mergeTreeMinBytesForConcurrentRead =
      object.mergeTreeMinBytesForConcurrentRead ?? undefined;
    message.maxBytesBeforeExternalGroupBy =
      object.maxBytesBeforeExternalGroupBy ?? undefined;
    message.maxBytesBeforeExternalSort =
      object.maxBytesBeforeExternalSort ?? undefined;
    message.groupByTwoLevelThreshold =
      object.groupByTwoLevelThreshold ?? undefined;
    message.groupByTwoLevelThresholdBytes =
      object.groupByTwoLevelThresholdBytes ?? undefined;
    message.priority = object.priority ?? undefined;
    message.maxThreads = object.maxThreads ?? undefined;
    message.maxMemoryUsage = object.maxMemoryUsage ?? undefined;
    message.maxMemoryUsageForUser = object.maxMemoryUsageForUser ?? undefined;
    message.maxNetworkBandwidth = object.maxNetworkBandwidth ?? undefined;
    message.maxNetworkBandwidthForUser =
      object.maxNetworkBandwidthForUser ?? undefined;
    message.maxPartitionsPerInsertBlock =
      object.maxPartitionsPerInsertBlock ?? undefined;
    message.maxConcurrentQueriesForUser =
      object.maxConcurrentQueriesForUser ?? undefined;
    message.forceIndexByDate = object.forceIndexByDate ?? undefined;
    message.forcePrimaryKey = object.forcePrimaryKey ?? undefined;
    message.maxRowsToRead = object.maxRowsToRead ?? undefined;
    message.maxBytesToRead = object.maxBytesToRead ?? undefined;
    message.readOverflowMode = object.readOverflowMode ?? 0;
    message.maxRowsToGroupBy = object.maxRowsToGroupBy ?? undefined;
    message.groupByOverflowMode = object.groupByOverflowMode ?? 0;
    message.maxRowsToSort = object.maxRowsToSort ?? undefined;
    message.maxBytesToSort = object.maxBytesToSort ?? undefined;
    message.sortOverflowMode = object.sortOverflowMode ?? 0;
    message.maxResultRows = object.maxResultRows ?? undefined;
    message.maxResultBytes = object.maxResultBytes ?? undefined;
    message.resultOverflowMode = object.resultOverflowMode ?? 0;
    message.maxRowsInDistinct = object.maxRowsInDistinct ?? undefined;
    message.maxBytesInDistinct = object.maxBytesInDistinct ?? undefined;
    message.distinctOverflowMode = object.distinctOverflowMode ?? 0;
    message.maxRowsToTransfer = object.maxRowsToTransfer ?? undefined;
    message.maxBytesToTransfer = object.maxBytesToTransfer ?? undefined;
    message.transferOverflowMode = object.transferOverflowMode ?? 0;
    message.maxExecutionTime = object.maxExecutionTime ?? undefined;
    message.timeoutOverflowMode = object.timeoutOverflowMode ?? 0;
    message.maxRowsInSet = object.maxRowsInSet ?? undefined;
    message.maxBytesInSet = object.maxBytesInSet ?? undefined;
    message.setOverflowMode = object.setOverflowMode ?? 0;
    message.maxRowsInJoin = object.maxRowsInJoin ?? undefined;
    message.maxBytesInJoin = object.maxBytesInJoin ?? undefined;
    message.joinOverflowMode = object.joinOverflowMode ?? 0;
    message.joinAlgorithm = object.joinAlgorithm?.map((e) => e) || [];
    message.anyJoinDistinctRightTableKeys =
      object.anyJoinDistinctRightTableKeys ?? undefined;
    message.maxColumnsToRead = object.maxColumnsToRead ?? undefined;
    message.maxTemporaryColumns = object.maxTemporaryColumns ?? undefined;
    message.maxTemporaryNonConstColumns =
      object.maxTemporaryNonConstColumns ?? undefined;
    message.maxQuerySize = object.maxQuerySize ?? undefined;
    message.maxAstDepth = object.maxAstDepth ?? undefined;
    message.maxAstElements = object.maxAstElements ?? undefined;
    message.maxExpandedAstElements = object.maxExpandedAstElements ?? undefined;
    message.minExecutionSpeed = object.minExecutionSpeed ?? undefined;
    message.minExecutionSpeedBytes = object.minExecutionSpeedBytes ?? undefined;
    message.countDistinctImplementation =
      object.countDistinctImplementation ?? 0;
    message.inputFormatValuesInterpretExpressions =
      object.inputFormatValuesInterpretExpressions ?? undefined;
    message.inputFormatDefaultsForOmittedFields =
      object.inputFormatDefaultsForOmittedFields ?? undefined;
    message.inputFormatNullAsDefault =
      object.inputFormatNullAsDefault ?? undefined;
    message.dateTimeInputFormat = object.dateTimeInputFormat ?? 0;
    message.inputFormatWithNamesUseHeader =
      object.inputFormatWithNamesUseHeader ?? undefined;
    message.outputFormatJsonQuote64bitIntegers =
      object.outputFormatJsonQuote64bitIntegers ?? undefined;
    message.outputFormatJsonQuoteDenormals =
      object.outputFormatJsonQuoteDenormals ?? undefined;
    message.dateTimeOutputFormat = object.dateTimeOutputFormat ?? 0;
    message.lowCardinalityAllowInNativeFormat =
      object.lowCardinalityAllowInNativeFormat ?? undefined;
    message.allowSuspiciousLowCardinalityTypes =
      object.allowSuspiciousLowCardinalityTypes ?? undefined;
    message.emptyResultForAggregationByEmptySet =
      object.emptyResultForAggregationByEmptySet ?? undefined;
    message.httpConnectionTimeout = object.httpConnectionTimeout ?? undefined;
    message.httpReceiveTimeout = object.httpReceiveTimeout ?? undefined;
    message.httpSendTimeout = object.httpSendTimeout ?? undefined;
    message.enableHttpCompression = object.enableHttpCompression ?? undefined;
    message.sendProgressInHttpHeaders =
      object.sendProgressInHttpHeaders ?? undefined;
    message.httpHeadersProgressInterval =
      object.httpHeadersProgressInterval ?? undefined;
    message.addHttpCorsHeader = object.addHttpCorsHeader ?? undefined;
    message.cancelHttpReadonlyQueriesOnClientClose =
      object.cancelHttpReadonlyQueriesOnClientClose ?? undefined;
    message.maxHttpGetRedirects = object.maxHttpGetRedirects ?? undefined;
    message.joinedSubqueryRequiresAlias =
      object.joinedSubqueryRequiresAlias ?? undefined;
    message.joinUseNulls = object.joinUseNulls ?? undefined;
    message.transformNullIn = object.transformNullIn ?? undefined;
    message.quotaMode = object.quotaMode ?? 0;
    message.flattenNested = object.flattenNested ?? undefined;
    message.formatRegexp = object.formatRegexp ?? "";
    message.formatRegexpEscapingRule = object.formatRegexpEscapingRule ?? 0;
    message.formatRegexpSkipUnmatched =
      object.formatRegexpSkipUnmatched ?? undefined;
    message.asyncInsert = object.asyncInsert ?? undefined;
    message.asyncInsertThreads = object.asyncInsertThreads ?? undefined;
    message.waitForAsyncInsert = object.waitForAsyncInsert ?? undefined;
    message.waitForAsyncInsertTimeout =
      object.waitForAsyncInsertTimeout ?? undefined;
    message.asyncInsertMaxDataSize = object.asyncInsertMaxDataSize ?? undefined;
    message.asyncInsertBusyTimeout = object.asyncInsertBusyTimeout ?? undefined;
    message.asyncInsertStaleTimeout =
      object.asyncInsertStaleTimeout ?? undefined;
    message.memoryProfilerStep = object.memoryProfilerStep ?? undefined;
    message.memoryProfilerSampleProbability =
      object.memoryProfilerSampleProbability ?? undefined;
    message.maxFinalThreads = object.maxFinalThreads ?? undefined;
    message.inputFormatParallelParsing =
      object.inputFormatParallelParsing ?? undefined;
    message.inputFormatImportNestedJson =
      object.inputFormatImportNestedJson ?? undefined;
    message.localFilesystemReadMethod = object.localFilesystemReadMethod ?? 0;
    message.maxReadBufferSize = object.maxReadBufferSize ?? undefined;
    message.insertKeeperMaxRetries = object.insertKeeperMaxRetries ?? undefined;
    message.maxTemporaryDataOnDiskSizeForUser =
      object.maxTemporaryDataOnDiskSizeForUser ?? undefined;
    message.maxTemporaryDataOnDiskSizeForQuery =
      object.maxTemporaryDataOnDiskSizeForQuery ?? undefined;
    message.maxParserDepth = object.maxParserDepth ?? undefined;
    message.remoteFilesystemReadMethod = object.remoteFilesystemReadMethod ?? 0;
    message.memoryOvercommitRatioDenominator =
      object.memoryOvercommitRatioDenominator ?? undefined;
    message.memoryOvercommitRatioDenominatorForUser =
      object.memoryOvercommitRatioDenominatorForUser ?? undefined;
    message.memoryUsageOvercommitMaxWaitMicroseconds =
      object.memoryUsageOvercommitMaxWaitMicroseconds ?? undefined;
    message.compile = object.compile ?? undefined;
    message.minCountToCompile = object.minCountToCompile ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(UserSettings.$type, UserSettings);

const baseUserQuota: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UserQuota",
};

export const UserQuota = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UserQuota" as const,

  encode(
    message: UserQuota,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.intervalDuration !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.intervalDuration!,
        },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.queries !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.queries! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.errors !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.errors! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.resultRows !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.resultRows! },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.readRows !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.readRows! },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.executionTime !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.executionTime! },
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserQuota {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserQuota } as UserQuota;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.intervalDuration = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 2:
          message.queries = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 3:
          message.errors = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 4:
          message.resultRows = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 5:
          message.readRows = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 6:
          message.executionTime = Int64Value.decode(
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

  fromJSON(object: any): UserQuota {
    const message = { ...baseUserQuota } as UserQuota;
    message.intervalDuration =
      object.intervalDuration !== undefined && object.intervalDuration !== null
        ? Number(object.intervalDuration)
        : undefined;
    message.queries =
      object.queries !== undefined && object.queries !== null
        ? Number(object.queries)
        : undefined;
    message.errors =
      object.errors !== undefined && object.errors !== null
        ? Number(object.errors)
        : undefined;
    message.resultRows =
      object.resultRows !== undefined && object.resultRows !== null
        ? Number(object.resultRows)
        : undefined;
    message.readRows =
      object.readRows !== undefined && object.readRows !== null
        ? Number(object.readRows)
        : undefined;
    message.executionTime =
      object.executionTime !== undefined && object.executionTime !== null
        ? Number(object.executionTime)
        : undefined;
    return message;
  },

  toJSON(message: UserQuota): unknown {
    const obj: any = {};
    message.intervalDuration !== undefined &&
      (obj.intervalDuration = message.intervalDuration);
    message.queries !== undefined && (obj.queries = message.queries);
    message.errors !== undefined && (obj.errors = message.errors);
    message.resultRows !== undefined && (obj.resultRows = message.resultRows);
    message.readRows !== undefined && (obj.readRows = message.readRows);
    message.executionTime !== undefined &&
      (obj.executionTime = message.executionTime);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserQuota>, I>>(
    object: I
  ): UserQuota {
    const message = { ...baseUserQuota } as UserQuota;
    message.intervalDuration = object.intervalDuration ?? undefined;
    message.queries = object.queries ?? undefined;
    message.errors = object.errors ?? undefined;
    message.resultRows = object.resultRows ?? undefined;
    message.readRows = object.readRows ?? undefined;
    message.executionTime = object.executionTime ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(UserQuota.$type, UserQuota);

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
