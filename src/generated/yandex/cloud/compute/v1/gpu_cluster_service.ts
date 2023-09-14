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
  GpuInterconnectType,
  GpuCluster,
  gpuInterconnectTypeFromJSON,
  gpuInterconnectTypeToJSON,
} from "../../../../yandex/cloud/compute/v1/gpu_cluster";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import { Instance } from "../../../../yandex/cloud/compute/v1/instance";

export const protobufPackage = "yandex.cloud.compute.v1";

export interface GetGpuClusterRequest {
  $type: "yandex.cloud.compute.v1.GetGpuClusterRequest";
  /**
   * ID of the GPU cluster to return.
   *
   * To get a GPU cluster ID, make a [GpuClusterService.List] request.
   */
  gpuClusterId: string;
}

export interface ListGpuClustersRequest {
  $type: "yandex.cloud.compute.v1.ListGpuClustersRequest";
  /**
   * ID of the folder to list GPU clusters in.
   *
   * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListGpuClustersResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListGpuClustersResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters GPU clusters listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [GpuCluster.name] field.
   * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
   * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name=my-schedule`.
   */
  filter: string;
  /**
   * A sorting expression that sorts GPU clusters listed in the response.
   *
   * The expression must specify the field name from [GpuCluster] and `asc`ending or `desc`ending order,
   * e.g. `createdAt desc`.
   *
   * Default value: `id asc`.
   */
  orderBy: string;
}

