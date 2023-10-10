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
import { FieldMask } from "../../../../google/protobuf/field_mask";
import {
  Sink,
  Sink_Yds,
  Sink_S3,
} from "../../../../yandex/cloud/logging/v1/sink";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import {
  ListAccessBindingsRequest,
  ListAccessBindingsResponse,
  SetAccessBindingsRequest,
  UpdateAccessBindingsRequest,
} from "../../../../yandex/cloud/access/access";

export const protobufPackage = "yandex.cloud.logging.v1";

export interface GetSinkRequest {
  $type: "yandex.cloud.logging.v1.GetSinkRequest";
  /**
   * ID of the sink to return.
   *
   * To get a sink ID make a [SinkService.List] request.
   */
  sinkId: string;
}

export interface ListSinksRequest {
  $type: "yandex.cloud.logging.v1.ListSinksRequest";
  /**
   * Folder ID of the sinks to return.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListSinkssResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListSinksResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters sinks listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently filtering can only be applied to the [Sink.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name="my-sink"`.
   */
  filter: string;
}

export interface ListSinksResponse {
  $type: "yandex.cloud.logging.v1.ListSinksResponse";
  /** List of sinks in the specified folder. */
  sinks: Sink[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListSinksRequest.page_size], use `next_page_token` as the value
   * for the [ListSinksRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateSinkRequest {
  $type: "yandex.cloud.logging.v1.CreateSinkRequest";
  /**
   * ID of the folder to create a sink in.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the sink.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the sink. */
  description: string;
  /** Sink labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Logs will be written to the sink on behalf of this service account */
  serviceAccountId: string;
  /** Yandex data stream */
  yds?: Sink_Yds | undefined;
  /** Object storage */
  s3?: Sink_S3 | undefined;
}

export interface CreateSinkRequest_LabelsEntry {
  $type: "yandex.cloud.logging.v1.CreateSinkRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateSinkMetadata {
  $type: "yandex.cloud.logging.v1.CreateSinkMetadata";
  /** ID of the sink being created. */
  sinkId: string;
}

export interface UpdateSinkRequest {
  $type: "yandex.cloud.logging.v1.UpdateSinkRequest";
  /**
   * ID of the sink to update.
   *
   * To get a sink ID make a [SinkService.List] request.
   */
  sinkId: string;
  /** Field mask that specifies which attributes of the function should be updated. */
  updateMask?: FieldMask;
  /**
   * New name of the sink.
   * The name must be unique within the folder.
   */
  name: string;
  /** New Description of the sink. */
  description: string;
  /** New sink labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** new service account to use for logs writing to the sink. */
  serviceAccountId: string;
  /** Yandex data stream */
  yds?: Sink_Yds | undefined;
  /** Object storage */
  s3?: Sink_S3 | undefined;
}

export interface UpdateSinkRequest_LabelsEntry {
  $type: "yandex.cloud.logging.v1.UpdateSinkRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateSinkMetadata {
  $type: "yandex.cloud.logging.v1.UpdateSinkMetadata";
  /** ID of the sink being updated. */
  sinkId: string;
}

export interface DeleteSinkRequest {
  $type: "yandex.cloud.logging.v1.DeleteSinkRequest";
  /**
   * ID of the sink to delete.
   *
   * To get a sink ID make a [SinkService.List] request.
   */
  sinkId: string;
}

export interface DeleteSinkMetadata {
  $type: "yandex.cloud.logging.v1.DeleteSinkMetadata";
  /** ID of the sink being deleted. */
  sinkId: string;
}

export interface ListSinkOperationsRequest {
  $type: "yandex.cloud.logging.v1.ListSinkOperationsRequest";
  /**
   * ID of the sink to list operations for.
   *
   * To get a sink ID make a [SinkService.List] request.
   */
  sinkId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListSinkOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListSinkOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently filtering can be applied to the [operation.Operation.description], [operation.Operation.created_at], [operation.Operation.modified_at], [operation.Operation.created_by], [operation.Operation.done] fields.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Examples of a filter: `done=false`, `created_by='John.Doe'`.
   */
  filter: string;
}

export interface ListSinkOperationsResponse {
  $type: "yandex.cloud.logging.v1.ListSinkOperationsResponse";
  /** List of operations for the specified sink. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListOSinkperationsRequest.page_size], use `next_page_token` as the value
   * for the [ListSinkOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

const baseGetSinkRequest: object = {
  $type: "yandex.cloud.logging.v1.GetSinkRequest",
  sinkId: "",
};

export const GetSinkRequest = {
  $type: "yandex.cloud.logging.v1.GetSinkRequest" as const,

  encode(
    message: GetSinkRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sinkId !== "") {
      writer.uint32(10).string(message.sinkId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSinkRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetSinkRequest } as GetSinkRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sinkId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetSinkRequest {
    const message = { ...baseGetSinkRequest } as GetSinkRequest;
    message.sinkId =
      object.sinkId !== undefined && object.sinkId !== null
        ? String(object.sinkId)
        : "";
    return message;
  },

  toJSON(message: GetSinkRequest): unknown {
    const obj: any = {};
    message.sinkId !== undefined && (obj.sinkId = message.sinkId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetSinkRequest>, I>>(
    object: I
  ): GetSinkRequest {
    const message = { ...baseGetSinkRequest } as GetSinkRequest;
    message.sinkId = object.sinkId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetSinkRequest.$type, GetSinkRequest);

const baseListSinksRequest: object = {
  $type: "yandex.cloud.logging.v1.ListSinksRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListSinksRequest = {
  $type: "yandex.cloud.logging.v1.ListSinksRequest" as const,

  encode(
    message: ListSinksRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(34).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(42).string(message.filter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSinksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListSinksRequest } as ListSinksRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 3:
          message.pageSize = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.pageToken = reader.string();
          break;
        case 5:
          message.filter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListSinksRequest {
    const message = { ...baseListSinksRequest } as ListSinksRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    message.filter =
      object.filter !== undefined && object.filter !== null
        ? String(object.filter)
        : "";
    return message;
  },

  toJSON(message: ListSinksRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListSinksRequest>, I>>(
    object: I
  ): ListSinksRequest {
    const message = { ...baseListSinksRequest } as ListSinksRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSinksRequest.$type, ListSinksRequest);

const baseListSinksResponse: object = {
  $type: "yandex.cloud.logging.v1.ListSinksResponse",
  nextPageToken: "",
};

export const ListSinksResponse = {
  $type: "yandex.cloud.logging.v1.ListSinksResponse" as const,

  encode(
    message: ListSinksResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.sinks) {
      Sink.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSinksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListSinksResponse } as ListSinksResponse;
    message.sinks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sinks.push(Sink.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListSinksResponse {
    const message = { ...baseListSinksResponse } as ListSinksResponse;
    message.sinks = (object.sinks ?? []).map((e: any) => Sink.fromJSON(e));
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListSinksResponse): unknown {
    const obj: any = {};
    if (message.sinks) {
      obj.sinks = message.sinks.map((e) => (e ? Sink.toJSON(e) : undefined));
    } else {
      obj.sinks = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListSinksResponse>, I>>(
    object: I
  ): ListSinksResponse {
    const message = { ...baseListSinksResponse } as ListSinksResponse;
    message.sinks = object.sinks?.map((e) => Sink.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSinksResponse.$type, ListSinksResponse);

const baseCreateSinkRequest: object = {
  $type: "yandex.cloud.logging.v1.CreateSinkRequest",
  folderId: "",
  name: "",
  description: "",
  serviceAccountId: "",
};

export const CreateSinkRequest = {
  $type: "yandex.cloud.logging.v1.CreateSinkRequest" as const,

  encode(
    message: CreateSinkRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateSinkRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.logging.v1.CreateSinkRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.serviceAccountId !== "") {
      writer.uint32(42).string(message.serviceAccountId);
    }
    if (message.yds !== undefined) {
      Sink_Yds.encode(message.yds, writer.uint32(50).fork()).ldelim();
    }
    if (message.s3 !== undefined) {
      Sink_S3.encode(message.s3, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSinkRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateSinkRequest } as CreateSinkRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          const entry4 = CreateSinkRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.serviceAccountId = reader.string();
          break;
        case 6:
          message.yds = Sink_Yds.decode(reader, reader.uint32());
          break;
        case 7:
          message.s3 = Sink_S3.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateSinkRequest {
    const message = { ...baseCreateSinkRequest } as CreateSinkRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.yds =
      object.yds !== undefined && object.yds !== null
        ? Sink_Yds.fromJSON(object.yds)
        : undefined;
    message.s3 =
      object.s3 !== undefined && object.s3 !== null
        ? Sink_S3.fromJSON(object.s3)
        : undefined;
    return message;
  },

  toJSON(message: CreateSinkRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.yds !== undefined &&
      (obj.yds = message.yds ? Sink_Yds.toJSON(message.yds) : undefined);
    message.s3 !== undefined &&
      (obj.s3 = message.s3 ? Sink_S3.toJSON(message.s3) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateSinkRequest>, I>>(
    object: I
  ): CreateSinkRequest {
    const message = { ...baseCreateSinkRequest } as CreateSinkRequest;
    message.folderId = object.folderId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.yds =
      object.yds !== undefined && object.yds !== null
        ? Sink_Yds.fromPartial(object.yds)
        : undefined;
    message.s3 =
      object.s3 !== undefined && object.s3 !== null
        ? Sink_S3.fromPartial(object.s3)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateSinkRequest.$type, CreateSinkRequest);

const baseCreateSinkRequest_LabelsEntry: object = {
  $type: "yandex.cloud.logging.v1.CreateSinkRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateSinkRequest_LabelsEntry = {
  $type: "yandex.cloud.logging.v1.CreateSinkRequest.LabelsEntry" as const,

  encode(
    message: CreateSinkRequest_LabelsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateSinkRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateSinkRequest_LabelsEntry,
    } as CreateSinkRequest_LabelsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateSinkRequest_LabelsEntry {
    const message = {
      ...baseCreateSinkRequest_LabelsEntry,
    } as CreateSinkRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateSinkRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateSinkRequest_LabelsEntry>, I>>(
    object: I
  ): CreateSinkRequest_LabelsEntry {
    const message = {
      ...baseCreateSinkRequest_LabelsEntry,
    } as CreateSinkRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateSinkRequest_LabelsEntry.$type,
  CreateSinkRequest_LabelsEntry
);

const baseCreateSinkMetadata: object = {
  $type: "yandex.cloud.logging.v1.CreateSinkMetadata",
  sinkId: "",
};

export const CreateSinkMetadata = {
  $type: "yandex.cloud.logging.v1.CreateSinkMetadata" as const,

  encode(
    message: CreateSinkMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sinkId !== "") {
      writer.uint32(10).string(message.sinkId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSinkMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateSinkMetadata } as CreateSinkMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sinkId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateSinkMetadata {
    const message = { ...baseCreateSinkMetadata } as CreateSinkMetadata;
    message.sinkId =
      object.sinkId !== undefined && object.sinkId !== null
        ? String(object.sinkId)
        : "";
    return message;
  },

  toJSON(message: CreateSinkMetadata): unknown {
    const obj: any = {};
    message.sinkId !== undefined && (obj.sinkId = message.sinkId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateSinkMetadata>, I>>(
    object: I
  ): CreateSinkMetadata {
    const message = { ...baseCreateSinkMetadata } as CreateSinkMetadata;
    message.sinkId = object.sinkId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateSinkMetadata.$type, CreateSinkMetadata);

const baseUpdateSinkRequest: object = {
  $type: "yandex.cloud.logging.v1.UpdateSinkRequest",
  sinkId: "",
  name: "",
  description: "",
  serviceAccountId: "",
};

export const UpdateSinkRequest = {
  $type: "yandex.cloud.logging.v1.UpdateSinkRequest" as const,

  encode(
    message: UpdateSinkRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sinkId !== "") {
      writer.uint32(10).string(message.sinkId);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateSinkRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.logging.v1.UpdateSinkRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.serviceAccountId !== "") {
      writer.uint32(50).string(message.serviceAccountId);
    }
    if (message.yds !== undefined) {
      Sink_Yds.encode(message.yds, writer.uint32(58).fork()).ldelim();
    }
    if (message.s3 !== undefined) {
      Sink_S3.encode(message.s3, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSinkRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateSinkRequest } as UpdateSinkRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sinkId = reader.string();
          break;
        case 2:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          const entry5 = UpdateSinkRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.serviceAccountId = reader.string();
          break;
        case 7:
          message.yds = Sink_Yds.decode(reader, reader.uint32());
          break;
        case 8:
          message.s3 = Sink_S3.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateSinkRequest {
    const message = { ...baseUpdateSinkRequest } as UpdateSinkRequest;
    message.sinkId =
      object.sinkId !== undefined && object.sinkId !== null
        ? String(object.sinkId)
        : "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
        : undefined;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.yds =
      object.yds !== undefined && object.yds !== null
        ? Sink_Yds.fromJSON(object.yds)
        : undefined;
    message.s3 =
      object.s3 !== undefined && object.s3 !== null
        ? Sink_S3.fromJSON(object.s3)
        : undefined;
    return message;
  },

  toJSON(message: UpdateSinkRequest): unknown {
    const obj: any = {};
    message.sinkId !== undefined && (obj.sinkId = message.sinkId);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.yds !== undefined &&
      (obj.yds = message.yds ? Sink_Yds.toJSON(message.yds) : undefined);
    message.s3 !== undefined &&
      (obj.s3 = message.s3 ? Sink_S3.toJSON(message.s3) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSinkRequest>, I>>(
    object: I
  ): UpdateSinkRequest {
    const message = { ...baseUpdateSinkRequest } as UpdateSinkRequest;
    message.sinkId = object.sinkId ?? "";
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.yds =
      object.yds !== undefined && object.yds !== null
        ? Sink_Yds.fromPartial(object.yds)
        : undefined;
    message.s3 =
      object.s3 !== undefined && object.s3 !== null
        ? Sink_S3.fromPartial(object.s3)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateSinkRequest.$type, UpdateSinkRequest);

const baseUpdateSinkRequest_LabelsEntry: object = {
  $type: "yandex.cloud.logging.v1.UpdateSinkRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateSinkRequest_LabelsEntry = {
  $type: "yandex.cloud.logging.v1.UpdateSinkRequest.LabelsEntry" as const,

  encode(
    message: UpdateSinkRequest_LabelsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateSinkRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateSinkRequest_LabelsEntry,
    } as UpdateSinkRequest_LabelsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateSinkRequest_LabelsEntry {
    const message = {
      ...baseUpdateSinkRequest_LabelsEntry,
    } as UpdateSinkRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateSinkRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSinkRequest_LabelsEntry>, I>>(
    object: I
  ): UpdateSinkRequest_LabelsEntry {
    const message = {
      ...baseUpdateSinkRequest_LabelsEntry,
    } as UpdateSinkRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateSinkRequest_LabelsEntry.$type,
  UpdateSinkRequest_LabelsEntry
);

const baseUpdateSinkMetadata: object = {
  $type: "yandex.cloud.logging.v1.UpdateSinkMetadata",
  sinkId: "",
};

export const UpdateSinkMetadata = {
  $type: "yandex.cloud.logging.v1.UpdateSinkMetadata" as const,

  encode(
    message: UpdateSinkMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sinkId !== "") {
      writer.uint32(10).string(message.sinkId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSinkMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateSinkMetadata } as UpdateSinkMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sinkId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateSinkMetadata {
    const message = { ...baseUpdateSinkMetadata } as UpdateSinkMetadata;
    message.sinkId =
      object.sinkId !== undefined && object.sinkId !== null
        ? String(object.sinkId)
        : "";
    return message;
  },

  toJSON(message: UpdateSinkMetadata): unknown {
    const obj: any = {};
    message.sinkId !== undefined && (obj.sinkId = message.sinkId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSinkMetadata>, I>>(
    object: I
  ): UpdateSinkMetadata {
    const message = { ...baseUpdateSinkMetadata } as UpdateSinkMetadata;
    message.sinkId = object.sinkId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateSinkMetadata.$type, UpdateSinkMetadata);

const baseDeleteSinkRequest: object = {
  $type: "yandex.cloud.logging.v1.DeleteSinkRequest",
  sinkId: "",
};

export const DeleteSinkRequest = {
  $type: "yandex.cloud.logging.v1.DeleteSinkRequest" as const,

  encode(
    message: DeleteSinkRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sinkId !== "") {
      writer.uint32(10).string(message.sinkId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSinkRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteSinkRequest } as DeleteSinkRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sinkId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteSinkRequest {
    const message = { ...baseDeleteSinkRequest } as DeleteSinkRequest;
    message.sinkId =
      object.sinkId !== undefined && object.sinkId !== null
        ? String(object.sinkId)
        : "";
    return message;
  },

  toJSON(message: DeleteSinkRequest): unknown {
    const obj: any = {};
    message.sinkId !== undefined && (obj.sinkId = message.sinkId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteSinkRequest>, I>>(
    object: I
  ): DeleteSinkRequest {
    const message = { ...baseDeleteSinkRequest } as DeleteSinkRequest;
    message.sinkId = object.sinkId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteSinkRequest.$type, DeleteSinkRequest);

const baseDeleteSinkMetadata: object = {
  $type: "yandex.cloud.logging.v1.DeleteSinkMetadata",
  sinkId: "",
};

export const DeleteSinkMetadata = {
  $type: "yandex.cloud.logging.v1.DeleteSinkMetadata" as const,

  encode(
    message: DeleteSinkMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sinkId !== "") {
      writer.uint32(10).string(message.sinkId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSinkMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteSinkMetadata } as DeleteSinkMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sinkId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteSinkMetadata {
    const message = { ...baseDeleteSinkMetadata } as DeleteSinkMetadata;
    message.sinkId =
      object.sinkId !== undefined && object.sinkId !== null
        ? String(object.sinkId)
        : "";
    return message;
  },

  toJSON(message: DeleteSinkMetadata): unknown {
    const obj: any = {};
    message.sinkId !== undefined && (obj.sinkId = message.sinkId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteSinkMetadata>, I>>(
    object: I
  ): DeleteSinkMetadata {
    const message = { ...baseDeleteSinkMetadata } as DeleteSinkMetadata;
    message.sinkId = object.sinkId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteSinkMetadata.$type, DeleteSinkMetadata);

const baseListSinkOperationsRequest: object = {
  $type: "yandex.cloud.logging.v1.ListSinkOperationsRequest",
  sinkId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListSinkOperationsRequest = {
  $type: "yandex.cloud.logging.v1.ListSinkOperationsRequest" as const,

  encode(
    message: ListSinkOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sinkId !== "") {
      writer.uint32(10).string(message.sinkId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(34).string(message.filter);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListSinkOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListSinkOperationsRequest,
    } as ListSinkOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sinkId = reader.string();
          break;
        case 2:
          message.pageSize = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.pageToken = reader.string();
          break;
        case 4:
          message.filter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListSinkOperationsRequest {
    const message = {
      ...baseListSinkOperationsRequest,
    } as ListSinkOperationsRequest;
    message.sinkId =
      object.sinkId !== undefined && object.sinkId !== null
        ? String(object.sinkId)
        : "";
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Number(object.pageSize)
        : 0;
    message.pageToken =
      object.pageToken !== undefined && object.pageToken !== null
        ? String(object.pageToken)
        : "";
    message.filter =
      object.filter !== undefined && object.filter !== null
        ? String(object.filter)
        : "";
    return message;
  },

  toJSON(message: ListSinkOperationsRequest): unknown {
    const obj: any = {};
    message.sinkId !== undefined && (obj.sinkId = message.sinkId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListSinkOperationsRequest>, I>>(
    object: I
  ): ListSinkOperationsRequest {
    const message = {
      ...baseListSinkOperationsRequest,
    } as ListSinkOperationsRequest;
    message.sinkId = object.sinkId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListSinkOperationsRequest.$type,
  ListSinkOperationsRequest
);

const baseListSinkOperationsResponse: object = {
  $type: "yandex.cloud.logging.v1.ListSinkOperationsResponse",
  nextPageToken: "",
};

export const ListSinkOperationsResponse = {
  $type: "yandex.cloud.logging.v1.ListSinkOperationsResponse" as const,

  encode(
    message: ListSinkOperationsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListSinkOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListSinkOperationsResponse,
    } as ListSinkOperationsResponse;
    message.operations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operations.push(Operation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListSinkOperationsResponse {
    const message = {
      ...baseListSinkOperationsResponse,
    } as ListSinkOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListSinkOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations) {
      obj.operations = message.operations.map((e) =>
        e ? Operation.toJSON(e) : undefined
      );
    } else {
      obj.operations = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListSinkOperationsResponse>, I>>(
    object: I
  ): ListSinkOperationsResponse {
    const message = {
      ...baseListSinkOperationsResponse,
    } as ListSinkOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListSinkOperationsResponse.$type,
  ListSinkOperationsResponse
);

/** A set of methods for managing log sinks. */
export const SinkServiceService = {
  /**
   * Returns the specified sink.
   *
   * To get the list of all available sinks, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.logging.v1.SinkService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetSinkRequest) =>
      Buffer.from(GetSinkRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetSinkRequest.decode(value),
    responseSerialize: (value: Sink) =>
      Buffer.from(Sink.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Sink.decode(value),
  },
  /** Retrieves the list of sinks in the specified folder. */
  list: {
    path: "/yandex.cloud.logging.v1.SinkService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSinksRequest) =>
      Buffer.from(ListSinksRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListSinksRequest.decode(value),
    responseSerialize: (value: ListSinksResponse) =>
      Buffer.from(ListSinksResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListSinksResponse.decode(value),
  },
  /** Creates a sink in the specified folder. */
  create: {
    path: "/yandex.cloud.logging.v1.SinkService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateSinkRequest) =>
      Buffer.from(CreateSinkRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateSinkRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified sink. */
  update: {
    path: "/yandex.cloud.logging.v1.SinkService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateSinkRequest) =>
      Buffer.from(UpdateSinkRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateSinkRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified sink. */
  delete: {
    path: "/yandex.cloud.logging.v1.SinkService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteSinkRequest) =>
      Buffer.from(DeleteSinkRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteSinkRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified sink. */
  listOperations: {
    path: "/yandex.cloud.logging.v1.SinkService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSinkOperationsRequest) =>
      Buffer.from(ListSinkOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListSinkOperationsRequest.decode(value),
    responseSerialize: (value: ListSinkOperationsResponse) =>
      Buffer.from(ListSinkOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListSinkOperationsResponse.decode(value),
  },
  /** Lists existing access bindings for the specified sink. */
  listAccessBindings: {
    path: "/yandex.cloud.logging.v1.SinkService/ListAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListAccessBindingsRequest) =>
      Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListAccessBindingsRequest.decode(value),
    responseSerialize: (value: ListAccessBindingsResponse) =>
      Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListAccessBindingsResponse.decode(value),
  },
  /** Sets access bindings for the specified sink. */
  setAccessBindings: {
    path: "/yandex.cloud.logging.v1.SinkService/SetAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetAccessBindingsRequest) =>
      Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      SetAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates access bindings for the specified sink. */
  updateAccessBindings: {
    path: "/yandex.cloud.logging.v1.SinkService/UpdateAccessBindings",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAccessBindingsRequest) =>
      Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateAccessBindingsRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface SinkServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified sink.
   *
   * To get the list of all available sinks, make a [List] request.
   */
  get: handleUnaryCall<GetSinkRequest, Sink>;
  /** Retrieves the list of sinks in the specified folder. */
  list: handleUnaryCall<ListSinksRequest, ListSinksResponse>;
  /** Creates a sink in the specified folder. */
  create: handleUnaryCall<CreateSinkRequest, Operation>;
  /** Updates the specified sink. */
  update: handleUnaryCall<UpdateSinkRequest, Operation>;
  /** Deletes the specified sink. */
  delete: handleUnaryCall<DeleteSinkRequest, Operation>;
  /** Lists operations for the specified sink. */
  listOperations: handleUnaryCall<
    ListSinkOperationsRequest,
    ListSinkOperationsResponse
  >;
  /** Lists existing access bindings for the specified sink. */
  listAccessBindings: handleUnaryCall<
    ListAccessBindingsRequest,
    ListAccessBindingsResponse
  >;
  /** Sets access bindings for the specified sink. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the specified sink. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface SinkServiceClient extends Client {
  /**
   * Returns the specified sink.
   *
   * To get the list of all available sinks, make a [List] request.
   */
  get(
    request: GetSinkRequest,
    callback: (error: ServiceError | null, response: Sink) => void
  ): ClientUnaryCall;
  get(
    request: GetSinkRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Sink) => void
  ): ClientUnaryCall;
  get(
    request: GetSinkRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Sink) => void
  ): ClientUnaryCall;
  /** Retrieves the list of sinks in the specified folder. */
  list(
    request: ListSinksRequest,
    callback: (error: ServiceError | null, response: ListSinksResponse) => void
  ): ClientUnaryCall;
  list(
    request: ListSinksRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListSinksResponse) => void
  ): ClientUnaryCall;
  list(
    request: ListSinksRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListSinksResponse) => void
  ): ClientUnaryCall;
  /** Creates a sink in the specified folder. */
  create(
    request: CreateSinkRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateSinkRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateSinkRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified sink. */
  update(
    request: UpdateSinkRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateSinkRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateSinkRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified sink. */
  delete(
    request: DeleteSinkRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteSinkRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteSinkRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified sink. */
  listOperations(
    request: ListSinkOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListSinkOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListSinkOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListSinkOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListSinkOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListSinkOperationsResponse
    ) => void
  ): ClientUnaryCall;
  /** Lists existing access bindings for the specified sink. */
  listAccessBindings(
    request: ListAccessBindingsRequest,
    callback: (
      error: ServiceError | null,
      response: ListAccessBindingsResponse
    ) => void
  ): ClientUnaryCall;
  listAccessBindings(
    request: ListAccessBindingsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListAccessBindingsResponse
    ) => void
  ): ClientUnaryCall;
  listAccessBindings(
    request: ListAccessBindingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListAccessBindingsResponse
    ) => void
  ): ClientUnaryCall;
  /** Sets access bindings for the specified sink. */
  setAccessBindings(
    request: SetAccessBindingsRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  setAccessBindings(
    request: SetAccessBindingsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  setAccessBindings(
    request: SetAccessBindingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates access bindings for the specified sink. */
  updateAccessBindings(
    request: UpdateAccessBindingsRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateAccessBindings(
    request: UpdateAccessBindingsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  updateAccessBindings(
    request: UpdateAccessBindingsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const SinkServiceClient = makeGenericClientConstructor(
  SinkServiceService,
  "yandex.cloud.logging.v1.SinkService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): SinkServiceClient;
  service: typeof SinkServiceService;
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
