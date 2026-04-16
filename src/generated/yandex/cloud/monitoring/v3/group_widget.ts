/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { LinkItem } from './link_item';
import { TextWidget } from './text_widget';
import { TitleWidget } from './title_widget';
import { ChartWidget } from './chart_widget';
import { MultiSourceChartWidget } from './multi_source_chart_widget';

export const protobufPackage = 'yandex.cloud.monitoring.v3';

export interface GroupWidget {
    id: string;
    title: string;
    collapsed: boolean;
    widgets: GroupWidget_ChildWidget[];
    repeatSettings?: GroupWidget_RepeatSettings;
}

export interface GroupWidget_RepeatSettings {
    repeatBy: string[];
}

/** Layout item for widget item positioning. */
export interface GroupWidget_LayoutPosition {
    /** Required. X-axis top-left corner coordinate. */
    x: number;
    /** Required. Y-axis top-left corner coordinate. */
    y: number;
    /** Required. Weight. */
    w: number;
    /** Required. Height. */
    h: number;
}

export interface GroupWidget_ChildWidget {
    id: string;
    links: LinkItem[];
    /** Widget layout position. */
    position?: GroupWidget_LayoutPosition;
    text?: TextWidget | undefined;
    title?: TitleWidget | undefined;
    chart?: ChartWidget | undefined;
    multiSourceChart?: MultiSourceChartWidget | undefined;
}

const baseGroupWidget: object = { id: '', title: '', collapsed: false };

