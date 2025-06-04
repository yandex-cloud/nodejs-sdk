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
import { Configuration } from '../../../../yandex/cloud/baremetal/v1alpha/configuration';

export const protobufPackage = 'yandex.cloud.baremetal.v1alpha';

export interface GetConfigurationRequest {
    /**
     * ID of the Configuration resource to return.
     *
     * To get the configuration ID, use a [ConfigurationService.List] request.
     */
    configurationId: string;
}

export interface ListConfigurationsRequest {
    /**
     * The maximum number of results per page to return. If the number of available
     * results is greater than `page_size`,
     * the service returns a [ListConfigurationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value is 20.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListConfigurationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * By which column the listing should be ordered and in which direction,
     * format is "createdAt desc". "id asc" if omitted.
     * Supported fields: ["id", "name"].
     * Both snake_case and camelCase are supported for fields.
     */
    orderBy: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression consists of one or more conditions united by `AND` operator: `<condition1> [AND <condition2> [<...> AND <conditionN>]]`.
     *
     * Each condition has the form `<field> <operator> <value>`, where:
     * 1. `<field>` is the field name. Currently you can use filtering only on the limited number of fields.
     * 2. `<operator>` is a logical operator, one of `=` (equal), `:` (substring).
     * 3. `<value>` represents a value.
     * String values should be written in double (`"`) or single (`'`) quotes. C-style escape sequences are supported (`\"` turns to `"`, `\'` to `'`, `\\` to backslash).
     * Example: "key1='value' AND key2='value'"
     * Supported operators: ["AND"].
     * Supported fields: ["id", "name"].
     * Both snake_case and camelCase are supported for fields.
     */
    filter: string;
}

export interface ListConfigurationsResponse {
    /** List of Configuration resources. */
    configurations: Configuration[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * [ListConfigurationsRequest.page_size], use `next_page_token` as the value
     * for the [ListConfigurationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetConfigurationRequest: object = { configurationId: '' };

export const GetConfigurationRequest = {
    encode(message: GetConfigurationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.configurationId !== '') {
            writer.uint32(10).string(message.configurationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetConfigurationRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetConfigurationRequest } as GetConfigurationRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configurationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetConfigurationRequest {
        const message = { ...baseGetConfigurationRequest } as GetConfigurationRequest;
        message.configurationId =
            object.configurationId !== undefined && object.configurationId !== null
                ? String(object.configurationId)
                : '';
        return message;
    },

    toJSON(message: GetConfigurationRequest): unknown {
        const obj: any = {};
        message.configurationId !== undefined && (obj.configurationId = message.configurationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetConfigurationRequest>, I>>(
        object: I,
    ): GetConfigurationRequest {
        const message = { ...baseGetConfigurationRequest } as GetConfigurationRequest;
        message.configurationId = object.configurationId ?? '';
        return message;
    },
};

const baseListConfigurationsRequest: object = {
    pageSize: 0,
    pageToken: '',
    orderBy: '',
    filter: '',
};

export const ListConfigurationsRequest = {
    encode(
        message: ListConfigurationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.pageSize !== 0) {
            writer.uint32(800).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(810).string(message.pageToken);
        }
        if (message.orderBy !== '') {
            writer.uint32(818).string(message.orderBy);
        }
        if (message.filter !== '') {
            writer.uint32(826).string(message.filter);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListConfigurationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListConfigurationsRequest } as ListConfigurationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 100:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 101:
                    message.pageToken = reader.string();
                    break;
                case 102:
                    message.orderBy = reader.string();
                    break;
                case 103:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListConfigurationsRequest {
        const message = { ...baseListConfigurationsRequest } as ListConfigurationsRequest;
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        message.orderBy =
            object.orderBy !== undefined && object.orderBy !== null ? String(object.orderBy) : '';
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        return message;
    },

    toJSON(message: ListConfigurationsRequest): unknown {
        const obj: any = {};
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListConfigurationsRequest>, I>>(
        object: I,
    ): ListConfigurationsRequest {
        const message = { ...baseListConfigurationsRequest } as ListConfigurationsRequest;
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.orderBy = object.orderBy ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListConfigurationsResponse: object = { nextPageToken: '' };

export const ListConfigurationsResponse = {
    encode(
        message: ListConfigurationsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.configurations) {
            Configuration.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(802).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListConfigurationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListConfigurationsResponse } as ListConfigurationsResponse;
        message.configurations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configurations.push(Configuration.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListConfigurationsResponse {
        const message = { ...baseListConfigurationsResponse } as ListConfigurationsResponse;
        message.configurations = (object.configurations ?? []).map((e: any) =>
            Configuration.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListConfigurationsResponse): unknown {
        const obj: any = {};
        if (message.configurations) {
            obj.configurations = message.configurations.map((e) =>
                e ? Configuration.toJSON(e) : undefined,
            );
        } else {
            obj.configurations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListConfigurationsResponse>, I>>(
        object: I,
    ): ListConfigurationsResponse {
        const message = { ...baseListConfigurationsResponse } as ListConfigurationsResponse;
        message.configurations =
            object.configurations?.map((e) => Configuration.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** A set of methods to retrieve information about Configuration resources. */
export const ConfigurationServiceService = {
    /**
     * Returns the specific Configuration resource.
     *
     * To get the list of available Configuration resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.baremetal.v1alpha.ConfigurationService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetConfigurationRequest) =>
            Buffer.from(GetConfigurationRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetConfigurationRequest.decode(value),
        responseSerialize: (value: Configuration) =>
            Buffer.from(Configuration.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Configuration.decode(value),
    },
    /** Retrieves the list of Configuration resources. */
    list: {
        path: '/yandex.cloud.baremetal.v1alpha.ConfigurationService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListConfigurationsRequest) =>
            Buffer.from(ListConfigurationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListConfigurationsRequest.decode(value),
        responseSerialize: (value: ListConfigurationsResponse) =>
            Buffer.from(ListConfigurationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListConfigurationsResponse.decode(value),
    },
} as const;

export interface ConfigurationServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specific Configuration resource.
     *
     * To get the list of available Configuration resources, make a [List] request.
     */
    get: handleUnaryCall<GetConfigurationRequest, Configuration>;
    /** Retrieves the list of Configuration resources. */
    list: handleUnaryCall<ListConfigurationsRequest, ListConfigurationsResponse>;
}

export interface ConfigurationServiceClient extends Client {
    /**
     * Returns the specific Configuration resource.
     *
     * To get the list of available Configuration resources, make a [List] request.
     */
    get(
        request: GetConfigurationRequest,
        callback: (error: ServiceError | null, response: Configuration) => void,
    ): ClientUnaryCall;
    get(
        request: GetConfigurationRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Configuration) => void,
    ): ClientUnaryCall;
    get(
        request: GetConfigurationRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Configuration) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of Configuration resources. */
    list(
        request: ListConfigurationsRequest,
        callback: (error: ServiceError | null, response: ListConfigurationsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListConfigurationsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListConfigurationsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListConfigurationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListConfigurationsResponse) => void,
    ): ClientUnaryCall;
}

export const ConfigurationServiceClient = makeGenericClientConstructor(
    ConfigurationServiceService,
    'yandex.cloud.baremetal.v1alpha.ConfigurationService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ConfigurationServiceClient;
    service: typeof ConfigurationServiceService;
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
