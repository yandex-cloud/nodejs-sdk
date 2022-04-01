/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { LogEntryResource } from "../../../../yandex/cloud/logging/v1/log_resource";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Struct } from "../../../../google/protobuf/struct";

export const protobufPackage = "yandex.cloud.logging.v1";

export interface LogEntry {
  $type: "yandex.cloud.logging.v1.LogEntry";
  /**
   * Unique entry ID.
   *
   * Useful for logs deduplication.
   */
  uid: string;
  /**
   * Entry resource specification.
   *
   * May contain information about source service and resource ID.
   * Also may be provided by the user.
   */
  resource?: LogEntryResource;
  /** Timestamp of the entry. */
  timestamp?: Date;
  /** Entry ingestion time observed by [LogIngestionService]. */
  ingestedAt?: Date;
  /**
   * Entry save time.
   *
   * Entry is ready to be read since this moment.
   */
  savedAt?: Date;
  /**
   * Entry severity.
   *
   * See [LogLevel.Level] for details.
   */
  level: LogLevel_Level;
  /** Entry text message. */
  message: string;
  /** Entry annotation. */
  jsonPayload?: { [key: string]: any };
}

export interface IncomingLogEntry {
  $type: "yandex.cloud.logging.v1.IncomingLogEntry";
  /** Timestamp of the entry. */
  timestamp?: Date;
  /**
   * Entry severity.
   *
   * See [LogLevel.Level] for details.
   */
  level: LogLevel_Level;
  /** Entry text message. */
  message: string;
  /** Entry annotation. */
  jsonPayload?: { [key: string]: any };
}

export interface LogEntryDefaults {
  $type: "yandex.cloud.logging.v1.LogEntryDefaults";
  /**
   * Default entry severity.
   * Will be applied if entry level is unspecified.
   *
   * See [LogLevel.Level] for details.
   */
  level: LogLevel_Level;
  /**
   * Default entry annotation.
   * Will be merged with entry annotation.
   * Any conflict will be resolved in favor of entry own annotation.
   */
  jsonPayload?: { [key: string]: any };
}

export interface Destination {
  $type: "yandex.cloud.logging.v1.Destination";
  /** Entry should be written to log group resolved by ID. */
  logGroupId: string | undefined;
  /** Entry should be written to default log group for the folder. */
  folderId: string | undefined;
}

export interface LogLevel {
  $type: "yandex.cloud.logging.v1.LogLevel";
  /**
   * Entry level.
   *
   * See [Level] for possible values.
   */
  level: LogLevel_Level;
}

/** Possible log levels for entries. */
export enum LogLevel_Level {
  /**
   * LEVEL_UNSPECIFIED - Default log level.
   *
   * Equivalent to not specifying log level at all.
   */
  LEVEL_UNSPECIFIED = 0,
  /**
   * TRACE - Trace log level.
   *
   * Possible use case: verbose logging of some business logic.
   */
  TRACE = 1,
  /**
   * DEBUG - Debug log level.
   *
   * Possible use case: debugging special cases in application logic.
   */
  DEBUG = 2,
  /**
   * INFO - Info log level.
   *
   * Mostly used for information messages.
   */
  INFO = 3,
  /**
   * WARN - Warn log level.
   *
   * May be used to alert about significant events.
   */
  WARN = 4,
  /**
   * ERROR - Error log level.
   *
   * May be used to alert about errors in infrastructure, logic, etc.
   */
  ERROR = 5,
  /**
   * FATAL - Fatal log level.
   *
   * May be used to alert about unrecoverable failures and events.
   */
  FATAL = 6,
  UNRECOGNIZED = -1,
}

export function logLevel_LevelFromJSON(object: any): LogLevel_Level {
  switch (object) {
    case 0:
    case "LEVEL_UNSPECIFIED":
      return LogLevel_Level.LEVEL_UNSPECIFIED;
    case 1:
    case "TRACE":
      return LogLevel_Level.TRACE;
    case 2:
    case "DEBUG":
      return LogLevel_Level.DEBUG;
    case 3:
    case "INFO":
      return LogLevel_Level.INFO;
    case 4:
    case "WARN":
      return LogLevel_Level.WARN;
    case 5:
    case "ERROR":
      return LogLevel_Level.ERROR;
    case 6:
    case "FATAL":
      return LogLevel_Level.FATAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LogLevel_Level.UNRECOGNIZED;
  }
}

export function logLevel_LevelToJSON(object: LogLevel_Level): string {
  switch (object) {
    case LogLevel_Level.LEVEL_UNSPECIFIED:
      return "LEVEL_UNSPECIFIED";
    case LogLevel_Level.TRACE:
      return "TRACE";
    case LogLevel_Level.DEBUG:
      return "DEBUG";
    case LogLevel_Level.INFO:
      return "INFO";
    case LogLevel_Level.WARN:
      return "WARN";
    case LogLevel_Level.ERROR:
      return "ERROR";
    case LogLevel_Level.FATAL:
      return "FATAL";
    default:
      return "UNKNOWN";
  }
}

