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
  BackendGroup,
  HttpBackendGroup,
  GrpcBackendGroup,
  HttpBackend,
  GrpcBackend,
  StreamBackend,
} from "../../../../yandex/cloud/apploadbalancer/v1/backend_group";
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.apploadbalancer.v1";

export interface GetBackendGroupRequest {
  $type: "yandex.cloud.apploadbalancer.v1.GetBackendGroupRequest";
  /**
   * ID of the backend group to return.
   *
   * To get the backend group ID, make a [BackendGroupService.List] request.
   */
  backendGroupId: string;
}

export interface ListBackendGroupsRequest {
  $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupsRequest";
  /**
   * ID of the folder to list backend groups in.
   *
   * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListBackendGroupsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListBackendGroupsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters backend groups listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [BackendGroup.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name=my-backend-group`.
   */
  filter: string;
}

export interface ListBackendGroupsResponse {
  $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupsResponse";
  /** List of backend groups in the specified folder. */
  backendGroups: BackendGroup[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListBackendGroupsRequest.page_size], use `next_page_token` as the value
   * for the [ListBackendGroupsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface DeleteBackendGroupRequest {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteBackendGroupRequest";
  /**
   * ID of the backend group to delete.
   *
   * To get the backend group ID, make a [BackendGroupService.List] request.
   */
  backendGroupId: string;
}

export interface DeleteBackendGroupMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteBackendGroupMetadata";
  /** ID of the backend group that is being deleted. */
  backendGroupId: string;
}

export interface UpdateBackendGroupRequest {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupRequest";
  /**
   * ID of the backend group to update.
   *
   * To get the backend group ID, make a [BackendGroupService.List] request.
   */
  backendGroupId: string;
  /** Field mask that specifies which attributes of the backend group should be updated. */
  updateMask?: FieldMask;
  /**
   * New name for the backend group.
   * The name must be unique within the folder.
   */
  name: string;
  /** New description of the backend group. */
  description: string;
  /**
   * Backend group labels as `key:value` pairs.
   * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
   *
   * Existing set of labels is completely replaced by the provided set, so if you just want
   * to add or remove a label:
   * 1. Get the current set of labels with a [BackendGroupService.Get] request.
   * 2. Add or remove a label in this set.
   * 3. Send the new set in this field.
   */
  labels: { [key: string]: string };
  /** New list of HTTP backends that the backend group will consist of. */
  http?: HttpBackendGroup | undefined;
  /** New list of gRPC backends that the backend group will consist of. */
  grpc?: GrpcBackendGroup | undefined;
}

export interface UpdateBackendGroupRequest_LabelsEntry {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateBackendGroupMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupMetadata";
  /** ID of the backend group that is being updated. */
  backendGroupId: string;
}

export interface CreateBackendGroupRequest {
  $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupRequest";
  /**
   * ID of the folder to create a backend group in.
   *
   * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the backend group.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the backend group. */
  description: string;
  /**
   * Backend group labels as `key:value` pairs.
   * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
   */
  labels: { [key: string]: string };
  /** List of HTTP backends that the backend group will consist of. */
  http?: HttpBackendGroup | undefined;
  /** List of gRPC backends that the backend group consists of. */
  grpc?: GrpcBackendGroup | undefined;
}

export interface CreateBackendGroupRequest_LabelsEntry {
  $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateBackendGroupMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupMetadata";
  /** ID of the backend group that is being created. */
  backendGroupId: string;
}

export interface AddBackendRequest {
  $type: "yandex.cloud.apploadbalancer.v1.AddBackendRequest";
  /**
   * ID of the backend group to add a backend to.
   *
   * To get the backend group ID, make a [BackendGroupService.List] request.
   */
  backendGroupId: string;
  /** HTTP backend to add to the backend group. */
  http?: HttpBackend | undefined;
  /** gRPC backend to add to the backend group. */
  grpc?: GrpcBackend | undefined;
  /** New settings for the Stream backend. */
  stream?: StreamBackend | undefined;
}

export interface AddBackendMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.AddBackendMetadata";
  /** ID of the backend group that the backend is being added to. */
  backendGroupId: string;
  /** Name of the backend that is being added to the backend group. */
  backendName: string;
}

export interface UpdateBackendRequest {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendRequest";
  /** ID of the backend group to update the backend in. */
  backendGroupId: string;
  /** Field mask that specifies which attributes of the backend should be updated. */
  updateMask?: FieldMask;
  /** New settings for the HTTP backend. */
  http?: HttpBackend | undefined;
  /** New settings for the gRPC backend. */
  grpc?: GrpcBackend | undefined;
  /** New settings for the Stream backend. */
  stream?: StreamBackend | undefined;
}

export interface UpdateBackendMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendMetadata";
  /** ID of the backend group that the backend is being updated it. */
  backendGroupId: string;
  /** Name of the backend that is being updated. */
  backendName: string;
}

