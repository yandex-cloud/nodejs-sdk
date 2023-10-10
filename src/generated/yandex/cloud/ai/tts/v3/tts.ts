/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "speechkit.tts.v3";

export interface AudioContent {
  $type: "speechkit.tts.v3.AudioContent";
  /** Bytes with audio data. */
  content: Buffer | undefined;
  /** Description of the audio format. */
  audioSpec?: AudioFormatOptions;
}

export interface AudioFormatOptions {
  $type: "speechkit.tts.v3.AudioFormatOptions";
  /** The audio format specified in request parameters. */
  rawAudio?: RawAudio | undefined;
  /** The audio format specified inside the container metadata. */
  containerAudio?: ContainerAudio | undefined;
}

export interface RawAudio {
  $type: "speechkit.tts.v3.RawAudio";
  /** Encoding type. */
  audioEncoding: RawAudio_AudioEncoding;
  /** Sampling frequency of the signal. */
  sampleRateHertz: number;
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

export interface ContainerAudio {
  $type: "speechkit.tts.v3.ContainerAudio";
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

export interface TextVariable {
  $type: "speechkit.tts.v3.TextVariable";
  /** The name of the variable. */
  variableName: string;
  /** The text of the variable. */
  variableValue: string;
}

export interface AudioVariable {
  $type: "speechkit.tts.v3.AudioVariable";
  /** The name of the variable. */
  variableName: string;
  /** Start time of the variable in milliseconds. */
  variableStartMs: number;
  /** Length of the variable in milliseconds. */
  variableLengthMs: number;
}

export interface UtteranceSynthesisResponse {
  $type: "speechkit.tts.v3.UtteranceSynthesisResponse";
  /** Part of synthesized audio. */
  audioChunk?: AudioChunk;
}

export interface AudioTemplate {
  $type: "speechkit.tts.v3.AudioTemplate";
  /** Audio file. */
  audio?: AudioContent;
  /** Template and description of its variables. */
  textTemplate?: TextTemplate;
  /** Describing variables in audio. */
  variables: AudioVariable[];
}

export interface AudioChunk {
  $type: "speechkit.tts.v3.AudioChunk";
  /** Sequence of bytes of the synthesized audio in format specified in output_audio_spec. */
  data: Buffer;
}

export interface TextTemplate {
  $type: "speechkit.tts.v3.TextTemplate";
  /**
   * Template text.
   *
   * Sample:`The {animal} goes to the {place}.`
   */
  textTemplate: string;
  /**
   * Defining variables in template text.
   *
   * Sample: `{animal: cat, place: forest}`
   */
  variables: TextVariable[];
}

export interface Hints {
  $type: "speechkit.tts.v3.Hints";
  /** Name of speaker to use. */
  voice: string | undefined;
  /** Template for synthesizing. */
  audioTemplate?: AudioTemplate | undefined;
  /** Hint to change speed. */
  speed: number | undefined;
  /**
   * Hint to regulate normalization level.
   * * For `MAX_PEAK` loudness_normalization_type: volume changes in a range (0;1], default value is 0.7.
   * * For `LUFS` loudness_normalization_type: volume changes in a range [-145;0), default value is -19.
   */
  volume: number | undefined;
  /** Hint to specify pronunciation character for the speaker. */
  role: string | undefined;
  /** Hint to increase (or decrease) speaker's pitch, measured in Hz. Valid values are in range [-1000;1000], default value is 0. */
  pitchShift: number | undefined;
}

export interface UtteranceSynthesisRequest {
  $type: "speechkit.tts.v3.UtteranceSynthesisRequest";
  /**
   * The name of the model.
   * Specifies basic synthesis functionality. Currently should be empty. Do not use it.
   */
  model: string;
  /** Raw text (e.g. "Hello, Alice"). */
  text: string | undefined;
  /** Text template instance, e.g. `{"Hello, {username}" with username="Alice"}`. */
  textTemplate?: TextTemplate | undefined;
  /** Optional hints for synthesis. */
  hints: Hints[];
  /** Optional. Default: 22050 Hz, linear 16-bit signed little-endian PCM, with WAV header */
  outputAudioSpec?: AudioFormatOptions;
  /**
   * Specifies type of loudness normalization.
   * Optional. Default: `LUFS`.
   */
  loudnessNormalizationType: UtteranceSynthesisRequest_LoudnessNormalizationType;
  /** Optional. Automatically split long text to several utterances and bill accordingly. Some degradation in service quality is possible. */
  unsafeMode: boolean;
}

export enum UtteranceSynthesisRequest_LoudnessNormalizationType {
  LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED = 0,
  /** MAX_PEAK - The type of normalization, wherein the gain is changed to bring the highest PCM sample value or analog signal peak to a given level. */
  MAX_PEAK = 1,
  /** LUFS - The type of normalization based on EBU R 128 recommendation. */
  LUFS = 2,
  UNRECOGNIZED = -1,
}

export function utteranceSynthesisRequest_LoudnessNormalizationTypeFromJSON(
  object: any
): UtteranceSynthesisRequest_LoudnessNormalizationType {
  switch (object) {
    case 0:
    case "LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED":
      return UtteranceSynthesisRequest_LoudnessNormalizationType.LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED;
    case 1:
    case "MAX_PEAK":
      return UtteranceSynthesisRequest_LoudnessNormalizationType.MAX_PEAK;
    case 2:
    case "LUFS":
      return UtteranceSynthesisRequest_LoudnessNormalizationType.LUFS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UtteranceSynthesisRequest_LoudnessNormalizationType.UNRECOGNIZED;
  }
}

export function utteranceSynthesisRequest_LoudnessNormalizationTypeToJSON(
  object: UtteranceSynthesisRequest_LoudnessNormalizationType
): string {
  switch (object) {
    case UtteranceSynthesisRequest_LoudnessNormalizationType.LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED:
      return "LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED";
    case UtteranceSynthesisRequest_LoudnessNormalizationType.MAX_PEAK:
      return "MAX_PEAK";
    case UtteranceSynthesisRequest_LoudnessNormalizationType.LUFS:
      return "LUFS";
    default:
      return "UNKNOWN";
  }
}

const baseAudioContent: object = { $type: "speechkit.tts.v3.AudioContent" };

export const AudioContent = {
  $type: "speechkit.tts.v3.AudioContent" as const,

  encode(
    message: AudioContent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.content !== undefined) {
      writer.uint32(10).bytes(message.content);
    }
    if (message.audioSpec !== undefined) {
      AudioFormatOptions.encode(
        message.audioSpec,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AudioContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAudioContent } as AudioContent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = reader.bytes() as Buffer;
          break;
        case 2:
          message.audioSpec = AudioFormatOptions.decode(
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

  fromJSON(object: any): AudioContent {
    const message = { ...baseAudioContent } as AudioContent;
    message.content =
      object.content !== undefined && object.content !== null
        ? Buffer.from(bytesFromBase64(object.content))
        : undefined;
    message.audioSpec =
      object.audioSpec !== undefined && object.audioSpec !== null
        ? AudioFormatOptions.fromJSON(object.audioSpec)
        : undefined;
    return message;
  },

  toJSON(message: AudioContent): unknown {
    const obj: any = {};
    message.content !== undefined &&
      (obj.content =
        message.content !== undefined
          ? base64FromBytes(message.content)
          : undefined);
    message.audioSpec !== undefined &&
      (obj.audioSpec = message.audioSpec
        ? AudioFormatOptions.toJSON(message.audioSpec)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AudioContent>, I>>(
    object: I
  ): AudioContent {
    const message = { ...baseAudioContent } as AudioContent;
    message.content = object.content ?? undefined;
    message.audioSpec =
      object.audioSpec !== undefined && object.audioSpec !== null
        ? AudioFormatOptions.fromPartial(object.audioSpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(AudioContent.$type, AudioContent);

const baseAudioFormatOptions: object = {
  $type: "speechkit.tts.v3.AudioFormatOptions",
};

export const AudioFormatOptions = {
  $type: "speechkit.tts.v3.AudioFormatOptions" as const,

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

const baseRawAudio: object = {
  $type: "speechkit.tts.v3.RawAudio",
  audioEncoding: 0,
  sampleRateHertz: 0,
};

export const RawAudio = {
  $type: "speechkit.tts.v3.RawAudio" as const,

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
    return message;
  },

  toJSON(message: RawAudio): unknown {
    const obj: any = {};
    message.audioEncoding !== undefined &&
      (obj.audioEncoding = rawAudio_AudioEncodingToJSON(message.audioEncoding));
    message.sampleRateHertz !== undefined &&
      (obj.sampleRateHertz = Math.round(message.sampleRateHertz));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RawAudio>, I>>(object: I): RawAudio {
    const message = { ...baseRawAudio } as RawAudio;
    message.audioEncoding = object.audioEncoding ?? 0;
    message.sampleRateHertz = object.sampleRateHertz ?? 0;
    return message;
  },
};

messageTypeRegistry.set(RawAudio.$type, RawAudio);

const baseContainerAudio: object = {
  $type: "speechkit.tts.v3.ContainerAudio",
  containerAudioType: 0,
};

export const ContainerAudio = {
  $type: "speechkit.tts.v3.ContainerAudio" as const,

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

const baseTextVariable: object = {
  $type: "speechkit.tts.v3.TextVariable",
  variableName: "",
  variableValue: "",
};

export const TextVariable = {
  $type: "speechkit.tts.v3.TextVariable" as const,

  encode(
    message: TextVariable,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.variableName !== "") {
      writer.uint32(10).string(message.variableName);
    }
    if (message.variableValue !== "") {
      writer.uint32(18).string(message.variableValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TextVariable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTextVariable } as TextVariable;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.variableName = reader.string();
          break;
        case 2:
          message.variableValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TextVariable {
    const message = { ...baseTextVariable } as TextVariable;
    message.variableName =
      object.variableName !== undefined && object.variableName !== null
        ? String(object.variableName)
        : "";
    message.variableValue =
      object.variableValue !== undefined && object.variableValue !== null
        ? String(object.variableValue)
        : "";
    return message;
  },

  toJSON(message: TextVariable): unknown {
    const obj: any = {};
    message.variableName !== undefined &&
      (obj.variableName = message.variableName);
    message.variableValue !== undefined &&
      (obj.variableValue = message.variableValue);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TextVariable>, I>>(
    object: I
  ): TextVariable {
    const message = { ...baseTextVariable } as TextVariable;
    message.variableName = object.variableName ?? "";
    message.variableValue = object.variableValue ?? "";
    return message;
  },
};

messageTypeRegistry.set(TextVariable.$type, TextVariable);

const baseAudioVariable: object = {
  $type: "speechkit.tts.v3.AudioVariable",
  variableName: "",
  variableStartMs: 0,
  variableLengthMs: 0,
};

export const AudioVariable = {
  $type: "speechkit.tts.v3.AudioVariable" as const,

  encode(
    message: AudioVariable,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.variableName !== "") {
      writer.uint32(10).string(message.variableName);
    }
    if (message.variableStartMs !== 0) {
      writer.uint32(16).int64(message.variableStartMs);
    }
    if (message.variableLengthMs !== 0) {
      writer.uint32(24).int64(message.variableLengthMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AudioVariable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAudioVariable } as AudioVariable;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.variableName = reader.string();
          break;
        case 2:
          message.variableStartMs = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.variableLengthMs = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AudioVariable {
    const message = { ...baseAudioVariable } as AudioVariable;
    message.variableName =
      object.variableName !== undefined && object.variableName !== null
        ? String(object.variableName)
        : "";
    message.variableStartMs =
      object.variableStartMs !== undefined && object.variableStartMs !== null
        ? Number(object.variableStartMs)
        : 0;
    message.variableLengthMs =
      object.variableLengthMs !== undefined && object.variableLengthMs !== null
        ? Number(object.variableLengthMs)
        : 0;
    return message;
  },

  toJSON(message: AudioVariable): unknown {
    const obj: any = {};
    message.variableName !== undefined &&
      (obj.variableName = message.variableName);
    message.variableStartMs !== undefined &&
      (obj.variableStartMs = Math.round(message.variableStartMs));
    message.variableLengthMs !== undefined &&
      (obj.variableLengthMs = Math.round(message.variableLengthMs));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AudioVariable>, I>>(
    object: I
  ): AudioVariable {
    const message = { ...baseAudioVariable } as AudioVariable;
    message.variableName = object.variableName ?? "";
    message.variableStartMs = object.variableStartMs ?? 0;
    message.variableLengthMs = object.variableLengthMs ?? 0;
    return message;
  },
};

messageTypeRegistry.set(AudioVariable.$type, AudioVariable);

const baseUtteranceSynthesisResponse: object = {
  $type: "speechkit.tts.v3.UtteranceSynthesisResponse",
};

export const UtteranceSynthesisResponse = {
  $type: "speechkit.tts.v3.UtteranceSynthesisResponse" as const,

  encode(
    message: UtteranceSynthesisResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.audioChunk !== undefined) {
      AudioChunk.encode(message.audioChunk, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UtteranceSynthesisResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUtteranceSynthesisResponse,
    } as UtteranceSynthesisResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.audioChunk = AudioChunk.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UtteranceSynthesisResponse {
    const message = {
      ...baseUtteranceSynthesisResponse,
    } as UtteranceSynthesisResponse;
    message.audioChunk =
      object.audioChunk !== undefined && object.audioChunk !== null
        ? AudioChunk.fromJSON(object.audioChunk)
        : undefined;
    return message;
  },

  toJSON(message: UtteranceSynthesisResponse): unknown {
    const obj: any = {};
    message.audioChunk !== undefined &&
      (obj.audioChunk = message.audioChunk
        ? AudioChunk.toJSON(message.audioChunk)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UtteranceSynthesisResponse>, I>>(
    object: I
  ): UtteranceSynthesisResponse {
    const message = {
      ...baseUtteranceSynthesisResponse,
    } as UtteranceSynthesisResponse;
    message.audioChunk =
      object.audioChunk !== undefined && object.audioChunk !== null
        ? AudioChunk.fromPartial(object.audioChunk)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  UtteranceSynthesisResponse.$type,
  UtteranceSynthesisResponse
);

const baseAudioTemplate: object = { $type: "speechkit.tts.v3.AudioTemplate" };

export const AudioTemplate = {
  $type: "speechkit.tts.v3.AudioTemplate" as const,

  encode(
    message: AudioTemplate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.audio !== undefined) {
      AudioContent.encode(message.audio, writer.uint32(10).fork()).ldelim();
    }
    if (message.textTemplate !== undefined) {
      TextTemplate.encode(
        message.textTemplate,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.variables) {
      AudioVariable.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AudioTemplate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAudioTemplate } as AudioTemplate;
    message.variables = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.audio = AudioContent.decode(reader, reader.uint32());
          break;
        case 2:
          message.textTemplate = TextTemplate.decode(reader, reader.uint32());
          break;
        case 3:
          message.variables.push(AudioVariable.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AudioTemplate {
    const message = { ...baseAudioTemplate } as AudioTemplate;
    message.audio =
      object.audio !== undefined && object.audio !== null
        ? AudioContent.fromJSON(object.audio)
        : undefined;
    message.textTemplate =
      object.textTemplate !== undefined && object.textTemplate !== null
        ? TextTemplate.fromJSON(object.textTemplate)
        : undefined;
    message.variables = (object.variables ?? []).map((e: any) =>
      AudioVariable.fromJSON(e)
    );
    return message;
  },

  toJSON(message: AudioTemplate): unknown {
    const obj: any = {};
    message.audio !== undefined &&
      (obj.audio = message.audio
        ? AudioContent.toJSON(message.audio)
        : undefined);
    message.textTemplate !== undefined &&
      (obj.textTemplate = message.textTemplate
        ? TextTemplate.toJSON(message.textTemplate)
        : undefined);
    if (message.variables) {
      obj.variables = message.variables.map((e) =>
        e ? AudioVariable.toJSON(e) : undefined
      );
    } else {
      obj.variables = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AudioTemplate>, I>>(
    object: I
  ): AudioTemplate {
    const message = { ...baseAudioTemplate } as AudioTemplate;
    message.audio =
      object.audio !== undefined && object.audio !== null
        ? AudioContent.fromPartial(object.audio)
        : undefined;
    message.textTemplate =
      object.textTemplate !== undefined && object.textTemplate !== null
        ? TextTemplate.fromPartial(object.textTemplate)
        : undefined;
    message.variables =
      object.variables?.map((e) => AudioVariable.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(AudioTemplate.$type, AudioTemplate);

const baseAudioChunk: object = { $type: "speechkit.tts.v3.AudioChunk" };

export const AudioChunk = {
  $type: "speechkit.tts.v3.AudioChunk" as const,

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

const baseTextTemplate: object = {
  $type: "speechkit.tts.v3.TextTemplate",
  textTemplate: "",
};

export const TextTemplate = {
  $type: "speechkit.tts.v3.TextTemplate" as const,

  encode(
    message: TextTemplate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.textTemplate !== "") {
      writer.uint32(10).string(message.textTemplate);
    }
    for (const v of message.variables) {
      TextVariable.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TextTemplate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTextTemplate } as TextTemplate;
    message.variables = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.textTemplate = reader.string();
          break;
        case 2:
          message.variables.push(TextVariable.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TextTemplate {
    const message = { ...baseTextTemplate } as TextTemplate;
    message.textTemplate =
      object.textTemplate !== undefined && object.textTemplate !== null
        ? String(object.textTemplate)
        : "";
    message.variables = (object.variables ?? []).map((e: any) =>
      TextVariable.fromJSON(e)
    );
    return message;
  },

  toJSON(message: TextTemplate): unknown {
    const obj: any = {};
    message.textTemplate !== undefined &&
      (obj.textTemplate = message.textTemplate);
    if (message.variables) {
      obj.variables = message.variables.map((e) =>
        e ? TextVariable.toJSON(e) : undefined
      );
    } else {
      obj.variables = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TextTemplate>, I>>(
    object: I
  ): TextTemplate {
    const message = { ...baseTextTemplate } as TextTemplate;
    message.textTemplate = object.textTemplate ?? "";
    message.variables =
      object.variables?.map((e) => TextVariable.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(TextTemplate.$type, TextTemplate);

const baseHints: object = { $type: "speechkit.tts.v3.Hints" };

export const Hints = {
  $type: "speechkit.tts.v3.Hints" as const,

  encode(message: Hints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.voice !== undefined) {
      writer.uint32(10).string(message.voice);
    }
    if (message.audioTemplate !== undefined) {
      AudioTemplate.encode(
        message.audioTemplate,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.speed !== undefined) {
      writer.uint32(25).double(message.speed);
    }
    if (message.volume !== undefined) {
      writer.uint32(33).double(message.volume);
    }
    if (message.role !== undefined) {
      writer.uint32(42).string(message.role);
    }
    if (message.pitchShift !== undefined) {
      writer.uint32(49).double(message.pitchShift);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Hints {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHints } as Hints;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voice = reader.string();
          break;
        case 2:
          message.audioTemplate = AudioTemplate.decode(reader, reader.uint32());
          break;
        case 3:
          message.speed = reader.double();
          break;
        case 4:
          message.volume = reader.double();
          break;
        case 5:
          message.role = reader.string();
          break;
        case 6:
          message.pitchShift = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Hints {
    const message = { ...baseHints } as Hints;
    message.voice =
      object.voice !== undefined && object.voice !== null
        ? String(object.voice)
        : undefined;
    message.audioTemplate =
      object.audioTemplate !== undefined && object.audioTemplate !== null
        ? AudioTemplate.fromJSON(object.audioTemplate)
        : undefined;
    message.speed =
      object.speed !== undefined && object.speed !== null
        ? Number(object.speed)
        : undefined;
    message.volume =
      object.volume !== undefined && object.volume !== null
        ? Number(object.volume)
        : undefined;
    message.role =
      object.role !== undefined && object.role !== null
        ? String(object.role)
        : undefined;
    message.pitchShift =
      object.pitchShift !== undefined && object.pitchShift !== null
        ? Number(object.pitchShift)
        : undefined;
    return message;
  },

  toJSON(message: Hints): unknown {
    const obj: any = {};
    message.voice !== undefined && (obj.voice = message.voice);
    message.audioTemplate !== undefined &&
      (obj.audioTemplate = message.audioTemplate
        ? AudioTemplate.toJSON(message.audioTemplate)
        : undefined);
    message.speed !== undefined && (obj.speed = message.speed);
    message.volume !== undefined && (obj.volume = message.volume);
    message.role !== undefined && (obj.role = message.role);
    message.pitchShift !== undefined && (obj.pitchShift = message.pitchShift);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Hints>, I>>(object: I): Hints {
    const message = { ...baseHints } as Hints;
    message.voice = object.voice ?? undefined;
    message.audioTemplate =
      object.audioTemplate !== undefined && object.audioTemplate !== null
        ? AudioTemplate.fromPartial(object.audioTemplate)
        : undefined;
    message.speed = object.speed ?? undefined;
    message.volume = object.volume ?? undefined;
    message.role = object.role ?? undefined;
    message.pitchShift = object.pitchShift ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Hints.$type, Hints);

const baseUtteranceSynthesisRequest: object = {
  $type: "speechkit.tts.v3.UtteranceSynthesisRequest",
  model: "",
  loudnessNormalizationType: 0,
  unsafeMode: false,
};

export const UtteranceSynthesisRequest = {
  $type: "speechkit.tts.v3.UtteranceSynthesisRequest" as const,

  encode(
    message: UtteranceSynthesisRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.model !== "") {
      writer.uint32(10).string(message.model);
    }
    if (message.text !== undefined) {
      writer.uint32(18).string(message.text);
    }
    if (message.textTemplate !== undefined) {
      TextTemplate.encode(
        message.textTemplate,
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.hints) {
      Hints.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.outputAudioSpec !== undefined) {
      AudioFormatOptions.encode(
        message.outputAudioSpec,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.loudnessNormalizationType !== 0) {
      writer.uint32(48).int32(message.loudnessNormalizationType);
    }
    if (message.unsafeMode === true) {
      writer.uint32(56).bool(message.unsafeMode);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UtteranceSynthesisRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUtteranceSynthesisRequest,
    } as UtteranceSynthesisRequest;
    message.hints = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.model = reader.string();
          break;
        case 2:
          message.text = reader.string();
          break;
        case 3:
          message.textTemplate = TextTemplate.decode(reader, reader.uint32());
          break;
        case 4:
          message.hints.push(Hints.decode(reader, reader.uint32()));
          break;
        case 5:
          message.outputAudioSpec = AudioFormatOptions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.loudnessNormalizationType = reader.int32() as any;
          break;
        case 7:
          message.unsafeMode = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UtteranceSynthesisRequest {
    const message = {
      ...baseUtteranceSynthesisRequest,
    } as UtteranceSynthesisRequest;
    message.model =
      object.model !== undefined && object.model !== null
        ? String(object.model)
        : "";
    message.text =
      object.text !== undefined && object.text !== null
        ? String(object.text)
        : undefined;
    message.textTemplate =
      object.textTemplate !== undefined && object.textTemplate !== null
        ? TextTemplate.fromJSON(object.textTemplate)
        : undefined;
    message.hints = (object.hints ?? []).map((e: any) => Hints.fromJSON(e));
    message.outputAudioSpec =
      object.outputAudioSpec !== undefined && object.outputAudioSpec !== null
        ? AudioFormatOptions.fromJSON(object.outputAudioSpec)
        : undefined;
    message.loudnessNormalizationType =
      object.loudnessNormalizationType !== undefined &&
      object.loudnessNormalizationType !== null
        ? utteranceSynthesisRequest_LoudnessNormalizationTypeFromJSON(
            object.loudnessNormalizationType
          )
        : 0;
    message.unsafeMode =
      object.unsafeMode !== undefined && object.unsafeMode !== null
        ? Boolean(object.unsafeMode)
        : false;
    return message;
  },

  toJSON(message: UtteranceSynthesisRequest): unknown {
    const obj: any = {};
    message.model !== undefined && (obj.model = message.model);
    message.text !== undefined && (obj.text = message.text);
    message.textTemplate !== undefined &&
      (obj.textTemplate = message.textTemplate
        ? TextTemplate.toJSON(message.textTemplate)
        : undefined);
    if (message.hints) {
      obj.hints = message.hints.map((e) => (e ? Hints.toJSON(e) : undefined));
    } else {
      obj.hints = [];
    }
    message.outputAudioSpec !== undefined &&
      (obj.outputAudioSpec = message.outputAudioSpec
        ? AudioFormatOptions.toJSON(message.outputAudioSpec)
        : undefined);
    message.loudnessNormalizationType !== undefined &&
      (obj.loudnessNormalizationType =
        utteranceSynthesisRequest_LoudnessNormalizationTypeToJSON(
          message.loudnessNormalizationType
        ));
    message.unsafeMode !== undefined && (obj.unsafeMode = message.unsafeMode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UtteranceSynthesisRequest>, I>>(
    object: I
  ): UtteranceSynthesisRequest {
    const message = {
      ...baseUtteranceSynthesisRequest,
    } as UtteranceSynthesisRequest;
    message.model = object.model ?? "";
    message.text = object.text ?? undefined;
    message.textTemplate =
      object.textTemplate !== undefined && object.textTemplate !== null
        ? TextTemplate.fromPartial(object.textTemplate)
        : undefined;
    message.hints = object.hints?.map((e) => Hints.fromPartial(e)) || [];
    message.outputAudioSpec =
      object.outputAudioSpec !== undefined && object.outputAudioSpec !== null
        ? AudioFormatOptions.fromPartial(object.outputAudioSpec)
        : undefined;
    message.loudnessNormalizationType = object.loudnessNormalizationType ?? 0;
    message.unsafeMode = object.unsafeMode ?? false;
    return message;
  },
};

messageTypeRegistry.set(
  UtteranceSynthesisRequest.$type,
  UtteranceSynthesisRequest
);

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
