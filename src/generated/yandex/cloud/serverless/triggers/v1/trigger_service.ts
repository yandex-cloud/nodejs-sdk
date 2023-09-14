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
  Trigger_Rule,
  Trigger,
} from "../../../../../yandex/cloud/serverless/triggers/v1/trigger";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Operation } from "../../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.serverless.triggers.v1";

export interface GetTriggerRequest {
  $type: "yandex.cloud.serverless.triggers.v1.GetTriggerRequest";
  /**
   * ID of the trigger to return.
   *
   * To get a trigger ID make a [TriggerService.List] request.
   */
  triggerId: string;
}

export interface ListTriggersRequest {
  $type: "yandex.cloud.serverless.triggers.v1.ListTriggersRequest";
  /**
   * ID of the folder to list triggers in.
   *
   * To get a folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `pageSize`, the service returns a [ListTriggersResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `pageToken` to the
   * [ListTriggersResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters triggers listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently filtering can only be applied to the [Trigger.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name=my-trigger`.
   */
  filter: string;
}

export interface ListTriggersResponse {
  $type: "yandex.cloud.serverless.triggers.v1.ListTriggersResponse";
  /** List of triggers in the specified folder. */
  triggers: Trigger[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListTriggersRequest.page_size], use `nextPageToken` as the value
   * for the [ListTriggersRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateTriggerRequest {
  $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerRequest";
  /**
   * ID of the folder to create a trigger in.
   *
   * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the trigger.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the trigger. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Trigger type. */
  rule?: Trigger_Rule;
}

export interface CreateTriggerRequest_LabelsEntry {
  $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateTriggerMetadata {
  $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerMetadata";
  /** ID of the trigger that is being created. */
  triggerId: string;
}

export interface UpdateTriggerRequest {
  $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerRequest";
  /**
   * ID of the trigger to update.
   *
   * To get a trigger ID make a [TriggerService.List] request.
   */
  triggerId: string;
  /** Field mask that specifies which attributes of the trigger should be updated. */
  updateMask?: FieldMask;
  /**
   * New name for the trigger.
   * The name must be unique within the folder.
   */
  name: string;
  /** New description of the trigger. */
  description: string;
  /**
   * Trigger labels as `key:value` pairs.
   *
   * Existing set of labels is completely replaced by the provided set, so if you just want
   * to add or remove a label, request the current set of labels with a [TriggerService.Get] request.
   */
  labels: { [key: string]: string };
  /** New parameters for trigger. */
  rule?: Trigger_Rule;
}

export interface UpdateTriggerRequest_LabelsEntry {
  $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateTriggerMetadata {
  $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerMetadata";
  /** ID of the trigger that is being updated. */
  triggerId: string;
}

export interface DeleteTriggerRequest {
  $type: "yandex.cloud.serverless.triggers.v1.DeleteTriggerRequest";
  /**
   * ID of the trigger to delete.
   *
   * To get a trigger ID make a [TriggerService.List] request.
   */
  triggerId: string;
}

export interface DeleteTriggerMetadata {
  $type: "yandex.cloud.serverless.triggers.v1.DeleteTriggerMetadata";
  /** ID of the trigger that is being deleted. */
  triggerId: string;
}

export interface PauseTriggerRequest {
  $type: "yandex.cloud.serverless.triggers.v1.PauseTriggerRequest";
  /**
   * ID of the trigger to pause
   *
   * To get a trigger ID make a [TriggerService.List] request.
   */
  triggerId: string;
}

export interface PauseTriggerMetadata {
  $type: "yandex.cloud.serverless.triggers.v1.PauseTriggerMetadata";
  /** ID of the trigger that is being paused. */
  triggerId: string;
}

export interface ResumeTriggerRequest {
  $type: "yandex.cloud.serverless.triggers.v1.ResumeTriggerRequest";
  /**
   * ID of the trigger to pause
   *
   * To get a trigger ID make a [TriggerService.List] request.
   */
  triggerId: string;
}

export interface ResumeTriggerMetadata {
  $type: "yandex.cloud.serverless.triggers.v1.ResumeTriggerMetadata";
  /** ID of the trigger that is being paused. */
  triggerId: string;
}

export interface ListTriggerOperationsRequest {
  $type: "yandex.cloud.serverless.triggers.v1.ListTriggerOperationsRequest";
  /** ID of the trigger to list operations for. */
  triggerId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `pageSize`, the service returns a [ListTriggerOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   *
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `pageToken` to the
   * [ListTriggerOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently filtering can only be applied to the [Trigger.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name=my-function`.
   */
  filter: string;
}

export interface ListTriggerOperationsResponse {
  $type: "yandex.cloud.serverless.triggers.v1.ListTriggerOperationsResponse";
  /** List of operations for the specified trigger. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListTriggerOperationsRequest.page_size], use `nextPageToken` as the value
   * for the [ListTriggerOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
   */
  nextPageToken: string;
}

const baseGetTriggerRequest: object = {
  $type: "yandex.cloud.serverless.triggers.v1.GetTriggerRequest",
  triggerId: "",
};

export const GetTriggerRequest = {
  $type: "yandex.cloud.serverless.triggers.v1.GetTriggerRequest" as const,

  encode(
    message: GetTriggerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.triggerId !== "") {
      writer.uint32(10).string(message.triggerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTriggerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetTriggerRequest } as GetTriggerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triggerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTriggerRequest {
    const message = { ...baseGetTriggerRequest } as GetTriggerRequest;
    message.triggerId =
      object.triggerId !== undefined && object.triggerId !== null
        ? String(object.triggerId)
        : "";
    return message;
  },

  toJSON(message: GetTriggerRequest): unknown {
    const obj: any = {};
    message.triggerId !== undefined && (obj.triggerId = message.triggerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetTriggerRequest>, I>>(
    object: I
  ): GetTriggerRequest {
    const message = { ...baseGetTriggerRequest } as GetTriggerRequest;
    message.triggerId = object.triggerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetTriggerRequest.$type, GetTriggerRequest);

const baseListTriggersRequest: object = {
  $type: "yandex.cloud.serverless.triggers.v1.ListTriggersRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListTriggersRequest = {
  $type: "yandex.cloud.serverless.triggers.v1.ListTriggersRequest" as const,

  encode(
    message: ListTriggersRequest,
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTriggersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListTriggersRequest } as ListTriggersRequest;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListTriggersRequest {
    const message = { ...baseListTriggersRequest } as ListTriggersRequest;
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

  toJSON(message: ListTriggersRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListTriggersRequest>, I>>(
    object: I
  ): ListTriggersRequest {
    const message = { ...baseListTriggersRequest } as ListTriggersRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListTriggersRequest.$type, ListTriggersRequest);

const baseListTriggersResponse: object = {
  $type: "yandex.cloud.serverless.triggers.v1.ListTriggersResponse",
  nextPageToken: "",
};

export const ListTriggersResponse = {
  $type: "yandex.cloud.serverless.triggers.v1.ListTriggersResponse" as const,

  encode(
    message: ListTriggersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.triggers) {
      Trigger.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListTriggersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListTriggersResponse } as ListTriggersResponse;
    message.triggers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triggers.push(Trigger.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListTriggersResponse {
    const message = { ...baseListTriggersResponse } as ListTriggersResponse;
    message.triggers = (object.triggers ?? []).map((e: any) =>
      Trigger.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListTriggersResponse): unknown {
    const obj: any = {};
    if (message.triggers) {
      obj.triggers = message.triggers.map((e) =>
        e ? Trigger.toJSON(e) : undefined
      );
    } else {
      obj.triggers = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListTriggersResponse>, I>>(
    object: I
  ): ListTriggersResponse {
    const message = { ...baseListTriggersResponse } as ListTriggersResponse;
    message.triggers =
      object.triggers?.map((e) => Trigger.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListTriggersResponse.$type, ListTriggersResponse);

const baseCreateTriggerRequest: object = {
  $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerRequest",
  folderId: "",
  name: "",
  description: "",
};

export const CreateTriggerRequest = {
  $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerRequest" as const,

  encode(
    message: CreateTriggerRequest,
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
      CreateTriggerRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.serverless.triggers.v1.CreateTriggerRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.rule !== undefined) {
      Trigger_Rule.encode(message.rule, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateTriggerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateTriggerRequest } as CreateTriggerRequest;
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
          const entry4 = CreateTriggerRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.rule = Trigger_Rule.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateTriggerRequest {
    const message = { ...baseCreateTriggerRequest } as CreateTriggerRequest;
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
    message.rule =
      object.rule !== undefined && object.rule !== null
        ? Trigger_Rule.fromJSON(object.rule)
        : undefined;
    return message;
  },

  toJSON(message: CreateTriggerRequest): unknown {
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
    message.rule !== undefined &&
      (obj.rule = message.rule ? Trigger_Rule.toJSON(message.rule) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateTriggerRequest>, I>>(
    object: I
  ): CreateTriggerRequest {
    const message = { ...baseCreateTriggerRequest } as CreateTriggerRequest;
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
    message.rule =
      object.rule !== undefined && object.rule !== null
        ? Trigger_Rule.fromPartial(object.rule)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateTriggerRequest.$type, CreateTriggerRequest);

const baseCreateTriggerRequest_LabelsEntry: object = {
  $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateTriggerRequest_LabelsEntry = {
  $type:
    "yandex.cloud.serverless.triggers.v1.CreateTriggerRequest.LabelsEntry" as const,

  encode(
    message: CreateTriggerRequest_LabelsEntry,
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
  ): CreateTriggerRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateTriggerRequest_LabelsEntry,
    } as CreateTriggerRequest_LabelsEntry;
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

  fromJSON(object: any): CreateTriggerRequest_LabelsEntry {
    const message = {
      ...baseCreateTriggerRequest_LabelsEntry,
    } as CreateTriggerRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateTriggerRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateTriggerRequest_LabelsEntry>, I>
  >(object: I): CreateTriggerRequest_LabelsEntry {
    const message = {
      ...baseCreateTriggerRequest_LabelsEntry,
    } as CreateTriggerRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateTriggerRequest_LabelsEntry.$type,
  CreateTriggerRequest_LabelsEntry
);

const baseCreateTriggerMetadata: object = {
  $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerMetadata",
  triggerId: "",
};

export const CreateTriggerMetadata = {
  $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerMetadata" as const,

  encode(
    message: CreateTriggerMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.triggerId !== "") {
      writer.uint32(10).string(message.triggerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateTriggerMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateTriggerMetadata } as CreateTriggerMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triggerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateTriggerMetadata {
    const message = { ...baseCreateTriggerMetadata } as CreateTriggerMetadata;
    message.triggerId =
      object.triggerId !== undefined && object.triggerId !== null
        ? String(object.triggerId)
        : "";
    return message;
  },

  toJSON(message: CreateTriggerMetadata): unknown {
    const obj: any = {};
    message.triggerId !== undefined && (obj.triggerId = message.triggerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateTriggerMetadata>, I>>(
    object: I
  ): CreateTriggerMetadata {
    const message = { ...baseCreateTriggerMetadata } as CreateTriggerMetadata;
    message.triggerId = object.triggerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateTriggerMetadata.$type, CreateTriggerMetadata);

const baseUpdateTriggerRequest: object = {
  $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerRequest",
  triggerId: "",
  name: "",
  description: "",
};

export const UpdateTriggerRequest = {
  $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerRequest" as const,

  encode(
    message: UpdateTriggerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.triggerId !== "") {
      writer.uint32(10).string(message.triggerId);
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
      UpdateTriggerRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.serverless.triggers.v1.UpdateTriggerRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.rule !== undefined) {
      Trigger_Rule.encode(message.rule, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateTriggerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateTriggerRequest } as UpdateTriggerRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triggerId = reader.string();
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
          const entry5 = UpdateTriggerRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.rule = Trigger_Rule.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateTriggerRequest {
    const message = { ...baseUpdateTriggerRequest } as UpdateTriggerRequest;
    message.triggerId =
      object.triggerId !== undefined && object.triggerId !== null
        ? String(object.triggerId)
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
    message.rule =
      object.rule !== undefined && object.rule !== null
        ? Trigger_Rule.fromJSON(object.rule)
        : undefined;
    return message;
  },

  toJSON(message: UpdateTriggerRequest): unknown {
    const obj: any = {};
    message.triggerId !== undefined && (obj.triggerId = message.triggerId);
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
    message.rule !== undefined &&
      (obj.rule = message.rule ? Trigger_Rule.toJSON(message.rule) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateTriggerRequest>, I>>(
    object: I
  ): UpdateTriggerRequest {
    const message = { ...baseUpdateTriggerRequest } as UpdateTriggerRequest;
    message.triggerId = object.triggerId ?? "";
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
    message.rule =
      object.rule !== undefined && object.rule !== null
        ? Trigger_Rule.fromPartial(object.rule)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateTriggerRequest.$type, UpdateTriggerRequest);

const baseUpdateTriggerRequest_LabelsEntry: object = {
  $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateTriggerRequest_LabelsEntry = {
  $type:
    "yandex.cloud.serverless.triggers.v1.UpdateTriggerRequest.LabelsEntry" as const,

  encode(
    message: UpdateTriggerRequest_LabelsEntry,
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
  ): UpdateTriggerRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateTriggerRequest_LabelsEntry,
    } as UpdateTriggerRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateTriggerRequest_LabelsEntry {
    const message = {
      ...baseUpdateTriggerRequest_LabelsEntry,
    } as UpdateTriggerRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateTriggerRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateTriggerRequest_LabelsEntry>, I>
  >(object: I): UpdateTriggerRequest_LabelsEntry {
    const message = {
      ...baseUpdateTriggerRequest_LabelsEntry,
    } as UpdateTriggerRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateTriggerRequest_LabelsEntry.$type,
  UpdateTriggerRequest_LabelsEntry
);

const baseUpdateTriggerMetadata: object = {
  $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerMetadata",
  triggerId: "",
};

export const UpdateTriggerMetadata = {
  $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerMetadata" as const,

  encode(
    message: UpdateTriggerMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.triggerId !== "") {
      writer.uint32(10).string(message.triggerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateTriggerMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateTriggerMetadata } as UpdateTriggerMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triggerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateTriggerMetadata {
    const message = { ...baseUpdateTriggerMetadata } as UpdateTriggerMetadata;
    message.triggerId =
      object.triggerId !== undefined && object.triggerId !== null
        ? String(object.triggerId)
        : "";
    return message;
  },

  toJSON(message: UpdateTriggerMetadata): unknown {
    const obj: any = {};
    message.triggerId !== undefined && (obj.triggerId = message.triggerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateTriggerMetadata>, I>>(
    object: I
  ): UpdateTriggerMetadata {
    const message = { ...baseUpdateTriggerMetadata } as UpdateTriggerMetadata;
    message.triggerId = object.triggerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateTriggerMetadata.$type, UpdateTriggerMetadata);

const baseDeleteTriggerRequest: object = {
  $type: "yandex.cloud.serverless.triggers.v1.DeleteTriggerRequest",
  triggerId: "",
};

export const DeleteTriggerRequest = {
  $type: "yandex.cloud.serverless.triggers.v1.DeleteTriggerRequest" as const,

  encode(
    message: DeleteTriggerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.triggerId !== "") {
      writer.uint32(10).string(message.triggerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteTriggerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteTriggerRequest } as DeleteTriggerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triggerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteTriggerRequest {
    const message = { ...baseDeleteTriggerRequest } as DeleteTriggerRequest;
    message.triggerId =
      object.triggerId !== undefined && object.triggerId !== null
        ? String(object.triggerId)
        : "";
    return message;
  },

  toJSON(message: DeleteTriggerRequest): unknown {
    const obj: any = {};
    message.triggerId !== undefined && (obj.triggerId = message.triggerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteTriggerRequest>, I>>(
    object: I
  ): DeleteTriggerRequest {
    const message = { ...baseDeleteTriggerRequest } as DeleteTriggerRequest;
    message.triggerId = object.triggerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteTriggerRequest.$type, DeleteTriggerRequest);

const baseDeleteTriggerMetadata: object = {
  $type: "yandex.cloud.serverless.triggers.v1.DeleteTriggerMetadata",
  triggerId: "",
};

export const DeleteTriggerMetadata = {
  $type: "yandex.cloud.serverless.triggers.v1.DeleteTriggerMetadata" as const,

  encode(
    message: DeleteTriggerMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.triggerId !== "") {
      writer.uint32(10).string(message.triggerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteTriggerMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteTriggerMetadata } as DeleteTriggerMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triggerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteTriggerMetadata {
    const message = { ...baseDeleteTriggerMetadata } as DeleteTriggerMetadata;
    message.triggerId =
      object.triggerId !== undefined && object.triggerId !== null
        ? String(object.triggerId)
        : "";
    return message;
  },

  toJSON(message: DeleteTriggerMetadata): unknown {
    const obj: any = {};
    message.triggerId !== undefined && (obj.triggerId = message.triggerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteTriggerMetadata>, I>>(
    object: I
  ): DeleteTriggerMetadata {
    const message = { ...baseDeleteTriggerMetadata } as DeleteTriggerMetadata;
    message.triggerId = object.triggerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteTriggerMetadata.$type, DeleteTriggerMetadata);

const basePauseTriggerRequest: object = {
  $type: "yandex.cloud.serverless.triggers.v1.PauseTriggerRequest",
  triggerId: "",
};

export const PauseTriggerRequest = {
  $type: "yandex.cloud.serverless.triggers.v1.PauseTriggerRequest" as const,

  encode(
    message: PauseTriggerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.triggerId !== "") {
      writer.uint32(10).string(message.triggerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PauseTriggerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePauseTriggerRequest } as PauseTriggerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triggerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PauseTriggerRequest {
    const message = { ...basePauseTriggerRequest } as PauseTriggerRequest;
    message.triggerId =
      object.triggerId !== undefined && object.triggerId !== null
        ? String(object.triggerId)
        : "";
    return message;
  },

  toJSON(message: PauseTriggerRequest): unknown {
    const obj: any = {};
    message.triggerId !== undefined && (obj.triggerId = message.triggerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PauseTriggerRequest>, I>>(
    object: I
  ): PauseTriggerRequest {
    const message = { ...basePauseTriggerRequest } as PauseTriggerRequest;
    message.triggerId = object.triggerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(PauseTriggerRequest.$type, PauseTriggerRequest);

const basePauseTriggerMetadata: object = {
  $type: "yandex.cloud.serverless.triggers.v1.PauseTriggerMetadata",
  triggerId: "",
};

export const PauseTriggerMetadata = {
  $type: "yandex.cloud.serverless.triggers.v1.PauseTriggerMetadata" as const,

  encode(
    message: PauseTriggerMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.triggerId !== "") {
      writer.uint32(10).string(message.triggerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PauseTriggerMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePauseTriggerMetadata } as PauseTriggerMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triggerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PauseTriggerMetadata {
    const message = { ...basePauseTriggerMetadata } as PauseTriggerMetadata;
    message.triggerId =
      object.triggerId !== undefined && object.triggerId !== null
        ? String(object.triggerId)
        : "";
    return message;
  },

  toJSON(message: PauseTriggerMetadata): unknown {
    const obj: any = {};
    message.triggerId !== undefined && (obj.triggerId = message.triggerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PauseTriggerMetadata>, I>>(
    object: I
  ): PauseTriggerMetadata {
    const message = { ...basePauseTriggerMetadata } as PauseTriggerMetadata;
    message.triggerId = object.triggerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(PauseTriggerMetadata.$type, PauseTriggerMetadata);

const baseResumeTriggerRequest: object = {
  $type: "yandex.cloud.serverless.triggers.v1.ResumeTriggerRequest",
  triggerId: "",
};

export const ResumeTriggerRequest = {
  $type: "yandex.cloud.serverless.triggers.v1.ResumeTriggerRequest" as const,

  encode(
    message: ResumeTriggerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.triggerId !== "") {
      writer.uint32(10).string(message.triggerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResumeTriggerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResumeTriggerRequest } as ResumeTriggerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triggerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResumeTriggerRequest {
    const message = { ...baseResumeTriggerRequest } as ResumeTriggerRequest;
    message.triggerId =
      object.triggerId !== undefined && object.triggerId !== null
        ? String(object.triggerId)
        : "";
    return message;
  },

  toJSON(message: ResumeTriggerRequest): unknown {
    const obj: any = {};
    message.triggerId !== undefined && (obj.triggerId = message.triggerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResumeTriggerRequest>, I>>(
    object: I
  ): ResumeTriggerRequest {
    const message = { ...baseResumeTriggerRequest } as ResumeTriggerRequest;
    message.triggerId = object.triggerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ResumeTriggerRequest.$type, ResumeTriggerRequest);

const baseResumeTriggerMetadata: object = {
  $type: "yandex.cloud.serverless.triggers.v1.ResumeTriggerMetadata",
  triggerId: "",
};

export const ResumeTriggerMetadata = {
  $type: "yandex.cloud.serverless.triggers.v1.ResumeTriggerMetadata" as const,

  encode(
    message: ResumeTriggerMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.triggerId !== "") {
      writer.uint32(10).string(message.triggerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResumeTriggerMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResumeTriggerMetadata } as ResumeTriggerMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triggerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResumeTriggerMetadata {
    const message = { ...baseResumeTriggerMetadata } as ResumeTriggerMetadata;
    message.triggerId =
      object.triggerId !== undefined && object.triggerId !== null
        ? String(object.triggerId)
        : "";
    return message;
  },

  toJSON(message: ResumeTriggerMetadata): unknown {
    const obj: any = {};
    message.triggerId !== undefined && (obj.triggerId = message.triggerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResumeTriggerMetadata>, I>>(
    object: I
  ): ResumeTriggerMetadata {
    const message = { ...baseResumeTriggerMetadata } as ResumeTriggerMetadata;
    message.triggerId = object.triggerId ?? "";
    return message;
  },
};

messageTypeRegistry.set(ResumeTriggerMetadata.$type, ResumeTriggerMetadata);

const baseListTriggerOperationsRequest: object = {
  $type: "yandex.cloud.serverless.triggers.v1.ListTriggerOperationsRequest",
  triggerId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListTriggerOperationsRequest = {
  $type:
    "yandex.cloud.serverless.triggers.v1.ListTriggerOperationsRequest" as const,

  encode(
    message: ListTriggerOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.triggerId !== "") {
      writer.uint32(10).string(message.triggerId);
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
  ): ListTriggerOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListTriggerOperationsRequest,
    } as ListTriggerOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triggerId = reader.string();
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

  fromJSON(object: any): ListTriggerOperationsRequest {
    const message = {
      ...baseListTriggerOperationsRequest,
    } as ListTriggerOperationsRequest;
    message.triggerId =
      object.triggerId !== undefined && object.triggerId !== null
        ? String(object.triggerId)
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

  toJSON(message: ListTriggerOperationsRequest): unknown {
    const obj: any = {};
    message.triggerId !== undefined && (obj.triggerId = message.triggerId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListTriggerOperationsRequest>, I>>(
    object: I
  ): ListTriggerOperationsRequest {
    const message = {
      ...baseListTriggerOperationsRequest,
    } as ListTriggerOperationsRequest;
    message.triggerId = object.triggerId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListTriggerOperationsRequest.$type,
  ListTriggerOperationsRequest
);

const baseListTriggerOperationsResponse: object = {
  $type: "yandex.cloud.serverless.triggers.v1.ListTriggerOperationsResponse",
  nextPageToken: "",
};

export const ListTriggerOperationsResponse = {
  $type:
    "yandex.cloud.serverless.triggers.v1.ListTriggerOperationsResponse" as const,

  encode(
    message: ListTriggerOperationsResponse,
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
  ): ListTriggerOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListTriggerOperationsResponse,
    } as ListTriggerOperationsResponse;
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

  fromJSON(object: any): ListTriggerOperationsResponse {
    const message = {
      ...baseListTriggerOperationsResponse,
    } as ListTriggerOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListTriggerOperationsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<ListTriggerOperationsResponse>, I>>(
    object: I
  ): ListTriggerOperationsResponse {
    const message = {
      ...baseListTriggerOperationsResponse,
    } as ListTriggerOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListTriggerOperationsResponse.$type,
  ListTriggerOperationsResponse
);

/** A set of methods for managing triggers for serverless functions. */
export const TriggerServiceService = {
  /**
   * Returns the specified trigger.
   *
   * To get the list of all available triggers, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetTriggerRequest) =>
      Buffer.from(GetTriggerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetTriggerRequest.decode(value),
    responseSerialize: (value: Trigger) =>
      Buffer.from(Trigger.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Trigger.decode(value),
  },
  /** Retrieves the list of triggers in the specified folder. */
  list: {
    path: "/yandex.cloud.serverless.triggers.v1.TriggerService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListTriggersRequest) =>
      Buffer.from(ListTriggersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListTriggersRequest.decode(value),
    responseSerialize: (value: ListTriggersResponse) =>
      Buffer.from(ListTriggersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListTriggersResponse.decode(value),
  },
  /** Creates a trigger in the specified folder. */
  create: {
    path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateTriggerRequest) =>
      Buffer.from(CreateTriggerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateTriggerRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified trigger. */
  update: {
    path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateTriggerRequest) =>
      Buffer.from(UpdateTriggerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateTriggerRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified trigger. */
  delete: {
    path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteTriggerRequest) =>
      Buffer.from(DeleteTriggerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteTriggerRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Pauses the specified trigger. */
  pause: {
    path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Pause",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PauseTriggerRequest) =>
      Buffer.from(PauseTriggerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PauseTriggerRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Restarts the specified trigger. */
  resume: {
    path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Resume",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ResumeTriggerRequest) =>
      Buffer.from(ResumeTriggerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ResumeTriggerRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified trigger. */
  listOperations: {
    path: "/yandex.cloud.serverless.triggers.v1.TriggerService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListTriggerOperationsRequest) =>
      Buffer.from(ListTriggerOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListTriggerOperationsRequest.decode(value),
    responseSerialize: (value: ListTriggerOperationsResponse) =>
      Buffer.from(ListTriggerOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListTriggerOperationsResponse.decode(value),
  },
} as const;

export interface TriggerServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified trigger.
   *
   * To get the list of all available triggers, make a [List] request.
   */
  get: handleUnaryCall<GetTriggerRequest, Trigger>;
  /** Retrieves the list of triggers in the specified folder. */
  list: handleUnaryCall<ListTriggersRequest, ListTriggersResponse>;
  /** Creates a trigger in the specified folder. */
  create: handleUnaryCall<CreateTriggerRequest, Operation>;
  /** Updates the specified trigger. */
  update: handleUnaryCall<UpdateTriggerRequest, Operation>;
  /** Deletes the specified trigger. */
  delete: handleUnaryCall<DeleteTriggerRequest, Operation>;
  /** Pauses the specified trigger. */
  pause: handleUnaryCall<PauseTriggerRequest, Operation>;
  /** Restarts the specified trigger. */
  resume: handleUnaryCall<ResumeTriggerRequest, Operation>;
  /** Lists operations for the specified trigger. */
  listOperations: handleUnaryCall<
    ListTriggerOperationsRequest,
    ListTriggerOperationsResponse
  >;
}

export interface TriggerServiceClient extends Client {
  /**
   * Returns the specified trigger.
   *
   * To get the list of all available triggers, make a [List] request.
   */
  get(
    request: GetTriggerRequest,
    callback: (error: ServiceError | null, response: Trigger) => void
  ): ClientUnaryCall;
  get(
    request: GetTriggerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Trigger) => void
  ): ClientUnaryCall;
  get(
    request: GetTriggerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Trigger) => void
  ): ClientUnaryCall;
  /** Retrieves the list of triggers in the specified folder. */
  list(
    request: ListTriggersRequest,
    callback: (
      error: ServiceError | null,
      response: ListTriggersResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListTriggersRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListTriggersResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListTriggersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListTriggersResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates a trigger in the specified folder. */
  create(
    request: CreateTriggerRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateTriggerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateTriggerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified trigger. */
  update(
    request: UpdateTriggerRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateTriggerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateTriggerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified trigger. */
  delete(
    request: DeleteTriggerRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteTriggerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteTriggerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Pauses the specified trigger. */
  pause(
    request: PauseTriggerRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  pause(
    request: PauseTriggerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  pause(
    request: PauseTriggerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Restarts the specified trigger. */
  resume(
    request: ResumeTriggerRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  resume(
    request: ResumeTriggerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  resume(
    request: ResumeTriggerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified trigger. */
  listOperations(
    request: ListTriggerOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListTriggerOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListTriggerOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListTriggerOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListTriggerOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListTriggerOperationsResponse
    ) => void
  ): ClientUnaryCall;
}

export const TriggerServiceClient = makeGenericClientConstructor(
  TriggerServiceService,
  "yandex.cloud.serverless.triggers.v1.TriggerService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): TriggerServiceClient;
  service: typeof TriggerServiceService;
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
