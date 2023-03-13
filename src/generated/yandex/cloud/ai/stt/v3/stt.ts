/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "speechkit.stt.v3";

export enum CodeType {
  CODE_TYPE_UNSPECIFIED = 0,
  /** WORKING - all good */
  WORKING = 1,
  /** WARNING - for example, if speech is sent not in real time. or unknown context (and we've made fallback). */
  WARNING = 2,
  /** CLOSED - after session was closed. */
  CLOSED = 3,
  UNRECOGNIZED = -1,
}

export function codeTypeFromJSON(object: any): CodeType {
  switch (object) {
    case 0:
    case "CODE_TYPE_UNSPECIFIED":
      return CodeType.CODE_TYPE_UNSPECIFIED;
    case 1:
    case "WORKING":
      return CodeType.WORKING;
    case 2:
    case "WARNING":
      return CodeType.WARNING;
    case 3:
    case "CLOSED":
      return CodeType.CLOSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CodeType.UNRECOGNIZED;
  }
}

export function codeTypeToJSON(object: CodeType): string {
  switch (object) {
    case CodeType.CODE_TYPE_UNSPECIFIED:
      return "CODE_TYPE_UNSPECIFIED";
    case CodeType.WORKING:
      return "WORKING";
    case CodeType.WARNING:
      return "WARNING";
    case CodeType.CLOSED:
      return "CLOSED";
    default:
      return "UNKNOWN";
  }
}

/** options */
export interface TextNormalizationOptions {
  $type: "speechkit.stt.v3.TextNormalizationOptions";
  textNormalization: TextNormalizationOptions_TextNormalization;
  /** Filter profanity (default: false). */
  profanityFilter: boolean;
  /** Rewrite text in literature style (default: false). */
  literatureText: boolean;
}

/** Normalization */
export enum TextNormalizationOptions_TextNormalization {
  TEXT_NORMALIZATION_UNSPECIFIED = 0,
  /** TEXT_NORMALIZATION_ENABLED - Enable normalization */
  TEXT_NORMALIZATION_ENABLED = 1,
  /** TEXT_NORMALIZATION_DISABLED - Disable normalization */
  TEXT_NORMALIZATION_DISABLED = 2,
  UNRECOGNIZED = -1,
}

export function textNormalizationOptions_TextNormalizationFromJSON(
  object: any
): TextNormalizationOptions_TextNormalization {
  switch (object) {
    case 0:
    case "TEXT_NORMALIZATION_UNSPECIFIED":
      return TextNormalizationOptions_TextNormalization.TEXT_NORMALIZATION_UNSPECIFIED;
    case 1:
    case "TEXT_NORMALIZATION_ENABLED":
      return TextNormalizationOptions_TextNormalization.TEXT_NORMALIZATION_ENABLED;
    case 2:
    case "TEXT_NORMALIZATION_DISABLED":
      return TextNormalizationOptions_TextNormalization.TEXT_NORMALIZATION_DISABLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TextNormalizationOptions_TextNormalization.UNRECOGNIZED;
  }
}

export function textNormalizationOptions_TextNormalizationToJSON(
  object: TextNormalizationOptions_TextNormalization
): string {
  switch (object) {
    case TextNormalizationOptions_TextNormalization.TEXT_NORMALIZATION_UNSPECIFIED:
      return "TEXT_NORMALIZATION_UNSPECIFIED";
    case TextNormalizationOptions_TextNormalization.TEXT_NORMALIZATION_ENABLED:
      return "TEXT_NORMALIZATION_ENABLED";
    case TextNormalizationOptions_TextNormalization.TEXT_NORMALIZATION_DISABLED:
      return "TEXT_NORMALIZATION_DISABLED";
    default:
      return "UNKNOWN";
  }
}

export interface DefaultEouClassifier {
  $type: "speechkit.stt.v3.DefaultEouClassifier";
  /** EOU sensitivity. Currently two levels, faster with more error and more conservative (our default). */
  type: DefaultEouClassifier_EouSensitivity;
  /** Hint for max pause between words. Our EoU detector could use this information to distinguish between end of utterance and slow speech (like one <long pause> two <long pause> three, etc). */
  maxPauseBetweenWordsHintMs: number;
}

export enum DefaultEouClassifier_EouSensitivity {
  EOU_SENSITIVITY_UNSPECIFIED = 0,
  DEFAULT = 1,
  HIGH = 2,
  UNRECOGNIZED = -1,
}

export function defaultEouClassifier_EouSensitivityFromJSON(
  object: any
): DefaultEouClassifier_EouSensitivity {
  switch (object) {
    case 0:
    case "EOU_SENSITIVITY_UNSPECIFIED":
      return DefaultEouClassifier_EouSensitivity.EOU_SENSITIVITY_UNSPECIFIED;
    case 1:
    case "DEFAULT":
      return DefaultEouClassifier_EouSensitivity.DEFAULT;
    case 2:
    case "HIGH":
      return DefaultEouClassifier_EouSensitivity.HIGH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefaultEouClassifier_EouSensitivity.UNRECOGNIZED;
  }
}

export function defaultEouClassifier_EouSensitivityToJSON(
  object: DefaultEouClassifier_EouSensitivity
): string {
  switch (object) {
    case DefaultEouClassifier_EouSensitivity.EOU_SENSITIVITY_UNSPECIFIED:
      return "EOU_SENSITIVITY_UNSPECIFIED";
    case DefaultEouClassifier_EouSensitivity.DEFAULT:
      return "DEFAULT";
    case DefaultEouClassifier_EouSensitivity.HIGH:
      return "HIGH";
    default:
      return "UNKNOWN";
  }
}

/** Use EOU provided by user */
export interface ExternalEouClassifier {
  $type: "speechkit.stt.v3.ExternalEouClassifier";
}

export interface EouClassifierOptions {
  $type: "speechkit.stt.v3.EouClassifierOptions";
  /** EOU classifier provided by SpeechKit. Default. */
  defaultClassifier?: DefaultEouClassifier | undefined;
  /** EoU is enforced by external messages from user. */
  externalClassifier?: ExternalEouClassifier | undefined;
}

/** RAW Audio format spec (no container to infer type). Used in AudioFormat options. */
export interface RawAudio {
  $type: "speechkit.stt.v3.RawAudio";
  /** Type of audio encoding */
  audioEncoding: RawAudio_AudioEncoding;
  /** PCM sample rate */
  sampleRateHertz: number;
  /** PCM channel count. Currently only single channel audio is supported in real-time recognition. */
  audioChannelCount: number;
}

export enum RawAudio_AudioEncoding {
  AUDIO_ENCODING_UNSPECIFIED = 0,
  /** LINEAR16_PCM - Audio bit depth 16-bit signed little-endian (Linear PCM). */
  LINEAR16_PCM = 1,
  UNRECOGNIZED = -1,
}

export function rawAudio_AudioEncodingFromJSON(
  object: any
): RawAudio_AudioEncoding {
  switch (object) {
    case 0:
    case "AUDIO_ENCODING_UNSPECIFIED":
      return RawAudio_AudioEncoding.AUDIO_ENCODING_UNSPECIFIED;
    case 1:
    case "LINEAR16_PCM":
      return RawAudio_AudioEncoding.LINEAR16_PCM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RawAudio_AudioEncoding.UNRECOGNIZED;
  }
}

export function rawAudio_AudioEncodingToJSON(
  object: RawAudio_AudioEncoding
): string {
  switch (object) {
    case RawAudio_AudioEncoding.AUDIO_ENCODING_UNSPECIFIED:
      return "AUDIO_ENCODING_UNSPECIFIED";
    case RawAudio_AudioEncoding.LINEAR16_PCM:
      return "LINEAR16_PCM";
    default:
      return "UNKNOWN";
  }
}

/** Audio with fixed type in container. Used in AudioFormat options. */
export interface ContainerAudio {
  $type: "speechkit.stt.v3.ContainerAudio";
  /** Type of audio container. */
  containerAudioType: ContainerAudio_ContainerAudioType;
}

export enum ContainerAudio_ContainerAudioType {
  CONTAINER_AUDIO_TYPE_UNSPECIFIED = 0,
  /** WAV - Audio bit depth 16-bit signed little-endian (Linear PCM). */
  WAV = 1,
  /** OGG_OPUS - Data is encoded using the OPUS audio codec and compressed using the OGG container format. */
  OGG_OPUS = 2,
  /** MP3 - Data is encoded using MPEG-1/2 Layer III and compressed using the MP3 container format. */
  MP3 = 3,
  UNRECOGNIZED = -1,
}

