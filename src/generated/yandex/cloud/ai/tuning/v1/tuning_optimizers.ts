/* eslint-disable */
import { messageTypeRegistry } from '../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.ai.tuning.v1';

export interface OptimizerAdamw {
    $type: 'yandex.cloud.ai.tuning.v1.OptimizerAdamw';
    beta1: number;
    beta2: number;
    eps: number;
    weightDecay: number;
}

const baseOptimizerAdamw: object = {
    $type: 'yandex.cloud.ai.tuning.v1.OptimizerAdamw',
    beta1: 0,
    beta2: 0,
    eps: 0,
    weightDecay: 0,
};

export const OptimizerAdamw = {
    $type: 'yandex.cloud.ai.tuning.v1.OptimizerAdamw' as const,

    encode(message: OptimizerAdamw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.beta1 !== 0) {
            writer.uint32(9).double(message.beta1);
        }
        if (message.beta2 !== 0) {
            writer.uint32(17).double(message.beta2);
        }
        if (message.eps !== 0) {
            writer.uint32(25).double(message.eps);
        }
        if (message.weightDecay !== 0) {
            writer.uint32(33).double(message.weightDecay);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OptimizerAdamw {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOptimizerAdamw } as OptimizerAdamw;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.beta1 = reader.double();
                    break;
                case 2:
                    message.beta2 = reader.double();
                    break;
                case 3:
                    message.eps = reader.double();
                    break;
                case 4:
                    message.weightDecay = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OptimizerAdamw {
        const message = { ...baseOptimizerAdamw } as OptimizerAdamw;
        message.beta1 =
            object.beta1 !== undefined && object.beta1 !== null ? Number(object.beta1) : 0;
        message.beta2 =
            object.beta2 !== undefined && object.beta2 !== null ? Number(object.beta2) : 0;
        message.eps = object.eps !== undefined && object.eps !== null ? Number(object.eps) : 0;
        message.weightDecay =
            object.weightDecay !== undefined && object.weightDecay !== null
                ? Number(object.weightDecay)
                : 0;
        return message;
    },

    toJSON(message: OptimizerAdamw): unknown {
        const obj: any = {};
        message.beta1 !== undefined && (obj.beta1 = message.beta1);
        message.beta2 !== undefined && (obj.beta2 = message.beta2);
        message.eps !== undefined && (obj.eps = message.eps);
        message.weightDecay !== undefined && (obj.weightDecay = message.weightDecay);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OptimizerAdamw>, I>>(object: I): OptimizerAdamw {
        const message = { ...baseOptimizerAdamw } as OptimizerAdamw;
        message.beta1 = object.beta1 ?? 0;
        message.beta2 = object.beta2 ?? 0;
        message.eps = object.eps ?? 0;
        message.weightDecay = object.weightDecay ?? 0;
        return message;
    },
};

messageTypeRegistry.set(OptimizerAdamw.$type, OptimizerAdamw);

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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
