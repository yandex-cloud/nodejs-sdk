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
import { PointOfPresence } from "../../../../yandex/cloud/cic/v1/point_of_presence";

export const protobufPackage = "yandex.cloud.cic.v1";

export interface GetPointOfPresenceRequest {
  $type: "yandex.cloud.cic.v1.GetPointOfPresenceRequest";
  /**
   * ID of the PointOfPresence resource to return.
   * To get the pointOfPresence ID use a [PointOfPresenceService.List] request.
   */
  pointOfPresenceId: string;
}

export interface ListPointOfPresencesRequest {
  $type: "yandex.cloud.cic.v1.ListPointOfPresencesRequest";
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListPointOfPresencesResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests. Default value: 100.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results, set [page_token] to the
   * [ListPointOfPresencesResponse.next_page_token] returned by a previous list request.
   */
  pageToken: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on [Subnet.name] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
}

export interface ListPointOfPresencesResponse {
  $type: "yandex.cloud.cic.v1.ListPointOfPresencesResponse";
  /** List of PointOfPresence resources. */
  pointOfPresences: PointOfPresence[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListPointOfPresencesRequest.page_size], use
   * the [next_page_token] as the value
   * for the [ListPointOfPresencesRequest.page_token] query parameter
   * in the next list request. Subsequent list requests will have their own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

const baseGetPointOfPresenceRequest: object = {
  $type: "yandex.cloud.cic.v1.GetPointOfPresenceRequest",
  pointOfPresenceId: "",
};

export const GetPointOfPresenceRequest = {
  $type: "yandex.cloud.cic.v1.GetPointOfPresenceRequest" as const,

  encode(
    message: GetPointOfPresenceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pointOfPresenceId !== "") {
      writer.uint32(10).string(message.pointOfPresenceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetPointOfPresenceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetPointOfPresenceRequest,
    } as GetPointOfPresenceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pointOfPresenceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetPointOfPresenceRequest {
    const message = {
      ...baseGetPointOfPresenceRequest,
    } as GetPointOfPresenceRequest;
    message.pointOfPresenceId =
      object.pointOfPresenceId !== undefined &&
      object.pointOfPresenceId !== null
        ? String(object.pointOfPresenceId)
        : "";
    return message;
  },

  toJSON(message: GetPointOfPresenceRequest): unknown {
    const obj: any = {};
    message.pointOfPresenceId !== undefined &&
      (obj.pointOfPresenceId = message.pointOfPresenceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPointOfPresenceRequest>, I>>(
    object: I
  ): GetPointOfPresenceRequest {
    const message = {
      ...baseGetPointOfPresenceRequest,
    } as GetPointOfPresenceRequest;
    message.pointOfPresenceId = object.pointOfPresenceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  GetPointOfPresenceRequest.$type,
  GetPointOfPresenceRequest
);

const baseListPointOfPresencesRequest: object = {
  $type: "yandex.cloud.cic.v1.ListPointOfPresencesRequest",
  pageSize: 0,
  pageToken: "",
  filter: "",
};

export const ListPointOfPresencesRequest = {
  $type: "yandex.cloud.cic.v1.ListPointOfPresencesRequest" as const,

  encode(
    message: ListPointOfPresencesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
  ): ListPointOfPresencesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListPointOfPresencesRequest,
    } as ListPointOfPresencesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
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

  fromJSON(object: any): ListPointOfPresencesRequest {
    const message = {
      ...baseListPointOfPresencesRequest,
    } as ListPointOfPresencesRequest;
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

  toJSON(message: ListPointOfPresencesRequest): unknown {
    const obj: any = {};
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListPointOfPresencesRequest>, I>>(
    object: I
  ): ListPointOfPresencesRequest {
    const message = {
      ...baseListPointOfPresencesRequest,
    } as ListPointOfPresencesRequest;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListPointOfPresencesRequest.$type,
  ListPointOfPresencesRequest
);

const baseListPointOfPresencesResponse: object = {
  $type: "yandex.cloud.cic.v1.ListPointOfPresencesResponse",
  nextPageToken: "",
};

export const ListPointOfPresencesResponse = {
  $type: "yandex.cloud.cic.v1.ListPointOfPresencesResponse" as const,

  encode(
    message: ListPointOfPresencesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pointOfPresences) {
      PointOfPresence.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListPointOfPresencesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListPointOfPresencesResponse,
    } as ListPointOfPresencesResponse;
    message.pointOfPresences = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pointOfPresences.push(
            PointOfPresence.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): ListPointOfPresencesResponse {
    const message = {
      ...baseListPointOfPresencesResponse,
    } as ListPointOfPresencesResponse;
    message.pointOfPresences = (object.pointOfPresences ?? []).map((e: any) =>
      PointOfPresence.fromJSON(e)
    );
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListPointOfPresencesResponse): unknown {
    const obj: any = {};
    if (message.pointOfPresences) {
      obj.pointOfPresences = message.pointOfPresences.map((e) =>
        e ? PointOfPresence.toJSON(e) : undefined
      );
    } else {
      obj.pointOfPresences = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListPointOfPresencesResponse>, I>>(
    object: I
  ): ListPointOfPresencesResponse {
    const message = {
      ...baseListPointOfPresencesResponse,
    } as ListPointOfPresencesResponse;
    message.pointOfPresences =
      object.pointOfPresences?.map((e) => PointOfPresence.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ListPointOfPresencesResponse.$type,
  ListPointOfPresencesResponse
);

/** A set of methods for managing PointOfPresence resources. */
export const PointOfPresenceServiceService = {
  /**
   * Returns the specified PointOfPresence resource.
   *
   * To get the list of available PointOfPresence resources, make a [List] request.
   */
  get: {
    path: "/yandex.cloud.cic.v1.PointOfPresenceService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetPointOfPresenceRequest) =>
      Buffer.from(GetPointOfPresenceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetPointOfPresenceRequest.decode(value),
    responseSerialize: (value: PointOfPresence) =>
      Buffer.from(PointOfPresence.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PointOfPresence.decode(value),
  },
  /** Retrieves the list of PointOfPresence resources in the specified folder. */
  list: {
    path: "/yandex.cloud.cic.v1.PointOfPresenceService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListPointOfPresencesRequest) =>
      Buffer.from(ListPointOfPresencesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListPointOfPresencesRequest.decode(value),
    responseSerialize: (value: ListPointOfPresencesResponse) =>
      Buffer.from(ListPointOfPresencesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListPointOfPresencesResponse.decode(value),
  },
} as const;

export interface PointOfPresenceServiceServer
  extends UntypedServiceImplementation {
  /**
   * Returns the specified PointOfPresence resource.
   *
   * To get the list of available PointOfPresence resources, make a [List] request.
   */
  get: handleUnaryCall<GetPointOfPresenceRequest, PointOfPresence>;
  /** Retrieves the list of PointOfPresence resources in the specified folder. */
  list: handleUnaryCall<
    ListPointOfPresencesRequest,
    ListPointOfPresencesResponse
  >;
}

export interface PointOfPresenceServiceClient extends Client {
  /**
   * Returns the specified PointOfPresence resource.
   *
   * To get the list of available PointOfPresence resources, make a [List] request.
   */
  get(
    request: GetPointOfPresenceRequest,
    callback: (error: ServiceError | null, response: PointOfPresence) => void
  ): ClientUnaryCall;
  get(
    request: GetPointOfPresenceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PointOfPresence) => void
  ): ClientUnaryCall;
  get(
    request: GetPointOfPresenceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PointOfPresence) => void
  ): ClientUnaryCall;
  /** Retrieves the list of PointOfPresence resources in the specified folder. */
  list(
    request: ListPointOfPresencesRequest,
    callback: (
      error: ServiceError | null,
      response: ListPointOfPresencesResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListPointOfPresencesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListPointOfPresencesResponse
    ) => void
  ): ClientUnaryCall;
  list(
    request: ListPointOfPresencesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListPointOfPresencesResponse
    ) => void
  ): ClientUnaryCall;
}

export const PointOfPresenceServiceClient = makeGenericClientConstructor(
  PointOfPresenceServiceService,
  "yandex.cloud.cic.v1.PointOfPresenceService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): PointOfPresenceServiceClient;
  service: typeof PointOfPresenceServiceService;
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
