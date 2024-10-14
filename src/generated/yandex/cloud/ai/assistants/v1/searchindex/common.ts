/* eslint-disable */
import { messageTypeRegistry } from "../../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.ai.assistants.v1.searchindex";

export interface StaticChunkingStrategy {
  $type: "yandex.cloud.ai.assistants.v1.searchindex.StaticChunkingStrategy";
  maxChunkSizeTokens: number;
  chunkOverlapTokens: number;
}

export interface ChunkingStrategy {
  $type: "yandex.cloud.ai.assistants.v1.searchindex.ChunkingStrategy";
  staticStrategy?: StaticChunkingStrategy | undefined;
}

const baseStaticChunkingStrategy: object = {
  $type: "yandex.cloud.ai.assistants.v1.searchindex.StaticChunkingStrategy",
  maxChunkSizeTokens: 0,
  chunkOverlapTokens: 0,
};

export const StaticChunkingStrategy = {
  $type:
    "yandex.cloud.ai.assistants.v1.searchindex.StaticChunkingStrategy" as const,

  encode(
    message: StaticChunkingStrategy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maxChunkSizeTokens !== 0) {
      writer.uint32(8).int64(message.maxChunkSizeTokens);
    }
    if (message.chunkOverlapTokens !== 0) {
      writer.uint32(16).int64(message.chunkOverlapTokens);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StaticChunkingStrategy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStaticChunkingStrategy } as StaticChunkingStrategy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxChunkSizeTokens = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.chunkOverlapTokens = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StaticChunkingStrategy {
    const message = { ...baseStaticChunkingStrategy } as StaticChunkingStrategy;
    message.maxChunkSizeTokens =
      object.maxChunkSizeTokens !== undefined &&
      object.maxChunkSizeTokens !== null
        ? Number(object.maxChunkSizeTokens)
        : 0;
    message.chunkOverlapTokens =
      object.chunkOverlapTokens !== undefined &&
      object.chunkOverlapTokens !== null
        ? Number(object.chunkOverlapTokens)
        : 0;
    return message;
  },

  toJSON(message: StaticChunkingStrategy): unknown {
    const obj: any = {};
    message.maxChunkSizeTokens !== undefined &&
      (obj.maxChunkSizeTokens = Math.round(message.maxChunkSizeTokens));
    message.chunkOverlapTokens !== undefined &&
      (obj.chunkOverlapTokens = Math.round(message.chunkOverlapTokens));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StaticChunkingStrategy>, I>>(
    object: I
  ): StaticChunkingStrategy {
    const message = { ...baseStaticChunkingStrategy } as StaticChunkingStrategy;
    message.maxChunkSizeTokens = object.maxChunkSizeTokens ?? 0;
    message.chunkOverlapTokens = object.chunkOverlapTokens ?? 0;
    return message;
  },
};

messageTypeRegistry.set(StaticChunkingStrategy.$type, StaticChunkingStrategy);

const baseChunkingStrategy: object = {
  $type: "yandex.cloud.ai.assistants.v1.searchindex.ChunkingStrategy",
};

export const ChunkingStrategy = {
  $type: "yandex.cloud.ai.assistants.v1.searchindex.ChunkingStrategy" as const,

  encode(
    message: ChunkingStrategy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.staticStrategy !== undefined) {
      StaticChunkingStrategy.encode(
        message.staticStrategy,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChunkingStrategy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChunkingStrategy } as ChunkingStrategy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staticStrategy = StaticChunkingStrategy.decode(
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

  fromJSON(object: any): ChunkingStrategy {
    const message = { ...baseChunkingStrategy } as ChunkingStrategy;
    message.staticStrategy =
      object.staticStrategy !== undefined && object.staticStrategy !== null
        ? StaticChunkingStrategy.fromJSON(object.staticStrategy)
        : undefined;
    return message;
  },

  toJSON(message: ChunkingStrategy): unknown {
    const obj: any = {};
    message.staticStrategy !== undefined &&
      (obj.staticStrategy = message.staticStrategy
        ? StaticChunkingStrategy.toJSON(message.staticStrategy)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChunkingStrategy>, I>>(
    object: I
  ): ChunkingStrategy {
    const message = { ...baseChunkingStrategy } as ChunkingStrategy;
    message.staticStrategy =
      object.staticStrategy !== undefined && object.staticStrategy !== null
        ? StaticChunkingStrategy.fromPartial(object.staticStrategy)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ChunkingStrategy.$type, ChunkingStrategy);

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
