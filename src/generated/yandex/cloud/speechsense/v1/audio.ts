/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.speechsense.v1';

/** RAW Audio format spec (no container to infer type). Used in AudioFormat options. */
export interface RawAudio {
    /** Type of audio encoding */
    audioEncoding: RawAudio_AudioEncoding;
    /** PCM sample rate */
    sampleRateHertz: number;
    /** PCM channel count. */
    audioChannelCount: number;
}

export enum RawAudio_AudioEncoding {
    AUDIO_ENCODING_UNSPECIFIED = 0,
    /** AUDIO_ENCODING_LINEAR16_PCM - Audio bit depth 16-bit signed little-endian (Linear PCM). */
    AUDIO_ENCODING_LINEAR16_PCM = 1,
    UNRECOGNIZED = -1,
}

export function rawAudio_AudioEncodingFromJSON(object: any): RawAudio_AudioEncoding {
    switch (object) {
        case 0:
        case 'AUDIO_ENCODING_UNSPECIFIED':
            return RawAudio_AudioEncoding.AUDIO_ENCODING_UNSPECIFIED;
        case 1:
        case 'AUDIO_ENCODING_LINEAR16_PCM':
            return RawAudio_AudioEncoding.AUDIO_ENCODING_LINEAR16_PCM;
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
        case RawAudio_AudioEncoding.AUDIO_ENCODING_LINEAR16_PCM:
            return 'AUDIO_ENCODING_LINEAR16_PCM';
        default:
            return 'UNKNOWN';
    }
}

/** Audio with fixed type in container. Used in AudioFormat options. */
export interface ContainerAudio {
    /** Type of audio container. */
    containerAudioType: ContainerAudio_ContainerAudioType;
}

export enum ContainerAudio_ContainerAudioType {
    CONTAINER_AUDIO_TYPE_UNSPECIFIED = 0,
    /** CONTAINER_AUDIO_TYPE_WAV - Audio bit depth 16-bit signed little-endian (Linear PCM). */
    CONTAINER_AUDIO_TYPE_WAV = 1,
    /** CONTAINER_AUDIO_TYPE_OGG_OPUS - Data is encoded using the OPUS audio codec and compressed using the OGG container format. */
    CONTAINER_AUDIO_TYPE_OGG_OPUS = 2,
    /** CONTAINER_AUDIO_TYPE_MP3 - Data is encoded using MPEG-1/2 Layer III and compressed using the MP3 container format. */
    CONTAINER_AUDIO_TYPE_MP3 = 3,
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
        case 'CONTAINER_AUDIO_TYPE_WAV':
            return ContainerAudio_ContainerAudioType.CONTAINER_AUDIO_TYPE_WAV;
        case 2:
        case 'CONTAINER_AUDIO_TYPE_OGG_OPUS':
            return ContainerAudio_ContainerAudioType.CONTAINER_AUDIO_TYPE_OGG_OPUS;
        case 3:
        case 'CONTAINER_AUDIO_TYPE_MP3':
            return ContainerAudio_ContainerAudioType.CONTAINER_AUDIO_TYPE_MP3;
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
        case ContainerAudio_ContainerAudioType.CONTAINER_AUDIO_TYPE_WAV:
            return 'CONTAINER_AUDIO_TYPE_WAV';
        case ContainerAudio_ContainerAudioType.CONTAINER_AUDIO_TYPE_OGG_OPUS:
            return 'CONTAINER_AUDIO_TYPE_OGG_OPUS';
        case ContainerAudio_ContainerAudioType.CONTAINER_AUDIO_TYPE_MP3:
            return 'CONTAINER_AUDIO_TYPE_MP3';
        default:
            return 'UNKNOWN';
    }
}

/** Audio format options. */
export interface AudioMetadata {
    /** Audio without container. */
    rawAudio?: RawAudio | undefined;
    /** Audio is wrapped in container. */
    containerAudio?: ContainerAudio | undefined;
}

/** Data chunk with audio. */
export interface AudioChunk {
    /** Bytes with audio data. */
    data: Buffer;
}

/**
 * Streaming audio request
 * First message should be audio metadata.
 * The next messages are audio data chunks.
 */
export interface AudioStreamingRequest {
    /** Session options. Should be the first message from user. */
    audioMetadata?: AudioMetadata | undefined;
    /** Chunk with audio data. */
    chunk?: AudioChunk | undefined;
}

/** request for sending small audios (< 128 mb) in one go */
export interface AudioRequest {
    /** audio metadata */
    audioMetadata?: AudioMetadata;
    /** Bytes with audio data. */
    audioData?: AudioChunk;
}

const baseRawAudio: object = { audioEncoding: 0, sampleRateHertz: 0, audioChannelCount: 0 };

