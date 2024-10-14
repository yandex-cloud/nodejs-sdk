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
import { Timestamp } from "../../../../../google/protobuf/timestamp";

export const protobufPackage = "yandex.cloud.loadtesting.agent.v1";

export interface ClaimAgentStatusRequest {
  $type: "yandex.cloud.loadtesting.agent.v1.ClaimAgentStatusRequest";
  agentInstanceId: string;
  status: ClaimAgentStatusRequest_Status;
  statusMessage: string;
}

export enum ClaimAgentStatusRequest_Status {
  STATUS_UNSPECIFIED = 0,
  READY_FOR_TEST = 1,
  PREPARING_TEST = 2,
  TESTING = 3,
  TANK_FAILED = 4,
  STOPPED = 5,
  UPLOADING_ARTIFACTS = 6,
  ERROR = 7,
  UNRECOGNIZED = -1,
}

export function claimAgentStatusRequest_StatusFromJSON(
  object: any
): ClaimAgentStatusRequest_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return ClaimAgentStatusRequest_Status.STATUS_UNSPECIFIED;
    case 1:
    case "READY_FOR_TEST":
      return ClaimAgentStatusRequest_Status.READY_FOR_TEST;
    case 2:
    case "PREPARING_TEST":
      return ClaimAgentStatusRequest_Status.PREPARING_TEST;
    case 3:
    case "TESTING":
      return ClaimAgentStatusRequest_Status.TESTING;
    case 4:
    case "TANK_FAILED":
      return ClaimAgentStatusRequest_Status.TANK_FAILED;
    case 5:
    case "STOPPED":
      return ClaimAgentStatusRequest_Status.STOPPED;
    case 6:
    case "UPLOADING_ARTIFACTS":
      return ClaimAgentStatusRequest_Status.UPLOADING_ARTIFACTS;
    case 7:
    case "ERROR":
      return ClaimAgentStatusRequest_Status.ERROR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClaimAgentStatusRequest_Status.UNRECOGNIZED;
  }
}

export function claimAgentStatusRequest_StatusToJSON(
  object: ClaimAgentStatusRequest_Status
): string {
  switch (object) {
    case ClaimAgentStatusRequest_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case ClaimAgentStatusRequest_Status.READY_FOR_TEST:
      return "READY_FOR_TEST";
    case ClaimAgentStatusRequest_Status.PREPARING_TEST:
      return "PREPARING_TEST";
    case ClaimAgentStatusRequest_Status.TESTING:
      return "TESTING";
    case ClaimAgentStatusRequest_Status.TANK_FAILED:
      return "TANK_FAILED";
    case ClaimAgentStatusRequest_Status.STOPPED:
      return "STOPPED";
    case ClaimAgentStatusRequest_Status.UPLOADING_ARTIFACTS:
      return "UPLOADING_ARTIFACTS";
    case ClaimAgentStatusRequest_Status.ERROR:
      return "ERROR";
    default:
      return "UNKNOWN";
  }
}

export interface ClaimAgentStatusResponse {
  $type: "yandex.cloud.loadtesting.agent.v1.ClaimAgentStatusResponse";
  code: number;
}

export interface ReportEventLogsRequest {
  $type: "yandex.cloud.loadtesting.agent.v1.ReportEventLogsRequest";
  agentInstanceId: string;
  idempotencyKey: string;
  events: EventLog[];
}

export interface ReportEventLogsResponse {
  $type: "yandex.cloud.loadtesting.agent.v1.ReportEventLogsResponse";
}

export interface EventLog {
  $type: "yandex.cloud.loadtesting.agent.v1.EventLog";
  message: string;
  severity: EventLog_Severity;
  timestamp?: Date;
  metadata: { [key: string]: string };
}

export enum EventLog_Severity {
  SEVERITY_UNSPECIFIED = 0,
  DEBUG = 1,
  INFO = 2,
  WARNING = 3,
  ERROR = 4,
  FATAL = 5,
  UNRECOGNIZED = -1,
}

