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
 * options described in [MongoDB documentation](https://docs.mongodb.com/v4.2/reference/configuration-options/).
 */
export interface Mongodconfig42 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2";
  /** `storage` section of mongod configuration. */
  storage?: Mongodconfig42_Storage;
  /** `operationProfiling` section of mongod configuration. */
  operationProfiling?: Mongodconfig42_OperationProfiling;
  /** `net` section of mongod configuration. */
  net?: Mongodconfig42_Network;
}

export interface Mongodconfig42_Storage {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage";
  /** Configuration of the WiredTiger storage engine. */
  wiredTiger?: Mongodconfig42_Storage_WiredTiger;
  /** Configuration of the MongoDB [journal](https://docs.mongodb.com/v4.2/reference/glossary/#term-journal). */
  journal?: Mongodconfig42_Storage_Journal;
}

/** Configuration of WiredTiger storage engine. */
export interface Mongodconfig42_Storage_WiredTiger {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger";
  /** Engine configuration for WiredTiger. */
  engineConfig?: Mongodconfig42_Storage_WiredTiger_EngineConfig;
  /** Collection configuration for WiredTiger. */
  collectionConfig?: Mongodconfig42_Storage_WiredTiger_CollectionConfig;
}

export interface Mongodconfig42_Storage_WiredTiger_EngineConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger.EngineConfig";
  /** The maximum size of the internal cache that WiredTiger will use for all data. */
  cacheSizeGb?: number;
}

export interface Mongodconfig42_Storage_WiredTiger_CollectionConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger.CollectionConfig";
  /** Default type of compression to use for collection data. */
  blockCompressor: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor;
}

export enum Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor {
  COMPRESSOR_UNSPECIFIED = 0,
  /** NONE - No compression. */
  NONE = 1,
  /** SNAPPY - The [Snappy](https://docs.mongodb.com/v4.2/reference/glossary/#term-snappy) compression. */
  SNAPPY = 2,
  /** ZLIB - The [zlib](https://docs.mongodb.com/v4.2/reference/glossary/#term-zlib) compression. */
  ZLIB = 3,
  UNRECOGNIZED = -1,
}

export function mongodconfig42_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
  object: any
): Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor {
  switch (object) {
    case 0:
    case "COMPRESSOR_UNSPECIFIED":
      return Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED;
    case 1:
    case "NONE":
      return Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor.NONE;
    case 2:
    case "SNAPPY":
      return Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY;
    case 3:
    case "ZLIB":
      return Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED;
  }
}

export function mongodconfig42_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
  object: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor
): string {
  switch (object) {
    case Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED:
      return "COMPRESSOR_UNSPECIFIED";
    case Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor.NONE:
      return "NONE";
    case Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY:
      return "SNAPPY";
    case Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB:
      return "ZLIB";
    default:
      return "UNKNOWN";
  }
}

export interface Mongodconfig42_Storage_Journal {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.Journal";
  /**
   * Commit interval between journal operations, in milliseconds.
   * Default: 100.
   */
  commitInterval?: number;
}

export interface Mongodconfig42_OperationProfiling {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.OperationProfiling";
  /** Mode which specifies operations that should be profiled. */
  mode: Mongodconfig42_OperationProfiling_Mode;
  /**
   * The slow operation time threshold, in milliseconds. Operations that run
   * for longer than this threshold are considered slow, and are processed by the profiler
   * running in the SLOW_OP mode.
   */
  slowOpThreshold?: number;
}

export enum Mongodconfig42_OperationProfiling_Mode {
  MODE_UNSPECIFIED = 0,
  /** OFF - The profiler is off and does not collect any data. */
  OFF = 1,
  /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
  SLOW_OP = 2,
  /** ALL - The profiler collects data for all operations. */
  ALL = 3,
  UNRECOGNIZED = -1,
}

export function mongodconfig42_OperationProfiling_ModeFromJSON(
  object: any
): Mongodconfig42_OperationProfiling_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return Mongodconfig42_OperationProfiling_Mode.MODE_UNSPECIFIED;
    case 1:
    case "OFF":
      return Mongodconfig42_OperationProfiling_Mode.OFF;
    case 2:
    case "SLOW_OP":
      return Mongodconfig42_OperationProfiling_Mode.SLOW_OP;
    case 3:
    case "ALL":
      return Mongodconfig42_OperationProfiling_Mode.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mongodconfig42_OperationProfiling_Mode.UNRECOGNIZED;
  }
}

export function mongodconfig42_OperationProfiling_ModeToJSON(
  object: Mongodconfig42_OperationProfiling_Mode
): string {
  switch (object) {
    case Mongodconfig42_OperationProfiling_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case Mongodconfig42_OperationProfiling_Mode.OFF:
      return "OFF";
    case Mongodconfig42_OperationProfiling_Mode.SLOW_OP:
      return "SLOW_OP";
    case Mongodconfig42_OperationProfiling_Mode.ALL:
      return "ALL";
    default:
      return "UNKNOWN";
  }
}

export interface Mongodconfig42_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Network";
  /** The maximum number of simultaneous connections that mongod will accept. */
  maxIncomingConnections?: number;
}

