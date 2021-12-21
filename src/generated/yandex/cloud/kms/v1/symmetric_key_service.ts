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
  SymmetricAlgorithm,
  SymmetricKey_Status,
  SymmetricKey,
  SymmetricKeyVersion,
  symmetricAlgorithmFromJSON,
  symmetricAlgorithmToJSON,
  symmetricKey_StatusFromJSON,
  symmetricKey_StatusToJSON,
} from "../../../../yandex/cloud/kms/v1/symmetric_key";
import { Duration } from "../../../../google/protobuf/duration";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import {
  ListAccessBindingsRequest,
  ListAccessBindingsResponse,
  SetAccessBindingsRequest,
  UpdateAccessBindingsRequest,
} from "../../../../yandex/cloud/access/access";

export const protobufPackage = "yandex.cloud.kms.v1";

export interface CreateSymmetricKeyRequest {
  $type: "yandex.cloud.kms.v1.CreateSymmetricKeyRequest";
  /** ID of the folder to create a symmetric KMS key in. */
  folderId: string;
  /** Name of the key. */
  name: string;
  /** Description of the key. */
  description: string;
  /**
   * Custom labels for the symmetric KMS key as `key:value` pairs. Maximum 64 per key.
   * For example, `"project": "mvp"` or `"source": "dictionary"`.
   */
  labels: { [key: string]: string };
  /** Encryption algorithm to be used with a new key version, generated with the next rotation. */
  defaultAlgorithm: SymmetricAlgorithm;
  /**
   * Interval between automatic rotations. To disable automatic rotation, don't include
   * this field in the creation request.
   */
  rotationPeriod?: Duration;
  /** Flag that inhibits deletion of the symmetric KMS key */
  deletionProtection: boolean;
}

export interface CreateSymmetricKeyRequest_LabelsEntry {
  $type: "yandex.cloud.kms.v1.CreateSymmetricKeyRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateSymmetricKeyMetadata {
  $type: "yandex.cloud.kms.v1.CreateSymmetricKeyMetadata";
  /** ID of the key being created. */
  keyId: string;
  /** ID of the primary version of the key being created. */
  primaryVersionId: string;
}

export interface GetSymmetricKeyRequest {
  $type: "yandex.cloud.kms.v1.GetSymmetricKeyRequest";
  /**
   * ID of the symmetric KMS key to return.
   * To get the ID of a symmetric KMS key use a [SymmetricKeyService.List] request.
   */
  keyId: string;
}

