/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Duration } from "../../../../google/protobuf/duration";

export const protobufPackage = "yandex.cloud.compute.v1";

/** A snapshot schedule. For details about the concept, see [documentation](/docs/compute/concepts/snapshot-schedule). */
export interface SnapshotSchedule {
  $type: "yandex.cloud.compute.v1.SnapshotSchedule";
  /** ID of the snapshot schedule. */
  id: string;
  /** ID of the folder that the snapshot schedule belongs to. */
  folderId: string;
  /** Creation timestamp. */
  createdAt?: Date;
  /**
   * Name of the snapshot schedule.
   *
   * The name is unique within the folder.
   */
  name: string;
  /** Description of the snapshot schedule. */
  description: string;
  /** Snapshot schedule labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Status of the snapshot schedule. */
  status: SnapshotSchedule_Status;
  /** Frequency settings of the snapshot schedule. */
  schedulePolicy?: SchedulePolicy;
  /**
   * Retention period of the snapshot schedule. Once a snapshot created by the schedule reaches this age, it is
   * automatically deleted.
   */
  retentionPeriod?: Duration | undefined;
  /**
   * Retention count of the snapshot schedule. Once the number of snapshots created by the schedule exceeds this
   * number, the oldest ones are automatically deleted. E.g. if the number is 5, the first snapshot is deleted
   * after the sixth one is created, the second is deleted after the seventh one is created, and so on.
   */
  snapshotCount: number | undefined;
  /** Attributes of snapshots created by the snapshot schedule. */
  snapshotSpec?: SnapshotSpec;
}

export enum SnapshotSchedule_Status {
  STATUS_UNSPECIFIED = 0,
  /** CREATING - The snapshot schedule is being created. */
  CREATING = 1,
  /**
   * ACTIVE - The snapshot schedule is on: new disk snapshots will be created, old ones deleted
   * (if [SnapshotSchedule.retention_policy] is specified).
   */
  ACTIVE = 2,
  /** INACTIVE - The schedule is interrupted, snapshots won't be created or deleted. */
  INACTIVE = 3,
  /** DELETING - The schedule is being deleted. */
  DELETING = 4,
  /** UPDATING - Changes are being made to snapshot schedule settings or a list of attached disks. */
  UPDATING = 5,
  UNRECOGNIZED = -1,
}

export function snapshotSchedule_StatusFromJSON(
  object: any
): SnapshotSchedule_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return SnapshotSchedule_Status.STATUS_UNSPECIFIED;
    case 1:
    case "CREATING":
      return SnapshotSchedule_Status.CREATING;
    case 2:
    case "ACTIVE":
      return SnapshotSchedule_Status.ACTIVE;
    case 3:
    case "INACTIVE":
      return SnapshotSchedule_Status.INACTIVE;
    case 4:
    case "DELETING":
      return SnapshotSchedule_Status.DELETING;
    case 5:
    case "UPDATING":
      return SnapshotSchedule_Status.UPDATING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SnapshotSchedule_Status.UNRECOGNIZED;
  }
}

export function snapshotSchedule_StatusToJSON(
  object: SnapshotSchedule_Status
): string {
  switch (object) {
    case SnapshotSchedule_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case SnapshotSchedule_Status.CREATING:
      return "CREATING";
    case SnapshotSchedule_Status.ACTIVE:
      return "ACTIVE";
    case SnapshotSchedule_Status.INACTIVE:
      return "INACTIVE";
    case SnapshotSchedule_Status.DELETING:
      return "DELETING";
    case SnapshotSchedule_Status.UPDATING:
      return "UPDATING";
    default:
      return "UNKNOWN";
  }
}

export interface SnapshotSchedule_LabelsEntry {
  $type: "yandex.cloud.compute.v1.SnapshotSchedule.LabelsEntry";
  key: string;
  value: string;
}

/** A resource for frequency settings of a snapshot schedule. */
export interface SchedulePolicy {
  $type: "yandex.cloud.compute.v1.SchedulePolicy";
  /** Timestamp for creating the first snapshot. */
  startAt?: Date;
  /**
   * Cron expression for the snapshot schedule (UTC+0).
   *
   * The expression must consist of five fields (`Minutes Hours Day-of-month Month Day-of-week`) or be one of
   * nonstandard predefined expressions (e.g. `@hourly`). For details about the format,
   * see [documentation](/docs/compute/concepts/snapshot-schedule#cron)
   */
  expression: string;
}

