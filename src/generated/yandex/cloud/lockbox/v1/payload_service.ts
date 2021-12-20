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
import { Payload } from "../../../../yandex/cloud/lockbox/v1/payload";

export const protobufPackage = "yandex.cloud.lockbox.v1";

export interface GetPayloadRequest {
  $type: "yandex.cloud.lockbox.v1.GetPayloadRequest";
  /** ID of the secret. */
  secretId: string;
  /** Optional ID of the version. */
  versionId: string;
}

const baseGetPayloadRequest: object = {
  $type: "yandex.cloud.lockbox.v1.GetPayloadRequest",
  secretId: "",
  versionId: "",
};

export const GetPayloadRequest = {
  $type: "yandex.cloud.lockbox.v1.GetPayloadRequest" as const,

  encode(
    message: GetPayloadRequest,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPayloadRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetPayloadRequest } as GetPayloadRequest;
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

  fromJSON(object: any): GetPayloadRequest {
    const message = { ...baseGetPayloadRequest } as GetPayloadRequest;
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

  toJSON(message: GetPayloadRequest): unknown {
    const obj: any = {};
    message.secretId !== undefined && (obj.secretId = message.secretId);
    message.versionId !== undefined && (obj.versionId = message.versionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPayloadRequest>, I>>(
    object: I
  ): GetPayloadRequest {
    const message = { ...baseGetPayloadRequest } as GetPayloadRequest;
    message.secretId = object.secretId ?? "";
    message.versionId = object.versionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetPayloadRequest.$type, GetPayloadRequest);

/** Set of methods to access payload of secrets. */
export const PayloadServiceService = {
  /**
   * Returns the payload of the specified secret.
   *
   * To get the list of all available secrets, make a [SecretService.List] request.
   */
  get: {
    path: "/yandex.cloud.lockbox.v1.PayloadService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetPayloadRequest) =>
      Buffer.from(GetPayloadRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetPayloadRequest.decode(value),
    responseSerialize: (value: Payload) =>
      Buffer.from(Payload.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Payload.decode(value),
  },
} as const;

export interface PayloadServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the payload of the specified secret.
   *
   * To get the list of all available secrets, make a [SecretService.List] request.
   */
  get: handleUnaryCall<GetPayloadRequest, Payload>;
}

export interface PayloadServiceClient extends Client {
  /**
   * Returns the payload of the specified secret.
   *
   * To get the list of all available secrets, make a [SecretService.List] request.
   */
  get(
    request: GetPayloadRequest,
    callback: (error: ServiceError | null, response: Payload) => void
  ): ClientUnaryCall;
  get(
    request: GetPayloadRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Payload) => void
  ): ClientUnaryCall;
  get(
    request: GetPayloadRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Payload) => void
  ): ClientUnaryCall;
}

export const PayloadServiceClient = makeGenericClientConstructor(
  PayloadServiceService,
  "yandex.cloud.lockbox.v1.PayloadService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): PayloadServiceClient;
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
