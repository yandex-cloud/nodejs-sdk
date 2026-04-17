/* eslint-disable */
import Long from 'long';
import {
    makeGenericClientConstructor,
    ChannelCredentials,
    ChannelOptions,
    UntypedServiceImplementation,
    handleUnaryCall,
    Client,
    ClientUnaryCall,
    Metadata,
    CallOptions,
    ServiceError,
} from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
import {
    TimeGrouping,
    Currency,
    StringDecimal,
    timeGroupingFromJSON,
    timeGroupingToJSON,
    currencyFromJSON,
    currencyToJSON,
} from './common_types';
import { LabelList } from './billing_types';
import { CreditDetails } from './credit';
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import {
    BillingAccountUsageReportEntityData,
    CloudUsageReportEntityData,
    FolderUsageReportEntityData,
    ServiceUsageReportEntityData,
    SKUUsageReportEntityData,
    ResourceUsageReportEntityData,
    LabelUsageReportEntityData,
    ServiceInstanceUsageReportEntityData,
} from './consumption_core';

export const protobufPackage = 'yandex.cloud.billing.usage_records.v1';

/**
 * Request for retrieving usage report data.
 *
 * This message defines the parameters for requesting usage reports across
 * all ConsumptionCoreService methods. It supports filtering by various
 * entity types and specifying the time range and aggregation period.
 */
export interface UsageReportRequest {
    /** Required. Billing account identifier. */
    billingAccountId: string;
    /**
     * Required. Inclusive start date for metrics selection (UTC).
     * This timestamp defines the beginning of the reporting period.
     * All usage data starting from this timestamp will be included in the report.
     * Note: The time component (hours/minutes/seconds) is ignored since the smallest
     * aggregation period is a day. For example, both 2023-04-15T00:00:00 and
     * 2023-04-15T23:59:59 will include the entire day of April 15, 2023.
     * For best results, align with natural time boundaries (start of day, month)
     * based on your aggregation_period value.
     */
    startDate?: Date;
    /**
     * Required. Inclusive end date for metrics selection (UTC).
     * This timestamp defines the end of the reporting period.
     * All usage data up to and including this timestamp will be included in the report.
     * Note: The time component (hours/minutes/seconds) is ignored since the smallest
     * aggregation period is a day. For example, both 2023-04-15T00:00:00 and
     * 2023-04-15T23:59:59 will include the entire day of April 15, 2023.
     * For best results, align with natural time boundaries (end of day, month)
     * based on your aggregation_period value.
     */
    endDate?: Date;
    /**
     * Optional. List of cloud IDs to filter the data.
     * If specified, only usage data from these clouds will be included in the report.
     * If omitted, data from all clouds available to the billing account will be included.
     * The filter is applied with OR logic (results include data matching any of the specified cloud IDs).
     */
    cloudIds: string[];
    /**
     * Optional. List of folder IDs to filter the data.
     * If specified, only usage data from these folders will be included in the report.
     * If omitted, data from all folders available to the billing account will be included.
     * The filter is applied with OR logic (results include data matching any of the specified folder IDs).
     */
    folderIds: string[];
    /**
     * Optional. List of Service IDs to filter the data.
     * If specified, only usage data from these services (e.g., Compute, Storage, AI) will be included.
     * If omitted, data from all services used by the billing account will be included.
     * The filter is applied with OR logic (results include data matching any of the specified service IDs).
     */
    serviceIds: string[];
    /**
     * Optional. List of SKU (Stock Keeping Unit) IDs to filter the data.
     * If specified, only usage data from these specific SKUs will be included.
     * If omitted, data from all SKUs used by the billing account will be included.
     * The filter is applied with OR logic (results include data matching any of the specified SKU IDs).
     */
    skuIds: string[];
    /**
     * Optional. Filter by labels: key is label key (e.g., "env", "team", "region"),
     * value is list of label values to match (e.g., ["prod", "stage"] for key "env").
     * This allows filtering resources based on their attached labels.
     *
     * Example: To filter resources that have either (env=prod OR env=test) AND (team=finance),
     * use the following filter:
     * {
     *   "env": { "values": ["prod", "test"] },
     *   "team": { "values": ["finance"] }
     * }
     *
     * Note: The filter logic is (value1 OR value2 OR ...) for each key,
     * and (key1 AND key2 AND ...) between different keys.
     */
    labels: { [key: string]: LabelList };
    /**
     * Optional. Controls the logic for combining different label filters.
     * When false (default): AND logic between different label keys - resources
     * must match ALL specified label conditions. When true: OR logic between
     * different label keys - resources must match ANY specified label condition.
     * Example with labels_or_filter_logic = false (AND logic):
     * labels = {"env": ["prod"], "team": ["finance"]}
     * Returns resources that have BOTH env=prod AND team=finance
     *
     * Example with labels_or_filter_logic = true (OR logic):
     * labels = {"env": ["prod"], "team": ["finance"]}
     * Returns resources that have EITHER env=prod OR team=finance (or both)
     *
     * Note: Within each label key, multiple values are always combined with OR
     * logic. For example: {"env": ["prod", "test"]} always means env=prod OR
     * env=test
     */
    labelsOrFilterLogic: boolean;
    /**
     * Optional. List of resource IDs to filter the data.
     * If specified, only usage data from these specific resources (e.g., individual VMs, disks) will be included.
     * If omitted, data from all resources used by the billing account will be included.
     * Filter is applied with OR logic (results include data matching any of the specified resource IDs).
     */
    resourceIds: string[];
    /**
     * Optional. Aggregation granularity for the report, controlling how data points are grouped
     * in time series results. Available options include:
     * - DAY: Group metrics by day, providing daily breakdowns
     * - WEEK: Group metrics by week, providing weekly breakdowns
     * - MONTH: Group metrics by month, providing monthly breakdowns
     * - QUARTER: Group metrics by quarter, providing quarterly breakdowns
     * - YEAR: Group metrics by year, providing yearly breakdowns
     *
     * This setting affects the time series data returned in the periodic field of each entity.
     * If omitted, the service will typically use DAY as the default granularity.
     */
    aggregationPeriod: TimeGrouping;
    /**
     * Optional. List of service instance IDs to filter the data.
     * If specified, only usage data from these specific service instances (e.g., cloud instances,
     * DataLens instances, Tracker instances, Cloud Video instances) will be included.
     * If omitted, data from all service instances used by the billing account will be included.
     */
    serviceInstanceIds: string[];
}

export interface UsageReportRequest_LabelsEntry {
    key: string;
    value?: LabelList;
}

/**
 * Response for usage report requests by billing account.
 *
 * Contains aggregated usage, cost, and credit information for a billing account,
 * with both summary totals and detailed breakdowns by billing account entity.
 * The response includes:
 * 1. Overall totals for the entire period (cost, credits, expense)
 * 2. Entity-level totals for the specified billing account
 * 3. Time series breakdown for the billing account according to the requested aggregation period
 */
export interface BillingAccountUsageReportResponse {
    /**
     * Currency code (e.g., "RUB", "USD") for all monetary values in the response.
     * Determined by the billing account's settings.
     */
    currency: Currency;
    /**
     * Total usage cost for the selected time period.
     * This represents the raw cost before any credits or discounts are applied.
     * Calculated based on the resource consumption and the corresponding price rates.
     */
    cost?: StringDecimal;
    /**
     * Total credits (monetary grants, volume incentives, committed use discounts, and free credits) applied in the selected period.
     * Contains a detailed breakdown of all credit types that reduced the final billable amount.
     */
    creditDetails?: CreditDetails;
    /**
     * Total expense (including cost and credit) for the selected time period.
     * This is the final billable amount after all credits have been applied.
     * Formula: expense = cost - sum of all credits.
     */
    expense?: StringDecimal;
    /**
     * Detailed usage and billing data for the specified billing account entity.
     * This field contains a structured breakdown of costs, credits, and expenses
     * for the requested billing account, including:
     * 1. Entity-level totals for the entire period (cost, credits, expense)
     * 2. Time series data broken down by the specified aggregation period (day/week/month/quarter/year)
     * This represents the second and third levels in the overall three-level response structure.
     */
    entitiesData: BillingAccountUsageReportEntityData[];
}

/**
 * Response for usage report requests by cloud.
 *
 * Contains aggregated usage, cost, and credit information organized by cloud entities,
 * with both summary totals and detailed breakdowns for each cloud.
 * The response includes:
 * 1. Overall totals for the entire period (cost, credits, expense)
 * 2. Entity-level totals for each cloud
 * 3. Time series breakdown for each cloud according to the requested aggregation period
 */
export interface CloudUsageReportResponse {
    /**
     * Currency code (e.g., "RUB", "USD") for all monetary values in the response.
     * Determined by the billing account's settings.
     */
    currency: Currency;
    /**
     * Total usage cost for the selected time period.
     * This represents the raw cost before any credits or discounts are applied.
     * Calculated based on the resource consumption and the corresponding price rates.
     */
    cost?: StringDecimal;
    /**
     * Total credits (monetary grants, volume incentives, committed use discounts, and free credits) applied in the selected period.
     * Contains a detailed breakdown of all credit types that reduced the final billable amount.
     */
    creditDetails?: CreditDetails;
    /**
     * Total expense (including cost and credit) for the selected time period.
     * This is the final billable amount after all credits have been applied.
     * Formula: expense = cost - sum of all credits.
     */
    expense?: StringDecimal;
    /**
     * Detailed usage and billing data for each cloud entity.
     * This field contains a structured breakdown of costs, credits, and expenses
     * for each individual cloud, including:
     * 1. Entity-level totals for the entire period (cost, credits, expense)
     * 2. Time series data broken down by the specified aggregation period (day/week/month/quarter/year)
     * This represents the second and third levels in the overall three-level response structure.
     */
    entitiesData: CloudUsageReportEntityData[];
}

/**
 * Response for usage report requests by folder.
 *
 * Contains aggregated usage, cost, and credit information organized by folder entities,
 * with both summary totals and detailed breakdowns for each folder.
 * The response includes:
 * 1. Overall totals for the entire period (cost, credits, expense)
 * 2. Entity-level totals for each folder
 * 3. Time series breakdown for each folder according to the requested aggregation period
 */
