/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Int64Value, BoolValue } from "../../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.mdb.greenplum.v1";

export interface PXFConfig {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFConfig";
  /** Connection */
  connectionTimeout?: number;
  uploadTimeout?: number;
  /** Thread pool */
  maxThreads?: number;
  poolAllowCoreThreadTimeout?: boolean;
  poolCoreSize?: number;
  poolQueueCapacity?: number;
  poolMaxSize?: number;
  /** JVM */
  xmx?: number;
  xms?: number;
}

export interface PXFConfigSet {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFConfigSet";
  effectiveConfig?: PXFConfig;
  /** User-defined settings */
  userConfig?: PXFConfig;
  /** Default configuration */
  defaultConfig?: PXFConfig;
}

const basePXFConfig: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFConfig",
};

export const PXFConfig = {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFConfig" as const,

  encode(
    message: PXFConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connectionTimeout !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.connectionTimeout!,
        },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.uploadTimeout !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.uploadTimeout! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.maxThreads !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxThreads! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.poolAllowCoreThreadTimeout !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.poolAllowCoreThreadTimeout!,
        },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.poolCoreSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.poolCoreSize! },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.poolQueueCapacity !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.poolQueueCapacity!,
        },
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.poolMaxSize !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.poolMaxSize! },
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.xmx !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.xmx! },
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.xms !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.xms! },
        writer.uint32(74).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PXFConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePXFConfig } as PXFConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 2:
          message.uploadTimeout = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.maxThreads = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 4:
          message.poolAllowCoreThreadTimeout = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 5:
          message.poolCoreSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 6:
          message.poolQueueCapacity = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 7:
          message.poolMaxSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 8:
          message.xmx = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 9:
          message.xms = Int64Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PXFConfig {
    const message = { ...basePXFConfig } as PXFConfig;
    message.connectionTimeout =
      object.connectionTimeout !== undefined &&
      object.connectionTimeout !== null
        ? Number(object.connectionTimeout)
        : undefined;
    message.uploadTimeout =
      object.uploadTimeout !== undefined && object.uploadTimeout !== null
        ? Number(object.uploadTimeout)
        : undefined;
    message.maxThreads =
      object.maxThreads !== undefined && object.maxThreads !== null
        ? Number(object.maxThreads)
        : undefined;
    message.poolAllowCoreThreadTimeout =
      object.poolAllowCoreThreadTimeout !== undefined &&
      object.poolAllowCoreThreadTimeout !== null
        ? Boolean(object.poolAllowCoreThreadTimeout)
        : undefined;
    message.poolCoreSize =
      object.poolCoreSize !== undefined && object.poolCoreSize !== null
        ? Number(object.poolCoreSize)
        : undefined;
    message.poolQueueCapacity =
      object.poolQueueCapacity !== undefined &&
      object.poolQueueCapacity !== null
        ? Number(object.poolQueueCapacity)
        : undefined;
    message.poolMaxSize =
      object.poolMaxSize !== undefined && object.poolMaxSize !== null
        ? Number(object.poolMaxSize)
        : undefined;
    message.xmx =
      object.xmx !== undefined && object.xmx !== null
        ? Number(object.xmx)
        : undefined;
    message.xms =
      object.xms !== undefined && object.xms !== null
        ? Number(object.xms)
        : undefined;
    return message;
  },

  toJSON(message: PXFConfig): unknown {
    const obj: any = {};
    message.connectionTimeout !== undefined &&
      (obj.connectionTimeout = message.connectionTimeout);
    message.uploadTimeout !== undefined &&
      (obj.uploadTimeout = message.uploadTimeout);
    message.maxThreads !== undefined && (obj.maxThreads = message.maxThreads);
    message.poolAllowCoreThreadTimeout !== undefined &&
      (obj.poolAllowCoreThreadTimeout = message.poolAllowCoreThreadTimeout);
    message.poolCoreSize !== undefined &&
      (obj.poolCoreSize = message.poolCoreSize);
    message.poolQueueCapacity !== undefined &&
      (obj.poolQueueCapacity = message.poolQueueCapacity);
    message.poolMaxSize !== undefined &&
      (obj.poolMaxSize = message.poolMaxSize);
    message.xmx !== undefined && (obj.xmx = message.xmx);
    message.xms !== undefined && (obj.xms = message.xms);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PXFConfig>, I>>(
    object: I
  ): PXFConfig {
    const message = { ...basePXFConfig } as PXFConfig;
    message.connectionTimeout = object.connectionTimeout ?? undefined;
    message.uploadTimeout = object.uploadTimeout ?? undefined;
    message.maxThreads = object.maxThreads ?? undefined;
    message.poolAllowCoreThreadTimeout =
      object.poolAllowCoreThreadTimeout ?? undefined;
    message.poolCoreSize = object.poolCoreSize ?? undefined;
    message.poolQueueCapacity = object.poolQueueCapacity ?? undefined;
    message.poolMaxSize = object.poolMaxSize ?? undefined;
    message.xmx = object.xmx ?? undefined;
    message.xms = object.xms ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(PXFConfig.$type, PXFConfig);

const basePXFConfigSet: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFConfigSet",
};

export const PXFConfigSet = {
  $type: "yandex.cloud.mdb.greenplum.v1.PXFConfigSet" as const,

  encode(
    message: PXFConfigSet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      PXFConfig.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      PXFConfig.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      PXFConfig.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PXFConfigSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePXFConfigSet } as PXFConfigSet;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = PXFConfig.decode(reader, reader.uint32());
          break;
        case 2:
          message.userConfig = PXFConfig.decode(reader, reader.uint32());
          break;
        case 3:
          message.defaultConfig = PXFConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PXFConfigSet {
    const message = { ...basePXFConfigSet } as PXFConfigSet;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? PXFConfig.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? PXFConfig.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? PXFConfig.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: PXFConfigSet): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? PXFConfig.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? PXFConfig.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? PXFConfig.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PXFConfigSet>, I>>(
    object: I
  ): PXFConfigSet {
    const message = { ...basePXFConfigSet } as PXFConfigSet;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? PXFConfig.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? PXFConfig.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? PXFConfig.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(PXFConfigSet.$type, PXFConfigSet);

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