export function containerAudio_ContainerAudioTypeFromJSON(
  object: any
): ContainerAudio_ContainerAudioType {
  switch (object) {
    case 0:
    case "CONTAINER_AUDIO_TYPE_UNSPECIFIED":
      return ContainerAudio_ContainerAudioType.CONTAINER_AUDIO_TYPE_UNSPECIFIED;
    case 1:
    case "WAV":
      return ContainerAudio_ContainerAudioType.WAV;
    case 2:
    case "OGG_OPUS":
      return ContainerAudio_ContainerAudioType.OGG_OPUS;
    case 3:
    case "MP3":
      return ContainerAudio_ContainerAudioType.MP3;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ContainerAudio_ContainerAudioType.UNRECOGNIZED;
  }
}

export function containerAudio_ContainerAudioTypeToJSON(
  object: ContainerAudio_ContainerAudioType
): string {
  switch (object) {
    case ContainerAudio_ContainerAudioType.CONTAINER_AUDIO_TYPE_UNSPECIFIED:
      return "CONTAINER_AUDIO_TYPE_UNSPECIFIED";
    case ContainerAudio_ContainerAudioType.WAV:
      return "WAV";
    case ContainerAudio_ContainerAudioType.OGG_OPUS:
      return "OGG_OPUS";
    case ContainerAudio_ContainerAudioType.MP3:
      return "MP3";
    default:
      return "UNKNOWN";
  }
}

/** Audio format options. */
export interface AudioFormatOptions {
  $type: "speechkit.stt.v3.AudioFormatOptions";
  /** Audio without container. */
  rawAudio?: RawAudio | undefined;
  /** Audio is wrapped in container. */
  containerAudio?: ContainerAudio | undefined;
}

export interface LanguageRestrictionOptions {
  $type: "speechkit.stt.v3.LanguageRestrictionOptions";
  restrictionType: LanguageRestrictionOptions_LanguageRestrictionType;
  languageCode: string[];
}

export enum LanguageRestrictionOptions_LanguageRestrictionType {
  LANGUAGE_RESTRICTION_TYPE_UNSPECIFIED = 0,
  WHITELIST = 1,
  BLACKLIST = 2,
  UNRECOGNIZED = -1,
}

export function languageRestrictionOptions_LanguageRestrictionTypeFromJSON(
  object: any
): LanguageRestrictionOptions_LanguageRestrictionType {
  switch (object) {
    case 0:
    case "LANGUAGE_RESTRICTION_TYPE_UNSPECIFIED":
      return LanguageRestrictionOptions_LanguageRestrictionType.LANGUAGE_RESTRICTION_TYPE_UNSPECIFIED;
    case 1:
    case "WHITELIST":
      return LanguageRestrictionOptions_LanguageRestrictionType.WHITELIST;
    case 2:
    case "BLACKLIST":
      return LanguageRestrictionOptions_LanguageRestrictionType.BLACKLIST;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LanguageRestrictionOptions_LanguageRestrictionType.UNRECOGNIZED;
  }
}

export function languageRestrictionOptions_LanguageRestrictionTypeToJSON(
  object: LanguageRestrictionOptions_LanguageRestrictionType
): string {
  switch (object) {
    case LanguageRestrictionOptions_LanguageRestrictionType.LANGUAGE_RESTRICTION_TYPE_UNSPECIFIED:
      return "LANGUAGE_RESTRICTION_TYPE_UNSPECIFIED";
    case LanguageRestrictionOptions_LanguageRestrictionType.WHITELIST:
      return "WHITELIST";
    case LanguageRestrictionOptions_LanguageRestrictionType.BLACKLIST:
      return "BLACKLIST";
    default:
      return "UNKNOWN";
  }
}

export interface RecognitionModelOptions {
  $type: "speechkit.stt.v3.RecognitionModelOptions";
  /** Reserved for future, do not use. */
  model: string;
  /** Specified input audio. */
  audioFormat?: AudioFormatOptions;
  /** Text normalization options. */
  textNormalization?: TextNormalizationOptions;
  /** Possible languages in audio. */
  languageRestriction?: LanguageRestrictionOptions;
  /** How to deal with audio data (in real time, after all data is received, etc). Default is REAL_TIME. */
  audioProcessingType: RecognitionModelOptions_AudioProcessingType;
}

export enum RecognitionModelOptions_AudioProcessingType {
  AUDIO_PROCESSING_TYPE_UNSPECIFIED = 0,
  REAL_TIME = 1,
  FULL_DATA = 2,
  UNRECOGNIZED = -1,
}

export function recognitionModelOptions_AudioProcessingTypeFromJSON(
  object: any
): RecognitionModelOptions_AudioProcessingType {
  switch (object) {
    case 0:
    case "AUDIO_PROCESSING_TYPE_UNSPECIFIED":
      return RecognitionModelOptions_AudioProcessingType.AUDIO_PROCESSING_TYPE_UNSPECIFIED;
    case 1:
    case "REAL_TIME":
      return RecognitionModelOptions_AudioProcessingType.REAL_TIME;
    case 2:
    case "FULL_DATA":
      return RecognitionModelOptions_AudioProcessingType.FULL_DATA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RecognitionModelOptions_AudioProcessingType.UNRECOGNIZED;
  }
}

export function recognitionModelOptions_AudioProcessingTypeToJSON(
  object: RecognitionModelOptions_AudioProcessingType
): string {
  switch (object) {
    case RecognitionModelOptions_AudioProcessingType.AUDIO_PROCESSING_TYPE_UNSPECIFIED:
      return "AUDIO_PROCESSING_TYPE_UNSPECIFIED";
    case RecognitionModelOptions_AudioProcessingType.REAL_TIME:
      return "REAL_TIME";
    case RecognitionModelOptions_AudioProcessingType.FULL_DATA:
      return "FULL_DATA";
    default:
      return "UNKNOWN";
  }
}

export interface StreamingOptions {
  $type: "speechkit.stt.v3.StreamingOptions";
  /** Configuration for speech recognition model. */
  recognitionModel?: RecognitionModelOptions;
  /** Configuration for end of utterance detection model. */
  eouClassifier?: EouClassifierOptions;
}

/** Data chunk with audio. */
export interface AudioChunk {
  $type: "speechkit.stt.v3.AudioChunk";
  /** Bytes with audio data. */
  data: Buffer;
}

export interface SilenceChunk {
  $type: "speechkit.stt.v3.SilenceChunk";
  /** Duration of silence chunk in ms. */
  durationMs: number;
}

/** Force EOU */
export interface Eou {
  $type: "speechkit.stt.v3.Eou";
}

/**
 * Streaming audio request
 * Events are control messages from user.
 * First message should be session options.
 * The next messages are audio data chunks or control messages.
 */
export interface StreamingRequest {
  $type: "speechkit.stt.v3.StreamingRequest";
  /** Session options. should be first message from user */
  sessionOptions?: StreamingOptions | undefined;
  /** Chunk with audio data. */
  chunk?: AudioChunk | undefined;
  /** Chunk with silence. */
  silenceChunk?: SilenceChunk | undefined;
  /** Request to end current utterance. Works only with external EoU detector. */
  eou?: Eou | undefined;
}

/** Recognized word. */
export interface Word {
  $type: "speechkit.stt.v3.Word";
  /** Word text. */
  text: string;
  /** Estimation of word start time in ms */
  startTimeMs: number;
  /** Estimation of word end time in ms */
  endTimeMs: number;
}

/** Recognition of specific time frame. */
export interface Alternative {
  $type: "speechkit.stt.v3.Alternative";
  /** Words in time frame. */
  words: Word[];
  /** Text in time frame. */
  text: string;
  /** Start of time frame. */
  startTimeMs: number;
  /** End of time frame. */
  endTimeMs: number;
  /** Hypothesis confidence. Currently is not used. */
  confidence: number;
}

/** Update information from */
export interface EouUpdate {
  $type: "speechkit.stt.v3.EouUpdate";
  /** End of utterance estimated time. */
  timeMs: number;
}

