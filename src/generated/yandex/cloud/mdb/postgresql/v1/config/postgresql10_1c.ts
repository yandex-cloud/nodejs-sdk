/* eslint-disable */
import { messageTypeRegistry } from "../../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  Int64Value,
  DoubleValue,
  BoolValue,
} from "../../../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.mdb.postgresql.v1.config";

/**
 * Options and structure of `PostgresqlConfig` reflects PostgreSQL configuration file
 * parameters whose detailed description is available in
 * [PostgreSQL documentation](https://www.postgresql.org/docs/10/runtime-config.html).
 */
export interface Postgresqlconfig101c {
  $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig10_1C";
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
  bgwriterFlushAfter?: number;
  backendFlushAfter?: number;
  oldSnapshotThreshold?: number;
  walLevel: Postgresqlconfig101c_WalLevel;
  synchronousCommit: Postgresqlconfig101c_SynchronousCommit;
  /** in milliseconds. */
  checkpointTimeout?: number;
  checkpointCompletionTarget?: number;
  checkpointFlushAfter?: number;
  /** in bytes. */
  maxWalSize?: number;
  /** in bytes. */
  minWalSize?: number;
  /** in milliseconds. */
  maxStandbyStreamingDelay?: number;
  defaultStatisticsTarget?: number;
  constraintExclusion: Postgresqlconfig101c_ConstraintExclusion;
  cursorTupleFraction?: number;
  fromCollapseLimit?: number;
  joinCollapseLimit?: number;
  forceParallelMode: Postgresqlconfig101c_ForceParallelMode;
  clientMinMessages: Postgresqlconfig101c_LogLevel;
  logMinMessages: Postgresqlconfig101c_LogLevel;
  logMinErrorStatement: Postgresqlconfig101c_LogLevel;
  /** in milliseconds. */
  logMinDurationStatement?: number;
  logCheckpoints?: boolean;
  logConnections?: boolean;
  logDisconnections?: boolean;
  logDuration?: boolean;
  logErrorVerbosity: Postgresqlconfig101c_LogErrorVerbosity;
  logLockWaits?: boolean;
  logStatement: Postgresqlconfig101c_LogStatement;
  logTempFiles?: number;
  searchPath: string;
  rowSecurity?: boolean;
  defaultTransactionIsolation: Postgresqlconfig101c_TransactionIsolation;
  /** in milliseconds. */
  statementTimeout?: number;
  /** in milliseconds. */
  lockTimeout?: number;
  /** in milliseconds. */
  idleInTransactionSessionTimeout?: number;
  byteaOutput: Postgresqlconfig101c_ByteaOutput;
  xmlbinary: Postgresqlconfig101c_XmlBinary;
  xmloption: Postgresqlconfig101c_XmlOption;
  /** in bytes. */
  ginPendingListLimit?: number;
  /** in milliseconds. */
  deadlockTimeout?: number;
  maxLocksPerTransaction?: number;
  maxPredLocksPerTransaction?: number;
  arrayNulls?: boolean;
  backslashQuote: Postgresqlconfig101c_BackslashQuote;
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
  effectiveIoConcurrency?: number;
  effectiveCacheSize?: number;
  sharedPreloadLibraries: Postgresqlconfig101c_SharedPreloadLibraries[];
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
  pgHintPlanDebugPrint: Postgresqlconfig101c_PgHintPlanDebugPrint;
  pgHintPlanMessageLevel: Postgresqlconfig101c_LogLevel;
  onlineAnalyzeEnable?: boolean;
  plantunerFixEmptyTable?: boolean;
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
  /** in milliseconds. */
  maxStandbyArchiveDelay?: number;
  /** Terminate any session that exceeds the designated timeout, specified in milliseconds. If a timeout is not specified, the default session timeout is set to 12 hours. To disable it, specify a value of 0. */
  sessionDurationTimeout?: number;
  logReplicationCommands?: boolean;
  /** in milliseconds. The default is 1000 (1 sec). */
  logAutovacuumMinDuration?: number;
}

export enum Postgresqlconfig101c_WalLevel {
  WAL_LEVEL_UNSPECIFIED = 0,
  WAL_LEVEL_REPLICA = 1,
  WAL_LEVEL_LOGICAL = 2,
  UNRECOGNIZED = -1,
}

export function postgresqlconfig101c_WalLevelFromJSON(
  object: any
): Postgresqlconfig101c_WalLevel {
  switch (object) {
    case 0:
    case "WAL_LEVEL_UNSPECIFIED":
      return Postgresqlconfig101c_WalLevel.WAL_LEVEL_UNSPECIFIED;
    case 1:
    case "WAL_LEVEL_REPLICA":
      return Postgresqlconfig101c_WalLevel.WAL_LEVEL_REPLICA;
    case 2:
    case "WAL_LEVEL_LOGICAL":
      return Postgresqlconfig101c_WalLevel.WAL_LEVEL_LOGICAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Postgresqlconfig101c_WalLevel.UNRECOGNIZED;
  }
}

export function postgresqlconfig101c_WalLevelToJSON(
  object: Postgresqlconfig101c_WalLevel
): string {
  switch (object) {
    case Postgresqlconfig101c_WalLevel.WAL_LEVEL_UNSPECIFIED:
      return "WAL_LEVEL_UNSPECIFIED";
    case Postgresqlconfig101c_WalLevel.WAL_LEVEL_REPLICA:
      return "WAL_LEVEL_REPLICA";
    case Postgresqlconfig101c_WalLevel.WAL_LEVEL_LOGICAL:
      return "WAL_LEVEL_LOGICAL";
    default:
      return "UNKNOWN";
  }
}

export enum Postgresqlconfig101c_SynchronousCommit {
  SYNCHRONOUS_COMMIT_UNSPECIFIED = 0,
  SYNCHRONOUS_COMMIT_ON = 1,
  SYNCHRONOUS_COMMIT_OFF = 2,
  SYNCHRONOUS_COMMIT_LOCAL = 3,
  SYNCHRONOUS_COMMIT_REMOTE_WRITE = 4,
  SYNCHRONOUS_COMMIT_REMOTE_APPLY = 5,
  UNRECOGNIZED = -1,
}

export function postgresqlconfig101c_SynchronousCommitFromJSON(
  object: any
): Postgresqlconfig101c_SynchronousCommit {
  switch (object) {
    case 0:
    case "SYNCHRONOUS_COMMIT_UNSPECIFIED":
      return Postgresqlconfig101c_SynchronousCommit.SYNCHRONOUS_COMMIT_UNSPECIFIED;
    case 1:
    case "SYNCHRONOUS_COMMIT_ON":
      return Postgresqlconfig101c_SynchronousCommit.SYNCHRONOUS_COMMIT_ON;
    case 2:
    case "SYNCHRONOUS_COMMIT_OFF":
      return Postgresqlconfig101c_SynchronousCommit.SYNCHRONOUS_COMMIT_OFF;
    case 3:
    case "SYNCHRONOUS_COMMIT_LOCAL":
      return Postgresqlconfig101c_SynchronousCommit.SYNCHRONOUS_COMMIT_LOCAL;
    case 4:
    case "SYNCHRONOUS_COMMIT_REMOTE_WRITE":
      return Postgresqlconfig101c_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_WRITE;
    case 5:
    case "SYNCHRONOUS_COMMIT_REMOTE_APPLY":
      return Postgresqlconfig101c_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_APPLY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Postgresqlconfig101c_SynchronousCommit.UNRECOGNIZED;
  }
}

export function postgresqlconfig101c_SynchronousCommitToJSON(
  object: Postgresqlconfig101c_SynchronousCommit
): string {
  switch (object) {
    case Postgresqlconfig101c_SynchronousCommit.SYNCHRONOUS_COMMIT_UNSPECIFIED:
      return "SYNCHRONOUS_COMMIT_UNSPECIFIED";
    case Postgresqlconfig101c_SynchronousCommit.SYNCHRONOUS_COMMIT_ON:
      return "SYNCHRONOUS_COMMIT_ON";
    case Postgresqlconfig101c_SynchronousCommit.SYNCHRONOUS_COMMIT_OFF:
      return "SYNCHRONOUS_COMMIT_OFF";
    case Postgresqlconfig101c_SynchronousCommit.SYNCHRONOUS_COMMIT_LOCAL:
      return "SYNCHRONOUS_COMMIT_LOCAL";
    case Postgresqlconfig101c_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_WRITE:
      return "SYNCHRONOUS_COMMIT_REMOTE_WRITE";
    case Postgresqlconfig101c_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_APPLY:
      return "SYNCHRONOUS_COMMIT_REMOTE_APPLY";
    default:
      return "UNKNOWN";
  }
}

export enum Postgresqlconfig101c_ConstraintExclusion {
  CONSTRAINT_EXCLUSION_UNSPECIFIED = 0,
  CONSTRAINT_EXCLUSION_ON = 1,
  CONSTRAINT_EXCLUSION_OFF = 2,
  CONSTRAINT_EXCLUSION_PARTITION = 3,
  UNRECOGNIZED = -1,
}

export function postgresqlconfig101c_ConstraintExclusionFromJSON(
  object: any
): Postgresqlconfig101c_ConstraintExclusion {
  switch (object) {
    case 0:
    case "CONSTRAINT_EXCLUSION_UNSPECIFIED":
      return Postgresqlconfig101c_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED;
    case 1:
    case "CONSTRAINT_EXCLUSION_ON":
      return Postgresqlconfig101c_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON;
    case 2:
    case "CONSTRAINT_EXCLUSION_OFF":
      return Postgresqlconfig101c_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF;
    case 3:
    case "CONSTRAINT_EXCLUSION_PARTITION":
      return Postgresqlconfig101c_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Postgresqlconfig101c_ConstraintExclusion.UNRECOGNIZED;
  }
}

export function postgresqlconfig101c_ConstraintExclusionToJSON(
  object: Postgresqlconfig101c_ConstraintExclusion
): string {
  switch (object) {
    case Postgresqlconfig101c_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED:
      return "CONSTRAINT_EXCLUSION_UNSPECIFIED";
    case Postgresqlconfig101c_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON:
      return "CONSTRAINT_EXCLUSION_ON";
    case Postgresqlconfig101c_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF:
      return "CONSTRAINT_EXCLUSION_OFF";
    case Postgresqlconfig101c_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION:
      return "CONSTRAINT_EXCLUSION_PARTITION";
    default:
      return "UNKNOWN";
  }
}

export enum Postgresqlconfig101c_ForceParallelMode {
  FORCE_PARALLEL_MODE_UNSPECIFIED = 0,
  FORCE_PARALLEL_MODE_ON = 1,
  FORCE_PARALLEL_MODE_OFF = 2,
  FORCE_PARALLEL_MODE_REGRESS = 3,
  UNRECOGNIZED = -1,
}

export function postgresqlconfig101c_ForceParallelModeFromJSON(
  object: any
): Postgresqlconfig101c_ForceParallelMode {
  switch (object) {
    case 0:
    case "FORCE_PARALLEL_MODE_UNSPECIFIED":
      return Postgresqlconfig101c_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED;
    case 1:
    case "FORCE_PARALLEL_MODE_ON":
      return Postgresqlconfig101c_ForceParallelMode.FORCE_PARALLEL_MODE_ON;
    case 2:
    case "FORCE_PARALLEL_MODE_OFF":
      return Postgresqlconfig101c_ForceParallelMode.FORCE_PARALLEL_MODE_OFF;
    case 3:
    case "FORCE_PARALLEL_MODE_REGRESS":
      return Postgresqlconfig101c_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Postgresqlconfig101c_ForceParallelMode.UNRECOGNIZED;
  }
}

