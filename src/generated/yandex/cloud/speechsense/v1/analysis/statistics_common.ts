/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.speechsense.v1.analysis";

export interface DescriptiveStatistics {
  $type: "yandex.cloud.speechsense.v1.analysis.DescriptiveStatistics";
  /** Minimum observed value */
  min: number;
  /** Maximum observed value */
  max: number;
  /** Estimated mean of distribution */
  mean: number;
  /** Estimated standard deviation of distribution */
  std: number;
  /** List of evaluated quantiles */
  quantiles: Quantile[];
}

export interface Quantile {
  $type: "yandex.cloud.speechsense.v1.analysis.Quantile";
  /** Quantile level in range (0, 1) */
  level: number;
  /** Quantile value */
  value: number;
}

export interface AudioSegmentBoundaries {
  $type: "yandex.cloud.speechsense.v1.analysis.AudioSegmentBoundaries";
  /** Audio segment start time */
  startTimeMs: number;
  /** Audio segment end time */
  endTimeMs: number;
  /** Duration in seconds */
  durationSeconds: number;
}

const baseDescriptiveStatistics: object = {
  $type: "yandex.cloud.speechsense.v1.analysis.DescriptiveStatistics",
  min: 0,
  max: 0,
  mean: 0,
  std: 0,
};

export const DescriptiveStatistics = {
  $type: "yandex.cloud.speechsense.v1.analysis.DescriptiveStatistics" as const,

  encode(
    message: DescriptiveStatistics,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.min !== 0) {
      writer.uint32(9).double(message.min);
    }
    if (message.max !== 0) {
      writer.uint32(17).double(message.max);
    }
    if (message.mean !== 0) {
      writer.uint32(25).double(message.mean);
    }
    if (message.std !== 0) {
      writer.uint32(33).double(message.std);
    }
    for (const v of message.quantiles) {
      Quantile.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DescriptiveStatistics {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDescriptiveStatistics } as DescriptiveStatistics;
    message.quantiles = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.min = reader.double();
          break;
        case 2:
          message.max = reader.double();
          break;
        case 3:
          message.mean = reader.double();
          break;
        case 4:
          message.std = reader.double();
          break;
        case 5:
          message.quantiles.push(Quantile.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DescriptiveStatistics {
    const message = { ...baseDescriptiveStatistics } as DescriptiveStatistics;
    message.min =
      object.min !== undefined && object.min !== null ? Number(object.min) : 0;
    message.max =
      object.max !== undefined && object.max !== null ? Number(object.max) : 0;
    message.mean =
      object.mean !== undefined && object.mean !== null
        ? Number(object.mean)
        : 0;
    message.std =
      object.std !== undefined && object.std !== null ? Number(object.std) : 0;
    message.quantiles = (object.quantiles ?? []).map((e: any) =>
      Quantile.fromJSON(e)
    );
    return message;
  },

  toJSON(message: DescriptiveStatistics): unknown {
    const obj: any = {};
    message.min !== undefined && (obj.min = message.min);
    message.max !== undefined && (obj.max = message.max);
    message.mean !== undefined && (obj.mean = message.mean);
    message.std !== undefined && (obj.std = message.std);
    if (message.quantiles) {
      obj.quantiles = message.quantiles.map((e) =>
        e ? Quantile.toJSON(e) : undefined
      );
    } else {
      obj.quantiles = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DescriptiveStatistics>, I>>(
    object: I
  ): DescriptiveStatistics {
    const message = { ...baseDescriptiveStatistics } as DescriptiveStatistics;
    message.min = object.min ?? 0;
    message.max = object.max ?? 0;
    message.mean = object.mean ?? 0;
    message.std = object.std ?? 0;
    message.quantiles =
      object.quantiles?.map((e) => Quantile.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(DescriptiveStatistics.$type, DescriptiveStatistics);

const baseQuantile: object = {
  $type: "yandex.cloud.speechsense.v1.analysis.Quantile",
  level: 0,
  value: 0,
};

export const Quantile = {
  $type: "yandex.cloud.speechsense.v1.analysis.Quantile" as const,

  encode(
    message: Quantile,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.level !== 0) {
      writer.uint32(9).double(message.level);
    }
    if (message.value !== 0) {
      writer.uint32(17).double(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Quantile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuantile } as Quantile;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.level = reader.double();
          break;
        case 2:
          message.value = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Quantile {
    const message = { ...baseQuantile } as Quantile;
    message.level =
      object.level !== undefined && object.level !== null
        ? Number(object.level)
        : 0;
    message.value =
      object.value !== undefined && object.value !== null
        ? Number(object.value)
        : 0;
    return message;
  },

  toJSON(message: Quantile): unknown {
    const obj: any = {};
    message.level !== undefined && (obj.level = message.level);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Quantile>, I>>(object: I): Quantile {
    const message = { ...baseQuantile } as Quantile;
    message.level = object.level ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Quantile.$type, Quantile);

const baseAudioSegmentBoundaries: object = {
  $type: "yandex.cloud.speechsense.v1.analysis.AudioSegmentBoundaries",
  startTimeMs: 0,
  endTimeMs: 0,
  durationSeconds: 0,
};

export const AudioSegmentBoundaries = {
  $type: "yandex.cloud.speechsense.v1.analysis.AudioSegmentBoundaries" as const,

  encode(
    message: AudioSegmentBoundaries,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.startTimeMs !== 0) {
      writer.uint32(8).int64(message.startTimeMs);
    }
    if (message.endTimeMs !== 0) {
      writer.uint32(16).int64(message.endTimeMs);
    }
    if (message.durationSeconds !== 0) {
      writer.uint32(24).int64(message.durationSeconds);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AudioSegmentBoundaries {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAudioSegmentBoundaries } as AudioSegmentBoundaries;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startTimeMs = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.endTimeMs = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.durationSeconds = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AudioSegmentBoundaries {
    const message = { ...baseAudioSegmentBoundaries } as AudioSegmentBoundaries;
    message.startTimeMs =
      object.startTimeMs !== undefined && object.startTimeMs !== null
        ? Number(object.startTimeMs)
        : 0;
    message.endTimeMs =
      object.endTimeMs !== undefined && object.endTimeMs !== null
        ? Number(object.endTimeMs)
        : 0;
    message.durationSeconds =
      object.durationSeconds !== undefined && object.durationSeconds !== null
        ? Number(object.durationSeconds)
        : 0;
    return message;
  },

  toJSON(message: AudioSegmentBoundaries): unknown {
    const obj: any = {};
    message.startTimeMs !== undefined &&
      (obj.startTimeMs = Math.round(message.startTimeMs));
    message.endTimeMs !== undefined &&
      (obj.endTimeMs = Math.round(message.endTimeMs));
    message.durationSeconds !== undefined &&
      (obj.durationSeconds = Math.round(message.durationSeconds));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AudioSegmentBoundaries>, I>>(
    object: I
  ): AudioSegmentBoundaries {
    const message = { ...baseAudioSegmentBoundaries } as AudioSegmentBoundaries;
    message.startTimeMs = object.startTimeMs ?? 0;
    message.endTimeMs = object.endTimeMs ?? 0;
    message.durationSeconds = object.durationSeconds ?? 0;
    return message;
  },
};

messageTypeRegistry.set(AudioSegmentBoundaries.$type, AudioSegmentBoundaries);

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
