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
import { Image } from '../../../../yandex/cloud/baremetal/v1alpha/image';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.baremetal.v1alpha';

export interface GetImageRequest {
    /**
     * ID of the Image resource to return.
     *
     * To get the image ID, use a [ImageService.List] request.
     */
    imageId: string;
}

export interface ListImagesRequest {
    /**
     * ID of the folder to list images in.
     *
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
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
     * Supported fields: ["id", "name", "createdAt"].
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

export interface ListImagesResponse {
    /** List of Image resources. */
    images: Image[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * [ListImagesRequest.page_size], use `next_page_token` as the value
     * for the [ListImagesRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateImageRequest {
    /**
     * ID of the folder to create an image in.
     *
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the image.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the image. */
    description: string;
    /**
     * URI of the source image to create the new image from.
     * Currently only supports links to images that are stored in Object Storage.
     * Currently only supports ISO formats.
     */
    uri: string;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
}

export interface CreateImageRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateImageMetadata {
    /** ID of the image that is being created. */
    imageId: string;
}

export interface UpdateImageRequest {
    /**
     * ID of the Image resource to update.
     *
     * To get the image ID, use a [ImageService.List] request.
     */
    imageId: string;
    /** Field mask that specifies which fields of the Image resource are going to be updated. */
    updateMask?: FieldMask;
    /**
     * Name of the image.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the image. */
    description: string;
    /**
     * Resource labels as `key:value` pairs.
     *
     * Existing set of `labels` is completely replaced by the provided set.
     */
    labels: { [key: string]: string };
}

export interface UpdateImageRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateImageMetadata {
    /** ID of the Image resource that is being updated. */
    imageId: string;
}

export interface DeleteImageRequest {
    /**
     * ID of the image to delete.
     *
     * To get the image ID, use a [ImageService.List] request.
     */
    imageId: string;
}

export interface DeleteImageMetadata {
    /** ID of the Image resource that is being deleted. */
    imageId: string;
}

export interface ListImageOperationsRequest {
    /** ID of the Image resource to list operations for. */
    imageId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is greater than `page_size`,
     * the service returns a [ListImageOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value is 20.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListImageOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListImageOperationsResponse {
    /** List of operations for the specified Image resource. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * [ListImageOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListImageOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetImageRequest: object = { imageId: '' };

export const GetImageRequest = {
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

const baseListImagesRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    orderBy: '',
    filter: '',
};

export const ListImagesRequest = {
    encode(message: ListImagesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListImagesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListImagesRequest } as ListImagesRequest;
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

    fromJSON(object: any): ListImagesRequest {
        const message = { ...baseListImagesRequest } as ListImagesRequest;
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

    toJSON(message: ListImagesRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListImagesRequest>, I>>(object: I): ListImagesRequest {
        const message = { ...baseListImagesRequest } as ListImagesRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.orderBy = object.orderBy ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListImagesResponse: object = { nextPageToken: '' };

export const ListImagesResponse = {
    encode(message: ListImagesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.images) {
            Image.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(802).string(message.nextPageToken);
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

const baseCreateImageRequest: object = { folderId: '', name: '', description: '', uri: '' };

export const CreateImageRequest = {
    encode(message: CreateImageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.uri !== '') {
            writer.uint32(90).string(message.uri);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateImageRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateImageRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateImageRequest } as CreateImageRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 11:
                    message.uri = reader.string();
                    break;
                case 200:
                    const entry200 = CreateImageRequest_LabelsEntry.decode(reader, reader.uint32());
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

    fromJSON(object: any): CreateImageRequest {
        const message = { ...baseCreateImageRequest } as CreateImageRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.uri = object.uri !== undefined && object.uri !== null ? String(object.uri) : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: CreateImageRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.uri !== undefined && (obj.uri = message.uri);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateImageRequest>, I>>(
        object: I,
    ): CreateImageRequest {
        const message = { ...baseCreateImageRequest } as CreateImageRequest;
        message.folderId = object.folderId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.uri = object.uri ?? '';
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

const baseCreateImageRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateImageRequest_LabelsEntry = {
    encode(
        message: CreateImageRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateImageRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateImageRequest_LabelsEntry } as CreateImageRequest_LabelsEntry;
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

    fromJSON(object: any): CreateImageRequest_LabelsEntry {
        const message = { ...baseCreateImageRequest_LabelsEntry } as CreateImageRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateImageRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateImageRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateImageRequest_LabelsEntry {
        const message = { ...baseCreateImageRequest_LabelsEntry } as CreateImageRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateImageMetadata: object = { imageId: '' };

export const CreateImageMetadata = {
    encode(message: CreateImageMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateImageMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateImageMetadata } as CreateImageMetadata;
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

    fromJSON(object: any): CreateImageMetadata {
        const message = { ...baseCreateImageMetadata } as CreateImageMetadata;
        message.imageId =
            object.imageId !== undefined && object.imageId !== null ? String(object.imageId) : '';
        return message;
    },

    toJSON(message: CreateImageMetadata): unknown {
        const obj: any = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateImageMetadata>, I>>(
        object: I,
    ): CreateImageMetadata {
        const message = { ...baseCreateImageMetadata } as CreateImageMetadata;
        message.imageId = object.imageId ?? '';
        return message;
    },
};

const baseUpdateImageRequest: object = { imageId: '', name: '', description: '' };

export const UpdateImageRequest = {
    encode(message: UpdateImageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
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
            UpdateImageRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateImageRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateImageRequest } as UpdateImageRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
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
                    const entry200 = UpdateImageRequest_LabelsEntry.decode(reader, reader.uint32());
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

    fromJSON(object: any): UpdateImageRequest {
        const message = { ...baseUpdateImageRequest } as UpdateImageRequest;
        message.imageId =
            object.imageId !== undefined && object.imageId !== null ? String(object.imageId) : '';
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

    toJSON(message: UpdateImageRequest): unknown {
        const obj: any = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
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

    fromPartial<I extends Exact<DeepPartial<UpdateImageRequest>, I>>(
        object: I,
    ): UpdateImageRequest {
        const message = { ...baseUpdateImageRequest } as UpdateImageRequest;
        message.imageId = object.imageId ?? '';
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

const baseUpdateImageRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateImageRequest_LabelsEntry = {
    encode(
        message: UpdateImageRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateImageRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateImageRequest_LabelsEntry } as UpdateImageRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateImageRequest_LabelsEntry {
        const message = { ...baseUpdateImageRequest_LabelsEntry } as UpdateImageRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateImageRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateImageRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateImageRequest_LabelsEntry {
        const message = { ...baseUpdateImageRequest_LabelsEntry } as UpdateImageRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateImageMetadata: object = { imageId: '' };

export const UpdateImageMetadata = {
    encode(message: UpdateImageMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateImageMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateImageMetadata } as UpdateImageMetadata;
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

    fromJSON(object: any): UpdateImageMetadata {
        const message = { ...baseUpdateImageMetadata } as UpdateImageMetadata;
        message.imageId =
            object.imageId !== undefined && object.imageId !== null ? String(object.imageId) : '';
        return message;
    },

    toJSON(message: UpdateImageMetadata): unknown {
        const obj: any = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateImageMetadata>, I>>(
        object: I,
    ): UpdateImageMetadata {
        const message = { ...baseUpdateImageMetadata } as UpdateImageMetadata;
        message.imageId = object.imageId ?? '';
        return message;
    },
};

const baseDeleteImageRequest: object = { imageId: '' };

export const DeleteImageRequest = {
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

const baseDeleteImageMetadata: object = { imageId: '' };

export const DeleteImageMetadata = {
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

const baseListImageOperationsRequest: object = { imageId: '', pageSize: 0, pageToken: '' };

export const ListImageOperationsRequest = {
    encode(
        message: ListImageOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(800).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(810).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListImageOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListImageOperationsRequest } as ListImageOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
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

    fromJSON(object: any): ListImageOperationsRequest {
        const message = { ...baseListImageOperationsRequest } as ListImageOperationsRequest;
        message.imageId =
            object.imageId !== undefined && object.imageId !== null ? String(object.imageId) : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListImageOperationsRequest): unknown {
        const obj: any = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListImageOperationsRequest>, I>>(
        object: I,
    ): ListImageOperationsRequest {
        const message = { ...baseListImageOperationsRequest } as ListImageOperationsRequest;
        message.imageId = object.imageId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListImageOperationsResponse: object = { nextPageToken: '' };

export const ListImageOperationsResponse = {
    encode(
        message: ListImageOperationsResponse,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListImageOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListImageOperationsResponse } as ListImageOperationsResponse;
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

    fromJSON(object: any): ListImageOperationsResponse {
        const message = { ...baseListImageOperationsResponse } as ListImageOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListImageOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListImageOperationsResponse>, I>>(
        object: I,
    ): ListImageOperationsResponse {
        const message = { ...baseListImageOperationsResponse } as ListImageOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** A set of methods for managing Image resources. */
export const ImageServiceService = {
    /**
     * Returns the specific Image resource.
     *
     * To get the list of available Image resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.baremetal.v1alpha.ImageService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetImageRequest) =>
            Buffer.from(GetImageRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetImageRequest.decode(value),
        responseSerialize: (value: Image) => Buffer.from(Image.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Image.decode(value),
    },
    /** Retrieves the list of Image resources in the specified folder. */
    list: {
        path: '/yandex.cloud.baremetal.v1alpha.ImageService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListImagesRequest) =>
            Buffer.from(ListImagesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListImagesRequest.decode(value),
        responseSerialize: (value: ListImagesResponse) =>
            Buffer.from(ListImagesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListImagesResponse.decode(value),
    },
    /** Creates an image in the specified folder. */
    create: {
        path: '/yandex.cloud.baremetal.v1alpha.ImageService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateImageRequest) =>
            Buffer.from(CreateImageRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateImageRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified image. */
    update: {
        path: '/yandex.cloud.baremetal.v1alpha.ImageService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateImageRequest) =>
            Buffer.from(UpdateImageRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateImageRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Deletes the specified image.
     *
     * Deleting an image removes its data permanently and is irreversible.
     */
    delete: {
        path: '/yandex.cloud.baremetal.v1alpha.ImageService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteImageRequest) =>
            Buffer.from(DeleteImageRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteImageRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified image. */
    listOperations: {
        path: '/yandex.cloud.baremetal.v1alpha.ImageService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListImageOperationsRequest) =>
            Buffer.from(ListImageOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListImageOperationsRequest.decode(value),
        responseSerialize: (value: ListImageOperationsResponse) =>
            Buffer.from(ListImageOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListImageOperationsResponse.decode(value),
    },
} as const;

export interface ImageServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specific Image resource.
     *
     * To get the list of available Image resources, make a [List] request.
     */
    get: handleUnaryCall<GetImageRequest, Image>;
    /** Retrieves the list of Image resources in the specified folder. */
    list: handleUnaryCall<ListImagesRequest, ListImagesResponse>;
    /** Creates an image in the specified folder. */
    create: handleUnaryCall<CreateImageRequest, Operation>;
    /** Updates the specified image. */
    update: handleUnaryCall<UpdateImageRequest, Operation>;
    /**
     * Deletes the specified image.
     *
     * Deleting an image removes its data permanently and is irreversible.
     */
    delete: handleUnaryCall<DeleteImageRequest, Operation>;
    /** Lists operations for the specified image. */
    listOperations: handleUnaryCall<ListImageOperationsRequest, ListImageOperationsResponse>;
}

export interface ImageServiceClient extends Client {
    /**
     * Returns the specific Image resource.
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
    /** Retrieves the list of Image resources in the specified folder. */
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
    /** Creates an image in the specified folder. */
    create(
        request: CreateImageRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateImageRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateImageRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified image. */
    update(
        request: UpdateImageRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateImageRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateImageRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Deletes the specified image.
     *
     * Deleting an image removes its data permanently and is irreversible.
     */
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
    /** Lists operations for the specified image. */
    listOperations(
        request: ListImageOperationsRequest,
        callback: (error: ServiceError | null, response: ListImageOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListImageOperationsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListImageOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListImageOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListImageOperationsResponse) => void,
    ): ClientUnaryCall;
}

export const ImageServiceClient = makeGenericClientConstructor(
    ImageServiceService,
    'yandex.cloud.baremetal.v1alpha.ImageService',
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
