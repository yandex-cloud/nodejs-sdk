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
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { PublicPrefixPool } from './public_prefix_pool';
import { Operation } from '../../operation/operation';

export const protobufPackage = 'yandex.cloud.baremetal.v1alpha';

export interface GetPublicPrefixPoolRequest {
    /**
     * ID of the Public prefix pool resource to return.
     * To get the pool ID, use a [PublicPrefixPoolService.List] request.
     */
    publicPrefixPoolId: string;
}

export interface ListPublicPrefixPoolRequest {
    /**
     * ID of the folder to list public prefix pools in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is greater than `page_size`,
     * the service returns a [ListPublicPrefixPoolResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value is 20.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListPublicPrefixPoolResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * By which column the listing should be ordered and in which direction,
     * format is "createdAt desc". "id asc" if omitted.
     * Supported fields: ["id", "createdAt", "updatedAt"].
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
}

export interface ListPublicPrefixPoolResponse {
    /** List of public prefix pool resources. */
    publicPrefixPools: PublicPrefixPool[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * [ListPublicPrefixPoolRequest.page_size], use `next_page_token` as the value
     * for the [ListPublicPrefixPoolRequest.page_token] parameter in the next list request.
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface UpdatePublicPrefixPoolRequest {
    /**
     * ID of the public prefix pool to update.
     * To get the public prefix pool ID, use a [PublicPrefixPoolService.List] request.
     */
    publicPrefixPoolId: string;
    /** Field mask that specifies which fields of the PublicPrefixPool resource are going to be updated. */
    updateMask?: FieldMask;
    /** New name of the public prefix pool. */
    name: string;
    /** New description of the public prefix pool. */
    description: string;
    /** New labels for the public prefix pool as `key:value` pairs. */
    labels: { [key: string]: string };
}

export interface UpdatePublicPrefixPoolRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreatePublicPrefixPoolMetadata {
    /** ID of the Public prefix pool resource that is being created. */
    publicPrefixPoolId: string;
}

export interface UpdatePublicPrefixPoolMetadata {
    /** ID of the Public prefix pool resource that is being updated. */
    publicPrefixPoolId: string;
}

export interface DeletePublicPrefixPoolMetadata {
    /** ID of the Public prefix pool resource that is being deleted. */
    publicPrefixPoolId: string;
}

export interface ListPublicPrefixPoolOperationsRequest {
    /** ID of the PublicPrefixPool resource to list operations for. */
    publicPrefixPoolId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is greater than `page_size`,
     * the service returns a [ListPublicPrefixPoolOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value is 20.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListPublicPrefixPoolOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListPublicPrefixPoolOperationsResponse {
    /** List of operations for the specified PublicPrefixPool resource. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * [ListPublicPrefixPoolOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListPublicPrefixPoolOperationsRequest.page_token] parameter in the next list request.
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetPublicPrefixPoolRequest: object = { publicPrefixPoolId: '' };

export const GetPublicPrefixPoolRequest: {
    encode(message: GetPublicPrefixPoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPublicPrefixPoolRequest;
    fromJSON(object: any): GetPublicPrefixPoolRequest;
    toJSON(message: GetPublicPrefixPoolRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetPublicPrefixPoolRequest>, I>>(object: I): GetPublicPrefixPoolRequest;
} = {
    encode(
        message: GetPublicPrefixPoolRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.publicPrefixPoolId !== '') {
            writer.uint32(10).string(message.publicPrefixPoolId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetPublicPrefixPoolRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetPublicPrefixPoolRequest } as GetPublicPrefixPoolRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicPrefixPoolId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetPublicPrefixPoolRequest {
        const message = { ...baseGetPublicPrefixPoolRequest } as GetPublicPrefixPoolRequest;
        message.publicPrefixPoolId =
            object.publicPrefixPoolId !== undefined && object.publicPrefixPoolId !== null
                ? String(object.publicPrefixPoolId)
                : '';
        return message;
    },

    toJSON(message: GetPublicPrefixPoolRequest): unknown {
        const obj: any = {};
        message.publicPrefixPoolId !== undefined &&
            (obj.publicPrefixPoolId = message.publicPrefixPoolId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetPublicPrefixPoolRequest>, I>>(
        object: I,
    ): GetPublicPrefixPoolRequest {
        const message = { ...baseGetPublicPrefixPoolRequest } as GetPublicPrefixPoolRequest;
        message.publicPrefixPoolId = object.publicPrefixPoolId ?? '';
        return message;
    },
};

const baseListPublicPrefixPoolRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    orderBy: '',
    filter: '',
};

export const ListPublicPrefixPoolRequest: {
    encode(message: ListPublicPrefixPoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListPublicPrefixPoolRequest;
    fromJSON(object: any): ListPublicPrefixPoolRequest;
    toJSON(message: ListPublicPrefixPoolRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListPublicPrefixPoolRequest>, I>>(object: I): ListPublicPrefixPoolRequest;
} = {
    encode(
        message: ListPublicPrefixPoolRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListPublicPrefixPoolRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListPublicPrefixPoolRequest } as ListPublicPrefixPoolRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
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

    fromJSON(object: any): ListPublicPrefixPoolRequest {
        const message = { ...baseListPublicPrefixPoolRequest } as ListPublicPrefixPoolRequest;
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
        message.orderBy =
            object.orderBy !== undefined && object.orderBy !== null ? String(object.orderBy) : '';
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        return message;
    },

    toJSON(message: ListPublicPrefixPoolRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPublicPrefixPoolRequest>, I>>(
        object: I,
    ): ListPublicPrefixPoolRequest {
        const message = { ...baseListPublicPrefixPoolRequest } as ListPublicPrefixPoolRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.orderBy = object.orderBy ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListPublicPrefixPoolResponse: object = { nextPageToken: '' };

export const ListPublicPrefixPoolResponse: {
    encode(message: ListPublicPrefixPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListPublicPrefixPoolResponse;
    fromJSON(object: any): ListPublicPrefixPoolResponse;
    toJSON(message: ListPublicPrefixPoolResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListPublicPrefixPoolResponse>, I>>(object: I): ListPublicPrefixPoolResponse;
} = {
    encode(
        message: ListPublicPrefixPoolResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.publicPrefixPools) {
            PublicPrefixPool.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(802).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListPublicPrefixPoolResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListPublicPrefixPoolResponse } as ListPublicPrefixPoolResponse;
        message.publicPrefixPools = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicPrefixPools.push(
                        PublicPrefixPool.decode(reader, reader.uint32()),
                    );
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

    fromJSON(object: any): ListPublicPrefixPoolResponse {
        const message = { ...baseListPublicPrefixPoolResponse } as ListPublicPrefixPoolResponse;
        message.publicPrefixPools = (object.publicPrefixPools ?? []).map((e: any) =>
            PublicPrefixPool.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListPublicPrefixPoolResponse): unknown {
        const obj: any = {};
        if (message.publicPrefixPools) {
            obj.publicPrefixPools = message.publicPrefixPools.map((e) =>
                e ? PublicPrefixPool.toJSON(e) : undefined,
            );
        } else {
            obj.publicPrefixPools = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPublicPrefixPoolResponse>, I>>(
        object: I,
    ): ListPublicPrefixPoolResponse {
        const message = { ...baseListPublicPrefixPoolResponse } as ListPublicPrefixPoolResponse;
        message.publicPrefixPools =
            object.publicPrefixPools?.map((e) => PublicPrefixPool.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseUpdatePublicPrefixPoolRequest: object = {
    publicPrefixPoolId: '',
    name: '',
    description: '',
};

export const UpdatePublicPrefixPoolRequest: {
    encode(message: UpdatePublicPrefixPoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePublicPrefixPoolRequest;
    fromJSON(object: any): UpdatePublicPrefixPoolRequest;
    toJSON(message: UpdatePublicPrefixPoolRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdatePublicPrefixPoolRequest>, I>>(object: I): UpdatePublicPrefixPoolRequest;
} = {
    encode(
        message: UpdatePublicPrefixPoolRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.publicPrefixPoolId !== '') {
            writer.uint32(10).string(message.publicPrefixPoolId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdatePublicPrefixPoolRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePublicPrefixPoolRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdatePublicPrefixPoolRequest } as UpdatePublicPrefixPoolRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicPrefixPoolId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 200:
                    const entry200 = UpdatePublicPrefixPoolRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry200.value !== undefined) {
                        message.labels[entry200.key] = entry200.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdatePublicPrefixPoolRequest {
        const message = { ...baseUpdatePublicPrefixPoolRequest } as UpdatePublicPrefixPoolRequest;
        message.publicPrefixPoolId =
            object.publicPrefixPoolId !== undefined && object.publicPrefixPoolId !== null
                ? String(object.publicPrefixPoolId)
                : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: UpdatePublicPrefixPoolRequest): unknown {
        const obj: any = {};
        message.publicPrefixPoolId !== undefined &&
            (obj.publicPrefixPoolId = message.publicPrefixPoolId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdatePublicPrefixPoolRequest>, I>>(
        object: I,
    ): UpdatePublicPrefixPoolRequest {
        const message = { ...baseUpdatePublicPrefixPoolRequest } as UpdatePublicPrefixPoolRequest;
        message.publicPrefixPoolId = object.publicPrefixPoolId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        return message;
    },
};

const baseUpdatePublicPrefixPoolRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdatePublicPrefixPoolRequest_LabelsEntry: {
    encode(message: UpdatePublicPrefixPoolRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePublicPrefixPoolRequest_LabelsEntry;
    fromJSON(object: any): UpdatePublicPrefixPoolRequest_LabelsEntry;
    toJSON(message: UpdatePublicPrefixPoolRequest_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdatePublicPrefixPoolRequest_LabelsEntry>, I>>(object: I): UpdatePublicPrefixPoolRequest_LabelsEntry;
} = {
    encode(
        message: UpdatePublicPrefixPoolRequest_LabelsEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): UpdatePublicPrefixPoolRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdatePublicPrefixPoolRequest_LabelsEntry,
        } as UpdatePublicPrefixPoolRequest_LabelsEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdatePublicPrefixPoolRequest_LabelsEntry {
        const message = {
            ...baseUpdatePublicPrefixPoolRequest_LabelsEntry,
        } as UpdatePublicPrefixPoolRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdatePublicPrefixPoolRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdatePublicPrefixPoolRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdatePublicPrefixPoolRequest_LabelsEntry {
        const message = {
            ...baseUpdatePublicPrefixPoolRequest_LabelsEntry,
        } as UpdatePublicPrefixPoolRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreatePublicPrefixPoolMetadata: object = { publicPrefixPoolId: '' };

export const CreatePublicPrefixPoolMetadata: {
    encode(message: CreatePublicPrefixPoolMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePublicPrefixPoolMetadata;
    fromJSON(object: any): CreatePublicPrefixPoolMetadata;
    toJSON(message: CreatePublicPrefixPoolMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CreatePublicPrefixPoolMetadata>, I>>(object: I): CreatePublicPrefixPoolMetadata;
} = {
    encode(
        message: CreatePublicPrefixPoolMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.publicPrefixPoolId !== '') {
            writer.uint32(10).string(message.publicPrefixPoolId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePublicPrefixPoolMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreatePublicPrefixPoolMetadata } as CreatePublicPrefixPoolMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicPrefixPoolId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreatePublicPrefixPoolMetadata {
        const message = { ...baseCreatePublicPrefixPoolMetadata } as CreatePublicPrefixPoolMetadata;
        message.publicPrefixPoolId =
            object.publicPrefixPoolId !== undefined && object.publicPrefixPoolId !== null
                ? String(object.publicPrefixPoolId)
                : '';
        return message;
    },

    toJSON(message: CreatePublicPrefixPoolMetadata): unknown {
        const obj: any = {};
        message.publicPrefixPoolId !== undefined &&
            (obj.publicPrefixPoolId = message.publicPrefixPoolId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreatePublicPrefixPoolMetadata>, I>>(
        object: I,
    ): CreatePublicPrefixPoolMetadata {
        const message = { ...baseCreatePublicPrefixPoolMetadata } as CreatePublicPrefixPoolMetadata;
        message.publicPrefixPoolId = object.publicPrefixPoolId ?? '';
        return message;
    },
};

const baseUpdatePublicPrefixPoolMetadata: object = { publicPrefixPoolId: '' };

export const UpdatePublicPrefixPoolMetadata: {
    encode(message: UpdatePublicPrefixPoolMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePublicPrefixPoolMetadata;
    fromJSON(object: any): UpdatePublicPrefixPoolMetadata;
    toJSON(message: UpdatePublicPrefixPoolMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdatePublicPrefixPoolMetadata>, I>>(object: I): UpdatePublicPrefixPoolMetadata;
} = {
    encode(
        message: UpdatePublicPrefixPoolMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.publicPrefixPoolId !== '') {
            writer.uint32(10).string(message.publicPrefixPoolId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePublicPrefixPoolMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdatePublicPrefixPoolMetadata } as UpdatePublicPrefixPoolMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicPrefixPoolId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdatePublicPrefixPoolMetadata {
        const message = { ...baseUpdatePublicPrefixPoolMetadata } as UpdatePublicPrefixPoolMetadata;
        message.publicPrefixPoolId =
            object.publicPrefixPoolId !== undefined && object.publicPrefixPoolId !== null
                ? String(object.publicPrefixPoolId)
                : '';
        return message;
    },

    toJSON(message: UpdatePublicPrefixPoolMetadata): unknown {
        const obj: any = {};
        message.publicPrefixPoolId !== undefined &&
            (obj.publicPrefixPoolId = message.publicPrefixPoolId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdatePublicPrefixPoolMetadata>, I>>(
        object: I,
    ): UpdatePublicPrefixPoolMetadata {
        const message = { ...baseUpdatePublicPrefixPoolMetadata } as UpdatePublicPrefixPoolMetadata;
        message.publicPrefixPoolId = object.publicPrefixPoolId ?? '';
        return message;
    },
};

const baseDeletePublicPrefixPoolMetadata: object = { publicPrefixPoolId: '' };

export const DeletePublicPrefixPoolMetadata: {
    encode(message: DeletePublicPrefixPoolMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeletePublicPrefixPoolMetadata;
    fromJSON(object: any): DeletePublicPrefixPoolMetadata;
    toJSON(message: DeletePublicPrefixPoolMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeletePublicPrefixPoolMetadata>, I>>(object: I): DeletePublicPrefixPoolMetadata;
} = {
    encode(
        message: DeletePublicPrefixPoolMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.publicPrefixPoolId !== '') {
            writer.uint32(10).string(message.publicPrefixPoolId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeletePublicPrefixPoolMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeletePublicPrefixPoolMetadata } as DeletePublicPrefixPoolMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicPrefixPoolId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeletePublicPrefixPoolMetadata {
        const message = { ...baseDeletePublicPrefixPoolMetadata } as DeletePublicPrefixPoolMetadata;
        message.publicPrefixPoolId =
            object.publicPrefixPoolId !== undefined && object.publicPrefixPoolId !== null
                ? String(object.publicPrefixPoolId)
                : '';
        return message;
    },

    toJSON(message: DeletePublicPrefixPoolMetadata): unknown {
        const obj: any = {};
        message.publicPrefixPoolId !== undefined &&
            (obj.publicPrefixPoolId = message.publicPrefixPoolId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeletePublicPrefixPoolMetadata>, I>>(
        object: I,
    ): DeletePublicPrefixPoolMetadata {
        const message = { ...baseDeletePublicPrefixPoolMetadata } as DeletePublicPrefixPoolMetadata;
        message.publicPrefixPoolId = object.publicPrefixPoolId ?? '';
        return message;
    },
};

const baseListPublicPrefixPoolOperationsRequest: object = {
    publicPrefixPoolId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListPublicPrefixPoolOperationsRequest: {
    encode(message: ListPublicPrefixPoolOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListPublicPrefixPoolOperationsRequest;
    fromJSON(object: any): ListPublicPrefixPoolOperationsRequest;
    toJSON(message: ListPublicPrefixPoolOperationsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListPublicPrefixPoolOperationsRequest>, I>>(object: I): ListPublicPrefixPoolOperationsRequest;
} = {
    encode(
        message: ListPublicPrefixPoolOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.publicPrefixPoolId !== '') {
            writer.uint32(10).string(message.publicPrefixPoolId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(800).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(810).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListPublicPrefixPoolOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListPublicPrefixPoolOperationsRequest,
        } as ListPublicPrefixPoolOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicPrefixPoolId = reader.string();
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

    fromJSON(object: any): ListPublicPrefixPoolOperationsRequest {
        const message = {
            ...baseListPublicPrefixPoolOperationsRequest,
        } as ListPublicPrefixPoolOperationsRequest;
        message.publicPrefixPoolId =
            object.publicPrefixPoolId !== undefined && object.publicPrefixPoolId !== null
                ? String(object.publicPrefixPoolId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListPublicPrefixPoolOperationsRequest): unknown {
        const obj: any = {};
        message.publicPrefixPoolId !== undefined &&
            (obj.publicPrefixPoolId = message.publicPrefixPoolId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPublicPrefixPoolOperationsRequest>, I>>(
        object: I,
    ): ListPublicPrefixPoolOperationsRequest {
        const message = {
            ...baseListPublicPrefixPoolOperationsRequest,
        } as ListPublicPrefixPoolOperationsRequest;
        message.publicPrefixPoolId = object.publicPrefixPoolId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListPublicPrefixPoolOperationsResponse: object = { nextPageToken: '' };

export const ListPublicPrefixPoolOperationsResponse: {
    encode(message: ListPublicPrefixPoolOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListPublicPrefixPoolOperationsResponse;
    fromJSON(object: any): ListPublicPrefixPoolOperationsResponse;
    toJSON(message: ListPublicPrefixPoolOperationsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListPublicPrefixPoolOperationsResponse>, I>>(object: I): ListPublicPrefixPoolOperationsResponse;
} = {
    encode(
        message: ListPublicPrefixPoolOperationsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.operations) {
            Operation.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(802).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): ListPublicPrefixPoolOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListPublicPrefixPoolOperationsResponse,
        } as ListPublicPrefixPoolOperationsResponse;
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(Operation.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListPublicPrefixPoolOperationsResponse {
        const message = {
            ...baseListPublicPrefixPoolOperationsResponse,
        } as ListPublicPrefixPoolOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListPublicPrefixPoolOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPublicPrefixPoolOperationsResponse>, I>>(
        object: I,
    ): ListPublicPrefixPoolOperationsResponse {
        const message = {
            ...baseListPublicPrefixPoolOperationsResponse,
        } as ListPublicPrefixPoolOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

export const PublicPrefixPoolServiceService = {
    /** Returns the specified public prefix pool. */
    get: {
        path: '/yandex.cloud.baremetal.v1alpha.PublicPrefixPoolService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetPublicPrefixPoolRequest) =>
            Buffer.from(GetPublicPrefixPoolRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetPublicPrefixPoolRequest.decode(value),
        responseSerialize: (value: PublicPrefixPool) =>
            Buffer.from(PublicPrefixPool.encode(value).finish()),
        responseDeserialize: (value: Buffer) => PublicPrefixPool.decode(value),
    },
    /** Lists public prefix pools in the specified folder. */
    list: {
        path: '/yandex.cloud.baremetal.v1alpha.PublicPrefixPoolService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListPublicPrefixPoolRequest) =>
            Buffer.from(ListPublicPrefixPoolRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListPublicPrefixPoolRequest.decode(value),
        responseSerialize: (value: ListPublicPrefixPoolResponse) =>
            Buffer.from(ListPublicPrefixPoolResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListPublicPrefixPoolResponse.decode(value),
    },
    /** Updates the specified public prefix pool. */
    update: {
        path: '/yandex.cloud.baremetal.v1alpha.PublicPrefixPoolService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdatePublicPrefixPoolRequest) =>
            Buffer.from(UpdatePublicPrefixPoolRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdatePublicPrefixPoolRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified public prefix pool. */
    listOperations: {
        path: '/yandex.cloud.baremetal.v1alpha.PublicPrefixPoolService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListPublicPrefixPoolOperationsRequest) =>
            Buffer.from(ListPublicPrefixPoolOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListPublicPrefixPoolOperationsRequest.decode(value),
        responseSerialize: (value: ListPublicPrefixPoolOperationsResponse) =>
            Buffer.from(ListPublicPrefixPoolOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListPublicPrefixPoolOperationsResponse.decode(value),
    },
} as const;

export interface PublicPrefixPoolServiceServer extends UntypedServiceImplementation {
    /** Returns the specified public prefix pool. */
    get: handleUnaryCall<GetPublicPrefixPoolRequest, PublicPrefixPool>;
    /** Lists public prefix pools in the specified folder. */
    list: handleUnaryCall<ListPublicPrefixPoolRequest, ListPublicPrefixPoolResponse>;
    /** Updates the specified public prefix pool. */
    update: handleUnaryCall<UpdatePublicPrefixPoolRequest, Operation>;
    /** Lists operations for the specified public prefix pool. */
    listOperations: handleUnaryCall<
        ListPublicPrefixPoolOperationsRequest,
        ListPublicPrefixPoolOperationsResponse
    >;
}

export interface PublicPrefixPoolServiceClient extends Client {
    /** Returns the specified public prefix pool. */
    get(
        request: GetPublicPrefixPoolRequest,
        callback: (error: ServiceError | null, response: PublicPrefixPool) => void,
    ): ClientUnaryCall;
    get(
        request: GetPublicPrefixPoolRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: PublicPrefixPool) => void,
    ): ClientUnaryCall;
    get(
        request: GetPublicPrefixPoolRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: PublicPrefixPool) => void,
    ): ClientUnaryCall;
    /** Lists public prefix pools in the specified folder. */
    list(
        request: ListPublicPrefixPoolRequest,
        callback: (error: ServiceError | null, response: ListPublicPrefixPoolResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListPublicPrefixPoolRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListPublicPrefixPoolResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListPublicPrefixPoolRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListPublicPrefixPoolResponse) => void,
    ): ClientUnaryCall;
    /** Updates the specified public prefix pool. */
    update(
        request: UpdatePublicPrefixPoolRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdatePublicPrefixPoolRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdatePublicPrefixPoolRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists operations for the specified public prefix pool. */
    listOperations(
        request: ListPublicPrefixPoolOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListPublicPrefixPoolOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListPublicPrefixPoolOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListPublicPrefixPoolOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListPublicPrefixPoolOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListPublicPrefixPoolOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
}

export const PublicPrefixPoolServiceClient = makeGenericClientConstructor(
    PublicPrefixPoolServiceService,
    'yandex.cloud.baremetal.v1alpha.PublicPrefixPoolService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): PublicPrefixPoolServiceClient;
    service: typeof PublicPrefixPoolServiceService;
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