export interface Mongocfgconfig42 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2";
  /** `storage` section of mongocfg configuration. */
  storage?: Mongocfgconfig42_Storage;
  /** `operationProfiling` section of mongocfg configuration. */
  operationProfiling?: Mongocfgconfig42_OperationProfiling;
  /** `net` section of mongocfg configuration. */
  net?: Mongocfgconfig42_Network;
}

export interface Mongocfgconfig42_Storage {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage";
  /** Configuration of the WiredTiger storage engine. */
  wiredTiger?: Mongocfgconfig42_Storage_WiredTiger;
}

/** Configuration of WiredTiger storage engine. */
export interface Mongocfgconfig42_Storage_WiredTiger {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage.WiredTiger";
  /** Engine configuration for WiredTiger. */
  engineConfig?: Mongocfgconfig42_Storage_WiredTiger_EngineConfig;
}

export interface Mongocfgconfig42_Storage_WiredTiger_EngineConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage.WiredTiger.EngineConfig";
  /** The maximum size of the internal cache that WiredTiger will use for all data. */
  cacheSizeGb?: number;
}

export interface Mongocfgconfig42_OperationProfiling {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.OperationProfiling";
  /** Mode which specifies operations that should be profiled. */
  mode: Mongocfgconfig42_OperationProfiling_Mode;
  /**
   * The slow operation time threshold, in milliseconds. Operations that run
   * for longer than this threshold are considered slow, and are processed by the profiler
   * running in the SLOW_OP mode. For details see [MongoDB documentation](https://docs.mongodb.com/v4.2/reference/configuration-options/#operationProfiling.slowOpThresholdMs).
   */
  slowOpThreshold?: number;
}

export enum Mongocfgconfig42_OperationProfiling_Mode {
  MODE_UNSPECIFIED = 0,
  /** OFF - The profiler is off and does not collect any data. */
  OFF = 1,
  /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
  SLOW_OP = 2,
  /** ALL - The profiler collects data for all operations. */
  ALL = 3,
  UNRECOGNIZED = -1,
}

export function mongocfgconfig42_OperationProfiling_ModeFromJSON(
  object: any
): Mongocfgconfig42_OperationProfiling_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return Mongocfgconfig42_OperationProfiling_Mode.MODE_UNSPECIFIED;
    case 1:
    case "OFF":
      return Mongocfgconfig42_OperationProfiling_Mode.OFF;
    case 2:
    case "SLOW_OP":
      return Mongocfgconfig42_OperationProfiling_Mode.SLOW_OP;
    case 3:
    case "ALL":
      return Mongocfgconfig42_OperationProfiling_Mode.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mongocfgconfig42_OperationProfiling_Mode.UNRECOGNIZED;
  }
}

export function mongocfgconfig42_OperationProfiling_ModeToJSON(
  object: Mongocfgconfig42_OperationProfiling_Mode
): string {
  switch (object) {
    case Mongocfgconfig42_OperationProfiling_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case Mongocfgconfig42_OperationProfiling_Mode.OFF:
      return "OFF";
    case Mongocfgconfig42_OperationProfiling_Mode.SLOW_OP:
      return "SLOW_OP";
    case Mongocfgconfig42_OperationProfiling_Mode.ALL:
      return "ALL";
    default:
      return "UNKNOWN";
  }
}

export interface Mongocfgconfig42_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Network";
  /** The maximum number of simultaneous connections that mongocfg will accept. */
  maxIncomingConnections?: number;
}

export interface Mongosconfig42 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_2";
  /** Network settings for mongos. */
  net?: Mongosconfig42_Network;
}

export interface Mongosconfig42_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_2.Network";
  /** The maximum number of simultaneous connections that mongos will accept. */
  maxIncomingConnections?: number;
}

export interface Mongodconfigset42 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_2";
  /**
   * Effective mongod settings for a MongoDB 4.2 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?: Mongodconfig42;
  /** User-defined mongod settings for a MongoDB 4.2 cluster. */
  userConfig?: Mongodconfig42;
  /** Default mongod configuration for a MongoDB 4.2 cluster. */
  defaultConfig?: Mongodconfig42;
}

export interface Mongocfgconfigset42 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_2";
  /**
   * Effective mongocfg settings for a MongoDB 4.2 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?: Mongocfgconfig42;
  /** User-defined mongocfg settings for a MongoDB 4.2 cluster. */
  userConfig?: Mongocfgconfig42;
  /** Default mongocfg configuration for a MongoDB 4.2 cluster. */
  defaultConfig?: Mongocfgconfig42;
}

export interface Mongosconfigset42 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_2";
  /**
   * Effective mongos settings for a MongoDB 4.2 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?: Mongosconfig42;
  /** User-defined mongos settings for a MongoDB 4.2 cluster. */
  userConfig?: Mongosconfig42;
  /** Default mongos configuration for a MongoDB 4.2 cluster. */
  defaultConfig?: Mongosconfig42;
}

const baseMongodconfig42: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2",
};

