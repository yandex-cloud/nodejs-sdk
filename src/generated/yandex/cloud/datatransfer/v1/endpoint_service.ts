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
  EndpointSettings,
  Endpoint,
} from "../../../../yandex/cloud/datatransfer/v1/endpoint";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.datatransfer.v1";

export interface GetEndpointRequest {
  $type: "yandex.cloud.datatransfer.v1.GetEndpointRequest";
  endpointId: string;
}

export interface ListEndpointsRequest {
  $type: "yandex.cloud.datatransfer.v1.ListEndpointsRequest";
  /** Identifier of the folder containing the endpoints to be listed. */
  folderId: string;
  /**
   * The maximum number of endpoints to be sent in the response message. If the
   * folder contains more endpoints than `page_size`, `next_page_token` will be
   * included
   * in the response message. Include it into the subsequent `ListEndpointRequest` to
   * fetch the next page. Defaults to `100` if not specified. The maximum allowed
   * value
   * for this field is `500`.
   */
  pageSize: number;
  /**
   * Opaque value identifying the endpoints page to be fetched. Should be empty in
   * the first `ListEndpointsRequest`. Subsequent requests should have this field
   * filled
   * with the `next_page_token` from the previous `ListEndpointsResponse`.
   */
  pageToken: string;
}

export interface ListEndpointsResponse {
  $type: "yandex.cloud.datatransfer.v1.ListEndpointsResponse";
  /**
   * The list of endpoints. If there are more endpoints in the folder, then
   * `next_page_token` is a non-empty string to be included into the subsequent
   * `ListEndpointsRequest` to fetch the next endpoints page.
   */
  endpoints: Endpoint[];
  /**
   * Opaque value identifying the next endpoints page. This field is empty if there
   * are no more endpoints in the folder. Otherwise, it is non-empty and should be
   * included in the subsequent `ListEndpointsRequest` to fetch the next endpoints
   * page.
   */
  nextPageToken: string;
}

export interface CreateEndpointRequest {
  $type: "yandex.cloud.datatransfer.v1.CreateEndpointRequest";
  folderId: string;
  name: string;
  description: string;
  labels: { [key: string]: string };
  settings?: EndpointSettings;
}

export interface CreateEndpointRequest_LabelsEntry {
  $type: "yandex.cloud.datatransfer.v1.CreateEndpointRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateEndpointMetadata {
  $type: "yandex.cloud.datatransfer.v1.CreateEndpointMetadata";
  endpointId: string;
}

export interface UpdateEndpointRequest {
  $type: "yandex.cloud.datatransfer.v1.UpdateEndpointRequest";
  /** Identifier of the endpoint to be updated. */
  endpointId: string;
  /** The new endpoint name. Must be unique within the folder. */
  name: string;
  /** The new description for the endpoint. */
  description: string;
  labels: { [key: string]: string };
  /** The new endpoint name. Must be unique within the folder. */
  settings?: EndpointSettings;
  /**
   * Field mask specifying endpoint fields to be updated. Semantics for this field is
   * described here:
   * <https://pkg.go.dev/google.golang.org/protobuf/types/known/fieldmaskpb#FieldMask>
   * The only exception: if the repeated field is specified in the mask, then
   * the new value replaces the old one instead of being appended to the old one.
   */
  updateMask?: FieldMask;
}

export interface UpdateEndpointRequest_LabelsEntry {
  $type: "yandex.cloud.datatransfer.v1.UpdateEndpointRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateEndpointMetadata {
  $type: "yandex.cloud.datatransfer.v1.UpdateEndpointMetadata";
  endpointId: string;
}

export interface DeleteEndpointRequest {
  $type: "yandex.cloud.datatransfer.v1.DeleteEndpointRequest";
  endpointId: string;
}

export interface DeleteEndpointMetadata {
  $type: "yandex.cloud.datatransfer.v1.DeleteEndpointMetadata";
  endpointId: string;
}

const baseGetEndpointRequest: object = {
  $type: "yandex.cloud.datatransfer.v1.GetEndpointRequest",
  endpointId: "",
};

