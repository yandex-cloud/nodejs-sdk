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
import {
    ClusterConfig,
    NetworkConfig,
    CodeSyncConfig,
    LoggingConfig,
    AirflowConfig,
    WebserverConfig,
    SchedulerConfig,
    TriggererConfig,
    WorkerConfig,
    Dependencies,
    LockboxConfig,
    Cluster,
} from '../../../../yandex/cloud/airflow/v1/cluster';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../../../yandex/cloud/operation/operation';

export const protobufPackage = 'yandex.cloud.airflow.v1';

export interface GetClusterRequest {
    $type: 'yandex.cloud.airflow.v1.GetClusterRequest';
    /** ID of the Apache Airflow Cluster resource to return. */
    clusterId: string;
}

export interface ListClustersRequest {
    $type: 'yandex.cloud.airflow.v1.ListClustersRequest';
    /** ID of the folder to list Apache Airflow clusters in. */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListClustersResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the [ListClustersResponse.next_page_token]
     * returned by the previous list request.
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
    $type: 'yandex.cloud.airflow.v1.ListClustersResponse';
    /** List of Apache Airflow Cluster resources. */
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
    $type: 'yandex.cloud.airflow.v1.CreateClusterRequest';
    /** ID of the folder to create Apache Airflow cluster in. */
    folderId: string;
    /** Name of the Apache Airflow cluster. The name must be unique within the folder. */
    name: string;
    /** Description of the Apache Airflow cluster. */
    description: string;
    /** Custom labels for the Apache Airflow cluster as `` key:value `` pairs. For example, "env": "prod". */
    labels: { [key: string]: string };
    /** Configuration of Apache Airflow components. */
    config?: ClusterConfig;
    /** Network related configuration options. */
    network?: NetworkConfig;
    /** Parameters of the location and access to the code that will be executed in the cluster. */
    codeSync?: CodeSyncConfig;
    /** Deletion Protection inhibits deletion of the cluster. */
    deletionProtection: boolean;
    /**
     * Service account used to access Cloud resources.
     * For more information, see [documentation](/docs/managed-airflow/concepts/impersonation).
     */
    serviceAccountId: string;
    /** Cloud Logging configuration. */
    logging?: LoggingConfig;
    /** Password of user `admin`. */
    adminPassword: string;
}

export interface CreateClusterRequest_LabelsEntry {
    $type: 'yandex.cloud.airflow.v1.CreateClusterRequest.LabelsEntry';
    key: string;
    value: string;
}

export interface CreateClusterMetadata {
    $type: 'yandex.cloud.airflow.v1.CreateClusterMetadata';
    /** ID of the Apache Airflow cluster that is being created. */
    clusterId: string;
}

export interface UpdateClusterConfigSpec {
    $type: 'yandex.cloud.airflow.v1.UpdateClusterConfigSpec';
    /** Configuration of the Apache Airflow application itself. */
    airflow?: AirflowConfig;
    /** Configuration of webserver instances. */
    webserver?: WebserverConfig;
    /** Configuration of scheduler instances. */
    scheduler?: SchedulerConfig;
    /** Configuration of triggerer instances. */
    triggerer?: TriggererConfig;
    /** Configuration of worker instances. */
    worker?: WorkerConfig;
    /** The list of additional packages installed in the cluster. */
    dependencies?: Dependencies;
    /** Configuration of Lockbox Secret Backend. */
    lockbox?: LockboxConfig;
}

export interface UpdateNetworkConfigSpec {
    $type: 'yandex.cloud.airflow.v1.UpdateNetworkConfigSpec';
    /** User security groups. */
    securityGroupIds: string[];
}

