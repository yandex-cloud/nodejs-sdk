/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.video.v1';

/**
 * Entity representing a stream fragment that can be accessed independently.
 * Episodes can be linked to either a stream or a line
 * and provide a way to reference specific portions of the corresponding content.
 */
export interface Episode {
    /**
     * Allows unrestricted public access to the episode via direct link.
     * No additional authorization or access control is applied.
     */
    publicAccess?: EpisodePublicAccessRights | undefined;
    /** Restricts episode access using URL signatures for secure time-limited access. */
    signUrlAccess?: EpisodeSignURLAccessRights | undefined;
    /** Unique identifier of the episode. */
    id: string;
    /**
     * Identifier of the stream this episode is linked to.
     * Optional, empty if the episode is linked to a line.
     */
    streamId: string;
    /**
     * Identifier of the line this episode is linked to.
     * Optional, empty if the episode is linked to a stream.
     */
    lineId: string;
    /** Title of the episode displayed in interfaces and players. */
    title: string;
    /** Detailed description of the episode content and context. */
    description: string;
    /** Identifier of the thumbnail image used to represent the episode visually. */
    thumbnailId: string;
    /** Timestamp marking the beginning of the episode content. */
    startTime?: Date;
    /** Timestamp marking the end of the episode content. */
    finishTime?: Date;
    /**
     * Controls the Digital Video Recording (DVR) functionality for the episode.
     * Determines how many seconds of the stream are available for time-shifted viewing.
     * Possible values:
     * * `0`: Infinite DVR size, the full length of the stream is available for viewing.
     * * `>0`: Size of DVR window in seconds, the minimum value is 30s.
     */
    dvrSeconds: number;
    /** Current visibility status controlling whether the episode is publicly available. */
    visibilityStatus: Episode_VisibilityStatus;
    /** Identifier of the style preset used in the player during episode playback. */
    stylePresetId: string;
    /** Timestamp when the episode was initially created in the system. */
    createdAt?: Date;
    /** Timestamp of the last modification to the episode or its metadata. */
    updatedAt?: Date;
}

/** Visibility status of the episode. */
export enum Episode_VisibilityStatus {
    /** VISIBILITY_STATUS_UNSPECIFIED - The visibility status is not specified. */
    VISIBILITY_STATUS_UNSPECIFIED = 0,
    /** PUBLISHED - The episode is publicly available, subject to its access permission settings. */
    PUBLISHED = 1,
    /** UNPUBLISHED - The episode is available only to administrators. */
    UNPUBLISHED = 2,
    UNRECOGNIZED = -1,
}

export function episode_VisibilityStatusFromJSON(object: any): Episode_VisibilityStatus {
    switch (object) {
        case 0:
        case 'VISIBILITY_STATUS_UNSPECIFIED':
            return Episode_VisibilityStatus.VISIBILITY_STATUS_UNSPECIFIED;
        case 1:
        case 'PUBLISHED':
            return Episode_VisibilityStatus.PUBLISHED;
        case 2:
        case 'UNPUBLISHED':
            return Episode_VisibilityStatus.UNPUBLISHED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Episode_VisibilityStatus.UNRECOGNIZED;
    }
}

export function episode_VisibilityStatusToJSON(object: Episode_VisibilityStatus): string {
    switch (object) {
        case Episode_VisibilityStatus.VISIBILITY_STATUS_UNSPECIFIED:
            return 'VISIBILITY_STATUS_UNSPECIFIED';
        case Episode_VisibilityStatus.PUBLISHED:
            return 'PUBLISHED';
        case Episode_VisibilityStatus.UNPUBLISHED:
            return 'UNPUBLISHED';
        default:
            return 'UNKNOWN';
    }
}

/**
 * Represents public access rights for an episode.
 * When this access type is set, the episode is publicly accessible via direct link.
 */
export interface EpisodePublicAccessRights {}

/**
 * Represents access rights controlled by URL signatures.
 * When this access type is set, the episode is accessible only via properly signed temporary link.
 */
export interface EpisodeSignURLAccessRights {}

const baseEpisode: object = {
    id: '',
    streamId: '',
    lineId: '',
    title: '',
    description: '',
    thumbnailId: '',
    dvrSeconds: 0,
    visibilityStatus: 0,
    stylePresetId: '',
};

