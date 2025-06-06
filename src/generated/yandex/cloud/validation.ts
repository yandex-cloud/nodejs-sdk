/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud';

export interface MapKeySpec {
    value: string;
    pattern: string;
    length: string;
}

const baseMapKeySpec: object = { value: '', pattern: '', length: '' };

export const MapKeySpec = {
    encode(message: MapKeySpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.value !== '') {
            writer.uint32(10).string(message.value);
        }
        if (message.pattern !== '') {
            writer.uint32(18).string(message.pattern);
        }
        if (message.length !== '') {
            writer.uint32(26).string(message.length);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MapKeySpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMapKeySpec } as MapKeySpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.string();
                    break;
                case 2:
                    message.pattern = reader.string();
                    break;
                case 3:
                    message.length = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MapKeySpec {
        const message = { ...baseMapKeySpec } as MapKeySpec;
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        message.pattern =
            object.pattern !== undefined && object.pattern !== null ? String(object.pattern) : '';
        message.length =
            object.length !== undefined && object.length !== null ? String(object.length) : '';
        return message;
    },

    toJSON(message: MapKeySpec): unknown {
        const obj: any = {};
        message.value !== undefined && (obj.value = message.value);
        message.pattern !== undefined && (obj.pattern = message.pattern);
        message.length !== undefined && (obj.length = message.length);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MapKeySpec>, I>>(object: I): MapKeySpec {
        const message = { ...baseMapKeySpec } as MapKeySpec;
        message.value = object.value ?? '';
        message.pattern = object.pattern ?? '';
        message.length = object.length ?? '';
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
