/* eslint-disable */
import { messageTypeRegistry } from "../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.ai.common";

export interface ExpirationConfig {
  $type: "yandex.cloud.ai.common.ExpirationConfig";
  expirationPolicy: ExpirationConfig_ExpirationPolicy;
  ttlDays: number;
}

export enum ExpirationConfig_ExpirationPolicy {
  EXPIRATION_POLICY_UNSPECIFIED = 0,
  STATIC = 1,
  SINCE_LAST_ACTIVE = 2,
  UNRECOGNIZED = -1,
}

export function expirationConfig_ExpirationPolicyFromJSON(
  object: any
): ExpirationConfig_ExpirationPolicy {
  switch (object) {
    case 0:
    case "EXPIRATION_POLICY_UNSPECIFIED":
      return ExpirationConfig_ExpirationPolicy.EXPIRATION_POLICY_UNSPECIFIED;
    case 1:
    case "STATIC":
      return ExpirationConfig_ExpirationPolicy.STATIC;
    case 2:
    case "SINCE_LAST_ACTIVE":
      return ExpirationConfig_ExpirationPolicy.SINCE_LAST_ACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ExpirationConfig_ExpirationPolicy.UNRECOGNIZED;
  }
}

export function expirationConfig_ExpirationPolicyToJSON(
  object: ExpirationConfig_ExpirationPolicy
): string {
  switch (object) {
    case ExpirationConfig_ExpirationPolicy.EXPIRATION_POLICY_UNSPECIFIED:
      return "EXPIRATION_POLICY_UNSPECIFIED";
    case ExpirationConfig_ExpirationPolicy.STATIC:
      return "STATIC";
    case ExpirationConfig_ExpirationPolicy.SINCE_LAST_ACTIVE:
      return "SINCE_LAST_ACTIVE";
    default:
      return "UNKNOWN";
  }
}

export interface Error {
  $type: "yandex.cloud.ai.common.Error";
  code: number;
  message: string;
}

const baseExpirationConfig: object = {
  $type: "yandex.cloud.ai.common.ExpirationConfig",
  expirationPolicy: 0,
  ttlDays: 0,
};

export const ExpirationConfig = {
  $type: "yandex.cloud.ai.common.ExpirationConfig" as const,

  encode(
    message: ExpirationConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.expirationPolicy !== 0) {
      writer.uint32(8).int32(message.expirationPolicy);
    }
    if (message.ttlDays !== 0) {
      writer.uint32(16).int64(message.ttlDays);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExpirationConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExpirationConfig } as ExpirationConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expirationPolicy = reader.int32() as any;
          break;
        case 2:
          message.ttlDays = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExpirationConfig {
    const message = { ...baseExpirationConfig } as ExpirationConfig;
    message.expirationPolicy =
      object.expirationPolicy !== undefined && object.expirationPolicy !== null
        ? expirationConfig_ExpirationPolicyFromJSON(object.expirationPolicy)
        : 0;
    message.ttlDays =
      object.ttlDays !== undefined && object.ttlDays !== null
        ? Number(object.ttlDays)
        : 0;
    return message;
  },

  toJSON(message: ExpirationConfig): unknown {
    const obj: any = {};
    message.expirationPolicy !== undefined &&
      (obj.expirationPolicy = expirationConfig_ExpirationPolicyToJSON(
        message.expirationPolicy
      ));
    message.ttlDays !== undefined &&
      (obj.ttlDays = Math.round(message.ttlDays));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExpirationConfig>, I>>(
    object: I
  ): ExpirationConfig {
    const message = { ...baseExpirationConfig } as ExpirationConfig;
    message.expirationPolicy = object.expirationPolicy ?? 0;
    message.ttlDays = object.ttlDays ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ExpirationConfig.$type, ExpirationConfig);

const baseError: object = {
  $type: "yandex.cloud.ai.common.Error",
  code: 0,
  message: "",
};

export const Error = {
  $type: "yandex.cloud.ai.common.Error" as const,

  encode(message: Error, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int64(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Error {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseError } as Error;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Error {
    const message = { ...baseError } as Error;
    message.code =
      object.code !== undefined && object.code !== null
        ? Number(object.code)
        : 0;
    message.message =
      object.message !== undefined && object.message !== null
        ? String(object.message)
        : "";
    return message;
  },

  toJSON(message: Error): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Error>, I>>(object: I): Error {
    const message = { ...baseError } as Error;
    message.code = object.code ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

messageTypeRegistry.set(Error.$type, Error);

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
