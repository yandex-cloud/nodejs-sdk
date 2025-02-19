/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Int64Value, DoubleValue, BoolValue } from '../../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.mdb.postgresql.v1.config';

/**
 * Options and structure of `PostgresqlConfig` reflects PostgreSQL configuration file
 * parameters which detailed description is available in
 * [PostgreSQL documentation](https://www.postgresql.org/docs/11/runtime-config.html).
 */
export interface PostgresqlConfig13 {
    maxConnections?: number;
    /** in bytes. */
    sharedBuffers?: number;
    /** in bytes. */
    tempBuffers?: number;
    maxPreparedTransactions?: number;
    /** in bytes. */
    workMem?: number;
    /** in bytes. */
    maintenanceWorkMem?: number;
    /** in bytes. */
    autovacuumWorkMem?: number;
    /** in bytes. */
    tempFileLimit?: number;
    /** in milliseconds. */
    vacuumCostDelay?: number;
    vacuumCostPageHit?: number;
    vacuumCostPageMiss?: number;
    vacuumCostPageDirty?: number;
    vacuumCostLimit?: number;
    /** in milliseconds. */
    bgwriterDelay?: number;
    bgwriterLruMaxpages?: number;
    bgwriterLruMultiplier?: number;
    /** in bytes */
    bgwriterFlushAfter?: number;
    /** in bytes */
    backendFlushAfter?: number;
    oldSnapshotThreshold?: number;
    walLevel: PostgresqlConfig13_WalLevel;
    synchronousCommit: PostgresqlConfig13_SynchronousCommit;
    /** in milliseconds. */
    checkpointTimeout?: number;
    checkpointCompletionTarget?: number;
    /** in bytes */
    checkpointFlushAfter?: number;
    /** in bytes. */
    maxWalSize?: number;
    /** in bytes. */
    minWalSize?: number;
    /** in milliseconds. */
    maxStandbyStreamingDelay?: number;
    defaultStatisticsTarget?: number;
    constraintExclusion: PostgresqlConfig13_ConstraintExclusion;
    cursorTupleFraction?: number;
    fromCollapseLimit?: number;
    joinCollapseLimit?: number;
    forceParallelMode: PostgresqlConfig13_ForceParallelMode;
    clientMinMessages: PostgresqlConfig13_LogLevel;
    logMinMessages: PostgresqlConfig13_LogLevel;
    logMinErrorStatement: PostgresqlConfig13_LogLevel;
    /** in milliseconds. */
    logMinDurationStatement?: number;
    logCheckpoints?: boolean;
    logConnections?: boolean;
    logDisconnections?: boolean;
    logDuration?: boolean;
    logErrorVerbosity: PostgresqlConfig13_LogErrorVerbosity;
    logLockWaits?: boolean;
    logStatement: PostgresqlConfig13_LogStatement;
    logTempFiles?: number;
    searchPath: string;
    rowSecurity?: boolean;
    defaultTransactionIsolation: PostgresqlConfig13_TransactionIsolation;
    /** in milliseconds. */
    statementTimeout?: number;
    /** in milliseconds. */
    lockTimeout?: number;
    /** in milliseconds. */
    idleInTransactionSessionTimeout?: number;
    byteaOutput: PostgresqlConfig13_ByteaOutput;
    xmlbinary: PostgresqlConfig13_XmlBinary;
    xmloption: PostgresqlConfig13_XmlOption;
    /** in bytes. */
    ginPendingListLimit?: number;
    /** in milliseconds. */
    deadlockTimeout?: number;
    maxLocksPerTransaction?: number;
    maxPredLocksPerTransaction?: number;
    arrayNulls?: boolean;
    backslashQuote: PostgresqlConfig13_BackslashQuote;
    defaultWithOids?: boolean;
    escapeStringWarning?: boolean;
    loCompatPrivileges?: boolean;
    operatorPrecedenceWarning?: boolean;
    quoteAllIdentifiers?: boolean;
    standardConformingStrings?: boolean;
    synchronizeSeqscans?: boolean;
    transformNullEquals?: boolean;
    exitOnError?: boolean;
    seqPageCost?: number;
    randomPageCost?: number;
    autovacuumMaxWorkers?: number;
    autovacuumVacuumCostDelay?: number;
    autovacuumVacuumCostLimit?: number;
    /** in milliseconds. */
    autovacuumNaptime?: number;
    /** in milliseconds. */
    archiveTimeout?: number;
    trackActivityQuerySize?: number;
    enableBitmapscan?: boolean;
    enableHashagg?: boolean;
    enableHashjoin?: boolean;
    enableIndexscan?: boolean;
    enableIndexonlyscan?: boolean;
    enableMaterial?: boolean;
    enableMergejoin?: boolean;
    enableNestloop?: boolean;
    enableSeqscan?: boolean;
    enableSort?: boolean;
    enableTidscan?: boolean;
    maxWorkerProcesses?: number;
    maxParallelWorkers?: number;
    maxParallelWorkersPerGather?: number;
    autovacuumVacuumScaleFactor?: number;
    autovacuumAnalyzeScaleFactor?: number;
    defaultTransactionReadOnly?: boolean;
    timezone: string;
    enableParallelAppend?: boolean;
    enableParallelHash?: boolean;
    enablePartitionPruning?: boolean;
    enablePartitionwiseAggregate?: boolean;
    enablePartitionwiseJoin?: boolean;
    jit?: boolean;
    maxParallelMaintenanceWorkers?: number;
    parallelLeaderParticipation?: boolean;
    vacuumCleanupIndexScaleFactor?: number;
    logTransactionSampleRate?: number;
    planCacheMode: PostgresqlConfig13_PlanCacheMode;
    effectiveIoConcurrency?: number;
    effectiveCacheSize?: number;
    sharedPreloadLibraries: PostgresqlConfig13_SharedPreloadLibraries[];
    /** in milliseconds. */
    autoExplainLogMinDuration?: number;
    autoExplainLogAnalyze?: boolean;
    autoExplainLogBuffers?: boolean;
    autoExplainLogTiming?: boolean;
    autoExplainLogTriggers?: boolean;
    autoExplainLogVerbose?: boolean;
    autoExplainLogNestedStatements?: boolean;
    autoExplainSampleRate?: number;
    pgHintPlanEnableHint?: boolean;
    pgHintPlanEnableHintTable?: boolean;
    pgHintPlanDebugPrint: PostgresqlConfig13_PgHintPlanDebugPrint;
    pgHintPlanMessageLevel: PostgresqlConfig13_LogLevel;
    hashMemMultiplier?: number;
    /** in bytes. */
    logicalDecodingWorkMem?: number;
    maintenanceIoConcurrency?: number;
    /** in bytes. */
    maxSlotWalKeepSize?: number;
    /** in bytes. */
    walKeepSize?: number;
    enableIncrementalSort?: boolean;
    autovacuumVacuumInsertThreshold?: number;
    autovacuumVacuumInsertScaleFactor?: number;
    /** in milliseconds. */
    logMinDurationSample?: number;
    logStatementSampleRate?: number;
    /** in bytes. */
    logParameterMaxLength?: number;
    /** in bytes. */
    logParameterMaxLengthOnError?: number;
    pgQualstatsEnabled?: boolean;
    pgQualstatsTrackConstants?: boolean;
    pgQualstatsMax?: number;
    pgQualstatsResolveOids?: boolean;
    pgQualstatsSampleRate?: number;
    /** in bytes. */
    maxStackDepth?: number;
    /** enable Genetic Query Optimizer, by default is on */
    geqo?: boolean;
    /** The number of tables to use geqo, default is 12 */
    geqoThreshold?: number;
    /** tradeoff between planning time and query plan quality, default is 5 */
    geqoEffort?: number;
    /** number of individuals in the genetic population, useful values are typically 100 to 1000; default - 0 - choose based on based on geqo_effort */
    geqoPoolSize?: number;
    /** the number of generations used by GEQO, useful values are in the same range as the pool size */
    geqoGenerations?: number;
    /** selective pressure within the population */
    geqoSelectionBias?: number;
    /** initial value of the random number generator used by GEQO */
    geqoSeed?: number;
    pgTrgmSimilarityThreshold?: number;
    pgTrgmWordSimilarityThreshold?: number;
    pgTrgmStrictWordSimilarityThreshold?: number;
    /** in milliseconds. */
    maxStandbyArchiveDelay?: number;
    /** Terminate any session that exceeds the designated timeout, specified in milliseconds. If a timeout is not specified, the default session timeout is set to 12 hours. To disable it, specify a value of 0. */
    sessionDurationTimeout?: number;
    logReplicationCommands?: boolean;
    /** in milliseconds. The default is 1000 (1 sec). */
    logAutovacuumMinDuration?: number;
    /** A default value for `` user_password_encryption `` user-level setting, if it not specified for new users. Possible values are `` PASSWORD_ENCRYPTION_MD5 `` or `` PASSWORD_ENCRYPTION_SCRAM_SHA_256 ``. The default is `` PASSWORD_ENCRYPTION_MD5 ``. */
    passwordEncryption: PostgresqlConfig13_PasswordEncryption;
}

export enum PostgresqlConfig13_BackslashQuote {
    BACKSLASH_QUOTE_UNSPECIFIED = 0,
    BACKSLASH_QUOTE = 1,
    BACKSLASH_QUOTE_ON = 2,
    BACKSLASH_QUOTE_OFF = 3,
    BACKSLASH_QUOTE_SAFE_ENCODING = 4,
    UNRECOGNIZED = -1,
}

export function postgresqlConfig13_BackslashQuoteFromJSON(
    object: any,
): PostgresqlConfig13_BackslashQuote {
    switch (object) {
        case 0:
        case 'BACKSLASH_QUOTE_UNSPECIFIED':
            return PostgresqlConfig13_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED;
        case 1:
        case 'BACKSLASH_QUOTE':
            return PostgresqlConfig13_BackslashQuote.BACKSLASH_QUOTE;
        case 2:
        case 'BACKSLASH_QUOTE_ON':
            return PostgresqlConfig13_BackslashQuote.BACKSLASH_QUOTE_ON;
        case 3:
        case 'BACKSLASH_QUOTE_OFF':
            return PostgresqlConfig13_BackslashQuote.BACKSLASH_QUOTE_OFF;
        case 4:
        case 'BACKSLASH_QUOTE_SAFE_ENCODING':
            return PostgresqlConfig13_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_BackslashQuote.UNRECOGNIZED;
    }
}

export function postgresqlConfig13_BackslashQuoteToJSON(
    object: PostgresqlConfig13_BackslashQuote,
): string {
    switch (object) {
        case PostgresqlConfig13_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED:
            return 'BACKSLASH_QUOTE_UNSPECIFIED';
        case PostgresqlConfig13_BackslashQuote.BACKSLASH_QUOTE:
            return 'BACKSLASH_QUOTE';
        case PostgresqlConfig13_BackslashQuote.BACKSLASH_QUOTE_ON:
            return 'BACKSLASH_QUOTE_ON';
        case PostgresqlConfig13_BackslashQuote.BACKSLASH_QUOTE_OFF:
            return 'BACKSLASH_QUOTE_OFF';
        case PostgresqlConfig13_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING:
            return 'BACKSLASH_QUOTE_SAFE_ENCODING';
        default:
            return 'UNKNOWN';
    }
}

export enum PostgresqlConfig13_ByteaOutput {
    BYTEA_OUTPUT_UNSPECIFIED = 0,
    BYTEA_OUTPUT_HEX = 1,
    BYTEA_OUTPUT_ESCAPED = 2,
    UNRECOGNIZED = -1,
}

export function postgresqlConfig13_ByteaOutputFromJSON(
    object: any,
): PostgresqlConfig13_ByteaOutput {
    switch (object) {
        case 0:
        case 'BYTEA_OUTPUT_UNSPECIFIED':
            return PostgresqlConfig13_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED;
        case 1:
        case 'BYTEA_OUTPUT_HEX':
            return PostgresqlConfig13_ByteaOutput.BYTEA_OUTPUT_HEX;
        case 2:
        case 'BYTEA_OUTPUT_ESCAPED':
            return PostgresqlConfig13_ByteaOutput.BYTEA_OUTPUT_ESCAPED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_ByteaOutput.UNRECOGNIZED;
    }
}

export function postgresqlConfig13_ByteaOutputToJSON(
    object: PostgresqlConfig13_ByteaOutput,
): string {
    switch (object) {
        case PostgresqlConfig13_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED:
            return 'BYTEA_OUTPUT_UNSPECIFIED';
        case PostgresqlConfig13_ByteaOutput.BYTEA_OUTPUT_HEX:
            return 'BYTEA_OUTPUT_HEX';
        case PostgresqlConfig13_ByteaOutput.BYTEA_OUTPUT_ESCAPED:
            return 'BYTEA_OUTPUT_ESCAPED';
        default:
            return 'UNKNOWN';
    }
}

export enum PostgresqlConfig13_ConstraintExclusion {
    CONSTRAINT_EXCLUSION_UNSPECIFIED = 0,
    CONSTRAINT_EXCLUSION_ON = 1,
    CONSTRAINT_EXCLUSION_OFF = 2,
    CONSTRAINT_EXCLUSION_PARTITION = 3,
    UNRECOGNIZED = -1,
}

export function postgresqlConfig13_ConstraintExclusionFromJSON(
    object: any,
): PostgresqlConfig13_ConstraintExclusion {
    switch (object) {
        case 0:
        case 'CONSTRAINT_EXCLUSION_UNSPECIFIED':
            return PostgresqlConfig13_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED;
        case 1:
        case 'CONSTRAINT_EXCLUSION_ON':
            return PostgresqlConfig13_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON;
        case 2:
        case 'CONSTRAINT_EXCLUSION_OFF':
            return PostgresqlConfig13_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF;
        case 3:
        case 'CONSTRAINT_EXCLUSION_PARTITION':
            return PostgresqlConfig13_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_ConstraintExclusion.UNRECOGNIZED;
    }
}

export function postgresqlConfig13_ConstraintExclusionToJSON(
    object: PostgresqlConfig13_ConstraintExclusion,
): string {
    switch (object) {
        case PostgresqlConfig13_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED:
            return 'CONSTRAINT_EXCLUSION_UNSPECIFIED';
        case PostgresqlConfig13_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON:
            return 'CONSTRAINT_EXCLUSION_ON';
        case PostgresqlConfig13_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF:
            return 'CONSTRAINT_EXCLUSION_OFF';
        case PostgresqlConfig13_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION:
            return 'CONSTRAINT_EXCLUSION_PARTITION';
        default:
            return 'UNKNOWN';
    }
}

export enum PostgresqlConfig13_ForceParallelMode {
    FORCE_PARALLEL_MODE_UNSPECIFIED = 0,
    FORCE_PARALLEL_MODE_ON = 1,
    FORCE_PARALLEL_MODE_OFF = 2,
    FORCE_PARALLEL_MODE_REGRESS = 3,
    UNRECOGNIZED = -1,
}

export function postgresqlConfig13_ForceParallelModeFromJSON(
    object: any,
): PostgresqlConfig13_ForceParallelMode {
    switch (object) {
        case 0:
        case 'FORCE_PARALLEL_MODE_UNSPECIFIED':
            return PostgresqlConfig13_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED;
        case 1:
        case 'FORCE_PARALLEL_MODE_ON':
            return PostgresqlConfig13_ForceParallelMode.FORCE_PARALLEL_MODE_ON;
        case 2:
        case 'FORCE_PARALLEL_MODE_OFF':
            return PostgresqlConfig13_ForceParallelMode.FORCE_PARALLEL_MODE_OFF;
        case 3:
        case 'FORCE_PARALLEL_MODE_REGRESS':
            return PostgresqlConfig13_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_ForceParallelMode.UNRECOGNIZED;
    }
}

export function postgresqlConfig13_ForceParallelModeToJSON(
    object: PostgresqlConfig13_ForceParallelMode,
): string {
    switch (object) {
        case PostgresqlConfig13_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED:
            return 'FORCE_PARALLEL_MODE_UNSPECIFIED';
        case PostgresqlConfig13_ForceParallelMode.FORCE_PARALLEL_MODE_ON:
            return 'FORCE_PARALLEL_MODE_ON';
        case PostgresqlConfig13_ForceParallelMode.FORCE_PARALLEL_MODE_OFF:
            return 'FORCE_PARALLEL_MODE_OFF';
        case PostgresqlConfig13_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS:
            return 'FORCE_PARALLEL_MODE_REGRESS';
        default:
            return 'UNKNOWN';
    }
}

export enum PostgresqlConfig13_LogErrorVerbosity {
    LOG_ERROR_VERBOSITY_UNSPECIFIED = 0,
    LOG_ERROR_VERBOSITY_TERSE = 1,
    LOG_ERROR_VERBOSITY_DEFAULT = 2,
    LOG_ERROR_VERBOSITY_VERBOSE = 3,
    UNRECOGNIZED = -1,
}

export function postgresqlConfig13_LogErrorVerbosityFromJSON(
    object: any,
): PostgresqlConfig13_LogErrorVerbosity {
    switch (object) {
        case 0:
        case 'LOG_ERROR_VERBOSITY_UNSPECIFIED':
            return PostgresqlConfig13_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED;
        case 1:
        case 'LOG_ERROR_VERBOSITY_TERSE':
            return PostgresqlConfig13_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE;
        case 2:
        case 'LOG_ERROR_VERBOSITY_DEFAULT':
            return PostgresqlConfig13_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT;
        case 3:
        case 'LOG_ERROR_VERBOSITY_VERBOSE':
            return PostgresqlConfig13_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_LogErrorVerbosity.UNRECOGNIZED;
    }
}

