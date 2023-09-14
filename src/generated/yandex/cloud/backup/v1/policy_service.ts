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
  PolicySettings,
  Policy,
  PolicyApplication,
} from "../../../../yandex/cloud/backup/v1/policy";
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.backup.v1";

export interface ListPoliciesRequest {
  $type: "yandex.cloud.backup.v1.ListPoliciesRequest";
  /** Folder ID. Either Folder ID or Compute Cloud instance ID should be set. */
  folderId: string;
  /** Compute Cloud instance ID. Either Folder ID or Compute Cloud instance ID should be set. */
  computeInstanceId: string;
}

export interface ListPoliciesResponse {
  $type: "yandex.cloud.backup.v1.ListPoliciesResponse";
  policies: Policy[];
}

export interface CreatePolicyRequest {
  $type: "yandex.cloud.backup.v1.CreatePolicyRequest";
  /** Folder ID. */
  folderId: string;
  /** Policy name. */
  name: string;
  settings?: PolicySettings;
}

export interface CreatePolicyMetadata {
  $type: "yandex.cloud.backup.v1.CreatePolicyMetadata";
  /** Policy ID. */
  policyId: string;
}

export interface GetPolicyRequest {
  $type: "yandex.cloud.backup.v1.GetPolicyRequest";
  /** Policy ID. */
  policyId: string;
}

export interface UpdatePolicyRequest {
  $type: "yandex.cloud.backup.v1.UpdatePolicyRequest";
  /** Policy ID. */
  policyId: string;
  settings?: PolicySettings;
}

export interface UpdatePolicyMetadata {
  $type: "yandex.cloud.backup.v1.UpdatePolicyMetadata";
  /** Policy ID. */
  policyId: string;
}

export interface DeletePolicyRequest {
  $type: "yandex.cloud.backup.v1.DeletePolicyRequest";
  /** Policy ID. */
  policyId: string;
}

export interface DeletePolicyMetadata {
  $type: "yandex.cloud.backup.v1.DeletePolicyMetadata";
  /** Policy ID. */
  policyId: string;
}

export interface ApplyPolicyRequest {
  $type: "yandex.cloud.backup.v1.ApplyPolicyRequest";
  /** Policy ID. */
  policyId: string;
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
}

export interface ApplyPolicyMetadata {
  $type: "yandex.cloud.backup.v1.ApplyPolicyMetadata";
  /** Policy ID. */
  policyId: string;
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
}

export interface ListApplicationsRequest {
  $type: "yandex.cloud.backup.v1.ListApplicationsRequest";
  /** Folder ID. */
  folderId: string | undefined;
  /** Policy ID. */
  policyId: string | undefined;
  /** Compute Cloud instance ID. */
  computeInstanceId: string | undefined;
}

export interface ListApplicationsResponse {
  $type: "yandex.cloud.backup.v1.ListApplicationsResponse";
  applications: PolicyApplication[];
}

export interface ExecuteRequest {
  $type: "yandex.cloud.backup.v1.ExecuteRequest";
  /** Policy ID. */
  policyId: string;
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
}

export interface ExecuteMetadata {
  $type: "yandex.cloud.backup.v1.ExecuteMetadata";
  /** Policy ID. */
  policyId: string;
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
}

export interface RevokeRequest {
  $type: "yandex.cloud.backup.v1.RevokeRequest";
  /** Policy ID. */
  policyId: string;
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
}

export interface RevokeMetadata {
  $type: "yandex.cloud.backup.v1.RevokeMetadata";
  /** Policy ID. */
  policyId: string;
  /** Compute Cloud instance ID. */
  computeInstanceId: string;
}

const baseListPoliciesRequest: object = {
  $type: "yandex.cloud.backup.v1.ListPoliciesRequest",
  folderId: "",
  computeInstanceId: "",
};

