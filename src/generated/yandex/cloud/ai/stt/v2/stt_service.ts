/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleUnaryCall,
  handleBidiStreamingCall,
  Client,
  ClientUnaryCall,
  Metadata,
  CallOptions,
  ClientDuplexStream,
  ServiceError,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../../../google/protobuf/duration";
import { Operation } from "../../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.ai.stt.v2";

export interface LongRunningRecognitionRequest {
  $type: "yandex.cloud.ai.stt.v2.LongRunningRecognitionRequest";
  config?: RecognitionConfig;
  audio?: RecognitionAudio;
}

export interface LongRunningRecognitionResponse {
  $type: "yandex.cloud.ai.stt.v2.LongRunningRecognitionResponse";
  chunks: SpeechRecognitionResult[];
}

export interface StreamingRecognitionRequest {
  $type: "yandex.cloud.ai.stt.v2.StreamingRecognitionRequest";
  config?: RecognitionConfig | undefined;
  audioContent: Buffer | undefined;
}

export interface StreamingRecognitionResponse {
  $type: "yandex.cloud.ai.stt.v2.StreamingRecognitionResponse";
  chunks: SpeechRecognitionChunk[];
}

export interface RecognitionAudio {
  $type: "yandex.cloud.ai.stt.v2.RecognitionAudio";
  content: Buffer | undefined;
  uri: string | undefined;
}

export interface RecognitionConfig {
  $type: "yandex.cloud.ai.stt.v2.RecognitionConfig";
  specification?: RecognitionSpec;
  folderId: string;
}

export interface RecognitionSpec {
  $type: "yandex.cloud.ai.stt.v2.RecognitionSpec";
  audioEncoding: RecognitionSpec_AudioEncoding;
  /** 8000, 16000, 48000 only for pcm */
  sampleRateHertz: number;
  /** code in BCP-47 */
  languageCode: string;
  profanityFilter: boolean;
  model: string;
  /**
   * If set true, tentative hypotheses may be returned as they become available (final=false flag)
   * If false or omitted, only final=true result(s) are returned.
   * Makes sense only for StreamingRecognize requests.
   */
  partialResults: boolean;
  singleUtterance: boolean;
  /** Used only for long running recognize. */
  audioChannelCount: number;
  /** This mark allows disable normalization text */
  rawResults: boolean;
}

export enum RecognitionSpec_AudioEncoding {
  AUDIO_ENCODING_UNSPECIFIED = 0,
  /** LINEAR16_PCM - 16-bit signed little-endian (Linear PCM) */
  LINEAR16_PCM = 1,
  OGG_OPUS = 2,
  UNRECOGNIZED = -1,
}

export function recognitionSpec_AudioEncodingFromJSON(
  object: any
): RecognitionSpec_AudioEncoding {
  switch (object) {
    case 0:
    case "AUDIO_ENCODING_UNSPECIFIED":
      return RecognitionSpec_AudioEncoding.AUDIO_ENCODING_UNSPECIFIED;
    case 1:
    case "LINEAR16_PCM":
      return RecognitionSpec_AudioEncoding.LINEAR16_PCM;
    case 2:
    case "OGG_OPUS":
      return RecognitionSpec_AudioEncoding.OGG_OPUS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RecognitionSpec_AudioEncoding.UNRECOGNIZED;
  }
}

export function recognitionSpec_AudioEncodingToJSON(
  object: RecognitionSpec_AudioEncoding
): string {
  switch (object) {
    case RecognitionSpec_AudioEncoding.AUDIO_ENCODING_UNSPECIFIED:
      return "AUDIO_ENCODING_UNSPECIFIED";
    case RecognitionSpec_AudioEncoding.LINEAR16_PCM:
      return "LINEAR16_PCM";
    case RecognitionSpec_AudioEncoding.OGG_OPUS:
      return "OGG_OPUS";
    default:
      return "UNKNOWN";
  }
}

export interface SpeechRecognitionChunk {
  $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionChunk";
  alternatives: SpeechRecognitionAlternative[];
  /** This flag shows that the received chunk contains a part of the recognized text that won't be changed. */
  final: boolean;
  /** This flag shows that the received chunk is the end of an utterance. */
  endOfUtterance: boolean;
}

export interface SpeechRecognitionResult {
  $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionResult";
  alternatives: SpeechRecognitionAlternative[];
  channelTag: number;
}

