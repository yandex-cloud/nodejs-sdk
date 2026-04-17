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
    Cloud,
    ServiceInstance,
    Service,
    SKU,
    BillingAccount,
    Folder,
    Resource,
} from './billing_types';
import { Timestamp } from '../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.billing.usage_records.v1';

/** GetUsageRequest request for retrieving usage metadata */
export interface GetUsageRequest {
    /**
     * Required. Billing account identifier.
     * The ID of the billing account to retrieve usage metadata for.
     * Must be a valid and accessible billing account ID.
     */
    billingAccountId: string;
    /**
     * Start date for data retrieval.
     * The inclusive start of the date range for which to retrieve usage metadata.
     * Must be specified and cannot be empty.
     * The time portion is ignored; the date is considered to start at 00:00:00.
     */
    startDate?: Date;
    /**
     * End date for data retrieval.
     * The inclusive end of the date range for which to retrieve usage metadata.
     * Must be specified, cannot be empty, and must be greater than or equal to start_date.
     * The time portion is ignored; the date is considered to end at 23:59:59.
     */
    endDate?: Date;
    /**
     * Optional. Cloud IDs filter.
     * Additional filter that works alongside the billing_account_id and date range.
     * When specified, includes usage records where cloud_id matches any of the provided values.
     * Acts as an OR condition (cloud_id IN cloud_ids).
     * If empty, this filter is not applied.
     */
    cloudIds: string[];
    /**
     * Optional. Label keys filter.
     * Additional filter that works alongside the billing_account_id and date range.
     * When specified, includes usage records where label_key matches any of the provided values.
     * Acts as an OR condition (label_key IN label_keys).
     * If empty, this filter is not applied.
     */
    labelKeys: string[];
    /**
     * Optional. Service IDs filter.
     * Additional filter that works alongside the billing_account_id and date range.
     * When specified, includes usage records where service_id matches any of the provided values.
     * Acts as an OR condition (service_id IN service_ids).
     * If empty, this filter is not applied.
     */
    serviceIds: string[];
    /**
     * Optional. SKU IDs filter.
     * Additional filter that works alongside the billing_account_id and date range.
     * When specified, includes usage records where sku_id matches any of the provided values.
     * Acts as an OR condition (sku_id IN sku_ids).
     * If empty, this filter is not applied.
     */
    skuIds: string[];
}

/** Response for usage metadata request */
export interface GetUsageResponse {
    /**
     * List of available clouds for the current user/context (billing_account_id with sub-accounts)
     * Contains cloud entities that the user has access to within the specified date range.
     *
     * Note: Empty cloud_id values are considered as "consumption outside the cloud"
     * and represented with an empty string id and name "Usage is out of scope of the Cloud"
     * The list is sorted by cloud name in ascending order.
     */
    clouds: Cloud[];
    /**
     * List of available label keys for the current user/context (billing_account_id with sub-accounts)
     * Contains all label keys that exist in usage records
     * within the specified date range.
     * These keys can be used for filtering and grouping in reports or
     * passed to the GetLabel method to retrieve possible values.
     * The list is sorted in ascending order.
     */
    labelKeys: string[];
    /**
     * List of available services for the current user/context (billing_account_id with sub-accounts)
     * Contains service entities with their IDs, names and descriptions that
     * have usage records within the specified billing account and date range.
     * Services represent the top-level grouping of cloud offerings.
     * The list is sorted by service name in ascending order.
     */
    services: Service[];
    /**
     * List of available SKUs for the current user/context (billing_account_id with sub-accounts)
     * Contains SKU entities with their IDs, names, translations and pricing units
     * that have usage records within the specified billing account and date range.
     * SKUs represent specific service offerings
     * The list is sorted by SKU name in ascending order.
     */
    skus: SKU[];
    /**
     * List of available BillingAccounts for the current user/context (billing_account_id with sub-accounts)
     * Contains billing account entities that the user has access to and
     * that have usage records within the specified date range.
     * Includes both the main account and any sub-accounts.
     * Sub-accounts are sorted by name in ascending order.
     * The master account is placed last in the list
     */
    billingAccounts: BillingAccount[];
}

/** GetServiceInstanceRequest request for retrieving service instance usage metadata */
export interface GetServiceInstanceRequest {
    /**
     * Required. Billing account identifier.
     * The ID of the billing account to retrieve usage metadata for.
     * Must be a valid and accessible billing account ID.
     */
    billingAccountId: string;
    /**
     * Start date for data retrieval.
     * The inclusive start of the date range for which to retrieve usage metadata.
     * Must be specified and cannot be empty.
     * The time portion is ignored; the date is considered to start at 00:00:00.
     */
    startDate?: Date;
    /**
     * End date for data retrieval.
     * The inclusive end of the date range for which to retrieve usage metadata.
     * Must be specified, cannot be empty, and must be greater than or equal to start_date.
     * The time portion is ignored; the date is considered to end at 23:59:59.
     */
    endDate?: Date;
    /**
     * Optional. Service instance IDs filter.
     * Additional filter that works alongside the billing_account_id and date range.
     * When specified, includes usage records where service_instance_id matches any of the provided values.
     * Acts as an OR condition (service_instance_id IN service_instance_ids).
     * If empty, this filter is not applied.
     */
    serviceInstanceIds: string[];
}

/** Response for service instance usage metadata request */
export interface GetServiceInstanceResponse {
    /**
     * List of available service instances for the current user/context (billing_account_id with sub-accounts)
     * Contains service instance entities that the user has access to within the specified date range.
     * The list is sorted by service instance name in ascending order.
     */
    serviceInstances: ServiceInstance[];
}

/** Request for retrieving label metadata */
export interface GetLabelRequest {
    /**
     * Required. Billing account identifier.
     * The ID of the billing account to retrieve label metadata for.
     * Must be a valid and accessible billing account ID.
     */
    billingAccountId: string;
    /**
     * Start date for data retrieval.
     * The inclusive start of the date range for which to retrieve label metadata.
     * Must be specified and cannot be empty.
     * The time portion is ignored; the date is considered to start at 00:00:00.
     */
    startDate?: Date;
    /**
     * End date for data retrieval.
     * The inclusive end of the date range for which to retrieve label metadata.
     * Must be specified, cannot be empty, and must be greater than or equal to start_date.
     * The time portion is ignored; the date is considered to end at 23:59:59.
     */
    endDate?: Date;
    /**
     * Optional. Cloud IDs filter.
     * Additional filter that works alongside the billing_account_id and date range.
     * When specified, includes labels where cloud_id matches any of the provided values.
     * Acts as an OR condition (cloud_id IN cloud_ids).
     * If empty, this filter is not applied.
     */
    cloudIds: string[];
    /**
     * Optional. Folder IDs filter.
     * Additional filter that works alongside the billing_account_id and date range.
     * When specified, includes labels where folder_id matches any of the provided values.
     * Acts as an OR condition (folder_id IN folder_ids).
     * If empty, this filter is not applied.
     */
    folderIds: string[];
    /**
     * Label key to filter values for. If specified, response will contain values
     * for this specific key.
     * Must be a non-empty string representing a valid label key.
     */
    labelKey: string;
    /**
     * Optional. If provided along with label_key, the response will return
     * an array of matches for this label_value.
     * Used for exact matching of label values.
     * If specified, label_value_filter is ignored and pagination is not applied.
     */
    labelValue: string;
    /**
     * Optional array of label values to filter results:
     * Returns in response as is if label_value is not provided, otherwise returns empty label_value_filter
     */
    labelValueFilter: string[];
    /**
     * Optional. Page size for paginated results.
     * Specifies the maximum number of label values to return per page.
     * If not specified or set to 0, defaults to 10.
     * If greater than 10000, will be coerced down to 10000.
     */
    pageSize: number;
    /**
     * Optional. Page token for paginated results.
     * Token from a previous GetLabelResponse used to retrieve the next page.
     * If empty, retrieves the first page.
     */
    pageToken: string;
}

