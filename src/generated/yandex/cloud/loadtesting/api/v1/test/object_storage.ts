/* eslint-disable */
import { messageTypeRegistry } from "../../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.loadtesting.api.v1.test";

/** Reference to a file stored in Object Storage. */
export interface ObjectStorage {
  $type: "yandex.cloud.loadtesting.api.v1.test.ObjectStorage";
  /** Bucket name. */
  bucket: string;
  /** File name. */
  name: string;
}

const baseObjectStorage: object = {
  $type: "yandex.cloud.loadtesting.api.v1.test.ObjectStorage",
  bucket: "",
  name: "",
};

export const ObjectStorage = {
  $type: "yandex.cloud.loadtesting.api.v1.test.ObjectStorage" as const,

  encode(
    message: ObjectStorage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bucket !== "") {
      writer.uint32(10).string(message.bucket);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectStorage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseObjectStorage } as ObjectStorage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bucket = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectStorage {
    const message = { ...baseObjectStorage } as ObjectStorage;
    message.bucket =
      object.bucket !== undefined && object.bucket !== null
        ? String(object.bucket)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: ObjectStorage): unknown {
    const obj: any = {};
    message.bucket !== undefined && (obj.bucket = message.bucket);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObjectStorage>, I>>(
    object: I
  ): ObjectStorage {
    const message = { ...baseObjectStorage } as ObjectStorage;
    message.bucket = object.bucket ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(ObjectStorage.$type, ObjectStorage);

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
