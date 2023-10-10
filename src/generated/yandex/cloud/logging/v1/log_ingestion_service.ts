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
  Destination,
  LogEntryDefaults,
  IncomingLogEntry,
} from "../../../../yandex/cloud/logging/v1/log_entry";
import { LogEntryResource } from "../../../../yandex/cloud/logging/v1/log_resource";
import { Status } from "../../../../google/rpc/status";

export const protobufPackage = "yandex.cloud.logging.v1";

export interface WriteRequest {
  $type: "yandex.cloud.logging.v1.WriteRequest";
  /**
   * Log entries destination.
   *
   * See [Destination] for details.
   */
  destination?: Destination;
  /** Common resource (type, ID) specification for log entries. */
  resource?: LogEntryResource;
  /** List of log entries. */
  entries: IncomingLogEntry[];
  /**
   * Log entries defaults.
   *
   * See [LogEntryDefaults] for details.
   */
  defaults?: LogEntryDefaults;
}

export interface WriteResponse {
  $type: "yandex.cloud.logging.v1.WriteResponse";
  /**
   * Map<idx, status> of ingest failures.
   *
   * If entry with idx N is absent, it was ingested successfully.
   */
  errors: { [key: number]: Status };
}

export interface WriteResponse_ErrorsEntry {
  $type: "yandex.cloud.logging.v1.WriteResponse.ErrorsEntry";
  key: number;
  value?: Status;
}

const baseWriteRequest: object = {
  $type: "yandex.cloud.logging.v1.WriteRequest",
};

