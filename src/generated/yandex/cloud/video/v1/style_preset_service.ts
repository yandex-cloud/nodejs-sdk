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
import {
    StylePreset_WidgetLocation,
    StylePreset,
    Widget,
    stylePreset_WidgetLocationFromJSON,
    stylePreset_WidgetLocationToJSON,
} from './style_preset';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../operation/operation';

export const protobufPackage = 'yandex.cloud.video.v1';

export interface GetStylePresetRequest {
    /** ID of the style preset to retrieve. */
    stylePresetId: string;
}

export interface ListStylePresetsRequest {
    /** ID of the channel containing the style presets to list. */
    channelId: string;
    /** The maximum number of style presets to return per page. */
    pageSize: number;
    /**
     * Page token for retrieving the next page of results.
     * This token is obtained from the next_page_token field in the previous ListStylePresetsResponse.
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
     * Filter expression to narrow down the list of returned style presets.
     * Expressions consist of terms connected by logical operators.
     * Values containing spaces or quotes must be enclosed in quotes (`'` or `"`)
     * with inner quotes being backslash-escaped.
     * Supported logical operators: ["AND", "OR"].
     * Supported comparison operators: ["=", "!=", ":"] where ":" enables substring matching.
     * Parentheses can be used to group logical expressions.
     * Example: `title:'dark' AND id='preset-1'`
     * Filterable fields: ["id", "title"].
     * Both snake_case and camelCase field names are supported.
     */
    filter: string;
}

export interface ListStylePresetsResponse {
    /**
     * List of style presets matching the request criteria.
     * May be empty if no style presets match the criteria or if the channel has no style presets.
     */
    stylePresets: StylePreset[];
    /**
     * Token for retrieving the next page of results.
     * Empty if there are no more results available.
     */
    nextPageToken: string;
}

export interface CreateStylePresetRequest {
    /** ID of the channel. */
    channelId: string;
    /** Style preset title. */
    title: string;
    /** Background color. */
    backgroundColor: string;
    /** Widget primary text color. */
    widgetTextColorPrimary: string;
    /** Widget secondary text color. */
    widgetTextColorSecondary: string;
    /** Widget accent color. */
    widgetAccentColor: string;
    /** Gap between widget blocks. */
    widgetBlockGap: number;
    /** Line color between widget blocks. */
    widgetBlockSeparatorColor: string;
    /** Player border radius. */
    playerBorderRadius: number;
    /** Player color. */
    playerColor: string;
    /** Background color of selected video in playlist. */
    playlistSelectedItemBackgroundColor: string;
    /** Playlist item border radius. */
    playlistItemBorderRadius: number;
    /** Gap between videos in playlist. */
    playlistItemGap: number;
    /** Playlist widget location. */
    playlistLocation: StylePreset_WidgetLocation;
    /** List of widgets to display to the right of the player. */
    rightWidgets: Widget[];
    /** List of widgets to display below the player. */
    bottomWidgets: Widget[];
}

export interface CreateStylePresetMetadata {
    /** ID of the style preset being created. */
    stylePresetId: string;
}

export interface UpdateStylePresetRequest {
    /** ID of the style preset. */
    stylePresetId: string;
    /**
     * Field mask specifying which fields of the style preset should be updated.
     * Only fields specified in this mask will be modified;
     * all other fields will retain their current values.
     * This allows for partial updates.
     */
    fieldMask?: FieldMask;
    /** Style preset title. */
    title: string;
    /** Background color. */
    backgroundColor: string;
    /** Widget primary text color. */
    widgetTextColorPrimary: string;
    /** Widget secondary text color. */
    widgetTextColorSecondary: string;
    /** Widget accent color. */
    widgetAccentColor: string;
    /** Gap between widget blocks. */
    widgetBlockGap: number;
    /** Line color between widget blocks. */
    widgetBlockSeparatorColor: string;
    /** Player border radius. */
    playerBorderRadius: number;
    /** Player color. */
    playerColor: string;
    /** Background color of selected video in playlist. */
    playlistSelectedItemBackgroundColor: string;
    /** Playlist item border radius. */
    playlistItemBorderRadius: number;
    /** Gap between videos in playlist. */
    playlistItemGap: number;
    /** Playlist widget location. */
    playlistLocation: StylePreset_WidgetLocation;
    /** List of widgets to display to the right of the player. */
    rightWidgets: Widget[];
    /** List of widgets to display below the player. */
    bottomWidgets: Widget[];
}

export interface UpdateStylePresetMetadata {
    /** ID of the style preset being updated. */
    stylePresetId: string;
}

export interface DeleteStylePresetRequest {
    /**
     * ID of the style preset to delete.
     * The style preset must not be in use by any videos, episodes, or playlists.
     */
    stylePresetId: string;
}

export interface DeleteStylePresetMetadata {
    /**
     * ID of the style preset being deleted.
     * This identifier can be used to track the style preset deletion operation.
     */
    stylePresetId: string;
}

const baseGetStylePresetRequest: object = { stylePresetId: '' };

