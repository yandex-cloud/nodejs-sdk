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
import {
  UserSpec,
  Permission,
  User,
} from "../../../../../yandex/cloud/mdb/mysql/v1alpha/user";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Operation } from "../../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.mdb.mysql.v1alpha";

export interface GetUserRequest {
  $type: "yandex.cloud.mdb.mysql.v1alpha.GetUserRequest";
  /** ID of the MySQL cluster. */
  clusterId: string;
  /** Name of the user. */
  userName: string;
}

export interface ListUsersRequest {
  $type: "yandex.cloud.mdb.mysql.v1alpha.ListUsersRequest";
  /**
   * ID of the cluster to list MySQL users in.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListUsersResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the [ListUsersResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
}

export interface ListUsersResponse {
  $type: "yandex.cloud.mdb.mysql.v1alpha.ListUsersResponse";
  /** Requested list of MySQL users. */
  users: User[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListUsersRequest.page_size], use the [next_page_token] as the value
   * for the [ListUsersRequest.page_token] parameter in the next list request. Each subsequent
   * list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateUserRequest {
  $type: "yandex.cloud.mdb.mysql.v1alpha.CreateUserRequest";
  /**
   * ID of the MySQL cluster to create a user for.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Properties of the user to be created. */
  userSpec?: UserSpec;
}

export interface CreateUserMetadata {
  $type: "yandex.cloud.mdb.mysql.v1alpha.CreateUserMetadata";
  /** ID of the MySQL cluster the user is being created for. */
  clusterId: string;
  /** Name of the user that is being created. */
  userName: string;
}

export interface UpdateUserRequest {
  $type: "yandex.cloud.mdb.mysql.v1alpha.UpdateUserRequest";
  /**
   * ID of the MySQL cluster the user belongs to.
   * To get the cluster ID use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the user to be updated.
   * To get the name of the user use a [UserService.List] request.
   */
  userName: string;
  /** Field mask that specifies which fields of the MySQL user should be updated. */
  updateMask?: FieldMask;
  /** New password for the user. */
  password: string;
  /** New set of permissions for the user. */
  permissions: Permission[];
}

export interface UpdateUserMetadata {
  $type: "yandex.cloud.mdb.mysql.v1alpha.UpdateUserMetadata";
  /** ID of the MySQL cluster the user belongs to. */
  clusterId: string;
  /** Name of the user that is being updated. */
  userName: string;
}

export interface DeleteUserRequest {
  $type: "yandex.cloud.mdb.mysql.v1alpha.DeleteUserRequest";
  /**
   * ID of the MySQL cluster the user belongs to.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the user to delete.
   * To get the name of the user, use a [UserService.List] request.
   */
  userName: string;
}

export interface DeleteUserMetadata {
  $type: "yandex.cloud.mdb.mysql.v1alpha.DeleteUserMetadata";
  /** ID of the MySQL cluster the user belongs to. */
  clusterId: string;
  /** Name of the user that is being deleted. */
  userName: string;
}

export interface GrantUserPermissionRequest {
  $type: "yandex.cloud.mdb.mysql.v1alpha.GrantUserPermissionRequest";
  /**
   * ID of the MySQL cluster the user belongs to.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the user to grant the permission to.
   * To get the name of the user, use a [UserService.List] request.
   */
  userName: string;
  /** Permission that should be granted to the specified user. */
  permission?: Permission;
}

export interface GrantUserPermissionMetadata {
  $type: "yandex.cloud.mdb.mysql.v1alpha.GrantUserPermissionMetadata";
  /**
   * ID of the MySQL cluster the user belongs to.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /** Name of the user that is being granted a permission. */
  userName: string;
}

export interface RevokeUserPermissionRequest {
  $type: "yandex.cloud.mdb.mysql.v1alpha.RevokeUserPermissionRequest";
  /**
   * ID of the MySQL cluster the user belongs to.
   * To get the cluster ID, use a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the user to revoke a permission from.
   * To get the name of the user, use a [UserService.List] request.
   */
  userName: string;
  /** Name of the database that the user should lose access to. */
  databaseName: string;
}

export interface RevokeUserPermissionMetadata {
  $type: "yandex.cloud.mdb.mysql.v1alpha.RevokeUserPermissionMetadata";
  /** ID of the MySQL cluster the user belongs to. */
  clusterId: string;
  /** Name of the user whose permission is being revoked. */
  userName: string;
}

const baseGetUserRequest: object = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.GetUserRequest",
  clusterId: "",
  userName: "",
};

