/* eslint-disable */
import { messageTypeRegistry } from "../../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Int64Value } from "../../../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.mdb.redis.v1.config";

/**
 * Fields and structure of `RedisConfig` reflects Redis configuration file
 * parameters.
 */
export interface RedisConfig {
  $type: "yandex.cloud.mdb.redis.v1.config.RedisConfig";
  /**
   * Redis key eviction policy for a dataset that reaches maximum memory,
   * available to the host. Redis maxmemory setting depends on Managed
   * Service for Redis [host class](/docs/managed-redis/concepts/instance-types).
   *
   * All policies are described in detail in [Redis documentation](https://redis.io/topics/lru-cache).
   */
  maxmemoryPolicy: RedisConfig_MaxmemoryPolicy;
  /**
   * Time that Redis keeps the connection open while the client is idle.
   * If no new command is sent during that time, the connection is closed.
   */
  timeout?: number;
  /** Authentication password. */
  password: string;
  /** Number of database buckets on a single redis-server process. */
  databases?: number;
  /** Threshold for logging slow requests to server in microseconds (log only slower than it). */
  slowlogLogSlowerThan?: number;
  /** Max slow requests number to log. */
  slowlogMaxLen?: number;
  /** String setting for pub\sub functionality; subset of KEg$lshzxeAtm. */
  notifyKeyspaceEvents: string;
  /** Redis connection output buffers limits for pubsub operations. */
  clientOutputBufferLimitPubsub?: RedisConfig_ClientOutputBufferLimit;
  /** Redis connection output buffers limits for clients. */
  clientOutputBufferLimitNormal?: RedisConfig_ClientOutputBufferLimit;
  /** Redis maxmemory percent */
  maxmemoryPercent?: number;
}

export enum RedisConfig_MaxmemoryPolicy {
  MAXMEMORY_POLICY_UNSPECIFIED = 0,
  /** VOLATILE_LRU - Try to remove less recently used (LRU) keys with `expire set`. */
  VOLATILE_LRU = 1,
  /** ALLKEYS_LRU - Remove less recently used (LRU) keys. */
  ALLKEYS_LRU = 2,
  /** VOLATILE_LFU - Try to remove least frequently used (LFU) keys with `expire set`. */
  VOLATILE_LFU = 3,
  /** ALLKEYS_LFU - Remove least frequently used (LFU) keys. */
  ALLKEYS_LFU = 4,
  /** VOLATILE_RANDOM - Try to remove keys with `expire set` randomly. */
  VOLATILE_RANDOM = 5,
  /** ALLKEYS_RANDOM - Remove keys randomly. */
  ALLKEYS_RANDOM = 6,
  /**
   * VOLATILE_TTL - Try to remove less recently used (LRU) keys with `expire set`
   * and shorter TTL first.
   */
  VOLATILE_TTL = 7,
  /**
   * NOEVICTION - Return errors when memory limit was reached and commands could require
   * more memory to be used.
   */
  NOEVICTION = 8,
  UNRECOGNIZED = -1,
}

export function redisConfig_MaxmemoryPolicyFromJSON(
  object: any
): RedisConfig_MaxmemoryPolicy {
  switch (object) {
    case 0:
    case "MAXMEMORY_POLICY_UNSPECIFIED":
      return RedisConfig_MaxmemoryPolicy.MAXMEMORY_POLICY_UNSPECIFIED;
    case 1:
    case "VOLATILE_LRU":
      return RedisConfig_MaxmemoryPolicy.VOLATILE_LRU;
    case 2:
    case "ALLKEYS_LRU":
      return RedisConfig_MaxmemoryPolicy.ALLKEYS_LRU;
    case 3:
    case "VOLATILE_LFU":
      return RedisConfig_MaxmemoryPolicy.VOLATILE_LFU;
    case 4:
    case "ALLKEYS_LFU":
      return RedisConfig_MaxmemoryPolicy.ALLKEYS_LFU;
    case 5:
    case "VOLATILE_RANDOM":
      return RedisConfig_MaxmemoryPolicy.VOLATILE_RANDOM;
    case 6:
    case "ALLKEYS_RANDOM":
      return RedisConfig_MaxmemoryPolicy.ALLKEYS_RANDOM;
    case 7:
    case "VOLATILE_TTL":
      return RedisConfig_MaxmemoryPolicy.VOLATILE_TTL;
    case 8:
    case "NOEVICTION":
      return RedisConfig_MaxmemoryPolicy.NOEVICTION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RedisConfig_MaxmemoryPolicy.UNRECOGNIZED;
  }
}

