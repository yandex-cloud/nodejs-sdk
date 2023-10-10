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

export const protobufPackage = "yandex.cloud.kms.v1.asymmetricsignature";

export interface AsymmetricSignRequest {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignRequest";
  /** ID of the asymmetric KMS key to use for signature. */
  keyId: string;
  /**
   * Message to sign.
   * Should be encoded with base64.
   */
  message: Buffer;
}

export interface AsymmetricSignResponse {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignResponse";
  /** ID of the asymmetric KMS key that was used for signature. */
  keyId: string;
  /**
   * Value of signature.
   * Signature value is produced in accordance with RFC 8017 for RSA
   * and is a DER-encoded object as defined by ANSI X9.62-2005 and RFC 3279 Section 2.2.3 for ECDSA.
   */
  signature: Buffer;
}

export interface AsymmetricSignHashRequest {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignHashRequest";
  /** ID of the asymmetric KMS key to use for signature. */
  keyId: string;
  /**
   * Hash value to be signed.
   * Should be encoded with base64.
   */
  hash: Buffer;
}

export interface AsymmetricSignHashResponse {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignHashResponse";
  /** ID of the asymmetric KMS key that was used for signature. */
  keyId: string;
  /**
   * Value of signature.
   * Signature value is produced in accordance with RFC 8017 for RSA
   * and is a DER-encoded object as defined by ANSI X9.62-2005 and RFC 3279 Section 2.2.3 for ECDSA.
   */
  signature: Buffer;
}

export interface AsymmetricGetPublicKeyRequest {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricGetPublicKeyRequest";
  /** ID of the asymmetric KMS key to be used for public key retrieval. */
  keyId: string;
}

export interface AsymmetricGetPublicKeyResponse {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricGetPublicKeyResponse";
  /** ID of the asymmetric KMS key to get public key of. */
  keyId: string;
  /**
   * Public key value.
   * The value is a PEM-encoded X.509 public key, also known as SubjectPublicKeyInfo (SPKI),
   * as defined in RFC 5280.
   */
  publicKey: string;
}

const baseAsymmetricSignRequest: object = {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignRequest",
  keyId: "",
};

