/* eslint-disable */
import Long from 'long';
import {
    makeGenericClientConstructor,
    ChannelCredentials,
    ChannelOptions,
    UntypedServiceImplementation,
    handleUnaryCall,
    Client,
    ClientUnaryCall,
    Metadata,
    CallOptions,
    ServiceError,
} from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Playlist, PlaylistItem } from './playlist';
import { Operation } from '../../operation/operation';

export const protobufPackage = 'yandex.cloud.video.v1';

export interface GetPlaylistRequest {
    /** ID of the playlist to retrieve. */
    playlistId: string;
}

export interface ListPlaylistsRequest {
    /** ID of the channel containing the playlists to list. */
    channelId: string;
    /** The maximum number of playlists to return per page. */
    pageSize: number;
    /**
     * Page token for retrieving the next page of results.
     * This token is obtained from the next_page_token field in the previous ListPlaylistsResponse.
     */
    pageToken: string;
    /**
     * Specifies the ordering of results.
     * Format is "<field> <order>" (e.g., "createdAt desc").
     * Default: "id asc".
     * Supported fields: ["id", "title", "createdAt", "updatedAt"].
     * Both snake_case and camelCase field names are supported.
     */
    orderBy: string;
    /**
     * Filter expression to narrow down the list of returned playlists.
     * Expressions consist of terms connected by logical operators.
     * Values containing spaces or quotes must be enclosed in quotes (`'` or `"`)
     * with inner quotes being backslash-escaped.
     * Supported logical operators: ["AND", "OR"].
     * Supported comparison operators: ["=", "!=", ":"] where ":" enables substring matching.
     * Parentheses can be used to group logical expressions.
     * Example: `title:'highlights' AND id='playlist-1'`
     * Filterable fields: ["id", "title"].
     * Both snake_case and camelCase field names are supported.
     */
    filter: string;
}

export interface ListPlaylistsResponse {
    /**
     * List of playlists matching the request criteria.
     * May be empty if no playlists match the criteria or if the channel has no playlists.
     */
    playlists: Playlist[];
    /**
     * Token for retrieving the next page of results.
     * Empty if there are no more results available.
     */
    nextPageToken: string;
}

export interface CreatePlaylistRequest {
    /** ID of the channel where the playlist will be created. */
    channelId: string;
    /** Title of the playlist to be displayed in interfaces and players. */
    title: string;
    /**
     * Detailed description of the playlist content and context.
     * Optional field that can provide additional information about the playlist.
     */
    description: string;
    /**
     * List of items to include in the playlist.
     * Each item represents a video or episode to be played in sequence.
     * The order of items in this list determines the playback order.
     */
    items: PlaylistItem[];
    /**
     * ID of the style preset to be applied to the playlist player.
     * Style presets control the visual appearance of the player.
     */
    stylePresetId: string;
}

export interface CreatePlaylistMetadata {
    /** ID of the playlist being created. */
    playlistId: string;
}

export interface UpdatePlaylistRequest {
    /** ID of the playlist to update. */
    playlistId: string;
    /**
     * Field mask specifying which fields of the playlist should be updated.
     * Only fields specified in this mask will be modified;
     * all other fields will retain their current values.
     * This allows for partial updates.
     */
    fieldMask?: FieldMask;
    /** New title for the playlist. */
    title: string;
    /**
     * New description for the playlist.
     * Optional field that can provide additional information about the playlist.
     */
    description: string;
    /**
     * New list of items to include in the playlist.
     * This completely replaces the existing items if specified in the field mask.
     * The order of items in this list determines the playback order.
     */
    items: PlaylistItem[];
    /** New ID of the style preset to be applied to the playlist player. */
    stylePresetId: string;
}

export interface UpdatePlaylistMetadata {
    /** ID of the playlist being updated. */
    playlistId: string;
}

export interface DeletePlaylistRequest {
    /** ID of the playlist to delete. */
    playlistId: string;
}

export interface DeletePlaylistMetadata {
    /**
     * ID of the playlist being deleted.
     * This identifier can be used to track the playlist deletion operation.
     */
    playlistId: string;
}

export interface BatchDeletePlaylistsRequest {
    /** ID of the channel containing the playlists to delete. */
    channelId: string;
    /**
     * List of playlist IDs to delete.
     * All playlists must exist in the specified channel.
     */
    playlistIds: string[];
}

export interface BatchDeletePlaylistsMetadata {
    /**
     * List of playlist IDs being deleted.
     * This list can be used to track which playlists are included
     * in the batch deletion operation.
     */
    playlistIds: string[];
}

