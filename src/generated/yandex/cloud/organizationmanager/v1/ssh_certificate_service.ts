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

export const protobufPackage = "yandex.cloud.organizationmanager.v1";

export interface GenerateSshCertificateRequest {
  $type: "yandex.cloud.organizationmanager.v1.GenerateSshCertificateRequest";
  /** the cloud must be attached to an organization */
  cloudId: string | undefined;
  organizationId: string | undefined;
  /** specify subject to generate certificate for default login */
  subjectId: string | undefined;
  /** specify os_login for a specific login */
  osLogin: string | undefined;
  publicKey: string;
}

export interface GenerateSshCertificateResponse {
  $type: "yandex.cloud.organizationmanager.v1.GenerateSshCertificateResponse";
  /** as per specification https://cvsweb.openbsd.org/src/usr.bin/ssh/PROTOCOL.certkeys?annotate=HEAD */
  signedCertificate: string;
}

const baseGenerateSshCertificateRequest: object = {
  $type: "yandex.cloud.organizationmanager.v1.GenerateSshCertificateRequest",
  publicKey: "",
};

export const GenerateSshCertificateRequest = {
  $type:
    "yandex.cloud.organizationmanager.v1.GenerateSshCertificateRequest" as const,

  encode(
    message: GenerateSshCertificateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cloudId !== undefined) {
      writer.uint32(10).string(message.cloudId);
    }
    if (message.organizationId !== undefined) {
      writer.uint32(18).string(message.organizationId);
    }
    if (message.subjectId !== undefined) {
      writer.uint32(26).string(message.subjectId);
    }
    if (message.osLogin !== undefined) {
      writer.uint32(34).string(message.osLogin);
    }
    if (message.publicKey !== "") {
      writer.uint32(42).string(message.publicKey);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GenerateSshCertificateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGenerateSshCertificateRequest,
    } as GenerateSshCertificateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cloudId = reader.string();
          break;
        case 2:
          message.organizationId = reader.string();
          break;
        case 3:
          message.subjectId = reader.string();
          break;
        case 4:
          message.osLogin = reader.string();
          break;
        case 5:
          message.publicKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenerateSshCertificateRequest {
    const message = {
      ...baseGenerateSshCertificateRequest,
    } as GenerateSshCertificateRequest;
    message.cloudId =
      object.cloudId !== undefined && object.cloudId !== null
        ? String(object.cloudId)
        : undefined;
    message.organizationId =
      object.organizationId !== undefined && object.organizationId !== null
        ? String(object.organizationId)
        : undefined;
    message.subjectId =
      object.subjectId !== undefined && object.subjectId !== null
        ? String(object.subjectId)
        : undefined;
    message.osLogin =
      object.osLogin !== undefined && object.osLogin !== null
        ? String(object.osLogin)
        : undefined;
    message.publicKey =
      object.publicKey !== undefined && object.publicKey !== null
        ? String(object.publicKey)
        : "";
    return message;
  },

  toJSON(message: GenerateSshCertificateRequest): unknown {
    const obj: any = {};
    message.cloudId !== undefined && (obj.cloudId = message.cloudId);
    message.organizationId !== undefined &&
      (obj.organizationId = message.organizationId);
    message.subjectId !== undefined && (obj.subjectId = message.subjectId);
    message.osLogin !== undefined && (obj.osLogin = message.osLogin);
    message.publicKey !== undefined && (obj.publicKey = message.publicKey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenerateSshCertificateRequest>, I>>(
    object: I
  ): GenerateSshCertificateRequest {
    const message = {
      ...baseGenerateSshCertificateRequest,
    } as GenerateSshCertificateRequest;
    message.cloudId = object.cloudId ?? undefined;
    message.organizationId = object.organizationId ?? undefined;
    message.subjectId = object.subjectId ?? undefined;
    message.osLogin = object.osLogin ?? undefined;
    message.publicKey = object.publicKey ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  GenerateSshCertificateRequest.$type,
  GenerateSshCertificateRequest
);

const baseGenerateSshCertificateResponse: object = {
  $type: "yandex.cloud.organizationmanager.v1.GenerateSshCertificateResponse",
  signedCertificate: "",
};

export const GenerateSshCertificateResponse = {
  $type:
    "yandex.cloud.organizationmanager.v1.GenerateSshCertificateResponse" as const,

  encode(
    message: GenerateSshCertificateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.signedCertificate !== "") {
      writer.uint32(10).string(message.signedCertificate);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GenerateSshCertificateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGenerateSshCertificateResponse,
    } as GenerateSshCertificateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signedCertificate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenerateSshCertificateResponse {
    const message = {
      ...baseGenerateSshCertificateResponse,
    } as GenerateSshCertificateResponse;
    message.signedCertificate =
      object.signedCertificate !== undefined &&
      object.signedCertificate !== null
        ? String(object.signedCertificate)
        : "";
    return message;
  },

  toJSON(message: GenerateSshCertificateResponse): unknown {
    const obj: any = {};
    message.signedCertificate !== undefined &&
      (obj.signedCertificate = message.signedCertificate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenerateSshCertificateResponse>, I>>(
    object: I
  ): GenerateSshCertificateResponse {
    const message = {
      ...baseGenerateSshCertificateResponse,
    } as GenerateSshCertificateResponse;
    message.signedCertificate = object.signedCertificate ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  GenerateSshCertificateResponse.$type,
  GenerateSshCertificateResponse
);

export const SshCertificateServiceService = {
  /**
   * Members of an organization can generate certificates for themselves
   * Signing certificates for other users requires a special permission
   */
  generate: {
    path: "/yandex.cloud.organizationmanager.v1.SshCertificateService/Generate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GenerateSshCertificateRequest) =>
      Buffer.from(GenerateSshCertificateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GenerateSshCertificateRequest.decode(value),
    responseSerialize: (value: GenerateSshCertificateResponse) =>
      Buffer.from(GenerateSshCertificateResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GenerateSshCertificateResponse.decode(value),
  },
} as const;

export interface SshCertificateServiceServer
  extends UntypedServiceImplementation {
  /**
   * Members of an organization can generate certificates for themselves
   * Signing certificates for other users requires a special permission
   */
  generate: handleUnaryCall<
    GenerateSshCertificateRequest,
    GenerateSshCertificateResponse
  >;
}

export interface SshCertificateServiceClient extends Client {
  /**
   * Members of an organization can generate certificates for themselves
   * Signing certificates for other users requires a special permission
   */
  generate(
    request: GenerateSshCertificateRequest,
    callback: (
      error: ServiceError | null,
      response: GenerateSshCertificateResponse
    ) => void
  ): ClientUnaryCall;
  generate(
    request: GenerateSshCertificateRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GenerateSshCertificateResponse
    ) => void
  ): ClientUnaryCall;
  generate(
    request: GenerateSshCertificateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GenerateSshCertificateResponse
    ) => void
  ): ClientUnaryCall;
}

export const SshCertificateServiceClient = makeGenericClientConstructor(
  SshCertificateServiceService,
  "yandex.cloud.organizationmanager.v1.SshCertificateService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): SshCertificateServiceClient;
  service: typeof SshCertificateServiceService;
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
