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

export interface CreateTrailRequest {
  $type: "yandex.cloud.loadtesting.agent.v1.CreateTrailRequest";
  computeInstanceId: string;
  data: Trail[];
  jobId: string;
  agentInstanceId: string;
}

export interface Trail {
  $type: "yandex.cloud.loadtesting.agent.v1.Trail";
  overall: number;
  caseId: string;
  time: string;
  reqps: number;
  resps: number;
  expect: number;
  input: number;
  output: number;
  connectTime: number;
  sendTime: number;
  latency: number;
  receiveTime: number;
  threads: number;
  q50: number;
  q75: number;
  q80: number;
  q85: number;
  q90: number;
  q95: number;
  q98: number;
  q99: number;
  q100: number;
  httpCodes: Trail_Codes[];
  netCodes: Trail_Codes[];
  timeIntervals: Trail_Intervals[];
}

export interface Trail_Codes {
  $type: "yandex.cloud.loadtesting.agent.v1.Trail.Codes";
  code: number;
  count: number;
}

export interface Trail_Intervals {
  $type: "yandex.cloud.loadtesting.agent.v1.Trail.Intervals";
  to: number;
  count: number;
}

export interface CreateTrailResponse {
  $type: "yandex.cloud.loadtesting.agent.v1.CreateTrailResponse";
  trailId: string;
  code: number;
}

const baseCreateTrailRequest: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.CreateTrailRequest",
  computeInstanceId: "",
  jobId: "",
  agentInstanceId: "",
};