/** Response for label metadata request */
export interface GetLabelResponse {
    /**
     * List of label values matching the request criteria
     * Contains label values that match the specified label key pattern.
     * Values are sorted alphabetically.
     */
    labelValues: string[];
    /**
     * List of label values from the label_value_filter in the request
     * Contains the same values as provided in the request's label_value_filter.
     * Included for convenience in the response.
     * This field is only populated when label_value_filter was specified in the request
     * and label_value was not specified.
     */
    labelValueFilter: string[];
    /**
     * Token for getting the next page of results.
     * If empty, there are no more results.
     * Use this token in a subsequent request's page_token field to retrieve
     * the next page of results.
     * The token encodes the pagination state.
     *
     * It should be passed verbatim in subsequent requests.
     */
    nextPageToken: string;
}

/** Request for retrieving folder metadata */
export interface GetCloudRequest {
    /**
     * Required. Billing account identifier.
     * The ID of the billing account to retrieve cloud and folder metadata for.
     * Must be a valid and accessible billing account ID.
     */
    billingAccountId: string;
    /**
     * Start date for data retrieval.
     * The inclusive start of the date range for which to retrieve cloud and folder metadata.
     * Must be specified and cannot be empty.
     * The time portion is ignored; the date is considered to start at 00:00:00.
     */
    startDate?: Date;
    /**
     * End date for data retrieval.
     * The inclusive end of the date range for which to retrieve cloud and folder metadata.
     * Must be specified, cannot be empty, and must be greater than or equal to start_date.
     * The time portion is ignored; the date is considered to end at 23:59:59.
     */
    endDate?: Date;
    /**
     * Optional. List of cloud IDs to filter clouds by.
     * Note: cloud_id filtering supports case-insensitive substring matching.
     * No wildcards or regex patterns are supported - just simple substring matching.
     * The filter works with partial cloud IDs, and will match any cloud where
     * the provided substring appears anywhere in the cloud_id.
     * For example, filter "abc" will match cloud_ids like "abc123", "123abc", or "1abc2".
     * If empty, no filtering by cloud ID is applied.
     */
    cloudIds: string[];
    /**
     * Optional. List of folder IDs to filter folders by.
     * Note: folder_id filtering supports case-insensitive substring matching.
     * No wildcards or regex patterns are supported - just simple substring matching.
     * The filter works with partial folder IDs, and will match any folder where
     * the provided substring appears anywhere in the folder_id.
     * For example, filter "abc" will match folder_ids like "abc123", "123abc", or "1abc2".
     * If empty, no filtering by folder ID is applied.
     */
    folderIds: string[];
    /**
     * Optional. Page size for paginated results.
     * Specifies the maximum number of Folder objects to return per page.
     * If not specified or set to 0, defaults to 10.
     * If greater than 10000, will be coerced down to 10000.
     */
    pageSize: number;
    /**
     * Optional. Page token for paginated results.
     * Token from a previous GetCloudResponse used to retrieve the next page.
     * If empty, retrieves the first page.
     * The token encodes the pagination state.
     */
    pageToken: string;
}

/** Response for cloud metadata request */
export interface GetCloudResponse {
    /**
     * List of clouds matching the request criteria
     * Contains CloudInfo objects for each cloud that matches the specified
     * filtering criteria
     * The list is sorted by cloud name in ascending order.
     *
     * Note: only clouds with at least one folder are included in the response.
     */
    items: GetCloudResponse_CloudInfo[];
    /**
     * Token for getting the next page of results.
     * If empty, there are no more results.
     * Use this token in a subsequent request's page_token field to retrieve
     * the next page of results.
     * The token encodes the pagination state.
     *
     * It should be passed verbatim in subsequent requests.
     */
    nextPageToken: string;
}

/** Information about a cloud and its folders */
export interface GetCloudResponse_CloudInfo {
    /** Cloud information */
    cloud?: Cloud;
    /**
     * List of folders belonging to this cloud
     * Contains folder entities that belong to this cloud
     * and match any folder ID filtering criteria from the request.
     * The list is sorted by folder name in ascending order.
     *
     * Only folders that had usage during the specified date range are included.
     */
    folders: Folder[];
}

/**
 * GetResourcesRequest request for retrieving resources with associated service instances.
 * This message defines the parameters needed to fetch and filter resources
 * associated with a billing account within a date range.
 */
export interface GetResourcesRequest {
    /**
     * Required. Billing account identifier.
     * The ID of the billing account to retrieve resources for.
     * Must be a valid and accessible billing account ID.
     */
    billingAccountId: string;
    /**
     * Start date for data retrieval.
     * The inclusive start of the date range for which to retrieve resources.
     * Must be specified and cannot be empty.
     * The time portion is ignored; the date is considered to start at 00:00:00.
     */
    startDate?: Date;
    /**
     * End date for data retrieval.
     * The inclusive end of the date range for which to retrieve resources.
     * Must be specified, cannot be empty, and must be greater than or equal to start_date.
     * The time portion is ignored; the date is considered to end at 23:59:59.
     */
    endDate?: Date;
    /**
     * Optional. List of service instances IDs to filter service instances by.
     * Note: service_instances_ids filtering supports case-insensitive substring matching.
     * No wildcards or regex patterns are supported - just simple substring matching.
     * The filter works with partial service instances IDs, and will match any service instances where
     * the provided substring appears anywhere in the service_instances_id.
     * For example, filter "abc" will match service_instances_ids like "abc123", "123abc", or "1abc2".
     * If empty, no filtering by service instance ID is applied.
     */
    serviceInstancesIds: string[];
    /**
     * Optional. List of resource IDs to filter resources by.
     * Note: resource_ids filtering supports case-insensitive substring matching.
     * No wildcards or regex patterns are supported - just simple substring matching.
     * The filter works with partial resource IDs, and will match any resource where
     * the provided substring appears anywhere in the resource_ids.
     * For example, filter "abc" will match resource_ids like "abc123", "123abc", or "1abc2".
     * If empty, no filtering by resource ID is applied.
     */
    resourceIds: string[];
    /**
     * Optional. Page size for paginated results.
     * Specifies the maximum number of resource IDs to return per page.
     * If not specified or set to 0, defaults to 10.
     * If greater than 10000, will be coerced down to 10000.
     */
    pageSize: number;
    /**
     * Optional. Page token for paginated results.
     * Token from a previous GetResourceIDsResponse used to retrieve the next page.
     * If empty, retrieves the first page.
     * The token encodes the pagination state.
     */
    pageToken: string;
}

/**
 * The response for resources request.
 * This message contains a list of resource IDs splited by service instances that match the search criteria
 * specified in the request, along with pagination information.
 */
