/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.mdb.opensearch.v1";

/** A preset of resources for hardware configuration of the OpenSearch hosts. */
export interface ResourcePreset {
  $type: "yandex.cloud.mdb.opensearch.v1.ResourcePreset";
  /** ID of the resource preset. */
  id: string;
  /** IDs of the availability zones where the resource preset is available. */
  zoneIds: string[];
  /** Number of the CPU cores for an OpenSearch host created with the preset. */
  cores: number;
  /** RAM volume for an OpenSearch host created with the preset, in bytes. */
  memory: number;
}

const baseResourcePreset: object = {
  $type: "yandex.cloud.mdb.opensearch.v1.ResourcePreset",
  id: "",
  zoneIds: "",
  cores: 0,
  memory: 0,
};

export const ResourcePreset = {
  $type: "yandex.cloud.mdb.opensearch.v1.ResourcePreset" as const,

  encode(
    message: ResourcePreset,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.zoneIds) {
      writer.uint32(18).string(v!);
    }
    if (message.cores !== 0) {
      writer.uint32(24).int64(message.cores);
    }
    if (message.memory !== 0) {
      writer.uint32(32).int64(message.memory);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourcePreset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResourcePreset } as ResourcePreset;
    message.zoneIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.zoneIds.push(reader.string());
          break;
        case 3:
          message.cores = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.memory = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResourcePreset {
    const message = { ...baseResourcePreset } as ResourcePreset;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.zoneIds = (object.zoneIds ?? []).map((e: any) => String(e));
    message.cores =
      object.cores !== undefined && object.cores !== null
        ? Number(object.cores)
        : 0;
    message.memory =
      object.memory !== undefined && object.memory !== null
        ? Number(object.memory)
        : 0;
    return message;
  },

  toJSON(message: ResourcePreset): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.zoneIds) {
      obj.zoneIds = message.zoneIds.map((e) => e);
    } else {
      obj.zoneIds = [];
    }
    message.cores !== undefined && (obj.cores = Math.round(message.cores));
    message.memory !== undefined && (obj.memory = Math.round(message.memory));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResourcePreset>, I>>(
    object: I
  ): ResourcePreset {
    const message = { ...baseResourcePreset } as ResourcePreset;
    message.id = object.id ?? "";
    message.zoneIds = object.zoneIds?.map((e) => e) || [];
    message.cores = object.cores ?? 0;
    message.memory = object.memory ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ResourcePreset.$type, ResourcePreset);

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
