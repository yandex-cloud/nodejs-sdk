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
  ConnectionLimits,
  AuthPlugin,
  Permission,
  User,
  GlobalPermission,
  globalPermissionFromJSON,
  authPluginFromJSON,
  globalPermissionToJSON,
  authPluginToJSON,
} from "../../../../../yandex/cloud/mdb/mysql/v1/user";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Operation } from "../../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.mdb.mysql.v1";

export interface GetUserRequest {
  $type: "yandex.cloud.mdb.mysql.v1.GetUserRequest";
  /**
   * ID of the cluster the user belongs to.
   *
   * To get this ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the user to return information about.
   *
   * To get this name, make a [UserService.List] request.
   */
  userName: string;
}

export interface ListUsersRequest {
  $type: "yandex.cloud.mdb.mysql.v1.ListUsersRequest";
  /**
   * ID of the cluster to list the users in.
   *
   * To get this ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * The maximum number of results per page to return.
   *
   * If the number of available results is larger than [page_size], the API returns a [ListUsersResponse.next_page_token] that can be used to get the next page of results in the subsequent [UserService.List] requests.
   */
  pageSize: number;
  /**
   * Page token that can be used to iterate through multiple pages of results.
   *
   * To get the next page of results, set [page_token] to the [ListUsersResponse.next_page_token] returned by the previous [UserService.List] request.
   */
  pageToken: string;
}

export interface ListUsersResponse {
  $type: "yandex.cloud.mdb.mysql.v1.ListUsersResponse";
  /** List of users. */
  users: User[];
  /**
   * The token that can be used to get the next page of results.
   *
   * If the number of results is larger than [ListUsersRequest.page_size], use the [next_page_token] as the value for the [ListUsersRequest.page_token] in the subsequent [UserService.List] request to iterate through multiple pages of results.
   *
   * Each of the subsequent [UserService.List] requests should use the [next_page_token] value returned by the previous request to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateUserRequest {
  $type: "yandex.cloud.mdb.mysql.v1.CreateUserRequest";
  /**
   * ID of the cluster to create the user in.
   *
   * To get this ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /** Configuration of the user. */
  userSpec?: UserSpec;
}

export interface CreateUserMetadata {
  $type: "yandex.cloud.mdb.mysql.v1.CreateUserMetadata";
  /** ID of the cluster the user is being created in. */
  clusterId: string;
  /** Name of the user that is being created. */
  userName: string;
}

export interface UpdateUserRequest {
  $type: "yandex.cloud.mdb.mysql.v1.UpdateUserRequest";
  /**
   * ID of the cluster to update the user in.
   *
   * To get this ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the user to update.
   *
   * To get this name, make a [UserService.List] request.
   */
  userName: string;
  /** Field mask that specifies which settings of the user should be updated. */
  updateMask?: FieldMask;
  /** New password for the user. */
  password: string;
  /** A new set of permissions that should be granted to the user. */
  permissions: Permission[];
  /** New set of global permissions to grant to the user. */
  globalPermissions: GlobalPermission[];
  /** Set of changed user connection limits. */
  connectionLimits?: ConnectionLimits;
  /** New user authentication plugin. */
  authenticationPlugin: AuthPlugin;
}

export interface UpdateUserMetadata {
  $type: "yandex.cloud.mdb.mysql.v1.UpdateUserMetadata";
  /** ID of the cluster the user is being updated in. */
  clusterId: string;
  /** Name of the user that is being updated. */
  userName: string;
}

export interface DeleteUserRequest {
  $type: "yandex.cloud.mdb.mysql.v1.DeleteUserRequest";
  /**
   * ID of the cluster to delete the user from.
   *
   * To get this ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the user to delete.
   *
   * To get this name, make a [UserService.List] request.
   */
  userName: string;
}

export interface DeleteUserMetadata {
  $type: "yandex.cloud.mdb.mysql.v1.DeleteUserMetadata";
  /** ID of the cluster the user is being deleted from. */
  clusterId: string;
  /** Name of the user that is being deleted. */
  userName: string;
}

export interface GrantUserPermissionRequest {
  $type: "yandex.cloud.mdb.mysql.v1.GrantUserPermissionRequest";
  /**
   * ID of the cluster to grant permission to the user in.
   *
   * To get this ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the user to grant permission to.
   *
   * To get this name, make a [UserService.List] request.
   */
  userName: string;
  /** Permission that should be granted to the specified user. */
  permission?: Permission;
}

export interface GrantUserPermissionMetadata {
  $type: "yandex.cloud.mdb.mysql.v1.GrantUserPermissionMetadata";
  /** ID of the cluster the user is being granted a permission in. */
  clusterId: string;
  /** Name of the user that is being granted a permission. */
  userName: string;
}

export interface RevokeUserPermissionRequest {
  $type: "yandex.cloud.mdb.mysql.v1.RevokeUserPermissionRequest";
  /**
   * ID of the cluster to revoke permission from the user in.
   *
   * To get this ID, make a [ClusterService.List] request.
   */
  clusterId: string;
  /**
   * Name of the user to revoke permission from.
   *
   * To get this name, make a [UserService.List] request.
   */
  userName: string;
  /** Permission that should be revoked from the user. */
  permission?: Permission;
}