export const GetStylePresetRequest: {
    encode(message: GetStylePresetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetStylePresetRequest;
    fromJSON(object: any): GetStylePresetRequest;
    toJSON(message: GetStylePresetRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetStylePresetRequest>, I>>(object: I): GetStylePresetRequest;
} = {
    encode(message: GetStylePresetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.stylePresetId !== '') {
            writer.uint32(10).string(message.stylePresetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetStylePresetRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetStylePresetRequest } as GetStylePresetRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stylePresetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetStylePresetRequest {
        const message = { ...baseGetStylePresetRequest } as GetStylePresetRequest;
        message.stylePresetId =
            object.stylePresetId !== undefined && object.stylePresetId !== null
                ? String(object.stylePresetId)
                : '';
        return message;
    },

    toJSON(message: GetStylePresetRequest): unknown {
        const obj: any = {};
        message.stylePresetId !== undefined && (obj.stylePresetId = message.stylePresetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetStylePresetRequest>, I>>(
        object: I,
    ): GetStylePresetRequest {
        const message = { ...baseGetStylePresetRequest } as GetStylePresetRequest;
        message.stylePresetId = object.stylePresetId ?? '';
        return message;
    },
};

const baseListStylePresetsRequest: object = {
    channelId: '',
    pageSize: 0,
    pageToken: '',
    orderBy: '',
    filter: '',
};

export const ListStylePresetsRequest: {
    encode(message: ListStylePresetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListStylePresetsRequest;
    fromJSON(object: any): ListStylePresetsRequest;
    toJSON(message: ListStylePresetsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListStylePresetsRequest>, I>>(object: I): ListStylePresetsRequest;
} = {
    encode(message: ListStylePresetsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListStylePresetsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListStylePresetsRequest } as ListStylePresetsRequest;
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

    fromJSON(object: any): ListStylePresetsRequest {
        const message = { ...baseListStylePresetsRequest } as ListStylePresetsRequest;
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

    toJSON(message: ListStylePresetsRequest): unknown {
        const obj: any = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListStylePresetsRequest>, I>>(
        object: I,
    ): ListStylePresetsRequest {
        const message = { ...baseListStylePresetsRequest } as ListStylePresetsRequest;
        message.channelId = object.channelId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.orderBy = object.orderBy ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListStylePresetsResponse: object = { nextPageToken: '' };

export const ListStylePresetsResponse: {
    encode(message: ListStylePresetsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListStylePresetsResponse;
    fromJSON(object: any): ListStylePresetsResponse;
    toJSON(message: ListStylePresetsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListStylePresetsResponse>, I>>(object: I): ListStylePresetsResponse;
} = {
    encode(
        message: ListStylePresetsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.stylePresets) {
            StylePreset.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(802).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListStylePresetsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListStylePresetsResponse } as ListStylePresetsResponse;
        message.stylePresets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stylePresets.push(StylePreset.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListStylePresetsResponse {
        const message = { ...baseListStylePresetsResponse } as ListStylePresetsResponse;
        message.stylePresets = (object.stylePresets ?? []).map((e: any) => StylePreset.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListStylePresetsResponse): unknown {
        const obj: any = {};
        if (message.stylePresets) {
            obj.stylePresets = message.stylePresets.map((e) =>
                e ? StylePreset.toJSON(e) : undefined,
            );
        } else {
            obj.stylePresets = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListStylePresetsResponse>, I>>(
        object: I,
    ): ListStylePresetsResponse {
        const message = { ...baseListStylePresetsResponse } as ListStylePresetsResponse;
        message.stylePresets = object.stylePresets?.map((e) => StylePreset.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateStylePresetRequest: object = {
    channelId: '',
    title: '',
    backgroundColor: '',
    widgetTextColorPrimary: '',
    widgetTextColorSecondary: '',
    widgetAccentColor: '',
    widgetBlockGap: 0,
    widgetBlockSeparatorColor: '',
    playerBorderRadius: 0,
    playerColor: '',
    playlistSelectedItemBackgroundColor: '',
    playlistItemBorderRadius: 0,
    playlistItemGap: 0,
    playlistLocation: 0,
};

export const CreateStylePresetRequest: {
    encode(message: CreateStylePresetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateStylePresetRequest;
    fromJSON(object: any): CreateStylePresetRequest;
    toJSON(message: CreateStylePresetRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateStylePresetRequest>, I>>(object: I): CreateStylePresetRequest;
} = {
    encode(
        message: CreateStylePresetRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.channelId !== '') {
            writer.uint32(10).string(message.channelId);
        }
        if (message.title !== '') {
            writer.uint32(18).string(message.title);
        }
        if (message.backgroundColor !== '') {
            writer.uint32(26).string(message.backgroundColor);
        }
        if (message.widgetTextColorPrimary !== '') {
            writer.uint32(34).string(message.widgetTextColorPrimary);
        }
        if (message.widgetTextColorSecondary !== '') {
            writer.uint32(42).string(message.widgetTextColorSecondary);
        }
        if (message.widgetAccentColor !== '') {
            writer.uint32(50).string(message.widgetAccentColor);
        }
        if (message.widgetBlockGap !== 0) {
            writer.uint32(56).int64(message.widgetBlockGap);
        }
        if (message.widgetBlockSeparatorColor !== '') {
            writer.uint32(66).string(message.widgetBlockSeparatorColor);
        }
        if (message.playerBorderRadius !== 0) {
            writer.uint32(104).int64(message.playerBorderRadius);
        }
        if (message.playerColor !== '') {
            writer.uint32(114).string(message.playerColor);
        }
        if (message.playlistSelectedItemBackgroundColor !== '') {
            writer.uint32(122).string(message.playlistSelectedItemBackgroundColor);
        }
        if (message.playlistItemBorderRadius !== 0) {
            writer.uint32(128).int64(message.playlistItemBorderRadius);
        }
        if (message.playlistItemGap !== 0) {
            writer.uint32(136).int64(message.playlistItemGap);
        }
        if (message.playlistLocation !== 0) {
            writer.uint32(144).int32(message.playlistLocation);
        }
        for (const v of message.rightWidgets) {
            Widget.encode(v!, writer.uint32(90).fork()).ldelim();
        }
        for (const v of message.bottomWidgets) {
            Widget.encode(v!, writer.uint32(98).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateStylePresetRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateStylePresetRequest } as CreateStylePresetRequest;
        message.rightWidgets = [];
        message.bottomWidgets = [];
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
                    message.backgroundColor = reader.string();
                    break;
                case 4:
                    message.widgetTextColorPrimary = reader.string();
                    break;
                case 5:
                    message.widgetTextColorSecondary = reader.string();
                    break;
                case 6:
                    message.widgetAccentColor = reader.string();
                    break;
                case 7:
                    message.widgetBlockGap = longToNumber(reader.int64() as Long);
                    break;
                case 8:
                    message.widgetBlockSeparatorColor = reader.string();
                    break;
                case 13:
                    message.playerBorderRadius = longToNumber(reader.int64() as Long);
                    break;
                case 14:
                    message.playerColor = reader.string();
                    break;
                case 15:
                    message.playlistSelectedItemBackgroundColor = reader.string();
                    break;
                case 16:
                    message.playlistItemBorderRadius = longToNumber(reader.int64() as Long);
                    break;
                case 17:
                    message.playlistItemGap = longToNumber(reader.int64() as Long);
                    break;
                case 18:
                    message.playlistLocation = reader.int32() as any;
                    break;
                case 11:
                    message.rightWidgets.push(Widget.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.bottomWidgets.push(Widget.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateStylePresetRequest {
        const message = { ...baseCreateStylePresetRequest } as CreateStylePresetRequest;
        message.channelId =
            object.channelId !== undefined && object.channelId !== null
                ? String(object.channelId)
                : '';
        message.title =
            object.title !== undefined && object.title !== null ? String(object.title) : '';
        message.backgroundColor =
            object.backgroundColor !== undefined && object.backgroundColor !== null
                ? String(object.backgroundColor)
                : '';
        message.widgetTextColorPrimary =
            object.widgetTextColorPrimary !== undefined && object.widgetTextColorPrimary !== null
                ? String(object.widgetTextColorPrimary)
                : '';
        message.widgetTextColorSecondary =
            object.widgetTextColorSecondary !== undefined &&
            object.widgetTextColorSecondary !== null
                ? String(object.widgetTextColorSecondary)
                : '';
        message.widgetAccentColor =
            object.widgetAccentColor !== undefined && object.widgetAccentColor !== null
                ? String(object.widgetAccentColor)
                : '';
        message.widgetBlockGap =
            object.widgetBlockGap !== undefined && object.widgetBlockGap !== null
                ? Number(object.widgetBlockGap)
                : 0;
        message.widgetBlockSeparatorColor =
            object.widgetBlockSeparatorColor !== undefined &&
            object.widgetBlockSeparatorColor !== null
                ? String(object.widgetBlockSeparatorColor)
                : '';
        message.playerBorderRadius =
            object.playerBorderRadius !== undefined && object.playerBorderRadius !== null
                ? Number(object.playerBorderRadius)
                : 0;
        message.playerColor =
            object.playerColor !== undefined && object.playerColor !== null
                ? String(object.playerColor)
                : '';
        message.playlistSelectedItemBackgroundColor =
            object.playlistSelectedItemBackgroundColor !== undefined &&
            object.playlistSelectedItemBackgroundColor !== null
                ? String(object.playlistSelectedItemBackgroundColor)
                : '';
        message.playlistItemBorderRadius =
            object.playlistItemBorderRadius !== undefined &&
            object.playlistItemBorderRadius !== null
                ? Number(object.playlistItemBorderRadius)
                : 0;
        message.playlistItemGap =
            object.playlistItemGap !== undefined && object.playlistItemGap !== null
                ? Number(object.playlistItemGap)
                : 0;
        message.playlistLocation =
            object.playlistLocation !== undefined && object.playlistLocation !== null
                ? stylePreset_WidgetLocationFromJSON(object.playlistLocation)
                : 0;
        message.rightWidgets = (object.rightWidgets ?? []).map((e: any) => Widget.fromJSON(e));
        message.bottomWidgets = (object.bottomWidgets ?? []).map((e: any) => Widget.fromJSON(e));
        return message;
    },

    toJSON(message: CreateStylePresetRequest): unknown {
        const obj: any = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.title !== undefined && (obj.title = message.title);
        message.backgroundColor !== undefined && (obj.backgroundColor = message.backgroundColor);
        message.widgetTextColorPrimary !== undefined &&
            (obj.widgetTextColorPrimary = message.widgetTextColorPrimary);
        message.widgetTextColorSecondary !== undefined &&
            (obj.widgetTextColorSecondary = message.widgetTextColorSecondary);
        message.widgetAccentColor !== undefined &&
            (obj.widgetAccentColor = message.widgetAccentColor);
        message.widgetBlockGap !== undefined &&
            (obj.widgetBlockGap = Math.round(message.widgetBlockGap));
        message.widgetBlockSeparatorColor !== undefined &&
            (obj.widgetBlockSeparatorColor = message.widgetBlockSeparatorColor);
        message.playerBorderRadius !== undefined &&
            (obj.playerBorderRadius = Math.round(message.playerBorderRadius));
        message.playerColor !== undefined && (obj.playerColor = message.playerColor);
        message.playlistSelectedItemBackgroundColor !== undefined &&
            (obj.playlistSelectedItemBackgroundColor = message.playlistSelectedItemBackgroundColor);
        message.playlistItemBorderRadius !== undefined &&
            (obj.playlistItemBorderRadius = Math.round(message.playlistItemBorderRadius));
        message.playlistItemGap !== undefined &&
            (obj.playlistItemGap = Math.round(message.playlistItemGap));
        message.playlistLocation !== undefined &&
            (obj.playlistLocation = stylePreset_WidgetLocationToJSON(message.playlistLocation));
        if (message.rightWidgets) {
            obj.rightWidgets = message.rightWidgets.map((e) => (e ? Widget.toJSON(e) : undefined));
        } else {
            obj.rightWidgets = [];
        }
        if (message.bottomWidgets) {
            obj.bottomWidgets = message.bottomWidgets.map((e) =>
                e ? Widget.toJSON(e) : undefined,
            );
        } else {
            obj.bottomWidgets = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateStylePresetRequest>, I>>(
        object: I,
    ): CreateStylePresetRequest {
        const message = { ...baseCreateStylePresetRequest } as CreateStylePresetRequest;
        message.channelId = object.channelId ?? '';
        message.title = object.title ?? '';
        message.backgroundColor = object.backgroundColor ?? '';
        message.widgetTextColorPrimary = object.widgetTextColorPrimary ?? '';
        message.widgetTextColorSecondary = object.widgetTextColorSecondary ?? '';
        message.widgetAccentColor = object.widgetAccentColor ?? '';
        message.widgetBlockGap = object.widgetBlockGap ?? 0;
        message.widgetBlockSeparatorColor = object.widgetBlockSeparatorColor ?? '';
        message.playerBorderRadius = object.playerBorderRadius ?? 0;
        message.playerColor = object.playerColor ?? '';
        message.playlistSelectedItemBackgroundColor =
            object.playlistSelectedItemBackgroundColor ?? '';
        message.playlistItemBorderRadius = object.playlistItemBorderRadius ?? 0;
        message.playlistItemGap = object.playlistItemGap ?? 0;
        message.playlistLocation = object.playlistLocation ?? 0;
        message.rightWidgets = object.rightWidgets?.map((e) => Widget.fromPartial(e)) || [];
        message.bottomWidgets = object.bottomWidgets?.map((e) => Widget.fromPartial(e)) || [];
        return message;
    },
};

const baseCreateStylePresetMetadata: object = { stylePresetId: '' };

export const CreateStylePresetMetadata: {
    encode(message: CreateStylePresetMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateStylePresetMetadata;
    fromJSON(object: any): CreateStylePresetMetadata;
    toJSON(message: CreateStylePresetMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateStylePresetMetadata>, I>>(object: I): CreateStylePresetMetadata;
} = {
    encode(
        message: CreateStylePresetMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.stylePresetId !== '') {
            writer.uint32(10).string(message.stylePresetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateStylePresetMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateStylePresetMetadata } as CreateStylePresetMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stylePresetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateStylePresetMetadata {
        const message = { ...baseCreateStylePresetMetadata } as CreateStylePresetMetadata;
        message.stylePresetId =
            object.stylePresetId !== undefined && object.stylePresetId !== null
                ? String(object.stylePresetId)
                : '';
        return message;
    },

    toJSON(message: CreateStylePresetMetadata): unknown {
        const obj: any = {};
        message.stylePresetId !== undefined && (obj.stylePresetId = message.stylePresetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateStylePresetMetadata>, I>>(
        object: I,
    ): CreateStylePresetMetadata {
        const message = { ...baseCreateStylePresetMetadata } as CreateStylePresetMetadata;
        message.stylePresetId = object.stylePresetId ?? '';
        return message;
    },
};

const baseUpdateStylePresetRequest: object = {
    stylePresetId: '',
    title: '',
    backgroundColor: '',
    widgetTextColorPrimary: '',
    widgetTextColorSecondary: '',
    widgetAccentColor: '',
    widgetBlockGap: 0,
    widgetBlockSeparatorColor: '',
    playerBorderRadius: 0,
    playerColor: '',
    playlistSelectedItemBackgroundColor: '',
    playlistItemBorderRadius: 0,
    playlistItemGap: 0,
    playlistLocation: 0,
};

export const UpdateStylePresetRequest: {
    encode(message: UpdateStylePresetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateStylePresetRequest;
    fromJSON(object: any): UpdateStylePresetRequest;
    toJSON(message: UpdateStylePresetRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateStylePresetRequest>, I>>(object: I): UpdateStylePresetRequest;
} = {
    encode(
        message: UpdateStylePresetRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.stylePresetId !== '') {
            writer.uint32(10).string(message.stylePresetId);
        }
        if (message.fieldMask !== undefined) {
            FieldMask.encode(message.fieldMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.title !== '') {
            writer.uint32(26).string(message.title);
        }
        if (message.backgroundColor !== '') {
            writer.uint32(34).string(message.backgroundColor);
        }
        if (message.widgetTextColorPrimary !== '') {
            writer.uint32(42).string(message.widgetTextColorPrimary);
        }
        if (message.widgetTextColorSecondary !== '') {
            writer.uint32(50).string(message.widgetTextColorSecondary);
        }
        if (message.widgetAccentColor !== '') {
            writer.uint32(58).string(message.widgetAccentColor);
        }
        if (message.widgetBlockGap !== 0) {
            writer.uint32(64).int64(message.widgetBlockGap);
        }
        if (message.widgetBlockSeparatorColor !== '') {
            writer.uint32(74).string(message.widgetBlockSeparatorColor);
        }
        if (message.playerBorderRadius !== 0) {
            writer.uint32(112).int64(message.playerBorderRadius);
        }
        if (message.playerColor !== '') {
            writer.uint32(122).string(message.playerColor);
        }
        if (message.playlistSelectedItemBackgroundColor !== '') {
            writer.uint32(130).string(message.playlistSelectedItemBackgroundColor);
        }
        if (message.playlistItemBorderRadius !== 0) {
            writer.uint32(136).int64(message.playlistItemBorderRadius);
        }
        if (message.playlistItemGap !== 0) {
            writer.uint32(144).int64(message.playlistItemGap);
        }
        if (message.playlistLocation !== 0) {
            writer.uint32(152).int32(message.playlistLocation);
        }
        for (const v of message.rightWidgets) {
            Widget.encode(v!, writer.uint32(98).fork()).ldelim();
        }
        for (const v of message.bottomWidgets) {
            Widget.encode(v!, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateStylePresetRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateStylePresetRequest } as UpdateStylePresetRequest;
        message.rightWidgets = [];
        message.bottomWidgets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stylePresetId = reader.string();
                    break;
                case 2:
                    message.fieldMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.title = reader.string();
                    break;
                case 4:
                    message.backgroundColor = reader.string();
                    break;
                case 5:
                    message.widgetTextColorPrimary = reader.string();
                    break;
                case 6:
                    message.widgetTextColorSecondary = reader.string();
                    break;
                case 7:
                    message.widgetAccentColor = reader.string();
                    break;
                case 8:
                    message.widgetBlockGap = longToNumber(reader.int64() as Long);
                    break;
                case 9:
                    message.widgetBlockSeparatorColor = reader.string();
                    break;
                case 14:
                    message.playerBorderRadius = longToNumber(reader.int64() as Long);
                    break;
                case 15:
                    message.playerColor = reader.string();
                    break;
                case 16:
                    message.playlistSelectedItemBackgroundColor = reader.string();
                    break;
                case 17:
                    message.playlistItemBorderRadius = longToNumber(reader.int64() as Long);
                    break;
                case 18:
                    message.playlistItemGap = longToNumber(reader.int64() as Long);
                    break;
                case 19:
                    message.playlistLocation = reader.int32() as any;
                    break;
                case 12:
                    message.rightWidgets.push(Widget.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.bottomWidgets.push(Widget.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateStylePresetRequest {
        const message = { ...baseUpdateStylePresetRequest } as UpdateStylePresetRequest;
        message.stylePresetId =
            object.stylePresetId !== undefined && object.stylePresetId !== null
                ? String(object.stylePresetId)
                : '';
        message.fieldMask =
            object.fieldMask !== undefined && object.fieldMask !== null
                ? FieldMask.fromJSON(object.fieldMask)
                : undefined;
        message.title =
            object.title !== undefined && object.title !== null ? String(object.title) : '';
        message.backgroundColor =
            object.backgroundColor !== undefined && object.backgroundColor !== null
                ? String(object.backgroundColor)
                : '';
        message.widgetTextColorPrimary =
            object.widgetTextColorPrimary !== undefined && object.widgetTextColorPrimary !== null
                ? String(object.widgetTextColorPrimary)
                : '';
        message.widgetTextColorSecondary =
            object.widgetTextColorSecondary !== undefined &&
            object.widgetTextColorSecondary !== null
                ? String(object.widgetTextColorSecondary)
                : '';
        message.widgetAccentColor =
            object.widgetAccentColor !== undefined && object.widgetAccentColor !== null
                ? String(object.widgetAccentColor)
                : '';
        message.widgetBlockGap =
            object.widgetBlockGap !== undefined && object.widgetBlockGap !== null
                ? Number(object.widgetBlockGap)
                : 0;
        message.widgetBlockSeparatorColor =
            object.widgetBlockSeparatorColor !== undefined &&
            object.widgetBlockSeparatorColor !== null
                ? String(object.widgetBlockSeparatorColor)
                : '';
        message.playerBorderRadius =
            object.playerBorderRadius !== undefined && object.playerBorderRadius !== null
                ? Number(object.playerBorderRadius)
                : 0;
        message.playerColor =
            object.playerColor !== undefined && object.playerColor !== null
                ? String(object.playerColor)
                : '';
        message.playlistSelectedItemBackgroundColor =
            object.playlistSelectedItemBackgroundColor !== undefined &&
            object.playlistSelectedItemBackgroundColor !== null
                ? String(object.playlistSelectedItemBackgroundColor)
                : '';
        message.playlistItemBorderRadius =
            object.playlistItemBorderRadius !== undefined &&
            object.playlistItemBorderRadius !== null
                ? Number(object.playlistItemBorderRadius)
                : 0;
        message.playlistItemGap =
            object.playlistItemGap !== undefined && object.playlistItemGap !== null
                ? Number(object.playlistItemGap)
                : 0;
        message.playlistLocation =
            object.playlistLocation !== undefined && object.playlistLocation !== null
                ? stylePreset_WidgetLocationFromJSON(object.playlistLocation)
                : 0;
        message.rightWidgets = (object.rightWidgets ?? []).map((e: any) => Widget.fromJSON(e));
        message.bottomWidgets = (object.bottomWidgets ?? []).map((e: any) => Widget.fromJSON(e));
        return message;
    },

    toJSON(message: UpdateStylePresetRequest): unknown {
        const obj: any = {};
        message.stylePresetId !== undefined && (obj.stylePresetId = message.stylePresetId);
        message.fieldMask !== undefined &&
            (obj.fieldMask = message.fieldMask ? FieldMask.toJSON(message.fieldMask) : undefined);
        message.title !== undefined && (obj.title = message.title);
        message.backgroundColor !== undefined && (obj.backgroundColor = message.backgroundColor);
        message.widgetTextColorPrimary !== undefined &&
            (obj.widgetTextColorPrimary = message.widgetTextColorPrimary);
        message.widgetTextColorSecondary !== undefined &&
            (obj.widgetTextColorSecondary = message.widgetTextColorSecondary);
        message.widgetAccentColor !== undefined &&
            (obj.widgetAccentColor = message.widgetAccentColor);
        message.widgetBlockGap !== undefined &&
            (obj.widgetBlockGap = Math.round(message.widgetBlockGap));
        message.widgetBlockSeparatorColor !== undefined &&
            (obj.widgetBlockSeparatorColor = message.widgetBlockSeparatorColor);
        message.playerBorderRadius !== undefined &&
            (obj.playerBorderRadius = Math.round(message.playerBorderRadius));
        message.playerColor !== undefined && (obj.playerColor = message.playerColor);
        message.playlistSelectedItemBackgroundColor !== undefined &&
            (obj.playlistSelectedItemBackgroundColor = message.playlistSelectedItemBackgroundColor);
        message.playlistItemBorderRadius !== undefined &&
            (obj.playlistItemBorderRadius = Math.round(message.playlistItemBorderRadius));
        message.playlistItemGap !== undefined &&
            (obj.playlistItemGap = Math.round(message.playlistItemGap));
        message.playlistLocation !== undefined &&
            (obj.playlistLocation = stylePreset_WidgetLocationToJSON(message.playlistLocation));
        if (message.rightWidgets) {
            obj.rightWidgets = message.rightWidgets.map((e) => (e ? Widget.toJSON(e) : undefined));
        } else {
            obj.rightWidgets = [];
        }
        if (message.bottomWidgets) {
            obj.bottomWidgets = message.bottomWidgets.map((e) =>
                e ? Widget.toJSON(e) : undefined,
            );
        } else {
            obj.bottomWidgets = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateStylePresetRequest>, I>>(
        object: I,
    ): UpdateStylePresetRequest {
        const message = { ...baseUpdateStylePresetRequest } as UpdateStylePresetRequest;
        message.stylePresetId = object.stylePresetId ?? '';
        message.fieldMask =
            object.fieldMask !== undefined && object.fieldMask !== null
                ? FieldMask.fromPartial(object.fieldMask)
                : undefined;
        message.title = object.title ?? '';
        message.backgroundColor = object.backgroundColor ?? '';
        message.widgetTextColorPrimary = object.widgetTextColorPrimary ?? '';
        message.widgetTextColorSecondary = object.widgetTextColorSecondary ?? '';
        message.widgetAccentColor = object.widgetAccentColor ?? '';
        message.widgetBlockGap = object.widgetBlockGap ?? 0;
        message.widgetBlockSeparatorColor = object.widgetBlockSeparatorColor ?? '';
        message.playerBorderRadius = object.playerBorderRadius ?? 0;
        message.playerColor = object.playerColor ?? '';
        message.playlistSelectedItemBackgroundColor =
            object.playlistSelectedItemBackgroundColor ?? '';
        message.playlistItemBorderRadius = object.playlistItemBorderRadius ?? 0;
        message.playlistItemGap = object.playlistItemGap ?? 0;
        message.playlistLocation = object.playlistLocation ?? 0;
        message.rightWidgets = object.rightWidgets?.map((e) => Widget.fromPartial(e)) || [];
        message.bottomWidgets = object.bottomWidgets?.map((e) => Widget.fromPartial(e)) || [];
        return message;
    },
};

const baseUpdateStylePresetMetadata: object = { stylePresetId: '' };

export const UpdateStylePresetMetadata: {
    encode(message: UpdateStylePresetMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateStylePresetMetadata;
    fromJSON(object: any): UpdateStylePresetMetadata;
    toJSON(message: UpdateStylePresetMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateStylePresetMetadata>, I>>(object: I): UpdateStylePresetMetadata;
} = {
    encode(
        message: UpdateStylePresetMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.stylePresetId !== '') {
            writer.uint32(10).string(message.stylePresetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateStylePresetMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateStylePresetMetadata } as UpdateStylePresetMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stylePresetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateStylePresetMetadata {
        const message = { ...baseUpdateStylePresetMetadata } as UpdateStylePresetMetadata;
        message.stylePresetId =
            object.stylePresetId !== undefined && object.stylePresetId !== null
                ? String(object.stylePresetId)
                : '';
        return message;
    },

    toJSON(message: UpdateStylePresetMetadata): unknown {
        const obj: any = {};
        message.stylePresetId !== undefined && (obj.stylePresetId = message.stylePresetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateStylePresetMetadata>, I>>(
        object: I,
    ): UpdateStylePresetMetadata {
        const message = { ...baseUpdateStylePresetMetadata } as UpdateStylePresetMetadata;
        message.stylePresetId = object.stylePresetId ?? '';
        return message;
    },
};

const baseDeleteStylePresetRequest: object = { stylePresetId: '' };

export const DeleteStylePresetRequest: {
    encode(message: DeleteStylePresetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteStylePresetRequest;
    fromJSON(object: any): DeleteStylePresetRequest;
    toJSON(message: DeleteStylePresetRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteStylePresetRequest>, I>>(object: I): DeleteStylePresetRequest;
} = {
    encode(
        message: DeleteStylePresetRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.stylePresetId !== '') {
            writer.uint32(10).string(message.stylePresetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteStylePresetRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteStylePresetRequest } as DeleteStylePresetRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stylePresetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteStylePresetRequest {
        const message = { ...baseDeleteStylePresetRequest } as DeleteStylePresetRequest;
        message.stylePresetId =
            object.stylePresetId !== undefined && object.stylePresetId !== null
                ? String(object.stylePresetId)
                : '';
        return message;
    },

    toJSON(message: DeleteStylePresetRequest): unknown {
        const obj: any = {};
        message.stylePresetId !== undefined && (obj.stylePresetId = message.stylePresetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteStylePresetRequest>, I>>(
        object: I,
    ): DeleteStylePresetRequest {
        const message = { ...baseDeleteStylePresetRequest } as DeleteStylePresetRequest;
        message.stylePresetId = object.stylePresetId ?? '';
        return message;
    },
};

const baseDeleteStylePresetMetadata: object = { stylePresetId: '' };

export const DeleteStylePresetMetadata: {
    encode(message: DeleteStylePresetMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteStylePresetMetadata;
    fromJSON(object: any): DeleteStylePresetMetadata;
    toJSON(message: DeleteStylePresetMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteStylePresetMetadata>, I>>(object: I): DeleteStylePresetMetadata;
} = {
    encode(
        message: DeleteStylePresetMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.stylePresetId !== '') {
            writer.uint32(10).string(message.stylePresetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteStylePresetMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteStylePresetMetadata } as DeleteStylePresetMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stylePresetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteStylePresetMetadata {
        const message = { ...baseDeleteStylePresetMetadata } as DeleteStylePresetMetadata;
        message.stylePresetId =
            object.stylePresetId !== undefined && object.stylePresetId !== null
                ? String(object.stylePresetId)
                : '';
        return message;
    },

    toJSON(message: DeleteStylePresetMetadata): unknown {
        const obj: any = {};
        message.stylePresetId !== undefined && (obj.stylePresetId = message.stylePresetId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteStylePresetMetadata>, I>>(
        object: I,
    ): DeleteStylePresetMetadata {
        const message = { ...baseDeleteStylePresetMetadata } as DeleteStylePresetMetadata;
        message.stylePresetId = object.stylePresetId ?? '';
        return message;
    },
};

/**
 * StylePreset management service.
 * Provides methods for creating, retrieving, updating, and deleting style presets,
 * which define the visual appearance and layout of video players and associated widgets.
 */
export const StylePresetServiceService = {
    /**
     * Retrieves detailed information about a specific style preset by its ID.
     * Returns all style preset properties, colors, layout settings, and widget configurations.
     */
    get: {
        path: '/yandex.cloud.video.v1.StylePresetService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetStylePresetRequest) =>
            Buffer.from(GetStylePresetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetStylePresetRequest.decode(value),
        responseSerialize: (value: StylePreset) => Buffer.from(StylePreset.encode(value).finish()),
        responseDeserialize: (value: Buffer) => StylePreset.decode(value),
    },
    /**
     * Lists all style presets in a specific channel with pagination support.
     * Results can be filtered and sorted using the provided parameters.
     */
    list: {
        path: '/yandex.cloud.video.v1.StylePresetService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListStylePresetsRequest) =>
            Buffer.from(ListStylePresetsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListStylePresetsRequest.decode(value),
        responseSerialize: (value: ListStylePresetsResponse) =>
            Buffer.from(ListStylePresetsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListStylePresetsResponse.decode(value),
    },
    /**
     * Creates a new style preset in the specified channel with the provided visual settings.
     * Style presets define the appearance of players, including colors, spacing, borders, and widgets.
     */
    create: {
        path: '/yandex.cloud.video.v1.StylePresetService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateStylePresetRequest) =>
            Buffer.from(CreateStylePresetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateStylePresetRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Updates an existing style preset's properties and visual settings.
     * Only fields specified in the field_mask will be updated.
     */
    update: {
        path: '/yandex.cloud.video.v1.StylePresetService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateStylePresetRequest) =>
            Buffer.from(UpdateStylePresetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateStylePresetRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Deletes a specific style preset by its ID.
     * This operation will fail if the style preset is currently in use by any videos, streams, or playlists.
     */
    delete: {
        path: '/yandex.cloud.video.v1.StylePresetService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteStylePresetRequest) =>
            Buffer.from(DeleteStylePresetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteStylePresetRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface StylePresetServiceServer extends UntypedServiceImplementation {
    /**
     * Retrieves detailed information about a specific style preset by its ID.
     * Returns all style preset properties, colors, layout settings, and widget configurations.
     */
    get: handleUnaryCall<GetStylePresetRequest, StylePreset>;
    /**
     * Lists all style presets in a specific channel with pagination support.
     * Results can be filtered and sorted using the provided parameters.
     */
    list: handleUnaryCall<ListStylePresetsRequest, ListStylePresetsResponse>;
    /**
     * Creates a new style preset in the specified channel with the provided visual settings.
     * Style presets define the appearance of players, including colors, spacing, borders, and widgets.
     */
    create: handleUnaryCall<CreateStylePresetRequest, Operation>;
    /**
     * Updates an existing style preset's properties and visual settings.
     * Only fields specified in the field_mask will be updated.
     */
    update: handleUnaryCall<UpdateStylePresetRequest, Operation>;
    /**
     * Deletes a specific style preset by its ID.
     * This operation will fail if the style preset is currently in use by any videos, streams, or playlists.
     */
    delete: handleUnaryCall<DeleteStylePresetRequest, Operation>;
}

export interface StylePresetServiceClient extends Client {
    /**
     * Retrieves detailed information about a specific style preset by its ID.
     * Returns all style preset properties, colors, layout settings, and widget configurations.
     */
    get(
        request: GetStylePresetRequest,
        callback: (error: ServiceError | null, response: StylePreset) => void,
    ): ClientUnaryCall;
    get(
        request: GetStylePresetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: StylePreset) => void,
    ): ClientUnaryCall;
    get(
        request: GetStylePresetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: StylePreset) => void,
    ): ClientUnaryCall;
    /**
     * Lists all style presets in a specific channel with pagination support.
     * Results can be filtered and sorted using the provided parameters.
     */
    list(
        request: ListStylePresetsRequest,
        callback: (error: ServiceError | null, response: ListStylePresetsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListStylePresetsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListStylePresetsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListStylePresetsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListStylePresetsResponse) => void,
    ): ClientUnaryCall;
    /**
     * Creates a new style preset in the specified channel with the provided visual settings.
     * Style presets define the appearance of players, including colors, spacing, borders, and widgets.
     */
    create(
        request: CreateStylePresetRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateStylePresetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateStylePresetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Updates an existing style preset's properties and visual settings.
     * Only fields specified in the field_mask will be updated.
     */
    update(
        request: UpdateStylePresetRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateStylePresetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateStylePresetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Deletes a specific style preset by its ID.
     * This operation will fail if the style preset is currently in use by any videos, streams, or playlists.
     */
    delete(
        request: DeleteStylePresetRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteStylePresetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteStylePresetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const StylePresetServiceClient = makeGenericClientConstructor(
    StylePresetServiceService,
    'yandex.cloud.video.v1.StylePresetService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): StylePresetServiceClient;
    service: typeof StylePresetServiceService;
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
