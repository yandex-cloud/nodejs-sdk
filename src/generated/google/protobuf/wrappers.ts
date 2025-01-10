/* eslint-disable */
import { messageTypeRegistry } from '../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'google.protobuf';

/**
 * Wrapper message for `double`.
 *
 * The JSON representation for `DoubleValue` is JSON number.
 */
export interface DoubleValue {
    $type: 'google.protobuf.DoubleValue';
    /** The double value. */
    value: number;
}

/**
 * Wrapper message for `float`.
 *
 * The JSON representation for `FloatValue` is JSON number.
 */
export interface FloatValue {
    $type: 'google.protobuf.FloatValue';
    /** The float value. */
    value: number;
}

/**
 * Wrapper message for `int64`.
 *
 * The JSON representation for `Int64Value` is JSON string.
 */
export interface Int64Value {
    $type: 'google.protobuf.Int64Value';
    /** The int64 value. */
    value: number;
}

/**
 * Wrapper message for `uint64`.
 *
 * The JSON representation for `UInt64Value` is JSON string.
 */
export interface UInt64Value {
    $type: 'google.protobuf.UInt64Value';
    /** The uint64 value. */
    value: number;
}

/**
 * Wrapper message for `int32`.
 *
 * The JSON representation for `Int32Value` is JSON number.
 */
export interface Int32Value {
    $type: 'google.protobuf.Int32Value';
    /** The int32 value. */
    value: number;
}

/**
 * Wrapper message for `uint32`.
 *
 * The JSON representation for `UInt32Value` is JSON number.
 */
export interface UInt32Value {
    $type: 'google.protobuf.UInt32Value';
    /** The uint32 value. */
    value: number;
}

/**
 * Wrapper message for `bool`.
 *
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 */
export interface BoolValue {
    $type: 'google.protobuf.BoolValue';
    /** The bool value. */
    value: boolean;
}

/**
 * Wrapper message for `string`.
 *
 * The JSON representation for `StringValue` is JSON string.
 */
export interface StringValue {
    $type: 'google.protobuf.StringValue';
    /** The string value. */
    value: string;
}

/**
 * Wrapper message for `bytes`.
 *
 * The JSON representation for `BytesValue` is JSON string.
 */
export interface BytesValue {
    $type: 'google.protobuf.BytesValue';
    /** The bytes value. */
    value: Buffer;
}

const baseDoubleValue: object = { $type: 'google.protobuf.DoubleValue', value: 0 };

