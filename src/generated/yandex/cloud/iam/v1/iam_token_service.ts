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
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.iam.v1";

export interface CreateIamTokenRequest {
  $type: "yandex.cloud.iam.v1.CreateIamTokenRequest";
  /**
   * OAuth token for a Yandex account.
   * For more information, see [OAuth token](/docs/iam/concepts/authorization/oauth-token).
   */
  yandexPassportOauthToken: string | undefined;
  /**
   * JSON Web Token (JWT) for a service account.
   * For more information, see [Get IAM token for a service account](/docs/iam/operations/iam-token/create-for-sa).
   */
  jwt: string | undefined;
}

export interface CreateIamTokenResponse {
  $type: "yandex.cloud.iam.v1.CreateIamTokenResponse";
  /**
   * IAM token for the specified identity.
   *
   * You should pass the token in the `Authorization` header for any further API requests.
   * For example, `Authorization: Bearer [iam_token]`.
   */
  iamToken: string;
  /** IAM token expiration time. */
  expiresAt?: Date;
}

export interface CreateIamTokenForServiceAccountRequest {
  $type: "yandex.cloud.iam.v1.CreateIamTokenForServiceAccountRequest";
  serviceAccountId: string;
}

export interface RevokeIamTokenRequest {
  $type: "yandex.cloud.iam.v1.RevokeIamTokenRequest";
  iamToken: string;
}

export interface RevokeIamTokenResponse {
  $type: "yandex.cloud.iam.v1.RevokeIamTokenResponse";
  subjectId: string;
}

const baseCreateIamTokenRequest: object = {
  $type: "yandex.cloud.iam.v1.CreateIamTokenRequest",
};

