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
import { Struct } from "../../../../google/protobuf/struct";

export const protobufPackage = "yandex.cloud.datasphere.v1";

export interface NodeExecutionRequest {
  $type: "yandex.cloud.datasphere.v1.NodeExecutionRequest";
  /** ID of the folder that will be matched with Node ACL. */
  folderId: string;
  /** ID of the Node to perform request on. */
  nodeId: string;
  /** Input data for the execution. */
  input?: { [key: string]: any };
}

export interface NodeExecutionResponse {
  $type: "yandex.cloud.datasphere.v1.NodeExecutionResponse";
  /** Result of the execution. */
  output?: { [key: string]: any };
}

export interface AliasExecutionRequest {
  $type: "yandex.cloud.datasphere.v1.AliasExecutionRequest";
  /** ID of the folder that will be matched with Alias ACL */
  folderId: string;
  /** Name of the Alias to perform request on */
  aliasName: string;
  /** Input data for the execution */
  input?: { [key: string]: any };
}

export interface AliasExecutionResponse {
  $type: "yandex.cloud.datasphere.v1.AliasExecutionResponse";
  /** Result of the execution */
  output?: { [key: string]: any };
}

const baseNodeExecutionRequest: object = {
  $type: "yandex.cloud.datasphere.v1.NodeExecutionRequest",
  folderId: "",
  nodeId: "",
};

