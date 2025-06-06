/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.video.v1';

export interface Episode {
    /** ID of the episode. */
    id: string;
    /** ID of the stream. Optional, empty if the episode is linked to the line */
    streamId: string;
    /** ID of the line. Optional, empty if the episode is linked to the stream */
    lineId: string;
    /** Episode title. */
    title: string;
    /** Episode description. */
    description: string;
    /** ID of the thumbnail. */
    thumbnailId: string;
    /** Episode start time. */
    startTime?: Date;
    /** Episode finish time. */
    finishTime?: Date;
    /**
     * Enables episode DVR mode.
     * Determines how many last seconds of the stream are available for watching.
     *
     * Possible values:
     *  * `0`: infinite dvr size, the full length of the stream allowed to display
     *  * `>0`: size of dvr window in seconds, the minimum value is 30s
     */
    dvrSeconds: number;
    visibilityStatus: Episode_VisibilityStatus;
    /** Episode is available to everyone. */
    publicAccess?: EpisodePublicAccessRights | undefined;
    /** Checking access rights using the authorization system. */
    authSystemAccess?: EpisodeAuthSystemAccessRights | undefined;
    /** Checking access rights using url's signature. */
    signUrlAccess?: EpisodeSignURLAccessRights | undefined;
    /** Time when episode was created. */
    createdAt?: Date;
    /** Time of last episode update. */
    updatedAt?: Date;
}

export enum Episode_VisibilityStatus {
    VISIBILITY_STATUS_UNSPECIFIED = 0,
    PUBLISHED = 1,
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

export interface EpisodePublicAccessRights {}

export interface EpisodeAuthSystemAccessRights {}

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
};

export const Episode = {
    encode(message: Episode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
        if (message.publicAccess !== undefined) {
            EpisodePublicAccessRights.encode(
                message.publicAccess,
                writer.uint32(8002).fork(),
            ).ldelim();
        }
        if (message.authSystemAccess !== undefined) {
            EpisodeAuthSystemAccessRights.encode(
                message.authSystemAccess,
                writer.uint32(8018).fork(),
            ).ldelim();
        }
        if (message.signUrlAccess !== undefined) {
            EpisodeSignURLAccessRights.encode(
                message.signUrlAccess,
                writer.uint32(8026).fork(),
            ).ldelim();
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
                case 1000:
                    message.publicAccess = EpisodePublicAccessRights.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 1002:
                    message.authSystemAccess = EpisodeAuthSystemAccessRights.decode(
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
        message.publicAccess =
            object.publicAccess !== undefined && object.publicAccess !== null
                ? EpisodePublicAccessRights.fromJSON(object.publicAccess)
                : undefined;
        message.authSystemAccess =
            object.authSystemAccess !== undefined && object.authSystemAccess !== null
                ? EpisodeAuthSystemAccessRights.fromJSON(object.authSystemAccess)
                : undefined;
        message.signUrlAccess =
            object.signUrlAccess !== undefined && object.signUrlAccess !== null
                ? EpisodeSignURLAccessRights.fromJSON(object.signUrlAccess)
                : undefined;
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
        message.publicAccess !== undefined &&
            (obj.publicAccess = message.publicAccess
                ? EpisodePublicAccessRights.toJSON(message.publicAccess)
                : undefined);
        message.authSystemAccess !== undefined &&
            (obj.authSystemAccess = message.authSystemAccess
                ? EpisodeAuthSystemAccessRights.toJSON(message.authSystemAccess)
                : undefined);
        message.signUrlAccess !== undefined &&
            (obj.signUrlAccess = message.signUrlAccess
                ? EpisodeSignURLAccessRights.toJSON(message.signUrlAccess)
                : undefined);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Episode>, I>>(object: I): Episode {
        const message = { ...baseEpisode } as Episode;
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
        message.publicAccess =
            object.publicAccess !== undefined && object.publicAccess !== null
                ? EpisodePublicAccessRights.fromPartial(object.publicAccess)
                : undefined;
        message.authSystemAccess =
            object.authSystemAccess !== undefined && object.authSystemAccess !== null
                ? EpisodeAuthSystemAccessRights.fromPartial(object.authSystemAccess)
                : undefined;
        message.signUrlAccess =
            object.signUrlAccess !== undefined && object.signUrlAccess !== null
                ? EpisodeSignURLAccessRights.fromPartial(object.signUrlAccess)
                : undefined;
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        return message;
    },
};

const baseEpisodePublicAccessRights: object = {};

export const EpisodePublicAccessRights = {
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

const baseEpisodeAuthSystemAccessRights: object = {};

export const EpisodeAuthSystemAccessRights = {
    encode(_: EpisodeAuthSystemAccessRights, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EpisodeAuthSystemAccessRights {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEpisodeAuthSystemAccessRights } as EpisodeAuthSystemAccessRights;
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

    fromJSON(_: any): EpisodeAuthSystemAccessRights {
        const message = { ...baseEpisodeAuthSystemAccessRights } as EpisodeAuthSystemAccessRights;
        return message;
    },

    toJSON(_: EpisodeAuthSystemAccessRights): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<EpisodeAuthSystemAccessRights>, I>>(
        _: I,
    ): EpisodeAuthSystemAccessRights {
        const message = { ...baseEpisodeAuthSystemAccessRights } as EpisodeAuthSystemAccessRights;
        return message;
    },
};

const baseEpisodeSignURLAccessRights: object = {};

export const EpisodeSignURLAccessRights = {
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
