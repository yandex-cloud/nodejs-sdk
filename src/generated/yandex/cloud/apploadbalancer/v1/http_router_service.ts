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
  RouteOptions,
  VirtualHost,
} from "../../../../yandex/cloud/apploadbalancer/v1/virtual_host";
import { HttpRouter } from "../../../../yandex/cloud/apploadbalancer/v1/http_router";
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.apploadbalancer.v1";

export interface GetHttpRouterRequest {
  $type: "yandex.cloud.apploadbalancer.v1.GetHttpRouterRequest";
  /**
   * ID of the HTTP router to return.
   *
   * To get the HTTP router ID, make a [HttpRouterService.List] request.
   */
  httpRouterId: string;
}

export interface ListHttpRoutersRequest {
  $type: "yandex.cloud.apploadbalancer.v1.ListHttpRoutersRequest";
  /**
   * ID of the folder to list HTTP routers in.
   *
   * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than `page_size`, the service returns a [ListHttpRoutersResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set `page_token` to the
   * [ListHttpRoutersResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters HTTP routers listed in the response.
   *
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [HttpRouter.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   * Example of a filter: `name=my-http-router`.
   */
  filter: string;
}

export interface ListHttpRoutersResponse {
  $type: "yandex.cloud.apploadbalancer.v1.ListHttpRoutersResponse";
  /** List of HTTP routers in the specified folder. */
  httpRouters: HttpRouter[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListHttpRoutersRequest.page_size], use `next_page_token` as the value
   * for the [ListHttpRoutersRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

export interface DeleteHttpRouterRequest {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteHttpRouterRequest";
  /**
   * ID of the HTTP router to delete.
   *
   * To get the HTTP router ID, make a [HttpRouterService.List] request.
   */
  httpRouterId: string;
}

export interface DeleteHttpRouterMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteHttpRouterMetadata";
  /** ID of the HTTP router that is being deleted. */
  httpRouterId: string;
}

export interface UpdateHttpRouterRequest {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest";
  /**
   * ID of the HTTP router to update.
   *
   * To get the HTTP router ID, make a [HttpRouterService.List] request.
   */
  httpRouterId: string;
  /** Field mask that specifies which attributes of the HTTP router should be updated. */
  updateMask?: FieldMask;
  /**
   * New name for the HTTP router.
   * The name must be unique within the folder.
   */
  name: string;
  /** New description of the HTTP router. */
  description: string;
  /**
   * HTTP router labels as `key:value` pairs.
   * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
   *
   * Existing set of labels is completely replaced by the provided set, so if you just want
   * to add or remove a label:
   * 1. Get the current set of labels with a [HttpRouterService.Get] request.
   * 2. Add or remove a label in this set.
   * 3. Send the new set in this field.
   */
  labels: { [key: string]: string };
  /**
   * New virtual hosts that combine routes inside the router.
   * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router#virtual-host).
   *
   * Only one virtual host with no authority (default match) can be specified.
   *
   * Existing list of virtual hosts is completely replaced by the specified list, so if you just want to add or remove
   * a virtual host, make a [VirtualHostService.Create] request or a [VirtualHostService.Delete] request.
   */
  virtualHosts: VirtualHost[];
  /** New route options for the HTTP router. */
  routeOptions?: RouteOptions;
}

export interface UpdateHttpRouterRequest_LabelsEntry {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateHttpRouterMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterMetadata";
  /** ID of the HTTP router that is being updated. */
  httpRouterId: string;
}

export interface CreateHttpRouterRequest {
  $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest";
  /**
   * ID of the folder to create an HTTP router in.
   *
   * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
   */
  folderId: string;
  /**
   * Name of the HTTP router.
   * The name must be unique within the folder.
   */
  name: string;
  /** Description of the HTTP router. */
  description: string;
  /**
   * HTTP router labels as `key:value` pairs.
   * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
   */
  labels: { [key: string]: string };
  /**
   * Virtual hosts that combine routes inside the router.
   * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router#virtual-host).
   *
   * Only one virtual host with no authority (default match) can be specified.
   */
  virtualHosts: VirtualHost[];
  /** Route options for the HTTP router. */
  routeOptions?: RouteOptions;
}

export interface CreateHttpRouterRequest_LabelsEntry {
  $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface CreateHttpRouterMetadata {
  $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterMetadata";
  /** ID of the HTTP router that is being created. */
  httpRouterId: string;
}

export interface ListHttpRouterOperationsRequest {
  $type: "yandex.cloud.apploadbalancer.v1.ListHttpRouterOperationsRequest";
  /**
   * ID of the HTTP router to get operations for.
   *
   * To get the HTTP router ID, use a [HttpRouterService.List] request.
   */
  httpRouterId: string;
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than [page_size], the service returns a [ListHttpRouterOperationsResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListHttpRouterOperationsResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
}

export interface ListHttpRouterOperationsResponse {
  $type: "yandex.cloud.apploadbalancer.v1.ListHttpRouterOperationsResponse";
  /** List of operations for the specified HTTP router. */
  operations: Operation[];
  /**
   * Token for getting the next page of the list. If the number of results is greater than
   * the specified [ListHttpRouterOperationsRequest.page_size], use `next_page_token` as the value
   * for the [ListHttpRouterOperationsRequest.page_token] parameter in the next list request.
   *
   * Each subsequent page will have its own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

const baseGetHttpRouterRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.GetHttpRouterRequest",
  httpRouterId: "",
};

export const GetHttpRouterRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.GetHttpRouterRequest" as const,

  encode(
    message: GetHttpRouterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.httpRouterId !== "") {
      writer.uint32(10).string(message.httpRouterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetHttpRouterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetHttpRouterRequest } as GetHttpRouterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.httpRouterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetHttpRouterRequest {
    const message = { ...baseGetHttpRouterRequest } as GetHttpRouterRequest;
    message.httpRouterId =
      object.httpRouterId !== undefined && object.httpRouterId !== null
        ? String(object.httpRouterId)
        : "";
    return message;
  },

  toJSON(message: GetHttpRouterRequest): unknown {
    const obj: any = {};
    message.httpRouterId !== undefined &&
      (obj.httpRouterId = message.httpRouterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetHttpRouterRequest>, I>>(
    object: I
  ): GetHttpRouterRequest {
    const message = { ...baseGetHttpRouterRequest } as GetHttpRouterRequest;
    message.httpRouterId = object.httpRouterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetHttpRouterRequest.$type, GetHttpRouterRequest);

const baseListHttpRoutersRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.ListHttpRoutersRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListHttpRoutersRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.ListHttpRoutersRequest" as const,

  encode(
    message: ListHttpRoutersRequest,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListHttpRoutersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListHttpRoutersRequest } as ListHttpRoutersRequest;
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

  fromJSON(object: any): ListHttpRoutersRequest {
    const message = { ...baseListHttpRoutersRequest } as ListHttpRoutersRequest;
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

  toJSON(message: ListHttpRoutersRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListHttpRoutersRequest>, I>>(
    object: I
  ): ListHttpRoutersRequest {
    const message = { ...baseListHttpRoutersRequest } as ListHttpRoutersRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListHttpRoutersRequest.$type, ListHttpRoutersRequest);

const baseListHttpRoutersResponse: object = {
  $type: "yandex.cloud.apploadbalancer.v1.ListHttpRoutersResponse",
  nextPageToken: "",
};

export const ListHttpRoutersResponse = {
  $type: "yandex.cloud.apploadbalancer.v1.ListHttpRoutersResponse" as const,

  encode(
    message: ListHttpRoutersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.httpRouters) {
      HttpRouter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListHttpRoutersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListHttpRoutersResponse,
    } as ListHttpRoutersResponse;
    message.httpRouters = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.httpRouters.push(HttpRouter.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListHttpRoutersResponse {
    const message = {
      ...baseListHttpRoutersResponse,
    } as ListHttpRoutersResponse;
    message.httpRouters = (object.httpRouters ?? []).map((e: any) =>
      HttpRouter.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListHttpRoutersResponse): unknown {
    const obj: any = {};
    if (message.httpRouters) {
      obj.httpRouters = message.httpRouters.map((e) =>
        e ? HttpRouter.toJSON(e) : undefined
      );
    } else {
      obj.httpRouters = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListHttpRoutersResponse>, I>>(
    object: I
  ): ListHttpRoutersResponse {
    const message = {
      ...baseListHttpRoutersResponse,
    } as ListHttpRoutersResponse;
    message.httpRouters =
      object.httpRouters?.map((e) => HttpRouter.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListHttpRoutersResponse.$type, ListHttpRoutersResponse);

const baseDeleteHttpRouterRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteHttpRouterRequest",
  httpRouterId: "",
};

export const DeleteHttpRouterRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteHttpRouterRequest" as const,

  encode(
    message: DeleteHttpRouterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.httpRouterId !== "") {
      writer.uint32(10).string(message.httpRouterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteHttpRouterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteHttpRouterRequest,
    } as DeleteHttpRouterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.httpRouterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteHttpRouterRequest {
    const message = {
      ...baseDeleteHttpRouterRequest,
    } as DeleteHttpRouterRequest;
    message.httpRouterId =
      object.httpRouterId !== undefined && object.httpRouterId !== null
        ? String(object.httpRouterId)
        : "";
    return message;
  },

  toJSON(message: DeleteHttpRouterRequest): unknown {
    const obj: any = {};
    message.httpRouterId !== undefined &&
      (obj.httpRouterId = message.httpRouterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteHttpRouterRequest>, I>>(
    object: I
  ): DeleteHttpRouterRequest {
    const message = {
      ...baseDeleteHttpRouterRequest,
    } as DeleteHttpRouterRequest;
    message.httpRouterId = object.httpRouterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteHttpRouterRequest.$type, DeleteHttpRouterRequest);

const baseDeleteHttpRouterMetadata: object = {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteHttpRouterMetadata",
  httpRouterId: "",
};

export const DeleteHttpRouterMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.DeleteHttpRouterMetadata" as const,

  encode(
    message: DeleteHttpRouterMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.httpRouterId !== "") {
      writer.uint32(10).string(message.httpRouterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteHttpRouterMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteHttpRouterMetadata,
    } as DeleteHttpRouterMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.httpRouterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteHttpRouterMetadata {
    const message = {
      ...baseDeleteHttpRouterMetadata,
    } as DeleteHttpRouterMetadata;
    message.httpRouterId =
      object.httpRouterId !== undefined && object.httpRouterId !== null
        ? String(object.httpRouterId)
        : "";
    return message;
  },

  toJSON(message: DeleteHttpRouterMetadata): unknown {
    const obj: any = {};
    message.httpRouterId !== undefined &&
      (obj.httpRouterId = message.httpRouterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteHttpRouterMetadata>, I>>(
    object: I
  ): DeleteHttpRouterMetadata {
    const message = {
      ...baseDeleteHttpRouterMetadata,
    } as DeleteHttpRouterMetadata;
    message.httpRouterId = object.httpRouterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DeleteHttpRouterMetadata.$type,
  DeleteHttpRouterMetadata
);

const baseUpdateHttpRouterRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest",
  httpRouterId: "",
  name: "",
  description: "",
};

export const UpdateHttpRouterRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest" as const,

  encode(
    message: UpdateHttpRouterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.httpRouterId !== "") {
      writer.uint32(10).string(message.httpRouterId);
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
      UpdateHttpRouterRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(42).fork()
      ).ldelim();
    });
    for (const v of message.virtualHosts) {
      VirtualHost.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.routeOptions !== undefined) {
      RouteOptions.encode(
        message.routeOptions,
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateHttpRouterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateHttpRouterRequest,
    } as UpdateHttpRouterRequest;
    message.labels = {};
    message.virtualHosts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.httpRouterId = reader.string();
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
          const entry5 = UpdateHttpRouterRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.virtualHosts.push(
            VirtualHost.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.routeOptions = RouteOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateHttpRouterRequest {
    const message = {
      ...baseUpdateHttpRouterRequest,
    } as UpdateHttpRouterRequest;
    message.httpRouterId =
      object.httpRouterId !== undefined && object.httpRouterId !== null
        ? String(object.httpRouterId)
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
    message.virtualHosts = (object.virtualHosts ?? []).map((e: any) =>
      VirtualHost.fromJSON(e)
    );
    message.routeOptions =
      object.routeOptions !== undefined && object.routeOptions !== null
        ? RouteOptions.fromJSON(object.routeOptions)
        : undefined;
    return message;
  },

  toJSON(message: UpdateHttpRouterRequest): unknown {
    const obj: any = {};
    message.httpRouterId !== undefined &&
      (obj.httpRouterId = message.httpRouterId);
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
    if (message.virtualHosts) {
      obj.virtualHosts = message.virtualHosts.map((e) =>
        e ? VirtualHost.toJSON(e) : undefined
      );
    } else {
      obj.virtualHosts = [];
    }
    message.routeOptions !== undefined &&
      (obj.routeOptions = message.routeOptions
        ? RouteOptions.toJSON(message.routeOptions)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateHttpRouterRequest>, I>>(
    object: I
  ): UpdateHttpRouterRequest {
    const message = {
      ...baseUpdateHttpRouterRequest,
    } as UpdateHttpRouterRequest;
    message.httpRouterId = object.httpRouterId ?? "";
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
    message.virtualHosts =
      object.virtualHosts?.map((e) => VirtualHost.fromPartial(e)) || [];
    message.routeOptions =
      object.routeOptions !== undefined && object.routeOptions !== null
        ? RouteOptions.fromPartial(object.routeOptions)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(UpdateHttpRouterRequest.$type, UpdateHttpRouterRequest);

const baseUpdateHttpRouterRequest_LabelsEntry: object = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateHttpRouterRequest_LabelsEntry = {
  $type:
    "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest.LabelsEntry" as const,

  encode(
    message: UpdateHttpRouterRequest_LabelsEntry,
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
  ): UpdateHttpRouterRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateHttpRouterRequest_LabelsEntry,
    } as UpdateHttpRouterRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateHttpRouterRequest_LabelsEntry {
    const message = {
      ...baseUpdateHttpRouterRequest_LabelsEntry,
    } as UpdateHttpRouterRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateHttpRouterRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateHttpRouterRequest_LabelsEntry>, I>
  >(object: I): UpdateHttpRouterRequest_LabelsEntry {
    const message = {
      ...baseUpdateHttpRouterRequest_LabelsEntry,
    } as UpdateHttpRouterRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateHttpRouterRequest_LabelsEntry.$type,
  UpdateHttpRouterRequest_LabelsEntry
);

const baseUpdateHttpRouterMetadata: object = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterMetadata",
  httpRouterId: "",
};

export const UpdateHttpRouterMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterMetadata" as const,

  encode(
    message: UpdateHttpRouterMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.httpRouterId !== "") {
      writer.uint32(10).string(message.httpRouterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateHttpRouterMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateHttpRouterMetadata,
    } as UpdateHttpRouterMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.httpRouterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateHttpRouterMetadata {
    const message = {
      ...baseUpdateHttpRouterMetadata,
    } as UpdateHttpRouterMetadata;
    message.httpRouterId =
      object.httpRouterId !== undefined && object.httpRouterId !== null
        ? String(object.httpRouterId)
        : "";
    return message;
  },

  toJSON(message: UpdateHttpRouterMetadata): unknown {
    const obj: any = {};
    message.httpRouterId !== undefined &&
      (obj.httpRouterId = message.httpRouterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateHttpRouterMetadata>, I>>(
    object: I
  ): UpdateHttpRouterMetadata {
    const message = {
      ...baseUpdateHttpRouterMetadata,
    } as UpdateHttpRouterMetadata;
    message.httpRouterId = object.httpRouterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateHttpRouterMetadata.$type,
  UpdateHttpRouterMetadata
);

const baseCreateHttpRouterRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest",
  folderId: "",
  name: "",
  description: "",
};

export const CreateHttpRouterRequest = {
  $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest" as const,

  encode(
    message: CreateHttpRouterRequest,
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
      CreateHttpRouterRequest_LabelsEntry.encode(
        {
          $type:
            "yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    for (const v of message.virtualHosts) {
      VirtualHost.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.routeOptions !== undefined) {
      RouteOptions.encode(
        message.routeOptions,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateHttpRouterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateHttpRouterRequest,
    } as CreateHttpRouterRequest;
    message.labels = {};
    message.virtualHosts = [];
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
          const entry4 = CreateHttpRouterRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.virtualHosts.push(
            VirtualHost.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.routeOptions = RouteOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateHttpRouterRequest {
    const message = {
      ...baseCreateHttpRouterRequest,
    } as CreateHttpRouterRequest;
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
    message.virtualHosts = (object.virtualHosts ?? []).map((e: any) =>
      VirtualHost.fromJSON(e)
    );
    message.routeOptions =
      object.routeOptions !== undefined && object.routeOptions !== null
        ? RouteOptions.fromJSON(object.routeOptions)
        : undefined;
    return message;
  },

  toJSON(message: CreateHttpRouterRequest): unknown {
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
    if (message.virtualHosts) {
      obj.virtualHosts = message.virtualHosts.map((e) =>
        e ? VirtualHost.toJSON(e) : undefined
      );
    } else {
      obj.virtualHosts = [];
    }
    message.routeOptions !== undefined &&
      (obj.routeOptions = message.routeOptions
        ? RouteOptions.toJSON(message.routeOptions)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateHttpRouterRequest>, I>>(
    object: I
  ): CreateHttpRouterRequest {
    const message = {
      ...baseCreateHttpRouterRequest,
    } as CreateHttpRouterRequest;
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
    message.virtualHosts =
      object.virtualHosts?.map((e) => VirtualHost.fromPartial(e)) || [];
    message.routeOptions =
      object.routeOptions !== undefined && object.routeOptions !== null
        ? RouteOptions.fromPartial(object.routeOptions)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreateHttpRouterRequest.$type, CreateHttpRouterRequest);

const baseCreateHttpRouterRequest_LabelsEntry: object = {
  $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateHttpRouterRequest_LabelsEntry = {
  $type:
    "yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest.LabelsEntry" as const,

  encode(
    message: CreateHttpRouterRequest_LabelsEntry,
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
  ): CreateHttpRouterRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateHttpRouterRequest_LabelsEntry,
    } as CreateHttpRouterRequest_LabelsEntry;
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

  fromJSON(object: any): CreateHttpRouterRequest_LabelsEntry {
    const message = {
      ...baseCreateHttpRouterRequest_LabelsEntry,
    } as CreateHttpRouterRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateHttpRouterRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateHttpRouterRequest_LabelsEntry>, I>
  >(object: I): CreateHttpRouterRequest_LabelsEntry {
    const message = {
      ...baseCreateHttpRouterRequest_LabelsEntry,
    } as CreateHttpRouterRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateHttpRouterRequest_LabelsEntry.$type,
  CreateHttpRouterRequest_LabelsEntry
);

const baseCreateHttpRouterMetadata: object = {
  $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterMetadata",
  httpRouterId: "",
};

export const CreateHttpRouterMetadata = {
  $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterMetadata" as const,

  encode(
    message: CreateHttpRouterMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.httpRouterId !== "") {
      writer.uint32(10).string(message.httpRouterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateHttpRouterMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateHttpRouterMetadata,
    } as CreateHttpRouterMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.httpRouterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateHttpRouterMetadata {
    const message = {
      ...baseCreateHttpRouterMetadata,
    } as CreateHttpRouterMetadata;
    message.httpRouterId =
      object.httpRouterId !== undefined && object.httpRouterId !== null
        ? String(object.httpRouterId)
        : "";
    return message;
  },

  toJSON(message: CreateHttpRouterMetadata): unknown {
    const obj: any = {};
    message.httpRouterId !== undefined &&
      (obj.httpRouterId = message.httpRouterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateHttpRouterMetadata>, I>>(
    object: I
  ): CreateHttpRouterMetadata {
    const message = {
      ...baseCreateHttpRouterMetadata,
    } as CreateHttpRouterMetadata;
    message.httpRouterId = object.httpRouterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateHttpRouterMetadata.$type,
  CreateHttpRouterMetadata
);

const baseListHttpRouterOperationsRequest: object = {
  $type: "yandex.cloud.apploadbalancer.v1.ListHttpRouterOperationsRequest",
  httpRouterId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListHttpRouterOperationsRequest = {
  $type:
    "yandex.cloud.apploadbalancer.v1.ListHttpRouterOperationsRequest" as const,

  encode(
    message: ListHttpRouterOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.httpRouterId !== "") {
      writer.uint32(10).string(message.httpRouterId);
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
  ): ListHttpRouterOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListHttpRouterOperationsRequest,
    } as ListHttpRouterOperationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.httpRouterId = reader.string();
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

  fromJSON(object: any): ListHttpRouterOperationsRequest {
    const message = {
      ...baseListHttpRouterOperationsRequest,
    } as ListHttpRouterOperationsRequest;
    message.httpRouterId =
      object.httpRouterId !== undefined && object.httpRouterId !== null
        ? String(object.httpRouterId)
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

  toJSON(message: ListHttpRouterOperationsRequest): unknown {
    const obj: any = {};
    message.httpRouterId !== undefined &&
      (obj.httpRouterId = message.httpRouterId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListHttpRouterOperationsRequest>, I>>(
    object: I
  ): ListHttpRouterOperationsRequest {
    const message = {
      ...baseListHttpRouterOperationsRequest,
    } as ListHttpRouterOperationsRequest;
    message.httpRouterId = object.httpRouterId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListHttpRouterOperationsRequest.$type,
  ListHttpRouterOperationsRequest
);

const baseListHttpRouterOperationsResponse: object = {
  $type: "yandex.cloud.apploadbalancer.v1.ListHttpRouterOperationsResponse",
  nextPageToken: "",
};

export const ListHttpRouterOperationsResponse = {
  $type:
    "yandex.cloud.apploadbalancer.v1.ListHttpRouterOperationsResponse" as const,

  encode(
    message: ListHttpRouterOperationsResponse,
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
  ): ListHttpRouterOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListHttpRouterOperationsResponse,
    } as ListHttpRouterOperationsResponse;
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

  fromJSON(object: any): ListHttpRouterOperationsResponse {
    const message = {
      ...baseListHttpRouterOperationsResponse,
    } as ListHttpRouterOperationsResponse;
    message.operations = (object.operations ?? []).map((e: any) =>
      Operation.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListHttpRouterOperationsResponse): unknown {
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

  fromPartial<
    I extends Exact<DeepPartial<ListHttpRouterOperationsResponse>, I>
  >(object: I): ListHttpRouterOperationsResponse {
    const message = {
      ...baseListHttpRouterOperationsResponse,
    } as ListHttpRouterOperationsResponse;
    message.operations =
      object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListHttpRouterOperationsResponse.$type,
  ListHttpRouterOperationsResponse
);

/** A set of methods for managing HTTP routers. */
export const HttpRouterServiceService = {
  /**
   * Returns the specified HTTP router.
   *
   * To get the list of all available HTTP routers, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetHttpRouterRequest) =>
      Buffer.from(GetHttpRouterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetHttpRouterRequest.decode(value),
    responseSerialize: (value: HttpRouter) =>
      Buffer.from(HttpRouter.encode(value).finish()),
    responseDeserialize: (value: Buffer) => HttpRouter.decode(value),
  },
  /** Lists HTTP routers in the specified folder. */
  list: {
    path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListHttpRoutersRequest) =>
      Buffer.from(ListHttpRoutersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListHttpRoutersRequest.decode(value),
    responseSerialize: (value: ListHttpRoutersResponse) =>
      Buffer.from(ListHttpRoutersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListHttpRoutersResponse.decode(value),
  },
  /** Creates an HTTP router in the specified folder. */
  create: {
    path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateHttpRouterRequest) =>
      Buffer.from(CreateHttpRouterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateHttpRouterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Updates the specified HTTP router. */
  update: {
    path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateHttpRouterRequest) =>
      Buffer.from(UpdateHttpRouterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateHttpRouterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes the specified HTTP router. */
  delete: {
    path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteHttpRouterRequest) =>
      Buffer.from(DeleteHttpRouterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteHttpRouterRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Lists operations for the specified HTTP router. */
  listOperations: {
    path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/ListOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListHttpRouterOperationsRequest) =>
      Buffer.from(ListHttpRouterOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListHttpRouterOperationsRequest.decode(value),
    responseSerialize: (value: ListHttpRouterOperationsResponse) =>
      Buffer.from(ListHttpRouterOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListHttpRouterOperationsResponse.decode(value),
  },
} as const;

export interface HttpRouterServiceServer extends UntypedServiceImplementation {
  /**
   * Returns the specified HTTP router.
   *
   * To get the list of all available HTTP routers, make a [List] request.
   */
  get: handleUnaryCall<GetHttpRouterRequest, HttpRouter>;
  /** Lists HTTP routers in the specified folder. */
  list: handleUnaryCall<ListHttpRoutersRequest, ListHttpRoutersResponse>;
  /** Creates an HTTP router in the specified folder. */
  create: handleUnaryCall<CreateHttpRouterRequest, Operation>;
  /** Updates the specified HTTP router. */
  update: handleUnaryCall<UpdateHttpRouterRequest, Operation>;
  /** Deletes the specified HTTP router. */
  delete: handleUnaryCall<DeleteHttpRouterRequest, Operation>;
  /** Lists operations for the specified HTTP router. */
  listOperations: handleUnaryCall<
    ListHttpRouterOperationsRequest,
    ListHttpRouterOperationsResponse
  >;
}

export interface HttpRouterServiceClient extends Client {
  /**
   * Returns the specified HTTP router.
   *
   * To get the list of all available HTTP routers, make a [List] request.
   */
  get(
    request: GetHttpRouterRequest,
    callback: (error: ServiceError | null, response: HttpRouter) => void
  ): ClientUnaryCall;
  get(
    request: GetHttpRouterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: HttpRouter) => void
  ): ClientUnaryCall;
  get(
    request: GetHttpRouterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: HttpRouter) => void
  ): ClientUnaryCall;
  /** Lists HTTP routers in the specified folder. */
  list(
    request: ListHttpRoutersRequest,
    callback: (
      error: ServiceError | null,
      response: ListHttpRoutersResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListHttpRoutersRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListHttpRoutersResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListHttpRoutersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListHttpRoutersResponse
    ) => void
  ): ClientUnaryCall;
  /** Creates an HTTP router in the specified folder. */
  create(
    request: CreateHttpRouterRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateHttpRouterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateHttpRouterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Updates the specified HTTP router. */
  update(
    request: UpdateHttpRouterRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateHttpRouterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateHttpRouterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes the specified HTTP router. */
  delete(
    request: DeleteHttpRouterRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteHttpRouterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteHttpRouterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Lists operations for the specified HTTP router. */
  listOperations(
    request: ListHttpRouterOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListHttpRouterOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListHttpRouterOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListHttpRouterOperationsResponse
    ) => void
  ): ClientUnaryCall;
  listOperations(
    request: ListHttpRouterOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListHttpRouterOperationsResponse
    ) => void
  ): ClientUnaryCall;
}

export const HttpRouterServiceClient = makeGenericClientConstructor(
  HttpRouterServiceService,
  "yandex.cloud.apploadbalancer.v1.HttpRouterService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): HttpRouterServiceClient;
  service: typeof HttpRouterServiceService;
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
