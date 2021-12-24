/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.resourcemanager.v1";

/** A Cloud resource. For more information, see [Cloud](/docs/resource-manager/concepts/resources-hierarchy#cloud). */
export interface Cloud {
  $type: "yandex.cloud.resourcemanager.v1.Cloud";
  /** ID of the cloud. */
  id: string;
  /** Creation timestamp. */
  createdAt?: Date;
  /** Name of the cloud. 3-63 characters long. */
  name: string;
  /** Description of the cloud. 0-256 characters long. */
  description: string;
  /** ID of the organization that the cloud belongs to. */
  organizationId: string;
  /** Resource labels as `` key:value `` pairs. Maximum of 64 per resource. */
  labels: { [key: string]: string };
}

export interface Cloud_LabelsEntry {
  $type: "yandex.cloud.resourcemanager.v1.Cloud.LabelsEntry";
  key: string;
  value: string;
}

const baseCloud: object = {
  $type: "yandex.cloud.resourcemanager.v1.Cloud",
  id: "",
  name: "",
  description: "",
  organizationId: "",
};

export const Cloud = {
  $type: "yandex.cloud.resourcemanager.v1.Cloud" as const,

  encode(message: Cloud, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.organizationId !== "") {
      writer.uint32(50).string(message.organizationId);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Cloud_LabelsEntry.encode(
        {
          $type: "yandex.cloud.resourcemanager.v1.Cloud.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(58).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Cloud {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCloud } as Cloud;
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
        case 6:
          message.organizationId = reader.string();
          break;
        case 7:
          const entry7 = Cloud_LabelsEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.labels[entry7.key] = entry7.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Cloud {
    const message = { ...baseCloud } as Cloud;
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
    message.organizationId =
      object.organizationId !== undefined && object.organizationId !== null
        ? String(object.organizationId)
        : "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: Cloud): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.organizationId !== undefined &&
      (obj.organizationId = message.organizationId);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Cloud>, I>>(object: I): Cloud {
    const message = { ...baseCloud } as Cloud;
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.organizationId = object.organizationId ?? "";
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

messageTypeRegistry.set(Cloud.$type, Cloud);

const baseCloud_LabelsEntry: object = {
  $type: "yandex.cloud.resourcemanager.v1.Cloud.LabelsEntry",
  key: "",
  value: "",
};

export const Cloud_LabelsEntry = {
  $type: "yandex.cloud.resourcemanager.v1.Cloud.LabelsEntry" as const,

  encode(
    message: Cloud_LabelsEntry,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Cloud_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCloud_LabelsEntry } as Cloud_LabelsEntry;
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

  fromJSON(object: any): Cloud_LabelsEntry {
    const message = { ...baseCloud_LabelsEntry } as Cloud_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Cloud_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Cloud_LabelsEntry>, I>>(
    object: I
  ): Cloud_LabelsEntry {
    const message = { ...baseCloud_LabelsEntry } as Cloud_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Cloud_LabelsEntry.$type, Cloud_LabelsEntry);

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
