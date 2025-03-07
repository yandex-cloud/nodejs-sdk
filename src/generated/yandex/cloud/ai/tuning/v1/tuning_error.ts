/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.ai.tuning.v1';

export interface TuningError {
    tuningTaskId: string;
    message: string;
    type: TuningError_Type;
}

export enum TuningError_Type {
    TYPE_UNSPECIFIED = 0,
    PUBLIC = 1,
    INTERNAL = 2,
    UNRECOGNIZED = -1,
}

export function tuningError_TypeFromJSON(object: any): TuningError_Type {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return TuningError_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'PUBLIC':
            return TuningError_Type.PUBLIC;
        case 2:
        case 'INTERNAL':
            return TuningError_Type.INTERNAL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return TuningError_Type.UNRECOGNIZED;
    }
}

export function tuningError_TypeToJSON(object: TuningError_Type): string {
    switch (object) {
        case TuningError_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case TuningError_Type.PUBLIC:
            return 'PUBLIC';
        case TuningError_Type.INTERNAL:
            return 'INTERNAL';
        default:
            return 'UNKNOWN';
    }
}

const baseTuningError: object = { tuningTaskId: '', message: '', type: 0 };

export const TuningError = {
    encode(message: TuningError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.tuningTaskId !== '') {
            writer.uint32(10).string(message.tuningTaskId);
        }
        if (message.message !== '') {
            writer.uint32(18).string(message.message);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TuningError {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTuningError } as TuningError;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tuningTaskId = reader.string();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                case 3:
                    message.type = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TuningError {
        const message = { ...baseTuningError } as TuningError;
        message.tuningTaskId =
            object.tuningTaskId !== undefined && object.tuningTaskId !== null
                ? String(object.tuningTaskId)
                : '';
        message.message =
            object.message !== undefined && object.message !== null ? String(object.message) : '';
        message.type =
            object.type !== undefined && object.type !== null
                ? tuningError_TypeFromJSON(object.type)
                : 0;
        return message;
    },

    toJSON(message: TuningError): unknown {
        const obj: any = {};
        message.tuningTaskId !== undefined && (obj.tuningTaskId = message.tuningTaskId);
        message.message !== undefined && (obj.message = message.message);
        message.type !== undefined && (obj.type = tuningError_TypeToJSON(message.type));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TuningError>, I>>(object: I): TuningError {
        const message = { ...baseTuningError } as TuningError;
        message.tuningTaskId = object.tuningTaskId ?? '';
        message.message = object.message ?? '';
        message.type = object.type ?? 0;
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