export interface UpdateClusterRequest {
    $type: 'yandex.cloud.airflow.v1.UpdateClusterRequest';
    /** ID of the Apache Airflow Cluster resource to update. */
    clusterId: string;
    /** Field mask that specifies which fields of the Apache Airflow Cluster resource should be updated. */
    updateMask?: FieldMask;
    /** New name of the cluster. */
    name: string;
    /** New description of the Apache Airflow cluster. */
    description: string;
    /**
     * Custom labels for the Apache Airflow cluster as `` key:value `` pairs. For example, "env": "prod".
     *
     * The new set of labels will completely replace the old ones. To add a label, request the current
     * set with the [ClusterService.Get] method, then send an [ClusterService.Update] request with the new label added to the set.
     */
    labels: { [key: string]: string };
    /** Configuration of Apache Airflow components. */
    configSpec?: UpdateClusterConfigSpec;
    /** Parameters of the location and access to the code that will be executed in the cluster. */
    codeSync?: CodeSyncConfig;
    /** Network related configuration options. */
    networkSpec?: UpdateNetworkConfigSpec;
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
    /**
     * Service account used to access Cloud resources.
     * For more information, see [documentation](/docs/managed-airflow/concepts/impersonation).
     */
    serviceAccountId: string;
    /** Cloud Logging configuration. */
    logging?: LoggingConfig;
}

export interface UpdateClusterRequest_LabelsEntry {
    $type: 'yandex.cloud.airflow.v1.UpdateClusterRequest.LabelsEntry';
    key: string;
    value: string;
}

export interface UpdateClusterMetadata {
    $type: 'yandex.cloud.airflow.v1.UpdateClusterMetadata';
    /** ID of the Apache Airflow Cluster resource that is being updated. */
    clusterId: string;
}

export interface DeleteClusterRequest {
    $type: 'yandex.cloud.airflow.v1.DeleteClusterRequest';
    /** ID of the Apache Airflow cluster to delete. */
    clusterId: string;
}

export interface DeleteClusterMetadata {
    $type: 'yandex.cloud.airflow.v1.DeleteClusterMetadata';
    /** ID of the Apache Airflow cluster that is being deleted. */
    clusterId: string;
}

export interface StartClusterRequest {
    $type: 'yandex.cloud.airflow.v1.StartClusterRequest';
    /** ID of the Apache Airflow cluster to start. */
    clusterId: string;
}

export interface StartClusterMetadata {
    $type: 'yandex.cloud.airflow.v1.StartClusterMetadata';
    /** ID of the Apache Airflow cluster that is being started. */
    clusterId: string;
}

export interface StopClusterRequest {
    $type: 'yandex.cloud.airflow.v1.StopClusterRequest';
    /** ID of the Apache Airflow cluster to stop. */
    clusterId: string;
}

export interface StopClusterMetadata {
    $type: 'yandex.cloud.airflow.v1.StopClusterMetadata';
    /** ID of the Apache Airflow cluster that is being stopped. */
    clusterId: string;
}

export interface ListClusterOperationsRequest {
    $type: 'yandex.cloud.airflow.v1.ListClusterOperationsRequest';
    /** ID of the Apache Airflow Cluster resource to list operations for. */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListClusterOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.  To get the next page of results, set [page_token] to the [ListClusterOperationsResponse.next_page_token]
     * returned by the previous list request.
     */
    pageToken: string;
}

