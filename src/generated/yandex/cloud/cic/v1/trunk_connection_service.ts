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
import { TrunkConnection } from '../../../../yandex/cloud/cic/v1/trunk_connection';

export const protobufPackage = 'yandex.cloud.cic.v1';

export interface GetTrunkConnectionRequest {
    /**
     * ID of the TrunkConnection resource to return.
     * To get the trunkConnection ID use a [TrunkConnectionService.List] request.
     */
    trunkConnectionId: string;
}

export interface ListTrunkConnectionsRequest {
    /**
     * ID of the folder to list trunkConnections in.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListTrunkConnectionsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListTrunkConnectionsResponse.next_page_token] returned by a previous list request.
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

export interface ListTrunkConnectionsResponse {
    /** List of TrunkConnection resources. */
    trunkConnections: TrunkConnection[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListTrunkConnectionsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListTrunkConnectionsRequest.page_token] query parameter
     * in the next list request. Subsequent list requests will have their own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetTrunkConnectionRequest: object = { trunkConnectionId: '' };

export const GetTrunkConnectionRequest = {
    encode(
        message: GetTrunkConnectionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.trunkConnectionId !== '') {
            writer.uint32(10).string(message.trunkConnectionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetTrunkConnectionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetTrunkConnectionRequest } as GetTrunkConnectionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trunkConnectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetTrunkConnectionRequest {
        const message = { ...baseGetTrunkConnectionRequest } as GetTrunkConnectionRequest;
        message.trunkConnectionId =
            object.trunkConnectionId !== undefined && object.trunkConnectionId !== null
                ? String(object.trunkConnectionId)
                : '';
        return message;
    },

    toJSON(message: GetTrunkConnectionRequest): unknown {
        const obj: any = {};
        message.trunkConnectionId !== undefined &&
            (obj.trunkConnectionId = message.trunkConnectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetTrunkConnectionRequest>, I>>(
        object: I,
    ): GetTrunkConnectionRequest {
        const message = { ...baseGetTrunkConnectionRequest } as GetTrunkConnectionRequest;
        message.trunkConnectionId = object.trunkConnectionId ?? '';
        return message;
    },
};

const baseListTrunkConnectionsRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListTrunkConnectionsRequest = {
    encode(
        message: ListTrunkConnectionsRequest,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListTrunkConnectionsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListTrunkConnectionsRequest } as ListTrunkConnectionsRequest;
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

    fromJSON(object: any): ListTrunkConnectionsRequest {
        const message = { ...baseListTrunkConnectionsRequest } as ListTrunkConnectionsRequest;
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

    toJSON(message: ListTrunkConnectionsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListTrunkConnectionsRequest>, I>>(
        object: I,
    ): ListTrunkConnectionsRequest {
        const message = { ...baseListTrunkConnectionsRequest } as ListTrunkConnectionsRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListTrunkConnectionsResponse: object = { nextPageToken: '' };

export const ListTrunkConnectionsResponse = {
    encode(
        message: ListTrunkConnectionsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.trunkConnections) {
            TrunkConnection.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListTrunkConnectionsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListTrunkConnectionsResponse } as ListTrunkConnectionsResponse;
        message.trunkConnections = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trunkConnections.push(TrunkConnection.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListTrunkConnectionsResponse {
        const message = { ...baseListTrunkConnectionsResponse } as ListTrunkConnectionsResponse;
        message.trunkConnections = (object.trunkConnections ?? []).map((e: any) =>
            TrunkConnection.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListTrunkConnectionsResponse): unknown {
        const obj: any = {};
        if (message.trunkConnections) {
            obj.trunkConnections = message.trunkConnections.map((e) =>
                e ? TrunkConnection.toJSON(e) : undefined,
            );
        } else {
            obj.trunkConnections = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListTrunkConnectionsResponse>, I>>(
        object: I,
    ): ListTrunkConnectionsResponse {
        const message = { ...baseListTrunkConnectionsResponse } as ListTrunkConnectionsResponse;
        message.trunkConnections =
            object.trunkConnections?.map((e) => TrunkConnection.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** A set of methods for managing TrunkConnection resources. */
export const TrunkConnectionServiceService = {
    /**
     * Returns the specified TrunkConnection resource.
     *
     * To get the list of available TrunkConnection resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.cic.v1.TrunkConnectionService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetTrunkConnectionRequest) =>
            Buffer.from(GetTrunkConnectionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetTrunkConnectionRequest.decode(value),
        responseSerialize: (value: TrunkConnection) =>
            Buffer.from(TrunkConnection.encode(value).finish()),
        responseDeserialize: (value: Buffer) => TrunkConnection.decode(value),
    },
    /** Retrieves the list of TrunkConnection resources in the specified folder. */
    list: {
        path: '/yandex.cloud.cic.v1.TrunkConnectionService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListTrunkConnectionsRequest) =>
            Buffer.from(ListTrunkConnectionsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListTrunkConnectionsRequest.decode(value),
        responseSerialize: (value: ListTrunkConnectionsResponse) =>
            Buffer.from(ListTrunkConnectionsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListTrunkConnectionsResponse.decode(value),
    },
} as const;

export interface TrunkConnectionServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified TrunkConnection resource.
     *
     * To get the list of available TrunkConnection resources, make a [List] request.
     */
    get: handleUnaryCall<GetTrunkConnectionRequest, TrunkConnection>;
    /** Retrieves the list of TrunkConnection resources in the specified folder. */
    list: handleUnaryCall<ListTrunkConnectionsRequest, ListTrunkConnectionsResponse>;
}

export interface TrunkConnectionServiceClient extends Client {
    /**
     * Returns the specified TrunkConnection resource.
     *
     * To get the list of available TrunkConnection resources, make a [List] request.
     */
    get(
        request: GetTrunkConnectionRequest,
        callback: (error: ServiceError | null, response: TrunkConnection) => void,
    ): ClientUnaryCall;
    get(
        request: GetTrunkConnectionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: TrunkConnection) => void,
    ): ClientUnaryCall;
    get(
        request: GetTrunkConnectionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: TrunkConnection) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of TrunkConnection resources in the specified folder. */
    list(
        request: ListTrunkConnectionsRequest,
        callback: (error: ServiceError | null, response: ListTrunkConnectionsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListTrunkConnectionsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListTrunkConnectionsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListTrunkConnectionsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListTrunkConnectionsResponse) => void,
    ): ClientUnaryCall;
}

export const TrunkConnectionServiceClient = makeGenericClientConstructor(
    TrunkConnectionServiceService,
    'yandex.cloud.cic.v1.TrunkConnectionService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): TrunkConnectionServiceClient;
    service: typeof TrunkConnectionServiceService;
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
