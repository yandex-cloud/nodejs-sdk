/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Secret } from "../../../../../yandex/cloud/datatransfer/v1/endpoint/common";

export const protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";

export enum MetrikaStreamType {
  METRIKA_STREAM_TYPE_UNSPECIFIED = 0,
  METRIKA_STREAM_TYPE_HITS = 1,
  METRIKA_STREAM_TYPE_VISITS = 2,
  METRIKA_STREAM_TYPE_HITS_V2 = 3,
  UNRECOGNIZED = -1,
}

export function metrikaStreamTypeFromJSON(object: any): MetrikaStreamType {
  switch (object) {
    case 0:
    case "METRIKA_STREAM_TYPE_UNSPECIFIED":
      return MetrikaStreamType.METRIKA_STREAM_TYPE_UNSPECIFIED;
    case 1:
    case "METRIKA_STREAM_TYPE_HITS":
      return MetrikaStreamType.METRIKA_STREAM_TYPE_HITS;
    case 2:
    case "METRIKA_STREAM_TYPE_VISITS":
      return MetrikaStreamType.METRIKA_STREAM_TYPE_VISITS;
    case 3:
    case "METRIKA_STREAM_TYPE_HITS_V2":
      return MetrikaStreamType.METRIKA_STREAM_TYPE_HITS_V2;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MetrikaStreamType.UNRECOGNIZED;
  }
}

export function metrikaStreamTypeToJSON(object: MetrikaStreamType): string {
  switch (object) {
    case MetrikaStreamType.METRIKA_STREAM_TYPE_UNSPECIFIED:
      return "METRIKA_STREAM_TYPE_UNSPECIFIED";
    case MetrikaStreamType.METRIKA_STREAM_TYPE_HITS:
      return "METRIKA_STREAM_TYPE_HITS";
    case MetrikaStreamType.METRIKA_STREAM_TYPE_VISITS:
      return "METRIKA_STREAM_TYPE_VISITS";
    case MetrikaStreamType.METRIKA_STREAM_TYPE_HITS_V2:
      return "METRIKA_STREAM_TYPE_HITS_V2";
    default:
      return "UNKNOWN";
  }
}

export interface MetrikaStream {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MetrikaStream";
  type: MetrikaStreamType;
  columns: string[];
}

export interface MetrikaSource {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MetrikaSource";
  counterIds: number[];
  token?: Secret;
  streams: MetrikaStream[];
}

const baseMetrikaStream: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MetrikaStream",
  type: 0,
  columns: "",
};

export const MetrikaStream = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MetrikaStream" as const,

  encode(
    message: MetrikaStream,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    for (const v of message.columns) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MetrikaStream {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMetrikaStream } as MetrikaStream;
    message.columns = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.columns.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MetrikaStream {
    const message = { ...baseMetrikaStream } as MetrikaStream;
    message.type =
      object.type !== undefined && object.type !== null
        ? metrikaStreamTypeFromJSON(object.type)
        : 0;
    message.columns = (object.columns ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: MetrikaStream): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = metrikaStreamTypeToJSON(message.type));
    if (message.columns) {
      obj.columns = message.columns.map((e) => e);
    } else {
      obj.columns = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MetrikaStream>, I>>(
    object: I
  ): MetrikaStream {
    const message = { ...baseMetrikaStream } as MetrikaStream;
    message.type = object.type ?? 0;
    message.columns = object.columns?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(MetrikaStream.$type, MetrikaStream);

const baseMetrikaSource: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MetrikaSource",
  counterIds: 0,
};

export const MetrikaSource = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MetrikaSource" as const,

  encode(
    message: MetrikaSource,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.counterIds) {
      writer.int64(v);
    }
    writer.ldelim();
    if (message.token !== undefined) {
      Secret.encode(message.token, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.streams) {
      MetrikaStream.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MetrikaSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMetrikaSource } as MetrikaSource;
    message.counterIds = [];
    message.streams = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.counterIds.push(longToNumber(reader.int64() as Long));
            }
          } else {
            message.counterIds.push(longToNumber(reader.int64() as Long));
          }
          break;
        case 2:
          message.token = Secret.decode(reader, reader.uint32());
          break;
        case 3:
          message.streams.push(MetrikaStream.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MetrikaSource {
    const message = { ...baseMetrikaSource } as MetrikaSource;
    message.counterIds = (object.counterIds ?? []).map((e: any) => Number(e));
    message.token =
      object.token !== undefined && object.token !== null
        ? Secret.fromJSON(object.token)
        : undefined;
    message.streams = (object.streams ?? []).map((e: any) =>
      MetrikaStream.fromJSON(e)
    );
    return message;
  },

  toJSON(message: MetrikaSource): unknown {
    const obj: any = {};
    if (message.counterIds) {
      obj.counterIds = message.counterIds.map((e) => Math.round(e));
    } else {
      obj.counterIds = [];
    }
    message.token !== undefined &&
      (obj.token = message.token ? Secret.toJSON(message.token) : undefined);
    if (message.streams) {
      obj.streams = message.streams.map((e) =>
        e ? MetrikaStream.toJSON(e) : undefined
      );
    } else {
      obj.streams = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MetrikaSource>, I>>(
    object: I
  ): MetrikaSource {
    const message = { ...baseMetrikaSource } as MetrikaSource;
    message.counterIds = object.counterIds?.map((e) => e) || [];
    message.token =
      object.token !== undefined && object.token !== null
        ? Secret.fromPartial(object.token)
        : undefined;
    message.streams =
      object.streams?.map((e) => MetrikaStream.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(MetrikaSource.$type, MetrikaSource);

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
