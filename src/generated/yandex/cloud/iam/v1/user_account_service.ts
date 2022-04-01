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
import { UserAccount } from "../../../../yandex/cloud/iam/v1/user_account";

export const protobufPackage = "yandex.cloud.iam.v1";

export interface GetUserAccountRequest {
  $type: "yandex.cloud.iam.v1.GetUserAccountRequest";
  /** ID of the UserAccount resource to return. */
  userAccountId: string;
}

const baseGetUserAccountRequest: object = {
  $type: "yandex.cloud.iam.v1.GetUserAccountRequest",
  userAccountId: "",
};

export const GetUserAccountRequest = {
  $type: "yandex.cloud.iam.v1.GetUserAccountRequest" as const,

  encode(
    message: GetUserAccountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userAccountId !== "") {
      writer.uint32(10).string(message.userAccountId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetUserAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetUserAccountRequest } as GetUserAccountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userAccountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUserAccountRequest {
    const message = { ...baseGetUserAccountRequest } as GetUserAccountRequest;
    message.userAccountId =
      object.userAccountId !== undefined && object.userAccountId !== null
        ? String(object.userAccountId)
        : "";
    return message;
  },

  toJSON(message: GetUserAccountRequest): unknown {
    const obj: any = {};
    message.userAccountId !== undefined &&
      (obj.userAccountId = message.userAccountId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetUserAccountRequest>, I>>(
    object: I
  ): GetUserAccountRequest {
    const message = { ...baseGetUserAccountRequest } as GetUserAccountRequest;
    message.userAccountId = object.userAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetUserAccountRequest.$type, GetUserAccountRequest);

/** A set of methods for managing user accounts. Currently applicable only for [Yandex accounts](/docs/iam/concepts/#passport). */
export const UserAccountServiceService = {
  /** Returns the specified UserAccount resource. */
  get: {
    path: "/yandex.cloud.iam.v1.UserAccountService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetUserAccountRequest) =>
      Buffer.from(GetUserAccountRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetUserAccountRequest.decode(value),
    responseSerialize: (value: UserAccount) =>
      Buffer.from(UserAccount.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UserAccount.decode(value),
  },
} as const;

export interface UserAccountServiceServer extends UntypedServiceImplementation {
  /** Returns the specified UserAccount resource. */
  get: handleUnaryCall<GetUserAccountRequest, UserAccount>;
}

export interface UserAccountServiceClient extends Client {
  /** Returns the specified UserAccount resource. */
  get(
    request: GetUserAccountRequest,
    callback: (error: ServiceError | null, response: UserAccount) => void
  ): ClientUnaryCall;
  get(
    request: GetUserAccountRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UserAccount) => void
  ): ClientUnaryCall;
  get(
    request: GetUserAccountRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UserAccount) => void
  ): ClientUnaryCall;
}

export const UserAccountServiceClient = makeGenericClientConstructor(
  UserAccountServiceService,
  "yandex.cloud.iam.v1.UserAccountService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): UserAccountServiceClient;
  service: typeof UserAccountServiceService;
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
