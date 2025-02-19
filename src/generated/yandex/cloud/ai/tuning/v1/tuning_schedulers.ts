/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.ai.tuning.v1';

export interface SchedulerLinear {
    minLr: number;
}

export interface SchedulerConstant {}

export interface SchedulerCosine {
    minLr: number;
}

const baseSchedulerLinear: object = { minLr: 0 };

export const SchedulerLinear = {
    encode(message: SchedulerLinear, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.minLr !== 0) {
            writer.uint32(9).double(message.minLr);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SchedulerLinear {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSchedulerLinear } as SchedulerLinear;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minLr = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SchedulerLinear {
        const message = { ...baseSchedulerLinear } as SchedulerLinear;
        message.minLr =
            object.minLr !== undefined && object.minLr !== null ? Number(object.minLr) : 0;
        return message;
    },

    toJSON(message: SchedulerLinear): unknown {
        const obj: any = {};
        message.minLr !== undefined && (obj.minLr = message.minLr);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SchedulerLinear>, I>>(object: I): SchedulerLinear {
        const message = { ...baseSchedulerLinear } as SchedulerLinear;
        message.minLr = object.minLr ?? 0;
        return message;
    },
};

const baseSchedulerConstant: object = {};

export const SchedulerConstant = {
    encode(_: SchedulerConstant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SchedulerConstant {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSchedulerConstant } as SchedulerConstant;
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

    fromJSON(_: any): SchedulerConstant {
        const message = { ...baseSchedulerConstant } as SchedulerConstant;
        return message;
    },

    toJSON(_: SchedulerConstant): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SchedulerConstant>, I>>(_: I): SchedulerConstant {
        const message = { ...baseSchedulerConstant } as SchedulerConstant;
        return message;
    },
};

const baseSchedulerCosine: object = { minLr: 0 };

export const SchedulerCosine = {
    encode(message: SchedulerCosine, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.minLr !== 0) {
            writer.uint32(9).double(message.minLr);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SchedulerCosine {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSchedulerCosine } as SchedulerCosine;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minLr = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SchedulerCosine {
        const message = { ...baseSchedulerCosine } as SchedulerCosine;
        message.minLr =
            object.minLr !== undefined && object.minLr !== null ? Number(object.minLr) : 0;
        return message;
    },

    toJSON(message: SchedulerCosine): unknown {
        const obj: any = {};
        message.minLr !== undefined && (obj.minLr = message.minLr);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SchedulerCosine>, I>>(object: I): SchedulerCosine {
        const message = { ...baseSchedulerCosine } as SchedulerCosine;
        message.minLr = object.minLr ?? 0;
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
