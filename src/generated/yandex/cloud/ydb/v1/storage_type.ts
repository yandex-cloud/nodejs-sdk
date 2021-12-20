/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.ydb.v1";

export interface StorageType {
  $type: "yandex.cloud.ydb.v1.StorageType";
  id: string;
  deviceType: string;
  redundancyType: string;
}

const baseStorageType: object = {
  $type: "yandex.cloud.ydb.v1.StorageType",
  id: "",
  deviceType: "",
  redundancyType: "",
};

export const StorageType = {
  $type: "yandex.cloud.ydb.v1.StorageType" as const,

  encode(
    message: StorageType,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.deviceType !== "") {
      writer.uint32(18).string(message.deviceType);
    }
    if (message.redundancyType !== "") {
      writer.uint32(26).string(message.redundancyType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StorageType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStorageType } as StorageType;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.deviceType = reader.string();
          break;
        case 3:
          message.redundancyType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StorageType {
    const message = { ...baseStorageType } as StorageType;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.deviceType =
      object.deviceType !== undefined && object.deviceType !== null
        ? String(object.deviceType)
        : "";
    message.redundancyType =
      object.redundancyType !== undefined && object.redundancyType !== null
        ? String(object.redundancyType)
        : "";
    return message;
  },

  toJSON(message: StorageType): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.deviceType !== undefined && (obj.deviceType = message.deviceType);
    message.redundancyType !== undefined &&
      (obj.redundancyType = message.redundancyType);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StorageType>, I>>(
    object: I
  ): StorageType {
    const message = { ...baseStorageType } as StorageType;
    message.id = object.id ?? "";
    message.deviceType = object.deviceType ?? "";
    message.redundancyType = object.redundancyType ?? "";
    return message;
  },
};

messageTypeRegistry.set(StorageType.$type, StorageType);

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
