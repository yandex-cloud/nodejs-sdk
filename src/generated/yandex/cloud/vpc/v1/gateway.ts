/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.vpc.v1";

/** A Gateway resource. For more information, see [Gateway](/docs/vpc/concepts/gateways). */
export interface Gateway {
  $type: "yandex.cloud.vpc.v1.Gateway";
  /** ID of the gateway. Generated at creation time. */
  id: string;
  /** ID of the folder that the gateway belongs to. */
  folderId: string;
  /** Creation timestamp. */
  createdAt?: Date;
  /**
   * Name of the gateway.
   * The name is unique within the folder.
   */
  name: string;
  /** Description of the gateway. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  sharedEgressGateway?: SharedEgressGateway | undefined;
}

export interface Gateway_LabelsEntry {
  $type: "yandex.cloud.vpc.v1.Gateway.LabelsEntry";
  key: string;
  value: string;
}

/** Shared Egress Gateway configuration */
export interface SharedEgressGateway {
  $type: "yandex.cloud.vpc.v1.SharedEgressGateway";
}

const baseGateway: object = {
  $type: "yandex.cloud.vpc.v1.Gateway",
  id: "",
  folderId: "",
  name: "",
  description: "",
};

export const Gateway = {
  $type: "yandex.cloud.vpc.v1.Gateway" as const,

  encode(
    message: Gateway,
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
      Gateway_LabelsEntry.encode(
        {
          $type: "yandex.cloud.vpc.v1.Gateway.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
      ).ldelim();
    });
    if (message.sharedEgressGateway !== undefined) {
      SharedEgressGateway.encode(
        message.sharedEgressGateway,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Gateway {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGateway } as Gateway;
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
          const entry6 = Gateway_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.sharedEgressGateway = SharedEgressGateway.decode(
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

  fromJSON(object: any): Gateway {
    const message = { ...baseGateway } as Gateway;
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
    message.sharedEgressGateway =
      object.sharedEgressGateway !== undefined &&
      object.sharedEgressGateway !== null
        ? SharedEgressGateway.fromJSON(object.sharedEgressGateway)
        : undefined;
    return message;
  },

  toJSON(message: Gateway): unknown {
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
    message.sharedEgressGateway !== undefined &&
      (obj.sharedEgressGateway = message.sharedEgressGateway
        ? SharedEgressGateway.toJSON(message.sharedEgressGateway)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Gateway>, I>>(object: I): Gateway {
    const message = { ...baseGateway } as Gateway;
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
    message.sharedEgressGateway =
      object.sharedEgressGateway !== undefined &&
      object.sharedEgressGateway !== null
        ? SharedEgressGateway.fromPartial(object.sharedEgressGateway)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Gateway.$type, Gateway);

const baseGateway_LabelsEntry: object = {
  $type: "yandex.cloud.vpc.v1.Gateway.LabelsEntry",
  key: "",
  value: "",
};

export const Gateway_LabelsEntry = {
  $type: "yandex.cloud.vpc.v1.Gateway.LabelsEntry" as const,

  encode(
    message: Gateway_LabelsEntry,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Gateway_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGateway_LabelsEntry } as Gateway_LabelsEntry;
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

  fromJSON(object: any): Gateway_LabelsEntry {
    const message = { ...baseGateway_LabelsEntry } as Gateway_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Gateway_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Gateway_LabelsEntry>, I>>(
    object: I
  ): Gateway_LabelsEntry {
    const message = { ...baseGateway_LabelsEntry } as Gateway_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(Gateway_LabelsEntry.$type, Gateway_LabelsEntry);

const baseSharedEgressGateway: object = {
  $type: "yandex.cloud.vpc.v1.SharedEgressGateway",
};

export const SharedEgressGateway = {
  $type: "yandex.cloud.vpc.v1.SharedEgressGateway" as const,

  encode(
    _: SharedEgressGateway,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SharedEgressGateway {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSharedEgressGateway } as SharedEgressGateway;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): SharedEgressGateway {
    const message = { ...baseSharedEgressGateway } as SharedEgressGateway;
    return message;
  },

  toJSON(_: SharedEgressGateway): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SharedEgressGateway>, I>>(
    _: I
  ): SharedEgressGateway {
    const message = { ...baseSharedEgressGateway } as SharedEgressGateway;
    return message;
  },
};

messageTypeRegistry.set(SharedEgressGateway.$type, SharedEgressGateway);

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
