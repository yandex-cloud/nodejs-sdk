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
import { Zone } from '../../../../yandex/cloud/compute/v1/zone';

export const protobufPackage = 'yandex.cloud.compute.v1';

export interface ListZonesRequest {
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListZonesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListZonesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListZonesResponse {
    /** List of availability zones. */
    zones: Zone[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListZonesRequest.page_size], use
     * the [ListZonesRequest.page_token] as the value
     * for the [ListZonesRequest.page_token] query parameter
     * in the next list request. Subsequent list requests will have their own
     * [ListZonesRequest.page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface GetZoneRequest {
    /** ID of the availability zone to return information about. */
    zoneId: string;
}

const baseListZonesRequest: object = { pageSize: 0, pageToken: '' };

export const ListZonesRequest = {
    encode(message: ListZonesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.pageSize !== 0) {
            writer.uint32(8).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(18).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListZonesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListZonesRequest } as ListZonesRequest;
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

    fromJSON(object: any): ListZonesRequest {
        const message = { ...baseListZonesRequest } as ListZonesRequest;
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListZonesRequest): unknown {
        const obj: any = {};
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListZonesRequest>, I>>(object: I): ListZonesRequest {
        const message = { ...baseListZonesRequest } as ListZonesRequest;
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListZonesResponse: object = { nextPageToken: '' };

export const ListZonesResponse = {
    encode(message: ListZonesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.zones) {
            Zone.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListZonesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListZonesResponse } as ListZonesResponse;
        message.zones = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zones.push(Zone.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListZonesResponse {
        const message = { ...baseListZonesResponse } as ListZonesResponse;
        message.zones = (object.zones ?? []).map((e: any) => Zone.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListZonesResponse): unknown {
        const obj: any = {};
        if (message.zones) {
            obj.zones = message.zones.map((e) => (e ? Zone.toJSON(e) : undefined));
        } else {
            obj.zones = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListZonesResponse>, I>>(object: I): ListZonesResponse {
        const message = { ...baseListZonesResponse } as ListZonesResponse;
        message.zones = object.zones?.map((e) => Zone.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseGetZoneRequest: object = { zoneId: '' };

export const GetZoneRequest = {
    encode(message: GetZoneRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.zoneId !== '') {
            writer.uint32(10).string(message.zoneId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetZoneRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetZoneRequest } as GetZoneRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zoneId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetZoneRequest {
        const message = { ...baseGetZoneRequest } as GetZoneRequest;
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null ? String(object.zoneId) : '';
        return message;
    },

    toJSON(message: GetZoneRequest): unknown {
        const obj: any = {};
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetZoneRequest>, I>>(object: I): GetZoneRequest {
        const message = { ...baseGetZoneRequest } as GetZoneRequest;
        message.zoneId = object.zoneId ?? '';
        return message;
    },
};

/** A set of methods to retrieve information about availability zones. */
export const ZoneServiceService = {
    /**
     * Returns the information about the specified availability zone.
     *
     * To get the list of availability zones, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.compute.v1.ZoneService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetZoneRequest) =>
            Buffer.from(GetZoneRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetZoneRequest.decode(value),
        responseSerialize: (value: Zone) => Buffer.from(Zone.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Zone.decode(value),
    },
    /** Retrieves the list of availability zones. */
    list: {
        path: '/yandex.cloud.compute.v1.ZoneService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListZonesRequest) =>
            Buffer.from(ListZonesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListZonesRequest.decode(value),
        responseSerialize: (value: ListZonesResponse) =>
            Buffer.from(ListZonesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListZonesResponse.decode(value),
    },
} as const;

export interface ZoneServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the information about the specified availability zone.
     *
     * To get the list of availability zones, make a [List] request.
     */
    get: handleUnaryCall<GetZoneRequest, Zone>;
    /** Retrieves the list of availability zones. */
    list: handleUnaryCall<ListZonesRequest, ListZonesResponse>;
}

export interface ZoneServiceClient extends Client {
    /**
     * Returns the information about the specified availability zone.
     *
     * To get the list of availability zones, make a [List] request.
     */
    get(
        request: GetZoneRequest,
        callback: (error: ServiceError | null, response: Zone) => void,
    ): ClientUnaryCall;
    get(
        request: GetZoneRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Zone) => void,
    ): ClientUnaryCall;
    get(
        request: GetZoneRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Zone) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of availability zones. */
    list(
        request: ListZonesRequest,
        callback: (error: ServiceError | null, response: ListZonesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListZonesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListZonesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListZonesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListZonesResponse) => void,
    ): ClientUnaryCall;
}

export const ZoneServiceClient = makeGenericClientConstructor(
    ZoneServiceService,
    'yandex.cloud.compute.v1.ZoneService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ZoneServiceClient;
    service: typeof ZoneServiceService;
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