export const WriteRequest = {
  $type: "yandex.cloud.logging.v1.WriteRequest" as const,

  encode(
    message: WriteRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.destination !== undefined) {
      Destination.encode(
        message.destination,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.resource !== undefined) {
      LogEntryResource.encode(
        message.resource,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.entries) {
      IncomingLogEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.defaults !== undefined) {
      LogEntryDefaults.encode(
        message.defaults,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WriteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWriteRequest } as WriteRequest;
    message.entries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.destination = Destination.decode(reader, reader.uint32());
          break;
        case 2:
          message.resource = LogEntryResource.decode(reader, reader.uint32());
          break;
        case 3:
          message.entries.push(
            IncomingLogEntry.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.defaults = LogEntryDefaults.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WriteRequest {
    const message = { ...baseWriteRequest } as WriteRequest;
    message.destination =
      object.destination !== undefined && object.destination !== null
        ? Destination.fromJSON(object.destination)
        : undefined;
    message.resource =
      object.resource !== undefined && object.resource !== null
        ? LogEntryResource.fromJSON(object.resource)
        : undefined;
    message.entries = (object.entries ?? []).map((e: any) =>
      IncomingLogEntry.fromJSON(e)
    );
    message.defaults =
      object.defaults !== undefined && object.defaults !== null
        ? LogEntryDefaults.fromJSON(object.defaults)
        : undefined;
    return message;
  },

  toJSON(message: WriteRequest): unknown {
    const obj: any = {};
    message.destination !== undefined &&
      (obj.destination = message.destination
        ? Destination.toJSON(message.destination)
        : undefined);
    message.resource !== undefined &&
      (obj.resource = message.resource
        ? LogEntryResource.toJSON(message.resource)
        : undefined);
    if (message.entries) {
      obj.entries = message.entries.map((e) =>
        e ? IncomingLogEntry.toJSON(e) : undefined
      );
    } else {
      obj.entries = [];
    }
    message.defaults !== undefined &&
      (obj.defaults = message.defaults
        ? LogEntryDefaults.toJSON(message.defaults)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WriteRequest>, I>>(
    object: I
  ): WriteRequest {
    const message = { ...baseWriteRequest } as WriteRequest;
    message.destination =
      object.destination !== undefined && object.destination !== null
        ? Destination.fromPartial(object.destination)
        : undefined;
    message.resource =
      object.resource !== undefined && object.resource !== null
        ? LogEntryResource.fromPartial(object.resource)
        : undefined;
    message.entries =
      object.entries?.map((e) => IncomingLogEntry.fromPartial(e)) || [];
    message.defaults =
      object.defaults !== undefined && object.defaults !== null
        ? LogEntryDefaults.fromPartial(object.defaults)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(WriteRequest.$type, WriteRequest);

const baseWriteResponse: object = {
  $type: "yandex.cloud.logging.v1.WriteResponse",
};

export const WriteResponse = {
  $type: "yandex.cloud.logging.v1.WriteResponse" as const,

  encode(
    message: WriteResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.errors).forEach(([key, value]) => {
      WriteResponse_ErrorsEntry.encode(
        {
          $type: "yandex.cloud.logging.v1.WriteResponse.ErrorsEntry",
          key: key as any,
          value,
        },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WriteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWriteResponse } as WriteResponse;
    message.errors = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = WriteResponse_ErrorsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.errors[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WriteResponse {
    const message = { ...baseWriteResponse } as WriteResponse;
    message.errors = Object.entries(object.errors ?? {}).reduce<{
      [key: number]: Status;
    }>((acc, [key, value]) => {
      acc[Number(key)] = Status.fromJSON(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: WriteResponse): unknown {
    const obj: any = {};
    obj.errors = {};
    if (message.errors) {
      Object.entries(message.errors).forEach(([k, v]) => {
        obj.errors[k] = Status.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WriteResponse>, I>>(
    object: I
  ): WriteResponse {
    const message = { ...baseWriteResponse } as WriteResponse;
    message.errors = Object.entries(object.errors ?? {}).reduce<{
      [key: number]: Status;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Status.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(WriteResponse.$type, WriteResponse);

const baseWriteResponse_ErrorsEntry: object = {
  $type: "yandex.cloud.logging.v1.WriteResponse.ErrorsEntry",
  key: 0,
};

export const WriteResponse_ErrorsEntry = {
  $type: "yandex.cloud.logging.v1.WriteResponse.ErrorsEntry" as const,

  encode(
    message: WriteResponse_ErrorsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      Status.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WriteResponse_ErrorsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseWriteResponse_ErrorsEntry,
    } as WriteResponse_ErrorsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WriteResponse_ErrorsEntry {
    const message = {
      ...baseWriteResponse_ErrorsEntry,
    } as WriteResponse_ErrorsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? Number(object.key) : 0;
    message.value =
      object.value !== undefined && object.value !== null
        ? Status.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: WriteResponse_ErrorsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined &&
      (obj.value = message.value ? Status.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WriteResponse_ErrorsEntry>, I>>(
    object: I
  ): WriteResponse_ErrorsEntry {
    const message = {
      ...baseWriteResponse_ErrorsEntry,
    } as WriteResponse_ErrorsEntry;
    message.key = object.key ?? 0;
    message.value =
      object.value !== undefined && object.value !== null
        ? Status.fromPartial(object.value)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  WriteResponse_ErrorsEntry.$type,
  WriteResponse_ErrorsEntry
);

/** A set of methods for writing to log groups. */
export const LogIngestionServiceService = {
  /** Write log entries to specified destination. */
  write: {
    path: "/yandex.cloud.logging.v1.LogIngestionService/Write",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: WriteRequest) =>
      Buffer.from(WriteRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => WriteRequest.decode(value),
    responseSerialize: (value: WriteResponse) =>
      Buffer.from(WriteResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => WriteResponse.decode(value),
  },
} as const;

export interface LogIngestionServiceServer
  extends UntypedServiceImplementation {
  /** Write log entries to specified destination. */
  write: handleUnaryCall<WriteRequest, WriteResponse>;
}

export interface LogIngestionServiceClient extends Client {
  /** Write log entries to specified destination. */
  write(
    request: WriteRequest,
    callback: (error: ServiceError | null, response: WriteResponse) => void
  ): ClientUnaryCall;
  write(
    request: WriteRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: WriteResponse) => void
  ): ClientUnaryCall;
  write(
    request: WriteRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: WriteResponse) => void
  ): ClientUnaryCall;
}

export const LogIngestionServiceClient = makeGenericClientConstructor(
  LogIngestionServiceService,
  "yandex.cloud.logging.v1.LogIngestionService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): LogIngestionServiceClient;
  service: typeof LogIngestionServiceService;
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