/** Update of hypothesis. */
export interface AlternativeUpdate {
  $type: "speechkit.stt.v3.AlternativeUpdate";
  /** List of hypothesis for timeframes. */
  alternatives: Alternative[];
  /** Tag for distinguish audio channels. */
  channelTag: string;
}

/** AudioCursors are state of ASR recognition stream. */
export interface AudioCursors {
  $type: "speechkit.stt.v3.AudioCursors";
  /** Amount of audio chunks server received. This cursor is moved after each audio chunk was received by server. */
  receivedDataMs: number;
  /** Input stream reset data. */
  resetTimeMs: number;
  /**
   * How much audio was processed. This time includes trimming silences as well. This cursor is moved after server received enough data
   *  to update recognition results (includes silence as well).
   */
  partialTimeMs: number;
  /**
   * Time of last final. This cursor is moved when server decides that recognition from start of audio until final_time_ms will not change anymore
   *  usually this even is followed by EOU detection (but this could change in future).
   */
  finalTimeMs: number;
  /** This is index of last final server send. Incremented after each new final. */
  finalIndex: number;
  /**
   * Estimated time of EOU. Cursor is updated after each new EOU is sent.
   *  For external classifier this equals to received_data_ms at the moment EOU event arrives.
   *  For internal classifier this is estimation of time. The time is not exact and has the same guarantees as word timings.
   */
  eouTimeMs: number;
}

/** Refinement for final hypo. For example, text normalization is refinement. */
export interface FinalRefinement {
  $type: "speechkit.stt.v3.FinalRefinement";
  /** Index of final for which server sends additional information. */
  finalIndex: number;
  /** Normalized text instead of raw one. */
  normalizedText?: AlternativeUpdate | undefined;
}

/** Status message */
export interface StatusCode {
  $type: "speechkit.stt.v3.StatusCode";
  /** Code type. */
  codeType: CodeType;
  /** Human readable message. */
  message: string;
}

/** Session identifier. */
export interface SessionUuid {
  $type: "speechkit.stt.v3.SessionUuid";
  /** Internal session identifier. */
  uuid: string;
  /** User session identifier. */
  userRequestId: string;
}

/**
 * Responses from server.
 * Each response contains session uuid
 * AudioCursors
 * plus specific event
 */
export interface StreamingResponse {
  $type: "speechkit.stt.v3.StreamingResponse";
  /** Session identifier */
  sessionUuid?: SessionUuid;
  /** Progress bar for stream session recognition: how many data we obtained; final and partial times; etc. */
  audioCursors?: AudioCursors;
  /** Wall clock on server side. This is time when server wrote results to stream */
  responseWallTimeMs: number;
  /**
   * Partial results, server will send them regularly after enough audio data was received from user. This are current text estimation
   *  from final_time_ms to partial_time_ms. Could change after new data will arrive.
   */
  partial?: AlternativeUpdate | undefined;
  /** Final results, the recognition is now fixed until final_time_ms. For now, final is sent only if the EOU event was triggered. This could be change in future releases. */
  final?: AlternativeUpdate | undefined;
  /**
   * After EOU classifier, send the message with final, send the EouUpdate with time of EOU
   *  before eou_update we send final with the same time. there could be several finals before eou update.
   */
  eouUpdate?: EouUpdate | undefined;
  /**
   * For each final, if normalization is enabled, sent the normalized text (or some other advanced post-processing).
   *    Final normalization will introduce additional latency.
   */
  finalRefinement?: FinalRefinement | undefined;
  /** Status messages, send by server with fixed interval (keep-alive). */
  statusCode?: StatusCode | undefined;
}

const baseTextNormalizationOptions: object = {
  $type: "speechkit.stt.v3.TextNormalizationOptions",
  textNormalization: 0,
  profanityFilter: false,
  literatureText: false,
};

