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
import {
  ExportParams,
  Export,
} from "../../../../yandex/cloud/logging/v1/export";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import {
  ListAccessBindingsRequest,
  ListAccessBindingsResponse,
  SetAccessBindingsRequest,
  UpdateAccessBindingsRequest,
} from "../../../../yandex/cloud/access/access";

export const protobufPackage = "yandex.cloud.logging.v1";

export interface RunExportRequest {
  $type: "yandex.cloud.logging.v1.RunExportRequest";
  groupId: string;
  sinkId: string;
  params?: ExportParams;
  resultFilename: string;
  since?: Date;
  until?: Date;
}

export interface RunExportDetails {
  $type: "yandex.cloud.logging.v1.RunExportDetails";
  groupId: string;
  sinkId: string;
  params?: ExportParams;
  resultFilename: string;
  since?: Date;
  until?: Date;
}

export interface RunExportMetadata {
  $type: "yandex.cloud.logging.v1.RunExportMetadata";
  groupId: string;
  sinkId: string;
  resultFilename: string;
}

export interface GetExportRequest {
  $type: "yandex.cloud.logging.v1.GetExportRequest";
  /**
   * ID of the export to return.
   *
   * To get a export ID make a [ExportService.List] request.
   */
  exportId: string;
}

export interface ListExportsRequest {
  $type: "yandex.cloud.logging.v1.ListExportsRequest";
  /**
   * Folder ID of the exports to return.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListExportssResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListExportsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters exports listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently filtering can only be applied to the [Export.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name="my-export"`.
   */
  filter: string;
}

