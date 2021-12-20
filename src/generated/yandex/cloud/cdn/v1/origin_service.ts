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
import { OriginMeta, Origin } from "../../../../yandex/cloud/cdn/v1/origin";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import { BoolValue } from "../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.cdn.v1";

export interface GetOriginRequest {
  $type: "yandex.cloud.cdn.v1.GetOriginRequest";
  /** ID of the folder that the origin belongs to. */
  folderId: string;
  /** [origin_id] group ID to request origin from. */
  originId: number;
}

export interface ListOriginsRequest {
  $type: "yandex.cloud.cdn.v1.ListOriginsRequest";
  /** ID of the folder that the origin belongs to. */
  folderId: string;
  /** ID of the group to request origins from. */
  originGroupId: number;
}

export interface ListOriginsResponse {
  $type: "yandex.cloud.cdn.v1.ListOriginsResponse";
  /** Origin from response. */
  origins: Origin[];
}

export interface CreateOriginRequest {
  $type: "yandex.cloud.cdn.v1.CreateOriginRequest";
  /** ID of the folder that the origin belongs to. */
  folderId: string;
  /** [origin_group_id] group ID to request origins from. */
  originGroupId: number;
  /**
   * IP address or Domain name of your origin and the port (if custom).
   * Used if [meta] variant is `common`.
   */
  source: string;
  /**
   * The setting allows to enable or disable an Origin source in the Origins group.
   *
   * It has two possible values:
   *
   * True - The origin is enabled and used as a source for the CDN. An origins
   * group must contain at least one enabled origin. Default value.
   * False - The origin is disabled and the CDN is not using it to pull content.
   */
  enabled?: boolean;
  /**
   * Specifies whether the origin is used in its origin group as backup.
   * A backup origin is used when one of active origins becomes unavailable.
   *
   * Default value: False.
   */
  backup?: boolean;
  /** Set up origin of the content. */
  meta?: OriginMeta;
}

export interface CreateOriginMetadata {
  $type: "yandex.cloud.cdn.v1.CreateOriginMetadata";
  /** ID of the origin. */
  originId: number;
  /** ID pf the parent origins group. */
  originGroupId: number;
}

export interface UpdateOriginRequest {
  $type: "yandex.cloud.cdn.v1.UpdateOriginRequest";
  /** ID of the folder that the origin belongs to. */
  folderId: string;
  /** ID of the origin. */
  originId: number;
  /**
   * IP address or Domain name of your origin and the port (if custom).
   * Used if [meta] variant is `common`.
   * Required.
   */
  source: string;
  /**
   * The setting allows to enable or disable an Origin source in the Origins group.
   *
   * It has two possible values:
   *
   * True - The origin is enabled and used as a source for the CDN. An origins
   * group must contain at least one enabled origin. Default value.
   * False - The origin is disabled and the CDN is not using it to pull content.
   *
   * Required.
   */
  enabled: boolean;
  /**
   * Specifies whether the origin is used in its origin group as backup.
   * A backup origin is used when one of active origins becomes unavailable.
   *
   * Required.
   */
  backup: boolean;
  /** Set up type of the origin. */
  meta?: OriginMeta;
}

export interface UpdateOriginMetadata {
  $type: "yandex.cloud.cdn.v1.UpdateOriginMetadata";
  /** ID of the origin. */
  originId: number;
  /** Parent origins group ID. */
  originGroupId: number;
}

export interface DeleteOriginRequest {
  $type: "yandex.cloud.cdn.v1.DeleteOriginRequest";
  /** ID of the folder that the origin belongs to. */
  folderId: string;
  /** ID of the origin. */
  originId: number;
}

export interface DeleteOriginMetadata {
  $type: "yandex.cloud.cdn.v1.DeleteOriginMetadata";
  /** ID of the origin. */
  originId: number;
}

const baseGetOriginRequest: object = {
  $type: "yandex.cloud.cdn.v1.GetOriginRequest",
  folderId: "",
  originId: 0,
};

