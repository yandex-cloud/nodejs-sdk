/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
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
import { Extension } from "../../../../../yandex/cloud/mdb/elasticsearch/v1/extension";
import { Operation } from "../../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.mdb.elasticsearch.v1";

export interface GetExtensionRequest {
  $type: "yandex.cloud.mdb.elasticsearch.v1.GetExtensionRequest";
  /** ID of the cluster. */
  clusterId: string;
  /** ID of the extension to return. */
  extensionId: string;
}

export interface ListExtensionsRequest {
  $type: "yandex.cloud.mdb.elasticsearch.v1.ListExtensionsRequest";
  /** ID of the cluster to list extensions in. */
  clusterId: string;
  /**
   * The maximum number of results per page to return.
   *
   * If the number of available results is larger than [page_size], the API returns a [ListExtensionsResponse.next_page_token] that can be used to get the next page of results in subsequent [ExtensionService.List] requests.
   */
  pageSize: number;
  /**
   * Page token that can be used to iterate through multiple pages of results.
   *
   * To get the next page of results, set [page_token] to the [ListExtensionsResponse.next_page_token] returned by the previous [ExtensionService.List] request.
   */
  pageToken: string;
}

export interface ListExtensionsResponse {
  $type: "yandex.cloud.mdb.elasticsearch.v1.ListExtensionsResponse";
  /** Requested list of extensions. */
  extensions: Extension[];
  /**
   * The token that can be used to get the next page of results.
   *
   * If the number of results is larger than [ListExtensionsRequest.page_size], use the [next_page_token] as the value for the [ListExtensionsRequest.page_token] in the subsequent [ExtensionService.List] request to iterate through multiple pages of results.
   *
   * Each of the subsequent [ExtensionService.List] requests should use the [next_page_token] value returned in the previous request to continue paging through the results.
   */
  nextPageToken: string;
}

export interface DeleteExtensionRequest {
  $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteExtensionRequest";
  /** ID of the cluster. */
  clusterId: string;
  /** ID of the extension to delete. */
  extensionId: string;
}

export interface DeleteExtensionMetadata {
  $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteExtensionMetadata";
  /** ID of the cluster. */
  clusterId: string;
  /** ID of the extension to delete. */
  extensionId: string;
}

export interface UpdateExtensionRequest {
  $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateExtensionRequest";
  /** ID of the cluster. */
  clusterId: string;
  /** ID of the extension to update. */
  extensionId: string;
  /** The flag shows whether to make the extension active. */
  active: boolean;
}

export interface UpdateExtensionMetadata {
  $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateExtensionMetadata";
  /** ID of the cluster. */
  clusterId: string;
  /** ID of the extension. */
  extensionId: string;
}

export interface CreateExtensionRequest {
  $type: "yandex.cloud.mdb.elasticsearch.v1.CreateExtensionRequest";
  /** ID of the cluster. */
  clusterId: string;
  /** Name of the extension. */
  name: string;
  /** URI of the zip archive to create the new extension from. Currently only supports links that are stored in Object Storage. */
  uri: string;
  /** The flag that disables the extension. */
  disabled: boolean;
}

export interface CreateExtensionMetadata {
  $type: "yandex.cloud.mdb.elasticsearch.v1.CreateExtensionMetadata";
  /** ID of the cluster. */
  clusterId: string;
  /** ID of the extension. */
  extensionId: string;
}

const baseGetExtensionRequest: object = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.GetExtensionRequest",
  clusterId: "",
  extensionId: "",
};

