/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.billing.v1';

/** Type of the pricing version. */
export enum PricingVersionType {
    PRICING_VERSION_TYPE_UNSPECIFIED = 0,
    /** STREET_PRICE - Regular price. */
    STREET_PRICE = 1,
    /** CONTRACT_PRICE - Price is overridden by a contract. Defined in the scope of a billing account. */
    CONTRACT_PRICE = 2,
    UNRECOGNIZED = -1,
}

export function pricingVersionTypeFromJSON(object: any): PricingVersionType {
    switch (object) {
        case 0:
        case 'PRICING_VERSION_TYPE_UNSPECIFIED':
            return PricingVersionType.PRICING_VERSION_TYPE_UNSPECIFIED;
        case 1:
        case 'STREET_PRICE':
            return PricingVersionType.STREET_PRICE;
        case 2:
        case 'CONTRACT_PRICE':
            return PricingVersionType.CONTRACT_PRICE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PricingVersionType.UNRECOGNIZED;
    }
}

export function pricingVersionTypeToJSON(object: PricingVersionType): string {
    switch (object) {
        case PricingVersionType.PRICING_VERSION_TYPE_UNSPECIFIED:
            return 'PRICING_VERSION_TYPE_UNSPECIFIED';
        case PricingVersionType.STREET_PRICE:
            return 'STREET_PRICE';
        case PricingVersionType.CONTRACT_PRICE:
            return 'CONTRACT_PRICE';
        default:
            return 'UNKNOWN';
    }
}

/** A Stock keeping unit resource. */
export interface Sku {
    $type: 'yandex.cloud.billing.v1.Sku';
    /** ID of the SKU. */
    id: string;
    /** Name of the SKU. */
    name: string;
    /** Description of the sku. */
    description: string;
    /** ID of the service that sku belongs to. */
    serviceId: string;
    /** Pricing unit of the SKU, e.g. `core*hour`, `gbyte*hour`. */
    pricingUnit: string;
    /** List of pricing versions. */
    pricingVersions: PricingVersion[];
}

/**
 * Pricing version of the SKU.
 * Defines current and past prices for the sku.
 */
export interface PricingVersion {
    $type: 'yandex.cloud.billing.v1.PricingVersion';
    /** Type of the pricing version. */
    type: PricingVersionType;
    /**
     * Timestamp pricing version is active since inclusive.
     * The pricing version is active until next pricing version effective time exclusive.
     */
    effectiveTime?: Date;
    /** List of pricing expressions. */
    pricingExpressions: PricingExpression[];
}

/**
 * Pricing expression of the pricing version.
 * Defines price for the sku.
 */
export interface PricingExpression {
    $type: 'yandex.cloud.billing.v1.PricingExpression';
    /** List of rates. */
    rates: Rate[];
}

/**
 * Rate of the pricing expression.
 * Define unit price for pricing quantity interval.
 */
export interface Rate {
    $type: 'yandex.cloud.billing.v1.Rate';
    /** Start of the pricing quantity interval. The end of the interval is the start pricing quantity of the next rate. */
    startPricingQuantity: string;
    /** Unit price for the pricing quantity interval. */
    unitPrice: string;
    /**
     * Currency of the unit price.
     * Can be one of the following:
     * * `RUB`
     * * `USD`
     * * `KZT`
     */
    currency: string;
}

const baseSku: object = {
    $type: 'yandex.cloud.billing.v1.Sku',
    id: '',
    name: '',
    description: '',
    serviceId: '',
    pricingUnit: '',
};

