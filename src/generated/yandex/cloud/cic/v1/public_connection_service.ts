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
import { PublicConnection } from '../../../../yandex/cloud/cic/v1/public_connection';

export const protobufPackage = 'yandex.cloud.cic.v1';

export interface GetPublicConnectionRequest {
    /**
     * ID of the PublicConnection resource to return.
     * To get the publicConnection ID use a [PublicConnectionService.List] request.
     */
    publicConnectionId: string;
}

export interface ListPublicConnectionsRequest {
    /**
     * ID of the folder to list publicConnections in.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListPublicConnectionsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListPublicConnectionsResponse.next_page_token] returned by a previous list request.
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

export interface ListPublicConnectionsResponse {
    /** List of PublicConnection resources. */
    publicConnections: PublicConnection[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListPublicConnectionsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListPublicConnectionsRequest.page_token] query parameter
     * in the next list request. Subsequent list requests will have their own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetPublicConnectionRequest: object = { publicConnectionId: '' };

export const GetPublicConnectionRequest = {
    encode(
        message: GetPublicConnectionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.publicConnectionId !== '') {
            writer.uint32(10).string(message.publicConnectionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetPublicConnectionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetPublicConnectionRequest } as GetPublicConnectionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicConnectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetPublicConnectionRequest {
        const message = { ...baseGetPublicConnectionRequest } as GetPublicConnectionRequest;
        message.publicConnectionId =
            object.publicConnectionId !== undefined && object.publicConnectionId !== null
                ? String(object.publicConnectionId)
                : '';
        return message;
    },

    toJSON(message: GetPublicConnectionRequest): unknown {
        const obj: any = {};
        message.publicConnectionId !== undefined &&
            (obj.publicConnectionId = message.publicConnectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetPublicConnectionRequest>, I>>(
        object: I,
    ): GetPublicConnectionRequest {
        const message = { ...baseGetPublicConnectionRequest } as GetPublicConnectionRequest;
        message.publicConnectionId = object.publicConnectionId ?? '';
        return message;
    },
};

const baseListPublicConnectionsRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListPublicConnectionsRequest = {
    encode(
        message: ListPublicConnectionsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListPublicConnectionsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListPublicConnectionsRequest } as ListPublicConnectionsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
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

    fromJSON(object: any): ListPublicConnectionsRequest {
        const message = { ...baseListPublicConnectionsRequest } as ListPublicConnectionsRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
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

    toJSON(message: ListPublicConnectionsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPublicConnectionsRequest>, I>>(
        object: I,
    ): ListPublicConnectionsRequest {
        const message = { ...baseListPublicConnectionsRequest } as ListPublicConnectionsRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListPublicConnectionsResponse: object = { nextPageToken: '' };

export const ListPublicConnectionsResponse = {
    encode(
        message: ListPublicConnectionsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.publicConnections) {
            PublicConnection.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListPublicConnectionsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListPublicConnectionsResponse } as ListPublicConnectionsResponse;
        message.publicConnections = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicConnections.push(
                        PublicConnection.decode(reader, reader.uint32()),
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

    fromJSON(object: any): ListPublicConnectionsResponse {
        const message = { ...baseListPublicConnectionsResponse } as ListPublicConnectionsResponse;
        message.publicConnections = (object.publicConnections ?? []).map((e: any) =>
            PublicConnection.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListPublicConnectionsResponse): unknown {
        const obj: any = {};
        if (message.publicConnections) {
            obj.publicConnections = message.publicConnections.map((e) =>
                e ? PublicConnection.toJSON(e) : undefined,
            );
        } else {
            obj.publicConnections = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPublicConnectionsResponse>, I>>(
        object: I,
    ): ListPublicConnectionsResponse {
        const message = { ...baseListPublicConnectionsResponse } as ListPublicConnectionsResponse;
        message.publicConnections =
            object.publicConnections?.map((e) => PublicConnection.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** A set of methods for managing PublicConnection resources. */
export const PublicConnectionServiceService = {
    /**
     * Returns the specified PublicConnection resource.
     *
     * To get the list of available PublicConnection resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.cic.v1.PublicConnectionService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetPublicConnectionRequest) =>
            Buffer.from(GetPublicConnectionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetPublicConnectionRequest.decode(value),
        responseSerialize: (value: PublicConnection) =>
            Buffer.from(PublicConnection.encode(value).finish()),
        responseDeserialize: (value: Buffer) => PublicConnection.decode(value),
    },
    /** Retrieves the list of PublicConnection resources in the specified folder. */
    list: {
        path: '/yandex.cloud.cic.v1.PublicConnectionService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListPublicConnectionsRequest) =>
            Buffer.from(ListPublicConnectionsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListPublicConnectionsRequest.decode(value),
        responseSerialize: (value: ListPublicConnectionsResponse) =>
            Buffer.from(ListPublicConnectionsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListPublicConnectionsResponse.decode(value),
    },
} as const;

export interface PublicConnectionServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified PublicConnection resource.
     *
     * To get the list of available PublicConnection resources, make a [List] request.
     */
    get: handleUnaryCall<GetPublicConnectionRequest, PublicConnection>;
    /** Retrieves the list of PublicConnection resources in the specified folder. */
    list: handleUnaryCall<ListPublicConnectionsRequest, ListPublicConnectionsResponse>;
}

export interface PublicConnectionServiceClient extends Client {
    /**
     * Returns the specified PublicConnection resource.
     *
     * To get the list of available PublicConnection resources, make a [List] request.
     */
    get(
        request: GetPublicConnectionRequest,
        callback: (error: ServiceError | null, response: PublicConnection) => void,
    ): ClientUnaryCall;
    get(
        request: GetPublicConnectionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: PublicConnection) => void,
    ): ClientUnaryCall;
    get(
        request: GetPublicConnectionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: PublicConnection) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of PublicConnection resources in the specified folder. */
    list(
        request: ListPublicConnectionsRequest,
        callback: (error: ServiceError | null, response: ListPublicConnectionsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListPublicConnectionsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListPublicConnectionsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListPublicConnectionsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListPublicConnectionsResponse) => void,
    ): ClientUnaryCall;
}

export const PublicConnectionServiceClient = makeGenericClientConstructor(
    PublicConnectionServiceService,
    'yandex.cloud.cic.v1.PublicConnectionService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): PublicConnectionServiceClient;
    service: typeof PublicConnectionServiceService;
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
