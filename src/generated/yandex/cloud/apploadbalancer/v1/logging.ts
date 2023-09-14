/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Code, codeFromJSON, codeToJSON } from "../../../../google/rpc/code";
import { Int64Value } from "../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.apploadbalancer.v1";

export enum HttpCodeInterval {
  HTTP_CODE_INTERVAL_UNSPECIFIED = 0,
  HTTP_1XX = 1,
  HTTP_2XX = 2,
  HTTP_3XX = 3,
  HTTP_4XX = 4,
  HTTP_5XX = 5,
  HTTP_ALL = 6,
  UNRECOGNIZED = -1,
}

export function httpCodeIntervalFromJSON(object: any): HttpCodeInterval {
  switch (object) {
    case 0:
    case "HTTP_CODE_INTERVAL_UNSPECIFIED":
      return HttpCodeInterval.HTTP_CODE_INTERVAL_UNSPECIFIED;
    case 1:
    case "HTTP_1XX":
      return HttpCodeInterval.HTTP_1XX;
    case 2:
    case "HTTP_2XX":
      return HttpCodeInterval.HTTP_2XX;
    case 3:
    case "HTTP_3XX":
      return HttpCodeInterval.HTTP_3XX;
    case 4:
    case "HTTP_4XX":
      return HttpCodeInterval.HTTP_4XX;
    case 5:
    case "HTTP_5XX":
      return HttpCodeInterval.HTTP_5XX;
    case 6:
    case "HTTP_ALL":
      return HttpCodeInterval.HTTP_ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HttpCodeInterval.UNRECOGNIZED;
  }
}

export function httpCodeIntervalToJSON(object: HttpCodeInterval): string {
  switch (object) {
    case HttpCodeInterval.HTTP_CODE_INTERVAL_UNSPECIFIED:
      return "HTTP_CODE_INTERVAL_UNSPECIFIED";
    case HttpCodeInterval.HTTP_1XX:
      return "HTTP_1XX";
    case HttpCodeInterval.HTTP_2XX:
      return "HTTP_2XX";
    case HttpCodeInterval.HTTP_3XX:
      return "HTTP_3XX";
    case HttpCodeInterval.HTTP_4XX:
      return "HTTP_4XX";
    case HttpCodeInterval.HTTP_5XX:
      return "HTTP_5XX";
    case HttpCodeInterval.HTTP_ALL:
      return "HTTP_ALL";
    default:
      return "UNKNOWN";
  }
}

/**
 * LogDiscardRule discards a fraction of logs with certain codes.
 * If neither codes or intervals are provided, rule applies to all logs.
 */
export interface LogDiscardRule {
  $type: "yandex.cloud.apploadbalancer.v1.LogDiscardRule";
  /** HTTP codes that should be discarded. */
  httpCodes: number[];
  /** Groups of HTTP codes like 4xx that should be discarded. */
  httpCodeIntervals: HttpCodeInterval[];
  /** GRPC codes that should be discarded */
  grpcCodes: Code[];
  /** Percent of logs to be discarded: 0 - keep all, 100 or unset - discard all */
  discardPercent?: number;
}

export interface LogOptions {
  $type: "yandex.cloud.apploadbalancer.v1.LogOptions";
  /**
   * Cloud Logging log group ID to store access logs.
   * If not set then logs will be stored in default log group for the folder
   * where load balancer located.
   */
  logGroupId: string;
  /** ordered list of rules, first matching rule applies */
  discardRules: LogDiscardRule[];
  /** Do not send logs to Cloud Logging log group. */
  disable: boolean;
}

const baseLogDiscardRule: object = {
  $type: "yandex.cloud.apploadbalancer.v1.LogDiscardRule",
  httpCodes: 0,
  httpCodeIntervals: 0,
  grpcCodes: 0,
};