export function postgresqlconfig101c_ForceParallelModeToJSON(
  object: Postgresqlconfig101c_ForceParallelMode
): string {
  switch (object) {
    case Postgresqlconfig101c_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED:
      return "FORCE_PARALLEL_MODE_UNSPECIFIED";
    case Postgresqlconfig101c_ForceParallelMode.FORCE_PARALLEL_MODE_ON:
      return "FORCE_PARALLEL_MODE_ON";
    case Postgresqlconfig101c_ForceParallelMode.FORCE_PARALLEL_MODE_OFF:
      return "FORCE_PARALLEL_MODE_OFF";
    case Postgresqlconfig101c_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS:
      return "FORCE_PARALLEL_MODE_REGRESS";
    default:
      return "UNKNOWN";
  }
}

export enum Postgresqlconfig101c_LogErrorVerbosity {
  LOG_ERROR_VERBOSITY_UNSPECIFIED = 0,
  LOG_ERROR_VERBOSITY_TERSE = 1,
  LOG_ERROR_VERBOSITY_DEFAULT = 2,
  LOG_ERROR_VERBOSITY_VERBOSE = 3,
  UNRECOGNIZED = -1,
}

export function postgresqlconfig101c_LogErrorVerbosityFromJSON(
  object: any
): Postgresqlconfig101c_LogErrorVerbosity {
  switch (object) {
    case 0:
    case "LOG_ERROR_VERBOSITY_UNSPECIFIED":
      return Postgresqlconfig101c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED;
    case 1:
    case "LOG_ERROR_VERBOSITY_TERSE":
      return Postgresqlconfig101c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE;
    case 2:
    case "LOG_ERROR_VERBOSITY_DEFAULT":
      return Postgresqlconfig101c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT;
    case 3:
    case "LOG_ERROR_VERBOSITY_VERBOSE":
      return Postgresqlconfig101c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Postgresqlconfig101c_LogErrorVerbosity.UNRECOGNIZED;
  }
}

export function postgresqlconfig101c_LogErrorVerbosityToJSON(
  object: Postgresqlconfig101c_LogErrorVerbosity
): string {
  switch (object) {
    case Postgresqlconfig101c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED:
      return "LOG_ERROR_VERBOSITY_UNSPECIFIED";
    case Postgresqlconfig101c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE:
      return "LOG_ERROR_VERBOSITY_TERSE";
    case Postgresqlconfig101c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT:
      return "LOG_ERROR_VERBOSITY_DEFAULT";
    case Postgresqlconfig101c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE:
      return "LOG_ERROR_VERBOSITY_VERBOSE";
    default:
      return "UNKNOWN";
  }
}