export interface GetPlaylistPlayerURLRequest {
    /** ID of the playlist for which to generate a player URL. */
    playlistId: string;
    /**
     * Optional player parameters to customize the playback experience.
     * These parameters control initial player state such as mute, autoplay, and visibility of interface controls.
     */
    params?: PlaylistPlayerParams;
}

export interface PlaylistPlayerParams {
    /**
     * If true, the player will start with audio muted.
     * Users can unmute the audio manually after playback starts.
     */
    mute: boolean;
    /**
     * If true, the playlist will start playing automatically when the player loads.
     * This may be subject to browser autoplay policies that restrict autoplay with sound.
     */
    autoplay: boolean;
    /**
     * If true, the player interface controls will be hidden initially.
     * Users can typically reveal the controls by moving the mouse over the player.
     */
    hidden: boolean;
}

export interface GetPlaylistPlayerURLResponse {
    /**
     * Direct URL to the playlist player.
     * This URL can be used to access the playlist in a web browser
     * or shared with users who have appropriate permissions.
     */
    playerUrl: string;
    /**
     * HTML embed code in iframe format that can be inserted into web pages.
     * This code allows the playlist to be embedded directly in third-party websites.
     */
    html: string;
}

const baseGetPlaylistRequest: object = { playlistId: '' };

