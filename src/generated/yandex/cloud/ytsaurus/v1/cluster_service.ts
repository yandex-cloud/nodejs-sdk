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
import { ClusterSpec, CidrBlocks, Cluster } from './cluster';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../operation/operation';

export const protobufPackage = 'yandex.cloud.ytsaurus.v1';

export interface GetClusterRequest {
    /** ID of the cluster to return. */
    clusterId: string;
}

export interface ListClustersRequest {
    /** ID of the folder to list clusters in. */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListClustersResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListClustersResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /** A filter expression that filters clusters listed in the response. */
    filter: string[];
}

export interface ListClustersResponse {
    /** List of clusters in the specified folder. */
    clusters: Cluster[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListClustersRequest.page_size], use the [next_page_token] as the value
     * for the [ListClustersRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateClusterRequest {
    /** ID of the folder to create the cluster in. */
    folderId: string;
    /** ID of the availability zone where the cluster resides. */
    zoneId: string;
    /** Name of the cluster. */
    name: string;
    /** Description of the cluster. */
    description: string;
    /** Cluster labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** ID of the subnet to create the cluster in. */
    subnetId: string;
    /** IDs of the security groups to attach to the cluster. */
    securityGroupIds: string[];
    /** Cluster specification. */
    spec?: ClusterSpec;
    /** CIDRs whitelist. */
    cidrBlocksWhitelist?: CidrBlocks;
}

export interface CreateClusterRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateClusterMetadata {
    /** ID of the cluster being created. */
    clusterId: string;
}

export interface UpdateClusterRequest {
    /** ID of the cluster to update. */
    clusterId: string;
    /** Field mask that specifies which attributes of the cluster should be updated. */
    updateMask?: FieldMask;
    /**
     * New name for the cluster.
     * The name must be unique within the folder.
     */
    name: string;
    /** New description for the cluster. */
    description: string;
    /**
     * Cluster labels as `key:value` pairs.
     * Existing set of labels is completely replaced by the provided set, so if you just want
     * to add or remove a label:
     * 1. Get the current set of labels with a [ClusterService.Get] request.
     * 2. Add or remove a label in this set.
     * 3. Send the new set in this field.
     */
    labels: { [key: string]: string };
    /** New subnet for the cluster. */
    subnetId: string;
    /** New security groups for the cluster. */
    securityGroupIds: string[];
    /** New cluster specification. */
    spec?: ClusterSpec;
    /** CIDRs whitelist. */
    cidrBlocksWhitelist?: CidrBlocks;
}

export interface UpdateClusterRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateClusterMetadata {
    /** ID of the cluster that is being updated. */
    clusterId: string;
}

export interface DeleteClusterRequest {
    /** ID of the cluster to delete. */
    clusterId: string;
}

export interface DeleteClusterMetadata {
    /** ID of the cluster that is being deleted. */
    clusterId: string;
}

export interface StartClusterRequest {
    /** ID of the cluster to start. */
    clusterId: string;
}

export interface StartClusterMetadata {
    /** ID of the cluster that is being started. */
    clusterId: string;
}

export interface StopClusterRequest {
    /** ID of the cluster to stop. */
    clusterId: string;
}

export interface StopClusterMetadata {
    /** ID of the cluster that is being stopped. */
    clusterId: string;
}

const baseGetClusterRequest: object = { clusterId: '' };

export const GetClusterRequest: {
    encode(message: GetClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetClusterRequest;
    fromJSON(object: any): GetClusterRequest;
    toJSON(message: GetClusterRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetClusterRequest>, I>>(object: I): GetClusterRequest;
} = {
    encode(message: GetClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetClusterRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetClusterRequest } as GetClusterRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetClusterRequest {
        const message = { ...baseGetClusterRequest } as GetClusterRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        return message;
    },

    toJSON(message: GetClusterRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetClusterRequest>, I>>(object: I): GetClusterRequest {
        const message = { ...baseGetClusterRequest } as GetClusterRequest;
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

const baseListClustersRequest: object = { folderId: '', pageSize: 0, pageToken: '', filter: '' };

export const ListClustersRequest: {
    encode(message: ListClustersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListClustersRequest;
    fromJSON(object: any): ListClustersRequest;
    toJSON(message: ListClustersRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListClustersRequest>, I>>(object: I): ListClustersRequest;
} = {
    encode(message: ListClustersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        for (const v of message.filter) {
            writer.uint32(34).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListClustersRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListClustersRequest } as ListClustersRequest;
        message.filter = [];
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
                    message.filter.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListClustersRequest {
        const message = { ...baseListClustersRequest } as ListClustersRequest;
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
        message.filter = (object.filter ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: ListClustersRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        if (message.filter) {
            obj.filter = message.filter.map((e) => e);
        } else {
            obj.filter = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListClustersRequest>, I>>(
        object: I,
    ): ListClustersRequest {
        const message = { ...baseListClustersRequest } as ListClustersRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter?.map((e) => e) || [];
        return message;
    },
};

const baseListClustersResponse: object = { nextPageToken: '' };

export const ListClustersResponse: {
    encode(message: ListClustersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListClustersResponse;
    fromJSON(object: any): ListClustersResponse;
    toJSON(message: ListClustersResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListClustersResponse>, I>>(object: I): ListClustersResponse;
} = {
    encode(message: ListClustersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.clusters) {
            Cluster.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListClustersResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListClustersResponse } as ListClustersResponse;
        message.clusters = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusters.push(Cluster.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListClustersResponse {
        const message = { ...baseListClustersResponse } as ListClustersResponse;
        message.clusters = (object.clusters ?? []).map((e: any) => Cluster.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListClustersResponse): unknown {
        const obj: any = {};
        if (message.clusters) {
            obj.clusters = message.clusters.map((e) => (e ? Cluster.toJSON(e) : undefined));
        } else {
            obj.clusters = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListClustersResponse>, I>>(
        object: I,
    ): ListClustersResponse {
        const message = { ...baseListClustersResponse } as ListClustersResponse;
        message.clusters = object.clusters?.map((e) => Cluster.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateClusterRequest: object = {
    folderId: '',
    zoneId: '',
    name: '',
    description: '',
    subnetId: '',
    securityGroupIds: '',
};

export const CreateClusterRequest: {
    encode(message: CreateClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateClusterRequest;
    fromJSON(object: any): CreateClusterRequest;
    toJSON(message: CreateClusterRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateClusterRequest>, I>>(object: I): CreateClusterRequest;
} = {
    encode(message: CreateClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.zoneId !== '') {
            writer.uint32(18).string(message.zoneId);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateClusterRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        if (message.subnetId !== '') {
            writer.uint32(50).string(message.subnetId);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(58).string(v!);
        }
        if (message.spec !== undefined) {
            ClusterSpec.encode(message.spec, writer.uint32(66).fork()).ldelim();
        }
        if (message.cidrBlocksWhitelist !== undefined) {
            CidrBlocks.encode(message.cidrBlocksWhitelist, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateClusterRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateClusterRequest } as CreateClusterRequest;
        message.labels = {};
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.zoneId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = CreateClusterRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.subnetId = reader.string();
                    break;
                case 7:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 8:
                    message.spec = ClusterSpec.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.cidrBlocksWhitelist = CidrBlocks.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateClusterRequest {
        const message = { ...baseCreateClusterRequest } as CreateClusterRequest;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null ? String(object.zoneId) : '';
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
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : '';
        message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) => String(e));
        message.spec =
            object.spec !== undefined && object.spec !== null
                ? ClusterSpec.fromJSON(object.spec)
                : undefined;
        message.cidrBlocksWhitelist =
            object.cidrBlocksWhitelist !== undefined && object.cidrBlocksWhitelist !== null
                ? CidrBlocks.fromJSON(object.cidrBlocksWhitelist)
                : undefined;
        return message;
    },

    toJSON(message: CreateClusterRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        } else {
            obj.securityGroupIds = [];
        }
        message.spec !== undefined &&
            (obj.spec = message.spec ? ClusterSpec.toJSON(message.spec) : undefined);
        message.cidrBlocksWhitelist !== undefined &&
            (obj.cidrBlocksWhitelist = message.cidrBlocksWhitelist
                ? CidrBlocks.toJSON(message.cidrBlocksWhitelist)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateClusterRequest>, I>>(
        object: I,
    ): CreateClusterRequest {
        const message = { ...baseCreateClusterRequest } as CreateClusterRequest;
        message.folderId = object.folderId ?? '';
        message.zoneId = object.zoneId ?? '';
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
        message.subnetId = object.subnetId ?? '';
        message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
        message.spec =
            object.spec !== undefined && object.spec !== null
                ? ClusterSpec.fromPartial(object.spec)
                : undefined;
        message.cidrBlocksWhitelist =
            object.cidrBlocksWhitelist !== undefined && object.cidrBlocksWhitelist !== null
                ? CidrBlocks.fromPartial(object.cidrBlocksWhitelist)
                : undefined;
        return message;
    },
};

const baseCreateClusterRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateClusterRequest_LabelsEntry: {
    encode(message: CreateClusterRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateClusterRequest_LabelsEntry;
    fromJSON(object: any): CreateClusterRequest_LabelsEntry;
    toJSON(message: CreateClusterRequest_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateClusterRequest_LabelsEntry>, I>>(object: I): CreateClusterRequest_LabelsEntry;
} = {
    encode(
        message: CreateClusterRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateClusterRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateClusterRequest_LabelsEntry,
        } as CreateClusterRequest_LabelsEntry;
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

    fromJSON(object: any): CreateClusterRequest_LabelsEntry {
        const message = {
            ...baseCreateClusterRequest_LabelsEntry,
        } as CreateClusterRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: CreateClusterRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateClusterRequest_LabelsEntry>, I>>(
        object: I,
    ): CreateClusterRequest_LabelsEntry {
        const message = {
            ...baseCreateClusterRequest_LabelsEntry,
        } as CreateClusterRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseCreateClusterMetadata: object = { clusterId: '' };

export const CreateClusterMetadata: {
    encode(message: CreateClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateClusterMetadata;
    fromJSON(object: any): CreateClusterMetadata;
    toJSON(message: CreateClusterMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateClusterMetadata>, I>>(object: I): CreateClusterMetadata;
} = {
    encode(message: CreateClusterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateClusterMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateClusterMetadata } as CreateClusterMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateClusterMetadata {
        const message = { ...baseCreateClusterMetadata } as CreateClusterMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        return message;
    },

    toJSON(message: CreateClusterMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateClusterMetadata>, I>>(
        object: I,
    ): CreateClusterMetadata {
        const message = { ...baseCreateClusterMetadata } as CreateClusterMetadata;
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

const baseUpdateClusterRequest: object = {
    clusterId: '',
    name: '',
    description: '',
    subnetId: '',
    securityGroupIds: '',
};

export const UpdateClusterRequest: {
    encode(message: UpdateClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClusterRequest;
    fromJSON(object: any): UpdateClusterRequest;
    toJSON(message: UpdateClusterRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateClusterRequest>, I>>(object: I): UpdateClusterRequest;
} = {
    encode(message: UpdateClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
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
            UpdateClusterRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        if (message.subnetId !== '') {
            writer.uint32(50).string(message.subnetId);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(58).string(v!);
        }
        if (message.spec !== undefined) {
            ClusterSpec.encode(message.spec, writer.uint32(66).fork()).ldelim();
        }
        if (message.cidrBlocksWhitelist !== undefined) {
            CidrBlocks.encode(message.cidrBlocksWhitelist, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClusterRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateClusterRequest } as UpdateClusterRequest;
        message.labels = {};
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
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
                    const entry5 = UpdateClusterRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.subnetId = reader.string();
                    break;
                case 7:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 8:
                    message.spec = ClusterSpec.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.cidrBlocksWhitelist = CidrBlocks.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateClusterRequest {
        const message = { ...baseUpdateClusterRequest } as UpdateClusterRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
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
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : '';
        message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) => String(e));
        message.spec =
            object.spec !== undefined && object.spec !== null
                ? ClusterSpec.fromJSON(object.spec)
                : undefined;
        message.cidrBlocksWhitelist =
            object.cidrBlocksWhitelist !== undefined && object.cidrBlocksWhitelist !== null
                ? CidrBlocks.fromJSON(object.cidrBlocksWhitelist)
                : undefined;
        return message;
    },

    toJSON(message: UpdateClusterRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
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
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        } else {
            obj.securityGroupIds = [];
        }
        message.spec !== undefined &&
            (obj.spec = message.spec ? ClusterSpec.toJSON(message.spec) : undefined);
        message.cidrBlocksWhitelist !== undefined &&
            (obj.cidrBlocksWhitelist = message.cidrBlocksWhitelist
                ? CidrBlocks.toJSON(message.cidrBlocksWhitelist)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateClusterRequest>, I>>(
        object: I,
    ): UpdateClusterRequest {
        const message = { ...baseUpdateClusterRequest } as UpdateClusterRequest;
        message.clusterId = object.clusterId ?? '';
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
        message.subnetId = object.subnetId ?? '';
        message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
        message.spec =
            object.spec !== undefined && object.spec !== null
                ? ClusterSpec.fromPartial(object.spec)
                : undefined;
        message.cidrBlocksWhitelist =
            object.cidrBlocksWhitelist !== undefined && object.cidrBlocksWhitelist !== null
                ? CidrBlocks.fromPartial(object.cidrBlocksWhitelist)
                : undefined;
        return message;
    },
};

const baseUpdateClusterRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateClusterRequest_LabelsEntry: {
    encode(message: UpdateClusterRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClusterRequest_LabelsEntry;
    fromJSON(object: any): UpdateClusterRequest_LabelsEntry;
    toJSON(message: UpdateClusterRequest_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateClusterRequest_LabelsEntry>, I>>(object: I): UpdateClusterRequest_LabelsEntry;
} = {
    encode(
        message: UpdateClusterRequest_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClusterRequest_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateClusterRequest_LabelsEntry,
        } as UpdateClusterRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateClusterRequest_LabelsEntry {
        const message = {
            ...baseUpdateClusterRequest_LabelsEntry,
        } as UpdateClusterRequest_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: UpdateClusterRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateClusterRequest_LabelsEntry>, I>>(
        object: I,
    ): UpdateClusterRequest_LabelsEntry {
        const message = {
            ...baseUpdateClusterRequest_LabelsEntry,
        } as UpdateClusterRequest_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUpdateClusterMetadata: object = { clusterId: '' };

export const UpdateClusterMetadata: {
    encode(message: UpdateClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClusterMetadata;
    fromJSON(object: any): UpdateClusterMetadata;
    toJSON(message: UpdateClusterMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateClusterMetadata>, I>>(object: I): UpdateClusterMetadata;
} = {
    encode(message: UpdateClusterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClusterMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateClusterMetadata } as UpdateClusterMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateClusterMetadata {
        const message = { ...baseUpdateClusterMetadata } as UpdateClusterMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        return message;
    },

    toJSON(message: UpdateClusterMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateClusterMetadata>, I>>(
        object: I,
    ): UpdateClusterMetadata {
        const message = { ...baseUpdateClusterMetadata } as UpdateClusterMetadata;
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

const baseDeleteClusterRequest: object = { clusterId: '' };

export const DeleteClusterRequest: {
    encode(message: DeleteClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteClusterRequest;
    fromJSON(object: any): DeleteClusterRequest;
    toJSON(message: DeleteClusterRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteClusterRequest>, I>>(object: I): DeleteClusterRequest;
} = {
    encode(message: DeleteClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteClusterRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteClusterRequest } as DeleteClusterRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteClusterRequest {
        const message = { ...baseDeleteClusterRequest } as DeleteClusterRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        return message;
    },

    toJSON(message: DeleteClusterRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteClusterRequest>, I>>(
        object: I,
    ): DeleteClusterRequest {
        const message = { ...baseDeleteClusterRequest } as DeleteClusterRequest;
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

const baseDeleteClusterMetadata: object = { clusterId: '' };

export const DeleteClusterMetadata: {
    encode(message: DeleteClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteClusterMetadata;
    fromJSON(object: any): DeleteClusterMetadata;
    toJSON(message: DeleteClusterMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteClusterMetadata>, I>>(object: I): DeleteClusterMetadata;
} = {
    encode(message: DeleteClusterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteClusterMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteClusterMetadata } as DeleteClusterMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteClusterMetadata {
        const message = { ...baseDeleteClusterMetadata } as DeleteClusterMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        return message;
    },

    toJSON(message: DeleteClusterMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteClusterMetadata>, I>>(
        object: I,
    ): DeleteClusterMetadata {
        const message = { ...baseDeleteClusterMetadata } as DeleteClusterMetadata;
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

const baseStartClusterRequest: object = { clusterId: '' };

export const StartClusterRequest: {
    encode(message: StartClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StartClusterRequest;
    fromJSON(object: any): StartClusterRequest;
    toJSON(message: StartClusterRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<StartClusterRequest>, I>>(object: I): StartClusterRequest;
} = {
    encode(message: StartClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StartClusterRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStartClusterRequest } as StartClusterRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StartClusterRequest {
        const message = { ...baseStartClusterRequest } as StartClusterRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        return message;
    },

    toJSON(message: StartClusterRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StartClusterRequest>, I>>(
        object: I,
    ): StartClusterRequest {
        const message = { ...baseStartClusterRequest } as StartClusterRequest;
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

const baseStartClusterMetadata: object = { clusterId: '' };

export const StartClusterMetadata: {
    encode(message: StartClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StartClusterMetadata;
    fromJSON(object: any): StartClusterMetadata;
    toJSON(message: StartClusterMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<StartClusterMetadata>, I>>(object: I): StartClusterMetadata;
} = {
    encode(message: StartClusterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StartClusterMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStartClusterMetadata } as StartClusterMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StartClusterMetadata {
        const message = { ...baseStartClusterMetadata } as StartClusterMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        return message;
    },

    toJSON(message: StartClusterMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StartClusterMetadata>, I>>(
        object: I,
    ): StartClusterMetadata {
        const message = { ...baseStartClusterMetadata } as StartClusterMetadata;
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

const baseStopClusterRequest: object = { clusterId: '' };

export const StopClusterRequest: {
    encode(message: StopClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StopClusterRequest;
    fromJSON(object: any): StopClusterRequest;
    toJSON(message: StopClusterRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<StopClusterRequest>, I>>(object: I): StopClusterRequest;
} = {
    encode(message: StopClusterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StopClusterRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStopClusterRequest } as StopClusterRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StopClusterRequest {
        const message = { ...baseStopClusterRequest } as StopClusterRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        return message;
    },

    toJSON(message: StopClusterRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StopClusterRequest>, I>>(
        object: I,
    ): StopClusterRequest {
        const message = { ...baseStopClusterRequest } as StopClusterRequest;
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

const baseStopClusterMetadata: object = { clusterId: '' };

export const StopClusterMetadata: {
    encode(message: StopClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StopClusterMetadata;
    fromJSON(object: any): StopClusterMetadata;
    toJSON(message: StopClusterMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<StopClusterMetadata>, I>>(object: I): StopClusterMetadata;
} = {
    encode(message: StopClusterMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StopClusterMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStopClusterMetadata } as StopClusterMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StopClusterMetadata {
        const message = { ...baseStopClusterMetadata } as StopClusterMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        return message;
    },

    toJSON(message: StopClusterMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StopClusterMetadata>, I>>(
        object: I,
    ): StopClusterMetadata {
        const message = { ...baseStopClusterMetadata } as StopClusterMetadata;
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

/** A set of methods for managing Cluster resources. */
export const ClusterServiceService = {
    /** Returns the specified cluster. */
    get: {
        path: '/yandex.cloud.ytsaurus.v1.ClusterService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetClusterRequest) =>
            Buffer.from(GetClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetClusterRequest.decode(value),
        responseSerialize: (value: Cluster) => Buffer.from(Cluster.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Cluster.decode(value),
    },
    /** Retrieves the list of clusters in the specified folder. */
    list: {
        path: '/yandex.cloud.ytsaurus.v1.ClusterService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListClustersRequest) =>
            Buffer.from(ListClustersRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListClustersRequest.decode(value),
        responseSerialize: (value: ListClustersResponse) =>
            Buffer.from(ListClustersResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListClustersResponse.decode(value),
    },
    /** Creates a cluster in the specified folder. */
    create: {
        path: '/yandex.cloud.ytsaurus.v1.ClusterService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateClusterRequest) =>
            Buffer.from(CreateClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified cluster. */
    update: {
        path: '/yandex.cloud.ytsaurus.v1.ClusterService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateClusterRequest) =>
            Buffer.from(UpdateClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified cluster. */
    delete: {
        path: '/yandex.cloud.ytsaurus.v1.ClusterService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteClusterRequest) =>
            Buffer.from(DeleteClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Starts the specified cluster. */
    start: {
        path: '/yandex.cloud.ytsaurus.v1.ClusterService/Start',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StartClusterRequest) =>
            Buffer.from(StartClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => StartClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Stops the specified cluster. */
    stop: {
        path: '/yandex.cloud.ytsaurus.v1.ClusterService/Stop',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StopClusterRequest) =>
            Buffer.from(StopClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => StopClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface ClusterServiceServer extends UntypedServiceImplementation {
    /** Returns the specified cluster. */
    get: handleUnaryCall<GetClusterRequest, Cluster>;
    /** Retrieves the list of clusters in the specified folder. */
    list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
    /** Creates a cluster in the specified folder. */
    create: handleUnaryCall<CreateClusterRequest, Operation>;
    /** Updates the specified cluster. */
    update: handleUnaryCall<UpdateClusterRequest, Operation>;
    /** Deletes the specified cluster. */
    delete: handleUnaryCall<DeleteClusterRequest, Operation>;
    /** Starts the specified cluster. */
    start: handleUnaryCall<StartClusterRequest, Operation>;
    /** Stops the specified cluster. */
    stop: handleUnaryCall<StopClusterRequest, Operation>;
}

export interface ClusterServiceClient extends Client {
    /** Returns the specified cluster. */
    get(
        request: GetClusterRequest,
        callback: (error: ServiceError | null, response: Cluster) => void,
    ): ClientUnaryCall;
    get(
        request: GetClusterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Cluster) => void,
    ): ClientUnaryCall;
    get(
        request: GetClusterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Cluster) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of clusters in the specified folder. */
    list(
        request: ListClustersRequest,
        callback: (error: ServiceError | null, response: ListClustersResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListClustersRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListClustersResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListClustersRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListClustersResponse) => void,
    ): ClientUnaryCall;
    /** Creates a cluster in the specified folder. */
    create(
        request: CreateClusterRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateClusterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateClusterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified cluster. */
    update(
        request: UpdateClusterRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateClusterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateClusterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified cluster. */
    delete(
        request: DeleteClusterRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteClusterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteClusterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Starts the specified cluster. */
    start(
        request: StartClusterRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    start(
        request: StartClusterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    start(
        request: StartClusterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Stops the specified cluster. */
    stop(
        request: StopClusterRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    stop(
        request: StopClusterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    stop(
        request: StopClusterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
}

export const ClusterServiceClient = makeGenericClientConstructor(
    ClusterServiceService,
    'yandex.cloud.ytsaurus.v1.ClusterService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): ClusterServiceClient;
    service: typeof ClusterServiceService;
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