export const TextNormalizationOptions = {
  $type: "speechkit.stt.v3.TextNormalizationOptions" as const,

  encode(
    message: TextNormalizationOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.textNormalization !== 0) {
      writer.uint32(8).int32(message.textNormalization);
    }
    if (message.profanityFilter === true) {
      writer.uint32(16).bool(message.profanityFilter);
    }
    if (message.literatureText === true) {
      writer.uint32(24).bool(message.literatureText);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TextNormalizationOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTextNormalizationOptions,
    } as TextNormalizationOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.textNormalization = reader.int32() as any;
          break;
        case 2:
          message.profanityFilter = reader.bool();
          break;
        case 3:
          message.literatureText = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TextNormalizationOptions {
    const message = {
      ...baseTextNormalizationOptions,
    } as TextNormalizationOptions;
    message.textNormalization =
      object.textNormalization !== undefined &&
      object.textNormalization !== null
        ? textNormalizationOptions_TextNormalizationFromJSON(
            object.textNormalization
          )
        : 0;
    message.profanityFilter =
      object.profanityFilter !== undefined && object.profanityFilter !== null
        ? Boolean(object.profanityFilter)
        : false;
    message.literatureText =
      object.literatureText !== undefined && object.literatureText !== null
        ? Boolean(object.literatureText)
        : false;
    return message;
  },

  toJSON(message: TextNormalizationOptions): unknown {
    const obj: any = {};
    message.textNormalization !== undefined &&
      (obj.textNormalization = textNormalizationOptions_TextNormalizationToJSON(
        message.textNormalization
      ));
    message.profanityFilter !== undefined &&
      (obj.profanityFilter = message.profanityFilter);
    message.literatureText !== undefined &&
      (obj.literatureText = message.literatureText);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TextNormalizationOptions>, I>>(
    object: I
  ): TextNormalizationOptions {
    const message = {
      ...baseTextNormalizationOptions,
    } as TextNormalizationOptions;
    message.textNormalization = object.textNormalization ?? 0;
    message.profanityFilter = object.profanityFilter ?? false;
    message.literatureText = object.literatureText ?? false;
    return message;
  },
};

messageTypeRegistry.set(
  TextNormalizationOptions.$type,
  TextNormalizationOptions
);

const baseDefaultEouClassifier: object = {
  $type: "speechkit.stt.v3.DefaultEouClassifier",
  type: 0,
  maxPauseBetweenWordsHintMs: 0,
};

export const DefaultEouClassifier = {
  $type: "speechkit.stt.v3.DefaultEouClassifier" as const,

  encode(
    message: DefaultEouClassifier,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.maxPauseBetweenWordsHintMs !== 0) {
      writer.uint32(16).int64(message.maxPauseBetweenWordsHintMs);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DefaultEouClassifier {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDefaultEouClassifier } as DefaultEouClassifier;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.maxPauseBetweenWordsHintMs = longToNumber(
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

  fromJSON(object: any): DefaultEouClassifier {
    const message = { ...baseDefaultEouClassifier } as DefaultEouClassifier;
    message.type =
      object.type !== undefined && object.type !== null
        ? defaultEouClassifier_EouSensitivityFromJSON(object.type)
        : 0;
    message.maxPauseBetweenWordsHintMs =
      object.maxPauseBetweenWordsHintMs !== undefined &&
      object.maxPauseBetweenWordsHintMs !== null
        ? Number(object.maxPauseBetweenWordsHintMs)
        : 0;
    return message;
  },

  toJSON(message: DefaultEouClassifier): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = defaultEouClassifier_EouSensitivityToJSON(message.type));
    message.maxPauseBetweenWordsHintMs !== undefined &&
      (obj.maxPauseBetweenWordsHintMs = Math.round(
        message.maxPauseBetweenWordsHintMs
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DefaultEouClassifier>, I>>(
    object: I
  ): DefaultEouClassifier {
    const message = { ...baseDefaultEouClassifier } as DefaultEouClassifier;
    message.type = object.type ?? 0;
    message.maxPauseBetweenWordsHintMs = object.maxPauseBetweenWordsHintMs ?? 0;
    return message;
  },
};

messageTypeRegistry.set(DefaultEouClassifier.$type, DefaultEouClassifier);

const baseExternalEouClassifier: object = {
  $type: "speechkit.stt.v3.ExternalEouClassifier",
};

export const ExternalEouClassifier = {
  $type: "speechkit.stt.v3.ExternalEouClassifier" as const,

  encode(
    _: ExternalEouClassifier,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExternalEouClassifier {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExternalEouClassifier } as ExternalEouClassifier;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ExternalEouClassifier {
    const message = { ...baseExternalEouClassifier } as ExternalEouClassifier;
    return message;
  },

  toJSON(_: ExternalEouClassifier): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExternalEouClassifier>, I>>(
    _: I
  ): ExternalEouClassifier {
    const message = { ...baseExternalEouClassifier } as ExternalEouClassifier;
    return message;
  },
};

messageTypeRegistry.set(ExternalEouClassifier.$type, ExternalEouClassifier);

const baseEouClassifierOptions: object = {
  $type: "speechkit.stt.v3.EouClassifierOptions",
};

export const EouClassifierOptions = {
  $type: "speechkit.stt.v3.EouClassifierOptions" as const,

  encode(
    message: EouClassifierOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.defaultClassifier !== undefined) {
      DefaultEouClassifier.encode(
        message.defaultClassifier,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.externalClassifier !== undefined) {
      ExternalEouClassifier.encode(
        message.externalClassifier,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EouClassifierOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEouClassifierOptions } as EouClassifierOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defaultClassifier = DefaultEouClassifier.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.externalClassifier = ExternalEouClassifier.decode(
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

  fromJSON(object: any): EouClassifierOptions {
    const message = { ...baseEouClassifierOptions } as EouClassifierOptions;
    message.defaultClassifier =
      object.defaultClassifier !== undefined &&
      object.defaultClassifier !== null
        ? DefaultEouClassifier.fromJSON(object.defaultClassifier)
        : undefined;
    message.externalClassifier =
      object.externalClassifier !== undefined &&
      object.externalClassifier !== null
        ? ExternalEouClassifier.fromJSON(object.externalClassifier)
        : undefined;
    return message;
  },

  toJSON(message: EouClassifierOptions): unknown {
    const obj: any = {};
    message.defaultClassifier !== undefined &&
      (obj.defaultClassifier = message.defaultClassifier
        ? DefaultEouClassifier.toJSON(message.defaultClassifier)
        : undefined);
    message.externalClassifier !== undefined &&
      (obj.externalClassifier = message.externalClassifier
        ? ExternalEouClassifier.toJSON(message.externalClassifier)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EouClassifierOptions>, I>>(
    object: I
  ): EouClassifierOptions {
    const message = { ...baseEouClassifierOptions } as EouClassifierOptions;
    message.defaultClassifier =
      object.defaultClassifier !== undefined &&
      object.defaultClassifier !== null
        ? DefaultEouClassifier.fromPartial(object.defaultClassifier)
        : undefined;
    message.externalClassifier =
      object.externalClassifier !== undefined &&
      object.externalClassifier !== null
        ? ExternalEouClassifier.fromPartial(object.externalClassifier)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(EouClassifierOptions.$type, EouClassifierOptions);

const baseRawAudio: object = {
  $type: "speechkit.stt.v3.RawAudio",
  audioEncoding: 0,
  sampleRateHertz: 0,
  audioChannelCount: 0,
};

export const RawAudio = {
  $type: "speechkit.stt.v3.RawAudio" as const,

  encode(
    message: RawAudio,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.audioEncoding !== 0) {
      writer.uint32(8).int32(message.audioEncoding);
    }
    if (message.sampleRateHertz !== 0) {
      writer.uint32(16).int64(message.sampleRateHertz);
    }
    if (message.audioChannelCount !== 0) {
      writer.uint32(24).int64(message.audioChannelCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RawAudio {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRawAudio } as RawAudio;
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
          message.audioChannelCount = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RawAudio {
    const message = { ...baseRawAudio } as RawAudio;
    message.audioEncoding =
      object.audioEncoding !== undefined && object.audioEncoding !== null
        ? rawAudio_AudioEncodingFromJSON(object.audioEncoding)
        : 0;
    message.sampleRateHertz =
      object.sampleRateHertz !== undefined && object.sampleRateHertz !== null
        ? Number(object.sampleRateHertz)
        : 0;
    message.audioChannelCount =
      object.audioChannelCount !== undefined &&
      object.audioChannelCount !== null
        ? Number(object.audioChannelCount)
        : 0;
    return message;
  },

  toJSON(message: RawAudio): unknown {
    const obj: any = {};
    message.audioEncoding !== undefined &&
      (obj.audioEncoding = rawAudio_AudioEncodingToJSON(message.audioEncoding));
    message.sampleRateHertz !== undefined &&
      (obj.sampleRateHertz = Math.round(message.sampleRateHertz));
    message.audioChannelCount !== undefined &&
      (obj.audioChannelCount = Math.round(message.audioChannelCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RawAudio>, I>>(object: I): RawAudio {
    const message = { ...baseRawAudio } as RawAudio;
    message.audioEncoding = object.audioEncoding ?? 0;
    message.sampleRateHertz = object.sampleRateHertz ?? 0;
    message.audioChannelCount = object.audioChannelCount ?? 0;
    return message;
  },
};

messageTypeRegistry.set(RawAudio.$type, RawAudio);

const baseContainerAudio: object = {
  $type: "speechkit.stt.v3.ContainerAudio",
  containerAudioType: 0,
};

export const ContainerAudio = {
  $type: "speechkit.stt.v3.ContainerAudio" as const,

  encode(
    message: ContainerAudio,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.containerAudioType !== 0) {
      writer.uint32(8).int32(message.containerAudioType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContainerAudio {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseContainerAudio } as ContainerAudio;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.containerAudioType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContainerAudio {
    const message = { ...baseContainerAudio } as ContainerAudio;
    message.containerAudioType =
      object.containerAudioType !== undefined &&
      object.containerAudioType !== null
        ? containerAudio_ContainerAudioTypeFromJSON(object.containerAudioType)
        : 0;
    return message;
  },

  toJSON(message: ContainerAudio): unknown {
    const obj: any = {};
    message.containerAudioType !== undefined &&
      (obj.containerAudioType = containerAudio_ContainerAudioTypeToJSON(
        message.containerAudioType
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContainerAudio>, I>>(
    object: I
  ): ContainerAudio {
    const message = { ...baseContainerAudio } as ContainerAudio;
    message.containerAudioType = object.containerAudioType ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ContainerAudio.$type, ContainerAudio);

const baseAudioFormatOptions: object = {
  $type: "speechkit.stt.v3.AudioFormatOptions",
};

export const AudioFormatOptions = {
  $type: "speechkit.stt.v3.AudioFormatOptions" as const,

  encode(
    message: AudioFormatOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rawAudio !== undefined) {
      RawAudio.encode(message.rawAudio, writer.uint32(10).fork()).ldelim();
    }
    if (message.containerAudio !== undefined) {
      ContainerAudio.encode(
        message.containerAudio,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AudioFormatOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAudioFormatOptions } as AudioFormatOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rawAudio = RawAudio.decode(reader, reader.uint32());
          break;
        case 2:
          message.containerAudio = ContainerAudio.decode(
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

  fromJSON(object: any): AudioFormatOptions {
    const message = { ...baseAudioFormatOptions } as AudioFormatOptions;
    message.rawAudio =
      object.rawAudio !== undefined && object.rawAudio !== null
        ? RawAudio.fromJSON(object.rawAudio)
        : undefined;
    message.containerAudio =
      object.containerAudio !== undefined && object.containerAudio !== null
        ? ContainerAudio.fromJSON(object.containerAudio)
        : undefined;
    return message;
  },

  toJSON(message: AudioFormatOptions): unknown {
    const obj: any = {};
    message.rawAudio !== undefined &&
      (obj.rawAudio = message.rawAudio
        ? RawAudio.toJSON(message.rawAudio)
        : undefined);
    message.containerAudio !== undefined &&
      (obj.containerAudio = message.containerAudio
        ? ContainerAudio.toJSON(message.containerAudio)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AudioFormatOptions>, I>>(
    object: I
  ): AudioFormatOptions {
    const message = { ...baseAudioFormatOptions } as AudioFormatOptions;
    message.rawAudio =
      object.rawAudio !== undefined && object.rawAudio !== null
        ? RawAudio.fromPartial(object.rawAudio)
        : undefined;
    message.containerAudio =
      object.containerAudio !== undefined && object.containerAudio !== null
        ? ContainerAudio.fromPartial(object.containerAudio)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(AudioFormatOptions.$type, AudioFormatOptions);

const baseLanguageRestrictionOptions: object = {
  $type: "speechkit.stt.v3.LanguageRestrictionOptions",
  restrictionType: 0,
  languageCode: "",
};

export const LanguageRestrictionOptions = {
  $type: "speechkit.stt.v3.LanguageRestrictionOptions" as const,

  encode(
    message: LanguageRestrictionOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.restrictionType !== 0) {
      writer.uint32(8).int32(message.restrictionType);
    }
    for (const v of message.languageCode) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LanguageRestrictionOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseLanguageRestrictionOptions,
    } as LanguageRestrictionOptions;
    message.languageCode = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.restrictionType = reader.int32() as any;
          break;
        case 2:
          message.languageCode.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LanguageRestrictionOptions {
    const message = {
      ...baseLanguageRestrictionOptions,
    } as LanguageRestrictionOptions;
    message.restrictionType =
      object.restrictionType !== undefined && object.restrictionType !== null
        ? languageRestrictionOptions_LanguageRestrictionTypeFromJSON(
            object.restrictionType
          )
        : 0;
    message.languageCode = (object.languageCode ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: LanguageRestrictionOptions): unknown {
    const obj: any = {};
    message.restrictionType !== undefined &&
      (obj.restrictionType =
        languageRestrictionOptions_LanguageRestrictionTypeToJSON(
          message.restrictionType
        ));
    if (message.languageCode) {
      obj.languageCode = message.languageCode.map((e) => e);
    } else {
      obj.languageCode = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LanguageRestrictionOptions>, I>>(
    object: I
  ): LanguageRestrictionOptions {
    const message = {
      ...baseLanguageRestrictionOptions,
    } as LanguageRestrictionOptions;
    message.restrictionType = object.restrictionType ?? 0;
    message.languageCode = object.languageCode?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  LanguageRestrictionOptions.$type,
  LanguageRestrictionOptions
);

const baseRecognitionModelOptions: object = {
  $type: "speechkit.stt.v3.RecognitionModelOptions",
  model: "",
  audioProcessingType: 0,
};

export const RecognitionModelOptions = {
  $type: "speechkit.stt.v3.RecognitionModelOptions" as const,

  encode(
    message: RecognitionModelOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.model !== "") {
      writer.uint32(10).string(message.model);
    }
    if (message.audioFormat !== undefined) {
      AudioFormatOptions.encode(
        message.audioFormat,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.textNormalization !== undefined) {
      TextNormalizationOptions.encode(
        message.textNormalization,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.languageRestriction !== undefined) {
      LanguageRestrictionOptions.encode(
        message.languageRestriction,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.audioProcessingType !== 0) {
      writer.uint32(40).int32(message.audioProcessingType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RecognitionModelOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRecognitionModelOptions,
    } as RecognitionModelOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.model = reader.string();
          break;
        case 2:
          message.audioFormat = AudioFormatOptions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.textNormalization = TextNormalizationOptions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.languageRestriction = LanguageRestrictionOptions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.audioProcessingType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecognitionModelOptions {
    const message = {
      ...baseRecognitionModelOptions,
    } as RecognitionModelOptions;
    message.model =
      object.model !== undefined && object.model !== null
        ? String(object.model)
        : "";
    message.audioFormat =
      object.audioFormat !== undefined && object.audioFormat !== null
        ? AudioFormatOptions.fromJSON(object.audioFormat)
        : undefined;
    message.textNormalization =
      object.textNormalization !== undefined &&
      object.textNormalization !== null
        ? TextNormalizationOptions.fromJSON(object.textNormalization)
        : undefined;
    message.languageRestriction =
      object.languageRestriction !== undefined &&
      object.languageRestriction !== null
        ? LanguageRestrictionOptions.fromJSON(object.languageRestriction)
        : undefined;
    message.audioProcessingType =
      object.audioProcessingType !== undefined &&
      object.audioProcessingType !== null
        ? recognitionModelOptions_AudioProcessingTypeFromJSON(
            object.audioProcessingType
          )
        : 0;
    return message;
  },

  toJSON(message: RecognitionModelOptions): unknown {
    const obj: any = {};
    message.model !== undefined && (obj.model = message.model);
    message.audioFormat !== undefined &&
      (obj.audioFormat = message.audioFormat
        ? AudioFormatOptions.toJSON(message.audioFormat)
        : undefined);
    message.textNormalization !== undefined &&
      (obj.textNormalization = message.textNormalization
        ? TextNormalizationOptions.toJSON(message.textNormalization)
        : undefined);
    message.languageRestriction !== undefined &&
      (obj.languageRestriction = message.languageRestriction
        ? LanguageRestrictionOptions.toJSON(message.languageRestriction)
        : undefined);
    message.audioProcessingType !== undefined &&
      (obj.audioProcessingType =
        recognitionModelOptions_AudioProcessingTypeToJSON(
          message.audioProcessingType
        ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RecognitionModelOptions>, I>>(
    object: I
  ): RecognitionModelOptions {
    const message = {
      ...baseRecognitionModelOptions,
    } as RecognitionModelOptions;
    message.model = object.model ?? "";
    message.audioFormat =
      object.audioFormat !== undefined && object.audioFormat !== null
        ? AudioFormatOptions.fromPartial(object.audioFormat)
        : undefined;
    message.textNormalization =
      object.textNormalization !== undefined &&
      object.textNormalization !== null
        ? TextNormalizationOptions.fromPartial(object.textNormalization)
        : undefined;
    message.languageRestriction =
      object.languageRestriction !== undefined &&
      object.languageRestriction !== null
        ? LanguageRestrictionOptions.fromPartial(object.languageRestriction)
        : undefined;
    message.audioProcessingType = object.audioProcessingType ?? 0;
    return message;
  },
};

messageTypeRegistry.set(RecognitionModelOptions.$type, RecognitionModelOptions);

const baseStreamingOptions: object = {
  $type: "speechkit.stt.v3.StreamingOptions",
};

export const StreamingOptions = {
  $type: "speechkit.stt.v3.StreamingOptions" as const,

  encode(
    message: StreamingOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recognitionModel !== undefined) {
      RecognitionModelOptions.encode(
        message.recognitionModel,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.eouClassifier !== undefined) {
      EouClassifierOptions.encode(
        message.eouClassifier,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamingOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamingOptions } as StreamingOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recognitionModel = RecognitionModelOptions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.eouClassifier = EouClassifierOptions.decode(
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

  fromJSON(object: any): StreamingOptions {
    const message = { ...baseStreamingOptions } as StreamingOptions;
    message.recognitionModel =
      object.recognitionModel !== undefined && object.recognitionModel !== null
        ? RecognitionModelOptions.fromJSON(object.recognitionModel)
        : undefined;
    message.eouClassifier =
      object.eouClassifier !== undefined && object.eouClassifier !== null
        ? EouClassifierOptions.fromJSON(object.eouClassifier)
        : undefined;
    return message;
  },

  toJSON(message: StreamingOptions): unknown {
    const obj: any = {};
    message.recognitionModel !== undefined &&
      (obj.recognitionModel = message.recognitionModel
        ? RecognitionModelOptions.toJSON(message.recognitionModel)
        : undefined);
    message.eouClassifier !== undefined &&
      (obj.eouClassifier = message.eouClassifier
        ? EouClassifierOptions.toJSON(message.eouClassifier)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StreamingOptions>, I>>(
    object: I
  ): StreamingOptions {
    const message = { ...baseStreamingOptions } as StreamingOptions;
    message.recognitionModel =
      object.recognitionModel !== undefined && object.recognitionModel !== null
        ? RecognitionModelOptions.fromPartial(object.recognitionModel)
        : undefined;
    message.eouClassifier =
      object.eouClassifier !== undefined && object.eouClassifier !== null
        ? EouClassifierOptions.fromPartial(object.eouClassifier)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(StreamingOptions.$type, StreamingOptions);

const baseAudioChunk: object = { $type: "speechkit.stt.v3.AudioChunk" };

export const AudioChunk = {
  $type: "speechkit.stt.v3.AudioChunk" as const,

  encode(
    message: AudioChunk,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AudioChunk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAudioChunk } as AudioChunk;
    message.data = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AudioChunk {
    const message = { ...baseAudioChunk } as AudioChunk;
    message.data =
      object.data !== undefined && object.data !== null
        ? Buffer.from(bytesFromBase64(object.data))
        : Buffer.alloc(0);
    return message;
  },

  toJSON(message: AudioChunk): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : Buffer.alloc(0)
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AudioChunk>, I>>(
    object: I
  ): AudioChunk {
    const message = { ...baseAudioChunk } as AudioChunk;
    message.data = object.data ?? Buffer.alloc(0);
    return message;
  },
};

messageTypeRegistry.set(AudioChunk.$type, AudioChunk);

const baseSilenceChunk: object = {
  $type: "speechkit.stt.v3.SilenceChunk",
  durationMs: 0,
};

export const SilenceChunk = {
  $type: "speechkit.stt.v3.SilenceChunk" as const,

  encode(
    message: SilenceChunk,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.durationMs !== 0) {
      writer.uint32(8).int64(message.durationMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SilenceChunk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSilenceChunk } as SilenceChunk;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.durationMs = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SilenceChunk {
    const message = { ...baseSilenceChunk } as SilenceChunk;
    message.durationMs =
      object.durationMs !== undefined && object.durationMs !== null
        ? Number(object.durationMs)
        : 0;
    return message;
  },

  toJSON(message: SilenceChunk): unknown {
    const obj: any = {};
    message.durationMs !== undefined &&
      (obj.durationMs = Math.round(message.durationMs));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SilenceChunk>, I>>(
    object: I
  ): SilenceChunk {
    const message = { ...baseSilenceChunk } as SilenceChunk;
    message.durationMs = object.durationMs ?? 0;
    return message;
  },
};

messageTypeRegistry.set(SilenceChunk.$type, SilenceChunk);

const baseEou: object = { $type: "speechkit.stt.v3.Eou" };

export const Eou = {
  $type: "speechkit.stt.v3.Eou" as const,

  encode(_: Eou, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Eou {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEou } as Eou;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): Eou {
    const message = { ...baseEou } as Eou;
    return message;
  },

  toJSON(_: Eou): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Eou>, I>>(_: I): Eou {
    const message = { ...baseEou } as Eou;
    return message;
  },
};

messageTypeRegistry.set(Eou.$type, Eou);

const baseStreamingRequest: object = {
  $type: "speechkit.stt.v3.StreamingRequest",
};

export const StreamingRequest = {
  $type: "speechkit.stt.v3.StreamingRequest" as const,

  encode(
    message: StreamingRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sessionOptions !== undefined) {
      StreamingOptions.encode(
        message.sessionOptions,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.chunk !== undefined) {
      AudioChunk.encode(message.chunk, writer.uint32(18).fork()).ldelim();
    }
    if (message.silenceChunk !== undefined) {
      SilenceChunk.encode(
        message.silenceChunk,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.eou !== undefined) {
      Eou.encode(message.eou, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamingRequest } as StreamingRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionOptions = StreamingOptions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.chunk = AudioChunk.decode(reader, reader.uint32());
          break;
        case 3:
          message.silenceChunk = SilenceChunk.decode(reader, reader.uint32());
          break;
        case 4:
          message.eou = Eou.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamingRequest {
    const message = { ...baseStreamingRequest } as StreamingRequest;
    message.sessionOptions =
      object.sessionOptions !== undefined && object.sessionOptions !== null
        ? StreamingOptions.fromJSON(object.sessionOptions)
        : undefined;
    message.chunk =
      object.chunk !== undefined && object.chunk !== null
        ? AudioChunk.fromJSON(object.chunk)
        : undefined;
    message.silenceChunk =
      object.silenceChunk !== undefined && object.silenceChunk !== null
        ? SilenceChunk.fromJSON(object.silenceChunk)
        : undefined;
    message.eou =
      object.eou !== undefined && object.eou !== null
        ? Eou.fromJSON(object.eou)
        : undefined;
    return message;
  },

  toJSON(message: StreamingRequest): unknown {
    const obj: any = {};
    message.sessionOptions !== undefined &&
      (obj.sessionOptions = message.sessionOptions
        ? StreamingOptions.toJSON(message.sessionOptions)
        : undefined);
    message.chunk !== undefined &&
      (obj.chunk = message.chunk
        ? AudioChunk.toJSON(message.chunk)
        : undefined);
    message.silenceChunk !== undefined &&
      (obj.silenceChunk = message.silenceChunk
        ? SilenceChunk.toJSON(message.silenceChunk)
        : undefined);
    message.eou !== undefined &&
      (obj.eou = message.eou ? Eou.toJSON(message.eou) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StreamingRequest>, I>>(
    object: I
  ): StreamingRequest {
    const message = { ...baseStreamingRequest } as StreamingRequest;
    message.sessionOptions =
      object.sessionOptions !== undefined && object.sessionOptions !== null
        ? StreamingOptions.fromPartial(object.sessionOptions)
        : undefined;
    message.chunk =
      object.chunk !== undefined && object.chunk !== null
        ? AudioChunk.fromPartial(object.chunk)
        : undefined;
    message.silenceChunk =
      object.silenceChunk !== undefined && object.silenceChunk !== null
        ? SilenceChunk.fromPartial(object.silenceChunk)
        : undefined;
    message.eou =
      object.eou !== undefined && object.eou !== null
        ? Eou.fromPartial(object.eou)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(StreamingRequest.$type, StreamingRequest);

const baseWord: object = {
  $type: "speechkit.stt.v3.Word",
  text: "",
  startTimeMs: 0,
  endTimeMs: 0,
};

export const Word = {
  $type: "speechkit.stt.v3.Word" as const,

  encode(message: Word, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
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
          message.text = reader.string();
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
    message.text =
      object.text !== undefined && object.text !== null
        ? String(object.text)
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
    message.text !== undefined && (obj.text = message.text);
    message.startTimeMs !== undefined &&
      (obj.startTimeMs = Math.round(message.startTimeMs));
    message.endTimeMs !== undefined &&
      (obj.endTimeMs = Math.round(message.endTimeMs));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Word>, I>>(object: I): Word {
    const message = { ...baseWord } as Word;
    message.text = object.text ?? "";
    message.startTimeMs = object.startTimeMs ?? 0;
    message.endTimeMs = object.endTimeMs ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Word.$type, Word);

const baseAlternative: object = {
  $type: "speechkit.stt.v3.Alternative",
  text: "",
  startTimeMs: 0,
  endTimeMs: 0,
  confidence: 0,
};

export const Alternative = {
  $type: "speechkit.stt.v3.Alternative" as const,

  encode(
    message: Alternative,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.words) {
      Word.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    if (message.startTimeMs !== 0) {
      writer.uint32(24).int64(message.startTimeMs);
    }
    if (message.endTimeMs !== 0) {
      writer.uint32(32).int64(message.endTimeMs);
    }
    if (message.confidence !== 0) {
      writer.uint32(41).double(message.confidence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Alternative {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAlternative } as Alternative;
    message.words = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.words.push(Word.decode(reader, reader.uint32()));
          break;
        case 2:
          message.text = reader.string();
          break;
        case 3:
          message.startTimeMs = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.endTimeMs = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.confidence = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Alternative {
    const message = { ...baseAlternative } as Alternative;
    message.words = (object.words ?? []).map((e: any) => Word.fromJSON(e));
    message.text =
      object.text !== undefined && object.text !== null
        ? String(object.text)
        : "";
    message.startTimeMs =
      object.startTimeMs !== undefined && object.startTimeMs !== null
        ? Number(object.startTimeMs)
        : 0;
    message.endTimeMs =
      object.endTimeMs !== undefined && object.endTimeMs !== null
        ? Number(object.endTimeMs)
        : 0;
    message.confidence =
      object.confidence !== undefined && object.confidence !== null
        ? Number(object.confidence)
        : 0;
    return message;
  },

  toJSON(message: Alternative): unknown {
    const obj: any = {};
    if (message.words) {
      obj.words = message.words.map((e) => (e ? Word.toJSON(e) : undefined));
    } else {
      obj.words = [];
    }
    message.text !== undefined && (obj.text = message.text);
    message.startTimeMs !== undefined &&
      (obj.startTimeMs = Math.round(message.startTimeMs));
    message.endTimeMs !== undefined &&
      (obj.endTimeMs = Math.round(message.endTimeMs));
    message.confidence !== undefined && (obj.confidence = message.confidence);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Alternative>, I>>(
    object: I
  ): Alternative {
    const message = { ...baseAlternative } as Alternative;
    message.words = object.words?.map((e) => Word.fromPartial(e)) || [];
    message.text = object.text ?? "";
    message.startTimeMs = object.startTimeMs ?? 0;
    message.endTimeMs = object.endTimeMs ?? 0;
    message.confidence = object.confidence ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Alternative.$type, Alternative);

const baseEouUpdate: object = {
  $type: "speechkit.stt.v3.EouUpdate",
  timeMs: 0,
};

export const EouUpdate = {
  $type: "speechkit.stt.v3.EouUpdate" as const,

  encode(
    message: EouUpdate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timeMs !== 0) {
      writer.uint32(16).int64(message.timeMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EouUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEouUpdate } as EouUpdate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.timeMs = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EouUpdate {
    const message = { ...baseEouUpdate } as EouUpdate;
    message.timeMs =
      object.timeMs !== undefined && object.timeMs !== null
        ? Number(object.timeMs)
        : 0;
    return message;
  },

  toJSON(message: EouUpdate): unknown {
    const obj: any = {};
    message.timeMs !== undefined && (obj.timeMs = Math.round(message.timeMs));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EouUpdate>, I>>(
    object: I
  ): EouUpdate {
    const message = { ...baseEouUpdate } as EouUpdate;
    message.timeMs = object.timeMs ?? 0;
    return message;
  },
};

messageTypeRegistry.set(EouUpdate.$type, EouUpdate);

const baseAlternativeUpdate: object = {
  $type: "speechkit.stt.v3.AlternativeUpdate",
  channelTag: "",
};

export const AlternativeUpdate = {
  $type: "speechkit.stt.v3.AlternativeUpdate" as const,

  encode(
    message: AlternativeUpdate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.alternatives) {
      Alternative.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.channelTag !== "") {
      writer.uint32(18).string(message.channelTag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AlternativeUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAlternativeUpdate } as AlternativeUpdate;
    message.alternatives = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alternatives.push(
            Alternative.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.channelTag = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AlternativeUpdate {
    const message = { ...baseAlternativeUpdate } as AlternativeUpdate;
    message.alternatives = (object.alternatives ?? []).map((e: any) =>
      Alternative.fromJSON(e)
    );
    message.channelTag =
      object.channelTag !== undefined && object.channelTag !== null
        ? String(object.channelTag)
        : "";
    return message;
  },

  toJSON(message: AlternativeUpdate): unknown {
    const obj: any = {};
    if (message.alternatives) {
      obj.alternatives = message.alternatives.map((e) =>
        e ? Alternative.toJSON(e) : undefined
      );
    } else {
      obj.alternatives = [];
    }
    message.channelTag !== undefined && (obj.channelTag = message.channelTag);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AlternativeUpdate>, I>>(
    object: I
  ): AlternativeUpdate {
    const message = { ...baseAlternativeUpdate } as AlternativeUpdate;
    message.alternatives =
      object.alternatives?.map((e) => Alternative.fromPartial(e)) || [];
    message.channelTag = object.channelTag ?? "";
    return message;
  },
};

messageTypeRegistry.set(AlternativeUpdate.$type, AlternativeUpdate);

const baseAudioCursors: object = {
  $type: "speechkit.stt.v3.AudioCursors",
  receivedDataMs: 0,
  resetTimeMs: 0,
  partialTimeMs: 0,
  finalTimeMs: 0,
  finalIndex: 0,
  eouTimeMs: 0,
};

export const AudioCursors = {
  $type: "speechkit.stt.v3.AudioCursors" as const,

  encode(
    message: AudioCursors,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.receivedDataMs !== 0) {
      writer.uint32(8).int64(message.receivedDataMs);
    }
    if (message.resetTimeMs !== 0) {
      writer.uint32(16).int64(message.resetTimeMs);
    }
    if (message.partialTimeMs !== 0) {
      writer.uint32(24).int64(message.partialTimeMs);
    }
    if (message.finalTimeMs !== 0) {
      writer.uint32(32).int64(message.finalTimeMs);
    }
    if (message.finalIndex !== 0) {
      writer.uint32(40).int64(message.finalIndex);
    }
    if (message.eouTimeMs !== 0) {
      writer.uint32(48).int64(message.eouTimeMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AudioCursors {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAudioCursors } as AudioCursors;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receivedDataMs = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.resetTimeMs = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.partialTimeMs = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.finalTimeMs = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.finalIndex = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.eouTimeMs = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AudioCursors {
    const message = { ...baseAudioCursors } as AudioCursors;
    message.receivedDataMs =
      object.receivedDataMs !== undefined && object.receivedDataMs !== null
        ? Number(object.receivedDataMs)
        : 0;
    message.resetTimeMs =
      object.resetTimeMs !== undefined && object.resetTimeMs !== null
        ? Number(object.resetTimeMs)
        : 0;
    message.partialTimeMs =
      object.partialTimeMs !== undefined && object.partialTimeMs !== null
        ? Number(object.partialTimeMs)
        : 0;
    message.finalTimeMs =
      object.finalTimeMs !== undefined && object.finalTimeMs !== null
        ? Number(object.finalTimeMs)
        : 0;
    message.finalIndex =
      object.finalIndex !== undefined && object.finalIndex !== null
        ? Number(object.finalIndex)
        : 0;
    message.eouTimeMs =
      object.eouTimeMs !== undefined && object.eouTimeMs !== null
        ? Number(object.eouTimeMs)
        : 0;
    return message;
  },

  toJSON(message: AudioCursors): unknown {
    const obj: any = {};
    message.receivedDataMs !== undefined &&
      (obj.receivedDataMs = Math.round(message.receivedDataMs));
    message.resetTimeMs !== undefined &&
      (obj.resetTimeMs = Math.round(message.resetTimeMs));
    message.partialTimeMs !== undefined &&
      (obj.partialTimeMs = Math.round(message.partialTimeMs));
    message.finalTimeMs !== undefined &&
      (obj.finalTimeMs = Math.round(message.finalTimeMs));
    message.finalIndex !== undefined &&
      (obj.finalIndex = Math.round(message.finalIndex));
    message.eouTimeMs !== undefined &&
      (obj.eouTimeMs = Math.round(message.eouTimeMs));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AudioCursors>, I>>(
    object: I
  ): AudioCursors {
    const message = { ...baseAudioCursors } as AudioCursors;
    message.receivedDataMs = object.receivedDataMs ?? 0;
    message.resetTimeMs = object.resetTimeMs ?? 0;
    message.partialTimeMs = object.partialTimeMs ?? 0;
    message.finalTimeMs = object.finalTimeMs ?? 0;
    message.finalIndex = object.finalIndex ?? 0;
    message.eouTimeMs = object.eouTimeMs ?? 0;
    return message;
  },
};

messageTypeRegistry.set(AudioCursors.$type, AudioCursors);

const baseFinalRefinement: object = {
  $type: "speechkit.stt.v3.FinalRefinement",
  finalIndex: 0,
};

export const FinalRefinement = {
  $type: "speechkit.stt.v3.FinalRefinement" as const,

  encode(
    message: FinalRefinement,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.finalIndex !== 0) {
      writer.uint32(8).int64(message.finalIndex);
    }
    if (message.normalizedText !== undefined) {
      AlternativeUpdate.encode(
        message.normalizedText,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FinalRefinement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFinalRefinement } as FinalRefinement;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.finalIndex = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.normalizedText = AlternativeUpdate.decode(
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

  fromJSON(object: any): FinalRefinement {
    const message = { ...baseFinalRefinement } as FinalRefinement;
    message.finalIndex =
      object.finalIndex !== undefined && object.finalIndex !== null
        ? Number(object.finalIndex)
        : 0;
    message.normalizedText =
      object.normalizedText !== undefined && object.normalizedText !== null
        ? AlternativeUpdate.fromJSON(object.normalizedText)
        : undefined;
    return message;
  },

  toJSON(message: FinalRefinement): unknown {
    const obj: any = {};
    message.finalIndex !== undefined &&
      (obj.finalIndex = Math.round(message.finalIndex));
    message.normalizedText !== undefined &&
      (obj.normalizedText = message.normalizedText
        ? AlternativeUpdate.toJSON(message.normalizedText)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FinalRefinement>, I>>(
    object: I
  ): FinalRefinement {
    const message = { ...baseFinalRefinement } as FinalRefinement;
    message.finalIndex = object.finalIndex ?? 0;
    message.normalizedText =
      object.normalizedText !== undefined && object.normalizedText !== null
        ? AlternativeUpdate.fromPartial(object.normalizedText)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(FinalRefinement.$type, FinalRefinement);

const baseStatusCode: object = {
  $type: "speechkit.stt.v3.StatusCode",
  codeType: 0,
  message: "",
};

export const StatusCode = {
  $type: "speechkit.stt.v3.StatusCode" as const,

  encode(
    message: StatusCode,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.codeType !== 0) {
      writer.uint32(8).int32(message.codeType);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatusCode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStatusCode } as StatusCode;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeType = reader.int32() as any;
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

  fromJSON(object: any): StatusCode {
    const message = { ...baseStatusCode } as StatusCode;
    message.codeType =
      object.codeType !== undefined && object.codeType !== null
        ? codeTypeFromJSON(object.codeType)
        : 0;
    message.message =
      object.message !== undefined && object.message !== null
        ? String(object.message)
        : "";
    return message;
  },

  toJSON(message: StatusCode): unknown {
    const obj: any = {};
    message.codeType !== undefined &&
      (obj.codeType = codeTypeToJSON(message.codeType));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StatusCode>, I>>(
    object: I
  ): StatusCode {
    const message = { ...baseStatusCode } as StatusCode;
    message.codeType = object.codeType ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

messageTypeRegistry.set(StatusCode.$type, StatusCode);

const baseSessionUuid: object = {
  $type: "speechkit.stt.v3.SessionUuid",
  uuid: "",
  userRequestId: "",
};

export const SessionUuid = {
  $type: "speechkit.stt.v3.SessionUuid" as const,

  encode(
    message: SessionUuid,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    if (message.userRequestId !== "") {
      writer.uint32(18).string(message.userRequestId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SessionUuid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSessionUuid } as SessionUuid;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = reader.string();
          break;
        case 2:
          message.userRequestId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SessionUuid {
    const message = { ...baseSessionUuid } as SessionUuid;
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? String(object.uuid)
        : "";
    message.userRequestId =
      object.userRequestId !== undefined && object.userRequestId !== null
        ? String(object.userRequestId)
        : "";
    return message;
  },

  toJSON(message: SessionUuid): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.userRequestId !== undefined &&
      (obj.userRequestId = message.userRequestId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SessionUuid>, I>>(
    object: I
  ): SessionUuid {
    const message = { ...baseSessionUuid } as SessionUuid;
    message.uuid = object.uuid ?? "";
    message.userRequestId = object.userRequestId ?? "";
    return message;
  },
};

messageTypeRegistry.set(SessionUuid.$type, SessionUuid);

const baseStreamingResponse: object = {
  $type: "speechkit.stt.v3.StreamingResponse",
  responseWallTimeMs: 0,
};

export const StreamingResponse = {
  $type: "speechkit.stt.v3.StreamingResponse" as const,

  encode(
    message: StreamingResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sessionUuid !== undefined) {
      SessionUuid.encode(
        message.sessionUuid,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.audioCursors !== undefined) {
      AudioCursors.encode(
        message.audioCursors,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.responseWallTimeMs !== 0) {
      writer.uint32(24).int64(message.responseWallTimeMs);
    }
    if (message.partial !== undefined) {
      AlternativeUpdate.encode(
        message.partial,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.final !== undefined) {
      AlternativeUpdate.encode(
        message.final,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.eouUpdate !== undefined) {
      EouUpdate.encode(message.eouUpdate, writer.uint32(50).fork()).ldelim();
    }
    if (message.finalRefinement !== undefined) {
      FinalRefinement.encode(
        message.finalRefinement,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.statusCode !== undefined) {
      StatusCode.encode(message.statusCode, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamingResponse } as StreamingResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionUuid = SessionUuid.decode(reader, reader.uint32());
          break;
        case 2:
          message.audioCursors = AudioCursors.decode(reader, reader.uint32());
          break;
        case 3:
          message.responseWallTimeMs = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.partial = AlternativeUpdate.decode(reader, reader.uint32());
          break;
        case 5:
          message.final = AlternativeUpdate.decode(reader, reader.uint32());
          break;
        case 6:
          message.eouUpdate = EouUpdate.decode(reader, reader.uint32());
          break;
        case 7:
          message.finalRefinement = FinalRefinement.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.statusCode = StatusCode.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamingResponse {
    const message = { ...baseStreamingResponse } as StreamingResponse;
    message.sessionUuid =
      object.sessionUuid !== undefined && object.sessionUuid !== null
        ? SessionUuid.fromJSON(object.sessionUuid)
        : undefined;
    message.audioCursors =
      object.audioCursors !== undefined && object.audioCursors !== null
        ? AudioCursors.fromJSON(object.audioCursors)
        : undefined;
    message.responseWallTimeMs =
      object.responseWallTimeMs !== undefined &&
      object.responseWallTimeMs !== null
        ? Number(object.responseWallTimeMs)
        : 0;
    message.partial =
      object.partial !== undefined && object.partial !== null
        ? AlternativeUpdate.fromJSON(object.partial)
        : undefined;
    message.final =
      object.final !== undefined && object.final !== null
        ? AlternativeUpdate.fromJSON(object.final)
        : undefined;
    message.eouUpdate =
      object.eouUpdate !== undefined && object.eouUpdate !== null
        ? EouUpdate.fromJSON(object.eouUpdate)
        : undefined;
    message.finalRefinement =
      object.finalRefinement !== undefined && object.finalRefinement !== null
        ? FinalRefinement.fromJSON(object.finalRefinement)
        : undefined;
    message.statusCode =
      object.statusCode !== undefined && object.statusCode !== null
        ? StatusCode.fromJSON(object.statusCode)
        : undefined;
    return message;
  },

  toJSON(message: StreamingResponse): unknown {
    const obj: any = {};
    message.sessionUuid !== undefined &&
      (obj.sessionUuid = message.sessionUuid
        ? SessionUuid.toJSON(message.sessionUuid)
        : undefined);
    message.audioCursors !== undefined &&
      (obj.audioCursors = message.audioCursors
        ? AudioCursors.toJSON(message.audioCursors)
        : undefined);
    message.responseWallTimeMs !== undefined &&
      (obj.responseWallTimeMs = Math.round(message.responseWallTimeMs));
    message.partial !== undefined &&
      (obj.partial = message.partial
        ? AlternativeUpdate.toJSON(message.partial)
        : undefined);
    message.final !== undefined &&
      (obj.final = message.final
        ? AlternativeUpdate.toJSON(message.final)
        : undefined);
    message.eouUpdate !== undefined &&
      (obj.eouUpdate = message.eouUpdate
        ? EouUpdate.toJSON(message.eouUpdate)
        : undefined);
    message.finalRefinement !== undefined &&
      (obj.finalRefinement = message.finalRefinement
        ? FinalRefinement.toJSON(message.finalRefinement)
        : undefined);
    message.statusCode !== undefined &&
      (obj.statusCode = message.statusCode
        ? StatusCode.toJSON(message.statusCode)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StreamingResponse>, I>>(
    object: I
  ): StreamingResponse {
    const message = { ...baseStreamingResponse } as StreamingResponse;
    message.sessionUuid =
      object.sessionUuid !== undefined && object.sessionUuid !== null
        ? SessionUuid.fromPartial(object.sessionUuid)
        : undefined;
    message.audioCursors =
      object.audioCursors !== undefined && object.audioCursors !== null
        ? AudioCursors.fromPartial(object.audioCursors)
        : undefined;
    message.responseWallTimeMs = object.responseWallTimeMs ?? 0;
    message.partial =
      object.partial !== undefined && object.partial !== null
        ? AlternativeUpdate.fromPartial(object.partial)
        : undefined;
    message.final =
      object.final !== undefined && object.final !== null
        ? AlternativeUpdate.fromPartial(object.final)
        : undefined;
    message.eouUpdate =
      object.eouUpdate !== undefined && object.eouUpdate !== null
        ? EouUpdate.fromPartial(object.eouUpdate)
        : undefined;
    message.finalRefinement =
      object.finalRefinement !== undefined && object.finalRefinement !== null
        ? FinalRefinement.fromPartial(object.finalRefinement)
        : undefined;
    message.statusCode =
      object.statusCode !== undefined && object.statusCode !== null
        ? StatusCode.fromPartial(object.statusCode)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(StreamingResponse.$type, StreamingResponse);

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
