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
import {
  GroupMapping,
  GroupMappingItem,
} from "../../../../yandex/cloud/organizationmanager/v1/group_mapping";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.organizationmanager.v1";

export interface GetGroupMappingRequest {
  $type: "yandex.cloud.organizationmanager.v1.GetGroupMappingRequest";
  federationId: string;
}

export interface GetGroupMappingResponse {
  $type: "yandex.cloud.organizationmanager.v1.GetGroupMappingResponse";
  groupMapping?: GroupMapping;
}

export interface CreateGroupMappingRequest {
  $type: "yandex.cloud.organizationmanager.v1.CreateGroupMappingRequest";
  /** Federation the group mapping will be created for */
  federationId: string;
  /** Synchronization status. */
  enabled: boolean;
}

export interface CreateGroupMappingMetadata {
  $type: "yandex.cloud.organizationmanager.v1.CreateGroupMappingMetadata";
  federationId: string;
}

/** Request for updating group mapping configuration */
export interface UpdateGroupMappingRequest {
  $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingRequest";
  /** Federation the group mapping update is requested */
  federationId: string;
  /** A set of fields that should be updated */
  updateMask?: FieldMask;
  /** A new state of synchronization to update (if mentioned in update_mask). */
  enabled: boolean;
}

export interface UpdateGroupMappingMetadata {
  $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingMetadata";
  federationId: string;
}

export interface DeleteGroupMappingRequest {
  $type: "yandex.cloud.organizationmanager.v1.DeleteGroupMappingRequest";
  /** Federation the group mapping deletion is requested */
  federationId: string;
}

export interface DeleteGroupMappingMetadata {
  $type: "yandex.cloud.organizationmanager.v1.DeleteGroupMappingMetadata";
  federationId: string;
}

/** Request for updating group mapping configuration */
export interface UpdateGroupMappingItemsRequest {
  $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsRequest";
  /** Federation the group mapping update is requested */
  federationId: string;
  /** A collection of mapping items to add or remove (ignores update_fields). */
  groupMappingItemDeltas: GroupMappingItemDelta[];
}

/** Message describes the user's request to change (add or remove) a single group mapping. */
export interface GroupMappingItemDelta {
  $type: "yandex.cloud.organizationmanager.v1.GroupMappingItemDelta";
  item?: GroupMappingItem;
  action: GroupMappingItemDelta_Action;
}

export enum GroupMappingItemDelta_Action {
  ACTION_UNSPECIFIED = 0,
  /** ADD - Group mapping item is to be added */
  ADD = 1,
  /** REMOVE - Group mapping item is to be removed */
  REMOVE = 2,
  UNRECOGNIZED = -1,
}

export function groupMappingItemDelta_ActionFromJSON(
  object: any
): GroupMappingItemDelta_Action {
  switch (object) {
    case 0:
    case "ACTION_UNSPECIFIED":
      return GroupMappingItemDelta_Action.ACTION_UNSPECIFIED;
    case 1:
    case "ADD":
      return GroupMappingItemDelta_Action.ADD;
    case 2:
    case "REMOVE":
      return GroupMappingItemDelta_Action.REMOVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GroupMappingItemDelta_Action.UNRECOGNIZED;
  }
}

export function groupMappingItemDelta_ActionToJSON(
  object: GroupMappingItemDelta_Action
): string {
  switch (object) {
    case GroupMappingItemDelta_Action.ACTION_UNSPECIFIED:
      return "ACTION_UNSPECIFIED";
    case GroupMappingItemDelta_Action.ADD:
      return "ADD";
    case GroupMappingItemDelta_Action.REMOVE:
      return "REMOVE";
    default:
      return "UNKNOWN";
  }
}

export interface UpdateGroupMappingItemsMetadata {
  $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsMetadata";
  federationId: string;
}

export interface UpdateGroupMappingItemsResponse {
  $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsResponse";
  /** Effective changes that were applied */
  groupMappingItemDeltas: GroupMappingItemDelta[];
}

export interface ListGroupMappingItemsRequest {
  $type: "yandex.cloud.organizationmanager.v1.ListGroupMappingItemsRequest";
  federationId: string;
  pageSize: number;
  pageToken: string;
  filter: string;
}

