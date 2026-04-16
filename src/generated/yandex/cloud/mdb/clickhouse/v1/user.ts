/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Int64Value, BoolValue, DoubleValue } from '../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.mdb.clickhouse.v1';

/** A ClickHouse User resource. For more information, see the [Developer's guide](/docs/managed-clickhouse/concepts). */
export interface User {
    /** User name. */
    name: string;
    /** Cluster ID. */
    clusterId: string;
    /** User permissions. */
    permissions: Permission[];
    /** User settings. */
    settings?: UserSettings;
    /** Quotas assigned to the user. */
    quotas: UserQuota[];
    /** Connection Manager connection configuration. */
    connectionManager?: ConnectionManager;
}

export interface Permission {
    /** Name of the database that the permission grants access to. */
    databaseName: string;
}

/**
 * ClickHouse user settings. Supported settings are a subset of settings described
 * in [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/).
 */
export interface UserSettings {
    /**
     * Restricts permissions for non-DDL queries. To restrict permissions for DDL queries, use **allow_ddl** instead.
     * * **0** - no restrictions.
     * * **1** - only read data queries are allowed.
     * * **2** - read data and change settings queries are allowed.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/permissions-for-queries#readonly).
     */
    readonly?: number;
    /**
     * Allows or denies DDL queries (e.g., **CREATE**, **ALTER**, **RENAME**, etc).
     *
     * Default value: **true**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/permissions-for-queries#allow_ddl).
     */
    allowDdl?: boolean;
    /**
     * Enables or disables introspection functions for query profiling.
     *
     * Default value: **false**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#allow_introspection_functions).
     */
    allowIntrospectionFunctions?: boolean;
    /**
     * Connection timeout in milliseconds.
     *
     * Default value: **10000** (10 seconds).
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#connect_timeout).
     */
    connectTimeout?: number;
    /**
     * The timeout in milliseconds for connecting to a remote server for a Distributed table engine.
     *
     * Applies only if the cluster uses sharding and replication. If unsuccessful, several attempts are made to connect to various replicas.
     *
     * Default value: **1000** (1 second).
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#connect_timeout_with_failover_ms).
     */
    connectTimeoutWithFailover?: number;
    /**
     * Receive timeout in milliseconds.
     *
     * Default value: **300000** (5 minutes).
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#receive_timeout).
     */
    receiveTimeout?: number;
    /**
     * Send timeout in milliseconds.
     *
     * Default value: **300000** (5 minutes).
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#send_timeout).
     */
    sendTimeout?: number;
    /**
     * Timeout to close idle TCP connections after specified time has elapsed, in milliseconds.
     *
     * Default value: **3600000** (1 hour).
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#idle_connection_timeout).
     */
    idleConnectionTimeout?: number;
    /**
     * Checks that the speed is not too low after the specified time has elapsed, in milliseconds. It is checked that execution speed
     * is not less that specified in **min_execution_speed** parameter.
     *
     * Default value: **60000** (1 minute).
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#timeout_before_checking_execution_speed).
     */
    timeoutBeforeCheckingExecutionSpeed?: number;
    /**
     * Enables or disables the quorum writes. If the value is less than **2**, then the quorum writes is disabled, otherwise it is enabled.
     *
     * When used, write quorum guarantees that ClickHouse has written data to the quorum of **insert_quorum** replicas with no errors
     * until the **insert_quorum_timeout** expires. All replicas in the quorum are in the consistent state, meaning that they contain
     * linearized data from the previous **INSERT** queries. Employ write quorum, if you need the guarantees that the written data
     * would not be lost in case of one or more replicas failure.
     *
     * You can use **select_sequential_consistency** setting to read the data written with write quorum.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#insert_quorum).
     */
    insertQuorum?: number;
    /**
     * Quorum write timeout in milliseconds.
     *
     * If the write quorum is enabled in the cluster, this timeout expires and some data is not written to the **insert_quorum** replicas,
     * then ClickHouse will abort the execution of **INSERT** query and return an error. In this case, the client must send the query again
     * to write the data block into the same or another replica.
     *
     * Default value: **600000** (10 minutes).
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#insert_quorum_timeout).
     */
    insertQuorumTimeout?: number;
    /**
     * Enables or disables parallelism for quorum **INSERT** queries.
     *
     * Default value: **true**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#insert_quorum_parallel).
     */
    insertQuorumParallel?: boolean;
    /**
     * Determines the behavior of **SELECT** queries from replicated tables. If enabled, ClickHouse will terminate a query with error message in case
     * the replica does not have a chunk written with the quorum and will not read the parts that have not yet been written with the quorum.
     *
     * Default value: **true**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#select_sequential_consistency).
     */
    selectSequentialConsistency?: boolean;
    /**
     * Wait mode for asynchronous actions in **ALTER** queries on replicated tables.
     * * **0** - do not wait for replicas.
     * * **1** - only wait for own execution.
     * * **2** - wait for all replicas.
     *
     * Default value: **1**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#alter_sync).
     */
    replicationAlterPartitionsSync?: number;
    /**
     * Max replica delay in milliseconds. If a replica lags more than the set value, this replica is not used and becomes a stale one.
     *
     * Default value: **300000** (5 minutes).
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_replica_delay_for_distributed_queries).
     */
    maxReplicaDelayForDistributedQueries?: number;
    /**
     * Enables or disables query forcing to a stale replica in case the actual data is unavailable.
     * If enabled, ClickHouse will choose the most up-to-date replica and force the query to use the data in this replica.
     * This setting can be used when doing **SELECT** query from a distributed table that points to replicated tables.
     *
     * Default value: **true**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#fallback_to_stale_replicas_for_distributed_queries).
     */
    fallbackToStaleReplicasForDistributedQueries?: boolean;
    /**
     * Determines the behavior of distributed subqueries.
     *
     * Default value: **DISTRIBUTED_PRODUCT_MODE_DENY**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#distributed_product_mode).
     */
    distributedProductMode: UserSettings_DistributedProductMode;
    /**
     * Enables of disables memory saving mode when doing distributed aggregation.
     *
     * When ClickHouse works with a distributed query, external aggregation is done on remote servers.
     * Enable this setting to achieve a smaller memory footprint on the server that sourced such a distributed query.
     *
     * Default value: **true**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#distributed_aggregation_memory_efficient).
     */
    distributedAggregationMemoryEfficient?: boolean;
    /**
     * Timeout for DDL queries, in milliseconds.
     *
     * Default value: **180000** (3 minutes).
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#distributed_ddl_task_timeout).
     */
    distributedDdlTaskTimeout?: number;
    /**
     * Determines the format of distributed DDL query result.
     *
     * Default value: **DISTRIBUTED_DDL_OUTPUT_MODE_THROW**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#distributed_ddl_output_mode).
     */
    distributedDdlOutputMode: UserSettings_DistributedDdlOutputMode;
    /**
     * Enables or disables silent skipping of unavailable shards.
     *
     * A shard is considered unavailable if all its replicas are also unavailable.
     *
     * Default value: **false**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#skip_unavailable_shards).
     */
    skipUnavailableShards?: boolean;
    /**
     * Enables or disables hedged requests logic for remote queries.
     *
     * It allows to establish many connections with different replicas for query. New connection is enabled in case existent connection(s) with replica(s)
     * were not established within **hedged_connection_timeout** or no data was received within **receive_data_timeout**. Query uses the first connection
     * which send non empty progress packet, other connections are cancelled.
     *
     * Default value: **true**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#use_hedged_requests).
     */
    useHedgedRequests?: boolean;
    /**
     * Connection timeout for establishing connection with replica for Hedged requests.
     *
     * Default value: **50**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#hedged_connection_timeout_ms).
     */
    hedgedConnectionTimeoutMs?: number;
    /**
     * Algorithm of replicas selection that is used for distributed query processing.
     *
     * Default value: **LOAD_BALANCING_RANDOM**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#load_balancing).
     */
    loadBalancing: UserSettings_LoadBalancing;
    /**
     * Enable or disable preferable using the localhost replica when processing distributed queries.
     *
     * Default value: **true**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#prefer_localhost_replica).
     */
    preferLocalhostReplica?: boolean;
    /**
     * Enable or disable expression compilation to native code.
     *
     * If you execute a lot of queries that contain identical expressions, then enable this setting.
     * As a result, such queries may be executed faster due to use of compiled expressions.
     *
     * Use this setting in combination with **min_count_to_compile_expression** setting.
     *
     * Default value: **true** for versions 25.5 and higher, **false** for versions 25.4 and lower.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#compile_expressions).
     */
    compileExpressions?: boolean;
    /**
     * How many identical expressions ClickHouse has to encounter before they are compiled.
     *
     * For the **0** value compilation is synchronous: a query waits for expression compilation process to complete prior to continuing execution.
     * It is recommended to set this value only for testing purposes.
     *
     * For all other values, compilation is asynchronous: the compilation process executes in a separate thread.
     * When a compiled expression is ready, it will be used by ClickHouse for eligible queries, including the ones that are currently running.
     *
     * Default value: **3**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#min_count_to_compile_expression).
     */
    minCountToCompileExpression?: number;
    /**
     * Sets the recommended maximum number of rows to include in a single block when loading data from tables.
     *
     * Blocks the size of **max_block_size** are not always loaded from the table: if ClickHouse determines that less data needs to be retrieved,
     * a smaller block is processed.
     *
     * The block size should not be too small to avoid noticeable costs when processing each block. It should also not be too large to ensure that
     * queries with a **LIMIT** clause execute quickly after processing the first block. When setting **max_block_size**, the goal should be to avoid
     * consuming too much memory when extracting a large number of columns in multiple threads and to preserve at least some cache locality.
     *
     * Default value: **65409**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_block_size).
     */
    maxBlockSize?: number;
    /**
     * Limits the minimum number of rows in a block to be inserted in a table by **INSERT** query. Blocks that are smaller than the specified value,
     * will be squashed together into the bigger blocks. If set to **0**, block squashing is disabled.
     *
     * Default value: **1048449**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#min_insert_block_size_rows).
     */
    minInsertBlockSizeRows?: number;
    /**
     * Limits the minimum number of bytes in a block to be inserted in a table by **INSERT** query. Blocks that are smaller than the specified value,
     * will be squashed together into the bigger blocks. If set to **0**, block squashing is disabled.
     *
     * Default value: **268402944**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#min_insert_block_size_bytes).
     */
    minInsertBlockSizeBytes?: number;
    /**
     * The size of blocks (in a count of rows) to form for insertion into a table.
     *
     * This setting only applies in cases when the server forms the blocks. For example, for an **INSERT** via the HTTP interface, the server parses
     * the data format and forms blocks of the specified size. But when using clickhouse-client, the client parses the data itself, and
     * the **max_insert_block_size** setting on the server does not affect the size of the inserted blocks. The setting also does not have a purpose
     * when using **INSERT SELECT**, since data is inserted using the same blocks that are formed after **SELECT**.
     *
     * Default value: **1048449**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_insert_block_size).
     */
    maxInsertBlockSize?: number;
    /**
     * When inserting data, ClickHouse calculates the number of partitions in the inserted block.
     * If the number of partitions is more than **max_partitions_per_insert_block**, ClickHouse throws an exception.
     *
     * Default value: **100**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/query-complexity#settings-max_partitions_per_insert_block).
     */
    maxPartitionsPerInsertBlock?: number;
    /**
     * Limits the minimum number of bytes to enable unbuffered direct reads from disk (Direct I/O). If set to **0**, Direct I/O is disabled.
     *
     * By default, ClickHouse does not read data directly from disk, but relies on the filesystem and its cache instead. Such reading strategy
     * is effective when the data volume is small. If the amount of the data to read is huge, it is more effective to read directly from the disk,
     * bypassing the filesystem cache.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#min_bytes_to_use_direct_io).
     */
    minBytesToUseDirectIo?: number;
    /**
     * Determines whether to use the cache of uncompressed blocks, or not.
     *
     * Using this cache can significantly reduce latency and increase the throughput when a huge amount of small queries is to be processed.
     * Enable this setting for the users who instantiates small queries frequently.
     *
     * This setting has effect only for tables of the MergeTree family.
     *
     * Default value: **false**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#use_uncompressed_cache).
     */
    useUncompressedCache?: boolean;
    /**
     * Limits the maximum size in rows of the request that can use the cache of uncompressed data. The cache is not used for requests larger than the specified value.
     *
     * Use this setting in combination with **use_uncompressed_cache** setting.
     *
     * Default value: **1048576**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#merge_tree_max_rows_to_use_cache).
     */
    mergeTreeMaxRowsToUseCache?: number;
    /**
     * Limits the maximum size in bytes of the request that can use the cache of uncompressed data. The cache is not used for requests larger than the specified value.
     *
     * Use this setting in combination with **use_uncompressed_cache** setting.
     *
     * Default value: **2013265920** (1920 MiB).
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#merge_tree_max_bytes_to_use_cache).
     */
    mergeTreeMaxBytesToUseCache?: number;
    /**
     * Limits the minimum number of rows to be read from a file to enable concurrent read.
     * If the number of rows to be read exceeds this value, then ClickHouse will try to use a few threads to read from a file concurrently.
     *
     * This setting has effect only for tables of the MergeTree family.
     *
     * Default value: **163840**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#merge_tree_min_rows_for_concurrent_read).
     */
    mergeTreeMinRowsForConcurrentRead?: number;
    /**
     * Limits the number of bytes to be read from a file to enable concurrent read.
     * If the number of bytes to be read exceeds this value, then ClickHouse will try to use a few threads to read from a file concurrently.
     *
     * This setting has effect only for tables of the MergeTree family.
     *
     * Default value: **251658240** (240 MiB).
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#merge_tree_min_bytes_for_concurrent_read).
     */
    mergeTreeMinBytesForConcurrentRead?: number;
    /**
     * Sets the threshold of RAM consumption (in bytes) after that the temporary data, collected during the **GROUP BY** operation,
     * should be flushed to disk to limit the RAM consumption. If set to **0**, **GROUP BY** in the external memory is disabled.
     *
     * By default, aggregation is done by employing hash table that resides in RAM. A query can result in aggregation of huge data
     * volumes that can lead to memory exhaustion and abortion of the query (see the **max_memory_usage** setting). For such queries,
     * you can use this setting to force ClickHouse to do flushing and complete aggregation successfully.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_bytes_before_external_group_by).
     */
    maxBytesBeforeExternalGroupBy?: number;
    /**
     * Sets the threshold of RAM consumption (in bytes) after that the temporary data, collected during the **ORDER BY** operation,
     * should be flushed to disk to limit the RAM consumption. If set to **0**, **ORDER BY** in the external memory is disabled.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_bytes_before_external_sort).
     */
    maxBytesBeforeExternalSort?: number;
    /**
     * Sets the threshold of the number of keys, after that the two-level aggregation should be used. **0** means threshold is not set.
     *
     * Default value: **100000**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#group_by_two_level_threshold).
     */
    groupByTwoLevelThreshold?: number;
    /**
     * Sets the threshold of the number of bytes, after that the two-level aggregation should be used. **0** means threshold is not set.
     *
     * Default value: **50000000**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#group_by_two_level_threshold_bytes).
     */
    groupByTwoLevelThresholdBytes?: number;
    /**
     * Enables or disables the deduplication check for materialized views that receive data from replicated tables.
     *
     * Default value: **false**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#deduplicate_blocks_in_dependent_materialized_views).
     */
    deduplicateBlocksInDependentMaterializedViews?: boolean;
    /**
     * Method of reading data from local filesystem.
     *
     * The LOCAL_FILESYSTEM_READ_METHOD_IO_URING is experimental and does not work for Log, TinyLog, StripeLog, File, Set and Join, and
     * other tables with append-able files in presence of concurrent reads and writes.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#local_filesystem_read_method).
     */
    localFilesystemReadMethod: UserSettings_LocalFilesystemReadMethod;
    /**
     * Method of reading data from remote filesystem.
     *
     * Default value: **REMOTE_FILESYSTEM_READ_METHOD_THREADPOOL**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#remote_filesystem_read_method).
     */
    remoteFilesystemReadMethod: UserSettings_RemoteFilesystemReadMethod;
    /**
     * Sets the priority of a query.
     * * **0** - priorities are not used.
     * * **1** - the highest priority.
     * * and so on. The higher the number, the lower a query's priority.
     *
     * If ClickHouse is working with the high-priority queries, and a low-priority query enters, then the low-priority query
     * is paused until higher-priority queries are completed.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#priority).
     */
    priority?: number;
    /**
     * Limits the maximum number of threads to process the request. If set to **0**, the number of threads is calculated automatically based on the number of available CPU cores.
     *
     * The setting applies to threads that perform the same stages of the query processing pipeline in parallel. It does not take threads that read data from remote servers into account.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_threads).
     */
    maxThreads?: number;
    /**
     * The maximum number of threads to execute the **INSERT SELECT** query.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_insert_threads).
     */
    maxInsertThreads?: number;
    /**
     * Limits the maximum memory usage (in bytes) for processing of a single user's query on a single server. **0** means unlimited.
     *
     * This limitation is enforced for any user's single query on a single server.
     *
     * If you use **max_bytes_before_external_group_by** or **max_bytes_before_external_sort** setting, then it is recommended to set
     * their values twice as low as **max_memory_usage** setting value.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_memory_usage).
     */
    maxMemoryUsage?: number;
    /**
     * Limits the maximum memory usage (in bytes) for processing of user's queries on a single server. **0** means unlimited.
     *
     * This limitation is enforced for all queries that belong to one user and run simultaneously on a single server.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_memory_usage_for_user).
     */
    maxMemoryUsageForUser?: number;
    /**
     * It represents the soft memory limit when the hard limit is reached on the global level.
     * This value is used to compute the overcommit ratio for the query. **0** means skip the query.
     *
     * Default value: **1073741824** (1 GiB).
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#memory_overcommit_ratio_denominator).
     */
    memoryOvercommitRatioDenominator?: number;
    /**
     * It represents the soft memory limit when the hard limit is reached on the user level.
     * This value is used to compute the overcommit ratio for the user. **0** means skip the query.
     *
     * Default value: **1073741824** (1 GiB).
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#memory_overcommit_ratio_denominator_for_user).
     */
    memoryOvercommitRatioDenominatorForUser?: number;
    /**
     * Maximum time thread will wait for memory to be freed in the case of memory overcommit. If the timeout is reached and memory is not freed, an exception is thrown.
     *
     * Default value: **5000000** (5 seconds).
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#memory_usage_overcommit_max_wait_microseconds).
     */
    memoryUsageOvercommitMaxWaitMicroseconds?: number;
    /**
     * The maximum speed of data exchange over the network in bytes per second for a query. **0** means unlimited.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max-network-bandwidth).
     */
    maxNetworkBandwidth?: number;
    /**
     * The maximum speed of data exchange over the network in bytes per second for all concurrently running user queries. **0** means unlimited.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max-network-bandwidth-for-user).
     */
    maxNetworkBandwidthForUser?: number;
    /**
     * The maximum amount of data consumed by temporary files on disk in bytes for all concurrently running queries. **0** means unlimited.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/query-complexity#settings_max_temporary_data_on_disk_size_for_query).
     */
    maxTemporaryDataOnDiskSizeForQuery?: number;
    /**
     * The maximum amount of data consumed by temporary files on disk in bytes for all concurrently running user queries. **0** means unlimited.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/query-complexity#settings_max_temporary_data_on_disk_size_for_user).
     */
    maxTemporaryDataOnDiskSizeForUser?: number;
    /**
     * The maximum number of simultaneously processed queries per user. **0** means unlimited.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_concurrent_queries_for_user).
     */
    maxConcurrentQueriesForUser?: number;
    /**
     * Disables query execution if the index cannot be used by date.
     *
     * This setting has effect only for tables of the MergeTree family.
     *
     * Default value: **false**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#force_index_by_date).
     */
    forceIndexByDate?: boolean;
    /**
     * Disables query execution if indexing by the primary key cannot be used.
     *
     * This setting has effect only for tables of the MergeTree family.
     *
     * Default value: **false**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#force_primary_key).
     */
    forcePrimaryKey?: boolean;
    /**
     * Limits the maximum number of rows that can be read from a table when running a query.  **0** means unlimited.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/query-complexity#max-rows-to-read).
     */
    maxRowsToRead?: number;
    /**
     * Limits the maximum number of bytes (uncompressed data) that can be read from a table when running a query.  **0** means unlimited.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/query-complexity#max-bytes-to-read).
     */
    maxBytesToRead?: number;
    /**
     * Determines the behavior on exceeding limits while reading the data.
     *
     * Default value: **OVERFLOW_MODE_THROW**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#read_overflow_mode).
     */
    readOverflowMode: UserSettings_OverflowMode;
    /**
     * Limits the maximum number of unique keys received from aggregation. **0** means unlimited.
     * This setting lets you limit RAM consumption when aggregating.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_rows_to_group_by).
     */
    maxRowsToGroupBy?: number;
    /**
     * Determines the behavior on exceeding limits while doing aggregation.
     *
     * Default value: **GROUP_BY_OVERFLOW_MODE_THROW**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#group_by_overflow_mode).
     */
    groupByOverflowMode: UserSettings_GroupByOverflowMode;
    /**
     * Limits the maximum number of rows that can be read from a table for sorting. **0** means unlimited.
     * This setting lets you to limit RAM consumption when sorting
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_rows_to_sort).
     */
    maxRowsToSort?: number;
    /**
     * Limits the maximum number of bytes (uncompressed data) that can be read from a table for sorting. **0** means unlimited.
     * This setting lets you to limit RAM consumption when sorting
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_bytes_to_sort).
     */
    maxBytesToSort?: number;
    /**
     * Determines the behavior on exceeding limits while sorting.
     *
     * Default value: **OVERFLOW_MODE_THROW**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#sort_overflow_mode).
     */
    sortOverflowMode: UserSettings_OverflowMode;
    /**
     * Limits the number of rows in the result. **0** means unlimited.
     *
     * This limitation is also checked for subqueries and parts of distributed queries that run on remote servers.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_result_rows).
     */
    maxResultRows?: number;
    /**
     * Limits the result size in bytes (uncompressed data). **0** means unlimited.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_result_bytes).
     */
    maxResultBytes?: number;
    /**
     * Determines the behavior on exceeding limits while forming result.
     *
     * Default value: **OVERFLOW_MODE_THROW**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#result_overflow_mode).
     */
    resultOverflowMode: UserSettings_OverflowMode;
    /**
     * Limits the maximum number of different rows in the state, which is used for performing **DISTINCT**. **0** means unlimited.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_rows_in_distinct).
     */
    maxRowsInDistinct?: number;
    /**
     * Limits the maximum number of bytes (uncompressed data) in the state, which is used for performing **DISTINCT**. **0** means unlimited.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_bytes_in_distinct).
     */
    maxBytesInDistinct?: number;
    /**
     * Determines the behavior on exceeding limits while performing **DISTINCT**.
     *
     * Default value: **OVERFLOW_MODE_THROW**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#distinct_overflow_mode).
     */
    distinctOverflowMode: UserSettings_OverflowMode;
    /**
     * Limits the maximum number of rows that can be passed to a remote server or saved in a temporary table when using **GLOBAL IN|JOIN**. **0** means unlimited.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_rows_to_transfer).
     */
    maxRowsToTransfer?: number;
    /**
     * Limits the maximum number of bytes (uncompressed data) that can be passed to a remote server or saved in a temporary table when using **GLOBAL IN|JOIN**.
     * **0** means unlimited.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_bytes_to_transfer).
     */
    maxBytesToTransfer?: number;
    /**
     * Determines the behavior on exceeding limits while transfering data.
     *
     * Default value: **OVERFLOW_MODE_THROW**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#transfer_overflow_mode).
     */
    transferOverflowMode: UserSettings_OverflowMode;
    /**
     * Limits the maximum query execution time in milliseconds. **0** means unlimited.
     *
     * The timeout is checked and the query can stop only in designated places during data processing.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_execution_time).
     */
    maxExecutionTime?: number;
    /**
     * Determines the behavior on exceeding limits of execution time.
     *
     * Default value: **OVERFLOW_MODE_THROW**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#timeout_overflow_mode).
     */
    timeoutOverflowMode: UserSettings_OverflowMode;
    /**
     * Limits on the maximum number of rows in the set resulting from the execution of the **IN** section. **0** means unlimited.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_rows_in_set).
     */
    maxRowsInSet?: number;
    /**
     * Limits on the maximum number of bytes (uncompressed data) in the set resulting from the execution of the **IN** section. **0** means unlimited.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_bytes_in_set).
     */
    maxBytesInSet?: number;
    /**
     * Determines the behavior on exceeding max_rows_in_set or max_bytes_in_set limit.
     *
     * Default value: **OVERFLOW_MODE_THROW**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#set_overflow_mode).
     */
    setOverflowMode: UserSettings_OverflowMode;
    /**
     * Limits the maximum number of rows in the hash table that is used when joining tables. **0** means unlimited.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_rows_in_join).
     */
    maxRowsInJoin?: number;
    /**
     * Limits the maximum number of bytes in the hash table that is used when joining tables. **0** means unlimited.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_bytes_in_join).
     */
    maxBytesInJoin?: number;
    /**
     * Determines the behavior on exceeding max_rows_in_join or max_bytes_in_join limit.
     *
     * Default value: **OVERFLOW_MODE_THROW**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#join_overflow_mode).
     */
    joinOverflowMode: UserSettings_OverflowMode;
    /**
     * Limits the maximum number of columns that can be read from a table in a single query. **0** means unlimited.
     * If the query requires to read more columns to complete, then it will be aborted.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_columns_to_read).
     */
    maxColumnsToRead?: number;
    /**
     * Limits the maximum number of temporary columns that must be kept in RAM simultaneously when running a query, including constant columns. **0** means unlimited.
     * If the query generates more than the specified number of temporary columns in memory as a result of intermediate calculation, then it will be aborted.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_temporary_columns).
     */
    maxTemporaryColumns?: number;
    /**
     * Limits the maximum number of temporary columns that must be kept in RAM simultaneously when running a query, not including constant columns. **0** means unlimited.
     * If the query generates more than the specified number of temporary columns in memory as a result of intermediate calculation, then it will be aborted.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_temporary_non_const_columns).
     */
    maxTemporaryNonConstColumns?: number;
    /**
     * Limits the size of the part of a query that can be transferred to RAM for parsing with the SQL parser, in bytes.
     *
     * Data in the **VALUES** clause of **INSERT** queries is processed by a separate stream parser (that consumes O(1) RAM) and not affected by this restriction.
     *
     * Default value: **262144** (256 KiB).
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_query_size).
     */
    maxQuerySize?: number;
    /**
     * Limits the maximum depth of query syntax tree.
     *
     * Executing a big and complex query may result in building a syntax tree of enormous depth.
     * By using this setting, you can prohibit execution of over-sized or non-optimized queries for huge tables.
     *
     * Default value: **1000**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_ast_depth).
     */
    maxAstDepth?: number;
    /**
     * Limits the maximum size of query syntax tree in number of nodes.
     *
     * Executing a big and complex query may result in building a syntax tree of enormous size.
     * By using this setting, you can prohibit execution of over-sized or non-optimized queries for huge tables.
     *
     * Default value: **50000**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_ast_elements).
     */
    maxAstElements?: number;
    /**
     * Limits the maximum size of query syntax tree in number of nodes after expansion of aliases and the asterisk values.
     *
     * Executing a big and complex query may result in building a syntax tree of enormous size.
     * By using this setting, you can prohibit execution of over-sized or non-optimized queries for huge tables.
     *
     * Default value: **500000**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_expanded_ast_elements).
     */
    maxExpandedAstElements?: number;
    /**
     * Limits maximum recursion depth in the recursive descent parser. Allows controlling the stack size. If set to **0**, recursion depth is unlimited.
     *
     * Default value: **1000**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_parser_depth).
     */
    maxParserDepth?: number;
    /**
     * Minimal execution speed in rows per second. Checked on every data block when timeout_before_checking_execution_speed expires.
     * If the execution speed is lower, an exception is thrown. **0** means unlimited.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#min_execution_speed).
     */
    minExecutionSpeed?: number;
    /**
     * Minimal execution speed in bytes per second. Checked on every data block when timeout_before_checking_execution_speed expires.
     * If the execution speed is lower, an exception is thrown. **0** means unlimited.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#min_execution_speed_bytes).
     */
    minExecutionSpeedBytes?: number;
    /**
     * Enables or disables SQL parser if the fast stream parser cannot parse the data.
     *
     * Enable this setting, if the data that you want to insert into a table contains SQL expressions.
     *
     * For example, the stream parser is unable to parse a value that contains **now()** expression; therefore an **INSERT** query for this value
     * will fail and no data will be inserted into a table. With enabled SQL parser, this expression is parsed correctly: the **now()** expression
     * will be parsed as SQL function, interpreted, and the current date and time will be inserted into the table as a result.
     *
     * This setting has effect only if you use [Values](https://clickhouse.com/docs/en/interfaces/formats/#data-format-values) format when inserting data.
     *
     * Default value: **true**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/formats#input_format_values_interpret_expressions).
     */
    inputFormatValuesInterpretExpressions?: boolean;
    /**
     * Enables or disables replacing omitted input values with default values of the respective columns when performing **INSERT** queries.
     *
     * Default value: **true**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/formats#input_format_defaults_for_omitted_fields).
     */
    inputFormatDefaultsForOmittedFields?: boolean;
    /**
     * Enables or disables the initialization of **NULL** fields with default values, if data type of these fields is not nullable.
     *
     * Default value: **true**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/formats#input_format_null_as_default).
     */
    inputFormatNullAsDefault?: boolean;
    /**
     * Enables or disables checking the column order when inserting data.
     *
     * Default value: **true**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/formats#input_format_with_names_use_header).
     */
    inputFormatWithNamesUseHeader?: boolean;
    /**
     * Enables or disables quoting of 64-bit integers in JSON output format.
     *
     * If this setting is enabled, then 64-bit integers (**UInt64** and **Int64**) will be quoted when written to JSON output
     * in order to maintain compatibility with the most of the JavaScript engines. Otherwise, such integers will not be quoted.
     *
     * Default value: **false** for versions 25.8 and higher, **true** for versions 25.7 and lower.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/formats#output_format_json_quote_64bit_integers).
     */
    outputFormatJsonQuote64bitIntegers?: boolean;
    /**
     * Enables special floating-point values (**+nan**, **-nan**, **+inf** and **-inf**) in JSON output format.
     *
     * Default value: **false**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/formats#output_format_json_quote_denormals).
     */
    outputFormatJsonQuoteDenormals?: boolean;
    /**
     * Specifies which of date time parsers to use.
     *
     * Default value: **DATE_TIME_INPUT_FORMAT_BASIC**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/formats#date_time_input_format).
     */
    dateTimeInputFormat: UserSettings_DateTimeInputFormat;
    /**
     * Specifies which of date time output formats to use.
     *
     * Default value: **DATE_TIME_OUTPUT_FORMAT_SIMPLE**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/formats#date_time_output_format).
     */
    dateTimeOutputFormat: UserSettings_DateTimeOutputFormat;
    /**
     * Allows or restricts using the LowCardinality data type with the Native format.
     *
     * LowCardinality columns (aka sparse columns) store data in more effective way, compared to regular columns, by using hash tables.
     * If data to insert suits this storage format, ClickHouse will place them into LowCardinality column.
     *
     * If you use a third-party ClickHouse client that can't work with LowCardinality columns, then this client will not be able to correctly interpret
     * the result of the query that asks for data stored in LowCardinality column. Disable this setting to convert LowCardinality column to regular column
     * when creating the result, so such clients will be able to process the result.
     *
     * Official ClickHouse client works with LowCardinality columns out-of-the-box.
     *
     * Default value: **true**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#low_cardinality_allow_in_native_format).
     */
    lowCardinalityAllowInNativeFormat?: boolean;
    /**
     * Enables or disables returning of empty result when aggregating without keys (with **GROUP BY** operation absent) on empty set (e.g., **SELECT count(*) FROM table WHERE 0**).
     * * **true** - ClickHouse will return an empty result for such queries.
     * * **false** - ClickHouse will return a single-line result consisting of **NULL** values for aggregation functions, in accordance with SQL standard.
     *
     * Default value: **false**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#empty_result_for_aggregation_by_empty_set).
     */
    emptyResultForAggregationByEmptySet?: boolean;
    /**
     * Regular expression (for Regexp format).
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/formats#format_regexp).
     */
    formatRegexp: string;
    /**
     * Field escaping rule (for Regexp format).
     *
     * Default value: **FORMAT_REGEXP_ESCAPING_RULE_RAW**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/formats#format_regexp_escaping_rule).
     */
    formatRegexpEscapingRule: UserSettings_FormatRegexpEscapingRule;
    /**
     * Skip lines unmatched by regular expression (for Regexp format)
     *
     * Default value: **false**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/formats#format_regexp_skip_unmatched).
     */
    formatRegexpSkipUnmatched?: boolean;
    /**
     * Enables or disables order-preserving parallel parsing of data formats. Supported only for TSV, TSKV, CSV and JSONEachRow formats.
     *
     * Default value: **true**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#input_format_parallel_parsing).
     */
    inputFormatParallelParsing?: boolean;
    /**
     * Enables or disables the insertion of JSON data with nested objects.
     *
     * Default value: **false**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/formats#input_format_import_nested_json).
     */
    inputFormatImportNestedJson?: boolean;
    /**
     * Avro schema registry URL.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/formats#format_avro_schema_registry_url).
     */
    formatAvroSchemaRegistryUrl: string;
    /**
     * Allows data types without explicit modifiers **NULL** or **NOT NULL** in column definition will be Nullable.
     *
     * Default value: **false**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#data_type_default_nullable).
     */
    dataTypeDefaultNullable?: boolean;
    /**
     * HTTP connection timeout, in milliseconds.
     *
     * Default value: **1000** (1 second).
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#http_connection_timeout).
     */
    httpConnectionTimeout?: number;
    /**
     * HTTP receive timeout, in milliseconds.
     *
     * Default value: **30000** (30 seconds).
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#http_receive_timeout).
     */
    httpReceiveTimeout?: number;
    /**
     * HTTP send timeout, in milliseconds.
     *
     * Default value: **30000** (30 seconds).
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#http_send_timeout).
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
     * Default value: **false**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#enable_http_compression).
     */
    enableHttpCompression?: boolean;
    /**
     * Enables or disables progress notifications using **X-ClickHouse-Progress** HTTP header.
     *
     * Default value: **false**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#send_progress_in_http_headers).
     */
    sendProgressInHttpHeaders?: boolean;
    /**
     * Minimum interval between progress notifications with **X-ClickHouse-Progress** HTTP header, in milliseconds.
     *
     * Default value: **100**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#http_headers_progress_interval_ms).
     */
    httpHeadersProgressInterval?: number;
    /**
     * Adds CORS header in HTTP responses.
     *
     * Default value: **false**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#add_http_cors_header).
     */
    addHttpCorsHeader?: boolean;
    /**
     * Cancels HTTP read-only queries (e.g. **SELECT**) when a client closes the connection without waiting for the response.
     *
     * Default value: **false**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#cancel_http_readonly_queries_on_client_close).
     */
    cancelHttpReadonlyQueriesOnClientClose?: boolean;
    /**
     * Limits the maximum number of HTTP GET redirect hops. If set to **0**, no hops is allowed.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_http_get_redirects).
     */
    maxHttpGetRedirects?: number;
    /**
     * Maximum length of field name in HTTP header.
     *
     * Default value: **131072**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#http_max_field_name_size).
     */
    httpMaxFieldNameSize?: number;
    /**
     * Maximum length of field value in HTTP header.
     *
     * Default value: **131072**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#http_max_field_value_size).
     */
    httpMaxFieldValueSize?: number;
    /**
     * Quota accounting mode.
     *
     * Default value: **QUOTA_MODE_DEFAULT**.
     */
    quotaMode: UserSettings_QuotaMode;
    /**
     * If enabled, data from **INSERT** query is stored in queue and later flushed to table in background.
     *
     * Default value: **true** for versions 26.3 and higher, **false** for versions 26.2 and lower.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#async_insert).
     */
    asyncInsert?: boolean;
    /**
     * Enables or disables waiting for processing of asynchronous insertion. If enabled, server returns OK only after the data is inserted.
     *
     * Default value: **true**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#wait_for_async_insert).
     */
    waitForAsyncInsert?: boolean;
    /**
     * Timeout for waiting for processing asynchronous inserts, in seconds.
     *
     * Default value: **120** (2 minutes).
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#wait_for_async_insert_timeout).
     */
    waitForAsyncInsertTimeout?: number;
    /**
     * The maximum size of the unparsed data in bytes collected per query before being inserted.
     *
     * Default value: **10485760** (10 MiB).
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#async_insert_max_data_size).
     */
    asyncInsertMaxDataSize?: number;
    /**
     * Maximum time to wait before dumping collected data per query since the first data appeared.
     *
     * Default value: **200**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#async_insert_busy_timeout_max_ms).
     */
    asyncInsertBusyTimeout?: number;
    /**
     * Enables of disables adaptive busy timeout for asynchronous inserts.
     *
     * Default value: **true**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#async_insert_use_adaptive_busy_timeout).
     */
    asyncInsertUseAdaptiveBusyTimeout?: boolean;
    /**
     * Enables or disables query threads logging to the the system.query_thread_log table.
     * This setting has effect only when **log_queries** setting is enabled.
     *
     * Default value: **false**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#log_query_threads).
     */
    logQueryThreads?: boolean;
    /**
     * Enables or disables query views logging to the the system.query_views_log table.
     *
     * Default value: **true**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#log_query_views).
     */
    logQueryViews?: boolean;
    /**
     * Log queries with the specified probability.
     *
     * Default value: **1**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#log_queries_probability).
     */
    logQueriesProbability?: number;
    /**
     * Enables or disables logging of processors level profiling data to the the system.processors_profile_log table.
     *
     * Default value: **false**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#log_processors_profiles).
     */
    logProcessorsProfiles?: boolean;
    /**
     * If turned on, **SELECT** queries may utilize the query cache.
     *
     * Default value: **false**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#use_query_cache).
     */
    useQueryCache?: boolean;
    /**
     * If turned on, results of **SELECT** queries are retrieved from the query cache.
     *
     * Default value: **true**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#enable_reads_from_query_cache).
     */
    enableReadsFromQueryCache?: boolean;
    /**
     * If turned on, results of **SELECT** queries are stored in the query cache.
     *
     * Default value: **true**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#enable_writes_to_query_cache).
     */
    enableWritesToQueryCache?: boolean;
    /**
     * Minimum number of times a **SELECT** query must run before its result is stored in the query cache.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#query_cache_min_query_runs).
     */
    queryCacheMinQueryRuns?: number;
    /**
     * Minimum duration in milliseconds a query needs to run for its result to be stored in the query cache.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#query_cache_min_query_duration).
     */
    queryCacheMinQueryDuration?: number;
    /**
     * After this time in seconds entries in the query cache become stale.
     *
     * Default value: **60** (1 minute).
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#query_cache_ttl).
     */
    queryCacheTtl?: number;
    /**
     * The maximum number of query results the current user may store in the query cache. **0** means unlimited.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#query_cache_max_entries).
     */
    queryCacheMaxEntries?: number;
    /**
     * The maximum amount of memory (in bytes) the current user may allocate in the query cache. **0** means unlimited.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#query_cache_max_size_in_bytes).
     */
    queryCacheMaxSizeInBytes?: number;
    /**
     * A string which acts as a label for query cache entries. The same queries with different tags are considered different by the query cache.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#query_cache_tag).
     */
    queryCacheTag: string;
    /**
     * If turned on, the result of **SELECT** queries cached in the query cache can be read by other users.
     *
     * It is not recommended to enable this setting due to security reasons.
     *
     * Default value: **false**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#query_cache_share_between_users).
     */
    queryCacheShareBetweenUsers?: boolean;
    /**
     * Controls how the query cache handles **SELECT** queries with non-deterministic functions like rand() or now().
     *
     * Default value: **QUERY_CACHE_NONDETERMINISTIC_FUNCTION_HANDLING_THROW**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#query_cache_nondeterministic_function_handling).
     */
    queryCacheNondeterministicFunctionHandling: UserSettings_QueryCacheNondeterministicFunctionHandling;
    /**
     * Controls how the query cache handles **SELECT** queries against system tables.
     *
     * Default value: **QUERY_CACHE_SYSTEM_TABLE_HANDLING_THROW**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#query_cache_system_table_handling).
     */
    queryCacheSystemTableHandling: UserSettings_QueryCacheSystemTableHandling;
    /**
     * Specifies which of the uniq* functions should be used to perform the **COUNT(DISTINCT ...)** construction.
     *
     * Default value: **COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#count_distinct_implementation).
     */
    countDistinctImplementation: UserSettings_CountDistinctImplementation;
    /**
     * Force joined subqueries and table functions to have aliases for correct name qualification.
     *
     * Default value: **true**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#joined_subquery_requires_alias).
     */
    joinedSubqueryRequiresAlias?: boolean;
    /**
     * Determines **JOIN** behavior on filling empty cells when merging tables. If enabled, the empty cells are filled with **NULL**.
     * Otherwise, the empty cells are filled with the default value of the corresponding field type.
     *
     * Default value: **false**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#join_use_nulls).
     */
    joinUseNulls?: boolean;
    /**
     * Enables equality of **NULL** values for **IN** operator.
     *
     * By default, **NULL** values can't be compared because **NULL** means undefined value. Thus, comparison **expr = NULL** must always return false.
     * With this setting enabled **NULL = NULL** returns true for **IN** operator.
     *
     * Default value: **false**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#transform_null_in).
     */
    transformNullIn?: boolean;
    /**
     * Enables or disables the insertion of default values instead of **NULL** into columns with not nullable data type.
     *
     * If column type is not nullable and this setting is disabled, then inserting NULL causes an exception.
     * If column type is nullable, then NULL values are inserted as is, regardless of this setting.
     *
     * Default value: **true**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#insert_null_as_default).
     */
    insertNullAsDefault?: boolean;
    /**
     * Specifies which JOIN algorithm to use.
     *
     * Default value: **JOIN_ALGORITHM_DIRECT,JOIN_ALGORITHM_PARALLEL_HASH,JOIN_ALGORITHM_HASH** for versions 24.12 and higher, **JOIN_ALGORITHM_DIRECT,JOIN_ALGORITHM_AUTO** for versions from 23.8 to 24.11, **JOIN_ALGORITHM_AUTO** for versions 23.7 and lower.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#join_algorithm).
     */
    joinAlgorithm: UserSettings_JoinAlgorithm[];
    /**
     * Enables legacy ClickHouse server behaviour in **ANY INNER|LEFT JOIN** operations.
     *
     * Default value: **false**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#any_join_distinct_right_table_keys).
     */
    anyJoinDistinctRightTableKeys?: boolean;
    /**
     * Allows or restricts using LowCardinality with data types with fixed size of 8 bytes or less.
     *
     * Default value: **false**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#allow_suspicious_low_cardinality_types).
     */
    allowSuspiciousLowCardinalityTypes?: boolean;
    /**
     * Sets the data format of nested columns.
     *
     * Default value: **true**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#flatten_nested).
     */
    flattenNested?: boolean;
    /**
     * Sets the step of memory profiler. Whenever query memory usage becomes larger than every next step in number of bytes the memory profiler
     * will collect the allocating stacktrace and will write it into trace_log. If set to **0**, memory profiler is disabled.
     *
     * Default value: **4194304**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#memory_profiler_step).
     */
    memoryProfilerStep?: number;
    /**
     * Collect random allocations and deallocations and write them into system.trace_log with MemorySample trace_type.
     * The probability is for every alloc/free regardless to the size of the allocation.
     *
     * Default value: **0**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#memory_profiler_sample_probability).
     */
    memoryProfilerSampleProbability?: number;
    /**
     * Sets the maximum number of parallel threads for the **SELECT** query data read phase with the **FINAL** modifier.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_final_threads).
     */
    maxFinalThreads?: number;
    /**
     * The maximum size of the buffer to read from the filesystem.
     *
     * Default value: **1048576** (1 MiB).
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#max_read_buffer_size).
     */
    maxReadBufferSize?: number;
    /**
     * The setting sets the maximum number of retries for ClickHouse Keeper (or ZooKeeper) requests during insert into replicated MergeTree tables.
     * Only Keeper requests which failed due to network error, Keeper session timeout or request timeout are considered for retries.
     *
     * Default value: **20**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#insert_keeper_max_retries).
     */
    insertKeeperMaxRetries?: number;
    /**
     * Enable or disable independent processing of partitions for **SELECT** queries with **FINAL**.
     *
     * Default value: **false**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/guides/replacing-merge-tree#exploiting-partitions-with-replacingmergetree).
     */
    doNotMergeAcrossPartitionsSelectFinal?: boolean;
    /**
     * Ignore materialized views with dropped target table during pushing to views.
     *
     * Default value: **false**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#ignore_materialized_views_with_dropped_target_table).
     */
    ignoreMaterializedViewsWithDroppedTargetTable?: boolean;
    /**
     * Enables or disables new query analyzer.
     *
     * Default value: **true** for versions 25.9 and higher, **false** for version 25.8, **true** for versions from 25.5 to 25.7, **false** for versions 25.4 and lower.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/guides/developer/understanding-query-execution-with-the-analyzer#analyzer).
     */
    enableAnalyzer?: boolean;
    /**
     * Enables or disables adaptive timeouts for S3 requests.
     * * **true** - for all S3 requests first two attempts are made with low send and receive timeouts.
     * * **false** - all attempts are made with identical timeouts.
     *
     * Default value: **true**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#s3_use_adaptive_timeouts).
     */
    s3UseAdaptiveTimeouts?: boolean;
    /**
     * If enabled, automatically applies **FINAL** modifier to all tables in a query, to tables where **FINAL** is applicable,
     * including joined tables and tables in sub-queries, and distributed tables.
     *
     * Default value: **false**.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#final).
     */
    final?: boolean;
    /**
     * When enabled, ClickHouse will detect Hive-style partitioning in path (/name=value/) in file-like table engines
     * File/S3/URL/HDFS/AzureBlobStorage and will allow to use partition columns as virtual columns in the query.
     * These virtual columns will have the same names as in the partitioned path, but starting with _.
     *
     * Default value: **true** for versions 25.1 and higher, **false** for versions 24.12 and lower.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#use_hive_partitioning).
     */
    useHivePartitioning?: boolean;
    /**
     * Enables or disables showing data lake catalogs in system tables.
     *
     * Default value: **false** for versions 25.10 and higher, **true** for versions 25.9 and lower.
     *
     * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#show_data_lake_catalogs_in_system_tables).
     */
    showDataLakeCatalogsInSystemTables?: boolean;
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
    /**
     * The setting is deprecated and has no effect.
     *
     * @deprecated
     */
    asyncInsertThreads?: number;
    /**
     * The setting is deprecated and has no effect.
     *
     * @deprecated
     */
    asyncInsertStaleTimeout?: number;
}