export interface RemoveBackendRequest {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveBackendRequest";
  /**
   * ID of the backend group to remove a backend from.
   *
   * To get the backend group ID, make a [BackendGroupService.List] request.
   */
  backendGroupId: string;
  /**
   * Name of the backend to remove.
   *
   * To get the backend name, make a [BackendGroupService.Get] request.
   */
  backendName: string;
}

export interface RemoveBackendMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveBackendMetadata";
  /** ID of the backend group that the backend is being removed from. */
  backendGroupId: string;
  /** Name of the backend that is being removed. */
  backendName: string;
}

export interface ListBackendGroupOperationsRequest {
  $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupOperationsRequest";
  /**
   * ID of the backend group to get operations for.
   *
   * To get the backend group ID, use a [BackendGroupService.List] request.
   */
  backendGroupId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than [page_size], the service returns a [ListBackendGroupOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListBackendGroupOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListBackendGroupOperationsResponse {
  $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupOperationsResponse";
  /** List of operations for the specified backend group. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListBackendGroupOperationsRequest.page_size], use `next_page_token` as the value
   * for the [ListBackendGroupOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

const baseGetBackendGroupRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.GetBackendGroupRequest",
  backendGroupId: "",
};

export const GetBackendGroupRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.GetBackendGroupRequest" as const,

  encode(
    message: GetBackendGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetBackendGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetBackendGroupRequest } as GetBackendGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backendGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBackendGroupRequest {
    const message = { ...baseGetBackendGroupRequest } as GetBackendGroupRequest;
    message.backendGroupId =
      object.backendGroupId !== undefined && object.backendGroupId !== null
        ? String(object.backendGroupId)
        : "";
    return message;
  },

  toJSON(message: GetBackendGroupRequest): unknown {
    const obj: any = {};
    message.backendGroupId !== undefined &&
      (obj.backendGroupId = message.backendGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetBackendGroupRequest>, I>>(
    object: I
  ): GetBackendGroupRequest {
    const message = { ...baseGetBackendGroupRequest } as GetBackendGroupRequest;
    message.backendGroupId = object.backendGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetBackendGroupRequest.$type, GetBackendGroupRequest);

const baseListBackendGroupsRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupsRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListBackendGroupsRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupsRequest" as const,

  encode(
    message: ListBackendGroupsRequest,
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
  ): ListBackendGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListBackendGroupsRequest,
    } as ListBackendGroupsRequest;
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

  fromJSON(object: any): ListBackendGroupsRequest {
    const message = {
      ...baseListBackendGroupsRequest,
    } as ListBackendGroupsRequest;
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

  toJSON(message: ListBackendGroupsRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListBackendGroupsRequest>, I>>(
    object: I
  ): ListBackendGroupsRequest {
    const message = {
      ...baseListBackendGroupsRequest,
    } as ListBackendGroupsRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListBackendGroupsRequest.$type,
  ListBackendGroupsRequest
);

const baseListBackendGroupsResponse: object = {
  $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupsResponse",
  nextPageToken: "",
};

export const ListBackendGroupsResponse = {
  $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupsResponse" as const,

  encode(
    message: ListBackendGroupsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.backendGroups) {
      BackendGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListBackendGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListBackendGroupsResponse,
    } as ListBackendGroupsResponse;
    message.backendGroups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backendGroups.push(
            BackendGroup.decode(reader, reader.uint32())
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

  fromJSON(object: any): ListBackendGroupsResponse {
    const message = {
      ...baseListBackendGroupsResponse,
    } as ListBackendGroupsResponse;
    message.backendGroups = (object.backendGroups ?? []).map((e: any) =>
      BackendGroup.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListBackendGroupsResponse): unknown {
    const obj: any = {};
    if (message.backendGroups) {
      obj.backendGroups = message.backendGroups.map((e) =>
        e ? BackendGroup.toJSON(e) : undefined
      );
    } else {
      obj.backendGroups = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListBackendGroupsResponse>, I>>(
    object: I
  ): ListBackendGroupsResponse {
    const message = {
      ...baseListBackendGroupsResponse,
    } as ListBackendGroupsResponse;
    message.backendGroups =
      object.backendGroups?.map((e) => BackendGroup.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListBackendGroupsResponse.$type,
  ListBackendGroupsResponse
);

const baseDeleteBackendGroupRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteBackendGroupRequest",
  backendGroupId: "",
};

export const DeleteBackendGroupRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteBackendGroupRequest" as const,

  encode(
    message: DeleteBackendGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteBackendGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteBackendGroupRequest,
    } as DeleteBackendGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backendGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteBackendGroupRequest {
    const message = {
      ...baseDeleteBackendGroupRequest,
    } as DeleteBackendGroupRequest;
    message.backendGroupId =
      object.backendGroupId !== undefined && object.backendGroupId !== null
        ? String(object.backendGroupId)
        : "";
    return message;
  },

  toJSON(message: DeleteBackendGroupRequest): unknown {
    const obj: any = {};
    message.backendGroupId !== undefined &&
      (obj.backendGroupId = message.backendGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteBackendGroupRequest>, I>>(
    object: I
  ): DeleteBackendGroupRequest {
    const message = {
      ...baseDeleteBackendGroupRequest,
    } as DeleteBackendGroupRequest;
    message.backendGroupId = object.backendGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteBackendGroupRequest.$type,
  DeleteBackendGroupRequest
);

const baseDeleteBackendGroupMetadata: object = {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteBackendGroupMetadata",
  backendGroupId: "",
};

export const DeleteBackendGroupMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteBackendGroupMetadata" as const,

  encode(
    message: DeleteBackendGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteBackendGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteBackendGroupMetadata,
    } as DeleteBackendGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backendGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteBackendGroupMetadata {
    const message = {
      ...baseDeleteBackendGroupMetadata,
    } as DeleteBackendGroupMetadata;
    message.backendGroupId =
      object.backendGroupId !== undefined && object.backendGroupId !== null
        ? String(object.backendGroupId)
        : "";
    return message;
  },

  toJSON(message: DeleteBackendGroupMetadata): unknown {
    const obj: any = {};
    message.backendGroupId !== undefined &&
      (obj.backendGroupId = message.backendGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteBackendGroupMetadata>, I>>(
    object: I
  ): DeleteBackendGroupMetadata {
    const message = {
      ...baseDeleteBackendGroupMetadata,
    } as DeleteBackendGroupMetadata;
    message.backendGroupId = object.backendGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteBackendGroupMetadata.$type,
  DeleteBackendGroupMetadata
);

const baseUpdateBackendGroupRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupRequest",
  backendGroupId: "",
  name: "",
  description: "",
};

export const UpdateBackendGroupRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupRequest" as const,

  encode(
    message: UpdateBackendGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
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
      UpdateBackendGroupRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.http !== undefined) {
      HttpBackendGroup.encode(message.http, writer.uint32(50).fork()).ldelim();
    }
    if (message.grpc !== undefined) {
      GrpcBackendGroup.encode(message.grpc, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateBackendGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateBackendGroupRequest,
    } as UpdateBackendGroupRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backendGroupId = reader.string();
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
          const entry5 = UpdateBackendGroupRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.http = HttpBackendGroup.decode(reader, reader.uint32());
          break;
        case 7:
          message.grpc = GrpcBackendGroup.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateBackendGroupRequest {
    const message = {
      ...baseUpdateBackendGroupRequest,
    } as UpdateBackendGroupRequest;
    message.backendGroupId =
      object.backendGroupId !== undefined && object.backendGroupId !== null
        ? String(object.backendGroupId)
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
    message.http =
      object.http !== undefined && object.http !== null
        ? HttpBackendGroup.fromJSON(object.http)
        : undefined;
    message.grpc =
      object.grpc !== undefined && object.grpc !== null
        ? GrpcBackendGroup.fromJSON(object.grpc)
        : undefined;
    return message;
  },

  toJSON(message: UpdateBackendGroupRequest): unknown {
    const obj: any = {};
    message.backendGroupId !== undefined &&
      (obj.backendGroupId = message.backendGroupId);
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
    message.http !== undefined &&
      (obj.http = message.http
        ? HttpBackendGroup.toJSON(message.http)
        : undefined);
    message.grpc !== undefined &&
      (obj.grpc = message.grpc
        ? GrpcBackendGroup.toJSON(message.grpc)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateBackendGroupRequest>, I>>(
    object: I
  ): UpdateBackendGroupRequest {
    const message = {
      ...baseUpdateBackendGroupRequest,
    } as UpdateBackendGroupRequest;
    message.backendGroupId = object.backendGroupId ?? "";
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
    message.http =
      object.http !== undefined && object.http !== null
        ? HttpBackendGroup.fromPartial(object.http)
        : undefined;
    message.grpc =
      object.grpc !== undefined && object.grpc !== null
        ? GrpcBackendGroup.fromPartial(object.grpc)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  UpdateBackendGroupRequest.$type,
  UpdateBackendGroupRequest
);

const baseUpdateBackendGroupRequest_LabelsEntry: object = {
  $type:
    "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateBackendGroupRequest_LabelsEntry = {
  $type:
    "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupRequest.LabelsEntry" as const,

  encode(
    message: UpdateBackendGroupRequest_LabelsEntry,
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
  ): UpdateBackendGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateBackendGroupRequest_LabelsEntry,
    } as UpdateBackendGroupRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateBackendGroupRequest_LabelsEntry {
    const message = {
      ...baseUpdateBackendGroupRequest_LabelsEntry,
    } as UpdateBackendGroupRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateBackendGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateBackendGroupRequest_LabelsEntry>, I>
  >(object: I): UpdateBackendGroupRequest_LabelsEntry {
    const message = {
      ...baseUpdateBackendGroupRequest_LabelsEntry,
    } as UpdateBackendGroupRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateBackendGroupRequest_LabelsEntry.$type,
  UpdateBackendGroupRequest_LabelsEntry
);

const baseUpdateBackendGroupMetadata: object = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupMetadata",
  backendGroupId: "",
};

export const UpdateBackendGroupMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendGroupMetadata" as const,

  encode(
    message: UpdateBackendGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateBackendGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateBackendGroupMetadata,
    } as UpdateBackendGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backendGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateBackendGroupMetadata {
    const message = {
      ...baseUpdateBackendGroupMetadata,
    } as UpdateBackendGroupMetadata;
    message.backendGroupId =
      object.backendGroupId !== undefined && object.backendGroupId !== null
        ? String(object.backendGroupId)
        : "";
    return message;
  },

  toJSON(message: UpdateBackendGroupMetadata): unknown {
    const obj: any = {};
    message.backendGroupId !== undefined &&
      (obj.backendGroupId = message.backendGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateBackendGroupMetadata>, I>>(
    object: I
  ): UpdateBackendGroupMetadata {
    const message = {
      ...baseUpdateBackendGroupMetadata,
    } as UpdateBackendGroupMetadata;
    message.backendGroupId = object.backendGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateBackendGroupMetadata.$type,
  UpdateBackendGroupMetadata
);

const baseCreateBackendGroupRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupRequest",
  folderId: "",
  name: "",
  description: "",
};

export const CreateBackendGroupRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupRequest" as const,

  encode(
    message: CreateBackendGroupRequest,
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
      CreateBackendGroupRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.apploadbalancer.v1.CreateBackendGroupRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.http !== undefined) {
      HttpBackendGroup.encode(message.http, writer.uint32(42).fork()).ldelim();
    }
    if (message.grpc !== undefined) {
      GrpcBackendGroup.encode(message.grpc, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateBackendGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateBackendGroupRequest,
    } as CreateBackendGroupRequest;
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
          const entry4 = CreateBackendGroupRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.http = HttpBackendGroup.decode(reader, reader.uint32());
          break;
        case 6:
          message.grpc = GrpcBackendGroup.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateBackendGroupRequest {
    const message = {
      ...baseCreateBackendGroupRequest,
    } as CreateBackendGroupRequest;
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
    message.http =
      object.http !== undefined && object.http !== null
        ? HttpBackendGroup.fromJSON(object.http)
        : undefined;
    message.grpc =
      object.grpc !== undefined && object.grpc !== null
        ? GrpcBackendGroup.fromJSON(object.grpc)
        : undefined;
    return message;
  },

  toJSON(message: CreateBackendGroupRequest): unknown {
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
    message.http !== undefined &&
      (obj.http = message.http
        ? HttpBackendGroup.toJSON(message.http)
        : undefined);
    message.grpc !== undefined &&
      (obj.grpc = message.grpc
        ? GrpcBackendGroup.toJSON(message.grpc)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateBackendGroupRequest>, I>>(
    object: I
  ): CreateBackendGroupRequest {
    const message = {
      ...baseCreateBackendGroupRequest,
    } as CreateBackendGroupRequest;
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
    message.http =
      object.http !== undefined && object.http !== null
        ? HttpBackendGroup.fromPartial(object.http)
        : undefined;
    message.grpc =
      object.grpc !== undefined && object.grpc !== null
        ? GrpcBackendGroup.fromPartial(object.grpc)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  CreateBackendGroupRequest.$type,
  CreateBackendGroupRequest
);

const baseCreateBackendGroupRequest_LabelsEntry: object = {
  $type:
    "yandex.cloud.apploadbalancer.v1.CreateBackendGroupRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateBackendGroupRequest_LabelsEntry = {
  $type:
    "yandex.cloud.apploadbalancer.v1.CreateBackendGroupRequest.LabelsEntry" as const,

  encode(
    message: CreateBackendGroupRequest_LabelsEntry,
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
  ): CreateBackendGroupRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateBackendGroupRequest_LabelsEntry,
    } as CreateBackendGroupRequest_LabelsEntry;
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

  fromJSON(object: any): CreateBackendGroupRequest_LabelsEntry {
    const message = {
      ...baseCreateBackendGroupRequest_LabelsEntry,
    } as CreateBackendGroupRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateBackendGroupRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateBackendGroupRequest_LabelsEntry>, I>
  >(object: I): CreateBackendGroupRequest_LabelsEntry {
    const message = {
      ...baseCreateBackendGroupRequest_LabelsEntry,
    } as CreateBackendGroupRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateBackendGroupRequest_LabelsEntry.$type,
  CreateBackendGroupRequest_LabelsEntry
);

const baseCreateBackendGroupMetadata: object = {
  $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupMetadata",
  backendGroupId: "",
};

export const CreateBackendGroupMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.CreateBackendGroupMetadata" as const,

  encode(
    message: CreateBackendGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateBackendGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateBackendGroupMetadata,
    } as CreateBackendGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backendGroupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateBackendGroupMetadata {
    const message = {
      ...baseCreateBackendGroupMetadata,
    } as CreateBackendGroupMetadata;
    message.backendGroupId =
      object.backendGroupId !== undefined && object.backendGroupId !== null
        ? String(object.backendGroupId)
        : "";
    return message;
  },

  toJSON(message: CreateBackendGroupMetadata): unknown {
    const obj: any = {};
    message.backendGroupId !== undefined &&
      (obj.backendGroupId = message.backendGroupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateBackendGroupMetadata>, I>>(
    object: I
  ): CreateBackendGroupMetadata {
    const message = {
      ...baseCreateBackendGroupMetadata,
    } as CreateBackendGroupMetadata;
    message.backendGroupId = object.backendGroupId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateBackendGroupMetadata.$type,
  CreateBackendGroupMetadata
);

const baseAddBackendRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.AddBackendRequest",
  backendGroupId: "",
};

export const AddBackendRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.AddBackendRequest" as const,

  encode(
    message: AddBackendRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
    }
    if (message.http !== undefined) {
      HttpBackend.encode(message.http, writer.uint32(18).fork()).ldelim();
    }
    if (message.grpc !== undefined) {
      GrpcBackend.encode(message.grpc, writer.uint32(26).fork()).ldelim();
    }
    if (message.stream !== undefined) {
      StreamBackend.encode(message.stream, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddBackendRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddBackendRequest } as AddBackendRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backendGroupId = reader.string();
          break;
        case 2:
          message.http = HttpBackend.decode(reader, reader.uint32());
          break;
        case 3:
          message.grpc = GrpcBackend.decode(reader, reader.uint32());
          break;
        case 5:
          message.stream = StreamBackend.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddBackendRequest {
    const message = { ...baseAddBackendRequest } as AddBackendRequest;
    message.backendGroupId =
      object.backendGroupId !== undefined && object.backendGroupId !== null
        ? String(object.backendGroupId)
        : "";
    message.http =
      object.http !== undefined && object.http !== null
        ? HttpBackend.fromJSON(object.http)
        : undefined;
    message.grpc =
      object.grpc !== undefined && object.grpc !== null
        ? GrpcBackend.fromJSON(object.grpc)
        : undefined;
    message.stream =
      object.stream !== undefined && object.stream !== null
        ? StreamBackend.fromJSON(object.stream)
        : undefined;
    return message;
  },

  toJSON(message: AddBackendRequest): unknown {
    const obj: any = {};
    message.backendGroupId !== undefined &&
      (obj.backendGroupId = message.backendGroupId);
    message.http !== undefined &&
      (obj.http = message.http ? HttpBackend.toJSON(message.http) : undefined);
    message.grpc !== undefined &&
      (obj.grpc = message.grpc ? GrpcBackend.toJSON(message.grpc) : undefined);
    message.stream !== undefined &&
      (obj.stream = message.stream
        ? StreamBackend.toJSON(message.stream)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddBackendRequest>, I>>(
    object: I
  ): AddBackendRequest {
    const message = { ...baseAddBackendRequest } as AddBackendRequest;
    message.backendGroupId = object.backendGroupId ?? "";
    message.http =
      object.http !== undefined && object.http !== null
        ? HttpBackend.fromPartial(object.http)
        : undefined;
    message.grpc =
      object.grpc !== undefined && object.grpc !== null
        ? GrpcBackend.fromPartial(object.grpc)
        : undefined;
    message.stream =
      object.stream !== undefined && object.stream !== null
        ? StreamBackend.fromPartial(object.stream)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(AddBackendRequest.$type, AddBackendRequest);

const baseAddBackendMetadata: object = {
  $type: "yandex.cloud.apploadbalancer.v1.AddBackendMetadata",
  backendGroupId: "",
  backendName: "",
};

export const AddBackendMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.AddBackendMetadata" as const,

  encode(
    message: AddBackendMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
    }
    if (message.backendName !== "") {
      writer.uint32(18).string(message.backendName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddBackendMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddBackendMetadata } as AddBackendMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backendGroupId = reader.string();
          break;
        case 2:
          message.backendName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddBackendMetadata {
    const message = { ...baseAddBackendMetadata } as AddBackendMetadata;
    message.backendGroupId =
      object.backendGroupId !== undefined && object.backendGroupId !== null
        ? String(object.backendGroupId)
        : "";
    message.backendName =
      object.backendName !== undefined && object.backendName !== null
        ? String(object.backendName)
        : "";
    return message;
  },

  toJSON(message: AddBackendMetadata): unknown {
    const obj: any = {};
    message.backendGroupId !== undefined &&
      (obj.backendGroupId = message.backendGroupId);
    message.backendName !== undefined &&
      (obj.backendName = message.backendName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddBackendMetadata>, I>>(
    object: I
  ): AddBackendMetadata {
    const message = { ...baseAddBackendMetadata } as AddBackendMetadata;
    message.backendGroupId = object.backendGroupId ?? "";
    message.backendName = object.backendName ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddBackendMetadata.$type, AddBackendMetadata);

const baseUpdateBackendRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendRequest",
  backendGroupId: "",
};

export const UpdateBackendRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendRequest" as const,

  encode(
    message: UpdateBackendRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
    }
    if (message.http !== undefined) {
      HttpBackend.encode(message.http, writer.uint32(26).fork()).ldelim();
    }
    if (message.grpc !== undefined) {
      GrpcBackend.encode(message.grpc, writer.uint32(34).fork()).ldelim();
    }
    if (message.stream !== undefined) {
      StreamBackend.encode(message.stream, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateBackendRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateBackendRequest } as UpdateBackendRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backendGroupId = reader.string();
          break;
        case 2:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        case 3:
          message.http = HttpBackend.decode(reader, reader.uint32());
          break;
        case 4:
          message.grpc = GrpcBackend.decode(reader, reader.uint32());
          break;
        case 5:
          message.stream = StreamBackend.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateBackendRequest {
    const message = { ...baseUpdateBackendRequest } as UpdateBackendRequest;
    message.backendGroupId =
      object.backendGroupId !== undefined && object.backendGroupId !== null
        ? String(object.backendGroupId)
        : "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
        : undefined;
    message.http =
      object.http !== undefined && object.http !== null
        ? HttpBackend.fromJSON(object.http)
        : undefined;
    message.grpc =
      object.grpc !== undefined && object.grpc !== null
        ? GrpcBackend.fromJSON(object.grpc)
        : undefined;
    message.stream =
      object.stream !== undefined && object.stream !== null
        ? StreamBackend.fromJSON(object.stream)
        : undefined;
    return message;
  },

  toJSON(message: UpdateBackendRequest): unknown {
    const obj: any = {};
    message.backendGroupId !== undefined &&
      (obj.backendGroupId = message.backendGroupId);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.http !== undefined &&
      (obj.http = message.http ? HttpBackend.toJSON(message.http) : undefined);
    message.grpc !== undefined &&
      (obj.grpc = message.grpc ? GrpcBackend.toJSON(message.grpc) : undefined);
    message.stream !== undefined &&
      (obj.stream = message.stream
        ? StreamBackend.toJSON(message.stream)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateBackendRequest>, I>>(
    object: I
  ): UpdateBackendRequest {
    const message = { ...baseUpdateBackendRequest } as UpdateBackendRequest;
    message.backendGroupId = object.backendGroupId ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.http =
      object.http !== undefined && object.http !== null
        ? HttpBackend.fromPartial(object.http)
        : undefined;
    message.grpc =
      object.grpc !== undefined && object.grpc !== null
        ? GrpcBackend.fromPartial(object.grpc)
        : undefined;
    message.stream =
      object.stream !== undefined && object.stream !== null
        ? StreamBackend.fromPartial(object.stream)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateBackendRequest.$type, UpdateBackendRequest);

const baseUpdateBackendMetadata: object = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendMetadata",
  backendGroupId: "",
  backendName: "",
};

export const UpdateBackendMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateBackendMetadata" as const,

  encode(
    message: UpdateBackendMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
    }
    if (message.backendName !== "") {
      writer.uint32(18).string(message.backendName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateBackendMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateBackendMetadata } as UpdateBackendMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backendGroupId = reader.string();
          break;
        case 2:
          message.backendName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateBackendMetadata {
    const message = { ...baseUpdateBackendMetadata } as UpdateBackendMetadata;
    message.backendGroupId =
      object.backendGroupId !== undefined && object.backendGroupId !== null
        ? String(object.backendGroupId)
        : "";
    message.backendName =
      object.backendName !== undefined && object.backendName !== null
        ? String(object.backendName)
        : "";
    return message;
  },

  toJSON(message: UpdateBackendMetadata): unknown {
    const obj: any = {};
    message.backendGroupId !== undefined &&
      (obj.backendGroupId = message.backendGroupId);
    message.backendName !== undefined &&
      (obj.backendName = message.backendName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateBackendMetadata>, I>>(
    object: I
  ): UpdateBackendMetadata {
    const message = { ...baseUpdateBackendMetadata } as UpdateBackendMetadata;
    message.backendGroupId = object.backendGroupId ?? "";
    message.backendName = object.backendName ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateBackendMetadata.$type, UpdateBackendMetadata);

const baseRemoveBackendRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveBackendRequest",
  backendGroupId: "",
  backendName: "",
};

export const RemoveBackendRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveBackendRequest" as const,

  encode(
    message: RemoveBackendRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
    }
    if (message.backendName !== "") {
      writer.uint32(18).string(message.backendName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveBackendRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRemoveBackendRequest } as RemoveBackendRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backendGroupId = reader.string();
          break;
        case 2:
          message.backendName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveBackendRequest {
    const message = { ...baseRemoveBackendRequest } as RemoveBackendRequest;
    message.backendGroupId =
      object.backendGroupId !== undefined && object.backendGroupId !== null
        ? String(object.backendGroupId)
        : "";
    message.backendName =
      object.backendName !== undefined && object.backendName !== null
        ? String(object.backendName)
        : "";
    return message;
  },

  toJSON(message: RemoveBackendRequest): unknown {
    const obj: any = {};
    message.backendGroupId !== undefined &&
      (obj.backendGroupId = message.backendGroupId);
    message.backendName !== undefined &&
      (obj.backendName = message.backendName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveBackendRequest>, I>>(
    object: I
  ): RemoveBackendRequest {
    const message = { ...baseRemoveBackendRequest } as RemoveBackendRequest;
    message.backendGroupId = object.backendGroupId ?? "";
    message.backendName = object.backendName ?? "";
    return message;
  },
};

messageTypeRegistry.set(RemoveBackendRequest.$type, RemoveBackendRequest);

const baseRemoveBackendMetadata: object = {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveBackendMetadata",
  backendGroupId: "",
  backendName: "",
};

export const RemoveBackendMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.RemoveBackendMetadata" as const,

  encode(
    message: RemoveBackendMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
    }
    if (message.backendName !== "") {
      writer.uint32(18).string(message.backendName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveBackendMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRemoveBackendMetadata } as RemoveBackendMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backendGroupId = reader.string();
          break;
        case 2:
          message.backendName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveBackendMetadata {
    const message = { ...baseRemoveBackendMetadata } as RemoveBackendMetadata;
    message.backendGroupId =
      object.backendGroupId !== undefined && object.backendGroupId !== null
        ? String(object.backendGroupId)
        : "";
    message.backendName =
      object.backendName !== undefined && object.backendName !== null
        ? String(object.backendName)
        : "";
    return message;
  },

  toJSON(message: RemoveBackendMetadata): unknown {
    const obj: any = {};
    message.backendGroupId !== undefined &&
      (obj.backendGroupId = message.backendGroupId);
    message.backendName !== undefined &&
      (obj.backendName = message.backendName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveBackendMetadata>, I>>(
    object: I
  ): RemoveBackendMetadata {
    const message = { ...baseRemoveBackendMetadata } as RemoveBackendMetadata;
    message.backendGroupId = object.backendGroupId ?? "";
    message.backendName = object.backendName ?? "";
    return message;
  },
};

messageTypeRegistry.set(RemoveBackendMetadata.$type, RemoveBackendMetadata);

const baseListBackendGroupOperationsRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupOperationsRequest",
  backendGroupId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListBackendGroupOperationsRequest = {
  $type:
    "yandex.cloud.apploadbalancer.v1.ListBackendGroupOperationsRequest" as const,

  encode(
    message: ListBackendGroupOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.backendGroupId !== "") {
      writer.uint32(10).string(message.backendGroupId);
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
  ): ListBackendGroupOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListBackendGroupOperationsRequest,
    } as ListBackendGroupOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backendGroupId = reader.string();
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

  fromJSON(object: any): ListBackendGroupOperationsRequest {
    const message = {
      ...baseListBackendGroupOperationsRequest,
    } as ListBackendGroupOperationsRequest;
    message.backendGroupId =
      object.backendGroupId !== undefined && object.backendGroupId !== null
        ? String(object.backendGroupId)
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

  toJSON(message: ListBackendGroupOperationsRequest): unknown {
    const obj: any = {};
    message.backendGroupId !== undefined &&
      (obj.backendGroupId = message.backendGroupId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListBackendGroupOperationsRequest>, I>
  >(object: I): ListBackendGroupOperationsRequest {
    const message = {
      ...baseListBackendGroupOperationsRequest,
    } as ListBackendGroupOperationsRequest;
    message.backendGroupId = object.backendGroupId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListBackendGroupOperationsRequest.$type,
  ListBackendGroupOperationsRequest
);

const baseListBackendGroupOperationsResponse: object = {
  $type: "yandex.cloud.apploadbalancer.v1.ListBackendGroupOperationsResponse",
  nextPageToken: "",
};

export const ListBackendGroupOperationsResponse = {
  $type:
    "yandex.cloud.apploadbalancer.v1.ListBackendGroupOperationsResponse" as const,

  encode(
    message: ListBackendGroupOperationsResponse,
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
  ): ListBackendGroupOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListBackendGroupOperationsResponse,
    } as ListBackendGroupOperationsResponse;
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

  fromJSON(object: any): ListBackendGroupOperationsResponse {
    const message = {
      ...baseListBackendGroupOperationsResponse,
    } as ListBackendGroupOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListBackendGroupOperationsResponse): unknown {
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
    I extends Exact<DeepPartial<ListBackendGroupOperationsResponse>, I>
  >(object: I): ListBackendGroupOperationsResponse {
    const message = {
      ...baseListBackendGroupOperationsResponse,
    } as ListBackendGroupOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListBackendGroupOperationsResponse.$type,
  ListBackendGroupOperationsResponse
);

/** A set of methods for managing backend groups. */
export const BackendGroupServiceService = {
  /**
   * Returns the specified backend group.
   *
   * To get the list of all available backend groups, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetBackendGroupRequest) =>
      Buffer.from(GetBackendGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetBackendGroupRequest.decode(value),
    responseSerialize: (value: BackendGroup) =>
      Buffer.from(BackendGroup.encode(value).finish()),
    responseDeserialize: (value: Buffer) => BackendGroup.decode(value),
  },
  /** Lists backend groups in the specified folder. */
  list: {
    path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListBackendGroupsRequest) =>
      Buffer.from(ListBackendGroupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListBackendGroupsRequest.decode(value),
    responseSerialize: (value: ListBackendGroupsResponse) =>
      Buffer.from(ListBackendGroupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListBackendGroupsResponse.decode(value),
  },
  /** Creates a backend group in the specified folder. */
  create: {
    path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateBackendGroupRequest) =>
      Buffer.from(CreateBackendGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateBackendGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified backend group. */
  update: {
    path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateBackendGroupRequest) =>
      Buffer.from(UpdateBackendGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateBackendGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified backend group. */
  delete: {
    path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteBackendGroupRequest) =>
      Buffer.from(DeleteBackendGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteBackendGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Adds backends to the specified backend group. */
  addBackend: {
    path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/AddBackend",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddBackendRequest) =>
      Buffer.from(AddBackendRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddBackendRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Removes backends from the specified backend group. */
  removeBackend: {
    path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/RemoveBackend",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveBackendRequest) =>
      Buffer.from(RemoveBackendRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveBackendRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified backend. */
  updateBackend: {
    path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/UpdateBackend",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateBackendRequest) =>
      Buffer.from(UpdateBackendRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateBackendRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified backend group. */
  listOperations: {
    path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListBackendGroupOperationsRequest) =>
      Buffer.from(ListBackendGroupOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListBackendGroupOperationsRequest.decode(value),
    responseSerialize: (value: ListBackendGroupOperationsResponse) =>
      Buffer.from(ListBackendGroupOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListBackendGroupOperationsResponse.decode(value),
  },
} as const;

export interface BackendGroupServiceServer
  extends UntypedServiceImplementation {
  /**
   * Returns the specified backend group.
   *
   * To get the list of all available backend groups, make a [List] request.
   */
  get: handleUnaryCall<GetBackendGroupRequest, BackendGroup>;
  /** Lists backend groups in the specified folder. */
  list: handleUnaryCall<ListBackendGroupsRequest, ListBackendGroupsResponse>;
  /** Creates a backend group in the specified folder. */
  create: handleUnaryCall<CreateBackendGroupRequest, Operation>;
  /** Updates the specified backend group. */
  update: handleUnaryCall<UpdateBackendGroupRequest, Operation>;
  /** Deletes the specified backend group. */
  delete: handleUnaryCall<DeleteBackendGroupRequest, Operation>;
  /** Adds backends to the specified backend group. */
  addBackend: handleUnaryCall<AddBackendRequest, Operation>;
  /** Removes backends from the specified backend group. */
  removeBackend: handleUnaryCall<RemoveBackendRequest, Operation>;
  /** Updates the specified backend. */
  updateBackend: handleUnaryCall<UpdateBackendRequest, Operation>;
  /** Lists operations for the specified backend group. */
  listOperations: handleUnaryCall<
    ListBackendGroupOperationsRequest,
    ListBackendGroupOperationsResponse
  >;
}

export interface BackendGroupServiceClient extends Client {
  /**
   * Returns the specified backend group.
   *
   * To get the list of all available backend groups, make a [List] request.
   */
  get(
    request: GetBackendGroupRequest,
    callback: (error: ServiceError | null, response: BackendGroup) => void
  ): ClientUnaryCall;
  get(
    request: GetBackendGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: BackendGroup) => void
  ): ClientUnaryCall;
  get(
    request: GetBackendGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: BackendGroup) => void
  ): ClientUnaryCall;
  /** Lists backend groups in the specified folder. */
  list(
    request: ListBackendGroupsRequest,
    callback: (
      error: ServiceError | null,
      response: ListBackendGroupsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListBackendGroupsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListBackendGroupsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListBackendGroupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListBackendGroupsResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates a backend group in the specified folder. */
  create(
    request: CreateBackendGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateBackendGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateBackendGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified backend group. */
  update(
    request: UpdateBackendGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateBackendGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateBackendGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified backend group. */
  delete(
    request: DeleteBackendGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteBackendGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteBackendGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Adds backends to the specified backend group. */
  addBackend(
    request: AddBackendRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addBackend(
    request: AddBackendRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addBackend(
    request: AddBackendRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Removes backends from the specified backend group. */
  removeBackend(
    request: RemoveBackendRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  removeBackend(
    request: RemoveBackendRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  removeBackend(
    request: RemoveBackendRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified backend. */
  updateBackend(
    request: UpdateBackendRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateBackend(
    request: UpdateBackendRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateBackend(
    request: UpdateBackendRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified backend group. */
  listOperations(
    request: ListBackendGroupOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListBackendGroupOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListBackendGroupOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListBackendGroupOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListBackendGroupOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListBackendGroupOperationsResponse
    ) => void
  ): ClientUnaryCall;
}

export const BackendGroupServiceClient = makeGenericClientConstructor(
  BackendGroupServiceService,
  "yandex.cloud.apploadbalancer.v1.BackendGroupService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): BackendGroupServiceClient;
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
