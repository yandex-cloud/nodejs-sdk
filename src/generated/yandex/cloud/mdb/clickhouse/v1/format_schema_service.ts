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
import {
  FormatSchemaType,
  FormatSchema,
  formatSchemaTypeFromJSON,
  formatSchemaTypeToJSON,
} from "../../../../../yandex/cloud/mdb/clickhouse/v1/format_schema";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Operation } from "../../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.mdb.clickhouse.v1";

export interface GetFormatSchemaRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.GetFormatSchemaRequest";
  /**
   * ClickHouse cluster ID.
   *
   * To get a ClickHouse cluster ID, use the [ClusterService.List] method.
   */
  clusterId: string;
  /**
   * Format schema name.
   *
   * To get a format schema name, use the [FormatSchemaService.List] method.
   */
  formatSchemaName: string;
}

export interface ListFormatSchemasRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListFormatSchemasRequest";
  /**
   * ClickHouse cluster ID.
   *
   * To get a ClickHouse cluster ID, use the [ClusterService.List] method.
   */
  clusterId: string;
  /** The maximum number of results per page to return. If the number of the results is larger than [page_size], the service returns [ListFormatSchemasResponse.next_page_token]. You can use it to get the next page of the results in subsequent requests of a format schema list. */
  pageSize: number;
  /** Page token. To get the next page of results, set [page_token] to the [ListFormatSchemasResponse.next_page_token] returned by the previous format schema list request. */
  pageToken: string;
}

export interface ListFormatSchemasResponse {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListFormatSchemasResponse";
  /** List of format schemas. */
  formatSchemas: FormatSchema[];
  /** This token allows you to get the next page of results when requesting the format schema list. If the number of the results is larger than [ListFormatSchemasRequest.page_size], use the [next_page_token] as the value for the [ListFormatSchemasRequest.page_token] parameter in the next request. Each subsequent request will have its own [next_page_token] to continue paging through the results. */
  nextPageToken: string;
}

export interface CreateFormatSchemaRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateFormatSchemaRequest";
  /**
   * ClickHouse cluster ID.
   *
   * To get a ClickHouse cluster ID, use the [ClusterService.List] method.
   */
  clusterId: string;
  /** Format schema name. */
  formatSchemaName: string;
  /**
   * Schema type. Possible values are the following:
   *
   * * FORMAT_SCHEMA_TYPE_PROTOBUF - [Protobuf](https://protobuf.dev/) data format (including [ProtobufSingle](https://clickhouse.com/docs/en/interfaces/formats#protobufsingle)).
   * * FORMAT_SCHEMA_TYPE_CAPNPROTO - [Cap'n Proto](https://capnproto.org/) data format.
   */
  type: FormatSchemaType;
  /** [Link to the file](/docs/managed-clickhouse/operations/s3-access#get-link-to-object) of a format schema in Yandex Object Storage. Managed Service for ClickHouse works only with format schemas imported to Object Storage. */
  uri: string;
}

export interface CreateFormatSchemaMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateFormatSchemaMetadata";
  /** ClickHouse cluster ID. */
  clusterId: string;
  /** Format schema name. */
  formatSchemaName: string;
}

export interface UpdateFormatSchemaRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateFormatSchemaRequest";
  /**
   * ClickHouse cluster ID.
   *
   * To get a ClickHouse cluster ID, use the [ClusterService.List] method.
   */
  clusterId: string;
  /**
   * Format schema name.
   *
   * To get a format schema name, use the [FormatSchemaService.List] method.
   */
  formatSchemaName: string;
  updateMask?: FieldMask;
  /** [Link to the file](/docs/managed-clickhouse/operations/s3-access#get-link-to-object) of a format schema in Yandex Object Storage. Managed Service for ClickHouse works only with format schemas imported to Object Storage. */
  uri: string;
}

export interface UpdateFormatSchemaMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateFormatSchemaMetadata";
  /** ClickHouse cluster ID. */
  clusterId: string;
  /** Format schema name. */
  formatSchemaName: string;
}

export interface DeleteFormatSchemaRequest {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteFormatSchemaRequest";
  /**
   * ClickHouse cluster ID.
   *
   * To get a ClickHouse cluster ID, use the [ClusterService.List] method.
   */
  clusterId: string;
  /**
   * Format schema name.
   *
   * To get a format schema name, use the [FormatSchemaService.List] method.
   */
  formatSchemaName: string;
}

