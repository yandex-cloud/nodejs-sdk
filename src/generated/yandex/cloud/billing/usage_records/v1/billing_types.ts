/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.billing.usage_records.v1';

/**
 * Represents a list of label values for filtering or grouping in usage reports.
 * For example, to filter resources with label key "env" that have value "prod" or "test",
 * a LabelList with values ["prod", "test"] would be used for the key "env".
 */
export interface LabelList {
    /** List of label values associated with a specific label key. */
    values: string[];
}

/** Represents a billing account entity */
export interface BillingAccount {
    /** Unique identifier of the billing_account entity. */
    id: string;
    /** Human-readable display name of the billing account. */
    name: string;
}

/** Represents a service instance entity */
export interface ServiceInstance {
    /** Identifier of the service instance entity. */
    id: string;
    /** Type of the service instance: tracker, datalens, cloud, etc. */
    type: string;
    /** Human-readable display name of the service instance. */
    name: string;
    /**
     * Optional billing account identifier associated with this service instance
     * for requested consumption period.
     */
    billingAccountId: string;
}

/** Represents a cloud entity */
export interface Cloud {
    /** Unique identifier of the cloud entity. */
    id: string;
    /** Human-readable display name of the cloud. */
    name: string;
    /** Optional billing account identifier associated with this cloud. */
    billingAccountId: string;
}

/** Represents a folder entity */
export interface Folder {
    /** Unique identifier of the folder entity. */
    id: string;
    /** Human-readable display name of the folder. */
    name: string;
}

/** Represents a service entity */
export interface Service {
    /** Unique identifier of the service entity. */
    id: string;
    /** Service display name. */
    name: string;
    /** Service description. */
    description: string;
}

/** Represents a SKU (Stock Keeping Unit) */
export interface SKU {
    /** Unique identifier of the entity (SKU). */
    id: string;
    /** Product (SKU) name. */
    name: string;
    /** Russian-language display name */
    ruTranslation: string;
    /** English-language display name */
    enTranslation: string;
    /** Display name in language of `accept-language` header */
    translation: string;
    /** Unit of measurement for pricing (e.g., "hour", "byte", "1m*request"). */
    pricingUnit: string;
    /** The service ID this SKU belongs to; */
    serviceId: string;
}

/** Represents a resource entity */
export interface Resource {
    /** Unique identifier of the resource entity. */
    id: string;
    /** Human-readable display name of the resource. */
    name: string;
    /** Type of the service instance this resource is bound to (e.g. "cloud", "tracker", "datalens"). */
    serviceInstanceType: string;
}

/**
 * Represents a key-value label pair attached to resources for custom metadata tagging.
 * Labels allow grouping and filtering resources by user-defined dimensions.
 */
export interface Label {
    /** Label key (e.g., "region", "environment", "team", "project"). */
    key: string;
    /** The label value (e.g., "usa", "mexico", "prod", "test", "finance", "backend") */
    value: string;
}

const baseLabelList: object = { values: '' };

