/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.organizationmanager.v1";

export interface UserSshKey {
  $type: "yandex.cloud.organizationmanager.v1.UserSshKey";
  id: string;
  subjectId: string;
  data: string;
  name: string;
  fingerprint: string;
  organizationId: string;
  createdAt?: Date;
  /** Used for temporary keys, if empty the key doesn't expire */
  expiresAt?: Date;
}

const baseUserSshKey: object = {
  $type: "yandex.cloud.organizationmanager.v1.UserSshKey",
  id: "",
  subjectId: "",
  data: "",
  name: "",
  fingerprint: "",
  organizationId: "",
};

export const UserSshKey = {
  $type: "yandex.cloud.organizationmanager.v1.UserSshKey" as const,

  encode(
    message: UserSshKey,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.subjectId !== "") {
      writer.uint32(18).string(message.subjectId);
    }
    if (message.data !== "") {
      writer.uint32(26).string(message.data);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.fingerprint !== "") {
      writer.uint32(42).string(message.fingerprint);
    }
    if (message.organizationId !== "") {
      writer.uint32(50).string(message.organizationId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.expiresAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiresAt),
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSshKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserSshKey } as UserSshKey;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.subjectId = reader.string();
          break;
        case 3:
          message.data = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.fingerprint = reader.string();
          break;
        case 6:
          message.organizationId = reader.string();
          break;
        case 7:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.expiresAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserSshKey {
    const message = { ...baseUserSshKey } as UserSshKey;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.subjectId =
      object.subjectId !== undefined && object.subjectId !== null
        ? String(object.subjectId)
        : "";
    message.data =
      object.data !== undefined && object.data !== null
        ? String(object.data)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.fingerprint =
      object.fingerprint !== undefined && object.fingerprint !== null
        ? String(object.fingerprint)
        : "";
    message.organizationId =
      object.organizationId !== undefined && object.organizationId !== null
        ? String(object.organizationId)
        : "";
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.expiresAt =
      object.expiresAt !== undefined && object.expiresAt !== null
        ? fromJsonTimestamp(object.expiresAt)
        : undefined;
    return message;
  },

  toJSON(message: UserSshKey): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.subjectId !== undefined && (obj.subjectId = message.subjectId);
    message.data !== undefined && (obj.data = message.data);
    message.name !== undefined && (obj.name = message.name);
    message.fingerprint !== undefined &&
      (obj.fingerprint = message.fingerprint);
    message.organizationId !== undefined &&
      (obj.organizationId = message.organizationId);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.expiresAt !== undefined &&
      (obj.expiresAt = message.expiresAt.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserSshKey>, I>>(
    object: I
  ): UserSshKey {
    const message = { ...baseUserSshKey } as UserSshKey;
    message.id = object.id ?? "";
    message.subjectId = object.subjectId ?? "";
    message.data = object.data ?? "";
    message.name = object.name ?? "";
    message.fingerprint = object.fingerprint ?? "";
    message.organizationId = object.organizationId ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.expiresAt = object.expiresAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(UserSshKey.$type, UserSshKey);

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
