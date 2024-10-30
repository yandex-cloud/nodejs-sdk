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
import { RoutingInstance } from '../../../../yandex/cloud/cloudrouter/v1/routing_instance';

export const protobufPackage = 'yandex.cloud.cloudrouter.v1';

export interface GetRoutingInstanceRequest {
    $type: 'yandex.cloud.cloudrouter.v1.GetRoutingInstanceRequest';
    /**
     * ID of the RoutingInstance resource to return.
     * To get the routingInstance ID use a [RoutingInstanceService.List] request.
     */
    routingInstanceId: string;
}

export interface GetRoutingInstanceByCicPrivateConnectionIdRequest {
    $type: 'yandex.cloud.cloudrouter.v1.GetRoutingInstanceByCicPrivateConnectionIdRequest';
    /**
     * ID of the PrivateConnection resource to return by.
     * To get the routingInstance ID use a [RoutingInstanceService.List] request.
     */
    cicPrivateConnectionId: string;
}

export interface GetRoutingInstanceByVpcNetworkIdRequest {
    $type: 'yandex.cloud.cloudrouter.v1.GetRoutingInstanceByVpcNetworkIdRequest';
    /**
     * ID of the VpcNetwork resource to return by.
     * To get the routingInstance ID use a [RoutingInstanceService.List] request.
     */
    vpcNetworkId: string;
}

