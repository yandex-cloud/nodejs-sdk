/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
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
import { Resource } from '../../../../yandex/cloud/quotamanager/v1/resource';
import { DoubleValue } from '../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.quotamanager.v1';

export interface GetQuotaLimitRequest {
    $type: 'yandex.cloud.quotamanager.v1.GetQuotaLimitRequest';
    /** The resource for which the quota limit is being requested. */
    resource?: Resource;
    /** The id of the quota to retrieve. */
    quotaId: string;
}

export interface ListQuotaLimitsRequest {
    $type: 'yandex.cloud.quotamanager.v1.ListQuotaLimitsRequest';
    /** The resource for which quota limits are being listed. */
    resource?: Resource;
    /** The service for which quota limits are being requested. */
    service: string;
    /** The maximum number of quota limits to return per response. */
    pageSize: number;
    /** Token to retrieve the next page of results. Omitted on the first request. */
    pageToken: string;
}

export interface ListQuotaLimitsResponse {
    $type: 'yandex.cloud.quotamanager.v1.ListQuotaLimitsResponse';
    /** The associated resource for these quota limits. */
    resource?: Resource;
    /** List of quota limits for the specified resource and service. */
    quotaLimits: QuotaLimit[];
    /** Token to retrieve the next page of results. */
    nextPageToken: string;
}

export interface ListServicesRequest {
    $type: 'yandex.cloud.quotamanager.v1.ListServicesRequest';
    /** The type of resources for which services are being requested. */
    resourceType: string;
    /** The maximum number of services to return per response. */
    pageSize: number;
    /** Token to retrieve the next page of results. Omitted on the first request. */
    pageToken: string;
}

export interface ListServicesResponse {
    $type: 'yandex.cloud.quotamanager.v1.ListServicesResponse';
    /** List of services available for quota management. */
    services: Service[];
    /** Token to retrieve the next page of results. */
    nextPageToken: string;
}

export interface QuotaLimit {
    $type: 'yandex.cloud.quotamanager.v1.QuotaLimit';
    /** The unique id of the quota. */
    quotaId: string;
    /** The limit value set for this quota. */
    limit?: number;
    /** The current usage level of this quota. */
    usage?: number;
}

export interface Service {
    $type: 'yandex.cloud.quotamanager.v1.Service';
    /** The unique id of the service. */
    id: string;
    /** The name of the service. */
    name: string;
}

const baseGetQuotaLimitRequest: object = {
    $type: 'yandex.cloud.quotamanager.v1.GetQuotaLimitRequest',
    quotaId: '',
};

