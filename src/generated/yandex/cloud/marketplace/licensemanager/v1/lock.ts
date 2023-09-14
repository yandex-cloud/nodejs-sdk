/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.marketplace.licensemanager.v1";

export interface Lock {
  $type: "yandex.cloud.marketplace.licensemanager.v1.Lock";
  id: string;
  instanceId: string;
  resourceId: string;
  startTime?: Date;
  endTime?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  state: Lock_State;
}

export enum Lock_State {
  STATE_UNSPECIFIED = 0,
  UNLOCKED = 1,
  LOCKED = 2,
  DELETED = 3,
  UNRECOGNIZED = -1,
}

export function lock_StateFromJSON(object: any): Lock_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return Lock_State.STATE_UNSPECIFIED;
    case 1:
    case "UNLOCKED":
      return Lock_State.UNLOCKED;
    case 2:
    case "LOCKED":
      return Lock_State.LOCKED;
    case 3:
    case "DELETED":
      return Lock_State.DELETED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Lock_State.UNRECOGNIZED;
  }
}

export function lock_StateToJSON(object: Lock_State): string {
  switch (object) {
    case Lock_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case Lock_State.UNLOCKED:
      return "UNLOCKED";
    case Lock_State.LOCKED:
      return "LOCKED";
    case Lock_State.DELETED:
      return "DELETED";
    default:
      return "UNKNOWN";
  }
}

const baseLock: object = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.Lock",
  id: "",
  instanceId: "",
  resourceId: "",
  state: 0,
};

export const Lock = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.Lock" as const,

  encode(message: Lock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.instanceId !== "") {
      writer.uint32(18).string(message.instanceId);
    }
    if (message.resourceId !== "") {
      writer.uint32(26).string(message.resourceId);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(64).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Lock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLock } as Lock;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.instanceId = reader.string();
          break;
        case 3:
          message.resourceId = reader.string();
          break;
        case 4:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.endTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.updatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Lock {
    const message = { ...baseLock } as Lock;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    message.resourceId =
      object.resourceId !== undefined && object.resourceId !== null
        ? String(object.resourceId)
        : "";
    message.startTime =
      object.startTime !== undefined && object.startTime !== null
        ? fromJsonTimestamp(object.startTime)
        : undefined;
    message.endTime =
      object.endTime !== undefined && object.endTime !== null
        ? fromJsonTimestamp(object.endTime)
        : undefined;
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.updatedAt =
      object.updatedAt !== undefined && object.updatedAt !== null
        ? fromJsonTimestamp(object.updatedAt)
        : undefined;
    message.state =
      object.state !== undefined && object.state !== null
        ? lock_StateFromJSON(object.state)
        : 0;
    return message;
  },

  toJSON(message: Lock): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    message.resourceId !== undefined && (obj.resourceId = message.resourceId);
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined &&
      (obj.endTime = message.endTime.toISOString());
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    message.state !== undefined &&
      (obj.state = lock_StateToJSON(message.state));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Lock>, I>>(object: I): Lock {
    const message = { ...baseLock } as Lock;
    message.id = object.id ?? "";
    message.instanceId = object.instanceId ?? "";
    message.resourceId = object.resourceId ?? "";
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.state = object.state ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Lock.$type, Lock);

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
