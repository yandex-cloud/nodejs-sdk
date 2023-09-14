/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
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
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import {
  NetworkPolicy,
  IPAllocationPolicy,
  MasterMaintenancePolicy,
  MasterLogging,
  ReleaseChannel,
  KMSProvider,
  Cluster,
  Cilium,
  releaseChannelFromJSON,
  releaseChannelToJSON,
} from "../../../../yandex/cloud/k8s/v1/cluster";
import { UpdateVersionSpec } from "../../../../yandex/cloud/k8s/v1/version";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import { NodeGroup } from "../../../../yandex/cloud/k8s/v1/node_group";
import { Node } from "../../../../yandex/cloud/k8s/v1/node";

export const protobufPackage = "yandex.cloud.k8s.v1";

export interface GetClusterRequest {
  $type: "yandex.cloud.k8s.v1.GetClusterRequest";
  /** ID of the Kubernetes cluster to return. */
  clusterId: string;
}

export interface ListClustersRequest {
  $type: "yandex.cloud.k8s.v1.ListClustersRequest";
  /**
   * ID of the folder to list Kubernetes cluster in.
   * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListClustersResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListClustersResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [Cluster.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
}

export interface ListClustersResponse {
  $type: "yandex.cloud.k8s.v1.ListClustersResponse";
  /** List of Kubernetes cluster. */
  clusters: Cluster[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListClustersRequest.page_size], use
   * the `next_page_token` as the value
   * for the [ListClustersRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface DeleteClusterRequest {
  $type: "yandex.cloud.k8s.v1.DeleteClusterRequest";
  /**
   * ID of the Kubernetes cluster to delete.
   * To get Kubernetes cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface DeleteClusterMetadata {
  $type: "yandex.cloud.k8s.v1.DeleteClusterMetadata";
  /** ID of the Kubernetes cluster that is being deleted. */
  clusterId: string;
}

export interface StopClusterRequest {
  $type: "yandex.cloud.k8s.v1.StopClusterRequest";
  /**
   * ID of the Kubernetes cluster to stop.
   * To get Kubernetes cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface StopClusterMetadata {
  $type: "yandex.cloud.k8s.v1.StopClusterMetadata";
  /** ID of the Kubernetes cluster that is being stopped. */
  clusterId: string;
}

export interface StartClusterRequest {
  $type: "yandex.cloud.k8s.v1.StartClusterRequest";
  /**
   * ID of the Kubernetes cluster to start.
   * To get Kubernetes cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
}

export interface StartClusterMetadata {
  $type: "yandex.cloud.k8s.v1.StartClusterMetadata";
  /** ID of the Kubernetes cluster that is being started. */
  clusterId: string;
}

export interface UpdateClusterRequest {
  $type: "yandex.cloud.k8s.v1.UpdateClusterRequest";
  /**
   * ID of the Kubernetes cluster to update.
   * To get the Kubernetes cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  updateMask?: FieldMask;
  /**
   * Name of the Kubernetes cluster.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the Kubernetes cluster. */
  description: string;
  /**
   * Resource labels as `key:value` pairs.
   *
   * Existing set of `labels` is completely replaced by the provided set.
   */
  labels: { [key: string]: string };
  /** Gateway IPv4 address. */
  gatewayIpv4Address: string | undefined;
  /** Specification of the master update. */
  masterSpec?: MasterUpdateSpec;
  /**
   * Service account to be used for provisioning Compute Cloud and VPC resources for Kubernetes cluster.
   * Selected service account should have `edit` role on the folder where the Kubernetes cluster will be
   * located and on the folder where selected network resides.
   */
  serviceAccountId: string;
  /**
   * Service account to be used by the worker nodes of the Kubernetes cluster to access Container Registry
   * or to push node logs and metrics.
   */
  nodeServiceAccountId: string;
  networkPolicy?: NetworkPolicy;
  ipAllocationPolicy?: IPAllocationPolicy;
}

export interface UpdateClusterRequest_LabelsEntry {
  $type: "yandex.cloud.k8s.v1.UpdateClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface MasterUpdateSpec {
  $type: "yandex.cloud.k8s.v1.MasterUpdateSpec";
  /** Specification of the master update. */
  version?: UpdateVersionSpec;
  /** Maintenance policy of the master. */
  maintenancePolicy?: MasterMaintenancePolicy;
  /** Master security groups. */
  securityGroupIds: string[];
  /** Cloud Logging for master components. */
  masterLogging?: MasterLogging;
  /** Update master instance locations. */
  locations: LocationSpec[];
}

export interface UpdateClusterMetadata {
  $type: "yandex.cloud.k8s.v1.UpdateClusterMetadata";
  /** ID of the Kubernetes cluster that is being updated. */
  clusterId: string;
}

export interface CreateClusterRequest {
  $type: "yandex.cloud.k8s.v1.CreateClusterRequest";
  /**
   * ID of the folder to create a Kubernetes cluster in.
   * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the Kubernetes cluster.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the Kubernetes cluster. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** ID of the network. */
  networkId: string;
  /** Master specification of the Kubernetes cluster. */
  masterSpec?: MasterSpec;
  /** IP allocation policy of the Kubernetes cluster. */
  ipAllocationPolicy?: IPAllocationPolicy;
  /** Gateway IPv4 address. */
  gatewayIpv4Address: string | undefined;
  /**
   * Service account to be used for provisioning Compute Cloud and VPC resources for Kubernetes cluster.
   * Selected service account should have `edit` role on the folder where the Kubernetes cluster will be
   * located and on the folder where selected network resides.
   */
  serviceAccountId: string;
  /** Service account to be used by the worker nodes of the Kubernetes cluster to access Container Registry or to push node logs and metrics. */
  nodeServiceAccountId: string;
  /** Release channel for the master. */
  releaseChannel: ReleaseChannel;
  networkPolicy?: NetworkPolicy;
  /** KMS provider configuration. */
  kmsProvider?: KMSProvider;
  cilium?: Cilium | undefined;
}

export interface CreateClusterRequest_LabelsEntry {
  $type: "yandex.cloud.k8s.v1.CreateClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateClusterMetadata {
  $type: "yandex.cloud.k8s.v1.CreateClusterMetadata";
  /** ID of the Kubernetes cluster that is being created. */
  clusterId: string;
}

export interface AutoUpgradeMasterMetadata {
  $type: "yandex.cloud.k8s.v1.AutoUpgradeMasterMetadata";
  /** ID of the Kubernetes cluster that is being auto upgraded. */
  clusterId: string;
}

export interface ListClusterOperationsRequest {
  $type: "yandex.cloud.k8s.v1.ListClusterOperationsRequest";
  /** ID of the Kubernetes cluster to list operations for. */
  clusterId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than [page_size], the service returns a [ListClusterOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListClusterOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * Currently you can use filtering only on [Cluster.name] field.
   */
  filter: string;
}

export interface ListClusterOperationsResponse {
  $type: "yandex.cloud.k8s.v1.ListClusterOperationsResponse";
  /** List of operations for the specified Kubernetes cluster. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListClusterOperationsRequest.page_size], use the `next_page_token` as the value
   * for the [ListClusterOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListClusterNodeGroupsRequest {
  $type: "yandex.cloud.k8s.v1.ListClusterNodeGroupsRequest";
  /**
   * ID of the Kubernetes cluster to list node groups in.
   * To get the Kubernetes cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListClusterNodeGroupsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListClusterNodeGroupsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * Currently you can use filtering only on [Cluster.name] field.
   */
  filter: string;
}

export interface ListClusterNodeGroupsResponse {
  $type: "yandex.cloud.k8s.v1.ListClusterNodeGroupsResponse";
  /** List of node groups for the specified Kubernetes cluster. */
  nodeGroups: NodeGroup[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListClusterNodeGroupsRequest.page_size], use
   * the `next_page_token` as the value
   * for the [ListClusterNodeGroupsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListClusterNodesRequest {
  $type: "yandex.cloud.k8s.v1.ListClusterNodesRequest";
  /**
   * ID of the Kubernetes cluster to list nodes in.
   * To get the Kubernetes cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListClusterNodesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListClusterNodeGroupsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListClusterNodesResponse {
  $type: "yandex.cloud.k8s.v1.ListClusterNodesResponse";
  /** List of nodes for the specified Kubernetes cluster. */
  nodes: Node[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListClusterNodesRequest.page_size], use
   * the `next_page_token` as the value
   * for the [ListClusterNodesRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface MasterSpec {
  $type: "yandex.cloud.k8s.v1.MasterSpec";
  /** Specification of the zonal master. */
  zonalMasterSpec?: ZonalMasterSpec | undefined;
  /** Specification of the regional master. */
  regionalMasterSpec?: RegionalMasterSpec | undefined;
  /**
   * Locations specification for Kubernetes control-plane (master) instances.
   * Works in conjunction with [etcd_cluster_size]. See it's documentation for details.
   * Possible combinations:
   * - 1 location and etcd_cluster_size = 1 - a single node cluster whose availability is limited by the availability of a single Compute Instance; downtime is expected during cluster updates.
   * - 1 location and etcd_cluster_size = 3 - a highly available cluster within a single availability zone; can survive the failure of a Compute Instance, a server, or an individual server rack.
   * - 3 location and etcd_cluster_size = 3 - a highly available cluster with each etcd instance located within separate availability zone; can survive the failure of a single availability zone.
   */
  locations: LocationSpec[];
  /**
   * Number of etcd nodes in cluster.
   * Works in conjunction with [locations]. See it's documentation for details.
   * Optional. If not set, will be assumed equal to the number of locations.
   */
  etcdClusterSize: number;
  /** Specification of parameters for external IPv4 networking. */
  externalV4AddressSpec?: ExternalAddressSpec;
  /** Specification of parameters for external IPv6 networking. */
  externalV6AddressSpec?: ExternalAddressSpec;
  /** Version of Kubernetes components that runs on the master. */
  version: string;
  /** Maintenance policy of the master. */
  maintenancePolicy?: MasterMaintenancePolicy;
  /** Master security groups. */
  securityGroupIds: string[];
  /** Cloud Logging for master components. */
  masterLogging?: MasterLogging;
}

export interface ZonalMasterSpec {
  $type: "yandex.cloud.k8s.v1.ZonalMasterSpec";
  /** ID of the availability zone. */
  zoneId: string;
  /** Specification of parameters for internal IPv4 networking. */
  internalV4AddressSpec?: InternalAddressSpec;
  /** Specification of parameters for external IPv4 networking. */
  externalV4AddressSpec?: ExternalAddressSpec;
}

export interface RegionalMasterSpec {
  $type: "yandex.cloud.k8s.v1.RegionalMasterSpec";
  /** ID of the availability zone where the master resides. */
  regionId: string;
  /** List of locations where the master will be allocated. */
  locations: MasterLocation[];
  /** Specify to allocate a static public IP for the master. */
  externalV4AddressSpec?: ExternalAddressSpec;
  /** Specification of parameters for external IPv6 networking. */
  externalV6AddressSpec?: ExternalAddressSpec;
}

export interface InternalAddressSpec {
  $type: "yandex.cloud.k8s.v1.InternalAddressSpec";
  /** ID of the subnet. If no ID is specified, and there only one subnet in specified zone, an address in this subnet will be allocated. */
  subnetId: string;
}

export interface ExternalAddressSpec {
  $type: "yandex.cloud.k8s.v1.ExternalAddressSpec";
  /** IP address. */
  address: string;
}

export interface MasterLocation {
  $type: "yandex.cloud.k8s.v1.MasterLocation";
  /** ID of the availability zone. */
  zoneId: string;
  /**
   * If not specified and there is a single subnet in specified zone, address
   * in this subnet will be allocated.
   */
  internalV4AddressSpec?: InternalAddressSpec;
}

export interface LocationSpec {
  $type: "yandex.cloud.k8s.v1.LocationSpec";
  /** ID of the availability zone where the master resides. */
  zoneId: string;
  /**
   * ID of the VPC network's subnet where the master resides.
   * If not specified and there is a single subnet in specified zone, address in this subnet will be allocated.
   */
  subnetId: string;
}

const baseGetClusterRequest: object = {
  $type: "yandex.cloud.k8s.v1.GetClusterRequest",
  clusterId: "",
};

export const GetClusterRequest = {
  $type: "yandex.cloud.k8s.v1.GetClusterRequest" as const,

  encode(
    message: GetClusterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
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
        : "";
    return message;
  },

  toJSON(message: GetClusterRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetClusterRequest>, I>>(
    object: I
  ): GetClusterRequest {
    const message = { ...baseGetClusterRequest } as GetClusterRequest;
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetClusterRequest.$type, GetClusterRequest);

const baseListClustersRequest: object = {
  $type: "yandex.cloud.k8s.v1.ListClustersRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListClustersRequest = {
  $type: "yandex.cloud.k8s.v1.ListClustersRequest" as const,

  encode(
    message: ListClustersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.filter !== "") {
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
        : "";
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    message.filter =
      object.filter !== undefined && object.filter !== null
        ? String(object.filter)
        : "";
    return message;
  },

  toJSON(message: ListClustersRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListClustersRequest>, I>>(
    object: I
  ): ListClustersRequest {
    const message = { ...baseListClustersRequest } as ListClustersRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClustersRequest.$type, ListClustersRequest);

const baseListClustersResponse: object = {
  $type: "yandex.cloud.k8s.v1.ListClustersResponse",
  nextPageToken: "",
};

export const ListClustersResponse = {
  $type: "yandex.cloud.k8s.v1.ListClustersResponse" as const,

  encode(
    message: ListClustersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.clusters) {
      Cluster.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListClustersResponse {
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
    message.clusters = (object.clusters ?? []).map((e: any) =>
      Cluster.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListClustersResponse): unknown {
    const obj: any = {};
    if (message.clusters) {
      obj.clusters = message.clusters.map((e) =>
        e ? Cluster.toJSON(e) : undefined
      );
    } else {
      obj.clusters = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListClustersResponse>, I>>(
    object: I
  ): ListClustersResponse {
    const message = { ...baseListClustersResponse } as ListClustersResponse;
    message.clusters =
      object.clusters?.map((e) => Cluster.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClustersResponse.$type, ListClustersResponse);

const baseDeleteClusterRequest: object = {
  $type: "yandex.cloud.k8s.v1.DeleteClusterRequest",
  clusterId: "",
};

export const DeleteClusterRequest = {
  $type: "yandex.cloud.k8s.v1.DeleteClusterRequest" as const,

  encode(
    message: DeleteClusterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteClusterRequest {
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
        : "";
    return message;
  },

  toJSON(message: DeleteClusterRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteClusterRequest>, I>>(
    object: I
  ): DeleteClusterRequest {
    const message = { ...baseDeleteClusterRequest } as DeleteClusterRequest;
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteClusterRequest.$type, DeleteClusterRequest);

const baseDeleteClusterMetadata: object = {
  $type: "yandex.cloud.k8s.v1.DeleteClusterMetadata",
  clusterId: "",
};

export const DeleteClusterMetadata = {
  $type: "yandex.cloud.k8s.v1.DeleteClusterMetadata" as const,

  encode(
    message: DeleteClusterMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteClusterMetadata {
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
        : "";
    return message;
  },

  toJSON(message: DeleteClusterMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteClusterMetadata>, I>>(
    object: I
  ): DeleteClusterMetadata {
    const message = { ...baseDeleteClusterMetadata } as DeleteClusterMetadata;
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteClusterMetadata.$type, DeleteClusterMetadata);

const baseStopClusterRequest: object = {
  $type: "yandex.cloud.k8s.v1.StopClusterRequest",
  clusterId: "",
};

export const StopClusterRequest = {
  $type: "yandex.cloud.k8s.v1.StopClusterRequest" as const,

  encode(
    message: StopClusterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
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
        : "";
    return message;
  },

  toJSON(message: StopClusterRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StopClusterRequest>, I>>(
    object: I
  ): StopClusterRequest {
    const message = { ...baseStopClusterRequest } as StopClusterRequest;
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StopClusterRequest.$type, StopClusterRequest);

const baseStopClusterMetadata: object = {
  $type: "yandex.cloud.k8s.v1.StopClusterMetadata",
  clusterId: "",
};

export const StopClusterMetadata = {
  $type: "yandex.cloud.k8s.v1.StopClusterMetadata" as const,

  encode(
    message: StopClusterMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
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
        : "";
    return message;
  },

  toJSON(message: StopClusterMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StopClusterMetadata>, I>>(
    object: I
  ): StopClusterMetadata {
    const message = { ...baseStopClusterMetadata } as StopClusterMetadata;
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StopClusterMetadata.$type, StopClusterMetadata);

const baseStartClusterRequest: object = {
  $type: "yandex.cloud.k8s.v1.StartClusterRequest",
  clusterId: "",
};

export const StartClusterRequest = {
  $type: "yandex.cloud.k8s.v1.StartClusterRequest" as const,

  encode(
    message: StartClusterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
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
        : "";
    return message;
  },

  toJSON(message: StartClusterRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StartClusterRequest>, I>>(
    object: I
  ): StartClusterRequest {
    const message = { ...baseStartClusterRequest } as StartClusterRequest;
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StartClusterRequest.$type, StartClusterRequest);

const baseStartClusterMetadata: object = {
  $type: "yandex.cloud.k8s.v1.StartClusterMetadata",
  clusterId: "",
};

export const StartClusterMetadata = {
  $type: "yandex.cloud.k8s.v1.StartClusterMetadata" as const,

  encode(
    message: StartClusterMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StartClusterMetadata {
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
        : "";
    return message;
  },

  toJSON(message: StartClusterMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StartClusterMetadata>, I>>(
    object: I
  ): StartClusterMetadata {
    const message = { ...baseStartClusterMetadata } as StartClusterMetadata;
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(StartClusterMetadata.$type, StartClusterMetadata);

const baseUpdateClusterRequest: object = {
  $type: "yandex.cloud.k8s.v1.UpdateClusterRequest",
  clusterId: "",
  name: "",
  description: "",
  serviceAccountId: "",
  nodeServiceAccountId: "",
};

export const UpdateClusterRequest = {
  $type: "yandex.cloud.k8s.v1.UpdateClusterRequest" as const,

  encode(
    message: UpdateClusterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateClusterRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.k8s.v1.UpdateClusterRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.gatewayIpv4Address !== undefined) {
      writer.uint32(50).string(message.gatewayIpv4Address);
    }
    if (message.masterSpec !== undefined) {
      MasterUpdateSpec.encode(
        message.masterSpec,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(74).string(message.serviceAccountId);
    }
    if (message.nodeServiceAccountId !== "") {
      writer.uint32(66).string(message.nodeServiceAccountId);
    }
    if (message.networkPolicy !== undefined) {
      NetworkPolicy.encode(
        message.networkPolicy,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.ipAllocationPolicy !== undefined) {
      IPAllocationPolicy.encode(
        message.ipAllocationPolicy,
        writer.uint32(90).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateClusterRequest {
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
          const entry5 = UpdateClusterRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.gatewayIpv4Address = reader.string();
          break;
        case 7:
          message.masterSpec = MasterUpdateSpec.decode(reader, reader.uint32());
          break;
        case 9:
          message.serviceAccountId = reader.string();
          break;
        case 8:
          message.nodeServiceAccountId = reader.string();
          break;
        case 10:
          message.networkPolicy = NetworkPolicy.decode(reader, reader.uint32());
          break;
        case 11:
          message.ipAllocationPolicy = IPAllocationPolicy.decode(
            reader,
            reader.uint32()
          );
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
        : "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
        : undefined;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.gatewayIpv4Address =
      object.gatewayIpv4Address !== undefined &&
      object.gatewayIpv4Address !== null
        ? String(object.gatewayIpv4Address)
        : undefined;
    message.masterSpec =
      object.masterSpec !== undefined && object.masterSpec !== null
        ? MasterUpdateSpec.fromJSON(object.masterSpec)
        : undefined;
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.nodeServiceAccountId =
      object.nodeServiceAccountId !== undefined &&
      object.nodeServiceAccountId !== null
        ? String(object.nodeServiceAccountId)
        : "";
    message.networkPolicy =
      object.networkPolicy !== undefined && object.networkPolicy !== null
        ? NetworkPolicy.fromJSON(object.networkPolicy)
        : undefined;
    message.ipAllocationPolicy =
      object.ipAllocationPolicy !== undefined &&
      object.ipAllocationPolicy !== null
        ? IPAllocationPolicy.fromJSON(object.ipAllocationPolicy)
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
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.gatewayIpv4Address !== undefined &&
      (obj.gatewayIpv4Address = message.gatewayIpv4Address);
    message.masterSpec !== undefined &&
      (obj.masterSpec = message.masterSpec
        ? MasterUpdateSpec.toJSON(message.masterSpec)
        : undefined);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.nodeServiceAccountId !== undefined &&
      (obj.nodeServiceAccountId = message.nodeServiceAccountId);
    message.networkPolicy !== undefined &&
      (obj.networkPolicy = message.networkPolicy
        ? NetworkPolicy.toJSON(message.networkPolicy)
        : undefined);
    message.ipAllocationPolicy !== undefined &&
      (obj.ipAllocationPolicy = message.ipAllocationPolicy
        ? IPAllocationPolicy.toJSON(message.ipAllocationPolicy)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateClusterRequest>, I>>(
    object: I
  ): UpdateClusterRequest {
    const message = { ...baseUpdateClusterRequest } as UpdateClusterRequest;
    message.clusterId = object.clusterId ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.gatewayIpv4Address = object.gatewayIpv4Address ?? undefined;
    message.masterSpec =
      object.masterSpec !== undefined && object.masterSpec !== null
        ? MasterUpdateSpec.fromPartial(object.masterSpec)
        : undefined;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.nodeServiceAccountId = object.nodeServiceAccountId ?? "";
    message.networkPolicy =
      object.networkPolicy !== undefined && object.networkPolicy !== null
        ? NetworkPolicy.fromPartial(object.networkPolicy)
        : undefined;
    message.ipAllocationPolicy =
      object.ipAllocationPolicy !== undefined &&
      object.ipAllocationPolicy !== null
        ? IPAllocationPolicy.fromPartial(object.ipAllocationPolicy)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateClusterRequest.$type, UpdateClusterRequest);

const baseUpdateClusterRequest_LabelsEntry: object = {
  $type: "yandex.cloud.k8s.v1.UpdateClusterRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateClusterRequest_LabelsEntry = {
  $type: "yandex.cloud.k8s.v1.UpdateClusterRequest.LabelsEntry" as const,

  encode(
    message: UpdateClusterRequest_LabelsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateClusterRequest_LabelsEntry {
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
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateClusterRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateClusterRequest_LabelsEntry>, I>
  >(object: I): UpdateClusterRequest_LabelsEntry {
    const message = {
      ...baseUpdateClusterRequest_LabelsEntry,
    } as UpdateClusterRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateClusterRequest_LabelsEntry.$type,
  UpdateClusterRequest_LabelsEntry
);

const baseMasterUpdateSpec: object = {
  $type: "yandex.cloud.k8s.v1.MasterUpdateSpec",
  securityGroupIds: "",
};

export const MasterUpdateSpec = {
  $type: "yandex.cloud.k8s.v1.MasterUpdateSpec" as const,

  encode(
    message: MasterUpdateSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== undefined) {
      UpdateVersionSpec.encode(
        message.version,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.maintenancePolicy !== undefined) {
      MasterMaintenancePolicy.encode(
        message.maintenancePolicy,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(26).string(v!);
    }
    if (message.masterLogging !== undefined) {
      MasterLogging.encode(
        message.masterLogging,
        writer.uint32(34).fork()
      ).ldelim();
    }
    for (const v of message.locations) {
      LocationSpec.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MasterUpdateSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMasterUpdateSpec } as MasterUpdateSpec;
    message.securityGroupIds = [];
    message.locations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = UpdateVersionSpec.decode(reader, reader.uint32());
          break;
        case 2:
          message.maintenancePolicy = MasterMaintenancePolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.securityGroupIds.push(reader.string());
          break;
        case 4:
          message.masterLogging = MasterLogging.decode(reader, reader.uint32());
          break;
        case 5:
          message.locations.push(LocationSpec.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MasterUpdateSpec {
    const message = { ...baseMasterUpdateSpec } as MasterUpdateSpec;
    message.version =
      object.version !== undefined && object.version !== null
        ? UpdateVersionSpec.fromJSON(object.version)
        : undefined;
    message.maintenancePolicy =
      object.maintenancePolicy !== undefined &&
      object.maintenancePolicy !== null
        ? MasterMaintenancePolicy.fromJSON(object.maintenancePolicy)
        : undefined;
    message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) =>
      String(e)
    );
    message.masterLogging =
      object.masterLogging !== undefined && object.masterLogging !== null
        ? MasterLogging.fromJSON(object.masterLogging)
        : undefined;
    message.locations = (object.locations ?? []).map((e: any) =>
      LocationSpec.fromJSON(e)
    );
    return message;
  },

  toJSON(message: MasterUpdateSpec): unknown {
    const obj: any = {};
    message.version !== undefined &&
      (obj.version = message.version
        ? UpdateVersionSpec.toJSON(message.version)
        : undefined);
    message.maintenancePolicy !== undefined &&
      (obj.maintenancePolicy = message.maintenancePolicy
        ? MasterMaintenancePolicy.toJSON(message.maintenancePolicy)
        : undefined);
    if (message.securityGroupIds) {
      obj.securityGroupIds = message.securityGroupIds.map((e) => e);
    } else {
      obj.securityGroupIds = [];
    }
    message.masterLogging !== undefined &&
      (obj.masterLogging = message.masterLogging
        ? MasterLogging.toJSON(message.masterLogging)
        : undefined);
    if (message.locations) {
      obj.locations = message.locations.map((e) =>
        e ? LocationSpec.toJSON(e) : undefined
      );
    } else {
      obj.locations = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MasterUpdateSpec>, I>>(
    object: I
  ): MasterUpdateSpec {
    const message = { ...baseMasterUpdateSpec } as MasterUpdateSpec;
    message.version =
      object.version !== undefined && object.version !== null
        ? UpdateVersionSpec.fromPartial(object.version)
        : undefined;
    message.maintenancePolicy =
      object.maintenancePolicy !== undefined &&
      object.maintenancePolicy !== null
        ? MasterMaintenancePolicy.fromPartial(object.maintenancePolicy)
        : undefined;
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.masterLogging =
      object.masterLogging !== undefined && object.masterLogging !== null
        ? MasterLogging.fromPartial(object.masterLogging)
        : undefined;
    message.locations =
      object.locations?.map((e) => LocationSpec.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(MasterUpdateSpec.$type, MasterUpdateSpec);

const baseUpdateClusterMetadata: object = {
  $type: "yandex.cloud.k8s.v1.UpdateClusterMetadata",
  clusterId: "",
};

export const UpdateClusterMetadata = {
  $type: "yandex.cloud.k8s.v1.UpdateClusterMetadata" as const,

  encode(
    message: UpdateClusterMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateClusterMetadata {
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
        : "";
    return message;
  },

  toJSON(message: UpdateClusterMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateClusterMetadata>, I>>(
    object: I
  ): UpdateClusterMetadata {
    const message = { ...baseUpdateClusterMetadata } as UpdateClusterMetadata;
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateClusterMetadata.$type, UpdateClusterMetadata);

const baseCreateClusterRequest: object = {
  $type: "yandex.cloud.k8s.v1.CreateClusterRequest",
  folderId: "",
  name: "",
  description: "",
  networkId: "",
  serviceAccountId: "",
  nodeServiceAccountId: "",
  releaseChannel: 0,
};

export const CreateClusterRequest = {
  $type: "yandex.cloud.k8s.v1.CreateClusterRequest" as const,

  encode(
    message: CreateClusterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateClusterRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.k8s.v1.CreateClusterRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.networkId !== "") {
      writer.uint32(42).string(message.networkId);
    }
    if (message.masterSpec !== undefined) {
      MasterSpec.encode(message.masterSpec, writer.uint32(50).fork()).ldelim();
    }
    if (message.ipAllocationPolicy !== undefined) {
      IPAllocationPolicy.encode(
        message.ipAllocationPolicy,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.gatewayIpv4Address !== undefined) {
      writer.uint32(66).string(message.gatewayIpv4Address);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(74).string(message.serviceAccountId);
    }
    if (message.nodeServiceAccountId !== "") {
      writer.uint32(82).string(message.nodeServiceAccountId);
    }
    if (message.releaseChannel !== 0) {
      writer.uint32(88).int32(message.releaseChannel);
    }
    if (message.networkPolicy !== undefined) {
      NetworkPolicy.encode(
        message.networkPolicy,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.kmsProvider !== undefined) {
      KMSProvider.encode(
        message.kmsProvider,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.cilium !== undefined) {
      Cilium.encode(message.cilium, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateClusterRequest {
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
          const entry4 = CreateClusterRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.networkId = reader.string();
          break;
        case 6:
          message.masterSpec = MasterSpec.decode(reader, reader.uint32());
          break;
        case 7:
          message.ipAllocationPolicy = IPAllocationPolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.gatewayIpv4Address = reader.string();
          break;
        case 9:
          message.serviceAccountId = reader.string();
          break;
        case 10:
          message.nodeServiceAccountId = reader.string();
          break;
        case 11:
          message.releaseChannel = reader.int32() as any;
          break;
        case 12:
          message.networkPolicy = NetworkPolicy.decode(reader, reader.uint32());
          break;
        case 13:
          message.kmsProvider = KMSProvider.decode(reader, reader.uint32());
          break;
        case 14:
          message.cilium = Cilium.decode(reader, reader.uint32());
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
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.networkId =
      object.networkId !== undefined && object.networkId !== null
        ? String(object.networkId)
        : "";
    message.masterSpec =
      object.masterSpec !== undefined && object.masterSpec !== null
        ? MasterSpec.fromJSON(object.masterSpec)
        : undefined;
    message.ipAllocationPolicy =
      object.ipAllocationPolicy !== undefined &&
      object.ipAllocationPolicy !== null
        ? IPAllocationPolicy.fromJSON(object.ipAllocationPolicy)
        : undefined;
    message.gatewayIpv4Address =
      object.gatewayIpv4Address !== undefined &&
      object.gatewayIpv4Address !== null
        ? String(object.gatewayIpv4Address)
        : undefined;
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.nodeServiceAccountId =
      object.nodeServiceAccountId !== undefined &&
      object.nodeServiceAccountId !== null
        ? String(object.nodeServiceAccountId)
        : "";
    message.releaseChannel =
      object.releaseChannel !== undefined && object.releaseChannel !== null
        ? releaseChannelFromJSON(object.releaseChannel)
        : 0;
    message.networkPolicy =
      object.networkPolicy !== undefined && object.networkPolicy !== null
        ? NetworkPolicy.fromJSON(object.networkPolicy)
        : undefined;
    message.kmsProvider =
      object.kmsProvider !== undefined && object.kmsProvider !== null
        ? KMSProvider.fromJSON(object.kmsProvider)
        : undefined;
    message.cilium =
      object.cilium !== undefined && object.cilium !== null
        ? Cilium.fromJSON(object.cilium)
        : undefined;
    return message;
  },

  toJSON(message: CreateClusterRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.networkId !== undefined && (obj.networkId = message.networkId);
    message.masterSpec !== undefined &&
      (obj.masterSpec = message.masterSpec
        ? MasterSpec.toJSON(message.masterSpec)
        : undefined);
    message.ipAllocationPolicy !== undefined &&
      (obj.ipAllocationPolicy = message.ipAllocationPolicy
        ? IPAllocationPolicy.toJSON(message.ipAllocationPolicy)
        : undefined);
    message.gatewayIpv4Address !== undefined &&
      (obj.gatewayIpv4Address = message.gatewayIpv4Address);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.nodeServiceAccountId !== undefined &&
      (obj.nodeServiceAccountId = message.nodeServiceAccountId);
    message.releaseChannel !== undefined &&
      (obj.releaseChannel = releaseChannelToJSON(message.releaseChannel));
    message.networkPolicy !== undefined &&
      (obj.networkPolicy = message.networkPolicy
        ? NetworkPolicy.toJSON(message.networkPolicy)
        : undefined);
    message.kmsProvider !== undefined &&
      (obj.kmsProvider = message.kmsProvider
        ? KMSProvider.toJSON(message.kmsProvider)
        : undefined);
    message.cilium !== undefined &&
      (obj.cilium = message.cilium ? Cilium.toJSON(message.cilium) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateClusterRequest>, I>>(
    object: I
  ): CreateClusterRequest {
    const message = { ...baseCreateClusterRequest } as CreateClusterRequest;
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.networkId = object.networkId ?? "";
    message.masterSpec =
      object.masterSpec !== undefined && object.masterSpec !== null
        ? MasterSpec.fromPartial(object.masterSpec)
        : undefined;
    message.ipAllocationPolicy =
      object.ipAllocationPolicy !== undefined &&
      object.ipAllocationPolicy !== null
        ? IPAllocationPolicy.fromPartial(object.ipAllocationPolicy)
        : undefined;
    message.gatewayIpv4Address = object.gatewayIpv4Address ?? undefined;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.nodeServiceAccountId = object.nodeServiceAccountId ?? "";
    message.releaseChannel = object.releaseChannel ?? 0;
    message.networkPolicy =
      object.networkPolicy !== undefined && object.networkPolicy !== null
        ? NetworkPolicy.fromPartial(object.networkPolicy)
        : undefined;
    message.kmsProvider =
      object.kmsProvider !== undefined && object.kmsProvider !== null
        ? KMSProvider.fromPartial(object.kmsProvider)
        : undefined;
    message.cilium =
      object.cilium !== undefined && object.cilium !== null
        ? Cilium.fromPartial(object.cilium)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateClusterRequest.$type, CreateClusterRequest);

const baseCreateClusterRequest_LabelsEntry: object = {
  $type: "yandex.cloud.k8s.v1.CreateClusterRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateClusterRequest_LabelsEntry = {
  $type: "yandex.cloud.k8s.v1.CreateClusterRequest.LabelsEntry" as const,

  encode(
    message: CreateClusterRequest_LabelsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateClusterRequest_LabelsEntry {
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
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateClusterRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateClusterRequest_LabelsEntry>, I>
  >(object: I): CreateClusterRequest_LabelsEntry {
    const message = {
      ...baseCreateClusterRequest_LabelsEntry,
    } as CreateClusterRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateClusterRequest_LabelsEntry.$type,
  CreateClusterRequest_LabelsEntry
);

const baseCreateClusterMetadata: object = {
  $type: "yandex.cloud.k8s.v1.CreateClusterMetadata",
  clusterId: "",
};

export const CreateClusterMetadata = {
  $type: "yandex.cloud.k8s.v1.CreateClusterMetadata" as const,

  encode(
    message: CreateClusterMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateClusterMetadata {
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
        : "";
    return message;
  },

  toJSON(message: CreateClusterMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateClusterMetadata>, I>>(
    object: I
  ): CreateClusterMetadata {
    const message = { ...baseCreateClusterMetadata } as CreateClusterMetadata;
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateClusterMetadata.$type, CreateClusterMetadata);

const baseAutoUpgradeMasterMetadata: object = {
  $type: "yandex.cloud.k8s.v1.AutoUpgradeMasterMetadata",
  clusterId: "",
};

export const AutoUpgradeMasterMetadata = {
  $type: "yandex.cloud.k8s.v1.AutoUpgradeMasterMetadata" as const,

  encode(
    message: AutoUpgradeMasterMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AutoUpgradeMasterMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAutoUpgradeMasterMetadata,
    } as AutoUpgradeMasterMetadata;
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

  fromJSON(object: any): AutoUpgradeMasterMetadata {
    const message = {
      ...baseAutoUpgradeMasterMetadata,
    } as AutoUpgradeMasterMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    return message;
  },

  toJSON(message: AutoUpgradeMasterMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AutoUpgradeMasterMetadata>, I>>(
    object: I
  ): AutoUpgradeMasterMetadata {
    const message = {
      ...baseAutoUpgradeMasterMetadata,
    } as AutoUpgradeMasterMetadata;
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  AutoUpgradeMasterMetadata.$type,
  AutoUpgradeMasterMetadata
);

const baseListClusterOperationsRequest: object = {
  $type: "yandex.cloud.k8s.v1.ListClusterOperationsRequest",
  clusterId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListClusterOperationsRequest = {
  $type: "yandex.cloud.k8s.v1.ListClusterOperationsRequest" as const,

  encode(
    message: ListClusterOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(34).string(message.filter);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListClusterOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListClusterOperationsRequest,
    } as ListClusterOperationsRequest;
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

  fromJSON(object: any): ListClusterOperationsRequest {
    const message = {
      ...baseListClusterOperationsRequest,
    } as ListClusterOperationsRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    message.filter =
      object.filter !== undefined && object.filter !== null
        ? String(object.filter)
        : "";
    return message;
  },

  toJSON(message: ListClusterOperationsRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListClusterOperationsRequest>, I>>(
    object: I
  ): ListClusterOperationsRequest {
    const message = {
      ...baseListClusterOperationsRequest,
    } as ListClusterOperationsRequest;
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListClusterOperationsRequest.$type,
  ListClusterOperationsRequest
);

const baseListClusterOperationsResponse: object = {
  $type: "yandex.cloud.k8s.v1.ListClusterOperationsResponse",
  nextPageToken: "",
};

export const ListClusterOperationsResponse = {
  $type: "yandex.cloud.k8s.v1.ListClusterOperationsResponse" as const,

  encode(
    message: ListClusterOperationsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListClusterOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListClusterOperationsResponse,
    } as ListClusterOperationsResponse;
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
    const message = {
      ...baseListClusterOperationsResponse,
    } as ListClusterOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListClusterOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations) {
      obj.operations = message.operations.map((e) =>
        e ? Operation.toJSON(e) : undefined
      );
    } else {
      obj.operations = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListClusterOperationsResponse>, I>>(
    object: I
  ): ListClusterOperationsResponse {
    const message = {
      ...baseListClusterOperationsResponse,
    } as ListClusterOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListClusterOperationsResponse.$type,
  ListClusterOperationsResponse
);

const baseListClusterNodeGroupsRequest: object = {
  $type: "yandex.cloud.k8s.v1.ListClusterNodeGroupsRequest",
  clusterId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListClusterNodeGroupsRequest = {
  $type: "yandex.cloud.k8s.v1.ListClusterNodeGroupsRequest" as const,

  encode(
    message: ListClusterNodeGroupsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(34).string(message.filter);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListClusterNodeGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListClusterNodeGroupsRequest,
    } as ListClusterNodeGroupsRequest;
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

  fromJSON(object: any): ListClusterNodeGroupsRequest {
    const message = {
      ...baseListClusterNodeGroupsRequest,
    } as ListClusterNodeGroupsRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    message.filter =
      object.filter !== undefined && object.filter !== null
        ? String(object.filter)
        : "";
    return message;
  },

  toJSON(message: ListClusterNodeGroupsRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListClusterNodeGroupsRequest>, I>>(
    object: I
  ): ListClusterNodeGroupsRequest {
    const message = {
      ...baseListClusterNodeGroupsRequest,
    } as ListClusterNodeGroupsRequest;
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListClusterNodeGroupsRequest.$type,
  ListClusterNodeGroupsRequest
);

const baseListClusterNodeGroupsResponse: object = {
  $type: "yandex.cloud.k8s.v1.ListClusterNodeGroupsResponse",
  nextPageToken: "",
};

export const ListClusterNodeGroupsResponse = {
  $type: "yandex.cloud.k8s.v1.ListClusterNodeGroupsResponse" as const,

  encode(
    message: ListClusterNodeGroupsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.nodeGroups) {
      NodeGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListClusterNodeGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListClusterNodeGroupsResponse,
    } as ListClusterNodeGroupsResponse;
    message.nodeGroups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeGroups.push(NodeGroup.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListClusterNodeGroupsResponse {
    const message = {
      ...baseListClusterNodeGroupsResponse,
    } as ListClusterNodeGroupsResponse;
    message.nodeGroups = (object.nodeGroups ?? []).map((e: any) =>
      NodeGroup.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListClusterNodeGroupsResponse): unknown {
    const obj: any = {};
    if (message.nodeGroups) {
      obj.nodeGroups = message.nodeGroups.map((e) =>
        e ? NodeGroup.toJSON(e) : undefined
      );
    } else {
      obj.nodeGroups = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListClusterNodeGroupsResponse>, I>>(
    object: I
  ): ListClusterNodeGroupsResponse {
    const message = {
      ...baseListClusterNodeGroupsResponse,
    } as ListClusterNodeGroupsResponse;
    message.nodeGroups =
      object.nodeGroups?.map((e) => NodeGroup.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListClusterNodeGroupsResponse.$type,
  ListClusterNodeGroupsResponse
);

const baseListClusterNodesRequest: object = {
  $type: "yandex.cloud.k8s.v1.ListClusterNodesRequest",
  clusterId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListClusterNodesRequest = {
  $type: "yandex.cloud.k8s.v1.ListClusterNodesRequest" as const,

  encode(
    message: ListClusterNodesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListClusterNodesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListClusterNodesRequest,
    } as ListClusterNodesRequest;
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

  fromJSON(object: any): ListClusterNodesRequest {
    const message = {
      ...baseListClusterNodesRequest,
    } as ListClusterNodesRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    return message;
  },

  toJSON(message: ListClusterNodesRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListClusterNodesRequest>, I>>(
    object: I
  ): ListClusterNodesRequest {
    const message = {
      ...baseListClusterNodesRequest,
    } as ListClusterNodesRequest;
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListClusterNodesRequest.$type, ListClusterNodesRequest);

const baseListClusterNodesResponse: object = {
  $type: "yandex.cloud.k8s.v1.ListClusterNodesResponse",
  nextPageToken: "",
};

export const ListClusterNodesResponse = {
  $type: "yandex.cloud.k8s.v1.ListClusterNodesResponse" as const,

  encode(
    message: ListClusterNodesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.nodes) {
      Node.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListClusterNodesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListClusterNodesResponse,
    } as ListClusterNodesResponse;
    message.nodes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodes.push(Node.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListClusterNodesResponse {
    const message = {
      ...baseListClusterNodesResponse,
    } as ListClusterNodesResponse;
    message.nodes = (object.nodes ?? []).map((e: any) => Node.fromJSON(e));
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListClusterNodesResponse): unknown {
    const obj: any = {};
    if (message.nodes) {
      obj.nodes = message.nodes.map((e) => (e ? Node.toJSON(e) : undefined));
    } else {
      obj.nodes = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListClusterNodesResponse>, I>>(
    object: I
  ): ListClusterNodesResponse {
    const message = {
      ...baseListClusterNodesResponse,
    } as ListClusterNodesResponse;
    message.nodes = object.nodes?.map((e) => Node.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListClusterNodesResponse.$type,
  ListClusterNodesResponse
);

const baseMasterSpec: object = {
  $type: "yandex.cloud.k8s.v1.MasterSpec",
  etcdClusterSize: 0,
  version: "",
  securityGroupIds: "",
};

export const MasterSpec = {
  $type: "yandex.cloud.k8s.v1.MasterSpec" as const,

  encode(
    message: MasterSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.zonalMasterSpec !== undefined) {
      ZonalMasterSpec.encode(
        message.zonalMasterSpec,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.regionalMasterSpec !== undefined) {
      RegionalMasterSpec.encode(
        message.regionalMasterSpec,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.locations) {
      LocationSpec.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.etcdClusterSize !== 0) {
      writer.uint32(72).int64(message.etcdClusterSize);
    }
    if (message.externalV4AddressSpec !== undefined) {
      ExternalAddressSpec.encode(
        message.externalV4AddressSpec,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.externalV6AddressSpec !== undefined) {
      ExternalAddressSpec.encode(
        message.externalV6AddressSpec,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    if (message.maintenancePolicy !== undefined) {
      MasterMaintenancePolicy.encode(
        message.maintenancePolicy,
        writer.uint32(34).fork()
      ).ldelim();
    }
    for (const v of message.securityGroupIds) {
      writer.uint32(50).string(v!);
    }
    if (message.masterLogging !== undefined) {
      MasterLogging.encode(
        message.masterLogging,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MasterSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMasterSpec } as MasterSpec;
    message.locations = [];
    message.securityGroupIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.zonalMasterSpec = ZonalMasterSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.regionalMasterSpec = RegionalMasterSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.locations.push(LocationSpec.decode(reader, reader.uint32()));
          break;
        case 9:
          message.etcdClusterSize = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.externalV4AddressSpec = ExternalAddressSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.externalV6AddressSpec = ExternalAddressSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.version = reader.string();
          break;
        case 4:
          message.maintenancePolicy = MasterMaintenancePolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.securityGroupIds.push(reader.string());
          break;
        case 7:
          message.masterLogging = MasterLogging.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MasterSpec {
    const message = { ...baseMasterSpec } as MasterSpec;
    message.zonalMasterSpec =
      object.zonalMasterSpec !== undefined && object.zonalMasterSpec !== null
        ? ZonalMasterSpec.fromJSON(object.zonalMasterSpec)
        : undefined;
    message.regionalMasterSpec =
      object.regionalMasterSpec !== undefined &&
      object.regionalMasterSpec !== null
        ? RegionalMasterSpec.fromJSON(object.regionalMasterSpec)
        : undefined;
    message.locations = (object.locations ?? []).map((e: any) =>
      LocationSpec.fromJSON(e)
    );
    message.etcdClusterSize =
      object.etcdClusterSize !== undefined && object.etcdClusterSize !== null
        ? Number(object.etcdClusterSize)
        : 0;
    message.externalV4AddressSpec =
      object.externalV4AddressSpec !== undefined &&
      object.externalV4AddressSpec !== null
        ? ExternalAddressSpec.fromJSON(object.externalV4AddressSpec)
        : undefined;
    message.externalV6AddressSpec =
      object.externalV6AddressSpec !== undefined &&
      object.externalV6AddressSpec !== null
        ? ExternalAddressSpec.fromJSON(object.externalV6AddressSpec)
        : undefined;
    message.version =
      object.version !== undefined && object.version !== null
        ? String(object.version)
        : "";
    message.maintenancePolicy =
      object.maintenancePolicy !== undefined &&
      object.maintenancePolicy !== null
        ? MasterMaintenancePolicy.fromJSON(object.maintenancePolicy)
        : undefined;
    message.securityGroupIds = (object.securityGroupIds ?? []).map((e: any) =>
      String(e)
    );
    message.masterLogging =
      object.masterLogging !== undefined && object.masterLogging !== null
        ? MasterLogging.fromJSON(object.masterLogging)
        : undefined;
    return message;
  },

  toJSON(message: MasterSpec): unknown {
    const obj: any = {};
    message.zonalMasterSpec !== undefined &&
      (obj.zonalMasterSpec = message.zonalMasterSpec
        ? ZonalMasterSpec.toJSON(message.zonalMasterSpec)
        : undefined);
    message.regionalMasterSpec !== undefined &&
      (obj.regionalMasterSpec = message.regionalMasterSpec
        ? RegionalMasterSpec.toJSON(message.regionalMasterSpec)
        : undefined);
    if (message.locations) {
      obj.locations = message.locations.map((e) =>
        e ? LocationSpec.toJSON(e) : undefined
      );
    } else {
      obj.locations = [];
    }
    message.etcdClusterSize !== undefined &&
      (obj.etcdClusterSize = Math.round(message.etcdClusterSize));
    message.externalV4AddressSpec !== undefined &&
      (obj.externalV4AddressSpec = message.externalV4AddressSpec
        ? ExternalAddressSpec.toJSON(message.externalV4AddressSpec)
        : undefined);
    message.externalV6AddressSpec !== undefined &&
      (obj.externalV6AddressSpec = message.externalV6AddressSpec
        ? ExternalAddressSpec.toJSON(message.externalV6AddressSpec)
        : undefined);
    message.version !== undefined && (obj.version = message.version);
    message.maintenancePolicy !== undefined &&
      (obj.maintenancePolicy = message.maintenancePolicy
        ? MasterMaintenancePolicy.toJSON(message.maintenancePolicy)
        : undefined);
    if (message.securityGroupIds) {
      obj.securityGroupIds = message.securityGroupIds.map((e) => e);
    } else {
      obj.securityGroupIds = [];
    }
    message.masterLogging !== undefined &&
      (obj.masterLogging = message.masterLogging
        ? MasterLogging.toJSON(message.masterLogging)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MasterSpec>, I>>(
    object: I
  ): MasterSpec {
    const message = { ...baseMasterSpec } as MasterSpec;
    message.zonalMasterSpec =
      object.zonalMasterSpec !== undefined && object.zonalMasterSpec !== null
        ? ZonalMasterSpec.fromPartial(object.zonalMasterSpec)
        : undefined;
    message.regionalMasterSpec =
      object.regionalMasterSpec !== undefined &&
      object.regionalMasterSpec !== null
        ? RegionalMasterSpec.fromPartial(object.regionalMasterSpec)
        : undefined;
    message.locations =
      object.locations?.map((e) => LocationSpec.fromPartial(e)) || [];
    message.etcdClusterSize = object.etcdClusterSize ?? 0;
    message.externalV4AddressSpec =
      object.externalV4AddressSpec !== undefined &&
      object.externalV4AddressSpec !== null
        ? ExternalAddressSpec.fromPartial(object.externalV4AddressSpec)
        : undefined;
    message.externalV6AddressSpec =
      object.externalV6AddressSpec !== undefined &&
      object.externalV6AddressSpec !== null
        ? ExternalAddressSpec.fromPartial(object.externalV6AddressSpec)
        : undefined;
    message.version = object.version ?? "";
    message.maintenancePolicy =
      object.maintenancePolicy !== undefined &&
      object.maintenancePolicy !== null
        ? MasterMaintenancePolicy.fromPartial(object.maintenancePolicy)
        : undefined;
    message.securityGroupIds = object.securityGroupIds?.map((e) => e) || [];
    message.masterLogging =
      object.masterLogging !== undefined && object.masterLogging !== null
        ? MasterLogging.fromPartial(object.masterLogging)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MasterSpec.$type, MasterSpec);

const baseZonalMasterSpec: object = {
  $type: "yandex.cloud.k8s.v1.ZonalMasterSpec",
  zoneId: "",
};

export const ZonalMasterSpec = {
  $type: "yandex.cloud.k8s.v1.ZonalMasterSpec" as const,

  encode(
    message: ZonalMasterSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }
    if (message.internalV4AddressSpec !== undefined) {
      InternalAddressSpec.encode(
        message.internalV4AddressSpec,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.externalV4AddressSpec !== undefined) {
      ExternalAddressSpec.encode(
        message.externalV4AddressSpec,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ZonalMasterSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseZonalMasterSpec } as ZonalMasterSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;
        case 2:
          message.internalV4AddressSpec = InternalAddressSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.externalV4AddressSpec = ExternalAddressSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ZonalMasterSpec {
    const message = { ...baseZonalMasterSpec } as ZonalMasterSpec;
    message.zoneId =
      object.zoneId !== undefined && object.zoneId !== null
        ? String(object.zoneId)
        : "";
    message.internalV4AddressSpec =
      object.internalV4AddressSpec !== undefined &&
      object.internalV4AddressSpec !== null
        ? InternalAddressSpec.fromJSON(object.internalV4AddressSpec)
        : undefined;
    message.externalV4AddressSpec =
      object.externalV4AddressSpec !== undefined &&
      object.externalV4AddressSpec !== null
        ? ExternalAddressSpec.fromJSON(object.externalV4AddressSpec)
        : undefined;
    return message;
  },

  toJSON(message: ZonalMasterSpec): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.internalV4AddressSpec !== undefined &&
      (obj.internalV4AddressSpec = message.internalV4AddressSpec
        ? InternalAddressSpec.toJSON(message.internalV4AddressSpec)
        : undefined);
    message.externalV4AddressSpec !== undefined &&
      (obj.externalV4AddressSpec = message.externalV4AddressSpec
        ? ExternalAddressSpec.toJSON(message.externalV4AddressSpec)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ZonalMasterSpec>, I>>(
    object: I
  ): ZonalMasterSpec {
    const message = { ...baseZonalMasterSpec } as ZonalMasterSpec;
    message.zoneId = object.zoneId ?? "";
    message.internalV4AddressSpec =
      object.internalV4AddressSpec !== undefined &&
      object.internalV4AddressSpec !== null
        ? InternalAddressSpec.fromPartial(object.internalV4AddressSpec)
        : undefined;
    message.externalV4AddressSpec =
      object.externalV4AddressSpec !== undefined &&
      object.externalV4AddressSpec !== null
        ? ExternalAddressSpec.fromPartial(object.externalV4AddressSpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ZonalMasterSpec.$type, ZonalMasterSpec);

const baseRegionalMasterSpec: object = {
  $type: "yandex.cloud.k8s.v1.RegionalMasterSpec",
  regionId: "",
};

export const RegionalMasterSpec = {
  $type: "yandex.cloud.k8s.v1.RegionalMasterSpec" as const,

  encode(
    message: RegionalMasterSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.regionId !== "") {
      writer.uint32(10).string(message.regionId);
    }
    for (const v of message.locations) {
      MasterLocation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.externalV4AddressSpec !== undefined) {
      ExternalAddressSpec.encode(
        message.externalV4AddressSpec,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.externalV6AddressSpec !== undefined) {
      ExternalAddressSpec.encode(
        message.externalV6AddressSpec,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegionalMasterSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRegionalMasterSpec } as RegionalMasterSpec;
    message.locations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.regionId = reader.string();
          break;
        case 2:
          message.locations.push(
            MasterLocation.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.externalV4AddressSpec = ExternalAddressSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.externalV6AddressSpec = ExternalAddressSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegionalMasterSpec {
    const message = { ...baseRegionalMasterSpec } as RegionalMasterSpec;
    message.regionId =
      object.regionId !== undefined && object.regionId !== null
        ? String(object.regionId)
        : "";
    message.locations = (object.locations ?? []).map((e: any) =>
      MasterLocation.fromJSON(e)
    );
    message.externalV4AddressSpec =
      object.externalV4AddressSpec !== undefined &&
      object.externalV4AddressSpec !== null
        ? ExternalAddressSpec.fromJSON(object.externalV4AddressSpec)
        : undefined;
    message.externalV6AddressSpec =
      object.externalV6AddressSpec !== undefined &&
      object.externalV6AddressSpec !== null
        ? ExternalAddressSpec.fromJSON(object.externalV6AddressSpec)
        : undefined;
    return message;
  },

  toJSON(message: RegionalMasterSpec): unknown {
    const obj: any = {};
    message.regionId !== undefined && (obj.regionId = message.regionId);
    if (message.locations) {
      obj.locations = message.locations.map((e) =>
        e ? MasterLocation.toJSON(e) : undefined
      );
    } else {
      obj.locations = [];
    }
    message.externalV4AddressSpec !== undefined &&
      (obj.externalV4AddressSpec = message.externalV4AddressSpec
        ? ExternalAddressSpec.toJSON(message.externalV4AddressSpec)
        : undefined);
    message.externalV6AddressSpec !== undefined &&
      (obj.externalV6AddressSpec = message.externalV6AddressSpec
        ? ExternalAddressSpec.toJSON(message.externalV6AddressSpec)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegionalMasterSpec>, I>>(
    object: I
  ): RegionalMasterSpec {
    const message = { ...baseRegionalMasterSpec } as RegionalMasterSpec;
    message.regionId = object.regionId ?? "";
    message.locations =
      object.locations?.map((e) => MasterLocation.fromPartial(e)) || [];
    message.externalV4AddressSpec =
      object.externalV4AddressSpec !== undefined &&
      object.externalV4AddressSpec !== null
        ? ExternalAddressSpec.fromPartial(object.externalV4AddressSpec)
        : undefined;
    message.externalV6AddressSpec =
      object.externalV6AddressSpec !== undefined &&
      object.externalV6AddressSpec !== null
        ? ExternalAddressSpec.fromPartial(object.externalV6AddressSpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(RegionalMasterSpec.$type, RegionalMasterSpec);

const baseInternalAddressSpec: object = {
  $type: "yandex.cloud.k8s.v1.InternalAddressSpec",
  subnetId: "",
};

export const InternalAddressSpec = {
  $type: "yandex.cloud.k8s.v1.InternalAddressSpec" as const,

  encode(
    message: InternalAddressSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(18).string(message.subnetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InternalAddressSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInternalAddressSpec } as InternalAddressSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.subnetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InternalAddressSpec {
    const message = { ...baseInternalAddressSpec } as InternalAddressSpec;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    return message;
  },

  toJSON(message: InternalAddressSpec): unknown {
    const obj: any = {};
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InternalAddressSpec>, I>>(
    object: I
  ): InternalAddressSpec {
    const message = { ...baseInternalAddressSpec } as InternalAddressSpec;
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(InternalAddressSpec.$type, InternalAddressSpec);

const baseExternalAddressSpec: object = {
  $type: "yandex.cloud.k8s.v1.ExternalAddressSpec",
  address: "",
};

export const ExternalAddressSpec = {
  $type: "yandex.cloud.k8s.v1.ExternalAddressSpec" as const,

  encode(
    message: ExternalAddressSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExternalAddressSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExternalAddressSpec } as ExternalAddressSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExternalAddressSpec {
    const message = { ...baseExternalAddressSpec } as ExternalAddressSpec;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: ExternalAddressSpec): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExternalAddressSpec>, I>>(
    object: I
  ): ExternalAddressSpec {
    const message = { ...baseExternalAddressSpec } as ExternalAddressSpec;
    message.address = object.address ?? "";
    return message;
  },
};

messageTypeRegistry.set(ExternalAddressSpec.$type, ExternalAddressSpec);

const baseMasterLocation: object = {
  $type: "yandex.cloud.k8s.v1.MasterLocation",
  zoneId: "",
};

export const MasterLocation = {
  $type: "yandex.cloud.k8s.v1.MasterLocation" as const,

  encode(
    message: MasterLocation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }
    if (message.internalV4AddressSpec !== undefined) {
      InternalAddressSpec.encode(
        message.internalV4AddressSpec,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MasterLocation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMasterLocation } as MasterLocation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;
        case 2:
          message.internalV4AddressSpec = InternalAddressSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MasterLocation {
    const message = { ...baseMasterLocation } as MasterLocation;
    message.zoneId =
      object.zoneId !== undefined && object.zoneId !== null
        ? String(object.zoneId)
        : "";
    message.internalV4AddressSpec =
      object.internalV4AddressSpec !== undefined &&
      object.internalV4AddressSpec !== null
        ? InternalAddressSpec.fromJSON(object.internalV4AddressSpec)
        : undefined;
    return message;
  },

  toJSON(message: MasterLocation): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.internalV4AddressSpec !== undefined &&
      (obj.internalV4AddressSpec = message.internalV4AddressSpec
        ? InternalAddressSpec.toJSON(message.internalV4AddressSpec)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MasterLocation>, I>>(
    object: I
  ): MasterLocation {
    const message = { ...baseMasterLocation } as MasterLocation;
    message.zoneId = object.zoneId ?? "";
    message.internalV4AddressSpec =
      object.internalV4AddressSpec !== undefined &&
      object.internalV4AddressSpec !== null
        ? InternalAddressSpec.fromPartial(object.internalV4AddressSpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MasterLocation.$type, MasterLocation);

const baseLocationSpec: object = {
  $type: "yandex.cloud.k8s.v1.LocationSpec",
  zoneId: "",
  subnetId: "",
};

export const LocationSpec = {
  $type: "yandex.cloud.k8s.v1.LocationSpec" as const,

  encode(
    message: LocationSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }
    if (message.subnetId !== "") {
      writer.uint32(18).string(message.subnetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LocationSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLocationSpec } as LocationSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;
        case 2:
          message.subnetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LocationSpec {
    const message = { ...baseLocationSpec } as LocationSpec;
    message.zoneId =
      object.zoneId !== undefined && object.zoneId !== null
        ? String(object.zoneId)
        : "";
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    return message;
  },

  toJSON(message: LocationSpec): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LocationSpec>, I>>(
    object: I
  ): LocationSpec {
    const message = { ...baseLocationSpec } as LocationSpec;
    message.zoneId = object.zoneId ?? "";
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(LocationSpec.$type, LocationSpec);

/** A set of methods for managing Kubernetes cluster. */
export const ClusterServiceService = {
  /**
   * Returns the specified Kubernetes cluster.
   *
   * To get the list of available Kubernetes cluster, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.k8s.v1.ClusterService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetClusterRequest) =>
      Buffer.from(GetClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetClusterRequest.decode(value),
    responseSerialize: (value: Cluster) =>
      Buffer.from(Cluster.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Cluster.decode(value),
  },
  /** Retrieves the list of Kubernetes cluster in the specified folder. */
  list: {
    path: "/yandex.cloud.k8s.v1.ClusterService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClustersRequest) =>
      Buffer.from(ListClustersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListClustersRequest.decode(value),
    responseSerialize: (value: ListClustersResponse) =>
      Buffer.from(ListClustersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListClustersResponse.decode(value),
  },
  /** Creates a Kubernetes cluster in the specified folder. */
  create: {
    path: "/yandex.cloud.k8s.v1.ClusterService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateClusterRequest) =>
      Buffer.from(CreateClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified Kubernetes cluster. */
  update: {
    path: "/yandex.cloud.k8s.v1.ClusterService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateClusterRequest) =>
      Buffer.from(UpdateClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified Kubernetes cluster. */
  delete: {
    path: "/yandex.cloud.k8s.v1.ClusterService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteClusterRequest) =>
      Buffer.from(DeleteClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Stops the specified Kubernetes cluster. */
  stop: {
    path: "/yandex.cloud.k8s.v1.ClusterService/Stop",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StopClusterRequest) =>
      Buffer.from(StopClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StopClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Starts the specified Kubernetes cluster. */
  start: {
    path: "/yandex.cloud.k8s.v1.ClusterService/Start",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StartClusterRequest) =>
      Buffer.from(StartClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StartClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists nodegroup for the specified Kubernetes cluster. */
  listNodeGroups: {
    path: "/yandex.cloud.k8s.v1.ClusterService/ListNodeGroups",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterNodeGroupsRequest) =>
      Buffer.from(ListClusterNodeGroupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListClusterNodeGroupsRequest.decode(value),
    responseSerialize: (value: ListClusterNodeGroupsResponse) =>
      Buffer.from(ListClusterNodeGroupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListClusterNodeGroupsResponse.decode(value),
  },
  /** Lists operations for the specified Kubernetes cluster. */
  listOperations: {
    path: "/yandex.cloud.k8s.v1.ClusterService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterOperationsRequest) =>
      Buffer.from(ListClusterOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListClusterOperationsRequest.decode(value),
    responseSerialize: (value: ListClusterOperationsResponse) =>
      Buffer.from(ListClusterOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListClusterOperationsResponse.decode(value),
  },
  /** Lists cluster's nodes. */
  listNodes: {
    path: "/yandex.cloud.k8s.v1.ClusterService/ListNodes",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListClusterNodesRequest) =>
      Buffer.from(ListClusterNodesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListClusterNodesRequest.decode(value),
    responseSerialize: (value: ListClusterNodesResponse) =>
      Buffer.from(ListClusterNodesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListClusterNodesResponse.decode(value),
  },
} as const;

export interface ClusterServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified Kubernetes cluster.
   *
   * To get the list of available Kubernetes cluster, make a [List] request.
   */
  get: handleUnaryCall<GetClusterRequest, Cluster>;
  /** Retrieves the list of Kubernetes cluster in the specified folder. */
  list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
  /** Creates a Kubernetes cluster in the specified folder. */
  create: handleUnaryCall<CreateClusterRequest, Operation>;
  /** Updates the specified Kubernetes cluster. */
  update: handleUnaryCall<UpdateClusterRequest, Operation>;
  /** Deletes the specified Kubernetes cluster. */
  delete: handleUnaryCall<DeleteClusterRequest, Operation>;
  /** Stops the specified Kubernetes cluster. */
  stop: handleUnaryCall<StopClusterRequest, Operation>;
  /** Starts the specified Kubernetes cluster. */
  start: handleUnaryCall<StartClusterRequest, Operation>;
  /** Lists nodegroup for the specified Kubernetes cluster. */
  listNodeGroups: handleUnaryCall<
    ListClusterNodeGroupsRequest,
    ListClusterNodeGroupsResponse
  >;
  /** Lists operations for the specified Kubernetes cluster. */
  listOperations: handleUnaryCall<
    ListClusterOperationsRequest,
    ListClusterOperationsResponse
  >;
  /** Lists cluster's nodes. */
  listNodes: handleUnaryCall<ListClusterNodesRequest, ListClusterNodesResponse>;
}

export interface ClusterServiceClient extends Client {
  /**
   * Returns the specified Kubernetes cluster.
   *
   * To get the list of available Kubernetes cluster, make a [List] request.
   */
  get(
    request: GetClusterRequest,
    callback: (error: ServiceError | null, response: Cluster) => void
  ): ClientUnaryCall;
  get(
    request: GetClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Cluster) => void
  ): ClientUnaryCall;
  get(
    request: GetClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Cluster) => void
  ): ClientUnaryCall;
  /** Retrieves the list of Kubernetes cluster in the specified folder. */
  list(
    request: ListClustersRequest,
    callback: (
      error: ServiceError | null,
      response: ListClustersResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListClustersRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListClustersResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListClustersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListClustersResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates a Kubernetes cluster in the specified folder. */
  create(
    request: CreateClusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified Kubernetes cluster. */
  update(
    request: UpdateClusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified Kubernetes cluster. */
  delete(
    request: DeleteClusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Stops the specified Kubernetes cluster. */
  stop(
    request: StopClusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  stop(
    request: StopClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  stop(
    request: StopClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Starts the specified Kubernetes cluster. */
  start(
    request: StartClusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  start(
    request: StartClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  start(
    request: StartClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists nodegroup for the specified Kubernetes cluster. */
  listNodeGroups(
    request: ListClusterNodeGroupsRequest,
    callback: (
      error: ServiceError | null,
      response: ListClusterNodeGroupsResponse
    ) => void
  ): ClientUnaryCall;
  listNodeGroups(
    request: ListClusterNodeGroupsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListClusterNodeGroupsResponse
    ) => void
  ): ClientUnaryCall;
  listNodeGroups(
    request: ListClusterNodeGroupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListClusterNodeGroupsResponse
    ) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified Kubernetes cluster. */
  listOperations(
    request: ListClusterOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListClusterOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListClusterOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListClusterOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListClusterOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListClusterOperationsResponse
    ) => void
  ): ClientUnaryCall;
  /** Lists cluster's nodes. */
  listNodes(
    request: ListClusterNodesRequest,
    callback: (
      error: ServiceError | null,
      response: ListClusterNodesResponse
    ) => void
  ): ClientUnaryCall;
  listNodes(
    request: ListClusterNodesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListClusterNodesResponse
    ) => void
  ): ClientUnaryCall;
  listNodes(
    request: ListClusterNodesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListClusterNodesResponse
    ) => void
  ): ClientUnaryCall;
}

export const ClusterServiceClient = makeGenericClientConstructor(
  ClusterServiceService,
  "yandex.cloud.k8s.v1.ClusterService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): ClusterServiceClient;
  service: typeof ClusterServiceService;
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P> | "$type">,
        never
      >;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
