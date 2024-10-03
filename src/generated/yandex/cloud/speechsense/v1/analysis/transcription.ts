/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { UtteranceStatistics } from "../../../../../yandex/cloud/speechsense/v1/analysis/utterance_statistics";
import { Timestamp } from "../../../../../google/protobuf/timestamp";
import { RecognitionClassifierResult } from "../../../../../yandex/cloud/speechsense/v1/analysis/predefined_classifiers";

export const protobufPackage = "yandex.cloud.speechsense.v1.analysis";

export interface Transcription {
  $type: "yandex.cloud.speechsense.v1.analysis.Transcription";
  phrases: Phrase[];
  /**
   * Their might be several algorithms that work on talk transcription. For example: speechkit and translator
   * So there might be other fields here for tracing
   */
  algorithmsMetadata: AlgorithmMetadata[];
}

export interface Phrase {
  $type: "yandex.cloud.speechsense.v1.analysis.Phrase";
  channelNumber: number;
  startTimeMs: number;
  endTimeMs: number;
  phrase?: PhraseText;
  statistics?: PhraseStatistics;
  classifiers: RecognitionClassifierResult[];
}

export interface PhraseText {
  $type: "yandex.cloud.speechsense.v1.analysis.PhraseText";
  text: string;
  language: string;
  normalizedText: string;
  words: Word[];
}

export interface Word {
  $type: "yandex.cloud.speechsense.v1.analysis.Word";
  word: string;
  startTimeMs: number;
  endTimeMs: number;
}

export interface AlgorithmMetadata {
  $type: "yandex.cloud.speechsense.v1.analysis.AlgorithmMetadata";
  createdTaskDate?: Date;
  completedTaskDate?: Date;
  error?: Error;
  traceId: string;
  name: string;
}

export interface Error {
  $type: "yandex.cloud.speechsense.v1.analysis.Error";
  code: string;
  message: string;
}

export interface PhraseStatistics {
  $type: "yandex.cloud.speechsense.v1.analysis.PhraseStatistics";
  statistics?: UtteranceStatistics;
}

const baseTranscription: object = {
  $type: "yandex.cloud.speechsense.v1.analysis.Transcription",
};