export interface ListGpuClustersResponse {
  $type: "yandex.cloud.compute.v1.ListGpuClustersResponse";
  /** List of GPU clusters in the specified folder. */
  gpuClusters: GpuCluster[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListGpuClustersRequest.page_size], use `next_page_token` as the value
   * for the [ListGpuClustersRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateGpuClusterRequest {
  $type: "yandex.cloud.compute.v1.CreateGpuClusterRequest";
  /**
   * ID of the folder to create a GPU cluster in.
   *
   * To get a folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the GPU cluster.
   *
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the GPU cluster. */
  description: string;
  /** GPU cluster labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /**
   * ID of the availability zone where the GPU cluster resides.
   * To get a list of available zones use the [yandex.cloud.compute.v1.ZoneService.List] request.
   */
  zoneId: string;
  /** Type of interconnect to use for this GPU cluster. */
  interconnectType: GpuInterconnectType;
}

export interface CreateGpuClusterRequest_LabelsEntry {
  $type: "yandex.cloud.compute.v1.CreateGpuClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateGpuClusterMetadata {
  $type: "yandex.cloud.compute.v1.CreateGpuClusterMetadata";
  /** ID of the GPU cluster that is being created. */
  gpuClusterId: string;
}

export interface UpdateGpuClusterRequest {
  $type: "yandex.cloud.compute.v1.UpdateGpuClusterRequest";
  /**
   * ID of the GPU cluster to update.
   *
   * To get the GPU cluster ID, make a [GpuClusterService.List] request.
   */
  gpuClusterId: string;
  /** Field mask that specifies which attributes of the GPU cluster should be updated. */
  updateMask?: FieldMask;
  /**
   * New name for the GPU cluster.
   *
   * The name must be unique within the folder.
   */
  name: string;
  /** New description of the GPU cluster. */
  description: string;
  /**
   * New GPU cluster labels as `key:value` pairs.
   *
   * Existing set of labels is completely replaced by the provided set, so if you just want
   * to add or remove a label:
   * 1. Get the current set of labels with a [GpuClusterService.Get] request.
   * 2. Add or remove a label in this set.
   * 3. Send the new set in this field.
   */
  labels: { [key: string]: string };
}

export interface UpdateGpuClusterRequest_LabelsEntry {
  $type: "yandex.cloud.compute.v1.UpdateGpuClusterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateGpuClusterMetadata {
  $type: "yandex.cloud.compute.v1.UpdateGpuClusterMetadata";
  /** ID of the GPU cluster that is being updated. */
  gpuClusterId: string;
}

export interface DeleteGpuClusterRequest {
  $type: "yandex.cloud.compute.v1.DeleteGpuClusterRequest";
  /**
   * ID of the GPU cluster to delete.
   *
   * To get a GPU cluster ID, make a [GpuClusterService.List] request.
   */
  gpuClusterId: string;
}

export interface DeleteGpuClusterMetadata {
  $type: "yandex.cloud.compute.v1.DeleteGpuClusterMetadata";
  /** ID of the GPU cluster that is being deleted. */
  gpuClusterId: string;
}

export interface ListGpuClusterOperationsRequest {
  $type: "yandex.cloud.compute.v1.ListGpuClusterOperationsRequest";
  /**
   * ID of the GPU cluster to list operations for.
   *
   * To get a GPU cluster ID, make a [GpuClusterService.List] request.
   */
  gpuClusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListGpuClusterOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListGpuClusterOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListGpuClusterOperationsResponse {
  $type: "yandex.cloud.compute.v1.ListGpuClusterOperationsResponse";
  /** List of operations for the specified GPU cluster. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListGpuClusterOperationsRequest.page_size], use `next_page_token` as the value
   * for the [ListGpuClusterOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListGpuClusterInstancesRequest {
  $type: "yandex.cloud.compute.v1.ListGpuClusterInstancesRequest";
  /**
   * ID of the GPU cluster to list instances in.
   *
   * To get a GPU cluster ID, make a [GpuClusterService.List] request.
   */
  gpuClusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListGpuClusterInstancesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListGpuClusterInstancesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * Currently you can use filtering only on the [Instance.name] field.
   */
  filter: string;
}

export interface ListGpuClusterInstancesResponse {
  $type: "yandex.cloud.compute.v1.ListGpuClusterInstancesResponse";
  /** List of instances in the specified GPU cluster. */
  instances: Instance[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListGpuClusterInstancesRequest.page_size], use `next_page_token` as the value
   * for the [ListGpuClusterInstancesRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

const baseGetGpuClusterRequest: object = {
  $type: "yandex.cloud.compute.v1.GetGpuClusterRequest",
  gpuClusterId: "",
};

export const GetGpuClusterRequest = {
  $type: "yandex.cloud.compute.v1.GetGpuClusterRequest" as const,

  encode(
    message: GetGpuClusterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.gpuClusterId !== "") {
      writer.uint32(10).string(message.gpuClusterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGpuClusterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetGpuClusterRequest } as GetGpuClusterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gpuClusterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGpuClusterRequest {
    const message = { ...baseGetGpuClusterRequest } as GetGpuClusterRequest;
    message.gpuClusterId =
      object.gpuClusterId !== undefined && object.gpuClusterId !== null
        ? String(object.gpuClusterId)
        : "";
    return message;
  },

  toJSON(message: GetGpuClusterRequest): unknown {
    const obj: any = {};
    message.gpuClusterId !== undefined &&
      (obj.gpuClusterId = message.gpuClusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetGpuClusterRequest>, I>>(
    object: I
  ): GetGpuClusterRequest {
    const message = { ...baseGetGpuClusterRequest } as GetGpuClusterRequest;
    message.gpuClusterId = object.gpuClusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetGpuClusterRequest.$type, GetGpuClusterRequest);

const baseListGpuClustersRequest: object = {
  $type: "yandex.cloud.compute.v1.ListGpuClustersRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
  orderBy: "",
};

export const ListGpuClustersRequest = {
  $type: "yandex.cloud.compute.v1.ListGpuClustersRequest" as const,

  encode(
    message: ListGpuClustersRequest,
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
    if (message.orderBy !== "") {
      writer.uint32(42).string(message.orderBy);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListGpuClustersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListGpuClustersRequest } as ListGpuClustersRequest;
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

  fromJSON(object: any): ListGpuClustersRequest {
    const message = { ...baseListGpuClustersRequest } as ListGpuClustersRequest;
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
    message.orderBy =
      object.orderBy !== undefined && object.orderBy !== null
        ? String(object.orderBy)
        : "";
    return message;
  },

  toJSON(message: ListGpuClustersRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    message.orderBy !== undefined && (obj.orderBy = message.orderBy);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListGpuClustersRequest>, I>>(
    object: I
  ): ListGpuClustersRequest {
    const message = { ...baseListGpuClustersRequest } as ListGpuClustersRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListGpuClustersRequest.$type, ListGpuClustersRequest);

const baseListGpuClustersResponse: object = {
  $type: "yandex.cloud.compute.v1.ListGpuClustersResponse",
  nextPageToken: "",
};

export const ListGpuClustersResponse = {
  $type: "yandex.cloud.compute.v1.ListGpuClustersResponse" as const,

  encode(
    message: ListGpuClustersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.gpuClusters) {
      GpuCluster.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListGpuClustersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListGpuClustersResponse,
    } as ListGpuClustersResponse;
    message.gpuClusters = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gpuClusters.push(GpuCluster.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListGpuClustersResponse {
    const message = {
      ...baseListGpuClustersResponse,
    } as ListGpuClustersResponse;
    message.gpuClusters = (object.gpuClusters ?? []).map((e: any) =>
      GpuCluster.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListGpuClustersResponse): unknown {
    const obj: any = {};
    if (message.gpuClusters) {
      obj.gpuClusters = message.gpuClusters.map((e) =>
        e ? GpuCluster.toJSON(e) : undefined
      );
    } else {
      obj.gpuClusters = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListGpuClustersResponse>, I>>(
    object: I
  ): ListGpuClustersResponse {
    const message = {
      ...baseListGpuClustersResponse,
    } as ListGpuClustersResponse;
    message.gpuClusters =
      object.gpuClusters?.map((e) => GpuCluster.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListGpuClustersResponse.$type, ListGpuClustersResponse);

const baseCreateGpuClusterRequest: object = {
  $type: "yandex.cloud.compute.v1.CreateGpuClusterRequest",
  folderId: "",
  name: "",
  description: "",
  zoneId: "",
  interconnectType: 0,
};

export const CreateGpuClusterRequest = {
  $type: "yandex.cloud.compute.v1.CreateGpuClusterRequest" as const,

  encode(
    message: CreateGpuClusterRequest,
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
      CreateGpuClusterRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.compute.v1.CreateGpuClusterRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.zoneId !== "") {
      writer.uint32(42).string(message.zoneId);
    }
    if (message.interconnectType !== 0) {
      writer.uint32(48).int32(message.interconnectType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateGpuClusterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateGpuClusterRequest,
    } as CreateGpuClusterRequest;
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
          const entry4 = CreateGpuClusterRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.zoneId = reader.string();
          break;
        case 6:
          message.interconnectType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateGpuClusterRequest {
    const message = {
      ...baseCreateGpuClusterRequest,
    } as CreateGpuClusterRequest;
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
    message.zoneId =
      object.zoneId !== undefined && object.zoneId !== null
        ? String(object.zoneId)
        : "";
    message.interconnectType =
      object.interconnectType !== undefined && object.interconnectType !== null
        ? gpuInterconnectTypeFromJSON(object.interconnectType)
        : 0;
    return message;
  },

  toJSON(message: CreateGpuClusterRequest): unknown {
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
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.interconnectType !== undefined &&
      (obj.interconnectType = gpuInterconnectTypeToJSON(
        message.interconnectType
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateGpuClusterRequest>, I>>(
    object: I
  ): CreateGpuClusterRequest {
    const message = {
      ...baseCreateGpuClusterRequest,
    } as CreateGpuClusterRequest;
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
    message.zoneId = object.zoneId ?? "";
    message.interconnectType = object.interconnectType ?? 0;
    return message;
  },
};

messageTypeRegistry.set(CreateGpuClusterRequest.$type, CreateGpuClusterRequest);

const baseCreateGpuClusterRequest_LabelsEntry: object = {
  $type: "yandex.cloud.compute.v1.CreateGpuClusterRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateGpuClusterRequest_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.CreateGpuClusterRequest.LabelsEntry" as const,

  encode(
    message: CreateGpuClusterRequest_LabelsEntry,
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
  ): CreateGpuClusterRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateGpuClusterRequest_LabelsEntry,
    } as CreateGpuClusterRequest_LabelsEntry;
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

  fromJSON(object: any): CreateGpuClusterRequest_LabelsEntry {
    const message = {
      ...baseCreateGpuClusterRequest_LabelsEntry,
    } as CreateGpuClusterRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateGpuClusterRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateGpuClusterRequest_LabelsEntry>, I>
  >(object: I): CreateGpuClusterRequest_LabelsEntry {
    const message = {
      ...baseCreateGpuClusterRequest_LabelsEntry,
    } as CreateGpuClusterRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateGpuClusterRequest_LabelsEntry.$type,
  CreateGpuClusterRequest_LabelsEntry
);

const baseCreateGpuClusterMetadata: object = {
  $type: "yandex.cloud.compute.v1.CreateGpuClusterMetadata",
  gpuClusterId: "",
};

export const CreateGpuClusterMetadata = {
  $type: "yandex.cloud.compute.v1.CreateGpuClusterMetadata" as const,

  encode(
    message: CreateGpuClusterMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.gpuClusterId !== "") {
      writer.uint32(10).string(message.gpuClusterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateGpuClusterMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateGpuClusterMetadata,
    } as CreateGpuClusterMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gpuClusterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateGpuClusterMetadata {
    const message = {
      ...baseCreateGpuClusterMetadata,
    } as CreateGpuClusterMetadata;
    message.gpuClusterId =
      object.gpuClusterId !== undefined && object.gpuClusterId !== null
        ? String(object.gpuClusterId)
        : "";
    return message;
  },

  toJSON(message: CreateGpuClusterMetadata): unknown {
    const obj: any = {};
    message.gpuClusterId !== undefined &&
      (obj.gpuClusterId = message.gpuClusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateGpuClusterMetadata>, I>>(
    object: I
  ): CreateGpuClusterMetadata {
    const message = {
      ...baseCreateGpuClusterMetadata,
    } as CreateGpuClusterMetadata;
    message.gpuClusterId = object.gpuClusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateGpuClusterMetadata.$type,
  CreateGpuClusterMetadata
);

const baseUpdateGpuClusterRequest: object = {
  $type: "yandex.cloud.compute.v1.UpdateGpuClusterRequest",
  gpuClusterId: "",
  name: "",
  description: "",
};

export const UpdateGpuClusterRequest = {
  $type: "yandex.cloud.compute.v1.UpdateGpuClusterRequest" as const,

  encode(
    message: UpdateGpuClusterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.gpuClusterId !== "") {
      writer.uint32(10).string(message.gpuClusterId);
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
      UpdateGpuClusterRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.compute.v1.UpdateGpuClusterRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateGpuClusterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateGpuClusterRequest,
    } as UpdateGpuClusterRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gpuClusterId = reader.string();
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
          const entry5 = UpdateGpuClusterRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateGpuClusterRequest {
    const message = {
      ...baseUpdateGpuClusterRequest,
    } as UpdateGpuClusterRequest;
    message.gpuClusterId =
      object.gpuClusterId !== undefined && object.gpuClusterId !== null
        ? String(object.gpuClusterId)
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
    return message;
  },

  toJSON(message: UpdateGpuClusterRequest): unknown {
    const obj: any = {};
    message.gpuClusterId !== undefined &&
      (obj.gpuClusterId = message.gpuClusterId);
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
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateGpuClusterRequest>, I>>(
    object: I
  ): UpdateGpuClusterRequest {
    const message = {
      ...baseUpdateGpuClusterRequest,
    } as UpdateGpuClusterRequest;
    message.gpuClusterId = object.gpuClusterId ?? "";
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
    return message;
  },
};

messageTypeRegistry.set(UpdateGpuClusterRequest.$type, UpdateGpuClusterRequest);

const baseUpdateGpuClusterRequest_LabelsEntry: object = {
  $type: "yandex.cloud.compute.v1.UpdateGpuClusterRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateGpuClusterRequest_LabelsEntry = {
  $type: "yandex.cloud.compute.v1.UpdateGpuClusterRequest.LabelsEntry" as const,

  encode(
    message: UpdateGpuClusterRequest_LabelsEntry,
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
  ): UpdateGpuClusterRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateGpuClusterRequest_LabelsEntry,
    } as UpdateGpuClusterRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateGpuClusterRequest_LabelsEntry {
    const message = {
      ...baseUpdateGpuClusterRequest_LabelsEntry,
    } as UpdateGpuClusterRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateGpuClusterRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateGpuClusterRequest_LabelsEntry>, I>
  >(object: I): UpdateGpuClusterRequest_LabelsEntry {
    const message = {
      ...baseUpdateGpuClusterRequest_LabelsEntry,
    } as UpdateGpuClusterRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateGpuClusterRequest_LabelsEntry.$type,
  UpdateGpuClusterRequest_LabelsEntry
);

const baseUpdateGpuClusterMetadata: object = {
  $type: "yandex.cloud.compute.v1.UpdateGpuClusterMetadata",
  gpuClusterId: "",
};

export const UpdateGpuClusterMetadata = {
  $type: "yandex.cloud.compute.v1.UpdateGpuClusterMetadata" as const,

  encode(
    message: UpdateGpuClusterMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.gpuClusterId !== "") {
      writer.uint32(10).string(message.gpuClusterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateGpuClusterMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateGpuClusterMetadata,
    } as UpdateGpuClusterMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gpuClusterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateGpuClusterMetadata {
    const message = {
      ...baseUpdateGpuClusterMetadata,
    } as UpdateGpuClusterMetadata;
    message.gpuClusterId =
      object.gpuClusterId !== undefined && object.gpuClusterId !== null
        ? String(object.gpuClusterId)
        : "";
    return message;
  },

  toJSON(message: UpdateGpuClusterMetadata): unknown {
    const obj: any = {};
    message.gpuClusterId !== undefined &&
      (obj.gpuClusterId = message.gpuClusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateGpuClusterMetadata>, I>>(
    object: I
  ): UpdateGpuClusterMetadata {
    const message = {
      ...baseUpdateGpuClusterMetadata,
    } as UpdateGpuClusterMetadata;
    message.gpuClusterId = object.gpuClusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateGpuClusterMetadata.$type,
  UpdateGpuClusterMetadata
);

const baseDeleteGpuClusterRequest: object = {
  $type: "yandex.cloud.compute.v1.DeleteGpuClusterRequest",
  gpuClusterId: "",
};

export const DeleteGpuClusterRequest = {
  $type: "yandex.cloud.compute.v1.DeleteGpuClusterRequest" as const,

  encode(
    message: DeleteGpuClusterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.gpuClusterId !== "") {
      writer.uint32(10).string(message.gpuClusterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteGpuClusterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteGpuClusterRequest,
    } as DeleteGpuClusterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gpuClusterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteGpuClusterRequest {
    const message = {
      ...baseDeleteGpuClusterRequest,
    } as DeleteGpuClusterRequest;
    message.gpuClusterId =
      object.gpuClusterId !== undefined && object.gpuClusterId !== null
        ? String(object.gpuClusterId)
        : "";
    return message;
  },

  toJSON(message: DeleteGpuClusterRequest): unknown {
    const obj: any = {};
    message.gpuClusterId !== undefined &&
      (obj.gpuClusterId = message.gpuClusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteGpuClusterRequest>, I>>(
    object: I
  ): DeleteGpuClusterRequest {
    const message = {
      ...baseDeleteGpuClusterRequest,
    } as DeleteGpuClusterRequest;
    message.gpuClusterId = object.gpuClusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteGpuClusterRequest.$type, DeleteGpuClusterRequest);

const baseDeleteGpuClusterMetadata: object = {
  $type: "yandex.cloud.compute.v1.DeleteGpuClusterMetadata",
  gpuClusterId: "",
};

export const DeleteGpuClusterMetadata = {
  $type: "yandex.cloud.compute.v1.DeleteGpuClusterMetadata" as const,

  encode(
    message: DeleteGpuClusterMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.gpuClusterId !== "") {
      writer.uint32(10).string(message.gpuClusterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteGpuClusterMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteGpuClusterMetadata,
    } as DeleteGpuClusterMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gpuClusterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteGpuClusterMetadata {
    const message = {
      ...baseDeleteGpuClusterMetadata,
    } as DeleteGpuClusterMetadata;
    message.gpuClusterId =
      object.gpuClusterId !== undefined && object.gpuClusterId !== null
        ? String(object.gpuClusterId)
        : "";
    return message;
  },

  toJSON(message: DeleteGpuClusterMetadata): unknown {
    const obj: any = {};
    message.gpuClusterId !== undefined &&
      (obj.gpuClusterId = message.gpuClusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteGpuClusterMetadata>, I>>(
    object: I
  ): DeleteGpuClusterMetadata {
    const message = {
      ...baseDeleteGpuClusterMetadata,
    } as DeleteGpuClusterMetadata;
    message.gpuClusterId = object.gpuClusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteGpuClusterMetadata.$type,
  DeleteGpuClusterMetadata
);

const baseListGpuClusterOperationsRequest: object = {
  $type: "yandex.cloud.compute.v1.ListGpuClusterOperationsRequest",
  gpuClusterId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListGpuClusterOperationsRequest = {
  $type: "yandex.cloud.compute.v1.ListGpuClusterOperationsRequest" as const,

  encode(
    message: ListGpuClusterOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.gpuClusterId !== "") {
      writer.uint32(10).string(message.gpuClusterId);
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
  ): ListGpuClusterOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListGpuClusterOperationsRequest,
    } as ListGpuClusterOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gpuClusterId = reader.string();
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

  fromJSON(object: any): ListGpuClusterOperationsRequest {
    const message = {
      ...baseListGpuClusterOperationsRequest,
    } as ListGpuClusterOperationsRequest;
    message.gpuClusterId =
      object.gpuClusterId !== undefined && object.gpuClusterId !== null
        ? String(object.gpuClusterId)
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

  toJSON(message: ListGpuClusterOperationsRequest): unknown {
    const obj: any = {};
    message.gpuClusterId !== undefined &&
      (obj.gpuClusterId = message.gpuClusterId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListGpuClusterOperationsRequest>, I>>(
    object: I
  ): ListGpuClusterOperationsRequest {
    const message = {
      ...baseListGpuClusterOperationsRequest,
    } as ListGpuClusterOperationsRequest;
    message.gpuClusterId = object.gpuClusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListGpuClusterOperationsRequest.$type,
  ListGpuClusterOperationsRequest
);

const baseListGpuClusterOperationsResponse: object = {
  $type: "yandex.cloud.compute.v1.ListGpuClusterOperationsResponse",
  nextPageToken: "",
};

export const ListGpuClusterOperationsResponse = {
  $type: "yandex.cloud.compute.v1.ListGpuClusterOperationsResponse" as const,

  encode(
    message: ListGpuClusterOperationsResponse,
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
  ): ListGpuClusterOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListGpuClusterOperationsResponse,
    } as ListGpuClusterOperationsResponse;
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

  fromJSON(object: any): ListGpuClusterOperationsResponse {
    const message = {
      ...baseListGpuClusterOperationsResponse,
    } as ListGpuClusterOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListGpuClusterOperationsResponse): unknown {
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

  fromPartial<
    I extends Exact<DeepPartial<ListGpuClusterOperationsResponse>, I>
  >(object: I): ListGpuClusterOperationsResponse {
    const message = {
      ...baseListGpuClusterOperationsResponse,
    } as ListGpuClusterOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListGpuClusterOperationsResponse.$type,
  ListGpuClusterOperationsResponse
);

const baseListGpuClusterInstancesRequest: object = {
  $type: "yandex.cloud.compute.v1.ListGpuClusterInstancesRequest",
  gpuClusterId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListGpuClusterInstancesRequest = {
  $type: "yandex.cloud.compute.v1.ListGpuClusterInstancesRequest" as const,

  encode(
    message: ListGpuClusterInstancesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.gpuClusterId !== "") {
      writer.uint32(10).string(message.gpuClusterId);
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
  ): ListGpuClusterInstancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListGpuClusterInstancesRequest,
    } as ListGpuClusterInstancesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gpuClusterId = reader.string();
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

  fromJSON(object: any): ListGpuClusterInstancesRequest {
    const message = {
      ...baseListGpuClusterInstancesRequest,
    } as ListGpuClusterInstancesRequest;
    message.gpuClusterId =
      object.gpuClusterId !== undefined && object.gpuClusterId !== null
        ? String(object.gpuClusterId)
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

  toJSON(message: ListGpuClusterInstancesRequest): unknown {
    const obj: any = {};
    message.gpuClusterId !== undefined &&
      (obj.gpuClusterId = message.gpuClusterId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListGpuClusterInstancesRequest>, I>>(
    object: I
  ): ListGpuClusterInstancesRequest {
    const message = {
      ...baseListGpuClusterInstancesRequest,
    } as ListGpuClusterInstancesRequest;
    message.gpuClusterId = object.gpuClusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListGpuClusterInstancesRequest.$type,
  ListGpuClusterInstancesRequest
);

const baseListGpuClusterInstancesResponse: object = {
  $type: "yandex.cloud.compute.v1.ListGpuClusterInstancesResponse",
  nextPageToken: "",
};

export const ListGpuClusterInstancesResponse = {
  $type: "yandex.cloud.compute.v1.ListGpuClusterInstancesResponse" as const,

  encode(
    message: ListGpuClusterInstancesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.instances) {
      Instance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListGpuClusterInstancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListGpuClusterInstancesResponse,
    } as ListGpuClusterInstancesResponse;
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

  fromJSON(object: any): ListGpuClusterInstancesResponse {
    const message = {
      ...baseListGpuClusterInstancesResponse,
    } as ListGpuClusterInstancesResponse;
    message.instances = (object.instances ?? []).map((e: any) =>
      Instance.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListGpuClusterInstancesResponse): unknown {
    const obj: any = {};
    if (message.instances) {
      obj.instances = message.instances.map((e) =>
        e ? Instance.toJSON(e) : undefined
      );
    } else {
      obj.instances = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListGpuClusterInstancesResponse>, I>>(
    object: I
  ): ListGpuClusterInstancesResponse {
    const message = {
      ...baseListGpuClusterInstancesResponse,
    } as ListGpuClusterInstancesResponse;
    message.instances =
      object.instances?.map((e) => Instance.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListGpuClusterInstancesResponse.$type,
  ListGpuClusterInstancesResponse
);

/** A set of methods for managing GPU clusters. */
export const GpuClusterServiceService = {
  /**
   * Returns the specified GPU cluster.
   *
   * To get the list of available GPU clusters, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.compute.v1.GpuClusterService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetGpuClusterRequest) =>
      Buffer.from(GetGpuClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetGpuClusterRequest.decode(value),
    responseSerialize: (value: GpuCluster) =>
      Buffer.from(GpuCluster.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GpuCluster.decode(value),
  },
  /** Retrieves the list of GPU clusters in the specified folder. */
  list: {
    path: "/yandex.cloud.compute.v1.GpuClusterService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListGpuClustersRequest) =>
      Buffer.from(ListGpuClustersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListGpuClustersRequest.decode(value),
    responseSerialize: (value: ListGpuClustersResponse) =>
      Buffer.from(ListGpuClustersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListGpuClustersResponse.decode(value),
  },
  /** Creates a GPU cluster in the specified folder. */
  create: {
    path: "/yandex.cloud.compute.v1.GpuClusterService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateGpuClusterRequest) =>
      Buffer.from(CreateGpuClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateGpuClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Updates the specified GPU cluster.
   *
   * Currently only name, description and labels can be updated.
   */
  update: {
    path: "/yandex.cloud.compute.v1.GpuClusterService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateGpuClusterRequest) =>
      Buffer.from(UpdateGpuClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateGpuClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Deletes the specified GPU cluster.
   *
   * GPU cluster can be deleted only if it doesn't have any instances associated with it.
   */
  delete: {
    path: "/yandex.cloud.compute.v1.GpuClusterService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteGpuClusterRequest) =>
      Buffer.from(DeleteGpuClusterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteGpuClusterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified GPU cluster. */
  listOperations: {
    path: "/yandex.cloud.compute.v1.GpuClusterService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListGpuClusterOperationsRequest) =>
      Buffer.from(ListGpuClusterOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListGpuClusterOperationsRequest.decode(value),
    responseSerialize: (value: ListGpuClusterOperationsResponse) =>
      Buffer.from(ListGpuClusterOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListGpuClusterOperationsResponse.decode(value),
  },
  /** List instances created in this GPU cluster. */
  listInstances: {
    path: "/yandex.cloud.compute.v1.GpuClusterService/ListInstances",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListGpuClusterInstancesRequest) =>
      Buffer.from(ListGpuClusterInstancesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListGpuClusterInstancesRequest.decode(value),
    responseSerialize: (value: ListGpuClusterInstancesResponse) =>
      Buffer.from(ListGpuClusterInstancesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListGpuClusterInstancesResponse.decode(value),
  },
} as const;

export interface GpuClusterServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified GPU cluster.
   *
   * To get the list of available GPU clusters, make a [List] request.
   */
  get: handleUnaryCall<GetGpuClusterRequest, GpuCluster>;
  /** Retrieves the list of GPU clusters in the specified folder. */
  list: handleUnaryCall<ListGpuClustersRequest, ListGpuClustersResponse>;
  /** Creates a GPU cluster in the specified folder. */
  create: handleUnaryCall<CreateGpuClusterRequest, Operation>;
  /**
   * Updates the specified GPU cluster.
   *
   * Currently only name, description and labels can be updated.
   */
  update: handleUnaryCall<UpdateGpuClusterRequest, Operation>;
  /**
   * Deletes the specified GPU cluster.
   *
   * GPU cluster can be deleted only if it doesn't have any instances associated with it.
   */
  delete: handleUnaryCall<DeleteGpuClusterRequest, Operation>;
  /** Lists operations for the specified GPU cluster. */
  listOperations: handleUnaryCall<
    ListGpuClusterOperationsRequest,
    ListGpuClusterOperationsResponse
  >;
  /** List instances created in this GPU cluster. */
  listInstances: handleUnaryCall<
    ListGpuClusterInstancesRequest,
    ListGpuClusterInstancesResponse
  >;
}

export interface GpuClusterServiceClient extends Client {
  /**
   * Returns the specified GPU cluster.
   *
   * To get the list of available GPU clusters, make a [List] request.
   */
  get(
    request: GetGpuClusterRequest,
    callback: (error: ServiceError | null, response: GpuCluster) => void
  ): ClientUnaryCall;
  get(
    request: GetGpuClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GpuCluster) => void
  ): ClientUnaryCall;
  get(
    request: GetGpuClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GpuCluster) => void
  ): ClientUnaryCall;
  /** Retrieves the list of GPU clusters in the specified folder. */
  list(
    request: ListGpuClustersRequest,
    callback: (
      error: ServiceError | null,
      response: ListGpuClustersResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListGpuClustersRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListGpuClustersResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListGpuClustersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListGpuClustersResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates a GPU cluster in the specified folder. */
  create(
    request: CreateGpuClusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateGpuClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateGpuClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Updates the specified GPU cluster.
   *
   * Currently only name, description and labels can be updated.
   */
  update(
    request: UpdateGpuClusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateGpuClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateGpuClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Deletes the specified GPU cluster.
   *
   * GPU cluster can be deleted only if it doesn't have any instances associated with it.
   */
  delete(
    request: DeleteGpuClusterRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteGpuClusterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteGpuClusterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified GPU cluster. */
  listOperations(
    request: ListGpuClusterOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListGpuClusterOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListGpuClusterOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListGpuClusterOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListGpuClusterOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListGpuClusterOperationsResponse
    ) => void
  ): ClientUnaryCall;
  /** List instances created in this GPU cluster. */
  listInstances(
    request: ListGpuClusterInstancesRequest,
    callback: (
      error: ServiceError | null,
      response: ListGpuClusterInstancesResponse
    ) => void
  ): ClientUnaryCall;
  listInstances(
    request: ListGpuClusterInstancesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListGpuClusterInstancesResponse
    ) => void
  ): ClientUnaryCall;
  listInstances(
    request: ListGpuClusterInstancesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListGpuClusterInstancesResponse
    ) => void
  ): ClientUnaryCall;
}

export const GpuClusterServiceClient = makeGenericClientConstructor(
  GpuClusterServiceService,
  "yandex.cloud.compute.v1.GpuClusterService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): GpuClusterServiceClient;
  service: typeof GpuClusterServiceService;
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
