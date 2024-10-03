/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.mdb.mysql.v1";

/**
 * An object that represents MySQL backup.
 *
 * See [the documentation](/docs/managed-mysql/concepts/backup) for details.
 */
export interface Backup {
  $type: "yandex.cloud.mdb.mysql.v1.Backup";
  /** ID of the backup. */
  id: string;
  /** ID of the folder that the backup belongs to. */
  folderId: string;
  /** Creation timestamp (the time when the backup operation was completed). */
  createdAt?: Date;
  /** ID of the cluster that the backup was created for. */
  sourceClusterId: string;
  /** Start timestamp (the time when the backup operation was started). */
  startedAt?: Date;
  /** Size of backup, in bytes */
  size: number;
  /** How this backup was created (manual/automatic/etc...) */
  type: Backup_BackupCreationType;
  /** Status of backup */
  status: Backup_BackupStatus;
}

export enum Backup_BackupCreationType {
  BACKUP_CREATION_TYPE_UNSPECIFIED = 0,
  /** AUTOMATED - Backup created by automated daily schedule */
  AUTOMATED = 1,
  /** MANUAL - Backup created by user request */
  MANUAL = 2,
  UNRECOGNIZED = -1,
}

export function backup_BackupCreationTypeFromJSON(
  object: any
): Backup_BackupCreationType {
  switch (object) {
    case 0:
    case "BACKUP_CREATION_TYPE_UNSPECIFIED":
      return Backup_BackupCreationType.BACKUP_CREATION_TYPE_UNSPECIFIED;
    case 1:
    case "AUTOMATED":
      return Backup_BackupCreationType.AUTOMATED;
    case 2:
    case "MANUAL":
      return Backup_BackupCreationType.MANUAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Backup_BackupCreationType.UNRECOGNIZED;
  }
}

export function backup_BackupCreationTypeToJSON(
  object: Backup_BackupCreationType
): string {
  switch (object) {
    case Backup_BackupCreationType.BACKUP_CREATION_TYPE_UNSPECIFIED:
      return "BACKUP_CREATION_TYPE_UNSPECIFIED";
    case Backup_BackupCreationType.AUTOMATED:
      return "AUTOMATED";
    case Backup_BackupCreationType.MANUAL:
      return "MANUAL";
    default:
      return "UNKNOWN";
  }
}

export enum Backup_BackupStatus {
  BACKUP_STATUS_UNSPECIFIED = 0,
  /** DONE - Backup is done */
  DONE = 1,
  /** CREATING - Backup is creating */
  CREATING = 2,
  UNRECOGNIZED = -1,
}

export function backup_BackupStatusFromJSON(object: any): Backup_BackupStatus {
  switch (object) {
    case 0:
    case "BACKUP_STATUS_UNSPECIFIED":
      return Backup_BackupStatus.BACKUP_STATUS_UNSPECIFIED;
    case 1:
    case "DONE":
      return Backup_BackupStatus.DONE;
    case 2:
    case "CREATING":
      return Backup_BackupStatus.CREATING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Backup_BackupStatus.UNRECOGNIZED;
  }
}

export function backup_BackupStatusToJSON(object: Backup_BackupStatus): string {
  switch (object) {
    case Backup_BackupStatus.BACKUP_STATUS_UNSPECIFIED:
      return "BACKUP_STATUS_UNSPECIFIED";
    case Backup_BackupStatus.DONE:
      return "DONE";
    case Backup_BackupStatus.CREATING:
      return "CREATING";
    default:
      return "UNKNOWN";
  }
}

const baseBackup: object = {
  $type: "yandex.cloud.mdb.mysql.v1.Backup",
  id: "",
  folderId: "",
  sourceClusterId: "",
  size: 0,
  type: 0,
  status: 0,
};

export const Backup = {
  $type: "yandex.cloud.mdb.mysql.v1.Backup" as const,

  encode(
    message: Backup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.sourceClusterId !== "") {
      writer.uint32(34).string(message.sourceClusterId);
    }
    if (message.startedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startedAt),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.size !== 0) {
      writer.uint32(48).int64(message.size);
    }
    if (message.type !== 0) {
      writer.uint32(56).int32(message.type);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Backup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBackup } as Backup;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.folderId = reader.string();
          break;
        case 3:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.sourceClusterId = reader.string();
          break;
        case 5:
          message.startedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.size = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.type = reader.int32() as any;
          break;
        case 8:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Backup {
    const message = { ...baseBackup } as Backup;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.sourceClusterId =
      object.sourceClusterId !== undefined && object.sourceClusterId !== null
        ? String(object.sourceClusterId)
        : "";
    message.startedAt =
      object.startedAt !== undefined && object.startedAt !== null
        ? fromJsonTimestamp(object.startedAt)
        : undefined;
    message.size =
      object.size !== undefined && object.size !== null
        ? Number(object.size)
        : 0;
    message.type =
      object.type !== undefined && object.type !== null
        ? backup_BackupCreationTypeFromJSON(object.type)
        : 0;
    message.status =
      object.status !== undefined && object.status !== null
        ? backup_BackupStatusFromJSON(object.status)
        : 0;
    return message;
  },

  toJSON(message: Backup): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.sourceClusterId !== undefined &&
      (obj.sourceClusterId = message.sourceClusterId);
    message.startedAt !== undefined &&
      (obj.startedAt = message.startedAt.toISOString());
    message.size !== undefined && (obj.size = Math.round(message.size));
    message.type !== undefined &&
      (obj.type = backup_BackupCreationTypeToJSON(message.type));
    message.status !== undefined &&
      (obj.status = backup_BackupStatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Backup>, I>>(object: I): Backup {
    const message = { ...baseBackup } as Backup;
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.sourceClusterId = object.sourceClusterId ?? "";
    message.startedAt = object.startedAt ?? undefined;
    message.size = object.size ?? 0;
    message.type = object.type ?? 0;
    message.status = object.status ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Backup.$type, Backup);

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