export const GroupWidget: {
    encode(message: GroupWidget, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GroupWidget;
    fromJSON(object: any): GroupWidget;
    toJSON(message: GroupWidget): unknown;
    fromPartial<I extends Exact<DeepPartial<GroupWidget>, I>>(object: I): GroupWidget;
} = {
    encode(message: GroupWidget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.title !== '') {
            writer.uint32(18).string(message.title);
        }
        if (message.collapsed === true) {
            writer.uint32(24).bool(message.collapsed);
        }
        for (const v of message.widgets) {
            GroupWidget_ChildWidget.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        if (message.repeatSettings !== undefined) {
            GroupWidget_RepeatSettings.encode(
                message.repeatSettings,
                writer.uint32(42).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GroupWidget {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGroupWidget } as GroupWidget;
        message.widgets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.collapsed = reader.bool();
                    break;
                case 4:
                    message.widgets.push(GroupWidget_ChildWidget.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.repeatSettings = GroupWidget_RepeatSettings.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GroupWidget {
        const message = { ...baseGroupWidget } as GroupWidget;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.title =
            object.title !== undefined && object.title !== null ? String(object.title) : '';
        message.collapsed =
            object.collapsed !== undefined && object.collapsed !== null
                ? Boolean(object.collapsed)
                : false;
        message.widgets = (object.widgets ?? []).map((e: any) =>
            GroupWidget_ChildWidget.fromJSON(e),
        );
        message.repeatSettings =
            object.repeatSettings !== undefined && object.repeatSettings !== null
                ? GroupWidget_RepeatSettings.fromJSON(object.repeatSettings)
                : undefined;
        return message;
    },

    toJSON(message: GroupWidget): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.title !== undefined && (obj.title = message.title);
        message.collapsed !== undefined && (obj.collapsed = message.collapsed);
        if (message.widgets) {
            obj.widgets = message.widgets.map((e) =>
                e ? GroupWidget_ChildWidget.toJSON(e) : undefined,
            );
        } else {
            obj.widgets = [];
        }
        message.repeatSettings !== undefined &&
            (obj.repeatSettings = message.repeatSettings
                ? GroupWidget_RepeatSettings.toJSON(message.repeatSettings)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GroupWidget>, I>>(object: I): GroupWidget {
        const message = { ...baseGroupWidget } as GroupWidget;
        message.id = object.id ?? '';
        message.title = object.title ?? '';
        message.collapsed = object.collapsed ?? false;
        message.widgets = object.widgets?.map((e) => GroupWidget_ChildWidget.fromPartial(e)) || [];
        message.repeatSettings =
            object.repeatSettings !== undefined && object.repeatSettings !== null
                ? GroupWidget_RepeatSettings.fromPartial(object.repeatSettings)
                : undefined;
        return message;
    },
};

const baseGroupWidget_RepeatSettings: object = { repeatBy: '' };

export const GroupWidget_RepeatSettings: {
    encode(message: GroupWidget_RepeatSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GroupWidget_RepeatSettings;
    fromJSON(object: any): GroupWidget_RepeatSettings;
    toJSON(message: GroupWidget_RepeatSettings): unknown;
    fromPartial<I extends Exact<DeepPartial<GroupWidget_RepeatSettings>, I>>(object: I): GroupWidget_RepeatSettings;
} = {
    encode(
        message: GroupWidget_RepeatSettings,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.repeatBy) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GroupWidget_RepeatSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGroupWidget_RepeatSettings } as GroupWidget_RepeatSettings;
        message.repeatBy = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.repeatBy.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GroupWidget_RepeatSettings {
        const message = { ...baseGroupWidget_RepeatSettings } as GroupWidget_RepeatSettings;
        message.repeatBy = (object.repeatBy ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: GroupWidget_RepeatSettings): unknown {
        const obj: any = {};
        if (message.repeatBy) {
            obj.repeatBy = message.repeatBy.map((e) => e);
        } else {
            obj.repeatBy = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GroupWidget_RepeatSettings>, I>>(
        object: I,
    ): GroupWidget_RepeatSettings {
        const message = { ...baseGroupWidget_RepeatSettings } as GroupWidget_RepeatSettings;
        message.repeatBy = object.repeatBy?.map((e) => e) || [];
        return message;
    },
};

const baseGroupWidget_LayoutPosition: object = { x: 0, y: 0, w: 0, h: 0 };

export const GroupWidget_LayoutPosition: {
    encode(message: GroupWidget_LayoutPosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GroupWidget_LayoutPosition;
    fromJSON(object: any): GroupWidget_LayoutPosition;
    toJSON(message: GroupWidget_LayoutPosition): unknown;
    fromPartial<I extends Exact<DeepPartial<GroupWidget_LayoutPosition>, I>>(object: I): GroupWidget_LayoutPosition;
} = {
    encode(
        message: GroupWidget_LayoutPosition,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.x !== 0) {
            writer.uint32(8).int64(message.x);
        }
        if (message.y !== 0) {
            writer.uint32(16).int64(message.y);
        }
        if (message.w !== 0) {
            writer.uint32(24).int64(message.w);
        }
        if (message.h !== 0) {
            writer.uint32(32).int64(message.h);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GroupWidget_LayoutPosition {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGroupWidget_LayoutPosition } as GroupWidget_LayoutPosition;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.x = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.y = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.w = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.h = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GroupWidget_LayoutPosition {
        const message = { ...baseGroupWidget_LayoutPosition } as GroupWidget_LayoutPosition;
        message.x = object.x !== undefined && object.x !== null ? Number(object.x) : 0;
        message.y = object.y !== undefined && object.y !== null ? Number(object.y) : 0;
        message.w = object.w !== undefined && object.w !== null ? Number(object.w) : 0;
        message.h = object.h !== undefined && object.h !== null ? Number(object.h) : 0;
        return message;
    },

    toJSON(message: GroupWidget_LayoutPosition): unknown {
        const obj: any = {};
        message.x !== undefined && (obj.x = Math.round(message.x));
        message.y !== undefined && (obj.y = Math.round(message.y));
        message.w !== undefined && (obj.w = Math.round(message.w));
        message.h !== undefined && (obj.h = Math.round(message.h));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GroupWidget_LayoutPosition>, I>>(
        object: I,
    ): GroupWidget_LayoutPosition {
        const message = { ...baseGroupWidget_LayoutPosition } as GroupWidget_LayoutPosition;
        message.x = object.x ?? 0;
        message.y = object.y ?? 0;
        message.w = object.w ?? 0;
        message.h = object.h ?? 0;
        return message;
    },
};

const baseGroupWidget_ChildWidget: object = { id: '' };

export const GroupWidget_ChildWidget: {
    encode(message: GroupWidget_ChildWidget, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GroupWidget_ChildWidget;
    fromJSON(object: any): GroupWidget_ChildWidget;
    toJSON(message: GroupWidget_ChildWidget): unknown;
    fromPartial<I extends Exact<DeepPartial<GroupWidget_ChildWidget>, I>>(object: I): GroupWidget_ChildWidget;
} = {
    encode(message: GroupWidget_ChildWidget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        for (const v of message.links) {
            LinkItem.encode(v!, writer.uint32(154).fork()).ldelim();
        }
        if (message.position !== undefined) {
            GroupWidget_LayoutPosition.encode(message.position, writer.uint32(162).fork()).ldelim();
        }
        if (message.text !== undefined) {
            TextWidget.encode(message.text, writer.uint32(18).fork()).ldelim();
        }
        if (message.title !== undefined) {
            TitleWidget.encode(message.title, writer.uint32(26).fork()).ldelim();
        }
        if (message.chart !== undefined) {
            ChartWidget.encode(message.chart, writer.uint32(34).fork()).ldelim();
        }
        if (message.multiSourceChart !== undefined) {
            MultiSourceChartWidget.encode(
                message.multiSourceChart,
                writer.uint32(74).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GroupWidget_ChildWidget {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGroupWidget_ChildWidget } as GroupWidget_ChildWidget;
        message.links = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 19:
                    message.links.push(LinkItem.decode(reader, reader.uint32()));
                    break;
                case 20:
                    message.position = GroupWidget_LayoutPosition.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.text = TextWidget.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.title = TitleWidget.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.chart = ChartWidget.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.multiSourceChart = MultiSourceChartWidget.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GroupWidget_ChildWidget {
        const message = { ...baseGroupWidget_ChildWidget } as GroupWidget_ChildWidget;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.links = (object.links ?? []).map((e: any) => LinkItem.fromJSON(e));
        message.position =
            object.position !== undefined && object.position !== null
                ? GroupWidget_LayoutPosition.fromJSON(object.position)
                : undefined;
        message.text =
            object.text !== undefined && object.text !== null
                ? TextWidget.fromJSON(object.text)
                : undefined;
        message.title =
            object.title !== undefined && object.title !== null
                ? TitleWidget.fromJSON(object.title)
                : undefined;
        message.chart =
            object.chart !== undefined && object.chart !== null
                ? ChartWidget.fromJSON(object.chart)
                : undefined;
        message.multiSourceChart =
            object.multiSourceChart !== undefined && object.multiSourceChart !== null
                ? MultiSourceChartWidget.fromJSON(object.multiSourceChart)
                : undefined;
        return message;
    },

    toJSON(message: GroupWidget_ChildWidget): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        if (message.links) {
            obj.links = message.links.map((e) => (e ? LinkItem.toJSON(e) : undefined));
        } else {
            obj.links = [];
        }
        message.position !== undefined &&
            (obj.position = message.position
                ? GroupWidget_LayoutPosition.toJSON(message.position)
                : undefined);
        message.text !== undefined &&
            (obj.text = message.text ? TextWidget.toJSON(message.text) : undefined);
        message.title !== undefined &&
            (obj.title = message.title ? TitleWidget.toJSON(message.title) : undefined);
        message.chart !== undefined &&
            (obj.chart = message.chart ? ChartWidget.toJSON(message.chart) : undefined);
        message.multiSourceChart !== undefined &&
            (obj.multiSourceChart = message.multiSourceChart
                ? MultiSourceChartWidget.toJSON(message.multiSourceChart)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GroupWidget_ChildWidget>, I>>(
        object: I,
    ): GroupWidget_ChildWidget {
        const message = { ...baseGroupWidget_ChildWidget } as GroupWidget_ChildWidget;
        message.id = object.id ?? '';
        message.links = object.links?.map((e) => LinkItem.fromPartial(e)) || [];
        message.position =
            object.position !== undefined && object.position !== null
                ? GroupWidget_LayoutPosition.fromPartial(object.position)
                : undefined;
        message.text =
            object.text !== undefined && object.text !== null
                ? TextWidget.fromPartial(object.text)
                : undefined;
        message.title =
            object.title !== undefined && object.title !== null
                ? TitleWidget.fromPartial(object.title)
                : undefined;
        message.chart =
            object.chart !== undefined && object.chart !== null
                ? ChartWidget.fromPartial(object.chart)
                : undefined;
        message.multiSourceChart =
            object.multiSourceChart !== undefined && object.multiSourceChart !== null
                ? MultiSourceChartWidget.fromPartial(object.multiSourceChart)
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