export interface FolderUsageReportResponse {
    /**
     * Currency code (e.g., "RUB", "USD") for all monetary values in the response.
     * Determined by the billing account's settings.
     */
    currency: Currency;
    /**
     * Total usage cost for the selected time period.
     * This represents the raw cost before any credits or discounts are applied.
     * Calculated based on the resource consumption and the corresponding price rates.
     */
    cost?: StringDecimal;
    /**
     * Total credits (monetary grants, volume incentives, committed use discounts, and free credits) applied in the selected period.
     * Contains a detailed breakdown of all credit types that reduced the final billable amount.
     */
    creditDetails?: CreditDetails;
    /**
     * Total expense (including cost and credit) for the selected time period.
     * This is the final billable amount after all credits have been applied.
     * Formula: expense = cost - sum of all credits.
     */
    expense?: StringDecimal;
    /**
     * Detailed usage and billing data for each folder entity.
     * This field contains a structured breakdown of costs, credits, and expenses
     * for each individual folder, including:
     * 1. Entity-level totals for the entire period (cost, credits, expense)
     * 2. Time series data broken down by the specified aggregation period (day/week/month/quarter/year)
     * This represents the second and third levels in the overall three-level response structure.
     */
    entitiesData: FolderUsageReportEntityData[];
}

/**
 * Response for usage report requests by service.
 *
 * Contains aggregated usage, cost, and credit information organized by service entities,
 * with both summary totals and detailed breakdowns for each service. Services represent
 * broad product categories (like Compute, Storage, AI) that can contain multiple SKUs.
 * The response includes:
 * 1. Overall totals for the entire period (cost, credits, expense)
 * 2. Entity-level totals for each service
 * 3. Time series breakdown for each service according to the requested aggregation period
 */
export interface ServiceUsageReportResponse {
    /**
     * Currency code (e.g., "RUB", "USD") for all monetary values in the response.
     * Determined by the billing account's settings.
     */
    currency: Currency;
    /**
     * Total usage cost for the selected time period.
     * This represents the raw cost before any credits or discounts are applied.
     * Calculated based on the resource consumption and the corresponding price rates.
     */
    cost?: StringDecimal;
    /**
     * Total credits (monetary grants, volume incentives, committed use discounts, and free credits) applied in the selected period.
     * Contains a detailed breakdown of all credit types that reduced the final billable amount.
     */
    creditDetails?: CreditDetails;
    /**
     * Total expense (including cost and credit) for the selected time period.
     * This is the final billable amount after all credits have been applied.
     * Formula: expense = cost - sum of all credits.
     */
    expense?: StringDecimal;
    /**
     * Detailed usage and billing data for each service entity.
     * This field contains a structured breakdown of costs, credits, and expenses
     * for each individual service, including:
     * 1. Entity-level totals for the entire period (cost, credits, expense)
     * 2. Time series data broken down by the specified aggregation period (day/week/month/quarter/year)
     * This represents the second and third levels in the overall three-level response structure.
     */
    entitiesData: ServiceUsageReportEntityData[];
}

/**
 * Response for usage report requests by SKU.
 *
 * Contains aggregated usage, cost, and credit information organized by SKU (Stock Keeping Unit) entities,
 * with both summary totals and detailed breakdowns for each SKU. SKUs are specific billable offerings
 * (like particular VM types or disk types) that belong to a parent service.
 * The response includes:
 * 1. Overall totals for the entire period (cost, credits, expense)
 * 2. Entity-level totals for each SKU
 * 3. Time series breakdown for each SKU according to the requested aggregation period
 */
export interface SKUUsageReportResponse {
    /**
     * Currency code (e.g., "RUB", "USD") for all monetary values in the response.
     * Determined by the billing account's settings.
     */
    currency: Currency;
    /**
     * Total usage cost for the selected time period.
     * This represents the raw cost before any credits or discounts are applied.
     * Calculated based on the resource consumption and the corresponding price rates.
     */
    cost?: StringDecimal;
    /**
     * Total credits (monetary grants, volume incentives, committed use discounts, and free credits) applied in the selected period.
     * Contains a detailed breakdown of all credit types that reduced the final billable amount.
     */
    creditDetails?: CreditDetails;
    /**
     * Total expense (including cost and credit) for the selected time period.
     * This is the final billable amount after all credits have been applied.
     * Formula: expense = cost - sum of all credits.
     */
    expense?: StringDecimal;
    /**
     * Detailed usage and billing data for each SKU entity.
     * This field contains a structured breakdown of costs, credits, and expenses
     * for each individual SKU, including:
     * 1. Entity-level totals for the entire period (cost, credits, expense, pricing_quantity)
     * 2. Time series data broken down by the specified aggregation period (day/week/month/quarter/year)
     * This represents the second and third levels in the overall three-level response structure.
     */
    entitiesData: SKUUsageReportEntityData[];
}

/**
 * Response for usage report requests by resource.
 *
 * Contains aggregated usage, cost, and credit information organized by resource entities,
 * with both summary totals and detailed breakdowns for each individual resource.
 * The response includes:
 * 1. Overall totals for the entire period (cost, credits, expense)
 * 2. Entity-level totals for each unique resource-id and service instance type combination
 * 3. Time series breakdown for each resource according to the requested aggregation period
 */
export interface ResourceUsageReportResponse {
    /**
     * Currency code (e.g., "RUB", "USD") for all monetary values in the response.
     * Determined by the billing account's settings.
     */
    currency: Currency;
    /**
     * Total usage cost for the selected time period.
     * This represents the raw cost before any credits or discounts are applied.
     * Calculated based on the resource consumption and the corresponding price rates.
     */
    cost?: StringDecimal;
    /**
     * Total credits (monetary grants, volume incentives, committed use discounts, and free credits) applied in the selected period.
     * Contains a detailed breakdown of all credit types that reduced the final billable amount.
     */
    creditDetails?: CreditDetails;
    /**
     * Total expense (including cost and credit) for the selected time period.
     * This is the final billable amount after all credits have been applied.
     * Formula: expense = cost - sum of all credits.
     */
    expense?: StringDecimal;
    /**
     * Detailed usage and billing data for each resource entity.
     * This field contains a structured breakdown of costs, credits, and expenses
     * for each individual resource, including:
     * 1. Entity-level totals for the entire period (cost, credits, expense)
     * 2. Time series data broken down by the specified aggregation period (day/week/month/quarter/year)
     * This represents the second and third levels in the overall three-level response structure.
     */
    entitiesData: ResourceUsageReportEntityData[];
}

/**
 * Response for usage report requests by label-based grouping.
 *
 * Contains aggregated usage, cost, and credit information organized by label key-value pairs
 * (e.g., "env:prod", "team:finance"), with both summary totals and detailed breakdowns for each label group.
 * This allows analyzing costs across custom business dimensions defined by user-attached labels.
 * The response includes:
 * 1. Overall totals for the entire period (cost, credits, expense)
 * 2. Entity-level totals for each label key-value pair
 * 3. Time series breakdown for each label key-value pair according to the requested aggregation period
 */
export interface LabelKeyUsageReportResponse {
    /**
     * Currency code (e.g., "RUB", "USD") for all monetary values in the response.
     * Determined by the billing account's settings.
     */
    currency: Currency;
    /**
     * Total usage cost for the selected time period.
     * This represents the raw cost before any credits or discounts are applied.
     * Calculated based on the resource consumption and the corresponding price rates.
     */
    cost?: StringDecimal;
    /**
     * Total credits (monetary grants, volume incentives, committed use discounts, and free credits) applied in the selected period.
     * Contains a detailed breakdown of all credit types that reduced the final billable amount.
     */
    creditDetails?: CreditDetails;
    /**
     * Total expense (including cost and credit) for the selected time period.
     * This is the final billable amount after all credits have been applied.
     * Formula: expense = cost - sum of all credits.
     */
    expense?: StringDecimal;
    /**
     * Detailed usage and billing data for each label entity.
     * This field contains a structured breakdown of costs, credits, and expenses
     * for each individual label, including:
     * 1. Entity-level totals for the entire period (cost, credits, expense)
     * 2. Time series data broken down by the specified aggregation period (day/week/month/quarter/year)
     * This represents the second and third levels in the overall three-level response structure.
     */
    entitiesData: LabelUsageReportEntityData[];
}

/**
 * Response for usage report requests by service instance.
 *
 * Contains aggregated usage, cost, and credit information organized by service instance entities,
 * with both summary totals and detailed breakdowns for each service instance. Service instances
 * represent individual billable entities such as cloud instances, DataLens instances, Tracker
 * instances, Cloud Video instances, and other service-specific instances.
 * The response includes:
 * 1. Overall totals for the entire period (cost, credits, expense)
 * 2. Entity-level totals for each service instance
 * 3. Time series breakdown for each service instance according to the requested aggregation period
 */
export interface ServiceInstanceUsageReportResponse {
    /**
     * Currency code (e.g., "RUB", "USD") for all monetary values in the response.
     * Determined by the billing account's settings.
     */
    currency: Currency;
    /**
     * Total usage cost for the selected time period.
     * This represents the raw cost before any credits or discounts are applied.
     * Calculated based on the resource consumption and the corresponding price rates.
     */
    cost?: StringDecimal;
    /**
     * Total credits (monetary grants, volume incentives, committed use discounts, and free credits) applied in the selected period.
     * Contains a detailed breakdown of all credit types that reduced the final billable amount.
     */
    creditDetails?: CreditDetails;
    /**
     * Total expense (including cost and credit) for the selected time period.
     * This is the final billable amount after all credits have been applied.
     * Formula: expense = cost - sum of all credits.
     */
    expense?: StringDecimal;
    /**
     * Detailed usage and billing data for each service instance entity.
     * This field contains a structured breakdown of costs, credits, and expenses
     * for each individual service instance, including:
     * 1. Entity-level totals for the entire period (cost, credits, expense)
     * 2. Time series data broken down by the specified aggregation period (day/week/month/quarter/year)
     * This represents the second and third levels in the overall three-level response structure.
     */
    entitiesData: ServiceInstanceUsageReportEntityData[];
}

const baseUsageReportRequest: object = {
    billingAccountId: '',
    cloudIds: '',
    folderIds: '',
    serviceIds: '',
    skuIds: '',
    labelsOrFilterLogic: false,
    resourceIds: '',
    aggregationPeriod: 0,
    serviceInstanceIds: '',
};

