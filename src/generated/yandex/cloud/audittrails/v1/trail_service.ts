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
  Trail_Destination,
  Trail_Filter,
  Trail_FilteringPolicy,
  Trail,
} from "../../../../yandex/cloud/audittrails/v1/trail";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import {
  ListAccessBindingsRequest,
  ListAccessBindingsResponse,
  SetAccessBindingsRequest,
  UpdateAccessBindingsRequest,
} from "../../../../yandex/cloud/access/access";

export const protobufPackage = "yandex.cloud.audittrails.v1";

export interface GetTrailRequest {
  $type: "yandex.cloud.audittrails.v1.GetTrailRequest";
  /**
   * ID of the trail to return.
   *
   * To get a trail ID make a [List] request.
   */
  trailId: string;
}

export interface ListTrailsRequest {
  $type: "yandex.cloud.audittrails.v1.ListTrailsRequest";
  /** ID of the folder to list trails in. */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListTrailsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListTrailsRequest.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters subscription locks listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently you can use filtering on [Trail.name, Trail.created_at] fields.
   * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
   * 3. The value. Must be in double quotes `""`. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name="my-name"`.
   */
  filter: string;
  /**
   * By which column the listing should be ordered and in which direction.
   * format is "<field> desc|acs"
   */
  orderBy: string;
}

export interface ListTrailsResponse {
  $type: "yandex.cloud.audittrails.v1.ListTrailsResponse";
  /** List of trails in the specified folder. */
  trails: Trail[];
  /**
   * This token allows you to get the next page of results for list requests. If the number
   * of results is greater than the specified [ListTrailsRequest.page_size], use
   * the `next_page_token` as the value for the [ListTrailsRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateTrailRequest {
  $type: "yandex.cloud.audittrails.v1.CreateTrailRequest";
  /** ID of the folder to create a trail in. */
  folderId: string;
  /** Name of the trail. */
  name: string;
  /** Description of the trail. */
  description: string;
  /**
   * Custom labels for the secret as `key:value` pairs. Maximum 64 per key.
   * For example, `"type": "critical"` or `"source": "dictionary"`.
   */
  labels: { [key: string]: string };
  /** Destination configuration for the trail */
  destination?: Trail_Destination;
  /** Service account ID of the trail */
  serviceAccountId: string;
  /**
   * Event filtering configuration of the trail
   * deprecated: use filtering_policy instead
   *
   * @deprecated
   */
  filter?: Trail_Filter;
  /** Event filtering policy of the trail */
  filteringPolicy?: Trail_FilteringPolicy;
}

export interface CreateTrailRequest_LabelsEntry {
  $type: "yandex.cloud.audittrails.v1.CreateTrailRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateTrailRequest {
  $type: "yandex.cloud.audittrails.v1.UpdateTrailRequest";
  /** ID of the trail to update. */
  trailId: string;
  /** Field mask that specifies which attributes of the trail are going to be updated. */
  updateMask?: FieldMask;
  /** New name of the trail. */
  name: string;
  /** New description of the trail. */
  description: string;
  /** New custom labels for the secret as `key:value` pairs. Maximum 64 per key. */
  labels: { [key: string]: string };
  /** New destination configuration for the trail */
  destination?: Trail_Destination;
  /** New service account ID of the trail */
  serviceAccountId: string;
  /**
   * Updated filtering configuration of the trail
   * deprecated: use filtering_policy instead
   *
   * @deprecated
   */
  filter?: Trail_Filter;
  /** Updated event filtering policy */
  filteringPolicy?: Trail_FilteringPolicy;
}

export interface UpdateTrailRequest_LabelsEntry {
  $type: "yandex.cloud.audittrails.v1.UpdateTrailRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface DeleteTrailRequest {
  $type: "yandex.cloud.audittrails.v1.DeleteTrailRequest";
  /** ID of the trail to be deleted. */
  trailId: string;
}

export interface CreateTrailMetadata {
  $type: "yandex.cloud.audittrails.v1.CreateTrailMetadata";
  /** ID of the trail that is being created */
  trailId: string;
}

export interface UpdateTrailMetadata {
  $type: "yandex.cloud.audittrails.v1.UpdateTrailMetadata";
  /** ID of the trail that is being updated */
  trailId: string;
}

export interface DeleteTrailMetadata {
  $type: "yandex.cloud.audittrails.v1.DeleteTrailMetadata";
  /** ID of the trail that is being deleted */
  trailId: string;
}

export interface ListTrailOperationsRequest {
  $type: "yandex.cloud.audittrails.v1.ListTrailOperationsRequest";
  /** ID of the trail to get operations for. */
  trailId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `page_size`, the service returns a [ListTrailOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListTrailOperationsRequest.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListTrailOperationsResponse {
  $type: "yandex.cloud.audittrails.v1.ListTrailOperationsResponse";
  /** List of operations for the specified trail. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListTrailOperationsResponse.page_size], use the `next_page_token` as the value
   * for the [ListTrailOperationsResponse.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

const baseGetTrailRequest: object = {
  $type: "yandex.cloud.audittrails.v1.GetTrailRequest",
  trailId: "",
};

export const GetTrailRequest = {
  $type: "yandex.cloud.audittrails.v1.GetTrailRequest" as const,

  encode(
    message: GetTrailRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.trailId !== "") {
      writer.uint32(10).string(message.trailId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTrailRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetTrailRequest } as GetTrailRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trailId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTrailRequest {
    const message = { ...baseGetTrailRequest } as GetTrailRequest;
    message.trailId =
      object.trailId !== undefined && object.trailId !== null
        ? String(object.trailId)
        : "";
    return message;
  },

  toJSON(message: GetTrailRequest): unknown {
    const obj: any = {};
    message.trailId !== undefined && (obj.trailId = message.trailId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetTrailRequest>, I>>(
    object: I
  ): GetTrailRequest {
    const message = { ...baseGetTrailRequest } as GetTrailRequest;
    message.trailId = object.trailId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetTrailRequest.$type, GetTrailRequest);

const baseListTrailsRequest: object = {
  $type: "yandex.cloud.audittrails.v1.ListTrailsRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
  orderBy: "",
};

export const ListTrailsRequest = {
  $type: "yandex.cloud.audittrails.v1.ListTrailsRequest" as const,

  encode(
    message: ListTrailsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
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
    if (message.orderBy !== "") {
      writer.uint32(42).string(message.orderBy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTrailsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListTrailsRequest } as ListTrailsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
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
        case 5:
          message.orderBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListTrailsRequest {
    const message = { ...baseListTrailsRequest } as ListTrailsRequest;
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
    message.orderBy =
      object.orderBy !== undefined && object.orderBy !== null
        ? String(object.orderBy)
        : "";
    return message;
  },

  toJSON(message: ListTrailsRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    message.orderBy !== undefined && (obj.orderBy = message.orderBy);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListTrailsRequest>, I>>(
    object: I
  ): ListTrailsRequest {
    const message = { ...baseListTrailsRequest } as ListTrailsRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListTrailsRequest.$type, ListTrailsRequest);

const baseListTrailsResponse: object = {
  $type: "yandex.cloud.audittrails.v1.ListTrailsResponse",
  nextPageToken: "",
};

export const ListTrailsResponse = {
  $type: "yandex.cloud.audittrails.v1.ListTrailsResponse" as const,

  encode(
    message: ListTrailsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.trails) {
      Trail.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTrailsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListTrailsResponse } as ListTrailsResponse;
    message.trails = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trails.push(Trail.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListTrailsResponse {
    const message = { ...baseListTrailsResponse } as ListTrailsResponse;
    message.trails = (object.trails ?? []).map((e: any) => Trail.fromJSON(e));
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListTrailsResponse): unknown {
    const obj: any = {};
    if (message.trails) {
      obj.trails = message.trails.map((e) => (e ? Trail.toJSON(e) : undefined));
    } else {
      obj.trails = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListTrailsResponse>, I>>(
    object: I
  ): ListTrailsResponse {
    const message = { ...baseListTrailsResponse } as ListTrailsResponse;
    message.trails = object.trails?.map((e) => Trail.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListTrailsResponse.$type, ListTrailsResponse);

const baseCreateTrailRequest: object = {
  $type: "yandex.cloud.audittrails.v1.CreateTrailRequest",
  folderId: "",
  name: "",
  description: "",
  serviceAccountId: "",
};

export const CreateTrailRequest = {
  $type: "yandex.cloud.audittrails.v1.CreateTrailRequest" as const,

  encode(
    message: CreateTrailRequest,
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
      CreateTrailRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.audittrails.v1.CreateTrailRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.destination !== undefined) {
      Trail_Destination.encode(
        message.destination,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(50).string(message.serviceAccountId);
    }
    if (message.filter !== undefined) {
      Trail_Filter.encode(message.filter, writer.uint32(58).fork()).ldelim();
    }
    if (message.filteringPolicy !== undefined) {
      Trail_FilteringPolicy.encode(
        message.filteringPolicy,
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTrailRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateTrailRequest } as CreateTrailRequest;
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
          const entry4 = CreateTrailRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.destination = Trail_Destination.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.serviceAccountId = reader.string();
          break;
        case 7:
          message.filter = Trail_Filter.decode(reader, reader.uint32());
          break;
        case 8:
          message.filteringPolicy = Trail_FilteringPolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateTrailRequest {
    const message = { ...baseCreateTrailRequest } as CreateTrailRequest;
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
    message.destination =
      object.destination !== undefined && object.destination !== null
        ? Trail_Destination.fromJSON(object.destination)
        : undefined;
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.filter =
      object.filter !== undefined && object.filter !== null
        ? Trail_Filter.fromJSON(object.filter)
        : undefined;
    message.filteringPolicy =
      object.filteringPolicy !== undefined && object.filteringPolicy !== null
        ? Trail_FilteringPolicy.fromJSON(object.filteringPolicy)
        : undefined;
    return message;
  },

  toJSON(message: CreateTrailRequest): unknown {
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
    message.destination !== undefined &&
      (obj.destination = message.destination
        ? Trail_Destination.toJSON(message.destination)
        : undefined);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.filter !== undefined &&
      (obj.filter = message.filter
        ? Trail_Filter.toJSON(message.filter)
        : undefined);
    message.filteringPolicy !== undefined &&
      (obj.filteringPolicy = message.filteringPolicy
        ? Trail_FilteringPolicy.toJSON(message.filteringPolicy)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateTrailRequest>, I>>(
    object: I
  ): CreateTrailRequest {
    const message = { ...baseCreateTrailRequest } as CreateTrailRequest;
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
    message.destination =
      object.destination !== undefined && object.destination !== null
        ? Trail_Destination.fromPartial(object.destination)
        : undefined;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.filter =
      object.filter !== undefined && object.filter !== null
        ? Trail_Filter.fromPartial(object.filter)
        : undefined;
    message.filteringPolicy =
      object.filteringPolicy !== undefined && object.filteringPolicy !== null
        ? Trail_FilteringPolicy.fromPartial(object.filteringPolicy)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateTrailRequest.$type, CreateTrailRequest);

const baseCreateTrailRequest_LabelsEntry: object = {
  $type: "yandex.cloud.audittrails.v1.CreateTrailRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateTrailRequest_LabelsEntry = {
  $type: "yandex.cloud.audittrails.v1.CreateTrailRequest.LabelsEntry" as const,

  encode(
    message: CreateTrailRequest_LabelsEntry,
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
  ): CreateTrailRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateTrailRequest_LabelsEntry,
    } as CreateTrailRequest_LabelsEntry;
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

  fromJSON(object: any): CreateTrailRequest_LabelsEntry {
    const message = {
      ...baseCreateTrailRequest_LabelsEntry,
    } as CreateTrailRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateTrailRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateTrailRequest_LabelsEntry>, I>>(
    object: I
  ): CreateTrailRequest_LabelsEntry {
    const message = {
      ...baseCreateTrailRequest_LabelsEntry,
    } as CreateTrailRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateTrailRequest_LabelsEntry.$type,
  CreateTrailRequest_LabelsEntry
);

const baseUpdateTrailRequest: object = {
  $type: "yandex.cloud.audittrails.v1.UpdateTrailRequest",
  trailId: "",
  name: "",
  description: "",
  serviceAccountId: "",
};

export const UpdateTrailRequest = {
  $type: "yandex.cloud.audittrails.v1.UpdateTrailRequest" as const,

  encode(
    message: UpdateTrailRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.trailId !== "") {
      writer.uint32(10).string(message.trailId);
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
      UpdateTrailRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.audittrails.v1.UpdateTrailRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.destination !== undefined) {
      Trail_Destination.encode(
        message.destination,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(58).string(message.serviceAccountId);
    }
    if (message.filter !== undefined) {
      Trail_Filter.encode(message.filter, writer.uint32(66).fork()).ldelim();
    }
    if (message.filteringPolicy !== undefined) {
      Trail_FilteringPolicy.encode(
        message.filteringPolicy,
        writer.uint32(74).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTrailRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateTrailRequest } as UpdateTrailRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trailId = reader.string();
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
          const entry5 = UpdateTrailRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.destination = Trail_Destination.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.serviceAccountId = reader.string();
          break;
        case 8:
          message.filter = Trail_Filter.decode(reader, reader.uint32());
          break;
        case 9:
          message.filteringPolicy = Trail_FilteringPolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateTrailRequest {
    const message = { ...baseUpdateTrailRequest } as UpdateTrailRequest;
    message.trailId =
      object.trailId !== undefined && object.trailId !== null
        ? String(object.trailId)
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
    message.destination =
      object.destination !== undefined && object.destination !== null
        ? Trail_Destination.fromJSON(object.destination)
        : undefined;
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.filter =
      object.filter !== undefined && object.filter !== null
        ? Trail_Filter.fromJSON(object.filter)
        : undefined;
    message.filteringPolicy =
      object.filteringPolicy !== undefined && object.filteringPolicy !== null
        ? Trail_FilteringPolicy.fromJSON(object.filteringPolicy)
        : undefined;
    return message;
  },

  toJSON(message: UpdateTrailRequest): unknown {
    const obj: any = {};
    message.trailId !== undefined && (obj.trailId = message.trailId);
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
    message.destination !== undefined &&
      (obj.destination = message.destination
        ? Trail_Destination.toJSON(message.destination)
        : undefined);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.filter !== undefined &&
      (obj.filter = message.filter
        ? Trail_Filter.toJSON(message.filter)
        : undefined);
    message.filteringPolicy !== undefined &&
      (obj.filteringPolicy = message.filteringPolicy
        ? Trail_FilteringPolicy.toJSON(message.filteringPolicy)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateTrailRequest>, I>>(
    object: I
  ): UpdateTrailRequest {
    const message = { ...baseUpdateTrailRequest } as UpdateTrailRequest;
    message.trailId = object.trailId ?? "";
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
    message.destination =
      object.destination !== undefined && object.destination !== null
        ? Trail_Destination.fromPartial(object.destination)
        : undefined;
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.filter =
      object.filter !== undefined && object.filter !== null
        ? Trail_Filter.fromPartial(object.filter)
        : undefined;
    message.filteringPolicy =
      object.filteringPolicy !== undefined && object.filteringPolicy !== null
        ? Trail_FilteringPolicy.fromPartial(object.filteringPolicy)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateTrailRequest.$type, UpdateTrailRequest);

const baseUpdateTrailRequest_LabelsEntry: object = {
  $type: "yandex.cloud.audittrails.v1.UpdateTrailRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateTrailRequest_LabelsEntry = {
  $type: "yandex.cloud.audittrails.v1.UpdateTrailRequest.LabelsEntry" as const,

  encode(
    message: UpdateTrailRequest_LabelsEntry,
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
  ): UpdateTrailRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateTrailRequest_LabelsEntry,
    } as UpdateTrailRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateTrailRequest_LabelsEntry {
    const message = {
      ...baseUpdateTrailRequest_LabelsEntry,
    } as UpdateTrailRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateTrailRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateTrailRequest_LabelsEntry>, I>>(
    object: I
  ): UpdateTrailRequest_LabelsEntry {
    const message = {
      ...baseUpdateTrailRequest_LabelsEntry,
    } as UpdateTrailRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateTrailRequest_LabelsEntry.$type,
  UpdateTrailRequest_LabelsEntry
);

const baseDeleteTrailRequest: object = {
  $type: "yandex.cloud.audittrails.v1.DeleteTrailRequest",
  trailId: "",
};

export const DeleteTrailRequest = {
  $type: "yandex.cloud.audittrails.v1.DeleteTrailRequest" as const,

  encode(
    message: DeleteTrailRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.trailId !== "") {
      writer.uint32(10).string(message.trailId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteTrailRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteTrailRequest } as DeleteTrailRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trailId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteTrailRequest {
    const message = { ...baseDeleteTrailRequest } as DeleteTrailRequest;
    message.trailId =
      object.trailId !== undefined && object.trailId !== null
        ? String(object.trailId)
        : "";
    return message;
  },

  toJSON(message: DeleteTrailRequest): unknown {
    const obj: any = {};
    message.trailId !== undefined && (obj.trailId = message.trailId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteTrailRequest>, I>>(
    object: I
  ): DeleteTrailRequest {
    const message = { ...baseDeleteTrailRequest } as DeleteTrailRequest;
    message.trailId = object.trailId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteTrailRequest.$type, DeleteTrailRequest);

const baseCreateTrailMetadata: object = {
  $type: "yandex.cloud.audittrails.v1.CreateTrailMetadata",
  trailId: "",
};

export const CreateTrailMetadata = {
  $type: "yandex.cloud.audittrails.v1.CreateTrailMetadata" as const,

  encode(
    message: CreateTrailMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.trailId !== "") {
      writer.uint32(10).string(message.trailId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTrailMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateTrailMetadata } as CreateTrailMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trailId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateTrailMetadata {
    const message = { ...baseCreateTrailMetadata } as CreateTrailMetadata;
    message.trailId =
      object.trailId !== undefined && object.trailId !== null
        ? String(object.trailId)
        : "";
    return message;
  },

  toJSON(message: CreateTrailMetadata): unknown {
    const obj: any = {};
    message.trailId !== undefined && (obj.trailId = message.trailId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateTrailMetadata>, I>>(
    object: I
  ): CreateTrailMetadata {
    const message = { ...baseCreateTrailMetadata } as CreateTrailMetadata;
    message.trailId = object.trailId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateTrailMetadata.$type, CreateTrailMetadata);

const baseUpdateTrailMetadata: object = {
  $type: "yandex.cloud.audittrails.v1.UpdateTrailMetadata",
  trailId: "",
};

export const UpdateTrailMetadata = {
  $type: "yandex.cloud.audittrails.v1.UpdateTrailMetadata" as const,

  encode(
    message: UpdateTrailMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.trailId !== "") {
      writer.uint32(10).string(message.trailId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTrailMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateTrailMetadata } as UpdateTrailMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trailId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateTrailMetadata {
    const message = { ...baseUpdateTrailMetadata } as UpdateTrailMetadata;
    message.trailId =
      object.trailId !== undefined && object.trailId !== null
        ? String(object.trailId)
        : "";
    return message;
  },

  toJSON(message: UpdateTrailMetadata): unknown {
    const obj: any = {};
    message.trailId !== undefined && (obj.trailId = message.trailId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateTrailMetadata>, I>>(
    object: I
  ): UpdateTrailMetadata {
    const message = { ...baseUpdateTrailMetadata } as UpdateTrailMetadata;
    message.trailId = object.trailId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateTrailMetadata.$type, UpdateTrailMetadata);

const baseDeleteTrailMetadata: object = {
  $type: "yandex.cloud.audittrails.v1.DeleteTrailMetadata",
  trailId: "",
};

export const DeleteTrailMetadata = {
  $type: "yandex.cloud.audittrails.v1.DeleteTrailMetadata" as const,

  encode(
    message: DeleteTrailMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.trailId !== "") {
      writer.uint32(10).string(message.trailId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteTrailMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteTrailMetadata } as DeleteTrailMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trailId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteTrailMetadata {
    const message = { ...baseDeleteTrailMetadata } as DeleteTrailMetadata;
    message.trailId =
      object.trailId !== undefined && object.trailId !== null
        ? String(object.trailId)
        : "";
    return message;
  },

  toJSON(message: DeleteTrailMetadata): unknown {
    const obj: any = {};
    message.trailId !== undefined && (obj.trailId = message.trailId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteTrailMetadata>, I>>(
    object: I
  ): DeleteTrailMetadata {
    const message = { ...baseDeleteTrailMetadata } as DeleteTrailMetadata;
    message.trailId = object.trailId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteTrailMetadata.$type, DeleteTrailMetadata);

const baseListTrailOperationsRequest: object = {
  $type: "yandex.cloud.audittrails.v1.ListTrailOperationsRequest",
  trailId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListTrailOperationsRequest = {
  $type: "yandex.cloud.audittrails.v1.ListTrailOperationsRequest" as const,

  encode(
    message: ListTrailOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.trailId !== "") {
      writer.uint32(10).string(message.trailId);
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
  ): ListTrailOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListTrailOperationsRequest,
    } as ListTrailOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trailId = reader.string();
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

  fromJSON(object: any): ListTrailOperationsRequest {
    const message = {
      ...baseListTrailOperationsRequest,
    } as ListTrailOperationsRequest;
    message.trailId =
      object.trailId !== undefined && object.trailId !== null
        ? String(object.trailId)
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

  toJSON(message: ListTrailOperationsRequest): unknown {
    const obj: any = {};
    message.trailId !== undefined && (obj.trailId = message.trailId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListTrailOperationsRequest>, I>>(
    object: I
  ): ListTrailOperationsRequest {
    const message = {
      ...baseListTrailOperationsRequest,
    } as ListTrailOperationsRequest;
    message.trailId = object.trailId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListTrailOperationsRequest.$type,
  ListTrailOperationsRequest
);

const baseListTrailOperationsResponse: object = {
  $type: "yandex.cloud.audittrails.v1.ListTrailOperationsResponse",
  nextPageToken: "",
};

export const ListTrailOperationsResponse = {
  $type: "yandex.cloud.audittrails.v1.ListTrailOperationsResponse" as const,

  encode(
    message: ListTrailOperationsResponse,
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
  ): ListTrailOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListTrailOperationsResponse,
    } as ListTrailOperationsResponse;
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

  fromJSON(object: any): ListTrailOperationsResponse {
    const message = {
      ...baseListTrailOperationsResponse,
    } as ListTrailOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListTrailOperationsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<ListTrailOperationsResponse>, I>>(
    object: I
  ): ListTrailOperationsResponse {
    const message = {
      ...baseListTrailOperationsResponse,
    } as ListTrailOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListTrailOperationsResponse.$type,
  ListTrailOperationsResponse
);

/** A set of methods for managing trails. */
export const TrailServiceService = {
  /**
   * Returns the specified trail.
   *
   * To get the list of all available trails, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.audittrails.v1.TrailService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetTrailRequest) =>
      Buffer.from(GetTrailRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetTrailRequest.decode(value),
    responseSerialize: (value: Trail) =>
      Buffer.from(Trail.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Trail.decode(value),
  },
  /** Retrieves the list of trails in the specified folder. */
  list: {
    path: "/yandex.cloud.audittrails.v1.TrailService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListTrailsRequest) =>
      Buffer.from(ListTrailsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListTrailsRequest.decode(value),
    responseSerialize: (value: ListTrailsResponse) =>
      Buffer.from(ListTrailsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListTrailsResponse.decode(value),
  },
  /** Creates a trail in the specified folder. */
  create: {
    path: "/yandex.cloud.audittrails.v1.TrailService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateTrailRequest) =>
      Buffer.from(CreateTrailRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateTrailRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified trail. */
  update: {
    path: "/yandex.cloud.audittrails.v1.TrailService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateTrailRequest) =>
      Buffer.from(UpdateTrailRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateTrailRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified trail. */
  delete: {
    path: "/yandex.cloud.audittrails.v1.TrailService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteTrailRequest) =>
      Buffer.from(DeleteTrailRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteTrailRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified trail. */
  listOperations: {
    path: "/yandex.cloud.audittrails.v1.TrailService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListTrailOperationsRequest) =>
      Buffer.from(ListTrailOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListTrailOperationsRequest.decode(value),
    responseSerialize: (value: ListTrailOperationsResponse) =>
      Buffer.from(ListTrailOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListTrailOperationsResponse.decode(value),
  },
  /** Lists existing access bindings for the specified trail. */
  listAccessBindings: {
    path: "/yandex.cloud.audittrails.v1.TrailService/ListAccessBindings",
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
  /** Sets access bindings for the trail. */
  setAccessBindings: {
    path: "/yandex.cloud.audittrails.v1.TrailService/SetAccessBindings",
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
  /** Updates access bindings for the trail. */
  updateAccessBindings: {
    path: "/yandex.cloud.audittrails.v1.TrailService/UpdateAccessBindings",
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

export interface TrailServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified trail.
   *
   * To get the list of all available trails, make a [List] request.
   */
  get: handleUnaryCall<GetTrailRequest, Trail>;
  /** Retrieves the list of trails in the specified folder. */
  list: handleUnaryCall<ListTrailsRequest, ListTrailsResponse>;
  /** Creates a trail in the specified folder. */
  create: handleUnaryCall<CreateTrailRequest, Operation>;
  /** Updates the specified trail. */
  update: handleUnaryCall<UpdateTrailRequest, Operation>;
  /** Deletes the specified trail. */
  delete: handleUnaryCall<DeleteTrailRequest, Operation>;
  /** Lists operations for the specified trail. */
  listOperations: handleUnaryCall<
    ListTrailOperationsRequest,
    ListTrailOperationsResponse
  >;
  /** Lists existing access bindings for the specified trail. */
  listAccessBindings: handleUnaryCall<
    ListAccessBindingsRequest,
    ListAccessBindingsResponse
  >;
  /** Sets access bindings for the trail. */
  setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
  /** Updates access bindings for the trail. */
  updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}

export interface TrailServiceClient extends Client {
  /**
   * Returns the specified trail.
   *
   * To get the list of all available trails, make a [List] request.
   */
  get(
    request: GetTrailRequest,
    callback: (error: ServiceError | null, response: Trail) => void
  ): ClientUnaryCall;
  get(
    request: GetTrailRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Trail) => void
  ): ClientUnaryCall;
  get(
    request: GetTrailRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Trail) => void
  ): ClientUnaryCall;
  /** Retrieves the list of trails in the specified folder. */
  list(
    request: ListTrailsRequest,
    callback: (error: ServiceError | null, response: ListTrailsResponse) => void
  ): ClientUnaryCall;
  list(
    request: ListTrailsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListTrailsResponse) => void
  ): ClientUnaryCall;
  list(
    request: ListTrailsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListTrailsResponse) => void
  ): ClientUnaryCall;
  /** Creates a trail in the specified folder. */
  create(
    request: CreateTrailRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateTrailRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateTrailRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified trail. */
  update(
    request: UpdateTrailRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateTrailRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateTrailRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified trail. */
  delete(
    request: DeleteTrailRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteTrailRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteTrailRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified trail. */
  listOperations(
    request: ListTrailOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListTrailOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListTrailOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListTrailOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListTrailOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListTrailOperationsResponse
    ) => void
  ): ClientUnaryCall;
  /** Lists existing access bindings for the specified trail. */
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
  /** Sets access bindings for the trail. */
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
  /** Updates access bindings for the trail. */
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

export const TrailServiceClient = makeGenericClientConstructor(
  TrailServiceService,
  "yandex.cloud.audittrails.v1.TrailService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): TrailServiceClient;
  service: typeof TrailServiceService;
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
