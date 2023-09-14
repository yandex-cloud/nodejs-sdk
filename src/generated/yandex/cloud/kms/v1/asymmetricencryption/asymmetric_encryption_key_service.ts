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
  AsymmetricEncryptionAlgorithm,
  AsymmetricEncryptionKey_Status,
  AsymmetricEncryptionKey,
  asymmetricEncryptionAlgorithmFromJSON,
  asymmetricEncryptionAlgorithmToJSON,
  asymmetricEncryptionKey_StatusFromJSON,
  asymmetricEncryptionKey_StatusToJSON,
} from "../../../../../yandex/cloud/kms/v1/asymmetricencryption/asymmetric_encryption_key";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
import {
  ListAccessBindingsRequest,
  ListAccessBindingsResponse,
  SetAccessBindingsRequest,
  UpdateAccessBindingsRequest,
} from "../../../../../yandex/cloud/access/access";

export const protobufPackage = "yandex.cloud.kms.v1.asymmetricencryption";

export interface CreateAsymmetricEncryptionKeyRequest {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.CreateAsymmetricEncryptionKeyRequest";
  /** ID of the folder to create a asymmetric KMS key in. */
  folderId: string;
  /** Name of the key. */
  name: string;
  /** Description of the key. */
  description: string;
  /**
   * Custom labels for the asymmetric KMS key as `key:value` pairs. Maximum 64 per key.
   * For example, `"project": "mvp"` or `"source": "dictionary"`.
   */
  labels: { [key: string]: string };
  /** Asymmetric encryption algorithm. */
  encryptionAlgorithm: AsymmetricEncryptionAlgorithm;
  /** Flag that inhibits deletion of the symmetric KMS key */
  deletionProtection: boolean;
}

