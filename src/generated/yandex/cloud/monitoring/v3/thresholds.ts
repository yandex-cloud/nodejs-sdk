/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.monitoring.v3';

export interface Thresholds {
    /** Thresholds */
    items: Thresholds_Item[];
    /** Thresholds visualisation mode */
    showMode: Thresholds_ShowMode;
}

export enum Thresholds_ShowMode {
    SHOW_MODE_UNSPECIFIED = 0,
    SHOW_MODE_CONSTANT_LINE = 1,
    UNRECOGNIZED = -1,
}

export function thresholds_ShowModeFromJSON(object: any): Thresholds_ShowMode {
    switch (object) {
        case 0:
        case 'SHOW_MODE_UNSPECIFIED':
            return Thresholds_ShowMode.SHOW_MODE_UNSPECIFIED;
        case 1:
        case 'SHOW_MODE_CONSTANT_LINE':
            return Thresholds_ShowMode.SHOW_MODE_CONSTANT_LINE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Thresholds_ShowMode.UNRECOGNIZED;
    }
}

export function thresholds_ShowModeToJSON(object: Thresholds_ShowMode): string {
    switch (object) {
        case Thresholds_ShowMode.SHOW_MODE_UNSPECIFIED:
            return 'SHOW_MODE_UNSPECIFIED';
        case Thresholds_ShowMode.SHOW_MODE_CONSTANT_LINE:
            return 'SHOW_MODE_CONSTANT_LINE';
        default:
            return 'UNKNOWN';
    }
}

export interface Thresholds_Item {
    /** Color in hexadecimal format */
    color: string;
    /** Threshold value */
    value?: number | undefined;
}

const baseThresholds: object = { showMode: 0 };

export const Thresholds = {
    encode(message: Thresholds, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.items) {
            Thresholds_Item.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.showMode !== 0) {
            writer.uint32(16).int32(message.showMode);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Thresholds {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseThresholds } as Thresholds;
        message.items = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.items.push(Thresholds_Item.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.showMode = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Thresholds {
        const message = { ...baseThresholds } as Thresholds;
        message.items = (object.items ?? []).map((e: any) => Thresholds_Item.fromJSON(e));
        message.showMode =
            object.showMode !== undefined && object.showMode !== null
                ? thresholds_ShowModeFromJSON(object.showMode)
                : 0;
        return message;
    },

    toJSON(message: Thresholds): unknown {
        const obj: any = {};
        if (message.items) {
            obj.items = message.items.map((e) => (e ? Thresholds_Item.toJSON(e) : undefined));
        } else {
            obj.items = [];
        }
        message.showMode !== undefined &&
            (obj.showMode = thresholds_ShowModeToJSON(message.showMode));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Thresholds>, I>>(object: I): Thresholds {
        const message = { ...baseThresholds } as Thresholds;
        message.items = object.items?.map((e) => Thresholds_Item.fromPartial(e)) || [];
        message.showMode = object.showMode ?? 0;
        return message;
    },
};

const baseThresholds_Item: object = { color: '' };

export const Thresholds_Item = {
    encode(message: Thresholds_Item, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.color !== '') {
            writer.uint32(10).string(message.color);
        }
        if (message.value !== undefined) {
            writer.uint32(17).double(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Thresholds_Item {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseThresholds_Item } as Thresholds_Item;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.color = reader.string();
                    break;
                case 2:
                    message.value = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Thresholds_Item {
        const message = { ...baseThresholds_Item } as Thresholds_Item;
        message.color =
            object.color !== undefined && object.color !== null ? String(object.color) : '';
        message.value =
            object.value !== undefined && object.value !== null ? Number(object.value) : undefined;
        return message;
    },

    toJSON(message: Thresholds_Item): unknown {
        const obj: any = {};
        message.color !== undefined && (obj.color = message.color);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Thresholds_Item>, I>>(object: I): Thresholds_Item {
        const message = { ...baseThresholds_Item } as Thresholds_Item;
        message.color = object.color ?? '';
        message.value = object.value ?? undefined;
        return message;
    },
};

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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
