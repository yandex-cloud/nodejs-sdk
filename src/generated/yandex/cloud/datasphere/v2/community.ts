/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.datasphere.v2";

export interface Community {
  $type: "yandex.cloud.datasphere.v2.Community";
  /** ID of the community. */
  id: string;
  /** Time when community was created. */
  createdAt?: Date;
  /** Name of the community. */
  name: string;
  /** Description of the comminuty. */
  description: string;
  /** Labels of the community. */
  labels: { [key: string]: string };
  /** ID of the user who created the community. */
  createdById: string;
  /** ID of the organization to which community belongs. */
  organizationId: string;
}

export interface Community_LabelsEntry {
  $type: "yandex.cloud.datasphere.v2.Community.LabelsEntry";
  key: string;
  value: string;
}

const baseCommunity: object = {
  $type: "yandex.cloud.datasphere.v2.Community",
  id: "",
  name: "",
  description: "",
  createdById: "",
  organizationId: "",
};

export const Community = {
  $type: "yandex.cloud.datasphere.v2.Community" as const,

  encode(
    message: Community,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Community_LabelsEntry.encode(
        {
          $type: "yandex.cloud.datasphere.v2.Community.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.createdById !== "") {
      writer.uint32(50).string(message.createdById);
    }
    if (message.organizationId !== "") {
      writer.uint32(82).string(message.organizationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Community {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommunity } as Community;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          const entry5 = Community_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.createdById = reader.string();
          break;
        case 10:
          message.organizationId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Community {
    const message = { ...baseCommunity } as Community;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
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
    message.createdById =
      object.createdById !== undefined && object.createdById !== null
        ? String(object.createdById)
        : "";
    message.organizationId =
      object.organizationId !== undefined && object.organizationId !== null
        ? String(object.organizationId)
        : "";
    return message;
  },

  toJSON(message: Community): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
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
    message.createdById !== undefined &&
      (obj.createdById = message.createdById);
    message.organizationId !== undefined &&
      (obj.organizationId = message.organizationId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Community>, I>>(
    object: I
  ): Community {
    const message = { ...baseCommunity } as Community;
    message.id = object.id ?? "";
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
    message.createdById = object.createdById ?? "";
    message.organizationId = object.organizationId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Community.$type, Community);

const baseCommunity_LabelsEntry: object = {
  $type: "yandex.cloud.datasphere.v2.Community.LabelsEntry",
  key: "",
  value: "",
};

export const Community_LabelsEntry = {
  $type: "yandex.cloud.datasphere.v2.Community.LabelsEntry" as const,

  encode(
    message: Community_LabelsEntry,
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
  ): Community_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommunity_LabelsEntry } as Community_LabelsEntry;
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

  fromJSON(object: any): Community_LabelsEntry {
    const message = { ...baseCommunity_LabelsEntry } as Community_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Community_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Community_LabelsEntry>, I>>(
    object: I
  ): Community_LabelsEntry {
    const message = { ...baseCommunity_LabelsEntry } as Community_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Community_LabelsEntry.$type, Community_LabelsEntry);

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
