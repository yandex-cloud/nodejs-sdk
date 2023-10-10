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
import { Sku } from "../../../../yandex/cloud/billing/v1/sku";

export const protobufPackage = "yandex.cloud.billing.v1";

export interface GetSkuRequest {
  $type: "yandex.cloud.billing.v1.GetSkuRequest";
  /**
   * ID of the SKU to return.
   * To get the SKU ID, use [SkuService.List] request.
   */
  id: string;
  /**
   * Currency of the SKU.
   * Can be one of the following:
   * * `RUB`
   * * `USD`
   * * `KZT`
   */
  currency: string;
  /**
   * Optional ID of the billing account.
   * If specified, contract prices for a particular billing account are included in the response.
   * To get the billing account ID, use [BillingAccountService.List] request.
   */
  billingAccountId: string;
}

export interface ListSkusRequest {
  $type: "yandex.cloud.billing.v1.ListSkusRequest";
  /**
   * Currency of the prices.
   * Can be one of the following:
   * * `RUB`
   * * `USD`
   * * `KZT`
   */
  currency: string;
  /**
   * Optional ID of the billing account.
   * If specified, contract prices for a particular billing account are included in the response.
   * To get the billing account ID, use [BillingAccountService.List] request.
   */
  billingAccountId: string;
  /**
   * A filter expression that filters resources listed in the response.
   * The expression must specify:
   * 1. The field name. Currently you can use filtering only on the [yandex.cloud.billing.v1.Sku.id] and [yandex.cloud.billing.v1.Sku.service_id] field.
   * 2. An `=` operator.
   * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
   */
  filter: string;
  /**
   * The maximum number of results per page to return. If the number of available
   * results is larger than [page_size],
   * the service returns a [ListSkusResponse.next_page_token]
   * that can be used to get the next page of results in subsequent list requests.
   */
  pageSize: number;
  /**
   * Page token. To get the next page of results,
   * set [page_token] to the [ListSkusResponse.next_page_token]
   * returned by a previous list request.
   */
  pageToken: string;
}

export interface ListSkusResponse {
  $type: "yandex.cloud.billing.v1.ListSkusResponse";
  /** List of skus. */
  skus: Sku[];
  /**
   * This token allows you to get the next page of results for list requests. If the number of results
   * is larger than [ListSkusRequest.page_size], use
   * [next_page_token] as the value
   * for the [ListSkusRequest.page_token] query parameter
   * in the next list request. Each subsequent list request will have its own
   * [next_page_token] to continue paging through the results.
   */
  nextPageToken: string;
}

const baseGetSkuRequest: object = {
  $type: "yandex.cloud.billing.v1.GetSkuRequest",
  id: "",
  currency: "",
  billingAccountId: "",
};

