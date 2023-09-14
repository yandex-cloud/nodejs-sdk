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
import { Resource, Task } from "../../../../yandex/cloud/backup/v1/resource";
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.backup.v1";

export interface ListResourcesRequest {
  $type: "yandex.cloud.backup.v1.ListResourcesRequest";
  /** Folder ID. */
  folderId: string;
  /** Number of results per page. */
  pageSize: number;
  /** Token for the results page. */
  pageToken: string;
}

export interface ListResourcesResponse {
  $type: "yandex.cloud.backup.v1.ListResourcesResponse";
  /** Set of resource parameters. */
  resources: Resource[];
  /** Token for the next results page. */
  nextPageToken: string;
}

export interface GetResourceRequest {
  $type: "yandex.cloud.backup.v1.GetResourceRequest";
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
}

export interface GetResourceResponse {
  $type: "yandex.cloud.backup.v1.GetResourceResponse";
  /** Set of resource parameters. */
  resource?: Resource;
}

export interface DeleteResourceRequest {
  $type: "yandex.cloud.backup.v1.DeleteResourceRequest";
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
  /** Resource ID is used to identify Compute Cloud instance in backup service. */
  resourceId: string;
}

export interface DeleteResourceMetadata {
  $type: "yandex.cloud.backup.v1.DeleteResourceMetadata";
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
}

export interface ListTasksRequest {
  $type: "yandex.cloud.backup.v1.ListTasksRequest";
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
  /** Number of results per page. */
  pageSize: number;
  /** Token for the results page. */
  pageToken: string;
}

export interface ListTasksResponse {
  $type: "yandex.cloud.backup.v1.ListTasksResponse";
  /** Set of tasks parameters. */
  tasks: Task[];
  /** Token for the next results page. */
  nextPageToken: string;
}

export interface ListDirectoryRequest {
  $type: "yandex.cloud.backup.v1.ListDirectoryRequest";
  /** Folder ID. */
  folderId: string;
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
  /** Path to list items in. */
  path: string;
}

export interface ListDirectoryResponse {
  $type: "yandex.cloud.backup.v1.ListDirectoryResponse";
  items: ListDirectoryResponse_FilesystemItem[];
}

export interface ListDirectoryResponse_FilesystemItem {
  $type: "yandex.cloud.backup.v1.ListDirectoryResponse.FilesystemItem";
  /** Item name. */
  name: string;
  /** Might be Volume, Directory of File. */
  type: ListDirectoryResponse_FilesystemItem_Type;
  /** Might be Directory or File. */
  fileType: ListDirectoryResponse_FilesystemItem_Type;
  size: number;
}

export enum ListDirectoryResponse_FilesystemItem_Type {
  TYPE_UNSPECIFIED = 0,
  VOLUME = 1,
  DIRECTORY = 2,
  FILE = 3,
  UNRECOGNIZED = -1,
}

export function listDirectoryResponse_FilesystemItem_TypeFromJSON(
  object: any
): ListDirectoryResponse_FilesystemItem_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return ListDirectoryResponse_FilesystemItem_Type.TYPE_UNSPECIFIED;
    case 1:
    case "VOLUME":
      return ListDirectoryResponse_FilesystemItem_Type.VOLUME;
    case 2:
    case "DIRECTORY":
      return ListDirectoryResponse_FilesystemItem_Type.DIRECTORY;
    case 3:
    case "FILE":
      return ListDirectoryResponse_FilesystemItem_Type.FILE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ListDirectoryResponse_FilesystemItem_Type.UNRECOGNIZED;
  }
}

export function listDirectoryResponse_FilesystemItem_TypeToJSON(
  object: ListDirectoryResponse_FilesystemItem_Type
): string {
  switch (object) {
    case ListDirectoryResponse_FilesystemItem_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case ListDirectoryResponse_FilesystemItem_Type.VOLUME:
      return "VOLUME";
    case ListDirectoryResponse_FilesystemItem_Type.DIRECTORY:
      return "DIRECTORY";
    case ListDirectoryResponse_FilesystemItem_Type.FILE:
      return "FILE";
    default:
      return "UNKNOWN";
  }
}