export const ListPoliciesRequest = {
  $type: "yandex.cloud.backup.v1.ListPoliciesRequest" as const,

  encode(
    message: ListPoliciesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.computeInstanceId !== "") {
      writer.uint32(18).string(message.computeInstanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListPoliciesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListPoliciesRequest } as ListPoliciesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 2:
          message.computeInstanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListPoliciesRequest {
    const message = { ...baseListPoliciesRequest } as ListPoliciesRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : "";
    return message;
  },

  toJSON(message: ListPoliciesRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListPoliciesRequest>, I>>(
    object: I
  ): ListPoliciesRequest {
    const message = { ...baseListPoliciesRequest } as ListPoliciesRequest;
    message.folderId = object.folderId ?? "";
    message.computeInstanceId = object.computeInstanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListPoliciesRequest.$type, ListPoliciesRequest);

const baseListPoliciesResponse: object = {
  $type: "yandex.cloud.backup.v1.ListPoliciesResponse",
};

export const ListPoliciesResponse = {
  $type: "yandex.cloud.backup.v1.ListPoliciesResponse" as const,

  encode(
    message: ListPoliciesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.policies) {
      Policy.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListPoliciesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListPoliciesResponse } as ListPoliciesResponse;
    message.policies = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policies.push(Policy.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListPoliciesResponse {
    const message = { ...baseListPoliciesResponse } as ListPoliciesResponse;
    message.policies = (object.policies ?? []).map((e: any) =>
      Policy.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ListPoliciesResponse): unknown {
    const obj: any = {};
    if (message.policies) {
      obj.policies = message.policies.map((e) =>
        e ? Policy.toJSON(e) : undefined
      );
    } else {
      obj.policies = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListPoliciesResponse>, I>>(
    object: I
  ): ListPoliciesResponse {
    const message = { ...baseListPoliciesResponse } as ListPoliciesResponse;
    message.policies = object.policies?.map((e) => Policy.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ListPoliciesResponse.$type, ListPoliciesResponse);

const baseCreatePolicyRequest: object = {
  $type: "yandex.cloud.backup.v1.CreatePolicyRequest",
  folderId: "",
  name: "",
};

export const CreatePolicyRequest = {
  $type: "yandex.cloud.backup.v1.CreatePolicyRequest" as const,

  encode(
    message: CreatePolicyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.settings !== undefined) {
      PolicySettings.encode(
        message.settings,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePolicyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreatePolicyRequest } as CreatePolicyRequest;
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
          message.settings = PolicySettings.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreatePolicyRequest {
    const message = { ...baseCreatePolicyRequest } as CreatePolicyRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.settings =
      object.settings !== undefined && object.settings !== null
        ? PolicySettings.fromJSON(object.settings)
        : undefined;
    return message;
  },

  toJSON(message: CreatePolicyRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.name !== undefined && (obj.name = message.name);
    message.settings !== undefined &&
      (obj.settings = message.settings
        ? PolicySettings.toJSON(message.settings)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreatePolicyRequest>, I>>(
    object: I
  ): CreatePolicyRequest {
    const message = { ...baseCreatePolicyRequest } as CreatePolicyRequest;
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.settings =
      object.settings !== undefined && object.settings !== null
        ? PolicySettings.fromPartial(object.settings)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreatePolicyRequest.$type, CreatePolicyRequest);

const baseCreatePolicyMetadata: object = {
  $type: "yandex.cloud.backup.v1.CreatePolicyMetadata",
  policyId: "",
};

export const CreatePolicyMetadata = {
  $type: "yandex.cloud.backup.v1.CreatePolicyMetadata" as const,

  encode(
    message: CreatePolicyMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.policyId !== "") {
      writer.uint32(10).string(message.policyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreatePolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreatePolicyMetadata } as CreatePolicyMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreatePolicyMetadata {
    const message = { ...baseCreatePolicyMetadata } as CreatePolicyMetadata;
    message.policyId =
      object.policyId !== undefined && object.policyId !== null
        ? String(object.policyId)
        : "";
    return message;
  },

  toJSON(message: CreatePolicyMetadata): unknown {
    const obj: any = {};
    message.policyId !== undefined && (obj.policyId = message.policyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreatePolicyMetadata>, I>>(
    object: I
  ): CreatePolicyMetadata {
    const message = { ...baseCreatePolicyMetadata } as CreatePolicyMetadata;
    message.policyId = object.policyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreatePolicyMetadata.$type, CreatePolicyMetadata);

const baseGetPolicyRequest: object = {
  $type: "yandex.cloud.backup.v1.GetPolicyRequest",
  policyId: "",
};

export const GetPolicyRequest = {
  $type: "yandex.cloud.backup.v1.GetPolicyRequest" as const,

  encode(
    message: GetPolicyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.policyId !== "") {
      writer.uint32(10).string(message.policyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPolicyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetPolicyRequest } as GetPolicyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetPolicyRequest {
    const message = { ...baseGetPolicyRequest } as GetPolicyRequest;
    message.policyId =
      object.policyId !== undefined && object.policyId !== null
        ? String(object.policyId)
        : "";
    return message;
  },

  toJSON(message: GetPolicyRequest): unknown {
    const obj: any = {};
    message.policyId !== undefined && (obj.policyId = message.policyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPolicyRequest>, I>>(
    object: I
  ): GetPolicyRequest {
    const message = { ...baseGetPolicyRequest } as GetPolicyRequest;
    message.policyId = object.policyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetPolicyRequest.$type, GetPolicyRequest);

const baseUpdatePolicyRequest: object = {
  $type: "yandex.cloud.backup.v1.UpdatePolicyRequest",
  policyId: "",
};

export const UpdatePolicyRequest = {
  $type: "yandex.cloud.backup.v1.UpdatePolicyRequest" as const,

  encode(
    message: UpdatePolicyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.policyId !== "") {
      writer.uint32(10).string(message.policyId);
    }
    if (message.settings !== undefined) {
      PolicySettings.encode(
        message.settings,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePolicyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdatePolicyRequest } as UpdatePolicyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyId = reader.string();
          break;
        case 2:
          message.settings = PolicySettings.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdatePolicyRequest {
    const message = { ...baseUpdatePolicyRequest } as UpdatePolicyRequest;
    message.policyId =
      object.policyId !== undefined && object.policyId !== null
        ? String(object.policyId)
        : "";
    message.settings =
      object.settings !== undefined && object.settings !== null
        ? PolicySettings.fromJSON(object.settings)
        : undefined;
    return message;
  },

  toJSON(message: UpdatePolicyRequest): unknown {
    const obj: any = {};
    message.policyId !== undefined && (obj.policyId = message.policyId);
    message.settings !== undefined &&
      (obj.settings = message.settings
        ? PolicySettings.toJSON(message.settings)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdatePolicyRequest>, I>>(
    object: I
  ): UpdatePolicyRequest {
    const message = { ...baseUpdatePolicyRequest } as UpdatePolicyRequest;
    message.policyId = object.policyId ?? "";
    message.settings =
      object.settings !== undefined && object.settings !== null
        ? PolicySettings.fromPartial(object.settings)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdatePolicyRequest.$type, UpdatePolicyRequest);

const baseUpdatePolicyMetadata: object = {
  $type: "yandex.cloud.backup.v1.UpdatePolicyMetadata",
  policyId: "",
};

export const UpdatePolicyMetadata = {
  $type: "yandex.cloud.backup.v1.UpdatePolicyMetadata" as const,

  encode(
    message: UpdatePolicyMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.policyId !== "") {
      writer.uint32(10).string(message.policyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdatePolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdatePolicyMetadata } as UpdatePolicyMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdatePolicyMetadata {
    const message = { ...baseUpdatePolicyMetadata } as UpdatePolicyMetadata;
    message.policyId =
      object.policyId !== undefined && object.policyId !== null
        ? String(object.policyId)
        : "";
    return message;
  },

  toJSON(message: UpdatePolicyMetadata): unknown {
    const obj: any = {};
    message.policyId !== undefined && (obj.policyId = message.policyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdatePolicyMetadata>, I>>(
    object: I
  ): UpdatePolicyMetadata {
    const message = { ...baseUpdatePolicyMetadata } as UpdatePolicyMetadata;
    message.policyId = object.policyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdatePolicyMetadata.$type, UpdatePolicyMetadata);

const baseDeletePolicyRequest: object = {
  $type: "yandex.cloud.backup.v1.DeletePolicyRequest",
  policyId: "",
};

export const DeletePolicyRequest = {
  $type: "yandex.cloud.backup.v1.DeletePolicyRequest" as const,

  encode(
    message: DeletePolicyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.policyId !== "") {
      writer.uint32(10).string(message.policyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeletePolicyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeletePolicyRequest } as DeletePolicyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeletePolicyRequest {
    const message = { ...baseDeletePolicyRequest } as DeletePolicyRequest;
    message.policyId =
      object.policyId !== undefined && object.policyId !== null
        ? String(object.policyId)
        : "";
    return message;
  },

  toJSON(message: DeletePolicyRequest): unknown {
    const obj: any = {};
    message.policyId !== undefined && (obj.policyId = message.policyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeletePolicyRequest>, I>>(
    object: I
  ): DeletePolicyRequest {
    const message = { ...baseDeletePolicyRequest } as DeletePolicyRequest;
    message.policyId = object.policyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeletePolicyRequest.$type, DeletePolicyRequest);

const baseDeletePolicyMetadata: object = {
  $type: "yandex.cloud.backup.v1.DeletePolicyMetadata",
  policyId: "",
};

export const DeletePolicyMetadata = {
  $type: "yandex.cloud.backup.v1.DeletePolicyMetadata" as const,

  encode(
    message: DeletePolicyMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.policyId !== "") {
      writer.uint32(10).string(message.policyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeletePolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeletePolicyMetadata } as DeletePolicyMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeletePolicyMetadata {
    const message = { ...baseDeletePolicyMetadata } as DeletePolicyMetadata;
    message.policyId =
      object.policyId !== undefined && object.policyId !== null
        ? String(object.policyId)
        : "";
    return message;
  },

  toJSON(message: DeletePolicyMetadata): unknown {
    const obj: any = {};
    message.policyId !== undefined && (obj.policyId = message.policyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeletePolicyMetadata>, I>>(
    object: I
  ): DeletePolicyMetadata {
    const message = { ...baseDeletePolicyMetadata } as DeletePolicyMetadata;
    message.policyId = object.policyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeletePolicyMetadata.$type, DeletePolicyMetadata);

const baseApplyPolicyRequest: object = {
  $type: "yandex.cloud.backup.v1.ApplyPolicyRequest",
  policyId: "",
  computeInstanceId: "",
};

export const ApplyPolicyRequest = {
  $type: "yandex.cloud.backup.v1.ApplyPolicyRequest" as const,

  encode(
    message: ApplyPolicyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.policyId !== "") {
      writer.uint32(10).string(message.policyId);
    }
    if (message.computeInstanceId !== "") {
      writer.uint32(18).string(message.computeInstanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApplyPolicyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseApplyPolicyRequest } as ApplyPolicyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyId = reader.string();
          break;
        case 2:
          message.computeInstanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ApplyPolicyRequest {
    const message = { ...baseApplyPolicyRequest } as ApplyPolicyRequest;
    message.policyId =
      object.policyId !== undefined && object.policyId !== null
        ? String(object.policyId)
        : "";
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : "";
    return message;
  },

  toJSON(message: ApplyPolicyRequest): unknown {
    const obj: any = {};
    message.policyId !== undefined && (obj.policyId = message.policyId);
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ApplyPolicyRequest>, I>>(
    object: I
  ): ApplyPolicyRequest {
    const message = { ...baseApplyPolicyRequest } as ApplyPolicyRequest;
    message.policyId = object.policyId ?? "";
    message.computeInstanceId = object.computeInstanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ApplyPolicyRequest.$type, ApplyPolicyRequest);

const baseApplyPolicyMetadata: object = {
  $type: "yandex.cloud.backup.v1.ApplyPolicyMetadata",
  policyId: "",
  computeInstanceId: "",
};

export const ApplyPolicyMetadata = {
  $type: "yandex.cloud.backup.v1.ApplyPolicyMetadata" as const,

  encode(
    message: ApplyPolicyMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.policyId !== "") {
      writer.uint32(10).string(message.policyId);
    }
    if (message.computeInstanceId !== "") {
      writer.uint32(18).string(message.computeInstanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApplyPolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseApplyPolicyMetadata } as ApplyPolicyMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyId = reader.string();
          break;
        case 2:
          message.computeInstanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ApplyPolicyMetadata {
    const message = { ...baseApplyPolicyMetadata } as ApplyPolicyMetadata;
    message.policyId =
      object.policyId !== undefined && object.policyId !== null
        ? String(object.policyId)
        : "";
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : "";
    return message;
  },

  toJSON(message: ApplyPolicyMetadata): unknown {
    const obj: any = {};
    message.policyId !== undefined && (obj.policyId = message.policyId);
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ApplyPolicyMetadata>, I>>(
    object: I
  ): ApplyPolicyMetadata {
    const message = { ...baseApplyPolicyMetadata } as ApplyPolicyMetadata;
    message.policyId = object.policyId ?? "";
    message.computeInstanceId = object.computeInstanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ApplyPolicyMetadata.$type, ApplyPolicyMetadata);

const baseListApplicationsRequest: object = {
  $type: "yandex.cloud.backup.v1.ListApplicationsRequest",
};

export const ListApplicationsRequest = {
  $type: "yandex.cloud.backup.v1.ListApplicationsRequest" as const,

  encode(
    message: ListApplicationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== undefined) {
      writer.uint32(10).string(message.folderId);
    }
    if (message.policyId !== undefined) {
      writer.uint32(18).string(message.policyId);
    }
    if (message.computeInstanceId !== undefined) {
      writer.uint32(26).string(message.computeInstanceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListApplicationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListApplicationsRequest,
    } as ListApplicationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 2:
          message.policyId = reader.string();
          break;
        case 3:
          message.computeInstanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListApplicationsRequest {
    const message = {
      ...baseListApplicationsRequest,
    } as ListApplicationsRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : undefined;
    message.policyId =
      object.policyId !== undefined && object.policyId !== null
        ? String(object.policyId)
        : undefined;
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : undefined;
    return message;
  },

  toJSON(message: ListApplicationsRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.policyId !== undefined && (obj.policyId = message.policyId);
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListApplicationsRequest>, I>>(
    object: I
  ): ListApplicationsRequest {
    const message = {
      ...baseListApplicationsRequest,
    } as ListApplicationsRequest;
    message.folderId = object.folderId ?? undefined;
    message.policyId = object.policyId ?? undefined;
    message.computeInstanceId = object.computeInstanceId ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ListApplicationsRequest.$type, ListApplicationsRequest);

const baseListApplicationsResponse: object = {
  $type: "yandex.cloud.backup.v1.ListApplicationsResponse",
};

export const ListApplicationsResponse = {
  $type: "yandex.cloud.backup.v1.ListApplicationsResponse" as const,

  encode(
    message: ListApplicationsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.applications) {
      PolicyApplication.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListApplicationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListApplicationsResponse,
    } as ListApplicationsResponse;
    message.applications = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.applications.push(
            PolicyApplication.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListApplicationsResponse {
    const message = {
      ...baseListApplicationsResponse,
    } as ListApplicationsResponse;
    message.applications = (object.applications ?? []).map((e: any) =>
      PolicyApplication.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ListApplicationsResponse): unknown {
    const obj: any = {};
    if (message.applications) {
      obj.applications = message.applications.map((e) =>
        e ? PolicyApplication.toJSON(e) : undefined
      );
    } else {
      obj.applications = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListApplicationsResponse>, I>>(
    object: I
  ): ListApplicationsResponse {
    const message = {
      ...baseListApplicationsResponse,
    } as ListApplicationsResponse;
    message.applications =
      object.applications?.map((e) => PolicyApplication.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  ListApplicationsResponse.$type,
  ListApplicationsResponse
);

const baseExecuteRequest: object = {
  $type: "yandex.cloud.backup.v1.ExecuteRequest",
  policyId: "",
  computeInstanceId: "",
};

export const ExecuteRequest = {
  $type: "yandex.cloud.backup.v1.ExecuteRequest" as const,

  encode(
    message: ExecuteRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.policyId !== "") {
      writer.uint32(10).string(message.policyId);
    }
    if (message.computeInstanceId !== "") {
      writer.uint32(18).string(message.computeInstanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecuteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExecuteRequest } as ExecuteRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyId = reader.string();
          break;
        case 2:
          message.computeInstanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExecuteRequest {
    const message = { ...baseExecuteRequest } as ExecuteRequest;
    message.policyId =
      object.policyId !== undefined && object.policyId !== null
        ? String(object.policyId)
        : "";
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : "";
    return message;
  },

  toJSON(message: ExecuteRequest): unknown {
    const obj: any = {};
    message.policyId !== undefined && (obj.policyId = message.policyId);
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExecuteRequest>, I>>(
    object: I
  ): ExecuteRequest {
    const message = { ...baseExecuteRequest } as ExecuteRequest;
    message.policyId = object.policyId ?? "";
    message.computeInstanceId = object.computeInstanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ExecuteRequest.$type, ExecuteRequest);

const baseExecuteMetadata: object = {
  $type: "yandex.cloud.backup.v1.ExecuteMetadata",
  policyId: "",
  computeInstanceId: "",
};

export const ExecuteMetadata = {
  $type: "yandex.cloud.backup.v1.ExecuteMetadata" as const,

  encode(
    message: ExecuteMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.policyId !== "") {
      writer.uint32(10).string(message.policyId);
    }
    if (message.computeInstanceId !== "") {
      writer.uint32(18).string(message.computeInstanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecuteMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExecuteMetadata } as ExecuteMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyId = reader.string();
          break;
        case 2:
          message.computeInstanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExecuteMetadata {
    const message = { ...baseExecuteMetadata } as ExecuteMetadata;
    message.policyId =
      object.policyId !== undefined && object.policyId !== null
        ? String(object.policyId)
        : "";
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : "";
    return message;
  },

  toJSON(message: ExecuteMetadata): unknown {
    const obj: any = {};
    message.policyId !== undefined && (obj.policyId = message.policyId);
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExecuteMetadata>, I>>(
    object: I
  ): ExecuteMetadata {
    const message = { ...baseExecuteMetadata } as ExecuteMetadata;
    message.policyId = object.policyId ?? "";
    message.computeInstanceId = object.computeInstanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ExecuteMetadata.$type, ExecuteMetadata);

const baseRevokeRequest: object = {
  $type: "yandex.cloud.backup.v1.RevokeRequest",
  policyId: "",
  computeInstanceId: "",
};

export const RevokeRequest = {
  $type: "yandex.cloud.backup.v1.RevokeRequest" as const,

  encode(
    message: RevokeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.policyId !== "") {
      writer.uint32(10).string(message.policyId);
    }
    if (message.computeInstanceId !== "") {
      writer.uint32(18).string(message.computeInstanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RevokeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRevokeRequest } as RevokeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyId = reader.string();
          break;
        case 2:
          message.computeInstanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RevokeRequest {
    const message = { ...baseRevokeRequest } as RevokeRequest;
    message.policyId =
      object.policyId !== undefined && object.policyId !== null
        ? String(object.policyId)
        : "";
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : "";
    return message;
  },

  toJSON(message: RevokeRequest): unknown {
    const obj: any = {};
    message.policyId !== undefined && (obj.policyId = message.policyId);
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RevokeRequest>, I>>(
    object: I
  ): RevokeRequest {
    const message = { ...baseRevokeRequest } as RevokeRequest;
    message.policyId = object.policyId ?? "";
    message.computeInstanceId = object.computeInstanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RevokeRequest.$type, RevokeRequest);

const baseRevokeMetadata: object = {
  $type: "yandex.cloud.backup.v1.RevokeMetadata",
  policyId: "",
  computeInstanceId: "",
};

export const RevokeMetadata = {
  $type: "yandex.cloud.backup.v1.RevokeMetadata" as const,

  encode(
    message: RevokeMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.policyId !== "") {
      writer.uint32(10).string(message.policyId);
    }
    if (message.computeInstanceId !== "") {
      writer.uint32(18).string(message.computeInstanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RevokeMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRevokeMetadata } as RevokeMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyId = reader.string();
          break;
        case 2:
          message.computeInstanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RevokeMetadata {
    const message = { ...baseRevokeMetadata } as RevokeMetadata;
    message.policyId =
      object.policyId !== undefined && object.policyId !== null
        ? String(object.policyId)
        : "";
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : "";
    return message;
  },

  toJSON(message: RevokeMetadata): unknown {
    const obj: any = {};
    message.policyId !== undefined && (obj.policyId = message.policyId);
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RevokeMetadata>, I>>(
    object: I
  ): RevokeMetadata {
    const message = { ...baseRevokeMetadata } as RevokeMetadata;
    message.policyId = object.policyId ?? "";
    message.computeInstanceId = object.computeInstanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RevokeMetadata.$type, RevokeMetadata);

/** A set of methods for managing [policies](/docs/backup/concepts/policy). */
export const PolicyServiceService = {
  /** List [policies](/docs/backup/concepts/policy) of specified folder. */
  list: {
    path: "/yandex.cloud.backup.v1.PolicyService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListPoliciesRequest) =>
      Buffer.from(ListPoliciesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListPoliciesRequest.decode(value),
    responseSerialize: (value: ListPoliciesResponse) =>
      Buffer.from(ListPoliciesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListPoliciesResponse.decode(value),
  },
  /**
   * Create a new policy.
   *
   * For detailed information, please see [Creating a backup policy](/docs/backup/operations/policy-vm/create).
   */
  create: {
    path: "/yandex.cloud.backup.v1.PolicyService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreatePolicyRequest) =>
      Buffer.from(CreatePolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreatePolicyRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Get specific policy. */
  get: {
    path: "/yandex.cloud.backup.v1.PolicyService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetPolicyRequest) =>
      Buffer.from(GetPolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetPolicyRequest.decode(value),
    responseSerialize: (value: Policy) =>
      Buffer.from(Policy.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Policy.decode(value),
  },
  /** Update specific policy. */
  update: {
    path: "/yandex.cloud.backup.v1.PolicyService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdatePolicyRequest) =>
      Buffer.from(UpdatePolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdatePolicyRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Delete specific policy. */
  delete: {
    path: "/yandex.cloud.backup.v1.PolicyService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeletePolicyRequest) =>
      Buffer.from(DeletePolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeletePolicyRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Apply policy to [Compute Cloud instance](/docs/backup/concepts/vm-connection#os). */
  apply: {
    path: "/yandex.cloud.backup.v1.PolicyService/Apply",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ApplyPolicyRequest) =>
      Buffer.from(ApplyPolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ApplyPolicyRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** List applied policies using filters. */
  listApplications: {
    path: "/yandex.cloud.backup.v1.PolicyService/ListApplications",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListApplicationsRequest) =>
      Buffer.from(ListApplicationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListApplicationsRequest.decode(value),
    responseSerialize: (value: ListApplicationsResponse) =>
      Buffer.from(ListApplicationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListApplicationsResponse.decode(value),
  },
  /**
   * Run policy on specific Compute Cloud instance. That will create backup
   * according selected policy. In order to perform this action, policy should be
   * applied to the Compute Cloud instance.
   */
  execute: {
    path: "/yandex.cloud.backup.v1.PolicyService/Execute",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ExecuteRequest) =>
      Buffer.from(ExecuteRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ExecuteRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Revoke policy from Compute Cloud instance. */
  revoke: {
    path: "/yandex.cloud.backup.v1.PolicyService/Revoke",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RevokeRequest) =>
      Buffer.from(RevokeRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RevokeRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface PolicyServiceServer extends UntypedServiceImplementation {
  /** List [policies](/docs/backup/concepts/policy) of specified folder. */
  list: handleUnaryCall<ListPoliciesRequest, ListPoliciesResponse>;
  /**
   * Create a new policy.
   *
   * For detailed information, please see [Creating a backup policy](/docs/backup/operations/policy-vm/create).
   */
  create: handleUnaryCall<CreatePolicyRequest, Operation>;
  /** Get specific policy. */
  get: handleUnaryCall<GetPolicyRequest, Policy>;
  /** Update specific policy. */
  update: handleUnaryCall<UpdatePolicyRequest, Operation>;
  /** Delete specific policy. */
  delete: handleUnaryCall<DeletePolicyRequest, Operation>;
  /** Apply policy to [Compute Cloud instance](/docs/backup/concepts/vm-connection#os). */
  apply: handleUnaryCall<ApplyPolicyRequest, Operation>;
  /** List applied policies using filters. */
  listApplications: handleUnaryCall<
    ListApplicationsRequest,
    ListApplicationsResponse
  >;
  /**
   * Run policy on specific Compute Cloud instance. That will create backup
   * according selected policy. In order to perform this action, policy should be
   * applied to the Compute Cloud instance.
   */
  execute: handleUnaryCall<ExecuteRequest, Operation>;
  /** Revoke policy from Compute Cloud instance. */
  revoke: handleUnaryCall<RevokeRequest, Operation>;
}

export interface PolicyServiceClient extends Client {
  /** List [policies](/docs/backup/concepts/policy) of specified folder. */
  list(
    request: ListPoliciesRequest,
    callback: (
      error: ServiceError | null,
      response: ListPoliciesResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListPoliciesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListPoliciesResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListPoliciesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListPoliciesResponse
    ) => void
  ): ClientUnaryCall;
  /**
   * Create a new policy.
   *
   * For detailed information, please see [Creating a backup policy](/docs/backup/operations/policy-vm/create).
   */
  create(
    request: CreatePolicyRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreatePolicyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreatePolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Get specific policy. */
  get(
    request: GetPolicyRequest,
    callback: (error: ServiceError | null, response: Policy) => void
  ): ClientUnaryCall;
  get(
    request: GetPolicyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Policy) => void
  ): ClientUnaryCall;
  get(
    request: GetPolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Policy) => void
  ): ClientUnaryCall;
  /** Update specific policy. */
  update(
    request: UpdatePolicyRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdatePolicyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdatePolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Delete specific policy. */
  delete(
    request: DeletePolicyRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeletePolicyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeletePolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Apply policy to [Compute Cloud instance](/docs/backup/concepts/vm-connection#os). */
  apply(
    request: ApplyPolicyRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  apply(
    request: ApplyPolicyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  apply(
    request: ApplyPolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** List applied policies using filters. */
  listApplications(
    request: ListApplicationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListApplicationsResponse
    ) => void
  ): ClientUnaryCall;
  listApplications(
    request: ListApplicationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListApplicationsResponse
    ) => void
  ): ClientUnaryCall;
  listApplications(
    request: ListApplicationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListApplicationsResponse
    ) => void
  ): ClientUnaryCall;
  /**
   * Run policy on specific Compute Cloud instance. That will create backup
   * according selected policy. In order to perform this action, policy should be
   * applied to the Compute Cloud instance.
   */
  execute(
    request: ExecuteRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  execute(
    request: ExecuteRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  execute(
    request: ExecuteRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Revoke policy from Compute Cloud instance. */
  revoke(
    request: RevokeRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  revoke(
    request: RevokeRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  revoke(
    request: RevokeRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const PolicyServiceClient = makeGenericClientConstructor(
  PolicyServiceService,
  "yandex.cloud.backup.v1.PolicyService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): PolicyServiceClient;
  service: typeof PolicyServiceService;
};

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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