export interface GetResourcesResponse {
    /**
     * List of service instances matching the request criteria
     * Contains ServiceInstanceInfo objects for each service instance that matches the specified
     * filtering criteria
     * The list is sorted by service instance name in ascending order.
     *
     * Note: only service instances with at least one resource are included in the response.
     */
    items: GetResourcesResponse_ServiceInstanceInfo[];
    /**
     * Token for getting the next page of results.
     * If empty, there are no more results.
     * Use this token in a subsequent request's page_token field to retrieve
     * the next page of results.
     * The token encodes the pagination state.
     *
     * It should be passed verbatim in subsequent requests.
     */
    nextPageToken: string;
}

/** Information about a service instances and its resources */
export interface GetResourcesResponse_ServiceInstanceInfo {
    /** Service instance information */
    serviceInstance?: ServiceInstance;
    /**
     * List of resources belonging to this service instances
     * Contains resource entities that belong to this service instance
     * and match any resource ID filtering criteria from the request.
     * The list is sorted by resource ID in ascending order.
     *
     * Only resources that had usage during the specified date range are included.
     */
    resources: Resource[];
}

const baseGetUsageRequest: object = {
    billingAccountId: '',
    cloudIds: '',
    labelKeys: '',
    serviceIds: '',
    skuIds: '',
};

