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
import { Community } from "../../../../yandex/cloud/datasphere/v2/community";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import {
  ListAccessBindingsRequest,
  ListAccessBindingsResponse,
  SetAccessBindingsRequest,
  UpdateAccessBindingsRequest,
} from "../../../../yandex/cloud/access/access";

export const protobufPackage = "yandex.cloud.datasphere.v2";

export interface CreateCommunityRequest {
  $type: "yandex.cloud.datasphere.v2.CreateCommunityRequest";
  /** Name of the community. */
  name: string;
  /** Description of the community. */
  description: string;
  /** ID of the organization where community should be created. */
  organizationId: string;
  /** ID of the billing account for the created community. Optional, billing account could be bound to community later. */
  billingAccountId: string;
  /** Labels of the community. */
  labels: { [key: string]: string };
}

export interface CreateCommunityRequest_LabelsEntry {
  $type: "yandex.cloud.datasphere.v2.CreateCommunityRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateCommunityMetadata {
  $type: "yandex.cloud.datasphere.v2.CreateCommunityMetadata";
  /** ID of the community that is being created. */
  communityId: string;
}

export interface GetCommunityRequest {
  $type: "yandex.cloud.datasphere.v2.GetCommunityRequest";
  /** ID of the community. */
  communityId: string;
}

export interface UpdateCommunityRequest {
  $type: "yandex.cloud.datasphere.v2.UpdateCommunityRequest";
  /** ID of the community. */
  communityId: string;
  /** Field mask that specifies which fields of the Community resource are going to be updated. */
  updateMask?: FieldMask;
  /** Name of the community. */
  name: string;
  /** Description of the community. */
  description: string;
  /** Labels of the community. */
  labels: { [key: string]: string };
}

export interface UpdateCommunityRequest_LabelsEntry {
  $type: "yandex.cloud.datasphere.v2.UpdateCommunityRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateCommunityMetadata {
  $type: "yandex.cloud.datasphere.v2.UpdateCommunityMetadata";
  /** ID of the community that is being updated. */
  communityId: string;
}

export interface DeleteCommunityRequest {
  $type: "yandex.cloud.datasphere.v2.DeleteCommunityRequest";
  /** ID of the community. */
  communityId: string;
}

export interface DeleteCommunityMetadata {
  $type: "yandex.cloud.datasphere.v2.DeleteCommunityMetadata";
  /** ID of the community that is being deleted. */
  communityId: string;
}

export interface ListCommunitiesRequest {
  $type: "yandex.cloud.datasphere.v2.ListCommunitiesRequest";
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListCommunitiesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListCommunitiesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * Community name or description pattern.
   * Only communities with names or descriptions matching specified pattern will be returned.
   */
  nameOrDescriptionPattern: string;
  /** ID of the user. Only communities owned by specified user will be returned. */
  ownedById: string;
  /** If set to true, only public communities will be returned. */
  listPublic: boolean;
  /** ID of the organization to list communities in. */
  organizationId: string;
}

