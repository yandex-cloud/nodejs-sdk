/* eslint-disable */
import { messageTypeRegistry } from "../../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  DoubleValue,
  Int64Value,
} from "../../../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.mdb.mongodb.v1.config";

/**
 * Configuration of a mongod daemon. Supported options are a limited subset of all
 * options described in [MongoDB documentation](https://docs.mongodb.com/v4.4/reference/configuration-options/).
 */
export interface Mongodconfig44 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4";
  /** `storage` section of mongod configuration. */
  storage?: Mongodconfig44_Storage;
  /** `operationProfiling` section of mongod configuration. */
  operationProfiling?: Mongodconfig44_OperationProfiling;
  /** `net` section of mongod configuration. */
  net?: Mongodconfig44_Network;
}

export interface Mongodconfig44_Storage {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage";
  /** Configuration of the WiredTiger storage engine. */
  wiredTiger?: Mongodconfig44_Storage_WiredTiger;
  /** Configuration of the MongoDB [journal](https://docs.mongodb.com/v4.4/reference/glossary/#term-journal). */
  journal?: Mongodconfig44_Storage_Journal;
}

/** Configuration of WiredTiger storage engine. */
export interface Mongodconfig44_Storage_WiredTiger {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage.WiredTiger";
  /** Engine configuration for WiredTiger. */
  engineConfig?: Mongodconfig44_Storage_WiredTiger_EngineConfig;
  /** Collection configuration for WiredTiger. */
  collectionConfig?: Mongodconfig44_Storage_WiredTiger_CollectionConfig;
}

export interface Mongodconfig44_Storage_WiredTiger_EngineConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage.WiredTiger.EngineConfig";
  /** The maximum size of the internal cache that WiredTiger will use for all data. */
  cacheSizeGb?: number;
}

export interface Mongodconfig44_Storage_WiredTiger_CollectionConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage.WiredTiger.CollectionConfig";
  /** Default type of compression to use for collection data. */
  blockCompressor: Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor;
}

export enum Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor {
  COMPRESSOR_UNSPECIFIED = 0,
  /** NONE - No compression. */
  NONE = 1,
  /** SNAPPY - The [Snappy](https://docs.mongodb.com/v4.4/reference/glossary/#term-snappy) compression. */
  SNAPPY = 2,
  /** ZLIB - The [zlib](https://docs.mongodb.com/v4.4/reference/glossary/#term-zlib) compression. */
  ZLIB = 3,
  /** ZSTD - The [zstd](https://docs.mongodb.com/v4.4/reference/glossary/#term-zstd) compression. */
  ZSTD = 4,
  UNRECOGNIZED = -1,
}

export function mongodconfig44_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
  object: any
): Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor {
  switch (object) {
    case 0:
    case "COMPRESSOR_UNSPECIFIED":
      return Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED;
    case 1:
    case "NONE":
      return Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor.NONE;
    case 2:
    case "SNAPPY":
      return Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY;
    case 3:
    case "ZLIB":
      return Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB;
    case 4:
    case "ZSTD":
      return Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED;
  }
}

export function mongodconfig44_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
  object: Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor
): string {
  switch (object) {
    case Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED:
      return "COMPRESSOR_UNSPECIFIED";
    case Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor.NONE:
      return "NONE";
    case Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY:
      return "SNAPPY";
    case Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB:
      return "ZLIB";
    case Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD:
      return "ZSTD";
    default:
      return "UNKNOWN";
  }
}

export interface Mongodconfig44_Storage_Journal {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage.Journal";
  /**
   * Commit interval between journal operations, in milliseconds.
   * Default: 100.
   */
  commitInterval?: number;
}

export interface Mongodconfig44_OperationProfiling {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.OperationProfiling";
  /** Mode which specifies operations that should be profiled. */
  mode: Mongodconfig44_OperationProfiling_Mode;
  /**
   * The slow operation time threshold, in milliseconds. Operations that run
   * for longer than this threshold are considered slow, and are processed by the profiler
   * running in the SLOW_OP mode.
   */
  slowOpThreshold?: number;
}

export enum Mongodconfig44_OperationProfiling_Mode {
  MODE_UNSPECIFIED = 0,
  /** OFF - The profiler is off and does not collect any data. */
  OFF = 1,
  /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
  SLOW_OP = 2,
  /** ALL - The profiler collects data for all operations. */
  ALL = 3,
  UNRECOGNIZED = -1,
}

export function mongodconfig44_OperationProfiling_ModeFromJSON(
  object: any
): Mongodconfig44_OperationProfiling_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return Mongodconfig44_OperationProfiling_Mode.MODE_UNSPECIFIED;
    case 1:
    case "OFF":
      return Mongodconfig44_OperationProfiling_Mode.OFF;
    case 2:
    case "SLOW_OP":
      return Mongodconfig44_OperationProfiling_Mode.SLOW_OP;
    case 3:
    case "ALL":
      return Mongodconfig44_OperationProfiling_Mode.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mongodconfig44_OperationProfiling_Mode.UNRECOGNIZED;
  }
}

export function mongodconfig44_OperationProfiling_ModeToJSON(
  object: Mongodconfig44_OperationProfiling_Mode
): string {
  switch (object) {
    case Mongodconfig44_OperationProfiling_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case Mongodconfig44_OperationProfiling_Mode.OFF:
      return "OFF";
    case Mongodconfig44_OperationProfiling_Mode.SLOW_OP:
      return "SLOW_OP";
    case Mongodconfig44_OperationProfiling_Mode.ALL:
      return "ALL";
    default:
      return "UNKNOWN";
  }
}