export const LabelList: {
    encode(message: LabelList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LabelList;
    fromJSON(object: any): LabelList;
    toJSON(message: LabelList): unknown;
    fromPartial<I extends Exact<DeepPartial<LabelList>, I>>(object: I): LabelList;
} = {
    encode(message: LabelList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.values) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LabelList {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLabelList } as LabelList;
        message.values = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.values.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LabelList {
        const message = { ...baseLabelList } as LabelList;
        message.values = (object.values ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: LabelList): unknown {
        const obj: any = {};
        if (message.values) {
            obj.values = message.values.map((e) => e);
        } else {
            obj.values = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LabelList>, I>>(object: I): LabelList {
        const message = { ...baseLabelList } as LabelList;
        message.values = object.values?.map((e) => e) || [];
        return message;
    },
};

const baseBillingAccount: object = { id: '', name: '' };

export const BillingAccount: {
    encode(message: BillingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BillingAccount;
    fromJSON(object: any): BillingAccount;
    toJSON(message: BillingAccount): unknown;
    fromPartial<I extends Exact<DeepPartial<BillingAccount>, I>>(object: I): BillingAccount;
} = {
    encode(message: BillingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
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
        return message;
    },

    toJSON(message: BillingAccount): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BillingAccount>, I>>(object: I): BillingAccount {
        const message = { ...baseBillingAccount } as BillingAccount;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        return message;
    },
};

const baseServiceInstance: object = { id: '', type: '', name: '', billingAccountId: '' };

export const ServiceInstance: {
    encode(message: ServiceInstance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceInstance;
    fromJSON(object: any): ServiceInstance;
    toJSON(message: ServiceInstance): unknown;
    fromPartial<I extends Exact<DeepPartial<ServiceInstance>, I>>(object: I): ServiceInstance;
} = {
    encode(message: ServiceInstance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== '') {
            writer.uint32(18).string(message.type);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.billingAccountId !== '') {
            writer.uint32(34).string(message.billingAccountId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceInstance {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseServiceInstance } as ServiceInstance;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.billingAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ServiceInstance {
        const message = { ...baseServiceInstance } as ServiceInstance;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.type = object.type !== undefined && object.type !== null ? String(object.type) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.billingAccountId =
            object.billingAccountId !== undefined && object.billingAccountId !== null
                ? String(object.billingAccountId)
                : '';
        return message;
    },

    toJSON(message: ServiceInstance): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined && (obj.type = message.type);
        message.name !== undefined && (obj.name = message.name);
        message.billingAccountId !== undefined && (obj.billingAccountId = message.billingAccountId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ServiceInstance>, I>>(object: I): ServiceInstance {
        const message = { ...baseServiceInstance } as ServiceInstance;
        message.id = object.id ?? '';
        message.type = object.type ?? '';
        message.name = object.name ?? '';
        message.billingAccountId = object.billingAccountId ?? '';
        return message;
    },
};

const baseCloud: object = { id: '', name: '', billingAccountId: '' };

export const Cloud: {
    encode(message: Cloud, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Cloud;
    fromJSON(object: any): Cloud;
    toJSON(message: Cloud): unknown;
    fromPartial<I extends Exact<DeepPartial<Cloud>, I>>(object: I): Cloud;
} = {
    encode(message: Cloud, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.billingAccountId !== '') {
            writer.uint32(26).string(message.billingAccountId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Cloud {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCloud } as Cloud;
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
                    message.billingAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Cloud {
        const message = { ...baseCloud } as Cloud;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.billingAccountId =
            object.billingAccountId !== undefined && object.billingAccountId !== null
                ? String(object.billingAccountId)
                : '';
        return message;
    },

    toJSON(message: Cloud): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.billingAccountId !== undefined && (obj.billingAccountId = message.billingAccountId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Cloud>, I>>(object: I): Cloud {
        const message = { ...baseCloud } as Cloud;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        message.billingAccountId = object.billingAccountId ?? '';
        return message;
    },
};

const baseFolder: object = { id: '', name: '' };

export const Folder: {
    encode(message: Folder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Folder;
    fromJSON(object: any): Folder;
    toJSON(message: Folder): unknown;
    fromPartial<I extends Exact<DeepPartial<Folder>, I>>(object: I): Folder;
} = {
    encode(message: Folder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Folder {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFolder } as Folder;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Folder {
        const message = { ...baseFolder } as Folder;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        return message;
    },

    toJSON(message: Folder): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Folder>, I>>(object: I): Folder {
        const message = { ...baseFolder } as Folder;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        return message;
    },
};

const baseService: object = { id: '', name: '', description: '' };

export const Service: {
    encode(message: Service, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Service;
    fromJSON(object: any): Service;
    toJSON(message: Service): unknown;
    fromPartial<I extends Exact<DeepPartial<Service>, I>>(object: I): Service;
} = {
    encode(message: Service, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Service {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseService } as Service;
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Service {
        const message = { ...baseService } as Service;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        return message;
    },

    toJSON(message: Service): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Service>, I>>(object: I): Service {
        const message = { ...baseService } as Service;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        return message;
    },
};

const baseSKU: object = {
    id: '',
    name: '',
    ruTranslation: '',
    enTranslation: '',
    translation: '',
    pricingUnit: '',
    serviceId: '',
};

export const SKU: {
    encode(message: SKU, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SKU;
    fromJSON(object: any): SKU;
    toJSON(message: SKU): unknown;
    fromPartial<I extends Exact<DeepPartial<SKU>, I>>(object: I): SKU;
} = {
    encode(message: SKU, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.ruTranslation !== '') {
            writer.uint32(26).string(message.ruTranslation);
        }
        if (message.enTranslation !== '') {
            writer.uint32(34).string(message.enTranslation);
        }
        if (message.translation !== '') {
            writer.uint32(58).string(message.translation);
        }
        if (message.pricingUnit !== '') {
            writer.uint32(42).string(message.pricingUnit);
        }
        if (message.serviceId !== '') {
            writer.uint32(50).string(message.serviceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SKU {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSKU } as SKU;
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
                    message.ruTranslation = reader.string();
                    break;
                case 4:
                    message.enTranslation = reader.string();
                    break;
                case 7:
                    message.translation = reader.string();
                    break;
                case 5:
                    message.pricingUnit = reader.string();
                    break;
                case 6:
                    message.serviceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SKU {
        const message = { ...baseSKU } as SKU;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.ruTranslation =
            object.ruTranslation !== undefined && object.ruTranslation !== null
                ? String(object.ruTranslation)
                : '';
        message.enTranslation =
            object.enTranslation !== undefined && object.enTranslation !== null
                ? String(object.enTranslation)
                : '';
        message.translation =
            object.translation !== undefined && object.translation !== null
                ? String(object.translation)
                : '';
        message.pricingUnit =
            object.pricingUnit !== undefined && object.pricingUnit !== null
                ? String(object.pricingUnit)
                : '';
        message.serviceId =
            object.serviceId !== undefined && object.serviceId !== null
                ? String(object.serviceId)
                : '';
        return message;
    },

    toJSON(message: SKU): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.ruTranslation !== undefined && (obj.ruTranslation = message.ruTranslation);
        message.enTranslation !== undefined && (obj.enTranslation = message.enTranslation);
        message.translation !== undefined && (obj.translation = message.translation);
        message.pricingUnit !== undefined && (obj.pricingUnit = message.pricingUnit);
        message.serviceId !== undefined && (obj.serviceId = message.serviceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SKU>, I>>(object: I): SKU {
        const message = { ...baseSKU } as SKU;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        message.ruTranslation = object.ruTranslation ?? '';
        message.enTranslation = object.enTranslation ?? '';
        message.translation = object.translation ?? '';
        message.pricingUnit = object.pricingUnit ?? '';
        message.serviceId = object.serviceId ?? '';
        return message;
    },
};

const baseResource: object = { id: '', name: '', serviceInstanceType: '' };

export const Resource: {
    encode(message: Resource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Resource;
    fromJSON(object: any): Resource;
    toJSON(message: Resource): unknown;
    fromPartial<I extends Exact<DeepPartial<Resource>, I>>(object: I): Resource;
} = {
    encode(message: Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.serviceInstanceType !== '') {
            writer.uint32(26).string(message.serviceInstanceType);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Resource {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResource } as Resource;
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
                    message.serviceInstanceType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Resource {
        const message = { ...baseResource } as Resource;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.serviceInstanceType =
            object.serviceInstanceType !== undefined && object.serviceInstanceType !== null
                ? String(object.serviceInstanceType)
                : '';
        return message;
    },

    toJSON(message: Resource): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.serviceInstanceType !== undefined &&
            (obj.serviceInstanceType = message.serviceInstanceType);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Resource>, I>>(object: I): Resource {
        const message = { ...baseResource } as Resource;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        message.serviceInstanceType = object.serviceInstanceType ?? '';
        return message;
    },
};

const baseLabel: object = { key: '', value: '' };

export const Label: {
    encode(message: Label, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Label;
    fromJSON(object: any): Label;
    toJSON(message: Label): unknown;
    fromPartial<I extends Exact<DeepPartial<Label>, I>>(object: I): Label;
} = {
    encode(message: Label, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Label {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLabel } as Label;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Label {
        const message = { ...baseLabel } as Label;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Label): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Label>, I>>(object: I): Label {
        const message = { ...baseLabel } as Label;
        message.key = object.key ?? '';
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
