/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
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
import { Playlist, PlaylistItem } from '../../../../yandex/cloud/video/v1/playlist';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.video.v1';

export interface GetPlaylistRequest {
    $type: 'yandex.cloud.video.v1.GetPlaylistRequest';
    /** ID of the playlist. */
    playlistId: string;
}

export interface ListPlaylistsRequest {
    $type: 'yandex.cloud.video.v1.ListPlaylistsRequest';
    /** ID of the channel. */
    channelId: string;
    /** The maximum number of the results per page to return. */
    pageSize: number;
    /** Page token for getting the next page of the result. */
    pageToken: string;
    /**
     * By which column the listing should be ordered and in which direction,
     * format is "createdAt desc". "id asc" if omitted.
     * Possible fields: ["id", "title", "createdAt", "updatedAt"]
     * Both snake_case and camelCase are supported for fields.
     */
    orderBy: string;
    /**
     * Filter expression that filters resources listed in the response.
     * Expressions are composed of terms connected by logic operators.
     * Example: "key1=value AND key2=value"
     * Supported operators: ["AND"].
     * Supported fields: ["title"]
     * Both snake_case and camelCase are supported for fields.
     */
    filter: string;
}

export interface ListPlaylistsResponse {
    $type: 'yandex.cloud.video.v1.ListPlaylistsResponse';
    /** List of playlists for specific channel. */
    playlists: Playlist[];
    /** Token for getting the next page. */
    nextPageToken: string;
}

export interface CreatePlaylistRequest {
    $type: 'yandex.cloud.video.v1.CreatePlaylistRequest';
    /** ID of the channel. */
    channelId: string;
    /** Playlist title. */
    title: string;
    /** Playlist description. */
    description: string;
    /** List of playlist items. */
    items: PlaylistItem[];
}

export interface CreatePlaylistMetadata {
    $type: 'yandex.cloud.video.v1.CreatePlaylistMetadata';
    /** ID of the playlist. */
    playlistId: string;
}

export interface UpdatePlaylistRequest {
    $type: 'yandex.cloud.video.v1.UpdatePlaylistRequest';
    /** ID of the playlist. */
    playlistId: string;
    /** Field mask that specifies which fields of the playlist are going to be updated. */
    fieldMask?: FieldMask;
    /** Playlist title. */
    title: string;
    /** Playlist description. */
    description: string;
    /** List of playlist items. */
    items: PlaylistItem[];
}

export interface UpdatePlaylistMetadata {
    $type: 'yandex.cloud.video.v1.UpdatePlaylistMetadata';
    /** ID of the playlist. */
    playlistId: string;
}

export interface DeletePlaylistRequest {
    $type: 'yandex.cloud.video.v1.DeletePlaylistRequest';
    /** ID of the playlist. */
    playlistId: string;
}

export interface DeletePlaylistMetadata {
    $type: 'yandex.cloud.video.v1.DeletePlaylistMetadata';
    /** ID of the playlist. */
    playlistId: string;
}

export interface BatchDeletePlaylistsRequest {
    $type: 'yandex.cloud.video.v1.BatchDeletePlaylistsRequest';
    /** ID of the channel. */
    channelId: string;
    /** List of playlist IDs. */
    playlistIds: string[];
}

export interface BatchDeletePlaylistsMetadata {
    $type: 'yandex.cloud.video.v1.BatchDeletePlaylistsMetadata';
    /** List of playlist IDs. */
    playlistIds: string[];
}

export interface GetPlaylistPlayerURLRequest {
    $type: 'yandex.cloud.video.v1.GetPlaylistPlayerURLRequest';
    /** ID of the playlist. */
    playlistId: string;
    params?: PlaylistPlayerParams;
}

export interface PlaylistPlayerParams {
    $type: 'yandex.cloud.video.v1.PlaylistPlayerParams';
    /** If true, a player will be muted by default. */
    mute: boolean;
    /** If true, playback will start automatically. */
    autoplay: boolean;
    /** If true, a player interface will be hidden by default. */
    hidden: boolean;
}

