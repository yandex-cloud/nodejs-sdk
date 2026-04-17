/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.video.v1';

/**
 * Entity representing a subtitle track that can be associated with a video.
 * Subtitles provide text versions of the audio content, enabling accessibility
 * and multilingual support for video content.
 */
export interface Subtitle {
    /** Identifier of the video this subtitle belongs to. */
    videoId: string | undefined;
    /** Unique identifier of the subtitle track. */
    id: string;
    /** Language of the subtitle content according to ISO 639-2/T. */
    language: string;
    /** Display label for the subtitle track shown in the video player's subtitle selection menu. */
    label: string;
    /** Current processing status of the subtitle. */
    status: Subtitle_SubtitleStatus;
    /** Indicates how the subtitle was created or obtained. */
    sourceType: Subtitle_SubtitleSourceType;
    /** Original filename of the subtitle file. */
    filename: string;
    /** Timestamp when the subtitle was initially created in the system. */
    createdAt?: Date;
    /** Timestamp of the last modification to the subtitle or its metadata. */
    updatedAt?: Date;
}

/** Current processing status of the subtitle. */
export enum Subtitle_SubtitleStatus {
    /** SUBTITLE_STATUS_UNSPECIFIED - The subtitle status is not specified. */
    SUBTITLE_STATUS_UNSPECIFIED = 0,
    /** WAIT_UPLOADING - The subtitle file upload is in progress, waiting for all bytes to be received. */
    WAIT_UPLOADING = 1,
    /** UPLOADED - The subtitle file has been fully uploaded and is ready for use. */
    UPLOADED = 2,
    UNRECOGNIZED = -1,
}

export function subtitle_SubtitleStatusFromJSON(object: any): Subtitle_SubtitleStatus {
    switch (object) {
        case 0:
        case 'SUBTITLE_STATUS_UNSPECIFIED':
            return Subtitle_SubtitleStatus.SUBTITLE_STATUS_UNSPECIFIED;
        case 1:
        case 'WAIT_UPLOADING':
            return Subtitle_SubtitleStatus.WAIT_UPLOADING;
        case 2:
        case 'UPLOADED':
            return Subtitle_SubtitleStatus.UPLOADED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Subtitle_SubtitleStatus.UNRECOGNIZED;
    }
}

export function subtitle_SubtitleStatusToJSON(object: Subtitle_SubtitleStatus): string {
    switch (object) {
        case Subtitle_SubtitleStatus.SUBTITLE_STATUS_UNSPECIFIED:
            return 'SUBTITLE_STATUS_UNSPECIFIED';
        case Subtitle_SubtitleStatus.WAIT_UPLOADING:
            return 'WAIT_UPLOADING';
        case Subtitle_SubtitleStatus.UPLOADED:
            return 'UPLOADED';
        default:
            return 'UNKNOWN';
    }
}

/** Source type representing how the subtitle was created or obtained. */
export enum Subtitle_SubtitleSourceType {
    /** SUBTITLE_SOURCE_TYPE_UNSPECIFIED - The subtitle source type is not specified. */
    SUBTITLE_SOURCE_TYPE_UNSPECIFIED = 0,
    /** MANUAL - The subtitle was manually created and uploaded by a user. */
    MANUAL = 1,
    /** GENERATED - The subtitle was automatically generated through speech recognition. */
    GENERATED = 2,
    UNRECOGNIZED = -1,
}

export function subtitle_SubtitleSourceTypeFromJSON(object: any): Subtitle_SubtitleSourceType {
    switch (object) {
        case 0:
        case 'SUBTITLE_SOURCE_TYPE_UNSPECIFIED':
            return Subtitle_SubtitleSourceType.SUBTITLE_SOURCE_TYPE_UNSPECIFIED;
        case 1:
        case 'MANUAL':
            return Subtitle_SubtitleSourceType.MANUAL;
        case 2:
        case 'GENERATED':
            return Subtitle_SubtitleSourceType.GENERATED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Subtitle_SubtitleSourceType.UNRECOGNIZED;
    }
}

