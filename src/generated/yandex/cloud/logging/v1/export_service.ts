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
import { ExportParams } from "../../../../yandex/cloud/logging/v1/export";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Operation } from "../../../../yandex/cloud/operation/operation";

export const protobufPackage = "yandex.cloud.logging.v1";

export interface RunExportRequest {
  $type: "yandex.cloud.logging.v1.RunExportRequest";
  groupId: string;
  sinkId: string;
  params?: ExportParams;
  resultFilename: string;
  since?: Date;
  until?: Date;
}

export interface RunExportDetails {
  $type: "yandex.cloud.logging.v1.RunExportDetails";
  groupId: string;
  sinkId: string;
  params?: ExportParams;
  resultFilename: string;
  since?: Date;
  until?: Date;
}

export interface RunExportMetadata {
  $type: "yandex.cloud.logging.v1.RunExportMetadata";
  groupId: string;
  sinkId: string;
  resultFilename: string;
}

const baseRunExportRequest: object = {
  $type: "yandex.cloud.logging.v1.RunExportRequest",
  groupId: "",
  sinkId: "",
  resultFilename: "",
};

export const RunExportRequest = {
  $type: "yandex.cloud.logging.v1.RunExportRequest" as const,

  encode(
    message: RunExportRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    if (message.sinkId !== "") {
      writer.uint32(18).string(message.sinkId);
    }
    if (message.params !== undefined) {
      ExportParams.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    if (message.resultFilename !== "") {
      writer.uint32(34).string(message.resultFilename);
    }
    if (message.since !== undefined) {
      Timestamp.encode(
        toTimestamp(message.since),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.until !== undefined) {
      Timestamp.encode(
        toTimestamp(message.until),
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RunExportRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRunExportRequest } as RunExportRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.string();
          break;
        case 2:
          message.sinkId = reader.string();
          break;
        case 3:
          message.params = ExportParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.resultFilename = reader.string();
          break;
        case 5:
          message.since = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.until = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RunExportRequest {
    const message = { ...baseRunExportRequest } as RunExportRequest;
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? String(object.groupId)
        : "";
    message.sinkId =
      object.sinkId !== undefined && object.sinkId !== null
        ? String(object.sinkId)
        : "";
    message.params =
      object.params !== undefined && object.params !== null
        ? ExportParams.fromJSON(object.params)
        : undefined;
    message.resultFilename =
      object.resultFilename !== undefined && object.resultFilename !== null
        ? String(object.resultFilename)
        : "";
    message.since =
      object.since !== undefined && object.since !== null
        ? fromJsonTimestamp(object.since)
        : undefined;
    message.until =
      object.until !== undefined && object.until !== null
        ? fromJsonTimestamp(object.until)
        : undefined;
    return message;
  },

  toJSON(message: RunExportRequest): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.sinkId !== undefined && (obj.sinkId = message.sinkId);
    message.params !== undefined &&
      (obj.params = message.params
        ? ExportParams.toJSON(message.params)
        : undefined);
    message.resultFilename !== undefined &&
      (obj.resultFilename = message.resultFilename);
    message.since !== undefined && (obj.since = message.since.toISOString());
    message.until !== undefined && (obj.until = message.until.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RunExportRequest>, I>>(
    object: I
  ): RunExportRequest {
    const message = { ...baseRunExportRequest } as RunExportRequest;
    message.groupId = object.groupId ?? "";
    message.sinkId = object.sinkId ?? "";
    message.params =
      object.params !== undefined && object.params !== null
        ? ExportParams.fromPartial(object.params)
        : undefined;
    message.resultFilename = object.resultFilename ?? "";
    message.since = object.since ?? undefined;
    message.until = object.until ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(RunExportRequest.$type, RunExportRequest);

const baseRunExportDetails: object = {
  $type: "yandex.cloud.logging.v1.RunExportDetails",
  groupId: "",
  sinkId: "",
  resultFilename: "",
};

export const RunExportDetails = {
  $type: "yandex.cloud.logging.v1.RunExportDetails" as const,

  encode(
    message: RunExportDetails,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    if (message.sinkId !== "") {
      writer.uint32(18).string(message.sinkId);
    }
    if (message.params !== undefined) {
      ExportParams.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    if (message.resultFilename !== "") {
      writer.uint32(34).string(message.resultFilename);
    }
    if (message.since !== undefined) {
      Timestamp.encode(
        toTimestamp(message.since),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.until !== undefined) {
      Timestamp.encode(
        toTimestamp(message.until),
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RunExportDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRunExportDetails } as RunExportDetails;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.string();
          break;
        case 2:
          message.sinkId = reader.string();
          break;
        case 3:
          message.params = ExportParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.resultFilename = reader.string();
          break;
        case 5:
          message.since = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.until = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RunExportDetails {
    const message = { ...baseRunExportDetails } as RunExportDetails;
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? String(object.groupId)
        : "";
    message.sinkId =
      object.sinkId !== undefined && object.sinkId !== null
        ? String(object.sinkId)
        : "";
    message.params =
      object.params !== undefined && object.params !== null
        ? ExportParams.fromJSON(object.params)
        : undefined;
    message.resultFilename =
      object.resultFilename !== undefined && object.resultFilename !== null
        ? String(object.resultFilename)
        : "";
    message.since =
      object.since !== undefined && object.since !== null
        ? fromJsonTimestamp(object.since)
        : undefined;
    message.until =
      object.until !== undefined && object.until !== null
        ? fromJsonTimestamp(object.until)
        : undefined;
    return message;
  },

  toJSON(message: RunExportDetails): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.sinkId !== undefined && (obj.sinkId = message.sinkId);
    message.params !== undefined &&
      (obj.params = message.params
        ? ExportParams.toJSON(message.params)
        : undefined);
    message.resultFilename !== undefined &&
      (obj.resultFilename = message.resultFilename);
    message.since !== undefined && (obj.since = message.since.toISOString());
    message.until !== undefined && (obj.until = message.until.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RunExportDetails>, I>>(
    object: I
  ): RunExportDetails {
    const message = { ...baseRunExportDetails } as RunExportDetails;
    message.groupId = object.groupId ?? "";
    message.sinkId = object.sinkId ?? "";
    message.params =
      object.params !== undefined && object.params !== null
        ? ExportParams.fromPartial(object.params)
        : undefined;
    message.resultFilename = object.resultFilename ?? "";
    message.since = object.since ?? undefined;
    message.until = object.until ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(RunExportDetails.$type, RunExportDetails);

const baseRunExportMetadata: object = {
  $type: "yandex.cloud.logging.v1.RunExportMetadata",
  groupId: "",
  sinkId: "",
  resultFilename: "",
};

export const RunExportMetadata = {
  $type: "yandex.cloud.logging.v1.RunExportMetadata" as const,

  encode(
    message: RunExportMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    if (message.sinkId !== "") {
      writer.uint32(18).string(message.sinkId);
    }
    if (message.resultFilename !== "") {
      writer.uint32(26).string(message.resultFilename);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RunExportMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRunExportMetadata } as RunExportMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.string();
          break;
        case 2:
          message.sinkId = reader.string();
          break;
        case 3:
          message.resultFilename = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RunExportMetadata {
    const message = { ...baseRunExportMetadata } as RunExportMetadata;
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? String(object.groupId)
        : "";
    message.sinkId =
      object.sinkId !== undefined && object.sinkId !== null
        ? String(object.sinkId)
        : "";
    message.resultFilename =
      object.resultFilename !== undefined && object.resultFilename !== null
        ? String(object.resultFilename)
        : "";
    return message;
  },

  toJSON(message: RunExportMetadata): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.sinkId !== undefined && (obj.sinkId = message.sinkId);
    message.resultFilename !== undefined &&
      (obj.resultFilename = message.resultFilename);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RunExportMetadata>, I>>(
    object: I
  ): RunExportMetadata {
    const message = { ...baseRunExportMetadata } as RunExportMetadata;
    message.groupId = object.groupId ?? "";
    message.sinkId = object.sinkId ?? "";
    message.resultFilename = object.resultFilename ?? "";
    return message;
  },
};

messageTypeRegistry.set(RunExportMetadata.$type, RunExportMetadata);

export const ExportServiceService = {
  run: {
    path: "/yandex.cloud.logging.v1.ExportService/Run",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RunExportRequest) =>
      Buffer.from(RunExportRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RunExportRequest.decode(value),
    responseSerialize: (value: Operation) =>
      Buffer.from(Operation.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Operation.decode(value),
  },
} as const;

export interface ExportServiceServer extends UntypedServiceImplementation {
  run: handleUnaryCall<RunExportRequest, Operation>;
}

export interface ExportServiceClient extends Client {
  run(
    request: RunExportRequest,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  run(
    request: RunExportRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
  run(
    request: RunExportRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Operation) => void
  ): ClientUnaryCall;
}

export const ExportServiceClient = makeGenericClientConstructor(
  ExportServiceService,
  "yandex.cloud.logging.v1.ExportService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): ExportServiceClient;
  service: typeof ExportServiceService;
};

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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
