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
import { Peering } from '../../../../yandex/cloud/cic/v1/peering';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import {
    PrivateConnection,
    PrivateConnection_StaticRoute,
} from '../../../../yandex/cloud/cic/v1/private_connection';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { Int64Value } from '../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.cic.v1';

export interface GetPrivateConnectionRequest {
    /**
     * ID of the PrivateConnection resource to return.
     * To get the privateConnection ID use a [PrivateConnectionService.List] request.
     */
    privateConnectionId: string;
}

export interface ListPrivateConnectionsRequest {
    /**
     * ID of the folder to list PrivateConnection resources.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListPrivatesConnectionResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListPrivatesConnectionResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Subnet.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
}

export interface ListPrivateConnectionsResponse {
    /** List of PrivateConnection resources. */
    privateConnections: PrivateConnection[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListPrivateConnectionsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListPrivateConnectionsRequest.page_token] query parameter
     * in the next list request. Subsequent list requests will have their own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreatePrivateConnectionRequest {
    /**
     * Name of the privateConnection.
     * The name must be unique within the folder.
     * Value must match the regular expression ``\|[a-zA-Z]([-_a-zA-Z0-9]{0,61}[a-zA-Z0-9])?``.
     */
    name: string;
    /** Optional description of the privateConnection. 0-256 characters long. */
    description: string;
    /** ID of the folder that the privateConnection belongs to. */
    folderId: string;
    /** ID of the region that the privateConnection belongs to. */
    regionId: string;
    /** ID of the trunk_connection that the privateConnection belongs to. */
    trunkConnectionId: string;
    /**
     * VLAN_ID that the privateConnection uses in multiplexing.
     * Not used in connections over partners-II
     * Value range: [1, 4095]
     */
    vlanId?: number;
    /** IPv4 peering config of connection */
    ipv4Peering?: Peering;
    /** IPv4 StaticRoute config of connection */
    ipv4StaticRoutes: PrivateConnection_StaticRoute[];
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

export interface CreatePrivateConnectionRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreatePrivateConnectionMetadata {
    /** ID of the PrivateConnection resource. */
    privateConnectionId: string;
}

export interface UpdatePrivateConnectionRequest {
    /** ID of the PrivateConnection resource. */
    privateConnectionId: string;
    /** Field mask that specifies which fields of the PrivateConnection resource are going to be updated. */
    updateMask?: FieldMask;
    /**
     * Name of the privateConnection.
     * The name must be unique within the folder.
     * Value must match the regular expression ``\|[a-zA-Z]([-_a-zA-Z0-9]{0,61}[a-zA-Z0-9])?``.
     */
    name: string;
    /** Optional description of the privateConnection. 0-256 characters long. */
    description: string;
    /** ID of the region that the privateConnection belongs to. */
    regionId: string;
    /** ID of the trunk_connection that the privateConnection belongs to. */
    trunkConnectionId: string;
    /**
     * VLAN_ID that the privateConnection uses in multiplexing.
     * Not used in connections over partners-II
     * Value range: [1, 4095]
     */
    vlanId?: number;
    /** IPv4 peering config of connection */
    ipv4Peering?: Peering;
    /** IPv4 StaticRoute config of connection */
    ipv4StaticRoutes: PrivateConnection_StaticRoute[];
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

export interface UpdatePrivateConnectionRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdatePrivateConnectionMetadata {
    /** ID of the PrivateConnection resource. */
    privateConnectionId: string;
}

export interface DeletePrivateConnectionRequest {
    /** ID of the PrivateConnection resource. */
    privateConnectionId: string;
}

export interface DeletePrivateConnectionMetadata {
    /** ID of the PrivateConnection resource. */
    privateConnectionId: string;
}

export interface UpsertStaticRouteRequest {
    /** ID of the PrivateConnection resource. */
    privateConnectionId: string;
    /** IPv4 StaticRoute configs to upsert */
    ipv4StaticRoutes: PrivateConnection_StaticRoute[];
}

export interface UpsertStaticRouteMetadata {
    /** ID of the PrivateConnection resource. */
    privateConnectionId: string;
}

export interface RemoveStaticRouteRequest {
    /** ID of the PrivateConnection resource. */
    privateConnectionId: string;
    /** IPv4 StaticRoute configs to remove */
    ipv4StaticRoutes: PrivateConnection_StaticRoute[];
}

export interface RemoveStaticRouteMetadata {
    /** ID of the PrivateConnection resource. */
    privateConnectionId: string;
}

export interface ListPrivateConnectionOperationsRequest {
    /** ID of the PrivateConnection resource. */
    privateConnectionId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListPrivateConnectionOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListPrivateConnectionOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListPrivateConnectionOperationsResponse {
    /** List of PrivateConnection operations. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListPrivateConnectionOperationsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListPrivateConnectionOperationsRequest.page_token] query parameter
     * in the next list request. Subsequent list requests will have their own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetPrivateConnectionRequest: object = { privateConnectionId: '' };

export const GetPrivateConnectionRequest = {
    encode(
        message: GetPrivateConnectionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.privateConnectionId !== '') {
            writer.uint32(10).string(message.privateConnectionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetPrivateConnectionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetPrivateConnectionRequest } as GetPrivateConnectionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.privateConnectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetPrivateConnectionRequest {
        const message = { ...baseGetPrivateConnectionRequest } as GetPrivateConnectionRequest;
        message.privateConnectionId =
            object.privateConnectionId !== undefined && object.privateConnectionId !== null
                ? String(object.privateConnectionId)
                : '';
        return message;
    },

    toJSON(message: GetPrivateConnectionRequest): unknown {
        const obj: any = {};
        message.privateConnectionId !== undefined &&
            (obj.privateConnectionId = message.privateConnectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetPrivateConnectionRequest>, I>>(
        object: I,
    ): GetPrivateConnectionRequest {
        const message = { ...baseGetPrivateConnectionRequest } as GetPrivateConnectionRequest;
        message.privateConnectionId = object.privateConnectionId ?? '';
        return message;
    },
};

const baseListPrivateConnectionsRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListPrivateConnectionsRequest = {
    encode(
        message: ListPrivateConnectionsRequest,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListPrivateConnectionsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListPrivateConnectionsRequest } as ListPrivateConnectionsRequest;
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

    fromJSON(object: any): ListPrivateConnectionsRequest {
        const message = { ...baseListPrivateConnectionsRequest } as ListPrivateConnectionsRequest;
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

    toJSON(message: ListPrivateConnectionsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPrivateConnectionsRequest>, I>>(
        object: I,
    ): ListPrivateConnectionsRequest {
        const message = { ...baseListPrivateConnectionsRequest } as ListPrivateConnectionsRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListPrivateConnectionsResponse: object = { nextPageToken: '' };

export const ListPrivateConnectionsResponse = {
    encode(
        message: ListPrivateConnectionsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.privateConnections) {
            PrivateConnection.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListPrivateConnectionsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListPrivateConnectionsResponse } as ListPrivateConnectionsResponse;
        message.privateConnections = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.privateConnections.push(
                        PrivateConnection.decode(reader, reader.uint32()),
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

    fromJSON(object: any): ListPrivateConnectionsResponse {
        const message = { ...baseListPrivateConnectionsResponse } as ListPrivateConnectionsResponse;
        message.privateConnections = (object.privateConnections ?? []).map((e: any) =>
            PrivateConnection.fromJSON(e),
        );
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListPrivateConnectionsResponse): unknown {
        const obj: any = {};
        if (message.privateConnections) {
            obj.privateConnections = message.privateConnections.map((e) =>
                e ? PrivateConnection.toJSON(e) : undefined,
            );
        } else {
            obj.privateConnections = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPrivateConnectionsResponse>, I>>(
        object: I,
    ): ListPrivateConnectionsResponse {
        const message = { ...baseListPrivateConnectionsResponse } as ListPrivateConnectionsResponse;
        message.privateConnections =
            object.privateConnections?.map((e) => PrivateConnection.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreatePrivateConnectionRequest: object = {
    name: '',
    description: '',
    folderId: '',
    regionId: '',
    trunkConnectionId: '',
};

export const CreatePrivateConnectionRequest = {
    encode(
        message: CreatePrivateConnectionRequest,
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
        if (message.trunkConnectionId !== '') {
            writer.uint32(50).string(message.trunkConnectionId);
        }
        if (message.vlanId !== undefined) {
            Int64Value.encode({ value: message.vlanId! }, writer.uint32(58).fork()).ldelim();
        }
        if (message.ipv4Peering !== undefined) {
            Peering.encode(message.ipv4Peering, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.ipv4StaticRoutes) {
            PrivateConnection_StaticRoute.encode(v!, writer.uint32(154).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreatePrivateConnectionRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(210).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePrivateConnectionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreatePrivateConnectionRequest } as CreatePrivateConnectionRequest;
        message.ipv4StaticRoutes = [];
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
                    message.trunkConnectionId = reader.string();
                    break;
                case 7:
                    message.vlanId = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.ipv4Peering = Peering.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.ipv4StaticRoutes.push(
                        PrivateConnection_StaticRoute.decode(reader, reader.uint32()),
                    );
                    break;
                case 26:
                    const entry26 = CreatePrivateConnectionRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry26.value !== undefined) {
                        message.labels[entry26.key] = entry26.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreatePrivateConnectionRequest {
        const message = { ...baseCreatePrivateConnectionRequest } as CreatePrivateConnectionRequest;
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
        message.trunkConnectionId =
            object.trunkConnectionId !== undefined && object.trunkConnectionId !== null
                ? String(object.trunkConnectionId)
                : '';
        message.vlanId =
            object.vlanId !== undefined && object.vlanId !== null
                ? Number(object.vlanId)
                : undefined;
        message.ipv4Peering =
            object.ipv4Peering !== undefined && object.ipv4Peering !== null
                ? Peering.fromJSON(object.ipv4Peering)
                : undefined;
        message.ipv4StaticRoutes = (object.ipv4StaticRoutes ?? []).map((e: any) =>
            PrivateConnection_StaticRoute.fromJSON(e),
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

    toJSON(message: CreatePrivateConnectionRequest): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.regionId !== undefined && (obj.regionId = message.regionId);
        message.trunkConnectionId !== undefined &&
            (obj.trunkConnectionId = message.trunkConnectionId);
        message.vlanId !== undefined && (obj.vlanId = message.vlanId);
        message.ipv4Peering !== undefined &&
            (obj.ipv4Peering = message.ipv4Peering
                ? Peering.toJSON(message.ipv4Peering)
                : undefined);
        if (message.ipv4StaticRoutes) {
            obj.ipv4StaticRoutes = message.ipv4StaticRoutes.map((e) =>
                e ? PrivateConnection_StaticRoute.toJSON(e) : undefined,
            );
        } else {
            obj.ipv4StaticRoutes = [];
        }
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreatePrivateConnectionRequest>, I>>(
        object: I,
    ): CreatePrivateConnectionRequest {
        const message = { ...baseCreatePrivateConnectionRequest } as CreatePrivateConnectionRequest;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.folderId = object.folderId ?? '';
        message.regionId = object.regionId ?? '';
        message.trunkConnectionId = object.trunkConnectionId ?? '';
        message.vlanId = object.vlanId ?? undefined;
        message.ipv4Peering =
            object.ipv4Peering !== undefined && object.ipv4Peering !== null
                ? Peering.fromPartial(object.ipv4Peering)
                : undefined;
        message.ipv4StaticRoutes =
            object.ipv4StaticRoutes?.map((e) => PrivateConnection_StaticRoute.fromPartial(e)) || [];
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

const baseCreatePrivateConnectionRequest_LabelsEntry: object = { key: '', value: '' };

export const CreatePrivateConnectionRequest_LabelsEntry = {
    encode(
        message: CreatePrivateConnectionRequest_LabelsEntry,
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
    ): CreatePrivateConnectionRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreatePrivateConnectionRequest_LabelsEntry,
        } as CreatePrivateConnectionRequest_LabelsEntry;
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

    fromJSON(object: any): CreatePrivateConnectionRequest_LabelsEntry {
        const message = {
            ...baseCreatePrivateConnectionRequest_LabelsEntry,
        } as CreatePrivateConnectionRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreatePrivateConnectionRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreatePrivateConnectionRequest_LabelsEntry>, I>>(
        object: I,
    ): CreatePrivateConnectionRequest_LabelsEntry {
        const message = {
            ...baseCreatePrivateConnectionRequest_LabelsEntry,
        } as CreatePrivateConnectionRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreatePrivateConnectionMetadata: object = { privateConnectionId: '' };

export const CreatePrivateConnectionMetadata = {
    encode(
        message: CreatePrivateConnectionMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.privateConnectionId !== '') {
            writer.uint32(10).string(message.privateConnectionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePrivateConnectionMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreatePrivateConnectionMetadata,
        } as CreatePrivateConnectionMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.privateConnectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreatePrivateConnectionMetadata {
        const message = {
            ...baseCreatePrivateConnectionMetadata,
        } as CreatePrivateConnectionMetadata;
        message.privateConnectionId =
            object.privateConnectionId !== undefined && object.privateConnectionId !== null
                ? String(object.privateConnectionId)
                : '';
        return message;
    },

    toJSON(message: CreatePrivateConnectionMetadata): unknown {
        const obj: any = {};
        message.privateConnectionId !== undefined &&
            (obj.privateConnectionId = message.privateConnectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreatePrivateConnectionMetadata>, I>>(
        object: I,
    ): CreatePrivateConnectionMetadata {
        const message = {
            ...baseCreatePrivateConnectionMetadata,
        } as CreatePrivateConnectionMetadata;
        message.privateConnectionId = object.privateConnectionId ?? '';
        return message;
    },
};

const baseUpdatePrivateConnectionRequest: object = {
    privateConnectionId: '',
    name: '',
    description: '',
    regionId: '',
    trunkConnectionId: '',
};

export const UpdatePrivateConnectionRequest = {
    encode(
        message: UpdatePrivateConnectionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.privateConnectionId !== '') {
            writer.uint32(10).string(message.privateConnectionId);
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
        if (message.trunkConnectionId !== '') {
            writer.uint32(66).string(message.trunkConnectionId);
        }
        if (message.vlanId !== undefined) {
            Int64Value.encode({ value: message.vlanId! }, writer.uint32(74).fork()).ldelim();
        }
        if (message.ipv4Peering !== undefined) {
            Peering.encode(message.ipv4Peering, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.ipv4StaticRoutes) {
            PrivateConnection_StaticRoute.encode(v!, writer.uint32(154).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdatePrivateConnectionRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(210).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePrivateConnectionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdatePrivateConnectionRequest } as UpdatePrivateConnectionRequest;
        message.ipv4StaticRoutes = [];
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.privateConnectionId = reader.string();
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
                    message.trunkConnectionId = reader.string();
                    break;
                case 9:
                    message.vlanId = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.ipv4Peering = Peering.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.ipv4StaticRoutes.push(
                        PrivateConnection_StaticRoute.decode(reader, reader.uint32()),
                    );
                    break;
                case 26:
                    const entry26 = UpdatePrivateConnectionRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry26.value !== undefined) {
                        message.labels[entry26.key] = entry26.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdatePrivateConnectionRequest {
        const message = { ...baseUpdatePrivateConnectionRequest } as UpdatePrivateConnectionRequest;
        message.privateConnectionId =
            object.privateConnectionId !== undefined && object.privateConnectionId !== null
                ? String(object.privateConnectionId)
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
        message.trunkConnectionId =
            object.trunkConnectionId !== undefined && object.trunkConnectionId !== null
                ? String(object.trunkConnectionId)
                : '';
        message.vlanId =
            object.vlanId !== undefined && object.vlanId !== null
                ? Number(object.vlanId)
                : undefined;
        message.ipv4Peering =
            object.ipv4Peering !== undefined && object.ipv4Peering !== null
                ? Peering.fromJSON(object.ipv4Peering)
                : undefined;
        message.ipv4StaticRoutes = (object.ipv4StaticRoutes ?? []).map((e: any) =>
            PrivateConnection_StaticRoute.fromJSON(e),
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

    toJSON(message: UpdatePrivateConnectionRequest): unknown {
        const obj: any = {};
        message.privateConnectionId !== undefined &&
            (obj.privateConnectionId = message.privateConnectionId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.regionId !== undefined && (obj.regionId = message.regionId);
        message.trunkConnectionId !== undefined &&
            (obj.trunkConnectionId = message.trunkConnectionId);
        message.vlanId !== undefined && (obj.vlanId = message.vlanId);
        message.ipv4Peering !== undefined &&
            (obj.ipv4Peering = message.ipv4Peering
                ? Peering.toJSON(message.ipv4Peering)
                : undefined);
        if (message.ipv4StaticRoutes) {
            obj.ipv4StaticRoutes = message.ipv4StaticRoutes.map((e) =>
                e ? PrivateConnection_StaticRoute.toJSON(e) : undefined,
            );
        } else {
            obj.ipv4StaticRoutes = [];
        }
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdatePrivateConnectionRequest>, I>>(
        object: I,
    ): UpdatePrivateConnectionRequest {
        const message = { ...baseUpdatePrivateConnectionRequest } as UpdatePrivateConnectionRequest;
        message.privateConnectionId = object.privateConnectionId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.regionId = object.regionId ?? '';
        message.trunkConnectionId = object.trunkConnectionId ?? '';
        message.vlanId = object.vlanId ?? undefined;
        message.ipv4Peering =
            object.ipv4Peering !== undefined && object.ipv4Peering !== null
                ? Peering.fromPartial(object.ipv4Peering)
                : undefined;
        message.ipv4StaticRoutes =
            object.ipv4StaticRoutes?.map((e) => PrivateConnection_StaticRoute.fromPartial(e)) || [];
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

const baseUpdatePrivateConnectionRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdatePrivateConnectionRequest_LabelsEntry = {
    encode(
        message: UpdatePrivateConnectionRequest_LabelsEntry,
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
    ): UpdatePrivateConnectionRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdatePrivateConnectionRequest_LabelsEntry,
        } as UpdatePrivateConnectionRequest_LabelsEntry;
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

    fromJSON(object: any): UpdatePrivateConnectionRequest_LabelsEntry {
        const message = {
            ...baseUpdatePrivateConnectionRequest_LabelsEntry,
        } as UpdatePrivateConnectionRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdatePrivateConnectionRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdatePrivateConnectionRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdatePrivateConnectionRequest_LabelsEntry {
        const message = {
            ...baseUpdatePrivateConnectionRequest_LabelsEntry,
        } as UpdatePrivateConnectionRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdatePrivateConnectionMetadata: object = { privateConnectionId: '' };

export const UpdatePrivateConnectionMetadata = {
    encode(
        message: UpdatePrivateConnectionMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.privateConnectionId !== '') {
            writer.uint32(10).string(message.privateConnectionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePrivateConnectionMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdatePrivateConnectionMetadata,
        } as UpdatePrivateConnectionMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.privateConnectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdatePrivateConnectionMetadata {
        const message = {
            ...baseUpdatePrivateConnectionMetadata,
        } as UpdatePrivateConnectionMetadata;
        message.privateConnectionId =
            object.privateConnectionId !== undefined && object.privateConnectionId !== null
                ? String(object.privateConnectionId)
                : '';
        return message;
    },

    toJSON(message: UpdatePrivateConnectionMetadata): unknown {
        const obj: any = {};
        message.privateConnectionId !== undefined &&
            (obj.privateConnectionId = message.privateConnectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdatePrivateConnectionMetadata>, I>>(
        object: I,
    ): UpdatePrivateConnectionMetadata {
        const message = {
            ...baseUpdatePrivateConnectionMetadata,
        } as UpdatePrivateConnectionMetadata;
        message.privateConnectionId = object.privateConnectionId ?? '';
        return message;
    },
};

const baseDeletePrivateConnectionRequest: object = { privateConnectionId: '' };

export const DeletePrivateConnectionRequest = {
    encode(
        message: DeletePrivateConnectionRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.privateConnectionId !== '') {
            writer.uint32(10).string(message.privateConnectionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeletePrivateConnectionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeletePrivateConnectionRequest } as DeletePrivateConnectionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.privateConnectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeletePrivateConnectionRequest {
        const message = { ...baseDeletePrivateConnectionRequest } as DeletePrivateConnectionRequest;
        message.privateConnectionId =
            object.privateConnectionId !== undefined && object.privateConnectionId !== null
                ? String(object.privateConnectionId)
                : '';
        return message;
    },

    toJSON(message: DeletePrivateConnectionRequest): unknown {
        const obj: any = {};
        message.privateConnectionId !== undefined &&
            (obj.privateConnectionId = message.privateConnectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeletePrivateConnectionRequest>, I>>(
        object: I,
    ): DeletePrivateConnectionRequest {
        const message = { ...baseDeletePrivateConnectionRequest } as DeletePrivateConnectionRequest;
        message.privateConnectionId = object.privateConnectionId ?? '';
        return message;
    },
};

const baseDeletePrivateConnectionMetadata: object = { privateConnectionId: '' };

export const DeletePrivateConnectionMetadata = {
    encode(
        message: DeletePrivateConnectionMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.privateConnectionId !== '') {
            writer.uint32(10).string(message.privateConnectionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeletePrivateConnectionMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeletePrivateConnectionMetadata,
        } as DeletePrivateConnectionMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.privateConnectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeletePrivateConnectionMetadata {
        const message = {
            ...baseDeletePrivateConnectionMetadata,
        } as DeletePrivateConnectionMetadata;
        message.privateConnectionId =
            object.privateConnectionId !== undefined && object.privateConnectionId !== null
                ? String(object.privateConnectionId)
                : '';
        return message;
    },

    toJSON(message: DeletePrivateConnectionMetadata): unknown {
        const obj: any = {};
        message.privateConnectionId !== undefined &&
            (obj.privateConnectionId = message.privateConnectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeletePrivateConnectionMetadata>, I>>(
        object: I,
    ): DeletePrivateConnectionMetadata {
        const message = {
            ...baseDeletePrivateConnectionMetadata,
        } as DeletePrivateConnectionMetadata;
        message.privateConnectionId = object.privateConnectionId ?? '';
        return message;
    },
};

const baseUpsertStaticRouteRequest: object = { privateConnectionId: '' };

export const UpsertStaticRouteRequest = {
    encode(
        message: UpsertStaticRouteRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.privateConnectionId !== '') {
            writer.uint32(10).string(message.privateConnectionId);
        }
        for (const v of message.ipv4StaticRoutes) {
            PrivateConnection_StaticRoute.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpsertStaticRouteRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpsertStaticRouteRequest } as UpsertStaticRouteRequest;
        message.ipv4StaticRoutes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.privateConnectionId = reader.string();
                    break;
                case 2:
                    message.ipv4StaticRoutes.push(
                        PrivateConnection_StaticRoute.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpsertStaticRouteRequest {
        const message = { ...baseUpsertStaticRouteRequest } as UpsertStaticRouteRequest;
        message.privateConnectionId =
            object.privateConnectionId !== undefined && object.privateConnectionId !== null
                ? String(object.privateConnectionId)
                : '';
        message.ipv4StaticRoutes = (object.ipv4StaticRoutes ?? []).map((e: any) =>
            PrivateConnection_StaticRoute.fromJSON(e),
        );
        return message;
    },

    toJSON(message: UpsertStaticRouteRequest): unknown {
        const obj: any = {};
        message.privateConnectionId !== undefined &&
            (obj.privateConnectionId = message.privateConnectionId);
        if (message.ipv4StaticRoutes) {
            obj.ipv4StaticRoutes = message.ipv4StaticRoutes.map((e) =>
                e ? PrivateConnection_StaticRoute.toJSON(e) : undefined,
            );
        } else {
            obj.ipv4StaticRoutes = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpsertStaticRouteRequest>, I>>(
        object: I,
    ): UpsertStaticRouteRequest {
        const message = { ...baseUpsertStaticRouteRequest } as UpsertStaticRouteRequest;
        message.privateConnectionId = object.privateConnectionId ?? '';
        message.ipv4StaticRoutes =
            object.ipv4StaticRoutes?.map((e) => PrivateConnection_StaticRoute.fromPartial(e)) || [];
        return message;
    },
};

const baseUpsertStaticRouteMetadata: object = { privateConnectionId: '' };

export const UpsertStaticRouteMetadata = {
    encode(
        message: UpsertStaticRouteMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.privateConnectionId !== '') {
            writer.uint32(10).string(message.privateConnectionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpsertStaticRouteMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpsertStaticRouteMetadata } as UpsertStaticRouteMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.privateConnectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpsertStaticRouteMetadata {
        const message = { ...baseUpsertStaticRouteMetadata } as UpsertStaticRouteMetadata;
        message.privateConnectionId =
            object.privateConnectionId !== undefined && object.privateConnectionId !== null
                ? String(object.privateConnectionId)
                : '';
        return message;
    },

    toJSON(message: UpsertStaticRouteMetadata): unknown {
        const obj: any = {};
        message.privateConnectionId !== undefined &&
            (obj.privateConnectionId = message.privateConnectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpsertStaticRouteMetadata>, I>>(
        object: I,
    ): UpsertStaticRouteMetadata {
        const message = { ...baseUpsertStaticRouteMetadata } as UpsertStaticRouteMetadata;
        message.privateConnectionId = object.privateConnectionId ?? '';
        return message;
    },
};

const baseRemoveStaticRouteRequest: object = { privateConnectionId: '' };

export const RemoveStaticRouteRequest = {
    encode(
        message: RemoveStaticRouteRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.privateConnectionId !== '') {
            writer.uint32(10).string(message.privateConnectionId);
        }
        for (const v of message.ipv4StaticRoutes) {
            PrivateConnection_StaticRoute.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveStaticRouteRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRemoveStaticRouteRequest } as RemoveStaticRouteRequest;
        message.ipv4StaticRoutes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.privateConnectionId = reader.string();
                    break;
                case 2:
                    message.ipv4StaticRoutes.push(
                        PrivateConnection_StaticRoute.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RemoveStaticRouteRequest {
        const message = { ...baseRemoveStaticRouteRequest } as RemoveStaticRouteRequest;
        message.privateConnectionId =
            object.privateConnectionId !== undefined && object.privateConnectionId !== null
                ? String(object.privateConnectionId)
                : '';
        message.ipv4StaticRoutes = (object.ipv4StaticRoutes ?? []).map((e: any) =>
            PrivateConnection_StaticRoute.fromJSON(e),
        );
        return message;
    },

    toJSON(message: RemoveStaticRouteRequest): unknown {
        const obj: any = {};
        message.privateConnectionId !== undefined &&
            (obj.privateConnectionId = message.privateConnectionId);
        if (message.ipv4StaticRoutes) {
            obj.ipv4StaticRoutes = message.ipv4StaticRoutes.map((e) =>
                e ? PrivateConnection_StaticRoute.toJSON(e) : undefined,
            );
        } else {
            obj.ipv4StaticRoutes = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RemoveStaticRouteRequest>, I>>(
        object: I,
    ): RemoveStaticRouteRequest {
        const message = { ...baseRemoveStaticRouteRequest } as RemoveStaticRouteRequest;
        message.privateConnectionId = object.privateConnectionId ?? '';
        message.ipv4StaticRoutes =
            object.ipv4StaticRoutes?.map((e) => PrivateConnection_StaticRoute.fromPartial(e)) || [];
        return message;
    },
};

const baseRemoveStaticRouteMetadata: object = { privateConnectionId: '' };

export const RemoveStaticRouteMetadata = {
    encode(
        message: RemoveStaticRouteMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.privateConnectionId !== '') {
            writer.uint32(10).string(message.privateConnectionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveStaticRouteMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRemoveStaticRouteMetadata } as RemoveStaticRouteMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.privateConnectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RemoveStaticRouteMetadata {
        const message = { ...baseRemoveStaticRouteMetadata } as RemoveStaticRouteMetadata;
        message.privateConnectionId =
            object.privateConnectionId !== undefined && object.privateConnectionId !== null
                ? String(object.privateConnectionId)
                : '';
        return message;
    },

    toJSON(message: RemoveStaticRouteMetadata): unknown {
        const obj: any = {};
        message.privateConnectionId !== undefined &&
            (obj.privateConnectionId = message.privateConnectionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RemoveStaticRouteMetadata>, I>>(
        object: I,
    ): RemoveStaticRouteMetadata {
        const message = { ...baseRemoveStaticRouteMetadata } as RemoveStaticRouteMetadata;
        message.privateConnectionId = object.privateConnectionId ?? '';
        return message;
    },
};

const baseListPrivateConnectionOperationsRequest: object = {
    privateConnectionId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListPrivateConnectionOperationsRequest = {
    encode(
        message: ListPrivateConnectionOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.privateConnectionId !== '') {
            writer.uint32(10).string(message.privateConnectionId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): ListPrivateConnectionOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListPrivateConnectionOperationsRequest,
        } as ListPrivateConnectionOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.privateConnectionId = reader.string();
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

    fromJSON(object: any): ListPrivateConnectionOperationsRequest {
        const message = {
            ...baseListPrivateConnectionOperationsRequest,
        } as ListPrivateConnectionOperationsRequest;
        message.privateConnectionId =
            object.privateConnectionId !== undefined && object.privateConnectionId !== null
                ? String(object.privateConnectionId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListPrivateConnectionOperationsRequest): unknown {
        const obj: any = {};
        message.privateConnectionId !== undefined &&
            (obj.privateConnectionId = message.privateConnectionId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPrivateConnectionOperationsRequest>, I>>(
        object: I,
    ): ListPrivateConnectionOperationsRequest {
        const message = {
            ...baseListPrivateConnectionOperationsRequest,
        } as ListPrivateConnectionOperationsRequest;
        message.privateConnectionId = object.privateConnectionId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListPrivateConnectionOperationsResponse: object = { nextPageToken: '' };

export const ListPrivateConnectionOperationsResponse = {
    encode(
        message: ListPrivateConnectionOperationsResponse,
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): ListPrivateConnectionOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListPrivateConnectionOperationsResponse,
        } as ListPrivateConnectionOperationsResponse;
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

    fromJSON(object: any): ListPrivateConnectionOperationsResponse {
        const message = {
            ...baseListPrivateConnectionOperationsResponse,
        } as ListPrivateConnectionOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListPrivateConnectionOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListPrivateConnectionOperationsResponse>, I>>(
        object: I,
    ): ListPrivateConnectionOperationsResponse {
        const message = {
            ...baseListPrivateConnectionOperationsResponse,
        } as ListPrivateConnectionOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

/** A set of methods for managing PrivateConnection resources. */
export const PrivateConnectionServiceService = {
    /**
     * Returns the specified PrivateConnection resource.
     *
     * To get the list of available PrivateConnection resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.cic.v1.PrivateConnectionService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetPrivateConnectionRequest) =>
            Buffer.from(GetPrivateConnectionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetPrivateConnectionRequest.decode(value),
        responseSerialize: (value: PrivateConnection) =>
            Buffer.from(PrivateConnection.encode(value).finish()),
        responseDeserialize: (value: Buffer) => PrivateConnection.decode(value),
    },
    /** Retrieves the list of PrivateConnection resources in the specified folder. */
    list: {
        path: '/yandex.cloud.cic.v1.PrivateConnectionService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListPrivateConnectionsRequest) =>
            Buffer.from(ListPrivateConnectionsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListPrivateConnectionsRequest.decode(value),
        responseSerialize: (value: ListPrivateConnectionsResponse) =>
            Buffer.from(ListPrivateConnectionsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListPrivateConnectionsResponse.decode(value),
    },
    /**
     * Creates a PrivateConnection resource in the specified folder using the data specified in the request.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: {
        path: '/yandex.cloud.cic.v1.PrivateConnectionService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreatePrivateConnectionRequest) =>
            Buffer.from(CreatePrivateConnectionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreatePrivateConnectionRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Updates a PrivateConnection resource using the data specified in the request.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update: {
        path: '/yandex.cloud.cic.v1.PrivateConnectionService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdatePrivateConnectionRequest) =>
            Buffer.from(UpdatePrivateConnectionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdatePrivateConnectionRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Deletes a PrivateConnection resource.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    delete: {
        path: '/yandex.cloud.cic.v1.PrivateConnectionService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeletePrivateConnectionRequest) =>
            Buffer.from(DeletePrivateConnectionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeletePrivateConnectionRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Upserts specified static routes to a PrivateConnection resource.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    upsertStaticRoute: {
        path: '/yandex.cloud.cic.v1.PrivateConnectionService/UpsertStaticRoute',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpsertStaticRouteRequest) =>
            Buffer.from(UpsertStaticRouteRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpsertStaticRouteRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Removes specified static routes to a PrivateConnection resource.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    removeStaticRoute: {
        path: '/yandex.cloud.cic.v1.PrivateConnectionService/RemoveStaticRoute',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: RemoveStaticRouteRequest) =>
            Buffer.from(RemoveStaticRouteRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => RemoveStaticRouteRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified PrivateConnection. */
    listOperations: {
        path: '/yandex.cloud.cic.v1.PrivateConnectionService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListPrivateConnectionOperationsRequest) =>
            Buffer.from(ListPrivateConnectionOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListPrivateConnectionOperationsRequest.decode(value),
        responseSerialize: (value: ListPrivateConnectionOperationsResponse) =>
            Buffer.from(ListPrivateConnectionOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListPrivateConnectionOperationsResponse.decode(value),
    },
} as const;

export interface PrivateConnectionServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified PrivateConnection resource.
     *
     * To get the list of available PrivateConnection resources, make a [List] request.
     */
    get: handleUnaryCall<GetPrivateConnectionRequest, PrivateConnection>;
    /** Retrieves the list of PrivateConnection resources in the specified folder. */
    list: handleUnaryCall<ListPrivateConnectionsRequest, ListPrivateConnectionsResponse>;
    /**
     * Creates a PrivateConnection resource in the specified folder using the data specified in the request.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: handleUnaryCall<CreatePrivateConnectionRequest, Operation>;
    /**
     * Updates a PrivateConnection resource using the data specified in the request.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update: handleUnaryCall<UpdatePrivateConnectionRequest, Operation>;
    /**
     * Deletes a PrivateConnection resource.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    delete: handleUnaryCall<DeletePrivateConnectionRequest, Operation>;
    /**
     * Upserts specified static routes to a PrivateConnection resource.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    upsertStaticRoute: handleUnaryCall<UpsertStaticRouteRequest, Operation>;
    /**
     * Removes specified static routes to a PrivateConnection resource.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    removeStaticRoute: handleUnaryCall<RemoveStaticRouteRequest, Operation>;
    /** Lists operations for the specified PrivateConnection. */
    listOperations: handleUnaryCall<
        ListPrivateConnectionOperationsRequest,
        ListPrivateConnectionOperationsResponse
    >;
}

export interface PrivateConnectionServiceClient extends Client {
    /**
     * Returns the specified PrivateConnection resource.
     *
     * To get the list of available PrivateConnection resources, make a [List] request.
     */
    get(
        request: GetPrivateConnectionRequest,
        callback: (error: ServiceError | null, response: PrivateConnection) => void,
    ): ClientUnaryCall;
    get(
        request: GetPrivateConnectionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: PrivateConnection) => void,
    ): ClientUnaryCall;
    get(
        request: GetPrivateConnectionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: PrivateConnection) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of PrivateConnection resources in the specified folder. */
    list(
        request: ListPrivateConnectionsRequest,
        callback: (error: ServiceError | null, response: ListPrivateConnectionsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListPrivateConnectionsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListPrivateConnectionsResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListPrivateConnectionsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListPrivateConnectionsResponse) => void,
    ): ClientUnaryCall;
    /**
     * Creates a PrivateConnection resource in the specified folder using the data specified in the request.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create(
        request: CreatePrivateConnectionRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreatePrivateConnectionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreatePrivateConnectionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Updates a PrivateConnection resource using the data specified in the request.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update(
        request: UpdatePrivateConnectionRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdatePrivateConnectionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdatePrivateConnectionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Deletes a PrivateConnection resource.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    delete(
        request: DeletePrivateConnectionRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeletePrivateConnectionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeletePrivateConnectionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Upserts specified static routes to a PrivateConnection resource.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    upsertStaticRoute(
        request: UpsertStaticRouteRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    upsertStaticRoute(
        request: UpsertStaticRouteRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    upsertStaticRoute(
        request: UpsertStaticRouteRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /**
     * Removes specified static routes to a PrivateConnection resource.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    removeStaticRoute(
        request: RemoveStaticRouteRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    removeStaticRoute(
        request: RemoveStaticRouteRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    removeStaticRoute(
        request: RemoveStaticRouteRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Lists operations for the specified PrivateConnection. */
    listOperations(
        request: ListPrivateConnectionOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListPrivateConnectionOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListPrivateConnectionOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListPrivateConnectionOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListPrivateConnectionOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListPrivateConnectionOperationsResponse,
        ) => void,
    ): ClientUnaryCall;
}

export const PrivateConnectionServiceClient = makeGenericClientConstructor(
    PrivateConnectionServiceService,
    'yandex.cloud.cic.v1.PrivateConnectionService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): PrivateConnectionServiceClient;
    service: typeof PrivateConnectionServiceService;
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
