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
import { Partner } from '../../../../yandex/cloud/cic/v1/partner';

export const protobufPackage = 'yandex.cloud.cic.v1';

export interface GetPartnerRequest {
    $type: 'yandex.cloud.cic.v1.GetPartnerRequest';
    /**
     * ID of the Partner resource to return.
     * To get the partner ID use a [PartnerService.List] request.
     */
    partnerId: string;
}

export interface ListPartnersRequest {
    $type: 'yandex.cloud.cic.v1.ListPartnersRequest';
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListPartnersResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListPartnersResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Subnet.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
}

export interface ListPartnersResponse {
    $type: 'yandex.cloud.cic.v1.ListPartnersResponse';
    /** List of Partner resources. */
    partners: Partner[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListPartnersRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListPartnersRequest.page_token] query parameter
     * in the next list request. Subsequent list requests will have their own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetPartnerRequest: object = {
    $type: 'yandex.cloud.cic.v1.GetPartnerRequest',
    partnerId: '',
};

export const GetPartnerRequest = {
    $type: 'yandex.cloud.cic.v1.GetPartnerRequest' as const,

    encode(message: GetPartnerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.partnerId !== '') {
            writer.uint32(10).string(message.partnerId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetPartnerRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetPartnerRequest } as GetPartnerRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.partnerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetPartnerRequest {
        const message = { ...baseGetPartnerRequest } as GetPartnerRequest;
        message.partnerId =
            object.partnerId !== undefined && object.partnerId !== null
                ? String(object.partnerId)
                : '';
        return message;
    },

    toJSON(message: GetPartnerRequest): unknown {
        const obj: any = {};
        message.partnerId !== undefined && (obj.partnerId = message.partnerId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetPartnerRequest>, I>>(object: I): GetPartnerRequest {
        const message = { ...baseGetPartnerRequest } as GetPartnerRequest;
        message.partnerId = object.partnerId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetPartnerRequest.$type, GetPartnerRequest);

const baseListPartnersRequest: object = {
    $type: 'yandex.cloud.cic.v1.ListPartnersRequest',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListPartnersRequest = {
    $type: 'yandex.cloud.cic.v1.ListPartnersRequest' as const,

    encode(message: ListPartnersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListPartnersRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListPartnersRequest } as ListPartnersRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListPartnersRequest {
        const message = { ...baseListPartnersRequest } as ListPartnersRequest;
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        return message;
    },

    toJSON(message: ListPartnersRequest): unknown {
        const obj: any = {};
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPartnersRequest>, I>>(
        object: I,
    ): ListPartnersRequest {
        const message = { ...baseListPartnersRequest } as ListPartnersRequest;
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListPartnersRequest.$type, ListPartnersRequest);

const baseListPartnersResponse: object = {
    $type: 'yandex.cloud.cic.v1.ListPartnersResponse',
    nextPageToken: '',
};

export const ListPartnersResponse = {
    $type: 'yandex.cloud.cic.v1.ListPartnersResponse' as const,

    encode(message: ListPartnersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.partners) {
            Partner.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListPartnersResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListPartnersResponse } as ListPartnersResponse;
        message.partners = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.partners.push(Partner.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListPartnersResponse {
        const message = { ...baseListPartnersResponse } as ListPartnersResponse;
        message.partners = (object.partners ?? []).map((e: any) => Partner.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListPartnersResponse): unknown {
        const obj: any = {};
        if (message.partners) {
            obj.partners = message.partners.map((e) => (e ? Partner.toJSON(e) : undefined));
        } else {
            obj.partners = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPartnersResponse>, I>>(
        object: I,
    ): ListPartnersResponse {
        const message = { ...baseListPartnersResponse } as ListPartnersResponse;
        message.partners = object.partners?.map((e) => Partner.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListPartnersResponse.$type, ListPartnersResponse);

/** A set of methods for managing Partner resources. */
export const PartnerServiceService = {
    /**
     * Returns the specified Partner resource.
     *
     * To get the list of available Partner resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.cic.v1.PartnerService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetPartnerRequest) =>
            Buffer.from(GetPartnerRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetPartnerRequest.decode(value),
        responseSerialize: (value: Partner) => Buffer.from(Partner.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Partner.decode(value),
    },
    /** Retrieves the list of Partner resources in the specified folder. */
    list: {
        path: '/yandex.cloud.cic.v1.PartnerService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListPartnersRequest) =>
            Buffer.from(ListPartnersRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListPartnersRequest.decode(value),
        responseSerialize: (value: ListPartnersResponse) =>
            Buffer.from(ListPartnersResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListPartnersResponse.decode(value),
    },
} as const;

export interface PartnerServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Partner resource.
     *
     * To get the list of available Partner resources, make a [List] request.
     */
    get: handleUnaryCall<GetPartnerRequest, Partner>;
    /** Retrieves the list of Partner resources in the specified folder. */
    list: handleUnaryCall<ListPartnersRequest, ListPartnersResponse>;
}

export interface PartnerServiceClient extends Client {
    /**
     * Returns the specified Partner resource.
     *
     * To get the list of available Partner resources, make a [List] request.
     */
    get(
        request: GetPartnerRequest,
        callback: (error: ServiceError | null, response: Partner) => void,
    ): ClientUnaryCall;
    get(
        request: GetPartnerRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Partner) => void,
    ): ClientUnaryCall;
    get(
        request: GetPartnerRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Partner) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of Partner resources in the specified folder. */
    list(
        request: ListPartnersRequest,
        callback: (error: ServiceError | null, response: ListPartnersResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListPartnersRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListPartnersResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListPartnersRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListPartnersResponse) => void,
    ): ClientUnaryCall;
}

export const PartnerServiceClient = makeGenericClientConstructor(
    PartnerServiceService,
    'yandex.cloud.cic.v1.PartnerService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): PartnerServiceClient;
    service: typeof PartnerServiceService;
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
