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
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Duration } from "../../../../google/protobuf/duration";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Secret, Version } from "../../../../yandex/cloud/lockbox/v1/secret";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import {
  ListAccessBindingsRequest,
  ListAccessBindingsResponse,
  SetAccessBindingsRequest,
  UpdateAccessBindingsRequest,
} from "../../../../yandex/cloud/access/access";

export const protobufPackage = "yandex.cloud.lockbox.v1";

export interface PayloadEntryChange {
  $type: "yandex.cloud.lockbox.v1.PayloadEntryChange";
  /** Non-confidential key of the entry. */
  key: string;
  /** Use the field to set a text value. */
  textValue: string | undefined;
  /** Use the field to set a binary value. */
  binaryValue: Buffer | undefined;
}

export interface GetSecretRequest {
  $type: "yandex.cloud.lockbox.v1.GetSecretRequest";
  /**
   * ID of the secret to return.
   *
   * To get a secret ID make a [List] request.
   */
  secretId: string;
}

export interface ListSecretsRequest {
  $type: "yandex.cloud.lockbox.v1.ListSecretsRequest";
  /** ID of the folder to list secrets in. */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListSecretsRequest.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListSecretsRequest.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListSecretsResponse {
  $type: "yandex.cloud.lockbox.v1.ListSecretsResponse";
  /** List of secrets in the specified folder. */
  secrets: Secret[];
  /**
   * This token allows you to get the next page of results for list requests. If the number
   * of results is greater than the specified [ListSecretsRequest.page_size], use
   * the `next_page_token` as the value for the [ListSecretsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateSecretRequest {
  $type: "yandex.cloud.lockbox.v1.CreateSecretRequest";
  /** ID of the folder to create a secret in. */
  folderId: string;
  /** Name of the secret. */
  name: string;
  /** Description of the secret. */
  description: string;
  /**
   * Custom labels for the secret as `key:value` pairs. Maximum 64 per key.
   * For example, `"project": "mvp"` or `"source": "dictionary"`.
   */
  labels: { [key: string]: string };
  /** Optional ID of the KMS key will be used to encrypt and decrypt the secret. */
  kmsKeyId: string;
  /** Description of the first version. */
  versionDescription: string;
  /** Payload entries added to the first version. */
  versionPayloadEntries: PayloadEntryChange[];
  /** Flag that inhibits deletion of the secret. */
  deletionProtection: boolean;
}

export interface CreateSecretRequest_LabelsEntry {
  $type: "yandex.cloud.lockbox.v1.CreateSecretRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateSecretMetadata {
  $type: "yandex.cloud.lockbox.v1.CreateSecretMetadata";
  /** ID of the secret being created. */
  secretId: string;
  /** ID of the current version of the secret being created. */
  versionId: string;
}

export interface UpdateSecretRequest {
  $type: "yandex.cloud.lockbox.v1.UpdateSecretRequest";
  /** ID of the secret to update. */
  secretId: string;
  /** Field mask that specifies which attributes of the secret are going to be updated. */
  updateMask?: FieldMask;
  /** New name of the secret. */
  name: string;
  /** New description of the secret. */
  description: string;
  /** Custom labels for the secret as `key:value` pairs. Maximum 64 per key. */
  labels: { [key: string]: string };
  /** Flag that inhibits deletion of the secret. */
  deletionProtection: boolean;
}

export interface UpdateSecretRequest_LabelsEntry {
  $type: "yandex.cloud.lockbox.v1.UpdateSecretRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateSecretMetadata {
  $type: "yandex.cloud.lockbox.v1.UpdateSecretMetadata";
  /** ID of the secret being updated. */
  secretId: string;
}

export interface DeleteSecretRequest {
  $type: "yandex.cloud.lockbox.v1.DeleteSecretRequest";
  /** ID of the secret to be deleted. */
  secretId: string;
}

export interface DeleteSecretMetadata {
  $type: "yandex.cloud.lockbox.v1.DeleteSecretMetadata";
  /** ID of the secret being deleted. */
  secretId: string;
}

export interface ActivateSecretRequest {
  $type: "yandex.cloud.lockbox.v1.ActivateSecretRequest";
  /** ID of the secret to be activated. */
  secretId: string;
}

export interface ActivateSecretMetadata {
  $type: "yandex.cloud.lockbox.v1.ActivateSecretMetadata";
  /** ID of the secret being activated. */
  secretId: string;
}

export interface DeactivateSecretRequest {
  $type: "yandex.cloud.lockbox.v1.DeactivateSecretRequest";
  /** ID of the secret to be deactivated. */
  secretId: string;
}

export interface DeactivateSecretMetadata {
  $type: "yandex.cloud.lockbox.v1.DeactivateSecretMetadata";
  /** ID of the secret being deactivated. */
  secretId: string;
}

export interface AddVersionRequest {
  $type: "yandex.cloud.lockbox.v1.AddVersionRequest";
  /** ID of the secret. */
  secretId: string;
  /** Description of the version. */
  description: string;
  /** Describe how payload entries of the base version change in the added version. */
  payloadEntries: PayloadEntryChange[];
  /** Optional base version id. Defaults to the current version if not specified */
  baseVersionId: string;
}

export interface AddVersionMetadata {
  $type: "yandex.cloud.lockbox.v1.AddVersionMetadata";
  /** ID of the secret. */
  secretId: string;
  /** ID of the added version. */
  versionId: string;
}

export interface ListVersionsRequest {
  $type: "yandex.cloud.lockbox.v1.ListVersionsRequest";
  /** ID of the secret to list versions for. */
  secretId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListVersionsRequest.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListVersionsRequest.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListVersionsResponse {
  $type: "yandex.cloud.lockbox.v1.ListVersionsResponse";
  /** List of versions for the specified secret. */
  versions: Version[];
  /**
   * This token allows you to get the next page of results for list requests. If the number
   * of results is greater than the specified [ListVersionsRequest.page_size], use
   * the `next_page_token` as the value for the [ListVersionsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface ScheduleVersionDestructionRequest {
  $type: "yandex.cloud.lockbox.v1.ScheduleVersionDestructionRequest";
  /** ID of the secret whose version should be scheduled for destruction. */
  secretId: string;
  /** ID of the version to be destroyed. */
  versionId: string;
  /**
   * Time interval between the version destruction request and actual destruction.
   * Default value: 7 days.
   */
  pendingPeriod?: Duration;
}

export interface ScheduleVersionDestructionMetadata {
  $type: "yandex.cloud.lockbox.v1.ScheduleVersionDestructionMetadata";
  /** ID of the secret whose version is being scheduled for destruction. */
  secretId: string;
  /** ID of the version that is being scheduled for destruction. */
  versionId: string;
  /** Destruction timestamp. */
  destroyAt?: Date;
}

export interface CancelVersionDestructionRequest {
  $type: "yandex.cloud.lockbox.v1.CancelVersionDestructionRequest";
  /** ID of the secret to cancel a version's destruction for. */
  secretId: string;
  /** ID of the secret whose scheduled destruction should be cancelled. */
  versionId: string;
}

export interface CancelVersionDestructionMetadata {
  $type: "yandex.cloud.lockbox.v1.CancelVersionDestructionMetadata";
  /** ID of the secret whose version's destruction is being cancelled. */
  secretId: string;
  /** ID of the version whose scheduled destruction is being cancelled. */
  versionId: string;
}

export interface ListSecretOperationsRequest {
  $type: "yandex.cloud.lockbox.v1.ListSecretOperationsRequest";
  /** ID of the secret to get operations for. */
  secretId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `page_size`, the service returns a [ListSecretOperationsRequest.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListSecretOperationsRequest.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListSecretOperationsResponse {
  $type: "yandex.cloud.lockbox.v1.ListSecretOperationsResponse";
  /** List of operations for the specified secret. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListSecretOperationsResponse.page_size], use the `next_page_token` as the value
   * for the [ListSecretOperationsResponse.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

const basePayloadEntryChange: object = {
  $type: "yandex.cloud.lockbox.v1.PayloadEntryChange",
  key: "",
};

export const PayloadEntryChange = {
  $type: "yandex.cloud.lockbox.v1.PayloadEntryChange" as const,

  encode(
    message: PayloadEntryChange,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.textValue !== undefined) {
      writer.uint32(18).string(message.textValue);
    }
    if (message.binaryValue !== undefined) {
      writer.uint32(26).bytes(message.binaryValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PayloadEntryChange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePayloadEntryChange } as PayloadEntryChange;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.textValue = reader.string();
          break;
        case 3:
          message.binaryValue = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PayloadEntryChange {
    const message = { ...basePayloadEntryChange } as PayloadEntryChange;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.textValue =
      object.textValue !== undefined && object.textValue !== null
        ? String(object.textValue)
        : undefined;
    message.binaryValue =
      object.binaryValue !== undefined && object.binaryValue !== null
        ? Buffer.from(bytesFromBase64(object.binaryValue))
        : undefined;
    return message;
  },

  toJSON(message: PayloadEntryChange): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.textValue !== undefined && (obj.textValue = message.textValue);
    message.binaryValue !== undefined &&
      (obj.binaryValue =
        message.binaryValue !== undefined
          ? base64FromBytes(message.binaryValue)
          : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PayloadEntryChange>, I>>(
    object: I
  ): PayloadEntryChange {
    const message = { ...basePayloadEntryChange } as PayloadEntryChange;
    message.key = object.key ?? "";
    message.textValue = object.textValue ?? undefined;
    message.binaryValue = object.binaryValue ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(PayloadEntryChange.$type, PayloadEntryChange);

const baseGetSecretRequest: object = {
  $type: "yandex.cloud.lockbox.v1.GetSecretRequest",
  secretId: "",
};

export const GetSecretRequest = {
  $type: "yandex.cloud.lockbox.v1.GetSecretRequest" as const,

  encode(
    message: GetSecretRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSecretRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetSecretRequest } as GetSecretRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secretId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetSecretRequest {
    const message = { ...baseGetSecretRequest } as GetSecretRequest;
    message.secretId =
      object.secretId !== undefined && object.secretId !== null
        ? String(object.secretId)
        : "";
    return message;
  },

  toJSON(message: GetSecretRequest): unknown {
    const obj: any = {};
    message.secretId !== undefined && (obj.secretId = message.secretId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetSecretRequest>, I>>(
    object: I
  ): GetSecretRequest {
    const message = { ...baseGetSecretRequest } as GetSecretRequest;
    message.secretId = object.secretId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetSecretRequest.$type, GetSecretRequest);

const baseListSecretsRequest: object = {
  $type: "yandex.cloud.lockbox.v1.ListSecretsRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListSecretsRequest = {
  $type: "yandex.cloud.lockbox.v1.ListSecretsRequest" as const,

  encode(
    message: ListSecretsRequest,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSecretsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListSecretsRequest } as ListSecretsRequest;
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

  fromJSON(object: any): ListSecretsRequest {
    const message = { ...baseListSecretsRequest } as ListSecretsRequest;
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

  toJSON(message: ListSecretsRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListSecretsRequest>, I>>(
    object: I
  ): ListSecretsRequest {
    const message = { ...baseListSecretsRequest } as ListSecretsRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSecretsRequest.$type, ListSecretsRequest);

const baseListSecretsResponse: object = {
  $type: "yandex.cloud.lockbox.v1.ListSecretsResponse",
  nextPageToken: "",
};

export const ListSecretsResponse = {
  $type: "yandex.cloud.lockbox.v1.ListSecretsResponse" as const,

  encode(
    message: ListSecretsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.secrets) {
      Secret.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSecretsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListSecretsResponse } as ListSecretsResponse;
    message.secrets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secrets.push(Secret.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListSecretsResponse {
    const message = { ...baseListSecretsResponse } as ListSecretsResponse;
    message.secrets = (object.secrets ?? []).map((e: any) =>
      Secret.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListSecretsResponse): unknown {
    const obj: any = {};
    if (message.secrets) {
      obj.secrets = message.secrets.map((e) =>
        e ? Secret.toJSON(e) : undefined
      );
    } else {
      obj.secrets = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListSecretsResponse>, I>>(
    object: I
  ): ListSecretsResponse {
    const message = { ...baseListSecretsResponse } as ListSecretsResponse;
    message.secrets = object.secrets?.map((e) => Secret.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSecretsResponse.$type, ListSecretsResponse);

const baseCreateSecretRequest: object = {
  $type: "yandex.cloud.lockbox.v1.CreateSecretRequest",
  folderId: "",
  name: "",
  description: "",
  kmsKeyId: "",
  versionDescription: "",
  deletionProtection: false,
};

export const CreateSecretRequest = {
  $type: "yandex.cloud.lockbox.v1.CreateSecretRequest" as const,

  encode(
    message: CreateSecretRequest,
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
      CreateSecretRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.lockbox.v1.CreateSecretRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.kmsKeyId !== "") {
      writer.uint32(42).string(message.kmsKeyId);
    }
    if (message.versionDescription !== "") {
      writer.uint32(50).string(message.versionDescription);
    }
    for (const v of message.versionPayloadEntries) {
      PayloadEntryChange.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.deletionProtection === true) {
      writer.uint32(64).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSecretRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateSecretRequest } as CreateSecretRequest;
    message.labels = {};
    message.versionPayloadEntries = [];
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
          const entry4 = CreateSecretRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.kmsKeyId = reader.string();
          break;
        case 6:
          message.versionDescription = reader.string();
          break;
        case 7:
          message.versionPayloadEntries.push(
            PayloadEntryChange.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.deletionProtection = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateSecretRequest {
    const message = { ...baseCreateSecretRequest } as CreateSecretRequest;
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
    message.kmsKeyId =
      object.kmsKeyId !== undefined && object.kmsKeyId !== null
        ? String(object.kmsKeyId)
        : "";
    message.versionDescription =
      object.versionDescription !== undefined &&
      object.versionDescription !== null
        ? String(object.versionDescription)
        : "";
    message.versionPayloadEntries = (object.versionPayloadEntries ?? []).map(
      (e: any) => PayloadEntryChange.fromJSON(e)
    );
    message.deletionProtection =
      object.deletionProtection !== undefined &&
      object.deletionProtection !== null
        ? Boolean(object.deletionProtection)
        : false;
    return message;
  },

  toJSON(message: CreateSecretRequest): unknown {
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
    message.kmsKeyId !== undefined && (obj.kmsKeyId = message.kmsKeyId);
    message.versionDescription !== undefined &&
      (obj.versionDescription = message.versionDescription);
    if (message.versionPayloadEntries) {
      obj.versionPayloadEntries = message.versionPayloadEntries.map((e) =>
        e ? PayloadEntryChange.toJSON(e) : undefined
      );
    } else {
      obj.versionPayloadEntries = [];
    }
    message.deletionProtection !== undefined &&
      (obj.deletionProtection = message.deletionProtection);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateSecretRequest>, I>>(
    object: I
  ): CreateSecretRequest {
    const message = { ...baseCreateSecretRequest } as CreateSecretRequest;
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
    message.kmsKeyId = object.kmsKeyId ?? "";
    message.versionDescription = object.versionDescription ?? "";
    message.versionPayloadEntries =
      object.versionPayloadEntries?.map((e) =>
        PayloadEntryChange.fromPartial(e)
      ) || [];
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(CreateSecretRequest.$type, CreateSecretRequest);

const baseCreateSecretRequest_LabelsEntry: object = {
  $type: "yandex.cloud.lockbox.v1.CreateSecretRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateSecretRequest_LabelsEntry = {
  $type: "yandex.cloud.lockbox.v1.CreateSecretRequest.LabelsEntry" as const,

  encode(
    message: CreateSecretRequest_LabelsEntry,
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
  ): CreateSecretRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateSecretRequest_LabelsEntry,
    } as CreateSecretRequest_LabelsEntry;
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

  fromJSON(object: any): CreateSecretRequest_LabelsEntry {
    const message = {
      ...baseCreateSecretRequest_LabelsEntry,
    } as CreateSecretRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateSecretRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateSecretRequest_LabelsEntry>, I>>(
    object: I
  ): CreateSecretRequest_LabelsEntry {
    const message = {
      ...baseCreateSecretRequest_LabelsEntry,
    } as CreateSecretRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateSecretRequest_LabelsEntry.$type,
  CreateSecretRequest_LabelsEntry
);

const baseCreateSecretMetadata: object = {
  $type: "yandex.cloud.lockbox.v1.CreateSecretMetadata",
  secretId: "",
  versionId: "",
};

export const CreateSecretMetadata = {
  $type: "yandex.cloud.lockbox.v1.CreateSecretMetadata" as const,

  encode(
    message: CreateSecretMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateSecretMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateSecretMetadata } as CreateSecretMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secretId = reader.string();
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

  fromJSON(object: any): CreateSecretMetadata {
    const message = { ...baseCreateSecretMetadata } as CreateSecretMetadata;
    message.secretId =
      object.secretId !== undefined && object.secretId !== null
        ? String(object.secretId)
        : "";
    message.versionId =
      object.versionId !== undefined && object.versionId !== null
        ? String(object.versionId)
        : "";
    return message;
  },

  toJSON(message: CreateSecretMetadata): unknown {
    const obj: any = {};
    message.secretId !== undefined && (obj.secretId = message.secretId);
    message.versionId !== undefined && (obj.versionId = message.versionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateSecretMetadata>, I>>(
    object: I
  ): CreateSecretMetadata {
    const message = { ...baseCreateSecretMetadata } as CreateSecretMetadata;
    message.secretId = object.secretId ?? "";
    message.versionId = object.versionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateSecretMetadata.$type, CreateSecretMetadata);

const baseUpdateSecretRequest: object = {
  $type: "yandex.cloud.lockbox.v1.UpdateSecretRequest",
  secretId: "",
  name: "",
  description: "",
  deletionProtection: false,
};

export const UpdateSecretRequest = {
  $type: "yandex.cloud.lockbox.v1.UpdateSecretRequest" as const,

  encode(
    message: UpdateSecretRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
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
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateSecretRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.lockbox.v1.UpdateSecretRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.deletionProtection === true) {
      writer.uint32(48).bool(message.deletionProtection);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSecretRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateSecretRequest } as UpdateSecretRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secretId = reader.string();
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
          const entry5 = UpdateSecretRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
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

  fromJSON(object: any): UpdateSecretRequest {
    const message = { ...baseUpdateSecretRequest } as UpdateSecretRequest;
    message.secretId =
      object.secretId !== undefined && object.secretId !== null
        ? String(object.secretId)
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

  toJSON(message: UpdateSecretRequest): unknown {
    const obj: any = {};
    message.secretId !== undefined && (obj.secretId = message.secretId);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
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

  fromPartial<I extends Exact<DeepPartial<UpdateSecretRequest>, I>>(
    object: I
  ): UpdateSecretRequest {
    const message = { ...baseUpdateSecretRequest } as UpdateSecretRequest;
    message.secretId = object.secretId ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
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
    message.deletionProtection = object.deletionProtection ?? false;
    return message;
  },
};

messageTypeRegistry.set(UpdateSecretRequest.$type, UpdateSecretRequest);

const baseUpdateSecretRequest_LabelsEntry: object = {
  $type: "yandex.cloud.lockbox.v1.UpdateSecretRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateSecretRequest_LabelsEntry = {
  $type: "yandex.cloud.lockbox.v1.UpdateSecretRequest.LabelsEntry" as const,

  encode(
    message: UpdateSecretRequest_LabelsEntry,
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
  ): UpdateSecretRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateSecretRequest_LabelsEntry,
    } as UpdateSecretRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateSecretRequest_LabelsEntry {
    const message = {
      ...baseUpdateSecretRequest_LabelsEntry,
    } as UpdateSecretRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateSecretRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSecretRequest_LabelsEntry>, I>>(
    object: I
  ): UpdateSecretRequest_LabelsEntry {
    const message = {
      ...baseUpdateSecretRequest_LabelsEntry,
    } as UpdateSecretRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateSecretRequest_LabelsEntry.$type,
  UpdateSecretRequest_LabelsEntry
);

const baseUpdateSecretMetadata: object = {
  $type: "yandex.cloud.lockbox.v1.UpdateSecretMetadata",
  secretId: "",
};

export const UpdateSecretMetadata = {
  $type: "yandex.cloud.lockbox.v1.UpdateSecretMetadata" as const,

  encode(
    message: UpdateSecretMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateSecretMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateSecretMetadata } as UpdateSecretMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secretId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateSecretMetadata {
    const message = { ...baseUpdateSecretMetadata } as UpdateSecretMetadata;
    message.secretId =
      object.secretId !== undefined && object.secretId !== null
        ? String(object.secretId)
        : "";
    return message;
  },

  toJSON(message: UpdateSecretMetadata): unknown {
    const obj: any = {};
    message.secretId !== undefined && (obj.secretId = message.secretId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSecretMetadata>, I>>(
    object: I
  ): UpdateSecretMetadata {
    const message = { ...baseUpdateSecretMetadata } as UpdateSecretMetadata;
    message.secretId = object.secretId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateSecretMetadata.$type, UpdateSecretMetadata);

const baseDeleteSecretRequest: object = {
  $type: "yandex.cloud.lockbox.v1.DeleteSecretRequest",
  secretId: "",
};

export const DeleteSecretRequest = {
  $type: "yandex.cloud.lockbox.v1.DeleteSecretRequest" as const,

  encode(
    message: DeleteSecretRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSecretRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteSecretRequest } as DeleteSecretRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secretId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteSecretRequest {
    const message = { ...baseDeleteSecretRequest } as DeleteSecretRequest;
    message.secretId =
      object.secretId !== undefined && object.secretId !== null
        ? String(object.secretId)
        : "";
    return message;
  },

  toJSON(message: DeleteSecretRequest): unknown {
    const obj: any = {};
    message.secretId !== undefined && (obj.secretId = message.secretId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteSecretRequest>, I>>(
    object: I
  ): DeleteSecretRequest {
    const message = { ...baseDeleteSecretRequest } as DeleteSecretRequest;
    message.secretId = object.secretId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteSecretRequest.$type, DeleteSecretRequest);

const baseDeleteSecretMetadata: object = {
  $type: "yandex.cloud.lockbox.v1.DeleteSecretMetadata",
  secretId: "",
};

export const DeleteSecretMetadata = {
  $type: "yandex.cloud.lockbox.v1.DeleteSecretMetadata" as const,

  encode(
    message: DeleteSecretMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteSecretMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteSecretMetadata } as DeleteSecretMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secretId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteSecretMetadata {
    const message = { ...baseDeleteSecretMetadata } as DeleteSecretMetadata;
    message.secretId =
      object.secretId !== undefined && object.secretId !== null
        ? String(object.secretId)
        : "";
    return message;
  },

  toJSON(message: DeleteSecretMetadata): unknown {
    const obj: any = {};
    message.secretId !== undefined && (obj.secretId = message.secretId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteSecretMetadata>, I>>(
    object: I
  ): DeleteSecretMetadata {
    const message = { ...baseDeleteSecretMetadata } as DeleteSecretMetadata;
    message.secretId = object.secretId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteSecretMetadata.$type, DeleteSecretMetadata);

const baseActivateSecretRequest: object = {
  $type: "yandex.cloud.lockbox.v1.ActivateSecretRequest",
  secretId: "",
};

export const ActivateSecretRequest = {
  $type: "yandex.cloud.lockbox.v1.ActivateSecretRequest" as const,

  encode(
    message: ActivateSecretRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ActivateSecretRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseActivateSecretRequest } as ActivateSecretRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secretId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActivateSecretRequest {
    const message = { ...baseActivateSecretRequest } as ActivateSecretRequest;
    message.secretId =
      object.secretId !== undefined && object.secretId !== null
        ? String(object.secretId)
        : "";
    return message;
  },

  toJSON(message: ActivateSecretRequest): unknown {
    const obj: any = {};
    message.secretId !== undefined && (obj.secretId = message.secretId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActivateSecretRequest>, I>>(
    object: I
  ): ActivateSecretRequest {
    const message = { ...baseActivateSecretRequest } as ActivateSecretRequest;
    message.secretId = object.secretId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ActivateSecretRequest.$type, ActivateSecretRequest);

const baseActivateSecretMetadata: object = {
  $type: "yandex.cloud.lockbox.v1.ActivateSecretMetadata",
  secretId: "",
};

export const ActivateSecretMetadata = {
  $type: "yandex.cloud.lockbox.v1.ActivateSecretMetadata" as const,

  encode(
    message: ActivateSecretMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ActivateSecretMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseActivateSecretMetadata } as ActivateSecretMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secretId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActivateSecretMetadata {
    const message = { ...baseActivateSecretMetadata } as ActivateSecretMetadata;
    message.secretId =
      object.secretId !== undefined && object.secretId !== null
        ? String(object.secretId)
        : "";
    return message;
  },

  toJSON(message: ActivateSecretMetadata): unknown {
    const obj: any = {};
    message.secretId !== undefined && (obj.secretId = message.secretId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActivateSecretMetadata>, I>>(
    object: I
  ): ActivateSecretMetadata {
    const message = { ...baseActivateSecretMetadata } as ActivateSecretMetadata;
    message.secretId = object.secretId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ActivateSecretMetadata.$type, ActivateSecretMetadata);

const baseDeactivateSecretRequest: object = {
  $type: "yandex.cloud.lockbox.v1.DeactivateSecretRequest",
  secretId: "",
};

export const DeactivateSecretRequest = {
  $type: "yandex.cloud.lockbox.v1.DeactivateSecretRequest" as const,

  encode(
    message: DeactivateSecretRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeactivateSecretRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeactivateSecretRequest,
    } as DeactivateSecretRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secretId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeactivateSecretRequest {
    const message = {
      ...baseDeactivateSecretRequest,
    } as DeactivateSecretRequest;
    message.secretId =
      object.secretId !== undefined && object.secretId !== null
        ? String(object.secretId)
        : "";
    return message;
  },

  toJSON(message: DeactivateSecretRequest): unknown {
    const obj: any = {};
    message.secretId !== undefined && (obj.secretId = message.secretId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeactivateSecretRequest>, I>>(
    object: I
  ): DeactivateSecretRequest {
    const message = {
      ...baseDeactivateSecretRequest,
    } as DeactivateSecretRequest;
    message.secretId = object.secretId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeactivateSecretRequest.$type, DeactivateSecretRequest);

const baseDeactivateSecretMetadata: object = {
  $type: "yandex.cloud.lockbox.v1.DeactivateSecretMetadata",
  secretId: "",
};

export const DeactivateSecretMetadata = {
  $type: "yandex.cloud.lockbox.v1.DeactivateSecretMetadata" as const,

  encode(
    message: DeactivateSecretMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeactivateSecretMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeactivateSecretMetadata,
    } as DeactivateSecretMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secretId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeactivateSecretMetadata {
    const message = {
      ...baseDeactivateSecretMetadata,
    } as DeactivateSecretMetadata;
    message.secretId =
      object.secretId !== undefined && object.secretId !== null
        ? String(object.secretId)
        : "";
    return message;
  },

  toJSON(message: DeactivateSecretMetadata): unknown {
    const obj: any = {};
    message.secretId !== undefined && (obj.secretId = message.secretId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeactivateSecretMetadata>, I>>(
    object: I
  ): DeactivateSecretMetadata {
    const message = {
      ...baseDeactivateSecretMetadata,
    } as DeactivateSecretMetadata;
    message.secretId = object.secretId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeactivateSecretMetadata.$type,
  DeactivateSecretMetadata
);

const baseAddVersionRequest: object = {
  $type: "yandex.cloud.lockbox.v1.AddVersionRequest",
  secretId: "",
  description: "",
  baseVersionId: "",
};

export const AddVersionRequest = {
  $type: "yandex.cloud.lockbox.v1.AddVersionRequest" as const,

  encode(
    message: AddVersionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.payloadEntries) {
      PayloadEntryChange.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.baseVersionId !== "") {
      writer.uint32(34).string(message.baseVersionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddVersionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddVersionRequest } as AddVersionRequest;
    message.payloadEntries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secretId = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.payloadEntries.push(
            PayloadEntryChange.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.baseVersionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddVersionRequest {
    const message = { ...baseAddVersionRequest } as AddVersionRequest;
    message.secretId =
      object.secretId !== undefined && object.secretId !== null
        ? String(object.secretId)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.payloadEntries = (object.payloadEntries ?? []).map((e: any) =>
      PayloadEntryChange.fromJSON(e)
    );
    message.baseVersionId =
      object.baseVersionId !== undefined && object.baseVersionId !== null
        ? String(object.baseVersionId)
        : "";
    return message;
  },

  toJSON(message: AddVersionRequest): unknown {
    const obj: any = {};
    message.secretId !== undefined && (obj.secretId = message.secretId);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.payloadEntries) {
      obj.payloadEntries = message.payloadEntries.map((e) =>
        e ? PayloadEntryChange.toJSON(e) : undefined
      );
    } else {
      obj.payloadEntries = [];
    }
    message.baseVersionId !== undefined &&
      (obj.baseVersionId = message.baseVersionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddVersionRequest>, I>>(
    object: I
  ): AddVersionRequest {
    const message = { ...baseAddVersionRequest } as AddVersionRequest;
    message.secretId = object.secretId ?? "";
    message.description = object.description ?? "";
    message.payloadEntries =
      object.payloadEntries?.map((e) => PayloadEntryChange.fromPartial(e)) ||
      [];
    message.baseVersionId = object.baseVersionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddVersionRequest.$type, AddVersionRequest);

const baseAddVersionMetadata: object = {
  $type: "yandex.cloud.lockbox.v1.AddVersionMetadata",
  secretId: "",
  versionId: "",
};

export const AddVersionMetadata = {
  $type: "yandex.cloud.lockbox.v1.AddVersionMetadata" as const,

  encode(
    message: AddVersionMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddVersionMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddVersionMetadata } as AddVersionMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secretId = reader.string();
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

  fromJSON(object: any): AddVersionMetadata {
    const message = { ...baseAddVersionMetadata } as AddVersionMetadata;
    message.secretId =
      object.secretId !== undefined && object.secretId !== null
        ? String(object.secretId)
        : "";
    message.versionId =
      object.versionId !== undefined && object.versionId !== null
        ? String(object.versionId)
        : "";
    return message;
  },

  toJSON(message: AddVersionMetadata): unknown {
    const obj: any = {};
    message.secretId !== undefined && (obj.secretId = message.secretId);
    message.versionId !== undefined && (obj.versionId = message.versionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddVersionMetadata>, I>>(
    object: I
  ): AddVersionMetadata {
    const message = { ...baseAddVersionMetadata } as AddVersionMetadata;
    message.secretId = object.secretId ?? "";
    message.versionId = object.versionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddVersionMetadata.$type, AddVersionMetadata);

const baseListVersionsRequest: object = {
  $type: "yandex.cloud.lockbox.v1.ListVersionsRequest",
  secretId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListVersionsRequest = {
  $type: "yandex.cloud.lockbox.v1.ListVersionsRequest" as const,

  encode(
    message: ListVersionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListVersionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListVersionsRequest } as ListVersionsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secretId = reader.string();
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

  fromJSON(object: any): ListVersionsRequest {
    const message = { ...baseListVersionsRequest } as ListVersionsRequest;
    message.secretId =
      object.secretId !== undefined && object.secretId !== null
        ? String(object.secretId)
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

  toJSON(message: ListVersionsRequest): unknown {
    const obj: any = {};
    message.secretId !== undefined && (obj.secretId = message.secretId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListVersionsRequest>, I>>(
    object: I
  ): ListVersionsRequest {
    const message = { ...baseListVersionsRequest } as ListVersionsRequest;
    message.secretId = object.secretId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListVersionsRequest.$type, ListVersionsRequest);

const baseListVersionsResponse: object = {
  $type: "yandex.cloud.lockbox.v1.ListVersionsResponse",
  nextPageToken: "",
};

export const ListVersionsResponse = {
  $type: "yandex.cloud.lockbox.v1.ListVersionsResponse" as const,

  encode(
    message: ListVersionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.versions) {
      Version.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListVersionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListVersionsResponse } as ListVersionsResponse;
    message.versions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.versions.push(Version.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListVersionsResponse {
    const message = { ...baseListVersionsResponse } as ListVersionsResponse;
    message.versions = (object.versions ?? []).map((e: any) =>
      Version.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListVersionsResponse): unknown {
    const obj: any = {};
    if (message.versions) {
      obj.versions = message.versions.map((e) =>
        e ? Version.toJSON(e) : undefined
      );
    } else {
      obj.versions = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListVersionsResponse>, I>>(
    object: I
  ): ListVersionsResponse {
    const message = { ...baseListVersionsResponse } as ListVersionsResponse;
    message.versions =
      object.versions?.map((e) => Version.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListVersionsResponse.$type, ListVersionsResponse);

const baseScheduleVersionDestructionRequest: object = {
  $type: "yandex.cloud.lockbox.v1.ScheduleVersionDestructionRequest",
  secretId: "",
  versionId: "",
};

export const ScheduleVersionDestructionRequest = {
  $type: "yandex.cloud.lockbox.v1.ScheduleVersionDestructionRequest" as const,

  encode(
    message: ScheduleVersionDestructionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
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
  ): ScheduleVersionDestructionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseScheduleVersionDestructionRequest,
    } as ScheduleVersionDestructionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secretId = reader.string();
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

  fromJSON(object: any): ScheduleVersionDestructionRequest {
    const message = {
      ...baseScheduleVersionDestructionRequest,
    } as ScheduleVersionDestructionRequest;
    message.secretId =
      object.secretId !== undefined && object.secretId !== null
        ? String(object.secretId)
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

  toJSON(message: ScheduleVersionDestructionRequest): unknown {
    const obj: any = {};
    message.secretId !== undefined && (obj.secretId = message.secretId);
    message.versionId !== undefined && (obj.versionId = message.versionId);
    message.pendingPeriod !== undefined &&
      (obj.pendingPeriod = message.pendingPeriod
        ? Duration.toJSON(message.pendingPeriod)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ScheduleVersionDestructionRequest>, I>
  >(object: I): ScheduleVersionDestructionRequest {
    const message = {
      ...baseScheduleVersionDestructionRequest,
    } as ScheduleVersionDestructionRequest;
    message.secretId = object.secretId ?? "";
    message.versionId = object.versionId ?? "";
    message.pendingPeriod =
      object.pendingPeriod !== undefined && object.pendingPeriod !== null
        ? Duration.fromPartial(object.pendingPeriod)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ScheduleVersionDestructionRequest.$type,
  ScheduleVersionDestructionRequest
);

const baseScheduleVersionDestructionMetadata: object = {
  $type: "yandex.cloud.lockbox.v1.ScheduleVersionDestructionMetadata",
  secretId: "",
  versionId: "",
};

export const ScheduleVersionDestructionMetadata = {
  $type: "yandex.cloud.lockbox.v1.ScheduleVersionDestructionMetadata" as const,

  encode(
    message: ScheduleVersionDestructionMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
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
  ): ScheduleVersionDestructionMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseScheduleVersionDestructionMetadata,
    } as ScheduleVersionDestructionMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secretId = reader.string();
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

  fromJSON(object: any): ScheduleVersionDestructionMetadata {
    const message = {
      ...baseScheduleVersionDestructionMetadata,
    } as ScheduleVersionDestructionMetadata;
    message.secretId =
      object.secretId !== undefined && object.secretId !== null
        ? String(object.secretId)
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

  toJSON(message: ScheduleVersionDestructionMetadata): unknown {
    const obj: any = {};
    message.secretId !== undefined && (obj.secretId = message.secretId);
    message.versionId !== undefined && (obj.versionId = message.versionId);
    message.destroyAt !== undefined &&
      (obj.destroyAt = message.destroyAt.toISOString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ScheduleVersionDestructionMetadata>, I>
  >(object: I): ScheduleVersionDestructionMetadata {
    const message = {
      ...baseScheduleVersionDestructionMetadata,
    } as ScheduleVersionDestructionMetadata;
    message.secretId = object.secretId ?? "";
    message.versionId = object.versionId ?? "";
    message.destroyAt = object.destroyAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ScheduleVersionDestructionMetadata.$type,
  ScheduleVersionDestructionMetadata
);

const baseCancelVersionDestructionRequest: object = {
  $type: "yandex.cloud.lockbox.v1.CancelVersionDestructionRequest",
  secretId: "",
  versionId: "",
};

export const CancelVersionDestructionRequest = {
  $type: "yandex.cloud.lockbox.v1.CancelVersionDestructionRequest" as const,

  encode(
    message: CancelVersionDestructionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CancelVersionDestructionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCancelVersionDestructionRequest,
    } as CancelVersionDestructionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secretId = reader.string();
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

  fromJSON(object: any): CancelVersionDestructionRequest {
    const message = {
      ...baseCancelVersionDestructionRequest,
    } as CancelVersionDestructionRequest;
    message.secretId =
      object.secretId !== undefined && object.secretId !== null
        ? String(object.secretId)
        : "";
    message.versionId =
      object.versionId !== undefined && object.versionId !== null
        ? String(object.versionId)
        : "";
    return message;
  },

  toJSON(message: CancelVersionDestructionRequest): unknown {
    const obj: any = {};
    message.secretId !== undefined && (obj.secretId = message.secretId);
    message.versionId !== undefined && (obj.versionId = message.versionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CancelVersionDestructionRequest>, I>>(
    object: I
  ): CancelVersionDestructionRequest {
    const message = {
      ...baseCancelVersionDestructionRequest,
    } as CancelVersionDestructionRequest;
    message.secretId = object.secretId ?? "";
    message.versionId = object.versionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CancelVersionDestructionRequest.$type,
  CancelVersionDestructionRequest
);

const baseCancelVersionDestructionMetadata: object = {
  $type: "yandex.cloud.lockbox.v1.CancelVersionDestructionMetadata",
  secretId: "",
  versionId: "",
};

export const CancelVersionDestructionMetadata = {
  $type: "yandex.cloud.lockbox.v1.CancelVersionDestructionMetadata" as const,

  encode(
    message: CancelVersionDestructionMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CancelVersionDestructionMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCancelVersionDestructionMetadata,
    } as CancelVersionDestructionMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secretId = reader.string();
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

  fromJSON(object: any): CancelVersionDestructionMetadata {
    const message = {
      ...baseCancelVersionDestructionMetadata,
    } as CancelVersionDestructionMetadata;
    message.secretId =
      object.secretId !== undefined && object.secretId !== null
        ? String(object.secretId)
        : "";
    message.versionId =
      object.versionId !== undefined && object.versionId !== null
        ? String(object.versionId)
        : "";
    return message;
  },

  toJSON(message: CancelVersionDestructionMetadata): unknown {
    const obj: any = {};
    message.secretId !== undefined && (obj.secretId = message.secretId);
    message.versionId !== undefined && (obj.versionId = message.versionId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CancelVersionDestructionMetadata>, I>
  >(object: I): CancelVersionDestructionMetadata {
    const message = {
      ...baseCancelVersionDestructionMetadata,
    } as CancelVersionDestructionMetadata;
    message.secretId = object.secretId ?? "";
    message.versionId = object.versionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CancelVersionDestructionMetadata.$type,
  CancelVersionDestructionMetadata
);

const baseListSecretOperationsRequest: object = {
  $type: "yandex.cloud.lockbox.v1.ListSecretOperationsRequest",
  secretId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListSecretOperationsRequest = {
  $type: "yandex.cloud.lockbox.v1.ListSecretOperationsRequest" as const,

  encode(
    message: ListSecretOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.secretId !== "") {
      writer.uint32(10).string(message.secretId);
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
  ): ListSecretOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListSecretOperationsRequest,
    } as ListSecretOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secretId = reader.string();
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

  fromJSON(object: any): ListSecretOperationsRequest {
    const message = {
      ...baseListSecretOperationsRequest,
    } as ListSecretOperationsRequest;
    message.secretId =
      object.secretId !== undefined && object.secretId !== null
        ? String(object.secretId)
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

  toJSON(message: ListSecretOperationsRequest): unknown {
    const obj: any = {};
    message.secretId !== undefined && (obj.secretId = message.secretId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListSecretOperationsRequest>, I>>(
    object: I
  ): ListSecretOperationsRequest {
    const message = {
      ...baseListSecretOperationsRequest,
    } as ListSecretOperationsRequest;
    message.secretId = object.secretId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListSecretOperationsRequest.$type,
  ListSecretOperationsRequest
);

const baseListSecretOperationsResponse: object = {
  $type: "yandex.cloud.lockbox.v1.ListSecretOperationsResponse",
  nextPageToken: "",
};

export const ListSecretOperationsResponse = {
  $type: "yandex.cloud.lockbox.v1.ListSecretOperationsResponse" as const,

  encode(
    message: ListSecretOperationsResponse,
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
  ): ListSecretOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListSecretOperationsResponse,
    } as ListSecretOperationsResponse;
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

  fromJSON(object: any): ListSecretOperationsResponse {
    const message = {
      ...baseListSecretOperationsResponse,
    } as ListSecretOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListSecretOperationsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<ListSecretOperationsResponse>, I>>(
    object: I
  ): ListSecretOperationsResponse {
    const message = {
      ...baseListSecretOperationsResponse,
    } as ListSecretOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListSecretOperationsResponse.$type,
  ListSecretOperationsResponse
);

/** A set of methods for managing secrets. */
export const SecretServiceService = {
  /**
   * Returns the specified secret.
   *
   * To get the list of all available secrets, make a [List] request.
   * Use [PayloadService.Get] to get the payload (confidential data themselves) of the secret.
   */
  get: {
    path: "/yandex.cloud.lockbox.v1.SecretService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetSecretRequest) =>
      Buffer.from(GetSecretRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetSecretRequest.decode(value),
    responseSerialize: (value: Secret) =>
      Buffer.from(Secret.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Secret.decode(value),
  },
  /** Retrieves the list of secrets in the specified folder. */
  list: {
    path: "/yandex.cloud.lockbox.v1.SecretService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSecretsRequest) =>
      Buffer.from(ListSecretsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListSecretsRequest.decode(value),
    responseSerialize: (value: ListSecretsResponse) =>
      Buffer.from(ListSecretsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListSecretsResponse.decode(value),
  },
  /** Creates a secret in the specified folder. */
  create: {
    path: "/yandex.cloud.lockbox.v1.SecretService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateSecretRequest) =>
      Buffer.from(CreateSecretRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateSecretRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified secret. */
  update: {
    path: "/yandex.cloud.lockbox.v1.SecretService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateSecretRequest) =>
      Buffer.from(UpdateSecretRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateSecretRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified secret. */
  delete: {
    path: "/yandex.cloud.lockbox.v1.SecretService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteSecretRequest) =>
      Buffer.from(DeleteSecretRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteSecretRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Activates the specified secret. */
  activate: {
    path: "/yandex.cloud.lockbox.v1.SecretService/Activate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ActivateSecretRequest) =>
      Buffer.from(ActivateSecretRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ActivateSecretRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deactivates the specified secret. */
  deactivate: {
    path: "/yandex.cloud.lockbox.v1.SecretService/Deactivate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeactivateSecretRequest) =>
      Buffer.from(DeactivateSecretRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeactivateSecretRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Retrieves the list of versions of the specified secret. */
  listVersions: {
    path: "/yandex.cloud.lockbox.v1.SecretService/ListVersions",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListVersionsRequest) =>
      Buffer.from(ListVersionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListVersionsRequest.decode(value),
    responseSerialize: (value: ListVersionsResponse) =>
      Buffer.from(ListVersionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListVersionsResponse.decode(value),
  },
  /** Adds new version based on a previous one. */
  addVersion: {
    path: "/yandex.cloud.lockbox.v1.SecretService/AddVersion",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddVersionRequest) =>
      Buffer.from(AddVersionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddVersionRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Schedules the specified version for destruction.
   *
   * Scheduled destruction can be cancelled with the [SecretService.CancelVersionDestruction] method.
   */
  scheduleVersionDestruction: {
    path: "/yandex.cloud.lockbox.v1.SecretService/ScheduleVersionDestruction",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ScheduleVersionDestructionRequest) =>
      Buffer.from(ScheduleVersionDestructionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ScheduleVersionDestructionRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Cancels previously scheduled version destruction, if the version hasn't been destroyed yet. */
  cancelVersionDestruction: {
    path: "/yandex.cloud.lockbox.v1.SecretService/CancelVersionDestruction",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CancelVersionDestructionRequest) =>
      Buffer.from(CancelVersionDestructionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CancelVersionDestructionRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified secret. */
  listOperations: {
    path: "/yandex.cloud.lockbox.v1.SecretService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSecretOperationsRequest) =>
      Buffer.from(ListSecretOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListSecretOperationsRequest.decode(value),
    responseSerialize: (value: ListSecretOperationsResponse) =>
      Buffer.from(ListSecretOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListSecretOperationsResponse.decode(value),
  },
  /** Lists existing access bindings for the specified secret. */
  listAccessBindings: {
    path: "/yandex.cloud.lockbox.v1.SecretService/ListAccessBindings",
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
  /** Sets access bindings for the secret. */
  setAccessBindings: {
    path: "/yandex.cloud.lockbox.v1.SecretService/SetAccessBindings",
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
  /** Updates access bindings for the secret. */
  updateAccessBindings: {
    path: "/yandex.cloud.lockbox.v1.SecretService/UpdateAccessBindings",
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

export interface SecretServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified secret.
   *
   * To get the list of all available secrets, make a [List] request.
   * Use [PayloadService.Get] to get the payload (confidential data themselves) of the secret.
   */
  get: handleUnaryCall<GetSecretRequest, Secret>;
  /** Retrieves the list of secrets in the specified folder. */
  list: handleUnaryCall<ListSecretsRequest, ListSecretsResponse>;
  /** Creates a secret in the specified folder. */
  create: handleUnaryCall<CreateSecretRequest, Operation>;
  /** Updates the specified secret. */
  update: handleUnaryCall<UpdateSecretRequest, Operation>;
  /** Deletes the specified secret. */
  delete: handleUnaryCall<DeleteSecretRequest, Operation>;
  /** Activates the specified secret. */
  activate: handleUnaryCall<ActivateSecretRequest, Operation>;
  /** Deactivates the specified secret. */
  deactivate: handleUnaryCall<DeactivateSecretRequest, Operation>;
  /** Retrieves the list of versions of the specified secret. */
  listVersions: handleUnaryCall<ListVersionsRequest, ListVersionsResponse>;
  /** Adds new version based on a previous one. */
  addVersion: handleUnaryCall<AddVersionRequest, Operation>;
  /**
   * Schedules the specified version for destruction.
   *
   * Scheduled destruction can be cancelled with the [SecretService.CancelVersionDestruction] method.
   */
  scheduleVersionDestruction: handleUnaryCall<
    ScheduleVersionDestructionRequest,
    Operation
  >;
  /** Cancels previously scheduled version destruction, if the version hasn't been destroyed yet. */
  cancelVersionDestruction: handleUnaryCall<
    CancelVersionDestructionRequest,
    Operation
  >;
  /** Lists operations for the specified secret. */
  listOperations: handleUnaryCall<
    ListSecretOperationsRequest,
    ListSecretOperationsResponse
  >;
  /** Lists existing access bindings for the specified secret. */
  listAccessBindings: handleUnaryCall<
    ListAccessBindingsRequest,
    ListAccessBindingsResponse
  >;
  /** Sets access bindings for the secret. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the secret. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface SecretServiceClient extends Client {
  /**
   * Returns the specified secret.
   *
   * To get the list of all available secrets, make a [List] request.
   * Use [PayloadService.Get] to get the payload (confidential data themselves) of the secret.
   */
  get(
    request: GetSecretRequest,
    callback: (error: ServiceError | null, response: Secret) => void
  ): ClientUnaryCall;
  get(
    request: GetSecretRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Secret) => void
  ): ClientUnaryCall;
  get(
    request: GetSecretRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Secret) => void
  ): ClientUnaryCall;
  /** Retrieves the list of secrets in the specified folder. */
  list(
    request: ListSecretsRequest,
    callback: (
      error: ServiceError | null,
      response: ListSecretsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListSecretsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListSecretsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListSecretsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListSecretsResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates a secret in the specified folder. */
  create(
    request: CreateSecretRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateSecretRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateSecretRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified secret. */
  update(
    request: UpdateSecretRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateSecretRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateSecretRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified secret. */
  delete(
    request: DeleteSecretRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteSecretRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteSecretRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Activates the specified secret. */
  activate(
    request: ActivateSecretRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  activate(
    request: ActivateSecretRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  activate(
    request: ActivateSecretRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deactivates the specified secret. */
  deactivate(
    request: DeactivateSecretRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deactivate(
    request: DeactivateSecretRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deactivate(
    request: DeactivateSecretRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Retrieves the list of versions of the specified secret. */
  listVersions(
    request: ListVersionsRequest,
    callback: (
      error: ServiceError | null,
      response: ListVersionsResponse
    ) => void
  ): ClientUnaryCall;
  listVersions(
    request: ListVersionsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListVersionsResponse
    ) => void
  ): ClientUnaryCall;
  listVersions(
    request: ListVersionsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListVersionsResponse
    ) => void
  ): ClientUnaryCall;
  /** Adds new version based on a previous one. */
  addVersion(
    request: AddVersionRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addVersion(
    request: AddVersionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addVersion(
    request: AddVersionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Schedules the specified version for destruction.
   *
   * Scheduled destruction can be cancelled with the [SecretService.CancelVersionDestruction] method.
   */
  scheduleVersionDestruction(
    request: ScheduleVersionDestructionRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  scheduleVersionDestruction(
    request: ScheduleVersionDestructionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  scheduleVersionDestruction(
    request: ScheduleVersionDestructionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Cancels previously scheduled version destruction, if the version hasn't been destroyed yet. */
  cancelVersionDestruction(
    request: CancelVersionDestructionRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  cancelVersionDestruction(
    request: CancelVersionDestructionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  cancelVersionDestruction(
    request: CancelVersionDestructionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified secret. */
  listOperations(
    request: ListSecretOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListSecretOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListSecretOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListSecretOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListSecretOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListSecretOperationsResponse
    ) => void
  ): ClientUnaryCall;
  /** Lists existing access bindings for the specified secret. */
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
  /** Sets access bindings for the secret. */
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
  /** Updates access bindings for the secret. */
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

export const SecretServiceClient = makeGenericClientConstructor(
  SecretServiceService,
  "yandex.cloud.lockbox.v1.SecretService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): SecretServiceClient;
  service: typeof SecretServiceService;
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

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

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