export interface ListCommunitiesResponse {
  $type: "yandex.cloud.datasphere.v2.ListCommunitiesResponse";
  /** List of communities matching filters in list communities request. */
  communities: Community[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListCommunitiesRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListCommunitiesRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface SetCommunityAccessBindingsMetadata {
  $type: "yandex.cloud.datasphere.v2.SetCommunityAccessBindingsMetadata";
  /** ID of the community which access bindings are set. */
  communityId: string;
}

export interface UpdateCommunityAccessBindingsMetadata {
  $type: "yandex.cloud.datasphere.v2.UpdateCommunityAccessBindingsMetadata";
  /** ID of the community which access bindings are updated. */
  communityId: string;
}

const baseCreateCommunityRequest: object = {
  $type: "yandex.cloud.datasphere.v2.CreateCommunityRequest",
  name: "",
  description: "",
  organizationId: "",
  billingAccountId: "",
};

export const CreateCommunityRequest = {
  $type: "yandex.cloud.datasphere.v2.CreateCommunityRequest" as const,

  encode(
    message: CreateCommunityRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.organizationId !== "") {
      writer.uint32(26).string(message.organizationId);
    }
    if (message.billingAccountId !== "") {
      writer.uint32(34).string(message.billingAccountId);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateCommunityRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.datasphere.v2.CreateCommunityRequest.LabelsEntry",
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
  ): CreateCommunityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateCommunityRequest } as CreateCommunityRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.organizationId = reader.string();
          break;
        case 4:
          message.billingAccountId = reader.string();
          break;
        case 5:
          const entry5 = CreateCommunityRequest_LabelsEntry.decode(
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

  fromJSON(object: any): CreateCommunityRequest {
    const message = { ...baseCreateCommunityRequest } as CreateCommunityRequest;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.organizationId =
      object.organizationId !== undefined && object.organizationId !== null
        ? String(object.organizationId)
        : "";
    message.billingAccountId =
      object.billingAccountId !== undefined && object.billingAccountId !== null
        ? String(object.billingAccountId)
        : "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: CreateCommunityRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.organizationId !== undefined &&
      (obj.organizationId = message.organizationId);
    message.billingAccountId !== undefined &&
      (obj.billingAccountId = message.billingAccountId);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateCommunityRequest>, I>>(
    object: I
  ): CreateCommunityRequest {
    const message = { ...baseCreateCommunityRequest } as CreateCommunityRequest;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.organizationId = object.organizationId ?? "";
    message.billingAccountId = object.billingAccountId ?? "";
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

messageTypeRegistry.set(CreateCommunityRequest.$type, CreateCommunityRequest);

const baseCreateCommunityRequest_LabelsEntry: object = {
  $type: "yandex.cloud.datasphere.v2.CreateCommunityRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateCommunityRequest_LabelsEntry = {
  $type:
    "yandex.cloud.datasphere.v2.CreateCommunityRequest.LabelsEntry" as const,

  encode(
    message: CreateCommunityRequest_LabelsEntry,
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
  ): CreateCommunityRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateCommunityRequest_LabelsEntry,
    } as CreateCommunityRequest_LabelsEntry;
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

  fromJSON(object: any): CreateCommunityRequest_LabelsEntry {
    const message = {
      ...baseCreateCommunityRequest_LabelsEntry,
    } as CreateCommunityRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateCommunityRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateCommunityRequest_LabelsEntry>, I>
  >(object: I): CreateCommunityRequest_LabelsEntry {
    const message = {
      ...baseCreateCommunityRequest_LabelsEntry,
    } as CreateCommunityRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateCommunityRequest_LabelsEntry.$type,
  CreateCommunityRequest_LabelsEntry
);

const baseCreateCommunityMetadata: object = {
  $type: "yandex.cloud.datasphere.v2.CreateCommunityMetadata",
  communityId: "",
};

export const CreateCommunityMetadata = {
  $type: "yandex.cloud.datasphere.v2.CreateCommunityMetadata" as const,

  encode(
    message: CreateCommunityMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.communityId !== "") {
      writer.uint32(10).string(message.communityId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateCommunityMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateCommunityMetadata,
    } as CreateCommunityMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateCommunityMetadata {
    const message = {
      ...baseCreateCommunityMetadata,
    } as CreateCommunityMetadata;
    message.communityId =
      object.communityId !== undefined && object.communityId !== null
        ? String(object.communityId)
        : "";
    return message;
  },

  toJSON(message: CreateCommunityMetadata): unknown {
    const obj: any = {};
    message.communityId !== undefined &&
      (obj.communityId = message.communityId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateCommunityMetadata>, I>>(
    object: I
  ): CreateCommunityMetadata {
    const message = {
      ...baseCreateCommunityMetadata,
    } as CreateCommunityMetadata;
    message.communityId = object.communityId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateCommunityMetadata.$type, CreateCommunityMetadata);

const baseGetCommunityRequest: object = {
  $type: "yandex.cloud.datasphere.v2.GetCommunityRequest",
  communityId: "",
};

export const GetCommunityRequest = {
  $type: "yandex.cloud.datasphere.v2.GetCommunityRequest" as const,

  encode(
    message: GetCommunityRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.communityId !== "") {
      writer.uint32(10).string(message.communityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCommunityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetCommunityRequest } as GetCommunityRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCommunityRequest {
    const message = { ...baseGetCommunityRequest } as GetCommunityRequest;
    message.communityId =
      object.communityId !== undefined && object.communityId !== null
        ? String(object.communityId)
        : "";
    return message;
  },

  toJSON(message: GetCommunityRequest): unknown {
    const obj: any = {};
    message.communityId !== undefined &&
      (obj.communityId = message.communityId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCommunityRequest>, I>>(
    object: I
  ): GetCommunityRequest {
    const message = { ...baseGetCommunityRequest } as GetCommunityRequest;
    message.communityId = object.communityId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetCommunityRequest.$type, GetCommunityRequest);

const baseUpdateCommunityRequest: object = {
  $type: "yandex.cloud.datasphere.v2.UpdateCommunityRequest",
  communityId: "",
  name: "",
  description: "",
};

export const UpdateCommunityRequest = {
  $type: "yandex.cloud.datasphere.v2.UpdateCommunityRequest" as const,

  encode(
    message: UpdateCommunityRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.communityId !== "") {
      writer.uint32(10).string(message.communityId);
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
      UpdateCommunityRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.datasphere.v2.UpdateCommunityRequest.LabelsEntry",
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
  ): UpdateCommunityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateCommunityRequest } as UpdateCommunityRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityId = reader.string();
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
          const entry5 = UpdateCommunityRequest_LabelsEntry.decode(
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

  fromJSON(object: any): UpdateCommunityRequest {
    const message = { ...baseUpdateCommunityRequest } as UpdateCommunityRequest;
    message.communityId =
      object.communityId !== undefined && object.communityId !== null
        ? String(object.communityId)
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

  toJSON(message: UpdateCommunityRequest): unknown {
    const obj: any = {};
    message.communityId !== undefined &&
      (obj.communityId = message.communityId);
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

  fromPartial<I extends Exact<DeepPartial<UpdateCommunityRequest>, I>>(
    object: I
  ): UpdateCommunityRequest {
    const message = { ...baseUpdateCommunityRequest } as UpdateCommunityRequest;
    message.communityId = object.communityId ?? "";
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

messageTypeRegistry.set(UpdateCommunityRequest.$type, UpdateCommunityRequest);

const baseUpdateCommunityRequest_LabelsEntry: object = {
  $type: "yandex.cloud.datasphere.v2.UpdateCommunityRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateCommunityRequest_LabelsEntry = {
  $type:
    "yandex.cloud.datasphere.v2.UpdateCommunityRequest.LabelsEntry" as const,

  encode(
    message: UpdateCommunityRequest_LabelsEntry,
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
  ): UpdateCommunityRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateCommunityRequest_LabelsEntry,
    } as UpdateCommunityRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateCommunityRequest_LabelsEntry {
    const message = {
      ...baseUpdateCommunityRequest_LabelsEntry,
    } as UpdateCommunityRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateCommunityRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateCommunityRequest_LabelsEntry>, I>
  >(object: I): UpdateCommunityRequest_LabelsEntry {
    const message = {
      ...baseUpdateCommunityRequest_LabelsEntry,
    } as UpdateCommunityRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateCommunityRequest_LabelsEntry.$type,
  UpdateCommunityRequest_LabelsEntry
);

const baseUpdateCommunityMetadata: object = {
  $type: "yandex.cloud.datasphere.v2.UpdateCommunityMetadata",
  communityId: "",
};

export const UpdateCommunityMetadata = {
  $type: "yandex.cloud.datasphere.v2.UpdateCommunityMetadata" as const,

  encode(
    message: UpdateCommunityMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.communityId !== "") {
      writer.uint32(10).string(message.communityId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateCommunityMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateCommunityMetadata,
    } as UpdateCommunityMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateCommunityMetadata {
    const message = {
      ...baseUpdateCommunityMetadata,
    } as UpdateCommunityMetadata;
    message.communityId =
      object.communityId !== undefined && object.communityId !== null
        ? String(object.communityId)
        : "";
    return message;
  },

  toJSON(message: UpdateCommunityMetadata): unknown {
    const obj: any = {};
    message.communityId !== undefined &&
      (obj.communityId = message.communityId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateCommunityMetadata>, I>>(
    object: I
  ): UpdateCommunityMetadata {
    const message = {
      ...baseUpdateCommunityMetadata,
    } as UpdateCommunityMetadata;
    message.communityId = object.communityId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateCommunityMetadata.$type, UpdateCommunityMetadata);

const baseDeleteCommunityRequest: object = {
  $type: "yandex.cloud.datasphere.v2.DeleteCommunityRequest",
  communityId: "",
};

export const DeleteCommunityRequest = {
  $type: "yandex.cloud.datasphere.v2.DeleteCommunityRequest" as const,

  encode(
    message: DeleteCommunityRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.communityId !== "") {
      writer.uint32(10).string(message.communityId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteCommunityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteCommunityRequest } as DeleteCommunityRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteCommunityRequest {
    const message = { ...baseDeleteCommunityRequest } as DeleteCommunityRequest;
    message.communityId =
      object.communityId !== undefined && object.communityId !== null
        ? String(object.communityId)
        : "";
    return message;
  },

  toJSON(message: DeleteCommunityRequest): unknown {
    const obj: any = {};
    message.communityId !== undefined &&
      (obj.communityId = message.communityId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteCommunityRequest>, I>>(
    object: I
  ): DeleteCommunityRequest {
    const message = { ...baseDeleteCommunityRequest } as DeleteCommunityRequest;
    message.communityId = object.communityId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteCommunityRequest.$type, DeleteCommunityRequest);

const baseDeleteCommunityMetadata: object = {
  $type: "yandex.cloud.datasphere.v2.DeleteCommunityMetadata",
  communityId: "",
};

export const DeleteCommunityMetadata = {
  $type: "yandex.cloud.datasphere.v2.DeleteCommunityMetadata" as const,

  encode(
    message: DeleteCommunityMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.communityId !== "") {
      writer.uint32(10).string(message.communityId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteCommunityMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteCommunityMetadata,
    } as DeleteCommunityMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteCommunityMetadata {
    const message = {
      ...baseDeleteCommunityMetadata,
    } as DeleteCommunityMetadata;
    message.communityId =
      object.communityId !== undefined && object.communityId !== null
        ? String(object.communityId)
        : "";
    return message;
  },

  toJSON(message: DeleteCommunityMetadata): unknown {
    const obj: any = {};
    message.communityId !== undefined &&
      (obj.communityId = message.communityId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteCommunityMetadata>, I>>(
    object: I
  ): DeleteCommunityMetadata {
    const message = {
      ...baseDeleteCommunityMetadata,
    } as DeleteCommunityMetadata;
    message.communityId = object.communityId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteCommunityMetadata.$type, DeleteCommunityMetadata);

const baseListCommunitiesRequest: object = {
  $type: "yandex.cloud.datasphere.v2.ListCommunitiesRequest",
  pageSize: 0,
  pageToken: "",
  nameOrDescriptionPattern: "",
  ownedById: "",
  listPublic: false,
  organizationId: "",
};

export const ListCommunitiesRequest = {
  $type: "yandex.cloud.datasphere.v2.ListCommunitiesRequest" as const,

  encode(
    message: ListCommunitiesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pageSize !== 0) {
      writer.uint32(8).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    if (message.nameOrDescriptionPattern !== "") {
      writer.uint32(26).string(message.nameOrDescriptionPattern);
    }
    if (message.ownedById !== "") {
      writer.uint32(42).string(message.ownedById);
    }
    if (message.listPublic === true) {
      writer.uint32(48).bool(message.listPublic);
    }
    if (message.organizationId !== "") {
      writer.uint32(58).string(message.organizationId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListCommunitiesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListCommunitiesRequest } as ListCommunitiesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pageSize = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.pageToken = reader.string();
          break;
        case 3:
          message.nameOrDescriptionPattern = reader.string();
          break;
        case 5:
          message.ownedById = reader.string();
          break;
        case 6:
          message.listPublic = reader.bool();
          break;
        case 7:
          message.organizationId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListCommunitiesRequest {
    const message = { ...baseListCommunitiesRequest } as ListCommunitiesRequest;
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    message.nameOrDescriptionPattern =
      object.nameOrDescriptionPattern !== undefined &&
      object.nameOrDescriptionPattern !== null
        ? String(object.nameOrDescriptionPattern)
        : "";
    message.ownedById =
      object.ownedById !== undefined && object.ownedById !== null
        ? String(object.ownedById)
        : "";
    message.listPublic =
      object.listPublic !== undefined && object.listPublic !== null
        ? Boolean(object.listPublic)
        : false;
    message.organizationId =
      object.organizationId !== undefined && object.organizationId !== null
        ? String(object.organizationId)
        : "";
    return message;
  },

  toJSON(message: ListCommunitiesRequest): unknown {
    const obj: any = {};
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.nameOrDescriptionPattern !== undefined &&
      (obj.nameOrDescriptionPattern = message.nameOrDescriptionPattern);
    message.ownedById !== undefined && (obj.ownedById = message.ownedById);
    message.listPublic !== undefined && (obj.listPublic = message.listPublic);
    message.organizationId !== undefined &&
      (obj.organizationId = message.organizationId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListCommunitiesRequest>, I>>(
    object: I
  ): ListCommunitiesRequest {
    const message = { ...baseListCommunitiesRequest } as ListCommunitiesRequest;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.nameOrDescriptionPattern = object.nameOrDescriptionPattern ?? "";
    message.ownedById = object.ownedById ?? "";
    message.listPublic = object.listPublic ?? false;
    message.organizationId = object.organizationId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListCommunitiesRequest.$type, ListCommunitiesRequest);

const baseListCommunitiesResponse: object = {
  $type: "yandex.cloud.datasphere.v2.ListCommunitiesResponse",
  nextPageToken: "",
};

export const ListCommunitiesResponse = {
  $type: "yandex.cloud.datasphere.v2.ListCommunitiesResponse" as const,

  encode(
    message: ListCommunitiesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.communities) {
      Community.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListCommunitiesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListCommunitiesResponse,
    } as ListCommunitiesResponse;
    message.communities = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communities.push(Community.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListCommunitiesResponse {
    const message = {
      ...baseListCommunitiesResponse,
    } as ListCommunitiesResponse;
    message.communities = (object.communities ?? []).map((e: any) =>
      Community.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListCommunitiesResponse): unknown {
    const obj: any = {};
    if (message.communities) {
      obj.communities = message.communities.map((e) =>
        e ? Community.toJSON(e) : undefined
      );
    } else {
      obj.communities = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListCommunitiesResponse>, I>>(
    object: I
  ): ListCommunitiesResponse {
    const message = {
      ...baseListCommunitiesResponse,
    } as ListCommunitiesResponse;
    message.communities =
      object.communities?.map((e) => Community.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListCommunitiesResponse.$type, ListCommunitiesResponse);

const baseSetCommunityAccessBindingsMetadata: object = {
  $type: "yandex.cloud.datasphere.v2.SetCommunityAccessBindingsMetadata",
  communityId: "",
};

export const SetCommunityAccessBindingsMetadata = {
  $type:
    "yandex.cloud.datasphere.v2.SetCommunityAccessBindingsMetadata" as const,

  encode(
    message: SetCommunityAccessBindingsMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.communityId !== "") {
      writer.uint32(10).string(message.communityId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetCommunityAccessBindingsMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetCommunityAccessBindingsMetadata,
    } as SetCommunityAccessBindingsMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetCommunityAccessBindingsMetadata {
    const message = {
      ...baseSetCommunityAccessBindingsMetadata,
    } as SetCommunityAccessBindingsMetadata;
    message.communityId =
      object.communityId !== undefined && object.communityId !== null
        ? String(object.communityId)
        : "";
    return message;
  },

  toJSON(message: SetCommunityAccessBindingsMetadata): unknown {
    const obj: any = {};
    message.communityId !== undefined &&
      (obj.communityId = message.communityId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<SetCommunityAccessBindingsMetadata>, I>
  >(object: I): SetCommunityAccessBindingsMetadata {
    const message = {
      ...baseSetCommunityAccessBindingsMetadata,
    } as SetCommunityAccessBindingsMetadata;
    message.communityId = object.communityId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  SetCommunityAccessBindingsMetadata.$type,
  SetCommunityAccessBindingsMetadata
);

const baseUpdateCommunityAccessBindingsMetadata: object = {
  $type: "yandex.cloud.datasphere.v2.UpdateCommunityAccessBindingsMetadata",
  communityId: "",
};

export const UpdateCommunityAccessBindingsMetadata = {
  $type:
    "yandex.cloud.datasphere.v2.UpdateCommunityAccessBindingsMetadata" as const,

  encode(
    message: UpdateCommunityAccessBindingsMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.communityId !== "") {
      writer.uint32(10).string(message.communityId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateCommunityAccessBindingsMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateCommunityAccessBindingsMetadata,
    } as UpdateCommunityAccessBindingsMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateCommunityAccessBindingsMetadata {
    const message = {
      ...baseUpdateCommunityAccessBindingsMetadata,
    } as UpdateCommunityAccessBindingsMetadata;
    message.communityId =
      object.communityId !== undefined && object.communityId !== null
        ? String(object.communityId)
        : "";
    return message;
  },

  toJSON(message: UpdateCommunityAccessBindingsMetadata): unknown {
    const obj: any = {};
    message.communityId !== undefined &&
      (obj.communityId = message.communityId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateCommunityAccessBindingsMetadata>, I>
  >(object: I): UpdateCommunityAccessBindingsMetadata {
    const message = {
      ...baseUpdateCommunityAccessBindingsMetadata,
    } as UpdateCommunityAccessBindingsMetadata;
    message.communityId = object.communityId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateCommunityAccessBindingsMetadata.$type,
  UpdateCommunityAccessBindingsMetadata
);

export const CommunityServiceService = {
  /** Creates community in specified organization. */
  create: {
    path: "/yandex.cloud.datasphere.v2.CommunityService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateCommunityRequest) =>
      Buffer.from(CreateCommunityRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateCommunityRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Returns community. */
  get: {
    path: "/yandex.cloud.datasphere.v2.CommunityService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetCommunityRequest) =>
      Buffer.from(GetCommunityRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetCommunityRequest.decode(value),
    responseSerialize: (value: Community) =>
      Buffer.from(Community.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Community.decode(value),
  },
  /** Updates specified community. */
  update: {
    path: "/yandex.cloud.datasphere.v2.CommunityService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateCommunityRequest) =>
      Buffer.from(UpdateCommunityRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateCommunityRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes specified community. */
  delete: {
    path: "/yandex.cloud.datasphere.v2.CommunityService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteCommunityRequest) =>
      Buffer.from(DeleteCommunityRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteCommunityRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** List communities in specified organization. */
  list: {
    path: "/yandex.cloud.datasphere.v2.CommunityService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListCommunitiesRequest) =>
      Buffer.from(ListCommunitiesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListCommunitiesRequest.decode(value),
    responseSerialize: (value: ListCommunitiesResponse) =>
      Buffer.from(ListCommunitiesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListCommunitiesResponse.decode(value),
  },
  /** Lists access bindings for specified community. */
  listAccessBindings: {
    path: "/yandex.cloud.datasphere.v2.CommunityService/ListAccessBindings",
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
  /** Sets access bindings for specified community. */
  setAccessBindings: {
    path: "/yandex.cloud.datasphere.v2.CommunityService/SetAccessBindings",
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
  /** Updates access bindings for specified community. */
  updateAccessBindings: {
    path: "/yandex.cloud.datasphere.v2.CommunityService/UpdateAccessBindings",
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

export interface CommunityServiceServer extends UntypedServiceImplementation {
  /** Creates community in specified organization. */
  create: handleUnaryCall<CreateCommunityRequest, Operation>;
  /** Returns community. */
  get: handleUnaryCall<GetCommunityRequest, Community>;
  /** Updates specified community. */
  update: handleUnaryCall<UpdateCommunityRequest, Operation>;
  /** Deletes specified community. */
  delete: handleUnaryCall<DeleteCommunityRequest, Operation>;
  /** List communities in specified organization. */
  list: handleUnaryCall<ListCommunitiesRequest, ListCommunitiesResponse>;
  /** Lists access bindings for specified community. */
  listAccessBindings: handleUnaryCall<
    ListAccessBindingsRequest,
    ListAccessBindingsResponse
  >;
  /** Sets access bindings for specified community. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for specified community. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface CommunityServiceClient extends Client {
  /** Creates community in specified organization. */
  create(
    request: CreateCommunityRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateCommunityRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateCommunityRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Returns community. */
  get(
    request: GetCommunityRequest,
    callback: (error: ServiceError | null, response: Community) => void
  ): ClientUnaryCall;
  get(
    request: GetCommunityRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Community) => void
  ): ClientUnaryCall;
  get(
    request: GetCommunityRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Community) => void
  ): ClientUnaryCall;
  /** Updates specified community. */
  update(
    request: UpdateCommunityRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateCommunityRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateCommunityRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes specified community. */
  delete(
    request: DeleteCommunityRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteCommunityRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteCommunityRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** List communities in specified organization. */
  list(
    request: ListCommunitiesRequest,
    callback: (
      error: ServiceError | null,
      response: ListCommunitiesResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListCommunitiesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListCommunitiesResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListCommunitiesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListCommunitiesResponse
    ) => void
  ): ClientUnaryCall;
  /** Lists access bindings for specified community. */
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
  /** Sets access bindings for specified community. */
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
  /** Updates access bindings for specified community. */
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

export const CommunityServiceClient = makeGenericClientConstructor(
  CommunityServiceService,
  "yandex.cloud.datasphere.v2.CommunityService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): CommunityServiceClient;
  service: typeof CommunityServiceService;
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
