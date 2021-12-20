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
  Key_Algorithm,
  Key,
  key_AlgorithmFromJSON,
  key_AlgorithmToJSON,
} from "../../../../yandex/cloud/iam/v1/key";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.iam.v1";

export enum KeyFormat {
  /** PEM_FILE - Privacy-Enhanced Mail (PEM) format. Default value. */
  PEM_FILE = 0,
  UNRECOGNIZED = -1,
}

export function keyFormatFromJSON(object: any): KeyFormat {
  switch (object) {
    case 0:
    case "PEM_FILE":
      return KeyFormat.PEM_FILE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return KeyFormat.UNRECOGNIZED;
  }
}

export function keyFormatToJSON(object: KeyFormat): string {
  switch (object) {
    case KeyFormat.PEM_FILE:
      return "PEM_FILE";
    default:
      return "UNKNOWN";
  }
}

export interface GetKeyRequest {
  $type: "yandex.cloud.iam.v1.GetKeyRequest";
  /**
   * ID of the Key resource to return.
   * To get the ID use a [KeyService.List] request.
   */
  keyId: string;
  /** Output format of the key. */
  format: KeyFormat;
}

export interface ListKeysRequest {
  $type: "yandex.cloud.iam.v1.ListKeysRequest";
  /** Output format of the key. */
  format: KeyFormat;
  /**
   * ID of the service account to list key pairs for.
   * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
   * If not specified, it defaults to the subject that made the request.
   */
  serviceAccountId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListKeysResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListKeysResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListKeysResponse {
  $type: "yandex.cloud.iam.v1.ListKeysResponse";
  /** List of Key resources. */
  keys: Key[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListKeysRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListKeysRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateKeyRequest {
  $type: "yandex.cloud.iam.v1.CreateKeyRequest";
  /**
   * ID of the service account to create a key pair for.
   * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
   * If not specified, it defaults to the subject that made the request.
   */
  serviceAccountId: string;
  /** Description of the key pair. */
  description: string;
  /** Output format of the key. */
  format: KeyFormat;
  /** An algorithm used to generate a key pair of the Key resource. */
  keyAlgorithm: Key_Algorithm;
}

export interface CreateKeyResponse {
  $type: "yandex.cloud.iam.v1.CreateKeyResponse";
  /** Key resource. */
  key?: Key;
  /**
   * A private key of the Key resource.
   * This key must be stored securely.
   */
  privateKey: string;
}

export interface UpdateKeyRequest {
  $type: "yandex.cloud.iam.v1.UpdateKeyRequest";
  /**
   * ID of the Key resource to update.
   * To get key pair ID, use a [KeyService.List] request.
   */
  keyId: string;
  /** Field mask that specifies which fields of the Key resource are going to be updated. */
  updateMask?: FieldMask;
  /** Description of the key pair. */
  description: string;
}

export interface UpdateKeyMetadata {
  $type: "yandex.cloud.iam.v1.UpdateKeyMetadata";
  /** ID of the Key resource that is being updated. */
  keyId: string;
}

export interface DeleteKeyRequest {
  $type: "yandex.cloud.iam.v1.DeleteKeyRequest";
  /**
   * ID of the key to delete.
   * To get key ID use a [KeyService.List] request.
   */
  keyId: string;
}

export interface DeleteKeyMetadata {
  $type: "yandex.cloud.iam.v1.DeleteKeyMetadata";
  /** ID of the key that is being deleted. */
  keyId: string;
}

export interface ListKeyOperationsRequest {
  $type: "yandex.cloud.iam.v1.ListKeyOperationsRequest";
  /** ID of the key to list operations for. */
  keyId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListKeyOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListKeyOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListKeyOperationsResponse {
  $type: "yandex.cloud.iam.v1.ListKeyOperationsResponse";
  /** List of operations for the specified key. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListKeyOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListKeyOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

const baseGetKeyRequest: object = {
  $type: "yandex.cloud.iam.v1.GetKeyRequest",
  keyId: "",
  format: 0,
};

export const GetKeyRequest = {
  $type: "yandex.cloud.iam.v1.GetKeyRequest" as const,

  encode(
    message: GetKeyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.format !== 0) {
      writer.uint32(16).int32(message.format);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetKeyRequest } as GetKeyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;
        case 2:
          message.format = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetKeyRequest {
    const message = { ...baseGetKeyRequest } as GetKeyRequest;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    message.format =
      object.format !== undefined && object.format !== null
        ? keyFormatFromJSON(object.format)
        : 0;
    return message;
  },

  toJSON(message: GetKeyRequest): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.format !== undefined &&
      (obj.format = keyFormatToJSON(message.format));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetKeyRequest>, I>>(
    object: I
  ): GetKeyRequest {
    const message = { ...baseGetKeyRequest } as GetKeyRequest;
    message.keyId = object.keyId ?? "";
    message.format = object.format ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GetKeyRequest.$type, GetKeyRequest);

const baseListKeysRequest: object = {
  $type: "yandex.cloud.iam.v1.ListKeysRequest",
  format: 0,
  serviceAccountId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListKeysRequest = {
  $type: "yandex.cloud.iam.v1.ListKeysRequest" as const,

  encode(
    message: ListKeysRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.format !== 0) {
      writer.uint32(8).int32(message.format);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(18).string(message.serviceAccountId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(34).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListKeysRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListKeysRequest } as ListKeysRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.format = reader.int32() as any;
          break;
        case 2:
          message.serviceAccountId = reader.string();
          break;
        case 3:
          message.pageSize = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.pageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListKeysRequest {
    const message = { ...baseListKeysRequest } as ListKeysRequest;
    message.format =
      object.format !== undefined && object.format !== null
        ? keyFormatFromJSON(object.format)
        : 0;
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

  toJSON(message: ListKeysRequest): unknown {
    const obj: any = {};
    message.format !== undefined &&
      (obj.format = keyFormatToJSON(message.format));
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListKeysRequest>, I>>(
    object: I
  ): ListKeysRequest {
    const message = { ...baseListKeysRequest } as ListKeysRequest;
    message.format = object.format ?? 0;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListKeysRequest.$type, ListKeysRequest);

const baseListKeysResponse: object = {
  $type: "yandex.cloud.iam.v1.ListKeysResponse",
  nextPageToken: "",
};

export const ListKeysResponse = {
  $type: "yandex.cloud.iam.v1.ListKeysResponse" as const,

  encode(
    message: ListKeysResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.keys) {
      Key.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListKeysResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListKeysResponse } as ListKeysResponse;
    message.keys = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keys.push(Key.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListKeysResponse {
    const message = { ...baseListKeysResponse } as ListKeysResponse;
    message.keys = (object.keys ?? []).map((e: any) => Key.fromJSON(e));
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListKeysResponse): unknown {
    const obj: any = {};
    if (message.keys) {
      obj.keys = message.keys.map((e) => (e ? Key.toJSON(e) : undefined));
    } else {
      obj.keys = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListKeysResponse>, I>>(
    object: I
  ): ListKeysResponse {
    const message = { ...baseListKeysResponse } as ListKeysResponse;
    message.keys = object.keys?.map((e) => Key.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListKeysResponse.$type, ListKeysResponse);

const baseCreateKeyRequest: object = {
  $type: "yandex.cloud.iam.v1.CreateKeyRequest",
  serviceAccountId: "",
  description: "",
  format: 0,
  keyAlgorithm: 0,
};

export const CreateKeyRequest = {
  $type: "yandex.cloud.iam.v1.CreateKeyRequest" as const,

  encode(
    message: CreateKeyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.serviceAccountId !== "") {
      writer.uint32(10).string(message.serviceAccountId);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.format !== 0) {
      writer.uint32(24).int32(message.format);
    }
    if (message.keyAlgorithm !== 0) {
      writer.uint32(32).int32(message.keyAlgorithm);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateKeyRequest } as CreateKeyRequest;
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
          message.format = reader.int32() as any;
          break;
        case 4:
          message.keyAlgorithm = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateKeyRequest {
    const message = { ...baseCreateKeyRequest } as CreateKeyRequest;
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.format =
      object.format !== undefined && object.format !== null
        ? keyFormatFromJSON(object.format)
        : 0;
    message.keyAlgorithm =
      object.keyAlgorithm !== undefined && object.keyAlgorithm !== null
        ? key_AlgorithmFromJSON(object.keyAlgorithm)
        : 0;
    return message;
  },

  toJSON(message: CreateKeyRequest): unknown {
    const obj: any = {};
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.description !== undefined &&
      (obj.description = message.description);
    message.format !== undefined &&
      (obj.format = keyFormatToJSON(message.format));
    message.keyAlgorithm !== undefined &&
      (obj.keyAlgorithm = key_AlgorithmToJSON(message.keyAlgorithm));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateKeyRequest>, I>>(
    object: I
  ): CreateKeyRequest {
    const message = { ...baseCreateKeyRequest } as CreateKeyRequest;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.description = object.description ?? "";
    message.format = object.format ?? 0;
    message.keyAlgorithm = object.keyAlgorithm ?? 0;
    return message;
  },
};

messageTypeRegistry.set(CreateKeyRequest.$type, CreateKeyRequest);

const baseCreateKeyResponse: object = {
  $type: "yandex.cloud.iam.v1.CreateKeyResponse",
  privateKey: "",
};

export const CreateKeyResponse = {
  $type: "yandex.cloud.iam.v1.CreateKeyResponse" as const,

  encode(
    message: CreateKeyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== undefined) {
      Key.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.privateKey !== "") {
      writer.uint32(18).string(message.privateKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateKeyResponse } as CreateKeyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = Key.decode(reader, reader.uint32());
          break;
        case 2:
          message.privateKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateKeyResponse {
    const message = { ...baseCreateKeyResponse } as CreateKeyResponse;
    message.key =
      object.key !== undefined && object.key !== null
        ? Key.fromJSON(object.key)
        : undefined;
    message.privateKey =
      object.privateKey !== undefined && object.privateKey !== null
        ? String(object.privateKey)
        : "";
    return message;
  },

  toJSON(message: CreateKeyResponse): unknown {
    const obj: any = {};
    message.key !== undefined &&
      (obj.key = message.key ? Key.toJSON(message.key) : undefined);
    message.privateKey !== undefined && (obj.privateKey = message.privateKey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateKeyResponse>, I>>(
    object: I
  ): CreateKeyResponse {
    const message = { ...baseCreateKeyResponse } as CreateKeyResponse;
    message.key =
      object.key !== undefined && object.key !== null
        ? Key.fromPartial(object.key)
        : undefined;
    message.privateKey = object.privateKey ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateKeyResponse.$type, CreateKeyResponse);

const baseUpdateKeyRequest: object = {
  $type: "yandex.cloud.iam.v1.UpdateKeyRequest",
  keyId: "",
  description: "",
};

export const UpdateKeyRequest = {
  $type: "yandex.cloud.iam.v1.UpdateKeyRequest" as const,

  encode(
    message: UpdateKeyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateKeyRequest } as UpdateKeyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
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

  fromJSON(object: any): UpdateKeyRequest {
    const message = { ...baseUpdateKeyRequest } as UpdateKeyRequest;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
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

  toJSON(message: UpdateKeyRequest): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateKeyRequest>, I>>(
    object: I
  ): UpdateKeyRequest {
    const message = { ...baseUpdateKeyRequest } as UpdateKeyRequest;
    message.keyId = object.keyId ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.description = object.description ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateKeyRequest.$type, UpdateKeyRequest);

const baseUpdateKeyMetadata: object = {
  $type: "yandex.cloud.iam.v1.UpdateKeyMetadata",
  keyId: "",
};

export const UpdateKeyMetadata = {
  $type: "yandex.cloud.iam.v1.UpdateKeyMetadata" as const,

  encode(
    message: UpdateKeyMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateKeyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateKeyMetadata } as UpdateKeyMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateKeyMetadata {
    const message = { ...baseUpdateKeyMetadata } as UpdateKeyMetadata;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    return message;
  },

  toJSON(message: UpdateKeyMetadata): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateKeyMetadata>, I>>(
    object: I
  ): UpdateKeyMetadata {
    const message = { ...baseUpdateKeyMetadata } as UpdateKeyMetadata;
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateKeyMetadata.$type, UpdateKeyMetadata);

const baseDeleteKeyRequest: object = {
  $type: "yandex.cloud.iam.v1.DeleteKeyRequest",
  keyId: "",
};

export const DeleteKeyRequest = {
  $type: "yandex.cloud.iam.v1.DeleteKeyRequest" as const,

  encode(
    message: DeleteKeyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteKeyRequest } as DeleteKeyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteKeyRequest {
    const message = { ...baseDeleteKeyRequest } as DeleteKeyRequest;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    return message;
  },

  toJSON(message: DeleteKeyRequest): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteKeyRequest>, I>>(
    object: I
  ): DeleteKeyRequest {
    const message = { ...baseDeleteKeyRequest } as DeleteKeyRequest;
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteKeyRequest.$type, DeleteKeyRequest);

const baseDeleteKeyMetadata: object = {
  $type: "yandex.cloud.iam.v1.DeleteKeyMetadata",
  keyId: "",
};

export const DeleteKeyMetadata = {
  $type: "yandex.cloud.iam.v1.DeleteKeyMetadata" as const,

  encode(
    message: DeleteKeyMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteKeyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteKeyMetadata } as DeleteKeyMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteKeyMetadata {
    const message = { ...baseDeleteKeyMetadata } as DeleteKeyMetadata;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    return message;
  },

  toJSON(message: DeleteKeyMetadata): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteKeyMetadata>, I>>(
    object: I
  ): DeleteKeyMetadata {
    const message = { ...baseDeleteKeyMetadata } as DeleteKeyMetadata;
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteKeyMetadata.$type, DeleteKeyMetadata);

const baseListKeyOperationsRequest: object = {
  $type: "yandex.cloud.iam.v1.ListKeyOperationsRequest",
  keyId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListKeyOperationsRequest = {
  $type: "yandex.cloud.iam.v1.ListKeyOperationsRequest" as const,

  encode(
    message: ListKeyOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
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
  ): ListKeyOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListKeyOperationsRequest,
    } as ListKeyOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
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

  fromJSON(object: any): ListKeyOperationsRequest {
    const message = {
      ...baseListKeyOperationsRequest,
    } as ListKeyOperationsRequest;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
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

  toJSON(message: ListKeyOperationsRequest): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListKeyOperationsRequest>, I>>(
    object: I
  ): ListKeyOperationsRequest {
    const message = {
      ...baseListKeyOperationsRequest,
    } as ListKeyOperationsRequest;
    message.keyId = object.keyId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListKeyOperationsRequest.$type,
  ListKeyOperationsRequest
);

const baseListKeyOperationsResponse: object = {
  $type: "yandex.cloud.iam.v1.ListKeyOperationsResponse",
  nextPageToken: "",
};

export const ListKeyOperationsResponse = {
  $type: "yandex.cloud.iam.v1.ListKeyOperationsResponse" as const,

  encode(
    message: ListKeyOperationsResponse,
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
  ): ListKeyOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListKeyOperationsResponse,
    } as ListKeyOperationsResponse;
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

  fromJSON(object: any): ListKeyOperationsResponse {
    const message = {
      ...baseListKeyOperationsResponse,
    } as ListKeyOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListKeyOperationsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<ListKeyOperationsResponse>, I>>(
    object: I
  ): ListKeyOperationsResponse {
    const message = {
      ...baseListKeyOperationsResponse,
    } as ListKeyOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListKeyOperationsResponse.$type,
  ListKeyOperationsResponse
);

/** A set of methods for managing Key resources. */
export const KeyServiceService = {
  /**
   * Returns the specified Key resource.
   *
   * To get the list of available Key resources, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.iam.v1.KeyService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetKeyRequest) =>
      Buffer.from(GetKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetKeyRequest.decode(value),
    responseSerialize: (value: Key) => Buffer.from(Key.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Key.decode(value),
  },
  /** Retrieves the list of Key resources for the specified service account. */
  list: {
    path: "/yandex.cloud.iam.v1.KeyService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListKeysRequest) =>
      Buffer.from(ListKeysRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListKeysRequest.decode(value),
    responseSerialize: (value: ListKeysResponse) =>
      Buffer.from(ListKeysResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListKeysResponse.decode(value),
  },
  /** Creates a key pair for the specified service account. */
  create: {
    path: "/yandex.cloud.iam.v1.KeyService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateKeyRequest) =>
      Buffer.from(CreateKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateKeyRequest.decode(value),
    responseSerialize: (value: CreateKeyResponse) =>
      Buffer.from(CreateKeyResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateKeyResponse.decode(value),
  },
  /** Updates the specified key pair. */
  update: {
    path: "/yandex.cloud.iam.v1.KeyService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateKeyRequest) =>
      Buffer.from(UpdateKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateKeyRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified key pair. */
  delete: {
    path: "/yandex.cloud.iam.v1.KeyService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteKeyRequest) =>
      Buffer.from(DeleteKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteKeyRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified key. */
  listOperations: {
    path: "/yandex.cloud.iam.v1.KeyService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListKeyOperationsRequest) =>
      Buffer.from(ListKeyOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListKeyOperationsRequest.decode(value),
    responseSerialize: (value: ListKeyOperationsResponse) =>
      Buffer.from(ListKeyOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListKeyOperationsResponse.decode(value),
  },
} as const;

export interface KeyServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified Key resource.
   *
   * To get the list of available Key resources, make a [List] request.
   */
  get: handleUnaryCall<GetKeyRequest, Key>;
  /** Retrieves the list of Key resources for the specified service account. */
  list: handleUnaryCall<ListKeysRequest, ListKeysResponse>;
  /** Creates a key pair for the specified service account. */
  create: handleUnaryCall<CreateKeyRequest, CreateKeyResponse>;
  /** Updates the specified key pair. */
  update: handleUnaryCall<UpdateKeyRequest, Operation>;
  /** Deletes the specified key pair. */
  delete: handleUnaryCall<DeleteKeyRequest, Operation>;
  /** Lists operations for the specified key. */
  listOperations: handleUnaryCall<
    ListKeyOperationsRequest,
    ListKeyOperationsResponse
  >;
}

export interface KeyServiceClient extends Client {
  /**
   * Returns the specified Key resource.
   *
   * To get the list of available Key resources, make a [List] request.
   */
  get(
    request: GetKeyRequest,
    callback: (error: ServiceError | null, response: Key) => void
  ): ClientUnaryCall;
  get(
    request: GetKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Key) => void
  ): ClientUnaryCall;
  get(
    request: GetKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Key) => void
  ): ClientUnaryCall;
  /** Retrieves the list of Key resources for the specified service account. */
  list(
    request: ListKeysRequest,
    callback: (error: ServiceError | null, response: ListKeysResponse) => void
  ): ClientUnaryCall;
  list(
    request: ListKeysRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListKeysResponse) => void
  ): ClientUnaryCall;
  list(
    request: ListKeysRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListKeysResponse) => void
  ): ClientUnaryCall;
  /** Creates a key pair for the specified service account. */
  create(
    request: CreateKeyRequest,
    callback: (error: ServiceError | null, response: CreateKeyResponse) => void
  ): ClientUnaryCall;
  create(
    request: CreateKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateKeyResponse) => void
  ): ClientUnaryCall;
  create(
    request: CreateKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateKeyResponse) => void
  ): ClientUnaryCall;
  /** Updates the specified key pair. */
  update(
    request: UpdateKeyRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified key pair. */
  delete(
    request: DeleteKeyRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified key. */
  listOperations(
    request: ListKeyOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListKeyOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListKeyOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListKeyOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListKeyOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListKeyOperationsResponse
    ) => void
  ): ClientUnaryCall;
}

export const KeyServiceClient = makeGenericClientConstructor(
  KeyServiceService,
  "yandex.cloud.iam.v1.KeyService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): KeyServiceClient;
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