export function postgresqlConfig13_LogErrorVerbosityToJSON(
    object: PostgresqlConfig13_LogErrorVerbosity,
): string {
    switch (object) {
        case PostgresqlConfig13_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED:
            return 'LOG_ERROR_VERBOSITY_UNSPECIFIED';
        case PostgresqlConfig13_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE:
            return 'LOG_ERROR_VERBOSITY_TERSE';
        case PostgresqlConfig13_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT:
            return 'LOG_ERROR_VERBOSITY_DEFAULT';
        case PostgresqlConfig13_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE:
            return 'LOG_ERROR_VERBOSITY_VERBOSE';
        default:
            return 'UNKNOWN';
    }
}

export enum PostgresqlConfig13_LogLevel {
    LOG_LEVEL_UNSPECIFIED = 0,
    LOG_LEVEL_DEBUG5 = 1,
    LOG_LEVEL_DEBUG4 = 2,
    LOG_LEVEL_DEBUG3 = 3,
    LOG_LEVEL_DEBUG2 = 4,
    LOG_LEVEL_DEBUG1 = 5,
    LOG_LEVEL_LOG = 6,
    LOG_LEVEL_NOTICE = 7,
    LOG_LEVEL_WARNING = 8,
    LOG_LEVEL_ERROR = 9,
    LOG_LEVEL_FATAL = 10,
    LOG_LEVEL_PANIC = 11,
    UNRECOGNIZED = -1,
}

export function postgresqlConfig13_LogLevelFromJSON(object: any): PostgresqlConfig13_LogLevel {
    switch (object) {
        case 0:
        case 'LOG_LEVEL_UNSPECIFIED':
            return PostgresqlConfig13_LogLevel.LOG_LEVEL_UNSPECIFIED;
        case 1:
        case 'LOG_LEVEL_DEBUG5':
            return PostgresqlConfig13_LogLevel.LOG_LEVEL_DEBUG5;
        case 2:
        case 'LOG_LEVEL_DEBUG4':
            return PostgresqlConfig13_LogLevel.LOG_LEVEL_DEBUG4;
        case 3:
        case 'LOG_LEVEL_DEBUG3':
            return PostgresqlConfig13_LogLevel.LOG_LEVEL_DEBUG3;
        case 4:
        case 'LOG_LEVEL_DEBUG2':
            return PostgresqlConfig13_LogLevel.LOG_LEVEL_DEBUG2;
        case 5:
        case 'LOG_LEVEL_DEBUG1':
            return PostgresqlConfig13_LogLevel.LOG_LEVEL_DEBUG1;
        case 6:
        case 'LOG_LEVEL_LOG':
            return PostgresqlConfig13_LogLevel.LOG_LEVEL_LOG;
        case 7:
        case 'LOG_LEVEL_NOTICE':
            return PostgresqlConfig13_LogLevel.LOG_LEVEL_NOTICE;
        case 8:
        case 'LOG_LEVEL_WARNING':
            return PostgresqlConfig13_LogLevel.LOG_LEVEL_WARNING;
        case 9:
        case 'LOG_LEVEL_ERROR':
            return PostgresqlConfig13_LogLevel.LOG_LEVEL_ERROR;
        case 10:
        case 'LOG_LEVEL_FATAL':
            return PostgresqlConfig13_LogLevel.LOG_LEVEL_FATAL;
        case 11:
        case 'LOG_LEVEL_PANIC':
            return PostgresqlConfig13_LogLevel.LOG_LEVEL_PANIC;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_LogLevel.UNRECOGNIZED;
    }
}

export function postgresqlConfig13_LogLevelToJSON(object: PostgresqlConfig13_LogLevel): string {
    switch (object) {
        case PostgresqlConfig13_LogLevel.LOG_LEVEL_UNSPECIFIED:
            return 'LOG_LEVEL_UNSPECIFIED';
        case PostgresqlConfig13_LogLevel.LOG_LEVEL_DEBUG5:
            return 'LOG_LEVEL_DEBUG5';
        case PostgresqlConfig13_LogLevel.LOG_LEVEL_DEBUG4:
            return 'LOG_LEVEL_DEBUG4';
        case PostgresqlConfig13_LogLevel.LOG_LEVEL_DEBUG3:
            return 'LOG_LEVEL_DEBUG3';
        case PostgresqlConfig13_LogLevel.LOG_LEVEL_DEBUG2:
            return 'LOG_LEVEL_DEBUG2';
        case PostgresqlConfig13_LogLevel.LOG_LEVEL_DEBUG1:
            return 'LOG_LEVEL_DEBUG1';
        case PostgresqlConfig13_LogLevel.LOG_LEVEL_LOG:
            return 'LOG_LEVEL_LOG';
        case PostgresqlConfig13_LogLevel.LOG_LEVEL_NOTICE:
            return 'LOG_LEVEL_NOTICE';
        case PostgresqlConfig13_LogLevel.LOG_LEVEL_WARNING:
            return 'LOG_LEVEL_WARNING';
        case PostgresqlConfig13_LogLevel.LOG_LEVEL_ERROR:
            return 'LOG_LEVEL_ERROR';
        case PostgresqlConfig13_LogLevel.LOG_LEVEL_FATAL:
            return 'LOG_LEVEL_FATAL';
        case PostgresqlConfig13_LogLevel.LOG_LEVEL_PANIC:
            return 'LOG_LEVEL_PANIC';
        default:
            return 'UNKNOWN';
    }
}

export enum PostgresqlConfig13_LogStatement {
    LOG_STATEMENT_UNSPECIFIED = 0,
    LOG_STATEMENT_NONE = 1,
    LOG_STATEMENT_DDL = 2,
    LOG_STATEMENT_MOD = 3,
    LOG_STATEMENT_ALL = 4,
    UNRECOGNIZED = -1,
}

export function postgresqlConfig13_LogStatementFromJSON(
    object: any,
): PostgresqlConfig13_LogStatement {
    switch (object) {
        case 0:
        case 'LOG_STATEMENT_UNSPECIFIED':
            return PostgresqlConfig13_LogStatement.LOG_STATEMENT_UNSPECIFIED;
        case 1:
        case 'LOG_STATEMENT_NONE':
            return PostgresqlConfig13_LogStatement.LOG_STATEMENT_NONE;
        case 2:
        case 'LOG_STATEMENT_DDL':
            return PostgresqlConfig13_LogStatement.LOG_STATEMENT_DDL;
        case 3:
        case 'LOG_STATEMENT_MOD':
            return PostgresqlConfig13_LogStatement.LOG_STATEMENT_MOD;
        case 4:
        case 'LOG_STATEMENT_ALL':
            return PostgresqlConfig13_LogStatement.LOG_STATEMENT_ALL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_LogStatement.UNRECOGNIZED;
    }
}

export function postgresqlConfig13_LogStatementToJSON(
    object: PostgresqlConfig13_LogStatement,
): string {
    switch (object) {
        case PostgresqlConfig13_LogStatement.LOG_STATEMENT_UNSPECIFIED:
            return 'LOG_STATEMENT_UNSPECIFIED';
        case PostgresqlConfig13_LogStatement.LOG_STATEMENT_NONE:
            return 'LOG_STATEMENT_NONE';
        case PostgresqlConfig13_LogStatement.LOG_STATEMENT_DDL:
            return 'LOG_STATEMENT_DDL';
        case PostgresqlConfig13_LogStatement.LOG_STATEMENT_MOD:
            return 'LOG_STATEMENT_MOD';
        case PostgresqlConfig13_LogStatement.LOG_STATEMENT_ALL:
            return 'LOG_STATEMENT_ALL';
        default:
            return 'UNKNOWN';
    }
}

export enum PostgresqlConfig13_PasswordEncryption {
    PASSWORD_ENCRYPTION_UNSPECIFIED = 0,
    PASSWORD_ENCRYPTION_MD5 = 1,
    PASSWORD_ENCRYPTION_SCRAM_SHA_256 = 2,
    UNRECOGNIZED = -1,
}

export function postgresqlConfig13_PasswordEncryptionFromJSON(
    object: any,
): PostgresqlConfig13_PasswordEncryption {
    switch (object) {
        case 0:
        case 'PASSWORD_ENCRYPTION_UNSPECIFIED':
            return PostgresqlConfig13_PasswordEncryption.PASSWORD_ENCRYPTION_UNSPECIFIED;
        case 1:
        case 'PASSWORD_ENCRYPTION_MD5':
            return PostgresqlConfig13_PasswordEncryption.PASSWORD_ENCRYPTION_MD5;
        case 2:
        case 'PASSWORD_ENCRYPTION_SCRAM_SHA_256':
            return PostgresqlConfig13_PasswordEncryption.PASSWORD_ENCRYPTION_SCRAM_SHA_256;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_PasswordEncryption.UNRECOGNIZED;
    }
}

export function postgresqlConfig13_PasswordEncryptionToJSON(
    object: PostgresqlConfig13_PasswordEncryption,
): string {
    switch (object) {
        case PostgresqlConfig13_PasswordEncryption.PASSWORD_ENCRYPTION_UNSPECIFIED:
            return 'PASSWORD_ENCRYPTION_UNSPECIFIED';
        case PostgresqlConfig13_PasswordEncryption.PASSWORD_ENCRYPTION_MD5:
            return 'PASSWORD_ENCRYPTION_MD5';
        case PostgresqlConfig13_PasswordEncryption.PASSWORD_ENCRYPTION_SCRAM_SHA_256:
            return 'PASSWORD_ENCRYPTION_SCRAM_SHA_256';
        default:
            return 'UNKNOWN';
    }
}

export enum PostgresqlConfig13_PgHintPlanDebugPrint {
    PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED = 0,
    PG_HINT_PLAN_DEBUG_PRINT_OFF = 1,
    PG_HINT_PLAN_DEBUG_PRINT_ON = 2,
    PG_HINT_PLAN_DEBUG_PRINT_DETAILED = 3,
    PG_HINT_PLAN_DEBUG_PRINT_VERBOSE = 4,
    UNRECOGNIZED = -1,
}

export function postgresqlConfig13_PgHintPlanDebugPrintFromJSON(
    object: any,
): PostgresqlConfig13_PgHintPlanDebugPrint {
    switch (object) {
        case 0:
        case 'PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED':
            return PostgresqlConfig13_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED;
        case 1:
        case 'PG_HINT_PLAN_DEBUG_PRINT_OFF':
            return PostgresqlConfig13_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_OFF;
        case 2:
        case 'PG_HINT_PLAN_DEBUG_PRINT_ON':
            return PostgresqlConfig13_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_ON;
        case 3:
        case 'PG_HINT_PLAN_DEBUG_PRINT_DETAILED':
            return PostgresqlConfig13_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_DETAILED;
        case 4:
        case 'PG_HINT_PLAN_DEBUG_PRINT_VERBOSE':
            return PostgresqlConfig13_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_VERBOSE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_PgHintPlanDebugPrint.UNRECOGNIZED;
    }
}

export function postgresqlConfig13_PgHintPlanDebugPrintToJSON(
    object: PostgresqlConfig13_PgHintPlanDebugPrint,
): string {
    switch (object) {
        case PostgresqlConfig13_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED:
            return 'PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED';
        case PostgresqlConfig13_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_OFF:
            return 'PG_HINT_PLAN_DEBUG_PRINT_OFF';
        case PostgresqlConfig13_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_ON:
            return 'PG_HINT_PLAN_DEBUG_PRINT_ON';
        case PostgresqlConfig13_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_DETAILED:
            return 'PG_HINT_PLAN_DEBUG_PRINT_DETAILED';
        case PostgresqlConfig13_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_VERBOSE:
            return 'PG_HINT_PLAN_DEBUG_PRINT_VERBOSE';
        default:
            return 'UNKNOWN';
    }
}

export enum PostgresqlConfig13_PlanCacheMode {
    PLAN_CACHE_MODE_UNSPECIFIED = 0,
    PLAN_CACHE_MODE_AUTO = 1,
    PLAN_CACHE_MODE_FORCE_CUSTOM_PLAN = 2,
    PLAN_CACHE_MODE_FORCE_GENERIC_PLAN = 3,
    UNRECOGNIZED = -1,
}

export function postgresqlConfig13_PlanCacheModeFromJSON(
    object: any,
): PostgresqlConfig13_PlanCacheMode {
    switch (object) {
        case 0:
        case 'PLAN_CACHE_MODE_UNSPECIFIED':
            return PostgresqlConfig13_PlanCacheMode.PLAN_CACHE_MODE_UNSPECIFIED;
        case 1:
        case 'PLAN_CACHE_MODE_AUTO':
            return PostgresqlConfig13_PlanCacheMode.PLAN_CACHE_MODE_AUTO;
        case 2:
        case 'PLAN_CACHE_MODE_FORCE_CUSTOM_PLAN':
            return PostgresqlConfig13_PlanCacheMode.PLAN_CACHE_MODE_FORCE_CUSTOM_PLAN;
        case 3:
        case 'PLAN_CACHE_MODE_FORCE_GENERIC_PLAN':
            return PostgresqlConfig13_PlanCacheMode.PLAN_CACHE_MODE_FORCE_GENERIC_PLAN;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_PlanCacheMode.UNRECOGNIZED;
    }
}

export function postgresqlConfig13_PlanCacheModeToJSON(
    object: PostgresqlConfig13_PlanCacheMode,
): string {
    switch (object) {
        case PostgresqlConfig13_PlanCacheMode.PLAN_CACHE_MODE_UNSPECIFIED:
            return 'PLAN_CACHE_MODE_UNSPECIFIED';
        case PostgresqlConfig13_PlanCacheMode.PLAN_CACHE_MODE_AUTO:
            return 'PLAN_CACHE_MODE_AUTO';
        case PostgresqlConfig13_PlanCacheMode.PLAN_CACHE_MODE_FORCE_CUSTOM_PLAN:
            return 'PLAN_CACHE_MODE_FORCE_CUSTOM_PLAN';
        case PostgresqlConfig13_PlanCacheMode.PLAN_CACHE_MODE_FORCE_GENERIC_PLAN:
            return 'PLAN_CACHE_MODE_FORCE_GENERIC_PLAN';
        default:
            return 'UNKNOWN';
    }
}

export enum PostgresqlConfig13_SharedPreloadLibraries {
    SHARED_PRELOAD_LIBRARIES_UNSPECIFIED = 0,
    SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN = 1,
    SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN = 2,
    SHARED_PRELOAD_LIBRARIES_TIMESCALEDB = 3,
    SHARED_PRELOAD_LIBRARIES_PG_QUALSTATS = 4,
    SHARED_PRELOAD_LIBRARIES_PG_CRON = 5,
    SHARED_PRELOAD_LIBRARIES_PGLOGICAL = 6,
    SHARED_PRELOAD_LIBRARIES_PG_PREWARM = 7,
    SHARED_PRELOAD_LIBRARIES_PGAUDIT = 8,
    UNRECOGNIZED = -1,
}

export function postgresqlConfig13_SharedPreloadLibrariesFromJSON(
    object: any,
): PostgresqlConfig13_SharedPreloadLibraries {
    switch (object) {
        case 0:
        case 'SHARED_PRELOAD_LIBRARIES_UNSPECIFIED':
            return PostgresqlConfig13_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_UNSPECIFIED;
        case 1:
        case 'SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN':
            return PostgresqlConfig13_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN;
        case 2:
        case 'SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN':
            return PostgresqlConfig13_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN;
        case 3:
        case 'SHARED_PRELOAD_LIBRARIES_TIMESCALEDB':
            return PostgresqlConfig13_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_TIMESCALEDB;
        case 4:
        case 'SHARED_PRELOAD_LIBRARIES_PG_QUALSTATS':
            return PostgresqlConfig13_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_QUALSTATS;
        case 5:
        case 'SHARED_PRELOAD_LIBRARIES_PG_CRON':
            return PostgresqlConfig13_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_CRON;
        case 6:
        case 'SHARED_PRELOAD_LIBRARIES_PGLOGICAL':
            return PostgresqlConfig13_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PGLOGICAL;
        case 7:
        case 'SHARED_PRELOAD_LIBRARIES_PG_PREWARM':
            return PostgresqlConfig13_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_PREWARM;
        case 8:
        case 'SHARED_PRELOAD_LIBRARIES_PGAUDIT':
            return PostgresqlConfig13_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PGAUDIT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_SharedPreloadLibraries.UNRECOGNIZED;
    }
}

export function postgresqlConfig13_SharedPreloadLibrariesToJSON(
    object: PostgresqlConfig13_SharedPreloadLibraries,
): string {
    switch (object) {
        case PostgresqlConfig13_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_UNSPECIFIED:
            return 'SHARED_PRELOAD_LIBRARIES_UNSPECIFIED';
        case PostgresqlConfig13_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN:
            return 'SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN';
        case PostgresqlConfig13_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN:
            return 'SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN';
        case PostgresqlConfig13_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_TIMESCALEDB:
            return 'SHARED_PRELOAD_LIBRARIES_TIMESCALEDB';
        case PostgresqlConfig13_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_QUALSTATS:
            return 'SHARED_PRELOAD_LIBRARIES_PG_QUALSTATS';
        case PostgresqlConfig13_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_CRON:
            return 'SHARED_PRELOAD_LIBRARIES_PG_CRON';
        case PostgresqlConfig13_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PGLOGICAL:
            return 'SHARED_PRELOAD_LIBRARIES_PGLOGICAL';
        case PostgresqlConfig13_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_PREWARM:
            return 'SHARED_PRELOAD_LIBRARIES_PG_PREWARM';
        case PostgresqlConfig13_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PGAUDIT:
            return 'SHARED_PRELOAD_LIBRARIES_PGAUDIT';
        default:
            return 'UNKNOWN';
    }
}

export enum PostgresqlConfig13_SynchronousCommit {
    SYNCHRONOUS_COMMIT_UNSPECIFIED = 0,
    SYNCHRONOUS_COMMIT_ON = 1,
    SYNCHRONOUS_COMMIT_OFF = 2,
    SYNCHRONOUS_COMMIT_LOCAL = 3,
    SYNCHRONOUS_COMMIT_REMOTE_WRITE = 4,
    SYNCHRONOUS_COMMIT_REMOTE_APPLY = 5,
    UNRECOGNIZED = -1,
}

