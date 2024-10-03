/* eslint-disable */
import { messageTypeRegistry } from "../../../../../../typeRegistry";
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
import { ExpirationConfig } from "../../../../../../yandex/cloud/ai/common/common";
import { FieldMask } from "../../../../../../google/protobuf/field_mask";
import { User } from "../../../../../../yandex/cloud/ai/assistants/v1/users/user";

export const protobufPackage = "yandex.cloud.ai.assistants.v1.users";

export interface CreateUserRequest {
  $type: "yandex.cloud.ai.assistants.v1.users.CreateUserRequest";
  folderId: string;
  name: string;
  description: string;
  source: string;
  expirationConfig?: ExpirationConfig;
  labels: { [key: string]: string };
}

export interface CreateUserRequest_LabelsEntry {
  $type: "yandex.cloud.ai.assistants.v1.users.CreateUserRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface GetUserRequest {
  $type: "yandex.cloud.ai.assistants.v1.users.GetUserRequest";
  userId: string;
}

export interface UpdateUserRequest {
  $type: "yandex.cloud.ai.assistants.v1.users.UpdateUserRequest";
  userId: string;
  updateMask?: FieldMask;
  name: string;
  description: string;
  expirationConfig?: ExpirationConfig;
  labels: { [key: string]: string };
}

export interface UpdateUserRequest_LabelsEntry {
  $type: "yandex.cloud.ai.assistants.v1.users.UpdateUserRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface DeleteUserRequest {
  $type: "yandex.cloud.ai.assistants.v1.users.DeleteUserRequest";
  userId: string;
}

export interface DeleteUserResponse {
  $type: "yandex.cloud.ai.assistants.v1.users.DeleteUserResponse";
}

export interface ListUsersRequest {
  $type: "yandex.cloud.ai.assistants.v1.users.ListUsersRequest";
  folderId: string;
  pageSize: number;
  pageToken: string;
}

export interface ListUsersResponse {
  $type: "yandex.cloud.ai.assistants.v1.users.ListUsersResponse";
  users: User[];
  nextPageToken: string;
}

const baseCreateUserRequest: object = {
  $type: "yandex.cloud.ai.assistants.v1.users.CreateUserRequest",
  folderId: "",
  name: "",
  description: "",
  source: "",
};