export interface GetPlaylistPlayerURLResponse {
    $type: 'yandex.cloud.video.v1.GetPlaylistPlayerURLResponse';
    /** Direct link to the playlist. */
    playerUrl: string;
    /** HTML embed code in Iframe format. */
    html: string;
}

const baseGetPlaylistRequest: object = {
    $type: 'yandex.cloud.video.v1.GetPlaylistRequest',
    playlistId: '',
};

export const GetPlaylistRequest = {
    $type: 'yandex.cloud.video.v1.GetPlaylistRequest' as const,

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

messageTypeRegistry.set(GetPlaylistRequest.$type, GetPlaylistRequest);

const baseListPlaylistsRequest: object = {
    $type: 'yandex.cloud.video.v1.ListPlaylistsRequest',
    channelId: '',
    pageSize: 0,
    pageToken: '',
    orderBy: '',
    filter: '',
};

export const ListPlaylistsRequest = {
    $type: 'yandex.cloud.video.v1.ListPlaylistsRequest' as const,

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

messageTypeRegistry.set(ListPlaylistsRequest.$type, ListPlaylistsRequest);

const baseListPlaylistsResponse: object = {
    $type: 'yandex.cloud.video.v1.ListPlaylistsResponse',
    nextPageToken: '',
};

export const ListPlaylistsResponse = {
    $type: 'yandex.cloud.video.v1.ListPlaylistsResponse' as const,

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

messageTypeRegistry.set(ListPlaylistsResponse.$type, ListPlaylistsResponse);

const baseCreatePlaylistRequest: object = {
    $type: 'yandex.cloud.video.v1.CreatePlaylistRequest',
    channelId: '',
    title: '',
    description: '',
};

export const CreatePlaylistRequest = {
    $type: 'yandex.cloud.video.v1.CreatePlaylistRequest' as const,

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
        return message;
    },
};

messageTypeRegistry.set(CreatePlaylistRequest.$type, CreatePlaylistRequest);

const baseCreatePlaylistMetadata: object = {
    $type: 'yandex.cloud.video.v1.CreatePlaylistMetadata',
    playlistId: '',
};

export const CreatePlaylistMetadata = {
    $type: 'yandex.cloud.video.v1.CreatePlaylistMetadata' as const,

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

messageTypeRegistry.set(CreatePlaylistMetadata.$type, CreatePlaylistMetadata);

const baseUpdatePlaylistRequest: object = {
    $type: 'yandex.cloud.video.v1.UpdatePlaylistRequest',
    playlistId: '',
    title: '',
    description: '',
};

export const UpdatePlaylistRequest = {
    $type: 'yandex.cloud.video.v1.UpdatePlaylistRequest' as const,

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
        return message;
    },
};

messageTypeRegistry.set(UpdatePlaylistRequest.$type, UpdatePlaylistRequest);

const baseUpdatePlaylistMetadata: object = {
    $type: 'yandex.cloud.video.v1.UpdatePlaylistMetadata',
    playlistId: '',
};

export const UpdatePlaylistMetadata = {
    $type: 'yandex.cloud.video.v1.UpdatePlaylistMetadata' as const,

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

messageTypeRegistry.set(UpdatePlaylistMetadata.$type, UpdatePlaylistMetadata);

const baseDeletePlaylistRequest: object = {
    $type: 'yandex.cloud.video.v1.DeletePlaylistRequest',
    playlistId: '',
};

export const DeletePlaylistRequest = {
    $type: 'yandex.cloud.video.v1.DeletePlaylistRequest' as const,

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

messageTypeRegistry.set(DeletePlaylistRequest.$type, DeletePlaylistRequest);

const baseDeletePlaylistMetadata: object = {
    $type: 'yandex.cloud.video.v1.DeletePlaylistMetadata',
    playlistId: '',
};

export const DeletePlaylistMetadata = {
    $type: 'yandex.cloud.video.v1.DeletePlaylistMetadata' as const,

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

messageTypeRegistry.set(DeletePlaylistMetadata.$type, DeletePlaylistMetadata);

const baseBatchDeletePlaylistsRequest: object = {
    $type: 'yandex.cloud.video.v1.BatchDeletePlaylistsRequest',
    channelId: '',
    playlistIds: '',
};

export const BatchDeletePlaylistsRequest = {
    $type: 'yandex.cloud.video.v1.BatchDeletePlaylistsRequest' as const,

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

messageTypeRegistry.set(BatchDeletePlaylistsRequest.$type, BatchDeletePlaylistsRequest);

const baseBatchDeletePlaylistsMetadata: object = {
    $type: 'yandex.cloud.video.v1.BatchDeletePlaylistsMetadata',
    playlistIds: '',
};

export const BatchDeletePlaylistsMetadata = {
    $type: 'yandex.cloud.video.v1.BatchDeletePlaylistsMetadata' as const,

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

messageTypeRegistry.set(BatchDeletePlaylistsMetadata.$type, BatchDeletePlaylistsMetadata);

const baseGetPlaylistPlayerURLRequest: object = {
    $type: 'yandex.cloud.video.v1.GetPlaylistPlayerURLRequest',
    playlistId: '',
};

export const GetPlaylistPlayerURLRequest = {
    $type: 'yandex.cloud.video.v1.GetPlaylistPlayerURLRequest' as const,

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

messageTypeRegistry.set(GetPlaylistPlayerURLRequest.$type, GetPlaylistPlayerURLRequest);

const basePlaylistPlayerParams: object = {
    $type: 'yandex.cloud.video.v1.PlaylistPlayerParams',
    mute: false,
    autoplay: false,
    hidden: false,
};

export const PlaylistPlayerParams = {
    $type: 'yandex.cloud.video.v1.PlaylistPlayerParams' as const,

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

messageTypeRegistry.set(PlaylistPlayerParams.$type, PlaylistPlayerParams);

const baseGetPlaylistPlayerURLResponse: object = {
    $type: 'yandex.cloud.video.v1.GetPlaylistPlayerURLResponse',
    playerUrl: '',
    html: '',
};

export const GetPlaylistPlayerURLResponse = {
    $type: 'yandex.cloud.video.v1.GetPlaylistPlayerURLResponse' as const,

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

messageTypeRegistry.set(GetPlaylistPlayerURLResponse.$type, GetPlaylistPlayerURLResponse);

/** Playlist management service. */
export const PlaylistServiceService = {
    /** Returns the specific playlist. */
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
    /** List playlists for a channel. */
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
    /** Create playlist. */
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
    /** Update playlist. */
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
    /** Delete playlist. */
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
    /** Batch delete playlist. */
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
    /** Returns player's url. */
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
    /** Returns the specific playlist. */
    get: handleUnaryCall<GetPlaylistRequest, Playlist>;
    /** List playlists for a channel. */
    list: handleUnaryCall<ListPlaylistsRequest, ListPlaylistsResponse>;
    /** Create playlist. */
    create: handleUnaryCall<CreatePlaylistRequest, Operation>;
    /** Update playlist. */
    update: handleUnaryCall<UpdatePlaylistRequest, Operation>;
    /** Delete playlist. */
    delete: handleUnaryCall<DeletePlaylistRequest, Operation>;
    /** Batch delete playlist. */
    batchDelete: handleUnaryCall<BatchDeletePlaylistsRequest, Operation>;
    /** Returns player's url. */
    getPlayerURL: handleUnaryCall<GetPlaylistPlayerURLRequest, GetPlaylistPlayerURLResponse>;
}

export interface PlaylistServiceClient extends Client {
    /** Returns the specific playlist. */
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
    /** List playlists for a channel. */
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
    /** Create playlist. */
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
    /** Update playlist. */
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
    /** Delete playlist. */
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
    /** Batch delete playlist. */
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
    /** Returns player's url. */
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
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
              Exclude<keyof I, KeysOfUnion<P> | '$type'>,
              never
          >;

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