export const GetQuotaLimitRequest = {
    $type: 'yandex.cloud.quotamanager.v1.GetQuotaLimitRequest' as const,

    encode(message: GetQuotaLimitRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resource !== undefined) {
            Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
        }
        if (message.quotaId !== '') {
            writer.uint32(18).string(message.quotaId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetQuotaLimitRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetQuotaLimitRequest } as GetQuotaLimitRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resource = Resource.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.quotaId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetQuotaLimitRequest {
        const message = { ...baseGetQuotaLimitRequest } as GetQuotaLimitRequest;
        message.resource =
            object.resource !== undefined && object.resource !== null
                ? Resource.fromJSON(object.resource)
                : undefined;
        message.quotaId =
            object.quotaId !== undefined && object.quotaId !== null ? String(object.quotaId) : '';
        return message;
    },

    toJSON(message: GetQuotaLimitRequest): unknown {
        const obj: any = {};
        message.resource !== undefined &&
            (obj.resource = message.resource ? Resource.toJSON(message.resource) : undefined);
        message.quotaId !== undefined && (obj.quotaId = message.quotaId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetQuotaLimitRequest>, I>>(
        object: I,
    ): GetQuotaLimitRequest {
        const message = { ...baseGetQuotaLimitRequest } as GetQuotaLimitRequest;
        message.resource =
            object.resource !== undefined && object.resource !== null
                ? Resource.fromPartial(object.resource)
                : undefined;
        message.quotaId = object.quotaId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetQuotaLimitRequest.$type, GetQuotaLimitRequest);

const baseListQuotaLimitsRequest: object = {
    $type: 'yandex.cloud.quotamanager.v1.ListQuotaLimitsRequest',
    service: '',
    pageSize: 0,
    pageToken: '',
};

export const ListQuotaLimitsRequest = {
    $type: 'yandex.cloud.quotamanager.v1.ListQuotaLimitsRequest' as const,

    encode(message: ListQuotaLimitsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resource !== undefined) {
            Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
        }
        if (message.service !== '') {
            writer.uint32(18).string(message.service);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(34).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListQuotaLimitsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListQuotaLimitsRequest } as ListQuotaLimitsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resource = Resource.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.service = reader.string();
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

    fromJSON(object: any): ListQuotaLimitsRequest {
        const message = { ...baseListQuotaLimitsRequest } as ListQuotaLimitsRequest;
        message.resource =
            object.resource !== undefined && object.resource !== null
                ? Resource.fromJSON(object.resource)
                : undefined;
        message.service =
            object.service !== undefined && object.service !== null ? String(object.service) : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListQuotaLimitsRequest): unknown {
        const obj: any = {};
        message.resource !== undefined &&
            (obj.resource = message.resource ? Resource.toJSON(message.resource) : undefined);
        message.service !== undefined && (obj.service = message.service);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListQuotaLimitsRequest>, I>>(
        object: I,
    ): ListQuotaLimitsRequest {
        const message = { ...baseListQuotaLimitsRequest } as ListQuotaLimitsRequest;
        message.resource =
            object.resource !== undefined && object.resource !== null
                ? Resource.fromPartial(object.resource)
                : undefined;
        message.service = object.service ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListQuotaLimitsRequest.$type, ListQuotaLimitsRequest);

const baseListQuotaLimitsResponse: object = {
    $type: 'yandex.cloud.quotamanager.v1.ListQuotaLimitsResponse',
    nextPageToken: '',
};

export const ListQuotaLimitsResponse = {
    $type: 'yandex.cloud.quotamanager.v1.ListQuotaLimitsResponse' as const,

    encode(message: ListQuotaLimitsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resource !== undefined) {
            Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.quotaLimits) {
            QuotaLimit.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(26).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListQuotaLimitsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListQuotaLimitsResponse } as ListQuotaLimitsResponse;
        message.quotaLimits = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resource = Resource.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.quotaLimits.push(QuotaLimit.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListQuotaLimitsResponse {
        const message = { ...baseListQuotaLimitsResponse } as ListQuotaLimitsResponse;
        message.resource =
            object.resource !== undefined && object.resource !== null
                ? Resource.fromJSON(object.resource)
                : undefined;
        message.quotaLimits = (object.quotaLimits ?? []).map((e: any) => QuotaLimit.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListQuotaLimitsResponse): unknown {
        const obj: any = {};
        message.resource !== undefined &&
            (obj.resource = message.resource ? Resource.toJSON(message.resource) : undefined);
        if (message.quotaLimits) {
            obj.quotaLimits = message.quotaLimits.map((e) =>
                e ? QuotaLimit.toJSON(e) : undefined,
            );
        } else {
            obj.quotaLimits = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListQuotaLimitsResponse>, I>>(
        object: I,
    ): ListQuotaLimitsResponse {
        const message = { ...baseListQuotaLimitsResponse } as ListQuotaLimitsResponse;
        message.resource =
            object.resource !== undefined && object.resource !== null
                ? Resource.fromPartial(object.resource)
                : undefined;
        message.quotaLimits = object.quotaLimits?.map((e) => QuotaLimit.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListQuotaLimitsResponse.$type, ListQuotaLimitsResponse);

const baseListServicesRequest: object = {
    $type: 'yandex.cloud.quotamanager.v1.ListServicesRequest',
    resourceType: '',
    pageSize: 0,
    pageToken: '',
};

export const ListServicesRequest = {
    $type: 'yandex.cloud.quotamanager.v1.ListServicesRequest' as const,

    encode(message: ListServicesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resourceType !== '') {
            writer.uint32(10).string(message.resourceType);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListServicesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListServicesRequest } as ListServicesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceType = reader.string();
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

    fromJSON(object: any): ListServicesRequest {
        const message = { ...baseListServicesRequest } as ListServicesRequest;
        message.resourceType =
            object.resourceType !== undefined && object.resourceType !== null
                ? String(object.resourceType)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListServicesRequest): unknown {
        const obj: any = {};
        message.resourceType !== undefined && (obj.resourceType = message.resourceType);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListServicesRequest>, I>>(
        object: I,
    ): ListServicesRequest {
        const message = { ...baseListServicesRequest } as ListServicesRequest;
        message.resourceType = object.resourceType ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListServicesRequest.$type, ListServicesRequest);

const baseListServicesResponse: object = {
    $type: 'yandex.cloud.quotamanager.v1.ListServicesResponse',
    nextPageToken: '',
};

export const ListServicesResponse = {
    $type: 'yandex.cloud.quotamanager.v1.ListServicesResponse' as const,

    encode(message: ListServicesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.services) {
            Service.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListServicesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListServicesResponse } as ListServicesResponse;
        message.services = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.services.push(Service.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListServicesResponse {
        const message = { ...baseListServicesResponse } as ListServicesResponse;
        message.services = (object.services ?? []).map((e: any) => Service.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListServicesResponse): unknown {
        const obj: any = {};
        if (message.services) {
            obj.services = message.services.map((e) => (e ? Service.toJSON(e) : undefined));
        } else {
            obj.services = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListServicesResponse>, I>>(
        object: I,
    ): ListServicesResponse {
        const message = { ...baseListServicesResponse } as ListServicesResponse;
        message.services = object.services?.map((e) => Service.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListServicesResponse.$type, ListServicesResponse);

const baseQuotaLimit: object = { $type: 'yandex.cloud.quotamanager.v1.QuotaLimit', quotaId: '' };

export const QuotaLimit = {
    $type: 'yandex.cloud.quotamanager.v1.QuotaLimit' as const,

    encode(message: QuotaLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.quotaId !== '') {
            writer.uint32(10).string(message.quotaId);
        }
        if (message.limit !== undefined) {
            DoubleValue.encode(
                { $type: 'google.protobuf.DoubleValue', value: message.limit! },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.usage !== undefined) {
            DoubleValue.encode(
                { $type: 'google.protobuf.DoubleValue', value: message.usage! },
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QuotaLimit {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQuotaLimit } as QuotaLimit;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quotaId = reader.string();
                    break;
                case 2:
                    message.limit = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.usage = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QuotaLimit {
        const message = { ...baseQuotaLimit } as QuotaLimit;
        message.quotaId =
            object.quotaId !== undefined && object.quotaId !== null ? String(object.quotaId) : '';
        message.limit =
            object.limit !== undefined && object.limit !== null ? Number(object.limit) : undefined;
        message.usage =
            object.usage !== undefined && object.usage !== null ? Number(object.usage) : undefined;
        return message;
    },

    toJSON(message: QuotaLimit): unknown {
        const obj: any = {};
        message.quotaId !== undefined && (obj.quotaId = message.quotaId);
        message.limit !== undefined && (obj.limit = message.limit);
        message.usage !== undefined && (obj.usage = message.usage);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<QuotaLimit>, I>>(object: I): QuotaLimit {
        const message = { ...baseQuotaLimit } as QuotaLimit;
        message.quotaId = object.quotaId ?? '';
        message.limit = object.limit ?? undefined;
        message.usage = object.usage ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(QuotaLimit.$type, QuotaLimit);

const baseService: object = { $type: 'yandex.cloud.quotamanager.v1.Service', id: '', name: '' };

export const Service = {
    $type: 'yandex.cloud.quotamanager.v1.Service' as const,

    encode(message: Service, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
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
        return message;
    },

    toJSON(message: Service): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Service>, I>>(object: I): Service {
        const message = { ...baseService } as Service;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        return message;
    },
};

messageTypeRegistry.set(Service.$type, Service);

/** A set of methods for managing quota limits. */
export const QuotaLimitServiceService = {
    /** Returns the specified quota limit. */
    get: {
        path: '/yandex.cloud.quotamanager.v1.QuotaLimitService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetQuotaLimitRequest) =>
            Buffer.from(GetQuotaLimitRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetQuotaLimitRequest.decode(value),
        responseSerialize: (value: QuotaLimit) => Buffer.from(QuotaLimit.encode(value).finish()),
        responseDeserialize: (value: Buffer) => QuotaLimit.decode(value),
    },
    /** Retrieves the list of quota limits for a given service. */
    list: {
        path: '/yandex.cloud.quotamanager.v1.QuotaLimitService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListQuotaLimitsRequest) =>
            Buffer.from(ListQuotaLimitsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListQuotaLimitsRequest.decode(value),
        responseSerialize: (value: ListQuotaLimitsResponse) =>
            Buffer.from(ListQuotaLimitsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListQuotaLimitsResponse.decode(value),
    },
    /** Retrieves the list of services available for quota management. */
    listServices: {
        path: '/yandex.cloud.quotamanager.v1.QuotaLimitService/ListServices',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListServicesRequest) =>
            Buffer.from(ListServicesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListServicesRequest.decode(value),
        responseSerialize: (value: ListServicesResponse) =>
            Buffer.from(ListServicesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListServicesResponse.decode(value),
    },
} as const;

export interface QuotaLimitServiceServer extends UntypedServiceImplementation {
    /** Returns the specified quota limit. */
    get: handleUnaryCall<GetQuotaLimitRequest, QuotaLimit>;
    /** Retrieves the list of quota limits for a given service. */
    list: handleUnaryCall<ListQuotaLimitsRequest, ListQuotaLimitsResponse>;
    /** Retrieves the list of services available for quota management. */
    listServices: handleUnaryCall<ListServicesRequest, ListServicesResponse>;
}

export interface QuotaLimitServiceClient extends Client {
    /** Returns the specified quota limit. */
    get(
        request: GetQuotaLimitRequest,
        callback: (error: ServiceError | null, response: QuotaLimit) => void,
    ): ClientUnaryCall;
    get(
        request: GetQuotaLimitRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: QuotaLimit) => void,
    ): ClientUnaryCall;
    get(
        request: GetQuotaLimitRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: QuotaLimit) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of quota limits for a given service. */
    list(
        request: ListQuotaLimitsRequest,
        callback: (error: ServiceError | null, response: ListQuotaLimitsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListQuotaLimitsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListQuotaLimitsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListQuotaLimitsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListQuotaLimitsResponse) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of services available for quota management. */
    listServices(
        request: ListServicesRequest,
        callback: (error: ServiceError | null, response: ListServicesResponse) => void,
    ): ClientUnaryCall;
    listServices(
        request: ListServicesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListServicesResponse) => void,
    ): ClientUnaryCall;
    listServices(
        request: ListServicesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListServicesResponse) => void,
    ): ClientUnaryCall;
}

export const QuotaLimitServiceClient = makeGenericClientConstructor(
    QuotaLimitServiceService,
    'yandex.cloud.quotamanager.v1.QuotaLimitService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): QuotaLimitServiceClient;
    service: typeof QuotaLimitServiceService;
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
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
              Exclude<keyof I, KeysOfUnion<P> | '$type'>,
              never
          >;

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
