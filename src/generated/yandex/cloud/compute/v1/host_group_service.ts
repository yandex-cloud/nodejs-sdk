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
import {
    MaintenancePolicy,
    maintenancePolicyFromJSON,
    maintenancePolicyToJSON,
} from '../../../../yandex/cloud/compute/v1/maintenance';
import { ScalePolicy, HostGroup, Host } from '../../../../yandex/cloud/compute/v1/host_group';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { Instance } from '../../../../yandex/cloud/compute/v1/instance';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../../../yandex/cloud/access/access';

export const protobufPackage = 'yandex.cloud.compute.v1';

export interface GetHostGroupRequest {
    /**
     * ID of the host group to return.
     * To get the host group ID, use [HostGroupService.List] request.
     */
    hostGroupId: string;
}

export interface ListHostGroupsRequest {
    /**
     * ID of the folder to list host groups in.
     * To get the folder ID, use [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListHostGroupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListHostGroupsResponse.next_page_token]
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
     * The default sorting order is ascending
     */
    orderBy: string;
}

export interface ListHostGroupsResponse {
    /** Lists host groups for the specified folder. */
    hostGroups: HostGroup[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListHostGroupsRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListHostGroupsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateHostGroupRequest {
    /**
     * ID of the folder to create a host group in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Name of the group. */
    name: string;
    /** Description of the group. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** Availability zone where all dedicated hosts will be allocated. */
    zoneId: string;
    /** ID of host type. Resources provided by each host of the group. */
    typeId: string;
    /** Behaviour on maintenance events. */
    maintenancePolicy: MaintenancePolicy;
    /** Scale policy. Only fixed number of hosts are supported at this moment. */
    scalePolicy?: ScalePolicy;
}

export interface CreateHostGroupRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateHostGroupMetadata {
    /** ID of the host group that is being created. */
    hostGroupId: string;
}

export interface UpdateHostGroupRequest {
    /**
     * ID of the host group to update.
     * To get the host group ID, use an [HostGroupService.List] request.
     */
    hostGroupId: string;
    /** Field mask that specifies which fields of the HostGroup resource are going to be updated. */
    updateMask?: FieldMask;
    /** Name of the group. */
    name: string;
    /** Description of the group. */
    description: string;
    /**
     * Resource labels as `key:value` pairs.
     *
     * The existing set of `labels` is completely replaced by the provided set.
     */
    labels: { [key: string]: string };
    /** Behaviour on maintenance events */
    maintenancePolicy: MaintenancePolicy;
    /** Scale policy. Only fixed number of hosts are supported at this moment. */
    scalePolicy?: ScalePolicy;
}

export interface UpdateHostGroupRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateHostGroupMetadata {
    /** ID of the host group that is being updated. */
    hostGroupId: string;
}

export interface DeleteHostGroupRequest {
    /**
     * ID of the host group to delete.
     * To get the host group ID, use [HostGroupService.List] request.
     */
    hostGroupId: string;
}

export interface DeleteHostGroupMetadata {
    /** ID of the host group that is being deleted. */
    hostGroupId: string;
}

export interface ListHostGroupInstancesRequest {
    /**
     * ID of the host group to list instances for.
     * To get the host group ID, use [HostGroupService.List] request.
     */
    hostGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListHostGroupInstancesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListHostGroupInstancesResponse.next_page_token]
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
     * Currently you can use filtering only on the [Host.id] field.
     * To get the host ID, use [HostGroupService.ListHosts] request.
     */
    filter: string;
}

export interface ListHostGroupInstancesResponse {
    /** Lists instances for the specified host group. */
    instances: Instance[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is more than [ListHostGroupInstancesRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListHostGroupInstancesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface ListHostGroupHostsRequest {
    /**
     * ID of the host group to list hosts for.
     * To get the host group ID, use [HostGroupService.List] request.
     */
    hostGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListHostGroupHostsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListHostGroupHostsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}

export interface ListHostGroupHostsResponse {
    /** Lists hosts for the specified host group. */
    hosts: Host[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is more than [ListHostGroupHostsRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListHostGroupHostsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface UpdateHostGroupHostRequest {
    /** ID of the host group to update. */
    hostGroupId: string;
    /** ID of the host to update. */
    hostId: string;
    /** Field mask that specifies which fields of the Host are going to be updated. */
    updateMask?: FieldMask;
    /**
     * The date and time when this host will be automatically freed of instances.
     * Timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    deadlineAt?: Date;
}

export interface UpdateHostGroupHostMetadata {
    /** ID of the host group that is being updated. */
    hostGroupId: string;
    /** ID of the host that is being updated. */
    hostId: string;
}

export interface ListHostGroupOperationsRequest {
    /**
     * ID of the host group to list operations for.
     * To get the host group ID, use [HostGroupService.List] request.
     */
    hostGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListHostGroupOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListHostGroupOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListHostGroupOperationsResponse {
    /** List of operations for the specified host group. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListHostGroupOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListHostGroupOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetHostGroupRequest: object = { hostGroupId: '' };

export const GetHostGroupRequest = {
    encode(message: GetHostGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.hostGroupId !== '') {
            writer.uint32(10).string(message.hostGroupId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetHostGroupRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetHostGroupRequest } as GetHostGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetHostGroupRequest {
        const message = { ...baseGetHostGroupRequest } as GetHostGroupRequest;
        message.hostGroupId =
            object.hostGroupId !== undefined && object.hostGroupId !== null
                ? String(object.hostGroupId)
                : '';
        return message;
    },

    toJSON(message: GetHostGroupRequest): unknown {
        const obj: any = {};
        message.hostGroupId !== undefined && (obj.hostGroupId = message.hostGroupId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetHostGroupRequest>, I>>(
        object: I,
    ): GetHostGroupRequest {
        const message = { ...baseGetHostGroupRequest } as GetHostGroupRequest;
        message.hostGroupId = object.hostGroupId ?? '';
        return message;
    },
};

const baseListHostGroupsRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
    orderBy: '',
};

export const ListHostGroupsRequest = {
    encode(message: ListHostGroupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListHostGroupsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListHostGroupsRequest } as ListHostGroupsRequest;
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

    fromJSON(object: any): ListHostGroupsRequest {
        const message = { ...baseListHostGroupsRequest } as ListHostGroupsRequest;
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

    toJSON(message: ListHostGroupsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListHostGroupsRequest>, I>>(
        object: I,
    ): ListHostGroupsRequest {
        const message = { ...baseListHostGroupsRequest } as ListHostGroupsRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        message.orderBy = object.orderBy ?? '';
        return message;
    },
};

const baseListHostGroupsResponse: object = { nextPageToken: '' };

export const ListHostGroupsResponse = {
    encode(message: ListHostGroupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.hostGroups) {
            HostGroup.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListHostGroupsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListHostGroupsResponse } as ListHostGroupsResponse;
        message.hostGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroups.push(HostGroup.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListHostGroupsResponse {
        const message = { ...baseListHostGroupsResponse } as ListHostGroupsResponse;
        message.hostGroups = (object.hostGroups ?? []).map((e: any) => HostGroup.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListHostGroupsResponse): unknown {
        const obj: any = {};
        if (message.hostGroups) {
            obj.hostGroups = message.hostGroups.map((e) => (e ? HostGroup.toJSON(e) : undefined));
        } else {
            obj.hostGroups = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListHostGroupsResponse>, I>>(
        object: I,
    ): ListHostGroupsResponse {
        const message = { ...baseListHostGroupsResponse } as ListHostGroupsResponse;
        message.hostGroups = object.hostGroups?.map((e) => HostGroup.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateHostGroupRequest: object = {
    folderId: '',
    name: '',
    description: '',
    zoneId: '',
    typeId: '',
    maintenancePolicy: 0,
};

export const CreateHostGroupRequest = {
    encode(message: CreateHostGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
            CreateHostGroupRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        if (message.zoneId !== '') {
            writer.uint32(42).string(message.zoneId);
        }
        if (message.typeId !== '') {
            writer.uint32(50).string(message.typeId);
        }
        if (message.maintenancePolicy !== 0) {
            writer.uint32(56).int32(message.maintenancePolicy);
        }
        if (message.scalePolicy !== undefined) {
            ScalePolicy.encode(message.scalePolicy, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateHostGroupRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateHostGroupRequest } as CreateHostGroupRequest;
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
                case 4:
                    const entry4 = CreateHostGroupRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.zoneId = reader.string();
                    break;
                case 6:
                    message.typeId = reader.string();
                    break;
                case 7:
                    message.maintenancePolicy = reader.int32() as any;
                    break;
                case 8:
                    message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateHostGroupRequest {
        const message = { ...baseCreateHostGroupRequest } as CreateHostGroupRequest;
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
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null ? String(object.zoneId) : '';
        message.typeId =
            object.typeId !== undefined && object.typeId !== null ? String(object.typeId) : '';
        message.maintenancePolicy =
            object.maintenancePolicy !== undefined && object.maintenancePolicy !== null
                ? maintenancePolicyFromJSON(object.maintenancePolicy)
                : 0;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? ScalePolicy.fromJSON(object.scalePolicy)
                : undefined;
        return message;
    },

    toJSON(message: CreateHostGroupRequest): unknown {
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
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.typeId !== undefined && (obj.typeId = message.typeId);
        message.maintenancePolicy !== undefined &&
            (obj.maintenancePolicy = maintenancePolicyToJSON(message.maintenancePolicy));
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateHostGroupRequest>, I>>(
        object: I,
    ): CreateHostGroupRequest {
        const message = { ...baseCreateHostGroupRequest } as CreateHostGroupRequest;
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
        message.zoneId = object.zoneId ?? '';
        message.typeId = object.typeId ?? '';
        message.maintenancePolicy = object.maintenancePolicy ?? 0;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? ScalePolicy.fromPartial(object.scalePolicy)
                : undefined;
        return message;
    },
};

const baseCreateHostGroupRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateHostGroupRequest_LabelsEntry = {
    encode(
        message: CreateHostGroupRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateHostGroupRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateHostGroupRequest_LabelsEntry,
        } as CreateHostGroupRequest_LabelsEntry;
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

    fromJSON(object: any): CreateHostGroupRequest_LabelsEntry {
        const message = {
            ...baseCreateHostGroupRequest_LabelsEntry,
        } as CreateHostGroupRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateHostGroupRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateHostGroupRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateHostGroupRequest_LabelsEntry {
        const message = {
            ...baseCreateHostGroupRequest_LabelsEntry,
        } as CreateHostGroupRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateHostGroupMetadata: object = { hostGroupId: '' };

export const CreateHostGroupMetadata = {
    encode(message: CreateHostGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.hostGroupId !== '') {
            writer.uint32(10).string(message.hostGroupId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateHostGroupMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateHostGroupMetadata } as CreateHostGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateHostGroupMetadata {
        const message = { ...baseCreateHostGroupMetadata } as CreateHostGroupMetadata;
        message.hostGroupId =
            object.hostGroupId !== undefined && object.hostGroupId !== null
                ? String(object.hostGroupId)
                : '';
        return message;
    },

    toJSON(message: CreateHostGroupMetadata): unknown {
        const obj: any = {};
        message.hostGroupId !== undefined && (obj.hostGroupId = message.hostGroupId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateHostGroupMetadata>, I>>(
        object: I,
    ): CreateHostGroupMetadata {
        const message = { ...baseCreateHostGroupMetadata } as CreateHostGroupMetadata;
        message.hostGroupId = object.hostGroupId ?? '';
        return message;
    },
};

const baseUpdateHostGroupRequest: object = {
    hostGroupId: '',
    name: '',
    description: '',
    maintenancePolicy: 0,
};

export const UpdateHostGroupRequest = {
    encode(message: UpdateHostGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.hostGroupId !== '') {
            writer.uint32(10).string(message.hostGroupId);
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
            UpdateHostGroupRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        if (message.maintenancePolicy !== 0) {
            writer.uint32(48).int32(message.maintenancePolicy);
        }
        if (message.scalePolicy !== undefined) {
            ScalePolicy.encode(message.scalePolicy, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateHostGroupRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateHostGroupRequest } as UpdateHostGroupRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroupId = reader.string();
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
                    const entry5 = UpdateHostGroupRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.maintenancePolicy = reader.int32() as any;
                    break;
                case 7:
                    message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateHostGroupRequest {
        const message = { ...baseUpdateHostGroupRequest } as UpdateHostGroupRequest;
        message.hostGroupId =
            object.hostGroupId !== undefined && object.hostGroupId !== null
                ? String(object.hostGroupId)
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
        message.maintenancePolicy =
            object.maintenancePolicy !== undefined && object.maintenancePolicy !== null
                ? maintenancePolicyFromJSON(object.maintenancePolicy)
                : 0;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? ScalePolicy.fromJSON(object.scalePolicy)
                : undefined;
        return message;
    },

    toJSON(message: UpdateHostGroupRequest): unknown {
        const obj: any = {};
        message.hostGroupId !== undefined && (obj.hostGroupId = message.hostGroupId);
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
        message.maintenancePolicy !== undefined &&
            (obj.maintenancePolicy = maintenancePolicyToJSON(message.maintenancePolicy));
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateHostGroupRequest>, I>>(
        object: I,
    ): UpdateHostGroupRequest {
        const message = { ...baseUpdateHostGroupRequest } as UpdateHostGroupRequest;
        message.hostGroupId = object.hostGroupId ?? '';
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
        message.maintenancePolicy = object.maintenancePolicy ?? 0;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? ScalePolicy.fromPartial(object.scalePolicy)
                : undefined;
        return message;
    },
};

const baseUpdateHostGroupRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateHostGroupRequest_LabelsEntry = {
    encode(
        message: UpdateHostGroupRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateHostGroupRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateHostGroupRequest_LabelsEntry,
        } as UpdateHostGroupRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateHostGroupRequest_LabelsEntry {
        const message = {
            ...baseUpdateHostGroupRequest_LabelsEntry,
        } as UpdateHostGroupRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateHostGroupRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateHostGroupRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateHostGroupRequest_LabelsEntry {
        const message = {
            ...baseUpdateHostGroupRequest_LabelsEntry,
        } as UpdateHostGroupRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateHostGroupMetadata: object = { hostGroupId: '' };

export const UpdateHostGroupMetadata = {
    encode(message: UpdateHostGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.hostGroupId !== '') {
            writer.uint32(10).string(message.hostGroupId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateHostGroupMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateHostGroupMetadata } as UpdateHostGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateHostGroupMetadata {
        const message = { ...baseUpdateHostGroupMetadata } as UpdateHostGroupMetadata;
        message.hostGroupId =
            object.hostGroupId !== undefined && object.hostGroupId !== null
                ? String(object.hostGroupId)
                : '';
        return message;
    },

    toJSON(message: UpdateHostGroupMetadata): unknown {
        const obj: any = {};
        message.hostGroupId !== undefined && (obj.hostGroupId = message.hostGroupId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateHostGroupMetadata>, I>>(
        object: I,
    ): UpdateHostGroupMetadata {
        const message = { ...baseUpdateHostGroupMetadata } as UpdateHostGroupMetadata;
        message.hostGroupId = object.hostGroupId ?? '';
        return message;
    },
};

const baseDeleteHostGroupRequest: object = { hostGroupId: '' };

export const DeleteHostGroupRequest = {
    encode(message: DeleteHostGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.hostGroupId !== '') {
            writer.uint32(10).string(message.hostGroupId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteHostGroupRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteHostGroupRequest } as DeleteHostGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteHostGroupRequest {
        const message = { ...baseDeleteHostGroupRequest } as DeleteHostGroupRequest;
        message.hostGroupId =
            object.hostGroupId !== undefined && object.hostGroupId !== null
                ? String(object.hostGroupId)
                : '';
        return message;
    },

    toJSON(message: DeleteHostGroupRequest): unknown {
        const obj: any = {};
        message.hostGroupId !== undefined && (obj.hostGroupId = message.hostGroupId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteHostGroupRequest>, I>>(
        object: I,
    ): DeleteHostGroupRequest {
        const message = { ...baseDeleteHostGroupRequest } as DeleteHostGroupRequest;
        message.hostGroupId = object.hostGroupId ?? '';
        return message;
    },
};

const baseDeleteHostGroupMetadata: object = { hostGroupId: '' };

export const DeleteHostGroupMetadata = {
    encode(message: DeleteHostGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.hostGroupId !== '') {
            writer.uint32(10).string(message.hostGroupId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteHostGroupMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteHostGroupMetadata } as DeleteHostGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteHostGroupMetadata {
        const message = { ...baseDeleteHostGroupMetadata } as DeleteHostGroupMetadata;
        message.hostGroupId =
            object.hostGroupId !== undefined && object.hostGroupId !== null
                ? String(object.hostGroupId)
                : '';
        return message;
    },

    toJSON(message: DeleteHostGroupMetadata): unknown {
        const obj: any = {};
        message.hostGroupId !== undefined && (obj.hostGroupId = message.hostGroupId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteHostGroupMetadata>, I>>(
        object: I,
    ): DeleteHostGroupMetadata {
        const message = { ...baseDeleteHostGroupMetadata } as DeleteHostGroupMetadata;
        message.hostGroupId = object.hostGroupId ?? '';
        return message;
    },
};

const baseListHostGroupInstancesRequest: object = {
    hostGroupId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListHostGroupInstancesRequest = {
    encode(
        message: ListHostGroupInstancesRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.hostGroupId !== '') {
            writer.uint32(10).string(message.hostGroupId);
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListHostGroupInstancesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListHostGroupInstancesRequest } as ListHostGroupInstancesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroupId = reader.string();
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

    fromJSON(object: any): ListHostGroupInstancesRequest {
        const message = { ...baseListHostGroupInstancesRequest } as ListHostGroupInstancesRequest;
        message.hostGroupId =
            object.hostGroupId !== undefined && object.hostGroupId !== null
                ? String(object.hostGroupId)
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

    toJSON(message: ListHostGroupInstancesRequest): unknown {
        const obj: any = {};
        message.hostGroupId !== undefined && (obj.hostGroupId = message.hostGroupId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListHostGroupInstancesRequest>, I>>(
        object: I,
    ): ListHostGroupInstancesRequest {
        const message = { ...baseListHostGroupInstancesRequest } as ListHostGroupInstancesRequest;
        message.hostGroupId = object.hostGroupId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListHostGroupInstancesResponse: object = { nextPageToken: '' };

export const ListHostGroupInstancesResponse = {
    encode(
        message: ListHostGroupInstancesResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.instances) {
            Instance.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListHostGroupInstancesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListHostGroupInstancesResponse } as ListHostGroupInstancesResponse;
        message.instances = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instances.push(Instance.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListHostGroupInstancesResponse {
        const message = { ...baseListHostGroupInstancesResponse } as ListHostGroupInstancesResponse;
        message.instances = (object.instances ?? []).map((e: any) => Instance.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListHostGroupInstancesResponse): unknown {
        const obj: any = {};
        if (message.instances) {
            obj.instances = message.instances.map((e) => (e ? Instance.toJSON(e) : undefined));
        } else {
            obj.instances = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListHostGroupInstancesResponse>, I>>(
        object: I,
    ): ListHostGroupInstancesResponse {
        const message = { ...baseListHostGroupInstancesResponse } as ListHostGroupInstancesResponse;
        message.instances = object.instances?.map((e) => Instance.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseListHostGroupHostsRequest: object = { hostGroupId: '', pageSize: 0, pageToken: '' };

export const ListHostGroupHostsRequest = {
    encode(
        message: ListHostGroupHostsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.hostGroupId !== '') {
            writer.uint32(10).string(message.hostGroupId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListHostGroupHostsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListHostGroupHostsRequest } as ListHostGroupHostsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroupId = reader.string();
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

    fromJSON(object: any): ListHostGroupHostsRequest {
        const message = { ...baseListHostGroupHostsRequest } as ListHostGroupHostsRequest;
        message.hostGroupId =
            object.hostGroupId !== undefined && object.hostGroupId !== null
                ? String(object.hostGroupId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListHostGroupHostsRequest): unknown {
        const obj: any = {};
        message.hostGroupId !== undefined && (obj.hostGroupId = message.hostGroupId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListHostGroupHostsRequest>, I>>(
        object: I,
    ): ListHostGroupHostsRequest {
        const message = { ...baseListHostGroupHostsRequest } as ListHostGroupHostsRequest;
        message.hostGroupId = object.hostGroupId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListHostGroupHostsResponse: object = { nextPageToken: '' };

export const ListHostGroupHostsResponse = {
    encode(
        message: ListHostGroupHostsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.hosts) {
            Host.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListHostGroupHostsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListHostGroupHostsResponse } as ListHostGroupHostsResponse;
        message.hosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hosts.push(Host.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListHostGroupHostsResponse {
        const message = { ...baseListHostGroupHostsResponse } as ListHostGroupHostsResponse;
        message.hosts = (object.hosts ?? []).map((e: any) => Host.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListHostGroupHostsResponse): unknown {
        const obj: any = {};
        if (message.hosts) {
            obj.hosts = message.hosts.map((e) => (e ? Host.toJSON(e) : undefined));
        } else {
            obj.hosts = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListHostGroupHostsResponse>, I>>(
        object: I,
    ): ListHostGroupHostsResponse {
        const message = { ...baseListHostGroupHostsResponse } as ListHostGroupHostsResponse;
        message.hosts = object.hosts?.map((e) => Host.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseUpdateHostGroupHostRequest: object = { hostGroupId: '', hostId: '' };

export const UpdateHostGroupHostRequest = {
    encode(
        message: UpdateHostGroupHostRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.hostGroupId !== '') {
            writer.uint32(10).string(message.hostGroupId);
        }
        if (message.hostId !== '') {
            writer.uint32(18).string(message.hostId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
        }
        if (message.deadlineAt !== undefined) {
            Timestamp.encode(toTimestamp(message.deadlineAt), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateHostGroupHostRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateHostGroupHostRequest } as UpdateHostGroupHostRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroupId = reader.string();
                    break;
                case 2:
                    message.hostId = reader.string();
                    break;
                case 3:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.deadlineAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateHostGroupHostRequest {
        const message = { ...baseUpdateHostGroupHostRequest } as UpdateHostGroupHostRequest;
        message.hostGroupId =
            object.hostGroupId !== undefined && object.hostGroupId !== null
                ? String(object.hostGroupId)
                : '';
        message.hostId =
            object.hostId !== undefined && object.hostId !== null ? String(object.hostId) : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.deadlineAt =
            object.deadlineAt !== undefined && object.deadlineAt !== null
                ? fromJsonTimestamp(object.deadlineAt)
                : undefined;
        return message;
    },

    toJSON(message: UpdateHostGroupHostRequest): unknown {
        const obj: any = {};
        message.hostGroupId !== undefined && (obj.hostGroupId = message.hostGroupId);
        message.hostId !== undefined && (obj.hostId = message.hostId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.deadlineAt !== undefined && (obj.deadlineAt = message.deadlineAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateHostGroupHostRequest>, I>>(
        object: I,
    ): UpdateHostGroupHostRequest {
        const message = { ...baseUpdateHostGroupHostRequest } as UpdateHostGroupHostRequest;
        message.hostGroupId = object.hostGroupId ?? '';
        message.hostId = object.hostId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.deadlineAt = object.deadlineAt ?? undefined;
        return message;
    },
};

const baseUpdateHostGroupHostMetadata: object = { hostGroupId: '', hostId: '' };

export const UpdateHostGroupHostMetadata = {
    encode(
        message: UpdateHostGroupHostMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.hostGroupId !== '') {
            writer.uint32(10).string(message.hostGroupId);
        }
        if (message.hostId !== '') {
            writer.uint32(18).string(message.hostId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateHostGroupHostMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateHostGroupHostMetadata } as UpdateHostGroupHostMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroupId = reader.string();
                    break;
                case 2:
                    message.hostId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateHostGroupHostMetadata {
        const message = { ...baseUpdateHostGroupHostMetadata } as UpdateHostGroupHostMetadata;
        message.hostGroupId =
            object.hostGroupId !== undefined && object.hostGroupId !== null
                ? String(object.hostGroupId)
                : '';
        message.hostId =
            object.hostId !== undefined && object.hostId !== null ? String(object.hostId) : '';
        return message;
    },

    toJSON(message: UpdateHostGroupHostMetadata): unknown {
        const obj: any = {};
        message.hostGroupId !== undefined && (obj.hostGroupId = message.hostGroupId);
        message.hostId !== undefined && (obj.hostId = message.hostId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateHostGroupHostMetadata>, I>>(
        object: I,
    ): UpdateHostGroupHostMetadata {
        const message = { ...baseUpdateHostGroupHostMetadata } as UpdateHostGroupHostMetadata;
        message.hostGroupId = object.hostGroupId ?? '';
        message.hostId = object.hostId ?? '';
        return message;
    },
};

const baseListHostGroupOperationsRequest: object = { hostGroupId: '', pageSize: 0, pageToken: '' };

export const ListHostGroupOperationsRequest = {
    encode(
        message: ListHostGroupOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.hostGroupId !== '') {
            writer.uint32(10).string(message.hostGroupId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListHostGroupOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListHostGroupOperationsRequest } as ListHostGroupOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroupId = reader.string();
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

    fromJSON(object: any): ListHostGroupOperationsRequest {
        const message = { ...baseListHostGroupOperationsRequest } as ListHostGroupOperationsRequest;
        message.hostGroupId =
            object.hostGroupId !== undefined && object.hostGroupId !== null
                ? String(object.hostGroupId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListHostGroupOperationsRequest): unknown {
        const obj: any = {};
        message.hostGroupId !== undefined && (obj.hostGroupId = message.hostGroupId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListHostGroupOperationsRequest>, I>>(
        object: I,
    ): ListHostGroupOperationsRequest {
        const message = { ...baseListHostGroupOperationsRequest } as ListHostGroupOperationsRequest;
        message.hostGroupId = object.hostGroupId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListHostGroupOperationsResponse: object = { nextPageToken: '' };

export const ListHostGroupOperationsResponse = {
    encode(
        message: ListHostGroupOperationsResponse,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListHostGroupOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListHostGroupOperationsResponse,
        } as ListHostGroupOperationsResponse;
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

    fromJSON(object: any): ListHostGroupOperationsResponse {
        const message = {
            ...baseListHostGroupOperationsResponse,
        } as ListHostGroupOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListHostGroupOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListHostGroupOperationsResponse>, I>>(
        object: I,
    ): ListHostGroupOperationsResponse {
        const message = {
            ...baseListHostGroupOperationsResponse,
        } as ListHostGroupOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** A set of methods for managing groups of dedicated hosts. */
export const HostGroupServiceService = {
    /** Returns the specified host group. */
    get: {
        path: '/yandex.cloud.compute.v1.HostGroupService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetHostGroupRequest) =>
            Buffer.from(GetHostGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetHostGroupRequest.decode(value),
        responseSerialize: (value: HostGroup) => Buffer.from(HostGroup.encode(value).finish()),
        responseDeserialize: (value: Buffer) => HostGroup.decode(value),
    },
    /** Retrieves the list of host groups in the specified folder. */
    list: {
        path: '/yandex.cloud.compute.v1.HostGroupService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListHostGroupsRequest) =>
            Buffer.from(ListHostGroupsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListHostGroupsRequest.decode(value),
        responseSerialize: (value: ListHostGroupsResponse) =>
            Buffer.from(ListHostGroupsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListHostGroupsResponse.decode(value),
    },
    /** Creates a host group in the specified folder. */
    create: {
        path: '/yandex.cloud.compute.v1.HostGroupService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateHostGroupRequest) =>
            Buffer.from(CreateHostGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateHostGroupRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified host group. */
    update: {
        path: '/yandex.cloud.compute.v1.HostGroupService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateHostGroupRequest) =>
            Buffer.from(UpdateHostGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateHostGroupRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified host group. */
    delete: {
        path: '/yandex.cloud.compute.v1.HostGroupService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteHostGroupRequest) =>
            Buffer.from(DeleteHostGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteHostGroupRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified host group. */
    listOperations: {
        path: '/yandex.cloud.compute.v1.HostGroupService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListHostGroupOperationsRequest) =>
            Buffer.from(ListHostGroupOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListHostGroupOperationsRequest.decode(value),
        responseSerialize: (value: ListHostGroupOperationsResponse) =>
            Buffer.from(ListHostGroupOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListHostGroupOperationsResponse.decode(value),
    },
    /** Lists instances that belongs to the specified host group. */
    listInstances: {
        path: '/yandex.cloud.compute.v1.HostGroupService/ListInstances',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListHostGroupInstancesRequest) =>
            Buffer.from(ListHostGroupInstancesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListHostGroupInstancesRequest.decode(value),
        responseSerialize: (value: ListHostGroupInstancesResponse) =>
            Buffer.from(ListHostGroupInstancesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListHostGroupInstancesResponse.decode(value),
    },
    /** Lists hosts that belongs to the specified host group. */
    listHosts: {
        path: '/yandex.cloud.compute.v1.HostGroupService/ListHosts',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListHostGroupHostsRequest) =>
            Buffer.from(ListHostGroupHostsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListHostGroupHostsRequest.decode(value),
        responseSerialize: (value: ListHostGroupHostsResponse) =>
            Buffer.from(ListHostGroupHostsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListHostGroupHostsResponse.decode(value),
    },
    /** Update host */
    updateHost: {
        path: '/yandex.cloud.compute.v1.HostGroupService/UpdateHost',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateHostGroupHostRequest) =>
            Buffer.from(UpdateHostGroupHostRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateHostGroupHostRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists access bindings for the host group. */
    listAccessBindings: {
        path: '/yandex.cloud.compute.v1.HostGroupService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessBindingsRequest) =>
            Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
        responseSerialize: (value: ListAccessBindingsResponse) =>
            Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the host group. */
    setAccessBindings: {
        path: '/yandex.cloud.compute.v1.HostGroupService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetAccessBindingsRequest) =>
            Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates access bindings for the host group. */
    updateAccessBindings: {
        path: '/yandex.cloud.compute.v1.HostGroupService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAccessBindingsRequest) =>
            Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface HostGroupServiceServer extends UntypedServiceImplementation {
    /** Returns the specified host group. */
    get: handleUnaryCall<GetHostGroupRequest, HostGroup>;
    /** Retrieves the list of host groups in the specified folder. */
    list: handleUnaryCall<ListHostGroupsRequest, ListHostGroupsResponse>;
    /** Creates a host group in the specified folder. */
    create: handleUnaryCall<CreateHostGroupRequest, Operation>;
    /** Updates the specified host group. */
    update: handleUnaryCall<UpdateHostGroupRequest, Operation>;
    /** Deletes the specified host group. */
    delete: handleUnaryCall<DeleteHostGroupRequest, Operation>;
    /** Lists operations for the specified host group. */
    listOperations: handleUnaryCall<
        ListHostGroupOperationsRequest,
        ListHostGroupOperationsResponse
    >;
    /** Lists instances that belongs to the specified host group. */
    listInstances: handleUnaryCall<ListHostGroupInstancesRequest, ListHostGroupInstancesResponse>;
    /** Lists hosts that belongs to the specified host group. */
    listHosts: handleUnaryCall<ListHostGroupHostsRequest, ListHostGroupHostsResponse>;
    /** Update host */
    updateHost: handleUnaryCall<UpdateHostGroupHostRequest, Operation>;
    /** Lists access bindings for the host group. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the host group. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the host group. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface HostGroupServiceClient extends Client {
    /** Returns the specified host group. */
    get(
        request: GetHostGroupRequest,
        callback: (error: ServiceError | null, response: HostGroup) => void,
    ): ClientUnaryCall;
    get(
        request: GetHostGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: HostGroup) => void,
    ): ClientUnaryCall;
    get(
        request: GetHostGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: HostGroup) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of host groups in the specified folder. */
    list(
        request: ListHostGroupsRequest,
        callback: (error: ServiceError | null, response: ListHostGroupsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListHostGroupsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListHostGroupsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListHostGroupsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListHostGroupsResponse) => void,
    ): ClientUnaryCall;
    /** Creates a host group in the specified folder. */
    create(
        request: CreateHostGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateHostGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateHostGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified host group. */
    update(
        request: UpdateHostGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateHostGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateHostGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified host group. */
    delete(
        request: DeleteHostGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteHostGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteHostGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists operations for the specified host group. */
    listOperations(
        request: ListHostGroupOperationsRequest,
        callback: (error: ServiceError | null, response: ListHostGroupOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListHostGroupOperationsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListHostGroupOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListHostGroupOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListHostGroupOperationsResponse) => void,
    ): ClientUnaryCall;
    /** Lists instances that belongs to the specified host group. */
    listInstances(
        request: ListHostGroupInstancesRequest,
        callback: (error: ServiceError | null, response: ListHostGroupInstancesResponse) => void,
    ): ClientUnaryCall;
    listInstances(
        request: ListHostGroupInstancesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListHostGroupInstancesResponse) => void,
    ): ClientUnaryCall;
    listInstances(
        request: ListHostGroupInstancesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListHostGroupInstancesResponse) => void,
    ): ClientUnaryCall;
    /** Lists hosts that belongs to the specified host group. */
    listHosts(
        request: ListHostGroupHostsRequest,
        callback: (error: ServiceError | null, response: ListHostGroupHostsResponse) => void,
    ): ClientUnaryCall;
    listHosts(
        request: ListHostGroupHostsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListHostGroupHostsResponse) => void,
    ): ClientUnaryCall;
    listHosts(
        request: ListHostGroupHostsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListHostGroupHostsResponse) => void,
    ): ClientUnaryCall;
    /** Update host */
    updateHost(
        request: UpdateHostGroupHostRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateHost(
        request: UpdateHostGroupHostRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateHost(
        request: UpdateHostGroupHostRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists access bindings for the host group. */
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
    /** Sets access bindings for the host group. */
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
    /** Updates access bindings for the host group. */
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

export const HostGroupServiceClient = makeGenericClientConstructor(
    HostGroupServiceService,
    'yandex.cloud.compute.v1.HostGroupService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): HostGroupServiceClient;
    service: typeof HostGroupServiceService;
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

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

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
