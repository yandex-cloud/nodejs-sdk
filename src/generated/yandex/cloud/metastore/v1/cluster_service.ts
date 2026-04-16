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
import { LoggingConfig, NetworkConfig, Resources, WarehouseConfig, Cluster } from './cluster';
import { MaintenanceWindow } from './maintenance';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../operation/operation';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../access/access';

export const protobufPackage = 'yandex.cloud.metastore.v1';

export interface GetClusterRequest {
    /** ID of the Metastore Cluster to return. */
    clusterId: string;
}

export interface ListClustersRequest {
    /** ID of the folder to list Metastore Clusters in. */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListClustersResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the [ListClustersResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can only use filtering with the [Cluster.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 1-63 characters long and match the regular expression `[a-zA-Z0-9_-]+`.
     */
    filter: string;
}

export interface ListClustersResponse {
    /** List of Metastore Clusters. */
    clusters: Cluster[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListClustersRequest.page_size], use the [next_page_token] as the value
     * for the [ListClustersRequest.page_token] parameter in the next list request. Each subsequent
     * list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateClusterRequest {
    /** ID of the folder to create the Metastore Cluster in. */
    folderId: string;
    /**
     * Name of the Metastore Cluster.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the Metastore Cluster. */
    description: string;
    /**
     * Custom labels for the Metastore Cluster as `` key:value `` pairs.
     * For example: {"env": "prod"}.
     */
    labels: { [key: string]: string };
    /** Deletion Protection prevents deletion of the cluster. */
    deletionProtection: boolean;
    /** Metastore server version. */
    version: string;
    /** Configuration of the Metastore Cluster. */
    configSpec?: ConfigSpec;
    /** Service account used to access Cloud resources. */
    serviceAccountId: string;
    /** Cloud logging configuration. */
    logging?: LoggingConfig;
    /** Network-related configuration options. */
    network?: NetworkConfig;
    /** Maintenance window. */
    maintenanceWindow?: MaintenanceWindow;
}

export interface CreateClusterRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateClusterMetadata {
    /** ID of the Metastore Cluster that is being created. */
    clusterId: string;
}

export interface UpdateClusterRequest {
    /** ID of the Metastore Cluster to update. */
    clusterId: string;
    /** Fields of the Metastore Cluster to be updated. */
    updateMask?: FieldMask;
    /** New name of the Metastore Cluster. */
    name: string;
    /** New description of the Metastore Cluster. */
    description: string;
    /**
     * Custom labels for the Metastore Cluster as `` key:value `` pairs.
     * For example: {"env": "prod"}.
     */
    labels: { [key: string]: string };
    /** Deletion Protection prevents deletion of the cluster. */
    deletionProtection: boolean;
    /** Service account used to access Cloud resources. */
    serviceAccountId: string;
    /** Cloud logging configuration. */
    logging?: LoggingConfig;
    /** Network-related configuration options. */
    networkSpec?: UpdateNetworkConfigSpec;
    /** Metastore Cluster configuration. */
    configSpec?: UpdateClusterConfigSpec;
    /** Maintenance window. */
    maintenanceWindow?: MaintenanceWindow;
    /** Metastore server version. */
    version: string;
}

export interface UpdateClusterRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateClusterMetadata {
    /** ID of the Metastore Cluster that is being updated. */
    clusterId: string;
}

export interface DeleteClusterRequest {
    /** ID of the Metastore Cluster to delete. */
    clusterId: string;
}

export interface DeleteClusterMetadata {
    /** ID of the Metastore Cluster that is being deleted. */
    clusterId: string;
}

export interface StartClusterRequest {
    /** ID of the Metastore Cluster to start. */
    clusterId: string;
}

export interface StartClusterMetadata {
    /** ID of the Metastore Cluster that is being started. */
    clusterId: string;
}

export interface StopClusterRequest {
    /** ID of the Metastore Cluster to stop. */
    clusterId: string;
}

export interface StopClusterMetadata {
    /** ID of the Metastore Cluster that is being stopped. */
    clusterId: string;
}

export interface ImportDataRequest {
    /** ID of the Metastore Cluster into which data will be imported. */
    clusterId: string;
    /** S3 bucket to import backup from. */
    bucket: string;
    /** Path to the import dump in the bucket. */
    filepath: string;
}

export interface ImportDataMetadata {
    /** ID of the Metastore Cluster into which data is being imported. */
    clusterId: string;
}

export interface ExportDataRequest {
    /** ID of the Metastore Cluster from which data will be exported. */
    clusterId: string;
    /** S3 bucket to export backup to. */
    bucket: string;
    /** Path to the export dump in the bucket. */
    filepath: string;
}

export interface ExportDataMetadata {
    /** ID of the Metastore Cluster from which data is being exported. */
    clusterId: string;
}

export interface ListClusterOperationsRequest {
    /** ID of the Metastore Cluster to list operations for. */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListClusterOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.
     * To get the next page of results, set [page_token] to the [ListClusterOperationsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}

export interface ListClusterOperationsResponse {
    /** List of Operation resources for the specified Metastore Cluster. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListClusterOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListClusterOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface ConfigSpec {
    /** Configuration for computational resources for Metastore server instances. */
    resources?: Resources;
    /** Configuration of warehouse. */
    warehouse?: WarehouseConfig;
}

export interface UpdateClusterConfigSpec {
    /** Configuration for computational resources for Metastore server instances. */
    resources?: Resources;
    /** Configuration of warehouse. */
    warehouse?: WarehouseConfig;
}

export interface UpdateNetworkConfigSpec {
    /** User security groups. */
    securityGroupIds: string[];
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
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListClustersRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListClustersRequest } as ListClustersRequest;
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
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        return message;
    },

    toJSON(message: ListClustersRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListClustersRequest>, I>>(
        object: I,
    ): ListClustersRequest {
        const message = { ...baseListClustersRequest } as ListClustersRequest;
        message.folderId = object.folderId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
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
    name: '',
    description: '',
    deletionProtection: false,
    version: '',
    serviceAccountId: '',
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
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateClusterRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        if (message.deletionProtection === true) {
            writer.uint32(88).bool(message.deletionProtection);
        }
        if (message.version !== '') {
            writer.uint32(98).string(message.version);
        }
        if (message.configSpec !== undefined) {
            ConfigSpec.encode(message.configSpec, writer.uint32(106).fork()).ldelim();
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(114).string(message.serviceAccountId);
        }
        if (message.logging !== undefined) {
            LoggingConfig.encode(message.logging, writer.uint32(122).fork()).ldelim();
        }
        if (message.network !== undefined) {
            NetworkConfig.encode(message.network, writer.uint32(130).fork()).ldelim();
        }
        if (message.maintenanceWindow !== undefined) {
            MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(138).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateClusterRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateClusterRequest } as CreateClusterRequest;
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
                    const entry4 = CreateClusterRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 11:
                    message.deletionProtection = reader.bool();
                    break;
                case 12:
                    message.version = reader.string();
                    break;
                case 13:
                    message.configSpec = ConfigSpec.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.serviceAccountId = reader.string();
                    break;
                case 15:
                    message.logging = LoggingConfig.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.network = NetworkConfig.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.maintenanceWindow = MaintenanceWindow.decode(reader, reader.uint32());
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
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.version =
            object.version !== undefined && object.version !== null ? String(object.version) : '';
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? ConfigSpec.fromJSON(object.configSpec)
                : undefined;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        message.logging =
            object.logging !== undefined && object.logging !== null
                ? LoggingConfig.fromJSON(object.logging)
                : undefined;
        message.network =
            object.network !== undefined && object.network !== null
                ? NetworkConfig.fromJSON(object.network)
                : undefined;
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined && object.maintenanceWindow !== null
                ? MaintenanceWindow.fromJSON(object.maintenanceWindow)
                : undefined;
        return message;
    },

    toJSON(message: CreateClusterRequest): unknown {
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
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.version !== undefined && (obj.version = message.version);
        message.configSpec !== undefined &&
            (obj.configSpec = message.configSpec
                ? ConfigSpec.toJSON(message.configSpec)
                : undefined);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.logging !== undefined &&
            (obj.logging = message.logging ? LoggingConfig.toJSON(message.logging) : undefined);
        message.network !== undefined &&
            (obj.network = message.network ? NetworkConfig.toJSON(message.network) : undefined);
        message.maintenanceWindow !== undefined &&
            (obj.maintenanceWindow = message.maintenanceWindow
                ? MaintenanceWindow.toJSON(message.maintenanceWindow)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateClusterRequest>, I>>(
        object: I,
    ): CreateClusterRequest {
        const message = { ...baseCreateClusterRequest } as CreateClusterRequest;
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
        message.deletionProtection = object.deletionProtection ?? false;
        message.version = object.version ?? '';
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? ConfigSpec.fromPartial(object.configSpec)
                : undefined;
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.logging =
            object.logging !== undefined && object.logging !== null
                ? LoggingConfig.fromPartial(object.logging)
                : undefined;
        message.network =
            object.network !== undefined && object.network !== null
                ? NetworkConfig.fromPartial(object.network)
                : undefined;
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined && object.maintenanceWindow !== null
                ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
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
    deletionProtection: false,
    serviceAccountId: '',
    version: '',
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
        if (message.deletionProtection === true) {
            writer.uint32(56).bool(message.deletionProtection);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(66).string(message.serviceAccountId);
        }
        if (message.logging !== undefined) {
            LoggingConfig.encode(message.logging, writer.uint32(74).fork()).ldelim();
        }
        if (message.networkSpec !== undefined) {
            UpdateNetworkConfigSpec.encode(message.networkSpec, writer.uint32(82).fork()).ldelim();
        }
        if (message.configSpec !== undefined) {
            UpdateClusterConfigSpec.encode(message.configSpec, writer.uint32(90).fork()).ldelim();
        }
        if (message.maintenanceWindow !== undefined) {
            MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(98).fork()).ldelim();
        }
        if (message.version !== '') {
            writer.uint32(106).string(message.version);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClusterRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateClusterRequest } as UpdateClusterRequest;
        message.labels = {};
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
                case 7:
                    message.deletionProtection = reader.bool();
                    break;
                case 8:
                    message.serviceAccountId = reader.string();
                    break;
                case 9:
                    message.logging = LoggingConfig.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.networkSpec = UpdateNetworkConfigSpec.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.configSpec = UpdateClusterConfigSpec.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.maintenanceWindow = MaintenanceWindow.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.version = reader.string();
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
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        message.logging =
            object.logging !== undefined && object.logging !== null
                ? LoggingConfig.fromJSON(object.logging)
                : undefined;
        message.networkSpec =
            object.networkSpec !== undefined && object.networkSpec !== null
                ? UpdateNetworkConfigSpec.fromJSON(object.networkSpec)
                : undefined;
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? UpdateClusterConfigSpec.fromJSON(object.configSpec)
                : undefined;
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined && object.maintenanceWindow !== null
                ? MaintenanceWindow.fromJSON(object.maintenanceWindow)
                : undefined;
        message.version =
            object.version !== undefined && object.version !== null ? String(object.version) : '';
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
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.logging !== undefined &&
            (obj.logging = message.logging ? LoggingConfig.toJSON(message.logging) : undefined);
        message.networkSpec !== undefined &&
            (obj.networkSpec = message.networkSpec
                ? UpdateNetworkConfigSpec.toJSON(message.networkSpec)
                : undefined);
        message.configSpec !== undefined &&
            (obj.configSpec = message.configSpec
                ? UpdateClusterConfigSpec.toJSON(message.configSpec)
                : undefined);
        message.maintenanceWindow !== undefined &&
            (obj.maintenanceWindow = message.maintenanceWindow
                ? MaintenanceWindow.toJSON(message.maintenanceWindow)
                : undefined);
        message.version !== undefined && (obj.version = message.version);
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
        message.deletionProtection = object.deletionProtection ?? false;
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.logging =
            object.logging !== undefined && object.logging !== null
                ? LoggingConfig.fromPartial(object.logging)
                : undefined;
        message.networkSpec =
            object.networkSpec !== undefined && object.networkSpec !== null
                ? UpdateNetworkConfigSpec.fromPartial(object.networkSpec)
                : undefined;
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? UpdateClusterConfigSpec.fromPartial(object.configSpec)
                : undefined;
        message.maintenanceWindow =
            object.maintenanceWindow !== undefined && object.maintenanceWindow !== null
                ? MaintenanceWindow.fromPartial(object.maintenanceWindow)
                : undefined;
        message.version = object.version ?? '';
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

const baseImportDataRequest: object = { clusterId: '', bucket: '', filepath: '' };

export const ImportDataRequest: {
    encode(message: ImportDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportDataRequest;
    fromJSON(object: any): ImportDataRequest;
    toJSON(message: ImportDataRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ImportDataRequest>, I>>(object: I): ImportDataRequest;
} = {
    encode(message: ImportDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.bucket !== '') {
            writer.uint32(18).string(message.bucket);
        }
        if (message.filepath !== '') {
            writer.uint32(26).string(message.filepath);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ImportDataRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseImportDataRequest } as ImportDataRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.bucket = reader.string();
                    break;
                case 3:
                    message.filepath = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ImportDataRequest {
        const message = { ...baseImportDataRequest } as ImportDataRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.bucket =
            object.bucket !== undefined && object.bucket !== null ? String(object.bucket) : '';
        message.filepath =
            object.filepath !== undefined && object.filepath !== null
                ? String(object.filepath)
                : '';
        return message;
    },

    toJSON(message: ImportDataRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.bucket !== undefined && (obj.bucket = message.bucket);
        message.filepath !== undefined && (obj.filepath = message.filepath);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ImportDataRequest>, I>>(object: I): ImportDataRequest {
        const message = { ...baseImportDataRequest } as ImportDataRequest;
        message.clusterId = object.clusterId ?? '';
        message.bucket = object.bucket ?? '';
        message.filepath = object.filepath ?? '';
        return message;
    },
};

const baseImportDataMetadata: object = { clusterId: '' };

export const ImportDataMetadata: {
    encode(message: ImportDataMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportDataMetadata;
    fromJSON(object: any): ImportDataMetadata;
    toJSON(message: ImportDataMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<ImportDataMetadata>, I>>(object: I): ImportDataMetadata;
} = {
    encode(message: ImportDataMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ImportDataMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseImportDataMetadata } as ImportDataMetadata;
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

    fromJSON(object: any): ImportDataMetadata {
        const message = { ...baseImportDataMetadata } as ImportDataMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        return message;
    },

    toJSON(message: ImportDataMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ImportDataMetadata>, I>>(
        object: I,
    ): ImportDataMetadata {
        const message = { ...baseImportDataMetadata } as ImportDataMetadata;
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

const baseExportDataRequest: object = { clusterId: '', bucket: '', filepath: '' };

export const ExportDataRequest: {
    encode(message: ExportDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExportDataRequest;
    fromJSON(object: any): ExportDataRequest;
    toJSON(message: ExportDataRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ExportDataRequest>, I>>(object: I): ExportDataRequest;
} = {
    encode(message: ExportDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.bucket !== '') {
            writer.uint32(18).string(message.bucket);
        }
        if (message.filepath !== '') {
            writer.uint32(26).string(message.filepath);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ExportDataRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExportDataRequest } as ExportDataRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.bucket = reader.string();
                    break;
                case 3:
                    message.filepath = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ExportDataRequest {
        const message = { ...baseExportDataRequest } as ExportDataRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.bucket =
            object.bucket !== undefined && object.bucket !== null ? String(object.bucket) : '';
        message.filepath =
            object.filepath !== undefined && object.filepath !== null
                ? String(object.filepath)
                : '';
        return message;
    },

    toJSON(message: ExportDataRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.bucket !== undefined && (obj.bucket = message.bucket);
        message.filepath !== undefined && (obj.filepath = message.filepath);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ExportDataRequest>, I>>(object: I): ExportDataRequest {
        const message = { ...baseExportDataRequest } as ExportDataRequest;
        message.clusterId = object.clusterId ?? '';
        message.bucket = object.bucket ?? '';
        message.filepath = object.filepath ?? '';
        return message;
    },
};

const baseExportDataMetadata: object = { clusterId: '' };

export const ExportDataMetadata: {
    encode(message: ExportDataMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExportDataMetadata;
    fromJSON(object: any): ExportDataMetadata;
    toJSON(message: ExportDataMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<ExportDataMetadata>, I>>(object: I): ExportDataMetadata;
} = {
    encode(message: ExportDataMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ExportDataMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExportDataMetadata } as ExportDataMetadata;
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

    fromJSON(object: any): ExportDataMetadata {
        const message = { ...baseExportDataMetadata } as ExportDataMetadata;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        return message;
    },

    toJSON(message: ExportDataMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ExportDataMetadata>, I>>(
        object: I,
    ): ExportDataMetadata {
        const message = { ...baseExportDataMetadata } as ExportDataMetadata;
        message.clusterId = object.clusterId ?? '';
        return message;
    },
};

const baseListClusterOperationsRequest: object = { clusterId: '', pageSize: 0, pageToken: '' };

export const ListClusterOperationsRequest: {
    encode(message: ListClusterOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterOperationsRequest;
    fromJSON(object: any): ListClusterOperationsRequest;
    toJSON(message: ListClusterOperationsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListClusterOperationsRequest>, I>>(object: I): ListClusterOperationsRequest;
} = {
    encode(
        message: ListClusterOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterOperationsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListClusterOperationsRequest } as ListClusterOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
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

    fromJSON(object: any): ListClusterOperationsRequest {
        const message = { ...baseListClusterOperationsRequest } as ListClusterOperationsRequest;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        return message;
    },

    toJSON(message: ListClusterOperationsRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListClusterOperationsRequest>, I>>(
        object: I,
    ): ListClusterOperationsRequest {
        const message = { ...baseListClusterOperationsRequest } as ListClusterOperationsRequest;
        message.clusterId = object.clusterId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        return message;
    },
};

const baseListClusterOperationsResponse: object = { nextPageToken: '' };

export const ListClusterOperationsResponse: {
    encode(message: ListClusterOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterOperationsResponse;
    fromJSON(object: any): ListClusterOperationsResponse;
    toJSON(message: ListClusterOperationsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListClusterOperationsResponse>, I>>(object: I): ListClusterOperationsResponse;
} = {
    encode(
        message: ListClusterOperationsResponse,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListClusterOperationsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListClusterOperationsResponse } as ListClusterOperationsResponse;
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

    fromJSON(object: any): ListClusterOperationsResponse {
        const message = { ...baseListClusterOperationsResponse } as ListClusterOperationsResponse;
        message.operations = (object.operations ?? []).map((e: any) => Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListClusterOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => (e ? Operation.toJSON(e) : undefined));
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListClusterOperationsResponse>, I>>(
        object: I,
    ): ListClusterOperationsResponse {
        const message = { ...baseListClusterOperationsResponse } as ListClusterOperationsResponse;
        message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseConfigSpec: object = {};

export const ConfigSpec: {
    encode(message: ConfigSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfigSpec;
    fromJSON(object: any): ConfigSpec;
    toJSON(message: ConfigSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<ConfigSpec>, I>>(object: I): ConfigSpec;
} = {
    encode(message: ConfigSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(18).fork()).ldelim();
        }
        if (message.warehouse !== undefined) {
            WarehouseConfig.encode(message.warehouse, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ConfigSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConfigSpec } as ConfigSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.warehouse = WarehouseConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ConfigSpec {
        const message = { ...baseConfigSpec } as ConfigSpec;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.warehouse =
            object.warehouse !== undefined && object.warehouse !== null
                ? WarehouseConfig.fromJSON(object.warehouse)
                : undefined;
        return message;
    },

    toJSON(message: ConfigSpec): unknown {
        const obj: any = {};
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.warehouse !== undefined &&
            (obj.warehouse = message.warehouse
                ? WarehouseConfig.toJSON(message.warehouse)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ConfigSpec>, I>>(object: I): ConfigSpec {
        const message = { ...baseConfigSpec } as ConfigSpec;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.warehouse =
            object.warehouse !== undefined && object.warehouse !== null
                ? WarehouseConfig.fromPartial(object.warehouse)
                : undefined;
        return message;
    },
};

const baseUpdateClusterConfigSpec: object = {};

export const UpdateClusterConfigSpec: {
    encode(message: UpdateClusterConfigSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClusterConfigSpec;
    fromJSON(object: any): UpdateClusterConfigSpec;
    toJSON(message: UpdateClusterConfigSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateClusterConfigSpec>, I>>(object: I): UpdateClusterConfigSpec;
} = {
    encode(message: UpdateClusterConfigSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        if (message.warehouse !== undefined) {
            WarehouseConfig.encode(message.warehouse, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClusterConfigSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateClusterConfigSpec } as UpdateClusterConfigSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.warehouse = WarehouseConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateClusterConfigSpec {
        const message = { ...baseUpdateClusterConfigSpec } as UpdateClusterConfigSpec;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromJSON(object.resources)
                : undefined;
        message.warehouse =
            object.warehouse !== undefined && object.warehouse !== null
                ? WarehouseConfig.fromJSON(object.warehouse)
                : undefined;
        return message;
    },

    toJSON(message: UpdateClusterConfigSpec): unknown {
        const obj: any = {};
        message.resources !== undefined &&
            (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
        message.warehouse !== undefined &&
            (obj.warehouse = message.warehouse
                ? WarehouseConfig.toJSON(message.warehouse)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateClusterConfigSpec>, I>>(
        object: I,
    ): UpdateClusterConfigSpec {
        const message = { ...baseUpdateClusterConfigSpec } as UpdateClusterConfigSpec;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? Resources.fromPartial(object.resources)
                : undefined;
        message.warehouse =
            object.warehouse !== undefined && object.warehouse !== null
                ? WarehouseConfig.fromPartial(object.warehouse)
                : undefined;
        return message;
    },
};

const baseUpdateNetworkConfigSpec: object = { securityGroupIds: '' };

export const UpdateNetworkConfigSpec: {
    encode(message: UpdateNetworkConfigSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateNetworkConfigSpec;
    fromJSON(object: any): UpdateNetworkConfigSpec;
    toJSON(message: UpdateNetworkConfigSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateNetworkConfigSpec>, I>>(object: I): UpdateNetworkConfigSpec;
} = {
    encode(message: UpdateNetworkConfigSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.securityGroupIds) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateNetworkConfigSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateNetworkConfigSpec } as UpdateNetworkConfigSpec;
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateNetworkConfigSpec {
        const message = { ...baseUpdateNetworkConfigSpec } as UpdateNetworkConfigSpec;
        message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: UpdateNetworkConfigSpec): unknown {
        const obj: any = {};
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        } else {
            obj.securityGroupIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateNetworkConfigSpec>, I>>(
        object: I,
    ): UpdateNetworkConfigSpec {
        const message = { ...baseUpdateNetworkConfigSpec } as UpdateNetworkConfigSpec;
        message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
        return message;
    },
};

/** A set of methods for managing Metastore Cluster resources. */
export const ClusterServiceService = {
    /** Returns the specified Metastore Cluster. */
    get: {
        path: '/yandex.cloud.metastore.v1.ClusterService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetClusterRequest) =>
            Buffer.from(GetClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetClusterRequest.decode(value),
        responseSerialize: (value: Cluster) => Buffer.from(Cluster.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Cluster.decode(value),
    },
    /** Retrieves a list of Metastore Clusters. */
    list: {
        path: '/yandex.cloud.metastore.v1.ClusterService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListClustersRequest) =>
            Buffer.from(ListClustersRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListClustersRequest.decode(value),
        responseSerialize: (value: ListClustersResponse) =>
            Buffer.from(ListClustersResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListClustersResponse.decode(value),
    },
    /** Creates a Metastore Cluster. */
    create: {
        path: '/yandex.cloud.metastore.v1.ClusterService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateClusterRequest) =>
            Buffer.from(CreateClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the configuration of the specified Metastore Cluster. */
    update: {
        path: '/yandex.cloud.metastore.v1.ClusterService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateClusterRequest) =>
            Buffer.from(UpdateClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified Metastore Cluster. */
    delete: {
        path: '/yandex.cloud.metastore.v1.ClusterService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteClusterRequest) =>
            Buffer.from(DeleteClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Starts the specified Metastore Cluster. */
    start: {
        path: '/yandex.cloud.metastore.v1.ClusterService/Start',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StartClusterRequest) =>
            Buffer.from(StartClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => StartClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Stops the specified Metastore Cluster. */
    stop: {
        path: '/yandex.cloud.metastore.v1.ClusterService/Stop',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StopClusterRequest) =>
            Buffer.from(StopClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => StopClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Imports data to the specified Metastore Cluster. */
    importData: {
        path: '/yandex.cloud.metastore.v1.ClusterService/ImportData',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ImportDataRequest) =>
            Buffer.from(ImportDataRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ImportDataRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Exports data from the specified Metastore Cluster. */
    exportData: {
        path: '/yandex.cloud.metastore.v1.ClusterService/ExportData',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ExportDataRequest) =>
            Buffer.from(ExportDataRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ExportDataRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Retrieves the list of Operation resources for the specified Hive Metastore Cluster. */
    listOperations: {
        path: '/yandex.cloud.metastore.v1.ClusterService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListClusterOperationsRequest) =>
            Buffer.from(ListClusterOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListClusterOperationsRequest.decode(value),
        responseSerialize: (value: ListClusterOperationsResponse) =>
            Buffer.from(ListClusterOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListClusterOperationsResponse.decode(value),
    },
    /** Retrieves a list of access bindings for the specified Metastore cluster. */
    listAccessBindings: {
        path: '/yandex.cloud.metastore.v1.ClusterService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessBindingsRequest) =>
            Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListAccessBindingsRequest.decode(value),
        responseSerialize: (value: ListAccessBindingsResponse) =>
            Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the specified Metastore cluster. */
    setAccessBindings: {
        path: '/yandex.cloud.metastore.v1.ClusterService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetAccessBindingsRequest) =>
            Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates access bindings for the specified Metastore cluster. */
    updateAccessBindings: {
        path: '/yandex.cloud.metastore.v1.ClusterService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAccessBindingsRequest) =>
            Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface ClusterServiceServer extends UntypedServiceImplementation {
    /** Returns the specified Metastore Cluster. */
    get: handleUnaryCall<GetClusterRequest, Cluster>;
    /** Retrieves a list of Metastore Clusters. */
    list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
    /** Creates a Metastore Cluster. */
    create: handleUnaryCall<CreateClusterRequest, Operation>;
    /** Updates the configuration of the specified Metastore Cluster. */
    update: handleUnaryCall<UpdateClusterRequest, Operation>;
    /** Deletes the specified Metastore Cluster. */
    delete: handleUnaryCall<DeleteClusterRequest, Operation>;
    /** Starts the specified Metastore Cluster. */
    start: handleUnaryCall<StartClusterRequest, Operation>;
    /** Stops the specified Metastore Cluster. */
    stop: handleUnaryCall<StopClusterRequest, Operation>;
    /** Imports data to the specified Metastore Cluster. */
    importData: handleUnaryCall<ImportDataRequest, Operation>;
    /** Exports data from the specified Metastore Cluster. */
    exportData: handleUnaryCall<ExportDataRequest, Operation>;
    /** Retrieves the list of Operation resources for the specified Hive Metastore Cluster. */
    listOperations: handleUnaryCall<ListClusterOperationsRequest, ListClusterOperationsResponse>;
    /** Retrieves a list of access bindings for the specified Metastore cluster. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the specified Metastore cluster. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified Metastore cluster. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface ClusterServiceClient extends Client {
    /** Returns the specified Metastore Cluster. */
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
    /** Retrieves a list of Metastore Clusters. */
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
    /** Creates a Metastore Cluster. */
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
    /** Updates the configuration of the specified Metastore Cluster. */
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
    /** Deletes the specified Metastore Cluster. */
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
    /** Starts the specified Metastore Cluster. */
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
    /** Stops the specified Metastore Cluster. */
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
    /** Imports data to the specified Metastore Cluster. */
    importData(
        request: ImportDataRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    importData(
        request: ImportDataRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    importData(
        request: ImportDataRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Exports data from the specified Metastore Cluster. */
    exportData(
        request: ExportDataRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    exportData(
        request: ExportDataRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    exportData(
        request: ExportDataRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of Operation resources for the specified Hive Metastore Cluster. */
    listOperations(
        request: ListClusterOperationsRequest,
        callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListClusterOperationsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void,
    ): ClientUnaryCall;
    listOperations(
        request: ListClusterOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void,
    ): ClientUnaryCall;
    /** Retrieves a list of access bindings for the specified Metastore cluster. */
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
    /** Sets access bindings for the specified Metastore cluster. */
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
    /** Updates access bindings for the specified Metastore cluster. */
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

export const ClusterServiceClient = makeGenericClientConstructor(
    ClusterServiceService,
    'yandex.cloud.metastore.v1.ClusterService',
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
