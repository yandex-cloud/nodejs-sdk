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

export interface ClaimAgentStatusRequest {
  $type: "yandex.cloud.loadtesting.agent.v1.ClaimAgentStatusRequest";
  agentInstanceId: string;
  status: ClaimAgentStatusRequest_Status;
}

export enum ClaimAgentStatusRequest_Status {
  STATUS_UNSPECIFIED = 0,
  READY_FOR_TEST = 1,
  PREPARING_TEST = 2,
  TESTING = 3,
  TANK_FAILED = 4,
  STOPPED = 5,
  UPLOADING_ARTIFACTS = 6,
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
    default:
      return "UNKNOWN";
  }
}

export interface ClaimAgentStatusResponse {
  $type: "yandex.cloud.loadtesting.agent.v1.ClaimAgentStatusResponse";
  code: number;
}

const baseClaimAgentStatusRequest: object = {
  $type: "yandex.cloud.loadtesting.agent.v1.ClaimAgentStatusRequest",
  agentInstanceId: "",
  status: 0,
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
    return message;
  },

  toJSON(message: ClaimAgentStatusRequest): unknown {
    const obj: any = {};
    message.agentInstanceId !== undefined &&
      (obj.agentInstanceId = message.agentInstanceId);
    message.status !== undefined &&
      (obj.status = claimAgentStatusRequest_StatusToJSON(message.status));
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
} as const;

export interface AgentServiceServer extends UntypedServiceImplementation {
  /** Claims status for the specified agent. */
  claimStatus: handleUnaryCall<
    ClaimAgentStatusRequest,
    ClaimAgentStatusResponse
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
