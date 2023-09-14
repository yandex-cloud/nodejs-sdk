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

export const protobufPackage = "yandex.cloud.kms.v1.asymmetricencryption";

export interface AsymmetricDecryptRequest {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricDecryptRequest";
  /** ID of the asymmetric KMS key to use for decryption. */
  keyId: string;
  /**
   * Ciphertext to be decrypted.
   * Should be encoded with base64.
   */
  ciphertext: Buffer;
}

export interface AsymmetricDecryptResponse {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricDecryptResponse";
  /** ID of the asymmetric KMS key that was used for decryption. */
  keyId: string;
  /** Decrypted plaintext. */
  plaintext: Buffer;
}

export interface AsymmetricGetPublicKeyRequest {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricGetPublicKeyRequest";
  /** ID of the asymmetric KMS key to be used for public key retrieval. */
  keyId: string;
}

export interface AsymmetricGetPublicKeyResponse {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricGetPublicKeyResponse";
  /** ID of the asymmetric KMS key to get public key of. */
  keyId: string;
  /**
   * Public key value.
   * The value is a PEM-encoded X.509 public key, also known as SubjectPublicKeyInfo (SPKI),
   * as defined in RFC 5280.
   */
  publicKey: string;
}

const baseAsymmetricDecryptRequest: object = {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricDecryptRequest",
  keyId: "",
};

export const AsymmetricDecryptRequest = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricDecryptRequest" as const,

  encode(
    message: AsymmetricDecryptRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.ciphertext.length !== 0) {
      writer.uint32(18).bytes(message.ciphertext);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AsymmetricDecryptRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAsymmetricDecryptRequest,
    } as AsymmetricDecryptRequest;
    message.ciphertext = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;
        case 2:
          message.ciphertext = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AsymmetricDecryptRequest {
    const message = {
      ...baseAsymmetricDecryptRequest,
    } as AsymmetricDecryptRequest;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    message.ciphertext =
      object.ciphertext !== undefined && object.ciphertext !== null
        ? Buffer.from(bytesFromBase64(object.ciphertext))
        : Buffer.alloc(0);
    return message;
  },

  toJSON(message: AsymmetricDecryptRequest): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.ciphertext !== undefined &&
      (obj.ciphertext = base64FromBytes(
        message.ciphertext !== undefined ? message.ciphertext : Buffer.alloc(0)
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AsymmetricDecryptRequest>, I>>(
    object: I
  ): AsymmetricDecryptRequest {
    const message = {
      ...baseAsymmetricDecryptRequest,
    } as AsymmetricDecryptRequest;
    message.keyId = object.keyId ?? "";
    message.ciphertext = object.ciphertext ?? Buffer.alloc(0);
    return message;
  },
};

messageTypeRegistry.set(
  AsymmetricDecryptRequest.$type,
  AsymmetricDecryptRequest
);

const baseAsymmetricDecryptResponse: object = {
  $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricDecryptResponse",
  keyId: "",
};

export const AsymmetricDecryptResponse = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricDecryptResponse" as const,

  encode(
    message: AsymmetricDecryptResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    if (message.plaintext.length !== 0) {
      writer.uint32(18).bytes(message.plaintext);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AsymmetricDecryptResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAsymmetricDecryptResponse,
    } as AsymmetricDecryptResponse;
    message.plaintext = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;
        case 2:
          message.plaintext = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AsymmetricDecryptResponse {
    const message = {
      ...baseAsymmetricDecryptResponse,
    } as AsymmetricDecryptResponse;
    message.keyId =
      object.keyId !== undefined && object.keyId !== null
        ? String(object.keyId)
        : "";
    message.plaintext =
      object.plaintext !== undefined && object.plaintext !== null
        ? Buffer.from(bytesFromBase64(object.plaintext))
        : Buffer.alloc(0);
    return message;
  },

  toJSON(message: AsymmetricDecryptResponse): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.plaintext !== undefined &&
      (obj.plaintext = base64FromBytes(
        message.plaintext !== undefined ? message.plaintext : Buffer.alloc(0)
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AsymmetricDecryptResponse>, I>>(
    object: I
  ): AsymmetricDecryptResponse {
    const message = {
      ...baseAsymmetricDecryptResponse,
    } as AsymmetricDecryptResponse;
    message.keyId = object.keyId ?? "";
    message.plaintext = object.plaintext ?? Buffer.alloc(0);
    return message;
  },
};

messageTypeRegistry.set(
  AsymmetricDecryptResponse.$type,
  AsymmetricDecryptResponse
);

const baseAsymmetricGetPublicKeyRequest: object = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricGetPublicKeyRequest",
  keyId: "",
};

export const AsymmetricGetPublicKeyRequest = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricGetPublicKeyRequest" as const,

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
    "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricGetPublicKeyResponse",
  keyId: "",
  publicKey: "",
};

export const AsymmetricGetPublicKeyResponse = {
  $type:
    "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricGetPublicKeyResponse" as const,

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

/** Set of methods that perform asymmetric decryption. */
export const AsymmetricEncryptionCryptoServiceService = {
  /** Decrypts the given ciphertext with the specified key. */
  decrypt: {
    path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionCryptoService/Decrypt",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AsymmetricDecryptRequest) =>
      Buffer.from(AsymmetricDecryptRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      AsymmetricDecryptRequest.decode(value),
    responseSerialize: (value: AsymmetricDecryptResponse) =>
      Buffer.from(AsymmetricDecryptResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      AsymmetricDecryptResponse.decode(value),
  },
  /** Gets value of public key. */
  getPublicKey: {
    path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionCryptoService/GetPublicKey",
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

export interface AsymmetricEncryptionCryptoServiceServer
  extends UntypedServiceImplementation {
  /** Decrypts the given ciphertext with the specified key. */
  decrypt: handleUnaryCall<AsymmetricDecryptRequest, AsymmetricDecryptResponse>;
  /** Gets value of public key. */
  getPublicKey: handleUnaryCall<
    AsymmetricGetPublicKeyRequest,
    AsymmetricGetPublicKeyResponse
  >;
}

export interface AsymmetricEncryptionCryptoServiceClient extends Client {
  /** Decrypts the given ciphertext with the specified key. */
  decrypt(
    request: AsymmetricDecryptRequest,
    callback: (
      error: ServiceError | null,
      response: AsymmetricDecryptResponse
    ) => void
  ): ClientUnaryCall;
  decrypt(
    request: AsymmetricDecryptRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: AsymmetricDecryptResponse
    ) => void
  ): ClientUnaryCall;
  decrypt(
    request: AsymmetricDecryptRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: AsymmetricDecryptResponse
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

export const AsymmetricEncryptionCryptoServiceClient =
  makeGenericClientConstructor(
    AsymmetricEncryptionCryptoServiceService,
    "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionCryptoService"
  ) as unknown as {
    new (
      address: string,
      credentials: ChannelCredentials,
      options?: Partial<ChannelOptions>
    ): AsymmetricEncryptionCryptoServiceClient;
    service: typeof AsymmetricEncryptionCryptoServiceService;
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
