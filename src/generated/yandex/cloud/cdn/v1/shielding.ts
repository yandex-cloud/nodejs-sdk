/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.cdn.v1';

/** Message representing the details of a shielding server. */
export interface ShieldingDetails {
    /** Unique identifier for the geographical location of the shielding server. */
    locationId: number;
    /** Name of the data center where the shielding server is located. */
    dataCenter: string;
    /** Country where the shielding server's data center is located, useful for understanding geographical distribution. */
    country: string;
    /** City where the shielding server's data center is situated, providing a more precise location than just the country. */
    city: string;
}

const baseShieldingDetails: object = { locationId: 0, dataCenter: '', country: '', city: '' };

export const ShieldingDetails = {
    encode(message: ShieldingDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.locationId !== 0) {
            writer.uint32(8).int64(message.locationId);
        }
        if (message.dataCenter !== '') {
            writer.uint32(18).string(message.dataCenter);
        }
        if (message.country !== '') {
            writer.uint32(26).string(message.country);
        }
        if (message.city !== '') {
            writer.uint32(34).string(message.city);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ShieldingDetails {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseShieldingDetails } as ShieldingDetails;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locationId = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.dataCenter = reader.string();
                    break;
                case 3:
                    message.country = reader.string();
                    break;
                case 4:
                    message.city = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ShieldingDetails {
        const message = { ...baseShieldingDetails } as ShieldingDetails;
        message.locationId =
            object.locationId !== undefined && object.locationId !== null
                ? Number(object.locationId)
                : 0;
        message.dataCenter =
            object.dataCenter !== undefined && object.dataCenter !== null
                ? String(object.dataCenter)
                : '';
        message.country =
            object.country !== undefined && object.country !== null ? String(object.country) : '';
        message.city = object.city !== undefined && object.city !== null ? String(object.city) : '';
        return message;
    },

    toJSON(message: ShieldingDetails): unknown {
        const obj: any = {};
        message.locationId !== undefined && (obj.locationId = Math.round(message.locationId));
        message.dataCenter !== undefined && (obj.dataCenter = message.dataCenter);
        message.country !== undefined && (obj.country = message.country);
        message.city !== undefined && (obj.city = message.city);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ShieldingDetails>, I>>(object: I): ShieldingDetails {
        const message = { ...baseShieldingDetails } as ShieldingDetails;
        message.locationId = object.locationId ?? 0;
        message.dataCenter = object.dataCenter ?? '';
        message.country = object.country ?? '';
        message.city = object.city ?? '';
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
