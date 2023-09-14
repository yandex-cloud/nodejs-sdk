/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.backup.v1";

export interface Resource {
  $type: "yandex.cloud.backup.v1.Resource";
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
  createdAt?: Date;
  updatedAt?: Date;
  /** If this field is true, it means that instance is online. */
  online: boolean;
  /** If this field is true, it means that backup is enabled to instance. */
  enabled: boolean;
  status: Resource_Status;
  /**
   * If status value is one of `OTHER` or `FAILED`,
   * detailed info might be stored here.
   */
  statusDetails: string;
  /**
   * In case status is one of `BACKUPING` or `RECOVERING`,
   * progress value might be found here.
   */
  statusProgress: number;
  lastBackupTime?: Date;
  nextBackupTime?: Date;
  /** Resource ID is used to identify Compute Cloud instance in backup service. */
  resourceId: string;
  /**
   * Status `is_active` shows whether current Compute Cloud instance controls Cloud Backup resource.
   * If status `is_active` is false it means Compute Cloud instance is not able to manipulate
   * Cloud Backup resource.
   */
  isActive: boolean;
}

export enum Resource_Status {
  STATUS_UNSPECIFIED = 0,
  /** IDLE - Compute Cloud instance is doing nothing right now. */
  IDLE = 1,
  /** BACKUPING - Compute Cloud instance is currently backing up itself. */
  BACKUPING = 2,
  /** RECOVERING - Compute Cloud instance is currently recovering itself. */
  RECOVERING = 3,
  /**
   * FAILED - Compute Cloud instance is in failure state, check content of
   * `status_details` field for more information.
   */
  FAILED = 4,
  /**
   * OTHER - Unspecified state, check `status_details` field
   * for more information.
   */
  OTHER = 5,
  UNRECOGNIZED = -1,
}

export function resource_StatusFromJSON(object: any): Resource_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Resource_Status.STATUS_UNSPECIFIED;
    case 1:
    case "IDLE":
      return Resource_Status.IDLE;
    case 2:
    case "BACKUPING":
      return Resource_Status.BACKUPING;
    case 3:
    case "RECOVERING":
      return Resource_Status.RECOVERING;
    case 4:
    case "FAILED":
      return Resource_Status.FAILED;
    case 5:
    case "OTHER":
      return Resource_Status.OTHER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Resource_Status.UNRECOGNIZED;
  }
}

export function resource_StatusToJSON(object: Resource_Status): string {
  switch (object) {
    case Resource_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Resource_Status.IDLE:
      return "IDLE";
    case Resource_Status.BACKUPING:
      return "BACKUPING";
    case Resource_Status.RECOVERING:
      return "RECOVERING";
    case Resource_Status.FAILED:
      return "FAILED";
    case Resource_Status.OTHER:
      return "OTHER";
    default:
      return "UNKNOWN";
  }
}

export interface Progress {
  $type: "yandex.cloud.backup.v1.Progress";
  current: number;
  total: number;
}

export interface Task {
  $type: "yandex.cloud.backup.v1.Task";
  /** Task ID. */
  id: number;
  /**
   * Shows whether the task is cancellable.
   * Note: task cancellation is not supported yet.
   */
  cancellable: boolean;
  /** Policy ID. */
  policyId: string;
  /** Type of the task. */
  type: Task_Type;
  /** Task progress. */
  progress?: Progress;
  /** Task status. */
  status: Task_Status;
  enqueuedAt?: Date;
  startedAt?: Date;
  updatedAt?: Date;
  completedAt?: Date;
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
}

export enum Task_Type {
  TYPE_UNSPECIFIED = 0,
  BACKUP = 1,
  RETENTION = 2,
  RECOVERY = 3,
  UNRECOGNIZED = -1,
}

export function task_TypeFromJSON(object: any): Task_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Task_Type.TYPE_UNSPECIFIED;
    case 1:
    case "BACKUP":
      return Task_Type.BACKUP;
    case 2:
    case "RETENTION":
      return Task_Type.RETENTION;
    case 3:
    case "RECOVERY":
      return Task_Type.RECOVERY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Task_Type.UNRECOGNIZED;
  }
}

export function task_TypeToJSON(object: Task_Type): string {
  switch (object) {
    case Task_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case Task_Type.BACKUP:
      return "BACKUP";
    case Task_Type.RETENTION:
      return "RETENTION";
    case Task_Type.RECOVERY:
      return "RECOVERY";
    default:
      return "UNKNOWN";
  }
}

/** Status of task. */
export enum Task_Status {
  STATUS_UNSPECIFIED = 0,
  ENQUEUED = 1,
  ASSIGNED = 2,
  STARTED = 3,
  PAUSED = 4,
  COMPLETED = 5,
  UNRECOGNIZED = -1,
}

export function task_StatusFromJSON(object: any): Task_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Task_Status.STATUS_UNSPECIFIED;
    case 1:
    case "ENQUEUED":
      return Task_Status.ENQUEUED;
    case 2:
    case "ASSIGNED":
      return Task_Status.ASSIGNED;
    case 3:
    case "STARTED":
      return Task_Status.STARTED;
    case 4:
    case "PAUSED":
      return Task_Status.PAUSED;
    case 5:
    case "COMPLETED":
      return Task_Status.COMPLETED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Task_Status.UNRECOGNIZED;
  }
}

