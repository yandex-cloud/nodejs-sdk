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
import { OriginGroup } from "../../../../yandex/cloud/cdn/v1/origin_group";
import { OriginParams } from "../../../../yandex/cloud/cdn/v1/origin";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import { BoolValue, StringValue } from "../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.cdn.v1";

export interface GetOriginGroupRequest {
  $type: "yandex.cloud.cdn.v1.GetOriginGroupRequest";
  /** ID of the folder that the origin group belongs to. */
  folderId: string;
  /**
   * ID of the origin group to return.
   *
   * To get a origin group ID, make a [OriginGroupService.List] request.
   */
  originGroupId: number;
}

export interface ListOriginGroupsRequest {
  $type: "yandex.cloud.cdn.v1.ListOriginGroupsRequest";
  /** ID of the folder that the origin group belongs to.. */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListOriginGroupsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results,
   * set [page_token] to the [ListOriginGroupsResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
}

export interface ListOriginGroupsResponse {
  $type: "yandex.cloud.cdn.v1.ListOriginGroupsResponse";
  /** List of all Origin Groups associated with folder. */
  originGroups: OriginGroup[];
  /**
   * [next_page_token] token allows you to get the next page of results for list requests.
   * If the number of results is larger than [ListOriginGroupsRequest.page_size], use
   * the [next_page_token] as the value for the [ListOriginGroupsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateOriginGroupRequest {
  $type: "yandex.cloud.cdn.v1.CreateOriginGroupRequest";
  /** ID of the folder that the origin group belongs to. */
  folderId: string;
  /** Name of the origin group. */
  name: string;
  /**
   * This option have two possible conditions:
   *  true - The option is active. In case the origin responds with 4XX or 5XX codes,
   *         use the next origin from the list.
   *  false - The option is disabled.
   *
   *  default value is true
   */
  useNext?: boolean;
  /**
   * List of origins: IP addresses or Domain names of your origins and the port
   * (if custom).
   */
  origins: OriginParams[];
}

export interface CreateOriginGroupMetadata {
  $type: "yandex.cloud.cdn.v1.CreateOriginGroupMetadata";
  /** ID of created origin group. */
  originGroupId: number;
}

export interface UpdateOriginGroupRequest {
  $type: "yandex.cloud.cdn.v1.UpdateOriginGroupRequest";
  /** ID of the folder that the origin group belongs to. */
  folderId: string;
  /** ID of the origin group. */
  originGroupId: number;
  /** Name of the origin group. */
  groupName?: string;
  /**
   * This option have two possible values:
   *
   *   True - The option is active. In case the origin responds with 4XX or 5XX
   *          codes, use the next origin from the list.
   *   False - The option is disabled.
   */
  useNext?: boolean;
  /**
   * List of origins: IP addresses or Domain names of your origins and the port
   * (if custom).
   */
  origins: OriginParams[];
}

export interface UpdateOriginGroupMetadata {
  $type: "yandex.cloud.cdn.v1.UpdateOriginGroupMetadata";
  /** ID of the origin group. */
  originGroupId: number;
}

export interface DeleteOriginGroupRequest {
  $type: "yandex.cloud.cdn.v1.DeleteOriginGroupRequest";
  /** ID of the folder that the origin group belongs to. */
  folderId: string;
  /** ID of the origin group. */
  originGroupId: number;
}

export interface DeleteOriginGroupMetadata {
  $type: "yandex.cloud.cdn.v1.DeleteOriginGroupMetadata";
  /** ID of the origin group. */
  originGroupId: number;
}

const baseGetOriginGroupRequest: object = {
  $type: "yandex.cloud.cdn.v1.GetOriginGroupRequest",
  folderId: "",
  originGroupId: 0,
};

export const GetOriginGroupRequest = {
  $type: "yandex.cloud.cdn.v1.GetOriginGroupRequest" as const,

  encode(
    message: GetOriginGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.originGroupId !== 0) {
      writer.uint32(16).int64(message.originGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetOriginGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetOriginGroupRequest } as GetOriginGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 2:
          message.originGroupId = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetOriginGroupRequest {
    const message = { ...baseGetOriginGroupRequest } as GetOriginGroupRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.originGroupId =
      object.originGroupId !== undefined && object.originGroupId !== null
        ? Number(object.originGroupId)
        : 0;
    return message;
  },

  toJSON(message: GetOriginGroupRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.originGroupId !== undefined &&
      (obj.originGroupId = Math.round(message.originGroupId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetOriginGroupRequest>, I>>(
    object: I
  ): GetOriginGroupRequest {
    const message = { ...baseGetOriginGroupRequest } as GetOriginGroupRequest;
    message.folderId = object.folderId ?? "";
    message.originGroupId = object.originGroupId ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GetOriginGroupRequest.$type, GetOriginGroupRequest);

const baseListOriginGroupsRequest: object = {
  $type: "yandex.cloud.cdn.v1.ListOriginGroupsRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListOriginGroupsRequest = {
  $type: "yandex.cloud.cdn.v1.ListOriginGroupsRequest" as const,

  encode(
    message: ListOriginGroupsRequest,
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
  ): ListOriginGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListOriginGroupsRequest,
    } as ListOriginGroupsRequest;
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

  fromJSON(object: any): ListOriginGroupsRequest {
    const message = {
      ...baseListOriginGroupsRequest,
    } as ListOriginGroupsRequest;
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

  toJSON(message: ListOriginGroupsRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListOriginGroupsRequest>, I>>(
    object: I
  ): ListOriginGroupsRequest {
    const message = {
      ...baseListOriginGroupsRequest,
    } as ListOriginGroupsRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListOriginGroupsRequest.$type, ListOriginGroupsRequest);

const baseListOriginGroupsResponse: object = {
  $type: "yandex.cloud.cdn.v1.ListOriginGroupsResponse",
  nextPageToken: "",
};

export const ListOriginGroupsResponse = {
  $type: "yandex.cloud.cdn.v1.ListOriginGroupsResponse" as const,

  encode(
    message: ListOriginGroupsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.originGroups) {
      OriginGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListOriginGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListOriginGroupsResponse,
    } as ListOriginGroupsResponse;
    message.originGroups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.originGroups.push(
            OriginGroup.decode(reader, reader.uint32())
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

  fromJSON(object: any): ListOriginGroupsResponse {
    const message = {
      ...baseListOriginGroupsResponse,
    } as ListOriginGroupsResponse;
    message.originGroups = (object.originGroups ?? []).map((e: any) =>
      OriginGroup.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListOriginGroupsResponse): unknown {
    const obj: any = {};
    if (message.originGroups) {
      obj.originGroups = message.originGroups.map((e) =>
        e ? OriginGroup.toJSON(e) : undefined
      );
    } else {
      obj.originGroups = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListOriginGroupsResponse>, I>>(
    object: I
  ): ListOriginGroupsResponse {
    const message = {
      ...baseListOriginGroupsResponse,
    } as ListOriginGroupsResponse;
    message.originGroups =
      object.originGroups?.map((e) => OriginGroup.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListOriginGroupsResponse.$type,
  ListOriginGroupsResponse
);

const baseCreateOriginGroupRequest: object = {
  $type: "yandex.cloud.cdn.v1.CreateOriginGroupRequest",
  folderId: "",
  name: "",
};

export const CreateOriginGroupRequest = {
  $type: "yandex.cloud.cdn.v1.CreateOriginGroupRequest" as const,

  encode(
    message: CreateOriginGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.useNext !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.useNext! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.origins) {
      OriginParams.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateOriginGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateOriginGroupRequest,
    } as CreateOriginGroupRequest;
    message.origins = [];
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
          message.useNext = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 4:
          message.origins.push(OriginParams.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateOriginGroupRequest {
    const message = {
      ...baseCreateOriginGroupRequest,
    } as CreateOriginGroupRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.useNext =
      object.useNext !== undefined && object.useNext !== null
        ? Boolean(object.useNext)
        : undefined;
    message.origins = (object.origins ?? []).map((e: any) =>
      OriginParams.fromJSON(e)
    );
    return message;
  },

  toJSON(message: CreateOriginGroupRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.name !== undefined && (obj.name = message.name);
    message.useNext !== undefined && (obj.useNext = message.useNext);
    if (message.origins) {
      obj.origins = message.origins.map((e) =>
        e ? OriginParams.toJSON(e) : undefined
      );
    } else {
      obj.origins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateOriginGroupRequest>, I>>(
    object: I
  ): CreateOriginGroupRequest {
    const message = {
      ...baseCreateOriginGroupRequest,
    } as CreateOriginGroupRequest;
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.useNext = object.useNext ?? undefined;
    message.origins =
      object.origins?.map((e) => OriginParams.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  CreateOriginGroupRequest.$type,
  CreateOriginGroupRequest
);

const baseCreateOriginGroupMetadata: object = {
  $type: "yandex.cloud.cdn.v1.CreateOriginGroupMetadata",
  originGroupId: 0,
};

export const CreateOriginGroupMetadata = {
  $type: "yandex.cloud.cdn.v1.CreateOriginGroupMetadata" as const,

  encode(
    message: CreateOriginGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.originGroupId !== 0) {
      writer.uint32(8).int64(message.originGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateOriginGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateOriginGroupMetadata,
    } as CreateOriginGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.originGroupId = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateOriginGroupMetadata {
    const message = {
      ...baseCreateOriginGroupMetadata,
    } as CreateOriginGroupMetadata;
    message.originGroupId =
      object.originGroupId !== undefined && object.originGroupId !== null
        ? Number(object.originGroupId)
        : 0;
    return message;
  },

  toJSON(message: CreateOriginGroupMetadata): unknown {
    const obj: any = {};
    message.originGroupId !== undefined &&
      (obj.originGroupId = Math.round(message.originGroupId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateOriginGroupMetadata>, I>>(
    object: I
  ): CreateOriginGroupMetadata {
    const message = {
      ...baseCreateOriginGroupMetadata,
    } as CreateOriginGroupMetadata;
    message.originGroupId = object.originGroupId ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  CreateOriginGroupMetadata.$type,
  CreateOriginGroupMetadata
);

const baseUpdateOriginGroupRequest: object = {
  $type: "yandex.cloud.cdn.v1.UpdateOriginGroupRequest",
  folderId: "",
  originGroupId: 0,
};

export const UpdateOriginGroupRequest = {
  $type: "yandex.cloud.cdn.v1.UpdateOriginGroupRequest" as const,

  encode(
    message: UpdateOriginGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.originGroupId !== 0) {
      writer.uint32(16).int64(message.originGroupId);
    }
    if (message.groupName !== undefined) {
      StringValue.encode(
        { $type: "google.protobuf.StringValue", value: message.groupName! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.useNext !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.useNext! },
        writer.uint32(34).fork()
      ).ldelim();
    }
    for (const v of message.origins) {
      OriginParams.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateOriginGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateOriginGroupRequest,
    } as UpdateOriginGroupRequest;
    message.origins = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 2:
          message.originGroupId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.groupName = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 4:
          message.useNext = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 5:
          message.origins.push(OriginParams.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateOriginGroupRequest {
    const message = {
      ...baseUpdateOriginGroupRequest,
    } as UpdateOriginGroupRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.originGroupId =
      object.originGroupId !== undefined && object.originGroupId !== null
        ? Number(object.originGroupId)
        : 0;
    message.groupName =
      object.groupName !== undefined && object.groupName !== null
        ? String(object.groupName)
        : undefined;
    message.useNext =
      object.useNext !== undefined && object.useNext !== null
        ? Boolean(object.useNext)
        : undefined;
    message.origins = (object.origins ?? []).map((e: any) =>
      OriginParams.fromJSON(e)
    );
    return message;
  },

  toJSON(message: UpdateOriginGroupRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.originGroupId !== undefined &&
      (obj.originGroupId = Math.round(message.originGroupId));
    message.groupName !== undefined && (obj.groupName = message.groupName);
    message.useNext !== undefined && (obj.useNext = message.useNext);
    if (message.origins) {
      obj.origins = message.origins.map((e) =>
        e ? OriginParams.toJSON(e) : undefined
      );
    } else {
      obj.origins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateOriginGroupRequest>, I>>(
    object: I
  ): UpdateOriginGroupRequest {
    const message = {
      ...baseUpdateOriginGroupRequest,
    } as UpdateOriginGroupRequest;
    message.folderId = object.folderId ?? "";
    message.originGroupId = object.originGroupId ?? 0;
    message.groupName = object.groupName ?? undefined;
    message.useNext = object.useNext ?? undefined;
    message.origins =
      object.origins?.map((e) => OriginParams.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  UpdateOriginGroupRequest.$type,
  UpdateOriginGroupRequest
);

const baseUpdateOriginGroupMetadata: object = {
  $type: "yandex.cloud.cdn.v1.UpdateOriginGroupMetadata",
  originGroupId: 0,
};

export const UpdateOriginGroupMetadata = {
  $type: "yandex.cloud.cdn.v1.UpdateOriginGroupMetadata" as const,

  encode(
    message: UpdateOriginGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.originGroupId !== 0) {
      writer.uint32(8).int64(message.originGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateOriginGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateOriginGroupMetadata,
    } as UpdateOriginGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.originGroupId = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateOriginGroupMetadata {
    const message = {
      ...baseUpdateOriginGroupMetadata,
    } as UpdateOriginGroupMetadata;
    message.originGroupId =
      object.originGroupId !== undefined && object.originGroupId !== null
        ? Number(object.originGroupId)
        : 0;
    return message;
  },

  toJSON(message: UpdateOriginGroupMetadata): unknown {
    const obj: any = {};
    message.originGroupId !== undefined &&
      (obj.originGroupId = Math.round(message.originGroupId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateOriginGroupMetadata>, I>>(
    object: I
  ): UpdateOriginGroupMetadata {
    const message = {
      ...baseUpdateOriginGroupMetadata,
    } as UpdateOriginGroupMetadata;
    message.originGroupId = object.originGroupId ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  UpdateOriginGroupMetadata.$type,
  UpdateOriginGroupMetadata
);

const baseDeleteOriginGroupRequest: object = {
  $type: "yandex.cloud.cdn.v1.DeleteOriginGroupRequest",
  folderId: "",
  originGroupId: 0,
};

export const DeleteOriginGroupRequest = {
  $type: "yandex.cloud.cdn.v1.DeleteOriginGroupRequest" as const,

  encode(
    message: DeleteOriginGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.originGroupId !== 0) {
      writer.uint32(16).int64(message.originGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteOriginGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteOriginGroupRequest,
    } as DeleteOriginGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 2:
          message.originGroupId = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteOriginGroupRequest {
    const message = {
      ...baseDeleteOriginGroupRequest,
    } as DeleteOriginGroupRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.originGroupId =
      object.originGroupId !== undefined && object.originGroupId !== null
        ? Number(object.originGroupId)
        : 0;
    return message;
  },

  toJSON(message: DeleteOriginGroupRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.originGroupId !== undefined &&
      (obj.originGroupId = Math.round(message.originGroupId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteOriginGroupRequest>, I>>(
    object: I
  ): DeleteOriginGroupRequest {
    const message = {
      ...baseDeleteOriginGroupRequest,
    } as DeleteOriginGroupRequest;
    message.folderId = object.folderId ?? "";
    message.originGroupId = object.originGroupId ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  DeleteOriginGroupRequest.$type,
  DeleteOriginGroupRequest
);

const baseDeleteOriginGroupMetadata: object = {
  $type: "yandex.cloud.cdn.v1.DeleteOriginGroupMetadata",
  originGroupId: 0,
};

export const DeleteOriginGroupMetadata = {
  $type: "yandex.cloud.cdn.v1.DeleteOriginGroupMetadata" as const,

  encode(
    message: DeleteOriginGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.originGroupId !== 0) {
      writer.uint32(8).int64(message.originGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteOriginGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteOriginGroupMetadata,
    } as DeleteOriginGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.originGroupId = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteOriginGroupMetadata {
    const message = {
      ...baseDeleteOriginGroupMetadata,
    } as DeleteOriginGroupMetadata;
    message.originGroupId =
      object.originGroupId !== undefined && object.originGroupId !== null
        ? Number(object.originGroupId)
        : 0;
    return message;
  },

  toJSON(message: DeleteOriginGroupMetadata): unknown {
    const obj: any = {};
    message.originGroupId !== undefined &&
      (obj.originGroupId = Math.round(message.originGroupId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteOriginGroupMetadata>, I>>(
    object: I
  ): DeleteOriginGroupMetadata {
    const message = {
      ...baseDeleteOriginGroupMetadata,
    } as DeleteOriginGroupMetadata;
    message.originGroupId = object.originGroupId ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  DeleteOriginGroupMetadata.$type,
  DeleteOriginGroupMetadata
);

/** Origin Groups management service. */
export const OriginGroupServiceService = {
  /** Gets origin group with specified origin group id. */
  get: {
    path: "/yandex.cloud.cdn.v1.OriginGroupService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetOriginGroupRequest) =>
      Buffer.from(GetOriginGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetOriginGroupRequest.decode(value),
    responseSerialize: (value: OriginGroup) =>
      Buffer.from(OriginGroup.encode(value).finish()),
    responseDeserialize: (value: Buffer) => OriginGroup.decode(value),
  },
  /** Lists origins of origin group. */
  list: {
    path: "/yandex.cloud.cdn.v1.OriginGroupService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListOriginGroupsRequest) =>
      Buffer.from(ListOriginGroupsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListOriginGroupsRequest.decode(value),
    responseSerialize: (value: ListOriginGroupsResponse) =>
      Buffer.from(ListOriginGroupsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListOriginGroupsResponse.decode(value),
  },
  /** Creates origin group. */
  create: {
    path: "/yandex.cloud.cdn.v1.OriginGroupService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateOriginGroupRequest) =>
      Buffer.from(CreateOriginGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateOriginGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Updates the specified origin group.
   *
   * Changes may take up to 15 minutes to apply. Afterwards, it is recommended to purge cache of the resources that
   * use the origin group via a [CacheService.Purge] request.
   */
  update: {
    path: "/yandex.cloud.cdn.v1.OriginGroupService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateOriginGroupRequest) =>
      Buffer.from(UpdateOriginGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateOriginGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes origin group with specified origin group id. */
  delete: {
    path: "/yandex.cloud.cdn.v1.OriginGroupService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteOriginGroupRequest) =>
      Buffer.from(DeleteOriginGroupRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteOriginGroupRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface OriginGroupServiceServer extends UntypedServiceImplementation {
  /** Gets origin group with specified origin group id. */
  get: handleUnaryCall<GetOriginGroupRequest, OriginGroup>;
  /** Lists origins of origin group. */
  list: handleUnaryCall<ListOriginGroupsRequest, ListOriginGroupsResponse>;
  /** Creates origin group. */
  create: handleUnaryCall<CreateOriginGroupRequest, Operation>;
  /**
   * Updates the specified origin group.
   *
   * Changes may take up to 15 minutes to apply. Afterwards, it is recommended to purge cache of the resources that
   * use the origin group via a [CacheService.Purge] request.
   */
  update: handleUnaryCall<UpdateOriginGroupRequest, Operation>;
  /** Deletes origin group with specified origin group id. */
  delete: handleUnaryCall<DeleteOriginGroupRequest, Operation>;
}

export interface OriginGroupServiceClient extends Client {
  /** Gets origin group with specified origin group id. */
  get(
    request: GetOriginGroupRequest,
    callback: (error: ServiceError | null, response: OriginGroup) => void
  ): ClientUnaryCall;
  get(
    request: GetOriginGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: OriginGroup) => void
  ): ClientUnaryCall;
  get(
    request: GetOriginGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: OriginGroup) => void
  ): ClientUnaryCall;
  /** Lists origins of origin group. */
  list(
    request: ListOriginGroupsRequest,
    callback: (
      error: ServiceError | null,
      response: ListOriginGroupsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListOriginGroupsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListOriginGroupsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListOriginGroupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListOriginGroupsResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates origin group. */
  create(
    request: CreateOriginGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateOriginGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateOriginGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Updates the specified origin group.
   *
   * Changes may take up to 15 minutes to apply. Afterwards, it is recommended to purge cache of the resources that
   * use the origin group via a [CacheService.Purge] request.
   */
  update(
    request: UpdateOriginGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateOriginGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateOriginGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes origin group with specified origin group id. */
  delete(
    request: DeleteOriginGroupRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteOriginGroupRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteOriginGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const OriginGroupServiceClient = makeGenericClientConstructor(
  OriginGroupServiceService,
  "yandex.cloud.cdn.v1.OriginGroupService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): OriginGroupServiceClient;
  service: typeof OriginGroupServiceService;
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
