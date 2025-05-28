/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Kpi } from '../../../../../../yandex/cloud/loadtesting/api/v1/report/kpi';

export const protobufPackage = 'yandex.cloud.loadtesting.api.v1.regression';

/** Regression dashboard widget. */
export interface Widget {
    /** Widget position. */
    position?: Widget_LayoutPosition;
    /** Chart widget. */
    chart?: ChartWidget | undefined;
    /** Text widget. */
    text?: TextWidget | undefined;
    /** Title widget. */
    title?: TitleWidget | undefined;
}

/** Widget position. */
export interface Widget_LayoutPosition {
    /** X. */
    x: number;
    /** Y. */
    y: number;
    /** Width. */
    width: number;
    /** Height. */
    height: number;
}

/** Regression chart. */
export interface ChartWidget {
    /** ID of the chart. */
    id: string;
    /** Name of the chart. */
    name: string;
    /** Description of the chart. */
    description: string;
    /** Test filter selector to show KPI values for. */
    filterStr: string;
    /** Test case to show KPI values for. */
    testCase: string;
    /** KPIs to show. */
    kpis: Kpi[];
}

/** Text widget. */
export interface TextWidget {
    /** Text string. */
    text: string;
}

/** Title widget. */
export interface TitleWidget {
    /** Title string. */
    text: string;
    /** Title size. */
    size: TitleWidget_TitleSize;
}

/** Title size. */
export enum TitleWidget_TitleSize {
    /** TITLE_SIZE_UNSPECIFIED - Unspecified. */
    TITLE_SIZE_UNSPECIFIED = 0,
    /** TITLE_SIZE_XS - Extra small. */
    TITLE_SIZE_XS = 1,
    /** TITLE_SIZE_S - Small. */
    TITLE_SIZE_S = 2,
    /** TITLE_SIZE_M - Medium. */
    TITLE_SIZE_M = 3,
    /** TITLE_SIZE_L - Large. */
    TITLE_SIZE_L = 4,
    UNRECOGNIZED = -1,
}

export function titleWidget_TitleSizeFromJSON(object: any): TitleWidget_TitleSize {
    switch (object) {
        case 0:
        case 'TITLE_SIZE_UNSPECIFIED':
            return TitleWidget_TitleSize.TITLE_SIZE_UNSPECIFIED;
        case 1:
        case 'TITLE_SIZE_XS':
            return TitleWidget_TitleSize.TITLE_SIZE_XS;
        case 2:
        case 'TITLE_SIZE_S':
            return TitleWidget_TitleSize.TITLE_SIZE_S;
        case 3:
        case 'TITLE_SIZE_M':
            return TitleWidget_TitleSize.TITLE_SIZE_M;
        case 4:
        case 'TITLE_SIZE_L':
            return TitleWidget_TitleSize.TITLE_SIZE_L;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return TitleWidget_TitleSize.UNRECOGNIZED;
    }
}

export function titleWidget_TitleSizeToJSON(object: TitleWidget_TitleSize): string {
    switch (object) {
        case TitleWidget_TitleSize.TITLE_SIZE_UNSPECIFIED:
            return 'TITLE_SIZE_UNSPECIFIED';
        case TitleWidget_TitleSize.TITLE_SIZE_XS:
            return 'TITLE_SIZE_XS';
        case TitleWidget_TitleSize.TITLE_SIZE_S:
            return 'TITLE_SIZE_S';
        case TitleWidget_TitleSize.TITLE_SIZE_M:
            return 'TITLE_SIZE_M';
        case TitleWidget_TitleSize.TITLE_SIZE_L:
            return 'TITLE_SIZE_L';
        default:
            return 'UNKNOWN';
    }
}

const baseWidget: object = {};