export interface ListClusterOperationsResponse {
    $type: 'yandex.cloud.airflow.v1.ListClusterOperationsResponse';
    /** List of Operation resources for the specified Apache Airflow cluster. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListClusterOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListClusterOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetClusterRequest: object = {
    $type: 'yandex.cloud.airflow.v1.GetClusterRequest',
    clusterId: '',
};

export const GetClusterRequest = {
    $type: 'yandex.cloud.airflow.v1.GetClusterRequest' as const,

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

messageTypeRegistry.set(GetClusterRequest.$type, GetClusterRequest);

const baseListClustersRequest: object = {
    $type: 'yandex.cloud.airflow.v1.ListClustersRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListClustersRequest = {
    $type: 'yandex.cloud.airflow.v1.ListClustersRequest' as const,

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

messageTypeRegistry.set(ListClustersRequest.$type, ListClustersRequest);

const baseListClustersResponse: object = {
    $type: 'yandex.cloud.airflow.v1.ListClustersResponse',
    nextPageToken: '',
};

export const ListClustersResponse = {
    $type: 'yandex.cloud.airflow.v1.ListClustersResponse' as const,

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

messageTypeRegistry.set(ListClustersResponse.$type, ListClustersResponse);

const baseCreateClusterRequest: object = {
    $type: 'yandex.cloud.airflow.v1.CreateClusterRequest',
    folderId: '',
    name: '',
    description: '',
    deletionProtection: false,
    serviceAccountId: '',
    adminPassword: '',
};

export const CreateClusterRequest = {
    $type: 'yandex.cloud.airflow.v1.CreateClusterRequest' as const,

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
                {
                    $type: 'yandex.cloud.airflow.v1.CreateClusterRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(34).fork(),
            ).ldelim();
        });
        if (message.config !== undefined) {
            ClusterConfig.encode(message.config, writer.uint32(50).fork()).ldelim();
        }
        if (message.network !== undefined) {
            NetworkConfig.encode(message.network, writer.uint32(58).fork()).ldelim();
        }
        if (message.codeSync !== undefined) {
            CodeSyncConfig.encode(message.codeSync, writer.uint32(66).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(72).bool(message.deletionProtection);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(82).string(message.serviceAccountId);
        }
        if (message.logging !== undefined) {
            LoggingConfig.encode(message.logging, writer.uint32(90).fork()).ldelim();
        }
        if (message.adminPassword !== '') {
            writer.uint32(98).string(message.adminPassword);
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
                case 6:
                    message.config = ClusterConfig.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.network = NetworkConfig.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.codeSync = CodeSyncConfig.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.deletionProtection = reader.bool();
                    break;
                case 10:
                    message.serviceAccountId = reader.string();
                    break;
                case 11:
                    message.logging = LoggingConfig.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.adminPassword = reader.string();
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
        message.config =
            object.config !== undefined && object.config !== null
                ? ClusterConfig.fromJSON(object.config)
                : undefined;
        message.network =
            object.network !== undefined && object.network !== null
                ? NetworkConfig.fromJSON(object.network)
                : undefined;
        message.codeSync =
            object.codeSync !== undefined && object.codeSync !== null
                ? CodeSyncConfig.fromJSON(object.codeSync)
                : undefined;
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
        message.adminPassword =
            object.adminPassword !== undefined && object.adminPassword !== null
                ? String(object.adminPassword)
                : '';
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
        message.config !== undefined &&
            (obj.config = message.config ? ClusterConfig.toJSON(message.config) : undefined);
        message.network !== undefined &&
            (obj.network = message.network ? NetworkConfig.toJSON(message.network) : undefined);
        message.codeSync !== undefined &&
            (obj.codeSync = message.codeSync ? CodeSyncConfig.toJSON(message.codeSync) : undefined);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.logging !== undefined &&
            (obj.logging = message.logging ? LoggingConfig.toJSON(message.logging) : undefined);
        message.adminPassword !== undefined && (obj.adminPassword = message.adminPassword);
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
        message.config =
            object.config !== undefined && object.config !== null
                ? ClusterConfig.fromPartial(object.config)
                : undefined;
        message.network =
            object.network !== undefined && object.network !== null
                ? NetworkConfig.fromPartial(object.network)
                : undefined;
        message.codeSync =
            object.codeSync !== undefined && object.codeSync !== null
                ? CodeSyncConfig.fromPartial(object.codeSync)
                : undefined;
        message.deletionProtection = object.deletionProtection ?? false;
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.logging =
            object.logging !== undefined && object.logging !== null
                ? LoggingConfig.fromPartial(object.logging)
                : undefined;
        message.adminPassword = object.adminPassword ?? '';
        return message;
    },
};

messageTypeRegistry.set(CreateClusterRequest.$type, CreateClusterRequest);

const baseCreateClusterRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.airflow.v1.CreateClusterRequest.LabelsEntry',
    key: '',
    value: '',
};

export const CreateClusterRequest_LabelsEntry = {
    $type: 'yandex.cloud.airflow.v1.CreateClusterRequest.LabelsEntry' as const,

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

messageTypeRegistry.set(CreateClusterRequest_LabelsEntry.$type, CreateClusterRequest_LabelsEntry);

const baseCreateClusterMetadata: object = {
    $type: 'yandex.cloud.airflow.v1.CreateClusterMetadata',
    clusterId: '',
};

export const CreateClusterMetadata = {
    $type: 'yandex.cloud.airflow.v1.CreateClusterMetadata' as const,

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

messageTypeRegistry.set(CreateClusterMetadata.$type, CreateClusterMetadata);

const baseUpdateClusterConfigSpec: object = {
    $type: 'yandex.cloud.airflow.v1.UpdateClusterConfigSpec',
};

export const UpdateClusterConfigSpec = {
    $type: 'yandex.cloud.airflow.v1.UpdateClusterConfigSpec' as const,

    encode(message: UpdateClusterConfigSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.airflow !== undefined) {
            AirflowConfig.encode(message.airflow, writer.uint32(18).fork()).ldelim();
        }
        if (message.webserver !== undefined) {
            WebserverConfig.encode(message.webserver, writer.uint32(26).fork()).ldelim();
        }
        if (message.scheduler !== undefined) {
            SchedulerConfig.encode(message.scheduler, writer.uint32(34).fork()).ldelim();
        }
        if (message.triggerer !== undefined) {
            TriggererConfig.encode(message.triggerer, writer.uint32(42).fork()).ldelim();
        }
        if (message.worker !== undefined) {
            WorkerConfig.encode(message.worker, writer.uint32(50).fork()).ldelim();
        }
        if (message.dependencies !== undefined) {
            Dependencies.encode(message.dependencies, writer.uint32(58).fork()).ldelim();
        }
        if (message.lockbox !== undefined) {
            LockboxConfig.encode(message.lockbox, writer.uint32(66).fork()).ldelim();
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
                case 2:
                    message.airflow = AirflowConfig.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.webserver = WebserverConfig.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.scheduler = SchedulerConfig.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.triggerer = TriggererConfig.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.worker = WorkerConfig.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.dependencies = Dependencies.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.lockbox = LockboxConfig.decode(reader, reader.uint32());
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
        message.airflow =
            object.airflow !== undefined && object.airflow !== null
                ? AirflowConfig.fromJSON(object.airflow)
                : undefined;
        message.webserver =
            object.webserver !== undefined && object.webserver !== null
                ? WebserverConfig.fromJSON(object.webserver)
                : undefined;
        message.scheduler =
            object.scheduler !== undefined && object.scheduler !== null
                ? SchedulerConfig.fromJSON(object.scheduler)
                : undefined;
        message.triggerer =
            object.triggerer !== undefined && object.triggerer !== null
                ? TriggererConfig.fromJSON(object.triggerer)
                : undefined;
        message.worker =
            object.worker !== undefined && object.worker !== null
                ? WorkerConfig.fromJSON(object.worker)
                : undefined;
        message.dependencies =
            object.dependencies !== undefined && object.dependencies !== null
                ? Dependencies.fromJSON(object.dependencies)
                : undefined;
        message.lockbox =
            object.lockbox !== undefined && object.lockbox !== null
                ? LockboxConfig.fromJSON(object.lockbox)
                : undefined;
        return message;
    },

    toJSON(message: UpdateClusterConfigSpec): unknown {
        const obj: any = {};
        message.airflow !== undefined &&
            (obj.airflow = message.airflow ? AirflowConfig.toJSON(message.airflow) : undefined);
        message.webserver !== undefined &&
            (obj.webserver = message.webserver
                ? WebserverConfig.toJSON(message.webserver)
                : undefined);
        message.scheduler !== undefined &&
            (obj.scheduler = message.scheduler
                ? SchedulerConfig.toJSON(message.scheduler)
                : undefined);
        message.triggerer !== undefined &&
            (obj.triggerer = message.triggerer
                ? TriggererConfig.toJSON(message.triggerer)
                : undefined);
        message.worker !== undefined &&
            (obj.worker = message.worker ? WorkerConfig.toJSON(message.worker) : undefined);
        message.dependencies !== undefined &&
            (obj.dependencies = message.dependencies
                ? Dependencies.toJSON(message.dependencies)
                : undefined);
        message.lockbox !== undefined &&
            (obj.lockbox = message.lockbox ? LockboxConfig.toJSON(message.lockbox) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateClusterConfigSpec>, I>>(
        object: I,
    ): UpdateClusterConfigSpec {
        const message = { ...baseUpdateClusterConfigSpec } as UpdateClusterConfigSpec;
        message.airflow =
            object.airflow !== undefined && object.airflow !== null
                ? AirflowConfig.fromPartial(object.airflow)
                : undefined;
        message.webserver =
            object.webserver !== undefined && object.webserver !== null
                ? WebserverConfig.fromPartial(object.webserver)
                : undefined;
        message.scheduler =
            object.scheduler !== undefined && object.scheduler !== null
                ? SchedulerConfig.fromPartial(object.scheduler)
                : undefined;
        message.triggerer =
            object.triggerer !== undefined && object.triggerer !== null
                ? TriggererConfig.fromPartial(object.triggerer)
                : undefined;
        message.worker =
            object.worker !== undefined && object.worker !== null
                ? WorkerConfig.fromPartial(object.worker)
                : undefined;
        message.dependencies =
            object.dependencies !== undefined && object.dependencies !== null
                ? Dependencies.fromPartial(object.dependencies)
                : undefined;
        message.lockbox =
            object.lockbox !== undefined && object.lockbox !== null
                ? LockboxConfig.fromPartial(object.lockbox)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(UpdateClusterConfigSpec.$type, UpdateClusterConfigSpec);

const baseUpdateNetworkConfigSpec: object = {
    $type: 'yandex.cloud.airflow.v1.UpdateNetworkConfigSpec',
    securityGroupIds: '',
};

export const UpdateNetworkConfigSpec = {
    $type: 'yandex.cloud.airflow.v1.UpdateNetworkConfigSpec' as const,

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

messageTypeRegistry.set(UpdateNetworkConfigSpec.$type, UpdateNetworkConfigSpec);

const baseUpdateClusterRequest: object = {
    $type: 'yandex.cloud.airflow.v1.UpdateClusterRequest',
    clusterId: '',
    name: '',
    description: '',
    deletionProtection: false,
    serviceAccountId: '',
};

export const UpdateClusterRequest = {
    $type: 'yandex.cloud.airflow.v1.UpdateClusterRequest' as const,

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
                {
                    $type: 'yandex.cloud.airflow.v1.UpdateClusterRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        if (message.configSpec !== undefined) {
            UpdateClusterConfigSpec.encode(message.configSpec, writer.uint32(50).fork()).ldelim();
        }
        if (message.codeSync !== undefined) {
            CodeSyncConfig.encode(message.codeSync, writer.uint32(58).fork()).ldelim();
        }
        if (message.networkSpec !== undefined) {
            UpdateNetworkConfigSpec.encode(message.networkSpec, writer.uint32(66).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(72).bool(message.deletionProtection);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(82).string(message.serviceAccountId);
        }
        if (message.logging !== undefined) {
            LoggingConfig.encode(message.logging, writer.uint32(90).fork()).ldelim();
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
                case 6:
                    message.configSpec = UpdateClusterConfigSpec.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.codeSync = CodeSyncConfig.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.networkSpec = UpdateNetworkConfigSpec.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.deletionProtection = reader.bool();
                    break;
                case 10:
                    message.serviceAccountId = reader.string();
                    break;
                case 11:
                    message.logging = LoggingConfig.decode(reader, reader.uint32());
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
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? UpdateClusterConfigSpec.fromJSON(object.configSpec)
                : undefined;
        message.codeSync =
            object.codeSync !== undefined && object.codeSync !== null
                ? CodeSyncConfig.fromJSON(object.codeSync)
                : undefined;
        message.networkSpec =
            object.networkSpec !== undefined && object.networkSpec !== null
                ? UpdateNetworkConfigSpec.fromJSON(object.networkSpec)
                : undefined;
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
        message.configSpec !== undefined &&
            (obj.configSpec = message.configSpec
                ? UpdateClusterConfigSpec.toJSON(message.configSpec)
                : undefined);
        message.codeSync !== undefined &&
            (obj.codeSync = message.codeSync ? CodeSyncConfig.toJSON(message.codeSync) : undefined);
        message.networkSpec !== undefined &&
            (obj.networkSpec = message.networkSpec
                ? UpdateNetworkConfigSpec.toJSON(message.networkSpec)
                : undefined);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.logging !== undefined &&
            (obj.logging = message.logging ? LoggingConfig.toJSON(message.logging) : undefined);
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
        message.configSpec =
            object.configSpec !== undefined && object.configSpec !== null
                ? UpdateClusterConfigSpec.fromPartial(object.configSpec)
                : undefined;
        message.codeSync =
            object.codeSync !== undefined && object.codeSync !== null
                ? CodeSyncConfig.fromPartial(object.codeSync)
                : undefined;
        message.networkSpec =
            object.networkSpec !== undefined && object.networkSpec !== null
                ? UpdateNetworkConfigSpec.fromPartial(object.networkSpec)
                : undefined;
        message.deletionProtection = object.deletionProtection ?? false;
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.logging =
            object.logging !== undefined && object.logging !== null
                ? LoggingConfig.fromPartial(object.logging)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(UpdateClusterRequest.$type, UpdateClusterRequest);

const baseUpdateClusterRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.airflow.v1.UpdateClusterRequest.LabelsEntry',
    key: '',
    value: '',
};

export const UpdateClusterRequest_LabelsEntry = {
    $type: 'yandex.cloud.airflow.v1.UpdateClusterRequest.LabelsEntry' as const,

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

messageTypeRegistry.set(UpdateClusterRequest_LabelsEntry.$type, UpdateClusterRequest_LabelsEntry);

const baseUpdateClusterMetadata: object = {
    $type: 'yandex.cloud.airflow.v1.UpdateClusterMetadata',
    clusterId: '',
};

export const UpdateClusterMetadata = {
    $type: 'yandex.cloud.airflow.v1.UpdateClusterMetadata' as const,

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

messageTypeRegistry.set(UpdateClusterMetadata.$type, UpdateClusterMetadata);

const baseDeleteClusterRequest: object = {
    $type: 'yandex.cloud.airflow.v1.DeleteClusterRequest',
    clusterId: '',
};

export const DeleteClusterRequest = {
    $type: 'yandex.cloud.airflow.v1.DeleteClusterRequest' as const,

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

messageTypeRegistry.set(DeleteClusterRequest.$type, DeleteClusterRequest);

const baseDeleteClusterMetadata: object = {
    $type: 'yandex.cloud.airflow.v1.DeleteClusterMetadata',
    clusterId: '',
};

export const DeleteClusterMetadata = {
    $type: 'yandex.cloud.airflow.v1.DeleteClusterMetadata' as const,

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

messageTypeRegistry.set(DeleteClusterMetadata.$type, DeleteClusterMetadata);

const baseStartClusterRequest: object = {
    $type: 'yandex.cloud.airflow.v1.StartClusterRequest',
    clusterId: '',
};

export const StartClusterRequest = {
    $type: 'yandex.cloud.airflow.v1.StartClusterRequest' as const,

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

messageTypeRegistry.set(StartClusterRequest.$type, StartClusterRequest);

const baseStartClusterMetadata: object = {
    $type: 'yandex.cloud.airflow.v1.StartClusterMetadata',
    clusterId: '',
};

export const StartClusterMetadata = {
    $type: 'yandex.cloud.airflow.v1.StartClusterMetadata' as const,

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

messageTypeRegistry.set(StartClusterMetadata.$type, StartClusterMetadata);

const baseStopClusterRequest: object = {
    $type: 'yandex.cloud.airflow.v1.StopClusterRequest',
    clusterId: '',
};

export const StopClusterRequest = {
    $type: 'yandex.cloud.airflow.v1.StopClusterRequest' as const,

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

messageTypeRegistry.set(StopClusterRequest.$type, StopClusterRequest);

const baseStopClusterMetadata: object = {
    $type: 'yandex.cloud.airflow.v1.StopClusterMetadata',
    clusterId: '',
};

export const StopClusterMetadata = {
    $type: 'yandex.cloud.airflow.v1.StopClusterMetadata' as const,

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

messageTypeRegistry.set(StopClusterMetadata.$type, StopClusterMetadata);

const baseListClusterOperationsRequest: object = {
    $type: 'yandex.cloud.airflow.v1.ListClusterOperationsRequest',
    clusterId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListClusterOperationsRequest = {
    $type: 'yandex.cloud.airflow.v1.ListClusterOperationsRequest' as const,

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

messageTypeRegistry.set(ListClusterOperationsRequest.$type, ListClusterOperationsRequest);

const baseListClusterOperationsResponse: object = {
    $type: 'yandex.cloud.airflow.v1.ListClusterOperationsResponse',
    nextPageToken: '',
};

export const ListClusterOperationsResponse = {
    $type: 'yandex.cloud.airflow.v1.ListClusterOperationsResponse' as const,

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

messageTypeRegistry.set(ListClusterOperationsResponse.$type, ListClusterOperationsResponse);

/** A set of methods for managing Apache Airflow Cluster resources. */
export const ClusterServiceService = {
    /** Returns the specified Apache Airflow Cluster resource. */
    get: {
        path: '/yandex.cloud.airflow.v1.ClusterService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetClusterRequest) =>
            Buffer.from(GetClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetClusterRequest.decode(value),
        responseSerialize: (value: Cluster) => Buffer.from(Cluster.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Cluster.decode(value),
    },
    /** Retrieves a list of Apache Airflow Cluster resources. */
    list: {
        path: '/yandex.cloud.airflow.v1.ClusterService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListClustersRequest) =>
            Buffer.from(ListClustersRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListClustersRequest.decode(value),
        responseSerialize: (value: ListClustersResponse) =>
            Buffer.from(ListClustersResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListClustersResponse.decode(value),
    },
    /** Creates an Apache Airflow cluster. */
    create: {
        path: '/yandex.cloud.airflow.v1.ClusterService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateClusterRequest) =>
            Buffer.from(CreateClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified Apache Airflow cluster. */
    update: {
        path: '/yandex.cloud.airflow.v1.ClusterService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateClusterRequest) =>
            Buffer.from(UpdateClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified Apache Airflow cluster. */
    delete: {
        path: '/yandex.cloud.airflow.v1.ClusterService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteClusterRequest) =>
            Buffer.from(DeleteClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Starts the specified Apache Airflow cluster. */
    start: {
        path: '/yandex.cloud.airflow.v1.ClusterService/Start',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StartClusterRequest) =>
            Buffer.from(StartClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => StartClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Stops the specified Apache Airflow cluster. */
    stop: {
        path: '/yandex.cloud.airflow.v1.ClusterService/Stop',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StopClusterRequest) =>
            Buffer.from(StopClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => StopClusterRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Retrieves the list of Operation resources for the specified cluster. */
    listOperations: {
        path: '/yandex.cloud.airflow.v1.ClusterService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListClusterOperationsRequest) =>
            Buffer.from(ListClusterOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListClusterOperationsRequest.decode(value),
        responseSerialize: (value: ListClusterOperationsResponse) =>
            Buffer.from(ListClusterOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListClusterOperationsResponse.decode(value),
    },
} as const;

export interface ClusterServiceServer extends UntypedServiceImplementation {
    /** Returns the specified Apache Airflow Cluster resource. */
    get: handleUnaryCall<GetClusterRequest, Cluster>;
    /** Retrieves a list of Apache Airflow Cluster resources. */
    list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
    /** Creates an Apache Airflow cluster. */
    create: handleUnaryCall<CreateClusterRequest, Operation>;
    /** Updates the specified Apache Airflow cluster. */
    update: handleUnaryCall<UpdateClusterRequest, Operation>;
    /** Deletes the specified Apache Airflow cluster. */
    delete: handleUnaryCall<DeleteClusterRequest, Operation>;
    /** Starts the specified Apache Airflow cluster. */
    start: handleUnaryCall<StartClusterRequest, Operation>;
    /** Stops the specified Apache Airflow cluster. */
    stop: handleUnaryCall<StopClusterRequest, Operation>;
    /** Retrieves the list of Operation resources for the specified cluster. */
    listOperations: handleUnaryCall<ListClusterOperationsRequest, ListClusterOperationsResponse>;
}

export interface ClusterServiceClient extends Client {
    /** Returns the specified Apache Airflow Cluster resource. */
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
    /** Retrieves a list of Apache Airflow Cluster resources. */
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
    /** Creates an Apache Airflow cluster. */
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
    /** Updates the specified Apache Airflow cluster. */
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
    /** Deletes the specified Apache Airflow cluster. */
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
    /** Starts the specified Apache Airflow cluster. */
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
    /** Stops the specified Apache Airflow cluster. */
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
    /** Retrieves the list of Operation resources for the specified cluster. */
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
}

export const ClusterServiceClient = makeGenericClientConstructor(
    ClusterServiceService,
    'yandex.cloud.airflow.v1.ClusterService',
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
