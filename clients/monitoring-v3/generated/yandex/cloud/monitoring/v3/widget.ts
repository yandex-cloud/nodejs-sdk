/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { TextWidget } from '../../../../yandex/cloud/monitoring/v3/text_widget';
import { TitleWidget } from '../../../../yandex/cloud/monitoring/v3/title_widget';
import { ChartWidget } from '../../../../yandex/cloud/monitoring/v3/chart_widget';
import { MultiSourceChartWidget } from '../../../../yandex/cloud/monitoring/v3/multi_source_chart_widget';

export const protobufPackage = 'yandex.cloud.monitoring.v3';

/** Widget. */
export interface Widget {
    $type: 'yandex.cloud.monitoring.v3.Widget';
    /** Required. Widget layout position. */
    position?: Widget_LayoutPosition;
    /** Text widget. */
    text?: TextWidget | undefined;
    /** Title widget. */
    title?: TitleWidget | undefined;
    /** Chart widget. */
    chart?: ChartWidget | undefined;
    /** Multi-source chart widget. */
    multiSourceChart?: MultiSourceChartWidget | undefined;
}

/** Layout item for widget item positioning. */
export interface Widget_LayoutPosition {
    $type: 'yandex.cloud.monitoring.v3.Widget.LayoutPosition';
    /** Required. X-axis top-left corner coordinate. */
    x: number;
    /** Required. Y-axis top-left corner coordinate. */
    y: number;
    /** Required. Weight. */
    w: number;
    /** Required. Height. */
    h: number;
}

const baseWidget: object = { $type: 'yandex.cloud.monitoring.v3.Widget' };

export const Widget = {
    $type: 'yandex.cloud.monitoring.v3.Widget' as const,

    encode(message: Widget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.position !== undefined) {
            Widget_LayoutPosition.encode(message.position, writer.uint32(10).fork()).ldelim();
        }
        if (message.text !== undefined) {
            TextWidget.encode(message.text, writer.uint32(18).fork()).ldelim();
        }
        if (message.title !== undefined) {
            TitleWidget.encode(message.title, writer.uint32(26).fork()).ldelim();
        }
        if (message.chart !== undefined) {
            ChartWidget.encode(message.chart, writer.uint32(42).fork()).ldelim();
        }
        if (message.multiSourceChart !== undefined) {
            MultiSourceChartWidget.encode(
                message.multiSourceChart,
                writer.uint32(82).fork(),
            ).ldelim();
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
                    message.position = Widget_LayoutPosition.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.text = TextWidget.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.title = TitleWidget.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.chart = ChartWidget.decode(reader, reader.uint32());
                    break;
                case 10:
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

    fromJSON(object: any): Widget {
        const message = { ...baseWidget } as Widget;
        message.position =
            object.position !== undefined && object.position !== null
                ? Widget_LayoutPosition.fromJSON(object.position)
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

    toJSON(message: Widget): unknown {
        const obj: any = {};
        message.position !== undefined &&
            (obj.position = message.position
                ? Widget_LayoutPosition.toJSON(message.position)
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

    fromPartial<I extends Exact<DeepPartial<Widget>, I>>(object: I): Widget {
        const message = { ...baseWidget } as Widget;
        message.position =
            object.position !== undefined && object.position !== null
                ? Widget_LayoutPosition.fromPartial(object.position)
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

messageTypeRegistry.set(Widget.$type, Widget);

const baseWidget_LayoutPosition: object = {
    $type: 'yandex.cloud.monitoring.v3.Widget.LayoutPosition',
    x: 0,
    y: 0,
    w: 0,
    h: 0,
};

export const Widget_LayoutPosition = {
    $type: 'yandex.cloud.monitoring.v3.Widget.LayoutPosition' as const,

    encode(message: Widget_LayoutPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): Widget_LayoutPosition {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWidget_LayoutPosition } as Widget_LayoutPosition;
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

    fromJSON(object: any): Widget_LayoutPosition {
        const message = { ...baseWidget_LayoutPosition } as Widget_LayoutPosition;
        message.x = object.x !== undefined && object.x !== null ? Number(object.x) : 0;
        message.y = object.y !== undefined && object.y !== null ? Number(object.y) : 0;
        message.w = object.w !== undefined && object.w !== null ? Number(object.w) : 0;
        message.h = object.h !== undefined && object.h !== null ? Number(object.h) : 0;
        return message;
    },

    toJSON(message: Widget_LayoutPosition): unknown {
        const obj: any = {};
        message.x !== undefined && (obj.x = Math.round(message.x));
        message.y !== undefined && (obj.y = Math.round(message.y));
        message.w !== undefined && (obj.w = Math.round(message.w));
        message.h !== undefined && (obj.h = Math.round(message.h));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Widget_LayoutPosition>, I>>(
        object: I,
    ): Widget_LayoutPosition {
        const message = { ...baseWidget_LayoutPosition } as Widget_LayoutPosition;
        message.x = object.x ?? 0;
        message.y = object.y ?? 0;
        message.w = object.w ?? 0;
        message.h = object.h ?? 0;
        return message;
    },
};

messageTypeRegistry.set(Widget_LayoutPosition.$type, Widget_LayoutPosition);

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
