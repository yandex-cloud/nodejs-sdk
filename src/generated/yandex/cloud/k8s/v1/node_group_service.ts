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
  NodeTemplate,
  Node,
  Taint,
} from "../../../../yandex/cloud/k8s/v1/node";
import {
  ScalePolicy,
  NodeGroupAllocationPolicy,
  DeployPolicy,
  NodeGroupMaintenancePolicy,
  NodeGroup,
} from "../../../../yandex/cloud/k8s/v1/node_group";
import { UpdateVersionSpec } from "../../../../yandex/cloud/k8s/v1/version";
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.k8s.v1";

export interface GetNodeGroupRequest {
  $type: "yandex.cloud.k8s.v1.GetNodeGroupRequest";
  /**
   * ID of the node group to return.
   * To get the node group ID use a [NodeGroupService.List] request.
   */
  nodeGroupId: string;
}

export interface ListNodeGroupsRequest {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupsRequest";
  /**
   * ID of the folder to list node groups in.
   * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListNodeGroupsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListNodeGroupsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [NodeGroup.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
}

export interface ListNodeGroupsResponse {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupsResponse";
  /** List of node groups. */
  nodeGroups: NodeGroup[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListNodeGroupsRequest.page_size], use
   * the `next_page_token` as the value
   * for the [ListNodeGroupsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListNodeGroupNodesRequest {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupNodesRequest";
  /**
   * ID of the node group to list.
   * To get the node group ID use a [NodeGroupService.List] request.
   */
  nodeGroupId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListNodeGroupsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListNodeGroupNodesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListNodeGroupNodesResponse {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupNodesResponse";
  /** List of nodes. */
  nodes: Node[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListNodeGroupNodesRequest.page_size], use
   * the `next_page_token` as the value
   * for the [ListNodeGroupNodesRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface DeleteNodeGroupRequest {
  $type: "yandex.cloud.k8s.v1.DeleteNodeGroupRequest";
  /**
   * ID of the node group to delete.
   * To get node group ID use a [NodeGroupService.List] request.
   */
  nodeGroupId: string;
}

export interface DeleteNodeGroupMetadata {
  $type: "yandex.cloud.k8s.v1.DeleteNodeGroupMetadata";
  /** ID of the node group that is being deleted. */
  nodeGroupId: string;
}

export interface UpdateNodeGroupRequest {
  $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest";
  /**
   * ID of the node group to update.
   * To get the node group ID use a [NodeGroupService.List] request.
   */
  nodeGroupId: string;
  /** Field mask that specifies which fields of the node group are going to be updated. */
  updateMask?: FieldMask;
  /**
   * Name of the node group.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the node group. */
  description: string;
  /**
   * Resource labels as `key:value` pairs.
   *
   * Existing set of `labels` is completely replaced by the provided set.
   */
  labels: { [key: string]: string };
  /**
   * Node template for the node group.
   * Change may trigger nodes rolling reboot or recreate.
   */
  nodeTemplate?: NodeTemplate;
  /** Scale policy of the node group. */
  scalePolicy?: ScalePolicy;
  /** Allocation policy of the node group by the zones and regions. */
  allocationPolicy?: NodeGroupAllocationPolicy;
  /**
   * Deploy policy according to which the updates are rolled out. If not specified,
   * the default is used.
   */
  deployPolicy?: DeployPolicy;
  /** Version of Kubernetes components that runs on the nodes. */
  version?: UpdateVersionSpec;
  /** Maintenance policy of the node group. */
  maintenancePolicy?: NodeGroupMaintenancePolicy;
  /** Support for unsafe sysctl parameters. For more details see [documentation](https://kubernetes.io/docs/tasks/administer-cluster/sysctl-cluster/). */
  allowedUnsafeSysctls: string[];
  /** Taints that are applied to the nodes of the node group at creation time. */
  nodeTaints: Taint[];
  /** Labels that are assigned to the nodes of the node group at creation time. */
  nodeLabels: { [key: string]: string };
}

export interface UpdateNodeGroupRequest_LabelsEntry {
  $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateNodeGroupRequest_NodeLabelsEntry {
  $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest.NodeLabelsEntry";
  key: string;
  value: string;
}

export interface UpdateNodeGroupMetadata {
  $type: "yandex.cloud.k8s.v1.UpdateNodeGroupMetadata";
  /** ID of the Node group that is being updated. */
  nodeGroupId: string;
}

export interface CreateNodeGroupRequest {
  $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest";
  /**
   * ID of the Kubernetes cluster to create a node group in.
   * To get the Kubernetes cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the node group.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the node group. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Node template for creating the node group. */
  nodeTemplate?: NodeTemplate;
  /** Scale policy of the node group. */
  scalePolicy?: ScalePolicy;
  /** Allocation policy of the node group by the zones and regions. */
  allocationPolicy?: NodeGroupAllocationPolicy;
  /**
   * Deploy policy according to which the updates are rolled out. If not specified,
   * the default is used.
   */
  deployPolicy?: DeployPolicy;
  /** Version of Kubernetes components that runs on the nodes. */
  version: string;
  /** Maintenance policy of the node group. */
  maintenancePolicy?: NodeGroupMaintenancePolicy;
  /** Support for unsafe sysctl parameters. For more details see [documentation](https://kubernetes.io/docs/tasks/administer-cluster/sysctl-cluster/). */
  allowedUnsafeSysctls: string[];
  /** Taints that are applied to the nodes of the node group at creation time. */
  nodeTaints: Taint[];
  /** Labels that are assigned to the nodes of the node group at creation time. */
  nodeLabels: { [key: string]: string };
}

export interface CreateNodeGroupRequest_LabelsEntry {
  $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateNodeGroupRequest_NodeLabelsEntry {
  $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest.NodeLabelsEntry";
  key: string;
  value: string;
}

export interface CreateNodeGroupMetadata {
  $type: "yandex.cloud.k8s.v1.CreateNodeGroupMetadata";
  /** ID of the node group that is being created. */
  nodeGroupId: string;
}

export interface AutoUpgradeNodeGroupMetadata {
  $type: "yandex.cloud.k8s.v1.AutoUpgradeNodeGroupMetadata";
  /** ID of the node group that is being auto upgraded. */
  nodeGroupId: string;
}

export interface ListNodeGroupOperationsRequest {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupOperationsRequest";
  /** ID of the node group to list operations for. */
  nodeGroupId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than [page_size], the service returns a [ListNodeGroupOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListNodeGroupOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * Currently you can use filtering only on [NodeGroup.name] field.
   */
  filter: string;
}

export interface ListNodeGroupOperationsResponse {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupOperationsResponse";
  /** List of operations for the specified node group. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListNodeGroupOperationsRequest.page_size], use the `next_page_token` as the value
   * for the [ListNodeGroupOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

const baseGetNodeGroupRequest: object = {
  $type: "yandex.cloud.k8s.v1.GetNodeGroupRequest",
  nodeGroupId: "",
};

export const GetNodeGroupRequest = {
  $type: "yandex.cloud.k8s.v1.GetNodeGroupRequest" as const,

  encode(
    message: GetNodeGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nodeGroupId !== "") {
      writer.uint32(10).string(message.nodeGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNodeGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetNodeGroupRequest } as GetNodeGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNodeGroupRequest {
    const message = { ...baseGetNodeGroupRequest } as GetNodeGroupRequest;
    message.nodeGroupId =
      object.nodeGroupId !== undefined && object.nodeGroupId !== null
        ? String(object.nodeGroupId)
        : "";
    return message;
  },

  toJSON(message: GetNodeGroupRequest): unknown {
    const obj: any = {};
    message.nodeGroupId !== undefined &&
      (obj.nodeGroupId = message.nodeGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetNodeGroupRequest>, I>>(
    object: I
  ): GetNodeGroupRequest {
    const message = { ...baseGetNodeGroupRequest } as GetNodeGroupRequest;
    message.nodeGroupId = object.nodeGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetNodeGroupRequest.$type, GetNodeGroupRequest);

const baseListNodeGroupsRequest: object = {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupsRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListNodeGroupsRequest = {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupsRequest" as const,

  encode(
    message: ListNodeGroupsRequest,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListNodeGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListNodeGroupsRequest } as ListNodeGroupsRequest;
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

  fromJSON(object: any): ListNodeGroupsRequest {
    const message = { ...baseListNodeGroupsRequest } as ListNodeGroupsRequest;
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

  toJSON(message: ListNodeGroupsRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListNodeGroupsRequest>, I>>(
    object: I
  ): ListNodeGroupsRequest {
    const message = { ...baseListNodeGroupsRequest } as ListNodeGroupsRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListNodeGroupsRequest.$type, ListNodeGroupsRequest);

const baseListNodeGroupsResponse: object = {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupsResponse",
  nextPageToken: "",
};

export const ListNodeGroupsResponse = {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupsResponse" as const,

  encode(
    message: ListNodeGroupsResponse,
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
  ): ListNodeGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListNodeGroupsResponse } as ListNodeGroupsResponse;
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

  fromJSON(object: any): ListNodeGroupsResponse {
    const message = { ...baseListNodeGroupsResponse } as ListNodeGroupsResponse;
    message.nodeGroups = (object.nodeGroups ?? []).map((e: any) =>
      NodeGroup.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListNodeGroupsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<ListNodeGroupsResponse>, I>>(
    object: I
  ): ListNodeGroupsResponse {
    const message = { ...baseListNodeGroupsResponse } as ListNodeGroupsResponse;
    message.nodeGroups =
      object.nodeGroups?.map((e) => NodeGroup.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListNodeGroupsResponse.$type, ListNodeGroupsResponse);

const baseListNodeGroupNodesRequest: object = {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupNodesRequest",
  nodeGroupId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListNodeGroupNodesRequest = {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupNodesRequest" as const,

  encode(
    message: ListNodeGroupNodesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nodeGroupId !== "") {
      writer.uint32(10).string(message.nodeGroupId);
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
  ): ListNodeGroupNodesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListNodeGroupNodesRequest,
    } as ListNodeGroupNodesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeGroupId = reader.string();
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

  fromJSON(object: any): ListNodeGroupNodesRequest {
    const message = {
      ...baseListNodeGroupNodesRequest,
    } as ListNodeGroupNodesRequest;
    message.nodeGroupId =
      object.nodeGroupId !== undefined && object.nodeGroupId !== null
        ? String(object.nodeGroupId)
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

  toJSON(message: ListNodeGroupNodesRequest): unknown {
    const obj: any = {};
    message.nodeGroupId !== undefined &&
      (obj.nodeGroupId = message.nodeGroupId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListNodeGroupNodesRequest>, I>>(
    object: I
  ): ListNodeGroupNodesRequest {
    const message = {
      ...baseListNodeGroupNodesRequest,
    } as ListNodeGroupNodesRequest;
    message.nodeGroupId = object.nodeGroupId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListNodeGroupNodesRequest.$type,
  ListNodeGroupNodesRequest
);

const baseListNodeGroupNodesResponse: object = {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupNodesResponse",
  nextPageToken: "",
};

export const ListNodeGroupNodesResponse = {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupNodesResponse" as const,

  encode(
    message: ListNodeGroupNodesResponse,
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
  ): ListNodeGroupNodesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListNodeGroupNodesResponse,
    } as ListNodeGroupNodesResponse;
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

  fromJSON(object: any): ListNodeGroupNodesResponse {
    const message = {
      ...baseListNodeGroupNodesResponse,
    } as ListNodeGroupNodesResponse;
    message.nodes = (object.nodes ?? []).map((e: any) => Node.fromJSON(e));
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListNodeGroupNodesResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<ListNodeGroupNodesResponse>, I>>(
    object: I
  ): ListNodeGroupNodesResponse {
    const message = {
      ...baseListNodeGroupNodesResponse,
    } as ListNodeGroupNodesResponse;
    message.nodes = object.nodes?.map((e) => Node.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListNodeGroupNodesResponse.$type,
  ListNodeGroupNodesResponse
);

const baseDeleteNodeGroupRequest: object = {
  $type: "yandex.cloud.k8s.v1.DeleteNodeGroupRequest",
  nodeGroupId: "",
};

export const DeleteNodeGroupRequest = {
  $type: "yandex.cloud.k8s.v1.DeleteNodeGroupRequest" as const,

  encode(
    message: DeleteNodeGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nodeGroupId !== "") {
      writer.uint32(10).string(message.nodeGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteNodeGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteNodeGroupRequest } as DeleteNodeGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteNodeGroupRequest {
    const message = { ...baseDeleteNodeGroupRequest } as DeleteNodeGroupRequest;
    message.nodeGroupId =
      object.nodeGroupId !== undefined && object.nodeGroupId !== null
        ? String(object.nodeGroupId)
        : "";
    return message;
  },

  toJSON(message: DeleteNodeGroupRequest): unknown {
    const obj: any = {};
    message.nodeGroupId !== undefined &&
      (obj.nodeGroupId = message.nodeGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteNodeGroupRequest>, I>>(
    object: I
  ): DeleteNodeGroupRequest {
    const message = { ...baseDeleteNodeGroupRequest } as DeleteNodeGroupRequest;
    message.nodeGroupId = object.nodeGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteNodeGroupRequest.$type, DeleteNodeGroupRequest);

const baseDeleteNodeGroupMetadata: object = {
  $type: "yandex.cloud.k8s.v1.DeleteNodeGroupMetadata",
  nodeGroupId: "",
};

export const DeleteNodeGroupMetadata = {
  $type: "yandex.cloud.k8s.v1.DeleteNodeGroupMetadata" as const,

  encode(
    message: DeleteNodeGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nodeGroupId !== "") {
      writer.uint32(10).string(message.nodeGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteNodeGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteNodeGroupMetadata,
    } as DeleteNodeGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteNodeGroupMetadata {
    const message = {
      ...baseDeleteNodeGroupMetadata,
    } as DeleteNodeGroupMetadata;
    message.nodeGroupId =
      object.nodeGroupId !== undefined && object.nodeGroupId !== null
        ? String(object.nodeGroupId)
        : "";
    return message;
  },

  toJSON(message: DeleteNodeGroupMetadata): unknown {
    const obj: any = {};
    message.nodeGroupId !== undefined &&
      (obj.nodeGroupId = message.nodeGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteNodeGroupMetadata>, I>>(
    object: I
  ): DeleteNodeGroupMetadata {
    const message = {
      ...baseDeleteNodeGroupMetadata,
    } as DeleteNodeGroupMetadata;
    message.nodeGroupId = object.nodeGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteNodeGroupMetadata.$type, DeleteNodeGroupMetadata);

const baseUpdateNodeGroupRequest: object = {
  $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest",
  nodeGroupId: "",
  name: "",
  description: "",
  allowedUnsafeSysctls: "",
};

export const UpdateNodeGroupRequest = {
  $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest" as const,

  encode(
    message: UpdateNodeGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nodeGroupId !== "") {
      writer.uint32(10).string(message.nodeGroupId);
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
      UpdateNodeGroupRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.nodeTemplate !== undefined) {
      NodeTemplate.encode(
        message.nodeTemplate,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.scalePolicy !== undefined) {
      ScalePolicy.encode(
        message.scalePolicy,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.allocationPolicy !== undefined) {
      NodeGroupAllocationPolicy.encode(
        message.allocationPolicy,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.deployPolicy !== undefined) {
      DeployPolicy.encode(
        message.deployPolicy,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.version !== undefined) {
      UpdateVersionSpec.encode(
        message.version,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.maintenancePolicy !== undefined) {
      NodeGroupMaintenancePolicy.encode(
        message.maintenancePolicy,
        writer.uint32(90).fork()
      ).ldelim();
    }
    for (const v of message.allowedUnsafeSysctls) {
      writer.uint32(98).string(v!);
    }
    for (const v of message.nodeTaints) {
      Taint.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    Object.entries(message.nodeLabels).forEach(([key, value]) => {
      UpdateNodeGroupRequest_NodeLabelsEntry.encode(
        {
          $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest.NodeLabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(114).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateNodeGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateNodeGroupRequest } as UpdateNodeGroupRequest;
    message.labels = {};
    message.allowedUnsafeSysctls = [];
    message.nodeTaints = [];
    message.nodeLabels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeGroupId = reader.string();
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
          const entry5 = UpdateNodeGroupRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        case 8:
          message.nodeTemplate = NodeTemplate.decode(reader, reader.uint32());
          break;
        case 6:
          message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
          break;
        case 9:
          message.allocationPolicy = NodeGroupAllocationPolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.deployPolicy = DeployPolicy.decode(reader, reader.uint32());
          break;
        case 10:
          message.version = UpdateVersionSpec.decode(reader, reader.uint32());
          break;
        case 11:
          message.maintenancePolicy = NodeGroupMaintenancePolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.allowedUnsafeSysctls.push(reader.string());
          break;
        case 13:
          message.nodeTaints.push(Taint.decode(reader, reader.uint32()));
          break;
        case 14:
          const entry14 = UpdateNodeGroupRequest_NodeLabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry14.value !== undefined) {
            message.nodeLabels[entry14.key] = entry14.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateNodeGroupRequest {
    const message = { ...baseUpdateNodeGroupRequest } as UpdateNodeGroupRequest;
    message.nodeGroupId =
      object.nodeGroupId !== undefined && object.nodeGroupId !== null
        ? String(object.nodeGroupId)
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
    message.nodeTemplate =
      object.nodeTemplate !== undefined && object.nodeTemplate !== null
        ? NodeTemplate.fromJSON(object.nodeTemplate)
        : undefined;
    message.scalePolicy =
      object.scalePolicy !== undefined && object.scalePolicy !== null
        ? ScalePolicy.fromJSON(object.scalePolicy)
        : undefined;
    message.allocationPolicy =
      object.allocationPolicy !== undefined && object.allocationPolicy !== null
        ? NodeGroupAllocationPolicy.fromJSON(object.allocationPolicy)
        : undefined;
    message.deployPolicy =
      object.deployPolicy !== undefined && object.deployPolicy !== null
        ? DeployPolicy.fromJSON(object.deployPolicy)
        : undefined;
    message.version =
      object.version !== undefined && object.version !== null
        ? UpdateVersionSpec.fromJSON(object.version)
        : undefined;
    message.maintenancePolicy =
      object.maintenancePolicy !== undefined &&
      object.maintenancePolicy !== null
        ? NodeGroupMaintenancePolicy.fromJSON(object.maintenancePolicy)
        : undefined;
    message.allowedUnsafeSysctls = (object.allowedUnsafeSysctls ?? []).map(
      (e: any) => String(e)
    );
    message.nodeTaints = (object.nodeTaints ?? []).map((e: any) =>
      Taint.fromJSON(e)
    );
    message.nodeLabels = Object.entries(object.nodeLabels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: UpdateNodeGroupRequest): unknown {
    const obj: any = {};
    message.nodeGroupId !== undefined &&
      (obj.nodeGroupId = message.nodeGroupId);
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
    message.nodeTemplate !== undefined &&
      (obj.nodeTemplate = message.nodeTemplate
        ? NodeTemplate.toJSON(message.nodeTemplate)
        : undefined);
    message.scalePolicy !== undefined &&
      (obj.scalePolicy = message.scalePolicy
        ? ScalePolicy.toJSON(message.scalePolicy)
        : undefined);
    message.allocationPolicy !== undefined &&
      (obj.allocationPolicy = message.allocationPolicy
        ? NodeGroupAllocationPolicy.toJSON(message.allocationPolicy)
        : undefined);
    message.deployPolicy !== undefined &&
      (obj.deployPolicy = message.deployPolicy
        ? DeployPolicy.toJSON(message.deployPolicy)
        : undefined);
    message.version !== undefined &&
      (obj.version = message.version
        ? UpdateVersionSpec.toJSON(message.version)
        : undefined);
    message.maintenancePolicy !== undefined &&
      (obj.maintenancePolicy = message.maintenancePolicy
        ? NodeGroupMaintenancePolicy.toJSON(message.maintenancePolicy)
        : undefined);
    if (message.allowedUnsafeSysctls) {
      obj.allowedUnsafeSysctls = message.allowedUnsafeSysctls.map((e) => e);
    } else {
      obj.allowedUnsafeSysctls = [];
    }
    if (message.nodeTaints) {
      obj.nodeTaints = message.nodeTaints.map((e) =>
        e ? Taint.toJSON(e) : undefined
      );
    } else {
      obj.nodeTaints = [];
    }
    obj.nodeLabels = {};
    if (message.nodeLabels) {
      Object.entries(message.nodeLabels).forEach(([k, v]) => {
        obj.nodeLabels[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateNodeGroupRequest>, I>>(
    object: I
  ): UpdateNodeGroupRequest {
    const message = { ...baseUpdateNodeGroupRequest } as UpdateNodeGroupRequest;
    message.nodeGroupId = object.nodeGroupId ?? "";
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
    message.nodeTemplate =
      object.nodeTemplate !== undefined && object.nodeTemplate !== null
        ? NodeTemplate.fromPartial(object.nodeTemplate)
        : undefined;
    message.scalePolicy =
      object.scalePolicy !== undefined && object.scalePolicy !== null
        ? ScalePolicy.fromPartial(object.scalePolicy)
        : undefined;
    message.allocationPolicy =
      object.allocationPolicy !== undefined && object.allocationPolicy !== null
        ? NodeGroupAllocationPolicy.fromPartial(object.allocationPolicy)
        : undefined;
    message.deployPolicy =
      object.deployPolicy !== undefined && object.deployPolicy !== null
        ? DeployPolicy.fromPartial(object.deployPolicy)
        : undefined;
    message.version =
      object.version !== undefined && object.version !== null
        ? UpdateVersionSpec.fromPartial(object.version)
        : undefined;
    message.maintenancePolicy =
      object.maintenancePolicy !== undefined &&
      object.maintenancePolicy !== null
        ? NodeGroupMaintenancePolicy.fromPartial(object.maintenancePolicy)
        : undefined;
    message.allowedUnsafeSysctls =
      object.allowedUnsafeSysctls?.map((e) => e) || [];
    message.nodeTaints =
      object.nodeTaints?.map((e) => Taint.fromPartial(e)) || [];
    message.nodeLabels = Object.entries(object.nodeLabels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(UpdateNodeGroupRequest.$type, UpdateNodeGroupRequest);

const baseUpdateNodeGroupRequest_LabelsEntry: object = {
  $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateNodeGroupRequest_LabelsEntry = {
  $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest.LabelsEntry" as const,

  encode(
    message: UpdateNodeGroupRequest_LabelsEntry,
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
  ): UpdateNodeGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateNodeGroupRequest_LabelsEntry,
    } as UpdateNodeGroupRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateNodeGroupRequest_LabelsEntry {
    const message = {
      ...baseUpdateNodeGroupRequest_LabelsEntry,
    } as UpdateNodeGroupRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateNodeGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateNodeGroupRequest_LabelsEntry>, I>
  >(object: I): UpdateNodeGroupRequest_LabelsEntry {
    const message = {
      ...baseUpdateNodeGroupRequest_LabelsEntry,
    } as UpdateNodeGroupRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateNodeGroupRequest_LabelsEntry.$type,
  UpdateNodeGroupRequest_LabelsEntry
);

const baseUpdateNodeGroupRequest_NodeLabelsEntry: object = {
  $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest.NodeLabelsEntry",
  key: "",
  value: "",
};

export const UpdateNodeGroupRequest_NodeLabelsEntry = {
  $type: "yandex.cloud.k8s.v1.UpdateNodeGroupRequest.NodeLabelsEntry" as const,

  encode(
    message: UpdateNodeGroupRequest_NodeLabelsEntry,
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
  ): UpdateNodeGroupRequest_NodeLabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateNodeGroupRequest_NodeLabelsEntry,
    } as UpdateNodeGroupRequest_NodeLabelsEntry;
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

  fromJSON(object: any): UpdateNodeGroupRequest_NodeLabelsEntry {
    const message = {
      ...baseUpdateNodeGroupRequest_NodeLabelsEntry,
    } as UpdateNodeGroupRequest_NodeLabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateNodeGroupRequest_NodeLabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateNodeGroupRequest_NodeLabelsEntry>, I>
  >(object: I): UpdateNodeGroupRequest_NodeLabelsEntry {
    const message = {
      ...baseUpdateNodeGroupRequest_NodeLabelsEntry,
    } as UpdateNodeGroupRequest_NodeLabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateNodeGroupRequest_NodeLabelsEntry.$type,
  UpdateNodeGroupRequest_NodeLabelsEntry
);

const baseUpdateNodeGroupMetadata: object = {
  $type: "yandex.cloud.k8s.v1.UpdateNodeGroupMetadata",
  nodeGroupId: "",
};

export const UpdateNodeGroupMetadata = {
  $type: "yandex.cloud.k8s.v1.UpdateNodeGroupMetadata" as const,

  encode(
    message: UpdateNodeGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nodeGroupId !== "") {
      writer.uint32(10).string(message.nodeGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateNodeGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateNodeGroupMetadata,
    } as UpdateNodeGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateNodeGroupMetadata {
    const message = {
      ...baseUpdateNodeGroupMetadata,
    } as UpdateNodeGroupMetadata;
    message.nodeGroupId =
      object.nodeGroupId !== undefined && object.nodeGroupId !== null
        ? String(object.nodeGroupId)
        : "";
    return message;
  },

  toJSON(message: UpdateNodeGroupMetadata): unknown {
    const obj: any = {};
    message.nodeGroupId !== undefined &&
      (obj.nodeGroupId = message.nodeGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateNodeGroupMetadata>, I>>(
    object: I
  ): UpdateNodeGroupMetadata {
    const message = {
      ...baseUpdateNodeGroupMetadata,
    } as UpdateNodeGroupMetadata;
    message.nodeGroupId = object.nodeGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateNodeGroupMetadata.$type, UpdateNodeGroupMetadata);

const baseCreateNodeGroupRequest: object = {
  $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest",
  clusterId: "",
  name: "",
  description: "",
  version: "",
  allowedUnsafeSysctls: "",
};

export const CreateNodeGroupRequest = {
  $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest" as const,

  encode(
    message: CreateNodeGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateNodeGroupRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.nodeTemplate !== undefined) {
      NodeTemplate.encode(
        message.nodeTemplate,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.scalePolicy !== undefined) {
      ScalePolicy.encode(
        message.scalePolicy,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.allocationPolicy !== undefined) {
      NodeGroupAllocationPolicy.encode(
        message.allocationPolicy,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.deployPolicy !== undefined) {
      DeployPolicy.encode(
        message.deployPolicy,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.version !== "") {
      writer.uint32(66).string(message.version);
    }
    if (message.maintenancePolicy !== undefined) {
      NodeGroupMaintenancePolicy.encode(
        message.maintenancePolicy,
        writer.uint32(74).fork()
      ).ldelim();
    }
    for (const v of message.allowedUnsafeSysctls) {
      writer.uint32(82).string(v!);
    }
    for (const v of message.nodeTaints) {
      Taint.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    Object.entries(message.nodeLabels).forEach(([key, value]) => {
      CreateNodeGroupRequest_NodeLabelsEntry.encode(
        {
          $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest.NodeLabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(98).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateNodeGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateNodeGroupRequest } as CreateNodeGroupRequest;
    message.labels = {};
    message.allowedUnsafeSysctls = [];
    message.nodeTaints = [];
    message.nodeLabels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          const entry4 = CreateNodeGroupRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.nodeTemplate = NodeTemplate.decode(reader, reader.uint32());
          break;
        case 6:
          message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
          break;
        case 7:
          message.allocationPolicy = NodeGroupAllocationPolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.deployPolicy = DeployPolicy.decode(reader, reader.uint32());
          break;
        case 8:
          message.version = reader.string();
          break;
        case 9:
          message.maintenancePolicy = NodeGroupMaintenancePolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.allowedUnsafeSysctls.push(reader.string());
          break;
        case 11:
          message.nodeTaints.push(Taint.decode(reader, reader.uint32()));
          break;
        case 12:
          const entry12 = CreateNodeGroupRequest_NodeLabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry12.value !== undefined) {
            message.nodeLabels[entry12.key] = entry12.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateNodeGroupRequest {
    const message = { ...baseCreateNodeGroupRequest } as CreateNodeGroupRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
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
    message.nodeTemplate =
      object.nodeTemplate !== undefined && object.nodeTemplate !== null
        ? NodeTemplate.fromJSON(object.nodeTemplate)
        : undefined;
    message.scalePolicy =
      object.scalePolicy !== undefined && object.scalePolicy !== null
        ? ScalePolicy.fromJSON(object.scalePolicy)
        : undefined;
    message.allocationPolicy =
      object.allocationPolicy !== undefined && object.allocationPolicy !== null
        ? NodeGroupAllocationPolicy.fromJSON(object.allocationPolicy)
        : undefined;
    message.deployPolicy =
      object.deployPolicy !== undefined && object.deployPolicy !== null
        ? DeployPolicy.fromJSON(object.deployPolicy)
        : undefined;
    message.version =
      object.version !== undefined && object.version !== null
        ? String(object.version)
        : "";
    message.maintenancePolicy =
      object.maintenancePolicy !== undefined &&
      object.maintenancePolicy !== null
        ? NodeGroupMaintenancePolicy.fromJSON(object.maintenancePolicy)
        : undefined;
    message.allowedUnsafeSysctls = (object.allowedUnsafeSysctls ?? []).map(
      (e: any) => String(e)
    );
    message.nodeTaints = (object.nodeTaints ?? []).map((e: any) =>
      Taint.fromJSON(e)
    );
    message.nodeLabels = Object.entries(object.nodeLabels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: CreateNodeGroupRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.nodeTemplate !== undefined &&
      (obj.nodeTemplate = message.nodeTemplate
        ? NodeTemplate.toJSON(message.nodeTemplate)
        : undefined);
    message.scalePolicy !== undefined &&
      (obj.scalePolicy = message.scalePolicy
        ? ScalePolicy.toJSON(message.scalePolicy)
        : undefined);
    message.allocationPolicy !== undefined &&
      (obj.allocationPolicy = message.allocationPolicy
        ? NodeGroupAllocationPolicy.toJSON(message.allocationPolicy)
        : undefined);
    message.deployPolicy !== undefined &&
      (obj.deployPolicy = message.deployPolicy
        ? DeployPolicy.toJSON(message.deployPolicy)
        : undefined);
    message.version !== undefined && (obj.version = message.version);
    message.maintenancePolicy !== undefined &&
      (obj.maintenancePolicy = message.maintenancePolicy
        ? NodeGroupMaintenancePolicy.toJSON(message.maintenancePolicy)
        : undefined);
    if (message.allowedUnsafeSysctls) {
      obj.allowedUnsafeSysctls = message.allowedUnsafeSysctls.map((e) => e);
    } else {
      obj.allowedUnsafeSysctls = [];
    }
    if (message.nodeTaints) {
      obj.nodeTaints = message.nodeTaints.map((e) =>
        e ? Taint.toJSON(e) : undefined
      );
    } else {
      obj.nodeTaints = [];
    }
    obj.nodeLabels = {};
    if (message.nodeLabels) {
      Object.entries(message.nodeLabels).forEach(([k, v]) => {
        obj.nodeLabels[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateNodeGroupRequest>, I>>(
    object: I
  ): CreateNodeGroupRequest {
    const message = { ...baseCreateNodeGroupRequest } as CreateNodeGroupRequest;
    message.clusterId = object.clusterId ?? "";
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
    message.nodeTemplate =
      object.nodeTemplate !== undefined && object.nodeTemplate !== null
        ? NodeTemplate.fromPartial(object.nodeTemplate)
        : undefined;
    message.scalePolicy =
      object.scalePolicy !== undefined && object.scalePolicy !== null
        ? ScalePolicy.fromPartial(object.scalePolicy)
        : undefined;
    message.allocationPolicy =
      object.allocationPolicy !== undefined && object.allocationPolicy !== null
        ? NodeGroupAllocationPolicy.fromPartial(object.allocationPolicy)
        : undefined;
    message.deployPolicy =
      object.deployPolicy !== undefined && object.deployPolicy !== null
        ? DeployPolicy.fromPartial(object.deployPolicy)
        : undefined;
    message.version = object.version ?? "";
    message.maintenancePolicy =
      object.maintenancePolicy !== undefined &&
      object.maintenancePolicy !== null
        ? NodeGroupMaintenancePolicy.fromPartial(object.maintenancePolicy)
        : undefined;
    message.allowedUnsafeSysctls =
      object.allowedUnsafeSysctls?.map((e) => e) || [];
    message.nodeTaints =
      object.nodeTaints?.map((e) => Taint.fromPartial(e)) || [];
    message.nodeLabels = Object.entries(object.nodeLabels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(CreateNodeGroupRequest.$type, CreateNodeGroupRequest);

const baseCreateNodeGroupRequest_LabelsEntry: object = {
  $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateNodeGroupRequest_LabelsEntry = {
  $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest.LabelsEntry" as const,

  encode(
    message: CreateNodeGroupRequest_LabelsEntry,
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
  ): CreateNodeGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateNodeGroupRequest_LabelsEntry,
    } as CreateNodeGroupRequest_LabelsEntry;
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

  fromJSON(object: any): CreateNodeGroupRequest_LabelsEntry {
    const message = {
      ...baseCreateNodeGroupRequest_LabelsEntry,
    } as CreateNodeGroupRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateNodeGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateNodeGroupRequest_LabelsEntry>, I>
  >(object: I): CreateNodeGroupRequest_LabelsEntry {
    const message = {
      ...baseCreateNodeGroupRequest_LabelsEntry,
    } as CreateNodeGroupRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateNodeGroupRequest_LabelsEntry.$type,
  CreateNodeGroupRequest_LabelsEntry
);

const baseCreateNodeGroupRequest_NodeLabelsEntry: object = {
  $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest.NodeLabelsEntry",
  key: "",
  value: "",
};

export const CreateNodeGroupRequest_NodeLabelsEntry = {
  $type: "yandex.cloud.k8s.v1.CreateNodeGroupRequest.NodeLabelsEntry" as const,

  encode(
    message: CreateNodeGroupRequest_NodeLabelsEntry,
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
  ): CreateNodeGroupRequest_NodeLabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateNodeGroupRequest_NodeLabelsEntry,
    } as CreateNodeGroupRequest_NodeLabelsEntry;
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

  fromJSON(object: any): CreateNodeGroupRequest_NodeLabelsEntry {
    const message = {
      ...baseCreateNodeGroupRequest_NodeLabelsEntry,
    } as CreateNodeGroupRequest_NodeLabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateNodeGroupRequest_NodeLabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateNodeGroupRequest_NodeLabelsEntry>, I>
  >(object: I): CreateNodeGroupRequest_NodeLabelsEntry {
    const message = {
      ...baseCreateNodeGroupRequest_NodeLabelsEntry,
    } as CreateNodeGroupRequest_NodeLabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateNodeGroupRequest_NodeLabelsEntry.$type,
  CreateNodeGroupRequest_NodeLabelsEntry
);

const baseCreateNodeGroupMetadata: object = {
  $type: "yandex.cloud.k8s.v1.CreateNodeGroupMetadata",
  nodeGroupId: "",
};

export const CreateNodeGroupMetadata = {
  $type: "yandex.cloud.k8s.v1.CreateNodeGroupMetadata" as const,

  encode(
    message: CreateNodeGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nodeGroupId !== "") {
      writer.uint32(10).string(message.nodeGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateNodeGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateNodeGroupMetadata,
    } as CreateNodeGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateNodeGroupMetadata {
    const message = {
      ...baseCreateNodeGroupMetadata,
    } as CreateNodeGroupMetadata;
    message.nodeGroupId =
      object.nodeGroupId !== undefined && object.nodeGroupId !== null
        ? String(object.nodeGroupId)
        : "";
    return message;
  },

  toJSON(message: CreateNodeGroupMetadata): unknown {
    const obj: any = {};
    message.nodeGroupId !== undefined &&
      (obj.nodeGroupId = message.nodeGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateNodeGroupMetadata>, I>>(
    object: I
  ): CreateNodeGroupMetadata {
    const message = {
      ...baseCreateNodeGroupMetadata,
    } as CreateNodeGroupMetadata;
    message.nodeGroupId = object.nodeGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateNodeGroupMetadata.$type, CreateNodeGroupMetadata);

const baseAutoUpgradeNodeGroupMetadata: object = {
  $type: "yandex.cloud.k8s.v1.AutoUpgradeNodeGroupMetadata",
  nodeGroupId: "",
};

export const AutoUpgradeNodeGroupMetadata = {
  $type: "yandex.cloud.k8s.v1.AutoUpgradeNodeGroupMetadata" as const,

  encode(
    message: AutoUpgradeNodeGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nodeGroupId !== "") {
      writer.uint32(10).string(message.nodeGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AutoUpgradeNodeGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAutoUpgradeNodeGroupMetadata,
    } as AutoUpgradeNodeGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AutoUpgradeNodeGroupMetadata {
    const message = {
      ...baseAutoUpgradeNodeGroupMetadata,
    } as AutoUpgradeNodeGroupMetadata;
    message.nodeGroupId =
      object.nodeGroupId !== undefined && object.nodeGroupId !== null
        ? String(object.nodeGroupId)
        : "";
    return message;
  },

  toJSON(message: AutoUpgradeNodeGroupMetadata): unknown {
    const obj: any = {};
    message.nodeGroupId !== undefined &&
      (obj.nodeGroupId = message.nodeGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AutoUpgradeNodeGroupMetadata>, I>>(
    object: I
  ): AutoUpgradeNodeGroupMetadata {
    const message = {
      ...baseAutoUpgradeNodeGroupMetadata,
    } as AutoUpgradeNodeGroupMetadata;
    message.nodeGroupId = object.nodeGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  AutoUpgradeNodeGroupMetadata.$type,
  AutoUpgradeNodeGroupMetadata
);

const baseListNodeGroupOperationsRequest: object = {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupOperationsRequest",
  nodeGroupId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListNodeGroupOperationsRequest = {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupOperationsRequest" as const,

  encode(
    message: ListNodeGroupOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nodeGroupId !== "") {
      writer.uint32(10).string(message.nodeGroupId);
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
  ): ListNodeGroupOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListNodeGroupOperationsRequest,
    } as ListNodeGroupOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeGroupId = reader.string();
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

  fromJSON(object: any): ListNodeGroupOperationsRequest {
    const message = {
      ...baseListNodeGroupOperationsRequest,
    } as ListNodeGroupOperationsRequest;
    message.nodeGroupId =
      object.nodeGroupId !== undefined && object.nodeGroupId !== null
        ? String(object.nodeGroupId)
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

  toJSON(message: ListNodeGroupOperationsRequest): unknown {
    const obj: any = {};
    message.nodeGroupId !== undefined &&
      (obj.nodeGroupId = message.nodeGroupId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListNodeGroupOperationsRequest>, I>>(
    object: I
  ): ListNodeGroupOperationsRequest {
    const message = {
      ...baseListNodeGroupOperationsRequest,
    } as ListNodeGroupOperationsRequest;
    message.nodeGroupId = object.nodeGroupId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListNodeGroupOperationsRequest.$type,
  ListNodeGroupOperationsRequest
);

const baseListNodeGroupOperationsResponse: object = {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupOperationsResponse",
  nextPageToken: "",
};

export const ListNodeGroupOperationsResponse = {
  $type: "yandex.cloud.k8s.v1.ListNodeGroupOperationsResponse" as const,

  encode(
    message: ListNodeGroupOperationsResponse,
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
  ): ListNodeGroupOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListNodeGroupOperationsResponse,
    } as ListNodeGroupOperationsResponse;
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

  fromJSON(object: any): ListNodeGroupOperationsResponse {
    const message = {
      ...baseListNodeGroupOperationsResponse,
    } as ListNodeGroupOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListNodeGroupOperationsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<ListNodeGroupOperationsResponse>, I>>(
    object: I
  ): ListNodeGroupOperationsResponse {
    const message = {
      ...baseListNodeGroupOperationsResponse,
    } as ListNodeGroupOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListNodeGroupOperationsResponse.$type,
  ListNodeGroupOperationsResponse
);

/** A set of methods for managing node groups. */
export const NodeGroupServiceService = {
  /**
   * Returns the specified node group.
   *
   * To get the list of available node group, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.k8s.v1.NodeGroupService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetNodeGroupRequest) =>
      Buffer.from(GetNodeGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetNodeGroupRequest.decode(value),
    responseSerialize: (value: NodeGroup) =>
      Buffer.from(NodeGroup.encode(value).finish()),
    responseDeserialize: (value: Buffer) => NodeGroup.decode(value),
  },
  /** Retrieves the list of node group in the specified Kubernetes cluster. */
  list: {
    path: "/yandex.cloud.k8s.v1.NodeGroupService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListNodeGroupsRequest) =>
      Buffer.from(ListNodeGroupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListNodeGroupsRequest.decode(value),
    responseSerialize: (value: ListNodeGroupsResponse) =>
      Buffer.from(ListNodeGroupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListNodeGroupsResponse.decode(value),
  },
  /** Creates a node group in the specified Kubernetes cluster. */
  create: {
    path: "/yandex.cloud.k8s.v1.NodeGroupService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateNodeGroupRequest) =>
      Buffer.from(CreateNodeGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateNodeGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified node group. */
  update: {
    path: "/yandex.cloud.k8s.v1.NodeGroupService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateNodeGroupRequest) =>
      Buffer.from(UpdateNodeGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateNodeGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified node group. */
  delete: {
    path: "/yandex.cloud.k8s.v1.NodeGroupService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteNodeGroupRequest) =>
      Buffer.from(DeleteNodeGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteNodeGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified node group. */
  listOperations: {
    path: "/yandex.cloud.k8s.v1.NodeGroupService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListNodeGroupOperationsRequest) =>
      Buffer.from(ListNodeGroupOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListNodeGroupOperationsRequest.decode(value),
    responseSerialize: (value: ListNodeGroupOperationsResponse) =>
      Buffer.from(ListNodeGroupOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListNodeGroupOperationsResponse.decode(value),
  },
  /** Retrieves the list of nodes in the specified Kubernetes cluster. */
  listNodes: {
    path: "/yandex.cloud.k8s.v1.NodeGroupService/ListNodes",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListNodeGroupNodesRequest) =>
      Buffer.from(ListNodeGroupNodesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListNodeGroupNodesRequest.decode(value),
    responseSerialize: (value: ListNodeGroupNodesResponse) =>
      Buffer.from(ListNodeGroupNodesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListNodeGroupNodesResponse.decode(value),
  },
} as const;

export interface NodeGroupServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified node group.
   *
   * To get the list of available node group, make a [List] request.
   */
  get: handleUnaryCall<GetNodeGroupRequest, NodeGroup>;
  /** Retrieves the list of node group in the specified Kubernetes cluster. */
  list: handleUnaryCall<ListNodeGroupsRequest, ListNodeGroupsResponse>;
  /** Creates a node group in the specified Kubernetes cluster. */
  create: handleUnaryCall<CreateNodeGroupRequest, Operation>;
  /** Updates the specified node group. */
  update: handleUnaryCall<UpdateNodeGroupRequest, Operation>;
  /** Deletes the specified node group. */
  delete: handleUnaryCall<DeleteNodeGroupRequest, Operation>;
  /** Lists operations for the specified node group. */
  listOperations: handleUnaryCall<
    ListNodeGroupOperationsRequest,
    ListNodeGroupOperationsResponse
  >;
  /** Retrieves the list of nodes in the specified Kubernetes cluster. */
  listNodes: handleUnaryCall<
    ListNodeGroupNodesRequest,
    ListNodeGroupNodesResponse
  >;
}

export interface NodeGroupServiceClient extends Client {
  /**
   * Returns the specified node group.
   *
   * To get the list of available node group, make a [List] request.
   */
  get(
    request: GetNodeGroupRequest,
    callback: (error: ServiceError | null, response: NodeGroup) => void
  ): ClientUnaryCall;
  get(
    request: GetNodeGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: NodeGroup) => void
  ): ClientUnaryCall;
  get(
    request: GetNodeGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: NodeGroup) => void
  ): ClientUnaryCall;
  /** Retrieves the list of node group in the specified Kubernetes cluster. */
  list(
    request: ListNodeGroupsRequest,
    callback: (
      error: ServiceError | null,
      response: ListNodeGroupsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListNodeGroupsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListNodeGroupsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListNodeGroupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListNodeGroupsResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates a node group in the specified Kubernetes cluster. */
  create(
    request: CreateNodeGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateNodeGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateNodeGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified node group. */
  update(
    request: UpdateNodeGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateNodeGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateNodeGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified node group. */
  delete(
    request: DeleteNodeGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteNodeGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteNodeGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified node group. */
  listOperations(
    request: ListNodeGroupOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListNodeGroupOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListNodeGroupOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListNodeGroupOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListNodeGroupOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListNodeGroupOperationsResponse
    ) => void
  ): ClientUnaryCall;
  /** Retrieves the list of nodes in the specified Kubernetes cluster. */
  listNodes(
    request: ListNodeGroupNodesRequest,
    callback: (
      error: ServiceError | null,
      response: ListNodeGroupNodesResponse
    ) => void
  ): ClientUnaryCall;
  listNodes(
    request: ListNodeGroupNodesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListNodeGroupNodesResponse
    ) => void
  ): ClientUnaryCall;
  listNodes(
    request: ListNodeGroupNodesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListNodeGroupNodesResponse
    ) => void
  ): ClientUnaryCall;
}

export const NodeGroupServiceClient = makeGenericClientConstructor(
  NodeGroupServiceService,
  "yandex.cloud.k8s.v1.NodeGroupService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): NodeGroupServiceClient;
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