export const RawAudio = {
    encode(message: RawAudio, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
            object.audioChannelCount !== undefined && object.audioChannelCount !== null
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

const baseAudioMetadata: object = {};

export const AudioMetadata = {
    encode(message: AudioMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.rawAudio !== undefined) {
            RawAudio.encode(message.rawAudio, writer.uint32(10).fork()).ldelim();
        }
        if (message.containerAudio !== undefined) {
            ContainerAudio.encode(message.containerAudio, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AudioMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAudioMetadata } as AudioMetadata;
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

    fromJSON(object: any): AudioMetadata {
        const message = { ...baseAudioMetadata } as AudioMetadata;
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

    toJSON(message: AudioMetadata): unknown {
        const obj: any = {};
        message.rawAudio !== undefined &&
            (obj.rawAudio = message.rawAudio ? RawAudio.toJSON(message.rawAudio) : undefined);
        message.containerAudio !== undefined &&
            (obj.containerAudio = message.containerAudio
                ? ContainerAudio.toJSON(message.containerAudio)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AudioMetadata>, I>>(object: I): AudioMetadata {
        const message = { ...baseAudioMetadata } as AudioMetadata;
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

const baseAudioStreamingRequest: object = {};

export const AudioStreamingRequest = {
    encode(message: AudioStreamingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.audioMetadata !== undefined) {
            AudioMetadata.encode(message.audioMetadata, writer.uint32(10).fork()).ldelim();
        }
        if (message.chunk !== undefined) {
            AudioChunk.encode(message.chunk, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AudioStreamingRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAudioStreamingRequest } as AudioStreamingRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.audioMetadata = AudioMetadata.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chunk = AudioChunk.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AudioStreamingRequest {
        const message = { ...baseAudioStreamingRequest } as AudioStreamingRequest;
        message.audioMetadata =
            object.audioMetadata !== undefined && object.audioMetadata !== null
                ? AudioMetadata.fromJSON(object.audioMetadata)
                : undefined;
        message.chunk =
            object.chunk !== undefined && object.chunk !== null
                ? AudioChunk.fromJSON(object.chunk)
                : undefined;
        return message;
    },

    toJSON(message: AudioStreamingRequest): unknown {
        const obj: any = {};
        message.audioMetadata !== undefined &&
            (obj.audioMetadata = message.audioMetadata
                ? AudioMetadata.toJSON(message.audioMetadata)
                : undefined);
        message.chunk !== undefined &&
            (obj.chunk = message.chunk ? AudioChunk.toJSON(message.chunk) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AudioStreamingRequest>, I>>(
        object: I,
    ): AudioStreamingRequest {
        const message = { ...baseAudioStreamingRequest } as AudioStreamingRequest;
        message.audioMetadata =
            object.audioMetadata !== undefined && object.audioMetadata !== null
                ? AudioMetadata.fromPartial(object.audioMetadata)
                : undefined;
        message.chunk =
            object.chunk !== undefined && object.chunk !== null
                ? AudioChunk.fromPartial(object.chunk)
                : undefined;
        return message;
    },
};

const baseAudioRequest: object = {};

export const AudioRequest = {
    encode(message: AudioRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.audioMetadata !== undefined) {
            AudioMetadata.encode(message.audioMetadata, writer.uint32(10).fork()).ldelim();
        }
        if (message.audioData !== undefined) {
            AudioChunk.encode(message.audioData, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AudioRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAudioRequest } as AudioRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.audioMetadata = AudioMetadata.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.audioData = AudioChunk.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AudioRequest {
        const message = { ...baseAudioRequest } as AudioRequest;
        message.audioMetadata =
            object.audioMetadata !== undefined && object.audioMetadata !== null
                ? AudioMetadata.fromJSON(object.audioMetadata)
                : undefined;
        message.audioData =
            object.audioData !== undefined && object.audioData !== null
                ? AudioChunk.fromJSON(object.audioData)
                : undefined;
        return message;
    },

    toJSON(message: AudioRequest): unknown {
        const obj: any = {};
        message.audioMetadata !== undefined &&
            (obj.audioMetadata = message.audioMetadata
                ? AudioMetadata.toJSON(message.audioMetadata)
                : undefined);
        message.audioData !== undefined &&
            (obj.audioData = message.audioData ? AudioChunk.toJSON(message.audioData) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AudioRequest>, I>>(object: I): AudioRequest {
        const message = { ...baseAudioRequest } as AudioRequest;
        message.audioMetadata =
            object.audioMetadata !== undefined && object.audioMetadata !== null
                ? AudioMetadata.fromPartial(object.audioMetadata)
                : undefined;
        message.audioData =
            object.audioData !== undefined && object.audioData !== null
                ? AudioChunk.fromPartial(object.audioData)
                : undefined;
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
