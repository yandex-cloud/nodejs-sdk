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
import { Resource } from './resource';
import { QuotaRequest } from './quota_request';
import { Operation } from '../../operation/operation';

export const protobufPackage = 'yandex.cloud.quotamanager.v1';

export interface GetQuotaRequestRequest {
    /** ID of the quota request to return. */
    quotaRequestId: string;
}

export interface CreateQuotaRequestRequest {
    /** Resource to create a quota request in. */
    resource?: Resource;
    /** Desired quota limits */
    desiredQuotaLimits: CreateQuotaRequestRequest_DesiredQuotaLimit[];
}

export interface CreateQuotaRequestRequest_DesiredQuotaLimit {
    /** ID of the quota */
    quotaId: string;
    /** Desired limit of the quota */
    desiredLimit: number;
}

export interface CreateQuotaRequestMetadata {
    /** ID of the quota request that is being created. */
    quotaRequestId: string;
}

export interface CancelQuotaRequestRequest {
    /** ID of the quota request to update. */
    quotaRequestId: string;
    /** Quota IDs that is being canceled. */
    quotaIds: string[];
}

export interface CancelQuotaRequestMetadata {
    /** ID of the quota request that is being updated. */
    quotaRequestId: string;
}

export interface ListQuotaRequestRequest {
    /** Resource to list quota requests in. */
    resource?: Resource;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [quotaRequest.status] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListQuotaRequestsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListQuotaRequestsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}