export const NodeExecutionRequest = {
  $type: "yandex.cloud.datasphere.v1.NodeExecutionRequest" as const,

  encode(
    message: NodeExecutionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.nodeId !== "") {
      writer.uint32(18).string(message.nodeId);
    }
    if (message.input !== undefined) {
      Struct.encode(
        Struct.wrap(message.input),
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): NodeExecutionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNodeExecutionRequest } as NodeExecutionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 2:
          message.nodeId = reader.string();
          break;
        case 3:
          message.input = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodeExecutionRequest {
    const message = { ...baseNodeExecutionRequest } as NodeExecutionRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.nodeId =
      object.nodeId !== undefined && object.nodeId !== null
        ? String(object.nodeId)
        : "";
    message.input = typeof object.input === "object" ? object.input : undefined;
    return message;
  },

  toJSON(message: NodeExecutionRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.input !== undefined && (obj.input = message.input);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NodeExecutionRequest>, I>>(
    object: I
  ): NodeExecutionRequest {
    const message = { ...baseNodeExecutionRequest } as NodeExecutionRequest;
    message.folderId = object.folderId ?? "";
    message.nodeId = object.nodeId ?? "";
    message.input = object.input ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(NodeExecutionRequest.$type, NodeExecutionRequest);

const baseNodeExecutionResponse: object = {
  $type: "yandex.cloud.datasphere.v1.NodeExecutionResponse",
};

export const NodeExecutionResponse = {
  $type: "yandex.cloud.datasphere.v1.NodeExecutionResponse" as const,

  encode(
    message: NodeExecutionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.output !== undefined) {
      Struct.encode(
        Struct.wrap(message.output),
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): NodeExecutionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNodeExecutionResponse } as NodeExecutionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.output = Struct.unwrap(
            Struct.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodeExecutionResponse {
    const message = { ...baseNodeExecutionResponse } as NodeExecutionResponse;
    message.output =
      typeof object.output === "object" ? object.output : undefined;
    return message;
  },

  toJSON(message: NodeExecutionResponse): unknown {
    const obj: any = {};
    message.output !== undefined && (obj.output = message.output);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NodeExecutionResponse>, I>>(
    object: I
  ): NodeExecutionResponse {
    const message = { ...baseNodeExecutionResponse } as NodeExecutionResponse;
    message.output = object.output ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(NodeExecutionResponse.$type, NodeExecutionResponse);

const baseAliasExecutionRequest: object = {
  $type: "yandex.cloud.datasphere.v1.AliasExecutionRequest",
  folderId: "",
  aliasName: "",
};

export const AliasExecutionRequest = {
  $type: "yandex.cloud.datasphere.v1.AliasExecutionRequest" as const,

  encode(
    message: AliasExecutionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.aliasName !== "") {
      writer.uint32(18).string(message.aliasName);
    }
    if (message.input !== undefined) {
      Struct.encode(
        Struct.wrap(message.input),
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AliasExecutionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAliasExecutionRequest } as AliasExecutionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 2:
          message.aliasName = reader.string();
          break;
        case 3:
          message.input = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AliasExecutionRequest {
    const message = { ...baseAliasExecutionRequest } as AliasExecutionRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.aliasName =
      object.aliasName !== undefined && object.aliasName !== null
        ? String(object.aliasName)
        : "";
    message.input = typeof object.input === "object" ? object.input : undefined;
    return message;
  },

  toJSON(message: AliasExecutionRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.aliasName !== undefined && (obj.aliasName = message.aliasName);
    message.input !== undefined && (obj.input = message.input);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AliasExecutionRequest>, I>>(
    object: I
  ): AliasExecutionRequest {
    const message = { ...baseAliasExecutionRequest } as AliasExecutionRequest;
    message.folderId = object.folderId ?? "";
    message.aliasName = object.aliasName ?? "";
    message.input = object.input ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(AliasExecutionRequest.$type, AliasExecutionRequest);

const baseAliasExecutionResponse: object = {
  $type: "yandex.cloud.datasphere.v1.AliasExecutionResponse",
};

export const AliasExecutionResponse = {
  $type: "yandex.cloud.datasphere.v1.AliasExecutionResponse" as const,

  encode(
    message: AliasExecutionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.output !== undefined) {
      Struct.encode(
        Struct.wrap(message.output),
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AliasExecutionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAliasExecutionResponse } as AliasExecutionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.output = Struct.unwrap(
            Struct.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AliasExecutionResponse {
    const message = { ...baseAliasExecutionResponse } as AliasExecutionResponse;
    message.output =
      typeof object.output === "object" ? object.output : undefined;
    return message;
  },

  toJSON(message: AliasExecutionResponse): unknown {
    const obj: any = {};
    message.output !== undefined && (obj.output = message.output);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AliasExecutionResponse>, I>>(
    object: I
  ): AliasExecutionResponse {
    const message = { ...baseAliasExecutionResponse } as AliasExecutionResponse;
    message.output = object.output ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(AliasExecutionResponse.$type, AliasExecutionResponse);

/** A set of methods for managing Node resources. */
export const NodeServiceService = {
  /** Executes deployed Node. */
  execute: {
    path: "/yandex.cloud.datasphere.v1.NodeService/Execute",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: NodeExecutionRequest) =>
      Buffer.from(NodeExecutionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => NodeExecutionRequest.decode(value),
    responseSerialize: (value: NodeExecutionResponse) =>
      Buffer.from(NodeExecutionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => NodeExecutionResponse.decode(value),
  },
  /** Executes NodeAlias requests. */
  executeAlias: {
    path: "/yandex.cloud.datasphere.v1.NodeService/ExecuteAlias",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AliasExecutionRequest) =>
      Buffer.from(AliasExecutionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AliasExecutionRequest.decode(value),
    responseSerialize: (value: AliasExecutionResponse) =>
      Buffer.from(AliasExecutionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      AliasExecutionResponse.decode(value),
  },
} as const;

export interface NodeServiceServer extends UntypedServiceImplementation {
  /** Executes deployed Node. */
  execute: handleUnaryCall<NodeExecutionRequest, NodeExecutionResponse>;
  /** Executes NodeAlias requests. */
  executeAlias: handleUnaryCall<AliasExecutionRequest, AliasExecutionResponse>;
}

export interface NodeServiceClient extends Client {
  /** Executes deployed Node. */
  execute(
    request: NodeExecutionRequest,
    callback: (
      error: ServiceError | null,
      response: NodeExecutionResponse
    ) => void
  ): ClientUnaryCall;
  execute(
    request: NodeExecutionRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: NodeExecutionResponse
    ) => void
  ): ClientUnaryCall;
  execute(
    request: NodeExecutionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: NodeExecutionResponse
    ) => void
  ): ClientUnaryCall;
  /** Executes NodeAlias requests. */
  executeAlias(
    request: AliasExecutionRequest,
    callback: (
      error: ServiceError | null,
      response: AliasExecutionResponse
    ) => void
  ): ClientUnaryCall;
  executeAlias(
    request: AliasExecutionRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: AliasExecutionResponse
    ) => void
  ): ClientUnaryCall;
  executeAlias(
    request: AliasExecutionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: AliasExecutionResponse
    ) => void
  ): ClientUnaryCall;
}

export const NodeServiceClient = makeGenericClientConstructor(
  NodeServiceService,
  "yandex.cloud.datasphere.v1.NodeService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): NodeServiceClient;
  service: typeof NodeServiceService;
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