export function redisConfig_MaxmemoryPolicyToJSON(
  object: RedisConfig_MaxmemoryPolicy
): string {
  switch (object) {
    case RedisConfig_MaxmemoryPolicy.MAXMEMORY_POLICY_UNSPECIFIED:
      return "MAXMEMORY_POLICY_UNSPECIFIED";
    case RedisConfig_MaxmemoryPolicy.VOLATILE_LRU:
      return "VOLATILE_LRU";
    case RedisConfig_MaxmemoryPolicy.ALLKEYS_LRU:
      return "ALLKEYS_LRU";
    case RedisConfig_MaxmemoryPolicy.VOLATILE_LFU:
      return "VOLATILE_LFU";
    case RedisConfig_MaxmemoryPolicy.ALLKEYS_LFU:
      return "ALLKEYS_LFU";
    case RedisConfig_MaxmemoryPolicy.VOLATILE_RANDOM:
      return "VOLATILE_RANDOM";
    case RedisConfig_MaxmemoryPolicy.ALLKEYS_RANDOM:
      return "ALLKEYS_RANDOM";
    case RedisConfig_MaxmemoryPolicy.VOLATILE_TTL:
      return "VOLATILE_TTL";
    case RedisConfig_MaxmemoryPolicy.NOEVICTION:
      return "NOEVICTION";
    default:
      return "UNKNOWN";
  }
}

export interface RedisConfig_ClientOutputBufferLimit {
  $type: "yandex.cloud.mdb.redis.v1.config.RedisConfig.ClientOutputBufferLimit";
  /** Total limit in bytes. */
  hardLimit?: number;
  /** Limit in bytes during certain time period. */
  softLimit?: number;
  /** Seconds for soft limit. */
  softSeconds?: number;
}

export interface RedisConfigSet {
  $type: "yandex.cloud.mdb.redis.v1.config.RedisConfigSet";
  /**
   * Effective settings for a Redis cluster (a combination of settings
   * defined in [user_config] and [default_config]).
   */
  effectiveConfig?: RedisConfig;
  /** User-defined settings for a Redis cluster. */
  userConfig?: RedisConfig;
  /** Default configuration for a Redis cluster. */
  defaultConfig?: RedisConfig;
}

const baseRedisConfig: object = {
  $type: "yandex.cloud.mdb.redis.v1.config.RedisConfig",
  maxmemoryPolicy: 0,
  password: "",
  notifyKeyspaceEvents: "",
};

