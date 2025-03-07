/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Int64Value, DoubleValue, BoolValue } from '../../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.mdb.postgresql.v1.config';

/**
 * Options and structure of `PostgresqlConfig` reflects PostgreSQL configuration file
 * parameters whose detailed description is available in
 * [PostgreSQL documentation](https://www.postgresql.org/docs/9.6/static/runtime-config).
 */
export interface Postgresqlconfig96 {
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
    replacementSortTuples?: number;
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
    walLevel: Postgresqlconfig96_WalLevel;
    synchronousCommit: Postgresqlconfig96_SynchronousCommit;
    /** in milliseconds. */
    checkpointTimeout?: number;
    /** Acceptable values are 0.0 to 1.0, inclusive. */
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
    constraintExclusion: Postgresqlconfig96_ConstraintExclusion;
    cursorTupleFraction?: number;
    fromCollapseLimit?: number;
    joinCollapseLimit?: number;
    forceParallelMode: Postgresqlconfig96_ForceParallelMode;
    clientMinMessages: Postgresqlconfig96_LogLevel;
    logMinMessages: Postgresqlconfig96_LogLevel;
    logMinErrorStatement: Postgresqlconfig96_LogLevel;
    /** in milliseconds. */
    logMinDurationStatement?: number;
    logCheckpoints?: boolean;
    logConnections?: boolean;
    logDisconnections?: boolean;
    logDuration?: boolean;
    logErrorVerbosity: Postgresqlconfig96_LogErrorVerbosity;
    logLockWaits?: boolean;
    logStatement: Postgresqlconfig96_LogStatement;
    logTempFiles?: number;
    searchPath: string;
    rowSecurity?: boolean;
    defaultTransactionIsolation: Postgresqlconfig96_TransactionIsolation;
    /** in milliseconds. */
    statementTimeout?: number;
    /** in milliseconds. */
    lockTimeout?: number;
    /** in milliseconds. */
    idleInTransactionSessionTimeout?: number;
    byteaOutput: Postgresqlconfig96_ByteaOutput;
    xmlbinary: Postgresqlconfig96_XmlBinary;
    xmloption: Postgresqlconfig96_XmlOption;
    /** in bytes. */
    ginPendingListLimit?: number;
    /** in milliseconds. */
    deadlockTimeout?: number;
    maxLocksPerTransaction?: number;
    maxPredLocksPerTransaction?: number;
    arrayNulls?: boolean;
    backslashQuote: Postgresqlconfig96_BackslashQuote;
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
    /** This option has been removed in PostgreSQL 10. */
    sqlInheritance?: boolean;
    autovacuumMaxWorkers?: number;
    autovacuumVacuumCostDelay?: number;
    autovacuumVacuumCostLimit?: number;
    /** in milliseconds. */
    autovacuumNaptime?: number;
    /** in milliseconds. */
    archiveTimeout?: number;
    trackActivityQuerySize?: number;
    effectiveIoConcurrency?: number;
    effectiveCacheSize?: number;
}

export enum Postgresqlconfig96_WalLevel {
    WAL_LEVEL_UNSPECIFIED = 0,
    WAL_LEVEL_REPLICA = 1,
    WAL_LEVEL_LOGICAL = 2,
    UNRECOGNIZED = -1,
}

export function postgresqlconfig96_WalLevelFromJSON(object: any): Postgresqlconfig96_WalLevel {
    switch (object) {
        case 0:
        case 'WAL_LEVEL_UNSPECIFIED':
            return Postgresqlconfig96_WalLevel.WAL_LEVEL_UNSPECIFIED;
        case 1:
        case 'WAL_LEVEL_REPLICA':
            return Postgresqlconfig96_WalLevel.WAL_LEVEL_REPLICA;
        case 2:
        case 'WAL_LEVEL_LOGICAL':
            return Postgresqlconfig96_WalLevel.WAL_LEVEL_LOGICAL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig96_WalLevel.UNRECOGNIZED;
    }
}

export function postgresqlconfig96_WalLevelToJSON(object: Postgresqlconfig96_WalLevel): string {
    switch (object) {
        case Postgresqlconfig96_WalLevel.WAL_LEVEL_UNSPECIFIED:
            return 'WAL_LEVEL_UNSPECIFIED';
        case Postgresqlconfig96_WalLevel.WAL_LEVEL_REPLICA:
            return 'WAL_LEVEL_REPLICA';
        case Postgresqlconfig96_WalLevel.WAL_LEVEL_LOGICAL:
            return 'WAL_LEVEL_LOGICAL';
        default:
            return 'UNKNOWN';
    }
}

export enum Postgresqlconfig96_SynchronousCommit {
    SYNCHRONOUS_COMMIT_UNSPECIFIED = 0,
    SYNCHRONOUS_COMMIT_ON = 1,
    SYNCHRONOUS_COMMIT_OFF = 2,
    SYNCHRONOUS_COMMIT_LOCAL = 3,
    SYNCHRONOUS_COMMIT_REMOTE_WRITE = 4,
    SYNCHRONOUS_COMMIT_REMOTE_APPLY = 5,
    UNRECOGNIZED = -1,
}

export function postgresqlconfig96_SynchronousCommitFromJSON(
    object: any,
): Postgresqlconfig96_SynchronousCommit {
    switch (object) {
        case 0:
        case 'SYNCHRONOUS_COMMIT_UNSPECIFIED':
            return Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_UNSPECIFIED;
        case 1:
        case 'SYNCHRONOUS_COMMIT_ON':
            return Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_ON;
        case 2:
        case 'SYNCHRONOUS_COMMIT_OFF':
            return Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_OFF;
        case 3:
        case 'SYNCHRONOUS_COMMIT_LOCAL':
            return Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_LOCAL;
        case 4:
        case 'SYNCHRONOUS_COMMIT_REMOTE_WRITE':
            return Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_WRITE;
        case 5:
        case 'SYNCHRONOUS_COMMIT_REMOTE_APPLY':
            return Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_APPLY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig96_SynchronousCommit.UNRECOGNIZED;
    }
}

export function postgresqlconfig96_SynchronousCommitToJSON(
    object: Postgresqlconfig96_SynchronousCommit,
): string {
    switch (object) {
        case Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_UNSPECIFIED:
            return 'SYNCHRONOUS_COMMIT_UNSPECIFIED';
        case Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_ON:
            return 'SYNCHRONOUS_COMMIT_ON';
        case Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_OFF:
            return 'SYNCHRONOUS_COMMIT_OFF';
        case Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_LOCAL:
            return 'SYNCHRONOUS_COMMIT_LOCAL';
        case Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_WRITE:
            return 'SYNCHRONOUS_COMMIT_REMOTE_WRITE';
        case Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_APPLY:
            return 'SYNCHRONOUS_COMMIT_REMOTE_APPLY';
        default:
            return 'UNKNOWN';
    }
}