export const CreateIamTokenRequest = {
  $type: "yandex.cloud.iam.v1.CreateIamTokenRequest" as const,

  encode(
    message: CreateIamTokenRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.yandexPassportOauthToken !== undefined) {
      writer.uint32(10).string(message.yandexPassportOauthToken);
    }
    if (message.jwt !== undefined) {
      writer.uint32(18).string(message.jwt);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateIamTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateIamTokenRequest } as CreateIamTokenRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yandexPassportOauthToken = reader.string();
          break;
        case 2:
          message.jwt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateIamTokenRequest {
    const message = { ...baseCreateIamTokenRequest } as CreateIamTokenRequest;
    message.yandexPassportOauthToken =
      object.yandexPassportOauthToken !== undefined &&
      object.yandexPassportOauthToken !== null
        ? String(object.yandexPassportOauthToken)
        : undefined;
    message.jwt =
      object.jwt !== undefined && object.jwt !== null
        ? String(object.jwt)
        : undefined;
    return message;
  },

  toJSON(message: CreateIamTokenRequest): unknown {
    const obj: any = {};
    message.yandexPassportOauthToken !== undefined &&
      (obj.yandexPassportOauthToken = message.yandexPassportOauthToken);
    message.jwt !== undefined && (obj.jwt = message.jwt);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateIamTokenRequest>, I>>(
    object: I
  ): CreateIamTokenRequest {
    const message = { ...baseCreateIamTokenRequest } as CreateIamTokenRequest;
    message.yandexPassportOauthToken =
      object.yandexPassportOauthToken ?? undefined;
    message.jwt = object.jwt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateIamTokenRequest.$type, CreateIamTokenRequest);

const baseCreateIamTokenResponse: object = {
  $type: "yandex.cloud.iam.v1.CreateIamTokenResponse",
  iamToken: "",
};

export const CreateIamTokenResponse = {
  $type: "yandex.cloud.iam.v1.CreateIamTokenResponse" as const,

  encode(
    message: CreateIamTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.iamToken !== "") {
      writer.uint32(10).string(message.iamToken);
    }
    if (message.expiresAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiresAt),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateIamTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateIamTokenResponse } as CreateIamTokenResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iamToken = reader.string();
          break;
        case 2:
          message.expiresAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateIamTokenResponse {
    const message = { ...baseCreateIamTokenResponse } as CreateIamTokenResponse;
    message.iamToken =
      object.iamToken !== undefined && object.iamToken !== null
        ? String(object.iamToken)
        : "";
    message.expiresAt =
      object.expiresAt !== undefined && object.expiresAt !== null
        ? fromJsonTimestamp(object.expiresAt)
        : undefined;
    return message;
  },

  toJSON(message: CreateIamTokenResponse): unknown {
    const obj: any = {};
    message.iamToken !== undefined && (obj.iamToken = message.iamToken);
    message.expiresAt !== undefined &&
      (obj.expiresAt = message.expiresAt.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateIamTokenResponse>, I>>(
    object: I
  ): CreateIamTokenResponse {
    const message = { ...baseCreateIamTokenResponse } as CreateIamTokenResponse;
    message.iamToken = object.iamToken ?? "";
    message.expiresAt = object.expiresAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateIamTokenResponse.$type, CreateIamTokenResponse);

const baseCreateIamTokenForServiceAccountRequest: object = {
  $type: "yandex.cloud.iam.v1.CreateIamTokenForServiceAccountRequest",
  serviceAccountId: "",
};

export const CreateIamTokenForServiceAccountRequest = {
  $type: "yandex.cloud.iam.v1.CreateIamTokenForServiceAccountRequest" as const,

  encode(
    message: CreateIamTokenForServiceAccountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.serviceAccountId !== "") {
      writer.uint32(10).string(message.serviceAccountId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateIamTokenForServiceAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateIamTokenForServiceAccountRequest,
    } as CreateIamTokenForServiceAccountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceAccountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateIamTokenForServiceAccountRequest {
    const message = {
      ...baseCreateIamTokenForServiceAccountRequest,
    } as CreateIamTokenForServiceAccountRequest;
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    return message;
  },

  toJSON(message: CreateIamTokenForServiceAccountRequest): unknown {
    const obj: any = {};
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateIamTokenForServiceAccountRequest>, I>
  >(object: I): CreateIamTokenForServiceAccountRequest {
    const message = {
      ...baseCreateIamTokenForServiceAccountRequest,
    } as CreateIamTokenForServiceAccountRequest;
    message.serviceAccountId = object.serviceAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateIamTokenForServiceAccountRequest.$type,
  CreateIamTokenForServiceAccountRequest
);

const baseRevokeIamTokenRequest: object = {
  $type: "yandex.cloud.iam.v1.RevokeIamTokenRequest",
  iamToken: "",
};

export const RevokeIamTokenRequest = {
  $type: "yandex.cloud.iam.v1.RevokeIamTokenRequest" as const,

  encode(
    message: RevokeIamTokenRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.iamToken !== "") {
      writer.uint32(10).string(message.iamToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RevokeIamTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRevokeIamTokenRequest } as RevokeIamTokenRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iamToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RevokeIamTokenRequest {
    const message = { ...baseRevokeIamTokenRequest } as RevokeIamTokenRequest;
    message.iamToken =
      object.iamToken !== undefined && object.iamToken !== null
        ? String(object.iamToken)
        : "";
    return message;
  },

  toJSON(message: RevokeIamTokenRequest): unknown {
    const obj: any = {};
    message.iamToken !== undefined && (obj.iamToken = message.iamToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RevokeIamTokenRequest>, I>>(
    object: I
  ): RevokeIamTokenRequest {
    const message = { ...baseRevokeIamTokenRequest } as RevokeIamTokenRequest;
    message.iamToken = object.iamToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(RevokeIamTokenRequest.$type, RevokeIamTokenRequest);

const baseRevokeIamTokenResponse: object = {
  $type: "yandex.cloud.iam.v1.RevokeIamTokenResponse",
  subjectId: "",
};

export const RevokeIamTokenResponse = {
  $type: "yandex.cloud.iam.v1.RevokeIamTokenResponse" as const,

  encode(
    message: RevokeIamTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subjectId !== "") {
      writer.uint32(10).string(message.subjectId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RevokeIamTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRevokeIamTokenResponse } as RevokeIamTokenResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subjectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RevokeIamTokenResponse {
    const message = { ...baseRevokeIamTokenResponse } as RevokeIamTokenResponse;
    message.subjectId =
      object.subjectId !== undefined && object.subjectId !== null
        ? String(object.subjectId)
        : "";
    return message;
  },

  toJSON(message: RevokeIamTokenResponse): unknown {
    const obj: any = {};
    message.subjectId !== undefined && (obj.subjectId = message.subjectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RevokeIamTokenResponse>, I>>(
    object: I
  ): RevokeIamTokenResponse {
    const message = { ...baseRevokeIamTokenResponse } as RevokeIamTokenResponse;
    message.subjectId = object.subjectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(RevokeIamTokenResponse.$type, RevokeIamTokenResponse);

/** A set of methods for managing IAM tokens. */
export const IamTokenServiceService = {
  /** Create an IAM token for the specified identity. */
  create: {
    path: "/yandex.cloud.iam.v1.IamTokenService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateIamTokenRequest) =>
      Buffer.from(CreateIamTokenRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateIamTokenRequest.decode(value),
    responseSerialize: (value: CreateIamTokenResponse) =>
      Buffer.from(CreateIamTokenResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      CreateIamTokenResponse.decode(value),
  },
  /** Create an IAM token for service account. */
  createForServiceAccount: {
    path: "/yandex.cloud.iam.v1.IamTokenService/CreateForServiceAccount",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateIamTokenForServiceAccountRequest) =>
      Buffer.from(
        CreateIamTokenForServiceAccountRequest.encode(value).finish()
      ),
    requestDeserialize: (value: Buffer) =>
      CreateIamTokenForServiceAccountRequest.decode(value),
    responseSerialize: (value: CreateIamTokenResponse) =>
      Buffer.from(CreateIamTokenResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      CreateIamTokenResponse.decode(value),
  },
  /** Revoke the IAM token. */
  revoke: {
    path: "/yandex.cloud.iam.v1.IamTokenService/Revoke",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RevokeIamTokenRequest) =>
      Buffer.from(RevokeIamTokenRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RevokeIamTokenRequest.decode(value),
    responseSerialize: (value: RevokeIamTokenResponse) =>
      Buffer.from(RevokeIamTokenResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      RevokeIamTokenResponse.decode(value),
  },
} as const;

export interface IamTokenServiceServer extends UntypedServiceImplementation {
  /** Create an IAM token for the specified identity. */
  create: handleUnaryCall<CreateIamTokenRequest, CreateIamTokenResponse>;
  /** Create an IAM token for service account. */
  createForServiceAccount: handleUnaryCall<
    CreateIamTokenForServiceAccountRequest,
    CreateIamTokenResponse
  >;
  /** Revoke the IAM token. */
  revoke: handleUnaryCall<RevokeIamTokenRequest, RevokeIamTokenResponse>;
}

export interface IamTokenServiceClient extends Client {
  /** Create an IAM token for the specified identity. */
  create(
    request: CreateIamTokenRequest,
    callback: (
      error: ServiceError | null,
      response: CreateIamTokenResponse
    ) => void
  ): ClientUnaryCall;
  create(
    request: CreateIamTokenRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: CreateIamTokenResponse
    ) => void
  ): ClientUnaryCall;
  create(
    request: CreateIamTokenRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: CreateIamTokenResponse
    ) => void
  ): ClientUnaryCall;
  /** Create an IAM token for service account. */
  createForServiceAccount(
    request: CreateIamTokenForServiceAccountRequest,
    callback: (
      error: ServiceError | null,
      response: CreateIamTokenResponse
    ) => void
  ): ClientUnaryCall;
  createForServiceAccount(
    request: CreateIamTokenForServiceAccountRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: CreateIamTokenResponse
    ) => void
  ): ClientUnaryCall;
  createForServiceAccount(
    request: CreateIamTokenForServiceAccountRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: CreateIamTokenResponse
    ) => void
  ): ClientUnaryCall;
  /** Revoke the IAM token. */
  revoke(
    request: RevokeIamTokenRequest,
    callback: (
      error: ServiceError | null,
      response: RevokeIamTokenResponse
    ) => void
  ): ClientUnaryCall;
  revoke(
    request: RevokeIamTokenRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: RevokeIamTokenResponse
    ) => void
  ): ClientUnaryCall;
  revoke(
    request: RevokeIamTokenRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: RevokeIamTokenResponse
    ) => void
  ): ClientUnaryCall;
}

export const IamTokenServiceClient = makeGenericClientConstructor(
  IamTokenServiceService,
  "yandex.cloud.iam.v1.IamTokenService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): IamTokenServiceClient;
  service: typeof IamTokenServiceService;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