export const RedisConfig = {
  $type: "yandex.cloud.mdb.redis.v1.config.RedisConfig" as const,

  encode(
    message: RedisConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maxmemoryPolicy !== 0) {
      writer.uint32(8).int32(message.maxmemoryPolicy);
    }
    if (message.timeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.timeout! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.password !== "") {
      writer.uint32(26).string(message.password);
    }
    if (message.databases !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.databases! },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.slowlogLogSlowerThan !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.slowlogLogSlowerThan!,
        },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.slowlogMaxLen !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.slowlogMaxLen! },
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.notifyKeyspaceEvents !== "") {
      writer.uint32(58).string(message.notifyKeyspaceEvents);
    }
    if (message.clientOutputBufferLimitPubsub !== undefined) {
      RedisConfig_ClientOutputBufferLimit.encode(
        message.clientOutputBufferLimitPubsub,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.clientOutputBufferLimitNormal !== undefined) {
      RedisConfig_ClientOutputBufferLimit.encode(
        message.clientOutputBufferLimitNormal,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.maxmemoryPercent !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxmemoryPercent!,
        },
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedisConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRedisConfig } as RedisConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxmemoryPolicy = reader.int32() as any;
          break;
        case 2:
          message.timeout = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 3:
          message.password = reader.string();
          break;
        case 4:
          message.databases = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 5:
          message.slowlogLogSlowerThan = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 6:
          message.slowlogMaxLen = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 7:
          message.notifyKeyspaceEvents = reader.string();
          break;
        case 8:
          message.clientOutputBufferLimitPubsub =
            RedisConfig_ClientOutputBufferLimit.decode(reader, reader.uint32());
          break;
        case 9:
          message.clientOutputBufferLimitNormal =
            RedisConfig_ClientOutputBufferLimit.decode(reader, reader.uint32());
          break;
        case 10:
          message.maxmemoryPercent = Int64Value.decode(
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

  fromJSON(object: any): RedisConfig {
    const message = { ...baseRedisConfig } as RedisConfig;
    message.maxmemoryPolicy =
      object.maxmemoryPolicy !== undefined && object.maxmemoryPolicy !== null
        ? redisConfig_MaxmemoryPolicyFromJSON(object.maxmemoryPolicy)
        : 0;
    message.timeout =
      object.timeout !== undefined && object.timeout !== null
        ? Number(object.timeout)
        : undefined;
    message.password =
      object.password !== undefined && object.password !== null
        ? String(object.password)
        : "";
    message.databases =
      object.databases !== undefined && object.databases !== null
        ? Number(object.databases)
        : undefined;
    message.slowlogLogSlowerThan =
      object.slowlogLogSlowerThan !== undefined &&
      object.slowlogLogSlowerThan !== null
        ? Number(object.slowlogLogSlowerThan)
        : undefined;
    message.slowlogMaxLen =
      object.slowlogMaxLen !== undefined && object.slowlogMaxLen !== null
        ? Number(object.slowlogMaxLen)
        : undefined;
    message.notifyKeyspaceEvents =
      object.notifyKeyspaceEvents !== undefined &&
      object.notifyKeyspaceEvents !== null
        ? String(object.notifyKeyspaceEvents)
        : "";
    message.clientOutputBufferLimitPubsub =
      object.clientOutputBufferLimitPubsub !== undefined &&
      object.clientOutputBufferLimitPubsub !== null
        ? RedisConfig_ClientOutputBufferLimit.fromJSON(
            object.clientOutputBufferLimitPubsub
          )
        : undefined;
    message.clientOutputBufferLimitNormal =
      object.clientOutputBufferLimitNormal !== undefined &&
      object.clientOutputBufferLimitNormal !== null
        ? RedisConfig_ClientOutputBufferLimit.fromJSON(
            object.clientOutputBufferLimitNormal
          )
        : undefined;
    message.maxmemoryPercent =
      object.maxmemoryPercent !== undefined && object.maxmemoryPercent !== null
        ? Number(object.maxmemoryPercent)
        : undefined;
    return message;
  },

  toJSON(message: RedisConfig): unknown {
    const obj: any = {};
    message.maxmemoryPolicy !== undefined &&
      (obj.maxmemoryPolicy = redisConfig_MaxmemoryPolicyToJSON(
        message.maxmemoryPolicy
      ));
    message.timeout !== undefined && (obj.timeout = message.timeout);
    message.password !== undefined && (obj.password = message.password);
    message.databases !== undefined && (obj.databases = message.databases);
    message.slowlogLogSlowerThan !== undefined &&
      (obj.slowlogLogSlowerThan = message.slowlogLogSlowerThan);
    message.slowlogMaxLen !== undefined &&
      (obj.slowlogMaxLen = message.slowlogMaxLen);
    message.notifyKeyspaceEvents !== undefined &&
      (obj.notifyKeyspaceEvents = message.notifyKeyspaceEvents);
    message.clientOutputBufferLimitPubsub !== undefined &&
      (obj.clientOutputBufferLimitPubsub = message.clientOutputBufferLimitPubsub
        ? RedisConfig_ClientOutputBufferLimit.toJSON(
            message.clientOutputBufferLimitPubsub
          )
        : undefined);
    message.clientOutputBufferLimitNormal !== undefined &&
      (obj.clientOutputBufferLimitNormal = message.clientOutputBufferLimitNormal
        ? RedisConfig_ClientOutputBufferLimit.toJSON(
            message.clientOutputBufferLimitNormal
          )
        : undefined);
    message.maxmemoryPercent !== undefined &&
      (obj.maxmemoryPercent = message.maxmemoryPercent);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RedisConfig>, I>>(
    object: I
  ): RedisConfig {
    const message = { ...baseRedisConfig } as RedisConfig;
    message.maxmemoryPolicy = object.maxmemoryPolicy ?? 0;
    message.timeout = object.timeout ?? undefined;
    message.password = object.password ?? "";
    message.databases = object.databases ?? undefined;
    message.slowlogLogSlowerThan = object.slowlogLogSlowerThan ?? undefined;
    message.slowlogMaxLen = object.slowlogMaxLen ?? undefined;
    message.notifyKeyspaceEvents = object.notifyKeyspaceEvents ?? "";
    message.clientOutputBufferLimitPubsub =
      object.clientOutputBufferLimitPubsub !== undefined &&
      object.clientOutputBufferLimitPubsub !== null
        ? RedisConfig_ClientOutputBufferLimit.fromPartial(
            object.clientOutputBufferLimitPubsub
          )
        : undefined;
    message.clientOutputBufferLimitNormal =
      object.clientOutputBufferLimitNormal !== undefined &&
      object.clientOutputBufferLimitNormal !== null
        ? RedisConfig_ClientOutputBufferLimit.fromPartial(
            object.clientOutputBufferLimitNormal
          )
        : undefined;
    message.maxmemoryPercent = object.maxmemoryPercent ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(RedisConfig.$type, RedisConfig);

const baseRedisConfig_ClientOutputBufferLimit: object = {
  $type: "yandex.cloud.mdb.redis.v1.config.RedisConfig.ClientOutputBufferLimit",
};

export const RedisConfig_ClientOutputBufferLimit = {
  $type:
    "yandex.cloud.mdb.redis.v1.config.RedisConfig.ClientOutputBufferLimit" as const,

  encode(
    message: RedisConfig_ClientOutputBufferLimit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hardLimit !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.hardLimit! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.softLimit !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.softLimit! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.softSeconds !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.softSeconds! },
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RedisConfig_ClientOutputBufferLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRedisConfig_ClientOutputBufferLimit,
    } as RedisConfig_ClientOutputBufferLimit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hardLimit = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 3:
          message.softLimit = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 5:
          message.softSeconds = Int64Value.decode(
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

  fromJSON(object: any): RedisConfig_ClientOutputBufferLimit {
    const message = {
      ...baseRedisConfig_ClientOutputBufferLimit,
    } as RedisConfig_ClientOutputBufferLimit;
    message.hardLimit =
      object.hardLimit !== undefined && object.hardLimit !== null
        ? Number(object.hardLimit)
        : undefined;
    message.softLimit =
      object.softLimit !== undefined && object.softLimit !== null
        ? Number(object.softLimit)
        : undefined;
    message.softSeconds =
      object.softSeconds !== undefined && object.softSeconds !== null
        ? Number(object.softSeconds)
        : undefined;
    return message;
  },

  toJSON(message: RedisConfig_ClientOutputBufferLimit): unknown {
    const obj: any = {};
    message.hardLimit !== undefined && (obj.hardLimit = message.hardLimit);
    message.softLimit !== undefined && (obj.softLimit = message.softLimit);
    message.softSeconds !== undefined &&
      (obj.softSeconds = message.softSeconds);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<RedisConfig_ClientOutputBufferLimit>, I>
  >(object: I): RedisConfig_ClientOutputBufferLimit {
    const message = {
      ...baseRedisConfig_ClientOutputBufferLimit,
    } as RedisConfig_ClientOutputBufferLimit;
    message.hardLimit = object.hardLimit ?? undefined;
    message.softLimit = object.softLimit ?? undefined;
    message.softSeconds = object.softSeconds ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  RedisConfig_ClientOutputBufferLimit.$type,
  RedisConfig_ClientOutputBufferLimit
);

const baseRedisConfigSet: object = {
  $type: "yandex.cloud.mdb.redis.v1.config.RedisConfigSet",
};

export const RedisConfigSet = {
  $type: "yandex.cloud.mdb.redis.v1.config.RedisConfigSet" as const,

  encode(
    message: RedisConfigSet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      RedisConfig.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      RedisConfig.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      RedisConfig.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedisConfigSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRedisConfigSet } as RedisConfigSet;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = RedisConfig.decode(reader, reader.uint32());
          break;
        case 2:
          message.userConfig = RedisConfig.decode(reader, reader.uint32());
          break;
        case 3:
          message.defaultConfig = RedisConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RedisConfigSet {
    const message = { ...baseRedisConfigSet } as RedisConfigSet;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? RedisConfig.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? RedisConfig.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? RedisConfig.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: RedisConfigSet): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? RedisConfig.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? RedisConfig.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? RedisConfig.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RedisConfigSet>, I>>(
    object: I
  ): RedisConfigSet {
    const message = { ...baseRedisConfigSet } as RedisConfigSet;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? RedisConfig.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? RedisConfig.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? RedisConfig.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(RedisConfigSet.$type, RedisConfigSet);

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