export interface RevokeUserPermissionMetadata {
  $type: "yandex.cloud.mdb.mysql.v1.RevokeUserPermissionMetadata";
  /** ID of the cluster the user is being revoked a permission in. */
  clusterId: string;
  /** Name of the user whose permission is being revoked. */
  userName: string;
}

const baseGetUserRequest: object = {
  $type: "yandex.cloud.mdb.mysql.v1.GetUserRequest",
  clusterId: "",
  userName: "",
};

export const GetUserRequest = {
  $type: "yandex.cloud.mdb.mysql.v1.GetUserRequest" as const,

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
  $type: "yandex.cloud.mdb.mysql.v1.ListUsersRequest",
  clusterId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListUsersRequest = {
  $type: "yandex.cloud.mdb.mysql.v1.ListUsersRequest" as const,

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
  $type: "yandex.cloud.mdb.mysql.v1.ListUsersResponse",
  nextPageToken: "",
};

export const ListUsersResponse = {
  $type: "yandex.cloud.mdb.mysql.v1.ListUsersResponse" as const,

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
  $type: "yandex.cloud.mdb.mysql.v1.CreateUserRequest",
  clusterId: "",
};

export const CreateUserRequest = {
  $type: "yandex.cloud.mdb.mysql.v1.CreateUserRequest" as const,

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
  $type: "yandex.cloud.mdb.mysql.v1.CreateUserMetadata",
  clusterId: "",
  userName: "",
};

export const CreateUserMetadata = {
  $type: "yandex.cloud.mdb.mysql.v1.CreateUserMetadata" as const,

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
  $type: "yandex.cloud.mdb.mysql.v1.UpdateUserRequest",
  clusterId: "",
  userName: "",
  password: "",
  globalPermissions: 0,
  authenticationPlugin: 0,
};

export const UpdateUserRequest = {
  $type: "yandex.cloud.mdb.mysql.v1.UpdateUserRequest" as const,

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
    writer.uint32(50).fork();
    for (const v of message.globalPermissions) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.connectionLimits !== undefined) {
      ConnectionLimits.encode(
        message.connectionLimits,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.authenticationPlugin !== 0) {
      writer.uint32(64).int32(message.authenticationPlugin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateUserRequest } as UpdateUserRequest;
    message.permissions = [];
    message.globalPermissions = [];
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
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.globalPermissions.push(reader.int32() as any);
            }
          } else {
            message.globalPermissions.push(reader.int32() as any);
          }
          break;
        case 7:
          message.connectionLimits = ConnectionLimits.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.authenticationPlugin = reader.int32() as any;
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
    message.globalPermissions = (object.globalPermissions ?? []).map((e: any) =>
      globalPermissionFromJSON(e)
    );
    message.connectionLimits =
      object.connectionLimits !== undefined && object.connectionLimits !== null
        ? ConnectionLimits.fromJSON(object.connectionLimits)
        : undefined;
    message.authenticationPlugin =
      object.authenticationPlugin !== undefined &&
      object.authenticationPlugin !== null
        ? authPluginFromJSON(object.authenticationPlugin)
        : 0;
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
    if (message.globalPermissions) {
      obj.globalPermissions = message.globalPermissions.map((e) =>
        globalPermissionToJSON(e)
      );
    } else {
      obj.globalPermissions = [];
    }
    message.connectionLimits !== undefined &&
      (obj.connectionLimits = message.connectionLimits
        ? ConnectionLimits.toJSON(message.connectionLimits)
        : undefined);
    message.authenticationPlugin !== undefined &&
      (obj.authenticationPlugin = authPluginToJSON(
        message.authenticationPlugin
      ));
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
    message.globalPermissions = object.globalPermissions?.map((e) => e) || [];
    message.connectionLimits =
      object.connectionLimits !== undefined && object.connectionLimits !== null
        ? ConnectionLimits.fromPartial(object.connectionLimits)
        : undefined;
    message.authenticationPlugin = object.authenticationPlugin ?? 0;
    return message;
  },
};

messageTypeRegistry.set(UpdateUserRequest.$type, UpdateUserRequest);

const baseUpdateUserMetadata: object = {
  $type: "yandex.cloud.mdb.mysql.v1.UpdateUserMetadata",
  clusterId: "",
  userName: "",
};

export const UpdateUserMetadata = {
  $type: "yandex.cloud.mdb.mysql.v1.UpdateUserMetadata" as const,

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
  $type: "yandex.cloud.mdb.mysql.v1.DeleteUserRequest",
  clusterId: "",
  userName: "",
};

export const DeleteUserRequest = {
  $type: "yandex.cloud.mdb.mysql.v1.DeleteUserRequest" as const,

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
  $type: "yandex.cloud.mdb.mysql.v1.DeleteUserMetadata",
  clusterId: "",
  userName: "",
};

export const DeleteUserMetadata = {
  $type: "yandex.cloud.mdb.mysql.v1.DeleteUserMetadata" as const,

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
  $type: "yandex.cloud.mdb.mysql.v1.GrantUserPermissionRequest",
  clusterId: "",
  userName: "",
};

