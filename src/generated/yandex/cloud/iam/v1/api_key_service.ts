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
import { ApiKey } from "../../../../yandex/cloud/iam/v1/api_key";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.iam.v1";

export interface GetApiKeyRequest {
  $type: "yandex.cloud.iam.v1.GetApiKeyRequest";
  /**
   * ID of the API key to return.
   * To get the API key ID, use a [ApiKeyService.List] request.
   */
  apiKeyId: string;
}

export interface ListApiKeysRequest {
  $type: "yandex.cloud.iam.v1.ListApiKeysRequest";
  /**
   * ID of the service account to list API keys for.
   * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
   * If not specified, it defaults to the subject that made the request.
   */
  serviceAccountId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListApiKeysResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token]
   * to the [ListApiKeysResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
}

export interface ListApiKeysResponse {
  $type: "yandex.cloud.iam.v1.ListApiKeysResponse";
  /** List of API keys. */
  apiKeys: ApiKey[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListApiKeysRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListApiKeysRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateApiKeyRequest {
  $type: "yandex.cloud.iam.v1.CreateApiKeyRequest";
  /**
   * ID of the service account to create an API key for.
   * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
   * If not specified, it defaults to the subject that made the request.
   */
  serviceAccountId: string;
  /** Description of the API key. */
  description: string;
  /** Scope of the API key. */
  scope: string;
  /** API key expiration timestamp, if not specified, then the API key doesn't expire */
  expiresAt?: Date;
}

export interface CreateApiKeyResponse {
  $type: "yandex.cloud.iam.v1.CreateApiKeyResponse";
  /** ApiKey resource. */
  apiKey?: ApiKey;
  /** Secret part of the API key. This secret key you may use in the requests for authentication. */
  secret: string;
}

export interface UpdateApiKeyRequest {
  $type: "yandex.cloud.iam.v1.UpdateApiKeyRequest";
  /**
   * ID of the ApiKey resource to update.
   * To get the API key ID, use a [ApiKeyService.List] request.
   */
  apiKeyId: string;
  /** Field mask that specifies which fields of the ApiKey resource are going to be updated. */
  updateMask?: FieldMask;
  /** Description of the API key. */
  description: string;
}

export interface UpdateApiKeyMetadata {
  $type: "yandex.cloud.iam.v1.UpdateApiKeyMetadata";
  /** ID of the ApiKey resource that is being updated. */
  apiKeyId: string;
}

export interface DeleteApiKeyRequest {
  $type: "yandex.cloud.iam.v1.DeleteApiKeyRequest";
  /**
   * ID of the API key to delete.
   * To get the API key ID, use a [ApiKeyService.List] request.
   */
  apiKeyId: string;
}

export interface DeleteApiKeyMetadata {
  $type: "yandex.cloud.iam.v1.DeleteApiKeyMetadata";
  /** ID of the API key that is being deleted. */
  apiKeyId: string;
}

export interface ListApiKeyOperationsRequest {
  $type: "yandex.cloud.iam.v1.ListApiKeyOperationsRequest";
  /** ID of the key to list operations for. */
  apiKeyId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListApiKeyOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListApiKeyOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListApiKeyOperationsResponse {
  $type: "yandex.cloud.iam.v1.ListApiKeyOperationsResponse";
  /** List of operations for the specified API key. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListApiKeyOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListApiKeyOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListApiKeyScopesRequest {
  $type: "yandex.cloud.iam.v1.ListApiKeyScopesRequest";
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListApiKeyScopesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListApiKeyScopesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListApiKeyScopesResponse {
  $type: "yandex.cloud.iam.v1.ListApiKeyScopesResponse";
  /** List of scopes */
  scopes: string[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListApiKeyScopesRequest.page_size], use the [next_page_token] as the value
   * for the [ListApiKeyScopesRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

const baseGetApiKeyRequest: object = {
  $type: "yandex.cloud.iam.v1.GetApiKeyRequest",
  apiKeyId: "",
};

export const GetApiKeyRequest = {
  $type: "yandex.cloud.iam.v1.GetApiKeyRequest" as const,

  encode(
    message: GetApiKeyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.apiKeyId !== "") {
      writer.uint32(10).string(message.apiKeyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetApiKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetApiKeyRequest } as GetApiKeyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiKeyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetApiKeyRequest {
    const message = { ...baseGetApiKeyRequest } as GetApiKeyRequest;
    message.apiKeyId =
      object.apiKeyId !== undefined && object.apiKeyId !== null
        ? String(object.apiKeyId)
        : "";
    return message;
  },

  toJSON(message: GetApiKeyRequest): unknown {
    const obj: any = {};
    message.apiKeyId !== undefined && (obj.apiKeyId = message.apiKeyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetApiKeyRequest>, I>>(
    object: I
  ): GetApiKeyRequest {
    const message = { ...baseGetApiKeyRequest } as GetApiKeyRequest;
    message.apiKeyId = object.apiKeyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetApiKeyRequest.$type, GetApiKeyRequest);

const baseListApiKeysRequest: object = {
  $type: "yandex.cloud.iam.v1.ListApiKeysRequest",
  serviceAccountId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListApiKeysRequest = {
  $type: "yandex.cloud.iam.v1.ListApiKeysRequest" as const,

  encode(
    message: ListApiKeysRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.serviceAccountId !== "") {
      writer.uint32(10).string(message.serviceAccountId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListApiKeysRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListApiKeysRequest } as ListApiKeysRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceAccountId = reader.string();
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

  fromJSON(object: any): ListApiKeysRequest {
    const message = { ...baseListApiKeysRequest } as ListApiKeysRequest;
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
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

  toJSON(message: ListApiKeysRequest): unknown {
    const obj: any = {};
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListApiKeysRequest>, I>>(
    object: I
  ): ListApiKeysRequest {
    const message = { ...baseListApiKeysRequest } as ListApiKeysRequest;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListApiKeysRequest.$type, ListApiKeysRequest);

const baseListApiKeysResponse: object = {
  $type: "yandex.cloud.iam.v1.ListApiKeysResponse",
  nextPageToken: "",
};

export const ListApiKeysResponse = {
  $type: "yandex.cloud.iam.v1.ListApiKeysResponse" as const,

  encode(
    message: ListApiKeysResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.apiKeys) {
      ApiKey.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListApiKeysResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListApiKeysResponse } as ListApiKeysResponse;
    message.apiKeys = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiKeys.push(ApiKey.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListApiKeysResponse {
    const message = { ...baseListApiKeysResponse } as ListApiKeysResponse;
    message.apiKeys = (object.apiKeys ?? []).map((e: any) =>
      ApiKey.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListApiKeysResponse): unknown {
    const obj: any = {};
    if (message.apiKeys) {
      obj.apiKeys = message.apiKeys.map((e) =>
        e ? ApiKey.toJSON(e) : undefined
      );
    } else {
      obj.apiKeys = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListApiKeysResponse>, I>>(
    object: I
  ): ListApiKeysResponse {
    const message = { ...baseListApiKeysResponse } as ListApiKeysResponse;
    message.apiKeys = object.apiKeys?.map((e) => ApiKey.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListApiKeysResponse.$type, ListApiKeysResponse);

const baseCreateApiKeyRequest: object = {
  $type: "yandex.cloud.iam.v1.CreateApiKeyRequest",
  serviceAccountId: "",
  description: "",
  scope: "",
};

export const CreateApiKeyRequest = {
  $type: "yandex.cloud.iam.v1.CreateApiKeyRequest" as const,

  encode(
    message: CreateApiKeyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.serviceAccountId !== "") {
      writer.uint32(10).string(message.serviceAccountId);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.scope !== "") {
      writer.uint32(26).string(message.scope);
    }
    if (message.expiresAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiresAt),
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateApiKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateApiKeyRequest } as CreateApiKeyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceAccountId = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.scope = reader.string();
          break;
        case 4:
          message.expiresAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateApiKeyRequest {
    const message = { ...baseCreateApiKeyRequest } as CreateApiKeyRequest;
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.scope =
      object.scope !== undefined && object.scope !== null
        ? String(object.scope)
        : "";
    message.expiresAt =
      object.expiresAt !== undefined && object.expiresAt !== null
        ? fromJsonTimestamp(object.expiresAt)
        : undefined;
    return message;
  },

  toJSON(message: CreateApiKeyRequest): unknown {
    const obj: any = {};
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.description !== undefined &&
      (obj.description = message.description);
    message.scope !== undefined && (obj.scope = message.scope);
    message.expiresAt !== undefined &&
      (obj.expiresAt = message.expiresAt.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateApiKeyRequest>, I>>(
    object: I
  ): CreateApiKeyRequest {
    const message = { ...baseCreateApiKeyRequest } as CreateApiKeyRequest;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.description = object.description ?? "";
    message.scope = object.scope ?? "";
    message.expiresAt = object.expiresAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateApiKeyRequest.$type, CreateApiKeyRequest);

const baseCreateApiKeyResponse: object = {
  $type: "yandex.cloud.iam.v1.CreateApiKeyResponse",
  secret: "",
};

export const CreateApiKeyResponse = {
  $type: "yandex.cloud.iam.v1.CreateApiKeyResponse" as const,

  encode(
    message: CreateApiKeyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.apiKey !== undefined) {
      ApiKey.encode(message.apiKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.secret !== "") {
      writer.uint32(18).string(message.secret);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateApiKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateApiKeyResponse } as CreateApiKeyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiKey = ApiKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.secret = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateApiKeyResponse {
    const message = { ...baseCreateApiKeyResponse } as CreateApiKeyResponse;
    message.apiKey =
      object.apiKey !== undefined && object.apiKey !== null
        ? ApiKey.fromJSON(object.apiKey)
        : undefined;
    message.secret =
      object.secret !== undefined && object.secret !== null
        ? String(object.secret)
        : "";
    return message;
  },

  toJSON(message: CreateApiKeyResponse): unknown {
    const obj: any = {};
    message.apiKey !== undefined &&
      (obj.apiKey = message.apiKey ? ApiKey.toJSON(message.apiKey) : undefined);
    message.secret !== undefined && (obj.secret = message.secret);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateApiKeyResponse>, I>>(
    object: I
  ): CreateApiKeyResponse {
    const message = { ...baseCreateApiKeyResponse } as CreateApiKeyResponse;
    message.apiKey =
      object.apiKey !== undefined && object.apiKey !== null
        ? ApiKey.fromPartial(object.apiKey)
        : undefined;
    message.secret = object.secret ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateApiKeyResponse.$type, CreateApiKeyResponse);

const baseUpdateApiKeyRequest: object = {
  $type: "yandex.cloud.iam.v1.UpdateApiKeyRequest",
  apiKeyId: "",
  description: "",
};

export const UpdateApiKeyRequest = {
  $type: "yandex.cloud.iam.v1.UpdateApiKeyRequest" as const,

  encode(
    message: UpdateApiKeyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.apiKeyId !== "") {
      writer.uint32(10).string(message.apiKeyId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateApiKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateApiKeyRequest } as UpdateApiKeyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiKeyId = reader.string();
          break;
        case 2:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        case 3:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateApiKeyRequest {
    const message = { ...baseUpdateApiKeyRequest } as UpdateApiKeyRequest;
    message.apiKeyId =
      object.apiKeyId !== undefined && object.apiKeyId !== null
        ? String(object.apiKeyId)
        : "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
        : undefined;
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    return message;
  },

  toJSON(message: UpdateApiKeyRequest): unknown {
    const obj: any = {};
    message.apiKeyId !== undefined && (obj.apiKeyId = message.apiKeyId);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateApiKeyRequest>, I>>(
    object: I
  ): UpdateApiKeyRequest {
    const message = { ...baseUpdateApiKeyRequest } as UpdateApiKeyRequest;
    message.apiKeyId = object.apiKeyId ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.description = object.description ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateApiKeyRequest.$type, UpdateApiKeyRequest);

const baseUpdateApiKeyMetadata: object = {
  $type: "yandex.cloud.iam.v1.UpdateApiKeyMetadata",
  apiKeyId: "",
};

export const UpdateApiKeyMetadata = {
  $type: "yandex.cloud.iam.v1.UpdateApiKeyMetadata" as const,

  encode(
    message: UpdateApiKeyMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.apiKeyId !== "") {
      writer.uint32(10).string(message.apiKeyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateApiKeyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateApiKeyMetadata } as UpdateApiKeyMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiKeyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateApiKeyMetadata {
    const message = { ...baseUpdateApiKeyMetadata } as UpdateApiKeyMetadata;
    message.apiKeyId =
      object.apiKeyId !== undefined && object.apiKeyId !== null
        ? String(object.apiKeyId)
        : "";
    return message;
  },

  toJSON(message: UpdateApiKeyMetadata): unknown {
    const obj: any = {};
    message.apiKeyId !== undefined && (obj.apiKeyId = message.apiKeyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateApiKeyMetadata>, I>>(
    object: I
  ): UpdateApiKeyMetadata {
    const message = { ...baseUpdateApiKeyMetadata } as UpdateApiKeyMetadata;
    message.apiKeyId = object.apiKeyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateApiKeyMetadata.$type, UpdateApiKeyMetadata);

const baseDeleteApiKeyRequest: object = {
  $type: "yandex.cloud.iam.v1.DeleteApiKeyRequest",
  apiKeyId: "",
};

export const DeleteApiKeyRequest = {
  $type: "yandex.cloud.iam.v1.DeleteApiKeyRequest" as const,

  encode(
    message: DeleteApiKeyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.apiKeyId !== "") {
      writer.uint32(10).string(message.apiKeyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteApiKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteApiKeyRequest } as DeleteApiKeyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiKeyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteApiKeyRequest {
    const message = { ...baseDeleteApiKeyRequest } as DeleteApiKeyRequest;
    message.apiKeyId =
      object.apiKeyId !== undefined && object.apiKeyId !== null
        ? String(object.apiKeyId)
        : "";
    return message;
  },

  toJSON(message: DeleteApiKeyRequest): unknown {
    const obj: any = {};
    message.apiKeyId !== undefined && (obj.apiKeyId = message.apiKeyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteApiKeyRequest>, I>>(
    object: I
  ): DeleteApiKeyRequest {
    const message = { ...baseDeleteApiKeyRequest } as DeleteApiKeyRequest;
    message.apiKeyId = object.apiKeyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteApiKeyRequest.$type, DeleteApiKeyRequest);

const baseDeleteApiKeyMetadata: object = {
  $type: "yandex.cloud.iam.v1.DeleteApiKeyMetadata",
  apiKeyId: "",
};

export const DeleteApiKeyMetadata = {
  $type: "yandex.cloud.iam.v1.DeleteApiKeyMetadata" as const,

  encode(
    message: DeleteApiKeyMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.apiKeyId !== "") {
      writer.uint32(10).string(message.apiKeyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteApiKeyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteApiKeyMetadata } as DeleteApiKeyMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiKeyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteApiKeyMetadata {
    const message = { ...baseDeleteApiKeyMetadata } as DeleteApiKeyMetadata;
    message.apiKeyId =
      object.apiKeyId !== undefined && object.apiKeyId !== null
        ? String(object.apiKeyId)
        : "";
    return message;
  },

  toJSON(message: DeleteApiKeyMetadata): unknown {
    const obj: any = {};
    message.apiKeyId !== undefined && (obj.apiKeyId = message.apiKeyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteApiKeyMetadata>, I>>(
    object: I
  ): DeleteApiKeyMetadata {
    const message = { ...baseDeleteApiKeyMetadata } as DeleteApiKeyMetadata;
    message.apiKeyId = object.apiKeyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteApiKeyMetadata.$type, DeleteApiKeyMetadata);

const baseListApiKeyOperationsRequest: object = {
  $type: "yandex.cloud.iam.v1.ListApiKeyOperationsRequest",
  apiKeyId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListApiKeyOperationsRequest = {
  $type: "yandex.cloud.iam.v1.ListApiKeyOperationsRequest" as const,

  encode(
    message: ListApiKeyOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.apiKeyId !== "") {
      writer.uint32(10).string(message.apiKeyId);
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
  ): ListApiKeyOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListApiKeyOperationsRequest,
    } as ListApiKeyOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiKeyId = reader.string();
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

  fromJSON(object: any): ListApiKeyOperationsRequest {
    const message = {
      ...baseListApiKeyOperationsRequest,
    } as ListApiKeyOperationsRequest;
    message.apiKeyId =
      object.apiKeyId !== undefined && object.apiKeyId !== null
        ? String(object.apiKeyId)
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

  toJSON(message: ListApiKeyOperationsRequest): unknown {
    const obj: any = {};
    message.apiKeyId !== undefined && (obj.apiKeyId = message.apiKeyId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListApiKeyOperationsRequest>, I>>(
    object: I
  ): ListApiKeyOperationsRequest {
    const message = {
      ...baseListApiKeyOperationsRequest,
    } as ListApiKeyOperationsRequest;
    message.apiKeyId = object.apiKeyId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListApiKeyOperationsRequest.$type,
  ListApiKeyOperationsRequest
);

const baseListApiKeyOperationsResponse: object = {
  $type: "yandex.cloud.iam.v1.ListApiKeyOperationsResponse",
  nextPageToken: "",
};

export const ListApiKeyOperationsResponse = {
  $type: "yandex.cloud.iam.v1.ListApiKeyOperationsResponse" as const,

  encode(
    message: ListApiKeyOperationsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListApiKeyOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListApiKeyOperationsResponse,
    } as ListApiKeyOperationsResponse;
    message.operations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operations.push(Operation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListApiKeyOperationsResponse {
    const message = {
      ...baseListApiKeyOperationsResponse,
    } as ListApiKeyOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListApiKeyOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations) {
      obj.operations = message.operations.map((e) =>
        e ? Operation.toJSON(e) : undefined
      );
    } else {
      obj.operations = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListApiKeyOperationsResponse>, I>>(
    object: I
  ): ListApiKeyOperationsResponse {
    const message = {
      ...baseListApiKeyOperationsResponse,
    } as ListApiKeyOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListApiKeyOperationsResponse.$type,
  ListApiKeyOperationsResponse
);

const baseListApiKeyScopesRequest: object = {
  $type: "yandex.cloud.iam.v1.ListApiKeyScopesRequest",
  pageSize: 0,
  pageToken: "",
};

export const ListApiKeyScopesRequest = {
  $type: "yandex.cloud.iam.v1.ListApiKeyScopesRequest" as const,

  encode(
    message: ListApiKeyScopesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pageSize !== 0) {
      writer.uint32(8).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListApiKeyScopesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListApiKeyScopesRequest,
    } as ListApiKeyScopesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pageSize = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.pageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListApiKeyScopesRequest {
    const message = {
      ...baseListApiKeyScopesRequest,
    } as ListApiKeyScopesRequest;
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

  toJSON(message: ListApiKeyScopesRequest): unknown {
    const obj: any = {};
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListApiKeyScopesRequest>, I>>(
    object: I
  ): ListApiKeyScopesRequest {
    const message = {
      ...baseListApiKeyScopesRequest,
    } as ListApiKeyScopesRequest;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListApiKeyScopesRequest.$type, ListApiKeyScopesRequest);

const baseListApiKeyScopesResponse: object = {
  $type: "yandex.cloud.iam.v1.ListApiKeyScopesResponse",
  scopes: "",
  nextPageToken: "",
};

export const ListApiKeyScopesResponse = {
  $type: "yandex.cloud.iam.v1.ListApiKeyScopesResponse" as const,

  encode(
    message: ListApiKeyScopesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.scopes) {
      writer.uint32(10).string(v!);
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListApiKeyScopesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListApiKeyScopesResponse,
    } as ListApiKeyScopesResponse;
    message.scopes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scopes.push(reader.string());
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

  fromJSON(object: any): ListApiKeyScopesResponse {
    const message = {
      ...baseListApiKeyScopesResponse,
    } as ListApiKeyScopesResponse;
    message.scopes = (object.scopes ?? []).map((e: any) => String(e));
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListApiKeyScopesResponse): unknown {
    const obj: any = {};
    if (message.scopes) {
      obj.scopes = message.scopes.map((e) => e);
    } else {
      obj.scopes = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListApiKeyScopesResponse>, I>>(
    object: I
  ): ListApiKeyScopesResponse {
    const message = {
      ...baseListApiKeyScopesResponse,
    } as ListApiKeyScopesResponse;
    message.scopes = object.scopes?.map((e) => e) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListApiKeyScopesResponse.$type,
  ListApiKeyScopesResponse
);

/** A set of methods for managing API keys. */
export const ApiKeyServiceService = {
  /** Retrieves the list of API keys for the specified service account. */
  list: {
    path: "/yandex.cloud.iam.v1.ApiKeyService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListApiKeysRequest) =>
      Buffer.from(ListApiKeysRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListApiKeysRequest.decode(value),
    responseSerialize: (value: ListApiKeysResponse) =>
      Buffer.from(ListApiKeysResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListApiKeysResponse.decode(value),
  },
  /**
   * Returns the specified API key.
   *
   * To get the list of available API keys, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.iam.v1.ApiKeyService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetApiKeyRequest) =>
      Buffer.from(GetApiKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetApiKeyRequest.decode(value),
    responseSerialize: (value: ApiKey) =>
      Buffer.from(ApiKey.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ApiKey.decode(value),
  },
  /** Creates an API key for the specified service account. */
  create: {
    path: "/yandex.cloud.iam.v1.ApiKeyService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateApiKeyRequest) =>
      Buffer.from(CreateApiKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateApiKeyRequest.decode(value),
    responseSerialize: (value: CreateApiKeyResponse) =>
      Buffer.from(CreateApiKeyResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateApiKeyResponse.decode(value),
  },
  /** Updates the specified API key. */
  update: {
    path: "/yandex.cloud.iam.v1.ApiKeyService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateApiKeyRequest) =>
      Buffer.from(UpdateApiKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateApiKeyRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified API key. */
  delete: {
    path: "/yandex.cloud.iam.v1.ApiKeyService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteApiKeyRequest) =>
      Buffer.from(DeleteApiKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteApiKeyRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Retrieves the list of operations for the specified API key. */
  listOperations: {
    path: "/yandex.cloud.iam.v1.ApiKeyService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListApiKeyOperationsRequest) =>
      Buffer.from(ListApiKeyOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListApiKeyOperationsRequest.decode(value),
    responseSerialize: (value: ListApiKeyOperationsResponse) =>
      Buffer.from(ListApiKeyOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListApiKeyOperationsResponse.decode(value),
  },
  /** Retrieves the list of scopes. */
  listScopes: {
    path: "/yandex.cloud.iam.v1.ApiKeyService/ListScopes",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListApiKeyScopesRequest) =>
      Buffer.from(ListApiKeyScopesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListApiKeyScopesRequest.decode(value),
    responseSerialize: (value: ListApiKeyScopesResponse) =>
      Buffer.from(ListApiKeyScopesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListApiKeyScopesResponse.decode(value),
  },
} as const;

export interface ApiKeyServiceServer extends UntypedServiceImplementation {
  /** Retrieves the list of API keys for the specified service account. */
  list: handleUnaryCall<ListApiKeysRequest, ListApiKeysResponse>;
  /**
   * Returns the specified API key.
   *
   * To get the list of available API keys, make a [List] request.
   */
  get: handleUnaryCall<GetApiKeyRequest, ApiKey>;
  /** Creates an API key for the specified service account. */
  create: handleUnaryCall<CreateApiKeyRequest, CreateApiKeyResponse>;
  /** Updates the specified API key. */
  update: handleUnaryCall<UpdateApiKeyRequest, Operation>;
  /** Deletes the specified API key. */
  delete: handleUnaryCall<DeleteApiKeyRequest, Operation>;
  /** Retrieves the list of operations for the specified API key. */
  listOperations: handleUnaryCall<
    ListApiKeyOperationsRequest,
    ListApiKeyOperationsResponse
  >;
  /** Retrieves the list of scopes. */
  listScopes: handleUnaryCall<
    ListApiKeyScopesRequest,
    ListApiKeyScopesResponse
  >;
}

export interface ApiKeyServiceClient extends Client {
  /** Retrieves the list of API keys for the specified service account. */
  list(
    request: ListApiKeysRequest,
    callback: (
      error: ServiceError | null,
      response: ListApiKeysResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListApiKeysRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListApiKeysResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListApiKeysRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListApiKeysResponse
    ) => void
  ): ClientUnaryCall;
  /**
   * Returns the specified API key.
   *
   * To get the list of available API keys, make a [List] request.
   */
  get(
    request: GetApiKeyRequest,
    callback: (error: ServiceError | null, response: ApiKey) => void
  ): ClientUnaryCall;
  get(
    request: GetApiKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ApiKey) => void
  ): ClientUnaryCall;
  get(
    request: GetApiKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ApiKey) => void
  ): ClientUnaryCall;
  /** Creates an API key for the specified service account. */
  create(
    request: CreateApiKeyRequest,
    callback: (
      error: ServiceError | null,
      response: CreateApiKeyResponse
    ) => void
  ): ClientUnaryCall;
  create(
    request: CreateApiKeyRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: CreateApiKeyResponse
    ) => void
  ): ClientUnaryCall;
  create(
    request: CreateApiKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: CreateApiKeyResponse
    ) => void
  ): ClientUnaryCall;
  /** Updates the specified API key. */
  update(
    request: UpdateApiKeyRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateApiKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateApiKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified API key. */
  delete(
    request: DeleteApiKeyRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteApiKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteApiKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Retrieves the list of operations for the specified API key. */
  listOperations(
    request: ListApiKeyOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListApiKeyOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListApiKeyOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListApiKeyOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListApiKeyOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListApiKeyOperationsResponse
    ) => void
  ): ClientUnaryCall;
  /** Retrieves the list of scopes. */
  listScopes(
    request: ListApiKeyScopesRequest,
    callback: (
      error: ServiceError | null,
      response: ListApiKeyScopesResponse
    ) => void
  ): ClientUnaryCall;
  listScopes(
    request: ListApiKeyScopesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListApiKeyScopesResponse
    ) => void
  ): ClientUnaryCall;
  listScopes(
    request: ListApiKeyScopesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListApiKeyScopesResponse
    ) => void
  ): ClientUnaryCall;
}

export const ApiKeyServiceClient = makeGenericClientConstructor(
  ApiKeyServiceService,
  "yandex.cloud.iam.v1.ApiKeyService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): ApiKeyServiceClient;
  service: typeof ApiKeyServiceService;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
