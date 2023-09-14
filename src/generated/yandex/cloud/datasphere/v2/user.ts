/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.datasphere.v2";

export interface User {
  $type: "yandex.cloud.datasphere.v2.User";
  /** ID of the user. */
  id: string;
  /** Name of the user. */
  name: string;
  /** Email of the user. */
  email: string;
  /** URL to the user's profile picture. */
  picture: string;
  /** An image content of the user's profile picture. */
  pictureData: string;
}

const baseUser: object = {
  $type: "yandex.cloud.datasphere.v2.User",
  id: "",
  name: "",
  email: "",
  picture: "",
  pictureData: "",
};

export const User = {
  $type: "yandex.cloud.datasphere.v2.User" as const,

  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.picture !== "") {
      writer.uint32(34).string(message.picture);
    }
    if (message.pictureData !== "") {
      writer.uint32(42).string(message.pictureData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUser } as User;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.email = reader.string();
          break;
        case 4:
          message.picture = reader.string();
          break;
        case 5:
          message.pictureData = reader.string();
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
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.email =
      object.email !== undefined && object.email !== null
        ? String(object.email)
        : "";
    message.picture =
      object.picture !== undefined && object.picture !== null
        ? String(object.picture)
        : "";
    message.pictureData =
      object.pictureData !== undefined && object.pictureData !== null
        ? String(object.pictureData)
        : "";
    return message;
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.email !== undefined && (obj.email = message.email);
    message.picture !== undefined && (obj.picture = message.picture);
    message.pictureData !== undefined &&
      (obj.pictureData = message.pictureData);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = { ...baseUser } as User;
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.picture = object.picture ?? "";
    message.pictureData = object.pictureData ?? "";
    return message;
  },
};

messageTypeRegistry.set(User.$type, User);

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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
