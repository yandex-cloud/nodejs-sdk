/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.containerregistry.v1";

/** A Blob resource. */
export interface Blob {
  $type: "yandex.cloud.containerregistry.v1.Blob";
  /** Output only. ID of the blob. */
  id: string;
  /** Content-addressable identifier of the blob. */
  digest: string;
  /** Size of the blob, specified in bytes. */
  size: number;
  /** List of blob urls. */
  urls: string[];
}

const baseBlob: object = {
  $type: "yandex.cloud.containerregistry.v1.Blob",
  id: "",
  digest: "",
  size: 0,
  urls: "",
};

export const Blob = {
  $type: "yandex.cloud.containerregistry.v1.Blob" as const,

  encode(message: Blob, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.digest !== "") {
      writer.uint32(18).string(message.digest);
    }
    if (message.size !== 0) {
      writer.uint32(24).int64(message.size);
    }
    for (const v of message.urls) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Blob {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBlob } as Blob;
    message.urls = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.digest = reader.string();
          break;
        case 3:
          message.size = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.urls.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Blob {
    const message = { ...baseBlob } as Blob;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.digest =
      object.digest !== undefined && object.digest !== null
        ? String(object.digest)
        : "";
    message.size =
      object.size !== undefined && object.size !== null
        ? Number(object.size)
        : 0;
    message.urls = (object.urls ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: Blob): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.digest !== undefined && (obj.digest = message.digest);
    message.size !== undefined && (obj.size = Math.round(message.size));
    if (message.urls) {
      obj.urls = message.urls.map((e) => e);
    } else {
      obj.urls = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Blob>, I>>(object: I): Blob {
    const message = { ...baseBlob } as Blob;
    message.id = object.id ?? "";
    message.digest = object.digest ?? "";
    message.size = object.size ?? 0;
    message.urls = object.urls?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Blob.$type, Blob);

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