export const UsageReportRequest: {
    encode(message: UsageReportRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UsageReportRequest;
    fromJSON(object: any): UsageReportRequest;
    toJSON(message: UsageReportRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UsageReportRequest>, I>>(object: I): UsageReportRequest;
} = {
    encode(message: UsageReportRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.billingAccountId !== '') {
            writer.uint32(10).string(message.billingAccountId);
        }
        if (message.startDate !== undefined) {
            Timestamp.encode(toTimestamp(message.startDate), writer.uint32(18).fork()).ldelim();
        }
        if (message.endDate !== undefined) {
            Timestamp.encode(toTimestamp(message.endDate), writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.cloudIds) {
            writer.uint32(34).string(v!);
        }
        for (const v of message.folderIds) {
            writer.uint32(42).string(v!);
        }
        for (const v of message.serviceIds) {
            writer.uint32(50).string(v!);
        }
        for (const v of message.skuIds) {
            writer.uint32(58).string(v!);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UsageReportRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(66).fork(),
            ).ldelim();
        });
        if (message.labelsOrFilterLogic === true) {
            writer.uint32(96).bool(message.labelsOrFilterLogic);
        }
        for (const v of message.resourceIds) {
            writer.uint32(74).string(v!);
        }
        if (message.aggregationPeriod !== 0) {
            writer.uint32(80).int32(message.aggregationPeriod);
        }
        for (const v of message.serviceInstanceIds) {
            writer.uint32(90).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UsageReportRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUsageReportRequest } as UsageReportRequest;
        message.cloudIds = [];
        message.folderIds = [];
        message.serviceIds = [];
        message.skuIds = [];
        message.labels = {};
        message.resourceIds = [];
        message.serviceInstanceIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.billingAccountId = reader.string();
                    break;
                case 2:
                    message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.cloudIds.push(reader.string());
                    break;
                case 5:
                    message.folderIds.push(reader.string());
                    break;
                case 6:
                    message.serviceIds.push(reader.string());
                    break;
                case 7:
                    message.skuIds.push(reader.string());
                    break;
                case 8:
                    const entry8 = UsageReportRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry8.value !== undefined) {
                        message.labels[entry8.key] = entry8.value;
                    }
                    break;
                case 12:
                    message.labelsOrFilterLogic = reader.bool();
                    break;
                case 9:
                    message.resourceIds.push(reader.string());
                    break;
                case 10:
                    message.aggregationPeriod = reader.int32() as any;
                    break;
                case 11:
                    message.serviceInstanceIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UsageReportRequest {
        const message = { ...baseUsageReportRequest } as UsageReportRequest;
        message.billingAccountId =
            object.billingAccountId !== undefined && object.billingAccountId !== null
                ? String(object.billingAccountId)
                : '';
        message.startDate =
            object.startDate !== undefined && object.startDate !== null
                ? fromJsonTimestamp(object.startDate)
                : undefined;
        message.endDate =
            object.endDate !== undefined && object.endDate !== null
                ? fromJsonTimestamp(object.endDate)
                : undefined;
        message.cloudIds = (object.cloudIds ?? []).map((e: any) => String(e));
        message.folderIds = (object.folderIds ?? []).map((e: any) => String(e));
        message.serviceIds = (object.serviceIds ?? []).map((e: any) => String(e));
        message.skuIds = (object.skuIds ?? []).map((e: any) => String(e));
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: LabelList }>(
            (acc, [key, value]) => {
                acc[key] = LabelList.fromJSON(value);
                return acc;
            },
            {},
        );
        message.labelsOrFilterLogic =
            object.labelsOrFilterLogic !== undefined && object.labelsOrFilterLogic !== null
                ? Boolean(object.labelsOrFilterLogic)
                : false;
        message.resourceIds = (object.resourceIds ?? []).map((e: any) => String(e));
        message.aggregationPeriod =
            object.aggregationPeriod !== undefined && object.aggregationPeriod !== null
                ? timeGroupingFromJSON(object.aggregationPeriod)
                : 0;
        message.serviceInstanceIds = (object.serviceInstanceIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: UsageReportRequest): unknown {
        const obj: any = {};
        message.billingAccountId !== undefined && (obj.billingAccountId = message.billingAccountId);
        message.startDate !== undefined && (obj.startDate = message.startDate.toISOString());
        message.endDate !== undefined && (obj.endDate = message.endDate.toISOString());
        if (message.cloudIds) {
            obj.cloudIds = message.cloudIds.map((e) => e);
        } else {
            obj.cloudIds = [];
        }
        if (message.folderIds) {
            obj.folderIds = message.folderIds.map((e) => e);
        } else {
            obj.folderIds = [];
        }
        if (message.serviceIds) {
            obj.serviceIds = message.serviceIds.map((e) => e);
        } else {
            obj.serviceIds = [];
        }
        if (message.skuIds) {
            obj.skuIds = message.skuIds.map((e) => e);
        } else {
            obj.skuIds = [];
        }
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = LabelList.toJSON(v);
            });
        }
        message.labelsOrFilterLogic !== undefined &&
            (obj.labelsOrFilterLogic = message.labelsOrFilterLogic);
        if (message.resourceIds) {
            obj.resourceIds = message.resourceIds.map((e) => e);
        } else {
            obj.resourceIds = [];
        }
        message.aggregationPeriod !== undefined &&
            (obj.aggregationPeriod = timeGroupingToJSON(message.aggregationPeriod));
        if (message.serviceInstanceIds) {
            obj.serviceInstanceIds = message.serviceInstanceIds.map((e) => e);
        } else {
            obj.serviceInstanceIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UsageReportRequest>, I>>(
        object: I,
    ): UsageReportRequest {
        const message = { ...baseUsageReportRequest } as UsageReportRequest;
        message.billingAccountId = object.billingAccountId ?? '';
        message.startDate = object.startDate ?? undefined;
        message.endDate = object.endDate ?? undefined;
        message.cloudIds = object.cloudIds?.map((e) => e) || [];
        message.folderIds = object.folderIds?.map((e) => e) || [];
        message.serviceIds = object.serviceIds?.map((e) => e) || [];
        message.skuIds = object.skuIds?.map((e) => e) || [];
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: LabelList }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = LabelList.fromPartial(value);
                }
                return acc;
            },
            {},
        );
        message.labelsOrFilterLogic = object.labelsOrFilterLogic ?? false;
        message.resourceIds = object.resourceIds?.map((e) => e) || [];
        message.aggregationPeriod = object.aggregationPeriod ?? 0;
        message.serviceInstanceIds = object.serviceInstanceIds?.map((e) => e) || [];
        return message;
    },
};

const baseUsageReportRequest_LabelsEntry: object = { key: '' };