export function subtitle_SubtitleSourceTypeToJSON(object: Subtitle_SubtitleSourceType): string {
    switch (object) {
        case Subtitle_SubtitleSourceType.SUBTITLE_SOURCE_TYPE_UNSPECIFIED:
            return 'SUBTITLE_SOURCE_TYPE_UNSPECIFIED';
        case Subtitle_SubtitleSourceType.MANUAL:
            return 'MANUAL';
        case Subtitle_SubtitleSourceType.GENERATED:
            return 'GENERATED';
        default:
            return 'UNKNOWN';
    }
}

const baseSubtitle: object = {
    id: '',
    language: '',
    label: '',
    status: 0,
    sourceType: 0,
    filename: '',
};

export const Subtitle: {
    encode(message: Subtitle, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Subtitle;
    fromJSON(object: any): Subtitle;
    toJSON(message: Subtitle): unknown;
    fromPartial<I extends Exact<DeepPartial<Subtitle>, I>>(object: I): Subtitle;
} = {
    encode(message: Subtitle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.videoId !== undefined) {
            writer.uint32(8002).string(message.videoId);
        }
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.language !== '') {
            writer.uint32(18).string(message.language);
        }
        if (message.label !== '') {
            writer.uint32(26).string(message.label);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.sourceType !== 0) {
            writer.uint32(48).int32(message.sourceType);
        }
        if (message.filename !== '') {
            writer.uint32(42).string(message.filename);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(802).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(810).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Subtitle {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSubtitle } as Subtitle;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1000:
                    message.videoId = reader.string();
                    break;
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.language = reader.string();
                    break;
                case 3:
                    message.label = reader.string();
                    break;
                case 4:
                    message.status = reader.int32() as any;
                    break;
                case 6:
                    message.sourceType = reader.int32() as any;
                    break;
                case 5:
                    message.filename = reader.string();
                    break;
                case 100:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 101:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Subtitle {
        const message = { ...baseSubtitle } as Subtitle;
        message.videoId =
            object.videoId !== undefined && object.videoId !== null
                ? String(object.videoId)
                : undefined;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.language =
            object.language !== undefined && object.language !== null
                ? String(object.language)
                : '';
        message.label =
            object.label !== undefined && object.label !== null ? String(object.label) : '';
        message.status =
            object.status !== undefined && object.status !== null
                ? subtitle_SubtitleStatusFromJSON(object.status)
                : 0;
        message.sourceType =
            object.sourceType !== undefined && object.sourceType !== null
                ? subtitle_SubtitleSourceTypeFromJSON(object.sourceType)
                : 0;
        message.filename =
            object.filename !== undefined && object.filename !== null
                ? String(object.filename)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.updatedAt =
            object.updatedAt !== undefined && object.updatedAt !== null
                ? fromJsonTimestamp(object.updatedAt)
                : undefined;
        return message;
    },

    toJSON(message: Subtitle): unknown {
        const obj: any = {};
        message.videoId !== undefined && (obj.videoId = message.videoId);
        message.id !== undefined && (obj.id = message.id);
        message.language !== undefined && (obj.language = message.language);
        message.label !== undefined && (obj.label = message.label);
        message.status !== undefined &&
            (obj.status = subtitle_SubtitleStatusToJSON(message.status));
        message.sourceType !== undefined &&
            (obj.sourceType = subtitle_SubtitleSourceTypeToJSON(message.sourceType));
        message.filename !== undefined && (obj.filename = message.filename);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Subtitle>, I>>(object: I): Subtitle {
        const message = { ...baseSubtitle } as Subtitle;
        message.videoId = object.videoId ?? undefined;
        message.id = object.id ?? '';
        message.language = object.language ?? '';
        message.label = object.label ?? '';
        message.status = object.status ?? 0;
        message.sourceType = object.sourceType ?? 0;
        message.filename = object.filename ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        return message;
    },
};

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

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
