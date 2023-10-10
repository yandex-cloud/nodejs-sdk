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
  SecondaryHostnames,
  OriginProtocol,
  ResourceOptions,
  SSLTargetCertificate,
  Resource,
  originProtocolFromJSON,
  originProtocolToJSON,
} from "../../../../yandex/cloud/cdn/v1/resource";
import { OriginMeta } from "../../../../yandex/cloud/cdn/v1/origin";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import { BoolValue, Int64Value } from "../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.cdn.v1";

/** A request to get a resource. */
export interface GetResourceRequest {
  $type: "yandex.cloud.cdn.v1.GetResourceRequest";
  /** ID of the requested resource. */
  resourceId: string;
}

export interface ListResourcesRequest {
  $type: "yandex.cloud.cdn.v1.ListResourcesRequest";
  /** ID of the folder to request listing for. */
  folderId: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListResourcesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results,
   * set [page_token] to the [ListResourcesResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
}

export interface ListResourcesResponse {
  $type: "yandex.cloud.cdn.v1.ListResourcesResponse";
  /** List of the resources */
  resources: Resource[];
  /**
   * [next_page_token] token allows you to get the next page of results for list requests.
   * If the number of results is larger than [ListResourcesRequest.page_size], use
   * the [next_page_token] as the value for the [ListResourcesRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface CreateResourceRequest {
  $type: "yandex.cloud.cdn.v1.CreateResourceRequest";
  /** ID of the to bind with new resource. */
  folderId: string;
  /** CDN endpoint CNAME, must be unique among clients's resources. */
  cname: string;
  /** Specify the origins to be used for CDN resources requests. */
  origin?: CreateResourceRequest_Origin;
  /** List of additional CNAMEs. */
  secondaryHostnames?: SecondaryHostnames;
  /** Specify the protocol schema to be used in communication with origin. */
  originProtocol: OriginProtocol;
  /**
   * Flag to create Resource either in active or disabled state.
   * In active state Origins payload could be transmitted from CDN CNAME requests.
   * Default value: true
   */
  active?: boolean;
  /** Resource settings and options to tune CDN edge behavior. Most is unset. */
  options?: ResourceOptions;
  /** SSL Certificate options. */
  sslCertificate?: SSLTargetCertificate;
  /** Labels of the resource. */
  labels: { [key: string]: string };
}

export interface CreateResourceRequest_Origin {
  $type: "yandex.cloud.cdn.v1.CreateResourceRequest.Origin";
  /** ID of pre-created origin group. */
  originGroupId: number | undefined;
  /**
   * Create new Origins group with single source, it's id will be
   * returned in result.
   */
  originSource: string | undefined;
  /** Set up resource origin parameters. */
  originSourceParams?: ResourceOriginParams | undefined;
}

export interface CreateResourceRequest_LabelsEntry {
  $type: "yandex.cloud.cdn.v1.CreateResourceRequest.LabelsEntry";
  key: string;
  value: string;
}

/** A set of resource origin parameters. */
export interface ResourceOriginParams {
  $type: "yandex.cloud.cdn.v1.ResourceOriginParams";
  /** Source of the content. */
  source: string;
  /** Set up type of the origin. */
  meta?: OriginMeta;
}

export interface CreateResourceMetadata {
  $type: "yandex.cloud.cdn.v1.CreateResourceMetadata";
  /** ID of created resource. */
  resourceId: string;
}

export interface UpdateResourceRequest {
  $type: "yandex.cloud.cdn.v1.UpdateResourceRequest";
  /** ID of updated resource. */
  resourceId: string;
  /** ID of updated origin group. */
  originGroupId?: number;
  /** List of additional CNAMEs. */
  secondaryHostnames?: SecondaryHostnames;
  /** Resource settings and options to tune CDN edge behavior. */
  options?: ResourceOptions;
  /** Specify the protocol schema to be used in communication with origin. */
  originProtocol: OriginProtocol;
  /**
   * Flag to create Resource either in active or disabled state.
   * In active state Origins payload could be transmitted from CDN CNAME requests.
   * Default value: true
   */
  active?: boolean;
  /** SSL Certificate options. */
  sslCertificate?: SSLTargetCertificate;
  /** Resource labels. At some point will be needed for granular detailing. */
  labels: { [key: string]: string };
}

export interface UpdateResourceRequest_LabelsEntry {
  $type: "yandex.cloud.cdn.v1.UpdateResourceRequest.LabelsEntry";
  key: string;
  value: string;
}

export interface UpdateResourceMetadata {
  $type: "yandex.cloud.cdn.v1.UpdateResourceMetadata";
  /** ID of updated resource. */
  resourceId: string;
}

export interface DeleteResourceRequest {
  $type: "yandex.cloud.cdn.v1.DeleteResourceRequest";
  /** ID of resource to delete. */
  resourceId: string;
}

export interface DeleteResourceMetadata {
  $type: "yandex.cloud.cdn.v1.DeleteResourceMetadata";
  /** ID of deleted resource. */
  resourceId: string;
}

export interface GetProviderCNameRequest {
  $type: "yandex.cloud.cdn.v1.GetProviderCNameRequest";
  /** Folder ID to get provider's CNAME. */
  folderId: string;
}

export interface GetProviderCNameResponse {
  $type: "yandex.cloud.cdn.v1.GetProviderCNameResponse";
  /** Provider's CNAME. */
  cname: string;
  /** ID of the folder that the provider belongs to. */
  folderId: string;
}

const baseGetResourceRequest: object = {
  $type: "yandex.cloud.cdn.v1.GetResourceRequest",
  resourceId: "",
};

export const GetResourceRequest = {
  $type: "yandex.cloud.cdn.v1.GetResourceRequest" as const,

  encode(
    message: GetResourceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetResourceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetResourceRequest } as GetResourceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetResourceRequest {
    const message = { ...baseGetResourceRequest } as GetResourceRequest;
    message.resourceId =
      object.resourceId !== undefined && object.resourceId !== null
        ? String(object.resourceId)
        : "";
    return message;
  },

  toJSON(message: GetResourceRequest): unknown {
    const obj: any = {};
    message.resourceId !== undefined && (obj.resourceId = message.resourceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetResourceRequest>, I>>(
    object: I
  ): GetResourceRequest {
    const message = { ...baseGetResourceRequest } as GetResourceRequest;
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetResourceRequest.$type, GetResourceRequest);

const baseListResourcesRequest: object = {
  $type: "yandex.cloud.cdn.v1.ListResourcesRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
};

export const ListResourcesRequest = {
  $type: "yandex.cloud.cdn.v1.ListResourcesRequest" as const,

  encode(
    message: ListResourcesRequest,
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
  ): ListResourcesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListResourcesRequest } as ListResourcesRequest;
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

  fromJSON(object: any): ListResourcesRequest {
    const message = { ...baseListResourcesRequest } as ListResourcesRequest;
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

  toJSON(message: ListResourcesRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListResourcesRequest>, I>>(
    object: I
  ): ListResourcesRequest {
    const message = { ...baseListResourcesRequest } as ListResourcesRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListResourcesRequest.$type, ListResourcesRequest);

const baseListResourcesResponse: object = {
  $type: "yandex.cloud.cdn.v1.ListResourcesResponse",
  nextPageToken: "",
};

export const ListResourcesResponse = {
  $type: "yandex.cloud.cdn.v1.ListResourcesResponse" as const,

  encode(
    message: ListResourcesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListResourcesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListResourcesResponse } as ListResourcesResponse;
    message.resources = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resources.push(Resource.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListResourcesResponse {
    const message = { ...baseListResourcesResponse } as ListResourcesResponse;
    message.resources = (object.resources ?? []).map((e: any) =>
      Resource.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListResourcesResponse): unknown {
    const obj: any = {};
    if (message.resources) {
      obj.resources = message.resources.map((e) =>
        e ? Resource.toJSON(e) : undefined
      );
    } else {
      obj.resources = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListResourcesResponse>, I>>(
    object: I
  ): ListResourcesResponse {
    const message = { ...baseListResourcesResponse } as ListResourcesResponse;
    message.resources =
      object.resources?.map((e) => Resource.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListResourcesResponse.$type, ListResourcesResponse);

const baseCreateResourceRequest: object = {
  $type: "yandex.cloud.cdn.v1.CreateResourceRequest",
  folderId: "",
  cname: "",
  originProtocol: 0,
};

export const CreateResourceRequest = {
  $type: "yandex.cloud.cdn.v1.CreateResourceRequest" as const,

  encode(
    message: CreateResourceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.folderId !== "") {
      writer.uint32(10).string(message.folderId);
    }
    if (message.cname !== "") {
      writer.uint32(18).string(message.cname);
    }
    if (message.origin !== undefined) {
      CreateResourceRequest_Origin.encode(
        message.origin,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.secondaryHostnames !== undefined) {
      SecondaryHostnames.encode(
        message.secondaryHostnames,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.originProtocol !== 0) {
      writer.uint32(40).int32(message.originProtocol);
    }
    if (message.active !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.active! },
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.options !== undefined) {
      ResourceOptions.encode(
        message.options,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.sslCertificate !== undefined) {
      SSLTargetCertificate.encode(
        message.sslCertificate,
        writer.uint32(66).fork()
      ).ldelim();
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      CreateResourceRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.cdn.v1.CreateResourceRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(74).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateResourceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateResourceRequest } as CreateResourceRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderId = reader.string();
          break;
        case 2:
          message.cname = reader.string();
          break;
        case 3:
          message.origin = CreateResourceRequest_Origin.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.secondaryHostnames = SecondaryHostnames.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.originProtocol = reader.int32() as any;
          break;
        case 6:
          message.active = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 7:
          message.options = ResourceOptions.decode(reader, reader.uint32());
          break;
        case 8:
          message.sslCertificate = SSLTargetCertificate.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          const entry9 = CreateResourceRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry9.value !== undefined) {
            message.labels[entry9.key] = entry9.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateResourceRequest {
    const message = { ...baseCreateResourceRequest } as CreateResourceRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    message.cname =
      object.cname !== undefined && object.cname !== null
        ? String(object.cname)
        : "";
    message.origin =
      object.origin !== undefined && object.origin !== null
        ? CreateResourceRequest_Origin.fromJSON(object.origin)
        : undefined;
    message.secondaryHostnames =
      object.secondaryHostnames !== undefined &&
      object.secondaryHostnames !== null
        ? SecondaryHostnames.fromJSON(object.secondaryHostnames)
        : undefined;
    message.originProtocol =
      object.originProtocol !== undefined && object.originProtocol !== null
        ? originProtocolFromJSON(object.originProtocol)
        : 0;
    message.active =
      object.active !== undefined && object.active !== null
        ? Boolean(object.active)
        : undefined;
    message.options =
      object.options !== undefined && object.options !== null
        ? ResourceOptions.fromJSON(object.options)
        : undefined;
    message.sslCertificate =
      object.sslCertificate !== undefined && object.sslCertificate !== null
        ? SSLTargetCertificate.fromJSON(object.sslCertificate)
        : undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: CreateResourceRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.cname !== undefined && (obj.cname = message.cname);
    message.origin !== undefined &&
      (obj.origin = message.origin
        ? CreateResourceRequest_Origin.toJSON(message.origin)
        : undefined);
    message.secondaryHostnames !== undefined &&
      (obj.secondaryHostnames = message.secondaryHostnames
        ? SecondaryHostnames.toJSON(message.secondaryHostnames)
        : undefined);
    message.originProtocol !== undefined &&
      (obj.originProtocol = originProtocolToJSON(message.originProtocol));
    message.active !== undefined && (obj.active = message.active);
    message.options !== undefined &&
      (obj.options = message.options
        ? ResourceOptions.toJSON(message.options)
        : undefined);
    message.sslCertificate !== undefined &&
      (obj.sslCertificate = message.sslCertificate
        ? SSLTargetCertificate.toJSON(message.sslCertificate)
        : undefined);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateResourceRequest>, I>>(
    object: I
  ): CreateResourceRequest {
    const message = { ...baseCreateResourceRequest } as CreateResourceRequest;
    message.folderId = object.folderId ?? "";
    message.cname = object.cname ?? "";
    message.origin =
      object.origin !== undefined && object.origin !== null
        ? CreateResourceRequest_Origin.fromPartial(object.origin)
        : undefined;
    message.secondaryHostnames =
      object.secondaryHostnames !== undefined &&
      object.secondaryHostnames !== null
        ? SecondaryHostnames.fromPartial(object.secondaryHostnames)
        : undefined;
    message.originProtocol = object.originProtocol ?? 0;
    message.active = object.active ?? undefined;
    message.options =
      object.options !== undefined && object.options !== null
        ? ResourceOptions.fromPartial(object.options)
        : undefined;
    message.sslCertificate =
      object.sslCertificate !== undefined && object.sslCertificate !== null
        ? SSLTargetCertificate.fromPartial(object.sslCertificate)
        : undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(CreateResourceRequest.$type, CreateResourceRequest);

const baseCreateResourceRequest_Origin: object = {
  $type: "yandex.cloud.cdn.v1.CreateResourceRequest.Origin",
};

export const CreateResourceRequest_Origin = {
  $type: "yandex.cloud.cdn.v1.CreateResourceRequest.Origin" as const,

  encode(
    message: CreateResourceRequest_Origin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.originGroupId !== undefined) {
      writer.uint32(8).int64(message.originGroupId);
    }
    if (message.originSource !== undefined) {
      writer.uint32(18).string(message.originSource);
    }
    if (message.originSourceParams !== undefined) {
      ResourceOriginParams.encode(
        message.originSourceParams,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateResourceRequest_Origin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateResourceRequest_Origin,
    } as CreateResourceRequest_Origin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.originGroupId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.originSource = reader.string();
          break;
        case 3:
          message.originSourceParams = ResourceOriginParams.decode(
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

  fromJSON(object: any): CreateResourceRequest_Origin {
    const message = {
      ...baseCreateResourceRequest_Origin,
    } as CreateResourceRequest_Origin;
    message.originGroupId =
      object.originGroupId !== undefined && object.originGroupId !== null
        ? Number(object.originGroupId)
        : undefined;
    message.originSource =
      object.originSource !== undefined && object.originSource !== null
        ? String(object.originSource)
        : undefined;
    message.originSourceParams =
      object.originSourceParams !== undefined &&
      object.originSourceParams !== null
        ? ResourceOriginParams.fromJSON(object.originSourceParams)
        : undefined;
    return message;
  },

  toJSON(message: CreateResourceRequest_Origin): unknown {
    const obj: any = {};
    message.originGroupId !== undefined &&
      (obj.originGroupId = Math.round(message.originGroupId));
    message.originSource !== undefined &&
      (obj.originSource = message.originSource);
    message.originSourceParams !== undefined &&
      (obj.originSourceParams = message.originSourceParams
        ? ResourceOriginParams.toJSON(message.originSourceParams)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateResourceRequest_Origin>, I>>(
    object: I
  ): CreateResourceRequest_Origin {
    const message = {
      ...baseCreateResourceRequest_Origin,
    } as CreateResourceRequest_Origin;
    message.originGroupId = object.originGroupId ?? undefined;
    message.originSource = object.originSource ?? undefined;
    message.originSourceParams =
      object.originSourceParams !== undefined &&
      object.originSourceParams !== null
        ? ResourceOriginParams.fromPartial(object.originSourceParams)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  CreateResourceRequest_Origin.$type,
  CreateResourceRequest_Origin
);

const baseCreateResourceRequest_LabelsEntry: object = {
  $type: "yandex.cloud.cdn.v1.CreateResourceRequest.LabelsEntry",
  key: "",
  value: "",
};

export const CreateResourceRequest_LabelsEntry = {
  $type: "yandex.cloud.cdn.v1.CreateResourceRequest.LabelsEntry" as const,

  encode(
    message: CreateResourceRequest_LabelsEntry,
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
  ): CreateResourceRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateResourceRequest_LabelsEntry,
    } as CreateResourceRequest_LabelsEntry;
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

  fromJSON(object: any): CreateResourceRequest_LabelsEntry {
    const message = {
      ...baseCreateResourceRequest_LabelsEntry,
    } as CreateResourceRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: CreateResourceRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateResourceRequest_LabelsEntry>, I>
  >(object: I): CreateResourceRequest_LabelsEntry {
    const message = {
      ...baseCreateResourceRequest_LabelsEntry,
    } as CreateResourceRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  CreateResourceRequest_LabelsEntry.$type,
  CreateResourceRequest_LabelsEntry
);

const baseResourceOriginParams: object = {
  $type: "yandex.cloud.cdn.v1.ResourceOriginParams",
  source: "",
};

export const ResourceOriginParams = {
  $type: "yandex.cloud.cdn.v1.ResourceOriginParams" as const,

  encode(
    message: ResourceOriginParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }
    if (message.meta !== undefined) {
      OriginMeta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResourceOriginParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResourceOriginParams } as ResourceOriginParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.source = reader.string();
          break;
        case 2:
          message.meta = OriginMeta.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResourceOriginParams {
    const message = { ...baseResourceOriginParams } as ResourceOriginParams;
    message.source =
      object.source !== undefined && object.source !== null
        ? String(object.source)
        : "";
    message.meta =
      object.meta !== undefined && object.meta !== null
        ? OriginMeta.fromJSON(object.meta)
        : undefined;
    return message;
  },

  toJSON(message: ResourceOriginParams): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = message.source);
    message.meta !== undefined &&
      (obj.meta = message.meta ? OriginMeta.toJSON(message.meta) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResourceOriginParams>, I>>(
    object: I
  ): ResourceOriginParams {
    const message = { ...baseResourceOriginParams } as ResourceOriginParams;
    message.source = object.source ?? "";
    message.meta =
      object.meta !== undefined && object.meta !== null
        ? OriginMeta.fromPartial(object.meta)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ResourceOriginParams.$type, ResourceOriginParams);

const baseCreateResourceMetadata: object = {
  $type: "yandex.cloud.cdn.v1.CreateResourceMetadata",
  resourceId: "",
};

export const CreateResourceMetadata = {
  $type: "yandex.cloud.cdn.v1.CreateResourceMetadata" as const,

  encode(
    message: CreateResourceMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateResourceMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateResourceMetadata } as CreateResourceMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateResourceMetadata {
    const message = { ...baseCreateResourceMetadata } as CreateResourceMetadata;
    message.resourceId =
      object.resourceId !== undefined && object.resourceId !== null
        ? String(object.resourceId)
        : "";
    return message;
  },

  toJSON(message: CreateResourceMetadata): unknown {
    const obj: any = {};
    message.resourceId !== undefined && (obj.resourceId = message.resourceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateResourceMetadata>, I>>(
    object: I
  ): CreateResourceMetadata {
    const message = { ...baseCreateResourceMetadata } as CreateResourceMetadata;
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateResourceMetadata.$type, CreateResourceMetadata);

const baseUpdateResourceRequest: object = {
  $type: "yandex.cloud.cdn.v1.UpdateResourceRequest",
  resourceId: "",
  originProtocol: 0,
};

export const UpdateResourceRequest = {
  $type: "yandex.cloud.cdn.v1.UpdateResourceRequest" as const,

  encode(
    message: UpdateResourceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    if (message.originGroupId !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.originGroupId! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.secondaryHostnames !== undefined) {
      SecondaryHostnames.encode(
        message.secondaryHostnames,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.options !== undefined) {
      ResourceOptions.encode(
        message.options,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.originProtocol !== 0) {
      writer.uint32(40).int32(message.originProtocol);
    }
    if (message.active !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.active! },
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.sslCertificate !== undefined) {
      SSLTargetCertificate.encode(
        message.sslCertificate,
        writer.uint32(58).fork()
      ).ldelim();
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      UpdateResourceRequest_LabelsEntry.encode(
        {
          $type: "yandex.cloud.cdn.v1.UpdateResourceRequest.LabelsEntry",
          key: key as any,
          value,
        },
        writer.uint32(66).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateResourceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateResourceRequest } as UpdateResourceRequest;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceId = reader.string();
          break;
        case 2:
          message.originGroupId = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.secondaryHostnames = SecondaryHostnames.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.options = ResourceOptions.decode(reader, reader.uint32());
          break;
        case 5:
          message.originProtocol = reader.int32() as any;
          break;
        case 6:
          message.active = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 7:
          message.sslCertificate = SSLTargetCertificate.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          const entry8 = UpdateResourceRequest_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry8.value !== undefined) {
            message.labels[entry8.key] = entry8.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateResourceRequest {
    const message = { ...baseUpdateResourceRequest } as UpdateResourceRequest;
    message.resourceId =
      object.resourceId !== undefined && object.resourceId !== null
        ? String(object.resourceId)
        : "";
    message.originGroupId =
      object.originGroupId !== undefined && object.originGroupId !== null
        ? Number(object.originGroupId)
        : undefined;
    message.secondaryHostnames =
      object.secondaryHostnames !== undefined &&
      object.secondaryHostnames !== null
        ? SecondaryHostnames.fromJSON(object.secondaryHostnames)
        : undefined;
    message.options =
      object.options !== undefined && object.options !== null
        ? ResourceOptions.fromJSON(object.options)
        : undefined;
    message.originProtocol =
      object.originProtocol !== undefined && object.originProtocol !== null
        ? originProtocolFromJSON(object.originProtocol)
        : 0;
    message.active =
      object.active !== undefined && object.active !== null
        ? Boolean(object.active)
        : undefined;
    message.sslCertificate =
      object.sslCertificate !== undefined && object.sslCertificate !== null
        ? SSLTargetCertificate.fromJSON(object.sslCertificate)
        : undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: UpdateResourceRequest): unknown {
    const obj: any = {};
    message.resourceId !== undefined && (obj.resourceId = message.resourceId);
    message.originGroupId !== undefined &&
      (obj.originGroupId = message.originGroupId);
    message.secondaryHostnames !== undefined &&
      (obj.secondaryHostnames = message.secondaryHostnames
        ? SecondaryHostnames.toJSON(message.secondaryHostnames)
        : undefined);
    message.options !== undefined &&
      (obj.options = message.options
        ? ResourceOptions.toJSON(message.options)
        : undefined);
    message.originProtocol !== undefined &&
      (obj.originProtocol = originProtocolToJSON(message.originProtocol));
    message.active !== undefined && (obj.active = message.active);
    message.sslCertificate !== undefined &&
      (obj.sslCertificate = message.sslCertificate
        ? SSLTargetCertificate.toJSON(message.sslCertificate)
        : undefined);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateResourceRequest>, I>>(
    object: I
  ): UpdateResourceRequest {
    const message = { ...baseUpdateResourceRequest } as UpdateResourceRequest;
    message.resourceId = object.resourceId ?? "";
    message.originGroupId = object.originGroupId ?? undefined;
    message.secondaryHostnames =
      object.secondaryHostnames !== undefined &&
      object.secondaryHostnames !== null
        ? SecondaryHostnames.fromPartial(object.secondaryHostnames)
        : undefined;
    message.options =
      object.options !== undefined && object.options !== null
        ? ResourceOptions.fromPartial(object.options)
        : undefined;
    message.originProtocol = object.originProtocol ?? 0;
    message.active = object.active ?? undefined;
    message.sslCertificate =
      object.sslCertificate !== undefined && object.sslCertificate !== null
        ? SSLTargetCertificate.fromPartial(object.sslCertificate)
        : undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(UpdateResourceRequest.$type, UpdateResourceRequest);

const baseUpdateResourceRequest_LabelsEntry: object = {
  $type: "yandex.cloud.cdn.v1.UpdateResourceRequest.LabelsEntry",
  key: "",
  value: "",
};

export const UpdateResourceRequest_LabelsEntry = {
  $type: "yandex.cloud.cdn.v1.UpdateResourceRequest.LabelsEntry" as const,

  encode(
    message: UpdateResourceRequest_LabelsEntry,
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
  ): UpdateResourceRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateResourceRequest_LabelsEntry,
    } as UpdateResourceRequest_LabelsEntry;
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

  fromJSON(object: any): UpdateResourceRequest_LabelsEntry {
    const message = {
      ...baseUpdateResourceRequest_LabelsEntry,
    } as UpdateResourceRequest_LabelsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: UpdateResourceRequest_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateResourceRequest_LabelsEntry>, I>
  >(object: I): UpdateResourceRequest_LabelsEntry {
    const message = {
      ...baseUpdateResourceRequest_LabelsEntry,
    } as UpdateResourceRequest_LabelsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  UpdateResourceRequest_LabelsEntry.$type,
  UpdateResourceRequest_LabelsEntry
);

const baseUpdateResourceMetadata: object = {
  $type: "yandex.cloud.cdn.v1.UpdateResourceMetadata",
  resourceId: "",
};

export const UpdateResourceMetadata = {
  $type: "yandex.cloud.cdn.v1.UpdateResourceMetadata" as const,

  encode(
    message: UpdateResourceMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateResourceMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateResourceMetadata } as UpdateResourceMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateResourceMetadata {
    const message = { ...baseUpdateResourceMetadata } as UpdateResourceMetadata;
    message.resourceId =
      object.resourceId !== undefined && object.resourceId !== null
        ? String(object.resourceId)
        : "";
    return message;
  },

  toJSON(message: UpdateResourceMetadata): unknown {
    const obj: any = {};
    message.resourceId !== undefined && (obj.resourceId = message.resourceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateResourceMetadata>, I>>(
    object: I
  ): UpdateResourceMetadata {
    const message = { ...baseUpdateResourceMetadata } as UpdateResourceMetadata;
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(UpdateResourceMetadata.$type, UpdateResourceMetadata);

const baseDeleteResourceRequest: object = {
  $type: "yandex.cloud.cdn.v1.DeleteResourceRequest",
  resourceId: "",
};

export const DeleteResourceRequest = {
  $type: "yandex.cloud.cdn.v1.DeleteResourceRequest" as const,

  encode(
    message: DeleteResourceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteResourceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteResourceRequest } as DeleteResourceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteResourceRequest {
    const message = { ...baseDeleteResourceRequest } as DeleteResourceRequest;
    message.resourceId =
      object.resourceId !== undefined && object.resourceId !== null
        ? String(object.resourceId)
        : "";
    return message;
  },

  toJSON(message: DeleteResourceRequest): unknown {
    const obj: any = {};
    message.resourceId !== undefined && (obj.resourceId = message.resourceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteResourceRequest>, I>>(
    object: I
  ): DeleteResourceRequest {
    const message = { ...baseDeleteResourceRequest } as DeleteResourceRequest;
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteResourceRequest.$type, DeleteResourceRequest);

const baseDeleteResourceMetadata: object = {
  $type: "yandex.cloud.cdn.v1.DeleteResourceMetadata",
  resourceId: "",
};

export const DeleteResourceMetadata = {
  $type: "yandex.cloud.cdn.v1.DeleteResourceMetadata" as const,

  encode(
    message: DeleteResourceMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteResourceMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteResourceMetadata } as DeleteResourceMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteResourceMetadata {
    const message = { ...baseDeleteResourceMetadata } as DeleteResourceMetadata;
    message.resourceId =
      object.resourceId !== undefined && object.resourceId !== null
        ? String(object.resourceId)
        : "";
    return message;
  },

  toJSON(message: DeleteResourceMetadata): unknown {
    const obj: any = {};
    message.resourceId !== undefined && (obj.resourceId = message.resourceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteResourceMetadata>, I>>(
    object: I
  ): DeleteResourceMetadata {
    const message = { ...baseDeleteResourceMetadata } as DeleteResourceMetadata;
    message.resourceId = object.resourceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(DeleteResourceMetadata.$type, DeleteResourceMetadata);

const baseGetProviderCNameRequest: object = {
  $type: "yandex.cloud.cdn.v1.GetProviderCNameRequest",
  folderId: "",
};

export const GetProviderCNameRequest = {
  $type: "yandex.cloud.cdn.v1.GetProviderCNameRequest" as const,

  encode(
    message: GetProviderCNameRequest,
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
  ): GetProviderCNameRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetProviderCNameRequest,
    } as GetProviderCNameRequest;
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

  fromJSON(object: any): GetProviderCNameRequest {
    const message = {
      ...baseGetProviderCNameRequest,
    } as GetProviderCNameRequest;
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    return message;
  },

  toJSON(message: GetProviderCNameRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetProviderCNameRequest>, I>>(
    object: I
  ): GetProviderCNameRequest {
    const message = {
      ...baseGetProviderCNameRequest,
    } as GetProviderCNameRequest;
    message.folderId = object.folderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetProviderCNameRequest.$type, GetProviderCNameRequest);

const baseGetProviderCNameResponse: object = {
  $type: "yandex.cloud.cdn.v1.GetProviderCNameResponse",
  cname: "",
  folderId: "",
};

export const GetProviderCNameResponse = {
  $type: "yandex.cloud.cdn.v1.GetProviderCNameResponse" as const,

  encode(
    message: GetProviderCNameResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cname !== "") {
      writer.uint32(10).string(message.cname);
    }
    if (message.folderId !== "") {
      writer.uint32(18).string(message.folderId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetProviderCNameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetProviderCNameResponse,
    } as GetProviderCNameResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cname = reader.string();
          break;
        case 2:
          message.folderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetProviderCNameResponse {
    const message = {
      ...baseGetProviderCNameResponse,
    } as GetProviderCNameResponse;
    message.cname =
      object.cname !== undefined && object.cname !== null
        ? String(object.cname)
        : "";
    message.folderId =
      object.folderId !== undefined && object.folderId !== null
        ? String(object.folderId)
        : "";
    return message;
  },

  toJSON(message: GetProviderCNameResponse): unknown {
    const obj: any = {};
    message.cname !== undefined && (obj.cname = message.cname);
    message.folderId !== undefined && (obj.folderId = message.folderId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetProviderCNameResponse>, I>>(
    object: I
  ): GetProviderCNameResponse {
    const message = {
      ...baseGetProviderCNameResponse,
    } as GetProviderCNameResponse;
    message.cname = object.cname ?? "";
    message.folderId = object.folderId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  GetProviderCNameResponse.$type,
  GetProviderCNameResponse
);

/** Provider's resources management service. */
export const ResourceServiceService = {
  /** Get client's CDN resource by resource id. */
  get: {
    path: "/yandex.cloud.cdn.v1.ResourceService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetResourceRequest) =>
      Buffer.from(GetResourceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetResourceRequest.decode(value),
    responseSerialize: (value: Resource) =>
      Buffer.from(Resource.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Resource.decode(value),
  },
  /** Lists CDN resources. */
  list: {
    path: "/yandex.cloud.cdn.v1.ResourceService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListResourcesRequest) =>
      Buffer.from(ListResourcesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListResourcesRequest.decode(value),
    responseSerialize: (value: ListResourcesResponse) =>
      Buffer.from(ListResourcesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListResourcesResponse.decode(value),
  },
  /**
   * Creates a CDN resource in the specified folder.
   *
   * Creation may take up to 15 minutes.
   */
  create: {
    path: "/yandex.cloud.cdn.v1.ResourceService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateResourceRequest) =>
      Buffer.from(CreateResourceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateResourceRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Updates the specified CDN resource.
   *
   * The method implements patch behaviour, i.e. only the fields specified in the request are updated in the resource.
   *
   * Changes may take up to 15 minutes to apply. Afterwards, it is recommended to purge the resource's cache via a
   * [CacheService.Purge] request.
   */
  update: {
    path: "/yandex.cloud.cdn.v1.ResourceService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateResourceRequest) =>
      Buffer.from(UpdateResourceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateResourceRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Deletes client's CDN resource. */
  delete: {
    path: "/yandex.cloud.cdn.v1.ResourceService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteResourceRequest) =>
      Buffer.from(DeleteResourceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteResourceRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /**
   * Get Provider's CNAME (edge endpoint) bind to specified folder id.
   * Returns UNIMPLEMENTED error, if provider doesn't support CNAME request.
   */
  getProviderCName: {
    path: "/yandex.cloud.cdn.v1.ResourceService/GetProviderCName",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetProviderCNameRequest) =>
      Buffer.from(GetProviderCNameRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetProviderCNameRequest.decode(value),
    responseSerialize: (value: GetProviderCNameResponse) =>
      Buffer.from(GetProviderCNameResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GetProviderCNameResponse.decode(value),
  },
} as const;

export interface ResourceServiceServer extends UntypedServiceImplementation {
  /** Get client's CDN resource by resource id. */
  get: handleUnaryCall<GetResourceRequest, Resource>;
  /** Lists CDN resources. */
  list: handleUnaryCall<ListResourcesRequest, ListResourcesResponse>;
  /**
   * Creates a CDN resource in the specified folder.
   *
   * Creation may take up to 15 minutes.
   */
  create: handleUnaryCall<CreateResourceRequest, Operation>;
  /**
   * Updates the specified CDN resource.
   *
   * The method implements patch behaviour, i.e. only the fields specified in the request are updated in the resource.
   *
   * Changes may take up to 15 minutes to apply. Afterwards, it is recommended to purge the resource's cache via a
   * [CacheService.Purge] request.
   */
  update: handleUnaryCall<UpdateResourceRequest, Operation>;
  /** Deletes client's CDN resource. */
  delete: handleUnaryCall<DeleteResourceRequest, Operation>;
  /**
   * Get Provider's CNAME (edge endpoint) bind to specified folder id.
   * Returns UNIMPLEMENTED error, if provider doesn't support CNAME request.
   */
  getProviderCName: handleUnaryCall<
    GetProviderCNameRequest,
    GetProviderCNameResponse
  >;
}

export interface ResourceServiceClient extends Client {
  /** Get client's CDN resource by resource id. */
  get(
    request: GetResourceRequest,
    callback: (error: ServiceError | null, response: Resource) => void
  ): ClientUnaryCall;
  get(
    request: GetResourceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Resource) => void
  ): ClientUnaryCall;
  get(
    request: GetResourceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Resource) => void
  ): ClientUnaryCall;
  /** Lists CDN resources. */
  list(
    request: ListResourcesRequest,
    callback: (
      error: ServiceError | null,
      response: ListResourcesResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListResourcesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListResourcesResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListResourcesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListResourcesResponse
    ) => void
  ): ClientUnaryCall;
  /**
   * Creates a CDN resource in the specified folder.
   *
   * Creation may take up to 15 minutes.
   */
  create(
    request: CreateResourceRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateResourceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  create(
    request: CreateResourceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Updates the specified CDN resource.
   *
   * The method implements patch behaviour, i.e. only the fields specified in the request are updated in the resource.
   *
   * Changes may take up to 15 minutes to apply. Afterwards, it is recommended to purge the resource's cache via a
   * [CacheService.Purge] request.
   */
  update(
    request: UpdateResourceRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateResourceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  update(
    request: UpdateResourceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Deletes client's CDN resource. */
  delete(
    request: DeleteResourceRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteResourceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  delete(
    request: DeleteResourceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /**
   * Get Provider's CNAME (edge endpoint) bind to specified folder id.
   * Returns UNIMPLEMENTED error, if provider doesn't support CNAME request.
   */
  getProviderCName(
    request: GetProviderCNameRequest,
    callback: (
      error: ServiceError | null,
      response: GetProviderCNameResponse
    ) => void
  ): ClientUnaryCall;
  getProviderCName(
    request: GetProviderCNameRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetProviderCNameResponse
    ) => void
  ): ClientUnaryCall;
  getProviderCName(
    request: GetProviderCNameRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetProviderCNameResponse
    ) => void
  ): ClientUnaryCall;
}

export const ResourceServiceClient = makeGenericClientConstructor(
  ResourceServiceService,
  "yandex.cloud.cdn.v1.ResourceService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): ResourceServiceClient;
  service: typeof ResourceServiceService;
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
