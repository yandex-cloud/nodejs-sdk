/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { StringDecimal } from './common_types';
import { CreditDetails } from './credit';
import {
    BillingAccount,
    Cloud,
    Folder,
    Service,
    SKU,
    Resource,
    Label,
    ServiceInstance,
} from './billing_types';
import { Timestamp } from '../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.billing.usage_records.v1';

/**
 * Usage and billing data for the billing account entity in the report.
 * This represents the second level in the response structure hierarchy (entity-level totals),
 * containing both summary data for the specified billing account across the entire period and a time series breakdown.
 */
export interface BillingAccountUsageReportEntityData {
    /** Total cost associated with this billing account. */
    cost?: StringDecimal;
    /** Total credits (discounts, grants, adjustments) applied to this billing account. */
    creditDetails?: CreditDetails;
    /** Total expense (including cost and credit) for this billing account. */
    expense?: StringDecimal;
    /** Metadata for the specified billing account entity. */
    billingAccount?: BillingAccount;
    /** Time series with usage and billing details for each TimeGrouping period (e.g., daily). */
    periodic: UsageReportPeriodicData[];
}

/**
 * Usage and billing data for a cloud entity in the report.
 * This represents the second level in the response structure hierarchy (entity-level totals),
 * containing both summary data for the entity across the entire period and a time series breakdown.
 */
export interface CloudUsageReportEntityData {
    /** Total cost associated with this cloud. */
    cost?: StringDecimal;
    /** Total credits (discounts, grants, adjustments) applied to this cloud. */
    creditDetails?: CreditDetails;
    /** Total expense (including cost and credit) for this cloud. */
    expense?: StringDecimal;
    /** Metadata for the cloud entity. */
    cloud?: Cloud;
    /** Time series with usage and billing details for each TimeGrouping period (e.g., daily). */
    periodic: UsageReportPeriodicData[];
}

/**
 * Usage and billing data for a folder entity in the report.
 * This represents the second level in the response structure hierarchy (entity-level totals),
 * containing both summary data for the entity across the entire period and a time series breakdown.
 */
export interface FolderUsageReportEntityData {
    /** Total cost associated with this folder. */
    cost?: StringDecimal;
    /** Total credits (discounts, grants, adjustments) applied to this folder. */
    creditDetails?: CreditDetails;
    /** Total expense (including cost and credit) for this folder. */
    expense?: StringDecimal;
    /** Metadata for the folder entity. */
    folder?: Folder;
    /** Time series with usage and billing details for each TimeGrouping period (e.g., daily). */
    periodic: UsageReportPeriodicData[];
}

/**
 * Usage and billing data for a service entity in the report.
 * This represents the second level in the response structure hierarchy (entity-level totals),
 * containing both summary data for the entity across the entire period and a time series breakdown.
 */
export interface ServiceUsageReportEntityData {
    /** Total cost associated with this service. */
    cost?: StringDecimal;
    /** Total credits (discounts, grants, adjustments) applied to this service. */
    creditDetails?: CreditDetails;
    /** Total expense (including cost and credit) for this service. */
    expense?: StringDecimal;
    /** Metadata for the service entity. */
    service?: Service;
    /** Time series with usage and billing details for each TimeGrouping period (e.g., daily). */
    periodic: UsageReportPeriodicData[];
}

/**
 * Usage and billing data for a SKU entity in the report.
 * This represents the second level in the response structure hierarchy (entity-level totals),
 * containing both summary data for the entity across the entire period and a time series breakdown.
 */
export interface SKUUsageReportEntityData {
    /** Total cost associated with this entity. */
    cost?: StringDecimal;
    /** Total credits (discounts, grants, adjustments) applied to this entity. */
    creditDetails?: CreditDetails;
    /** Total expense (including cost and credit) for this entity. */
    expense?: StringDecimal;
    /** Total resource usage (pricing quantity) for this entity, measured in pricing units. */
    pricingQuantity?: StringDecimal;
    /** Metadata for a product/SKU entity. */
    sku?: SKU;
    /** Time series with usage and billing details for each TimeGrouping period (e.g., daily). */
    periodic: UsageReportPeriodicData[];
}

/**
 * Usage and billing data for a resource entity in the report.
 * This represents the second level in the response structure hierarchy (entity-level totals),
 * containing both summary data for the entity across the entire period and a time series breakdown.
 */
export interface ResourceUsageReportEntityData {
    /** Total cost associated with this resource. */
    cost?: StringDecimal;
    /** Total credits (discounts, grants, adjustments) applied to this label group. */
    creditDetails?: CreditDetails;
    /** Total expense (including cost and credit) for this resource group. */
    expense?: StringDecimal;
    /** Metadata for the resource-based grouping. */
    resource?: Resource;
    /** Time series with usage and billing details for each TimeGrouping period (e.g., daily). */
    periodic: UsageReportPeriodicData[];
}

/**
 * Usage and billing data for a label-based entity/grouping in the report.
 * This represents the second level in the response structure hierarchy (entity-level totals),
 * containing both summary data for the entity across the entire period and a time series breakdown.
 */
export interface LabelUsageReportEntityData {
    /** Total cost associated with this label group. */
    cost?: StringDecimal;
    /** Total credits (discounts, grants, adjustments) applied to this label group. */
    creditDetails?: CreditDetails;
    /** Total expense (including cost and credit) for this label group. */
    expense?: StringDecimal;
    /** Metadata for the label-based grouping. */
    label?: Label;
    /** Time series with usage and billing details for each TimeGrouping period (e.g., daily). */
    periodic: UsageReportPeriodicData[];
}