export const LogDiscardRule = {
  $type: "yandex.cloud.apploadbalancer.v1.LogDiscardRule" as const,

  encode(
    message: LogDiscardRule,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.httpCodes) {
      writer.int64(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.httpCodeIntervals) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.grpcCodes) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.discardPercent !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.discardPercent! },
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogDiscardRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLogDiscardRule } as LogDiscardRule;
    message.httpCodes = [];
    message.httpCodeIntervals = [];
    message.grpcCodes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.httpCodes.push(longToNumber(reader.int64() as Long));
            }
          } else {
            message.httpCodes.push(longToNumber(reader.int64() as Long));
          }
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.httpCodeIntervals.push(reader.int32() as any);
            }
          } else {
            message.httpCodeIntervals.push(reader.int32() as any);
          }
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.grpcCodes.push(reader.int32() as any);
            }
          } else {
            message.grpcCodes.push(reader.int32() as any);
          }
          break;
        case 4:
          message.discardPercent = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LogDiscardRule {
    const message = { ...baseLogDiscardRule } as LogDiscardRule;
    message.httpCodes = (object.httpCodes ?? []).map((e: any) => Number(e));
    message.httpCodeIntervals = (object.httpCodeIntervals ?? []).map((e: any) =>
      httpCodeIntervalFromJSON(e)
    );
    message.grpcCodes = (object.grpcCodes ?? []).map((e: any) =>
      codeFromJSON(e)
    );
    message.discardPercent =
      object.discardPercent !== undefined && object.discardPercent !== null
        ? Number(object.discardPercent)
        : undefined;
    return message;
  },

  toJSON(message: LogDiscardRule): unknown {
    const obj: any = {};
    if (message.httpCodes) {
      obj.httpCodes = message.httpCodes.map((e) => Math.round(e));
    } else {
      obj.httpCodes = [];
    }
    if (message.httpCodeIntervals) {
      obj.httpCodeIntervals = message.httpCodeIntervals.map((e) =>
        httpCodeIntervalToJSON(e)
      );
    } else {
      obj.httpCodeIntervals = [];
    }
    if (message.grpcCodes) {
      obj.grpcCodes = message.grpcCodes.map((e) => codeToJSON(e));
    } else {
      obj.grpcCodes = [];
    }
    message.discardPercent !== undefined &&
      (obj.discardPercent = message.discardPercent);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogDiscardRule>, I>>(
    object: I
  ): LogDiscardRule {
    const message = { ...baseLogDiscardRule } as LogDiscardRule;
    message.httpCodes = object.httpCodes?.map((e) => e) || [];
    message.httpCodeIntervals = object.httpCodeIntervals?.map((e) => e) || [];
    message.grpcCodes = object.grpcCodes?.map((e) => e) || [];
    message.discardPercent = object.discardPercent ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(LogDiscardRule.$type, LogDiscardRule);

const baseLogOptions: object = {
  $type: "yandex.cloud.apploadbalancer.v1.LogOptions",
  logGroupId: "",
  disable: false,
};

export const LogOptions = {
  $type: "yandex.cloud.apploadbalancer.v1.LogOptions" as const,

  encode(
    message: LogOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.logGroupId !== "") {
      writer.uint32(10).string(message.logGroupId);
    }
    for (const v of message.discardRules) {
      LogDiscardRule.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.disable === true) {
      writer.uint32(24).bool(message.disable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLogOptions } as LogOptions;
    message.discardRules = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.logGroupId = reader.string();
          break;
        case 2:
          message.discardRules.push(
            LogDiscardRule.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.disable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LogOptions {
    const message = { ...baseLogOptions } as LogOptions;
    message.logGroupId =
      object.logGroupId !== undefined && object.logGroupId !== null
        ? String(object.logGroupId)
        : "";
    message.discardRules = (object.discardRules ?? []).map((e: any) =>
      LogDiscardRule.fromJSON(e)
    );
    message.disable =
      object.disable !== undefined && object.disable !== null
        ? Boolean(object.disable)
        : false;
    return message;
  },

  toJSON(message: LogOptions): unknown {
    const obj: any = {};
    message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
    if (message.discardRules) {
      obj.discardRules = message.discardRules.map((e) =>
        e ? LogDiscardRule.toJSON(e) : undefined
      );
    } else {
      obj.discardRules = [];
    }
    message.disable !== undefined && (obj.disable = message.disable);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogOptions>, I>>(
    object: I
  ): LogOptions {
    const message = { ...baseLogOptions } as LogOptions;
    message.logGroupId = object.logGroupId ?? "";
    message.discardRules =
      object.discardRules?.map((e) => LogDiscardRule.fromPartial(e)) || [];
    message.disable = object.disable ?? false;
    return message;
  },
};

messageTypeRegistry.set(LogOptions.$type, LogOptions);

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
