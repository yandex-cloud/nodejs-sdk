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
import { Instance } from "../../../../../yandex/cloud/marketplace/licensemanager/v1/instance";

export const protobufPackage = "yandex.cloud.marketplace.licensemanager.v1";

export interface GetInstanceRequest {
  $type: "yandex.cloud.marketplace.licensemanager.v1.GetInstanceRequest";
  instanceId: string;
}

export interface ListInstancesRequest {
  $type: "yandex.cloud.marketplace.licensemanager.v1.ListInstancesRequest";
  folderId: string;
  pageSize: number;
  pageToken: string;
  filter: string;
  orderBy: string;
}

export interface ListInstancesResponse {
  $type: "yandex.cloud.marketplace.licensemanager.v1.ListInstancesResponse";
  instances: Instance[];
  nextPageToken: string;
}

const baseGetInstanceRequest: object = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.GetInstanceRequest",
  instanceId: "",
};

export const GetInstanceRequest = {
  $type:
    "yandex.cloud.marketplace.licensemanager.v1.GetInstanceRequest" as const,

  encode(
    message: GetInstanceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetInstanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetInstanceRequest } as GetInstanceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetInstanceRequest {
    const message = { ...baseGetInstanceRequest } as GetInstanceRequest;
    message.instanceId =
      object.instanceId !== undefined && object.instanceId !== null
        ? String(object.instanceId)
        : "";
    return message;
  },

  toJSON(message: GetInstanceRequest): unknown {
    const obj: any = {};
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetInstanceRequest>, I>>(
    object: I
  ): GetInstanceRequest {
    const message = { ...baseGetInstanceRequest } as GetInstanceRequest;
    message.instanceId = object.instanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetInstanceRequest.$type, GetInstanceRequest);

const baseListInstancesRequest: object = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.ListInstancesRequest",
  folderId: "",
  pageSize: 0,
  pageToken: "",
  filter: "",
  orderBy: "",
};

export const ListInstancesRequest = {
  $type:
    "yandex.cloud.marketplace.licensemanager.v1.ListInstancesRequest" as const,

  encode(
    message: ListInstancesRequest,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListInstancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListInstancesRequest } as ListInstancesRequest;
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

  fromJSON(object: any): ListInstancesRequest {
    const message = { ...baseListInstancesRequest } as ListInstancesRequest;
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

  toJSON(message: ListInstancesRequest): unknown {
    const obj: any = {};
    message.folderId !== undefined && (obj.folderId = message.folderId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    message.orderBy !== undefined && (obj.orderBy = message.orderBy);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListInstancesRequest>, I>>(
    object: I
  ): ListInstancesRequest {
    const message = { ...baseListInstancesRequest } as ListInstancesRequest;
    message.folderId = object.folderId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListInstancesRequest.$type, ListInstancesRequest);

const baseListInstancesResponse: object = {
  $type: "yandex.cloud.marketplace.licensemanager.v1.ListInstancesResponse",
  nextPageToken: "",
};

export const ListInstancesResponse = {
  $type:
    "yandex.cloud.marketplace.licensemanager.v1.ListInstancesResponse" as const,

  encode(
    message: ListInstancesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.instances) {
      Instance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListInstancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListInstancesResponse } as ListInstancesResponse;
    message.instances = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instances.push(Instance.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListInstancesResponse {
    const message = { ...baseListInstancesResponse } as ListInstancesResponse;
    message.instances = (object.instances ?? []).map((e: any) =>
      Instance.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListInstancesResponse): unknown {
    const obj: any = {};
    if (message.instances) {
      obj.instances = message.instances.map((e) =>
        e ? Instance.toJSON(e) : undefined
      );
    } else {
      obj.instances = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListInstancesResponse>, I>>(
    object: I
  ): ListInstancesResponse {
    const message = { ...baseListInstancesResponse } as ListInstancesResponse;
    message.instances =
      object.instances?.map((e) => Instance.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListInstancesResponse.$type, ListInstancesResponse);

export const InstanceServiceService = {
  get: {
    path: "/yandex.cloud.marketplace.licensemanager.v1.InstanceService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetInstanceRequest) =>
      Buffer.from(GetInstanceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetInstanceRequest.decode(value),
    responseSerialize: (value: Instance) =>
      Buffer.from(Instance.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Instance.decode(value),
  },
  list: {
    path: "/yandex.cloud.marketplace.licensemanager.v1.InstanceService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListInstancesRequest) =>
      Buffer.from(ListInstancesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListInstancesRequest.decode(value),
    responseSerialize: (value: ListInstancesResponse) =>
      Buffer.from(ListInstancesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListInstancesResponse.decode(value),
  },
} as const;

export interface InstanceServiceServer extends UntypedServiceImplementation {
  get: handleUnaryCall<GetInstanceRequest, Instance>;
  list: handleUnaryCall<ListInstancesRequest, ListInstancesResponse>;
}

export interface InstanceServiceClient extends Client {
  get(
    request: GetInstanceRequest,
    callback: (error: ServiceError | null, response: Instance) => void
  ): ClientUnaryCall;
  get(
    request: GetInstanceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Instance) => void
  ): ClientUnaryCall;
  get(
    request: GetInstanceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Instance) => void
  ): ClientUnaryCall;
  list(
    request: ListInstancesRequest,
    callback: (
      error: ServiceError | null,
      response: ListInstancesResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListInstancesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListInstancesResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListInstancesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListInstancesResponse
    ) => void
  ): ClientUnaryCall;
}

export const InstanceServiceClient = makeGenericClientConstructor(
  InstanceServiceService,
  "yandex.cloud.marketplace.licensemanager.v1.InstanceService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): InstanceServiceClient;
  service: typeof InstanceServiceService;
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