export const Mongodconfig42 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2" as const,

  encode(
    message: Mongodconfig42,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.storage !== undefined) {
      Mongodconfig42_Storage.encode(
        message.storage,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.operationProfiling !== undefined) {
      Mongodconfig42_OperationProfiling.encode(
        message.operationProfiling,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.net !== undefined) {
      Mongodconfig42_Network.encode(
        message.net,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig42 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodconfig42 } as Mongodconfig42;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storage = Mongodconfig42_Storage.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.operationProfiling = Mongodconfig42_OperationProfiling.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.net = Mongodconfig42_Network.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Mongodconfig42 {
    const message = { ...baseMongodconfig42 } as Mongodconfig42;
    message.storage =
      object.storage !== undefined && object.storage !== null
        ? Mongodconfig42_Storage.fromJSON(object.storage)
        : undefined;
    message.operationProfiling =
      object.operationProfiling !== undefined &&
      object.operationProfiling !== null
        ? Mongodconfig42_OperationProfiling.fromJSON(object.operationProfiling)
        : undefined;
    message.net =
      object.net !== undefined && object.net !== null
        ? Mongodconfig42_Network.fromJSON(object.net)
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfig42): unknown {
    const obj: any = {};
    message.storage !== undefined &&
      (obj.storage = message.storage
        ? Mongodconfig42_Storage.toJSON(message.storage)
        : undefined);
    message.operationProfiling !== undefined &&
      (obj.operationProfiling = message.operationProfiling
        ? Mongodconfig42_OperationProfiling.toJSON(message.operationProfiling)
        : undefined);
    message.net !== undefined &&
      (obj.net = message.net
        ? Mongodconfig42_Network.toJSON(message.net)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodconfig42>, I>>(
    object: I
  ): Mongodconfig42 {
    const message = { ...baseMongodconfig42 } as Mongodconfig42;
    message.storage =
      object.storage !== undefined && object.storage !== null
        ? Mongodconfig42_Storage.fromPartial(object.storage)
        : undefined;
    message.operationProfiling =
      object.operationProfiling !== undefined &&
      object.operationProfiling !== null
        ? Mongodconfig42_OperationProfiling.fromPartial(
            object.operationProfiling
          )
        : undefined;
    message.net =
      object.net !== undefined && object.net !== null
        ? Mongodconfig42_Network.fromPartial(object.net)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodconfig42.$type, Mongodconfig42);

const baseMongodconfig42_Storage: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage",
};

export const Mongodconfig42_Storage = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage" as const,

  encode(
    message: Mongodconfig42_Storage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.wiredTiger !== undefined) {
      Mongodconfig42_Storage_WiredTiger.encode(
        message.wiredTiger,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.journal !== undefined) {
      Mongodconfig42_Storage_Journal.encode(
        message.journal,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongodconfig42_Storage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodconfig42_Storage } as Mongodconfig42_Storage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wiredTiger = Mongodconfig42_Storage_WiredTiger.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.journal = Mongodconfig42_Storage_Journal.decode(
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

  fromJSON(object: any): Mongodconfig42_Storage {
    const message = { ...baseMongodconfig42_Storage } as Mongodconfig42_Storage;
    message.wiredTiger =
      object.wiredTiger !== undefined && object.wiredTiger !== null
        ? Mongodconfig42_Storage_WiredTiger.fromJSON(object.wiredTiger)
        : undefined;
    message.journal =
      object.journal !== undefined && object.journal !== null
        ? Mongodconfig42_Storage_Journal.fromJSON(object.journal)
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfig42_Storage): unknown {
    const obj: any = {};
    message.wiredTiger !== undefined &&
      (obj.wiredTiger = message.wiredTiger
        ? Mongodconfig42_Storage_WiredTiger.toJSON(message.wiredTiger)
        : undefined);
    message.journal !== undefined &&
      (obj.journal = message.journal
        ? Mongodconfig42_Storage_Journal.toJSON(message.journal)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodconfig42_Storage>, I>>(
    object: I
  ): Mongodconfig42_Storage {
    const message = { ...baseMongodconfig42_Storage } as Mongodconfig42_Storage;
    message.wiredTiger =
      object.wiredTiger !== undefined && object.wiredTiger !== null
        ? Mongodconfig42_Storage_WiredTiger.fromPartial(object.wiredTiger)
        : undefined;
    message.journal =
      object.journal !== undefined && object.journal !== null
        ? Mongodconfig42_Storage_Journal.fromPartial(object.journal)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodconfig42_Storage.$type, Mongodconfig42_Storage);

const baseMongodconfig42_Storage_WiredTiger: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger",
};

export const Mongodconfig42_Storage_WiredTiger = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger" as const,

  encode(
    message: Mongodconfig42_Storage_WiredTiger,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.engineConfig !== undefined) {
      Mongodconfig42_Storage_WiredTiger_EngineConfig.encode(
        message.engineConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.collectionConfig !== undefined) {
      Mongodconfig42_Storage_WiredTiger_CollectionConfig.encode(
        message.collectionConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongodconfig42_Storage_WiredTiger {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfig42_Storage_WiredTiger,
    } as Mongodconfig42_Storage_WiredTiger;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.engineConfig =
            Mongodconfig42_Storage_WiredTiger_EngineConfig.decode(
              reader,
              reader.uint32()
            );
          break;
        case 2:
          message.collectionConfig =
            Mongodconfig42_Storage_WiredTiger_CollectionConfig.decode(
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

  fromJSON(object: any): Mongodconfig42_Storage_WiredTiger {
    const message = {
      ...baseMongodconfig42_Storage_WiredTiger,
    } as Mongodconfig42_Storage_WiredTiger;
    message.engineConfig =
      object.engineConfig !== undefined && object.engineConfig !== null
        ? Mongodconfig42_Storage_WiredTiger_EngineConfig.fromJSON(
            object.engineConfig
          )
        : undefined;
    message.collectionConfig =
      object.collectionConfig !== undefined && object.collectionConfig !== null
        ? Mongodconfig42_Storage_WiredTiger_CollectionConfig.fromJSON(
            object.collectionConfig
          )
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfig42_Storage_WiredTiger): unknown {
    const obj: any = {};
    message.engineConfig !== undefined &&
      (obj.engineConfig = message.engineConfig
        ? Mongodconfig42_Storage_WiredTiger_EngineConfig.toJSON(
            message.engineConfig
          )
        : undefined);
    message.collectionConfig !== undefined &&
      (obj.collectionConfig = message.collectionConfig
        ? Mongodconfig42_Storage_WiredTiger_CollectionConfig.toJSON(
            message.collectionConfig
          )
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Mongodconfig42_Storage_WiredTiger>, I>
  >(object: I): Mongodconfig42_Storage_WiredTiger {
    const message = {
      ...baseMongodconfig42_Storage_WiredTiger,
    } as Mongodconfig42_Storage_WiredTiger;
    message.engineConfig =
      object.engineConfig !== undefined && object.engineConfig !== null
        ? Mongodconfig42_Storage_WiredTiger_EngineConfig.fromPartial(
            object.engineConfig
          )
        : undefined;
    message.collectionConfig =
      object.collectionConfig !== undefined && object.collectionConfig !== null
        ? Mongodconfig42_Storage_WiredTiger_CollectionConfig.fromPartial(
            object.collectionConfig
          )
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfig42_Storage_WiredTiger.$type,
  Mongodconfig42_Storage_WiredTiger
);

const baseMongodconfig42_Storage_WiredTiger_EngineConfig: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger.EngineConfig",
};

export const Mongodconfig42_Storage_WiredTiger_EngineConfig = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger.EngineConfig" as const,

  encode(
    message: Mongodconfig42_Storage_WiredTiger_EngineConfig,
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
  ): Mongodconfig42_Storage_WiredTiger_EngineConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfig42_Storage_WiredTiger_EngineConfig,
    } as Mongodconfig42_Storage_WiredTiger_EngineConfig;
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

  fromJSON(object: any): Mongodconfig42_Storage_WiredTiger_EngineConfig {
    const message = {
      ...baseMongodconfig42_Storage_WiredTiger_EngineConfig,
    } as Mongodconfig42_Storage_WiredTiger_EngineConfig;
    message.cacheSizeGb =
      object.cacheSizeGb !== undefined && object.cacheSizeGb !== null
        ? Number(object.cacheSizeGb)
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfig42_Storage_WiredTiger_EngineConfig): unknown {
    const obj: any = {};
    message.cacheSizeGb !== undefined &&
      (obj.cacheSizeGb = message.cacheSizeGb);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<Mongodconfig42_Storage_WiredTiger_EngineConfig>,
      I
    >
  >(object: I): Mongodconfig42_Storage_WiredTiger_EngineConfig {
    const message = {
      ...baseMongodconfig42_Storage_WiredTiger_EngineConfig,
    } as Mongodconfig42_Storage_WiredTiger_EngineConfig;
    message.cacheSizeGb = object.cacheSizeGb ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfig42_Storage_WiredTiger_EngineConfig.$type,
  Mongodconfig42_Storage_WiredTiger_EngineConfig
);

const baseMongodconfig42_Storage_WiredTiger_CollectionConfig: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger.CollectionConfig",
  blockCompressor: 0,
};

export const Mongodconfig42_Storage_WiredTiger_CollectionConfig = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger.CollectionConfig" as const,

  encode(
    message: Mongodconfig42_Storage_WiredTiger_CollectionConfig,
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
  ): Mongodconfig42_Storage_WiredTiger_CollectionConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfig42_Storage_WiredTiger_CollectionConfig,
    } as Mongodconfig42_Storage_WiredTiger_CollectionConfig;
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

  fromJSON(object: any): Mongodconfig42_Storage_WiredTiger_CollectionConfig {
    const message = {
      ...baseMongodconfig42_Storage_WiredTiger_CollectionConfig,
    } as Mongodconfig42_Storage_WiredTiger_CollectionConfig;
    message.blockCompressor =
      object.blockCompressor !== undefined && object.blockCompressor !== null
        ? mongodconfig42_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
            object.blockCompressor
          )
        : 0;
    return message;
  },

  toJSON(message: Mongodconfig42_Storage_WiredTiger_CollectionConfig): unknown {
    const obj: any = {};
    message.blockCompressor !== undefined &&
      (obj.blockCompressor =
        mongodconfig42_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
          message.blockCompressor
        ));
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<Mongodconfig42_Storage_WiredTiger_CollectionConfig>,
      I
    >
  >(object: I): Mongodconfig42_Storage_WiredTiger_CollectionConfig {
    const message = {
      ...baseMongodconfig42_Storage_WiredTiger_CollectionConfig,
    } as Mongodconfig42_Storage_WiredTiger_CollectionConfig;
    message.blockCompressor = object.blockCompressor ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfig42_Storage_WiredTiger_CollectionConfig.$type,
  Mongodconfig42_Storage_WiredTiger_CollectionConfig
);

const baseMongodconfig42_Storage_Journal: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.Journal",
};

export const Mongodconfig42_Storage_Journal = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.Journal" as const,

  encode(
    message: Mongodconfig42_Storage_Journal,
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
  ): Mongodconfig42_Storage_Journal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfig42_Storage_Journal,
    } as Mongodconfig42_Storage_Journal;
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

  fromJSON(object: any): Mongodconfig42_Storage_Journal {
    const message = {
      ...baseMongodconfig42_Storage_Journal,
    } as Mongodconfig42_Storage_Journal;
    message.commitInterval =
      object.commitInterval !== undefined && object.commitInterval !== null
        ? Number(object.commitInterval)
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfig42_Storage_Journal): unknown {
    const obj: any = {};
    message.commitInterval !== undefined &&
      (obj.commitInterval = message.commitInterval);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodconfig42_Storage_Journal>, I>>(
    object: I
  ): Mongodconfig42_Storage_Journal {
    const message = {
      ...baseMongodconfig42_Storage_Journal,
    } as Mongodconfig42_Storage_Journal;
    message.commitInterval = object.commitInterval ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfig42_Storage_Journal.$type,
  Mongodconfig42_Storage_Journal
);

const baseMongodconfig42_OperationProfiling: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.OperationProfiling",
  mode: 0,
};

export const Mongodconfig42_OperationProfiling = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.OperationProfiling" as const,

  encode(
    message: Mongodconfig42_OperationProfiling,
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
  ): Mongodconfig42_OperationProfiling {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfig42_OperationProfiling,
    } as Mongodconfig42_OperationProfiling;
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

  fromJSON(object: any): Mongodconfig42_OperationProfiling {
    const message = {
      ...baseMongodconfig42_OperationProfiling,
    } as Mongodconfig42_OperationProfiling;
    message.mode =
      object.mode !== undefined && object.mode !== null
        ? mongodconfig42_OperationProfiling_ModeFromJSON(object.mode)
        : 0;
    message.slowOpThreshold =
      object.slowOpThreshold !== undefined && object.slowOpThreshold !== null
        ? Number(object.slowOpThreshold)
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfig42_OperationProfiling): unknown {
    const obj: any = {};
    message.mode !== undefined &&
      (obj.mode = mongodconfig42_OperationProfiling_ModeToJSON(message.mode));
    message.slowOpThreshold !== undefined &&
      (obj.slowOpThreshold = message.slowOpThreshold);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Mongodconfig42_OperationProfiling>, I>
  >(object: I): Mongodconfig42_OperationProfiling {
    const message = {
      ...baseMongodconfig42_OperationProfiling,
    } as Mongodconfig42_OperationProfiling;
    message.mode = object.mode ?? 0;
    message.slowOpThreshold = object.slowOpThreshold ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfig42_OperationProfiling.$type,
  Mongodconfig42_OperationProfiling
);

const baseMongodconfig42_Network: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Network",
};

export const Mongodconfig42_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Network" as const,

  encode(
    message: Mongodconfig42_Network,
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
  ): Mongodconfig42_Network {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodconfig42_Network } as Mongodconfig42_Network;
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

  fromJSON(object: any): Mongodconfig42_Network {
    const message = { ...baseMongodconfig42_Network } as Mongodconfig42_Network;
    message.maxIncomingConnections =
      object.maxIncomingConnections !== undefined &&
      object.maxIncomingConnections !== null
        ? Number(object.maxIncomingConnections)
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfig42_Network): unknown {
    const obj: any = {};
    message.maxIncomingConnections !== undefined &&
      (obj.maxIncomingConnections = message.maxIncomingConnections);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodconfig42_Network>, I>>(
    object: I
  ): Mongodconfig42_Network {
    const message = { ...baseMongodconfig42_Network } as Mongodconfig42_Network;
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodconfig42_Network.$type, Mongodconfig42_Network);

const baseMongocfgconfig42: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2",
};

export const Mongocfgconfig42 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2" as const,

  encode(
    message: Mongocfgconfig42,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.storage !== undefined) {
      Mongocfgconfig42_Storage.encode(
        message.storage,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.operationProfiling !== undefined) {
      Mongocfgconfig42_OperationProfiling.encode(
        message.operationProfiling,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.net !== undefined) {
      Mongocfgconfig42_Network.encode(
        message.net,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfig42 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongocfgconfig42 } as Mongocfgconfig42;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storage = Mongocfgconfig42_Storage.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.operationProfiling =
            Mongocfgconfig42_OperationProfiling.decode(reader, reader.uint32());
          break;
        case 3:
          message.net = Mongocfgconfig42_Network.decode(
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

  fromJSON(object: any): Mongocfgconfig42 {
    const message = { ...baseMongocfgconfig42 } as Mongocfgconfig42;
    message.storage =
      object.storage !== undefined && object.storage !== null
        ? Mongocfgconfig42_Storage.fromJSON(object.storage)
        : undefined;
    message.operationProfiling =
      object.operationProfiling !== undefined &&
      object.operationProfiling !== null
        ? Mongocfgconfig42_OperationProfiling.fromJSON(
            object.operationProfiling
          )
        : undefined;
    message.net =
      object.net !== undefined && object.net !== null
        ? Mongocfgconfig42_Network.fromJSON(object.net)
        : undefined;
    return message;
  },

  toJSON(message: Mongocfgconfig42): unknown {
    const obj: any = {};
    message.storage !== undefined &&
      (obj.storage = message.storage
        ? Mongocfgconfig42_Storage.toJSON(message.storage)
        : undefined);
    message.operationProfiling !== undefined &&
      (obj.operationProfiling = message.operationProfiling
        ? Mongocfgconfig42_OperationProfiling.toJSON(message.operationProfiling)
        : undefined);
    message.net !== undefined &&
      (obj.net = message.net
        ? Mongocfgconfig42_Network.toJSON(message.net)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongocfgconfig42>, I>>(
    object: I
  ): Mongocfgconfig42 {
    const message = { ...baseMongocfgconfig42 } as Mongocfgconfig42;
    message.storage =
      object.storage !== undefined && object.storage !== null
        ? Mongocfgconfig42_Storage.fromPartial(object.storage)
        : undefined;
    message.operationProfiling =
      object.operationProfiling !== undefined &&
      object.operationProfiling !== null
        ? Mongocfgconfig42_OperationProfiling.fromPartial(
            object.operationProfiling
          )
        : undefined;
    message.net =
      object.net !== undefined && object.net !== null
        ? Mongocfgconfig42_Network.fromPartial(object.net)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongocfgconfig42.$type, Mongocfgconfig42);

const baseMongocfgconfig42_Storage: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage",
};

export const Mongocfgconfig42_Storage = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage" as const,

  encode(
    message: Mongocfgconfig42_Storage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.wiredTiger !== undefined) {
      Mongocfgconfig42_Storage_WiredTiger.encode(
        message.wiredTiger,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongocfgconfig42_Storage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongocfgconfig42_Storage,
    } as Mongocfgconfig42_Storage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wiredTiger = Mongocfgconfig42_Storage_WiredTiger.decode(
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

  fromJSON(object: any): Mongocfgconfig42_Storage {
    const message = {
      ...baseMongocfgconfig42_Storage,
    } as Mongocfgconfig42_Storage;
    message.wiredTiger =
      object.wiredTiger !== undefined && object.wiredTiger !== null
        ? Mongocfgconfig42_Storage_WiredTiger.fromJSON(object.wiredTiger)
        : undefined;
    return message;
  },

  toJSON(message: Mongocfgconfig42_Storage): unknown {
    const obj: any = {};
    message.wiredTiger !== undefined &&
      (obj.wiredTiger = message.wiredTiger
        ? Mongocfgconfig42_Storage_WiredTiger.toJSON(message.wiredTiger)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongocfgconfig42_Storage>, I>>(
    object: I
  ): Mongocfgconfig42_Storage {
    const message = {
      ...baseMongocfgconfig42_Storage,
    } as Mongocfgconfig42_Storage;
    message.wiredTiger =
      object.wiredTiger !== undefined && object.wiredTiger !== null
        ? Mongocfgconfig42_Storage_WiredTiger.fromPartial(object.wiredTiger)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongocfgconfig42_Storage.$type,
  Mongocfgconfig42_Storage
);

const baseMongocfgconfig42_Storage_WiredTiger: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage.WiredTiger",
};

export const Mongocfgconfig42_Storage_WiredTiger = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage.WiredTiger" as const,

  encode(
    message: Mongocfgconfig42_Storage_WiredTiger,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.engineConfig !== undefined) {
      Mongocfgconfig42_Storage_WiredTiger_EngineConfig.encode(
        message.engineConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongocfgconfig42_Storage_WiredTiger {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongocfgconfig42_Storage_WiredTiger,
    } as Mongocfgconfig42_Storage_WiredTiger;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.engineConfig =
            Mongocfgconfig42_Storage_WiredTiger_EngineConfig.decode(
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

  fromJSON(object: any): Mongocfgconfig42_Storage_WiredTiger {
    const message = {
      ...baseMongocfgconfig42_Storage_WiredTiger,
    } as Mongocfgconfig42_Storage_WiredTiger;
    message.engineConfig =
      object.engineConfig !== undefined && object.engineConfig !== null
        ? Mongocfgconfig42_Storage_WiredTiger_EngineConfig.fromJSON(
            object.engineConfig
          )
        : undefined;
    return message;
  },

  toJSON(message: Mongocfgconfig42_Storage_WiredTiger): unknown {
    const obj: any = {};
    message.engineConfig !== undefined &&
      (obj.engineConfig = message.engineConfig
        ? Mongocfgconfig42_Storage_WiredTiger_EngineConfig.toJSON(
            message.engineConfig
          )
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Mongocfgconfig42_Storage_WiredTiger>, I>
  >(object: I): Mongocfgconfig42_Storage_WiredTiger {
    const message = {
      ...baseMongocfgconfig42_Storage_WiredTiger,
    } as Mongocfgconfig42_Storage_WiredTiger;
    message.engineConfig =
      object.engineConfig !== undefined && object.engineConfig !== null
        ? Mongocfgconfig42_Storage_WiredTiger_EngineConfig.fromPartial(
            object.engineConfig
          )
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongocfgconfig42_Storage_WiredTiger.$type,
  Mongocfgconfig42_Storage_WiredTiger
);

const baseMongocfgconfig42_Storage_WiredTiger_EngineConfig: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage.WiredTiger.EngineConfig",
};

export const Mongocfgconfig42_Storage_WiredTiger_EngineConfig = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage.WiredTiger.EngineConfig" as const,

  encode(
    message: Mongocfgconfig42_Storage_WiredTiger_EngineConfig,
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
  ): Mongocfgconfig42_Storage_WiredTiger_EngineConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongocfgconfig42_Storage_WiredTiger_EngineConfig,
    } as Mongocfgconfig42_Storage_WiredTiger_EngineConfig;
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

  fromJSON(object: any): Mongocfgconfig42_Storage_WiredTiger_EngineConfig {
    const message = {
      ...baseMongocfgconfig42_Storage_WiredTiger_EngineConfig,
    } as Mongocfgconfig42_Storage_WiredTiger_EngineConfig;
    message.cacheSizeGb =
      object.cacheSizeGb !== undefined && object.cacheSizeGb !== null
        ? Number(object.cacheSizeGb)
        : undefined;
    return message;
  },

  toJSON(message: Mongocfgconfig42_Storage_WiredTiger_EngineConfig): unknown {
    const obj: any = {};
    message.cacheSizeGb !== undefined &&
      (obj.cacheSizeGb = message.cacheSizeGb);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<Mongocfgconfig42_Storage_WiredTiger_EngineConfig>,
      I
    >
  >(object: I): Mongocfgconfig42_Storage_WiredTiger_EngineConfig {
    const message = {
      ...baseMongocfgconfig42_Storage_WiredTiger_EngineConfig,
    } as Mongocfgconfig42_Storage_WiredTiger_EngineConfig;
    message.cacheSizeGb = object.cacheSizeGb ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongocfgconfig42_Storage_WiredTiger_EngineConfig.$type,
  Mongocfgconfig42_Storage_WiredTiger_EngineConfig
);

const baseMongocfgconfig42_OperationProfiling: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.OperationProfiling",
  mode: 0,
};

export const Mongocfgconfig42_OperationProfiling = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.OperationProfiling" as const,

  encode(
    message: Mongocfgconfig42_OperationProfiling,
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
  ): Mongocfgconfig42_OperationProfiling {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongocfgconfig42_OperationProfiling,
    } as Mongocfgconfig42_OperationProfiling;
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

  fromJSON(object: any): Mongocfgconfig42_OperationProfiling {
    const message = {
      ...baseMongocfgconfig42_OperationProfiling,
    } as Mongocfgconfig42_OperationProfiling;
    message.mode =
      object.mode !== undefined && object.mode !== null
        ? mongocfgconfig42_OperationProfiling_ModeFromJSON(object.mode)
        : 0;
    message.slowOpThreshold =
      object.slowOpThreshold !== undefined && object.slowOpThreshold !== null
        ? Number(object.slowOpThreshold)
        : undefined;
    return message;
  },

  toJSON(message: Mongocfgconfig42_OperationProfiling): unknown {
    const obj: any = {};
    message.mode !== undefined &&
      (obj.mode = mongocfgconfig42_OperationProfiling_ModeToJSON(message.mode));
    message.slowOpThreshold !== undefined &&
      (obj.slowOpThreshold = message.slowOpThreshold);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Mongocfgconfig42_OperationProfiling>, I>
  >(object: I): Mongocfgconfig42_OperationProfiling {
    const message = {
      ...baseMongocfgconfig42_OperationProfiling,
    } as Mongocfgconfig42_OperationProfiling;
    message.mode = object.mode ?? 0;
    message.slowOpThreshold = object.slowOpThreshold ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongocfgconfig42_OperationProfiling.$type,
  Mongocfgconfig42_OperationProfiling
);

const baseMongocfgconfig42_Network: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Network",
};

export const Mongocfgconfig42_Network = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Network" as const,

  encode(
    message: Mongocfgconfig42_Network,
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
  ): Mongocfgconfig42_Network {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongocfgconfig42_Network,
    } as Mongocfgconfig42_Network;
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

  fromJSON(object: any): Mongocfgconfig42_Network {
    const message = {
      ...baseMongocfgconfig42_Network,
    } as Mongocfgconfig42_Network;
    message.maxIncomingConnections =
      object.maxIncomingConnections !== undefined &&
      object.maxIncomingConnections !== null
        ? Number(object.maxIncomingConnections)
        : undefined;
    return message;
  },

  toJSON(message: Mongocfgconfig42_Network): unknown {
    const obj: any = {};
    message.maxIncomingConnections !== undefined &&
      (obj.maxIncomingConnections = message.maxIncomingConnections);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongocfgconfig42_Network>, I>>(
    object: I
  ): Mongocfgconfig42_Network {
    const message = {
      ...baseMongocfgconfig42_Network,
    } as Mongocfgconfig42_Network;
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongocfgconfig42_Network.$type,
  Mongocfgconfig42_Network
);

const baseMongosconfig42: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_2",
};

export const Mongosconfig42 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_2" as const,

  encode(
    message: Mongosconfig42,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.net !== undefined) {
      Mongosconfig42_Network.encode(
        message.net,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongosconfig42 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongosconfig42 } as Mongosconfig42;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.net = Mongosconfig42_Network.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Mongosconfig42 {
    const message = { ...baseMongosconfig42 } as Mongosconfig42;
    message.net =
      object.net !== undefined && object.net !== null
        ? Mongosconfig42_Network.fromJSON(object.net)
        : undefined;
    return message;
  },

  toJSON(message: Mongosconfig42): unknown {
    const obj: any = {};
    message.net !== undefined &&
      (obj.net = message.net
        ? Mongosconfig42_Network.toJSON(message.net)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongosconfig42>, I>>(
    object: I
  ): Mongosconfig42 {
    const message = { ...baseMongosconfig42 } as Mongosconfig42;
    message.net =
      object.net !== undefined && object.net !== null
        ? Mongosconfig42_Network.fromPartial(object.net)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongosconfig42.$type, Mongosconfig42);

const baseMongosconfig42_Network: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_2.Network",
};

export const Mongosconfig42_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_2.Network" as const,

  encode(
    message: Mongosconfig42_Network,
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
  ): Mongosconfig42_Network {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongosconfig42_Network } as Mongosconfig42_Network;
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

  fromJSON(object: any): Mongosconfig42_Network {
    const message = { ...baseMongosconfig42_Network } as Mongosconfig42_Network;
    message.maxIncomingConnections =
      object.maxIncomingConnections !== undefined &&
      object.maxIncomingConnections !== null
        ? Number(object.maxIncomingConnections)
        : undefined;
    return message;
  },

  toJSON(message: Mongosconfig42_Network): unknown {
    const obj: any = {};
    message.maxIncomingConnections !== undefined &&
      (obj.maxIncomingConnections = message.maxIncomingConnections);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongosconfig42_Network>, I>>(
    object: I
  ): Mongosconfig42_Network {
    const message = { ...baseMongosconfig42_Network } as Mongosconfig42_Network;
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongosconfig42_Network.$type, Mongosconfig42_Network);

const baseMongodconfigset42: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_2",
};

export const Mongodconfigset42 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_2" as const,

  encode(
    message: Mongodconfigset42,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      Mongodconfig42.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      Mongodconfig42.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      Mongodconfig42.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfigset42 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodconfigset42 } as Mongodconfigset42;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = Mongodconfig42.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = Mongodconfig42.decode(reader, reader.uint32());
          break;
        case 3:
          message.defaultConfig = Mongodconfig42.decode(
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

  fromJSON(object: any): Mongodconfigset42 {
    const message = { ...baseMongodconfigset42 } as Mongodconfigset42;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Mongodconfig42.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Mongodconfig42.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Mongodconfig42.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfigset42): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? Mongodconfig42.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? Mongodconfig42.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? Mongodconfig42.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodconfigset42>, I>>(
    object: I
  ): Mongodconfigset42 {
    const message = { ...baseMongodconfigset42 } as Mongodconfigset42;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Mongodconfig42.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Mongodconfig42.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Mongodconfig42.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodconfigset42.$type, Mongodconfigset42);

const baseMongocfgconfigset42: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_2",
};

export const Mongocfgconfigset42 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_2" as const,

  encode(
    message: Mongocfgconfigset42,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      Mongocfgconfig42.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      Mongocfgconfig42.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      Mongocfgconfig42.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfigset42 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongocfgconfigset42 } as Mongocfgconfigset42;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = Mongocfgconfig42.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = Mongocfgconfig42.decode(reader, reader.uint32());
          break;
        case 3:
          message.defaultConfig = Mongocfgconfig42.decode(
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

  fromJSON(object: any): Mongocfgconfigset42 {
    const message = { ...baseMongocfgconfigset42 } as Mongocfgconfigset42;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Mongocfgconfig42.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Mongocfgconfig42.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Mongocfgconfig42.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: Mongocfgconfigset42): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? Mongocfgconfig42.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? Mongocfgconfig42.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? Mongocfgconfig42.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongocfgconfigset42>, I>>(
    object: I
  ): Mongocfgconfigset42 {
    const message = { ...baseMongocfgconfigset42 } as Mongocfgconfigset42;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Mongocfgconfig42.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Mongocfgconfig42.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Mongocfgconfig42.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongocfgconfigset42.$type, Mongocfgconfigset42);

const baseMongosconfigset42: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_2",
};

export const Mongosconfigset42 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_2" as const,

  encode(
    message: Mongosconfigset42,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      Mongosconfig42.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      Mongosconfig42.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      Mongosconfig42.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongosconfigset42 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongosconfigset42 } as Mongosconfigset42;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = Mongosconfig42.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = Mongosconfig42.decode(reader, reader.uint32());
          break;
        case 3:
          message.defaultConfig = Mongosconfig42.decode(
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

  fromJSON(object: any): Mongosconfigset42 {
    const message = { ...baseMongosconfigset42 } as Mongosconfigset42;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Mongosconfig42.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Mongosconfig42.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Mongosconfig42.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: Mongosconfigset42): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? Mongosconfig42.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? Mongosconfig42.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? Mongosconfig42.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongosconfigset42>, I>>(
    object: I
  ): Mongosconfigset42 {
    const message = { ...baseMongosconfigset42 } as Mongosconfigset42;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Mongosconfig42.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Mongosconfig42.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Mongosconfig42.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongosconfigset42.$type, Mongosconfigset42);

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