export interface ListExportsResponse {
  $type: "yandex.cloud.logging.v1.ListExportsResponse";
  /** List of exports in the specified folder. */
  exports: Export[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListExportsRequest.page_size], use `next_page_token` as the value
   * for the [ListExportsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateExportRequest {
  $type: "yandex.cloud.logging.v1.CreateExportRequest";
  /**
   * ID of the folder to create a export in.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the export.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the export. */
  description: string;
  /** Export labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Logging Group ID logs exported from */
  groupId: string;
  /** Logging Sink ID logs exported to */
  sinkId: string;
  /** Parameters for logs filtration */
  params?: ExportParams;
}

export interface CreateExportRequest_LabelsEntry {
  $type: "yandex.cloud.logging.v1.CreateExportRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateExportMetadata {
  $type: "yandex.cloud.logging.v1.CreateExportMetadata";
  /** ID of the export being created. */
  exportId: string;
}

export interface UpdateExportRequest {
  $type: "yandex.cloud.logging.v1.UpdateExportRequest";
  /**
   * ID of the export to update.
   *
   * To get a export ID make a [ExportService.List] request.
   */
  exportId: string;
  /** Field mask that specifies which attributes of the function should be updated. */
  updateMask?: FieldMask;
  /**
   * New name of the export.
   * The name must be unique within the folder.
   */
  name: string;
  /** New Description of the export. */
  description: string;
  /** New export labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** New logging Group ID logs exported from */
  groupId: string;
  /** New logging Sink ID logs exported to */
  sinkId: string;
  /** New parameters for logs filtration */
  params?: ExportParams;
}

export interface UpdateExportRequest_LabelsEntry {
  $type: "yandex.cloud.logging.v1.UpdateExportRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateExportMetadata {
  $type: "yandex.cloud.logging.v1.UpdateExportMetadata";
  /** ID of the export being updated. */
  exportId: string;
}

export interface DeleteExportRequest {
  $type: "yandex.cloud.logging.v1.DeleteExportRequest";
  /**
   * ID of the export to delete.
   *
   * To get a export ID make a [ExportService.List] request.
   */
  exportId: string;
}

export interface DeleteExportMetadata {
  $type: "yandex.cloud.logging.v1.DeleteExportMetadata";
  /** ID of the export being deleted. */
  exportId: string;
}

export interface ListExportOperationsRequest {
  $type: "yandex.cloud.logging.v1.ListExportOperationsRequest";
  /**
   * ID of the export to list operations for.
   *
   * To get a export ID make a [ExportService.List] request.
   */
  exportId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListExportOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListExportOperationsResponse.next_page_token] returned by a previous list request.
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

export interface ListExportOperationsResponse {
  $type: "yandex.cloud.logging.v1.ListExportOperationsResponse";
  /** List of operations for the specified export. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListOExportperationsRequest.page_size], use `next_page_token` as the value
   * for the [ListExportOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

const baseRunExportRequest: object = {
  $type: "yandex.cloud.logging.v1.RunExportRequest",
  groupId: "",
  sinkId: "",
  resultFilename: "",
};

export const RunExportRequest = {
  $type: "yandex.cloud.logging.v1.RunExportRequest" as const,

  encode(
    message: RunExportRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    if (message.sinkId !== "") {
      writer.uint32(18).string(message.sinkId);
    }
    if (message.params !== undefined) {
      ExportParams.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    if (message.resultFilename !== "") {
      writer.uint32(34).string(message.resultFilename);
    }
    if (message.since !== undefined) {
      Timestamp.encode(
        toTimestamp(message.since),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.until !== undefined) {
      Timestamp.encode(
        toTimestamp(message.until),
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RunExportRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRunExportRequest } as RunExportRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.string();
          break;
        case 2:
          message.sinkId = reader.string();
          break;
        case 3:
          message.params = ExportParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.resultFilename = reader.string();
          break;
        case 5:
          message.since = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.until = fromTimestamp(
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

  fromJSON(object: any): RunExportRequest {
    const message = { ...baseRunExportRequest } as RunExportRequest;
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? String(object.groupId)
        : "";
    message.sinkId =
      object.sinkId !== undefined && object.sinkId !== null
        ? String(object.sinkId)
        : "";
    message.params =
      object.params !== undefined && object.params !== null
        ? ExportParams.fromJSON(object.params)
        : undefined;
    message.resultFilename =
      object.resultFilename !== undefined && object.resultFilename !== null
        ? String(object.resultFilename)
        : "";
    message.since =
      object.since !== undefined && object.since !== null
        ? fromJsonTimestamp(object.since)
        : undefined;
    message.until =
      object.until !== undefined && object.until !== null
        ? fromJsonTimestamp(object.until)
        : undefined;
    return message;
  },

  toJSON(message: RunExportRequest): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.sinkId !== undefined && (obj.sinkId = message.sinkId);
    message.params !== undefined &&
      (obj.params = message.params
        ? ExportParams.toJSON(message.params)
        : undefined);
    message.resultFilename !== undefined &&
      (obj.resultFilename = message.resultFilename);
    message.since !== undefined && (obj.since = message.since.toISOString());
    message.until !== undefined && (obj.until = message.until.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RunExportRequest>, I>>(
    object: I
  ): RunExportRequest {
    const message = { ...baseRunExportRequest } as RunExportRequest;
    message.groupId = object.groupId ?? "";
    message.sinkId = object.sinkId ?? "";
    message.params =
      object.params !== undefined && object.params !== null
        ? ExportParams.fromPartial(object.params)
        : undefined;
    message.resultFilename = object.resultFilename ?? "";
    message.since = object.since ?? undefined;
    message.until = object.until ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(RunExportRequest.$type, RunExportRequest);

const baseRunExportDetails: object = {
  $type: "yandex.cloud.logging.v1.RunExportDetails",
  groupId: "",
  sinkId: "",
  resultFilename: "",
};

export const RunExportDetails = {
  $type: "yandex.cloud.logging.v1.RunExportDetails" as const,

  encode(
    message: RunExportDetails,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    if (message.sinkId !== "") {
      writer.uint32(18).string(message.sinkId);
    }
    if (message.params !== undefined) {
      ExportParams.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    if (message.resultFilename !== "") {
      writer.uint32(34).string(message.resultFilename);
    }
    if (message.since !== undefined) {
      Timestamp.encode(
        toTimestamp(message.since),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.until !== undefined) {
      Timestamp.encode(
        toTimestamp(message.until),
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RunExportDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRunExportDetails } as RunExportDetails;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.string();
          break;
        case 2:
          message.sinkId = reader.string();
          break;
        case 3:
          message.params = ExportParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.resultFilename = reader.string();
          break;
        case 5:
          message.since = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.until = fromTimestamp(
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

  fromJSON(object: any): RunExportDetails {
    const message = { ...baseRunExportDetails } as RunExportDetails;
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? String(object.groupId)
        : "";
    message.sinkId =
      object.sinkId !== undefined && object.sinkId !== null
        ? String(object.sinkId)
        : "";
    message.params =
      object.params !== undefined && object.params !== null
        ? ExportParams.fromJSON(object.params)
        : undefined;
    message.resultFilename =
      object.resultFilename !== undefined && object.resultFilename !== null
        ? String(object.resultFilename)
        : "";
    message.since =
      object.since !== undefined && object.since !== null
        ? fromJsonTimestamp(object.since)
        : undefined;
    message.until =
      object.until !== undefined && object.until !== null
        ? fromJsonTimestamp(object.until)
        : undefined;
    return message;
  },

  toJSON(message: RunExportDetails): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.sinkId !== undefined && (obj.sinkId = message.sinkId);
    message.params !== undefined &&
      (obj.params = message.params
        ? ExportParams.toJSON(message.params)
        : undefined);
    message.resultFilename !== undefined &&
      (obj.resultFilename = message.resultFilename);
    message.since !== undefined && (obj.since = message.since.toISOString());
    message.until !== undefined && (obj.until = message.until.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RunExportDetails>, I>>(
    object: I
  ): RunExportDetails {
    const message = { ...baseRunExportDetails } as RunExportDetails;
    message.groupId = object.groupId ?? "";
    message.sinkId = object.sinkId ?? "";
    message.params =
      object.params !== undefined && object.params !== null
        ? ExportParams.fromPartial(object.params)
        : undefined;
    message.resultFilename = object.resultFilename ?? "";
    message.since = object.since ?? undefined;
    message.until = object.until ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(RunExportDetails.$type, RunExportDetails);

const baseRunExportMetadata: object = {
  $type: "yandex.cloud.logging.v1.RunExportMetadata",
  groupId: "",
  sinkId: "",
  resultFilename: "",
};

export const RunExportMetadata = {
  $type: "yandex.cloud.logging.v1.RunExportMetadata" as const,

  encode(
    message: RunExportMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    if (message.sinkId !== "") {
      writer.uint32(18).string(message.sinkId);
    }
    if (message.resultFilename !== "") {
      writer.uint32(26).string(message.resultFilename);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RunExportMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRunExportMetadata } as RunExportMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.string();
          break;
        case 2:
          message.sinkId = reader.string();
          break;
        case 3:
          message.resultFilename = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RunExportMetadata {
    const message = { ...baseRunExportMetadata } as RunExportMetadata;
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? String(object.groupId)
        : "";
    message.sinkId =
      object.sinkId !== undefined && object.sinkId !== null
        ? String(object.sinkId)
        : "";
    message.resultFilename =
      object.resultFilename !== undefined && object.resultFilename !== null
        ? String(object.resultFilename)
        : "";
    return message;
  },

  toJSON(message: RunExportMetadata): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.sinkId !== undefined && (obj.sinkId = message.sinkId);
    message.resultFilename !== undefined &&
      (obj.resultFilename = message.resultFilename);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RunExportMetadata>, I>>(
    object: I
  ): RunExportMetadata {
    const message = { ...baseRunExportMetadata } as RunExportMetadata;
    message.groupId = object.groupId ?? "";
    message.sinkId = object.sinkId ?? "";
    message.resultFilename = object.resultFilename ?? "";
    return message;
  },
};

messageTypeRegistry.set(RunExportMetadata.$type, RunExportMetadata);

const baseGetExportRequest: object = {
  $type: "yandex.cloud.logging.v1.GetExportRequest",
  exportId: "",
};

export const GetExportRequest = {
  $type: "yandex.cloud.logging.v1.GetExportRequest" as const,

  encode(
    message: GetExportRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.exportId !== "") {
      writer.uint32(10).string(message.exportId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetExportRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetExportRequest } as GetExportRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exportId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetExportRequest {
    const message = { ...baseGetExportRequest } as GetExportRequest;
    message.exportId =
      object.exportId !== undefined && object.exportId !== null
        ? String(object.exportId)
        : "";
    return message;
  },

  toJSON(message: GetExportRequest): unknown {
    const obj: any = {};
    message.exportId !== undefined && (obj.exportId = message.exportId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetExportRequest>, I>>(
    object: I
  ): GetExportRequest {
    const message = { ...baseGetExportRequest } as GetExportRequest;
    message.exportId = object.exportId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetExportRequest.$type, GetExportRequest);

const baseListExportsRequest: object = {
  $type: "yandex.cloud.logging.v1.ListExportsRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListExportsRequest = {
  $type: "yandex.cloud.logging.v1.ListExportsRequest" as const,

  encode(
    message: ListExportsRequest,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListExportsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListExportsRequest } as ListExportsRequest;
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

  fromJSON(object: any): ListExportsRequest {
    const message = { ...baseListExportsRequest } as ListExportsRequest;
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

  toJSON(message: ListExportsRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListExportsRequest>, I>>(
    object: I
  ): ListExportsRequest {
    const message = { ...baseListExportsRequest } as ListExportsRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListExportsRequest.$type, ListExportsRequest);

const baseListExportsResponse: object = {
  $type: "yandex.cloud.logging.v1.ListExportsResponse",
  nextPageToken: "",
};

export const ListExportsResponse = {
  $type: "yandex.cloud.logging.v1.ListExportsResponse" as const,

  encode(
    message: ListExportsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.exports) {
      Export.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListExportsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListExportsResponse } as ListExportsResponse;
    message.exports = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exports.push(Export.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListExportsResponse {
    const message = { ...baseListExportsResponse } as ListExportsResponse;
    message.exports = (object.exports ?? []).map((e: any) =>
      Export.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListExportsResponse): unknown {
    const obj: any = {};
    if (message.exports) {
      obj.exports = message.exports.map((e) =>
        e ? Export.toJSON(e) : undefined
      );
    } else {
      obj.exports = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListExportsResponse>, I>>(
    object: I
  ): ListExportsResponse {
    const message = { ...baseListExportsResponse } as ListExportsResponse;
    message.exports = object.exports?.map((e) => Export.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListExportsResponse.$type, ListExportsResponse);

const baseCreateExportRequest: object = {
  $type: "yandex.cloud.logging.v1.CreateExportRequest",
  folderId: "",
  name: "",
  description: "",
  groupId: "",
  sinkId: "",
};

export const CreateExportRequest = {
  $type: "yandex.cloud.logging.v1.CreateExportRequest" as const,

  encode(
    message: CreateExportRequest,
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
      CreateExportRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.logging.v1.CreateExportRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.groupId !== "") {
      writer.uint32(42).string(message.groupId);
    }
    if (message.sinkId !== "") {
      writer.uint32(50).string(message.sinkId);
    }
    if (message.params !== undefined) {
      ExportParams.encode(message.params, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateExportRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateExportRequest } as CreateExportRequest;
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
          const entry4 = CreateExportRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.groupId = reader.string();
          break;
        case 6:
          message.sinkId = reader.string();
          break;
        case 7:
          message.params = ExportParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateExportRequest {
    const message = { ...baseCreateExportRequest } as CreateExportRequest;
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
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? String(object.groupId)
        : "";
    message.sinkId =
      object.sinkId !== undefined && object.sinkId !== null
        ? String(object.sinkId)
        : "";
    message.params =
      object.params !== undefined && object.params !== null
        ? ExportParams.fromJSON(object.params)
        : undefined;
    return message;
  },

  toJSON(message: CreateExportRequest): unknown {
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
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.sinkId !== undefined && (obj.sinkId = message.sinkId);
    message.params !== undefined &&
      (obj.params = message.params
        ? ExportParams.toJSON(message.params)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateExportRequest>, I>>(
    object: I
  ): CreateExportRequest {
    const message = { ...baseCreateExportRequest } as CreateExportRequest;
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
    message.groupId = object.groupId ?? "";
    message.sinkId = object.sinkId ?? "";
    message.params =
      object.params !== undefined && object.params !== null
        ? ExportParams.fromPartial(object.params)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateExportRequest.$type, CreateExportRequest);

const baseCreateExportRequest_LabelsEntry: object = {
  $type: "yandex.cloud.logging.v1.CreateExportRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateExportRequest_LabelsEntry = {
  $type: "yandex.cloud.logging.v1.CreateExportRequest.LabelsEntry" as const,

  encode(
    message: CreateExportRequest_LabelsEntry,
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
  ): CreateExportRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateExportRequest_LabelsEntry,
    } as CreateExportRequest_LabelsEntry;
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

  fromJSON(object: any): CreateExportRequest_LabelsEntry {
    const message = {
      ...baseCreateExportRequest_LabelsEntry,
    } as CreateExportRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateExportRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateExportRequest_LabelsEntry>, I>>(
    object: I
  ): CreateExportRequest_LabelsEntry {
    const message = {
      ...baseCreateExportRequest_LabelsEntry,
    } as CreateExportRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateExportRequest_LabelsEntry.$type,
  CreateExportRequest_LabelsEntry
);

const baseCreateExportMetadata: object = {
  $type: "yandex.cloud.logging.v1.CreateExportMetadata",
  exportId: "",
};

export const CreateExportMetadata = {
  $type: "yandex.cloud.logging.v1.CreateExportMetadata" as const,

  encode(
    message: CreateExportMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.exportId !== "") {
      writer.uint32(10).string(message.exportId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateExportMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateExportMetadata } as CreateExportMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exportId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateExportMetadata {
    const message = { ...baseCreateExportMetadata } as CreateExportMetadata;
    message.exportId =
      object.exportId !== undefined && object.exportId !== null
        ? String(object.exportId)
        : "";
    return message;
  },

  toJSON(message: CreateExportMetadata): unknown {
    const obj: any = {};
    message.exportId !== undefined && (obj.exportId = message.exportId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateExportMetadata>, I>>(
    object: I
  ): CreateExportMetadata {
    const message = { ...baseCreateExportMetadata } as CreateExportMetadata;
    message.exportId = object.exportId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateExportMetadata.$type, CreateExportMetadata);

const baseUpdateExportRequest: object = {
  $type: "yandex.cloud.logging.v1.UpdateExportRequest",
  exportId: "",
  name: "",
  description: "",
  groupId: "",
  sinkId: "",
};

export const UpdateExportRequest = {
  $type: "yandex.cloud.logging.v1.UpdateExportRequest" as const,

  encode(
    message: UpdateExportRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.exportId !== "") {
      writer.uint32(10).string(message.exportId);
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
      UpdateExportRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.logging.v1.UpdateExportRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.groupId !== "") {
      writer.uint32(50).string(message.groupId);
    }
    if (message.sinkId !== "") {
      writer.uint32(58).string(message.sinkId);
    }
    if (message.params !== undefined) {
      ExportParams.encode(message.params, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateExportRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateExportRequest } as UpdateExportRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exportId = reader.string();
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
          const entry5 = UpdateExportRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.groupId = reader.string();
          break;
        case 7:
          message.sinkId = reader.string();
          break;
        case 8:
          message.params = ExportParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateExportRequest {
    const message = { ...baseUpdateExportRequest } as UpdateExportRequest;
    message.exportId =
      object.exportId !== undefined && object.exportId !== null
        ? String(object.exportId)
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
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? String(object.groupId)
        : "";
    message.sinkId =
      object.sinkId !== undefined && object.sinkId !== null
        ? String(object.sinkId)
        : "";
    message.params =
      object.params !== undefined && object.params !== null
        ? ExportParams.fromJSON(object.params)
        : undefined;
    return message;
  },

  toJSON(message: UpdateExportRequest): unknown {
    const obj: any = {};
    message.exportId !== undefined && (obj.exportId = message.exportId);
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
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.sinkId !== undefined && (obj.sinkId = message.sinkId);
    message.params !== undefined &&
      (obj.params = message.params
        ? ExportParams.toJSON(message.params)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateExportRequest>, I>>(
    object: I
  ): UpdateExportRequest {
    const message = { ...baseUpdateExportRequest } as UpdateExportRequest;
    message.exportId = object.exportId ?? "";
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
    message.groupId = object.groupId ?? "";
    message.sinkId = object.sinkId ?? "";
    message.params =
      object.params !== undefined && object.params !== null
        ? ExportParams.fromPartial(object.params)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateExportRequest.$type, UpdateExportRequest);

const baseUpdateExportRequest_LabelsEntry: object = {
  $type: "yandex.cloud.logging.v1.UpdateExportRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateExportRequest_LabelsEntry = {
  $type: "yandex.cloud.logging.v1.UpdateExportRequest.LabelsEntry" as const,

  encode(
    message: UpdateExportRequest_LabelsEntry,
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
  ): UpdateExportRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateExportRequest_LabelsEntry,
    } as UpdateExportRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateExportRequest_LabelsEntry {
    const message = {
      ...baseUpdateExportRequest_LabelsEntry,
    } as UpdateExportRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateExportRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateExportRequest_LabelsEntry>, I>>(
    object: I
  ): UpdateExportRequest_LabelsEntry {
    const message = {
      ...baseUpdateExportRequest_LabelsEntry,
    } as UpdateExportRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateExportRequest_LabelsEntry.$type,
  UpdateExportRequest_LabelsEntry
);

const baseUpdateExportMetadata: object = {
  $type: "yandex.cloud.logging.v1.UpdateExportMetadata",
  exportId: "",
};

export const UpdateExportMetadata = {
  $type: "yandex.cloud.logging.v1.UpdateExportMetadata" as const,

  encode(
    message: UpdateExportMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.exportId !== "") {
      writer.uint32(10).string(message.exportId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateExportMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateExportMetadata } as UpdateExportMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exportId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateExportMetadata {
    const message = { ...baseUpdateExportMetadata } as UpdateExportMetadata;
    message.exportId =
      object.exportId !== undefined && object.exportId !== null
        ? String(object.exportId)
        : "";
    return message;
  },

  toJSON(message: UpdateExportMetadata): unknown {
    const obj: any = {};
    message.exportId !== undefined && (obj.exportId = message.exportId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateExportMetadata>, I>>(
    object: I
  ): UpdateExportMetadata {
    const message = { ...baseUpdateExportMetadata } as UpdateExportMetadata;
    message.exportId = object.exportId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateExportMetadata.$type, UpdateExportMetadata);

const baseDeleteExportRequest: object = {
  $type: "yandex.cloud.logging.v1.DeleteExportRequest",
  exportId: "",
};

export const DeleteExportRequest = {
  $type: "yandex.cloud.logging.v1.DeleteExportRequest" as const,

  encode(
    message: DeleteExportRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.exportId !== "") {
      writer.uint32(10).string(message.exportId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteExportRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteExportRequest } as DeleteExportRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exportId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteExportRequest {
    const message = { ...baseDeleteExportRequest } as DeleteExportRequest;
    message.exportId =
      object.exportId !== undefined && object.exportId !== null
        ? String(object.exportId)
        : "";
    return message;
  },

  toJSON(message: DeleteExportRequest): unknown {
    const obj: any = {};
    message.exportId !== undefined && (obj.exportId = message.exportId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteExportRequest>, I>>(
    object: I
  ): DeleteExportRequest {
    const message = { ...baseDeleteExportRequest } as DeleteExportRequest;
    message.exportId = object.exportId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteExportRequest.$type, DeleteExportRequest);

const baseDeleteExportMetadata: object = {
  $type: "yandex.cloud.logging.v1.DeleteExportMetadata",
  exportId: "",
};

export const DeleteExportMetadata = {
  $type: "yandex.cloud.logging.v1.DeleteExportMetadata" as const,

  encode(
    message: DeleteExportMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.exportId !== "") {
      writer.uint32(10).string(message.exportId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteExportMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteExportMetadata } as DeleteExportMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exportId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteExportMetadata {
    const message = { ...baseDeleteExportMetadata } as DeleteExportMetadata;
    message.exportId =
      object.exportId !== undefined && object.exportId !== null
        ? String(object.exportId)
        : "";
    return message;
  },

  toJSON(message: DeleteExportMetadata): unknown {
    const obj: any = {};
    message.exportId !== undefined && (obj.exportId = message.exportId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteExportMetadata>, I>>(
    object: I
  ): DeleteExportMetadata {
    const message = { ...baseDeleteExportMetadata } as DeleteExportMetadata;
    message.exportId = object.exportId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteExportMetadata.$type, DeleteExportMetadata);

const baseListExportOperationsRequest: object = {
  $type: "yandex.cloud.logging.v1.ListExportOperationsRequest",
  exportId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListExportOperationsRequest = {
  $type: "yandex.cloud.logging.v1.ListExportOperationsRequest" as const,

  encode(
    message: ListExportOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.exportId !== "") {
      writer.uint32(10).string(message.exportId);
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
  ): ListExportOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListExportOperationsRequest,
    } as ListExportOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exportId = reader.string();
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

  fromJSON(object: any): ListExportOperationsRequest {
    const message = {
      ...baseListExportOperationsRequest,
    } as ListExportOperationsRequest;
    message.exportId =
      object.exportId !== undefined && object.exportId !== null
        ? String(object.exportId)
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

  toJSON(message: ListExportOperationsRequest): unknown {
    const obj: any = {};
    message.exportId !== undefined && (obj.exportId = message.exportId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListExportOperationsRequest>, I>>(
    object: I
  ): ListExportOperationsRequest {
    const message = {
      ...baseListExportOperationsRequest,
    } as ListExportOperationsRequest;
    message.exportId = object.exportId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListExportOperationsRequest.$type,
  ListExportOperationsRequest
);

const baseListExportOperationsResponse: object = {
  $type: "yandex.cloud.logging.v1.ListExportOperationsResponse",
  nextPageToken: "",
};

export const ListExportOperationsResponse = {
  $type: "yandex.cloud.logging.v1.ListExportOperationsResponse" as const,

  encode(
    message: ListExportOperationsResponse,
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
  ): ListExportOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListExportOperationsResponse,
    } as ListExportOperationsResponse;
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

  fromJSON(object: any): ListExportOperationsResponse {
    const message = {
      ...baseListExportOperationsResponse,
    } as ListExportOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListExportOperationsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<ListExportOperationsResponse>, I>>(
    object: I
  ): ListExportOperationsResponse {
    const message = {
      ...baseListExportOperationsResponse,
    } as ListExportOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListExportOperationsResponse.$type,
  ListExportOperationsResponse
);

/** A set of methods for managing log exports. */
export const ExportServiceService = {
  /** Run new logs export from log group to sink */
  run: {
    path: "/yandex.cloud.logging.v1.ExportService/Run",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RunExportRequest) =>
      Buffer.from(RunExportRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RunExportRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Returns the specified export.
   *
   * To get the list of all available exports, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.logging.v1.ExportService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetExportRequest) =>
      Buffer.from(GetExportRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetExportRequest.decode(value),
    responseSerialize: (value: Export) =>
      Buffer.from(Export.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Export.decode(value),
  },
  /** Retrieves the list of exports in the specified folder. */
  list: {
    path: "/yandex.cloud.logging.v1.ExportService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListExportsRequest) =>
      Buffer.from(ListExportsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListExportsRequest.decode(value),
    responseSerialize: (value: ListExportsResponse) =>
      Buffer.from(ListExportsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListExportsResponse.decode(value),
  },
  /** Creates a export in the specified folder. */
  create: {
    path: "/yandex.cloud.logging.v1.ExportService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateExportRequest) =>
      Buffer.from(CreateExportRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateExportRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified export. */
  update: {
    path: "/yandex.cloud.logging.v1.ExportService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateExportRequest) =>
      Buffer.from(UpdateExportRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateExportRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified export. */
  delete: {
    path: "/yandex.cloud.logging.v1.ExportService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteExportRequest) =>
      Buffer.from(DeleteExportRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteExportRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified export. */
  listOperations: {
    path: "/yandex.cloud.logging.v1.ExportService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListExportOperationsRequest) =>
      Buffer.from(ListExportOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListExportOperationsRequest.decode(value),
    responseSerialize: (value: ListExportOperationsResponse) =>
      Buffer.from(ListExportOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListExportOperationsResponse.decode(value),
  },
  /** Lists existing access bindings for the specified export. */
  listAccessBindings: {
    path: "/yandex.cloud.logging.v1.ExportService/ListAccessBindings",
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
  /** Sets access bindings for the specified export. */
  setAccessBindings: {
    path: "/yandex.cloud.logging.v1.ExportService/SetAccessBindings",
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
  /** Updates access bindings for the specified export. */
  updateAccessBindings: {
    path: "/yandex.cloud.logging.v1.ExportService/UpdateAccessBindings",
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

export interface ExportServiceServer extends UntypedServiceImplementation {
  /** Run new logs export from log group to sink */
  run: handleUnaryCall<RunExportRequest, Operation>;
  /**
   * Returns the specified export.
   *
   * To get the list of all available exports, make a [List] request.
   */
  get: handleUnaryCall<GetExportRequest, Export>;
  /** Retrieves the list of exports in the specified folder. */
  list: handleUnaryCall<ListExportsRequest, ListExportsResponse>;
  /** Creates a export in the specified folder. */
  create: handleUnaryCall<CreateExportRequest, Operation>;
  /** Updates the specified export. */
  update: handleUnaryCall<UpdateExportRequest, Operation>;
  /** Deletes the specified export. */
  delete: handleUnaryCall<DeleteExportRequest, Operation>;
  /** Lists operations for the specified export. */
  listOperations: handleUnaryCall<
    ListExportOperationsRequest,
    ListExportOperationsResponse
  >;
  /** Lists existing access bindings for the specified export. */
  listAccessBindings: handleUnaryCall<
    ListAccessBindingsRequest,
    ListAccessBindingsResponse
  >;
  /** Sets access bindings for the specified export. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the specified export. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface ExportServiceClient extends Client {
  /** Run new logs export from log group to sink */
  run(
    request: RunExportRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  run(
    request: RunExportRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  run(
    request: RunExportRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Returns the specified export.
   *
   * To get the list of all available exports, make a [List] request.
   */
  get(
    request: GetExportRequest,
    callback: (error: ServiceError | null, response: Export) => void
  ): ClientUnaryCall;
  get(
    request: GetExportRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Export) => void
  ): ClientUnaryCall;
  get(
    request: GetExportRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Export) => void
  ): ClientUnaryCall;
  /** Retrieves the list of exports in the specified folder. */
  list(
    request: ListExportsRequest,
    callback: (
      error: ServiceError | null,
      response: ListExportsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListExportsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListExportsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListExportsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListExportsResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates a export in the specified folder. */
  create(
    request: CreateExportRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateExportRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateExportRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified export. */
  update(
    request: UpdateExportRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateExportRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateExportRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified export. */
  delete(
    request: DeleteExportRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteExportRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteExportRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified export. */
  listOperations(
    request: ListExportOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListExportOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListExportOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListExportOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListExportOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListExportOperationsResponse
    ) => void
  ): ClientUnaryCall;
  /** Lists existing access bindings for the specified export. */
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
  /** Sets access bindings for the specified export. */
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
  /** Updates access bindings for the specified export. */
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

export const ExportServiceClient = makeGenericClientConstructor(
  ExportServiceService,
  "yandex.cloud.logging.v1.ExportService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): ExportServiceClient;
  service: typeof ExportServiceService;
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
