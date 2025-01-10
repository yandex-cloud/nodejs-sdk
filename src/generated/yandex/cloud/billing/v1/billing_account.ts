/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.billing.v1';

/** A BillingAccount resource. For more information, see [BillingAccount](/docs/billing/concepts/billing-account). */
export interface BillingAccount {
    $type: 'yandex.cloud.billing.v1.BillingAccount';
    /** ID of the billing account. */
    id: string;
    /** Name of the billing account. */
    name: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /** ISO 3166-1 alpha-2 country code of the billing account. */
    countryCode: string;
    /**
     * Currency of the billing account.
     * Can be one of the following:
     * * `RUB`
     * * `USD`
     * * `KZT`
     */
    currency: string;
    /** Represents whether corresponding billable objects can be used or not. */
    active: boolean;
    /** Current balance of the billing account. */
    balance: string;
}

const baseBillingAccount: object = {
    $type: 'yandex.cloud.billing.v1.BillingAccount',
    id: '',
    name: '',
    countryCode: '',
    currency: '',
    active: false,
    balance: '',
};

export const BillingAccount = {
    $type: 'yandex.cloud.billing.v1.BillingAccount' as const,

    encode(message: BillingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.countryCode !== '') {
            writer.uint32(34).string(message.countryCode);
        }
        if (message.currency !== '') {
            writer.uint32(42).string(message.currency);
        }
        if (message.active === true) {
            writer.uint32(48).bool(message.active);
        }
        if (message.balance !== '') {
            writer.uint32(58).string(message.balance);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BillingAccount {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBillingAccount } as BillingAccount;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.countryCode = reader.string();
                    break;
                case 5:
                    message.currency = reader.string();
                    break;
                case 6:
                    message.active = reader.bool();
                    break;
                case 7:
                    message.balance = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BillingAccount {
        const message = { ...baseBillingAccount } as BillingAccount;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.countryCode =
            object.countryCode !== undefined && object.countryCode !== null
                ? String(object.countryCode)
                : '';
        message.currency =
            object.currency !== undefined && object.currency !== null
                ? String(object.currency)
                : '';
        message.active =
            object.active !== undefined && object.active !== null ? Boolean(object.active) : false;
        message.balance =
            object.balance !== undefined && object.balance !== null ? String(object.balance) : '';
        return message;
    },

    toJSON(message: BillingAccount): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.countryCode !== undefined && (obj.countryCode = message.countryCode);
        message.currency !== undefined && (obj.currency = message.currency);
        message.active !== undefined && (obj.active = message.active);
        message.balance !== undefined && (obj.balance = message.balance);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BillingAccount>, I>>(object: I): BillingAccount {
        const message = { ...baseBillingAccount } as BillingAccount;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.countryCode = object.countryCode ?? '';
        message.currency = object.currency ?? '';
        message.active = object.active ?? false;
        message.balance = object.balance ?? '';
        return message;
    },
};

messageTypeRegistry.set(BillingAccount.$type, BillingAccount);

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

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
