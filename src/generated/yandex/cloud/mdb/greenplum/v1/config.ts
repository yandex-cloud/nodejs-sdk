/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Int64Value, BoolValue, DoubleValue } from '../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.mdb.greenplum.v1';

export enum LogErrorVerbosity {
    LOG_ERROR_VERBOSITY_UNSPECIFIED = 0,
    TERSE = 1,
    DEFAULT = 2,
    VERBOSE = 3,
    UNRECOGNIZED = -1,
}

export function logErrorVerbosityFromJSON(object: any): LogErrorVerbosity {
    switch (object) {
        case 0:
        case 'LOG_ERROR_VERBOSITY_UNSPECIFIED':
            return LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED;
        case 1:
        case 'TERSE':
            return LogErrorVerbosity.TERSE;
        case 2:
        case 'DEFAULT':
            return LogErrorVerbosity.DEFAULT;
        case 3:
        case 'VERBOSE':
            return LogErrorVerbosity.VERBOSE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return LogErrorVerbosity.UNRECOGNIZED;
    }
}

export function logErrorVerbosityToJSON(object: LogErrorVerbosity): string {
    switch (object) {
        case LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED:
            return 'LOG_ERROR_VERBOSITY_UNSPECIFIED';
        case LogErrorVerbosity.TERSE:
            return 'TERSE';
        case LogErrorVerbosity.DEFAULT:
            return 'DEFAULT';
        case LogErrorVerbosity.VERBOSE:
            return 'VERBOSE';
        default:
            return 'UNKNOWN';
    }
}

export enum LogLevelMessage {
    LOG_LEVEL_MESSAGE_UNSPECIFIED = 0,
    DEBUG5 = 1,
    DEBUG4 = 2,
    DEBUG3 = 3,
    DEBUG2 = 4,
    DEBUG1 = 5,
    INFO = 6,
    NOTICE = 7,
    WARNING = 8,
    ERROR = 9,
    FATAL = 10,
    PANIC = 11,
    UNRECOGNIZED = -1,
}

export function logLevelMessageFromJSON(object: any): LogLevelMessage {
    switch (object) {
        case 0:
        case 'LOG_LEVEL_MESSAGE_UNSPECIFIED':
            return LogLevelMessage.LOG_LEVEL_MESSAGE_UNSPECIFIED;
        case 1:
        case 'DEBUG5':
            return LogLevelMessage.DEBUG5;
        case 2:
        case 'DEBUG4':
            return LogLevelMessage.DEBUG4;
        case 3:
        case 'DEBUG3':
            return LogLevelMessage.DEBUG3;
        case 4:
        case 'DEBUG2':
            return LogLevelMessage.DEBUG2;
        case 5:
        case 'DEBUG1':
            return LogLevelMessage.DEBUG1;
        case 6:
        case 'INFO':
            return LogLevelMessage.INFO;
        case 7:
        case 'NOTICE':
            return LogLevelMessage.NOTICE;
        case 8:
        case 'WARNING':
            return LogLevelMessage.WARNING;
        case 9:
        case 'ERROR':
            return LogLevelMessage.ERROR;
        case 10:
        case 'FATAL':
            return LogLevelMessage.FATAL;
        case 11:
        case 'PANIC':
            return LogLevelMessage.PANIC;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return LogLevelMessage.UNRECOGNIZED;
    }
}

export function logLevelMessageToJSON(object: LogLevelMessage): string {
    switch (object) {
        case LogLevelMessage.LOG_LEVEL_MESSAGE_UNSPECIFIED:
            return 'LOG_LEVEL_MESSAGE_UNSPECIFIED';
        case LogLevelMessage.DEBUG5:
            return 'DEBUG5';
        case LogLevelMessage.DEBUG4:
            return 'DEBUG4';
        case LogLevelMessage.DEBUG3:
            return 'DEBUG3';
        case LogLevelMessage.DEBUG2:
            return 'DEBUG2';
        case LogLevelMessage.DEBUG1:
            return 'DEBUG1';
        case LogLevelMessage.INFO:
            return 'INFO';
        case LogLevelMessage.NOTICE:
            return 'NOTICE';
        case LogLevelMessage.WARNING:
            return 'WARNING';
        case LogLevelMessage.ERROR:
            return 'ERROR';
        case LogLevelMessage.FATAL:
            return 'FATAL';
        case LogLevelMessage.PANIC:
            return 'PANIC';
        default:
            return 'UNKNOWN';
    }
}

export enum LogStatement {
    /** LOG_STATEMENT_UNSPECIFIED - LogStatement not explicitly set (uses defaults). */
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
        case 'LOG_STATEMENT_UNSPECIFIED':
            return LogStatement.LOG_STATEMENT_UNSPECIFIED;
        case 1:
        case 'NONE':
            return LogStatement.NONE;
        case 2:
        case 'DDL':
            return LogStatement.DDL;
        case 3:
        case 'MOD':
            return LogStatement.MOD;
        case 4:
        case 'ALL':
            return LogStatement.ALL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return LogStatement.UNRECOGNIZED;
    }
}

export function logStatementToJSON(object: LogStatement): string {
    switch (object) {
        case LogStatement.LOG_STATEMENT_UNSPECIFIED:
            return 'LOG_STATEMENT_UNSPECIFIED';
        case LogStatement.NONE:
            return 'NONE';
        case LogStatement.DDL:
            return 'DDL';
        case LogStatement.MOD:
            return 'MOD';
        case LogStatement.ALL:
            return 'ALL';
        default:
            return 'UNKNOWN';
    }
}

/**
 * Specifies the mode for triggering automatic statistics collection with ANALYZE.
 * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_autostats_mode
 */
export enum GPAutostatsMode {
    /** GP_AUTOSTATS_MODE_UNSPECIFIED - GPAutostatsMode not explicitly set (uses defaults). */
    GP_AUTOSTATS_MODE_UNSPECIFIED = 0,
    /** GP_AUTOSTATS_MODE_NONE - Disable auto-ANALYZE completely. Stats will be updated only via manual ANALYZE calls. */
    GP_AUTOSTATS_MODE_NONE = 1,
    /** GP_AUTOSTATS_MODE_ON_CHANGE - Run ANALYZE when data changes exceed threshold (e.g., after INSERT/UPDATE/DELETE). */
    GP_AUTOSTATS_MODE_ON_CHANGE = 2,
    /** GP_AUTOSTATS_MODE_ON_NO_STATS - Run ANALYZE only if no stats exist (e.g., new or cleared table). */
    GP_AUTOSTATS_MODE_ON_NO_STATS = 3,
    UNRECOGNIZED = -1,
}

export function gPAutostatsModeFromJSON(object: any): GPAutostatsMode {
    switch (object) {
        case 0:
        case 'GP_AUTOSTATS_MODE_UNSPECIFIED':
            return GPAutostatsMode.GP_AUTOSTATS_MODE_UNSPECIFIED;
        case 1:
        case 'GP_AUTOSTATS_MODE_NONE':
            return GPAutostatsMode.GP_AUTOSTATS_MODE_NONE;
        case 2:
        case 'GP_AUTOSTATS_MODE_ON_CHANGE':
            return GPAutostatsMode.GP_AUTOSTATS_MODE_ON_CHANGE;
        case 3:
        case 'GP_AUTOSTATS_MODE_ON_NO_STATS':
            return GPAutostatsMode.GP_AUTOSTATS_MODE_ON_NO_STATS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return GPAutostatsMode.UNRECOGNIZED;
    }
}

export function gPAutostatsModeToJSON(object: GPAutostatsMode): string {
    switch (object) {
        case GPAutostatsMode.GP_AUTOSTATS_MODE_UNSPECIFIED:
            return 'GP_AUTOSTATS_MODE_UNSPECIFIED';
        case GPAutostatsMode.GP_AUTOSTATS_MODE_NONE:
            return 'GP_AUTOSTATS_MODE_NONE';
        case GPAutostatsMode.GP_AUTOSTATS_MODE_ON_CHANGE:
            return 'GP_AUTOSTATS_MODE_ON_CHANGE';
        case GPAutostatsMode.GP_AUTOSTATS_MODE_ON_NO_STATS:
            return 'GP_AUTOSTATS_MODE_ON_NO_STATS';
        default:
            return 'UNKNOWN';
    }
}

export interface Resources {
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
    /** Route server pool mode. */
    mode: ConnectionPoolerConfig_PoolMode;
    /**
     * The number of servers in the server pool. Clients are placed in a wait queue when all servers are busy.
     *
     * Set to zero to disable the limit.
     */
    size?: number;
    /**
     * Client pool idle timeout, in seconds.
     *
     * Drop stale client connection after this much seconds of idleness, which is not in transaction.
     *
     * Set to zero to disable.
     */
    clientIdleTimeout?: number;
    /**
     * Client pool idle in transaction timeout, in seconds.
     *
     * Drop client connection in transaction after this much seconds of idleness.
     *
     * Set to zero to disable.
     */
    idleInTransactionTimeout?: number;
}

export enum ConnectionPoolerConfig_PoolMode {
    /** POOL_MODE_UNSPECIFIED - PoolMode not explicitly set (uses defaults). */
    POOL_MODE_UNSPECIFIED = 0,
    /** SESSION - Assign server connection to a client until it disconnects. Default value. */
    SESSION = 1,
    /** TRANSACTION - Assign server connection to a client for a transaction processing. */
    TRANSACTION = 2,
    UNRECOGNIZED = -1,
}

export function connectionPoolerConfig_PoolModeFromJSON(
    object: any,
): ConnectionPoolerConfig_PoolMode {
    switch (object) {
        case 0:
        case 'POOL_MODE_UNSPECIFIED':
            return ConnectionPoolerConfig_PoolMode.POOL_MODE_UNSPECIFIED;
        case 1:
        case 'SESSION':
            return ConnectionPoolerConfig_PoolMode.SESSION;
        case 2:
        case 'TRANSACTION':
            return ConnectionPoolerConfig_PoolMode.TRANSACTION;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ConnectionPoolerConfig_PoolMode.UNRECOGNIZED;
    }
}

export function connectionPoolerConfig_PoolModeToJSON(
    object: ConnectionPoolerConfig_PoolMode,
): string {
    switch (object) {
        case ConnectionPoolerConfig_PoolMode.POOL_MODE_UNSPECIFIED:
            return 'POOL_MODE_UNSPECIFIED';
        case ConnectionPoolerConfig_PoolMode.SESSION:
            return 'SESSION';
        case ConnectionPoolerConfig_PoolMode.TRANSACTION:
            return 'TRANSACTION';
        default:
            return 'UNKNOWN';
    }
}

/** Start time for background activity */
export interface BackgroundActivityStartAt {
    /** hours */
    hours: number;
    /** minutes */
    minutes: number;
}

/** Enables scripts that collects tables sizes to `*_sizes` tables in `mdb_toolkit` schema. */
export interface TableSizes {
    /** Time when start "table_sizes" script */
    starts: BackgroundActivityStartAt[];
}

/** Configuration for `ANALYZE` and `VACUUM` operations. */
export interface AnalyzeAndVacuum {
    /** Time when analyze will start */
    start?: BackgroundActivityStartAt;
    /** Maximum duration of the `ANALYZE` operation, in seconds. The default value is `36000`. As soon as this period expires, the `ANALYZE` operation will be forced to terminate. */
    analyzeTimeout?: number;
    /** Maximum duration of the `VACUUM` operation, in seconds. The default value is `36000`. As soon as this period expires, the `VACUUM` operation will be forced to terminate. */
    vacuumTimeout?: number;
}

