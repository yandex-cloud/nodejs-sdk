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

export const protobufPackage = "yandex.cloud.loadtesting.agent.v1";

export interface AddMetricRequest {
  $type: "yandex.cloud.loadtesting.agent.v1.AddMetricRequest";
  computeInstanceId: string;
  jobId: string;
  chunks: MetricChunk[];
  agentInstanceId: string;
}

export interface MetricChunk {
  $type: "yandex.cloud.loadtesting.agent.v1.MetricChunk";
  data: Metric[];
  timestamp: number;
  comment: string;
  instanceHost: string;
}

export interface Metric {
  $type: "yandex.cloud.loadtesting.agent.v1.Metric";
  metricType: string;
  metricName: string;
  metricValue: number;
}

export interface AddMetricResponse {
  $type: "yandex.cloud.loadtesting.agent.v1.AddMetricResponse";
  metricTrailId: string;
  code: number;
}

const baseAddMetricRequest: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.AddMetricRequest",
  computeInstanceId: "",
  jobId: "",
  agentInstanceId: "",
};

export const AddMetricRequest = {
  $type: "yandex.cloud.loadtesting.agent.v1.AddMetricRequest" as const,

  encode(
    message: AddMetricRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    if (message.jobId !== "") {
      writer.uint32(26).string(message.jobId);
    }
    for (const v of message.chunks) {
      MetricChunk.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.agentInstanceId !== "") {
      writer.uint32(42).string(message.agentInstanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddMetricRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddMetricRequest } as AddMetricRequest;
    message.chunks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.computeInstanceId = reader.string();
          break;
        case 3:
          message.jobId = reader.string();
          break;
        case 4:
          message.chunks.push(MetricChunk.decode(reader, reader.uint32()));
          break;
        case 5:
          message.agentInstanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddMetricRequest {
    const message = { ...baseAddMetricRequest } as AddMetricRequest;
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : "";
    message.jobId =
      object.jobId !== undefined && object.jobId !== null
        ? String(object.jobId)
        : "";
    message.chunks = (object.chunks ?? []).map((e: any) =>
      MetricChunk.fromJSON(e)
    );
    message.agentInstanceId =
      object.agentInstanceId !== undefined && object.agentInstanceId !== null
        ? String(object.agentInstanceId)
        : "";
    return message;
  },

  toJSON(message: AddMetricRequest): unknown {
    const obj: any = {};
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    message.jobId !== undefined && (obj.jobId = message.jobId);
    if (message.chunks) {
      obj.chunks = message.chunks.map((e) =>
        e ? MetricChunk.toJSON(e) : undefined
      );
    } else {
      obj.chunks = [];
    }
    message.agentInstanceId !== undefined &&
      (obj.agentInstanceId = message.agentInstanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddMetricRequest>, I>>(
    object: I
  ): AddMetricRequest {
    const message = { ...baseAddMetricRequest } as AddMetricRequest;
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.jobId = object.jobId ?? "";
    message.chunks =
      object.chunks?.map((e) => MetricChunk.fromPartial(e)) || [];
    message.agentInstanceId = object.agentInstanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(AddMetricRequest.$type, AddMetricRequest);

const baseMetricChunk: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.MetricChunk",
  timestamp: 0,
  comment: "",
  instanceHost: "",
};

export const MetricChunk = {
  $type: "yandex.cloud.loadtesting.agent.v1.MetricChunk" as const,

  encode(
    message: MetricChunk,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.data) {
      Metric.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).int64(message.timestamp);
    }
    if (message.comment !== "") {
      writer.uint32(26).string(message.comment);
    }
    if (message.instanceHost !== "") {
      writer.uint32(34).string(message.instanceHost);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MetricChunk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMetricChunk } as MetricChunk;
    message.data = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(Metric.decode(reader, reader.uint32()));
          break;
        case 2:
          message.timestamp = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.comment = reader.string();
          break;
        case 4:
          message.instanceHost = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MetricChunk {
    const message = { ...baseMetricChunk } as MetricChunk;
    message.data = (object.data ?? []).map((e: any) => Metric.fromJSON(e));
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Number(object.timestamp)
        : 0;
    message.comment =
      object.comment !== undefined && object.comment !== null
        ? String(object.comment)
        : "";
    message.instanceHost =
      object.instanceHost !== undefined && object.instanceHost !== null
        ? String(object.instanceHost)
        : "";
    return message;
  },

  toJSON(message: MetricChunk): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map((e) => (e ? Metric.toJSON(e) : undefined));
    } else {
      obj.data = [];
    }
    message.timestamp !== undefined &&
      (obj.timestamp = Math.round(message.timestamp));
    message.comment !== undefined && (obj.comment = message.comment);
    message.instanceHost !== undefined &&
      (obj.instanceHost = message.instanceHost);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MetricChunk>, I>>(
    object: I
  ): MetricChunk {
    const message = { ...baseMetricChunk } as MetricChunk;
    message.data = object.data?.map((e) => Metric.fromPartial(e)) || [];
    message.timestamp = object.timestamp ?? 0;
    message.comment = object.comment ?? "";
    message.instanceHost = object.instanceHost ?? "";
    return message;
  },
};

messageTypeRegistry.set(MetricChunk.$type, MetricChunk);

const baseMetric: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.Metric",
  metricType: "",
  metricName: "",
  metricValue: 0,
};

export const Metric = {
  $type: "yandex.cloud.loadtesting.agent.v1.Metric" as const,

  encode(
    message: Metric,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.metricType !== "") {
      writer.uint32(10).string(message.metricType);
    }
    if (message.metricName !== "") {
      writer.uint32(18).string(message.metricName);
    }
    if (message.metricValue !== 0) {
      writer.uint32(25).double(message.metricValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metric {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMetric } as Metric;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metricType = reader.string();
          break;
        case 2:
          message.metricName = reader.string();
          break;
        case 3:
          message.metricValue = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Metric {
    const message = { ...baseMetric } as Metric;
    message.metricType =
      object.metricType !== undefined && object.metricType !== null
        ? String(object.metricType)
        : "";
    message.metricName =
      object.metricName !== undefined && object.metricName !== null
        ? String(object.metricName)
        : "";
    message.metricValue =
      object.metricValue !== undefined && object.metricValue !== null
        ? Number(object.metricValue)
        : 0;
    return message;
  },

  toJSON(message: Metric): unknown {
    const obj: any = {};
    message.metricType !== undefined && (obj.metricType = message.metricType);
    message.metricName !== undefined && (obj.metricName = message.metricName);
    message.metricValue !== undefined &&
      (obj.metricValue = message.metricValue);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Metric>, I>>(object: I): Metric {
    const message = { ...baseMetric } as Metric;
    message.metricType = object.metricType ?? "";
    message.metricName = object.metricName ?? "";
    message.metricValue = object.metricValue ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Metric.$type, Metric);

const baseAddMetricResponse: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.AddMetricResponse",
  metricTrailId: "",
  code: 0,
};

export const AddMetricResponse = {
  $type: "yandex.cloud.loadtesting.agent.v1.AddMetricResponse" as const,

  encode(
    message: AddMetricResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.metricTrailId !== "") {
      writer.uint32(10).string(message.metricTrailId);
    }
    if (message.code !== 0) {
      writer.uint32(16).int64(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddMetricResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddMetricResponse } as AddMetricResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metricTrailId = reader.string();
          break;
        case 2:
          message.code = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddMetricResponse {
    const message = { ...baseAddMetricResponse } as AddMetricResponse;
    message.metricTrailId =
      object.metricTrailId !== undefined && object.metricTrailId !== null
        ? String(object.metricTrailId)
        : "";
    message.code =
      object.code !== undefined && object.code !== null
        ? Number(object.code)
        : 0;
    return message;
  },

  toJSON(message: AddMetricResponse): unknown {
    const obj: any = {};
    message.metricTrailId !== undefined &&
      (obj.metricTrailId = message.metricTrailId);
    message.code !== undefined && (obj.code = Math.round(message.code));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddMetricResponse>, I>>(
    object: I
  ): AddMetricResponse {
    const message = { ...baseAddMetricResponse } as AddMetricResponse;
    message.metricTrailId = object.metricTrailId ?? "";
    message.code = object.code ?? 0;
    return message;
  },
};

messageTypeRegistry.set(AddMetricResponse.$type, AddMetricResponse);

export const MonitoringServiceService = {
  /** Saves monitoring events for specified job */
  addMetric: {
    path: "/yandex.cloud.loadtesting.agent.v1.MonitoringService/AddMetric",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddMetricRequest) =>
      Buffer.from(AddMetricRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddMetricRequest.decode(value),
    responseSerialize: (value: AddMetricResponse) =>
      Buffer.from(AddMetricResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AddMetricResponse.decode(value),
  },
} as const;

export interface MonitoringServiceServer extends UntypedServiceImplementation {
  /** Saves monitoring events for specified job */
  addMetric: handleUnaryCall<AddMetricRequest, AddMetricResponse>;
}

export interface MonitoringServiceClient extends Client {
  /** Saves monitoring events for specified job */
  addMetric(
    request: AddMetricRequest,
    callback: (error: ServiceError | null, response: AddMetricResponse) => void
  ): ClientUnaryCall;
  addMetric(
    request: AddMetricRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AddMetricResponse) => void
  ): ClientUnaryCall;
  addMetric(
    request: AddMetricRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AddMetricResponse) => void
  ): ClientUnaryCall;
}

export const MonitoringServiceClient = makeGenericClientConstructor(
  MonitoringServiceService,
  "yandex.cloud.loadtesting.agent.v1.MonitoringService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): MonitoringServiceClient;
  service: typeof MonitoringServiceService;
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
