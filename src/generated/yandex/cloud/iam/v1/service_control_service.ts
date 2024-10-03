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
import { Resource } from "../../../../yandex/cloud/iam/v1/resource";
import {
  Service,
  ServiceAgent,
} from "../../../../yandex/cloud/iam/v1/service_control";
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.iam.v1";

export interface GetServiceRequest {
  $type: "yandex.cloud.iam.v1.GetServiceRequest";
  /** ID of the Service. */
  serviceId: string;
  /**
   * Resource container to get a service information in.
   *
   * It is supported only resource-manager.cloud resource container now.
   */
  resource?: Resource;
}

export interface ListServicesRequest {
  $type: "yandex.cloud.iam.v1.ListServicesRequest";
  /**
   * Resource container to list a services.
   *
   * It is supported only resource-manager.cloud resource container now.
   */
  resource?: Resource;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListServicesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   * Default value: 100
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token]
   * to the [ListServicesResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
}

export interface ListServicesResponse {
  $type: "yandex.cloud.iam.v1.ListServicesResponse";
  /** List of Services. */
  services: Service[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListServicesRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListServicesRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

export interface EnableServiceRequest {
  $type: "yandex.cloud.iam.v1.EnableServiceRequest";
  /** ID of the Service. */
  serviceId: string;
  /**
   * Resource container to enable a service in.
   *
   * It is supported only resource-manager.cloud resource container now.
   */
  resource?: Resource;
}

export interface EnableServiceMetadata {
  $type: "yandex.cloud.iam.v1.EnableServiceMetadata";
  /** ID of the Service. */
  serviceId: string;
  /** Resource container. */
  resource?: Resource;
}

export interface DisableServiceRequest {
  $type: "yandex.cloud.iam.v1.DisableServiceRequest";
  /** ID of the Service. */
  serviceId: string;
  /**
   * Resource container to disable a service in.
   *
   * It is supported only resource-manager.cloud resource container now.
   */
  resource?: Resource;
}

export interface DisableServiceMetadata {
  $type: "yandex.cloud.iam.v1.DisableServiceMetadata";
  /** ID of the Service. */
  serviceId: string;
  /** Resource container. */
  resource?: Resource;
}

export interface ResolveServiceAgentRequest {
  $type: "yandex.cloud.iam.v1.ResolveServiceAgentRequest";
  /** ID of the Service. */
  serviceId: string;
  /** ID of the Microservice. */
  microserviceId: string;
  /** Resource container. */
  resource?: Resource;
}

const baseGetServiceRequest: object = {
  $type: "yandex.cloud.iam.v1.GetServiceRequest",
  serviceId: "",
};

export const GetServiceRequest = {
  $type: "yandex.cloud.iam.v1.GetServiceRequest" as const,

  encode(
    message: GetServiceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.serviceId !== "") {
      writer.uint32(10).string(message.serviceId);
    }
    if (message.resource !== undefined) {
      Resource.encode(message.resource, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetServiceRequest } as GetServiceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.string();
          break;
        case 2:
          message.resource = Resource.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetServiceRequest {
    const message = { ...baseGetServiceRequest } as GetServiceRequest;
    message.serviceId =
      object.serviceId !== undefined && object.serviceId !== null
        ? String(object.serviceId)
        : "";
    message.resource =
      object.resource !== undefined && object.resource !== null
        ? Resource.fromJSON(object.resource)
        : undefined;
    return message;
  },

  toJSON(message: GetServiceRequest): unknown {
    const obj: any = {};
    message.serviceId !== undefined && (obj.serviceId = message.serviceId);
    message.resource !== undefined &&
      (obj.resource = message.resource
        ? Resource.toJSON(message.resource)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetServiceRequest>, I>>(
    object: I
  ): GetServiceRequest {
    const message = { ...baseGetServiceRequest } as GetServiceRequest;
    message.serviceId = object.serviceId ?? "";
    message.resource =
      object.resource !== undefined && object.resource !== null
        ? Resource.fromPartial(object.resource)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(GetServiceRequest.$type, GetServiceRequest);

const baseListServicesRequest: object = {
  $type: "yandex.cloud.iam.v1.ListServicesRequest",
  pageSize: 0,
  pageToken: "",
};

export const ListServicesRequest = {
  $type: "yandex.cloud.iam.v1.ListServicesRequest" as const,

  encode(
    message: ListServicesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resource !== undefined) {
      Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListServicesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListServicesRequest } as ListServicesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resource = Resource.decode(reader, reader.uint32());
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

  fromJSON(object: any): ListServicesRequest {
    const message = { ...baseListServicesRequest } as ListServicesRequest;
    message.resource =
      object.resource !== undefined && object.resource !== null
        ? Resource.fromJSON(object.resource)
        : undefined;
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

  toJSON(message: ListServicesRequest): unknown {
    const obj: any = {};
    message.resource !== undefined &&
      (obj.resource = message.resource
        ? Resource.toJSON(message.resource)
        : undefined);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListServicesRequest>, I>>(
    object: I
  ): ListServicesRequest {
    const message = { ...baseListServicesRequest } as ListServicesRequest;
    message.resource =
      object.resource !== undefined && object.resource !== null
        ? Resource.fromPartial(object.resource)
        : undefined;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListServicesRequest.$type, ListServicesRequest);

const baseListServicesResponse: object = {
  $type: "yandex.cloud.iam.v1.ListServicesResponse",
  nextPageToken: "",
};

export const ListServicesResponse = {
  $type: "yandex.cloud.iam.v1.ListServicesResponse" as const,

  encode(
    message: ListServicesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.services) {
      Service.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListServicesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListServicesResponse } as ListServicesResponse;
    message.services = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.services.push(Service.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListServicesResponse {
    const message = { ...baseListServicesResponse } as ListServicesResponse;
    message.services = (object.services ?? []).map((e: any) =>
      Service.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListServicesResponse): unknown {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map((e) =>
        e ? Service.toJSON(e) : undefined
      );
    } else {
      obj.services = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListServicesResponse>, I>>(
    object: I
  ): ListServicesResponse {
    const message = { ...baseListServicesResponse } as ListServicesResponse;
    message.services =
      object.services?.map((e) => Service.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListServicesResponse.$type, ListServicesResponse);

const baseEnableServiceRequest: object = {
  $type: "yandex.cloud.iam.v1.EnableServiceRequest",
  serviceId: "",
};

export const EnableServiceRequest = {
  $type: "yandex.cloud.iam.v1.EnableServiceRequest" as const,

  encode(
    message: EnableServiceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.serviceId !== "") {
      writer.uint32(10).string(message.serviceId);
    }
    if (message.resource !== undefined) {
      Resource.encode(message.resource, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EnableServiceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEnableServiceRequest } as EnableServiceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.string();
          break;
        case 2:
          message.resource = Resource.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EnableServiceRequest {
    const message = { ...baseEnableServiceRequest } as EnableServiceRequest;
    message.serviceId =
      object.serviceId !== undefined && object.serviceId !== null
        ? String(object.serviceId)
        : "";
    message.resource =
      object.resource !== undefined && object.resource !== null
        ? Resource.fromJSON(object.resource)
        : undefined;
    return message;
  },

  toJSON(message: EnableServiceRequest): unknown {
    const obj: any = {};
    message.serviceId !== undefined && (obj.serviceId = message.serviceId);
    message.resource !== undefined &&
      (obj.resource = message.resource
        ? Resource.toJSON(message.resource)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EnableServiceRequest>, I>>(
    object: I
  ): EnableServiceRequest {
    const message = { ...baseEnableServiceRequest } as EnableServiceRequest;
    message.serviceId = object.serviceId ?? "";
    message.resource =
      object.resource !== undefined && object.resource !== null
        ? Resource.fromPartial(object.resource)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(EnableServiceRequest.$type, EnableServiceRequest);

const baseEnableServiceMetadata: object = {
  $type: "yandex.cloud.iam.v1.EnableServiceMetadata",
  serviceId: "",
};

export const EnableServiceMetadata = {
  $type: "yandex.cloud.iam.v1.EnableServiceMetadata" as const,

  encode(
    message: EnableServiceMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.serviceId !== "") {
      writer.uint32(10).string(message.serviceId);
    }
    if (message.resource !== undefined) {
      Resource.encode(message.resource, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EnableServiceMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEnableServiceMetadata } as EnableServiceMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.string();
          break;
        case 2:
          message.resource = Resource.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EnableServiceMetadata {
    const message = { ...baseEnableServiceMetadata } as EnableServiceMetadata;
    message.serviceId =
      object.serviceId !== undefined && object.serviceId !== null
        ? String(object.serviceId)
        : "";
    message.resource =
      object.resource !== undefined && object.resource !== null
        ? Resource.fromJSON(object.resource)
        : undefined;
    return message;
  },

  toJSON(message: EnableServiceMetadata): unknown {
    const obj: any = {};
    message.serviceId !== undefined && (obj.serviceId = message.serviceId);
    message.resource !== undefined &&
      (obj.resource = message.resource
        ? Resource.toJSON(message.resource)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EnableServiceMetadata>, I>>(
    object: I
  ): EnableServiceMetadata {
    const message = { ...baseEnableServiceMetadata } as EnableServiceMetadata;
    message.serviceId = object.serviceId ?? "";
    message.resource =
      object.resource !== undefined && object.resource !== null
        ? Resource.fromPartial(object.resource)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(EnableServiceMetadata.$type, EnableServiceMetadata);

const baseDisableServiceRequest: object = {
  $type: "yandex.cloud.iam.v1.DisableServiceRequest",
  serviceId: "",
};

export const DisableServiceRequest = {
  $type: "yandex.cloud.iam.v1.DisableServiceRequest" as const,

  encode(
    message: DisableServiceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.serviceId !== "") {
      writer.uint32(10).string(message.serviceId);
    }
    if (message.resource !== undefined) {
      Resource.encode(message.resource, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DisableServiceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDisableServiceRequest } as DisableServiceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.string();
          break;
        case 2:
          message.resource = Resource.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DisableServiceRequest {
    const message = { ...baseDisableServiceRequest } as DisableServiceRequest;
    message.serviceId =
      object.serviceId !== undefined && object.serviceId !== null
        ? String(object.serviceId)
        : "";
    message.resource =
      object.resource !== undefined && object.resource !== null
        ? Resource.fromJSON(object.resource)
        : undefined;
    return message;
  },

  toJSON(message: DisableServiceRequest): unknown {
    const obj: any = {};
    message.serviceId !== undefined && (obj.serviceId = message.serviceId);
    message.resource !== undefined &&
      (obj.resource = message.resource
        ? Resource.toJSON(message.resource)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DisableServiceRequest>, I>>(
    object: I
  ): DisableServiceRequest {
    const message = { ...baseDisableServiceRequest } as DisableServiceRequest;
    message.serviceId = object.serviceId ?? "";
    message.resource =
      object.resource !== undefined && object.resource !== null
        ? Resource.fromPartial(object.resource)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(DisableServiceRequest.$type, DisableServiceRequest);

const baseDisableServiceMetadata: object = {
  $type: "yandex.cloud.iam.v1.DisableServiceMetadata",
  serviceId: "",
};

export const DisableServiceMetadata = {
  $type: "yandex.cloud.iam.v1.DisableServiceMetadata" as const,

  encode(
    message: DisableServiceMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.serviceId !== "") {
      writer.uint32(10).string(message.serviceId);
    }
    if (message.resource !== undefined) {
      Resource.encode(message.resource, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DisableServiceMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDisableServiceMetadata } as DisableServiceMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.string();
          break;
        case 2:
          message.resource = Resource.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DisableServiceMetadata {
    const message = { ...baseDisableServiceMetadata } as DisableServiceMetadata;
    message.serviceId =
      object.serviceId !== undefined && object.serviceId !== null
        ? String(object.serviceId)
        : "";
    message.resource =
      object.resource !== undefined && object.resource !== null
        ? Resource.fromJSON(object.resource)
        : undefined;
    return message;
  },

  toJSON(message: DisableServiceMetadata): unknown {
    const obj: any = {};
    message.serviceId !== undefined && (obj.serviceId = message.serviceId);
    message.resource !== undefined &&
      (obj.resource = message.resource
        ? Resource.toJSON(message.resource)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DisableServiceMetadata>, I>>(
    object: I
  ): DisableServiceMetadata {
    const message = { ...baseDisableServiceMetadata } as DisableServiceMetadata;
    message.serviceId = object.serviceId ?? "";
    message.resource =
      object.resource !== undefined && object.resource !== null
        ? Resource.fromPartial(object.resource)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(DisableServiceMetadata.$type, DisableServiceMetadata);

const baseResolveServiceAgentRequest: object = {
  $type: "yandex.cloud.iam.v1.ResolveServiceAgentRequest",
  serviceId: "",
  microserviceId: "",
};

export const ResolveServiceAgentRequest = {
  $type: "yandex.cloud.iam.v1.ResolveServiceAgentRequest" as const,

  encode(
    message: ResolveServiceAgentRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.serviceId !== "") {
      writer.uint32(10).string(message.serviceId);
    }
    if (message.microserviceId !== "") {
      writer.uint32(18).string(message.microserviceId);
    }
    if (message.resource !== undefined) {
      Resource.encode(message.resource, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResolveServiceAgentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseResolveServiceAgentRequest,
    } as ResolveServiceAgentRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.string();
          break;
        case 2:
          message.microserviceId = reader.string();
          break;
        case 3:
          message.resource = Resource.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResolveServiceAgentRequest {
    const message = {
      ...baseResolveServiceAgentRequest,
    } as ResolveServiceAgentRequest;
    message.serviceId =
      object.serviceId !== undefined && object.serviceId !== null
        ? String(object.serviceId)
        : "";
    message.microserviceId =
      object.microserviceId !== undefined && object.microserviceId !== null
        ? String(object.microserviceId)
        : "";
    message.resource =
      object.resource !== undefined && object.resource !== null
        ? Resource.fromJSON(object.resource)
        : undefined;
    return message;
  },

  toJSON(message: ResolveServiceAgentRequest): unknown {
    const obj: any = {};
    message.serviceId !== undefined && (obj.serviceId = message.serviceId);
    message.microserviceId !== undefined &&
      (obj.microserviceId = message.microserviceId);
    message.resource !== undefined &&
      (obj.resource = message.resource
        ? Resource.toJSON(message.resource)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResolveServiceAgentRequest>, I>>(
    object: I
  ): ResolveServiceAgentRequest {
    const message = {
      ...baseResolveServiceAgentRequest,
    } as ResolveServiceAgentRequest;
    message.serviceId = object.serviceId ?? "";
    message.microserviceId = object.microserviceId ?? "";
    message.resource =
      object.resource !== undefined && object.resource !== null
        ? Resource.fromPartial(object.resource)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ResolveServiceAgentRequest.$type,
  ResolveServiceAgentRequest
);

/** A set of methods for managing Service resources. */
export const ServiceControlServiceService = {
  /**
   * Returns the Service information in the specified resource container.
   *
   * To get the list of available Services, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.iam.v1.ServiceControlService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetServiceRequest) =>
      Buffer.from(GetServiceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetServiceRequest.decode(value),
    responseSerialize: (value: Service) =>
      Buffer.from(Service.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Service.decode(value),
  },
  /** Retrieves the list of Service in the specified resource container. */
  list: {
    path: "/yandex.cloud.iam.v1.ServiceControlService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListServicesRequest) =>
      Buffer.from(ListServicesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListServicesRequest.decode(value),
    responseSerialize: (value: ListServicesResponse) =>
      Buffer.from(ListServicesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListServicesResponse.decode(value),
  },
  /** Enable a service in the specified resource container. */
  enable: {
    path: "/yandex.cloud.iam.v1.ServiceControlService/Enable",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: EnableServiceRequest) =>
      Buffer.from(EnableServiceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => EnableServiceRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Disable a service in the specified resource container. */
  disable: {
    path: "/yandex.cloud.iam.v1.ServiceControlService/Disable",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DisableServiceRequest) =>
      Buffer.from(DisableServiceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DisableServiceRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
  /** Resolve agent service account for the service in the specified resource container. */
  resolveAgent: {
    path: "/yandex.cloud.iam.v1.ServiceControlService/ResolveAgent",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ResolveServiceAgentRequest) =>
      Buffer.from(ResolveServiceAgentRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ResolveServiceAgentRequest.decode(value),
    responseSerialize: (value: ServiceAgent) =>
      Buffer.from(ServiceAgent.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ServiceAgent.decode(value),
  },
} as const;

export interface ServiceControlServiceServer
  extends UntypedServiceImplementation {
  /**
   * Returns the Service information in the specified resource container.
   *
   * To get the list of available Services, make a [List] request.
   */
  get: handleUnaryCall<GetServiceRequest, Service>;
  /** Retrieves the list of Service in the specified resource container. */
  list: handleUnaryCall<ListServicesRequest, ListServicesResponse>;
  /** Enable a service in the specified resource container. */
  enable: handleUnaryCall<EnableServiceRequest, Operation>;
  /** Disable a service in the specified resource container. */
  disable: handleUnaryCall<DisableServiceRequest, Operation>;
  /** Resolve agent service account for the service in the specified resource container. */
  resolveAgent: handleUnaryCall<ResolveServiceAgentRequest, ServiceAgent>;
}

export interface ServiceControlServiceClient extends Client {
  /**
   * Returns the Service information in the specified resource container.
   *
   * To get the list of available Services, make a [List] request.
   */
  get(
    request: GetServiceRequest,
    callback: (error: ServiceError | null, response: Service) => void
  ): ClientUnaryCall;
  get(
    request: GetServiceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Service) => void
  ): ClientUnaryCall;
  get(
    request: GetServiceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Service) => void
  ): ClientUnaryCall;
  /** Retrieves the list of Service in the specified resource container. */
  list(
    request: ListServicesRequest,
    callback: (
      error: ServiceError | null,
      response: ListServicesResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListServicesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListServicesResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListServicesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListServicesResponse
    ) => void
  ): ClientUnaryCall;
  /** Enable a service in the specified resource container. */
  enable(
    request: EnableServiceRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  enable(
    request: EnableServiceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  enable(
    request: EnableServiceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Disable a service in the specified resource container. */
  disable(
    request: DisableServiceRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  disable(
    request: DisableServiceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  disable(
    request: DisableServiceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  /** Resolve agent service account for the service in the specified resource container. */
  resolveAgent(
    request: ResolveServiceAgentRequest,
    callback: (error: ServiceError | null, response: ServiceAgent) => void
  ): ClientUnaryCall;
  resolveAgent(
    request: ResolveServiceAgentRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ServiceAgent) => void
  ): ClientUnaryCall;
  resolveAgent(
    request: ResolveServiceAgentRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ServiceAgent) => void
  ): ClientUnaryCall;
}

export const ServiceControlServiceClient = makeGenericClientConstructor(
  ServiceControlServiceService,
  "yandex.cloud.iam.v1.ServiceControlService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): ServiceControlServiceClient;
  service: typeof ServiceControlServiceService;
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