export const GrantUserPermissionRequest = {
  $type: "yandex.cloud.mdb.mysql.v1.GrantUserPermissionRequest" as const,

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
  $type: "yandex.cloud.mdb.mysql.v1.GrantUserPermissionMetadata",
  clusterId: "",
  userName: "",
};

export const GrantUserPermissionMetadata = {
  $type: "yandex.cloud.mdb.mysql.v1.GrantUserPermissionMetadata" as const,

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
  $type: "yandex.cloud.mdb.mysql.v1.RevokeUserPermissionRequest",
  clusterId: "",
  userName: "",
};

export const RevokeUserPermissionRequest = {
  $type: "yandex.cloud.mdb.mysql.v1.RevokeUserPermissionRequest" as const,

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
    if (message.permission !== undefined) {
      Permission.encode(message.permission, writer.uint32(26).fork()).ldelim();
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
          message.permission = Permission.decode(reader, reader.uint32());
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
    message.permission =
      object.permission !== undefined && object.permission !== null
        ? Permission.fromJSON(object.permission)
        : undefined;
    return message;
  },

  toJSON(message: RevokeUserPermissionRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.userName !== undefined && (obj.userName = message.userName);
    message.permission !== undefined &&
      (obj.permission = message.permission
        ? Permission.toJSON(message.permission)
        : undefined);
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
    message.permission =
      object.permission !== undefined && object.permission !== null
        ? Permission.fromPartial(object.permission)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  RevokeUserPermissionRequest.$type,
  RevokeUserPermissionRequest
);

const baseRevokeUserPermissionMetadata: object = {
  $type: "yandex.cloud.mdb.mysql.v1.RevokeUserPermissionMetadata",
  clusterId: "",
  userName: "",
};

export const RevokeUserPermissionMetadata = {
  $type: "yandex.cloud.mdb.mysql.v1.RevokeUserPermissionMetadata" as const,

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

/**
 * A set of methods for managing MySQL users.
 *
 * See [the documentation](/docs/managed-mysql/operations/cluster-users) for details.
 */
export const UserServiceService = {
  /** Retrieves information about the specified user. */
  get: {
    path: "/yandex.cloud.mdb.mysql.v1.UserService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetUserRequest) =>
      Buffer.from(GetUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetUserRequest.decode(value),
    responseSerialize: (value: User) =>
      Buffer.from(User.encode(value).finish()),
    responseDeserialize: (value: Buffer) => User.decode(value),
  },
  /** Retrieves the list of users in a cluster. */
  list: {
    path: "/yandex.cloud.mdb.mysql.v1.UserService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListUsersRequest) =>
      Buffer.from(ListUsersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListUsersRequest.decode(value),
    responseSerialize: (value: ListUsersResponse) =>
      Buffer.from(ListUsersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListUsersResponse.decode(value),
  },
  /** Creates a user in a cluster. */
  create: {
    path: "/yandex.cloud.mdb.mysql.v1.UserService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateUserRequest) =>
      Buffer.from(CreateUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateUserRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates a user in a cluster. */
  update: {
    path: "/yandex.cloud.mdb.mysql.v1.UserService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateUserRequest) =>
      Buffer.from(UpdateUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateUserRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes a user in a cluster. */
  delete: {
    path: "/yandex.cloud.mdb.mysql.v1.UserService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteUserRequest) =>
      Buffer.from(DeleteUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteUserRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Grants permission to access a database to a user in a cluster. */
  grantPermission: {
    path: "/yandex.cloud.mdb.mysql.v1.UserService/GrantPermission",
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
  /** Revokes permission to access a database from a user in a cluster. */
  revokePermission: {
    path: "/yandex.cloud.mdb.mysql.v1.UserService/RevokePermission",
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
  /** Retrieves information about the specified user. */
  get: handleUnaryCall<GetUserRequest, User>;
  /** Retrieves the list of users in a cluster. */
  list: handleUnaryCall<ListUsersRequest, ListUsersResponse>;
  /** Creates a user in a cluster. */
  create: handleUnaryCall<CreateUserRequest, Operation>;
  /** Updates a user in a cluster. */
  update: handleUnaryCall<UpdateUserRequest, Operation>;
  /** Deletes a user in a cluster. */
  delete: handleUnaryCall<DeleteUserRequest, Operation>;
  /** Grants permission to access a database to a user in a cluster. */
  grantPermission: handleUnaryCall<GrantUserPermissionRequest, Operation>;
  /** Revokes permission to access a database from a user in a cluster. */
  revokePermission: handleUnaryCall<RevokeUserPermissionRequest, Operation>;
}

export interface UserServiceClient extends Client {
  /** Retrieves information about the specified user. */
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
  /** Retrieves the list of users in a cluster. */
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
  /** Creates a user in a cluster. */
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
  /** Updates a user in a cluster. */
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
  /** Deletes a user in a cluster. */
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
  /** Grants permission to access a database to a user in a cluster. */
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
  /** Revokes permission to access a database from a user in a cluster. */
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
  "yandex.cloud.mdb.mysql.v1.UserService"
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
