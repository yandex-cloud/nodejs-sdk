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
  TargetGroup,
  Target,
} from "../../../../yandex/cloud/loadbalancer/v1/target_group";
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.loadbalancer.v1";

export interface GetTargetGroupRequest {
  $type: "yandex.cloud.loadbalancer.v1.GetTargetGroupRequest";
  /**
   * ID of the TargetGroup resource to return.
   * To get the target group ID, use a [TargetGroupService.List] request.
   */
  targetGroupId: string;
}

export interface ListTargetGroupsRequest {
  $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupsRequest";
  /**
   * ID of the folder to list target groups in.
   * To get the folder ID, use a [TargetGroupService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListTargetGroupsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListTargetGroupsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can only filter by the [TargetGroup.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
}

export interface ListTargetGroupsResponse {
  $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupsResponse";
  /** List of TargetGroup resources. */
  targetGroups: TargetGroup[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListTargetGroupsRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListTargetGroupsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateTargetGroupRequest {
  $type: "yandex.cloud.loadbalancer.v1.CreateTargetGroupRequest";
  /**
   * ID of the folder to list target groups in.
   * To get the folder ID, use a [TargetGroupService.List] request.
   */
  folderId: string;
  /**
   * Name of the target group.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the target group. */
  description: string;
  /** Resource labels as `` key:value `` pairs. */
  labels: { [key: string]: string };
  /** ID of the availability zone where the target group resides. */
  regionId: string;
  /** List of targets within the target group. */
  targets: Target[];
}

export interface CreateTargetGroupRequest_LabelsEntry {
  $type: "yandex.cloud.loadbalancer.v1.CreateTargetGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateTargetGroupMetadata {
  $type: "yandex.cloud.loadbalancer.v1.CreateTargetGroupMetadata";
  /** ID of the target group that is being created. */
  targetGroupId: string;
}

export interface UpdateTargetGroupRequest {
  $type: "yandex.cloud.loadbalancer.v1.UpdateTargetGroupRequest";
  /**
   * ID of the TargetGroup resource to update.
   * To get the target group ID, use a [TargetGroupService.List] request.
   */
  targetGroupId: string;
  /** Field mask that specifies which fields of the TargetGroup resource are going to be updated. */
  updateMask?: FieldMask;
  /**
   * Name of the target group.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the target group. */
  description: string;
  /**
   * Resource labels as `` key:value `` pairs.
   *
   * The existing set of `` labels `` is completely replaced with the provided set.
   */
  labels: { [key: string]: string };
  /** A new list of targets for this target group. */
  targets: Target[];
}

export interface UpdateTargetGroupRequest_LabelsEntry {
  $type: "yandex.cloud.loadbalancer.v1.UpdateTargetGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateTargetGroupMetadata {
  $type: "yandex.cloud.loadbalancer.v1.UpdateTargetGroupMetadata";
  /** ID of the target group that is being updated. */
  targetGroupId: string;
}

export interface DeleteTargetGroupRequest {
  $type: "yandex.cloud.loadbalancer.v1.DeleteTargetGroupRequest";
  /**
   * ID of the target group to delete.
   * To get the target group ID, use a [TargetGroupService.List] request.
   */
  targetGroupId: string;
}

export interface DeleteTargetGroupMetadata {
  $type: "yandex.cloud.loadbalancer.v1.DeleteTargetGroupMetadata";
  /** ID of the target group that is being deleted. */
  targetGroupId: string;
}

export interface AddTargetsRequest {
  $type: "yandex.cloud.loadbalancer.v1.AddTargetsRequest";
  /**
   * ID of the TargetGroup resource to add targets to.
   * To get the target group ID, use a [TargetGroupService.List] request.
   */
  targetGroupId: string;
  /** List of targets to add to the target group. */
  targets: Target[];
}

export interface AddTargetsMetadata {
  $type: "yandex.cloud.loadbalancer.v1.AddTargetsMetadata";
  /** ID of the target group that targets are being added to. */
  targetGroupId: string;
}

export interface RemoveTargetsRequest {
  $type: "yandex.cloud.loadbalancer.v1.RemoveTargetsRequest";
  /**
   * ID of the target group to remove targets from.
   * To get the target group ID, use a [TargetGroupService.List] request.
   */
  targetGroupId: string;
  /** List of targets to remove from the target group. */
  targets: Target[];
}

export interface RemoveTargetsMetadata {
  $type: "yandex.cloud.loadbalancer.v1.RemoveTargetsMetadata";
  /** ID of the target group that targets are being removed from. */
  targetGroupId: string;
}

export interface ListTargetGroupOperationsRequest {
  $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupOperationsRequest";
  /**
   * ID of the TargetGroup resource to update.
   * To get the target group ID, use a [TargetGroupService.List] request.
   */
  targetGroupId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than [page_size], the service returns a [ListTargetGroupOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListTargetGroupOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListTargetGroupOperationsResponse {
  $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupOperationsResponse";
  /** List of operations for the specified target group. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListTargetGroupOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListTargetGroupOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

const baseGetTargetGroupRequest: object = {
  $type: "yandex.cloud.loadbalancer.v1.GetTargetGroupRequest",
  targetGroupId: "",
};

export const GetTargetGroupRequest = {
  $type: "yandex.cloud.loadbalancer.v1.GetTargetGroupRequest" as const,

  encode(
    message: GetTargetGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.targetGroupId !== "") {
      writer.uint32(10).string(message.targetGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetTargetGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetTargetGroupRequest } as GetTargetGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTargetGroupRequest {
    const message = { ...baseGetTargetGroupRequest } as GetTargetGroupRequest;
    message.targetGroupId =
      object.targetGroupId !== undefined && object.targetGroupId !== null
        ? String(object.targetGroupId)
        : "";
    return message;
  },

  toJSON(message: GetTargetGroupRequest): unknown {
    const obj: any = {};
    message.targetGroupId !== undefined &&
      (obj.targetGroupId = message.targetGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetTargetGroupRequest>, I>>(
    object: I
  ): GetTargetGroupRequest {
    const message = { ...baseGetTargetGroupRequest } as GetTargetGroupRequest;
    message.targetGroupId = object.targetGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetTargetGroupRequest.$type, GetTargetGroupRequest);

const baseListTargetGroupsRequest: object = {
  $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupsRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListTargetGroupsRequest = {
  $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupsRequest" as const,

  encode(
    message: ListTargetGroupsRequest,
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
  ): ListTargetGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListTargetGroupsRequest,
    } as ListTargetGroupsRequest;
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

  fromJSON(object: any): ListTargetGroupsRequest {
    const message = {
      ...baseListTargetGroupsRequest,
    } as ListTargetGroupsRequest;
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

  toJSON(message: ListTargetGroupsRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListTargetGroupsRequest>, I>>(
    object: I
  ): ListTargetGroupsRequest {
    const message = {
      ...baseListTargetGroupsRequest,
    } as ListTargetGroupsRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListTargetGroupsRequest.$type, ListTargetGroupsRequest);

const baseListTargetGroupsResponse: object = {
  $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupsResponse",
  nextPageToken: "",
};

export const ListTargetGroupsResponse = {
  $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupsResponse" as const,

  encode(
    message: ListTargetGroupsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.targetGroups) {
      TargetGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListTargetGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListTargetGroupsResponse,
    } as ListTargetGroupsResponse;
    message.targetGroups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetGroups.push(
            TargetGroup.decode(reader, reader.uint32())
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

  fromJSON(object: any): ListTargetGroupsResponse {
    const message = {
      ...baseListTargetGroupsResponse,
    } as ListTargetGroupsResponse;
    message.targetGroups = (object.targetGroups ?? []).map((e: any) =>
      TargetGroup.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListTargetGroupsResponse): unknown {
    const obj: any = {};
    if (message.targetGroups) {
      obj.targetGroups = message.targetGroups.map((e) =>
        e ? TargetGroup.toJSON(e) : undefined
      );
    } else {
      obj.targetGroups = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListTargetGroupsResponse>, I>>(
    object: I
  ): ListTargetGroupsResponse {
    const message = {
      ...baseListTargetGroupsResponse,
    } as ListTargetGroupsResponse;
    message.targetGroups =
      object.targetGroups?.map((e) => TargetGroup.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListTargetGroupsResponse.$type,
  ListTargetGroupsResponse
);

const baseCreateTargetGroupRequest: object = {
  $type: "yandex.cloud.loadbalancer.v1.CreateTargetGroupRequest",
  folderId: "",
  name: "",
  description: "",
  regionId: "",
};

export const CreateTargetGroupRequest = {
  $type: "yandex.cloud.loadbalancer.v1.CreateTargetGroupRequest" as const,

  encode(
    message: CreateTargetGroupRequest,
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
      CreateTargetGroupRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.loadbalancer.v1.CreateTargetGroupRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.regionId !== "") {
      writer.uint32(42).string(message.regionId);
    }
    for (const v of message.targets) {
      Target.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateTargetGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateTargetGroupRequest,
    } as CreateTargetGroupRequest;
    message.labels = {};
    message.targets = [];
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
          const entry4 = CreateTargetGroupRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.regionId = reader.string();
          break;
        case 7:
          message.targets.push(Target.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateTargetGroupRequest {
    const message = {
      ...baseCreateTargetGroupRequest,
    } as CreateTargetGroupRequest;
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
    message.regionId =
      object.regionId !== undefined && object.regionId !== null
        ? String(object.regionId)
        : "";
    message.targets = (object.targets ?? []).map((e: any) =>
      Target.fromJSON(e)
    );
    return message;
  },

  toJSON(message: CreateTargetGroupRequest): unknown {
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
    message.regionId !== undefined && (obj.regionId = message.regionId);
    if (message.targets) {
      obj.targets = message.targets.map((e) =>
        e ? Target.toJSON(e) : undefined
      );
    } else {
      obj.targets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateTargetGroupRequest>, I>>(
    object: I
  ): CreateTargetGroupRequest {
    const message = {
      ...baseCreateTargetGroupRequest,
    } as CreateTargetGroupRequest;
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
    message.regionId = object.regionId ?? "";
    message.targets = object.targets?.map((e) => Target.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  CreateTargetGroupRequest.$type,
  CreateTargetGroupRequest
);

const baseCreateTargetGroupRequest_LabelsEntry: object = {
  $type: "yandex.cloud.loadbalancer.v1.CreateTargetGroupRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateTargetGroupRequest_LabelsEntry = {
  $type:
    "yandex.cloud.loadbalancer.v1.CreateTargetGroupRequest.LabelsEntry" as const,

  encode(
    message: CreateTargetGroupRequest_LabelsEntry,
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
  ): CreateTargetGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateTargetGroupRequest_LabelsEntry,
    } as CreateTargetGroupRequest_LabelsEntry;
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

  fromJSON(object: any): CreateTargetGroupRequest_LabelsEntry {
    const message = {
      ...baseCreateTargetGroupRequest_LabelsEntry,
    } as CreateTargetGroupRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateTargetGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateTargetGroupRequest_LabelsEntry>, I>
  >(object: I): CreateTargetGroupRequest_LabelsEntry {
    const message = {
      ...baseCreateTargetGroupRequest_LabelsEntry,
    } as CreateTargetGroupRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateTargetGroupRequest_LabelsEntry.$type,
  CreateTargetGroupRequest_LabelsEntry
);

const baseCreateTargetGroupMetadata: object = {
  $type: "yandex.cloud.loadbalancer.v1.CreateTargetGroupMetadata",
  targetGroupId: "",
};

export const CreateTargetGroupMetadata = {
  $type: "yandex.cloud.loadbalancer.v1.CreateTargetGroupMetadata" as const,

  encode(
    message: CreateTargetGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.targetGroupId !== "") {
      writer.uint32(10).string(message.targetGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateTargetGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateTargetGroupMetadata,
    } as CreateTargetGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateTargetGroupMetadata {
    const message = {
      ...baseCreateTargetGroupMetadata,
    } as CreateTargetGroupMetadata;
    message.targetGroupId =
      object.targetGroupId !== undefined && object.targetGroupId !== null
        ? String(object.targetGroupId)
        : "";
    return message;
  },

  toJSON(message: CreateTargetGroupMetadata): unknown {
    const obj: any = {};
    message.targetGroupId !== undefined &&
      (obj.targetGroupId = message.targetGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateTargetGroupMetadata>, I>>(
    object: I
  ): CreateTargetGroupMetadata {
    const message = {
      ...baseCreateTargetGroupMetadata,
    } as CreateTargetGroupMetadata;
    message.targetGroupId = object.targetGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateTargetGroupMetadata.$type,
  CreateTargetGroupMetadata
);

const baseUpdateTargetGroupRequest: object = {
  $type: "yandex.cloud.loadbalancer.v1.UpdateTargetGroupRequest",
  targetGroupId: "",
  name: "",
  description: "",
};

export const UpdateTargetGroupRequest = {
  $type: "yandex.cloud.loadbalancer.v1.UpdateTargetGroupRequest" as const,

  encode(
    message: UpdateTargetGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.targetGroupId !== "") {
      writer.uint32(10).string(message.targetGroupId);
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
      UpdateTargetGroupRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.loadbalancer.v1.UpdateTargetGroupRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    for (const v of message.targets) {
      Target.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateTargetGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateTargetGroupRequest,
    } as UpdateTargetGroupRequest;
    message.labels = {};
    message.targets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetGroupId = reader.string();
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
          const entry5 = UpdateTargetGroupRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.targets.push(Target.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateTargetGroupRequest {
    const message = {
      ...baseUpdateTargetGroupRequest,
    } as UpdateTargetGroupRequest;
    message.targetGroupId =
      object.targetGroupId !== undefined && object.targetGroupId !== null
        ? String(object.targetGroupId)
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
    message.targets = (object.targets ?? []).map((e: any) =>
      Target.fromJSON(e)
    );
    return message;
  },

  toJSON(message: UpdateTargetGroupRequest): unknown {
    const obj: any = {};
    message.targetGroupId !== undefined &&
      (obj.targetGroupId = message.targetGroupId);
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
    if (message.targets) {
      obj.targets = message.targets.map((e) =>
        e ? Target.toJSON(e) : undefined
      );
    } else {
      obj.targets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateTargetGroupRequest>, I>>(
    object: I
  ): UpdateTargetGroupRequest {
    const message = {
      ...baseUpdateTargetGroupRequest,
    } as UpdateTargetGroupRequest;
    message.targetGroupId = object.targetGroupId ?? "";
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
    message.targets = object.targets?.map((e) => Target.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  UpdateTargetGroupRequest.$type,
  UpdateTargetGroupRequest
);

const baseUpdateTargetGroupRequest_LabelsEntry: object = {
  $type: "yandex.cloud.loadbalancer.v1.UpdateTargetGroupRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateTargetGroupRequest_LabelsEntry = {
  $type:
    "yandex.cloud.loadbalancer.v1.UpdateTargetGroupRequest.LabelsEntry" as const,

  encode(
    message: UpdateTargetGroupRequest_LabelsEntry,
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
  ): UpdateTargetGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateTargetGroupRequest_LabelsEntry,
    } as UpdateTargetGroupRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateTargetGroupRequest_LabelsEntry {
    const message = {
      ...baseUpdateTargetGroupRequest_LabelsEntry,
    } as UpdateTargetGroupRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateTargetGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateTargetGroupRequest_LabelsEntry>, I>
  >(object: I): UpdateTargetGroupRequest_LabelsEntry {
    const message = {
      ...baseUpdateTargetGroupRequest_LabelsEntry,
    } as UpdateTargetGroupRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateTargetGroupRequest_LabelsEntry.$type,
  UpdateTargetGroupRequest_LabelsEntry
);

const baseUpdateTargetGroupMetadata: object = {
  $type: "yandex.cloud.loadbalancer.v1.UpdateTargetGroupMetadata",
  targetGroupId: "",
};

export const UpdateTargetGroupMetadata = {
  $type: "yandex.cloud.loadbalancer.v1.UpdateTargetGroupMetadata" as const,

  encode(
    message: UpdateTargetGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.targetGroupId !== "") {
      writer.uint32(10).string(message.targetGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateTargetGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateTargetGroupMetadata,
    } as UpdateTargetGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateTargetGroupMetadata {
    const message = {
      ...baseUpdateTargetGroupMetadata,
    } as UpdateTargetGroupMetadata;
    message.targetGroupId =
      object.targetGroupId !== undefined && object.targetGroupId !== null
        ? String(object.targetGroupId)
        : "";
    return message;
  },

  toJSON(message: UpdateTargetGroupMetadata): unknown {
    const obj: any = {};
    message.targetGroupId !== undefined &&
      (obj.targetGroupId = message.targetGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateTargetGroupMetadata>, I>>(
    object: I
  ): UpdateTargetGroupMetadata {
    const message = {
      ...baseUpdateTargetGroupMetadata,
    } as UpdateTargetGroupMetadata;
    message.targetGroupId = object.targetGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateTargetGroupMetadata.$type,
  UpdateTargetGroupMetadata
);

const baseDeleteTargetGroupRequest: object = {
  $type: "yandex.cloud.loadbalancer.v1.DeleteTargetGroupRequest",
  targetGroupId: "",
};

export const DeleteTargetGroupRequest = {
  $type: "yandex.cloud.loadbalancer.v1.DeleteTargetGroupRequest" as const,

  encode(
    message: DeleteTargetGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.targetGroupId !== "") {
      writer.uint32(10).string(message.targetGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteTargetGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteTargetGroupRequest,
    } as DeleteTargetGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteTargetGroupRequest {
    const message = {
      ...baseDeleteTargetGroupRequest,
    } as DeleteTargetGroupRequest;
    message.targetGroupId =
      object.targetGroupId !== undefined && object.targetGroupId !== null
        ? String(object.targetGroupId)
        : "";
    return message;
  },

  toJSON(message: DeleteTargetGroupRequest): unknown {
    const obj: any = {};
    message.targetGroupId !== undefined &&
      (obj.targetGroupId = message.targetGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteTargetGroupRequest>, I>>(
    object: I
  ): DeleteTargetGroupRequest {
    const message = {
      ...baseDeleteTargetGroupRequest,
    } as DeleteTargetGroupRequest;
    message.targetGroupId = object.targetGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteTargetGroupRequest.$type,
  DeleteTargetGroupRequest
);

const baseDeleteTargetGroupMetadata: object = {
  $type: "yandex.cloud.loadbalancer.v1.DeleteTargetGroupMetadata",
  targetGroupId: "",
};

export const DeleteTargetGroupMetadata = {
  $type: "yandex.cloud.loadbalancer.v1.DeleteTargetGroupMetadata" as const,

  encode(
    message: DeleteTargetGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.targetGroupId !== "") {
      writer.uint32(10).string(message.targetGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteTargetGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteTargetGroupMetadata,
    } as DeleteTargetGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteTargetGroupMetadata {
    const message = {
      ...baseDeleteTargetGroupMetadata,
    } as DeleteTargetGroupMetadata;
    message.targetGroupId =
      object.targetGroupId !== undefined && object.targetGroupId !== null
        ? String(object.targetGroupId)
        : "";
    return message;
  },

  toJSON(message: DeleteTargetGroupMetadata): unknown {
    const obj: any = {};
    message.targetGroupId !== undefined &&
      (obj.targetGroupId = message.targetGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteTargetGroupMetadata>, I>>(
    object: I
  ): DeleteTargetGroupMetadata {
    const message = {
      ...baseDeleteTargetGroupMetadata,
    } as DeleteTargetGroupMetadata;
    message.targetGroupId = object.targetGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteTargetGroupMetadata.$type,
  DeleteTargetGroupMetadata
);

const baseAddTargetsRequest: object = {
  $type: "yandex.cloud.loadbalancer.v1.AddTargetsRequest",
  targetGroupId: "",
};

export const AddTargetsRequest = {
  $type: "yandex.cloud.loadbalancer.v1.AddTargetsRequest" as const,

  encode(
    message: AddTargetsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.targetGroupId !== "") {
      writer.uint32(10).string(message.targetGroupId);
    }
    for (const v of message.targets) {
      Target.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddTargetsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddTargetsRequest } as AddTargetsRequest;
    message.targets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetGroupId = reader.string();
          break;
        case 2:
          message.targets.push(Target.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddTargetsRequest {
    const message = { ...baseAddTargetsRequest } as AddTargetsRequest;
    message.targetGroupId =
      object.targetGroupId !== undefined && object.targetGroupId !== null
        ? String(object.targetGroupId)
        : "";
    message.targets = (object.targets ?? []).map((e: any) =>
      Target.fromJSON(e)
    );
    return message;
  },

  toJSON(message: AddTargetsRequest): unknown {
    const obj: any = {};
    message.targetGroupId !== undefined &&
      (obj.targetGroupId = message.targetGroupId);
    if (message.targets) {
      obj.targets = message.targets.map((e) =>
        e ? Target.toJSON(e) : undefined
      );
    } else {
      obj.targets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddTargetsRequest>, I>>(
    object: I
  ): AddTargetsRequest {
    const message = { ...baseAddTargetsRequest } as AddTargetsRequest;
    message.targetGroupId = object.targetGroupId ?? "";
    message.targets = object.targets?.map((e) => Target.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(AddTargetsRequest.$type, AddTargetsRequest);

const baseAddTargetsMetadata: object = {
  $type: "yandex.cloud.loadbalancer.v1.AddTargetsMetadata",
  targetGroupId: "",
};

export const AddTargetsMetadata = {
  $type: "yandex.cloud.loadbalancer.v1.AddTargetsMetadata" as const,

  encode(
    message: AddTargetsMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.targetGroupId !== "") {
      writer.uint32(10).string(message.targetGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddTargetsMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddTargetsMetadata } as AddTargetsMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddTargetsMetadata {
    const message = { ...baseAddTargetsMetadata } as AddTargetsMetadata;
    message.targetGroupId =
      object.targetGroupId !== undefined && object.targetGroupId !== null
        ? String(object.targetGroupId)
        : "";
    return message;
  },

  toJSON(message: AddTargetsMetadata): unknown {
    const obj: any = {};
    message.targetGroupId !== undefined &&
      (obj.targetGroupId = message.targetGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddTargetsMetadata>, I>>(
    object: I
  ): AddTargetsMetadata {
    const message = { ...baseAddTargetsMetadata } as AddTargetsMetadata;
    message.targetGroupId = object.targetGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddTargetsMetadata.$type, AddTargetsMetadata);

const baseRemoveTargetsRequest: object = {
  $type: "yandex.cloud.loadbalancer.v1.RemoveTargetsRequest",
  targetGroupId: "",
};

export const RemoveTargetsRequest = {
  $type: "yandex.cloud.loadbalancer.v1.RemoveTargetsRequest" as const,

  encode(
    message: RemoveTargetsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.targetGroupId !== "") {
      writer.uint32(10).string(message.targetGroupId);
    }
    for (const v of message.targets) {
      Target.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveTargetsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRemoveTargetsRequest } as RemoveTargetsRequest;
    message.targets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetGroupId = reader.string();
          break;
        case 2:
          message.targets.push(Target.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveTargetsRequest {
    const message = { ...baseRemoveTargetsRequest } as RemoveTargetsRequest;
    message.targetGroupId =
      object.targetGroupId !== undefined && object.targetGroupId !== null
        ? String(object.targetGroupId)
        : "";
    message.targets = (object.targets ?? []).map((e: any) =>
      Target.fromJSON(e)
    );
    return message;
  },

  toJSON(message: RemoveTargetsRequest): unknown {
    const obj: any = {};
    message.targetGroupId !== undefined &&
      (obj.targetGroupId = message.targetGroupId);
    if (message.targets) {
      obj.targets = message.targets.map((e) =>
        e ? Target.toJSON(e) : undefined
      );
    } else {
      obj.targets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveTargetsRequest>, I>>(
    object: I
  ): RemoveTargetsRequest {
    const message = { ...baseRemoveTargetsRequest } as RemoveTargetsRequest;
    message.targetGroupId = object.targetGroupId ?? "";
    message.targets = object.targets?.map((e) => Target.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(RemoveTargetsRequest.$type, RemoveTargetsRequest);

const baseRemoveTargetsMetadata: object = {
  $type: "yandex.cloud.loadbalancer.v1.RemoveTargetsMetadata",
  targetGroupId: "",
};

export const RemoveTargetsMetadata = {
  $type: "yandex.cloud.loadbalancer.v1.RemoveTargetsMetadata" as const,

  encode(
    message: RemoveTargetsMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.targetGroupId !== "") {
      writer.uint32(10).string(message.targetGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveTargetsMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRemoveTargetsMetadata } as RemoveTargetsMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveTargetsMetadata {
    const message = { ...baseRemoveTargetsMetadata } as RemoveTargetsMetadata;
    message.targetGroupId =
      object.targetGroupId !== undefined && object.targetGroupId !== null
        ? String(object.targetGroupId)
        : "";
    return message;
  },

  toJSON(message: RemoveTargetsMetadata): unknown {
    const obj: any = {};
    message.targetGroupId !== undefined &&
      (obj.targetGroupId = message.targetGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveTargetsMetadata>, I>>(
    object: I
  ): RemoveTargetsMetadata {
    const message = { ...baseRemoveTargetsMetadata } as RemoveTargetsMetadata;
    message.targetGroupId = object.targetGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RemoveTargetsMetadata.$type, RemoveTargetsMetadata);

const baseListTargetGroupOperationsRequest: object = {
  $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupOperationsRequest",
  targetGroupId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListTargetGroupOperationsRequest = {
  $type:
    "yandex.cloud.loadbalancer.v1.ListTargetGroupOperationsRequest" as const,

  encode(
    message: ListTargetGroupOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.targetGroupId !== "") {
      writer.uint32(10).string(message.targetGroupId);
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
  ): ListTargetGroupOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListTargetGroupOperationsRequest,
    } as ListTargetGroupOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetGroupId = reader.string();
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

  fromJSON(object: any): ListTargetGroupOperationsRequest {
    const message = {
      ...baseListTargetGroupOperationsRequest,
    } as ListTargetGroupOperationsRequest;
    message.targetGroupId =
      object.targetGroupId !== undefined && object.targetGroupId !== null
        ? String(object.targetGroupId)
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

  toJSON(message: ListTargetGroupOperationsRequest): unknown {
    const obj: any = {};
    message.targetGroupId !== undefined &&
      (obj.targetGroupId = message.targetGroupId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListTargetGroupOperationsRequest>, I>
  >(object: I): ListTargetGroupOperationsRequest {
    const message = {
      ...baseListTargetGroupOperationsRequest,
    } as ListTargetGroupOperationsRequest;
    message.targetGroupId = object.targetGroupId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListTargetGroupOperationsRequest.$type,
  ListTargetGroupOperationsRequest
);

const baseListTargetGroupOperationsResponse: object = {
  $type: "yandex.cloud.loadbalancer.v1.ListTargetGroupOperationsResponse",
  nextPageToken: "",
};

export const ListTargetGroupOperationsResponse = {
  $type:
    "yandex.cloud.loadbalancer.v1.ListTargetGroupOperationsResponse" as const,

  encode(
    message: ListTargetGroupOperationsResponse,
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
  ): ListTargetGroupOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListTargetGroupOperationsResponse,
    } as ListTargetGroupOperationsResponse;
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

  fromJSON(object: any): ListTargetGroupOperationsResponse {
    const message = {
      ...baseListTargetGroupOperationsResponse,
    } as ListTargetGroupOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListTargetGroupOperationsResponse): unknown {
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
    I extends Exact<DeepPartial<ListTargetGroupOperationsResponse>, I>
  >(object: I): ListTargetGroupOperationsResponse {
    const message = {
      ...baseListTargetGroupOperationsResponse,
    } as ListTargetGroupOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListTargetGroupOperationsResponse.$type,
  ListTargetGroupOperationsResponse
);

/** A set of methods for managing TargetGroup resources. */
export const TargetGroupServiceService = {
  /** Returns the specified TargetGroup resource. */
  get: {
    path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetTargetGroupRequest) =>
      Buffer.from(GetTargetGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetTargetGroupRequest.decode(value),
    responseSerialize: (value: TargetGroup) =>
      Buffer.from(TargetGroup.encode(value).finish()),
    responseDeserialize: (value: Buffer) => TargetGroup.decode(value),
  },
  /** Retrieves the list of TargetGroup resources in the specified folder. */
  list: {
    path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListTargetGroupsRequest) =>
      Buffer.from(ListTargetGroupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListTargetGroupsRequest.decode(value),
    responseSerialize: (value: ListTargetGroupsResponse) =>
      Buffer.from(ListTargetGroupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListTargetGroupsResponse.decode(value),
  },
  /** Creates a target group in the specified folder and adds the specified targets to it. */
  create: {
    path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateTargetGroupRequest) =>
      Buffer.from(CreateTargetGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateTargetGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified target group. */
  update: {
    path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateTargetGroupRequest) =>
      Buffer.from(UpdateTargetGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateTargetGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified target group. */
  delete: {
    path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteTargetGroupRequest) =>
      Buffer.from(DeleteTargetGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteTargetGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Adds targets to the target group. */
  addTargets: {
    path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/AddTargets",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddTargetsRequest) =>
      Buffer.from(AddTargetsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddTargetsRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Removes targets from the target group. */
  removeTargets: {
    path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/RemoveTargets",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveTargetsRequest) =>
      Buffer.from(RemoveTargetsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveTargetsRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified target group. */
  listOperations: {
    path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListTargetGroupOperationsRequest) =>
      Buffer.from(ListTargetGroupOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListTargetGroupOperationsRequest.decode(value),
    responseSerialize: (value: ListTargetGroupOperationsResponse) =>
      Buffer.from(ListTargetGroupOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListTargetGroupOperationsResponse.decode(value),
  },
} as const;

export interface TargetGroupServiceServer extends UntypedServiceImplementation {
  /** Returns the specified TargetGroup resource. */
  get: handleUnaryCall<GetTargetGroupRequest, TargetGroup>;
  /** Retrieves the list of TargetGroup resources in the specified folder. */
  list: handleUnaryCall<ListTargetGroupsRequest, ListTargetGroupsResponse>;
  /** Creates a target group in the specified folder and adds the specified targets to it. */
  create: handleUnaryCall<CreateTargetGroupRequest, Operation>;
  /** Updates the specified target group. */
  update: handleUnaryCall<UpdateTargetGroupRequest, Operation>;
  /** Deletes the specified target group. */
  delete: handleUnaryCall<DeleteTargetGroupRequest, Operation>;
  /** Adds targets to the target group. */
  addTargets: handleUnaryCall<AddTargetsRequest, Operation>;
  /** Removes targets from the target group. */
  removeTargets: handleUnaryCall<RemoveTargetsRequest, Operation>;
  /** Lists operations for the specified target group. */
  listOperations: handleUnaryCall<
    ListTargetGroupOperationsRequest,
    ListTargetGroupOperationsResponse
  >;
}

export interface TargetGroupServiceClient extends Client {
  /** Returns the specified TargetGroup resource. */
  get(
    request: GetTargetGroupRequest,
    callback: (error: ServiceError | null, response: TargetGroup) => void
  ): ClientUnaryCall;
  get(
    request: GetTargetGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: TargetGroup) => void
  ): ClientUnaryCall;
  get(
    request: GetTargetGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: TargetGroup) => void
  ): ClientUnaryCall;
  /** Retrieves the list of TargetGroup resources in the specified folder. */
  list(
    request: ListTargetGroupsRequest,
    callback: (
      error: ServiceError | null,
      response: ListTargetGroupsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListTargetGroupsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListTargetGroupsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListTargetGroupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListTargetGroupsResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates a target group in the specified folder and adds the specified targets to it. */
  create(
    request: CreateTargetGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateTargetGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateTargetGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified target group. */
  update(
    request: UpdateTargetGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateTargetGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateTargetGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified target group. */
  delete(
    request: DeleteTargetGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteTargetGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteTargetGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Adds targets to the target group. */
  addTargets(
    request: AddTargetsRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addTargets(
    request: AddTargetsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addTargets(
    request: AddTargetsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Removes targets from the target group. */
  removeTargets(
    request: RemoveTargetsRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  removeTargets(
    request: RemoveTargetsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  removeTargets(
    request: RemoveTargetsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified target group. */
  listOperations(
    request: ListTargetGroupOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListTargetGroupOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListTargetGroupOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListTargetGroupOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListTargetGroupOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListTargetGroupOperationsResponse
    ) => void
  ): ClientUnaryCall;
}

export const TargetGroupServiceClient = makeGenericClientConstructor(
  TargetGroupServiceService,
  "yandex.cloud.loadbalancer.v1.TargetGroupService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): TargetGroupServiceClient;
  service: typeof TargetGroupServiceService;
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