export interface Mongodconfig44_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Network";
  /** The maximum number of simultaneous connections that mongod will accept. */
  maxIncomingConnections?: number;
}

export interface Mongocfgconfig44 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4";
  /** `storage` section of mongocfg configuration. */
  storage?: Mongocfgconfig44_Storage;
  /** `operationProfiling` section of mongocfg configuration. */
  operationProfiling?: Mongocfgconfig44_OperationProfiling;
  /** `net` section of mongocfg configuration. */
  net?: Mongocfgconfig44_Network;
}

export interface Mongocfgconfig44_Storage {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.Storage";
  /** Configuration of the WiredTiger storage engine. */
  wiredTiger?: Mongocfgconfig44_Storage_WiredTiger;
}

/** Configuration of WiredTiger storage engine. */
export interface Mongocfgconfig44_Storage_WiredTiger {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.Storage.WiredTiger";
  /** Engine configuration for WiredTiger. */
  engineConfig?: Mongocfgconfig44_Storage_WiredTiger_EngineConfig;
}

export interface Mongocfgconfig44_Storage_WiredTiger_EngineConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.Storage.WiredTiger.EngineConfig";
  /** The maximum size of the internal cache that WiredTiger will use for all data. */
  cacheSizeGb?: number;
}

export interface Mongocfgconfig44_OperationProfiling {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.OperationProfiling";
  /** Mode which specifies operations that should be profiled. */
  mode: Mongocfgconfig44_OperationProfiling_Mode;
  /**
   * The slow operation time threshold, in milliseconds. Operations that run
   * for longer than this threshold are considered slow, and are processed by the profiler
   * running in the SLOW_OP mode. For details see [MongoDB documentation](https://docs.mongodb.com/v4.4/reference/configuration-options/#operationProfiling.slowOpThresholdMs).
   */
  slowOpThreshold?: number;
}

export enum Mongocfgconfig44_OperationProfiling_Mode {
  MODE_UNSPECIFIED = 0,
  /** OFF - The profiler is off and does not collect any data. */
  OFF = 1,
  /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
  SLOW_OP = 2,
  /** ALL - The profiler collects data for all operations. */
  ALL = 3,
  UNRECOGNIZED = -1,
}

export function mongocfgconfig44_OperationProfiling_ModeFromJSON(
  object: any
): Mongocfgconfig44_OperationProfiling_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return Mongocfgconfig44_OperationProfiling_Mode.MODE_UNSPECIFIED;
    case 1:
    case "OFF":
      return Mongocfgconfig44_OperationProfiling_Mode.OFF;
    case 2:
    case "SLOW_OP":
      return Mongocfgconfig44_OperationProfiling_Mode.SLOW_OP;
    case 3:
    case "ALL":
      return Mongocfgconfig44_OperationProfiling_Mode.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mongocfgconfig44_OperationProfiling_Mode.UNRECOGNIZED;
  }
}

export function mongocfgconfig44_OperationProfiling_ModeToJSON(
  object: Mongocfgconfig44_OperationProfiling_Mode
): string {
  switch (object) {
    case Mongocfgconfig44_OperationProfiling_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case Mongocfgconfig44_OperationProfiling_Mode.OFF:
      return "OFF";
    case Mongocfgconfig44_OperationProfiling_Mode.SLOW_OP:
      return "SLOW_OP";
    case Mongocfgconfig44_OperationProfiling_Mode.ALL:
      return "ALL";
    default:
      return "UNKNOWN";
  }
}

export interface Mongocfgconfig44_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.Network";
  /** The maximum number of simultaneous connections that mongocfg will accept. */
  maxIncomingConnections?: number;
}

export interface Mongosconfig44 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4";
  /** Network settings for mongos. */
  net?: Mongosconfig44_Network;
}

export interface Mongosconfig44_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4.Network";
  /** The maximum number of simultaneous connections that mongos will accept. */
  maxIncomingConnections?: number;
}

export interface Mongodconfigset44 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_4";
  /**
   * Effective mongod settings for a MongoDB 4.4 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?: Mongodconfig44;
  /** User-defined mongod settings for a MongoDB 4.4 cluster. */
  userConfig?: Mongodconfig44;
  /** Default mongod configuration for a MongoDB 4.4 cluster. */
  defaultConfig?: Mongodconfig44;
}

export interface Mongocfgconfigset44 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_4";
  /**
   * Effective mongocfg settings for a MongoDB 4.4 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?: Mongocfgconfig44;
  /** User-defined mongocfg settings for a MongoDB 4.4 cluster. */
  userConfig?: Mongocfgconfig44;
  /** Default mongocfg configuration for a MongoDB 4.4 cluster. */
  defaultConfig?: Mongocfgconfig44;
}

export interface Mongosconfigset44 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_4";
  /**
   * Effective mongos settings for a MongoDB 4.4 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?: Mongosconfig44;
  /** User-defined mongos settings for a MongoDB 4.4 cluster. */
  userConfig?: Mongosconfig44;
  /** Default mongos configuration for a MongoDB 4.4 cluster. */
  defaultConfig?: Mongosconfig44;
}

const baseMongodconfig44: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4",
};

