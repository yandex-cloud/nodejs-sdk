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
import { Lock } from "../../../../../yandex/cloud/marketplace/licensemanager/v1/lock";
import { Operation } from "../../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.marketplace.licensemanager.v1";

export interface GetLockRequest {
  $type: "yandex.cloud.marketplace.licensemanager.v1.GetLockRequest";
  lockId: string;
}

export interface CreateLockRequest {
  $type: "yandex.cloud.marketplace.licensemanager.v1.CreateLockRequest";
  /** license */
  instanceId: string;
  resourceId: string;
}

export interface EnsureLockRequest {
  $type: "yandex.cloud.marketplace.licensemanager.v1.EnsureLockRequest";
  /** license */
  instanceId: string;
  resourceId: string;
}

export interface CreateLockMetadata {
  $type: "yandex.cloud.marketplace.licensemanager.v1.CreateLockMetadata";
  lockId: string;
}

export interface EnsureLockMetadata {
  $type: "yandex.cloud.marketplace.licensemanager.v1.EnsureLockMetadata";
  lockId: string;
}

export interface DeleteLockRequest {
  $type: "yandex.cloud.marketplace.licensemanager.v1.DeleteLockRequest";
  lockId: string;
}

export interface DeleteLockMetadata {
  $type: "yandex.cloud.marketplace.licensemanager.v1.DeleteLockMetadata";
  lockId: string;
}

export interface GetLockByInstanceAndResourceRequest {
  $type: "yandex.cloud.marketplace.licensemanager.v1.GetLockByInstanceAndResourceRequest";
  /** license */
  instanceId: string;
  resourceId: string;
}

const baseGetLockRequest: object = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.GetLockRequest",
  lockId: "",
};

