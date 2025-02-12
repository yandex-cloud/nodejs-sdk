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
import { Os, Image } from '../../../../yandex/cloud/compute/v1/image';
import { HardwareGeneration } from '../../../../yandex/cloud/compute/v1/hardware_generation';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../../../yandex/cloud/access/access';

export const protobufPackage = 'yandex.cloud.compute.v1';

export interface GetImageRequest {
    $type: 'yandex.cloud.compute.v1.GetImageRequest';
    /**
     * ID of the Image resource to return.
     * To get the image ID, use a [ImageService.List] request.
     */
    imageId: string;
}

export interface GetImageLatestByFamilyRequest {
    $type: 'yandex.cloud.compute.v1.GetImageLatestByFamilyRequest';
    /**
     * ID of the folder to get the image from.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Name of the image family to search for. */
    family: string;
}

export interface ListImagesRequest {
    $type: 'yandex.cloud.compute.v1.ListImagesRequest';
    /**
     * ID of the folder to list images in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListImagesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListImagesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression consists of one or more conditions united by `AND` operator: `<condition1> [AND <condition2> [<...> AND <conditionN>]]`.
     *
     * Each condition has the form `<field> <operator> <value>`, where:
     * 1. `<field>` is the field name. Currently you can use filtering only on the limited number of fields.
     * 2. `<operator>` is a logical operator, one of `=`, `!=`, `IN`, `NOT IN`.
     * 3. `<value>` represents a value.
     * String values should be written in double (`"`) or single (`'`) quotes. C-style escape sequences are supported (`\"` turns to `"`, `\'` to `'`, `\\` to backslash).
     */
    filter: string;
    /**
     * By which column the listing should be ordered and in which direction,
     * format is "createdAt desc". "id asc" if omitted.
     * The default sorting order is ascending
     */
    orderBy: string;
}

