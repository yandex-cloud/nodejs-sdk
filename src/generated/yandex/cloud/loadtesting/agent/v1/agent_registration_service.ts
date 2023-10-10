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
import { Operation } from "../../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.loadtesting.agent.v1";

export interface RegisterRequest {
  $type: "yandex.cloud.loadtesting.agent.v1.RegisterRequest";
  computeInstanceId: string;
}

export interface RegisterResponse {
  $type: "yandex.cloud.loadtesting.agent.v1.RegisterResponse";
  agentInstanceId: string;
}

export interface ExternalAgentRegisterRequest {
  $type: "yandex.cloud.loadtesting.agent.v1.ExternalAgentRegisterRequest";
  folderId: string;
  computeInstanceId: string;
  name: string;
  agentVersion: string;
}

export interface ExternalAgentRegisterMetadata {
  $type: "yandex.cloud.loadtesting.agent.v1.ExternalAgentRegisterMetadata";
  agentInstanceId: string;
}

const baseRegisterRequest: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.RegisterRequest",
  computeInstanceId: "",
};

export const RegisterRequest = {
  $type: "yandex.cloud.loadtesting.agent.v1.RegisterRequest" as const,

  encode(
    message: RegisterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRegisterRequest } as RegisterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.computeInstanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterRequest {
    const message = { ...baseRegisterRequest } as RegisterRequest;
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : "";
    return message;
  },

  toJSON(message: RegisterRequest): unknown {
    const obj: any = {};
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterRequest>, I>>(
    object: I
  ): RegisterRequest {
    const message = { ...baseRegisterRequest } as RegisterRequest;
    message.computeInstanceId = object.computeInstanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RegisterRequest.$type, RegisterRequest);

const baseRegisterResponse: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.RegisterResponse",
  agentInstanceId: "",
};

export const RegisterResponse = {
  $type: "yandex.cloud.loadtesting.agent.v1.RegisterResponse" as const,

  encode(
    message: RegisterResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.agentInstanceId !== "") {
      writer.uint32(10).string(message.agentInstanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRegisterResponse } as RegisterResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agentInstanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterResponse {
    const message = { ...baseRegisterResponse } as RegisterResponse;
    message.agentInstanceId =
      object.agentInstanceId !== undefined && object.agentInstanceId !== null
        ? String(object.agentInstanceId)
        : "";
    return message;
  },

  toJSON(message: RegisterResponse): unknown {
    const obj: any = {};
    message.agentInstanceId !== undefined &&
      (obj.agentInstanceId = message.agentInstanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterResponse>, I>>(
    object: I
  ): RegisterResponse {
    const message = { ...baseRegisterResponse } as RegisterResponse;
    message.agentInstanceId = object.agentInstanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RegisterResponse.$type, RegisterResponse);

const baseExternalAgentRegisterRequest: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.ExternalAgentRegisterRequest",
  folderId: "",
  computeInstanceId: "",
  name: "",
  agentVersion: "",
};

export const ExternalAgentRegisterRequest = {
  $type:
    "yandex.cloud.loadtesting.agent.v1.ExternalAgentRegisterRequest" as const,

  encode(
    message: ExternalAgentRegisterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.computeInstanceId !== "") {
      writer.uint32(18).string(message.computeInstanceId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.agentVersion !== "") {
      writer.uint32(34).string(message.agentVersion);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExternalAgentRegisterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseExternalAgentRegisterRequest,
    } as ExternalAgentRegisterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 2:
          message.computeInstanceId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.agentVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExternalAgentRegisterRequest {
    const message = {
      ...baseExternalAgentRegisterRequest,
    } as ExternalAgentRegisterRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.agentVersion =
      object.agentVersion !== undefined && object.agentVersion !== null
        ? String(object.agentVersion)
        : "";
    return message;
  },

  toJSON(message: ExternalAgentRegisterRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    message.name !== undefined && (obj.name = message.name);
    message.agentVersion !== undefined &&
      (obj.agentVersion = message.agentVersion);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExternalAgentRegisterRequest>, I>>(
    object: I
  ): ExternalAgentRegisterRequest {
    const message = {
      ...baseExternalAgentRegisterRequest,
    } as ExternalAgentRegisterRequest;
    message.folderId = object.folderId ?? "";
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.name = object.name ?? "";
    message.agentVersion = object.agentVersion ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ExternalAgentRegisterRequest.$type,
  ExternalAgentRegisterRequest
);

const baseExternalAgentRegisterMetadata: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.ExternalAgentRegisterMetadata",
  agentInstanceId: "",
};

export const ExternalAgentRegisterMetadata = {
  $type:
    "yandex.cloud.loadtesting.agent.v1.ExternalAgentRegisterMetadata" as const,

  encode(
    message: ExternalAgentRegisterMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.agentInstanceId !== "") {
      writer.uint32(10).string(message.agentInstanceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExternalAgentRegisterMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseExternalAgentRegisterMetadata,
    } as ExternalAgentRegisterMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agentInstanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExternalAgentRegisterMetadata {
    const message = {
      ...baseExternalAgentRegisterMetadata,
    } as ExternalAgentRegisterMetadata;
    message.agentInstanceId =
      object.agentInstanceId !== undefined && object.agentInstanceId !== null
        ? String(object.agentInstanceId)
        : "";
    return message;
  },

  toJSON(message: ExternalAgentRegisterMetadata): unknown {
    const obj: any = {};
    message.agentInstanceId !== undefined &&
      (obj.agentInstanceId = message.agentInstanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExternalAgentRegisterMetadata>, I>>(
    object: I
  ): ExternalAgentRegisterMetadata {
    const message = {
      ...baseExternalAgentRegisterMetadata,
    } as ExternalAgentRegisterMetadata;
    message.agentInstanceId = object.agentInstanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ExternalAgentRegisterMetadata.$type,
  ExternalAgentRegisterMetadata
);

export const AgentRegistrationServiceService = {
  /** Registers specified agent. */
  register: {
    path: "/yandex.cloud.loadtesting.agent.v1.AgentRegistrationService/Register",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RegisterRequest) =>
      Buffer.from(RegisterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RegisterRequest.decode(value),
    responseSerialize: (value: RegisterResponse) =>
      Buffer.from(RegisterResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => RegisterResponse.decode(value),
  },
  /** Registers external agent. */
  externalAgentRegister: {
    path: "/yandex.cloud.loadtesting.agent.v1.AgentRegistrationService/ExternalAgentRegister",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ExternalAgentRegisterRequest) =>
      Buffer.from(ExternalAgentRegisterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ExternalAgentRegisterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface AgentRegistrationServiceServer
  extends UntypedServiceImplementation {
  /** Registers specified agent. */
  register: handleUnaryCall<RegisterRequest, RegisterResponse>;
  /** Registers external agent. */
  externalAgentRegister: handleUnaryCall<
    ExternalAgentRegisterRequest,
    Operation
  >;
}

export interface AgentRegistrationServiceClient extends Client {
  /** Registers specified agent. */
  register(
    request: RegisterRequest,
    callback: (error: ServiceError | null, response: RegisterResponse) => void
  ): ClientUnaryCall;
  register(
    request: RegisterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: RegisterResponse) => void
  ): ClientUnaryCall;
  register(
    request: RegisterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: RegisterResponse) => void
  ): ClientUnaryCall;
  /** Registers external agent. */
  externalAgentRegister(
    request: ExternalAgentRegisterRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  externalAgentRegister(
    request: ExternalAgentRegisterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  externalAgentRegister(
    request: ExternalAgentRegisterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const AgentRegistrationServiceClient = makeGenericClientConstructor(
  AgentRegistrationServiceService,
  "yandex.cloud.loadtesting.agent.v1.AgentRegistrationService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): AgentRegistrationServiceClient;
  service: typeof AgentRegistrationServiceService;
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
