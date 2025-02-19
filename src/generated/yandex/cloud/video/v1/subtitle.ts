/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.video.v1';

export interface Subtitle {
    /** ID of the subtitle. */
    id: string;
    /** Subtitle language represented as a three-letter ISO 639-3 code. */
    language: string;
    /** Subtitle caption to be displayed on screen during video playback. */
    label: string;
    /** Subtitle status. */
    status: Subtitle_SubtitleStatus;
    /** Subtitle filename. */
    filename: string;
    /** Time when subtitle was created. */
    createdAt?: Date;
    /** Time of last subtitle update. */
    updatedAt?: Date;
    /** ID of the video. */
    videoId: string | undefined;
}

export enum Subtitle_SubtitleStatus {
    /** SUBTITLE_STATUS_UNSPECIFIED - Subtitle status unspecified. */
    SUBTITLE_STATUS_UNSPECIFIED = 0,
    /** WAIT_UPLOADING - Waiting for all the bytes to be loaded. */
    WAIT_UPLOADING = 1,
    /** UPLOADED - Uploading is complete. */
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

const baseSubtitle: object = { id: '', language: '', label: '', status: 0, filename: '' };

export const Subtitle = {
    encode(message: Subtitle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
        if (message.filename !== '') {
            writer.uint32(42).string(message.filename);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(802).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(810).fork()).ldelim();
        }
        if (message.videoId !== undefined) {
            writer.uint32(8002).string(message.videoId);
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
                case 5:
                    message.filename = reader.string();
                    break;
                case 100:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 101:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 1000:
                    message.videoId = reader.string();
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
        message.videoId =
            object.videoId !== undefined && object.videoId !== null
                ? String(object.videoId)
                : undefined;
        return message;
    },

    toJSON(message: Subtitle): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.language !== undefined && (obj.language = message.language);
        message.label !== undefined && (obj.label = message.label);
        message.status !== undefined &&
            (obj.status = subtitle_SubtitleStatusToJSON(message.status));
        message.filename !== undefined && (obj.filename = message.filename);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        message.videoId !== undefined && (obj.videoId = message.videoId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Subtitle>, I>>(object: I): Subtitle {
        const message = { ...baseSubtitle } as Subtitle;
        message.id = object.id ?? '';
        message.language = object.language ?? '';
        message.label = object.label ?? '';
        message.status = object.status ?? 0;
        message.filename = object.filename ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        message.videoId = object.videoId ?? undefined;
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