export enum Postgresqlconfig101c_LogLevel {
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

export function postgresqlconfig101c_LogLevelFromJSON(
  object: any
): Postgresqlconfig101c_LogLevel {
  switch (object) {
    case 0:
    case "LOG_LEVEL_UNSPECIFIED":
      return Postgresqlconfig101c_LogLevel.LOG_LEVEL_UNSPECIFIED;
    case 1:
    case "LOG_LEVEL_DEBUG5":
      return Postgresqlconfig101c_LogLevel.LOG_LEVEL_DEBUG5;
    case 2:
    case "LOG_LEVEL_DEBUG4":
      return Postgresqlconfig101c_LogLevel.LOG_LEVEL_DEBUG4;
    case 3:
    case "LOG_LEVEL_DEBUG3":
      return Postgresqlconfig101c_LogLevel.LOG_LEVEL_DEBUG3;
    case 4:
    case "LOG_LEVEL_DEBUG2":
      return Postgresqlconfig101c_LogLevel.LOG_LEVEL_DEBUG2;
    case 5:
    case "LOG_LEVEL_DEBUG1":
      return Postgresqlconfig101c_LogLevel.LOG_LEVEL_DEBUG1;
    case 6:
    case "LOG_LEVEL_LOG":
      return Postgresqlconfig101c_LogLevel.LOG_LEVEL_LOG;
    case 7:
    case "LOG_LEVEL_NOTICE":
      return Postgresqlconfig101c_LogLevel.LOG_LEVEL_NOTICE;
    case 8:
    case "LOG_LEVEL_WARNING":
      return Postgresqlconfig101c_LogLevel.LOG_LEVEL_WARNING;
    case 9:
    case "LOG_LEVEL_ERROR":
      return Postgresqlconfig101c_LogLevel.LOG_LEVEL_ERROR;
    case 10:
    case "LOG_LEVEL_FATAL":
      return Postgresqlconfig101c_LogLevel.LOG_LEVEL_FATAL;
    case 11:
    case "LOG_LEVEL_PANIC":
      return Postgresqlconfig101c_LogLevel.LOG_LEVEL_PANIC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Postgresqlconfig101c_LogLevel.UNRECOGNIZED;
  }
}

export function postgresqlconfig101c_LogLevelToJSON(
  object: Postgresqlconfig101c_LogLevel
): string {
  switch (object) {
    case Postgresqlconfig101c_LogLevel.LOG_LEVEL_UNSPECIFIED:
      return "LOG_LEVEL_UNSPECIFIED";
    case Postgresqlconfig101c_LogLevel.LOG_LEVEL_DEBUG5:
      return "LOG_LEVEL_DEBUG5";
    case Postgresqlconfig101c_LogLevel.LOG_LEVEL_DEBUG4:
      return "LOG_LEVEL_DEBUG4";
    case Postgresqlconfig101c_LogLevel.LOG_LEVEL_DEBUG3:
      return "LOG_LEVEL_DEBUG3";
    case Postgresqlconfig101c_LogLevel.LOG_LEVEL_DEBUG2:
      return "LOG_LEVEL_DEBUG2";
    case Postgresqlconfig101c_LogLevel.LOG_LEVEL_DEBUG1:
      return "LOG_LEVEL_DEBUG1";
    case Postgresqlconfig101c_LogLevel.LOG_LEVEL_LOG:
      return "LOG_LEVEL_LOG";
    case Postgresqlconfig101c_LogLevel.LOG_LEVEL_NOTICE:
      return "LOG_LEVEL_NOTICE";
    case Postgresqlconfig101c_LogLevel.LOG_LEVEL_WARNING:
      return "LOG_LEVEL_WARNING";
    case Postgresqlconfig101c_LogLevel.LOG_LEVEL_ERROR:
      return "LOG_LEVEL_ERROR";
    case Postgresqlconfig101c_LogLevel.LOG_LEVEL_FATAL:
      return "LOG_LEVEL_FATAL";
    case Postgresqlconfig101c_LogLevel.LOG_LEVEL_PANIC:
      return "LOG_LEVEL_PANIC";
    default:
      return "UNKNOWN";
  }
}

export enum Postgresqlconfig101c_LogStatement {
  LOG_STATEMENT_UNSPECIFIED = 0,
  LOG_STATEMENT_NONE = 1,
  LOG_STATEMENT_DDL = 2,
  LOG_STATEMENT_MOD = 3,
  LOG_STATEMENT_ALL = 4,
  UNRECOGNIZED = -1,
}

export function postgresqlconfig101c_LogStatementFromJSON(
  object: any
): Postgresqlconfig101c_LogStatement {
  switch (object) {
    case 0:
    case "LOG_STATEMENT_UNSPECIFIED":
      return Postgresqlconfig101c_LogStatement.LOG_STATEMENT_UNSPECIFIED;
    case 1:
    case "LOG_STATEMENT_NONE":
      return Postgresqlconfig101c_LogStatement.LOG_STATEMENT_NONE;
    case 2:
    case "LOG_STATEMENT_DDL":
      return Postgresqlconfig101c_LogStatement.LOG_STATEMENT_DDL;
    case 3:
    case "LOG_STATEMENT_MOD":
      return Postgresqlconfig101c_LogStatement.LOG_STATEMENT_MOD;
    case 4:
    case "LOG_STATEMENT_ALL":
      return Postgresqlconfig101c_LogStatement.LOG_STATEMENT_ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Postgresqlconfig101c_LogStatement.UNRECOGNIZED;
  }
}

export function postgresqlconfig101c_LogStatementToJSON(
  object: Postgresqlconfig101c_LogStatement
): string {
  switch (object) {
    case Postgresqlconfig101c_LogStatement.LOG_STATEMENT_UNSPECIFIED:
      return "LOG_STATEMENT_UNSPECIFIED";
    case Postgresqlconfig101c_LogStatement.LOG_STATEMENT_NONE:
      return "LOG_STATEMENT_NONE";
    case Postgresqlconfig101c_LogStatement.LOG_STATEMENT_DDL:
      return "LOG_STATEMENT_DDL";
    case Postgresqlconfig101c_LogStatement.LOG_STATEMENT_MOD:
      return "LOG_STATEMENT_MOD";
    case Postgresqlconfig101c_LogStatement.LOG_STATEMENT_ALL:
      return "LOG_STATEMENT_ALL";
    default:
      return "UNKNOWN";
  }
}

export enum Postgresqlconfig101c_TransactionIsolation {
  TRANSACTION_ISOLATION_UNSPECIFIED = 0,
  TRANSACTION_ISOLATION_READ_UNCOMMITTED = 1,
  TRANSACTION_ISOLATION_READ_COMMITTED = 2,
  TRANSACTION_ISOLATION_REPEATABLE_READ = 3,
  TRANSACTION_ISOLATION_SERIALIZABLE = 4,
  UNRECOGNIZED = -1,
}

export function postgresqlconfig101c_TransactionIsolationFromJSON(
  object: any
): Postgresqlconfig101c_TransactionIsolation {
  switch (object) {
    case 0:
    case "TRANSACTION_ISOLATION_UNSPECIFIED":
      return Postgresqlconfig101c_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED;
    case 1:
    case "TRANSACTION_ISOLATION_READ_UNCOMMITTED":
      return Postgresqlconfig101c_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED;
    case 2:
    case "TRANSACTION_ISOLATION_READ_COMMITTED":
      return Postgresqlconfig101c_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED;
    case 3:
    case "TRANSACTION_ISOLATION_REPEATABLE_READ":
      return Postgresqlconfig101c_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ;
    case 4:
    case "TRANSACTION_ISOLATION_SERIALIZABLE":
      return Postgresqlconfig101c_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Postgresqlconfig101c_TransactionIsolation.UNRECOGNIZED;
  }
}

export function postgresqlconfig101c_TransactionIsolationToJSON(
  object: Postgresqlconfig101c_TransactionIsolation
): string {
  switch (object) {
    case Postgresqlconfig101c_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED:
      return "TRANSACTION_ISOLATION_UNSPECIFIED";
    case Postgresqlconfig101c_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED:
      return "TRANSACTION_ISOLATION_READ_UNCOMMITTED";
    case Postgresqlconfig101c_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED:
      return "TRANSACTION_ISOLATION_READ_COMMITTED";
    case Postgresqlconfig101c_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ:
      return "TRANSACTION_ISOLATION_REPEATABLE_READ";
    case Postgresqlconfig101c_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE:
      return "TRANSACTION_ISOLATION_SERIALIZABLE";
    default:
      return "UNKNOWN";
  }
}

export enum Postgresqlconfig101c_ByteaOutput {
  BYTEA_OUTPUT_UNSPECIFIED = 0,
  BYTEA_OUTPUT_HEX = 1,
  BYTEA_OUTPUT_ESCAPED = 2,
  UNRECOGNIZED = -1,
}

export function postgresqlconfig101c_ByteaOutputFromJSON(
  object: any
): Postgresqlconfig101c_ByteaOutput {
  switch (object) {
    case 0:
    case "BYTEA_OUTPUT_UNSPECIFIED":
      return Postgresqlconfig101c_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED;
    case 1:
    case "BYTEA_OUTPUT_HEX":
      return Postgresqlconfig101c_ByteaOutput.BYTEA_OUTPUT_HEX;
    case 2:
    case "BYTEA_OUTPUT_ESCAPED":
      return Postgresqlconfig101c_ByteaOutput.BYTEA_OUTPUT_ESCAPED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Postgresqlconfig101c_ByteaOutput.UNRECOGNIZED;
  }
}

export function postgresqlconfig101c_ByteaOutputToJSON(
  object: Postgresqlconfig101c_ByteaOutput
): string {
  switch (object) {
    case Postgresqlconfig101c_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED:
      return "BYTEA_OUTPUT_UNSPECIFIED";
    case Postgresqlconfig101c_ByteaOutput.BYTEA_OUTPUT_HEX:
      return "BYTEA_OUTPUT_HEX";
    case Postgresqlconfig101c_ByteaOutput.BYTEA_OUTPUT_ESCAPED:
      return "BYTEA_OUTPUT_ESCAPED";
    default:
      return "UNKNOWN";
  }
}

export enum Postgresqlconfig101c_XmlBinary {
  XML_BINARY_UNSPECIFIED = 0,
  XML_BINARY_BASE64 = 1,
  XML_BINARY_HEX = 2,
  UNRECOGNIZED = -1,
}

export function postgresqlconfig101c_XmlBinaryFromJSON(
  object: any
): Postgresqlconfig101c_XmlBinary {
  switch (object) {
    case 0:
    case "XML_BINARY_UNSPECIFIED":
      return Postgresqlconfig101c_XmlBinary.XML_BINARY_UNSPECIFIED;
    case 1:
    case "XML_BINARY_BASE64":
      return Postgresqlconfig101c_XmlBinary.XML_BINARY_BASE64;
    case 2:
    case "XML_BINARY_HEX":
      return Postgresqlconfig101c_XmlBinary.XML_BINARY_HEX;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Postgresqlconfig101c_XmlBinary.UNRECOGNIZED;
  }
}

export function postgresqlconfig101c_XmlBinaryToJSON(
  object: Postgresqlconfig101c_XmlBinary
): string {
  switch (object) {
    case Postgresqlconfig101c_XmlBinary.XML_BINARY_UNSPECIFIED:
      return "XML_BINARY_UNSPECIFIED";
    case Postgresqlconfig101c_XmlBinary.XML_BINARY_BASE64:
      return "XML_BINARY_BASE64";
    case Postgresqlconfig101c_XmlBinary.XML_BINARY_HEX:
      return "XML_BINARY_HEX";
    default:
      return "UNKNOWN";
  }
}

export enum Postgresqlconfig101c_XmlOption {
  XML_OPTION_UNSPECIFIED = 0,
  XML_OPTION_DOCUMENT = 1,
  XML_OPTION_CONTENT = 2,
  UNRECOGNIZED = -1,
}

export function postgresqlconfig101c_XmlOptionFromJSON(
  object: any
): Postgresqlconfig101c_XmlOption {
  switch (object) {
    case 0:
    case "XML_OPTION_UNSPECIFIED":
      return Postgresqlconfig101c_XmlOption.XML_OPTION_UNSPECIFIED;
    case 1:
    case "XML_OPTION_DOCUMENT":
      return Postgresqlconfig101c_XmlOption.XML_OPTION_DOCUMENT;
    case 2:
    case "XML_OPTION_CONTENT":
      return Postgresqlconfig101c_XmlOption.XML_OPTION_CONTENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Postgresqlconfig101c_XmlOption.UNRECOGNIZED;
  }
}

export function postgresqlconfig101c_XmlOptionToJSON(
  object: Postgresqlconfig101c_XmlOption
): string {
  switch (object) {
    case Postgresqlconfig101c_XmlOption.XML_OPTION_UNSPECIFIED:
      return "XML_OPTION_UNSPECIFIED";
    case Postgresqlconfig101c_XmlOption.XML_OPTION_DOCUMENT:
      return "XML_OPTION_DOCUMENT";
    case Postgresqlconfig101c_XmlOption.XML_OPTION_CONTENT:
      return "XML_OPTION_CONTENT";
    default:
      return "UNKNOWN";
  }
}

export enum Postgresqlconfig101c_BackslashQuote {
  BACKSLASH_QUOTE_UNSPECIFIED = 0,
  BACKSLASH_QUOTE = 1,
  BACKSLASH_QUOTE_ON = 2,
  BACKSLASH_QUOTE_OFF = 3,
  BACKSLASH_QUOTE_SAFE_ENCODING = 4,
  UNRECOGNIZED = -1,
}

export function postgresqlconfig101c_BackslashQuoteFromJSON(
  object: any
): Postgresqlconfig101c_BackslashQuote {
  switch (object) {
    case 0:
    case "BACKSLASH_QUOTE_UNSPECIFIED":
      return Postgresqlconfig101c_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED;
    case 1:
    case "BACKSLASH_QUOTE":
      return Postgresqlconfig101c_BackslashQuote.BACKSLASH_QUOTE;
    case 2:
    case "BACKSLASH_QUOTE_ON":
      return Postgresqlconfig101c_BackslashQuote.BACKSLASH_QUOTE_ON;
    case 3:
    case "BACKSLASH_QUOTE_OFF":
      return Postgresqlconfig101c_BackslashQuote.BACKSLASH_QUOTE_OFF;
    case 4:
    case "BACKSLASH_QUOTE_SAFE_ENCODING":
      return Postgresqlconfig101c_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Postgresqlconfig101c_BackslashQuote.UNRECOGNIZED;
  }
}

export function postgresqlconfig101c_BackslashQuoteToJSON(
  object: Postgresqlconfig101c_BackslashQuote
): string {
  switch (object) {
    case Postgresqlconfig101c_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED:
      return "BACKSLASH_QUOTE_UNSPECIFIED";
    case Postgresqlconfig101c_BackslashQuote.BACKSLASH_QUOTE:
      return "BACKSLASH_QUOTE";
    case Postgresqlconfig101c_BackslashQuote.BACKSLASH_QUOTE_ON:
      return "BACKSLASH_QUOTE_ON";
    case Postgresqlconfig101c_BackslashQuote.BACKSLASH_QUOTE_OFF:
      return "BACKSLASH_QUOTE_OFF";
    case Postgresqlconfig101c_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING:
      return "BACKSLASH_QUOTE_SAFE_ENCODING";
    default:
      return "UNKNOWN";
  }
}

export enum Postgresqlconfig101c_PgHintPlanDebugPrint {
  PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED = 0,
  PG_HINT_PLAN_DEBUG_PRINT_OFF = 1,
  PG_HINT_PLAN_DEBUG_PRINT_ON = 2,
  PG_HINT_PLAN_DEBUG_PRINT_DETAILED = 3,
  PG_HINT_PLAN_DEBUG_PRINT_VERBOSE = 4,
  UNRECOGNIZED = -1,
}

export function postgresqlconfig101c_PgHintPlanDebugPrintFromJSON(
  object: any
): Postgresqlconfig101c_PgHintPlanDebugPrint {
  switch (object) {
    case 0:
    case "PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED":
      return Postgresqlconfig101c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED;
    case 1:
    case "PG_HINT_PLAN_DEBUG_PRINT_OFF":
      return Postgresqlconfig101c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_OFF;
    case 2:
    case "PG_HINT_PLAN_DEBUG_PRINT_ON":
      return Postgresqlconfig101c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_ON;
    case 3:
    case "PG_HINT_PLAN_DEBUG_PRINT_DETAILED":
      return Postgresqlconfig101c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_DETAILED;
    case 4:
    case "PG_HINT_PLAN_DEBUG_PRINT_VERBOSE":
      return Postgresqlconfig101c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_VERBOSE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Postgresqlconfig101c_PgHintPlanDebugPrint.UNRECOGNIZED;
  }
}

export function postgresqlconfig101c_PgHintPlanDebugPrintToJSON(
  object: Postgresqlconfig101c_PgHintPlanDebugPrint
): string {
  switch (object) {
    case Postgresqlconfig101c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED:
      return "PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED";
    case Postgresqlconfig101c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_OFF:
      return "PG_HINT_PLAN_DEBUG_PRINT_OFF";
    case Postgresqlconfig101c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_ON:
      return "PG_HINT_PLAN_DEBUG_PRINT_ON";
    case Postgresqlconfig101c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_DETAILED:
      return "PG_HINT_PLAN_DEBUG_PRINT_DETAILED";
    case Postgresqlconfig101c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_VERBOSE:
      return "PG_HINT_PLAN_DEBUG_PRINT_VERBOSE";
    default:
      return "UNKNOWN";
  }
}

export enum Postgresqlconfig101c_SharedPreloadLibraries {
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

export function postgresqlconfig101c_SharedPreloadLibrariesFromJSON(
  object: any
): Postgresqlconfig101c_SharedPreloadLibraries {
  switch (object) {
    case 0:
    case "SHARED_PRELOAD_LIBRARIES_UNSPECIFIED":
      return Postgresqlconfig101c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_UNSPECIFIED;
    case 1:
    case "SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN":
      return Postgresqlconfig101c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN;
    case 2:
    case "SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN":
      return Postgresqlconfig101c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN;
    case 3:
    case "SHARED_PRELOAD_LIBRARIES_TIMESCALEDB":
      return Postgresqlconfig101c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_TIMESCALEDB;
    case 4:
    case "SHARED_PRELOAD_LIBRARIES_PG_QUALSTATS":
      return Postgresqlconfig101c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_QUALSTATS;
    case 5:
    case "SHARED_PRELOAD_LIBRARIES_PG_CRON":
      return Postgresqlconfig101c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_CRON;
    case 6:
    case "SHARED_PRELOAD_LIBRARIES_PGLOGICAL":
      return Postgresqlconfig101c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PGLOGICAL;
    case 7:
    case "SHARED_PRELOAD_LIBRARIES_PG_PREWARM":
      return Postgresqlconfig101c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_PREWARM;
    case 8:
    case "SHARED_PRELOAD_LIBRARIES_PGAUDIT":
      return Postgresqlconfig101c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PGAUDIT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Postgresqlconfig101c_SharedPreloadLibraries.UNRECOGNIZED;
  }
}

export function postgresqlconfig101c_SharedPreloadLibrariesToJSON(
  object: Postgresqlconfig101c_SharedPreloadLibraries
): string {
  switch (object) {
    case Postgresqlconfig101c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_UNSPECIFIED:
      return "SHARED_PRELOAD_LIBRARIES_UNSPECIFIED";
    case Postgresqlconfig101c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN:
      return "SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN";
    case Postgresqlconfig101c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN:
      return "SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN";
    case Postgresqlconfig101c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_TIMESCALEDB:
      return "SHARED_PRELOAD_LIBRARIES_TIMESCALEDB";
    case Postgresqlconfig101c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_QUALSTATS:
      return "SHARED_PRELOAD_LIBRARIES_PG_QUALSTATS";
    case Postgresqlconfig101c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_CRON:
      return "SHARED_PRELOAD_LIBRARIES_PG_CRON";
    case Postgresqlconfig101c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PGLOGICAL:
      return "SHARED_PRELOAD_LIBRARIES_PGLOGICAL";
    case Postgresqlconfig101c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_PREWARM:
      return "SHARED_PRELOAD_LIBRARIES_PG_PREWARM";
    case Postgresqlconfig101c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PGAUDIT:
      return "SHARED_PRELOAD_LIBRARIES_PGAUDIT";
    default:
      return "UNKNOWN";
  }
}

export interface Postgresqlconfigset101c {
  $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet10_1C";
  /**
   * Effective settings for a PostgreSQL 10 1C cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?: Postgresqlconfig101c;
  /** User-defined settings for a PostgreSQL 10 1C cluster. */
  userConfig?: Postgresqlconfig101c;
  /** Default configuration for a PostgreSQL 10 1C cluster. */
  defaultConfig?: Postgresqlconfig101c;
}

const basePostgresqlconfig101c: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig10_1C",
  walLevel: 0,
  synchronousCommit: 0,
  constraintExclusion: 0,
  forceParallelMode: 0,
  clientMinMessages: 0,
  logMinMessages: 0,
  logMinErrorStatement: 0,
  logErrorVerbosity: 0,
  logStatement: 0,
  searchPath: "",
  defaultTransactionIsolation: 0,
  byteaOutput: 0,
  xmlbinary: 0,
  xmloption: 0,
  backslashQuote: 0,
  timezone: "",
  sharedPreloadLibraries: 0,
  pgHintPlanDebugPrint: 0,
  pgHintPlanMessageLevel: 0,
};

export const Postgresqlconfig101c = {
  $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig10_1C" as const,

  encode(
    message: Postgresqlconfig101c,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maxConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxConnections! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.sharedBuffers !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.sharedBuffers! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.tempBuffers !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.tempBuffers! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.maxPreparedTransactions !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxPreparedTransactions!,
        },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.workMem !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.workMem! },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.maintenanceWorkMem !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maintenanceWorkMem!,
        },
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.replacementSortTuples !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.replacementSortTuples!,
        },
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.autovacuumWorkMem !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.autovacuumWorkMem!,
        },
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.tempFileLimit !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.tempFileLimit! },
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.vacuumCostDelay !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.vacuumCostDelay!,
        },
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.vacuumCostPageHit !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.vacuumCostPageHit!,
        },
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.vacuumCostPageMiss !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.vacuumCostPageMiss!,
        },
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.vacuumCostPageDirty !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.vacuumCostPageDirty!,
        },
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.vacuumCostLimit !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.vacuumCostLimit!,
        },
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.bgwriterDelay !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.bgwriterDelay! },
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.bgwriterLruMaxpages !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.bgwriterLruMaxpages!,
        },
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.bgwriterLruMultiplier !== undefined) {
      DoubleValue.encode(
        {
          $type: "google.protobuf.DoubleValue",
          value: message.bgwriterLruMultiplier!,
        },
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.bgwriterFlushAfter !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.bgwriterFlushAfter!,
        },
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.backendFlushAfter !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.backendFlushAfter!,
        },
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.oldSnapshotThreshold !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.oldSnapshotThreshold!,
        },
        writer.uint32(162).fork()
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
        {
          $type: "google.protobuf.Int64Value",
          value: message.checkpointTimeout!,
        },
        writer.uint32(186).fork()
      ).ldelim();
    }
    if (message.checkpointCompletionTarget !== undefined) {
      DoubleValue.encode(
        {
          $type: "google.protobuf.DoubleValue",
          value: message.checkpointCompletionTarget!,
        },
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.checkpointFlushAfter !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.checkpointFlushAfter!,
        },
        writer.uint32(202).fork()
      ).ldelim();
    }
    if (message.maxWalSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxWalSize! },
        writer.uint32(210).fork()
      ).ldelim();
    }
    if (message.minWalSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.minWalSize! },
        writer.uint32(218).fork()
      ).ldelim();
    }
    if (message.maxStandbyStreamingDelay !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxStandbyStreamingDelay!,
        },
        writer.uint32(226).fork()
      ).ldelim();
    }
    if (message.defaultStatisticsTarget !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.defaultStatisticsTarget!,
        },
        writer.uint32(234).fork()
      ).ldelim();
    }
    if (message.constraintExclusion !== 0) {
      writer.uint32(240).int32(message.constraintExclusion);
    }
    if (message.cursorTupleFraction !== undefined) {
      DoubleValue.encode(
        {
          $type: "google.protobuf.DoubleValue",
          value: message.cursorTupleFraction!,
        },
        writer.uint32(250).fork()
      ).ldelim();
    }
    if (message.fromCollapseLimit !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.fromCollapseLimit!,
        },
        writer.uint32(258).fork()
      ).ldelim();
    }
    if (message.joinCollapseLimit !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.joinCollapseLimit!,
        },
        writer.uint32(266).fork()
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
        {
          $type: "google.protobuf.Int64Value",
          value: message.logMinDurationStatement!,
        },
        writer.uint32(306).fork()
      ).ldelim();
    }
    if (message.logCheckpoints !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.logCheckpoints! },
        writer.uint32(314).fork()
      ).ldelim();
    }
    if (message.logConnections !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.logConnections! },
        writer.uint32(322).fork()
      ).ldelim();
    }
    if (message.logDisconnections !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.logDisconnections!,
        },
        writer.uint32(330).fork()
      ).ldelim();
    }
    if (message.logDuration !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.logDuration! },
        writer.uint32(338).fork()
      ).ldelim();
    }
    if (message.logErrorVerbosity !== 0) {
      writer.uint32(344).int32(message.logErrorVerbosity);
    }
    if (message.logLockWaits !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.logLockWaits! },
        writer.uint32(354).fork()
      ).ldelim();
    }
    if (message.logStatement !== 0) {
      writer.uint32(360).int32(message.logStatement);
    }
    if (message.logTempFiles !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logTempFiles! },
        writer.uint32(370).fork()
      ).ldelim();
    }
    if (message.searchPath !== "") {
      writer.uint32(378).string(message.searchPath);
    }
    if (message.rowSecurity !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.rowSecurity! },
        writer.uint32(386).fork()
      ).ldelim();
    }
    if (message.defaultTransactionIsolation !== 0) {
      writer.uint32(392).int32(message.defaultTransactionIsolation);
    }
    if (message.statementTimeout !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.statementTimeout!,
        },
        writer.uint32(402).fork()
      ).ldelim();
    }
    if (message.lockTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.lockTimeout! },
        writer.uint32(410).fork()
      ).ldelim();
    }
    if (message.idleInTransactionSessionTimeout !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.idleInTransactionSessionTimeout!,
        },
        writer.uint32(418).fork()
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
        {
          $type: "google.protobuf.Int64Value",
          value: message.ginPendingListLimit!,
        },
        writer.uint32(450).fork()
      ).ldelim();
    }
    if (message.deadlockTimeout !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.deadlockTimeout!,
        },
        writer.uint32(458).fork()
      ).ldelim();
    }
    if (message.maxLocksPerTransaction !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxLocksPerTransaction!,
        },
        writer.uint32(466).fork()
      ).ldelim();
    }
    if (message.maxPredLocksPerTransaction !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxPredLocksPerTransaction!,
        },
        writer.uint32(474).fork()
      ).ldelim();
    }
    if (message.arrayNulls !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.arrayNulls! },
        writer.uint32(482).fork()
      ).ldelim();
    }
    if (message.backslashQuote !== 0) {
      writer.uint32(488).int32(message.backslashQuote);
    }
    if (message.defaultWithOids !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.defaultWithOids! },
        writer.uint32(498).fork()
      ).ldelim();
    }
    if (message.escapeStringWarning !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.escapeStringWarning!,
        },
        writer.uint32(506).fork()
      ).ldelim();
    }
    if (message.loCompatPrivileges !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.loCompatPrivileges!,
        },
        writer.uint32(514).fork()
      ).ldelim();
    }
    if (message.operatorPrecedenceWarning !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.operatorPrecedenceWarning!,
        },
        writer.uint32(522).fork()
      ).ldelim();
    }
    if (message.quoteAllIdentifiers !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.quoteAllIdentifiers!,
        },
        writer.uint32(530).fork()
      ).ldelim();
    }
    if (message.standardConformingStrings !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.standardConformingStrings!,
        },
        writer.uint32(538).fork()
      ).ldelim();
    }
    if (message.synchronizeSeqscans !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.synchronizeSeqscans!,
        },
        writer.uint32(546).fork()
      ).ldelim();
    }
    if (message.transformNullEquals !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.transformNullEquals!,
        },
        writer.uint32(554).fork()
      ).ldelim();
    }
    if (message.exitOnError !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.exitOnError! },
        writer.uint32(562).fork()
      ).ldelim();
    }
    if (message.seqPageCost !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.seqPageCost! },
        writer.uint32(570).fork()
      ).ldelim();
    }
    if (message.randomPageCost !== undefined) {
      DoubleValue.encode(
        {
          $type: "google.protobuf.DoubleValue",
          value: message.randomPageCost!,
        },
        writer.uint32(578).fork()
      ).ldelim();
    }
    if (message.autovacuumMaxWorkers !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.autovacuumMaxWorkers!,
        },
        writer.uint32(586).fork()
      ).ldelim();
    }
    if (message.autovacuumVacuumCostDelay !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.autovacuumVacuumCostDelay!,
        },
        writer.uint32(594).fork()
      ).ldelim();
    }
    if (message.autovacuumVacuumCostLimit !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.autovacuumVacuumCostLimit!,
        },
        writer.uint32(602).fork()
      ).ldelim();
    }
    if (message.autovacuumNaptime !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.autovacuumNaptime!,
        },
        writer.uint32(610).fork()
      ).ldelim();
    }
    if (message.archiveTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.archiveTimeout! },
        writer.uint32(618).fork()
      ).ldelim();
    }
    if (message.trackActivityQuerySize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.trackActivityQuerySize!,
        },
        writer.uint32(626).fork()
      ).ldelim();
    }
    if (message.enableBitmapscan !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.enableBitmapscan!,
        },
        writer.uint32(642).fork()
      ).ldelim();
    }
    if (message.enableHashagg !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableHashagg! },
        writer.uint32(650).fork()
      ).ldelim();
    }
    if (message.enableHashjoin !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableHashjoin! },
        writer.uint32(658).fork()
      ).ldelim();
    }
    if (message.enableIndexscan !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableIndexscan! },
        writer.uint32(666).fork()
      ).ldelim();
    }
    if (message.enableIndexonlyscan !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.enableIndexonlyscan!,
        },
        writer.uint32(674).fork()
      ).ldelim();
    }
    if (message.enableMaterial !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableMaterial! },
        writer.uint32(682).fork()
      ).ldelim();
    }
    if (message.enableMergejoin !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableMergejoin! },
        writer.uint32(690).fork()
      ).ldelim();
    }
    if (message.enableNestloop !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableNestloop! },
        writer.uint32(698).fork()
      ).ldelim();
    }
    if (message.enableSeqscan !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableSeqscan! },
        writer.uint32(706).fork()
      ).ldelim();
    }
    if (message.enableSort !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableSort! },
        writer.uint32(714).fork()
      ).ldelim();
    }
    if (message.enableTidscan !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableTidscan! },
        writer.uint32(722).fork()
      ).ldelim();
    }
    if (message.maxWorkerProcesses !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxWorkerProcesses!,
        },
        writer.uint32(730).fork()
      ).ldelim();
    }
    if (message.maxParallelWorkers !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxParallelWorkers!,
        },
        writer.uint32(738).fork()
      ).ldelim();
    }
    if (message.maxParallelWorkersPerGather !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxParallelWorkersPerGather!,
        },
        writer.uint32(746).fork()
      ).ldelim();
    }
    if (message.autovacuumVacuumScaleFactor !== undefined) {
      DoubleValue.encode(
        {
          $type: "google.protobuf.DoubleValue",
          value: message.autovacuumVacuumScaleFactor!,
        },
        writer.uint32(754).fork()
      ).ldelim();
    }
    if (message.autovacuumAnalyzeScaleFactor !== undefined) {
      DoubleValue.encode(
        {
          $type: "google.protobuf.DoubleValue",
          value: message.autovacuumAnalyzeScaleFactor!,
        },
        writer.uint32(762).fork()
      ).ldelim();
    }
    if (message.defaultTransactionReadOnly !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.defaultTransactionReadOnly!,
        },
        writer.uint32(770).fork()
      ).ldelim();
    }
    if (message.timezone !== "") {
      writer.uint32(778).string(message.timezone);
    }
    if (message.effectiveIoConcurrency !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.effectiveIoConcurrency!,
        },
        writer.uint32(786).fork()
      ).ldelim();
    }
    if (message.effectiveCacheSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.effectiveCacheSize!,
        },
        writer.uint32(794).fork()
      ).ldelim();
    }
    writer.uint32(802).fork();
    for (const v of message.sharedPreloadLibraries) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.autoExplainLogMinDuration !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.autoExplainLogMinDuration!,
        },
        writer.uint32(810).fork()
      ).ldelim();
    }
    if (message.autoExplainLogAnalyze !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.autoExplainLogAnalyze!,
        },
        writer.uint32(818).fork()
      ).ldelim();
    }
    if (message.autoExplainLogBuffers !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.autoExplainLogBuffers!,
        },
        writer.uint32(826).fork()
      ).ldelim();
    }
    if (message.autoExplainLogTiming !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.autoExplainLogTiming!,
        },
        writer.uint32(834).fork()
      ).ldelim();
    }
    if (message.autoExplainLogTriggers !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.autoExplainLogTriggers!,
        },
        writer.uint32(842).fork()
      ).ldelim();
    }
    if (message.autoExplainLogVerbose !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.autoExplainLogVerbose!,
        },
        writer.uint32(850).fork()
      ).ldelim();
    }
    if (message.autoExplainLogNestedStatements !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.autoExplainLogNestedStatements!,
        },
        writer.uint32(858).fork()
      ).ldelim();
    }
    if (message.autoExplainSampleRate !== undefined) {
      DoubleValue.encode(
        {
          $type: "google.protobuf.DoubleValue",
          value: message.autoExplainSampleRate!,
        },
        writer.uint32(866).fork()
      ).ldelim();
    }
    if (message.pgHintPlanEnableHint !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.pgHintPlanEnableHint!,
        },
        writer.uint32(874).fork()
      ).ldelim();
    }
    if (message.pgHintPlanEnableHintTable !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.pgHintPlanEnableHintTable!,
        },
        writer.uint32(882).fork()
      ).ldelim();
    }
    if (message.pgHintPlanDebugPrint !== 0) {
      writer.uint32(888).int32(message.pgHintPlanDebugPrint);
    }
    if (message.pgHintPlanMessageLevel !== 0) {
      writer.uint32(896).int32(message.pgHintPlanMessageLevel);
    }
    if (message.onlineAnalyzeEnable !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.onlineAnalyzeEnable!,
        },
        writer.uint32(906).fork()
      ).ldelim();
    }
    if (message.plantunerFixEmptyTable !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.plantunerFixEmptyTable!,
        },
        writer.uint32(914).fork()
      ).ldelim();
    }
    if (message.pgQualstatsEnabled !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.pgQualstatsEnabled!,
        },
        writer.uint32(922).fork()
      ).ldelim();
    }
    if (message.pgQualstatsTrackConstants !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.pgQualstatsTrackConstants!,
        },
        writer.uint32(930).fork()
      ).ldelim();
    }
    if (message.pgQualstatsMax !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.pgQualstatsMax! },
        writer.uint32(938).fork()
      ).ldelim();
    }
    if (message.pgQualstatsResolveOids !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.pgQualstatsResolveOids!,
        },
        writer.uint32(946).fork()
      ).ldelim();
    }
    if (message.pgQualstatsSampleRate !== undefined) {
      DoubleValue.encode(
        {
          $type: "google.protobuf.DoubleValue",
          value: message.pgQualstatsSampleRate!,
        },
        writer.uint32(954).fork()
      ).ldelim();
    }
    if (message.maxStackDepth !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxStackDepth! },
        writer.uint32(1202).fork()
      ).ldelim();
    }
    if (message.geqo !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.geqo! },
        writer.uint32(1218).fork()
      ).ldelim();
    }
    if (message.geqoThreshold !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.geqoThreshold! },
        writer.uint32(1226).fork()
      ).ldelim();
    }
    if (message.geqoEffort !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.geqoEffort! },
        writer.uint32(1234).fork()
      ).ldelim();
    }
    if (message.geqoPoolSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.geqoPoolSize! },
        writer.uint32(1242).fork()
      ).ldelim();
    }
    if (message.geqoGenerations !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.geqoGenerations!,
        },
        writer.uint32(1250).fork()
      ).ldelim();
    }
    if (message.geqoSelectionBias !== undefined) {
      DoubleValue.encode(
        {
          $type: "google.protobuf.DoubleValue",
          value: message.geqoSelectionBias!,
        },
        writer.uint32(1258).fork()
      ).ldelim();
    }
    if (message.geqoSeed !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.geqoSeed! },
        writer.uint32(1266).fork()
      ).ldelim();
    }
    if (message.maxStandbyArchiveDelay !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxStandbyArchiveDelay!,
        },
        writer.uint32(1298).fork()
      ).ldelim();
    }
    if (message.sessionDurationTimeout !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.sessionDurationTimeout!,
        },
        writer.uint32(1306).fork()
      ).ldelim();
    }
    if (message.logReplicationCommands !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.logReplicationCommands!,
        },
        writer.uint32(1314).fork()
      ).ldelim();
    }
    if (message.logAutovacuumMinDuration !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.logAutovacuumMinDuration!,
        },
        writer.uint32(1322).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Postgresqlconfig101c {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePostgresqlconfig101c } as Postgresqlconfig101c;
    message.sharedPreloadLibraries = [];
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
          message.sharedBuffers = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.tempBuffers = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 4:
          message.maxPreparedTransactions = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 5:
          message.workMem = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 6:
          message.maintenanceWorkMem = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 7:
          message.replacementSortTuples = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 8:
          message.autovacuumWorkMem = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 9:
          message.tempFileLimit = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 10:
          message.vacuumCostDelay = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 11:
          message.vacuumCostPageHit = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 12:
          message.vacuumCostPageMiss = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 13:
          message.vacuumCostPageDirty = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 14:
          message.vacuumCostLimit = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 15:
          message.bgwriterDelay = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 16:
          message.bgwriterLruMaxpages = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 17:
          message.bgwriterLruMultiplier = DoubleValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 18:
          message.bgwriterFlushAfter = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 19:
          message.backendFlushAfter = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 20:
          message.oldSnapshotThreshold = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 21:
          message.walLevel = reader.int32() as any;
          break;
        case 22:
          message.synchronousCommit = reader.int32() as any;
          break;
        case 23:
          message.checkpointTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 24:
          message.checkpointCompletionTarget = DoubleValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 25:
          message.checkpointFlushAfter = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
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
            reader.uint32()
          ).value;
          break;
        case 29:
          message.defaultStatisticsTarget = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 30:
          message.constraintExclusion = reader.int32() as any;
          break;
        case 31:
          message.cursorTupleFraction = DoubleValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 32:
          message.fromCollapseLimit = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 33:
          message.joinCollapseLimit = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
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
            reader.uint32()
          ).value;
          break;
        case 39:
          message.logCheckpoints = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 40:
          message.logConnections = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 41:
          message.logDisconnections = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 42:
          message.logDuration = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 43:
          message.logErrorVerbosity = reader.int32() as any;
          break;
        case 44:
          message.logLockWaits = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 45:
          message.logStatement = reader.int32() as any;
          break;
        case 46:
          message.logTempFiles = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
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
          message.statementTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 51:
          message.lockTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 52:
          message.idleInTransactionSessionTimeout = Int64Value.decode(
            reader,
            reader.uint32()
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
          message.ginPendingListLimit = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 57:
          message.deadlockTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 58:
          message.maxLocksPerTransaction = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 59:
          message.maxPredLocksPerTransaction = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 60:
          message.arrayNulls = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 61:
          message.backslashQuote = reader.int32() as any;
          break;
        case 62:
          message.defaultWithOids = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 63:
          message.escapeStringWarning = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 64:
          message.loCompatPrivileges = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 65:
          message.operatorPrecedenceWarning = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 66:
          message.quoteAllIdentifiers = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 67:
          message.standardConformingStrings = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 68:
          message.synchronizeSeqscans = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 69:
          message.transformNullEquals = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 70:
          message.exitOnError = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 71:
          message.seqPageCost = DoubleValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 72:
          message.randomPageCost = DoubleValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 73:
          message.autovacuumMaxWorkers = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 74:
          message.autovacuumVacuumCostDelay = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 75:
          message.autovacuumVacuumCostLimit = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 76:
          message.autovacuumNaptime = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 77:
          message.archiveTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 78:
          message.trackActivityQuerySize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 80:
          message.enableBitmapscan = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 81:
          message.enableHashagg = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 82:
          message.enableHashjoin = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 83:
          message.enableIndexscan = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 84:
          message.enableIndexonlyscan = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 85:
          message.enableMaterial = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 86:
          message.enableMergejoin = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 87:
          message.enableNestloop = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 88:
          message.enableSeqscan = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 89:
          message.enableSort = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 90:
          message.enableTidscan = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 91:
          message.maxWorkerProcesses = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 92:
          message.maxParallelWorkers = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 93:
          message.maxParallelWorkersPerGather = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 94:
          message.autovacuumVacuumScaleFactor = DoubleValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 95:
          message.autovacuumAnalyzeScaleFactor = DoubleValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 96:
          message.defaultTransactionReadOnly = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 97:
          message.timezone = reader.string();
          break;
        case 98:
          message.effectiveIoConcurrency = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 99:
          message.effectiveCacheSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 100:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sharedPreloadLibraries.push(reader.int32() as any);
            }
          } else {
            message.sharedPreloadLibraries.push(reader.int32() as any);
          }
          break;
        case 101:
          message.autoExplainLogMinDuration = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 102:
          message.autoExplainLogAnalyze = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 103:
          message.autoExplainLogBuffers = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 104:
          message.autoExplainLogTiming = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 105:
          message.autoExplainLogTriggers = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 106:
          message.autoExplainLogVerbose = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 107:
          message.autoExplainLogNestedStatements = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 108:
          message.autoExplainSampleRate = DoubleValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 109:
          message.pgHintPlanEnableHint = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 110:
          message.pgHintPlanEnableHintTable = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 111:
          message.pgHintPlanDebugPrint = reader.int32() as any;
          break;
        case 112:
          message.pgHintPlanMessageLevel = reader.int32() as any;
          break;
        case 113:
          message.onlineAnalyzeEnable = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 114:
          message.plantunerFixEmptyTable = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 115:
          message.pgQualstatsEnabled = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 116:
          message.pgQualstatsTrackConstants = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 117:
          message.pgQualstatsMax = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 118:
          message.pgQualstatsResolveOids = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 119:
          message.pgQualstatsSampleRate = DoubleValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 150:
          message.maxStackDepth = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 152:
          message.geqo = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 153:
          message.geqoThreshold = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 154:
          message.geqoEffort = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 155:
          message.geqoPoolSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 156:
          message.geqoGenerations = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 157:
          message.geqoSelectionBias = DoubleValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 158:
          message.geqoSeed = DoubleValue.decode(reader, reader.uint32()).value;
          break;
        case 162:
          message.maxStandbyArchiveDelay = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 163:
          message.sessionDurationTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 164:
          message.logReplicationCommands = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 165:
          message.logAutovacuumMinDuration = Int64Value.decode(
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

  fromJSON(object: any): Postgresqlconfig101c {
    const message = { ...basePostgresqlconfig101c } as Postgresqlconfig101c;
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
      object.maxPreparedTransactions !== undefined &&
      object.maxPreparedTransactions !== null
        ? Number(object.maxPreparedTransactions)
        : undefined;
    message.workMem =
      object.workMem !== undefined && object.workMem !== null
        ? Number(object.workMem)
        : undefined;
    message.maintenanceWorkMem =
      object.maintenanceWorkMem !== undefined &&
      object.maintenanceWorkMem !== null
        ? Number(object.maintenanceWorkMem)
        : undefined;
    message.replacementSortTuples =
      object.replacementSortTuples !== undefined &&
      object.replacementSortTuples !== null
        ? Number(object.replacementSortTuples)
        : undefined;
    message.autovacuumWorkMem =
      object.autovacuumWorkMem !== undefined &&
      object.autovacuumWorkMem !== null
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
      object.vacuumCostPageHit !== undefined &&
      object.vacuumCostPageHit !== null
        ? Number(object.vacuumCostPageHit)
        : undefined;
    message.vacuumCostPageMiss =
      object.vacuumCostPageMiss !== undefined &&
      object.vacuumCostPageMiss !== null
        ? Number(object.vacuumCostPageMiss)
        : undefined;
    message.vacuumCostPageDirty =
      object.vacuumCostPageDirty !== undefined &&
      object.vacuumCostPageDirty !== null
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
      object.bgwriterLruMaxpages !== undefined &&
      object.bgwriterLruMaxpages !== null
        ? Number(object.bgwriterLruMaxpages)
        : undefined;
    message.bgwriterLruMultiplier =
      object.bgwriterLruMultiplier !== undefined &&
      object.bgwriterLruMultiplier !== null
        ? Number(object.bgwriterLruMultiplier)
        : undefined;
    message.bgwriterFlushAfter =
      object.bgwriterFlushAfter !== undefined &&
      object.bgwriterFlushAfter !== null
        ? Number(object.bgwriterFlushAfter)
        : undefined;
    message.backendFlushAfter =
      object.backendFlushAfter !== undefined &&
      object.backendFlushAfter !== null
        ? Number(object.backendFlushAfter)
        : undefined;
    message.oldSnapshotThreshold =
      object.oldSnapshotThreshold !== undefined &&
      object.oldSnapshotThreshold !== null
        ? Number(object.oldSnapshotThreshold)
        : undefined;
    message.walLevel =
      object.walLevel !== undefined && object.walLevel !== null
        ? postgresqlconfig101c_WalLevelFromJSON(object.walLevel)
        : 0;
    message.synchronousCommit =
      object.synchronousCommit !== undefined &&
      object.synchronousCommit !== null
        ? postgresqlconfig101c_SynchronousCommitFromJSON(
            object.synchronousCommit
          )
        : 0;
    message.checkpointTimeout =
      object.checkpointTimeout !== undefined &&
      object.checkpointTimeout !== null
        ? Number(object.checkpointTimeout)
        : undefined;
    message.checkpointCompletionTarget =
      object.checkpointCompletionTarget !== undefined &&
      object.checkpointCompletionTarget !== null
        ? Number(object.checkpointCompletionTarget)
        : undefined;
    message.checkpointFlushAfter =
      object.checkpointFlushAfter !== undefined &&
      object.checkpointFlushAfter !== null
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
      object.defaultStatisticsTarget !== undefined &&
      object.defaultStatisticsTarget !== null
        ? Number(object.defaultStatisticsTarget)
        : undefined;
    message.constraintExclusion =
      object.constraintExclusion !== undefined &&
      object.constraintExclusion !== null
        ? postgresqlconfig101c_ConstraintExclusionFromJSON(
            object.constraintExclusion
          )
        : 0;
    message.cursorTupleFraction =
      object.cursorTupleFraction !== undefined &&
      object.cursorTupleFraction !== null
        ? Number(object.cursorTupleFraction)
        : undefined;
    message.fromCollapseLimit =
      object.fromCollapseLimit !== undefined &&
      object.fromCollapseLimit !== null
        ? Number(object.fromCollapseLimit)
        : undefined;
    message.joinCollapseLimit =
      object.joinCollapseLimit !== undefined &&
      object.joinCollapseLimit !== null
        ? Number(object.joinCollapseLimit)
        : undefined;
    message.forceParallelMode =
      object.forceParallelMode !== undefined &&
      object.forceParallelMode !== null
        ? postgresqlconfig101c_ForceParallelModeFromJSON(
            object.forceParallelMode
          )
        : 0;
    message.clientMinMessages =
      object.clientMinMessages !== undefined &&
      object.clientMinMessages !== null
        ? postgresqlconfig101c_LogLevelFromJSON(object.clientMinMessages)
        : 0;
    message.logMinMessages =
      object.logMinMessages !== undefined && object.logMinMessages !== null
        ? postgresqlconfig101c_LogLevelFromJSON(object.logMinMessages)
        : 0;
    message.logMinErrorStatement =
      object.logMinErrorStatement !== undefined &&
      object.logMinErrorStatement !== null
        ? postgresqlconfig101c_LogLevelFromJSON(object.logMinErrorStatement)
        : 0;
    message.logMinDurationStatement =
      object.logMinDurationStatement !== undefined &&
      object.logMinDurationStatement !== null
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
      object.logDisconnections !== undefined &&
      object.logDisconnections !== null
        ? Boolean(object.logDisconnections)
        : undefined;
    message.logDuration =
      object.logDuration !== undefined && object.logDuration !== null
        ? Boolean(object.logDuration)
        : undefined;
    message.logErrorVerbosity =
      object.logErrorVerbosity !== undefined &&
      object.logErrorVerbosity !== null
        ? postgresqlconfig101c_LogErrorVerbosityFromJSON(
            object.logErrorVerbosity
          )
        : 0;
    message.logLockWaits =
      object.logLockWaits !== undefined && object.logLockWaits !== null
        ? Boolean(object.logLockWaits)
        : undefined;
    message.logStatement =
      object.logStatement !== undefined && object.logStatement !== null
        ? postgresqlconfig101c_LogStatementFromJSON(object.logStatement)
        : 0;
    message.logTempFiles =
      object.logTempFiles !== undefined && object.logTempFiles !== null
        ? Number(object.logTempFiles)
        : undefined;
    message.searchPath =
      object.searchPath !== undefined && object.searchPath !== null
        ? String(object.searchPath)
        : "";
    message.rowSecurity =
      object.rowSecurity !== undefined && object.rowSecurity !== null
        ? Boolean(object.rowSecurity)
        : undefined;
    message.defaultTransactionIsolation =
      object.defaultTransactionIsolation !== undefined &&
      object.defaultTransactionIsolation !== null
        ? postgresqlconfig101c_TransactionIsolationFromJSON(
            object.defaultTransactionIsolation
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
        ? postgresqlconfig101c_ByteaOutputFromJSON(object.byteaOutput)
        : 0;
    message.xmlbinary =
      object.xmlbinary !== undefined && object.xmlbinary !== null
        ? postgresqlconfig101c_XmlBinaryFromJSON(object.xmlbinary)
        : 0;
    message.xmloption =
      object.xmloption !== undefined && object.xmloption !== null
        ? postgresqlconfig101c_XmlOptionFromJSON(object.xmloption)
        : 0;
    message.ginPendingListLimit =
      object.ginPendingListLimit !== undefined &&
      object.ginPendingListLimit !== null
        ? Number(object.ginPendingListLimit)
        : undefined;
    message.deadlockTimeout =
      object.deadlockTimeout !== undefined && object.deadlockTimeout !== null
        ? Number(object.deadlockTimeout)
        : undefined;
    message.maxLocksPerTransaction =
      object.maxLocksPerTransaction !== undefined &&
      object.maxLocksPerTransaction !== null
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
        ? postgresqlconfig101c_BackslashQuoteFromJSON(object.backslashQuote)
        : 0;
    message.defaultWithOids =
      object.defaultWithOids !== undefined && object.defaultWithOids !== null
        ? Boolean(object.defaultWithOids)
        : undefined;
    message.escapeStringWarning =
      object.escapeStringWarning !== undefined &&
      object.escapeStringWarning !== null
        ? Boolean(object.escapeStringWarning)
        : undefined;
    message.loCompatPrivileges =
      object.loCompatPrivileges !== undefined &&
      object.loCompatPrivileges !== null
        ? Boolean(object.loCompatPrivileges)
        : undefined;
    message.operatorPrecedenceWarning =
      object.operatorPrecedenceWarning !== undefined &&
      object.operatorPrecedenceWarning !== null
        ? Boolean(object.operatorPrecedenceWarning)
        : undefined;
    message.quoteAllIdentifiers =
      object.quoteAllIdentifiers !== undefined &&
      object.quoteAllIdentifiers !== null
        ? Boolean(object.quoteAllIdentifiers)
        : undefined;
    message.standardConformingStrings =
      object.standardConformingStrings !== undefined &&
      object.standardConformingStrings !== null
        ? Boolean(object.standardConformingStrings)
        : undefined;
    message.synchronizeSeqscans =
      object.synchronizeSeqscans !== undefined &&
      object.synchronizeSeqscans !== null
        ? Boolean(object.synchronizeSeqscans)
        : undefined;
    message.transformNullEquals =
      object.transformNullEquals !== undefined &&
      object.transformNullEquals !== null
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
      object.autovacuumMaxWorkers !== undefined &&
      object.autovacuumMaxWorkers !== null
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
      object.autovacuumNaptime !== undefined &&
      object.autovacuumNaptime !== null
        ? Number(object.autovacuumNaptime)
        : undefined;
    message.archiveTimeout =
      object.archiveTimeout !== undefined && object.archiveTimeout !== null
        ? Number(object.archiveTimeout)
        : undefined;
    message.trackActivityQuerySize =
      object.trackActivityQuerySize !== undefined &&
      object.trackActivityQuerySize !== null
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
      object.enableIndexonlyscan !== undefined &&
      object.enableIndexonlyscan !== null
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
      object.maxWorkerProcesses !== undefined &&
      object.maxWorkerProcesses !== null
        ? Number(object.maxWorkerProcesses)
        : undefined;
    message.maxParallelWorkers =
      object.maxParallelWorkers !== undefined &&
      object.maxParallelWorkers !== null
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
        : "";
    message.effectiveIoConcurrency =
      object.effectiveIoConcurrency !== undefined &&
      object.effectiveIoConcurrency !== null
        ? Number(object.effectiveIoConcurrency)
        : undefined;
    message.effectiveCacheSize =
      object.effectiveCacheSize !== undefined &&
      object.effectiveCacheSize !== null
        ? Number(object.effectiveCacheSize)
        : undefined;
    message.sharedPreloadLibraries = (object.sharedPreloadLibraries ?? []).map(
      (e: any) => postgresqlconfig101c_SharedPreloadLibrariesFromJSON(e)
    );
    message.autoExplainLogMinDuration =
      object.autoExplainLogMinDuration !== undefined &&
      object.autoExplainLogMinDuration !== null
        ? Number(object.autoExplainLogMinDuration)
        : undefined;
    message.autoExplainLogAnalyze =
      object.autoExplainLogAnalyze !== undefined &&
      object.autoExplainLogAnalyze !== null
        ? Boolean(object.autoExplainLogAnalyze)
        : undefined;
    message.autoExplainLogBuffers =
      object.autoExplainLogBuffers !== undefined &&
      object.autoExplainLogBuffers !== null
        ? Boolean(object.autoExplainLogBuffers)
        : undefined;
    message.autoExplainLogTiming =
      object.autoExplainLogTiming !== undefined &&
      object.autoExplainLogTiming !== null
        ? Boolean(object.autoExplainLogTiming)
        : undefined;
    message.autoExplainLogTriggers =
      object.autoExplainLogTriggers !== undefined &&
      object.autoExplainLogTriggers !== null
        ? Boolean(object.autoExplainLogTriggers)
        : undefined;
    message.autoExplainLogVerbose =
      object.autoExplainLogVerbose !== undefined &&
      object.autoExplainLogVerbose !== null
        ? Boolean(object.autoExplainLogVerbose)
        : undefined;
    message.autoExplainLogNestedStatements =
      object.autoExplainLogNestedStatements !== undefined &&
      object.autoExplainLogNestedStatements !== null
        ? Boolean(object.autoExplainLogNestedStatements)
        : undefined;
    message.autoExplainSampleRate =
      object.autoExplainSampleRate !== undefined &&
      object.autoExplainSampleRate !== null
        ? Number(object.autoExplainSampleRate)
        : undefined;
    message.pgHintPlanEnableHint =
      object.pgHintPlanEnableHint !== undefined &&
      object.pgHintPlanEnableHint !== null
        ? Boolean(object.pgHintPlanEnableHint)
        : undefined;
    message.pgHintPlanEnableHintTable =
      object.pgHintPlanEnableHintTable !== undefined &&
      object.pgHintPlanEnableHintTable !== null
        ? Boolean(object.pgHintPlanEnableHintTable)
        : undefined;
    message.pgHintPlanDebugPrint =
      object.pgHintPlanDebugPrint !== undefined &&
      object.pgHintPlanDebugPrint !== null
        ? postgresqlconfig101c_PgHintPlanDebugPrintFromJSON(
            object.pgHintPlanDebugPrint
          )
        : 0;
    message.pgHintPlanMessageLevel =
      object.pgHintPlanMessageLevel !== undefined &&
      object.pgHintPlanMessageLevel !== null
        ? postgresqlconfig101c_LogLevelFromJSON(object.pgHintPlanMessageLevel)
        : 0;
    message.onlineAnalyzeEnable =
      object.onlineAnalyzeEnable !== undefined &&
      object.onlineAnalyzeEnable !== null
        ? Boolean(object.onlineAnalyzeEnable)
        : undefined;
    message.plantunerFixEmptyTable =
      object.plantunerFixEmptyTable !== undefined &&
      object.plantunerFixEmptyTable !== null
        ? Boolean(object.plantunerFixEmptyTable)
        : undefined;
    message.pgQualstatsEnabled =
      object.pgQualstatsEnabled !== undefined &&
      object.pgQualstatsEnabled !== null
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
      object.pgQualstatsResolveOids !== undefined &&
      object.pgQualstatsResolveOids !== null
        ? Boolean(object.pgQualstatsResolveOids)
        : undefined;
    message.pgQualstatsSampleRate =
      object.pgQualstatsSampleRate !== undefined &&
      object.pgQualstatsSampleRate !== null
        ? Number(object.pgQualstatsSampleRate)
        : undefined;
    message.maxStackDepth =
      object.maxStackDepth !== undefined && object.maxStackDepth !== null
        ? Number(object.maxStackDepth)
        : undefined;
    message.geqo =
      object.geqo !== undefined && object.geqo !== null
        ? Boolean(object.geqo)
        : undefined;
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
      object.geqoSelectionBias !== undefined &&
      object.geqoSelectionBias !== null
        ? Number(object.geqoSelectionBias)
        : undefined;
    message.geqoSeed =
      object.geqoSeed !== undefined && object.geqoSeed !== null
        ? Number(object.geqoSeed)
        : undefined;
    message.maxStandbyArchiveDelay =
      object.maxStandbyArchiveDelay !== undefined &&
      object.maxStandbyArchiveDelay !== null
        ? Number(object.maxStandbyArchiveDelay)
        : undefined;
    message.sessionDurationTimeout =
      object.sessionDurationTimeout !== undefined &&
      object.sessionDurationTimeout !== null
        ? Number(object.sessionDurationTimeout)
        : undefined;
    message.logReplicationCommands =
      object.logReplicationCommands !== undefined &&
      object.logReplicationCommands !== null
        ? Boolean(object.logReplicationCommands)
        : undefined;
    message.logAutovacuumMinDuration =
      object.logAutovacuumMinDuration !== undefined &&
      object.logAutovacuumMinDuration !== null
        ? Number(object.logAutovacuumMinDuration)
        : undefined;
    return message;
  },

  toJSON(message: Postgresqlconfig101c): unknown {
    const obj: any = {};
    message.maxConnections !== undefined &&
      (obj.maxConnections = message.maxConnections);
    message.sharedBuffers !== undefined &&
      (obj.sharedBuffers = message.sharedBuffers);
    message.tempBuffers !== undefined &&
      (obj.tempBuffers = message.tempBuffers);
    message.maxPreparedTransactions !== undefined &&
      (obj.maxPreparedTransactions = message.maxPreparedTransactions);
    message.workMem !== undefined && (obj.workMem = message.workMem);
    message.maintenanceWorkMem !== undefined &&
      (obj.maintenanceWorkMem = message.maintenanceWorkMem);
    message.replacementSortTuples !== undefined &&
      (obj.replacementSortTuples = message.replacementSortTuples);
    message.autovacuumWorkMem !== undefined &&
      (obj.autovacuumWorkMem = message.autovacuumWorkMem);
    message.tempFileLimit !== undefined &&
      (obj.tempFileLimit = message.tempFileLimit);
    message.vacuumCostDelay !== undefined &&
      (obj.vacuumCostDelay = message.vacuumCostDelay);
    message.vacuumCostPageHit !== undefined &&
      (obj.vacuumCostPageHit = message.vacuumCostPageHit);
    message.vacuumCostPageMiss !== undefined &&
      (obj.vacuumCostPageMiss = message.vacuumCostPageMiss);
    message.vacuumCostPageDirty !== undefined &&
      (obj.vacuumCostPageDirty = message.vacuumCostPageDirty);
    message.vacuumCostLimit !== undefined &&
      (obj.vacuumCostLimit = message.vacuumCostLimit);
    message.bgwriterDelay !== undefined &&
      (obj.bgwriterDelay = message.bgwriterDelay);
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
      (obj.walLevel = postgresqlconfig101c_WalLevelToJSON(message.walLevel));
    message.synchronousCommit !== undefined &&
      (obj.synchronousCommit = postgresqlconfig101c_SynchronousCommitToJSON(
        message.synchronousCommit
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
      (obj.constraintExclusion = postgresqlconfig101c_ConstraintExclusionToJSON(
        message.constraintExclusion
      ));
    message.cursorTupleFraction !== undefined &&
      (obj.cursorTupleFraction = message.cursorTupleFraction);
    message.fromCollapseLimit !== undefined &&
      (obj.fromCollapseLimit = message.fromCollapseLimit);
    message.joinCollapseLimit !== undefined &&
      (obj.joinCollapseLimit = message.joinCollapseLimit);
    message.forceParallelMode !== undefined &&
      (obj.forceParallelMode = postgresqlconfig101c_ForceParallelModeToJSON(
        message.forceParallelMode
      ));
    message.clientMinMessages !== undefined &&
      (obj.clientMinMessages = postgresqlconfig101c_LogLevelToJSON(
        message.clientMinMessages
      ));
    message.logMinMessages !== undefined &&
      (obj.logMinMessages = postgresqlconfig101c_LogLevelToJSON(
        message.logMinMessages
      ));
    message.logMinErrorStatement !== undefined &&
      (obj.logMinErrorStatement = postgresqlconfig101c_LogLevelToJSON(
        message.logMinErrorStatement
      ));
    message.logMinDurationStatement !== undefined &&
      (obj.logMinDurationStatement = message.logMinDurationStatement);
    message.logCheckpoints !== undefined &&
      (obj.logCheckpoints = message.logCheckpoints);
    message.logConnections !== undefined &&
      (obj.logConnections = message.logConnections);
    message.logDisconnections !== undefined &&
      (obj.logDisconnections = message.logDisconnections);
    message.logDuration !== undefined &&
      (obj.logDuration = message.logDuration);
    message.logErrorVerbosity !== undefined &&
      (obj.logErrorVerbosity = postgresqlconfig101c_LogErrorVerbosityToJSON(
        message.logErrorVerbosity
      ));
    message.logLockWaits !== undefined &&
      (obj.logLockWaits = message.logLockWaits);
    message.logStatement !== undefined &&
      (obj.logStatement = postgresqlconfig101c_LogStatementToJSON(
        message.logStatement
      ));
    message.logTempFiles !== undefined &&
      (obj.logTempFiles = message.logTempFiles);
    message.searchPath !== undefined && (obj.searchPath = message.searchPath);
    message.rowSecurity !== undefined &&
      (obj.rowSecurity = message.rowSecurity);
    message.defaultTransactionIsolation !== undefined &&
      (obj.defaultTransactionIsolation =
        postgresqlconfig101c_TransactionIsolationToJSON(
          message.defaultTransactionIsolation
        ));
    message.statementTimeout !== undefined &&
      (obj.statementTimeout = message.statementTimeout);
    message.lockTimeout !== undefined &&
      (obj.lockTimeout = message.lockTimeout);
    message.idleInTransactionSessionTimeout !== undefined &&
      (obj.idleInTransactionSessionTimeout =
        message.idleInTransactionSessionTimeout);
    message.byteaOutput !== undefined &&
      (obj.byteaOutput = postgresqlconfig101c_ByteaOutputToJSON(
        message.byteaOutput
      ));
    message.xmlbinary !== undefined &&
      (obj.xmlbinary = postgresqlconfig101c_XmlBinaryToJSON(message.xmlbinary));
    message.xmloption !== undefined &&
      (obj.xmloption = postgresqlconfig101c_XmlOptionToJSON(message.xmloption));
    message.ginPendingListLimit !== undefined &&
      (obj.ginPendingListLimit = message.ginPendingListLimit);
    message.deadlockTimeout !== undefined &&
      (obj.deadlockTimeout = message.deadlockTimeout);
    message.maxLocksPerTransaction !== undefined &&
      (obj.maxLocksPerTransaction = message.maxLocksPerTransaction);
    message.maxPredLocksPerTransaction !== undefined &&
      (obj.maxPredLocksPerTransaction = message.maxPredLocksPerTransaction);
    message.arrayNulls !== undefined && (obj.arrayNulls = message.arrayNulls);
    message.backslashQuote !== undefined &&
      (obj.backslashQuote = postgresqlconfig101c_BackslashQuoteToJSON(
        message.backslashQuote
      ));
    message.defaultWithOids !== undefined &&
      (obj.defaultWithOids = message.defaultWithOids);
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
    message.exitOnError !== undefined &&
      (obj.exitOnError = message.exitOnError);
    message.seqPageCost !== undefined &&
      (obj.seqPageCost = message.seqPageCost);
    message.randomPageCost !== undefined &&
      (obj.randomPageCost = message.randomPageCost);
    message.autovacuumMaxWorkers !== undefined &&
      (obj.autovacuumMaxWorkers = message.autovacuumMaxWorkers);
    message.autovacuumVacuumCostDelay !== undefined &&
      (obj.autovacuumVacuumCostDelay = message.autovacuumVacuumCostDelay);
    message.autovacuumVacuumCostLimit !== undefined &&
      (obj.autovacuumVacuumCostLimit = message.autovacuumVacuumCostLimit);
    message.autovacuumNaptime !== undefined &&
      (obj.autovacuumNaptime = message.autovacuumNaptime);
    message.archiveTimeout !== undefined &&
      (obj.archiveTimeout = message.archiveTimeout);
    message.trackActivityQuerySize !== undefined &&
      (obj.trackActivityQuerySize = message.trackActivityQuerySize);
    message.enableBitmapscan !== undefined &&
      (obj.enableBitmapscan = message.enableBitmapscan);
    message.enableHashagg !== undefined &&
      (obj.enableHashagg = message.enableHashagg);
    message.enableHashjoin !== undefined &&
      (obj.enableHashjoin = message.enableHashjoin);
    message.enableIndexscan !== undefined &&
      (obj.enableIndexscan = message.enableIndexscan);
    message.enableIndexonlyscan !== undefined &&
      (obj.enableIndexonlyscan = message.enableIndexonlyscan);
    message.enableMaterial !== undefined &&
      (obj.enableMaterial = message.enableMaterial);
    message.enableMergejoin !== undefined &&
      (obj.enableMergejoin = message.enableMergejoin);
    message.enableNestloop !== undefined &&
      (obj.enableNestloop = message.enableNestloop);
    message.enableSeqscan !== undefined &&
      (obj.enableSeqscan = message.enableSeqscan);
    message.enableSort !== undefined && (obj.enableSort = message.enableSort);
    message.enableTidscan !== undefined &&
      (obj.enableTidscan = message.enableTidscan);
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
    message.effectiveIoConcurrency !== undefined &&
      (obj.effectiveIoConcurrency = message.effectiveIoConcurrency);
    message.effectiveCacheSize !== undefined &&
      (obj.effectiveCacheSize = message.effectiveCacheSize);
    if (message.sharedPreloadLibraries) {
      obj.sharedPreloadLibraries = message.sharedPreloadLibraries.map((e) =>
        postgresqlconfig101c_SharedPreloadLibrariesToJSON(e)
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
      (obj.autoExplainLogNestedStatements =
        message.autoExplainLogNestedStatements);
    message.autoExplainSampleRate !== undefined &&
      (obj.autoExplainSampleRate = message.autoExplainSampleRate);
    message.pgHintPlanEnableHint !== undefined &&
      (obj.pgHintPlanEnableHint = message.pgHintPlanEnableHint);
    message.pgHintPlanEnableHintTable !== undefined &&
      (obj.pgHintPlanEnableHintTable = message.pgHintPlanEnableHintTable);
    message.pgHintPlanDebugPrint !== undefined &&
      (obj.pgHintPlanDebugPrint =
        postgresqlconfig101c_PgHintPlanDebugPrintToJSON(
          message.pgHintPlanDebugPrint
        ));
    message.pgHintPlanMessageLevel !== undefined &&
      (obj.pgHintPlanMessageLevel = postgresqlconfig101c_LogLevelToJSON(
        message.pgHintPlanMessageLevel
      ));
    message.onlineAnalyzeEnable !== undefined &&
      (obj.onlineAnalyzeEnable = message.onlineAnalyzeEnable);
    message.plantunerFixEmptyTable !== undefined &&
      (obj.plantunerFixEmptyTable = message.plantunerFixEmptyTable);
    message.pgQualstatsEnabled !== undefined &&
      (obj.pgQualstatsEnabled = message.pgQualstatsEnabled);
    message.pgQualstatsTrackConstants !== undefined &&
      (obj.pgQualstatsTrackConstants = message.pgQualstatsTrackConstants);
    message.pgQualstatsMax !== undefined &&
      (obj.pgQualstatsMax = message.pgQualstatsMax);
    message.pgQualstatsResolveOids !== undefined &&
      (obj.pgQualstatsResolveOids = message.pgQualstatsResolveOids);
    message.pgQualstatsSampleRate !== undefined &&
      (obj.pgQualstatsSampleRate = message.pgQualstatsSampleRate);
    message.maxStackDepth !== undefined &&
      (obj.maxStackDepth = message.maxStackDepth);
    message.geqo !== undefined && (obj.geqo = message.geqo);
    message.geqoThreshold !== undefined &&
      (obj.geqoThreshold = message.geqoThreshold);
    message.geqoEffort !== undefined && (obj.geqoEffort = message.geqoEffort);
    message.geqoPoolSize !== undefined &&
      (obj.geqoPoolSize = message.geqoPoolSize);
    message.geqoGenerations !== undefined &&
      (obj.geqoGenerations = message.geqoGenerations);
    message.geqoSelectionBias !== undefined &&
      (obj.geqoSelectionBias = message.geqoSelectionBias);
    message.geqoSeed !== undefined && (obj.geqoSeed = message.geqoSeed);
    message.maxStandbyArchiveDelay !== undefined &&
      (obj.maxStandbyArchiveDelay = message.maxStandbyArchiveDelay);
    message.sessionDurationTimeout !== undefined &&
      (obj.sessionDurationTimeout = message.sessionDurationTimeout);
    message.logReplicationCommands !== undefined &&
      (obj.logReplicationCommands = message.logReplicationCommands);
    message.logAutovacuumMinDuration !== undefined &&
      (obj.logAutovacuumMinDuration = message.logAutovacuumMinDuration);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Postgresqlconfig101c>, I>>(
    object: I
  ): Postgresqlconfig101c {
    const message = { ...basePostgresqlconfig101c } as Postgresqlconfig101c;
    message.maxConnections = object.maxConnections ?? undefined;
    message.sharedBuffers = object.sharedBuffers ?? undefined;
    message.tempBuffers = object.tempBuffers ?? undefined;
    message.maxPreparedTransactions =
      object.maxPreparedTransactions ?? undefined;
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
    message.checkpointCompletionTarget =
      object.checkpointCompletionTarget ?? undefined;
    message.checkpointFlushAfter = object.checkpointFlushAfter ?? undefined;
    message.maxWalSize = object.maxWalSize ?? undefined;
    message.minWalSize = object.minWalSize ?? undefined;
    message.maxStandbyStreamingDelay =
      object.maxStandbyStreamingDelay ?? undefined;
    message.defaultStatisticsTarget =
      object.defaultStatisticsTarget ?? undefined;
    message.constraintExclusion = object.constraintExclusion ?? 0;
    message.cursorTupleFraction = object.cursorTupleFraction ?? undefined;
    message.fromCollapseLimit = object.fromCollapseLimit ?? undefined;
    message.joinCollapseLimit = object.joinCollapseLimit ?? undefined;
    message.forceParallelMode = object.forceParallelMode ?? 0;
    message.clientMinMessages = object.clientMinMessages ?? 0;
    message.logMinMessages = object.logMinMessages ?? 0;
    message.logMinErrorStatement = object.logMinErrorStatement ?? 0;
    message.logMinDurationStatement =
      object.logMinDurationStatement ?? undefined;
    message.logCheckpoints = object.logCheckpoints ?? undefined;
    message.logConnections = object.logConnections ?? undefined;
    message.logDisconnections = object.logDisconnections ?? undefined;
    message.logDuration = object.logDuration ?? undefined;
    message.logErrorVerbosity = object.logErrorVerbosity ?? 0;
    message.logLockWaits = object.logLockWaits ?? undefined;
    message.logStatement = object.logStatement ?? 0;
    message.logTempFiles = object.logTempFiles ?? undefined;
    message.searchPath = object.searchPath ?? "";
    message.rowSecurity = object.rowSecurity ?? undefined;
    message.defaultTransactionIsolation =
      object.defaultTransactionIsolation ?? 0;
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
    message.maxPredLocksPerTransaction =
      object.maxPredLocksPerTransaction ?? undefined;
    message.arrayNulls = object.arrayNulls ?? undefined;
    message.backslashQuote = object.backslashQuote ?? 0;
    message.defaultWithOids = object.defaultWithOids ?? undefined;
    message.escapeStringWarning = object.escapeStringWarning ?? undefined;
    message.loCompatPrivileges = object.loCompatPrivileges ?? undefined;
    message.operatorPrecedenceWarning =
      object.operatorPrecedenceWarning ?? undefined;
    message.quoteAllIdentifiers = object.quoteAllIdentifiers ?? undefined;
    message.standardConformingStrings =
      object.standardConformingStrings ?? undefined;
    message.synchronizeSeqscans = object.synchronizeSeqscans ?? undefined;
    message.transformNullEquals = object.transformNullEquals ?? undefined;
    message.exitOnError = object.exitOnError ?? undefined;
    message.seqPageCost = object.seqPageCost ?? undefined;
    message.randomPageCost = object.randomPageCost ?? undefined;
    message.autovacuumMaxWorkers = object.autovacuumMaxWorkers ?? undefined;
    message.autovacuumVacuumCostDelay =
      object.autovacuumVacuumCostDelay ?? undefined;
    message.autovacuumVacuumCostLimit =
      object.autovacuumVacuumCostLimit ?? undefined;
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
    message.maxParallelWorkersPerGather =
      object.maxParallelWorkersPerGather ?? undefined;
    message.autovacuumVacuumScaleFactor =
      object.autovacuumVacuumScaleFactor ?? undefined;
    message.autovacuumAnalyzeScaleFactor =
      object.autovacuumAnalyzeScaleFactor ?? undefined;
    message.defaultTransactionReadOnly =
      object.defaultTransactionReadOnly ?? undefined;
    message.timezone = object.timezone ?? "";
    message.effectiveIoConcurrency = object.effectiveIoConcurrency ?? undefined;
    message.effectiveCacheSize = object.effectiveCacheSize ?? undefined;
    message.sharedPreloadLibraries =
      object.sharedPreloadLibraries?.map((e) => e) || [];
    message.autoExplainLogMinDuration =
      object.autoExplainLogMinDuration ?? undefined;
    message.autoExplainLogAnalyze = object.autoExplainLogAnalyze ?? undefined;
    message.autoExplainLogBuffers = object.autoExplainLogBuffers ?? undefined;
    message.autoExplainLogTiming = object.autoExplainLogTiming ?? undefined;
    message.autoExplainLogTriggers = object.autoExplainLogTriggers ?? undefined;
    message.autoExplainLogVerbose = object.autoExplainLogVerbose ?? undefined;
    message.autoExplainLogNestedStatements =
      object.autoExplainLogNestedStatements ?? undefined;
    message.autoExplainSampleRate = object.autoExplainSampleRate ?? undefined;
    message.pgHintPlanEnableHint = object.pgHintPlanEnableHint ?? undefined;
    message.pgHintPlanEnableHintTable =
      object.pgHintPlanEnableHintTable ?? undefined;
    message.pgHintPlanDebugPrint = object.pgHintPlanDebugPrint ?? 0;
    message.pgHintPlanMessageLevel = object.pgHintPlanMessageLevel ?? 0;
    message.onlineAnalyzeEnable = object.onlineAnalyzeEnable ?? undefined;
    message.plantunerFixEmptyTable = object.plantunerFixEmptyTable ?? undefined;
    message.pgQualstatsEnabled = object.pgQualstatsEnabled ?? undefined;
    message.pgQualstatsTrackConstants =
      object.pgQualstatsTrackConstants ?? undefined;
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
    message.maxStandbyArchiveDelay = object.maxStandbyArchiveDelay ?? undefined;
    message.sessionDurationTimeout = object.sessionDurationTimeout ?? undefined;
    message.logReplicationCommands = object.logReplicationCommands ?? undefined;
    message.logAutovacuumMinDuration =
      object.logAutovacuumMinDuration ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Postgresqlconfig101c.$type, Postgresqlconfig101c);

const basePostgresqlconfigset101c: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet10_1C",
};

export const Postgresqlconfigset101c = {
  $type:
    "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet10_1C" as const,

  encode(
    message: Postgresqlconfigset101c,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      Postgresqlconfig101c.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      Postgresqlconfig101c.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      Postgresqlconfig101c.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Postgresqlconfigset101c {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePostgresqlconfigset101c,
    } as Postgresqlconfigset101c;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = Postgresqlconfig101c.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = Postgresqlconfig101c.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.defaultConfig = Postgresqlconfig101c.decode(
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

  fromJSON(object: any): Postgresqlconfigset101c {
    const message = {
      ...basePostgresqlconfigset101c,
    } as Postgresqlconfigset101c;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Postgresqlconfig101c.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Postgresqlconfig101c.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Postgresqlconfig101c.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: Postgresqlconfigset101c): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? Postgresqlconfig101c.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? Postgresqlconfig101c.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? Postgresqlconfig101c.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Postgresqlconfigset101c>, I>>(
    object: I
  ): Postgresqlconfigset101c {
    const message = {
      ...basePostgresqlconfigset101c,
    } as Postgresqlconfigset101c;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Postgresqlconfig101c.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Postgresqlconfig101c.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Postgresqlconfig101c.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Postgresqlconfigset101c.$type, Postgresqlconfigset101c);

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