export interface ListImagesResponse {
    $type: 'yandex.cloud.compute.v1.ListImagesResponse';
    /** List of images. */
    images: Image[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListSnapshotsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListSnapshotsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateImageRequest {
    $type: 'yandex.cloud.compute.v1.CreateImageRequest';
    /**
     * ID of the folder to create an image in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Name of the image. */
    name: string;
    /** Description of the image. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /**
     * The name of the image family to which this image belongs. For more information, see [Image family](/docs/compute/concepts/image#family).
     *
     * To get an information about the most recent image from a family, use a [ImageService.GetLatestByFamily] request.
     */
    family: string;
    /**
     * Minimum size of the disk that will be created from this image.
     * Specified in bytes. Should be more than the volume of source data.
     */
    minDiskSize: number;
    /**
     * License IDs that indicate which licenses are attached to this resource.
     * License IDs are used to calculate additional charges for the use of the virtual machine.
     *
     * The correct license ID is generated by the platform. IDs are inherited by new resources created from this resource.
     *
     * If you know the license IDs, specify them when you create the image.
     * For example, if you create a disk image using a third-party utility and load it into Object Storage, the license IDs will be lost.
     * You can specify them in this request.
     */
    productIds: string[];
    /** ID of the source image to create the new image from. */
    imageId: string | undefined;
    /** ID of the disk to create the image from. */
    diskId: string | undefined;
    /** ID of the snapshot to create the image from. */
    snapshotId: string | undefined;
    /**
     * URI of the source image to create the new image from.
     * Currently only supports links to images that are stored in Object Storage.
     * Must be a valid [pre-signed URL](/docs/storage/concepts/pre-signed-urls).
     * Currently only supports Qcow2, VMDK, and RAW image formats.
     */
    uri: string | undefined;
    /**
     * Operating system that is contained in the image.
     *
     * If not specified and you used the `image_id` or `disk_id` field to set the source, then the value can be inherited from the source resource.
     */
    os?: Os;
    /** When true, an image pool will be created for fast creation disks from the image. */
    pooled: boolean;
    /**
     * Specify the overrides to hardware_generation of a source disk, image or snapshot,
     * or to the default values if the source does not define it.
     */
    hardwareGeneration?: HardwareGeneration;
}

export interface CreateImageRequest_LabelsEntry {
    $type: 'yandex.cloud.compute.v1.CreateImageRequest.LabelsEntry';
    key: string;
    value: string;
}

export interface CreateImageMetadata {
    $type: 'yandex.cloud.compute.v1.CreateImageMetadata';
    /** ID of the image that is being created. */
    imageId: string;
}

export interface UpdateImageRequest {
    $type: 'yandex.cloud.compute.v1.UpdateImageRequest';
    /**
     * ID of the Image resource to update.
     * To get the image ID, use a [ImageService.List] request.
     */
    imageId: string;
    /** Field mask that specifies which fields of the Image resource are going to be updated. */
    updateMask?: FieldMask;
    /** Name of the image. */
    name: string;
    /** Description of the image. */
    description: string;
    /**
     * Minimum size of the disk that can be created from this image.
     * Specified in bytes. Should be more than the volume of source data and more than the virtual disk size.
     */
    minDiskSize: number;
    /**
     * Resource labels as `key:value` pairs.
     *
     * Existing set of `labels` is completely replaced by the provided set.
     */
    labels: { [key: string]: string };
}

export interface UpdateImageRequest_LabelsEntry {
    $type: 'yandex.cloud.compute.v1.UpdateImageRequest.LabelsEntry';
    key: string;
    value: string;
}

export interface UpdateImageMetadata {
    $type: 'yandex.cloud.compute.v1.UpdateImageMetadata';
    /** ID of the Image resource that is being updated. */
    imageId: string;
}

export interface DeleteImageRequest {
    $type: 'yandex.cloud.compute.v1.DeleteImageRequest';
    /**
     * ID of the image to delete.
     * To get the image ID, use a [ImageService.List] request.
     */
    imageId: string;
}

export interface DeleteImageMetadata {
    $type: 'yandex.cloud.compute.v1.DeleteImageMetadata';
    /** ID of the image that is being deleted. */
    imageId: string;
}

export interface ListImageOperationsRequest {
    $type: 'yandex.cloud.compute.v1.ListImageOperationsRequest';
    /** ID of the Image resource to list operations for. */
    imageId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListImageOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListImageOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListImageOperationsResponse {
    $type: 'yandex.cloud.compute.v1.ListImageOperationsResponse';
    /** List of operations for the specified image. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListImageOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListImageOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetImageRequest: object = {
    $type: 'yandex.cloud.compute.v1.GetImageRequest',
    imageId: '',
};

export const GetImageRequest = {
    $type: 'yandex.cloud.compute.v1.GetImageRequest' as const,

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

const baseGetImageLatestByFamilyRequest: object = {
    $type: 'yandex.cloud.compute.v1.GetImageLatestByFamilyRequest',
    folderId: '',
    family: '',
};

export const GetImageLatestByFamilyRequest = {
    $type: 'yandex.cloud.compute.v1.GetImageLatestByFamilyRequest' as const,

    encode(
        message: GetImageLatestByFamilyRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.family !== '') {
            writer.uint32(18).string(message.family);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetImageLatestByFamilyRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetImageLatestByFamilyRequest } as GetImageLatestByFamilyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.family = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetImageLatestByFamilyRequest {
        const message = { ...baseGetImageLatestByFamilyRequest } as GetImageLatestByFamilyRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.family =
            object.family !== undefined && object.family !== null ? String(object.family) : '';
        return message;
    },

    toJSON(message: GetImageLatestByFamilyRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.family !== undefined && (obj.family = message.family);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetImageLatestByFamilyRequest>, I>>(
        object: I,
    ): GetImageLatestByFamilyRequest {
        const message = { ...baseGetImageLatestByFamilyRequest } as GetImageLatestByFamilyRequest;
        message.folderId = object.folderId ?? '';
        message.family = object.family ?? '';
        return message;
    },
};

messageTypeRegistry.set(GetImageLatestByFamilyRequest.$type, GetImageLatestByFamilyRequest);

const baseListImagesRequest: object = {
    $type: 'yandex.cloud.compute.v1.ListImagesRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
    orderBy: '',
};

export const ListImagesRequest = {
    $type: 'yandex.cloud.compute.v1.ListImagesRequest' as const,

    encode(message: ListImagesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
        if (message.orderBy !== '') {
            writer.uint32(42).string(message.orderBy);
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
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.filter = reader.string();
                    break;
                case 5:
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
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListImagesRequest>, I>>(object: I): ListImagesRequest {
        const message = { ...baseListImagesRequest } as ListImagesRequest;
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
    $type: 'yandex.cloud.compute.v1.ListImagesResponse',
    nextPageToken: '',
};

export const ListImagesResponse = {
    $type: 'yandex.cloud.compute.v1.ListImagesResponse' as const,

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

const baseCreateImageRequest: object = {
    $type: 'yandex.cloud.compute.v1.CreateImageRequest',
    folderId: '',
    name: '',
    description: '',
    family: '',
    minDiskSize: 0,
    productIds: '',
    pooled: false,
};

export const CreateImageRequest = {
    $type: 'yandex.cloud.compute.v1.CreateImageRequest' as const,

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
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateImageRequest_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.compute.v1.CreateImageRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        if (message.family !== '') {
            writer.uint32(42).string(message.family);
        }
        if (message.minDiskSize !== 0) {
            writer.uint32(48).int64(message.minDiskSize);
        }
        for (const v of message.productIds) {
            writer.uint32(58).string(v!);
        }
        if (message.imageId !== undefined) {
            writer.uint32(66).string(message.imageId);
        }
        if (message.diskId !== undefined) {
            writer.uint32(74).string(message.diskId);
        }
        if (message.snapshotId !== undefined) {
            writer.uint32(82).string(message.snapshotId);
        }
        if (message.uri !== undefined) {
            writer.uint32(90).string(message.uri);
        }
        if (message.os !== undefined) {
            Os.encode(message.os, writer.uint32(98).fork()).ldelim();
        }
        if (message.pooled === true) {
            writer.uint32(136).bool(message.pooled);
        }
        if (message.hardwareGeneration !== undefined) {
            HardwareGeneration.encode(
                message.hardwareGeneration,
                writer.uint32(146).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateImageRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateImageRequest } as CreateImageRequest;
        message.labels = {};
        message.productIds = [];
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
                case 4:
                    const entry4 = CreateImageRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.family = reader.string();
                    break;
                case 6:
                    message.minDiskSize = longToNumber(reader.int64() as Long);
                    break;
                case 7:
                    message.productIds.push(reader.string());
                    break;
                case 8:
                    message.imageId = reader.string();
                    break;
                case 9:
                    message.diskId = reader.string();
                    break;
                case 10:
                    message.snapshotId = reader.string();
                    break;
                case 11:
                    message.uri = reader.string();
                    break;
                case 12:
                    message.os = Os.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.pooled = reader.bool();
                    break;
                case 18:
                    message.hardwareGeneration = HardwareGeneration.decode(reader, reader.uint32());
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
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.family =
            object.family !== undefined && object.family !== null ? String(object.family) : '';
        message.minDiskSize =
            object.minDiskSize !== undefined && object.minDiskSize !== null
                ? Number(object.minDiskSize)
                : 0;
        message.productIds = (object.productIds ?? []).map((e: any) => String(e));
        message.imageId =
            object.imageId !== undefined && object.imageId !== null
                ? String(object.imageId)
                : undefined;
        message.diskId =
            object.diskId !== undefined && object.diskId !== null
                ? String(object.diskId)
                : undefined;
        message.snapshotId =
            object.snapshotId !== undefined && object.snapshotId !== null
                ? String(object.snapshotId)
                : undefined;
        message.uri =
            object.uri !== undefined && object.uri !== null ? String(object.uri) : undefined;
        message.os =
            object.os !== undefined && object.os !== null ? Os.fromJSON(object.os) : undefined;
        message.pooled =
            object.pooled !== undefined && object.pooled !== null ? Boolean(object.pooled) : false;
        message.hardwareGeneration =
            object.hardwareGeneration !== undefined && object.hardwareGeneration !== null
                ? HardwareGeneration.fromJSON(object.hardwareGeneration)
                : undefined;
        return message;
    },

    toJSON(message: CreateImageRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.family !== undefined && (obj.family = message.family);
        message.minDiskSize !== undefined && (obj.minDiskSize = Math.round(message.minDiskSize));
        if (message.productIds) {
            obj.productIds = message.productIds.map((e) => e);
        } else {
            obj.productIds = [];
        }
        message.imageId !== undefined && (obj.imageId = message.imageId);
        message.diskId !== undefined && (obj.diskId = message.diskId);
        message.snapshotId !== undefined && (obj.snapshotId = message.snapshotId);
        message.uri !== undefined && (obj.uri = message.uri);
        message.os !== undefined && (obj.os = message.os ? Os.toJSON(message.os) : undefined);
        message.pooled !== undefined && (obj.pooled = message.pooled);
        message.hardwareGeneration !== undefined &&
            (obj.hardwareGeneration = message.hardwareGeneration
                ? HardwareGeneration.toJSON(message.hardwareGeneration)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateImageRequest>, I>>(
        object: I,
    ): CreateImageRequest {
        const message = { ...baseCreateImageRequest } as CreateImageRequest;
        message.folderId = object.folderId ?? '';
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
        message.family = object.family ?? '';
        message.minDiskSize = object.minDiskSize ?? 0;
        message.productIds = object.productIds?.map((e) => e) || [];
        message.imageId = object.imageId ?? undefined;
        message.diskId = object.diskId ?? undefined;
        message.snapshotId = object.snapshotId ?? undefined;
        message.uri = object.uri ?? undefined;
        message.os =
            object.os !== undefined && object.os !== null ? Os.fromPartial(object.os) : undefined;
        message.pooled = object.pooled ?? false;
        message.hardwareGeneration =
            object.hardwareGeneration !== undefined && object.hardwareGeneration !== null
                ? HardwareGeneration.fromPartial(object.hardwareGeneration)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(CreateImageRequest.$type, CreateImageRequest);

const baseCreateImageRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.compute.v1.CreateImageRequest.LabelsEntry',
    key: '',
    value: '',
};

export const CreateImageRequest_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.CreateImageRequest.LabelsEntry' as const,

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

messageTypeRegistry.set(CreateImageRequest_LabelsEntry.$type, CreateImageRequest_LabelsEntry);

const baseCreateImageMetadata: object = {
    $type: 'yandex.cloud.compute.v1.CreateImageMetadata',
    imageId: '',
};

export const CreateImageMetadata = {
    $type: 'yandex.cloud.compute.v1.CreateImageMetadata' as const,

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

messageTypeRegistry.set(CreateImageMetadata.$type, CreateImageMetadata);

const baseUpdateImageRequest: object = {
    $type: 'yandex.cloud.compute.v1.UpdateImageRequest',
    imageId: '',
    name: '',
    description: '',
    minDiskSize: 0,
};

export const UpdateImageRequest = {
    $type: 'yandex.cloud.compute.v1.UpdateImageRequest' as const,

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
        if (message.minDiskSize !== 0) {
            writer.uint32(40).int64(message.minDiskSize);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateImageRequest_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.compute.v1.UpdateImageRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(50).fork(),
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
                case 5:
                    message.minDiskSize = longToNumber(reader.int64() as Long);
                    break;
                case 6:
                    const entry6 = UpdateImageRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
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
        message.minDiskSize =
            object.minDiskSize !== undefined && object.minDiskSize !== null
                ? Number(object.minDiskSize)
                : 0;
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
        message.minDiskSize !== undefined && (obj.minDiskSize = Math.round(message.minDiskSize));
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
        message.minDiskSize = object.minDiskSize ?? 0;
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

messageTypeRegistry.set(UpdateImageRequest.$type, UpdateImageRequest);

const baseUpdateImageRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.compute.v1.UpdateImageRequest.LabelsEntry',
    key: '',
    value: '',
};

export const UpdateImageRequest_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.UpdateImageRequest.LabelsEntry' as const,

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

messageTypeRegistry.set(UpdateImageRequest_LabelsEntry.$type, UpdateImageRequest_LabelsEntry);

const baseUpdateImageMetadata: object = {
    $type: 'yandex.cloud.compute.v1.UpdateImageMetadata',
    imageId: '',
};

export const UpdateImageMetadata = {
    $type: 'yandex.cloud.compute.v1.UpdateImageMetadata' as const,

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

messageTypeRegistry.set(UpdateImageMetadata.$type, UpdateImageMetadata);

const baseDeleteImageRequest: object = {
    $type: 'yandex.cloud.compute.v1.DeleteImageRequest',
    imageId: '',
};

export const DeleteImageRequest = {
    $type: 'yandex.cloud.compute.v1.DeleteImageRequest' as const,

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
    $type: 'yandex.cloud.compute.v1.DeleteImageMetadata',
    imageId: '',
};

export const DeleteImageMetadata = {
    $type: 'yandex.cloud.compute.v1.DeleteImageMetadata' as const,

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

const baseListImageOperationsRequest: object = {
    $type: 'yandex.cloud.compute.v1.ListImageOperationsRequest',
    imageId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListImageOperationsRequest = {
    $type: 'yandex.cloud.compute.v1.ListImageOperationsRequest' as const,

    encode(
        message: ListImageOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
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
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
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

messageTypeRegistry.set(ListImageOperationsRequest.$type, ListImageOperationsRequest);

const baseListImageOperationsResponse: object = {
    $type: 'yandex.cloud.compute.v1.ListImageOperationsResponse',
    nextPageToken: '',
};

export const ListImageOperationsResponse = {
    $type: 'yandex.cloud.compute.v1.ListImageOperationsResponse' as const,

    encode(
        message: ListImageOperationsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.operations) {
            Operation.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
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

messageTypeRegistry.set(ListImageOperationsResponse.$type, ListImageOperationsResponse);

/** A set of methods for managing Image resources. */
export const ImageServiceService = {
    /**
     * Returns the specified Image resource.
     *
     * To get the list of available Image resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.compute.v1.ImageService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetImageRequest) =>
            Buffer.from(GetImageRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetImageRequest.decode(value),
        responseSerialize: (value: Image) => Buffer.from(Image.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Image.decode(value),
    },
    /** Returns the latest image that is part of an image family. */
    getLatestByFamily: {
        path: '/yandex.cloud.compute.v1.ImageService/GetLatestByFamily',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetImageLatestByFamilyRequest) =>
            Buffer.from(GetImageLatestByFamilyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetImageLatestByFamilyRequest.decode(value),
        responseSerialize: (value: Image) => Buffer.from(Image.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Image.decode(value),
    },
    /** Retrieves the list of Image resources in the specified folder. */
    list: {
        path: '/yandex.cloud.compute.v1.ImageService/List',
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
     * Creates an image in the specified folder.
     *
     * You can create an image from a disk, snapshot, other image or URI.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: {
        path: '/yandex.cloud.compute.v1.ImageService/Create',
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
        path: '/yandex.cloud.compute.v1.ImageService/Update',
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
        path: '/yandex.cloud.compute.v1.ImageService/Delete',
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
        path: '/yandex.cloud.compute.v1.ImageService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListImageOperationsRequest) =>
            Buffer.from(ListImageOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListImageOperationsRequest.decode(value),
        responseSerialize: (value: ListImageOperationsResponse) =>
            Buffer.from(ListImageOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListImageOperationsResponse.decode(value),
    },
    /** Lists access bindings for the image. */
    listAccessBindings: {
        path: '/yandex.cloud.compute.v1.ImageService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessBindingsRequest) =>
            Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
        responseSerialize: (value: ListAccessBindingsResponse) =>
            Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the image. */
    setAccessBindings: {
        path: '/yandex.cloud.compute.v1.ImageService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetAccessBindingsRequest) =>
            Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates access bindings for the image. */
    updateAccessBindings: {
        path: '/yandex.cloud.compute.v1.ImageService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAccessBindingsRequest) =>
            Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface ImageServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Image resource.
     *
     * To get the list of available Image resources, make a [List] request.
     */
    get: handleUnaryCall<GetImageRequest, Image>;
    /** Returns the latest image that is part of an image family. */
    getLatestByFamily: handleUnaryCall<GetImageLatestByFamilyRequest, Image>;
    /** Retrieves the list of Image resources in the specified folder. */
    list: handleUnaryCall<ListImagesRequest, ListImagesResponse>;
    /**
     * Creates an image in the specified folder.
     *
     * You can create an image from a disk, snapshot, other image or URI.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
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
    /** Lists access bindings for the image. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the image. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the image. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface ImageServiceClient extends Client {
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
    /** Returns the latest image that is part of an image family. */
    getLatestByFamily(
        request: GetImageLatestByFamilyRequest,
        callback: (error: ServiceError | null, response: Image) => void,
    ): ClientUnaryCall;
    getLatestByFamily(
        request: GetImageLatestByFamilyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Image) => void,
    ): ClientUnaryCall;
    getLatestByFamily(
        request: GetImageLatestByFamilyRequest,
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
    /**
     * Creates an image in the specified folder.
     *
     * You can create an image from a disk, snapshot, other image or URI.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
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
    /** Lists access bindings for the image. */
    listAccessBindings(
        request: ListAccessBindingsRequest,
        callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void,
    ): ClientUnaryCall;
    /** Sets access bindings for the image. */
    setAccessBindings(
        request: SetAccessBindingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setAccessBindings(
        request: SetAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setAccessBindings(
        request: SetAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates access bindings for the image. */
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const ImageServiceClient = makeGenericClientConstructor(
    ImageServiceService,
    'yandex.cloud.compute.v1.ImageService',
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
