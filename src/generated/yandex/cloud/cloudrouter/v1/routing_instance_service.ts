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
    RoutingInstance,
    RoutingInstance_VpcInfo,
    RoutingInstance_CicPrivateConnectionInfo,
} from '../../../../yandex/cloud/cloudrouter/v1/routing_instance';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.cloudrouter.v1';

export interface GetRoutingInstanceRequest {
    /**
     * ID of the RoutingInstance resource to return.
     * To get the routingInstance ID use a [RoutingInstanceService.List] request.
     */
    routingInstanceId: string;
}

export interface GetRoutingInstanceByCicPrivateConnectionIdRequest {
    /**
     * ID of the PrivateConnection resource to return by.
     * To get the routingInstance ID use a [RoutingInstanceService.List] request.
     */
    cicPrivateConnectionId: string;
}

export interface GetRoutingInstanceByVpcNetworkIdRequest {
    /**
     * ID of the VpcNetwork resource to return by.
     * To get the routingInstance ID use a [RoutingInstanceService.List] request.
     */
    vpcNetworkId: string;
}

export interface ListRoutingInstancesRequest {
    /**
     * ID of the folder to list RoutingInstance resources.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListRoutingInstancesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListRoutingInstanceResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [RoutingInstance.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
}

export interface ListRoutingInstancesResponse {
    /** List of RoutingInstance resources. */
    routingInstances: RoutingInstance[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListRoutingInstancesResponse.page_size], use
     * the [next_page_token] as the value
     * for the [ListRoutingInstanceResponses.page_token] query parameter
     * in the next list request. Subsequent list requests will have their own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateRoutingInstanceRequest {
    /**
     * Name of the RoutingInstance.
     * The name must be unique within the folder.
     * Value must match the regular expression ``\|[a-zA-Z]([-_a-zA-Z0-9]{0,61}[a-zA-Z0-9])?``.
     */
    name: string;
    /** Optional description of the RoutingInstance. 0-256 characters long. */
    description: string;
    /** ID of the folder that the RoutingInstance belongs to. */
    folderId: string;
    /** ID of the region that the routingInstance belongs to. */
    regionId: string;
    /** List of the info about vpcNetworks which are attached to the RoutingInstance. */
    vpcInfo: RoutingInstance_VpcInfo[];
    /** List of the info about privateConnections which are attached to the RoutingInstance. */
    cicPrivateConnectionInfo: RoutingInstance_CicPrivateConnectionInfo[];
    /**
     * Resource labels, `key:value` pairs.
     * No more than 64 per resource.
     * The maximum string length in characters for each value is 63.
     * Each value must match the regular expression `[-_0-9a-z]*`.
     * The string length in characters for each key must be 1-63.
     * Each key must match the regular expression `[a-z][-_0-9a-z]*`.
     */
    labels: { [key: string]: string };
}

export interface CreateRoutingInstanceRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateRoutingInstanceMetadata {
    /** ID of the RoutingInstance resource. */
    routingInstanceId: string;
}

export interface UpdateRoutingInstanceRequest {
    /** ID of the RoutingInstance resource to return. */
    routingInstanceId: string;
    /** Field mask that specifies which fields of the RoutingInstance resource are going to be updated. */
    updateMask?: FieldMask;
    /**
     * Name of the RoutingInstance.
     * The name must be unique within the folder.
     * Value must match the regular expression ``\|[a-zA-Z]([-_a-zA-Z0-9]{0,61}[a-zA-Z0-9])?``.
     */
    name: string;
    /** Optional description of the RoutingInstance. 0-256 characters long. */
    description: string;
    /** ID of the region that the routingInstance belongs to. */
    regionId: string;
    /** List of the info about vpcNetworks which are attached to the RoutingInstance. */
    vpcInfo: RoutingInstance_VpcInfo[];
    /** List of the info about privateConnections which are attached to the RoutingInstance. */
    cicPrivateConnectionInfo: RoutingInstance_CicPrivateConnectionInfo[];
    /**
     * Resource labels, `key:value` pairs.
     * No more than 64 per resource.
     * The maximum string length in characters for each value is 63.
     * Each value must match the regular expression `[-_0-9a-z]*`.
     * The string length in characters for each key must be 1-63.
     * Each key must match the regular expression `[a-z][-_0-9a-z]*`.
     */
    labels: { [key: string]: string };
}

export interface UpdateRoutingInstanceRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateRoutingInstanceMetadata {
    /** ID of the RoutingInstance resource. */
    routingInstanceId: string;
}

export interface UpsertPrefixesRequest {
    /** ID of the RoutingInstance resource. */
    routingInstanceId: string;
    /** ID of the VpcNetwork to update. */
    vpcNetworkId: string;
    /** List of VpcAzInfoPrefixes to upsert. */
    vpcAzInfoPrefixes: VpcAzInfoPrefixes[];
}

export interface RemovePrefixesRequest {
    /** ID of the RoutingInstance resource. */
    routingInstanceId: string;
    /** ID of the VpcNetwork to update. */
    vpcNetworkId: string;
    /** List of VpcAzInfoPrefixes to remove. */
    vpcAzInfoPrefixes: VpcAzInfoPrefixes[];
}

export interface VpcAzInfoPrefixes {
    /** ID of the AZ. */
    azId: string;
    /** List of prefixes. */
    prefixes: string[];
}

export interface AddPrivateConnectionRequest {
    /** ID of the RoutingInstance resource. */
    routingInstanceId: string;
    /** ID of the PrivateConnection to add to the RoutingInstance. */
    cicPrivateConnectionId: string;
}

export interface RemovePrivateConnectionRequest {
    /** ID of the RoutingInstance resource. */
    routingInstanceId: string;
    /** ID of the PrivateConnection to remove from the RoutingInstance. */
    cicPrivateConnectionId: string;
}

export interface DeleteRoutingInstanceRequest {
    /** ID of the RoutingInstance resource. */
    routingInstanceId: string;
}

export interface DeleteRoutingInstanceMetadata {
    /** ID of the RoutingInstance resource. */
    routingInstanceId: string;
}

export interface ListRoutingInstanceOperationsRequest {
    /** ID of the RoutingInstance resource. */
    routingInstanceId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListRoutingInstanceOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListRoutingInstanceOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListRoutingInstanceOperationsResponse {
    /** List of RoutingInstance operations. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListRoutingInstanceOperationsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListRoutingInstanceOperationsRequest.page_token] query parameter
     * in the next list request. Subsequent list requests will have their own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetRoutingInstanceRequest: object = { routingInstanceId: '' };

export const GetRoutingInstanceRequest = {
    encode(
        message: GetRoutingInstanceRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.routingInstanceId !== '') {
            writer.uint32(10).string(message.routingInstanceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetRoutingInstanceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetRoutingInstanceRequest } as GetRoutingInstanceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routingInstanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetRoutingInstanceRequest {
        const message = { ...baseGetRoutingInstanceRequest } as GetRoutingInstanceRequest;
        message.routingInstanceId =
            object.routingInstanceId !== undefined && object.routingInstanceId !== null
                ? String(object.routingInstanceId)
                : '';
        return message;
    },

    toJSON(message: GetRoutingInstanceRequest): unknown {
        const obj: any = {};
        message.routingInstanceId !== undefined &&
            (obj.routingInstanceId = message.routingInstanceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetRoutingInstanceRequest>, I>>(
        object: I,
    ): GetRoutingInstanceRequest {
        const message = { ...baseGetRoutingInstanceRequest } as GetRoutingInstanceRequest;
        message.routingInstanceId = object.routingInstanceId ?? '';
        return message;
    },
};

const baseGetRoutingInstanceByCicPrivateConnectionIdRequest: object = {
    cicPrivateConnectionId: '',
};

export const GetRoutingInstanceByCicPrivateConnectionIdRequest = {
    encode(
        message: GetRoutingInstanceByCicPrivateConnectionIdRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.cicPrivateConnectionId !== '') {
            writer.uint32(10).string(message.cicPrivateConnectionId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): GetRoutingInstanceByCicPrivateConnectionIdRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetRoutingInstanceByCicPrivateConnectionIdRequest,
        } as GetRoutingInstanceByCicPrivateConnectionIdRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cicPrivateConnectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetRoutingInstanceByCicPrivateConnectionIdRequest {
        const message = {
            ...baseGetRoutingInstanceByCicPrivateConnectionIdRequest,
        } as GetRoutingInstanceByCicPrivateConnectionIdRequest;
        message.cicPrivateConnectionId =
            object.cicPrivateConnectionId !== undefined && object.cicPrivateConnectionId !== null
                ? String(object.cicPrivateConnectionId)
                : '';
        return message;
    },

    toJSON(message: GetRoutingInstanceByCicPrivateConnectionIdRequest): unknown {
        const obj: any = {};
        message.cicPrivateConnectionId !== undefined &&
            (obj.cicPrivateConnectionId = message.cicPrivateConnectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetRoutingInstanceByCicPrivateConnectionIdRequest>, I>>(
        object: I,
    ): GetRoutingInstanceByCicPrivateConnectionIdRequest {
        const message = {
            ...baseGetRoutingInstanceByCicPrivateConnectionIdRequest,
        } as GetRoutingInstanceByCicPrivateConnectionIdRequest;
        message.cicPrivateConnectionId = object.cicPrivateConnectionId ?? '';
        return message;
    },
};

const baseGetRoutingInstanceByVpcNetworkIdRequest: object = { vpcNetworkId: '' };

export const GetRoutingInstanceByVpcNetworkIdRequest = {
    encode(
        message: GetRoutingInstanceByVpcNetworkIdRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.vpcNetworkId !== '') {
            writer.uint32(10).string(message.vpcNetworkId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): GetRoutingInstanceByVpcNetworkIdRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetRoutingInstanceByVpcNetworkIdRequest,
        } as GetRoutingInstanceByVpcNetworkIdRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vpcNetworkId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetRoutingInstanceByVpcNetworkIdRequest {
        const message = {
            ...baseGetRoutingInstanceByVpcNetworkIdRequest,
        } as GetRoutingInstanceByVpcNetworkIdRequest;
        message.vpcNetworkId =
            object.vpcNetworkId !== undefined && object.vpcNetworkId !== null
                ? String(object.vpcNetworkId)
                : '';
        return message;
    },

    toJSON(message: GetRoutingInstanceByVpcNetworkIdRequest): unknown {
        const obj: any = {};
        message.vpcNetworkId !== undefined && (obj.vpcNetworkId = message.vpcNetworkId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetRoutingInstanceByVpcNetworkIdRequest>, I>>(
        object: I,
    ): GetRoutingInstanceByVpcNetworkIdRequest {
        const message = {
            ...baseGetRoutingInstanceByVpcNetworkIdRequest,
        } as GetRoutingInstanceByVpcNetworkIdRequest;
        message.vpcNetworkId = object.vpcNetworkId ?? '';
        return message;
    },
};

const baseListRoutingInstancesRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListRoutingInstancesRequest = {
    encode(
        message: ListRoutingInstancesRequest,
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
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListRoutingInstancesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListRoutingInstancesRequest } as ListRoutingInstancesRequest;
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListRoutingInstancesRequest {
        const message = { ...baseListRoutingInstancesRequest } as ListRoutingInstancesRequest;
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
        return message;
    },

    toJSON(message: ListRoutingInstancesRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListRoutingInstancesRequest>, I>>(
        object: I,
    ): ListRoutingInstancesRequest {
        const message = { ...baseListRoutingInstancesRequest } as ListRoutingInstancesRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListRoutingInstancesResponse: object = { nextPageToken: '' };

export const ListRoutingInstancesResponse = {
    encode(
        message: ListRoutingInstancesResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.routingInstances) {
            RoutingInstance.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListRoutingInstancesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListRoutingInstancesResponse } as ListRoutingInstancesResponse;
        message.routingInstances = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routingInstances.push(RoutingInstance.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListRoutingInstancesResponse {
        const message = { ...baseListRoutingInstancesResponse } as ListRoutingInstancesResponse;
        message.routingInstances = (object.routingInstances ?? []).map((e: any) =>
            RoutingInstance.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListRoutingInstancesResponse): unknown {
        const obj: any = {};
        if (message.routingInstances) {
            obj.routingInstances = message.routingInstances.map((e) =>
                e ? RoutingInstance.toJSON(e) : undefined,
            );
        } else {
            obj.routingInstances = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListRoutingInstancesResponse>, I>>(
        object: I,
    ): ListRoutingInstancesResponse {
        const message = { ...baseListRoutingInstancesResponse } as ListRoutingInstancesResponse;
        message.routingInstances =
            object.routingInstances?.map((e) => RoutingInstance.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateRoutingInstanceRequest: object = {
    name: '',
    description: '',
    folderId: '',
    regionId: '',
};

export const CreateRoutingInstanceRequest = {
    encode(
        message: CreateRoutingInstanceRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (message.folderId !== '') {
            writer.uint32(34).string(message.folderId);
        }
        if (message.regionId !== '') {
            writer.uint32(42).string(message.regionId);
        }
        for (const v of message.vpcInfo) {
            RoutingInstance_VpcInfo.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.cicPrivateConnectionInfo) {
            RoutingInstance_CicPrivateConnectionInfo.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateRoutingInstanceRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(98).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateRoutingInstanceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateRoutingInstanceRequest } as CreateRoutingInstanceRequest;
        message.vpcInfo = [];
        message.cicPrivateConnectionInfo = [];
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
                case 4:
                    message.folderId = reader.string();
                    break;
                case 5:
                    message.regionId = reader.string();
                    break;
                case 6:
                    message.vpcInfo.push(RoutingInstance_VpcInfo.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.cicPrivateConnectionInfo.push(
                        RoutingInstance_CicPrivateConnectionInfo.decode(reader, reader.uint32()),
                    );
                    break;
                case 12:
                    const entry12 = CreateRoutingInstanceRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry12.value !== undefined) {
                        message.labels[entry12.key] = entry12.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateRoutingInstanceRequest {
        const message = { ...baseCreateRoutingInstanceRequest } as CreateRoutingInstanceRequest;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.regionId =
            object.regionId !== undefined && object.regionId !== null
                ? String(object.regionId)
                : '';
        message.vpcInfo = (object.vpcInfo ?? []).map((e: any) =>
            RoutingInstance_VpcInfo.fromJSON(e),
        );
        message.cicPrivateConnectionInfo = (object.cicPrivateConnectionInfo ?? []).map((e: any) =>
            RoutingInstance_CicPrivateConnectionInfo.fromJSON(e),
        );
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: CreateRoutingInstanceRequest): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.regionId !== undefined && (obj.regionId = message.regionId);
        if (message.vpcInfo) {
            obj.vpcInfo = message.vpcInfo.map((e) =>
                e ? RoutingInstance_VpcInfo.toJSON(e) : undefined,
            );
        } else {
            obj.vpcInfo = [];
        }
        if (message.cicPrivateConnectionInfo) {
            obj.cicPrivateConnectionInfo = message.cicPrivateConnectionInfo.map((e) =>
                e ? RoutingInstance_CicPrivateConnectionInfo.toJSON(e) : undefined,
            );
        } else {
            obj.cicPrivateConnectionInfo = [];
        }
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateRoutingInstanceRequest>, I>>(
        object: I,
    ): CreateRoutingInstanceRequest {
        const message = { ...baseCreateRoutingInstanceRequest } as CreateRoutingInstanceRequest;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.folderId = object.folderId ?? '';
        message.regionId = object.regionId ?? '';
        message.vpcInfo = object.vpcInfo?.map((e) => RoutingInstance_VpcInfo.fromPartial(e)) || [];
        message.cicPrivateConnectionInfo =
            object.cicPrivateConnectionInfo?.map((e) =>
                RoutingInstance_CicPrivateConnectionInfo.fromPartial(e),
            ) || [];
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

const baseCreateRoutingInstanceRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateRoutingInstanceRequest_LabelsEntry = {
    encode(
        message: CreateRoutingInstanceRequest_LabelsEntry,
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
    ): CreateRoutingInstanceRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateRoutingInstanceRequest_LabelsEntry,
        } as CreateRoutingInstanceRequest_LabelsEntry;
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

    fromJSON(object: any): CreateRoutingInstanceRequest_LabelsEntry {
        const message = {
            ...baseCreateRoutingInstanceRequest_LabelsEntry,
        } as CreateRoutingInstanceRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateRoutingInstanceRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateRoutingInstanceRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateRoutingInstanceRequest_LabelsEntry {
        const message = {
            ...baseCreateRoutingInstanceRequest_LabelsEntry,
        } as CreateRoutingInstanceRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateRoutingInstanceMetadata: object = { routingInstanceId: '' };

export const CreateRoutingInstanceMetadata = {
    encode(
        message: CreateRoutingInstanceMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.routingInstanceId !== '') {
            writer.uint32(10).string(message.routingInstanceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateRoutingInstanceMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateRoutingInstanceMetadata } as CreateRoutingInstanceMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routingInstanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateRoutingInstanceMetadata {
        const message = { ...baseCreateRoutingInstanceMetadata } as CreateRoutingInstanceMetadata;
        message.routingInstanceId =
            object.routingInstanceId !== undefined && object.routingInstanceId !== null
                ? String(object.routingInstanceId)
                : '';
        return message;
    },

    toJSON(message: CreateRoutingInstanceMetadata): unknown {
        const obj: any = {};
        message.routingInstanceId !== undefined &&
            (obj.routingInstanceId = message.routingInstanceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateRoutingInstanceMetadata>, I>>(
        object: I,
    ): CreateRoutingInstanceMetadata {
        const message = { ...baseCreateRoutingInstanceMetadata } as CreateRoutingInstanceMetadata;
        message.routingInstanceId = object.routingInstanceId ?? '';
        return message;
    },
};

const baseUpdateRoutingInstanceRequest: object = {
    routingInstanceId: '',
    name: '',
    description: '',
    regionId: '',
};

export const UpdateRoutingInstanceRequest = {
    encode(
        message: UpdateRoutingInstanceRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.routingInstanceId !== '') {
            writer.uint32(10).string(message.routingInstanceId);
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
        if (message.regionId !== '') {
            writer.uint32(58).string(message.regionId);
        }
        for (const v of message.vpcInfo) {
            RoutingInstance_VpcInfo.encode(v!, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.cicPrivateConnectionInfo) {
            RoutingInstance_CicPrivateConnectionInfo.encode(v!, writer.uint32(74).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateRoutingInstanceRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(114).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRoutingInstanceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateRoutingInstanceRequest } as UpdateRoutingInstanceRequest;
        message.vpcInfo = [];
        message.cicPrivateConnectionInfo = [];
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routingInstanceId = reader.string();
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
                case 7:
                    message.regionId = reader.string();
                    break;
                case 8:
                    message.vpcInfo.push(RoutingInstance_VpcInfo.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.cicPrivateConnectionInfo.push(
                        RoutingInstance_CicPrivateConnectionInfo.decode(reader, reader.uint32()),
                    );
                    break;
                case 14:
                    const entry14 = UpdateRoutingInstanceRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry14.value !== undefined) {
                        message.labels[entry14.key] = entry14.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateRoutingInstanceRequest {
        const message = { ...baseUpdateRoutingInstanceRequest } as UpdateRoutingInstanceRequest;
        message.routingInstanceId =
            object.routingInstanceId !== undefined && object.routingInstanceId !== null
                ? String(object.routingInstanceId)
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
        message.regionId =
            object.regionId !== undefined && object.regionId !== null
                ? String(object.regionId)
                : '';
        message.vpcInfo = (object.vpcInfo ?? []).map((e: any) =>
            RoutingInstance_VpcInfo.fromJSON(e),
        );
        message.cicPrivateConnectionInfo = (object.cicPrivateConnectionInfo ?? []).map((e: any) =>
            RoutingInstance_CicPrivateConnectionInfo.fromJSON(e),
        );
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: UpdateRoutingInstanceRequest): unknown {
        const obj: any = {};
        message.routingInstanceId !== undefined &&
            (obj.routingInstanceId = message.routingInstanceId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.regionId !== undefined && (obj.regionId = message.regionId);
        if (message.vpcInfo) {
            obj.vpcInfo = message.vpcInfo.map((e) =>
                e ? RoutingInstance_VpcInfo.toJSON(e) : undefined,
            );
        } else {
            obj.vpcInfo = [];
        }
        if (message.cicPrivateConnectionInfo) {
            obj.cicPrivateConnectionInfo = message.cicPrivateConnectionInfo.map((e) =>
                e ? RoutingInstance_CicPrivateConnectionInfo.toJSON(e) : undefined,
            );
        } else {
            obj.cicPrivateConnectionInfo = [];
        }
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateRoutingInstanceRequest>, I>>(
        object: I,
    ): UpdateRoutingInstanceRequest {
        const message = { ...baseUpdateRoutingInstanceRequest } as UpdateRoutingInstanceRequest;
        message.routingInstanceId = object.routingInstanceId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.regionId = object.regionId ?? '';
        message.vpcInfo = object.vpcInfo?.map((e) => RoutingInstance_VpcInfo.fromPartial(e)) || [];
        message.cicPrivateConnectionInfo =
            object.cicPrivateConnectionInfo?.map((e) =>
                RoutingInstance_CicPrivateConnectionInfo.fromPartial(e),
            ) || [];
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

const baseUpdateRoutingInstanceRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateRoutingInstanceRequest_LabelsEntry = {
    encode(
        message: UpdateRoutingInstanceRequest_LabelsEntry,
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
    ): UpdateRoutingInstanceRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateRoutingInstanceRequest_LabelsEntry,
        } as UpdateRoutingInstanceRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateRoutingInstanceRequest_LabelsEntry {
        const message = {
            ...baseUpdateRoutingInstanceRequest_LabelsEntry,
        } as UpdateRoutingInstanceRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateRoutingInstanceRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateRoutingInstanceRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateRoutingInstanceRequest_LabelsEntry {
        const message = {
            ...baseUpdateRoutingInstanceRequest_LabelsEntry,
        } as UpdateRoutingInstanceRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateRoutingInstanceMetadata: object = { routingInstanceId: '' };

export const UpdateRoutingInstanceMetadata = {
    encode(
        message: UpdateRoutingInstanceMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.routingInstanceId !== '') {
            writer.uint32(10).string(message.routingInstanceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRoutingInstanceMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateRoutingInstanceMetadata } as UpdateRoutingInstanceMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routingInstanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateRoutingInstanceMetadata {
        const message = { ...baseUpdateRoutingInstanceMetadata } as UpdateRoutingInstanceMetadata;
        message.routingInstanceId =
            object.routingInstanceId !== undefined && object.routingInstanceId !== null
                ? String(object.routingInstanceId)
                : '';
        return message;
    },

    toJSON(message: UpdateRoutingInstanceMetadata): unknown {
        const obj: any = {};
        message.routingInstanceId !== undefined &&
            (obj.routingInstanceId = message.routingInstanceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateRoutingInstanceMetadata>, I>>(
        object: I,
    ): UpdateRoutingInstanceMetadata {
        const message = { ...baseUpdateRoutingInstanceMetadata } as UpdateRoutingInstanceMetadata;
        message.routingInstanceId = object.routingInstanceId ?? '';
        return message;
    },
};

const baseUpsertPrefixesRequest: object = { routingInstanceId: '', vpcNetworkId: '' };

export const UpsertPrefixesRequest = {
    encode(message: UpsertPrefixesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.routingInstanceId !== '') {
            writer.uint32(10).string(message.routingInstanceId);
        }
        if (message.vpcNetworkId !== '') {
            writer.uint32(18).string(message.vpcNetworkId);
        }
        for (const v of message.vpcAzInfoPrefixes) {
            VpcAzInfoPrefixes.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpsertPrefixesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpsertPrefixesRequest } as UpsertPrefixesRequest;
        message.vpcAzInfoPrefixes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routingInstanceId = reader.string();
                    break;
                case 2:
                    message.vpcNetworkId = reader.string();
                    break;
                case 3:
                    message.vpcAzInfoPrefixes.push(
                        VpcAzInfoPrefixes.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpsertPrefixesRequest {
        const message = { ...baseUpsertPrefixesRequest } as UpsertPrefixesRequest;
        message.routingInstanceId =
            object.routingInstanceId !== undefined && object.routingInstanceId !== null
                ? String(object.routingInstanceId)
                : '';
        message.vpcNetworkId =
            object.vpcNetworkId !== undefined && object.vpcNetworkId !== null
                ? String(object.vpcNetworkId)
                : '';
        message.vpcAzInfoPrefixes = (object.vpcAzInfoPrefixes ?? []).map((e: any) =>
            VpcAzInfoPrefixes.fromJSON(e),
        );
        return message;
    },

    toJSON(message: UpsertPrefixesRequest): unknown {
        const obj: any = {};
        message.routingInstanceId !== undefined &&
            (obj.routingInstanceId = message.routingInstanceId);
        message.vpcNetworkId !== undefined && (obj.vpcNetworkId = message.vpcNetworkId);
        if (message.vpcAzInfoPrefixes) {
            obj.vpcAzInfoPrefixes = message.vpcAzInfoPrefixes.map((e) =>
                e ? VpcAzInfoPrefixes.toJSON(e) : undefined,
            );
        } else {
            obj.vpcAzInfoPrefixes = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpsertPrefixesRequest>, I>>(
        object: I,
    ): UpsertPrefixesRequest {
        const message = { ...baseUpsertPrefixesRequest } as UpsertPrefixesRequest;
        message.routingInstanceId = object.routingInstanceId ?? '';
        message.vpcNetworkId = object.vpcNetworkId ?? '';
        message.vpcAzInfoPrefixes =
            object.vpcAzInfoPrefixes?.map((e) => VpcAzInfoPrefixes.fromPartial(e)) || [];
        return message;
    },
};

const baseRemovePrefixesRequest: object = { routingInstanceId: '', vpcNetworkId: '' };

export const RemovePrefixesRequest = {
    encode(message: RemovePrefixesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.routingInstanceId !== '') {
            writer.uint32(10).string(message.routingInstanceId);
        }
        if (message.vpcNetworkId !== '') {
            writer.uint32(18).string(message.vpcNetworkId);
        }
        for (const v of message.vpcAzInfoPrefixes) {
            VpcAzInfoPrefixes.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RemovePrefixesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRemovePrefixesRequest } as RemovePrefixesRequest;
        message.vpcAzInfoPrefixes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routingInstanceId = reader.string();
                    break;
                case 2:
                    message.vpcNetworkId = reader.string();
                    break;
                case 3:
                    message.vpcAzInfoPrefixes.push(
                        VpcAzInfoPrefixes.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RemovePrefixesRequest {
        const message = { ...baseRemovePrefixesRequest } as RemovePrefixesRequest;
        message.routingInstanceId =
            object.routingInstanceId !== undefined && object.routingInstanceId !== null
                ? String(object.routingInstanceId)
                : '';
        message.vpcNetworkId =
            object.vpcNetworkId !== undefined && object.vpcNetworkId !== null
                ? String(object.vpcNetworkId)
                : '';
        message.vpcAzInfoPrefixes = (object.vpcAzInfoPrefixes ?? []).map((e: any) =>
            VpcAzInfoPrefixes.fromJSON(e),
        );
        return message;
    },

    toJSON(message: RemovePrefixesRequest): unknown {
        const obj: any = {};
        message.routingInstanceId !== undefined &&
            (obj.routingInstanceId = message.routingInstanceId);
        message.vpcNetworkId !== undefined && (obj.vpcNetworkId = message.vpcNetworkId);
        if (message.vpcAzInfoPrefixes) {
            obj.vpcAzInfoPrefixes = message.vpcAzInfoPrefixes.map((e) =>
                e ? VpcAzInfoPrefixes.toJSON(e) : undefined,
            );
        } else {
            obj.vpcAzInfoPrefixes = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RemovePrefixesRequest>, I>>(
        object: I,
    ): RemovePrefixesRequest {
        const message = { ...baseRemovePrefixesRequest } as RemovePrefixesRequest;
        message.routingInstanceId = object.routingInstanceId ?? '';
        message.vpcNetworkId = object.vpcNetworkId ?? '';
        message.vpcAzInfoPrefixes =
            object.vpcAzInfoPrefixes?.map((e) => VpcAzInfoPrefixes.fromPartial(e)) || [];
        return message;
    },
};

const baseVpcAzInfoPrefixes: object = { azId: '', prefixes: '' };

export const VpcAzInfoPrefixes = {
    encode(message: VpcAzInfoPrefixes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.azId !== '') {
            writer.uint32(10).string(message.azId);
        }
        for (const v of message.prefixes) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): VpcAzInfoPrefixes {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVpcAzInfoPrefixes } as VpcAzInfoPrefixes;
        message.prefixes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.azId = reader.string();
                    break;
                case 2:
                    message.prefixes.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): VpcAzInfoPrefixes {
        const message = { ...baseVpcAzInfoPrefixes } as VpcAzInfoPrefixes;
        message.azId = object.azId !== undefined && object.azId !== null ? String(object.azId) : '';
        message.prefixes = (object.prefixes ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: VpcAzInfoPrefixes): unknown {
        const obj: any = {};
        message.azId !== undefined && (obj.azId = message.azId);
        if (message.prefixes) {
            obj.prefixes = message.prefixes.map((e) => e);
        } else {
            obj.prefixes = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<VpcAzInfoPrefixes>, I>>(object: I): VpcAzInfoPrefixes {
        const message = { ...baseVpcAzInfoPrefixes } as VpcAzInfoPrefixes;
        message.azId = object.azId ?? '';
        message.prefixes = object.prefixes?.map((e) => e) || [];
        return message;
    },
};

const baseAddPrivateConnectionRequest: object = {
    routingInstanceId: '',
    cicPrivateConnectionId: '',
};

export const AddPrivateConnectionRequest = {
    encode(
        message: AddPrivateConnectionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.routingInstanceId !== '') {
            writer.uint32(10).string(message.routingInstanceId);
        }
        if (message.cicPrivateConnectionId !== '') {
            writer.uint32(18).string(message.cicPrivateConnectionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AddPrivateConnectionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddPrivateConnectionRequest } as AddPrivateConnectionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routingInstanceId = reader.string();
                    break;
                case 2:
                    message.cicPrivateConnectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddPrivateConnectionRequest {
        const message = { ...baseAddPrivateConnectionRequest } as AddPrivateConnectionRequest;
        message.routingInstanceId =
            object.routingInstanceId !== undefined && object.routingInstanceId !== null
                ? String(object.routingInstanceId)
                : '';
        message.cicPrivateConnectionId =
            object.cicPrivateConnectionId !== undefined && object.cicPrivateConnectionId !== null
                ? String(object.cicPrivateConnectionId)
                : '';
        return message;
    },

    toJSON(message: AddPrivateConnectionRequest): unknown {
        const obj: any = {};
        message.routingInstanceId !== undefined &&
            (obj.routingInstanceId = message.routingInstanceId);
        message.cicPrivateConnectionId !== undefined &&
            (obj.cicPrivateConnectionId = message.cicPrivateConnectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AddPrivateConnectionRequest>, I>>(
        object: I,
    ): AddPrivateConnectionRequest {
        const message = { ...baseAddPrivateConnectionRequest } as AddPrivateConnectionRequest;
        message.routingInstanceId = object.routingInstanceId ?? '';
        message.cicPrivateConnectionId = object.cicPrivateConnectionId ?? '';
        return message;
    },
};

const baseRemovePrivateConnectionRequest: object = {
    routingInstanceId: '',
    cicPrivateConnectionId: '',
};

export const RemovePrivateConnectionRequest = {
    encode(
        message: RemovePrivateConnectionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.routingInstanceId !== '') {
            writer.uint32(10).string(message.routingInstanceId);
        }
        if (message.cicPrivateConnectionId !== '') {
            writer.uint32(18).string(message.cicPrivateConnectionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RemovePrivateConnectionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRemovePrivateConnectionRequest } as RemovePrivateConnectionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routingInstanceId = reader.string();
                    break;
                case 2:
                    message.cicPrivateConnectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RemovePrivateConnectionRequest {
        const message = { ...baseRemovePrivateConnectionRequest } as RemovePrivateConnectionRequest;
        message.routingInstanceId =
            object.routingInstanceId !== undefined && object.routingInstanceId !== null
                ? String(object.routingInstanceId)
                : '';
        message.cicPrivateConnectionId =
            object.cicPrivateConnectionId !== undefined && object.cicPrivateConnectionId !== null
                ? String(object.cicPrivateConnectionId)
                : '';
        return message;
    },

    toJSON(message: RemovePrivateConnectionRequest): unknown {
        const obj: any = {};
        message.routingInstanceId !== undefined &&
            (obj.routingInstanceId = message.routingInstanceId);
        message.cicPrivateConnectionId !== undefined &&
            (obj.cicPrivateConnectionId = message.cicPrivateConnectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RemovePrivateConnectionRequest>, I>>(
        object: I,
    ): RemovePrivateConnectionRequest {
        const message = { ...baseRemovePrivateConnectionRequest } as RemovePrivateConnectionRequest;
        message.routingInstanceId = object.routingInstanceId ?? '';
        message.cicPrivateConnectionId = object.cicPrivateConnectionId ?? '';
        return message;
    },
};

const baseDeleteRoutingInstanceRequest: object = { routingInstanceId: '' };

export const DeleteRoutingInstanceRequest = {
    encode(
        message: DeleteRoutingInstanceRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.routingInstanceId !== '') {
            writer.uint32(10).string(message.routingInstanceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRoutingInstanceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteRoutingInstanceRequest } as DeleteRoutingInstanceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routingInstanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteRoutingInstanceRequest {
        const message = { ...baseDeleteRoutingInstanceRequest } as DeleteRoutingInstanceRequest;
        message.routingInstanceId =
            object.routingInstanceId !== undefined && object.routingInstanceId !== null
                ? String(object.routingInstanceId)
                : '';
        return message;
    },

    toJSON(message: DeleteRoutingInstanceRequest): unknown {
        const obj: any = {};
        message.routingInstanceId !== undefined &&
            (obj.routingInstanceId = message.routingInstanceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteRoutingInstanceRequest>, I>>(
        object: I,
    ): DeleteRoutingInstanceRequest {
        const message = { ...baseDeleteRoutingInstanceRequest } as DeleteRoutingInstanceRequest;
        message.routingInstanceId = object.routingInstanceId ?? '';
        return message;
    },
};

const baseDeleteRoutingInstanceMetadata: object = { routingInstanceId: '' };

export const DeleteRoutingInstanceMetadata = {
    encode(
        message: DeleteRoutingInstanceMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.routingInstanceId !== '') {
            writer.uint32(10).string(message.routingInstanceId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRoutingInstanceMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteRoutingInstanceMetadata } as DeleteRoutingInstanceMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routingInstanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteRoutingInstanceMetadata {
        const message = { ...baseDeleteRoutingInstanceMetadata } as DeleteRoutingInstanceMetadata;
        message.routingInstanceId =
            object.routingInstanceId !== undefined && object.routingInstanceId !== null
                ? String(object.routingInstanceId)
                : '';
        return message;
    },

    toJSON(message: DeleteRoutingInstanceMetadata): unknown {
        const obj: any = {};
        message.routingInstanceId !== undefined &&
            (obj.routingInstanceId = message.routingInstanceId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteRoutingInstanceMetadata>, I>>(
        object: I,
    ): DeleteRoutingInstanceMetadata {
        const message = { ...baseDeleteRoutingInstanceMetadata } as DeleteRoutingInstanceMetadata;
        message.routingInstanceId = object.routingInstanceId ?? '';
        return message;
    },
};

const baseListRoutingInstanceOperationsRequest: object = {
    routingInstanceId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListRoutingInstanceOperationsRequest = {
    encode(
        message: ListRoutingInstanceOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.routingInstanceId !== '') {
            writer.uint32(10).string(message.routingInstanceId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListRoutingInstanceOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListRoutingInstanceOperationsRequest,
        } as ListRoutingInstanceOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routingInstanceId = reader.string();
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

    fromJSON(object: any): ListRoutingInstanceOperationsRequest {
        const message = {
            ...baseListRoutingInstanceOperationsRequest,
        } as ListRoutingInstanceOperationsRequest;
        message.routingInstanceId =
            object.routingInstanceId !== undefined && object.routingInstanceId !== null
                ? String(object.routingInstanceId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListRoutingInstanceOperationsRequest): unknown {
        const obj: any = {};
        message.routingInstanceId !== undefined &&
            (obj.routingInstanceId = message.routingInstanceId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListRoutingInstanceOperationsRequest>, I>>(
        object: I,
    ): ListRoutingInstanceOperationsRequest {
        const message = {
            ...baseListRoutingInstanceOperationsRequest,
        } as ListRoutingInstanceOperationsRequest;
        message.routingInstanceId = object.routingInstanceId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListRoutingInstanceOperationsResponse: object = { nextPageToken: '' };

export const ListRoutingInstanceOperationsResponse = {
    encode(
        message: ListRoutingInstanceOperationsResponse,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListRoutingInstanceOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListRoutingInstanceOperationsResponse,
        } as ListRoutingInstanceOperationsResponse;
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

    fromJSON(object: any): ListRoutingInstanceOperationsResponse {
        const message = {
            ...baseListRoutingInstanceOperationsResponse,
        } as ListRoutingInstanceOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListRoutingInstanceOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListRoutingInstanceOperationsResponse>, I>>(
        object: I,
    ): ListRoutingInstanceOperationsResponse {
        const message = {
            ...baseListRoutingInstanceOperationsResponse,
        } as ListRoutingInstanceOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** A set of methods for managing RoutingInstance resources. */
export const RoutingInstanceServiceService = {
    /**
     * Returns the specified RoutingInstance resource.
     *
     * To get the list of available RoutingInstance resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.cloudrouter.v1.RoutingInstanceService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetRoutingInstanceRequest) =>
            Buffer.from(GetRoutingInstanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetRoutingInstanceRequest.decode(value),
        responseSerialize: (value: RoutingInstance) =>
            Buffer.from(RoutingInstance.encode(value).finish()),
        responseDeserialize: (value: Buffer) => RoutingInstance.decode(value),
    },
    /**
     * Returns the RoutingInstance resource by vpcNetworkId
     *
     * To get the list of available RoutingInstance resources, make a [List] request.
     */
    getByVpcNetworkId: {
        path: '/yandex.cloud.cloudrouter.v1.RoutingInstanceService/GetByVpcNetworkId',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetRoutingInstanceByVpcNetworkIdRequest) =>
            Buffer.from(GetRoutingInstanceByVpcNetworkIdRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetRoutingInstanceByVpcNetworkIdRequest.decode(value),
        responseSerialize: (value: RoutingInstance) =>
            Buffer.from(RoutingInstance.encode(value).finish()),
        responseDeserialize: (value: Buffer) => RoutingInstance.decode(value),
    },
    /**
     * Returns the RoutingInstance resource by cicPrivateConnectionId
     *
     * To get the list of available RoutingInstance resources, make a [List] request.
     */
    getByCicPrivateConnectionId: {
        path: '/yandex.cloud.cloudrouter.v1.RoutingInstanceService/GetByCicPrivateConnectionId',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetRoutingInstanceByCicPrivateConnectionIdRequest) =>
            Buffer.from(GetRoutingInstanceByCicPrivateConnectionIdRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetRoutingInstanceByCicPrivateConnectionIdRequest.decode(value),
        responseSerialize: (value: RoutingInstance) =>
            Buffer.from(RoutingInstance.encode(value).finish()),
        responseDeserialize: (value: Buffer) => RoutingInstance.decode(value),
    },
    /** Retrieves the list of RoutingInstance resources in the specified folder. */
    list: {
        path: '/yandex.cloud.cloudrouter.v1.RoutingInstanceService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListRoutingInstancesRequest) =>
            Buffer.from(ListRoutingInstancesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListRoutingInstancesRequest.decode(value),
        responseSerialize: (value: ListRoutingInstancesResponse) =>
            Buffer.from(ListRoutingInstancesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListRoutingInstancesResponse.decode(value),
    },
    /**
     * Creates a RoutingInstance resource in the specified folder using the data specified in the request.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: {
        path: '/yandex.cloud.cloudrouter.v1.RoutingInstanceService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateRoutingInstanceRequest) =>
            Buffer.from(CreateRoutingInstanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateRoutingInstanceRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Updates a RoutingInstance resource using the data specified in the request.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update: {
        path: '/yandex.cloud.cloudrouter.v1.RoutingInstanceService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateRoutingInstanceRequest) =>
            Buffer.from(UpdateRoutingInstanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateRoutingInstanceRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Upserts specified prefixes to a RoutingInstance resource.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    upsertPrefixes: {
        path: '/yandex.cloud.cloudrouter.v1.RoutingInstanceService/UpsertPrefixes',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpsertPrefixesRequest) =>
            Buffer.from(UpsertPrefixesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpsertPrefixesRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Removes specified prefixes from a RoutingInstance resource.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    removePrefixes: {
        path: '/yandex.cloud.cloudrouter.v1.RoutingInstanceService/RemovePrefixes',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: RemovePrefixesRequest) =>
            Buffer.from(RemovePrefixesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => RemovePrefixesRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Adds specified PrivateConnection to a RoutingInstance resource.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    addPrivateConnection: {
        path: '/yandex.cloud.cloudrouter.v1.RoutingInstanceService/AddPrivateConnection',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: AddPrivateConnectionRequest) =>
            Buffer.from(AddPrivateConnectionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => AddPrivateConnectionRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Removes specified PrivateConnection from a RoutingInstance resource.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    removePrivateConnection: {
        path: '/yandex.cloud.cloudrouter.v1.RoutingInstanceService/RemovePrivateConnection',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: RemovePrivateConnectionRequest) =>
            Buffer.from(RemovePrivateConnectionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => RemovePrivateConnectionRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Deletes a RoutingInstance resource.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    delete: {
        path: '/yandex.cloud.cloudrouter.v1.RoutingInstanceService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteRoutingInstanceRequest) =>
            Buffer.from(DeleteRoutingInstanceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteRoutingInstanceRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified RoutingInstance. */
    listOperations: {
        path: '/yandex.cloud.cloudrouter.v1.RoutingInstanceService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListRoutingInstanceOperationsRequest) =>
            Buffer.from(ListRoutingInstanceOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListRoutingInstanceOperationsRequest.decode(value),
        responseSerialize: (value: ListRoutingInstanceOperationsResponse) =>
            Buffer.from(ListRoutingInstanceOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListRoutingInstanceOperationsResponse.decode(value),
    },
} as const;

export interface RoutingInstanceServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified RoutingInstance resource.
     *
     * To get the list of available RoutingInstance resources, make a [List] request.
     */
    get: handleUnaryCall<GetRoutingInstanceRequest, RoutingInstance>;
    /**
     * Returns the RoutingInstance resource by vpcNetworkId
     *
     * To get the list of available RoutingInstance resources, make a [List] request.
     */
    getByVpcNetworkId: handleUnaryCall<GetRoutingInstanceByVpcNetworkIdRequest, RoutingInstance>;
    /**
     * Returns the RoutingInstance resource by cicPrivateConnectionId
     *
     * To get the list of available RoutingInstance resources, make a [List] request.
     */
    getByCicPrivateConnectionId: handleUnaryCall<
        GetRoutingInstanceByCicPrivateConnectionIdRequest,
        RoutingInstance
    >;
    /** Retrieves the list of RoutingInstance resources in the specified folder. */
    list: handleUnaryCall<ListRoutingInstancesRequest, ListRoutingInstancesResponse>;
    /**
     * Creates a RoutingInstance resource in the specified folder using the data specified in the request.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: handleUnaryCall<CreateRoutingInstanceRequest, Operation>;
    /**
     * Updates a RoutingInstance resource using the data specified in the request.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update: handleUnaryCall<UpdateRoutingInstanceRequest, Operation>;
    /**
     * Upserts specified prefixes to a RoutingInstance resource.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    upsertPrefixes: handleUnaryCall<UpsertPrefixesRequest, Operation>;
    /**
     * Removes specified prefixes from a RoutingInstance resource.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    removePrefixes: handleUnaryCall<RemovePrefixesRequest, Operation>;
    /**
     * Adds specified PrivateConnection to a RoutingInstance resource.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    addPrivateConnection: handleUnaryCall<AddPrivateConnectionRequest, Operation>;
    /**
     * Removes specified PrivateConnection from a RoutingInstance resource.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    removePrivateConnection: handleUnaryCall<RemovePrivateConnectionRequest, Operation>;
    /**
     * Deletes a RoutingInstance resource.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    delete: handleUnaryCall<DeleteRoutingInstanceRequest, Operation>;
    /** Lists operations for the specified RoutingInstance. */
    listOperations: handleUnaryCall<
        ListRoutingInstanceOperationsRequest,
        ListRoutingInstanceOperationsResponse
    >;
}

export interface RoutingInstanceServiceClient extends Client {
    /**
     * Returns the specified RoutingInstance resource.
     *
     * To get the list of available RoutingInstance resources, make a [List] request.
     */
    get(
        request: GetRoutingInstanceRequest,
        callback: (error: ServiceError | null, response: RoutingInstance) => void,
    ): ClientUnaryCall;
    get(
        request: GetRoutingInstanceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: RoutingInstance) => void,
    ): ClientUnaryCall;
    get(
        request: GetRoutingInstanceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: RoutingInstance) => void,
    ): ClientUnaryCall;
    /**
     * Returns the RoutingInstance resource by vpcNetworkId
     *
     * To get the list of available RoutingInstance resources, make a [List] request.
     */
    getByVpcNetworkId(
        request: GetRoutingInstanceByVpcNetworkIdRequest,
        callback: (error: ServiceError | null, response: RoutingInstance) => void,
    ): ClientUnaryCall;
    getByVpcNetworkId(
        request: GetRoutingInstanceByVpcNetworkIdRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: RoutingInstance) => void,
    ): ClientUnaryCall;
    getByVpcNetworkId(
        request: GetRoutingInstanceByVpcNetworkIdRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: RoutingInstance) => void,
    ): ClientUnaryCall;
    /**
     * Returns the RoutingInstance resource by cicPrivateConnectionId
     *
     * To get the list of available RoutingInstance resources, make a [List] request.
     */
    getByCicPrivateConnectionId(
        request: GetRoutingInstanceByCicPrivateConnectionIdRequest,
        callback: (error: ServiceError | null, response: RoutingInstance) => void,
    ): ClientUnaryCall;
    getByCicPrivateConnectionId(
        request: GetRoutingInstanceByCicPrivateConnectionIdRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: RoutingInstance) => void,
    ): ClientUnaryCall;
    getByCicPrivateConnectionId(
        request: GetRoutingInstanceByCicPrivateConnectionIdRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: RoutingInstance) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of RoutingInstance resources in the specified folder. */
    list(
        request: ListRoutingInstancesRequest,
        callback: (error: ServiceError | null, response: ListRoutingInstancesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListRoutingInstancesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListRoutingInstancesResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListRoutingInstancesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListRoutingInstancesResponse) => void,
    ): ClientUnaryCall;
    /**
     * Creates a RoutingInstance resource in the specified folder using the data specified in the request.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create(
        request: CreateRoutingInstanceRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateRoutingInstanceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateRoutingInstanceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Updates a RoutingInstance resource using the data specified in the request.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update(
        request: UpdateRoutingInstanceRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateRoutingInstanceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateRoutingInstanceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Upserts specified prefixes to a RoutingInstance resource.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    upsertPrefixes(
        request: UpsertPrefixesRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    upsertPrefixes(
        request: UpsertPrefixesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    upsertPrefixes(
        request: UpsertPrefixesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Removes specified prefixes from a RoutingInstance resource.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    removePrefixes(
        request: RemovePrefixesRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    removePrefixes(
        request: RemovePrefixesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    removePrefixes(
        request: RemovePrefixesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Adds specified PrivateConnection to a RoutingInstance resource.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    addPrivateConnection(
        request: AddPrivateConnectionRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    addPrivateConnection(
        request: AddPrivateConnectionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    addPrivateConnection(
        request: AddPrivateConnectionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Removes specified PrivateConnection from a RoutingInstance resource.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    removePrivateConnection(
        request: RemovePrivateConnectionRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    removePrivateConnection(
        request: RemovePrivateConnectionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    removePrivateConnection(
        request: RemovePrivateConnectionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Deletes a RoutingInstance resource.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    delete(
        request: DeleteRoutingInstanceRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteRoutingInstanceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteRoutingInstanceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists operations for the specified RoutingInstance. */
    listOperations(
        request: ListRoutingInstanceOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListRoutingInstanceOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListRoutingInstanceOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListRoutingInstanceOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListRoutingInstanceOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListRoutingInstanceOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
}

export const RoutingInstanceServiceClient = makeGenericClientConstructor(
    RoutingInstanceServiceService,
    'yandex.cloud.cloudrouter.v1.RoutingInstanceService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): RoutingInstanceServiceClient;
    service: typeof RoutingInstanceServiceService;
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