export interface CreateAsymmetricEncryptionKeyRequest_LabelsEntry {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.CreateAsymmetricEncryptionKeyRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateAsymmetricEncryptionKeyMetadata {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.CreateAsymmetricEncryptionKeyMetadata";
  /** ID of the key being created. */
  keyId: string;
}

export interface GetAsymmetricEncryptionKeyRequest {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.GetAsymmetricEncryptionKeyRequest";
  /**
   * ID of the asymmetric KMS key to return.
   * To get the ID of an asymmetric KMS key use a [AsymmetricEncryptionKeyService.List] request.
   */
  keyId: string;
}

export interface ListAsymmetricEncryptionKeysRequest {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.ListAsymmetricEncryptionKeysRequest";
  /** ID of the folder to list asymmetric KMS keys in. */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListAsymmetricEncryptionKeysResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListAsymmetricEncryptionKeysResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListAsymmetricEncryptionKeysResponse {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.ListAsymmetricEncryptionKeysResponse";
  /** List of asymmetric KMS keys in the specified folder. */
  keys: AsymmetricEncryptionKey[];
  /**
   * This token allows you to get the next page of results for list requests. If the number
   * of results is greater than the specified [ListAsymmetricEncryptionKeysRequest.page_size], use
   * the [next_page_token] as the value for the [ListAsymmetricEncryptionKeysRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface UpdateAsymmetricEncryptionKeyRequest {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.UpdateAsymmetricEncryptionKeyRequest";
  /**
   * ID of the asymmetric KMS key to update.
   * To get the ID of a asymmetric KMS key use a [AsymmetricEncryptionKeyService.List] request.
   */
  keyId: string;
  /** Field mask that specifies which attributes of the asymmetric KMS key are going to be updated. */
  updateMask?: FieldMask;
  /** New name for the asymmetric KMS key. */
  name: string;
  /** New description for the asymmetric KMS key. */
  description: string;
  /**
   * New status for the asymmetric KMS key.
   * Using the [AsymmetricEncryptionKeyService.Update] method you can only set ACTIVE or INACTIVE status.
   */
  status: AsymmetricEncryptionKey_Status;
  /** Custom labels for the asymmetric KMS key as `key:value` pairs. Maximum 64 per key. */
  labels: { [key: string]: string };
  /** Flag that inhibits deletion of the asymmetric KMS key */
  deletionProtection: boolean;
}

export interface UpdateAsymmetricEncryptionKeyRequest_LabelsEntry {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.UpdateAsymmetricEncryptionKeyRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateAsymmetricEncryptionKeyMetadata {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.UpdateAsymmetricEncryptionKeyMetadata";
  /** ID of the key being updated. */
  keyId: string;
}

export interface DeleteAsymmetricEncryptionKeyRequest {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.DeleteAsymmetricEncryptionKeyRequest";
  /** ID of the key to be deleted. */
  keyId: string;
}

export interface DeleteAsymmetricEncryptionKeyMetadata {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.DeleteAsymmetricEncryptionKeyMetadata";
  /** ID of the key being deleted. */
  keyId: string;
}

export interface ListAsymmetricEncryptionKeyOperationsRequest {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.ListAsymmetricEncryptionKeyOperationsRequest";
  /**
   * ID of the symmetric KMS key to get operations for.
   *
   * To get the key ID, use a [AsymmetricKeyEncryptionService.List] request.
   */
  keyId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than [page_size], the service returns a [ListAsymmetricEncryptionKeyOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListAsymmetricKeyOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListAsymmetricEncryptionKeyOperationsResponse {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.ListAsymmetricEncryptionKeyOperationsResponse";
  /** List of operations for the specified key. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListAsymmetricEncryptionKeyOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListAsymmetricEncryptionKeyOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

const baseCreateAsymmetricEncryptionKeyRequest: object = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.CreateAsymmetricEncryptionKeyRequest",
  folderId: "",
  name: "",
  description: "",
  encryptionAlgorithm: 0,
  deletionProtection: false,
};

export const CreateAsymmetricEncryptionKeyRequest = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.CreateAsymmetricEncryptionKeyRequest" as const,

  encode(
    message: CreateAsymmetricEncryptionKeyRequest,
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
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateAsymmetricEncryptionKeyRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.kms.v1.asymmetricencryption.CreateAsymmetricEncryptionKeyRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.encryptionAlgorithm !== 0) {
      writer.uint32(40).int32(message.encryptionAlgorithm);
    }
    if (message.deletionProtection === true) {
      writer.uint32(48).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateAsymmetricEncryptionKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateAsymmetricEncryptionKeyRequest,
    } as CreateAsymmetricEncryptionKeyRequest;
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
          const entry4 =
            CreateAsymmetricEncryptionKeyRequest_LabelsEntry.decode(
              reader,
              reader.uint32()
            );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.encryptionAlgorithm = reader.int32() as any;
          break;
        case 6:
          message.deletionProtection = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateAsymmetricEncryptionKeyRequest {
    const message = {
      ...baseCreateAsymmetricEncryptionKeyRequest,
    } as CreateAsymmetricEncryptionKeyRequest;
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
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.encryptionAlgorithm =
      object.encryptionAlgorithm !== undefined &&
      object.encryptionAlgorithm !== null
        ? asymmetricEncryptionAlgorithmFromJSON(object.encryptionAlgorithm)
        : 0;
    message.deletionProtection =
      object.deletionProtection !== undefined &&
      object.deletionProtection !== null
        ? Boolean(object.deletionProtection)
        : false;
    return message;
  },

  toJSON(message: CreateAsymmetricEncryptionKeyRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.encryptionAlgorithm !== undefined &&
      (obj.encryptionAlgorithm = asymmetricEncryptionAlgorithmToJSON(
        message.encryptionAlgorithm
      ));
    message.deletionProtection !== undefined &&
      (obj.deletionProtection = message.deletionProtection);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateAsymmetricEncryptionKeyRequest>, I>
  >(object: I): CreateAsymmetricEncryptionKeyRequest {
    const message = {
      ...baseCreateAsymmetricEncryptionKeyRequest,
    } as CreateAsymmetricEncryptionKeyRequest;
    message.folderId = object.folderId ?? "";
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
    message.encryptionAlgorithm = object.encryptionAlgorithm ?? 0;
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(
  CreateAsymmetricEncryptionKeyRequest.$type,
  CreateAsymmetricEncryptionKeyRequest
);

const baseCreateAsymmetricEncryptionKeyRequest_LabelsEntry: object = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.CreateAsymmetricEncryptionKeyRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateAsymmetricEncryptionKeyRequest_LabelsEntry = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.CreateAsymmetricEncryptionKeyRequest.LabelsEntry" as const,

  encode(
    message: CreateAsymmetricEncryptionKeyRequest_LabelsEntry,
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
  ): CreateAsymmetricEncryptionKeyRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateAsymmetricEncryptionKeyRequest_LabelsEntry,
    } as CreateAsymmetricEncryptionKeyRequest_LabelsEntry;
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

  fromJSON(object: any): CreateAsymmetricEncryptionKeyRequest_LabelsEntry {
    const message = {
      ...baseCreateAsymmetricEncryptionKeyRequest_LabelsEntry,
    } as CreateAsymmetricEncryptionKeyRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateAsymmetricEncryptionKeyRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<CreateAsymmetricEncryptionKeyRequest_LabelsEntry>,
      I
    >
  >(object: I): CreateAsymmetricEncryptionKeyRequest_LabelsEntry {
    const message = {
      ...baseCreateAsymmetricEncryptionKeyRequest_LabelsEntry,
    } as CreateAsymmetricEncryptionKeyRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateAsymmetricEncryptionKeyRequest_LabelsEntry.$type,
  CreateAsymmetricEncryptionKeyRequest_LabelsEntry
);

const baseCreateAsymmetricEncryptionKeyMetadata: object = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.CreateAsymmetricEncryptionKeyMetadata",
  keyId: "",
};

export const CreateAsymmetricEncryptionKeyMetadata = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.CreateAsymmetricEncryptionKeyMetadata" as const,

  encode(
    message: CreateAsymmetricEncryptionKeyMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateAsymmetricEncryptionKeyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateAsymmetricEncryptionKeyMetadata,
    } as CreateAsymmetricEncryptionKeyMetadata;
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

  fromJSON(object: any): CreateAsymmetricEncryptionKeyMetadata {
    const message = {
      ...baseCreateAsymmetricEncryptionKeyMetadata,
    } as CreateAsymmetricEncryptionKeyMetadata;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    return message;
  },

  toJSON(message: CreateAsymmetricEncryptionKeyMetadata): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateAsymmetricEncryptionKeyMetadata>, I>
  >(object: I): CreateAsymmetricEncryptionKeyMetadata {
    const message = {
      ...baseCreateAsymmetricEncryptionKeyMetadata,
    } as CreateAsymmetricEncryptionKeyMetadata;
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateAsymmetricEncryptionKeyMetadata.$type,
  CreateAsymmetricEncryptionKeyMetadata
);

const baseGetAsymmetricEncryptionKeyRequest: object = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.GetAsymmetricEncryptionKeyRequest",
  keyId: "",
};

export const GetAsymmetricEncryptionKeyRequest = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.GetAsymmetricEncryptionKeyRequest" as const,

  encode(
    message: GetAsymmetricEncryptionKeyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetAsymmetricEncryptionKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetAsymmetricEncryptionKeyRequest,
    } as GetAsymmetricEncryptionKeyRequest;
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

  fromJSON(object: any): GetAsymmetricEncryptionKeyRequest {
    const message = {
      ...baseGetAsymmetricEncryptionKeyRequest,
    } as GetAsymmetricEncryptionKeyRequest;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    return message;
  },

  toJSON(message: GetAsymmetricEncryptionKeyRequest): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetAsymmetricEncryptionKeyRequest>, I>
  >(object: I): GetAsymmetricEncryptionKeyRequest {
    const message = {
      ...baseGetAsymmetricEncryptionKeyRequest,
    } as GetAsymmetricEncryptionKeyRequest;
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  GetAsymmetricEncryptionKeyRequest.$type,
  GetAsymmetricEncryptionKeyRequest
);

const baseListAsymmetricEncryptionKeysRequest: object = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.ListAsymmetricEncryptionKeysRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListAsymmetricEncryptionKeysRequest = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.ListAsymmetricEncryptionKeysRequest" as const,

  encode(
    message: ListAsymmetricEncryptionKeysRequest,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListAsymmetricEncryptionKeysRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListAsymmetricEncryptionKeysRequest,
    } as ListAsymmetricEncryptionKeysRequest;
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

  fromJSON(object: any): ListAsymmetricEncryptionKeysRequest {
    const message = {
      ...baseListAsymmetricEncryptionKeysRequest,
    } as ListAsymmetricEncryptionKeysRequest;
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

  toJSON(message: ListAsymmetricEncryptionKeysRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListAsymmetricEncryptionKeysRequest>, I>
  >(object: I): ListAsymmetricEncryptionKeysRequest {
    const message = {
      ...baseListAsymmetricEncryptionKeysRequest,
    } as ListAsymmetricEncryptionKeysRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListAsymmetricEncryptionKeysRequest.$type,
  ListAsymmetricEncryptionKeysRequest
);

const baseListAsymmetricEncryptionKeysResponse: object = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.ListAsymmetricEncryptionKeysResponse",
  nextPageToken: "",
};

export const ListAsymmetricEncryptionKeysResponse = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.ListAsymmetricEncryptionKeysResponse" as const,

  encode(
    message: ListAsymmetricEncryptionKeysResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.keys) {
      AsymmetricEncryptionKey.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListAsymmetricEncryptionKeysResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListAsymmetricEncryptionKeysResponse,
    } as ListAsymmetricEncryptionKeysResponse;
    message.keys = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keys.push(
            AsymmetricEncryptionKey.decode(reader, reader.uint32())
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

  fromJSON(object: any): ListAsymmetricEncryptionKeysResponse {
    const message = {
      ...baseListAsymmetricEncryptionKeysResponse,
    } as ListAsymmetricEncryptionKeysResponse;
    message.keys = (object.keys ?? []).map((e: any) =>
      AsymmetricEncryptionKey.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListAsymmetricEncryptionKeysResponse): unknown {
    const obj: any = {};
    if (message.keys) {
      obj.keys = message.keys.map((e) =>
        e ? AsymmetricEncryptionKey.toJSON(e) : undefined
      );
    } else {
      obj.keys = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListAsymmetricEncryptionKeysResponse>, I>
  >(object: I): ListAsymmetricEncryptionKeysResponse {
    const message = {
      ...baseListAsymmetricEncryptionKeysResponse,
    } as ListAsymmetricEncryptionKeysResponse;
    message.keys =
      object.keys?.map((e) => AsymmetricEncryptionKey.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListAsymmetricEncryptionKeysResponse.$type,
  ListAsymmetricEncryptionKeysResponse
);

const baseUpdateAsymmetricEncryptionKeyRequest: object = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.UpdateAsymmetricEncryptionKeyRequest",
  keyId: "",
  name: "",
  description: "",
  status: 0,
  deletionProtection: false,
};

export const UpdateAsymmetricEncryptionKeyRequest = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.UpdateAsymmetricEncryptionKeyRequest" as const,

  encode(
    message: UpdateAsymmetricEncryptionKeyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
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
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateAsymmetricEncryptionKeyRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.kms.v1.asymmetricencryption.UpdateAsymmetricEncryptionKeyRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
      ).ldelim();
    });
    if (message.deletionProtection === true) {
      writer.uint32(56).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateAsymmetricEncryptionKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateAsymmetricEncryptionKeyRequest,
    } as UpdateAsymmetricEncryptionKeyRequest;
    message.labels = {};
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
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.status = reader.int32() as any;
          break;
        case 6:
          const entry6 =
            UpdateAsymmetricEncryptionKeyRequest_LabelsEntry.decode(
              reader,
              reader.uint32()
            );
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.deletionProtection = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateAsymmetricEncryptionKeyRequest {
    const message = {
      ...baseUpdateAsymmetricEncryptionKeyRequest,
    } as UpdateAsymmetricEncryptionKeyRequest;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
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
    message.status =
      object.status !== undefined && object.status !== null
        ? asymmetricEncryptionKey_StatusFromJSON(object.status)
        : 0;
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.deletionProtection =
      object.deletionProtection !== undefined &&
      object.deletionProtection !== null
        ? Boolean(object.deletionProtection)
        : false;
    return message;
  },

  toJSON(message: UpdateAsymmetricEncryptionKeyRequest): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.status !== undefined &&
      (obj.status = asymmetricEncryptionKey_StatusToJSON(message.status));
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.deletionProtection !== undefined &&
      (obj.deletionProtection = message.deletionProtection);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateAsymmetricEncryptionKeyRequest>, I>
  >(object: I): UpdateAsymmetricEncryptionKeyRequest {
    const message = {
      ...baseUpdateAsymmetricEncryptionKeyRequest,
    } as UpdateAsymmetricEncryptionKeyRequest;
    message.keyId = object.keyId ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.status = object.status ?? 0;
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(
  UpdateAsymmetricEncryptionKeyRequest.$type,
  UpdateAsymmetricEncryptionKeyRequest
);

const baseUpdateAsymmetricEncryptionKeyRequest_LabelsEntry: object = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.UpdateAsymmetricEncryptionKeyRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateAsymmetricEncryptionKeyRequest_LabelsEntry = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.UpdateAsymmetricEncryptionKeyRequest.LabelsEntry" as const,

  encode(
    message: UpdateAsymmetricEncryptionKeyRequest_LabelsEntry,
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
  ): UpdateAsymmetricEncryptionKeyRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateAsymmetricEncryptionKeyRequest_LabelsEntry,
    } as UpdateAsymmetricEncryptionKeyRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateAsymmetricEncryptionKeyRequest_LabelsEntry {
    const message = {
      ...baseUpdateAsymmetricEncryptionKeyRequest_LabelsEntry,
    } as UpdateAsymmetricEncryptionKeyRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateAsymmetricEncryptionKeyRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<UpdateAsymmetricEncryptionKeyRequest_LabelsEntry>,
      I
    >
  >(object: I): UpdateAsymmetricEncryptionKeyRequest_LabelsEntry {
    const message = {
      ...baseUpdateAsymmetricEncryptionKeyRequest_LabelsEntry,
    } as UpdateAsymmetricEncryptionKeyRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateAsymmetricEncryptionKeyRequest_LabelsEntry.$type,
  UpdateAsymmetricEncryptionKeyRequest_LabelsEntry
);

const baseUpdateAsymmetricEncryptionKeyMetadata: object = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.UpdateAsymmetricEncryptionKeyMetadata",
  keyId: "",
};

export const UpdateAsymmetricEncryptionKeyMetadata = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.UpdateAsymmetricEncryptionKeyMetadata" as const,

  encode(
    message: UpdateAsymmetricEncryptionKeyMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateAsymmetricEncryptionKeyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateAsymmetricEncryptionKeyMetadata,
    } as UpdateAsymmetricEncryptionKeyMetadata;
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

  fromJSON(object: any): UpdateAsymmetricEncryptionKeyMetadata {
    const message = {
      ...baseUpdateAsymmetricEncryptionKeyMetadata,
    } as UpdateAsymmetricEncryptionKeyMetadata;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    return message;
  },

  toJSON(message: UpdateAsymmetricEncryptionKeyMetadata): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateAsymmetricEncryptionKeyMetadata>, I>
  >(object: I): UpdateAsymmetricEncryptionKeyMetadata {
    const message = {
      ...baseUpdateAsymmetricEncryptionKeyMetadata,
    } as UpdateAsymmetricEncryptionKeyMetadata;
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateAsymmetricEncryptionKeyMetadata.$type,
  UpdateAsymmetricEncryptionKeyMetadata
);

const baseDeleteAsymmetricEncryptionKeyRequest: object = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.DeleteAsymmetricEncryptionKeyRequest",
  keyId: "",
};

export const DeleteAsymmetricEncryptionKeyRequest = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.DeleteAsymmetricEncryptionKeyRequest" as const,

  encode(
    message: DeleteAsymmetricEncryptionKeyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteAsymmetricEncryptionKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteAsymmetricEncryptionKeyRequest,
    } as DeleteAsymmetricEncryptionKeyRequest;
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

  fromJSON(object: any): DeleteAsymmetricEncryptionKeyRequest {
    const message = {
      ...baseDeleteAsymmetricEncryptionKeyRequest,
    } as DeleteAsymmetricEncryptionKeyRequest;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    return message;
  },

  toJSON(message: DeleteAsymmetricEncryptionKeyRequest): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<DeleteAsymmetricEncryptionKeyRequest>, I>
  >(object: I): DeleteAsymmetricEncryptionKeyRequest {
    const message = {
      ...baseDeleteAsymmetricEncryptionKeyRequest,
    } as DeleteAsymmetricEncryptionKeyRequest;
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteAsymmetricEncryptionKeyRequest.$type,
  DeleteAsymmetricEncryptionKeyRequest
);

const baseDeleteAsymmetricEncryptionKeyMetadata: object = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.DeleteAsymmetricEncryptionKeyMetadata",
  keyId: "",
};

export const DeleteAsymmetricEncryptionKeyMetadata = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.DeleteAsymmetricEncryptionKeyMetadata" as const,

  encode(
    message: DeleteAsymmetricEncryptionKeyMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteAsymmetricEncryptionKeyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteAsymmetricEncryptionKeyMetadata,
    } as DeleteAsymmetricEncryptionKeyMetadata;
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

  fromJSON(object: any): DeleteAsymmetricEncryptionKeyMetadata {
    const message = {
      ...baseDeleteAsymmetricEncryptionKeyMetadata,
    } as DeleteAsymmetricEncryptionKeyMetadata;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    return message;
  },

  toJSON(message: DeleteAsymmetricEncryptionKeyMetadata): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<DeleteAsymmetricEncryptionKeyMetadata>, I>
  >(object: I): DeleteAsymmetricEncryptionKeyMetadata {
    const message = {
      ...baseDeleteAsymmetricEncryptionKeyMetadata,
    } as DeleteAsymmetricEncryptionKeyMetadata;
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteAsymmetricEncryptionKeyMetadata.$type,
  DeleteAsymmetricEncryptionKeyMetadata
);

const baseListAsymmetricEncryptionKeyOperationsRequest: object = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.ListAsymmetricEncryptionKeyOperationsRequest",
  keyId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListAsymmetricEncryptionKeyOperationsRequest = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.ListAsymmetricEncryptionKeyOperationsRequest" as const,

  encode(
    message: ListAsymmetricEncryptionKeyOperationsRequest,
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
  ): ListAsymmetricEncryptionKeyOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListAsymmetricEncryptionKeyOperationsRequest,
    } as ListAsymmetricEncryptionKeyOperationsRequest;
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

  fromJSON(object: any): ListAsymmetricEncryptionKeyOperationsRequest {
    const message = {
      ...baseListAsymmetricEncryptionKeyOperationsRequest,
    } as ListAsymmetricEncryptionKeyOperationsRequest;
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

  toJSON(message: ListAsymmetricEncryptionKeyOperationsRequest): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ListAsymmetricEncryptionKeyOperationsRequest>,
      I
    >
  >(object: I): ListAsymmetricEncryptionKeyOperationsRequest {
    const message = {
      ...baseListAsymmetricEncryptionKeyOperationsRequest,
    } as ListAsymmetricEncryptionKeyOperationsRequest;
    message.keyId = object.keyId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListAsymmetricEncryptionKeyOperationsRequest.$type,
  ListAsymmetricEncryptionKeyOperationsRequest
);

const baseListAsymmetricEncryptionKeyOperationsResponse: object = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.ListAsymmetricEncryptionKeyOperationsResponse",
  nextPageToken: "",
};

export const ListAsymmetricEncryptionKeyOperationsResponse = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.ListAsymmetricEncryptionKeyOperationsResponse" as const,

  encode(
    message: ListAsymmetricEncryptionKeyOperationsResponse,
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
  ): ListAsymmetricEncryptionKeyOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListAsymmetricEncryptionKeyOperationsResponse,
    } as ListAsymmetricEncryptionKeyOperationsResponse;
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

  fromJSON(object: any): ListAsymmetricEncryptionKeyOperationsResponse {
    const message = {
      ...baseListAsymmetricEncryptionKeyOperationsResponse,
    } as ListAsymmetricEncryptionKeyOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListAsymmetricEncryptionKeyOperationsResponse): unknown {
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

  fromPartial<
    I extends Exact<
      DeepPartial<ListAsymmetricEncryptionKeyOperationsResponse>,
      I
    >
  >(object: I): ListAsymmetricEncryptionKeyOperationsResponse {
    const message = {
      ...baseListAsymmetricEncryptionKeyOperationsResponse,
    } as ListAsymmetricEncryptionKeyOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListAsymmetricEncryptionKeyOperationsResponse.$type,
  ListAsymmetricEncryptionKeyOperationsResponse
);

/** Set of methods for managing asymmetric KMS keys. */
export const AsymmetricEncryptionKeyServiceService = {
  /**
   * control plane
   * Creates an asymmetric KMS key in the specified folder.
   */
  create: {
    path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateAsymmetricEncryptionKeyRequest) =>
      Buffer.from(CreateAsymmetricEncryptionKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateAsymmetricEncryptionKeyRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Returns the specified asymmetric KMS key.
   *
   *  To get the list of available asymmetric KMS keys, make a [SymmetricKeyService.List] request.
   */
  get: {
    path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetAsymmetricEncryptionKeyRequest) =>
      Buffer.from(GetAsymmetricEncryptionKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetAsymmetricEncryptionKeyRequest.decode(value),
    responseSerialize: (value: AsymmetricEncryptionKey) =>
      Buffer.from(AsymmetricEncryptionKey.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      AsymmetricEncryptionKey.decode(value),
  },
  /** Returns the list of asymmetric KMS keys in the specified folder. */
  list: {
    path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAsymmetricEncryptionKeysRequest) =>
      Buffer.from(ListAsymmetricEncryptionKeysRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListAsymmetricEncryptionKeysRequest.decode(value),
    responseSerialize: (value: ListAsymmetricEncryptionKeysResponse) =>
      Buffer.from(ListAsymmetricEncryptionKeysResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListAsymmetricEncryptionKeysResponse.decode(value),
  },
  /** Updates the specified asymmetric KMS key. */
  update: {
    path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAsymmetricEncryptionKeyRequest) =>
      Buffer.from(UpdateAsymmetricEncryptionKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateAsymmetricEncryptionKeyRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Deletes the specified asymmetric KMS key. This action also automatically schedules
   * the destruction of all of the key's versions in 72 hours.
   *
   * The key and its versions appear absent in [AsymmetricEncryptionKeyService.Get] and [AsymmetricEncryptionKeyService.List]
   * requests, but can be restored within 72 hours with a request to tech support.
   */
  delete: {
    path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteAsymmetricEncryptionKeyRequest) =>
      Buffer.from(DeleteAsymmetricEncryptionKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteAsymmetricEncryptionKeyRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified asymmetric KMS key. */
  listOperations: {
    path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAsymmetricEncryptionKeyOperationsRequest) =>
      Buffer.from(
        ListAsymmetricEncryptionKeyOperationsRequest.encode(value).finish()
      ),
    requestDeserialize: (value: Buffer) =>
      ListAsymmetricEncryptionKeyOperationsRequest.decode(value),
    responseSerialize: (value: ListAsymmetricEncryptionKeyOperationsResponse) =>
      Buffer.from(
        ListAsymmetricEncryptionKeyOperationsResponse.encode(value).finish()
      ),
    responseDeserialize: (value: Buffer) =>
      ListAsymmetricEncryptionKeyOperationsResponse.decode(value),
  },
  /** Lists existing access bindings for the specified key. */
  listAccessBindings: {
    path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/ListAccessBindings",
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
  /** Sets access bindings for the key. */
  setAccessBindings: {
    path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/SetAccessBindings",
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
  /** Updates access bindings for the specified key. */
  updateAccessBindings: {
    path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/UpdateAccessBindings",
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

export interface AsymmetricEncryptionKeyServiceServer
  extends UntypedServiceImplementation {
  /**
   * control plane
   * Creates an asymmetric KMS key in the specified folder.
   */
  create: handleUnaryCall<CreateAsymmetricEncryptionKeyRequest, Operation>;
  /**
   * Returns the specified asymmetric KMS key.
   *
   *  To get the list of available asymmetric KMS keys, make a [SymmetricKeyService.List] request.
   */
  get: handleUnaryCall<
    GetAsymmetricEncryptionKeyRequest,
    AsymmetricEncryptionKey
  >;
  /** Returns the list of asymmetric KMS keys in the specified folder. */
  list: handleUnaryCall<
    ListAsymmetricEncryptionKeysRequest,
    ListAsymmetricEncryptionKeysResponse
  >;
  /** Updates the specified asymmetric KMS key. */
  update: handleUnaryCall<UpdateAsymmetricEncryptionKeyRequest, Operation>;
  /**
   * Deletes the specified asymmetric KMS key. This action also automatically schedules
   * the destruction of all of the key's versions in 72 hours.
   *
   * The key and its versions appear absent in [AsymmetricEncryptionKeyService.Get] and [AsymmetricEncryptionKeyService.List]
   * requests, but can be restored within 72 hours with a request to tech support.
   */
  delete: handleUnaryCall<DeleteAsymmetricEncryptionKeyRequest, Operation>;
  /** Lists operations for the specified asymmetric KMS key. */
  listOperations: handleUnaryCall<
    ListAsymmetricEncryptionKeyOperationsRequest,
    ListAsymmetricEncryptionKeyOperationsResponse
  >;
  /** Lists existing access bindings for the specified key. */
  listAccessBindings: handleUnaryCall<
    ListAccessBindingsRequest,
    ListAccessBindingsResponse
  >;
  /** Sets access bindings for the key. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the specified key. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface AsymmetricEncryptionKeyServiceClient extends Client {
  /**
   * control plane
   * Creates an asymmetric KMS key in the specified folder.
   */
  create(
    request: CreateAsymmetricEncryptionKeyRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateAsymmetricEncryptionKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateAsymmetricEncryptionKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Returns the specified asymmetric KMS key.
   *
   *  To get the list of available asymmetric KMS keys, make a [SymmetricKeyService.List] request.
   */
  get(
    request: GetAsymmetricEncryptionKeyRequest,
    callback: (
      error: ServiceError | null,
      response: AsymmetricEncryptionKey
    ) => void
  ): ClientUnaryCall;
  get(
    request: GetAsymmetricEncryptionKeyRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: AsymmetricEncryptionKey
    ) => void
  ): ClientUnaryCall;
  get(
    request: GetAsymmetricEncryptionKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: AsymmetricEncryptionKey
    ) => void
  ): ClientUnaryCall;
  /** Returns the list of asymmetric KMS keys in the specified folder. */
  list(
    request: ListAsymmetricEncryptionKeysRequest,
    callback: (
      error: ServiceError | null,
      response: ListAsymmetricEncryptionKeysResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListAsymmetricEncryptionKeysRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListAsymmetricEncryptionKeysResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListAsymmetricEncryptionKeysRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListAsymmetricEncryptionKeysResponse
    ) => void
  ): ClientUnaryCall;
  /** Updates the specified asymmetric KMS key. */
  update(
    request: UpdateAsymmetricEncryptionKeyRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateAsymmetricEncryptionKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateAsymmetricEncryptionKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Deletes the specified asymmetric KMS key. This action also automatically schedules
   * the destruction of all of the key's versions in 72 hours.
   *
   * The key and its versions appear absent in [AsymmetricEncryptionKeyService.Get] and [AsymmetricEncryptionKeyService.List]
   * requests, but can be restored within 72 hours with a request to tech support.
   */
  delete(
    request: DeleteAsymmetricEncryptionKeyRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteAsymmetricEncryptionKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteAsymmetricEncryptionKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified asymmetric KMS key. */
  listOperations(
    request: ListAsymmetricEncryptionKeyOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListAsymmetricEncryptionKeyOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListAsymmetricEncryptionKeyOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListAsymmetricEncryptionKeyOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListAsymmetricEncryptionKeyOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListAsymmetricEncryptionKeyOperationsResponse
    ) => void
  ): ClientUnaryCall;
  /** Lists existing access bindings for the specified key. */
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
  /** Sets access bindings for the key. */
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
  /** Updates access bindings for the specified key. */
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

export const AsymmetricEncryptionKeyServiceClient =
  makeGenericClientConstructor(
    AsymmetricEncryptionKeyServiceService,
    "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService"
  ) as unknown as {
    new (
      address: string,
      credentials: ChannelCredentials,
      options?: Partial<ChannelOptions>
    ): AsymmetricEncryptionKeyServiceClient;
    service: typeof AsymmetricEncryptionKeyServiceService;
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