export const GetUsageRequest: {
    encode(message: GetUsageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetUsageRequest;
    fromJSON(object: any): GetUsageRequest;
    toJSON(message: GetUsageRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetUsageRequest>, I>>(object: I): GetUsageRequest;
} = {
    encode(message: GetUsageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
        for (const v of message.labelKeys) {
            writer.uint32(42).string(v!);
        }
        for (const v of message.serviceIds) {
            writer.uint32(50).string(v!);
        }
        for (const v of message.skuIds) {
            writer.uint32(58).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetUsageRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetUsageRequest } as GetUsageRequest;
        message.cloudIds = [];
        message.labelKeys = [];
        message.serviceIds = [];
        message.skuIds = [];
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
                    message.labelKeys.push(reader.string());
                    break;
                case 6:
                    message.serviceIds.push(reader.string());
                    break;
                case 7:
                    message.skuIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetUsageRequest {
        const message = { ...baseGetUsageRequest } as GetUsageRequest;
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
        message.labelKeys = (object.labelKeys ?? []).map((e: any) => String(e));
        message.serviceIds = (object.serviceIds ?? []).map((e: any) => String(e));
        message.skuIds = (object.skuIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: GetUsageRequest): unknown {
        const obj: any = {};
        message.billingAccountId !== undefined && (obj.billingAccountId = message.billingAccountId);
        message.startDate !== undefined && (obj.startDate = message.startDate.toISOString());
        message.endDate !== undefined && (obj.endDate = message.endDate.toISOString());
        if (message.cloudIds) {
            obj.cloudIds = message.cloudIds.map((e) => e);
        } else {
            obj.cloudIds = [];
        }
        if (message.labelKeys) {
            obj.labelKeys = message.labelKeys.map((e) => e);
        } else {
            obj.labelKeys = [];
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
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetUsageRequest>, I>>(object: I): GetUsageRequest {
        const message = { ...baseGetUsageRequest } as GetUsageRequest;
        message.billingAccountId = object.billingAccountId ?? '';
        message.startDate = object.startDate ?? undefined;
        message.endDate = object.endDate ?? undefined;
        message.cloudIds = object.cloudIds?.map((e) => e) || [];
        message.labelKeys = object.labelKeys?.map((e) => e) || [];
        message.serviceIds = object.serviceIds?.map((e) => e) || [];
        message.skuIds = object.skuIds?.map((e) => e) || [];
        return message;
    },
};

const baseGetUsageResponse: object = { labelKeys: '' };

export const GetUsageResponse: {
    encode(message: GetUsageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetUsageResponse;
    fromJSON(object: any): GetUsageResponse;
    toJSON(message: GetUsageResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<GetUsageResponse>, I>>(object: I): GetUsageResponse;
} = {
    encode(message: GetUsageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.clouds) {
            Cloud.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.labelKeys) {
            writer.uint32(18).string(v!);
        }
        for (const v of message.services) {
            Service.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.skus) {
            SKU.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.billingAccounts) {
            BillingAccount.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetUsageResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetUsageResponse } as GetUsageResponse;
        message.clouds = [];
        message.labelKeys = [];
        message.services = [];
        message.skus = [];
        message.billingAccounts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clouds.push(Cloud.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.labelKeys.push(reader.string());
                    break;
                case 3:
                    message.services.push(Service.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.skus.push(SKU.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.billingAccounts.push(BillingAccount.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetUsageResponse {
        const message = { ...baseGetUsageResponse } as GetUsageResponse;
        message.clouds = (object.clouds ?? []).map((e: any) => Cloud.fromJSON(e));
        message.labelKeys = (object.labelKeys ?? []).map((e: any) => String(e));
        message.services = (object.services ?? []).map((e: any) => Service.fromJSON(e));
        message.skus = (object.skus ?? []).map((e: any) => SKU.fromJSON(e));
        message.billingAccounts = (object.billingAccounts ?? []).map((e: any) =>
            BillingAccount.fromJSON(e),
        );
        return message;
    },

    toJSON(message: GetUsageResponse): unknown {
        const obj: any = {};
        if (message.clouds) {
            obj.clouds = message.clouds.map((e) => (e ? Cloud.toJSON(e) : undefined));
        } else {
            obj.clouds = [];
        }
        if (message.labelKeys) {
            obj.labelKeys = message.labelKeys.map((e) => e);
        } else {
            obj.labelKeys = [];
        }
        if (message.services) {
            obj.services = message.services.map((e) => (e ? Service.toJSON(e) : undefined));
        } else {
            obj.services = [];
        }
        if (message.skus) {
            obj.skus = message.skus.map((e) => (e ? SKU.toJSON(e) : undefined));
        } else {
            obj.skus = [];
        }
        if (message.billingAccounts) {
            obj.billingAccounts = message.billingAccounts.map((e) =>
                e ? BillingAccount.toJSON(e) : undefined,
            );
        } else {
            obj.billingAccounts = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetUsageResponse>, I>>(object: I): GetUsageResponse {
        const message = { ...baseGetUsageResponse } as GetUsageResponse;
        message.clouds = object.clouds?.map((e) => Cloud.fromPartial(e)) || [];
        message.labelKeys = object.labelKeys?.map((e) => e) || [];
        message.services = object.services?.map((e) => Service.fromPartial(e)) || [];
        message.skus = object.skus?.map((e) => SKU.fromPartial(e)) || [];
        message.billingAccounts =
            object.billingAccounts?.map((e) => BillingAccount.fromPartial(e)) || [];
        return message;
    },
};

const baseGetServiceInstanceRequest: object = { billingAccountId: '', serviceInstanceIds: '' };

export const GetServiceInstanceRequest: {
    encode(message: GetServiceInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceInstanceRequest;
    fromJSON(object: any): GetServiceInstanceRequest;
    toJSON(message: GetServiceInstanceRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetServiceInstanceRequest>, I>>(object: I): GetServiceInstanceRequest;
} = {
    encode(
        message: GetServiceInstanceRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.billingAccountId !== '') {
            writer.uint32(10).string(message.billingAccountId);
        }
        if (message.startDate !== undefined) {
            Timestamp.encode(toTimestamp(message.startDate), writer.uint32(18).fork()).ldelim();
        }
        if (message.endDate !== undefined) {
            Timestamp.encode(toTimestamp(message.endDate), writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.serviceInstanceIds) {
            writer.uint32(34).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceInstanceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetServiceInstanceRequest } as GetServiceInstanceRequest;
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
                    message.serviceInstanceIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetServiceInstanceRequest {
        const message = { ...baseGetServiceInstanceRequest } as GetServiceInstanceRequest;
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
        message.serviceInstanceIds = (object.serviceInstanceIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: GetServiceInstanceRequest): unknown {
        const obj: any = {};
        message.billingAccountId !== undefined && (obj.billingAccountId = message.billingAccountId);
        message.startDate !== undefined && (obj.startDate = message.startDate.toISOString());
        message.endDate !== undefined && (obj.endDate = message.endDate.toISOString());
        if (message.serviceInstanceIds) {
            obj.serviceInstanceIds = message.serviceInstanceIds.map((e) => e);
        } else {
            obj.serviceInstanceIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetServiceInstanceRequest>, I>>(
        object: I,
    ): GetServiceInstanceRequest {
        const message = { ...baseGetServiceInstanceRequest } as GetServiceInstanceRequest;
        message.billingAccountId = object.billingAccountId ?? '';
        message.startDate = object.startDate ?? undefined;
        message.endDate = object.endDate ?? undefined;
        message.serviceInstanceIds = object.serviceInstanceIds?.map((e) => e) || [];
        return message;
    },
};

const baseGetServiceInstanceResponse: object = {};

export const GetServiceInstanceResponse: {
    encode(message: GetServiceInstanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceInstanceResponse;
    fromJSON(object: any): GetServiceInstanceResponse;
    toJSON(message: GetServiceInstanceResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<GetServiceInstanceResponse>, I>>(object: I): GetServiceInstanceResponse;
} = {
    encode(
        message: GetServiceInstanceResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.serviceInstances) {
            ServiceInstance.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceInstanceResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetServiceInstanceResponse } as GetServiceInstanceResponse;
        message.serviceInstances = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceInstances.push(ServiceInstance.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetServiceInstanceResponse {
        const message = { ...baseGetServiceInstanceResponse } as GetServiceInstanceResponse;
        message.serviceInstances = (object.serviceInstances ?? []).map((e: any) =>
            ServiceInstance.fromJSON(e),
        );
        return message;
    },

    toJSON(message: GetServiceInstanceResponse): unknown {
        const obj: any = {};
        if (message.serviceInstances) {
            obj.serviceInstances = message.serviceInstances.map((e) =>
                e ? ServiceInstance.toJSON(e) : undefined,
            );
        } else {
            obj.serviceInstances = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetServiceInstanceResponse>, I>>(
        object: I,
    ): GetServiceInstanceResponse {
        const message = { ...baseGetServiceInstanceResponse } as GetServiceInstanceResponse;
        message.serviceInstances =
            object.serviceInstances?.map((e) => ServiceInstance.fromPartial(e)) || [];
        return message;
    },
};

const baseGetLabelRequest: object = {
    billingAccountId: '',
    cloudIds: '',
    folderIds: '',
    labelKey: '',
    labelValue: '',
    labelValueFilter: '',
    pageSize: 0,
    pageToken: '',
};

export const GetLabelRequest: {
    encode(message: GetLabelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLabelRequest;
    fromJSON(object: any): GetLabelRequest;
    toJSON(message: GetLabelRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetLabelRequest>, I>>(object: I): GetLabelRequest;
} = {
    encode(message: GetLabelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
            writer.uint32(74).string(v!);
        }
        for (const v of message.folderIds) {
            writer.uint32(82).string(v!);
        }
        if (message.labelKey !== '') {
            writer.uint32(34).string(message.labelKey);
        }
        if (message.labelValue !== '') {
            writer.uint32(42).string(message.labelValue);
        }
        for (const v of message.labelValueFilter) {
            writer.uint32(50).string(v!);
        }
        if (message.pageSize !== 0) {
            writer.uint32(56).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(66).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetLabelRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetLabelRequest } as GetLabelRequest;
        message.cloudIds = [];
        message.folderIds = [];
        message.labelValueFilter = [];
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
                case 9:
                    message.cloudIds.push(reader.string());
                    break;
                case 10:
                    message.folderIds.push(reader.string());
                    break;
                case 4:
                    message.labelKey = reader.string();
                    break;
                case 5:
                    message.labelValue = reader.string();
                    break;
                case 6:
                    message.labelValueFilter.push(reader.string());
                    break;
                case 7:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 8:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetLabelRequest {
        const message = { ...baseGetLabelRequest } as GetLabelRequest;
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
        message.labelKey =
            object.labelKey !== undefined && object.labelKey !== null
                ? String(object.labelKey)
                : '';
        message.labelValue =
            object.labelValue !== undefined && object.labelValue !== null
                ? String(object.labelValue)
                : '';
        message.labelValueFilter = (object.labelValueFilter ?? []).map((e: any) => String(e));
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: GetLabelRequest): unknown {
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
        message.labelKey !== undefined && (obj.labelKey = message.labelKey);
        message.labelValue !== undefined && (obj.labelValue = message.labelValue);
        if (message.labelValueFilter) {
            obj.labelValueFilter = message.labelValueFilter.map((e) => e);
        } else {
            obj.labelValueFilter = [];
        }
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetLabelRequest>, I>>(object: I): GetLabelRequest {
        const message = { ...baseGetLabelRequest } as GetLabelRequest;
        message.billingAccountId = object.billingAccountId ?? '';
        message.startDate = object.startDate ?? undefined;
        message.endDate = object.endDate ?? undefined;
        message.cloudIds = object.cloudIds?.map((e) => e) || [];
        message.folderIds = object.folderIds?.map((e) => e) || [];
        message.labelKey = object.labelKey ?? '';
        message.labelValue = object.labelValue ?? '';
        message.labelValueFilter = object.labelValueFilter?.map((e) => e) || [];
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseGetLabelResponse: object = { labelValues: '', labelValueFilter: '', nextPageToken: '' };

export const GetLabelResponse: {
    encode(message: GetLabelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLabelResponse;
    fromJSON(object: any): GetLabelResponse;
    toJSON(message: GetLabelResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<GetLabelResponse>, I>>(object: I): GetLabelResponse;
} = {
    encode(message: GetLabelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.labelValues) {
            writer.uint32(10).string(v!);
        }
        for (const v of message.labelValueFilter) {
            writer.uint32(18).string(v!);
        }
        if (message.nextPageToken !== '') {
            writer.uint32(26).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetLabelResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetLabelResponse } as GetLabelResponse;
        message.labelValues = [];
        message.labelValueFilter = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.labelValues.push(reader.string());
                    break;
                case 2:
                    message.labelValueFilter.push(reader.string());
                    break;
                case 3:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetLabelResponse {
        const message = { ...baseGetLabelResponse } as GetLabelResponse;
        message.labelValues = (object.labelValues ?? []).map((e: any) => String(e));
        message.labelValueFilter = (object.labelValueFilter ?? []).map((e: any) => String(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: GetLabelResponse): unknown {
        const obj: any = {};
        if (message.labelValues) {
            obj.labelValues = message.labelValues.map((e) => e);
        } else {
            obj.labelValues = [];
        }
        if (message.labelValueFilter) {
            obj.labelValueFilter = message.labelValueFilter.map((e) => e);
        } else {
            obj.labelValueFilter = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetLabelResponse>, I>>(object: I): GetLabelResponse {
        const message = { ...baseGetLabelResponse } as GetLabelResponse;
        message.labelValues = object.labelValues?.map((e) => e) || [];
        message.labelValueFilter = object.labelValueFilter?.map((e) => e) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseGetCloudRequest: object = {
    billingAccountId: '',
    cloudIds: '',
    folderIds: '',
    pageSize: 0,
    pageToken: '',
};

export const GetCloudRequest: {
    encode(message: GetCloudRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCloudRequest;
    fromJSON(object: any): GetCloudRequest;
    toJSON(message: GetCloudRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetCloudRequest>, I>>(object: I): GetCloudRequest;
} = {
    encode(message: GetCloudRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
        if (message.pageSize !== 0) {
            writer.uint32(48).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(58).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetCloudRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetCloudRequest } as GetCloudRequest;
        message.cloudIds = [];
        message.folderIds = [];
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
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 7:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetCloudRequest {
        const message = { ...baseGetCloudRequest } as GetCloudRequest;
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
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: GetCloudRequest): unknown {
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
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetCloudRequest>, I>>(object: I): GetCloudRequest {
        const message = { ...baseGetCloudRequest } as GetCloudRequest;
        message.billingAccountId = object.billingAccountId ?? '';
        message.startDate = object.startDate ?? undefined;
        message.endDate = object.endDate ?? undefined;
        message.cloudIds = object.cloudIds?.map((e) => e) || [];
        message.folderIds = object.folderIds?.map((e) => e) || [];
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseGetCloudResponse: object = { nextPageToken: '' };

export const GetCloudResponse: {
    encode(message: GetCloudResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCloudResponse;
    fromJSON(object: any): GetCloudResponse;
    toJSON(message: GetCloudResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<GetCloudResponse>, I>>(object: I): GetCloudResponse;
} = {
    encode(message: GetCloudResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.items) {
            GetCloudResponse_CloudInfo.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetCloudResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetCloudResponse } as GetCloudResponse;
        message.items = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.items.push(GetCloudResponse_CloudInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetCloudResponse {
        const message = { ...baseGetCloudResponse } as GetCloudResponse;
        message.items = (object.items ?? []).map((e: any) =>
            GetCloudResponse_CloudInfo.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: GetCloudResponse): unknown {
        const obj: any = {};
        if (message.items) {
            obj.items = message.items.map((e) =>
                e ? GetCloudResponse_CloudInfo.toJSON(e) : undefined,
            );
        } else {
            obj.items = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetCloudResponse>, I>>(object: I): GetCloudResponse {
        const message = { ...baseGetCloudResponse } as GetCloudResponse;
        message.items = object.items?.map((e) => GetCloudResponse_CloudInfo.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseGetCloudResponse_CloudInfo: object = {};

export const GetCloudResponse_CloudInfo: {
    encode(message: GetCloudResponse_CloudInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCloudResponse_CloudInfo;
    fromJSON(object: any): GetCloudResponse_CloudInfo;
    toJSON(message: GetCloudResponse_CloudInfo): unknown;
    fromPartial<I extends Exact<DeepPartial<GetCloudResponse_CloudInfo>, I>>(object: I): GetCloudResponse_CloudInfo;
} = {
    encode(
        message: GetCloudResponse_CloudInfo,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.cloud !== undefined) {
            Cloud.encode(message.cloud, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.folders) {
            Folder.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetCloudResponse_CloudInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetCloudResponse_CloudInfo } as GetCloudResponse_CloudInfo;
        message.folders = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cloud = Cloud.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.folders.push(Folder.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetCloudResponse_CloudInfo {
        const message = { ...baseGetCloudResponse_CloudInfo } as GetCloudResponse_CloudInfo;
        message.cloud =
            object.cloud !== undefined && object.cloud !== null
                ? Cloud.fromJSON(object.cloud)
                : undefined;
        message.folders = (object.folders ?? []).map((e: any) => Folder.fromJSON(e));
        return message;
    },

    toJSON(message: GetCloudResponse_CloudInfo): unknown {
        const obj: any = {};
        message.cloud !== undefined &&
            (obj.cloud = message.cloud ? Cloud.toJSON(message.cloud) : undefined);
        if (message.folders) {
            obj.folders = message.folders.map((e) => (e ? Folder.toJSON(e) : undefined));
        } else {
            obj.folders = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetCloudResponse_CloudInfo>, I>>(
        object: I,
    ): GetCloudResponse_CloudInfo {
        const message = { ...baseGetCloudResponse_CloudInfo } as GetCloudResponse_CloudInfo;
        message.cloud =
            object.cloud !== undefined && object.cloud !== null
                ? Cloud.fromPartial(object.cloud)
                : undefined;
        message.folders = object.folders?.map((e) => Folder.fromPartial(e)) || [];
        return message;
    },
};

const baseGetResourcesRequest: object = {
    billingAccountId: '',
    serviceInstancesIds: '',
    resourceIds: '',
    pageSize: 0,
    pageToken: '',
};

export const GetResourcesRequest: {
    encode(message: GetResourcesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetResourcesRequest;
    fromJSON(object: any): GetResourcesRequest;
    toJSON(message: GetResourcesRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetResourcesRequest>, I>>(object: I): GetResourcesRequest;
} = {
    encode(message: GetResourcesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.billingAccountId !== '') {
            writer.uint32(10).string(message.billingAccountId);
        }
        if (message.startDate !== undefined) {
            Timestamp.encode(toTimestamp(message.startDate), writer.uint32(18).fork()).ldelim();
        }
        if (message.endDate !== undefined) {
            Timestamp.encode(toTimestamp(message.endDate), writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.serviceInstancesIds) {
            writer.uint32(34).string(v!);
        }
        for (const v of message.resourceIds) {
            writer.uint32(42).string(v!);
        }
        if (message.pageSize !== 0) {
            writer.uint32(48).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(58).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetResourcesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetResourcesRequest } as GetResourcesRequest;
        message.serviceInstancesIds = [];
        message.resourceIds = [];
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
                    message.serviceInstancesIds.push(reader.string());
                    break;
                case 5:
                    message.resourceIds.push(reader.string());
                    break;
                case 6:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 7:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetResourcesRequest {
        const message = { ...baseGetResourcesRequest } as GetResourcesRequest;
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
        message.serviceInstancesIds = (object.serviceInstancesIds ?? []).map((e: any) => String(e));
        message.resourceIds = (object.resourceIds ?? []).map((e: any) => String(e));
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: GetResourcesRequest): unknown {
        const obj: any = {};
        message.billingAccountId !== undefined && (obj.billingAccountId = message.billingAccountId);
        message.startDate !== undefined && (obj.startDate = message.startDate.toISOString());
        message.endDate !== undefined && (obj.endDate = message.endDate.toISOString());
        if (message.serviceInstancesIds) {
            obj.serviceInstancesIds = message.serviceInstancesIds.map((e) => e);
        } else {
            obj.serviceInstancesIds = [];
        }
        if (message.resourceIds) {
            obj.resourceIds = message.resourceIds.map((e) => e);
        } else {
            obj.resourceIds = [];
        }
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetResourcesRequest>, I>>(
        object: I,
    ): GetResourcesRequest {
        const message = { ...baseGetResourcesRequest } as GetResourcesRequest;
        message.billingAccountId = object.billingAccountId ?? '';
        message.startDate = object.startDate ?? undefined;
        message.endDate = object.endDate ?? undefined;
        message.serviceInstancesIds = object.serviceInstancesIds?.map((e) => e) || [];
        message.resourceIds = object.resourceIds?.map((e) => e) || [];
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseGetResourcesResponse: object = { nextPageToken: '' };

export const GetResourcesResponse: {
    encode(message: GetResourcesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetResourcesResponse;
    fromJSON(object: any): GetResourcesResponse;
    toJSON(message: GetResourcesResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<GetResourcesResponse>, I>>(object: I): GetResourcesResponse;
} = {
    encode(message: GetResourcesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.items) {
            GetResourcesResponse_ServiceInstanceInfo.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetResourcesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetResourcesResponse } as GetResourcesResponse;
        message.items = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.items.push(
                        GetResourcesResponse_ServiceInstanceInfo.decode(reader, reader.uint32()),
                    );
                    break;
                case 2:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetResourcesResponse {
        const message = { ...baseGetResourcesResponse } as GetResourcesResponse;
        message.items = (object.items ?? []).map((e: any) =>
            GetResourcesResponse_ServiceInstanceInfo.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: GetResourcesResponse): unknown {
        const obj: any = {};
        if (message.items) {
            obj.items = message.items.map((e) =>
                e ? GetResourcesResponse_ServiceInstanceInfo.toJSON(e) : undefined,
            );
        } else {
            obj.items = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetResourcesResponse>, I>>(
        object: I,
    ): GetResourcesResponse {
        const message = { ...baseGetResourcesResponse } as GetResourcesResponse;
        message.items =
            object.items?.map((e) => GetResourcesResponse_ServiceInstanceInfo.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseGetResourcesResponse_ServiceInstanceInfo: object = {};

export const GetResourcesResponse_ServiceInstanceInfo: {
    encode(message: GetResourcesResponse_ServiceInstanceInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetResourcesResponse_ServiceInstanceInfo;
    fromJSON(object: any): GetResourcesResponse_ServiceInstanceInfo;
    toJSON(message: GetResourcesResponse_ServiceInstanceInfo): unknown;
    fromPartial<I extends Exact<DeepPartial<GetResourcesResponse_ServiceInstanceInfo>, I>>(object: I): GetResourcesResponse_ServiceInstanceInfo;
} = {
    encode(
        message: GetResourcesResponse_ServiceInstanceInfo,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.serviceInstance !== undefined) {
            ServiceInstance.encode(message.serviceInstance, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.resources) {
            Resource.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): GetResourcesResponse_ServiceInstanceInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetResourcesResponse_ServiceInstanceInfo,
        } as GetResourcesResponse_ServiceInstanceInfo;
        message.resources = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceInstance = ServiceInstance.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources.push(Resource.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetResourcesResponse_ServiceInstanceInfo {
        const message = {
            ...baseGetResourcesResponse_ServiceInstanceInfo,
        } as GetResourcesResponse_ServiceInstanceInfo;
        message.serviceInstance =
            object.serviceInstance !== undefined && object.serviceInstance !== null
                ? ServiceInstance.fromJSON(object.serviceInstance)
                : undefined;
        message.resources = (object.resources ?? []).map((e: any) => Resource.fromJSON(e));
        return message;
    },

    toJSON(message: GetResourcesResponse_ServiceInstanceInfo): unknown {
        const obj: any = {};
        message.serviceInstance !== undefined &&
            (obj.serviceInstance = message.serviceInstance
                ? ServiceInstance.toJSON(message.serviceInstance)
                : undefined);
        if (message.resources) {
            obj.resources = message.resources.map((e) => (e ? Resource.toJSON(e) : undefined));
        } else {
            obj.resources = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetResourcesResponse_ServiceInstanceInfo>, I>>(
        object: I,
    ): GetResourcesResponse_ServiceInstanceInfo {
        const message = {
            ...baseGetResourcesResponse_ServiceInstanceInfo,
        } as GetResourcesResponse_ServiceInstanceInfo;
        message.serviceInstance =
            object.serviceInstance !== undefined && object.serviceInstance !== null
                ? ServiceInstance.fromPartial(object.serviceInstance)
                : undefined;
        message.resources = object.resources?.map((e) => Resource.fromPartial(e)) || [];
        return message;
    },
};

/**
 * MetadataService service for retrieving metadata related to usage records
 *
 * The MetadataService provides a set of methods for retrieving metadata and reference information
 * about billing usage records within a specific billing account and date range. This metadata
 * includes information about clouds, services, SKUs, labels, and resources
 * to understand the available entity structure before building detailed usage reports.
 *
 * Required permissions:
 * All methods in this service require one of the following permissions on the specified billing account:
 * - `billing.accounts.getReport`
 *
 * Rate limits:
 * This API is limited to 1 request per minute per IP address.
 */
export const MetadataServiceService = {
    /**
     * GetUsage returns usage metadata including available clouds, services, SKUs, label keys, and date ranges
     * for a specific billing account and date range.
     *
     * This method provides a view of all available entities
     * that can be used for usage reporting within the specified date range
     * for the billing account and all its sub-accounts including:
     * - List of available clouds in provided data range
     * - Available label keys that can be used for filtering or grouping
     * - Available services
     * - Available SKUs
     * - Available billing accounts (user billing account and his sub-accounts)
     *
     * Implementation details:
     * - Empty cloud_id values are translated to a "Usage is out of scope of the Cloud" designation
     * - All data is filtered to only include items that had usage during the specified date range
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     *
     * This method supports additional filtering by cloud_ids, label_keys, service_ids, and sku_ids.
     * These filters work as supplementary conditions to the primary billing_account_id and date range filters.
     * When provided, they further narrow down the results by applying additional OR conditions for each filter type.
     *
     * Required permissions:
     * - `billing.accounts.getReport` on the specified billing account
     */
    getUsage: {
        path: '/yandex.cloud.billing.usage_records.v1.MetadataService/GetUsage',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetUsageRequest) =>
            Buffer.from(GetUsageRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetUsageRequest.decode(value),
        responseSerialize: (value: GetUsageResponse) =>
            Buffer.from(GetUsageResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetUsageResponse.decode(value),
    },
    /**
     * GetServiceInstance returns service instance usage metadata for a specific billing account and date range.
     *
     * This method provides a view of all available service instance entities
     * that can be used for usage reporting within the specified date range
     * for the billing account and all its sub-accounts.
     *
     * Implementation details:
     * - All data is filtered to only include items that had usage during the specified date range
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     *
     * This method supports additional filtering by service_instance_ids.
     * These filters work as supplementary conditions to the primary billing_account_id and date range filters.
     * When provided, they further narrow down the results by applying additional OR conditions for each filter type.
     *
     * Required permissions:
     * - `billing.accounts.getReport` on the specified billing account
     */
    getServiceInstance: {
        path: '/yandex.cloud.billing.usage_records.v1.MetadataService/GetServiceInstance',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetServiceInstanceRequest) =>
            Buffer.from(GetServiceInstanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetServiceInstanceRequest.decode(value),
        responseSerialize: (value: GetServiceInstanceResponse) =>
            Buffer.from(GetServiceInstanceResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetServiceInstanceResponse.decode(value),
    },
    /**
     * GetLabel returns available label keys and values for a specific billing account
     * with pagination support.
     *
     * This method retrieves all available label values for a specified label key
     * within the given date range. It supports filtering by label value substring
     * and provides pagination for handling large result sets.
     *
     * This method can additionally filter label values by provided clouds and folders.
     *
     * The method can be used in several ways:
     * - With label_key only: Returns all values for that key with pagination
     * - With label_key and label_value: Returns array of matching labelValues with pagination
     * - With label_key and label_value_filter: Returns all values for that key with pagination
     *     and a separate array of labelValues from the labelValueFilters parameter
     * - With label_key, label_value and label_value_filter: returns only an array of matching labelValues
     *     with pagination and ignores labelValueFilters (i.e., labelValueFilters won't be returned)
     *
     * Implementation details:
     * - Case-insensitive label value matching when label_value is provided
     * - When label_value is specified, label_value_filter is ignored
     * - Label values are sorted alphabetically
     * - Pagination occurs when results exceed page_size
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
    getLabel: {
        path: '/yandex.cloud.billing.usage_records.v1.MetadataService/GetLabel',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetLabelRequest) =>
            Buffer.from(GetLabelRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetLabelRequest.decode(value),
        responseSerialize: (value: GetLabelResponse) =>
            Buffer.from(GetLabelResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetLabelResponse.decode(value),
    },
    /**
     * GetCloud returns available folders for specified clouds within a billing account
     * with optional filtering by cloud IDs, folder IDs and pagination support.
     *
     * This method returns a hierarchical view of clouds and their folders that the user
     * has access to within the specified date range. Results can be filtered by
     * specific cloud IDs and/or folder IDs, and pagination is supported for handling
     * large result sets.
     *
     * Implementation details:
     * - The method result does not contain empty cloud id information
     * - Filtering is done using case-insensitive substring matching
     * - Only clouds with at least one folder are included in the response
     * - Folder pagination is based on folder IDs, ordered alphabetically
     * - NextPageToken is only returned when there are more results available
     * - Base64-encoded page tokens are used for pagination state
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
    getCloud: {
        path: '/yandex.cloud.billing.usage_records.v1.MetadataService/GetCloud',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetCloudRequest) =>
            Buffer.from(GetCloudRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetCloudRequest.decode(value),
        responseSerialize: (value: GetCloudResponse) =>
            Buffer.from(GetCloudResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetCloudResponse.decode(value),
    },
    /**
     * GetResources returns available resources for specified service instances within a billing account
     * with optional filtering by service instance IDs, resource IDs and pagination support.
     *
     * This method returns a hierarchical view of service instances and their resources that the user
     * has access to within the specified date range. Results can be filtered by
     * specific service instance IDs and/or resource IDs, and pagination is supported for handling
     * large result sets.
     *
     * Implementation details:
     * - Filtering by resources is done using case-insensitive substring matching
     * - Filtering is done using case-insensitive substring matching
     * - Only service instances with at least one resource are included in the response
     * - Resource pagination is based on resource IDs, ordered alphabetically
     * - NextPageToken is only returned when there are more results available
     * - Base64-encoded page tokens are used for pagination state
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
    getResources: {
        path: '/yandex.cloud.billing.usage_records.v1.MetadataService/GetResources',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetResourcesRequest) =>
            Buffer.from(GetResourcesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetResourcesRequest.decode(value),
        responseSerialize: (value: GetResourcesResponse) =>
            Buffer.from(GetResourcesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetResourcesResponse.decode(value),
    },
} as const;

export interface MetadataServiceServer extends UntypedServiceImplementation {
    /**
     * GetUsage returns usage metadata including available clouds, services, SKUs, label keys, and date ranges
     * for a specific billing account and date range.
     *
     * This method provides a view of all available entities
     * that can be used for usage reporting within the specified date range
     * for the billing account and all its sub-accounts including:
     * - List of available clouds in provided data range
     * - Available label keys that can be used for filtering or grouping
     * - Available services
     * - Available SKUs
     * - Available billing accounts (user billing account and his sub-accounts)
     *
     * Implementation details:
     * - Empty cloud_id values are translated to a "Usage is out of scope of the Cloud" designation
     * - All data is filtered to only include items that had usage during the specified date range
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     *
     * This method supports additional filtering by cloud_ids, label_keys, service_ids, and sku_ids.
     * These filters work as supplementary conditions to the primary billing_account_id and date range filters.
     * When provided, they further narrow down the results by applying additional OR conditions for each filter type.
     *
     * Required permissions:
     * - `billing.accounts.getReport` on the specified billing account
     */
    getUsage: handleUnaryCall<GetUsageRequest, GetUsageResponse>;
    /**
     * GetServiceInstance returns service instance usage metadata for a specific billing account and date range.
     *
     * This method provides a view of all available service instance entities
     * that can be used for usage reporting within the specified date range
     * for the billing account and all its sub-accounts.
     *
     * Implementation details:
     * - All data is filtered to only include items that had usage during the specified date range
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     *
     * This method supports additional filtering by service_instance_ids.
     * These filters work as supplementary conditions to the primary billing_account_id and date range filters.
     * When provided, they further narrow down the results by applying additional OR conditions for each filter type.
     *
     * Required permissions:
     * - `billing.accounts.getReport` on the specified billing account
     */
    getServiceInstance: handleUnaryCall<GetServiceInstanceRequest, GetServiceInstanceResponse>;
    /**
     * GetLabel returns available label keys and values for a specific billing account
     * with pagination support.
     *
     * This method retrieves all available label values for a specified label key
     * within the given date range. It supports filtering by label value substring
     * and provides pagination for handling large result sets.
     *
     * This method can additionally filter label values by provided clouds and folders.
     *
     * The method can be used in several ways:
     * - With label_key only: Returns all values for that key with pagination
     * - With label_key and label_value: Returns array of matching labelValues with pagination
     * - With label_key and label_value_filter: Returns all values for that key with pagination
     *     and a separate array of labelValues from the labelValueFilters parameter
     * - With label_key, label_value and label_value_filter: returns only an array of matching labelValues
     *     with pagination and ignores labelValueFilters (i.e., labelValueFilters won't be returned)
     *
     * Implementation details:
     * - Case-insensitive label value matching when label_value is provided
     * - When label_value is specified, label_value_filter is ignored
     * - Label values are sorted alphabetically
     * - Pagination occurs when results exceed page_size
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
    getLabel: handleUnaryCall<GetLabelRequest, GetLabelResponse>;
    /**
     * GetCloud returns available folders for specified clouds within a billing account
     * with optional filtering by cloud IDs, folder IDs and pagination support.
     *
     * This method returns a hierarchical view of clouds and their folders that the user
     * has access to within the specified date range. Results can be filtered by
     * specific cloud IDs and/or folder IDs, and pagination is supported for handling
     * large result sets.
     *
     * Implementation details:
     * - The method result does not contain empty cloud id information
     * - Filtering is done using case-insensitive substring matching
     * - Only clouds with at least one folder are included in the response
     * - Folder pagination is based on folder IDs, ordered alphabetically
     * - NextPageToken is only returned when there are more results available
     * - Base64-encoded page tokens are used for pagination state
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
    getCloud: handleUnaryCall<GetCloudRequest, GetCloudResponse>;
    /**
     * GetResources returns available resources for specified service instances within a billing account
     * with optional filtering by service instance IDs, resource IDs and pagination support.
     *
     * This method returns a hierarchical view of service instances and their resources that the user
     * has access to within the specified date range. Results can be filtered by
     * specific service instance IDs and/or resource IDs, and pagination is supported for handling
     * large result sets.
     *
     * Implementation details:
     * - Filtering by resources is done using case-insensitive substring matching
     * - Filtering is done using case-insensitive substring matching
     * - Only service instances with at least one resource are included in the response
     * - Resource pagination is based on resource IDs, ordered alphabetically
     * - NextPageToken is only returned when there are more results available
     * - Base64-encoded page tokens are used for pagination state
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
    getResources: handleUnaryCall<GetResourcesRequest, GetResourcesResponse>;
}

export interface MetadataServiceClient extends Client {
    /**
     * GetUsage returns usage metadata including available clouds, services, SKUs, label keys, and date ranges
     * for a specific billing account and date range.
     *
     * This method provides a view of all available entities
     * that can be used for usage reporting within the specified date range
     * for the billing account and all its sub-accounts including:
     * - List of available clouds in provided data range
     * - Available label keys that can be used for filtering or grouping
     * - Available services
     * - Available SKUs
     * - Available billing accounts (user billing account and his sub-accounts)
     *
     * Implementation details:
     * - Empty cloud_id values are translated to a "Usage is out of scope of the Cloud" designation
     * - All data is filtered to only include items that had usage during the specified date range
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     *
     * This method supports additional filtering by cloud_ids, label_keys, service_ids, and sku_ids.
     * These filters work as supplementary conditions to the primary billing_account_id and date range filters.
     * When provided, they further narrow down the results by applying additional OR conditions for each filter type.
     *
     * Required permissions:
     * - `billing.accounts.getReport` on the specified billing account
     */
    getUsage(
        request: GetUsageRequest,
        callback: (error: ServiceError | null, response: GetUsageResponse) => void,
    ): ClientUnaryCall;
    getUsage(
        request: GetUsageRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetUsageResponse) => void,
    ): ClientUnaryCall;
    getUsage(
        request: GetUsageRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetUsageResponse) => void,
    ): ClientUnaryCall;
    /**
     * GetServiceInstance returns service instance usage metadata for a specific billing account and date range.
     *
     * This method provides a view of all available service instance entities
     * that can be used for usage reporting within the specified date range
     * for the billing account and all its sub-accounts.
     *
     * Implementation details:
     * - All data is filtered to only include items that had usage during the specified date range
     *
     * Error handling:
     * - Returns INVALID_ARGUMENT if the request parameters fail validation
     * - Returns UNAUTHENTICATED if the user is not authenticated or the billing account does not exist
     * - Returns PERMISSION_DENIED if the user lacks required permissions
     * - Returns INTERNAL for internal server errors
     *
     * This method supports additional filtering by service_instance_ids.
     * These filters work as supplementary conditions to the primary billing_account_id and date range filters.
     * When provided, they further narrow down the results by applying additional OR conditions for each filter type.
     *
     * Required permissions:
     * - `billing.accounts.getReport` on the specified billing account
     */
    getServiceInstance(
        request: GetServiceInstanceRequest,
        callback: (error: ServiceError | null, response: GetServiceInstanceResponse) => void,
    ): ClientUnaryCall;
    getServiceInstance(
        request: GetServiceInstanceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetServiceInstanceResponse) => void,
    ): ClientUnaryCall;
    getServiceInstance(
        request: GetServiceInstanceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetServiceInstanceResponse) => void,
    ): ClientUnaryCall;
    /**
     * GetLabel returns available label keys and values for a specific billing account
     * with pagination support.
     *
     * This method retrieves all available label values for a specified label key
     * within the given date range. It supports filtering by label value substring
     * and provides pagination for handling large result sets.
     *
     * This method can additionally filter label values by provided clouds and folders.
     *
     * The method can be used in several ways:
     * - With label_key only: Returns all values for that key with pagination
     * - With label_key and label_value: Returns array of matching labelValues with pagination
     * - With label_key and label_value_filter: Returns all values for that key with pagination
     *     and a separate array of labelValues from the labelValueFilters parameter
     * - With label_key, label_value and label_value_filter: returns only an array of matching labelValues
     *     with pagination and ignores labelValueFilters (i.e., labelValueFilters won't be returned)
     *
     * Implementation details:
     * - Case-insensitive label value matching when label_value is provided
     * - When label_value is specified, label_value_filter is ignored
     * - Label values are sorted alphabetically
     * - Pagination occurs when results exceed page_size
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
    getLabel(
        request: GetLabelRequest,
        callback: (error: ServiceError | null, response: GetLabelResponse) => void,
    ): ClientUnaryCall;
    getLabel(
        request: GetLabelRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetLabelResponse) => void,
    ): ClientUnaryCall;
    getLabel(
        request: GetLabelRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetLabelResponse) => void,
    ): ClientUnaryCall;
    /**
     * GetCloud returns available folders for specified clouds within a billing account
     * with optional filtering by cloud IDs, folder IDs and pagination support.
     *
     * This method returns a hierarchical view of clouds and their folders that the user
     * has access to within the specified date range. Results can be filtered by
     * specific cloud IDs and/or folder IDs, and pagination is supported for handling
     * large result sets.
     *
     * Implementation details:
     * - The method result does not contain empty cloud id information
     * - Filtering is done using case-insensitive substring matching
     * - Only clouds with at least one folder are included in the response
     * - Folder pagination is based on folder IDs, ordered alphabetically
     * - NextPageToken is only returned when there are more results available
     * - Base64-encoded page tokens are used for pagination state
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
    getCloud(
        request: GetCloudRequest,
        callback: (error: ServiceError | null, response: GetCloudResponse) => void,
    ): ClientUnaryCall;
    getCloud(
        request: GetCloudRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetCloudResponse) => void,
    ): ClientUnaryCall;
    getCloud(
        request: GetCloudRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetCloudResponse) => void,
    ): ClientUnaryCall;
    /**
     * GetResources returns available resources for specified service instances within a billing account
     * with optional filtering by service instance IDs, resource IDs and pagination support.
     *
     * This method returns a hierarchical view of service instances and their resources that the user
     * has access to within the specified date range. Results can be filtered by
     * specific service instance IDs and/or resource IDs, and pagination is supported for handling
     * large result sets.
     *
     * Implementation details:
     * - Filtering by resources is done using case-insensitive substring matching
     * - Filtering is done using case-insensitive substring matching
     * - Only service instances with at least one resource are included in the response
     * - Resource pagination is based on resource IDs, ordered alphabetically
     * - NextPageToken is only returned when there are more results available
     * - Base64-encoded page tokens are used for pagination state
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
    getResources(
        request: GetResourcesRequest,
        callback: (error: ServiceError | null, response: GetResourcesResponse) => void,
    ): ClientUnaryCall;
    getResources(
        request: GetResourcesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetResourcesResponse) => void,
    ): ClientUnaryCall;
    getResources(
        request: GetResourcesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetResourcesResponse) => void,
    ): ClientUnaryCall;
}

export const MetadataServiceClient = makeGenericClientConstructor(
    MetadataServiceService,
    'yandex.cloud.billing.usage_records.v1.MetadataService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): MetadataServiceClient;
    service: typeof MetadataServiceService;
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