export interface ListGroupMappingItemsResponse {
  $type: "yandex.cloud.organizationmanager.v1.ListGroupMappingItemsResponse";
  groupMappingItems: GroupMappingItem[];
  nextPageToken: string;
}

const baseGetGroupMappingRequest: object = {
  $type: "yandex.cloud.organizationmanager.v1.GetGroupMappingRequest",
  federationId: "",
};

export const GetGroupMappingRequest = {
  $type: "yandex.cloud.organizationmanager.v1.GetGroupMappingRequest" as const,

  encode(
    message: GetGroupMappingRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGroupMappingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetGroupMappingRequest } as GetGroupMappingRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.federationId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGroupMappingRequest {
    const message = { ...baseGetGroupMappingRequest } as GetGroupMappingRequest;
    message.federationId =
      object.federationId !== undefined && object.federationId !== null
        ? String(object.federationId)
        : "";
    return message;
  },

  toJSON(message: GetGroupMappingRequest): unknown {
    const obj: any = {};
    message.federationId !== undefined &&
      (obj.federationId = message.federationId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetGroupMappingRequest>, I>>(
    object: I
  ): GetGroupMappingRequest {
    const message = { ...baseGetGroupMappingRequest } as GetGroupMappingRequest;
    message.federationId = object.federationId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetGroupMappingRequest.$type, GetGroupMappingRequest);

const baseGetGroupMappingResponse: object = {
  $type: "yandex.cloud.organizationmanager.v1.GetGroupMappingResponse",
};

export const GetGroupMappingResponse = {
  $type: "yandex.cloud.organizationmanager.v1.GetGroupMappingResponse" as const,

  encode(
    message: GetGroupMappingResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupMapping !== undefined) {
      GroupMapping.encode(
        message.groupMapping,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGroupMappingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetGroupMappingResponse,
    } as GetGroupMappingResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupMapping = GroupMapping.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGroupMappingResponse {
    const message = {
      ...baseGetGroupMappingResponse,
    } as GetGroupMappingResponse;
    message.groupMapping =
      object.groupMapping !== undefined && object.groupMapping !== null
        ? GroupMapping.fromJSON(object.groupMapping)
        : undefined;
    return message;
  },

  toJSON(message: GetGroupMappingResponse): unknown {
    const obj: any = {};
    message.groupMapping !== undefined &&
      (obj.groupMapping = message.groupMapping
        ? GroupMapping.toJSON(message.groupMapping)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetGroupMappingResponse>, I>>(
    object: I
  ): GetGroupMappingResponse {
    const message = {
      ...baseGetGroupMappingResponse,
    } as GetGroupMappingResponse;
    message.groupMapping =
      object.groupMapping !== undefined && object.groupMapping !== null
        ? GroupMapping.fromPartial(object.groupMapping)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(GetGroupMappingResponse.$type, GetGroupMappingResponse);

const baseCreateGroupMappingRequest: object = {
  $type: "yandex.cloud.organizationmanager.v1.CreateGroupMappingRequest",
  federationId: "",
  enabled: false,
};

export const CreateGroupMappingRequest = {
  $type:
    "yandex.cloud.organizationmanager.v1.CreateGroupMappingRequest" as const,

  encode(
    message: CreateGroupMappingRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateGroupMappingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateGroupMappingRequest,
    } as CreateGroupMappingRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.federationId = reader.string();
          break;
        case 3:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateGroupMappingRequest {
    const message = {
      ...baseCreateGroupMappingRequest,
    } as CreateGroupMappingRequest;
    message.federationId =
      object.federationId !== undefined && object.federationId !== null
        ? String(object.federationId)
        : "";
    message.enabled =
      object.enabled !== undefined && object.enabled !== null
        ? Boolean(object.enabled)
        : false;
    return message;
  },

  toJSON(message: CreateGroupMappingRequest): unknown {
    const obj: any = {};
    message.federationId !== undefined &&
      (obj.federationId = message.federationId);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateGroupMappingRequest>, I>>(
    object: I
  ): CreateGroupMappingRequest {
    const message = {
      ...baseCreateGroupMappingRequest,
    } as CreateGroupMappingRequest;
    message.federationId = object.federationId ?? "";
    message.enabled = object.enabled ?? false;
    return message;
  },
};

messageTypeRegistry.set(
  CreateGroupMappingRequest.$type,
  CreateGroupMappingRequest
);

const baseCreateGroupMappingMetadata: object = {
  $type: "yandex.cloud.organizationmanager.v1.CreateGroupMappingMetadata",
  federationId: "",
};

export const CreateGroupMappingMetadata = {
  $type:
    "yandex.cloud.organizationmanager.v1.CreateGroupMappingMetadata" as const,

  encode(
    message: CreateGroupMappingMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateGroupMappingMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateGroupMappingMetadata,
    } as CreateGroupMappingMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.federationId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateGroupMappingMetadata {
    const message = {
      ...baseCreateGroupMappingMetadata,
    } as CreateGroupMappingMetadata;
    message.federationId =
      object.federationId !== undefined && object.federationId !== null
        ? String(object.federationId)
        : "";
    return message;
  },

  toJSON(message: CreateGroupMappingMetadata): unknown {
    const obj: any = {};
    message.federationId !== undefined &&
      (obj.federationId = message.federationId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateGroupMappingMetadata>, I>>(
    object: I
  ): CreateGroupMappingMetadata {
    const message = {
      ...baseCreateGroupMappingMetadata,
    } as CreateGroupMappingMetadata;
    message.federationId = object.federationId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateGroupMappingMetadata.$type,
  CreateGroupMappingMetadata
);

const baseUpdateGroupMappingRequest: object = {
  $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingRequest",
  federationId: "",
  enabled: false,
};

export const UpdateGroupMappingRequest = {
  $type:
    "yandex.cloud.organizationmanager.v1.UpdateGroupMappingRequest" as const,

  encode(
    message: UpdateGroupMappingRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateGroupMappingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateGroupMappingRequest,
    } as UpdateGroupMappingRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.federationId = reader.string();
          break;
        case 2:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        case 3:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateGroupMappingRequest {
    const message = {
      ...baseUpdateGroupMappingRequest,
    } as UpdateGroupMappingRequest;
    message.federationId =
      object.federationId !== undefined && object.federationId !== null
        ? String(object.federationId)
        : "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
        : undefined;
    message.enabled =
      object.enabled !== undefined && object.enabled !== null
        ? Boolean(object.enabled)
        : false;
    return message;
  },

  toJSON(message: UpdateGroupMappingRequest): unknown {
    const obj: any = {};
    message.federationId !== undefined &&
      (obj.federationId = message.federationId);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateGroupMappingRequest>, I>>(
    object: I
  ): UpdateGroupMappingRequest {
    const message = {
      ...baseUpdateGroupMappingRequest,
    } as UpdateGroupMappingRequest;
    message.federationId = object.federationId ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.enabled = object.enabled ?? false;
    return message;
  },
};

messageTypeRegistry.set(
  UpdateGroupMappingRequest.$type,
  UpdateGroupMappingRequest
);

const baseUpdateGroupMappingMetadata: object = {
  $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingMetadata",
  federationId: "",
};

export const UpdateGroupMappingMetadata = {
  $type:
    "yandex.cloud.organizationmanager.v1.UpdateGroupMappingMetadata" as const,

  encode(
    message: UpdateGroupMappingMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateGroupMappingMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateGroupMappingMetadata,
    } as UpdateGroupMappingMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.federationId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateGroupMappingMetadata {
    const message = {
      ...baseUpdateGroupMappingMetadata,
    } as UpdateGroupMappingMetadata;
    message.federationId =
      object.federationId !== undefined && object.federationId !== null
        ? String(object.federationId)
        : "";
    return message;
  },

  toJSON(message: UpdateGroupMappingMetadata): unknown {
    const obj: any = {};
    message.federationId !== undefined &&
      (obj.federationId = message.federationId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateGroupMappingMetadata>, I>>(
    object: I
  ): UpdateGroupMappingMetadata {
    const message = {
      ...baseUpdateGroupMappingMetadata,
    } as UpdateGroupMappingMetadata;
    message.federationId = object.federationId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateGroupMappingMetadata.$type,
  UpdateGroupMappingMetadata
);

const baseDeleteGroupMappingRequest: object = {
  $type: "yandex.cloud.organizationmanager.v1.DeleteGroupMappingRequest",
  federationId: "",
};

export const DeleteGroupMappingRequest = {
  $type:
    "yandex.cloud.organizationmanager.v1.DeleteGroupMappingRequest" as const,

  encode(
    message: DeleteGroupMappingRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteGroupMappingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteGroupMappingRequest,
    } as DeleteGroupMappingRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.federationId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteGroupMappingRequest {
    const message = {
      ...baseDeleteGroupMappingRequest,
    } as DeleteGroupMappingRequest;
    message.federationId =
      object.federationId !== undefined && object.federationId !== null
        ? String(object.federationId)
        : "";
    return message;
  },

  toJSON(message: DeleteGroupMappingRequest): unknown {
    const obj: any = {};
    message.federationId !== undefined &&
      (obj.federationId = message.federationId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteGroupMappingRequest>, I>>(
    object: I
  ): DeleteGroupMappingRequest {
    const message = {
      ...baseDeleteGroupMappingRequest,
    } as DeleteGroupMappingRequest;
    message.federationId = object.federationId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteGroupMappingRequest.$type,
  DeleteGroupMappingRequest
);

const baseDeleteGroupMappingMetadata: object = {
  $type: "yandex.cloud.organizationmanager.v1.DeleteGroupMappingMetadata",
  federationId: "",
};

export const DeleteGroupMappingMetadata = {
  $type:
    "yandex.cloud.organizationmanager.v1.DeleteGroupMappingMetadata" as const,

  encode(
    message: DeleteGroupMappingMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteGroupMappingMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteGroupMappingMetadata,
    } as DeleteGroupMappingMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.federationId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteGroupMappingMetadata {
    const message = {
      ...baseDeleteGroupMappingMetadata,
    } as DeleteGroupMappingMetadata;
    message.federationId =
      object.federationId !== undefined && object.federationId !== null
        ? String(object.federationId)
        : "";
    return message;
  },

  toJSON(message: DeleteGroupMappingMetadata): unknown {
    const obj: any = {};
    message.federationId !== undefined &&
      (obj.federationId = message.federationId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteGroupMappingMetadata>, I>>(
    object: I
  ): DeleteGroupMappingMetadata {
    const message = {
      ...baseDeleteGroupMappingMetadata,
    } as DeleteGroupMappingMetadata;
    message.federationId = object.federationId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteGroupMappingMetadata.$type,
  DeleteGroupMappingMetadata
);

const baseUpdateGroupMappingItemsRequest: object = {
  $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsRequest",
  federationId: "",
};

export const UpdateGroupMappingItemsRequest = {
  $type:
    "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsRequest" as const,

  encode(
    message: UpdateGroupMappingItemsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    for (const v of message.groupMappingItemDeltas) {
      GroupMappingItemDelta.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateGroupMappingItemsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateGroupMappingItemsRequest,
    } as UpdateGroupMappingItemsRequest;
    message.groupMappingItemDeltas = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.federationId = reader.string();
          break;
        case 4:
          message.groupMappingItemDeltas.push(
            GroupMappingItemDelta.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateGroupMappingItemsRequest {
    const message = {
      ...baseUpdateGroupMappingItemsRequest,
    } as UpdateGroupMappingItemsRequest;
    message.federationId =
      object.federationId !== undefined && object.federationId !== null
        ? String(object.federationId)
        : "";
    message.groupMappingItemDeltas = (object.groupMappingItemDeltas ?? []).map(
      (e: any) => GroupMappingItemDelta.fromJSON(e)
    );
    return message;
  },

  toJSON(message: UpdateGroupMappingItemsRequest): unknown {
    const obj: any = {};
    message.federationId !== undefined &&
      (obj.federationId = message.federationId);
    if (message.groupMappingItemDeltas) {
      obj.groupMappingItemDeltas = message.groupMappingItemDeltas.map((e) =>
        e ? GroupMappingItemDelta.toJSON(e) : undefined
      );
    } else {
      obj.groupMappingItemDeltas = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateGroupMappingItemsRequest>, I>>(
    object: I
  ): UpdateGroupMappingItemsRequest {
    const message = {
      ...baseUpdateGroupMappingItemsRequest,
    } as UpdateGroupMappingItemsRequest;
    message.federationId = object.federationId ?? "";
    message.groupMappingItemDeltas =
      object.groupMappingItemDeltas?.map((e) =>
        GroupMappingItemDelta.fromPartial(e)
      ) || [];
    return message;
  },
};

messageTypeRegistry.set(
  UpdateGroupMappingItemsRequest.$type,
  UpdateGroupMappingItemsRequest
);

const baseGroupMappingItemDelta: object = {
  $type: "yandex.cloud.organizationmanager.v1.GroupMappingItemDelta",
  action: 0,
};

export const GroupMappingItemDelta = {
  $type: "yandex.cloud.organizationmanager.v1.GroupMappingItemDelta" as const,

  encode(
    message: GroupMappingItemDelta,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.item !== undefined) {
      GroupMappingItem.encode(message.item, writer.uint32(10).fork()).ldelim();
    }
    if (message.action !== 0) {
      writer.uint32(16).int32(message.action);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GroupMappingItemDelta {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGroupMappingItemDelta } as GroupMappingItemDelta;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.item = GroupMappingItem.decode(reader, reader.uint32());
          break;
        case 2:
          message.action = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupMappingItemDelta {
    const message = { ...baseGroupMappingItemDelta } as GroupMappingItemDelta;
    message.item =
      object.item !== undefined && object.item !== null
        ? GroupMappingItem.fromJSON(object.item)
        : undefined;
    message.action =
      object.action !== undefined && object.action !== null
        ? groupMappingItemDelta_ActionFromJSON(object.action)
        : 0;
    return message;
  },

  toJSON(message: GroupMappingItemDelta): unknown {
    const obj: any = {};
    message.item !== undefined &&
      (obj.item = message.item
        ? GroupMappingItem.toJSON(message.item)
        : undefined);
    message.action !== undefined &&
      (obj.action = groupMappingItemDelta_ActionToJSON(message.action));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GroupMappingItemDelta>, I>>(
    object: I
  ): GroupMappingItemDelta {
    const message = { ...baseGroupMappingItemDelta } as GroupMappingItemDelta;
    message.item =
      object.item !== undefined && object.item !== null
        ? GroupMappingItem.fromPartial(object.item)
        : undefined;
    message.action = object.action ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GroupMappingItemDelta.$type, GroupMappingItemDelta);

const baseUpdateGroupMappingItemsMetadata: object = {
  $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsMetadata",
  federationId: "",
};

export const UpdateGroupMappingItemsMetadata = {
  $type:
    "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsMetadata" as const,

  encode(
    message: UpdateGroupMappingItemsMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateGroupMappingItemsMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateGroupMappingItemsMetadata,
    } as UpdateGroupMappingItemsMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.federationId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateGroupMappingItemsMetadata {
    const message = {
      ...baseUpdateGroupMappingItemsMetadata,
    } as UpdateGroupMappingItemsMetadata;
    message.federationId =
      object.federationId !== undefined && object.federationId !== null
        ? String(object.federationId)
        : "";
    return message;
  },

  toJSON(message: UpdateGroupMappingItemsMetadata): unknown {
    const obj: any = {};
    message.federationId !== undefined &&
      (obj.federationId = message.federationId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateGroupMappingItemsMetadata>, I>>(
    object: I
  ): UpdateGroupMappingItemsMetadata {
    const message = {
      ...baseUpdateGroupMappingItemsMetadata,
    } as UpdateGroupMappingItemsMetadata;
    message.federationId = object.federationId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateGroupMappingItemsMetadata.$type,
  UpdateGroupMappingItemsMetadata
);

const baseUpdateGroupMappingItemsResponse: object = {
  $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsResponse",
};

export const UpdateGroupMappingItemsResponse = {
  $type:
    "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsResponse" as const,

  encode(
    message: UpdateGroupMappingItemsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.groupMappingItemDeltas) {
      GroupMappingItemDelta.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateGroupMappingItemsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateGroupMappingItemsResponse,
    } as UpdateGroupMappingItemsResponse;
    message.groupMappingItemDeltas = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.groupMappingItemDeltas.push(
            GroupMappingItemDelta.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateGroupMappingItemsResponse {
    const message = {
      ...baseUpdateGroupMappingItemsResponse,
    } as UpdateGroupMappingItemsResponse;
    message.groupMappingItemDeltas = (object.groupMappingItemDeltas ?? []).map(
      (e: any) => GroupMappingItemDelta.fromJSON(e)
    );
    return message;
  },

  toJSON(message: UpdateGroupMappingItemsResponse): unknown {
    const obj: any = {};
    if (message.groupMappingItemDeltas) {
      obj.groupMappingItemDeltas = message.groupMappingItemDeltas.map((e) =>
        e ? GroupMappingItemDelta.toJSON(e) : undefined
      );
    } else {
      obj.groupMappingItemDeltas = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateGroupMappingItemsResponse>, I>>(
    object: I
  ): UpdateGroupMappingItemsResponse {
    const message = {
      ...baseUpdateGroupMappingItemsResponse,
    } as UpdateGroupMappingItemsResponse;
    message.groupMappingItemDeltas =
      object.groupMappingItemDeltas?.map((e) =>
        GroupMappingItemDelta.fromPartial(e)
      ) || [];
    return message;
  },
};

messageTypeRegistry.set(
  UpdateGroupMappingItemsResponse.$type,
  UpdateGroupMappingItemsResponse
);

const baseListGroupMappingItemsRequest: object = {
  $type: "yandex.cloud.organizationmanager.v1.ListGroupMappingItemsRequest",
  federationId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListGroupMappingItemsRequest = {
  $type:
    "yandex.cloud.organizationmanager.v1.ListGroupMappingItemsRequest" as const,

  encode(
    message: ListGroupMappingItemsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.federationId !== "") {
      writer.uint32(10).string(message.federationId);
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
  ): ListGroupMappingItemsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListGroupMappingItemsRequest,
    } as ListGroupMappingItemsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.federationId = reader.string();
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

  fromJSON(object: any): ListGroupMappingItemsRequest {
    const message = {
      ...baseListGroupMappingItemsRequest,
    } as ListGroupMappingItemsRequest;
    message.federationId =
      object.federationId !== undefined && object.federationId !== null
        ? String(object.federationId)
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

  toJSON(message: ListGroupMappingItemsRequest): unknown {
    const obj: any = {};
    message.federationId !== undefined &&
      (obj.federationId = message.federationId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListGroupMappingItemsRequest>, I>>(
    object: I
  ): ListGroupMappingItemsRequest {
    const message = {
      ...baseListGroupMappingItemsRequest,
    } as ListGroupMappingItemsRequest;
    message.federationId = object.federationId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListGroupMappingItemsRequest.$type,
  ListGroupMappingItemsRequest
);

const baseListGroupMappingItemsResponse: object = {
  $type: "yandex.cloud.organizationmanager.v1.ListGroupMappingItemsResponse",
  nextPageToken: "",
};

export const ListGroupMappingItemsResponse = {
  $type:
    "yandex.cloud.organizationmanager.v1.ListGroupMappingItemsResponse" as const,

  encode(
    message: ListGroupMappingItemsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.groupMappingItems) {
      GroupMappingItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListGroupMappingItemsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListGroupMappingItemsResponse,
    } as ListGroupMappingItemsResponse;
    message.groupMappingItems = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupMappingItems.push(
            GroupMappingItem.decode(reader, reader.uint32())
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

  fromJSON(object: any): ListGroupMappingItemsResponse {
    const message = {
      ...baseListGroupMappingItemsResponse,
    } as ListGroupMappingItemsResponse;
    message.groupMappingItems = (object.groupMappingItems ?? []).map((e: any) =>
      GroupMappingItem.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListGroupMappingItemsResponse): unknown {
    const obj: any = {};
    if (message.groupMappingItems) {
      obj.groupMappingItems = message.groupMappingItems.map((e) =>
        e ? GroupMappingItem.toJSON(e) : undefined
      );
    } else {
      obj.groupMappingItems = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListGroupMappingItemsResponse>, I>>(
    object: I
  ): ListGroupMappingItemsResponse {
    const message = {
      ...baseListGroupMappingItemsResponse,
    } as ListGroupMappingItemsResponse;
    message.groupMappingItems =
      object.groupMappingItems?.map((e) => GroupMappingItem.fromPartial(e)) ||
      [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListGroupMappingItemsResponse.$type,
  ListGroupMappingItemsResponse
);

/** RPC service dedicated for federation group mapping. */
export const GroupMappingServiceService = {
  /**
   * Returns a group mapping configured for the specific federation
   * If a federation does not exist this call will return an error
   *    NOT_FOUND will be returned
   * If a federation exist, but has not ever been configured for group mapping
   *   the call FAILED_PRECONDITION will be returned.
   */
  get: {
    path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetGroupMappingRequest) =>
      Buffer.from(GetGroupMappingRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetGroupMappingRequest.decode(value),
    responseSerialize: (value: GetGroupMappingResponse) =>
      Buffer.from(GetGroupMappingResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GetGroupMappingResponse.decode(value),
  },
  /**
   * Adds a group mapping for a federation
   * If mapping already exist, ALREADY_EXISTS will be returned
   */
  create: {
    path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateGroupMappingRequest) =>
      Buffer.from(CreateGroupMappingRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateGroupMappingRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Updates an existing group mapping for a federation
   * Errors:
   * - if federation is not found
   * In case of any error, no changes are applied to existing group mapping
   *
   * This call is idempotent. The following actions do nothing:
   * - enabling when already enabled
   * - disabling when disabled
   * Such parts of request will be ignored. Others will be applied.
   */
  update: {
    path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateGroupMappingRequest) =>
      Buffer.from(UpdateGroupMappingRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateGroupMappingRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Deletes a group mapping. This will remove all the mapping items
   * cascade.
   */
  delete: {
    path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteGroupMappingRequest) =>
      Buffer.from(DeleteGroupMappingRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteGroupMappingRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Returns all the group mappings items
   *
   * Filtering is only supported by external_group_id or internal_group_id
   */
  listItems: {
    path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/ListItems",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListGroupMappingItemsRequest) =>
      Buffer.from(ListGroupMappingItemsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListGroupMappingItemsRequest.decode(value),
    responseSerialize: (value: ListGroupMappingItemsResponse) =>
      Buffer.from(ListGroupMappingItemsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListGroupMappingItemsResponse.decode(value),
  },
  /**
   * Updates group mapping items for a specified federation
   * Errors:
   * - if federation is not found
   * - if internal group in the mapping added does not exist
   * In case of any error, no changes are applied to existing group mapping
   *
   * This call is idempotent. The following actions do nothing:
   * - adding group mapping items that are already present
   * - removing group mapping items that are not present
   * Such parts of request will be ignored. Others will be applied.
   */
  updateItems: {
    path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/UpdateItems",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateGroupMappingItemsRequest) =>
      Buffer.from(UpdateGroupMappingItemsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateGroupMappingItemsRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface GroupMappingServiceServer
  extends UntypedServiceImplementation {
  /**
   * Returns a group mapping configured for the specific federation
   * If a federation does not exist this call will return an error
   *    NOT_FOUND will be returned
   * If a federation exist, but has not ever been configured for group mapping
   *   the call FAILED_PRECONDITION will be returned.
   */
  get: handleUnaryCall<GetGroupMappingRequest, GetGroupMappingResponse>;
  /**
   * Adds a group mapping for a federation
   * If mapping already exist, ALREADY_EXISTS will be returned
   */
  create: handleUnaryCall<CreateGroupMappingRequest, Operation>;
  /**
   * Updates an existing group mapping for a federation
   * Errors:
   * - if federation is not found
   * In case of any error, no changes are applied to existing group mapping
   *
   * This call is idempotent. The following actions do nothing:
   * - enabling when already enabled
   * - disabling when disabled
   * Such parts of request will be ignored. Others will be applied.
   */
  update: handleUnaryCall<UpdateGroupMappingRequest, Operation>;
  /**
   * Deletes a group mapping. This will remove all the mapping items
   * cascade.
   */
  delete: handleUnaryCall<DeleteGroupMappingRequest, Operation>;
  /**
   * Returns all the group mappings items
   *
   * Filtering is only supported by external_group_id or internal_group_id
   */
  listItems: handleUnaryCall<
    ListGroupMappingItemsRequest,
    ListGroupMappingItemsResponse
  >;
  /**
   * Updates group mapping items for a specified federation
   * Errors:
   * - if federation is not found
   * - if internal group in the mapping added does not exist
   * In case of any error, no changes are applied to existing group mapping
   *
   * This call is idempotent. The following actions do nothing:
   * - adding group mapping items that are already present
   * - removing group mapping items that are not present
   * Such parts of request will be ignored. Others will be applied.
   */
  updateItems: handleUnaryCall<UpdateGroupMappingItemsRequest, Operation>;
}

export interface GroupMappingServiceClient extends Client {
  /**
   * Returns a group mapping configured for the specific federation
   * If a federation does not exist this call will return an error
   *    NOT_FOUND will be returned
   * If a federation exist, but has not ever been configured for group mapping
   *   the call FAILED_PRECONDITION will be returned.
   */
  get(
    request: GetGroupMappingRequest,
    callback: (
      error: ServiceError | null,
      response: GetGroupMappingResponse
    ) => void
  ): ClientUnaryCall;
  get(
    request: GetGroupMappingRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetGroupMappingResponse
    ) => void
  ): ClientUnaryCall;
  get(
    request: GetGroupMappingRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetGroupMappingResponse
    ) => void
  ): ClientUnaryCall;
  /**
   * Adds a group mapping for a federation
   * If mapping already exist, ALREADY_EXISTS will be returned
   */
  create(
    request: CreateGroupMappingRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateGroupMappingRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateGroupMappingRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Updates an existing group mapping for a federation
   * Errors:
   * - if federation is not found
   * In case of any error, no changes are applied to existing group mapping
   *
   * This call is idempotent. The following actions do nothing:
   * - enabling when already enabled
   * - disabling when disabled
   * Such parts of request will be ignored. Others will be applied.
   */
  update(
    request: UpdateGroupMappingRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateGroupMappingRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateGroupMappingRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Deletes a group mapping. This will remove all the mapping items
   * cascade.
   */
  delete(
    request: DeleteGroupMappingRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteGroupMappingRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteGroupMappingRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Returns all the group mappings items
   *
   * Filtering is only supported by external_group_id or internal_group_id
   */
  listItems(
    request: ListGroupMappingItemsRequest,
    callback: (
      error: ServiceError | null,
      response: ListGroupMappingItemsResponse
    ) => void
  ): ClientUnaryCall;
  listItems(
    request: ListGroupMappingItemsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListGroupMappingItemsResponse
    ) => void
  ): ClientUnaryCall;
  listItems(
    request: ListGroupMappingItemsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListGroupMappingItemsResponse
    ) => void
  ): ClientUnaryCall;
  /**
   * Updates group mapping items for a specified federation
   * Errors:
   * - if federation is not found
   * - if internal group in the mapping added does not exist
   * In case of any error, no changes are applied to existing group mapping
   *
   * This call is idempotent. The following actions do nothing:
   * - adding group mapping items that are already present
   * - removing group mapping items that are not present
   * Such parts of request will be ignored. Others will be applied.
   */
  updateItems(
    request: UpdateGroupMappingItemsRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateItems(
    request: UpdateGroupMappingItemsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateItems(
    request: UpdateGroupMappingItemsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const GroupMappingServiceClient = makeGenericClientConstructor(
  GroupMappingServiceService,
  "yandex.cloud.organizationmanager.v1.GroupMappingService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): GroupMappingServiceClient;
  service: typeof GroupMappingServiceService;
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