export enum Postgresqlconfig96_ConstraintExclusion {
    CONSTRAINT_EXCLUSION_UNSPECIFIED = 0,
    CONSTRAINT_EXCLUSION_ON = 1,
    CONSTRAINT_EXCLUSION_OFF = 2,
    CONSTRAINT_EXCLUSION_PARTITION = 3,
    UNRECOGNIZED = -1,
}

export function postgresqlconfig96_ConstraintExclusionFromJSON(
    object: any,
): Postgresqlconfig96_ConstraintExclusion {
    switch (object) {
        case 0:
        case 'CONSTRAINT_EXCLUSION_UNSPECIFIED':
            return Postgresqlconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED;
        case 1:
        case 'CONSTRAINT_EXCLUSION_ON':
            return Postgresqlconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON;
        case 2:
        case 'CONSTRAINT_EXCLUSION_OFF':
            return Postgresqlconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF;
        case 3:
        case 'CONSTRAINT_EXCLUSION_PARTITION':
            return Postgresqlconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig96_ConstraintExclusion.UNRECOGNIZED;
    }
}

export function postgresqlconfig96_ConstraintExclusionToJSON(
    object: Postgresqlconfig96_ConstraintExclusion,
): string {
    switch (object) {
        case Postgresqlconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED:
            return 'CONSTRAINT_EXCLUSION_UNSPECIFIED';
        case Postgresqlconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON:
            return 'CONSTRAINT_EXCLUSION_ON';
        case Postgresqlconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF:
            return 'CONSTRAINT_EXCLUSION_OFF';
        case Postgresqlconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION:
            return 'CONSTRAINT_EXCLUSION_PARTITION';
        default:
            return 'UNKNOWN';
    }
}

export enum Postgresqlconfig96_ForceParallelMode {
    FORCE_PARALLEL_MODE_UNSPECIFIED = 0,
    FORCE_PARALLEL_MODE_ON = 1,
    FORCE_PARALLEL_MODE_OFF = 2,
    FORCE_PARALLEL_MODE_REGRESS = 3,
    UNRECOGNIZED = -1,
}

export function postgresqlconfig96_ForceParallelModeFromJSON(
    object: any,
): Postgresqlconfig96_ForceParallelMode {
    switch (object) {
        case 0:
        case 'FORCE_PARALLEL_MODE_UNSPECIFIED':
            return Postgresqlconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED;
        case 1:
        case 'FORCE_PARALLEL_MODE_ON':
            return Postgresqlconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_ON;
        case 2:
        case 'FORCE_PARALLEL_MODE_OFF':
            return Postgresqlconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_OFF;
        case 3:
        case 'FORCE_PARALLEL_MODE_REGRESS':
            return Postgresqlconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig96_ForceParallelMode.UNRECOGNIZED;
    }
}

export function postgresqlconfig96_ForceParallelModeToJSON(
    object: Postgresqlconfig96_ForceParallelMode,
): string {
    switch (object) {
        case Postgresqlconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED:
            return 'FORCE_PARALLEL_MODE_UNSPECIFIED';
        case Postgresqlconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_ON:
            return 'FORCE_PARALLEL_MODE_ON';
        case Postgresqlconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_OFF:
            return 'FORCE_PARALLEL_MODE_OFF';
        case Postgresqlconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS:
            return 'FORCE_PARALLEL_MODE_REGRESS';
        default:
            return 'UNKNOWN';
    }
}