export const UsageReportRequest_LabelsEntry: {
    encode(message: UsageReportRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UsageReportRequest_LabelsEntry;
    fromJSON(object: any): UsageReportRequest_LabelsEntry;
    toJSON(message: UsageReportRequest_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<UsageReportRequest_LabelsEntry>, I>>(object: I): UsageReportRequest_LabelsEntry;
} = {
    encode(
        message: UsageReportRequest_LabelsEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            LabelList.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UsageReportRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUsageReportRequest_LabelsEntry } as UsageReportRequest_LabelsEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = LabelList.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UsageReportRequest_LabelsEntry {
        const message = { ...baseUsageReportRequest_LabelsEntry } as UsageReportRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null
                ? LabelList.fromJSON(object.value)
                : undefined;
        return message;
    },

    toJSON(message: UsageReportRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? LabelList.toJSON(message.value) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UsageReportRequest_LabelsEntry>, I>>(
        object: I,
    ): UsageReportRequest_LabelsEntry {
        const message = { ...baseUsageReportRequest_LabelsEntry } as UsageReportRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value =
            object.value !== undefined && object.value !== null
                ? LabelList.fromPartial(object.value)
                : undefined;
        return message;
    },
};

const baseBillingAccountUsageReportResponse: object = { currency: 0 };

export const BillingAccountUsageReportResponse: {
    encode(message: BillingAccountUsageReportResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BillingAccountUsageReportResponse;
    fromJSON(object: any): BillingAccountUsageReportResponse;
    toJSON(message: BillingAccountUsageReportResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<BillingAccountUsageReportResponse>, I>>(object: I): BillingAccountUsageReportResponse;
} = {
    encode(
        message: BillingAccountUsageReportResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.currency !== 0) {
            writer.uint32(8).int32(message.currency);
        }
        if (message.cost !== undefined) {
            StringDecimal.encode(message.cost, writer.uint32(18).fork()).ldelim();
        }
        if (message.creditDetails !== undefined) {
            CreditDetails.encode(message.creditDetails, writer.uint32(26).fork()).ldelim();
        }
        if (message.expense !== undefined) {
            StringDecimal.encode(message.expense, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.entitiesData) {
            BillingAccountUsageReportEntityData.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BillingAccountUsageReportResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseBillingAccountUsageReportResponse,
        } as BillingAccountUsageReportResponse;
        message.entitiesData = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.currency = reader.int32() as any;
                    break;
                case 2:
                    message.cost = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.creditDetails = CreditDetails.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.expense = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.entitiesData.push(
                        BillingAccountUsageReportEntityData.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BillingAccountUsageReportResponse {
        const message = {
            ...baseBillingAccountUsageReportResponse,
        } as BillingAccountUsageReportResponse;
        message.currency =
            object.currency !== undefined && object.currency !== null
                ? currencyFromJSON(object.currency)
                : 0;
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
        message.entitiesData = (object.entitiesData ?? []).map((e: any) =>
            BillingAccountUsageReportEntityData.fromJSON(e),
        );
        return message;
    },

    toJSON(message: BillingAccountUsageReportResponse): unknown {
        const obj: any = {};
        message.currency !== undefined && (obj.currency = currencyToJSON(message.currency));
        message.cost !== undefined &&
            (obj.cost = message.cost ? StringDecimal.toJSON(message.cost) : undefined);
        message.creditDetails !== undefined &&
            (obj.creditDetails = message.creditDetails
                ? CreditDetails.toJSON(message.creditDetails)
                : undefined);
        message.expense !== undefined &&
            (obj.expense = message.expense ? StringDecimal.toJSON(message.expense) : undefined);
        if (message.entitiesData) {
            obj.entitiesData = message.entitiesData.map((e) =>
                e ? BillingAccountUsageReportEntityData.toJSON(e) : undefined,
            );
        } else {
            obj.entitiesData = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BillingAccountUsageReportResponse>, I>>(
        object: I,
    ): BillingAccountUsageReportResponse {
        const message = {
            ...baseBillingAccountUsageReportResponse,
        } as BillingAccountUsageReportResponse;
        message.currency = object.currency ?? 0;
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
        message.entitiesData =
            object.entitiesData?.map((e) => BillingAccountUsageReportEntityData.fromPartial(e)) ||
            [];
        return message;
    },
};

const baseCloudUsageReportResponse: object = { currency: 0 };

export const CloudUsageReportResponse: {
    encode(message: CloudUsageReportResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CloudUsageReportResponse;
    fromJSON(object: any): CloudUsageReportResponse;
    toJSON(message: CloudUsageReportResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<CloudUsageReportResponse>, I>>(object: I): CloudUsageReportResponse;
} = {
    encode(
        message: CloudUsageReportResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.currency !== 0) {
            writer.uint32(8).int32(message.currency);
        }
        if (message.cost !== undefined) {
            StringDecimal.encode(message.cost, writer.uint32(18).fork()).ldelim();
        }
        if (message.creditDetails !== undefined) {
            CreditDetails.encode(message.creditDetails, writer.uint32(26).fork()).ldelim();
        }
        if (message.expense !== undefined) {
            StringDecimal.encode(message.expense, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.entitiesData) {
            CloudUsageReportEntityData.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CloudUsageReportResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCloudUsageReportResponse } as CloudUsageReportResponse;
        message.entitiesData = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.currency = reader.int32() as any;
                    break;
                case 2:
                    message.cost = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.creditDetails = CreditDetails.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.expense = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.entitiesData.push(
                        CloudUsageReportEntityData.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CloudUsageReportResponse {
        const message = { ...baseCloudUsageReportResponse } as CloudUsageReportResponse;
        message.currency =
            object.currency !== undefined && object.currency !== null
                ? currencyFromJSON(object.currency)
                : 0;
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
        message.entitiesData = (object.entitiesData ?? []).map((e: any) =>
            CloudUsageReportEntityData.fromJSON(e),
        );
        return message;
    },

    toJSON(message: CloudUsageReportResponse): unknown {
        const obj: any = {};
        message.currency !== undefined && (obj.currency = currencyToJSON(message.currency));
        message.cost !== undefined &&
            (obj.cost = message.cost ? StringDecimal.toJSON(message.cost) : undefined);
        message.creditDetails !== undefined &&
            (obj.creditDetails = message.creditDetails
                ? CreditDetails.toJSON(message.creditDetails)
                : undefined);
        message.expense !== undefined &&
            (obj.expense = message.expense ? StringDecimal.toJSON(message.expense) : undefined);
        if (message.entitiesData) {
            obj.entitiesData = message.entitiesData.map((e) =>
                e ? CloudUsageReportEntityData.toJSON(e) : undefined,
            );
        } else {
            obj.entitiesData = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CloudUsageReportResponse>, I>>(
        object: I,
    ): CloudUsageReportResponse {
        const message = { ...baseCloudUsageReportResponse } as CloudUsageReportResponse;
        message.currency = object.currency ?? 0;
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
        message.entitiesData =
            object.entitiesData?.map((e) => CloudUsageReportEntityData.fromPartial(e)) || [];
        return message;
    },
};

const baseFolderUsageReportResponse: object = { currency: 0 };

export const FolderUsageReportResponse: {
    encode(message: FolderUsageReportResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FolderUsageReportResponse;
    fromJSON(object: any): FolderUsageReportResponse;
    toJSON(message: FolderUsageReportResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<FolderUsageReportResponse>, I>>(object: I): FolderUsageReportResponse;
} = {
    encode(
        message: FolderUsageReportResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.currency !== 0) {
            writer.uint32(8).int32(message.currency);
        }
        if (message.cost !== undefined) {
            StringDecimal.encode(message.cost, writer.uint32(18).fork()).ldelim();
        }
        if (message.creditDetails !== undefined) {
            CreditDetails.encode(message.creditDetails, writer.uint32(26).fork()).ldelim();
        }
        if (message.expense !== undefined) {
            StringDecimal.encode(message.expense, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.entitiesData) {
            FolderUsageReportEntityData.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): FolderUsageReportResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFolderUsageReportResponse } as FolderUsageReportResponse;
        message.entitiesData = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.currency = reader.int32() as any;
                    break;
                case 2:
                    message.cost = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.creditDetails = CreditDetails.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.expense = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.entitiesData.push(
                        FolderUsageReportEntityData.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): FolderUsageReportResponse {
        const message = { ...baseFolderUsageReportResponse } as FolderUsageReportResponse;
        message.currency =
            object.currency !== undefined && object.currency !== null
                ? currencyFromJSON(object.currency)
                : 0;
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
        message.entitiesData = (object.entitiesData ?? []).map((e: any) =>
            FolderUsageReportEntityData.fromJSON(e),
        );
        return message;
    },

    toJSON(message: FolderUsageReportResponse): unknown {
        const obj: any = {};
        message.currency !== undefined && (obj.currency = currencyToJSON(message.currency));
        message.cost !== undefined &&
            (obj.cost = message.cost ? StringDecimal.toJSON(message.cost) : undefined);
        message.creditDetails !== undefined &&
            (obj.creditDetails = message.creditDetails
                ? CreditDetails.toJSON(message.creditDetails)
                : undefined);
        message.expense !== undefined &&
            (obj.expense = message.expense ? StringDecimal.toJSON(message.expense) : undefined);
        if (message.entitiesData) {
            obj.entitiesData = message.entitiesData.map((e) =>
                e ? FolderUsageReportEntityData.toJSON(e) : undefined,
            );
        } else {
            obj.entitiesData = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<FolderUsageReportResponse>, I>>(
        object: I,
    ): FolderUsageReportResponse {
        const message = { ...baseFolderUsageReportResponse } as FolderUsageReportResponse;
        message.currency = object.currency ?? 0;
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
        message.entitiesData =
            object.entitiesData?.map((e) => FolderUsageReportEntityData.fromPartial(e)) || [];
        return message;
    },
};

const baseServiceUsageReportResponse: object = { currency: 0 };

export const ServiceUsageReportResponse: {
    encode(message: ServiceUsageReportResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceUsageReportResponse;
    fromJSON(object: any): ServiceUsageReportResponse;
    toJSON(message: ServiceUsageReportResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ServiceUsageReportResponse>, I>>(object: I): ServiceUsageReportResponse;
} = {
    encode(
        message: ServiceUsageReportResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.currency !== 0) {
            writer.uint32(8).int32(message.currency);
        }
        if (message.cost !== undefined) {
            StringDecimal.encode(message.cost, writer.uint32(18).fork()).ldelim();
        }
        if (message.creditDetails !== undefined) {
            CreditDetails.encode(message.creditDetails, writer.uint32(26).fork()).ldelim();
        }
        if (message.expense !== undefined) {
            StringDecimal.encode(message.expense, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.entitiesData) {
            ServiceUsageReportEntityData.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceUsageReportResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseServiceUsageReportResponse } as ServiceUsageReportResponse;
        message.entitiesData = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.currency = reader.int32() as any;
                    break;
                case 2:
                    message.cost = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.creditDetails = CreditDetails.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.expense = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.entitiesData.push(
                        ServiceUsageReportEntityData.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ServiceUsageReportResponse {
        const message = { ...baseServiceUsageReportResponse } as ServiceUsageReportResponse;
        message.currency =
            object.currency !== undefined && object.currency !== null
                ? currencyFromJSON(object.currency)
                : 0;
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
        message.entitiesData = (object.entitiesData ?? []).map((e: any) =>
            ServiceUsageReportEntityData.fromJSON(e),
        );
        return message;
    },

    toJSON(message: ServiceUsageReportResponse): unknown {
        const obj: any = {};
        message.currency !== undefined && (obj.currency = currencyToJSON(message.currency));
        message.cost !== undefined &&
            (obj.cost = message.cost ? StringDecimal.toJSON(message.cost) : undefined);
        message.creditDetails !== undefined &&
            (obj.creditDetails = message.creditDetails
                ? CreditDetails.toJSON(message.creditDetails)
                : undefined);
        message.expense !== undefined &&
            (obj.expense = message.expense ? StringDecimal.toJSON(message.expense) : undefined);
        if (message.entitiesData) {
            obj.entitiesData = message.entitiesData.map((e) =>
                e ? ServiceUsageReportEntityData.toJSON(e) : undefined,
            );
        } else {
            obj.entitiesData = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ServiceUsageReportResponse>, I>>(
        object: I,
    ): ServiceUsageReportResponse {
        const message = { ...baseServiceUsageReportResponse } as ServiceUsageReportResponse;
        message.currency = object.currency ?? 0;
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
        message.entitiesData =
            object.entitiesData?.map((e) => ServiceUsageReportEntityData.fromPartial(e)) || [];
        return message;
    },
};

const baseSKUUsageReportResponse: object = { currency: 0 };

export const SKUUsageReportResponse: {
    encode(message: SKUUsageReportResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SKUUsageReportResponse;
    fromJSON(object: any): SKUUsageReportResponse;
    toJSON(message: SKUUsageReportResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<SKUUsageReportResponse>, I>>(object: I): SKUUsageReportResponse;
} = {
    encode(message: SKUUsageReportResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.currency !== 0) {
            writer.uint32(8).int32(message.currency);
        }
        if (message.cost !== undefined) {
            StringDecimal.encode(message.cost, writer.uint32(18).fork()).ldelim();
        }
        if (message.creditDetails !== undefined) {
            CreditDetails.encode(message.creditDetails, writer.uint32(26).fork()).ldelim();
        }
        if (message.expense !== undefined) {
            StringDecimal.encode(message.expense, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.entitiesData) {
            SKUUsageReportEntityData.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SKUUsageReportResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSKUUsageReportResponse } as SKUUsageReportResponse;
        message.entitiesData = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.currency = reader.int32() as any;
                    break;
                case 2:
                    message.cost = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.creditDetails = CreditDetails.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.expense = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.entitiesData.push(
                        SKUUsageReportEntityData.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SKUUsageReportResponse {
        const message = { ...baseSKUUsageReportResponse } as SKUUsageReportResponse;
        message.currency =
            object.currency !== undefined && object.currency !== null
                ? currencyFromJSON(object.currency)
                : 0;
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
        message.entitiesData = (object.entitiesData ?? []).map((e: any) =>
            SKUUsageReportEntityData.fromJSON(e),
        );
        return message;
    },

    toJSON(message: SKUUsageReportResponse): unknown {
        const obj: any = {};
        message.currency !== undefined && (obj.currency = currencyToJSON(message.currency));
        message.cost !== undefined &&
            (obj.cost = message.cost ? StringDecimal.toJSON(message.cost) : undefined);
        message.creditDetails !== undefined &&
            (obj.creditDetails = message.creditDetails
                ? CreditDetails.toJSON(message.creditDetails)
                : undefined);
        message.expense !== undefined &&
            (obj.expense = message.expense ? StringDecimal.toJSON(message.expense) : undefined);
        if (message.entitiesData) {
            obj.entitiesData = message.entitiesData.map((e) =>
                e ? SKUUsageReportEntityData.toJSON(e) : undefined,
            );
        } else {
            obj.entitiesData = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SKUUsageReportResponse>, I>>(
        object: I,
    ): SKUUsageReportResponse {
        const message = { ...baseSKUUsageReportResponse } as SKUUsageReportResponse;
        message.currency = object.currency ?? 0;
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
        message.entitiesData =
            object.entitiesData?.map((e) => SKUUsageReportEntityData.fromPartial(e)) || [];
        return message;
    },
};

const baseResourceUsageReportResponse: object = { currency: 0 };

export const ResourceUsageReportResponse: {
    encode(message: ResourceUsageReportResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceUsageReportResponse;
    fromJSON(object: any): ResourceUsageReportResponse;
    toJSON(message: ResourceUsageReportResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ResourceUsageReportResponse>, I>>(object: I): ResourceUsageReportResponse;
} = {
    encode(
        message: ResourceUsageReportResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.currency !== 0) {
            writer.uint32(8).int32(message.currency);
        }
        if (message.cost !== undefined) {
            StringDecimal.encode(message.cost, writer.uint32(18).fork()).ldelim();
        }
        if (message.creditDetails !== undefined) {
            CreditDetails.encode(message.creditDetails, writer.uint32(26).fork()).ldelim();
        }
        if (message.expense !== undefined) {
            StringDecimal.encode(message.expense, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.entitiesData) {
            ResourceUsageReportEntityData.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceUsageReportResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResourceUsageReportResponse } as ResourceUsageReportResponse;
        message.entitiesData = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.currency = reader.int32() as any;
                    break;
                case 2:
                    message.cost = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.creditDetails = CreditDetails.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.expense = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.entitiesData.push(
                        ResourceUsageReportEntityData.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourceUsageReportResponse {
        const message = { ...baseResourceUsageReportResponse } as ResourceUsageReportResponse;
        message.currency =
            object.currency !== undefined && object.currency !== null
                ? currencyFromJSON(object.currency)
                : 0;
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
        message.entitiesData = (object.entitiesData ?? []).map((e: any) =>
            ResourceUsageReportEntityData.fromJSON(e),
        );
        return message;
    },

    toJSON(message: ResourceUsageReportResponse): unknown {
        const obj: any = {};
        message.currency !== undefined && (obj.currency = currencyToJSON(message.currency));
        message.cost !== undefined &&
            (obj.cost = message.cost ? StringDecimal.toJSON(message.cost) : undefined);
        message.creditDetails !== undefined &&
            (obj.creditDetails = message.creditDetails
                ? CreditDetails.toJSON(message.creditDetails)
                : undefined);
        message.expense !== undefined &&
            (obj.expense = message.expense ? StringDecimal.toJSON(message.expense) : undefined);
        if (message.entitiesData) {
            obj.entitiesData = message.entitiesData.map((e) =>
                e ? ResourceUsageReportEntityData.toJSON(e) : undefined,
            );
        } else {
            obj.entitiesData = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResourceUsageReportResponse>, I>>(
        object: I,
    ): ResourceUsageReportResponse {
        const message = { ...baseResourceUsageReportResponse } as ResourceUsageReportResponse;
        message.currency = object.currency ?? 0;
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
        message.entitiesData =
            object.entitiesData?.map((e) => ResourceUsageReportEntityData.fromPartial(e)) || [];
        return message;
    },
};

const baseLabelKeyUsageReportResponse: object = { currency: 0 };

export const LabelKeyUsageReportResponse: {
    encode(message: LabelKeyUsageReportResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LabelKeyUsageReportResponse;
    fromJSON(object: any): LabelKeyUsageReportResponse;
    toJSON(message: LabelKeyUsageReportResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<LabelKeyUsageReportResponse>, I>>(object: I): LabelKeyUsageReportResponse;
} = {
    encode(
        message: LabelKeyUsageReportResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.currency !== 0) {
            writer.uint32(8).int32(message.currency);
        }
        if (message.cost !== undefined) {
            StringDecimal.encode(message.cost, writer.uint32(18).fork()).ldelim();
        }
        if (message.creditDetails !== undefined) {
            CreditDetails.encode(message.creditDetails, writer.uint32(26).fork()).ldelim();
        }
        if (message.expense !== undefined) {
            StringDecimal.encode(message.expense, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.entitiesData) {
            LabelUsageReportEntityData.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LabelKeyUsageReportResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLabelKeyUsageReportResponse } as LabelKeyUsageReportResponse;
        message.entitiesData = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.currency = reader.int32() as any;
                    break;
                case 2:
                    message.cost = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.creditDetails = CreditDetails.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.expense = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.entitiesData.push(
                        LabelUsageReportEntityData.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LabelKeyUsageReportResponse {
        const message = { ...baseLabelKeyUsageReportResponse } as LabelKeyUsageReportResponse;
        message.currency =
            object.currency !== undefined && object.currency !== null
                ? currencyFromJSON(object.currency)
                : 0;
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
        message.entitiesData = (object.entitiesData ?? []).map((e: any) =>
            LabelUsageReportEntityData.fromJSON(e),
        );
        return message;
    },

    toJSON(message: LabelKeyUsageReportResponse): unknown {
        const obj: any = {};
        message.currency !== undefined && (obj.currency = currencyToJSON(message.currency));
        message.cost !== undefined &&
            (obj.cost = message.cost ? StringDecimal.toJSON(message.cost) : undefined);
        message.creditDetails !== undefined &&
            (obj.creditDetails = message.creditDetails
                ? CreditDetails.toJSON(message.creditDetails)
                : undefined);
        message.expense !== undefined &&
            (obj.expense = message.expense ? StringDecimal.toJSON(message.expense) : undefined);
        if (message.entitiesData) {
            obj.entitiesData = message.entitiesData.map((e) =>
                e ? LabelUsageReportEntityData.toJSON(e) : undefined,
            );
        } else {
            obj.entitiesData = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LabelKeyUsageReportResponse>, I>>(
        object: I,
    ): LabelKeyUsageReportResponse {
        const message = { ...baseLabelKeyUsageReportResponse } as LabelKeyUsageReportResponse;
        message.currency = object.currency ?? 0;
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
        message.entitiesData =
            object.entitiesData?.map((e) => LabelUsageReportEntityData.fromPartial(e)) || [];
        return message;
    },
};

const baseServiceInstanceUsageReportResponse: object = { currency: 0 };

export const ServiceInstanceUsageReportResponse: {
    encode(message: ServiceInstanceUsageReportResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceInstanceUsageReportResponse;
    fromJSON(object: any): ServiceInstanceUsageReportResponse;
    toJSON(message: ServiceInstanceUsageReportResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ServiceInstanceUsageReportResponse>, I>>(object: I): ServiceInstanceUsageReportResponse;
} = {
    encode(
        message: ServiceInstanceUsageReportResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.currency !== 0) {
            writer.uint32(8).int32(message.currency);
        }
        if (message.cost !== undefined) {
            StringDecimal.encode(message.cost, writer.uint32(18).fork()).ldelim();
        }
        if (message.creditDetails !== undefined) {
            CreditDetails.encode(message.creditDetails, writer.uint32(26).fork()).ldelim();
        }
        if (message.expense !== undefined) {
            StringDecimal.encode(message.expense, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.entitiesData) {
            ServiceInstanceUsageReportEntityData.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceInstanceUsageReportResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseServiceInstanceUsageReportResponse,
        } as ServiceInstanceUsageReportResponse;
        message.entitiesData = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.currency = reader.int32() as any;
                    break;
                case 2:
                    message.cost = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.creditDetails = CreditDetails.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.expense = StringDecimal.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.entitiesData.push(
                        ServiceInstanceUsageReportEntityData.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ServiceInstanceUsageReportResponse {
        const message = {
            ...baseServiceInstanceUsageReportResponse,
        } as ServiceInstanceUsageReportResponse;
        message.currency =
            object.currency !== undefined && object.currency !== null
                ? currencyFromJSON(object.currency)
                : 0;
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
        message.entitiesData = (object.entitiesData ?? []).map((e: any) =>
            ServiceInstanceUsageReportEntityData.fromJSON(e),
        );
        return message;
    },

    toJSON(message: ServiceInstanceUsageReportResponse): unknown {
        const obj: any = {};
        message.currency !== undefined && (obj.currency = currencyToJSON(message.currency));
        message.cost !== undefined &&
            (obj.cost = message.cost ? StringDecimal.toJSON(message.cost) : undefined);
        message.creditDetails !== undefined &&
            (obj.creditDetails = message.creditDetails
                ? CreditDetails.toJSON(message.creditDetails)
                : undefined);
        message.expense !== undefined &&
            (obj.expense = message.expense ? StringDecimal.toJSON(message.expense) : undefined);
        if (message.entitiesData) {
            obj.entitiesData = message.entitiesData.map((e) =>
                e ? ServiceInstanceUsageReportEntityData.toJSON(e) : undefined,
            );
        } else {
            obj.entitiesData = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ServiceInstanceUsageReportResponse>, I>>(
        object: I,
    ): ServiceInstanceUsageReportResponse {
        const message = {
            ...baseServiceInstanceUsageReportResponse,
        } as ServiceInstanceUsageReportResponse;
        message.currency = object.currency ?? 0;
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
        message.entitiesData =
            object.entitiesData?.map((e) => ServiceInstanceUsageReportEntityData.fromPartial(e)) ||
            [];
        return message;
    },
};

/**
 * Service for detailed consumption and usage reporting.
 *
 * The ConsumptionCoreService provides a comprehensive set of methods for retrieving detailed
 * usage and billing information for different entities within a billing account hierarchy.
 * Each method offers aggregated data for specific entity types (a billing account, clouds,
 * folders, services, SKUs, resources, or labels) with support for various filtering options
 * and aggregation periods. Note that each request targets a single billing account.
 *
 * All methods in this service follow the same three-level response structure:
 * 1. Overall totals for the entire request period (cost, credits, expense)
 * 2. Entity-level totals - summary data for each entity of the requested type
 * 3. Time series data - periodic breakdown for each entity according to the specified aggregation period
 *    (controlled by the aggregation_period request parameter: day/week/month/quarter/year)
 *
 * These methods help customers and internal teams analyze usage patterns, track expenses,
 * monitor resource consumption, and generate detailed billing reports. The service
 * supports filtering by entity IDs, date ranges, labels, and other parameters to provide
 * targeted insights into cloud resource usage.
 *
 * Required permissions:
 * All methods in this service require one of the following permissions on the specified billing account:
 * - `billing.accounts.getReport`
 *
 * Rate limits:
 * This API is limited to 1 request per minute per IP address.
 */
export const ConsumptionCoreServiceService = {
    /**
     * Returns aggregated usage report for a single specified billing account,
     * optionally filtered by clouds, folders, SKUs, labels, and period granularity.
     *
     * This method provides a comprehensive view of all usage and costs for a specific
     * billing account, with options to filter data by various entity types and to aggregate
     * results at different time granularities (daily, monthly, etc.).
     *
     * Implementation details:
     * - The report includes the total cost, applied credits (monetary grants, volume incentives, committed use discounts, and free credits), and final expense
     * - Results can be filtered by cloud IDs, folder IDs, service IDs, SKU IDs, resource IDs, or labels
     * - All applicable filters from the request will be applied (with AND logic between different filter types)
     * - Time-based data is grouped according to the specified aggregation period
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     */
    getBillingAccountUsageReport: {
        path: '/yandex.cloud.billing.usage_records.v1.ConsumptionCoreService/GetBillingAccountUsageReport',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UsageReportRequest) =>
            Buffer.from(UsageReportRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UsageReportRequest.decode(value),
        responseSerialize: (value: BillingAccountUsageReportResponse) =>
            Buffer.from(BillingAccountUsageReportResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => BillingAccountUsageReportResponse.decode(value),
    },
    /**
     * Returns aggregated usage report for the specified clouds
     * under the specified billing account.
     *
     * This method provides detailed usage and cost information grouped by clouds
     * within the specified billing account. The data can be filtered by various
     * entity types and aggregated at different time granularities.
     *
     * Implementation details:
     * - Results are organized by cloud, with each cloud's usage, costs, and credits detailed
     * - If cloud_ids are specified, only data for those clouds is included (using OR logic)
     * - When no cloud_ids are specified, data for all clouds under the billing account is returned
     * - Other filters (folder_ids, service_ids, sku_ids, resource_ids, labels) are always applied if present
     * - Hierarchical data structure allows analyzing costs across the organization's cloud resources
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     */
    getCloudUsageReport: {
        path: '/yandex.cloud.billing.usage_records.v1.ConsumptionCoreService/GetCloudUsageReport',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UsageReportRequest) =>
            Buffer.from(UsageReportRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UsageReportRequest.decode(value),
        responseSerialize: (value: CloudUsageReportResponse) =>
            Buffer.from(CloudUsageReportResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => CloudUsageReportResponse.decode(value),
    },
    /**
     * Returns aggregated usage report for the specified folders
     * under the specified billing account.
     *
     * This method provides detailed usage and cost information grouped by folders
     * within the specified billing account. The data can be filtered by various
     * entity types and aggregated at different time granularities.
     *
     * Implementation details:
     * - Results are organized by folder, with each folder's usage, costs, and credits detailed
     * - If folder_ids are specified, only data for those folders is included (using OR logic)
     * - When no folder_ids are specified, data for all folders under the billing account is returned
     * - Other filters (cloud_ids, service_ids, sku_ids, resource_ids, labels) are always applied if present
     * - Provides visibility into costs at the project/folder level within your organization
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     *
     * Required permissions:
     * - `billing.accounts.getReport` on the specified billing account
     */
    getFolderUsageReport: {
        path: '/yandex.cloud.billing.usage_records.v1.ConsumptionCoreService/GetFolderUsageReport',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UsageReportRequest) =>
            Buffer.from(UsageReportRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UsageReportRequest.decode(value),
        responseSerialize: (value: FolderUsageReportResponse) =>
            Buffer.from(FolderUsageReportResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => FolderUsageReportResponse.decode(value),
    },
    /**
     * Returns aggregated usage report for the specified services
     * under the specified billing account.
     *
     * This method provides detailed usage and cost information grouped by services
     * within the specified billing account. Services represent broad product categories
     * (like Compute, Storage, AI, etc.) that contain multiple SKUs. The data can be
     * filtered by various entity types and aggregated at different time granularities.
     *
     * Implementation details:
     * - Results are organized by service, with each service's usage, costs, and credits detailed
     * - If service_ids are specified, only data for those services is included (using OR logic)
     * - When no service_ids are specified, data for all services under the billing account is returned
     * - Other filters (cloud_ids, folder_ids, sku_ids, resource_ids, labels) are always applied if present
     * - Service data includes the service name and description
     * - Helps identify which cloud services are driving your overall costs
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     */
    getServiceUsageReport: {
        path: '/yandex.cloud.billing.usage_records.v1.ConsumptionCoreService/GetServiceUsageReport',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UsageReportRequest) =>
            Buffer.from(UsageReportRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UsageReportRequest.decode(value),
        responseSerialize: (value: ServiceUsageReportResponse) =>
            Buffer.from(ServiceUsageReportResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ServiceUsageReportResponse.decode(value),
    },
    /**
     * Returns aggregated usage report by SKU (Stock Keeping Unit)
     * under the specified billing account.
     *
     * This method provides detailed usage and cost information grouped by SKUs
     * within the specified billing account. SKUs are specific billable product offerings
     * (such as specific VM types, disk types, or AI models) that belong to a parent service.
     * The data can be filtered by various entity types and aggregated at different time granularities.
     *
     * Implementation details:
     * - Results are organized by SKU, with each SKU's usage, costs, and credits detailed
     * - If sku_ids are specified, only data for those SKUs is included (using OR logic)
     * - When no sku_ids are specified, data for all SKUs under the billing account is returned
     * - Other filters (cloud_ids, folder_ids, service_ids, resource_ids, labels) are always applied if present
     * - SKU data includes pricing quantity, unit of measurement, and translated display names
     * - Provides the most granular view of which specific product offerings are generating costs
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     */
    getSKUUsageReport: {
        path: '/yandex.cloud.billing.usage_records.v1.ConsumptionCoreService/GetSKUUsageReport',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UsageReportRequest) =>
            Buffer.from(UsageReportRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UsageReportRequest.decode(value),
        responseSerialize: (value: SKUUsageReportResponse) =>
            Buffer.from(SKUUsageReportResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => SKUUsageReportResponse.decode(value),
    },
    /**
     * Returns aggregated usage report by individual resource
     * under the specified billing account.
     *
     * This method provides detailed usage and cost information grouped by individual resources
     * within the specified billing account. The data can be filtered by various
     * entity types and aggregated at different time granularities.
     *
     * Implementation details:
     * - Results are organized by resource, with each resource's usage, costs, and credits detailed.
     * - Each resource-id + service-instance-type unique combination results in one entry in entity data.
     * - If resource_ids are specified, only data for those resources is included (using OR logic)
     * - When no resource_ids are specified, data for all resources under the billing account is returned
     * - Other filters (cloud_ids, folder_ids, service_ids, sku_ids, labels) are always applied if present
     * - This provides the most granular view of costs as it breaks down to the individual resource level
     * - Enables precise cost analysis at the individual resource instance level (specific VMs, disks, etc.)
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     */
    getResourceUsageReport: {
        path: '/yandex.cloud.billing.usage_records.v1.ConsumptionCoreService/GetResourceUsageReport',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UsageReportRequest) =>
            Buffer.from(UsageReportRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UsageReportRequest.decode(value),
        responseSerialize: (value: ResourceUsageReportResponse) =>
            Buffer.from(ResourceUsageReportResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ResourceUsageReportResponse.decode(value),
    },
    /**
     * Returns aggregated usage report by label keys and values
     * under the specified billing account.
     *
     * This method provides detailed usage and cost information grouped by label key-value pairs
     * within the specified billing account. Labels are user-defined metadata tags attached to resources
     * (such as VMs, disks, etc.) in the form of key-value pairs (e.g., "env:prod", "region:us-west").
     * The data can be filtered by various entity types and aggregated at different time granularities.
     *
     * Implementation details:
     * - Results are organized by label key-value pairs, with usage, costs, and credits detailed for each
     * - If labels filter is specified, only data for matching labels is included
     * - Other filters (cloud_ids, folder_ids, service_ids, sku_ids, resource_ids) are always applied if present
     * - Resources can have multiple labels attached (e.g., a VM might have "env:prod", "team:finance", "region:us")
     * - If a resource has multiple labels at the same point in time, the usage and cost metrics are reported for each label separately.
     *   In other words, the same resource's cost is **duplicated** across its labels rather than split. For example,
     *   if a VM costs 90 units and has 3 labels, the report will show 90 units for each label, not 30 units per label.
     * - This allows for custom business dimensions analysis based on resource tagging
     * - Usage data is aggregated for all resources that share the same label
     * - Particularly useful for cost allocation and chargeback across business units, environments, or projects
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     */
    getLabelKeyUsageReport: {
        path: '/yandex.cloud.billing.usage_records.v1.ConsumptionCoreService/GetLabelKeyUsageReport',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UsageReportRequest) =>
            Buffer.from(UsageReportRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UsageReportRequest.decode(value),
        responseSerialize: (value: LabelKeyUsageReportResponse) =>
            Buffer.from(LabelKeyUsageReportResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => LabelKeyUsageReportResponse.decode(value),
    },
    /**
     * Returns aggregated usage report for the specified service instances
     * under the specified billing account.
     *
     * This method provides detailed usage and cost information grouped by service instances
     * within the specified billing account. Service instances represent individual billable
     * entities such as cloud instances, DataLens instances, Tracker instances, Cloud Video
     * instances, and other service-specific instances. The data can be filtered by various
     * entity types and aggregated at different time granularities.
     *
     * Implementation details:
     * - Results are organized by service instance, with each instance's usage, costs, and credits detailed
     * - If service_instance_ids are specified, only data for those instances is included (using OR logic)
     * - When no service_instance_ids are specified, data for all service instances under the billing account is returned
     * - Other filters (cloud_ids, folder_ids, service_ids, sku_ids, resource_ids, labels) are always applied if present
     * - If both cloud_ids and service_instance_ids are specified in the request, the results are filtered
     *   by the intersection of these filters (AND logic).
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     */
    getServiceInstanceUsageReport: {
        path: '/yandex.cloud.billing.usage_records.v1.ConsumptionCoreService/GetServiceInstanceUsageReport',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UsageReportRequest) =>
            Buffer.from(UsageReportRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UsageReportRequest.decode(value),
        responseSerialize: (value: ServiceInstanceUsageReportResponse) =>
            Buffer.from(ServiceInstanceUsageReportResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ServiceInstanceUsageReportResponse.decode(value),
    },
} as const;

export interface ConsumptionCoreServiceServer extends UntypedServiceImplementation {
    /**
     * Returns aggregated usage report for a single specified billing account,
     * optionally filtered by clouds, folders, SKUs, labels, and period granularity.
     *
     * This method provides a comprehensive view of all usage and costs for a specific
     * billing account, with options to filter data by various entity types and to aggregate
     * results at different time granularities (daily, monthly, etc.).
     *
     * Implementation details:
     * - The report includes the total cost, applied credits (monetary grants, volume incentives, committed use discounts, and free credits), and final expense
     * - Results can be filtered by cloud IDs, folder IDs, service IDs, SKU IDs, resource IDs, or labels
     * - All applicable filters from the request will be applied (with AND logic between different filter types)
     * - Time-based data is grouped according to the specified aggregation period
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     */
    getBillingAccountUsageReport: handleUnaryCall<
        UsageReportRequest,
        BillingAccountUsageReportResponse
    >;
    /**
     * Returns aggregated usage report for the specified clouds
     * under the specified billing account.
     *
     * This method provides detailed usage and cost information grouped by clouds
     * within the specified billing account. The data can be filtered by various
     * entity types and aggregated at different time granularities.
     *
     * Implementation details:
     * - Results are organized by cloud, with each cloud's usage, costs, and credits detailed
     * - If cloud_ids are specified, only data for those clouds is included (using OR logic)
     * - When no cloud_ids are specified, data for all clouds under the billing account is returned
     * - Other filters (folder_ids, service_ids, sku_ids, resource_ids, labels) are always applied if present
     * - Hierarchical data structure allows analyzing costs across the organization's cloud resources
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     */
    getCloudUsageReport: handleUnaryCall<UsageReportRequest, CloudUsageReportResponse>;
    /**
     * Returns aggregated usage report for the specified folders
     * under the specified billing account.
     *
     * This method provides detailed usage and cost information grouped by folders
     * within the specified billing account. The data can be filtered by various
     * entity types and aggregated at different time granularities.
     *
     * Implementation details:
     * - Results are organized by folder, with each folder's usage, costs, and credits detailed
     * - If folder_ids are specified, only data for those folders is included (using OR logic)
     * - When no folder_ids are specified, data for all folders under the billing account is returned
     * - Other filters (cloud_ids, service_ids, sku_ids, resource_ids, labels) are always applied if present
     * - Provides visibility into costs at the project/folder level within your organization
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     *
     * Required permissions:
     * - `billing.accounts.getReport` on the specified billing account
     */
    getFolderUsageReport: handleUnaryCall<UsageReportRequest, FolderUsageReportResponse>;
    /**
     * Returns aggregated usage report for the specified services
     * under the specified billing account.
     *
     * This method provides detailed usage and cost information grouped by services
     * within the specified billing account. Services represent broad product categories
     * (like Compute, Storage, AI, etc.) that contain multiple SKUs. The data can be
     * filtered by various entity types and aggregated at different time granularities.
     *
     * Implementation details:
     * - Results are organized by service, with each service's usage, costs, and credits detailed
     * - If service_ids are specified, only data for those services is included (using OR logic)
     * - When no service_ids are specified, data for all services under the billing account is returned
     * - Other filters (cloud_ids, folder_ids, sku_ids, resource_ids, labels) are always applied if present
     * - Service data includes the service name and description
     * - Helps identify which cloud services are driving your overall costs
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     */
    getServiceUsageReport: handleUnaryCall<UsageReportRequest, ServiceUsageReportResponse>;
    /**
     * Returns aggregated usage report by SKU (Stock Keeping Unit)
     * under the specified billing account.
     *
     * This method provides detailed usage and cost information grouped by SKUs
     * within the specified billing account. SKUs are specific billable product offerings
     * (such as specific VM types, disk types, or AI models) that belong to a parent service.
     * The data can be filtered by various entity types and aggregated at different time granularities.
     *
     * Implementation details:
     * - Results are organized by SKU, with each SKU's usage, costs, and credits detailed
     * - If sku_ids are specified, only data for those SKUs is included (using OR logic)
     * - When no sku_ids are specified, data for all SKUs under the billing account is returned
     * - Other filters (cloud_ids, folder_ids, service_ids, resource_ids, labels) are always applied if present
     * - SKU data includes pricing quantity, unit of measurement, and translated display names
     * - Provides the most granular view of which specific product offerings are generating costs
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     */
    getSKUUsageReport: handleUnaryCall<UsageReportRequest, SKUUsageReportResponse>;
    /**
     * Returns aggregated usage report by individual resource
     * under the specified billing account.
     *
     * This method provides detailed usage and cost information grouped by individual resources
     * within the specified billing account. The data can be filtered by various
     * entity types and aggregated at different time granularities.
     *
     * Implementation details:
     * - Results are organized by resource, with each resource's usage, costs, and credits detailed.
     * - Each resource-id + service-instance-type unique combination results in one entry in entity data.
     * - If resource_ids are specified, only data for those resources is included (using OR logic)
     * - When no resource_ids are specified, data for all resources under the billing account is returned
     * - Other filters (cloud_ids, folder_ids, service_ids, sku_ids, labels) are always applied if present
     * - This provides the most granular view of costs as it breaks down to the individual resource level
     * - Enables precise cost analysis at the individual resource instance level (specific VMs, disks, etc.)
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     */
    getResourceUsageReport: handleUnaryCall<UsageReportRequest, ResourceUsageReportResponse>;
    /**
     * Returns aggregated usage report by label keys and values
     * under the specified billing account.
     *
     * This method provides detailed usage and cost information grouped by label key-value pairs
     * within the specified billing account. Labels are user-defined metadata tags attached to resources
     * (such as VMs, disks, etc.) in the form of key-value pairs (e.g., "env:prod", "region:us-west").
     * The data can be filtered by various entity types and aggregated at different time granularities.
     *
     * Implementation details:
     * - Results are organized by label key-value pairs, with usage, costs, and credits detailed for each
     * - If labels filter is specified, only data for matching labels is included
     * - Other filters (cloud_ids, folder_ids, service_ids, sku_ids, resource_ids) are always applied if present
     * - Resources can have multiple labels attached (e.g., a VM might have "env:prod", "team:finance", "region:us")
     * - If a resource has multiple labels at the same point in time, the usage and cost metrics are reported for each label separately.
     *   In other words, the same resource's cost is **duplicated** across its labels rather than split. For example,
     *   if a VM costs 90 units and has 3 labels, the report will show 90 units for each label, not 30 units per label.
     * - This allows for custom business dimensions analysis based on resource tagging
     * - Usage data is aggregated for all resources that share the same label
     * - Particularly useful for cost allocation and chargeback across business units, environments, or projects
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     */
    getLabelKeyUsageReport: handleUnaryCall<UsageReportRequest, LabelKeyUsageReportResponse>;
    /**
     * Returns aggregated usage report for the specified service instances
     * under the specified billing account.
     *
     * This method provides detailed usage and cost information grouped by service instances
     * within the specified billing account. Service instances represent individual billable
     * entities such as cloud instances, DataLens instances, Tracker instances, Cloud Video
     * instances, and other service-specific instances. The data can be filtered by various
     * entity types and aggregated at different time granularities.
     *
     * Implementation details:
     * - Results are organized by service instance, with each instance's usage, costs, and credits detailed
     * - If service_instance_ids are specified, only data for those instances is included (using OR logic)
     * - When no service_instance_ids are specified, data for all service instances under the billing account is returned
     * - Other filters (cloud_ids, folder_ids, service_ids, sku_ids, resource_ids, labels) are always applied if present
     * - If both cloud_ids and service_instance_ids are specified in the request, the results are filtered
     *   by the intersection of these filters (AND logic).
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     */
    getServiceInstanceUsageReport: handleUnaryCall<
        UsageReportRequest,
        ServiceInstanceUsageReportResponse
    >;
}

export interface ConsumptionCoreServiceClient extends Client {
    /**
     * Returns aggregated usage report for a single specified billing account,
     * optionally filtered by clouds, folders, SKUs, labels, and period granularity.
     *
     * This method provides a comprehensive view of all usage and costs for a specific
     * billing account, with options to filter data by various entity types and to aggregate
     * results at different time granularities (daily, monthly, etc.).
     *
     * Implementation details:
     * - The report includes the total cost, applied credits (monetary grants, volume incentives, committed use discounts, and free credits), and final expense
     * - Results can be filtered by cloud IDs, folder IDs, service IDs, SKU IDs, resource IDs, or labels
     * - All applicable filters from the request will be applied (with AND logic between different filter types)
     * - Time-based data is grouped according to the specified aggregation period
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     */
    getBillingAccountUsageReport(
        request: UsageReportRequest,
        callback: (error: ServiceError | null, response: BillingAccountUsageReportResponse) => void,
    ): ClientUnaryCall;
    getBillingAccountUsageReport(
        request: UsageReportRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: BillingAccountUsageReportResponse) => void,
    ): ClientUnaryCall;
    getBillingAccountUsageReport(
        request: UsageReportRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: BillingAccountUsageReportResponse) => void,
    ): ClientUnaryCall;
    /**
     * Returns aggregated usage report for the specified clouds
     * under the specified billing account.
     *
     * This method provides detailed usage and cost information grouped by clouds
     * within the specified billing account. The data can be filtered by various
     * entity types and aggregated at different time granularities.
     *
     * Implementation details:
     * - Results are organized by cloud, with each cloud's usage, costs, and credits detailed
     * - If cloud_ids are specified, only data for those clouds is included (using OR logic)
     * - When no cloud_ids are specified, data for all clouds under the billing account is returned
     * - Other filters (folder_ids, service_ids, sku_ids, resource_ids, labels) are always applied if present
     * - Hierarchical data structure allows analyzing costs across the organization's cloud resources
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     */
    getCloudUsageReport(
        request: UsageReportRequest,
        callback: (error: ServiceError | null, response: CloudUsageReportResponse) => void,
    ): ClientUnaryCall;
    getCloudUsageReport(
        request: UsageReportRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: CloudUsageReportResponse) => void,
    ): ClientUnaryCall;
    getCloudUsageReport(
        request: UsageReportRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: CloudUsageReportResponse) => void,
    ): ClientUnaryCall;
    /**
     * Returns aggregated usage report for the specified folders
     * under the specified billing account.
     *
     * This method provides detailed usage and cost information grouped by folders
     * within the specified billing account. The data can be filtered by various
     * entity types and aggregated at different time granularities.
     *
     * Implementation details:
     * - Results are organized by folder, with each folder's usage, costs, and credits detailed
     * - If folder_ids are specified, only data for those folders is included (using OR logic)
     * - When no folder_ids are specified, data for all folders under the billing account is returned
     * - Other filters (cloud_ids, service_ids, sku_ids, resource_ids, labels) are always applied if present
     * - Provides visibility into costs at the project/folder level within your organization
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     *
     * Required permissions:
     * - `billing.accounts.getReport` on the specified billing account
     */
    getFolderUsageReport(
        request: UsageReportRequest,
        callback: (error: ServiceError | null, response: FolderUsageReportResponse) => void,
    ): ClientUnaryCall;
    getFolderUsageReport(
        request: UsageReportRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: FolderUsageReportResponse) => void,
    ): ClientUnaryCall;
    getFolderUsageReport(
        request: UsageReportRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: FolderUsageReportResponse) => void,
    ): ClientUnaryCall;
    /**
     * Returns aggregated usage report for the specified services
     * under the specified billing account.
     *
     * This method provides detailed usage and cost information grouped by services
     * within the specified billing account. Services represent broad product categories
     * (like Compute, Storage, AI, etc.) that contain multiple SKUs. The data can be
     * filtered by various entity types and aggregated at different time granularities.
     *
     * Implementation details:
     * - Results are organized by service, with each service's usage, costs, and credits detailed
     * - If service_ids are specified, only data for those services is included (using OR logic)
     * - When no service_ids are specified, data for all services under the billing account is returned
     * - Other filters (cloud_ids, folder_ids, sku_ids, resource_ids, labels) are always applied if present
     * - Service data includes the service name and description
     * - Helps identify which cloud services are driving your overall costs
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     */
    getServiceUsageReport(
        request: UsageReportRequest,
        callback: (error: ServiceError | null, response: ServiceUsageReportResponse) => void,
    ): ClientUnaryCall;
    getServiceUsageReport(
        request: UsageReportRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ServiceUsageReportResponse) => void,
    ): ClientUnaryCall;
    getServiceUsageReport(
        request: UsageReportRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ServiceUsageReportResponse) => void,
    ): ClientUnaryCall;
    /**
     * Returns aggregated usage report by SKU (Stock Keeping Unit)
     * under the specified billing account.
     *
     * This method provides detailed usage and cost information grouped by SKUs
     * within the specified billing account. SKUs are specific billable product offerings
     * (such as specific VM types, disk types, or AI models) that belong to a parent service.
     * The data can be filtered by various entity types and aggregated at different time granularities.
     *
     * Implementation details:
     * - Results are organized by SKU, with each SKU's usage, costs, and credits detailed
     * - If sku_ids are specified, only data for those SKUs is included (using OR logic)
     * - When no sku_ids are specified, data for all SKUs under the billing account is returned
     * - Other filters (cloud_ids, folder_ids, service_ids, resource_ids, labels) are always applied if present
     * - SKU data includes pricing quantity, unit of measurement, and translated display names
     * - Provides the most granular view of which specific product offerings are generating costs
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     */
    getSKUUsageReport(
        request: UsageReportRequest,
        callback: (error: ServiceError | null, response: SKUUsageReportResponse) => void,
    ): ClientUnaryCall;
    getSKUUsageReport(
        request: UsageReportRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: SKUUsageReportResponse) => void,
    ): ClientUnaryCall;
    getSKUUsageReport(
        request: UsageReportRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: SKUUsageReportResponse) => void,
    ): ClientUnaryCall;
    /**
     * Returns aggregated usage report by individual resource
     * under the specified billing account.
     *
     * This method provides detailed usage and cost information grouped by individual resources
     * within the specified billing account. The data can be filtered by various
     * entity types and aggregated at different time granularities.
     *
     * Implementation details:
     * - Results are organized by resource, with each resource's usage, costs, and credits detailed.
     * - Each resource-id + service-instance-type unique combination results in one entry in entity data.
     * - If resource_ids are specified, only data for those resources is included (using OR logic)
     * - When no resource_ids are specified, data for all resources under the billing account is returned
     * - Other filters (cloud_ids, folder_ids, service_ids, sku_ids, labels) are always applied if present
     * - This provides the most granular view of costs as it breaks down to the individual resource level
     * - Enables precise cost analysis at the individual resource instance level (specific VMs, disks, etc.)
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     */
    getResourceUsageReport(
        request: UsageReportRequest,
        callback: (error: ServiceError | null, response: ResourceUsageReportResponse) => void,
    ): ClientUnaryCall;
    getResourceUsageReport(
        request: UsageReportRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ResourceUsageReportResponse) => void,
    ): ClientUnaryCall;
    getResourceUsageReport(
        request: UsageReportRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ResourceUsageReportResponse) => void,
    ): ClientUnaryCall;
    /**
     * Returns aggregated usage report by label keys and values
     * under the specified billing account.
     *
     * This method provides detailed usage and cost information grouped by label key-value pairs
     * within the specified billing account. Labels are user-defined metadata tags attached to resources
     * (such as VMs, disks, etc.) in the form of key-value pairs (e.g., "env:prod", "region:us-west").
     * The data can be filtered by various entity types and aggregated at different time granularities.
     *
     * Implementation details:
     * - Results are organized by label key-value pairs, with usage, costs, and credits detailed for each
     * - If labels filter is specified, only data for matching labels is included
     * - Other filters (cloud_ids, folder_ids, service_ids, sku_ids, resource_ids) are always applied if present
     * - Resources can have multiple labels attached (e.g., a VM might have "env:prod", "team:finance", "region:us")
     * - If a resource has multiple labels at the same point in time, the usage and cost metrics are reported for each label separately.
     *   In other words, the same resource's cost is **duplicated** across its labels rather than split. For example,
     *   if a VM costs 90 units and has 3 labels, the report will show 90 units for each label, not 30 units per label.
     * - This allows for custom business dimensions analysis based on resource tagging
     * - Usage data is aggregated for all resources that share the same label
     * - Particularly useful for cost allocation and chargeback across business units, environments, or projects
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     */
    getLabelKeyUsageReport(
        request: UsageReportRequest,
        callback: (error: ServiceError | null, response: LabelKeyUsageReportResponse) => void,
    ): ClientUnaryCall;
    getLabelKeyUsageReport(
        request: UsageReportRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: LabelKeyUsageReportResponse) => void,
    ): ClientUnaryCall;
    getLabelKeyUsageReport(
        request: UsageReportRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: LabelKeyUsageReportResponse) => void,
    ): ClientUnaryCall;
    /**
     * Returns aggregated usage report for the specified service instances
     * under the specified billing account.
     *
     * This method provides detailed usage and cost information grouped by service instances
     * within the specified billing account. Service instances represent individual billable
     * entities such as cloud instances, DataLens instances, Tracker instances, Cloud Video
     * instances, and other service-specific instances. The data can be filtered by various
     * entity types and aggregated at different time granularities.
     *
     * Implementation details:
     * - Results are organized by service instance, with each instance's usage, costs, and credits detailed
     * - If service_instance_ids are specified, only data for those instances is included (using OR logic)
     * - When no service_instance_ids are specified, data for all service instances under the billing account is returned
     * - Other filters (cloud_ids, folder_ids, service_ids, sku_ids, resource_ids, labels) are always applied if present
     * - If both cloud_ids and service_instance_ids are specified in the request, the results are filtered
     *   by the intersection of these filters (AND logic).
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     */
    getServiceInstanceUsageReport(
        request: UsageReportRequest,
        callback: (
            error: ServiceError | null,
            response: ServiceInstanceUsageReportResponse,
        ) => void,
    ): ClientUnaryCall;
    getServiceInstanceUsageReport(
        request: UsageReportRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ServiceInstanceUsageReportResponse,
        ) => void,
    ): ClientUnaryCall;
    getServiceInstanceUsageReport(
        request: UsageReportRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ServiceInstanceUsageReportResponse,
        ) => void,
    ): ClientUnaryCall;
}

export const ConsumptionCoreServiceClient = makeGenericClientConstructor(
    ConsumptionCoreServiceService,
    'yandex.cloud.billing.usage_records.v1.ConsumptionCoreService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ConsumptionCoreServiceClient;
    service: typeof ConsumptionCoreServiceService;
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
