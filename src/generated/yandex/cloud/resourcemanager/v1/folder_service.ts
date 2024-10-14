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
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Folder } from "../../../../yandex/cloud/resourcemanager/v1/folder";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import {
  ListAccessBindingsRequest,
  ListAccessBindingsResponse,
  SetAccessBindingsRequest,
  UpdateAccessBindingsRequest,
} from "../../../../yandex/cloud/access/access";

export const protobufPackage = "yandex.cloud.resourcemanager.v1";

export interface GetFolderRequest {
  $type: "yandex.cloud.resourcemanager.v1.GetFolderRequest";
  /**
   * ID of the Folder resource to return.
   * To get the folder ID, use a [FolderService.List] request.
   */
  folderId: string;
}

export interface ListFoldersRequest {
  $type: "yandex.cloud.resourcemanager.v1.ListFoldersRequest";
  /**
   * ID of the cloud to list folders in.
   * To get the cloud ID, use a [yandex.cloud.resourcemanager.v1.CloudService.List] request.
   */
  cloudId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListFoldersResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. Set [page_token]
   * to the [ListFoldersResponse.next_page_token]
   * returned by a previous list request to get the next page of results.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on the [Folder.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
}

export interface ListFoldersResponse {
  $type: "yandex.cloud.resourcemanager.v1.ListFoldersResponse";
  /** List of Folder resources. */
  folders: Folder[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListFoldersRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListFoldersRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateFolderRequest {
  $type: "yandex.cloud.resourcemanager.v1.CreateFolderRequest";
  /**
   * ID of the cloud to create a folder in.
   * To get the cloud ID, use a [yandex.cloud.resourcemanager.v1.CloudService.List] request.
   */
  cloudId: string;
  /**
   * Name of the folder.
   * The name must be unique within the cloud.
   */
  name: string;
  /** Description of the folder. */
  description: string;
  /** Resource labels as `` key:value `` pairs. */
  labels: { [key: string]: string };
}

export interface CreateFolderRequest_LabelsEntry {
  $type: "yandex.cloud.resourcemanager.v1.CreateFolderRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateFolderMetadata {
  $type: "yandex.cloud.resourcemanager.v1.CreateFolderMetadata";
  /** ID of the folder that is being created. */
  folderId: string;
}

export interface UpdateFolderRequest {
  $type: "yandex.cloud.resourcemanager.v1.UpdateFolderRequest";
  /**
   * ID of the Folder resource to update.
   * To get the folder ID, use a [FolderService.List] request.
   */
  folderId: string;
  /** Field mask that specifies which fields of the Folder resource are going to be updated. */
  updateMask?: FieldMask;
  /**
   * Name of the folder.
   * The name must be unique within the cloud.
   */
  name: string;
  /** Description of the folder. */
  description: string;
  /** Resource labels as `` key:value `` pairs. */
  labels: { [key: string]: string };
}

export interface UpdateFolderRequest_LabelsEntry {
  $type: "yandex.cloud.resourcemanager.v1.UpdateFolderRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateFolderMetadata {
  $type: "yandex.cloud.resourcemanager.v1.UpdateFolderMetadata";
  /** ID of the Folder resource that is being updated. */
  folderId: string;
}

export interface DeleteFolderRequest {
  $type: "yandex.cloud.resourcemanager.v1.DeleteFolderRequest";
  /**
   * ID of the folder to delete.
   * To get the folder ID, use a [FolderService.List] request.
   */
  folderId: string;
  /**
   * The timestamp after which the process of deleting the folder should begin.
   * Until this timestamp, the folder goes into the [Folder.Status.PENDING_DELETION] state and all resources in this
   * folder are stopped. In this state, it is possible to cancel the delete operation without any loss.
   * After this timestamp, the status of the folder will become [Folder.Status.DELETING] and the process of deleting
   * all the resources  of the folder will be started. If [delete_after] is not specified it will be
   * (now + 24 hours). To initiate an immediate deletion [delete_after] must be <= now.
   */
  deleteAfter?: Date;
}

export interface DeleteFolderMetadata {
  $type: "yandex.cloud.resourcemanager.v1.DeleteFolderMetadata";
  /** ID of the folder that is being deleted. */
  folderId: string;
  /** The timestamp after which the process of deleting the folder should begin. */
  deleteAfter?: Date;
  /** Information about operation cancellation */
  cancelledBy: string;
  cancelledAt?: Date;
}

export interface ListFolderOperationsRequest {
  $type: "yandex.cloud.resourcemanager.v1.ListFolderOperationsRequest";
  /** ID of the Folder resource to list operations for. */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListFolderOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. Set [page_token]
   * to the [ListFolderOperationsResponse.next_page_token]
   * returned by a previous list request to get the next page of results.
   */
  pageToken: string;
}

export interface ListFolderOperationsResponse {
  $type: "yandex.cloud.resourcemanager.v1.ListFolderOperationsResponse";
  /** List of operations for the specified folder. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListFolderOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListFolderOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

const baseGetFolderRequest: object = {
  $type: "yandex.cloud.resourcemanager.v1.GetFolderRequest",
  folderId: "",
};

export const GetFolderRequest = {
  $type: "yandex.cloud.resourcemanager.v1.GetFolderRequest" as const,

  encode(
    message: GetFolderRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFolderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetFolderRequest } as GetFolderRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetFolderRequest {
    const message = { ...baseGetFolderRequest } as GetFolderRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    return message;
  },

  toJSON(message: GetFolderRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetFolderRequest>, I>>(
    object: I
  ): GetFolderRequest {
    const message = { ...baseGetFolderRequest } as GetFolderRequest;
    message.folderId = object.folderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetFolderRequest.$type, GetFolderRequest);

const baseListFoldersRequest: object = {
  $type: "yandex.cloud.resourcemanager.v1.ListFoldersRequest",
  cloudId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListFoldersRequest = {
  $type: "yandex.cloud.resourcemanager.v1.ListFoldersRequest" as const,

  encode(
    message: ListFoldersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cloudId !== "") {
      writer.uint32(10).string(message.cloudId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFoldersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListFoldersRequest } as ListFoldersRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cloudId = reader.string();
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

  fromJSON(object: any): ListFoldersRequest {
    const message = { ...baseListFoldersRequest } as ListFoldersRequest;
    message.cloudId =
      object.cloudId !== undefined && object.cloudId !== null
        ? String(object.cloudId)
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

  toJSON(message: ListFoldersRequest): unknown {
    const obj: any = {};
    message.cloudId !== undefined && (obj.cloudId = message.cloudId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListFoldersRequest>, I>>(
    object: I
  ): ListFoldersRequest {
    const message = { ...baseListFoldersRequest } as ListFoldersRequest;
    message.cloudId = object.cloudId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListFoldersRequest.$type, ListFoldersRequest);

const baseListFoldersResponse: object = {
  $type: "yandex.cloud.resourcemanager.v1.ListFoldersResponse",
  nextPageToken: "",
};

export const ListFoldersResponse = {
  $type: "yandex.cloud.resourcemanager.v1.ListFoldersResponse" as const,

  encode(
    message: ListFoldersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.folders) {
      Folder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFoldersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListFoldersResponse } as ListFoldersResponse;
    message.folders = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folders.push(Folder.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListFoldersResponse {
    const message = { ...baseListFoldersResponse } as ListFoldersResponse;
    message.folders = (object.folders ?? []).map((e: any) =>
      Folder.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListFoldersResponse): unknown {
    const obj: any = {};
    if (message.folders) {
      obj.folders = message.folders.map((e) =>
        e ? Folder.toJSON(e) : undefined
      );
    } else {
      obj.folders = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListFoldersResponse>, I>>(
    object: I
  ): ListFoldersResponse {
    const message = { ...baseListFoldersResponse } as ListFoldersResponse;
    message.folders = object.folders?.map((e) => Folder.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListFoldersResponse.$type, ListFoldersResponse);

const baseCreateFolderRequest: object = {
  $type: "yandex.cloud.resourcemanager.v1.CreateFolderRequest",
  cloudId: "",
  name: "",
  description: "",
};

export const CreateFolderRequest = {
  $type: "yandex.cloud.resourcemanager.v1.CreateFolderRequest" as const,

  encode(
    message: CreateFolderRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cloudId !== "") {
      writer.uint32(10).string(message.cloudId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateFolderRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.resourcemanager.v1.CreateFolderRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateFolderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateFolderRequest } as CreateFolderRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cloudId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          const entry4 = CreateFolderRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateFolderRequest {
    const message = { ...baseCreateFolderRequest } as CreateFolderRequest;
    message.cloudId =
      object.cloudId !== undefined && object.cloudId !== null
        ? String(object.cloudId)
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
    return message;
  },

  toJSON(message: CreateFolderRequest): unknown {
    const obj: any = {};
    message.cloudId !== undefined && (obj.cloudId = message.cloudId);
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

  fromPartial<I extends Exact<DeepPartial<CreateFolderRequest>, I>>(
    object: I
  ): CreateFolderRequest {
    const message = { ...baseCreateFolderRequest } as CreateFolderRequest;
    message.cloudId = object.cloudId ?? "";
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

messageTypeRegistry.set(CreateFolderRequest.$type, CreateFolderRequest);

const baseCreateFolderRequest_LabelsEntry: object = {
  $type: "yandex.cloud.resourcemanager.v1.CreateFolderRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateFolderRequest_LabelsEntry = {
  $type:
    "yandex.cloud.resourcemanager.v1.CreateFolderRequest.LabelsEntry" as const,

  encode(
    message: CreateFolderRequest_LabelsEntry,
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
  ): CreateFolderRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateFolderRequest_LabelsEntry,
    } as CreateFolderRequest_LabelsEntry;
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

  fromJSON(object: any): CreateFolderRequest_LabelsEntry {
    const message = {
      ...baseCreateFolderRequest_LabelsEntry,
    } as CreateFolderRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateFolderRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateFolderRequest_LabelsEntry>, I>>(
    object: I
  ): CreateFolderRequest_LabelsEntry {
    const message = {
      ...baseCreateFolderRequest_LabelsEntry,
    } as CreateFolderRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateFolderRequest_LabelsEntry.$type,
  CreateFolderRequest_LabelsEntry
);

const baseCreateFolderMetadata: object = {
  $type: "yandex.cloud.resourcemanager.v1.CreateFolderMetadata",
  folderId: "",
};

export const CreateFolderMetadata = {
  $type: "yandex.cloud.resourcemanager.v1.CreateFolderMetadata" as const,

  encode(
    message: CreateFolderMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateFolderMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateFolderMetadata } as CreateFolderMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateFolderMetadata {
    const message = { ...baseCreateFolderMetadata } as CreateFolderMetadata;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    return message;
  },

  toJSON(message: CreateFolderMetadata): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateFolderMetadata>, I>>(
    object: I
  ): CreateFolderMetadata {
    const message = { ...baseCreateFolderMetadata } as CreateFolderMetadata;
    message.folderId = object.folderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateFolderMetadata.$type, CreateFolderMetadata);

const baseUpdateFolderRequest: object = {
  $type: "yandex.cloud.resourcemanager.v1.UpdateFolderRequest",
  folderId: "",
  name: "",
  description: "",
};

export const UpdateFolderRequest = {
  $type: "yandex.cloud.resourcemanager.v1.UpdateFolderRequest" as const,

  encode(
    message: UpdateFolderRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
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
      UpdateFolderRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.resourcemanager.v1.UpdateFolderRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFolderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateFolderRequest } as UpdateFolderRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
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
          const entry5 = UpdateFolderRequest_LabelsEntry.decode(
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

  fromJSON(object: any): UpdateFolderRequest {
    const message = { ...baseUpdateFolderRequest } as UpdateFolderRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
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

  toJSON(message: UpdateFolderRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
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

  fromPartial<I extends Exact<DeepPartial<UpdateFolderRequest>, I>>(
    object: I
  ): UpdateFolderRequest {
    const message = { ...baseUpdateFolderRequest } as UpdateFolderRequest;
    message.folderId = object.folderId ?? "";
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

messageTypeRegistry.set(UpdateFolderRequest.$type, UpdateFolderRequest);

const baseUpdateFolderRequest_LabelsEntry: object = {
  $type: "yandex.cloud.resourcemanager.v1.UpdateFolderRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateFolderRequest_LabelsEntry = {
  $type:
    "yandex.cloud.resourcemanager.v1.UpdateFolderRequest.LabelsEntry" as const,

  encode(
    message: UpdateFolderRequest_LabelsEntry,
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
  ): UpdateFolderRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateFolderRequest_LabelsEntry,
    } as UpdateFolderRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateFolderRequest_LabelsEntry {
    const message = {
      ...baseUpdateFolderRequest_LabelsEntry,
    } as UpdateFolderRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateFolderRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateFolderRequest_LabelsEntry>, I>>(
    object: I
  ): UpdateFolderRequest_LabelsEntry {
    const message = {
      ...baseUpdateFolderRequest_LabelsEntry,
    } as UpdateFolderRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateFolderRequest_LabelsEntry.$type,
  UpdateFolderRequest_LabelsEntry
);

const baseUpdateFolderMetadata: object = {
  $type: "yandex.cloud.resourcemanager.v1.UpdateFolderMetadata",
  folderId: "",
};

export const UpdateFolderMetadata = {
  $type: "yandex.cloud.resourcemanager.v1.UpdateFolderMetadata" as const,

  encode(
    message: UpdateFolderMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateFolderMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateFolderMetadata } as UpdateFolderMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateFolderMetadata {
    const message = { ...baseUpdateFolderMetadata } as UpdateFolderMetadata;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    return message;
  },

  toJSON(message: UpdateFolderMetadata): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateFolderMetadata>, I>>(
    object: I
  ): UpdateFolderMetadata {
    const message = { ...baseUpdateFolderMetadata } as UpdateFolderMetadata;
    message.folderId = object.folderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateFolderMetadata.$type, UpdateFolderMetadata);

const baseDeleteFolderRequest: object = {
  $type: "yandex.cloud.resourcemanager.v1.DeleteFolderRequest",
  folderId: "",
};

export const DeleteFolderRequest = {
  $type: "yandex.cloud.resourcemanager.v1.DeleteFolderRequest" as const,

  encode(
    message: DeleteFolderRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.deleteAfter !== undefined) {
      Timestamp.encode(
        toTimestamp(message.deleteAfter),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFolderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteFolderRequest } as DeleteFolderRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 2:
          message.deleteAfter = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteFolderRequest {
    const message = { ...baseDeleteFolderRequest } as DeleteFolderRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.deleteAfter =
      object.deleteAfter !== undefined && object.deleteAfter !== null
        ? fromJsonTimestamp(object.deleteAfter)
        : undefined;
    return message;
  },

  toJSON(message: DeleteFolderRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.deleteAfter !== undefined &&
      (obj.deleteAfter = message.deleteAfter.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteFolderRequest>, I>>(
    object: I
  ): DeleteFolderRequest {
    const message = { ...baseDeleteFolderRequest } as DeleteFolderRequest;
    message.folderId = object.folderId ?? "";
    message.deleteAfter = object.deleteAfter ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(DeleteFolderRequest.$type, DeleteFolderRequest);

const baseDeleteFolderMetadata: object = {
  $type: "yandex.cloud.resourcemanager.v1.DeleteFolderMetadata",
  folderId: "",
  cancelledBy: "",
};

export const DeleteFolderMetadata = {
  $type: "yandex.cloud.resourcemanager.v1.DeleteFolderMetadata" as const,

  encode(
    message: DeleteFolderMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.deleteAfter !== undefined) {
      Timestamp.encode(
        toTimestamp(message.deleteAfter),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.cancelledBy !== "") {
      writer.uint32(26).string(message.cancelledBy);
    }
    if (message.cancelledAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.cancelledAt),
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteFolderMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteFolderMetadata } as DeleteFolderMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 2:
          message.deleteAfter = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.cancelledBy = reader.string();
          break;
        case 4:
          message.cancelledAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteFolderMetadata {
    const message = { ...baseDeleteFolderMetadata } as DeleteFolderMetadata;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.deleteAfter =
      object.deleteAfter !== undefined && object.deleteAfter !== null
        ? fromJsonTimestamp(object.deleteAfter)
        : undefined;
    message.cancelledBy =
      object.cancelledBy !== undefined && object.cancelledBy !== null
        ? String(object.cancelledBy)
        : "";
    message.cancelledAt =
      object.cancelledAt !== undefined && object.cancelledAt !== null
        ? fromJsonTimestamp(object.cancelledAt)
        : undefined;
    return message;
  },

  toJSON(message: DeleteFolderMetadata): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.deleteAfter !== undefined &&
      (obj.deleteAfter = message.deleteAfter.toISOString());
    message.cancelledBy !== undefined &&
      (obj.cancelledBy = message.cancelledBy);
    message.cancelledAt !== undefined &&
      (obj.cancelledAt = message.cancelledAt.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteFolderMetadata>, I>>(
    object: I
  ): DeleteFolderMetadata {
    const message = { ...baseDeleteFolderMetadata } as DeleteFolderMetadata;
    message.folderId = object.folderId ?? "";
    message.deleteAfter = object.deleteAfter ?? undefined;
    message.cancelledBy = object.cancelledBy ?? "";
    message.cancelledAt = object.cancelledAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(DeleteFolderMetadata.$type, DeleteFolderMetadata);

const baseListFolderOperationsRequest: object = {
  $type: "yandex.cloud.resourcemanager.v1.ListFolderOperationsRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListFolderOperationsRequest = {
  $type: "yandex.cloud.resourcemanager.v1.ListFolderOperationsRequest" as const,

  encode(
    message: ListFolderOperationsRequest,
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
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListFolderOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListFolderOperationsRequest,
    } as ListFolderOperationsRequest;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListFolderOperationsRequest {
    const message = {
      ...baseListFolderOperationsRequest,
    } as ListFolderOperationsRequest;
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
    return message;
  },

  toJSON(message: ListFolderOperationsRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListFolderOperationsRequest>, I>>(
    object: I
  ): ListFolderOperationsRequest {
    const message = {
      ...baseListFolderOperationsRequest,
    } as ListFolderOperationsRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListFolderOperationsRequest.$type,
  ListFolderOperationsRequest
);

const baseListFolderOperationsResponse: object = {
  $type: "yandex.cloud.resourcemanager.v1.ListFolderOperationsResponse",
  nextPageToken: "",
};

export const ListFolderOperationsResponse = {
  $type:
    "yandex.cloud.resourcemanager.v1.ListFolderOperationsResponse" as const,

  encode(
    message: ListFolderOperationsResponse,
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
  ): ListFolderOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListFolderOperationsResponse,
    } as ListFolderOperationsResponse;
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

  fromJSON(object: any): ListFolderOperationsResponse {
    const message = {
      ...baseListFolderOperationsResponse,
    } as ListFolderOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListFolderOperationsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<ListFolderOperationsResponse>, I>>(
    object: I
  ): ListFolderOperationsResponse {
    const message = {
      ...baseListFolderOperationsResponse,
    } as ListFolderOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListFolderOperationsResponse.$type,
  ListFolderOperationsResponse
);

/** A set of methods for managing Folder resources. */
export const FolderServiceService = {
  /**
   * Returns the specified Folder resource.
   *
   * To get the list of available Folder resources, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.resourcemanager.v1.FolderService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetFolderRequest) =>
      Buffer.from(GetFolderRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetFolderRequest.decode(value),
    responseSerialize: (value: Folder) =>
      Buffer.from(Folder.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Folder.decode(value),
  },
  /** Retrieves the list of Folder resources in the specified cloud. */
  list: {
    path: "/yandex.cloud.resourcemanager.v1.FolderService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListFoldersRequest) =>
      Buffer.from(ListFoldersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListFoldersRequest.decode(value),
    responseSerialize: (value: ListFoldersResponse) =>
      Buffer.from(ListFoldersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListFoldersResponse.decode(value),
  },
  /** Creates a folder in the specified cloud. */
  create: {
    path: "/yandex.cloud.resourcemanager.v1.FolderService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateFolderRequest) =>
      Buffer.from(CreateFolderRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateFolderRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified folder. */
  update: {
    path: "/yandex.cloud.resourcemanager.v1.FolderService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateFolderRequest) =>
      Buffer.from(UpdateFolderRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateFolderRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified folder. */
  delete: {
    path: "/yandex.cloud.resourcemanager.v1.FolderService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteFolderRequest) =>
      Buffer.from(DeleteFolderRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteFolderRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified folder. */
  listOperations: {
    path: "/yandex.cloud.resourcemanager.v1.FolderService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListFolderOperationsRequest) =>
      Buffer.from(ListFolderOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListFolderOperationsRequest.decode(value),
    responseSerialize: (value: ListFolderOperationsResponse) =>
      Buffer.from(ListFolderOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListFolderOperationsResponse.decode(value),
  },
  /** Lists access bindings for the specified folder. */
  listAccessBindings: {
    path: "/yandex.cloud.resourcemanager.v1.FolderService/ListAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAccessBindingsRequest) =>
      Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListAccessBindingsRequest.decode(value),
    responseSerialize: (value: ListAccessBindingsResponse) =>
      Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListAccessBindingsResponse.decode(value),
  },
  /** Sets access bindings for the specified folder. */
  setAccessBindings: {
    path: "/yandex.cloud.resourcemanager.v1.FolderService/SetAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetAccessBindingsRequest) =>
      Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      SetAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates access bindings for the specified folder. */
  updateAccessBindings: {
    path: "/yandex.cloud.resourcemanager.v1.FolderService/UpdateAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAccessBindingsRequest) =>
      Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface FolderServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified Folder resource.
   *
   * To get the list of available Folder resources, make a [List] request.
   */
  get: handleUnaryCall<GetFolderRequest, Folder>;
  /** Retrieves the list of Folder resources in the specified cloud. */
  list: handleUnaryCall<ListFoldersRequest, ListFoldersResponse>;
  /** Creates a folder in the specified cloud. */
  create: handleUnaryCall<CreateFolderRequest, Operation>;
  /** Updates the specified folder. */
  update: handleUnaryCall<UpdateFolderRequest, Operation>;
  /** Deletes the specified folder. */
  delete: handleUnaryCall<DeleteFolderRequest, Operation>;
  /** Lists operations for the specified folder. */
  listOperations: handleUnaryCall<
    ListFolderOperationsRequest,
    ListFolderOperationsResponse
  >;
  /** Lists access bindings for the specified folder. */
  listAccessBindings: handleUnaryCall<
    ListAccessBindingsRequest,
    ListAccessBindingsResponse
  >;
  /** Sets access bindings for the specified folder. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the specified folder. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface FolderServiceClient extends Client {
  /**
   * Returns the specified Folder resource.
   *
   * To get the list of available Folder resources, make a [List] request.
   */
  get(
    request: GetFolderRequest,
    callback: (error: ServiceError | null, response: Folder) => void
  ): ClientUnaryCall;
  get(
    request: GetFolderRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Folder) => void
  ): ClientUnaryCall;
  get(
    request: GetFolderRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Folder) => void
  ): ClientUnaryCall;
  /** Retrieves the list of Folder resources in the specified cloud. */
  list(
    request: ListFoldersRequest,
    callback: (
      error: ServiceError | null,
      response: ListFoldersResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListFoldersRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListFoldersResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListFoldersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListFoldersResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates a folder in the specified cloud. */
  create(
    request: CreateFolderRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateFolderRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateFolderRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified folder. */
  update(
    request: UpdateFolderRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateFolderRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateFolderRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified folder. */
  delete(
    request: DeleteFolderRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteFolderRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteFolderRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified folder. */
  listOperations(
    request: ListFolderOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListFolderOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListFolderOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListFolderOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListFolderOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListFolderOperationsResponse
    ) => void
  ): ClientUnaryCall;
  /** Lists access bindings for the specified folder. */
  listAccessBindings(
    request: ListAccessBindingsRequest,
    callback: (
      error: ServiceError | null,
      response: ListAccessBindingsResponse
    ) => void
  ): ClientUnaryCall;
  listAccessBindings(
    request: ListAccessBindingsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListAccessBindingsResponse
    ) => void
  ): ClientUnaryCall;
  listAccessBindings(
    request: ListAccessBindingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListAccessBindingsResponse
    ) => void
  ): ClientUnaryCall;
  /** Sets access bindings for the specified folder. */
  setAccessBindings(
    request: SetAccessBindingsRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  setAccessBindings(
    request: SetAccessBindingsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  setAccessBindings(
    request: SetAccessBindingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates access bindings for the specified folder. */
  updateAccessBindings(
    request: UpdateAccessBindingsRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateAccessBindings(
    request: UpdateAccessBindingsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateAccessBindings(
    request: UpdateAccessBindingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const FolderServiceClient = makeGenericClientConstructor(
  FolderServiceService,
  "yandex.cloud.resourcemanager.v1.FolderService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): FolderServiceClient;
  service: typeof FolderServiceService;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
