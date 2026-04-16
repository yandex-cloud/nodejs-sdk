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
import { Catalog } from './catalog';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../operation/operation';

export const protobufPackage = 'yandex.cloud.datacatalog.v1';

/** Request message for getting a catalog. */
export interface GetCatalogRequest {
    /** ID of the catalog to return. */
    catalogId: string;
}

/** Request message for getting catalogs by folder id. */
export interface ListCatalogsRequest {
    /** ID of the folder to list catalogs in. */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a `next_page_token`
     * that can be used to get the next page of results in subsequent list requests.
     * if omitted, default value will be used
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * `next_page_token` returned by a previous list request.
     */
    pageToken: string;
    /**
     * Filter by name. Use this in case if it's necessary to find catalogs by name
     * if empty - filter will be omited
     */
    namePatternOrId: string;
}

/** Response message that contains result of listing catalogs. */
export interface ListCatalogsResponse {
    /** List of catalogs. */
    catalogs: Catalog[];
    /**
     * This token allows you to get the next page of results for list requests.
     * If the number of results is larger than the specified `page_size`, use the
     * `next_page_token` as the value for the `page_token` parameter in the next list request.
     * Each subsequent list request will have its own `next_page_token` to continue paging
     */
    nextPageToken: string;
}

/** Request message for creating a catalog. */
export interface CreateCatalogRequest {
    /** Catalog to create. */
    catalog?: Catalog;
}

/** Request message for deleting a catalog. */
export interface DeleteCatalogRequest {
    /** ID of the catalog to delete. */
    catalogId: string;
}

/** Request message for updating a catalog. */
export interface UpdateCatalogRequest {
    /** Catalog to update. */
    catalog?: Catalog;
    /** Field mask that specifies which fields to update. */
    updateMask?: FieldMask;
}

/** Metadata for the catalog create operation. */
export interface CreateCatalogMetadata {
    /** ID of the catalog that is being created. */
    catalogId: string;
}

/** Metadata for the catalog update operation. */
export interface UpdateCatalogMetadata {
    /** ID of the catalog that is being updated. */
    catalogId: string;
}

/** Metadata for the catalog delete operation. */
export interface DeleteCatalogMetadata {
    /** ID of the catalog that is being deleted. */
    catalogId: string;
}

const baseGetCatalogRequest: object = { catalogId: '' };