export const GetEndpointRequest = {
  $type: "yandex.cloud.datatransfer.v1.GetEndpointRequest" as const,

  encode(
    message: GetEndpointRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.endpointId !== "") {
      writer.uint32(10).string(message.endpointId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEndpointRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetEndpointRequest } as GetEndpointRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.endpointId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetEndpointRequest {
    const message = { ...baseGetEndpointRequest } as GetEndpointRequest;
    message.endpointId =
      object.endpointId !== undefined && object.endpointId !== null
        ? String(object.endpointId)
        : "";
    return message;
  },

  toJSON(message: GetEndpointRequest): unknown {
    const obj: any = {};
    message.endpointId !== undefined && (obj.endpointId = message.endpointId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetEndpointRequest>, I>>(
    object: I
  ): GetEndpointRequest {
    const message = { ...baseGetEndpointRequest } as GetEndpointRequest;
    message.endpointId = object.endpointId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetEndpointRequest.$type, GetEndpointRequest);

const baseListEndpointsRequest: object = {
  $type: "yandex.cloud.datatransfer.v1.ListEndpointsRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListEndpointsRequest = {
  $type: "yandex.cloud.datatransfer.v1.ListEndpointsRequest" as const,

  encode(
    message: ListEndpointsRequest,
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
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListEndpointsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListEndpointsRequest } as ListEndpointsRequest;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListEndpointsRequest {
    const message = { ...baseListEndpointsRequest } as ListEndpointsRequest;
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
    return message;
  },

  toJSON(message: ListEndpointsRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListEndpointsRequest>, I>>(
    object: I
  ): ListEndpointsRequest {
    const message = { ...baseListEndpointsRequest } as ListEndpointsRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListEndpointsRequest.$type, ListEndpointsRequest);

const baseListEndpointsResponse: object = {
  $type: "yandex.cloud.datatransfer.v1.ListEndpointsResponse",
  nextPageToken: "",
};

export const ListEndpointsResponse = {
  $type: "yandex.cloud.datatransfer.v1.ListEndpointsResponse" as const,

  encode(
    message: ListEndpointsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.endpoints) {
      Endpoint.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListEndpointsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListEndpointsResponse } as ListEndpointsResponse;
    message.endpoints = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.endpoints.push(Endpoint.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListEndpointsResponse {
    const message = { ...baseListEndpointsResponse } as ListEndpointsResponse;
    message.endpoints = (object.endpoints ?? []).map((e: any) =>
      Endpoint.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListEndpointsResponse): unknown {
    const obj: any = {};
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map((e) =>
        e ? Endpoint.toJSON(e) : undefined
      );
    } else {
      obj.endpoints = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListEndpointsResponse>, I>>(
    object: I
  ): ListEndpointsResponse {
    const message = { ...baseListEndpointsResponse } as ListEndpointsResponse;
    message.endpoints =
      object.endpoints?.map((e) => Endpoint.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListEndpointsResponse.$type, ListEndpointsResponse);

const baseCreateEndpointRequest: object = {
  $type: "yandex.cloud.datatransfer.v1.CreateEndpointRequest",
  folderId: "",
  name: "",
  description: "",
};

export const CreateEndpointRequest = {
  $type: "yandex.cloud.datatransfer.v1.CreateEndpointRequest" as const,

  encode(
    message: CreateEndpointRequest,
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
      CreateEndpointRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.datatransfer.v1.CreateEndpointRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.settings !== undefined) {
      EndpointSettings.encode(
        message.settings,
        writer.uint32(418).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateEndpointRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateEndpointRequest } as CreateEndpointRequest;
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
          const entry4 = CreateEndpointRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 52:
          message.settings = EndpointSettings.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateEndpointRequest {
    const message = { ...baseCreateEndpointRequest } as CreateEndpointRequest;
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
    message.settings =
      object.settings !== undefined && object.settings !== null
        ? EndpointSettings.fromJSON(object.settings)
        : undefined;
    return message;
  },

  toJSON(message: CreateEndpointRequest): unknown {
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
    message.settings !== undefined &&
      (obj.settings = message.settings
        ? EndpointSettings.toJSON(message.settings)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateEndpointRequest>, I>>(
    object: I
  ): CreateEndpointRequest {
    const message = { ...baseCreateEndpointRequest } as CreateEndpointRequest;
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
    message.settings =
      object.settings !== undefined && object.settings !== null
        ? EndpointSettings.fromPartial(object.settings)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateEndpointRequest.$type, CreateEndpointRequest);

const baseCreateEndpointRequest_LabelsEntry: object = {
  $type: "yandex.cloud.datatransfer.v1.CreateEndpointRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateEndpointRequest_LabelsEntry = {
  $type:
    "yandex.cloud.datatransfer.v1.CreateEndpointRequest.LabelsEntry" as const,

  encode(
    message: CreateEndpointRequest_LabelsEntry,
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
  ): CreateEndpointRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateEndpointRequest_LabelsEntry,
    } as CreateEndpointRequest_LabelsEntry;
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

  fromJSON(object: any): CreateEndpointRequest_LabelsEntry {
    const message = {
      ...baseCreateEndpointRequest_LabelsEntry,
    } as CreateEndpointRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateEndpointRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateEndpointRequest_LabelsEntry>, I>
  >(object: I): CreateEndpointRequest_LabelsEntry {
    const message = {
      ...baseCreateEndpointRequest_LabelsEntry,
    } as CreateEndpointRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateEndpointRequest_LabelsEntry.$type,
  CreateEndpointRequest_LabelsEntry
);

const baseCreateEndpointMetadata: object = {
  $type: "yandex.cloud.datatransfer.v1.CreateEndpointMetadata",
  endpointId: "",
};

export const CreateEndpointMetadata = {
  $type: "yandex.cloud.datatransfer.v1.CreateEndpointMetadata" as const,

  encode(
    message: CreateEndpointMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.endpointId !== "") {
      writer.uint32(10).string(message.endpointId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateEndpointMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateEndpointMetadata } as CreateEndpointMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.endpointId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateEndpointMetadata {
    const message = { ...baseCreateEndpointMetadata } as CreateEndpointMetadata;
    message.endpointId =
      object.endpointId !== undefined && object.endpointId !== null
        ? String(object.endpointId)
        : "";
    return message;
  },

  toJSON(message: CreateEndpointMetadata): unknown {
    const obj: any = {};
    message.endpointId !== undefined && (obj.endpointId = message.endpointId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateEndpointMetadata>, I>>(
    object: I
  ): CreateEndpointMetadata {
    const message = { ...baseCreateEndpointMetadata } as CreateEndpointMetadata;
    message.endpointId = object.endpointId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateEndpointMetadata.$type, CreateEndpointMetadata);

const baseUpdateEndpointRequest: object = {
  $type: "yandex.cloud.datatransfer.v1.UpdateEndpointRequest",
  endpointId: "",
  name: "",
  description: "",
};

export const UpdateEndpointRequest = {
  $type: "yandex.cloud.datatransfer.v1.UpdateEndpointRequest" as const,

  encode(
    message: UpdateEndpointRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.endpointId !== "") {
      writer.uint32(82).string(message.endpointId);
    }
    if (message.name !== "") {
      writer.uint32(90).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(98).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateEndpointRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.datatransfer.v1.UpdateEndpointRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(106).fork()
      ).ldelim();
    });
    if (message.settings !== undefined) {
      EndpointSettings.encode(
        message.settings,
        writer.uint32(418).fork()
      ).ldelim();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(482).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateEndpointRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateEndpointRequest } as UpdateEndpointRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 10:
          message.endpointId = reader.string();
          break;
        case 11:
          message.name = reader.string();
          break;
        case 12:
          message.description = reader.string();
          break;
        case 13:
          const entry13 = UpdateEndpointRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry13.value !== undefined) {
            message.labels[entry13.key] = entry13.value;
          }
          break;
        case 52:
          message.settings = EndpointSettings.decode(reader, reader.uint32());
          break;
        case 60:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateEndpointRequest {
    const message = { ...baseUpdateEndpointRequest } as UpdateEndpointRequest;
    message.endpointId =
      object.endpointId !== undefined && object.endpointId !== null
        ? String(object.endpointId)
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
    message.settings =
      object.settings !== undefined && object.settings !== null
        ? EndpointSettings.fromJSON(object.settings)
        : undefined;
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromJSON(object.updateMask)
        : undefined;
    return message;
  },

  toJSON(message: UpdateEndpointRequest): unknown {
    const obj: any = {};
    message.endpointId !== undefined && (obj.endpointId = message.endpointId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.settings !== undefined &&
      (obj.settings = message.settings
        ? EndpointSettings.toJSON(message.settings)
        : undefined);
    message.updateMask !== undefined &&
      (obj.updateMask = message.updateMask
        ? FieldMask.toJSON(message.updateMask)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateEndpointRequest>, I>>(
    object: I
  ): UpdateEndpointRequest {
    const message = { ...baseUpdateEndpointRequest } as UpdateEndpointRequest;
    message.endpointId = object.endpointId ?? "";
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
    message.settings =
      object.settings !== undefined && object.settings !== null
        ? EndpointSettings.fromPartial(object.settings)
        : undefined;
    message.updateMask =
      object.updateMask !== undefined && object.updateMask !== null
        ? FieldMask.fromPartial(object.updateMask)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateEndpointRequest.$type, UpdateEndpointRequest);

const baseUpdateEndpointRequest_LabelsEntry: object = {
  $type: "yandex.cloud.datatransfer.v1.UpdateEndpointRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateEndpointRequest_LabelsEntry = {
  $type:
    "yandex.cloud.datatransfer.v1.UpdateEndpointRequest.LabelsEntry" as const,

  encode(
    message: UpdateEndpointRequest_LabelsEntry,
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
  ): UpdateEndpointRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateEndpointRequest_LabelsEntry,
    } as UpdateEndpointRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateEndpointRequest_LabelsEntry {
    const message = {
      ...baseUpdateEndpointRequest_LabelsEntry,
    } as UpdateEndpointRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateEndpointRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateEndpointRequest_LabelsEntry>, I>
  >(object: I): UpdateEndpointRequest_LabelsEntry {
    const message = {
      ...baseUpdateEndpointRequest_LabelsEntry,
    } as UpdateEndpointRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateEndpointRequest_LabelsEntry.$type,
  UpdateEndpointRequest_LabelsEntry
);

const baseUpdateEndpointMetadata: object = {
  $type: "yandex.cloud.datatransfer.v1.UpdateEndpointMetadata",
  endpointId: "",
};

export const UpdateEndpointMetadata = {
  $type: "yandex.cloud.datatransfer.v1.UpdateEndpointMetadata" as const,

  encode(
    message: UpdateEndpointMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.endpointId !== "") {
      writer.uint32(10).string(message.endpointId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateEndpointMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateEndpointMetadata } as UpdateEndpointMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.endpointId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateEndpointMetadata {
    const message = { ...baseUpdateEndpointMetadata } as UpdateEndpointMetadata;
    message.endpointId =
      object.endpointId !== undefined && object.endpointId !== null
        ? String(object.endpointId)
        : "";
    return message;
  },

  toJSON(message: UpdateEndpointMetadata): unknown {
    const obj: any = {};
    message.endpointId !== undefined && (obj.endpointId = message.endpointId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateEndpointMetadata>, I>>(
    object: I
  ): UpdateEndpointMetadata {
    const message = { ...baseUpdateEndpointMetadata } as UpdateEndpointMetadata;
    message.endpointId = object.endpointId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateEndpointMetadata.$type, UpdateEndpointMetadata);

const baseDeleteEndpointRequest: object = {
  $type: "yandex.cloud.datatransfer.v1.DeleteEndpointRequest",
  endpointId: "",
};

export const DeleteEndpointRequest = {
  $type: "yandex.cloud.datatransfer.v1.DeleteEndpointRequest" as const,

  encode(
    message: DeleteEndpointRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.endpointId !== "") {
      writer.uint32(10).string(message.endpointId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteEndpointRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteEndpointRequest } as DeleteEndpointRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.endpointId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteEndpointRequest {
    const message = { ...baseDeleteEndpointRequest } as DeleteEndpointRequest;
    message.endpointId =
      object.endpointId !== undefined && object.endpointId !== null
        ? String(object.endpointId)
        : "";
    return message;
  },

  toJSON(message: DeleteEndpointRequest): unknown {
    const obj: any = {};
    message.endpointId !== undefined && (obj.endpointId = message.endpointId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteEndpointRequest>, I>>(
    object: I
  ): DeleteEndpointRequest {
    const message = { ...baseDeleteEndpointRequest } as DeleteEndpointRequest;
    message.endpointId = object.endpointId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteEndpointRequest.$type, DeleteEndpointRequest);

const baseDeleteEndpointMetadata: object = {
  $type: "yandex.cloud.datatransfer.v1.DeleteEndpointMetadata",
  endpointId: "",
};

export const DeleteEndpointMetadata = {
  $type: "yandex.cloud.datatransfer.v1.DeleteEndpointMetadata" as const,

  encode(
    message: DeleteEndpointMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.endpointId !== "") {
      writer.uint32(10).string(message.endpointId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteEndpointMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteEndpointMetadata } as DeleteEndpointMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.endpointId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteEndpointMetadata {
    const message = { ...baseDeleteEndpointMetadata } as DeleteEndpointMetadata;
    message.endpointId =
      object.endpointId !== undefined && object.endpointId !== null
        ? String(object.endpointId)
        : "";
    return message;
  },

  toJSON(message: DeleteEndpointMetadata): unknown {
    const obj: any = {};
    message.endpointId !== undefined && (obj.endpointId = message.endpointId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteEndpointMetadata>, I>>(
    object: I
  ): DeleteEndpointMetadata {
    const message = { ...baseDeleteEndpointMetadata } as DeleteEndpointMetadata;
    message.endpointId = object.endpointId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteEndpointMetadata.$type, DeleteEndpointMetadata);

export const EndpointServiceService = {
  get: {
    path: "/yandex.cloud.datatransfer.v1.EndpointService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetEndpointRequest) =>
      Buffer.from(GetEndpointRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetEndpointRequest.decode(value),
    responseSerialize: (value: Endpoint) =>
      Buffer.from(Endpoint.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Endpoint.decode(value),
  },
  list: {
    path: "/yandex.cloud.datatransfer.v1.EndpointService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListEndpointsRequest) =>
      Buffer.from(ListEndpointsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListEndpointsRequest.decode(value),
    responseSerialize: (value: ListEndpointsResponse) =>
      Buffer.from(ListEndpointsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListEndpointsResponse.decode(value),
  },
  create: {
    path: "/yandex.cloud.datatransfer.v1.EndpointService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateEndpointRequest) =>
      Buffer.from(CreateEndpointRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateEndpointRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  update: {
    path: "/yandex.cloud.datatransfer.v1.EndpointService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateEndpointRequest) =>
      Buffer.from(UpdateEndpointRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateEndpointRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  delete: {
    path: "/yandex.cloud.datatransfer.v1.EndpointService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteEndpointRequest) =>
      Buffer.from(DeleteEndpointRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteEndpointRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface EndpointServiceServer extends UntypedServiceImplementation {
  get: handleUnaryCall<GetEndpointRequest, Endpoint>;
  list: handleUnaryCall<ListEndpointsRequest, ListEndpointsResponse>;
  create: handleUnaryCall<CreateEndpointRequest, Operation>;
  update: handleUnaryCall<UpdateEndpointRequest, Operation>;
  delete: handleUnaryCall<DeleteEndpointRequest, Operation>;
}

export interface EndpointServiceClient extends Client {
  get(
    request: GetEndpointRequest,
    callback: (error: ServiceError | null, response: Endpoint) => void
  ): ClientUnaryCall;
  get(
    request: GetEndpointRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Endpoint) => void
  ): ClientUnaryCall;
  get(
    request: GetEndpointRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Endpoint) => void
  ): ClientUnaryCall;
  list(
    request: ListEndpointsRequest,
    callback: (
      error: ServiceError | null,
      response: ListEndpointsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListEndpointsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListEndpointsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListEndpointsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListEndpointsResponse
    ) => void
  ): ClientUnaryCall;
  create(
    request: CreateEndpointRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateEndpointRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateEndpointRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateEndpointRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateEndpointRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateEndpointRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteEndpointRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteEndpointRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteEndpointRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const EndpointServiceClient = makeGenericClientConstructor(
  EndpointServiceService,
  "yandex.cloud.datatransfer.v1.EndpointService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): EndpointServiceClient;
  service: typeof EndpointServiceService;
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
