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
import { StandardImage } from './standard_image';

export const protobufPackage = 'yandex.cloud.baremetal.v1alpha';

export interface GetStandardImageRequest {
    /**
     * ID of the StandardImage resource to return.
     * To get the standard image ID, use a [StandardImageService.List] request.
     */
    standardImageId: string;
}

export interface ListStandardImagesRequest {
    /**
     * The maximum number of results per page to return. If the number of available
     * results is greater than `page_size`,
     * the service returns a [ListStandardImagesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value is 20.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListStandardImagesResponse.next_page_token] returned by a previous list request.
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
    /**
     * ID of the folder to return a StandardImage resource for.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request. Pass the "baremetal-standard-images" folder to get general images.
     */
    folderId: string;
}

export interface ListStandardImagesResponse {
    /** List of StandardImage resources. */
    standardImages: StandardImage[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * [ListStandardImagesRequest.page_size], use `next_page_token` as the value
     * for the [ListStandardImagesRequest.page_token] parameter in the next list request.
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetStandardImageRequest: object = { standardImageId: '' };

export const GetStandardImageRequest: {
    encode(message: GetStandardImageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetStandardImageRequest;
    fromJSON(object: any): GetStandardImageRequest;
    toJSON(message: GetStandardImageRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetStandardImageRequest>, I>>(object: I): GetStandardImageRequest;
} = {
    encode(message: GetStandardImageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.standardImageId !== '') {
            writer.uint32(10).string(message.standardImageId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetStandardImageRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetStandardImageRequest } as GetStandardImageRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.standardImageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetStandardImageRequest {
        const message = { ...baseGetStandardImageRequest } as GetStandardImageRequest;
        message.standardImageId =
            object.standardImageId !== undefined && object.standardImageId !== null
                ? String(object.standardImageId)
                : '';
        return message;
    },

    toJSON(message: GetStandardImageRequest): unknown {
        const obj: any = {};
        message.standardImageId !== undefined && (obj.standardImageId = message.standardImageId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetStandardImageRequest>, I>>(
        object: I,
    ): GetStandardImageRequest {
        const message = { ...baseGetStandardImageRequest } as GetStandardImageRequest;
        message.standardImageId = object.standardImageId ?? '';
        return message;
    },
};

const baseListStandardImagesRequest: object = {
    pageSize: 0,
    pageToken: '',
    orderBy: '',
    filter: '',
    folderId: '',
};

export const ListStandardImagesRequest: {
    encode(message: ListStandardImagesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListStandardImagesRequest;
    fromJSON(object: any): ListStandardImagesRequest;
    toJSON(message: ListStandardImagesRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListStandardImagesRequest>, I>>(object: I): ListStandardImagesRequest;
} = {
    encode(
        message: ListStandardImagesRequest,
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
        if (message.folderId !== '') {
            writer.uint32(834).string(message.folderId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListStandardImagesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListStandardImagesRequest } as ListStandardImagesRequest;
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
                case 104:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListStandardImagesRequest {
        const message = { ...baseListStandardImagesRequest } as ListStandardImagesRequest;
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
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        return message;
    },

    toJSON(message: ListStandardImagesRequest): unknown {
        const obj: any = {};
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        message.filter !== undefined && (obj.filter = message.filter);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListStandardImagesRequest>, I>>(
        object: I,
    ): ListStandardImagesRequest {
        const message = { ...baseListStandardImagesRequest } as ListStandardImagesRequest;
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.orderBy = object.orderBy ?? '';
        message.filter = object.filter ?? '';
        message.folderId = object.folderId ?? '';
        return message;
    },
};

const baseListStandardImagesResponse: object = { nextPageToken: '' };

export const ListStandardImagesResponse: {
    encode(message: ListStandardImagesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListStandardImagesResponse;
    fromJSON(object: any): ListStandardImagesResponse;
    toJSON(message: ListStandardImagesResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListStandardImagesResponse>, I>>(object: I): ListStandardImagesResponse;
} = {
    encode(
        message: ListStandardImagesResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.standardImages) {
            StandardImage.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(802).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListStandardImagesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListStandardImagesResponse } as ListStandardImagesResponse;
        message.standardImages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.standardImages.push(StandardImage.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListStandardImagesResponse {
        const message = { ...baseListStandardImagesResponse } as ListStandardImagesResponse;
        message.standardImages = (object.standardImages ?? []).map((e: any) =>
            StandardImage.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListStandardImagesResponse): unknown {
        const obj: any = {};
        if (message.standardImages) {
            obj.standardImages = message.standardImages.map((e) =>
                e ? StandardImage.toJSON(e) : undefined,
            );
        } else {
            obj.standardImages = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListStandardImagesResponse>, I>>(
        object: I,
    ): ListStandardImagesResponse {
        const message = { ...baseListStandardImagesResponse } as ListStandardImagesResponse;
        message.standardImages =
            object.standardImages?.map((e) => StandardImage.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** A set of methods to retrieve information about standard image . */
export const StandardImageServiceService = {
    /**
     * Returns the specific standard Image resource.
     * To get the list of standard  resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.baremetal.v1alpha.StandardImageService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetStandardImageRequest) =>
            Buffer.from(GetStandardImageRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetStandardImageRequest.decode(value),
        responseSerialize: (value: StandardImage) =>
            Buffer.from(StandardImage.encode(value).finish()),
        responseDeserialize: (value: Buffer) => StandardImage.decode(value),
    },
    /** Retrieves the list of Image resources in the specified folder. Pass the "baremetal-standard-images" folder to get general images. */
    list: {
        path: '/yandex.cloud.baremetal.v1alpha.StandardImageService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListStandardImagesRequest) =>
            Buffer.from(ListStandardImagesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListStandardImagesRequest.decode(value),
        responseSerialize: (value: ListStandardImagesResponse) =>
            Buffer.from(ListStandardImagesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListStandardImagesResponse.decode(value),
    },
} as const;

export interface StandardImageServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specific standard Image resource.
     * To get the list of standard  resources, make a [List] request.
     */
    get: handleUnaryCall<GetStandardImageRequest, StandardImage>;
    /** Retrieves the list of Image resources in the specified folder. Pass the "baremetal-standard-images" folder to get general images. */
    list: handleUnaryCall<ListStandardImagesRequest, ListStandardImagesResponse>;
}

export interface StandardImageServiceClient extends Client {
    /**
     * Returns the specific standard Image resource.
     * To get the list of standard  resources, make a [List] request.
     */
    get(
        request: GetStandardImageRequest,
        callback: (error: ServiceError | null, response: StandardImage) => void,
    ): ClientUnaryCall;
    get(
        request: GetStandardImageRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: StandardImage) => void,
    ): ClientUnaryCall;
    get(
        request: GetStandardImageRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: StandardImage) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of Image resources in the specified folder. Pass the "baremetal-standard-images" folder to get general images. */
    list(
        request: ListStandardImagesRequest,
        callback: (error: ServiceError | null, response: ListStandardImagesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListStandardImagesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListStandardImagesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListStandardImagesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListStandardImagesResponse) => void,
    ): ClientUnaryCall;
}

export const StandardImageServiceClient = makeGenericClientConstructor(
    StandardImageServiceService,
    'yandex.cloud.baremetal.v1alpha.StandardImageService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): StandardImageServiceClient;
    service: typeof StandardImageServiceService;
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