export const Episode: {
    encode(message: Episode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Episode;
    fromJSON(object: any): Episode;
    toJSON(message: Episode): unknown;
    fromPartial<I extends Exact<DeepPartial<Episode>, I>>(object: I): Episode;
} = {
    encode(message: Episode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.publicAccess !== undefined) {
            EpisodePublicAccessRights.encode(
                message.publicAccess,
                writer.uint32(8002).fork(),
            ).ldelim();
        }
        if (message.signUrlAccess !== undefined) {
            EpisodeSignURLAccessRights.encode(
                message.signUrlAccess,
                writer.uint32(8026).fork(),
            ).ldelim();
        }
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.streamId !== '') {
            writer.uint32(18).string(message.streamId);
        }
        if (message.lineId !== '') {
            writer.uint32(26).string(message.lineId);
        }
        if (message.title !== '') {
            writer.uint32(34).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        if (message.thumbnailId !== '') {
            writer.uint32(50).string(message.thumbnailId);
        }
        if (message.startTime !== undefined) {
            Timestamp.encode(toTimestamp(message.startTime), writer.uint32(58).fork()).ldelim();
        }
        if (message.finishTime !== undefined) {
            Timestamp.encode(toTimestamp(message.finishTime), writer.uint32(66).fork()).ldelim();
        }
        if (message.dvrSeconds !== 0) {
            writer.uint32(72).int64(message.dvrSeconds);
        }
        if (message.visibilityStatus !== 0) {
            writer.uint32(80).int32(message.visibilityStatus);
        }
        if (message.stylePresetId !== '') {
            writer.uint32(98).string(message.stylePresetId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(802).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(810).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Episode {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEpisode } as Episode;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1000:
                    message.publicAccess = EpisodePublicAccessRights.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 1003:
                    message.signUrlAccess = EpisodeSignURLAccessRights.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.streamId = reader.string();
                    break;
                case 3:
                    message.lineId = reader.string();
                    break;
                case 4:
                    message.title = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.thumbnailId = reader.string();
                    break;
                case 7:
                    message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.finishTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.dvrSeconds = longToNumber(reader.int64() as Long);
                    break;
                case 10:
                    message.visibilityStatus = reader.int32() as any;
                    break;
                case 12:
                    message.stylePresetId = reader.string();
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

    fromJSON(object: any): Episode {
        const message = { ...baseEpisode } as Episode;
        message.publicAccess =
            object.publicAccess !== undefined && object.publicAccess !== null
                ? EpisodePublicAccessRights.fromJSON(object.publicAccess)
                : undefined;
        message.signUrlAccess =
            object.signUrlAccess !== undefined && object.signUrlAccess !== null
                ? EpisodeSignURLAccessRights.fromJSON(object.signUrlAccess)
                : undefined;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.streamId =
            object.streamId !== undefined && object.streamId !== null
                ? String(object.streamId)
                : '';
        message.lineId =
            object.lineId !== undefined && object.lineId !== null ? String(object.lineId) : '';
        message.title =
            object.title !== undefined && object.title !== null ? String(object.title) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.thumbnailId =
            object.thumbnailId !== undefined && object.thumbnailId !== null
                ? String(object.thumbnailId)
                : '';
        message.startTime =
            object.startTime !== undefined && object.startTime !== null
                ? fromJsonTimestamp(object.startTime)
                : undefined;
        message.finishTime =
            object.finishTime !== undefined && object.finishTime !== null
                ? fromJsonTimestamp(object.finishTime)
                : undefined;
        message.dvrSeconds =
            object.dvrSeconds !== undefined && object.dvrSeconds !== null
                ? Number(object.dvrSeconds)
                : 0;
        message.visibilityStatus =
            object.visibilityStatus !== undefined && object.visibilityStatus !== null
                ? episode_VisibilityStatusFromJSON(object.visibilityStatus)
                : 0;
        message.stylePresetId =
            object.stylePresetId !== undefined && object.stylePresetId !== null
                ? String(object.stylePresetId)
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

    toJSON(message: Episode): unknown {
        const obj: any = {};
        message.publicAccess !== undefined &&
            (obj.publicAccess = message.publicAccess
                ? EpisodePublicAccessRights.toJSON(message.publicAccess)
                : undefined);
        message.signUrlAccess !== undefined &&
            (obj.signUrlAccess = message.signUrlAccess
                ? EpisodeSignURLAccessRights.toJSON(message.signUrlAccess)
                : undefined);
        message.id !== undefined && (obj.id = message.id);
        message.streamId !== undefined && (obj.streamId = message.streamId);
        message.lineId !== undefined && (obj.lineId = message.lineId);
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.thumbnailId !== undefined && (obj.thumbnailId = message.thumbnailId);
        message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
        message.finishTime !== undefined && (obj.finishTime = message.finishTime.toISOString());
        message.dvrSeconds !== undefined && (obj.dvrSeconds = Math.round(message.dvrSeconds));
        message.visibilityStatus !== undefined &&
            (obj.visibilityStatus = episode_VisibilityStatusToJSON(message.visibilityStatus));
        message.stylePresetId !== undefined && (obj.stylePresetId = message.stylePresetId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Episode>, I>>(object: I): Episode {
        const message = { ...baseEpisode } as Episode;
        message.publicAccess =
            object.publicAccess !== undefined && object.publicAccess !== null
                ? EpisodePublicAccessRights.fromPartial(object.publicAccess)
                : undefined;
        message.signUrlAccess =
            object.signUrlAccess !== undefined && object.signUrlAccess !== null
                ? EpisodeSignURLAccessRights.fromPartial(object.signUrlAccess)
                : undefined;
        message.id = object.id ?? '';
        message.streamId = object.streamId ?? '';
        message.lineId = object.lineId ?? '';
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.thumbnailId = object.thumbnailId ?? '';
        message.startTime = object.startTime ?? undefined;
        message.finishTime = object.finishTime ?? undefined;
        message.dvrSeconds = object.dvrSeconds ?? 0;
        message.visibilityStatus = object.visibilityStatus ?? 0;
        message.stylePresetId = object.stylePresetId ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        return message;
    },
};

const baseEpisodePublicAccessRights: object = {};

export const EpisodePublicAccessRights: {
    encode(message: EpisodePublicAccessRights, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EpisodePublicAccessRights;
    fromJSON(object: any): EpisodePublicAccessRights;
    toJSON(message: EpisodePublicAccessRights): unknown;
    fromPartial<I extends Exact<DeepPartial<EpisodePublicAccessRights>, I>>(object: I): EpisodePublicAccessRights;
} = {
    encode(_: EpisodePublicAccessRights, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EpisodePublicAccessRights {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEpisodePublicAccessRights } as EpisodePublicAccessRights;
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

    fromJSON(_: any): EpisodePublicAccessRights {
        const message = { ...baseEpisodePublicAccessRights } as EpisodePublicAccessRights;
        return message;
    },

    toJSON(_: EpisodePublicAccessRights): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<EpisodePublicAccessRights>, I>>(
        _: I,
    ): EpisodePublicAccessRights {
        const message = { ...baseEpisodePublicAccessRights } as EpisodePublicAccessRights;
        return message;
    },
};

const baseEpisodeSignURLAccessRights: object = {};

export const EpisodeSignURLAccessRights: {
    encode(message: EpisodeSignURLAccessRights, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EpisodeSignURLAccessRights;
    fromJSON(object: any): EpisodeSignURLAccessRights;
    toJSON(message: EpisodeSignURLAccessRights): unknown;
    fromPartial<I extends Exact<DeepPartial<EpisodeSignURLAccessRights>, I>>(object: I): EpisodeSignURLAccessRights;
} = {
    encode(_: EpisodeSignURLAccessRights, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EpisodeSignURLAccessRights {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEpisodeSignURLAccessRights } as EpisodeSignURLAccessRights;
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

    fromJSON(_: any): EpisodeSignURLAccessRights {
        const message = { ...baseEpisodeSignURLAccessRights } as EpisodeSignURLAccessRights;
        return message;
    },

    toJSON(_: EpisodeSignURLAccessRights): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<EpisodeSignURLAccessRights>, I>>(
        _: I,
    ): EpisodeSignURLAccessRights {
        const message = { ...baseEpisodeSignURLAccessRights } as EpisodeSignURLAccessRights;
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
