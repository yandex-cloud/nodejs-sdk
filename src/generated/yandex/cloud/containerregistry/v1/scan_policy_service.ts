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
  ScanRules,
  ScanPolicy,
} from "../../../../yandex/cloud/containerregistry/v1/scan_policy";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.containerregistry.v1";

export interface GetScanPolicyRequest {
  $type: "yandex.cloud.containerregistry.v1.GetScanPolicyRequest";
  /** ID of the scan policy. */
  scanPolicyId: string;
}

export interface GetScanPolicyByRegistryRequest {
  $type: "yandex.cloud.containerregistry.v1.GetScanPolicyByRegistryRequest";
  /** ID of the registry with scan policy. */
  registryId: string;
}

export interface CreateScanPolicyRequest {
  $type: "yandex.cloud.containerregistry.v1.CreateScanPolicyRequest";
  /** ID of the scan policy registry. */
  registryId: string;
  /** Name of the scan policy. */
  name: string;
  /** Description of the scan policy. */
  description: string;
  /** Rules of the scan policy. */
  rules?: ScanRules;
}

export interface UpdateScanPolicyRequest {
  $type: "yandex.cloud.containerregistry.v1.UpdateScanPolicyRequest";
  /** ID of the scan policy. */
  scanPolicyId: string;
  /** Field mask that specifies which fields of the scan policy resource are going to be updated. */
  updateMask?: FieldMask;
  /** Name of the scan policy. */
  name: string;
  /** Description of the scan policy. */
  description: string;
  /** Rules of the scan policy. */
  rules?: ScanRules;
}

export interface DeleteScanPolicyRequest {
  $type: "yandex.cloud.containerregistry.v1.DeleteScanPolicyRequest";
  /** ID of the scan policy. */
  scanPolicyId: string;
}

export interface CreateScanPolicyMetadata {
  $type: "yandex.cloud.containerregistry.v1.CreateScanPolicyMetadata";
  /** ID of created scan policy resource. */
  scanPolicyId: string;
}

export interface UpdateScanPolicyMetadata {
  $type: "yandex.cloud.containerregistry.v1.UpdateScanPolicyMetadata";
  /** ID of the scan policy resource that is updated. */
  scanPolicyId: string;
}

export interface DeleteScanPolicyMetadata {
  $type: "yandex.cloud.containerregistry.v1.DeleteScanPolicyMetadata";
  /** ID of the scan policy resource that is deleted. */
  scanPolicyId: string;
}

const baseGetScanPolicyRequest: object = {
  $type: "yandex.cloud.containerregistry.v1.GetScanPolicyRequest",
  scanPolicyId: "",
};

