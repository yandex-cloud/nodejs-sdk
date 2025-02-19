/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.monitoring.v3';

/** Title widget. */
export interface TitleWidget {
    /** Title text. */
    text: string;
    /** Title size. */
    size: TitleWidget_TitleSize;
}

/** Title size. */
export enum TitleWidget_TitleSize {
    TITLE_SIZE_UNSPECIFIED = 0,
    /** TITLE_SIZE_XS - Extra small size. */
    TITLE_SIZE_XS = 1,
    /** TITLE_SIZE_S - Small size. */
    TITLE_SIZE_S = 2,
    /** TITLE_SIZE_M - Middle size. */
    TITLE_SIZE_M = 3,
    /** TITLE_SIZE_L - Large size. */
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