export interface DeleteFormatSchemaMetadata {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteFormatSchemaMetadata";
  /** ClickHouse cluster ID. */
  clusterId: string;
  /** Format schema name. */
  formatSchemaName: string;
}

const baseGetFormatSchemaRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.GetFormatSchemaRequest",
  clusterId: "",
  formatSchemaName: "",
};

export const GetFormatSchemaRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.GetFormatSchemaRequest" as const,

  encode(
    message: GetFormatSchemaRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.formatSchemaName !== "") {
      writer.uint32(18).string(message.formatSchemaName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetFormatSchemaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetFormatSchemaRequest } as GetFormatSchemaRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.formatSchemaName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetFormatSchemaRequest {
    const message = { ...baseGetFormatSchemaRequest } as GetFormatSchemaRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.formatSchemaName =
      object.formatSchemaName !== undefined && object.formatSchemaName !== null
        ? String(object.formatSchemaName)
        : "";
    return message;
  },

  toJSON(message: GetFormatSchemaRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.formatSchemaName !== undefined &&
      (obj.formatSchemaName = message.formatSchemaName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetFormatSchemaRequest>, I>>(
    object: I
  ): GetFormatSchemaRequest {
    const message = { ...baseGetFormatSchemaRequest } as GetFormatSchemaRequest;
    message.clusterId = object.clusterId ?? "";
    message.formatSchemaName = object.formatSchemaName ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetFormatSchemaRequest.$type, GetFormatSchemaRequest);

const baseListFormatSchemasRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListFormatSchemasRequest",
  clusterId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListFormatSchemasRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListFormatSchemasRequest" as const,

  encode(
    message: ListFormatSchemasRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListFormatSchemasRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListFormatSchemasRequest,
    } as ListFormatSchemasRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.pageSize = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.pageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListFormatSchemasRequest {
    const message = {
      ...baseListFormatSchemasRequest,
    } as ListFormatSchemasRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    return message;
  },

  toJSON(message: ListFormatSchemasRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListFormatSchemasRequest>, I>>(
    object: I
  ): ListFormatSchemasRequest {
    const message = {
      ...baseListFormatSchemasRequest,
    } as ListFormatSchemasRequest;
    message.clusterId = object.clusterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListFormatSchemasRequest.$type,
  ListFormatSchemasRequest
);

const baseListFormatSchemasResponse: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListFormatSchemasResponse",
  nextPageToken: "",
};

export const ListFormatSchemasResponse = {
  $type: "yandex.cloud.mdb.clickhouse.v1.ListFormatSchemasResponse" as const,

  encode(
    message: ListFormatSchemasResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.formatSchemas) {
      FormatSchema.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListFormatSchemasResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListFormatSchemasResponse,
    } as ListFormatSchemasResponse;
    message.formatSchemas = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.formatSchemas.push(
            FormatSchema.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.nextPageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListFormatSchemasResponse {
    const message = {
      ...baseListFormatSchemasResponse,
    } as ListFormatSchemasResponse;
    message.formatSchemas = (object.formatSchemas ?? []).map((e: any) =>
      FormatSchema.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListFormatSchemasResponse): unknown {
    const obj: any = {};
    if (message.formatSchemas) {
      obj.formatSchemas = message.formatSchemas.map((e) =>
        e ? FormatSchema.toJSON(e) : undefined
      );
    } else {
      obj.formatSchemas = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListFormatSchemasResponse>, I>>(
    object: I
  ): ListFormatSchemasResponse {
    const message = {
      ...baseListFormatSchemasResponse,
    } as ListFormatSchemasResponse;
    message.formatSchemas =
      object.formatSchemas?.map((e) => FormatSchema.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListFormatSchemasResponse.$type,
  ListFormatSchemasResponse
);

const baseCreateFormatSchemaRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateFormatSchemaRequest",
  clusterId: "",
  formatSchemaName: "",
  type: 0,
  uri: "",
};

export const CreateFormatSchemaRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateFormatSchemaRequest" as const,

  encode(
    message: CreateFormatSchemaRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.formatSchemaName !== "") {
      writer.uint32(18).string(message.formatSchemaName);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateFormatSchemaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateFormatSchemaRequest,
    } as CreateFormatSchemaRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.formatSchemaName = reader.string();
          break;
        case 3:
          message.type = reader.int32() as any;
          break;
        case 4:
          message.uri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateFormatSchemaRequest {
    const message = {
      ...baseCreateFormatSchemaRequest,
    } as CreateFormatSchemaRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.formatSchemaName =
      object.formatSchemaName !== undefined && object.formatSchemaName !== null
        ? String(object.formatSchemaName)
        : "";
    message.type =
      object.type !== undefined && object.type !== null
        ? formatSchemaTypeFromJSON(object.type)
        : 0;
    message.uri =
      object.uri !== undefined && object.uri !== null ? String(object.uri) : "";
    return message;
  },

  toJSON(message: CreateFormatSchemaRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.formatSchemaName !== undefined &&
      (obj.formatSchemaName = message.formatSchemaName);
    message.type !== undefined &&
      (obj.type = formatSchemaTypeToJSON(message.type));
    message.uri !== undefined && (obj.uri = message.uri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateFormatSchemaRequest>, I>>(
    object: I
  ): CreateFormatSchemaRequest {
    const message = {
      ...baseCreateFormatSchemaRequest,
    } as CreateFormatSchemaRequest;
    message.clusterId = object.clusterId ?? "";
    message.formatSchemaName = object.formatSchemaName ?? "";
    message.type = object.type ?? 0;
    message.uri = object.uri ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateFormatSchemaRequest.$type,
  CreateFormatSchemaRequest
);

const baseCreateFormatSchemaMetadata: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateFormatSchemaMetadata",
  clusterId: "",
  formatSchemaName: "",
};

export const CreateFormatSchemaMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.CreateFormatSchemaMetadata" as const,

  encode(
    message: CreateFormatSchemaMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.formatSchemaName !== "") {
      writer.uint32(18).string(message.formatSchemaName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateFormatSchemaMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateFormatSchemaMetadata,
    } as CreateFormatSchemaMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.formatSchemaName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateFormatSchemaMetadata {
    const message = {
      ...baseCreateFormatSchemaMetadata,
    } as CreateFormatSchemaMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.formatSchemaName =
      object.formatSchemaName !== undefined && object.formatSchemaName !== null
        ? String(object.formatSchemaName)
        : "";
    return message;
  },

  toJSON(message: CreateFormatSchemaMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.formatSchemaName !== undefined &&
      (obj.formatSchemaName = message.formatSchemaName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateFormatSchemaMetadata>, I>>(
    object: I
  ): CreateFormatSchemaMetadata {
    const message = {
      ...baseCreateFormatSchemaMetadata,
    } as CreateFormatSchemaMetadata;
    message.clusterId = object.clusterId ?? "";
    message.formatSchemaName = object.formatSchemaName ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateFormatSchemaMetadata.$type,
  CreateFormatSchemaMetadata
);

const baseUpdateFormatSchemaRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateFormatSchemaRequest",
  clusterId: "",
  formatSchemaName: "",
  uri: "",
};

export const UpdateFormatSchemaRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateFormatSchemaRequest" as const,

  encode(
    message: UpdateFormatSchemaRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.formatSchemaName !== "") {
      writer.uint32(18).string(message.formatSchemaName);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
    }
    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateFormatSchemaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateFormatSchemaRequest,
    } as UpdateFormatSchemaRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.formatSchemaName = reader.string();
          break;
        case 3:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        case 4:
          message.uri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateFormatSchemaRequest {
    const message = {
      ...baseUpdateFormatSchemaRequest,
    } as UpdateFormatSchemaRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.formatSchemaName =
      object.formatSchemaName !== undefined && object.formatSchemaName !== null
        ? String(object.formatSchemaName)
        : "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
        : undefined;
    message.uri =
      object.uri !== undefined && object.uri !== null ? String(object.uri) : "";
    return message;
  },

  toJSON(message: UpdateFormatSchemaRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.formatSchemaName !== undefined &&
      (obj.formatSchemaName = message.formatSchemaName);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.uri !== undefined && (obj.uri = message.uri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateFormatSchemaRequest>, I>>(
    object: I
  ): UpdateFormatSchemaRequest {
    const message = {
      ...baseUpdateFormatSchemaRequest,
    } as UpdateFormatSchemaRequest;
    message.clusterId = object.clusterId ?? "";
    message.formatSchemaName = object.formatSchemaName ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.uri = object.uri ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateFormatSchemaRequest.$type,
  UpdateFormatSchemaRequest
);

const baseUpdateFormatSchemaMetadata: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateFormatSchemaMetadata",
  clusterId: "",
  formatSchemaName: "",
};

export const UpdateFormatSchemaMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.UpdateFormatSchemaMetadata" as const,

  encode(
    message: UpdateFormatSchemaMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.formatSchemaName !== "") {
      writer.uint32(18).string(message.formatSchemaName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateFormatSchemaMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateFormatSchemaMetadata,
    } as UpdateFormatSchemaMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.formatSchemaName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateFormatSchemaMetadata {
    const message = {
      ...baseUpdateFormatSchemaMetadata,
    } as UpdateFormatSchemaMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.formatSchemaName =
      object.formatSchemaName !== undefined && object.formatSchemaName !== null
        ? String(object.formatSchemaName)
        : "";
    return message;
  },

  toJSON(message: UpdateFormatSchemaMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.formatSchemaName !== undefined &&
      (obj.formatSchemaName = message.formatSchemaName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateFormatSchemaMetadata>, I>>(
    object: I
  ): UpdateFormatSchemaMetadata {
    const message = {
      ...baseUpdateFormatSchemaMetadata,
    } as UpdateFormatSchemaMetadata;
    message.clusterId = object.clusterId ?? "";
    message.formatSchemaName = object.formatSchemaName ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateFormatSchemaMetadata.$type,
  UpdateFormatSchemaMetadata
);

const baseDeleteFormatSchemaRequest: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteFormatSchemaRequest",
  clusterId: "",
  formatSchemaName: "",
};

export const DeleteFormatSchemaRequest = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteFormatSchemaRequest" as const,

  encode(
    message: DeleteFormatSchemaRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.formatSchemaName !== "") {
      writer.uint32(18).string(message.formatSchemaName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteFormatSchemaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteFormatSchemaRequest,
    } as DeleteFormatSchemaRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.formatSchemaName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteFormatSchemaRequest {
    const message = {
      ...baseDeleteFormatSchemaRequest,
    } as DeleteFormatSchemaRequest;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.formatSchemaName =
      object.formatSchemaName !== undefined && object.formatSchemaName !== null
        ? String(object.formatSchemaName)
        : "";
    return message;
  },

  toJSON(message: DeleteFormatSchemaRequest): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.formatSchemaName !== undefined &&
      (obj.formatSchemaName = message.formatSchemaName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteFormatSchemaRequest>, I>>(
    object: I
  ): DeleteFormatSchemaRequest {
    const message = {
      ...baseDeleteFormatSchemaRequest,
    } as DeleteFormatSchemaRequest;
    message.clusterId = object.clusterId ?? "";
    message.formatSchemaName = object.formatSchemaName ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteFormatSchemaRequest.$type,
  DeleteFormatSchemaRequest
);

const baseDeleteFormatSchemaMetadata: object = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteFormatSchemaMetadata",
  clusterId: "",
  formatSchemaName: "",
};

export const DeleteFormatSchemaMetadata = {
  $type: "yandex.cloud.mdb.clickhouse.v1.DeleteFormatSchemaMetadata" as const,

  encode(
    message: DeleteFormatSchemaMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clusterId !== "") {
      writer.uint32(10).string(message.clusterId);
    }
    if (message.formatSchemaName !== "") {
      writer.uint32(18).string(message.formatSchemaName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteFormatSchemaMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteFormatSchemaMetadata,
    } as DeleteFormatSchemaMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clusterId = reader.string();
          break;
        case 2:
          message.formatSchemaName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteFormatSchemaMetadata {
    const message = {
      ...baseDeleteFormatSchemaMetadata,
    } as DeleteFormatSchemaMetadata;
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.formatSchemaName =
      object.formatSchemaName !== undefined && object.formatSchemaName !== null
        ? String(object.formatSchemaName)
        : "";
    return message;
  },

  toJSON(message: DeleteFormatSchemaMetadata): unknown {
    const obj: any = {};
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.formatSchemaName !== undefined &&
      (obj.formatSchemaName = message.formatSchemaName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteFormatSchemaMetadata>, I>>(
    object: I
  ): DeleteFormatSchemaMetadata {
    const message = {
      ...baseDeleteFormatSchemaMetadata,
    } as DeleteFormatSchemaMetadata;
    message.clusterId = object.clusterId ?? "";
    message.formatSchemaName = object.formatSchemaName ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteFormatSchemaMetadata.$type,
  DeleteFormatSchemaMetadata
);

/** A set of methods for managing [format schemas](https://clickhouse.com/docs/en/interfaces/formats) for input and output data. */
export const FormatSchemaServiceService = {
  /** Returns detailed information about a given format schema. */
  get: {
    path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetFormatSchemaRequest) =>
      Buffer.from(GetFormatSchemaRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetFormatSchemaRequest.decode(value),
    responseSerialize: (value: FormatSchema) =>
      Buffer.from(FormatSchema.encode(value).finish()),
    responseDeserialize: (value: Buffer) => FormatSchema.decode(value),
  },
  /** Returns a list of format schemas in a cluster. */
  list: {
    path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListFormatSchemasRequest) =>
      Buffer.from(ListFormatSchemasRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListFormatSchemasRequest.decode(value),
    responseSerialize: (value: ListFormatSchemasResponse) =>
      Buffer.from(ListFormatSchemasResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListFormatSchemasResponse.decode(value),
  },
  /** Adds a format schema to a cluster. */
  create: {
    path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateFormatSchemaRequest) =>
      Buffer.from(CreateFormatSchemaRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateFormatSchemaRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Changes a format schema. */
  update: {
    path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateFormatSchemaRequest) =>
      Buffer.from(UpdateFormatSchemaRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateFormatSchemaRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes a format schema from a cluster. */
  delete: {
    path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteFormatSchemaRequest) =>
      Buffer.from(DeleteFormatSchemaRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteFormatSchemaRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface FormatSchemaServiceServer
  extends UntypedServiceImplementation {
  /** Returns detailed information about a given format schema. */
  get: handleUnaryCall<GetFormatSchemaRequest, FormatSchema>;
  /** Returns a list of format schemas in a cluster. */
  list: handleUnaryCall<ListFormatSchemasRequest, ListFormatSchemasResponse>;
  /** Adds a format schema to a cluster. */
  create: handleUnaryCall<CreateFormatSchemaRequest, Operation>;
  /** Changes a format schema. */
  update: handleUnaryCall<UpdateFormatSchemaRequest, Operation>;
  /** Deletes a format schema from a cluster. */
  delete: handleUnaryCall<DeleteFormatSchemaRequest, Operation>;
}

export interface FormatSchemaServiceClient extends Client {
  /** Returns detailed information about a given format schema. */
  get(
    request: GetFormatSchemaRequest,
    callback: (error: ServiceError | null, response: FormatSchema) => void
  ): ClientUnaryCall;
  get(
    request: GetFormatSchemaRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: FormatSchema) => void
  ): ClientUnaryCall;
  get(
    request: GetFormatSchemaRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: FormatSchema) => void
  ): ClientUnaryCall;
  /** Returns a list of format schemas in a cluster. */
  list(
    request: ListFormatSchemasRequest,
    callback: (
      error: ServiceError | null,
      response: ListFormatSchemasResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListFormatSchemasRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListFormatSchemasResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListFormatSchemasRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListFormatSchemasResponse
    ) => void
  ): ClientUnaryCall;
  /** Adds a format schema to a cluster. */
  create(
    request: CreateFormatSchemaRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateFormatSchemaRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateFormatSchemaRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Changes a format schema. */
  update(
    request: UpdateFormatSchemaRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateFormatSchemaRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateFormatSchemaRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes a format schema from a cluster. */
  delete(
    request: DeleteFormatSchemaRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteFormatSchemaRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteFormatSchemaRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const FormatSchemaServiceClient = makeGenericClientConstructor(
  FormatSchemaServiceService,
  "yandex.cloud.mdb.clickhouse.v1.FormatSchemaService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): FormatSchemaServiceClient;
  service: typeof FormatSchemaServiceService;
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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