/** A resource for attributes of snapshots created by the snapshot schedule. */
export interface SnapshotSpec {
  $type: "yandex.cloud.compute.v1.SnapshotSpec";
  /** Description of the created snapshot. */
  description: string;
  /** Snapshot labels as `key:value` pairs. */
  labels: { [key: string]: string };
}

export interface SnapshotSpec_LabelsEntry {
  $type: "yandex.cloud.compute.v1.SnapshotSpec.LabelsEntry";
  key: string;
  value: string;
}

const baseSnapshotSchedule: object = {
  $type: "yandex.cloud.compute.v1.SnapshotSchedule",
  id: "",
  folderId: "",
  name: "",
  description: "",
  status: 0,
};

export const SnapshotSchedule = {
  $type: "yandex.cloud.compute.v1.SnapshotSchedule" as const,

  encode(
    message: SnapshotSchedule,
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
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      SnapshotSchedule_LabelsEntry.encode(
        {
          $type: "yandex.cloud.compute.v1.SnapshotSchedule.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
      ).ldelim();
    });
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.schedulePolicy !== undefined) {
      SchedulePolicy.encode(
        message.schedulePolicy,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.retentionPeriod !== undefined) {
      Duration.encode(
        message.retentionPeriod,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.snapshotCount !== undefined) {
      writer.uint32(80).int64(message.snapshotCount);
    }
    if (message.snapshotSpec !== undefined) {
      SnapshotSpec.encode(
        message.snapshotSpec,
        writer.uint32(90).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotSchedule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSnapshotSchedule } as SnapshotSchedule;
    message.labels = {};
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
          message.name = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          const entry6 = SnapshotSchedule_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.status = reader.int32() as any;
          break;
        case 8:
          message.schedulePolicy = SchedulePolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.retentionPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 10:
          message.snapshotCount = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.snapshotSpec = SnapshotSpec.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SnapshotSchedule {
    const message = { ...baseSnapshotSchedule } as SnapshotSchedule;
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
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.status =
      object.status !== undefined && object.status !== null
        ? snapshotSchedule_StatusFromJSON(object.status)
        : 0;
    message.schedulePolicy =
      object.schedulePolicy !== undefined && object.schedulePolicy !== null
        ? SchedulePolicy.fromJSON(object.schedulePolicy)
        : undefined;
    message.retentionPeriod =
      object.retentionPeriod !== undefined && object.retentionPeriod !== null
        ? Duration.fromJSON(object.retentionPeriod)
        : undefined;
    message.snapshotCount =
      object.snapshotCount !== undefined && object.snapshotCount !== null
        ? Number(object.snapshotCount)
        : undefined;
    message.snapshotSpec =
      object.snapshotSpec !== undefined && object.snapshotSpec !== null
        ? SnapshotSpec.fromJSON(object.snapshotSpec)
        : undefined;
    return message;
  },

  toJSON(message: SnapshotSchedule): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.status !== undefined &&
      (obj.status = snapshotSchedule_StatusToJSON(message.status));
    message.schedulePolicy !== undefined &&
      (obj.schedulePolicy = message.schedulePolicy
        ? SchedulePolicy.toJSON(message.schedulePolicy)
        : undefined);
    message.retentionPeriod !== undefined &&
      (obj.retentionPeriod = message.retentionPeriod
        ? Duration.toJSON(message.retentionPeriod)
        : undefined);
    message.snapshotCount !== undefined &&
      (obj.snapshotCount = Math.round(message.snapshotCount));
    message.snapshotSpec !== undefined &&
      (obj.snapshotSpec = message.snapshotSpec
        ? SnapshotSpec.toJSON(message.snapshotSpec)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SnapshotSchedule>, I>>(
    object: I
  ): SnapshotSchedule {
    const message = { ...baseSnapshotSchedule } as SnapshotSchedule;
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.status = object.status ?? 0;
    message.schedulePolicy =
      object.schedulePolicy !== undefined && object.schedulePolicy !== null
        ? SchedulePolicy.fromPartial(object.schedulePolicy)
        : undefined;
    message.retentionPeriod =
      object.retentionPeriod !== undefined && object.retentionPeriod !== null
        ? Duration.fromPartial(object.retentionPeriod)
        : undefined;
    message.snapshotCount = object.snapshotCount ?? undefined;
    message.snapshotSpec =
      object.snapshotSpec !== undefined && object.snapshotSpec !== null
        ? SnapshotSpec.fromPartial(object.snapshotSpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(SnapshotSchedule.$type, SnapshotSchedule);

const baseSnapshotSchedule_LabelsEntry: object = {
  $type: "yandex.cloud.compute.v1.SnapshotSchedule.LabelsEntry",
  key: "",
  value: "",
};

export const SnapshotSchedule_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.SnapshotSchedule.LabelsEntry" as const,

  encode(
    message: SnapshotSchedule_LabelsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SnapshotSchedule_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSnapshotSchedule_LabelsEntry,
    } as SnapshotSchedule_LabelsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SnapshotSchedule_LabelsEntry {
    const message = {
      ...baseSnapshotSchedule_LabelsEntry,
    } as SnapshotSchedule_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: SnapshotSchedule_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SnapshotSchedule_LabelsEntry>, I>>(
    object: I
  ): SnapshotSchedule_LabelsEntry {
    const message = {
      ...baseSnapshotSchedule_LabelsEntry,
    } as SnapshotSchedule_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  SnapshotSchedule_LabelsEntry.$type,
  SnapshotSchedule_LabelsEntry
);

const baseSchedulePolicy: object = {
  $type: "yandex.cloud.compute.v1.SchedulePolicy",
  expression: "",
};

export const SchedulePolicy = {
  $type: "yandex.cloud.compute.v1.SchedulePolicy" as const,

  encode(
    message: SchedulePolicy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.startAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startAt),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.expression !== "") {
      writer.uint32(18).string(message.expression);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SchedulePolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSchedulePolicy } as SchedulePolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.expression = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SchedulePolicy {
    const message = { ...baseSchedulePolicy } as SchedulePolicy;
    message.startAt =
      object.startAt !== undefined && object.startAt !== null
        ? fromJsonTimestamp(object.startAt)
        : undefined;
    message.expression =
      object.expression !== undefined && object.expression !== null
        ? String(object.expression)
        : "";
    return message;
  },

  toJSON(message: SchedulePolicy): unknown {
    const obj: any = {};
    message.startAt !== undefined &&
      (obj.startAt = message.startAt.toISOString());
    message.expression !== undefined && (obj.expression = message.expression);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SchedulePolicy>, I>>(
    object: I
  ): SchedulePolicy {
    const message = { ...baseSchedulePolicy } as SchedulePolicy;
    message.startAt = object.startAt ?? undefined;
    message.expression = object.expression ?? "";
    return message;
  },
};

messageTypeRegistry.set(SchedulePolicy.$type, SchedulePolicy);

const baseSnapshotSpec: object = {
  $type: "yandex.cloud.compute.v1.SnapshotSpec",
  description: "",
};

export const SnapshotSpec = {
  $type: "yandex.cloud.compute.v1.SnapshotSpec" as const,

  encode(
    message: SnapshotSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      SnapshotSpec_LabelsEntry.encode(
        {
          $type: "yandex.cloud.compute.v1.SnapshotSpec.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(18).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSnapshotSpec } as SnapshotSpec;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = reader.string();
          break;
        case 2:
          const entry2 = SnapshotSpec_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry2.value !== undefined) {
            message.labels[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SnapshotSpec {
    const message = { ...baseSnapshotSpec } as SnapshotSpec;
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: SnapshotSpec): unknown {
    const obj: any = {};
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SnapshotSpec>, I>>(
    object: I
  ): SnapshotSpec {
    const message = { ...baseSnapshotSpec } as SnapshotSpec;
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(SnapshotSpec.$type, SnapshotSpec);

const baseSnapshotSpec_LabelsEntry: object = {
  $type: "yandex.cloud.compute.v1.SnapshotSpec.LabelsEntry",
  key: "",
  value: "",
};

export const SnapshotSpec_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.SnapshotSpec.LabelsEntry" as const,

  encode(
    message: SnapshotSpec_LabelsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SnapshotSpec_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSnapshotSpec_LabelsEntry,
    } as SnapshotSpec_LabelsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SnapshotSpec_LabelsEntry {
    const message = {
      ...baseSnapshotSpec_LabelsEntry,
    } as SnapshotSpec_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: SnapshotSpec_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SnapshotSpec_LabelsEntry>, I>>(
    object: I
  ): SnapshotSpec_LabelsEntry {
    const message = {
      ...baseSnapshotSpec_LabelsEntry,
    } as SnapshotSpec_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  SnapshotSpec_LabelsEntry.$type,
  SnapshotSpec_LabelsEntry
);

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
