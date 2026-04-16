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
import {
    ResourcesSpec,
    DesktopGroupConfiguration,
    NetworkInterfaceSpec,
    DesktopGroup,
} from '../../../../yandex/cloud/clouddesktop/v1/desktop_group';
import { DiskSpec } from '../../../../yandex/cloud/clouddesktop/v1/disk';
import { Desktop } from '../../../../yandex/cloud/clouddesktop/v1/desktop';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../../../yandex/cloud/access/access';

export const protobufPackage = 'yandex.cloud.clouddesktop.v1.api';

export interface GetDesktopGroupRequest {
    /**
     * ID of the desktop group resource to return.
     *
     * To get the desktop group ID use a [DesktopGroupService.List] request.
     */
    desktopGroupId: string;
}

export interface ListDesktopGroupsRequest {
    /**
     * ID of the folder to list desktop groups in.
     *
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListDesktopGroupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListDesktopGroupsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [DesktopGroup.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. Value or a list of values to compare against the values of the field.
     */
    filter: string;
    /**
     * Sorting the list by [DesktopGroup.name], [DesktopGroup.created_at] and [DesktopGroup.status] fields.
     * The default sorting order is ascending.
     */
    orderBy: string;
}

export interface ListDesktopGroupsResponse {
    /** List of desktop groups. */
    desktopGroups: DesktopGroup[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListDesktopGroupsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListDesktopGroupsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface ListDesktopGroupDesktopsRequest {
    /** ID of the desktop group. */
    desktopGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListDesktopGroupDesktopsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListDesktopGroupDesktopsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Desktop.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. Value or a list of values to compare against the values of the field.
     */
    filter: string;
    /**
     * Sorting the list by [Desktop.name], [Desktop.created_at] and [Desktop.status] fields.
     * The default sorting order is ascending.
     */
    orderBy: string;
}

export interface ListDesktopGroupDesktopsResponse {
    /** List of desktops. */
    desktops: Desktop[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListDesktopGroupDesktopsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListDesktopsDGS Request.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface ListDesktopGroupOperationsRequest {
    /** ID of the desktop group. */
    desktopGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListDesktopGroupOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListDesktopGroupOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * Sorting the list by [DesktopGroup.name] field.
     * The default sorting order is ascending.
     */
    filter: string;
}

export interface ListDesktopGroupOperationsResponse {
    /** List of operations for the specified desktop group. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListDesktopGroupOperationsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListDesktopGroupOperationsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface UpdateDesktopGroupRequest {
    updateMask?: FieldMask;
    desktopGroupId: string;
    desktopImageId: string;
    name: string;
    description: string;
    labels: { [key: string]: string };
    resourcesSpec?: ResourcesSpec;
    /** Configuration of the desktop group. */
    groupConfig?: DesktopGroupConfiguration;
    /** Boot disk specification of the desktop group. */
    bootDiskSpec?: DiskSpec;
    /** Data disk specification of the desktop group. */
    dataDiskSpec?: DiskSpec;
}

export interface UpdateDesktopGroupRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateDesktopGroupRequest {
    /**
     * ID of the folder to create a DesktopGroup in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** An image used to create a desktop boot disk */
    desktopImageId: string;
    /**
     * Name of the DesktopGroup.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the DesktopGroup. */
    description: string;
    /** Resource specification of the desktop group. */
    resourcesSpec?: ResourcesSpec;
    /** Network interface specification of the desktop group. */
    networkInterfaceSpec?: NetworkInterfaceSpec;
    /** Boot disk specification of the desktop group. */
    bootDiskSpec?: DiskSpec;
    /** Data disk specification of the desktop group. */
    dataDiskSpec?: DiskSpec;
    /** Configuration of the desktop group. */
    groupConfig?: DesktopGroupConfiguration;
}

export interface CreateDesktopGroupMetadata {
    /** ID of the desktop group that is being created. */
    desktopGroupId: string;
}

export interface DeleteDesktopGroupRequest {
    /**
     * ID of the desktop group to delete.
     *
     * To get a desktop group ID make a [DesktopGroupService.List] request.
     */
    desktopGroupId: string;
}

export interface DeleteDesktopGroupMetadata {
    /** ID of the desktop group that is being deleted. */
    desktopGroupId: string;
}

export interface UpdateDesktopGroupMetadata {
    /** ID of the desktop group that is being updated. */
    desktopGroupId: string;
}

const baseGetDesktopGroupRequest: object = { desktopGroupId: '' };

export const GetDesktopGroupRequest = {
    encode(message: GetDesktopGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.desktopGroupId !== '') {
            writer.uint32(10).string(message.desktopGroupId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetDesktopGroupRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetDesktopGroupRequest } as GetDesktopGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.desktopGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetDesktopGroupRequest {
        const message = { ...baseGetDesktopGroupRequest } as GetDesktopGroupRequest;
        message.desktopGroupId =
            object.desktopGroupId !== undefined && object.desktopGroupId !== null
                ? String(object.desktopGroupId)
                : '';
        return message;
    },

    toJSON(message: GetDesktopGroupRequest): unknown {
        const obj: any = {};
        message.desktopGroupId !== undefined && (obj.desktopGroupId = message.desktopGroupId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetDesktopGroupRequest>, I>>(
        object: I,
    ): GetDesktopGroupRequest {
        const message = { ...baseGetDesktopGroupRequest } as GetDesktopGroupRequest;
        message.desktopGroupId = object.desktopGroupId ?? '';
        return message;
    },
};

const baseListDesktopGroupsRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
    orderBy: '',
};

export const ListDesktopGroupsRequest = {
    encode(
        message: ListDesktopGroupsRequest,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListDesktopGroupsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListDesktopGroupsRequest } as ListDesktopGroupsRequest;
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

    fromJSON(object: any): ListDesktopGroupsRequest {
        const message = { ...baseListDesktopGroupsRequest } as ListDesktopGroupsRequest;
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

    toJSON(message: ListDesktopGroupsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListDesktopGroupsRequest>, I>>(
        object: I,
    ): ListDesktopGroupsRequest {
        const message = { ...baseListDesktopGroupsRequest } as ListDesktopGroupsRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        message.orderBy = object.orderBy ?? '';
        return message;
    },
};

const baseListDesktopGroupsResponse: object = { nextPageToken: '' };

export const ListDesktopGroupsResponse = {
    encode(
        message: ListDesktopGroupsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.desktopGroups) {
            DesktopGroup.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(178).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListDesktopGroupsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListDesktopGroupsResponse } as ListDesktopGroupsResponse;
        message.desktopGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.desktopGroups.push(DesktopGroup.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListDesktopGroupsResponse {
        const message = { ...baseListDesktopGroupsResponse } as ListDesktopGroupsResponse;
        message.desktopGroups = (object.desktopGroups ?? []).map((e: any) =>
            DesktopGroup.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListDesktopGroupsResponse): unknown {
        const obj: any = {};
        if (message.desktopGroups) {
            obj.desktopGroups = message.desktopGroups.map((e) =>
                e ? DesktopGroup.toJSON(e) : undefined,
            );
        } else {
            obj.desktopGroups = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListDesktopGroupsResponse>, I>>(
        object: I,
    ): ListDesktopGroupsResponse {
        const message = { ...baseListDesktopGroupsResponse } as ListDesktopGroupsResponse;
        message.desktopGroups = object.desktopGroups?.map((e) => DesktopGroup.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseListDesktopGroupDesktopsRequest: object = {
    desktopGroupId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
    orderBy: '',
};

export const ListDesktopGroupDesktopsRequest = {
    encode(
        message: ListDesktopGroupDesktopsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.desktopGroupId !== '') {
            writer.uint32(10).string(message.desktopGroupId);
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListDesktopGroupDesktopsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDesktopGroupDesktopsRequest,
        } as ListDesktopGroupDesktopsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.desktopGroupId = reader.string();
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

    fromJSON(object: any): ListDesktopGroupDesktopsRequest {
        const message = {
            ...baseListDesktopGroupDesktopsRequest,
        } as ListDesktopGroupDesktopsRequest;
        message.desktopGroupId =
            object.desktopGroupId !== undefined && object.desktopGroupId !== null
                ? String(object.desktopGroupId)
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

    toJSON(message: ListDesktopGroupDesktopsRequest): unknown {
        const obj: any = {};
        message.desktopGroupId !== undefined && (obj.desktopGroupId = message.desktopGroupId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListDesktopGroupDesktopsRequest>, I>>(
        object: I,
    ): ListDesktopGroupDesktopsRequest {
        const message = {
            ...baseListDesktopGroupDesktopsRequest,
        } as ListDesktopGroupDesktopsRequest;
        message.desktopGroupId = object.desktopGroupId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        message.orderBy = object.orderBy ?? '';
        return message;
    },
};

const baseListDesktopGroupDesktopsResponse: object = { nextPageToken: '' };

export const ListDesktopGroupDesktopsResponse = {
    encode(
        message: ListDesktopGroupDesktopsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.desktops) {
            Desktop.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(178).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListDesktopGroupDesktopsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDesktopGroupDesktopsResponse,
        } as ListDesktopGroupDesktopsResponse;
        message.desktops = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.desktops.push(Desktop.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListDesktopGroupDesktopsResponse {
        const message = {
            ...baseListDesktopGroupDesktopsResponse,
        } as ListDesktopGroupDesktopsResponse;
        message.desktops = (object.desktops ?? []).map((e: any) => Desktop.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListDesktopGroupDesktopsResponse): unknown {
        const obj: any = {};
        if (message.desktops) {
            obj.desktops = message.desktops.map((e) => (e ? Desktop.toJSON(e) : undefined));
        } else {
            obj.desktops = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListDesktopGroupDesktopsResponse>, I>>(
        object: I,
    ): ListDesktopGroupDesktopsResponse {
        const message = {
            ...baseListDesktopGroupDesktopsResponse,
        } as ListDesktopGroupDesktopsResponse;
        message.desktops = object.desktops?.map((e) => Desktop.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseListDesktopGroupOperationsRequest: object = {
    desktopGroupId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListDesktopGroupOperationsRequest = {
    encode(
        message: ListDesktopGroupOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.desktopGroupId !== '') {
            writer.uint32(10).string(message.desktopGroupId);
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
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListDesktopGroupOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDesktopGroupOperationsRequest,
        } as ListDesktopGroupOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.desktopGroupId = reader.string();
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListDesktopGroupOperationsRequest {
        const message = {
            ...baseListDesktopGroupOperationsRequest,
        } as ListDesktopGroupOperationsRequest;
        message.desktopGroupId =
            object.desktopGroupId !== undefined && object.desktopGroupId !== null
                ? String(object.desktopGroupId)
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

    toJSON(message: ListDesktopGroupOperationsRequest): unknown {
        const obj: any = {};
        message.desktopGroupId !== undefined && (obj.desktopGroupId = message.desktopGroupId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListDesktopGroupOperationsRequest>, I>>(
        object: I,
    ): ListDesktopGroupOperationsRequest {
        const message = {
            ...baseListDesktopGroupOperationsRequest,
        } as ListDesktopGroupOperationsRequest;
        message.desktopGroupId = object.desktopGroupId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListDesktopGroupOperationsResponse: object = { nextPageToken: '' };

export const ListDesktopGroupOperationsResponse = {
    encode(
        message: ListDesktopGroupOperationsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.operations) {
            Operation.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(178).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListDesktopGroupOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDesktopGroupOperationsResponse,
        } as ListDesktopGroupOperationsResponse;
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(Operation.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListDesktopGroupOperationsResponse {
        const message = {
            ...baseListDesktopGroupOperationsResponse,
        } as ListDesktopGroupOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListDesktopGroupOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListDesktopGroupOperationsResponse>, I>>(
        object: I,
    ): ListDesktopGroupOperationsResponse {
        const message = {
            ...baseListDesktopGroupOperationsResponse,
        } as ListDesktopGroupOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseUpdateDesktopGroupRequest: object = {
    desktopGroupId: '',
    desktopImageId: '',
    name: '',
    description: '',
};

export const UpdateDesktopGroupRequest = {
    encode(
        message: UpdateDesktopGroupRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(10).fork()).ldelim();
        }
        if (message.desktopGroupId !== '') {
            writer.uint32(18).string(message.desktopGroupId);
        }
        if (message.desktopImageId !== '') {
            writer.uint32(26).string(message.desktopImageId);
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateDesktopGroupRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        if (message.resourcesSpec !== undefined) {
            ResourcesSpec.encode(message.resourcesSpec, writer.uint32(58).fork()).ldelim();
        }
        if (message.groupConfig !== undefined) {
            DesktopGroupConfiguration.encode(
                message.groupConfig,
                writer.uint32(82).fork(),
            ).ldelim();
        }
        if (message.bootDiskSpec !== undefined) {
            DiskSpec.encode(message.bootDiskSpec, writer.uint32(90).fork()).ldelim();
        }
        if (message.dataDiskSpec !== undefined) {
            DiskSpec.encode(message.dataDiskSpec, writer.uint32(98).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDesktopGroupRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateDesktopGroupRequest } as UpdateDesktopGroupRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.desktopGroupId = reader.string();
                    break;
                case 3:
                    message.desktopImageId = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = UpdateDesktopGroupRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.resourcesSpec = ResourcesSpec.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.groupConfig = DesktopGroupConfiguration.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.bootDiskSpec = DiskSpec.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.dataDiskSpec = DiskSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateDesktopGroupRequest {
        const message = { ...baseUpdateDesktopGroupRequest } as UpdateDesktopGroupRequest;
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.desktopGroupId =
            object.desktopGroupId !== undefined && object.desktopGroupId !== null
                ? String(object.desktopGroupId)
                : '';
        message.desktopImageId =
            object.desktopImageId !== undefined && object.desktopImageId !== null
                ? String(object.desktopImageId)
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
        message.resourcesSpec =
            object.resourcesSpec !== undefined && object.resourcesSpec !== null
                ? ResourcesSpec.fromJSON(object.resourcesSpec)
                : undefined;
        message.groupConfig =
            object.groupConfig !== undefined && object.groupConfig !== null
                ? DesktopGroupConfiguration.fromJSON(object.groupConfig)
                : undefined;
        message.bootDiskSpec =
            object.bootDiskSpec !== undefined && object.bootDiskSpec !== null
                ? DiskSpec.fromJSON(object.bootDiskSpec)
                : undefined;
        message.dataDiskSpec =
            object.dataDiskSpec !== undefined && object.dataDiskSpec !== null
                ? DiskSpec.fromJSON(object.dataDiskSpec)
                : undefined;
        return message;
    },

    toJSON(message: UpdateDesktopGroupRequest): unknown {
        const obj: any = {};
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.desktopGroupId !== undefined && (obj.desktopGroupId = message.desktopGroupId);
        message.desktopImageId !== undefined && (obj.desktopImageId = message.desktopImageId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.resourcesSpec !== undefined &&
            (obj.resourcesSpec = message.resourcesSpec
                ? ResourcesSpec.toJSON(message.resourcesSpec)
                : undefined);
        message.groupConfig !== undefined &&
            (obj.groupConfig = message.groupConfig
                ? DesktopGroupConfiguration.toJSON(message.groupConfig)
                : undefined);
        message.bootDiskSpec !== undefined &&
            (obj.bootDiskSpec = message.bootDiskSpec
                ? DiskSpec.toJSON(message.bootDiskSpec)
                : undefined);
        message.dataDiskSpec !== undefined &&
            (obj.dataDiskSpec = message.dataDiskSpec
                ? DiskSpec.toJSON(message.dataDiskSpec)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateDesktopGroupRequest>, I>>(
        object: I,
    ): UpdateDesktopGroupRequest {
        const message = { ...baseUpdateDesktopGroupRequest } as UpdateDesktopGroupRequest;
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.desktopGroupId = object.desktopGroupId ?? '';
        message.desktopImageId = object.desktopImageId ?? '';
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
        message.resourcesSpec =
            object.resourcesSpec !== undefined && object.resourcesSpec !== null
                ? ResourcesSpec.fromPartial(object.resourcesSpec)
                : undefined;
        message.groupConfig =
            object.groupConfig !== undefined && object.groupConfig !== null
                ? DesktopGroupConfiguration.fromPartial(object.groupConfig)
                : undefined;
        message.bootDiskSpec =
            object.bootDiskSpec !== undefined && object.bootDiskSpec !== null
                ? DiskSpec.fromPartial(object.bootDiskSpec)
                : undefined;
        message.dataDiskSpec =
            object.dataDiskSpec !== undefined && object.dataDiskSpec !== null
                ? DiskSpec.fromPartial(object.dataDiskSpec)
                : undefined;
        return message;
    },
};

const baseUpdateDesktopGroupRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateDesktopGroupRequest_LabelsEntry = {
    encode(
        message: UpdateDesktopGroupRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDesktopGroupRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateDesktopGroupRequest_LabelsEntry,
        } as UpdateDesktopGroupRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateDesktopGroupRequest_LabelsEntry {
        const message = {
            ...baseUpdateDesktopGroupRequest_LabelsEntry,
        } as UpdateDesktopGroupRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateDesktopGroupRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateDesktopGroupRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateDesktopGroupRequest_LabelsEntry {
        const message = {
            ...baseUpdateDesktopGroupRequest_LabelsEntry,
        } as UpdateDesktopGroupRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateDesktopGroupRequest: object = {
    folderId: '',
    desktopImageId: '',
    name: '',
    description: '',
};

export const CreateDesktopGroupRequest = {
    encode(
        message: CreateDesktopGroupRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.desktopImageId !== '') {
            writer.uint32(26).string(message.desktopImageId);
        }
        if (message.name !== '') {
            writer.uint32(90).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(98).string(message.description);
        }
        if (message.resourcesSpec !== undefined) {
            ResourcesSpec.encode(message.resourcesSpec, writer.uint32(170).fork()).ldelim();
        }
        if (message.networkInterfaceSpec !== undefined) {
            NetworkInterfaceSpec.encode(
                message.networkInterfaceSpec,
                writer.uint32(178).fork(),
            ).ldelim();
        }
        if (message.bootDiskSpec !== undefined) {
            DiskSpec.encode(message.bootDiskSpec, writer.uint32(186).fork()).ldelim();
        }
        if (message.dataDiskSpec !== undefined) {
            DiskSpec.encode(message.dataDiskSpec, writer.uint32(194).fork()).ldelim();
        }
        if (message.groupConfig !== undefined) {
            DesktopGroupConfiguration.encode(
                message.groupConfig,
                writer.uint32(202).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateDesktopGroupRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateDesktopGroupRequest } as CreateDesktopGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.desktopImageId = reader.string();
                    break;
                case 11:
                    message.name = reader.string();
                    break;
                case 12:
                    message.description = reader.string();
                    break;
                case 21:
                    message.resourcesSpec = ResourcesSpec.decode(reader, reader.uint32());
                    break;
                case 22:
                    message.networkInterfaceSpec = NetworkInterfaceSpec.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 23:
                    message.bootDiskSpec = DiskSpec.decode(reader, reader.uint32());
                    break;
                case 24:
                    message.dataDiskSpec = DiskSpec.decode(reader, reader.uint32());
                    break;
                case 25:
                    message.groupConfig = DesktopGroupConfiguration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateDesktopGroupRequest {
        const message = { ...baseCreateDesktopGroupRequest } as CreateDesktopGroupRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.desktopImageId =
            object.desktopImageId !== undefined && object.desktopImageId !== null
                ? String(object.desktopImageId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.resourcesSpec =
            object.resourcesSpec !== undefined && object.resourcesSpec !== null
                ? ResourcesSpec.fromJSON(object.resourcesSpec)
                : undefined;
        message.networkInterfaceSpec =
            object.networkInterfaceSpec !== undefined && object.networkInterfaceSpec !== null
                ? NetworkInterfaceSpec.fromJSON(object.networkInterfaceSpec)
                : undefined;
        message.bootDiskSpec =
            object.bootDiskSpec !== undefined && object.bootDiskSpec !== null
                ? DiskSpec.fromJSON(object.bootDiskSpec)
                : undefined;
        message.dataDiskSpec =
            object.dataDiskSpec !== undefined && object.dataDiskSpec !== null
                ? DiskSpec.fromJSON(object.dataDiskSpec)
                : undefined;
        message.groupConfig =
            object.groupConfig !== undefined && object.groupConfig !== null
                ? DesktopGroupConfiguration.fromJSON(object.groupConfig)
                : undefined;
        return message;
    },

    toJSON(message: CreateDesktopGroupRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.desktopImageId !== undefined && (obj.desktopImageId = message.desktopImageId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.resourcesSpec !== undefined &&
            (obj.resourcesSpec = message.resourcesSpec
                ? ResourcesSpec.toJSON(message.resourcesSpec)
                : undefined);
        message.networkInterfaceSpec !== undefined &&
            (obj.networkInterfaceSpec = message.networkInterfaceSpec
                ? NetworkInterfaceSpec.toJSON(message.networkInterfaceSpec)
                : undefined);
        message.bootDiskSpec !== undefined &&
            (obj.bootDiskSpec = message.bootDiskSpec
                ? DiskSpec.toJSON(message.bootDiskSpec)
                : undefined);
        message.dataDiskSpec !== undefined &&
            (obj.dataDiskSpec = message.dataDiskSpec
                ? DiskSpec.toJSON(message.dataDiskSpec)
                : undefined);
        message.groupConfig !== undefined &&
            (obj.groupConfig = message.groupConfig
                ? DesktopGroupConfiguration.toJSON(message.groupConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateDesktopGroupRequest>, I>>(
        object: I,
    ): CreateDesktopGroupRequest {
        const message = { ...baseCreateDesktopGroupRequest } as CreateDesktopGroupRequest;
        message.folderId = object.folderId ?? '';
        message.desktopImageId = object.desktopImageId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.resourcesSpec =
            object.resourcesSpec !== undefined && object.resourcesSpec !== null
                ? ResourcesSpec.fromPartial(object.resourcesSpec)
                : undefined;
        message.networkInterfaceSpec =
            object.networkInterfaceSpec !== undefined && object.networkInterfaceSpec !== null
                ? NetworkInterfaceSpec.fromPartial(object.networkInterfaceSpec)
                : undefined;
        message.bootDiskSpec =
            object.bootDiskSpec !== undefined && object.bootDiskSpec !== null
                ? DiskSpec.fromPartial(object.bootDiskSpec)
                : undefined;
        message.dataDiskSpec =
            object.dataDiskSpec !== undefined && object.dataDiskSpec !== null
                ? DiskSpec.fromPartial(object.dataDiskSpec)
                : undefined;
        message.groupConfig =
            object.groupConfig !== undefined && object.groupConfig !== null
                ? DesktopGroupConfiguration.fromPartial(object.groupConfig)
                : undefined;
        return message;
    },
};

const baseCreateDesktopGroupMetadata: object = { desktopGroupId: '' };

export const CreateDesktopGroupMetadata = {
    encode(
        message: CreateDesktopGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.desktopGroupId !== '') {
            writer.uint32(10).string(message.desktopGroupId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateDesktopGroupMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateDesktopGroupMetadata } as CreateDesktopGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.desktopGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateDesktopGroupMetadata {
        const message = { ...baseCreateDesktopGroupMetadata } as CreateDesktopGroupMetadata;
        message.desktopGroupId =
            object.desktopGroupId !== undefined && object.desktopGroupId !== null
                ? String(object.desktopGroupId)
                : '';
        return message;
    },

    toJSON(message: CreateDesktopGroupMetadata): unknown {
        const obj: any = {};
        message.desktopGroupId !== undefined && (obj.desktopGroupId = message.desktopGroupId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateDesktopGroupMetadata>, I>>(
        object: I,
    ): CreateDesktopGroupMetadata {
        const message = { ...baseCreateDesktopGroupMetadata } as CreateDesktopGroupMetadata;
        message.desktopGroupId = object.desktopGroupId ?? '';
        return message;
    },
};

const baseDeleteDesktopGroupRequest: object = { desktopGroupId: '' };

export const DeleteDesktopGroupRequest = {
    encode(
        message: DeleteDesktopGroupRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.desktopGroupId !== '') {
            writer.uint32(10).string(message.desktopGroupId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDesktopGroupRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteDesktopGroupRequest } as DeleteDesktopGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.desktopGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteDesktopGroupRequest {
        const message = { ...baseDeleteDesktopGroupRequest } as DeleteDesktopGroupRequest;
        message.desktopGroupId =
            object.desktopGroupId !== undefined && object.desktopGroupId !== null
                ? String(object.desktopGroupId)
                : '';
        return message;
    },

    toJSON(message: DeleteDesktopGroupRequest): unknown {
        const obj: any = {};
        message.desktopGroupId !== undefined && (obj.desktopGroupId = message.desktopGroupId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteDesktopGroupRequest>, I>>(
        object: I,
    ): DeleteDesktopGroupRequest {
        const message = { ...baseDeleteDesktopGroupRequest } as DeleteDesktopGroupRequest;
        message.desktopGroupId = object.desktopGroupId ?? '';
        return message;
    },
};

const baseDeleteDesktopGroupMetadata: object = { desktopGroupId: '' };

export const DeleteDesktopGroupMetadata = {
    encode(
        message: DeleteDesktopGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.desktopGroupId !== '') {
            writer.uint32(10).string(message.desktopGroupId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteDesktopGroupMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteDesktopGroupMetadata } as DeleteDesktopGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.desktopGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteDesktopGroupMetadata {
        const message = { ...baseDeleteDesktopGroupMetadata } as DeleteDesktopGroupMetadata;
        message.desktopGroupId =
            object.desktopGroupId !== undefined && object.desktopGroupId !== null
                ? String(object.desktopGroupId)
                : '';
        return message;
    },

    toJSON(message: DeleteDesktopGroupMetadata): unknown {
        const obj: any = {};
        message.desktopGroupId !== undefined && (obj.desktopGroupId = message.desktopGroupId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteDesktopGroupMetadata>, I>>(
        object: I,
    ): DeleteDesktopGroupMetadata {
        const message = { ...baseDeleteDesktopGroupMetadata } as DeleteDesktopGroupMetadata;
        message.desktopGroupId = object.desktopGroupId ?? '';
        return message;
    },
};

const baseUpdateDesktopGroupMetadata: object = { desktopGroupId: '' };

export const UpdateDesktopGroupMetadata = {
    encode(
        message: UpdateDesktopGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.desktopGroupId !== '') {
            writer.uint32(10).string(message.desktopGroupId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDesktopGroupMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateDesktopGroupMetadata } as UpdateDesktopGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.desktopGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateDesktopGroupMetadata {
        const message = { ...baseUpdateDesktopGroupMetadata } as UpdateDesktopGroupMetadata;
        message.desktopGroupId =
            object.desktopGroupId !== undefined && object.desktopGroupId !== null
                ? String(object.desktopGroupId)
                : '';
        return message;
    },

    toJSON(message: UpdateDesktopGroupMetadata): unknown {
        const obj: any = {};
        message.desktopGroupId !== undefined && (obj.desktopGroupId = message.desktopGroupId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateDesktopGroupMetadata>, I>>(
        object: I,
    ): UpdateDesktopGroupMetadata {
        const message = { ...baseUpdateDesktopGroupMetadata } as UpdateDesktopGroupMetadata;
        message.desktopGroupId = object.desktopGroupId ?? '';
        return message;
    },
};

/** A set of methods for managing desktop group resources. */
export const DesktopGroupServiceService = {
    /**
     * Returns the specified desktop group resource.
     *
     * To get the list of available desktop groups, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.clouddesktop.v1.api.DesktopGroupService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetDesktopGroupRequest) =>
            Buffer.from(GetDesktopGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetDesktopGroupRequest.decode(value),
        responseSerialize: (value: DesktopGroup) =>
            Buffer.from(DesktopGroup.encode(value).finish()),
        responseDeserialize: (value: Buffer) => DesktopGroup.decode(value),
    },
    /** Retrieves the list of desktop group resources. */
    list: {
        path: '/yandex.cloud.clouddesktop.v1.api.DesktopGroupService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListDesktopGroupsRequest) =>
            Buffer.from(ListDesktopGroupsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListDesktopGroupsRequest.decode(value),
        responseSerialize: (value: ListDesktopGroupsResponse) =>
            Buffer.from(ListDesktopGroupsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListDesktopGroupsResponse.decode(value),
    },
    /** Retrieves the list of desktops resources. */
    listDesktops: {
        path: '/yandex.cloud.clouddesktop.v1.api.DesktopGroupService/ListDesktops',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListDesktopGroupDesktopsRequest) =>
            Buffer.from(ListDesktopGroupDesktopsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListDesktopGroupDesktopsRequest.decode(value),
        responseSerialize: (value: ListDesktopGroupDesktopsResponse) =>
            Buffer.from(ListDesktopGroupDesktopsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListDesktopGroupDesktopsResponse.decode(value),
    },
    /** Returns list of the operations for the specified desktop group. */
    listOperations: {
        path: '/yandex.cloud.clouddesktop.v1.api.DesktopGroupService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListDesktopGroupOperationsRequest) =>
            Buffer.from(ListDesktopGroupOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListDesktopGroupOperationsRequest.decode(value),
        responseSerialize: (value: ListDesktopGroupOperationsResponse) =>
            Buffer.from(ListDesktopGroupOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListDesktopGroupOperationsResponse.decode(value),
    },
    /** Creates desktop group in the specified folder. */
    create: {
        path: '/yandex.cloud.clouddesktop.v1.api.DesktopGroupService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateDesktopGroupRequest) =>
            Buffer.from(CreateDesktopGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateDesktopGroupRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates desktop group properties */
    update: {
        path: '/yandex.cloud.clouddesktop.v1.api.DesktopGroupService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateDesktopGroupRequest) =>
            Buffer.from(UpdateDesktopGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateDesktopGroupRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified desktop group. */
    delete: {
        path: '/yandex.cloud.clouddesktop.v1.api.DesktopGroupService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteDesktopGroupRequest) =>
            Buffer.from(DeleteDesktopGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteDesktopGroupRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Returns a list of the access bindings for the specified desktop group. */
    listAccessBindings: {
        path: '/yandex.cloud.clouddesktop.v1.api.DesktopGroupService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessBindingsRequest) =>
            Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
        responseSerialize: (value: ListAccessBindingsResponse) =>
            Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the specified desktop group. */
    setAccessBindings: {
        path: '/yandex.cloud.clouddesktop.v1.api.DesktopGroupService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetAccessBindingsRequest) =>
            Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates access bindings of the specified desktop group. */
    updateAccessBindings: {
        path: '/yandex.cloud.clouddesktop.v1.api.DesktopGroupService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAccessBindingsRequest) =>
            Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface DesktopGroupServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified desktop group resource.
     *
     * To get the list of available desktop groups, make a [List] request.
     */
    get: handleUnaryCall<GetDesktopGroupRequest, DesktopGroup>;
    /** Retrieves the list of desktop group resources. */
    list: handleUnaryCall<ListDesktopGroupsRequest, ListDesktopGroupsResponse>;
    /** Retrieves the list of desktops resources. */
    listDesktops: handleUnaryCall<
        ListDesktopGroupDesktopsRequest,
        ListDesktopGroupDesktopsResponse
    >;
    /** Returns list of the operations for the specified desktop group. */
    listOperations: handleUnaryCall<
        ListDesktopGroupOperationsRequest,
        ListDesktopGroupOperationsResponse
    >;
    /** Creates desktop group in the specified folder. */
    create: handleUnaryCall<CreateDesktopGroupRequest, Operation>;
    /** Updates desktop group properties */
    update: handleUnaryCall<UpdateDesktopGroupRequest, Operation>;
    /** Deletes the specified desktop group. */
    delete: handleUnaryCall<DeleteDesktopGroupRequest, Operation>;
    /** Returns a list of the access bindings for the specified desktop group. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the specified desktop group. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings of the specified desktop group. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface DesktopGroupServiceClient extends Client {
    /**
     * Returns the specified desktop group resource.
     *
     * To get the list of available desktop groups, make a [List] request.
     */
    get(
        request: GetDesktopGroupRequest,
        callback: (error: ServiceError | null, response: DesktopGroup) => void,
    ): ClientUnaryCall;
    get(
        request: GetDesktopGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: DesktopGroup) => void,
    ): ClientUnaryCall;
    get(
        request: GetDesktopGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: DesktopGroup) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of desktop group resources. */
    list(
        request: ListDesktopGroupsRequest,
        callback: (error: ServiceError | null, response: ListDesktopGroupsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListDesktopGroupsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListDesktopGroupsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListDesktopGroupsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListDesktopGroupsResponse) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of desktops resources. */
    listDesktops(
        request: ListDesktopGroupDesktopsRequest,
        callback: (error: ServiceError | null, response: ListDesktopGroupDesktopsResponse) => void,
    ): ClientUnaryCall;
    listDesktops(
        request: ListDesktopGroupDesktopsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListDesktopGroupDesktopsResponse) => void,
    ): ClientUnaryCall;
    listDesktops(
        request: ListDesktopGroupDesktopsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListDesktopGroupDesktopsResponse) => void,
    ): ClientUnaryCall;
    /** Returns list of the operations for the specified desktop group. */
    listOperations(
        request: ListDesktopGroupOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListDesktopGroupOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListDesktopGroupOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListDesktopGroupOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListDesktopGroupOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListDesktopGroupOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
    /** Creates desktop group in the specified folder. */
    create(
        request: CreateDesktopGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateDesktopGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateDesktopGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates desktop group properties */
    update(
        request: UpdateDesktopGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateDesktopGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateDesktopGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified desktop group. */
    delete(
        request: DeleteDesktopGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteDesktopGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteDesktopGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Returns a list of the access bindings for the specified desktop group. */
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
    /** Sets access bindings for the specified desktop group. */
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
    /** Updates access bindings of the specified desktop group. */
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

export const DesktopGroupServiceClient = makeGenericClientConstructor(
    DesktopGroupServiceService,
    'yandex.cloud.clouddesktop.v1.api.DesktopGroupService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): DesktopGroupServiceClient;
    service: typeof DesktopGroupServiceService;
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