/** Determines the behavior of distributed subqueries. */
export enum UserSettings_DistributedProductMode {
    /** DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED - Not specified. */
    DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED = 0,
    /** DISTRIBUTED_PRODUCT_MODE_DENY - Prohibits using these types of subqueries (returns the "Double-distributed in/JOIN subqueries is denied" exception). */
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
    object: any,
): UserSettings_DistributedProductMode {
    switch (object) {
        case 0:
        case 'DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED':
            return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED;
        case 1:
        case 'DISTRIBUTED_PRODUCT_MODE_DENY':
            return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_DENY;
        case 2:
        case 'DISTRIBUTED_PRODUCT_MODE_LOCAL':
            return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_LOCAL;
        case 3:
        case 'DISTRIBUTED_PRODUCT_MODE_GLOBAL':
            return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_GLOBAL;
        case 4:
        case 'DISTRIBUTED_PRODUCT_MODE_ALLOW':
            return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_ALLOW;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserSettings_DistributedProductMode.UNRECOGNIZED;
    }
}

export function userSettings_DistributedProductModeToJSON(
    object: UserSettings_DistributedProductMode,
): string {
    switch (object) {
        case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED:
            return 'DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED';
        case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_DENY:
            return 'DISTRIBUTED_PRODUCT_MODE_DENY';
        case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_LOCAL:
            return 'DISTRIBUTED_PRODUCT_MODE_LOCAL';
        case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_GLOBAL:
            return 'DISTRIBUTED_PRODUCT_MODE_GLOBAL';
        case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_ALLOW:
            return 'DISTRIBUTED_PRODUCT_MODE_ALLOW';
        default:
            return 'UNKNOWN';
    }
}

/**
 * Determines the format of distributed DDL query result.
 * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/settings/settings#distributed_ddl_output_mode).
 */
export enum UserSettings_DistributedDdlOutputMode {
    /** DISTRIBUTED_DDL_OUTPUT_MODE_UNSPECIFIED - Not specified. */
    DISTRIBUTED_DDL_OUTPUT_MODE_UNSPECIFIED = 0,
    /**
     * DISTRIBUTED_DDL_OUTPUT_MODE_THROW - Returns result set with query execution status for all hosts where query is finished. If query has failed on some hosts, then it will rethrow the first exception.
     * If query is not finished yet on some hosts and **distributed_ddl_task_timeout** exceeded, then it throws **TIMEOUT_EXCEEDED** exception.
     */
    DISTRIBUTED_DDL_OUTPUT_MODE_THROW = 1,
    /** DISTRIBUTED_DDL_OUTPUT_MODE_NONE - Like **DISTRIBUTED_DDL_OUTPUT_MODE_THROW**, but distributed DDL query returns no result set. */
    DISTRIBUTED_DDL_OUTPUT_MODE_NONE = 2,
    /** DISTRIBUTED_DDL_OUTPUT_MODE_NULL_STATUS_ON_TIMEOUT - Returns **NULL** as execution status in some rows of result set instead of throwing **TIMEOUT_EXCEEDED** if query is not finished on the corresponding hosts. */
    DISTRIBUTED_DDL_OUTPUT_MODE_NULL_STATUS_ON_TIMEOUT = 3,
    /** DISTRIBUTED_DDL_OUTPUT_MODE_NEVER_THROW - Do not throw **TIMEOUT_EXCEEDED** and do not rethrow exceptions if query has failed on some hosts. */
    DISTRIBUTED_DDL_OUTPUT_MODE_NEVER_THROW = 4,
    /**
     * DISTRIBUTED_DDL_OUTPUT_MODE_NONE_ONLY_ACTIVE - Like **DISTRIBUTED_DDL_OUTPUT_MODE_NONE**, but doesn't wait for inactive replicas of the **Replicated** database.
     * With this mode it's impossible to figure out that the query was not executed on some replica and will be executed in background.
     */
    DISTRIBUTED_DDL_OUTPUT_MODE_NONE_ONLY_ACTIVE = 5,
    /** DISTRIBUTED_DDL_OUTPUT_MODE_NULL_STATUS_ON_TIMEOUT_ONLY_ACTIVE - Like **DISTRIBUTED_DDL_OUTPUT_MODE_NULL_STATUS_ON_TIMEOUT**, but doesn't wait for inactive replicas of the **Replicated** database. */
    DISTRIBUTED_DDL_OUTPUT_MODE_NULL_STATUS_ON_TIMEOUT_ONLY_ACTIVE = 6,
    /** DISTRIBUTED_DDL_OUTPUT_MODE_THROW_ONLY_ACTIVE - Like **DISTRIBUTED_DDL_OUTPUT_MODE_THROW**, but doesn't wait for inactive replicas of the **Replicated** database. */
    DISTRIBUTED_DDL_OUTPUT_MODE_THROW_ONLY_ACTIVE = 7,
    UNRECOGNIZED = -1,
}