export const GetScanPolicyRequest = {
  $type: "yandex.cloud.containerregistry.v1.GetScanPolicyRequest" as const,

  encode(
    message: GetScanPolicyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scanPolicyId !== "") {
      writer.uint32(10).string(message.scanPolicyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetScanPolicyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetScanPolicyRequest } as GetScanPolicyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scanPolicyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetScanPolicyRequest {
    const message = { ...baseGetScanPolicyRequest } as GetScanPolicyRequest;
    message.scanPolicyId =
      object.scanPolicyId !== undefined && object.scanPolicyId !== null
        ? String(object.scanPolicyId)
        : "";
    return message;
  },

  toJSON(message: GetScanPolicyRequest): unknown {
    const obj: any = {};
    message.scanPolicyId !== undefined &&
      (obj.scanPolicyId = message.scanPolicyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetScanPolicyRequest>, I>>(
    object: I
  ): GetScanPolicyRequest {
    const message = { ...baseGetScanPolicyRequest } as GetScanPolicyRequest;
    message.scanPolicyId = object.scanPolicyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetScanPolicyRequest.$type, GetScanPolicyRequest);

const baseGetScanPolicyByRegistryRequest: object = {
  $type: "yandex.cloud.containerregistry.v1.GetScanPolicyByRegistryRequest",
  registryId: "",
};

export const GetScanPolicyByRegistryRequest = {
  $type:
    "yandex.cloud.containerregistry.v1.GetScanPolicyByRegistryRequest" as const,

  encode(
    message: GetScanPolicyByRegistryRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetScanPolicyByRegistryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetScanPolicyByRegistryRequest,
    } as GetScanPolicyByRegistryRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registryId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetScanPolicyByRegistryRequest {
    const message = {
      ...baseGetScanPolicyByRegistryRequest,
    } as GetScanPolicyByRegistryRequest;
    message.registryId =
      object.registryId !== undefined && object.registryId !== null
        ? String(object.registryId)
        : "";
    return message;
  },

  toJSON(message: GetScanPolicyByRegistryRequest): unknown {
    const obj: any = {};
    message.registryId !== undefined && (obj.registryId = message.registryId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetScanPolicyByRegistryRequest>, I>>(
    object: I
  ): GetScanPolicyByRegistryRequest {
    const message = {
      ...baseGetScanPolicyByRegistryRequest,
    } as GetScanPolicyByRegistryRequest;
    message.registryId = object.registryId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  GetScanPolicyByRegistryRequest.$type,
  GetScanPolicyByRegistryRequest
);

const baseCreateScanPolicyRequest: object = {
  $type: "yandex.cloud.containerregistry.v1.CreateScanPolicyRequest",
  registryId: "",
  name: "",
  description: "",
};

export const CreateScanPolicyRequest = {
  $type: "yandex.cloud.containerregistry.v1.CreateScanPolicyRequest" as const,

  encode(
    message: CreateScanPolicyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.registryId !== "") {
      writer.uint32(10).string(message.registryId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.rules !== undefined) {
      ScanRules.encode(message.rules, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateScanPolicyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateScanPolicyRequest,
    } as CreateScanPolicyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registryId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.rules = ScanRules.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateScanPolicyRequest {
    const message = {
      ...baseCreateScanPolicyRequest,
    } as CreateScanPolicyRequest;
    message.registryId =
      object.registryId !== undefined && object.registryId !== null
        ? String(object.registryId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.rules =
      object.rules !== undefined && object.rules !== null
        ? ScanRules.fromJSON(object.rules)
        : undefined;
    return message;
  },

  toJSON(message: CreateScanPolicyRequest): unknown {
    const obj: any = {};
    message.registryId !== undefined && (obj.registryId = message.registryId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.rules !== undefined &&
      (obj.rules = message.rules ? ScanRules.toJSON(message.rules) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateScanPolicyRequest>, I>>(
    object: I
  ): CreateScanPolicyRequest {
    const message = {
      ...baseCreateScanPolicyRequest,
    } as CreateScanPolicyRequest;
    message.registryId = object.registryId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.rules =
      object.rules !== undefined && object.rules !== null
        ? ScanRules.fromPartial(object.rules)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateScanPolicyRequest.$type, CreateScanPolicyRequest);

const baseUpdateScanPolicyRequest: object = {
  $type: "yandex.cloud.containerregistry.v1.UpdateScanPolicyRequest",
  scanPolicyId: "",
  name: "",
  description: "",
};

export const UpdateScanPolicyRequest = {
  $type: "yandex.cloud.containerregistry.v1.UpdateScanPolicyRequest" as const,

  encode(
    message: UpdateScanPolicyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scanPolicyId !== "") {
      writer.uint32(10).string(message.scanPolicyId);
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
    if (message.rules !== undefined) {
      ScanRules.encode(message.rules, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateScanPolicyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateScanPolicyRequest,
    } as UpdateScanPolicyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scanPolicyId = reader.string();
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
          message.rules = ScanRules.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateScanPolicyRequest {
    const message = {
      ...baseUpdateScanPolicyRequest,
    } as UpdateScanPolicyRequest;
    message.scanPolicyId =
      object.scanPolicyId !== undefined && object.scanPolicyId !== null
        ? String(object.scanPolicyId)
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
    message.rules =
      object.rules !== undefined && object.rules !== null
        ? ScanRules.fromJSON(object.rules)
        : undefined;
    return message;
  },

  toJSON(message: UpdateScanPolicyRequest): unknown {
    const obj: any = {};
    message.scanPolicyId !== undefined &&
      (obj.scanPolicyId = message.scanPolicyId);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.rules !== undefined &&
      (obj.rules = message.rules ? ScanRules.toJSON(message.rules) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateScanPolicyRequest>, I>>(
    object: I
  ): UpdateScanPolicyRequest {
    const message = {
      ...baseUpdateScanPolicyRequest,
    } as UpdateScanPolicyRequest;
    message.scanPolicyId = object.scanPolicyId ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.rules =
      object.rules !== undefined && object.rules !== null
        ? ScanRules.fromPartial(object.rules)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateScanPolicyRequest.$type, UpdateScanPolicyRequest);

const baseDeleteScanPolicyRequest: object = {
  $type: "yandex.cloud.containerregistry.v1.DeleteScanPolicyRequest",
  scanPolicyId: "",
};

export const DeleteScanPolicyRequest = {
  $type: "yandex.cloud.containerregistry.v1.DeleteScanPolicyRequest" as const,

  encode(
    message: DeleteScanPolicyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scanPolicyId !== "") {
      writer.uint32(10).string(message.scanPolicyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteScanPolicyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteScanPolicyRequest,
    } as DeleteScanPolicyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scanPolicyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteScanPolicyRequest {
    const message = {
      ...baseDeleteScanPolicyRequest,
    } as DeleteScanPolicyRequest;
    message.scanPolicyId =
      object.scanPolicyId !== undefined && object.scanPolicyId !== null
        ? String(object.scanPolicyId)
        : "";
    return message;
  },

  toJSON(message: DeleteScanPolicyRequest): unknown {
    const obj: any = {};
    message.scanPolicyId !== undefined &&
      (obj.scanPolicyId = message.scanPolicyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteScanPolicyRequest>, I>>(
    object: I
  ): DeleteScanPolicyRequest {
    const message = {
      ...baseDeleteScanPolicyRequest,
    } as DeleteScanPolicyRequest;
    message.scanPolicyId = object.scanPolicyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteScanPolicyRequest.$type, DeleteScanPolicyRequest);

const baseCreateScanPolicyMetadata: object = {
  $type: "yandex.cloud.containerregistry.v1.CreateScanPolicyMetadata",
  scanPolicyId: "",
};

export const CreateScanPolicyMetadata = {
  $type: "yandex.cloud.containerregistry.v1.CreateScanPolicyMetadata" as const,

  encode(
    message: CreateScanPolicyMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scanPolicyId !== "") {
      writer.uint32(10).string(message.scanPolicyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateScanPolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateScanPolicyMetadata,
    } as CreateScanPolicyMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scanPolicyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateScanPolicyMetadata {
    const message = {
      ...baseCreateScanPolicyMetadata,
    } as CreateScanPolicyMetadata;
    message.scanPolicyId =
      object.scanPolicyId !== undefined && object.scanPolicyId !== null
        ? String(object.scanPolicyId)
        : "";
    return message;
  },

  toJSON(message: CreateScanPolicyMetadata): unknown {
    const obj: any = {};
    message.scanPolicyId !== undefined &&
      (obj.scanPolicyId = message.scanPolicyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateScanPolicyMetadata>, I>>(
    object: I
  ): CreateScanPolicyMetadata {
    const message = {
      ...baseCreateScanPolicyMetadata,
    } as CreateScanPolicyMetadata;
    message.scanPolicyId = object.scanPolicyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateScanPolicyMetadata.$type,
  CreateScanPolicyMetadata
);

const baseUpdateScanPolicyMetadata: object = {
  $type: "yandex.cloud.containerregistry.v1.UpdateScanPolicyMetadata",
  scanPolicyId: "",
};

export const UpdateScanPolicyMetadata = {
  $type: "yandex.cloud.containerregistry.v1.UpdateScanPolicyMetadata" as const,

  encode(
    message: UpdateScanPolicyMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scanPolicyId !== "") {
      writer.uint32(10).string(message.scanPolicyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateScanPolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateScanPolicyMetadata,
    } as UpdateScanPolicyMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scanPolicyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateScanPolicyMetadata {
    const message = {
      ...baseUpdateScanPolicyMetadata,
    } as UpdateScanPolicyMetadata;
    message.scanPolicyId =
      object.scanPolicyId !== undefined && object.scanPolicyId !== null
        ? String(object.scanPolicyId)
        : "";
    return message;
  },

  toJSON(message: UpdateScanPolicyMetadata): unknown {
    const obj: any = {};
    message.scanPolicyId !== undefined &&
      (obj.scanPolicyId = message.scanPolicyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateScanPolicyMetadata>, I>>(
    object: I
  ): UpdateScanPolicyMetadata {
    const message = {
      ...baseUpdateScanPolicyMetadata,
    } as UpdateScanPolicyMetadata;
    message.scanPolicyId = object.scanPolicyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateScanPolicyMetadata.$type,
  UpdateScanPolicyMetadata
);

const baseDeleteScanPolicyMetadata: object = {
  $type: "yandex.cloud.containerregistry.v1.DeleteScanPolicyMetadata",
  scanPolicyId: "",
};

export const DeleteScanPolicyMetadata = {
  $type: "yandex.cloud.containerregistry.v1.DeleteScanPolicyMetadata" as const,

  encode(
    message: DeleteScanPolicyMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scanPolicyId !== "") {
      writer.uint32(10).string(message.scanPolicyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteScanPolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteScanPolicyMetadata,
    } as DeleteScanPolicyMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scanPolicyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteScanPolicyMetadata {
    const message = {
      ...baseDeleteScanPolicyMetadata,
    } as DeleteScanPolicyMetadata;
    message.scanPolicyId =
      object.scanPolicyId !== undefined && object.scanPolicyId !== null
        ? String(object.scanPolicyId)
        : "";
    return message;
  },

  toJSON(message: DeleteScanPolicyMetadata): unknown {
    const obj: any = {};
    message.scanPolicyId !== undefined &&
      (obj.scanPolicyId = message.scanPolicyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteScanPolicyMetadata>, I>>(
    object: I
  ): DeleteScanPolicyMetadata {
    const message = {
      ...baseDeleteScanPolicyMetadata,
    } as DeleteScanPolicyMetadata;
    message.scanPolicyId = object.scanPolicyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteScanPolicyMetadata.$type,
  DeleteScanPolicyMetadata
);

/** A set of methods for managing scan policy resources. */
export const ScanPolicyServiceService = {
  /** Returns the specified scan policy. */
  get: {
    path: "/yandex.cloud.containerregistry.v1.ScanPolicyService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetScanPolicyRequest) =>
      Buffer.from(GetScanPolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetScanPolicyRequest.decode(value),
    responseSerialize: (value: ScanPolicy) =>
      Buffer.from(ScanPolicy.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ScanPolicy.decode(value),
  },
  /** Returns scan policy for the registry if any exists. */
  getByRegistry: {
    path: "/yandex.cloud.containerregistry.v1.ScanPolicyService/GetByRegistry",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetScanPolicyByRegistryRequest) =>
      Buffer.from(GetScanPolicyByRegistryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetScanPolicyByRegistryRequest.decode(value),
    responseSerialize: (value: ScanPolicy) =>
      Buffer.from(ScanPolicy.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ScanPolicy.decode(value),
  },
  /** Creates a scan policy for the specified registry. */
  create: {
    path: "/yandex.cloud.containerregistry.v1.ScanPolicyService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateScanPolicyRequest) =>
      Buffer.from(CreateScanPolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateScanPolicyRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified scan policy. */
  update: {
    path: "/yandex.cloud.containerregistry.v1.ScanPolicyService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateScanPolicyRequest) =>
      Buffer.from(UpdateScanPolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateScanPolicyRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified scan policy. */
  delete: {
    path: "/yandex.cloud.containerregistry.v1.ScanPolicyService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteScanPolicyRequest) =>
      Buffer.from(DeleteScanPolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteScanPolicyRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface ScanPolicyServiceServer extends UntypedServiceImplementation {
  /** Returns the specified scan policy. */
  get: handleUnaryCall<GetScanPolicyRequest, ScanPolicy>;
  /** Returns scan policy for the registry if any exists. */
  getByRegistry: handleUnaryCall<GetScanPolicyByRegistryRequest, ScanPolicy>;
  /** Creates a scan policy for the specified registry. */
  create: handleUnaryCall<CreateScanPolicyRequest, Operation>;
  /** Updates the specified scan policy. */
  update: handleUnaryCall<UpdateScanPolicyRequest, Operation>;
  /** Deletes the specified scan policy. */
  delete: handleUnaryCall<DeleteScanPolicyRequest, Operation>;
}

export interface ScanPolicyServiceClient extends Client {
  /** Returns the specified scan policy. */
  get(
    request: GetScanPolicyRequest,
    callback: (error: ServiceError | null, response: ScanPolicy) => void
  ): ClientUnaryCall;
  get(
    request: GetScanPolicyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ScanPolicy) => void
  ): ClientUnaryCall;
  get(
    request: GetScanPolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ScanPolicy) => void
  ): ClientUnaryCall;
  /** Returns scan policy for the registry if any exists. */
  getByRegistry(
    request: GetScanPolicyByRegistryRequest,
    callback: (error: ServiceError | null, response: ScanPolicy) => void
  ): ClientUnaryCall;
  getByRegistry(
    request: GetScanPolicyByRegistryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ScanPolicy) => void
  ): ClientUnaryCall;
  getByRegistry(
    request: GetScanPolicyByRegistryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ScanPolicy) => void
  ): ClientUnaryCall;
  /** Creates a scan policy for the specified registry. */
  create(
    request: CreateScanPolicyRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateScanPolicyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateScanPolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified scan policy. */
  update(
    request: UpdateScanPolicyRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateScanPolicyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateScanPolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified scan policy. */
  delete(
    request: DeleteScanPolicyRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteScanPolicyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteScanPolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const ScanPolicyServiceClient = makeGenericClientConstructor(
  ScanPolicyServiceService,
  "yandex.cloud.containerregistry.v1.ScanPolicyService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): ScanPolicyServiceClient;
  service: typeof ScanPolicyServiceService;
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