/** Configuration for long running queries killer. */
export interface BackgroundActivitiesConfig {
    /** Enables scripts that collects tables sizes to `*_sizes` tables in `mdb_toolkit` schema. */
    tableSizes?: TableSizes;
    /** Configuration for `ANALYZE` and `VACUUM` operations. */
    analyzeAndVacuum?: AnalyzeAndVacuum;
    /** Configuration for long running queries killer. */
    queryKillerScripts?: QueryKillerScripts;
}

export interface QueryKiller {
    /** Use query killer or not */
    enable?: boolean;
    /** Maximum duration for this type of queries (in seconds). */
    maxAge?: number;
    /** Ignore these users when considering queries to terminate */
    ignoreUsers: string[];
}

export interface QueryKillerScripts {
    /** Configuration of script that kills long running queries that are in `idle` state. */
    idle?: QueryKiller;
    /** Configuration of script that kills long running queries that are in `idle in transaction` state. */
    idleInTransaction?: QueryKiller;
    /** Configuration of script that kills long running queries (in any state). */
    longRunning?: QueryKiller;
}

export interface MasterSubclusterConfig {
    /** Computational resources allocated to Greenplum® master subcluster hosts. */
    resources?: Resources;
}

export interface SegmentSubclusterConfig {
    /** Computational resources allocated to Greenplum® segment subcluster hosts. */
    resources?: Resources;
}

export interface GreenplumConfig6 {
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
    /** https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_add_column_inherits_table_setting */
    gpAddColumnInheritsTableSetting?: boolean;
    /**
     * Controls whether the Greenplum Database Global Deadlock Detector is enabled to manage concurrent UPDATE and DELETE operations on heap tables to improve performance. See Inserting, Updating, and Deleting Datain the Greenplum Database Administrator Guide. The default is off, the Global Deadlock Detector is deactivated.
     * If the Global Deadlock Detector is deactivated (the default), Greenplum Database runs concurrent update and delete operations on a heap table serially.
     * If the Global Deadlock Detector is enabled, concurrent updates are permitted and the Global Deadlock Detector determines when a deadlock exists, and breaks the deadlock by cancelling one or more backend processes associated with the youngest transaction(s) involved.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_enable_global_deadlock_detector
     */
    gpEnableGlobalDeadlockDetector?: boolean;
    /**
     * Specifies the executing interval (in seconds) of the global deadlock detector background worker process.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_global_deadlock_detector_period
     */
    gpGlobalDeadlockDetectorPeriod?: number;
    /**
     * Max amount of slice-processes for one query in one segment.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_max_slices
     */
    gpMaxSlices?: number;
    /**
     * Define amount of working processes in segment, that keeping in warm cash after end of query for usage again in next queries.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_cached_segworkers_threshold
     */
    gpCachedSegworkersThreshold?: number;
    /**
     * Max time (in ms) which query will wait lock free on object
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#lock_timeout
     */
    lockTimeout?: number;
    /**
     * Max time (in ms) which session can idle in open transaction
     * https://postgrespro.ru/docs/postgrespro/current/runtime-config-client#GUC-IDLE-IN-TRANSACTION-SESSION-TIMEOUT
     */
    idleInTransactionSessionTimeout?: number;
    /**
     * Percent of utilized Greenplum Database vmem that triggers the termination of queries.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#runaway_detector_activation_percent
     */
    runawayDetectorActivationPercent?: number;
    /**
     * Set memory limit (in MB) for working process. If a query executor process consumes more than this configured amount, then the process will not be cached for use in subsequent queries after the process completes.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_vmem_protect_segworker_cache_limit
     */
    gpVmemProtectSegworkerCacheLimit?: number;
    /** Forces ZSTD lib use Greenplum memory allocation system. */
    gpEnableZstdMemoryAccounting?: boolean;
    /**
     * Specifies the total maximum uncompressed size of a query execution plan multiplied by the number of Motion operators (slices) in the plan.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_max_plan_size
     */
    gpMaxPlanSize?: number;
    /**
     * Specifies the mode for triggering automatic statistics collection after DML.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_autostats_mode
     */
    gpAutostatsMode: GPAutostatsMode;
    /**
     * Specifies the threshold for automatic statistics collection when gp_autostats_mode is set to on_change.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_autostats_on_change_threshold
     */
    gpAutostatsOnChangeThreshold?: number;
    /**
     * Identifies the maximum percentage of system memory resources to allocate to resource groups on each Greenplum Database segment node.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_resource_group_memory_limit
     */
    gpResourceGroupMemoryLimit?: number;
    /**
     * This outputs a line to the server log detailing each successful connection. Some client programs, like psql,
     * attempt to connect twice while determining if a password is required, so duplicate "connection received" messages
     * do not always indicate a problem.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#log_connections
     */
    logConnections?: boolean;
    /**
     * This outputs a line in the server log at termination of a client session, and includes the duration of the session.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#log_disconnections
     */
    logDisconnections?: boolean;
    /**
     * By default, connection log messages only show the IP address of the connecting host.
     * Turning on this option causes logging of the host name as well. Note that depending on your host name
     * resolution setup this might impose a non-negligible performance penalty.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#log_hostname
     */
    logHostname?: boolean;
    /**
     * For each query, write total performance statistics of the query parser, planner, and executor to the server log.
     * This is a crude profiling instrument.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#log_statement_stats
     */
    logStatementStats?: boolean;
    /**
     * Logs the statement and its duration on a single log line if its duration is greater than or equal
     * to the specified number of milliseconds. Setting this to 0 will print all statements and their durations.
     * -1 deactivates the feature. For example, if you set it to 250 then all SQL statements that run 250ms or longer will be logged.
     * Enabling this option can be useful in tracking down unoptimized queries in your applications.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#log_min_duration_statement
     */
    logMinDurationStatement?: number;
    /**
     * Sets the amount of memory a Greenplum Database master instance uses for shared memory buffers.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#shared_buffers
     */
    masterSharedBuffers?: number;
    /**
     * The shared lock table is created with room to describe locks on max_locks_per_transaction * (max_connections + max_prepared_transactions) objects,
     * so no more than this many distinct objects can be locked at any one time.
     * This is not a hard limit on the number of locks taken by any one transaction, but rather a maximum average value.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#max_locks_per_transaction
     */
    maxLocksPerTransaction?: number;
    /**
     * Sets the amount of memory a Greenplum Database segment instance uses for shared memory buffers.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#shared_buffers
     */
    segmentSharedBuffers?: number;
    /**
     * Controls the amount of detail written in the server log for each message that is logged.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#log_error_verbosity
     */
    logErrorVerbosity: LogErrorVerbosity;
    /**
     * Controls which message levels are written to the server log.
     * Each level includes all the levels that follow it. The later the level, the fewer messages are sent to the log.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#log_min_messages
     */
    logMinMessages: LogLevelMessage;
}