export const Widget = {
    encode(message: Widget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.position !== undefined) {
            Widget_LayoutPosition.encode(message.position, writer.uint32(10).fork()).ldelim();
        }
        if (message.chart !== undefined) {
            ChartWidget.encode(message.chart, writer.uint32(18).fork()).ldelim();
        }
        if (message.text !== undefined) {
            TextWidget.encode(message.text, writer.uint32(26).fork()).ldelim();
        }
        if (message.title !== undefined) {
            TitleWidget.encode(message.title, writer.uint32(34).fork()).ldelim();
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
                    message.chart = ChartWidget.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.text = TextWidget.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.title = TitleWidget.decode(reader, reader.uint32());
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
        message.chart =
            object.chart !== undefined && object.chart !== null
                ? ChartWidget.fromJSON(object.chart)
                : undefined;
        message.text =
            object.text !== undefined && object.text !== null
                ? TextWidget.fromJSON(object.text)
                : undefined;
        message.title =
            object.title !== undefined && object.title !== null
                ? TitleWidget.fromJSON(object.title)
                : undefined;
        return message;
    },

    toJSON(message: Widget): unknown {
        const obj: any = {};
        message.position !== undefined &&
            (obj.position = message.position
                ? Widget_LayoutPosition.toJSON(message.position)
                : undefined);
        message.chart !== undefined &&
            (obj.chart = message.chart ? ChartWidget.toJSON(message.chart) : undefined);
        message.text !== undefined &&
            (obj.text = message.text ? TextWidget.toJSON(message.text) : undefined);
        message.title !== undefined &&
            (obj.title = message.title ? TitleWidget.toJSON(message.title) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Widget>, I>>(object: I): Widget {
        const message = { ...baseWidget } as Widget;
        message.position =
            object.position !== undefined && object.position !== null
                ? Widget_LayoutPosition.fromPartial(object.position)
                : undefined;
        message.chart =
            object.chart !== undefined && object.chart !== null
                ? ChartWidget.fromPartial(object.chart)
                : undefined;
        message.text =
            object.text !== undefined && object.text !== null
                ? TextWidget.fromPartial(object.text)
                : undefined;
        message.title =
            object.title !== undefined && object.title !== null
                ? TitleWidget.fromPartial(object.title)
                : undefined;
        return message;
    },
};

const baseWidget_LayoutPosition: object = { x: 0, y: 0, width: 0, height: 0 };

export const Widget_LayoutPosition = {
    encode(message: Widget_LayoutPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.x !== 0) {
            writer.uint32(8).int64(message.x);
        }
        if (message.y !== 0) {
            writer.uint32(16).int64(message.y);
        }
        if (message.width !== 0) {
            writer.uint32(24).int64(message.width);
        }
        if (message.height !== 0) {
            writer.uint32(32).int64(message.height);
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
                    message.width = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.height = longToNumber(reader.int64() as Long);
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
        message.width =
            object.width !== undefined && object.width !== null ? Number(object.width) : 0;
        message.height =
            object.height !== undefined && object.height !== null ? Number(object.height) : 0;
        return message;
    },

    toJSON(message: Widget_LayoutPosition): unknown {
        const obj: any = {};
        message.x !== undefined && (obj.x = Math.round(message.x));
        message.y !== undefined && (obj.y = Math.round(message.y));
        message.width !== undefined && (obj.width = Math.round(message.width));
        message.height !== undefined && (obj.height = Math.round(message.height));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Widget_LayoutPosition>, I>>(
        object: I,
    ): Widget_LayoutPosition {
        const message = { ...baseWidget_LayoutPosition } as Widget_LayoutPosition;
        message.x = object.x ?? 0;
        message.y = object.y ?? 0;
        message.width = object.width ?? 0;
        message.height = object.height ?? 0;
        return message;
    },
};

const baseChartWidget: object = { id: '', name: '', description: '', filterStr: '', testCase: '' };

export const ChartWidget = {
    encode(message: ChartWidget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.filterStr !== '') {
            writer.uint32(34).string(message.filterStr);
        }
        if (message.testCase !== '') {
            writer.uint32(42).string(message.testCase);
        }
        for (const v of message.kpis) {
            Kpi.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ChartWidget {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseChartWidget } as ChartWidget;
        message.kpis = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.filterStr = reader.string();
                    break;
                case 5:
                    message.testCase = reader.string();
                    break;
                case 6:
                    message.kpis.push(Kpi.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ChartWidget {
        const message = { ...baseChartWidget } as ChartWidget;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.filterStr =
            object.filterStr !== undefined && object.filterStr !== null
                ? String(object.filterStr)
                : '';
        message.testCase =
            object.testCase !== undefined && object.testCase !== null
                ? String(object.testCase)
                : '';
        message.kpis = (object.kpis ?? []).map((e: any) => Kpi.fromJSON(e));
        return message;
    },

    toJSON(message: ChartWidget): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.filterStr !== undefined && (obj.filterStr = message.filterStr);
        message.testCase !== undefined && (obj.testCase = message.testCase);
        if (message.kpis) {
            obj.kpis = message.kpis.map((e) => (e ? Kpi.toJSON(e) : undefined));
        } else {
            obj.kpis = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ChartWidget>, I>>(object: I): ChartWidget {
        const message = { ...baseChartWidget } as ChartWidget;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.filterStr = object.filterStr ?? '';
        message.testCase = object.testCase ?? '';
        message.kpis = object.kpis?.map((e) => Kpi.fromPartial(e)) || [];
        return message;
    },
};

const baseTextWidget: object = { text: '' };

export const TextWidget = {
    encode(message: TextWidget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.text !== '') {
            writer.uint32(10).string(message.text);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TextWidget {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTextWidget } as TextWidget;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TextWidget {
        const message = { ...baseTextWidget } as TextWidget;
        message.text = object.text !== undefined && object.text !== null ? String(object.text) : '';
        return message;
    },

    toJSON(message: TextWidget): unknown {
        const obj: any = {};
        message.text !== undefined && (obj.text = message.text);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TextWidget>, I>>(object: I): TextWidget {
        const message = { ...baseTextWidget } as TextWidget;
        message.text = object.text ?? '';
        return message;
    },
};

const baseTitleWidget: object = { text: '', size: 0 };

export const TitleWidget = {
    encode(message: TitleWidget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.text !== '') {
            writer.uint32(10).string(message.text);
        }
        if (message.size !== 0) {
            writer.uint32(16).int32(message.size);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TitleWidget {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTitleWidget } as TitleWidget;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                case 2:
                    message.size = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TitleWidget {
        const message = { ...baseTitleWidget } as TitleWidget;
        message.text = object.text !== undefined && object.text !== null ? String(object.text) : '';
        message.size =
            object.size !== undefined && object.size !== null
                ? titleWidget_TitleSizeFromJSON(object.size)
                : 0;
        return message;
    },

    toJSON(message: TitleWidget): unknown {
        const obj: any = {};
        message.text !== undefined && (obj.text = message.text);
        message.size !== undefined && (obj.size = titleWidget_TitleSizeToJSON(message.size));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TitleWidget>, I>>(object: I): TitleWidget {
        const message = { ...baseTitleWidget } as TitleWidget;
        message.text = object.text ?? '';
        message.size = object.size ?? 0;
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
