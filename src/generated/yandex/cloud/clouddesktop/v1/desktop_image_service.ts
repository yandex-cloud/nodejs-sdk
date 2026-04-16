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
import { DesktopImage } from '../../../../yandex/cloud/clouddesktop/v1/desktop_image';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.clouddesktop.v1.api';

export interface ListDesktopImagesRequest {
    /** ID of the folder to list desktop images in. */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListDesktopImagesRequest.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListDesktopImagesRequest.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [DesktopImage.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. Value or a list of values to compare against the values of the field.
     */
    filter: string;
    /**
     * Sorting the list by [DesktopImage.name], [DesktopImage.created_at] and [DesktopImage.status] fields.
     * The default sorting order is ascending.
     */
    orderBy: string;
}

export interface ListDesktopImagesResponse {
    /** List of desktop images. */
    desktopImages: DesktopImage[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListDesktopImagesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListDesktopImagesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CopyDesktopImageRequest {
    /** ID of the folder to copy the image to. */
    folderId: string;
    /** Name of the image. */
    name: string;
    /** ID of the compute image to copy the image from. */
    imageId: string;
}

export interface UpdateDesktopImageRequest {
    updateMask?: FieldMask;
    imageId: string;
    name: string;
    labels: { [key: string]: string };
}

export interface UpdateDesktopImageRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CopyFromDesktopRequest {
    /** ID of the folder to copy the image to. */
    folderId: string;
    /** Name of the image. */
    name: string;
    /** ID of the desktop to copy the image from. */
    desktopId: string;
}

export interface CopyDesktopImageMetadata {
    /** ID of the new image. */
    imageId: string;
}

export interface CopyFromDesktopMetadata {
    /** ID of the new image. */
    imageId: string;
}

export interface DeleteDesktopImageRequest {
    /** ID of the image to delete. */
    imageId: string;
}

export interface DeleteDesktopImageMetadata {
    /** ID of the image to delete. */
    imageId: string;
}

export interface GetDesktopImageRequest {
    /** ID of the image to get. */
    imageId: string;
}

export interface UpdateDesktopImageMetadata {
    imageId: string;
}

const baseListDesktopImagesRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
    orderBy: '',
};

export const ListDesktopImagesRequest = {
    encode(
        message: ListDesktopImagesRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(168).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(178).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(186).string(message.filter);
        }
        if (message.orderBy !== '') {
            writer.uint32(194).string(message.orderBy);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListDesktopImagesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListDesktopImagesRequest } as ListDesktopImagesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 21:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 22:
                    message.pageToken = reader.string();
                    break;
                case 23:
                    message.filter = reader.string();
                    break;
                case 24:
                    message.orderBy = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListDesktopImagesRequest {
        const message = { ...baseListDesktopImagesRequest } as ListDesktopImagesRequest;
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

    toJSON(message: ListDesktopImagesRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListDesktopImagesRequest>, I>>(
        object: I,
    ): ListDesktopImagesRequest {
        const message = { ...baseListDesktopImagesRequest } as ListDesktopImagesRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        message.orderBy = object.orderBy ?? '';
        return message;
    },
};

const baseListDesktopImagesResponse: object = { nextPageToken: '' };

export const ListDesktopImagesResponse = {
    encode(
        message: ListDesktopImagesResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.desktopImages) {
            DesktopImage.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(178).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListDesktopImagesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListDesktopImagesResponse } as ListDesktopImagesResponse;
        message.desktopImages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.desktopImages.push(DesktopImage.decode(reader, reader.uint32()));
                    break;
                case 22:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListDesktopImagesResponse {
        const message = { ...baseListDesktopImagesResponse } as ListDesktopImagesResponse;
        message.desktopImages = (object.desktopImages ?? []).map((e: any) =>
            DesktopImage.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListDesktopImagesResponse): unknown {
        const obj: any = {};
        if (message.desktopImages) {
            obj.desktopImages = message.desktopImages.map((e) =>
                e ? DesktopImage.toJSON(e) : undefined,
            );
        } else {
            obj.desktopImages = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListDesktopImagesResponse>, I>>(
        object: I,
    ): ListDesktopImagesResponse {
        const message = { ...baseListDesktopImagesResponse } as ListDesktopImagesResponse;
        message.desktopImages = object.desktopImages?.map((e) => DesktopImage.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCopyDesktopImageRequest: object = { folderId: '', name: '', imageId: '' };

export const CopyDesktopImageRequest = {
    encode(message: CopyDesktopImageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.imageId !== '') {
            writer.uint32(66).string(message.imageId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CopyDesktopImageRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCopyDesktopImageRequest } as CopyDesktopImageRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 8:
                    message.imageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CopyDesktopImageRequest {
        const message = { ...baseCopyDesktopImageRequest } as CopyDesktopImageRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.imageId =
            object.imageId !== undefined && object.imageId !== null ? String(object.imageId) : '';
        return message;
    },

    toJSON(message: CopyDesktopImageRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CopyDesktopImageRequest>, I>>(
        object: I,
    ): CopyDesktopImageRequest {
        const message = { ...baseCopyDesktopImageRequest } as CopyDesktopImageRequest;
        message.folderId = object.folderId ?? '';
        message.name = object.name ?? '';
        message.imageId = object.imageId ?? '';
        return message;
    },
};

const baseUpdateDesktopImageRequest: object = { imageId: '', name: '' };

export const UpdateDesktopImageRequest = {
    encode(
        message: UpdateDesktopImageRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(10).fork()).ldelim();
        }
        if (message.imageId !== '') {
            writer.uint32(18).string(message.imageId);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateDesktopImageRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDesktopImageRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateDesktopImageRequest } as UpdateDesktopImageRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.imageId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    const entry4 = UpdateDesktopImageRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateDesktopImageRequest {
        const message = { ...baseUpdateDesktopImageRequest } as UpdateDesktopImageRequest;
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.imageId =
            object.imageId !== undefined && object.imageId !== null ? String(object.imageId) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: UpdateDesktopImageRequest): unknown {
        const obj: any = {};
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.imageId !== undefined && (obj.imageId = message.imageId);
        message.name !== undefined && (obj.name = message.name);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateDesktopImageRequest>, I>>(
        object: I,
    ): UpdateDesktopImageRequest {
        const message = { ...baseUpdateDesktopImageRequest } as UpdateDesktopImageRequest;
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.imageId = object.imageId ?? '';
        message.name = object.name ?? '';
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

const baseUpdateDesktopImageRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateDesktopImageRequest_LabelsEntry = {
    encode(
        message: UpdateDesktopImageRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDesktopImageRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateDesktopImageRequest_LabelsEntry,
        } as UpdateDesktopImageRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateDesktopImageRequest_LabelsEntry {
        const message = {
            ...baseUpdateDesktopImageRequest_LabelsEntry,
        } as UpdateDesktopImageRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateDesktopImageRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateDesktopImageRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateDesktopImageRequest_LabelsEntry {
        const message = {
            ...baseUpdateDesktopImageRequest_LabelsEntry,
        } as UpdateDesktopImageRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCopyFromDesktopRequest: object = { folderId: '', name: '', desktopId: '' };

export const CopyFromDesktopRequest = {
    encode(message: CopyFromDesktopRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(26).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.desktopId !== '') {
            writer.uint32(66).string(message.desktopId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CopyFromDesktopRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCopyFromDesktopRequest } as CopyFromDesktopRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.folderId = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 8:
                    message.desktopId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CopyFromDesktopRequest {
        const message = { ...baseCopyFromDesktopRequest } as CopyFromDesktopRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.desktopId =
            object.desktopId !== undefined && object.desktopId !== null
                ? String(object.desktopId)
                : '';
        return message;
    },

    toJSON(message: CopyFromDesktopRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.desktopId !== undefined && (obj.desktopId = message.desktopId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CopyFromDesktopRequest>, I>>(
        object: I,
    ): CopyFromDesktopRequest {
        const message = { ...baseCopyFromDesktopRequest } as CopyFromDesktopRequest;
        message.folderId = object.folderId ?? '';
        message.name = object.name ?? '';
        message.desktopId = object.desktopId ?? '';
        return message;
    },
};

const baseCopyDesktopImageMetadata: object = { imageId: '' };

export const CopyDesktopImageMetadata = {
    encode(
        message: CopyDesktopImageMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CopyDesktopImageMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCopyDesktopImageMetadata } as CopyDesktopImageMetadata;
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

    fromJSON(object: any): CopyDesktopImageMetadata {
        const message = { ...baseCopyDesktopImageMetadata } as CopyDesktopImageMetadata;
        message.imageId =
            object.imageId !== undefined && object.imageId !== null ? String(object.imageId) : '';
        return message;
    },

    toJSON(message: CopyDesktopImageMetadata): unknown {
        const obj: any = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CopyDesktopImageMetadata>, I>>(
        object: I,
    ): CopyDesktopImageMetadata {
        const message = { ...baseCopyDesktopImageMetadata } as CopyDesktopImageMetadata;
        message.imageId = object.imageId ?? '';
        return message;
    },
};

const baseCopyFromDesktopMetadata: object = { imageId: '' };

export const CopyFromDesktopMetadata = {
    encode(message: CopyFromDesktopMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CopyFromDesktopMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCopyFromDesktopMetadata } as CopyFromDesktopMetadata;
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

    fromJSON(object: any): CopyFromDesktopMetadata {
        const message = { ...baseCopyFromDesktopMetadata } as CopyFromDesktopMetadata;
        message.imageId =
            object.imageId !== undefined && object.imageId !== null ? String(object.imageId) : '';
        return message;
    },

    toJSON(message: CopyFromDesktopMetadata): unknown {
        const obj: any = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CopyFromDesktopMetadata>, I>>(
        object: I,
    ): CopyFromDesktopMetadata {
        const message = { ...baseCopyFromDesktopMetadata } as CopyFromDesktopMetadata;
        message.imageId = object.imageId ?? '';
        return message;
    },
};

const baseDeleteDesktopImageRequest: object = { imageId: '' };

export const DeleteDesktopImageRequest = {
    encode(
        message: DeleteDesktopImageRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDesktopImageRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteDesktopImageRequest } as DeleteDesktopImageRequest;
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

    fromJSON(object: any): DeleteDesktopImageRequest {
        const message = { ...baseDeleteDesktopImageRequest } as DeleteDesktopImageRequest;
        message.imageId =
            object.imageId !== undefined && object.imageId !== null ? String(object.imageId) : '';
        return message;
    },

    toJSON(message: DeleteDesktopImageRequest): unknown {
        const obj: any = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteDesktopImageRequest>, I>>(
        object: I,
    ): DeleteDesktopImageRequest {
        const message = { ...baseDeleteDesktopImageRequest } as DeleteDesktopImageRequest;
        message.imageId = object.imageId ?? '';
        return message;
    },
};

const baseDeleteDesktopImageMetadata: object = { imageId: '' };

export const DeleteDesktopImageMetadata = {
    encode(
        message: DeleteDesktopImageMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDesktopImageMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteDesktopImageMetadata } as DeleteDesktopImageMetadata;
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

    fromJSON(object: any): DeleteDesktopImageMetadata {
        const message = { ...baseDeleteDesktopImageMetadata } as DeleteDesktopImageMetadata;
        message.imageId =
            object.imageId !== undefined && object.imageId !== null ? String(object.imageId) : '';
        return message;
    },

    toJSON(message: DeleteDesktopImageMetadata): unknown {
        const obj: any = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteDesktopImageMetadata>, I>>(
        object: I,
    ): DeleteDesktopImageMetadata {
        const message = { ...baseDeleteDesktopImageMetadata } as DeleteDesktopImageMetadata;
        message.imageId = object.imageId ?? '';
        return message;
    },
};

const baseGetDesktopImageRequest: object = { imageId: '' };

export const GetDesktopImageRequest = {
    encode(message: GetDesktopImageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetDesktopImageRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetDesktopImageRequest } as GetDesktopImageRequest;
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

    fromJSON(object: any): GetDesktopImageRequest {
        const message = { ...baseGetDesktopImageRequest } as GetDesktopImageRequest;
        message.imageId =
            object.imageId !== undefined && object.imageId !== null ? String(object.imageId) : '';
        return message;
    },

    toJSON(message: GetDesktopImageRequest): unknown {
        const obj: any = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetDesktopImageRequest>, I>>(
        object: I,
    ): GetDesktopImageRequest {
        const message = { ...baseGetDesktopImageRequest } as GetDesktopImageRequest;
        message.imageId = object.imageId ?? '';
        return message;
    },
};

const baseUpdateDesktopImageMetadata: object = { imageId: '' };

export const UpdateDesktopImageMetadata = {
    encode(
        message: UpdateDesktopImageMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDesktopImageMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateDesktopImageMetadata } as UpdateDesktopImageMetadata;
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

    fromJSON(object: any): UpdateDesktopImageMetadata {
        const message = { ...baseUpdateDesktopImageMetadata } as UpdateDesktopImageMetadata;
        message.imageId =
            object.imageId !== undefined && object.imageId !== null ? String(object.imageId) : '';
        return message;
    },

    toJSON(message: UpdateDesktopImageMetadata): unknown {
        const obj: any = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateDesktopImageMetadata>, I>>(
        object: I,
    ): UpdateDesktopImageMetadata {
        const message = { ...baseUpdateDesktopImageMetadata } as UpdateDesktopImageMetadata;
        message.imageId = object.imageId ?? '';
        return message;
    },
};

/** A service for managing desktop images. */
export const DesktopImageServiceService = {
    /** Lists desktop images in the specified folder. */
    list: {
        path: '/yandex.cloud.clouddesktop.v1.api.DesktopImageService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListDesktopImagesRequest) =>
            Buffer.from(ListDesktopImagesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListDesktopImagesRequest.decode(value),
        responseSerialize: (value: ListDesktopImagesResponse) =>
            Buffer.from(ListDesktopImagesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListDesktopImagesResponse.decode(value),
    },
    /** Returns the specified desktop image. */
    get: {
        path: '/yandex.cloud.clouddesktop.v1.api.DesktopImageService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetDesktopImageRequest) =>
            Buffer.from(GetDesktopImageRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetDesktopImageRequest.decode(value),
        responseSerialize: (value: DesktopImage) =>
            Buffer.from(DesktopImage.encode(value).finish()),
        responseDeserialize: (value: Buffer) => DesktopImage.decode(value),
    },
    /** Copies the specified image to desktop image. */
    copy: {
        path: '/yandex.cloud.clouddesktop.v1.api.DesktopImageService/Copy',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CopyDesktopImageRequest) =>
            Buffer.from(CopyDesktopImageRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CopyDesktopImageRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates desktop image properties. */
    update: {
        path: '/yandex.cloud.clouddesktop.v1.api.DesktopImageService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateDesktopImageRequest) =>
            Buffer.from(UpdateDesktopImageRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateDesktopImageRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Copies the specified desktop image from the specified desktop. */
    copyFromDesktop: {
        path: '/yandex.cloud.clouddesktop.v1.api.DesktopImageService/CopyFromDesktop',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CopyFromDesktopRequest) =>
            Buffer.from(CopyFromDesktopRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CopyFromDesktopRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified desktop image. */
    delete: {
        path: '/yandex.cloud.clouddesktop.v1.api.DesktopImageService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteDesktopImageRequest) =>
            Buffer.from(DeleteDesktopImageRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteDesktopImageRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface DesktopImageServiceServer extends UntypedServiceImplementation {
    /** Lists desktop images in the specified folder. */
    list: handleUnaryCall<ListDesktopImagesRequest, ListDesktopImagesResponse>;
    /** Returns the specified desktop image. */
    get: handleUnaryCall<GetDesktopImageRequest, DesktopImage>;
    /** Copies the specified image to desktop image. */
    copy: handleUnaryCall<CopyDesktopImageRequest, Operation>;
    /** Updates desktop image properties. */
    update: handleUnaryCall<UpdateDesktopImageRequest, Operation>;
    /** Copies the specified desktop image from the specified desktop. */
    copyFromDesktop: handleUnaryCall<CopyFromDesktopRequest, Operation>;
    /** Deletes the specified desktop image. */
    delete: handleUnaryCall<DeleteDesktopImageRequest, Operation>;
}

export interface DesktopImageServiceClient extends Client {
    /** Lists desktop images in the specified folder. */
    list(
        request: ListDesktopImagesRequest,
        callback: (error: ServiceError | null, response: ListDesktopImagesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListDesktopImagesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListDesktopImagesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListDesktopImagesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListDesktopImagesResponse) => void,
    ): ClientUnaryCall;
    /** Returns the specified desktop image. */
    get(
        request: GetDesktopImageRequest,
        callback: (error: ServiceError | null, response: DesktopImage) => void,
    ): ClientUnaryCall;
    get(
        request: GetDesktopImageRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: DesktopImage) => void,
    ): ClientUnaryCall;
    get(
        request: GetDesktopImageRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: DesktopImage) => void,
    ): ClientUnaryCall;
    /** Copies the specified image to desktop image. */
    copy(
        request: CopyDesktopImageRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    copy(
        request: CopyDesktopImageRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    copy(
        request: CopyDesktopImageRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates desktop image properties. */
    update(
        request: UpdateDesktopImageRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateDesktopImageRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateDesktopImageRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Copies the specified desktop image from the specified desktop. */
    copyFromDesktop(
        request: CopyFromDesktopRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    copyFromDesktop(
        request: CopyFromDesktopRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    copyFromDesktop(
        request: CopyFromDesktopRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified desktop image. */
    delete(
        request: DeleteDesktopImageRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteDesktopImageRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteDesktopImageRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const DesktopImageServiceClient = makeGenericClientConstructor(
    DesktopImageServiceService,
    'yandex.cloud.clouddesktop.v1.api.DesktopImageService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): DesktopImageServiceClient;
    service: typeof DesktopImageServiceService;
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