export function eventLog_SeverityFromJSON(object: any): EventLog_Severity {
  switch (object) {
    case 0:
    case "SEVERITY_UNSPECIFIED":
      return EventLog_Severity.SEVERITY_UNSPECIFIED;
    case 1:
    case "DEBUG":
      return EventLog_Severity.DEBUG;
    case 2:
    case "INFO":
      return EventLog_Severity.INFO;
    case 3:
    case "WARNING":
      return EventLog_Severity.WARNING;
    case 4:
    case "ERROR":
      return EventLog_Severity.ERROR;
    case 5:
    case "FATAL":
      return EventLog_Severity.FATAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EventLog_Severity.UNRECOGNIZED;
  }
}

export function eventLog_SeverityToJSON(object: EventLog_Severity): string {
  switch (object) {
    case EventLog_Severity.SEVERITY_UNSPECIFIED:
      return "SEVERITY_UNSPECIFIED";
    case EventLog_Severity.DEBUG:
      return "DEBUG";
    case EventLog_Severity.INFO:
      return "INFO";
    case EventLog_Severity.WARNING:
      return "WARNING";
    case EventLog_Severity.ERROR:
      return "ERROR";
    case EventLog_Severity.FATAL:
      return "FATAL";
    default:
      return "UNKNOWN";
  }
}

export interface EventLog_MetadataEntry {
  $type: "yandex.cloud.loadtesting.agent.v1.EventLog.MetadataEntry";
  key: string;
  value: string;
}

const baseClaimAgentStatusRequest: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.ClaimAgentStatusRequest",
  agentInstanceId: "",
  status: 0,
  statusMessage: "",
};

