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
import { Location } from "../../../../yandex/cloud/ydb/v1/location";

export const protobufPackage = "yandex.cloud.ydb.v1";

export interface GetLocationRequest {
  $type: "yandex.cloud.ydb.v1.GetLocationRequest";
  /** Required. ID of the location to return. */
  locationId: string;
}

export interface ListLocationsRequest {
  $type: "yandex.cloud.ydb.v1.ListLocationsRequest";
  /**
   * The maximum number of results per page that should be returned. If the number of available
   * results is larger than `page_size`, the service returns a `next_page_token` that can be used
   * to get the next page of results in subsequent ListLocations requests.
   * Acceptable values are 0 to 1000, inclusive. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. Set `page_token` to the `next_page_token` returned by a previous ListLocations
   * request to get the next page of results.
   */
  pageToken: string;
}

export interface ListLocationsResponse {
  $type: "yandex.cloud.ydb.v1.ListLocationsResponse";
  /** Requested list of locations. */
  locations: Location[];
  /**
   * This token allows you to get the next page of results for ListLocations requests,
   * if the number of results is larger than `page_size` specified in the request.
   * To get the next page, specify the value of `next_page_token` as a value for
   * the `page_token` parameter in the next ListLocations request. Subsequent ListLocations
   * requests will have their own `next_page_token` to continue paging through the results.
   */
  nextPageToken: string;
}

const baseGetLocationRequest: object = {
  $type: "yandex.cloud.ydb.v1.GetLocationRequest",
  locationId: "",
};

export const GetLocationRequest = {
  $type: "yandex.cloud.ydb.v1.GetLocationRequest" as const,

  encode(
    message: GetLocationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.locationId !== "") {
      writer.uint32(10).string(message.locationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLocationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetLocationRequest } as GetLocationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locationId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLocationRequest {
    const message = { ...baseGetLocationRequest } as GetLocationRequest;
    message.locationId =
      object.locationId !== undefined && object.locationId !== null
        ? String(object.locationId)
        : "";
    return message;
  },

  toJSON(message: GetLocationRequest): unknown {
    const obj: any = {};
    message.locationId !== undefined && (obj.locationId = message.locationId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetLocationRequest>, I>>(
    object: I
  ): GetLocationRequest {
    const message = { ...baseGetLocationRequest } as GetLocationRequest;
    message.locationId = object.locationId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetLocationRequest.$type, GetLocationRequest);

const baseListLocationsRequest: object = {
  $type: "yandex.cloud.ydb.v1.ListLocationsRequest",
  pageSize: 0,
  pageToken: "",
};

export const ListLocationsRequest = {
  $type: "yandex.cloud.ydb.v1.ListLocationsRequest" as const,

  encode(
    message: ListLocationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pageSize !== 0) {
      writer.uint32(8).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListLocationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListLocationsRequest } as ListLocationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pageSize = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.pageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListLocationsRequest {
    const message = { ...baseListLocationsRequest } as ListLocationsRequest;
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

  toJSON(message: ListLocationsRequest): unknown {
    const obj: any = {};
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListLocationsRequest>, I>>(
    object: I
  ): ListLocationsRequest {
    const message = { ...baseListLocationsRequest } as ListLocationsRequest;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListLocationsRequest.$type, ListLocationsRequest);

const baseListLocationsResponse: object = {
  $type: "yandex.cloud.ydb.v1.ListLocationsResponse",
  nextPageToken: "",
};

export const ListLocationsResponse = {
  $type: "yandex.cloud.ydb.v1.ListLocationsResponse" as const,

  encode(
    message: ListLocationsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.locations) {
      Location.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListLocationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListLocationsResponse } as ListLocationsResponse;
    message.locations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locations.push(Location.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListLocationsResponse {
    const message = { ...baseListLocationsResponse } as ListLocationsResponse;
    message.locations = (object.locations ?? []).map((e: any) =>
      Location.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListLocationsResponse): unknown {
    const obj: any = {};
    if (message.locations) {
      obj.locations = message.locations.map((e) =>
        e ? Location.toJSON(e) : undefined
      );
    } else {
      obj.locations = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListLocationsResponse>, I>>(
    object: I
  ): ListLocationsResponse {
    const message = { ...baseListLocationsResponse } as ListLocationsResponse;
    message.locations =
      object.locations?.map((e) => Location.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListLocationsResponse.$type, ListLocationsResponse);

export const LocationServiceService = {
  /** Returns the specified location. */
  get: {
    path: "/yandex.cloud.ydb.v1.LocationService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetLocationRequest) =>
      Buffer.from(GetLocationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetLocationRequest.decode(value),
    responseSerialize: (value: Location) =>
      Buffer.from(Location.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Location.decode(value),
  },
  /** Returns the list of available locations. */
  list: {
    path: "/yandex.cloud.ydb.v1.LocationService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListLocationsRequest) =>
      Buffer.from(ListLocationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListLocationsRequest.decode(value),
    responseSerialize: (value: ListLocationsResponse) =>
      Buffer.from(ListLocationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListLocationsResponse.decode(value),
  },
} as const;

export interface LocationServiceServer extends UntypedServiceImplementation {
  /** Returns the specified location. */
  get: handleUnaryCall<GetLocationRequest, Location>;
  /** Returns the list of available locations. */
  list: handleUnaryCall<ListLocationsRequest, ListLocationsResponse>;
}

export interface LocationServiceClient extends Client {
  /** Returns the specified location. */
  get(
    request: GetLocationRequest,
    callback: (error: ServiceError | null, response: Location) => void
  ): ClientUnaryCall;
  get(
    request: GetLocationRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Location) => void
  ): ClientUnaryCall;
  get(
    request: GetLocationRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Location) => void
  ): ClientUnaryCall;
  /** Returns the list of available locations. */
  list(
    request: ListLocationsRequest,
    callback: (
      error: ServiceError | null,
      response: ListLocationsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListLocationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListLocationsResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListLocationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListLocationsResponse
    ) => void
  ): ClientUnaryCall;
}

export const LocationServiceClient = makeGenericClientConstructor(
  LocationServiceService,
  "yandex.cloud.ydb.v1.LocationService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): LocationServiceClient;
  service: typeof LocationServiceService;
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