export const GetSkuRequest = {
  $type: "yandex.cloud.billing.v1.GetSkuRequest" as const,

  encode(
    message: GetSkuRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.currency !== "") {
      writer.uint32(18).string(message.currency);
    }
    if (message.billingAccountId !== "") {
      writer.uint32(26).string(message.billingAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSkuRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetSkuRequest } as GetSkuRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.currency = reader.string();
          break;
        case 3:
          message.billingAccountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetSkuRequest {
    const message = { ...baseGetSkuRequest } as GetSkuRequest;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.currency =
      object.currency !== undefined && object.currency !== null
        ? String(object.currency)
        : "";
    message.billingAccountId =
      object.billingAccountId !== undefined && object.billingAccountId !== null
        ? String(object.billingAccountId)
        : "";
    return message;
  },

  toJSON(message: GetSkuRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.currency !== undefined && (obj.currency = message.currency);
    message.billingAccountId !== undefined &&
      (obj.billingAccountId = message.billingAccountId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetSkuRequest>, I>>(
    object: I
  ): GetSkuRequest {
    const message = { ...baseGetSkuRequest } as GetSkuRequest;
    message.id = object.id ?? "";
    message.currency = object.currency ?? "";
    message.billingAccountId = object.billingAccountId ?? "";
    return message;
  },
};

messageTypeRegistry.set(GetSkuRequest.$type, GetSkuRequest);

const baseListSkusRequest: object = {
  $type: "yandex.cloud.billing.v1.ListSkusRequest",
  currency: "",
  billingAccountId: "",
  filter: "",
  pageSize: 0,
  pageToken: "",
};

export const ListSkusRequest = {
  $type: "yandex.cloud.billing.v1.ListSkusRequest" as const,

  encode(
    message: ListSkusRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.currency !== "") {
      writer.uint32(10).string(message.currency);
    }
    if (message.billingAccountId !== "") {
      writer.uint32(18).string(message.billingAccountId);
    }
    if (message.filter !== "") {
      writer.uint32(26).string(message.filter);
    }
    if (message.pageSize !== 0) {
      writer.uint32(32).int64(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(42).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSkusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListSkusRequest } as ListSkusRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currency = reader.string();
          break;
        case 2:
          message.billingAccountId = reader.string();
          break;
        case 3:
          message.filter = reader.string();
          break;
        case 4:
          message.pageSize = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.pageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListSkusRequest {
    const message = { ...baseListSkusRequest } as ListSkusRequest;
    message.currency =
      object.currency !== undefined && object.currency !== null
        ? String(object.currency)
        : "";
    message.billingAccountId =
      object.billingAccountId !== undefined && object.billingAccountId !== null
        ? String(object.billingAccountId)
        : "";
    message.filter =
      object.filter !== undefined && object.filter !== null
        ? String(object.filter)
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

  toJSON(message: ListSkusRequest): unknown {
    const obj: any = {};
    message.currency !== undefined && (obj.currency = message.currency);
    message.billingAccountId !== undefined &&
      (obj.billingAccountId = message.billingAccountId);
    message.filter !== undefined && (obj.filter = message.filter);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListSkusRequest>, I>>(
    object: I
  ): ListSkusRequest {
    const message = { ...baseListSkusRequest } as ListSkusRequest;
    message.currency = object.currency ?? "";
    message.billingAccountId = object.billingAccountId ?? "";
    message.filter = object.filter ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSkusRequest.$type, ListSkusRequest);

const baseListSkusResponse: object = {
  $type: "yandex.cloud.billing.v1.ListSkusResponse",
  nextPageToken: "",
};

export const ListSkusResponse = {
  $type: "yandex.cloud.billing.v1.ListSkusResponse" as const,

  encode(
    message: ListSkusResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.skus) {
      Sku.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSkusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListSkusResponse } as ListSkusResponse;
    message.skus = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.skus.push(Sku.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListSkusResponse {
    const message = { ...baseListSkusResponse } as ListSkusResponse;
    message.skus = (object.skus ?? []).map((e: any) => Sku.fromJSON(e));
    message.nextPageToken =
      object.nextPageToken !== undefined && object.nextPageToken !== null
        ? String(object.nextPageToken)
        : "";
    return message;
  },

  toJSON(message: ListSkusResponse): unknown {
    const obj: any = {};
    if (message.skus) {
      obj.skus = message.skus.map((e) => (e ? Sku.toJSON(e) : undefined));
    } else {
      obj.skus = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListSkusResponse>, I>>(
    object: I
  ): ListSkusResponse {
    const message = { ...baseListSkusResponse } as ListSkusResponse;
    message.skus = object.skus?.map((e) => Sku.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

messageTypeRegistry.set(ListSkusResponse.$type, ListSkusResponse);

/** A set of methods for managing Sku resources. */
export const SkuServiceService = {
  /** Returns the specified SKU. */
  get: {
    path: "/yandex.cloud.billing.v1.SkuService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetSkuRequest) =>
      Buffer.from(GetSkuRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetSkuRequest.decode(value),
    responseSerialize: (value: Sku) => Buffer.from(Sku.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Sku.decode(value),
  },
  /** Retrieves the list of SKUs. */
  list: {
    path: "/yandex.cloud.billing.v1.SkuService/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListSkusRequest) =>
      Buffer.from(ListSkusRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListSkusRequest.decode(value),
    responseSerialize: (value: ListSkusResponse) =>
      Buffer.from(ListSkusResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListSkusResponse.decode(value),
  },
} as const;

export interface SkuServiceServer extends UntypedServiceImplementation {
  /** Returns the specified SKU. */
  get: handleUnaryCall<GetSkuRequest, Sku>;
  /** Retrieves the list of SKUs. */
  list: handleUnaryCall<ListSkusRequest, ListSkusResponse>;
}

export interface SkuServiceClient extends Client {
  /** Returns the specified SKU. */
  get(
    request: GetSkuRequest,
    callback: (error: ServiceError | null, response: Sku) => void
  ): ClientUnaryCall;
  get(
    request: GetSkuRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Sku) => void
  ): ClientUnaryCall;
  get(
    request: GetSkuRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Sku) => void
  ): ClientUnaryCall;
  /** Retrieves the list of SKUs. */
  list(
    request: ListSkusRequest,
    callback: (error: ServiceError | null, response: ListSkusResponse) => void
  ): ClientUnaryCall;
  list(
    request: ListSkusRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListSkusResponse) => void
  ): ClientUnaryCall;
  list(
    request: ListSkusRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListSkusResponse) => void
  ): ClientUnaryCall;
}

export const SkuServiceClient = makeGenericClientConstructor(
  SkuServiceService,
  "yandex.cloud.billing.v1.SkuService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): SkuServiceClient;
  service: typeof SkuServiceService;
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
