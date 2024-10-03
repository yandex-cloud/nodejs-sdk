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
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.datasphere.v2";

export interface ActivateS3Request {
  $type: "yandex.cloud.datasphere.v2.ActivateS3Request";
  s3Id: string;
  projectId: string;
}

export interface DeactivateS3Request {
  $type: "yandex.cloud.datasphere.v2.DeactivateS3Request";
  s3Id: string;
  projectId: string;
}

const baseActivateS3Request: object = {
  $type: "yandex.cloud.datasphere.v2.ActivateS3Request",
  s3Id: "",
  projectId: "",
};

export const ActivateS3Request = {
  $type: "yandex.cloud.datasphere.v2.ActivateS3Request" as const,

  encode(
    message: ActivateS3Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.s3Id !== "") {
      writer.uint32(10).string(message.s3Id);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivateS3Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseActivateS3Request } as ActivateS3Request;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.s3Id = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActivateS3Request {
    const message = { ...baseActivateS3Request } as ActivateS3Request;
    message.s3Id =
      object.s3Id !== undefined && object.s3Id !== null
        ? String(object.s3Id)
        : "";
    message.projectId =
      object.projectId !== undefined && object.projectId !== null
        ? String(object.projectId)
        : "";
    return message;
  },

  toJSON(message: ActivateS3Request): unknown {
    const obj: any = {};
    message.s3Id !== undefined && (obj.s3Id = message.s3Id);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActivateS3Request>, I>>(
    object: I
  ): ActivateS3Request {
    const message = { ...baseActivateS3Request } as ActivateS3Request;
    message.s3Id = object.s3Id ?? "";
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ActivateS3Request.$type, ActivateS3Request);

const baseDeactivateS3Request: object = {
  $type: "yandex.cloud.datasphere.v2.DeactivateS3Request",
  s3Id: "",
  projectId: "",
};

export const DeactivateS3Request = {
  $type: "yandex.cloud.datasphere.v2.DeactivateS3Request" as const,

  encode(
    message: DeactivateS3Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.s3Id !== "") {
      writer.uint32(10).string(message.s3Id);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateS3Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeactivateS3Request } as DeactivateS3Request;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.s3Id = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeactivateS3Request {
    const message = { ...baseDeactivateS3Request } as DeactivateS3Request;
    message.s3Id =
      object.s3Id !== undefined && object.s3Id !== null
        ? String(object.s3Id)
        : "";
    message.projectId =
      object.projectId !== undefined && object.projectId !== null
        ? String(object.projectId)
        : "";
    return message;
  },

  toJSON(message: DeactivateS3Request): unknown {
    const obj: any = {};
    message.s3Id !== undefined && (obj.s3Id = message.s3Id);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeactivateS3Request>, I>>(
    object: I
  ): DeactivateS3Request {
    const message = { ...baseDeactivateS3Request } as DeactivateS3Request;
    message.s3Id = object.s3Id ?? "";
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeactivateS3Request.$type, DeactivateS3Request);

/** A set of methods for managing S3 configurations. */
export const S3ServiceService = {
  /** Activates shared s3 for project */
  activate: {
    path: "/yandex.cloud.datasphere.v2.S3Service/Activate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ActivateS3Request) =>
      Buffer.from(ActivateS3Request.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ActivateS3Request.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deactivates shared s3 for project */
  deactivate: {
    path: "/yandex.cloud.datasphere.v2.S3Service/Deactivate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeactivateS3Request) =>
      Buffer.from(DeactivateS3Request.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeactivateS3Request.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface S3ServiceServer extends UntypedServiceImplementation {
  /** Activates shared s3 for project */
  activate: handleUnaryCall<ActivateS3Request, Operation>;
  /** Deactivates shared s3 for project */
  deactivate: handleUnaryCall<DeactivateS3Request, Operation>;
}

export interface S3ServiceClient extends Client {
  /** Activates shared s3 for project */
  activate(
    request: ActivateS3Request,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  activate(
    request: ActivateS3Request,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  activate(
    request: ActivateS3Request,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deactivates shared s3 for project */
  deactivate(
    request: DeactivateS3Request,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deactivate(
    request: DeactivateS3Request,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deactivate(
    request: DeactivateS3Request,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const S3ServiceClient = makeGenericClientConstructor(
  S3ServiceService,
  "yandex.cloud.datasphere.v2.S3Service"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): S3ServiceClient;
  service: typeof S3ServiceService;
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