export interface ListRoutingInstancesRequest {
    $type: 'yandex.cloud.cloudrouter.v1.ListRoutingInstancesRequest';
    /**
     * ID of the folder to list routingInstance in.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListRoutingInstancesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListRoutingInstanceResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [RoutingInstance.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
}

export interface ListRoutingInstancesResponse {
    $type: 'yandex.cloud.cloudrouter.v1.ListRoutingInstancesResponse';
    /** List of RoutingInstance resources. */
    routingInstances: RoutingInstance[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListRoutingInstancesResponse.page_size], use
     * the [next_page_token] as the value
     * for the [ListRoutingInstanceResponses.page_token] query parameter
     * in the next list request. Subsequent list requests will have their own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetRoutingInstanceRequest: object = {
    $type: 'yandex.cloud.cloudrouter.v1.GetRoutingInstanceRequest',
    routingInstanceId: '',
};

export const GetRoutingInstanceRequest = {
    $type: 'yandex.cloud.cloudrouter.v1.GetRoutingInstanceRequest' as const,

    encode(
        message: GetRoutingInstanceRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.routingInstanceId !== '') {
            writer.uint32(10).string(message.routingInstanceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetRoutingInstanceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetRoutingInstanceRequest } as GetRoutingInstanceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routingInstanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetRoutingInstanceRequest {
        const message = { ...baseGetRoutingInstanceRequest } as GetRoutingInstanceRequest;
        message.routingInstanceId =
            object.routingInstanceId !== undefined && object.routingInstanceId !== null
                ? String(object.routingInstanceId)
                : '';
        return message;
    },

    toJSON(message: GetRoutingInstanceRequest): unknown {
        const obj: any = {};
        message.routingInstanceId !== undefined &&
            (obj.routingInstanceId = message.routingInstanceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetRoutingInstanceRequest>, I>>(
        object: I,
    ): GetRoutingInstanceRequest {
        const message = { ...baseGetRoutingInstanceRequest } as GetRoutingInstanceRequest;
        message.routingInstanceId = object.routingInstanceId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetRoutingInstanceRequest.$type, GetRoutingInstanceRequest);

const baseGetRoutingInstanceByCicPrivateConnectionIdRequest: object = {
    $type: 'yandex.cloud.cloudrouter.v1.GetRoutingInstanceByCicPrivateConnectionIdRequest',
    cicPrivateConnectionId: '',
};

export const GetRoutingInstanceByCicPrivateConnectionIdRequest = {
    $type: 'yandex.cloud.cloudrouter.v1.GetRoutingInstanceByCicPrivateConnectionIdRequest' as const,

    encode(
        message: GetRoutingInstanceByCicPrivateConnectionIdRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.cicPrivateConnectionId !== '') {
            writer.uint32(10).string(message.cicPrivateConnectionId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): GetRoutingInstanceByCicPrivateConnectionIdRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetRoutingInstanceByCicPrivateConnectionIdRequest,
        } as GetRoutingInstanceByCicPrivateConnectionIdRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cicPrivateConnectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetRoutingInstanceByCicPrivateConnectionIdRequest {
        const message = {
            ...baseGetRoutingInstanceByCicPrivateConnectionIdRequest,
        } as GetRoutingInstanceByCicPrivateConnectionIdRequest;
        message.cicPrivateConnectionId =
            object.cicPrivateConnectionId !== undefined && object.cicPrivateConnectionId !== null
                ? String(object.cicPrivateConnectionId)
                : '';
        return message;
    },

    toJSON(message: GetRoutingInstanceByCicPrivateConnectionIdRequest): unknown {
        const obj: any = {};
        message.cicPrivateConnectionId !== undefined &&
            (obj.cicPrivateConnectionId = message.cicPrivateConnectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetRoutingInstanceByCicPrivateConnectionIdRequest>, I>>(
        object: I,
    ): GetRoutingInstanceByCicPrivateConnectionIdRequest {
        const message = {
            ...baseGetRoutingInstanceByCicPrivateConnectionIdRequest,
        } as GetRoutingInstanceByCicPrivateConnectionIdRequest;
        message.cicPrivateConnectionId = object.cicPrivateConnectionId ?? '';
        return message;
    },
};

messageTypeRegistry.set(
    GetRoutingInstanceByCicPrivateConnectionIdRequest.$type,
    GetRoutingInstanceByCicPrivateConnectionIdRequest,
);

const baseGetRoutingInstanceByVpcNetworkIdRequest: object = {
    $type: 'yandex.cloud.cloudrouter.v1.GetRoutingInstanceByVpcNetworkIdRequest',
    vpcNetworkId: '',
};

export const GetRoutingInstanceByVpcNetworkIdRequest = {
    $type: 'yandex.cloud.cloudrouter.v1.GetRoutingInstanceByVpcNetworkIdRequest' as const,

    encode(
        message: GetRoutingInstanceByVpcNetworkIdRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.vpcNetworkId !== '') {
            writer.uint32(10).string(message.vpcNetworkId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): GetRoutingInstanceByVpcNetworkIdRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetRoutingInstanceByVpcNetworkIdRequest,
        } as GetRoutingInstanceByVpcNetworkIdRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vpcNetworkId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetRoutingInstanceByVpcNetworkIdRequest {
        const message = {
            ...baseGetRoutingInstanceByVpcNetworkIdRequest,
        } as GetRoutingInstanceByVpcNetworkIdRequest;
        message.vpcNetworkId =
            object.vpcNetworkId !== undefined && object.vpcNetworkId !== null
                ? String(object.vpcNetworkId)
                : '';
        return message;
    },

    toJSON(message: GetRoutingInstanceByVpcNetworkIdRequest): unknown {
        const obj: any = {};
        message.vpcNetworkId !== undefined && (obj.vpcNetworkId = message.vpcNetworkId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetRoutingInstanceByVpcNetworkIdRequest>, I>>(
        object: I,
    ): GetRoutingInstanceByVpcNetworkIdRequest {
        const message = {
            ...baseGetRoutingInstanceByVpcNetworkIdRequest,
        } as GetRoutingInstanceByVpcNetworkIdRequest;
        message.vpcNetworkId = object.vpcNetworkId ?? '';
        return message;
    },
};

messageTypeRegistry.set(
    GetRoutingInstanceByVpcNetworkIdRequest.$type,
    GetRoutingInstanceByVpcNetworkIdRequest,
);

const baseListRoutingInstancesRequest: object = {
    $type: 'yandex.cloud.cloudrouter.v1.ListRoutingInstancesRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListRoutingInstancesRequest = {
    $type: 'yandex.cloud.cloudrouter.v1.ListRoutingInstancesRequest' as const,

    encode(
        message: ListRoutingInstancesRequest,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListRoutingInstancesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListRoutingInstancesRequest } as ListRoutingInstancesRequest;
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

    fromJSON(object: any): ListRoutingInstancesRequest {
        const message = { ...baseListRoutingInstancesRequest } as ListRoutingInstancesRequest;
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

    toJSON(message: ListRoutingInstancesRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListRoutingInstancesRequest>, I>>(
        object: I,
    ): ListRoutingInstancesRequest {
        const message = { ...baseListRoutingInstancesRequest } as ListRoutingInstancesRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListRoutingInstancesRequest.$type, ListRoutingInstancesRequest);

const baseListRoutingInstancesResponse: object = {
    $type: 'yandex.cloud.cloudrouter.v1.ListRoutingInstancesResponse',
    nextPageToken: '',
};

export const ListRoutingInstancesResponse = {
    $type: 'yandex.cloud.cloudrouter.v1.ListRoutingInstancesResponse' as const,

    encode(
        message: ListRoutingInstancesResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.routingInstances) {
            RoutingInstance.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListRoutingInstancesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListRoutingInstancesResponse } as ListRoutingInstancesResponse;
        message.routingInstances = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routingInstances.push(RoutingInstance.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListRoutingInstancesResponse {
        const message = { ...baseListRoutingInstancesResponse } as ListRoutingInstancesResponse;
        message.routingInstances = (object.routingInstances ?? []).map((e: any) =>
            RoutingInstance.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListRoutingInstancesResponse): unknown {
        const obj: any = {};
        if (message.routingInstances) {
            obj.routingInstances = message.routingInstances.map((e) =>
                e ? RoutingInstance.toJSON(e) : undefined,
            );
        } else {
            obj.routingInstances = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListRoutingInstancesResponse>, I>>(
        object: I,
    ): ListRoutingInstancesResponse {
        const message = { ...baseListRoutingInstancesResponse } as ListRoutingInstancesResponse;
        message.routingInstances =
            object.routingInstances?.map((e) => RoutingInstance.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListRoutingInstancesResponse.$type, ListRoutingInstancesResponse);

/** A set of methods for managing RoutingInstance resources. */
export const RoutingInstanceServiceService = {
    /**
     * Returns the specified RoutingInstance resource.
     *
     * To get the list of available RoutingInstance resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.cloudrouter.v1.RoutingInstanceService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetRoutingInstanceRequest) =>
            Buffer.from(GetRoutingInstanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetRoutingInstanceRequest.decode(value),
        responseSerialize: (value: RoutingInstance) =>
            Buffer.from(RoutingInstance.encode(value).finish()),
        responseDeserialize: (value: Buffer) => RoutingInstance.decode(value),
    },
    /**
     * Returns the RoutingInstance resource by vpcNetworkId
     *
     * To get the list of available RoutingInstance resources, make a [List] request.
     */
    getByVpcNetworkId: {
        path: '/yandex.cloud.cloudrouter.v1.RoutingInstanceService/GetByVpcNetworkId',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetRoutingInstanceByVpcNetworkIdRequest) =>
            Buffer.from(GetRoutingInstanceByVpcNetworkIdRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetRoutingInstanceByVpcNetworkIdRequest.decode(value),
        responseSerialize: (value: RoutingInstance) =>
            Buffer.from(RoutingInstance.encode(value).finish()),
        responseDeserialize: (value: Buffer) => RoutingInstance.decode(value),
    },
    /**
     * Returns the RoutingInstance resource by cicPrivateConnectionId
     *
     * To get the list of available RoutingInstance resources, make a [List] request.
     */
    getByCicPrivateConnectionId: {
        path: '/yandex.cloud.cloudrouter.v1.RoutingInstanceService/GetByCicPrivateConnectionId',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetRoutingInstanceByCicPrivateConnectionIdRequest) =>
            Buffer.from(GetRoutingInstanceByCicPrivateConnectionIdRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetRoutingInstanceByCicPrivateConnectionIdRequest.decode(value),
        responseSerialize: (value: RoutingInstance) =>
            Buffer.from(RoutingInstance.encode(value).finish()),
        responseDeserialize: (value: Buffer) => RoutingInstance.decode(value),
    },
    /** Retrieves the list of RoutingInstance resources in the specified folder. */
    list: {
        path: '/yandex.cloud.cloudrouter.v1.RoutingInstanceService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListRoutingInstancesRequest) =>
            Buffer.from(ListRoutingInstancesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListRoutingInstancesRequest.decode(value),
        responseSerialize: (value: ListRoutingInstancesResponse) =>
            Buffer.from(ListRoutingInstancesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListRoutingInstancesResponse.decode(value),
    },
} as const;

export interface RoutingInstanceServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified RoutingInstance resource.
     *
     * To get the list of available RoutingInstance resources, make a [List] request.
     */
    get: handleUnaryCall<GetRoutingInstanceRequest, RoutingInstance>;
    /**
     * Returns the RoutingInstance resource by vpcNetworkId
     *
     * To get the list of available RoutingInstance resources, make a [List] request.
     */
    getByVpcNetworkId: handleUnaryCall<GetRoutingInstanceByVpcNetworkIdRequest, RoutingInstance>;
    /**
     * Returns the RoutingInstance resource by cicPrivateConnectionId
     *
     * To get the list of available RoutingInstance resources, make a [List] request.
     */
    getByCicPrivateConnectionId: handleUnaryCall<
        GetRoutingInstanceByCicPrivateConnectionIdRequest,
        RoutingInstance
    >;
    /** Retrieves the list of RoutingInstance resources in the specified folder. */
    list: handleUnaryCall<ListRoutingInstancesRequest, ListRoutingInstancesResponse>;
}

export interface RoutingInstanceServiceClient extends Client {
    /**
     * Returns the specified RoutingInstance resource.
     *
     * To get the list of available RoutingInstance resources, make a [List] request.
     */
    get(
        request: GetRoutingInstanceRequest,
        callback: (error: ServiceError | null, response: RoutingInstance) => void,
    ): ClientUnaryCall;
    get(
        request: GetRoutingInstanceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: RoutingInstance) => void,
    ): ClientUnaryCall;
    get(
        request: GetRoutingInstanceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: RoutingInstance) => void,
    ): ClientUnaryCall;
    /**
     * Returns the RoutingInstance resource by vpcNetworkId
     *
     * To get the list of available RoutingInstance resources, make a [List] request.
     */
    getByVpcNetworkId(
        request: GetRoutingInstanceByVpcNetworkIdRequest,
        callback: (error: ServiceError | null, response: RoutingInstance) => void,
    ): ClientUnaryCall;
    getByVpcNetworkId(
        request: GetRoutingInstanceByVpcNetworkIdRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: RoutingInstance) => void,
    ): ClientUnaryCall;
    getByVpcNetworkId(
        request: GetRoutingInstanceByVpcNetworkIdRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: RoutingInstance) => void,
    ): ClientUnaryCall;
    /**
     * Returns the RoutingInstance resource by cicPrivateConnectionId
     *
     * To get the list of available RoutingInstance resources, make a [List] request.
     */
    getByCicPrivateConnectionId(
        request: GetRoutingInstanceByCicPrivateConnectionIdRequest,
        callback: (error: ServiceError | null, response: RoutingInstance) => void,
    ): ClientUnaryCall;
    getByCicPrivateConnectionId(
        request: GetRoutingInstanceByCicPrivateConnectionIdRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: RoutingInstance) => void,
    ): ClientUnaryCall;
    getByCicPrivateConnectionId(
        request: GetRoutingInstanceByCicPrivateConnectionIdRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: RoutingInstance) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of RoutingInstance resources in the specified folder. */
    list(
        request: ListRoutingInstancesRequest,
        callback: (error: ServiceError | null, response: ListRoutingInstancesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListRoutingInstancesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListRoutingInstancesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListRoutingInstancesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListRoutingInstancesResponse) => void,
    ): ClientUnaryCall;
}

export const RoutingInstanceServiceClient = makeGenericClientConstructor(
    RoutingInstanceServiceService,
    'yandex.cloud.cloudrouter.v1.RoutingInstanceService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): RoutingInstanceServiceClient;
    service: typeof RoutingInstanceServiceService;
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
