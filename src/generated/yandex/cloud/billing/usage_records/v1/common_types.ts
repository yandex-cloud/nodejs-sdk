/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.billing.usage_records.v1';

/**
 * Enum for time period grouping options used to control the granularity of time-based data aggregation.
 * This determines how the time series data is grouped in responses (e.g., daily, monthly reports).
 */
export enum TimeGrouping {
    /** TIME_GROUPING_UNSPECIFIED - Default unspecified value. Typically treated as DAY. */
    TIME_GROUPING_UNSPECIFIED = 0,
    /** DAY - Group reports by day. */
    DAY = 1,
    /** WEEK - Group reports by week. */
    WEEK = 2,
    /** MONTH - Group reports by month. */
    MONTH = 3,
    /** QUARTER - Group reports by quarter (3-month periods). */
    QUARTER = 4,
    /** YEAR - Group reports by year. */
    YEAR = 5,
    UNRECOGNIZED = -1,
}

export function timeGroupingFromJSON(object: any): TimeGrouping {
    switch (object) {
        case 0:
        case 'TIME_GROUPING_UNSPECIFIED':
            return TimeGrouping.TIME_GROUPING_UNSPECIFIED;
        case 1:
        case 'DAY':
            return TimeGrouping.DAY;
        case 2:
        case 'WEEK':
            return TimeGrouping.WEEK;
        case 3:
        case 'MONTH':
            return TimeGrouping.MONTH;
        case 4:
        case 'QUARTER':
            return TimeGrouping.QUARTER;
        case 5:
        case 'YEAR':
            return TimeGrouping.YEAR;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return TimeGrouping.UNRECOGNIZED;
    }
}

export function timeGroupingToJSON(object: TimeGrouping): string {
    switch (object) {
        case TimeGrouping.TIME_GROUPING_UNSPECIFIED:
            return 'TIME_GROUPING_UNSPECIFIED';
        case TimeGrouping.DAY:
            return 'DAY';
        case TimeGrouping.WEEK:
            return 'WEEK';
        case TimeGrouping.MONTH:
            return 'MONTH';
        case TimeGrouping.QUARTER:
            return 'QUARTER';
        case TimeGrouping.YEAR:
            return 'YEAR';
        default:
            return 'UNKNOWN';
    }
}

/** Enum for supported currency codes used in billing and financial reports. */
export enum Currency {
    /** CURRENCY_UNSPECIFIED - Unspecified or unknown currency. */
    CURRENCY_UNSPECIFIED = 0,
    /** RUB - Russian Ruble */
    RUB = 1,
    /** USD - US Dollar */
    USD = 2,
    /** KZT - Kazakhstani Tenge */
    KZT = 3,
    /** EUR - Euro */
    EUR = 4,
    UNRECOGNIZED = -1,
}

export function currencyFromJSON(object: any): Currency {
    switch (object) {
        case 0:
        case 'CURRENCY_UNSPECIFIED':
            return Currency.CURRENCY_UNSPECIFIED;
        case 1:
        case 'RUB':
            return Currency.RUB;
        case 2:
        case 'USD':
            return Currency.USD;
        case 3:
        case 'KZT':
            return Currency.KZT;
        case 4:
        case 'EUR':
            return Currency.EUR;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Currency.UNRECOGNIZED;
    }
}

export function currencyToJSON(object: Currency): string {
    switch (object) {
        case Currency.CURRENCY_UNSPECIFIED:
            return 'CURRENCY_UNSPECIFIED';
        case Currency.RUB:
            return 'RUB';
        case Currency.USD:
            return 'USD';
        case Currency.KZT:
            return 'KZT';
        case Currency.EUR:
            return 'EUR';
        default:
            return 'UNKNOWN';
    }
}

/**
 * StringDecimal representation for financial values
 * Used to ensure precise handling of monetary values
 */
export interface StringDecimal {
    /** String representation of the decimal value to avoid floating-point precision issues */
    value: string;
}

const baseStringDecimal: object = { value: '' };

export const StringDecimal: {
    encode(message: StringDecimal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StringDecimal;
    fromJSON(object: any): StringDecimal;
    toJSON(message: StringDecimal): unknown;
    fromPartial<I extends Exact<DeepPartial<StringDecimal>, I>>(object: I): StringDecimal;
} = {
    encode(message: StringDecimal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.value !== '') {
            writer.uint32(10).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StringDecimal {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStringDecimal } as StringDecimal;
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

    fromJSON(object: any): StringDecimal {
        const message = { ...baseStringDecimal } as StringDecimal;
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: StringDecimal): unknown {
        const obj: any = {};
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StringDecimal>, I>>(object: I): StringDecimal {
        const message = { ...baseStringDecimal } as StringDecimal;
        message.value = object.value ?? '';
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
