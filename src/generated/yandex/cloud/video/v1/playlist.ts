/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.video.v1';

/**
 * Entity representing an ordered collection of videos or episodes.
 * Playlists allow organizing content into sequences for improved user experience.
 */
export interface Playlist {
    /** Unique identifier of the playlist. */
    id: string;
    /** Identifier of the channel where this playlist is created and managed. */
    channelId: string;
    /** Title of the playlist displayed in interfaces and players. */
    title: string;
    /** Detailed description of the playlist's content and purpose. */
    description: string;
    /** Ordered list of content items included in this playlist. */
    items: PlaylistItem[];
    /** Identifier of the style preset used in the player during playlist playback. */
    stylePresetId: string;
    /** Timestamp when the playlist was initially created in the system. */
    createdAt?: Date;
    /** Timestamp of the last modification to the playlist or its metadata. */
    updatedAt?: Date;
}

/**
 * Represents a single item in a playlist.
 * Each item references either a video or an episode and specifies its position in the sequence.
 */
export interface PlaylistItem {
    /** Identifier of a video included in the playlist. */
    videoId: string | undefined;
    /** Identifier of an episode included in the playlist. */
    episodeId: string | undefined;
    /**
     * Position of this item in the playlist sequence (zero-indexed).
     * Determines the playback order of content in the playlist.
     */
    position: number;
}

const basePlaylist: object = {
    id: '',
    channelId: '',
    title: '',
    description: '',
    stylePresetId: '',
};

export const Playlist: {
    encode(message: Playlist, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Playlist;
    fromJSON(object: any): Playlist;
    toJSON(message: Playlist): unknown;
    fromPartial<I extends Exact<DeepPartial<Playlist>, I>>(object: I): Playlist;
} = {
    encode(message: Playlist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.channelId !== '') {
            writer.uint32(18).string(message.channelId);
        }
        if (message.title !== '') {
            writer.uint32(26).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        for (const v of message.items) {
            PlaylistItem.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        if (message.stylePresetId !== '') {
            writer.uint32(50).string(message.stylePresetId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(802).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(810).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Playlist {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePlaylist } as Playlist;
        message.items = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.title = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.items.push(PlaylistItem.decode(reader, reader.uint32()));
                    break;
                case 6:
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

    fromJSON(object: any): Playlist {
        const message = { ...basePlaylist } as Playlist;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.channelId =
            object.channelId !== undefined && object.channelId !== null
                ? String(object.channelId)
                : '';
        message.title =
            object.title !== undefined && object.title !== null ? String(object.title) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.items = (object.items ?? []).map((e: any) => PlaylistItem.fromJSON(e));
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

    toJSON(message: Playlist): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.items) {
            obj.items = message.items.map((e) => (e ? PlaylistItem.toJSON(e) : undefined));
        } else {
            obj.items = [];
        }
        message.stylePresetId !== undefined && (obj.stylePresetId = message.stylePresetId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Playlist>, I>>(object: I): Playlist {
        const message = { ...basePlaylist } as Playlist;
        message.id = object.id ?? '';
        message.channelId = object.channelId ?? '';
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.items = object.items?.map((e) => PlaylistItem.fromPartial(e)) || [];
        message.stylePresetId = object.stylePresetId ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        return message;
    },
};

const basePlaylistItem: object = { position: 0 };

export const PlaylistItem: {
    encode(message: PlaylistItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlaylistItem;
    fromJSON(object: any): PlaylistItem;
    toJSON(message: PlaylistItem): unknown;
    fromPartial<I extends Exact<DeepPartial<PlaylistItem>, I>>(object: I): PlaylistItem;
} = {
    encode(message: PlaylistItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.videoId !== undefined) {
            writer.uint32(802).string(message.videoId);
        }
        if (message.episodeId !== undefined) {
            writer.uint32(810).string(message.episodeId);
        }
        if (message.position !== 0) {
            writer.uint32(8).int64(message.position);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PlaylistItem {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePlaylistItem } as PlaylistItem;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 100:
                    message.videoId = reader.string();
                    break;
                case 101:
                    message.episodeId = reader.string();
                    break;
                case 1:
                    message.position = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PlaylistItem {
        const message = { ...basePlaylistItem } as PlaylistItem;
        message.videoId =
            object.videoId !== undefined && object.videoId !== null
                ? String(object.videoId)
                : undefined;
        message.episodeId =
            object.episodeId !== undefined && object.episodeId !== null
                ? String(object.episodeId)
                : undefined;
        message.position =
            object.position !== undefined && object.position !== null ? Number(object.position) : 0;
        return message;
    },

    toJSON(message: PlaylistItem): unknown {
        const obj: any = {};
        message.videoId !== undefined && (obj.videoId = message.videoId);
        message.episodeId !== undefined && (obj.episodeId = message.episodeId);
        message.position !== undefined && (obj.position = Math.round(message.position));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PlaylistItem>, I>>(object: I): PlaylistItem {
        const message = { ...basePlaylistItem } as PlaylistItem;
        message.videoId = object.videoId ?? undefined;
        message.episodeId = object.episodeId ?? undefined;
        message.position = object.position ?? 0;
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
