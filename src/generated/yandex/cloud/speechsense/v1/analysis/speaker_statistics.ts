/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { UtteranceStatistics } from "../../../../../yandex/cloud/speechsense/v1/analysis/utterance_statistics";
import { DescriptiveStatistics } from "../../../../../yandex/cloud/speechsense/v1/analysis/statistics_common";

export const protobufPackage = "yandex.cloud.speechsense.v1.analysis";

export interface SpeakerStatistics {
  $type: "yandex.cloud.speechsense.v1.analysis.SpeakerStatistics";
  /** Speaker tag */
  speakerTag: string;
  /** analysis of all phrases in format of single utterance */
  completeStatistics?: UtteranceStatistics;
  /** Descriptive statistics for words per utterance distribution */
  wordsPerUtterance?: DescriptiveStatistics;
  /** Descriptive statistics for letters per utterance distribution */
  lettersPerUtterance?: DescriptiveStatistics;
  /** Number of utterances */
  utteranceCount: number;
  /** Descriptive statistics for utterance duration distribution */
  utteranceDurationEstimation?: DescriptiveStatistics;
}

const baseSpeakerStatistics: object = {
  $type: "yandex.cloud.speechsense.v1.analysis.SpeakerStatistics",
  speakerTag: "",
  utteranceCount: 0,
};

export const SpeakerStatistics = {
  $type: "yandex.cloud.speechsense.v1.analysis.SpeakerStatistics" as const,

  encode(
    message: SpeakerStatistics,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.speakerTag !== "") {
      writer.uint32(10).string(message.speakerTag);
    }
    if (message.completeStatistics !== undefined) {
      UtteranceStatistics.encode(
        message.completeStatistics,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.wordsPerUtterance !== undefined) {
      DescriptiveStatistics.encode(
        message.wordsPerUtterance,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.lettersPerUtterance !== undefined) {
      DescriptiveStatistics.encode(
        message.lettersPerUtterance,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.utteranceCount !== 0) {
      writer.uint32(40).int64(message.utteranceCount);
    }
    if (message.utteranceDurationEstimation !== undefined) {
      DescriptiveStatistics.encode(
        message.utteranceDurationEstimation,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpeakerStatistics {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSpeakerStatistics } as SpeakerStatistics;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.speakerTag = reader.string();
          break;
        case 2:
          message.completeStatistics = UtteranceStatistics.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.wordsPerUtterance = DescriptiveStatistics.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.lettersPerUtterance = DescriptiveStatistics.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.utteranceCount = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.utteranceDurationEstimation = DescriptiveStatistics.decode(
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

  fromJSON(object: any): SpeakerStatistics {
    const message = { ...baseSpeakerStatistics } as SpeakerStatistics;
    message.speakerTag =
      object.speakerTag !== undefined && object.speakerTag !== null
        ? String(object.speakerTag)
        : "";
    message.completeStatistics =
      object.completeStatistics !== undefined &&
      object.completeStatistics !== null
        ? UtteranceStatistics.fromJSON(object.completeStatistics)
        : undefined;
    message.wordsPerUtterance =
      object.wordsPerUtterance !== undefined &&
      object.wordsPerUtterance !== null
        ? DescriptiveStatistics.fromJSON(object.wordsPerUtterance)
        : undefined;
    message.lettersPerUtterance =
      object.lettersPerUtterance !== undefined &&
      object.lettersPerUtterance !== null
        ? DescriptiveStatistics.fromJSON(object.lettersPerUtterance)
        : undefined;
    message.utteranceCount =
      object.utteranceCount !== undefined && object.utteranceCount !== null
        ? Number(object.utteranceCount)
        : 0;
    message.utteranceDurationEstimation =
      object.utteranceDurationEstimation !== undefined &&
      object.utteranceDurationEstimation !== null
        ? DescriptiveStatistics.fromJSON(object.utteranceDurationEstimation)
        : undefined;
    return message;
  },

  toJSON(message: SpeakerStatistics): unknown {
    const obj: any = {};
    message.speakerTag !== undefined && (obj.speakerTag = message.speakerTag);
    message.completeStatistics !== undefined &&
      (obj.completeStatistics = message.completeStatistics
        ? UtteranceStatistics.toJSON(message.completeStatistics)
        : undefined);
    message.wordsPerUtterance !== undefined &&
      (obj.wordsPerUtterance = message.wordsPerUtterance
        ? DescriptiveStatistics.toJSON(message.wordsPerUtterance)
        : undefined);
    message.lettersPerUtterance !== undefined &&
      (obj.lettersPerUtterance = message.lettersPerUtterance
        ? DescriptiveStatistics.toJSON(message.lettersPerUtterance)
        : undefined);
    message.utteranceCount !== undefined &&
      (obj.utteranceCount = Math.round(message.utteranceCount));
    message.utteranceDurationEstimation !== undefined &&
      (obj.utteranceDurationEstimation = message.utteranceDurationEstimation
        ? DescriptiveStatistics.toJSON(message.utteranceDurationEstimation)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SpeakerStatistics>, I>>(
    object: I
  ): SpeakerStatistics {
    const message = { ...baseSpeakerStatistics } as SpeakerStatistics;
    message.speakerTag = object.speakerTag ?? "";
    message.completeStatistics =
      object.completeStatistics !== undefined &&
      object.completeStatistics !== null
        ? UtteranceStatistics.fromPartial(object.completeStatistics)
        : undefined;
    message.wordsPerUtterance =
      object.wordsPerUtterance !== undefined &&
      object.wordsPerUtterance !== null
        ? DescriptiveStatistics.fromPartial(object.wordsPerUtterance)
        : undefined;
    message.lettersPerUtterance =
      object.lettersPerUtterance !== undefined &&
      object.lettersPerUtterance !== null
        ? DescriptiveStatistics.fromPartial(object.lettersPerUtterance)
        : undefined;
    message.utteranceCount = object.utteranceCount ?? 0;
    message.utteranceDurationEstimation =
      object.utteranceDurationEstimation !== undefined &&
      object.utteranceDurationEstimation !== null
        ? DescriptiveStatistics.fromPartial(object.utteranceDurationEstimation)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(SpeakerStatistics.$type, SpeakerStatistics);

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