export function userSettings_DistributedDdlOutputModeFromJSON(
    object: any,
): UserSettings_DistributedDdlOutputMode {
    switch (object) {
        case 0:
        case 'DISTRIBUTED_DDL_OUTPUT_MODE_UNSPECIFIED':
            return UserSettings_DistributedDdlOutputMode.DISTRIBUTED_DDL_OUTPUT_MODE_UNSPECIFIED;
        case 1:
        case 'DISTRIBUTED_DDL_OUTPUT_MODE_THROW':
            return UserSettings_DistributedDdlOutputMode.DISTRIBUTED_DDL_OUTPUT_MODE_THROW;
        case 2:
        case 'DISTRIBUTED_DDL_OUTPUT_MODE_NONE':
            return UserSettings_DistributedDdlOutputMode.DISTRIBUTED_DDL_OUTPUT_MODE_NONE;
        case 3:
        case 'DISTRIBUTED_DDL_OUTPUT_MODE_NULL_STATUS_ON_TIMEOUT':
            return UserSettings_DistributedDdlOutputMode.DISTRIBUTED_DDL_OUTPUT_MODE_NULL_STATUS_ON_TIMEOUT;
        case 4:
        case 'DISTRIBUTED_DDL_OUTPUT_MODE_NEVER_THROW':
            return UserSettings_DistributedDdlOutputMode.DISTRIBUTED_DDL_OUTPUT_MODE_NEVER_THROW;
        case 5:
        case 'DISTRIBUTED_DDL_OUTPUT_MODE_NONE_ONLY_ACTIVE':
            return UserSettings_DistributedDdlOutputMode.DISTRIBUTED_DDL_OUTPUT_MODE_NONE_ONLY_ACTIVE;
        case 6:
        case 'DISTRIBUTED_DDL_OUTPUT_MODE_NULL_STATUS_ON_TIMEOUT_ONLY_ACTIVE':
            return UserSettings_DistributedDdlOutputMode.DISTRIBUTED_DDL_OUTPUT_MODE_NULL_STATUS_ON_TIMEOUT_ONLY_ACTIVE;
        case 7:
        case 'DISTRIBUTED_DDL_OUTPUT_MODE_THROW_ONLY_ACTIVE':
            return UserSettings_DistributedDdlOutputMode.DISTRIBUTED_DDL_OUTPUT_MODE_THROW_ONLY_ACTIVE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserSettings_DistributedDdlOutputMode.UNRECOGNIZED;
    }
}

export function userSettings_DistributedDdlOutputModeToJSON(
    object: UserSettings_DistributedDdlOutputMode,
): string {
    switch (object) {
        case UserSettings_DistributedDdlOutputMode.DISTRIBUTED_DDL_OUTPUT_MODE_UNSPECIFIED:
            return 'DISTRIBUTED_DDL_OUTPUT_MODE_UNSPECIFIED';
        case UserSettings_DistributedDdlOutputMode.DISTRIBUTED_DDL_OUTPUT_MODE_THROW:
            return 'DISTRIBUTED_DDL_OUTPUT_MODE_THROW';
        case UserSettings_DistributedDdlOutputMode.DISTRIBUTED_DDL_OUTPUT_MODE_NONE:
            return 'DISTRIBUTED_DDL_OUTPUT_MODE_NONE';
        case UserSettings_DistributedDdlOutputMode.DISTRIBUTED_DDL_OUTPUT_MODE_NULL_STATUS_ON_TIMEOUT:
            return 'DISTRIBUTED_DDL_OUTPUT_MODE_NULL_STATUS_ON_TIMEOUT';
        case UserSettings_DistributedDdlOutputMode.DISTRIBUTED_DDL_OUTPUT_MODE_NEVER_THROW:
            return 'DISTRIBUTED_DDL_OUTPUT_MODE_NEVER_THROW';
        case UserSettings_DistributedDdlOutputMode.DISTRIBUTED_DDL_OUTPUT_MODE_NONE_ONLY_ACTIVE:
            return 'DISTRIBUTED_DDL_OUTPUT_MODE_NONE_ONLY_ACTIVE';
        case UserSettings_DistributedDdlOutputMode.DISTRIBUTED_DDL_OUTPUT_MODE_NULL_STATUS_ON_TIMEOUT_ONLY_ACTIVE:
            return 'DISTRIBUTED_DDL_OUTPUT_MODE_NULL_STATUS_ON_TIMEOUT_ONLY_ACTIVE';
        case UserSettings_DistributedDdlOutputMode.DISTRIBUTED_DDL_OUTPUT_MODE_THROW_ONLY_ACTIVE:
            return 'DISTRIBUTED_DDL_OUTPUT_MODE_THROW_ONLY_ACTIVE';
        default:
            return 'UNKNOWN';
    }
}

/** Load balancing algorithm for selecting a replica for distributed queries. */
export enum UserSettings_LoadBalancing {
    /** LOAD_BALANCING_UNSPECIFIED - Not specified. */
    LOAD_BALANCING_UNSPECIFIED = 0,
    /** LOAD_BALANCING_RANDOM - Select a replica at random for each query. */
    LOAD_BALANCING_RANDOM = 1,
    /** LOAD_BALANCING_NEAREST_HOSTNAME - Prefer replicas whose hostname is lexicographically closest to the current server's hostname. */
    LOAD_BALANCING_NEAREST_HOSTNAME = 2,
    /** LOAD_BALANCING_IN_ORDER - Select replicas in the order defined in the configuration, failing over to the next on error. */
    LOAD_BALANCING_IN_ORDER = 3,
    /** LOAD_BALANCING_FIRST_OR_RANDOM - Always try the first replica; fall back to a random replica if it is unavailable or has errors. */
    LOAD_BALANCING_FIRST_OR_RANDOM = 4,
    /** LOAD_BALANCING_ROUND_ROBIN - Cycle through replicas sequentially in a round-robin fashion. */
    LOAD_BALANCING_ROUND_ROBIN = 5,
    UNRECOGNIZED = -1,
}

export function userSettings_LoadBalancingFromJSON(object: any): UserSettings_LoadBalancing {
    switch (object) {
        case 0:
        case 'LOAD_BALANCING_UNSPECIFIED':
            return UserSettings_LoadBalancing.LOAD_BALANCING_UNSPECIFIED;
        case 1:
        case 'LOAD_BALANCING_RANDOM':
            return UserSettings_LoadBalancing.LOAD_BALANCING_RANDOM;
        case 2:
        case 'LOAD_BALANCING_NEAREST_HOSTNAME':
            return UserSettings_LoadBalancing.LOAD_BALANCING_NEAREST_HOSTNAME;
        case 3:
        case 'LOAD_BALANCING_IN_ORDER':
            return UserSettings_LoadBalancing.LOAD_BALANCING_IN_ORDER;
        case 4:
        case 'LOAD_BALANCING_FIRST_OR_RANDOM':
            return UserSettings_LoadBalancing.LOAD_BALANCING_FIRST_OR_RANDOM;
        case 5:
        case 'LOAD_BALANCING_ROUND_ROBIN':
            return UserSettings_LoadBalancing.LOAD_BALANCING_ROUND_ROBIN;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserSettings_LoadBalancing.UNRECOGNIZED;
    }
}

export function userSettings_LoadBalancingToJSON(object: UserSettings_LoadBalancing): string {
    switch (object) {
        case UserSettings_LoadBalancing.LOAD_BALANCING_UNSPECIFIED:
            return 'LOAD_BALANCING_UNSPECIFIED';
        case UserSettings_LoadBalancing.LOAD_BALANCING_RANDOM:
            return 'LOAD_BALANCING_RANDOM';
        case UserSettings_LoadBalancing.LOAD_BALANCING_NEAREST_HOSTNAME:
            return 'LOAD_BALANCING_NEAREST_HOSTNAME';
        case UserSettings_LoadBalancing.LOAD_BALANCING_IN_ORDER:
            return 'LOAD_BALANCING_IN_ORDER';
        case UserSettings_LoadBalancing.LOAD_BALANCING_FIRST_OR_RANDOM:
            return 'LOAD_BALANCING_FIRST_OR_RANDOM';
        case UserSettings_LoadBalancing.LOAD_BALANCING_ROUND_ROBIN:
            return 'LOAD_BALANCING_ROUND_ROBIN';
        default:
            return 'UNKNOWN';
    }
}

/** Method used for reading data from the local filesystem. */
export enum UserSettings_LocalFilesystemReadMethod {
    /** LOCAL_FILESYSTEM_READ_METHOD_UNSPECIFIED - Not specified. */
    LOCAL_FILESYSTEM_READ_METHOD_UNSPECIFIED = 0,
    /** LOCAL_FILESYSTEM_READ_METHOD_READ - Use the read() system call. */
    LOCAL_FILESYSTEM_READ_METHOD_READ = 1,
    /** LOCAL_FILESYSTEM_READ_METHOD_PREAD_THREADPOOL - Use pread() system calls dispatched via a thread pool. */
    LOCAL_FILESYSTEM_READ_METHOD_PREAD_THREADPOOL = 2,
    /** LOCAL_FILESYSTEM_READ_METHOD_PREAD - Use the pread() system call. */
    LOCAL_FILESYSTEM_READ_METHOD_PREAD = 3,
    /** LOCAL_FILESYSTEM_READ_METHOD_NMAP - Use memory-mapped I/O (mmap). */
    LOCAL_FILESYSTEM_READ_METHOD_NMAP = 4,
    /** LOCAL_FILESYSTEM_READ_METHOD_IO_URING - Use Linux io_uring for asynchronous I/O. */
    LOCAL_FILESYSTEM_READ_METHOD_IO_URING = 5,
    UNRECOGNIZED = -1,
}

export function userSettings_LocalFilesystemReadMethodFromJSON(
    object: any,
): UserSettings_LocalFilesystemReadMethod {
    switch (object) {
        case 0:
        case 'LOCAL_FILESYSTEM_READ_METHOD_UNSPECIFIED':
            return UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_UNSPECIFIED;
        case 1:
        case 'LOCAL_FILESYSTEM_READ_METHOD_READ':
            return UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_READ;
        case 2:
        case 'LOCAL_FILESYSTEM_READ_METHOD_PREAD_THREADPOOL':
            return UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_PREAD_THREADPOOL;
        case 3:
        case 'LOCAL_FILESYSTEM_READ_METHOD_PREAD':
            return UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_PREAD;
        case 4:
        case 'LOCAL_FILESYSTEM_READ_METHOD_NMAP':
            return UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_NMAP;
        case 5:
        case 'LOCAL_FILESYSTEM_READ_METHOD_IO_URING':
            return UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_IO_URING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserSettings_LocalFilesystemReadMethod.UNRECOGNIZED;
    }
}

export function userSettings_LocalFilesystemReadMethodToJSON(
    object: UserSettings_LocalFilesystemReadMethod,
): string {
    switch (object) {
        case UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_UNSPECIFIED:
            return 'LOCAL_FILESYSTEM_READ_METHOD_UNSPECIFIED';
        case UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_READ:
            return 'LOCAL_FILESYSTEM_READ_METHOD_READ';
        case UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_PREAD_THREADPOOL:
            return 'LOCAL_FILESYSTEM_READ_METHOD_PREAD_THREADPOOL';
        case UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_PREAD:
            return 'LOCAL_FILESYSTEM_READ_METHOD_PREAD';
        case UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_NMAP:
            return 'LOCAL_FILESYSTEM_READ_METHOD_NMAP';
        case UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_IO_URING:
            return 'LOCAL_FILESYSTEM_READ_METHOD_IO_URING';
        default:
            return 'UNKNOWN';
    }
}

/** Method used for reading data from remote filesystems. */
export enum UserSettings_RemoteFilesystemReadMethod {
    /** REMOTE_FILESYSTEM_READ_METHOD_UNSPECIFIED - Not specified. */
    REMOTE_FILESYSTEM_READ_METHOD_UNSPECIFIED = 0,
    /** REMOTE_FILESYSTEM_READ_METHOD_READ - Read data synchronously. */
    REMOTE_FILESYSTEM_READ_METHOD_READ = 1,
    /** REMOTE_FILESYSTEM_READ_METHOD_THREADPOOL - Read data using a thread pool for parallelism. */
    REMOTE_FILESYSTEM_READ_METHOD_THREADPOOL = 2,
    UNRECOGNIZED = -1,
}

export function userSettings_RemoteFilesystemReadMethodFromJSON(
    object: any,
): UserSettings_RemoteFilesystemReadMethod {
    switch (object) {
        case 0:
        case 'REMOTE_FILESYSTEM_READ_METHOD_UNSPECIFIED':
            return UserSettings_RemoteFilesystemReadMethod.REMOTE_FILESYSTEM_READ_METHOD_UNSPECIFIED;
        case 1:
        case 'REMOTE_FILESYSTEM_READ_METHOD_READ':
            return UserSettings_RemoteFilesystemReadMethod.REMOTE_FILESYSTEM_READ_METHOD_READ;
        case 2:
        case 'REMOTE_FILESYSTEM_READ_METHOD_THREADPOOL':
            return UserSettings_RemoteFilesystemReadMethod.REMOTE_FILESYSTEM_READ_METHOD_THREADPOOL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserSettings_RemoteFilesystemReadMethod.UNRECOGNIZED;
    }
}

export function userSettings_RemoteFilesystemReadMethodToJSON(
    object: UserSettings_RemoteFilesystemReadMethod,
): string {
    switch (object) {
        case UserSettings_RemoteFilesystemReadMethod.REMOTE_FILESYSTEM_READ_METHOD_UNSPECIFIED:
            return 'REMOTE_FILESYSTEM_READ_METHOD_UNSPECIFIED';
        case UserSettings_RemoteFilesystemReadMethod.REMOTE_FILESYSTEM_READ_METHOD_READ:
            return 'REMOTE_FILESYSTEM_READ_METHOD_READ';
        case UserSettings_RemoteFilesystemReadMethod.REMOTE_FILESYSTEM_READ_METHOD_THREADPOOL:
            return 'REMOTE_FILESYSTEM_READ_METHOD_THREADPOOL';
        default:
            return 'UNKNOWN';
    }
}

/** Determines the behavior on exceeding of query complexity limits. */
export enum UserSettings_OverflowMode {
    /** OVERFLOW_MODE_UNSPECIFIED - Not specified. */
    OVERFLOW_MODE_UNSPECIFIED = 0,
    /** OVERFLOW_MODE_THROW - Abort query execution and return an error. */
    OVERFLOW_MODE_THROW = 1,
    /** OVERFLOW_MODE_BREAK - Return a partial result. */
    OVERFLOW_MODE_BREAK = 2,
    UNRECOGNIZED = -1,
}

export function userSettings_OverflowModeFromJSON(object: any): UserSettings_OverflowMode {
    switch (object) {
        case 0:
        case 'OVERFLOW_MODE_UNSPECIFIED':
            return UserSettings_OverflowMode.OVERFLOW_MODE_UNSPECIFIED;
        case 1:
        case 'OVERFLOW_MODE_THROW':
            return UserSettings_OverflowMode.OVERFLOW_MODE_THROW;
        case 2:
        case 'OVERFLOW_MODE_BREAK':
            return UserSettings_OverflowMode.OVERFLOW_MODE_BREAK;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserSettings_OverflowMode.UNRECOGNIZED;
    }
}

export function userSettings_OverflowModeToJSON(object: UserSettings_OverflowMode): string {
    switch (object) {
        case UserSettings_OverflowMode.OVERFLOW_MODE_UNSPECIFIED:
            return 'OVERFLOW_MODE_UNSPECIFIED';
        case UserSettings_OverflowMode.OVERFLOW_MODE_THROW:
            return 'OVERFLOW_MODE_THROW';
        case UserSettings_OverflowMode.OVERFLOW_MODE_BREAK:
            return 'OVERFLOW_MODE_BREAK';
        default:
            return 'UNKNOWN';
    }
}

/** Determines behavior on exceeding the limit on the number of unique keys during aggregation. */
export enum UserSettings_GroupByOverflowMode {
    /** GROUP_BY_OVERFLOW_MODE_UNSPECIFIED - Not specified. */
    GROUP_BY_OVERFLOW_MODE_UNSPECIFIED = 0,
    /** GROUP_BY_OVERFLOW_MODE_THROW - Abort query execution and return an error. */
    GROUP_BY_OVERFLOW_MODE_THROW = 1,
    /** GROUP_BY_OVERFLOW_MODE_BREAK - Return a partial result. */
    GROUP_BY_OVERFLOW_MODE_BREAK = 2,
    /** GROUP_BY_OVERFLOW_MODE_ANY - Continuing aggregation for the keys that got into the set, but do not add new keys to the set. */
    GROUP_BY_OVERFLOW_MODE_ANY = 3,
    UNRECOGNIZED = -1,
}

export function userSettings_GroupByOverflowModeFromJSON(
    object: any,
): UserSettings_GroupByOverflowMode {
    switch (object) {
        case 0:
        case 'GROUP_BY_OVERFLOW_MODE_UNSPECIFIED':
            return UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_UNSPECIFIED;
        case 1:
        case 'GROUP_BY_OVERFLOW_MODE_THROW':
            return UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_THROW;
        case 2:
        case 'GROUP_BY_OVERFLOW_MODE_BREAK':
            return UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_BREAK;
        case 3:
        case 'GROUP_BY_OVERFLOW_MODE_ANY':
            return UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_ANY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserSettings_GroupByOverflowMode.UNRECOGNIZED;
    }
}

export function userSettings_GroupByOverflowModeToJSON(
    object: UserSettings_GroupByOverflowMode,
): string {
    switch (object) {
        case UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_UNSPECIFIED:
            return 'GROUP_BY_OVERFLOW_MODE_UNSPECIFIED';
        case UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_THROW:
            return 'GROUP_BY_OVERFLOW_MODE_THROW';
        case UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_BREAK:
            return 'GROUP_BY_OVERFLOW_MODE_BREAK';
        case UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_ANY:
            return 'GROUP_BY_OVERFLOW_MODE_ANY';
        default:
            return 'UNKNOWN';
    }
}

/** Format for parsing date and time values in text input. */
export enum UserSettings_DateTimeInputFormat {
    /** DATE_TIME_INPUT_FORMAT_UNSPECIFIED - Not specified. */
    DATE_TIME_INPUT_FORMAT_UNSPECIFIED = 0,
    /** DATE_TIME_INPUT_FORMAT_BEST_EFFORT - Parse the basic YYYY-MM-DD HH:MM:SS format and all ISO 8601 date and time formats. */
    DATE_TIME_INPUT_FORMAT_BEST_EFFORT = 1,
    /** DATE_TIME_INPUT_FORMAT_BASIC - Parse date/time in YYYY-MM-DD or YYYY-MM-DD HH:MM:SS format only. */
    DATE_TIME_INPUT_FORMAT_BASIC = 2,
    /** DATE_TIME_INPUT_FORMAT_BEST_EFFORT_US - Like best_effort but interprets ambiguous dates (e.g., MM/DD/YYYY) using US conventions (month-first). */
    DATE_TIME_INPUT_FORMAT_BEST_EFFORT_US = 3,
    UNRECOGNIZED = -1,
}

export function userSettings_DateTimeInputFormatFromJSON(
    object: any,
): UserSettings_DateTimeInputFormat {
    switch (object) {
        case 0:
        case 'DATE_TIME_INPUT_FORMAT_UNSPECIFIED':
            return UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_UNSPECIFIED;
        case 1:
        case 'DATE_TIME_INPUT_FORMAT_BEST_EFFORT':
            return UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_BEST_EFFORT;
        case 2:
        case 'DATE_TIME_INPUT_FORMAT_BASIC':
            return UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_BASIC;
        case 3:
        case 'DATE_TIME_INPUT_FORMAT_BEST_EFFORT_US':
            return UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_BEST_EFFORT_US;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserSettings_DateTimeInputFormat.UNRECOGNIZED;
    }
}

export function userSettings_DateTimeInputFormatToJSON(
    object: UserSettings_DateTimeInputFormat,
): string {
    switch (object) {
        case UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_UNSPECIFIED:
            return 'DATE_TIME_INPUT_FORMAT_UNSPECIFIED';
        case UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_BEST_EFFORT:
            return 'DATE_TIME_INPUT_FORMAT_BEST_EFFORT';
        case UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_BASIC:
            return 'DATE_TIME_INPUT_FORMAT_BASIC';
        case UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_BEST_EFFORT_US:
            return 'DATE_TIME_INPUT_FORMAT_BEST_EFFORT_US';
        default:
            return 'UNKNOWN';
    }
}

/** Format for outputting date and time values in text output. */
export enum UserSettings_DateTimeOutputFormat {
    /** DATE_TIME_OUTPUT_FORMAT_UNSPECIFIED - Not specified. */
    DATE_TIME_OUTPUT_FORMAT_UNSPECIFIED = 0,
    /** DATE_TIME_OUTPUT_FORMAT_SIMPLE - Output date/time in a simple human-readable format (e.g. 2024-01-01 12:00:00). */
    DATE_TIME_OUTPUT_FORMAT_SIMPLE = 1,
    /** DATE_TIME_OUTPUT_FORMAT_ISO - Output date/time in ISO 8601 format (e.g. 2024-01-01T12:00:00Z). */
    DATE_TIME_OUTPUT_FORMAT_ISO = 2,
    /** DATE_TIME_OUTPUT_FORMAT_UNIX_TIMESTAMP - Output date/time as a Unix timestamp (seconds since epoch). */
    DATE_TIME_OUTPUT_FORMAT_UNIX_TIMESTAMP = 3,
    UNRECOGNIZED = -1,
}

export function userSettings_DateTimeOutputFormatFromJSON(
    object: any,
): UserSettings_DateTimeOutputFormat {
    switch (object) {
        case 0:
        case 'DATE_TIME_OUTPUT_FORMAT_UNSPECIFIED':
            return UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_UNSPECIFIED;
        case 1:
        case 'DATE_TIME_OUTPUT_FORMAT_SIMPLE':
            return UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_SIMPLE;
        case 2:
        case 'DATE_TIME_OUTPUT_FORMAT_ISO':
            return UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_ISO;
        case 3:
        case 'DATE_TIME_OUTPUT_FORMAT_UNIX_TIMESTAMP':
            return UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_UNIX_TIMESTAMP;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserSettings_DateTimeOutputFormat.UNRECOGNIZED;
    }
}

export function userSettings_DateTimeOutputFormatToJSON(
    object: UserSettings_DateTimeOutputFormat,
): string {
    switch (object) {
        case UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_UNSPECIFIED:
            return 'DATE_TIME_OUTPUT_FORMAT_UNSPECIFIED';
        case UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_SIMPLE:
            return 'DATE_TIME_OUTPUT_FORMAT_SIMPLE';
        case UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_ISO:
            return 'DATE_TIME_OUTPUT_FORMAT_ISO';
        case UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_UNIX_TIMESTAMP:
            return 'DATE_TIME_OUTPUT_FORMAT_UNIX_TIMESTAMP';
        default:
            return 'UNKNOWN';
    }
}

/** Escaping rule applied to fields when using the Regexp format. */
export enum UserSettings_FormatRegexpEscapingRule {
    /** FORMAT_REGEXP_ESCAPING_RULE_UNSPECIFIED - Not specified. */
    FORMAT_REGEXP_ESCAPING_RULE_UNSPECIFIED = 0,
    /** FORMAT_REGEXP_ESCAPING_RULE_ESCAPED - Apply backslash escaping (as in TSV format). */
    FORMAT_REGEXP_ESCAPING_RULE_ESCAPED = 1,
    /** FORMAT_REGEXP_ESCAPING_RULE_QUOTED - Apply quoting escaping (as in Values format). */
    FORMAT_REGEXP_ESCAPING_RULE_QUOTED = 2,
    /** FORMAT_REGEXP_ESCAPING_RULE_CSV - Apply CSV escaping rules. */
    FORMAT_REGEXP_ESCAPING_RULE_CSV = 3,
    /** FORMAT_REGEXP_ESCAPING_RULE_JSON - Apply JSON escaping rules. */
    FORMAT_REGEXP_ESCAPING_RULE_JSON = 4,
    /** FORMAT_REGEXP_ESCAPING_RULE_XML - Apply XML escaping rules. */
    FORMAT_REGEXP_ESCAPING_RULE_XML = 5,
    /** FORMAT_REGEXP_ESCAPING_RULE_RAW - No escaping; use raw field values (as in TSVRaw format). */
    FORMAT_REGEXP_ESCAPING_RULE_RAW = 6,
    UNRECOGNIZED = -1,
}

