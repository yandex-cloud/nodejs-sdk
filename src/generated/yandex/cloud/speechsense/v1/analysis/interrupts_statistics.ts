/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { AudioSegmentBoundaries } from "../../../../../yandex/cloud/speechsense/v1/analysis/statistics_common";

export const protobufPackage = "yandex.cloud.speechsense.v1.analysis";

export interface InterruptsStatistics {
  $type: "yandex.cloud.speechsense.v1.analysis.InterruptsStatistics";
  /** Interrupts description for every speaker */
  speakerInterrupts: InterruptsEvaluation[];
}

export interface InterruptsEvaluation {
  $type: "yandex.cloud.speechsense.v1.analysis.InterruptsEvaluation";
  /** Speaker tag */
  speakerTag: string;
  /** Number of interrupts made by the speaker */
  interruptsCount: number;
  /** Total duration of all interrupts */
  interruptsDurationMs: number;
  /** Boundaries for every interrupt */
  interrupts: AudioSegmentBoundaries[];
  /** Total duration of all interrupts in seconds */
  interruptsDurationSeconds: number;
}

const baseInterruptsStatistics: object = {
  $type: "yandex.cloud.speechsense.v1.analysis.InterruptsStatistics",
};

export const InterruptsStatistics = {
  $type: "yandex.cloud.speechsense.v1.analysis.InterruptsStatistics" as const,

  encode(
    message: InterruptsStatistics,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.speakerInterrupts) {
      InterruptsEvaluation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InterruptsStatistics {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInterruptsStatistics } as InterruptsStatistics;
    message.speakerInterrupts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.speakerInterrupts.push(
            InterruptsEvaluation.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InterruptsStatistics {
    const message = { ...baseInterruptsStatistics } as InterruptsStatistics;
    message.speakerInterrupts = (object.speakerInterrupts ?? []).map((e: any) =>
      InterruptsEvaluation.fromJSON(e)
    );
    return message;
  },

  toJSON(message: InterruptsStatistics): unknown {
    const obj: any = {};
    if (message.speakerInterrupts) {
      obj.speakerInterrupts = message.speakerInterrupts.map((e) =>
        e ? InterruptsEvaluation.toJSON(e) : undefined
      );
    } else {
      obj.speakerInterrupts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InterruptsStatistics>, I>>(
    object: I
  ): InterruptsStatistics {
    const message = { ...baseInterruptsStatistics } as InterruptsStatistics;
    message.speakerInterrupts =
      object.speakerInterrupts?.map((e) =>
        InterruptsEvaluation.fromPartial(e)
      ) || [];
    return message;
  },
};

messageTypeRegistry.set(InterruptsStatistics.$type, InterruptsStatistics);

const baseInterruptsEvaluation: object = {
  $type: "yandex.cloud.speechsense.v1.analysis.InterruptsEvaluation",
  speakerTag: "",
  interruptsCount: 0,
  interruptsDurationMs: 0,
  interruptsDurationSeconds: 0,
};

export const InterruptsEvaluation = {
  $type: "yandex.cloud.speechsense.v1.analysis.InterruptsEvaluation" as const,

  encode(
    message: InterruptsEvaluation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.speakerTag !== "") {
      writer.uint32(10).string(message.speakerTag);
    }
    if (message.interruptsCount !== 0) {
      writer.uint32(16).int64(message.interruptsCount);
    }
    if (message.interruptsDurationMs !== 0) {
      writer.uint32(24).int64(message.interruptsDurationMs);
    }
    for (const v of message.interrupts) {
      AudioSegmentBoundaries.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.interruptsDurationSeconds !== 0) {
      writer.uint32(40).int64(message.interruptsDurationSeconds);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InterruptsEvaluation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInterruptsEvaluation } as InterruptsEvaluation;
    message.interrupts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.speakerTag = reader.string();
          break;
        case 2:
          message.interruptsCount = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.interruptsDurationMs = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.interrupts.push(
            AudioSegmentBoundaries.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.interruptsDurationSeconds = longToNumber(
            reader.int64() as Long
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InterruptsEvaluation {
    const message = { ...baseInterruptsEvaluation } as InterruptsEvaluation;
    message.speakerTag =
      object.speakerTag !== undefined && object.speakerTag !== null
        ? String(object.speakerTag)
        : "";
    message.interruptsCount =
      object.interruptsCount !== undefined && object.interruptsCount !== null
        ? Number(object.interruptsCount)
        : 0;
    message.interruptsDurationMs =
      object.interruptsDurationMs !== undefined &&
      object.interruptsDurationMs !== null
        ? Number(object.interruptsDurationMs)
        : 0;
    message.interrupts = (object.interrupts ?? []).map((e: any) =>
      AudioSegmentBoundaries.fromJSON(e)
    );
    message.interruptsDurationSeconds =
      object.interruptsDurationSeconds !== undefined &&
      object.interruptsDurationSeconds !== null
        ? Number(object.interruptsDurationSeconds)
        : 0;
    return message;
  },

  toJSON(message: InterruptsEvaluation): unknown {
    const obj: any = {};
    message.speakerTag !== undefined && (obj.speakerTag = message.speakerTag);
    message.interruptsCount !== undefined &&
      (obj.interruptsCount = Math.round(message.interruptsCount));
    message.interruptsDurationMs !== undefined &&
      (obj.interruptsDurationMs = Math.round(message.interruptsDurationMs));
    if (message.interrupts) {
      obj.interrupts = message.interrupts.map((e) =>
        e ? AudioSegmentBoundaries.toJSON(e) : undefined
      );
    } else {
      obj.interrupts = [];
    }
    message.interruptsDurationSeconds !== undefined &&
      (obj.interruptsDurationSeconds = Math.round(
        message.interruptsDurationSeconds
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InterruptsEvaluation>, I>>(
    object: I
  ): InterruptsEvaluation {
    const message = { ...baseInterruptsEvaluation } as InterruptsEvaluation;
    message.speakerTag = object.speakerTag ?? "";
    message.interruptsCount = object.interruptsCount ?? 0;
    message.interruptsDurationMs = object.interruptsDurationMs ?? 0;
    message.interrupts =
      object.interrupts?.map((e) => AudioSegmentBoundaries.fromPartial(e)) ||
      [];
    message.interruptsDurationSeconds = object.interruptsDurationSeconds ?? 0;
    return message;
  },
};

messageTypeRegistry.set(InterruptsEvaluation.$type, InterruptsEvaluation);

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
