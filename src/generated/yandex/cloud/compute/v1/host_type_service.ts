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
import { HostType } from '../../../../yandex/cloud/compute/v1/host_type';

export const protobufPackage = 'yandex.cloud.compute.v1';

export interface GetHostTypeRequest {
    /**
     * ID of the host type to return.
     *
     * To get a host type ID make a [HostTypeService.List] request.
     */
    hostTypeId: string;
}

export interface ListHostTypesRequest {
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListHostTypesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListHostTypesResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}

export interface ListHostTypesResponse {
    /** Lists host types. */
    hostTypes: HostType[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListHostTypesRequest.page_size], use `next_page_token` as the value
     * for the [ListHostTypesRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetHostTypeRequest: object = { hostTypeId: '' };

export const GetHostTypeRequest = {
    encode(message: GetHostTypeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.hostTypeId !== '') {
            writer.uint32(10).string(message.hostTypeId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetHostTypeRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetHostTypeRequest } as GetHostTypeRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostTypeId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetHostTypeRequest {
        const message = { ...baseGetHostTypeRequest } as GetHostTypeRequest;
        message.hostTypeId =
            object.hostTypeId !== undefined && object.hostTypeId !== null
                ? String(object.hostTypeId)
                : '';
        return message;
    },

    toJSON(message: GetHostTypeRequest): unknown {
        const obj: any = {};
        message.hostTypeId !== undefined && (obj.hostTypeId = message.hostTypeId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetHostTypeRequest>, I>>(
        object: I,
    ): GetHostTypeRequest {
        const message = { ...baseGetHostTypeRequest } as GetHostTypeRequest;
        message.hostTypeId = object.hostTypeId ?? '';
        return message;
    },
};

const baseListHostTypesRequest: object = { pageSize: 0, pageToken: '' };

export const ListHostTypesRequest = {
    encode(message: ListHostTypesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.pageSize !== 0) {
            writer.uint32(8).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(18).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListHostTypesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListHostTypesRequest } as ListHostTypesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListHostTypesRequest {
        const message = { ...baseListHostTypesRequest } as ListHostTypesRequest;
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListHostTypesRequest): unknown {
        const obj: any = {};
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListHostTypesRequest>, I>>(
        object: I,
    ): ListHostTypesRequest {
        const message = { ...baseListHostTypesRequest } as ListHostTypesRequest;
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListHostTypesResponse: object = { nextPageToken: '' };

export const ListHostTypesResponse = {
    encode(message: ListHostTypesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.hostTypes) {
            HostType.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListHostTypesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListHostTypesResponse } as ListHostTypesResponse;
        message.hostTypes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostTypes.push(HostType.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListHostTypesResponse {
        const message = { ...baseListHostTypesResponse } as ListHostTypesResponse;
        message.hostTypes = (object.hostTypes ?? []).map((e: any) => HostType.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListHostTypesResponse): unknown {
        const obj: any = {};
        if (message.hostTypes) {
            obj.hostTypes = message.hostTypes.map((e) => (e ? HostType.toJSON(e) : undefined));
        } else {
            obj.hostTypes = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListHostTypesResponse>, I>>(
        object: I,
    ): ListHostTypesResponse {
        const message = { ...baseListHostTypesResponse } as ListHostTypesResponse;
        message.hostTypes = object.hostTypes?.map((e) => HostType.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** Set of methods to view possible host configurations. */
export const HostTypeServiceService = {
    /** Returns information about specified host type. */
    get: {
        path: '/yandex.cloud.compute.v1.HostTypeService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetHostTypeRequest) =>
            Buffer.from(GetHostTypeRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetHostTypeRequest.decode(value),
        responseSerialize: (value: HostType) => Buffer.from(HostType.encode(value).finish()),
        responseDeserialize: (value: Buffer) => HostType.decode(value),
    },
    /** List avaliable host types. */
    list: {
        path: '/yandex.cloud.compute.v1.HostTypeService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListHostTypesRequest) =>
            Buffer.from(ListHostTypesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListHostTypesRequest.decode(value),
        responseSerialize: (value: ListHostTypesResponse) =>
            Buffer.from(ListHostTypesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListHostTypesResponse.decode(value),
    },
} as const;

export interface HostTypeServiceServer extends UntypedServiceImplementation {
    /** Returns information about specified host type. */
    get: handleUnaryCall<GetHostTypeRequest, HostType>;
    /** List avaliable host types. */
    list: handleUnaryCall<ListHostTypesRequest, ListHostTypesResponse>;
}

export interface HostTypeServiceClient extends Client {
    /** Returns information about specified host type. */
    get(
        request: GetHostTypeRequest,
        callback: (error: ServiceError | null, response: HostType) => void,
    ): ClientUnaryCall;
    get(
        request: GetHostTypeRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: HostType) => void,
    ): ClientUnaryCall;
    get(
        request: GetHostTypeRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: HostType) => void,
    ): ClientUnaryCall;
    /** List avaliable host types. */
    list(
        request: ListHostTypesRequest,
        callback: (error: ServiceError | null, response: ListHostTypesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListHostTypesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListHostTypesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListHostTypesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListHostTypesResponse) => void,
    ): ClientUnaryCall;
}

export const HostTypeServiceClient = makeGenericClientConstructor(
    HostTypeServiceService,
    'yandex.cloud.compute.v1.HostTypeService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): HostTypeServiceClient;
    service: typeof HostTypeServiceService;
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