export const CreateUserRequest = {
  $type: "yandex.cloud.ai.assistants.v1.users.CreateUserRequest" as const,

  encode(
    message: CreateUserRequest,
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
    if (message.source !== "") {
      writer.uint32(34).string(message.source);
    }
    if (message.expirationConfig !== undefined) {
      ExpirationConfig.encode(
        message.expirationConfig,
        writer.uint32(42).fork()
      ).ldelim();
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateUserRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.ai.assistants.v1.users.CreateUserRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateUserRequest } as CreateUserRequest;
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
          message.source = reader.string();
          break;
        case 5:
          message.expirationConfig = ExpirationConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          const entry6 = CreateUserRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateUserRequest {
    const message = { ...baseCreateUserRequest } as CreateUserRequest;
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
    message.source =
      object.source !== undefined && object.source !== null
        ? String(object.source)
        : "";
    message.expirationConfig =
      object.expirationConfig !== undefined && object.expirationConfig !== null
        ? ExpirationConfig.fromJSON(object.expirationConfig)
        : undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: CreateUserRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.source !== undefined && (obj.source = message.source);
    message.expirationConfig !== undefined &&
      (obj.expirationConfig = message.expirationConfig
        ? ExpirationConfig.toJSON(message.expirationConfig)
        : undefined);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateUserRequest>, I>>(
    object: I
  ): CreateUserRequest {
    const message = { ...baseCreateUserRequest } as CreateUserRequest;
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.source = object.source ?? "";
    message.expirationConfig =
      object.expirationConfig !== undefined && object.expirationConfig !== null
        ? ExpirationConfig.fromPartial(object.expirationConfig)
        : undefined;
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

messageTypeRegistry.set(CreateUserRequest.$type, CreateUserRequest);

const baseCreateUserRequest_LabelsEntry: object = {
  $type: "yandex.cloud.ai.assistants.v1.users.CreateUserRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateUserRequest_LabelsEntry = {
  $type:
    "yandex.cloud.ai.assistants.v1.users.CreateUserRequest.LabelsEntry" as const,

  encode(
    message: CreateUserRequest_LabelsEntry,
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
  ): CreateUserRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateUserRequest_LabelsEntry,
    } as CreateUserRequest_LabelsEntry;
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

  fromJSON(object: any): CreateUserRequest_LabelsEntry {
    const message = {
      ...baseCreateUserRequest_LabelsEntry,
    } as CreateUserRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateUserRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateUserRequest_LabelsEntry>, I>>(
    object: I
  ): CreateUserRequest_LabelsEntry {
    const message = {
      ...baseCreateUserRequest_LabelsEntry,
    } as CreateUserRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateUserRequest_LabelsEntry.$type,
  CreateUserRequest_LabelsEntry
);

const baseGetUserRequest: object = {
  $type: "yandex.cloud.ai.assistants.v1.users.GetUserRequest",
  userId: "",
};

export const GetUserRequest = {
  $type: "yandex.cloud.ai.assistants.v1.users.GetUserRequest" as const,

  encode(
    message: GetUserRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetUserRequest } as GetUserRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUserRequest {
    const message = { ...baseGetUserRequest } as GetUserRequest;
    message.userId =
      object.userId !== undefined && object.userId !== null
        ? String(object.userId)
        : "";
    return message;
  },

  toJSON(message: GetUserRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetUserRequest>, I>>(
    object: I
  ): GetUserRequest {
    const message = { ...baseGetUserRequest } as GetUserRequest;
    message.userId = object.userId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetUserRequest.$type, GetUserRequest);

const baseUpdateUserRequest: object = {
  $type: "yandex.cloud.ai.assistants.v1.users.UpdateUserRequest",
  userId: "",
  name: "",
  description: "",
};

export const UpdateUserRequest = {
  $type: "yandex.cloud.ai.assistants.v1.users.UpdateUserRequest" as const,

  encode(
    message: UpdateUserRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
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
    if (message.expirationConfig !== undefined) {
      ExpirationConfig.encode(
        message.expirationConfig,
        writer.uint32(42).fork()
      ).ldelim();
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateUserRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.ai.assistants.v1.users.UpdateUserRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateUserRequest } as UpdateUserRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
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
          message.expirationConfig = ExpirationConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          const entry6 = UpdateUserRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateUserRequest {
    const message = { ...baseUpdateUserRequest } as UpdateUserRequest;
    message.userId =
      object.userId !== undefined && object.userId !== null
        ? String(object.userId)
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
    message.expirationConfig =
      object.expirationConfig !== undefined && object.expirationConfig !== null
        ? ExpirationConfig.fromJSON(object.expirationConfig)
        : undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: UpdateUserRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.expirationConfig !== undefined &&
      (obj.expirationConfig = message.expirationConfig
        ? ExpirationConfig.toJSON(message.expirationConfig)
        : undefined);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateUserRequest>, I>>(
    object: I
  ): UpdateUserRequest {
    const message = { ...baseUpdateUserRequest } as UpdateUserRequest;
    message.userId = object.userId ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.expirationConfig =
      object.expirationConfig !== undefined && object.expirationConfig !== null
        ? ExpirationConfig.fromPartial(object.expirationConfig)
        : undefined;
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

messageTypeRegistry.set(UpdateUserRequest.$type, UpdateUserRequest);

const baseUpdateUserRequest_LabelsEntry: object = {
  $type: "yandex.cloud.ai.assistants.v1.users.UpdateUserRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateUserRequest_LabelsEntry = {
  $type:
    "yandex.cloud.ai.assistants.v1.users.UpdateUserRequest.LabelsEntry" as const,

  encode(
    message: UpdateUserRequest_LabelsEntry,
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
  ): UpdateUserRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateUserRequest_LabelsEntry,
    } as UpdateUserRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateUserRequest_LabelsEntry {
    const message = {
      ...baseUpdateUserRequest_LabelsEntry,
    } as UpdateUserRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateUserRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateUserRequest_LabelsEntry>, I>>(
    object: I
  ): UpdateUserRequest_LabelsEntry {
    const message = {
      ...baseUpdateUserRequest_LabelsEntry,
    } as UpdateUserRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateUserRequest_LabelsEntry.$type,
  UpdateUserRequest_LabelsEntry
);

const baseDeleteUserRequest: object = {
  $type: "yandex.cloud.ai.assistants.v1.users.DeleteUserRequest",
  userId: "",
};

export const DeleteUserRequest = {
  $type: "yandex.cloud.ai.assistants.v1.users.DeleteUserRequest" as const,

  encode(
    message: DeleteUserRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteUserRequest } as DeleteUserRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteUserRequest {
    const message = { ...baseDeleteUserRequest } as DeleteUserRequest;
    message.userId =
      object.userId !== undefined && object.userId !== null
        ? String(object.userId)
        : "";
    return message;
  },

  toJSON(message: DeleteUserRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteUserRequest>, I>>(
    object: I
  ): DeleteUserRequest {
    const message = { ...baseDeleteUserRequest } as DeleteUserRequest;
    message.userId = object.userId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteUserRequest.$type, DeleteUserRequest);

const baseDeleteUserResponse: object = {
  $type: "yandex.cloud.ai.assistants.v1.users.DeleteUserResponse",
};

export const DeleteUserResponse = {
  $type: "yandex.cloud.ai.assistants.v1.users.DeleteUserResponse" as const,

  encode(
    _: DeleteUserResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteUserResponse } as DeleteUserResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): DeleteUserResponse {
    const message = { ...baseDeleteUserResponse } as DeleteUserResponse;
    return message;
  },

  toJSON(_: DeleteUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteUserResponse>, I>>(
    _: I
  ): DeleteUserResponse {
    const message = { ...baseDeleteUserResponse } as DeleteUserResponse;
    return message;
  },
};

messageTypeRegistry.set(DeleteUserResponse.$type, DeleteUserResponse);

const baseListUsersRequest: object = {
  $type: "yandex.cloud.ai.assistants.v1.users.ListUsersRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListUsersRequest = {
  $type: "yandex.cloud.ai.assistants.v1.users.ListUsersRequest" as const,

  encode(
    message: ListUsersRequest,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUsersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListUsersRequest } as ListUsersRequest;
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

  fromJSON(object: any): ListUsersRequest {
    const message = { ...baseListUsersRequest } as ListUsersRequest;
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

  toJSON(message: ListUsersRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListUsersRequest>, I>>(
    object: I
  ): ListUsersRequest {
    const message = { ...baseListUsersRequest } as ListUsersRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListUsersRequest.$type, ListUsersRequest);

const baseListUsersResponse: object = {
  $type: "yandex.cloud.ai.assistants.v1.users.ListUsersResponse",
  nextPageToken: "",
};

export const ListUsersResponse = {
  $type: "yandex.cloud.ai.assistants.v1.users.ListUsersResponse" as const,

  encode(
    message: ListUsersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUsersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListUsersResponse } as ListUsersResponse;
    message.users = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.users.push(User.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListUsersResponse {
    const message = { ...baseListUsersResponse } as ListUsersResponse;
    message.users = (object.users ?? []).map((e: any) => User.fromJSON(e));
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListUsersResponse): unknown {
    const obj: any = {};
    if (message.users) {
      obj.users = message.users.map((e) => (e ? User.toJSON(e) : undefined));
    } else {
      obj.users = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListUsersResponse>, I>>(
    object: I
  ): ListUsersResponse {
    const message = { ...baseListUsersResponse } as ListUsersResponse;
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListUsersResponse.$type, ListUsersResponse);

export const UserServiceService = {
  create: {
    path: "/yandex.cloud.ai.assistants.v1.users.UserService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateUserRequest) =>
      Buffer.from(CreateUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateUserRequest.decode(value),
    responseSerialize: (value: User) =>
      Buffer.from(User.encode(value).finish()),
    responseDeserialize: (value: Buffer) => User.decode(value),
  },
  get: {
    path: "/yandex.cloud.ai.assistants.v1.users.UserService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetUserRequest) =>
      Buffer.from(GetUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetUserRequest.decode(value),
    responseSerialize: (value: User) =>
      Buffer.from(User.encode(value).finish()),
    responseDeserialize: (value: Buffer) => User.decode(value),
  },
  update: {
    path: "/yandex.cloud.ai.assistants.v1.users.UserService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateUserRequest) =>
      Buffer.from(UpdateUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateUserRequest.decode(value),
    responseSerialize: (value: User) =>
      Buffer.from(User.encode(value).finish()),
    responseDeserialize: (value: Buffer) => User.decode(value),
  },
  delete: {
    path: "/yandex.cloud.ai.assistants.v1.users.UserService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteUserRequest) =>
      Buffer.from(DeleteUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteUserRequest.decode(value),
    responseSerialize: (value: DeleteUserResponse) =>
      Buffer.from(DeleteUserResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DeleteUserResponse.decode(value),
  },
  list: {
    path: "/yandex.cloud.ai.assistants.v1.users.UserService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListUsersRequest) =>
      Buffer.from(ListUsersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListUsersRequest.decode(value),
    responseSerialize: (value: ListUsersResponse) =>
      Buffer.from(ListUsersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListUsersResponse.decode(value),
  },
} as const;

export interface UserServiceServer extends UntypedServiceImplementation {
  create: handleUnaryCall<CreateUserRequest, User>;
  get: handleUnaryCall<GetUserRequest, User>;
  update: handleUnaryCall<UpdateUserRequest, User>;
  delete: handleUnaryCall<DeleteUserRequest, DeleteUserResponse>;
  list: handleUnaryCall<ListUsersRequest, ListUsersResponse>;
}

export interface UserServiceClient extends Client {
  create(
    request: CreateUserRequest,
    callback: (error: ServiceError | null, response: User) => void
  ): ClientUnaryCall;
  create(
    request: CreateUserRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: User) => void
  ): ClientUnaryCall;
  create(
    request: CreateUserRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: User) => void
  ): ClientUnaryCall;
  get(
    request: GetUserRequest,
    callback: (error: ServiceError | null, response: User) => void
  ): ClientUnaryCall;
  get(
    request: GetUserRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: User) => void
  ): ClientUnaryCall;
  get(
    request: GetUserRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: User) => void
  ): ClientUnaryCall;
  update(
    request: UpdateUserRequest,
    callback: (error: ServiceError | null, response: User) => void
  ): ClientUnaryCall;
  update(
    request: UpdateUserRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: User) => void
  ): ClientUnaryCall;
  update(
    request: UpdateUserRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: User) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteUserRequest,
    callback: (error: ServiceError | null, response: DeleteUserResponse) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteUserRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: DeleteUserResponse) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteUserRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: DeleteUserResponse) => void
  ): ClientUnaryCall;
  list(
    request: ListUsersRequest,
    callback: (error: ServiceError | null, response: ListUsersResponse) => void
  ): ClientUnaryCall;
  list(
    request: ListUsersRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListUsersResponse) => void
  ): ClientUnaryCall;
  list(
    request: ListUsersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListUsersResponse) => void
  ): ClientUnaryCall;
}

export const UserServiceClient = makeGenericClientConstructor(
  UserServiceService,
  "yandex.cloud.ai.assistants.v1.users.UserService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): UserServiceClient;
  service: typeof UserServiceService;
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