export interface ListQuotaRequestResponse {
    /** List of quota requests. */
    quotaRequests: QuotaRequest[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListQuotaRequestsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListQuotaRequestsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface ListQuotaRequestOperationsRequest {
    /** ID of the quota request to list operations for. */
    quotaRequestId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListQuotaRequestOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListQuotaRequestOperationsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}

export interface ListQuotaRequestOperationsResponse {
    /** List of operations for the specified quota request. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListQuotaRequestOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListQuotaRequestOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetQuotaRequestRequest: object = { quotaRequestId: '' };

export const GetQuotaRequestRequest: {
    encode(message: GetQuotaRequestRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetQuotaRequestRequest;
    fromJSON(object: any): GetQuotaRequestRequest;
    toJSON(message: GetQuotaRequestRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetQuotaRequestRequest>, I>>(object: I): GetQuotaRequestRequest;
} = {
    encode(message: GetQuotaRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.quotaRequestId !== '') {
            writer.uint32(10).string(message.quotaRequestId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetQuotaRequestRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetQuotaRequestRequest } as GetQuotaRequestRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quotaRequestId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetQuotaRequestRequest {
        const message = { ...baseGetQuotaRequestRequest } as GetQuotaRequestRequest;
        message.quotaRequestId =
            object.quotaRequestId !== undefined && object.quotaRequestId !== null
                ? String(object.quotaRequestId)
                : '';
        return message;
    },

    toJSON(message: GetQuotaRequestRequest): unknown {
        const obj: any = {};
        message.quotaRequestId !== undefined && (obj.quotaRequestId = message.quotaRequestId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetQuotaRequestRequest>, I>>(
        object: I,
    ): GetQuotaRequestRequest {
        const message = { ...baseGetQuotaRequestRequest } as GetQuotaRequestRequest;
        message.quotaRequestId = object.quotaRequestId ?? '';
        return message;
    },
};

const baseCreateQuotaRequestRequest: object = {};

export const CreateQuotaRequestRequest: {
    encode(message: CreateQuotaRequestRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateQuotaRequestRequest;
    fromJSON(object: any): CreateQuotaRequestRequest;
    toJSON(message: CreateQuotaRequestRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateQuotaRequestRequest>, I>>(object: I): CreateQuotaRequestRequest;
} = {
    encode(
        message: CreateQuotaRequestRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.resource !== undefined) {
            Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.desiredQuotaLimits) {
            CreateQuotaRequestRequest_DesiredQuotaLimit.encode(
                v!,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateQuotaRequestRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateQuotaRequestRequest } as CreateQuotaRequestRequest;
        message.desiredQuotaLimits = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resource = Resource.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.desiredQuotaLimits.push(
                        CreateQuotaRequestRequest_DesiredQuotaLimit.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateQuotaRequestRequest {
        const message = { ...baseCreateQuotaRequestRequest } as CreateQuotaRequestRequest;
        message.resource =
            object.resource !== undefined && object.resource !== null
                ? Resource.fromJSON(object.resource)
                : undefined;
        message.desiredQuotaLimits = (object.desiredQuotaLimits ?? []).map((e: any) =>
            CreateQuotaRequestRequest_DesiredQuotaLimit.fromJSON(e),
        );
        return message;
    },

    toJSON(message: CreateQuotaRequestRequest): unknown {
        const obj: any = {};
        message.resource !== undefined &&
            (obj.resource = message.resource ? Resource.toJSON(message.resource) : undefined);
        if (message.desiredQuotaLimits) {
            obj.desiredQuotaLimits = message.desiredQuotaLimits.map((e) =>
                e ? CreateQuotaRequestRequest_DesiredQuotaLimit.toJSON(e) : undefined,
            );
        } else {
            obj.desiredQuotaLimits = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateQuotaRequestRequest>, I>>(
        object: I,
    ): CreateQuotaRequestRequest {
        const message = { ...baseCreateQuotaRequestRequest } as CreateQuotaRequestRequest;
        message.resource =
            object.resource !== undefined && object.resource !== null
                ? Resource.fromPartial(object.resource)
                : undefined;
        message.desiredQuotaLimits =
            object.desiredQuotaLimits?.map((e) =>
                CreateQuotaRequestRequest_DesiredQuotaLimit.fromPartial(e),
            ) || [];
        return message;
    },
};

const baseCreateQuotaRequestRequest_DesiredQuotaLimit: object = { quotaId: '', desiredLimit: 0 };

export const CreateQuotaRequestRequest_DesiredQuotaLimit: {
    encode(message: CreateQuotaRequestRequest_DesiredQuotaLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateQuotaRequestRequest_DesiredQuotaLimit;
    fromJSON(object: any): CreateQuotaRequestRequest_DesiredQuotaLimit;
    toJSON(message: CreateQuotaRequestRequest_DesiredQuotaLimit): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateQuotaRequestRequest_DesiredQuotaLimit>, I>>(object: I): CreateQuotaRequestRequest_DesiredQuotaLimit;
} = {
    encode(
        message: CreateQuotaRequestRequest_DesiredQuotaLimit,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.quotaId !== '') {
            writer.uint32(10).string(message.quotaId);
        }
        if (message.desiredLimit !== 0) {
            writer.uint32(17).double(message.desiredLimit);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): CreateQuotaRequestRequest_DesiredQuotaLimit {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateQuotaRequestRequest_DesiredQuotaLimit,
        } as CreateQuotaRequestRequest_DesiredQuotaLimit;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quotaId = reader.string();
                    break;
                case 2:
                    message.desiredLimit = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateQuotaRequestRequest_DesiredQuotaLimit {
        const message = {
            ...baseCreateQuotaRequestRequest_DesiredQuotaLimit,
        } as CreateQuotaRequestRequest_DesiredQuotaLimit;
        message.quotaId =
            object.quotaId !== undefined && object.quotaId !== null ? String(object.quotaId) : '';
        message.desiredLimit =
            object.desiredLimit !== undefined && object.desiredLimit !== null
                ? Number(object.desiredLimit)
                : 0;
        return message;
    },

    toJSON(message: CreateQuotaRequestRequest_DesiredQuotaLimit): unknown {
        const obj: any = {};
        message.quotaId !== undefined && (obj.quotaId = message.quotaId);
        message.desiredLimit !== undefined && (obj.desiredLimit = message.desiredLimit);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateQuotaRequestRequest_DesiredQuotaLimit>, I>>(
        object: I,
    ): CreateQuotaRequestRequest_DesiredQuotaLimit {
        const message = {
            ...baseCreateQuotaRequestRequest_DesiredQuotaLimit,
        } as CreateQuotaRequestRequest_DesiredQuotaLimit;
        message.quotaId = object.quotaId ?? '';
        message.desiredLimit = object.desiredLimit ?? 0;
        return message;
    },
};

const baseCreateQuotaRequestMetadata: object = { quotaRequestId: '' };

export const CreateQuotaRequestMetadata: {
    encode(message: CreateQuotaRequestMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateQuotaRequestMetadata;
    fromJSON(object: any): CreateQuotaRequestMetadata;
    toJSON(message: CreateQuotaRequestMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateQuotaRequestMetadata>, I>>(object: I): CreateQuotaRequestMetadata;
} = {
    encode(
        message: CreateQuotaRequestMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.quotaRequestId !== '') {
            writer.uint32(10).string(message.quotaRequestId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateQuotaRequestMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateQuotaRequestMetadata } as CreateQuotaRequestMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quotaRequestId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateQuotaRequestMetadata {
        const message = { ...baseCreateQuotaRequestMetadata } as CreateQuotaRequestMetadata;
        message.quotaRequestId =
            object.quotaRequestId !== undefined && object.quotaRequestId !== null
                ? String(object.quotaRequestId)
                : '';
        return message;
    },

    toJSON(message: CreateQuotaRequestMetadata): unknown {
        const obj: any = {};
        message.quotaRequestId !== undefined && (obj.quotaRequestId = message.quotaRequestId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateQuotaRequestMetadata>, I>>(
        object: I,
    ): CreateQuotaRequestMetadata {
        const message = { ...baseCreateQuotaRequestMetadata } as CreateQuotaRequestMetadata;
        message.quotaRequestId = object.quotaRequestId ?? '';
        return message;
    },
};

const baseCancelQuotaRequestRequest: object = { quotaRequestId: '', quotaIds: '' };

export const CancelQuotaRequestRequest: {
    encode(message: CancelQuotaRequestRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CancelQuotaRequestRequest;
    fromJSON(object: any): CancelQuotaRequestRequest;
    toJSON(message: CancelQuotaRequestRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CancelQuotaRequestRequest>, I>>(object: I): CancelQuotaRequestRequest;
} = {
    encode(
        message: CancelQuotaRequestRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.quotaRequestId !== '') {
            writer.uint32(10).string(message.quotaRequestId);
        }
        for (const v of message.quotaIds) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CancelQuotaRequestRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCancelQuotaRequestRequest } as CancelQuotaRequestRequest;
        message.quotaIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quotaRequestId = reader.string();
                    break;
                case 2:
                    message.quotaIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CancelQuotaRequestRequest {
        const message = { ...baseCancelQuotaRequestRequest } as CancelQuotaRequestRequest;
        message.quotaRequestId =
            object.quotaRequestId !== undefined && object.quotaRequestId !== null
                ? String(object.quotaRequestId)
                : '';
        message.quotaIds = (object.quotaIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: CancelQuotaRequestRequest): unknown {
        const obj: any = {};
        message.quotaRequestId !== undefined && (obj.quotaRequestId = message.quotaRequestId);
        if (message.quotaIds) {
            obj.quotaIds = message.quotaIds.map((e) => e);
        } else {
            obj.quotaIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CancelQuotaRequestRequest>, I>>(
        object: I,
    ): CancelQuotaRequestRequest {
        const message = { ...baseCancelQuotaRequestRequest } as CancelQuotaRequestRequest;
        message.quotaRequestId = object.quotaRequestId ?? '';
        message.quotaIds = object.quotaIds?.map((e) => e) || [];
        return message;
    },
};

const baseCancelQuotaRequestMetadata: object = { quotaRequestId: '' };

export const CancelQuotaRequestMetadata: {
    encode(message: CancelQuotaRequestMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CancelQuotaRequestMetadata;
    fromJSON(object: any): CancelQuotaRequestMetadata;
    toJSON(message: CancelQuotaRequestMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CancelQuotaRequestMetadata>, I>>(object: I): CancelQuotaRequestMetadata;
} = {
    encode(
        message: CancelQuotaRequestMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.quotaRequestId !== '') {
            writer.uint32(10).string(message.quotaRequestId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CancelQuotaRequestMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCancelQuotaRequestMetadata } as CancelQuotaRequestMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quotaRequestId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CancelQuotaRequestMetadata {
        const message = { ...baseCancelQuotaRequestMetadata } as CancelQuotaRequestMetadata;
        message.quotaRequestId =
            object.quotaRequestId !== undefined && object.quotaRequestId !== null
                ? String(object.quotaRequestId)
                : '';
        return message;
    },

    toJSON(message: CancelQuotaRequestMetadata): unknown {
        const obj: any = {};
        message.quotaRequestId !== undefined && (obj.quotaRequestId = message.quotaRequestId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CancelQuotaRequestMetadata>, I>>(
        object: I,
    ): CancelQuotaRequestMetadata {
        const message = { ...baseCancelQuotaRequestMetadata } as CancelQuotaRequestMetadata;
        message.quotaRequestId = object.quotaRequestId ?? '';
        return message;
    },
};

const baseListQuotaRequestRequest: object = { filter: '', pageSize: 0, pageToken: '' };

export const ListQuotaRequestRequest: {
    encode(message: ListQuotaRequestRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListQuotaRequestRequest;
    fromJSON(object: any): ListQuotaRequestRequest;
    toJSON(message: ListQuotaRequestRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListQuotaRequestRequest>, I>>(object: I): ListQuotaRequestRequest;
} = {
    encode(message: ListQuotaRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resource !== undefined) {
            Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
        }
        if (message.filter !== '') {
            writer.uint32(18).string(message.filter);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(34).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListQuotaRequestRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListQuotaRequestRequest } as ListQuotaRequestRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resource = Resource.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.filter = reader.string();
                    break;
                case 3:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListQuotaRequestRequest {
        const message = { ...baseListQuotaRequestRequest } as ListQuotaRequestRequest;
        message.resource =
            object.resource !== undefined && object.resource !== null
                ? Resource.fromJSON(object.resource)
                : undefined;
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListQuotaRequestRequest): unknown {
        const obj: any = {};
        message.resource !== undefined &&
            (obj.resource = message.resource ? Resource.toJSON(message.resource) : undefined);
        message.filter !== undefined && (obj.filter = message.filter);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListQuotaRequestRequest>, I>>(
        object: I,
    ): ListQuotaRequestRequest {
        const message = { ...baseListQuotaRequestRequest } as ListQuotaRequestRequest;
        message.resource =
            object.resource !== undefined && object.resource !== null
                ? Resource.fromPartial(object.resource)
                : undefined;
        message.filter = object.filter ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListQuotaRequestResponse: object = { nextPageToken: '' };

export const ListQuotaRequestResponse: {
    encode(message: ListQuotaRequestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListQuotaRequestResponse;
    fromJSON(object: any): ListQuotaRequestResponse;
    toJSON(message: ListQuotaRequestResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListQuotaRequestResponse>, I>>(object: I): ListQuotaRequestResponse;
} = {
    encode(
        message: ListQuotaRequestResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.quotaRequests) {
            QuotaRequest.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListQuotaRequestResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListQuotaRequestResponse } as ListQuotaRequestResponse;
        message.quotaRequests = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quotaRequests.push(QuotaRequest.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListQuotaRequestResponse {
        const message = { ...baseListQuotaRequestResponse } as ListQuotaRequestResponse;
        message.quotaRequests = (object.quotaRequests ?? []).map((e: any) =>
            QuotaRequest.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListQuotaRequestResponse): unknown {
        const obj: any = {};
        if (message.quotaRequests) {
            obj.quotaRequests = message.quotaRequests.map((e) =>
                e ? QuotaRequest.toJSON(e) : undefined,
            );
        } else {
            obj.quotaRequests = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListQuotaRequestResponse>, I>>(
        object: I,
    ): ListQuotaRequestResponse {
        const message = { ...baseListQuotaRequestResponse } as ListQuotaRequestResponse;
        message.quotaRequests = object.quotaRequests?.map((e) => QuotaRequest.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseListQuotaRequestOperationsRequest: object = {
    quotaRequestId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListQuotaRequestOperationsRequest: {
    encode(message: ListQuotaRequestOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListQuotaRequestOperationsRequest;
    fromJSON(object: any): ListQuotaRequestOperationsRequest;
    toJSON(message: ListQuotaRequestOperationsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListQuotaRequestOperationsRequest>, I>>(object: I): ListQuotaRequestOperationsRequest;
} = {
    encode(
        message: ListQuotaRequestOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.quotaRequestId !== '') {
            writer.uint32(10).string(message.quotaRequestId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListQuotaRequestOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListQuotaRequestOperationsRequest,
        } as ListQuotaRequestOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quotaRequestId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListQuotaRequestOperationsRequest {
        const message = {
            ...baseListQuotaRequestOperationsRequest,
        } as ListQuotaRequestOperationsRequest;
        message.quotaRequestId =
            object.quotaRequestId !== undefined && object.quotaRequestId !== null
                ? String(object.quotaRequestId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListQuotaRequestOperationsRequest): unknown {
        const obj: any = {};
        message.quotaRequestId !== undefined && (obj.quotaRequestId = message.quotaRequestId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListQuotaRequestOperationsRequest>, I>>(
        object: I,
    ): ListQuotaRequestOperationsRequest {
        const message = {
            ...baseListQuotaRequestOperationsRequest,
        } as ListQuotaRequestOperationsRequest;
        message.quotaRequestId = object.quotaRequestId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListQuotaRequestOperationsResponse: object = { nextPageToken: '' };

export const ListQuotaRequestOperationsResponse: {
    encode(message: ListQuotaRequestOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListQuotaRequestOperationsResponse;
    fromJSON(object: any): ListQuotaRequestOperationsResponse;
    toJSON(message: ListQuotaRequestOperationsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListQuotaRequestOperationsResponse>, I>>(object: I): ListQuotaRequestOperationsResponse;
} = {
    encode(
        message: ListQuotaRequestOperationsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.operations) {
            Operation.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListQuotaRequestOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListQuotaRequestOperationsResponse,
        } as ListQuotaRequestOperationsResponse;
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(Operation.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListQuotaRequestOperationsResponse {
        const message = {
            ...baseListQuotaRequestOperationsResponse,
        } as ListQuotaRequestOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListQuotaRequestOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListQuotaRequestOperationsResponse>, I>>(
        object: I,
    ): ListQuotaRequestOperationsResponse {
        const message = {
            ...baseListQuotaRequestOperationsResponse,
        } as ListQuotaRequestOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** A set of methods for managing quota requests. */
export const QuotaRequestServiceService = {
    /** Returns the specified quota request. */
    get: {
        path: '/yandex.cloud.quotamanager.v1.QuotaRequestService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetQuotaRequestRequest) =>
            Buffer.from(GetQuotaRequestRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetQuotaRequestRequest.decode(value),
        responseSerialize: (value: QuotaRequest) =>
            Buffer.from(QuotaRequest.encode(value).finish()),
        responseDeserialize: (value: Buffer) => QuotaRequest.decode(value),
    },
    /** Creates a quota request in the specified resource. */
    create: {
        path: '/yandex.cloud.quotamanager.v1.QuotaRequestService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateQuotaRequestRequest) =>
            Buffer.from(CreateQuotaRequestRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateQuotaRequestRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Cancels quotas in the specified quota request. */
    cancel: {
        path: '/yandex.cloud.quotamanager.v1.QuotaRequestService/Cancel',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CancelQuotaRequestRequest) =>
            Buffer.from(CancelQuotaRequestRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CancelQuotaRequestRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Retrieves the list of quota requests in the specified resource. */
    list: {
        path: '/yandex.cloud.quotamanager.v1.QuotaRequestService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListQuotaRequestRequest) =>
            Buffer.from(ListQuotaRequestRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListQuotaRequestRequest.decode(value),
        responseSerialize: (value: ListQuotaRequestResponse) =>
            Buffer.from(ListQuotaRequestResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListQuotaRequestResponse.decode(value),
    },
    /** Lists operations for the specified quota request. */
    listOperations: {
        path: '/yandex.cloud.quotamanager.v1.QuotaRequestService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListQuotaRequestOperationsRequest) =>
            Buffer.from(ListQuotaRequestOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListQuotaRequestOperationsRequest.decode(value),
        responseSerialize: (value: ListQuotaRequestOperationsResponse) =>
            Buffer.from(ListQuotaRequestOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListQuotaRequestOperationsResponse.decode(value),
    },
} as const;

export interface QuotaRequestServiceServer extends UntypedServiceImplementation {
    /** Returns the specified quota request. */
    get: handleUnaryCall<GetQuotaRequestRequest, QuotaRequest>;
    /** Creates a quota request in the specified resource. */
    create: handleUnaryCall<CreateQuotaRequestRequest, Operation>;
    /** Cancels quotas in the specified quota request. */
    cancel: handleUnaryCall<CancelQuotaRequestRequest, Operation>;
    /** Retrieves the list of quota requests in the specified resource. */
    list: handleUnaryCall<ListQuotaRequestRequest, ListQuotaRequestResponse>;
    /** Lists operations for the specified quota request. */
    listOperations: handleUnaryCall<
        ListQuotaRequestOperationsRequest,
        ListQuotaRequestOperationsResponse
    >;
}

export interface QuotaRequestServiceClient extends Client {
    /** Returns the specified quota request. */
    get(
        request: GetQuotaRequestRequest,
        callback: (error: ServiceError | null, response: QuotaRequest) => void,
    ): ClientUnaryCall;
    get(
        request: GetQuotaRequestRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: QuotaRequest) => void,
    ): ClientUnaryCall;
    get(
        request: GetQuotaRequestRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: QuotaRequest) => void,
    ): ClientUnaryCall;
    /** Creates a quota request in the specified resource. */
    create(
        request: CreateQuotaRequestRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateQuotaRequestRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateQuotaRequestRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Cancels quotas in the specified quota request. */
    cancel(
        request: CancelQuotaRequestRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    cancel(
        request: CancelQuotaRequestRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    cancel(
        request: CancelQuotaRequestRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of quota requests in the specified resource. */
    list(
        request: ListQuotaRequestRequest,
        callback: (error: ServiceError | null, response: ListQuotaRequestResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListQuotaRequestRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListQuotaRequestResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListQuotaRequestRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListQuotaRequestResponse) => void,
    ): ClientUnaryCall;
    /** Lists operations for the specified quota request. */
    listOperations(
        request: ListQuotaRequestOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListQuotaRequestOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListQuotaRequestOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListQuotaRequestOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListQuotaRequestOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListQuotaRequestOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
}

export const QuotaRequestServiceClient = makeGenericClientConstructor(
    QuotaRequestServiceService,
    'yandex.cloud.quotamanager.v1.QuotaRequestService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): QuotaRequestServiceClient;
    service: typeof QuotaRequestServiceService;
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