export function postgresqlConfig13_SynchronousCommitFromJSON(
    object: any,
): PostgresqlConfig13_SynchronousCommit {
    switch (object) {
        case 0:
        case 'SYNCHRONOUS_COMMIT_UNSPECIFIED':
            return PostgresqlConfig13_SynchronousCommit.SYNCHRONOUS_COMMIT_UNSPECIFIED;
        case 1:
        case 'SYNCHRONOUS_COMMIT_ON':
            return PostgresqlConfig13_SynchronousCommit.SYNCHRONOUS_COMMIT_ON;
        case 2:
        case 'SYNCHRONOUS_COMMIT_OFF':
            return PostgresqlConfig13_SynchronousCommit.SYNCHRONOUS_COMMIT_OFF;
        case 3:
        case 'SYNCHRONOUS_COMMIT_LOCAL':
            return PostgresqlConfig13_SynchronousCommit.SYNCHRONOUS_COMMIT_LOCAL;
        case 4:
        case 'SYNCHRONOUS_COMMIT_REMOTE_WRITE':
            return PostgresqlConfig13_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_WRITE;
        case 5:
        case 'SYNCHRONOUS_COMMIT_REMOTE_APPLY':
            return PostgresqlConfig13_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_APPLY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_SynchronousCommit.UNRECOGNIZED;
    }
}

export function postgresqlConfig13_SynchronousCommitToJSON(
    object: PostgresqlConfig13_SynchronousCommit,
): string {
    switch (object) {
        case PostgresqlConfig13_SynchronousCommit.SYNCHRONOUS_COMMIT_UNSPECIFIED:
            return 'SYNCHRONOUS_COMMIT_UNSPECIFIED';
        case PostgresqlConfig13_SynchronousCommit.SYNCHRONOUS_COMMIT_ON:
            return 'SYNCHRONOUS_COMMIT_ON';
        case PostgresqlConfig13_SynchronousCommit.SYNCHRONOUS_COMMIT_OFF:
            return 'SYNCHRONOUS_COMMIT_OFF';
        case PostgresqlConfig13_SynchronousCommit.SYNCHRONOUS_COMMIT_LOCAL:
            return 'SYNCHRONOUS_COMMIT_LOCAL';
        case PostgresqlConfig13_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_WRITE:
            return 'SYNCHRONOUS_COMMIT_REMOTE_WRITE';
        case PostgresqlConfig13_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_APPLY:
            return 'SYNCHRONOUS_COMMIT_REMOTE_APPLY';
        default:
            return 'UNKNOWN';
    }
}

export enum PostgresqlConfig13_TransactionIsolation {
    TRANSACTION_ISOLATION_UNSPECIFIED = 0,
    TRANSACTION_ISOLATION_READ_UNCOMMITTED = 1,
    TRANSACTION_ISOLATION_READ_COMMITTED = 2,
    TRANSACTION_ISOLATION_REPEATABLE_READ = 3,
    TRANSACTION_ISOLATION_SERIALIZABLE = 4,
    UNRECOGNIZED = -1,
}

export function postgresqlConfig13_TransactionIsolationFromJSON(
    object: any,
): PostgresqlConfig13_TransactionIsolation {
    switch (object) {
        case 0:
        case 'TRANSACTION_ISOLATION_UNSPECIFIED':
            return PostgresqlConfig13_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED;
        case 1:
        case 'TRANSACTION_ISOLATION_READ_UNCOMMITTED':
            return PostgresqlConfig13_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED;
        case 2:
        case 'TRANSACTION_ISOLATION_READ_COMMITTED':
            return PostgresqlConfig13_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED;
        case 3:
        case 'TRANSACTION_ISOLATION_REPEATABLE_READ':
            return PostgresqlConfig13_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ;
        case 4:
        case 'TRANSACTION_ISOLATION_SERIALIZABLE':
            return PostgresqlConfig13_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_TransactionIsolation.UNRECOGNIZED;
    }
}

export function postgresqlConfig13_TransactionIsolationToJSON(
    object: PostgresqlConfig13_TransactionIsolation,
): string {
    switch (object) {
        case PostgresqlConfig13_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED:
            return 'TRANSACTION_ISOLATION_UNSPECIFIED';
        case PostgresqlConfig13_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED:
            return 'TRANSACTION_ISOLATION_READ_UNCOMMITTED';
        case PostgresqlConfig13_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED:
            return 'TRANSACTION_ISOLATION_READ_COMMITTED';
        case PostgresqlConfig13_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ:
            return 'TRANSACTION_ISOLATION_REPEATABLE_READ';
        case PostgresqlConfig13_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE:
            return 'TRANSACTION_ISOLATION_SERIALIZABLE';
        default:
            return 'UNKNOWN';
    }
}

export enum PostgresqlConfig13_WalLevel {
    WAL_LEVEL_UNSPECIFIED = 0,
    WAL_LEVEL_REPLICA = 1,
    WAL_LEVEL_LOGICAL = 2,
    UNRECOGNIZED = -1,
}

export function postgresqlConfig13_WalLevelFromJSON(object: any): PostgresqlConfig13_WalLevel {
    switch (object) {
        case 0:
        case 'WAL_LEVEL_UNSPECIFIED':
            return PostgresqlConfig13_WalLevel.WAL_LEVEL_UNSPECIFIED;
        case 1:
        case 'WAL_LEVEL_REPLICA':
            return PostgresqlConfig13_WalLevel.WAL_LEVEL_REPLICA;
        case 2:
        case 'WAL_LEVEL_LOGICAL':
            return PostgresqlConfig13_WalLevel.WAL_LEVEL_LOGICAL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_WalLevel.UNRECOGNIZED;
    }
}

export function postgresqlConfig13_WalLevelToJSON(object: PostgresqlConfig13_WalLevel): string {
    switch (object) {
        case PostgresqlConfig13_WalLevel.WAL_LEVEL_UNSPECIFIED:
            return 'WAL_LEVEL_UNSPECIFIED';
        case PostgresqlConfig13_WalLevel.WAL_LEVEL_REPLICA:
            return 'WAL_LEVEL_REPLICA';
        case PostgresqlConfig13_WalLevel.WAL_LEVEL_LOGICAL:
            return 'WAL_LEVEL_LOGICAL';
        default:
            return 'UNKNOWN';
    }
}

export enum PostgresqlConfig13_XmlBinary {
    XML_BINARY_UNSPECIFIED = 0,
    XML_BINARY_BASE64 = 1,
    XML_BINARY_HEX = 2,
    UNRECOGNIZED = -1,
}

export function postgresqlConfig13_XmlBinaryFromJSON(object: any): PostgresqlConfig13_XmlBinary {
    switch (object) {
        case 0:
        case 'XML_BINARY_UNSPECIFIED':
            return PostgresqlConfig13_XmlBinary.XML_BINARY_UNSPECIFIED;
        case 1:
        case 'XML_BINARY_BASE64':
            return PostgresqlConfig13_XmlBinary.XML_BINARY_BASE64;
        case 2:
        case 'XML_BINARY_HEX':
            return PostgresqlConfig13_XmlBinary.XML_BINARY_HEX;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_XmlBinary.UNRECOGNIZED;
    }
}

export function postgresqlConfig13_XmlBinaryToJSON(object: PostgresqlConfig13_XmlBinary): string {
    switch (object) {
        case PostgresqlConfig13_XmlBinary.XML_BINARY_UNSPECIFIED:
            return 'XML_BINARY_UNSPECIFIED';
        case PostgresqlConfig13_XmlBinary.XML_BINARY_BASE64:
            return 'XML_BINARY_BASE64';
        case PostgresqlConfig13_XmlBinary.XML_BINARY_HEX:
            return 'XML_BINARY_HEX';
        default:
            return 'UNKNOWN';
    }
}

export enum PostgresqlConfig13_XmlOption {
    XML_OPTION_UNSPECIFIED = 0,
    XML_OPTION_DOCUMENT = 1,
    XML_OPTION_CONTENT = 2,
    UNRECOGNIZED = -1,
}

export function postgresqlConfig13_XmlOptionFromJSON(object: any): PostgresqlConfig13_XmlOption {
    switch (object) {
        case 0:
        case 'XML_OPTION_UNSPECIFIED':
            return PostgresqlConfig13_XmlOption.XML_OPTION_UNSPECIFIED;
        case 1:
        case 'XML_OPTION_DOCUMENT':
            return PostgresqlConfig13_XmlOption.XML_OPTION_DOCUMENT;
        case 2:
        case 'XML_OPTION_CONTENT':
            return PostgresqlConfig13_XmlOption.XML_OPTION_CONTENT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_XmlOption.UNRECOGNIZED;
    }
}

export function postgresqlConfig13_XmlOptionToJSON(object: PostgresqlConfig13_XmlOption): string {
    switch (object) {
        case PostgresqlConfig13_XmlOption.XML_OPTION_UNSPECIFIED:
            return 'XML_OPTION_UNSPECIFIED';
        case PostgresqlConfig13_XmlOption.XML_OPTION_DOCUMENT:
            return 'XML_OPTION_DOCUMENT';
        case PostgresqlConfig13_XmlOption.XML_OPTION_CONTENT:
            return 'XML_OPTION_CONTENT';
        default:
            return 'UNKNOWN';
    }
}

export interface PostgresqlConfigSet13 {
    /**
     * Effective settings for a PostgreSQL 13 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: PostgresqlConfig13;
    /** User-defined settings for a PostgreSQL 13 cluster. */
    userConfig?: PostgresqlConfig13;
    /** Default configuration for a PostgreSQL 13 cluster. */
    defaultConfig?: PostgresqlConfig13;
}

const basePostgresqlConfig13: object = {
    walLevel: 0,
    synchronousCommit: 0,
    constraintExclusion: 0,
    forceParallelMode: 0,
    clientMinMessages: 0,
    logMinMessages: 0,
    logMinErrorStatement: 0,
    logErrorVerbosity: 0,
    logStatement: 0,
    searchPath: '',
    defaultTransactionIsolation: 0,
    byteaOutput: 0,
    xmlbinary: 0,
    xmloption: 0,
    backslashQuote: 0,
    timezone: '',
    planCacheMode: 0,
    sharedPreloadLibraries: 0,
    pgHintPlanDebugPrint: 0,
    pgHintPlanMessageLevel: 0,
    passwordEncryption: 0,
};