export interface GreenplumConfigCBDB {
    /**
     * The maximum number of concurrent connections to the database server.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/7/greenplum-database/ref_guide-config_params-guc-list.html#max_connections
     */
    maxConnections?: number;
    /**
     * Sets the maximum size in megabytes of Write-Ahead Logging (WAL) files on disk per segment instance that can be reserved
     * when Greenplum streams data to the mirror segment instance or standby coordinator to keep it synchronized
     * with the corresponding primary segment instance or coordinator.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/7/greenplum-database/ref_guide-config_params-guc-list.html#max_slot_wal_keep_size
     */
    maxSlotWalKeepSize?: number;
    /**
     * Sets the maximum total disk size that all running queries are allowed to use for creating temporary spill files at each segment.
     * The default value is 0, which means a limit is not enforced.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/7/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_per_segment
     */
    gpWorkfileLimitPerSegment?: number;
    /**
     * Sets the maximum disk size an individual query is allowed to use for creating temporary spill files at each segment.
     * The default value is 0, which means a limit is not enforced.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/7/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_per_query
     */
    gpWorkfileLimitPerQuery?: number;
    /**
     * Sets the maximum number of temporary spill files (also known as workfiles) allowed per query per segment.
     * Spill files are created when executing a query that requires more memory than it is allocated.
     * The current query is terminated when the limit is exceeded.
     * Set the value to 0 (zero) to allow an unlimited number of spill files. master session reload
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/7/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_limit_files_per_query
     * Default value is 10000
     */
    gpWorkfileLimitFilesPerQuery?: number;
    /**
     * Sets the maximum number of transactions that can be in the "prepared" state simultaneously
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/7/greenplum-database/ref_guide-config_params-guc-list.html#max_prepared_transactions
     */
    maxPreparedTransactions?: number;
    /**
     * Specifies whether the temporary files created, when a hash aggregation or hash join operation spills to disk, are compressed.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/7/greenplum-database/ref_guide-config_params-guc-list.html#gp_workfile_compression
     */
    gpWorkfileCompression?: boolean;
    /**
     * Sets the maximum memory limit for a query. Helps avoid out-of-memory errors on a segment host during query processing as a result of setting statement_mem too high.
     * Taking into account the configuration of a single segment host, calculate max_statement_mem as follows:
     * (seghost_physical_memory) / (average_number_concurrent_queries)
     * When changing both max_statement_mem and statement_mem, max_statement_mem must be changed first, or listed first in the postgresql.conf file.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/7/greenplum-database/ref_guide-config_params-guc-list.html#max_statement_mem
     * Default value is 2097152000 (2000MB)
     */
    maxStatementMem?: number;
    /**
     * Controls which SQL statements are logged. DDL logs all data definition commands like CREATE, ALTER, and DROP commands.
     * MOD logs all DDL statements, plus INSERT, UPDATE, DELETE, TRUNCATE, and COPY FROM.
     * PREPARE and EXPLAIN ANALYZE statements are also logged if their contained command is of an appropriate type.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/7/greenplum-database/ref_guide-config_params-guc-list.html#log_statement
     * Default value is ddl
     */
    logStatement: LogStatement;
    /**
     * Controls whether the Greenplum Database Global Deadlock Detector is enabled to manage concurrent UPDATE and DELETE operations on heap tables to improve performance. See Inserting, Updating, and Deleting Datain the Greenplum Database Administrator Guide. The default is off, the Global Deadlock Detector is deactivated.
     * If the Global Deadlock Detector is deactivated (the default), Greenplum Database runs concurrent update and delete operations on a heap table serially.
     * If the Global Deadlock Detector is enabled, concurrent updates are permitted and the Global Deadlock Detector determines when a deadlock exists, and breaks the deadlock by cancelling one or more backend processes associated with the youngest transaction(s) involved.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/7/greenplum-database/ref_guide-config_params-guc-list.html#gp_enable_global_deadlock_detector
     */
    gpEnableGlobalDeadlockDetector?: boolean;
    /**
     * Specifies the executing interval (in seconds) of the global deadlock detector background worker process.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_global_deadlock_detector_period
     */
    gpGlobalDeadlockDetectorPeriod?: number;
    /**
     * Max amount of slice-processes for one query in one segment.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_max_slices
     */
    gpMaxSlices?: number;
    /**
     * Define amount of working processes in segment, that keeping in warm cash after end of query for usage again in next queries.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_cached_segworkers_threshold
     */
    gpCachedSegworkersThreshold?: number;
    /**
     * Max time (in ms) which query will wait lock free on object
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#lock_timeout
     */
    lockTimeout?: number;
    /**
     * Max time (in ms) which session can idle in open transaction
     * https://postgrespro.ru/docs/postgrespro/current/runtime-config-client#GUC-IDLE-IN-TRANSACTION-SESSION-TIMEOUT
     */
    idleInTransactionSessionTimeout?: number;
    /**
     * Percent of utilized Greenplum Database vmem that triggers the termination of queries.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#runaway_detector_activation_percent
     */
    runawayDetectorActivationPercent?: number;
    /**
     * Set memory limit (in MB) for working process. If a query executor process consumes more than this configured amount, then the process will not be cached for use in subsequent queries after the process completes.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_vmem_protect_segworker_cache_limit
     */
    gpVmemProtectSegworkerCacheLimit?: number;
    /** Forces ZSTD lib use Greenplum memory allocation system. */
    gpEnableZstdMemoryAccounting?: boolean;
    /**
     * Specifies the total maximum uncompressed size of a query execution plan multiplied by the number of Motion operators (slices) in the plan.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_max_plan_size
     */
    gpMaxPlanSize?: number;
    /**
     * Specifies the mode for triggering automatic statistics collection after DML.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_autostats_mode
     */
    gpAutostatsMode: GPAutostatsMode;
    /**
     * Specifies the threshold for automatic statistics collection when gp_autostats_mode is set to on_change.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_autostats_on_change_threshold
     */
    gpAutostatsOnChangeThreshold?: number;
    /**
     * Identifies the maximum percentage of system memory resources to allocate to resource groups on each Greenplum Database segment node.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_resource_group_memory_limit
     */
    gpResourceGroupMemoryLimit?: number;
    /**
     * This outputs a line to the server log detailing each successful connection. Some client programs, like psql,
     * attempt to connect twice while determining if a password is required, so duplicate "connection received" messages
     * do not always indicate a problem.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/7/greenplum-database/ref_guide-config_params-guc-list.html#log_connections
     */
    logConnections?: boolean;
    /**
     * This outputs a line in the server log at termination of a client session, and includes the duration of the session.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/7/greenplum-database/ref_guide-config_params-guc-list.html#log_disconnections
     */
    logDisconnections?: boolean;
    /**
     * By default, connection log messages only show the IP address of the connecting host.
     * Turning on this option causes logging of the host name as well. Note that depending on your host name
     * resolution setup this might impose a non-negligible performance penalty.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/7/greenplum-database/ref_guide-config_params-guc-list.html#log_hostname
     */
    logHostname?: boolean;
    /**
     * For each query, write total performance statistics of the query parser, planner, and executor to the server log.
     * This is a crude profiling instrument.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/7/greenplum-database/ref_guide-config_params-guc-list.html#log_statement_stats
     */
    logStatementStats?: boolean;
    /**
     * Logs the statement and its duration on a single log line if its duration is greater than or equal
     * to the specified number of milliseconds. Setting this to 0 will print all statements and their durations.
     * -1 deactivates the feature. For example, if you set it to 250 then all SQL statements that run 250ms or longer will be logged.
     * Enabling this option can be useful in tracking down unoptimized queries in your applications.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/7/greenplum-database/ref_guide-config_params-guc-list.html#log_statement_stats
     */
    logMinDurationStatement?: number;
    /**
     * Sets the amount of memory a Greenplum Database master instance uses for shared memory buffers.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/7/greenplum-database/ref_guide-config_params-guc-list.html#shared_buffers
     */
    masterSharedBuffers?: number;
    /**
     * The shared lock table is created with room to describe locks on max_locks_per_transaction * (max_connections + max_prepared_transactions) objects,
     * so no more than this many distinct objects can be locked at any one time.
     * This is not a hard limit on the number of locks taken by any one transaction, but rather a maximum average value.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/7/greenplum-database/ref_guide-config_params-guc-list.html#max_locks_per_transaction
     */
    maxLocksPerTransaction?: number;
    /**
     * Sets the amount of memory a Greenplum Database segment instance uses for shared memory buffers.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/7/greenplum-database/ref_guide-config_params-guc-list.html#shared_buffers
     */
    segmentSharedBuffers?: number;
    /**
     * Controls the amount of detail written in the server log for each message that is logged.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/7/greenplum-database/ref_guide-config_params-guc-list.html#log_error_verbosity
     */
    logErrorVerbosity: LogErrorVerbosity;
    /**
     * Controls which message levels are written to the server log.
     * Each level includes all the levels that follow it. The later the level, the fewer messages are sent to the log.
     * https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/7/greenplum-database/ref_guide-config_params-guc-list.html#log_min_messages
     */
    logMinMessages: LogLevelMessage;
}

export interface GreenplumConfigSet6 {
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
    /** Effective settings for an Odyssey® pooler (a combination of settings defined in [ConnectionPoolerConfigSet.user_config] and [ConnectionPoolerConfigSet.default_config]). */
    effectiveConfig?: ConnectionPoolerConfig;
    /** User-defined settings for an Odyssey® pooler. */
    userConfig?: ConnectionPoolerConfig;
    /** Default configuration for an Odyssey® pooler. */
    defaultConfig?: ConnectionPoolerConfig;
}

export interface GreenplumConfigSetCBDB {
    /**
     * Effective settings for a Cloudberry (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: GreenplumConfigCBDB;
    /** User-defined settings for a Cloudberry. */
    userConfig?: GreenplumConfigCBDB;
    /** Default configuration for a Cloudberry. */
    defaultConfig?: GreenplumConfigCBDB;
}

const baseResources: object = { resourcePresetId: '', diskSize: 0, diskTypeId: '' };

