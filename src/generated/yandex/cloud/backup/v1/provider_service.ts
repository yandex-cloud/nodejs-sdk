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

export const protobufPackage = "yandex.cloud.backup.v1";

export interface ActivateProviderRequest {
  $type: "yandex.cloud.backup.v1.ActivateProviderRequest";
  /** Activate provider for Folder iD. */
  folderId: string;
  /**
   * Activate specific provider by name.
   *
   * For more information, please see [activate-provider](/docs/backup/quickstart#activate-provider)
   */
  name: string;
}

export interface ActivateProviderMetadata {
  $type: "yandex.cloud.backup.v1.ActivateProviderMetadata";
  /** Activate provider for folder specified by ID. */
  folderId: string;
}

export interface ListActivatedProvidersRequest {
  $type: "yandex.cloud.backup.v1.ListActivatedProvidersRequest";
  /** ID of the folder to find out the backup provider. */
  folderId: string;
}

export interface ListActivatedProvidersResponse {
  $type: "yandex.cloud.backup.v1.ListActivatedProvidersResponse";
  /** Folder ID. */
  folderId: string;
  /** Name of the backup provider. */
  names: string[];
}

const baseActivateProviderRequest: object = {
  $type: "yandex.cloud.backup.v1.ActivateProviderRequest",
  folderId: "",
  name: "",
};

export const ActivateProviderRequest = {
  $type: "yandex.cloud.backup.v1.ActivateProviderRequest" as const,

  encode(
    message: ActivateProviderRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ActivateProviderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseActivateProviderRequest,
    } as ActivateProviderRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActivateProviderRequest {
    const message = {
      ...baseActivateProviderRequest,
    } as ActivateProviderRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: ActivateProviderRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActivateProviderRequest>, I>>(
    object: I
  ): ActivateProviderRequest {
    const message = {
      ...baseActivateProviderRequest,
    } as ActivateProviderRequest;
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(ActivateProviderRequest.$type, ActivateProviderRequest);

const baseActivateProviderMetadata: object = {
  $type: "yandex.cloud.backup.v1.ActivateProviderMetadata",
  folderId: "",
};

export const ActivateProviderMetadata = {
  $type: "yandex.cloud.backup.v1.ActivateProviderMetadata" as const,

  encode(
    message: ActivateProviderMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ActivateProviderMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseActivateProviderMetadata,
    } as ActivateProviderMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActivateProviderMetadata {
    const message = {
      ...baseActivateProviderMetadata,
    } as ActivateProviderMetadata;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    return message;
  },

  toJSON(message: ActivateProviderMetadata): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActivateProviderMetadata>, I>>(
    object: I
  ): ActivateProviderMetadata {
    const message = {
      ...baseActivateProviderMetadata,
    } as ActivateProviderMetadata;
    message.folderId = object.folderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ActivateProviderMetadata.$type,
  ActivateProviderMetadata
);

const baseListActivatedProvidersRequest: object = {
  $type: "yandex.cloud.backup.v1.ListActivatedProvidersRequest",
  folderId: "",
};

export const ListActivatedProvidersRequest = {
  $type: "yandex.cloud.backup.v1.ListActivatedProvidersRequest" as const,

  encode(
    message: ListActivatedProvidersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListActivatedProvidersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListActivatedProvidersRequest,
    } as ListActivatedProvidersRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListActivatedProvidersRequest {
    const message = {
      ...baseListActivatedProvidersRequest,
    } as ListActivatedProvidersRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    return message;
  },

  toJSON(message: ListActivatedProvidersRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListActivatedProvidersRequest>, I>>(
    object: I
  ): ListActivatedProvidersRequest {
    const message = {
      ...baseListActivatedProvidersRequest,
    } as ListActivatedProvidersRequest;
    message.folderId = object.folderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListActivatedProvidersRequest.$type,
  ListActivatedProvidersRequest
);

const baseListActivatedProvidersResponse: object = {
  $type: "yandex.cloud.backup.v1.ListActivatedProvidersResponse",
  folderId: "",
  names: "",
};

export const ListActivatedProvidersResponse = {
  $type: "yandex.cloud.backup.v1.ListActivatedProvidersResponse" as const,

  encode(
    message: ListActivatedProvidersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    for (const v of message.names) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListActivatedProvidersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListActivatedProvidersResponse,
    } as ListActivatedProvidersResponse;
    message.names = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 3:
          message.names.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListActivatedProvidersResponse {
    const message = {
      ...baseListActivatedProvidersResponse,
    } as ListActivatedProvidersResponse;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.names = (object.names ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: ListActivatedProvidersResponse): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    if (message.names) {
      obj.names = message.names.map((e) => e);
    } else {
      obj.names = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListActivatedProvidersResponse>, I>>(
    object: I
  ): ListActivatedProvidersResponse {
    const message = {
      ...baseListActivatedProvidersResponse,
    } as ListActivatedProvidersResponse;
    message.folderId = object.folderId ?? "";
    message.names = object.names?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  ListActivatedProvidersResponse.$type,
  ListActivatedProvidersResponse
);

/** A set of methods for managing [backup providers](/docs/backup/concepts/#providers). */
export const ProviderServiceService = {
  /** Activate provider for specified client. */
  activate: {
    path: "/yandex.cloud.backup.v1.ProviderService/Activate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ActivateProviderRequest) =>
      Buffer.from(ActivateProviderRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ActivateProviderRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** List activated providers for specified client. */
  listActivated: {
    path: "/yandex.cloud.backup.v1.ProviderService/ListActivated",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListActivatedProvidersRequest) =>
      Buffer.from(ListActivatedProvidersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListActivatedProvidersRequest.decode(value),
    responseSerialize: (value: ListActivatedProvidersResponse) =>
      Buffer.from(ListActivatedProvidersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListActivatedProvidersResponse.decode(value),
  },
} as const;

export interface ProviderServiceServer extends UntypedServiceImplementation {
  /** Activate provider for specified client. */
  activate: handleUnaryCall<ActivateProviderRequest, Operation>;
  /** List activated providers for specified client. */
  listActivated: handleUnaryCall<
    ListActivatedProvidersRequest,
    ListActivatedProvidersResponse
  >;
}

export interface ProviderServiceClient extends Client {
  /** Activate provider for specified client. */
  activate(
    request: ActivateProviderRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  activate(
    request: ActivateProviderRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  activate(
    request: ActivateProviderRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** List activated providers for specified client. */
  listActivated(
    request: ListActivatedProvidersRequest,
    callback: (
      error: ServiceError | null,
      response: ListActivatedProvidersResponse
    ) => void
  ): ClientUnaryCall;
  listActivated(
    request: ListActivatedProvidersRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListActivatedProvidersResponse
    ) => void
  ): ClientUnaryCall;
  listActivated(
    request: ListActivatedProvidersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListActivatedProvidersResponse
    ) => void
  ): ClientUnaryCall;
}

export const ProviderServiceClient = makeGenericClientConstructor(
  ProviderServiceService,
  "yandex.cloud.backup.v1.ProviderService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): ProviderServiceClient;
  service: typeof ProviderServiceService;
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