export const GetCatalogRequest: {
    encode(message: GetCatalogRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCatalogRequest;
    fromJSON(object: any): GetCatalogRequest;
    toJSON(message: GetCatalogRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetCatalogRequest>, I>>(object: I): GetCatalogRequest;
} = {
    encode(message: GetCatalogRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.catalogId !== '') {
            writer.uint32(10).string(message.catalogId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetCatalogRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetCatalogRequest } as GetCatalogRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.catalogId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetCatalogRequest {
        const message = { ...baseGetCatalogRequest } as GetCatalogRequest;
        message.catalogId =
            object.catalogId !== undefined && object.catalogId !== null
                ? String(object.catalogId)
                : '';
        return message;
    },

    toJSON(message: GetCatalogRequest): unknown {
        const obj: any = {};
        message.catalogId !== undefined && (obj.catalogId = message.catalogId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetCatalogRequest>, I>>(object: I): GetCatalogRequest {
        const message = { ...baseGetCatalogRequest } as GetCatalogRequest;
        message.catalogId = object.catalogId ?? '';
        return message;
    },
};

const baseListCatalogsRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    namePatternOrId: '',
};

export const ListCatalogsRequest: {
    encode(message: ListCatalogsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListCatalogsRequest;
    fromJSON(object: any): ListCatalogsRequest;
    toJSON(message: ListCatalogsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListCatalogsRequest>, I>>(object: I): ListCatalogsRequest;
} = {
    encode(message: ListCatalogsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.namePatternOrId !== '') {
            writer.uint32(34).string(message.namePatternOrId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListCatalogsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListCatalogsRequest } as ListCatalogsRequest;
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
                    message.namePatternOrId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListCatalogsRequest {
        const message = { ...baseListCatalogsRequest } as ListCatalogsRequest;
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
        message.namePatternOrId =
            object.namePatternOrId !== undefined && object.namePatternOrId !== null
                ? String(object.namePatternOrId)
                : '';
        return message;
    },

    toJSON(message: ListCatalogsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.namePatternOrId !== undefined && (obj.namePatternOrId = message.namePatternOrId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListCatalogsRequest>, I>>(
        object: I,
    ): ListCatalogsRequest {
        const message = { ...baseListCatalogsRequest } as ListCatalogsRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.namePatternOrId = object.namePatternOrId ?? '';
        return message;
    },
};

const baseListCatalogsResponse: object = { nextPageToken: '' };

export const ListCatalogsResponse: {
    encode(message: ListCatalogsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListCatalogsResponse;
    fromJSON(object: any): ListCatalogsResponse;
    toJSON(message: ListCatalogsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListCatalogsResponse>, I>>(object: I): ListCatalogsResponse;
} = {
    encode(message: ListCatalogsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.catalogs) {
            Catalog.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListCatalogsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListCatalogsResponse } as ListCatalogsResponse;
        message.catalogs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.catalogs.push(Catalog.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListCatalogsResponse {
        const message = { ...baseListCatalogsResponse } as ListCatalogsResponse;
        message.catalogs = (object.catalogs ?? []).map((e: any) => Catalog.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListCatalogsResponse): unknown {
        const obj: any = {};
        if (message.catalogs) {
            obj.catalogs = message.catalogs.map((e) => (e ? Catalog.toJSON(e) : undefined));
        } else {
            obj.catalogs = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListCatalogsResponse>, I>>(
        object: I,
    ): ListCatalogsResponse {
        const message = { ...baseListCatalogsResponse } as ListCatalogsResponse;
        message.catalogs = object.catalogs?.map((e) => Catalog.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateCatalogRequest: object = {};

export const CreateCatalogRequest: {
    encode(message: CreateCatalogRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateCatalogRequest;
    fromJSON(object: any): CreateCatalogRequest;
    toJSON(message: CreateCatalogRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateCatalogRequest>, I>>(object: I): CreateCatalogRequest;
} = {
    encode(message: CreateCatalogRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.catalog !== undefined) {
            Catalog.encode(message.catalog, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateCatalogRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateCatalogRequest } as CreateCatalogRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.catalog = Catalog.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateCatalogRequest {
        const message = { ...baseCreateCatalogRequest } as CreateCatalogRequest;
        message.catalog =
            object.catalog !== undefined && object.catalog !== null
                ? Catalog.fromJSON(object.catalog)
                : undefined;
        return message;
    },

    toJSON(message: CreateCatalogRequest): unknown {
        const obj: any = {};
        message.catalog !== undefined &&
            (obj.catalog = message.catalog ? Catalog.toJSON(message.catalog) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateCatalogRequest>, I>>(
        object: I,
    ): CreateCatalogRequest {
        const message = { ...baseCreateCatalogRequest } as CreateCatalogRequest;
        message.catalog =
            object.catalog !== undefined && object.catalog !== null
                ? Catalog.fromPartial(object.catalog)
                : undefined;
        return message;
    },
};

const baseDeleteCatalogRequest: object = { catalogId: '' };

export const DeleteCatalogRequest: {
    encode(message: DeleteCatalogRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteCatalogRequest;
    fromJSON(object: any): DeleteCatalogRequest;
    toJSON(message: DeleteCatalogRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteCatalogRequest>, I>>(object: I): DeleteCatalogRequest;
} = {
    encode(message: DeleteCatalogRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.catalogId !== '') {
            writer.uint32(10).string(message.catalogId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteCatalogRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteCatalogRequest } as DeleteCatalogRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.catalogId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteCatalogRequest {
        const message = { ...baseDeleteCatalogRequest } as DeleteCatalogRequest;
        message.catalogId =
            object.catalogId !== undefined && object.catalogId !== null
                ? String(object.catalogId)
                : '';
        return message;
    },

    toJSON(message: DeleteCatalogRequest): unknown {
        const obj: any = {};
        message.catalogId !== undefined && (obj.catalogId = message.catalogId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteCatalogRequest>, I>>(
        object: I,
    ): DeleteCatalogRequest {
        const message = { ...baseDeleteCatalogRequest } as DeleteCatalogRequest;
        message.catalogId = object.catalogId ?? '';
        return message;
    },
};

const baseUpdateCatalogRequest: object = {};

export const UpdateCatalogRequest: {
    encode(message: UpdateCatalogRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCatalogRequest;
    fromJSON(object: any): UpdateCatalogRequest;
    toJSON(message: UpdateCatalogRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateCatalogRequest>, I>>(object: I): UpdateCatalogRequest;
} = {
    encode(message: UpdateCatalogRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.catalog !== undefined) {
            Catalog.encode(message.catalog, writer.uint32(10).fork()).ldelim();
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCatalogRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateCatalogRequest } as UpdateCatalogRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.catalog = Catalog.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateCatalogRequest {
        const message = { ...baseUpdateCatalogRequest } as UpdateCatalogRequest;
        message.catalog =
            object.catalog !== undefined && object.catalog !== null
                ? Catalog.fromJSON(object.catalog)
                : undefined;
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        return message;
    },

    toJSON(message: UpdateCatalogRequest): unknown {
        const obj: any = {};
        message.catalog !== undefined &&
            (obj.catalog = message.catalog ? Catalog.toJSON(message.catalog) : undefined);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateCatalogRequest>, I>>(
        object: I,
    ): UpdateCatalogRequest {
        const message = { ...baseUpdateCatalogRequest } as UpdateCatalogRequest;
        message.catalog =
            object.catalog !== undefined && object.catalog !== null
                ? Catalog.fromPartial(object.catalog)
                : undefined;
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        return message;
    },
};

const baseCreateCatalogMetadata: object = { catalogId: '' };

export const CreateCatalogMetadata: {
    encode(message: CreateCatalogMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateCatalogMetadata;
    fromJSON(object: any): CreateCatalogMetadata;
    toJSON(message: CreateCatalogMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateCatalogMetadata>, I>>(object: I): CreateCatalogMetadata;
} = {
    encode(message: CreateCatalogMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.catalogId !== '') {
            writer.uint32(10).string(message.catalogId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateCatalogMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateCatalogMetadata } as CreateCatalogMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.catalogId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateCatalogMetadata {
        const message = { ...baseCreateCatalogMetadata } as CreateCatalogMetadata;
        message.catalogId =
            object.catalogId !== undefined && object.catalogId !== null
                ? String(object.catalogId)
                : '';
        return message;
    },

    toJSON(message: CreateCatalogMetadata): unknown {
        const obj: any = {};
        message.catalogId !== undefined && (obj.catalogId = message.catalogId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateCatalogMetadata>, I>>(
        object: I,
    ): CreateCatalogMetadata {
        const message = { ...baseCreateCatalogMetadata } as CreateCatalogMetadata;
        message.catalogId = object.catalogId ?? '';
        return message;
    },
};

const baseUpdateCatalogMetadata: object = { catalogId: '' };

export const UpdateCatalogMetadata: {
    encode(message: UpdateCatalogMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCatalogMetadata;
    fromJSON(object: any): UpdateCatalogMetadata;
    toJSON(message: UpdateCatalogMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateCatalogMetadata>, I>>(object: I): UpdateCatalogMetadata;
} = {
    encode(message: UpdateCatalogMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.catalogId !== '') {
            writer.uint32(10).string(message.catalogId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCatalogMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateCatalogMetadata } as UpdateCatalogMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.catalogId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateCatalogMetadata {
        const message = { ...baseUpdateCatalogMetadata } as UpdateCatalogMetadata;
        message.catalogId =
            object.catalogId !== undefined && object.catalogId !== null
                ? String(object.catalogId)
                : '';
        return message;
    },

    toJSON(message: UpdateCatalogMetadata): unknown {
        const obj: any = {};
        message.catalogId !== undefined && (obj.catalogId = message.catalogId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateCatalogMetadata>, I>>(
        object: I,
    ): UpdateCatalogMetadata {
        const message = { ...baseUpdateCatalogMetadata } as UpdateCatalogMetadata;
        message.catalogId = object.catalogId ?? '';
        return message;
    },
};

const baseDeleteCatalogMetadata: object = { catalogId: '' };

export const DeleteCatalogMetadata: {
    encode(message: DeleteCatalogMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteCatalogMetadata;
    fromJSON(object: any): DeleteCatalogMetadata;
    toJSON(message: DeleteCatalogMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteCatalogMetadata>, I>>(object: I): DeleteCatalogMetadata;
} = {
    encode(message: DeleteCatalogMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.catalogId !== '') {
            writer.uint32(10).string(message.catalogId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteCatalogMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteCatalogMetadata } as DeleteCatalogMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.catalogId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteCatalogMetadata {
        const message = { ...baseDeleteCatalogMetadata } as DeleteCatalogMetadata;
        message.catalogId =
            object.catalogId !== undefined && object.catalogId !== null
                ? String(object.catalogId)
                : '';
        return message;
    },

    toJSON(message: DeleteCatalogMetadata): unknown {
        const obj: any = {};
        message.catalogId !== undefined && (obj.catalogId = message.catalogId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteCatalogMetadata>, I>>(
        object: I,
    ): DeleteCatalogMetadata {
        const message = { ...baseDeleteCatalogMetadata } as DeleteCatalogMetadata;
        message.catalogId = object.catalogId ?? '';
        return message;
    },
};

export const CatalogServiceService = {
    /** Returns the specified catalog. */
    getCatalog: {
        path: '/yandex.cloud.datacatalog.v1.CatalogService/GetCatalog',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetCatalogRequest) =>
            Buffer.from(GetCatalogRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetCatalogRequest.decode(value),
        responseSerialize: (value: Catalog) => Buffer.from(Catalog.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Catalog.decode(value),
    },
    /** Retrieves the list of catalogs in the specified folder. */
    listCatalogs: {
        path: '/yandex.cloud.datacatalog.v1.CatalogService/ListCatalogs',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListCatalogsRequest) =>
            Buffer.from(ListCatalogsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListCatalogsRequest.decode(value),
        responseSerialize: (value: ListCatalogsResponse) =>
            Buffer.from(ListCatalogsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListCatalogsResponse.decode(value),
    },
    /** Creates a catalog. */
    createCatalog: {
        path: '/yandex.cloud.datacatalog.v1.CatalogService/CreateCatalog',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateCatalogRequest) =>
            Buffer.from(CreateCatalogRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateCatalogRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes a catalog. */
    deleteCatalog: {
        path: '/yandex.cloud.datacatalog.v1.CatalogService/DeleteCatalog',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteCatalogRequest) =>
            Buffer.from(DeleteCatalogRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteCatalogRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified catalog. */
    updateCatalog: {
        path: '/yandex.cloud.datacatalog.v1.CatalogService/UpdateCatalog',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateCatalogRequest) =>
            Buffer.from(UpdateCatalogRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateCatalogRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface CatalogServiceServer extends UntypedServiceImplementation {
    /** Returns the specified catalog. */
    getCatalog: handleUnaryCall<GetCatalogRequest, Catalog>;
    /** Retrieves the list of catalogs in the specified folder. */
    listCatalogs: handleUnaryCall<ListCatalogsRequest, ListCatalogsResponse>;
    /** Creates a catalog. */
    createCatalog: handleUnaryCall<CreateCatalogRequest, Operation>;
    /** Deletes a catalog. */
    deleteCatalog: handleUnaryCall<DeleteCatalogRequest, Operation>;
    /** Updates the specified catalog. */
    updateCatalog: handleUnaryCall<UpdateCatalogRequest, Operation>;
}

export interface CatalogServiceClient extends Client {
    /** Returns the specified catalog. */
    getCatalog(
        request: GetCatalogRequest,
        callback: (error: ServiceError | null, response: Catalog) => void,
    ): ClientUnaryCall;
    getCatalog(
        request: GetCatalogRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Catalog) => void,
    ): ClientUnaryCall;
    getCatalog(
        request: GetCatalogRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Catalog) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of catalogs in the specified folder. */
    listCatalogs(
        request: ListCatalogsRequest,
        callback: (error: ServiceError | null, response: ListCatalogsResponse) => void,
    ): ClientUnaryCall;
    listCatalogs(
        request: ListCatalogsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListCatalogsResponse) => void,
    ): ClientUnaryCall;
    listCatalogs(
        request: ListCatalogsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListCatalogsResponse) => void,
    ): ClientUnaryCall;
    /** Creates a catalog. */
    createCatalog(
        request: CreateCatalogRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    createCatalog(
        request: CreateCatalogRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    createCatalog(
        request: CreateCatalogRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes a catalog. */
    deleteCatalog(
        request: DeleteCatalogRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deleteCatalog(
        request: DeleteCatalogRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deleteCatalog(
        request: DeleteCatalogRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified catalog. */
    updateCatalog(
        request: UpdateCatalogRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateCatalog(
        request: UpdateCatalogRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateCatalog(
        request: UpdateCatalogRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const CatalogServiceClient = makeGenericClientConstructor(
    CatalogServiceService,
    'yandex.cloud.datacatalog.v1.CatalogService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): CatalogServiceClient;
    service: typeof CatalogServiceService;
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