export interface SpeechRecognitionAlternative {
  $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionAlternative";
  text: string;
  confidence: number;
  words: WordInfo[];
}

export interface WordInfo {
  $type: "yandex.cloud.ai.stt.v2.WordInfo";
  startTime?: Duration;
  endTime?: Duration;
  word: string;
  confidence: number;
}

const baseLongRunningRecognitionRequest: object = {
  $type: "yandex.cloud.ai.stt.v2.LongRunningRecognitionRequest",
};

export const LongRunningRecognitionRequest = {
  $type: "yandex.cloud.ai.stt.v2.LongRunningRecognitionRequest" as const,

  encode(
    message: LongRunningRecognitionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.config !== undefined) {
      RecognitionConfig.encode(
        message.config,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.audio !== undefined) {
      RecognitionAudio.encode(message.audio, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LongRunningRecognitionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseLongRunningRecognitionRequest,
    } as LongRunningRecognitionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = RecognitionConfig.decode(reader, reader.uint32());
          break;
        case 2:
          message.audio = RecognitionAudio.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LongRunningRecognitionRequest {
    const message = {
      ...baseLongRunningRecognitionRequest,
    } as LongRunningRecognitionRequest;
    message.config =
      object.config !== undefined && object.config !== null
        ? RecognitionConfig.fromJSON(object.config)
        : undefined;
    message.audio =
      object.audio !== undefined && object.audio !== null
        ? RecognitionAudio.fromJSON(object.audio)
        : undefined;
    return message;
  },

  toJSON(message: LongRunningRecognitionRequest): unknown {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config
        ? RecognitionConfig.toJSON(message.config)
        : undefined);
    message.audio !== undefined &&
      (obj.audio = message.audio
        ? RecognitionAudio.toJSON(message.audio)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LongRunningRecognitionRequest>, I>>(
    object: I
  ): LongRunningRecognitionRequest {
    const message = {
      ...baseLongRunningRecognitionRequest,
    } as LongRunningRecognitionRequest;
    message.config =
      object.config !== undefined && object.config !== null
        ? RecognitionConfig.fromPartial(object.config)
        : undefined;
    message.audio =
      object.audio !== undefined && object.audio !== null
        ? RecognitionAudio.fromPartial(object.audio)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  LongRunningRecognitionRequest.$type,
  LongRunningRecognitionRequest
);

const baseLongRunningRecognitionResponse: object = {
  $type: "yandex.cloud.ai.stt.v2.LongRunningRecognitionResponse",
};

export const LongRunningRecognitionResponse = {
  $type: "yandex.cloud.ai.stt.v2.LongRunningRecognitionResponse" as const,

  encode(
    message: LongRunningRecognitionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.chunks) {
      SpeechRecognitionResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LongRunningRecognitionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseLongRunningRecognitionResponse,
    } as LongRunningRecognitionResponse;
    message.chunks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chunks.push(
            SpeechRecognitionResult.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LongRunningRecognitionResponse {
    const message = {
      ...baseLongRunningRecognitionResponse,
    } as LongRunningRecognitionResponse;
    message.chunks = (object.chunks ?? []).map((e: any) =>
      SpeechRecognitionResult.fromJSON(e)
    );
    return message;
  },

  toJSON(message: LongRunningRecognitionResponse): unknown {
    const obj: any = {};
    if (message.chunks) {
      obj.chunks = message.chunks.map((e) =>
        e ? SpeechRecognitionResult.toJSON(e) : undefined
      );
    } else {
      obj.chunks = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LongRunningRecognitionResponse>, I>>(
    object: I
  ): LongRunningRecognitionResponse {
    const message = {
      ...baseLongRunningRecognitionResponse,
    } as LongRunningRecognitionResponse;
    message.chunks =
      object.chunks?.map((e) => SpeechRecognitionResult.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  LongRunningRecognitionResponse.$type,
  LongRunningRecognitionResponse
);

const baseStreamingRecognitionRequest: object = {
  $type: "yandex.cloud.ai.stt.v2.StreamingRecognitionRequest",
};

export const StreamingRecognitionRequest = {
  $type: "yandex.cloud.ai.stt.v2.StreamingRecognitionRequest" as const,

  encode(
    message: StreamingRecognitionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.config !== undefined) {
      RecognitionConfig.encode(
        message.config,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.audioContent !== undefined) {
      writer.uint32(18).bytes(message.audioContent);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StreamingRecognitionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseStreamingRecognitionRequest,
    } as StreamingRecognitionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = RecognitionConfig.decode(reader, reader.uint32());
          break;
        case 2:
          message.audioContent = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamingRecognitionRequest {
    const message = {
      ...baseStreamingRecognitionRequest,
    } as StreamingRecognitionRequest;
    message.config =
      object.config !== undefined && object.config !== null
        ? RecognitionConfig.fromJSON(object.config)
        : undefined;
    message.audioContent =
      object.audioContent !== undefined && object.audioContent !== null
        ? Buffer.from(bytesFromBase64(object.audioContent))
        : undefined;
    return message;
  },

  toJSON(message: StreamingRecognitionRequest): unknown {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config
        ? RecognitionConfig.toJSON(message.config)
        : undefined);
    message.audioContent !== undefined &&
      (obj.audioContent =
        message.audioContent !== undefined
          ? base64FromBytes(message.audioContent)
          : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StreamingRecognitionRequest>, I>>(
    object: I
  ): StreamingRecognitionRequest {
    const message = {
      ...baseStreamingRecognitionRequest,
    } as StreamingRecognitionRequest;
    message.config =
      object.config !== undefined && object.config !== null
        ? RecognitionConfig.fromPartial(object.config)
        : undefined;
    message.audioContent = object.audioContent ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  StreamingRecognitionRequest.$type,
  StreamingRecognitionRequest
);

const baseStreamingRecognitionResponse: object = {
  $type: "yandex.cloud.ai.stt.v2.StreamingRecognitionResponse",
};

export const StreamingRecognitionResponse = {
  $type: "yandex.cloud.ai.stt.v2.StreamingRecognitionResponse" as const,

  encode(
    message: StreamingRecognitionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.chunks) {
      SpeechRecognitionChunk.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StreamingRecognitionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseStreamingRecognitionResponse,
    } as StreamingRecognitionResponse;
    message.chunks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chunks.push(
            SpeechRecognitionChunk.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamingRecognitionResponse {
    const message = {
      ...baseStreamingRecognitionResponse,
    } as StreamingRecognitionResponse;
    message.chunks = (object.chunks ?? []).map((e: any) =>
      SpeechRecognitionChunk.fromJSON(e)
    );
    return message;
  },

  toJSON(message: StreamingRecognitionResponse): unknown {
    const obj: any = {};
    if (message.chunks) {
      obj.chunks = message.chunks.map((e) =>
        e ? SpeechRecognitionChunk.toJSON(e) : undefined
      );
    } else {
      obj.chunks = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StreamingRecognitionResponse>, I>>(
    object: I
  ): StreamingRecognitionResponse {
    const message = {
      ...baseStreamingRecognitionResponse,
    } as StreamingRecognitionResponse;
    message.chunks =
      object.chunks?.map((e) => SpeechRecognitionChunk.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  StreamingRecognitionResponse.$type,
  StreamingRecognitionResponse
);

const baseRecognitionAudio: object = {
  $type: "yandex.cloud.ai.stt.v2.RecognitionAudio",
};

export const RecognitionAudio = {
  $type: "yandex.cloud.ai.stt.v2.RecognitionAudio" as const,

  encode(
    message: RecognitionAudio,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.content !== undefined) {
      writer.uint32(10).bytes(message.content);
    }
    if (message.uri !== undefined) {
      writer.uint32(18).string(message.uri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecognitionAudio {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecognitionAudio } as RecognitionAudio;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = reader.bytes() as Buffer;
          break;
        case 2:
          message.uri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecognitionAudio {
    const message = { ...baseRecognitionAudio } as RecognitionAudio;
    message.content =
      object.content !== undefined && object.content !== null
        ? Buffer.from(bytesFromBase64(object.content))
        : undefined;
    message.uri =
      object.uri !== undefined && object.uri !== null
        ? String(object.uri)
        : undefined;
    return message;
  },

  toJSON(message: RecognitionAudio): unknown {
    const obj: any = {};
    message.content !== undefined &&
      (obj.content =
        message.content !== undefined
          ? base64FromBytes(message.content)
          : undefined);
    message.uri !== undefined && (obj.uri = message.uri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RecognitionAudio>, I>>(
    object: I
  ): RecognitionAudio {
    const message = { ...baseRecognitionAudio } as RecognitionAudio;
    message.content = object.content ?? undefined;
    message.uri = object.uri ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(RecognitionAudio.$type, RecognitionAudio);

const baseRecognitionConfig: object = {
  $type: "yandex.cloud.ai.stt.v2.RecognitionConfig",
  folderId: "",
};

export const RecognitionConfig = {
  $type: "yandex.cloud.ai.stt.v2.RecognitionConfig" as const,

  encode(
    message: RecognitionConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.specification !== undefined) {
      RecognitionSpec.encode(
        message.specification,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecognitionConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecognitionConfig } as RecognitionConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.specification = RecognitionSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.folderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecognitionConfig {
    const message = { ...baseRecognitionConfig } as RecognitionConfig;
    message.specification =
      object.specification !== undefined && object.specification !== null
        ? RecognitionSpec.fromJSON(object.specification)
        : undefined;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    return message;
  },

  toJSON(message: RecognitionConfig): unknown {
    const obj: any = {};
    message.specification !== undefined &&
      (obj.specification = message.specification
        ? RecognitionSpec.toJSON(message.specification)
        : undefined);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RecognitionConfig>, I>>(
    object: I
  ): RecognitionConfig {
    const message = { ...baseRecognitionConfig } as RecognitionConfig;
    message.specification =
      object.specification !== undefined && object.specification !== null
        ? RecognitionSpec.fromPartial(object.specification)
        : undefined;
    message.folderId = object.folderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RecognitionConfig.$type, RecognitionConfig);

const baseRecognitionSpec: object = {
  $type: "yandex.cloud.ai.stt.v2.RecognitionSpec",
  audioEncoding: 0,
  sampleRateHertz: 0,
  languageCode: "",
  profanityFilter: false,
  model: "",
  partialResults: false,
  singleUtterance: false,
  audioChannelCount: 0,
  rawResults: false,
};

export const RecognitionSpec = {
  $type: "yandex.cloud.ai.stt.v2.RecognitionSpec" as const,

  encode(
    message: RecognitionSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.audioEncoding !== 0) {
      writer.uint32(8).int32(message.audioEncoding);
    }
    if (message.sampleRateHertz !== 0) {
      writer.uint32(16).int64(message.sampleRateHertz);
    }
    if (message.languageCode !== "") {
      writer.uint32(26).string(message.languageCode);
    }
    if (message.profanityFilter === true) {
      writer.uint32(32).bool(message.profanityFilter);
    }
    if (message.model !== "") {
      writer.uint32(42).string(message.model);
    }
    if (message.partialResults === true) {
      writer.uint32(56).bool(message.partialResults);
    }
    if (message.singleUtterance === true) {
      writer.uint32(64).bool(message.singleUtterance);
    }
    if (message.audioChannelCount !== 0) {
      writer.uint32(72).int64(message.audioChannelCount);
    }
    if (message.rawResults === true) {
      writer.uint32(80).bool(message.rawResults);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecognitionSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecognitionSpec } as RecognitionSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.audioEncoding = reader.int32() as any;
          break;
        case 2:
          message.sampleRateHertz = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.languageCode = reader.string();
          break;
        case 4:
          message.profanityFilter = reader.bool();
          break;
        case 5:
          message.model = reader.string();
          break;
        case 7:
          message.partialResults = reader.bool();
          break;
        case 8:
          message.singleUtterance = reader.bool();
          break;
        case 9:
          message.audioChannelCount = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.rawResults = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecognitionSpec {
    const message = { ...baseRecognitionSpec } as RecognitionSpec;
    message.audioEncoding =
      object.audioEncoding !== undefined && object.audioEncoding !== null
        ? recognitionSpec_AudioEncodingFromJSON(object.audioEncoding)
        : 0;
    message.sampleRateHertz =
      object.sampleRateHertz !== undefined && object.sampleRateHertz !== null
        ? Number(object.sampleRateHertz)
        : 0;
    message.languageCode =
      object.languageCode !== undefined && object.languageCode !== null
        ? String(object.languageCode)
        : "";
    message.profanityFilter =
      object.profanityFilter !== undefined && object.profanityFilter !== null
        ? Boolean(object.profanityFilter)
        : false;
    message.model =
      object.model !== undefined && object.model !== null
        ? String(object.model)
        : "";
    message.partialResults =
      object.partialResults !== undefined && object.partialResults !== null
        ? Boolean(object.partialResults)
        : false;
    message.singleUtterance =
      object.singleUtterance !== undefined && object.singleUtterance !== null
        ? Boolean(object.singleUtterance)
        : false;
    message.audioChannelCount =
      object.audioChannelCount !== undefined &&
      object.audioChannelCount !== null
        ? Number(object.audioChannelCount)
        : 0;
    message.rawResults =
      object.rawResults !== undefined && object.rawResults !== null
        ? Boolean(object.rawResults)
        : false;
    return message;
  },

  toJSON(message: RecognitionSpec): unknown {
    const obj: any = {};
    message.audioEncoding !== undefined &&
      (obj.audioEncoding = recognitionSpec_AudioEncodingToJSON(
        message.audioEncoding
      ));
    message.sampleRateHertz !== undefined &&
      (obj.sampleRateHertz = Math.round(message.sampleRateHertz));
    message.languageCode !== undefined &&
      (obj.languageCode = message.languageCode);
    message.profanityFilter !== undefined &&
      (obj.profanityFilter = message.profanityFilter);
    message.model !== undefined && (obj.model = message.model);
    message.partialResults !== undefined &&
      (obj.partialResults = message.partialResults);
    message.singleUtterance !== undefined &&
      (obj.singleUtterance = message.singleUtterance);
    message.audioChannelCount !== undefined &&
      (obj.audioChannelCount = Math.round(message.audioChannelCount));
    message.rawResults !== undefined && (obj.rawResults = message.rawResults);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RecognitionSpec>, I>>(
    object: I
  ): RecognitionSpec {
    const message = { ...baseRecognitionSpec } as RecognitionSpec;
    message.audioEncoding = object.audioEncoding ?? 0;
    message.sampleRateHertz = object.sampleRateHertz ?? 0;
    message.languageCode = object.languageCode ?? "";
    message.profanityFilter = object.profanityFilter ?? false;
    message.model = object.model ?? "";
    message.partialResults = object.partialResults ?? false;
    message.singleUtterance = object.singleUtterance ?? false;
    message.audioChannelCount = object.audioChannelCount ?? 0;
    message.rawResults = object.rawResults ?? false;
    return message;
  },
};

messageTypeRegistry.set(RecognitionSpec.$type, RecognitionSpec);

const baseSpeechRecognitionChunk: object = {
  $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionChunk",
  final: false,
  endOfUtterance: false,
};

export const SpeechRecognitionChunk = {
  $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionChunk" as const,

  encode(
    message: SpeechRecognitionChunk,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.alternatives) {
      SpeechRecognitionAlternative.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.final === true) {
      writer.uint32(16).bool(message.final);
    }
    if (message.endOfUtterance === true) {
      writer.uint32(24).bool(message.endOfUtterance);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SpeechRecognitionChunk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSpeechRecognitionChunk } as SpeechRecognitionChunk;
    message.alternatives = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alternatives.push(
            SpeechRecognitionAlternative.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.final = reader.bool();
          break;
        case 3:
          message.endOfUtterance = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SpeechRecognitionChunk {
    const message = { ...baseSpeechRecognitionChunk } as SpeechRecognitionChunk;
    message.alternatives = (object.alternatives ?? []).map((e: any) =>
      SpeechRecognitionAlternative.fromJSON(e)
    );
    message.final =
      object.final !== undefined && object.final !== null
        ? Boolean(object.final)
        : false;
    message.endOfUtterance =
      object.endOfUtterance !== undefined && object.endOfUtterance !== null
        ? Boolean(object.endOfUtterance)
        : false;
    return message;
  },

  toJSON(message: SpeechRecognitionChunk): unknown {
    const obj: any = {};
    if (message.alternatives) {
      obj.alternatives = message.alternatives.map((e) =>
        e ? SpeechRecognitionAlternative.toJSON(e) : undefined
      );
    } else {
      obj.alternatives = [];
    }
    message.final !== undefined && (obj.final = message.final);
    message.endOfUtterance !== undefined &&
      (obj.endOfUtterance = message.endOfUtterance);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SpeechRecognitionChunk>, I>>(
    object: I
  ): SpeechRecognitionChunk {
    const message = { ...baseSpeechRecognitionChunk } as SpeechRecognitionChunk;
    message.alternatives =
      object.alternatives?.map((e) =>
        SpeechRecognitionAlternative.fromPartial(e)
      ) || [];
    message.final = object.final ?? false;
    message.endOfUtterance = object.endOfUtterance ?? false;
    return message;
  },
};

messageTypeRegistry.set(SpeechRecognitionChunk.$type, SpeechRecognitionChunk);

const baseSpeechRecognitionResult: object = {
  $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionResult",
  channelTag: 0,
};

export const SpeechRecognitionResult = {
  $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionResult" as const,

  encode(
    message: SpeechRecognitionResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.alternatives) {
      SpeechRecognitionAlternative.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.channelTag !== 0) {
      writer.uint32(16).int64(message.channelTag);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SpeechRecognitionResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSpeechRecognitionResult,
    } as SpeechRecognitionResult;
    message.alternatives = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alternatives.push(
            SpeechRecognitionAlternative.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.channelTag = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SpeechRecognitionResult {
    const message = {
      ...baseSpeechRecognitionResult,
    } as SpeechRecognitionResult;
    message.alternatives = (object.alternatives ?? []).map((e: any) =>
      SpeechRecognitionAlternative.fromJSON(e)
    );
    message.channelTag =
      object.channelTag !== undefined && object.channelTag !== null
        ? Number(object.channelTag)
        : 0;
    return message;
  },

  toJSON(message: SpeechRecognitionResult): unknown {
    const obj: any = {};
    if (message.alternatives) {
      obj.alternatives = message.alternatives.map((e) =>
        e ? SpeechRecognitionAlternative.toJSON(e) : undefined
      );
    } else {
      obj.alternatives = [];
    }
    message.channelTag !== undefined &&
      (obj.channelTag = Math.round(message.channelTag));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SpeechRecognitionResult>, I>>(
    object: I
  ): SpeechRecognitionResult {
    const message = {
      ...baseSpeechRecognitionResult,
    } as SpeechRecognitionResult;
    message.alternatives =
      object.alternatives?.map((e) =>
        SpeechRecognitionAlternative.fromPartial(e)
      ) || [];
    message.channelTag = object.channelTag ?? 0;
    return message;
  },
};

messageTypeRegistry.set(SpeechRecognitionResult.$type, SpeechRecognitionResult);

const baseSpeechRecognitionAlternative: object = {
  $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionAlternative",
  text: "",
  confidence: 0,
};

export const SpeechRecognitionAlternative = {
  $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionAlternative" as const,

  encode(
    message: SpeechRecognitionAlternative,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    if (message.confidence !== 0) {
      writer.uint32(21).float(message.confidence);
    }
    for (const v of message.words) {
      WordInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SpeechRecognitionAlternative {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSpeechRecognitionAlternative,
    } as SpeechRecognitionAlternative;
    message.words = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.text = reader.string();
          break;
        case 2:
          message.confidence = reader.float();
          break;
        case 3:
          message.words.push(WordInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SpeechRecognitionAlternative {
    const message = {
      ...baseSpeechRecognitionAlternative,
    } as SpeechRecognitionAlternative;
    message.text =
      object.text !== undefined && object.text !== null
        ? String(object.text)
        : "";
    message.confidence =
      object.confidence !== undefined && object.confidence !== null
        ? Number(object.confidence)
        : 0;
    message.words = (object.words ?? []).map((e: any) => WordInfo.fromJSON(e));
    return message;
  },

  toJSON(message: SpeechRecognitionAlternative): unknown {
    const obj: any = {};
    message.text !== undefined && (obj.text = message.text);
    message.confidence !== undefined && (obj.confidence = message.confidence);
    if (message.words) {
      obj.words = message.words.map((e) =>
        e ? WordInfo.toJSON(e) : undefined
      );
    } else {
      obj.words = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SpeechRecognitionAlternative>, I>>(
    object: I
  ): SpeechRecognitionAlternative {
    const message = {
      ...baseSpeechRecognitionAlternative,
    } as SpeechRecognitionAlternative;
    message.text = object.text ?? "";
    message.confidence = object.confidence ?? 0;
    message.words = object.words?.map((e) => WordInfo.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  SpeechRecognitionAlternative.$type,
  SpeechRecognitionAlternative
);

const baseWordInfo: object = {
  $type: "yandex.cloud.ai.stt.v2.WordInfo",
  word: "",
  confidence: 0,
};

export const WordInfo = {
  $type: "yandex.cloud.ai.stt.v2.WordInfo" as const,

  encode(
    message: WordInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.startTime !== undefined) {
      Duration.encode(message.startTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Duration.encode(message.endTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.word !== "") {
      writer.uint32(26).string(message.word);
    }
    if (message.confidence !== 0) {
      writer.uint32(37).float(message.confidence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WordInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWordInfo } as WordInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startTime = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.endTime = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.word = reader.string();
          break;
        case 4:
          message.confidence = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WordInfo {
    const message = { ...baseWordInfo } as WordInfo;
    message.startTime =
      object.startTime !== undefined && object.startTime !== null
        ? Duration.fromJSON(object.startTime)
        : undefined;
    message.endTime =
      object.endTime !== undefined && object.endTime !== null
        ? Duration.fromJSON(object.endTime)
        : undefined;
    message.word =
      object.word !== undefined && object.word !== null
        ? String(object.word)
        : "";
    message.confidence =
      object.confidence !== undefined && object.confidence !== null
        ? Number(object.confidence)
        : 0;
    return message;
  },

  toJSON(message: WordInfo): unknown {
    const obj: any = {};
    message.startTime !== undefined &&
      (obj.startTime = message.startTime
        ? Duration.toJSON(message.startTime)
        : undefined);
    message.endTime !== undefined &&
      (obj.endTime = message.endTime
        ? Duration.toJSON(message.endTime)
        : undefined);
    message.word !== undefined && (obj.word = message.word);
    message.confidence !== undefined && (obj.confidence = message.confidence);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WordInfo>, I>>(object: I): WordInfo {
    const message = { ...baseWordInfo } as WordInfo;
    message.startTime =
      object.startTime !== undefined && object.startTime !== null
        ? Duration.fromPartial(object.startTime)
        : undefined;
    message.endTime =
      object.endTime !== undefined && object.endTime !== null
        ? Duration.fromPartial(object.endTime)
        : undefined;
    message.word = object.word ?? "";
    message.confidence = object.confidence ?? 0;
    return message;
  },
};

messageTypeRegistry.set(WordInfo.$type, WordInfo);

export const SttServiceService = {
  longRunningRecognize: {
    path: "/yandex.cloud.ai.stt.v2.SttService/LongRunningRecognize",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LongRunningRecognitionRequest) =>
      Buffer.from(LongRunningRecognitionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      LongRunningRecognitionRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  streamingRecognize: {
    path: "/yandex.cloud.ai.stt.v2.SttService/StreamingRecognize",
    requestStream: true,
    responseStream: true,
    requestSerialize: (value: StreamingRecognitionRequest) =>
      Buffer.from(StreamingRecognitionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      StreamingRecognitionRequest.decode(value),
    responseSerialize: (value: StreamingRecognitionResponse) =>
      Buffer.from(StreamingRecognitionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      StreamingRecognitionResponse.decode(value),
  },
} as const;

export interface SttServiceServer extends UntypedServiceImplementation {
  longRunningRecognize: handleUnaryCall<
    LongRunningRecognitionRequest,
    Operation
  >;
  streamingRecognize: handleBidiStreamingCall<
    StreamingRecognitionRequest,
    StreamingRecognitionResponse
  >;
}

export interface SttServiceClient extends Client {
  longRunningRecognize(
    request: LongRunningRecognitionRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  longRunningRecognize(
    request: LongRunningRecognitionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  longRunningRecognize(
    request: LongRunningRecognitionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  streamingRecognize(): ClientDuplexStream<
    StreamingRecognitionRequest,
    StreamingRecognitionResponse
  >;
  streamingRecognize(
    options: Partial<CallOptions>
  ): ClientDuplexStream<
    StreamingRecognitionRequest,
    StreamingRecognitionResponse
  >;
  streamingRecognize(
    metadata: Metadata,
    options?: Partial<CallOptions>
  ): ClientDuplexStream<
    StreamingRecognitionRequest,
    StreamingRecognitionResponse
  >;
}

export const SttServiceClient = makeGenericClientConstructor(
  SttServiceService,
  "yandex.cloud.ai.stt.v2.SttService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): SttServiceClient;
  service: typeof SttServiceService;
};

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

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

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
