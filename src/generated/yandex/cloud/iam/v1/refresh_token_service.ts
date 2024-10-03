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
import { RefreshToken } from "../../../../yandex/cloud/iam/v1/refresh_token";
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.iam.v1";

export interface RevokeRefreshTokenMetadata {
  $type: "yandex.cloud.iam.v1.RevokeRefreshTokenMetadata";
  subjectId: string;
  /** Id of revoked Refresh Tokens. */
  refreshTokenIds: string[];
}

export interface ListRefreshTokensRequest {
  $type: "yandex.cloud.iam.v1.ListRefreshTokensRequest";
  subjectId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListRefreshTokensResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token]
   * to the [ListRefreshTokensResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters refresh tokens listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [RefreshToken.client_instance_info], [RefreshToken.client_id] or [RefreshToken.protection_level] fields.
   * 2. The operator. An `=` operator can be used for all fields. An 'IN' operator can be used for [RefreshToken.protection_level].
   * 3. The value. The value must be in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-zA-Z][_-a-zA-Z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `client_instance_info="clientInstanceInfo" AND protection_level IN ("INSECURE_KEY_DPOP", "SECURE_KEY_DPOP")`.
   */
  filter: string;
}

export interface ListRefreshTokensResponse {
  $type: "yandex.cloud.iam.v1.ListRefreshTokensResponse";
  /** List of Refresh Tokens */
  refreshTokens: RefreshToken[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListRefreshTokensForSubjectRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListRefreshTokensForSubjectRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

/**
 * Revoke Refresh Token request.
 * If none of the parameters refresh_token_id, refresh_token, or revoke_filter are provided, all Refresh Tokens for the current subject will be revoked.
 */
export interface RevokeRefreshTokenRequest {
  $type: "yandex.cloud.iam.v1.RevokeRefreshTokenRequest";
  /** Identifier of the Refresh Token to be revoked. */
  refreshTokenId: string | undefined;
  /** The Refresh Token to be revoked. */
  refreshToken: string | undefined;
  /** The filter for revoking Refresh Token */
  revokeFilter?: RevokeFilter | undefined;
}

/**
 * The Filter object allows filtering Refresh Tokens that will be revoked.
 * It contains three optional fields.
 * When multiple fields are provided, they are combined using a logical AND operation.
 */
export interface RevokeFilter {
  $type: "yandex.cloud.iam.v1.RevokeFilter";
  /** The OAuth client identifier for which the Refresh Token was issued. */
  clientId: string;
  /**
   * The subject identifier for whom the Refresh Token was issued.
   * If not specified, it defaults to the subject that made the request.
   */
  subjectId: string;
  /** Information about the app for which the Refresh Token was issued. */
  clientInstanceInfo: string;
}

export interface RevokeRefreshTokenResponse {
  $type: "yandex.cloud.iam.v1.RevokeRefreshTokenResponse";
  /** Id of revoked Refresh Tokens. */
  refreshTokenIds: string[];
}

const baseRevokeRefreshTokenMetadata: object = {
  $type: "yandex.cloud.iam.v1.RevokeRefreshTokenMetadata",
  subjectId: "",
  refreshTokenIds: "",
};

export const RevokeRefreshTokenMetadata = {
  $type: "yandex.cloud.iam.v1.RevokeRefreshTokenMetadata" as const,

  encode(
    message: RevokeRefreshTokenMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subjectId !== "") {
      writer.uint32(10).string(message.subjectId);
    }
    for (const v of message.refreshTokenIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RevokeRefreshTokenMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRevokeRefreshTokenMetadata,
    } as RevokeRefreshTokenMetadata;
    message.refreshTokenIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subjectId = reader.string();
          break;
        case 2:
          message.refreshTokenIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RevokeRefreshTokenMetadata {
    const message = {
      ...baseRevokeRefreshTokenMetadata,
    } as RevokeRefreshTokenMetadata;
    message.subjectId =
      object.subjectId !== undefined && object.subjectId !== null
        ? String(object.subjectId)
        : "";
    message.refreshTokenIds = (object.refreshTokenIds ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: RevokeRefreshTokenMetadata): unknown {
    const obj: any = {};
    message.subjectId !== undefined && (obj.subjectId = message.subjectId);
    if (message.refreshTokenIds) {
      obj.refreshTokenIds = message.refreshTokenIds.map((e) => e);
    } else {
      obj.refreshTokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RevokeRefreshTokenMetadata>, I>>(
    object: I
  ): RevokeRefreshTokenMetadata {
    const message = {
      ...baseRevokeRefreshTokenMetadata,
    } as RevokeRefreshTokenMetadata;
    message.subjectId = object.subjectId ?? "";
    message.refreshTokenIds = object.refreshTokenIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  RevokeRefreshTokenMetadata.$type,
  RevokeRefreshTokenMetadata
);

const baseListRefreshTokensRequest: object = {
  $type: "yandex.cloud.iam.v1.ListRefreshTokensRequest",
  subjectId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListRefreshTokensRequest = {
  $type: "yandex.cloud.iam.v1.ListRefreshTokensRequest" as const,

  encode(
    message: ListRefreshTokensRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subjectId !== "") {
      writer.uint32(10).string(message.subjectId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(32).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(42).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(50).string(message.filter);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListRefreshTokensRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListRefreshTokensRequest,
    } as ListRefreshTokensRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subjectId = reader.string();
          break;
        case 4:
          message.pageSize = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.pageToken = reader.string();
          break;
        case 6:
          message.filter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListRefreshTokensRequest {
    const message = {
      ...baseListRefreshTokensRequest,
    } as ListRefreshTokensRequest;
    message.subjectId =
      object.subjectId !== undefined && object.subjectId !== null
        ? String(object.subjectId)
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

  toJSON(message: ListRefreshTokensRequest): unknown {
    const obj: any = {};
    message.subjectId !== undefined && (obj.subjectId = message.subjectId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListRefreshTokensRequest>, I>>(
    object: I
  ): ListRefreshTokensRequest {
    const message = {
      ...baseListRefreshTokensRequest,
    } as ListRefreshTokensRequest;
    message.subjectId = object.subjectId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListRefreshTokensRequest.$type,
  ListRefreshTokensRequest
);

const baseListRefreshTokensResponse: object = {
  $type: "yandex.cloud.iam.v1.ListRefreshTokensResponse",
  nextPageToken: "",
};

export const ListRefreshTokensResponse = {
  $type: "yandex.cloud.iam.v1.ListRefreshTokensResponse" as const,

  encode(
    message: ListRefreshTokensResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.refreshTokens) {
      RefreshToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListRefreshTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListRefreshTokensResponse,
    } as ListRefreshTokensResponse;
    message.refreshTokens = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refreshTokens.push(
            RefreshToken.decode(reader, reader.uint32())
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

  fromJSON(object: any): ListRefreshTokensResponse {
    const message = {
      ...baseListRefreshTokensResponse,
    } as ListRefreshTokensResponse;
    message.refreshTokens = (object.refreshTokens ?? []).map((e: any) =>
      RefreshToken.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListRefreshTokensResponse): unknown {
    const obj: any = {};
    if (message.refreshTokens) {
      obj.refreshTokens = message.refreshTokens.map((e) =>
        e ? RefreshToken.toJSON(e) : undefined
      );
    } else {
      obj.refreshTokens = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListRefreshTokensResponse>, I>>(
    object: I
  ): ListRefreshTokensResponse {
    const message = {
      ...baseListRefreshTokensResponse,
    } as ListRefreshTokensResponse;
    message.refreshTokens =
      object.refreshTokens?.map((e) => RefreshToken.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListRefreshTokensResponse.$type,
  ListRefreshTokensResponse
);

const baseRevokeRefreshTokenRequest: object = {
  $type: "yandex.cloud.iam.v1.RevokeRefreshTokenRequest",
};

export const RevokeRefreshTokenRequest = {
  $type: "yandex.cloud.iam.v1.RevokeRefreshTokenRequest" as const,

  encode(
    message: RevokeRefreshTokenRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.refreshTokenId !== undefined) {
      writer.uint32(10).string(message.refreshTokenId);
    }
    if (message.refreshToken !== undefined) {
      writer.uint32(18).string(message.refreshToken);
    }
    if (message.revokeFilter !== undefined) {
      RevokeFilter.encode(
        message.revokeFilter,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RevokeRefreshTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRevokeRefreshTokenRequest,
    } as RevokeRefreshTokenRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refreshTokenId = reader.string();
          break;
        case 2:
          message.refreshToken = reader.string();
          break;
        case 3:
          message.revokeFilter = RevokeFilter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RevokeRefreshTokenRequest {
    const message = {
      ...baseRevokeRefreshTokenRequest,
    } as RevokeRefreshTokenRequest;
    message.refreshTokenId =
      object.refreshTokenId !== undefined && object.refreshTokenId !== null
        ? String(object.refreshTokenId)
        : undefined;
    message.refreshToken =
      object.refreshToken !== undefined && object.refreshToken !== null
        ? String(object.refreshToken)
        : undefined;
    message.revokeFilter =
      object.revokeFilter !== undefined && object.revokeFilter !== null
        ? RevokeFilter.fromJSON(object.revokeFilter)
        : undefined;
    return message;
  },

  toJSON(message: RevokeRefreshTokenRequest): unknown {
    const obj: any = {};
    message.refreshTokenId !== undefined &&
      (obj.refreshTokenId = message.refreshTokenId);
    message.refreshToken !== undefined &&
      (obj.refreshToken = message.refreshToken);
    message.revokeFilter !== undefined &&
      (obj.revokeFilter = message.revokeFilter
        ? RevokeFilter.toJSON(message.revokeFilter)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RevokeRefreshTokenRequest>, I>>(
    object: I
  ): RevokeRefreshTokenRequest {
    const message = {
      ...baseRevokeRefreshTokenRequest,
    } as RevokeRefreshTokenRequest;
    message.refreshTokenId = object.refreshTokenId ?? undefined;
    message.refreshToken = object.refreshToken ?? undefined;
    message.revokeFilter =
      object.revokeFilter !== undefined && object.revokeFilter !== null
        ? RevokeFilter.fromPartial(object.revokeFilter)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  RevokeRefreshTokenRequest.$type,
  RevokeRefreshTokenRequest
);

const baseRevokeFilter: object = {
  $type: "yandex.cloud.iam.v1.RevokeFilter",
  clientId: "",
  subjectId: "",
  clientInstanceInfo: "",
};

export const RevokeFilter = {
  $type: "yandex.cloud.iam.v1.RevokeFilter" as const,

  encode(
    message: RevokeFilter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }
    if (message.subjectId !== "") {
      writer.uint32(26).string(message.subjectId);
    }
    if (message.clientInstanceInfo !== "") {
      writer.uint32(34).string(message.clientInstanceInfo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RevokeFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRevokeFilter } as RevokeFilter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.clientId = reader.string();
          break;
        case 3:
          message.subjectId = reader.string();
          break;
        case 4:
          message.clientInstanceInfo = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RevokeFilter {
    const message = { ...baseRevokeFilter } as RevokeFilter;
    message.clientId =
      object.clientId !== undefined && object.clientId !== null
        ? String(object.clientId)
        : "";
    message.subjectId =
      object.subjectId !== undefined && object.subjectId !== null
        ? String(object.subjectId)
        : "";
    message.clientInstanceInfo =
      object.clientInstanceInfo !== undefined &&
      object.clientInstanceInfo !== null
        ? String(object.clientInstanceInfo)
        : "";
    return message;
  },

  toJSON(message: RevokeFilter): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.subjectId !== undefined && (obj.subjectId = message.subjectId);
    message.clientInstanceInfo !== undefined &&
      (obj.clientInstanceInfo = message.clientInstanceInfo);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RevokeFilter>, I>>(
    object: I
  ): RevokeFilter {
    const message = { ...baseRevokeFilter } as RevokeFilter;
    message.clientId = object.clientId ?? "";
    message.subjectId = object.subjectId ?? "";
    message.clientInstanceInfo = object.clientInstanceInfo ?? "";
    return message;
  },
};

messageTypeRegistry.set(RevokeFilter.$type, RevokeFilter);

const baseRevokeRefreshTokenResponse: object = {
  $type: "yandex.cloud.iam.v1.RevokeRefreshTokenResponse",
  refreshTokenIds: "",
};

export const RevokeRefreshTokenResponse = {
  $type: "yandex.cloud.iam.v1.RevokeRefreshTokenResponse" as const,

  encode(
    message: RevokeRefreshTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.refreshTokenIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RevokeRefreshTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRevokeRefreshTokenResponse,
    } as RevokeRefreshTokenResponse;
    message.refreshTokenIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refreshTokenIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RevokeRefreshTokenResponse {
    const message = {
      ...baseRevokeRefreshTokenResponse,
    } as RevokeRefreshTokenResponse;
    message.refreshTokenIds = (object.refreshTokenIds ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: RevokeRefreshTokenResponse): unknown {
    const obj: any = {};
    if (message.refreshTokenIds) {
      obj.refreshTokenIds = message.refreshTokenIds.map((e) => e);
    } else {
      obj.refreshTokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RevokeRefreshTokenResponse>, I>>(
    object: I
  ): RevokeRefreshTokenResponse {
    const message = {
      ...baseRevokeRefreshTokenResponse,
    } as RevokeRefreshTokenResponse;
    message.refreshTokenIds = object.refreshTokenIds?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  RevokeRefreshTokenResponse.$type,
  RevokeRefreshTokenResponse
);

/** A set of methods for managing Refresh Tokens. */
export const RefreshTokenServiceService = {
  /** List subjects Refresh Tokens. */
  list: {
    path: "/yandex.cloud.iam.v1.RefreshTokenService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListRefreshTokensRequest) =>
      Buffer.from(ListRefreshTokensRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListRefreshTokensRequest.decode(value),
    responseSerialize: (value: ListRefreshTokensResponse) =>
      Buffer.from(ListRefreshTokensResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListRefreshTokensResponse.decode(value),
  },
  /** Revoke Refresh Tokens. Several Refresh Tokens can be revoked by one request. */
  revoke: {
    path: "/yandex.cloud.iam.v1.RefreshTokenService/Revoke",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RevokeRefreshTokenRequest) =>
      Buffer.from(RevokeRefreshTokenRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      RevokeRefreshTokenRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface RefreshTokenServiceServer
  extends UntypedServiceImplementation {
  /** List subjects Refresh Tokens. */
  list: handleUnaryCall<ListRefreshTokensRequest, ListRefreshTokensResponse>;
  /** Revoke Refresh Tokens. Several Refresh Tokens can be revoked by one request. */
  revoke: handleUnaryCall<RevokeRefreshTokenRequest, Operation>;
}

export interface RefreshTokenServiceClient extends Client {
  /** List subjects Refresh Tokens. */
  list(
    request: ListRefreshTokensRequest,
    callback: (
      error: ServiceError | null,
      response: ListRefreshTokensResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListRefreshTokensRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListRefreshTokensResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListRefreshTokensRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListRefreshTokensResponse
    ) => void
  ): ClientUnaryCall;
  /** Revoke Refresh Tokens. Several Refresh Tokens can be revoked by one request. */
  revoke(
    request: RevokeRefreshTokenRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  revoke(
    request: RevokeRefreshTokenRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  revoke(
    request: RevokeRefreshTokenRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const RefreshTokenServiceClient = makeGenericClientConstructor(
  RefreshTokenServiceService,
  "yandex.cloud.iam.v1.RefreshTokenService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): RefreshTokenServiceClient;
  service: typeof RefreshTokenServiceService;
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
