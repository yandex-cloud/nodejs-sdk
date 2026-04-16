/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.video.v1';

/**
 * Entity representing a collection of visual styling settings for content presentation.
 * Style presets define the appearance of players, widgets, and other UI elements
 * to ensure consistent branding and user experience.
 */
export interface StylePreset {
    /** Unique identifier of the style preset. */
    id: string;
    /** Identifier of the channel where this style preset is created and managed. */
    channelId: string;
    /** Display name of the style preset shown in interfaces. */
    title: string;
    /** Background color for the player page in hexadecimal format (e.g., "#FFFFFF"). */
    backgroundColor: string;
    /** Primary text color for widgets in hexadecimal format. */
    widgetTextColorPrimary: string;
    /** Secondary text color for widgets in hexadecimal format. */
    widgetTextColorSecondary: string;
    /** Accent color for interactive elements in widgets in hexadecimal format. */
    widgetAccentColor: string;
    /** Vertical spacing between widget blocks in pixels. */
    widgetBlockGap: number;
    /** Color of separator lines between widget blocks in hexadecimal format. */
    widgetBlockSeparatorColor: string;
    /** Corner radius of the player container in pixels. */
    playerBorderRadius: number;
    /** Primary color for player controls in hexadecimal format. */
    playerColor: string;
    /** Background color for the currently selected item in playlists in hexadecimal format. */
    playlistSelectedItemBackgroundColor: string;
    /** Corner radius of playlist items in pixels. */
    playlistItemBorderRadius: number;
    /** Spacing between playlist items in pixels. */
    playlistItemGap: number;
    /** Position of the playlist widget relative to the player. */
    playlistLocation: StylePreset_WidgetLocation;
    /** List of widgets to display to the right of the player. */
    rightWidgets: Widget[];
    /** List of widgets to display below the player. */
    bottomWidgets: Widget[];
    /** Timestamp when the style preset was initially created in the system. */
    createdAt?: Date;
    /** Timestamp of the last modification to the style preset or its metadata. */
    updatedAt?: Date;
}

/** Widget position relative to the player. */
export enum StylePreset_WidgetLocation {
    /** WIDGET_LOCATION_UNSPECIFIED - The widget location is not specified. */
    WIDGET_LOCATION_UNSPECIFIED = 0,
    /** RIGHT - Position the widget to the right of the player. */
    RIGHT = 1,
    /** BOTTOM - Position the widget below the player. */
    BOTTOM = 2,
    UNRECOGNIZED = -1,
}

export function stylePreset_WidgetLocationFromJSON(object: any): StylePreset_WidgetLocation {
    switch (object) {
        case 0:
        case 'WIDGET_LOCATION_UNSPECIFIED':
            return StylePreset_WidgetLocation.WIDGET_LOCATION_UNSPECIFIED;
        case 1:
        case 'RIGHT':
            return StylePreset_WidgetLocation.RIGHT;
        case 2:
        case 'BOTTOM':
            return StylePreset_WidgetLocation.BOTTOM;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return StylePreset_WidgetLocation.UNRECOGNIZED;
    }
}

export function stylePreset_WidgetLocationToJSON(object: StylePreset_WidgetLocation): string {
    switch (object) {
        case StylePreset_WidgetLocation.WIDGET_LOCATION_UNSPECIFIED:
            return 'WIDGET_LOCATION_UNSPECIFIED';
        case StylePreset_WidgetLocation.RIGHT:
            return 'RIGHT';
        case StylePreset_WidgetLocation.BOTTOM:
            return 'BOTTOM';
        default:
            return 'UNKNOWN';
    }
}

/**
 * Represents a UI component that displays additional content or functionality.
 * Widgets can be positioned in different locations around the player.
 */
export interface Widget {
    /** Widget that displays video content summarization. */
    summarization?: Widget_Summarization | undefined;
    /** Widget that displays detailed video description. */
    description?: Widget_Description | undefined;
}

/**
 * Widget that presents an automatically generated summary of the video content.
 * This helps viewers quickly understand the main points without watching the entire video.
 */
export interface Widget_Summarization {}

/**
 * Widget that displays the full description text for the video.
 * This can include details about the content, creators, and other relevant information.
 */
export interface Widget_Description {}

