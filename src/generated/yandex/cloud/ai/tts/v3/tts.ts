/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'speechkit.tts.v3';

/** Specifies the loudness normalization algorithm to use when synthesizing audio. */
export enum LoudnessNormalizationType {
    /** LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED - Unspecified loudness normalization. The default behavior will be used. */
    LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED = 0,
    /** MAX_PEAK - The type of normalization, wherein the gain is changed to bring the highest PCM sample value or analog signal peak to a given level. */
    MAX_PEAK = 1,
    /** LUFS - The type of normalization based on EBU R 128 recommendation. */
    LUFS = 2,
    UNRECOGNIZED = -1,
}

export function loudnessNormalizationTypeFromJSON(object: any): LoudnessNormalizationType {
    switch (object) {
        case 0:
        case 'LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED':
            return LoudnessNormalizationType.LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED;
        case 1:
        case 'MAX_PEAK':
            return LoudnessNormalizationType.MAX_PEAK;
        case 2:
        case 'LUFS':
            return LoudnessNormalizationType.LUFS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return LoudnessNormalizationType.UNRECOGNIZED;
    }
}

export function loudnessNormalizationTypeToJSON(object: LoudnessNormalizationType): string {
    switch (object) {
        case LoudnessNormalizationType.LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED:
            return 'LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED';
        case LoudnessNormalizationType.MAX_PEAK:
            return 'MAX_PEAK';
        case LoudnessNormalizationType.LUFS:
            return 'LUFS';
        default:
            return 'UNKNOWN';
    }
}

export interface AudioContent {
    /** Bytes with audio data. */
    content: Buffer | undefined;
    /** Description of the audio format. */
    audioSpec?: AudioFormatOptions;
}

export interface AudioFormatOptions {
    /** The audio format specified in request parameters. */
    rawAudio?: RawAudio | undefined;
    /** The audio format specified inside the container metadata. */
    containerAudio?: ContainerAudio | undefined;
}