/**
 * Usage and billing data for a service instance entity in the report.
 * This represents the second level in the response structure hierarchy (entity-level totals),
 * containing both summary data for the entity across the entire period and a time series breakdown.
 */
export interface ServiceInstanceUsageReportEntityData {
    /** Total cost associated with this service instance. */
    cost?: StringDecimal;
    /** Total credits (discounts, grants, adjustments) applied to this service instance. */
    creditDetails?: CreditDetails;
    /** Total expense (including cost and credit) for this service instance. */
    expense?: StringDecimal;
    /** Metadata for the service instance entity. */
    serviceInstance?: ServiceInstance;
    /** Time series with usage and billing details for each TimeGrouping period (e.g., daily). */
    periodic: UsageReportPeriodicData[];
}

/**
 * Represents usage and billing data for a specific aggregation period (e.g., a single day, month).
 * This message is part of the third level in the response structure hierarchy, providing the
 * time series breakdown for entities. It appears in the 'periodic' field of each entity data object,
 * containing financial metrics for each time interval within the requested date range.
 */
export interface UsageReportPeriodicData {
    /**
     * Cost incurred during this specific period.
     * This is the raw cost before any credits are applied.
     */
    cost?: StringDecimal;
    /**
     * Credits applied during this period.
     * Contains a detailed breakdown of all credit types (monetary grants, volume incentives, etc.)
     * that were applied during this specific time interval.
     */
    creditDetails?: CreditDetails;
    /**
     * Total expense (including cost and credit) for this period.
     * This is the final billable amount after all credits have been applied.
     * Formula: expense = cost + credit_details.credit
     */
    expense?: StringDecimal;
    /** Timestamp indicating the beginning of the TimeGrouping period. */
    timestamp?: Date;
}

const baseBillingAccountUsageReportEntityData: object = {};

