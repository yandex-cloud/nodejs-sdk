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

export const protobufPackage = "yandex.cloud.iot.broker.v1";

export interface PublishBrokerDataRequest {
  $type: "yandex.cloud.iot.broker.v1.PublishBrokerDataRequest";
  /** ID of broker publishing message */
  brokerId: string;
  /** Topic where message should be published */
  topic: string;
  /** Content of the message */
  data: Buffer;
}

export interface PublishBrokerDataResponse {
  $type: "yandex.cloud.iot.broker.v1.PublishBrokerDataResponse";
}

const basePublishBrokerDataRequest: object = {
  $type: "yandex.cloud.iot.broker.v1.PublishBrokerDataRequest",
  brokerId: "",
  topic: "",
};

export const PublishBrokerDataRequest = {
  $type: "yandex.cloud.iot.broker.v1.PublishBrokerDataRequest" as const,

  encode(
    message: PublishBrokerDataRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.brokerId !== "") {
      writer.uint32(10).string(message.brokerId);
    }
    if (message.topic !== "") {
      writer.uint32(18).string(message.topic);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PublishBrokerDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePublishBrokerDataRequest,
    } as PublishBrokerDataRequest;
    message.data = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.brokerId = reader.string();
          break;
        case 2:
          message.topic = reader.string();
          break;
        case 3:
          message.data = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PublishBrokerDataRequest {
    const message = {
      ...basePublishBrokerDataRequest,
    } as PublishBrokerDataRequest;
    message.brokerId =
      object.brokerId !== undefined && object.brokerId !== null
        ? String(object.brokerId)
        : "";
    message.topic =
      object.topic !== undefined && object.topic !== null
        ? String(object.topic)
        : "";
    message.data =
      object.data !== undefined && object.data !== null
        ? Buffer.from(bytesFromBase64(object.data))
        : Buffer.alloc(0);
    return message;
  },

  toJSON(message: PublishBrokerDataRequest): unknown {
    const obj: any = {};
    message.brokerId !== undefined && (obj.brokerId = message.brokerId);
    message.topic !== undefined && (obj.topic = message.topic);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : Buffer.alloc(0)
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PublishBrokerDataRequest>, I>>(
    object: I
  ): PublishBrokerDataRequest {
    const message = {
      ...basePublishBrokerDataRequest,
    } as PublishBrokerDataRequest;
    message.brokerId = object.brokerId ?? "";
    message.topic = object.topic ?? "";
    message.data = object.data ?? Buffer.alloc(0);
    return message;
  },
};

messageTypeRegistry.set(
  PublishBrokerDataRequest.$type,
  PublishBrokerDataRequest
);

const basePublishBrokerDataResponse: object = {
  $type: "yandex.cloud.iot.broker.v1.PublishBrokerDataResponse",
};

export const PublishBrokerDataResponse = {
  $type: "yandex.cloud.iot.broker.v1.PublishBrokerDataResponse" as const,

  encode(
    _: PublishBrokerDataResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PublishBrokerDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePublishBrokerDataResponse,
    } as PublishBrokerDataResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): PublishBrokerDataResponse {
    const message = {
      ...basePublishBrokerDataResponse,
    } as PublishBrokerDataResponse;
    return message;
  },

  toJSON(_: PublishBrokerDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PublishBrokerDataResponse>, I>>(
    _: I
  ): PublishBrokerDataResponse {
    const message = {
      ...basePublishBrokerDataResponse,
    } as PublishBrokerDataResponse;
    return message;
  },
};

messageTypeRegistry.set(
  PublishBrokerDataResponse.$type,
  PublishBrokerDataResponse
);

/** A set of methods to work with IoT Core messages on behalf of broker */
export const BrokerDataServiceService = {
  /** Publishes message on behalf of specified broker */
  publish: {
    path: "/yandex.cloud.iot.broker.v1.BrokerDataService/Publish",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PublishBrokerDataRequest) =>
      Buffer.from(PublishBrokerDataRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      PublishBrokerDataRequest.decode(value),
    responseSerialize: (value: PublishBrokerDataResponse) =>
      Buffer.from(PublishBrokerDataResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      PublishBrokerDataResponse.decode(value),
  },
} as const;

export interface BrokerDataServiceServer extends UntypedServiceImplementation {
  /** Publishes message on behalf of specified broker */
  publish: handleUnaryCall<PublishBrokerDataRequest, PublishBrokerDataResponse>;
}

export interface BrokerDataServiceClient extends Client {
  /** Publishes message on behalf of specified broker */
  publish(
    request: PublishBrokerDataRequest,
    callback: (
      error: ServiceError | null,
      response: PublishBrokerDataResponse
    ) => void
  ): ClientUnaryCall;
  publish(
    request: PublishBrokerDataRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: PublishBrokerDataResponse
    ) => void
  ): ClientUnaryCall;
  publish(
    request: PublishBrokerDataRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: PublishBrokerDataResponse
    ) => void
  ): ClientUnaryCall;
}

export const BrokerDataServiceClient = makeGenericClientConstructor(
  BrokerDataServiceService,
  "yandex.cloud.iot.broker.v1.BrokerDataService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): BrokerDataServiceClient;
  service: typeof BrokerDataServiceService;
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

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
