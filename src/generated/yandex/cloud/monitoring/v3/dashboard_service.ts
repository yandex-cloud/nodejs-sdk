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
import { Parametrization } from "../../../../yandex/cloud/monitoring/v3/parametrization";
import { Dashboard } from "../../../../yandex/cloud/monitoring/v3/dashboard";
import { Widget } from "../../../../yandex/cloud/monitoring/v3/widget";
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.monitoring.v3";

export interface GetDashboardRequest {
  $type: "yandex.cloud.monitoring.v3.GetDashboardRequest";
  /** Required. Dashboard ID. */
  dashboardId: string;
}

export interface ListDashboardsRequest {
  $type: "yandex.cloud.monitoring.v3.ListDashboardsRequest";
  /** Required. Folder ID. */
  folderId: string | undefined;
  /**
   * The maximum number of dashboards to return.
   * If unspecified, at most 100 dashboards will be returned.
   * The maximum value is 1000; values above 1000 will be coerced to 1000.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListDashboardResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on the [Dashboard.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example: name="abc"
   */
  filter: string;
}

export interface ListDashboardsResponse {
  $type: "yandex.cloud.monitoring.v3.ListDashboardsResponse";
  /** List of dashboards. */
  dashboards: Dashboard[];
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken: string;
}

export interface CreateDashboardRequest {
  $type: "yandex.cloud.monitoring.v3.CreateDashboardRequest";
  /** Required. Folder ID. */
  folderId: string | undefined;
  /** Required. Dashboard name. */
  name: string;
  /** Dashboard description. */
  description: string;
  /** Resource labels as `key:value` pairs. */
  labels: { [key: string]: string };
  /** Dashboard title. */
  title: string;
  /** List of dashboard widgets. */
  widgets: Widget[];
  /** Dashboard parametrization. */
  parametrization?: Parametrization;
  /**
   * Entity that controls dashboard
   * Must match the regular expression "[\w \-]{1,100}"
   */
  managedBy: string;
  /**
   * Information about entity that controls dashboard
   * Must be valid URI
   */
  managedLink: string;
}

export interface CreateDashboardRequest_LabelsEntry {
  $type: "yandex.cloud.monitoring.v3.CreateDashboardRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateDashboardMetadata {
  $type: "yandex.cloud.monitoring.v3.CreateDashboardMetadata";
  /** Dashboard ID. */
  dashboardId: string;
}

export interface UpdateDashboardRequest {
  $type: "yandex.cloud.monitoring.v3.UpdateDashboardRequest";
  /** Required. Dashboard ID. */
  dashboardId: string;
  /** Required. Dashboard name. */
  name: string;
  /** Dashboard description. */
  description: string;
  /**
   * Resource labels as `key:value` pairs.
   *
   * Existing set of `labels` is completely replaced by the provided set.
   */
  labels: { [key: string]: string };
  /** Dashboard title. */
  title: string;
  /** List of dashboard widgets. */
  widgets: Widget[];
  /** Dashboard parametrization. */
  parametrization?: Parametrization;
  /** The current etag of the dashboard. */
  etag: string;
  /**
   * Entity that controls dashboard
   * Must match the regular expression "[\w \-]{1,100}"
   */
  managedBy: string;
  /**
   * Information about entity that controls dashboard
   * Must be valid URI
   */
  managedLink: string;
}

export interface UpdateDashboardRequest_LabelsEntry {
  $type: "yandex.cloud.monitoring.v3.UpdateDashboardRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateDashboardMetadata {
  $type: "yandex.cloud.monitoring.v3.UpdateDashboardMetadata";
  /** Dashboard ID. */
  dashboardId: string;
}

export interface DeleteDashboardRequest {
  $type: "yandex.cloud.monitoring.v3.DeleteDashboardRequest";
  /** Required. Dashboard ID. */
  dashboardId: string;
  /** The current etag of the dashboard. */
  etag: string;
}

export interface DeleteDashboardMetadata {
  $type: "yandex.cloud.monitoring.v3.DeleteDashboardMetadata";
  /** Dashboard ID. */
  dashboardId: string;
}