export const CreateTrailRequest = {
  $type: "yandex.cloud.loadtesting.agent.v1.CreateTrailRequest" as const,

  encode(
    message: CreateTrailRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.computeInstanceId !== "") {
      writer.uint32(10).string(message.computeInstanceId);
    }
    for (const v of message.data) {
      Trail.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.jobId !== "") {
      writer.uint32(26).string(message.jobId);
    }
    if (message.agentInstanceId !== "") {
      writer.uint32(34).string(message.agentInstanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTrailRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateTrailRequest } as CreateTrailRequest;
    message.data = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.computeInstanceId = reader.string();
          break;
        case 2:
          message.data.push(Trail.decode(reader, reader.uint32()));
          break;
        case 3:
          message.jobId = reader.string();
          break;
        case 4:
          message.agentInstanceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateTrailRequest {
    const message = { ...baseCreateTrailRequest } as CreateTrailRequest;
    message.computeInstanceId =
      object.computeInstanceId !== undefined &&
      object.computeInstanceId !== null
        ? String(object.computeInstanceId)
        : "";
    message.data = (object.data ?? []).map((e: any) => Trail.fromJSON(e));
    message.jobId =
      object.jobId !== undefined && object.jobId !== null
        ? String(object.jobId)
        : "";
    message.agentInstanceId =
      object.agentInstanceId !== undefined && object.agentInstanceId !== null
        ? String(object.agentInstanceId)
        : "";
    return message;
  },

  toJSON(message: CreateTrailRequest): unknown {
    const obj: any = {};
    message.computeInstanceId !== undefined &&
      (obj.computeInstanceId = message.computeInstanceId);
    if (message.data) {
      obj.data = message.data.map((e) => (e ? Trail.toJSON(e) : undefined));
    } else {
      obj.data = [];
    }
    message.jobId !== undefined && (obj.jobId = message.jobId);
    message.agentInstanceId !== undefined &&
      (obj.agentInstanceId = message.agentInstanceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateTrailRequest>, I>>(
    object: I
  ): CreateTrailRequest {
    const message = { ...baseCreateTrailRequest } as CreateTrailRequest;
    message.computeInstanceId = object.computeInstanceId ?? "";
    message.data = object.data?.map((e) => Trail.fromPartial(e)) || [];
    message.jobId = object.jobId ?? "";
    message.agentInstanceId = object.agentInstanceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(CreateTrailRequest.$type, CreateTrailRequest);

const baseTrail: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.Trail",
  overall: 0,
  caseId: "",
  time: "",
  reqps: 0,
  resps: 0,
  expect: 0,
  input: 0,
  output: 0,
  connectTime: 0,
  sendTime: 0,
  latency: 0,
  receiveTime: 0,
  threads: 0,
  q50: 0,
  q75: 0,
  q80: 0,
  q85: 0,
  q90: 0,
  q95: 0,
  q98: 0,
  q99: 0,
  q100: 0,
};

export const Trail = {
  $type: "yandex.cloud.loadtesting.agent.v1.Trail" as const,

  encode(message: Trail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.overall !== 0) {
      writer.uint32(8).int64(message.overall);
    }
    if (message.caseId !== "") {
      writer.uint32(18).string(message.caseId);
    }
    if (message.time !== "") {
      writer.uint32(26).string(message.time);
    }
    if (message.reqps !== 0) {
      writer.uint32(32).int64(message.reqps);
    }
    if (message.resps !== 0) {
      writer.uint32(40).int64(message.resps);
    }
    if (message.expect !== 0) {
      writer.uint32(49).double(message.expect);
    }
    if (message.input !== 0) {
      writer.uint32(56).int64(message.input);
    }
    if (message.output !== 0) {
      writer.uint32(64).int64(message.output);
    }
    if (message.connectTime !== 0) {
      writer.uint32(73).double(message.connectTime);
    }
    if (message.sendTime !== 0) {
      writer.uint32(81).double(message.sendTime);
    }
    if (message.latency !== 0) {
      writer.uint32(89).double(message.latency);
    }
    if (message.receiveTime !== 0) {
      writer.uint32(97).double(message.receiveTime);
    }
    if (message.threads !== 0) {
      writer.uint32(104).int64(message.threads);
    }
    if (message.q50 !== 0) {
      writer.uint32(113).double(message.q50);
    }
    if (message.q75 !== 0) {
      writer.uint32(121).double(message.q75);
    }
    if (message.q80 !== 0) {
      writer.uint32(129).double(message.q80);
    }
    if (message.q85 !== 0) {
      writer.uint32(137).double(message.q85);
    }
    if (message.q90 !== 0) {
      writer.uint32(145).double(message.q90);
    }
    if (message.q95 !== 0) {
      writer.uint32(153).double(message.q95);
    }
    if (message.q98 !== 0) {
      writer.uint32(161).double(message.q98);
    }
    if (message.q99 !== 0) {
      writer.uint32(169).double(message.q99);
    }
    if (message.q100 !== 0) {
      writer.uint32(177).double(message.q100);
    }
    for (const v of message.httpCodes) {
      Trail_Codes.encode(v!, writer.uint32(186).fork()).ldelim();
    }
    for (const v of message.netCodes) {
      Trail_Codes.encode(v!, writer.uint32(194).fork()).ldelim();
    }
    for (const v of message.timeIntervals) {
      Trail_Intervals.encode(v!, writer.uint32(202).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTrail } as Trail;
    message.httpCodes = [];
    message.netCodes = [];
    message.timeIntervals = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.overall = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.caseId = reader.string();
          break;
        case 3:
          message.time = reader.string();
          break;
        case 4:
          message.reqps = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.resps = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.expect = reader.double();
          break;
        case 7:
          message.input = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.output = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.connectTime = reader.double();
          break;
        case 10:
          message.sendTime = reader.double();
          break;
        case 11:
          message.latency = reader.double();
          break;
        case 12:
          message.receiveTime = reader.double();
          break;
        case 13:
          message.threads = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.q50 = reader.double();
          break;
        case 15:
          message.q75 = reader.double();
          break;
        case 16:
          message.q80 = reader.double();
          break;
        case 17:
          message.q85 = reader.double();
          break;
        case 18:
          message.q90 = reader.double();
          break;
        case 19:
          message.q95 = reader.double();
          break;
        case 20:
          message.q98 = reader.double();
          break;
        case 21:
          message.q99 = reader.double();
          break;
        case 22:
          message.q100 = reader.double();
          break;
        case 23:
          message.httpCodes.push(Trail_Codes.decode(reader, reader.uint32()));
          break;
        case 24:
          message.netCodes.push(Trail_Codes.decode(reader, reader.uint32()));
          break;
        case 25:
          message.timeIntervals.push(
            Trail_Intervals.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Trail {
    const message = { ...baseTrail } as Trail;
    message.overall =
      object.overall !== undefined && object.overall !== null
        ? Number(object.overall)
        : 0;
    message.caseId =
      object.caseId !== undefined && object.caseId !== null
        ? String(object.caseId)
        : "";
    message.time =
      object.time !== undefined && object.time !== null
        ? String(object.time)
        : "";
    message.reqps =
      object.reqps !== undefined && object.reqps !== null
        ? Number(object.reqps)
        : 0;
    message.resps =
      object.resps !== undefined && object.resps !== null
        ? Number(object.resps)
        : 0;
    message.expect =
      object.expect !== undefined && object.expect !== null
        ? Number(object.expect)
        : 0;
    message.input =
      object.input !== undefined && object.input !== null
        ? Number(object.input)
        : 0;
    message.output =
      object.output !== undefined && object.output !== null
        ? Number(object.output)
        : 0;
    message.connectTime =
      object.connectTime !== undefined && object.connectTime !== null
        ? Number(object.connectTime)
        : 0;
    message.sendTime =
      object.sendTime !== undefined && object.sendTime !== null
        ? Number(object.sendTime)
        : 0;
    message.latency =
      object.latency !== undefined && object.latency !== null
        ? Number(object.latency)
        : 0;
    message.receiveTime =
      object.receiveTime !== undefined && object.receiveTime !== null
        ? Number(object.receiveTime)
        : 0;
    message.threads =
      object.threads !== undefined && object.threads !== null
        ? Number(object.threads)
        : 0;
    message.q50 =
      object.q50 !== undefined && object.q50 !== null ? Number(object.q50) : 0;
    message.q75 =
      object.q75 !== undefined && object.q75 !== null ? Number(object.q75) : 0;
    message.q80 =
      object.q80 !== undefined && object.q80 !== null ? Number(object.q80) : 0;
    message.q85 =
      object.q85 !== undefined && object.q85 !== null ? Number(object.q85) : 0;
    message.q90 =
      object.q90 !== undefined && object.q90 !== null ? Number(object.q90) : 0;
    message.q95 =
      object.q95 !== undefined && object.q95 !== null ? Number(object.q95) : 0;
    message.q98 =
      object.q98 !== undefined && object.q98 !== null ? Number(object.q98) : 0;
    message.q99 =
      object.q99 !== undefined && object.q99 !== null ? Number(object.q99) : 0;
    message.q100 =
      object.q100 !== undefined && object.q100 !== null
        ? Number(object.q100)
        : 0;
    message.httpCodes = (object.httpCodes ?? []).map((e: any) =>
      Trail_Codes.fromJSON(e)
    );
    message.netCodes = (object.netCodes ?? []).map((e: any) =>
      Trail_Codes.fromJSON(e)
    );
    message.timeIntervals = (object.timeIntervals ?? []).map((e: any) =>
      Trail_Intervals.fromJSON(e)
    );
    return message;
  },

  toJSON(message: Trail): unknown {
    const obj: any = {};
    message.overall !== undefined &&
      (obj.overall = Math.round(message.overall));
    message.caseId !== undefined && (obj.caseId = message.caseId);
    message.time !== undefined && (obj.time = message.time);
    message.reqps !== undefined && (obj.reqps = Math.round(message.reqps));
    message.resps !== undefined && (obj.resps = Math.round(message.resps));
    message.expect !== undefined && (obj.expect = message.expect);
    message.input !== undefined && (obj.input = Math.round(message.input));
    message.output !== undefined && (obj.output = Math.round(message.output));
    message.connectTime !== undefined &&
      (obj.connectTime = message.connectTime);
    message.sendTime !== undefined && (obj.sendTime = message.sendTime);
    message.latency !== undefined && (obj.latency = message.latency);
    message.receiveTime !== undefined &&
      (obj.receiveTime = message.receiveTime);
    message.threads !== undefined &&
      (obj.threads = Math.round(message.threads));
    message.q50 !== undefined && (obj.q50 = message.q50);
    message.q75 !== undefined && (obj.q75 = message.q75);
    message.q80 !== undefined && (obj.q80 = message.q80);
    message.q85 !== undefined && (obj.q85 = message.q85);
    message.q90 !== undefined && (obj.q90 = message.q90);
    message.q95 !== undefined && (obj.q95 = message.q95);
    message.q98 !== undefined && (obj.q98 = message.q98);
    message.q99 !== undefined && (obj.q99 = message.q99);
    message.q100 !== undefined && (obj.q100 = message.q100);
    if (message.httpCodes) {
      obj.httpCodes = message.httpCodes.map((e) =>
        e ? Trail_Codes.toJSON(e) : undefined
      );
    } else {
      obj.httpCodes = [];
    }
    if (message.netCodes) {
      obj.netCodes = message.netCodes.map((e) =>
        e ? Trail_Codes.toJSON(e) : undefined
      );
    } else {
      obj.netCodes = [];
    }
    if (message.timeIntervals) {
      obj.timeIntervals = message.timeIntervals.map((e) =>
        e ? Trail_Intervals.toJSON(e) : undefined
      );
    } else {
      obj.timeIntervals = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Trail>, I>>(object: I): Trail {
    const message = { ...baseTrail } as Trail;
    message.overall = object.overall ?? 0;
    message.caseId = object.caseId ?? "";
    message.time = object.time ?? "";
    message.reqps = object.reqps ?? 0;
    message.resps = object.resps ?? 0;
    message.expect = object.expect ?? 0;
    message.input = object.input ?? 0;
    message.output = object.output ?? 0;
    message.connectTime = object.connectTime ?? 0;
    message.sendTime = object.sendTime ?? 0;
    message.latency = object.latency ?? 0;
    message.receiveTime = object.receiveTime ?? 0;
    message.threads = object.threads ?? 0;
    message.q50 = object.q50 ?? 0;
    message.q75 = object.q75 ?? 0;
    message.q80 = object.q80 ?? 0;
    message.q85 = object.q85 ?? 0;
    message.q90 = object.q90 ?? 0;
    message.q95 = object.q95 ?? 0;
    message.q98 = object.q98 ?? 0;
    message.q99 = object.q99 ?? 0;
    message.q100 = object.q100 ?? 0;
    message.httpCodes =
      object.httpCodes?.map((e) => Trail_Codes.fromPartial(e)) || [];
    message.netCodes =
      object.netCodes?.map((e) => Trail_Codes.fromPartial(e)) || [];
    message.timeIntervals =
      object.timeIntervals?.map((e) => Trail_Intervals.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Trail.$type, Trail);

const baseTrail_Codes: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.Trail.Codes",
  code: 0,
  count: 0,
};

export const Trail_Codes = {
  $type: "yandex.cloud.loadtesting.agent.v1.Trail.Codes" as const,

  encode(
    message: Trail_Codes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int64(message.code);
    }
    if (message.count !== 0) {
      writer.uint32(16).int64(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trail_Codes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTrail_Codes } as Trail_Codes;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.count = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Trail_Codes {
    const message = { ...baseTrail_Codes } as Trail_Codes;
    message.code =
      object.code !== undefined && object.code !== null
        ? Number(object.code)
        : 0;
    message.count =
      object.count !== undefined && object.count !== null
        ? Number(object.count)
        : 0;
    return message;
  },

  toJSON(message: Trail_Codes): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Trail_Codes>, I>>(
    object: I
  ): Trail_Codes {
    const message = { ...baseTrail_Codes } as Trail_Codes;
    message.code = object.code ?? 0;
    message.count = object.count ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Trail_Codes.$type, Trail_Codes);

const baseTrail_Intervals: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.Trail.Intervals",
  to: 0,
  count: 0,
};

export const Trail_Intervals = {
  $type: "yandex.cloud.loadtesting.agent.v1.Trail.Intervals" as const,

  encode(
    message: Trail_Intervals,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.to !== 0) {
      writer.uint32(9).double(message.to);
    }
    if (message.count !== 0) {
      writer.uint32(16).int64(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trail_Intervals {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTrail_Intervals } as Trail_Intervals;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.to = reader.double();
          break;
        case 2:
          message.count = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Trail_Intervals {
    const message = { ...baseTrail_Intervals } as Trail_Intervals;
    message.to =
      object.to !== undefined && object.to !== null ? Number(object.to) : 0;
    message.count =
      object.count !== undefined && object.count !== null
        ? Number(object.count)
        : 0;
    return message;
  },

  toJSON(message: Trail_Intervals): unknown {
    const obj: any = {};
    message.to !== undefined && (obj.to = message.to);
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Trail_Intervals>, I>>(
    object: I
  ): Trail_Intervals {
    const message = { ...baseTrail_Intervals } as Trail_Intervals;
    message.to = object.to ?? 0;
    message.count = object.count ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Trail_Intervals.$type, Trail_Intervals);

const baseCreateTrailResponse: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.CreateTrailResponse",
  trailId: "",
  code: 0,
};

export const CreateTrailResponse = {
  $type: "yandex.cloud.loadtesting.agent.v1.CreateTrailResponse" as const,

  encode(
    message: CreateTrailResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.trailId !== "") {
      writer.uint32(10).string(message.trailId);
    }
    if (message.code !== 0) {
      writer.uint32(16).int64(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTrailResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateTrailResponse } as CreateTrailResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trailId = reader.string();
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

  fromJSON(object: any): CreateTrailResponse {
    const message = { ...baseCreateTrailResponse } as CreateTrailResponse;
    message.trailId =
      object.trailId !== undefined && object.trailId !== null
        ? String(object.trailId)
        : "";
    message.code =
      object.code !== undefined && object.code !== null
        ? Number(object.code)
        : 0;
    return message;
  },

  toJSON(message: CreateTrailResponse): unknown {
    const obj: any = {};
    message.trailId !== undefined && (obj.trailId = message.trailId);
    message.code !== undefined && (obj.code = Math.round(message.code));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateTrailResponse>, I>>(
    object: I
  ): CreateTrailResponse {
    const message = { ...baseCreateTrailResponse } as CreateTrailResponse;
    message.trailId = object.trailId ?? "";
    message.code = object.code ?? 0;
    return message;
  },
};

messageTypeRegistry.set(CreateTrailResponse.$type, CreateTrailResponse);

export const TrailServiceService = {
  /** Creates trail for specified job. */
  create: {
    path: "/yandex.cloud.loadtesting.agent.v1.TrailService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateTrailRequest) =>
      Buffer.from(CreateTrailRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateTrailRequest.decode(value),
    responseSerialize: (value: CreateTrailResponse) =>
      Buffer.from(CreateTrailResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateTrailResponse.decode(value),
  },
} as const;

export interface TrailServiceServer extends UntypedServiceImplementation {
  /** Creates trail for specified job. */
  create: handleUnaryCall<CreateTrailRequest, CreateTrailResponse>;
}

export interface TrailServiceClient extends Client {
  /** Creates trail for specified job. */
  create(
    request: CreateTrailRequest,
    callback: (
      error: ServiceError | null,
      response: CreateTrailResponse
    ) => void
  ): ClientUnaryCall;
  create(
    request: CreateTrailRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: CreateTrailResponse
    ) => void
  ): ClientUnaryCall;
  create(
    request: CreateTrailRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: CreateTrailResponse
    ) => void
  ): ClientUnaryCall;
}

export const TrailServiceClient = makeGenericClientConstructor(
  TrailServiceService,
  "yandex.cloud.loadtesting.agent.v1.TrailService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): TrailServiceClient;
  service: typeof TrailServiceService;
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