const baseLogEntry: object = {
  $type: "yandex.cloud.logging.v1.LogEntry",
  uid: "",
  level: 0,
  message: "",
};

export const LogEntry = {
  $type: "yandex.cloud.logging.v1.LogEntry" as const,

  encode(
    message: LogEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.uid !== "") {
      writer.uint32(10).string(message.uid);
    }
    if (message.resource !== undefined) {
      LogEntryResource.encode(
        message.resource,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.ingestedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.ingestedAt),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.savedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.savedAt),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.level !== 0) {
      writer.uint32(48).int32(message.level);
    }
    if (message.message !== "") {
      writer.uint32(58).string(message.message);
    }
    if (message.jsonPayload !== undefined) {
      Struct.encode(
        Struct.wrap(message.jsonPayload),
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLogEntry } as LogEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uid = reader.string();
          break;
        case 2:
          message.resource = LogEntryResource.decode(reader, reader.uint32());
          break;
        case 3:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.ingestedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.savedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.level = reader.int32() as any;
          break;
        case 7:
          message.message = reader.string();
          break;
        case 8:
          message.jsonPayload = Struct.unwrap(
            Struct.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LogEntry {
    const message = { ...baseLogEntry } as LogEntry;
    message.uid =
      object.uid !== undefined && object.uid !== null ? String(object.uid) : "";
    message.resource =
      object.resource !== undefined && object.resource !== null
        ? LogEntryResource.fromJSON(object.resource)
        : undefined;
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? fromJsonTimestamp(object.timestamp)
        : undefined;
    message.ingestedAt =
      object.ingestedAt !== undefined && object.ingestedAt !== null
        ? fromJsonTimestamp(object.ingestedAt)
        : undefined;
    message.savedAt =
      object.savedAt !== undefined && object.savedAt !== null
        ? fromJsonTimestamp(object.savedAt)
        : undefined;
    message.level =
      object.level !== undefined && object.level !== null
        ? logLevel_LevelFromJSON(object.level)
        : 0;
    message.message =
      object.message !== undefined && object.message !== null
        ? String(object.message)
        : "";
    message.jsonPayload =
      typeof object.jsonPayload === "object" ? object.jsonPayload : undefined;
    return message;
  },

  toJSON(message: LogEntry): unknown {
    const obj: any = {};
    message.uid !== undefined && (obj.uid = message.uid);
    message.resource !== undefined &&
      (obj.resource = message.resource
        ? LogEntryResource.toJSON(message.resource)
        : undefined);
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    message.ingestedAt !== undefined &&
      (obj.ingestedAt = message.ingestedAt.toISOString());
    message.savedAt !== undefined &&
      (obj.savedAt = message.savedAt.toISOString());
    message.level !== undefined &&
      (obj.level = logLevel_LevelToJSON(message.level));
    message.message !== undefined && (obj.message = message.message);
    message.jsonPayload !== undefined &&
      (obj.jsonPayload = message.jsonPayload);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogEntry>, I>>(object: I): LogEntry {
    const message = { ...baseLogEntry } as LogEntry;
    message.uid = object.uid ?? "";
    message.resource =
      object.resource !== undefined && object.resource !== null
        ? LogEntryResource.fromPartial(object.resource)
        : undefined;
    message.timestamp = object.timestamp ?? undefined;
    message.ingestedAt = object.ingestedAt ?? undefined;
    message.savedAt = object.savedAt ?? undefined;
    message.level = object.level ?? 0;
    message.message = object.message ?? "";
    message.jsonPayload = object.jsonPayload ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(LogEntry.$type, LogEntry);

const baseIncomingLogEntry: object = {
  $type: "yandex.cloud.logging.v1.IncomingLogEntry",
  level: 0,
  message: "",
};

export const IncomingLogEntry = {
  $type: "yandex.cloud.logging.v1.IncomingLogEntry" as const,

  encode(
    message: IncomingLogEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.level !== 0) {
      writer.uint32(16).int32(message.level);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    if (message.jsonPayload !== undefined) {
      Struct.encode(
        Struct.wrap(message.jsonPayload),
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IncomingLogEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIncomingLogEntry } as IncomingLogEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.level = reader.int32() as any;
          break;
        case 3:
          message.message = reader.string();
          break;
        case 4:
          message.jsonPayload = Struct.unwrap(
            Struct.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IncomingLogEntry {
    const message = { ...baseIncomingLogEntry } as IncomingLogEntry;
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? fromJsonTimestamp(object.timestamp)
        : undefined;
    message.level =
      object.level !== undefined && object.level !== null
        ? logLevel_LevelFromJSON(object.level)
        : 0;
    message.message =
      object.message !== undefined && object.message !== null
        ? String(object.message)
        : "";
    message.jsonPayload =
      typeof object.jsonPayload === "object" ? object.jsonPayload : undefined;
    return message;
  },

  toJSON(message: IncomingLogEntry): unknown {
    const obj: any = {};
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    message.level !== undefined &&
      (obj.level = logLevel_LevelToJSON(message.level));
    message.message !== undefined && (obj.message = message.message);
    message.jsonPayload !== undefined &&
      (obj.jsonPayload = message.jsonPayload);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IncomingLogEntry>, I>>(
    object: I
  ): IncomingLogEntry {
    const message = { ...baseIncomingLogEntry } as IncomingLogEntry;
    message.timestamp = object.timestamp ?? undefined;
    message.level = object.level ?? 0;
    message.message = object.message ?? "";
    message.jsonPayload = object.jsonPayload ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(IncomingLogEntry.$type, IncomingLogEntry);

const baseLogEntryDefaults: object = {
  $type: "yandex.cloud.logging.v1.LogEntryDefaults",
  level: 0,
};

export const LogEntryDefaults = {
  $type: "yandex.cloud.logging.v1.LogEntryDefaults" as const,

  encode(
    message: LogEntryDefaults,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.level !== 0) {
      writer.uint32(16).int32(message.level);
    }
    if (message.jsonPayload !== undefined) {
      Struct.encode(
        Struct.wrap(message.jsonPayload),
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogEntryDefaults {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLogEntryDefaults } as LogEntryDefaults;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.level = reader.int32() as any;
          break;
        case 4:
          message.jsonPayload = Struct.unwrap(
            Struct.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LogEntryDefaults {
    const message = { ...baseLogEntryDefaults } as LogEntryDefaults;
    message.level =
      object.level !== undefined && object.level !== null
        ? logLevel_LevelFromJSON(object.level)
        : 0;
    message.jsonPayload =
      typeof object.jsonPayload === "object" ? object.jsonPayload : undefined;
    return message;
  },

  toJSON(message: LogEntryDefaults): unknown {
    const obj: any = {};
    message.level !== undefined &&
      (obj.level = logLevel_LevelToJSON(message.level));
    message.jsonPayload !== undefined &&
      (obj.jsonPayload = message.jsonPayload);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogEntryDefaults>, I>>(
    object: I
  ): LogEntryDefaults {
    const message = { ...baseLogEntryDefaults } as LogEntryDefaults;
    message.level = object.level ?? 0;
    message.jsonPayload = object.jsonPayload ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(LogEntryDefaults.$type, LogEntryDefaults);

const baseDestination: object = {
  $type: "yandex.cloud.logging.v1.Destination",
};

export const Destination = {
  $type: "yandex.cloud.logging.v1.Destination" as const,

  encode(
    message: Destination,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.logGroupId !== undefined) {
      writer.uint32(10).string(message.logGroupId);
    }
    if (message.folderId !== undefined) {
      writer.uint32(18).string(message.folderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Destination {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDestination } as Destination;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.logGroupId = reader.string();
          break;
        case 2:
          message.folderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Destination {
    const message = { ...baseDestination } as Destination;
    message.logGroupId =
      object.logGroupId !== undefined && object.logGroupId !== null
        ? String(object.logGroupId)
        : undefined;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : undefined;
    return message;
  },

  toJSON(message: Destination): unknown {
    const obj: any = {};
    message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Destination>, I>>(
    object: I
  ): Destination {
    const message = { ...baseDestination } as Destination;
    message.logGroupId = object.logGroupId ?? undefined;
    message.folderId = object.folderId ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Destination.$type, Destination);

const baseLogLevel: object = {
  $type: "yandex.cloud.logging.v1.LogLevel",
  level: 0,
};

export const LogLevel = {
  $type: "yandex.cloud.logging.v1.LogLevel" as const,

  encode(
    message: LogLevel,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.level !== 0) {
      writer.uint32(8).int32(message.level);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogLevel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLogLevel } as LogLevel;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.level = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LogLevel {
    const message = { ...baseLogLevel } as LogLevel;
    message.level =
      object.level !== undefined && object.level !== null
        ? logLevel_LevelFromJSON(object.level)
        : 0;
    return message;
  },

  toJSON(message: LogLevel): unknown {
    const obj: any = {};
    message.level !== undefined &&
      (obj.level = logLevel_LevelToJSON(message.level));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogLevel>, I>>(object: I): LogLevel {
    const message = { ...baseLogLevel } as LogLevel;
    message.level = object.level ?? 0;
    return message;
  },
};

messageTypeRegistry.set(LogLevel.$type, LogLevel);

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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