export interface CreateDirectoryRequest {
  $type: "yandex.cloud.backup.v1.CreateDirectoryRequest";
  /** Folder ID. */
  folderId: string;
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
  /** Path to create directory in. */
  path: string;
}

export interface CreateDirectoryMetadata {
  $type: "yandex.cloud.backup.v1.CreateDirectoryMetadata";
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
  /** Path to create directory metadata in. */
  path: string;
}

const baseListResourcesRequest: object = {
  $type: "yandex.cloud.backup.v1.ListResourcesRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListResourcesRequest = {
  $type: "yandex.cloud.backup.v1.ListResourcesRequest" as const,

  encode(
    message: ListResourcesRequest,
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
  ): ListResourcesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListResourcesRequest } as ListResourcesRequest;
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

  fromJSON(object: any): ListResourcesRequest {
    const message = { ...baseListResourcesRequest } as ListResourcesRequest;
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

  toJSON(message: ListResourcesRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListResourcesRequest>, I>>(
    object: I
  ): ListResourcesRequest {
    const message = { ...baseListResourcesRequest } as ListResourcesRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListResourcesRequest.$type, ListResourcesRequest);

const baseListResourcesResponse: object = {
  $type: "yandex.cloud.backup.v1.ListResourcesResponse",
  nextPageToken: "",
};

export const ListResourcesResponse = {
  $type: "yandex.cloud.backup.v1.ListResourcesResponse" as const,

  encode(
    message: ListResourcesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListResourcesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListResourcesResponse } as ListResourcesResponse;
    message.resources = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resources.push(Resource.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListResourcesResponse {
    const message = { ...baseListResourcesResponse } as ListResourcesResponse;
    message.resources = (object.resources ?? []).map((e: any) =>
      Resource.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListResourcesResponse): unknown {
    const obj: any = {};
    if (message.resources) {
      obj.resources = message.resources.map((e) =>
        e ? Resource.toJSON(e) : undefined
      );
    } else {
      obj.resources = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListResourcesResponse>, I>>(
    object: I
  ): ListResourcesResponse {
    const message = { ...baseListResourcesResponse } as ListResourcesResponse;
    message.resources =
      object.resources?.map((e) => Resource.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListResourcesResponse.$type, ListResourcesResponse);

const baseGetResourceRequest: object = {
  $type: "yandex.cloud.backup.v1.GetResourceRequest",
  computeInstanceId: "",
};

export const GetResourceRequest = {
  $type: "yandex.cloud.backup.v1.GetResourceRequest" as const,

  encode(
    message: GetResourceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetResourceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetResourceRequest } as GetResourceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.computeInstanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetResourceRequest {
    const message = { ...baseGetResourceRequest } as GetResourceRequest;
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : "";
    return message;
  },

  toJSON(message: GetResourceRequest): unknown {
    const obj: any = {};
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetResourceRequest>, I>>(
    object: I
  ): GetResourceRequest {
    const message = { ...baseGetResourceRequest } as GetResourceRequest;
    message.computeInstanceId = object.computeInstanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetResourceRequest.$type, GetResourceRequest);

const baseGetResourceResponse: object = {
  $type: "yandex.cloud.backup.v1.GetResourceResponse",
};

export const GetResourceResponse = {
  $type: "yandex.cloud.backup.v1.GetResourceResponse" as const,

  encode(
    message: GetResourceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resource !== undefined) {
      Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetResourceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetResourceResponse } as GetResourceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resource = Resource.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetResourceResponse {
    const message = { ...baseGetResourceResponse } as GetResourceResponse;
    message.resource =
      object.resource !== undefined && object.resource !== null
        ? Resource.fromJSON(object.resource)
        : undefined;
    return message;
  },

  toJSON(message: GetResourceResponse): unknown {
    const obj: any = {};
    message.resource !== undefined &&
      (obj.resource = message.resource
        ? Resource.toJSON(message.resource)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetResourceResponse>, I>>(
    object: I
  ): GetResourceResponse {
    const message = { ...baseGetResourceResponse } as GetResourceResponse;
    message.resource =
      object.resource !== undefined && object.resource !== null
        ? Resource.fromPartial(object.resource)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(GetResourceResponse.$type, GetResourceResponse);

const baseDeleteResourceRequest: object = {
  $type: "yandex.cloud.backup.v1.DeleteResourceRequest",
  computeInstanceId: "",
  resourceId: "",
};

export const DeleteResourceRequest = {
  $type: "yandex.cloud.backup.v1.DeleteResourceRequest" as const,

  encode(
    message: DeleteResourceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    if (message.resourceId !== "") {
      writer.uint32(18).string(message.resourceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteResourceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteResourceRequest } as DeleteResourceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.computeInstanceId = reader.string();
          break;
        case 2:
          message.resourceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteResourceRequest {
    const message = { ...baseDeleteResourceRequest } as DeleteResourceRequest;
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : "";
    message.resourceId =
      object.resourceId !== undefined && object.resourceId !== null
        ? String(object.resourceId)
        : "";
    return message;
  },

  toJSON(message: DeleteResourceRequest): unknown {
    const obj: any = {};
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    message.resourceId !== undefined && (obj.resourceId = message.resourceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteResourceRequest>, I>>(
    object: I
  ): DeleteResourceRequest {
    const message = { ...baseDeleteResourceRequest } as DeleteResourceRequest;
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteResourceRequest.$type, DeleteResourceRequest);

const baseDeleteResourceMetadata: object = {
  $type: "yandex.cloud.backup.v1.DeleteResourceMetadata",
  computeInstanceId: "",
};

export const DeleteResourceMetadata = {
  $type: "yandex.cloud.backup.v1.DeleteResourceMetadata" as const,

  encode(
    message: DeleteResourceMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteResourceMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteResourceMetadata } as DeleteResourceMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.computeInstanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteResourceMetadata {
    const message = { ...baseDeleteResourceMetadata } as DeleteResourceMetadata;
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : "";
    return message;
  },

  toJSON(message: DeleteResourceMetadata): unknown {
    const obj: any = {};
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteResourceMetadata>, I>>(
    object: I
  ): DeleteResourceMetadata {
    const message = { ...baseDeleteResourceMetadata } as DeleteResourceMetadata;
    message.computeInstanceId = object.computeInstanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteResourceMetadata.$type, DeleteResourceMetadata);

const baseListTasksRequest: object = {
  $type: "yandex.cloud.backup.v1.ListTasksRequest",
  computeInstanceId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListTasksRequest = {
  $type: "yandex.cloud.backup.v1.ListTasksRequest" as const,

  encode(
    message: ListTasksRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTasksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListTasksRequest } as ListTasksRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.computeInstanceId = reader.string();
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

  fromJSON(object: any): ListTasksRequest {
    const message = { ...baseListTasksRequest } as ListTasksRequest;
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
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

  toJSON(message: ListTasksRequest): unknown {
    const obj: any = {};
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListTasksRequest>, I>>(
    object: I
  ): ListTasksRequest {
    const message = { ...baseListTasksRequest } as ListTasksRequest;
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListTasksRequest.$type, ListTasksRequest);

const baseListTasksResponse: object = {
  $type: "yandex.cloud.backup.v1.ListTasksResponse",
  nextPageToken: "",
};

export const ListTasksResponse = {
  $type: "yandex.cloud.backup.v1.ListTasksResponse" as const,

  encode(
    message: ListTasksResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tasks) {
      Task.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTasksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListTasksResponse } as ListTasksResponse;
    message.tasks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tasks.push(Task.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListTasksResponse {
    const message = { ...baseListTasksResponse } as ListTasksResponse;
    message.tasks = (object.tasks ?? []).map((e: any) => Task.fromJSON(e));
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListTasksResponse): unknown {
    const obj: any = {};
    if (message.tasks) {
      obj.tasks = message.tasks.map((e) => (e ? Task.toJSON(e) : undefined));
    } else {
      obj.tasks = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListTasksResponse>, I>>(
    object: I
  ): ListTasksResponse {
    const message = { ...baseListTasksResponse } as ListTasksResponse;
    message.tasks = object.tasks?.map((e) => Task.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListTasksResponse.$type, ListTasksResponse);

const baseListDirectoryRequest: object = {
  $type: "yandex.cloud.backup.v1.ListDirectoryRequest",
  folderId: "",
  computeInstanceId: "",
  path: "",
};

export const ListDirectoryRequest = {
  $type: "yandex.cloud.backup.v1.ListDirectoryRequest" as const,

  encode(
    message: ListDirectoryRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.computeInstanceId !== "") {
      writer.uint32(18).string(message.computeInstanceId);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListDirectoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListDirectoryRequest } as ListDirectoryRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 2:
          message.computeInstanceId = reader.string();
          break;
        case 3:
          message.path = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListDirectoryRequest {
    const message = { ...baseListDirectoryRequest } as ListDirectoryRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : "";
    message.path =
      object.path !== undefined && object.path !== null
        ? String(object.path)
        : "";
    return message;
  },

  toJSON(message: ListDirectoryRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    message.path !== undefined && (obj.path = message.path);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListDirectoryRequest>, I>>(
    object: I
  ): ListDirectoryRequest {
    const message = { ...baseListDirectoryRequest } as ListDirectoryRequest;
    message.folderId = object.folderId ?? "";
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.path = object.path ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDirectoryRequest.$type, ListDirectoryRequest);

const baseListDirectoryResponse: object = {
  $type: "yandex.cloud.backup.v1.ListDirectoryResponse",
};

export const ListDirectoryResponse = {
  $type: "yandex.cloud.backup.v1.ListDirectoryResponse" as const,

  encode(
    message: ListDirectoryResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      ListDirectoryResponse_FilesystemItem.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListDirectoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListDirectoryResponse } as ListDirectoryResponse;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            ListDirectoryResponse_FilesystemItem.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListDirectoryResponse {
    const message = { ...baseListDirectoryResponse } as ListDirectoryResponse;
    message.items = (object.items ?? []).map((e: any) =>
      ListDirectoryResponse_FilesystemItem.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ListDirectoryResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ListDirectoryResponse_FilesystemItem.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListDirectoryResponse>, I>>(
    object: I
  ): ListDirectoryResponse {
    const message = { ...baseListDirectoryResponse } as ListDirectoryResponse;
    message.items =
      object.items?.map((e) =>
        ListDirectoryResponse_FilesystemItem.fromPartial(e)
      ) || [];
    return message;
  },
};

messageTypeRegistry.set(ListDirectoryResponse.$type, ListDirectoryResponse);

const baseListDirectoryResponse_FilesystemItem: object = {
  $type: "yandex.cloud.backup.v1.ListDirectoryResponse.FilesystemItem",
  name: "",
  type: 0,
  fileType: 0,
  size: 0,
};

export const ListDirectoryResponse_FilesystemItem = {
  $type: "yandex.cloud.backup.v1.ListDirectoryResponse.FilesystemItem" as const,

  encode(
    message: ListDirectoryResponse_FilesystemItem,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.fileType !== 0) {
      writer.uint32(24).int32(message.fileType);
    }
    if (message.size !== 0) {
      writer.uint32(32).int64(message.size);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListDirectoryResponse_FilesystemItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListDirectoryResponse_FilesystemItem,
    } as ListDirectoryResponse_FilesystemItem;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.fileType = reader.int32() as any;
          break;
        case 4:
          message.size = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListDirectoryResponse_FilesystemItem {
    const message = {
      ...baseListDirectoryResponse_FilesystemItem,
    } as ListDirectoryResponse_FilesystemItem;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.type =
      object.type !== undefined && object.type !== null
        ? listDirectoryResponse_FilesystemItem_TypeFromJSON(object.type)
        : 0;
    message.fileType =
      object.fileType !== undefined && object.fileType !== null
        ? listDirectoryResponse_FilesystemItem_TypeFromJSON(object.fileType)
        : 0;
    message.size =
      object.size !== undefined && object.size !== null
        ? Number(object.size)
        : 0;
    return message;
  },

  toJSON(message: ListDirectoryResponse_FilesystemItem): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined &&
      (obj.type = listDirectoryResponse_FilesystemItem_TypeToJSON(
        message.type
      ));
    message.fileType !== undefined &&
      (obj.fileType = listDirectoryResponse_FilesystemItem_TypeToJSON(
        message.fileType
      ));
    message.size !== undefined && (obj.size = Math.round(message.size));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListDirectoryResponse_FilesystemItem>, I>
  >(object: I): ListDirectoryResponse_FilesystemItem {
    const message = {
      ...baseListDirectoryResponse_FilesystemItem,
    } as ListDirectoryResponse_FilesystemItem;
    message.name = object.name ?? "";
    message.type = object.type ?? 0;
    message.fileType = object.fileType ?? 0;
    message.size = object.size ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  ListDirectoryResponse_FilesystemItem.$type,
  ListDirectoryResponse_FilesystemItem
);

const baseCreateDirectoryRequest: object = {
  $type: "yandex.cloud.backup.v1.CreateDirectoryRequest",
  folderId: "",
  computeInstanceId: "",
  path: "",
};

export const CreateDirectoryRequest = {
  $type: "yandex.cloud.backup.v1.CreateDirectoryRequest" as const,

  encode(
    message: CreateDirectoryRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.computeInstanceId !== "") {
      writer.uint32(18).string(message.computeInstanceId);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateDirectoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateDirectoryRequest } as CreateDirectoryRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 2:
          message.computeInstanceId = reader.string();
          break;
        case 3:
          message.path = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateDirectoryRequest {
    const message = { ...baseCreateDirectoryRequest } as CreateDirectoryRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : "";
    message.path =
      object.path !== undefined && object.path !== null
        ? String(object.path)
        : "";
    return message;
  },

  toJSON(message: CreateDirectoryRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    message.path !== undefined && (obj.path = message.path);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateDirectoryRequest>, I>>(
    object: I
  ): CreateDirectoryRequest {
    const message = { ...baseCreateDirectoryRequest } as CreateDirectoryRequest;
    message.folderId = object.folderId ?? "";
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.path = object.path ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateDirectoryRequest.$type, CreateDirectoryRequest);

const baseCreateDirectoryMetadata: object = {
  $type: "yandex.cloud.backup.v1.CreateDirectoryMetadata",
  computeInstanceId: "",
  path: "",
};

export const CreateDirectoryMetadata = {
  $type: "yandex.cloud.backup.v1.CreateDirectoryMetadata" as const,

  encode(
    message: CreateDirectoryMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateDirectoryMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateDirectoryMetadata,
    } as CreateDirectoryMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.computeInstanceId = reader.string();
          break;
        case 2:
          message.path = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateDirectoryMetadata {
    const message = {
      ...baseCreateDirectoryMetadata,
    } as CreateDirectoryMetadata;
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : "";
    message.path =
      object.path !== undefined && object.path !== null
        ? String(object.path)
        : "";
    return message;
  },

  toJSON(message: CreateDirectoryMetadata): unknown {
    const obj: any = {};
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    message.path !== undefined && (obj.path = message.path);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateDirectoryMetadata>, I>>(
    object: I
  ): CreateDirectoryMetadata {
    const message = {
      ...baseCreateDirectoryMetadata,
    } as CreateDirectoryMetadata;
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.path = object.path ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateDirectoryMetadata.$type, CreateDirectoryMetadata);

/** A set of methods for managing backup resources: [Compute Cloud instances](/docs/backup/concepts/vm-connection#os). */
export const ResourceServiceService = {
  /** List resources: Compute Cloud instances. */
  list: {
    path: "/yandex.cloud.backup.v1.ResourceService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListResourcesRequest) =>
      Buffer.from(ListResourcesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListResourcesRequest.decode(value),
    responseSerialize: (value: ListResourcesResponse) =>
      Buffer.from(ListResourcesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListResourcesResponse.decode(value),
  },
  /** Get specific Compute Cloud instance. */
  get: {
    path: "/yandex.cloud.backup.v1.ResourceService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetResourceRequest) =>
      Buffer.from(GetResourceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetResourceRequest.decode(value),
    responseSerialize: (value: GetResourceResponse) =>
      Buffer.from(GetResourceResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetResourceResponse.decode(value),
  },
  /**
   * Delete specific Compute Cloud instance from Cloud Backup. It does not delete
   * instance from Cloud Compute service.
   */
  delete: {
    path: "/yandex.cloud.backup.v1.ResourceService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteResourceRequest) =>
      Buffer.from(DeleteResourceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteResourceRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** List tasks of resources. */
  listTasks: {
    path: "/yandex.cloud.backup.v1.ResourceService/ListTasks",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListTasksRequest) =>
      Buffer.from(ListTasksRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListTasksRequest.decode(value),
    responseSerialize: (value: ListTasksResponse) =>
      Buffer.from(ListTasksResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListTasksResponse.decode(value),
  },
  /**
   * ListDirectory returns all subdirectories found in requested directory identified
   * by the id.
   */
  listDirectory: {
    path: "/yandex.cloud.backup.v1.ResourceService/ListDirectory",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDirectoryRequest) =>
      Buffer.from(ListDirectoryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListDirectoryRequest.decode(value),
    responseSerialize: (value: ListDirectoryResponse) =>
      Buffer.from(ListDirectoryResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListDirectoryResponse.decode(value),
  },
  /** CreateDirectory creates new directory by requested path. */
  createDirectory: {
    path: "/yandex.cloud.backup.v1.ResourceService/CreateDirectory",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateDirectoryRequest) =>
      Buffer.from(CreateDirectoryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateDirectoryRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface ResourceServiceServer extends UntypedServiceImplementation {
  /** List resources: Compute Cloud instances. */
  list: handleUnaryCall<ListResourcesRequest, ListResourcesResponse>;
  /** Get specific Compute Cloud instance. */
  get: handleUnaryCall<GetResourceRequest, GetResourceResponse>;
  /**
   * Delete specific Compute Cloud instance from Cloud Backup. It does not delete
   * instance from Cloud Compute service.
   */
  delete: handleUnaryCall<DeleteResourceRequest, Operation>;
  /** List tasks of resources. */
  listTasks: handleUnaryCall<ListTasksRequest, ListTasksResponse>;
  /**
   * ListDirectory returns all subdirectories found in requested directory identified
   * by the id.
   */
  listDirectory: handleUnaryCall<ListDirectoryRequest, ListDirectoryResponse>;
  /** CreateDirectory creates new directory by requested path. */
  createDirectory: handleUnaryCall<CreateDirectoryRequest, Operation>;
}

export interface ResourceServiceClient extends Client {
  /** List resources: Compute Cloud instances. */
  list(
    request: ListResourcesRequest,
    callback: (
      error: ServiceError | null,
      response: ListResourcesResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListResourcesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListResourcesResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListResourcesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListResourcesResponse
    ) => void
  ): ClientUnaryCall;
  /** Get specific Compute Cloud instance. */
  get(
    request: GetResourceRequest,
    callback: (
      error: ServiceError | null,
      response: GetResourceResponse
    ) => void
  ): ClientUnaryCall;
  get(
    request: GetResourceRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetResourceResponse
    ) => void
  ): ClientUnaryCall;
  get(
    request: GetResourceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetResourceResponse
    ) => void
  ): ClientUnaryCall;
  /**
   * Delete specific Compute Cloud instance from Cloud Backup. It does not delete
   * instance from Cloud Compute service.
   */
  delete(
    request: DeleteResourceRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteResourceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteResourceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** List tasks of resources. */
  listTasks(
    request: ListTasksRequest,
    callback: (error: ServiceError | null, response: ListTasksResponse) => void
  ): ClientUnaryCall;
  listTasks(
    request: ListTasksRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListTasksResponse) => void
  ): ClientUnaryCall;
  listTasks(
    request: ListTasksRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListTasksResponse) => void
  ): ClientUnaryCall;
  /**
   * ListDirectory returns all subdirectories found in requested directory identified
   * by the id.
   */
  listDirectory(
    request: ListDirectoryRequest,
    callback: (
      error: ServiceError | null,
      response: ListDirectoryResponse
    ) => void
  ): ClientUnaryCall;
  listDirectory(
    request: ListDirectoryRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListDirectoryResponse
    ) => void
  ): ClientUnaryCall;
  listDirectory(
    request: ListDirectoryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListDirectoryResponse
    ) => void
  ): ClientUnaryCall;
  /** CreateDirectory creates new directory by requested path. */
  createDirectory(
    request: CreateDirectoryRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  createDirectory(
    request: CreateDirectoryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  createDirectory(
    request: CreateDirectoryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const ResourceServiceClient = makeGenericClientConstructor(
  ResourceServiceService,
  "yandex.cloud.backup.v1.ResourceService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): ResourceServiceClient;
  service: typeof ResourceServiceService;
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