export const PostgresqlConfig13 = {
    encode(message: PostgresqlConfig13, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.maxConnections !== undefined) {
            Int64Value.encode(
                { value: message.maxConnections! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.sharedBuffers !== undefined) {
            Int64Value.encode({ value: message.sharedBuffers! }, writer.uint32(18).fork()).ldelim();
        }
        if (message.tempBuffers !== undefined) {
            Int64Value.encode({ value: message.tempBuffers! }, writer.uint32(26).fork()).ldelim();
        }
        if (message.maxPreparedTransactions !== undefined) {
            Int64Value.encode(
                { value: message.maxPreparedTransactions! },
                writer.uint32(34).fork(),
            ).ldelim();
        }
        if (message.workMem !== undefined) {
            Int64Value.encode({ value: message.workMem! }, writer.uint32(42).fork()).ldelim();
        }
        if (message.maintenanceWorkMem !== undefined) {
            Int64Value.encode(
                { value: message.maintenanceWorkMem! },
                writer.uint32(50).fork(),
            ).ldelim();
        }
        if (message.autovacuumWorkMem !== undefined) {
            Int64Value.encode(
                { value: message.autovacuumWorkMem! },
                writer.uint32(58).fork(),
            ).ldelim();
        }
        if (message.tempFileLimit !== undefined) {
            Int64Value.encode({ value: message.tempFileLimit! }, writer.uint32(66).fork()).ldelim();
        }
        if (message.vacuumCostDelay !== undefined) {
            Int64Value.encode(
                { value: message.vacuumCostDelay! },
                writer.uint32(74).fork(),
            ).ldelim();
        }
        if (message.vacuumCostPageHit !== undefined) {
            Int64Value.encode(
                { value: message.vacuumCostPageHit! },
                writer.uint32(82).fork(),
            ).ldelim();
        }
        if (message.vacuumCostPageMiss !== undefined) {
            Int64Value.encode(
                { value: message.vacuumCostPageMiss! },
                writer.uint32(90).fork(),
            ).ldelim();
        }
        if (message.vacuumCostPageDirty !== undefined) {
            Int64Value.encode(
                { value: message.vacuumCostPageDirty! },
                writer.uint32(98).fork(),
            ).ldelim();
        }
        if (message.vacuumCostLimit !== undefined) {
            Int64Value.encode(
                { value: message.vacuumCostLimit! },
                writer.uint32(106).fork(),
            ).ldelim();
        }
        if (message.bgwriterDelay !== undefined) {
            Int64Value.encode(
                { value: message.bgwriterDelay! },
                writer.uint32(114).fork(),
            ).ldelim();
        }
        if (message.bgwriterLruMaxpages !== undefined) {
            Int64Value.encode(
                { value: message.bgwriterLruMaxpages! },
                writer.uint32(122).fork(),
            ).ldelim();
        }
        if (message.bgwriterLruMultiplier !== undefined) {
            DoubleValue.encode(
                { value: message.bgwriterLruMultiplier! },
                writer.uint32(130).fork(),
            ).ldelim();
        }
        if (message.bgwriterFlushAfter !== undefined) {
            Int64Value.encode(
                { value: message.bgwriterFlushAfter! },
                writer.uint32(138).fork(),
            ).ldelim();
        }
        if (message.backendFlushAfter !== undefined) {
            Int64Value.encode(
                { value: message.backendFlushAfter! },
                writer.uint32(146).fork(),
            ).ldelim();
        }
        if (message.oldSnapshotThreshold !== undefined) {
            Int64Value.encode(
                { value: message.oldSnapshotThreshold! },
                writer.uint32(154).fork(),
            ).ldelim();
        }
        if (message.walLevel !== 0) {
            writer.uint32(160).int32(message.walLevel);
        }
        if (message.synchronousCommit !== 0) {
            writer.uint32(168).int32(message.synchronousCommit);
        }
        if (message.checkpointTimeout !== undefined) {
            Int64Value.encode(
                { value: message.checkpointTimeout! },
                writer.uint32(178).fork(),
            ).ldelim();
        }
        if (message.checkpointCompletionTarget !== undefined) {
            DoubleValue.encode(
                { value: message.checkpointCompletionTarget! },
                writer.uint32(186).fork(),
            ).ldelim();
        }
        if (message.checkpointFlushAfter !== undefined) {
            Int64Value.encode(
                { value: message.checkpointFlushAfter! },
                writer.uint32(194).fork(),
            ).ldelim();
        }
        if (message.maxWalSize !== undefined) {
            Int64Value.encode({ value: message.maxWalSize! }, writer.uint32(202).fork()).ldelim();
        }
        if (message.minWalSize !== undefined) {
            Int64Value.encode({ value: message.minWalSize! }, writer.uint32(210).fork()).ldelim();
        }
        if (message.maxStandbyStreamingDelay !== undefined) {
            Int64Value.encode(
                { value: message.maxStandbyStreamingDelay! },
                writer.uint32(218).fork(),
            ).ldelim();
        }
        if (message.defaultStatisticsTarget !== undefined) {
            Int64Value.encode(
                { value: message.defaultStatisticsTarget! },
                writer.uint32(226).fork(),
            ).ldelim();
        }
        if (message.constraintExclusion !== 0) {
            writer.uint32(232).int32(message.constraintExclusion);
        }
        if (message.cursorTupleFraction !== undefined) {
            DoubleValue.encode(
                { value: message.cursorTupleFraction! },
                writer.uint32(242).fork(),
            ).ldelim();
        }
        if (message.fromCollapseLimit !== undefined) {
            Int64Value.encode(
                { value: message.fromCollapseLimit! },
                writer.uint32(250).fork(),
            ).ldelim();
        }
        if (message.joinCollapseLimit !== undefined) {
            Int64Value.encode(
                { value: message.joinCollapseLimit! },
                writer.uint32(258).fork(),
            ).ldelim();
        }
        if (message.forceParallelMode !== 0) {
            writer.uint32(264).int32(message.forceParallelMode);
        }
        if (message.clientMinMessages !== 0) {
            writer.uint32(272).int32(message.clientMinMessages);
        }
        if (message.logMinMessages !== 0) {
            writer.uint32(280).int32(message.logMinMessages);
        }
        if (message.logMinErrorStatement !== 0) {
            writer.uint32(288).int32(message.logMinErrorStatement);
        }
        if (message.logMinDurationStatement !== undefined) {
            Int64Value.encode(
                { value: message.logMinDurationStatement! },
                writer.uint32(298).fork(),
            ).ldelim();
        }
        if (message.logCheckpoints !== undefined) {
            BoolValue.encode(
                { value: message.logCheckpoints! },
                writer.uint32(306).fork(),
            ).ldelim();
        }
        if (message.logConnections !== undefined) {
            BoolValue.encode(
                { value: message.logConnections! },
                writer.uint32(314).fork(),
            ).ldelim();
        }
        if (message.logDisconnections !== undefined) {
            BoolValue.encode(
                { value: message.logDisconnections! },
                writer.uint32(322).fork(),
            ).ldelim();
        }
        if (message.logDuration !== undefined) {
            BoolValue.encode({ value: message.logDuration! }, writer.uint32(330).fork()).ldelim();
        }
        if (message.logErrorVerbosity !== 0) {
            writer.uint32(336).int32(message.logErrorVerbosity);
        }
        if (message.logLockWaits !== undefined) {
            BoolValue.encode({ value: message.logLockWaits! }, writer.uint32(346).fork()).ldelim();
        }
        if (message.logStatement !== 0) {
            writer.uint32(352).int32(message.logStatement);
        }
        if (message.logTempFiles !== undefined) {
            Int64Value.encode({ value: message.logTempFiles! }, writer.uint32(362).fork()).ldelim();
        }
        if (message.searchPath !== '') {
            writer.uint32(370).string(message.searchPath);
        }
        if (message.rowSecurity !== undefined) {
            BoolValue.encode({ value: message.rowSecurity! }, writer.uint32(378).fork()).ldelim();
        }
        if (message.defaultTransactionIsolation !== 0) {
            writer.uint32(384).int32(message.defaultTransactionIsolation);
        }
        if (message.statementTimeout !== undefined) {
            Int64Value.encode(
                { value: message.statementTimeout! },
                writer.uint32(394).fork(),
            ).ldelim();
        }
        if (message.lockTimeout !== undefined) {
            Int64Value.encode({ value: message.lockTimeout! }, writer.uint32(402).fork()).ldelim();
        }
        if (message.idleInTransactionSessionTimeout !== undefined) {
            Int64Value.encode(
                { value: message.idleInTransactionSessionTimeout! },
                writer.uint32(410).fork(),
            ).ldelim();
        }
        if (message.byteaOutput !== 0) {
            writer.uint32(416).int32(message.byteaOutput);
        }
        if (message.xmlbinary !== 0) {
            writer.uint32(424).int32(message.xmlbinary);
        }
        if (message.xmloption !== 0) {
            writer.uint32(432).int32(message.xmloption);
        }
        if (message.ginPendingListLimit !== undefined) {
            Int64Value.encode(
                { value: message.ginPendingListLimit! },
                writer.uint32(442).fork(),
            ).ldelim();
        }
        if (message.deadlockTimeout !== undefined) {
            Int64Value.encode(
                { value: message.deadlockTimeout! },
                writer.uint32(450).fork(),
            ).ldelim();
        }
        if (message.maxLocksPerTransaction !== undefined) {
            Int64Value.encode(
                { value: message.maxLocksPerTransaction! },
                writer.uint32(458).fork(),
            ).ldelim();
        }
        if (message.maxPredLocksPerTransaction !== undefined) {
            Int64Value.encode(
                { value: message.maxPredLocksPerTransaction! },
                writer.uint32(466).fork(),
            ).ldelim();
        }
        if (message.arrayNulls !== undefined) {
            BoolValue.encode({ value: message.arrayNulls! }, writer.uint32(474).fork()).ldelim();
        }
        if (message.backslashQuote !== 0) {
            writer.uint32(480).int32(message.backslashQuote);
        }
        if (message.defaultWithOids !== undefined) {
            BoolValue.encode(
                { value: message.defaultWithOids! },
                writer.uint32(490).fork(),
            ).ldelim();
        }
        if (message.escapeStringWarning !== undefined) {
            BoolValue.encode(
                { value: message.escapeStringWarning! },
                writer.uint32(498).fork(),
            ).ldelim();
        }
        if (message.loCompatPrivileges !== undefined) {
            BoolValue.encode(
                { value: message.loCompatPrivileges! },
                writer.uint32(506).fork(),
            ).ldelim();
        }
        if (message.operatorPrecedenceWarning !== undefined) {
            BoolValue.encode(
                { value: message.operatorPrecedenceWarning! },
                writer.uint32(514).fork(),
            ).ldelim();
        }
        if (message.quoteAllIdentifiers !== undefined) {
            BoolValue.encode(
                { value: message.quoteAllIdentifiers! },
                writer.uint32(522).fork(),
            ).ldelim();
        }
        if (message.standardConformingStrings !== undefined) {
            BoolValue.encode(
                { value: message.standardConformingStrings! },
                writer.uint32(530).fork(),
            ).ldelim();
        }
        if (message.synchronizeSeqscans !== undefined) {
            BoolValue.encode(
                { value: message.synchronizeSeqscans! },
                writer.uint32(538).fork(),
            ).ldelim();
        }
        if (message.transformNullEquals !== undefined) {
            BoolValue.encode(
                { value: message.transformNullEquals! },
                writer.uint32(546).fork(),
            ).ldelim();
        }
        if (message.exitOnError !== undefined) {
            BoolValue.encode({ value: message.exitOnError! }, writer.uint32(554).fork()).ldelim();
        }
        if (message.seqPageCost !== undefined) {
            DoubleValue.encode({ value: message.seqPageCost! }, writer.uint32(562).fork()).ldelim();
        }
        if (message.randomPageCost !== undefined) {
            DoubleValue.encode(
                { value: message.randomPageCost! },
                writer.uint32(570).fork(),
            ).ldelim();
        }
        if (message.autovacuumMaxWorkers !== undefined) {
            Int64Value.encode(
                { value: message.autovacuumMaxWorkers! },
                writer.uint32(578).fork(),
            ).ldelim();
        }
        if (message.autovacuumVacuumCostDelay !== undefined) {
            Int64Value.encode(
                { value: message.autovacuumVacuumCostDelay! },
                writer.uint32(586).fork(),
            ).ldelim();
        }
        if (message.autovacuumVacuumCostLimit !== undefined) {
            Int64Value.encode(
                { value: message.autovacuumVacuumCostLimit! },
                writer.uint32(594).fork(),
            ).ldelim();
        }
        if (message.autovacuumNaptime !== undefined) {
            Int64Value.encode(
                { value: message.autovacuumNaptime! },
                writer.uint32(602).fork(),
            ).ldelim();
        }
        if (message.archiveTimeout !== undefined) {
            Int64Value.encode(
                { value: message.archiveTimeout! },
                writer.uint32(610).fork(),
            ).ldelim();
        }
        if (message.trackActivityQuerySize !== undefined) {
            Int64Value.encode(
                { value: message.trackActivityQuerySize! },
                writer.uint32(618).fork(),
            ).ldelim();
        }
        if (message.enableBitmapscan !== undefined) {
            BoolValue.encode(
                { value: message.enableBitmapscan! },
                writer.uint32(642).fork(),
            ).ldelim();
        }
        if (message.enableHashagg !== undefined) {
            BoolValue.encode({ value: message.enableHashagg! }, writer.uint32(650).fork()).ldelim();
        }
        if (message.enableHashjoin !== undefined) {
            BoolValue.encode(
                { value: message.enableHashjoin! },
                writer.uint32(658).fork(),
            ).ldelim();
        }
        if (message.enableIndexscan !== undefined) {
            BoolValue.encode(
                { value: message.enableIndexscan! },
                writer.uint32(666).fork(),
            ).ldelim();
        }
        if (message.enableIndexonlyscan !== undefined) {
            BoolValue.encode(
                { value: message.enableIndexonlyscan! },
                writer.uint32(674).fork(),
            ).ldelim();
        }
        if (message.enableMaterial !== undefined) {
            BoolValue.encode(
                { value: message.enableMaterial! },
                writer.uint32(682).fork(),
            ).ldelim();
        }
        if (message.enableMergejoin !== undefined) {
            BoolValue.encode(
                { value: message.enableMergejoin! },
                writer.uint32(690).fork(),
            ).ldelim();
        }
        if (message.enableNestloop !== undefined) {
            BoolValue.encode(
                { value: message.enableNestloop! },
                writer.uint32(698).fork(),
            ).ldelim();
        }
        if (message.enableSeqscan !== undefined) {
            BoolValue.encode({ value: message.enableSeqscan! }, writer.uint32(706).fork()).ldelim();
        }
        if (message.enableSort !== undefined) {
            BoolValue.encode({ value: message.enableSort! }, writer.uint32(714).fork()).ldelim();
        }
        if (message.enableTidscan !== undefined) {
            BoolValue.encode({ value: message.enableTidscan! }, writer.uint32(722).fork()).ldelim();
        }
        if (message.maxWorkerProcesses !== undefined) {
            Int64Value.encode(
                { value: message.maxWorkerProcesses! },
                writer.uint32(730).fork(),
            ).ldelim();
        }
        if (message.maxParallelWorkers !== undefined) {
            Int64Value.encode(
                { value: message.maxParallelWorkers! },
                writer.uint32(738).fork(),
            ).ldelim();
        }
        if (message.maxParallelWorkersPerGather !== undefined) {
            Int64Value.encode(
                { value: message.maxParallelWorkersPerGather! },
                writer.uint32(746).fork(),
            ).ldelim();
        }
        if (message.autovacuumVacuumScaleFactor !== undefined) {
            DoubleValue.encode(
                { value: message.autovacuumVacuumScaleFactor! },
                writer.uint32(754).fork(),
            ).ldelim();
        }
        if (message.autovacuumAnalyzeScaleFactor !== undefined) {
            DoubleValue.encode(
                { value: message.autovacuumAnalyzeScaleFactor! },
                writer.uint32(762).fork(),
            ).ldelim();
        }
        if (message.defaultTransactionReadOnly !== undefined) {
            BoolValue.encode(
                { value: message.defaultTransactionReadOnly! },
                writer.uint32(770).fork(),
            ).ldelim();
        }
        if (message.timezone !== '') {
            writer.uint32(778).string(message.timezone);
        }
        if (message.enableParallelAppend !== undefined) {
            BoolValue.encode(
                { value: message.enableParallelAppend! },
                writer.uint32(786).fork(),
            ).ldelim();
        }
        if (message.enableParallelHash !== undefined) {
            BoolValue.encode(
                { value: message.enableParallelHash! },
                writer.uint32(794).fork(),
            ).ldelim();
        }
        if (message.enablePartitionPruning !== undefined) {
            BoolValue.encode(
                { value: message.enablePartitionPruning! },
                writer.uint32(802).fork(),
            ).ldelim();
        }
        if (message.enablePartitionwiseAggregate !== undefined) {
            BoolValue.encode(
                { value: message.enablePartitionwiseAggregate! },
                writer.uint32(810).fork(),
            ).ldelim();
        }
        if (message.enablePartitionwiseJoin !== undefined) {
            BoolValue.encode(
                { value: message.enablePartitionwiseJoin! },
                writer.uint32(818).fork(),
            ).ldelim();
        }
        if (message.jit !== undefined) {
            BoolValue.encode({ value: message.jit! }, writer.uint32(826).fork()).ldelim();
        }
        if (message.maxParallelMaintenanceWorkers !== undefined) {
            Int64Value.encode(
                { value: message.maxParallelMaintenanceWorkers! },
                writer.uint32(834).fork(),
            ).ldelim();
        }
        if (message.parallelLeaderParticipation !== undefined) {
            BoolValue.encode(
                { value: message.parallelLeaderParticipation! },
                writer.uint32(842).fork(),
            ).ldelim();
        }
        if (message.vacuumCleanupIndexScaleFactor !== undefined) {
            DoubleValue.encode(
                { value: message.vacuumCleanupIndexScaleFactor! },
                writer.uint32(850).fork(),
            ).ldelim();
        }
        if (message.logTransactionSampleRate !== undefined) {
            DoubleValue.encode(
                { value: message.logTransactionSampleRate! },
                writer.uint32(858).fork(),
            ).ldelim();
        }
        if (message.planCacheMode !== 0) {
            writer.uint32(864).int32(message.planCacheMode);
        }
        if (message.effectiveIoConcurrency !== undefined) {
            Int64Value.encode(
                { value: message.effectiveIoConcurrency! },
                writer.uint32(874).fork(),
            ).ldelim();
        }
        if (message.effectiveCacheSize !== undefined) {
            Int64Value.encode(
                { value: message.effectiveCacheSize! },
                writer.uint32(882).fork(),
            ).ldelim();
        }
        writer.uint32(890).fork();
        for (const v of message.sharedPreloadLibraries) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.autoExplainLogMinDuration !== undefined) {
            Int64Value.encode(
                { value: message.autoExplainLogMinDuration! },
                writer.uint32(898).fork(),
            ).ldelim();
        }
        if (message.autoExplainLogAnalyze !== undefined) {
            BoolValue.encode(
                { value: message.autoExplainLogAnalyze! },
                writer.uint32(906).fork(),
            ).ldelim();
        }
        if (message.autoExplainLogBuffers !== undefined) {
            BoolValue.encode(
                { value: message.autoExplainLogBuffers! },
                writer.uint32(914).fork(),
            ).ldelim();
        }
        if (message.autoExplainLogTiming !== undefined) {
            BoolValue.encode(
                { value: message.autoExplainLogTiming! },
                writer.uint32(922).fork(),
            ).ldelim();
        }
        if (message.autoExplainLogTriggers !== undefined) {
            BoolValue.encode(
                { value: message.autoExplainLogTriggers! },
                writer.uint32(930).fork(),
            ).ldelim();
        }
        if (message.autoExplainLogVerbose !== undefined) {
            BoolValue.encode(
                { value: message.autoExplainLogVerbose! },
                writer.uint32(938).fork(),
            ).ldelim();
        }
        if (message.autoExplainLogNestedStatements !== undefined) {
            BoolValue.encode(
                { value: message.autoExplainLogNestedStatements! },
                writer.uint32(946).fork(),
            ).ldelim();
        }
        if (message.autoExplainSampleRate !== undefined) {
            DoubleValue.encode(
                { value: message.autoExplainSampleRate! },
                writer.uint32(954).fork(),
            ).ldelim();
        }
        if (message.pgHintPlanEnableHint !== undefined) {
            BoolValue.encode(
                { value: message.pgHintPlanEnableHint! },
                writer.uint32(962).fork(),
            ).ldelim();
        }
        if (message.pgHintPlanEnableHintTable !== undefined) {
            BoolValue.encode(
                { value: message.pgHintPlanEnableHintTable! },
                writer.uint32(970).fork(),
            ).ldelim();
        }
        if (message.pgHintPlanDebugPrint !== 0) {
            writer.uint32(976).int32(message.pgHintPlanDebugPrint);
        }
        if (message.pgHintPlanMessageLevel !== 0) {
            writer.uint32(984).int32(message.pgHintPlanMessageLevel);
        }
        if (message.hashMemMultiplier !== undefined) {
            DoubleValue.encode(
                { value: message.hashMemMultiplier! },
                writer.uint32(994).fork(),
            ).ldelim();
        }
        if (message.logicalDecodingWorkMem !== undefined) {
            Int64Value.encode(
                { value: message.logicalDecodingWorkMem! },
                writer.uint32(1010).fork(),
            ).ldelim();
        }
        if (message.maintenanceIoConcurrency !== undefined) {
            Int64Value.encode(
                { value: message.maintenanceIoConcurrency! },
                writer.uint32(1018).fork(),
            ).ldelim();
        }
        if (message.maxSlotWalKeepSize !== undefined) {
            Int64Value.encode(
                { value: message.maxSlotWalKeepSize! },
                writer.uint32(1026).fork(),
            ).ldelim();
        }
        if (message.walKeepSize !== undefined) {
            Int64Value.encode({ value: message.walKeepSize! }, writer.uint32(1034).fork()).ldelim();
        }
        if (message.enableIncrementalSort !== undefined) {
            BoolValue.encode(
                { value: message.enableIncrementalSort! },
                writer.uint32(1042).fork(),
            ).ldelim();
        }
        if (message.autovacuumVacuumInsertThreshold !== undefined) {
            Int64Value.encode(
                { value: message.autovacuumVacuumInsertThreshold! },
                writer.uint32(1050).fork(),
            ).ldelim();
        }
        if (message.autovacuumVacuumInsertScaleFactor !== undefined) {
            DoubleValue.encode(
                { value: message.autovacuumVacuumInsertScaleFactor! },
                writer.uint32(1058).fork(),
            ).ldelim();
        }
        if (message.logMinDurationSample !== undefined) {
            Int64Value.encode(
                { value: message.logMinDurationSample! },
                writer.uint32(1066).fork(),
            ).ldelim();
        }
        if (message.logStatementSampleRate !== undefined) {
            DoubleValue.encode(
                { value: message.logStatementSampleRate! },
                writer.uint32(1074).fork(),
            ).ldelim();
        }
        if (message.logParameterMaxLength !== undefined) {
            Int64Value.encode(
                { value: message.logParameterMaxLength! },
                writer.uint32(1082).fork(),
            ).ldelim();
        }
        if (message.logParameterMaxLengthOnError !== undefined) {
            Int64Value.encode(
                { value: message.logParameterMaxLengthOnError! },
                writer.uint32(1090).fork(),
            ).ldelim();
        }
        if (message.pgQualstatsEnabled !== undefined) {
            BoolValue.encode(
                { value: message.pgQualstatsEnabled! },
                writer.uint32(1098).fork(),
            ).ldelim();
        }
        if (message.pgQualstatsTrackConstants !== undefined) {
            BoolValue.encode(
                { value: message.pgQualstatsTrackConstants! },
                writer.uint32(1106).fork(),
            ).ldelim();
        }
        if (message.pgQualstatsMax !== undefined) {
            Int64Value.encode(
                { value: message.pgQualstatsMax! },
                writer.uint32(1114).fork(),
            ).ldelim();
        }
        if (message.pgQualstatsResolveOids !== undefined) {
            BoolValue.encode(
                { value: message.pgQualstatsResolveOids! },
                writer.uint32(1122).fork(),
            ).ldelim();
        }
        if (message.pgQualstatsSampleRate !== undefined) {
            DoubleValue.encode(
                { value: message.pgQualstatsSampleRate! },
                writer.uint32(1130).fork(),
            ).ldelim();
        }
        if (message.maxStackDepth !== undefined) {
            Int64Value.encode(
                { value: message.maxStackDepth! },
                writer.uint32(1202).fork(),
            ).ldelim();
        }
        if (message.geqo !== undefined) {
            BoolValue.encode({ value: message.geqo! }, writer.uint32(1218).fork()).ldelim();
        }
        if (message.geqoThreshold !== undefined) {
            Int64Value.encode(
                { value: message.geqoThreshold! },
                writer.uint32(1226).fork(),
            ).ldelim();
        }
        if (message.geqoEffort !== undefined) {
            Int64Value.encode({ value: message.geqoEffort! }, writer.uint32(1234).fork()).ldelim();
        }
        if (message.geqoPoolSize !== undefined) {
            Int64Value.encode(
                { value: message.geqoPoolSize! },
                writer.uint32(1242).fork(),
            ).ldelim();
        }
        if (message.geqoGenerations !== undefined) {
            Int64Value.encode(
                { value: message.geqoGenerations! },
                writer.uint32(1250).fork(),
            ).ldelim();
        }
        if (message.geqoSelectionBias !== undefined) {
            DoubleValue.encode(
                { value: message.geqoSelectionBias! },
                writer.uint32(1258).fork(),
            ).ldelim();
        }
        if (message.geqoSeed !== undefined) {
            DoubleValue.encode({ value: message.geqoSeed! }, writer.uint32(1266).fork()).ldelim();
        }
        if (message.pgTrgmSimilarityThreshold !== undefined) {
            DoubleValue.encode(
                { value: message.pgTrgmSimilarityThreshold! },
                writer.uint32(1274).fork(),
            ).ldelim();
        }
        if (message.pgTrgmWordSimilarityThreshold !== undefined) {
            DoubleValue.encode(
                { value: message.pgTrgmWordSimilarityThreshold! },
                writer.uint32(1282).fork(),
            ).ldelim();
        }
        if (message.pgTrgmStrictWordSimilarityThreshold !== undefined) {
            DoubleValue.encode(
                { value: message.pgTrgmStrictWordSimilarityThreshold! },
                writer.uint32(1290).fork(),
            ).ldelim();
        }
        if (message.maxStandbyArchiveDelay !== undefined) {
            Int64Value.encode(
                { value: message.maxStandbyArchiveDelay! },
                writer.uint32(1298).fork(),
            ).ldelim();
        }
        if (message.sessionDurationTimeout !== undefined) {
            Int64Value.encode(
                { value: message.sessionDurationTimeout! },
                writer.uint32(1306).fork(),
            ).ldelim();
        }
        if (message.logReplicationCommands !== undefined) {
            BoolValue.encode(
                { value: message.logReplicationCommands! },
                writer.uint32(1314).fork(),
            ).ldelim();
        }
        if (message.logAutovacuumMinDuration !== undefined) {
            Int64Value.encode(
                { value: message.logAutovacuumMinDuration! },
                writer.uint32(1322).fork(),
            ).ldelim();
        }
        if (message.passwordEncryption !== 0) {
            writer.uint32(1336).int32(message.passwordEncryption);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PostgresqlConfig13 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePostgresqlConfig13 } as PostgresqlConfig13;
        message.sharedPreloadLibraries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxConnections = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.sharedBuffers = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.tempBuffers = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.maxPreparedTransactions = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 5:
                    message.workMem = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.maintenanceWorkMem = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.autovacuumWorkMem = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.tempFileLimit = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.vacuumCostDelay = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.vacuumCostPageHit = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.vacuumCostPageMiss = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.vacuumCostPageDirty = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.vacuumCostLimit = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 14:
                    message.bgwriterDelay = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 15:
                    message.bgwriterLruMaxpages = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 16:
                    message.bgwriterLruMultiplier = DoubleValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 17:
                    message.bgwriterFlushAfter = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 18:
                    message.backendFlushAfter = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 19:
                    message.oldSnapshotThreshold = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 20:
                    message.walLevel = reader.int32() as any;
                    break;
                case 21:
                    message.synchronousCommit = reader.int32() as any;
                    break;
                case 22:
                    message.checkpointTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 23:
                    message.checkpointCompletionTarget = DoubleValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 24:
                    message.checkpointFlushAfter = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 25:
                    message.maxWalSize = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 26:
                    message.minWalSize = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 27:
                    message.maxStandbyStreamingDelay = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 28:
                    message.defaultStatisticsTarget = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 29:
                    message.constraintExclusion = reader.int32() as any;
                    break;
                case 30:
                    message.cursorTupleFraction = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 31:
                    message.fromCollapseLimit = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 32:
                    message.joinCollapseLimit = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 33:
                    message.forceParallelMode = reader.int32() as any;
                    break;
                case 34:
                    message.clientMinMessages = reader.int32() as any;
                    break;
                case 35:
                    message.logMinMessages = reader.int32() as any;
                    break;
                case 36:
                    message.logMinErrorStatement = reader.int32() as any;
                    break;
                case 37:
                    message.logMinDurationStatement = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 38:
                    message.logCheckpoints = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 39:
                    message.logConnections = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 40:
                    message.logDisconnections = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 41:
                    message.logDuration = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 42:
                    message.logErrorVerbosity = reader.int32() as any;
                    break;
                case 43:
                    message.logLockWaits = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 44:
                    message.logStatement = reader.int32() as any;
                    break;
                case 45:
                    message.logTempFiles = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 46:
                    message.searchPath = reader.string();
                    break;
                case 47:
                    message.rowSecurity = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 48:
                    message.defaultTransactionIsolation = reader.int32() as any;
                    break;
                case 49:
                    message.statementTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 50:
                    message.lockTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 51:
                    message.idleInTransactionSessionTimeout = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 52:
                    message.byteaOutput = reader.int32() as any;
                    break;
                case 53:
                    message.xmlbinary = reader.int32() as any;
                    break;
                case 54:
                    message.xmloption = reader.int32() as any;
                    break;
                case 55:
                    message.ginPendingListLimit = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 56:
                    message.deadlockTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 57:
                    message.maxLocksPerTransaction = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 58:
                    message.maxPredLocksPerTransaction = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 59:
                    message.arrayNulls = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 60:
                    message.backslashQuote = reader.int32() as any;
                    break;
                case 61:
                    message.defaultWithOids = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 62:
                    message.escapeStringWarning = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 63:
                    message.loCompatPrivileges = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 64:
                    message.operatorPrecedenceWarning = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 65:
                    message.quoteAllIdentifiers = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 66:
                    message.standardConformingStrings = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 67:
                    message.synchronizeSeqscans = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 68:
                    message.transformNullEquals = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 69:
                    message.exitOnError = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 70:
                    message.seqPageCost = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 71:
                    message.randomPageCost = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 72:
                    message.autovacuumMaxWorkers = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 73:
                    message.autovacuumVacuumCostDelay = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 74:
                    message.autovacuumVacuumCostLimit = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 75:
                    message.autovacuumNaptime = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 76:
                    message.archiveTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 77:
                    message.trackActivityQuerySize = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 80:
                    message.enableBitmapscan = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 81:
                    message.enableHashagg = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 82:
                    message.enableHashjoin = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 83:
                    message.enableIndexscan = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 84:
                    message.enableIndexonlyscan = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 85:
                    message.enableMaterial = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 86:
                    message.enableMergejoin = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 87:
                    message.enableNestloop = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 88:
                    message.enableSeqscan = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 89:
                    message.enableSort = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 90:
                    message.enableTidscan = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 91:
                    message.maxWorkerProcesses = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 92:
                    message.maxParallelWorkers = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 93:
                    message.maxParallelWorkersPerGather = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 94:
                    message.autovacuumVacuumScaleFactor = DoubleValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 95:
                    message.autovacuumAnalyzeScaleFactor = DoubleValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 96:
                    message.defaultTransactionReadOnly = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 97:
                    message.timezone = reader.string();
                    break;
                case 98:
                    message.enableParallelAppend = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 99:
                    message.enableParallelHash = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 100:
                    message.enablePartitionPruning = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 101:
                    message.enablePartitionwiseAggregate = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 102:
                    message.enablePartitionwiseJoin = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 103:
                    message.jit = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 104:
                    message.maxParallelMaintenanceWorkers = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 105:
                    message.parallelLeaderParticipation = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 106:
                    message.vacuumCleanupIndexScaleFactor = DoubleValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 107:
                    message.logTransactionSampleRate = DoubleValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 108:
                    message.planCacheMode = reader.int32() as any;
                    break;
                case 109:
                    message.effectiveIoConcurrency = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 110:
                    message.effectiveCacheSize = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 111:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.sharedPreloadLibraries.push(reader.int32() as any);
                        }
                    } else {
                        message.sharedPreloadLibraries.push(reader.int32() as any);
                    }
                    break;
                case 112:
                    message.autoExplainLogMinDuration = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 113:
                    message.autoExplainLogAnalyze = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 114:
                    message.autoExplainLogBuffers = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 115:
                    message.autoExplainLogTiming = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 116:
                    message.autoExplainLogTriggers = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 117:
                    message.autoExplainLogVerbose = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 118:
                    message.autoExplainLogNestedStatements = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 119:
                    message.autoExplainSampleRate = DoubleValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 120:
                    message.pgHintPlanEnableHint = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 121:
                    message.pgHintPlanEnableHintTable = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 122:
                    message.pgHintPlanDebugPrint = reader.int32() as any;
                    break;
                case 123:
                    message.pgHintPlanMessageLevel = reader.int32() as any;
                    break;
                case 124:
                    message.hashMemMultiplier = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 126:
                    message.logicalDecodingWorkMem = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 127:
                    message.maintenanceIoConcurrency = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 128:
                    message.maxSlotWalKeepSize = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 129:
                    message.walKeepSize = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 130:
                    message.enableIncrementalSort = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 131:
                    message.autovacuumVacuumInsertThreshold = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 132:
                    message.autovacuumVacuumInsertScaleFactor = DoubleValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 133:
                    message.logMinDurationSample = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 134:
                    message.logStatementSampleRate = DoubleValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 135:
                    message.logParameterMaxLength = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 136:
                    message.logParameterMaxLengthOnError = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 137:
                    message.pgQualstatsEnabled = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 138:
                    message.pgQualstatsTrackConstants = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 139:
                    message.pgQualstatsMax = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 140:
                    message.pgQualstatsResolveOids = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 141:
                    message.pgQualstatsSampleRate = DoubleValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 150:
                    message.maxStackDepth = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 152:
                    message.geqo = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 153:
                    message.geqoThreshold = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 154:
                    message.geqoEffort = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 155:
                    message.geqoPoolSize = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 156:
                    message.geqoGenerations = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 157:
                    message.geqoSelectionBias = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 158:
                    message.geqoSeed = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 159:
                    message.pgTrgmSimilarityThreshold = DoubleValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 160:
                    message.pgTrgmWordSimilarityThreshold = DoubleValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 161:
                    message.pgTrgmStrictWordSimilarityThreshold = DoubleValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 162:
                    message.maxStandbyArchiveDelay = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 163:
                    message.sessionDurationTimeout = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 164:
                    message.logReplicationCommands = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 165:
                    message.logAutovacuumMinDuration = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 167:
                    message.passwordEncryption = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PostgresqlConfig13 {
        const message = { ...basePostgresqlConfig13 } as PostgresqlConfig13;
        message.maxConnections =
            object.maxConnections !== undefined && object.maxConnections !== null
                ? Number(object.maxConnections)
                : undefined;
        message.sharedBuffers =
            object.sharedBuffers !== undefined && object.sharedBuffers !== null
                ? Number(object.sharedBuffers)
                : undefined;
        message.tempBuffers =
            object.tempBuffers !== undefined && object.tempBuffers !== null
                ? Number(object.tempBuffers)
                : undefined;
        message.maxPreparedTransactions =
            object.maxPreparedTransactions !== undefined && object.maxPreparedTransactions !== null
                ? Number(object.maxPreparedTransactions)
                : undefined;
        message.workMem =
            object.workMem !== undefined && object.workMem !== null
                ? Number(object.workMem)
                : undefined;
        message.maintenanceWorkMem =
            object.maintenanceWorkMem !== undefined && object.maintenanceWorkMem !== null
                ? Number(object.maintenanceWorkMem)
                : undefined;
        message.autovacuumWorkMem =
            object.autovacuumWorkMem !== undefined && object.autovacuumWorkMem !== null
                ? Number(object.autovacuumWorkMem)
                : undefined;
        message.tempFileLimit =
            object.tempFileLimit !== undefined && object.tempFileLimit !== null
                ? Number(object.tempFileLimit)
                : undefined;
        message.vacuumCostDelay =
            object.vacuumCostDelay !== undefined && object.vacuumCostDelay !== null
                ? Number(object.vacuumCostDelay)
                : undefined;
        message.vacuumCostPageHit =
            object.vacuumCostPageHit !== undefined && object.vacuumCostPageHit !== null
                ? Number(object.vacuumCostPageHit)
                : undefined;
        message.vacuumCostPageMiss =
            object.vacuumCostPageMiss !== undefined && object.vacuumCostPageMiss !== null
                ? Number(object.vacuumCostPageMiss)
                : undefined;
        message.vacuumCostPageDirty =
            object.vacuumCostPageDirty !== undefined && object.vacuumCostPageDirty !== null
                ? Number(object.vacuumCostPageDirty)
                : undefined;
        message.vacuumCostLimit =
            object.vacuumCostLimit !== undefined && object.vacuumCostLimit !== null
                ? Number(object.vacuumCostLimit)
                : undefined;
        message.bgwriterDelay =
            object.bgwriterDelay !== undefined && object.bgwriterDelay !== null
                ? Number(object.bgwriterDelay)
                : undefined;
        message.bgwriterLruMaxpages =
            object.bgwriterLruMaxpages !== undefined && object.bgwriterLruMaxpages !== null
                ? Number(object.bgwriterLruMaxpages)
                : undefined;
        message.bgwriterLruMultiplier =
            object.bgwriterLruMultiplier !== undefined && object.bgwriterLruMultiplier !== null
                ? Number(object.bgwriterLruMultiplier)
                : undefined;
        message.bgwriterFlushAfter =
            object.bgwriterFlushAfter !== undefined && object.bgwriterFlushAfter !== null
                ? Number(object.bgwriterFlushAfter)
                : undefined;
        message.backendFlushAfter =
            object.backendFlushAfter !== undefined && object.backendFlushAfter !== null
                ? Number(object.backendFlushAfter)
                : undefined;
        message.oldSnapshotThreshold =
            object.oldSnapshotThreshold !== undefined && object.oldSnapshotThreshold !== null
                ? Number(object.oldSnapshotThreshold)
                : undefined;
        message.walLevel =
            object.walLevel !== undefined && object.walLevel !== null
                ? postgresqlConfig13_WalLevelFromJSON(object.walLevel)
                : 0;
        message.synchronousCommit =
            object.synchronousCommit !== undefined && object.synchronousCommit !== null
                ? postgresqlConfig13_SynchronousCommitFromJSON(object.synchronousCommit)
                : 0;
        message.checkpointTimeout =
            object.checkpointTimeout !== undefined && object.checkpointTimeout !== null
                ? Number(object.checkpointTimeout)
                : undefined;
        message.checkpointCompletionTarget =
            object.checkpointCompletionTarget !== undefined &&
            object.checkpointCompletionTarget !== null
                ? Number(object.checkpointCompletionTarget)
                : undefined;
        message.checkpointFlushAfter =
            object.checkpointFlushAfter !== undefined && object.checkpointFlushAfter !== null
                ? Number(object.checkpointFlushAfter)
                : undefined;
        message.maxWalSize =
            object.maxWalSize !== undefined && object.maxWalSize !== null
                ? Number(object.maxWalSize)
                : undefined;
        message.minWalSize =
            object.minWalSize !== undefined && object.minWalSize !== null
                ? Number(object.minWalSize)
                : undefined;
        message.maxStandbyStreamingDelay =
            object.maxStandbyStreamingDelay !== undefined &&
            object.maxStandbyStreamingDelay !== null
                ? Number(object.maxStandbyStreamingDelay)
                : undefined;
        message.defaultStatisticsTarget =
            object.defaultStatisticsTarget !== undefined && object.defaultStatisticsTarget !== null
                ? Number(object.defaultStatisticsTarget)
                : undefined;
        message.constraintExclusion =
            object.constraintExclusion !== undefined && object.constraintExclusion !== null
                ? postgresqlConfig13_ConstraintExclusionFromJSON(object.constraintExclusion)
                : 0;
        message.cursorTupleFraction =
            object.cursorTupleFraction !== undefined && object.cursorTupleFraction !== null
                ? Number(object.cursorTupleFraction)
                : undefined;
        message.fromCollapseLimit =
            object.fromCollapseLimit !== undefined && object.fromCollapseLimit !== null
                ? Number(object.fromCollapseLimit)
                : undefined;
        message.joinCollapseLimit =
            object.joinCollapseLimit !== undefined && object.joinCollapseLimit !== null
                ? Number(object.joinCollapseLimit)
                : undefined;
        message.forceParallelMode =
            object.forceParallelMode !== undefined && object.forceParallelMode !== null
                ? postgresqlConfig13_ForceParallelModeFromJSON(object.forceParallelMode)
                : 0;
        message.clientMinMessages =
            object.clientMinMessages !== undefined && object.clientMinMessages !== null
                ? postgresqlConfig13_LogLevelFromJSON(object.clientMinMessages)
                : 0;
        message.logMinMessages =
            object.logMinMessages !== undefined && object.logMinMessages !== null
                ? postgresqlConfig13_LogLevelFromJSON(object.logMinMessages)
                : 0;
        message.logMinErrorStatement =
            object.logMinErrorStatement !== undefined && object.logMinErrorStatement !== null
                ? postgresqlConfig13_LogLevelFromJSON(object.logMinErrorStatement)
                : 0;
        message.logMinDurationStatement =
            object.logMinDurationStatement !== undefined && object.logMinDurationStatement !== null
                ? Number(object.logMinDurationStatement)
                : undefined;
        message.logCheckpoints =
            object.logCheckpoints !== undefined && object.logCheckpoints !== null
                ? Boolean(object.logCheckpoints)
                : undefined;
        message.logConnections =
            object.logConnections !== undefined && object.logConnections !== null
                ? Boolean(object.logConnections)
                : undefined;
        message.logDisconnections =
            object.logDisconnections !== undefined && object.logDisconnections !== null
                ? Boolean(object.logDisconnections)
                : undefined;
        message.logDuration =
            object.logDuration !== undefined && object.logDuration !== null
                ? Boolean(object.logDuration)
                : undefined;
        message.logErrorVerbosity =
            object.logErrorVerbosity !== undefined && object.logErrorVerbosity !== null
                ? postgresqlConfig13_LogErrorVerbosityFromJSON(object.logErrorVerbosity)
                : 0;
        message.logLockWaits =
            object.logLockWaits !== undefined && object.logLockWaits !== null
                ? Boolean(object.logLockWaits)
                : undefined;
        message.logStatement =
            object.logStatement !== undefined && object.logStatement !== null
                ? postgresqlConfig13_LogStatementFromJSON(object.logStatement)
                : 0;
        message.logTempFiles =
            object.logTempFiles !== undefined && object.logTempFiles !== null
                ? Number(object.logTempFiles)
                : undefined;
        message.searchPath =
            object.searchPath !== undefined && object.searchPath !== null
                ? String(object.searchPath)
                : '';
        message.rowSecurity =
            object.rowSecurity !== undefined && object.rowSecurity !== null
                ? Boolean(object.rowSecurity)
                : undefined;
        message.defaultTransactionIsolation =
            object.defaultTransactionIsolation !== undefined &&
            object.defaultTransactionIsolation !== null
                ? postgresqlConfig13_TransactionIsolationFromJSON(
                      object.defaultTransactionIsolation,
                  )
                : 0;
        message.statementTimeout =
            object.statementTimeout !== undefined && object.statementTimeout !== null
                ? Number(object.statementTimeout)
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
        message.byteaOutput =
            object.byteaOutput !== undefined && object.byteaOutput !== null
                ? postgresqlConfig13_ByteaOutputFromJSON(object.byteaOutput)
                : 0;
        message.xmlbinary =
            object.xmlbinary !== undefined && object.xmlbinary !== null
                ? postgresqlConfig13_XmlBinaryFromJSON(object.xmlbinary)
                : 0;
        message.xmloption =
            object.xmloption !== undefined && object.xmloption !== null
                ? postgresqlConfig13_XmlOptionFromJSON(object.xmloption)
                : 0;
        message.ginPendingListLimit =
            object.ginPendingListLimit !== undefined && object.ginPendingListLimit !== null
                ? Number(object.ginPendingListLimit)
                : undefined;
        message.deadlockTimeout =
            object.deadlockTimeout !== undefined && object.deadlockTimeout !== null
                ? Number(object.deadlockTimeout)
                : undefined;
        message.maxLocksPerTransaction =
            object.maxLocksPerTransaction !== undefined && object.maxLocksPerTransaction !== null
                ? Number(object.maxLocksPerTransaction)
                : undefined;
        message.maxPredLocksPerTransaction =
            object.maxPredLocksPerTransaction !== undefined &&
            object.maxPredLocksPerTransaction !== null
                ? Number(object.maxPredLocksPerTransaction)
                : undefined;
        message.arrayNulls =
            object.arrayNulls !== undefined && object.arrayNulls !== null
                ? Boolean(object.arrayNulls)
                : undefined;
        message.backslashQuote =
            object.backslashQuote !== undefined && object.backslashQuote !== null
                ? postgresqlConfig13_BackslashQuoteFromJSON(object.backslashQuote)
                : 0;
        message.defaultWithOids =
            object.defaultWithOids !== undefined && object.defaultWithOids !== null
                ? Boolean(object.defaultWithOids)
                : undefined;
        message.escapeStringWarning =
            object.escapeStringWarning !== undefined && object.escapeStringWarning !== null
                ? Boolean(object.escapeStringWarning)
                : undefined;
        message.loCompatPrivileges =
            object.loCompatPrivileges !== undefined && object.loCompatPrivileges !== null
                ? Boolean(object.loCompatPrivileges)
                : undefined;
        message.operatorPrecedenceWarning =
            object.operatorPrecedenceWarning !== undefined &&
            object.operatorPrecedenceWarning !== null
                ? Boolean(object.operatorPrecedenceWarning)
                : undefined;
        message.quoteAllIdentifiers =
            object.quoteAllIdentifiers !== undefined && object.quoteAllIdentifiers !== null
                ? Boolean(object.quoteAllIdentifiers)
                : undefined;
        message.standardConformingStrings =
            object.standardConformingStrings !== undefined &&
            object.standardConformingStrings !== null
                ? Boolean(object.standardConformingStrings)
                : undefined;
        message.synchronizeSeqscans =
            object.synchronizeSeqscans !== undefined && object.synchronizeSeqscans !== null
                ? Boolean(object.synchronizeSeqscans)
                : undefined;
        message.transformNullEquals =
            object.transformNullEquals !== undefined && object.transformNullEquals !== null
                ? Boolean(object.transformNullEquals)
                : undefined;
        message.exitOnError =
            object.exitOnError !== undefined && object.exitOnError !== null
                ? Boolean(object.exitOnError)
                : undefined;
        message.seqPageCost =
            object.seqPageCost !== undefined && object.seqPageCost !== null
                ? Number(object.seqPageCost)
                : undefined;
        message.randomPageCost =
            object.randomPageCost !== undefined && object.randomPageCost !== null
                ? Number(object.randomPageCost)
                : undefined;
        message.autovacuumMaxWorkers =
            object.autovacuumMaxWorkers !== undefined && object.autovacuumMaxWorkers !== null
                ? Number(object.autovacuumMaxWorkers)
                : undefined;
        message.autovacuumVacuumCostDelay =
            object.autovacuumVacuumCostDelay !== undefined &&
            object.autovacuumVacuumCostDelay !== null
                ? Number(object.autovacuumVacuumCostDelay)
                : undefined;
        message.autovacuumVacuumCostLimit =
            object.autovacuumVacuumCostLimit !== undefined &&
            object.autovacuumVacuumCostLimit !== null
                ? Number(object.autovacuumVacuumCostLimit)
                : undefined;
        message.autovacuumNaptime =
            object.autovacuumNaptime !== undefined && object.autovacuumNaptime !== null
                ? Number(object.autovacuumNaptime)
                : undefined;
        message.archiveTimeout =
            object.archiveTimeout !== undefined && object.archiveTimeout !== null
                ? Number(object.archiveTimeout)
                : undefined;
        message.trackActivityQuerySize =
            object.trackActivityQuerySize !== undefined && object.trackActivityQuerySize !== null
                ? Number(object.trackActivityQuerySize)
                : undefined;
        message.enableBitmapscan =
            object.enableBitmapscan !== undefined && object.enableBitmapscan !== null
                ? Boolean(object.enableBitmapscan)
                : undefined;
        message.enableHashagg =
            object.enableHashagg !== undefined && object.enableHashagg !== null
                ? Boolean(object.enableHashagg)
                : undefined;
        message.enableHashjoin =
            object.enableHashjoin !== undefined && object.enableHashjoin !== null
                ? Boolean(object.enableHashjoin)
                : undefined;
        message.enableIndexscan =
            object.enableIndexscan !== undefined && object.enableIndexscan !== null
                ? Boolean(object.enableIndexscan)
                : undefined;
        message.enableIndexonlyscan =
            object.enableIndexonlyscan !== undefined && object.enableIndexonlyscan !== null
                ? Boolean(object.enableIndexonlyscan)
                : undefined;
        message.enableMaterial =
            object.enableMaterial !== undefined && object.enableMaterial !== null
                ? Boolean(object.enableMaterial)
                : undefined;
        message.enableMergejoin =
            object.enableMergejoin !== undefined && object.enableMergejoin !== null
                ? Boolean(object.enableMergejoin)
                : undefined;
        message.enableNestloop =
            object.enableNestloop !== undefined && object.enableNestloop !== null
                ? Boolean(object.enableNestloop)
                : undefined;
        message.enableSeqscan =
            object.enableSeqscan !== undefined && object.enableSeqscan !== null
                ? Boolean(object.enableSeqscan)
                : undefined;
        message.enableSort =
            object.enableSort !== undefined && object.enableSort !== null
                ? Boolean(object.enableSort)
                : undefined;
        message.enableTidscan =
            object.enableTidscan !== undefined && object.enableTidscan !== null
                ? Boolean(object.enableTidscan)
                : undefined;
        message.maxWorkerProcesses =
            object.maxWorkerProcesses !== undefined && object.maxWorkerProcesses !== null
                ? Number(object.maxWorkerProcesses)
                : undefined;
        message.maxParallelWorkers =
            object.maxParallelWorkers !== undefined && object.maxParallelWorkers !== null
                ? Number(object.maxParallelWorkers)
                : undefined;
        message.maxParallelWorkersPerGather =
            object.maxParallelWorkersPerGather !== undefined &&
            object.maxParallelWorkersPerGather !== null
                ? Number(object.maxParallelWorkersPerGather)
                : undefined;
        message.autovacuumVacuumScaleFactor =
            object.autovacuumVacuumScaleFactor !== undefined &&
            object.autovacuumVacuumScaleFactor !== null
                ? Number(object.autovacuumVacuumScaleFactor)
                : undefined;
        message.autovacuumAnalyzeScaleFactor =
            object.autovacuumAnalyzeScaleFactor !== undefined &&
            object.autovacuumAnalyzeScaleFactor !== null
                ? Number(object.autovacuumAnalyzeScaleFactor)
                : undefined;
        message.defaultTransactionReadOnly =
            object.defaultTransactionReadOnly !== undefined &&
            object.defaultTransactionReadOnly !== null
                ? Boolean(object.defaultTransactionReadOnly)
                : undefined;
        message.timezone =
            object.timezone !== undefined && object.timezone !== null
                ? String(object.timezone)
                : '';
        message.enableParallelAppend =
            object.enableParallelAppend !== undefined && object.enableParallelAppend !== null
                ? Boolean(object.enableParallelAppend)
                : undefined;
        message.enableParallelHash =
            object.enableParallelHash !== undefined && object.enableParallelHash !== null
                ? Boolean(object.enableParallelHash)
                : undefined;
        message.enablePartitionPruning =
            object.enablePartitionPruning !== undefined && object.enablePartitionPruning !== null
                ? Boolean(object.enablePartitionPruning)
                : undefined;
        message.enablePartitionwiseAggregate =
            object.enablePartitionwiseAggregate !== undefined &&
            object.enablePartitionwiseAggregate !== null
                ? Boolean(object.enablePartitionwiseAggregate)
                : undefined;
        message.enablePartitionwiseJoin =
            object.enablePartitionwiseJoin !== undefined && object.enablePartitionwiseJoin !== null
                ? Boolean(object.enablePartitionwiseJoin)
                : undefined;
        message.jit =
            object.jit !== undefined && object.jit !== null ? Boolean(object.jit) : undefined;
        message.maxParallelMaintenanceWorkers =
            object.maxParallelMaintenanceWorkers !== undefined &&
            object.maxParallelMaintenanceWorkers !== null
                ? Number(object.maxParallelMaintenanceWorkers)
                : undefined;
        message.parallelLeaderParticipation =
            object.parallelLeaderParticipation !== undefined &&
            object.parallelLeaderParticipation !== null
                ? Boolean(object.parallelLeaderParticipation)
                : undefined;
        message.vacuumCleanupIndexScaleFactor =
            object.vacuumCleanupIndexScaleFactor !== undefined &&
            object.vacuumCleanupIndexScaleFactor !== null
                ? Number(object.vacuumCleanupIndexScaleFactor)
                : undefined;
        message.logTransactionSampleRate =
            object.logTransactionSampleRate !== undefined &&
            object.logTransactionSampleRate !== null
                ? Number(object.logTransactionSampleRate)
                : undefined;
        message.planCacheMode =
            object.planCacheMode !== undefined && object.planCacheMode !== null
                ? postgresqlConfig13_PlanCacheModeFromJSON(object.planCacheMode)
                : 0;
        message.effectiveIoConcurrency =
            object.effectiveIoConcurrency !== undefined && object.effectiveIoConcurrency !== null
                ? Number(object.effectiveIoConcurrency)
                : undefined;
        message.effectiveCacheSize =
            object.effectiveCacheSize !== undefined && object.effectiveCacheSize !== null
                ? Number(object.effectiveCacheSize)
                : undefined;
        message.sharedPreloadLibraries = (object.sharedPreloadLibraries ?? []).map((e: any) =>
            postgresqlConfig13_SharedPreloadLibrariesFromJSON(e),
        );
        message.autoExplainLogMinDuration =
            object.autoExplainLogMinDuration !== undefined &&
            object.autoExplainLogMinDuration !== null
                ? Number(object.autoExplainLogMinDuration)
                : undefined;
        message.autoExplainLogAnalyze =
            object.autoExplainLogAnalyze !== undefined && object.autoExplainLogAnalyze !== null
                ? Boolean(object.autoExplainLogAnalyze)
                : undefined;
        message.autoExplainLogBuffers =
            object.autoExplainLogBuffers !== undefined && object.autoExplainLogBuffers !== null
                ? Boolean(object.autoExplainLogBuffers)
                : undefined;
        message.autoExplainLogTiming =
            object.autoExplainLogTiming !== undefined && object.autoExplainLogTiming !== null
                ? Boolean(object.autoExplainLogTiming)
                : undefined;
        message.autoExplainLogTriggers =
            object.autoExplainLogTriggers !== undefined && object.autoExplainLogTriggers !== null
                ? Boolean(object.autoExplainLogTriggers)
                : undefined;
        message.autoExplainLogVerbose =
            object.autoExplainLogVerbose !== undefined && object.autoExplainLogVerbose !== null
                ? Boolean(object.autoExplainLogVerbose)
                : undefined;
        message.autoExplainLogNestedStatements =
            object.autoExplainLogNestedStatements !== undefined &&
            object.autoExplainLogNestedStatements !== null
                ? Boolean(object.autoExplainLogNestedStatements)
                : undefined;
        message.autoExplainSampleRate =
            object.autoExplainSampleRate !== undefined && object.autoExplainSampleRate !== null
                ? Number(object.autoExplainSampleRate)
                : undefined;
        message.pgHintPlanEnableHint =
            object.pgHintPlanEnableHint !== undefined && object.pgHintPlanEnableHint !== null
                ? Boolean(object.pgHintPlanEnableHint)
                : undefined;
        message.pgHintPlanEnableHintTable =
            object.pgHintPlanEnableHintTable !== undefined &&
            object.pgHintPlanEnableHintTable !== null
                ? Boolean(object.pgHintPlanEnableHintTable)
                : undefined;
        message.pgHintPlanDebugPrint =
            object.pgHintPlanDebugPrint !== undefined && object.pgHintPlanDebugPrint !== null
                ? postgresqlConfig13_PgHintPlanDebugPrintFromJSON(object.pgHintPlanDebugPrint)
                : 0;
        message.pgHintPlanMessageLevel =
            object.pgHintPlanMessageLevel !== undefined && object.pgHintPlanMessageLevel !== null
                ? postgresqlConfig13_LogLevelFromJSON(object.pgHintPlanMessageLevel)
                : 0;
        message.hashMemMultiplier =
            object.hashMemMultiplier !== undefined && object.hashMemMultiplier !== null
                ? Number(object.hashMemMultiplier)
                : undefined;
        message.logicalDecodingWorkMem =
            object.logicalDecodingWorkMem !== undefined && object.logicalDecodingWorkMem !== null
                ? Number(object.logicalDecodingWorkMem)
                : undefined;
        message.maintenanceIoConcurrency =
            object.maintenanceIoConcurrency !== undefined &&
            object.maintenanceIoConcurrency !== null
                ? Number(object.maintenanceIoConcurrency)
                : undefined;
        message.maxSlotWalKeepSize =
            object.maxSlotWalKeepSize !== undefined && object.maxSlotWalKeepSize !== null
                ? Number(object.maxSlotWalKeepSize)
                : undefined;
        message.walKeepSize =
            object.walKeepSize !== undefined && object.walKeepSize !== null
                ? Number(object.walKeepSize)
                : undefined;
        message.enableIncrementalSort =
            object.enableIncrementalSort !== undefined && object.enableIncrementalSort !== null
                ? Boolean(object.enableIncrementalSort)
                : undefined;
        message.autovacuumVacuumInsertThreshold =
            object.autovacuumVacuumInsertThreshold !== undefined &&
            object.autovacuumVacuumInsertThreshold !== null
                ? Number(object.autovacuumVacuumInsertThreshold)
                : undefined;
        message.autovacuumVacuumInsertScaleFactor =
            object.autovacuumVacuumInsertScaleFactor !== undefined &&
            object.autovacuumVacuumInsertScaleFactor !== null
                ? Number(object.autovacuumVacuumInsertScaleFactor)
                : undefined;
        message.logMinDurationSample =
            object.logMinDurationSample !== undefined && object.logMinDurationSample !== null
                ? Number(object.logMinDurationSample)
                : undefined;
        message.logStatementSampleRate =
            object.logStatementSampleRate !== undefined && object.logStatementSampleRate !== null
                ? Number(object.logStatementSampleRate)
                : undefined;
        message.logParameterMaxLength =
            object.logParameterMaxLength !== undefined && object.logParameterMaxLength !== null
                ? Number(object.logParameterMaxLength)
                : undefined;
        message.logParameterMaxLengthOnError =
            object.logParameterMaxLengthOnError !== undefined &&
            object.logParameterMaxLengthOnError !== null
                ? Number(object.logParameterMaxLengthOnError)
                : undefined;
        message.pgQualstatsEnabled =
            object.pgQualstatsEnabled !== undefined && object.pgQualstatsEnabled !== null
                ? Boolean(object.pgQualstatsEnabled)
                : undefined;
        message.pgQualstatsTrackConstants =
            object.pgQualstatsTrackConstants !== undefined &&
            object.pgQualstatsTrackConstants !== null
                ? Boolean(object.pgQualstatsTrackConstants)
                : undefined;
        message.pgQualstatsMax =
            object.pgQualstatsMax !== undefined && object.pgQualstatsMax !== null
                ? Number(object.pgQualstatsMax)
                : undefined;
        message.pgQualstatsResolveOids =
            object.pgQualstatsResolveOids !== undefined && object.pgQualstatsResolveOids !== null
                ? Boolean(object.pgQualstatsResolveOids)
                : undefined;
        message.pgQualstatsSampleRate =
            object.pgQualstatsSampleRate !== undefined && object.pgQualstatsSampleRate !== null
                ? Number(object.pgQualstatsSampleRate)
                : undefined;
        message.maxStackDepth =
            object.maxStackDepth !== undefined && object.maxStackDepth !== null
                ? Number(object.maxStackDepth)
                : undefined;
        message.geqo =
            object.geqo !== undefined && object.geqo !== null ? Boolean(object.geqo) : undefined;
        message.geqoThreshold =
            object.geqoThreshold !== undefined && object.geqoThreshold !== null
                ? Number(object.geqoThreshold)
                : undefined;
        message.geqoEffort =
            object.geqoEffort !== undefined && object.geqoEffort !== null
                ? Number(object.geqoEffort)
                : undefined;
        message.geqoPoolSize =
            object.geqoPoolSize !== undefined && object.geqoPoolSize !== null
                ? Number(object.geqoPoolSize)
                : undefined;
        message.geqoGenerations =
            object.geqoGenerations !== undefined && object.geqoGenerations !== null
                ? Number(object.geqoGenerations)
                : undefined;
        message.geqoSelectionBias =
            object.geqoSelectionBias !== undefined && object.geqoSelectionBias !== null
                ? Number(object.geqoSelectionBias)
                : undefined;
        message.geqoSeed =
            object.geqoSeed !== undefined && object.geqoSeed !== null
                ? Number(object.geqoSeed)
                : undefined;
        message.pgTrgmSimilarityThreshold =
            object.pgTrgmSimilarityThreshold !== undefined &&
            object.pgTrgmSimilarityThreshold !== null
                ? Number(object.pgTrgmSimilarityThreshold)
                : undefined;
        message.pgTrgmWordSimilarityThreshold =
            object.pgTrgmWordSimilarityThreshold !== undefined &&
            object.pgTrgmWordSimilarityThreshold !== null
                ? Number(object.pgTrgmWordSimilarityThreshold)
                : undefined;
        message.pgTrgmStrictWordSimilarityThreshold =
            object.pgTrgmStrictWordSimilarityThreshold !== undefined &&
            object.pgTrgmStrictWordSimilarityThreshold !== null
                ? Number(object.pgTrgmStrictWordSimilarityThreshold)
                : undefined;
        message.maxStandbyArchiveDelay =
            object.maxStandbyArchiveDelay !== undefined && object.maxStandbyArchiveDelay !== null
                ? Number(object.maxStandbyArchiveDelay)
                : undefined;
        message.sessionDurationTimeout =
            object.sessionDurationTimeout !== undefined && object.sessionDurationTimeout !== null
                ? Number(object.sessionDurationTimeout)
                : undefined;
        message.logReplicationCommands =
            object.logReplicationCommands !== undefined && object.logReplicationCommands !== null
                ? Boolean(object.logReplicationCommands)
                : undefined;
        message.logAutovacuumMinDuration =
            object.logAutovacuumMinDuration !== undefined &&
            object.logAutovacuumMinDuration !== null
                ? Number(object.logAutovacuumMinDuration)
                : undefined;
        message.passwordEncryption =
            object.passwordEncryption !== undefined && object.passwordEncryption !== null
                ? postgresqlConfig13_PasswordEncryptionFromJSON(object.passwordEncryption)
                : 0;
        return message;
    },

    toJSON(message: PostgresqlConfig13): unknown {
        const obj: any = {};
        message.maxConnections !== undefined && (obj.maxConnections = message.maxConnections);
        message.sharedBuffers !== undefined && (obj.sharedBuffers = message.sharedBuffers);
        message.tempBuffers !== undefined && (obj.tempBuffers = message.tempBuffers);
        message.maxPreparedTransactions !== undefined &&
            (obj.maxPreparedTransactions = message.maxPreparedTransactions);
        message.workMem !== undefined && (obj.workMem = message.workMem);
        message.maintenanceWorkMem !== undefined &&
            (obj.maintenanceWorkMem = message.maintenanceWorkMem);
        message.autovacuumWorkMem !== undefined &&
            (obj.autovacuumWorkMem = message.autovacuumWorkMem);
        message.tempFileLimit !== undefined && (obj.tempFileLimit = message.tempFileLimit);
        message.vacuumCostDelay !== undefined && (obj.vacuumCostDelay = message.vacuumCostDelay);
        message.vacuumCostPageHit !== undefined &&
            (obj.vacuumCostPageHit = message.vacuumCostPageHit);
        message.vacuumCostPageMiss !== undefined &&
            (obj.vacuumCostPageMiss = message.vacuumCostPageMiss);
        message.vacuumCostPageDirty !== undefined &&
            (obj.vacuumCostPageDirty = message.vacuumCostPageDirty);
        message.vacuumCostLimit !== undefined && (obj.vacuumCostLimit = message.vacuumCostLimit);
        message.bgwriterDelay !== undefined && (obj.bgwriterDelay = message.bgwriterDelay);
        message.bgwriterLruMaxpages !== undefined &&
            (obj.bgwriterLruMaxpages = message.bgwriterLruMaxpages);
        message.bgwriterLruMultiplier !== undefined &&
            (obj.bgwriterLruMultiplier = message.bgwriterLruMultiplier);
        message.bgwriterFlushAfter !== undefined &&
            (obj.bgwriterFlushAfter = message.bgwriterFlushAfter);
        message.backendFlushAfter !== undefined &&
            (obj.backendFlushAfter = message.backendFlushAfter);
        message.oldSnapshotThreshold !== undefined &&
            (obj.oldSnapshotThreshold = message.oldSnapshotThreshold);
        message.walLevel !== undefined &&
            (obj.walLevel = postgresqlConfig13_WalLevelToJSON(message.walLevel));
        message.synchronousCommit !== undefined &&
            (obj.synchronousCommit = postgresqlConfig13_SynchronousCommitToJSON(
                message.synchronousCommit,
            ));
        message.checkpointTimeout !== undefined &&
            (obj.checkpointTimeout = message.checkpointTimeout);
        message.checkpointCompletionTarget !== undefined &&
            (obj.checkpointCompletionTarget = message.checkpointCompletionTarget);
        message.checkpointFlushAfter !== undefined &&
            (obj.checkpointFlushAfter = message.checkpointFlushAfter);
        message.maxWalSize !== undefined && (obj.maxWalSize = message.maxWalSize);
        message.minWalSize !== undefined && (obj.minWalSize = message.minWalSize);
        message.maxStandbyStreamingDelay !== undefined &&
            (obj.maxStandbyStreamingDelay = message.maxStandbyStreamingDelay);
        message.defaultStatisticsTarget !== undefined &&
            (obj.defaultStatisticsTarget = message.defaultStatisticsTarget);
        message.constraintExclusion !== undefined &&
            (obj.constraintExclusion = postgresqlConfig13_ConstraintExclusionToJSON(
                message.constraintExclusion,
            ));
        message.cursorTupleFraction !== undefined &&
            (obj.cursorTupleFraction = message.cursorTupleFraction);
        message.fromCollapseLimit !== undefined &&
            (obj.fromCollapseLimit = message.fromCollapseLimit);
        message.joinCollapseLimit !== undefined &&
            (obj.joinCollapseLimit = message.joinCollapseLimit);
        message.forceParallelMode !== undefined &&
            (obj.forceParallelMode = postgresqlConfig13_ForceParallelModeToJSON(
                message.forceParallelMode,
            ));
        message.clientMinMessages !== undefined &&
            (obj.clientMinMessages = postgresqlConfig13_LogLevelToJSON(message.clientMinMessages));
        message.logMinMessages !== undefined &&
            (obj.logMinMessages = postgresqlConfig13_LogLevelToJSON(message.logMinMessages));
        message.logMinErrorStatement !== undefined &&
            (obj.logMinErrorStatement = postgresqlConfig13_LogLevelToJSON(
                message.logMinErrorStatement,
            ));
        message.logMinDurationStatement !== undefined &&
            (obj.logMinDurationStatement = message.logMinDurationStatement);
        message.logCheckpoints !== undefined && (obj.logCheckpoints = message.logCheckpoints);
        message.logConnections !== undefined && (obj.logConnections = message.logConnections);
        message.logDisconnections !== undefined &&
            (obj.logDisconnections = message.logDisconnections);
        message.logDuration !== undefined && (obj.logDuration = message.logDuration);
        message.logErrorVerbosity !== undefined &&
            (obj.logErrorVerbosity = postgresqlConfig13_LogErrorVerbosityToJSON(
                message.logErrorVerbosity,
            ));
        message.logLockWaits !== undefined && (obj.logLockWaits = message.logLockWaits);
        message.logStatement !== undefined &&
            (obj.logStatement = postgresqlConfig13_LogStatementToJSON(message.logStatement));
        message.logTempFiles !== undefined && (obj.logTempFiles = message.logTempFiles);
        message.searchPath !== undefined && (obj.searchPath = message.searchPath);
        message.rowSecurity !== undefined && (obj.rowSecurity = message.rowSecurity);
        message.defaultTransactionIsolation !== undefined &&
            (obj.defaultTransactionIsolation = postgresqlConfig13_TransactionIsolationToJSON(
                message.defaultTransactionIsolation,
            ));
        message.statementTimeout !== undefined && (obj.statementTimeout = message.statementTimeout);
        message.lockTimeout !== undefined && (obj.lockTimeout = message.lockTimeout);
        message.idleInTransactionSessionTimeout !== undefined &&
            (obj.idleInTransactionSessionTimeout = message.idleInTransactionSessionTimeout);
        message.byteaOutput !== undefined &&
            (obj.byteaOutput = postgresqlConfig13_ByteaOutputToJSON(message.byteaOutput));
        message.xmlbinary !== undefined &&
            (obj.xmlbinary = postgresqlConfig13_XmlBinaryToJSON(message.xmlbinary));
        message.xmloption !== undefined &&
            (obj.xmloption = postgresqlConfig13_XmlOptionToJSON(message.xmloption));
        message.ginPendingListLimit !== undefined &&
            (obj.ginPendingListLimit = message.ginPendingListLimit);
        message.deadlockTimeout !== undefined && (obj.deadlockTimeout = message.deadlockTimeout);
        message.maxLocksPerTransaction !== undefined &&
            (obj.maxLocksPerTransaction = message.maxLocksPerTransaction);
        message.maxPredLocksPerTransaction !== undefined &&
            (obj.maxPredLocksPerTransaction = message.maxPredLocksPerTransaction);
        message.arrayNulls !== undefined && (obj.arrayNulls = message.arrayNulls);
        message.backslashQuote !== undefined &&
            (obj.backslashQuote = postgresqlConfig13_BackslashQuoteToJSON(message.backslashQuote));
        message.defaultWithOids !== undefined && (obj.defaultWithOids = message.defaultWithOids);
        message.escapeStringWarning !== undefined &&
            (obj.escapeStringWarning = message.escapeStringWarning);
        message.loCompatPrivileges !== undefined &&
            (obj.loCompatPrivileges = message.loCompatPrivileges);
        message.operatorPrecedenceWarning !== undefined &&
            (obj.operatorPrecedenceWarning = message.operatorPrecedenceWarning);
        message.quoteAllIdentifiers !== undefined &&
            (obj.quoteAllIdentifiers = message.quoteAllIdentifiers);
        message.standardConformingStrings !== undefined &&
            (obj.standardConformingStrings = message.standardConformingStrings);
        message.synchronizeSeqscans !== undefined &&
            (obj.synchronizeSeqscans = message.synchronizeSeqscans);
        message.transformNullEquals !== undefined &&
            (obj.transformNullEquals = message.transformNullEquals);
        message.exitOnError !== undefined && (obj.exitOnError = message.exitOnError);
        message.seqPageCost !== undefined && (obj.seqPageCost = message.seqPageCost);
        message.randomPageCost !== undefined && (obj.randomPageCost = message.randomPageCost);
        message.autovacuumMaxWorkers !== undefined &&
            (obj.autovacuumMaxWorkers = message.autovacuumMaxWorkers);
        message.autovacuumVacuumCostDelay !== undefined &&
            (obj.autovacuumVacuumCostDelay = message.autovacuumVacuumCostDelay);
        message.autovacuumVacuumCostLimit !== undefined &&
            (obj.autovacuumVacuumCostLimit = message.autovacuumVacuumCostLimit);
        message.autovacuumNaptime !== undefined &&
            (obj.autovacuumNaptime = message.autovacuumNaptime);
        message.archiveTimeout !== undefined && (obj.archiveTimeout = message.archiveTimeout);
        message.trackActivityQuerySize !== undefined &&
            (obj.trackActivityQuerySize = message.trackActivityQuerySize);
        message.enableBitmapscan !== undefined && (obj.enableBitmapscan = message.enableBitmapscan);
        message.enableHashagg !== undefined && (obj.enableHashagg = message.enableHashagg);
        message.enableHashjoin !== undefined && (obj.enableHashjoin = message.enableHashjoin);
        message.enableIndexscan !== undefined && (obj.enableIndexscan = message.enableIndexscan);
        message.enableIndexonlyscan !== undefined &&
            (obj.enableIndexonlyscan = message.enableIndexonlyscan);
        message.enableMaterial !== undefined && (obj.enableMaterial = message.enableMaterial);
        message.enableMergejoin !== undefined && (obj.enableMergejoin = message.enableMergejoin);
        message.enableNestloop !== undefined && (obj.enableNestloop = message.enableNestloop);
        message.enableSeqscan !== undefined && (obj.enableSeqscan = message.enableSeqscan);
        message.enableSort !== undefined && (obj.enableSort = message.enableSort);
        message.enableTidscan !== undefined && (obj.enableTidscan = message.enableTidscan);
        message.maxWorkerProcesses !== undefined &&
            (obj.maxWorkerProcesses = message.maxWorkerProcesses);
        message.maxParallelWorkers !== undefined &&
            (obj.maxParallelWorkers = message.maxParallelWorkers);
        message.maxParallelWorkersPerGather !== undefined &&
            (obj.maxParallelWorkersPerGather = message.maxParallelWorkersPerGather);
        message.autovacuumVacuumScaleFactor !== undefined &&
            (obj.autovacuumVacuumScaleFactor = message.autovacuumVacuumScaleFactor);
        message.autovacuumAnalyzeScaleFactor !== undefined &&
            (obj.autovacuumAnalyzeScaleFactor = message.autovacuumAnalyzeScaleFactor);
        message.defaultTransactionReadOnly !== undefined &&
            (obj.defaultTransactionReadOnly = message.defaultTransactionReadOnly);
        message.timezone !== undefined && (obj.timezone = message.timezone);
        message.enableParallelAppend !== undefined &&
            (obj.enableParallelAppend = message.enableParallelAppend);
        message.enableParallelHash !== undefined &&
            (obj.enableParallelHash = message.enableParallelHash);
        message.enablePartitionPruning !== undefined &&
            (obj.enablePartitionPruning = message.enablePartitionPruning);
        message.enablePartitionwiseAggregate !== undefined &&
            (obj.enablePartitionwiseAggregate = message.enablePartitionwiseAggregate);
        message.enablePartitionwiseJoin !== undefined &&
            (obj.enablePartitionwiseJoin = message.enablePartitionwiseJoin);
        message.jit !== undefined && (obj.jit = message.jit);
        message.maxParallelMaintenanceWorkers !== undefined &&
            (obj.maxParallelMaintenanceWorkers = message.maxParallelMaintenanceWorkers);
        message.parallelLeaderParticipation !== undefined &&
            (obj.parallelLeaderParticipation = message.parallelLeaderParticipation);
        message.vacuumCleanupIndexScaleFactor !== undefined &&
            (obj.vacuumCleanupIndexScaleFactor = message.vacuumCleanupIndexScaleFactor);
        message.logTransactionSampleRate !== undefined &&
            (obj.logTransactionSampleRate = message.logTransactionSampleRate);
        message.planCacheMode !== undefined &&
            (obj.planCacheMode = postgresqlConfig13_PlanCacheModeToJSON(message.planCacheMode));
        message.effectiveIoConcurrency !== undefined &&
            (obj.effectiveIoConcurrency = message.effectiveIoConcurrency);
        message.effectiveCacheSize !== undefined &&
            (obj.effectiveCacheSize = message.effectiveCacheSize);
        if (message.sharedPreloadLibraries) {
            obj.sharedPreloadLibraries = message.sharedPreloadLibraries.map((e) =>
                postgresqlConfig13_SharedPreloadLibrariesToJSON(e),
            );
        } else {
            obj.sharedPreloadLibraries = [];
        }
        message.autoExplainLogMinDuration !== undefined &&
            (obj.autoExplainLogMinDuration = message.autoExplainLogMinDuration);
        message.autoExplainLogAnalyze !== undefined &&
            (obj.autoExplainLogAnalyze = message.autoExplainLogAnalyze);
        message.autoExplainLogBuffers !== undefined &&
            (obj.autoExplainLogBuffers = message.autoExplainLogBuffers);
        message.autoExplainLogTiming !== undefined &&
            (obj.autoExplainLogTiming = message.autoExplainLogTiming);
        message.autoExplainLogTriggers !== undefined &&
            (obj.autoExplainLogTriggers = message.autoExplainLogTriggers);
        message.autoExplainLogVerbose !== undefined &&
            (obj.autoExplainLogVerbose = message.autoExplainLogVerbose);
        message.autoExplainLogNestedStatements !== undefined &&
            (obj.autoExplainLogNestedStatements = message.autoExplainLogNestedStatements);
        message.autoExplainSampleRate !== undefined &&
            (obj.autoExplainSampleRate = message.autoExplainSampleRate);
        message.pgHintPlanEnableHint !== undefined &&
            (obj.pgHintPlanEnableHint = message.pgHintPlanEnableHint);
        message.pgHintPlanEnableHintTable !== undefined &&
            (obj.pgHintPlanEnableHintTable = message.pgHintPlanEnableHintTable);
        message.pgHintPlanDebugPrint !== undefined &&
            (obj.pgHintPlanDebugPrint = postgresqlConfig13_PgHintPlanDebugPrintToJSON(
                message.pgHintPlanDebugPrint,
            ));
        message.pgHintPlanMessageLevel !== undefined &&
            (obj.pgHintPlanMessageLevel = postgresqlConfig13_LogLevelToJSON(
                message.pgHintPlanMessageLevel,
            ));
        message.hashMemMultiplier !== undefined &&
            (obj.hashMemMultiplier = message.hashMemMultiplier);
        message.logicalDecodingWorkMem !== undefined &&
            (obj.logicalDecodingWorkMem = message.logicalDecodingWorkMem);
        message.maintenanceIoConcurrency !== undefined &&
            (obj.maintenanceIoConcurrency = message.maintenanceIoConcurrency);
        message.maxSlotWalKeepSize !== undefined &&
            (obj.maxSlotWalKeepSize = message.maxSlotWalKeepSize);
        message.walKeepSize !== undefined && (obj.walKeepSize = message.walKeepSize);
        message.enableIncrementalSort !== undefined &&
            (obj.enableIncrementalSort = message.enableIncrementalSort);
        message.autovacuumVacuumInsertThreshold !== undefined &&
            (obj.autovacuumVacuumInsertThreshold = message.autovacuumVacuumInsertThreshold);
        message.autovacuumVacuumInsertScaleFactor !== undefined &&
            (obj.autovacuumVacuumInsertScaleFactor = message.autovacuumVacuumInsertScaleFactor);
        message.logMinDurationSample !== undefined &&
            (obj.logMinDurationSample = message.logMinDurationSample);
        message.logStatementSampleRate !== undefined &&
            (obj.logStatementSampleRate = message.logStatementSampleRate);
        message.logParameterMaxLength !== undefined &&
            (obj.logParameterMaxLength = message.logParameterMaxLength);
        message.logParameterMaxLengthOnError !== undefined &&
            (obj.logParameterMaxLengthOnError = message.logParameterMaxLengthOnError);
        message.pgQualstatsEnabled !== undefined &&
            (obj.pgQualstatsEnabled = message.pgQualstatsEnabled);
        message.pgQualstatsTrackConstants !== undefined &&
            (obj.pgQualstatsTrackConstants = message.pgQualstatsTrackConstants);
        message.pgQualstatsMax !== undefined && (obj.pgQualstatsMax = message.pgQualstatsMax);
        message.pgQualstatsResolveOids !== undefined &&
            (obj.pgQualstatsResolveOids = message.pgQualstatsResolveOids);
        message.pgQualstatsSampleRate !== undefined &&
            (obj.pgQualstatsSampleRate = message.pgQualstatsSampleRate);
        message.maxStackDepth !== undefined && (obj.maxStackDepth = message.maxStackDepth);
        message.geqo !== undefined && (obj.geqo = message.geqo);
        message.geqoThreshold !== undefined && (obj.geqoThreshold = message.geqoThreshold);
        message.geqoEffort !== undefined && (obj.geqoEffort = message.geqoEffort);
        message.geqoPoolSize !== undefined && (obj.geqoPoolSize = message.geqoPoolSize);
        message.geqoGenerations !== undefined && (obj.geqoGenerations = message.geqoGenerations);
        message.geqoSelectionBias !== undefined &&
            (obj.geqoSelectionBias = message.geqoSelectionBias);
        message.geqoSeed !== undefined && (obj.geqoSeed = message.geqoSeed);
        message.pgTrgmSimilarityThreshold !== undefined &&
            (obj.pgTrgmSimilarityThreshold = message.pgTrgmSimilarityThreshold);
        message.pgTrgmWordSimilarityThreshold !== undefined &&
            (obj.pgTrgmWordSimilarityThreshold = message.pgTrgmWordSimilarityThreshold);
        message.pgTrgmStrictWordSimilarityThreshold !== undefined &&
            (obj.pgTrgmStrictWordSimilarityThreshold = message.pgTrgmStrictWordSimilarityThreshold);
        message.maxStandbyArchiveDelay !== undefined &&
            (obj.maxStandbyArchiveDelay = message.maxStandbyArchiveDelay);
        message.sessionDurationTimeout !== undefined &&
            (obj.sessionDurationTimeout = message.sessionDurationTimeout);
        message.logReplicationCommands !== undefined &&
            (obj.logReplicationCommands = message.logReplicationCommands);
        message.logAutovacuumMinDuration !== undefined &&
            (obj.logAutovacuumMinDuration = message.logAutovacuumMinDuration);
        message.passwordEncryption !== undefined &&
            (obj.passwordEncryption = postgresqlConfig13_PasswordEncryptionToJSON(
                message.passwordEncryption,
            ));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PostgresqlConfig13>, I>>(
        object: I,
    ): PostgresqlConfig13 {
        const message = { ...basePostgresqlConfig13 } as PostgresqlConfig13;
        message.maxConnections = object.maxConnections ?? undefined;
        message.sharedBuffers = object.sharedBuffers ?? undefined;
        message.tempBuffers = object.tempBuffers ?? undefined;
        message.maxPreparedTransactions = object.maxPreparedTransactions ?? undefined;
        message.workMem = object.workMem ?? undefined;
        message.maintenanceWorkMem = object.maintenanceWorkMem ?? undefined;
        message.autovacuumWorkMem = object.autovacuumWorkMem ?? undefined;
        message.tempFileLimit = object.tempFileLimit ?? undefined;
        message.vacuumCostDelay = object.vacuumCostDelay ?? undefined;
        message.vacuumCostPageHit = object.vacuumCostPageHit ?? undefined;
        message.vacuumCostPageMiss = object.vacuumCostPageMiss ?? undefined;
        message.vacuumCostPageDirty = object.vacuumCostPageDirty ?? undefined;
        message.vacuumCostLimit = object.vacuumCostLimit ?? undefined;
        message.bgwriterDelay = object.bgwriterDelay ?? undefined;
        message.bgwriterLruMaxpages = object.bgwriterLruMaxpages ?? undefined;
        message.bgwriterLruMultiplier = object.bgwriterLruMultiplier ?? undefined;
        message.bgwriterFlushAfter = object.bgwriterFlushAfter ?? undefined;
        message.backendFlushAfter = object.backendFlushAfter ?? undefined;
        message.oldSnapshotThreshold = object.oldSnapshotThreshold ?? undefined;
        message.walLevel = object.walLevel ?? 0;
        message.synchronousCommit = object.synchronousCommit ?? 0;
        message.checkpointTimeout = object.checkpointTimeout ?? undefined;
        message.checkpointCompletionTarget = object.checkpointCompletionTarget ?? undefined;
        message.checkpointFlushAfter = object.checkpointFlushAfter ?? undefined;
        message.maxWalSize = object.maxWalSize ?? undefined;
        message.minWalSize = object.minWalSize ?? undefined;
        message.maxStandbyStreamingDelay = object.maxStandbyStreamingDelay ?? undefined;
        message.defaultStatisticsTarget = object.defaultStatisticsTarget ?? undefined;
        message.constraintExclusion = object.constraintExclusion ?? 0;
        message.cursorTupleFraction = object.cursorTupleFraction ?? undefined;
        message.fromCollapseLimit = object.fromCollapseLimit ?? undefined;
        message.joinCollapseLimit = object.joinCollapseLimit ?? undefined;
        message.forceParallelMode = object.forceParallelMode ?? 0;
        message.clientMinMessages = object.clientMinMessages ?? 0;
        message.logMinMessages = object.logMinMessages ?? 0;
        message.logMinErrorStatement = object.logMinErrorStatement ?? 0;
        message.logMinDurationStatement = object.logMinDurationStatement ?? undefined;
        message.logCheckpoints = object.logCheckpoints ?? undefined;
        message.logConnections = object.logConnections ?? undefined;
        message.logDisconnections = object.logDisconnections ?? undefined;
        message.logDuration = object.logDuration ?? undefined;
        message.logErrorVerbosity = object.logErrorVerbosity ?? 0;
        message.logLockWaits = object.logLockWaits ?? undefined;
        message.logStatement = object.logStatement ?? 0;
        message.logTempFiles = object.logTempFiles ?? undefined;
        message.searchPath = object.searchPath ?? '';
        message.rowSecurity = object.rowSecurity ?? undefined;
        message.defaultTransactionIsolation = object.defaultTransactionIsolation ?? 0;
        message.statementTimeout = object.statementTimeout ?? undefined;
        message.lockTimeout = object.lockTimeout ?? undefined;
        message.idleInTransactionSessionTimeout =
            object.idleInTransactionSessionTimeout ?? undefined;
        message.byteaOutput = object.byteaOutput ?? 0;
        message.xmlbinary = object.xmlbinary ?? 0;
        message.xmloption = object.xmloption ?? 0;
        message.ginPendingListLimit = object.ginPendingListLimit ?? undefined;
        message.deadlockTimeout = object.deadlockTimeout ?? undefined;
        message.maxLocksPerTransaction = object.maxLocksPerTransaction ?? undefined;
        message.maxPredLocksPerTransaction = object.maxPredLocksPerTransaction ?? undefined;
        message.arrayNulls = object.arrayNulls ?? undefined;
        message.backslashQuote = object.backslashQuote ?? 0;
        message.defaultWithOids = object.defaultWithOids ?? undefined;
        message.escapeStringWarning = object.escapeStringWarning ?? undefined;
        message.loCompatPrivileges = object.loCompatPrivileges ?? undefined;
        message.operatorPrecedenceWarning = object.operatorPrecedenceWarning ?? undefined;
        message.quoteAllIdentifiers = object.quoteAllIdentifiers ?? undefined;
        message.standardConformingStrings = object.standardConformingStrings ?? undefined;
        message.synchronizeSeqscans = object.synchronizeSeqscans ?? undefined;
        message.transformNullEquals = object.transformNullEquals ?? undefined;
        message.exitOnError = object.exitOnError ?? undefined;
        message.seqPageCost = object.seqPageCost ?? undefined;
        message.randomPageCost = object.randomPageCost ?? undefined;
        message.autovacuumMaxWorkers = object.autovacuumMaxWorkers ?? undefined;
        message.autovacuumVacuumCostDelay = object.autovacuumVacuumCostDelay ?? undefined;
        message.autovacuumVacuumCostLimit = object.autovacuumVacuumCostLimit ?? undefined;
        message.autovacuumNaptime = object.autovacuumNaptime ?? undefined;
        message.archiveTimeout = object.archiveTimeout ?? undefined;
        message.trackActivityQuerySize = object.trackActivityQuerySize ?? undefined;
        message.enableBitmapscan = object.enableBitmapscan ?? undefined;
        message.enableHashagg = object.enableHashagg ?? undefined;
        message.enableHashjoin = object.enableHashjoin ?? undefined;
        message.enableIndexscan = object.enableIndexscan ?? undefined;
        message.enableIndexonlyscan = object.enableIndexonlyscan ?? undefined;
        message.enableMaterial = object.enableMaterial ?? undefined;
        message.enableMergejoin = object.enableMergejoin ?? undefined;
        message.enableNestloop = object.enableNestloop ?? undefined;
        message.enableSeqscan = object.enableSeqscan ?? undefined;
        message.enableSort = object.enableSort ?? undefined;
        message.enableTidscan = object.enableTidscan ?? undefined;
        message.maxWorkerProcesses = object.maxWorkerProcesses ?? undefined;
        message.maxParallelWorkers = object.maxParallelWorkers ?? undefined;
        message.maxParallelWorkersPerGather = object.maxParallelWorkersPerGather ?? undefined;
        message.autovacuumVacuumScaleFactor = object.autovacuumVacuumScaleFactor ?? undefined;
        message.autovacuumAnalyzeScaleFactor = object.autovacuumAnalyzeScaleFactor ?? undefined;
        message.defaultTransactionReadOnly = object.defaultTransactionReadOnly ?? undefined;
        message.timezone = object.timezone ?? '';
        message.enableParallelAppend = object.enableParallelAppend ?? undefined;
        message.enableParallelHash = object.enableParallelHash ?? undefined;
        message.enablePartitionPruning = object.enablePartitionPruning ?? undefined;
        message.enablePartitionwiseAggregate = object.enablePartitionwiseAggregate ?? undefined;
        message.enablePartitionwiseJoin = object.enablePartitionwiseJoin ?? undefined;
        message.jit = object.jit ?? undefined;
        message.maxParallelMaintenanceWorkers = object.maxParallelMaintenanceWorkers ?? undefined;
        message.parallelLeaderParticipation = object.parallelLeaderParticipation ?? undefined;
        message.vacuumCleanupIndexScaleFactor = object.vacuumCleanupIndexScaleFactor ?? undefined;
        message.logTransactionSampleRate = object.logTransactionSampleRate ?? undefined;
        message.planCacheMode = object.planCacheMode ?? 0;
        message.effectiveIoConcurrency = object.effectiveIoConcurrency ?? undefined;
        message.effectiveCacheSize = object.effectiveCacheSize ?? undefined;
        message.sharedPreloadLibraries = object.sharedPreloadLibraries?.map((e) => e) || [];
        message.autoExplainLogMinDuration = object.autoExplainLogMinDuration ?? undefined;
        message.autoExplainLogAnalyze = object.autoExplainLogAnalyze ?? undefined;
        message.autoExplainLogBuffers = object.autoExplainLogBuffers ?? undefined;
        message.autoExplainLogTiming = object.autoExplainLogTiming ?? undefined;
        message.autoExplainLogTriggers = object.autoExplainLogTriggers ?? undefined;
        message.autoExplainLogVerbose = object.autoExplainLogVerbose ?? undefined;
        message.autoExplainLogNestedStatements = object.autoExplainLogNestedStatements ?? undefined;
        message.autoExplainSampleRate = object.autoExplainSampleRate ?? undefined;
        message.pgHintPlanEnableHint = object.pgHintPlanEnableHint ?? undefined;
        message.pgHintPlanEnableHintTable = object.pgHintPlanEnableHintTable ?? undefined;
        message.pgHintPlanDebugPrint = object.pgHintPlanDebugPrint ?? 0;
        message.pgHintPlanMessageLevel = object.pgHintPlanMessageLevel ?? 0;
        message.hashMemMultiplier = object.hashMemMultiplier ?? undefined;
        message.logicalDecodingWorkMem = object.logicalDecodingWorkMem ?? undefined;
        message.maintenanceIoConcurrency = object.maintenanceIoConcurrency ?? undefined;
        message.maxSlotWalKeepSize = object.maxSlotWalKeepSize ?? undefined;
        message.walKeepSize = object.walKeepSize ?? undefined;
        message.enableIncrementalSort = object.enableIncrementalSort ?? undefined;
        message.autovacuumVacuumInsertThreshold =
            object.autovacuumVacuumInsertThreshold ?? undefined;
        message.autovacuumVacuumInsertScaleFactor =
            object.autovacuumVacuumInsertScaleFactor ?? undefined;
        message.logMinDurationSample = object.logMinDurationSample ?? undefined;
        message.logStatementSampleRate = object.logStatementSampleRate ?? undefined;
        message.logParameterMaxLength = object.logParameterMaxLength ?? undefined;
        message.logParameterMaxLengthOnError = object.logParameterMaxLengthOnError ?? undefined;
        message.pgQualstatsEnabled = object.pgQualstatsEnabled ?? undefined;
        message.pgQualstatsTrackConstants = object.pgQualstatsTrackConstants ?? undefined;
        message.pgQualstatsMax = object.pgQualstatsMax ?? undefined;
        message.pgQualstatsResolveOids = object.pgQualstatsResolveOids ?? undefined;
        message.pgQualstatsSampleRate = object.pgQualstatsSampleRate ?? undefined;
        message.maxStackDepth = object.maxStackDepth ?? undefined;
        message.geqo = object.geqo ?? undefined;
        message.geqoThreshold = object.geqoThreshold ?? undefined;
        message.geqoEffort = object.geqoEffort ?? undefined;
        message.geqoPoolSize = object.geqoPoolSize ?? undefined;
        message.geqoGenerations = object.geqoGenerations ?? undefined;
        message.geqoSelectionBias = object.geqoSelectionBias ?? undefined;
        message.geqoSeed = object.geqoSeed ?? undefined;
        message.pgTrgmSimilarityThreshold = object.pgTrgmSimilarityThreshold ?? undefined;
        message.pgTrgmWordSimilarityThreshold = object.pgTrgmWordSimilarityThreshold ?? undefined;
        message.pgTrgmStrictWordSimilarityThreshold =
            object.pgTrgmStrictWordSimilarityThreshold ?? undefined;
        message.maxStandbyArchiveDelay = object.maxStandbyArchiveDelay ?? undefined;
        message.sessionDurationTimeout = object.sessionDurationTimeout ?? undefined;
        message.logReplicationCommands = object.logReplicationCommands ?? undefined;
        message.logAutovacuumMinDuration = object.logAutovacuumMinDuration ?? undefined;
        message.passwordEncryption = object.passwordEncryption ?? 0;
        return message;
    },
};

const basePostgresqlConfigSet13: object = {};

export const PostgresqlConfigSet13 = {
    encode(message: PostgresqlConfigSet13, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            PostgresqlConfig13.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            PostgresqlConfig13.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            PostgresqlConfig13.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PostgresqlConfigSet13 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePostgresqlConfigSet13 } as PostgresqlConfigSet13;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = PostgresqlConfig13.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = PostgresqlConfig13.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = PostgresqlConfig13.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PostgresqlConfigSet13 {
        const message = { ...basePostgresqlConfigSet13 } as PostgresqlConfigSet13;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? PostgresqlConfig13.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? PostgresqlConfig13.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? PostgresqlConfig13.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },

    toJSON(message: PostgresqlConfigSet13): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? PostgresqlConfig13.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? PostgresqlConfig13.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? PostgresqlConfig13.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PostgresqlConfigSet13>, I>>(
        object: I,
    ): PostgresqlConfigSet13 {
        const message = { ...basePostgresqlConfigSet13 } as PostgresqlConfigSet13;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? PostgresqlConfig13.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? PostgresqlConfig13.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? PostgresqlConfig13.fromPartial(object.defaultConfig)
                : undefined;
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
