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
  DiskPlacementGroup,
  DiskSpreadPlacementStrategy,
  DiskPartitionPlacementStrategy,
} from "../../../../yandex/cloud/compute/v1/disk_placement_group";
import { Disk } from "../../../../yandex/cloud/compute/v1/disk";
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.compute.v1";

export interface GetDiskPlacementGroupRequest {
  $type: "yandex.cloud.compute.v1.GetDiskPlacementGroupRequest";
  /**
   * ID of the placement group to return.
   * To get the placement group ID, use [DiskPlacementGroupService.List] request.
   */
  diskPlacementGroupId: string;
}

export interface ListDiskPlacementGroupsRequest {
  $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupsRequest";
  /**
   * ID of the folder to list placement groups in.
   * To get the folder ID, use [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListDiskPlacementGroupsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results,
   * set [page_token] to the [ListDiskPlacementGroupsResponse.next_page_token]
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

export interface ListDiskPlacementGroupsResponse {
  $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupsResponse";
  /** Lists placement groups for the specified folder. */
  diskPlacementGroups: DiskPlacementGroup[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListDiskPlacementGroupsRequest.page_size], use
   * [next_page_token] as the value
   * for the [ListDiskPlacementGroupsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateDiskPlacementGroupRequest {
  $type: "yandex.cloud.compute.v1.CreateDiskPlacementGroupRequest";
  /**
   * ID of the folder to create a placement group in.
   * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /** Name of the placement group. */
  name: string;
  /** Description of the placement group. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /**
   * ID of the availability zone where the placement group resides.
   * To get a list of available zones use the [yandex.cloud.compute.v1.ZoneService.List] request.
   */
  zoneId: string;
  /** Distribute disks over distinct failure domains. */
  spreadPlacementStrategy?: DiskSpreadPlacementStrategy | undefined;
  /** Distribute disks over partitions. */
  partitionPlacementStrategy?: DiskPartitionPlacementStrategy | undefined;
}

export interface CreateDiskPlacementGroupRequest_LabelsEntry {
  $type: "yandex.cloud.compute.v1.CreateDiskPlacementGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateDiskPlacementGroupMetadata {
  $type: "yandex.cloud.compute.v1.CreateDiskPlacementGroupMetadata";
  /** ID of the placement group that is being created. */
  diskPlacementGroupId: string;
}

export interface UpdateDiskPlacementGroupRequest {
  $type: "yandex.cloud.compute.v1.UpdateDiskPlacementGroupRequest";
  /**
   * ID of the placement group to update.
   * To get the placement group ID, use an [DiskPlacementGroupService.List] request.
   */
  diskPlacementGroupId: string;
  /** Field mask that specifies which fields of the DiskPlacementGroup resource are going to be updated. */
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

export interface UpdateDiskPlacementGroupRequest_LabelsEntry {
  $type: "yandex.cloud.compute.v1.UpdateDiskPlacementGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateDiskPlacementGroupMetadata {
  $type: "yandex.cloud.compute.v1.UpdateDiskPlacementGroupMetadata";
  /** ID of the placement group that is being updated. */
  diskPlacementGroupId: string;
}

export interface DeleteDiskPlacementGroupRequest {
  $type: "yandex.cloud.compute.v1.DeleteDiskPlacementGroupRequest";
  /**
   * ID of the placement group to delete.
   * To get the placement group ID, use [DiskPlacementGroupService.List] request.
   */
  diskPlacementGroupId: string;
}

export interface DeleteDiskPlacementGroupMetadata {
  $type: "yandex.cloud.compute.v1.DeleteDiskPlacementGroupMetadata";
  /** ID of the placement group that is being deleted. */
  diskPlacementGroupId: string;
}

export interface ListDiskPlacementGroupDisksRequest {
  $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupDisksRequest";
  /**
   * ID of the placement group to list disks for.
   * To get the placement group ID, use [DiskPlacementGroupService.List] request.
   */
  diskPlacementGroupId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListDiskPlacementGroupDisksResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results,
   * set [page_token] to the [ListDiskPlacementGroupDisksResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
}

export interface ListDiskPlacementGroupDisksResponse {
  $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupDisksResponse";
  /** Lists disks for the specified placement group. */
  disks: Disk[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is more than [ListDiskPlacementGroupDisksRequest.page_size], use
   * [next_page_token] as the value
   * for the [ListDiskPlacementGroupDisksRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListDiskPlacementGroupOperationsRequest {
  $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupOperationsRequest";
  /**
   * ID of the placement group to list operations for.
   * To get the placement group ID, use [DiskPlacementGroupService.List] request.
   */
  diskPlacementGroupId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListDiskPlacementGroupOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListDiskPlacementGroupOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListDiskPlacementGroupOperationsResponse {
  $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupOperationsResponse";
  /** List of operations for the specified placement group. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListDiskPlacementGroupOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListDiskPlacementGroupOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

const baseGetDiskPlacementGroupRequest: object = {
  $type: "yandex.cloud.compute.v1.GetDiskPlacementGroupRequest",
  diskPlacementGroupId: "",
};

export const GetDiskPlacementGroupRequest = {
  $type: "yandex.cloud.compute.v1.GetDiskPlacementGroupRequest" as const,

  encode(
    message: GetDiskPlacementGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.diskPlacementGroupId !== "") {
      writer.uint32(10).string(message.diskPlacementGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetDiskPlacementGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetDiskPlacementGroupRequest,
    } as GetDiskPlacementGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.diskPlacementGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetDiskPlacementGroupRequest {
    const message = {
      ...baseGetDiskPlacementGroupRequest,
    } as GetDiskPlacementGroupRequest;
    message.diskPlacementGroupId =
      object.diskPlacementGroupId !== undefined &&
      object.diskPlacementGroupId !== null
        ? String(object.diskPlacementGroupId)
        : "";
    return message;
  },

  toJSON(message: GetDiskPlacementGroupRequest): unknown {
    const obj: any = {};
    message.diskPlacementGroupId !== undefined &&
      (obj.diskPlacementGroupId = message.diskPlacementGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetDiskPlacementGroupRequest>, I>>(
    object: I
  ): GetDiskPlacementGroupRequest {
    const message = {
      ...baseGetDiskPlacementGroupRequest,
    } as GetDiskPlacementGroupRequest;
    message.diskPlacementGroupId = object.diskPlacementGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  GetDiskPlacementGroupRequest.$type,
  GetDiskPlacementGroupRequest
);

const baseListDiskPlacementGroupsRequest: object = {
  $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupsRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
  orderBy: "",
};

export const ListDiskPlacementGroupsRequest = {
  $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupsRequest" as const,

  encode(
    message: ListDiskPlacementGroupsRequest,
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
  ): ListDiskPlacementGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListDiskPlacementGroupsRequest,
    } as ListDiskPlacementGroupsRequest;
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

  fromJSON(object: any): ListDiskPlacementGroupsRequest {
    const message = {
      ...baseListDiskPlacementGroupsRequest,
    } as ListDiskPlacementGroupsRequest;
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

  toJSON(message: ListDiskPlacementGroupsRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    message.orderBy !== undefined && (obj.orderBy = message.orderBy);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListDiskPlacementGroupsRequest>, I>>(
    object: I
  ): ListDiskPlacementGroupsRequest {
    const message = {
      ...baseListDiskPlacementGroupsRequest,
    } as ListDiskPlacementGroupsRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListDiskPlacementGroupsRequest.$type,
  ListDiskPlacementGroupsRequest
);

const baseListDiskPlacementGroupsResponse: object = {
  $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupsResponse",
  nextPageToken: "",
};

export const ListDiskPlacementGroupsResponse = {
  $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupsResponse" as const,

  encode(
    message: ListDiskPlacementGroupsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.diskPlacementGroups) {
      DiskPlacementGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListDiskPlacementGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListDiskPlacementGroupsResponse,
    } as ListDiskPlacementGroupsResponse;
    message.diskPlacementGroups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.diskPlacementGroups.push(
            DiskPlacementGroup.decode(reader, reader.uint32())
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

  fromJSON(object: any): ListDiskPlacementGroupsResponse {
    const message = {
      ...baseListDiskPlacementGroupsResponse,
    } as ListDiskPlacementGroupsResponse;
    message.diskPlacementGroups = (object.diskPlacementGroups ?? []).map(
      (e: any) => DiskPlacementGroup.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListDiskPlacementGroupsResponse): unknown {
    const obj: any = {};
    if (message.diskPlacementGroups) {
      obj.diskPlacementGroups = message.diskPlacementGroups.map((e) =>
        e ? DiskPlacementGroup.toJSON(e) : undefined
      );
    } else {
      obj.diskPlacementGroups = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListDiskPlacementGroupsResponse>, I>>(
    object: I
  ): ListDiskPlacementGroupsResponse {
    const message = {
      ...baseListDiskPlacementGroupsResponse,
    } as ListDiskPlacementGroupsResponse;
    message.diskPlacementGroups =
      object.diskPlacementGroups?.map((e) =>
        DiskPlacementGroup.fromPartial(e)
      ) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListDiskPlacementGroupsResponse.$type,
  ListDiskPlacementGroupsResponse
);

const baseCreateDiskPlacementGroupRequest: object = {
  $type: "yandex.cloud.compute.v1.CreateDiskPlacementGroupRequest",
  folderId: "",
  name: "",
  description: "",
  zoneId: "",
};

export const CreateDiskPlacementGroupRequest = {
  $type: "yandex.cloud.compute.v1.CreateDiskPlacementGroupRequest" as const,

  encode(
    message: CreateDiskPlacementGroupRequest,
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
      CreateDiskPlacementGroupRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.compute.v1.CreateDiskPlacementGroupRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.zoneId !== "") {
      writer.uint32(42).string(message.zoneId);
    }
    if (message.spreadPlacementStrategy !== undefined) {
      DiskSpreadPlacementStrategy.encode(
        message.spreadPlacementStrategy,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.partitionPlacementStrategy !== undefined) {
      DiskPartitionPlacementStrategy.encode(
        message.partitionPlacementStrategy,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateDiskPlacementGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateDiskPlacementGroupRequest,
    } as CreateDiskPlacementGroupRequest;
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
          const entry4 = CreateDiskPlacementGroupRequest_LabelsEntry.decode(
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
          message.spreadPlacementStrategy = DiskSpreadPlacementStrategy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.partitionPlacementStrategy =
            DiskPartitionPlacementStrategy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateDiskPlacementGroupRequest {
    const message = {
      ...baseCreateDiskPlacementGroupRequest,
    } as CreateDiskPlacementGroupRequest;
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
    message.spreadPlacementStrategy =
      object.spreadPlacementStrategy !== undefined &&
      object.spreadPlacementStrategy !== null
        ? DiskSpreadPlacementStrategy.fromJSON(object.spreadPlacementStrategy)
        : undefined;
    message.partitionPlacementStrategy =
      object.partitionPlacementStrategy !== undefined &&
      object.partitionPlacementStrategy !== null
        ? DiskPartitionPlacementStrategy.fromJSON(
            object.partitionPlacementStrategy
          )
        : undefined;
    return message;
  },

  toJSON(message: CreateDiskPlacementGroupRequest): unknown {
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
    message.spreadPlacementStrategy !== undefined &&
      (obj.spreadPlacementStrategy = message.spreadPlacementStrategy
        ? DiskSpreadPlacementStrategy.toJSON(message.spreadPlacementStrategy)
        : undefined);
    message.partitionPlacementStrategy !== undefined &&
      (obj.partitionPlacementStrategy = message.partitionPlacementStrategy
        ? DiskPartitionPlacementStrategy.toJSON(
            message.partitionPlacementStrategy
          )
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateDiskPlacementGroupRequest>, I>>(
    object: I
  ): CreateDiskPlacementGroupRequest {
    const message = {
      ...baseCreateDiskPlacementGroupRequest,
    } as CreateDiskPlacementGroupRequest;
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
    message.spreadPlacementStrategy =
      object.spreadPlacementStrategy !== undefined &&
      object.spreadPlacementStrategy !== null
        ? DiskSpreadPlacementStrategy.fromPartial(
            object.spreadPlacementStrategy
          )
        : undefined;
    message.partitionPlacementStrategy =
      object.partitionPlacementStrategy !== undefined &&
      object.partitionPlacementStrategy !== null
        ? DiskPartitionPlacementStrategy.fromPartial(
            object.partitionPlacementStrategy
          )
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  CreateDiskPlacementGroupRequest.$type,
  CreateDiskPlacementGroupRequest
);

const baseCreateDiskPlacementGroupRequest_LabelsEntry: object = {
  $type: "yandex.cloud.compute.v1.CreateDiskPlacementGroupRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateDiskPlacementGroupRequest_LabelsEntry = {
  $type:
    "yandex.cloud.compute.v1.CreateDiskPlacementGroupRequest.LabelsEntry" as const,

  encode(
    message: CreateDiskPlacementGroupRequest_LabelsEntry,
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
  ): CreateDiskPlacementGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateDiskPlacementGroupRequest_LabelsEntry,
    } as CreateDiskPlacementGroupRequest_LabelsEntry;
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

  fromJSON(object: any): CreateDiskPlacementGroupRequest_LabelsEntry {
    const message = {
      ...baseCreateDiskPlacementGroupRequest_LabelsEntry,
    } as CreateDiskPlacementGroupRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateDiskPlacementGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateDiskPlacementGroupRequest_LabelsEntry>, I>
  >(object: I): CreateDiskPlacementGroupRequest_LabelsEntry {
    const message = {
      ...baseCreateDiskPlacementGroupRequest_LabelsEntry,
    } as CreateDiskPlacementGroupRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateDiskPlacementGroupRequest_LabelsEntry.$type,
  CreateDiskPlacementGroupRequest_LabelsEntry
);

const baseCreateDiskPlacementGroupMetadata: object = {
  $type: "yandex.cloud.compute.v1.CreateDiskPlacementGroupMetadata",
  diskPlacementGroupId: "",
};

export const CreateDiskPlacementGroupMetadata = {
  $type: "yandex.cloud.compute.v1.CreateDiskPlacementGroupMetadata" as const,

  encode(
    message: CreateDiskPlacementGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.diskPlacementGroupId !== "") {
      writer.uint32(10).string(message.diskPlacementGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateDiskPlacementGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateDiskPlacementGroupMetadata,
    } as CreateDiskPlacementGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.diskPlacementGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateDiskPlacementGroupMetadata {
    const message = {
      ...baseCreateDiskPlacementGroupMetadata,
    } as CreateDiskPlacementGroupMetadata;
    message.diskPlacementGroupId =
      object.diskPlacementGroupId !== undefined &&
      object.diskPlacementGroupId !== null
        ? String(object.diskPlacementGroupId)
        : "";
    return message;
  },

  toJSON(message: CreateDiskPlacementGroupMetadata): unknown {
    const obj: any = {};
    message.diskPlacementGroupId !== undefined &&
      (obj.diskPlacementGroupId = message.diskPlacementGroupId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateDiskPlacementGroupMetadata>, I>
  >(object: I): CreateDiskPlacementGroupMetadata {
    const message = {
      ...baseCreateDiskPlacementGroupMetadata,
    } as CreateDiskPlacementGroupMetadata;
    message.diskPlacementGroupId = object.diskPlacementGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateDiskPlacementGroupMetadata.$type,
  CreateDiskPlacementGroupMetadata
);

const baseUpdateDiskPlacementGroupRequest: object = {
  $type: "yandex.cloud.compute.v1.UpdateDiskPlacementGroupRequest",
  diskPlacementGroupId: "",
  name: "",
  description: "",
};

export const UpdateDiskPlacementGroupRequest = {
  $type: "yandex.cloud.compute.v1.UpdateDiskPlacementGroupRequest" as const,

  encode(
    message: UpdateDiskPlacementGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.diskPlacementGroupId !== "") {
      writer.uint32(10).string(message.diskPlacementGroupId);
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
      UpdateDiskPlacementGroupRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.compute.v1.UpdateDiskPlacementGroupRequest.LabelsEntry",
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
  ): UpdateDiskPlacementGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateDiskPlacementGroupRequest,
    } as UpdateDiskPlacementGroupRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.diskPlacementGroupId = reader.string();
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
          const entry5 = UpdateDiskPlacementGroupRequest_LabelsEntry.decode(
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

  fromJSON(object: any): UpdateDiskPlacementGroupRequest {
    const message = {
      ...baseUpdateDiskPlacementGroupRequest,
    } as UpdateDiskPlacementGroupRequest;
    message.diskPlacementGroupId =
      object.diskPlacementGroupId !== undefined &&
      object.diskPlacementGroupId !== null
        ? String(object.diskPlacementGroupId)
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

  toJSON(message: UpdateDiskPlacementGroupRequest): unknown {
    const obj: any = {};
    message.diskPlacementGroupId !== undefined &&
      (obj.diskPlacementGroupId = message.diskPlacementGroupId);
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

  fromPartial<I extends Exact<DeepPartial<UpdateDiskPlacementGroupRequest>, I>>(
    object: I
  ): UpdateDiskPlacementGroupRequest {
    const message = {
      ...baseUpdateDiskPlacementGroupRequest,
    } as UpdateDiskPlacementGroupRequest;
    message.diskPlacementGroupId = object.diskPlacementGroupId ?? "";
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
  UpdateDiskPlacementGroupRequest.$type,
  UpdateDiskPlacementGroupRequest
);

const baseUpdateDiskPlacementGroupRequest_LabelsEntry: object = {
  $type: "yandex.cloud.compute.v1.UpdateDiskPlacementGroupRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateDiskPlacementGroupRequest_LabelsEntry = {
  $type:
    "yandex.cloud.compute.v1.UpdateDiskPlacementGroupRequest.LabelsEntry" as const,

  encode(
    message: UpdateDiskPlacementGroupRequest_LabelsEntry,
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
  ): UpdateDiskPlacementGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateDiskPlacementGroupRequest_LabelsEntry,
    } as UpdateDiskPlacementGroupRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateDiskPlacementGroupRequest_LabelsEntry {
    const message = {
      ...baseUpdateDiskPlacementGroupRequest_LabelsEntry,
    } as UpdateDiskPlacementGroupRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateDiskPlacementGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateDiskPlacementGroupRequest_LabelsEntry>, I>
  >(object: I): UpdateDiskPlacementGroupRequest_LabelsEntry {
    const message = {
      ...baseUpdateDiskPlacementGroupRequest_LabelsEntry,
    } as UpdateDiskPlacementGroupRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateDiskPlacementGroupRequest_LabelsEntry.$type,
  UpdateDiskPlacementGroupRequest_LabelsEntry
);

const baseUpdateDiskPlacementGroupMetadata: object = {
  $type: "yandex.cloud.compute.v1.UpdateDiskPlacementGroupMetadata",
  diskPlacementGroupId: "",
};

export const UpdateDiskPlacementGroupMetadata = {
  $type: "yandex.cloud.compute.v1.UpdateDiskPlacementGroupMetadata" as const,

  encode(
    message: UpdateDiskPlacementGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.diskPlacementGroupId !== "") {
      writer.uint32(10).string(message.diskPlacementGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateDiskPlacementGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateDiskPlacementGroupMetadata,
    } as UpdateDiskPlacementGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.diskPlacementGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateDiskPlacementGroupMetadata {
    const message = {
      ...baseUpdateDiskPlacementGroupMetadata,
    } as UpdateDiskPlacementGroupMetadata;
    message.diskPlacementGroupId =
      object.diskPlacementGroupId !== undefined &&
      object.diskPlacementGroupId !== null
        ? String(object.diskPlacementGroupId)
        : "";
    return message;
  },

  toJSON(message: UpdateDiskPlacementGroupMetadata): unknown {
    const obj: any = {};
    message.diskPlacementGroupId !== undefined &&
      (obj.diskPlacementGroupId = message.diskPlacementGroupId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateDiskPlacementGroupMetadata>, I>
  >(object: I): UpdateDiskPlacementGroupMetadata {
    const message = {
      ...baseUpdateDiskPlacementGroupMetadata,
    } as UpdateDiskPlacementGroupMetadata;
    message.diskPlacementGroupId = object.diskPlacementGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateDiskPlacementGroupMetadata.$type,
  UpdateDiskPlacementGroupMetadata
);

const baseDeleteDiskPlacementGroupRequest: object = {
  $type: "yandex.cloud.compute.v1.DeleteDiskPlacementGroupRequest",
  diskPlacementGroupId: "",
};

export const DeleteDiskPlacementGroupRequest = {
  $type: "yandex.cloud.compute.v1.DeleteDiskPlacementGroupRequest" as const,

  encode(
    message: DeleteDiskPlacementGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.diskPlacementGroupId !== "") {
      writer.uint32(10).string(message.diskPlacementGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteDiskPlacementGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteDiskPlacementGroupRequest,
    } as DeleteDiskPlacementGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.diskPlacementGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteDiskPlacementGroupRequest {
    const message = {
      ...baseDeleteDiskPlacementGroupRequest,
    } as DeleteDiskPlacementGroupRequest;
    message.diskPlacementGroupId =
      object.diskPlacementGroupId !== undefined &&
      object.diskPlacementGroupId !== null
        ? String(object.diskPlacementGroupId)
        : "";
    return message;
  },

  toJSON(message: DeleteDiskPlacementGroupRequest): unknown {
    const obj: any = {};
    message.diskPlacementGroupId !== undefined &&
      (obj.diskPlacementGroupId = message.diskPlacementGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteDiskPlacementGroupRequest>, I>>(
    object: I
  ): DeleteDiskPlacementGroupRequest {
    const message = {
      ...baseDeleteDiskPlacementGroupRequest,
    } as DeleteDiskPlacementGroupRequest;
    message.diskPlacementGroupId = object.diskPlacementGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteDiskPlacementGroupRequest.$type,
  DeleteDiskPlacementGroupRequest
);

const baseDeleteDiskPlacementGroupMetadata: object = {
  $type: "yandex.cloud.compute.v1.DeleteDiskPlacementGroupMetadata",
  diskPlacementGroupId: "",
};

export const DeleteDiskPlacementGroupMetadata = {
  $type: "yandex.cloud.compute.v1.DeleteDiskPlacementGroupMetadata" as const,

  encode(
    message: DeleteDiskPlacementGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.diskPlacementGroupId !== "") {
      writer.uint32(10).string(message.diskPlacementGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteDiskPlacementGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteDiskPlacementGroupMetadata,
    } as DeleteDiskPlacementGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.diskPlacementGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteDiskPlacementGroupMetadata {
    const message = {
      ...baseDeleteDiskPlacementGroupMetadata,
    } as DeleteDiskPlacementGroupMetadata;
    message.diskPlacementGroupId =
      object.diskPlacementGroupId !== undefined &&
      object.diskPlacementGroupId !== null
        ? String(object.diskPlacementGroupId)
        : "";
    return message;
  },

  toJSON(message: DeleteDiskPlacementGroupMetadata): unknown {
    const obj: any = {};
    message.diskPlacementGroupId !== undefined &&
      (obj.diskPlacementGroupId = message.diskPlacementGroupId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<DeleteDiskPlacementGroupMetadata>, I>
  >(object: I): DeleteDiskPlacementGroupMetadata {
    const message = {
      ...baseDeleteDiskPlacementGroupMetadata,
    } as DeleteDiskPlacementGroupMetadata;
    message.diskPlacementGroupId = object.diskPlacementGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteDiskPlacementGroupMetadata.$type,
  DeleteDiskPlacementGroupMetadata
);

const baseListDiskPlacementGroupDisksRequest: object = {
  $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupDisksRequest",
  diskPlacementGroupId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListDiskPlacementGroupDisksRequest = {
  $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupDisksRequest" as const,

  encode(
    message: ListDiskPlacementGroupDisksRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.diskPlacementGroupId !== "") {
      writer.uint32(10).string(message.diskPlacementGroupId);
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
  ): ListDiskPlacementGroupDisksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListDiskPlacementGroupDisksRequest,
    } as ListDiskPlacementGroupDisksRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.diskPlacementGroupId = reader.string();
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

  fromJSON(object: any): ListDiskPlacementGroupDisksRequest {
    const message = {
      ...baseListDiskPlacementGroupDisksRequest,
    } as ListDiskPlacementGroupDisksRequest;
    message.diskPlacementGroupId =
      object.diskPlacementGroupId !== undefined &&
      object.diskPlacementGroupId !== null
        ? String(object.diskPlacementGroupId)
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

  toJSON(message: ListDiskPlacementGroupDisksRequest): unknown {
    const obj: any = {};
    message.diskPlacementGroupId !== undefined &&
      (obj.diskPlacementGroupId = message.diskPlacementGroupId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListDiskPlacementGroupDisksRequest>, I>
  >(object: I): ListDiskPlacementGroupDisksRequest {
    const message = {
      ...baseListDiskPlacementGroupDisksRequest,
    } as ListDiskPlacementGroupDisksRequest;
    message.diskPlacementGroupId = object.diskPlacementGroupId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListDiskPlacementGroupDisksRequest.$type,
  ListDiskPlacementGroupDisksRequest
);

const baseListDiskPlacementGroupDisksResponse: object = {
  $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupDisksResponse",
  nextPageToken: "",
};

export const ListDiskPlacementGroupDisksResponse = {
  $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupDisksResponse" as const,

  encode(
    message: ListDiskPlacementGroupDisksResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.disks) {
      Disk.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListDiskPlacementGroupDisksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListDiskPlacementGroupDisksResponse,
    } as ListDiskPlacementGroupDisksResponse;
    message.disks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disks.push(Disk.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListDiskPlacementGroupDisksResponse {
    const message = {
      ...baseListDiskPlacementGroupDisksResponse,
    } as ListDiskPlacementGroupDisksResponse;
    message.disks = (object.disks ?? []).map((e: any) => Disk.fromJSON(e));
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListDiskPlacementGroupDisksResponse): unknown {
    const obj: any = {};
    if (message.disks) {
      obj.disks = message.disks.map((e) => (e ? Disk.toJSON(e) : undefined));
    } else {
      obj.disks = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListDiskPlacementGroupDisksResponse>, I>
  >(object: I): ListDiskPlacementGroupDisksResponse {
    const message = {
      ...baseListDiskPlacementGroupDisksResponse,
    } as ListDiskPlacementGroupDisksResponse;
    message.disks = object.disks?.map((e) => Disk.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListDiskPlacementGroupDisksResponse.$type,
  ListDiskPlacementGroupDisksResponse
);

const baseListDiskPlacementGroupOperationsRequest: object = {
  $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupOperationsRequest",
  diskPlacementGroupId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListDiskPlacementGroupOperationsRequest = {
  $type:
    "yandex.cloud.compute.v1.ListDiskPlacementGroupOperationsRequest" as const,

  encode(
    message: ListDiskPlacementGroupOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.diskPlacementGroupId !== "") {
      writer.uint32(10).string(message.diskPlacementGroupId);
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
  ): ListDiskPlacementGroupOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListDiskPlacementGroupOperationsRequest,
    } as ListDiskPlacementGroupOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.diskPlacementGroupId = reader.string();
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

  fromJSON(object: any): ListDiskPlacementGroupOperationsRequest {
    const message = {
      ...baseListDiskPlacementGroupOperationsRequest,
    } as ListDiskPlacementGroupOperationsRequest;
    message.diskPlacementGroupId =
      object.diskPlacementGroupId !== undefined &&
      object.diskPlacementGroupId !== null
        ? String(object.diskPlacementGroupId)
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

  toJSON(message: ListDiskPlacementGroupOperationsRequest): unknown {
    const obj: any = {};
    message.diskPlacementGroupId !== undefined &&
      (obj.diskPlacementGroupId = message.diskPlacementGroupId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListDiskPlacementGroupOperationsRequest>, I>
  >(object: I): ListDiskPlacementGroupOperationsRequest {
    const message = {
      ...baseListDiskPlacementGroupOperationsRequest,
    } as ListDiskPlacementGroupOperationsRequest;
    message.diskPlacementGroupId = object.diskPlacementGroupId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListDiskPlacementGroupOperationsRequest.$type,
  ListDiskPlacementGroupOperationsRequest
);

const baseListDiskPlacementGroupOperationsResponse: object = {
  $type: "yandex.cloud.compute.v1.ListDiskPlacementGroupOperationsResponse",
  nextPageToken: "",
};

export const ListDiskPlacementGroupOperationsResponse = {
  $type:
    "yandex.cloud.compute.v1.ListDiskPlacementGroupOperationsResponse" as const,

  encode(
    message: ListDiskPlacementGroupOperationsResponse,
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
  ): ListDiskPlacementGroupOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListDiskPlacementGroupOperationsResponse,
    } as ListDiskPlacementGroupOperationsResponse;
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

  fromJSON(object: any): ListDiskPlacementGroupOperationsResponse {
    const message = {
      ...baseListDiskPlacementGroupOperationsResponse,
    } as ListDiskPlacementGroupOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListDiskPlacementGroupOperationsResponse): unknown {
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
    I extends Exact<DeepPartial<ListDiskPlacementGroupOperationsResponse>, I>
  >(object: I): ListDiskPlacementGroupOperationsResponse {
    const message = {
      ...baseListDiskPlacementGroupOperationsResponse,
    } as ListDiskPlacementGroupOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListDiskPlacementGroupOperationsResponse.$type,
  ListDiskPlacementGroupOperationsResponse
);

/** A set of methods for managing DiskPlacementGroup resources. */
export const DiskPlacementGroupServiceService = {
  /** Returns the specified placement group. */
  get: {
    path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetDiskPlacementGroupRequest) =>
      Buffer.from(GetDiskPlacementGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetDiskPlacementGroupRequest.decode(value),
    responseSerialize: (value: DiskPlacementGroup) =>
      Buffer.from(DiskPlacementGroup.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DiskPlacementGroup.decode(value),
  },
  /** Retrieves the list of placement groups in the specified folder. */
  list: {
    path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDiskPlacementGroupsRequest) =>
      Buffer.from(ListDiskPlacementGroupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListDiskPlacementGroupsRequest.decode(value),
    responseSerialize: (value: ListDiskPlacementGroupsResponse) =>
      Buffer.from(ListDiskPlacementGroupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListDiskPlacementGroupsResponse.decode(value),
  },
  /** Creates a placement group in the specified folder. */
  create: {
    path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateDiskPlacementGroupRequest) =>
      Buffer.from(CreateDiskPlacementGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateDiskPlacementGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified placement group. */
  update: {
    path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateDiskPlacementGroupRequest) =>
      Buffer.from(UpdateDiskPlacementGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateDiskPlacementGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified placement group. */
  delete: {
    path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteDiskPlacementGroupRequest) =>
      Buffer.from(DeleteDiskPlacementGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteDiskPlacementGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists disks for the specified placement group. */
  listDisks: {
    path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/ListDisks",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDiskPlacementGroupDisksRequest) =>
      Buffer.from(ListDiskPlacementGroupDisksRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListDiskPlacementGroupDisksRequest.decode(value),
    responseSerialize: (value: ListDiskPlacementGroupDisksResponse) =>
      Buffer.from(ListDiskPlacementGroupDisksResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListDiskPlacementGroupDisksResponse.decode(value),
  },
  /** Lists operations for the specified placement group. */
  listOperations: {
    path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDiskPlacementGroupOperationsRequest) =>
      Buffer.from(
        ListDiskPlacementGroupOperationsRequest.encode(value).finish()
      ),
    requestDeserialize: (value: Buffer) =>
      ListDiskPlacementGroupOperationsRequest.decode(value),
    responseSerialize: (value: ListDiskPlacementGroupOperationsResponse) =>
      Buffer.from(
        ListDiskPlacementGroupOperationsResponse.encode(value).finish()
      ),
    responseDeserialize: (value: Buffer) =>
      ListDiskPlacementGroupOperationsResponse.decode(value),
  },
} as const;

export interface DiskPlacementGroupServiceServer
  extends UntypedServiceImplementation {
  /** Returns the specified placement group. */
  get: handleUnaryCall<GetDiskPlacementGroupRequest, DiskPlacementGroup>;
  /** Retrieves the list of placement groups in the specified folder. */
  list: handleUnaryCall<
    ListDiskPlacementGroupsRequest,
    ListDiskPlacementGroupsResponse
  >;
  /** Creates a placement group in the specified folder. */
  create: handleUnaryCall<CreateDiskPlacementGroupRequest, Operation>;
  /** Updates the specified placement group. */
  update: handleUnaryCall<UpdateDiskPlacementGroupRequest, Operation>;
  /** Deletes the specified placement group. */
  delete: handleUnaryCall<DeleteDiskPlacementGroupRequest, Operation>;
  /** Lists disks for the specified placement group. */
  listDisks: handleUnaryCall<
    ListDiskPlacementGroupDisksRequest,
    ListDiskPlacementGroupDisksResponse
  >;
  /** Lists operations for the specified placement group. */
  listOperations: handleUnaryCall<
    ListDiskPlacementGroupOperationsRequest,
    ListDiskPlacementGroupOperationsResponse
  >;
}

export interface DiskPlacementGroupServiceClient extends Client {
  /** Returns the specified placement group. */
  get(
    request: GetDiskPlacementGroupRequest,
    callback: (error: ServiceError | null, response: DiskPlacementGroup) => void
  ): ClientUnaryCall;
  get(
    request: GetDiskPlacementGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: DiskPlacementGroup) => void
  ): ClientUnaryCall;
  get(
    request: GetDiskPlacementGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: DiskPlacementGroup) => void
  ): ClientUnaryCall;
  /** Retrieves the list of placement groups in the specified folder. */
  list(
    request: ListDiskPlacementGroupsRequest,
    callback: (
      error: ServiceError | null,
      response: ListDiskPlacementGroupsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListDiskPlacementGroupsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListDiskPlacementGroupsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListDiskPlacementGroupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListDiskPlacementGroupsResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates a placement group in the specified folder. */
  create(
    request: CreateDiskPlacementGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateDiskPlacementGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateDiskPlacementGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified placement group. */
  update(
    request: UpdateDiskPlacementGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateDiskPlacementGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateDiskPlacementGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified placement group. */
  delete(
    request: DeleteDiskPlacementGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteDiskPlacementGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteDiskPlacementGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists disks for the specified placement group. */
  listDisks(
    request: ListDiskPlacementGroupDisksRequest,
    callback: (
      error: ServiceError | null,
      response: ListDiskPlacementGroupDisksResponse
    ) => void
  ): ClientUnaryCall;
  listDisks(
    request: ListDiskPlacementGroupDisksRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListDiskPlacementGroupDisksResponse
    ) => void
  ): ClientUnaryCall;
  listDisks(
    request: ListDiskPlacementGroupDisksRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListDiskPlacementGroupDisksResponse
    ) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified placement group. */
  listOperations(
    request: ListDiskPlacementGroupOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListDiskPlacementGroupOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListDiskPlacementGroupOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListDiskPlacementGroupOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListDiskPlacementGroupOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListDiskPlacementGroupOperationsResponse
    ) => void
  ): ClientUnaryCall;
}

export const DiskPlacementGroupServiceClient = makeGenericClientConstructor(
  DiskPlacementGroupServiceService,
  "yandex.cloud.compute.v1.DiskPlacementGroupService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): DiskPlacementGroupServiceClient;
  service: typeof DiskPlacementGroupServiceService;
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
