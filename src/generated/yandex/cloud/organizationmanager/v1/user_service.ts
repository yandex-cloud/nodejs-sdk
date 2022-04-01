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
import { SubjectClaims } from "../../../../yandex/cloud/oauth/claims";
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.organizationmanager.v1";

export interface ListMembersRequest {
  $type: "yandex.cloud.organizationmanager.v1.ListMembersRequest";
  /** ID of the Organization resource to list members for. */
  organizationId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListMembersResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Acceptable values are 0 to 1000, inclusive. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. Set [page_token]
   * to the [ListMembersResponse.next_page_token]
   * returned by a previous list request to get the next page of results.
   */
  pageToken: string;
}

export interface ListMembersResponse {
  $type: "yandex.cloud.organizationmanager.v1.ListMembersResponse";
  /** List of users for the specified organization. */
  users: ListMembersResponse_OrganizationUser[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListMembersRequest.page_size], use the [next_page_token] as the value
   * for the [ListMembersRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListMembersResponse_OrganizationUser {
  $type: "yandex.cloud.organizationmanager.v1.ListMembersResponse.OrganizationUser";
  /** OpenID standard claims with additional Yandex Cloud Organization claims. */
  subjectClaims?: SubjectClaims;
}

export interface DeleteMembershipRequest {
  $type: "yandex.cloud.organizationmanager.v1.DeleteMembershipRequest";
  /** ID of the organization to delete membership. */
  organizationId: string;
  /**
   * ID of the subject that is being deleted from organization.
   * By default equals to authenticated subject.
   */
  subjectId: string;
}

export interface DeleteMembershipMetadata {
  $type: "yandex.cloud.organizationmanager.v1.DeleteMembershipMetadata";
  /** ID of the organization to delete membership. */
  organizationId: string;
  /** ID of the subject that is being deleted from organization. */
  subjectId: string;
}

export interface DeleteMembershipResponse {
  $type: "yandex.cloud.organizationmanager.v1.DeleteMembershipResponse";
  /** ID of the organization to delete membership. */
  organizationId: string;
  /** ID of the subject that is being deleted from organization. */
  subjectId: string;
}

const baseListMembersRequest: object = {
  $type: "yandex.cloud.organizationmanager.v1.ListMembersRequest",
  organizationId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListMembersRequest = {
  $type: "yandex.cloud.organizationmanager.v1.ListMembersRequest" as const,

  encode(
    message: ListMembersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.organizationId !== "") {
      writer.uint32(10).string(message.organizationId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMembersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListMembersRequest } as ListMembersRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.organizationId = reader.string();
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

  fromJSON(object: any): ListMembersRequest {
    const message = { ...baseListMembersRequest } as ListMembersRequest;
    message.organizationId =
      object.organizationId !== undefined && object.organizationId !== null
        ? String(object.organizationId)
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

  toJSON(message: ListMembersRequest): unknown {
    const obj: any = {};
    message.organizationId !== undefined &&
      (obj.organizationId = message.organizationId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListMembersRequest>, I>>(
    object: I
  ): ListMembersRequest {
    const message = { ...baseListMembersRequest } as ListMembersRequest;
    message.organizationId = object.organizationId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListMembersRequest.$type, ListMembersRequest);

const baseListMembersResponse: object = {
  $type: "yandex.cloud.organizationmanager.v1.ListMembersResponse",
  nextPageToken: "",
};

export const ListMembersResponse = {
  $type: "yandex.cloud.organizationmanager.v1.ListMembersResponse" as const,

  encode(
    message: ListMembersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.users) {
      ListMembersResponse_OrganizationUser.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMembersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListMembersResponse } as ListMembersResponse;
    message.users = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.users.push(
            ListMembersResponse_OrganizationUser.decode(reader, reader.uint32())
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

  fromJSON(object: any): ListMembersResponse {
    const message = { ...baseListMembersResponse } as ListMembersResponse;
    message.users = (object.users ?? []).map((e: any) =>
      ListMembersResponse_OrganizationUser.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListMembersResponse): unknown {
    const obj: any = {};
    if (message.users) {
      obj.users = message.users.map((e) =>
        e ? ListMembersResponse_OrganizationUser.toJSON(e) : undefined
      );
    } else {
      obj.users = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListMembersResponse>, I>>(
    object: I
  ): ListMembersResponse {
    const message = { ...baseListMembersResponse } as ListMembersResponse;
    message.users =
      object.users?.map((e) =>
        ListMembersResponse_OrganizationUser.fromPartial(e)
      ) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListMembersResponse.$type, ListMembersResponse);

const baseListMembersResponse_OrganizationUser: object = {
  $type:
    "yandex.cloud.organizationmanager.v1.ListMembersResponse.OrganizationUser",
};

export const ListMembersResponse_OrganizationUser = {
  $type:
    "yandex.cloud.organizationmanager.v1.ListMembersResponse.OrganizationUser" as const,

  encode(
    message: ListMembersResponse_OrganizationUser,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subjectClaims !== undefined) {
      SubjectClaims.encode(
        message.subjectClaims,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListMembersResponse_OrganizationUser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListMembersResponse_OrganizationUser,
    } as ListMembersResponse_OrganizationUser;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subjectClaims = SubjectClaims.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListMembersResponse_OrganizationUser {
    const message = {
      ...baseListMembersResponse_OrganizationUser,
    } as ListMembersResponse_OrganizationUser;
    message.subjectClaims =
      object.subjectClaims !== undefined && object.subjectClaims !== null
        ? SubjectClaims.fromJSON(object.subjectClaims)
        : undefined;
    return message;
  },

  toJSON(message: ListMembersResponse_OrganizationUser): unknown {
    const obj: any = {};
    message.subjectClaims !== undefined &&
      (obj.subjectClaims = message.subjectClaims
        ? SubjectClaims.toJSON(message.subjectClaims)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListMembersResponse_OrganizationUser>, I>
  >(object: I): ListMembersResponse_OrganizationUser {
    const message = {
      ...baseListMembersResponse_OrganizationUser,
    } as ListMembersResponse_OrganizationUser;
    message.subjectClaims =
      object.subjectClaims !== undefined && object.subjectClaims !== null
        ? SubjectClaims.fromPartial(object.subjectClaims)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ListMembersResponse_OrganizationUser.$type,
  ListMembersResponse_OrganizationUser
);

const baseDeleteMembershipRequest: object = {
  $type: "yandex.cloud.organizationmanager.v1.DeleteMembershipRequest",
  organizationId: "",
  subjectId: "",
};

export const DeleteMembershipRequest = {
  $type: "yandex.cloud.organizationmanager.v1.DeleteMembershipRequest" as const,

  encode(
    message: DeleteMembershipRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.organizationId !== "") {
      writer.uint32(10).string(message.organizationId);
    }
    if (message.subjectId !== "") {
      writer.uint32(18).string(message.subjectId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteMembershipRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteMembershipRequest,
    } as DeleteMembershipRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.organizationId = reader.string();
          break;
        case 2:
          message.subjectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteMembershipRequest {
    const message = {
      ...baseDeleteMembershipRequest,
    } as DeleteMembershipRequest;
    message.organizationId =
      object.organizationId !== undefined && object.organizationId !== null
        ? String(object.organizationId)
        : "";
    message.subjectId =
      object.subjectId !== undefined && object.subjectId !== null
        ? String(object.subjectId)
        : "";
    return message;
  },

  toJSON(message: DeleteMembershipRequest): unknown {
    const obj: any = {};
    message.organizationId !== undefined &&
      (obj.organizationId = message.organizationId);
    message.subjectId !== undefined && (obj.subjectId = message.subjectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteMembershipRequest>, I>>(
    object: I
  ): DeleteMembershipRequest {
    const message = {
      ...baseDeleteMembershipRequest,
    } as DeleteMembershipRequest;
    message.organizationId = object.organizationId ?? "";
    message.subjectId = object.subjectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteMembershipRequest.$type, DeleteMembershipRequest);

const baseDeleteMembershipMetadata: object = {
  $type: "yandex.cloud.organizationmanager.v1.DeleteMembershipMetadata",
  organizationId: "",
  subjectId: "",
};

export const DeleteMembershipMetadata = {
  $type:
    "yandex.cloud.organizationmanager.v1.DeleteMembershipMetadata" as const,

  encode(
    message: DeleteMembershipMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.organizationId !== "") {
      writer.uint32(10).string(message.organizationId);
    }
    if (message.subjectId !== "") {
      writer.uint32(18).string(message.subjectId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteMembershipMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteMembershipMetadata,
    } as DeleteMembershipMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.organizationId = reader.string();
          break;
        case 2:
          message.subjectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteMembershipMetadata {
    const message = {
      ...baseDeleteMembershipMetadata,
    } as DeleteMembershipMetadata;
    message.organizationId =
      object.organizationId !== undefined && object.organizationId !== null
        ? String(object.organizationId)
        : "";
    message.subjectId =
      object.subjectId !== undefined && object.subjectId !== null
        ? String(object.subjectId)
        : "";
    return message;
  },

  toJSON(message: DeleteMembershipMetadata): unknown {
    const obj: any = {};
    message.organizationId !== undefined &&
      (obj.organizationId = message.organizationId);
    message.subjectId !== undefined && (obj.subjectId = message.subjectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteMembershipMetadata>, I>>(
    object: I
  ): DeleteMembershipMetadata {
    const message = {
      ...baseDeleteMembershipMetadata,
    } as DeleteMembershipMetadata;
    message.organizationId = object.organizationId ?? "";
    message.subjectId = object.subjectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteMembershipMetadata.$type,
  DeleteMembershipMetadata
);

const baseDeleteMembershipResponse: object = {
  $type: "yandex.cloud.organizationmanager.v1.DeleteMembershipResponse",
  organizationId: "",
  subjectId: "",
};

export const DeleteMembershipResponse = {
  $type:
    "yandex.cloud.organizationmanager.v1.DeleteMembershipResponse" as const,

  encode(
    message: DeleteMembershipResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.organizationId !== "") {
      writer.uint32(10).string(message.organizationId);
    }
    if (message.subjectId !== "") {
      writer.uint32(18).string(message.subjectId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteMembershipResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteMembershipResponse,
    } as DeleteMembershipResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.organizationId = reader.string();
          break;
        case 2:
          message.subjectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteMembershipResponse {
    const message = {
      ...baseDeleteMembershipResponse,
    } as DeleteMembershipResponse;
    message.organizationId =
      object.organizationId !== undefined && object.organizationId !== null
        ? String(object.organizationId)
        : "";
    message.subjectId =
      object.subjectId !== undefined && object.subjectId !== null
        ? String(object.subjectId)
        : "";
    return message;
  },

  toJSON(message: DeleteMembershipResponse): unknown {
    const obj: any = {};
    message.organizationId !== undefined &&
      (obj.organizationId = message.organizationId);
    message.subjectId !== undefined && (obj.subjectId = message.subjectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteMembershipResponse>, I>>(
    object: I
  ): DeleteMembershipResponse {
    const message = {
      ...baseDeleteMembershipResponse,
    } as DeleteMembershipResponse;
    message.organizationId = object.organizationId ?? "";
    message.subjectId = object.subjectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteMembershipResponse.$type,
  DeleteMembershipResponse
);

/** A set of methods for managing Organization users. */
export const UserServiceService = {
  /** List organization active members. */
  listMembers: {
    path: "/yandex.cloud.organizationmanager.v1.UserService/ListMembers",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListMembersRequest) =>
      Buffer.from(ListMembersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListMembersRequest.decode(value),
    responseSerialize: (value: ListMembersResponse) =>
      Buffer.from(ListMembersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListMembersResponse.decode(value),
  },
  /** Delete user membership. */
  deleteMembership: {
    path: "/yandex.cloud.organizationmanager.v1.UserService/DeleteMembership",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteMembershipRequest) =>
      Buffer.from(DeleteMembershipRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteMembershipRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface UserServiceServer extends UntypedServiceImplementation {
  /** List organization active members. */
  listMembers: handleUnaryCall<ListMembersRequest, ListMembersResponse>;
  /** Delete user membership. */
  deleteMembership: handleUnaryCall<DeleteMembershipRequest, Operation>;
}

export interface UserServiceClient extends Client {
  /** List organization active members. */
  listMembers(
    request: ListMembersRequest,
    callback: (
      error: ServiceError | null,
      response: ListMembersResponse
    ) => void
  ): ClientUnaryCall;
  listMembers(
    request: ListMembersRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListMembersResponse
    ) => void
  ): ClientUnaryCall;
  listMembers(
    request: ListMembersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListMembersResponse
    ) => void
  ): ClientUnaryCall;
  /** Delete user membership. */
  deleteMembership(
    request: DeleteMembershipRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deleteMembership(
    request: DeleteMembershipRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deleteMembership(
    request: DeleteMembershipRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const UserServiceClient = makeGenericClientConstructor(
  UserServiceService,
  "yandex.cloud.organizationmanager.v1.UserService"
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
