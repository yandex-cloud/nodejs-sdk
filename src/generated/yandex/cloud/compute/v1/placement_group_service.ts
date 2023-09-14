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
  PlacementGroup,
  SpreadPlacementStrategy,
  PartitionPlacementStrategy,
} from "../../../../yandex/cloud/compute/v1/placement_group";
import { Instance } from "../../../../yandex/cloud/compute/v1/instance";
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.compute.v1";

export interface GetPlacementGroupRequest {
  $type: "yandex.cloud.compute.v1.GetPlacementGroupRequest";
  /**
   * ID of the placement group to return.
   *
   * To get a placement group ID make a [PlacementGroupService.List] request.
   */
  placementGroupId: string;
}

export interface ListPlacementGroupsRequest {
  $type: "yandex.cloud.compute.v1.ListPlacementGroupsRequest";
  /**
   * ID of the folder to list placement groups in.
   *
   * To get the folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListPlacementGroupsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results,
   * set [page_token] to the [ListPlacementGroupsResponse.next_page_token]
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

export interface ListPlacementGroupsResponse {
  $type: "yandex.cloud.compute.v1.ListPlacementGroupsResponse";
  /** Lists placement groups in the specified folder. */
  placementGroups: PlacementGroup[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListPlacementGroupsRequest.page_size], use `next_page_token` as the value
   * for the [ListPlacementGroupsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreatePlacementGroupRequest {
  $type: "yandex.cloud.compute.v1.CreatePlacementGroupRequest";
  /**
   * ID of the folder to create a placement group in.
   *
   * To get a folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /** Name of the placement group. */
  name: string;
  /** Description of the placement group. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Anti-affinity placement strategy (`spread`). Instances are distributed over distinct failure domains. */
  spreadPlacementStrategy?: SpreadPlacementStrategy | undefined;
  partitionPlacementStrategy?: PartitionPlacementStrategy | undefined;
}

export interface CreatePlacementGroupRequest_LabelsEntry {
  $type: "yandex.cloud.compute.v1.CreatePlacementGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreatePlacementGroupMetadata {
  $type: "yandex.cloud.compute.v1.CreatePlacementGroupMetadata";
  /** ID of the placement group that is being created. */
  placementGroupId: string;
}

export interface UpdatePlacementGroupRequest {
  $type: "yandex.cloud.compute.v1.UpdatePlacementGroupRequest";
  /**
   * ID of the placement group to update.
   *
   * To get the placement group ID, use an [PlacementGroupService.List] request.
   */
  placementGroupId: string;
  /** Field mask that specifies which fields of the PlacementGroup resource should be updated. */
  updateMask?: FieldMask;
  /** Name of the placement group. */
  name: string;
  /** Description of the placement group. */
  description: string;
  /**
   * Resource labels as `key:value` pairs.
   *
   * The existing set of `labels` is completely replaced by the provided set.
   */
  labels: { [key: string]: string };
}

export interface UpdatePlacementGroupRequest_LabelsEntry {
  $type: "yandex.cloud.compute.v1.UpdatePlacementGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdatePlacementGroupMetadata {
  $type: "yandex.cloud.compute.v1.UpdatePlacementGroupMetadata";
  /** ID of the placement group that is being updated. */
  placementGroupId: string;
}

export interface DeletePlacementGroupRequest {
  $type: "yandex.cloud.compute.v1.DeletePlacementGroupRequest";
  /**
   * ID of the placement group to delete.
   *
   * To get the placement group ID, use [PlacementGroupService.List] request.
   */
  placementGroupId: string;
}

export interface DeletePlacementGroupMetadata {
  $type: "yandex.cloud.compute.v1.DeletePlacementGroupMetadata";
  /** ID of the placement group that is being deleted. */
  placementGroupId: string;
}

export interface ListPlacementGroupInstancesRequest {
  $type: "yandex.cloud.compute.v1.ListPlacementGroupInstancesRequest";
  /**
   * ID of the placement group to list instances for.
   *
   * To get the placement group ID, use [PlacementGroupService.List] request.
   */
  placementGroupId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListPlacementGroupInstancesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results,
   * set [page_token] to the [ListPlacementGroupInstancesResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
}

export interface ListPlacementGroupInstancesResponse {
  $type: "yandex.cloud.compute.v1.ListPlacementGroupInstancesResponse";
  /** Lists instances for the specified placement group. */
  instances: Instance[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is more than [ListPlacementGroupInstancesRequest.page_size], use
   * [next_page_token] as the value
   * for the [ListPlacementGroupInstancesRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListPlacementGroupOperationsRequest {
  $type: "yandex.cloud.compute.v1.ListPlacementGroupOperationsRequest";
  /**
   * ID of the placement group to list operations for.
   *
   * To get the placement group ID, use [PlacementGroupService.List] request.
   */
  placementGroupId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListPlacementGroupOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListPlacementGroupOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListPlacementGroupOperationsResponse {
  $type: "yandex.cloud.compute.v1.ListPlacementGroupOperationsResponse";
  /** List of operations for the specified placement group. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListPlacementGroupOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListPlacementGroupOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

const baseGetPlacementGroupRequest: object = {
  $type: "yandex.cloud.compute.v1.GetPlacementGroupRequest",
  placementGroupId: "",
};

export const GetPlacementGroupRequest = {
  $type: "yandex.cloud.compute.v1.GetPlacementGroupRequest" as const,

  encode(
    message: GetPlacementGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.placementGroupId !== "") {
      writer.uint32(10).string(message.placementGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetPlacementGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetPlacementGroupRequest,
    } as GetPlacementGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.placementGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetPlacementGroupRequest {
    const message = {
      ...baseGetPlacementGroupRequest,
    } as GetPlacementGroupRequest;
    message.placementGroupId =
      object.placementGroupId !== undefined && object.placementGroupId !== null
        ? String(object.placementGroupId)
        : "";
    return message;
  },

  toJSON(message: GetPlacementGroupRequest): unknown {
    const obj: any = {};
    message.placementGroupId !== undefined &&
      (obj.placementGroupId = message.placementGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPlacementGroupRequest>, I>>(
    object: I
  ): GetPlacementGroupRequest {
    const message = {
      ...baseGetPlacementGroupRequest,
    } as GetPlacementGroupRequest;
    message.placementGroupId = object.placementGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  GetPlacementGroupRequest.$type,
  GetPlacementGroupRequest
);

const baseListPlacementGroupsRequest: object = {
  $type: "yandex.cloud.compute.v1.ListPlacementGroupsRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
  orderBy: "",
};

export const ListPlacementGroupsRequest = {
  $type: "yandex.cloud.compute.v1.ListPlacementGroupsRequest" as const,

  encode(
    message: ListPlacementGroupsRequest,
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
  ): ListPlacementGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListPlacementGroupsRequest,
    } as ListPlacementGroupsRequest;
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

  fromJSON(object: any): ListPlacementGroupsRequest {
    const message = {
      ...baseListPlacementGroupsRequest,
    } as ListPlacementGroupsRequest;
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

  toJSON(message: ListPlacementGroupsRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    message.orderBy !== undefined && (obj.orderBy = message.orderBy);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListPlacementGroupsRequest>, I>>(
    object: I
  ): ListPlacementGroupsRequest {
    const message = {
      ...baseListPlacementGroupsRequest,
    } as ListPlacementGroupsRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListPlacementGroupsRequest.$type,
  ListPlacementGroupsRequest
);

const baseListPlacementGroupsResponse: object = {
  $type: "yandex.cloud.compute.v1.ListPlacementGroupsResponse",
  nextPageToken: "",
};

export const ListPlacementGroupsResponse = {
  $type: "yandex.cloud.compute.v1.ListPlacementGroupsResponse" as const,

  encode(
    message: ListPlacementGroupsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.placementGroups) {
      PlacementGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListPlacementGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListPlacementGroupsResponse,
    } as ListPlacementGroupsResponse;
    message.placementGroups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.placementGroups.push(
            PlacementGroup.decode(reader, reader.uint32())
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

  fromJSON(object: any): ListPlacementGroupsResponse {
    const message = {
      ...baseListPlacementGroupsResponse,
    } as ListPlacementGroupsResponse;
    message.placementGroups = (object.placementGroups ?? []).map((e: any) =>
      PlacementGroup.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListPlacementGroupsResponse): unknown {
    const obj: any = {};
    if (message.placementGroups) {
      obj.placementGroups = message.placementGroups.map((e) =>
        e ? PlacementGroup.toJSON(e) : undefined
      );
    } else {
      obj.placementGroups = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListPlacementGroupsResponse>, I>>(
    object: I
  ): ListPlacementGroupsResponse {
    const message = {
      ...baseListPlacementGroupsResponse,
    } as ListPlacementGroupsResponse;
    message.placementGroups =
      object.placementGroups?.map((e) => PlacementGroup.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListPlacementGroupsResponse.$type,
  ListPlacementGroupsResponse
);

const baseCreatePlacementGroupRequest: object = {
  $type: "yandex.cloud.compute.v1.CreatePlacementGroupRequest",
  folderId: "",
  name: "",
  description: "",
};

export const CreatePlacementGroupRequest = {
  $type: "yandex.cloud.compute.v1.CreatePlacementGroupRequest" as const,

  encode(
    message: CreatePlacementGroupRequest,
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
      CreatePlacementGroupRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.compute.v1.CreatePlacementGroupRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.spreadPlacementStrategy !== undefined) {
      SpreadPlacementStrategy.encode(
        message.spreadPlacementStrategy,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.partitionPlacementStrategy !== undefined) {
      PartitionPlacementStrategy.encode(
        message.partitionPlacementStrategy,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreatePlacementGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreatePlacementGroupRequest,
    } as CreatePlacementGroupRequest;
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
          const entry4 = CreatePlacementGroupRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.spreadPlacementStrategy = SpreadPlacementStrategy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.partitionPlacementStrategy =
            PartitionPlacementStrategy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreatePlacementGroupRequest {
    const message = {
      ...baseCreatePlacementGroupRequest,
    } as CreatePlacementGroupRequest;
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
    message.spreadPlacementStrategy =
      object.spreadPlacementStrategy !== undefined &&
      object.spreadPlacementStrategy !== null
        ? SpreadPlacementStrategy.fromJSON(object.spreadPlacementStrategy)
        : undefined;
    message.partitionPlacementStrategy =
      object.partitionPlacementStrategy !== undefined &&
      object.partitionPlacementStrategy !== null
        ? PartitionPlacementStrategy.fromJSON(object.partitionPlacementStrategy)
        : undefined;
    return message;
  },

  toJSON(message: CreatePlacementGroupRequest): unknown {
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
    message.spreadPlacementStrategy !== undefined &&
      (obj.spreadPlacementStrategy = message.spreadPlacementStrategy
        ? SpreadPlacementStrategy.toJSON(message.spreadPlacementStrategy)
        : undefined);
    message.partitionPlacementStrategy !== undefined &&
      (obj.partitionPlacementStrategy = message.partitionPlacementStrategy
        ? PartitionPlacementStrategy.toJSON(message.partitionPlacementStrategy)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreatePlacementGroupRequest>, I>>(
    object: I
  ): CreatePlacementGroupRequest {
    const message = {
      ...baseCreatePlacementGroupRequest,
    } as CreatePlacementGroupRequest;
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
    message.spreadPlacementStrategy =
      object.spreadPlacementStrategy !== undefined &&
      object.spreadPlacementStrategy !== null
        ? SpreadPlacementStrategy.fromPartial(object.spreadPlacementStrategy)
        : undefined;
    message.partitionPlacementStrategy =
      object.partitionPlacementStrategy !== undefined &&
      object.partitionPlacementStrategy !== null
        ? PartitionPlacementStrategy.fromPartial(
            object.partitionPlacementStrategy
          )
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  CreatePlacementGroupRequest.$type,
  CreatePlacementGroupRequest
);

const baseCreatePlacementGroupRequest_LabelsEntry: object = {
  $type: "yandex.cloud.compute.v1.CreatePlacementGroupRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreatePlacementGroupRequest_LabelsEntry = {
  $type:
    "yandex.cloud.compute.v1.CreatePlacementGroupRequest.LabelsEntry" as const,

  encode(
    message: CreatePlacementGroupRequest_LabelsEntry,
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
  ): CreatePlacementGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreatePlacementGroupRequest_LabelsEntry,
    } as CreatePlacementGroupRequest_LabelsEntry;
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

  fromJSON(object: any): CreatePlacementGroupRequest_LabelsEntry {
    const message = {
      ...baseCreatePlacementGroupRequest_LabelsEntry,
    } as CreatePlacementGroupRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreatePlacementGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreatePlacementGroupRequest_LabelsEntry>, I>
  >(object: I): CreatePlacementGroupRequest_LabelsEntry {
    const message = {
      ...baseCreatePlacementGroupRequest_LabelsEntry,
    } as CreatePlacementGroupRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreatePlacementGroupRequest_LabelsEntry.$type,
  CreatePlacementGroupRequest_LabelsEntry
);

const baseCreatePlacementGroupMetadata: object = {
  $type: "yandex.cloud.compute.v1.CreatePlacementGroupMetadata",
  placementGroupId: "",
};

export const CreatePlacementGroupMetadata = {
  $type: "yandex.cloud.compute.v1.CreatePlacementGroupMetadata" as const,

  encode(
    message: CreatePlacementGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.placementGroupId !== "") {
      writer.uint32(10).string(message.placementGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreatePlacementGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreatePlacementGroupMetadata,
    } as CreatePlacementGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.placementGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreatePlacementGroupMetadata {
    const message = {
      ...baseCreatePlacementGroupMetadata,
    } as CreatePlacementGroupMetadata;
    message.placementGroupId =
      object.placementGroupId !== undefined && object.placementGroupId !== null
        ? String(object.placementGroupId)
        : "";
    return message;
  },

  toJSON(message: CreatePlacementGroupMetadata): unknown {
    const obj: any = {};
    message.placementGroupId !== undefined &&
      (obj.placementGroupId = message.placementGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreatePlacementGroupMetadata>, I>>(
    object: I
  ): CreatePlacementGroupMetadata {
    const message = {
      ...baseCreatePlacementGroupMetadata,
    } as CreatePlacementGroupMetadata;
    message.placementGroupId = object.placementGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreatePlacementGroupMetadata.$type,
  CreatePlacementGroupMetadata
);

const baseUpdatePlacementGroupRequest: object = {
  $type: "yandex.cloud.compute.v1.UpdatePlacementGroupRequest",
  placementGroupId: "",
  name: "",
  description: "",
};

export const UpdatePlacementGroupRequest = {
  $type: "yandex.cloud.compute.v1.UpdatePlacementGroupRequest" as const,

  encode(
    message: UpdatePlacementGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.placementGroupId !== "") {
      writer.uint32(10).string(message.placementGroupId);
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
      UpdatePlacementGroupRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.compute.v1.UpdatePlacementGroupRequest.LabelsEntry",
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
  ): UpdatePlacementGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdatePlacementGroupRequest,
    } as UpdatePlacementGroupRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.placementGroupId = reader.string();
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
          const entry5 = UpdatePlacementGroupRequest_LabelsEntry.decode(
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

  fromJSON(object: any): UpdatePlacementGroupRequest {
    const message = {
      ...baseUpdatePlacementGroupRequest,
    } as UpdatePlacementGroupRequest;
    message.placementGroupId =
      object.placementGroupId !== undefined && object.placementGroupId !== null
        ? String(object.placementGroupId)
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

  toJSON(message: UpdatePlacementGroupRequest): unknown {
    const obj: any = {};
    message.placementGroupId !== undefined &&
      (obj.placementGroupId = message.placementGroupId);
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

  fromPartial<I extends Exact<DeepPartial<UpdatePlacementGroupRequest>, I>>(
    object: I
  ): UpdatePlacementGroupRequest {
    const message = {
      ...baseUpdatePlacementGroupRequest,
    } as UpdatePlacementGroupRequest;
    message.placementGroupId = object.placementGroupId ?? "";
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

messageTypeRegistry.set(
  UpdatePlacementGroupRequest.$type,
  UpdatePlacementGroupRequest
);

const baseUpdatePlacementGroupRequest_LabelsEntry: object = {
  $type: "yandex.cloud.compute.v1.UpdatePlacementGroupRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdatePlacementGroupRequest_LabelsEntry = {
  $type:
    "yandex.cloud.compute.v1.UpdatePlacementGroupRequest.LabelsEntry" as const,

  encode(
    message: UpdatePlacementGroupRequest_LabelsEntry,
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
  ): UpdatePlacementGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdatePlacementGroupRequest_LabelsEntry,
    } as UpdatePlacementGroupRequest_LabelsEntry;
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

  fromJSON(object: any): UpdatePlacementGroupRequest_LabelsEntry {
    const message = {
      ...baseUpdatePlacementGroupRequest_LabelsEntry,
    } as UpdatePlacementGroupRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdatePlacementGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdatePlacementGroupRequest_LabelsEntry>, I>
  >(object: I): UpdatePlacementGroupRequest_LabelsEntry {
    const message = {
      ...baseUpdatePlacementGroupRequest_LabelsEntry,
    } as UpdatePlacementGroupRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdatePlacementGroupRequest_LabelsEntry.$type,
  UpdatePlacementGroupRequest_LabelsEntry
);

const baseUpdatePlacementGroupMetadata: object = {
  $type: "yandex.cloud.compute.v1.UpdatePlacementGroupMetadata",
  placementGroupId: "",
};

export const UpdatePlacementGroupMetadata = {
  $type: "yandex.cloud.compute.v1.UpdatePlacementGroupMetadata" as const,

  encode(
    message: UpdatePlacementGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.placementGroupId !== "") {
      writer.uint32(10).string(message.placementGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdatePlacementGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdatePlacementGroupMetadata,
    } as UpdatePlacementGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.placementGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdatePlacementGroupMetadata {
    const message = {
      ...baseUpdatePlacementGroupMetadata,
    } as UpdatePlacementGroupMetadata;
    message.placementGroupId =
      object.placementGroupId !== undefined && object.placementGroupId !== null
        ? String(object.placementGroupId)
        : "";
    return message;
  },

  toJSON(message: UpdatePlacementGroupMetadata): unknown {
    const obj: any = {};
    message.placementGroupId !== undefined &&
      (obj.placementGroupId = message.placementGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdatePlacementGroupMetadata>, I>>(
    object: I
  ): UpdatePlacementGroupMetadata {
    const message = {
      ...baseUpdatePlacementGroupMetadata,
    } as UpdatePlacementGroupMetadata;
    message.placementGroupId = object.placementGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdatePlacementGroupMetadata.$type,
  UpdatePlacementGroupMetadata
);

const baseDeletePlacementGroupRequest: object = {
  $type: "yandex.cloud.compute.v1.DeletePlacementGroupRequest",
  placementGroupId: "",
};

export const DeletePlacementGroupRequest = {
  $type: "yandex.cloud.compute.v1.DeletePlacementGroupRequest" as const,

  encode(
    message: DeletePlacementGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.placementGroupId !== "") {
      writer.uint32(10).string(message.placementGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeletePlacementGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeletePlacementGroupRequest,
    } as DeletePlacementGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.placementGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeletePlacementGroupRequest {
    const message = {
      ...baseDeletePlacementGroupRequest,
    } as DeletePlacementGroupRequest;
    message.placementGroupId =
      object.placementGroupId !== undefined && object.placementGroupId !== null
        ? String(object.placementGroupId)
        : "";
    return message;
  },

  toJSON(message: DeletePlacementGroupRequest): unknown {
    const obj: any = {};
    message.placementGroupId !== undefined &&
      (obj.placementGroupId = message.placementGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeletePlacementGroupRequest>, I>>(
    object: I
  ): DeletePlacementGroupRequest {
    const message = {
      ...baseDeletePlacementGroupRequest,
    } as DeletePlacementGroupRequest;
    message.placementGroupId = object.placementGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeletePlacementGroupRequest.$type,
  DeletePlacementGroupRequest
);

const baseDeletePlacementGroupMetadata: object = {
  $type: "yandex.cloud.compute.v1.DeletePlacementGroupMetadata",
  placementGroupId: "",
};

export const DeletePlacementGroupMetadata = {
  $type: "yandex.cloud.compute.v1.DeletePlacementGroupMetadata" as const,

  encode(
    message: DeletePlacementGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.placementGroupId !== "") {
      writer.uint32(10).string(message.placementGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeletePlacementGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeletePlacementGroupMetadata,
    } as DeletePlacementGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.placementGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeletePlacementGroupMetadata {
    const message = {
      ...baseDeletePlacementGroupMetadata,
    } as DeletePlacementGroupMetadata;
    message.placementGroupId =
      object.placementGroupId !== undefined && object.placementGroupId !== null
        ? String(object.placementGroupId)
        : "";
    return message;
  },

  toJSON(message: DeletePlacementGroupMetadata): unknown {
    const obj: any = {};
    message.placementGroupId !== undefined &&
      (obj.placementGroupId = message.placementGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeletePlacementGroupMetadata>, I>>(
    object: I
  ): DeletePlacementGroupMetadata {
    const message = {
      ...baseDeletePlacementGroupMetadata,
    } as DeletePlacementGroupMetadata;
    message.placementGroupId = object.placementGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeletePlacementGroupMetadata.$type,
  DeletePlacementGroupMetadata
);

const baseListPlacementGroupInstancesRequest: object = {
  $type: "yandex.cloud.compute.v1.ListPlacementGroupInstancesRequest",
  placementGroupId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListPlacementGroupInstancesRequest = {
  $type: "yandex.cloud.compute.v1.ListPlacementGroupInstancesRequest" as const,

  encode(
    message: ListPlacementGroupInstancesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.placementGroupId !== "") {
      writer.uint32(10).string(message.placementGroupId);
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
  ): ListPlacementGroupInstancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListPlacementGroupInstancesRequest,
    } as ListPlacementGroupInstancesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.placementGroupId = reader.string();
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

  fromJSON(object: any): ListPlacementGroupInstancesRequest {
    const message = {
      ...baseListPlacementGroupInstancesRequest,
    } as ListPlacementGroupInstancesRequest;
    message.placementGroupId =
      object.placementGroupId !== undefined && object.placementGroupId !== null
        ? String(object.placementGroupId)
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

  toJSON(message: ListPlacementGroupInstancesRequest): unknown {
    const obj: any = {};
    message.placementGroupId !== undefined &&
      (obj.placementGroupId = message.placementGroupId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListPlacementGroupInstancesRequest>, I>
  >(object: I): ListPlacementGroupInstancesRequest {
    const message = {
      ...baseListPlacementGroupInstancesRequest,
    } as ListPlacementGroupInstancesRequest;
    message.placementGroupId = object.placementGroupId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListPlacementGroupInstancesRequest.$type,
  ListPlacementGroupInstancesRequest
);

const baseListPlacementGroupInstancesResponse: object = {
  $type: "yandex.cloud.compute.v1.ListPlacementGroupInstancesResponse",
  nextPageToken: "",
};

export const ListPlacementGroupInstancesResponse = {
  $type: "yandex.cloud.compute.v1.ListPlacementGroupInstancesResponse" as const,

  encode(
    message: ListPlacementGroupInstancesResponse,
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
  ): ListPlacementGroupInstancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListPlacementGroupInstancesResponse,
    } as ListPlacementGroupInstancesResponse;
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

  fromJSON(object: any): ListPlacementGroupInstancesResponse {
    const message = {
      ...baseListPlacementGroupInstancesResponse,
    } as ListPlacementGroupInstancesResponse;
    message.instances = (object.instances ?? []).map((e: any) =>
      Instance.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListPlacementGroupInstancesResponse): unknown {
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

  fromPartial<
    I extends Exact<DeepPartial<ListPlacementGroupInstancesResponse>, I>
  >(object: I): ListPlacementGroupInstancesResponse {
    const message = {
      ...baseListPlacementGroupInstancesResponse,
    } as ListPlacementGroupInstancesResponse;
    message.instances =
      object.instances?.map((e) => Instance.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListPlacementGroupInstancesResponse.$type,
  ListPlacementGroupInstancesResponse
);

const baseListPlacementGroupOperationsRequest: object = {
  $type: "yandex.cloud.compute.v1.ListPlacementGroupOperationsRequest",
  placementGroupId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListPlacementGroupOperationsRequest = {
  $type: "yandex.cloud.compute.v1.ListPlacementGroupOperationsRequest" as const,

  encode(
    message: ListPlacementGroupOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.placementGroupId !== "") {
      writer.uint32(10).string(message.placementGroupId);
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
  ): ListPlacementGroupOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListPlacementGroupOperationsRequest,
    } as ListPlacementGroupOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.placementGroupId = reader.string();
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

  fromJSON(object: any): ListPlacementGroupOperationsRequest {
    const message = {
      ...baseListPlacementGroupOperationsRequest,
    } as ListPlacementGroupOperationsRequest;
    message.placementGroupId =
      object.placementGroupId !== undefined && object.placementGroupId !== null
        ? String(object.placementGroupId)
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

  toJSON(message: ListPlacementGroupOperationsRequest): unknown {
    const obj: any = {};
    message.placementGroupId !== undefined &&
      (obj.placementGroupId = message.placementGroupId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListPlacementGroupOperationsRequest>, I>
  >(object: I): ListPlacementGroupOperationsRequest {
    const message = {
      ...baseListPlacementGroupOperationsRequest,
    } as ListPlacementGroupOperationsRequest;
    message.placementGroupId = object.placementGroupId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListPlacementGroupOperationsRequest.$type,
  ListPlacementGroupOperationsRequest
);

const baseListPlacementGroupOperationsResponse: object = {
  $type: "yandex.cloud.compute.v1.ListPlacementGroupOperationsResponse",
  nextPageToken: "",
};

export const ListPlacementGroupOperationsResponse = {
  $type:
    "yandex.cloud.compute.v1.ListPlacementGroupOperationsResponse" as const,

  encode(
    message: ListPlacementGroupOperationsResponse,
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
  ): ListPlacementGroupOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListPlacementGroupOperationsResponse,
    } as ListPlacementGroupOperationsResponse;
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

  fromJSON(object: any): ListPlacementGroupOperationsResponse {
    const message = {
      ...baseListPlacementGroupOperationsResponse,
    } as ListPlacementGroupOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListPlacementGroupOperationsResponse): unknown {
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
    I extends Exact<DeepPartial<ListPlacementGroupOperationsResponse>, I>
  >(object: I): ListPlacementGroupOperationsResponse {
    const message = {
      ...baseListPlacementGroupOperationsResponse,
    } as ListPlacementGroupOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListPlacementGroupOperationsResponse.$type,
  ListPlacementGroupOperationsResponse
);

/** A set of methods for managing placement groups. */
export const PlacementGroupServiceService = {
  /**
   * Returns the specified placement group.
   *
   * To get the list of all available placement groups, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.compute.v1.PlacementGroupService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetPlacementGroupRequest) =>
      Buffer.from(GetPlacementGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetPlacementGroupRequest.decode(value),
    responseSerialize: (value: PlacementGroup) =>
      Buffer.from(PlacementGroup.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PlacementGroup.decode(value),
  },
  /** Retrieves the list of placement groups in the specified folder. */
  list: {
    path: "/yandex.cloud.compute.v1.PlacementGroupService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListPlacementGroupsRequest) =>
      Buffer.from(ListPlacementGroupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListPlacementGroupsRequest.decode(value),
    responseSerialize: (value: ListPlacementGroupsResponse) =>
      Buffer.from(ListPlacementGroupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListPlacementGroupsResponse.decode(value),
  },
  /** Creates a placement group in the specified folder. */
  create: {
    path: "/yandex.cloud.compute.v1.PlacementGroupService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreatePlacementGroupRequest) =>
      Buffer.from(CreatePlacementGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreatePlacementGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified placement group. */
  update: {
    path: "/yandex.cloud.compute.v1.PlacementGroupService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdatePlacementGroupRequest) =>
      Buffer.from(UpdatePlacementGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdatePlacementGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified placement group. */
  delete: {
    path: "/yandex.cloud.compute.v1.PlacementGroupService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeletePlacementGroupRequest) =>
      Buffer.from(DeletePlacementGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeletePlacementGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists instances for the specified placement group. */
  listInstances: {
    path: "/yandex.cloud.compute.v1.PlacementGroupService/ListInstances",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListPlacementGroupInstancesRequest) =>
      Buffer.from(ListPlacementGroupInstancesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListPlacementGroupInstancesRequest.decode(value),
    responseSerialize: (value: ListPlacementGroupInstancesResponse) =>
      Buffer.from(ListPlacementGroupInstancesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListPlacementGroupInstancesResponse.decode(value),
  },
  /** Lists operations for the specified placement group. */
  listOperations: {
    path: "/yandex.cloud.compute.v1.PlacementGroupService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListPlacementGroupOperationsRequest) =>
      Buffer.from(ListPlacementGroupOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListPlacementGroupOperationsRequest.decode(value),
    responseSerialize: (value: ListPlacementGroupOperationsResponse) =>
      Buffer.from(ListPlacementGroupOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListPlacementGroupOperationsResponse.decode(value),
  },
} as const;

export interface PlacementGroupServiceServer
  extends UntypedServiceImplementation {
  /**
   * Returns the specified placement group.
   *
   * To get the list of all available placement groups, make a [List] request.
   */
  get: handleUnaryCall<GetPlacementGroupRequest, PlacementGroup>;
  /** Retrieves the list of placement groups in the specified folder. */
  list: handleUnaryCall<
    ListPlacementGroupsRequest,
    ListPlacementGroupsResponse
  >;
  /** Creates a placement group in the specified folder. */
  create: handleUnaryCall<CreatePlacementGroupRequest, Operation>;
  /** Updates the specified placement group. */
  update: handleUnaryCall<UpdatePlacementGroupRequest, Operation>;
  /** Deletes the specified placement group. */
  delete: handleUnaryCall<DeletePlacementGroupRequest, Operation>;
  /** Lists instances for the specified placement group. */
  listInstances: handleUnaryCall<
    ListPlacementGroupInstancesRequest,
    ListPlacementGroupInstancesResponse
  >;
  /** Lists operations for the specified placement group. */
  listOperations: handleUnaryCall<
    ListPlacementGroupOperationsRequest,
    ListPlacementGroupOperationsResponse
  >;
}

export interface PlacementGroupServiceClient extends Client {
  /**
   * Returns the specified placement group.
   *
   * To get the list of all available placement groups, make a [List] request.
   */
  get(
    request: GetPlacementGroupRequest,
    callback: (error: ServiceError | null, response: PlacementGroup) => void
  ): ClientUnaryCall;
  get(
    request: GetPlacementGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PlacementGroup) => void
  ): ClientUnaryCall;
  get(
    request: GetPlacementGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PlacementGroup) => void
  ): ClientUnaryCall;
  /** Retrieves the list of placement groups in the specified folder. */
  list(
    request: ListPlacementGroupsRequest,
    callback: (
      error: ServiceError | null,
      response: ListPlacementGroupsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListPlacementGroupsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListPlacementGroupsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListPlacementGroupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListPlacementGroupsResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates a placement group in the specified folder. */
  create(
    request: CreatePlacementGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreatePlacementGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreatePlacementGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified placement group. */
  update(
    request: UpdatePlacementGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdatePlacementGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdatePlacementGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified placement group. */
  delete(
    request: DeletePlacementGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeletePlacementGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeletePlacementGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists instances for the specified placement group. */
  listInstances(
    request: ListPlacementGroupInstancesRequest,
    callback: (
      error: ServiceError | null,
      response: ListPlacementGroupInstancesResponse
    ) => void
  ): ClientUnaryCall;
  listInstances(
    request: ListPlacementGroupInstancesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListPlacementGroupInstancesResponse
    ) => void
  ): ClientUnaryCall;
  listInstances(
    request: ListPlacementGroupInstancesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListPlacementGroupInstancesResponse
    ) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified placement group. */
  listOperations(
    request: ListPlacementGroupOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListPlacementGroupOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListPlacementGroupOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListPlacementGroupOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListPlacementGroupOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListPlacementGroupOperationsResponse
    ) => void
  ): ClientUnaryCall;
}

export const PlacementGroupServiceClient = makeGenericClientConstructor(
  PlacementGroupServiceService,
  "yandex.cloud.compute.v1.PlacementGroupService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): PlacementGroupServiceClient;
  service: typeof PlacementGroupServiceService;
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