export interface ListDashboardOperationsRequest {
  $type: "yandex.cloud.monitoring.v3.ListDashboardOperationsRequest";
  /** ID of the dashboard to list operations for. */
  dashboardId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size], the service returns a [ListDashboardOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListDashboardOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListDashboardOperationsResponse {
  $type: "yandex.cloud.monitoring.v3.ListDashboardOperationsResponse";
  /** List of operations for the specified dashboard. */
  operations: Operation[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListDashboardOperationsRequest.page_size], use the [next_page_token] as the value
   * for the [ListDashboardOperationsRequest.page_token] query parameter in the next list request.
   * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

const baseGetDashboardRequest: object = {
  $type: "yandex.cloud.monitoring.v3.GetDashboardRequest",
  dashboardId: "",
};

export const GetDashboardRequest = {
  $type: "yandex.cloud.monitoring.v3.GetDashboardRequest" as const,

  encode(
    message: GetDashboardRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dashboardId !== "") {
      writer.uint32(10).string(message.dashboardId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDashboardRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetDashboardRequest } as GetDashboardRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dashboardId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetDashboardRequest {
    const message = { ...baseGetDashboardRequest } as GetDashboardRequest;
    message.dashboardId =
      object.dashboardId !== undefined && object.dashboardId !== null
        ? String(object.dashboardId)
        : "";
    return message;
  },

  toJSON(message: GetDashboardRequest): unknown {
    const obj: any = {};
    message.dashboardId !== undefined &&
      (obj.dashboardId = message.dashboardId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetDashboardRequest>, I>>(
    object: I
  ): GetDashboardRequest {
    const message = { ...baseGetDashboardRequest } as GetDashboardRequest;
    message.dashboardId = object.dashboardId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetDashboardRequest.$type, GetDashboardRequest);

const baseListDashboardsRequest: object = {
  $type: "yandex.cloud.monitoring.v3.ListDashboardsRequest",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListDashboardsRequest = {
  $type: "yandex.cloud.monitoring.v3.ListDashboardsRequest" as const,

  encode(
    message: ListDashboardsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== undefined) {
      writer.uint32(18).string(message.folderId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(152).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(162).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(170).string(message.filter);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListDashboardsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListDashboardsRequest } as ListDashboardsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.folderId = reader.string();
          break;
        case 19:
          message.pageSize = longToNumber(reader.int64() as Long);
          break;
        case 20:
          message.pageToken = reader.string();
          break;
        case 21:
          message.filter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListDashboardsRequest {
    const message = { ...baseListDashboardsRequest } as ListDashboardsRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : undefined;
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

  toJSON(message: ListDashboardsRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListDashboardsRequest>, I>>(
    object: I
  ): ListDashboardsRequest {
    const message = { ...baseListDashboardsRequest } as ListDashboardsRequest;
    message.folderId = object.folderId ?? undefined;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDashboardsRequest.$type, ListDashboardsRequest);

const baseListDashboardsResponse: object = {
  $type: "yandex.cloud.monitoring.v3.ListDashboardsResponse",
  nextPageToken: "",
};

export const ListDashboardsResponse = {
  $type: "yandex.cloud.monitoring.v3.ListDashboardsResponse" as const,

  encode(
    message: ListDashboardsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.dashboards) {
      Dashboard.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListDashboardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListDashboardsResponse } as ListDashboardsResponse;
    message.dashboards = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dashboards.push(Dashboard.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListDashboardsResponse {
    const message = { ...baseListDashboardsResponse } as ListDashboardsResponse;
    message.dashboards = (object.dashboards ?? []).map((e: any) =>
      Dashboard.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListDashboardsResponse): unknown {
    const obj: any = {};
    if (message.dashboards) {
      obj.dashboards = message.dashboards.map((e) =>
        e ? Dashboard.toJSON(e) : undefined
      );
    } else {
      obj.dashboards = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListDashboardsResponse>, I>>(
    object: I
  ): ListDashboardsResponse {
    const message = { ...baseListDashboardsResponse } as ListDashboardsResponse;
    message.dashboards =
      object.dashboards?.map((e) => Dashboard.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListDashboardsResponse.$type, ListDashboardsResponse);

const baseCreateDashboardRequest: object = {
  $type: "yandex.cloud.monitoring.v3.CreateDashboardRequest",
  name: "",
  description: "",
  title: "",
  managedBy: "",
  managedLink: "",
};

export const CreateDashboardRequest = {
  $type: "yandex.cloud.monitoring.v3.CreateDashboardRequest" as const,

  encode(
    message: CreateDashboardRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== undefined) {
      writer.uint32(18).string(message.folderId);
    }
    if (message.name !== "") {
      writer.uint32(154).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(162).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateDashboardRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.monitoring.v3.CreateDashboardRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(170).fork()
      ).ldelim();
    });
    if (message.title !== "") {
      writer.uint32(178).string(message.title);
    }
    for (const v of message.widgets) {
      Widget.encode(v!, writer.uint32(186).fork()).ldelim();
    }
    if (message.parametrization !== undefined) {
      Parametrization.encode(
        message.parametrization,
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.managedBy !== "") {
      writer.uint32(210).string(message.managedBy);
    }
    if (message.managedLink !== "") {
      writer.uint32(218).string(message.managedLink);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateDashboardRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateDashboardRequest } as CreateDashboardRequest;
    message.labels = {};
    message.widgets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.folderId = reader.string();
          break;
        case 19:
          message.name = reader.string();
          break;
        case 20:
          message.description = reader.string();
          break;
        case 21:
          const entry21 = CreateDashboardRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry21.value !== undefined) {
            message.labels[entry21.key] = entry21.value;
          }
          break;
        case 22:
          message.title = reader.string();
          break;
        case 23:
          message.widgets.push(Widget.decode(reader, reader.uint32()));
          break;
        case 24:
          message.parametrization = Parametrization.decode(
            reader,
            reader.uint32()
          );
          break;
        case 26:
          message.managedBy = reader.string();
          break;
        case 27:
          message.managedLink = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateDashboardRequest {
    const message = { ...baseCreateDashboardRequest } as CreateDashboardRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
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
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.widgets = (object.widgets ?? []).map((e: any) =>
      Widget.fromJSON(e)
    );
    message.parametrization =
      object.parametrization !== undefined && object.parametrization !== null
        ? Parametrization.fromJSON(object.parametrization)
        : undefined;
    message.managedBy =
      object.managedBy !== undefined && object.managedBy !== null
        ? String(object.managedBy)
        : "";
    message.managedLink =
      object.managedLink !== undefined && object.managedLink !== null
        ? String(object.managedLink)
        : "";
    return message;
  },

  toJSON(message: CreateDashboardRequest): unknown {
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
    message.title !== undefined && (obj.title = message.title);
    if (message.widgets) {
      obj.widgets = message.widgets.map((e) =>
        e ? Widget.toJSON(e) : undefined
      );
    } else {
      obj.widgets = [];
    }
    message.parametrization !== undefined &&
      (obj.parametrization = message.parametrization
        ? Parametrization.toJSON(message.parametrization)
        : undefined);
    message.managedBy !== undefined && (obj.managedBy = message.managedBy);
    message.managedLink !== undefined &&
      (obj.managedLink = message.managedLink);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateDashboardRequest>, I>>(
    object: I
  ): CreateDashboardRequest {
    const message = { ...baseCreateDashboardRequest } as CreateDashboardRequest;
    message.folderId = object.folderId ?? undefined;
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
    message.title = object.title ?? "";
    message.widgets = object.widgets?.map((e) => Widget.fromPartial(e)) || [];
    message.parametrization =
      object.parametrization !== undefined && object.parametrization !== null
        ? Parametrization.fromPartial(object.parametrization)
        : undefined;
    message.managedBy = object.managedBy ?? "";
    message.managedLink = object.managedLink ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateDashboardRequest.$type, CreateDashboardRequest);

const baseCreateDashboardRequest_LabelsEntry: object = {
  $type: "yandex.cloud.monitoring.v3.CreateDashboardRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateDashboardRequest_LabelsEntry = {
  $type:
    "yandex.cloud.monitoring.v3.CreateDashboardRequest.LabelsEntry" as const,

  encode(
    message: CreateDashboardRequest_LabelsEntry,
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
  ): CreateDashboardRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateDashboardRequest_LabelsEntry,
    } as CreateDashboardRequest_LabelsEntry;
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

  fromJSON(object: any): CreateDashboardRequest_LabelsEntry {
    const message = {
      ...baseCreateDashboardRequest_LabelsEntry,
    } as CreateDashboardRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateDashboardRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateDashboardRequest_LabelsEntry>, I>
  >(object: I): CreateDashboardRequest_LabelsEntry {
    const message = {
      ...baseCreateDashboardRequest_LabelsEntry,
    } as CreateDashboardRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateDashboardRequest_LabelsEntry.$type,
  CreateDashboardRequest_LabelsEntry
);

const baseCreateDashboardMetadata: object = {
  $type: "yandex.cloud.monitoring.v3.CreateDashboardMetadata",
  dashboardId: "",
};

export const CreateDashboardMetadata = {
  $type: "yandex.cloud.monitoring.v3.CreateDashboardMetadata" as const,

  encode(
    message: CreateDashboardMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dashboardId !== "") {
      writer.uint32(10).string(message.dashboardId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateDashboardMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateDashboardMetadata,
    } as CreateDashboardMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dashboardId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateDashboardMetadata {
    const message = {
      ...baseCreateDashboardMetadata,
    } as CreateDashboardMetadata;
    message.dashboardId =
      object.dashboardId !== undefined && object.dashboardId !== null
        ? String(object.dashboardId)
        : "";
    return message;
  },

  toJSON(message: CreateDashboardMetadata): unknown {
    const obj: any = {};
    message.dashboardId !== undefined &&
      (obj.dashboardId = message.dashboardId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateDashboardMetadata>, I>>(
    object: I
  ): CreateDashboardMetadata {
    const message = {
      ...baseCreateDashboardMetadata,
    } as CreateDashboardMetadata;
    message.dashboardId = object.dashboardId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateDashboardMetadata.$type, CreateDashboardMetadata);

const baseUpdateDashboardRequest: object = {
  $type: "yandex.cloud.monitoring.v3.UpdateDashboardRequest",
  dashboardId: "",
  name: "",
  description: "",
  title: "",
  etag: "",
  managedBy: "",
  managedLink: "",
};

export const UpdateDashboardRequest = {
  $type: "yandex.cloud.monitoring.v3.UpdateDashboardRequest" as const,

  encode(
    message: UpdateDashboardRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dashboardId !== "") {
      writer.uint32(10).string(message.dashboardId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateDashboardRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.monitoring.v3.UpdateDashboardRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.title !== "") {
      writer.uint32(42).string(message.title);
    }
    for (const v of message.widgets) {
      Widget.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.parametrization !== undefined) {
      Parametrization.encode(
        message.parametrization,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.etag !== "") {
      writer.uint32(66).string(message.etag);
    }
    if (message.managedBy !== "") {
      writer.uint32(210).string(message.managedBy);
    }
    if (message.managedLink !== "") {
      writer.uint32(218).string(message.managedLink);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateDashboardRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateDashboardRequest } as UpdateDashboardRequest;
    message.labels = {};
    message.widgets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dashboardId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          const entry4 = UpdateDashboardRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.title = reader.string();
          break;
        case 6:
          message.widgets.push(Widget.decode(reader, reader.uint32()));
          break;
        case 7:
          message.parametrization = Parametrization.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.etag = reader.string();
          break;
        case 26:
          message.managedBy = reader.string();
          break;
        case 27:
          message.managedLink = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateDashboardRequest {
    const message = { ...baseUpdateDashboardRequest } as UpdateDashboardRequest;
    message.dashboardId =
      object.dashboardId !== undefined && object.dashboardId !== null
        ? String(object.dashboardId)
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
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.widgets = (object.widgets ?? []).map((e: any) =>
      Widget.fromJSON(e)
    );
    message.parametrization =
      object.parametrization !== undefined && object.parametrization !== null
        ? Parametrization.fromJSON(object.parametrization)
        : undefined;
    message.etag =
      object.etag !== undefined && object.etag !== null
        ? String(object.etag)
        : "";
    message.managedBy =
      object.managedBy !== undefined && object.managedBy !== null
        ? String(object.managedBy)
        : "";
    message.managedLink =
      object.managedLink !== undefined && object.managedLink !== null
        ? String(object.managedLink)
        : "";
    return message;
  },

  toJSON(message: UpdateDashboardRequest): unknown {
    const obj: any = {};
    message.dashboardId !== undefined &&
      (obj.dashboardId = message.dashboardId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.title !== undefined && (obj.title = message.title);
    if (message.widgets) {
      obj.widgets = message.widgets.map((e) =>
        e ? Widget.toJSON(e) : undefined
      );
    } else {
      obj.widgets = [];
    }
    message.parametrization !== undefined &&
      (obj.parametrization = message.parametrization
        ? Parametrization.toJSON(message.parametrization)
        : undefined);
    message.etag !== undefined && (obj.etag = message.etag);
    message.managedBy !== undefined && (obj.managedBy = message.managedBy);
    message.managedLink !== undefined &&
      (obj.managedLink = message.managedLink);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateDashboardRequest>, I>>(
    object: I
  ): UpdateDashboardRequest {
    const message = { ...baseUpdateDashboardRequest } as UpdateDashboardRequest;
    message.dashboardId = object.dashboardId ?? "";
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
    message.title = object.title ?? "";
    message.widgets = object.widgets?.map((e) => Widget.fromPartial(e)) || [];
    message.parametrization =
      object.parametrization !== undefined && object.parametrization !== null
        ? Parametrization.fromPartial(object.parametrization)
        : undefined;
    message.etag = object.etag ?? "";
    message.managedBy = object.managedBy ?? "";
    message.managedLink = object.managedLink ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateDashboardRequest.$type, UpdateDashboardRequest);

const baseUpdateDashboardRequest_LabelsEntry: object = {
  $type: "yandex.cloud.monitoring.v3.UpdateDashboardRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateDashboardRequest_LabelsEntry = {
  $type:
    "yandex.cloud.monitoring.v3.UpdateDashboardRequest.LabelsEntry" as const,

  encode(
    message: UpdateDashboardRequest_LabelsEntry,
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
  ): UpdateDashboardRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateDashboardRequest_LabelsEntry,
    } as UpdateDashboardRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateDashboardRequest_LabelsEntry {
    const message = {
      ...baseUpdateDashboardRequest_LabelsEntry,
    } as UpdateDashboardRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateDashboardRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateDashboardRequest_LabelsEntry>, I>
  >(object: I): UpdateDashboardRequest_LabelsEntry {
    const message = {
      ...baseUpdateDashboardRequest_LabelsEntry,
    } as UpdateDashboardRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateDashboardRequest_LabelsEntry.$type,
  UpdateDashboardRequest_LabelsEntry
);

const baseUpdateDashboardMetadata: object = {
  $type: "yandex.cloud.monitoring.v3.UpdateDashboardMetadata",
  dashboardId: "",
};

export const UpdateDashboardMetadata = {
  $type: "yandex.cloud.monitoring.v3.UpdateDashboardMetadata" as const,

  encode(
    message: UpdateDashboardMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dashboardId !== "") {
      writer.uint32(10).string(message.dashboardId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateDashboardMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateDashboardMetadata,
    } as UpdateDashboardMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dashboardId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateDashboardMetadata {
    const message = {
      ...baseUpdateDashboardMetadata,
    } as UpdateDashboardMetadata;
    message.dashboardId =
      object.dashboardId !== undefined && object.dashboardId !== null
        ? String(object.dashboardId)
        : "";
    return message;
  },

  toJSON(message: UpdateDashboardMetadata): unknown {
    const obj: any = {};
    message.dashboardId !== undefined &&
      (obj.dashboardId = message.dashboardId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateDashboardMetadata>, I>>(
    object: I
  ): UpdateDashboardMetadata {
    const message = {
      ...baseUpdateDashboardMetadata,
    } as UpdateDashboardMetadata;
    message.dashboardId = object.dashboardId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateDashboardMetadata.$type, UpdateDashboardMetadata);

const baseDeleteDashboardRequest: object = {
  $type: "yandex.cloud.monitoring.v3.DeleteDashboardRequest",
  dashboardId: "",
  etag: "",
};

export const DeleteDashboardRequest = {
  $type: "yandex.cloud.monitoring.v3.DeleteDashboardRequest" as const,

  encode(
    message: DeleteDashboardRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dashboardId !== "") {
      writer.uint32(10).string(message.dashboardId);
    }
    if (message.etag !== "") {
      writer.uint32(18).string(message.etag);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteDashboardRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteDashboardRequest } as DeleteDashboardRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dashboardId = reader.string();
          break;
        case 2:
          message.etag = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteDashboardRequest {
    const message = { ...baseDeleteDashboardRequest } as DeleteDashboardRequest;
    message.dashboardId =
      object.dashboardId !== undefined && object.dashboardId !== null
        ? String(object.dashboardId)
        : "";
    message.etag =
      object.etag !== undefined && object.etag !== null
        ? String(object.etag)
        : "";
    return message;
  },

  toJSON(message: DeleteDashboardRequest): unknown {
    const obj: any = {};
    message.dashboardId !== undefined &&
      (obj.dashboardId = message.dashboardId);
    message.etag !== undefined && (obj.etag = message.etag);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteDashboardRequest>, I>>(
    object: I
  ): DeleteDashboardRequest {
    const message = { ...baseDeleteDashboardRequest } as DeleteDashboardRequest;
    message.dashboardId = object.dashboardId ?? "";
    message.etag = object.etag ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteDashboardRequest.$type, DeleteDashboardRequest);

const baseDeleteDashboardMetadata: object = {
  $type: "yandex.cloud.monitoring.v3.DeleteDashboardMetadata",
  dashboardId: "",
};

export const DeleteDashboardMetadata = {
  $type: "yandex.cloud.monitoring.v3.DeleteDashboardMetadata" as const,

  encode(
    message: DeleteDashboardMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dashboardId !== "") {
      writer.uint32(10).string(message.dashboardId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteDashboardMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteDashboardMetadata,
    } as DeleteDashboardMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dashboardId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteDashboardMetadata {
    const message = {
      ...baseDeleteDashboardMetadata,
    } as DeleteDashboardMetadata;
    message.dashboardId =
      object.dashboardId !== undefined && object.dashboardId !== null
        ? String(object.dashboardId)
        : "";
    return message;
  },

  toJSON(message: DeleteDashboardMetadata): unknown {
    const obj: any = {};
    message.dashboardId !== undefined &&
      (obj.dashboardId = message.dashboardId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteDashboardMetadata>, I>>(
    object: I
  ): DeleteDashboardMetadata {
    const message = {
      ...baseDeleteDashboardMetadata,
    } as DeleteDashboardMetadata;
    message.dashboardId = object.dashboardId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteDashboardMetadata.$type, DeleteDashboardMetadata);

const baseListDashboardOperationsRequest: object = {
  $type: "yandex.cloud.monitoring.v3.ListDashboardOperationsRequest",
  dashboardId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListDashboardOperationsRequest = {
  $type: "yandex.cloud.monitoring.v3.ListDashboardOperationsRequest" as const,

  encode(
    message: ListDashboardOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dashboardId !== "") {
      writer.uint32(10).string(message.dashboardId);
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
  ): ListDashboardOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListDashboardOperationsRequest,
    } as ListDashboardOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dashboardId = reader.string();
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

  fromJSON(object: any): ListDashboardOperationsRequest {
    const message = {
      ...baseListDashboardOperationsRequest,
    } as ListDashboardOperationsRequest;
    message.dashboardId =
      object.dashboardId !== undefined && object.dashboardId !== null
        ? String(object.dashboardId)
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

  toJSON(message: ListDashboardOperationsRequest): unknown {
    const obj: any = {};
    message.dashboardId !== undefined &&
      (obj.dashboardId = message.dashboardId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListDashboardOperationsRequest>, I>>(
    object: I
  ): ListDashboardOperationsRequest {
    const message = {
      ...baseListDashboardOperationsRequest,
    } as ListDashboardOperationsRequest;
    message.dashboardId = object.dashboardId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListDashboardOperationsRequest.$type,
  ListDashboardOperationsRequest
);

const baseListDashboardOperationsResponse: object = {
  $type: "yandex.cloud.monitoring.v3.ListDashboardOperationsResponse",
  nextPageToken: "",
};

export const ListDashboardOperationsResponse = {
  $type: "yandex.cloud.monitoring.v3.ListDashboardOperationsResponse" as const,

  encode(
    message: ListDashboardOperationsResponse,
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
  ): ListDashboardOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListDashboardOperationsResponse,
    } as ListDashboardOperationsResponse;
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

  fromJSON(object: any): ListDashboardOperationsResponse {
    const message = {
      ...baseListDashboardOperationsResponse,
    } as ListDashboardOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListDashboardOperationsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<ListDashboardOperationsResponse>, I>>(
    object: I
  ): ListDashboardOperationsResponse {
    const message = {
      ...baseListDashboardOperationsResponse,
    } as ListDashboardOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListDashboardOperationsResponse.$type,
  ListDashboardOperationsResponse
);

/** A set of methods for managing dashboards. */
export const DashboardServiceService = {
  /** Returns the specified dashboard. */
  get: {
    path: "/yandex.cloud.monitoring.v3.DashboardService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetDashboardRequest) =>
      Buffer.from(GetDashboardRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetDashboardRequest.decode(value),
    responseSerialize: (value: Dashboard) =>
      Buffer.from(Dashboard.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Dashboard.decode(value),
  },
  /** Retrieves the list of dashboards in the specified folder. */
  list: {
    path: "/yandex.cloud.monitoring.v3.DashboardService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDashboardsRequest) =>
      Buffer.from(ListDashboardsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListDashboardsRequest.decode(value),
    responseSerialize: (value: ListDashboardsResponse) =>
      Buffer.from(ListDashboardsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListDashboardsResponse.decode(value),
  },
  /** Creates a new dashboard in the specified folder. */
  create: {
    path: "/yandex.cloud.monitoring.v3.DashboardService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateDashboardRequest) =>
      Buffer.from(CreateDashboardRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateDashboardRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified dashboard. */
  update: {
    path: "/yandex.cloud.monitoring.v3.DashboardService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateDashboardRequest) =>
      Buffer.from(UpdateDashboardRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateDashboardRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified dashboard. */
  delete: {
    path: "/yandex.cloud.monitoring.v3.DashboardService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteDashboardRequest) =>
      Buffer.from(DeleteDashboardRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteDashboardRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified dashboard. */
  listOperations: {
    path: "/yandex.cloud.monitoring.v3.DashboardService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListDashboardOperationsRequest) =>
      Buffer.from(ListDashboardOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListDashboardOperationsRequest.decode(value),
    responseSerialize: (value: ListDashboardOperationsResponse) =>
      Buffer.from(ListDashboardOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListDashboardOperationsResponse.decode(value),
  },
} as const;

export interface DashboardServiceServer extends UntypedServiceImplementation {
  /** Returns the specified dashboard. */
  get: handleUnaryCall<GetDashboardRequest, Dashboard>;
  /** Retrieves the list of dashboards in the specified folder. */
  list: handleUnaryCall<ListDashboardsRequest, ListDashboardsResponse>;
  /** Creates a new dashboard in the specified folder. */
  create: handleUnaryCall<CreateDashboardRequest, Operation>;
  /** Updates the specified dashboard. */
  update: handleUnaryCall<UpdateDashboardRequest, Operation>;
  /** Deletes the specified dashboard. */
  delete: handleUnaryCall<DeleteDashboardRequest, Operation>;
  /** Lists operations for the specified dashboard. */
  listOperations: handleUnaryCall<
    ListDashboardOperationsRequest,
    ListDashboardOperationsResponse
  >;
}

export interface DashboardServiceClient extends Client {
  /** Returns the specified dashboard. */
  get(
    request: GetDashboardRequest,
    callback: (error: ServiceError | null, response: Dashboard) => void
  ): ClientUnaryCall;
  get(
    request: GetDashboardRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Dashboard) => void
  ): ClientUnaryCall;
  get(
    request: GetDashboardRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Dashboard) => void
  ): ClientUnaryCall;
  /** Retrieves the list of dashboards in the specified folder. */
  list(
    request: ListDashboardsRequest,
    callback: (
      error: ServiceError | null,
      response: ListDashboardsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListDashboardsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListDashboardsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListDashboardsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListDashboardsResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates a new dashboard in the specified folder. */
  create(
    request: CreateDashboardRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateDashboardRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateDashboardRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified dashboard. */
  update(
    request: UpdateDashboardRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateDashboardRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateDashboardRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified dashboard. */
  delete(
    request: DeleteDashboardRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteDashboardRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteDashboardRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified dashboard. */
  listOperations(
    request: ListDashboardOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListDashboardOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListDashboardOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListDashboardOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListDashboardOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListDashboardOperationsResponse
    ) => void
  ): ClientUnaryCall;
}

export const DashboardServiceClient = makeGenericClientConstructor(
  DashboardServiceService,
  "yandex.cloud.monitoring.v3.DashboardService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): DashboardServiceClient;
  service: typeof DashboardServiceService;
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