export const GetUserRequest = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.GetUserRequest" as const,

  encode(
    message: GetUserRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
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
          message.clusterId = reader.string();
          break;
        case 2:
          message.userName = reader.string();
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
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.userName =
      object.userName !== undefined && object.userName !== null
        ? String(object.userName)
        : "";
    return message;
  },

  toJSON(message: GetUserRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.userName !== undefined && (obj.userName = message.userName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetUserRequest>, I>>(
    object: I
  ): GetUserRequest {
    const message = { ...baseGetUserRequest } as GetUserRequest;
    message.clusterId = object.clusterId ?? "";
    message.userName = object.userName ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetUserRequest.$type, GetUserRequest);

const baseListUsersRequest: object = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.ListUsersRequest",
  clusterId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListUsersRequest = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.ListUsersRequest" as const,

  encode(
    message: ListUsersRequest,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUsersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListUsersRequest } as ListUsersRequest;
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

  fromJSON(object: any): ListUsersRequest {
    const message = { ...baseListUsersRequest } as ListUsersRequest;
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

  toJSON(message: ListUsersRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListUsersRequest>, I>>(
    object: I
  ): ListUsersRequest {
    const message = { ...baseListUsersRequest } as ListUsersRequest;
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListUsersRequest.$type, ListUsersRequest);

const baseListUsersResponse: object = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.ListUsersResponse",
  nextPageToken: "",
};

export const ListUsersResponse = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.ListUsersResponse" as const,

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

const baseCreateUserRequest: object = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.CreateUserRequest",
  clusterId: "",
};

export const CreateUserRequest = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.CreateUserRequest" as const,

  encode(
    message: CreateUserRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.userSpec !== undefined) {
      UserSpec.encode(message.userSpec, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateUserRequest } as CreateUserRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.userSpec = UserSpec.decode(reader, reader.uint32());
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
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.userSpec =
      object.userSpec !== undefined && object.userSpec !== null
        ? UserSpec.fromJSON(object.userSpec)
        : undefined;
    return message;
  },

  toJSON(message: CreateUserRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.userSpec !== undefined &&
      (obj.userSpec = message.userSpec
        ? UserSpec.toJSON(message.userSpec)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateUserRequest>, I>>(
    object: I
  ): CreateUserRequest {
    const message = { ...baseCreateUserRequest } as CreateUserRequest;
    message.clusterId = object.clusterId ?? "";
    message.userSpec =
      object.userSpec !== undefined && object.userSpec !== null
        ? UserSpec.fromPartial(object.userSpec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateUserRequest.$type, CreateUserRequest);

const baseCreateUserMetadata: object = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.CreateUserMetadata",
  clusterId: "",
  userName: "",
};

export const CreateUserMetadata = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.CreateUserMetadata" as const,

  encode(
    message: CreateUserMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateUserMetadata } as CreateUserMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.userName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateUserMetadata {
    const message = { ...baseCreateUserMetadata } as CreateUserMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.userName =
      object.userName !== undefined && object.userName !== null
        ? String(object.userName)
        : "";
    return message;
  },

  toJSON(message: CreateUserMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.userName !== undefined && (obj.userName = message.userName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateUserMetadata>, I>>(
    object: I
  ): CreateUserMetadata {
    const message = { ...baseCreateUserMetadata } as CreateUserMetadata;
    message.clusterId = object.clusterId ?? "";
    message.userName = object.userName ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateUserMetadata.$type, CreateUserMetadata);

const baseUpdateUserRequest: object = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.UpdateUserRequest",
  clusterId: "",
  userName: "",
  password: "",
};

export const UpdateUserRequest = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.UpdateUserRequest" as const,

  encode(
    message: UpdateUserRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
    }
    if (message.password !== "") {
      writer.uint32(34).string(message.password);
    }
    for (const v of message.permissions) {
      Permission.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateUserRequest } as UpdateUserRequest;
    message.permissions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.userName = reader.string();
          break;
        case 3:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        case 4:
          message.password = reader.string();
          break;
        case 5:
          message.permissions.push(Permission.decode(reader, reader.uint32()));
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
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.userName =
      object.userName !== undefined && object.userName !== null
        ? String(object.userName)
        : "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
        : undefined;
    message.password =
      object.password !== undefined && object.password !== null
        ? String(object.password)
        : "";
    message.permissions = (object.permissions ?? []).map((e: any) =>
      Permission.fromJSON(e)
    );
    return message;
  },

  toJSON(message: UpdateUserRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.userName !== undefined && (obj.userName = message.userName);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.password !== undefined && (obj.password = message.password);
    if (message.permissions) {
      obj.permissions = message.permissions.map((e) =>
        e ? Permission.toJSON(e) : undefined
      );
    } else {
      obj.permissions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateUserRequest>, I>>(
    object: I
  ): UpdateUserRequest {
    const message = { ...baseUpdateUserRequest } as UpdateUserRequest;
    message.clusterId = object.clusterId ?? "";
    message.userName = object.userName ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.password = object.password ?? "";
    message.permissions =
      object.permissions?.map((e) => Permission.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(UpdateUserRequest.$type, UpdateUserRequest);

const baseUpdateUserMetadata: object = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.UpdateUserMetadata",
  clusterId: "",
  userName: "",
};

export const UpdateUserMetadata = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.UpdateUserMetadata" as const,

  encode(
    message: UpdateUserMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateUserMetadata } as UpdateUserMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.userName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateUserMetadata {
    const message = { ...baseUpdateUserMetadata } as UpdateUserMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.userName =
      object.userName !== undefined && object.userName !== null
        ? String(object.userName)
        : "";
    return message;
  },

  toJSON(message: UpdateUserMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.userName !== undefined && (obj.userName = message.userName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateUserMetadata>, I>>(
    object: I
  ): UpdateUserMetadata {
    const message = { ...baseUpdateUserMetadata } as UpdateUserMetadata;
    message.clusterId = object.clusterId ?? "";
    message.userName = object.userName ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateUserMetadata.$type, UpdateUserMetadata);

const baseDeleteUserRequest: object = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.DeleteUserRequest",
  clusterId: "",
  userName: "",
};

export const DeleteUserRequest = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.DeleteUserRequest" as const,

  encode(
    message: DeleteUserRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
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
          message.clusterId = reader.string();
          break;
        case 2:
          message.userName = reader.string();
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
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.userName =
      object.userName !== undefined && object.userName !== null
        ? String(object.userName)
        : "";
    return message;
  },

  toJSON(message: DeleteUserRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.userName !== undefined && (obj.userName = message.userName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteUserRequest>, I>>(
    object: I
  ): DeleteUserRequest {
    const message = { ...baseDeleteUserRequest } as DeleteUserRequest;
    message.clusterId = object.clusterId ?? "";
    message.userName = object.userName ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteUserRequest.$type, DeleteUserRequest);

const baseDeleteUserMetadata: object = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.DeleteUserMetadata",
  clusterId: "",
  userName: "",
};

export const DeleteUserMetadata = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.DeleteUserMetadata" as const,

  encode(
    message: DeleteUserMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteUserMetadata } as DeleteUserMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.userName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteUserMetadata {
    const message = { ...baseDeleteUserMetadata } as DeleteUserMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.userName =
      object.userName !== undefined && object.userName !== null
        ? String(object.userName)
        : "";
    return message;
  },

  toJSON(message: DeleteUserMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.userName !== undefined && (obj.userName = message.userName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteUserMetadata>, I>>(
    object: I
  ): DeleteUserMetadata {
    const message = { ...baseDeleteUserMetadata } as DeleteUserMetadata;
    message.clusterId = object.clusterId ?? "";
    message.userName = object.userName ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteUserMetadata.$type, DeleteUserMetadata);

const baseGrantUserPermissionRequest: object = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.GrantUserPermissionRequest",
  clusterId: "",
  userName: "",
};

export const GrantUserPermissionRequest = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.GrantUserPermissionRequest" as const,

  encode(
    message: GrantUserPermissionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    if (message.permission !== undefined) {
      Permission.encode(message.permission, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GrantUserPermissionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGrantUserPermissionRequest,
    } as GrantUserPermissionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.userName = reader.string();
          break;
        case 3:
          message.permission = Permission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GrantUserPermissionRequest {
    const message = {
      ...baseGrantUserPermissionRequest,
    } as GrantUserPermissionRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.userName =
      object.userName !== undefined && object.userName !== null
        ? String(object.userName)
        : "";
    message.permission =
      object.permission !== undefined && object.permission !== null
        ? Permission.fromJSON(object.permission)
        : undefined;
    return message;
  },

  toJSON(message: GrantUserPermissionRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.userName !== undefined && (obj.userName = message.userName);
    message.permission !== undefined &&
      (obj.permission = message.permission
        ? Permission.toJSON(message.permission)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GrantUserPermissionRequest>, I>>(
    object: I
  ): GrantUserPermissionRequest {
    const message = {
      ...baseGrantUserPermissionRequest,
    } as GrantUserPermissionRequest;
    message.clusterId = object.clusterId ?? "";
    message.userName = object.userName ?? "";
    message.permission =
      object.permission !== undefined && object.permission !== null
        ? Permission.fromPartial(object.permission)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  GrantUserPermissionRequest.$type,
  GrantUserPermissionRequest
);

const baseGrantUserPermissionMetadata: object = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.GrantUserPermissionMetadata",
  clusterId: "",
  userName: "",
};

export const GrantUserPermissionMetadata = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.GrantUserPermissionMetadata" as const,

  encode(
    message: GrantUserPermissionMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GrantUserPermissionMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGrantUserPermissionMetadata,
    } as GrantUserPermissionMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.userName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GrantUserPermissionMetadata {
    const message = {
      ...baseGrantUserPermissionMetadata,
    } as GrantUserPermissionMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.userName =
      object.userName !== undefined && object.userName !== null
        ? String(object.userName)
        : "";
    return message;
  },

  toJSON(message: GrantUserPermissionMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.userName !== undefined && (obj.userName = message.userName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GrantUserPermissionMetadata>, I>>(
    object: I
  ): GrantUserPermissionMetadata {
    const message = {
      ...baseGrantUserPermissionMetadata,
    } as GrantUserPermissionMetadata;
    message.clusterId = object.clusterId ?? "";
    message.userName = object.userName ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  GrantUserPermissionMetadata.$type,
  GrantUserPermissionMetadata
);

const baseRevokeUserPermissionRequest: object = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.RevokeUserPermissionRequest",
  clusterId: "",
  userName: "",
  databaseName: "",
};

export const RevokeUserPermissionRequest = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.RevokeUserPermissionRequest" as const,

  encode(
    message: RevokeUserPermissionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    if (message.databaseName !== "") {
      writer.uint32(26).string(message.databaseName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RevokeUserPermissionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRevokeUserPermissionRequest,
    } as RevokeUserPermissionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.userName = reader.string();
          break;
        case 3:
          message.databaseName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RevokeUserPermissionRequest {
    const message = {
      ...baseRevokeUserPermissionRequest,
    } as RevokeUserPermissionRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.userName =
      object.userName !== undefined && object.userName !== null
        ? String(object.userName)
        : "";
    message.databaseName =
      object.databaseName !== undefined && object.databaseName !== null
        ? String(object.databaseName)
        : "";
    return message;
  },

  toJSON(message: RevokeUserPermissionRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.userName !== undefined && (obj.userName = message.userName);
    message.databaseName !== undefined &&
      (obj.databaseName = message.databaseName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RevokeUserPermissionRequest>, I>>(
    object: I
  ): RevokeUserPermissionRequest {
    const message = {
      ...baseRevokeUserPermissionRequest,
    } as RevokeUserPermissionRequest;
    message.clusterId = object.clusterId ?? "";
    message.userName = object.userName ?? "";
    message.databaseName = object.databaseName ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  RevokeUserPermissionRequest.$type,
  RevokeUserPermissionRequest
);

const baseRevokeUserPermissionMetadata: object = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.RevokeUserPermissionMetadata",
  clusterId: "",
  userName: "",
};

export const RevokeUserPermissionMetadata = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.RevokeUserPermissionMetadata" as const,

  encode(
    message: RevokeUserPermissionMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RevokeUserPermissionMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRevokeUserPermissionMetadata,
    } as RevokeUserPermissionMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.userName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RevokeUserPermissionMetadata {
    const message = {
      ...baseRevokeUserPermissionMetadata,
    } as RevokeUserPermissionMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.userName =
      object.userName !== undefined && object.userName !== null
        ? String(object.userName)
        : "";
    return message;
  },

  toJSON(message: RevokeUserPermissionMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.userName !== undefined && (obj.userName = message.userName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RevokeUserPermissionMetadata>, I>>(
    object: I
  ): RevokeUserPermissionMetadata {
    const message = {
      ...baseRevokeUserPermissionMetadata,
    } as RevokeUserPermissionMetadata;
    message.clusterId = object.clusterId ?? "";
    message.userName = object.userName ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  RevokeUserPermissionMetadata.$type,
  RevokeUserPermissionMetadata
);

/** A set of methods for managing MySQL users. */
export const UserServiceService = {
  /**
   * Returns the specified MySQL user.
   *
   * To get the list of available MySQL users, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.mdb.mysql.v1alpha.UserService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetUserRequest) =>
      Buffer.from(GetUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetUserRequest.decode(value),
    responseSerialize: (value: User) =>
      Buffer.from(User.encode(value).finish()),
    responseDeserialize: (value: Buffer) => User.decode(value),
  },
  /** Retrieves a list of MySQL users in the specified cluster. */
  list: {
    path: "/yandex.cloud.mdb.mysql.v1alpha.UserService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListUsersRequest) =>
      Buffer.from(ListUsersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListUsersRequest.decode(value),
    responseSerialize: (value: ListUsersResponse) =>
      Buffer.from(ListUsersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListUsersResponse.decode(value),
  },
  /** Creates a MySQL user in the specified cluster. */
  create: {
    path: "/yandex.cloud.mdb.mysql.v1alpha.UserService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateUserRequest) =>
      Buffer.from(CreateUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateUserRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Modifies the specified MySQL user. */
  update: {
    path: "/yandex.cloud.mdb.mysql.v1alpha.UserService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateUserRequest) =>
      Buffer.from(UpdateUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateUserRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified MySQL user. */
  delete: {
    path: "/yandex.cloud.mdb.mysql.v1alpha.UserService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteUserRequest) =>
      Buffer.from(DeleteUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteUserRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Grants a permission to the specified MySQL user. */
  grantPermission: {
    path: "/yandex.cloud.mdb.mysql.v1alpha.UserService/GrantPermission",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GrantUserPermissionRequest) =>
      Buffer.from(GrantUserPermissionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GrantUserPermissionRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Revokes a permission from the specified MySQL user. */
  revokePermission: {
    path: "/yandex.cloud.mdb.mysql.v1alpha.UserService/RevokePermission",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RevokeUserPermissionRequest) =>
      Buffer.from(RevokeUserPermissionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      RevokeUserPermissionRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface UserServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified MySQL user.
   *
   * To get the list of available MySQL users, make a [List] request.
   */
  get: handleUnaryCall<GetUserRequest, User>;
  /** Retrieves a list of MySQL users in the specified cluster. */
  list: handleUnaryCall<ListUsersRequest, ListUsersResponse>;
  /** Creates a MySQL user in the specified cluster. */
  create: handleUnaryCall<CreateUserRequest, Operation>;
  /** Modifies the specified MySQL user. */
  update: handleUnaryCall<UpdateUserRequest, Operation>;
  /** Deletes the specified MySQL user. */
  delete: handleUnaryCall<DeleteUserRequest, Operation>;
  /** Grants a permission to the specified MySQL user. */
  grantPermission: handleUnaryCall<GrantUserPermissionRequest, Operation>;
  /** Revokes a permission from the specified MySQL user. */
  revokePermission: handleUnaryCall<RevokeUserPermissionRequest, Operation>;
}

export interface UserServiceClient extends Client {
  /**
   * Returns the specified MySQL user.
   *
   * To get the list of available MySQL users, make a [List] request.
   */
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
  /** Retrieves a list of MySQL users in the specified cluster. */
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
  /** Creates a MySQL user in the specified cluster. */
  create(
    request: CreateUserRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateUserRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateUserRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Modifies the specified MySQL user. */
  update(
    request: UpdateUserRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateUserRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateUserRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified MySQL user. */
  delete(
    request: DeleteUserRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteUserRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteUserRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Grants a permission to the specified MySQL user. */
  grantPermission(
    request: GrantUserPermissionRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  grantPermission(
    request: GrantUserPermissionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  grantPermission(
    request: GrantUserPermissionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Revokes a permission from the specified MySQL user. */
  revokePermission(
    request: RevokeUserPermissionRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  revokePermission(
    request: RevokeUserPermissionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  revokePermission(
    request: RevokeUserPermissionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const UserServiceClient = makeGenericClientConstructor(
  UserServiceService,
  "yandex.cloud.mdb.mysql.v1alpha.UserService"
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
