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
import { AuthProvider } from "../../../../../yandex/cloud/mdb/elasticsearch/v1/auth";
import { Operation } from "../../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.mdb.elasticsearch.v1";

export interface ListAuthProvidersRequest {
  $type: "yandex.cloud.mdb.elasticsearch.v1.ListAuthProvidersRequest";
  /** Required. ID of the ElasticSearch cluster. */
  clusterId: string;
}

export interface ListAuthProvidersResponse {
  $type: "yandex.cloud.mdb.elasticsearch.v1.ListAuthProvidersResponse";
  /** List of auth providers of the Elasticsearch cluster. */
  providers: AuthProvider[];
}

export interface GetAuthProviderRequest {
  $type: "yandex.cloud.mdb.elasticsearch.v1.GetAuthProviderRequest";
  /** Required. ID of the ElasticSearch cluster. */
  clusterId: string;
  /** Required. Name of the provider to delete. */
  name: string;
}

export interface AddAuthProvidersRequest {
  $type: "yandex.cloud.mdb.elasticsearch.v1.AddAuthProvidersRequest";
  /** Required. ID of the ElasticSearch cluster. */
  clusterId: string;
  /** Required. List of providers to add. */
  providers: AuthProvider[];
}

export interface UpdateAuthProvidersRequest {
  $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProvidersRequest";
  /** Required. ID of the ElasticSearch cluster. */
  clusterId: string;
  /** Required. List of providers to set. */
  providers: AuthProvider[];
}

export interface DeleteAuthProvidersRequest {
  $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProvidersRequest";
  /** Required. ID of the ElasticSearch cluster. */
  clusterId: string;
  /** Required. List of providers to delete. */
  providerNames: string[];
}

export interface UpdateAuthProviderRequest {
  $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProviderRequest";
  /** Required. ID of the ElasticSearch cluster. */
  clusterId: string;
  /** Required. Name of the provider to update. */
  name: string;
  /** Required. New provider defenition. */
  provider?: AuthProvider;
}

export interface DeleteAuthProviderRequest {
  $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProviderRequest";
  /** Required. ID of the ElasticSearch cluster. */
  clusterId: string;
  /** Required. Name of the provider to delete. */
  name: string;
}

export interface AddAuthProvidersMetadata {
  $type: "yandex.cloud.mdb.elasticsearch.v1.AddAuthProvidersMetadata";
  /** ID of the ElasticSearch cluster. */
  clusterId: string;
  /** Names of the providers being added. */
  names: string[];
}

export interface UpdateAuthProvidersMetadata {
  $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProvidersMetadata";
  /** ID of the ElasticSearch cluster. */
  clusterId: string;
  /** Names of the providers being added. */
  names: string[];
}

export interface DeleteAuthProvidersMetadata {
  $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProvidersMetadata";
  /** ID of the ElasticSearch cluster. */
  clusterId: string;
  /** Names of the providers being removed. */
  names: string[];
}

const baseListAuthProvidersRequest: object = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.ListAuthProvidersRequest",
  clusterId: "",
};

export const ListAuthProvidersRequest = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.ListAuthProvidersRequest" as const,

  encode(
    message: ListAuthProvidersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListAuthProvidersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListAuthProvidersRequest,
    } as ListAuthProvidersRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListAuthProvidersRequest {
    const message = {
      ...baseListAuthProvidersRequest,
    } as ListAuthProvidersRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    return message;
  },

  toJSON(message: ListAuthProvidersRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListAuthProvidersRequest>, I>>(
    object: I
  ): ListAuthProvidersRequest {
    const message = {
      ...baseListAuthProvidersRequest,
    } as ListAuthProvidersRequest;
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListAuthProvidersRequest.$type,
  ListAuthProvidersRequest
);

const baseListAuthProvidersResponse: object = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.ListAuthProvidersResponse",
};

