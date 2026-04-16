/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.baremetal.v1alpha';

/**
 * A period of time for which a Bare Metal Server can be rented. e.g., 1 month, 3 months, 6 months,
 * a year.
 */
export interface RentalPeriod {
    /** Rental period identifier. */
    id: string;
}

const baseRentalPeriod: object = { id: '' };

export const RentalPeriod: {
    encode(message: RentalPeriod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RentalPeriod;
    fromJSON(object: any): RentalPeriod;
    toJSON(message: RentalPeriod): unknown;
    fromPartial<I extends Exact<DeepPartial<RentalPeriod>, I>>(object: I): RentalPeriod;
} = {
    encode(message: RentalPeriod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RentalPeriod {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRentalPeriod } as RentalPeriod;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RentalPeriod {
        const message = { ...baseRentalPeriod } as RentalPeriod;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        return message;
    },

    toJSON(message: RentalPeriod): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RentalPeriod>, I>>(object: I): RentalPeriod {
        const message = { ...baseRentalPeriod } as RentalPeriod;
        message.id = object.id ?? '';
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
