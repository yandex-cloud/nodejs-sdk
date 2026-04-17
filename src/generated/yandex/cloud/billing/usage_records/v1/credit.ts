/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { StringDecimal } from './common_types';

export const protobufPackage = 'yandex.cloud.billing.usage_records.v1';

/**
 * Detailed breakdown of credits (discounts, incentives, grants, etc.) applied to an entity.
 * Credits reduce the effective cost that customers pay for cloud resources.
 * The 'credit' field is the total amount of credits (the sum of all credit types below).
 * This breakdown allows for detailed analysis of different discount types affecting billing.
 */
export interface CreditDetails {
    /**
     * Total amount of credits (sum of all credit types) applied to the entity.
     * This is the overall discount applied, reducing the cost to arrive at the final expense.
     * Formula: expense = cost + credit
     */
    credit?: StringDecimal;
    /** Credits granted as a one-time monetary grant. */
    monetaryGrantCredit?: StringDecimal;
    /** Credits given as a volume-based incentive. */
    volumeIncentiveCredit?: StringDecimal;
    /** Committed Use Discount credits. */
    cudCredit?: StringDecimal;
    /** Credits provided as part of a 'free' program. */
    freeCredit?: StringDecimal;
}

const baseCreditDetails: object = {};

export const CreditDetails: {
    encode(message: CreditDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreditDetails;
    fromJSON(object: any): CreditDetails;
    toJSON(message: CreditDetails): unknown;
    fromPartial<I extends Exact<DeepPartial<CreditDetails>, I>>(object: I): CreditDetails;
} = {
    encode(message: CreditDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.credit !== undefined) {
            StringDecimal.encode(message.credit, writer.uint32(10).fork()).ldelim();
        }
        if (message.monetaryGrantCredit !== undefined) {
            StringDecimal.encode(message.monetaryGrantCredit, writer.uint32(18).fork()).ldelim();
        }
        if (message.volumeIncentiveCredit !== undefined) {
            StringDecimal.encode(message.volumeIncentiveCredit, writer.uint32(26).fork()).ldelim();
        }
        if (message.cudCredit !== undefined) {
            StringDecimal.encode(message.cudCredit, writer.uint32(34).fork()).ldelim();
        }
        if (message.freeCredit !== undefined) {
            StringDecimal.encode(message.freeCredit, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreditDetails {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreditDetails } as CreditDetails;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.credit = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.monetaryGrantCredit = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.volumeIncentiveCredit = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.cudCredit = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.freeCredit = StringDecimal.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreditDetails {
        const message = { ...baseCreditDetails } as CreditDetails;
        message.credit =
            object.credit !== undefined && object.credit !== null
                ? StringDecimal.fromJSON(object.credit)
                : undefined;
        message.monetaryGrantCredit =
            object.monetaryGrantCredit !== undefined && object.monetaryGrantCredit !== null
                ? StringDecimal.fromJSON(object.monetaryGrantCredit)
                : undefined;
        message.volumeIncentiveCredit =
            object.volumeIncentiveCredit !== undefined && object.volumeIncentiveCredit !== null
                ? StringDecimal.fromJSON(object.volumeIncentiveCredit)
                : undefined;
        message.cudCredit =
            object.cudCredit !== undefined && object.cudCredit !== null
                ? StringDecimal.fromJSON(object.cudCredit)
                : undefined;
        message.freeCredit =
            object.freeCredit !== undefined && object.freeCredit !== null
                ? StringDecimal.fromJSON(object.freeCredit)
                : undefined;
        return message;
    },

    toJSON(message: CreditDetails): unknown {
        const obj: any = {};
        message.credit !== undefined &&
            (obj.credit = message.credit ? StringDecimal.toJSON(message.credit) : undefined);
        message.monetaryGrantCredit !== undefined &&
            (obj.monetaryGrantCredit = message.monetaryGrantCredit
                ? StringDecimal.toJSON(message.monetaryGrantCredit)
                : undefined);
        message.volumeIncentiveCredit !== undefined &&
            (obj.volumeIncentiveCredit = message.volumeIncentiveCredit
                ? StringDecimal.toJSON(message.volumeIncentiveCredit)
                : undefined);
        message.cudCredit !== undefined &&
            (obj.cudCredit = message.cudCredit
                ? StringDecimal.toJSON(message.cudCredit)
                : undefined);
        message.freeCredit !== undefined &&
            (obj.freeCredit = message.freeCredit
                ? StringDecimal.toJSON(message.freeCredit)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreditDetails>, I>>(object: I): CreditDetails {
        const message = { ...baseCreditDetails } as CreditDetails;
        message.credit =
            object.credit !== undefined && object.credit !== null
                ? StringDecimal.fromPartial(object.credit)
                : undefined;
        message.monetaryGrantCredit =
            object.monetaryGrantCredit !== undefined && object.monetaryGrantCredit !== null
                ? StringDecimal.fromPartial(object.monetaryGrantCredit)
                : undefined;
        message.volumeIncentiveCredit =
            object.volumeIncentiveCredit !== undefined && object.volumeIncentiveCredit !== null
                ? StringDecimal.fromPartial(object.volumeIncentiveCredit)
                : undefined;
        message.cudCredit =
            object.cudCredit !== undefined && object.cudCredit !== null
                ? StringDecimal.fromPartial(object.cudCredit)
                : undefined;
        message.freeCredit =
            object.freeCredit !== undefined && object.freeCredit !== null
                ? StringDecimal.fromPartial(object.freeCredit)
                : undefined;
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
