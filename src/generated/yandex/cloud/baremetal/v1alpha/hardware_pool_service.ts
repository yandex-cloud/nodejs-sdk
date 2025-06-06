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
import { HardwarePool } from '../../../../yandex/cloud/baremetal/v1alpha/hardware_pool';

export const protobufPackage = 'yandex.cloud.baremetal.v1alpha';

export interface GetHardwarePoolRequest {
    /**
     * ID of the HardwarePool resource to return.
     *
     * To get the hardware pool ID, use a [HardwarePoolService.List] request.
     */
    hardwarePoolId: string;
}

export interface ListHardwarePoolsRequest {
    /**
     * The maximum number of results per page to return. If the number of available
     * results is greater than `page_size`,
     * the service returns a [ListHardwarePoolsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value is 20.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListHardwarePoolsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListHardwarePoolsResponse {
    /** List of HardwarePool resources. */
    hardwarePools: HardwarePool[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * [ListHardwarePoolsResponse.page_size], use `next_page_token` as the value
     * for the [ListHardwarePoolsResponse.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetHardwarePoolRequest: object = { hardwarePoolId: '' };

export const GetHardwarePoolRequest = {
    encode(message: GetHardwarePoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.hardwarePoolId !== '') {
            writer.uint32(10).string(message.hardwarePoolId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetHardwarePoolRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetHardwarePoolRequest } as GetHardwarePoolRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hardwarePoolId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetHardwarePoolRequest {
        const message = { ...baseGetHardwarePoolRequest } as GetHardwarePoolRequest;
        message.hardwarePoolId =
            object.hardwarePoolId !== undefined && object.hardwarePoolId !== null
                ? String(object.hardwarePoolId)
                : '';
        return message;
    },

    toJSON(message: GetHardwarePoolRequest): unknown {
        const obj: any = {};
        message.hardwarePoolId !== undefined && (obj.hardwarePoolId = message.hardwarePoolId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetHardwarePoolRequest>, I>>(
        object: I,
    ): GetHardwarePoolRequest {
        const message = { ...baseGetHardwarePoolRequest } as GetHardwarePoolRequest;
        message.hardwarePoolId = object.hardwarePoolId ?? '';
        return message;
    },
};

const baseListHardwarePoolsRequest: object = { pageSize: 0, pageToken: '' };

export const ListHardwarePoolsRequest = {
    encode(
        message: ListHardwarePoolsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.pageSize !== 0) {
            writer.uint32(800).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(810).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListHardwarePoolsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListHardwarePoolsRequest } as ListHardwarePoolsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 100:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 101:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListHardwarePoolsRequest {
        const message = { ...baseListHardwarePoolsRequest } as ListHardwarePoolsRequest;
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListHardwarePoolsRequest): unknown {
        const obj: any = {};
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListHardwarePoolsRequest>, I>>(
        object: I,
    ): ListHardwarePoolsRequest {
        const message = { ...baseListHardwarePoolsRequest } as ListHardwarePoolsRequest;
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListHardwarePoolsResponse: object = { nextPageToken: '' };

export const ListHardwarePoolsResponse = {
    encode(
        message: ListHardwarePoolsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.hardwarePools) {
            HardwarePool.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(802).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListHardwarePoolsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListHardwarePoolsResponse } as ListHardwarePoolsResponse;
        message.hardwarePools = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hardwarePools.push(HardwarePool.decode(reader, reader.uint32()));
                    break;
                case 100:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListHardwarePoolsResponse {
        const message = { ...baseListHardwarePoolsResponse } as ListHardwarePoolsResponse;
        message.hardwarePools = (object.hardwarePools ?? []).map((e: any) =>
            HardwarePool.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListHardwarePoolsResponse): unknown {
        const obj: any = {};
        if (message.hardwarePools) {
            obj.hardwarePools = message.hardwarePools.map((e) =>
                e ? HardwarePool.toJSON(e) : undefined,
            );
        } else {
            obj.hardwarePools = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListHardwarePoolsResponse>, I>>(
        object: I,
    ): ListHardwarePoolsResponse {
        const message = { ...baseListHardwarePoolsResponse } as ListHardwarePoolsResponse;
        message.hardwarePools = object.hardwarePools?.map((e) => HardwarePool.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** A set of methods to retrieve information about HardwarePool resources. */
export const HardwarePoolServiceService = {
    /**
     * Returns the specific HardwarePool resource.
     *
     * To get the list of available HardwarePool resource, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.baremetal.v1alpha.HardwarePoolService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetHardwarePoolRequest) =>
            Buffer.from(GetHardwarePoolRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetHardwarePoolRequest.decode(value),
        responseSerialize: (value: HardwarePool) =>
            Buffer.from(HardwarePool.encode(value).finish()),
        responseDeserialize: (value: Buffer) => HardwarePool.decode(value),
    },
    /** Retrieves the list of HardwarePool resources. */
    list: {
        path: '/yandex.cloud.baremetal.v1alpha.HardwarePoolService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListHardwarePoolsRequest) =>
            Buffer.from(ListHardwarePoolsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListHardwarePoolsRequest.decode(value),
        responseSerialize: (value: ListHardwarePoolsResponse) =>
            Buffer.from(ListHardwarePoolsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListHardwarePoolsResponse.decode(value),
    },
} as const;

export interface HardwarePoolServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specific HardwarePool resource.
     *
     * To get the list of available HardwarePool resource, make a [List] request.
     */
    get: handleUnaryCall<GetHardwarePoolRequest, HardwarePool>;
    /** Retrieves the list of HardwarePool resources. */
    list: handleUnaryCall<ListHardwarePoolsRequest, ListHardwarePoolsResponse>;
}

export interface HardwarePoolServiceClient extends Client {
    /**
     * Returns the specific HardwarePool resource.
     *
     * To get the list of available HardwarePool resource, make a [List] request.
     */
    get(
        request: GetHardwarePoolRequest,
        callback: (error: ServiceError | null, response: HardwarePool) => void,
    ): ClientUnaryCall;
    get(
        request: GetHardwarePoolRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: HardwarePool) => void,
    ): ClientUnaryCall;
    get(
        request: GetHardwarePoolRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: HardwarePool) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of HardwarePool resources. */
    list(
        request: ListHardwarePoolsRequest,
        callback: (error: ServiceError | null, response: ListHardwarePoolsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListHardwarePoolsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListHardwarePoolsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListHardwarePoolsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListHardwarePoolsResponse) => void,
    ): ClientUnaryCall;
}

export const HardwarePoolServiceClient = makeGenericClientConstructor(
    HardwarePoolServiceService,
    'yandex.cloud.baremetal.v1alpha.HardwarePoolService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): HardwarePoolServiceClient;
    service: typeof HardwarePoolServiceService;
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