export const GetExtensionRequest = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.GetExtensionRequest" as const,

  encode(
    message: GetExtensionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.extensionId !== "") {
      writer.uint32(18).string(message.extensionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetExtensionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetExtensionRequest } as GetExtensionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.extensionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetExtensionRequest {
    const message = { ...baseGetExtensionRequest } as GetExtensionRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.extensionId =
      object.extensionId !== undefined && object.extensionId !== null
        ? String(object.extensionId)
        : "";
    return message;
  },

  toJSON(message: GetExtensionRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.extensionId !== undefined &&
      (obj.extensionId = message.extensionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetExtensionRequest>, I>>(
    object: I
  ): GetExtensionRequest {
    const message = { ...baseGetExtensionRequest } as GetExtensionRequest;
    message.clusterId = object.clusterId ?? "";
    message.extensionId = object.extensionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetExtensionRequest.$type, GetExtensionRequest);

const baseListExtensionsRequest: object = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.ListExtensionsRequest",
  clusterId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListExtensionsRequest = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.ListExtensionsRequest" as const,

  encode(
    message: ListExtensionsRequest,
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
  ): ListExtensionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListExtensionsRequest } as ListExtensionsRequest;
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

  fromJSON(object: any): ListExtensionsRequest {
    const message = { ...baseListExtensionsRequest } as ListExtensionsRequest;
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

  toJSON(message: ListExtensionsRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListExtensionsRequest>, I>>(
    object: I
  ): ListExtensionsRequest {
    const message = { ...baseListExtensionsRequest } as ListExtensionsRequest;
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListExtensionsRequest.$type, ListExtensionsRequest);

const baseListExtensionsResponse: object = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.ListExtensionsResponse",
  nextPageToken: "",
};

export const ListExtensionsResponse = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.ListExtensionsResponse" as const,

  encode(
    message: ListExtensionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.extensions) {
      Extension.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListExtensionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListExtensionsResponse } as ListExtensionsResponse;
    message.extensions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.extensions.push(Extension.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListExtensionsResponse {
    const message = { ...baseListExtensionsResponse } as ListExtensionsResponse;
    message.extensions = (object.extensions ?? []).map((e: any) =>
      Extension.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListExtensionsResponse): unknown {
    const obj: any = {};
    if (message.extensions) {
      obj.extensions = message.extensions.map((e) =>
        e ? Extension.toJSON(e) : undefined
      );
    } else {
      obj.extensions = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListExtensionsResponse>, I>>(
    object: I
  ): ListExtensionsResponse {
    const message = { ...baseListExtensionsResponse } as ListExtensionsResponse;
    message.extensions =
      object.extensions?.map((e) => Extension.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListExtensionsResponse.$type, ListExtensionsResponse);

const baseDeleteExtensionRequest: object = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteExtensionRequest",
  clusterId: "",
  extensionId: "",
};

export const DeleteExtensionRequest = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteExtensionRequest" as const,

  encode(
    message: DeleteExtensionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.extensionId !== "") {
      writer.uint32(18).string(message.extensionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteExtensionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteExtensionRequest } as DeleteExtensionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.extensionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteExtensionRequest {
    const message = { ...baseDeleteExtensionRequest } as DeleteExtensionRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.extensionId =
      object.extensionId !== undefined && object.extensionId !== null
        ? String(object.extensionId)
        : "";
    return message;
  },

  toJSON(message: DeleteExtensionRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.extensionId !== undefined &&
      (obj.extensionId = message.extensionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteExtensionRequest>, I>>(
    object: I
  ): DeleteExtensionRequest {
    const message = { ...baseDeleteExtensionRequest } as DeleteExtensionRequest;
    message.clusterId = object.clusterId ?? "";
    message.extensionId = object.extensionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteExtensionRequest.$type, DeleteExtensionRequest);

const baseDeleteExtensionMetadata: object = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteExtensionMetadata",
  clusterId: "",
  extensionId: "",
};

export const DeleteExtensionMetadata = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteExtensionMetadata" as const,

  encode(
    message: DeleteExtensionMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.extensionId !== "") {
      writer.uint32(18).string(message.extensionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteExtensionMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteExtensionMetadata,
    } as DeleteExtensionMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.extensionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteExtensionMetadata {
    const message = {
      ...baseDeleteExtensionMetadata,
    } as DeleteExtensionMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.extensionId =
      object.extensionId !== undefined && object.extensionId !== null
        ? String(object.extensionId)
        : "";
    return message;
  },

  toJSON(message: DeleteExtensionMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.extensionId !== undefined &&
      (obj.extensionId = message.extensionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteExtensionMetadata>, I>>(
    object: I
  ): DeleteExtensionMetadata {
    const message = {
      ...baseDeleteExtensionMetadata,
    } as DeleteExtensionMetadata;
    message.clusterId = object.clusterId ?? "";
    message.extensionId = object.extensionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteExtensionMetadata.$type, DeleteExtensionMetadata);

const baseUpdateExtensionRequest: object = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateExtensionRequest",
  clusterId: "",
  extensionId: "",
  active: false,
};

export const UpdateExtensionRequest = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateExtensionRequest" as const,

  encode(
    message: UpdateExtensionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.extensionId !== "") {
      writer.uint32(18).string(message.extensionId);
    }
    if (message.active === true) {
      writer.uint32(24).bool(message.active);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateExtensionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateExtensionRequest } as UpdateExtensionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.extensionId = reader.string();
          break;
        case 3:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateExtensionRequest {
    const message = { ...baseUpdateExtensionRequest } as UpdateExtensionRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.extensionId =
      object.extensionId !== undefined && object.extensionId !== null
        ? String(object.extensionId)
        : "";
    message.active =
      object.active !== undefined && object.active !== null
        ? Boolean(object.active)
        : false;
    return message;
  },

  toJSON(message: UpdateExtensionRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.extensionId !== undefined &&
      (obj.extensionId = message.extensionId);
    message.active !== undefined && (obj.active = message.active);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateExtensionRequest>, I>>(
    object: I
  ): UpdateExtensionRequest {
    const message = { ...baseUpdateExtensionRequest } as UpdateExtensionRequest;
    message.clusterId = object.clusterId ?? "";
    message.extensionId = object.extensionId ?? "";
    message.active = object.active ?? false;
    return message;
  },
};

messageTypeRegistry.set(UpdateExtensionRequest.$type, UpdateExtensionRequest);

const baseUpdateExtensionMetadata: object = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateExtensionMetadata",
  clusterId: "",
  extensionId: "",
};

export const UpdateExtensionMetadata = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateExtensionMetadata" as const,

  encode(
    message: UpdateExtensionMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.extensionId !== "") {
      writer.uint32(18).string(message.extensionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateExtensionMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateExtensionMetadata,
    } as UpdateExtensionMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.extensionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateExtensionMetadata {
    const message = {
      ...baseUpdateExtensionMetadata,
    } as UpdateExtensionMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.extensionId =
      object.extensionId !== undefined && object.extensionId !== null
        ? String(object.extensionId)
        : "";
    return message;
  },

  toJSON(message: UpdateExtensionMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.extensionId !== undefined &&
      (obj.extensionId = message.extensionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateExtensionMetadata>, I>>(
    object: I
  ): UpdateExtensionMetadata {
    const message = {
      ...baseUpdateExtensionMetadata,
    } as UpdateExtensionMetadata;
    message.clusterId = object.clusterId ?? "";
    message.extensionId = object.extensionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateExtensionMetadata.$type, UpdateExtensionMetadata);

const baseCreateExtensionRequest: object = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.CreateExtensionRequest",
  clusterId: "",
  name: "",
  uri: "",
  disabled: false,
};

export const CreateExtensionRequest = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.CreateExtensionRequest" as const,

  encode(
    message: CreateExtensionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.uri !== "") {
      writer.uint32(26).string(message.uri);
    }
    if (message.disabled === true) {
      writer.uint32(32).bool(message.disabled);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateExtensionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateExtensionRequest } as CreateExtensionRequest;
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
          message.uri = reader.string();
          break;
        case 4:
          message.disabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateExtensionRequest {
    const message = { ...baseCreateExtensionRequest } as CreateExtensionRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.uri =
      object.uri !== undefined && object.uri !== null ? String(object.uri) : "";
    message.disabled =
      object.disabled !== undefined && object.disabled !== null
        ? Boolean(object.disabled)
        : false;
    return message;
  },

  toJSON(message: CreateExtensionRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.name !== undefined && (obj.name = message.name);
    message.uri !== undefined && (obj.uri = message.uri);
    message.disabled !== undefined && (obj.disabled = message.disabled);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateExtensionRequest>, I>>(
    object: I
  ): CreateExtensionRequest {
    const message = { ...baseCreateExtensionRequest } as CreateExtensionRequest;
    message.clusterId = object.clusterId ?? "";
    message.name = object.name ?? "";
    message.uri = object.uri ?? "";
    message.disabled = object.disabled ?? false;
    return message;
  },
};

messageTypeRegistry.set(CreateExtensionRequest.$type, CreateExtensionRequest);

const baseCreateExtensionMetadata: object = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.CreateExtensionMetadata",
  clusterId: "",
  extensionId: "",
};

export const CreateExtensionMetadata = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.CreateExtensionMetadata" as const,

  encode(
    message: CreateExtensionMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.extensionId !== "") {
      writer.uint32(18).string(message.extensionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateExtensionMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateExtensionMetadata,
    } as CreateExtensionMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.extensionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateExtensionMetadata {
    const message = {
      ...baseCreateExtensionMetadata,
    } as CreateExtensionMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.extensionId =
      object.extensionId !== undefined && object.extensionId !== null
        ? String(object.extensionId)
        : "";
    return message;
  },

  toJSON(message: CreateExtensionMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.extensionId !== undefined &&
      (obj.extensionId = message.extensionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateExtensionMetadata>, I>>(
    object: I
  ): CreateExtensionMetadata {
    const message = {
      ...baseCreateExtensionMetadata,
    } as CreateExtensionMetadata;
    message.clusterId = object.clusterId ?? "";
    message.extensionId = object.extensionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateExtensionMetadata.$type, CreateExtensionMetadata);

export const ExtensionServiceService = {
  /** Returns the specified extension of Elasticsearch cluster. */
  get: {
    path: "/yandex.cloud.mdb.elasticsearch.v1.ExtensionService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetExtensionRequest) =>
      Buffer.from(GetExtensionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetExtensionRequest.decode(value),
    responseSerialize: (value: Extension) =>
      Buffer.from(Extension.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Extension.decode(value),
  },
  /** Returns the list of available extensions for the specified Elasticsearch cluster. */
  list: {
    path: "/yandex.cloud.mdb.elasticsearch.v1.ExtensionService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListExtensionsRequest) =>
      Buffer.from(ListExtensionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListExtensionsRequest.decode(value),
    responseSerialize: (value: ListExtensionsResponse) =>
      Buffer.from(ListExtensionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListExtensionsResponse.decode(value),
  },
  /** Creates new extension version. */
  create: {
    path: "/yandex.cloud.mdb.elasticsearch.v1.ExtensionService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateExtensionRequest) =>
      Buffer.from(CreateExtensionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateExtensionRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified extension. */
  update: {
    path: "/yandex.cloud.mdb.elasticsearch.v1.ExtensionService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateExtensionRequest) =>
      Buffer.from(UpdateExtensionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateExtensionRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified extension. */
  delete: {
    path: "/yandex.cloud.mdb.elasticsearch.v1.ExtensionService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteExtensionRequest) =>
      Buffer.from(DeleteExtensionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteExtensionRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface ExtensionServiceServer extends UntypedServiceImplementation {
  /** Returns the specified extension of Elasticsearch cluster. */
  get: handleUnaryCall<GetExtensionRequest, Extension>;
  /** Returns the list of available extensions for the specified Elasticsearch cluster. */
  list: handleUnaryCall<ListExtensionsRequest, ListExtensionsResponse>;
  /** Creates new extension version. */
  create: handleUnaryCall<CreateExtensionRequest, Operation>;
  /** Updates the specified extension. */
  update: handleUnaryCall<UpdateExtensionRequest, Operation>;
  /** Deletes the specified extension. */
  delete: handleUnaryCall<DeleteExtensionRequest, Operation>;
}

export interface ExtensionServiceClient extends Client {
  /** Returns the specified extension of Elasticsearch cluster. */
  get(
    request: GetExtensionRequest,
    callback: (error: ServiceError | null, response: Extension) => void
  ): ClientUnaryCall;
  get(
    request: GetExtensionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Extension) => void
  ): ClientUnaryCall;
  get(
    request: GetExtensionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Extension) => void
  ): ClientUnaryCall;
  /** Returns the list of available extensions for the specified Elasticsearch cluster. */
  list(
    request: ListExtensionsRequest,
    callback: (
      error: ServiceError | null,
      response: ListExtensionsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListExtensionsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListExtensionsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListExtensionsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListExtensionsResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates new extension version. */
  create(
    request: CreateExtensionRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateExtensionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateExtensionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified extension. */
  update(
    request: UpdateExtensionRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateExtensionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateExtensionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified extension. */
  delete(
    request: DeleteExtensionRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteExtensionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteExtensionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const ExtensionServiceClient = makeGenericClientConstructor(
  ExtensionServiceService,
  "yandex.cloud.mdb.elasticsearch.v1.ExtensionService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): ExtensionServiceClient;
  service: typeof ExtensionServiceService;
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