export const GetPlaylistRequest: {
    encode(message: GetPlaylistRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPlaylistRequest;
    fromJSON(object: any): GetPlaylistRequest;
    toJSON(message: GetPlaylistRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetPlaylistRequest>, I>>(object: I): GetPlaylistRequest;
} = {
    encode(message: GetPlaylistRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.playlistId !== '') {
            writer.uint32(10).string(message.playlistId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetPlaylistRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetPlaylistRequest } as GetPlaylistRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.playlistId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetPlaylistRequest {
        const message = { ...baseGetPlaylistRequest } as GetPlaylistRequest;
        message.playlistId =
            object.playlistId !== undefined && object.playlistId !== null
                ? String(object.playlistId)
                : '';
        return message;
    },

    toJSON(message: GetPlaylistRequest): unknown {
        const obj: any = {};
        message.playlistId !== undefined && (obj.playlistId = message.playlistId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetPlaylistRequest>, I>>(
        object: I,
    ): GetPlaylistRequest {
        const message = { ...baseGetPlaylistRequest } as GetPlaylistRequest;
        message.playlistId = object.playlistId ?? '';
        return message;
    },
};

const baseListPlaylistsRequest: object = {
    channelId: '',
    pageSize: 0,
    pageToken: '',
    orderBy: '',
    filter: '',
};

export const ListPlaylistsRequest: {
    encode(message: ListPlaylistsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListPlaylistsRequest;
    fromJSON(object: any): ListPlaylistsRequest;
    toJSON(message: ListPlaylistsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListPlaylistsRequest>, I>>(object: I): ListPlaylistsRequest;
} = {
    encode(message: ListPlaylistsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.channelId !== '') {
            writer.uint32(10).string(message.channelId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(800).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(810).string(message.pageToken);
        }
        if (message.orderBy !== '') {
            writer.uint32(818).string(message.orderBy);
        }
        if (message.filter !== '') {
            writer.uint32(826).string(message.filter);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListPlaylistsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListPlaylistsRequest } as ListPlaylistsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 100:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 101:
                    message.pageToken = reader.string();
                    break;
                case 102:
                    message.orderBy = reader.string();
                    break;
                case 103:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListPlaylistsRequest {
        const message = { ...baseListPlaylistsRequest } as ListPlaylistsRequest;
        message.channelId =
            object.channelId !== undefined && object.channelId !== null
                ? String(object.channelId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        message.orderBy =
            object.orderBy !== undefined && object.orderBy !== null ? String(object.orderBy) : '';
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        return message;
    },

    toJSON(message: ListPlaylistsRequest): unknown {
        const obj: any = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPlaylistsRequest>, I>>(
        object: I,
    ): ListPlaylistsRequest {
        const message = { ...baseListPlaylistsRequest } as ListPlaylistsRequest;
        message.channelId = object.channelId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.orderBy = object.orderBy ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListPlaylistsResponse: object = { nextPageToken: '' };

export const ListPlaylistsResponse: {
    encode(message: ListPlaylistsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListPlaylistsResponse;
    fromJSON(object: any): ListPlaylistsResponse;
    toJSON(message: ListPlaylistsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListPlaylistsResponse>, I>>(object: I): ListPlaylistsResponse;
} = {
    encode(message: ListPlaylistsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.playlists) {
            Playlist.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(802).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListPlaylistsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListPlaylistsResponse } as ListPlaylistsResponse;
        message.playlists = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.playlists.push(Playlist.decode(reader, reader.uint32()));
                    break;
                case 100:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListPlaylistsResponse {
        const message = { ...baseListPlaylistsResponse } as ListPlaylistsResponse;
        message.playlists = (object.playlists ?? []).map((e: any) => Playlist.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListPlaylistsResponse): unknown {
        const obj: any = {};
        if (message.playlists) {
            obj.playlists = message.playlists.map((e) => (e ? Playlist.toJSON(e) : undefined));
        } else {
            obj.playlists = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPlaylistsResponse>, I>>(
        object: I,
    ): ListPlaylistsResponse {
        const message = { ...baseListPlaylistsResponse } as ListPlaylistsResponse;
        message.playlists = object.playlists?.map((e) => Playlist.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreatePlaylistRequest: object = {
    channelId: '',
    title: '',
    description: '',
    stylePresetId: '',
};

export const CreatePlaylistRequest: {
    encode(message: CreatePlaylistRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePlaylistRequest;
    fromJSON(object: any): CreatePlaylistRequest;
    toJSON(message: CreatePlaylistRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreatePlaylistRequest>, I>>(object: I): CreatePlaylistRequest;
} = {
    encode(message: CreatePlaylistRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.channelId !== '') {
            writer.uint32(10).string(message.channelId);
        }
        if (message.title !== '') {
            writer.uint32(18).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        for (const v of message.items) {
            PlaylistItem.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        if (message.stylePresetId !== '') {
            writer.uint32(42).string(message.stylePresetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePlaylistRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreatePlaylistRequest } as CreatePlaylistRequest;
        message.items = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.items.push(PlaylistItem.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.stylePresetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreatePlaylistRequest {
        const message = { ...baseCreatePlaylistRequest } as CreatePlaylistRequest;
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
        return message;
    },

    toJSON(message: CreatePlaylistRequest): unknown {
        const obj: any = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.items) {
            obj.items = message.items.map((e) => (e ? PlaylistItem.toJSON(e) : undefined));
        } else {
            obj.items = [];
        }
        message.stylePresetId !== undefined && (obj.stylePresetId = message.stylePresetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreatePlaylistRequest>, I>>(
        object: I,
    ): CreatePlaylistRequest {
        const message = { ...baseCreatePlaylistRequest } as CreatePlaylistRequest;
        message.channelId = object.channelId ?? '';
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.items = object.items?.map((e) => PlaylistItem.fromPartial(e)) || [];
        message.stylePresetId = object.stylePresetId ?? '';
        return message;
    },
};

const baseCreatePlaylistMetadata: object = { playlistId: '' };

export const CreatePlaylistMetadata: {
    encode(message: CreatePlaylistMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePlaylistMetadata;
    fromJSON(object: any): CreatePlaylistMetadata;
    toJSON(message: CreatePlaylistMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CreatePlaylistMetadata>, I>>(object: I): CreatePlaylistMetadata;
} = {
    encode(message: CreatePlaylistMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.playlistId !== '') {
            writer.uint32(10).string(message.playlistId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePlaylistMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreatePlaylistMetadata } as CreatePlaylistMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.playlistId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreatePlaylistMetadata {
        const message = { ...baseCreatePlaylistMetadata } as CreatePlaylistMetadata;
        message.playlistId =
            object.playlistId !== undefined && object.playlistId !== null
                ? String(object.playlistId)
                : '';
        return message;
    },

    toJSON(message: CreatePlaylistMetadata): unknown {
        const obj: any = {};
        message.playlistId !== undefined && (obj.playlistId = message.playlistId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreatePlaylistMetadata>, I>>(
        object: I,
    ): CreatePlaylistMetadata {
        const message = { ...baseCreatePlaylistMetadata } as CreatePlaylistMetadata;
        message.playlistId = object.playlistId ?? '';
        return message;
    },
};

const baseUpdatePlaylistRequest: object = {
    playlistId: '',
    title: '',
    description: '',
    stylePresetId: '',
};

export const UpdatePlaylistRequest: {
    encode(message: UpdatePlaylistRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePlaylistRequest;
    fromJSON(object: any): UpdatePlaylistRequest;
    toJSON(message: UpdatePlaylistRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdatePlaylistRequest>, I>>(object: I): UpdatePlaylistRequest;
} = {
    encode(message: UpdatePlaylistRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.playlistId !== '') {
            writer.uint32(10).string(message.playlistId);
        }
        if (message.fieldMask !== undefined) {
            FieldMask.encode(message.fieldMask, writer.uint32(18).fork()).ldelim();
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
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePlaylistRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdatePlaylistRequest } as UpdatePlaylistRequest;
        message.items = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.playlistId = reader.string();
                    break;
                case 2:
                    message.fieldMask = FieldMask.decode(reader, reader.uint32());
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdatePlaylistRequest {
        const message = { ...baseUpdatePlaylistRequest } as UpdatePlaylistRequest;
        message.playlistId =
            object.playlistId !== undefined && object.playlistId !== null
                ? String(object.playlistId)
                : '';
        message.fieldMask =
            object.fieldMask !== undefined && object.fieldMask !== null
                ? FieldMask.fromJSON(object.fieldMask)
                : undefined;
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
        return message;
    },

    toJSON(message: UpdatePlaylistRequest): unknown {
        const obj: any = {};
        message.playlistId !== undefined && (obj.playlistId = message.playlistId);
        message.fieldMask !== undefined &&
            (obj.fieldMask = message.fieldMask ? FieldMask.toJSON(message.fieldMask) : undefined);
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.items) {
            obj.items = message.items.map((e) => (e ? PlaylistItem.toJSON(e) : undefined));
        } else {
            obj.items = [];
        }
        message.stylePresetId !== undefined && (obj.stylePresetId = message.stylePresetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdatePlaylistRequest>, I>>(
        object: I,
    ): UpdatePlaylistRequest {
        const message = { ...baseUpdatePlaylistRequest } as UpdatePlaylistRequest;
        message.playlistId = object.playlistId ?? '';
        message.fieldMask =
            object.fieldMask !== undefined && object.fieldMask !== null
                ? FieldMask.fromPartial(object.fieldMask)
                : undefined;
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.items = object.items?.map((e) => PlaylistItem.fromPartial(e)) || [];
        message.stylePresetId = object.stylePresetId ?? '';
        return message;
    },
};

const baseUpdatePlaylistMetadata: object = { playlistId: '' };

export const UpdatePlaylistMetadata: {
    encode(message: UpdatePlaylistMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePlaylistMetadata;
    fromJSON(object: any): UpdatePlaylistMetadata;
    toJSON(message: UpdatePlaylistMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdatePlaylistMetadata>, I>>(object: I): UpdatePlaylistMetadata;
} = {
    encode(message: UpdatePlaylistMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.playlistId !== '') {
            writer.uint32(10).string(message.playlistId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePlaylistMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdatePlaylistMetadata } as UpdatePlaylistMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.playlistId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdatePlaylistMetadata {
        const message = { ...baseUpdatePlaylistMetadata } as UpdatePlaylistMetadata;
        message.playlistId =
            object.playlistId !== undefined && object.playlistId !== null
                ? String(object.playlistId)
                : '';
        return message;
    },

    toJSON(message: UpdatePlaylistMetadata): unknown {
        const obj: any = {};
        message.playlistId !== undefined && (obj.playlistId = message.playlistId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdatePlaylistMetadata>, I>>(
        object: I,
    ): UpdatePlaylistMetadata {
        const message = { ...baseUpdatePlaylistMetadata } as UpdatePlaylistMetadata;
        message.playlistId = object.playlistId ?? '';
        return message;
    },
};

const baseDeletePlaylistRequest: object = { playlistId: '' };

export const DeletePlaylistRequest: {
    encode(message: DeletePlaylistRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeletePlaylistRequest;
    fromJSON(object: any): DeletePlaylistRequest;
    toJSON(message: DeletePlaylistRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeletePlaylistRequest>, I>>(object: I): DeletePlaylistRequest;
} = {
    encode(message: DeletePlaylistRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.playlistId !== '') {
            writer.uint32(10).string(message.playlistId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeletePlaylistRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeletePlaylistRequest } as DeletePlaylistRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.playlistId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeletePlaylistRequest {
        const message = { ...baseDeletePlaylistRequest } as DeletePlaylistRequest;
        message.playlistId =
            object.playlistId !== undefined && object.playlistId !== null
                ? String(object.playlistId)
                : '';
        return message;
    },

    toJSON(message: DeletePlaylistRequest): unknown {
        const obj: any = {};
        message.playlistId !== undefined && (obj.playlistId = message.playlistId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeletePlaylistRequest>, I>>(
        object: I,
    ): DeletePlaylistRequest {
        const message = { ...baseDeletePlaylistRequest } as DeletePlaylistRequest;
        message.playlistId = object.playlistId ?? '';
        return message;
    },
};

const baseDeletePlaylistMetadata: object = { playlistId: '' };

export const DeletePlaylistMetadata: {
    encode(message: DeletePlaylistMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeletePlaylistMetadata;
    fromJSON(object: any): DeletePlaylistMetadata;
    toJSON(message: DeletePlaylistMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeletePlaylistMetadata>, I>>(object: I): DeletePlaylistMetadata;
} = {
    encode(message: DeletePlaylistMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.playlistId !== '') {
            writer.uint32(10).string(message.playlistId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeletePlaylistMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeletePlaylistMetadata } as DeletePlaylistMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.playlistId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeletePlaylistMetadata {
        const message = { ...baseDeletePlaylistMetadata } as DeletePlaylistMetadata;
        message.playlistId =
            object.playlistId !== undefined && object.playlistId !== null
                ? String(object.playlistId)
                : '';
        return message;
    },

    toJSON(message: DeletePlaylistMetadata): unknown {
        const obj: any = {};
        message.playlistId !== undefined && (obj.playlistId = message.playlistId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeletePlaylistMetadata>, I>>(
        object: I,
    ): DeletePlaylistMetadata {
        const message = { ...baseDeletePlaylistMetadata } as DeletePlaylistMetadata;
        message.playlistId = object.playlistId ?? '';
        return message;
    },
};

const baseBatchDeletePlaylistsRequest: object = { channelId: '', playlistIds: '' };

export const BatchDeletePlaylistsRequest: {
    encode(message: BatchDeletePlaylistsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchDeletePlaylistsRequest;
    fromJSON(object: any): BatchDeletePlaylistsRequest;
    toJSON(message: BatchDeletePlaylistsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<BatchDeletePlaylistsRequest>, I>>(object: I): BatchDeletePlaylistsRequest;
} = {
    encode(
        message: BatchDeletePlaylistsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.channelId !== '') {
            writer.uint32(10).string(message.channelId);
        }
        for (const v of message.playlistIds) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchDeletePlaylistsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchDeletePlaylistsRequest } as BatchDeletePlaylistsRequest;
        message.playlistIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.playlistIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchDeletePlaylistsRequest {
        const message = { ...baseBatchDeletePlaylistsRequest } as BatchDeletePlaylistsRequest;
        message.channelId =
            object.channelId !== undefined && object.channelId !== null
                ? String(object.channelId)
                : '';
        message.playlistIds = (object.playlistIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: BatchDeletePlaylistsRequest): unknown {
        const obj: any = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        if (message.playlistIds) {
            obj.playlistIds = message.playlistIds.map((e) => e);
        } else {
            obj.playlistIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchDeletePlaylistsRequest>, I>>(
        object: I,
    ): BatchDeletePlaylistsRequest {
        const message = { ...baseBatchDeletePlaylistsRequest } as BatchDeletePlaylistsRequest;
        message.channelId = object.channelId ?? '';
        message.playlistIds = object.playlistIds?.map((e) => e) || [];
        return message;
    },
};

const baseBatchDeletePlaylistsMetadata: object = { playlistIds: '' };

export const BatchDeletePlaylistsMetadata: {
    encode(message: BatchDeletePlaylistsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchDeletePlaylistsMetadata;
    fromJSON(object: any): BatchDeletePlaylistsMetadata;
    toJSON(message: BatchDeletePlaylistsMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<BatchDeletePlaylistsMetadata>, I>>(object: I): BatchDeletePlaylistsMetadata;
} = {
    encode(
        message: BatchDeletePlaylistsMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.playlistIds) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchDeletePlaylistsMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchDeletePlaylistsMetadata } as BatchDeletePlaylistsMetadata;
        message.playlistIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.playlistIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchDeletePlaylistsMetadata {
        const message = { ...baseBatchDeletePlaylistsMetadata } as BatchDeletePlaylistsMetadata;
        message.playlistIds = (object.playlistIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: BatchDeletePlaylistsMetadata): unknown {
        const obj: any = {};
        if (message.playlistIds) {
            obj.playlistIds = message.playlistIds.map((e) => e);
        } else {
            obj.playlistIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchDeletePlaylistsMetadata>, I>>(
        object: I,
    ): BatchDeletePlaylistsMetadata {
        const message = { ...baseBatchDeletePlaylistsMetadata } as BatchDeletePlaylistsMetadata;
        message.playlistIds = object.playlistIds?.map((e) => e) || [];
        return message;
    },
};

const baseGetPlaylistPlayerURLRequest: object = { playlistId: '' };

export const GetPlaylistPlayerURLRequest: {
    encode(message: GetPlaylistPlayerURLRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPlaylistPlayerURLRequest;
    fromJSON(object: any): GetPlaylistPlayerURLRequest;
    toJSON(message: GetPlaylistPlayerURLRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetPlaylistPlayerURLRequest>, I>>(object: I): GetPlaylistPlayerURLRequest;
} = {
    encode(
        message: GetPlaylistPlayerURLRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.playlistId !== '') {
            writer.uint32(10).string(message.playlistId);
        }
        if (message.params !== undefined) {
            PlaylistPlayerParams.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetPlaylistPlayerURLRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetPlaylistPlayerURLRequest } as GetPlaylistPlayerURLRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.playlistId = reader.string();
                    break;
                case 2:
                    message.params = PlaylistPlayerParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetPlaylistPlayerURLRequest {
        const message = { ...baseGetPlaylistPlayerURLRequest } as GetPlaylistPlayerURLRequest;
        message.playlistId =
            object.playlistId !== undefined && object.playlistId !== null
                ? String(object.playlistId)
                : '';
        message.params =
            object.params !== undefined && object.params !== null
                ? PlaylistPlayerParams.fromJSON(object.params)
                : undefined;
        return message;
    },

    toJSON(message: GetPlaylistPlayerURLRequest): unknown {
        const obj: any = {};
        message.playlistId !== undefined && (obj.playlistId = message.playlistId);
        message.params !== undefined &&
            (obj.params = message.params ? PlaylistPlayerParams.toJSON(message.params) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetPlaylistPlayerURLRequest>, I>>(
        object: I,
    ): GetPlaylistPlayerURLRequest {
        const message = { ...baseGetPlaylistPlayerURLRequest } as GetPlaylistPlayerURLRequest;
        message.playlistId = object.playlistId ?? '';
        message.params =
            object.params !== undefined && object.params !== null
                ? PlaylistPlayerParams.fromPartial(object.params)
                : undefined;
        return message;
    },
};

const basePlaylistPlayerParams: object = { mute: false, autoplay: false, hidden: false };

export const PlaylistPlayerParams: {
    encode(message: PlaylistPlayerParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlaylistPlayerParams;
    fromJSON(object: any): PlaylistPlayerParams;
    toJSON(message: PlaylistPlayerParams): unknown;
    fromPartial<I extends Exact<DeepPartial<PlaylistPlayerParams>, I>>(object: I): PlaylistPlayerParams;
} = {
    encode(message: PlaylistPlayerParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mute === true) {
            writer.uint32(8).bool(message.mute);
        }
        if (message.autoplay === true) {
            writer.uint32(16).bool(message.autoplay);
        }
        if (message.hidden === true) {
            writer.uint32(24).bool(message.hidden);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PlaylistPlayerParams {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePlaylistPlayerParams } as PlaylistPlayerParams;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mute = reader.bool();
                    break;
                case 2:
                    message.autoplay = reader.bool();
                    break;
                case 3:
                    message.hidden = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PlaylistPlayerParams {
        const message = { ...basePlaylistPlayerParams } as PlaylistPlayerParams;
        message.mute =
            object.mute !== undefined && object.mute !== null ? Boolean(object.mute) : false;
        message.autoplay =
            object.autoplay !== undefined && object.autoplay !== null
                ? Boolean(object.autoplay)
                : false;
        message.hidden =
            object.hidden !== undefined && object.hidden !== null ? Boolean(object.hidden) : false;
        return message;
    },

    toJSON(message: PlaylistPlayerParams): unknown {
        const obj: any = {};
        message.mute !== undefined && (obj.mute = message.mute);
        message.autoplay !== undefined && (obj.autoplay = message.autoplay);
        message.hidden !== undefined && (obj.hidden = message.hidden);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PlaylistPlayerParams>, I>>(
        object: I,
    ): PlaylistPlayerParams {
        const message = { ...basePlaylistPlayerParams } as PlaylistPlayerParams;
        message.mute = object.mute ?? false;
        message.autoplay = object.autoplay ?? false;
        message.hidden = object.hidden ?? false;
        return message;
    },
};

const baseGetPlaylistPlayerURLResponse: object = { playerUrl: '', html: '' };

export const GetPlaylistPlayerURLResponse: {
    encode(message: GetPlaylistPlayerURLResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPlaylistPlayerURLResponse;
    fromJSON(object: any): GetPlaylistPlayerURLResponse;
    toJSON(message: GetPlaylistPlayerURLResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<GetPlaylistPlayerURLResponse>, I>>(object: I): GetPlaylistPlayerURLResponse;
} = {
    encode(
        message: GetPlaylistPlayerURLResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.playerUrl !== '') {
            writer.uint32(10).string(message.playerUrl);
        }
        if (message.html !== '') {
            writer.uint32(18).string(message.html);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetPlaylistPlayerURLResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetPlaylistPlayerURLResponse } as GetPlaylistPlayerURLResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.playerUrl = reader.string();
                    break;
                case 2:
                    message.html = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetPlaylistPlayerURLResponse {
        const message = { ...baseGetPlaylistPlayerURLResponse } as GetPlaylistPlayerURLResponse;
        message.playerUrl =
            object.playerUrl !== undefined && object.playerUrl !== null
                ? String(object.playerUrl)
                : '';
        message.html = object.html !== undefined && object.html !== null ? String(object.html) : '';
        return message;
    },

    toJSON(message: GetPlaylistPlayerURLResponse): unknown {
        const obj: any = {};
        message.playerUrl !== undefined && (obj.playerUrl = message.playerUrl);
        message.html !== undefined && (obj.html = message.html);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetPlaylistPlayerURLResponse>, I>>(
        object: I,
    ): GetPlaylistPlayerURLResponse {
        const message = { ...baseGetPlaylistPlayerURLResponse } as GetPlaylistPlayerURLResponse;
        message.playerUrl = object.playerUrl ?? '';
        message.html = object.html ?? '';
        return message;
    },
};

/**
 * Playlist management service.
 * Provides methods for creating, retrieving, updating, and deleting playlists,
 * which are collections of videos or episodes that can be played sequentially.
 */
export const PlaylistServiceService = {
    /**
     * Retrieves detailed information about a specific playlist by its ID.
     * Returns all playlist metadata, items, and related information.
     */
    get: {
        path: '/yandex.cloud.video.v1.PlaylistService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetPlaylistRequest) =>
            Buffer.from(GetPlaylistRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetPlaylistRequest.decode(value),
        responseSerialize: (value: Playlist) => Buffer.from(Playlist.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Playlist.decode(value),
    },
    /**
     * Lists all playlists in a specific channel with pagination support.
     * Results can be filtered and sorted using the provided parameters.
     */
    list: {
        path: '/yandex.cloud.video.v1.PlaylistService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListPlaylistsRequest) =>
            Buffer.from(ListPlaylistsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListPlaylistsRequest.decode(value),
        responseSerialize: (value: ListPlaylistsResponse) =>
            Buffer.from(ListPlaylistsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListPlaylistsResponse.decode(value),
    },
    /**
     * Creates a new playlist in the specified channel with the provided items.
     * Playlists can contain videos, episodes, or a mix of both content types.
     */
    create: {
        path: '/yandex.cloud.video.v1.PlaylistService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreatePlaylistRequest) =>
            Buffer.from(CreatePlaylistRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreatePlaylistRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Updates an existing playlist's metadata and items.
     * Only fields specified in the field_mask will be updated.
     */
    update: {
        path: '/yandex.cloud.video.v1.PlaylistService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdatePlaylistRequest) =>
            Buffer.from(UpdatePlaylistRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdatePlaylistRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Deletes a specific playlist by its ID.
     * This removes the playlist but does not affect the videos or episodes it contains.
     */
    delete: {
        path: '/yandex.cloud.video.v1.PlaylistService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeletePlaylistRequest) =>
            Buffer.from(DeletePlaylistRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeletePlaylistRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Deletes multiple playlists in a specific channel in a single request.
     * This is more efficient than making multiple Delete requests when removing several playlists.
     */
    batchDelete: {
        path: '/yandex.cloud.video.v1.PlaylistService/BatchDelete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: BatchDeletePlaylistsRequest) =>
            Buffer.from(BatchDeletePlaylistsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => BatchDeletePlaylistsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Generates a player URL for watching the playlist.
     * The URL can include player parameters such as autoplay, mute, and visibility of interface controls.
     */
    getPlayerURL: {
        path: '/yandex.cloud.video.v1.PlaylistService/GetPlayerURL',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetPlaylistPlayerURLRequest) =>
            Buffer.from(GetPlaylistPlayerURLRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetPlaylistPlayerURLRequest.decode(value),
        responseSerialize: (value: GetPlaylistPlayerURLResponse) =>
            Buffer.from(GetPlaylistPlayerURLResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetPlaylistPlayerURLResponse.decode(value),
    },
} as const;

export interface PlaylistServiceServer extends UntypedServiceImplementation {
    /**
     * Retrieves detailed information about a specific playlist by its ID.
     * Returns all playlist metadata, items, and related information.
     */
    get: handleUnaryCall<GetPlaylistRequest, Playlist>;
    /**
     * Lists all playlists in a specific channel with pagination support.
     * Results can be filtered and sorted using the provided parameters.
     */
    list: handleUnaryCall<ListPlaylistsRequest, ListPlaylistsResponse>;
    /**
     * Creates a new playlist in the specified channel with the provided items.
     * Playlists can contain videos, episodes, or a mix of both content types.
     */
    create: handleUnaryCall<CreatePlaylistRequest, Operation>;
    /**
     * Updates an existing playlist's metadata and items.
     * Only fields specified in the field_mask will be updated.
     */
    update: handleUnaryCall<UpdatePlaylistRequest, Operation>;
    /**
     * Deletes a specific playlist by its ID.
     * This removes the playlist but does not affect the videos or episodes it contains.
     */
    delete: handleUnaryCall<DeletePlaylistRequest, Operation>;
    /**
     * Deletes multiple playlists in a specific channel in a single request.
     * This is more efficient than making multiple Delete requests when removing several playlists.
     */
    batchDelete: handleUnaryCall<BatchDeletePlaylistsRequest, Operation>;
    /**
     * Generates a player URL for watching the playlist.
     * The URL can include player parameters such as autoplay, mute, and visibility of interface controls.
     */
    getPlayerURL: handleUnaryCall<GetPlaylistPlayerURLRequest, GetPlaylistPlayerURLResponse>;
}

export interface PlaylistServiceClient extends Client {
    /**
     * Retrieves detailed information about a specific playlist by its ID.
     * Returns all playlist metadata, items, and related information.
     */
    get(
        request: GetPlaylistRequest,
        callback: (error: ServiceError | null, response: Playlist) => void,
    ): ClientUnaryCall;
    get(
        request: GetPlaylistRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Playlist) => void,
    ): ClientUnaryCall;
    get(
        request: GetPlaylistRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Playlist) => void,
    ): ClientUnaryCall;
    /**
     * Lists all playlists in a specific channel with pagination support.
     * Results can be filtered and sorted using the provided parameters.
     */
    list(
        request: ListPlaylistsRequest,
        callback: (error: ServiceError | null, response: ListPlaylistsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListPlaylistsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListPlaylistsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListPlaylistsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListPlaylistsResponse) => void,
    ): ClientUnaryCall;
    /**
     * Creates a new playlist in the specified channel with the provided items.
     * Playlists can contain videos, episodes, or a mix of both content types.
     */
    create(
        request: CreatePlaylistRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreatePlaylistRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreatePlaylistRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Updates an existing playlist's metadata and items.
     * Only fields specified in the field_mask will be updated.
     */
    update(
        request: UpdatePlaylistRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdatePlaylistRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdatePlaylistRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Deletes a specific playlist by its ID.
     * This removes the playlist but does not affect the videos or episodes it contains.
     */
    delete(
        request: DeletePlaylistRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeletePlaylistRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeletePlaylistRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Deletes multiple playlists in a specific channel in a single request.
     * This is more efficient than making multiple Delete requests when removing several playlists.
     */
    batchDelete(
        request: BatchDeletePlaylistsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    batchDelete(
        request: BatchDeletePlaylistsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    batchDelete(
        request: BatchDeletePlaylistsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Generates a player URL for watching the playlist.
     * The URL can include player parameters such as autoplay, mute, and visibility of interface controls.
     */
    getPlayerURL(
        request: GetPlaylistPlayerURLRequest,
        callback: (error: ServiceError | null, response: GetPlaylistPlayerURLResponse) => void,
    ): ClientUnaryCall;
    getPlayerURL(
        request: GetPlaylistPlayerURLRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetPlaylistPlayerURLResponse) => void,
    ): ClientUnaryCall;
    getPlayerURL(
        request: GetPlaylistPlayerURLRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetPlaylistPlayerURLResponse) => void,
    ): ClientUnaryCall;
}

export const PlaylistServiceClient = makeGenericClientConstructor(
    PlaylistServiceService,
    'yandex.cloud.video.v1.PlaylistService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): PlaylistServiceClient;
    service: typeof PlaylistServiceService;
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
