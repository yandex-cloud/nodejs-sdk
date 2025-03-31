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
import { ResourcesSpec } from '../../../../yandex/cloud/compute/v1/instance_service';
import { GpuSettings, NetworkSettings } from '../../../../yandex/cloud/compute/v1/instance';
import {
    BootDiskSpec,
    ReservedInstancePool,
} from '../../../../yandex/cloud/compute/v1/reserved_instance_pool';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.compute.v1';

export interface GetReservedInstancePoolRequest {
    /**
     * ID of the reserved instance pool resource to return.
     * To get the reserved instance pool ID, use a [ReservedInstancePoolService.List] request.
     */
    reservedInstancePoolId: string;
}

export interface ListReservedInstancePoolsRequest {
    /**
     * ID of the Folder to list reserved instance pools in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListReservedInstancePoolsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListReservedInstancePoolsResponse.next_page_token]
     * returned by a previous list request.
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
     */
    orderBy: string;
}

export interface ListReservedInstancePoolsResponse {
    /** List of reserved instance pool resources. */
    reservedInstancePools: ReservedInstancePool[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListReservedInstancePoolsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListReservedInstancePoolsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateReservedInstancePoolRequest {
    /** Name of the reserved instance pool. */
    name: string;
    /** Description of the reserved instance pool. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /**
     * ID of the availability zone where the reserved instance pool resides.
     * To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request
     */
    zoneId: string;
    /**
     * ID of the folder to create the reserved instance pool in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * ID of the hardware platform configuration for the reserved instance pool.
     * This field affects the available values in [resources_spec] field.
     *
     * For more information, see [Platforms](/docs/compute/concepts/vm-platforms).
     */
    platformId: string;
    /**
     * Computing resources of the reserved instance pool instances, such as the amount of memory and number of cores.
     * To get a list of available values, see [Levels of core performance](/docs/compute/concepts/performance-levels).
     */
    resourcesSpec?: ResourcesSpec;
    /** GPU settings. */
    gpuSettings?: GpuSettings;
    /** Spec is used to determine which License IDs should be allowed for instances created in the pool. */
    bootDiskSpec?: BootDiskSpec;
    /** Network settings. */
    networkSettings?: NetworkSettings;
    /** Desired size of the pool (number of slots for instances in this pool). */
    size: number;
}

export interface CreateReservedInstancePoolRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateReservedInstancePoolMetadata {
    /** ID of the reserved instance pool that is being created. */
    reservedInstancePoolId: string;
}

export interface UpdateReservedInstancePoolRequest {
    /**
     * ID of the reserved instance pool to update.
     * To get the reserved instance pool ID, use a [ReservedInstancePoolService.List] request.
     */
    reservedInstancePoolId: string;
    /** Field mask that specifies which fields of the reserved instance pool should be updated. */
    updateMask?: FieldMask;
    /** New name for the reserved instance pool. */
    name: string;
    /** Description of the reserved instance pool. */
    description: string;
    /**
     * Resource labels as `key:value` pairs.
     *
     * Existing set of `labels` is completely replaced by the provided set.
     */
    labels: { [key: string]: string };
    /** Desired size of the pool. */
    size: number;
}

export interface UpdateReservedInstancePoolRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateReservedInstancePoolMetadata {
    /** ID of the reserved instance pool that is being updated. */
    reservedInstancePoolId: string;
}

export interface DeleteReservedInstancePoolRequest {
    /**
     * ID of the reserved instance pool to delete.
     * To get the reserved instance pool ID, use a [ReservedInstancePoolService.List] request.
     */
    reservedInstancePoolId: string;
}

export interface DeleteReservedInstancePoolMetadata {
    /** ID of the reserved instance pool that is being deleted. */
    reservedInstancePoolId: string;
}

export interface DeleteReservedInstancePoolResponse {}

const baseGetReservedInstancePoolRequest: object = { reservedInstancePoolId: '' };

export const GetReservedInstancePoolRequest = {
    encode(
        message: GetReservedInstancePoolRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.reservedInstancePoolId !== '') {
            writer.uint32(10).string(message.reservedInstancePoolId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetReservedInstancePoolRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetReservedInstancePoolRequest } as GetReservedInstancePoolRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reservedInstancePoolId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetReservedInstancePoolRequest {
        const message = { ...baseGetReservedInstancePoolRequest } as GetReservedInstancePoolRequest;
        message.reservedInstancePoolId =
            object.reservedInstancePoolId !== undefined && object.reservedInstancePoolId !== null
                ? String(object.reservedInstancePoolId)
                : '';
        return message;
    },

    toJSON(message: GetReservedInstancePoolRequest): unknown {
        const obj: any = {};
        message.reservedInstancePoolId !== undefined &&
            (obj.reservedInstancePoolId = message.reservedInstancePoolId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetReservedInstancePoolRequest>, I>>(
        object: I,
    ): GetReservedInstancePoolRequest {
        const message = { ...baseGetReservedInstancePoolRequest } as GetReservedInstancePoolRequest;
        message.reservedInstancePoolId = object.reservedInstancePoolId ?? '';
        return message;
    },
};

const baseListReservedInstancePoolsRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
    orderBy: '',
};

export const ListReservedInstancePoolsRequest = {
    encode(
        message: ListReservedInstancePoolsRequest,
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
        if (message.orderBy !== '') {
            writer.uint32(42).string(message.orderBy);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListReservedInstancePoolsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListReservedInstancePoolsRequest,
        } as ListReservedInstancePoolsRequest;
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

    fromJSON(object: any): ListReservedInstancePoolsRequest {
        const message = {
            ...baseListReservedInstancePoolsRequest,
        } as ListReservedInstancePoolsRequest;
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

    toJSON(message: ListReservedInstancePoolsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListReservedInstancePoolsRequest>, I>>(
        object: I,
    ): ListReservedInstancePoolsRequest {
        const message = {
            ...baseListReservedInstancePoolsRequest,
        } as ListReservedInstancePoolsRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        message.orderBy = object.orderBy ?? '';
        return message;
    },
};

const baseListReservedInstancePoolsResponse: object = { nextPageToken: '' };

export const ListReservedInstancePoolsResponse = {
    encode(
        message: ListReservedInstancePoolsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.reservedInstancePools) {
            ReservedInstancePool.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListReservedInstancePoolsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListReservedInstancePoolsResponse,
        } as ListReservedInstancePoolsResponse;
        message.reservedInstancePools = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reservedInstancePools.push(
                        ReservedInstancePool.decode(reader, reader.uint32()),
                    );
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

    fromJSON(object: any): ListReservedInstancePoolsResponse {
        const message = {
            ...baseListReservedInstancePoolsResponse,
        } as ListReservedInstancePoolsResponse;
        message.reservedInstancePools = (object.reservedInstancePools ?? []).map((e: any) =>
            ReservedInstancePool.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListReservedInstancePoolsResponse): unknown {
        const obj: any = {};
        if (message.reservedInstancePools) {
            obj.reservedInstancePools = message.reservedInstancePools.map((e) =>
                e ? ReservedInstancePool.toJSON(e) : undefined,
            );
        } else {
            obj.reservedInstancePools = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListReservedInstancePoolsResponse>, I>>(
        object: I,
    ): ListReservedInstancePoolsResponse {
        const message = {
            ...baseListReservedInstancePoolsResponse,
        } as ListReservedInstancePoolsResponse;
        message.reservedInstancePools =
            object.reservedInstancePools?.map((e) => ReservedInstancePool.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateReservedInstancePoolRequest: object = {
    name: '',
    description: '',
    zoneId: '',
    folderId: '',
    platformId: '',
    size: 0,
};

export const CreateReservedInstancePoolRequest = {
    encode(
        message: CreateReservedInstancePoolRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateReservedInstancePoolRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(26).fork(),
            ).ldelim();
        });
        if (message.zoneId !== '') {
            writer.uint32(34).string(message.zoneId);
        }
        if (message.folderId !== '') {
            writer.uint32(42).string(message.folderId);
        }
        if (message.platformId !== '') {
            writer.uint32(50).string(message.platformId);
        }
        if (message.resourcesSpec !== undefined) {
            ResourcesSpec.encode(message.resourcesSpec, writer.uint32(58).fork()).ldelim();
        }
        if (message.gpuSettings !== undefined) {
            GpuSettings.encode(message.gpuSettings, writer.uint32(66).fork()).ldelim();
        }
        if (message.bootDiskSpec !== undefined) {
            BootDiskSpec.encode(message.bootDiskSpec, writer.uint32(74).fork()).ldelim();
        }
        if (message.networkSettings !== undefined) {
            NetworkSettings.encode(message.networkSettings, writer.uint32(82).fork()).ldelim();
        }
        if (message.size !== 0) {
            writer.uint32(88).int64(message.size);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateReservedInstancePoolRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateReservedInstancePoolRequest,
        } as CreateReservedInstancePoolRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    const entry3 = CreateReservedInstancePoolRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry3.value !== undefined) {
                        message.labels[entry3.key] = entry3.value;
                    }
                    break;
                case 4:
                    message.zoneId = reader.string();
                    break;
                case 5:
                    message.folderId = reader.string();
                    break;
                case 6:
                    message.platformId = reader.string();
                    break;
                case 7:
                    message.resourcesSpec = ResourcesSpec.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.gpuSettings = GpuSettings.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.bootDiskSpec = BootDiskSpec.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.networkSettings = NetworkSettings.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.size = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateReservedInstancePoolRequest {
        const message = {
            ...baseCreateReservedInstancePoolRequest,
        } as CreateReservedInstancePoolRequest;
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
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null ? String(object.zoneId) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.platformId =
            object.platformId !== undefined && object.platformId !== null
                ? String(object.platformId)
                : '';
        message.resourcesSpec =
            object.resourcesSpec !== undefined && object.resourcesSpec !== null
                ? ResourcesSpec.fromJSON(object.resourcesSpec)
                : undefined;
        message.gpuSettings =
            object.gpuSettings !== undefined && object.gpuSettings !== null
                ? GpuSettings.fromJSON(object.gpuSettings)
                : undefined;
        message.bootDiskSpec =
            object.bootDiskSpec !== undefined && object.bootDiskSpec !== null
                ? BootDiskSpec.fromJSON(object.bootDiskSpec)
                : undefined;
        message.networkSettings =
            object.networkSettings !== undefined && object.networkSettings !== null
                ? NetworkSettings.fromJSON(object.networkSettings)
                : undefined;
        message.size = object.size !== undefined && object.size !== null ? Number(object.size) : 0;
        return message;
    },

    toJSON(message: CreateReservedInstancePoolRequest): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.platformId !== undefined && (obj.platformId = message.platformId);
        message.resourcesSpec !== undefined &&
            (obj.resourcesSpec = message.resourcesSpec
                ? ResourcesSpec.toJSON(message.resourcesSpec)
                : undefined);
        message.gpuSettings !== undefined &&
            (obj.gpuSettings = message.gpuSettings
                ? GpuSettings.toJSON(message.gpuSettings)
                : undefined);
        message.bootDiskSpec !== undefined &&
            (obj.bootDiskSpec = message.bootDiskSpec
                ? BootDiskSpec.toJSON(message.bootDiskSpec)
                : undefined);
        message.networkSettings !== undefined &&
            (obj.networkSettings = message.networkSettings
                ? NetworkSettings.toJSON(message.networkSettings)
                : undefined);
        message.size !== undefined && (obj.size = Math.round(message.size));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateReservedInstancePoolRequest>, I>>(
        object: I,
    ): CreateReservedInstancePoolRequest {
        const message = {
            ...baseCreateReservedInstancePoolRequest,
        } as CreateReservedInstancePoolRequest;
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
        message.zoneId = object.zoneId ?? '';
        message.folderId = object.folderId ?? '';
        message.platformId = object.platformId ?? '';
        message.resourcesSpec =
            object.resourcesSpec !== undefined && object.resourcesSpec !== null
                ? ResourcesSpec.fromPartial(object.resourcesSpec)
                : undefined;
        message.gpuSettings =
            object.gpuSettings !== undefined && object.gpuSettings !== null
                ? GpuSettings.fromPartial(object.gpuSettings)
                : undefined;
        message.bootDiskSpec =
            object.bootDiskSpec !== undefined && object.bootDiskSpec !== null
                ? BootDiskSpec.fromPartial(object.bootDiskSpec)
                : undefined;
        message.networkSettings =
            object.networkSettings !== undefined && object.networkSettings !== null
                ? NetworkSettings.fromPartial(object.networkSettings)
                : undefined;
        message.size = object.size ?? 0;
        return message;
    },
};

const baseCreateReservedInstancePoolRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateReservedInstancePoolRequest_LabelsEntry = {
    encode(
        message: CreateReservedInstancePoolRequest_LabelsEntry,
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
    ): CreateReservedInstancePoolRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateReservedInstancePoolRequest_LabelsEntry,
        } as CreateReservedInstancePoolRequest_LabelsEntry;
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

    fromJSON(object: any): CreateReservedInstancePoolRequest_LabelsEntry {
        const message = {
            ...baseCreateReservedInstancePoolRequest_LabelsEntry,
        } as CreateReservedInstancePoolRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateReservedInstancePoolRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateReservedInstancePoolRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateReservedInstancePoolRequest_LabelsEntry {
        const message = {
            ...baseCreateReservedInstancePoolRequest_LabelsEntry,
        } as CreateReservedInstancePoolRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateReservedInstancePoolMetadata: object = { reservedInstancePoolId: '' };

export const CreateReservedInstancePoolMetadata = {
    encode(
        message: CreateReservedInstancePoolMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.reservedInstancePoolId !== '') {
            writer.uint32(10).string(message.reservedInstancePoolId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateReservedInstancePoolMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateReservedInstancePoolMetadata,
        } as CreateReservedInstancePoolMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reservedInstancePoolId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateReservedInstancePoolMetadata {
        const message = {
            ...baseCreateReservedInstancePoolMetadata,
        } as CreateReservedInstancePoolMetadata;
        message.reservedInstancePoolId =
            object.reservedInstancePoolId !== undefined && object.reservedInstancePoolId !== null
                ? String(object.reservedInstancePoolId)
                : '';
        return message;
    },

    toJSON(message: CreateReservedInstancePoolMetadata): unknown {
        const obj: any = {};
        message.reservedInstancePoolId !== undefined &&
            (obj.reservedInstancePoolId = message.reservedInstancePoolId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateReservedInstancePoolMetadata>, I>>(
        object: I,
    ): CreateReservedInstancePoolMetadata {
        const message = {
            ...baseCreateReservedInstancePoolMetadata,
        } as CreateReservedInstancePoolMetadata;
        message.reservedInstancePoolId = object.reservedInstancePoolId ?? '';
        return message;
    },
};

const baseUpdateReservedInstancePoolRequest: object = {
    reservedInstancePoolId: '',
    name: '',
    description: '',
    size: 0,
};

export const UpdateReservedInstancePoolRequest = {
    encode(
        message: UpdateReservedInstancePoolRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.reservedInstancePoolId !== '') {
            writer.uint32(10).string(message.reservedInstancePoolId);
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
            UpdateReservedInstancePoolRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        if (message.size !== 0) {
            writer.uint32(48).int64(message.size);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateReservedInstancePoolRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateReservedInstancePoolRequest,
        } as UpdateReservedInstancePoolRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reservedInstancePoolId = reader.string();
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
                    const entry5 = UpdateReservedInstancePoolRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.size = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateReservedInstancePoolRequest {
        const message = {
            ...baseUpdateReservedInstancePoolRequest,
        } as UpdateReservedInstancePoolRequest;
        message.reservedInstancePoolId =
            object.reservedInstancePoolId !== undefined && object.reservedInstancePoolId !== null
                ? String(object.reservedInstancePoolId)
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
        message.size = object.size !== undefined && object.size !== null ? Number(object.size) : 0;
        return message;
    },

    toJSON(message: UpdateReservedInstancePoolRequest): unknown {
        const obj: any = {};
        message.reservedInstancePoolId !== undefined &&
            (obj.reservedInstancePoolId = message.reservedInstancePoolId);
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
        message.size !== undefined && (obj.size = Math.round(message.size));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateReservedInstancePoolRequest>, I>>(
        object: I,
    ): UpdateReservedInstancePoolRequest {
        const message = {
            ...baseUpdateReservedInstancePoolRequest,
        } as UpdateReservedInstancePoolRequest;
        message.reservedInstancePoolId = object.reservedInstancePoolId ?? '';
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
        message.size = object.size ?? 0;
        return message;
    },
};

const baseUpdateReservedInstancePoolRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateReservedInstancePoolRequest_LabelsEntry = {
    encode(
        message: UpdateReservedInstancePoolRequest_LabelsEntry,
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
    ): UpdateReservedInstancePoolRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateReservedInstancePoolRequest_LabelsEntry,
        } as UpdateReservedInstancePoolRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateReservedInstancePoolRequest_LabelsEntry {
        const message = {
            ...baseUpdateReservedInstancePoolRequest_LabelsEntry,
        } as UpdateReservedInstancePoolRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateReservedInstancePoolRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateReservedInstancePoolRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateReservedInstancePoolRequest_LabelsEntry {
        const message = {
            ...baseUpdateReservedInstancePoolRequest_LabelsEntry,
        } as UpdateReservedInstancePoolRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateReservedInstancePoolMetadata: object = { reservedInstancePoolId: '' };

export const UpdateReservedInstancePoolMetadata = {
    encode(
        message: UpdateReservedInstancePoolMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.reservedInstancePoolId !== '') {
            writer.uint32(10).string(message.reservedInstancePoolId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateReservedInstancePoolMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateReservedInstancePoolMetadata,
        } as UpdateReservedInstancePoolMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reservedInstancePoolId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateReservedInstancePoolMetadata {
        const message = {
            ...baseUpdateReservedInstancePoolMetadata,
        } as UpdateReservedInstancePoolMetadata;
        message.reservedInstancePoolId =
            object.reservedInstancePoolId !== undefined && object.reservedInstancePoolId !== null
                ? String(object.reservedInstancePoolId)
                : '';
        return message;
    },

    toJSON(message: UpdateReservedInstancePoolMetadata): unknown {
        const obj: any = {};
        message.reservedInstancePoolId !== undefined &&
            (obj.reservedInstancePoolId = message.reservedInstancePoolId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateReservedInstancePoolMetadata>, I>>(
        object: I,
    ): UpdateReservedInstancePoolMetadata {
        const message = {
            ...baseUpdateReservedInstancePoolMetadata,
        } as UpdateReservedInstancePoolMetadata;
        message.reservedInstancePoolId = object.reservedInstancePoolId ?? '';
        return message;
    },
};

const baseDeleteReservedInstancePoolRequest: object = { reservedInstancePoolId: '' };

export const DeleteReservedInstancePoolRequest = {
    encode(
        message: DeleteReservedInstancePoolRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.reservedInstancePoolId !== '') {
            writer.uint32(10).string(message.reservedInstancePoolId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteReservedInstancePoolRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteReservedInstancePoolRequest,
        } as DeleteReservedInstancePoolRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reservedInstancePoolId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteReservedInstancePoolRequest {
        const message = {
            ...baseDeleteReservedInstancePoolRequest,
        } as DeleteReservedInstancePoolRequest;
        message.reservedInstancePoolId =
            object.reservedInstancePoolId !== undefined && object.reservedInstancePoolId !== null
                ? String(object.reservedInstancePoolId)
                : '';
        return message;
    },

    toJSON(message: DeleteReservedInstancePoolRequest): unknown {
        const obj: any = {};
        message.reservedInstancePoolId !== undefined &&
            (obj.reservedInstancePoolId = message.reservedInstancePoolId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteReservedInstancePoolRequest>, I>>(
        object: I,
    ): DeleteReservedInstancePoolRequest {
        const message = {
            ...baseDeleteReservedInstancePoolRequest,
        } as DeleteReservedInstancePoolRequest;
        message.reservedInstancePoolId = object.reservedInstancePoolId ?? '';
        return message;
    },
};

const baseDeleteReservedInstancePoolMetadata: object = { reservedInstancePoolId: '' };

export const DeleteReservedInstancePoolMetadata = {
    encode(
        message: DeleteReservedInstancePoolMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.reservedInstancePoolId !== '') {
            writer.uint32(10).string(message.reservedInstancePoolId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteReservedInstancePoolMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteReservedInstancePoolMetadata,
        } as DeleteReservedInstancePoolMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reservedInstancePoolId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteReservedInstancePoolMetadata {
        const message = {
            ...baseDeleteReservedInstancePoolMetadata,
        } as DeleteReservedInstancePoolMetadata;
        message.reservedInstancePoolId =
            object.reservedInstancePoolId !== undefined && object.reservedInstancePoolId !== null
                ? String(object.reservedInstancePoolId)
                : '';
        return message;
    },

    toJSON(message: DeleteReservedInstancePoolMetadata): unknown {
        const obj: any = {};
        message.reservedInstancePoolId !== undefined &&
            (obj.reservedInstancePoolId = message.reservedInstancePoolId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteReservedInstancePoolMetadata>, I>>(
        object: I,
    ): DeleteReservedInstancePoolMetadata {
        const message = {
            ...baseDeleteReservedInstancePoolMetadata,
        } as DeleteReservedInstancePoolMetadata;
        message.reservedInstancePoolId = object.reservedInstancePoolId ?? '';
        return message;
    },
};

const baseDeleteReservedInstancePoolResponse: object = {};

export const DeleteReservedInstancePoolResponse = {
    encode(
        _: DeleteReservedInstancePoolResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteReservedInstancePoolResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteReservedInstancePoolResponse,
        } as DeleteReservedInstancePoolResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): DeleteReservedInstancePoolResponse {
        const message = {
            ...baseDeleteReservedInstancePoolResponse,
        } as DeleteReservedInstancePoolResponse;
        return message;
    },

    toJSON(_: DeleteReservedInstancePoolResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteReservedInstancePoolResponse>, I>>(
        _: I,
    ): DeleteReservedInstancePoolResponse {
        const message = {
            ...baseDeleteReservedInstancePoolResponse,
        } as DeleteReservedInstancePoolResponse;
        return message;
    },
};

/** A set of methods for managing reserved instance pool resources. */
export const ReservedInstancePoolServiceService = {
    /**
     * Returns the specified reserved instance pool resource.
     *
     * To get the list of available reserved instance pool resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.compute.v1.ReservedInstancePoolService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetReservedInstancePoolRequest) =>
            Buffer.from(GetReservedInstancePoolRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetReservedInstancePoolRequest.decode(value),
        responseSerialize: (value: ReservedInstancePool) =>
            Buffer.from(ReservedInstancePool.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ReservedInstancePool.decode(value),
    },
    /** Retrieves the list of reserved instance pool resources in the specified folder. */
    list: {
        path: '/yandex.cloud.compute.v1.ReservedInstancePoolService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListReservedInstancePoolsRequest) =>
            Buffer.from(ListReservedInstancePoolsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListReservedInstancePoolsRequest.decode(value),
        responseSerialize: (value: ListReservedInstancePoolsResponse) =>
            Buffer.from(ListReservedInstancePoolsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListReservedInstancePoolsResponse.decode(value),
    },
    /**
     * Creates an reserved instance pool in the specified folder.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: {
        path: '/yandex.cloud.compute.v1.ReservedInstancePoolService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateReservedInstancePoolRequest) =>
            Buffer.from(CreateReservedInstancePoolRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateReservedInstancePoolRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified reserved instance pool. */
    update: {
        path: '/yandex.cloud.compute.v1.ReservedInstancePoolService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateReservedInstancePoolRequest) =>
            Buffer.from(UpdateReservedInstancePoolRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateReservedInstancePoolRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified reserved instance pool. */
    delete: {
        path: '/yandex.cloud.compute.v1.ReservedInstancePoolService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteReservedInstancePoolRequest) =>
            Buffer.from(DeleteReservedInstancePoolRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteReservedInstancePoolRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface ReservedInstancePoolServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified reserved instance pool resource.
     *
     * To get the list of available reserved instance pool resources, make a [List] request.
     */
    get: handleUnaryCall<GetReservedInstancePoolRequest, ReservedInstancePool>;
    /** Retrieves the list of reserved instance pool resources in the specified folder. */
    list: handleUnaryCall<ListReservedInstancePoolsRequest, ListReservedInstancePoolsResponse>;
    /**
     * Creates an reserved instance pool in the specified folder.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: handleUnaryCall<CreateReservedInstancePoolRequest, Operation>;
    /** Updates the specified reserved instance pool. */
    update: handleUnaryCall<UpdateReservedInstancePoolRequest, Operation>;
    /** Deletes the specified reserved instance pool. */
    delete: handleUnaryCall<DeleteReservedInstancePoolRequest, Operation>;
}

export interface ReservedInstancePoolServiceClient extends Client {
    /**
     * Returns the specified reserved instance pool resource.
     *
     * To get the list of available reserved instance pool resources, make a [List] request.
     */
    get(
        request: GetReservedInstancePoolRequest,
        callback: (error: ServiceError | null, response: ReservedInstancePool) => void,
    ): ClientUnaryCall;
    get(
        request: GetReservedInstancePoolRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ReservedInstancePool) => void,
    ): ClientUnaryCall;
    get(
        request: GetReservedInstancePoolRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ReservedInstancePool) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of reserved instance pool resources in the specified folder. */
    list(
        request: ListReservedInstancePoolsRequest,
        callback: (error: ServiceError | null, response: ListReservedInstancePoolsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListReservedInstancePoolsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListReservedInstancePoolsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListReservedInstancePoolsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListReservedInstancePoolsResponse) => void,
    ): ClientUnaryCall;
    /**
     * Creates an reserved instance pool in the specified folder.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create(
        request: CreateReservedInstancePoolRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateReservedInstancePoolRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateReservedInstancePoolRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified reserved instance pool. */
    update(
        request: UpdateReservedInstancePoolRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateReservedInstancePoolRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateReservedInstancePoolRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified reserved instance pool. */
    delete(
        request: DeleteReservedInstancePoolRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteReservedInstancePoolRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteReservedInstancePoolRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const ReservedInstancePoolServiceClient = makeGenericClientConstructor(
    ReservedInstancePoolServiceService,
    'yandex.cloud.compute.v1.ReservedInstancePoolService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ReservedInstancePoolServiceClient;
    service: typeof ReservedInstancePoolServiceService;
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
