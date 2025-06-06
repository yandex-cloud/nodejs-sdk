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
import { CatalogSpec, CatalogUpdateSpec, Catalog } from '../../../../yandex/cloud/trino/v1/catalog';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.trino.v1';

export interface GetCatalogRequest {
    /** ID of the Trino Cluster resource which contains the requested catalog. */
    clusterId: string;
    /** ID of the Trino Catalog resource. */
    catalogId: string;
}

export interface ListCatalogsRequest {
    /** ID of the cluster to list Trino Catalogs in. */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListCatalogsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the [ListCatalogsResponse.next_page_token]
     * returned by the previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can only use filtering with the [Catalog.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 1-63 characters long and match the regular expression `[a-zA-Z0-9_-]+`.
     */
    filter: string;
}

export interface ListCatalogsResponse {
    /** List of Trino Catalog resources. */
    catalogs: Catalog[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListCatalogsRequest.page_size], use the [next_page_token] as the value
     * for the [ListCatalogsRequest.page_token] parameter in the next list request. Each subsequent
     * list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateCatalogRequest {
    /** ID of the Trino Cluster where the catalog should be created. */
    clusterId: string;
    /** Specification of the catalog to be created. */
    catalog?: CatalogSpec;
}

export interface CreateCatalogMetadata {
    /** ID of the Trino cluster where a catalog is being created. */
    clusterId: string;
    /** ID of the catalog that is being created. */
    catalogId: string;
}

export interface UpdateCatalogRequest {
    /** ID of the Trino Cluster that contains the catalog to update. */
    clusterId: string;
    /** ID of the catalog to update. */
    catalogId: string;
    /** Field mask that specifies which fields of the catalog should be updated. */
    updateMask?: FieldMask;
    /** New values for the specified fields. */
    catalog?: CatalogUpdateSpec;
}

export interface UpdateCatalogMetadata {
    /** ID of the Trino cluster where a catalog is being updated. */
    clusterId: string;
    /** ID of the catalog that is being updated. */
    catalogId: string;
}

export interface DeleteCatalogRequest {
    /** ID of the Trino Cluster resource which contains the requested catalog. */
    clusterId: string;
    /** ID of the Trino Catalog resource. */
    catalogId: string;
}

export interface DeleteCatalogMetadata {
    /** ID of the Trino cluster where a catalog is being deleted. */
    clusterId: string;
    /** ID of the catalog that is being deleted. */
    catalogId: string;
}

const baseGetCatalogRequest: object = { clusterId: '', catalogId: '' };

export const GetCatalogRequest = {
    encode(message: GetCatalogRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.catalogId !== '') {
            writer.uint32(18).string(message.catalogId);
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
                    message.clusterId = reader.string();
                    break;
                case 2:
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
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.catalogId =
            object.catalogId !== undefined && object.catalogId !== null
                ? String(object.catalogId)
                : '';
        return message;
    },

    toJSON(message: GetCatalogRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.catalogId !== undefined && (obj.catalogId = message.catalogId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetCatalogRequest>, I>>(object: I): GetCatalogRequest {
        const message = { ...baseGetCatalogRequest } as GetCatalogRequest;
        message.clusterId = object.clusterId ?? '';
        message.catalogId = object.catalogId ?? '';
        return message;
    },
};

const baseListCatalogsRequest: object = { clusterId: '', pageSize: 0, pageToken: '', filter: '' };

export const ListCatalogsRequest = {
    encode(message: ListCatalogsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListCatalogsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListCatalogsRequest } as ListCatalogsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
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

    fromJSON(object: any): ListCatalogsRequest {
        const message = { ...baseListCatalogsRequest } as ListCatalogsRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
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

    toJSON(message: ListCatalogsRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListCatalogsRequest>, I>>(
        object: I,
    ): ListCatalogsRequest {
        const message = { ...baseListCatalogsRequest } as ListCatalogsRequest;
        message.clusterId = object.clusterId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListCatalogsResponse: object = { nextPageToken: '' };

export const ListCatalogsResponse = {
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

const baseCreateCatalogRequest: object = { clusterId: '' };

export const CreateCatalogRequest = {
    encode(message: CreateCatalogRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.catalog !== undefined) {
            CatalogSpec.encode(message.catalog, writer.uint32(18).fork()).ldelim();
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
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.catalog = CatalogSpec.decode(reader, reader.uint32());
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
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.catalog =
            object.catalog !== undefined && object.catalog !== null
                ? CatalogSpec.fromJSON(object.catalog)
                : undefined;
        return message;
    },

    toJSON(message: CreateCatalogRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.catalog !== undefined &&
            (obj.catalog = message.catalog ? CatalogSpec.toJSON(message.catalog) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateCatalogRequest>, I>>(
        object: I,
    ): CreateCatalogRequest {
        const message = { ...baseCreateCatalogRequest } as CreateCatalogRequest;
        message.clusterId = object.clusterId ?? '';
        message.catalog =
            object.catalog !== undefined && object.catalog !== null
                ? CatalogSpec.fromPartial(object.catalog)
                : undefined;
        return message;
    },
};

const baseCreateCatalogMetadata: object = { clusterId: '', catalogId: '' };

export const CreateCatalogMetadata = {
    encode(message: CreateCatalogMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.catalogId !== '') {
            writer.uint32(18).string(message.catalogId);
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
                    message.clusterId = reader.string();
                    break;
                case 2:
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
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.catalogId =
            object.catalogId !== undefined && object.catalogId !== null
                ? String(object.catalogId)
                : '';
        return message;
    },

    toJSON(message: CreateCatalogMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.catalogId !== undefined && (obj.catalogId = message.catalogId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateCatalogMetadata>, I>>(
        object: I,
    ): CreateCatalogMetadata {
        const message = { ...baseCreateCatalogMetadata } as CreateCatalogMetadata;
        message.clusterId = object.clusterId ?? '';
        message.catalogId = object.catalogId ?? '';
        return message;
    },
};

const baseUpdateCatalogRequest: object = { clusterId: '', catalogId: '' };

export const UpdateCatalogRequest = {
    encode(message: UpdateCatalogRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.catalogId !== '') {
            writer.uint32(18).string(message.catalogId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
        }
        if (message.catalog !== undefined) {
            CatalogUpdateSpec.encode(message.catalog, writer.uint32(34).fork()).ldelim();
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
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.catalogId = reader.string();
                    break;
                case 3:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.catalog = CatalogUpdateSpec.decode(reader, reader.uint32());
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
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.catalogId =
            object.catalogId !== undefined && object.catalogId !== null
                ? String(object.catalogId)
                : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.catalog =
            object.catalog !== undefined && object.catalog !== null
                ? CatalogUpdateSpec.fromJSON(object.catalog)
                : undefined;
        return message;
    },

    toJSON(message: UpdateCatalogRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.catalogId !== undefined && (obj.catalogId = message.catalogId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.catalog !== undefined &&
            (obj.catalog = message.catalog ? CatalogUpdateSpec.toJSON(message.catalog) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateCatalogRequest>, I>>(
        object: I,
    ): UpdateCatalogRequest {
        const message = { ...baseUpdateCatalogRequest } as UpdateCatalogRequest;
        message.clusterId = object.clusterId ?? '';
        message.catalogId = object.catalogId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.catalog =
            object.catalog !== undefined && object.catalog !== null
                ? CatalogUpdateSpec.fromPartial(object.catalog)
                : undefined;
        return message;
    },
};

const baseUpdateCatalogMetadata: object = { clusterId: '', catalogId: '' };

export const UpdateCatalogMetadata = {
    encode(message: UpdateCatalogMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.catalogId !== '') {
            writer.uint32(18).string(message.catalogId);
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
                    message.clusterId = reader.string();
                    break;
                case 2:
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
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.catalogId =
            object.catalogId !== undefined && object.catalogId !== null
                ? String(object.catalogId)
                : '';
        return message;
    },

    toJSON(message: UpdateCatalogMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.catalogId !== undefined && (obj.catalogId = message.catalogId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateCatalogMetadata>, I>>(
        object: I,
    ): UpdateCatalogMetadata {
        const message = { ...baseUpdateCatalogMetadata } as UpdateCatalogMetadata;
        message.clusterId = object.clusterId ?? '';
        message.catalogId = object.catalogId ?? '';
        return message;
    },
};

const baseDeleteCatalogRequest: object = { clusterId: '', catalogId: '' };

export const DeleteCatalogRequest = {
    encode(message: DeleteCatalogRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.catalogId !== '') {
            writer.uint32(18).string(message.catalogId);
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
                    message.clusterId = reader.string();
                    break;
                case 2:
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
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.catalogId =
            object.catalogId !== undefined && object.catalogId !== null
                ? String(object.catalogId)
                : '';
        return message;
    },

    toJSON(message: DeleteCatalogRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.catalogId !== undefined && (obj.catalogId = message.catalogId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteCatalogRequest>, I>>(
        object: I,
    ): DeleteCatalogRequest {
        const message = { ...baseDeleteCatalogRequest } as DeleteCatalogRequest;
        message.clusterId = object.clusterId ?? '';
        message.catalogId = object.catalogId ?? '';
        return message;
    },
};

const baseDeleteCatalogMetadata: object = { clusterId: '', catalogId: '' };

export const DeleteCatalogMetadata = {
    encode(message: DeleteCatalogMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.catalogId !== '') {
            writer.uint32(18).string(message.catalogId);
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
                    message.clusterId = reader.string();
                    break;
                case 2:
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
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.catalogId =
            object.catalogId !== undefined && object.catalogId !== null
                ? String(object.catalogId)
                : '';
        return message;
    },

    toJSON(message: DeleteCatalogMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.catalogId !== undefined && (obj.catalogId = message.catalogId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteCatalogMetadata>, I>>(
        object: I,
    ): DeleteCatalogMetadata {
        const message = { ...baseDeleteCatalogMetadata } as DeleteCatalogMetadata;
        message.clusterId = object.clusterId ?? '';
        message.catalogId = object.catalogId ?? '';
        return message;
    },
};

/** A set of methods for managing Trino Cluster Catalog resources. */
export const CatalogServiceService = {
    /** Returns the specified Trino Catalog resource. */
    get: {
        path: '/yandex.cloud.trino.v1.CatalogService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetCatalogRequest) =>
            Buffer.from(GetCatalogRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetCatalogRequest.decode(value),
        responseSerialize: (value: Catalog) => Buffer.from(Catalog.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Catalog.decode(value),
    },
    /** Retrieves a list of Trino Catalog resources. */
    list: {
        path: '/yandex.cloud.trino.v1.CatalogService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListCatalogsRequest) =>
            Buffer.from(ListCatalogsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListCatalogsRequest.decode(value),
        responseSerialize: (value: ListCatalogsResponse) =>
            Buffer.from(ListCatalogsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListCatalogsResponse.decode(value),
    },
    /** Creates a new Trino Catalog. */
    create: {
        path: '/yandex.cloud.trino.v1.CatalogService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateCatalogRequest) =>
            Buffer.from(CreateCatalogRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateCatalogRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified Trino Catalog. */
    update: {
        path: '/yandex.cloud.trino.v1.CatalogService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateCatalogRequest) =>
            Buffer.from(UpdateCatalogRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateCatalogRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified Trino Catalog. */
    delete: {
        path: '/yandex.cloud.trino.v1.CatalogService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteCatalogRequest) =>
            Buffer.from(DeleteCatalogRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteCatalogRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface CatalogServiceServer extends UntypedServiceImplementation {
    /** Returns the specified Trino Catalog resource. */
    get: handleUnaryCall<GetCatalogRequest, Catalog>;
    /** Retrieves a list of Trino Catalog resources. */
    list: handleUnaryCall<ListCatalogsRequest, ListCatalogsResponse>;
    /** Creates a new Trino Catalog. */
    create: handleUnaryCall<CreateCatalogRequest, Operation>;
    /** Updates the specified Trino Catalog. */
    update: handleUnaryCall<UpdateCatalogRequest, Operation>;
    /** Deletes the specified Trino Catalog. */
    delete: handleUnaryCall<DeleteCatalogRequest, Operation>;
}

export interface CatalogServiceClient extends Client {
    /** Returns the specified Trino Catalog resource. */
    get(
        request: GetCatalogRequest,
        callback: (error: ServiceError | null, response: Catalog) => void,
    ): ClientUnaryCall;
    get(
        request: GetCatalogRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Catalog) => void,
    ): ClientUnaryCall;
    get(
        request: GetCatalogRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Catalog) => void,
    ): ClientUnaryCall;
    /** Retrieves a list of Trino Catalog resources. */
    list(
        request: ListCatalogsRequest,
        callback: (error: ServiceError | null, response: ListCatalogsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListCatalogsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListCatalogsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListCatalogsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListCatalogsResponse) => void,
    ): ClientUnaryCall;
    /** Creates a new Trino Catalog. */
    create(
        request: CreateCatalogRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateCatalogRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateCatalogRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified Trino Catalog. */
    update(
        request: UpdateCatalogRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateCatalogRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateCatalogRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified Trino Catalog. */
    delete(
        request: DeleteCatalogRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteCatalogRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteCatalogRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const CatalogServiceClient = makeGenericClientConstructor(
    CatalogServiceService,
    'yandex.cloud.trino.v1.CatalogService',
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