export const GetOriginRequest = {
  $type: "yandex.cloud.cdn.v1.GetOriginRequest" as const,

  encode(
    message: GetOriginRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.originId !== 0) {
      writer.uint32(16).int64(message.originId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOriginRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetOriginRequest } as GetOriginRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 2:
          message.originId = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetOriginRequest {
    const message = { ...baseGetOriginRequest } as GetOriginRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.originId =
      object.originId !== undefined && object.originId !== null
        ? Number(object.originId)
        : 0;
    return message;
  },

  toJSON(message: GetOriginRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.originId !== undefined &&
      (obj.originId = Math.round(message.originId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetOriginRequest>, I>>(
    object: I
  ): GetOriginRequest {
    const message = { ...baseGetOriginRequest } as GetOriginRequest;
    message.folderId = object.folderId ?? "";
    message.originId = object.originId ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GetOriginRequest.$type, GetOriginRequest);

const baseListOriginsRequest: object = {
  $type: "yandex.cloud.cdn.v1.ListOriginsRequest",
  folderId: "",
  originGroupId: 0,
};

export const ListOriginsRequest = {
  $type: "yandex.cloud.cdn.v1.ListOriginsRequest" as const,

  encode(
    message: ListOriginsRequest,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListOriginsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListOriginsRequest } as ListOriginsRequest;
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

  fromJSON(object: any): ListOriginsRequest {
    const message = { ...baseListOriginsRequest } as ListOriginsRequest;
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

  toJSON(message: ListOriginsRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.originGroupId !== undefined &&
      (obj.originGroupId = Math.round(message.originGroupId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListOriginsRequest>, I>>(
    object: I
  ): ListOriginsRequest {
    const message = { ...baseListOriginsRequest } as ListOriginsRequest;
    message.folderId = object.folderId ?? "";
    message.originGroupId = object.originGroupId ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ListOriginsRequest.$type, ListOriginsRequest);

const baseListOriginsResponse: object = {
  $type: "yandex.cloud.cdn.v1.ListOriginsResponse",
};

export const ListOriginsResponse = {
  $type: "yandex.cloud.cdn.v1.ListOriginsResponse" as const,

  encode(
    message: ListOriginsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.origins) {
      Origin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListOriginsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListOriginsResponse } as ListOriginsResponse;
    message.origins = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.origins.push(Origin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListOriginsResponse {
    const message = { ...baseListOriginsResponse } as ListOriginsResponse;
    message.origins = (object.origins ?? []).map((e: any) =>
      Origin.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ListOriginsResponse): unknown {
    const obj: any = {};
    if (message.origins) {
      obj.origins = message.origins.map((e) =>
        e ? Origin.toJSON(e) : undefined
      );
    } else {
      obj.origins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListOriginsResponse>, I>>(
    object: I
  ): ListOriginsResponse {
    const message = { ...baseListOriginsResponse } as ListOriginsResponse;
    message.origins = object.origins?.map((e) => Origin.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ListOriginsResponse.$type, ListOriginsResponse);

const baseCreateOriginRequest: object = {
  $type: "yandex.cloud.cdn.v1.CreateOriginRequest",
  folderId: "",
  originGroupId: 0,
  source: "",
};

export const CreateOriginRequest = {
  $type: "yandex.cloud.cdn.v1.CreateOriginRequest" as const,

  encode(
    message: CreateOriginRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.originGroupId !== 0) {
      writer.uint32(16).int64(message.originGroupId);
    }
    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }
    if (message.enabled !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enabled! },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.backup !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.backup! },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.meta !== undefined) {
      OriginMeta.encode(message.meta, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOriginRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateOriginRequest } as CreateOriginRequest;
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
          message.source = reader.string();
          break;
        case 4:
          message.enabled = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 5:
          message.backup = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 6:
          message.meta = OriginMeta.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateOriginRequest {
    const message = { ...baseCreateOriginRequest } as CreateOriginRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.originGroupId =
      object.originGroupId !== undefined && object.originGroupId !== null
        ? Number(object.originGroupId)
        : 0;
    message.source =
      object.source !== undefined && object.source !== null
        ? String(object.source)
        : "";
    message.enabled =
      object.enabled !== undefined && object.enabled !== null
        ? Boolean(object.enabled)
        : undefined;
    message.backup =
      object.backup !== undefined && object.backup !== null
        ? Boolean(object.backup)
        : undefined;
    message.meta =
      object.meta !== undefined && object.meta !== null
        ? OriginMeta.fromJSON(object.meta)
        : undefined;
    return message;
  },

  toJSON(message: CreateOriginRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.originGroupId !== undefined &&
      (obj.originGroupId = Math.round(message.originGroupId));
    message.source !== undefined && (obj.source = message.source);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.backup !== undefined && (obj.backup = message.backup);
    message.meta !== undefined &&
      (obj.meta = message.meta ? OriginMeta.toJSON(message.meta) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateOriginRequest>, I>>(
    object: I
  ): CreateOriginRequest {
    const message = { ...baseCreateOriginRequest } as CreateOriginRequest;
    message.folderId = object.folderId ?? "";
    message.originGroupId = object.originGroupId ?? 0;
    message.source = object.source ?? "";
    message.enabled = object.enabled ?? undefined;
    message.backup = object.backup ?? undefined;
    message.meta =
      object.meta !== undefined && object.meta !== null
        ? OriginMeta.fromPartial(object.meta)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateOriginRequest.$type, CreateOriginRequest);

const baseCreateOriginMetadata: object = {
  $type: "yandex.cloud.cdn.v1.CreateOriginMetadata",
  originId: 0,
  originGroupId: 0,
};

export const CreateOriginMetadata = {
  $type: "yandex.cloud.cdn.v1.CreateOriginMetadata" as const,

  encode(
    message: CreateOriginMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.originId !== 0) {
      writer.uint32(8).int64(message.originId);
    }
    if (message.originGroupId !== 0) {
      writer.uint32(16).int64(message.originGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateOriginMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateOriginMetadata } as CreateOriginMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.originId = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): CreateOriginMetadata {
    const message = { ...baseCreateOriginMetadata } as CreateOriginMetadata;
    message.originId =
      object.originId !== undefined && object.originId !== null
        ? Number(object.originId)
        : 0;
    message.originGroupId =
      object.originGroupId !== undefined && object.originGroupId !== null
        ? Number(object.originGroupId)
        : 0;
    return message;
  },

  toJSON(message: CreateOriginMetadata): unknown {
    const obj: any = {};
    message.originId !== undefined &&
      (obj.originId = Math.round(message.originId));
    message.originGroupId !== undefined &&
      (obj.originGroupId = Math.round(message.originGroupId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateOriginMetadata>, I>>(
    object: I
  ): CreateOriginMetadata {
    const message = { ...baseCreateOriginMetadata } as CreateOriginMetadata;
    message.originId = object.originId ?? 0;
    message.originGroupId = object.originGroupId ?? 0;
    return message;
  },
};

messageTypeRegistry.set(CreateOriginMetadata.$type, CreateOriginMetadata);

const baseUpdateOriginRequest: object = {
  $type: "yandex.cloud.cdn.v1.UpdateOriginRequest",
  folderId: "",
  originId: 0,
  source: "",
  enabled: false,
  backup: false,
};

export const UpdateOriginRequest = {
  $type: "yandex.cloud.cdn.v1.UpdateOriginRequest" as const,

  encode(
    message: UpdateOriginRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.originId !== 0) {
      writer.uint32(16).int64(message.originId);
    }
    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }
    if (message.enabled === true) {
      writer.uint32(32).bool(message.enabled);
    }
    if (message.backup === true) {
      writer.uint32(40).bool(message.backup);
    }
    if (message.meta !== undefined) {
      OriginMeta.encode(message.meta, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOriginRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateOriginRequest } as UpdateOriginRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 2:
          message.originId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.source = reader.string();
          break;
        case 4:
          message.enabled = reader.bool();
          break;
        case 5:
          message.backup = reader.bool();
          break;
        case 6:
          message.meta = OriginMeta.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateOriginRequest {
    const message = { ...baseUpdateOriginRequest } as UpdateOriginRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.originId =
      object.originId !== undefined && object.originId !== null
        ? Number(object.originId)
        : 0;
    message.source =
      object.source !== undefined && object.source !== null
        ? String(object.source)
        : "";
    message.enabled =
      object.enabled !== undefined && object.enabled !== null
        ? Boolean(object.enabled)
        : false;
    message.backup =
      object.backup !== undefined && object.backup !== null
        ? Boolean(object.backup)
        : false;
    message.meta =
      object.meta !== undefined && object.meta !== null
        ? OriginMeta.fromJSON(object.meta)
        : undefined;
    return message;
  },

  toJSON(message: UpdateOriginRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.originId !== undefined &&
      (obj.originId = Math.round(message.originId));
    message.source !== undefined && (obj.source = message.source);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.backup !== undefined && (obj.backup = message.backup);
    message.meta !== undefined &&
      (obj.meta = message.meta ? OriginMeta.toJSON(message.meta) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateOriginRequest>, I>>(
    object: I
  ): UpdateOriginRequest {
    const message = { ...baseUpdateOriginRequest } as UpdateOriginRequest;
    message.folderId = object.folderId ?? "";
    message.originId = object.originId ?? 0;
    message.source = object.source ?? "";
    message.enabled = object.enabled ?? false;
    message.backup = object.backup ?? false;
    message.meta =
      object.meta !== undefined && object.meta !== null
        ? OriginMeta.fromPartial(object.meta)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateOriginRequest.$type, UpdateOriginRequest);

const baseUpdateOriginMetadata: object = {
  $type: "yandex.cloud.cdn.v1.UpdateOriginMetadata",
  originId: 0,
  originGroupId: 0,
};

export const UpdateOriginMetadata = {
  $type: "yandex.cloud.cdn.v1.UpdateOriginMetadata" as const,

  encode(
    message: UpdateOriginMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.originId !== 0) {
      writer.uint32(8).int64(message.originId);
    }
    if (message.originGroupId !== 0) {
      writer.uint32(16).int64(message.originGroupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateOriginMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateOriginMetadata } as UpdateOriginMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.originId = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): UpdateOriginMetadata {
    const message = { ...baseUpdateOriginMetadata } as UpdateOriginMetadata;
    message.originId =
      object.originId !== undefined && object.originId !== null
        ? Number(object.originId)
        : 0;
    message.originGroupId =
      object.originGroupId !== undefined && object.originGroupId !== null
        ? Number(object.originGroupId)
        : 0;
    return message;
  },

  toJSON(message: UpdateOriginMetadata): unknown {
    const obj: any = {};
    message.originId !== undefined &&
      (obj.originId = Math.round(message.originId));
    message.originGroupId !== undefined &&
      (obj.originGroupId = Math.round(message.originGroupId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateOriginMetadata>, I>>(
    object: I
  ): UpdateOriginMetadata {
    const message = { ...baseUpdateOriginMetadata } as UpdateOriginMetadata;
    message.originId = object.originId ?? 0;
    message.originGroupId = object.originGroupId ?? 0;
    return message;
  },
};

messageTypeRegistry.set(UpdateOriginMetadata.$type, UpdateOriginMetadata);

const baseDeleteOriginRequest: object = {
  $type: "yandex.cloud.cdn.v1.DeleteOriginRequest",
  folderId: "",
  originId: 0,
};

export const DeleteOriginRequest = {
  $type: "yandex.cloud.cdn.v1.DeleteOriginRequest" as const,

  encode(
    message: DeleteOriginRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.originId !== 0) {
      writer.uint32(16).int64(message.originId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOriginRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteOriginRequest } as DeleteOriginRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 2:
          message.originId = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteOriginRequest {
    const message = { ...baseDeleteOriginRequest } as DeleteOriginRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.originId =
      object.originId !== undefined && object.originId !== null
        ? Number(object.originId)
        : 0;
    return message;
  },

  toJSON(message: DeleteOriginRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.originId !== undefined &&
      (obj.originId = Math.round(message.originId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteOriginRequest>, I>>(
    object: I
  ): DeleteOriginRequest {
    const message = { ...baseDeleteOriginRequest } as DeleteOriginRequest;
    message.folderId = object.folderId ?? "";
    message.originId = object.originId ?? 0;
    return message;
  },
};

messageTypeRegistry.set(DeleteOriginRequest.$type, DeleteOriginRequest);

const baseDeleteOriginMetadata: object = {
  $type: "yandex.cloud.cdn.v1.DeleteOriginMetadata",
  originId: 0,
};

export const DeleteOriginMetadata = {
  $type: "yandex.cloud.cdn.v1.DeleteOriginMetadata" as const,

  encode(
    message: DeleteOriginMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.originId !== 0) {
      writer.uint32(8).int64(message.originId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteOriginMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteOriginMetadata } as DeleteOriginMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.originId = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteOriginMetadata {
    const message = { ...baseDeleteOriginMetadata } as DeleteOriginMetadata;
    message.originId =
      object.originId !== undefined && object.originId !== null
        ? Number(object.originId)
        : 0;
    return message;
  },

  toJSON(message: DeleteOriginMetadata): unknown {
    const obj: any = {};
    message.originId !== undefined &&
      (obj.originId = Math.round(message.originId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteOriginMetadata>, I>>(
    object: I
  ): DeleteOriginMetadata {
    const message = { ...baseDeleteOriginMetadata } as DeleteOriginMetadata;
    message.originId = object.originId ?? 0;
    return message;
  },
};

messageTypeRegistry.set(DeleteOriginMetadata.$type, DeleteOriginMetadata);

/**
 * Origin management service.
 * Origin is not a standalone entity. It can live only within origin group.
 */
export const OriginServiceService = {
  /** Get origin in origin group. */
  get: {
    path: "/yandex.cloud.cdn.v1.OriginService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetOriginRequest) =>
      Buffer.from(GetOriginRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetOriginRequest.decode(value),
    responseSerialize: (value: Origin) =>
      Buffer.from(Origin.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Origin.decode(value),
  },
  /** Lists origins of origin group. */
  list: {
    path: "/yandex.cloud.cdn.v1.OriginService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListOriginsRequest) =>
      Buffer.from(ListOriginsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListOriginsRequest.decode(value),
    responseSerialize: (value: ListOriginsResponse) =>
      Buffer.from(ListOriginsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListOriginsResponse.decode(value),
  },
  /** Creates origin inside origin group. */
  create: {
    path: "/yandex.cloud.cdn.v1.OriginService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateOriginRequest) =>
      Buffer.from(CreateOriginRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateOriginRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates origin from origin group. */
  update: {
    path: "/yandex.cloud.cdn.v1.OriginService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateOriginRequest) =>
      Buffer.from(UpdateOriginRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateOriginRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes origin from origin group. */
  delete: {
    path: "/yandex.cloud.cdn.v1.OriginService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteOriginRequest) =>
      Buffer.from(DeleteOriginRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteOriginRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface OriginServiceServer extends UntypedServiceImplementation {
  /** Get origin in origin group. */
  get: handleUnaryCall<GetOriginRequest, Origin>;
  /** Lists origins of origin group. */
  list: handleUnaryCall<ListOriginsRequest, ListOriginsResponse>;
  /** Creates origin inside origin group. */
  create: handleUnaryCall<CreateOriginRequest, Operation>;
  /** Updates origin from origin group. */
  update: handleUnaryCall<UpdateOriginRequest, Operation>;
  /** Deletes origin from origin group. */
  delete: handleUnaryCall<DeleteOriginRequest, Operation>;
}

export interface OriginServiceClient extends Client {
  /** Get origin in origin group. */
  get(
    request: GetOriginRequest,
    callback: (error: ServiceError | null, response: Origin) => void
  ): ClientUnaryCall;
  get(
    request: GetOriginRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Origin) => void
  ): ClientUnaryCall;
  get(
    request: GetOriginRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Origin) => void
  ): ClientUnaryCall;
  /** Lists origins of origin group. */
  list(
    request: ListOriginsRequest,
    callback: (
      error: ServiceError | null,
      response: ListOriginsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListOriginsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListOriginsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListOriginsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListOriginsResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates origin inside origin group. */
  create(
    request: CreateOriginRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateOriginRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateOriginRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates origin from origin group. */
  update(
    request: UpdateOriginRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateOriginRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateOriginRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes origin from origin group. */
  delete(
    request: DeleteOriginRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteOriginRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteOriginRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const OriginServiceClient = makeGenericClientConstructor(
  OriginServiceService,
  "yandex.cloud.cdn.v1.OriginService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): OriginServiceClient;
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