export function task_StatusToJSON(object: Task_Status): string {
  switch (object) {
    case Task_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Task_Status.ENQUEUED:
      return "ENQUEUED";
    case Task_Status.ASSIGNED:
      return "ASSIGNED";
    case Task_Status.STARTED:
      return "STARTED";
    case Task_Status.PAUSED:
      return "PAUSED";
    case Task_Status.COMPLETED:
      return "COMPLETED";
    default:
      return "UNKNOWN";
  }
}

const baseResource: object = {
  $type: "yandex.cloud.backup.v1.Resource",
  computeInstanceId: "",
  online: false,
  enabled: false,
  status: 0,
  statusDetails: "",
  statusProgress: 0,
  resourceId: "",
  isActive: false,
};

export const Resource = {
  $type: "yandex.cloud.backup.v1.Resource" as const,

  encode(
    message: Resource,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.online === true) {
      writer.uint32(32).bool(message.online);
    }
    if (message.enabled === true) {
      writer.uint32(40).bool(message.enabled);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.statusDetails !== "") {
      writer.uint32(58).string(message.statusDetails);
    }
    if (message.statusProgress !== 0) {
      writer.uint32(64).int64(message.statusProgress);
    }
    if (message.lastBackupTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastBackupTime),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.nextBackupTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.nextBackupTime),
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.resourceId !== "") {
      writer.uint32(90).string(message.resourceId);
    }
    if (message.isActive === true) {
      writer.uint32(96).bool(message.isActive);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResource } as Resource;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.computeInstanceId = reader.string();
          break;
        case 2:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.updatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.online = reader.bool();
          break;
        case 5:
          message.enabled = reader.bool();
          break;
        case 6:
          message.status = reader.int32() as any;
          break;
        case 7:
          message.statusDetails = reader.string();
          break;
        case 8:
          message.statusProgress = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.lastBackupTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.nextBackupTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.resourceId = reader.string();
          break;
        case 12:
          message.isActive = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Resource {
    const message = { ...baseResource } as Resource;
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : "";
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.updatedAt =
      object.updatedAt !== undefined && object.updatedAt !== null
        ? fromJsonTimestamp(object.updatedAt)
        : undefined;
    message.online =
      object.online !== undefined && object.online !== null
        ? Boolean(object.online)
        : false;
    message.enabled =
      object.enabled !== undefined && object.enabled !== null
        ? Boolean(object.enabled)
        : false;
    message.status =
      object.status !== undefined && object.status !== null
        ? resource_StatusFromJSON(object.status)
        : 0;
    message.statusDetails =
      object.statusDetails !== undefined && object.statusDetails !== null
        ? String(object.statusDetails)
        : "";
    message.statusProgress =
      object.statusProgress !== undefined && object.statusProgress !== null
        ? Number(object.statusProgress)
        : 0;
    message.lastBackupTime =
      object.lastBackupTime !== undefined && object.lastBackupTime !== null
        ? fromJsonTimestamp(object.lastBackupTime)
        : undefined;
    message.nextBackupTime =
      object.nextBackupTime !== undefined && object.nextBackupTime !== null
        ? fromJsonTimestamp(object.nextBackupTime)
        : undefined;
    message.resourceId =
      object.resourceId !== undefined && object.resourceId !== null
        ? String(object.resourceId)
        : "";
    message.isActive =
      object.isActive !== undefined && object.isActive !== null
        ? Boolean(object.isActive)
        : false;
    return message;
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    message.online !== undefined && (obj.online = message.online);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.status !== undefined &&
      (obj.status = resource_StatusToJSON(message.status));
    message.statusDetails !== undefined &&
      (obj.statusDetails = message.statusDetails);
    message.statusProgress !== undefined &&
      (obj.statusProgress = Math.round(message.statusProgress));
    message.lastBackupTime !== undefined &&
      (obj.lastBackupTime = message.lastBackupTime.toISOString());
    message.nextBackupTime !== undefined &&
      (obj.nextBackupTime = message.nextBackupTime.toISOString());
    message.resourceId !== undefined && (obj.resourceId = message.resourceId);
    message.isActive !== undefined && (obj.isActive = message.isActive);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Resource>, I>>(object: I): Resource {
    const message = { ...baseResource } as Resource;
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.online = object.online ?? false;
    message.enabled = object.enabled ?? false;
    message.status = object.status ?? 0;
    message.statusDetails = object.statusDetails ?? "";
    message.statusProgress = object.statusProgress ?? 0;
    message.lastBackupTime = object.lastBackupTime ?? undefined;
    message.nextBackupTime = object.nextBackupTime ?? undefined;
    message.resourceId = object.resourceId ?? "";
    message.isActive = object.isActive ?? false;
    return message;
  },
};

messageTypeRegistry.set(Resource.$type, Resource);