const baseStylePreset: object = {
    id: '',
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

export const StylePreset: {
    encode(message: StylePreset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StylePreset;
    fromJSON(object: any): StylePreset;
    toJSON(message: StylePreset): unknown;
    fromPartial<I extends Exact<DeepPartial<StylePreset>, I>>(object: I): StylePreset;
} = {
    encode(message: StylePreset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.channelId !== '') {
            writer.uint32(18).string(message.channelId);
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
            writer.uint32(96).int64(message.playerBorderRadius);
        }
        if (message.playerColor !== '') {
            writer.uint32(106).string(message.playerColor);
        }
        if (message.playlistSelectedItemBackgroundColor !== '') {
            writer.uint32(114).string(message.playlistSelectedItemBackgroundColor);
        }
        if (message.playlistItemBorderRadius !== 0) {
            writer.uint32(120).int64(message.playlistItemBorderRadius);
        }
        if (message.playlistItemGap !== 0) {
            writer.uint32(128).int64(message.playlistItemGap);
        }
        if (message.playlistLocation !== 0) {
            writer.uint32(136).int32(message.playlistLocation);
        }
        for (const v of message.rightWidgets) {
            Widget.encode(v!, writer.uint32(162).fork()).ldelim();
        }
        for (const v of message.bottomWidgets) {
            Widget.encode(v!, writer.uint32(170).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(802).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(810).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StylePreset {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStylePreset } as StylePreset;
        message.rightWidgets = [];
        message.bottomWidgets = [];
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
                case 12:
                    message.playerBorderRadius = longToNumber(reader.int64() as Long);
                    break;
                case 13:
                    message.playerColor = reader.string();
                    break;
                case 14:
                    message.playlistSelectedItemBackgroundColor = reader.string();
                    break;
                case 15:
                    message.playlistItemBorderRadius = longToNumber(reader.int64() as Long);
                    break;
                case 16:
                    message.playlistItemGap = longToNumber(reader.int64() as Long);
                    break;
                case 17:
                    message.playlistLocation = reader.int32() as any;
                    break;
                case 20:
                    message.rightWidgets.push(Widget.decode(reader, reader.uint32()));
                    break;
                case 21:
                    message.bottomWidgets.push(Widget.decode(reader, reader.uint32()));
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

    fromJSON(object: any): StylePreset {
        const message = { ...baseStylePreset } as StylePreset;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
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

    toJSON(message: StylePreset): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
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
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StylePreset>, I>>(object: I): StylePreset {
        const message = { ...baseStylePreset } as StylePreset;
        message.id = object.id ?? '';
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
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        return message;
    },
};

const baseWidget: object = {};

export const Widget: {
    encode(message: Widget, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Widget;
    fromJSON(object: any): Widget;
    toJSON(message: Widget): unknown;
    fromPartial<I extends Exact<DeepPartial<Widget>, I>>(object: I): Widget;
} = {
    encode(message: Widget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.summarization !== undefined) {
            Widget_Summarization.encode(message.summarization, writer.uint32(10).fork()).ldelim();
        }
        if (message.description !== undefined) {
            Widget_Description.encode(message.description, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Widget {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWidget } as Widget;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.summarization = Widget_Summarization.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.description = Widget_Description.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Widget {
        const message = { ...baseWidget } as Widget;
        message.summarization =
            object.summarization !== undefined && object.summarization !== null
                ? Widget_Summarization.fromJSON(object.summarization)
                : undefined;
        message.description =
            object.description !== undefined && object.description !== null
                ? Widget_Description.fromJSON(object.description)
                : undefined;
        return message;
    },

    toJSON(message: Widget): unknown {
        const obj: any = {};
        message.summarization !== undefined &&
            (obj.summarization = message.summarization
                ? Widget_Summarization.toJSON(message.summarization)
                : undefined);
        message.description !== undefined &&
            (obj.description = message.description
                ? Widget_Description.toJSON(message.description)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Widget>, I>>(object: I): Widget {
        const message = { ...baseWidget } as Widget;
        message.summarization =
            object.summarization !== undefined && object.summarization !== null
                ? Widget_Summarization.fromPartial(object.summarization)
                : undefined;
        message.description =
            object.description !== undefined && object.description !== null
                ? Widget_Description.fromPartial(object.description)
                : undefined;
        return message;
    },
};

const baseWidget_Summarization: object = {};

export const Widget_Summarization: {
    encode(message: Widget_Summarization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Widget_Summarization;
    fromJSON(object: any): Widget_Summarization;
    toJSON(message: Widget_Summarization): unknown;
    fromPartial<I extends Exact<DeepPartial<Widget_Summarization>, I>>(object: I): Widget_Summarization;
} = {
    encode(_: Widget_Summarization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Widget_Summarization {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWidget_Summarization } as Widget_Summarization;
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

    fromJSON(_: any): Widget_Summarization {
        const message = { ...baseWidget_Summarization } as Widget_Summarization;
        return message;
    },

    toJSON(_: Widget_Summarization): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Widget_Summarization>, I>>(_: I): Widget_Summarization {
        const message = { ...baseWidget_Summarization } as Widget_Summarization;
        return message;
    },
};

const baseWidget_Description: object = {};

export const Widget_Description: {
    encode(message: Widget_Description, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Widget_Description;
    fromJSON(object: any): Widget_Description;
    toJSON(message: Widget_Description): unknown;
    fromPartial<I extends Exact<DeepPartial<Widget_Description>, I>>(object: I): Widget_Description;
} = {
    encode(_: Widget_Description, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Widget_Description {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWidget_Description } as Widget_Description;
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

    fromJSON(_: any): Widget_Description {
        const message = { ...baseWidget_Description } as Widget_Description;
        return message;
    },

    toJSON(_: Widget_Description): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Widget_Description>, I>>(_: I): Widget_Description {
        const message = { ...baseWidget_Description } as Widget_Description;
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