export const GetLockRequest = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.GetLockRequest" as const,

  encode(
    message: GetLockRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lockId !== "") {
      writer.uint32(10).string(message.lockId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLockRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetLockRequest } as GetLockRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLockRequest {
    const message = { ...baseGetLockRequest } as GetLockRequest;
    message.lockId =
      object.lockId !== undefined && object.lockId !== null
        ? String(object.lockId)
        : "";
    return message;
  },

  toJSON(message: GetLockRequest): unknown {
    const obj: any = {};
    message.lockId !== undefined && (obj.lockId = message.lockId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetLockRequest>, I>>(
    object: I
  ): GetLockRequest {
    const message = { ...baseGetLockRequest } as GetLockRequest;
    message.lockId = object.lockId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetLockRequest.$type, GetLockRequest);

const baseCreateLockRequest: object = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.CreateLockRequest",
  instanceId: "",
  resourceId: "",
};

export const CreateLockRequest = {
  $type:
    "yandex.cloud.marketplace.licensemanager.v1.CreateLockRequest" as const,

  encode(
    message: CreateLockRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.resourceId !== "") {
      writer.uint32(18).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateLockRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateLockRequest } as CreateLockRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        case 2:
          message.resourceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateLockRequest {
    const message = { ...baseCreateLockRequest } as CreateLockRequest;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    message.resourceId =
      object.resourceId !== undefined && object.resourceId !== null
        ? String(object.resourceId)
        : "";
    return message;
  },

  toJSON(message: CreateLockRequest): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    message.resourceId !== undefined && (obj.resourceId = message.resourceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateLockRequest>, I>>(
    object: I
  ): CreateLockRequest {
    const message = { ...baseCreateLockRequest } as CreateLockRequest;
    message.instanceId = object.instanceId ?? "";
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateLockRequest.$type, CreateLockRequest);

const baseEnsureLockRequest: object = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.EnsureLockRequest",
  instanceId: "",
  resourceId: "",
};

export const EnsureLockRequest = {
  $type:
    "yandex.cloud.marketplace.licensemanager.v1.EnsureLockRequest" as const,

  encode(
    message: EnsureLockRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.resourceId !== "") {
      writer.uint32(18).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnsureLockRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEnsureLockRequest } as EnsureLockRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        case 2:
          message.resourceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EnsureLockRequest {
    const message = { ...baseEnsureLockRequest } as EnsureLockRequest;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    message.resourceId =
      object.resourceId !== undefined && object.resourceId !== null
        ? String(object.resourceId)
        : "";
    return message;
  },

  toJSON(message: EnsureLockRequest): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    message.resourceId !== undefined && (obj.resourceId = message.resourceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EnsureLockRequest>, I>>(
    object: I
  ): EnsureLockRequest {
    const message = { ...baseEnsureLockRequest } as EnsureLockRequest;
    message.instanceId = object.instanceId ?? "";
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(EnsureLockRequest.$type, EnsureLockRequest);

const baseCreateLockMetadata: object = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.CreateLockMetadata",
  lockId: "",
};

export const CreateLockMetadata = {
  $type:
    "yandex.cloud.marketplace.licensemanager.v1.CreateLockMetadata" as const,

  encode(
    message: CreateLockMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lockId !== "") {
      writer.uint32(10).string(message.lockId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateLockMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateLockMetadata } as CreateLockMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateLockMetadata {
    const message = { ...baseCreateLockMetadata } as CreateLockMetadata;
    message.lockId =
      object.lockId !== undefined && object.lockId !== null
        ? String(object.lockId)
        : "";
    return message;
  },

  toJSON(message: CreateLockMetadata): unknown {
    const obj: any = {};
    message.lockId !== undefined && (obj.lockId = message.lockId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateLockMetadata>, I>>(
    object: I
  ): CreateLockMetadata {
    const message = { ...baseCreateLockMetadata } as CreateLockMetadata;
    message.lockId = object.lockId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateLockMetadata.$type, CreateLockMetadata);

const baseEnsureLockMetadata: object = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.EnsureLockMetadata",
  lockId: "",
};

export const EnsureLockMetadata = {
  $type:
    "yandex.cloud.marketplace.licensemanager.v1.EnsureLockMetadata" as const,

  encode(
    message: EnsureLockMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lockId !== "") {
      writer.uint32(10).string(message.lockId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnsureLockMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEnsureLockMetadata } as EnsureLockMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EnsureLockMetadata {
    const message = { ...baseEnsureLockMetadata } as EnsureLockMetadata;
    message.lockId =
      object.lockId !== undefined && object.lockId !== null
        ? String(object.lockId)
        : "";
    return message;
  },

  toJSON(message: EnsureLockMetadata): unknown {
    const obj: any = {};
    message.lockId !== undefined && (obj.lockId = message.lockId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EnsureLockMetadata>, I>>(
    object: I
  ): EnsureLockMetadata {
    const message = { ...baseEnsureLockMetadata } as EnsureLockMetadata;
    message.lockId = object.lockId ?? "";
    return message;
  },
};

messageTypeRegistry.set(EnsureLockMetadata.$type, EnsureLockMetadata);

const baseDeleteLockRequest: object = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.DeleteLockRequest",
  lockId: "",
};

export const DeleteLockRequest = {
  $type:
    "yandex.cloud.marketplace.licensemanager.v1.DeleteLockRequest" as const,

  encode(
    message: DeleteLockRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lockId !== "") {
      writer.uint32(10).string(message.lockId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteLockRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteLockRequest } as DeleteLockRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteLockRequest {
    const message = { ...baseDeleteLockRequest } as DeleteLockRequest;
    message.lockId =
      object.lockId !== undefined && object.lockId !== null
        ? String(object.lockId)
        : "";
    return message;
  },

  toJSON(message: DeleteLockRequest): unknown {
    const obj: any = {};
    message.lockId !== undefined && (obj.lockId = message.lockId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteLockRequest>, I>>(
    object: I
  ): DeleteLockRequest {
    const message = { ...baseDeleteLockRequest } as DeleteLockRequest;
    message.lockId = object.lockId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteLockRequest.$type, DeleteLockRequest);

const baseDeleteLockMetadata: object = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.DeleteLockMetadata",
  lockId: "",
};

export const DeleteLockMetadata = {
  $type:
    "yandex.cloud.marketplace.licensemanager.v1.DeleteLockMetadata" as const,

  encode(
    message: DeleteLockMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lockId !== "") {
      writer.uint32(10).string(message.lockId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteLockMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteLockMetadata } as DeleteLockMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteLockMetadata {
    const message = { ...baseDeleteLockMetadata } as DeleteLockMetadata;
    message.lockId =
      object.lockId !== undefined && object.lockId !== null
        ? String(object.lockId)
        : "";
    return message;
  },

  toJSON(message: DeleteLockMetadata): unknown {
    const obj: any = {};
    message.lockId !== undefined && (obj.lockId = message.lockId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteLockMetadata>, I>>(
    object: I
  ): DeleteLockMetadata {
    const message = { ...baseDeleteLockMetadata } as DeleteLockMetadata;
    message.lockId = object.lockId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteLockMetadata.$type, DeleteLockMetadata);

const baseGetLockByInstanceAndResourceRequest: object = {
  $type:
    "yandex.cloud.marketplace.licensemanager.v1.GetLockByInstanceAndResourceRequest",
  instanceId: "",
  resourceId: "",
};

export const GetLockByInstanceAndResourceRequest = {
  $type:
    "yandex.cloud.marketplace.licensemanager.v1.GetLockByInstanceAndResourceRequest" as const,

  encode(
    message: GetLockByInstanceAndResourceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.resourceId !== "") {
      writer.uint32(18).string(message.resourceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLockByInstanceAndResourceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetLockByInstanceAndResourceRequest,
    } as GetLockByInstanceAndResourceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        case 2:
          message.resourceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLockByInstanceAndResourceRequest {
    const message = {
      ...baseGetLockByInstanceAndResourceRequest,
    } as GetLockByInstanceAndResourceRequest;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    message.resourceId =
      object.resourceId !== undefined && object.resourceId !== null
        ? String(object.resourceId)
        : "";
    return message;
  },

  toJSON(message: GetLockByInstanceAndResourceRequest): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    message.resourceId !== undefined && (obj.resourceId = message.resourceId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetLockByInstanceAndResourceRequest>, I>
  >(object: I): GetLockByInstanceAndResourceRequest {
    const message = {
      ...baseGetLockByInstanceAndResourceRequest,
    } as GetLockByInstanceAndResourceRequest;
    message.instanceId = object.instanceId ?? "";
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  GetLockByInstanceAndResourceRequest.$type,
  GetLockByInstanceAndResourceRequest
);

export const LockServiceService = {
  get: {
    path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetLockRequest) =>
      Buffer.from(GetLockRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetLockRequest.decode(value),
    responseSerialize: (value: Lock) =>
      Buffer.from(Lock.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Lock.decode(value),
  },
  getByInstanceAndResource: {
    path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/GetByInstanceAndResource",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetLockByInstanceAndResourceRequest) =>
      Buffer.from(GetLockByInstanceAndResourceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetLockByInstanceAndResourceRequest.decode(value),
    responseSerialize: (value: Lock) =>
      Buffer.from(Lock.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Lock.decode(value),
  },
  create: {
    path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateLockRequest) =>
      Buffer.from(CreateLockRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateLockRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  ensure: {
    path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/Ensure",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: EnsureLockRequest) =>
      Buffer.from(EnsureLockRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => EnsureLockRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  delete: {
    path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteLockRequest) =>
      Buffer.from(DeleteLockRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteLockRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface LockServiceServer extends UntypedServiceImplementation {
  get: handleUnaryCall<GetLockRequest, Lock>;
  getByInstanceAndResource: handleUnaryCall<
    GetLockByInstanceAndResourceRequest,
    Lock
  >;
  create: handleUnaryCall<CreateLockRequest, Operation>;
  ensure: handleUnaryCall<EnsureLockRequest, Operation>;
  delete: handleUnaryCall<DeleteLockRequest, Operation>;
}

export interface LockServiceClient extends Client {
  get(
    request: GetLockRequest,
    callback: (error: ServiceError | null, response: Lock) => void
  ): ClientUnaryCall;
  get(
    request: GetLockRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Lock) => void
  ): ClientUnaryCall;
  get(
    request: GetLockRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Lock) => void
  ): ClientUnaryCall;
  getByInstanceAndResource(
    request: GetLockByInstanceAndResourceRequest,
    callback: (error: ServiceError | null, response: Lock) => void
  ): ClientUnaryCall;
  getByInstanceAndResource(
    request: GetLockByInstanceAndResourceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Lock) => void
  ): ClientUnaryCall;
  getByInstanceAndResource(
    request: GetLockByInstanceAndResourceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Lock) => void
  ): ClientUnaryCall;
  create(
    request: CreateLockRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateLockRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateLockRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  ensure(
    request: EnsureLockRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  ensure(
    request: EnsureLockRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  ensure(
    request: EnsureLockRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteLockRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteLockRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteLockRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const LockServiceClient = makeGenericClientConstructor(
  LockServiceService,
  "yandex.cloud.marketplace.licensemanager.v1.LockService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): LockServiceClient;
  service: typeof LockServiceService;
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