export interface ListSymmetricKeysRequest {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeysRequest";
  /** ID of the folder to list symmetric KMS keys in. */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListSymmetricKeysResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListSymmetricKeysResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListSymmetricKeysResponse {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeysResponse";
  /** List of symmetric KMS keys in the specified folder. */
  keys: SymmetricKey[];
  /**
   * This token allows you to get the next page of results for list requests. If the number
   * of results is greater than the specified [ListSymmetricKeysRequest.page_size], use
   * the [next_page_token] as the value for the [ListSymmetricKeysRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ListSymmetricKeyVersionsRequest {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeyVersionsRequest";
  /** ID of the symmetric KMS key to list versions for. */
  keyId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListSymmetricKeyVersionsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListSymmetricKeyVersionsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListSymmetricKeyVersionsResponse {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeyVersionsResponse";
  /** List of versions for the specified symmetric KMS key. */
  keyVersions: SymmetricKeyVersion[];
  /**
   * This token allows you to get the next page of results for list requests. If the number
   * of results is greater than the specified [ListSymmetricKeyVersionsRequest.page_size], use
   * the [next_page_token] as the value for the [ListSymmetricKeyVersionsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface UpdateSymmetricKeyRequest {
  $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyRequest";
  /**
   * ID of the symmetric KMS key to update.
   * To get the ID of a symmetric KMS key use a [SymmetricKeyService.List] request.
   */
  keyId: string;
  /** Field mask that specifies which attributes of the symmetric KMS key are going to be updated. */
  updateMask?: FieldMask;
  /** New name for the symmetric KMS key. */
  name: string;
  /** New description for the symmetric KMS key. */
  description: string;
  /**
   * New status for the symmetric KMS key.
   * Using the [SymmetricKeyService.Update] method you can only set ACTIVE or INACTIVE status.
   */
  status: SymmetricKey_Status;
  /** Custom labels for the symmetric KMS key as `key:value` pairs. Maximum 64 per key. */
  labels: { [key: string]: string };
  /** Default encryption algorithm to be used with new versions of the symmetric KMS key. */
  defaultAlgorithm: SymmetricAlgorithm;
  /** Time period between automatic symmetric KMS key rotations. */
  rotationPeriod?: Duration;
  /** Flag that inhibits deletion of the symmetric KMS key */
  deletionProtection: boolean;
}

export interface UpdateSymmetricKeyRequest_LabelsEntry {
  $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateSymmetricKeyMetadata {
  $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyMetadata";
  /** ID of the key being updated. */
  keyId: string;
}

export interface DeleteSymmetricKeyRequest {
  $type: "yandex.cloud.kms.v1.DeleteSymmetricKeyRequest";
  /** ID of the key to be deleted. */
  keyId: string;
}

export interface DeleteSymmetricKeyMetadata {
  $type: "yandex.cloud.kms.v1.DeleteSymmetricKeyMetadata";
  /** ID of the key being deleted. */
  keyId: string;
}

export interface SetPrimarySymmetricKeyVersionRequest {
  $type: "yandex.cloud.kms.v1.SetPrimarySymmetricKeyVersionRequest";
  /** ID of the key to set a primary version for. */
  keyId: string;
  /** ID of the version that should become primary for the specified key. */
  versionId: string;
}

export interface SetPrimarySymmetricKeyVersionMetadata {
  $type: "yandex.cloud.kms.v1.SetPrimarySymmetricKeyVersionMetadata";
  /** ID of the key that the primary version if being changed for. */
  keyId: string;
  /** ID of the version that is being made primary for the key. */
  versionId: string;
}

export interface RotateSymmetricKeyRequest {
  $type: "yandex.cloud.kms.v1.RotateSymmetricKeyRequest";
  /** ID of the key to be rotated. */
  keyId: string;
}

export interface RotateSymmetricKeyMetadata {
  $type: "yandex.cloud.kms.v1.RotateSymmetricKeyMetadata";
  /** ID of the key being rotated. */
  keyId: string;
  /** ID of the version generated as a result of key rotation. */
  newPrimaryVersionId: string;
}

export interface ScheduleSymmetricKeyVersionDestructionRequest {
  $type: "yandex.cloud.kms.v1.ScheduleSymmetricKeyVersionDestructionRequest";
  /** ID of the key whose version should be scheduled for destruction. */
  keyId: string;
  /** ID of the version to be destroyed. */
  versionId: string;
  /**
   * Time interval between the version destruction request and actual destruction.
   * Default value: 7 days.
   */
  pendingPeriod?: Duration;
}

export interface ScheduleSymmetricKeyVersionDestructionMetadata {
  $type: "yandex.cloud.kms.v1.ScheduleSymmetricKeyVersionDestructionMetadata";
  /** ID of the key whose version is being scheduled for destruction. */
  keyId: string;
  /** ID of the version that is being scheduled for destruction. */
  versionId: string;
  /** Time when the version is scheduled to be destroyed. */
  destroyAt?: Date;
}

export interface CancelSymmetricKeyVersionDestructionRequest {
  $type: "yandex.cloud.kms.v1.CancelSymmetricKeyVersionDestructionRequest";
  /** ID of the key to cancel a version's destruction for. */
  keyId: string;
  /** ID of the version whose scheduled destruction should be cancelled. */
  versionId: string;
}

export interface CancelSymmetricKeyVersionDestructionMetadata {
  $type: "yandex.cloud.kms.v1.CancelSymmetricKeyVersionDestructionMetadata";
  /** ID of the key whose version's destruction is being cancelled. */
  keyId: string;
  /** ID of the version whose scheduled destruction is being cancelled. */
  versionId: string;
}

export interface ListSymmetricKeyOperationsRequest {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeyOperationsRequest";
  /**
   * ID of the symmetric KMS key to get operations for.
   *
   * To get the key ID, use a [SymmetricKeyService.List] request.
   */
  keyId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than [page_size], the service returns a [ListSymmetricKeyOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListSymmetricKeyOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListSymmetricKeyOperationsResponse {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeyOperationsResponse";
  /** List of operations for the specified key. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListSymmetricKeyOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListSymmetricKeyOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

const baseCreateSymmetricKeyRequest: object = {
  $type: "yandex.cloud.kms.v1.CreateSymmetricKeyRequest",
  folderId: "",
  name: "",
  description: "",
  defaultAlgorithm: 0,
  deletionProtection: false,
};

export const CreateSymmetricKeyRequest = {
  $type: "yandex.cloud.kms.v1.CreateSymmetricKeyRequest" as const,

  encode(
    message: CreateSymmetricKeyRequest,
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
      CreateSymmetricKeyRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.kms.v1.CreateSymmetricKeyRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.defaultAlgorithm !== 0) {
      writer.uint32(40).int32(message.defaultAlgorithm);
    }
    if (message.rotationPeriod !== undefined) {
      Duration.encode(
        message.rotationPeriod,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.deletionProtection === true) {
      writer.uint32(56).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateSymmetricKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateSymmetricKeyRequest,
    } as CreateSymmetricKeyRequest;
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
          const entry4 = CreateSymmetricKeyRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.defaultAlgorithm = reader.int32() as any;
          break;
        case 6:
          message.rotationPeriod = Duration.decode(reader, reader.uint32());
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

  fromJSON(object: any): CreateSymmetricKeyRequest {
    const message = {
      ...baseCreateSymmetricKeyRequest,
    } as CreateSymmetricKeyRequest;
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
    message.defaultAlgorithm =
      object.defaultAlgorithm !== undefined && object.defaultAlgorithm !== null
        ? symmetricAlgorithmFromJSON(object.defaultAlgorithm)
        : 0;
    message.rotationPeriod =
      object.rotationPeriod !== undefined && object.rotationPeriod !== null
        ? Duration.fromJSON(object.rotationPeriod)
        : undefined;
    message.deletionProtection =
      object.deletionProtection !== undefined &&
      object.deletionProtection !== null
        ? Boolean(object.deletionProtection)
        : false;
    return message;
  },

  toJSON(message: CreateSymmetricKeyRequest): unknown {
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
    message.defaultAlgorithm !== undefined &&
      (obj.defaultAlgorithm = symmetricAlgorithmToJSON(
        message.defaultAlgorithm
      ));
    message.rotationPeriod !== undefined &&
      (obj.rotationPeriod = message.rotationPeriod
        ? Duration.toJSON(message.rotationPeriod)
        : undefined);
    message.deletionProtection !== undefined &&
      (obj.deletionProtection = message.deletionProtection);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateSymmetricKeyRequest>, I>>(
    object: I
  ): CreateSymmetricKeyRequest {
    const message = {
      ...baseCreateSymmetricKeyRequest,
    } as CreateSymmetricKeyRequest;
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
    message.defaultAlgorithm = object.defaultAlgorithm ?? 0;
    message.rotationPeriod =
      object.rotationPeriod !== undefined && object.rotationPeriod !== null
        ? Duration.fromPartial(object.rotationPeriod)
        : undefined;
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(
  CreateSymmetricKeyRequest.$type,
  CreateSymmetricKeyRequest
);

const baseCreateSymmetricKeyRequest_LabelsEntry: object = {
  $type: "yandex.cloud.kms.v1.CreateSymmetricKeyRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateSymmetricKeyRequest_LabelsEntry = {
  $type: "yandex.cloud.kms.v1.CreateSymmetricKeyRequest.LabelsEntry" as const,

  encode(
    message: CreateSymmetricKeyRequest_LabelsEntry,
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
  ): CreateSymmetricKeyRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateSymmetricKeyRequest_LabelsEntry,
    } as CreateSymmetricKeyRequest_LabelsEntry;
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

  fromJSON(object: any): CreateSymmetricKeyRequest_LabelsEntry {
    const message = {
      ...baseCreateSymmetricKeyRequest_LabelsEntry,
    } as CreateSymmetricKeyRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateSymmetricKeyRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateSymmetricKeyRequest_LabelsEntry>, I>
  >(object: I): CreateSymmetricKeyRequest_LabelsEntry {
    const message = {
      ...baseCreateSymmetricKeyRequest_LabelsEntry,
    } as CreateSymmetricKeyRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateSymmetricKeyRequest_LabelsEntry.$type,
  CreateSymmetricKeyRequest_LabelsEntry
);

const baseCreateSymmetricKeyMetadata: object = {
  $type: "yandex.cloud.kms.v1.CreateSymmetricKeyMetadata",
  keyId: "",
  primaryVersionId: "",
};

export const CreateSymmetricKeyMetadata = {
  $type: "yandex.cloud.kms.v1.CreateSymmetricKeyMetadata" as const,

  encode(
    message: CreateSymmetricKeyMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.primaryVersionId !== "") {
      writer.uint32(18).string(message.primaryVersionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateSymmetricKeyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateSymmetricKeyMetadata,
    } as CreateSymmetricKeyMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;
        case 2:
          message.primaryVersionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateSymmetricKeyMetadata {
    const message = {
      ...baseCreateSymmetricKeyMetadata,
    } as CreateSymmetricKeyMetadata;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    message.primaryVersionId =
      object.primaryVersionId !== undefined && object.primaryVersionId !== null
        ? String(object.primaryVersionId)
        : "";
    return message;
  },

  toJSON(message: CreateSymmetricKeyMetadata): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.primaryVersionId !== undefined &&
      (obj.primaryVersionId = message.primaryVersionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateSymmetricKeyMetadata>, I>>(
    object: I
  ): CreateSymmetricKeyMetadata {
    const message = {
      ...baseCreateSymmetricKeyMetadata,
    } as CreateSymmetricKeyMetadata;
    message.keyId = object.keyId ?? "";
    message.primaryVersionId = object.primaryVersionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateSymmetricKeyMetadata.$type,
  CreateSymmetricKeyMetadata
);

const baseGetSymmetricKeyRequest: object = {
  $type: "yandex.cloud.kms.v1.GetSymmetricKeyRequest",
  keyId: "",
};

export const GetSymmetricKeyRequest = {
  $type: "yandex.cloud.kms.v1.GetSymmetricKeyRequest" as const,

  encode(
    message: GetSymmetricKeyRequest,
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
  ): GetSymmetricKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetSymmetricKeyRequest } as GetSymmetricKeyRequest;
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

  fromJSON(object: any): GetSymmetricKeyRequest {
    const message = { ...baseGetSymmetricKeyRequest } as GetSymmetricKeyRequest;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    return message;
  },

  toJSON(message: GetSymmetricKeyRequest): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetSymmetricKeyRequest>, I>>(
    object: I
  ): GetSymmetricKeyRequest {
    const message = { ...baseGetSymmetricKeyRequest } as GetSymmetricKeyRequest;
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetSymmetricKeyRequest.$type, GetSymmetricKeyRequest);

const baseListSymmetricKeysRequest: object = {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeysRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListSymmetricKeysRequest = {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeysRequest" as const,

  encode(
    message: ListSymmetricKeysRequest,
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
  ): ListSymmetricKeysRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListSymmetricKeysRequest,
    } as ListSymmetricKeysRequest;
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

  fromJSON(object: any): ListSymmetricKeysRequest {
    const message = {
      ...baseListSymmetricKeysRequest,
    } as ListSymmetricKeysRequest;
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

  toJSON(message: ListSymmetricKeysRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListSymmetricKeysRequest>, I>>(
    object: I
  ): ListSymmetricKeysRequest {
    const message = {
      ...baseListSymmetricKeysRequest,
    } as ListSymmetricKeysRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListSymmetricKeysRequest.$type,
  ListSymmetricKeysRequest
);

const baseListSymmetricKeysResponse: object = {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeysResponse",
  nextPageToken: "",
};

export const ListSymmetricKeysResponse = {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeysResponse" as const,

  encode(
    message: ListSymmetricKeysResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.keys) {
      SymmetricKey.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListSymmetricKeysResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListSymmetricKeysResponse,
    } as ListSymmetricKeysResponse;
    message.keys = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keys.push(SymmetricKey.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListSymmetricKeysResponse {
    const message = {
      ...baseListSymmetricKeysResponse,
    } as ListSymmetricKeysResponse;
    message.keys = (object.keys ?? []).map((e: any) =>
      SymmetricKey.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListSymmetricKeysResponse): unknown {
    const obj: any = {};
    if (message.keys) {
      obj.keys = message.keys.map((e) =>
        e ? SymmetricKey.toJSON(e) : undefined
      );
    } else {
      obj.keys = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListSymmetricKeysResponse>, I>>(
    object: I
  ): ListSymmetricKeysResponse {
    const message = {
      ...baseListSymmetricKeysResponse,
    } as ListSymmetricKeysResponse;
    message.keys = object.keys?.map((e) => SymmetricKey.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListSymmetricKeysResponse.$type,
  ListSymmetricKeysResponse
);

const baseListSymmetricKeyVersionsRequest: object = {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeyVersionsRequest",
  keyId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListSymmetricKeyVersionsRequest = {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeyVersionsRequest" as const,

  encode(
    message: ListSymmetricKeyVersionsRequest,
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
  ): ListSymmetricKeyVersionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListSymmetricKeyVersionsRequest,
    } as ListSymmetricKeyVersionsRequest;
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

  fromJSON(object: any): ListSymmetricKeyVersionsRequest {
    const message = {
      ...baseListSymmetricKeyVersionsRequest,
    } as ListSymmetricKeyVersionsRequest;
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

  toJSON(message: ListSymmetricKeyVersionsRequest): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListSymmetricKeyVersionsRequest>, I>>(
    object: I
  ): ListSymmetricKeyVersionsRequest {
    const message = {
      ...baseListSymmetricKeyVersionsRequest,
    } as ListSymmetricKeyVersionsRequest;
    message.keyId = object.keyId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListSymmetricKeyVersionsRequest.$type,
  ListSymmetricKeyVersionsRequest
);

const baseListSymmetricKeyVersionsResponse: object = {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeyVersionsResponse",
  nextPageToken: "",
};

export const ListSymmetricKeyVersionsResponse = {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeyVersionsResponse" as const,

  encode(
    message: ListSymmetricKeyVersionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.keyVersions) {
      SymmetricKeyVersion.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListSymmetricKeyVersionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListSymmetricKeyVersionsResponse,
    } as ListSymmetricKeyVersionsResponse;
    message.keyVersions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyVersions.push(
            SymmetricKeyVersion.decode(reader, reader.uint32())
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

  fromJSON(object: any): ListSymmetricKeyVersionsResponse {
    const message = {
      ...baseListSymmetricKeyVersionsResponse,
    } as ListSymmetricKeyVersionsResponse;
    message.keyVersions = (object.keyVersions ?? []).map((e: any) =>
      SymmetricKeyVersion.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListSymmetricKeyVersionsResponse): unknown {
    const obj: any = {};
    if (message.keyVersions) {
      obj.keyVersions = message.keyVersions.map((e) =>
        e ? SymmetricKeyVersion.toJSON(e) : undefined
      );
    } else {
      obj.keyVersions = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListSymmetricKeyVersionsResponse>, I>
  >(object: I): ListSymmetricKeyVersionsResponse {
    const message = {
      ...baseListSymmetricKeyVersionsResponse,
    } as ListSymmetricKeyVersionsResponse;
    message.keyVersions =
      object.keyVersions?.map((e) => SymmetricKeyVersion.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListSymmetricKeyVersionsResponse.$type,
  ListSymmetricKeyVersionsResponse
);

const baseUpdateSymmetricKeyRequest: object = {
  $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyRequest",
  keyId: "",
  name: "",
  description: "",
  status: 0,
  defaultAlgorithm: 0,
  deletionProtection: false,
};

export const UpdateSymmetricKeyRequest = {
  $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyRequest" as const,

  encode(
    message: UpdateSymmetricKeyRequest,
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
      UpdateSymmetricKeyRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(50).fork()
      ).ldelim();
    });
    if (message.defaultAlgorithm !== 0) {
      writer.uint32(56).int32(message.defaultAlgorithm);
    }
    if (message.rotationPeriod !== undefined) {
      Duration.encode(
        message.rotationPeriod,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.deletionProtection === true) {
      writer.uint32(72).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateSymmetricKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateSymmetricKeyRequest,
    } as UpdateSymmetricKeyRequest;
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
          const entry6 = UpdateSymmetricKeyRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.defaultAlgorithm = reader.int32() as any;
          break;
        case 8:
          message.rotationPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 9:
          message.deletionProtection = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateSymmetricKeyRequest {
    const message = {
      ...baseUpdateSymmetricKeyRequest,
    } as UpdateSymmetricKeyRequest;
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
        ? symmetricKey_StatusFromJSON(object.status)
        : 0;
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.defaultAlgorithm =
      object.defaultAlgorithm !== undefined && object.defaultAlgorithm !== null
        ? symmetricAlgorithmFromJSON(object.defaultAlgorithm)
        : 0;
    message.rotationPeriod =
      object.rotationPeriod !== undefined && object.rotationPeriod !== null
        ? Duration.fromJSON(object.rotationPeriod)
        : undefined;
    message.deletionProtection =
      object.deletionProtection !== undefined &&
      object.deletionProtection !== null
        ? Boolean(object.deletionProtection)
        : false;
    return message;
  },

  toJSON(message: UpdateSymmetricKeyRequest): unknown {
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
      (obj.status = symmetricKey_StatusToJSON(message.status));
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.defaultAlgorithm !== undefined &&
      (obj.defaultAlgorithm = symmetricAlgorithmToJSON(
        message.defaultAlgorithm
      ));
    message.rotationPeriod !== undefined &&
      (obj.rotationPeriod = message.rotationPeriod
        ? Duration.toJSON(message.rotationPeriod)
        : undefined);
    message.deletionProtection !== undefined &&
      (obj.deletionProtection = message.deletionProtection);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSymmetricKeyRequest>, I>>(
    object: I
  ): UpdateSymmetricKeyRequest {
    const message = {
      ...baseUpdateSymmetricKeyRequest,
    } as UpdateSymmetricKeyRequest;
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
    message.defaultAlgorithm = object.defaultAlgorithm ?? 0;
    message.rotationPeriod =
      object.rotationPeriod !== undefined && object.rotationPeriod !== null
        ? Duration.fromPartial(object.rotationPeriod)
        : undefined;
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(
  UpdateSymmetricKeyRequest.$type,
  UpdateSymmetricKeyRequest
);

const baseUpdateSymmetricKeyRequest_LabelsEntry: object = {
  $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateSymmetricKeyRequest_LabelsEntry = {
  $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyRequest.LabelsEntry" as const,

  encode(
    message: UpdateSymmetricKeyRequest_LabelsEntry,
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
  ): UpdateSymmetricKeyRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateSymmetricKeyRequest_LabelsEntry,
    } as UpdateSymmetricKeyRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateSymmetricKeyRequest_LabelsEntry {
    const message = {
      ...baseUpdateSymmetricKeyRequest_LabelsEntry,
    } as UpdateSymmetricKeyRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateSymmetricKeyRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateSymmetricKeyRequest_LabelsEntry>, I>
  >(object: I): UpdateSymmetricKeyRequest_LabelsEntry {
    const message = {
      ...baseUpdateSymmetricKeyRequest_LabelsEntry,
    } as UpdateSymmetricKeyRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateSymmetricKeyRequest_LabelsEntry.$type,
  UpdateSymmetricKeyRequest_LabelsEntry
);

const baseUpdateSymmetricKeyMetadata: object = {
  $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyMetadata",
  keyId: "",
};

export const UpdateSymmetricKeyMetadata = {
  $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyMetadata" as const,

  encode(
    message: UpdateSymmetricKeyMetadata,
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
  ): UpdateSymmetricKeyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateSymmetricKeyMetadata,
    } as UpdateSymmetricKeyMetadata;
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

  fromJSON(object: any): UpdateSymmetricKeyMetadata {
    const message = {
      ...baseUpdateSymmetricKeyMetadata,
    } as UpdateSymmetricKeyMetadata;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    return message;
  },

  toJSON(message: UpdateSymmetricKeyMetadata): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSymmetricKeyMetadata>, I>>(
    object: I
  ): UpdateSymmetricKeyMetadata {
    const message = {
      ...baseUpdateSymmetricKeyMetadata,
    } as UpdateSymmetricKeyMetadata;
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateSymmetricKeyMetadata.$type,
  UpdateSymmetricKeyMetadata
);

const baseDeleteSymmetricKeyRequest: object = {
  $type: "yandex.cloud.kms.v1.DeleteSymmetricKeyRequest",
  keyId: "",
};

export const DeleteSymmetricKeyRequest = {
  $type: "yandex.cloud.kms.v1.DeleteSymmetricKeyRequest" as const,

  encode(
    message: DeleteSymmetricKeyRequest,
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
  ): DeleteSymmetricKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteSymmetricKeyRequest,
    } as DeleteSymmetricKeyRequest;
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

  fromJSON(object: any): DeleteSymmetricKeyRequest {
    const message = {
      ...baseDeleteSymmetricKeyRequest,
    } as DeleteSymmetricKeyRequest;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    return message;
  },

  toJSON(message: DeleteSymmetricKeyRequest): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteSymmetricKeyRequest>, I>>(
    object: I
  ): DeleteSymmetricKeyRequest {
    const message = {
      ...baseDeleteSymmetricKeyRequest,
    } as DeleteSymmetricKeyRequest;
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteSymmetricKeyRequest.$type,
  DeleteSymmetricKeyRequest
);

const baseDeleteSymmetricKeyMetadata: object = {
  $type: "yandex.cloud.kms.v1.DeleteSymmetricKeyMetadata",
  keyId: "",
};

export const DeleteSymmetricKeyMetadata = {
  $type: "yandex.cloud.kms.v1.DeleteSymmetricKeyMetadata" as const,

  encode(
    message: DeleteSymmetricKeyMetadata,
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
  ): DeleteSymmetricKeyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteSymmetricKeyMetadata,
    } as DeleteSymmetricKeyMetadata;
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

  fromJSON(object: any): DeleteSymmetricKeyMetadata {
    const message = {
      ...baseDeleteSymmetricKeyMetadata,
    } as DeleteSymmetricKeyMetadata;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    return message;
  },

  toJSON(message: DeleteSymmetricKeyMetadata): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteSymmetricKeyMetadata>, I>>(
    object: I
  ): DeleteSymmetricKeyMetadata {
    const message = {
      ...baseDeleteSymmetricKeyMetadata,
    } as DeleteSymmetricKeyMetadata;
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteSymmetricKeyMetadata.$type,
  DeleteSymmetricKeyMetadata
);

const baseSetPrimarySymmetricKeyVersionRequest: object = {
  $type: "yandex.cloud.kms.v1.SetPrimarySymmetricKeyVersionRequest",
  keyId: "",
  versionId: "",
};

export const SetPrimarySymmetricKeyVersionRequest = {
  $type: "yandex.cloud.kms.v1.SetPrimarySymmetricKeyVersionRequest" as const,

  encode(
    message: SetPrimarySymmetricKeyVersionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetPrimarySymmetricKeyVersionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetPrimarySymmetricKeyVersionRequest,
    } as SetPrimarySymmetricKeyVersionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;
        case 2:
          message.versionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetPrimarySymmetricKeyVersionRequest {
    const message = {
      ...baseSetPrimarySymmetricKeyVersionRequest,
    } as SetPrimarySymmetricKeyVersionRequest;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    message.versionId =
      object.versionId !== undefined && object.versionId !== null
        ? String(object.versionId)
        : "";
    return message;
  },

  toJSON(message: SetPrimarySymmetricKeyVersionRequest): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.versionId !== undefined && (obj.versionId = message.versionId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<SetPrimarySymmetricKeyVersionRequest>, I>
  >(object: I): SetPrimarySymmetricKeyVersionRequest {
    const message = {
      ...baseSetPrimarySymmetricKeyVersionRequest,
    } as SetPrimarySymmetricKeyVersionRequest;
    message.keyId = object.keyId ?? "";
    message.versionId = object.versionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  SetPrimarySymmetricKeyVersionRequest.$type,
  SetPrimarySymmetricKeyVersionRequest
);

const baseSetPrimarySymmetricKeyVersionMetadata: object = {
  $type: "yandex.cloud.kms.v1.SetPrimarySymmetricKeyVersionMetadata",
  keyId: "",
  versionId: "",
};

export const SetPrimarySymmetricKeyVersionMetadata = {
  $type: "yandex.cloud.kms.v1.SetPrimarySymmetricKeyVersionMetadata" as const,

  encode(
    message: SetPrimarySymmetricKeyVersionMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetPrimarySymmetricKeyVersionMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetPrimarySymmetricKeyVersionMetadata,
    } as SetPrimarySymmetricKeyVersionMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;
        case 2:
          message.versionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetPrimarySymmetricKeyVersionMetadata {
    const message = {
      ...baseSetPrimarySymmetricKeyVersionMetadata,
    } as SetPrimarySymmetricKeyVersionMetadata;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    message.versionId =
      object.versionId !== undefined && object.versionId !== null
        ? String(object.versionId)
        : "";
    return message;
  },

  toJSON(message: SetPrimarySymmetricKeyVersionMetadata): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.versionId !== undefined && (obj.versionId = message.versionId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<SetPrimarySymmetricKeyVersionMetadata>, I>
  >(object: I): SetPrimarySymmetricKeyVersionMetadata {
    const message = {
      ...baseSetPrimarySymmetricKeyVersionMetadata,
    } as SetPrimarySymmetricKeyVersionMetadata;
    message.keyId = object.keyId ?? "";
    message.versionId = object.versionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  SetPrimarySymmetricKeyVersionMetadata.$type,
  SetPrimarySymmetricKeyVersionMetadata
);

const baseRotateSymmetricKeyRequest: object = {
  $type: "yandex.cloud.kms.v1.RotateSymmetricKeyRequest",
  keyId: "",
};

export const RotateSymmetricKeyRequest = {
  $type: "yandex.cloud.kms.v1.RotateSymmetricKeyRequest" as const,

  encode(
    message: RotateSymmetricKeyRequest,
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
  ): RotateSymmetricKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRotateSymmetricKeyRequest,
    } as RotateSymmetricKeyRequest;
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

  fromJSON(object: any): RotateSymmetricKeyRequest {
    const message = {
      ...baseRotateSymmetricKeyRequest,
    } as RotateSymmetricKeyRequest;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    return message;
  },

  toJSON(message: RotateSymmetricKeyRequest): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RotateSymmetricKeyRequest>, I>>(
    object: I
  ): RotateSymmetricKeyRequest {
    const message = {
      ...baseRotateSymmetricKeyRequest,
    } as RotateSymmetricKeyRequest;
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  RotateSymmetricKeyRequest.$type,
  RotateSymmetricKeyRequest
);

const baseRotateSymmetricKeyMetadata: object = {
  $type: "yandex.cloud.kms.v1.RotateSymmetricKeyMetadata",
  keyId: "",
  newPrimaryVersionId: "",
};

export const RotateSymmetricKeyMetadata = {
  $type: "yandex.cloud.kms.v1.RotateSymmetricKeyMetadata" as const,

  encode(
    message: RotateSymmetricKeyMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.newPrimaryVersionId !== "") {
      writer.uint32(18).string(message.newPrimaryVersionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RotateSymmetricKeyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRotateSymmetricKeyMetadata,
    } as RotateSymmetricKeyMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;
        case 2:
          message.newPrimaryVersionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RotateSymmetricKeyMetadata {
    const message = {
      ...baseRotateSymmetricKeyMetadata,
    } as RotateSymmetricKeyMetadata;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    message.newPrimaryVersionId =
      object.newPrimaryVersionId !== undefined &&
      object.newPrimaryVersionId !== null
        ? String(object.newPrimaryVersionId)
        : "";
    return message;
  },

  toJSON(message: RotateSymmetricKeyMetadata): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.newPrimaryVersionId !== undefined &&
      (obj.newPrimaryVersionId = message.newPrimaryVersionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RotateSymmetricKeyMetadata>, I>>(
    object: I
  ): RotateSymmetricKeyMetadata {
    const message = {
      ...baseRotateSymmetricKeyMetadata,
    } as RotateSymmetricKeyMetadata;
    message.keyId = object.keyId ?? "";
    message.newPrimaryVersionId = object.newPrimaryVersionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  RotateSymmetricKeyMetadata.$type,
  RotateSymmetricKeyMetadata
);

const baseScheduleSymmetricKeyVersionDestructionRequest: object = {
  $type: "yandex.cloud.kms.v1.ScheduleSymmetricKeyVersionDestructionRequest",
  keyId: "",
  versionId: "",
};

export const ScheduleSymmetricKeyVersionDestructionRequest = {
  $type:
    "yandex.cloud.kms.v1.ScheduleSymmetricKeyVersionDestructionRequest" as const,

  encode(
    message: ScheduleSymmetricKeyVersionDestructionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    if (message.pendingPeriod !== undefined) {
      Duration.encode(message.pendingPeriod, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ScheduleSymmetricKeyVersionDestructionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseScheduleSymmetricKeyVersionDestructionRequest,
    } as ScheduleSymmetricKeyVersionDestructionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;
        case 2:
          message.versionId = reader.string();
          break;
        case 3:
          message.pendingPeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScheduleSymmetricKeyVersionDestructionRequest {
    const message = {
      ...baseScheduleSymmetricKeyVersionDestructionRequest,
    } as ScheduleSymmetricKeyVersionDestructionRequest;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    message.versionId =
      object.versionId !== undefined && object.versionId !== null
        ? String(object.versionId)
        : "";
    message.pendingPeriod =
      object.pendingPeriod !== undefined && object.pendingPeriod !== null
        ? Duration.fromJSON(object.pendingPeriod)
        : undefined;
    return message;
  },

  toJSON(message: ScheduleSymmetricKeyVersionDestructionRequest): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.versionId !== undefined && (obj.versionId = message.versionId);
    message.pendingPeriod !== undefined &&
      (obj.pendingPeriod = message.pendingPeriod
        ? Duration.toJSON(message.pendingPeriod)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ScheduleSymmetricKeyVersionDestructionRequest>,
      I
    >
  >(object: I): ScheduleSymmetricKeyVersionDestructionRequest {
    const message = {
      ...baseScheduleSymmetricKeyVersionDestructionRequest,
    } as ScheduleSymmetricKeyVersionDestructionRequest;
    message.keyId = object.keyId ?? "";
    message.versionId = object.versionId ?? "";
    message.pendingPeriod =
      object.pendingPeriod !== undefined && object.pendingPeriod !== null
        ? Duration.fromPartial(object.pendingPeriod)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ScheduleSymmetricKeyVersionDestructionRequest.$type,
  ScheduleSymmetricKeyVersionDestructionRequest
);

const baseScheduleSymmetricKeyVersionDestructionMetadata: object = {
  $type: "yandex.cloud.kms.v1.ScheduleSymmetricKeyVersionDestructionMetadata",
  keyId: "",
  versionId: "",
};

export const ScheduleSymmetricKeyVersionDestructionMetadata = {
  $type:
    "yandex.cloud.kms.v1.ScheduleSymmetricKeyVersionDestructionMetadata" as const,

  encode(
    message: ScheduleSymmetricKeyVersionDestructionMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    if (message.destroyAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.destroyAt),
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ScheduleSymmetricKeyVersionDestructionMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseScheduleSymmetricKeyVersionDestructionMetadata,
    } as ScheduleSymmetricKeyVersionDestructionMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;
        case 2:
          message.versionId = reader.string();
          break;
        case 3:
          message.destroyAt = fromTimestamp(
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

  fromJSON(object: any): ScheduleSymmetricKeyVersionDestructionMetadata {
    const message = {
      ...baseScheduleSymmetricKeyVersionDestructionMetadata,
    } as ScheduleSymmetricKeyVersionDestructionMetadata;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    message.versionId =
      object.versionId !== undefined && object.versionId !== null
        ? String(object.versionId)
        : "";
    message.destroyAt =
      object.destroyAt !== undefined && object.destroyAt !== null
        ? fromJsonTimestamp(object.destroyAt)
        : undefined;
    return message;
  },

  toJSON(message: ScheduleSymmetricKeyVersionDestructionMetadata): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.versionId !== undefined && (obj.versionId = message.versionId);
    message.destroyAt !== undefined &&
      (obj.destroyAt = message.destroyAt.toISOString());
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ScheduleSymmetricKeyVersionDestructionMetadata>,
      I
    >
  >(object: I): ScheduleSymmetricKeyVersionDestructionMetadata {
    const message = {
      ...baseScheduleSymmetricKeyVersionDestructionMetadata,
    } as ScheduleSymmetricKeyVersionDestructionMetadata;
    message.keyId = object.keyId ?? "";
    message.versionId = object.versionId ?? "";
    message.destroyAt = object.destroyAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ScheduleSymmetricKeyVersionDestructionMetadata.$type,
  ScheduleSymmetricKeyVersionDestructionMetadata
);

const baseCancelSymmetricKeyVersionDestructionRequest: object = {
  $type: "yandex.cloud.kms.v1.CancelSymmetricKeyVersionDestructionRequest",
  keyId: "",
  versionId: "",
};

export const CancelSymmetricKeyVersionDestructionRequest = {
  $type:
    "yandex.cloud.kms.v1.CancelSymmetricKeyVersionDestructionRequest" as const,

  encode(
    message: CancelSymmetricKeyVersionDestructionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CancelSymmetricKeyVersionDestructionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCancelSymmetricKeyVersionDestructionRequest,
    } as CancelSymmetricKeyVersionDestructionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;
        case 2:
          message.versionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CancelSymmetricKeyVersionDestructionRequest {
    const message = {
      ...baseCancelSymmetricKeyVersionDestructionRequest,
    } as CancelSymmetricKeyVersionDestructionRequest;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    message.versionId =
      object.versionId !== undefined && object.versionId !== null
        ? String(object.versionId)
        : "";
    return message;
  },

  toJSON(message: CancelSymmetricKeyVersionDestructionRequest): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.versionId !== undefined && (obj.versionId = message.versionId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CancelSymmetricKeyVersionDestructionRequest>, I>
  >(object: I): CancelSymmetricKeyVersionDestructionRequest {
    const message = {
      ...baseCancelSymmetricKeyVersionDestructionRequest,
    } as CancelSymmetricKeyVersionDestructionRequest;
    message.keyId = object.keyId ?? "";
    message.versionId = object.versionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CancelSymmetricKeyVersionDestructionRequest.$type,
  CancelSymmetricKeyVersionDestructionRequest
);

const baseCancelSymmetricKeyVersionDestructionMetadata: object = {
  $type: "yandex.cloud.kms.v1.CancelSymmetricKeyVersionDestructionMetadata",
  keyId: "",
  versionId: "",
};

export const CancelSymmetricKeyVersionDestructionMetadata = {
  $type:
    "yandex.cloud.kms.v1.CancelSymmetricKeyVersionDestructionMetadata" as const,

  encode(
    message: CancelSymmetricKeyVersionDestructionMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CancelSymmetricKeyVersionDestructionMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCancelSymmetricKeyVersionDestructionMetadata,
    } as CancelSymmetricKeyVersionDestructionMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;
        case 2:
          message.versionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CancelSymmetricKeyVersionDestructionMetadata {
    const message = {
      ...baseCancelSymmetricKeyVersionDestructionMetadata,
    } as CancelSymmetricKeyVersionDestructionMetadata;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    message.versionId =
      object.versionId !== undefined && object.versionId !== null
        ? String(object.versionId)
        : "";
    return message;
  },

  toJSON(message: CancelSymmetricKeyVersionDestructionMetadata): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.versionId !== undefined && (obj.versionId = message.versionId);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<CancelSymmetricKeyVersionDestructionMetadata>,
      I
    >
  >(object: I): CancelSymmetricKeyVersionDestructionMetadata {
    const message = {
      ...baseCancelSymmetricKeyVersionDestructionMetadata,
    } as CancelSymmetricKeyVersionDestructionMetadata;
    message.keyId = object.keyId ?? "";
    message.versionId = object.versionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CancelSymmetricKeyVersionDestructionMetadata.$type,
  CancelSymmetricKeyVersionDestructionMetadata
);

const baseListSymmetricKeyOperationsRequest: object = {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeyOperationsRequest",
  keyId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListSymmetricKeyOperationsRequest = {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeyOperationsRequest" as const,

  encode(
    message: ListSymmetricKeyOperationsRequest,
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
  ): ListSymmetricKeyOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListSymmetricKeyOperationsRequest,
    } as ListSymmetricKeyOperationsRequest;
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

  fromJSON(object: any): ListSymmetricKeyOperationsRequest {
    const message = {
      ...baseListSymmetricKeyOperationsRequest,
    } as ListSymmetricKeyOperationsRequest;
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

  toJSON(message: ListSymmetricKeyOperationsRequest): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListSymmetricKeyOperationsRequest>, I>
  >(object: I): ListSymmetricKeyOperationsRequest {
    const message = {
      ...baseListSymmetricKeyOperationsRequest,
    } as ListSymmetricKeyOperationsRequest;
    message.keyId = object.keyId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListSymmetricKeyOperationsRequest.$type,
  ListSymmetricKeyOperationsRequest
);

const baseListSymmetricKeyOperationsResponse: object = {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeyOperationsResponse",
  nextPageToken: "",
};

export const ListSymmetricKeyOperationsResponse = {
  $type: "yandex.cloud.kms.v1.ListSymmetricKeyOperationsResponse" as const,

  encode(
    message: ListSymmetricKeyOperationsResponse,
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
  ): ListSymmetricKeyOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListSymmetricKeyOperationsResponse,
    } as ListSymmetricKeyOperationsResponse;
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

  fromJSON(object: any): ListSymmetricKeyOperationsResponse {
    const message = {
      ...baseListSymmetricKeyOperationsResponse,
    } as ListSymmetricKeyOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListSymmetricKeyOperationsResponse): unknown {
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
    I extends Exact<DeepPartial<ListSymmetricKeyOperationsResponse>, I>
  >(object: I): ListSymmetricKeyOperationsResponse {
    const message = {
      ...baseListSymmetricKeyOperationsResponse,
    } as ListSymmetricKeyOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListSymmetricKeyOperationsResponse.$type,
  ListSymmetricKeyOperationsResponse
);

/** Set of methods for managing symmetric KMS keys. */
export const SymmetricKeyServiceService = {
  /** Creates a symmetric KMS key in the specified folder. */
  create: {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateSymmetricKeyRequest) =>
      Buffer.from(CreateSymmetricKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateSymmetricKeyRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Returns the specified symmetric KMS key.
   *
   *  To get the list of available symmetric KMS keys, make a [SymmetricKeyService.List] request.
   */
  get: {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetSymmetricKeyRequest) =>
      Buffer.from(GetSymmetricKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetSymmetricKeyRequest.decode(value),
    responseSerialize: (value: SymmetricKey) =>
      Buffer.from(SymmetricKey.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SymmetricKey.decode(value),
  },
  /** Returns the list of symmetric KMS keys in the specified folder. */
  list: {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSymmetricKeysRequest) =>
      Buffer.from(ListSymmetricKeysRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListSymmetricKeysRequest.decode(value),
    responseSerialize: (value: ListSymmetricKeysResponse) =>
      Buffer.from(ListSymmetricKeysResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListSymmetricKeysResponse.decode(value),
  },
  /** Returns the list of versions of the specified symmetric KMS key. */
  listVersions: {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/ListVersions",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSymmetricKeyVersionsRequest) =>
      Buffer.from(ListSymmetricKeyVersionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListSymmetricKeyVersionsRequest.decode(value),
    responseSerialize: (value: ListSymmetricKeyVersionsResponse) =>
      Buffer.from(ListSymmetricKeyVersionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListSymmetricKeyVersionsResponse.decode(value),
  },
  /** Updates the specified symmetric KMS key. */
  update: {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateSymmetricKeyRequest) =>
      Buffer.from(UpdateSymmetricKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateSymmetricKeyRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Deletes the specified symmetric KMS key. This action also automatically schedules
   * the destruction of all of the key's versions in 72 hours.
   *
   * The key and its versions appear absent in [SymmetricKeyService.Get] and [SymmetricKeyService.List]
   * requests, but can be restored within 72 hours with a request to tech support.
   */
  delete: {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteSymmetricKeyRequest) =>
      Buffer.from(DeleteSymmetricKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteSymmetricKeyRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Sets the primary version for the specified key. The primary version is used
   * by default for all encrypt/decrypt operations where no version ID is specified.
   */
  setPrimaryVersion: {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/SetPrimaryVersion",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetPrimarySymmetricKeyVersionRequest) =>
      Buffer.from(SetPrimarySymmetricKeyVersionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      SetPrimarySymmetricKeyVersionRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Schedules the specified key version for destruction.
   *
   * Scheduled destruction can be cancelled with the [SymmetricKeyService.CancelVersionDestruction] method.
   */
  scheduleVersionDestruction: {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/ScheduleVersionDestruction",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ScheduleSymmetricKeyVersionDestructionRequest) =>
      Buffer.from(
        ScheduleSymmetricKeyVersionDestructionRequest.encode(value).finish()
      ),
    requestDeserialize: (value: Buffer) =>
      ScheduleSymmetricKeyVersionDestructionRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Cancels previously scheduled version destruction, if the version hasn't been destroyed yet. */
  cancelVersionDestruction: {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/CancelVersionDestruction",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CancelSymmetricKeyVersionDestructionRequest) =>
      Buffer.from(
        CancelSymmetricKeyVersionDestructionRequest.encode(value).finish()
      ),
    requestDeserialize: (value: Buffer) =>
      CancelSymmetricKeyVersionDestructionRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Rotates the specified key: creates a new key version and makes it the primary version.
   * The old version remains available for decryption of ciphertext encrypted with it.
   */
  rotate: {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/Rotate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RotateSymmetricKeyRequest) =>
      Buffer.from(RotateSymmetricKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      RotateSymmetricKeyRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified symmetric KMS key. */
  listOperations: {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSymmetricKeyOperationsRequest) =>
      Buffer.from(ListSymmetricKeyOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListSymmetricKeyOperationsRequest.decode(value),
    responseSerialize: (value: ListSymmetricKeyOperationsResponse) =>
      Buffer.from(ListSymmetricKeyOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListSymmetricKeyOperationsResponse.decode(value),
  },
  /** Lists existing access bindings for the specified key. */
  listAccessBindings: {
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/ListAccessBindings",
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
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/SetAccessBindings",
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
    path: "/yandex.cloud.kms.v1.SymmetricKeyService/UpdateAccessBindings",
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

export interface SymmetricKeyServiceServer
  extends UntypedServiceImplementation {
  /** Creates a symmetric KMS key in the specified folder. */
  create: handleUnaryCall<CreateSymmetricKeyRequest, Operation>;
  /**
   * Returns the specified symmetric KMS key.
   *
   *  To get the list of available symmetric KMS keys, make a [SymmetricKeyService.List] request.
   */
  get: handleUnaryCall<GetSymmetricKeyRequest, SymmetricKey>;
  /** Returns the list of symmetric KMS keys in the specified folder. */
  list: handleUnaryCall<ListSymmetricKeysRequest, ListSymmetricKeysResponse>;
  /** Returns the list of versions of the specified symmetric KMS key. */
  listVersions: handleUnaryCall<
    ListSymmetricKeyVersionsRequest,
    ListSymmetricKeyVersionsResponse
  >;
  /** Updates the specified symmetric KMS key. */
  update: handleUnaryCall<UpdateSymmetricKeyRequest, Operation>;
  /**
   * Deletes the specified symmetric KMS key. This action also automatically schedules
   * the destruction of all of the key's versions in 72 hours.
   *
   * The key and its versions appear absent in [SymmetricKeyService.Get] and [SymmetricKeyService.List]
   * requests, but can be restored within 72 hours with a request to tech support.
   */
  delete: handleUnaryCall<DeleteSymmetricKeyRequest, Operation>;
  /**
   * Sets the primary version for the specified key. The primary version is used
   * by default for all encrypt/decrypt operations where no version ID is specified.
   */
  setPrimaryVersion: handleUnaryCall<
    SetPrimarySymmetricKeyVersionRequest,
    Operation
  >;
  /**
   * Schedules the specified key version for destruction.
   *
   * Scheduled destruction can be cancelled with the [SymmetricKeyService.CancelVersionDestruction] method.
   */
  scheduleVersionDestruction: handleUnaryCall<
    ScheduleSymmetricKeyVersionDestructionRequest,
    Operation
  >;
  /** Cancels previously scheduled version destruction, if the version hasn't been destroyed yet. */
  cancelVersionDestruction: handleUnaryCall<
    CancelSymmetricKeyVersionDestructionRequest,
    Operation
  >;
  /**
   * Rotates the specified key: creates a new key version and makes it the primary version.
   * The old version remains available for decryption of ciphertext encrypted with it.
   */
  rotate: handleUnaryCall<RotateSymmetricKeyRequest, Operation>;
  /** Lists operations for the specified symmetric KMS key. */
  listOperations: handleUnaryCall<
    ListSymmetricKeyOperationsRequest,
    ListSymmetricKeyOperationsResponse
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

export interface SymmetricKeyServiceClient extends Client {
  /** Creates a symmetric KMS key in the specified folder. */
  create(
    request: CreateSymmetricKeyRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateSymmetricKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateSymmetricKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Returns the specified symmetric KMS key.
   *
   *  To get the list of available symmetric KMS keys, make a [SymmetricKeyService.List] request.
   */
  get(
    request: GetSymmetricKeyRequest,
    callback: (error: ServiceError | null, response: SymmetricKey) => void
  ): ClientUnaryCall;
  get(
    request: GetSymmetricKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: SymmetricKey) => void
  ): ClientUnaryCall;
  get(
    request: GetSymmetricKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: SymmetricKey) => void
  ): ClientUnaryCall;
  /** Returns the list of symmetric KMS keys in the specified folder. */
  list(
    request: ListSymmetricKeysRequest,
    callback: (
      error: ServiceError | null,
      response: ListSymmetricKeysResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListSymmetricKeysRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListSymmetricKeysResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListSymmetricKeysRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListSymmetricKeysResponse
    ) => void
  ): ClientUnaryCall;
  /** Returns the list of versions of the specified symmetric KMS key. */
  listVersions(
    request: ListSymmetricKeyVersionsRequest,
    callback: (
      error: ServiceError | null,
      response: ListSymmetricKeyVersionsResponse
    ) => void
  ): ClientUnaryCall;
  listVersions(
    request: ListSymmetricKeyVersionsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListSymmetricKeyVersionsResponse
    ) => void
  ): ClientUnaryCall;
  listVersions(
    request: ListSymmetricKeyVersionsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListSymmetricKeyVersionsResponse
    ) => void
  ): ClientUnaryCall;
  /** Updates the specified symmetric KMS key. */
  update(
    request: UpdateSymmetricKeyRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateSymmetricKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateSymmetricKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Deletes the specified symmetric KMS key. This action also automatically schedules
   * the destruction of all of the key's versions in 72 hours.
   *
   * The key and its versions appear absent in [SymmetricKeyService.Get] and [SymmetricKeyService.List]
   * requests, but can be restored within 72 hours with a request to tech support.
   */
  delete(
    request: DeleteSymmetricKeyRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteSymmetricKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteSymmetricKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Sets the primary version for the specified key. The primary version is used
   * by default for all encrypt/decrypt operations where no version ID is specified.
   */
  setPrimaryVersion(
    request: SetPrimarySymmetricKeyVersionRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  setPrimaryVersion(
    request: SetPrimarySymmetricKeyVersionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  setPrimaryVersion(
    request: SetPrimarySymmetricKeyVersionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Schedules the specified key version for destruction.
   *
   * Scheduled destruction can be cancelled with the [SymmetricKeyService.CancelVersionDestruction] method.
   */
  scheduleVersionDestruction(
    request: ScheduleSymmetricKeyVersionDestructionRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  scheduleVersionDestruction(
    request: ScheduleSymmetricKeyVersionDestructionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  scheduleVersionDestruction(
    request: ScheduleSymmetricKeyVersionDestructionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Cancels previously scheduled version destruction, if the version hasn't been destroyed yet. */
  cancelVersionDestruction(
    request: CancelSymmetricKeyVersionDestructionRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  cancelVersionDestruction(
    request: CancelSymmetricKeyVersionDestructionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  cancelVersionDestruction(
    request: CancelSymmetricKeyVersionDestructionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Rotates the specified key: creates a new key version and makes it the primary version.
   * The old version remains available for decryption of ciphertext encrypted with it.
   */
  rotate(
    request: RotateSymmetricKeyRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  rotate(
    request: RotateSymmetricKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  rotate(
    request: RotateSymmetricKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified symmetric KMS key. */
  listOperations(
    request: ListSymmetricKeyOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListSymmetricKeyOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListSymmetricKeyOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListSymmetricKeyOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListSymmetricKeyOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListSymmetricKeyOperationsResponse
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

export const SymmetricKeyServiceClient = makeGenericClientConstructor(
  SymmetricKeyServiceService,
  "yandex.cloud.kms.v1.SymmetricKeyService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): SymmetricKeyServiceClient;
  service: typeof SymmetricKeyServiceService;
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
