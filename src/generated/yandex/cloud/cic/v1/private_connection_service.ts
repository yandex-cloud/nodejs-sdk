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
import { PrivateConnection } from '../../../../yandex/cloud/cic/v1/private_connection';

export const protobufPackage = 'yandex.cloud.cic.v1';

export interface GetPrivateConnectionRequest {
    /**
     * ID of the PrivateConnection resource to return.
     * To get the privateConnection ID use a [PrivateConnectionService.List] request.
     */
    privateConnectionId: string;
}

export interface ListPrivateConnectionsRequest {
    /**
     * ID of the folder to list privateConnections in.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListPrivatesConnectionResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListPrivatesConnectionResponse.next_page_token] returned by a previous list request.
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

export interface ListPrivateConnectionsResponse {
    /** List of PrivateConnection resources. */
    privateConnections: PrivateConnection[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListPrivateConnectionsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListPrivateConnectionsRequest.page_token] query parameter
     * in the next list request. Subsequent list requests will have their own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetPrivateConnectionRequest: object = { privateConnectionId: '' };

export const GetPrivateConnectionRequest = {
    encode(
        message: GetPrivateConnectionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.privateConnectionId !== '') {
            writer.uint32(10).string(message.privateConnectionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetPrivateConnectionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetPrivateConnectionRequest } as GetPrivateConnectionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.privateConnectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetPrivateConnectionRequest {
        const message = { ...baseGetPrivateConnectionRequest } as GetPrivateConnectionRequest;
        message.privateConnectionId =
            object.privateConnectionId !== undefined && object.privateConnectionId !== null
                ? String(object.privateConnectionId)
                : '';
        return message;
    },

    toJSON(message: GetPrivateConnectionRequest): unknown {
        const obj: any = {};
        message.privateConnectionId !== undefined &&
            (obj.privateConnectionId = message.privateConnectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetPrivateConnectionRequest>, I>>(
        object: I,
    ): GetPrivateConnectionRequest {
        const message = { ...baseGetPrivateConnectionRequest } as GetPrivateConnectionRequest;
        message.privateConnectionId = object.privateConnectionId ?? '';
        return message;
    },
};

const baseListPrivateConnectionsRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListPrivateConnectionsRequest = {
    encode(
        message: ListPrivateConnectionsRequest,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListPrivateConnectionsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListPrivateConnectionsRequest } as ListPrivateConnectionsRequest;
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

    fromJSON(object: any): ListPrivateConnectionsRequest {
        const message = { ...baseListPrivateConnectionsRequest } as ListPrivateConnectionsRequest;
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

    toJSON(message: ListPrivateConnectionsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPrivateConnectionsRequest>, I>>(
        object: I,
    ): ListPrivateConnectionsRequest {
        const message = { ...baseListPrivateConnectionsRequest } as ListPrivateConnectionsRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListPrivateConnectionsResponse: object = { nextPageToken: '' };

export const ListPrivateConnectionsResponse = {
    encode(
        message: ListPrivateConnectionsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.privateConnections) {
            PrivateConnection.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListPrivateConnectionsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListPrivateConnectionsResponse } as ListPrivateConnectionsResponse;
        message.privateConnections = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.privateConnections.push(
                        PrivateConnection.decode(reader, reader.uint32()),
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

    fromJSON(object: any): ListPrivateConnectionsResponse {
        const message = { ...baseListPrivateConnectionsResponse } as ListPrivateConnectionsResponse;
        message.privateConnections = (object.privateConnections ?? []).map((e: any) =>
            PrivateConnection.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListPrivateConnectionsResponse): unknown {
        const obj: any = {};
        if (message.privateConnections) {
            obj.privateConnections = message.privateConnections.map((e) =>
                e ? PrivateConnection.toJSON(e) : undefined,
            );
        } else {
            obj.privateConnections = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPrivateConnectionsResponse>, I>>(
        object: I,
    ): ListPrivateConnectionsResponse {
        const message = { ...baseListPrivateConnectionsResponse } as ListPrivateConnectionsResponse;
        message.privateConnections =
            object.privateConnections?.map((e) => PrivateConnection.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** A set of methods for managing PrivateConnection resources. */
export const PrivateConnectionServiceService = {
    /**
     * Returns the specified PrivateConnection resource.
     *
     * To get the list of available PrivateConnection resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.cic.v1.PrivateConnectionService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetPrivateConnectionRequest) =>
            Buffer.from(GetPrivateConnectionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetPrivateConnectionRequest.decode(value),
        responseSerialize: (value: PrivateConnection) =>
            Buffer.from(PrivateConnection.encode(value).finish()),
        responseDeserialize: (value: Buffer) => PrivateConnection.decode(value),
    },
    /** Retrieves the list of PrivateConnection resources in the specified folder. */
    list: {
        path: '/yandex.cloud.cic.v1.PrivateConnectionService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListPrivateConnectionsRequest) =>
            Buffer.from(ListPrivateConnectionsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListPrivateConnectionsRequest.decode(value),
        responseSerialize: (value: ListPrivateConnectionsResponse) =>
            Buffer.from(ListPrivateConnectionsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListPrivateConnectionsResponse.decode(value),
    },
} as const;

export interface PrivateConnectionServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified PrivateConnection resource.
     *
     * To get the list of available PrivateConnection resources, make a [List] request.
     */
    get: handleUnaryCall<GetPrivateConnectionRequest, PrivateConnection>;
    /** Retrieves the list of PrivateConnection resources in the specified folder. */
    list: handleUnaryCall<ListPrivateConnectionsRequest, ListPrivateConnectionsResponse>;
}

export interface PrivateConnectionServiceClient extends Client {
    /**
     * Returns the specified PrivateConnection resource.
     *
     * To get the list of available PrivateConnection resources, make a [List] request.
     */
    get(
        request: GetPrivateConnectionRequest,
        callback: (error: ServiceError | null, response: PrivateConnection) => void,
    ): ClientUnaryCall;
    get(
        request: GetPrivateConnectionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: PrivateConnection) => void,
    ): ClientUnaryCall;
    get(
        request: GetPrivateConnectionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: PrivateConnection) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of PrivateConnection resources in the specified folder. */
    list(
        request: ListPrivateConnectionsRequest,
        callback: (error: ServiceError | null, response: ListPrivateConnectionsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListPrivateConnectionsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListPrivateConnectionsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListPrivateConnectionsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListPrivateConnectionsResponse) => void,
    ): ClientUnaryCall;
}

export const PrivateConnectionServiceClient = makeGenericClientConstructor(
    PrivateConnectionServiceService,
    'yandex.cloud.cic.v1.PrivateConnectionService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): PrivateConnectionServiceClient;
    service: typeof PrivateConnectionServiceService;
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