export const AsymmetricSignRequest = {
  $type:
    "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignRequest" as const,

  encode(
    message: AsymmetricSignRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.message.length !== 0) {
      writer.uint32(18).bytes(message.message);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AsymmetricSignRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAsymmetricSignRequest } as AsymmetricSignRequest;
    message.message = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;
        case 2:
          message.message = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AsymmetricSignRequest {
    const message = { ...baseAsymmetricSignRequest } as AsymmetricSignRequest;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    message.message =
      object.message !== undefined && object.message !== null
        ? Buffer.from(bytesFromBase64(object.message))
        : Buffer.alloc(0);
    return message;
  },

  toJSON(message: AsymmetricSignRequest): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.message !== undefined &&
      (obj.message = base64FromBytes(
        message.message !== undefined ? message.message : Buffer.alloc(0)
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AsymmetricSignRequest>, I>>(
    object: I
  ): AsymmetricSignRequest {
    const message = { ...baseAsymmetricSignRequest } as AsymmetricSignRequest;
    message.keyId = object.keyId ?? "";
    message.message = object.message ?? Buffer.alloc(0);
    return message;
  },
};

messageTypeRegistry.set(AsymmetricSignRequest.$type, AsymmetricSignRequest);

const baseAsymmetricSignResponse: object = {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignResponse",
  keyId: "",
};

export const AsymmetricSignResponse = {
  $type:
    "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignResponse" as const,

  encode(
    message: AsymmetricSignResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AsymmetricSignResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAsymmetricSignResponse } as AsymmetricSignResponse;
    message.signature = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;
        case 2:
          message.signature = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AsymmetricSignResponse {
    const message = { ...baseAsymmetricSignResponse } as AsymmetricSignResponse;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    message.signature =
      object.signature !== undefined && object.signature !== null
        ? Buffer.from(bytesFromBase64(object.signature))
        : Buffer.alloc(0);
    return message;
  },

  toJSON(message: AsymmetricSignResponse): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : Buffer.alloc(0)
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AsymmetricSignResponse>, I>>(
    object: I
  ): AsymmetricSignResponse {
    const message = { ...baseAsymmetricSignResponse } as AsymmetricSignResponse;
    message.keyId = object.keyId ?? "";
    message.signature = object.signature ?? Buffer.alloc(0);
    return message;
  },
};

messageTypeRegistry.set(AsymmetricSignResponse.$type, AsymmetricSignResponse);

const baseAsymmetricSignHashRequest: object = {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignHashRequest",
  keyId: "",
};

export const AsymmetricSignHashRequest = {
  $type:
    "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignHashRequest" as const,

  encode(
    message: AsymmetricSignHashRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AsymmetricSignHashRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAsymmetricSignHashRequest,
    } as AsymmetricSignHashRequest;
    message.hash = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;
        case 2:
          message.hash = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AsymmetricSignHashRequest {
    const message = {
      ...baseAsymmetricSignHashRequest,
    } as AsymmetricSignHashRequest;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    message.hash =
      object.hash !== undefined && object.hash !== null
        ? Buffer.from(bytesFromBase64(object.hash))
        : Buffer.alloc(0);
    return message;
  },

  toJSON(message: AsymmetricSignHashRequest): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : Buffer.alloc(0)
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AsymmetricSignHashRequest>, I>>(
    object: I
  ): AsymmetricSignHashRequest {
    const message = {
      ...baseAsymmetricSignHashRequest,
    } as AsymmetricSignHashRequest;
    message.keyId = object.keyId ?? "";
    message.hash = object.hash ?? Buffer.alloc(0);
    return message;
  },
};

messageTypeRegistry.set(
  AsymmetricSignHashRequest.$type,
  AsymmetricSignHashRequest
);

const baseAsymmetricSignHashResponse: object = {
  $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignHashResponse",
  keyId: "",
};

export const AsymmetricSignHashResponse = {
  $type:
    "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignHashResponse" as const,

  encode(
    message: AsymmetricSignHashResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AsymmetricSignHashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAsymmetricSignHashResponse,
    } as AsymmetricSignHashResponse;
    message.signature = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;
        case 2:
          message.signature = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AsymmetricSignHashResponse {
    const message = {
      ...baseAsymmetricSignHashResponse,
    } as AsymmetricSignHashResponse;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    message.signature =
      object.signature !== undefined && object.signature !== null
        ? Buffer.from(bytesFromBase64(object.signature))
        : Buffer.alloc(0);
    return message;
  },

  toJSON(message: AsymmetricSignHashResponse): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : Buffer.alloc(0)
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AsymmetricSignHashResponse>, I>>(
    object: I
  ): AsymmetricSignHashResponse {
    const message = {
      ...baseAsymmetricSignHashResponse,
    } as AsymmetricSignHashResponse;
    message.keyId = object.keyId ?? "";
    message.signature = object.signature ?? Buffer.alloc(0);
    return message;
  },
};

messageTypeRegistry.set(
  AsymmetricSignHashResponse.$type,
  AsymmetricSignHashResponse
);

const baseAsymmetricGetPublicKeyRequest: object = {
  $type:
    "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricGetPublicKeyRequest",
  keyId: "",
};

export const AsymmetricGetPublicKeyRequest = {
  $type:
    "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricGetPublicKeyRequest" as const,

  encode(
    message: AsymmetricGetPublicKeyRequest,
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
  ): AsymmetricGetPublicKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAsymmetricGetPublicKeyRequest,
    } as AsymmetricGetPublicKeyRequest;
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

  fromJSON(object: any): AsymmetricGetPublicKeyRequest {
    const message = {
      ...baseAsymmetricGetPublicKeyRequest,
    } as AsymmetricGetPublicKeyRequest;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    return message;
  },

  toJSON(message: AsymmetricGetPublicKeyRequest): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AsymmetricGetPublicKeyRequest>, I>>(
    object: I
  ): AsymmetricGetPublicKeyRequest {
    const message = {
      ...baseAsymmetricGetPublicKeyRequest,
    } as AsymmetricGetPublicKeyRequest;
    message.keyId = object.keyId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  AsymmetricGetPublicKeyRequest.$type,
  AsymmetricGetPublicKeyRequest
);

const baseAsymmetricGetPublicKeyResponse: object = {
  $type:
    "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricGetPublicKeyResponse",
  keyId: "",
  publicKey: "",
};

export const AsymmetricGetPublicKeyResponse = {
  $type:
    "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricGetPublicKeyResponse" as const,

  encode(
    message: AsymmetricGetPublicKeyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.publicKey !== "") {
      writer.uint32(18).string(message.publicKey);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AsymmetricGetPublicKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAsymmetricGetPublicKeyResponse,
    } as AsymmetricGetPublicKeyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;
        case 2:
          message.publicKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AsymmetricGetPublicKeyResponse {
    const message = {
      ...baseAsymmetricGetPublicKeyResponse,
    } as AsymmetricGetPublicKeyResponse;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    message.publicKey =
      object.publicKey !== undefined && object.publicKey !== null
        ? String(object.publicKey)
        : "";
    return message;
  },

  toJSON(message: AsymmetricGetPublicKeyResponse): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.publicKey !== undefined && (obj.publicKey = message.publicKey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AsymmetricGetPublicKeyResponse>, I>>(
    object: I
  ): AsymmetricGetPublicKeyResponse {
    const message = {
      ...baseAsymmetricGetPublicKeyResponse,
    } as AsymmetricGetPublicKeyResponse;
    message.keyId = object.keyId ?? "";
    message.publicKey = object.publicKey ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  AsymmetricGetPublicKeyResponse.$type,
  AsymmetricGetPublicKeyResponse
);

/** Set of methods that perform asymmetric signature. */
export const AsymmetricSignatureCryptoServiceService = {
  /** Signs data specified KMS key. */
  sign: {
    path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureCryptoService/Sign",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AsymmetricSignRequest) =>
      Buffer.from(AsymmetricSignRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AsymmetricSignRequest.decode(value),
    responseSerialize: (value: AsymmetricSignResponse) =>
      Buffer.from(AsymmetricSignResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      AsymmetricSignResponse.decode(value),
  },
  /** Signs hash value specified KMS key. */
  signHash: {
    path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureCryptoService/SignHash",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AsymmetricSignHashRequest) =>
      Buffer.from(AsymmetricSignHashRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      AsymmetricSignHashRequest.decode(value),
    responseSerialize: (value: AsymmetricSignHashResponse) =>
      Buffer.from(AsymmetricSignHashResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      AsymmetricSignHashResponse.decode(value),
  },
  /** Gets value of public key. */
  getPublicKey: {
    path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureCryptoService/GetPublicKey",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AsymmetricGetPublicKeyRequest) =>
      Buffer.from(AsymmetricGetPublicKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      AsymmetricGetPublicKeyRequest.decode(value),
    responseSerialize: (value: AsymmetricGetPublicKeyResponse) =>
      Buffer.from(AsymmetricGetPublicKeyResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      AsymmetricGetPublicKeyResponse.decode(value),
  },
} as const;

export interface AsymmetricSignatureCryptoServiceServer
  extends UntypedServiceImplementation {
  /** Signs data specified KMS key. */
  sign: handleUnaryCall<AsymmetricSignRequest, AsymmetricSignResponse>;
  /** Signs hash value specified KMS key. */
  signHash: handleUnaryCall<
    AsymmetricSignHashRequest,
    AsymmetricSignHashResponse
  >;
  /** Gets value of public key. */
  getPublicKey: handleUnaryCall<
    AsymmetricGetPublicKeyRequest,
    AsymmetricGetPublicKeyResponse
  >;
}

export interface AsymmetricSignatureCryptoServiceClient extends Client {
  /** Signs data specified KMS key. */
  sign(
    request: AsymmetricSignRequest,
    callback: (
      error: ServiceError | null,
      response: AsymmetricSignResponse
    ) => void
  ): ClientUnaryCall;
  sign(
    request: AsymmetricSignRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: AsymmetricSignResponse
    ) => void
  ): ClientUnaryCall;
  sign(
    request: AsymmetricSignRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: AsymmetricSignResponse
    ) => void
  ): ClientUnaryCall;
  /** Signs hash value specified KMS key. */
  signHash(
    request: AsymmetricSignHashRequest,
    callback: (
      error: ServiceError | null,
      response: AsymmetricSignHashResponse
    ) => void
  ): ClientUnaryCall;
  signHash(
    request: AsymmetricSignHashRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: AsymmetricSignHashResponse
    ) => void
  ): ClientUnaryCall;
  signHash(
    request: AsymmetricSignHashRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: AsymmetricSignHashResponse
    ) => void
  ): ClientUnaryCall;
  /** Gets value of public key. */
  getPublicKey(
    request: AsymmetricGetPublicKeyRequest,
    callback: (
      error: ServiceError | null,
      response: AsymmetricGetPublicKeyResponse
    ) => void
  ): ClientUnaryCall;
  getPublicKey(
    request: AsymmetricGetPublicKeyRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: AsymmetricGetPublicKeyResponse
    ) => void
  ): ClientUnaryCall;
  getPublicKey(
    request: AsymmetricGetPublicKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: AsymmetricGetPublicKeyResponse
    ) => void
  ): ClientUnaryCall;
}

export const AsymmetricSignatureCryptoServiceClient =
  makeGenericClientConstructor(
    AsymmetricSignatureCryptoServiceService,
    "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureCryptoService"
  ) as unknown as {
    new (
      address: string,
      credentials: ChannelCredentials,
      options?: Partial<ChannelOptions>
    ): AsymmetricSignatureCryptoServiceClient;
    service: typeof AsymmetricSignatureCryptoServiceService;
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
