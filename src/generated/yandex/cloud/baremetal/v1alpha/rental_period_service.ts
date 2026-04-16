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
import { RentalPeriod } from './rental_period';

export const protobufPackage = 'yandex.cloud.baremetal.v1alpha';

export interface ListRentalPeriodsRequest {
    /**
     * ID of the Configuration resource to return a Rental Period for.
     * To get the configuration ID, use a [ConfigurationService.List] request.
     */
    configurationId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is greater than `page_size`,
     * the service returns a [ListRentalPeriodsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value is 20.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListRentalPeriodsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListRentalPeriodsResponse {
    /** List of RentalPeriod resources. */
    rentalPeriods: RentalPeriod[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * [ListRentalPeriodsRequest.page_size], use `next_page_token` as the value
     * for the [ListRentalPeriodsResponse.page_token] parameter in the next list request.
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

const baseListRentalPeriodsRequest: object = { configurationId: '', pageSize: 0, pageToken: '' };

export const ListRentalPeriodsRequest: {
    encode(message: ListRentalPeriodsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListRentalPeriodsRequest;
    fromJSON(object: any): ListRentalPeriodsRequest;
    toJSON(message: ListRentalPeriodsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListRentalPeriodsRequest>, I>>(object: I): ListRentalPeriodsRequest;
} = {
    encode(
        message: ListRentalPeriodsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.configurationId !== '') {
            writer.uint32(10).string(message.configurationId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(800).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(810).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListRentalPeriodsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListRentalPeriodsRequest } as ListRentalPeriodsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configurationId = reader.string();
                    break;
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

    fromJSON(object: any): ListRentalPeriodsRequest {
        const message = { ...baseListRentalPeriodsRequest } as ListRentalPeriodsRequest;
        message.configurationId =
            object.configurationId !== undefined && object.configurationId !== null
                ? String(object.configurationId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListRentalPeriodsRequest): unknown {
        const obj: any = {};
        message.configurationId !== undefined && (obj.configurationId = message.configurationId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListRentalPeriodsRequest>, I>>(
        object: I,
    ): ListRentalPeriodsRequest {
        const message = { ...baseListRentalPeriodsRequest } as ListRentalPeriodsRequest;
        message.configurationId = object.configurationId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListRentalPeriodsResponse: object = { nextPageToken: '' };

export const ListRentalPeriodsResponse: {
    encode(message: ListRentalPeriodsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListRentalPeriodsResponse;
    fromJSON(object: any): ListRentalPeriodsResponse;
    toJSON(message: ListRentalPeriodsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListRentalPeriodsResponse>, I>>(object: I): ListRentalPeriodsResponse;
} = {
    encode(
        message: ListRentalPeriodsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.rentalPeriods) {
            RentalPeriod.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(802).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListRentalPeriodsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListRentalPeriodsResponse } as ListRentalPeriodsResponse;
        message.rentalPeriods = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rentalPeriods.push(RentalPeriod.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListRentalPeriodsResponse {
        const message = { ...baseListRentalPeriodsResponse } as ListRentalPeriodsResponse;
        message.rentalPeriods = (object.rentalPeriods ?? []).map((e: any) =>
            RentalPeriod.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListRentalPeriodsResponse): unknown {
        const obj: any = {};
        if (message.rentalPeriods) {
            obj.rentalPeriods = message.rentalPeriods.map((e) =>
                e ? RentalPeriod.toJSON(e) : undefined,
            );
        } else {
            obj.rentalPeriods = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListRentalPeriodsResponse>, I>>(
        object: I,
    ): ListRentalPeriodsResponse {
        const message = { ...baseListRentalPeriodsResponse } as ListRentalPeriodsResponse;
        message.rentalPeriods = object.rentalPeriods?.map((e) => RentalPeriod.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** A set of methods to retrieve information about RentalPeriod resources. */
export const RentalPeriodServiceService = {
    /** Retrieves the list of RentalPeriod resources. */
    list: {
        path: '/yandex.cloud.baremetal.v1alpha.RentalPeriodService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListRentalPeriodsRequest) =>
            Buffer.from(ListRentalPeriodsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListRentalPeriodsRequest.decode(value),
        responseSerialize: (value: ListRentalPeriodsResponse) =>
            Buffer.from(ListRentalPeriodsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListRentalPeriodsResponse.decode(value),
    },
} as const;

export interface RentalPeriodServiceServer extends UntypedServiceImplementation {
    /** Retrieves the list of RentalPeriod resources. */
    list: handleUnaryCall<ListRentalPeriodsRequest, ListRentalPeriodsResponse>;
}

export interface RentalPeriodServiceClient extends Client {
    /** Retrieves the list of RentalPeriod resources. */
    list(
        request: ListRentalPeriodsRequest,
        callback: (error: ServiceError | null, response: ListRentalPeriodsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListRentalPeriodsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListRentalPeriodsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListRentalPeriodsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListRentalPeriodsResponse) => void,
    ): ClientUnaryCall;
}

export const RentalPeriodServiceClient = makeGenericClientConstructor(
    RentalPeriodServiceService,
    'yandex.cloud.baremetal.v1alpha.RentalPeriodService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): RentalPeriodServiceClient;
    service: typeof RentalPeriodServiceService;
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