export const ListAuthProvidersResponse = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.ListAuthProvidersResponse" as const,

  encode(
    message: ListAuthProvidersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.providers) {
      AuthProvider.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListAuthProvidersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListAuthProvidersResponse,
    } as ListAuthProvidersResponse;
    message.providers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providers.push(AuthProvider.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListAuthProvidersResponse {
    const message = {
      ...baseListAuthProvidersResponse,
    } as ListAuthProvidersResponse;
    message.providers = (object.providers ?? []).map((e: any) =>
      AuthProvider.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ListAuthProvidersResponse): unknown {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map((e) =>
        e ? AuthProvider.toJSON(e) : undefined
      );
    } else {
      obj.providers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListAuthProvidersResponse>, I>>(
    object: I
  ): ListAuthProvidersResponse {
    const message = {
      ...baseListAuthProvidersResponse,
    } as ListAuthProvidersResponse;
    message.providers =
      object.providers?.map((e) => AuthProvider.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  ListAuthProvidersResponse.$type,
  ListAuthProvidersResponse
);

const baseGetAuthProviderRequest: object = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.GetAuthProviderRequest",
  clusterId: "",
  name: "",
};

export const GetAuthProviderRequest = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.GetAuthProviderRequest" as const,

  encode(
    message: GetAuthProviderRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetAuthProviderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetAuthProviderRequest } as GetAuthProviderRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAuthProviderRequest {
    const message = { ...baseGetAuthProviderRequest } as GetAuthProviderRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: GetAuthProviderRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetAuthProviderRequest>, I>>(
    object: I
  ): GetAuthProviderRequest {
    const message = { ...baseGetAuthProviderRequest } as GetAuthProviderRequest;
    message.clusterId = object.clusterId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetAuthProviderRequest.$type, GetAuthProviderRequest);

const baseAddAuthProvidersRequest: object = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.AddAuthProvidersRequest",
  clusterId: "",
};

export const AddAuthProvidersRequest = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.AddAuthProvidersRequest" as const,

  encode(
    message: AddAuthProvidersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.providers) {
      AuthProvider.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddAuthProvidersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddAuthProvidersRequest,
    } as AddAuthProvidersRequest;
    message.providers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.providers.push(AuthProvider.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddAuthProvidersRequest {
    const message = {
      ...baseAddAuthProvidersRequest,
    } as AddAuthProvidersRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.providers = (object.providers ?? []).map((e: any) =>
      AuthProvider.fromJSON(e)
    );
    return message;
  },

  toJSON(message: AddAuthProvidersRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    if (message.providers) {
      obj.providers = message.providers.map((e) =>
        e ? AuthProvider.toJSON(e) : undefined
      );
    } else {
      obj.providers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddAuthProvidersRequest>, I>>(
    object: I
  ): AddAuthProvidersRequest {
    const message = {
      ...baseAddAuthProvidersRequest,
    } as AddAuthProvidersRequest;
    message.clusterId = object.clusterId ?? "";
    message.providers =
      object.providers?.map((e) => AuthProvider.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(AddAuthProvidersRequest.$type, AddAuthProvidersRequest);

const baseUpdateAuthProvidersRequest: object = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProvidersRequest",
  clusterId: "",
};

export const UpdateAuthProvidersRequest = {
  $type:
    "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProvidersRequest" as const,

  encode(
    message: UpdateAuthProvidersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.providers) {
      AuthProvider.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateAuthProvidersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateAuthProvidersRequest,
    } as UpdateAuthProvidersRequest;
    message.providers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.providers.push(AuthProvider.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateAuthProvidersRequest {
    const message = {
      ...baseUpdateAuthProvidersRequest,
    } as UpdateAuthProvidersRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.providers = (object.providers ?? []).map((e: any) =>
      AuthProvider.fromJSON(e)
    );
    return message;
  },

  toJSON(message: UpdateAuthProvidersRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    if (message.providers) {
      obj.providers = message.providers.map((e) =>
        e ? AuthProvider.toJSON(e) : undefined
      );
    } else {
      obj.providers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateAuthProvidersRequest>, I>>(
    object: I
  ): UpdateAuthProvidersRequest {
    const message = {
      ...baseUpdateAuthProvidersRequest,
    } as UpdateAuthProvidersRequest;
    message.clusterId = object.clusterId ?? "";
    message.providers =
      object.providers?.map((e) => AuthProvider.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  UpdateAuthProvidersRequest.$type,
  UpdateAuthProvidersRequest
);

const baseDeleteAuthProvidersRequest: object = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProvidersRequest",
  clusterId: "",
  providerNames: "",
};

export const DeleteAuthProvidersRequest = {
  $type:
    "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProvidersRequest" as const,

  encode(
    message: DeleteAuthProvidersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.providerNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteAuthProvidersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteAuthProvidersRequest,
    } as DeleteAuthProvidersRequest;
    message.providerNames = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.providerNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteAuthProvidersRequest {
    const message = {
      ...baseDeleteAuthProvidersRequest,
    } as DeleteAuthProvidersRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.providerNames = (object.providerNames ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: DeleteAuthProvidersRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    if (message.providerNames) {
      obj.providerNames = message.providerNames.map((e) => e);
    } else {
      obj.providerNames = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteAuthProvidersRequest>, I>>(
    object: I
  ): DeleteAuthProvidersRequest {
    const message = {
      ...baseDeleteAuthProvidersRequest,
    } as DeleteAuthProvidersRequest;
    message.clusterId = object.clusterId ?? "";
    message.providerNames = object.providerNames?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  DeleteAuthProvidersRequest.$type,
  DeleteAuthProvidersRequest
);

const baseUpdateAuthProviderRequest: object = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProviderRequest",
  clusterId: "",
  name: "",
};

export const UpdateAuthProviderRequest = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProviderRequest" as const,

  encode(
    message: UpdateAuthProviderRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.provider !== undefined) {
      AuthProvider.encode(message.provider, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateAuthProviderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateAuthProviderRequest,
    } as UpdateAuthProviderRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.provider = AuthProvider.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateAuthProviderRequest {
    const message = {
      ...baseUpdateAuthProviderRequest,
    } as UpdateAuthProviderRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.provider =
      object.provider !== undefined && object.provider !== null
        ? AuthProvider.fromJSON(object.provider)
        : undefined;
    return message;
  },

  toJSON(message: UpdateAuthProviderRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.name !== undefined && (obj.name = message.name);
    message.provider !== undefined &&
      (obj.provider = message.provider
        ? AuthProvider.toJSON(message.provider)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateAuthProviderRequest>, I>>(
    object: I
  ): UpdateAuthProviderRequest {
    const message = {
      ...baseUpdateAuthProviderRequest,
    } as UpdateAuthProviderRequest;
    message.clusterId = object.clusterId ?? "";
    message.name = object.name ?? "";
    message.provider =
      object.provider !== undefined && object.provider !== null
        ? AuthProvider.fromPartial(object.provider)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  UpdateAuthProviderRequest.$type,
  UpdateAuthProviderRequest
);

const baseDeleteAuthProviderRequest: object = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProviderRequest",
  clusterId: "",
  name: "",
};

export const DeleteAuthProviderRequest = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProviderRequest" as const,

  encode(
    message: DeleteAuthProviderRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteAuthProviderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteAuthProviderRequest,
    } as DeleteAuthProviderRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteAuthProviderRequest {
    const message = {
      ...baseDeleteAuthProviderRequest,
    } as DeleteAuthProviderRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: DeleteAuthProviderRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteAuthProviderRequest>, I>>(
    object: I
  ): DeleteAuthProviderRequest {
    const message = {
      ...baseDeleteAuthProviderRequest,
    } as DeleteAuthProviderRequest;
    message.clusterId = object.clusterId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteAuthProviderRequest.$type,
  DeleteAuthProviderRequest
);

const baseAddAuthProvidersMetadata: object = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.AddAuthProvidersMetadata",
  clusterId: "",
  names: "",
};

export const AddAuthProvidersMetadata = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.AddAuthProvidersMetadata" as const,

  encode(
    message: AddAuthProvidersMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.names) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddAuthProvidersMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddAuthProvidersMetadata,
    } as AddAuthProvidersMetadata;
    message.names = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.names.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddAuthProvidersMetadata {
    const message = {
      ...baseAddAuthProvidersMetadata,
    } as AddAuthProvidersMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.names = (object.names ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: AddAuthProvidersMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    if (message.names) {
      obj.names = message.names.map((e) => e);
    } else {
      obj.names = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddAuthProvidersMetadata>, I>>(
    object: I
  ): AddAuthProvidersMetadata {
    const message = {
      ...baseAddAuthProvidersMetadata,
    } as AddAuthProvidersMetadata;
    message.clusterId = object.clusterId ?? "";
    message.names = object.names?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  AddAuthProvidersMetadata.$type,
  AddAuthProvidersMetadata
);

const baseUpdateAuthProvidersMetadata: object = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProvidersMetadata",
  clusterId: "",
  names: "",
};

export const UpdateAuthProvidersMetadata = {
  $type:
    "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProvidersMetadata" as const,

  encode(
    message: UpdateAuthProvidersMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.names) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateAuthProvidersMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateAuthProvidersMetadata,
    } as UpdateAuthProvidersMetadata;
    message.names = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.names.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateAuthProvidersMetadata {
    const message = {
      ...baseUpdateAuthProvidersMetadata,
    } as UpdateAuthProvidersMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.names = (object.names ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: UpdateAuthProvidersMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    if (message.names) {
      obj.names = message.names.map((e) => e);
    } else {
      obj.names = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateAuthProvidersMetadata>, I>>(
    object: I
  ): UpdateAuthProvidersMetadata {
    const message = {
      ...baseUpdateAuthProvidersMetadata,
    } as UpdateAuthProvidersMetadata;
    message.clusterId = object.clusterId ?? "";
    message.names = object.names?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  UpdateAuthProvidersMetadata.$type,
  UpdateAuthProvidersMetadata
);

const baseDeleteAuthProvidersMetadata: object = {
  $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProvidersMetadata",
  clusterId: "",
  names: "",
};

export const DeleteAuthProvidersMetadata = {
  $type:
    "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProvidersMetadata" as const,

  encode(
    message: DeleteAuthProvidersMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    for (const v of message.names) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteAuthProvidersMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteAuthProvidersMetadata,
    } as DeleteAuthProvidersMetadata;
    message.names = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.names.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteAuthProvidersMetadata {
    const message = {
      ...baseDeleteAuthProvidersMetadata,
    } as DeleteAuthProvidersMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.names = (object.names ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: DeleteAuthProvidersMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    if (message.names) {
      obj.names = message.names.map((e) => e);
    } else {
      obj.names = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteAuthProvidersMetadata>, I>>(
    object: I
  ): DeleteAuthProvidersMetadata {
    const message = {
      ...baseDeleteAuthProvidersMetadata,
    } as DeleteAuthProvidersMetadata;
    message.clusterId = object.clusterId ?? "";
    message.names = object.names?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  DeleteAuthProvidersMetadata.$type,
  DeleteAuthProvidersMetadata
);

/** A set of methods for managing Elasticsearch Authentication resources. */
export const AuthServiceService = {
  /** Retrieves the list of registered auth providers for Elasticsearch cluster. */
  listProviders: {
    path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/ListProviders",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAuthProvidersRequest) =>
      Buffer.from(ListAuthProvidersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListAuthProvidersRequest.decode(value),
    responseSerialize: (value: ListAuthProvidersResponse) =>
      Buffer.from(ListAuthProvidersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListAuthProvidersResponse.decode(value),
  },
  /** Returns registered auth provider by name. */
  getProvider: {
    path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/GetProvider",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetAuthProviderRequest) =>
      Buffer.from(GetAuthProviderRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetAuthProviderRequest.decode(value),
    responseSerialize: (value: AuthProvider) =>
      Buffer.from(AuthProvider.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AuthProvider.decode(value),
  },
  /** Adds new auth providers to Elasticsearch cluster. */
  addProviders: {
    path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/AddProviders",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddAuthProvidersRequest) =>
      Buffer.from(AddAuthProvidersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      AddAuthProvidersRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Replase the list of auth providers. */
  updateProviders: {
    path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/UpdateProviders",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAuthProvidersRequest) =>
      Buffer.from(UpdateAuthProvidersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateAuthProvidersRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Removes auth providers from Elasticsearch cluster by name. */
  deleteProviders: {
    path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/DeleteProviders",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteAuthProvidersRequest) =>
      Buffer.from(DeleteAuthProvidersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteAuthProvidersRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates registered auth provider. */
  updateProvider: {
    path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/UpdateProvider",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAuthProviderRequest) =>
      Buffer.from(UpdateAuthProviderRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateAuthProviderRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Removes auth provider from Elasticsearch cluster by name. */
  deleteProvider: {
    path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/DeleteProvider",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteAuthProviderRequest) =>
      Buffer.from(DeleteAuthProviderRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteAuthProviderRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface AuthServiceServer extends UntypedServiceImplementation {
  /** Retrieves the list of registered auth providers for Elasticsearch cluster. */
  listProviders: handleUnaryCall<
    ListAuthProvidersRequest,
    ListAuthProvidersResponse
  >;
  /** Returns registered auth provider by name. */
  getProvider: handleUnaryCall<GetAuthProviderRequest, AuthProvider>;
  /** Adds new auth providers to Elasticsearch cluster. */
  addProviders: handleUnaryCall<AddAuthProvidersRequest, Operation>;
  /** Replase the list of auth providers. */
  updateProviders: handleUnaryCall<UpdateAuthProvidersRequest, Operation>;
  /** Removes auth providers from Elasticsearch cluster by name. */
  deleteProviders: handleUnaryCall<DeleteAuthProvidersRequest, Operation>;
  /** Updates registered auth provider. */
  updateProvider: handleUnaryCall<UpdateAuthProviderRequest, Operation>;
  /** Removes auth provider from Elasticsearch cluster by name. */
  deleteProvider: handleUnaryCall<DeleteAuthProviderRequest, Operation>;
}

export interface AuthServiceClient extends Client {
  /** Retrieves the list of registered auth providers for Elasticsearch cluster. */
  listProviders(
    request: ListAuthProvidersRequest,
    callback: (
      error: ServiceError | null,
      response: ListAuthProvidersResponse
    ) => void
  ): ClientUnaryCall;
  listProviders(
    request: ListAuthProvidersRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListAuthProvidersResponse
    ) => void
  ): ClientUnaryCall;
  listProviders(
    request: ListAuthProvidersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListAuthProvidersResponse
    ) => void
  ): ClientUnaryCall;
  /** Returns registered auth provider by name. */
  getProvider(
    request: GetAuthProviderRequest,
    callback: (error: ServiceError | null, response: AuthProvider) => void
  ): ClientUnaryCall;
  getProvider(
    request: GetAuthProviderRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AuthProvider) => void
  ): ClientUnaryCall;
  getProvider(
    request: GetAuthProviderRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AuthProvider) => void
  ): ClientUnaryCall;
  /** Adds new auth providers to Elasticsearch cluster. */
  addProviders(
    request: AddAuthProvidersRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addProviders(
    request: AddAuthProvidersRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  addProviders(
    request: AddAuthProvidersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Replase the list of auth providers. */
  updateProviders(
    request: UpdateAuthProvidersRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateProviders(
    request: UpdateAuthProvidersRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateProviders(
    request: UpdateAuthProvidersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Removes auth providers from Elasticsearch cluster by name. */
  deleteProviders(
    request: DeleteAuthProvidersRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deleteProviders(
    request: DeleteAuthProvidersRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deleteProviders(
    request: DeleteAuthProvidersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates registered auth provider. */
  updateProvider(
    request: UpdateAuthProviderRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateProvider(
    request: UpdateAuthProviderRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateProvider(
    request: UpdateAuthProviderRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Removes auth provider from Elasticsearch cluster by name. */
  deleteProvider(
    request: DeleteAuthProviderRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deleteProvider(
    request: DeleteAuthProviderRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  deleteProvider(
    request: DeleteAuthProviderRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const AuthServiceClient = makeGenericClientConstructor(
  AuthServiceService,
  "yandex.cloud.mdb.elasticsearch.v1.AuthService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): AuthServiceClient;
  service: typeof AuthServiceService;
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