export enum Postgresqlconfig96_LogLevel {
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

export function postgresqlconfig96_LogLevelFromJSON(object: any): Postgresqlconfig96_LogLevel {
    switch (object) {
        case 0:
        case 'LOG_LEVEL_UNSPECIFIED':
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_UNSPECIFIED;
        case 1:
        case 'LOG_LEVEL_DEBUG5':
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG5;
        case 2:
        case 'LOG_LEVEL_DEBUG4':
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG4;
        case 3:
        case 'LOG_LEVEL_DEBUG3':
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG3;
        case 4:
        case 'LOG_LEVEL_DEBUG2':
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG2;
        case 5:
        case 'LOG_LEVEL_DEBUG1':
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG1;
        case 6:
        case 'LOG_LEVEL_LOG':
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_LOG;
        case 7:
        case 'LOG_LEVEL_NOTICE':
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_NOTICE;
        case 8:
        case 'LOG_LEVEL_WARNING':
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_WARNING;
        case 9:
        case 'LOG_LEVEL_ERROR':
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_ERROR;
        case 10:
        case 'LOG_LEVEL_FATAL':
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_FATAL;
        case 11:
        case 'LOG_LEVEL_PANIC':
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_PANIC;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig96_LogLevel.UNRECOGNIZED;
    }
}

export function postgresqlconfig96_LogLevelToJSON(object: Postgresqlconfig96_LogLevel): string {
    switch (object) {
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_UNSPECIFIED:
            return 'LOG_LEVEL_UNSPECIFIED';
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG5:
            return 'LOG_LEVEL_DEBUG5';
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG4:
            return 'LOG_LEVEL_DEBUG4';
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG3:
            return 'LOG_LEVEL_DEBUG3';
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG2:
            return 'LOG_LEVEL_DEBUG2';
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG1:
            return 'LOG_LEVEL_DEBUG1';
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_LOG:
            return 'LOG_LEVEL_LOG';
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_NOTICE:
            return 'LOG_LEVEL_NOTICE';
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_WARNING:
            return 'LOG_LEVEL_WARNING';
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_ERROR:
            return 'LOG_LEVEL_ERROR';
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_FATAL:
            return 'LOG_LEVEL_FATAL';
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_PANIC:
            return 'LOG_LEVEL_PANIC';
        default:
            return 'UNKNOWN';
    }
}

export enum Postgresqlconfig96_LogErrorVerbosity {
    LOG_ERROR_VERBOSITY_UNSPECIFIED = 0,
    LOG_ERROR_VERBOSITY_TERSE = 1,
    LOG_ERROR_VERBOSITY_DEFAULT = 2,
    LOG_ERROR_VERBOSITY_VERBOSE = 3,
    UNRECOGNIZED = -1,
}

export function postgresqlconfig96_LogErrorVerbosityFromJSON(
    object: any,
): Postgresqlconfig96_LogErrorVerbosity {
    switch (object) {
        case 0:
        case 'LOG_ERROR_VERBOSITY_UNSPECIFIED':
            return Postgresqlconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED;
        case 1:
        case 'LOG_ERROR_VERBOSITY_TERSE':
            return Postgresqlconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE;
        case 2:
        case 'LOG_ERROR_VERBOSITY_DEFAULT':
            return Postgresqlconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT;
        case 3:
        case 'LOG_ERROR_VERBOSITY_VERBOSE':
            return Postgresqlconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig96_LogErrorVerbosity.UNRECOGNIZED;
    }
}

export function postgresqlconfig96_LogErrorVerbosityToJSON(
    object: Postgresqlconfig96_LogErrorVerbosity,
): string {
    switch (object) {
        case Postgresqlconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED:
            return 'LOG_ERROR_VERBOSITY_UNSPECIFIED';
        case Postgresqlconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE:
            return 'LOG_ERROR_VERBOSITY_TERSE';
        case Postgresqlconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT:
            return 'LOG_ERROR_VERBOSITY_DEFAULT';
        case Postgresqlconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE:
            return 'LOG_ERROR_VERBOSITY_VERBOSE';
        default:
            return 'UNKNOWN';
    }
}

export enum Postgresqlconfig96_LogStatement {
    LOG_STATEMENT_UNSPECIFIED = 0,
    LOG_STATEMENT_NONE = 1,
    LOG_STATEMENT_DDL = 2,
    LOG_STATEMENT_MOD = 3,
    LOG_STATEMENT_ALL = 4,
    UNRECOGNIZED = -1,
}

export function postgresqlconfig96_LogStatementFromJSON(
    object: any,
): Postgresqlconfig96_LogStatement {
    switch (object) {
        case 0:
        case 'LOG_STATEMENT_UNSPECIFIED':
            return Postgresqlconfig96_LogStatement.LOG_STATEMENT_UNSPECIFIED;
        case 1:
        case 'LOG_STATEMENT_NONE':
            return Postgresqlconfig96_LogStatement.LOG_STATEMENT_NONE;
        case 2:
        case 'LOG_STATEMENT_DDL':
            return Postgresqlconfig96_LogStatement.LOG_STATEMENT_DDL;
        case 3:
        case 'LOG_STATEMENT_MOD':
            return Postgresqlconfig96_LogStatement.LOG_STATEMENT_MOD;
        case 4:
        case 'LOG_STATEMENT_ALL':
            return Postgresqlconfig96_LogStatement.LOG_STATEMENT_ALL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig96_LogStatement.UNRECOGNIZED;
    }
}

export function postgresqlconfig96_LogStatementToJSON(
    object: Postgresqlconfig96_LogStatement,
): string {
    switch (object) {
        case Postgresqlconfig96_LogStatement.LOG_STATEMENT_UNSPECIFIED:
            return 'LOG_STATEMENT_UNSPECIFIED';
        case Postgresqlconfig96_LogStatement.LOG_STATEMENT_NONE:
            return 'LOG_STATEMENT_NONE';
        case Postgresqlconfig96_LogStatement.LOG_STATEMENT_DDL:
            return 'LOG_STATEMENT_DDL';
        case Postgresqlconfig96_LogStatement.LOG_STATEMENT_MOD:
            return 'LOG_STATEMENT_MOD';
        case Postgresqlconfig96_LogStatement.LOG_STATEMENT_ALL:
            return 'LOG_STATEMENT_ALL';
        default:
            return 'UNKNOWN';
    }
}

export enum Postgresqlconfig96_TransactionIsolation {
    TRANSACTION_ISOLATION_UNSPECIFIED = 0,
    TRANSACTION_ISOLATION_READ_UNCOMMITTED = 1,
    TRANSACTION_ISOLATION_READ_COMMITTED = 2,
    TRANSACTION_ISOLATION_REPEATABLE_READ = 3,
    TRANSACTION_ISOLATION_SERIALIZABLE = 4,
    UNRECOGNIZED = -1,
}

export function postgresqlconfig96_TransactionIsolationFromJSON(
    object: any,
): Postgresqlconfig96_TransactionIsolation {
    switch (object) {
        case 0:
        case 'TRANSACTION_ISOLATION_UNSPECIFIED':
            return Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED;
        case 1:
        case 'TRANSACTION_ISOLATION_READ_UNCOMMITTED':
            return Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED;
        case 2:
        case 'TRANSACTION_ISOLATION_READ_COMMITTED':
            return Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED;
        case 3:
        case 'TRANSACTION_ISOLATION_REPEATABLE_READ':
            return Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ;
        case 4:
        case 'TRANSACTION_ISOLATION_SERIALIZABLE':
            return Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig96_TransactionIsolation.UNRECOGNIZED;
    }
}

export function postgresqlconfig96_TransactionIsolationToJSON(
    object: Postgresqlconfig96_TransactionIsolation,
): string {
    switch (object) {
        case Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED:
            return 'TRANSACTION_ISOLATION_UNSPECIFIED';
        case Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED:
            return 'TRANSACTION_ISOLATION_READ_UNCOMMITTED';
        case Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED:
            return 'TRANSACTION_ISOLATION_READ_COMMITTED';
        case Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ:
            return 'TRANSACTION_ISOLATION_REPEATABLE_READ';
        case Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE:
            return 'TRANSACTION_ISOLATION_SERIALIZABLE';
        default:
            return 'UNKNOWN';
    }
}

export enum Postgresqlconfig96_ByteaOutput {
    BYTEA_OUTPUT_UNSPECIFIED = 0,
    BYTEA_OUTPUT_HEX = 1,
    BYTEA_OUTPUT_ESCAPED = 2,
    UNRECOGNIZED = -1,
}

export function postgresqlconfig96_ByteaOutputFromJSON(
    object: any,
): Postgresqlconfig96_ByteaOutput {
    switch (object) {
        case 0:
        case 'BYTEA_OUTPUT_UNSPECIFIED':
            return Postgresqlconfig96_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED;
        case 1:
        case 'BYTEA_OUTPUT_HEX':
            return Postgresqlconfig96_ByteaOutput.BYTEA_OUTPUT_HEX;
        case 2:
        case 'BYTEA_OUTPUT_ESCAPED':
            return Postgresqlconfig96_ByteaOutput.BYTEA_OUTPUT_ESCAPED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig96_ByteaOutput.UNRECOGNIZED;
    }
}

export function postgresqlconfig96_ByteaOutputToJSON(
    object: Postgresqlconfig96_ByteaOutput,
): string {
    switch (object) {
        case Postgresqlconfig96_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED:
            return 'BYTEA_OUTPUT_UNSPECIFIED';
        case Postgresqlconfig96_ByteaOutput.BYTEA_OUTPUT_HEX:
            return 'BYTEA_OUTPUT_HEX';
        case Postgresqlconfig96_ByteaOutput.BYTEA_OUTPUT_ESCAPED:
            return 'BYTEA_OUTPUT_ESCAPED';
        default:
            return 'UNKNOWN';
    }
}

export enum Postgresqlconfig96_XmlBinary {
    XML_BINARY_UNSPECIFIED = 0,
    XML_BINARY_BASE64 = 1,
    XML_BINARY_HEX = 2,
    UNRECOGNIZED = -1,
}

export function postgresqlconfig96_XmlBinaryFromJSON(object: any): Postgresqlconfig96_XmlBinary {
    switch (object) {
        case 0:
        case 'XML_BINARY_UNSPECIFIED':
            return Postgresqlconfig96_XmlBinary.XML_BINARY_UNSPECIFIED;
        case 1:
        case 'XML_BINARY_BASE64':
            return Postgresqlconfig96_XmlBinary.XML_BINARY_BASE64;
        case 2:
        case 'XML_BINARY_HEX':
            return Postgresqlconfig96_XmlBinary.XML_BINARY_HEX;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig96_XmlBinary.UNRECOGNIZED;
    }
}

export function postgresqlconfig96_XmlBinaryToJSON(object: Postgresqlconfig96_XmlBinary): string {
    switch (object) {
        case Postgresqlconfig96_XmlBinary.XML_BINARY_UNSPECIFIED:
            return 'XML_BINARY_UNSPECIFIED';
        case Postgresqlconfig96_XmlBinary.XML_BINARY_BASE64:
            return 'XML_BINARY_BASE64';
        case Postgresqlconfig96_XmlBinary.XML_BINARY_HEX:
            return 'XML_BINARY_HEX';
        default:
            return 'UNKNOWN';
    }
}

export enum Postgresqlconfig96_XmlOption {
    XML_OPTION_UNSPECIFIED = 0,
    XML_OPTION_DOCUMENT = 1,
    XML_OPTION_CONTENT = 2,
    UNRECOGNIZED = -1,
}

export function postgresqlconfig96_XmlOptionFromJSON(object: any): Postgresqlconfig96_XmlOption {
    switch (object) {
        case 0:
        case 'XML_OPTION_UNSPECIFIED':
            return Postgresqlconfig96_XmlOption.XML_OPTION_UNSPECIFIED;
        case 1:
        case 'XML_OPTION_DOCUMENT':
            return Postgresqlconfig96_XmlOption.XML_OPTION_DOCUMENT;
        case 2:
        case 'XML_OPTION_CONTENT':
            return Postgresqlconfig96_XmlOption.XML_OPTION_CONTENT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig96_XmlOption.UNRECOGNIZED;
    }
}

export function postgresqlconfig96_XmlOptionToJSON(object: Postgresqlconfig96_XmlOption): string {
    switch (object) {
        case Postgresqlconfig96_XmlOption.XML_OPTION_UNSPECIFIED:
            return 'XML_OPTION_UNSPECIFIED';
        case Postgresqlconfig96_XmlOption.XML_OPTION_DOCUMENT:
            return 'XML_OPTION_DOCUMENT';
        case Postgresqlconfig96_XmlOption.XML_OPTION_CONTENT:
            return 'XML_OPTION_CONTENT';
        default:
            return 'UNKNOWN';
    }
}

export enum Postgresqlconfig96_BackslashQuote {
    BACKSLASH_QUOTE_UNSPECIFIED = 0,
    BACKSLASH_QUOTE = 1,
    BACKSLASH_QUOTE_ON = 2,
    BACKSLASH_QUOTE_OFF = 3,
    BACKSLASH_QUOTE_SAFE_ENCODING = 4,
    UNRECOGNIZED = -1,
}

export function postgresqlconfig96_BackslashQuoteFromJSON(
    object: any,
): Postgresqlconfig96_BackslashQuote {
    switch (object) {
        case 0:
        case 'BACKSLASH_QUOTE_UNSPECIFIED':
            return Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED;
        case 1:
        case 'BACKSLASH_QUOTE':
            return Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE;
        case 2:
        case 'BACKSLASH_QUOTE_ON':
            return Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE_ON;
        case 3:
        case 'BACKSLASH_QUOTE_OFF':
            return Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE_OFF;
        case 4:
        case 'BACKSLASH_QUOTE_SAFE_ENCODING':
            return Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig96_BackslashQuote.UNRECOGNIZED;
    }
}

export function postgresqlconfig96_BackslashQuoteToJSON(
    object: Postgresqlconfig96_BackslashQuote,
): string {
    switch (object) {
        case Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED:
            return 'BACKSLASH_QUOTE_UNSPECIFIED';
        case Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE:
            return 'BACKSLASH_QUOTE';
        case Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE_ON:
            return 'BACKSLASH_QUOTE_ON';
        case Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE_OFF:
            return 'BACKSLASH_QUOTE_OFF';
        case Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING:
            return 'BACKSLASH_QUOTE_SAFE_ENCODING';
        default:
            return 'UNKNOWN';
    }
}

export interface Postgresqlconfigset96 {
    /**
     * Effective settings for a PostgreSQL 9.6 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Postgresqlconfig96;
    /** User-defined settings for a PostgreSQL 9.6 cluster. */
    userConfig?: Postgresqlconfig96;
    /** Default configuration for a PostgreSQL 9.6 cluster. */
    defaultConfig?: Postgresqlconfig96;
}

const basePostgresqlconfig96: object = {
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
};

export const Postgresqlconfig96 = {
    encode(message: Postgresqlconfig96, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
        if (message.replacementSortTuples !== undefined) {
            Int64Value.encode(
                { value: message.replacementSortTuples! },
                writer.uint32(58).fork(),
            ).ldelim();
        }
        if (message.autovacuumWorkMem !== undefined) {
            Int64Value.encode(
                { value: message.autovacuumWorkMem! },
                writer.uint32(66).fork(),
            ).ldelim();
        }
        if (message.tempFileLimit !== undefined) {
            Int64Value.encode({ value: message.tempFileLimit! }, writer.uint32(74).fork()).ldelim();
        }
        if (message.vacuumCostDelay !== undefined) {
            Int64Value.encode(
                { value: message.vacuumCostDelay! },
                writer.uint32(82).fork(),
            ).ldelim();
        }
        if (message.vacuumCostPageHit !== undefined) {
            Int64Value.encode(
                { value: message.vacuumCostPageHit! },
                writer.uint32(90).fork(),
            ).ldelim();
        }
        if (message.vacuumCostPageMiss !== undefined) {
            Int64Value.encode(
                { value: message.vacuumCostPageMiss! },
                writer.uint32(98).fork(),
            ).ldelim();
        }
        if (message.vacuumCostPageDirty !== undefined) {
            Int64Value.encode(
                { value: message.vacuumCostPageDirty! },
                writer.uint32(106).fork(),
            ).ldelim();
        }
        if (message.vacuumCostLimit !== undefined) {
            Int64Value.encode(
                { value: message.vacuumCostLimit! },
                writer.uint32(114).fork(),
            ).ldelim();
        }
        if (message.bgwriterDelay !== undefined) {
            Int64Value.encode(
                { value: message.bgwriterDelay! },
                writer.uint32(122).fork(),
            ).ldelim();
        }
        if (message.bgwriterLruMaxpages !== undefined) {
            Int64Value.encode(
                { value: message.bgwriterLruMaxpages! },
                writer.uint32(130).fork(),
            ).ldelim();
        }
        if (message.bgwriterLruMultiplier !== undefined) {
            DoubleValue.encode(
                { value: message.bgwriterLruMultiplier! },
                writer.uint32(138).fork(),
            ).ldelim();
        }
        if (message.bgwriterFlushAfter !== undefined) {
            Int64Value.encode(
                { value: message.bgwriterFlushAfter! },
                writer.uint32(146).fork(),
            ).ldelim();
        }
        if (message.backendFlushAfter !== undefined) {
            Int64Value.encode(
                { value: message.backendFlushAfter! },
                writer.uint32(154).fork(),
            ).ldelim();
        }
        if (message.oldSnapshotThreshold !== undefined) {
            Int64Value.encode(
                { value: message.oldSnapshotThreshold! },
                writer.uint32(162).fork(),
            ).ldelim();
        }
        if (message.walLevel !== 0) {
            writer.uint32(168).int32(message.walLevel);
        }
        if (message.synchronousCommit !== 0) {
            writer.uint32(176).int32(message.synchronousCommit);
        }
        if (message.checkpointTimeout !== undefined) {
            Int64Value.encode(
                { value: message.checkpointTimeout! },
                writer.uint32(186).fork(),
            ).ldelim();
        }
        if (message.checkpointCompletionTarget !== undefined) {
            DoubleValue.encode(
                { value: message.checkpointCompletionTarget! },
                writer.uint32(194).fork(),
            ).ldelim();
        }
        if (message.checkpointFlushAfter !== undefined) {
            Int64Value.encode(
                { value: message.checkpointFlushAfter! },
                writer.uint32(202).fork(),
            ).ldelim();
        }
        if (message.maxWalSize !== undefined) {
            Int64Value.encode({ value: message.maxWalSize! }, writer.uint32(210).fork()).ldelim();
        }
        if (message.minWalSize !== undefined) {
            Int64Value.encode({ value: message.minWalSize! }, writer.uint32(218).fork()).ldelim();
        }
        if (message.maxStandbyStreamingDelay !== undefined) {
            Int64Value.encode(
                { value: message.maxStandbyStreamingDelay! },
                writer.uint32(226).fork(),
            ).ldelim();
        }
        if (message.defaultStatisticsTarget !== undefined) {
            Int64Value.encode(
                { value: message.defaultStatisticsTarget! },
                writer.uint32(234).fork(),
            ).ldelim();
        }
        if (message.constraintExclusion !== 0) {
            writer.uint32(240).int32(message.constraintExclusion);
        }
        if (message.cursorTupleFraction !== undefined) {
            DoubleValue.encode(
                { value: message.cursorTupleFraction! },
                writer.uint32(250).fork(),
            ).ldelim();
        }
        if (message.fromCollapseLimit !== undefined) {
            Int64Value.encode(
                { value: message.fromCollapseLimit! },
                writer.uint32(258).fork(),
            ).ldelim();
        }
        if (message.joinCollapseLimit !== undefined) {
            Int64Value.encode(
                { value: message.joinCollapseLimit! },
                writer.uint32(266).fork(),
            ).ldelim();
        }
        if (message.forceParallelMode !== 0) {
            writer.uint32(272).int32(message.forceParallelMode);
        }
        if (message.clientMinMessages !== 0) {
            writer.uint32(280).int32(message.clientMinMessages);
        }
        if (message.logMinMessages !== 0) {
            writer.uint32(288).int32(message.logMinMessages);
        }
        if (message.logMinErrorStatement !== 0) {
            writer.uint32(296).int32(message.logMinErrorStatement);
        }
        if (message.logMinDurationStatement !== undefined) {
            Int64Value.encode(
                { value: message.logMinDurationStatement! },
                writer.uint32(306).fork(),
            ).ldelim();
        }
        if (message.logCheckpoints !== undefined) {
            BoolValue.encode(
                { value: message.logCheckpoints! },
                writer.uint32(314).fork(),
            ).ldelim();
        }
        if (message.logConnections !== undefined) {
            BoolValue.encode(
                { value: message.logConnections! },
                writer.uint32(322).fork(),
            ).ldelim();
        }
        if (message.logDisconnections !== undefined) {
            BoolValue.encode(
                { value: message.logDisconnections! },
                writer.uint32(330).fork(),
            ).ldelim();
        }
        if (message.logDuration !== undefined) {
            BoolValue.encode({ value: message.logDuration! }, writer.uint32(338).fork()).ldelim();
        }
        if (message.logErrorVerbosity !== 0) {
            writer.uint32(344).int32(message.logErrorVerbosity);
        }
        if (message.logLockWaits !== undefined) {
            BoolValue.encode({ value: message.logLockWaits! }, writer.uint32(354).fork()).ldelim();
        }
        if (message.logStatement !== 0) {
            writer.uint32(360).int32(message.logStatement);
        }
        if (message.logTempFiles !== undefined) {
            Int64Value.encode({ value: message.logTempFiles! }, writer.uint32(370).fork()).ldelim();
        }
        if (message.searchPath !== '') {
            writer.uint32(378).string(message.searchPath);
        }
        if (message.rowSecurity !== undefined) {
            BoolValue.encode({ value: message.rowSecurity! }, writer.uint32(386).fork()).ldelim();
        }
        if (message.defaultTransactionIsolation !== 0) {
            writer.uint32(392).int32(message.defaultTransactionIsolation);
        }
        if (message.statementTimeout !== undefined) {
            Int64Value.encode(
                { value: message.statementTimeout! },
                writer.uint32(402).fork(),
            ).ldelim();
        }
        if (message.lockTimeout !== undefined) {
            Int64Value.encode({ value: message.lockTimeout! }, writer.uint32(410).fork()).ldelim();
        }
        if (message.idleInTransactionSessionTimeout !== undefined) {
            Int64Value.encode(
                { value: message.idleInTransactionSessionTimeout! },
                writer.uint32(418).fork(),
            ).ldelim();
        }
        if (message.byteaOutput !== 0) {
            writer.uint32(424).int32(message.byteaOutput);
        }
        if (message.xmlbinary !== 0) {
            writer.uint32(432).int32(message.xmlbinary);
        }
        if (message.xmloption !== 0) {
            writer.uint32(440).int32(message.xmloption);
        }
        if (message.ginPendingListLimit !== undefined) {
            Int64Value.encode(
                { value: message.ginPendingListLimit! },
                writer.uint32(450).fork(),
            ).ldelim();
        }
        if (message.deadlockTimeout !== undefined) {
            Int64Value.encode(
                { value: message.deadlockTimeout! },
                writer.uint32(458).fork(),
            ).ldelim();
        }
        if (message.maxLocksPerTransaction !== undefined) {
            Int64Value.encode(
                { value: message.maxLocksPerTransaction! },
                writer.uint32(466).fork(),
            ).ldelim();
        }
        if (message.maxPredLocksPerTransaction !== undefined) {
            Int64Value.encode(
                { value: message.maxPredLocksPerTransaction! },
                writer.uint32(474).fork(),
            ).ldelim();
        }
        if (message.arrayNulls !== undefined) {
            BoolValue.encode({ value: message.arrayNulls! }, writer.uint32(482).fork()).ldelim();
        }
        if (message.backslashQuote !== 0) {
            writer.uint32(488).int32(message.backslashQuote);
        }
        if (message.defaultWithOids !== undefined) {
            BoolValue.encode(
                { value: message.defaultWithOids! },
                writer.uint32(498).fork(),
            ).ldelim();
        }
        if (message.escapeStringWarning !== undefined) {
            BoolValue.encode(
                { value: message.escapeStringWarning! },
                writer.uint32(506).fork(),
            ).ldelim();
        }
        if (message.loCompatPrivileges !== undefined) {
            BoolValue.encode(
                { value: message.loCompatPrivileges! },
                writer.uint32(514).fork(),
            ).ldelim();
        }
        if (message.operatorPrecedenceWarning !== undefined) {
            BoolValue.encode(
                { value: message.operatorPrecedenceWarning! },
                writer.uint32(522).fork(),
            ).ldelim();
        }
        if (message.quoteAllIdentifiers !== undefined) {
            BoolValue.encode(
                { value: message.quoteAllIdentifiers! },
                writer.uint32(530).fork(),
            ).ldelim();
        }
        if (message.standardConformingStrings !== undefined) {
            BoolValue.encode(
                { value: message.standardConformingStrings! },
                writer.uint32(538).fork(),
            ).ldelim();
        }
        if (message.synchronizeSeqscans !== undefined) {
            BoolValue.encode(
                { value: message.synchronizeSeqscans! },
                writer.uint32(546).fork(),
            ).ldelim();
        }
        if (message.transformNullEquals !== undefined) {
            BoolValue.encode(
                { value: message.transformNullEquals! },
                writer.uint32(554).fork(),
            ).ldelim();
        }
        if (message.exitOnError !== undefined) {
            BoolValue.encode({ value: message.exitOnError! }, writer.uint32(562).fork()).ldelim();
        }
        if (message.seqPageCost !== undefined) {
            DoubleValue.encode({ value: message.seqPageCost! }, writer.uint32(570).fork()).ldelim();
        }
        if (message.randomPageCost !== undefined) {
            DoubleValue.encode(
                { value: message.randomPageCost! },
                writer.uint32(578).fork(),
            ).ldelim();
        }
        if (message.sqlInheritance !== undefined) {
            BoolValue.encode(
                { value: message.sqlInheritance! },
                writer.uint32(586).fork(),
            ).ldelim();
        }
        if (message.autovacuumMaxWorkers !== undefined) {
            Int64Value.encode(
                { value: message.autovacuumMaxWorkers! },
                writer.uint32(594).fork(),
            ).ldelim();
        }
        if (message.autovacuumVacuumCostDelay !== undefined) {
            Int64Value.encode(
                { value: message.autovacuumVacuumCostDelay! },
                writer.uint32(602).fork(),
            ).ldelim();
        }
        if (message.autovacuumVacuumCostLimit !== undefined) {
            Int64Value.encode(
                { value: message.autovacuumVacuumCostLimit! },
                writer.uint32(610).fork(),
            ).ldelim();
        }
        if (message.autovacuumNaptime !== undefined) {
            Int64Value.encode(
                { value: message.autovacuumNaptime! },
                writer.uint32(618).fork(),
            ).ldelim();
        }
        if (message.archiveTimeout !== undefined) {
            Int64Value.encode(
                { value: message.archiveTimeout! },
                writer.uint32(626).fork(),
            ).ldelim();
        }
        if (message.trackActivityQuerySize !== undefined) {
            Int64Value.encode(
                { value: message.trackActivityQuerySize! },
                writer.uint32(634).fork(),
            ).ldelim();
        }
        if (message.effectiveIoConcurrency !== undefined) {
            Int64Value.encode(
                { value: message.effectiveIoConcurrency! },
                writer.uint32(642).fork(),
            ).ldelim();
        }
        if (message.effectiveCacheSize !== undefined) {
            Int64Value.encode(
                { value: message.effectiveCacheSize! },
                writer.uint32(650).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Postgresqlconfig96 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePostgresqlconfig96 } as Postgresqlconfig96;
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
                    message.replacementSortTuples = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 8:
                    message.autovacuumWorkMem = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.tempFileLimit = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.vacuumCostDelay = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.vacuumCostPageHit = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.vacuumCostPageMiss = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.vacuumCostPageDirty = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 14:
                    message.vacuumCostLimit = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 15:
                    message.bgwriterDelay = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 16:
                    message.bgwriterLruMaxpages = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 17:
                    message.bgwriterLruMultiplier = DoubleValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 18:
                    message.bgwriterFlushAfter = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 19:
                    message.backendFlushAfter = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 20:
                    message.oldSnapshotThreshold = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 21:
                    message.walLevel = reader.int32() as any;
                    break;
                case 22:
                    message.synchronousCommit = reader.int32() as any;
                    break;
                case 23:
                    message.checkpointTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 24:
                    message.checkpointCompletionTarget = DoubleValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 25:
                    message.checkpointFlushAfter = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 26:
                    message.maxWalSize = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 27:
                    message.minWalSize = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 28:
                    message.maxStandbyStreamingDelay = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 29:
                    message.defaultStatisticsTarget = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 30:
                    message.constraintExclusion = reader.int32() as any;
                    break;
                case 31:
                    message.cursorTupleFraction = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 32:
                    message.fromCollapseLimit = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 33:
                    message.joinCollapseLimit = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 34:
                    message.forceParallelMode = reader.int32() as any;
                    break;
                case 35:
                    message.clientMinMessages = reader.int32() as any;
                    break;
                case 36:
                    message.logMinMessages = reader.int32() as any;
                    break;
                case 37:
                    message.logMinErrorStatement = reader.int32() as any;
                    break;
                case 38:
                    message.logMinDurationStatement = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 39:
                    message.logCheckpoints = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 40:
                    message.logConnections = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 41:
                    message.logDisconnections = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 42:
                    message.logDuration = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 43:
                    message.logErrorVerbosity = reader.int32() as any;
                    break;
                case 44:
                    message.logLockWaits = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 45:
                    message.logStatement = reader.int32() as any;
                    break;
                case 46:
                    message.logTempFiles = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 47:
                    message.searchPath = reader.string();
                    break;
                case 48:
                    message.rowSecurity = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 49:
                    message.defaultTransactionIsolation = reader.int32() as any;
                    break;
                case 50:
                    message.statementTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 51:
                    message.lockTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 52:
                    message.idleInTransactionSessionTimeout = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 53:
                    message.byteaOutput = reader.int32() as any;
                    break;
                case 54:
                    message.xmlbinary = reader.int32() as any;
                    break;
                case 55:
                    message.xmloption = reader.int32() as any;
                    break;
                case 56:
                    message.ginPendingListLimit = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 57:
                    message.deadlockTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 58:
                    message.maxLocksPerTransaction = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 59:
                    message.maxPredLocksPerTransaction = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 60:
                    message.arrayNulls = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 61:
                    message.backslashQuote = reader.int32() as any;
                    break;
                case 62:
                    message.defaultWithOids = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 63:
                    message.escapeStringWarning = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 64:
                    message.loCompatPrivileges = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 65:
                    message.operatorPrecedenceWarning = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 66:
                    message.quoteAllIdentifiers = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 67:
                    message.standardConformingStrings = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 68:
                    message.synchronizeSeqscans = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 69:
                    message.transformNullEquals = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 70:
                    message.exitOnError = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 71:
                    message.seqPageCost = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 72:
                    message.randomPageCost = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 73:
                    message.sqlInheritance = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 74:
                    message.autovacuumMaxWorkers = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 75:
                    message.autovacuumVacuumCostDelay = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 76:
                    message.autovacuumVacuumCostLimit = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 77:
                    message.autovacuumNaptime = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 78:
                    message.archiveTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 79:
                    message.trackActivityQuerySize = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 80:
                    message.effectiveIoConcurrency = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 81:
                    message.effectiveCacheSize = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Postgresqlconfig96 {
        const message = { ...basePostgresqlconfig96 } as Postgresqlconfig96;
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
        message.replacementSortTuples =
            object.replacementSortTuples !== undefined && object.replacementSortTuples !== null
                ? Number(object.replacementSortTuples)
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
                ? postgresqlconfig96_WalLevelFromJSON(object.walLevel)
                : 0;
        message.synchronousCommit =
            object.synchronousCommit !== undefined && object.synchronousCommit !== null
                ? postgresqlconfig96_SynchronousCommitFromJSON(object.synchronousCommit)
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
                ? postgresqlconfig96_ConstraintExclusionFromJSON(object.constraintExclusion)
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
                ? postgresqlconfig96_ForceParallelModeFromJSON(object.forceParallelMode)
                : 0;
        message.clientMinMessages =
            object.clientMinMessages !== undefined && object.clientMinMessages !== null
                ? postgresqlconfig96_LogLevelFromJSON(object.clientMinMessages)
                : 0;
        message.logMinMessages =
            object.logMinMessages !== undefined && object.logMinMessages !== null
                ? postgresqlconfig96_LogLevelFromJSON(object.logMinMessages)
                : 0;
        message.logMinErrorStatement =
            object.logMinErrorStatement !== undefined && object.logMinErrorStatement !== null
                ? postgresqlconfig96_LogLevelFromJSON(object.logMinErrorStatement)
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
                ? postgresqlconfig96_LogErrorVerbosityFromJSON(object.logErrorVerbosity)
                : 0;
        message.logLockWaits =
            object.logLockWaits !== undefined && object.logLockWaits !== null
                ? Boolean(object.logLockWaits)
                : undefined;
        message.logStatement =
            object.logStatement !== undefined && object.logStatement !== null
                ? postgresqlconfig96_LogStatementFromJSON(object.logStatement)
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
                ? postgresqlconfig96_TransactionIsolationFromJSON(
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
                ? postgresqlconfig96_ByteaOutputFromJSON(object.byteaOutput)
                : 0;
        message.xmlbinary =
            object.xmlbinary !== undefined && object.xmlbinary !== null
                ? postgresqlconfig96_XmlBinaryFromJSON(object.xmlbinary)
                : 0;
        message.xmloption =
            object.xmloption !== undefined && object.xmloption !== null
                ? postgresqlconfig96_XmlOptionFromJSON(object.xmloption)
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
                ? postgresqlconfig96_BackslashQuoteFromJSON(object.backslashQuote)
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
        message.sqlInheritance =
            object.sqlInheritance !== undefined && object.sqlInheritance !== null
                ? Boolean(object.sqlInheritance)
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
        message.effectiveIoConcurrency =
            object.effectiveIoConcurrency !== undefined && object.effectiveIoConcurrency !== null
                ? Number(object.effectiveIoConcurrency)
                : undefined;
        message.effectiveCacheSize =
            object.effectiveCacheSize !== undefined && object.effectiveCacheSize !== null
                ? Number(object.effectiveCacheSize)
                : undefined;
        return message;
    },

    toJSON(message: Postgresqlconfig96): unknown {
        const obj: any = {};
        message.maxConnections !== undefined && (obj.maxConnections = message.maxConnections);
        message.sharedBuffers !== undefined && (obj.sharedBuffers = message.sharedBuffers);
        message.tempBuffers !== undefined && (obj.tempBuffers = message.tempBuffers);
        message.maxPreparedTransactions !== undefined &&
            (obj.maxPreparedTransactions = message.maxPreparedTransactions);
        message.workMem !== undefined && (obj.workMem = message.workMem);
        message.maintenanceWorkMem !== undefined &&
            (obj.maintenanceWorkMem = message.maintenanceWorkMem);
        message.replacementSortTuples !== undefined &&
            (obj.replacementSortTuples = message.replacementSortTuples);
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
            (obj.walLevel = postgresqlconfig96_WalLevelToJSON(message.walLevel));
        message.synchronousCommit !== undefined &&
            (obj.synchronousCommit = postgresqlconfig96_SynchronousCommitToJSON(
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
            (obj.constraintExclusion = postgresqlconfig96_ConstraintExclusionToJSON(
                message.constraintExclusion,
            ));
        message.cursorTupleFraction !== undefined &&
            (obj.cursorTupleFraction = message.cursorTupleFraction);
        message.fromCollapseLimit !== undefined &&
            (obj.fromCollapseLimit = message.fromCollapseLimit);
        message.joinCollapseLimit !== undefined &&
            (obj.joinCollapseLimit = message.joinCollapseLimit);
        message.forceParallelMode !== undefined &&
            (obj.forceParallelMode = postgresqlconfig96_ForceParallelModeToJSON(
                message.forceParallelMode,
            ));
        message.clientMinMessages !== undefined &&
            (obj.clientMinMessages = postgresqlconfig96_LogLevelToJSON(message.clientMinMessages));
        message.logMinMessages !== undefined &&
            (obj.logMinMessages = postgresqlconfig96_LogLevelToJSON(message.logMinMessages));
        message.logMinErrorStatement !== undefined &&
            (obj.logMinErrorStatement = postgresqlconfig96_LogLevelToJSON(
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
            (obj.logErrorVerbosity = postgresqlconfig96_LogErrorVerbosityToJSON(
                message.logErrorVerbosity,
            ));
        message.logLockWaits !== undefined && (obj.logLockWaits = message.logLockWaits);
        message.logStatement !== undefined &&
            (obj.logStatement = postgresqlconfig96_LogStatementToJSON(message.logStatement));
        message.logTempFiles !== undefined && (obj.logTempFiles = message.logTempFiles);
        message.searchPath !== undefined && (obj.searchPath = message.searchPath);
        message.rowSecurity !== undefined && (obj.rowSecurity = message.rowSecurity);
        message.defaultTransactionIsolation !== undefined &&
            (obj.defaultTransactionIsolation = postgresqlconfig96_TransactionIsolationToJSON(
                message.defaultTransactionIsolation,
            ));
        message.statementTimeout !== undefined && (obj.statementTimeout = message.statementTimeout);
        message.lockTimeout !== undefined && (obj.lockTimeout = message.lockTimeout);
        message.idleInTransactionSessionTimeout !== undefined &&
            (obj.idleInTransactionSessionTimeout = message.idleInTransactionSessionTimeout);
        message.byteaOutput !== undefined &&
            (obj.byteaOutput = postgresqlconfig96_ByteaOutputToJSON(message.byteaOutput));
        message.xmlbinary !== undefined &&
            (obj.xmlbinary = postgresqlconfig96_XmlBinaryToJSON(message.xmlbinary));
        message.xmloption !== undefined &&
            (obj.xmloption = postgresqlconfig96_XmlOptionToJSON(message.xmloption));
        message.ginPendingListLimit !== undefined &&
            (obj.ginPendingListLimit = message.ginPendingListLimit);
        message.deadlockTimeout !== undefined && (obj.deadlockTimeout = message.deadlockTimeout);
        message.maxLocksPerTransaction !== undefined &&
            (obj.maxLocksPerTransaction = message.maxLocksPerTransaction);
        message.maxPredLocksPerTransaction !== undefined &&
            (obj.maxPredLocksPerTransaction = message.maxPredLocksPerTransaction);
        message.arrayNulls !== undefined && (obj.arrayNulls = message.arrayNulls);
        message.backslashQuote !== undefined &&
            (obj.backslashQuote = postgresqlconfig96_BackslashQuoteToJSON(message.backslashQuote));
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
        message.sqlInheritance !== undefined && (obj.sqlInheritance = message.sqlInheritance);
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
        message.effectiveIoConcurrency !== undefined &&
            (obj.effectiveIoConcurrency = message.effectiveIoConcurrency);
        message.effectiveCacheSize !== undefined &&
            (obj.effectiveCacheSize = message.effectiveCacheSize);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Postgresqlconfig96>, I>>(
        object: I,
    ): Postgresqlconfig96 {
        const message = { ...basePostgresqlconfig96 } as Postgresqlconfig96;
        message.maxConnections = object.maxConnections ?? undefined;
        message.sharedBuffers = object.sharedBuffers ?? undefined;
        message.tempBuffers = object.tempBuffers ?? undefined;
        message.maxPreparedTransactions = object.maxPreparedTransactions ?? undefined;
        message.workMem = object.workMem ?? undefined;
        message.maintenanceWorkMem = object.maintenanceWorkMem ?? undefined;
        message.replacementSortTuples = object.replacementSortTuples ?? undefined;
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
        message.sqlInheritance = object.sqlInheritance ?? undefined;
        message.autovacuumMaxWorkers = object.autovacuumMaxWorkers ?? undefined;
        message.autovacuumVacuumCostDelay = object.autovacuumVacuumCostDelay ?? undefined;
        message.autovacuumVacuumCostLimit = object.autovacuumVacuumCostLimit ?? undefined;
        message.autovacuumNaptime = object.autovacuumNaptime ?? undefined;
        message.archiveTimeout = object.archiveTimeout ?? undefined;
        message.trackActivityQuerySize = object.trackActivityQuerySize ?? undefined;
        message.effectiveIoConcurrency = object.effectiveIoConcurrency ?? undefined;
        message.effectiveCacheSize = object.effectiveCacheSize ?? undefined;
        return message;
    },
};

const basePostgresqlconfigset96: object = {};

export const Postgresqlconfigset96 = {
    encode(message: Postgresqlconfigset96, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            Postgresqlconfig96.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            Postgresqlconfig96.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            Postgresqlconfig96.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Postgresqlconfigset96 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePostgresqlconfigset96 } as Postgresqlconfigset96;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = Postgresqlconfig96.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = Postgresqlconfig96.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = Postgresqlconfig96.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Postgresqlconfigset96 {
        const message = { ...basePostgresqlconfigset96 } as Postgresqlconfigset96;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? Postgresqlconfig96.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? Postgresqlconfig96.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? Postgresqlconfig96.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },

    toJSON(message: Postgresqlconfigset96): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? Postgresqlconfig96.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? Postgresqlconfig96.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? Postgresqlconfig96.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Postgresqlconfigset96>, I>>(
        object: I,
    ): Postgresqlconfigset96 {
        const message = { ...basePostgresqlconfigset96 } as Postgresqlconfigset96;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? Postgresqlconfig96.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? Postgresqlconfig96.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? Postgresqlconfig96.fromPartial(object.defaultConfig)
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