export const BillingAccountUsageReportEntityData: {
    encode(message: BillingAccountUsageReportEntityData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BillingAccountUsageReportEntityData;
    fromJSON(object: any): BillingAccountUsageReportEntityData;
    toJSON(message: BillingAccountUsageReportEntityData): unknown;
    fromPartial<I extends Exact<DeepPartial<BillingAccountUsageReportEntityData>, I>>(object: I): BillingAccountUsageReportEntityData;
} = {
    encode(
        message: BillingAccountUsageReportEntityData,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.cost !== undefined) {
            StringDecimal.encode(message.cost, writer.uint32(10).fork()).ldelim();
        }
        if (message.creditDetails !== undefined) {
            CreditDetails.encode(message.creditDetails, writer.uint32(18).fork()).ldelim();
        }
        if (message.expense !== undefined) {
            StringDecimal.encode(message.expense, writer.uint32(26).fork()).ldelim();
        }
        if (message.billingAccount !== undefined) {
            BillingAccount.encode(message.billingAccount, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.periodic) {
            UsageReportPeriodicData.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BillingAccountUsageReportEntityData {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseBillingAccountUsageReportEntityData,
        } as BillingAccountUsageReportEntityData;
        message.periodic = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cost = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.creditDetails = CreditDetails.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.expense = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.billingAccount = BillingAccount.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.periodic.push(UsageReportPeriodicData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BillingAccountUsageReportEntityData {
        const message = {
            ...baseBillingAccountUsageReportEntityData,
        } as BillingAccountUsageReportEntityData;
        message.cost =
            object.cost !== undefined && object.cost !== null
                ? StringDecimal.fromJSON(object.cost)
                : undefined;
        message.creditDetails =
            object.creditDetails !== undefined && object.creditDetails !== null
                ? CreditDetails.fromJSON(object.creditDetails)
                : undefined;
        message.expense =
            object.expense !== undefined && object.expense !== null
                ? StringDecimal.fromJSON(object.expense)
                : undefined;
        message.billingAccount =
            object.billingAccount !== undefined && object.billingAccount !== null
                ? BillingAccount.fromJSON(object.billingAccount)
                : undefined;
        message.periodic = (object.periodic ?? []).map((e: any) =>
            UsageReportPeriodicData.fromJSON(e),
        );
        return message;
    },

    toJSON(message: BillingAccountUsageReportEntityData): unknown {
        const obj: any = {};
        message.cost !== undefined &&
            (obj.cost = message.cost ? StringDecimal.toJSON(message.cost) : undefined);
        message.creditDetails !== undefined &&
            (obj.creditDetails = message.creditDetails
                ? CreditDetails.toJSON(message.creditDetails)
                : undefined);
        message.expense !== undefined &&
            (obj.expense = message.expense ? StringDecimal.toJSON(message.expense) : undefined);
        message.billingAccount !== undefined &&
            (obj.billingAccount = message.billingAccount
                ? BillingAccount.toJSON(message.billingAccount)
                : undefined);
        if (message.periodic) {
            obj.periodic = message.periodic.map((e) =>
                e ? UsageReportPeriodicData.toJSON(e) : undefined,
            );
        } else {
            obj.periodic = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BillingAccountUsageReportEntityData>, I>>(
        object: I,
    ): BillingAccountUsageReportEntityData {
        const message = {
            ...baseBillingAccountUsageReportEntityData,
        } as BillingAccountUsageReportEntityData;
        message.cost =
            object.cost !== undefined && object.cost !== null
                ? StringDecimal.fromPartial(object.cost)
                : undefined;
        message.creditDetails =
            object.creditDetails !== undefined && object.creditDetails !== null
                ? CreditDetails.fromPartial(object.creditDetails)
                : undefined;
        message.expense =
            object.expense !== undefined && object.expense !== null
                ? StringDecimal.fromPartial(object.expense)
                : undefined;
        message.billingAccount =
            object.billingAccount !== undefined && object.billingAccount !== null
                ? BillingAccount.fromPartial(object.billingAccount)
                : undefined;
        message.periodic =
            object.periodic?.map((e) => UsageReportPeriodicData.fromPartial(e)) || [];
        return message;
    },
};

const baseCloudUsageReportEntityData: object = {};

export const CloudUsageReportEntityData: {
    encode(message: CloudUsageReportEntityData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CloudUsageReportEntityData;
    fromJSON(object: any): CloudUsageReportEntityData;
    toJSON(message: CloudUsageReportEntityData): unknown;
    fromPartial<I extends Exact<DeepPartial<CloudUsageReportEntityData>, I>>(object: I): CloudUsageReportEntityData;
} = {
    encode(
        message: CloudUsageReportEntityData,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.cost !== undefined) {
            StringDecimal.encode(message.cost, writer.uint32(10).fork()).ldelim();
        }
        if (message.creditDetails !== undefined) {
            CreditDetails.encode(message.creditDetails, writer.uint32(18).fork()).ldelim();
        }
        if (message.expense !== undefined) {
            StringDecimal.encode(message.expense, writer.uint32(26).fork()).ldelim();
        }
        if (message.cloud !== undefined) {
            Cloud.encode(message.cloud, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.periodic) {
            UsageReportPeriodicData.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CloudUsageReportEntityData {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCloudUsageReportEntityData } as CloudUsageReportEntityData;
        message.periodic = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cost = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.creditDetails = CreditDetails.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.expense = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.cloud = Cloud.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.periodic.push(UsageReportPeriodicData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CloudUsageReportEntityData {
        const message = { ...baseCloudUsageReportEntityData } as CloudUsageReportEntityData;
        message.cost =
            object.cost !== undefined && object.cost !== null
                ? StringDecimal.fromJSON(object.cost)
                : undefined;
        message.creditDetails =
            object.creditDetails !== undefined && object.creditDetails !== null
                ? CreditDetails.fromJSON(object.creditDetails)
                : undefined;
        message.expense =
            object.expense !== undefined && object.expense !== null
                ? StringDecimal.fromJSON(object.expense)
                : undefined;
        message.cloud =
            object.cloud !== undefined && object.cloud !== null
                ? Cloud.fromJSON(object.cloud)
                : undefined;
        message.periodic = (object.periodic ?? []).map((e: any) =>
            UsageReportPeriodicData.fromJSON(e),
        );
        return message;
    },

    toJSON(message: CloudUsageReportEntityData): unknown {
        const obj: any = {};
        message.cost !== undefined &&
            (obj.cost = message.cost ? StringDecimal.toJSON(message.cost) : undefined);
        message.creditDetails !== undefined &&
            (obj.creditDetails = message.creditDetails
                ? CreditDetails.toJSON(message.creditDetails)
                : undefined);
        message.expense !== undefined &&
            (obj.expense = message.expense ? StringDecimal.toJSON(message.expense) : undefined);
        message.cloud !== undefined &&
            (obj.cloud = message.cloud ? Cloud.toJSON(message.cloud) : undefined);
        if (message.periodic) {
            obj.periodic = message.periodic.map((e) =>
                e ? UsageReportPeriodicData.toJSON(e) : undefined,
            );
        } else {
            obj.periodic = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CloudUsageReportEntityData>, I>>(
        object: I,
    ): CloudUsageReportEntityData {
        const message = { ...baseCloudUsageReportEntityData } as CloudUsageReportEntityData;
        message.cost =
            object.cost !== undefined && object.cost !== null
                ? StringDecimal.fromPartial(object.cost)
                : undefined;
        message.creditDetails =
            object.creditDetails !== undefined && object.creditDetails !== null
                ? CreditDetails.fromPartial(object.creditDetails)
                : undefined;
        message.expense =
            object.expense !== undefined && object.expense !== null
                ? StringDecimal.fromPartial(object.expense)
                : undefined;
        message.cloud =
            object.cloud !== undefined && object.cloud !== null
                ? Cloud.fromPartial(object.cloud)
                : undefined;
        message.periodic =
            object.periodic?.map((e) => UsageReportPeriodicData.fromPartial(e)) || [];
        return message;
    },
};

const baseFolderUsageReportEntityData: object = {};

export const FolderUsageReportEntityData: {
    encode(message: FolderUsageReportEntityData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FolderUsageReportEntityData;
    fromJSON(object: any): FolderUsageReportEntityData;
    toJSON(message: FolderUsageReportEntityData): unknown;
    fromPartial<I extends Exact<DeepPartial<FolderUsageReportEntityData>, I>>(object: I): FolderUsageReportEntityData;
} = {
    encode(
        message: FolderUsageReportEntityData,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.cost !== undefined) {
            StringDecimal.encode(message.cost, writer.uint32(10).fork()).ldelim();
        }
        if (message.creditDetails !== undefined) {
            CreditDetails.encode(message.creditDetails, writer.uint32(18).fork()).ldelim();
        }
        if (message.expense !== undefined) {
            StringDecimal.encode(message.expense, writer.uint32(26).fork()).ldelim();
        }
        if (message.folder !== undefined) {
            Folder.encode(message.folder, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.periodic) {
            UsageReportPeriodicData.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): FolderUsageReportEntityData {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFolderUsageReportEntityData } as FolderUsageReportEntityData;
        message.periodic = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cost = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.creditDetails = CreditDetails.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.expense = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.folder = Folder.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.periodic.push(UsageReportPeriodicData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): FolderUsageReportEntityData {
        const message = { ...baseFolderUsageReportEntityData } as FolderUsageReportEntityData;
        message.cost =
            object.cost !== undefined && object.cost !== null
                ? StringDecimal.fromJSON(object.cost)
                : undefined;
        message.creditDetails =
            object.creditDetails !== undefined && object.creditDetails !== null
                ? CreditDetails.fromJSON(object.creditDetails)
                : undefined;
        message.expense =
            object.expense !== undefined && object.expense !== null
                ? StringDecimal.fromJSON(object.expense)
                : undefined;
        message.folder =
            object.folder !== undefined && object.folder !== null
                ? Folder.fromJSON(object.folder)
                : undefined;
        message.periodic = (object.periodic ?? []).map((e: any) =>
            UsageReportPeriodicData.fromJSON(e),
        );
        return message;
    },

    toJSON(message: FolderUsageReportEntityData): unknown {
        const obj: any = {};
        message.cost !== undefined &&
            (obj.cost = message.cost ? StringDecimal.toJSON(message.cost) : undefined);
        message.creditDetails !== undefined &&
            (obj.creditDetails = message.creditDetails
                ? CreditDetails.toJSON(message.creditDetails)
                : undefined);
        message.expense !== undefined &&
            (obj.expense = message.expense ? StringDecimal.toJSON(message.expense) : undefined);
        message.folder !== undefined &&
            (obj.folder = message.folder ? Folder.toJSON(message.folder) : undefined);
        if (message.periodic) {
            obj.periodic = message.periodic.map((e) =>
                e ? UsageReportPeriodicData.toJSON(e) : undefined,
            );
        } else {
            obj.periodic = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<FolderUsageReportEntityData>, I>>(
        object: I,
    ): FolderUsageReportEntityData {
        const message = { ...baseFolderUsageReportEntityData } as FolderUsageReportEntityData;
        message.cost =
            object.cost !== undefined && object.cost !== null
                ? StringDecimal.fromPartial(object.cost)
                : undefined;
        message.creditDetails =
            object.creditDetails !== undefined && object.creditDetails !== null
                ? CreditDetails.fromPartial(object.creditDetails)
                : undefined;
        message.expense =
            object.expense !== undefined && object.expense !== null
                ? StringDecimal.fromPartial(object.expense)
                : undefined;
        message.folder =
            object.folder !== undefined && object.folder !== null
                ? Folder.fromPartial(object.folder)
                : undefined;
        message.periodic =
            object.periodic?.map((e) => UsageReportPeriodicData.fromPartial(e)) || [];
        return message;
    },
};

const baseServiceUsageReportEntityData: object = {};

export const ServiceUsageReportEntityData: {
    encode(message: ServiceUsageReportEntityData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceUsageReportEntityData;
    fromJSON(object: any): ServiceUsageReportEntityData;
    toJSON(message: ServiceUsageReportEntityData): unknown;
    fromPartial<I extends Exact<DeepPartial<ServiceUsageReportEntityData>, I>>(object: I): ServiceUsageReportEntityData;
} = {
    encode(
        message: ServiceUsageReportEntityData,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.cost !== undefined) {
            StringDecimal.encode(message.cost, writer.uint32(10).fork()).ldelim();
        }
        if (message.creditDetails !== undefined) {
            CreditDetails.encode(message.creditDetails, writer.uint32(18).fork()).ldelim();
        }
        if (message.expense !== undefined) {
            StringDecimal.encode(message.expense, writer.uint32(26).fork()).ldelim();
        }
        if (message.service !== undefined) {
            Service.encode(message.service, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.periodic) {
            UsageReportPeriodicData.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceUsageReportEntityData {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseServiceUsageReportEntityData } as ServiceUsageReportEntityData;
        message.periodic = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cost = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.creditDetails = CreditDetails.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.expense = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.service = Service.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.periodic.push(UsageReportPeriodicData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ServiceUsageReportEntityData {
        const message = { ...baseServiceUsageReportEntityData } as ServiceUsageReportEntityData;
        message.cost =
            object.cost !== undefined && object.cost !== null
                ? StringDecimal.fromJSON(object.cost)
                : undefined;
        message.creditDetails =
            object.creditDetails !== undefined && object.creditDetails !== null
                ? CreditDetails.fromJSON(object.creditDetails)
                : undefined;
        message.expense =
            object.expense !== undefined && object.expense !== null
                ? StringDecimal.fromJSON(object.expense)
                : undefined;
        message.service =
            object.service !== undefined && object.service !== null
                ? Service.fromJSON(object.service)
                : undefined;
        message.periodic = (object.periodic ?? []).map((e: any) =>
            UsageReportPeriodicData.fromJSON(e),
        );
        return message;
    },

    toJSON(message: ServiceUsageReportEntityData): unknown {
        const obj: any = {};
        message.cost !== undefined &&
            (obj.cost = message.cost ? StringDecimal.toJSON(message.cost) : undefined);
        message.creditDetails !== undefined &&
            (obj.creditDetails = message.creditDetails
                ? CreditDetails.toJSON(message.creditDetails)
                : undefined);
        message.expense !== undefined &&
            (obj.expense = message.expense ? StringDecimal.toJSON(message.expense) : undefined);
        message.service !== undefined &&
            (obj.service = message.service ? Service.toJSON(message.service) : undefined);
        if (message.periodic) {
            obj.periodic = message.periodic.map((e) =>
                e ? UsageReportPeriodicData.toJSON(e) : undefined,
            );
        } else {
            obj.periodic = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ServiceUsageReportEntityData>, I>>(
        object: I,
    ): ServiceUsageReportEntityData {
        const message = { ...baseServiceUsageReportEntityData } as ServiceUsageReportEntityData;
        message.cost =
            object.cost !== undefined && object.cost !== null
                ? StringDecimal.fromPartial(object.cost)
                : undefined;
        message.creditDetails =
            object.creditDetails !== undefined && object.creditDetails !== null
                ? CreditDetails.fromPartial(object.creditDetails)
                : undefined;
        message.expense =
            object.expense !== undefined && object.expense !== null
                ? StringDecimal.fromPartial(object.expense)
                : undefined;
        message.service =
            object.service !== undefined && object.service !== null
                ? Service.fromPartial(object.service)
                : undefined;
        message.periodic =
            object.periodic?.map((e) => UsageReportPeriodicData.fromPartial(e)) || [];
        return message;
    },
};

const baseSKUUsageReportEntityData: object = {};

export const SKUUsageReportEntityData: {
    encode(message: SKUUsageReportEntityData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SKUUsageReportEntityData;
    fromJSON(object: any): SKUUsageReportEntityData;
    toJSON(message: SKUUsageReportEntityData): unknown;
    fromPartial<I extends Exact<DeepPartial<SKUUsageReportEntityData>, I>>(object: I): SKUUsageReportEntityData;
} = {
    encode(
        message: SKUUsageReportEntityData,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.cost !== undefined) {
            StringDecimal.encode(message.cost, writer.uint32(10).fork()).ldelim();
        }
        if (message.creditDetails !== undefined) {
            CreditDetails.encode(message.creditDetails, writer.uint32(18).fork()).ldelim();
        }
        if (message.expense !== undefined) {
            StringDecimal.encode(message.expense, writer.uint32(26).fork()).ldelim();
        }
        if (message.pricingQuantity !== undefined) {
            StringDecimal.encode(message.pricingQuantity, writer.uint32(34).fork()).ldelim();
        }
        if (message.sku !== undefined) {
            SKU.encode(message.sku, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.periodic) {
            UsageReportPeriodicData.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SKUUsageReportEntityData {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSKUUsageReportEntityData } as SKUUsageReportEntityData;
        message.periodic = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cost = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.creditDetails = CreditDetails.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.expense = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.pricingQuantity = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.sku = SKU.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.periodic.push(UsageReportPeriodicData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SKUUsageReportEntityData {
        const message = { ...baseSKUUsageReportEntityData } as SKUUsageReportEntityData;
        message.cost =
            object.cost !== undefined && object.cost !== null
                ? StringDecimal.fromJSON(object.cost)
                : undefined;
        message.creditDetails =
            object.creditDetails !== undefined && object.creditDetails !== null
                ? CreditDetails.fromJSON(object.creditDetails)
                : undefined;
        message.expense =
            object.expense !== undefined && object.expense !== null
                ? StringDecimal.fromJSON(object.expense)
                : undefined;
        message.pricingQuantity =
            object.pricingQuantity !== undefined && object.pricingQuantity !== null
                ? StringDecimal.fromJSON(object.pricingQuantity)
                : undefined;
        message.sku =
            object.sku !== undefined && object.sku !== null ? SKU.fromJSON(object.sku) : undefined;
        message.periodic = (object.periodic ?? []).map((e: any) =>
            UsageReportPeriodicData.fromJSON(e),
        );
        return message;
    },

    toJSON(message: SKUUsageReportEntityData): unknown {
        const obj: any = {};
        message.cost !== undefined &&
            (obj.cost = message.cost ? StringDecimal.toJSON(message.cost) : undefined);
        message.creditDetails !== undefined &&
            (obj.creditDetails = message.creditDetails
                ? CreditDetails.toJSON(message.creditDetails)
                : undefined);
        message.expense !== undefined &&
            (obj.expense = message.expense ? StringDecimal.toJSON(message.expense) : undefined);
        message.pricingQuantity !== undefined &&
            (obj.pricingQuantity = message.pricingQuantity
                ? StringDecimal.toJSON(message.pricingQuantity)
                : undefined);
        message.sku !== undefined && (obj.sku = message.sku ? SKU.toJSON(message.sku) : undefined);
        if (message.periodic) {
            obj.periodic = message.periodic.map((e) =>
                e ? UsageReportPeriodicData.toJSON(e) : undefined,
            );
        } else {
            obj.periodic = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SKUUsageReportEntityData>, I>>(
        object: I,
    ): SKUUsageReportEntityData {
        const message = { ...baseSKUUsageReportEntityData } as SKUUsageReportEntityData;
        message.cost =
            object.cost !== undefined && object.cost !== null
                ? StringDecimal.fromPartial(object.cost)
                : undefined;
        message.creditDetails =
            object.creditDetails !== undefined && object.creditDetails !== null
                ? CreditDetails.fromPartial(object.creditDetails)
                : undefined;
        message.expense =
            object.expense !== undefined && object.expense !== null
                ? StringDecimal.fromPartial(object.expense)
                : undefined;
        message.pricingQuantity =
            object.pricingQuantity !== undefined && object.pricingQuantity !== null
                ? StringDecimal.fromPartial(object.pricingQuantity)
                : undefined;
        message.sku =
            object.sku !== undefined && object.sku !== null
                ? SKU.fromPartial(object.sku)
                : undefined;
        message.periodic =
            object.periodic?.map((e) => UsageReportPeriodicData.fromPartial(e)) || [];
        return message;
    },
};

const baseResourceUsageReportEntityData: object = {};

export const ResourceUsageReportEntityData: {
    encode(message: ResourceUsageReportEntityData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceUsageReportEntityData;
    fromJSON(object: any): ResourceUsageReportEntityData;
    toJSON(message: ResourceUsageReportEntityData): unknown;
    fromPartial<I extends Exact<DeepPartial<ResourceUsageReportEntityData>, I>>(object: I): ResourceUsageReportEntityData;
} = {
    encode(
        message: ResourceUsageReportEntityData,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.cost !== undefined) {
            StringDecimal.encode(message.cost, writer.uint32(10).fork()).ldelim();
        }
        if (message.creditDetails !== undefined) {
            CreditDetails.encode(message.creditDetails, writer.uint32(18).fork()).ldelim();
        }
        if (message.expense !== undefined) {
            StringDecimal.encode(message.expense, writer.uint32(26).fork()).ldelim();
        }
        if (message.resource !== undefined) {
            Resource.encode(message.resource, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.periodic) {
            UsageReportPeriodicData.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceUsageReportEntityData {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResourceUsageReportEntityData } as ResourceUsageReportEntityData;
        message.periodic = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cost = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.creditDetails = CreditDetails.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.expense = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.resource = Resource.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.periodic.push(UsageReportPeriodicData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceUsageReportEntityData {
        const message = { ...baseResourceUsageReportEntityData } as ResourceUsageReportEntityData;
        message.cost =
            object.cost !== undefined && object.cost !== null
                ? StringDecimal.fromJSON(object.cost)
                : undefined;
        message.creditDetails =
            object.creditDetails !== undefined && object.creditDetails !== null
                ? CreditDetails.fromJSON(object.creditDetails)
                : undefined;
        message.expense =
            object.expense !== undefined && object.expense !== null
                ? StringDecimal.fromJSON(object.expense)
                : undefined;
        message.resource =
            object.resource !== undefined && object.resource !== null
                ? Resource.fromJSON(object.resource)
                : undefined;
        message.periodic = (object.periodic ?? []).map((e: any) =>
            UsageReportPeriodicData.fromJSON(e),
        );
        return message;
    },

    toJSON(message: ResourceUsageReportEntityData): unknown {
        const obj: any = {};
        message.cost !== undefined &&
            (obj.cost = message.cost ? StringDecimal.toJSON(message.cost) : undefined);
        message.creditDetails !== undefined &&
            (obj.creditDetails = message.creditDetails
                ? CreditDetails.toJSON(message.creditDetails)
                : undefined);
        message.expense !== undefined &&
            (obj.expense = message.expense ? StringDecimal.toJSON(message.expense) : undefined);
        message.resource !== undefined &&
            (obj.resource = message.resource ? Resource.toJSON(message.resource) : undefined);
        if (message.periodic) {
            obj.periodic = message.periodic.map((e) =>
                e ? UsageReportPeriodicData.toJSON(e) : undefined,
            );
        } else {
            obj.periodic = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResourceUsageReportEntityData>, I>>(
        object: I,
    ): ResourceUsageReportEntityData {
        const message = { ...baseResourceUsageReportEntityData } as ResourceUsageReportEntityData;
        message.cost =
            object.cost !== undefined && object.cost !== null
                ? StringDecimal.fromPartial(object.cost)
                : undefined;
        message.creditDetails =
            object.creditDetails !== undefined && object.creditDetails !== null
                ? CreditDetails.fromPartial(object.creditDetails)
                : undefined;
        message.expense =
            object.expense !== undefined && object.expense !== null
                ? StringDecimal.fromPartial(object.expense)
                : undefined;
        message.resource =
            object.resource !== undefined && object.resource !== null
                ? Resource.fromPartial(object.resource)
                : undefined;
        message.periodic =
            object.periodic?.map((e) => UsageReportPeriodicData.fromPartial(e)) || [];
        return message;
    },
};

const baseLabelUsageReportEntityData: object = {};

export const LabelUsageReportEntityData: {
    encode(message: LabelUsageReportEntityData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LabelUsageReportEntityData;
    fromJSON(object: any): LabelUsageReportEntityData;
    toJSON(message: LabelUsageReportEntityData): unknown;
    fromPartial<I extends Exact<DeepPartial<LabelUsageReportEntityData>, I>>(object: I): LabelUsageReportEntityData;
} = {
    encode(
        message: LabelUsageReportEntityData,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.cost !== undefined) {
            StringDecimal.encode(message.cost, writer.uint32(10).fork()).ldelim();
        }
        if (message.creditDetails !== undefined) {
            CreditDetails.encode(message.creditDetails, writer.uint32(18).fork()).ldelim();
        }
        if (message.expense !== undefined) {
            StringDecimal.encode(message.expense, writer.uint32(26).fork()).ldelim();
        }
        if (message.label !== undefined) {
            Label.encode(message.label, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.periodic) {
            UsageReportPeriodicData.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LabelUsageReportEntityData {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLabelUsageReportEntityData } as LabelUsageReportEntityData;
        message.periodic = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cost = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.creditDetails = CreditDetails.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.expense = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.label = Label.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.periodic.push(UsageReportPeriodicData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LabelUsageReportEntityData {
        const message = { ...baseLabelUsageReportEntityData } as LabelUsageReportEntityData;
        message.cost =
            object.cost !== undefined && object.cost !== null
                ? StringDecimal.fromJSON(object.cost)
                : undefined;
        message.creditDetails =
            object.creditDetails !== undefined && object.creditDetails !== null
                ? CreditDetails.fromJSON(object.creditDetails)
                : undefined;
        message.expense =
            object.expense !== undefined && object.expense !== null
                ? StringDecimal.fromJSON(object.expense)
                : undefined;
        message.label =
            object.label !== undefined && object.label !== null
                ? Label.fromJSON(object.label)
                : undefined;
        message.periodic = (object.periodic ?? []).map((e: any) =>
            UsageReportPeriodicData.fromJSON(e),
        );
        return message;
    },

    toJSON(message: LabelUsageReportEntityData): unknown {
        const obj: any = {};
        message.cost !== undefined &&
            (obj.cost = message.cost ? StringDecimal.toJSON(message.cost) : undefined);
        message.creditDetails !== undefined &&
            (obj.creditDetails = message.creditDetails
                ? CreditDetails.toJSON(message.creditDetails)
                : undefined);
        message.expense !== undefined &&
            (obj.expense = message.expense ? StringDecimal.toJSON(message.expense) : undefined);
        message.label !== undefined &&
            (obj.label = message.label ? Label.toJSON(message.label) : undefined);
        if (message.periodic) {
            obj.periodic = message.periodic.map((e) =>
                e ? UsageReportPeriodicData.toJSON(e) : undefined,
            );
        } else {
            obj.periodic = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LabelUsageReportEntityData>, I>>(
        object: I,
    ): LabelUsageReportEntityData {
        const message = { ...baseLabelUsageReportEntityData } as LabelUsageReportEntityData;
        message.cost =
            object.cost !== undefined && object.cost !== null
                ? StringDecimal.fromPartial(object.cost)
                : undefined;
        message.creditDetails =
            object.creditDetails !== undefined && object.creditDetails !== null
                ? CreditDetails.fromPartial(object.creditDetails)
                : undefined;
        message.expense =
            object.expense !== undefined && object.expense !== null
                ? StringDecimal.fromPartial(object.expense)
                : undefined;
        message.label =
            object.label !== undefined && object.label !== null
                ? Label.fromPartial(object.label)
                : undefined;
        message.periodic =
            object.periodic?.map((e) => UsageReportPeriodicData.fromPartial(e)) || [];
        return message;
    },
};

const baseServiceInstanceUsageReportEntityData: object = {};

export const ServiceInstanceUsageReportEntityData: {
    encode(message: ServiceInstanceUsageReportEntityData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceInstanceUsageReportEntityData;
    fromJSON(object: any): ServiceInstanceUsageReportEntityData;
    toJSON(message: ServiceInstanceUsageReportEntityData): unknown;
    fromPartial<I extends Exact<DeepPartial<ServiceInstanceUsageReportEntityData>, I>>(object: I): ServiceInstanceUsageReportEntityData;
} = {
    encode(
        message: ServiceInstanceUsageReportEntityData,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.cost !== undefined) {
            StringDecimal.encode(message.cost, writer.uint32(10).fork()).ldelim();
        }
        if (message.creditDetails !== undefined) {
            CreditDetails.encode(message.creditDetails, writer.uint32(18).fork()).ldelim();
        }
        if (message.expense !== undefined) {
            StringDecimal.encode(message.expense, writer.uint32(26).fork()).ldelim();
        }
        if (message.serviceInstance !== undefined) {
            ServiceInstance.encode(message.serviceInstance, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.periodic) {
            UsageReportPeriodicData.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceInstanceUsageReportEntityData {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseServiceInstanceUsageReportEntityData,
        } as ServiceInstanceUsageReportEntityData;
        message.periodic = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cost = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.creditDetails = CreditDetails.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.expense = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.serviceInstance = ServiceInstance.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.periodic.push(UsageReportPeriodicData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ServiceInstanceUsageReportEntityData {
        const message = {
            ...baseServiceInstanceUsageReportEntityData,
        } as ServiceInstanceUsageReportEntityData;
        message.cost =
            object.cost !== undefined && object.cost !== null
                ? StringDecimal.fromJSON(object.cost)
                : undefined;
        message.creditDetails =
            object.creditDetails !== undefined && object.creditDetails !== null
                ? CreditDetails.fromJSON(object.creditDetails)
                : undefined;
        message.expense =
            object.expense !== undefined && object.expense !== null
                ? StringDecimal.fromJSON(object.expense)
                : undefined;
        message.serviceInstance =
            object.serviceInstance !== undefined && object.serviceInstance !== null
                ? ServiceInstance.fromJSON(object.serviceInstance)
                : undefined;
        message.periodic = (object.periodic ?? []).map((e: any) =>
            UsageReportPeriodicData.fromJSON(e),
        );
        return message;
    },

    toJSON(message: ServiceInstanceUsageReportEntityData): unknown {
        const obj: any = {};
        message.cost !== undefined &&
            (obj.cost = message.cost ? StringDecimal.toJSON(message.cost) : undefined);
        message.creditDetails !== undefined &&
            (obj.creditDetails = message.creditDetails
                ? CreditDetails.toJSON(message.creditDetails)
                : undefined);
        message.expense !== undefined &&
            (obj.expense = message.expense ? StringDecimal.toJSON(message.expense) : undefined);
        message.serviceInstance !== undefined &&
            (obj.serviceInstance = message.serviceInstance
                ? ServiceInstance.toJSON(message.serviceInstance)
                : undefined);
        if (message.periodic) {
            obj.periodic = message.periodic.map((e) =>
                e ? UsageReportPeriodicData.toJSON(e) : undefined,
            );
        } else {
            obj.periodic = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ServiceInstanceUsageReportEntityData>, I>>(
        object: I,
    ): ServiceInstanceUsageReportEntityData {
        const message = {
            ...baseServiceInstanceUsageReportEntityData,
        } as ServiceInstanceUsageReportEntityData;
        message.cost =
            object.cost !== undefined && object.cost !== null
                ? StringDecimal.fromPartial(object.cost)
                : undefined;
        message.creditDetails =
            object.creditDetails !== undefined && object.creditDetails !== null
                ? CreditDetails.fromPartial(object.creditDetails)
                : undefined;
        message.expense =
            object.expense !== undefined && object.expense !== null
                ? StringDecimal.fromPartial(object.expense)
                : undefined;
        message.serviceInstance =
            object.serviceInstance !== undefined && object.serviceInstance !== null
                ? ServiceInstance.fromPartial(object.serviceInstance)
                : undefined;
        message.periodic =
            object.periodic?.map((e) => UsageReportPeriodicData.fromPartial(e)) || [];
        return message;
    },
};

const baseUsageReportPeriodicData: object = {};

export const UsageReportPeriodicData: {
    encode(message: UsageReportPeriodicData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UsageReportPeriodicData;
    fromJSON(object: any): UsageReportPeriodicData;
    toJSON(message: UsageReportPeriodicData): unknown;
    fromPartial<I extends Exact<DeepPartial<UsageReportPeriodicData>, I>>(object: I): UsageReportPeriodicData;
} = {
    encode(message: UsageReportPeriodicData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.cost !== undefined) {
            StringDecimal.encode(message.cost, writer.uint32(10).fork()).ldelim();
        }
        if (message.creditDetails !== undefined) {
            CreditDetails.encode(message.creditDetails, writer.uint32(18).fork()).ldelim();
        }
        if (message.expense !== undefined) {
            StringDecimal.encode(message.expense, writer.uint32(26).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UsageReportPeriodicData {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUsageReportPeriodicData } as UsageReportPeriodicData;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cost = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.creditDetails = CreditDetails.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.expense = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UsageReportPeriodicData {
        const message = { ...baseUsageReportPeriodicData } as UsageReportPeriodicData;
        message.cost =
            object.cost !== undefined && object.cost !== null
                ? StringDecimal.fromJSON(object.cost)
                : undefined;
        message.creditDetails =
            object.creditDetails !== undefined && object.creditDetails !== null
                ? CreditDetails.fromJSON(object.creditDetails)
                : undefined;
        message.expense =
            object.expense !== undefined && object.expense !== null
                ? StringDecimal.fromJSON(object.expense)
                : undefined;
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? fromJsonTimestamp(object.timestamp)
                : undefined;
        return message;
    },

    toJSON(message: UsageReportPeriodicData): unknown {
        const obj: any = {};
        message.cost !== undefined &&
            (obj.cost = message.cost ? StringDecimal.toJSON(message.cost) : undefined);
        message.creditDetails !== undefined &&
            (obj.creditDetails = message.creditDetails
                ? CreditDetails.toJSON(message.creditDetails)
                : undefined);
        message.expense !== undefined &&
            (obj.expense = message.expense ? StringDecimal.toJSON(message.expense) : undefined);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UsageReportPeriodicData>, I>>(
        object: I,
    ): UsageReportPeriodicData {
        const message = { ...baseUsageReportPeriodicData } as UsageReportPeriodicData;
        message.cost =
            object.cost !== undefined && object.cost !== null
                ? StringDecimal.fromPartial(object.cost)
                : undefined;
        message.creditDetails =
            object.creditDetails !== undefined && object.creditDetails !== null
                ? CreditDetails.fromPartial(object.creditDetails)
                : undefined;
        message.expense =
            object.expense !== undefined && object.expense !== null
                ? StringDecimal.fromPartial(object.expense)
                : undefined;
        message.timestamp = object.timestamp ?? undefined;
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

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
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