export const ClaimAgentStatusRequest = {
  $type: "yandex.cloud.loadtesting.agent.v1.ClaimAgentStatusRequest" as const,

  encode(
    message: ClaimAgentStatusRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.agentInstanceId !== "") {
      writer.uint32(10).string(message.agentInstanceId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.statusMessage !== "") {
      writer.uint32(26).string(message.statusMessage);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClaimAgentStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClaimAgentStatusRequest,
    } as ClaimAgentStatusRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agentInstanceId = reader.string();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.statusMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClaimAgentStatusRequest {
    const message = {
      ...baseClaimAgentStatusRequest,
    } as ClaimAgentStatusRequest;
    message.agentInstanceId =
      object.agentInstanceId !== undefined && object.agentInstanceId !== null
        ? String(object.agentInstanceId)
        : "";
    message.status =
      object.status !== undefined && object.status !== null
        ? claimAgentStatusRequest_StatusFromJSON(object.status)
        : 0;
    message.statusMessage =
      object.statusMessage !== undefined && object.statusMessage !== null
        ? String(object.statusMessage)
        : "";
    return message;
  },

  toJSON(message: ClaimAgentStatusRequest): unknown {
    const obj: any = {};
    message.agentInstanceId !== undefined &&
      (obj.agentInstanceId = message.agentInstanceId);
    message.status !== undefined &&
      (obj.status = claimAgentStatusRequest_StatusToJSON(message.status));
    message.statusMessage !== undefined &&
      (obj.statusMessage = message.statusMessage);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClaimAgentStatusRequest>, I>>(
    object: I
  ): ClaimAgentStatusRequest {
    const message = {
      ...baseClaimAgentStatusRequest,
    } as ClaimAgentStatusRequest;
    message.agentInstanceId = object.agentInstanceId ?? "";
    message.status = object.status ?? 0;
    message.statusMessage = object.statusMessage ?? "";
    return message;
  },
};

messageTypeRegistry.set(ClaimAgentStatusRequest.$type, ClaimAgentStatusRequest);

const baseClaimAgentStatusResponse: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.ClaimAgentStatusResponse",
  code: 0,
};

export const ClaimAgentStatusResponse = {
  $type: "yandex.cloud.loadtesting.agent.v1.ClaimAgentStatusResponse" as const,

  encode(
    message: ClaimAgentStatusResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int64(message.code);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClaimAgentStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClaimAgentStatusResponse,
    } as ClaimAgentStatusResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClaimAgentStatusResponse {
    const message = {
      ...baseClaimAgentStatusResponse,
    } as ClaimAgentStatusResponse;
    message.code =
      object.code !== undefined && object.code !== null
        ? Number(object.code)
        : 0;
    return message;
  },

  toJSON(message: ClaimAgentStatusResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClaimAgentStatusResponse>, I>>(
    object: I
  ): ClaimAgentStatusResponse {
    const message = {
      ...baseClaimAgentStatusResponse,
    } as ClaimAgentStatusResponse;
    message.code = object.code ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  ClaimAgentStatusResponse.$type,
  ClaimAgentStatusResponse
);

const baseReportEventLogsRequest: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.ReportEventLogsRequest",
  agentInstanceId: "",
  idempotencyKey: "",
};

export const ReportEventLogsRequest = {
  $type: "yandex.cloud.loadtesting.agent.v1.ReportEventLogsRequest" as const,

  encode(
    message: ReportEventLogsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.agentInstanceId !== "") {
      writer.uint32(10).string(message.agentInstanceId);
    }
    if (message.idempotencyKey !== "") {
      writer.uint32(18).string(message.idempotencyKey);
    }
    for (const v of message.events) {
      EventLog.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ReportEventLogsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReportEventLogsRequest } as ReportEventLogsRequest;
    message.events = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agentInstanceId = reader.string();
          break;
        case 2:
          message.idempotencyKey = reader.string();
          break;
        case 3:
          message.events.push(EventLog.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReportEventLogsRequest {
    const message = { ...baseReportEventLogsRequest } as ReportEventLogsRequest;
    message.agentInstanceId =
      object.agentInstanceId !== undefined && object.agentInstanceId !== null
        ? String(object.agentInstanceId)
        : "";
    message.idempotencyKey =
      object.idempotencyKey !== undefined && object.idempotencyKey !== null
        ? String(object.idempotencyKey)
        : "";
    message.events = (object.events ?? []).map((e: any) =>
      EventLog.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ReportEventLogsRequest): unknown {
    const obj: any = {};
    message.agentInstanceId !== undefined &&
      (obj.agentInstanceId = message.agentInstanceId);
    message.idempotencyKey !== undefined &&
      (obj.idempotencyKey = message.idempotencyKey);
    if (message.events) {
      obj.events = message.events.map((e) =>
        e ? EventLog.toJSON(e) : undefined
      );
    } else {
      obj.events = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReportEventLogsRequest>, I>>(
    object: I
  ): ReportEventLogsRequest {
    const message = { ...baseReportEventLogsRequest } as ReportEventLogsRequest;
    message.agentInstanceId = object.agentInstanceId ?? "";
    message.idempotencyKey = object.idempotencyKey ?? "";
    message.events = object.events?.map((e) => EventLog.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ReportEventLogsRequest.$type, ReportEventLogsRequest);

const baseReportEventLogsResponse: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.ReportEventLogsResponse",
};

export const ReportEventLogsResponse = {
  $type: "yandex.cloud.loadtesting.agent.v1.ReportEventLogsResponse" as const,

  encode(
    _: ReportEventLogsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ReportEventLogsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseReportEventLogsResponse,
    } as ReportEventLogsResponse;
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

  fromJSON(_: any): ReportEventLogsResponse {
    const message = {
      ...baseReportEventLogsResponse,
    } as ReportEventLogsResponse;
    return message;
  },

  toJSON(_: ReportEventLogsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReportEventLogsResponse>, I>>(
    _: I
  ): ReportEventLogsResponse {
    const message = {
      ...baseReportEventLogsResponse,
    } as ReportEventLogsResponse;
    return message;
  },
};

messageTypeRegistry.set(ReportEventLogsResponse.$type, ReportEventLogsResponse);

const baseEventLog: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.EventLog",
  message: "",
  severity: 0,
};

export const EventLog = {
  $type: "yandex.cloud.loadtesting.agent.v1.EventLog" as const,

  encode(
    message: EventLog,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.severity !== 0) {
      writer.uint32(16).int32(message.severity);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(26).fork()
      ).ldelim();
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      EventLog_MetadataEntry.encode(
        {
          $type: "yandex.cloud.loadtesting.agent.v1.EventLog.MetadataEntry",
          key: key as any,
          value,
        },
        writer.uint32(34).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventLog {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventLog } as EventLog;
    message.metadata = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.severity = reader.int32() as any;
          break;
        case 3:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          const entry4 = EventLog_MetadataEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.metadata[entry4.key] = entry4.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventLog {
    const message = { ...baseEventLog } as EventLog;
    message.message =
      object.message !== undefined && object.message !== null
        ? String(object.message)
        : "";
    message.severity =
      object.severity !== undefined && object.severity !== null
        ? eventLog_SeverityFromJSON(object.severity)
        : 0;
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? fromJsonTimestamp(object.timestamp)
        : undefined;
    message.metadata = Object.entries(object.metadata ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: EventLog): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.severity !== undefined &&
      (obj.severity = eventLog_SeverityToJSON(message.severity));
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventLog>, I>>(object: I): EventLog {
    const message = { ...baseEventLog } as EventLog;
    message.message = object.message ?? "";
    message.severity = object.severity ?? 0;
    message.timestamp = object.timestamp ?? undefined;
    message.metadata = Object.entries(object.metadata ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(EventLog.$type, EventLog);

const baseEventLog_MetadataEntry: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.EventLog.MetadataEntry",
  key: "",
  value: "",
};

export const EventLog_MetadataEntry = {
  $type: "yandex.cloud.loadtesting.agent.v1.EventLog.MetadataEntry" as const,

  encode(
    message: EventLog_MetadataEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventLog_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventLog_MetadataEntry } as EventLog_MetadataEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventLog_MetadataEntry {
    const message = { ...baseEventLog_MetadataEntry } as EventLog_MetadataEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: EventLog_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventLog_MetadataEntry>, I>>(
    object: I
  ): EventLog_MetadataEntry {
    const message = { ...baseEventLog_MetadataEntry } as EventLog_MetadataEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

messageTypeRegistry.set(EventLog_MetadataEntry.$type, EventLog_MetadataEntry);

export const AgentServiceService = {
  /** Claims status for the specified agent. */
  claimStatus: {
    path: "/yandex.cloud.loadtesting.agent.v1.AgentService/ClaimStatus",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ClaimAgentStatusRequest) =>
      Buffer.from(ClaimAgentStatusRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ClaimAgentStatusRequest.decode(value),
    responseSerialize: (value: ClaimAgentStatusResponse) =>
      Buffer.from(ClaimAgentStatusResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ClaimAgentStatusResponse.decode(value),
  },
  reportEventLogs: {
    path: "/yandex.cloud.loadtesting.agent.v1.AgentService/ReportEventLogs",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ReportEventLogsRequest) =>
      Buffer.from(ReportEventLogsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ReportEventLogsRequest.decode(value),
    responseSerialize: (value: ReportEventLogsResponse) =>
      Buffer.from(ReportEventLogsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ReportEventLogsResponse.decode(value),
  },
} as const;

export interface AgentServiceServer extends UntypedServiceImplementation {
  /** Claims status for the specified agent. */
  claimStatus: handleUnaryCall<
    ClaimAgentStatusRequest,
    ClaimAgentStatusResponse
  >;
  reportEventLogs: handleUnaryCall<
    ReportEventLogsRequest,
    ReportEventLogsResponse
  >;
}

export interface AgentServiceClient extends Client {
  /** Claims status for the specified agent. */
  claimStatus(
    request: ClaimAgentStatusRequest,
    callback: (
      error: ServiceError | null,
      response: ClaimAgentStatusResponse
    ) => void
  ): ClientUnaryCall;
  claimStatus(
    request: ClaimAgentStatusRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ClaimAgentStatusResponse
    ) => void
  ): ClientUnaryCall;
  claimStatus(
    request: ClaimAgentStatusRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ClaimAgentStatusResponse
    ) => void
  ): ClientUnaryCall;
  reportEventLogs(
    request: ReportEventLogsRequest,
    callback: (
      error: ServiceError | null,
      response: ReportEventLogsResponse
    ) => void
  ): ClientUnaryCall;
  reportEventLogs(
    request: ReportEventLogsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ReportEventLogsResponse
    ) => void
  ): ClientUnaryCall;
  reportEventLogs(
    request: ReportEventLogsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ReportEventLogsResponse
    ) => void
  ): ClientUnaryCall;
}

export const AgentServiceClient = makeGenericClientConstructor(
  AgentServiceService,
  "yandex.cloud.loadtesting.agent.v1.AgentService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): AgentServiceClient;
  service: typeof AgentServiceService;
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
