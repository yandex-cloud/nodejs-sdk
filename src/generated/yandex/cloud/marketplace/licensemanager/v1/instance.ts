/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Template } from "../../../../../yandex/cloud/marketplace/licensemanager/v1/template";
import { Timestamp } from "../../../../../google/protobuf/timestamp";
import { Lock } from "../../../../../yandex/cloud/marketplace/licensemanager/v1/lock";

export const protobufPackage = "yandex.cloud.marketplace.licensemanager.v1";

export interface Instance {
  $type: "yandex.cloud.marketplace.licensemanager.v1.Instance";
  id: string;
  cloudId: string;
  folderId: string;
  templateId: string;
  templateVersionId: string;
  description: string;
  startTime?: Date;
  endTime?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  state: Instance_State;
  locks: Lock[];
  licenseTemplate?: Template;
}

export enum Instance_State {
  STATE_UNSPECIFIED = 0,
  PENDING = 1,
  ACTIVE = 2,
  CANCELLED = 3,
  EXPIRED = 4,
  DEPRECATED = 5,
  DELETED = 6,
  UNRECOGNIZED = -1,
}

export function instance_StateFromJSON(object: any): Instance_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return Instance_State.STATE_UNSPECIFIED;
    case 1:
    case "PENDING":
      return Instance_State.PENDING;
    case 2:
    case "ACTIVE":
      return Instance_State.ACTIVE;
    case 3:
    case "CANCELLED":
      return Instance_State.CANCELLED;
    case 4:
    case "EXPIRED":
      return Instance_State.EXPIRED;
    case 5:
    case "DEPRECATED":
      return Instance_State.DEPRECATED;
    case 6:
    case "DELETED":
      return Instance_State.DELETED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Instance_State.UNRECOGNIZED;
  }
}

export function instance_StateToJSON(object: Instance_State): string {
  switch (object) {
    case Instance_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case Instance_State.PENDING:
      return "PENDING";
    case Instance_State.ACTIVE:
      return "ACTIVE";
    case Instance_State.CANCELLED:
      return "CANCELLED";
    case Instance_State.EXPIRED:
      return "EXPIRED";
    case Instance_State.DEPRECATED:
      return "DEPRECATED";
    case Instance_State.DELETED:
      return "DELETED";
    default:
      return "UNKNOWN";
  }
}

const baseInstance: object = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.Instance",
  id: "",
  cloudId: "",
  folderId: "",
  templateId: "",
  templateVersionId: "",
  description: "",
  state: 0,
};

export const Instance = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.Instance" as const,

  encode(
    message: Instance,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.cloudId !== "") {
      writer.uint32(18).string(message.cloudId);
    }
    if (message.folderId !== "") {
      writer.uint32(26).string(message.folderId);
    }
    if (message.templateId !== "") {
      writer.uint32(34).string(message.templateId);
    }
    if (message.templateVersionId !== "") {
      writer.uint32(42).string(message.templateVersionId);
    }
    if (message.description !== "") {
      writer.uint32(114).string(message.description);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(88).int32(message.state);
    }
    for (const v of message.locks) {
      Lock.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.licenseTemplate !== undefined) {
      Template.encode(
        message.licenseTemplate,
        writer.uint32(106).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Instance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInstance } as Instance;
    message.locks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.cloudId = reader.string();
          break;
        case 3:
          message.folderId = reader.string();
          break;
        case 4:
          message.templateId = reader.string();
          break;
        case 5:
          message.templateVersionId = reader.string();
          break;
        case 14:
          message.description = reader.string();
          break;
        case 7:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.endTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.updatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.state = reader.int32() as any;
          break;
        case 12:
          message.locks.push(Lock.decode(reader, reader.uint32()));
          break;
        case 13:
          message.licenseTemplate = Template.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Instance {
    const message = { ...baseInstance } as Instance;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.cloudId =
      object.cloudId !== undefined && object.cloudId !== null
        ? String(object.cloudId)
        : "";
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.templateId =
      object.templateId !== undefined && object.templateId !== null
        ? String(object.templateId)
        : "";
    message.templateVersionId =
      object.templateVersionId !== undefined &&
      object.templateVersionId !== null
        ? String(object.templateVersionId)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
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
        ? instance_StateFromJSON(object.state)
        : 0;
    message.locks = (object.locks ?? []).map((e: any) => Lock.fromJSON(e));
    message.licenseTemplate =
      object.licenseTemplate !== undefined && object.licenseTemplate !== null
        ? Template.fromJSON(object.licenseTemplate)
        : undefined;
    return message;
  },

  toJSON(message: Instance): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.cloudId !== undefined && (obj.cloudId = message.cloudId);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.templateId !== undefined && (obj.templateId = message.templateId);
    message.templateVersionId !== undefined &&
      (obj.templateVersionId = message.templateVersionId);
    message.description !== undefined &&
      (obj.description = message.description);
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined &&
      (obj.endTime = message.endTime.toISOString());
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    message.state !== undefined &&
      (obj.state = instance_StateToJSON(message.state));
    if (message.locks) {
      obj.locks = message.locks.map((e) => (e ? Lock.toJSON(e) : undefined));
    } else {
      obj.locks = [];
    }
    message.licenseTemplate !== undefined &&
      (obj.licenseTemplate = message.licenseTemplate
        ? Template.toJSON(message.licenseTemplate)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Instance>, I>>(object: I): Instance {
    const message = { ...baseInstance } as Instance;
    message.id = object.id ?? "";
    message.cloudId = object.cloudId ?? "";
    message.folderId = object.folderId ?? "";
    message.templateId = object.templateId ?? "";
    message.templateVersionId = object.templateVersionId ?? "";
    message.description = object.description ?? "";
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.state = object.state ?? 0;
    message.locks = object.locks?.map((e) => Lock.fromPartial(e)) || [];
    message.licenseTemplate =
      object.licenseTemplate !== undefined && object.licenseTemplate !== null
        ? Template.fromPartial(object.licenseTemplate)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Instance.$type, Instance);

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
