/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { DescriptiveStatistics } from "../../../../../yandex/cloud/speechsense/v1/analysis/statistics_common";

export const protobufPackage = "yandex.cloud.speechsense.v1.analysis";

export interface SpeechStatistics {
  $type: "yandex.cloud.speechsense.v1.analysis.SpeechStatistics";
  /** Total simultaneous speech duration in seconds */
  totalSimultaneousSpeechDurationSeconds: number;
  /** Total simultaneous speech duration in ms */
  totalSimultaneousSpeechDurationMs: number;
  /** Simultaneous speech ratio within audio segment */
  totalSimultaneousSpeechRatio: number;
  /** Descriptive statistics for simultaneous speech duration distribution */
  simultaneousSpeechDurationEstimation?: DescriptiveStatistics;
}

const baseSpeechStatistics: object = {
  $type: "yandex.cloud.speechsense.v1.analysis.SpeechStatistics",
  totalSimultaneousSpeechDurationSeconds: 0,
  totalSimultaneousSpeechDurationMs: 0,
  totalSimultaneousSpeechRatio: 0,
};

export const SpeechStatistics = {
  $type: "yandex.cloud.speechsense.v1.analysis.SpeechStatistics" as const,

  encode(
    message: SpeechStatistics,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.totalSimultaneousSpeechDurationSeconds !== 0) {
      writer.uint32(8).int64(message.totalSimultaneousSpeechDurationSeconds);
    }
    if (message.totalSimultaneousSpeechDurationMs !== 0) {
      writer.uint32(16).int64(message.totalSimultaneousSpeechDurationMs);
    }
    if (message.totalSimultaneousSpeechRatio !== 0) {
      writer.uint32(25).double(message.totalSimultaneousSpeechRatio);
    }
    if (message.simultaneousSpeechDurationEstimation !== undefined) {
      DescriptiveStatistics.encode(
        message.simultaneousSpeechDurationEstimation,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpeechStatistics {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSpeechStatistics } as SpeechStatistics;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalSimultaneousSpeechDurationSeconds = longToNumber(
            reader.int64() as Long
          );
          break;
        case 2:
          message.totalSimultaneousSpeechDurationMs = longToNumber(
            reader.int64() as Long
          );
          break;
        case 3:
          message.totalSimultaneousSpeechRatio = reader.double();
          break;
        case 4:
          message.simultaneousSpeechDurationEstimation =
            DescriptiveStatistics.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SpeechStatistics {
    const message = { ...baseSpeechStatistics } as SpeechStatistics;
    message.totalSimultaneousSpeechDurationSeconds =
      object.totalSimultaneousSpeechDurationSeconds !== undefined &&
      object.totalSimultaneousSpeechDurationSeconds !== null
        ? Number(object.totalSimultaneousSpeechDurationSeconds)
        : 0;
    message.totalSimultaneousSpeechDurationMs =
      object.totalSimultaneousSpeechDurationMs !== undefined &&
      object.totalSimultaneousSpeechDurationMs !== null
        ? Number(object.totalSimultaneousSpeechDurationMs)
        : 0;
    message.totalSimultaneousSpeechRatio =
      object.totalSimultaneousSpeechRatio !== undefined &&
      object.totalSimultaneousSpeechRatio !== null
        ? Number(object.totalSimultaneousSpeechRatio)
        : 0;
    message.simultaneousSpeechDurationEstimation =
      object.simultaneousSpeechDurationEstimation !== undefined &&
      object.simultaneousSpeechDurationEstimation !== null
        ? DescriptiveStatistics.fromJSON(
            object.simultaneousSpeechDurationEstimation
          )
        : undefined;
    return message;
  },

  toJSON(message: SpeechStatistics): unknown {
    const obj: any = {};
    message.totalSimultaneousSpeechDurationSeconds !== undefined &&
      (obj.totalSimultaneousSpeechDurationSeconds = Math.round(
        message.totalSimultaneousSpeechDurationSeconds
      ));
    message.totalSimultaneousSpeechDurationMs !== undefined &&
      (obj.totalSimultaneousSpeechDurationMs = Math.round(
        message.totalSimultaneousSpeechDurationMs
      ));
    message.totalSimultaneousSpeechRatio !== undefined &&
      (obj.totalSimultaneousSpeechRatio = message.totalSimultaneousSpeechRatio);
    message.simultaneousSpeechDurationEstimation !== undefined &&
      (obj.simultaneousSpeechDurationEstimation =
        message.simultaneousSpeechDurationEstimation
          ? DescriptiveStatistics.toJSON(
              message.simultaneousSpeechDurationEstimation
            )
          : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SpeechStatistics>, I>>(
    object: I
  ): SpeechStatistics {
    const message = { ...baseSpeechStatistics } as SpeechStatistics;
    message.totalSimultaneousSpeechDurationSeconds =
      object.totalSimultaneousSpeechDurationSeconds ?? 0;
    message.totalSimultaneousSpeechDurationMs =
      object.totalSimultaneousSpeechDurationMs ?? 0;
    message.totalSimultaneousSpeechRatio =
      object.totalSimultaneousSpeechRatio ?? 0;
    message.simultaneousSpeechDurationEstimation =
      object.simultaneousSpeechDurationEstimation !== undefined &&
      object.simultaneousSpeechDurationEstimation !== null
        ? DescriptiveStatistics.fromPartial(
            object.simultaneousSpeechDurationEstimation
          )
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(SpeechStatistics.$type, SpeechStatistics);

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
