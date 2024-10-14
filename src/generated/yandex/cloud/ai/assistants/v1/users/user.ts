/* eslint-disable */
import { messageTypeRegistry } from "../../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ExpirationConfig } from "../../../../../../yandex/cloud/ai/common/common";
import { Timestamp } from "../../../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.ai.assistants.v1.users";

export interface User {
  $type: "yandex.cloud.ai.assistants.v1.users.User";
  id: string;
  folderId: string;
  name: string;
  description: string;
  source: string;
  createdBy: string;
  createdAt?: Date;
  updatedBy: string;
  updatedAt?: Date;
  expirationConfig?: ExpirationConfig;
  expiresAt?: Date;
  labels: { [key: string]: string };
}

export interface User_LabelsEntry {
  $type: "yandex.cloud.ai.assistants.v1.users.User.LabelsEntry";
  key: string;
  value: string;
}

const baseUser: object = {
  $type: "yandex.cloud.ai.assistants.v1.users.User",
  id: "",
  folderId: "",
  name: "",
  description: "",
  source: "",
  createdBy: "",
  updatedBy: "",
};

export const User = {
  $type: "yandex.cloud.ai.assistants.v1.users.User" as const,

  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.source !== "") {
      writer.uint32(42).string(message.source);
    }
    if (message.createdBy !== "") {
      writer.uint32(50).string(message.createdBy);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.updatedBy !== "") {
      writer.uint32(66).string(message.updatedBy);
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.expirationConfig !== undefined) {
      ExpirationConfig.encode(
        message.expirationConfig,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.expiresAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiresAt),
        writer.uint32(90).fork()
      ).ldelim();
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      User_LabelsEntry.encode(
        {
          $type: "yandex.cloud.ai.assistants.v1.users.User.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(98).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUser } as User;
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
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.source = reader.string();
          break;
        case 6:
          message.createdBy = reader.string();
          break;
        case 7:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.updatedBy = reader.string();
          break;
        case 9:
          message.updatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.expirationConfig = ExpirationConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.expiresAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 12:
          const entry12 = User_LabelsEntry.decode(reader, reader.uint32());
          if (entry12.value !== undefined) {
            message.labels[entry12.key] = entry12.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): User {
    const message = { ...baseUser } as User;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.source =
      object.source !== undefined && object.source !== null
        ? String(object.source)
        : "";
    message.createdBy =
      object.createdBy !== undefined && object.createdBy !== null
        ? String(object.createdBy)
        : "";
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.updatedBy =
      object.updatedBy !== undefined && object.updatedBy !== null
        ? String(object.updatedBy)
        : "";
    message.updatedAt =
      object.updatedAt !== undefined && object.updatedAt !== null
        ? fromJsonTimestamp(object.updatedAt)
        : undefined;
    message.expirationConfig =
      object.expirationConfig !== undefined && object.expirationConfig !== null
        ? ExpirationConfig.fromJSON(object.expirationConfig)
        : undefined;
    message.expiresAt =
      object.expiresAt !== undefined && object.expiresAt !== null
        ? fromJsonTimestamp(object.expiresAt)
        : undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.source !== undefined && (obj.source = message.source);
    message.createdBy !== undefined && (obj.createdBy = message.createdBy);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.updatedBy !== undefined && (obj.updatedBy = message.updatedBy);
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    message.expirationConfig !== undefined &&
      (obj.expirationConfig = message.expirationConfig
        ? ExpirationConfig.toJSON(message.expirationConfig)
        : undefined);
    message.expiresAt !== undefined &&
      (obj.expiresAt = message.expiresAt.toISOString());
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = { ...baseUser } as User;
    message.id = object.id ?? "";
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.source = object.source ?? "";
    message.createdBy = object.createdBy ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.updatedBy = object.updatedBy ?? "";
    message.updatedAt = object.updatedAt ?? undefined;
    message.expirationConfig =
      object.expirationConfig !== undefined && object.expirationConfig !== null
        ? ExpirationConfig.fromPartial(object.expirationConfig)
        : undefined;
    message.expiresAt = object.expiresAt ?? undefined;
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

messageTypeRegistry.set(User.$type, User);

const baseUser_LabelsEntry: object = {
  $type: "yandex.cloud.ai.assistants.v1.users.User.LabelsEntry",
  key: "",
  value: "",
};

export const User_LabelsEntry = {
  $type: "yandex.cloud.ai.assistants.v1.users.User.LabelsEntry" as const,

  encode(
    message: User_LabelsEntry,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): User_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUser_LabelsEntry } as User_LabelsEntry;
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

  fromJSON(object: any): User_LabelsEntry {
    const message = { ...baseUser_LabelsEntry } as User_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: User_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<User_LabelsEntry>, I>>(
    object: I
  ): User_LabelsEntry {
    const message = { ...baseUser_LabelsEntry } as User_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(User_LabelsEntry.$type, User_LabelsEntry);

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
