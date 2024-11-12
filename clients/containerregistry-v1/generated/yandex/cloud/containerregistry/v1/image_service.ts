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
import { Image } from '../../../../yandex/cloud/containerregistry/v1/image';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.containerregistry.v1';

export interface ListImagesRequest {
    $type: 'yandex.cloud.containerregistry.v1.ListImagesRequest';
    /**
     * ID of the registry to list Docker images in.
     *
     * [registry_id] is ignored if a [ListImagesRequest.repository_name] is specified in the request.
     *
     * To get the registry ID use a [RegistryService.List] request.
     */
    registryId: string;
    /**
     * Name of the repository to list Docker images in.
     *
     * To get the repository name use a [RepositoryService.List] request.
     */
    repositoryName: string;
    /**
     * ID of the folder to list Docker images in.
     *
     * [folder_id] is ignored if a [ListImagesRequest.repository_name] or a [ListImagesRequest.registry_id] are specified in the request.
     *
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListImagesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListImagesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Image.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be a maximum of 256 characters long and match the regular expression `[a-z0-9]+(?:[._-][a-z0-9]+)*(/([a-z0-9]+(?:[._-][a-z0-9]+)*))`.
     */
    filter: string;
    orderBy: string;
}

export interface ListImagesResponse {
    $type: 'yandex.cloud.containerregistry.v1.ListImagesResponse';
    /** List of Image resources. */
    images: Image[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListImagesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListImagesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface GetImageRequest {
    $type: 'yandex.cloud.containerregistry.v1.GetImageRequest';
    /**
     * ID of the Docker image resource to return.
     *
     * To get the Docker image ID use a [ImageService.List] request.
     */
    imageId: string;
}

export interface DeleteImageRequest {
    $type: 'yandex.cloud.containerregistry.v1.DeleteImageRequest';
    /**
     * ID of the Docker image to delete.
     *
     * To get Docker image ID use a [ImageService.List] request.
     */
    imageId: string;
}

export interface DeleteImageMetadata {
    $type: 'yandex.cloud.containerregistry.v1.DeleteImageMetadata';
    /** ID of the Docker image that is being deleted. */
    imageId: string;
}

const baseListImagesRequest: object = {
    $type: 'yandex.cloud.containerregistry.v1.ListImagesRequest',
    registryId: '',
    repositoryName: '',
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
    orderBy: '',
};

export const ListImagesRequest = {
    $type: 'yandex.cloud.containerregistry.v1.ListImagesRequest' as const,

    encode(message: ListImagesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.repositoryName !== '') {
            writer.uint32(18).string(message.repositoryName);
        }
        if (message.folderId !== '') {
            writer.uint32(58).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(34).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(42).string(message.filter);
        }
        if (message.orderBy !== '') {
            writer.uint32(50).string(message.orderBy);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListImagesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListImagesRequest } as ListImagesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.repositoryName = reader.string();
                    break;
                case 7:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.pageToken = reader.string();
                    break;
                case 5:
                    message.filter = reader.string();
                    break;
                case 6:
                    message.orderBy = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListImagesRequest {
        const message = { ...baseListImagesRequest } as ListImagesRequest;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        message.repositoryName =
            object.repositoryName !== undefined && object.repositoryName !== null
                ? String(object.repositoryName)
                : '';
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
        message.orderBy =
            object.orderBy !== undefined && object.orderBy !== null ? String(object.orderBy) : '';
        return message;
    },

    toJSON(message: ListImagesRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.repositoryName !== undefined && (obj.repositoryName = message.repositoryName);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListImagesRequest>, I>>(object: I): ListImagesRequest {
        const message = { ...baseListImagesRequest } as ListImagesRequest;
        message.registryId = object.registryId ?? '';
        message.repositoryName = object.repositoryName ?? '';
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        message.orderBy = object.orderBy ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListImagesRequest.$type, ListImagesRequest);

const baseListImagesResponse: object = {
    $type: 'yandex.cloud.containerregistry.v1.ListImagesResponse',
    nextPageToken: '',
};

export const ListImagesResponse = {
    $type: 'yandex.cloud.containerregistry.v1.ListImagesResponse' as const,

    encode(message: ListImagesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.images) {
            Image.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListImagesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListImagesResponse } as ListImagesResponse;
        message.images = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.images.push(Image.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListImagesResponse {
        const message = { ...baseListImagesResponse } as ListImagesResponse;
        message.images = (object.images ?? []).map((e: any) => Image.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListImagesResponse): unknown {
        const obj: any = {};
        if (message.images) {
            obj.images = message.images.map((e) => (e ? Image.toJSON(e) : undefined));
        } else {
            obj.images = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListImagesResponse>, I>>(
        object: I,
    ): ListImagesResponse {
        const message = { ...baseListImagesResponse } as ListImagesResponse;
        message.images = object.images?.map((e) => Image.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

messageTypeRegistry.set(ListImagesResponse.$type, ListImagesResponse);

const baseGetImageRequest: object = {
    $type: 'yandex.cloud.containerregistry.v1.GetImageRequest',
    imageId: '',
};

export const GetImageRequest = {
    $type: 'yandex.cloud.containerregistry.v1.GetImageRequest' as const,

    encode(message: GetImageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetImageRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetImageRequest } as GetImageRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetImageRequest {
        const message = { ...baseGetImageRequest } as GetImageRequest;
        message.imageId =
            object.imageId !== undefined && object.imageId !== null ? String(object.imageId) : '';
        return message;
    },

    toJSON(message: GetImageRequest): unknown {
        const obj: any = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetImageRequest>, I>>(object: I): GetImageRequest {
        const message = { ...baseGetImageRequest } as GetImageRequest;
        message.imageId = object.imageId ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetImageRequest.$type, GetImageRequest);

const baseDeleteImageRequest: object = {
    $type: 'yandex.cloud.containerregistry.v1.DeleteImageRequest',
    imageId: '',
};

export const DeleteImageRequest = {
    $type: 'yandex.cloud.containerregistry.v1.DeleteImageRequest' as const,

    encode(message: DeleteImageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteImageRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteImageRequest } as DeleteImageRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteImageRequest {
        const message = { ...baseDeleteImageRequest } as DeleteImageRequest;
        message.imageId =
            object.imageId !== undefined && object.imageId !== null ? String(object.imageId) : '';
        return message;
    },

    toJSON(message: DeleteImageRequest): unknown {
        const obj: any = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteImageRequest>, I>>(
        object: I,
    ): DeleteImageRequest {
        const message = { ...baseDeleteImageRequest } as DeleteImageRequest;
        message.imageId = object.imageId ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeleteImageRequest.$type, DeleteImageRequest);

const baseDeleteImageMetadata: object = {
    $type: 'yandex.cloud.containerregistry.v1.DeleteImageMetadata',
    imageId: '',
};

export const DeleteImageMetadata = {
    $type: 'yandex.cloud.containerregistry.v1.DeleteImageMetadata' as const,

    encode(message: DeleteImageMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteImageMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteImageMetadata } as DeleteImageMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteImageMetadata {
        const message = { ...baseDeleteImageMetadata } as DeleteImageMetadata;
        message.imageId =
            object.imageId !== undefined && object.imageId !== null ? String(object.imageId) : '';
        return message;
    },

    toJSON(message: DeleteImageMetadata): unknown {
        const obj: any = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteImageMetadata>, I>>(
        object: I,
    ): DeleteImageMetadata {
        const message = { ...baseDeleteImageMetadata } as DeleteImageMetadata;
        message.imageId = object.imageId ?? '';
        return message;
    },
};

messageTypeRegistry.set(DeleteImageMetadata.$type, DeleteImageMetadata);

/** A set of methods for managing Image resources. */
export const ImageServiceService = {
    /** Retrieves the list of Image resources in the specified registry or repository. */
    list: {
        path: '/yandex.cloud.containerregistry.v1.ImageService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListImagesRequest) =>
            Buffer.from(ListImagesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListImagesRequest.decode(value),
        responseSerialize: (value: ListImagesResponse) =>
            Buffer.from(ListImagesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListImagesResponse.decode(value),
    },
    /**
     * Returns the specified Image resource.
     *
     * To get the list of available Image resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.containerregistry.v1.ImageService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetImageRequest) =>
            Buffer.from(GetImageRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetImageRequest.decode(value),
        responseSerialize: (value: Image) => Buffer.from(Image.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Image.decode(value),
    },
    /** Deletes the specified Docker image. */
    delete: {
        path: '/yandex.cloud.containerregistry.v1.ImageService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteImageRequest) =>
            Buffer.from(DeleteImageRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteImageRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface ImageServiceServer extends UntypedServiceImplementation {
    /** Retrieves the list of Image resources in the specified registry or repository. */
    list: handleUnaryCall<ListImagesRequest, ListImagesResponse>;
    /**
     * Returns the specified Image resource.
     *
     * To get the list of available Image resources, make a [List] request.
     */
    get: handleUnaryCall<GetImageRequest, Image>;
    /** Deletes the specified Docker image. */
    delete: handleUnaryCall<DeleteImageRequest, Operation>;
}

export interface ImageServiceClient extends Client {
    /** Retrieves the list of Image resources in the specified registry or repository. */
    list(
        request: ListImagesRequest,
        callback: (error: ServiceError | null, response: ListImagesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListImagesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListImagesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListImagesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListImagesResponse) => void,
    ): ClientUnaryCall;
    /**
     * Returns the specified Image resource.
     *
     * To get the list of available Image resources, make a [List] request.
     */
    get(
        request: GetImageRequest,
        callback: (error: ServiceError | null, response: Image) => void,
    ): ClientUnaryCall;
    get(
        request: GetImageRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Image) => void,
    ): ClientUnaryCall;
    get(
        request: GetImageRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Image) => void,
    ): ClientUnaryCall;
    /** Deletes the specified Docker image. */
    delete(
        request: DeleteImageRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteImageRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteImageRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const ImageServiceClient = makeGenericClientConstructor(
    ImageServiceService,
    'yandex.cloud.containerregistry.v1.ImageService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ImageServiceClient;
    service: typeof ImageServiceService;
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