export function userSettings_FormatRegexpEscapingRuleFromJSON(
    object: any,
): UserSettings_FormatRegexpEscapingRule {
    switch (object) {
        case 0:
        case 'FORMAT_REGEXP_ESCAPING_RULE_UNSPECIFIED':
            return UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_UNSPECIFIED;
        case 1:
        case 'FORMAT_REGEXP_ESCAPING_RULE_ESCAPED':
            return UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_ESCAPED;
        case 2:
        case 'FORMAT_REGEXP_ESCAPING_RULE_QUOTED':
            return UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_QUOTED;
        case 3:
        case 'FORMAT_REGEXP_ESCAPING_RULE_CSV':
            return UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_CSV;
        case 4:
        case 'FORMAT_REGEXP_ESCAPING_RULE_JSON':
            return UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_JSON;
        case 5:
        case 'FORMAT_REGEXP_ESCAPING_RULE_XML':
            return UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_XML;
        case 6:
        case 'FORMAT_REGEXP_ESCAPING_RULE_RAW':
            return UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_RAW;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserSettings_FormatRegexpEscapingRule.UNRECOGNIZED;
    }
}

export function userSettings_FormatRegexpEscapingRuleToJSON(
    object: UserSettings_FormatRegexpEscapingRule,
): string {
    switch (object) {
        case UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_UNSPECIFIED:
            return 'FORMAT_REGEXP_ESCAPING_RULE_UNSPECIFIED';
        case UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_ESCAPED:
            return 'FORMAT_REGEXP_ESCAPING_RULE_ESCAPED';
        case UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_QUOTED:
            return 'FORMAT_REGEXP_ESCAPING_RULE_QUOTED';
        case UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_CSV:
            return 'FORMAT_REGEXP_ESCAPING_RULE_CSV';
        case UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_JSON:
            return 'FORMAT_REGEXP_ESCAPING_RULE_JSON';
        case UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_XML:
            return 'FORMAT_REGEXP_ESCAPING_RULE_XML';
        case UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_RAW:
            return 'FORMAT_REGEXP_ESCAPING_RULE_RAW';
        default:
            return 'UNKNOWN';
    }
}

/** Determines how queries are associated with quota limits. */
export enum UserSettings_QuotaMode {
    /** QUOTA_MODE_UNSPECIFIED - Not specified. */
    QUOTA_MODE_UNSPECIFIED = 0,
    /** QUOTA_MODE_DEFAULT - Track resource usage as a single shared quota across all users without per-user separation. */
    QUOTA_MODE_DEFAULT = 1,
    /** QUOTA_MODE_KEYED - Track quota separately per unique quota key value passed in the query parameter. */
    QUOTA_MODE_KEYED = 2,
    /** QUOTA_MODE_KEYED_BY_IP - Track quota separately per client IP address. */
    QUOTA_MODE_KEYED_BY_IP = 3,
    UNRECOGNIZED = -1,
}

export function userSettings_QuotaModeFromJSON(object: any): UserSettings_QuotaMode {
    switch (object) {
        case 0:
        case 'QUOTA_MODE_UNSPECIFIED':
            return UserSettings_QuotaMode.QUOTA_MODE_UNSPECIFIED;
        case 1:
        case 'QUOTA_MODE_DEFAULT':
            return UserSettings_QuotaMode.QUOTA_MODE_DEFAULT;
        case 2:
        case 'QUOTA_MODE_KEYED':
            return UserSettings_QuotaMode.QUOTA_MODE_KEYED;
        case 3:
        case 'QUOTA_MODE_KEYED_BY_IP':
            return UserSettings_QuotaMode.QUOTA_MODE_KEYED_BY_IP;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserSettings_QuotaMode.UNRECOGNIZED;
    }
}

export function userSettings_QuotaModeToJSON(object: UserSettings_QuotaMode): string {
    switch (object) {
        case UserSettings_QuotaMode.QUOTA_MODE_UNSPECIFIED:
            return 'QUOTA_MODE_UNSPECIFIED';
        case UserSettings_QuotaMode.QUOTA_MODE_DEFAULT:
            return 'QUOTA_MODE_DEFAULT';
        case UserSettings_QuotaMode.QUOTA_MODE_KEYED:
            return 'QUOTA_MODE_KEYED';
        case UserSettings_QuotaMode.QUOTA_MODE_KEYED_BY_IP:
            return 'QUOTA_MODE_KEYED_BY_IP';
        default:
            return 'UNKNOWN';
    }
}

/** Controls how the query cache handles SELECT queries with non-deterministic functions like rand() or now(). */
export enum UserSettings_QueryCacheNondeterministicFunctionHandling {
    /** QUERY_CACHE_NONDETERMINISTIC_FUNCTION_HANDLING_UNSPECIFIED - Not specified. */
    QUERY_CACHE_NONDETERMINISTIC_FUNCTION_HANDLING_UNSPECIFIED = 0,
    /** QUERY_CACHE_NONDETERMINISTIC_FUNCTION_HANDLING_THROW - Throw an exception and don't cache the query result. */
    QUERY_CACHE_NONDETERMINISTIC_FUNCTION_HANDLING_THROW = 1,
    /** QUERY_CACHE_NONDETERMINISTIC_FUNCTION_HANDLING_SAVE - Cache the query result. */
    QUERY_CACHE_NONDETERMINISTIC_FUNCTION_HANDLING_SAVE = 2,
    /** QUERY_CACHE_NONDETERMINISTIC_FUNCTION_HANDLING_IGNORE - Don't cache the query result and don't throw an exception. */
    QUERY_CACHE_NONDETERMINISTIC_FUNCTION_HANDLING_IGNORE = 3,
    UNRECOGNIZED = -1,
}

export function userSettings_QueryCacheNondeterministicFunctionHandlingFromJSON(
    object: any,
): UserSettings_QueryCacheNondeterministicFunctionHandling {
    switch (object) {
        case 0:
        case 'QUERY_CACHE_NONDETERMINISTIC_FUNCTION_HANDLING_UNSPECIFIED':
            return UserSettings_QueryCacheNondeterministicFunctionHandling.QUERY_CACHE_NONDETERMINISTIC_FUNCTION_HANDLING_UNSPECIFIED;
        case 1:
        case 'QUERY_CACHE_NONDETERMINISTIC_FUNCTION_HANDLING_THROW':
            return UserSettings_QueryCacheNondeterministicFunctionHandling.QUERY_CACHE_NONDETERMINISTIC_FUNCTION_HANDLING_THROW;
        case 2:
        case 'QUERY_CACHE_NONDETERMINISTIC_FUNCTION_HANDLING_SAVE':
            return UserSettings_QueryCacheNondeterministicFunctionHandling.QUERY_CACHE_NONDETERMINISTIC_FUNCTION_HANDLING_SAVE;
        case 3:
        case 'QUERY_CACHE_NONDETERMINISTIC_FUNCTION_HANDLING_IGNORE':
            return UserSettings_QueryCacheNondeterministicFunctionHandling.QUERY_CACHE_NONDETERMINISTIC_FUNCTION_HANDLING_IGNORE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserSettings_QueryCacheNondeterministicFunctionHandling.UNRECOGNIZED;
    }
}

export function userSettings_QueryCacheNondeterministicFunctionHandlingToJSON(
    object: UserSettings_QueryCacheNondeterministicFunctionHandling,
): string {
    switch (object) {
        case UserSettings_QueryCacheNondeterministicFunctionHandling.QUERY_CACHE_NONDETERMINISTIC_FUNCTION_HANDLING_UNSPECIFIED:
            return 'QUERY_CACHE_NONDETERMINISTIC_FUNCTION_HANDLING_UNSPECIFIED';
        case UserSettings_QueryCacheNondeterministicFunctionHandling.QUERY_CACHE_NONDETERMINISTIC_FUNCTION_HANDLING_THROW:
            return 'QUERY_CACHE_NONDETERMINISTIC_FUNCTION_HANDLING_THROW';
        case UserSettings_QueryCacheNondeterministicFunctionHandling.QUERY_CACHE_NONDETERMINISTIC_FUNCTION_HANDLING_SAVE:
            return 'QUERY_CACHE_NONDETERMINISTIC_FUNCTION_HANDLING_SAVE';
        case UserSettings_QueryCacheNondeterministicFunctionHandling.QUERY_CACHE_NONDETERMINISTIC_FUNCTION_HANDLING_IGNORE:
            return 'QUERY_CACHE_NONDETERMINISTIC_FUNCTION_HANDLING_IGNORE';
        default:
            return 'UNKNOWN';
    }
}

/** Controls how the query cache handles SELECT queries against system tables. */
export enum UserSettings_QueryCacheSystemTableHandling {
    /** QUERY_CACHE_SYSTEM_TABLE_HANDLING_UNSPECIFIED - Not specified. */
    QUERY_CACHE_SYSTEM_TABLE_HANDLING_UNSPECIFIED = 0,
    /** QUERY_CACHE_SYSTEM_TABLE_HANDLING_THROW - Throw an exception and don't cache the query result. */
    QUERY_CACHE_SYSTEM_TABLE_HANDLING_THROW = 1,
    /** QUERY_CACHE_SYSTEM_TABLE_HANDLING_SAVE - Cache the query result. */
    QUERY_CACHE_SYSTEM_TABLE_HANDLING_SAVE = 2,
    /** QUERY_CACHE_SYSTEM_TABLE_HANDLING_IGNORE - Don't cache the query result and don't throw an exception. */
    QUERY_CACHE_SYSTEM_TABLE_HANDLING_IGNORE = 3,
    UNRECOGNIZED = -1,
}

export function userSettings_QueryCacheSystemTableHandlingFromJSON(
    object: any,
): UserSettings_QueryCacheSystemTableHandling {
    switch (object) {
        case 0:
        case 'QUERY_CACHE_SYSTEM_TABLE_HANDLING_UNSPECIFIED':
            return UserSettings_QueryCacheSystemTableHandling.QUERY_CACHE_SYSTEM_TABLE_HANDLING_UNSPECIFIED;
        case 1:
        case 'QUERY_CACHE_SYSTEM_TABLE_HANDLING_THROW':
            return UserSettings_QueryCacheSystemTableHandling.QUERY_CACHE_SYSTEM_TABLE_HANDLING_THROW;
        case 2:
        case 'QUERY_CACHE_SYSTEM_TABLE_HANDLING_SAVE':
            return UserSettings_QueryCacheSystemTableHandling.QUERY_CACHE_SYSTEM_TABLE_HANDLING_SAVE;
        case 3:
        case 'QUERY_CACHE_SYSTEM_TABLE_HANDLING_IGNORE':
            return UserSettings_QueryCacheSystemTableHandling.QUERY_CACHE_SYSTEM_TABLE_HANDLING_IGNORE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserSettings_QueryCacheSystemTableHandling.UNRECOGNIZED;
    }
}

export function userSettings_QueryCacheSystemTableHandlingToJSON(
    object: UserSettings_QueryCacheSystemTableHandling,
): string {
    switch (object) {
        case UserSettings_QueryCacheSystemTableHandling.QUERY_CACHE_SYSTEM_TABLE_HANDLING_UNSPECIFIED:
            return 'QUERY_CACHE_SYSTEM_TABLE_HANDLING_UNSPECIFIED';
        case UserSettings_QueryCacheSystemTableHandling.QUERY_CACHE_SYSTEM_TABLE_HANDLING_THROW:
            return 'QUERY_CACHE_SYSTEM_TABLE_HANDLING_THROW';
        case UserSettings_QueryCacheSystemTableHandling.QUERY_CACHE_SYSTEM_TABLE_HANDLING_SAVE:
            return 'QUERY_CACHE_SYSTEM_TABLE_HANDLING_SAVE';
        case UserSettings_QueryCacheSystemTableHandling.QUERY_CACHE_SYSTEM_TABLE_HANDLING_IGNORE:
            return 'QUERY_CACHE_SYSTEM_TABLE_HANDLING_IGNORE';
        default:
            return 'UNKNOWN';
    }
}

/** Implementation used for the COUNT(DISTINCT ...) function. */
export enum UserSettings_CountDistinctImplementation {
    /** COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED - Not specified. */
    COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED = 0,
    /** COUNT_DISTINCT_IMPLEMENTATION_UNIQ - Approximate count using an adaptive sampling algorithm. Fast with low memory usage; recommended for most scenarios. */
    COUNT_DISTINCT_IMPLEMENTATION_UNIQ = 1,
    /** COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED - Adaptive approximate count combining multiple algorithms for better accuracy than uniq. */
    COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED = 2,
    /** COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64 - Like uniqCombined but uses 64-bit hashing for better accuracy with large cardinalities. */
    COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64 = 3,
    /** COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12 - Approximate count using HyperLogLog with 2^12 cells. */
    COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12 = 4,
    /** COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT - Exact count using a hash set. Higher memory usage but fully accurate. */
    COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT = 5,
    UNRECOGNIZED = -1,
}

export function userSettings_CountDistinctImplementationFromJSON(
    object: any,
): UserSettings_CountDistinctImplementation {
    switch (object) {
        case 0:
        case 'COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED':
            return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED;
        case 1:
        case 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ':
            return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ;
        case 2:
        case 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED':
            return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED;
        case 3:
        case 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64':
            return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64;
        case 4:
        case 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12':
            return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12;
        case 5:
        case 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT':
            return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserSettings_CountDistinctImplementation.UNRECOGNIZED;
    }
}

export function userSettings_CountDistinctImplementationToJSON(
    object: UserSettings_CountDistinctImplementation,
): string {
    switch (object) {
        case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED:
            return 'COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED';
        case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ:
            return 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ';
        case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED:
            return 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED';
        case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64:
            return 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64';
        case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12:
            return 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12';
        case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT:
            return 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT';
        default:
            return 'UNKNOWN';
    }
}

/** Algorithm used for JOIN operations. */
export enum UserSettings_JoinAlgorithm {
    /** JOIN_ALGORITHM_UNSPECIFIED - Not specified. */
    JOIN_ALGORITHM_UNSPECIFIED = 0,
    /** JOIN_ALGORITHM_HASH - Use a hash join algorithm. */
    JOIN_ALGORITHM_HASH = 1,
    /** JOIN_ALGORITHM_PARALLEL_HASH - Build several hash tables concurrently to speed up the build phase, at the cost of higher memory usage. */
    JOIN_ALGORITHM_PARALLEL_HASH = 2,
    /** JOIN_ALGORITHM_PARTIAL_MERGE - Sort-based join that minimizes memory usage by processing sorted chunks of the right table; slower than hash join. */
    JOIN_ALGORITHM_PARTIAL_MERGE = 3,
    /** JOIN_ALGORITHM_DIRECT - Directly look up join keys in a dictionary-backed table (Dictionary, Join, or EmbeddedRocksDB engine). Supports LEFT ANY join only. */
    JOIN_ALGORITHM_DIRECT = 4,
    /** JOIN_ALGORITHM_AUTO - Automatically choose the best join algorithm at runtime based on available memory and data size. */
    JOIN_ALGORITHM_AUTO = 5,
    /** JOIN_ALGORITHM_FULL_SORTING_MERGE - Non-memory-bound sort-merge join; can skip the sort phase when both tables are pre-sorted on the join key. */
    JOIN_ALGORITHM_FULL_SORTING_MERGE = 6,
    /** JOIN_ALGORITHM_PREFER_PARTIAL_MERGE - Prefer partial_merge join when applicable, falling back to hash join otherwise. */
    JOIN_ALGORITHM_PREFER_PARTIAL_MERGE = 7,
    UNRECOGNIZED = -1,
}

export function userSettings_JoinAlgorithmFromJSON(object: any): UserSettings_JoinAlgorithm {
    switch (object) {
        case 0:
        case 'JOIN_ALGORITHM_UNSPECIFIED':
            return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_UNSPECIFIED;
        case 1:
        case 'JOIN_ALGORITHM_HASH':
            return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_HASH;
        case 2:
        case 'JOIN_ALGORITHM_PARALLEL_HASH':
            return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_PARALLEL_HASH;
        case 3:
        case 'JOIN_ALGORITHM_PARTIAL_MERGE':
            return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_PARTIAL_MERGE;
        case 4:
        case 'JOIN_ALGORITHM_DIRECT':
            return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_DIRECT;
        case 5:
        case 'JOIN_ALGORITHM_AUTO':
            return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_AUTO;
        case 6:
        case 'JOIN_ALGORITHM_FULL_SORTING_MERGE':
            return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_FULL_SORTING_MERGE;
        case 7:
        case 'JOIN_ALGORITHM_PREFER_PARTIAL_MERGE':
            return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_PREFER_PARTIAL_MERGE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserSettings_JoinAlgorithm.UNRECOGNIZED;
    }
}

export function userSettings_JoinAlgorithmToJSON(object: UserSettings_JoinAlgorithm): string {
    switch (object) {
        case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_UNSPECIFIED:
            return 'JOIN_ALGORITHM_UNSPECIFIED';
        case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_HASH:
            return 'JOIN_ALGORITHM_HASH';
        case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_PARALLEL_HASH:
            return 'JOIN_ALGORITHM_PARALLEL_HASH';
        case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_PARTIAL_MERGE:
            return 'JOIN_ALGORITHM_PARTIAL_MERGE';
        case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_DIRECT:
            return 'JOIN_ALGORITHM_DIRECT';
        case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_AUTO:
            return 'JOIN_ALGORITHM_AUTO';
        case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_FULL_SORTING_MERGE:
            return 'JOIN_ALGORITHM_FULL_SORTING_MERGE';
        case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_PREFER_PARTIAL_MERGE:
            return 'JOIN_ALGORITHM_PREFER_PARTIAL_MERGE';
        default:
            return 'UNKNOWN';
    }
}

/**
 * ClickHouse quota representation. Each quota associated with an user and limits it resource usage for an interval.
 * For details, see [ClickHouse documentation](https://clickhouse.com/docs/operations/quotas/).
 */
export interface UserQuota {
    /** Duration of interval for quota in milliseconds. */
    intervalDuration?: number;
    /** The total number of queries. **0** means unlimited. */
    queries?: number;
    /** The number of queries that threw exception. **0** means unlimited. */
    errors?: number;
    /** The total number of rows given as the result. **0** means unlimited. */
    resultRows?: number;
    /** The total number of source rows read from tables for running the query, on all remote servers. **0** means unlimited. */
    readRows?: number;
    /** The total query execution time, in milliseconds (wall time). **0** means unlimited. */
    executionTime?: number;
}

/** Connection Manager connection configuration. */
export interface ConnectionManager {
    /** ID of Connection Manager connection. */
    connectionId: string;
}

export interface UserSpec {
    /** User name. */
    name: string;
    /** User password. */
    password: string;
    /**
     * Enable or disable password generation using Connection Manager.
     *
     * Default value: **false**.
     */
    generatePassword?: boolean;
    /** Set of permissions to grant to the user. If not set, it's granted permissions to access all databases. */
    permissions: Permission[];
    /** User settings */
    settings?: UserSettings;
    /** Quotas assigned to the user. */
    quotas: UserQuota[];
}

const baseUser: object = { name: '', clusterId: '' };

export const User: {
    encode(message: User, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): User;
    fromJSON(object: any): User;
    toJSON(message: User): unknown;
    fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User;
} = {
    encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== '') {
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
        if (message.connectionManager !== undefined) {
            ConnectionManager.encode(message.connectionManager, writer.uint32(50).fork()).ldelim();
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
                case 6:
                    message.connectionManager = ConnectionManager.decode(reader, reader.uint32());
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
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.permissions = (object.permissions ?? []).map((e: any) => Permission.fromJSON(e));
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? UserSettings.fromJSON(object.settings)
                : undefined;
        message.quotas = (object.quotas ?? []).map((e: any) => UserQuota.fromJSON(e));
        message.connectionManager =
            object.connectionManager !== undefined && object.connectionManager !== null
                ? ConnectionManager.fromJSON(object.connectionManager)
                : undefined;
        return message;
    },

    toJSON(message: User): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.permissions) {
            obj.permissions = message.permissions.map((e) =>
                e ? Permission.toJSON(e) : undefined,
            );
        } else {
            obj.permissions = [];
        }
        message.settings !== undefined &&
            (obj.settings = message.settings ? UserSettings.toJSON(message.settings) : undefined);
        if (message.quotas) {
            obj.quotas = message.quotas.map((e) => (e ? UserQuota.toJSON(e) : undefined));
        } else {
            obj.quotas = [];
        }
        message.connectionManager !== undefined &&
            (obj.connectionManager = message.connectionManager
                ? ConnectionManager.toJSON(message.connectionManager)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
        const message = { ...baseUser } as User;
        message.name = object.name ?? '';
        message.clusterId = object.clusterId ?? '';
        message.permissions = object.permissions?.map((e) => Permission.fromPartial(e)) || [];
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? UserSettings.fromPartial(object.settings)
                : undefined;
        message.quotas = object.quotas?.map((e) => UserQuota.fromPartial(e)) || [];
        message.connectionManager =
            object.connectionManager !== undefined && object.connectionManager !== null
                ? ConnectionManager.fromPartial(object.connectionManager)
                : undefined;
        return message;
    },
};

const basePermission: object = { databaseName: '' };