export const DoubleValue = {
    $type: 'google.protobuf.DoubleValue' as const,

    encode(message: DoubleValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.value !== 0) {
            writer.uint32(9).double(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DoubleValue {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDoubleValue } as DoubleValue;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DoubleValue {
        const message = { ...baseDoubleValue } as DoubleValue;
        message.value =
            object.value !== undefined && object.value !== null ? Number(object.value) : 0;
        return message;
    },

    toJSON(message: DoubleValue): unknown {
        const obj: any = {};
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DoubleValue>, I>>(object: I): DoubleValue {
        const message = { ...baseDoubleValue } as DoubleValue;
        message.value = object.value ?? 0;
        return message;
    },
};

messageTypeRegistry.set(DoubleValue.$type, DoubleValue);

const baseFloatValue: object = { $type: 'google.protobuf.FloatValue', value: 0 };

export const FloatValue = {
    $type: 'google.protobuf.FloatValue' as const,

    encode(message: FloatValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.value !== 0) {
            writer.uint32(13).float(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): FloatValue {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFloatValue } as FloatValue;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): FloatValue {
        const message = { ...baseFloatValue } as FloatValue;
        message.value =
            object.value !== undefined && object.value !== null ? Number(object.value) : 0;
        return message;
    },

    toJSON(message: FloatValue): unknown {
        const obj: any = {};
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<FloatValue>, I>>(object: I): FloatValue {
        const message = { ...baseFloatValue } as FloatValue;
        message.value = object.value ?? 0;
        return message;
    },
};

messageTypeRegistry.set(FloatValue.$type, FloatValue);

const baseInt64Value: object = { $type: 'google.protobuf.Int64Value', value: 0 };

export const Int64Value = {
    $type: 'google.protobuf.Int64Value' as const,

    encode(message: Int64Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.value !== 0) {
            writer.uint32(8).int64(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Int64Value {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInt64Value } as Int64Value;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Int64Value {
        const message = { ...baseInt64Value } as Int64Value;
        message.value =
            object.value !== undefined && object.value !== null ? Number(object.value) : 0;
        return message;
    },

    toJSON(message: Int64Value): unknown {
        const obj: any = {};
        message.value !== undefined && (obj.value = Math.round(message.value));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Int64Value>, I>>(object: I): Int64Value {
        const message = { ...baseInt64Value } as Int64Value;
        message.value = object.value ?? 0;
        return message;
    },
};

messageTypeRegistry.set(Int64Value.$type, Int64Value);

const baseUInt64Value: object = { $type: 'google.protobuf.UInt64Value', value: 0 };

export const UInt64Value = {
    $type: 'google.protobuf.UInt64Value' as const,

    encode(message: UInt64Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.value !== 0) {
            writer.uint32(8).uint64(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UInt64Value {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUInt64Value } as UInt64Value;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = longToNumber(reader.uint64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UInt64Value {
        const message = { ...baseUInt64Value } as UInt64Value;
        message.value =
            object.value !== undefined && object.value !== null ? Number(object.value) : 0;
        return message;
    },

    toJSON(message: UInt64Value): unknown {
        const obj: any = {};
        message.value !== undefined && (obj.value = Math.round(message.value));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UInt64Value>, I>>(object: I): UInt64Value {
        const message = { ...baseUInt64Value } as UInt64Value;
        message.value = object.value ?? 0;
        return message;
    },
};

messageTypeRegistry.set(UInt64Value.$type, UInt64Value);

const baseInt32Value: object = { $type: 'google.protobuf.Int32Value', value: 0 };

export const Int32Value = {
    $type: 'google.protobuf.Int32Value' as const,

    encode(message: Int32Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.value !== 0) {
            writer.uint32(8).int32(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Int32Value {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInt32Value } as Int32Value;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Int32Value {
        const message = { ...baseInt32Value } as Int32Value;
        message.value =
            object.value !== undefined && object.value !== null ? Number(object.value) : 0;
        return message;
    },

    toJSON(message: Int32Value): unknown {
        const obj: any = {};
        message.value !== undefined && (obj.value = Math.round(message.value));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Int32Value>, I>>(object: I): Int32Value {
        const message = { ...baseInt32Value } as Int32Value;
        message.value = object.value ?? 0;
        return message;
    },
};

messageTypeRegistry.set(Int32Value.$type, Int32Value);

const baseUInt32Value: object = { $type: 'google.protobuf.UInt32Value', value: 0 };

export const UInt32Value = {
    $type: 'google.protobuf.UInt32Value' as const,

    encode(message: UInt32Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.value !== 0) {
            writer.uint32(8).uint32(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UInt32Value {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUInt32Value } as UInt32Value;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UInt32Value {
        const message = { ...baseUInt32Value } as UInt32Value;
        message.value =
            object.value !== undefined && object.value !== null ? Number(object.value) : 0;
        return message;
    },

    toJSON(message: UInt32Value): unknown {
        const obj: any = {};
        message.value !== undefined && (obj.value = Math.round(message.value));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UInt32Value>, I>>(object: I): UInt32Value {
        const message = { ...baseUInt32Value } as UInt32Value;
        message.value = object.value ?? 0;
        return message;
    },
};

messageTypeRegistry.set(UInt32Value.$type, UInt32Value);

const baseBoolValue: object = { $type: 'google.protobuf.BoolValue', value: false };

export const BoolValue = {
    $type: 'google.protobuf.BoolValue' as const,

    encode(message: BoolValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.value === true) {
            writer.uint32(8).bool(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BoolValue {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBoolValue } as BoolValue;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BoolValue {
        const message = { ...baseBoolValue } as BoolValue;
        message.value =
            object.value !== undefined && object.value !== null ? Boolean(object.value) : false;
        return message;
    },

    toJSON(message: BoolValue): unknown {
        const obj: any = {};
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BoolValue>, I>>(object: I): BoolValue {
        const message = { ...baseBoolValue } as BoolValue;
        message.value = object.value ?? false;
        return message;
    },
};

messageTypeRegistry.set(BoolValue.$type, BoolValue);

const baseStringValue: object = { $type: 'google.protobuf.StringValue', value: '' };

export const StringValue = {
    $type: 'google.protobuf.StringValue' as const,

    encode(message: StringValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.value !== '') {
            writer.uint32(10).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StringValue {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStringValue } as StringValue;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StringValue {
        const message = { ...baseStringValue } as StringValue;
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: StringValue): unknown {
        const obj: any = {};
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StringValue>, I>>(object: I): StringValue {
        const message = { ...baseStringValue } as StringValue;
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(StringValue.$type, StringValue);

const baseBytesValue: object = { $type: 'google.protobuf.BytesValue' };

export const BytesValue = {
    $type: 'google.protobuf.BytesValue' as const,

    encode(message: BytesValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.value.length !== 0) {
            writer.uint32(10).bytes(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BytesValue {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBytesValue } as BytesValue;
        message.value = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.bytes() as Buffer;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BytesValue {
        const message = { ...baseBytesValue } as BytesValue;
        message.value =
            object.value !== undefined && object.value !== null
                ? Buffer.from(bytesFromBase64(object.value))
                : Buffer.alloc(0);
        return message;
    },

    toJSON(message: BytesValue): unknown {
        const obj: any = {};
        message.value !== undefined &&
            (obj.value = base64FromBytes(
                message.value !== undefined ? message.value : Buffer.alloc(0),
            ));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BytesValue>, I>>(object: I): BytesValue {
        const message = { ...baseBytesValue } as BytesValue;
        message.value = object.value ?? Buffer.alloc(0);
        return message;
    },
};

messageTypeRegistry.set(BytesValue.$type, BytesValue);

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

const atob: (b64: string) => string =
    globalThis.atob || ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}

const btoa: (bin: string) => string =
    globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
    const bin: string[] = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(''));
}

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