export const Transcription = {
  $type: "yandex.cloud.speechsense.v1.analysis.Transcription" as const,

  encode(
    message: Transcription,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.phrases) {
      Phrase.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.algorithmsMetadata) {
      AlgorithmMetadata.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transcription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTranscription } as Transcription;
    message.phrases = [];
    message.algorithmsMetadata = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.phrases.push(Phrase.decode(reader, reader.uint32()));
          break;
        case 2:
          message.algorithmsMetadata.push(
            AlgorithmMetadata.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Transcription {
    const message = { ...baseTranscription } as Transcription;
    message.phrases = (object.phrases ?? []).map((e: any) =>
      Phrase.fromJSON(e)
    );
    message.algorithmsMetadata = (object.algorithmsMetadata ?? []).map(
      (e: any) => AlgorithmMetadata.fromJSON(e)
    );
    return message;
  },

  toJSON(message: Transcription): unknown {
    const obj: any = {};
    if (message.phrases) {
      obj.phrases = message.phrases.map((e) =>
        e ? Phrase.toJSON(e) : undefined
      );
    } else {
      obj.phrases = [];
    }
    if (message.algorithmsMetadata) {
      obj.algorithmsMetadata = message.algorithmsMetadata.map((e) =>
        e ? AlgorithmMetadata.toJSON(e) : undefined
      );
    } else {
      obj.algorithmsMetadata = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Transcription>, I>>(
    object: I
  ): Transcription {
    const message = { ...baseTranscription } as Transcription;
    message.phrases = object.phrases?.map((e) => Phrase.fromPartial(e)) || [];
    message.algorithmsMetadata =
      object.algorithmsMetadata?.map((e) => AlgorithmMetadata.fromPartial(e)) ||
      [];
    return message;
  },
};

messageTypeRegistry.set(Transcription.$type, Transcription);

const basePhrase: object = {
  $type: "yandex.cloud.speechsense.v1.analysis.Phrase",
  channelNumber: 0,
  startTimeMs: 0,
  endTimeMs: 0,
};

export const Phrase = {
  $type: "yandex.cloud.speechsense.v1.analysis.Phrase" as const,

  encode(
    message: Phrase,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelNumber !== 0) {
      writer.uint32(8).int64(message.channelNumber);
    }
    if (message.startTimeMs !== 0) {
      writer.uint32(16).int64(message.startTimeMs);
    }
    if (message.endTimeMs !== 0) {
      writer.uint32(24).int64(message.endTimeMs);
    }
    if (message.phrase !== undefined) {
      PhraseText.encode(message.phrase, writer.uint32(34).fork()).ldelim();
    }
    if (message.statistics !== undefined) {
      PhraseStatistics.encode(
        message.statistics,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.classifiers) {
      RecognitionClassifierResult.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Phrase {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePhrase } as Phrase;
    message.classifiers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelNumber = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.startTimeMs = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.endTimeMs = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.phrase = PhraseText.decode(reader, reader.uint32());
          break;
        case 5:
          message.statistics = PhraseStatistics.decode(reader, reader.uint32());
          break;
        case 6:
          message.classifiers.push(
            RecognitionClassifierResult.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Phrase {
    const message = { ...basePhrase } as Phrase;
    message.channelNumber =
      object.channelNumber !== undefined && object.channelNumber !== null
        ? Number(object.channelNumber)
        : 0;
    message.startTimeMs =
      object.startTimeMs !== undefined && object.startTimeMs !== null
        ? Number(object.startTimeMs)
        : 0;
    message.endTimeMs =
      object.endTimeMs !== undefined && object.endTimeMs !== null
        ? Number(object.endTimeMs)
        : 0;
    message.phrase =
      object.phrase !== undefined && object.phrase !== null
        ? PhraseText.fromJSON(object.phrase)
        : undefined;
    message.statistics =
      object.statistics !== undefined && object.statistics !== null
        ? PhraseStatistics.fromJSON(object.statistics)
        : undefined;
    message.classifiers = (object.classifiers ?? []).map((e: any) =>
      RecognitionClassifierResult.fromJSON(e)
    );
    return message;
  },

  toJSON(message: Phrase): unknown {
    const obj: any = {};
    message.channelNumber !== undefined &&
      (obj.channelNumber = Math.round(message.channelNumber));
    message.startTimeMs !== undefined &&
      (obj.startTimeMs = Math.round(message.startTimeMs));
    message.endTimeMs !== undefined &&
      (obj.endTimeMs = Math.round(message.endTimeMs));
    message.phrase !== undefined &&
      (obj.phrase = message.phrase
        ? PhraseText.toJSON(message.phrase)
        : undefined);
    message.statistics !== undefined &&
      (obj.statistics = message.statistics
        ? PhraseStatistics.toJSON(message.statistics)
        : undefined);
    if (message.classifiers) {
      obj.classifiers = message.classifiers.map((e) =>
        e ? RecognitionClassifierResult.toJSON(e) : undefined
      );
    } else {
      obj.classifiers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Phrase>, I>>(object: I): Phrase {
    const message = { ...basePhrase } as Phrase;
    message.channelNumber = object.channelNumber ?? 0;
    message.startTimeMs = object.startTimeMs ?? 0;
    message.endTimeMs = object.endTimeMs ?? 0;
    message.phrase =
      object.phrase !== undefined && object.phrase !== null
        ? PhraseText.fromPartial(object.phrase)
        : undefined;
    message.statistics =
      object.statistics !== undefined && object.statistics !== null
        ? PhraseStatistics.fromPartial(object.statistics)
        : undefined;
    message.classifiers =
      object.classifiers?.map((e) =>
        RecognitionClassifierResult.fromPartial(e)
      ) || [];
    return message;
  },
};

messageTypeRegistry.set(Phrase.$type, Phrase);

const basePhraseText: object = {
  $type: "yandex.cloud.speechsense.v1.analysis.PhraseText",
  text: "",
  language: "",
  normalizedText: "",
};

export const PhraseText = {
  $type: "yandex.cloud.speechsense.v1.analysis.PhraseText" as const,

  encode(
    message: PhraseText,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    if (message.language !== "") {
      writer.uint32(18).string(message.language);
    }
    if (message.normalizedText !== "") {
      writer.uint32(26).string(message.normalizedText);
    }
    for (const v of message.words) {
      Word.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PhraseText {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePhraseText } as PhraseText;
    message.words = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.text = reader.string();
          break;
        case 2:
          message.language = reader.string();
          break;
        case 3:
          message.normalizedText = reader.string();
          break;
        case 4:
          message.words.push(Word.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PhraseText {
    const message = { ...basePhraseText } as PhraseText;
    message.text =
      object.text !== undefined && object.text !== null
        ? String(object.text)
        : "";
    message.language =
      object.language !== undefined && object.language !== null
        ? String(object.language)
        : "";
    message.normalizedText =
      object.normalizedText !== undefined && object.normalizedText !== null
        ? String(object.normalizedText)
        : "";
    message.words = (object.words ?? []).map((e: any) => Word.fromJSON(e));
    return message;
  },

  toJSON(message: PhraseText): unknown {
    const obj: any = {};
    message.text !== undefined && (obj.text = message.text);
    message.language !== undefined && (obj.language = message.language);
    message.normalizedText !== undefined &&
      (obj.normalizedText = message.normalizedText);
    if (message.words) {
      obj.words = message.words.map((e) => (e ? Word.toJSON(e) : undefined));
    } else {
      obj.words = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PhraseText>, I>>(
    object: I
  ): PhraseText {
    const message = { ...basePhraseText } as PhraseText;
    message.text = object.text ?? "";
    message.language = object.language ?? "";
    message.normalizedText = object.normalizedText ?? "";
    message.words = object.words?.map((e) => Word.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(PhraseText.$type, PhraseText);

const baseWord: object = {
  $type: "yandex.cloud.speechsense.v1.analysis.Word",
  word: "",
  startTimeMs: 0,
  endTimeMs: 0,
};

export const Word = {
  $type: "yandex.cloud.speechsense.v1.analysis.Word" as const,

  encode(message: Word, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.word !== "") {
      writer.uint32(10).string(message.word);
    }
    if (message.startTimeMs !== 0) {
      writer.uint32(16).int64(message.startTimeMs);
    }
    if (message.endTimeMs !== 0) {
      writer.uint32(24).int64(message.endTimeMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Word {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWord } as Word;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.word = reader.string();
          break;
        case 2:
          message.startTimeMs = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.endTimeMs = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Word {
    const message = { ...baseWord } as Word;
    message.word =
      object.word !== undefined && object.word !== null
        ? String(object.word)
        : "";
    message.startTimeMs =
      object.startTimeMs !== undefined && object.startTimeMs !== null
        ? Number(object.startTimeMs)
        : 0;
    message.endTimeMs =
      object.endTimeMs !== undefined && object.endTimeMs !== null
        ? Number(object.endTimeMs)
        : 0;
    return message;
  },

  toJSON(message: Word): unknown {
    const obj: any = {};
    message.word !== undefined && (obj.word = message.word);
    message.startTimeMs !== undefined &&
      (obj.startTimeMs = Math.round(message.startTimeMs));
    message.endTimeMs !== undefined &&
      (obj.endTimeMs = Math.round(message.endTimeMs));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Word>, I>>(object: I): Word {
    const message = { ...baseWord } as Word;
    message.word = object.word ?? "";
    message.startTimeMs = object.startTimeMs ?? 0;
    message.endTimeMs = object.endTimeMs ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Word.$type, Word);

const baseAlgorithmMetadata: object = {
  $type: "yandex.cloud.speechsense.v1.analysis.AlgorithmMetadata",
  traceId: "",
  name: "",
};

export const AlgorithmMetadata = {
  $type: "yandex.cloud.speechsense.v1.analysis.AlgorithmMetadata" as const,

  encode(
    message: AlgorithmMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.createdTaskDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdTaskDate),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.completedTaskDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.completedTaskDate),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(26).fork()).ldelim();
    }
    if (message.traceId !== "") {
      writer.uint32(34).string(message.traceId);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AlgorithmMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAlgorithmMetadata } as AlgorithmMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.createdTaskDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.completedTaskDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.error = Error.decode(reader, reader.uint32());
          break;
        case 4:
          message.traceId = reader.string();
          break;
        case 5:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AlgorithmMetadata {
    const message = { ...baseAlgorithmMetadata } as AlgorithmMetadata;
    message.createdTaskDate =
      object.createdTaskDate !== undefined && object.createdTaskDate !== null
        ? fromJsonTimestamp(object.createdTaskDate)
        : undefined;
    message.completedTaskDate =
      object.completedTaskDate !== undefined &&
      object.completedTaskDate !== null
        ? fromJsonTimestamp(object.completedTaskDate)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? Error.fromJSON(object.error)
        : undefined;
    message.traceId =
      object.traceId !== undefined && object.traceId !== null
        ? String(object.traceId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: AlgorithmMetadata): unknown {
    const obj: any = {};
    message.createdTaskDate !== undefined &&
      (obj.createdTaskDate = message.createdTaskDate.toISOString());
    message.completedTaskDate !== undefined &&
      (obj.completedTaskDate = message.completedTaskDate.toISOString());
    message.error !== undefined &&
      (obj.error = message.error ? Error.toJSON(message.error) : undefined);
    message.traceId !== undefined && (obj.traceId = message.traceId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AlgorithmMetadata>, I>>(
    object: I
  ): AlgorithmMetadata {
    const message = { ...baseAlgorithmMetadata } as AlgorithmMetadata;
    message.createdTaskDate = object.createdTaskDate ?? undefined;
    message.completedTaskDate = object.completedTaskDate ?? undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? Error.fromPartial(object.error)
        : undefined;
    message.traceId = object.traceId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(AlgorithmMetadata.$type, AlgorithmMetadata);

const baseError: object = {
  $type: "yandex.cloud.speechsense.v1.analysis.Error",
  code: "",
  message: "",
};

export const Error = {
  $type: "yandex.cloud.speechsense.v1.analysis.Error" as const,

  encode(message: Error, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Error {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseError } as Error;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Error {
    const message = { ...baseError } as Error;
    message.code =
      object.code !== undefined && object.code !== null
        ? String(object.code)
        : "";
    message.message =
      object.message !== undefined && object.message !== null
        ? String(object.message)
        : "";
    return message;
  },

  toJSON(message: Error): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Error>, I>>(object: I): Error {
    const message = { ...baseError } as Error;
    message.code = object.code ?? "";
    message.message = object.message ?? "";
    return message;
  },
};

messageTypeRegistry.set(Error.$type, Error);

const basePhraseStatistics: object = {
  $type: "yandex.cloud.speechsense.v1.analysis.PhraseStatistics",
};

export const PhraseStatistics = {
  $type: "yandex.cloud.speechsense.v1.analysis.PhraseStatistics" as const,

  encode(
    message: PhraseStatistics,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.statistics !== undefined) {
      UtteranceStatistics.encode(
        message.statistics,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PhraseStatistics {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePhraseStatistics } as PhraseStatistics;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statistics = UtteranceStatistics.decode(
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

  fromJSON(object: any): PhraseStatistics {
    const message = { ...basePhraseStatistics } as PhraseStatistics;
    message.statistics =
      object.statistics !== undefined && object.statistics !== null
        ? UtteranceStatistics.fromJSON(object.statistics)
        : undefined;
    return message;
  },

  toJSON(message: PhraseStatistics): unknown {
    const obj: any = {};
    message.statistics !== undefined &&
      (obj.statistics = message.statistics
        ? UtteranceStatistics.toJSON(message.statistics)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PhraseStatistics>, I>>(
    object: I
  ): PhraseStatistics {
    const message = { ...basePhraseStatistics } as PhraseStatistics;
    message.statistics =
      object.statistics !== undefined && object.statistics !== null
        ? UtteranceStatistics.fromPartial(object.statistics)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(PhraseStatistics.$type, PhraseStatistics);

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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