export interface RawAudio {
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

export function rawAudio_AudioEncodingFromJSON(object: any): RawAudio_AudioEncoding {
    switch (object) {
        case 0:
        case 'AUDIO_ENCODING_UNSPECIFIED':
            return RawAudio_AudioEncoding.AUDIO_ENCODING_UNSPECIFIED;
        case 1:
        case 'LINEAR16_PCM':
            return RawAudio_AudioEncoding.LINEAR16_PCM;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return RawAudio_AudioEncoding.UNRECOGNIZED;
    }
}

export function rawAudio_AudioEncodingToJSON(object: RawAudio_AudioEncoding): string {
    switch (object) {
        case RawAudio_AudioEncoding.AUDIO_ENCODING_UNSPECIFIED:
            return 'AUDIO_ENCODING_UNSPECIFIED';
        case RawAudio_AudioEncoding.LINEAR16_PCM:
            return 'LINEAR16_PCM';
        default:
            return 'UNKNOWN';
    }
}

export interface ContainerAudio {
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
    object: any,
): ContainerAudio_ContainerAudioType {
    switch (object) {
        case 0:
        case 'CONTAINER_AUDIO_TYPE_UNSPECIFIED':
            return ContainerAudio_ContainerAudioType.CONTAINER_AUDIO_TYPE_UNSPECIFIED;
        case 1:
        case 'WAV':
            return ContainerAudio_ContainerAudioType.WAV;
        case 2:
        case 'OGG_OPUS':
            return ContainerAudio_ContainerAudioType.OGG_OPUS;
        case 3:
        case 'MP3':
            return ContainerAudio_ContainerAudioType.MP3;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ContainerAudio_ContainerAudioType.UNRECOGNIZED;
    }
}

export function containerAudio_ContainerAudioTypeToJSON(
    object: ContainerAudio_ContainerAudioType,
): string {
    switch (object) {
        case ContainerAudio_ContainerAudioType.CONTAINER_AUDIO_TYPE_UNSPECIFIED:
            return 'CONTAINER_AUDIO_TYPE_UNSPECIFIED';
        case ContainerAudio_ContainerAudioType.WAV:
            return 'WAV';
        case ContainerAudio_ContainerAudioType.OGG_OPUS:
            return 'OGG_OPUS';
        case ContainerAudio_ContainerAudioType.MP3:
            return 'MP3';
        default:
            return 'UNKNOWN';
    }
}

export interface TextVariable {
    /** The name of the variable. */
    variableName: string;
    /** The text of the variable. */
    variableValue: string;
}

export interface AudioVariable {
    /** The name of the variable. */
    variableName: string;
    /** Start time of the variable in milliseconds. */
    variableStartMs: number;
    /** Length of the variable in milliseconds. */
    variableLengthMs: number;
}

export interface UtteranceSynthesisResponse {
    /** Part of synthesized audio. */
    audioChunk?: AudioChunk;
    /** Part of synthesized text. */
    textChunk?: TextChunk;
    /** Start time of the audio chunk in milliseconds. */
    startMs: number;
    /** Length of the audio chunk in milliseconds. */
    lengthMs: number;
}

export interface AudioTemplate {
    /** Audio file. */
    audio?: AudioContent;
    /** Template and description of its variables. */
    textTemplate?: TextTemplate;
    /** Describing variables in audio. */
    variables: AudioVariable[];
}

export interface AudioChunk {
    /** Sequence of bytes of the synthesized audio in format specified in output_audio_spec. */
    data: Buffer;
}

export interface TextChunk {
    /** Synthesized text. */
    text: string;
}

export interface TextTemplate {
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

export interface DurationHint {
    /** Type of duration constraint. */
    policy: DurationHint_DurationHintPolicy;
    /** Constraint on audio duration in milliseconds. */
    durationMs: number;
}

export enum DurationHint_DurationHintPolicy {
    DURATION_HINT_POLICY_UNSPECIFIED = 0,
    /** EXACT_DURATION - Limit audio duration to exact value. */
    EXACT_DURATION = 1,
    /** MIN_DURATION - Limit the minimum audio duration. */
    MIN_DURATION = 2,
    /** MAX_DURATION - Limit the maximum audio duration. */
    MAX_DURATION = 3,
    UNRECOGNIZED = -1,
}

export function durationHint_DurationHintPolicyFromJSON(
    object: any,
): DurationHint_DurationHintPolicy {
    switch (object) {
        case 0:
        case 'DURATION_HINT_POLICY_UNSPECIFIED':
            return DurationHint_DurationHintPolicy.DURATION_HINT_POLICY_UNSPECIFIED;
        case 1:
        case 'EXACT_DURATION':
            return DurationHint_DurationHintPolicy.EXACT_DURATION;
        case 2:
        case 'MIN_DURATION':
            return DurationHint_DurationHintPolicy.MIN_DURATION;
        case 3:
        case 'MAX_DURATION':
            return DurationHint_DurationHintPolicy.MAX_DURATION;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return DurationHint_DurationHintPolicy.UNRECOGNIZED;
    }
}

export function durationHint_DurationHintPolicyToJSON(
    object: DurationHint_DurationHintPolicy,
): string {
    switch (object) {
        case DurationHint_DurationHintPolicy.DURATION_HINT_POLICY_UNSPECIFIED:
            return 'DURATION_HINT_POLICY_UNSPECIFIED';
        case DurationHint_DurationHintPolicy.EXACT_DURATION:
            return 'EXACT_DURATION';
        case DurationHint_DurationHintPolicy.MIN_DURATION:
            return 'MIN_DURATION';
        case DurationHint_DurationHintPolicy.MAX_DURATION:
            return 'MAX_DURATION';
        default:
            return 'UNKNOWN';
    }
}

export interface Hints {
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
    /** Hint to limit both minimum and maximum audio duration. */
    duration?: DurationHint | undefined;
}

export interface UtteranceSynthesisRequest {
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
    object: any,
): UtteranceSynthesisRequest_LoudnessNormalizationType {
    switch (object) {
        case 0:
        case 'LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED':
            return UtteranceSynthesisRequest_LoudnessNormalizationType.LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED;
        case 1:
        case 'MAX_PEAK':
            return UtteranceSynthesisRequest_LoudnessNormalizationType.MAX_PEAK;
        case 2:
        case 'LUFS':
            return UtteranceSynthesisRequest_LoudnessNormalizationType.LUFS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UtteranceSynthesisRequest_LoudnessNormalizationType.UNRECOGNIZED;
    }
}

export function utteranceSynthesisRequest_LoudnessNormalizationTypeToJSON(
    object: UtteranceSynthesisRequest_LoudnessNormalizationType,
): string {
    switch (object) {
        case UtteranceSynthesisRequest_LoudnessNormalizationType.LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED:
            return 'LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED';
        case UtteranceSynthesisRequest_LoudnessNormalizationType.MAX_PEAK:
            return 'MAX_PEAK';
        case UtteranceSynthesisRequest_LoudnessNormalizationType.LUFS:
            return 'LUFS';
        default:
            return 'UNKNOWN';
    }
}

export interface SynthesisOptions {
    /** The name of the TTS model to use for synthesis. Currently should be empty. Do not use it. */
    model: string;
    /** The voice to use for speech synthesis. */
    voice: string;
    /** The role or speaking style. Can be used to specify pronunciation character for the speaker. */
    role: string;
    /** Speed multiplier (default: 1.0). */
    speed: number;
    /**
     * Volume adjustment:
     * * For `MAX_PEAK`: range is (0, 1], default 0.7.
     * * For `LUFS`: range is [-145, 0), default -19.
     */
    volume: number;
    /** Pitch adjustment, in Hz, range [-1000, 1000], default 0. */
    pitchShift: number;
    /** Specifies output audio format. Default: 22050Hz, linear 16-bit signed little-endian PCM, with WAV header. */
    outputAudioSpec?: AudioFormatOptions;
    /** Loudness normalization type for output (default: `LUFS`). */
    loudnessNormalizationType: LoudnessNormalizationType;
}

/** The input for synthesis. */
export interface SynthesisInput {
    /** The text string to be synthesized. */
    text: string;
}

/** Event to forcibly trigger synthesis. */
export interface ForceSynthesisEvent {}

/** Sent by client to control or provide data during streaming synthesis. */
export interface StreamSynthesisRequest {
    /** Synthesis options. Must be provided in the first request of the stream and cannot be updated afterwards. */
    options?: SynthesisOptions | undefined;
    /** Input to be synthesized. */
    synthesisInput?: SynthesisInput | undefined;
    /** Triggers immediate synthesis of buffered input. */
    forceSynthesis?: ForceSynthesisEvent | undefined;
}

export interface StreamSynthesisResponse {
    /** Part of synthesized audio. */
    audioChunk?: AudioChunk;
    /** Part of synthesized text. */
    textChunk?: TextChunk;
    /** Start time of the audio chunk in milliseconds. */
    startMs: number;
    /** Length of the audio chunk in milliseconds. */
    lengthMs: number;
}

const baseAudioContent: object = {};

export const AudioContent = {
    encode(message: AudioContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.content !== undefined) {
            writer.uint32(10).bytes(message.content);
        }
        if (message.audioSpec !== undefined) {
            AudioFormatOptions.encode(message.audioSpec, writer.uint32(18).fork()).ldelim();
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
                    message.audioSpec = AudioFormatOptions.decode(reader, reader.uint32());
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
                message.content !== undefined ? base64FromBytes(message.content) : undefined);
        message.audioSpec !== undefined &&
            (obj.audioSpec = message.audioSpec
                ? AudioFormatOptions.toJSON(message.audioSpec)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AudioContent>, I>>(object: I): AudioContent {
        const message = { ...baseAudioContent } as AudioContent;
        message.content = object.content ?? undefined;
        message.audioSpec =
            object.audioSpec !== undefined && object.audioSpec !== null
                ? AudioFormatOptions.fromPartial(object.audioSpec)
                : undefined;
        return message;
    },
};

const baseAudioFormatOptions: object = {};

export const AudioFormatOptions = {
    encode(message: AudioFormatOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.rawAudio !== undefined) {
            RawAudio.encode(message.rawAudio, writer.uint32(10).fork()).ldelim();
        }
        if (message.containerAudio !== undefined) {
            ContainerAudio.encode(message.containerAudio, writer.uint32(18).fork()).ldelim();
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
                    message.containerAudio = ContainerAudio.decode(reader, reader.uint32());
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
            (obj.rawAudio = message.rawAudio ? RawAudio.toJSON(message.rawAudio) : undefined);
        message.containerAudio !== undefined &&
            (obj.containerAudio = message.containerAudio
                ? ContainerAudio.toJSON(message.containerAudio)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AudioFormatOptions>, I>>(
        object: I,
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

const baseRawAudio: object = { audioEncoding: 0, sampleRateHertz: 0 };

export const RawAudio = {
    encode(message: RawAudio, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

const baseContainerAudio: object = { containerAudioType: 0 };

export const ContainerAudio = {
    encode(message: ContainerAudio, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
            object.containerAudioType !== undefined && object.containerAudioType !== null
                ? containerAudio_ContainerAudioTypeFromJSON(object.containerAudioType)
                : 0;
        return message;
    },

    toJSON(message: ContainerAudio): unknown {
        const obj: any = {};
        message.containerAudioType !== undefined &&
            (obj.containerAudioType = containerAudio_ContainerAudioTypeToJSON(
                message.containerAudioType,
            ));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ContainerAudio>, I>>(object: I): ContainerAudio {
        const message = { ...baseContainerAudio } as ContainerAudio;
        message.containerAudioType = object.containerAudioType ?? 0;
        return message;
    },
};

const baseTextVariable: object = { variableName: '', variableValue: '' };

export const TextVariable = {
    encode(message: TextVariable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.variableName !== '') {
            writer.uint32(10).string(message.variableName);
        }
        if (message.variableValue !== '') {
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
                : '';
        message.variableValue =
            object.variableValue !== undefined && object.variableValue !== null
                ? String(object.variableValue)
                : '';
        return message;
    },

    toJSON(message: TextVariable): unknown {
        const obj: any = {};
        message.variableName !== undefined && (obj.variableName = message.variableName);
        message.variableValue !== undefined && (obj.variableValue = message.variableValue);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextVariable>, I>>(object: I): TextVariable {
        const message = { ...baseTextVariable } as TextVariable;
        message.variableName = object.variableName ?? '';
        message.variableValue = object.variableValue ?? '';
        return message;
    },
};

const baseAudioVariable: object = { variableName: '', variableStartMs: 0, variableLengthMs: 0 };

export const AudioVariable = {
    encode(message: AudioVariable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.variableName !== '') {
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
                : '';
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
        message.variableName !== undefined && (obj.variableName = message.variableName);
        message.variableStartMs !== undefined &&
            (obj.variableStartMs = Math.round(message.variableStartMs));
        message.variableLengthMs !== undefined &&
            (obj.variableLengthMs = Math.round(message.variableLengthMs));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AudioVariable>, I>>(object: I): AudioVariable {
        const message = { ...baseAudioVariable } as AudioVariable;
        message.variableName = object.variableName ?? '';
        message.variableStartMs = object.variableStartMs ?? 0;
        message.variableLengthMs = object.variableLengthMs ?? 0;
        return message;
    },
};

const baseUtteranceSynthesisResponse: object = { startMs: 0, lengthMs: 0 };

export const UtteranceSynthesisResponse = {
    encode(
        message: UtteranceSynthesisResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.audioChunk !== undefined) {
            AudioChunk.encode(message.audioChunk, writer.uint32(10).fork()).ldelim();
        }
        if (message.textChunk !== undefined) {
            TextChunk.encode(message.textChunk, writer.uint32(18).fork()).ldelim();
        }
        if (message.startMs !== 0) {
            writer.uint32(24).int64(message.startMs);
        }
        if (message.lengthMs !== 0) {
            writer.uint32(32).int64(message.lengthMs);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UtteranceSynthesisResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUtteranceSynthesisResponse } as UtteranceSynthesisResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.audioChunk = AudioChunk.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.textChunk = TextChunk.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.startMs = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.lengthMs = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UtteranceSynthesisResponse {
        const message = { ...baseUtteranceSynthesisResponse } as UtteranceSynthesisResponse;
        message.audioChunk =
            object.audioChunk !== undefined && object.audioChunk !== null
                ? AudioChunk.fromJSON(object.audioChunk)
                : undefined;
        message.textChunk =
            object.textChunk !== undefined && object.textChunk !== null
                ? TextChunk.fromJSON(object.textChunk)
                : undefined;
        message.startMs =
            object.startMs !== undefined && object.startMs !== null ? Number(object.startMs) : 0;
        message.lengthMs =
            object.lengthMs !== undefined && object.lengthMs !== null ? Number(object.lengthMs) : 0;
        return message;
    },

    toJSON(message: UtteranceSynthesisResponse): unknown {
        const obj: any = {};
        message.audioChunk !== undefined &&
            (obj.audioChunk = message.audioChunk
                ? AudioChunk.toJSON(message.audioChunk)
                : undefined);
        message.textChunk !== undefined &&
            (obj.textChunk = message.textChunk ? TextChunk.toJSON(message.textChunk) : undefined);
        message.startMs !== undefined && (obj.startMs = Math.round(message.startMs));
        message.lengthMs !== undefined && (obj.lengthMs = Math.round(message.lengthMs));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UtteranceSynthesisResponse>, I>>(
        object: I,
    ): UtteranceSynthesisResponse {
        const message = { ...baseUtteranceSynthesisResponse } as UtteranceSynthesisResponse;
        message.audioChunk =
            object.audioChunk !== undefined && object.audioChunk !== null
                ? AudioChunk.fromPartial(object.audioChunk)
                : undefined;
        message.textChunk =
            object.textChunk !== undefined && object.textChunk !== null
                ? TextChunk.fromPartial(object.textChunk)
                : undefined;
        message.startMs = object.startMs ?? 0;
        message.lengthMs = object.lengthMs ?? 0;
        return message;
    },
};

const baseAudioTemplate: object = {};

export const AudioTemplate = {
    encode(message: AudioTemplate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.audio !== undefined) {
            AudioContent.encode(message.audio, writer.uint32(10).fork()).ldelim();
        }
        if (message.textTemplate !== undefined) {
            TextTemplate.encode(message.textTemplate, writer.uint32(18).fork()).ldelim();
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
        message.variables = (object.variables ?? []).map((e: any) => AudioVariable.fromJSON(e));
        return message;
    },

    toJSON(message: AudioTemplate): unknown {
        const obj: any = {};
        message.audio !== undefined &&
            (obj.audio = message.audio ? AudioContent.toJSON(message.audio) : undefined);
        message.textTemplate !== undefined &&
            (obj.textTemplate = message.textTemplate
                ? TextTemplate.toJSON(message.textTemplate)
                : undefined);
        if (message.variables) {
            obj.variables = message.variables.map((e) => (e ? AudioVariable.toJSON(e) : undefined));
        } else {
            obj.variables = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AudioTemplate>, I>>(object: I): AudioTemplate {
        const message = { ...baseAudioTemplate } as AudioTemplate;
        message.audio =
            object.audio !== undefined && object.audio !== null
                ? AudioContent.fromPartial(object.audio)
                : undefined;
        message.textTemplate =
            object.textTemplate !== undefined && object.textTemplate !== null
                ? TextTemplate.fromPartial(object.textTemplate)
                : undefined;
        message.variables = object.variables?.map((e) => AudioVariable.fromPartial(e)) || [];
        return message;
    },
};

const baseAudioChunk: object = {};

export const AudioChunk = {
    encode(message: AudioChunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
                message.data !== undefined ? message.data : Buffer.alloc(0),
            ));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AudioChunk>, I>>(object: I): AudioChunk {
        const message = { ...baseAudioChunk } as AudioChunk;
        message.data = object.data ?? Buffer.alloc(0);
        return message;
    },
};

const baseTextChunk: object = { text: '' };

export const TextChunk = {
    encode(message: TextChunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.text !== '') {
            writer.uint32(10).string(message.text);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TextChunk {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTextChunk } as TextChunk;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TextChunk {
        const message = { ...baseTextChunk } as TextChunk;
        message.text = object.text !== undefined && object.text !== null ? String(object.text) : '';
        return message;
    },

    toJSON(message: TextChunk): unknown {
        const obj: any = {};
        message.text !== undefined && (obj.text = message.text);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextChunk>, I>>(object: I): TextChunk {
        const message = { ...baseTextChunk } as TextChunk;
        message.text = object.text ?? '';
        return message;
    },
};

const baseTextTemplate: object = { textTemplate: '' };

export const TextTemplate = {
    encode(message: TextTemplate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.textTemplate !== '') {
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
                : '';
        message.variables = (object.variables ?? []).map((e: any) => TextVariable.fromJSON(e));
        return message;
    },

    toJSON(message: TextTemplate): unknown {
        const obj: any = {};
        message.textTemplate !== undefined && (obj.textTemplate = message.textTemplate);
        if (message.variables) {
            obj.variables = message.variables.map((e) => (e ? TextVariable.toJSON(e) : undefined));
        } else {
            obj.variables = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextTemplate>, I>>(object: I): TextTemplate {
        const message = { ...baseTextTemplate } as TextTemplate;
        message.textTemplate = object.textTemplate ?? '';
        message.variables = object.variables?.map((e) => TextVariable.fromPartial(e)) || [];
        return message;
    },
};

const baseDurationHint: object = { policy: 0, durationMs: 0 };

export const DurationHint = {
    encode(message: DurationHint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.policy !== 0) {
            writer.uint32(8).int32(message.policy);
        }
        if (message.durationMs !== 0) {
            writer.uint32(16).int64(message.durationMs);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DurationHint {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDurationHint } as DurationHint;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policy = reader.int32() as any;
                    break;
                case 2:
                    message.durationMs = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DurationHint {
        const message = { ...baseDurationHint } as DurationHint;
        message.policy =
            object.policy !== undefined && object.policy !== null
                ? durationHint_DurationHintPolicyFromJSON(object.policy)
                : 0;
        message.durationMs =
            object.durationMs !== undefined && object.durationMs !== null
                ? Number(object.durationMs)
                : 0;
        return message;
    },

    toJSON(message: DurationHint): unknown {
        const obj: any = {};
        message.policy !== undefined &&
            (obj.policy = durationHint_DurationHintPolicyToJSON(message.policy));
        message.durationMs !== undefined && (obj.durationMs = Math.round(message.durationMs));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DurationHint>, I>>(object: I): DurationHint {
        const message = { ...baseDurationHint } as DurationHint;
        message.policy = object.policy ?? 0;
        message.durationMs = object.durationMs ?? 0;
        return message;
    },
};

const baseHints: object = {};

export const Hints = {
    encode(message: Hints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.voice !== undefined) {
            writer.uint32(10).string(message.voice);
        }
        if (message.audioTemplate !== undefined) {
            AudioTemplate.encode(message.audioTemplate, writer.uint32(18).fork()).ldelim();
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
        if (message.duration !== undefined) {
            DurationHint.encode(message.duration, writer.uint32(58).fork()).ldelim();
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
                case 7:
                    message.duration = DurationHint.decode(reader, reader.uint32());
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
            object.voice !== undefined && object.voice !== null ? String(object.voice) : undefined;
        message.audioTemplate =
            object.audioTemplate !== undefined && object.audioTemplate !== null
                ? AudioTemplate.fromJSON(object.audioTemplate)
                : undefined;
        message.speed =
            object.speed !== undefined && object.speed !== null ? Number(object.speed) : undefined;
        message.volume =
            object.volume !== undefined && object.volume !== null
                ? Number(object.volume)
                : undefined;
        message.role =
            object.role !== undefined && object.role !== null ? String(object.role) : undefined;
        message.pitchShift =
            object.pitchShift !== undefined && object.pitchShift !== null
                ? Number(object.pitchShift)
                : undefined;
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? DurationHint.fromJSON(object.duration)
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
        message.duration !== undefined &&
            (obj.duration = message.duration ? DurationHint.toJSON(message.duration) : undefined);
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
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? DurationHint.fromPartial(object.duration)
                : undefined;
        return message;
    },
};

const baseUtteranceSynthesisRequest: object = {
    model: '',
    loudnessNormalizationType: 0,
    unsafeMode: false,
};

export const UtteranceSynthesisRequest = {
    encode(
        message: UtteranceSynthesisRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.model !== '') {
            writer.uint32(10).string(message.model);
        }
        if (message.text !== undefined) {
            writer.uint32(18).string(message.text);
        }
        if (message.textTemplate !== undefined) {
            TextTemplate.encode(message.textTemplate, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.hints) {
            Hints.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        if (message.outputAudioSpec !== undefined) {
            AudioFormatOptions.encode(message.outputAudioSpec, writer.uint32(42).fork()).ldelim();
        }
        if (message.loudnessNormalizationType !== 0) {
            writer.uint32(48).int32(message.loudnessNormalizationType);
        }
        if (message.unsafeMode === true) {
            writer.uint32(56).bool(message.unsafeMode);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UtteranceSynthesisRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUtteranceSynthesisRequest } as UtteranceSynthesisRequest;
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
                    message.outputAudioSpec = AudioFormatOptions.decode(reader, reader.uint32());
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
        const message = { ...baseUtteranceSynthesisRequest } as UtteranceSynthesisRequest;
        message.model =
            object.model !== undefined && object.model !== null ? String(object.model) : '';
        message.text =
            object.text !== undefined && object.text !== null ? String(object.text) : undefined;
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
                      object.loudnessNormalizationType,
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
                    message.loudnessNormalizationType,
                ));
        message.unsafeMode !== undefined && (obj.unsafeMode = message.unsafeMode);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UtteranceSynthesisRequest>, I>>(
        object: I,
    ): UtteranceSynthesisRequest {
        const message = { ...baseUtteranceSynthesisRequest } as UtteranceSynthesisRequest;
        message.model = object.model ?? '';
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

const baseSynthesisOptions: object = {
    model: '',
    voice: '',
    role: '',
    speed: 0,
    volume: 0,
    pitchShift: 0,
    loudnessNormalizationType: 0,
};

export const SynthesisOptions = {
    encode(message: SynthesisOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.model !== '') {
            writer.uint32(10).string(message.model);
        }
        if (message.voice !== '') {
            writer.uint32(18).string(message.voice);
        }
        if (message.role !== '') {
            writer.uint32(26).string(message.role);
        }
        if (message.speed !== 0) {
            writer.uint32(33).double(message.speed);
        }
        if (message.volume !== 0) {
            writer.uint32(41).double(message.volume);
        }
        if (message.pitchShift !== 0) {
            writer.uint32(49).double(message.pitchShift);
        }
        if (message.outputAudioSpec !== undefined) {
            AudioFormatOptions.encode(message.outputAudioSpec, writer.uint32(58).fork()).ldelim();
        }
        if (message.loudnessNormalizationType !== 0) {
            writer.uint32(64).int32(message.loudnessNormalizationType);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SynthesisOptions {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSynthesisOptions } as SynthesisOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.model = reader.string();
                    break;
                case 2:
                    message.voice = reader.string();
                    break;
                case 3:
                    message.role = reader.string();
                    break;
                case 4:
                    message.speed = reader.double();
                    break;
                case 5:
                    message.volume = reader.double();
                    break;
                case 6:
                    message.pitchShift = reader.double();
                    break;
                case 7:
                    message.outputAudioSpec = AudioFormatOptions.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.loudnessNormalizationType = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SynthesisOptions {
        const message = { ...baseSynthesisOptions } as SynthesisOptions;
        message.model =
            object.model !== undefined && object.model !== null ? String(object.model) : '';
        message.voice =
            object.voice !== undefined && object.voice !== null ? String(object.voice) : '';
        message.role = object.role !== undefined && object.role !== null ? String(object.role) : '';
        message.speed =
            object.speed !== undefined && object.speed !== null ? Number(object.speed) : 0;
        message.volume =
            object.volume !== undefined && object.volume !== null ? Number(object.volume) : 0;
        message.pitchShift =
            object.pitchShift !== undefined && object.pitchShift !== null
                ? Number(object.pitchShift)
                : 0;
        message.outputAudioSpec =
            object.outputAudioSpec !== undefined && object.outputAudioSpec !== null
                ? AudioFormatOptions.fromJSON(object.outputAudioSpec)
                : undefined;
        message.loudnessNormalizationType =
            object.loudnessNormalizationType !== undefined &&
            object.loudnessNormalizationType !== null
                ? loudnessNormalizationTypeFromJSON(object.loudnessNormalizationType)
                : 0;
        return message;
    },

    toJSON(message: SynthesisOptions): unknown {
        const obj: any = {};
        message.model !== undefined && (obj.model = message.model);
        message.voice !== undefined && (obj.voice = message.voice);
        message.role !== undefined && (obj.role = message.role);
        message.speed !== undefined && (obj.speed = message.speed);
        message.volume !== undefined && (obj.volume = message.volume);
        message.pitchShift !== undefined && (obj.pitchShift = message.pitchShift);
        message.outputAudioSpec !== undefined &&
            (obj.outputAudioSpec = message.outputAudioSpec
                ? AudioFormatOptions.toJSON(message.outputAudioSpec)
                : undefined);
        message.loudnessNormalizationType !== undefined &&
            (obj.loudnessNormalizationType = loudnessNormalizationTypeToJSON(
                message.loudnessNormalizationType,
            ));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SynthesisOptions>, I>>(object: I): SynthesisOptions {
        const message = { ...baseSynthesisOptions } as SynthesisOptions;
        message.model = object.model ?? '';
        message.voice = object.voice ?? '';
        message.role = object.role ?? '';
        message.speed = object.speed ?? 0;
        message.volume = object.volume ?? 0;
        message.pitchShift = object.pitchShift ?? 0;
        message.outputAudioSpec =
            object.outputAudioSpec !== undefined && object.outputAudioSpec !== null
                ? AudioFormatOptions.fromPartial(object.outputAudioSpec)
                : undefined;
        message.loudnessNormalizationType = object.loudnessNormalizationType ?? 0;
        return message;
    },
};

const baseSynthesisInput: object = { text: '' };

export const SynthesisInput = {
    encode(message: SynthesisInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.text !== '') {
            writer.uint32(10).string(message.text);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SynthesisInput {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSynthesisInput } as SynthesisInput;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SynthesisInput {
        const message = { ...baseSynthesisInput } as SynthesisInput;
        message.text = object.text !== undefined && object.text !== null ? String(object.text) : '';
        return message;
    },

    toJSON(message: SynthesisInput): unknown {
        const obj: any = {};
        message.text !== undefined && (obj.text = message.text);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SynthesisInput>, I>>(object: I): SynthesisInput {
        const message = { ...baseSynthesisInput } as SynthesisInput;
        message.text = object.text ?? '';
        return message;
    },
};

const baseForceSynthesisEvent: object = {};

export const ForceSynthesisEvent = {
    encode(_: ForceSynthesisEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ForceSynthesisEvent {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseForceSynthesisEvent } as ForceSynthesisEvent;
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

    fromJSON(_: any): ForceSynthesisEvent {
        const message = { ...baseForceSynthesisEvent } as ForceSynthesisEvent;
        return message;
    },

    toJSON(_: ForceSynthesisEvent): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ForceSynthesisEvent>, I>>(_: I): ForceSynthesisEvent {
        const message = { ...baseForceSynthesisEvent } as ForceSynthesisEvent;
        return message;
    },
};

const baseStreamSynthesisRequest: object = {};

export const StreamSynthesisRequest = {
    encode(message: StreamSynthesisRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.options !== undefined) {
            SynthesisOptions.encode(message.options, writer.uint32(10).fork()).ldelim();
        }
        if (message.synthesisInput !== undefined) {
            SynthesisInput.encode(message.synthesisInput, writer.uint32(18).fork()).ldelim();
        }
        if (message.forceSynthesis !== undefined) {
            ForceSynthesisEvent.encode(message.forceSynthesis, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StreamSynthesisRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStreamSynthesisRequest } as StreamSynthesisRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.options = SynthesisOptions.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.synthesisInput = SynthesisInput.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.forceSynthesis = ForceSynthesisEvent.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StreamSynthesisRequest {
        const message = { ...baseStreamSynthesisRequest } as StreamSynthesisRequest;
        message.options =
            object.options !== undefined && object.options !== null
                ? SynthesisOptions.fromJSON(object.options)
                : undefined;
        message.synthesisInput =
            object.synthesisInput !== undefined && object.synthesisInput !== null
                ? SynthesisInput.fromJSON(object.synthesisInput)
                : undefined;
        message.forceSynthesis =
            object.forceSynthesis !== undefined && object.forceSynthesis !== null
                ? ForceSynthesisEvent.fromJSON(object.forceSynthesis)
                : undefined;
        return message;
    },

    toJSON(message: StreamSynthesisRequest): unknown {
        const obj: any = {};
        message.options !== undefined &&
            (obj.options = message.options ? SynthesisOptions.toJSON(message.options) : undefined);
        message.synthesisInput !== undefined &&
            (obj.synthesisInput = message.synthesisInput
                ? SynthesisInput.toJSON(message.synthesisInput)
                : undefined);
        message.forceSynthesis !== undefined &&
            (obj.forceSynthesis = message.forceSynthesis
                ? ForceSynthesisEvent.toJSON(message.forceSynthesis)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StreamSynthesisRequest>, I>>(
        object: I,
    ): StreamSynthesisRequest {
        const message = { ...baseStreamSynthesisRequest } as StreamSynthesisRequest;
        message.options =
            object.options !== undefined && object.options !== null
                ? SynthesisOptions.fromPartial(object.options)
                : undefined;
        message.synthesisInput =
            object.synthesisInput !== undefined && object.synthesisInput !== null
                ? SynthesisInput.fromPartial(object.synthesisInput)
                : undefined;
        message.forceSynthesis =
            object.forceSynthesis !== undefined && object.forceSynthesis !== null
                ? ForceSynthesisEvent.fromPartial(object.forceSynthesis)
                : undefined;
        return message;
    },
};

const baseStreamSynthesisResponse: object = { startMs: 0, lengthMs: 0 };

export const StreamSynthesisResponse = {
    encode(message: StreamSynthesisResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.audioChunk !== undefined) {
            AudioChunk.encode(message.audioChunk, writer.uint32(10).fork()).ldelim();
        }
        if (message.textChunk !== undefined) {
            TextChunk.encode(message.textChunk, writer.uint32(18).fork()).ldelim();
        }
        if (message.startMs !== 0) {
            writer.uint32(24).int64(message.startMs);
        }
        if (message.lengthMs !== 0) {
            writer.uint32(32).int64(message.lengthMs);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StreamSynthesisResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStreamSynthesisResponse } as StreamSynthesisResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.audioChunk = AudioChunk.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.textChunk = TextChunk.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.startMs = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.lengthMs = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StreamSynthesisResponse {
        const message = { ...baseStreamSynthesisResponse } as StreamSynthesisResponse;
        message.audioChunk =
            object.audioChunk !== undefined && object.audioChunk !== null
                ? AudioChunk.fromJSON(object.audioChunk)
                : undefined;
        message.textChunk =
            object.textChunk !== undefined && object.textChunk !== null
                ? TextChunk.fromJSON(object.textChunk)
                : undefined;
        message.startMs =
            object.startMs !== undefined && object.startMs !== null ? Number(object.startMs) : 0;
        message.lengthMs =
            object.lengthMs !== undefined && object.lengthMs !== null ? Number(object.lengthMs) : 0;
        return message;
    },

    toJSON(message: StreamSynthesisResponse): unknown {
        const obj: any = {};
        message.audioChunk !== undefined &&
            (obj.audioChunk = message.audioChunk
                ? AudioChunk.toJSON(message.audioChunk)
                : undefined);
        message.textChunk !== undefined &&
            (obj.textChunk = message.textChunk ? TextChunk.toJSON(message.textChunk) : undefined);
        message.startMs !== undefined && (obj.startMs = Math.round(message.startMs));
        message.lengthMs !== undefined && (obj.lengthMs = Math.round(message.lengthMs));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StreamSynthesisResponse>, I>>(
        object: I,
    ): StreamSynthesisResponse {
        const message = { ...baseStreamSynthesisResponse } as StreamSynthesisResponse;
        message.audioChunk =
            object.audioChunk !== undefined && object.audioChunk !== null
                ? AudioChunk.fromPartial(object.audioChunk)
                : undefined;
        message.textChunk =
            object.textChunk !== undefined && object.textChunk !== null
                ? TextChunk.fromPartial(object.textChunk)
                : undefined;
        message.startMs = object.startMs ?? 0;
        message.lengthMs = object.lengthMs ?? 0;
        return message;
    },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

const atob: (b64: string) => string =
    globalThis.atob || ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}

const btoa: (bin: string) => string =
    globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
    const bin: string[] = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(''));
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