export const Sku = {
    $type: 'yandex.cloud.billing.v1.Sku' as const,

    encode(message: Sku, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.serviceId !== '') {
            writer.uint32(34).string(message.serviceId);
        }
        if (message.pricingUnit !== '') {
            writer.uint32(42).string(message.pricingUnit);
        }
        for (const v of message.pricingVersions) {
            PricingVersion.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Sku {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSku } as Sku;
        message.pricingVersions = [];
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
                    message.description = reader.string();
                    break;
                case 4:
                    message.serviceId = reader.string();
                    break;
                case 5:
                    message.pricingUnit = reader.string();
                    break;
                case 6:
                    message.pricingVersions.push(PricingVersion.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Sku {
        const message = { ...baseSku } as Sku;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.serviceId =
            object.serviceId !== undefined && object.serviceId !== null
                ? String(object.serviceId)
                : '';
        message.pricingUnit =
            object.pricingUnit !== undefined && object.pricingUnit !== null
                ? String(object.pricingUnit)
                : '';
        message.pricingVersions = (object.pricingVersions ?? []).map((e: any) =>
            PricingVersion.fromJSON(e),
        );
        return message;
    },

    toJSON(message: Sku): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.serviceId !== undefined && (obj.serviceId = message.serviceId);
        message.pricingUnit !== undefined && (obj.pricingUnit = message.pricingUnit);
        if (message.pricingVersions) {
            obj.pricingVersions = message.pricingVersions.map((e) =>
                e ? PricingVersion.toJSON(e) : undefined,
            );
        } else {
            obj.pricingVersions = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Sku>, I>>(object: I): Sku {
        const message = { ...baseSku } as Sku;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.serviceId = object.serviceId ?? '';
        message.pricingUnit = object.pricingUnit ?? '';
        message.pricingVersions =
            object.pricingVersions?.map((e) => PricingVersion.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(Sku.$type, Sku);

const basePricingVersion: object = { $type: 'yandex.cloud.billing.v1.PricingVersion', type: 0 };

export const PricingVersion = {
    $type: 'yandex.cloud.billing.v1.PricingVersion' as const,

    encode(message: PricingVersion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.effectiveTime !== undefined) {
            Timestamp.encode(toTimestamp(message.effectiveTime), writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.pricingExpressions) {
            PricingExpression.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PricingVersion {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePricingVersion } as PricingVersion;
        message.pricingExpressions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32() as any;
                    break;
                case 2:
                    message.effectiveTime = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32()),
                    );
                    break;
                case 3:
                    message.pricingExpressions.push(
                        PricingExpression.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PricingVersion {
        const message = { ...basePricingVersion } as PricingVersion;
        message.type =
            object.type !== undefined && object.type !== null
                ? pricingVersionTypeFromJSON(object.type)
                : 0;
        message.effectiveTime =
            object.effectiveTime !== undefined && object.effectiveTime !== null
                ? fromJsonTimestamp(object.effectiveTime)
                : undefined;
        message.pricingExpressions = (object.pricingExpressions ?? []).map((e: any) =>
            PricingExpression.fromJSON(e),
        );
        return message;
    },

    toJSON(message: PricingVersion): unknown {
        const obj: any = {};
        message.type !== undefined && (obj.type = pricingVersionTypeToJSON(message.type));
        message.effectiveTime !== undefined &&
            (obj.effectiveTime = message.effectiveTime.toISOString());
        if (message.pricingExpressions) {
            obj.pricingExpressions = message.pricingExpressions.map((e) =>
                e ? PricingExpression.toJSON(e) : undefined,
            );
        } else {
            obj.pricingExpressions = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PricingVersion>, I>>(object: I): PricingVersion {
        const message = { ...basePricingVersion } as PricingVersion;
        message.type = object.type ?? 0;
        message.effectiveTime = object.effectiveTime ?? undefined;
        message.pricingExpressions =
            object.pricingExpressions?.map((e) => PricingExpression.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(PricingVersion.$type, PricingVersion);

const basePricingExpression: object = { $type: 'yandex.cloud.billing.v1.PricingExpression' };

export const PricingExpression = {
    $type: 'yandex.cloud.billing.v1.PricingExpression' as const,

    encode(message: PricingExpression, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.rates) {
            Rate.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PricingExpression {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePricingExpression } as PricingExpression;
        message.rates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.rates.push(Rate.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PricingExpression {
        const message = { ...basePricingExpression } as PricingExpression;
        message.rates = (object.rates ?? []).map((e: any) => Rate.fromJSON(e));
        return message;
    },

    toJSON(message: PricingExpression): unknown {
        const obj: any = {};
        if (message.rates) {
            obj.rates = message.rates.map((e) => (e ? Rate.toJSON(e) : undefined));
        } else {
            obj.rates = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PricingExpression>, I>>(object: I): PricingExpression {
        const message = { ...basePricingExpression } as PricingExpression;
        message.rates = object.rates?.map((e) => Rate.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(PricingExpression.$type, PricingExpression);

const baseRate: object = {
    $type: 'yandex.cloud.billing.v1.Rate',
    startPricingQuantity: '',
    unitPrice: '',
    currency: '',
};

export const Rate = {
    $type: 'yandex.cloud.billing.v1.Rate' as const,

    encode(message: Rate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.startPricingQuantity !== '') {
            writer.uint32(10).string(message.startPricingQuantity);
        }
        if (message.unitPrice !== '') {
            writer.uint32(18).string(message.unitPrice);
        }
        if (message.currency !== '') {
            writer.uint32(26).string(message.currency);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Rate {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRate } as Rate;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startPricingQuantity = reader.string();
                    break;
                case 2:
                    message.unitPrice = reader.string();
                    break;
                case 3:
                    message.currency = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Rate {
        const message = { ...baseRate } as Rate;
        message.startPricingQuantity =
            object.startPricingQuantity !== undefined && object.startPricingQuantity !== null
                ? String(object.startPricingQuantity)
                : '';
        message.unitPrice =
            object.unitPrice !== undefined && object.unitPrice !== null
                ? String(object.unitPrice)
                : '';
        message.currency =
            object.currency !== undefined && object.currency !== null
                ? String(object.currency)
                : '';
        return message;
    },

    toJSON(message: Rate): unknown {
        const obj: any = {};
        message.startPricingQuantity !== undefined &&
            (obj.startPricingQuantity = message.startPricingQuantity);
        message.unitPrice !== undefined && (obj.unitPrice = message.unitPrice);
        message.currency !== undefined && (obj.currency = message.currency);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Rate>, I>>(object: I): Rate {
        const message = { ...baseRate } as Rate;
        message.startPricingQuantity = object.startPricingQuantity ?? '';
        message.unitPrice = object.unitPrice ?? '';
        message.currency = object.currency ?? '';
        return message;
    },
};

messageTypeRegistry.set(Rate.$type, Rate);

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
