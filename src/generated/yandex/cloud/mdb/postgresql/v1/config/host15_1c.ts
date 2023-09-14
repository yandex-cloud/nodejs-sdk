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
 * parameters which detailed description is available in
 * [PostgreSQL documentation](https://www.postgresql.org/docs/11/runtime-config.html).
 */
export interface Postgresqlhostconfig151c {
  $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig15_1C";
  /** in milliseconds. */
  recoveryMinApplyDelay?: number;
  /** in bytes. */
  sharedBuffers?: number;
  /** in bytes. */
  tempBuffers?: number;
  /** in bytes. */
  workMem?: number;
  /** in bytes. */
  tempFileLimit?: number;
  backendFlushAfter?: number;
  oldSnapshotThreshold?: number;
  /** in milliseconds. */
  maxStandbyStreamingDelay?: number;
  constraintExclusion: Postgresqlhostconfig151c_ConstraintExclusion;
  cursorTupleFraction?: number;
  fromCollapseLimit?: number;
  joinCollapseLimit?: number;
  forceParallelMode: Postgresqlhostconfig151c_ForceParallelMode;
  clientMinMessages: Postgresqlhostconfig151c_LogLevel;
  logMinMessages: Postgresqlhostconfig151c_LogLevel;
  logMinErrorStatement: Postgresqlhostconfig151c_LogLevel;
  /** in milliseconds. */
  logMinDurationStatement?: number;
  logCheckpoints?: boolean;
  logConnections?: boolean;
  logDisconnections?: boolean;
  logDuration?: boolean;
  logErrorVerbosity: Postgresqlhostconfig151c_LogErrorVerbosity;
  logLockWaits?: boolean;
  logStatement: Postgresqlhostconfig151c_LogStatement;
  logTempFiles?: number;
  searchPath: string;
  rowSecurity?: boolean;
  defaultTransactionIsolation: Postgresqlhostconfig151c_TransactionIsolation;
  /** in milliseconds. */
  statementTimeout?: number;
  /** in milliseconds. */
  lockTimeout?: number;
  /** in milliseconds. */
  idleInTransactionSessionTimeout?: number;
  byteaOutput: Postgresqlhostconfig151c_ByteaOutput;
  xmlbinary: Postgresqlhostconfig151c_XmlBinary;
  xmloption: Postgresqlhostconfig151c_XmlOption;
  /** in bytes. */
  ginPendingListLimit?: number;
  /** in milliseconds. */
  deadlockTimeout?: number;
  maxLocksPerTransaction?: number;
  maxPredLocksPerTransaction?: number;
  arrayNulls?: boolean;
  backslashQuote: Postgresqlhostconfig151c_BackslashQuote;
  defaultWithOids?: boolean;
  escapeStringWarning?: boolean;
  loCompatPrivileges?: boolean;
  quoteAllIdentifiers?: boolean;
  standardConformingStrings?: boolean;
  synchronizeSeqscans?: boolean;
  transformNullEquals?: boolean;
  exitOnError?: boolean;
  seqPageCost?: number;
  randomPageCost?: number;
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
  maxParallelWorkers?: number;
  maxParallelWorkersPerGather?: number;
  timezone: string;
  effectiveIoConcurrency?: number;
  effectiveCacheSize?: number;
}

export enum Postgresqlhostconfig151c_BackslashQuote {
  BACKSLASH_QUOTE_UNSPECIFIED = 0,
  BACKSLASH_QUOTE = 1,
  BACKSLASH_QUOTE_ON = 2,
  BACKSLASH_QUOTE_OFF = 3,
  BACKSLASH_QUOTE_SAFE_ENCODING = 4,
  UNRECOGNIZED = -1,
}

export function postgresqlhostconfig151c_BackslashQuoteFromJSON(
  object: any
): Postgresqlhostconfig151c_BackslashQuote {
  switch (object) {
    case 0:
    case "BACKSLASH_QUOTE_UNSPECIFIED":
      return Postgresqlhostconfig151c_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED;
    case 1:
    case "BACKSLASH_QUOTE":
      return Postgresqlhostconfig151c_BackslashQuote.BACKSLASH_QUOTE;
    case 2:
    case "BACKSLASH_QUOTE_ON":
      return Postgresqlhostconfig151c_BackslashQuote.BACKSLASH_QUOTE_ON;
    case 3:
    case "BACKSLASH_QUOTE_OFF":
      return Postgresqlhostconfig151c_BackslashQuote.BACKSLASH_QUOTE_OFF;
    case 4:
    case "BACKSLASH_QUOTE_SAFE_ENCODING":
      return Postgresqlhostconfig151c_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Postgresqlhostconfig151c_BackslashQuote.UNRECOGNIZED;
  }
}

export function postgresqlhostconfig151c_BackslashQuoteToJSON(
  object: Postgresqlhostconfig151c_BackslashQuote
): string {
  switch (object) {
    case Postgresqlhostconfig151c_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED:
      return "BACKSLASH_QUOTE_UNSPECIFIED";
    case Postgresqlhostconfig151c_BackslashQuote.BACKSLASH_QUOTE:
      return "BACKSLASH_QUOTE";
    case Postgresqlhostconfig151c_BackslashQuote.BACKSLASH_QUOTE_ON:
      return "BACKSLASH_QUOTE_ON";
    case Postgresqlhostconfig151c_BackslashQuote.BACKSLASH_QUOTE_OFF:
      return "BACKSLASH_QUOTE_OFF";
    case Postgresqlhostconfig151c_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING:
      return "BACKSLASH_QUOTE_SAFE_ENCODING";
    default:
      return "UNKNOWN";
  }
}

export enum Postgresqlhostconfig151c_ByteaOutput {
  BYTEA_OUTPUT_UNSPECIFIED = 0,
  BYTEA_OUTPUT_HEX = 1,
  BYTEA_OUTPUT_ESCAPED = 2,
  UNRECOGNIZED = -1,
}

export function postgresqlhostconfig151c_ByteaOutputFromJSON(
  object: any
): Postgresqlhostconfig151c_ByteaOutput {
  switch (object) {
    case 0:
    case "BYTEA_OUTPUT_UNSPECIFIED":
      return Postgresqlhostconfig151c_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED;
    case 1:
    case "BYTEA_OUTPUT_HEX":
      return Postgresqlhostconfig151c_ByteaOutput.BYTEA_OUTPUT_HEX;
    case 2:
    case "BYTEA_OUTPUT_ESCAPED":
      return Postgresqlhostconfig151c_ByteaOutput.BYTEA_OUTPUT_ESCAPED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Postgresqlhostconfig151c_ByteaOutput.UNRECOGNIZED;
  }
}

export function postgresqlhostconfig151c_ByteaOutputToJSON(
  object: Postgresqlhostconfig151c_ByteaOutput
): string {
  switch (object) {
    case Postgresqlhostconfig151c_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED:
      return "BYTEA_OUTPUT_UNSPECIFIED";
    case Postgresqlhostconfig151c_ByteaOutput.BYTEA_OUTPUT_HEX:
      return "BYTEA_OUTPUT_HEX";
    case Postgresqlhostconfig151c_ByteaOutput.BYTEA_OUTPUT_ESCAPED:
      return "BYTEA_OUTPUT_ESCAPED";
    default:
      return "UNKNOWN";
  }
}

export enum Postgresqlhostconfig151c_ConstraintExclusion {
  CONSTRAINT_EXCLUSION_UNSPECIFIED = 0,
  CONSTRAINT_EXCLUSION_ON = 1,
  CONSTRAINT_EXCLUSION_OFF = 2,
  CONSTRAINT_EXCLUSION_PARTITION = 3,
  UNRECOGNIZED = -1,
}

export function postgresqlhostconfig151c_ConstraintExclusionFromJSON(
  object: any
): Postgresqlhostconfig151c_ConstraintExclusion {
  switch (object) {
    case 0:
    case "CONSTRAINT_EXCLUSION_UNSPECIFIED":
      return Postgresqlhostconfig151c_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED;
    case 1:
    case "CONSTRAINT_EXCLUSION_ON":
      return Postgresqlhostconfig151c_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON;
    case 2:
    case "CONSTRAINT_EXCLUSION_OFF":
      return Postgresqlhostconfig151c_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF;
    case 3:
    case "CONSTRAINT_EXCLUSION_PARTITION":
      return Postgresqlhostconfig151c_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Postgresqlhostconfig151c_ConstraintExclusion.UNRECOGNIZED;
  }
}

export function postgresqlhostconfig151c_ConstraintExclusionToJSON(
  object: Postgresqlhostconfig151c_ConstraintExclusion
): string {
  switch (object) {
    case Postgresqlhostconfig151c_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED:
      return "CONSTRAINT_EXCLUSION_UNSPECIFIED";
    case Postgresqlhostconfig151c_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON:
      return "CONSTRAINT_EXCLUSION_ON";
    case Postgresqlhostconfig151c_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF:
      return "CONSTRAINT_EXCLUSION_OFF";
    case Postgresqlhostconfig151c_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION:
      return "CONSTRAINT_EXCLUSION_PARTITION";
    default:
      return "UNKNOWN";
  }
}

export enum Postgresqlhostconfig151c_ForceParallelMode {
  FORCE_PARALLEL_MODE_UNSPECIFIED = 0,
  FORCE_PARALLEL_MODE_ON = 1,
  FORCE_PARALLEL_MODE_OFF = 2,
  FORCE_PARALLEL_MODE_REGRESS = 3,
  UNRECOGNIZED = -1,
}

export function postgresqlhostconfig151c_ForceParallelModeFromJSON(
  object: any
): Postgresqlhostconfig151c_ForceParallelMode {
  switch (object) {
    case 0:
    case "FORCE_PARALLEL_MODE_UNSPECIFIED":
      return Postgresqlhostconfig151c_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED;
    case 1:
    case "FORCE_PARALLEL_MODE_ON":
      return Postgresqlhostconfig151c_ForceParallelMode.FORCE_PARALLEL_MODE_ON;
    case 2:
    case "FORCE_PARALLEL_MODE_OFF":
      return Postgresqlhostconfig151c_ForceParallelMode.FORCE_PARALLEL_MODE_OFF;
    case 3:
    case "FORCE_PARALLEL_MODE_REGRESS":
      return Postgresqlhostconfig151c_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Postgresqlhostconfig151c_ForceParallelMode.UNRECOGNIZED;
  }
}

export function postgresqlhostconfig151c_ForceParallelModeToJSON(
  object: Postgresqlhostconfig151c_ForceParallelMode
): string {
  switch (object) {
    case Postgresqlhostconfig151c_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED:
      return "FORCE_PARALLEL_MODE_UNSPECIFIED";
    case Postgresqlhostconfig151c_ForceParallelMode.FORCE_PARALLEL_MODE_ON:
      return "FORCE_PARALLEL_MODE_ON";
    case Postgresqlhostconfig151c_ForceParallelMode.FORCE_PARALLEL_MODE_OFF:
      return "FORCE_PARALLEL_MODE_OFF";
    case Postgresqlhostconfig151c_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS:
      return "FORCE_PARALLEL_MODE_REGRESS";
    default:
      return "UNKNOWN";
  }
}

export enum Postgresqlhostconfig151c_LogErrorVerbosity {
  LOG_ERROR_VERBOSITY_UNSPECIFIED = 0,
  LOG_ERROR_VERBOSITY_TERSE = 1,
  LOG_ERROR_VERBOSITY_DEFAULT = 2,
  LOG_ERROR_VERBOSITY_VERBOSE = 3,
  UNRECOGNIZED = -1,
}

export function postgresqlhostconfig151c_LogErrorVerbosityFromJSON(
  object: any
): Postgresqlhostconfig151c_LogErrorVerbosity {
  switch (object) {
    case 0:
    case "LOG_ERROR_VERBOSITY_UNSPECIFIED":
      return Postgresqlhostconfig151c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED;
    case 1:
    case "LOG_ERROR_VERBOSITY_TERSE":
      return Postgresqlhostconfig151c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE;
    case 2:
    case "LOG_ERROR_VERBOSITY_DEFAULT":
      return Postgresqlhostconfig151c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT;
    case 3:
    case "LOG_ERROR_VERBOSITY_VERBOSE":
      return Postgresqlhostconfig151c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Postgresqlhostconfig151c_LogErrorVerbosity.UNRECOGNIZED;
  }
}

export function postgresqlhostconfig151c_LogErrorVerbosityToJSON(
  object: Postgresqlhostconfig151c_LogErrorVerbosity
): string {
  switch (object) {
    case Postgresqlhostconfig151c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED:
      return "LOG_ERROR_VERBOSITY_UNSPECIFIED";
    case Postgresqlhostconfig151c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE:
      return "LOG_ERROR_VERBOSITY_TERSE";
    case Postgresqlhostconfig151c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT:
      return "LOG_ERROR_VERBOSITY_DEFAULT";
    case Postgresqlhostconfig151c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE:
      return "LOG_ERROR_VERBOSITY_VERBOSE";
    default:
      return "UNKNOWN";
  }
}

export enum Postgresqlhostconfig151c_LogLevel {
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

export function postgresqlhostconfig151c_LogLevelFromJSON(
  object: any
): Postgresqlhostconfig151c_LogLevel {
  switch (object) {
    case 0:
    case "LOG_LEVEL_UNSPECIFIED":
      return Postgresqlhostconfig151c_LogLevel.LOG_LEVEL_UNSPECIFIED;
    case 1:
    case "LOG_LEVEL_DEBUG5":
      return Postgresqlhostconfig151c_LogLevel.LOG_LEVEL_DEBUG5;
    case 2:
    case "LOG_LEVEL_DEBUG4":
      return Postgresqlhostconfig151c_LogLevel.LOG_LEVEL_DEBUG4;
    case 3:
    case "LOG_LEVEL_DEBUG3":
      return Postgresqlhostconfig151c_LogLevel.LOG_LEVEL_DEBUG3;
    case 4:
    case "LOG_LEVEL_DEBUG2":
      return Postgresqlhostconfig151c_LogLevel.LOG_LEVEL_DEBUG2;
    case 5:
    case "LOG_LEVEL_DEBUG1":
      return Postgresqlhostconfig151c_LogLevel.LOG_LEVEL_DEBUG1;
    case 6:
    case "LOG_LEVEL_LOG":
      return Postgresqlhostconfig151c_LogLevel.LOG_LEVEL_LOG;
    case 7:
    case "LOG_LEVEL_NOTICE":
      return Postgresqlhostconfig151c_LogLevel.LOG_LEVEL_NOTICE;
    case 8:
    case "LOG_LEVEL_WARNING":
      return Postgresqlhostconfig151c_LogLevel.LOG_LEVEL_WARNING;
    case 9:
    case "LOG_LEVEL_ERROR":
      return Postgresqlhostconfig151c_LogLevel.LOG_LEVEL_ERROR;
    case 10:
    case "LOG_LEVEL_FATAL":
      return Postgresqlhostconfig151c_LogLevel.LOG_LEVEL_FATAL;
    case 11:
    case "LOG_LEVEL_PANIC":
      return Postgresqlhostconfig151c_LogLevel.LOG_LEVEL_PANIC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Postgresqlhostconfig151c_LogLevel.UNRECOGNIZED;
  }
}

export function postgresqlhostconfig151c_LogLevelToJSON(
  object: Postgresqlhostconfig151c_LogLevel
): string {
  switch (object) {
    case Postgresqlhostconfig151c_LogLevel.LOG_LEVEL_UNSPECIFIED:
      return "LOG_LEVEL_UNSPECIFIED";
    case Postgresqlhostconfig151c_LogLevel.LOG_LEVEL_DEBUG5:
      return "LOG_LEVEL_DEBUG5";
    case Postgresqlhostconfig151c_LogLevel.LOG_LEVEL_DEBUG4:
      return "LOG_LEVEL_DEBUG4";
    case Postgresqlhostconfig151c_LogLevel.LOG_LEVEL_DEBUG3:
      return "LOG_LEVEL_DEBUG3";
    case Postgresqlhostconfig151c_LogLevel.LOG_LEVEL_DEBUG2:
      return "LOG_LEVEL_DEBUG2";
    case Postgresqlhostconfig151c_LogLevel.LOG_LEVEL_DEBUG1:
      return "LOG_LEVEL_DEBUG1";
    case Postgresqlhostconfig151c_LogLevel.LOG_LEVEL_LOG:
      return "LOG_LEVEL_LOG";
    case Postgresqlhostconfig151c_LogLevel.LOG_LEVEL_NOTICE:
      return "LOG_LEVEL_NOTICE";
    case Postgresqlhostconfig151c_LogLevel.LOG_LEVEL_WARNING:
      return "LOG_LEVEL_WARNING";
    case Postgresqlhostconfig151c_LogLevel.LOG_LEVEL_ERROR:
      return "LOG_LEVEL_ERROR";
    case Postgresqlhostconfig151c_LogLevel.LOG_LEVEL_FATAL:
      return "LOG_LEVEL_FATAL";
    case Postgresqlhostconfig151c_LogLevel.LOG_LEVEL_PANIC:
      return "LOG_LEVEL_PANIC";
    default:
      return "UNKNOWN";
  }
}

export enum Postgresqlhostconfig151c_LogStatement {
  LOG_STATEMENT_UNSPECIFIED = 0,
  LOG_STATEMENT_NONE = 1,
  LOG_STATEMENT_DDL = 2,
  LOG_STATEMENT_MOD = 3,
  LOG_STATEMENT_ALL = 4,
  UNRECOGNIZED = -1,
}

export function postgresqlhostconfig151c_LogStatementFromJSON(
  object: any
): Postgresqlhostconfig151c_LogStatement {
  switch (object) {
    case 0:
    case "LOG_STATEMENT_UNSPECIFIED":
      return Postgresqlhostconfig151c_LogStatement.LOG_STATEMENT_UNSPECIFIED;
    case 1:
    case "LOG_STATEMENT_NONE":
      return Postgresqlhostconfig151c_LogStatement.LOG_STATEMENT_NONE;
    case 2:
    case "LOG_STATEMENT_DDL":
      return Postgresqlhostconfig151c_LogStatement.LOG_STATEMENT_DDL;
    case 3:
    case "LOG_STATEMENT_MOD":
      return Postgresqlhostconfig151c_LogStatement.LOG_STATEMENT_MOD;
    case 4:
    case "LOG_STATEMENT_ALL":
      return Postgresqlhostconfig151c_LogStatement.LOG_STATEMENT_ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Postgresqlhostconfig151c_LogStatement.UNRECOGNIZED;
  }
}

export function postgresqlhostconfig151c_LogStatementToJSON(
  object: Postgresqlhostconfig151c_LogStatement
): string {
  switch (object) {
    case Postgresqlhostconfig151c_LogStatement.LOG_STATEMENT_UNSPECIFIED:
      return "LOG_STATEMENT_UNSPECIFIED";
    case Postgresqlhostconfig151c_LogStatement.LOG_STATEMENT_NONE:
      return "LOG_STATEMENT_NONE";
    case Postgresqlhostconfig151c_LogStatement.LOG_STATEMENT_DDL:
      return "LOG_STATEMENT_DDL";
    case Postgresqlhostconfig151c_LogStatement.LOG_STATEMENT_MOD:
      return "LOG_STATEMENT_MOD";
    case Postgresqlhostconfig151c_LogStatement.LOG_STATEMENT_ALL:
      return "LOG_STATEMENT_ALL";
    default:
      return "UNKNOWN";
  }
}

export enum Postgresqlhostconfig151c_TransactionIsolation {
  TRANSACTION_ISOLATION_UNSPECIFIED = 0,
  TRANSACTION_ISOLATION_READ_UNCOMMITTED = 1,
  TRANSACTION_ISOLATION_READ_COMMITTED = 2,
  TRANSACTION_ISOLATION_REPEATABLE_READ = 3,
  TRANSACTION_ISOLATION_SERIALIZABLE = 4,
  UNRECOGNIZED = -1,
}

export function postgresqlhostconfig151c_TransactionIsolationFromJSON(
  object: any
): Postgresqlhostconfig151c_TransactionIsolation {
  switch (object) {
    case 0:
    case "TRANSACTION_ISOLATION_UNSPECIFIED":
      return Postgresqlhostconfig151c_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED;
    case 1:
    case "TRANSACTION_ISOLATION_READ_UNCOMMITTED":
      return Postgresqlhostconfig151c_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED;
    case 2:
    case "TRANSACTION_ISOLATION_READ_COMMITTED":
      return Postgresqlhostconfig151c_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED;
    case 3:
    case "TRANSACTION_ISOLATION_REPEATABLE_READ":
      return Postgresqlhostconfig151c_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ;
    case 4:
    case "TRANSACTION_ISOLATION_SERIALIZABLE":
      return Postgresqlhostconfig151c_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Postgresqlhostconfig151c_TransactionIsolation.UNRECOGNIZED;
  }
}

export function postgresqlhostconfig151c_TransactionIsolationToJSON(
  object: Postgresqlhostconfig151c_TransactionIsolation
): string {
  switch (object) {
    case Postgresqlhostconfig151c_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED:
      return "TRANSACTION_ISOLATION_UNSPECIFIED";
    case Postgresqlhostconfig151c_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED:
      return "TRANSACTION_ISOLATION_READ_UNCOMMITTED";
    case Postgresqlhostconfig151c_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED:
      return "TRANSACTION_ISOLATION_READ_COMMITTED";
    case Postgresqlhostconfig151c_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ:
      return "TRANSACTION_ISOLATION_REPEATABLE_READ";
    case Postgresqlhostconfig151c_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE:
      return "TRANSACTION_ISOLATION_SERIALIZABLE";
    default:
      return "UNKNOWN";
  }
}

export enum Postgresqlhostconfig151c_XmlBinary {
  XML_BINARY_UNSPECIFIED = 0,
  XML_BINARY_BASE64 = 1,
  XML_BINARY_HEX = 2,
  UNRECOGNIZED = -1,
}

export function postgresqlhostconfig151c_XmlBinaryFromJSON(
  object: any
): Postgresqlhostconfig151c_XmlBinary {
  switch (object) {
    case 0:
    case "XML_BINARY_UNSPECIFIED":
      return Postgresqlhostconfig151c_XmlBinary.XML_BINARY_UNSPECIFIED;
    case 1:
    case "XML_BINARY_BASE64":
      return Postgresqlhostconfig151c_XmlBinary.XML_BINARY_BASE64;
    case 2:
    case "XML_BINARY_HEX":
      return Postgresqlhostconfig151c_XmlBinary.XML_BINARY_HEX;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Postgresqlhostconfig151c_XmlBinary.UNRECOGNIZED;
  }
}

export function postgresqlhostconfig151c_XmlBinaryToJSON(
  object: Postgresqlhostconfig151c_XmlBinary
): string {
  switch (object) {
    case Postgresqlhostconfig151c_XmlBinary.XML_BINARY_UNSPECIFIED:
      return "XML_BINARY_UNSPECIFIED";
    case Postgresqlhostconfig151c_XmlBinary.XML_BINARY_BASE64:
      return "XML_BINARY_BASE64";
    case Postgresqlhostconfig151c_XmlBinary.XML_BINARY_HEX:
      return "XML_BINARY_HEX";
    default:
      return "UNKNOWN";
  }
}

export enum Postgresqlhostconfig151c_XmlOption {
  XML_OPTION_UNSPECIFIED = 0,
  XML_OPTION_DOCUMENT = 1,
  XML_OPTION_CONTENT = 2,
  UNRECOGNIZED = -1,
}

export function postgresqlhostconfig151c_XmlOptionFromJSON(
  object: any
): Postgresqlhostconfig151c_XmlOption {
  switch (object) {
    case 0:
    case "XML_OPTION_UNSPECIFIED":
      return Postgresqlhostconfig151c_XmlOption.XML_OPTION_UNSPECIFIED;
    case 1:
    case "XML_OPTION_DOCUMENT":
      return Postgresqlhostconfig151c_XmlOption.XML_OPTION_DOCUMENT;
    case 2:
    case "XML_OPTION_CONTENT":
      return Postgresqlhostconfig151c_XmlOption.XML_OPTION_CONTENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Postgresqlhostconfig151c_XmlOption.UNRECOGNIZED;
  }
}

export function postgresqlhostconfig151c_XmlOptionToJSON(
  object: Postgresqlhostconfig151c_XmlOption
): string {
  switch (object) {
    case Postgresqlhostconfig151c_XmlOption.XML_OPTION_UNSPECIFIED:
      return "XML_OPTION_UNSPECIFIED";
    case Postgresqlhostconfig151c_XmlOption.XML_OPTION_DOCUMENT:
      return "XML_OPTION_DOCUMENT";
    case Postgresqlhostconfig151c_XmlOption.XML_OPTION_CONTENT:
      return "XML_OPTION_CONTENT";
    default:
      return "UNKNOWN";
  }
}

const basePostgresqlhostconfig151c: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig15_1C",
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
};

export const Postgresqlhostconfig151c = {
  $type:
    "yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig15_1C" as const,

  encode(
    message: Postgresqlhostconfig151c,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recoveryMinApplyDelay !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.recoveryMinApplyDelay!,
        },
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
    if (message.workMem !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.workMem! },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.tempFileLimit !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.tempFileLimit! },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.backendFlushAfter !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.backendFlushAfter!,
        },
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.oldSnapshotThreshold !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.oldSnapshotThreshold!,
        },
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.maxStandbyStreamingDelay !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxStandbyStreamingDelay!,
        },
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.constraintExclusion !== 0) {
      writer.uint32(72).int32(message.constraintExclusion);
    }
    if (message.cursorTupleFraction !== undefined) {
      DoubleValue.encode(
        {
          $type: "google.protobuf.DoubleValue",
          value: message.cursorTupleFraction!,
        },
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.fromCollapseLimit !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.fromCollapseLimit!,
        },
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.joinCollapseLimit !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.joinCollapseLimit!,
        },
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.forceParallelMode !== 0) {
      writer.uint32(104).int32(message.forceParallelMode);
    }
    if (message.clientMinMessages !== 0) {
      writer.uint32(112).int32(message.clientMinMessages);
    }
    if (message.logMinMessages !== 0) {
      writer.uint32(120).int32(message.logMinMessages);
    }
    if (message.logMinErrorStatement !== 0) {
      writer.uint32(128).int32(message.logMinErrorStatement);
    }
    if (message.logMinDurationStatement !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.logMinDurationStatement!,
        },
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.logCheckpoints !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.logCheckpoints! },
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.logConnections !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.logConnections! },
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.logDisconnections !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.logDisconnections!,
        },
        writer.uint32(162).fork()
      ).ldelim();
    }
    if (message.logDuration !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.logDuration! },
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.logErrorVerbosity !== 0) {
      writer.uint32(176).int32(message.logErrorVerbosity);
    }
    if (message.logLockWaits !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.logLockWaits! },
        writer.uint32(186).fork()
      ).ldelim();
    }
    if (message.logStatement !== 0) {
      writer.uint32(192).int32(message.logStatement);
    }
    if (message.logTempFiles !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.logTempFiles! },
        writer.uint32(202).fork()
      ).ldelim();
    }
    if (message.searchPath !== "") {
      writer.uint32(210).string(message.searchPath);
    }
    if (message.rowSecurity !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.rowSecurity! },
        writer.uint32(218).fork()
      ).ldelim();
    }
    if (message.defaultTransactionIsolation !== 0) {
      writer.uint32(224).int32(message.defaultTransactionIsolation);
    }
    if (message.statementTimeout !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.statementTimeout!,
        },
        writer.uint32(234).fork()
      ).ldelim();
    }
    if (message.lockTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.lockTimeout! },
        writer.uint32(242).fork()
      ).ldelim();
    }
    if (message.idleInTransactionSessionTimeout !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.idleInTransactionSessionTimeout!,
        },
        writer.uint32(250).fork()
      ).ldelim();
    }
    if (message.byteaOutput !== 0) {
      writer.uint32(256).int32(message.byteaOutput);
    }
    if (message.xmlbinary !== 0) {
      writer.uint32(264).int32(message.xmlbinary);
    }
    if (message.xmloption !== 0) {
      writer.uint32(272).int32(message.xmloption);
    }
    if (message.ginPendingListLimit !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.ginPendingListLimit!,
        },
        writer.uint32(282).fork()
      ).ldelim();
    }
    if (message.deadlockTimeout !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.deadlockTimeout!,
        },
        writer.uint32(290).fork()
      ).ldelim();
    }
    if (message.maxLocksPerTransaction !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxLocksPerTransaction!,
        },
        writer.uint32(298).fork()
      ).ldelim();
    }
    if (message.maxPredLocksPerTransaction !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxPredLocksPerTransaction!,
        },
        writer.uint32(306).fork()
      ).ldelim();
    }
    if (message.arrayNulls !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.arrayNulls! },
        writer.uint32(314).fork()
      ).ldelim();
    }
    if (message.backslashQuote !== 0) {
      writer.uint32(320).int32(message.backslashQuote);
    }
    if (message.defaultWithOids !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.defaultWithOids! },
        writer.uint32(330).fork()
      ).ldelim();
    }
    if (message.escapeStringWarning !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.escapeStringWarning!,
        },
        writer.uint32(338).fork()
      ).ldelim();
    }
    if (message.loCompatPrivileges !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.loCompatPrivileges!,
        },
        writer.uint32(346).fork()
      ).ldelim();
    }
    if (message.quoteAllIdentifiers !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.quoteAllIdentifiers!,
        },
        writer.uint32(362).fork()
      ).ldelim();
    }
    if (message.standardConformingStrings !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.standardConformingStrings!,
        },
        writer.uint32(370).fork()
      ).ldelim();
    }
    if (message.synchronizeSeqscans !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.synchronizeSeqscans!,
        },
        writer.uint32(378).fork()
      ).ldelim();
    }
    if (message.transformNullEquals !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.transformNullEquals!,
        },
        writer.uint32(386).fork()
      ).ldelim();
    }
    if (message.exitOnError !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.exitOnError! },
        writer.uint32(394).fork()
      ).ldelim();
    }
    if (message.seqPageCost !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.seqPageCost! },
        writer.uint32(402).fork()
      ).ldelim();
    }
    if (message.randomPageCost !== undefined) {
      DoubleValue.encode(
        {
          $type: "google.protobuf.DoubleValue",
          value: message.randomPageCost!,
        },
        writer.uint32(410).fork()
      ).ldelim();
    }
    if (message.enableBitmapscan !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.enableBitmapscan!,
        },
        writer.uint32(434).fork()
      ).ldelim();
    }
    if (message.enableHashagg !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableHashagg! },
        writer.uint32(442).fork()
      ).ldelim();
    }
    if (message.enableHashjoin !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableHashjoin! },
        writer.uint32(450).fork()
      ).ldelim();
    }
    if (message.enableIndexscan !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableIndexscan! },
        writer.uint32(458).fork()
      ).ldelim();
    }
    if (message.enableIndexonlyscan !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.enableIndexonlyscan!,
        },
        writer.uint32(466).fork()
      ).ldelim();
    }
    if (message.enableMaterial !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableMaterial! },
        writer.uint32(474).fork()
      ).ldelim();
    }
    if (message.enableMergejoin !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableMergejoin! },
        writer.uint32(482).fork()
      ).ldelim();
    }
    if (message.enableNestloop !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableNestloop! },
        writer.uint32(490).fork()
      ).ldelim();
    }
    if (message.enableSeqscan !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableSeqscan! },
        writer.uint32(498).fork()
      ).ldelim();
    }
    if (message.enableSort !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableSort! },
        writer.uint32(506).fork()
      ).ldelim();
    }
    if (message.enableTidscan !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enableTidscan! },
        writer.uint32(514).fork()
      ).ldelim();
    }
    if (message.maxParallelWorkers !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxParallelWorkers!,
        },
        writer.uint32(522).fork()
      ).ldelim();
    }
    if (message.maxParallelWorkersPerGather !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxParallelWorkersPerGather!,
        },
        writer.uint32(530).fork()
      ).ldelim();
    }
    if (message.timezone !== "") {
      writer.uint32(538).string(message.timezone);
    }
    if (message.effectiveIoConcurrency !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.effectiveIoConcurrency!,
        },
        writer.uint32(546).fork()
      ).ldelim();
    }
    if (message.effectiveCacheSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.effectiveCacheSize!,
        },
        writer.uint32(554).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Postgresqlhostconfig151c {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePostgresqlhostconfig151c,
    } as Postgresqlhostconfig151c;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recoveryMinApplyDelay = Int64Value.decode(
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
          message.workMem = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 5:
          message.tempFileLimit = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 6:
          message.backendFlushAfter = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 7:
          message.oldSnapshotThreshold = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 8:
          message.maxStandbyStreamingDelay = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 9:
          message.constraintExclusion = reader.int32() as any;
          break;
        case 10:
          message.cursorTupleFraction = DoubleValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 11:
          message.fromCollapseLimit = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 12:
          message.joinCollapseLimit = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 13:
          message.forceParallelMode = reader.int32() as any;
          break;
        case 14:
          message.clientMinMessages = reader.int32() as any;
          break;
        case 15:
          message.logMinMessages = reader.int32() as any;
          break;
        case 16:
          message.logMinErrorStatement = reader.int32() as any;
          break;
        case 17:
          message.logMinDurationStatement = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 18:
          message.logCheckpoints = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 19:
          message.logConnections = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 20:
          message.logDisconnections = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 21:
          message.logDuration = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 22:
          message.logErrorVerbosity = reader.int32() as any;
          break;
        case 23:
          message.logLockWaits = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 24:
          message.logStatement = reader.int32() as any;
          break;
        case 25:
          message.logTempFiles = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 26:
          message.searchPath = reader.string();
          break;
        case 27:
          message.rowSecurity = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 28:
          message.defaultTransactionIsolation = reader.int32() as any;
          break;
        case 29:
          message.statementTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 30:
          message.lockTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 31:
          message.idleInTransactionSessionTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 32:
          message.byteaOutput = reader.int32() as any;
          break;
        case 33:
          message.xmlbinary = reader.int32() as any;
          break;
        case 34:
          message.xmloption = reader.int32() as any;
          break;
        case 35:
          message.ginPendingListLimit = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 36:
          message.deadlockTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 37:
          message.maxLocksPerTransaction = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 38:
          message.maxPredLocksPerTransaction = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 39:
          message.arrayNulls = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 40:
          message.backslashQuote = reader.int32() as any;
          break;
        case 41:
          message.defaultWithOids = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 42:
          message.escapeStringWarning = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 43:
          message.loCompatPrivileges = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 45:
          message.quoteAllIdentifiers = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 46:
          message.standardConformingStrings = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 47:
          message.synchronizeSeqscans = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 48:
          message.transformNullEquals = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 49:
          message.exitOnError = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 50:
          message.seqPageCost = DoubleValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 51:
          message.randomPageCost = DoubleValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 54:
          message.enableBitmapscan = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 55:
          message.enableHashagg = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 56:
          message.enableHashjoin = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 57:
          message.enableIndexscan = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 58:
          message.enableIndexonlyscan = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 59:
          message.enableMaterial = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 60:
          message.enableMergejoin = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 61:
          message.enableNestloop = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 62:
          message.enableSeqscan = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 63:
          message.enableSort = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 64:
          message.enableTidscan = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 65:
          message.maxParallelWorkers = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 66:
          message.maxParallelWorkersPerGather = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 67:
          message.timezone = reader.string();
          break;
        case 68:
          message.effectiveIoConcurrency = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 69:
          message.effectiveCacheSize = Int64Value.decode(
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

  fromJSON(object: any): Postgresqlhostconfig151c {
    const message = {
      ...basePostgresqlhostconfig151c,
    } as Postgresqlhostconfig151c;
    message.recoveryMinApplyDelay =
      object.recoveryMinApplyDelay !== undefined &&
      object.recoveryMinApplyDelay !== null
        ? Number(object.recoveryMinApplyDelay)
        : undefined;
    message.sharedBuffers =
      object.sharedBuffers !== undefined && object.sharedBuffers !== null
        ? Number(object.sharedBuffers)
        : undefined;
    message.tempBuffers =
      object.tempBuffers !== undefined && object.tempBuffers !== null
        ? Number(object.tempBuffers)
        : undefined;
    message.workMem =
      object.workMem !== undefined && object.workMem !== null
        ? Number(object.workMem)
        : undefined;
    message.tempFileLimit =
      object.tempFileLimit !== undefined && object.tempFileLimit !== null
        ? Number(object.tempFileLimit)
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
    message.maxStandbyStreamingDelay =
      object.maxStandbyStreamingDelay !== undefined &&
      object.maxStandbyStreamingDelay !== null
        ? Number(object.maxStandbyStreamingDelay)
        : undefined;
    message.constraintExclusion =
      object.constraintExclusion !== undefined &&
      object.constraintExclusion !== null
        ? postgresqlhostconfig151c_ConstraintExclusionFromJSON(
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
        ? postgresqlhostconfig151c_ForceParallelModeFromJSON(
            object.forceParallelMode
          )
        : 0;
    message.clientMinMessages =
      object.clientMinMessages !== undefined &&
      object.clientMinMessages !== null
        ? postgresqlhostconfig151c_LogLevelFromJSON(object.clientMinMessages)
        : 0;
    message.logMinMessages =
      object.logMinMessages !== undefined && object.logMinMessages !== null
        ? postgresqlhostconfig151c_LogLevelFromJSON(object.logMinMessages)
        : 0;
    message.logMinErrorStatement =
      object.logMinErrorStatement !== undefined &&
      object.logMinErrorStatement !== null
        ? postgresqlhostconfig151c_LogLevelFromJSON(object.logMinErrorStatement)
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
        ? postgresqlhostconfig151c_LogErrorVerbosityFromJSON(
            object.logErrorVerbosity
          )
        : 0;
    message.logLockWaits =
      object.logLockWaits !== undefined && object.logLockWaits !== null
        ? Boolean(object.logLockWaits)
        : undefined;
    message.logStatement =
      object.logStatement !== undefined && object.logStatement !== null
        ? postgresqlhostconfig151c_LogStatementFromJSON(object.logStatement)
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
        ? postgresqlhostconfig151c_TransactionIsolationFromJSON(
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
        ? postgresqlhostconfig151c_ByteaOutputFromJSON(object.byteaOutput)
        : 0;
    message.xmlbinary =
      object.xmlbinary !== undefined && object.xmlbinary !== null
        ? postgresqlhostconfig151c_XmlBinaryFromJSON(object.xmlbinary)
        : 0;
    message.xmloption =
      object.xmloption !== undefined && object.xmloption !== null
        ? postgresqlhostconfig151c_XmlOptionFromJSON(object.xmloption)
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
        ? postgresqlhostconfig151c_BackslashQuoteFromJSON(object.backslashQuote)
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
    return message;
  },

  toJSON(message: Postgresqlhostconfig151c): unknown {
    const obj: any = {};
    message.recoveryMinApplyDelay !== undefined &&
      (obj.recoveryMinApplyDelay = message.recoveryMinApplyDelay);
    message.sharedBuffers !== undefined &&
      (obj.sharedBuffers = message.sharedBuffers);
    message.tempBuffers !== undefined &&
      (obj.tempBuffers = message.tempBuffers);
    message.workMem !== undefined && (obj.workMem = message.workMem);
    message.tempFileLimit !== undefined &&
      (obj.tempFileLimit = message.tempFileLimit);
    message.backendFlushAfter !== undefined &&
      (obj.backendFlushAfter = message.backendFlushAfter);
    message.oldSnapshotThreshold !== undefined &&
      (obj.oldSnapshotThreshold = message.oldSnapshotThreshold);
    message.maxStandbyStreamingDelay !== undefined &&
      (obj.maxStandbyStreamingDelay = message.maxStandbyStreamingDelay);
    message.constraintExclusion !== undefined &&
      (obj.constraintExclusion =
        postgresqlhostconfig151c_ConstraintExclusionToJSON(
          message.constraintExclusion
        ));
    message.cursorTupleFraction !== undefined &&
      (obj.cursorTupleFraction = message.cursorTupleFraction);
    message.fromCollapseLimit !== undefined &&
      (obj.fromCollapseLimit = message.fromCollapseLimit);
    message.joinCollapseLimit !== undefined &&
      (obj.joinCollapseLimit = message.joinCollapseLimit);
    message.forceParallelMode !== undefined &&
      (obj.forceParallelMode = postgresqlhostconfig151c_ForceParallelModeToJSON(
        message.forceParallelMode
      ));
    message.clientMinMessages !== undefined &&
      (obj.clientMinMessages = postgresqlhostconfig151c_LogLevelToJSON(
        message.clientMinMessages
      ));
    message.logMinMessages !== undefined &&
      (obj.logMinMessages = postgresqlhostconfig151c_LogLevelToJSON(
        message.logMinMessages
      ));
    message.logMinErrorStatement !== undefined &&
      (obj.logMinErrorStatement = postgresqlhostconfig151c_LogLevelToJSON(
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
      (obj.logErrorVerbosity = postgresqlhostconfig151c_LogErrorVerbosityToJSON(
        message.logErrorVerbosity
      ));
    message.logLockWaits !== undefined &&
      (obj.logLockWaits = message.logLockWaits);
    message.logStatement !== undefined &&
      (obj.logStatement = postgresqlhostconfig151c_LogStatementToJSON(
        message.logStatement
      ));
    message.logTempFiles !== undefined &&
      (obj.logTempFiles = message.logTempFiles);
    message.searchPath !== undefined && (obj.searchPath = message.searchPath);
    message.rowSecurity !== undefined &&
      (obj.rowSecurity = message.rowSecurity);
    message.defaultTransactionIsolation !== undefined &&
      (obj.defaultTransactionIsolation =
        postgresqlhostconfig151c_TransactionIsolationToJSON(
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
      (obj.byteaOutput = postgresqlhostconfig151c_ByteaOutputToJSON(
        message.byteaOutput
      ));
    message.xmlbinary !== undefined &&
      (obj.xmlbinary = postgresqlhostconfig151c_XmlBinaryToJSON(
        message.xmlbinary
      ));
    message.xmloption !== undefined &&
      (obj.xmloption = postgresqlhostconfig151c_XmlOptionToJSON(
        message.xmloption
      ));
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
      (obj.backslashQuote = postgresqlhostconfig151c_BackslashQuoteToJSON(
        message.backslashQuote
      ));
    message.defaultWithOids !== undefined &&
      (obj.defaultWithOids = message.defaultWithOids);
    message.escapeStringWarning !== undefined &&
      (obj.escapeStringWarning = message.escapeStringWarning);
    message.loCompatPrivileges !== undefined &&
      (obj.loCompatPrivileges = message.loCompatPrivileges);
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
    message.maxParallelWorkers !== undefined &&
      (obj.maxParallelWorkers = message.maxParallelWorkers);
    message.maxParallelWorkersPerGather !== undefined &&
      (obj.maxParallelWorkersPerGather = message.maxParallelWorkersPerGather);
    message.timezone !== undefined && (obj.timezone = message.timezone);
    message.effectiveIoConcurrency !== undefined &&
      (obj.effectiveIoConcurrency = message.effectiveIoConcurrency);
    message.effectiveCacheSize !== undefined &&
      (obj.effectiveCacheSize = message.effectiveCacheSize);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Postgresqlhostconfig151c>, I>>(
    object: I
  ): Postgresqlhostconfig151c {
    const message = {
      ...basePostgresqlhostconfig151c,
    } as Postgresqlhostconfig151c;
    message.recoveryMinApplyDelay = object.recoveryMinApplyDelay ?? undefined;
    message.sharedBuffers = object.sharedBuffers ?? undefined;
    message.tempBuffers = object.tempBuffers ?? undefined;
    message.workMem = object.workMem ?? undefined;
    message.tempFileLimit = object.tempFileLimit ?? undefined;
    message.backendFlushAfter = object.backendFlushAfter ?? undefined;
    message.oldSnapshotThreshold = object.oldSnapshotThreshold ?? undefined;
    message.maxStandbyStreamingDelay =
      object.maxStandbyStreamingDelay ?? undefined;
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
    message.quoteAllIdentifiers = object.quoteAllIdentifiers ?? undefined;
    message.standardConformingStrings =
      object.standardConformingStrings ?? undefined;
    message.synchronizeSeqscans = object.synchronizeSeqscans ?? undefined;
    message.transformNullEquals = object.transformNullEquals ?? undefined;
    message.exitOnError = object.exitOnError ?? undefined;
    message.seqPageCost = object.seqPageCost ?? undefined;
    message.randomPageCost = object.randomPageCost ?? undefined;
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
    message.maxParallelWorkers = object.maxParallelWorkers ?? undefined;
    message.maxParallelWorkersPerGather =
      object.maxParallelWorkersPerGather ?? undefined;
    message.timezone = object.timezone ?? "";
    message.effectiveIoConcurrency = object.effectiveIoConcurrency ?? undefined;
    message.effectiveCacheSize = object.effectiveCacheSize ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Postgresqlhostconfig151c.$type,
  Postgresqlhostconfig151c
);

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