export const Permission: {
    encode(message: Permission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Permission;
    fromJSON(object: any): Permission;
    toJSON(message: Permission): unknown;
    fromPartial<I extends Exact<DeepPartial<Permission>, I>>(object: I): Permission;
} = {
    encode(message: Permission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.databaseName !== '') {
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
                : '';
        return message;
    },

    toJSON(message: Permission): unknown {
        const obj: any = {};
        message.databaseName !== undefined && (obj.databaseName = message.databaseName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Permission>, I>>(object: I): Permission {
        const message = { ...basePermission } as Permission;
        message.databaseName = object.databaseName ?? '';
        return message;
    },
};

const baseUserSettings: object = {
    distributedProductMode: 0,
    distributedDdlOutputMode: 0,
    loadBalancing: 0,
    localFilesystemReadMethod: 0,
    remoteFilesystemReadMethod: 0,
    readOverflowMode: 0,
    groupByOverflowMode: 0,
    sortOverflowMode: 0,
    resultOverflowMode: 0,
    distinctOverflowMode: 0,
    transferOverflowMode: 0,
    timeoutOverflowMode: 0,
    setOverflowMode: 0,
    joinOverflowMode: 0,
    dateTimeInputFormat: 0,
    dateTimeOutputFormat: 0,
    formatRegexp: '',
    formatRegexpEscapingRule: 0,
    formatAvroSchemaRegistryUrl: '',
    quotaMode: 0,
    queryCacheTag: '',
    queryCacheNondeterministicFunctionHandling: 0,
    queryCacheSystemTableHandling: 0,
    countDistinctImplementation: 0,
    joinAlgorithm: 0,
};

export const UserSettings: {
    encode(message: UserSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserSettings;
    fromJSON(object: any): UserSettings;
    toJSON(message: UserSettings): unknown;
    fromPartial<I extends Exact<DeepPartial<UserSettings>, I>>(object: I): UserSettings;
} = {
    encode(message: UserSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.readonly !== undefined) {
            Int64Value.encode({ value: message.readonly! }, writer.uint32(10).fork()).ldelim();
        }
        if (message.allowDdl !== undefined) {
            BoolValue.encode({ value: message.allowDdl! }, writer.uint32(18).fork()).ldelim();
        }
        if (message.allowIntrospectionFunctions !== undefined) {
            BoolValue.encode(
                { value: message.allowIntrospectionFunctions! },
                writer.uint32(770).fork(),
            ).ldelim();
        }
        if (message.connectTimeout !== undefined) {
            Int64Value.encode(
                { value: message.connectTimeout! },
                writer.uint32(314).fork(),
            ).ldelim();
        }
        if (message.connectTimeoutWithFailover !== undefined) {
            Int64Value.encode(
                { value: message.connectTimeoutWithFailover! },
                writer.uint32(778).fork(),
            ).ldelim();
        }
        if (message.receiveTimeout !== undefined) {
            Int64Value.encode(
                { value: message.receiveTimeout! },
                writer.uint32(322).fork(),
            ).ldelim();
        }
        if (message.sendTimeout !== undefined) {
            Int64Value.encode({ value: message.sendTimeout! }, writer.uint32(330).fork()).ldelim();
        }
        if (message.idleConnectionTimeout !== undefined) {
            Int64Value.encode(
                { value: message.idleConnectionTimeout! },
                writer.uint32(1138).fork(),
            ).ldelim();
        }
        if (message.timeoutBeforeCheckingExecutionSpeed !== undefined) {
            Int64Value.encode(
                { value: message.timeoutBeforeCheckingExecutionSpeed! },
                writer.uint32(786).fork(),
            ).ldelim();
        }
        if (message.insertQuorum !== undefined) {
            Int64Value.encode({ value: message.insertQuorum! }, writer.uint32(26).fork()).ldelim();
        }
        if (message.insertQuorumTimeout !== undefined) {
            Int64Value.encode(
                { value: message.insertQuorumTimeout! },
                writer.uint32(34).fork(),
            ).ldelim();
        }
        if (message.insertQuorumParallel !== undefined) {
            BoolValue.encode(
                { value: message.insertQuorumParallel! },
                writer.uint32(794).fork(),
            ).ldelim();
        }
        if (message.selectSequentialConsistency !== undefined) {
            BoolValue.encode(
                { value: message.selectSequentialConsistency! },
                writer.uint32(42).fork(),
            ).ldelim();
        }
        if (message.replicationAlterPartitionsSync !== undefined) {
            Int64Value.encode(
                { value: message.replicationAlterPartitionsSync! },
                writer.uint32(338).fork(),
            ).ldelim();
        }
        if (message.maxReplicaDelayForDistributedQueries !== undefined) {
            Int64Value.encode(
                { value: message.maxReplicaDelayForDistributedQueries! },
                writer.uint32(50).fork(),
            ).ldelim();
        }
        if (message.fallbackToStaleReplicasForDistributedQueries !== undefined) {
            BoolValue.encode(
                { value: message.fallbackToStaleReplicasForDistributedQueries! },
                writer.uint32(58).fork(),
            ).ldelim();
        }
        if (message.distributedProductMode !== 0) {
            writer.uint32(344).int32(message.distributedProductMode);
        }
        if (message.distributedAggregationMemoryEfficient !== undefined) {
            BoolValue.encode(
                { value: message.distributedAggregationMemoryEfficient! },
                writer.uint32(578).fork(),
            ).ldelim();
        }
        if (message.distributedDdlTaskTimeout !== undefined) {
            Int64Value.encode(
                { value: message.distributedDdlTaskTimeout! },
                writer.uint32(586).fork(),
            ).ldelim();
        }
        if (message.distributedDdlOutputMode !== 0) {
            writer.uint32(1352).int32(message.distributedDdlOutputMode);
        }
        if (message.skipUnavailableShards !== undefined) {
            BoolValue.encode(
                { value: message.skipUnavailableShards! },
                writer.uint32(650).fork(),
            ).ldelim();
        }
        if (message.useHedgedRequests !== undefined) {
            BoolValue.encode(
                { value: message.useHedgedRequests! },
                writer.uint32(1130).fork(),
            ).ldelim();
        }
        if (message.hedgedConnectionTimeoutMs !== undefined) {
            Int64Value.encode(
                { value: message.hedgedConnectionTimeoutMs! },
                writer.uint32(1146).fork(),
            ).ldelim();
        }
        if (message.loadBalancing !== 0) {
            writer.uint32(1152).int32(message.loadBalancing);
        }
        if (message.preferLocalhostReplica !== undefined) {
            BoolValue.encode(
                { value: message.preferLocalhostReplica! },
                writer.uint32(1162).fork(),
            ).ldelim();
        }
        if (message.compileExpressions !== undefined) {
            BoolValue.encode(
                { value: message.compileExpressions! },
                writer.uint32(370).fork(),
            ).ldelim();
        }
        if (message.minCountToCompileExpression !== undefined) {
            Int64Value.encode(
                { value: message.minCountToCompileExpression! },
                writer.uint32(378).fork(),
            ).ldelim();
        }
        if (message.maxBlockSize !== undefined) {
            Int64Value.encode({ value: message.maxBlockSize! }, writer.uint32(74).fork()).ldelim();
        }
        if (message.minInsertBlockSizeRows !== undefined) {
            Int64Value.encode(
                { value: message.minInsertBlockSizeRows! },
                writer.uint32(386).fork(),
            ).ldelim();
        }
        if (message.minInsertBlockSizeBytes !== undefined) {
            Int64Value.encode(
                { value: message.minInsertBlockSizeBytes! },
                writer.uint32(394).fork(),
            ).ldelim();
        }
        if (message.maxInsertBlockSize !== undefined) {
            Int64Value.encode(
                { value: message.maxInsertBlockSize! },
                writer.uint32(82).fork(),
            ).ldelim();
        }
        if (message.maxPartitionsPerInsertBlock !== undefined) {
            Int64Value.encode(
                { value: message.maxPartitionsPerInsertBlock! },
                writer.uint32(818).fork(),
            ).ldelim();
        }
        if (message.minBytesToUseDirectIo !== undefined) {
            Int64Value.encode(
                { value: message.minBytesToUseDirectIo! },
                writer.uint32(402).fork(),
            ).ldelim();
        }
        if (message.useUncompressedCache !== undefined) {
            BoolValue.encode(
                { value: message.useUncompressedCache! },
                writer.uint32(410).fork(),
            ).ldelim();
        }
        if (message.mergeTreeMaxRowsToUseCache !== undefined) {
            Int64Value.encode(
                { value: message.mergeTreeMaxRowsToUseCache! },
                writer.uint32(418).fork(),
            ).ldelim();
        }
        if (message.mergeTreeMaxBytesToUseCache !== undefined) {
            Int64Value.encode(
                { value: message.mergeTreeMaxBytesToUseCache! },
                writer.uint32(426).fork(),
            ).ldelim();
        }
        if (message.mergeTreeMinRowsForConcurrentRead !== undefined) {
            Int64Value.encode(
                { value: message.mergeTreeMinRowsForConcurrentRead! },
                writer.uint32(434).fork(),
            ).ldelim();
        }
        if (message.mergeTreeMinBytesForConcurrentRead !== undefined) {
            Int64Value.encode(
                { value: message.mergeTreeMinBytesForConcurrentRead! },
                writer.uint32(442).fork(),
            ).ldelim();
        }
        if (message.maxBytesBeforeExternalGroupBy !== undefined) {
            Int64Value.encode(
                { value: message.maxBytesBeforeExternalGroupBy! },
                writer.uint32(594).fork(),
            ).ldelim();
        }
        if (message.maxBytesBeforeExternalSort !== undefined) {
            Int64Value.encode(
                { value: message.maxBytesBeforeExternalSort! },
                writer.uint32(602).fork(),
            ).ldelim();
        }
        if (message.groupByTwoLevelThreshold !== undefined) {
            Int64Value.encode(
                { value: message.groupByTwoLevelThreshold! },
                writer.uint32(610).fork(),
            ).ldelim();
        }
        if (message.groupByTwoLevelThresholdBytes !== undefined) {
            Int64Value.encode(
                { value: message.groupByTwoLevelThresholdBytes! },
                writer.uint32(618).fork(),
            ).ldelim();
        }
        if (message.deduplicateBlocksInDependentMaterializedViews !== undefined) {
            BoolValue.encode(
                { value: message.deduplicateBlocksInDependentMaterializedViews! },
                writer.uint32(810).fork(),
            ).ldelim();
        }
        if (message.localFilesystemReadMethod !== 0) {
            writer.uint32(1032).int32(message.localFilesystemReadMethod);
        }
        if (message.remoteFilesystemReadMethod !== 0) {
            writer.uint32(1080).int32(message.remoteFilesystemReadMethod);
        }
        if (message.priority !== undefined) {
            Int64Value.encode({ value: message.priority! }, writer.uint32(450).fork()).ldelim();
        }
        if (message.maxThreads !== undefined) {
            Int64Value.encode({ value: message.maxThreads! }, writer.uint32(66).fork()).ldelim();
        }
        if (message.maxInsertThreads !== undefined) {
            Int64Value.encode(
                { value: message.maxInsertThreads! },
                writer.uint32(1122).fork(),
            ).ldelim();
        }
        if (message.maxMemoryUsage !== undefined) {
            Int64Value.encode(
                { value: message.maxMemoryUsage! },
                writer.uint32(90).fork(),
            ).ldelim();
        }
        if (message.maxMemoryUsageForUser !== undefined) {
            Int64Value.encode(
                { value: message.maxMemoryUsageForUser! },
                writer.uint32(98).fork(),
            ).ldelim();
        }
        if (message.memoryOvercommitRatioDenominator !== undefined) {
            Int64Value.encode(
                { value: message.memoryOvercommitRatioDenominator! },
                writer.uint32(1090).fork(),
            ).ldelim();
        }
        if (message.memoryOvercommitRatioDenominatorForUser !== undefined) {
            Int64Value.encode(
                { value: message.memoryOvercommitRatioDenominatorForUser! },
                writer.uint32(1098).fork(),
            ).ldelim();
        }
        if (message.memoryUsageOvercommitMaxWaitMicroseconds !== undefined) {
            Int64Value.encode(
                { value: message.memoryUsageOvercommitMaxWaitMicroseconds! },
                writer.uint32(1106).fork(),
            ).ldelim();
        }
        if (message.maxNetworkBandwidth !== undefined) {
            Int64Value.encode(
                { value: message.maxNetworkBandwidth! },
                writer.uint32(458).fork(),
            ).ldelim();
        }
        if (message.maxNetworkBandwidthForUser !== undefined) {
            Int64Value.encode(
                { value: message.maxNetworkBandwidthForUser! },
                writer.uint32(466).fork(),
            ).ldelim();
        }
        if (message.maxTemporaryDataOnDiskSizeForQuery !== undefined) {
            Int64Value.encode(
                { value: message.maxTemporaryDataOnDiskSizeForQuery! },
                writer.uint32(1066).fork(),
            ).ldelim();
        }
        if (message.maxTemporaryDataOnDiskSizeForUser !== undefined) {
            Int64Value.encode(
                { value: message.maxTemporaryDataOnDiskSizeForUser! },
                writer.uint32(1058).fork(),
            ).ldelim();
        }
        if (message.maxConcurrentQueriesForUser !== undefined) {
            Int64Value.encode(
                { value: message.maxConcurrentQueriesForUser! },
                writer.uint32(826).fork(),
            ).ldelim();
        }
        if (message.forceIndexByDate !== undefined) {
            BoolValue.encode(
                { value: message.forceIndexByDate! },
                writer.uint32(474).fork(),
            ).ldelim();
        }
        if (message.forcePrimaryKey !== undefined) {
            BoolValue.encode(
                { value: message.forcePrimaryKey! },
                writer.uint32(482).fork(),
            ).ldelim();
        }
        if (message.maxRowsToRead !== undefined) {
            Int64Value.encode(
                { value: message.maxRowsToRead! },
                writer.uint32(106).fork(),
            ).ldelim();
        }
        if (message.maxBytesToRead !== undefined) {
            Int64Value.encode(
                { value: message.maxBytesToRead! },
                writer.uint32(114).fork(),
            ).ldelim();
        }
        if (message.readOverflowMode !== 0) {
            writer.uint32(120).int32(message.readOverflowMode);
        }
        if (message.maxRowsToGroupBy !== undefined) {
            Int64Value.encode(
                { value: message.maxRowsToGroupBy! },
                writer.uint32(130).fork(),
            ).ldelim();
        }
        if (message.groupByOverflowMode !== 0) {
            writer.uint32(136).int32(message.groupByOverflowMode);
        }
        if (message.maxRowsToSort !== undefined) {
            Int64Value.encode(
                { value: message.maxRowsToSort! },
                writer.uint32(146).fork(),
            ).ldelim();
        }
        if (message.maxBytesToSort !== undefined) {
            Int64Value.encode(
                { value: message.maxBytesToSort! },
                writer.uint32(154).fork(),
            ).ldelim();
        }
        if (message.sortOverflowMode !== 0) {
            writer.uint32(160).int32(message.sortOverflowMode);
        }
        if (message.maxResultRows !== undefined) {
            Int64Value.encode(
                { value: message.maxResultRows! },
                writer.uint32(170).fork(),
            ).ldelim();
        }
        if (message.maxResultBytes !== undefined) {
            Int64Value.encode(
                { value: message.maxResultBytes! },
                writer.uint32(178).fork(),
            ).ldelim();
        }
        if (message.resultOverflowMode !== 0) {
            writer.uint32(184).int32(message.resultOverflowMode);
        }
        if (message.maxRowsInDistinct !== undefined) {
            Int64Value.encode(
                { value: message.maxRowsInDistinct! },
                writer.uint32(194).fork(),
            ).ldelim();
        }
        if (message.maxBytesInDistinct !== undefined) {
            Int64Value.encode(
                { value: message.maxBytesInDistinct! },
                writer.uint32(202).fork(),
            ).ldelim();
        }
        if (message.distinctOverflowMode !== 0) {
            writer.uint32(208).int32(message.distinctOverflowMode);
        }
        if (message.maxRowsToTransfer !== undefined) {
            Int64Value.encode(
                { value: message.maxRowsToTransfer! },
                writer.uint32(218).fork(),
            ).ldelim();
        }
        if (message.maxBytesToTransfer !== undefined) {
            Int64Value.encode(
                { value: message.maxBytesToTransfer! },
                writer.uint32(226).fork(),
            ).ldelim();
        }
        if (message.transferOverflowMode !== 0) {
            writer.uint32(232).int32(message.transferOverflowMode);
        }
        if (message.maxExecutionTime !== undefined) {
            Int64Value.encode(
                { value: message.maxExecutionTime! },
                writer.uint32(242).fork(),
            ).ldelim();
        }
        if (message.timeoutOverflowMode !== 0) {
            writer.uint32(248).int32(message.timeoutOverflowMode);
        }
        if (message.maxRowsInSet !== undefined) {
            Int64Value.encode({ value: message.maxRowsInSet! }, writer.uint32(698).fork()).ldelim();
        }
        if (message.maxBytesInSet !== undefined) {
            Int64Value.encode(
                { value: message.maxBytesInSet! },
                writer.uint32(706).fork(),
            ).ldelim();
        }
        if (message.setOverflowMode !== 0) {
            writer.uint32(712).int32(message.setOverflowMode);
        }
        if (message.maxRowsInJoin !== undefined) {
            Int64Value.encode(
                { value: message.maxRowsInJoin! },
                writer.uint32(722).fork(),
            ).ldelim();
        }
        if (message.maxBytesInJoin !== undefined) {
            Int64Value.encode(
                { value: message.maxBytesInJoin! },
                writer.uint32(730).fork(),
            ).ldelim();
        }
        if (message.joinOverflowMode !== 0) {
            writer.uint32(736).int32(message.joinOverflowMode);
        }
        if (message.maxColumnsToRead !== undefined) {
            Int64Value.encode(
                { value: message.maxColumnsToRead! },
                writer.uint32(258).fork(),
            ).ldelim();
        }
        if (message.maxTemporaryColumns !== undefined) {
            Int64Value.encode(
                { value: message.maxTemporaryColumns! },
                writer.uint32(266).fork(),
            ).ldelim();
        }
        if (message.maxTemporaryNonConstColumns !== undefined) {
            Int64Value.encode(
                { value: message.maxTemporaryNonConstColumns! },
                writer.uint32(274).fork(),
            ).ldelim();
        }
        if (message.maxQuerySize !== undefined) {
            Int64Value.encode({ value: message.maxQuerySize! }, writer.uint32(282).fork()).ldelim();
        }
        if (message.maxAstDepth !== undefined) {
            Int64Value.encode({ value: message.maxAstDepth! }, writer.uint32(290).fork()).ldelim();
        }
        if (message.maxAstElements !== undefined) {
            Int64Value.encode(
                { value: message.maxAstElements! },
                writer.uint32(298).fork(),
            ).ldelim();
        }
        if (message.maxExpandedAstElements !== undefined) {
            Int64Value.encode(
                { value: message.maxExpandedAstElements! },
                writer.uint32(306).fork(),
            ).ldelim();
        }
        if (message.maxParserDepth !== undefined) {
            Int64Value.encode(
                { value: message.maxParserDepth! },
                writer.uint32(1074).fork(),
            ).ldelim();
        }
        if (message.minExecutionSpeed !== undefined) {
            Int64Value.encode(
                { value: message.minExecutionSpeed! },
                writer.uint32(674).fork(),
            ).ldelim();
        }
        if (message.minExecutionSpeedBytes !== undefined) {
            Int64Value.encode(
                { value: message.minExecutionSpeedBytes! },
                writer.uint32(682).fork(),
            ).ldelim();
        }
        if (message.inputFormatValuesInterpretExpressions !== undefined) {
            BoolValue.encode(
                { value: message.inputFormatValuesInterpretExpressions! },
                writer.uint32(490).fork(),
            ).ldelim();
        }
        if (message.inputFormatDefaultsForOmittedFields !== undefined) {
            BoolValue.encode(
                { value: message.inputFormatDefaultsForOmittedFields! },
                writer.uint32(498).fork(),
            ).ldelim();
        }
        if (message.inputFormatNullAsDefault !== undefined) {
            BoolValue.encode(
                { value: message.inputFormatNullAsDefault! },
                writer.uint32(850).fork(),
            ).ldelim();
        }
        if (message.inputFormatWithNamesUseHeader !== undefined) {
            BoolValue.encode(
                { value: message.inputFormatWithNamesUseHeader! },
                writer.uint32(866).fork(),
            ).ldelim();
        }
        if (message.outputFormatJsonQuote64bitIntegers !== undefined) {
            BoolValue.encode(
                { value: message.outputFormatJsonQuote64bitIntegers! },
                writer.uint32(506).fork(),
            ).ldelim();
        }
        if (message.outputFormatJsonQuoteDenormals !== undefined) {
            BoolValue.encode(
                { value: message.outputFormatJsonQuoteDenormals! },
                writer.uint32(514).fork(),
            ).ldelim();
        }
        if (message.dateTimeInputFormat !== 0) {
            writer.uint32(856).int32(message.dateTimeInputFormat);
        }
        if (message.dateTimeOutputFormat !== 0) {
            writer.uint32(872).int32(message.dateTimeOutputFormat);
        }
        if (message.lowCardinalityAllowInNativeFormat !== undefined) {
            BoolValue.encode(
                { value: message.lowCardinalityAllowInNativeFormat! },
                writer.uint32(626).fork(),
            ).ldelim();
        }
        if (message.emptyResultForAggregationByEmptySet !== undefined) {
            BoolValue.encode(
                { value: message.emptyResultForAggregationByEmptySet! },
                writer.uint32(634).fork(),
            ).ldelim();
        }
        if (message.formatRegexp !== '') {
            writer.uint32(914).string(message.formatRegexp);
        }
        if (message.formatRegexpEscapingRule !== 0) {
            writer.uint32(920).int32(message.formatRegexpEscapingRule);
        }
        if (message.formatRegexpSkipUnmatched !== undefined) {
            BoolValue.encode(
                { value: message.formatRegexpSkipUnmatched! },
                writer.uint32(930).fork(),
            ).ldelim();
        }
        if (message.inputFormatParallelParsing !== undefined) {
            BoolValue.encode(
                { value: message.inputFormatParallelParsing! },
                writer.uint32(1018).fork(),
            ).ldelim();
        }
        if (message.inputFormatImportNestedJson !== undefined) {
            BoolValue.encode(
                { value: message.inputFormatImportNestedJson! },
                writer.uint32(1026).fork(),
            ).ldelim();
        }
        if (message.formatAvroSchemaRegistryUrl !== '') {
            writer.uint32(1186).string(message.formatAvroSchemaRegistryUrl);
        }
        if (message.dataTypeDefaultNullable !== undefined) {
            BoolValue.encode(
                { value: message.dataTypeDefaultNullable! },
                writer.uint32(1194).fork(),
            ).ldelim();
        }
        if (message.httpConnectionTimeout !== undefined) {
            Int64Value.encode(
                { value: message.httpConnectionTimeout! },
                writer.uint32(522).fork(),
            ).ldelim();
        }
        if (message.httpReceiveTimeout !== undefined) {
            Int64Value.encode(
                { value: message.httpReceiveTimeout! },
                writer.uint32(530).fork(),
            ).ldelim();
        }
        if (message.httpSendTimeout !== undefined) {
            Int64Value.encode(
                { value: message.httpSendTimeout! },
                writer.uint32(538).fork(),
            ).ldelim();
        }
        if (message.enableHttpCompression !== undefined) {
            BoolValue.encode(
                { value: message.enableHttpCompression! },
                writer.uint32(546).fork(),
            ).ldelim();
        }
        if (message.sendProgressInHttpHeaders !== undefined) {
            BoolValue.encode(
                { value: message.sendProgressInHttpHeaders! },
                writer.uint32(554).fork(),
            ).ldelim();
        }
        if (message.httpHeadersProgressInterval !== undefined) {
            Int64Value.encode(
                { value: message.httpHeadersProgressInterval! },
                writer.uint32(562).fork(),
            ).ldelim();
        }
        if (message.addHttpCorsHeader !== undefined) {
            BoolValue.encode(
                { value: message.addHttpCorsHeader! },
                writer.uint32(570).fork(),
            ).ldelim();
        }
        if (message.cancelHttpReadonlyQueriesOnClientClose !== undefined) {
            BoolValue.encode(
                { value: message.cancelHttpReadonlyQueriesOnClientClose! },
                writer.uint32(890).fork(),
            ).ldelim();
        }
        if (message.maxHttpGetRedirects !== undefined) {
            Int64Value.encode(
                { value: message.maxHttpGetRedirects! },
                writer.uint32(898).fork(),
            ).ldelim();
        }
        if (message.httpMaxFieldNameSize !== undefined) {
            Int64Value.encode(
                { value: message.httpMaxFieldNameSize! },
                writer.uint32(1202).fork(),
            ).ldelim();
        }
        if (message.httpMaxFieldValueSize !== undefined) {
            Int64Value.encode(
                { value: message.httpMaxFieldValueSize! },
                writer.uint32(1210).fork(),
            ).ldelim();
        }
        if (message.quotaMode !== 0) {
            writer.uint32(640).int32(message.quotaMode);
        }
        if (message.asyncInsert !== undefined) {
            BoolValue.encode({ value: message.asyncInsert! }, writer.uint32(938).fork()).ldelim();
        }
        if (message.waitForAsyncInsert !== undefined) {
            BoolValue.encode(
                { value: message.waitForAsyncInsert! },
                writer.uint32(954).fork(),
            ).ldelim();
        }
        if (message.waitForAsyncInsertTimeout !== undefined) {
            Int64Value.encode(
                { value: message.waitForAsyncInsertTimeout! },
                writer.uint32(962).fork(),
            ).ldelim();
        }
        if (message.asyncInsertMaxDataSize !== undefined) {
            Int64Value.encode(
                { value: message.asyncInsertMaxDataSize! },
                writer.uint32(970).fork(),
            ).ldelim();
        }
        if (message.asyncInsertBusyTimeout !== undefined) {
            Int64Value.encode(
                { value: message.asyncInsertBusyTimeout! },
                writer.uint32(978).fork(),
            ).ldelim();
        }
        if (message.asyncInsertUseAdaptiveBusyTimeout !== undefined) {
            BoolValue.encode(
                { value: message.asyncInsertUseAdaptiveBusyTimeout! },
                writer.uint32(1218).fork(),
            ).ldelim();
        }
        if (message.logQueryThreads !== undefined) {
            BoolValue.encode(
                { value: message.logQueryThreads! },
                writer.uint32(1114).fork(),
            ).ldelim();
        }
        if (message.logQueryViews !== undefined) {
            BoolValue.encode(
                { value: message.logQueryViews! },
                writer.uint32(1170).fork(),
            ).ldelim();
        }
        if (message.logQueriesProbability !== undefined) {
            DoubleValue.encode(
                { value: message.logQueriesProbability! },
                writer.uint32(1226).fork(),
            ).ldelim();
        }
        if (message.logProcessorsProfiles !== undefined) {
            BoolValue.encode(
                { value: message.logProcessorsProfiles! },
                writer.uint32(1234).fork(),
            ).ldelim();
        }
        if (message.useQueryCache !== undefined) {
            BoolValue.encode(
                { value: message.useQueryCache! },
                writer.uint32(1242).fork(),
            ).ldelim();
        }
        if (message.enableReadsFromQueryCache !== undefined) {
            BoolValue.encode(
                { value: message.enableReadsFromQueryCache! },
                writer.uint32(1250).fork(),
            ).ldelim();
        }
        if (message.enableWritesToQueryCache !== undefined) {
            BoolValue.encode(
                { value: message.enableWritesToQueryCache! },
                writer.uint32(1258).fork(),
            ).ldelim();
        }
        if (message.queryCacheMinQueryRuns !== undefined) {
            Int64Value.encode(
                { value: message.queryCacheMinQueryRuns! },
                writer.uint32(1266).fork(),
            ).ldelim();
        }
        if (message.queryCacheMinQueryDuration !== undefined) {
            Int64Value.encode(
                { value: message.queryCacheMinQueryDuration! },
                writer.uint32(1274).fork(),
            ).ldelim();
        }
        if (message.queryCacheTtl !== undefined) {
            Int64Value.encode(
                { value: message.queryCacheTtl! },
                writer.uint32(1282).fork(),
            ).ldelim();
        }
        if (message.queryCacheMaxEntries !== undefined) {
            Int64Value.encode(
                { value: message.queryCacheMaxEntries! },
                writer.uint32(1290).fork(),
            ).ldelim();
        }
        if (message.queryCacheMaxSizeInBytes !== undefined) {
            Int64Value.encode(
                { value: message.queryCacheMaxSizeInBytes! },
                writer.uint32(1298).fork(),
            ).ldelim();
        }
        if (message.queryCacheTag !== '') {
            writer.uint32(1306).string(message.queryCacheTag);
        }
        if (message.queryCacheShareBetweenUsers !== undefined) {
            BoolValue.encode(
                { value: message.queryCacheShareBetweenUsers! },
                writer.uint32(1314).fork(),
            ).ldelim();
        }
        if (message.queryCacheNondeterministicFunctionHandling !== 0) {
            writer.uint32(1320).int32(message.queryCacheNondeterministicFunctionHandling);
        }
        if (message.queryCacheSystemTableHandling !== 0) {
            writer.uint32(1344).int32(message.queryCacheSystemTableHandling);
        }
        if (message.countDistinctImplementation !== 0) {
            writer.uint32(688).int32(message.countDistinctImplementation);
        }
        if (message.joinedSubqueryRequiresAlias !== undefined) {
            BoolValue.encode(
                { value: message.joinedSubqueryRequiresAlias! },
                writer.uint32(746).fork(),
            ).ldelim();
        }
        if (message.joinUseNulls !== undefined) {
            BoolValue.encode({ value: message.joinUseNulls! }, writer.uint32(754).fork()).ldelim();
        }
        if (message.transformNullIn !== undefined) {
            BoolValue.encode(
                { value: message.transformNullIn! },
                writer.uint32(762).fork(),
            ).ldelim();
        }
        if (message.insertNullAsDefault !== undefined) {
            BoolValue.encode(
                { value: message.insertNullAsDefault! },
                writer.uint32(802).fork(),
            ).ldelim();
        }
        writer.uint32(834).fork();
        for (const v of message.joinAlgorithm) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.anyJoinDistinctRightTableKeys !== undefined) {
            BoolValue.encode(
                { value: message.anyJoinDistinctRightTableKeys! },
                writer.uint32(842).fork(),
            ).ldelim();
        }
        if (message.allowSuspiciousLowCardinalityTypes !== undefined) {
            BoolValue.encode(
                { value: message.allowSuspiciousLowCardinalityTypes! },
                writer.uint32(882).fork(),
            ).ldelim();
        }
        if (message.flattenNested !== undefined) {
            BoolValue.encode({ value: message.flattenNested! }, writer.uint32(906).fork()).ldelim();
        }
        if (message.memoryProfilerStep !== undefined) {
            Int64Value.encode(
                { value: message.memoryProfilerStep! },
                writer.uint32(994).fork(),
            ).ldelim();
        }
        if (message.memoryProfilerSampleProbability !== undefined) {
            DoubleValue.encode(
                { value: message.memoryProfilerSampleProbability! },
                writer.uint32(1002).fork(),
            ).ldelim();
        }
        if (message.maxFinalThreads !== undefined) {
            Int64Value.encode(
                { value: message.maxFinalThreads! },
                writer.uint32(1010).fork(),
            ).ldelim();
        }
        if (message.maxReadBufferSize !== undefined) {
            Int64Value.encode(
                { value: message.maxReadBufferSize! },
                writer.uint32(1042).fork(),
            ).ldelim();
        }
        if (message.insertKeeperMaxRetries !== undefined) {
            Int64Value.encode(
                { value: message.insertKeeperMaxRetries! },
                writer.uint32(1050).fork(),
            ).ldelim();
        }
        if (message.doNotMergeAcrossPartitionsSelectFinal !== undefined) {
            BoolValue.encode(
                { value: message.doNotMergeAcrossPartitionsSelectFinal! },
                writer.uint32(1178).fork(),
            ).ldelim();
        }
        if (message.ignoreMaterializedViewsWithDroppedTargetTable !== undefined) {
            BoolValue.encode(
                { value: message.ignoreMaterializedViewsWithDroppedTargetTable! },
                writer.uint32(1330).fork(),
            ).ldelim();
        }
        if (message.enableAnalyzer !== undefined) {
            BoolValue.encode(
                { value: message.enableAnalyzer! },
                writer.uint32(1338).fork(),
            ).ldelim();
        }
        if (message.s3UseAdaptiveTimeouts !== undefined) {
            BoolValue.encode(
                { value: message.s3UseAdaptiveTimeouts! },
                writer.uint32(1362).fork(),
            ).ldelim();
        }
        if (message.final !== undefined) {
            BoolValue.encode({ value: message.final! }, writer.uint32(1370).fork()).ldelim();
        }
        if (message.useHivePartitioning !== undefined) {
            BoolValue.encode(
                { value: message.useHivePartitioning! },
                writer.uint32(1378).fork(),
            ).ldelim();
        }
        if (message.showDataLakeCatalogsInSystemTables !== undefined) {
            BoolValue.encode(
                { value: message.showDataLakeCatalogsInSystemTables! },
                writer.uint32(1386).fork(),
            ).ldelim();
        }
        if (message.compile !== undefined) {
            BoolValue.encode({ value: message.compile! }, writer.uint32(354).fork()).ldelim();
        }
        if (message.minCountToCompile !== undefined) {
            Int64Value.encode(
                { value: message.minCountToCompile! },
                writer.uint32(362).fork(),
            ).ldelim();
        }
        if (message.asyncInsertThreads !== undefined) {
            Int64Value.encode(
                { value: message.asyncInsertThreads! },
                writer.uint32(946).fork(),
            ).ldelim();
        }
        if (message.asyncInsertStaleTimeout !== undefined) {
            Int64Value.encode(
                { value: message.asyncInsertStaleTimeout! },
                writer.uint32(986).fork(),
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
                        reader.uint32(),
                    ).value;
                    break;
                case 39:
                    message.connectTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 97:
                    message.connectTimeoutWithFailover = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 40:
                    message.receiveTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 41:
                    message.sendTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 142:
                    message.idleConnectionTimeout = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 98:
                    message.timeoutBeforeCheckingExecutionSpeed = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 3:
                    message.insertQuorum = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.insertQuorumTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 99:
                    message.insertQuorumParallel = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.selectSequentialConsistency = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 42:
                    message.replicationAlterPartitionsSync = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 6:
                    message.maxReplicaDelayForDistributedQueries = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 7:
                    message.fallbackToStaleReplicasForDistributedQueries = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 43:
                    message.distributedProductMode = reader.int32() as any;
                    break;
                case 72:
                    message.distributedAggregationMemoryEfficient = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 73:
                    message.distributedDdlTaskTimeout = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 169:
                    message.distributedDdlOutputMode = reader.int32() as any;
                    break;
                case 81:
                    message.skipUnavailableShards = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 141:
                    message.useHedgedRequests = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 143:
                    message.hedgedConnectionTimeoutMs = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 144:
                    message.loadBalancing = reader.int32() as any;
                    break;
                case 145:
                    message.preferLocalhostReplica = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 46:
                    message.compileExpressions = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 47:
                    message.minCountToCompileExpression = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 9:
                    message.maxBlockSize = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 48:
                    message.minInsertBlockSizeRows = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 49:
                    message.minInsertBlockSizeBytes = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 10:
                    message.maxInsertBlockSize = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 102:
                    message.maxPartitionsPerInsertBlock = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 50:
                    message.minBytesToUseDirectIo = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 51:
                    message.useUncompressedCache = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 52:
                    message.mergeTreeMaxRowsToUseCache = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 53:
                    message.mergeTreeMaxBytesToUseCache = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 54:
                    message.mergeTreeMinRowsForConcurrentRead = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 55:
                    message.mergeTreeMinBytesForConcurrentRead = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 74:
                    message.maxBytesBeforeExternalGroupBy = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 75:
                    message.maxBytesBeforeExternalSort = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 76:
                    message.groupByTwoLevelThreshold = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 77:
                    message.groupByTwoLevelThresholdBytes = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 101:
                    message.deduplicateBlocksInDependentMaterializedViews = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 129:
                    message.localFilesystemReadMethod = reader.int32() as any;
                    break;
                case 135:
                    message.remoteFilesystemReadMethod = reader.int32() as any;
                    break;
                case 56:
                    message.priority = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.maxThreads = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 140:
                    message.maxInsertThreads = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.maxMemoryUsage = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.maxMemoryUsageForUser = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 136:
                    message.memoryOvercommitRatioDenominator = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 137:
                    message.memoryOvercommitRatioDenominatorForUser = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 138:
                    message.memoryUsageOvercommitMaxWaitMicroseconds = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 57:
                    message.maxNetworkBandwidth = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 58:
                    message.maxNetworkBandwidthForUser = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 133:
                    message.maxTemporaryDataOnDiskSizeForQuery = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 132:
                    message.maxTemporaryDataOnDiskSizeForUser = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 103:
                    message.maxConcurrentQueriesForUser = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 59:
                    message.forceIndexByDate = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 60:
                    message.forcePrimaryKey = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.maxRowsToRead = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 14:
                    message.maxBytesToRead = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 15:
                    message.readOverflowMode = reader.int32() as any;
                    break;
                case 16:
                    message.maxRowsToGroupBy = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 17:
                    message.groupByOverflowMode = reader.int32() as any;
                    break;
                case 18:
                    message.maxRowsToSort = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 19:
                    message.maxBytesToSort = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 20:
                    message.sortOverflowMode = reader.int32() as any;
                    break;
                case 21:
                    message.maxResultRows = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 22:
                    message.maxResultBytes = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 23:
                    message.resultOverflowMode = reader.int32() as any;
                    break;
                case 24:
                    message.maxRowsInDistinct = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 25:
                    message.maxBytesInDistinct = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 26:
                    message.distinctOverflowMode = reader.int32() as any;
                    break;
                case 27:
                    message.maxRowsToTransfer = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 28:
                    message.maxBytesToTransfer = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 29:
                    message.transferOverflowMode = reader.int32() as any;
                    break;
                case 30:
                    message.maxExecutionTime = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 31:
                    message.timeoutOverflowMode = reader.int32() as any;
                    break;
                case 87:
                    message.maxRowsInSet = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 88:
                    message.maxBytesInSet = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 89:
                    message.setOverflowMode = reader.int32() as any;
                    break;
                case 90:
                    message.maxRowsInJoin = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 91:
                    message.maxBytesInJoin = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 92:
                    message.joinOverflowMode = reader.int32() as any;
                    break;
                case 32:
                    message.maxColumnsToRead = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 33:
                    message.maxTemporaryColumns = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 34:
                    message.maxTemporaryNonConstColumns = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 35:
                    message.maxQuerySize = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 36:
                    message.maxAstDepth = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 37:
                    message.maxAstElements = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 38:
                    message.maxExpandedAstElements = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 134:
                    message.maxParserDepth = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 84:
                    message.minExecutionSpeed = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 85:
                    message.minExecutionSpeedBytes = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 61:
                    message.inputFormatValuesInterpretExpressions = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 62:
                    message.inputFormatDefaultsForOmittedFields = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 106:
                    message.inputFormatNullAsDefault = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 108:
                    message.inputFormatWithNamesUseHeader = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 63:
                    message.outputFormatJsonQuote64bitIntegers = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 64:
                    message.outputFormatJsonQuoteDenormals = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 107:
                    message.dateTimeInputFormat = reader.int32() as any;
                    break;
                case 109:
                    message.dateTimeOutputFormat = reader.int32() as any;
                    break;
                case 78:
                    message.lowCardinalityAllowInNativeFormat = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 79:
                    message.emptyResultForAggregationByEmptySet = BoolValue.decode(
                        reader,
                        reader.uint32(),
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
                        reader.uint32(),
                    ).value;
                    break;
                case 127:
                    message.inputFormatParallelParsing = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 128:
                    message.inputFormatImportNestedJson = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 148:
                    message.formatAvroSchemaRegistryUrl = reader.string();
                    break;
                case 149:
                    message.dataTypeDefaultNullable = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 65:
                    message.httpConnectionTimeout = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 66:
                    message.httpReceiveTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 67:
                    message.httpSendTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 68:
                    message.enableHttpCompression = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 69:
                    message.sendProgressInHttpHeaders = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 70:
                    message.httpHeadersProgressInterval = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 71:
                    message.addHttpCorsHeader = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 111:
                    message.cancelHttpReadonlyQueriesOnClientClose = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 112:
                    message.maxHttpGetRedirects = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 150:
                    message.httpMaxFieldNameSize = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 151:
                    message.httpMaxFieldValueSize = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 80:
                    message.quotaMode = reader.int32() as any;
                    break;
                case 117:
                    message.asyncInsert = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 119:
                    message.waitForAsyncInsert = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 120:
                    message.waitForAsyncInsertTimeout = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 121:
                    message.asyncInsertMaxDataSize = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 122:
                    message.asyncInsertBusyTimeout = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 152:
                    message.asyncInsertUseAdaptiveBusyTimeout = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 139:
                    message.logQueryThreads = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 146:
                    message.logQueryViews = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 153:
                    message.logQueriesProbability = DoubleValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 154:
                    message.logProcessorsProfiles = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 155:
                    message.useQueryCache = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 156:
                    message.enableReadsFromQueryCache = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 157:
                    message.enableWritesToQueryCache = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 158:
                    message.queryCacheMinQueryRuns = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 159:
                    message.queryCacheMinQueryDuration = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 160:
                    message.queryCacheTtl = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 161:
                    message.queryCacheMaxEntries = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 162:
                    message.queryCacheMaxSizeInBytes = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 163:
                    message.queryCacheTag = reader.string();
                    break;
                case 164:
                    message.queryCacheShareBetweenUsers = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 165:
                    message.queryCacheNondeterministicFunctionHandling = reader.int32() as any;
                    break;
                case 168:
                    message.queryCacheSystemTableHandling = reader.int32() as any;
                    break;
                case 86:
                    message.countDistinctImplementation = reader.int32() as any;
                    break;
                case 93:
                    message.joinedSubqueryRequiresAlias = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 94:
                    message.joinUseNulls = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 95:
                    message.transformNullIn = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 100:
                    message.insertNullAsDefault = BoolValue.decode(reader, reader.uint32()).value;
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
                        reader.uint32(),
                    ).value;
                    break;
                case 110:
                    message.allowSuspiciousLowCardinalityTypes = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 113:
                    message.flattenNested = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 124:
                    message.memoryProfilerStep = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 125:
                    message.memoryProfilerSampleProbability = DoubleValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 126:
                    message.maxFinalThreads = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 130:
                    message.maxReadBufferSize = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 131:
                    message.insertKeeperMaxRetries = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 147:
                    message.doNotMergeAcrossPartitionsSelectFinal = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 166:
                    message.ignoreMaterializedViewsWithDroppedTargetTable = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 167:
                    message.enableAnalyzer = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 170:
                    message.s3UseAdaptiveTimeouts = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 171:
                    message.final = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 172:
                    message.useHivePartitioning = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 173:
                    message.showDataLakeCatalogsInSystemTables = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 44:
                    message.compile = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 45:
                    message.minCountToCompile = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 118:
                    message.asyncInsertThreads = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 123:
                    message.asyncInsertStaleTimeout = Int64Value.decode(
                        reader,
                        reader.uint32(),
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
        message.idleConnectionTimeout =
            object.idleConnectionTimeout !== undefined && object.idleConnectionTimeout !== null
                ? Number(object.idleConnectionTimeout)
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
            object.insertQuorumTimeout !== undefined && object.insertQuorumTimeout !== null
                ? Number(object.insertQuorumTimeout)
                : undefined;
        message.insertQuorumParallel =
            object.insertQuorumParallel !== undefined && object.insertQuorumParallel !== null
                ? Boolean(object.insertQuorumParallel)
                : undefined;
        message.selectSequentialConsistency =
            object.selectSequentialConsistency !== undefined &&
            object.selectSequentialConsistency !== null
                ? Boolean(object.selectSequentialConsistency)
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
            object.distributedProductMode !== undefined && object.distributedProductMode !== null
                ? userSettings_DistributedProductModeFromJSON(object.distributedProductMode)
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
        message.distributedDdlOutputMode =
            object.distributedDdlOutputMode !== undefined &&
            object.distributedDdlOutputMode !== null
                ? userSettings_DistributedDdlOutputModeFromJSON(object.distributedDdlOutputMode)
                : 0;
        message.skipUnavailableShards =
            object.skipUnavailableShards !== undefined && object.skipUnavailableShards !== null
                ? Boolean(object.skipUnavailableShards)
                : undefined;
        message.useHedgedRequests =
            object.useHedgedRequests !== undefined && object.useHedgedRequests !== null
                ? Boolean(object.useHedgedRequests)
                : undefined;
        message.hedgedConnectionTimeoutMs =
            object.hedgedConnectionTimeoutMs !== undefined &&
            object.hedgedConnectionTimeoutMs !== null
                ? Number(object.hedgedConnectionTimeoutMs)
                : undefined;
        message.loadBalancing =
            object.loadBalancing !== undefined && object.loadBalancing !== null
                ? userSettings_LoadBalancingFromJSON(object.loadBalancing)
                : 0;
        message.preferLocalhostReplica =
            object.preferLocalhostReplica !== undefined && object.preferLocalhostReplica !== null
                ? Boolean(object.preferLocalhostReplica)
                : undefined;
        message.compileExpressions =
            object.compileExpressions !== undefined && object.compileExpressions !== null
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
            object.minInsertBlockSizeRows !== undefined && object.minInsertBlockSizeRows !== null
                ? Number(object.minInsertBlockSizeRows)
                : undefined;
        message.minInsertBlockSizeBytes =
            object.minInsertBlockSizeBytes !== undefined && object.minInsertBlockSizeBytes !== null
                ? Number(object.minInsertBlockSizeBytes)
                : undefined;
        message.maxInsertBlockSize =
            object.maxInsertBlockSize !== undefined && object.maxInsertBlockSize !== null
                ? Number(object.maxInsertBlockSize)
                : undefined;
        message.maxPartitionsPerInsertBlock =
            object.maxPartitionsPerInsertBlock !== undefined &&
            object.maxPartitionsPerInsertBlock !== null
                ? Number(object.maxPartitionsPerInsertBlock)
                : undefined;
        message.minBytesToUseDirectIo =
            object.minBytesToUseDirectIo !== undefined && object.minBytesToUseDirectIo !== null
                ? Number(object.minBytesToUseDirectIo)
                : undefined;
        message.useUncompressedCache =
            object.useUncompressedCache !== undefined && object.useUncompressedCache !== null
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
        message.deduplicateBlocksInDependentMaterializedViews =
            object.deduplicateBlocksInDependentMaterializedViews !== undefined &&
            object.deduplicateBlocksInDependentMaterializedViews !== null
                ? Boolean(object.deduplicateBlocksInDependentMaterializedViews)
                : undefined;
        message.localFilesystemReadMethod =
            object.localFilesystemReadMethod !== undefined &&
            object.localFilesystemReadMethod !== null
                ? userSettings_LocalFilesystemReadMethodFromJSON(object.localFilesystemReadMethod)
                : 0;
        message.remoteFilesystemReadMethod =
            object.remoteFilesystemReadMethod !== undefined &&
            object.remoteFilesystemReadMethod !== null
                ? userSettings_RemoteFilesystemReadMethodFromJSON(object.remoteFilesystemReadMethod)
                : 0;
        message.priority =
            object.priority !== undefined && object.priority !== null
                ? Number(object.priority)
                : undefined;
        message.maxThreads =
            object.maxThreads !== undefined && object.maxThreads !== null
                ? Number(object.maxThreads)
                : undefined;
        message.maxInsertThreads =
            object.maxInsertThreads !== undefined && object.maxInsertThreads !== null
                ? Number(object.maxInsertThreads)
                : undefined;
        message.maxMemoryUsage =
            object.maxMemoryUsage !== undefined && object.maxMemoryUsage !== null
                ? Number(object.maxMemoryUsage)
                : undefined;
        message.maxMemoryUsageForUser =
            object.maxMemoryUsageForUser !== undefined && object.maxMemoryUsageForUser !== null
                ? Number(object.maxMemoryUsageForUser)
                : undefined;
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
        message.maxNetworkBandwidth =
            object.maxNetworkBandwidth !== undefined && object.maxNetworkBandwidth !== null
                ? Number(object.maxNetworkBandwidth)
                : undefined;
        message.maxNetworkBandwidthForUser =
            object.maxNetworkBandwidthForUser !== undefined &&
            object.maxNetworkBandwidthForUser !== null
                ? Number(object.maxNetworkBandwidthForUser)
                : undefined;
        message.maxTemporaryDataOnDiskSizeForQuery =
            object.maxTemporaryDataOnDiskSizeForQuery !== undefined &&
            object.maxTemporaryDataOnDiskSizeForQuery !== null
                ? Number(object.maxTemporaryDataOnDiskSizeForQuery)
                : undefined;
        message.maxTemporaryDataOnDiskSizeForUser =
            object.maxTemporaryDataOnDiskSizeForUser !== undefined &&
            object.maxTemporaryDataOnDiskSizeForUser !== null
                ? Number(object.maxTemporaryDataOnDiskSizeForUser)
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
            object.groupByOverflowMode !== undefined && object.groupByOverflowMode !== null
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
            object.resultOverflowMode !== undefined && object.resultOverflowMode !== null
                ? userSettings_OverflowModeFromJSON(object.resultOverflowMode)
                : 0;
        message.maxRowsInDistinct =
            object.maxRowsInDistinct !== undefined && object.maxRowsInDistinct !== null
                ? Number(object.maxRowsInDistinct)
                : undefined;
        message.maxBytesInDistinct =
            object.maxBytesInDistinct !== undefined && object.maxBytesInDistinct !== null
                ? Number(object.maxBytesInDistinct)
                : undefined;
        message.distinctOverflowMode =
            object.distinctOverflowMode !== undefined && object.distinctOverflowMode !== null
                ? userSettings_OverflowModeFromJSON(object.distinctOverflowMode)
                : 0;
        message.maxRowsToTransfer =
            object.maxRowsToTransfer !== undefined && object.maxRowsToTransfer !== null
                ? Number(object.maxRowsToTransfer)
                : undefined;
        message.maxBytesToTransfer =
            object.maxBytesToTransfer !== undefined && object.maxBytesToTransfer !== null
                ? Number(object.maxBytesToTransfer)
                : undefined;
        message.transferOverflowMode =
            object.transferOverflowMode !== undefined && object.transferOverflowMode !== null
                ? userSettings_OverflowModeFromJSON(object.transferOverflowMode)
                : 0;
        message.maxExecutionTime =
            object.maxExecutionTime !== undefined && object.maxExecutionTime !== null
                ? Number(object.maxExecutionTime)
                : undefined;
        message.timeoutOverflowMode =
            object.timeoutOverflowMode !== undefined && object.timeoutOverflowMode !== null
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
        message.maxColumnsToRead =
            object.maxColumnsToRead !== undefined && object.maxColumnsToRead !== null
                ? Number(object.maxColumnsToRead)
                : undefined;
        message.maxTemporaryColumns =
            object.maxTemporaryColumns !== undefined && object.maxTemporaryColumns !== null
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
            object.maxExpandedAstElements !== undefined && object.maxExpandedAstElements !== null
                ? Number(object.maxExpandedAstElements)
                : undefined;
        message.maxParserDepth =
            object.maxParserDepth !== undefined && object.maxParserDepth !== null
                ? Number(object.maxParserDepth)
                : undefined;
        message.minExecutionSpeed =
            object.minExecutionSpeed !== undefined && object.minExecutionSpeed !== null
                ? Number(object.minExecutionSpeed)
                : undefined;
        message.minExecutionSpeedBytes =
            object.minExecutionSpeedBytes !== undefined && object.minExecutionSpeedBytes !== null
                ? Number(object.minExecutionSpeedBytes)
                : undefined;
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
        message.dateTimeInputFormat =
            object.dateTimeInputFormat !== undefined && object.dateTimeInputFormat !== null
                ? userSettings_DateTimeInputFormatFromJSON(object.dateTimeInputFormat)
                : 0;
        message.dateTimeOutputFormat =
            object.dateTimeOutputFormat !== undefined && object.dateTimeOutputFormat !== null
                ? userSettings_DateTimeOutputFormatFromJSON(object.dateTimeOutputFormat)
                : 0;
        message.lowCardinalityAllowInNativeFormat =
            object.lowCardinalityAllowInNativeFormat !== undefined &&
            object.lowCardinalityAllowInNativeFormat !== null
                ? Boolean(object.lowCardinalityAllowInNativeFormat)
                : undefined;
        message.emptyResultForAggregationByEmptySet =
            object.emptyResultForAggregationByEmptySet !== undefined &&
            object.emptyResultForAggregationByEmptySet !== null
                ? Boolean(object.emptyResultForAggregationByEmptySet)
                : undefined;
        message.formatRegexp =
            object.formatRegexp !== undefined && object.formatRegexp !== null
                ? String(object.formatRegexp)
                : '';
        message.formatRegexpEscapingRule =
            object.formatRegexpEscapingRule !== undefined &&
            object.formatRegexpEscapingRule !== null
                ? userSettings_FormatRegexpEscapingRuleFromJSON(object.formatRegexpEscapingRule)
                : 0;
        message.formatRegexpSkipUnmatched =
            object.formatRegexpSkipUnmatched !== undefined &&
            object.formatRegexpSkipUnmatched !== null
                ? Boolean(object.formatRegexpSkipUnmatched)
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
        message.formatAvroSchemaRegistryUrl =
            object.formatAvroSchemaRegistryUrl !== undefined &&
            object.formatAvroSchemaRegistryUrl !== null
                ? String(object.formatAvroSchemaRegistryUrl)
                : '';
        message.dataTypeDefaultNullable =
            object.dataTypeDefaultNullable !== undefined && object.dataTypeDefaultNullable !== null
                ? Boolean(object.dataTypeDefaultNullable)
                : undefined;
        message.httpConnectionTimeout =
            object.httpConnectionTimeout !== undefined && object.httpConnectionTimeout !== null
                ? Number(object.httpConnectionTimeout)
                : undefined;
        message.httpReceiveTimeout =
            object.httpReceiveTimeout !== undefined && object.httpReceiveTimeout !== null
                ? Number(object.httpReceiveTimeout)
                : undefined;
        message.httpSendTimeout =
            object.httpSendTimeout !== undefined && object.httpSendTimeout !== null
                ? Number(object.httpSendTimeout)
                : undefined;
        message.enableHttpCompression =
            object.enableHttpCompression !== undefined && object.enableHttpCompression !== null
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
            object.addHttpCorsHeader !== undefined && object.addHttpCorsHeader !== null
                ? Boolean(object.addHttpCorsHeader)
                : undefined;
        message.cancelHttpReadonlyQueriesOnClientClose =
            object.cancelHttpReadonlyQueriesOnClientClose !== undefined &&
            object.cancelHttpReadonlyQueriesOnClientClose !== null
                ? Boolean(object.cancelHttpReadonlyQueriesOnClientClose)
                : undefined;
        message.maxHttpGetRedirects =
            object.maxHttpGetRedirects !== undefined && object.maxHttpGetRedirects !== null
                ? Number(object.maxHttpGetRedirects)
                : undefined;
        message.httpMaxFieldNameSize =
            object.httpMaxFieldNameSize !== undefined && object.httpMaxFieldNameSize !== null
                ? Number(object.httpMaxFieldNameSize)
                : undefined;
        message.httpMaxFieldValueSize =
            object.httpMaxFieldValueSize !== undefined && object.httpMaxFieldValueSize !== null
                ? Number(object.httpMaxFieldValueSize)
                : undefined;
        message.quotaMode =
            object.quotaMode !== undefined && object.quotaMode !== null
                ? userSettings_QuotaModeFromJSON(object.quotaMode)
                : 0;
        message.asyncInsert =
            object.asyncInsert !== undefined && object.asyncInsert !== null
                ? Boolean(object.asyncInsert)
                : undefined;
        message.waitForAsyncInsert =
            object.waitForAsyncInsert !== undefined && object.waitForAsyncInsert !== null
                ? Boolean(object.waitForAsyncInsert)
                : undefined;
        message.waitForAsyncInsertTimeout =
            object.waitForAsyncInsertTimeout !== undefined &&
            object.waitForAsyncInsertTimeout !== null
                ? Number(object.waitForAsyncInsertTimeout)
                : undefined;
        message.asyncInsertMaxDataSize =
            object.asyncInsertMaxDataSize !== undefined && object.asyncInsertMaxDataSize !== null
                ? Number(object.asyncInsertMaxDataSize)
                : undefined;
        message.asyncInsertBusyTimeout =
            object.asyncInsertBusyTimeout !== undefined && object.asyncInsertBusyTimeout !== null
                ? Number(object.asyncInsertBusyTimeout)
                : undefined;
        message.asyncInsertUseAdaptiveBusyTimeout =
            object.asyncInsertUseAdaptiveBusyTimeout !== undefined &&
            object.asyncInsertUseAdaptiveBusyTimeout !== null
                ? Boolean(object.asyncInsertUseAdaptiveBusyTimeout)
                : undefined;
        message.logQueryThreads =
            object.logQueryThreads !== undefined && object.logQueryThreads !== null
                ? Boolean(object.logQueryThreads)
                : undefined;
        message.logQueryViews =
            object.logQueryViews !== undefined && object.logQueryViews !== null
                ? Boolean(object.logQueryViews)
                : undefined;
        message.logQueriesProbability =
            object.logQueriesProbability !== undefined && object.logQueriesProbability !== null
                ? Number(object.logQueriesProbability)
                : undefined;
        message.logProcessorsProfiles =
            object.logProcessorsProfiles !== undefined && object.logProcessorsProfiles !== null
                ? Boolean(object.logProcessorsProfiles)
                : undefined;
        message.useQueryCache =
            object.useQueryCache !== undefined && object.useQueryCache !== null
                ? Boolean(object.useQueryCache)
                : undefined;
        message.enableReadsFromQueryCache =
            object.enableReadsFromQueryCache !== undefined &&
            object.enableReadsFromQueryCache !== null
                ? Boolean(object.enableReadsFromQueryCache)
                : undefined;
        message.enableWritesToQueryCache =
            object.enableWritesToQueryCache !== undefined &&
            object.enableWritesToQueryCache !== null
                ? Boolean(object.enableWritesToQueryCache)
                : undefined;
        message.queryCacheMinQueryRuns =
            object.queryCacheMinQueryRuns !== undefined && object.queryCacheMinQueryRuns !== null
                ? Number(object.queryCacheMinQueryRuns)
                : undefined;
        message.queryCacheMinQueryDuration =
            object.queryCacheMinQueryDuration !== undefined &&
            object.queryCacheMinQueryDuration !== null
                ? Number(object.queryCacheMinQueryDuration)
                : undefined;
        message.queryCacheTtl =
            object.queryCacheTtl !== undefined && object.queryCacheTtl !== null
                ? Number(object.queryCacheTtl)
                : undefined;
        message.queryCacheMaxEntries =
            object.queryCacheMaxEntries !== undefined && object.queryCacheMaxEntries !== null
                ? Number(object.queryCacheMaxEntries)
                : undefined;
        message.queryCacheMaxSizeInBytes =
            object.queryCacheMaxSizeInBytes !== undefined &&
            object.queryCacheMaxSizeInBytes !== null
                ? Number(object.queryCacheMaxSizeInBytes)
                : undefined;
        message.queryCacheTag =
            object.queryCacheTag !== undefined && object.queryCacheTag !== null
                ? String(object.queryCacheTag)
                : '';
        message.queryCacheShareBetweenUsers =
            object.queryCacheShareBetweenUsers !== undefined &&
            object.queryCacheShareBetweenUsers !== null
                ? Boolean(object.queryCacheShareBetweenUsers)
                : undefined;
        message.queryCacheNondeterministicFunctionHandling =
            object.queryCacheNondeterministicFunctionHandling !== undefined &&
            object.queryCacheNondeterministicFunctionHandling !== null
                ? userSettings_QueryCacheNondeterministicFunctionHandlingFromJSON(
                      object.queryCacheNondeterministicFunctionHandling,
                  )
                : 0;
        message.queryCacheSystemTableHandling =
            object.queryCacheSystemTableHandling !== undefined &&
            object.queryCacheSystemTableHandling !== null
                ? userSettings_QueryCacheSystemTableHandlingFromJSON(
                      object.queryCacheSystemTableHandling,
                  )
                : 0;
        message.countDistinctImplementation =
            object.countDistinctImplementation !== undefined &&
            object.countDistinctImplementation !== null
                ? userSettings_CountDistinctImplementationFromJSON(
                      object.countDistinctImplementation,
                  )
                : 0;
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
        message.insertNullAsDefault =
            object.insertNullAsDefault !== undefined && object.insertNullAsDefault !== null
                ? Boolean(object.insertNullAsDefault)
                : undefined;
        message.joinAlgorithm = (object.joinAlgorithm ?? []).map((e: any) =>
            userSettings_JoinAlgorithmFromJSON(e),
        );
        message.anyJoinDistinctRightTableKeys =
            object.anyJoinDistinctRightTableKeys !== undefined &&
            object.anyJoinDistinctRightTableKeys !== null
                ? Boolean(object.anyJoinDistinctRightTableKeys)
                : undefined;
        message.allowSuspiciousLowCardinalityTypes =
            object.allowSuspiciousLowCardinalityTypes !== undefined &&
            object.allowSuspiciousLowCardinalityTypes !== null
                ? Boolean(object.allowSuspiciousLowCardinalityTypes)
                : undefined;
        message.flattenNested =
            object.flattenNested !== undefined && object.flattenNested !== null
                ? Boolean(object.flattenNested)
                : undefined;
        message.memoryProfilerStep =
            object.memoryProfilerStep !== undefined && object.memoryProfilerStep !== null
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
        message.maxReadBufferSize =
            object.maxReadBufferSize !== undefined && object.maxReadBufferSize !== null
                ? Number(object.maxReadBufferSize)
                : undefined;
        message.insertKeeperMaxRetries =
            object.insertKeeperMaxRetries !== undefined && object.insertKeeperMaxRetries !== null
                ? Number(object.insertKeeperMaxRetries)
                : undefined;
        message.doNotMergeAcrossPartitionsSelectFinal =
            object.doNotMergeAcrossPartitionsSelectFinal !== undefined &&
            object.doNotMergeAcrossPartitionsSelectFinal !== null
                ? Boolean(object.doNotMergeAcrossPartitionsSelectFinal)
                : undefined;
        message.ignoreMaterializedViewsWithDroppedTargetTable =
            object.ignoreMaterializedViewsWithDroppedTargetTable !== undefined &&
            object.ignoreMaterializedViewsWithDroppedTargetTable !== null
                ? Boolean(object.ignoreMaterializedViewsWithDroppedTargetTable)
                : undefined;
        message.enableAnalyzer =
            object.enableAnalyzer !== undefined && object.enableAnalyzer !== null
                ? Boolean(object.enableAnalyzer)
                : undefined;
        message.s3UseAdaptiveTimeouts =
            object.s3UseAdaptiveTimeouts !== undefined && object.s3UseAdaptiveTimeouts !== null
                ? Boolean(object.s3UseAdaptiveTimeouts)
                : undefined;
        message.final =
            object.final !== undefined && object.final !== null ? Boolean(object.final) : undefined;
        message.useHivePartitioning =
            object.useHivePartitioning !== undefined && object.useHivePartitioning !== null
                ? Boolean(object.useHivePartitioning)
                : undefined;
        message.showDataLakeCatalogsInSystemTables =
            object.showDataLakeCatalogsInSystemTables !== undefined &&
            object.showDataLakeCatalogsInSystemTables !== null
                ? Boolean(object.showDataLakeCatalogsInSystemTables)
                : undefined;
        message.compile =
            object.compile !== undefined && object.compile !== null
                ? Boolean(object.compile)
                : undefined;
        message.minCountToCompile =
            object.minCountToCompile !== undefined && object.minCountToCompile !== null
                ? Number(object.minCountToCompile)
                : undefined;
        message.asyncInsertThreads =
            object.asyncInsertThreads !== undefined && object.asyncInsertThreads !== null
                ? Number(object.asyncInsertThreads)
                : undefined;
        message.asyncInsertStaleTimeout =
            object.asyncInsertStaleTimeout !== undefined && object.asyncInsertStaleTimeout !== null
                ? Number(object.asyncInsertStaleTimeout)
                : undefined;
        return message;
    },

    toJSON(message: UserSettings): unknown {
        const obj: any = {};
        message.readonly !== undefined && (obj.readonly = message.readonly);
        message.allowDdl !== undefined && (obj.allowDdl = message.allowDdl);
        message.allowIntrospectionFunctions !== undefined &&
            (obj.allowIntrospectionFunctions = message.allowIntrospectionFunctions);
        message.connectTimeout !== undefined && (obj.connectTimeout = message.connectTimeout);
        message.connectTimeoutWithFailover !== undefined &&
            (obj.connectTimeoutWithFailover = message.connectTimeoutWithFailover);
        message.receiveTimeout !== undefined && (obj.receiveTimeout = message.receiveTimeout);
        message.sendTimeout !== undefined && (obj.sendTimeout = message.sendTimeout);
        message.idleConnectionTimeout !== undefined &&
            (obj.idleConnectionTimeout = message.idleConnectionTimeout);
        message.timeoutBeforeCheckingExecutionSpeed !== undefined &&
            (obj.timeoutBeforeCheckingExecutionSpeed = message.timeoutBeforeCheckingExecutionSpeed);
        message.insertQuorum !== undefined && (obj.insertQuorum = message.insertQuorum);
        message.insertQuorumTimeout !== undefined &&
            (obj.insertQuorumTimeout = message.insertQuorumTimeout);
        message.insertQuorumParallel !== undefined &&
            (obj.insertQuorumParallel = message.insertQuorumParallel);
        message.selectSequentialConsistency !== undefined &&
            (obj.selectSequentialConsistency = message.selectSequentialConsistency);
        message.replicationAlterPartitionsSync !== undefined &&
            (obj.replicationAlterPartitionsSync = message.replicationAlterPartitionsSync);
        message.maxReplicaDelayForDistributedQueries !== undefined &&
            (obj.maxReplicaDelayForDistributedQueries =
                message.maxReplicaDelayForDistributedQueries);
        message.fallbackToStaleReplicasForDistributedQueries !== undefined &&
            (obj.fallbackToStaleReplicasForDistributedQueries =
                message.fallbackToStaleReplicasForDistributedQueries);
        message.distributedProductMode !== undefined &&
            (obj.distributedProductMode = userSettings_DistributedProductModeToJSON(
                message.distributedProductMode,
            ));
        message.distributedAggregationMemoryEfficient !== undefined &&
            (obj.distributedAggregationMemoryEfficient =
                message.distributedAggregationMemoryEfficient);
        message.distributedDdlTaskTimeout !== undefined &&
            (obj.distributedDdlTaskTimeout = message.distributedDdlTaskTimeout);
        message.distributedDdlOutputMode !== undefined &&
            (obj.distributedDdlOutputMode = userSettings_DistributedDdlOutputModeToJSON(
                message.distributedDdlOutputMode,
            ));
        message.skipUnavailableShards !== undefined &&
            (obj.skipUnavailableShards = message.skipUnavailableShards);
        message.useHedgedRequests !== undefined &&
            (obj.useHedgedRequests = message.useHedgedRequests);
        message.hedgedConnectionTimeoutMs !== undefined &&
            (obj.hedgedConnectionTimeoutMs = message.hedgedConnectionTimeoutMs);
        message.loadBalancing !== undefined &&
            (obj.loadBalancing = userSettings_LoadBalancingToJSON(message.loadBalancing));
        message.preferLocalhostReplica !== undefined &&
            (obj.preferLocalhostReplica = message.preferLocalhostReplica);
        message.compileExpressions !== undefined &&
            (obj.compileExpressions = message.compileExpressions);
        message.minCountToCompileExpression !== undefined &&
            (obj.minCountToCompileExpression = message.minCountToCompileExpression);
        message.maxBlockSize !== undefined && (obj.maxBlockSize = message.maxBlockSize);
        message.minInsertBlockSizeRows !== undefined &&
            (obj.minInsertBlockSizeRows = message.minInsertBlockSizeRows);
        message.minInsertBlockSizeBytes !== undefined &&
            (obj.minInsertBlockSizeBytes = message.minInsertBlockSizeBytes);
        message.maxInsertBlockSize !== undefined &&
            (obj.maxInsertBlockSize = message.maxInsertBlockSize);
        message.maxPartitionsPerInsertBlock !== undefined &&
            (obj.maxPartitionsPerInsertBlock = message.maxPartitionsPerInsertBlock);
        message.minBytesToUseDirectIo !== undefined &&
            (obj.minBytesToUseDirectIo = message.minBytesToUseDirectIo);
        message.useUncompressedCache !== undefined &&
            (obj.useUncompressedCache = message.useUncompressedCache);
        message.mergeTreeMaxRowsToUseCache !== undefined &&
            (obj.mergeTreeMaxRowsToUseCache = message.mergeTreeMaxRowsToUseCache);
        message.mergeTreeMaxBytesToUseCache !== undefined &&
            (obj.mergeTreeMaxBytesToUseCache = message.mergeTreeMaxBytesToUseCache);
        message.mergeTreeMinRowsForConcurrentRead !== undefined &&
            (obj.mergeTreeMinRowsForConcurrentRead = message.mergeTreeMinRowsForConcurrentRead);
        message.mergeTreeMinBytesForConcurrentRead !== undefined &&
            (obj.mergeTreeMinBytesForConcurrentRead = message.mergeTreeMinBytesForConcurrentRead);
        message.maxBytesBeforeExternalGroupBy !== undefined &&
            (obj.maxBytesBeforeExternalGroupBy = message.maxBytesBeforeExternalGroupBy);
        message.maxBytesBeforeExternalSort !== undefined &&
            (obj.maxBytesBeforeExternalSort = message.maxBytesBeforeExternalSort);
        message.groupByTwoLevelThreshold !== undefined &&
            (obj.groupByTwoLevelThreshold = message.groupByTwoLevelThreshold);
        message.groupByTwoLevelThresholdBytes !== undefined &&
            (obj.groupByTwoLevelThresholdBytes = message.groupByTwoLevelThresholdBytes);
        message.deduplicateBlocksInDependentMaterializedViews !== undefined &&
            (obj.deduplicateBlocksInDependentMaterializedViews =
                message.deduplicateBlocksInDependentMaterializedViews);
        message.localFilesystemReadMethod !== undefined &&
            (obj.localFilesystemReadMethod = userSettings_LocalFilesystemReadMethodToJSON(
                message.localFilesystemReadMethod,
            ));
        message.remoteFilesystemReadMethod !== undefined &&
            (obj.remoteFilesystemReadMethod = userSettings_RemoteFilesystemReadMethodToJSON(
                message.remoteFilesystemReadMethod,
            ));
        message.priority !== undefined && (obj.priority = message.priority);
        message.maxThreads !== undefined && (obj.maxThreads = message.maxThreads);
        message.maxInsertThreads !== undefined && (obj.maxInsertThreads = message.maxInsertThreads);
        message.maxMemoryUsage !== undefined && (obj.maxMemoryUsage = message.maxMemoryUsage);
        message.maxMemoryUsageForUser !== undefined &&
            (obj.maxMemoryUsageForUser = message.maxMemoryUsageForUser);
        message.memoryOvercommitRatioDenominator !== undefined &&
            (obj.memoryOvercommitRatioDenominator = message.memoryOvercommitRatioDenominator);
        message.memoryOvercommitRatioDenominatorForUser !== undefined &&
            (obj.memoryOvercommitRatioDenominatorForUser =
                message.memoryOvercommitRatioDenominatorForUser);
        message.memoryUsageOvercommitMaxWaitMicroseconds !== undefined &&
            (obj.memoryUsageOvercommitMaxWaitMicroseconds =
                message.memoryUsageOvercommitMaxWaitMicroseconds);
        message.maxNetworkBandwidth !== undefined &&
            (obj.maxNetworkBandwidth = message.maxNetworkBandwidth);
        message.maxNetworkBandwidthForUser !== undefined &&
            (obj.maxNetworkBandwidthForUser = message.maxNetworkBandwidthForUser);
        message.maxTemporaryDataOnDiskSizeForQuery !== undefined &&
            (obj.maxTemporaryDataOnDiskSizeForQuery = message.maxTemporaryDataOnDiskSizeForQuery);
        message.maxTemporaryDataOnDiskSizeForUser !== undefined &&
            (obj.maxTemporaryDataOnDiskSizeForUser = message.maxTemporaryDataOnDiskSizeForUser);
        message.maxConcurrentQueriesForUser !== undefined &&
            (obj.maxConcurrentQueriesForUser = message.maxConcurrentQueriesForUser);
        message.forceIndexByDate !== undefined && (obj.forceIndexByDate = message.forceIndexByDate);
        message.forcePrimaryKey !== undefined && (obj.forcePrimaryKey = message.forcePrimaryKey);
        message.maxRowsToRead !== undefined && (obj.maxRowsToRead = message.maxRowsToRead);
        message.maxBytesToRead !== undefined && (obj.maxBytesToRead = message.maxBytesToRead);
        message.readOverflowMode !== undefined &&
            (obj.readOverflowMode = userSettings_OverflowModeToJSON(message.readOverflowMode));
        message.maxRowsToGroupBy !== undefined && (obj.maxRowsToGroupBy = message.maxRowsToGroupBy);
        message.groupByOverflowMode !== undefined &&
            (obj.groupByOverflowMode = userSettings_GroupByOverflowModeToJSON(
                message.groupByOverflowMode,
            ));
        message.maxRowsToSort !== undefined && (obj.maxRowsToSort = message.maxRowsToSort);
        message.maxBytesToSort !== undefined && (obj.maxBytesToSort = message.maxBytesToSort);
        message.sortOverflowMode !== undefined &&
            (obj.sortOverflowMode = userSettings_OverflowModeToJSON(message.sortOverflowMode));
        message.maxResultRows !== undefined && (obj.maxResultRows = message.maxResultRows);
        message.maxResultBytes !== undefined && (obj.maxResultBytes = message.maxResultBytes);
        message.resultOverflowMode !== undefined &&
            (obj.resultOverflowMode = userSettings_OverflowModeToJSON(message.resultOverflowMode));
        message.maxRowsInDistinct !== undefined &&
            (obj.maxRowsInDistinct = message.maxRowsInDistinct);
        message.maxBytesInDistinct !== undefined &&
            (obj.maxBytesInDistinct = message.maxBytesInDistinct);
        message.distinctOverflowMode !== undefined &&
            (obj.distinctOverflowMode = userSettings_OverflowModeToJSON(
                message.distinctOverflowMode,
            ));
        message.maxRowsToTransfer !== undefined &&
            (obj.maxRowsToTransfer = message.maxRowsToTransfer);
        message.maxBytesToTransfer !== undefined &&
            (obj.maxBytesToTransfer = message.maxBytesToTransfer);
        message.transferOverflowMode !== undefined &&
            (obj.transferOverflowMode = userSettings_OverflowModeToJSON(
                message.transferOverflowMode,
            ));
        message.maxExecutionTime !== undefined && (obj.maxExecutionTime = message.maxExecutionTime);
        message.timeoutOverflowMode !== undefined &&
            (obj.timeoutOverflowMode = userSettings_OverflowModeToJSON(
                message.timeoutOverflowMode,
            ));
        message.maxRowsInSet !== undefined && (obj.maxRowsInSet = message.maxRowsInSet);
        message.maxBytesInSet !== undefined && (obj.maxBytesInSet = message.maxBytesInSet);
        message.setOverflowMode !== undefined &&
            (obj.setOverflowMode = userSettings_OverflowModeToJSON(message.setOverflowMode));
        message.maxRowsInJoin !== undefined && (obj.maxRowsInJoin = message.maxRowsInJoin);
        message.maxBytesInJoin !== undefined && (obj.maxBytesInJoin = message.maxBytesInJoin);
        message.joinOverflowMode !== undefined &&
            (obj.joinOverflowMode = userSettings_OverflowModeToJSON(message.joinOverflowMode));
        message.maxColumnsToRead !== undefined && (obj.maxColumnsToRead = message.maxColumnsToRead);
        message.maxTemporaryColumns !== undefined &&
            (obj.maxTemporaryColumns = message.maxTemporaryColumns);
        message.maxTemporaryNonConstColumns !== undefined &&
            (obj.maxTemporaryNonConstColumns = message.maxTemporaryNonConstColumns);
        message.maxQuerySize !== undefined && (obj.maxQuerySize = message.maxQuerySize);
        message.maxAstDepth !== undefined && (obj.maxAstDepth = message.maxAstDepth);
        message.maxAstElements !== undefined && (obj.maxAstElements = message.maxAstElements);
        message.maxExpandedAstElements !== undefined &&
            (obj.maxExpandedAstElements = message.maxExpandedAstElements);
        message.maxParserDepth !== undefined && (obj.maxParserDepth = message.maxParserDepth);
        message.minExecutionSpeed !== undefined &&
            (obj.minExecutionSpeed = message.minExecutionSpeed);
        message.minExecutionSpeedBytes !== undefined &&
            (obj.minExecutionSpeedBytes = message.minExecutionSpeedBytes);
        message.inputFormatValuesInterpretExpressions !== undefined &&
            (obj.inputFormatValuesInterpretExpressions =
                message.inputFormatValuesInterpretExpressions);
        message.inputFormatDefaultsForOmittedFields !== undefined &&
            (obj.inputFormatDefaultsForOmittedFields = message.inputFormatDefaultsForOmittedFields);
        message.inputFormatNullAsDefault !== undefined &&
            (obj.inputFormatNullAsDefault = message.inputFormatNullAsDefault);
        message.inputFormatWithNamesUseHeader !== undefined &&
            (obj.inputFormatWithNamesUseHeader = message.inputFormatWithNamesUseHeader);
        message.outputFormatJsonQuote64bitIntegers !== undefined &&
            (obj.outputFormatJsonQuote_64bitIntegers = message.outputFormatJsonQuote64bitIntegers);
        message.outputFormatJsonQuoteDenormals !== undefined &&
            (obj.outputFormatJsonQuoteDenormals = message.outputFormatJsonQuoteDenormals);
        message.dateTimeInputFormat !== undefined &&
            (obj.dateTimeInputFormat = userSettings_DateTimeInputFormatToJSON(
                message.dateTimeInputFormat,
            ));
        message.dateTimeOutputFormat !== undefined &&
            (obj.dateTimeOutputFormat = userSettings_DateTimeOutputFormatToJSON(
                message.dateTimeOutputFormat,
            ));
        message.lowCardinalityAllowInNativeFormat !== undefined &&
            (obj.lowCardinalityAllowInNativeFormat = message.lowCardinalityAllowInNativeFormat);
        message.emptyResultForAggregationByEmptySet !== undefined &&
            (obj.emptyResultForAggregationByEmptySet = message.emptyResultForAggregationByEmptySet);
        message.formatRegexp !== undefined && (obj.formatRegexp = message.formatRegexp);
        message.formatRegexpEscapingRule !== undefined &&
            (obj.formatRegexpEscapingRule = userSettings_FormatRegexpEscapingRuleToJSON(
                message.formatRegexpEscapingRule,
            ));
        message.formatRegexpSkipUnmatched !== undefined &&
            (obj.formatRegexpSkipUnmatched = message.formatRegexpSkipUnmatched);
        message.inputFormatParallelParsing !== undefined &&
            (obj.inputFormatParallelParsing = message.inputFormatParallelParsing);
        message.inputFormatImportNestedJson !== undefined &&
            (obj.inputFormatImportNestedJson = message.inputFormatImportNestedJson);
        message.formatAvroSchemaRegistryUrl !== undefined &&
            (obj.formatAvroSchemaRegistryUrl = message.formatAvroSchemaRegistryUrl);
        message.dataTypeDefaultNullable !== undefined &&
            (obj.dataTypeDefaultNullable = message.dataTypeDefaultNullable);
        message.httpConnectionTimeout !== undefined &&
            (obj.httpConnectionTimeout = message.httpConnectionTimeout);
        message.httpReceiveTimeout !== undefined &&
            (obj.httpReceiveTimeout = message.httpReceiveTimeout);
        message.httpSendTimeout !== undefined && (obj.httpSendTimeout = message.httpSendTimeout);
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
        message.httpMaxFieldNameSize !== undefined &&
            (obj.httpMaxFieldNameSize = message.httpMaxFieldNameSize);
        message.httpMaxFieldValueSize !== undefined &&
            (obj.httpMaxFieldValueSize = message.httpMaxFieldValueSize);
        message.quotaMode !== undefined &&
            (obj.quotaMode = userSettings_QuotaModeToJSON(message.quotaMode));
        message.asyncInsert !== undefined && (obj.asyncInsert = message.asyncInsert);
        message.waitForAsyncInsert !== undefined &&
            (obj.waitForAsyncInsert = message.waitForAsyncInsert);
        message.waitForAsyncInsertTimeout !== undefined &&
            (obj.waitForAsyncInsertTimeout = message.waitForAsyncInsertTimeout);
        message.asyncInsertMaxDataSize !== undefined &&
            (obj.asyncInsertMaxDataSize = message.asyncInsertMaxDataSize);
        message.asyncInsertBusyTimeout !== undefined &&
            (obj.asyncInsertBusyTimeout = message.asyncInsertBusyTimeout);
        message.asyncInsertUseAdaptiveBusyTimeout !== undefined &&
            (obj.asyncInsertUseAdaptiveBusyTimeout = message.asyncInsertUseAdaptiveBusyTimeout);
        message.logQueryThreads !== undefined && (obj.logQueryThreads = message.logQueryThreads);
        message.logQueryViews !== undefined && (obj.logQueryViews = message.logQueryViews);
        message.logQueriesProbability !== undefined &&
            (obj.logQueriesProbability = message.logQueriesProbability);
        message.logProcessorsProfiles !== undefined &&
            (obj.logProcessorsProfiles = message.logProcessorsProfiles);
        message.useQueryCache !== undefined && (obj.useQueryCache = message.useQueryCache);
        message.enableReadsFromQueryCache !== undefined &&
            (obj.enableReadsFromQueryCache = message.enableReadsFromQueryCache);
        message.enableWritesToQueryCache !== undefined &&
            (obj.enableWritesToQueryCache = message.enableWritesToQueryCache);
        message.queryCacheMinQueryRuns !== undefined &&
            (obj.queryCacheMinQueryRuns = message.queryCacheMinQueryRuns);
        message.queryCacheMinQueryDuration !== undefined &&
            (obj.queryCacheMinQueryDuration = message.queryCacheMinQueryDuration);
        message.queryCacheTtl !== undefined && (obj.queryCacheTtl = message.queryCacheTtl);
        message.queryCacheMaxEntries !== undefined &&
            (obj.queryCacheMaxEntries = message.queryCacheMaxEntries);
        message.queryCacheMaxSizeInBytes !== undefined &&
            (obj.queryCacheMaxSizeInBytes = message.queryCacheMaxSizeInBytes);
        message.queryCacheTag !== undefined && (obj.queryCacheTag = message.queryCacheTag);
        message.queryCacheShareBetweenUsers !== undefined &&
            (obj.queryCacheShareBetweenUsers = message.queryCacheShareBetweenUsers);
        message.queryCacheNondeterministicFunctionHandling !== undefined &&
            (obj.queryCacheNondeterministicFunctionHandling =
                userSettings_QueryCacheNondeterministicFunctionHandlingToJSON(
                    message.queryCacheNondeterministicFunctionHandling,
                ));
        message.queryCacheSystemTableHandling !== undefined &&
            (obj.queryCacheSystemTableHandling = userSettings_QueryCacheSystemTableHandlingToJSON(
                message.queryCacheSystemTableHandling,
            ));
        message.countDistinctImplementation !== undefined &&
            (obj.countDistinctImplementation = userSettings_CountDistinctImplementationToJSON(
                message.countDistinctImplementation,
            ));
        message.joinedSubqueryRequiresAlias !== undefined &&
            (obj.joinedSubqueryRequiresAlias = message.joinedSubqueryRequiresAlias);
        message.joinUseNulls !== undefined && (obj.joinUseNulls = message.joinUseNulls);
        message.transformNullIn !== undefined && (obj.transformNullIn = message.transformNullIn);
        message.insertNullAsDefault !== undefined &&
            (obj.insertNullAsDefault = message.insertNullAsDefault);
        if (message.joinAlgorithm) {
            obj.joinAlgorithm = message.joinAlgorithm.map((e) =>
                userSettings_JoinAlgorithmToJSON(e),
            );
        } else {
            obj.joinAlgorithm = [];
        }
        message.anyJoinDistinctRightTableKeys !== undefined &&
            (obj.anyJoinDistinctRightTableKeys = message.anyJoinDistinctRightTableKeys);
        message.allowSuspiciousLowCardinalityTypes !== undefined &&
            (obj.allowSuspiciousLowCardinalityTypes = message.allowSuspiciousLowCardinalityTypes);
        message.flattenNested !== undefined && (obj.flattenNested = message.flattenNested);
        message.memoryProfilerStep !== undefined &&
            (obj.memoryProfilerStep = message.memoryProfilerStep);
        message.memoryProfilerSampleProbability !== undefined &&
            (obj.memoryProfilerSampleProbability = message.memoryProfilerSampleProbability);
        message.maxFinalThreads !== undefined && (obj.maxFinalThreads = message.maxFinalThreads);
        message.maxReadBufferSize !== undefined &&
            (obj.maxReadBufferSize = message.maxReadBufferSize);
        message.insertKeeperMaxRetries !== undefined &&
            (obj.insertKeeperMaxRetries = message.insertKeeperMaxRetries);
        message.doNotMergeAcrossPartitionsSelectFinal !== undefined &&
            (obj.doNotMergeAcrossPartitionsSelectFinal =
                message.doNotMergeAcrossPartitionsSelectFinal);
        message.ignoreMaterializedViewsWithDroppedTargetTable !== undefined &&
            (obj.ignoreMaterializedViewsWithDroppedTargetTable =
                message.ignoreMaterializedViewsWithDroppedTargetTable);
        message.enableAnalyzer !== undefined && (obj.enableAnalyzer = message.enableAnalyzer);
        message.s3UseAdaptiveTimeouts !== undefined &&
            (obj.s3UseAdaptiveTimeouts = message.s3UseAdaptiveTimeouts);
        message.final !== undefined && (obj.final = message.final);
        message.useHivePartitioning !== undefined &&
            (obj.useHivePartitioning = message.useHivePartitioning);
        message.showDataLakeCatalogsInSystemTables !== undefined &&
            (obj.showDataLakeCatalogsInSystemTables = message.showDataLakeCatalogsInSystemTables);
        message.compile !== undefined && (obj.compile = message.compile);
        message.minCountToCompile !== undefined &&
            (obj.minCountToCompile = message.minCountToCompile);
        message.asyncInsertThreads !== undefined &&
            (obj.asyncInsertThreads = message.asyncInsertThreads);
        message.asyncInsertStaleTimeout !== undefined &&
            (obj.asyncInsertStaleTimeout = message.asyncInsertStaleTimeout);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UserSettings>, I>>(object: I): UserSettings {
        const message = { ...baseUserSettings } as UserSettings;
        message.readonly = object.readonly ?? undefined;
        message.allowDdl = object.allowDdl ?? undefined;
        message.allowIntrospectionFunctions = object.allowIntrospectionFunctions ?? undefined;
        message.connectTimeout = object.connectTimeout ?? undefined;
        message.connectTimeoutWithFailover = object.connectTimeoutWithFailover ?? undefined;
        message.receiveTimeout = object.receiveTimeout ?? undefined;
        message.sendTimeout = object.sendTimeout ?? undefined;
        message.idleConnectionTimeout = object.idleConnectionTimeout ?? undefined;
        message.timeoutBeforeCheckingExecutionSpeed =
            object.timeoutBeforeCheckingExecutionSpeed ?? undefined;
        message.insertQuorum = object.insertQuorum ?? undefined;
        message.insertQuorumTimeout = object.insertQuorumTimeout ?? undefined;
        message.insertQuorumParallel = object.insertQuorumParallel ?? undefined;
        message.selectSequentialConsistency = object.selectSequentialConsistency ?? undefined;
        message.replicationAlterPartitionsSync = object.replicationAlterPartitionsSync ?? undefined;
        message.maxReplicaDelayForDistributedQueries =
            object.maxReplicaDelayForDistributedQueries ?? undefined;
        message.fallbackToStaleReplicasForDistributedQueries =
            object.fallbackToStaleReplicasForDistributedQueries ?? undefined;
        message.distributedProductMode = object.distributedProductMode ?? 0;
        message.distributedAggregationMemoryEfficient =
            object.distributedAggregationMemoryEfficient ?? undefined;
        message.distributedDdlTaskTimeout = object.distributedDdlTaskTimeout ?? undefined;
        message.distributedDdlOutputMode = object.distributedDdlOutputMode ?? 0;
        message.skipUnavailableShards = object.skipUnavailableShards ?? undefined;
        message.useHedgedRequests = object.useHedgedRequests ?? undefined;
        message.hedgedConnectionTimeoutMs = object.hedgedConnectionTimeoutMs ?? undefined;
        message.loadBalancing = object.loadBalancing ?? 0;
        message.preferLocalhostReplica = object.preferLocalhostReplica ?? undefined;
        message.compileExpressions = object.compileExpressions ?? undefined;
        message.minCountToCompileExpression = object.minCountToCompileExpression ?? undefined;
        message.maxBlockSize = object.maxBlockSize ?? undefined;
        message.minInsertBlockSizeRows = object.minInsertBlockSizeRows ?? undefined;
        message.minInsertBlockSizeBytes = object.minInsertBlockSizeBytes ?? undefined;
        message.maxInsertBlockSize = object.maxInsertBlockSize ?? undefined;
        message.maxPartitionsPerInsertBlock = object.maxPartitionsPerInsertBlock ?? undefined;
        message.minBytesToUseDirectIo = object.minBytesToUseDirectIo ?? undefined;
        message.useUncompressedCache = object.useUncompressedCache ?? undefined;
        message.mergeTreeMaxRowsToUseCache = object.mergeTreeMaxRowsToUseCache ?? undefined;
        message.mergeTreeMaxBytesToUseCache = object.mergeTreeMaxBytesToUseCache ?? undefined;
        message.mergeTreeMinRowsForConcurrentRead =
            object.mergeTreeMinRowsForConcurrentRead ?? undefined;
        message.mergeTreeMinBytesForConcurrentRead =
            object.mergeTreeMinBytesForConcurrentRead ?? undefined;
        message.maxBytesBeforeExternalGroupBy = object.maxBytesBeforeExternalGroupBy ?? undefined;
        message.maxBytesBeforeExternalSort = object.maxBytesBeforeExternalSort ?? undefined;
        message.groupByTwoLevelThreshold = object.groupByTwoLevelThreshold ?? undefined;
        message.groupByTwoLevelThresholdBytes = object.groupByTwoLevelThresholdBytes ?? undefined;
        message.deduplicateBlocksInDependentMaterializedViews =
            object.deduplicateBlocksInDependentMaterializedViews ?? undefined;
        message.localFilesystemReadMethod = object.localFilesystemReadMethod ?? 0;
        message.remoteFilesystemReadMethod = object.remoteFilesystemReadMethod ?? 0;
        message.priority = object.priority ?? undefined;
        message.maxThreads = object.maxThreads ?? undefined;
        message.maxInsertThreads = object.maxInsertThreads ?? undefined;
        message.maxMemoryUsage = object.maxMemoryUsage ?? undefined;
        message.maxMemoryUsageForUser = object.maxMemoryUsageForUser ?? undefined;
        message.memoryOvercommitRatioDenominator =
            object.memoryOvercommitRatioDenominator ?? undefined;
        message.memoryOvercommitRatioDenominatorForUser =
            object.memoryOvercommitRatioDenominatorForUser ?? undefined;
        message.memoryUsageOvercommitMaxWaitMicroseconds =
            object.memoryUsageOvercommitMaxWaitMicroseconds ?? undefined;
        message.maxNetworkBandwidth = object.maxNetworkBandwidth ?? undefined;
        message.maxNetworkBandwidthForUser = object.maxNetworkBandwidthForUser ?? undefined;
        message.maxTemporaryDataOnDiskSizeForQuery =
            object.maxTemporaryDataOnDiskSizeForQuery ?? undefined;
        message.maxTemporaryDataOnDiskSizeForUser =
            object.maxTemporaryDataOnDiskSizeForUser ?? undefined;
        message.maxConcurrentQueriesForUser = object.maxConcurrentQueriesForUser ?? undefined;
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
        message.maxColumnsToRead = object.maxColumnsToRead ?? undefined;
        message.maxTemporaryColumns = object.maxTemporaryColumns ?? undefined;
        message.maxTemporaryNonConstColumns = object.maxTemporaryNonConstColumns ?? undefined;
        message.maxQuerySize = object.maxQuerySize ?? undefined;
        message.maxAstDepth = object.maxAstDepth ?? undefined;
        message.maxAstElements = object.maxAstElements ?? undefined;
        message.maxExpandedAstElements = object.maxExpandedAstElements ?? undefined;
        message.maxParserDepth = object.maxParserDepth ?? undefined;
        message.minExecutionSpeed = object.minExecutionSpeed ?? undefined;
        message.minExecutionSpeedBytes = object.minExecutionSpeedBytes ?? undefined;
        message.inputFormatValuesInterpretExpressions =
            object.inputFormatValuesInterpretExpressions ?? undefined;
        message.inputFormatDefaultsForOmittedFields =
            object.inputFormatDefaultsForOmittedFields ?? undefined;
        message.inputFormatNullAsDefault = object.inputFormatNullAsDefault ?? undefined;
        message.inputFormatWithNamesUseHeader = object.inputFormatWithNamesUseHeader ?? undefined;
        message.outputFormatJsonQuote64bitIntegers =
            object.outputFormatJsonQuote64bitIntegers ?? undefined;
        message.outputFormatJsonQuoteDenormals = object.outputFormatJsonQuoteDenormals ?? undefined;
        message.dateTimeInputFormat = object.dateTimeInputFormat ?? 0;
        message.dateTimeOutputFormat = object.dateTimeOutputFormat ?? 0;
        message.lowCardinalityAllowInNativeFormat =
            object.lowCardinalityAllowInNativeFormat ?? undefined;
        message.emptyResultForAggregationByEmptySet =
            object.emptyResultForAggregationByEmptySet ?? undefined;
        message.formatRegexp = object.formatRegexp ?? '';
        message.formatRegexpEscapingRule = object.formatRegexpEscapingRule ?? 0;
        message.formatRegexpSkipUnmatched = object.formatRegexpSkipUnmatched ?? undefined;
        message.inputFormatParallelParsing = object.inputFormatParallelParsing ?? undefined;
        message.inputFormatImportNestedJson = object.inputFormatImportNestedJson ?? undefined;
        message.formatAvroSchemaRegistryUrl = object.formatAvroSchemaRegistryUrl ?? '';
        message.dataTypeDefaultNullable = object.dataTypeDefaultNullable ?? undefined;
        message.httpConnectionTimeout = object.httpConnectionTimeout ?? undefined;
        message.httpReceiveTimeout = object.httpReceiveTimeout ?? undefined;
        message.httpSendTimeout = object.httpSendTimeout ?? undefined;
        message.enableHttpCompression = object.enableHttpCompression ?? undefined;
        message.sendProgressInHttpHeaders = object.sendProgressInHttpHeaders ?? undefined;
        message.httpHeadersProgressInterval = object.httpHeadersProgressInterval ?? undefined;
        message.addHttpCorsHeader = object.addHttpCorsHeader ?? undefined;
        message.cancelHttpReadonlyQueriesOnClientClose =
            object.cancelHttpReadonlyQueriesOnClientClose ?? undefined;
        message.maxHttpGetRedirects = object.maxHttpGetRedirects ?? undefined;
        message.httpMaxFieldNameSize = object.httpMaxFieldNameSize ?? undefined;
        message.httpMaxFieldValueSize = object.httpMaxFieldValueSize ?? undefined;
        message.quotaMode = object.quotaMode ?? 0;
        message.asyncInsert = object.asyncInsert ?? undefined;
        message.waitForAsyncInsert = object.waitForAsyncInsert ?? undefined;
        message.waitForAsyncInsertTimeout = object.waitForAsyncInsertTimeout ?? undefined;
        message.asyncInsertMaxDataSize = object.asyncInsertMaxDataSize ?? undefined;
        message.asyncInsertBusyTimeout = object.asyncInsertBusyTimeout ?? undefined;
        message.asyncInsertUseAdaptiveBusyTimeout =
            object.asyncInsertUseAdaptiveBusyTimeout ?? undefined;
        message.logQueryThreads = object.logQueryThreads ?? undefined;
        message.logQueryViews = object.logQueryViews ?? undefined;
        message.logQueriesProbability = object.logQueriesProbability ?? undefined;
        message.logProcessorsProfiles = object.logProcessorsProfiles ?? undefined;
        message.useQueryCache = object.useQueryCache ?? undefined;
        message.enableReadsFromQueryCache = object.enableReadsFromQueryCache ?? undefined;
        message.enableWritesToQueryCache = object.enableWritesToQueryCache ?? undefined;
        message.queryCacheMinQueryRuns = object.queryCacheMinQueryRuns ?? undefined;
        message.queryCacheMinQueryDuration = object.queryCacheMinQueryDuration ?? undefined;
        message.queryCacheTtl = object.queryCacheTtl ?? undefined;
        message.queryCacheMaxEntries = object.queryCacheMaxEntries ?? undefined;
        message.queryCacheMaxSizeInBytes = object.queryCacheMaxSizeInBytes ?? undefined;
        message.queryCacheTag = object.queryCacheTag ?? '';
        message.queryCacheShareBetweenUsers = object.queryCacheShareBetweenUsers ?? undefined;
        message.queryCacheNondeterministicFunctionHandling =
            object.queryCacheNondeterministicFunctionHandling ?? 0;
        message.queryCacheSystemTableHandling = object.queryCacheSystemTableHandling ?? 0;
        message.countDistinctImplementation = object.countDistinctImplementation ?? 0;
        message.joinedSubqueryRequiresAlias = object.joinedSubqueryRequiresAlias ?? undefined;
        message.joinUseNulls = object.joinUseNulls ?? undefined;
        message.transformNullIn = object.transformNullIn ?? undefined;
        message.insertNullAsDefault = object.insertNullAsDefault ?? undefined;
        message.joinAlgorithm = object.joinAlgorithm?.map((e) => e) || [];
        message.anyJoinDistinctRightTableKeys = object.anyJoinDistinctRightTableKeys ?? undefined;
        message.allowSuspiciousLowCardinalityTypes =
            object.allowSuspiciousLowCardinalityTypes ?? undefined;
        message.flattenNested = object.flattenNested ?? undefined;
        message.memoryProfilerStep = object.memoryProfilerStep ?? undefined;
        message.memoryProfilerSampleProbability =
            object.memoryProfilerSampleProbability ?? undefined;
        message.maxFinalThreads = object.maxFinalThreads ?? undefined;
        message.maxReadBufferSize = object.maxReadBufferSize ?? undefined;
        message.insertKeeperMaxRetries = object.insertKeeperMaxRetries ?? undefined;
        message.doNotMergeAcrossPartitionsSelectFinal =
            object.doNotMergeAcrossPartitionsSelectFinal ?? undefined;
        message.ignoreMaterializedViewsWithDroppedTargetTable =
            object.ignoreMaterializedViewsWithDroppedTargetTable ?? undefined;
        message.enableAnalyzer = object.enableAnalyzer ?? undefined;
        message.s3UseAdaptiveTimeouts = object.s3UseAdaptiveTimeouts ?? undefined;
        message.final = object.final ?? undefined;
        message.useHivePartitioning = object.useHivePartitioning ?? undefined;
        message.showDataLakeCatalogsInSystemTables =
            object.showDataLakeCatalogsInSystemTables ?? undefined;
        message.compile = object.compile ?? undefined;
        message.minCountToCompile = object.minCountToCompile ?? undefined;
        message.asyncInsertThreads = object.asyncInsertThreads ?? undefined;
        message.asyncInsertStaleTimeout = object.asyncInsertStaleTimeout ?? undefined;
        return message;
    },
};

const baseUserQuota: object = {};

export const UserQuota: {
    encode(message: UserQuota, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserQuota;
    fromJSON(object: any): UserQuota;
    toJSON(message: UserQuota): unknown;
    fromPartial<I extends Exact<DeepPartial<UserQuota>, I>>(object: I): UserQuota;
} = {
    encode(message: UserQuota, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.intervalDuration !== undefined) {
            Int64Value.encode(
                { value: message.intervalDuration! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.queries !== undefined) {
            Int64Value.encode({ value: message.queries! }, writer.uint32(18).fork()).ldelim();
        }
        if (message.errors !== undefined) {
            Int64Value.encode({ value: message.errors! }, writer.uint32(26).fork()).ldelim();
        }
        if (message.resultRows !== undefined) {
            Int64Value.encode({ value: message.resultRows! }, writer.uint32(34).fork()).ldelim();
        }
        if (message.readRows !== undefined) {
            Int64Value.encode({ value: message.readRows! }, writer.uint32(42).fork()).ldelim();
        }
        if (message.executionTime !== undefined) {
            Int64Value.encode({ value: message.executionTime! }, writer.uint32(50).fork()).ldelim();
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
                    message.intervalDuration = Int64Value.decode(reader, reader.uint32()).value;
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
                    message.executionTime = Int64Value.decode(reader, reader.uint32()).value;
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
        message.intervalDuration !== undefined && (obj.intervalDuration = message.intervalDuration);
        message.queries !== undefined && (obj.queries = message.queries);
        message.errors !== undefined && (obj.errors = message.errors);
        message.resultRows !== undefined && (obj.resultRows = message.resultRows);
        message.readRows !== undefined && (obj.readRows = message.readRows);
        message.executionTime !== undefined && (obj.executionTime = message.executionTime);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UserQuota>, I>>(object: I): UserQuota {
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

const baseConnectionManager: object = { connectionId: '' };

export const ConnectionManager: {
    encode(message: ConnectionManager, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionManager;
    fromJSON(object: any): ConnectionManager;
    toJSON(message: ConnectionManager): unknown;
    fromPartial<I extends Exact<DeepPartial<ConnectionManager>, I>>(object: I): ConnectionManager;
} = {
    encode(message: ConnectionManager, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.connectionId !== '') {
            writer.uint32(10).string(message.connectionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionManager {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConnectionManager } as ConnectionManager;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ConnectionManager {
        const message = { ...baseConnectionManager } as ConnectionManager;
        message.connectionId =
            object.connectionId !== undefined && object.connectionId !== null
                ? String(object.connectionId)
                : '';
        return message;
    },

    toJSON(message: ConnectionManager): unknown {
        const obj: any = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ConnectionManager>, I>>(object: I): ConnectionManager {
        const message = { ...baseConnectionManager } as ConnectionManager;
        message.connectionId = object.connectionId ?? '';
        return message;
    },
};

const baseUserSpec: object = { name: '', password: '' };

export const UserSpec: {
    encode(message: UserSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserSpec;
    fromJSON(object: any): UserSpec;
    toJSON(message: UserSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<UserSpec>, I>>(object: I): UserSpec;
} = {
    encode(message: UserSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.password !== '') {
            writer.uint32(18).string(message.password);
        }
        if (message.generatePassword !== undefined) {
            BoolValue.encode(
                { value: message.generatePassword! },
                writer.uint32(50).fork(),
            ).ldelim();
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
                case 6:
                    message.generatePassword = BoolValue.decode(reader, reader.uint32()).value;
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
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
                : '';
        message.generatePassword =
            object.generatePassword !== undefined && object.generatePassword !== null
                ? Boolean(object.generatePassword)
                : undefined;
        message.permissions = (object.permissions ?? []).map((e: any) => Permission.fromJSON(e));
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? UserSettings.fromJSON(object.settings)
                : undefined;
        message.quotas = (object.quotas ?? []).map((e: any) => UserQuota.fromJSON(e));
        return message;
    },

    toJSON(message: UserSpec): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.password !== undefined && (obj.password = message.password);
        message.generatePassword !== undefined && (obj.generatePassword = message.generatePassword);
        if (message.permissions) {
            obj.permissions = message.permissions.map((e) =>
                e ? Permission.toJSON(e) : undefined,
            );
        } else {
            obj.permissions = [];
        }
        message.settings !== undefined &&
            (obj.settings = message.settings ? UserSettings.toJSON(message.settings) : undefined);
        if (message.quotas) {
            obj.quotas = message.quotas.map((e) => (e ? UserQuota.toJSON(e) : undefined));
        } else {
            obj.quotas = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UserSpec>, I>>(object: I): UserSpec {
        const message = { ...baseUserSpec } as UserSpec;
        message.name = object.name ?? '';
        message.password = object.password ?? '';
        message.generatePassword = object.generatePassword ?? undefined;
        message.permissions = object.permissions?.map((e) => Permission.fromPartial(e)) || [];
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? UserSettings.fromPartial(object.settings)
                : undefined;
        message.quotas = object.quotas?.map((e) => UserQuota.fromPartial(e)) || [];
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