const baseProgress: object = {
  $type: "yandex.cloud.backup.v1.Progress",
  current: 0,
  total: 0,
};

export const Progress = {
  $type: "yandex.cloud.backup.v1.Progress" as const,

  encode(
    message: Progress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.current !== 0) {
      writer.uint32(8).int64(message.current);
    }
    if (message.total !== 0) {
      writer.uint32(16).int64(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Progress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProgress } as Progress;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.current = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.total = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Progress {
    const message = { ...baseProgress } as Progress;
    message.current =
      object.current !== undefined && object.current !== null
        ? Number(object.current)
        : 0;
    message.total =
      object.total !== undefined && object.total !== null
        ? Number(object.total)
        : 0;
    return message;
  },

  toJSON(message: Progress): unknown {
    const obj: any = {};
    message.current !== undefined &&
      (obj.current = Math.round(message.current));
    message.total !== undefined && (obj.total = Math.round(message.total));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Progress>, I>>(object: I): Progress {
    const message = { ...baseProgress } as Progress;
    message.current = object.current ?? 0;
    message.total = object.total ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Progress.$type, Progress);

const baseTask: object = {
  $type: "yandex.cloud.backup.v1.Task",
  id: 0,
  cancellable: false,
  policyId: "",
  type: 0,
  status: 0,
  computeInstanceId: "",
};

export const Task = {
  $type: "yandex.cloud.backup.v1.Task" as const,

  encode(message: Task, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.cancellable === true) {
      writer.uint32(16).bool(message.cancellable);
    }
    if (message.policyId !== "") {
      writer.uint32(26).string(message.policyId);
    }
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type);
    }
    if (message.progress !== undefined) {
      Progress.encode(message.progress, writer.uint32(42).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.enqueuedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.enqueuedAt),
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.startedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startedAt),
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.completedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.completedAt),
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.computeInstanceId !== "") {
      writer.uint32(90).string(message.computeInstanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Task {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTask } as Task;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.cancellable = reader.bool();
          break;
        case 3:
          message.policyId = reader.string();
          break;
        case 4:
          message.type = reader.int32() as any;
          break;
        case 5:
          message.progress = Progress.decode(reader, reader.uint32());
          break;
        case 6:
          message.status = reader.int32() as any;
          break;
        case 7:
          message.enqueuedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.startedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.updatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.completedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.computeInstanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Task {
    const message = { ...baseTask } as Task;
    message.id =
      object.id !== undefined && object.id !== null ? Number(object.id) : 0;
    message.cancellable =
      object.cancellable !== undefined && object.cancellable !== null
        ? Boolean(object.cancellable)
        : false;
    message.policyId =
      object.policyId !== undefined && object.policyId !== null
        ? String(object.policyId)
        : "";
    message.type =
      object.type !== undefined && object.type !== null
        ? task_TypeFromJSON(object.type)
        : 0;
    message.progress =
      object.progress !== undefined && object.progress !== null
        ? Progress.fromJSON(object.progress)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? task_StatusFromJSON(object.status)
        : 0;
    message.enqueuedAt =
      object.enqueuedAt !== undefined && object.enqueuedAt !== null
        ? fromJsonTimestamp(object.enqueuedAt)
        : undefined;
    message.startedAt =
      object.startedAt !== undefined && object.startedAt !== null
        ? fromJsonTimestamp(object.startedAt)
        : undefined;
    message.updatedAt =
      object.updatedAt !== undefined && object.updatedAt !== null
        ? fromJsonTimestamp(object.updatedAt)
        : undefined;
    message.completedAt =
      object.completedAt !== undefined && object.completedAt !== null
        ? fromJsonTimestamp(object.completedAt)
        : undefined;
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : "";
    return message;
  },

  toJSON(message: Task): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.cancellable !== undefined &&
      (obj.cancellable = message.cancellable);
    message.policyId !== undefined && (obj.policyId = message.policyId);
    message.type !== undefined && (obj.type = task_TypeToJSON(message.type));
    message.progress !== undefined &&
      (obj.progress = message.progress
        ? Progress.toJSON(message.progress)
        : undefined);
    message.status !== undefined &&
      (obj.status = task_StatusToJSON(message.status));
    message.enqueuedAt !== undefined &&
      (obj.enqueuedAt = message.enqueuedAt.toISOString());
    message.startedAt !== undefined &&
      (obj.startedAt = message.startedAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    message.completedAt !== undefined &&
      (obj.completedAt = message.completedAt.toISOString());
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Task>, I>>(object: I): Task {
    const message = { ...baseTask } as Task;
    message.id = object.id ?? 0;
    message.cancellable = object.cancellable ?? false;
    message.policyId = object.policyId ?? "";
    message.type = object.type ?? 0;
    message.progress =
      object.progress !== undefined && object.progress !== null
        ? Progress.fromPartial(object.progress)
        : undefined;
    message.status = object.status ?? 0;
    message.enqueuedAt = object.enqueuedAt ?? undefined;
    message.startedAt = object.startedAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.completedAt = object.completedAt ?? undefined;
    message.computeInstanceId = object.computeInstanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Task.$type, Task);

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
