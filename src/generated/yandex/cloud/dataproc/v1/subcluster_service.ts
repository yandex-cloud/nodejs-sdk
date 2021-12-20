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
import {
  Role,
  AutoscalingConfig,
  Subcluster,
  roleFromJSON,
  roleToJSON,
} from "../../../../yandex/cloud/dataproc/v1/subcluster";
import { Resources } from "../../../../yandex/cloud/dataproc/v1/common";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.dataproc.v1";

export interface GetSubclusterRequest {
  $type: "yandex.cloud.dataproc.v1.GetSubclusterRequest";
  /** ID of the Data Proc cluster that the subcluster belongs to. */
  clusterId: string;
  /**
   * ID of the subcluster to return.
   *
   * To get a subcluster ID make a [SubclusterService.List] request.
   */
  subclusterId: string;
}

export interface ListSubclustersRequest {
  $type: "yandex.cloud.dataproc.v1.ListSubclustersRequest";
  /** ID of the Data Proc cluster to list subclusters in. */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListSubclustersResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListSubclustersResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters subclusters listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [Subcluster.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name=dataproc123_subcluster456`.
   */
  filter: string;
}

export interface ListSubclustersResponse {
  $type: "yandex.cloud.dataproc.v1.ListSubclustersResponse";
  /** List of subclusters in the specified cluster. */
  subclusters: Subcluster[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListSubclustersRequest.page_size], use `next_page_token` as the value
   * for the [ListSubclustersRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateSubclusterRequest {
  $type: "yandex.cloud.dataproc.v1.CreateSubclusterRequest";
  /**
   * ID of the Data Proc cluster to create a subcluster in.
   *
   * To get a cluster ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the subcluster. The name must be unique within the cluster. The name can't be
   * changed when the subcluster is created.
   */
  name: string;
  /** Role that is fulfilled by hosts of the subcluster. */
  role: Role;
  /** Resources allocated for each host in the subcluster. */
  resources?: Resources;
  /** ID of the VPC subnet used for hosts in the subcluster. */
  subnetId: string;
  /** Number of hosts in the subcluster. */
  hostsCount: number;
  /** Configuration for instance group based subclusters */
  autoscalingConfig?: AutoscalingConfig;
}

export interface CreateSubclusterMetadata {
  $type: "yandex.cloud.dataproc.v1.CreateSubclusterMetadata";
  /** ID of the cluster that the subcluster is being added to. */
  clusterId: string;
  /** ID of the subcluster that is being created. */
  subclusterId: string;
}

export interface UpdateSubclusterRequest {
  $type: "yandex.cloud.dataproc.v1.UpdateSubclusterRequest";
  /**
   * ID of the cluster to update a subcluster in.
   *
   * To get a cluster ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * ID of the subcluster to update.
   *
   * To get a subcluster ID, make a [SubclusterService.List] request.
   */
  subclusterId: string;
  /** Field mask that specifies which attributes of the subcluster should be updated. */
  updateMask?: FieldMask;
  /** New configuration of resources that should be allocated for each host in the subcluster. */
  resources?: Resources;
  /** New name for the subcluster. The name must be unique within the cluster. */
  name: string;
  /** New number of hosts in the subcluster. */
  hostsCount: number;
  /** Timeout to gracefully decommission nodes. In seconds. Default value: 0 */
  decommissionTimeout: number;
  /** Configuration for instance group based subclusters */
  autoscalingConfig?: AutoscalingConfig;
}

export interface UpdateSubclusterMetadata {
  $type: "yandex.cloud.dataproc.v1.UpdateSubclusterMetadata";
  /** ID of the cluster whose subcluster is being updated. */
  clusterId: string;
  /** ID of the subcluster that is being updated. */
  subclusterId: string;
}

export interface DeleteSubclusterRequest {
  $type: "yandex.cloud.dataproc.v1.DeleteSubclusterRequest";
  /**
   * ID of the cluster to remove a subcluster from.
   *
   * To get a cluster ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /** ID of the subcluster to delete. */
  subclusterId: string;
  /** Timeout to gracefully decommission nodes. In seconds. Default value: 0 */
  decommissionTimeout: number;
}

export interface DeleteSubclusterMetadata {
  $type: "yandex.cloud.dataproc.v1.DeleteSubclusterMetadata";
  /** ID of the cluster whose subcluster is being deleted. */
  clusterId: string;
  /** ID of the subcluster that is being deleted. */
  subclusterId: string;
}

const baseGetSubclusterRequest: object = {
  $type: "yandex.cloud.dataproc.v1.GetSubclusterRequest",
  clusterId: "",
  subclusterId: "",
};

export const GetSubclusterRequest = {
  $type: "yandex.cloud.dataproc.v1.GetSubclusterRequest" as const,

  encode(
    message: GetSubclusterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.subclusterId !== "") {
      writer.uint32(18).string(message.subclusterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetSubclusterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetSubclusterRequest } as GetSubclusterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.subclusterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetSubclusterRequest {
    const message = { ...baseGetSubclusterRequest } as GetSubclusterRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.subclusterId =
      object.subclusterId !== undefined && object.subclusterId !== null
        ? String(object.subclusterId)
        : "";
    return message;
  },

  toJSON(message: GetSubclusterRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.subclusterId !== undefined &&
      (obj.subclusterId = message.subclusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetSubclusterRequest>, I>>(
    object: I
  ): GetSubclusterRequest {
    const message = { ...baseGetSubclusterRequest } as GetSubclusterRequest;
    message.clusterId = object.clusterId ?? "";
    message.subclusterId = object.subclusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetSubclusterRequest.$type, GetSubclusterRequest);

const baseListSubclustersRequest: object = {
  $type: "yandex.cloud.dataproc.v1.ListSubclustersRequest",
  clusterId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListSubclustersRequest = {
  $type: "yandex.cloud.dataproc.v1.ListSubclustersRequest" as const,

  encode(
    message: ListSubclustersRequest,
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
  ): ListSubclustersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListSubclustersRequest } as ListSubclustersRequest;
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

  fromJSON(object: any): ListSubclustersRequest {
    const message = { ...baseListSubclustersRequest } as ListSubclustersRequest;
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

  toJSON(message: ListSubclustersRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListSubclustersRequest>, I>>(
    object: I
  ): ListSubclustersRequest {
    const message = { ...baseListSubclustersRequest } as ListSubclustersRequest;
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSubclustersRequest.$type, ListSubclustersRequest);

const baseListSubclustersResponse: object = {
  $type: "yandex.cloud.dataproc.v1.ListSubclustersResponse",
  nextPageToken: "",
};

export const ListSubclustersResponse = {
  $type: "yandex.cloud.dataproc.v1.ListSubclustersResponse" as const,

  encode(
    message: ListSubclustersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.subclusters) {
      Subcluster.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListSubclustersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListSubclustersResponse,
    } as ListSubclustersResponse;
    message.subclusters = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subclusters.push(Subcluster.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListSubclustersResponse {
    const message = {
      ...baseListSubclustersResponse,
    } as ListSubclustersResponse;
    message.subclusters = (object.subclusters ?? []).map((e: any) =>
      Subcluster.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListSubclustersResponse): unknown {
    const obj: any = {};
    if (message.subclusters) {
      obj.subclusters = message.subclusters.map((e) =>
        e ? Subcluster.toJSON(e) : undefined
      );
    } else {
      obj.subclusters = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListSubclustersResponse>, I>>(
    object: I
  ): ListSubclustersResponse {
    const message = {
      ...baseListSubclustersResponse,
    } as ListSubclustersResponse;
    message.subclusters =
      object.subclusters?.map((e) => Subcluster.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSubclustersResponse.$type, ListSubclustersResponse);

const baseCreateSubclusterRequest: object = {
  $type: "yandex.cloud.dataproc.v1.CreateSubclusterRequest",
  clusterId: "",
  name: "",
  role: 0,
  subnetId: "",
  hostsCount: 0,
};

export const CreateSubclusterRequest = {
  $type: "yandex.cloud.dataproc.v1.CreateSubclusterRequest" as const,

  encode(
    message: CreateSubclusterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.role !== 0) {
      writer.uint32(24).int32(message.role);
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(34).fork()).ldelim();
    }
    if (message.subnetId !== "") {
      writer.uint32(42).string(message.subnetId);
    }
    if (message.hostsCount !== 0) {
      writer.uint32(48).int64(message.hostsCount);
    }
    if (message.autoscalingConfig !== undefined) {
      AutoscalingConfig.encode(
        message.autoscalingConfig,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateSubclusterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateSubclusterRequest,
    } as CreateSubclusterRequest;
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
          message.role = reader.int32() as any;
          break;
        case 4:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        case 5:
          message.subnetId = reader.string();
          break;
        case 6:
          message.hostsCount = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.autoscalingConfig = AutoscalingConfig.decode(
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

  fromJSON(object: any): CreateSubclusterRequest {
    const message = {
      ...baseCreateSubclusterRequest,
    } as CreateSubclusterRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.role =
      object.role !== undefined && object.role !== null
        ? roleFromJSON(object.role)
        : 0;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    message.hostsCount =
      object.hostsCount !== undefined && object.hostsCount !== null
        ? Number(object.hostsCount)
        : 0;
    message.autoscalingConfig =
      object.autoscalingConfig !== undefined &&
      object.autoscalingConfig !== null
        ? AutoscalingConfig.fromJSON(object.autoscalingConfig)
        : undefined;
    return message;
  },

  toJSON(message: CreateSubclusterRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.name !== undefined && (obj.name = message.name);
    message.role !== undefined && (obj.role = roleToJSON(message.role));
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    message.hostsCount !== undefined &&
      (obj.hostsCount = Math.round(message.hostsCount));
    message.autoscalingConfig !== undefined &&
      (obj.autoscalingConfig = message.autoscalingConfig
        ? AutoscalingConfig.toJSON(message.autoscalingConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateSubclusterRequest>, I>>(
    object: I
  ): CreateSubclusterRequest {
    const message = {
      ...baseCreateSubclusterRequest,
    } as CreateSubclusterRequest;
    message.clusterId = object.clusterId ?? "";
    message.name = object.name ?? "";
    message.role = object.role ?? 0;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    message.subnetId = object.subnetId ?? "";
    message.hostsCount = object.hostsCount ?? 0;
    message.autoscalingConfig =
      object.autoscalingConfig !== undefined &&
      object.autoscalingConfig !== null
        ? AutoscalingConfig.fromPartial(object.autoscalingConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateSubclusterRequest.$type, CreateSubclusterRequest);

const baseCreateSubclusterMetadata: object = {
  $type: "yandex.cloud.dataproc.v1.CreateSubclusterMetadata",
  clusterId: "",
  subclusterId: "",
};

export const CreateSubclusterMetadata = {
  $type: "yandex.cloud.dataproc.v1.CreateSubclusterMetadata" as const,

  encode(
    message: CreateSubclusterMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.subclusterId !== "") {
      writer.uint32(18).string(message.subclusterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateSubclusterMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateSubclusterMetadata,
    } as CreateSubclusterMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.subclusterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateSubclusterMetadata {
    const message = {
      ...baseCreateSubclusterMetadata,
    } as CreateSubclusterMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.subclusterId =
      object.subclusterId !== undefined && object.subclusterId !== null
        ? String(object.subclusterId)
        : "";
    return message;
  },

  toJSON(message: CreateSubclusterMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.subclusterId !== undefined &&
      (obj.subclusterId = message.subclusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateSubclusterMetadata>, I>>(
    object: I
  ): CreateSubclusterMetadata {
    const message = {
      ...baseCreateSubclusterMetadata,
    } as CreateSubclusterMetadata;
    message.clusterId = object.clusterId ?? "";
    message.subclusterId = object.subclusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateSubclusterMetadata.$type,
  CreateSubclusterMetadata
);

const baseUpdateSubclusterRequest: object = {
  $type: "yandex.cloud.dataproc.v1.UpdateSubclusterRequest",
  clusterId: "",
  subclusterId: "",
  name: "",
  hostsCount: 0,
  decommissionTimeout: 0,
};

export const UpdateSubclusterRequest = {
  $type: "yandex.cloud.dataproc.v1.UpdateSubclusterRequest" as const,

  encode(
    message: UpdateSubclusterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.subclusterId !== "") {
      writer.uint32(18).string(message.subclusterId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
    }
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(34).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.hostsCount !== 0) {
      writer.uint32(48).int64(message.hostsCount);
    }
    if (message.decommissionTimeout !== 0) {
      writer.uint32(56).int64(message.decommissionTimeout);
    }
    if (message.autoscalingConfig !== undefined) {
      AutoscalingConfig.encode(
        message.autoscalingConfig,
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateSubclusterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateSubclusterRequest,
    } as UpdateSubclusterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.subclusterId = reader.string();
          break;
        case 3:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        case 4:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.hostsCount = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.decommissionTimeout = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.autoscalingConfig = AutoscalingConfig.decode(
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

  fromJSON(object: any): UpdateSubclusterRequest {
    const message = {
      ...baseUpdateSubclusterRequest,
    } as UpdateSubclusterRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.subclusterId =
      object.subclusterId !== undefined && object.subclusterId !== null
        ? String(object.subclusterId)
        : "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.hostsCount =
      object.hostsCount !== undefined && object.hostsCount !== null
        ? Number(object.hostsCount)
        : 0;
    message.decommissionTimeout =
      object.decommissionTimeout !== undefined &&
      object.decommissionTimeout !== null
        ? Number(object.decommissionTimeout)
        : 0;
    message.autoscalingConfig =
      object.autoscalingConfig !== undefined &&
      object.autoscalingConfig !== null
        ? AutoscalingConfig.fromJSON(object.autoscalingConfig)
        : undefined;
    return message;
  },

  toJSON(message: UpdateSubclusterRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.subclusterId !== undefined &&
      (obj.subclusterId = message.subclusterId);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.hostsCount !== undefined &&
      (obj.hostsCount = Math.round(message.hostsCount));
    message.decommissionTimeout !== undefined &&
      (obj.decommissionTimeout = Math.round(message.decommissionTimeout));
    message.autoscalingConfig !== undefined &&
      (obj.autoscalingConfig = message.autoscalingConfig
        ? AutoscalingConfig.toJSON(message.autoscalingConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSubclusterRequest>, I>>(
    object: I
  ): UpdateSubclusterRequest {
    const message = {
      ...baseUpdateSubclusterRequest,
    } as UpdateSubclusterRequest;
    message.clusterId = object.clusterId ?? "";
    message.subclusterId = object.subclusterId ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    message.name = object.name ?? "";
    message.hostsCount = object.hostsCount ?? 0;
    message.decommissionTimeout = object.decommissionTimeout ?? 0;
    message.autoscalingConfig =
      object.autoscalingConfig !== undefined &&
      object.autoscalingConfig !== null
        ? AutoscalingConfig.fromPartial(object.autoscalingConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateSubclusterRequest.$type, UpdateSubclusterRequest);

const baseUpdateSubclusterMetadata: object = {
  $type: "yandex.cloud.dataproc.v1.UpdateSubclusterMetadata",
  clusterId: "",
  subclusterId: "",
};

export const UpdateSubclusterMetadata = {
  $type: "yandex.cloud.dataproc.v1.UpdateSubclusterMetadata" as const,

  encode(
    message: UpdateSubclusterMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.subclusterId !== "") {
      writer.uint32(18).string(message.subclusterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateSubclusterMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateSubclusterMetadata,
    } as UpdateSubclusterMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.subclusterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateSubclusterMetadata {
    const message = {
      ...baseUpdateSubclusterMetadata,
    } as UpdateSubclusterMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.subclusterId =
      object.subclusterId !== undefined && object.subclusterId !== null
        ? String(object.subclusterId)
        : "";
    return message;
  },

  toJSON(message: UpdateSubclusterMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.subclusterId !== undefined &&
      (obj.subclusterId = message.subclusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSubclusterMetadata>, I>>(
    object: I
  ): UpdateSubclusterMetadata {
    const message = {
      ...baseUpdateSubclusterMetadata,
    } as UpdateSubclusterMetadata;
    message.clusterId = object.clusterId ?? "";
    message.subclusterId = object.subclusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateSubclusterMetadata.$type,
  UpdateSubclusterMetadata
);

const baseDeleteSubclusterRequest: object = {
  $type: "yandex.cloud.dataproc.v1.DeleteSubclusterRequest",
  clusterId: "",
  subclusterId: "",
  decommissionTimeout: 0,
};

export const DeleteSubclusterRequest = {
  $type: "yandex.cloud.dataproc.v1.DeleteSubclusterRequest" as const,

  encode(
    message: DeleteSubclusterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.subclusterId !== "") {
      writer.uint32(18).string(message.subclusterId);
    }
    if (message.decommissionTimeout !== 0) {
      writer.uint32(24).int64(message.decommissionTimeout);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteSubclusterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteSubclusterRequest,
    } as DeleteSubclusterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.subclusterId = reader.string();
          break;
        case 3:
          message.decommissionTimeout = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteSubclusterRequest {
    const message = {
      ...baseDeleteSubclusterRequest,
    } as DeleteSubclusterRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.subclusterId =
      object.subclusterId !== undefined && object.subclusterId !== null
        ? String(object.subclusterId)
        : "";
    message.decommissionTimeout =
      object.decommissionTimeout !== undefined &&
      object.decommissionTimeout !== null
        ? Number(object.decommissionTimeout)
        : 0;
    return message;
  },

  toJSON(message: DeleteSubclusterRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.subclusterId !== undefined &&
      (obj.subclusterId = message.subclusterId);
    message.decommissionTimeout !== undefined &&
      (obj.decommissionTimeout = Math.round(message.decommissionTimeout));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteSubclusterRequest>, I>>(
    object: I
  ): DeleteSubclusterRequest {
    const message = {
      ...baseDeleteSubclusterRequest,
    } as DeleteSubclusterRequest;
    message.clusterId = object.clusterId ?? "";
    message.subclusterId = object.subclusterId ?? "";
    message.decommissionTimeout = object.decommissionTimeout ?? 0;
    return message;
  },
};

messageTypeRegistry.set(DeleteSubclusterRequest.$type, DeleteSubclusterRequest);

const baseDeleteSubclusterMetadata: object = {
  $type: "yandex.cloud.dataproc.v1.DeleteSubclusterMetadata",
  clusterId: "",
  subclusterId: "",
};

export const DeleteSubclusterMetadata = {
  $type: "yandex.cloud.dataproc.v1.DeleteSubclusterMetadata" as const,

  encode(
    message: DeleteSubclusterMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.subclusterId !== "") {
      writer.uint32(18).string(message.subclusterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteSubclusterMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteSubclusterMetadata,
    } as DeleteSubclusterMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.subclusterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteSubclusterMetadata {
    const message = {
      ...baseDeleteSubclusterMetadata,
    } as DeleteSubclusterMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.subclusterId =
      object.subclusterId !== undefined && object.subclusterId !== null
        ? String(object.subclusterId)
        : "";
    return message;
  },

  toJSON(message: DeleteSubclusterMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.subclusterId !== undefined &&
      (obj.subclusterId = message.subclusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteSubclusterMetadata>, I>>(
    object: I
  ): DeleteSubclusterMetadata {
    const message = {
      ...baseDeleteSubclusterMetadata,
    } as DeleteSubclusterMetadata;
    message.clusterId = object.clusterId ?? "";
    message.subclusterId = object.subclusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteSubclusterMetadata.$type,
  DeleteSubclusterMetadata
);

/** A set of methods for managing Data Proc subclusters. */
export const SubclusterServiceService = {
  /**
   * Returns the specified subcluster.
   *
   * To get the list of all available subclusters, make a [SubclusterService.List] request.
   */
  get: {
    path: "/yandex.cloud.dataproc.v1.SubclusterService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetSubclusterRequest) =>
      Buffer.from(GetSubclusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetSubclusterRequest.decode(value),
    responseSerialize: (value: Subcluster) =>
      Buffer.from(Subcluster.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Subcluster.decode(value),
  },
  /** Retrieves a list of subclusters in the specified cluster. */
  list: {
    path: "/yandex.cloud.dataproc.v1.SubclusterService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSubclustersRequest) =>
      Buffer.from(ListSubclustersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListSubclustersRequest.decode(value),
    responseSerialize: (value: ListSubclustersResponse) =>
      Buffer.from(ListSubclustersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListSubclustersResponse.decode(value),
  },
  /** Creates a subcluster in the specified cluster. */
  create: {
    path: "/yandex.cloud.dataproc.v1.SubclusterService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateSubclusterRequest) =>
      Buffer.from(CreateSubclusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateSubclusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified subcluster. */
  update: {
    path: "/yandex.cloud.dataproc.v1.SubclusterService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateSubclusterRequest) =>
      Buffer.from(UpdateSubclusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateSubclusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified subcluster. */
  delete: {
    path: "/yandex.cloud.dataproc.v1.SubclusterService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteSubclusterRequest) =>
      Buffer.from(DeleteSubclusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteSubclusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface SubclusterServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified subcluster.
   *
   * To get the list of all available subclusters, make a [SubclusterService.List] request.
   */
  get: handleUnaryCall<GetSubclusterRequest, Subcluster>;
  /** Retrieves a list of subclusters in the specified cluster. */
  list: handleUnaryCall<ListSubclustersRequest, ListSubclustersResponse>;
  /** Creates a subcluster in the specified cluster. */
  create: handleUnaryCall<CreateSubclusterRequest, Operation>;
  /** Updates the specified subcluster. */
  update: handleUnaryCall<UpdateSubclusterRequest, Operation>;
  /** Deletes the specified subcluster. */
  delete: handleUnaryCall<DeleteSubclusterRequest, Operation>;
}

export interface SubclusterServiceClient extends Client {
  /**
   * Returns the specified subcluster.
   *
   * To get the list of all available subclusters, make a [SubclusterService.List] request.
   */
  get(
    request: GetSubclusterRequest,
    callback: (error: ServiceError | null, response: Subcluster) => void
  ): ClientUnaryCall;
  get(
    request: GetSubclusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Subcluster) => void
  ): ClientUnaryCall;
  get(
    request: GetSubclusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Subcluster) => void
  ): ClientUnaryCall;
  /** Retrieves a list of subclusters in the specified cluster. */
  list(
    request: ListSubclustersRequest,
    callback: (
      error: ServiceError | null,
      response: ListSubclustersResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListSubclustersRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListSubclustersResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListSubclustersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListSubclustersResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates a subcluster in the specified cluster. */
  create(
    request: CreateSubclusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateSubclusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateSubclusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified subcluster. */
  update(
    request: UpdateSubclusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateSubclusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateSubclusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified subcluster. */
  delete(
    request: DeleteSubclusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteSubclusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteSubclusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const SubclusterServiceClient = makeGenericClientConstructor(
  SubclusterServiceService,
  "yandex.cloud.dataproc.v1.SubclusterService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): SubclusterServiceClient;
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