export const Resources: {
    encode(message: Resources, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Resources;
    fromJSON(object: any): Resources;
    toJSON(message: Resources): unknown;
    fromPartial<I extends Exact<DeepPartial<Resources>, I>>(object: I): Resources;
} = {
    encode(message: Resources, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resourcePresetId !== '') {
            writer.uint32(10).string(message.resourcePresetId);
        }
        if (message.diskSize !== 0) {
            writer.uint32(16).int64(message.diskSize);
        }
        if (message.diskTypeId !== '') {
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
                : '';
        message.diskSize =
            object.diskSize !== undefined && object.diskSize !== null ? Number(object.diskSize) : 0;
        message.diskTypeId =
            object.diskTypeId !== undefined && object.diskTypeId !== null
                ? String(object.diskTypeId)
                : '';
        return message;
    },

    toJSON(message: Resources): unknown {
        const obj: any = {};
        message.resourcePresetId !== undefined && (obj.resourcePresetId = message.resourcePresetId);
        message.diskSize !== undefined && (obj.diskSize = Math.round(message.diskSize));
        message.diskTypeId !== undefined && (obj.diskTypeId = message.diskTypeId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Resources>, I>>(object: I): Resources {
        const message = { ...baseResources } as Resources;
        message.resourcePresetId = object.resourcePresetId ?? '';
        message.diskSize = object.diskSize ?? 0;
        message.diskTypeId = object.diskTypeId ?? '';
        return message;
    },
};

const baseConnectionPoolerConfig: object = { mode: 0 };

export const ConnectionPoolerConfig: {
    encode(message: ConnectionPoolerConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionPoolerConfig;
    fromJSON(object: any): ConnectionPoolerConfig;
    toJSON(message: ConnectionPoolerConfig): unknown;
    fromPartial<I extends Exact<DeepPartial<ConnectionPoolerConfig>, I>>(object: I): ConnectionPoolerConfig;
} = {
    encode(message: ConnectionPoolerConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.size !== undefined) {
            Int64Value.encode({ value: message.size! }, writer.uint32(18).fork()).ldelim();
        }
        if (message.clientIdleTimeout !== undefined) {
            Int64Value.encode(
                { value: message.clientIdleTimeout! },
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.idleInTransactionTimeout !== undefined) {
            Int64Value.encode(
                { value: message.idleInTransactionTimeout! },
                writer.uint32(34).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionPoolerConfig {
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
                    message.clientIdleTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.idleInTransactionTimeout = Int64Value.decode(
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

    fromJSON(object: any): ConnectionPoolerConfig {
        const message = { ...baseConnectionPoolerConfig } as ConnectionPoolerConfig;
        message.mode =
            object.mode !== undefined && object.mode !== null
                ? connectionPoolerConfig_PoolModeFromJSON(object.mode)
                : 0;
        message.size =
            object.size !== undefined && object.size !== null ? Number(object.size) : undefined;
        message.clientIdleTimeout =
            object.clientIdleTimeout !== undefined && object.clientIdleTimeout !== null
                ? Number(object.clientIdleTimeout)
                : undefined;
        message.idleInTransactionTimeout =
            object.idleInTransactionTimeout !== undefined &&
            object.idleInTransactionTimeout !== null
                ? Number(object.idleInTransactionTimeout)
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
        message.idleInTransactionTimeout !== undefined &&
            (obj.idleInTransactionTimeout = message.idleInTransactionTimeout);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ConnectionPoolerConfig>, I>>(
        object: I,
    ): ConnectionPoolerConfig {
        const message = { ...baseConnectionPoolerConfig } as ConnectionPoolerConfig;
        message.mode = object.mode ?? 0;
        message.size = object.size ?? undefined;
        message.clientIdleTimeout = object.clientIdleTimeout ?? undefined;
        message.idleInTransactionTimeout = object.idleInTransactionTimeout ?? undefined;
        return message;
    },
};

const baseBackgroundActivityStartAt: object = { hours: 0, minutes: 0 };

export const BackgroundActivityStartAt: {
    encode(message: BackgroundActivityStartAt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BackgroundActivityStartAt;
    fromJSON(object: any): BackgroundActivityStartAt;
    toJSON(message: BackgroundActivityStartAt): unknown;
    fromPartial<I extends Exact<DeepPartial<BackgroundActivityStartAt>, I>>(object: I): BackgroundActivityStartAt;
} = {
    encode(
        message: BackgroundActivityStartAt,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.hours !== 0) {
            writer.uint32(8).int64(message.hours);
        }
        if (message.minutes !== 0) {
            writer.uint32(16).int64(message.minutes);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BackgroundActivityStartAt {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBackgroundActivityStartAt } as BackgroundActivityStartAt;
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
        const message = { ...baseBackgroundActivityStartAt } as BackgroundActivityStartAt;
        message.hours =
            object.hours !== undefined && object.hours !== null ? Number(object.hours) : 0;
        message.minutes =
            object.minutes !== undefined && object.minutes !== null ? Number(object.minutes) : 0;
        return message;
    },

    toJSON(message: BackgroundActivityStartAt): unknown {
        const obj: any = {};
        message.hours !== undefined && (obj.hours = Math.round(message.hours));
        message.minutes !== undefined && (obj.minutes = Math.round(message.minutes));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BackgroundActivityStartAt>, I>>(
        object: I,
    ): BackgroundActivityStartAt {
        const message = { ...baseBackgroundActivityStartAt } as BackgroundActivityStartAt;
        message.hours = object.hours ?? 0;
        message.minutes = object.minutes ?? 0;
        return message;
    },
};

const baseTableSizes: object = {};

export const TableSizes: {
    encode(message: TableSizes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableSizes;
    fromJSON(object: any): TableSizes;
    toJSON(message: TableSizes): unknown;
    fromPartial<I extends Exact<DeepPartial<TableSizes>, I>>(object: I): TableSizes;
} = {
    encode(message: TableSizes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
                    message.starts.push(BackgroundActivityStartAt.decode(reader, reader.uint32()));
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
            BackgroundActivityStartAt.fromJSON(e),
        );
        return message;
    },

    toJSON(message: TableSizes): unknown {
        const obj: any = {};
        if (message.starts) {
            obj.starts = message.starts.map((e) =>
                e ? BackgroundActivityStartAt.toJSON(e) : undefined,
            );
        } else {
            obj.starts = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TableSizes>, I>>(object: I): TableSizes {
        const message = { ...baseTableSizes } as TableSizes;
        message.starts = object.starts?.map((e) => BackgroundActivityStartAt.fromPartial(e)) || [];
        return message;
    },
};

const baseAnalyzeAndVacuum: object = {};

export const AnalyzeAndVacuum: {
    encode(message: AnalyzeAndVacuum, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AnalyzeAndVacuum;
    fromJSON(object: any): AnalyzeAndVacuum;
    toJSON(message: AnalyzeAndVacuum): unknown;
    fromPartial<I extends Exact<DeepPartial<AnalyzeAndVacuum>, I>>(object: I): AnalyzeAndVacuum;
} = {
    encode(message: AnalyzeAndVacuum, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.start !== undefined) {
            BackgroundActivityStartAt.encode(message.start, writer.uint32(10).fork()).ldelim();
        }
        if (message.analyzeTimeout !== undefined) {
            Int64Value.encode(
                { value: message.analyzeTimeout! },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.vacuumTimeout !== undefined) {
            Int64Value.encode({ value: message.vacuumTimeout! }, writer.uint32(26).fork()).ldelim();
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
                    message.start = BackgroundActivityStartAt.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.analyzeTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.vacuumTimeout = Int64Value.decode(reader, reader.uint32()).value;
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
        message.analyzeTimeout !== undefined && (obj.analyzeTimeout = message.analyzeTimeout);
        message.vacuumTimeout !== undefined && (obj.vacuumTimeout = message.vacuumTimeout);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AnalyzeAndVacuum>, I>>(object: I): AnalyzeAndVacuum {
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

const baseBackgroundActivitiesConfig: object = {};

export const BackgroundActivitiesConfig: {
    encode(message: BackgroundActivitiesConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BackgroundActivitiesConfig;
    fromJSON(object: any): BackgroundActivitiesConfig;
    toJSON(message: BackgroundActivitiesConfig): unknown;
    fromPartial<I extends Exact<DeepPartial<BackgroundActivitiesConfig>, I>>(object: I): BackgroundActivitiesConfig;
} = {
    encode(
        message: BackgroundActivitiesConfig,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.tableSizes !== undefined) {
            TableSizes.encode(message.tableSizes, writer.uint32(10).fork()).ldelim();
        }
        if (message.analyzeAndVacuum !== undefined) {
            AnalyzeAndVacuum.encode(message.analyzeAndVacuum, writer.uint32(18).fork()).ldelim();
        }
        if (message.queryKillerScripts !== undefined) {
            QueryKillerScripts.encode(
                message.queryKillerScripts,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BackgroundActivitiesConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBackgroundActivitiesConfig } as BackgroundActivitiesConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tableSizes = TableSizes.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.analyzeAndVacuum = AnalyzeAndVacuum.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.queryKillerScripts = QueryKillerScripts.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BackgroundActivitiesConfig {
        const message = { ...baseBackgroundActivitiesConfig } as BackgroundActivitiesConfig;
        message.tableSizes =
            object.tableSizes !== undefined && object.tableSizes !== null
                ? TableSizes.fromJSON(object.tableSizes)
                : undefined;
        message.analyzeAndVacuum =
            object.analyzeAndVacuum !== undefined && object.analyzeAndVacuum !== null
                ? AnalyzeAndVacuum.fromJSON(object.analyzeAndVacuum)
                : undefined;
        message.queryKillerScripts =
            object.queryKillerScripts !== undefined && object.queryKillerScripts !== null
                ? QueryKillerScripts.fromJSON(object.queryKillerScripts)
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
        message.queryKillerScripts !== undefined &&
            (obj.queryKillerScripts = message.queryKillerScripts
                ? QueryKillerScripts.toJSON(message.queryKillerScripts)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BackgroundActivitiesConfig>, I>>(
        object: I,
    ): BackgroundActivitiesConfig {
        const message = { ...baseBackgroundActivitiesConfig } as BackgroundActivitiesConfig;
        message.tableSizes =
            object.tableSizes !== undefined && object.tableSizes !== null
                ? TableSizes.fromPartial(object.tableSizes)
                : undefined;
        message.analyzeAndVacuum =
            object.analyzeAndVacuum !== undefined && object.analyzeAndVacuum !== null
                ? AnalyzeAndVacuum.fromPartial(object.analyzeAndVacuum)
                : undefined;
        message.queryKillerScripts =
            object.queryKillerScripts !== undefined && object.queryKillerScripts !== null
                ? QueryKillerScripts.fromPartial(object.queryKillerScripts)
                : undefined;
        return message;
    },
};

const baseQueryKiller: object = { ignoreUsers: '' };

export const QueryKiller: {
    encode(message: QueryKiller, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryKiller;
    fromJSON(object: any): QueryKiller;
    toJSON(message: QueryKiller): unknown;
    fromPartial<I extends Exact<DeepPartial<QueryKiller>, I>>(object: I): QueryKiller;
} = {
    encode(message: QueryKiller, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.enable !== undefined) {
            BoolValue.encode({ value: message.enable! }, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxAge !== undefined) {
            Int64Value.encode({ value: message.maxAge! }, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.ignoreUsers) {
            writer.uint32(26).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryKiller {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryKiller } as QueryKiller;
        message.ignoreUsers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enable = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.maxAge = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.ignoreUsers.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryKiller {
        const message = { ...baseQueryKiller } as QueryKiller;
        message.enable =
            object.enable !== undefined && object.enable !== null
                ? Boolean(object.enable)
                : undefined;
        message.maxAge =
            object.maxAge !== undefined && object.maxAge !== null
                ? Number(object.maxAge)
                : undefined;
        message.ignoreUsers = (object.ignoreUsers ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: QueryKiller): unknown {
        const obj: any = {};
        message.enable !== undefined && (obj.enable = message.enable);
        message.maxAge !== undefined && (obj.maxAge = message.maxAge);
        if (message.ignoreUsers) {
            obj.ignoreUsers = message.ignoreUsers.map((e) => e);
        } else {
            obj.ignoreUsers = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<QueryKiller>, I>>(object: I): QueryKiller {
        const message = { ...baseQueryKiller } as QueryKiller;
        message.enable = object.enable ?? undefined;
        message.maxAge = object.maxAge ?? undefined;
        message.ignoreUsers = object.ignoreUsers?.map((e) => e) || [];
        return message;
    },
};

const baseQueryKillerScripts: object = {};

export const QueryKillerScripts: {
    encode(message: QueryKillerScripts, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryKillerScripts;
    fromJSON(object: any): QueryKillerScripts;
    toJSON(message: QueryKillerScripts): unknown;
    fromPartial<I extends Exact<DeepPartial<QueryKillerScripts>, I>>(object: I): QueryKillerScripts;
} = {
    encode(message: QueryKillerScripts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.idle !== undefined) {
            QueryKiller.encode(message.idle, writer.uint32(10).fork()).ldelim();
        }
        if (message.idleInTransaction !== undefined) {
            QueryKiller.encode(message.idleInTransaction, writer.uint32(18).fork()).ldelim();
        }
        if (message.longRunning !== undefined) {
            QueryKiller.encode(message.longRunning, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryKillerScripts {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryKillerScripts } as QueryKillerScripts;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.idle = QueryKiller.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.idleInTransaction = QueryKiller.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.longRunning = QueryKiller.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryKillerScripts {
        const message = { ...baseQueryKillerScripts } as QueryKillerScripts;
        message.idle =
            object.idle !== undefined && object.idle !== null
                ? QueryKiller.fromJSON(object.idle)
                : undefined;
        message.idleInTransaction =
            object.idleInTransaction !== undefined && object.idleInTransaction !== null
                ? QueryKiller.fromJSON(object.idleInTransaction)
                : undefined;
        message.longRunning =
            object.longRunning !== undefined && object.longRunning !== null
                ? QueryKiller.fromJSON(object.longRunning)
                : undefined;
        return message;
    },

    toJSON(message: QueryKillerScripts): unknown {
        const obj: any = {};
        message.idle !== undefined &&
            (obj.idle = message.idle ? QueryKiller.toJSON(message.idle) : undefined);
        message.idleInTransaction !== undefined &&
            (obj.idleInTransaction = message.idleInTransaction
                ? QueryKiller.toJSON(message.idleInTransaction)
                : undefined);
        message.longRunning !== undefined &&
            (obj.longRunning = message.longRunning
                ? QueryKiller.toJSON(message.longRunning)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<QueryKillerScripts>, I>>(
        object: I,
    ): QueryKillerScripts {
        const message = { ...baseQueryKillerScripts } as QueryKillerScripts;
        message.idle =
            object.idle !== undefined && object.idle !== null
                ? QueryKiller.fromPartial(object.idle)
                : undefined;
        message.idleInTransaction =
            object.idleInTransaction !== undefined && object.idleInTransaction !== null
                ? QueryKiller.fromPartial(object.idleInTransaction)
                : undefined;
        message.longRunning =
            object.longRunning !== undefined && object.longRunning !== null
                ? QueryKiller.fromPartial(object.longRunning)
                : undefined;
        return message;
    },
};

const baseMasterSubclusterConfig: object = {};

export const MasterSubclusterConfig: {
    encode(message: MasterSubclusterConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MasterSubclusterConfig;
    fromJSON(object: any): MasterSubclusterConfig;
    toJSON(message: MasterSubclusterConfig): unknown;
    fromPartial<I extends Exact<DeepPartial<MasterSubclusterConfig>, I>>(object: I): MasterSubclusterConfig;
} = {
    encode(message: MasterSubclusterConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MasterSubclusterConfig {
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
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MasterSubclusterConfig>, I>>(
        object: I,
    ): MasterSubclusterConfig {
        const message = { ...baseMasterSubclusterConfig } as MasterSubclusterConfig;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};

const baseSegmentSubclusterConfig: object = {};

export const SegmentSubclusterConfig: {
    encode(message: SegmentSubclusterConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SegmentSubclusterConfig;
    fromJSON(object: any): SegmentSubclusterConfig;
    toJSON(message: SegmentSubclusterConfig): unknown;
    fromPartial<I extends Exact<DeepPartial<SegmentSubclusterConfig>, I>>(object: I): SegmentSubclusterConfig;
} = {
    encode(message: SegmentSubclusterConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SegmentSubclusterConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSegmentSubclusterConfig } as SegmentSubclusterConfig;
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
        const message = { ...baseSegmentSubclusterConfig } as SegmentSubclusterConfig;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },

    toJSON(message: SegmentSubclusterConfig): unknown {
        const obj: any = {};
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SegmentSubclusterConfig>, I>>(
        object: I,
    ): SegmentSubclusterConfig {
        const message = { ...baseSegmentSubclusterConfig } as SegmentSubclusterConfig;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};

const baseGreenplumConfig6: object = {
    logStatement: 0,
    gpAutostatsMode: 0,
    logErrorVerbosity: 0,
    logMinMessages: 0,
};

export const GreenplumConfig6: {
    encode(message: GreenplumConfig6, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumConfig6;
    fromJSON(object: any): GreenplumConfig6;
    toJSON(message: GreenplumConfig6): unknown;
    fromPartial<I extends Exact<DeepPartial<GreenplumConfig6>, I>>(object: I): GreenplumConfig6;
} = {
    encode(message: GreenplumConfig6, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.maxConnections !== undefined) {
            Int64Value.encode(
                { value: message.maxConnections! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.maxSlotWalKeepSize !== undefined) {
            Int64Value.encode(
                { value: message.maxSlotWalKeepSize! },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.gpWorkfileLimitPerSegment !== undefined) {
            Int64Value.encode(
                { value: message.gpWorkfileLimitPerSegment! },
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.gpWorkfileLimitPerQuery !== undefined) {
            Int64Value.encode(
                { value: message.gpWorkfileLimitPerQuery! },
                writer.uint32(34).fork(),
            ).ldelim();
        }
        if (message.gpWorkfileLimitFilesPerQuery !== undefined) {
            Int64Value.encode(
                { value: message.gpWorkfileLimitFilesPerQuery! },
                writer.uint32(42).fork(),
            ).ldelim();
        }
        if (message.maxPreparedTransactions !== undefined) {
            Int64Value.encode(
                { value: message.maxPreparedTransactions! },
                writer.uint32(50).fork(),
            ).ldelim();
        }
        if (message.gpWorkfileCompression !== undefined) {
            BoolValue.encode(
                { value: message.gpWorkfileCompression! },
                writer.uint32(58).fork(),
            ).ldelim();
        }
        if (message.maxStatementMem !== undefined) {
            Int64Value.encode(
                { value: message.maxStatementMem! },
                writer.uint32(66).fork(),
            ).ldelim();
        }
        if (message.logStatement !== 0) {
            writer.uint32(72).int32(message.logStatement);
        }
        if (message.gpAddColumnInheritsTableSetting !== undefined) {
            BoolValue.encode(
                { value: message.gpAddColumnInheritsTableSetting! },
                writer.uint32(82).fork(),
            ).ldelim();
        }
        if (message.gpEnableGlobalDeadlockDetector !== undefined) {
            BoolValue.encode(
                { value: message.gpEnableGlobalDeadlockDetector! },
                writer.uint32(90).fork(),
            ).ldelim();
        }
        if (message.gpGlobalDeadlockDetectorPeriod !== undefined) {
            Int64Value.encode(
                { value: message.gpGlobalDeadlockDetectorPeriod! },
                writer.uint32(98).fork(),
            ).ldelim();
        }
        if (message.gpMaxSlices !== undefined) {
            Int64Value.encode({ value: message.gpMaxSlices! }, writer.uint32(106).fork()).ldelim();
        }
        if (message.gpCachedSegworkersThreshold !== undefined) {
            Int64Value.encode(
                { value: message.gpCachedSegworkersThreshold! },
                writer.uint32(114).fork(),
            ).ldelim();
        }
        if (message.lockTimeout !== undefined) {
            Int64Value.encode({ value: message.lockTimeout! }, writer.uint32(122).fork()).ldelim();
        }
        if (message.idleInTransactionSessionTimeout !== undefined) {
            Int64Value.encode(
                { value: message.idleInTransactionSessionTimeout! },
                writer.uint32(130).fork(),
            ).ldelim();
        }
        if (message.runawayDetectorActivationPercent !== undefined) {
            Int64Value.encode(
                { value: message.runawayDetectorActivationPercent! },
                writer.uint32(138).fork(),
            ).ldelim();
        }
        if (message.gpVmemProtectSegworkerCacheLimit !== undefined) {
            Int64Value.encode(
                { value: message.gpVmemProtectSegworkerCacheLimit! },
                writer.uint32(146).fork(),
            ).ldelim();
        }
        if (message.gpEnableZstdMemoryAccounting !== undefined) {
            BoolValue.encode(
                { value: message.gpEnableZstdMemoryAccounting! },
                writer.uint32(154).fork(),
            ).ldelim();
        }
        if (message.gpMaxPlanSize !== undefined) {
            Int64Value.encode(
                { value: message.gpMaxPlanSize! },
                writer.uint32(162).fork(),
            ).ldelim();
        }
        if (message.gpAutostatsMode !== 0) {
            writer.uint32(168).int32(message.gpAutostatsMode);
        }
        if (message.gpAutostatsOnChangeThreshold !== undefined) {
            Int64Value.encode(
                { value: message.gpAutostatsOnChangeThreshold! },
                writer.uint32(178).fork(),
            ).ldelim();
        }
        if (message.gpResourceGroupMemoryLimit !== undefined) {
            DoubleValue.encode(
                { value: message.gpResourceGroupMemoryLimit! },
                writer.uint32(186).fork(),
            ).ldelim();
        }
        if (message.logConnections !== undefined) {
            BoolValue.encode(
                { value: message.logConnections! },
                writer.uint32(194).fork(),
            ).ldelim();
        }
        if (message.logDisconnections !== undefined) {
            BoolValue.encode(
                { value: message.logDisconnections! },
                writer.uint32(202).fork(),
            ).ldelim();
        }
        if (message.logHostname !== undefined) {
            BoolValue.encode({ value: message.logHostname! }, writer.uint32(210).fork()).ldelim();
        }
        if (message.logStatementStats !== undefined) {
            BoolValue.encode(
                { value: message.logStatementStats! },
                writer.uint32(218).fork(),
            ).ldelim();
        }
        if (message.logMinDurationStatement !== undefined) {
            Int64Value.encode(
                { value: message.logMinDurationStatement! },
                writer.uint32(226).fork(),
            ).ldelim();
        }
        if (message.masterSharedBuffers !== undefined) {
            Int64Value.encode(
                { value: message.masterSharedBuffers! },
                writer.uint32(234).fork(),
            ).ldelim();
        }
        if (message.maxLocksPerTransaction !== undefined) {
            Int64Value.encode(
                { value: message.maxLocksPerTransaction! },
                writer.uint32(242).fork(),
            ).ldelim();
        }
        if (message.segmentSharedBuffers !== undefined) {
            Int64Value.encode(
                { value: message.segmentSharedBuffers! },
                writer.uint32(250).fork(),
            ).ldelim();
        }
        if (message.logErrorVerbosity !== 0) {
            writer.uint32(256).int32(message.logErrorVerbosity);
        }
        if (message.logMinMessages !== 0) {
            writer.uint32(264).int32(message.logMinMessages);
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
                    message.maxConnections = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.maxSlotWalKeepSize = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.gpWorkfileLimitPerSegment = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 4:
                    message.gpWorkfileLimitPerQuery = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 5:
                    message.gpWorkfileLimitFilesPerQuery = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 6:
                    message.maxPreparedTransactions = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 7:
                    message.gpWorkfileCompression = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.maxStatementMem = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.logStatement = reader.int32() as any;
                    break;
                case 10:
                    message.gpAddColumnInheritsTableSetting = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 11:
                    message.gpEnableGlobalDeadlockDetector = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 12:
                    message.gpGlobalDeadlockDetectorPeriod = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 13:
                    message.gpMaxSlices = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 14:
                    message.gpCachedSegworkersThreshold = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 15:
                    message.lockTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 16:
                    message.idleInTransactionSessionTimeout = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 17:
                    message.runawayDetectorActivationPercent = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 18:
                    message.gpVmemProtectSegworkerCacheLimit = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 19:
                    message.gpEnableZstdMemoryAccounting = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 20:
                    message.gpMaxPlanSize = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 21:
                    message.gpAutostatsMode = reader.int32() as any;
                    break;
                case 22:
                    message.gpAutostatsOnChangeThreshold = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 23:
                    message.gpResourceGroupMemoryLimit = DoubleValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 24:
                    message.logConnections = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 25:
                    message.logDisconnections = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 26:
                    message.logHostname = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 27:
                    message.logStatementStats = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 28:
                    message.logMinDurationStatement = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 29:
                    message.masterSharedBuffers = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 30:
                    message.maxLocksPerTransaction = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 31:
                    message.segmentSharedBuffers = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 32:
                    message.logErrorVerbosity = reader.int32() as any;
                    break;
                case 33:
                    message.logMinMessages = reader.int32() as any;
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
            object.maxSlotWalKeepSize !== undefined && object.maxSlotWalKeepSize !== null
                ? Number(object.maxSlotWalKeepSize)
                : undefined;
        message.gpWorkfileLimitPerSegment =
            object.gpWorkfileLimitPerSegment !== undefined &&
            object.gpWorkfileLimitPerSegment !== null
                ? Number(object.gpWorkfileLimitPerSegment)
                : undefined;
        message.gpWorkfileLimitPerQuery =
            object.gpWorkfileLimitPerQuery !== undefined && object.gpWorkfileLimitPerQuery !== null
                ? Number(object.gpWorkfileLimitPerQuery)
                : undefined;
        message.gpWorkfileLimitFilesPerQuery =
            object.gpWorkfileLimitFilesPerQuery !== undefined &&
            object.gpWorkfileLimitFilesPerQuery !== null
                ? Number(object.gpWorkfileLimitFilesPerQuery)
                : undefined;
        message.maxPreparedTransactions =
            object.maxPreparedTransactions !== undefined && object.maxPreparedTransactions !== null
                ? Number(object.maxPreparedTransactions)
                : undefined;
        message.gpWorkfileCompression =
            object.gpWorkfileCompression !== undefined && object.gpWorkfileCompression !== null
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
        message.gpEnableGlobalDeadlockDetector =
            object.gpEnableGlobalDeadlockDetector !== undefined &&
            object.gpEnableGlobalDeadlockDetector !== null
                ? Boolean(object.gpEnableGlobalDeadlockDetector)
                : undefined;
        message.gpGlobalDeadlockDetectorPeriod =
            object.gpGlobalDeadlockDetectorPeriod !== undefined &&
            object.gpGlobalDeadlockDetectorPeriod !== null
                ? Number(object.gpGlobalDeadlockDetectorPeriod)
                : undefined;
        message.gpMaxSlices =
            object.gpMaxSlices !== undefined && object.gpMaxSlices !== null
                ? Number(object.gpMaxSlices)
                : undefined;
        message.gpCachedSegworkersThreshold =
            object.gpCachedSegworkersThreshold !== undefined &&
            object.gpCachedSegworkersThreshold !== null
                ? Number(object.gpCachedSegworkersThreshold)
                : undefined;
        message.lockTimeout =
            object.lockTimeout !== undefined && object.lockTimeout !== null
                ? Number(object.lockTimeout)
                : undefined;
        message.idleInTransactionSessionTimeout =
            object.idleInTransactionSessionTimeout !== undefined &&
            object.idleInTransactionSessionTimeout !== null
                ? Number(object.idleInTransactionSessionTimeout)
                : undefined;
        message.runawayDetectorActivationPercent =
            object.runawayDetectorActivationPercent !== undefined &&
            object.runawayDetectorActivationPercent !== null
                ? Number(object.runawayDetectorActivationPercent)
                : undefined;
        message.gpVmemProtectSegworkerCacheLimit =
            object.gpVmemProtectSegworkerCacheLimit !== undefined &&
            object.gpVmemProtectSegworkerCacheLimit !== null
                ? Number(object.gpVmemProtectSegworkerCacheLimit)
                : undefined;
        message.gpEnableZstdMemoryAccounting =
            object.gpEnableZstdMemoryAccounting !== undefined &&
            object.gpEnableZstdMemoryAccounting !== null
                ? Boolean(object.gpEnableZstdMemoryAccounting)
                : undefined;
        message.gpMaxPlanSize =
            object.gpMaxPlanSize !== undefined && object.gpMaxPlanSize !== null
                ? Number(object.gpMaxPlanSize)
                : undefined;
        message.gpAutostatsMode =
            object.gpAutostatsMode !== undefined && object.gpAutostatsMode !== null
                ? gPAutostatsModeFromJSON(object.gpAutostatsMode)
                : 0;
        message.gpAutostatsOnChangeThreshold =
            object.gpAutostatsOnChangeThreshold !== undefined &&
            object.gpAutostatsOnChangeThreshold !== null
                ? Number(object.gpAutostatsOnChangeThreshold)
                : undefined;
        message.gpResourceGroupMemoryLimit =
            object.gpResourceGroupMemoryLimit !== undefined &&
            object.gpResourceGroupMemoryLimit !== null
                ? Number(object.gpResourceGroupMemoryLimit)
                : undefined;
        message.logConnections =
            object.logConnections !== undefined && object.logConnections !== null
                ? Boolean(object.logConnections)
                : undefined;
        message.logDisconnections =
            object.logDisconnections !== undefined && object.logDisconnections !== null
                ? Boolean(object.logDisconnections)
                : undefined;
        message.logHostname =
            object.logHostname !== undefined && object.logHostname !== null
                ? Boolean(object.logHostname)
                : undefined;
        message.logStatementStats =
            object.logStatementStats !== undefined && object.logStatementStats !== null
                ? Boolean(object.logStatementStats)
                : undefined;
        message.logMinDurationStatement =
            object.logMinDurationStatement !== undefined && object.logMinDurationStatement !== null
                ? Number(object.logMinDurationStatement)
                : undefined;
        message.masterSharedBuffers =
            object.masterSharedBuffers !== undefined && object.masterSharedBuffers !== null
                ? Number(object.masterSharedBuffers)
                : undefined;
        message.maxLocksPerTransaction =
            object.maxLocksPerTransaction !== undefined && object.maxLocksPerTransaction !== null
                ? Number(object.maxLocksPerTransaction)
                : undefined;
        message.segmentSharedBuffers =
            object.segmentSharedBuffers !== undefined && object.segmentSharedBuffers !== null
                ? Number(object.segmentSharedBuffers)
                : undefined;
        message.logErrorVerbosity =
            object.logErrorVerbosity !== undefined && object.logErrorVerbosity !== null
                ? logErrorVerbosityFromJSON(object.logErrorVerbosity)
                : 0;
        message.logMinMessages =
            object.logMinMessages !== undefined && object.logMinMessages !== null
                ? logLevelMessageFromJSON(object.logMinMessages)
                : 0;
        return message;
    },

    toJSON(message: GreenplumConfig6): unknown {
        const obj: any = {};
        message.maxConnections !== undefined && (obj.maxConnections = message.maxConnections);
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
        message.maxStatementMem !== undefined && (obj.maxStatementMem = message.maxStatementMem);
        message.logStatement !== undefined &&
            (obj.logStatement = logStatementToJSON(message.logStatement));
        message.gpAddColumnInheritsTableSetting !== undefined &&
            (obj.gpAddColumnInheritsTableSetting = message.gpAddColumnInheritsTableSetting);
        message.gpEnableGlobalDeadlockDetector !== undefined &&
            (obj.gpEnableGlobalDeadlockDetector = message.gpEnableGlobalDeadlockDetector);
        message.gpGlobalDeadlockDetectorPeriod !== undefined &&
            (obj.gpGlobalDeadlockDetectorPeriod = message.gpGlobalDeadlockDetectorPeriod);
        message.gpMaxSlices !== undefined && (obj.gpMaxSlices = message.gpMaxSlices);
        message.gpCachedSegworkersThreshold !== undefined &&
            (obj.gpCachedSegworkersThreshold = message.gpCachedSegworkersThreshold);
        message.lockTimeout !== undefined && (obj.lockTimeout = message.lockTimeout);
        message.idleInTransactionSessionTimeout !== undefined &&
            (obj.idleInTransactionSessionTimeout = message.idleInTransactionSessionTimeout);
        message.runawayDetectorActivationPercent !== undefined &&
            (obj.runawayDetectorActivationPercent = message.runawayDetectorActivationPercent);
        message.gpVmemProtectSegworkerCacheLimit !== undefined &&
            (obj.gpVmemProtectSegworkerCacheLimit = message.gpVmemProtectSegworkerCacheLimit);
        message.gpEnableZstdMemoryAccounting !== undefined &&
            (obj.gpEnableZstdMemoryAccounting = message.gpEnableZstdMemoryAccounting);
        message.gpMaxPlanSize !== undefined && (obj.gpMaxPlanSize = message.gpMaxPlanSize);
        message.gpAutostatsMode !== undefined &&
            (obj.gpAutostatsMode = gPAutostatsModeToJSON(message.gpAutostatsMode));
        message.gpAutostatsOnChangeThreshold !== undefined &&
            (obj.gpAutostatsOnChangeThreshold = message.gpAutostatsOnChangeThreshold);
        message.gpResourceGroupMemoryLimit !== undefined &&
            (obj.gpResourceGroupMemoryLimit = message.gpResourceGroupMemoryLimit);
        message.logConnections !== undefined && (obj.logConnections = message.logConnections);
        message.logDisconnections !== undefined &&
            (obj.logDisconnections = message.logDisconnections);
        message.logHostname !== undefined && (obj.logHostname = message.logHostname);
        message.logStatementStats !== undefined &&
            (obj.logStatementStats = message.logStatementStats);
        message.logMinDurationStatement !== undefined &&
            (obj.logMinDurationStatement = message.logMinDurationStatement);
        message.masterSharedBuffers !== undefined &&
            (obj.masterSharedBuffers = message.masterSharedBuffers);
        message.maxLocksPerTransaction !== undefined &&
            (obj.maxLocksPerTransaction = message.maxLocksPerTransaction);
        message.segmentSharedBuffers !== undefined &&
            (obj.segmentSharedBuffers = message.segmentSharedBuffers);
        message.logErrorVerbosity !== undefined &&
            (obj.logErrorVerbosity = logErrorVerbosityToJSON(message.logErrorVerbosity));
        message.logMinMessages !== undefined &&
            (obj.logMinMessages = logLevelMessageToJSON(message.logMinMessages));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GreenplumConfig6>, I>>(object: I): GreenplumConfig6 {
        const message = { ...baseGreenplumConfig6 } as GreenplumConfig6;
        message.maxConnections = object.maxConnections ?? undefined;
        message.maxSlotWalKeepSize = object.maxSlotWalKeepSize ?? undefined;
        message.gpWorkfileLimitPerSegment = object.gpWorkfileLimitPerSegment ?? undefined;
        message.gpWorkfileLimitPerQuery = object.gpWorkfileLimitPerQuery ?? undefined;
        message.gpWorkfileLimitFilesPerQuery = object.gpWorkfileLimitFilesPerQuery ?? undefined;
        message.maxPreparedTransactions = object.maxPreparedTransactions ?? undefined;
        message.gpWorkfileCompression = object.gpWorkfileCompression ?? undefined;
        message.maxStatementMem = object.maxStatementMem ?? undefined;
        message.logStatement = object.logStatement ?? 0;
        message.gpAddColumnInheritsTableSetting =
            object.gpAddColumnInheritsTableSetting ?? undefined;
        message.gpEnableGlobalDeadlockDetector = object.gpEnableGlobalDeadlockDetector ?? undefined;
        message.gpGlobalDeadlockDetectorPeriod = object.gpGlobalDeadlockDetectorPeriod ?? undefined;
        message.gpMaxSlices = object.gpMaxSlices ?? undefined;
        message.gpCachedSegworkersThreshold = object.gpCachedSegworkersThreshold ?? undefined;
        message.lockTimeout = object.lockTimeout ?? undefined;
        message.idleInTransactionSessionTimeout =
            object.idleInTransactionSessionTimeout ?? undefined;
        message.runawayDetectorActivationPercent =
            object.runawayDetectorActivationPercent ?? undefined;
        message.gpVmemProtectSegworkerCacheLimit =
            object.gpVmemProtectSegworkerCacheLimit ?? undefined;
        message.gpEnableZstdMemoryAccounting = object.gpEnableZstdMemoryAccounting ?? undefined;
        message.gpMaxPlanSize = object.gpMaxPlanSize ?? undefined;
        message.gpAutostatsMode = object.gpAutostatsMode ?? 0;
        message.gpAutostatsOnChangeThreshold = object.gpAutostatsOnChangeThreshold ?? undefined;
        message.gpResourceGroupMemoryLimit = object.gpResourceGroupMemoryLimit ?? undefined;
        message.logConnections = object.logConnections ?? undefined;
        message.logDisconnections = object.logDisconnections ?? undefined;
        message.logHostname = object.logHostname ?? undefined;
        message.logStatementStats = object.logStatementStats ?? undefined;
        message.logMinDurationStatement = object.logMinDurationStatement ?? undefined;
        message.masterSharedBuffers = object.masterSharedBuffers ?? undefined;
        message.maxLocksPerTransaction = object.maxLocksPerTransaction ?? undefined;
        message.segmentSharedBuffers = object.segmentSharedBuffers ?? undefined;
        message.logErrorVerbosity = object.logErrorVerbosity ?? 0;
        message.logMinMessages = object.logMinMessages ?? 0;
        return message;
    },
};

const baseGreenplumConfigCBDB: object = {
    logStatement: 0,
    gpAutostatsMode: 0,
    logErrorVerbosity: 0,
    logMinMessages: 0,
};

export const GreenplumConfigCBDB: {
    encode(message: GreenplumConfigCBDB, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumConfigCBDB;
    fromJSON(object: any): GreenplumConfigCBDB;
    toJSON(message: GreenplumConfigCBDB): unknown;
    fromPartial<I extends Exact<DeepPartial<GreenplumConfigCBDB>, I>>(object: I): GreenplumConfigCBDB;
} = {
    encode(message: GreenplumConfigCBDB, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.maxConnections !== undefined) {
            Int64Value.encode(
                { value: message.maxConnections! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.maxSlotWalKeepSize !== undefined) {
            Int64Value.encode(
                { value: message.maxSlotWalKeepSize! },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.gpWorkfileLimitPerSegment !== undefined) {
            Int64Value.encode(
                { value: message.gpWorkfileLimitPerSegment! },
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.gpWorkfileLimitPerQuery !== undefined) {
            Int64Value.encode(
                { value: message.gpWorkfileLimitPerQuery! },
                writer.uint32(34).fork(),
            ).ldelim();
        }
        if (message.gpWorkfileLimitFilesPerQuery !== undefined) {
            Int64Value.encode(
                { value: message.gpWorkfileLimitFilesPerQuery! },
                writer.uint32(42).fork(),
            ).ldelim();
        }
        if (message.maxPreparedTransactions !== undefined) {
            Int64Value.encode(
                { value: message.maxPreparedTransactions! },
                writer.uint32(50).fork(),
            ).ldelim();
        }
        if (message.gpWorkfileCompression !== undefined) {
            BoolValue.encode(
                { value: message.gpWorkfileCompression! },
                writer.uint32(58).fork(),
            ).ldelim();
        }
        if (message.maxStatementMem !== undefined) {
            Int64Value.encode(
                { value: message.maxStatementMem! },
                writer.uint32(66).fork(),
            ).ldelim();
        }
        if (message.logStatement !== 0) {
            writer.uint32(72).int32(message.logStatement);
        }
        if (message.gpEnableGlobalDeadlockDetector !== undefined) {
            BoolValue.encode(
                { value: message.gpEnableGlobalDeadlockDetector! },
                writer.uint32(82).fork(),
            ).ldelim();
        }
        if (message.gpGlobalDeadlockDetectorPeriod !== undefined) {
            Int64Value.encode(
                { value: message.gpGlobalDeadlockDetectorPeriod! },
                writer.uint32(90).fork(),
            ).ldelim();
        }
        if (message.gpMaxSlices !== undefined) {
            Int64Value.encode({ value: message.gpMaxSlices! }, writer.uint32(98).fork()).ldelim();
        }
        if (message.gpCachedSegworkersThreshold !== undefined) {
            Int64Value.encode(
                { value: message.gpCachedSegworkersThreshold! },
                writer.uint32(106).fork(),
            ).ldelim();
        }
        if (message.lockTimeout !== undefined) {
            Int64Value.encode({ value: message.lockTimeout! }, writer.uint32(114).fork()).ldelim();
        }
        if (message.idleInTransactionSessionTimeout !== undefined) {
            Int64Value.encode(
                { value: message.idleInTransactionSessionTimeout! },
                writer.uint32(122).fork(),
            ).ldelim();
        }
        if (message.runawayDetectorActivationPercent !== undefined) {
            Int64Value.encode(
                { value: message.runawayDetectorActivationPercent! },
                writer.uint32(130).fork(),
            ).ldelim();
        }
        if (message.gpVmemProtectSegworkerCacheLimit !== undefined) {
            Int64Value.encode(
                { value: message.gpVmemProtectSegworkerCacheLimit! },
                writer.uint32(138).fork(),
            ).ldelim();
        }
        if (message.gpEnableZstdMemoryAccounting !== undefined) {
            BoolValue.encode(
                { value: message.gpEnableZstdMemoryAccounting! },
                writer.uint32(146).fork(),
            ).ldelim();
        }
        if (message.gpMaxPlanSize !== undefined) {
            Int64Value.encode(
                { value: message.gpMaxPlanSize! },
                writer.uint32(154).fork(),
            ).ldelim();
        }
        if (message.gpAutostatsMode !== 0) {
            writer.uint32(160).int32(message.gpAutostatsMode);
        }
        if (message.gpAutostatsOnChangeThreshold !== undefined) {
            Int64Value.encode(
                { value: message.gpAutostatsOnChangeThreshold! },
                writer.uint32(170).fork(),
            ).ldelim();
        }
        if (message.gpResourceGroupMemoryLimit !== undefined) {
            DoubleValue.encode(
                { value: message.gpResourceGroupMemoryLimit! },
                writer.uint32(178).fork(),
            ).ldelim();
        }
        if (message.logConnections !== undefined) {
            BoolValue.encode(
                { value: message.logConnections! },
                writer.uint32(186).fork(),
            ).ldelim();
        }
        if (message.logDisconnections !== undefined) {
            BoolValue.encode(
                { value: message.logDisconnections! },
                writer.uint32(194).fork(),
            ).ldelim();
        }
        if (message.logHostname !== undefined) {
            BoolValue.encode({ value: message.logHostname! }, writer.uint32(202).fork()).ldelim();
        }
        if (message.logStatementStats !== undefined) {
            BoolValue.encode(
                { value: message.logStatementStats! },
                writer.uint32(210).fork(),
            ).ldelim();
        }
        if (message.logMinDurationStatement !== undefined) {
            Int64Value.encode(
                { value: message.logMinDurationStatement! },
                writer.uint32(218).fork(),
            ).ldelim();
        }
        if (message.masterSharedBuffers !== undefined) {
            Int64Value.encode(
                { value: message.masterSharedBuffers! },
                writer.uint32(226).fork(),
            ).ldelim();
        }
        if (message.maxLocksPerTransaction !== undefined) {
            Int64Value.encode(
                { value: message.maxLocksPerTransaction! },
                writer.uint32(234).fork(),
            ).ldelim();
        }
        if (message.segmentSharedBuffers !== undefined) {
            Int64Value.encode(
                { value: message.segmentSharedBuffers! },
                writer.uint32(242).fork(),
            ).ldelim();
        }
        if (message.logErrorVerbosity !== 0) {
            writer.uint32(248).int32(message.logErrorVerbosity);
        }
        if (message.logMinMessages !== 0) {
            writer.uint32(256).int32(message.logMinMessages);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumConfigCBDB {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGreenplumConfigCBDB } as GreenplumConfigCBDB;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxConnections = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.maxSlotWalKeepSize = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.gpWorkfileLimitPerSegment = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 4:
                    message.gpWorkfileLimitPerQuery = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 5:
                    message.gpWorkfileLimitFilesPerQuery = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 6:
                    message.maxPreparedTransactions = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 7:
                    message.gpWorkfileCompression = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.maxStatementMem = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.logStatement = reader.int32() as any;
                    break;
                case 10:
                    message.gpEnableGlobalDeadlockDetector = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 11:
                    message.gpGlobalDeadlockDetectorPeriod = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 12:
                    message.gpMaxSlices = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.gpCachedSegworkersThreshold = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 14:
                    message.lockTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 15:
                    message.idleInTransactionSessionTimeout = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 16:
                    message.runawayDetectorActivationPercent = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 17:
                    message.gpVmemProtectSegworkerCacheLimit = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 18:
                    message.gpEnableZstdMemoryAccounting = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 19:
                    message.gpMaxPlanSize = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 20:
                    message.gpAutostatsMode = reader.int32() as any;
                    break;
                case 21:
                    message.gpAutostatsOnChangeThreshold = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 22:
                    message.gpResourceGroupMemoryLimit = DoubleValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 23:
                    message.logConnections = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 24:
                    message.logDisconnections = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 25:
                    message.logHostname = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 26:
                    message.logStatementStats = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 27:
                    message.logMinDurationStatement = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 28:
                    message.masterSharedBuffers = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 29:
                    message.maxLocksPerTransaction = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 30:
                    message.segmentSharedBuffers = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 31:
                    message.logErrorVerbosity = reader.int32() as any;
                    break;
                case 32:
                    message.logMinMessages = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GreenplumConfigCBDB {
        const message = { ...baseGreenplumConfigCBDB } as GreenplumConfigCBDB;
        message.maxConnections =
            object.maxConnections !== undefined && object.maxConnections !== null
                ? Number(object.maxConnections)
                : undefined;
        message.maxSlotWalKeepSize =
            object.maxSlotWalKeepSize !== undefined && object.maxSlotWalKeepSize !== null
                ? Number(object.maxSlotWalKeepSize)
                : undefined;
        message.gpWorkfileLimitPerSegment =
            object.gpWorkfileLimitPerSegment !== undefined &&
            object.gpWorkfileLimitPerSegment !== null
                ? Number(object.gpWorkfileLimitPerSegment)
                : undefined;
        message.gpWorkfileLimitPerQuery =
            object.gpWorkfileLimitPerQuery !== undefined && object.gpWorkfileLimitPerQuery !== null
                ? Number(object.gpWorkfileLimitPerQuery)
                : undefined;
        message.gpWorkfileLimitFilesPerQuery =
            object.gpWorkfileLimitFilesPerQuery !== undefined &&
            object.gpWorkfileLimitFilesPerQuery !== null
                ? Number(object.gpWorkfileLimitFilesPerQuery)
                : undefined;
        message.maxPreparedTransactions =
            object.maxPreparedTransactions !== undefined && object.maxPreparedTransactions !== null
                ? Number(object.maxPreparedTransactions)
                : undefined;
        message.gpWorkfileCompression =
            object.gpWorkfileCompression !== undefined && object.gpWorkfileCompression !== null
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
        message.gpEnableGlobalDeadlockDetector =
            object.gpEnableGlobalDeadlockDetector !== undefined &&
            object.gpEnableGlobalDeadlockDetector !== null
                ? Boolean(object.gpEnableGlobalDeadlockDetector)
                : undefined;
        message.gpGlobalDeadlockDetectorPeriod =
            object.gpGlobalDeadlockDetectorPeriod !== undefined &&
            object.gpGlobalDeadlockDetectorPeriod !== null
                ? Number(object.gpGlobalDeadlockDetectorPeriod)
                : undefined;
        message.gpMaxSlices =
            object.gpMaxSlices !== undefined && object.gpMaxSlices !== null
                ? Number(object.gpMaxSlices)
                : undefined;
        message.gpCachedSegworkersThreshold =
            object.gpCachedSegworkersThreshold !== undefined &&
            object.gpCachedSegworkersThreshold !== null
                ? Number(object.gpCachedSegworkersThreshold)
                : undefined;
        message.lockTimeout =
            object.lockTimeout !== undefined && object.lockTimeout !== null
                ? Number(object.lockTimeout)
                : undefined;
        message.idleInTransactionSessionTimeout =
            object.idleInTransactionSessionTimeout !== undefined &&
            object.idleInTransactionSessionTimeout !== null
                ? Number(object.idleInTransactionSessionTimeout)
                : undefined;
        message.runawayDetectorActivationPercent =
            object.runawayDetectorActivationPercent !== undefined &&
            object.runawayDetectorActivationPercent !== null
                ? Number(object.runawayDetectorActivationPercent)
                : undefined;
        message.gpVmemProtectSegworkerCacheLimit =
            object.gpVmemProtectSegworkerCacheLimit !== undefined &&
            object.gpVmemProtectSegworkerCacheLimit !== null
                ? Number(object.gpVmemProtectSegworkerCacheLimit)
                : undefined;
        message.gpEnableZstdMemoryAccounting =
            object.gpEnableZstdMemoryAccounting !== undefined &&
            object.gpEnableZstdMemoryAccounting !== null
                ? Boolean(object.gpEnableZstdMemoryAccounting)
                : undefined;
        message.gpMaxPlanSize =
            object.gpMaxPlanSize !== undefined && object.gpMaxPlanSize !== null
                ? Number(object.gpMaxPlanSize)
                : undefined;
        message.gpAutostatsMode =
            object.gpAutostatsMode !== undefined && object.gpAutostatsMode !== null
                ? gPAutostatsModeFromJSON(object.gpAutostatsMode)
                : 0;
        message.gpAutostatsOnChangeThreshold =
            object.gpAutostatsOnChangeThreshold !== undefined &&
            object.gpAutostatsOnChangeThreshold !== null
                ? Number(object.gpAutostatsOnChangeThreshold)
                : undefined;
        message.gpResourceGroupMemoryLimit =
            object.gpResourceGroupMemoryLimit !== undefined &&
            object.gpResourceGroupMemoryLimit !== null
                ? Number(object.gpResourceGroupMemoryLimit)
                : undefined;
        message.logConnections =
            object.logConnections !== undefined && object.logConnections !== null
                ? Boolean(object.logConnections)
                : undefined;
        message.logDisconnections =
            object.logDisconnections !== undefined && object.logDisconnections !== null
                ? Boolean(object.logDisconnections)
                : undefined;
        message.logHostname =
            object.logHostname !== undefined && object.logHostname !== null
                ? Boolean(object.logHostname)
                : undefined;
        message.logStatementStats =
            object.logStatementStats !== undefined && object.logStatementStats !== null
                ? Boolean(object.logStatementStats)
                : undefined;
        message.logMinDurationStatement =
            object.logMinDurationStatement !== undefined && object.logMinDurationStatement !== null
                ? Number(object.logMinDurationStatement)
                : undefined;
        message.masterSharedBuffers =
            object.masterSharedBuffers !== undefined && object.masterSharedBuffers !== null
                ? Number(object.masterSharedBuffers)
                : undefined;
        message.maxLocksPerTransaction =
            object.maxLocksPerTransaction !== undefined && object.maxLocksPerTransaction !== null
                ? Number(object.maxLocksPerTransaction)
                : undefined;
        message.segmentSharedBuffers =
            object.segmentSharedBuffers !== undefined && object.segmentSharedBuffers !== null
                ? Number(object.segmentSharedBuffers)
                : undefined;
        message.logErrorVerbosity =
            object.logErrorVerbosity !== undefined && object.logErrorVerbosity !== null
                ? logErrorVerbosityFromJSON(object.logErrorVerbosity)
                : 0;
        message.logMinMessages =
            object.logMinMessages !== undefined && object.logMinMessages !== null
                ? logLevelMessageFromJSON(object.logMinMessages)
                : 0;
        return message;
    },

    toJSON(message: GreenplumConfigCBDB): unknown {
        const obj: any = {};
        message.maxConnections !== undefined && (obj.maxConnections = message.maxConnections);
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
        message.maxStatementMem !== undefined && (obj.maxStatementMem = message.maxStatementMem);
        message.logStatement !== undefined &&
            (obj.logStatement = logStatementToJSON(message.logStatement));
        message.gpEnableGlobalDeadlockDetector !== undefined &&
            (obj.gpEnableGlobalDeadlockDetector = message.gpEnableGlobalDeadlockDetector);
        message.gpGlobalDeadlockDetectorPeriod !== undefined &&
            (obj.gpGlobalDeadlockDetectorPeriod = message.gpGlobalDeadlockDetectorPeriod);
        message.gpMaxSlices !== undefined && (obj.gpMaxSlices = message.gpMaxSlices);
        message.gpCachedSegworkersThreshold !== undefined &&
            (obj.gpCachedSegworkersThreshold = message.gpCachedSegworkersThreshold);
        message.lockTimeout !== undefined && (obj.lockTimeout = message.lockTimeout);
        message.idleInTransactionSessionTimeout !== undefined &&
            (obj.idleInTransactionSessionTimeout = message.idleInTransactionSessionTimeout);
        message.runawayDetectorActivationPercent !== undefined &&
            (obj.runawayDetectorActivationPercent = message.runawayDetectorActivationPercent);
        message.gpVmemProtectSegworkerCacheLimit !== undefined &&
            (obj.gpVmemProtectSegworkerCacheLimit = message.gpVmemProtectSegworkerCacheLimit);
        message.gpEnableZstdMemoryAccounting !== undefined &&
            (obj.gpEnableZstdMemoryAccounting = message.gpEnableZstdMemoryAccounting);
        message.gpMaxPlanSize !== undefined && (obj.gpMaxPlanSize = message.gpMaxPlanSize);
        message.gpAutostatsMode !== undefined &&
            (obj.gpAutostatsMode = gPAutostatsModeToJSON(message.gpAutostatsMode));
        message.gpAutostatsOnChangeThreshold !== undefined &&
            (obj.gpAutostatsOnChangeThreshold = message.gpAutostatsOnChangeThreshold);
        message.gpResourceGroupMemoryLimit !== undefined &&
            (obj.gpResourceGroupMemoryLimit = message.gpResourceGroupMemoryLimit);
        message.logConnections !== undefined && (obj.logConnections = message.logConnections);
        message.logDisconnections !== undefined &&
            (obj.logDisconnections = message.logDisconnections);
        message.logHostname !== undefined && (obj.logHostname = message.logHostname);
        message.logStatementStats !== undefined &&
            (obj.logStatementStats = message.logStatementStats);
        message.logMinDurationStatement !== undefined &&
            (obj.logMinDurationStatement = message.logMinDurationStatement);
        message.masterSharedBuffers !== undefined &&
            (obj.masterSharedBuffers = message.masterSharedBuffers);
        message.maxLocksPerTransaction !== undefined &&
            (obj.maxLocksPerTransaction = message.maxLocksPerTransaction);
        message.segmentSharedBuffers !== undefined &&
            (obj.segmentSharedBuffers = message.segmentSharedBuffers);
        message.logErrorVerbosity !== undefined &&
            (obj.logErrorVerbosity = logErrorVerbosityToJSON(message.logErrorVerbosity));
        message.logMinMessages !== undefined &&
            (obj.logMinMessages = logLevelMessageToJSON(message.logMinMessages));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GreenplumConfigCBDB>, I>>(
        object: I,
    ): GreenplumConfigCBDB {
        const message = { ...baseGreenplumConfigCBDB } as GreenplumConfigCBDB;
        message.maxConnections = object.maxConnections ?? undefined;
        message.maxSlotWalKeepSize = object.maxSlotWalKeepSize ?? undefined;
        message.gpWorkfileLimitPerSegment = object.gpWorkfileLimitPerSegment ?? undefined;
        message.gpWorkfileLimitPerQuery = object.gpWorkfileLimitPerQuery ?? undefined;
        message.gpWorkfileLimitFilesPerQuery = object.gpWorkfileLimitFilesPerQuery ?? undefined;
        message.maxPreparedTransactions = object.maxPreparedTransactions ?? undefined;
        message.gpWorkfileCompression = object.gpWorkfileCompression ?? undefined;
        message.maxStatementMem = object.maxStatementMem ?? undefined;
        message.logStatement = object.logStatement ?? 0;
        message.gpEnableGlobalDeadlockDetector = object.gpEnableGlobalDeadlockDetector ?? undefined;
        message.gpGlobalDeadlockDetectorPeriod = object.gpGlobalDeadlockDetectorPeriod ?? undefined;
        message.gpMaxSlices = object.gpMaxSlices ?? undefined;
        message.gpCachedSegworkersThreshold = object.gpCachedSegworkersThreshold ?? undefined;
        message.lockTimeout = object.lockTimeout ?? undefined;
        message.idleInTransactionSessionTimeout =
            object.idleInTransactionSessionTimeout ?? undefined;
        message.runawayDetectorActivationPercent =
            object.runawayDetectorActivationPercent ?? undefined;
        message.gpVmemProtectSegworkerCacheLimit =
            object.gpVmemProtectSegworkerCacheLimit ?? undefined;
        message.gpEnableZstdMemoryAccounting = object.gpEnableZstdMemoryAccounting ?? undefined;
        message.gpMaxPlanSize = object.gpMaxPlanSize ?? undefined;
        message.gpAutostatsMode = object.gpAutostatsMode ?? 0;
        message.gpAutostatsOnChangeThreshold = object.gpAutostatsOnChangeThreshold ?? undefined;
        message.gpResourceGroupMemoryLimit = object.gpResourceGroupMemoryLimit ?? undefined;
        message.logConnections = object.logConnections ?? undefined;
        message.logDisconnections = object.logDisconnections ?? undefined;
        message.logHostname = object.logHostname ?? undefined;
        message.logStatementStats = object.logStatementStats ?? undefined;
        message.logMinDurationStatement = object.logMinDurationStatement ?? undefined;
        message.masterSharedBuffers = object.masterSharedBuffers ?? undefined;
        message.maxLocksPerTransaction = object.maxLocksPerTransaction ?? undefined;
        message.segmentSharedBuffers = object.segmentSharedBuffers ?? undefined;
        message.logErrorVerbosity = object.logErrorVerbosity ?? 0;
        message.logMinMessages = object.logMinMessages ?? 0;
        return message;
    },
};

const baseGreenplumConfigSet6: object = {};

export const GreenplumConfigSet6: {
    encode(message: GreenplumConfigSet6, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumConfigSet6;
    fromJSON(object: any): GreenplumConfigSet6;
    toJSON(message: GreenplumConfigSet6): unknown;
    fromPartial<I extends Exact<DeepPartial<GreenplumConfigSet6>, I>>(object: I): GreenplumConfigSet6;
} = {
    encode(message: GreenplumConfigSet6, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            GreenplumConfig6.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            GreenplumConfig6.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            GreenplumConfig6.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
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
                    message.effectiveConfig = GreenplumConfig6.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = GreenplumConfig6.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = GreenplumConfig6.decode(reader, reader.uint32());
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
        object: I,
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

const baseConnectionPoolerConfigSet: object = {};

export const ConnectionPoolerConfigSet: {
    encode(message: ConnectionPoolerConfigSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionPoolerConfigSet;
    fromJSON(object: any): ConnectionPoolerConfigSet;
    toJSON(message: ConnectionPoolerConfigSet): unknown;
    fromPartial<I extends Exact<DeepPartial<ConnectionPoolerConfigSet>, I>>(object: I): ConnectionPoolerConfigSet;
} = {
    encode(
        message: ConnectionPoolerConfigSet,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            ConnectionPoolerConfig.encode(
                message.effectiveConfig,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.userConfig !== undefined) {
            ConnectionPoolerConfig.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            ConnectionPoolerConfig.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionPoolerConfigSet {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConnectionPoolerConfigSet } as ConnectionPoolerConfigSet;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = ConnectionPoolerConfig.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.userConfig = ConnectionPoolerConfig.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = ConnectionPoolerConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ConnectionPoolerConfigSet {
        const message = { ...baseConnectionPoolerConfigSet } as ConnectionPoolerConfigSet;
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
        object: I,
    ): ConnectionPoolerConfigSet {
        const message = { ...baseConnectionPoolerConfigSet } as ConnectionPoolerConfigSet;
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

const baseGreenplumConfigSetCBDB: object = {};

export const GreenplumConfigSetCBDB: {
    encode(message: GreenplumConfigSetCBDB, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumConfigSetCBDB;
    fromJSON(object: any): GreenplumConfigSetCBDB;
    toJSON(message: GreenplumConfigSetCBDB): unknown;
    fromPartial<I extends Exact<DeepPartial<GreenplumConfigSetCBDB>, I>>(object: I): GreenplumConfigSetCBDB;
} = {
    encode(message: GreenplumConfigSetCBDB, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            GreenplumConfigCBDB.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            GreenplumConfigCBDB.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            GreenplumConfigCBDB.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumConfigSetCBDB {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGreenplumConfigSetCBDB } as GreenplumConfigSetCBDB;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = GreenplumConfigCBDB.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = GreenplumConfigCBDB.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = GreenplumConfigCBDB.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GreenplumConfigSetCBDB {
        const message = { ...baseGreenplumConfigSetCBDB } as GreenplumConfigSetCBDB;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? GreenplumConfigCBDB.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? GreenplumConfigCBDB.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? GreenplumConfigCBDB.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },

    toJSON(message: GreenplumConfigSetCBDB): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? GreenplumConfigCBDB.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? GreenplumConfigCBDB.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? GreenplumConfigCBDB.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GreenplumConfigSetCBDB>, I>>(
        object: I,
    ): GreenplumConfigSetCBDB {
        const message = { ...baseGreenplumConfigSetCBDB } as GreenplumConfigSetCBDB;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? GreenplumConfigCBDB.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? GreenplumConfigCBDB.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? GreenplumConfigCBDB.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

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

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