export const Mongodconfig44 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4" as const,

  encode(
    message: Mongodconfig44,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.storage !== undefined) {
      Mongodconfig44_Storage.encode(
        message.storage,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.operationProfiling !== undefined) {
      Mongodconfig44_OperationProfiling.encode(
        message.operationProfiling,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.net !== undefined) {
      Mongodconfig44_Network.encode(
        message.net,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig44 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodconfig44 } as Mongodconfig44;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storage = Mongodconfig44_Storage.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.operationProfiling = Mongodconfig44_OperationProfiling.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.net = Mongodconfig44_Network.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Mongodconfig44 {
    const message = { ...baseMongodconfig44 } as Mongodconfig44;
    message.storage =
      object.storage !== undefined && object.storage !== null
        ? Mongodconfig44_Storage.fromJSON(object.storage)
        : undefined;
    message.operationProfiling =
      object.operationProfiling !== undefined &&
      object.operationProfiling !== null
        ? Mongodconfig44_OperationProfiling.fromJSON(object.operationProfiling)
        : undefined;
    message.net =
      object.net !== undefined && object.net !== null
        ? Mongodconfig44_Network.fromJSON(object.net)
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfig44): unknown {
    const obj: any = {};
    message.storage !== undefined &&
      (obj.storage = message.storage
        ? Mongodconfig44_Storage.toJSON(message.storage)
        : undefined);
    message.operationProfiling !== undefined &&
      (obj.operationProfiling = message.operationProfiling
        ? Mongodconfig44_OperationProfiling.toJSON(message.operationProfiling)
        : undefined);
    message.net !== undefined &&
      (obj.net = message.net
        ? Mongodconfig44_Network.toJSON(message.net)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodconfig44>, I>>(
    object: I
  ): Mongodconfig44 {
    const message = { ...baseMongodconfig44 } as Mongodconfig44;
    message.storage =
      object.storage !== undefined && object.storage !== null
        ? Mongodconfig44_Storage.fromPartial(object.storage)
        : undefined;
    message.operationProfiling =
      object.operationProfiling !== undefined &&
      object.operationProfiling !== null
        ? Mongodconfig44_OperationProfiling.fromPartial(
            object.operationProfiling
          )
        : undefined;
    message.net =
      object.net !== undefined && object.net !== null
        ? Mongodconfig44_Network.fromPartial(object.net)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodconfig44.$type, Mongodconfig44);

const baseMongodconfig44_Storage: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage",
};

export const Mongodconfig44_Storage = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage" as const,

  encode(
    message: Mongodconfig44_Storage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.wiredTiger !== undefined) {
      Mongodconfig44_Storage_WiredTiger.encode(
        message.wiredTiger,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.journal !== undefined) {
      Mongodconfig44_Storage_Journal.encode(
        message.journal,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongodconfig44_Storage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodconfig44_Storage } as Mongodconfig44_Storage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wiredTiger = Mongodconfig44_Storage_WiredTiger.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.journal = Mongodconfig44_Storage_Journal.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Mongodconfig44_Storage {
    const message = { ...baseMongodconfig44_Storage } as Mongodconfig44_Storage;
    message.wiredTiger =
      object.wiredTiger !== undefined && object.wiredTiger !== null
        ? Mongodconfig44_Storage_WiredTiger.fromJSON(object.wiredTiger)
        : undefined;
    message.journal =
      object.journal !== undefined && object.journal !== null
        ? Mongodconfig44_Storage_Journal.fromJSON(object.journal)
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfig44_Storage): unknown {
    const obj: any = {};
    message.wiredTiger !== undefined &&
      (obj.wiredTiger = message.wiredTiger
        ? Mongodconfig44_Storage_WiredTiger.toJSON(message.wiredTiger)
        : undefined);
    message.journal !== undefined &&
      (obj.journal = message.journal
        ? Mongodconfig44_Storage_Journal.toJSON(message.journal)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodconfig44_Storage>, I>>(
    object: I
  ): Mongodconfig44_Storage {
    const message = { ...baseMongodconfig44_Storage } as Mongodconfig44_Storage;
    message.wiredTiger =
      object.wiredTiger !== undefined && object.wiredTiger !== null
        ? Mongodconfig44_Storage_WiredTiger.fromPartial(object.wiredTiger)
        : undefined;
    message.journal =
      object.journal !== undefined && object.journal !== null
        ? Mongodconfig44_Storage_Journal.fromPartial(object.journal)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodconfig44_Storage.$type, Mongodconfig44_Storage);

const baseMongodconfig44_Storage_WiredTiger: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage.WiredTiger",
};

export const Mongodconfig44_Storage_WiredTiger = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage.WiredTiger" as const,

  encode(
    message: Mongodconfig44_Storage_WiredTiger,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.engineConfig !== undefined) {
      Mongodconfig44_Storage_WiredTiger_EngineConfig.encode(
        message.engineConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.collectionConfig !== undefined) {
      Mongodconfig44_Storage_WiredTiger_CollectionConfig.encode(
        message.collectionConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongodconfig44_Storage_WiredTiger {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfig44_Storage_WiredTiger,
    } as Mongodconfig44_Storage_WiredTiger;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.engineConfig =
            Mongodconfig44_Storage_WiredTiger_EngineConfig.decode(
              reader,
              reader.uint32()
            );
          break;
        case 2:
          message.collectionConfig =
            Mongodconfig44_Storage_WiredTiger_CollectionConfig.decode(
              reader,
              reader.uint32()
            );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Mongodconfig44_Storage_WiredTiger {
    const message = {
      ...baseMongodconfig44_Storage_WiredTiger,
    } as Mongodconfig44_Storage_WiredTiger;
    message.engineConfig =
      object.engineConfig !== undefined && object.engineConfig !== null
        ? Mongodconfig44_Storage_WiredTiger_EngineConfig.fromJSON(
            object.engineConfig
          )
        : undefined;
    message.collectionConfig =
      object.collectionConfig !== undefined && object.collectionConfig !== null
        ? Mongodconfig44_Storage_WiredTiger_CollectionConfig.fromJSON(
            object.collectionConfig
          )
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfig44_Storage_WiredTiger): unknown {
    const obj: any = {};
    message.engineConfig !== undefined &&
      (obj.engineConfig = message.engineConfig
        ? Mongodconfig44_Storage_WiredTiger_EngineConfig.toJSON(
            message.engineConfig
          )
        : undefined);
    message.collectionConfig !== undefined &&
      (obj.collectionConfig = message.collectionConfig
        ? Mongodconfig44_Storage_WiredTiger_CollectionConfig.toJSON(
            message.collectionConfig
          )
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Mongodconfig44_Storage_WiredTiger>, I>
  >(object: I): Mongodconfig44_Storage_WiredTiger {
    const message = {
      ...baseMongodconfig44_Storage_WiredTiger,
    } as Mongodconfig44_Storage_WiredTiger;
    message.engineConfig =
      object.engineConfig !== undefined && object.engineConfig !== null
        ? Mongodconfig44_Storage_WiredTiger_EngineConfig.fromPartial(
            object.engineConfig
          )
        : undefined;
    message.collectionConfig =
      object.collectionConfig !== undefined && object.collectionConfig !== null
        ? Mongodconfig44_Storage_WiredTiger_CollectionConfig.fromPartial(
            object.collectionConfig
          )
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfig44_Storage_WiredTiger.$type,
  Mongodconfig44_Storage_WiredTiger
);

const baseMongodconfig44_Storage_WiredTiger_EngineConfig: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage.WiredTiger.EngineConfig",
};

export const Mongodconfig44_Storage_WiredTiger_EngineConfig = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage.WiredTiger.EngineConfig" as const,

  encode(
    message: Mongodconfig44_Storage_WiredTiger_EngineConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cacheSizeGb !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.cacheSizeGb! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongodconfig44_Storage_WiredTiger_EngineConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfig44_Storage_WiredTiger_EngineConfig,
    } as Mongodconfig44_Storage_WiredTiger_EngineConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cacheSizeGb = DoubleValue.decode(
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

  fromJSON(object: any): Mongodconfig44_Storage_WiredTiger_EngineConfig {
    const message = {
      ...baseMongodconfig44_Storage_WiredTiger_EngineConfig,
    } as Mongodconfig44_Storage_WiredTiger_EngineConfig;
    message.cacheSizeGb =
      object.cacheSizeGb !== undefined && object.cacheSizeGb !== null
        ? Number(object.cacheSizeGb)
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfig44_Storage_WiredTiger_EngineConfig): unknown {
    const obj: any = {};
    message.cacheSizeGb !== undefined &&
      (obj.cacheSizeGb = message.cacheSizeGb);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<Mongodconfig44_Storage_WiredTiger_EngineConfig>,
      I
    >
  >(object: I): Mongodconfig44_Storage_WiredTiger_EngineConfig {
    const message = {
      ...baseMongodconfig44_Storage_WiredTiger_EngineConfig,
    } as Mongodconfig44_Storage_WiredTiger_EngineConfig;
    message.cacheSizeGb = object.cacheSizeGb ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfig44_Storage_WiredTiger_EngineConfig.$type,
  Mongodconfig44_Storage_WiredTiger_EngineConfig
);

const baseMongodconfig44_Storage_WiredTiger_CollectionConfig: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage.WiredTiger.CollectionConfig",
  blockCompressor: 0,
};

export const Mongodconfig44_Storage_WiredTiger_CollectionConfig = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage.WiredTiger.CollectionConfig" as const,

  encode(
    message: Mongodconfig44_Storage_WiredTiger_CollectionConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.blockCompressor !== 0) {
      writer.uint32(8).int32(message.blockCompressor);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongodconfig44_Storage_WiredTiger_CollectionConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfig44_Storage_WiredTiger_CollectionConfig,
    } as Mongodconfig44_Storage_WiredTiger_CollectionConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockCompressor = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Mongodconfig44_Storage_WiredTiger_CollectionConfig {
    const message = {
      ...baseMongodconfig44_Storage_WiredTiger_CollectionConfig,
    } as Mongodconfig44_Storage_WiredTiger_CollectionConfig;
    message.blockCompressor =
      object.blockCompressor !== undefined && object.blockCompressor !== null
        ? mongodconfig44_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
            object.blockCompressor
          )
        : 0;
    return message;
  },

  toJSON(message: Mongodconfig44_Storage_WiredTiger_CollectionConfig): unknown {
    const obj: any = {};
    message.blockCompressor !== undefined &&
      (obj.blockCompressor =
        mongodconfig44_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
          message.blockCompressor
        ));
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<Mongodconfig44_Storage_WiredTiger_CollectionConfig>,
      I
    >
  >(object: I): Mongodconfig44_Storage_WiredTiger_CollectionConfig {
    const message = {
      ...baseMongodconfig44_Storage_WiredTiger_CollectionConfig,
    } as Mongodconfig44_Storage_WiredTiger_CollectionConfig;
    message.blockCompressor = object.blockCompressor ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfig44_Storage_WiredTiger_CollectionConfig.$type,
  Mongodconfig44_Storage_WiredTiger_CollectionConfig
);

const baseMongodconfig44_Storage_Journal: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage.Journal",
};

export const Mongodconfig44_Storage_Journal = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Storage.Journal" as const,

  encode(
    message: Mongodconfig44_Storage_Journal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.commitInterval !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.commitInterval! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongodconfig44_Storage_Journal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfig44_Storage_Journal,
    } as Mongodconfig44_Storage_Journal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitInterval = Int64Value.decode(
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

  fromJSON(object: any): Mongodconfig44_Storage_Journal {
    const message = {
      ...baseMongodconfig44_Storage_Journal,
    } as Mongodconfig44_Storage_Journal;
    message.commitInterval =
      object.commitInterval !== undefined && object.commitInterval !== null
        ? Number(object.commitInterval)
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfig44_Storage_Journal): unknown {
    const obj: any = {};
    message.commitInterval !== undefined &&
      (obj.commitInterval = message.commitInterval);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodconfig44_Storage_Journal>, I>>(
    object: I
  ): Mongodconfig44_Storage_Journal {
    const message = {
      ...baseMongodconfig44_Storage_Journal,
    } as Mongodconfig44_Storage_Journal;
    message.commitInterval = object.commitInterval ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfig44_Storage_Journal.$type,
  Mongodconfig44_Storage_Journal
);

const baseMongodconfig44_OperationProfiling: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.OperationProfiling",
  mode: 0,
};

export const Mongodconfig44_OperationProfiling = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.OperationProfiling" as const,

  encode(
    message: Mongodconfig44_OperationProfiling,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    if (message.slowOpThreshold !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.slowOpThreshold!,
        },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongodconfig44_OperationProfiling {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfig44_OperationProfiling,
    } as Mongodconfig44_OperationProfiling;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mode = reader.int32() as any;
          break;
        case 2:
          message.slowOpThreshold = Int64Value.decode(
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

  fromJSON(object: any): Mongodconfig44_OperationProfiling {
    const message = {
      ...baseMongodconfig44_OperationProfiling,
    } as Mongodconfig44_OperationProfiling;
    message.mode =
      object.mode !== undefined && object.mode !== null
        ? mongodconfig44_OperationProfiling_ModeFromJSON(object.mode)
        : 0;
    message.slowOpThreshold =
      object.slowOpThreshold !== undefined && object.slowOpThreshold !== null
        ? Number(object.slowOpThreshold)
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfig44_OperationProfiling): unknown {
    const obj: any = {};
    message.mode !== undefined &&
      (obj.mode = mongodconfig44_OperationProfiling_ModeToJSON(message.mode));
    message.slowOpThreshold !== undefined &&
      (obj.slowOpThreshold = message.slowOpThreshold);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Mongodconfig44_OperationProfiling>, I>
  >(object: I): Mongodconfig44_OperationProfiling {
    const message = {
      ...baseMongodconfig44_OperationProfiling,
    } as Mongodconfig44_OperationProfiling;
    message.mode = object.mode ?? 0;
    message.slowOpThreshold = object.slowOpThreshold ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfig44_OperationProfiling.$type,
  Mongodconfig44_OperationProfiling
);

const baseMongodconfig44_Network: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Network",
};

export const Mongodconfig44_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4.Network" as const,

  encode(
    message: Mongodconfig44_Network,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maxIncomingConnections !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxIncomingConnections!,
        },
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongodconfig44_Network {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodconfig44_Network } as Mongodconfig44_Network;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxIncomingConnections = Int64Value.decode(
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

  fromJSON(object: any): Mongodconfig44_Network {
    const message = { ...baseMongodconfig44_Network } as Mongodconfig44_Network;
    message.maxIncomingConnections =
      object.maxIncomingConnections !== undefined &&
      object.maxIncomingConnections !== null
        ? Number(object.maxIncomingConnections)
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfig44_Network): unknown {
    const obj: any = {};
    message.maxIncomingConnections !== undefined &&
      (obj.maxIncomingConnections = message.maxIncomingConnections);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodconfig44_Network>, I>>(
    object: I
  ): Mongodconfig44_Network {
    const message = { ...baseMongodconfig44_Network } as Mongodconfig44_Network;
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodconfig44_Network.$type, Mongodconfig44_Network);

const baseMongocfgconfig44: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4",
};

export const Mongocfgconfig44 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4" as const,

  encode(
    message: Mongocfgconfig44,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.storage !== undefined) {
      Mongocfgconfig44_Storage.encode(
        message.storage,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.operationProfiling !== undefined) {
      Mongocfgconfig44_OperationProfiling.encode(
        message.operationProfiling,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.net !== undefined) {
      Mongocfgconfig44_Network.encode(
        message.net,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfig44 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongocfgconfig44 } as Mongocfgconfig44;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storage = Mongocfgconfig44_Storage.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.operationProfiling =
            Mongocfgconfig44_OperationProfiling.decode(reader, reader.uint32());
          break;
        case 3:
          message.net = Mongocfgconfig44_Network.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Mongocfgconfig44 {
    const message = { ...baseMongocfgconfig44 } as Mongocfgconfig44;
    message.storage =
      object.storage !== undefined && object.storage !== null
        ? Mongocfgconfig44_Storage.fromJSON(object.storage)
        : undefined;
    message.operationProfiling =
      object.operationProfiling !== undefined &&
      object.operationProfiling !== null
        ? Mongocfgconfig44_OperationProfiling.fromJSON(
            object.operationProfiling
          )
        : undefined;
    message.net =
      object.net !== undefined && object.net !== null
        ? Mongocfgconfig44_Network.fromJSON(object.net)
        : undefined;
    return message;
  },

  toJSON(message: Mongocfgconfig44): unknown {
    const obj: any = {};
    message.storage !== undefined &&
      (obj.storage = message.storage
        ? Mongocfgconfig44_Storage.toJSON(message.storage)
        : undefined);
    message.operationProfiling !== undefined &&
      (obj.operationProfiling = message.operationProfiling
        ? Mongocfgconfig44_OperationProfiling.toJSON(message.operationProfiling)
        : undefined);
    message.net !== undefined &&
      (obj.net = message.net
        ? Mongocfgconfig44_Network.toJSON(message.net)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongocfgconfig44>, I>>(
    object: I
  ): Mongocfgconfig44 {
    const message = { ...baseMongocfgconfig44 } as Mongocfgconfig44;
    message.storage =
      object.storage !== undefined && object.storage !== null
        ? Mongocfgconfig44_Storage.fromPartial(object.storage)
        : undefined;
    message.operationProfiling =
      object.operationProfiling !== undefined &&
      object.operationProfiling !== null
        ? Mongocfgconfig44_OperationProfiling.fromPartial(
            object.operationProfiling
          )
        : undefined;
    message.net =
      object.net !== undefined && object.net !== null
        ? Mongocfgconfig44_Network.fromPartial(object.net)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongocfgconfig44.$type, Mongocfgconfig44);

const baseMongocfgconfig44_Storage: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.Storage",
};

export const Mongocfgconfig44_Storage = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.Storage" as const,

  encode(
    message: Mongocfgconfig44_Storage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.wiredTiger !== undefined) {
      Mongocfgconfig44_Storage_WiredTiger.encode(
        message.wiredTiger,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongocfgconfig44_Storage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongocfgconfig44_Storage,
    } as Mongocfgconfig44_Storage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wiredTiger = Mongocfgconfig44_Storage_WiredTiger.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Mongocfgconfig44_Storage {
    const message = {
      ...baseMongocfgconfig44_Storage,
    } as Mongocfgconfig44_Storage;
    message.wiredTiger =
      object.wiredTiger !== undefined && object.wiredTiger !== null
        ? Mongocfgconfig44_Storage_WiredTiger.fromJSON(object.wiredTiger)
        : undefined;
    return message;
  },

  toJSON(message: Mongocfgconfig44_Storage): unknown {
    const obj: any = {};
    message.wiredTiger !== undefined &&
      (obj.wiredTiger = message.wiredTiger
        ? Mongocfgconfig44_Storage_WiredTiger.toJSON(message.wiredTiger)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongocfgconfig44_Storage>, I>>(
    object: I
  ): Mongocfgconfig44_Storage {
    const message = {
      ...baseMongocfgconfig44_Storage,
    } as Mongocfgconfig44_Storage;
    message.wiredTiger =
      object.wiredTiger !== undefined && object.wiredTiger !== null
        ? Mongocfgconfig44_Storage_WiredTiger.fromPartial(object.wiredTiger)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongocfgconfig44_Storage.$type,
  Mongocfgconfig44_Storage
);

const baseMongocfgconfig44_Storage_WiredTiger: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.Storage.WiredTiger",
};

export const Mongocfgconfig44_Storage_WiredTiger = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.Storage.WiredTiger" as const,

  encode(
    message: Mongocfgconfig44_Storage_WiredTiger,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.engineConfig !== undefined) {
      Mongocfgconfig44_Storage_WiredTiger_EngineConfig.encode(
        message.engineConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongocfgconfig44_Storage_WiredTiger {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongocfgconfig44_Storage_WiredTiger,
    } as Mongocfgconfig44_Storage_WiredTiger;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.engineConfig =
            Mongocfgconfig44_Storage_WiredTiger_EngineConfig.decode(
              reader,
              reader.uint32()
            );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Mongocfgconfig44_Storage_WiredTiger {
    const message = {
      ...baseMongocfgconfig44_Storage_WiredTiger,
    } as Mongocfgconfig44_Storage_WiredTiger;
    message.engineConfig =
      object.engineConfig !== undefined && object.engineConfig !== null
        ? Mongocfgconfig44_Storage_WiredTiger_EngineConfig.fromJSON(
            object.engineConfig
          )
        : undefined;
    return message;
  },

  toJSON(message: Mongocfgconfig44_Storage_WiredTiger): unknown {
    const obj: any = {};
    message.engineConfig !== undefined &&
      (obj.engineConfig = message.engineConfig
        ? Mongocfgconfig44_Storage_WiredTiger_EngineConfig.toJSON(
            message.engineConfig
          )
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Mongocfgconfig44_Storage_WiredTiger>, I>
  >(object: I): Mongocfgconfig44_Storage_WiredTiger {
    const message = {
      ...baseMongocfgconfig44_Storage_WiredTiger,
    } as Mongocfgconfig44_Storage_WiredTiger;
    message.engineConfig =
      object.engineConfig !== undefined && object.engineConfig !== null
        ? Mongocfgconfig44_Storage_WiredTiger_EngineConfig.fromPartial(
            object.engineConfig
          )
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongocfgconfig44_Storage_WiredTiger.$type,
  Mongocfgconfig44_Storage_WiredTiger
);

const baseMongocfgconfig44_Storage_WiredTiger_EngineConfig: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.Storage.WiredTiger.EngineConfig",
};

export const Mongocfgconfig44_Storage_WiredTiger_EngineConfig = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.Storage.WiredTiger.EngineConfig" as const,

  encode(
    message: Mongocfgconfig44_Storage_WiredTiger_EngineConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cacheSizeGb !== undefined) {
      DoubleValue.encode(
        { $type: "google.protobuf.DoubleValue", value: message.cacheSizeGb! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongocfgconfig44_Storage_WiredTiger_EngineConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongocfgconfig44_Storage_WiredTiger_EngineConfig,
    } as Mongocfgconfig44_Storage_WiredTiger_EngineConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cacheSizeGb = DoubleValue.decode(
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

  fromJSON(object: any): Mongocfgconfig44_Storage_WiredTiger_EngineConfig {
    const message = {
      ...baseMongocfgconfig44_Storage_WiredTiger_EngineConfig,
    } as Mongocfgconfig44_Storage_WiredTiger_EngineConfig;
    message.cacheSizeGb =
      object.cacheSizeGb !== undefined && object.cacheSizeGb !== null
        ? Number(object.cacheSizeGb)
        : undefined;
    return message;
  },

  toJSON(message: Mongocfgconfig44_Storage_WiredTiger_EngineConfig): unknown {
    const obj: any = {};
    message.cacheSizeGb !== undefined &&
      (obj.cacheSizeGb = message.cacheSizeGb);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<Mongocfgconfig44_Storage_WiredTiger_EngineConfig>,
      I
    >
  >(object: I): Mongocfgconfig44_Storage_WiredTiger_EngineConfig {
    const message = {
      ...baseMongocfgconfig44_Storage_WiredTiger_EngineConfig,
    } as Mongocfgconfig44_Storage_WiredTiger_EngineConfig;
    message.cacheSizeGb = object.cacheSizeGb ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongocfgconfig44_Storage_WiredTiger_EngineConfig.$type,
  Mongocfgconfig44_Storage_WiredTiger_EngineConfig
);

const baseMongocfgconfig44_OperationProfiling: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.OperationProfiling",
  mode: 0,
};

export const Mongocfgconfig44_OperationProfiling = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.OperationProfiling" as const,

  encode(
    message: Mongocfgconfig44_OperationProfiling,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    if (message.slowOpThreshold !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.slowOpThreshold!,
        },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongocfgconfig44_OperationProfiling {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongocfgconfig44_OperationProfiling,
    } as Mongocfgconfig44_OperationProfiling;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mode = reader.int32() as any;
          break;
        case 2:
          message.slowOpThreshold = Int64Value.decode(
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

  fromJSON(object: any): Mongocfgconfig44_OperationProfiling {
    const message = {
      ...baseMongocfgconfig44_OperationProfiling,
    } as Mongocfgconfig44_OperationProfiling;
    message.mode =
      object.mode !== undefined && object.mode !== null
        ? mongocfgconfig44_OperationProfiling_ModeFromJSON(object.mode)
        : 0;
    message.slowOpThreshold =
      object.slowOpThreshold !== undefined && object.slowOpThreshold !== null
        ? Number(object.slowOpThreshold)
        : undefined;
    return message;
  },

  toJSON(message: Mongocfgconfig44_OperationProfiling): unknown {
    const obj: any = {};
    message.mode !== undefined &&
      (obj.mode = mongocfgconfig44_OperationProfiling_ModeToJSON(message.mode));
    message.slowOpThreshold !== undefined &&
      (obj.slowOpThreshold = message.slowOpThreshold);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Mongocfgconfig44_OperationProfiling>, I>
  >(object: I): Mongocfgconfig44_OperationProfiling {
    const message = {
      ...baseMongocfgconfig44_OperationProfiling,
    } as Mongocfgconfig44_OperationProfiling;
    message.mode = object.mode ?? 0;
    message.slowOpThreshold = object.slowOpThreshold ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongocfgconfig44_OperationProfiling.$type,
  Mongocfgconfig44_OperationProfiling
);

const baseMongocfgconfig44_Network: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.Network",
};

export const Mongocfgconfig44_Network = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4.Network" as const,

  encode(
    message: Mongocfgconfig44_Network,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maxIncomingConnections !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxIncomingConnections!,
        },
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongocfgconfig44_Network {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongocfgconfig44_Network,
    } as Mongocfgconfig44_Network;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxIncomingConnections = Int64Value.decode(
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

  fromJSON(object: any): Mongocfgconfig44_Network {
    const message = {
      ...baseMongocfgconfig44_Network,
    } as Mongocfgconfig44_Network;
    message.maxIncomingConnections =
      object.maxIncomingConnections !== undefined &&
      object.maxIncomingConnections !== null
        ? Number(object.maxIncomingConnections)
        : undefined;
    return message;
  },

  toJSON(message: Mongocfgconfig44_Network): unknown {
    const obj: any = {};
    message.maxIncomingConnections !== undefined &&
      (obj.maxIncomingConnections = message.maxIncomingConnections);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongocfgconfig44_Network>, I>>(
    object: I
  ): Mongocfgconfig44_Network {
    const message = {
      ...baseMongocfgconfig44_Network,
    } as Mongocfgconfig44_Network;
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongocfgconfig44_Network.$type,
  Mongocfgconfig44_Network
);

const baseMongosconfig44: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4",
};

export const Mongosconfig44 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4" as const,

  encode(
    message: Mongosconfig44,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.net !== undefined) {
      Mongosconfig44_Network.encode(
        message.net,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongosconfig44 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongosconfig44 } as Mongosconfig44;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.net = Mongosconfig44_Network.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Mongosconfig44 {
    const message = { ...baseMongosconfig44 } as Mongosconfig44;
    message.net =
      object.net !== undefined && object.net !== null
        ? Mongosconfig44_Network.fromJSON(object.net)
        : undefined;
    return message;
  },

  toJSON(message: Mongosconfig44): unknown {
    const obj: any = {};
    message.net !== undefined &&
      (obj.net = message.net
        ? Mongosconfig44_Network.toJSON(message.net)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongosconfig44>, I>>(
    object: I
  ): Mongosconfig44 {
    const message = { ...baseMongosconfig44 } as Mongosconfig44;
    message.net =
      object.net !== undefined && object.net !== null
        ? Mongosconfig44_Network.fromPartial(object.net)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongosconfig44.$type, Mongosconfig44);

const baseMongosconfig44_Network: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4.Network",
};

export const Mongosconfig44_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4.Network" as const,

  encode(
    message: Mongosconfig44_Network,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maxIncomingConnections !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxIncomingConnections!,
        },
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongosconfig44_Network {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongosconfig44_Network } as Mongosconfig44_Network;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxIncomingConnections = Int64Value.decode(
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

  fromJSON(object: any): Mongosconfig44_Network {
    const message = { ...baseMongosconfig44_Network } as Mongosconfig44_Network;
    message.maxIncomingConnections =
      object.maxIncomingConnections !== undefined &&
      object.maxIncomingConnections !== null
        ? Number(object.maxIncomingConnections)
        : undefined;
    return message;
  },

  toJSON(message: Mongosconfig44_Network): unknown {
    const obj: any = {};
    message.maxIncomingConnections !== undefined &&
      (obj.maxIncomingConnections = message.maxIncomingConnections);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongosconfig44_Network>, I>>(
    object: I
  ): Mongosconfig44_Network {
    const message = { ...baseMongosconfig44_Network } as Mongosconfig44_Network;
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongosconfig44_Network.$type, Mongosconfig44_Network);

const baseMongodconfigset44: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_4",
};

export const Mongodconfigset44 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_4" as const,

  encode(
    message: Mongodconfigset44,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      Mongodconfig44.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      Mongodconfig44.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      Mongodconfig44.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfigset44 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodconfigset44 } as Mongodconfigset44;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = Mongodconfig44.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = Mongodconfig44.decode(reader, reader.uint32());
          break;
        case 3:
          message.defaultConfig = Mongodconfig44.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Mongodconfigset44 {
    const message = { ...baseMongodconfigset44 } as Mongodconfigset44;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Mongodconfig44.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Mongodconfig44.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Mongodconfig44.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfigset44): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? Mongodconfig44.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? Mongodconfig44.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? Mongodconfig44.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodconfigset44>, I>>(
    object: I
  ): Mongodconfigset44 {
    const message = { ...baseMongodconfigset44 } as Mongodconfigset44;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Mongodconfig44.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Mongodconfig44.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Mongodconfig44.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodconfigset44.$type, Mongodconfigset44);

const baseMongocfgconfigset44: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_4",
};

export const Mongocfgconfigset44 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_4" as const,

  encode(
    message: Mongocfgconfigset44,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      Mongocfgconfig44.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      Mongocfgconfig44.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      Mongocfgconfig44.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfigset44 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongocfgconfigset44 } as Mongocfgconfigset44;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = Mongocfgconfig44.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = Mongocfgconfig44.decode(reader, reader.uint32());
          break;
        case 3:
          message.defaultConfig = Mongocfgconfig44.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Mongocfgconfigset44 {
    const message = { ...baseMongocfgconfigset44 } as Mongocfgconfigset44;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Mongocfgconfig44.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Mongocfgconfig44.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Mongocfgconfig44.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: Mongocfgconfigset44): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? Mongocfgconfig44.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? Mongocfgconfig44.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? Mongocfgconfig44.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongocfgconfigset44>, I>>(
    object: I
  ): Mongocfgconfigset44 {
    const message = { ...baseMongocfgconfigset44 } as Mongocfgconfigset44;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Mongocfgconfig44.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Mongocfgconfig44.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Mongocfgconfig44.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongocfgconfigset44.$type, Mongocfgconfigset44);

const baseMongosconfigset44: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_4",
};

export const Mongosconfigset44 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_4" as const,

  encode(
    message: Mongosconfigset44,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      Mongosconfig44.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      Mongosconfig44.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      Mongosconfig44.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongosconfigset44 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongosconfigset44 } as Mongosconfigset44;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = Mongosconfig44.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = Mongosconfig44.decode(reader, reader.uint32());
          break;
        case 3:
          message.defaultConfig = Mongosconfig44.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Mongosconfigset44 {
    const message = { ...baseMongosconfigset44 } as Mongosconfigset44;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Mongosconfig44.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Mongosconfig44.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Mongosconfig44.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: Mongosconfigset44): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? Mongosconfig44.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? Mongosconfig44.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? Mongosconfig44.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongosconfigset44>, I>>(
    object: I
  ): Mongosconfigset44 {
    const message = { ...baseMongosconfigset44 } as Mongosconfigset44;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Mongosconfig44.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Mongosconfig44.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Mongosconfig44.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongosconfigset44.$type, Mongosconfigset44);

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
