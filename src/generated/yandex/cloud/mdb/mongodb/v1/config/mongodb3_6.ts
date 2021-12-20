/* eslint-disable */
import { messageTypeRegistry } from "../../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  DoubleValue,
  BoolValue,
  Int64Value,
} from "../../../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.mdb.mongodb.v1.config";

/**
 * Configuration of a mongod daemon. Supported options are a limited subset of all
 * options described in [MongoDB documentation](https://docs.mongodb.com/v3.6/reference/configuration-options/).
 */
export interface Mongodconfig36 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6";
  /** `storage` section of mongod configuration. */
  storage?: Mongodconfig36_Storage;
  /** `operationProfiling` section of mongod configuration. */
  operationProfiling?: Mongodconfig36_OperationProfiling;
  /** `net` section of mongod configuration. */
  net?: Mongodconfig36_Network;
}

export interface Mongodconfig36_Storage {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage";
  /** Configuration of the WiredTiger storage engine. */
  wiredTiger?: Mongodconfig36_Storage_WiredTiger;
  /** Configuration of the MongoDB [journal](https://docs.mongodb.com/v3.6/reference/glossary/#term-journal). */
  journal?: Mongodconfig36_Storage_Journal;
}

/** Configuration of WiredTiger storage engine. */
export interface Mongodconfig36_Storage_WiredTiger {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger";
  /** Engine configuration for WiredTiger. */
  engineConfig?: Mongodconfig36_Storage_WiredTiger_EngineConfig;
  /** Collection configuration for WiredTiger. */
  collectionConfig?: Mongodconfig36_Storage_WiredTiger_CollectionConfig;
}

export interface Mongodconfig36_Storage_WiredTiger_EngineConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger.EngineConfig";
  /** The maximum size of the internal cache that WiredTiger will use for all data. */
  cacheSizeGb?: number;
}

export interface Mongodconfig36_Storage_WiredTiger_CollectionConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger.CollectionConfig";
  /** Default type of compression to use for collection data. */
  blockCompressor: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor;
}

export enum Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor {
  COMPRESSOR_UNSPECIFIED = 0,
  /** NONE - No compression. */
  NONE = 1,
  /** SNAPPY - The [Snappy](https://docs.mongodb.com/v3.6/reference/glossary/#term-snappy) compression. */
  SNAPPY = 2,
  /** ZLIB - The [zlib](https://docs.mongodb.com/v3.6/reference/glossary/#term-zlib) compression. */
  ZLIB = 3,
  UNRECOGNIZED = -1,
}

export function mongodconfig36_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
  object: any
): Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor {
  switch (object) {
    case 0:
    case "COMPRESSOR_UNSPECIFIED":
      return Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED;
    case 1:
    case "NONE":
      return Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor.NONE;
    case 2:
    case "SNAPPY":
      return Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY;
    case 3:
    case "ZLIB":
      return Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED;
  }
}

export function mongodconfig36_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
  object: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor
): string {
  switch (object) {
    case Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED:
      return "COMPRESSOR_UNSPECIFIED";
    case Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor.NONE:
      return "NONE";
    case Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY:
      return "SNAPPY";
    case Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB:
      return "ZLIB";
    default:
      return "UNKNOWN";
  }
}

export interface Mongodconfig36_Storage_Journal {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.Journal";
  /**
   * Whether the journal is enabled or disabled.
   * Possible values:
   * * true (default) - the journal is enabled.
   * * false - the journal is disabled.
   */
  enabled?: boolean;
  /**
   * Commit interval between journal operations, in milliseconds.
   * Default: 100.
   */
  commitInterval?: number;
}

export interface Mongodconfig36_OperationProfiling {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.OperationProfiling";
  /** Mode which specifies operations that should be profiled. */
  mode: Mongodconfig36_OperationProfiling_Mode;
  /**
   * The slow operation time threshold, in milliseconds. Operations that run
   * for longer than this threshold are considered slow, and are processed by the profiler
   * running in the SLOW_OP mode.
   */
  slowOpThreshold?: number;
}

export enum Mongodconfig36_OperationProfiling_Mode {
  MODE_UNSPECIFIED = 0,
  /** OFF - The profiler is off and does not collect any data. */
  OFF = 1,
  /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
  SLOW_OP = 2,
  /** ALL - The profiler collects data for all operations. */
  ALL = 3,
  UNRECOGNIZED = -1,
}

export function mongodconfig36_OperationProfiling_ModeFromJSON(
  object: any
): Mongodconfig36_OperationProfiling_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return Mongodconfig36_OperationProfiling_Mode.MODE_UNSPECIFIED;
    case 1:
    case "OFF":
      return Mongodconfig36_OperationProfiling_Mode.OFF;
    case 2:
    case "SLOW_OP":
      return Mongodconfig36_OperationProfiling_Mode.SLOW_OP;
    case 3:
    case "ALL":
      return Mongodconfig36_OperationProfiling_Mode.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mongodconfig36_OperationProfiling_Mode.UNRECOGNIZED;
  }
}

export function mongodconfig36_OperationProfiling_ModeToJSON(
  object: Mongodconfig36_OperationProfiling_Mode
): string {
  switch (object) {
    case Mongodconfig36_OperationProfiling_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case Mongodconfig36_OperationProfiling_Mode.OFF:
      return "OFF";
    case Mongodconfig36_OperationProfiling_Mode.SLOW_OP:
      return "SLOW_OP";
    case Mongodconfig36_OperationProfiling_Mode.ALL:
      return "ALL";
    default:
      return "UNKNOWN";
  }
}

export interface Mongodconfig36_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Network";
  /** The maximum number of simultaneous connections that mongod will accept. */
  maxIncomingConnections?: number;
}

export interface Mongocfgconfig36 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6";
  /** `storage` section of mongocfg configuration. */
  storage?: Mongocfgconfig36_Storage;
  /** `operationProfiling` section of mongocfg configuration. */
  operationProfiling?: Mongocfgconfig36_OperationProfiling;
  /** `net` section of mongocfg configuration. */
  net?: Mongocfgconfig36_Network;
}

export interface Mongocfgconfig36_Storage {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage";
  /** Configuration of the WiredTiger storage engine. */
  wiredTiger?: Mongocfgconfig36_Storage_WiredTiger;
}

/** Configuration of WiredTiger storage engine. */
export interface Mongocfgconfig36_Storage_WiredTiger {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage.WiredTiger";
  /** Engine configuration for WiredTiger. */
  engineConfig?: Mongocfgconfig36_Storage_WiredTiger_EngineConfig;
}

export interface Mongocfgconfig36_Storage_WiredTiger_EngineConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage.WiredTiger.EngineConfig";
  /** The maximum size of the internal cache that WiredTiger will use for all data. */
  cacheSizeGb?: number;
}

export interface Mongocfgconfig36_OperationProfiling {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.OperationProfiling";
  /** Operation profiling level. For details, see [MongoDB documentation](https://docs.mongodb.com/v3.6/tutorial/manage-the-database-profiler/). */
  mode: Mongocfgconfig36_OperationProfiling_Mode;
  /**
   * The slow operation time threshold, in milliseconds. Operations that run
   * for longer than this threshold are considered slow, and are processed by the profiler
   * running in the SLOW_OP mode. For details see [MongoDB documentation](https://docs.mongodb.com/v3.6/reference/configuration-options/#operationProfiling.slowOpThresholdMs).
   */
  slowOpThreshold?: number;
}

export enum Mongocfgconfig36_OperationProfiling_Mode {
  MODE_UNSPECIFIED = 0,
  /**
   * OFF - The profiler is off and does not collect any data. This is the default
   * profiler level.
   */
  OFF = 1,
  /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
  SLOW_OP = 2,
  /** ALL - The profiler collects data for all operations. */
  ALL = 3,
  UNRECOGNIZED = -1,
}

export function mongocfgconfig36_OperationProfiling_ModeFromJSON(
  object: any
): Mongocfgconfig36_OperationProfiling_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return Mongocfgconfig36_OperationProfiling_Mode.MODE_UNSPECIFIED;
    case 1:
    case "OFF":
      return Mongocfgconfig36_OperationProfiling_Mode.OFF;
    case 2:
    case "SLOW_OP":
      return Mongocfgconfig36_OperationProfiling_Mode.SLOW_OP;
    case 3:
    case "ALL":
      return Mongocfgconfig36_OperationProfiling_Mode.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mongocfgconfig36_OperationProfiling_Mode.UNRECOGNIZED;
  }
}

export function mongocfgconfig36_OperationProfiling_ModeToJSON(
  object: Mongocfgconfig36_OperationProfiling_Mode
): string {
  switch (object) {
    case Mongocfgconfig36_OperationProfiling_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case Mongocfgconfig36_OperationProfiling_Mode.OFF:
      return "OFF";
    case Mongocfgconfig36_OperationProfiling_Mode.SLOW_OP:
      return "SLOW_OP";
    case Mongocfgconfig36_OperationProfiling_Mode.ALL:
      return "ALL";
    default:
      return "UNKNOWN";
  }
}

export interface Mongocfgconfig36_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Network";
  /** The maximum number of incoming connections. */
  maxIncomingConnections?: number;
}

export interface Mongosconfig36 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig3_6";
  /** Network settings for mongos. */
  net?: Mongosconfig36_Network;
}

export interface Mongosconfig36_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig3_6.Network";
  /** The maximum number of incoming connections. */
  maxIncomingConnections?: number;
}

export interface Mongodconfigset36 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet3_6";
  /**
   * Effective mongod settings for a MongoDB 3.6 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?: Mongodconfig36;
  /** User-defined mongod settings for a MongoDB 3.6 cluster. */
  userConfig?: Mongodconfig36;
  /** Default mongod configuration for a MongoDB 3.6 cluster. */
  defaultConfig?: Mongodconfig36;
}

export interface Mongocfgconfigset36 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet3_6";
  /**
   * Effective mongocfg settings for a MongoDB 3.6 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?: Mongocfgconfig36;
  /** User-defined mongocfg settings for a MongoDB 3.6 cluster. */
  userConfig?: Mongocfgconfig36;
  /** Default mongocfg configuration for a MongoDB 3.6 cluster. */
  defaultConfig?: Mongocfgconfig36;
}

export interface Mongosconfigset36 {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet3_6";
  /**
   * Effective settings for a MongoDB 3.6 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?: Mongosconfig36;
  /** User-defined settings for a MongoDB 3.6 cluster. */
  userConfig?: Mongosconfig36;
  /** Default configuration for a MongoDB 3.6 cluster. */
  defaultConfig?: Mongosconfig36;
}

const baseMongodconfig36: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6",
};

export const Mongodconfig36 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6" as const,

  encode(
    message: Mongodconfig36,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.storage !== undefined) {
      Mongodconfig36_Storage.encode(
        message.storage,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.operationProfiling !== undefined) {
      Mongodconfig36_OperationProfiling.encode(
        message.operationProfiling,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.net !== undefined) {
      Mongodconfig36_Network.encode(
        message.net,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig36 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodconfig36 } as Mongodconfig36;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storage = Mongodconfig36_Storage.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.operationProfiling = Mongodconfig36_OperationProfiling.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.net = Mongodconfig36_Network.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Mongodconfig36 {
    const message = { ...baseMongodconfig36 } as Mongodconfig36;
    message.storage =
      object.storage !== undefined && object.storage !== null
        ? Mongodconfig36_Storage.fromJSON(object.storage)
        : undefined;
    message.operationProfiling =
      object.operationProfiling !== undefined &&
      object.operationProfiling !== null
        ? Mongodconfig36_OperationProfiling.fromJSON(object.operationProfiling)
        : undefined;
    message.net =
      object.net !== undefined && object.net !== null
        ? Mongodconfig36_Network.fromJSON(object.net)
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfig36): unknown {
    const obj: any = {};
    message.storage !== undefined &&
      (obj.storage = message.storage
        ? Mongodconfig36_Storage.toJSON(message.storage)
        : undefined);
    message.operationProfiling !== undefined &&
      (obj.operationProfiling = message.operationProfiling
        ? Mongodconfig36_OperationProfiling.toJSON(message.operationProfiling)
        : undefined);
    message.net !== undefined &&
      (obj.net = message.net
        ? Mongodconfig36_Network.toJSON(message.net)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodconfig36>, I>>(
    object: I
  ): Mongodconfig36 {
    const message = { ...baseMongodconfig36 } as Mongodconfig36;
    message.storage =
      object.storage !== undefined && object.storage !== null
        ? Mongodconfig36_Storage.fromPartial(object.storage)
        : undefined;
    message.operationProfiling =
      object.operationProfiling !== undefined &&
      object.operationProfiling !== null
        ? Mongodconfig36_OperationProfiling.fromPartial(
            object.operationProfiling
          )
        : undefined;
    message.net =
      object.net !== undefined && object.net !== null
        ? Mongodconfig36_Network.fromPartial(object.net)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodconfig36.$type, Mongodconfig36);

const baseMongodconfig36_Storage: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage",
};

export const Mongodconfig36_Storage = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage" as const,

  encode(
    message: Mongodconfig36_Storage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.wiredTiger !== undefined) {
      Mongodconfig36_Storage_WiredTiger.encode(
        message.wiredTiger,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.journal !== undefined) {
      Mongodconfig36_Storage_Journal.encode(
        message.journal,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongodconfig36_Storage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodconfig36_Storage } as Mongodconfig36_Storage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wiredTiger = Mongodconfig36_Storage_WiredTiger.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.journal = Mongodconfig36_Storage_Journal.decode(
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

  fromJSON(object: any): Mongodconfig36_Storage {
    const message = { ...baseMongodconfig36_Storage } as Mongodconfig36_Storage;
    message.wiredTiger =
      object.wiredTiger !== undefined && object.wiredTiger !== null
        ? Mongodconfig36_Storage_WiredTiger.fromJSON(object.wiredTiger)
        : undefined;
    message.journal =
      object.journal !== undefined && object.journal !== null
        ? Mongodconfig36_Storage_Journal.fromJSON(object.journal)
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfig36_Storage): unknown {
    const obj: any = {};
    message.wiredTiger !== undefined &&
      (obj.wiredTiger = message.wiredTiger
        ? Mongodconfig36_Storage_WiredTiger.toJSON(message.wiredTiger)
        : undefined);
    message.journal !== undefined &&
      (obj.journal = message.journal
        ? Mongodconfig36_Storage_Journal.toJSON(message.journal)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodconfig36_Storage>, I>>(
    object: I
  ): Mongodconfig36_Storage {
    const message = { ...baseMongodconfig36_Storage } as Mongodconfig36_Storage;
    message.wiredTiger =
      object.wiredTiger !== undefined && object.wiredTiger !== null
        ? Mongodconfig36_Storage_WiredTiger.fromPartial(object.wiredTiger)
        : undefined;
    message.journal =
      object.journal !== undefined && object.journal !== null
        ? Mongodconfig36_Storage_Journal.fromPartial(object.journal)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodconfig36_Storage.$type, Mongodconfig36_Storage);

const baseMongodconfig36_Storage_WiredTiger: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger",
};

export const Mongodconfig36_Storage_WiredTiger = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger" as const,

  encode(
    message: Mongodconfig36_Storage_WiredTiger,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.engineConfig !== undefined) {
      Mongodconfig36_Storage_WiredTiger_EngineConfig.encode(
        message.engineConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.collectionConfig !== undefined) {
      Mongodconfig36_Storage_WiredTiger_CollectionConfig.encode(
        message.collectionConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongodconfig36_Storage_WiredTiger {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfig36_Storage_WiredTiger,
    } as Mongodconfig36_Storage_WiredTiger;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.engineConfig =
            Mongodconfig36_Storage_WiredTiger_EngineConfig.decode(
              reader,
              reader.uint32()
            );
          break;
        case 2:
          message.collectionConfig =
            Mongodconfig36_Storage_WiredTiger_CollectionConfig.decode(
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

  fromJSON(object: any): Mongodconfig36_Storage_WiredTiger {
    const message = {
      ...baseMongodconfig36_Storage_WiredTiger,
    } as Mongodconfig36_Storage_WiredTiger;
    message.engineConfig =
      object.engineConfig !== undefined && object.engineConfig !== null
        ? Mongodconfig36_Storage_WiredTiger_EngineConfig.fromJSON(
            object.engineConfig
          )
        : undefined;
    message.collectionConfig =
      object.collectionConfig !== undefined && object.collectionConfig !== null
        ? Mongodconfig36_Storage_WiredTiger_CollectionConfig.fromJSON(
            object.collectionConfig
          )
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfig36_Storage_WiredTiger): unknown {
    const obj: any = {};
    message.engineConfig !== undefined &&
      (obj.engineConfig = message.engineConfig
        ? Mongodconfig36_Storage_WiredTiger_EngineConfig.toJSON(
            message.engineConfig
          )
        : undefined);
    message.collectionConfig !== undefined &&
      (obj.collectionConfig = message.collectionConfig
        ? Mongodconfig36_Storage_WiredTiger_CollectionConfig.toJSON(
            message.collectionConfig
          )
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Mongodconfig36_Storage_WiredTiger>, I>
  >(object: I): Mongodconfig36_Storage_WiredTiger {
    const message = {
      ...baseMongodconfig36_Storage_WiredTiger,
    } as Mongodconfig36_Storage_WiredTiger;
    message.engineConfig =
      object.engineConfig !== undefined && object.engineConfig !== null
        ? Mongodconfig36_Storage_WiredTiger_EngineConfig.fromPartial(
            object.engineConfig
          )
        : undefined;
    message.collectionConfig =
      object.collectionConfig !== undefined && object.collectionConfig !== null
        ? Mongodconfig36_Storage_WiredTiger_CollectionConfig.fromPartial(
            object.collectionConfig
          )
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfig36_Storage_WiredTiger.$type,
  Mongodconfig36_Storage_WiredTiger
);

const baseMongodconfig36_Storage_WiredTiger_EngineConfig: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger.EngineConfig",
};

export const Mongodconfig36_Storage_WiredTiger_EngineConfig = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger.EngineConfig" as const,

  encode(
    message: Mongodconfig36_Storage_WiredTiger_EngineConfig,
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
  ): Mongodconfig36_Storage_WiredTiger_EngineConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfig36_Storage_WiredTiger_EngineConfig,
    } as Mongodconfig36_Storage_WiredTiger_EngineConfig;
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

  fromJSON(object: any): Mongodconfig36_Storage_WiredTiger_EngineConfig {
    const message = {
      ...baseMongodconfig36_Storage_WiredTiger_EngineConfig,
    } as Mongodconfig36_Storage_WiredTiger_EngineConfig;
    message.cacheSizeGb =
      object.cacheSizeGb !== undefined && object.cacheSizeGb !== null
        ? Number(object.cacheSizeGb)
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfig36_Storage_WiredTiger_EngineConfig): unknown {
    const obj: any = {};
    message.cacheSizeGb !== undefined &&
      (obj.cacheSizeGb = message.cacheSizeGb);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<Mongodconfig36_Storage_WiredTiger_EngineConfig>,
      I
    >
  >(object: I): Mongodconfig36_Storage_WiredTiger_EngineConfig {
    const message = {
      ...baseMongodconfig36_Storage_WiredTiger_EngineConfig,
    } as Mongodconfig36_Storage_WiredTiger_EngineConfig;
    message.cacheSizeGb = object.cacheSizeGb ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfig36_Storage_WiredTiger_EngineConfig.$type,
  Mongodconfig36_Storage_WiredTiger_EngineConfig
);

const baseMongodconfig36_Storage_WiredTiger_CollectionConfig: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger.CollectionConfig",
  blockCompressor: 0,
};

export const Mongodconfig36_Storage_WiredTiger_CollectionConfig = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger.CollectionConfig" as const,

  encode(
    message: Mongodconfig36_Storage_WiredTiger_CollectionConfig,
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
  ): Mongodconfig36_Storage_WiredTiger_CollectionConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfig36_Storage_WiredTiger_CollectionConfig,
    } as Mongodconfig36_Storage_WiredTiger_CollectionConfig;
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

  fromJSON(object: any): Mongodconfig36_Storage_WiredTiger_CollectionConfig {
    const message = {
      ...baseMongodconfig36_Storage_WiredTiger_CollectionConfig,
    } as Mongodconfig36_Storage_WiredTiger_CollectionConfig;
    message.blockCompressor =
      object.blockCompressor !== undefined && object.blockCompressor !== null
        ? mongodconfig36_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
            object.blockCompressor
          )
        : 0;
    return message;
  },

  toJSON(message: Mongodconfig36_Storage_WiredTiger_CollectionConfig): unknown {
    const obj: any = {};
    message.blockCompressor !== undefined &&
      (obj.blockCompressor =
        mongodconfig36_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
          message.blockCompressor
        ));
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<Mongodconfig36_Storage_WiredTiger_CollectionConfig>,
      I
    >
  >(object: I): Mongodconfig36_Storage_WiredTiger_CollectionConfig {
    const message = {
      ...baseMongodconfig36_Storage_WiredTiger_CollectionConfig,
    } as Mongodconfig36_Storage_WiredTiger_CollectionConfig;
    message.blockCompressor = object.blockCompressor ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfig36_Storage_WiredTiger_CollectionConfig.$type,
  Mongodconfig36_Storage_WiredTiger_CollectionConfig
);

const baseMongodconfig36_Storage_Journal: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.Journal",
};

export const Mongodconfig36_Storage_Journal = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.Journal" as const,

  encode(
    message: Mongodconfig36_Storage_Journal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enabled !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.enabled! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.commitInterval !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.commitInterval! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongodconfig36_Storage_Journal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfig36_Storage_Journal,
    } as Mongodconfig36_Storage_Journal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 2:
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

  fromJSON(object: any): Mongodconfig36_Storage_Journal {
    const message = {
      ...baseMongodconfig36_Storage_Journal,
    } as Mongodconfig36_Storage_Journal;
    message.enabled =
      object.enabled !== undefined && object.enabled !== null
        ? Boolean(object.enabled)
        : undefined;
    message.commitInterval =
      object.commitInterval !== undefined && object.commitInterval !== null
        ? Number(object.commitInterval)
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfig36_Storage_Journal): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.commitInterval !== undefined &&
      (obj.commitInterval = message.commitInterval);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodconfig36_Storage_Journal>, I>>(
    object: I
  ): Mongodconfig36_Storage_Journal {
    const message = {
      ...baseMongodconfig36_Storage_Journal,
    } as Mongodconfig36_Storage_Journal;
    message.enabled = object.enabled ?? undefined;
    message.commitInterval = object.commitInterval ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfig36_Storage_Journal.$type,
  Mongodconfig36_Storage_Journal
);

const baseMongodconfig36_OperationProfiling: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.OperationProfiling",
  mode: 0,
};

export const Mongodconfig36_OperationProfiling = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.OperationProfiling" as const,

  encode(
    message: Mongodconfig36_OperationProfiling,
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
  ): Mongodconfig36_OperationProfiling {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfig36_OperationProfiling,
    } as Mongodconfig36_OperationProfiling;
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

  fromJSON(object: any): Mongodconfig36_OperationProfiling {
    const message = {
      ...baseMongodconfig36_OperationProfiling,
    } as Mongodconfig36_OperationProfiling;
    message.mode =
      object.mode !== undefined && object.mode !== null
        ? mongodconfig36_OperationProfiling_ModeFromJSON(object.mode)
        : 0;
    message.slowOpThreshold =
      object.slowOpThreshold !== undefined && object.slowOpThreshold !== null
        ? Number(object.slowOpThreshold)
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfig36_OperationProfiling): unknown {
    const obj: any = {};
    message.mode !== undefined &&
      (obj.mode = mongodconfig36_OperationProfiling_ModeToJSON(message.mode));
    message.slowOpThreshold !== undefined &&
      (obj.slowOpThreshold = message.slowOpThreshold);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Mongodconfig36_OperationProfiling>, I>
  >(object: I): Mongodconfig36_OperationProfiling {
    const message = {
      ...baseMongodconfig36_OperationProfiling,
    } as Mongodconfig36_OperationProfiling;
    message.mode = object.mode ?? 0;
    message.slowOpThreshold = object.slowOpThreshold ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfig36_OperationProfiling.$type,
  Mongodconfig36_OperationProfiling
);

const baseMongodconfig36_Network: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Network",
};

export const Mongodconfig36_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Network" as const,

  encode(
    message: Mongodconfig36_Network,
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
  ): Mongodconfig36_Network {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodconfig36_Network } as Mongodconfig36_Network;
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

  fromJSON(object: any): Mongodconfig36_Network {
    const message = { ...baseMongodconfig36_Network } as Mongodconfig36_Network;
    message.maxIncomingConnections =
      object.maxIncomingConnections !== undefined &&
      object.maxIncomingConnections !== null
        ? Number(object.maxIncomingConnections)
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfig36_Network): unknown {
    const obj: any = {};
    message.maxIncomingConnections !== undefined &&
      (obj.maxIncomingConnections = message.maxIncomingConnections);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodconfig36_Network>, I>>(
    object: I
  ): Mongodconfig36_Network {
    const message = { ...baseMongodconfig36_Network } as Mongodconfig36_Network;
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodconfig36_Network.$type, Mongodconfig36_Network);

const baseMongocfgconfig36: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6",
};

export const Mongocfgconfig36 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6" as const,

  encode(
    message: Mongocfgconfig36,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.storage !== undefined) {
      Mongocfgconfig36_Storage.encode(
        message.storage,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.operationProfiling !== undefined) {
      Mongocfgconfig36_OperationProfiling.encode(
        message.operationProfiling,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.net !== undefined) {
      Mongocfgconfig36_Network.encode(
        message.net,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfig36 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongocfgconfig36 } as Mongocfgconfig36;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storage = Mongocfgconfig36_Storage.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.operationProfiling =
            Mongocfgconfig36_OperationProfiling.decode(reader, reader.uint32());
          break;
        case 3:
          message.net = Mongocfgconfig36_Network.decode(
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

  fromJSON(object: any): Mongocfgconfig36 {
    const message = { ...baseMongocfgconfig36 } as Mongocfgconfig36;
    message.storage =
      object.storage !== undefined && object.storage !== null
        ? Mongocfgconfig36_Storage.fromJSON(object.storage)
        : undefined;
    message.operationProfiling =
      object.operationProfiling !== undefined &&
      object.operationProfiling !== null
        ? Mongocfgconfig36_OperationProfiling.fromJSON(
            object.operationProfiling
          )
        : undefined;
    message.net =
      object.net !== undefined && object.net !== null
        ? Mongocfgconfig36_Network.fromJSON(object.net)
        : undefined;
    return message;
  },

  toJSON(message: Mongocfgconfig36): unknown {
    const obj: any = {};
    message.storage !== undefined &&
      (obj.storage = message.storage
        ? Mongocfgconfig36_Storage.toJSON(message.storage)
        : undefined);
    message.operationProfiling !== undefined &&
      (obj.operationProfiling = message.operationProfiling
        ? Mongocfgconfig36_OperationProfiling.toJSON(message.operationProfiling)
        : undefined);
    message.net !== undefined &&
      (obj.net = message.net
        ? Mongocfgconfig36_Network.toJSON(message.net)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongocfgconfig36>, I>>(
    object: I
  ): Mongocfgconfig36 {
    const message = { ...baseMongocfgconfig36 } as Mongocfgconfig36;
    message.storage =
      object.storage !== undefined && object.storage !== null
        ? Mongocfgconfig36_Storage.fromPartial(object.storage)
        : undefined;
    message.operationProfiling =
      object.operationProfiling !== undefined &&
      object.operationProfiling !== null
        ? Mongocfgconfig36_OperationProfiling.fromPartial(
            object.operationProfiling
          )
        : undefined;
    message.net =
      object.net !== undefined && object.net !== null
        ? Mongocfgconfig36_Network.fromPartial(object.net)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongocfgconfig36.$type, Mongocfgconfig36);

const baseMongocfgconfig36_Storage: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage",
};

export const Mongocfgconfig36_Storage = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage" as const,

  encode(
    message: Mongocfgconfig36_Storage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.wiredTiger !== undefined) {
      Mongocfgconfig36_Storage_WiredTiger.encode(
        message.wiredTiger,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongocfgconfig36_Storage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongocfgconfig36_Storage,
    } as Mongocfgconfig36_Storage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wiredTiger = Mongocfgconfig36_Storage_WiredTiger.decode(
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

  fromJSON(object: any): Mongocfgconfig36_Storage {
    const message = {
      ...baseMongocfgconfig36_Storage,
    } as Mongocfgconfig36_Storage;
    message.wiredTiger =
      object.wiredTiger !== undefined && object.wiredTiger !== null
        ? Mongocfgconfig36_Storage_WiredTiger.fromJSON(object.wiredTiger)
        : undefined;
    return message;
  },

  toJSON(message: Mongocfgconfig36_Storage): unknown {
    const obj: any = {};
    message.wiredTiger !== undefined &&
      (obj.wiredTiger = message.wiredTiger
        ? Mongocfgconfig36_Storage_WiredTiger.toJSON(message.wiredTiger)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongocfgconfig36_Storage>, I>>(
    object: I
  ): Mongocfgconfig36_Storage {
    const message = {
      ...baseMongocfgconfig36_Storage,
    } as Mongocfgconfig36_Storage;
    message.wiredTiger =
      object.wiredTiger !== undefined && object.wiredTiger !== null
        ? Mongocfgconfig36_Storage_WiredTiger.fromPartial(object.wiredTiger)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongocfgconfig36_Storage.$type,
  Mongocfgconfig36_Storage
);

const baseMongocfgconfig36_Storage_WiredTiger: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage.WiredTiger",
};

export const Mongocfgconfig36_Storage_WiredTiger = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage.WiredTiger" as const,

  encode(
    message: Mongocfgconfig36_Storage_WiredTiger,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.engineConfig !== undefined) {
      Mongocfgconfig36_Storage_WiredTiger_EngineConfig.encode(
        message.engineConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongocfgconfig36_Storage_WiredTiger {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongocfgconfig36_Storage_WiredTiger,
    } as Mongocfgconfig36_Storage_WiredTiger;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.engineConfig =
            Mongocfgconfig36_Storage_WiredTiger_EngineConfig.decode(
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

  fromJSON(object: any): Mongocfgconfig36_Storage_WiredTiger {
    const message = {
      ...baseMongocfgconfig36_Storage_WiredTiger,
    } as Mongocfgconfig36_Storage_WiredTiger;
    message.engineConfig =
      object.engineConfig !== undefined && object.engineConfig !== null
        ? Mongocfgconfig36_Storage_WiredTiger_EngineConfig.fromJSON(
            object.engineConfig
          )
        : undefined;
    return message;
  },

  toJSON(message: Mongocfgconfig36_Storage_WiredTiger): unknown {
    const obj: any = {};
    message.engineConfig !== undefined &&
      (obj.engineConfig = message.engineConfig
        ? Mongocfgconfig36_Storage_WiredTiger_EngineConfig.toJSON(
            message.engineConfig
          )
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Mongocfgconfig36_Storage_WiredTiger>, I>
  >(object: I): Mongocfgconfig36_Storage_WiredTiger {
    const message = {
      ...baseMongocfgconfig36_Storage_WiredTiger,
    } as Mongocfgconfig36_Storage_WiredTiger;
    message.engineConfig =
      object.engineConfig !== undefined && object.engineConfig !== null
        ? Mongocfgconfig36_Storage_WiredTiger_EngineConfig.fromPartial(
            object.engineConfig
          )
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongocfgconfig36_Storage_WiredTiger.$type,
  Mongocfgconfig36_Storage_WiredTiger
);

const baseMongocfgconfig36_Storage_WiredTiger_EngineConfig: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage.WiredTiger.EngineConfig",
};

export const Mongocfgconfig36_Storage_WiredTiger_EngineConfig = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage.WiredTiger.EngineConfig" as const,

  encode(
    message: Mongocfgconfig36_Storage_WiredTiger_EngineConfig,
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
  ): Mongocfgconfig36_Storage_WiredTiger_EngineConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongocfgconfig36_Storage_WiredTiger_EngineConfig,
    } as Mongocfgconfig36_Storage_WiredTiger_EngineConfig;
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

  fromJSON(object: any): Mongocfgconfig36_Storage_WiredTiger_EngineConfig {
    const message = {
      ...baseMongocfgconfig36_Storage_WiredTiger_EngineConfig,
    } as Mongocfgconfig36_Storage_WiredTiger_EngineConfig;
    message.cacheSizeGb =
      object.cacheSizeGb !== undefined && object.cacheSizeGb !== null
        ? Number(object.cacheSizeGb)
        : undefined;
    return message;
  },

  toJSON(message: Mongocfgconfig36_Storage_WiredTiger_EngineConfig): unknown {
    const obj: any = {};
    message.cacheSizeGb !== undefined &&
      (obj.cacheSizeGb = message.cacheSizeGb);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<Mongocfgconfig36_Storage_WiredTiger_EngineConfig>,
      I
    >
  >(object: I): Mongocfgconfig36_Storage_WiredTiger_EngineConfig {
    const message = {
      ...baseMongocfgconfig36_Storage_WiredTiger_EngineConfig,
    } as Mongocfgconfig36_Storage_WiredTiger_EngineConfig;
    message.cacheSizeGb = object.cacheSizeGb ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongocfgconfig36_Storage_WiredTiger_EngineConfig.$type,
  Mongocfgconfig36_Storage_WiredTiger_EngineConfig
);

const baseMongocfgconfig36_OperationProfiling: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.OperationProfiling",
  mode: 0,
};

export const Mongocfgconfig36_OperationProfiling = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.OperationProfiling" as const,

  encode(
    message: Mongocfgconfig36_OperationProfiling,
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
  ): Mongocfgconfig36_OperationProfiling {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongocfgconfig36_OperationProfiling,
    } as Mongocfgconfig36_OperationProfiling;
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

  fromJSON(object: any): Mongocfgconfig36_OperationProfiling {
    const message = {
      ...baseMongocfgconfig36_OperationProfiling,
    } as Mongocfgconfig36_OperationProfiling;
    message.mode =
      object.mode !== undefined && object.mode !== null
        ? mongocfgconfig36_OperationProfiling_ModeFromJSON(object.mode)
        : 0;
    message.slowOpThreshold =
      object.slowOpThreshold !== undefined && object.slowOpThreshold !== null
        ? Number(object.slowOpThreshold)
        : undefined;
    return message;
  },

  toJSON(message: Mongocfgconfig36_OperationProfiling): unknown {
    const obj: any = {};
    message.mode !== undefined &&
      (obj.mode = mongocfgconfig36_OperationProfiling_ModeToJSON(message.mode));
    message.slowOpThreshold !== undefined &&
      (obj.slowOpThreshold = message.slowOpThreshold);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Mongocfgconfig36_OperationProfiling>, I>
  >(object: I): Mongocfgconfig36_OperationProfiling {
    const message = {
      ...baseMongocfgconfig36_OperationProfiling,
    } as Mongocfgconfig36_OperationProfiling;
    message.mode = object.mode ?? 0;
    message.slowOpThreshold = object.slowOpThreshold ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongocfgconfig36_OperationProfiling.$type,
  Mongocfgconfig36_OperationProfiling
);

const baseMongocfgconfig36_Network: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Network",
};

export const Mongocfgconfig36_Network = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Network" as const,

  encode(
    message: Mongocfgconfig36_Network,
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
  ): Mongocfgconfig36_Network {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongocfgconfig36_Network,
    } as Mongocfgconfig36_Network;
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

  fromJSON(object: any): Mongocfgconfig36_Network {
    const message = {
      ...baseMongocfgconfig36_Network,
    } as Mongocfgconfig36_Network;
    message.maxIncomingConnections =
      object.maxIncomingConnections !== undefined &&
      object.maxIncomingConnections !== null
        ? Number(object.maxIncomingConnections)
        : undefined;
    return message;
  },

  toJSON(message: Mongocfgconfig36_Network): unknown {
    const obj: any = {};
    message.maxIncomingConnections !== undefined &&
      (obj.maxIncomingConnections = message.maxIncomingConnections);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongocfgconfig36_Network>, I>>(
    object: I
  ): Mongocfgconfig36_Network {
    const message = {
      ...baseMongocfgconfig36_Network,
    } as Mongocfgconfig36_Network;
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongocfgconfig36_Network.$type,
  Mongocfgconfig36_Network
);

const baseMongosconfig36: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig3_6",
};

export const Mongosconfig36 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig3_6" as const,

  encode(
    message: Mongosconfig36,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.net !== undefined) {
      Mongosconfig36_Network.encode(
        message.net,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongosconfig36 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongosconfig36 } as Mongosconfig36;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.net = Mongosconfig36_Network.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Mongosconfig36 {
    const message = { ...baseMongosconfig36 } as Mongosconfig36;
    message.net =
      object.net !== undefined && object.net !== null
        ? Mongosconfig36_Network.fromJSON(object.net)
        : undefined;
    return message;
  },

  toJSON(message: Mongosconfig36): unknown {
    const obj: any = {};
    message.net !== undefined &&
      (obj.net = message.net
        ? Mongosconfig36_Network.toJSON(message.net)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongosconfig36>, I>>(
    object: I
  ): Mongosconfig36 {
    const message = { ...baseMongosconfig36 } as Mongosconfig36;
    message.net =
      object.net !== undefined && object.net !== null
        ? Mongosconfig36_Network.fromPartial(object.net)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongosconfig36.$type, Mongosconfig36);

const baseMongosconfig36_Network: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig3_6.Network",
};

export const Mongosconfig36_Network = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig3_6.Network" as const,

  encode(
    message: Mongosconfig36_Network,
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
  ): Mongosconfig36_Network {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongosconfig36_Network } as Mongosconfig36_Network;
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

  fromJSON(object: any): Mongosconfig36_Network {
    const message = { ...baseMongosconfig36_Network } as Mongosconfig36_Network;
    message.maxIncomingConnections =
      object.maxIncomingConnections !== undefined &&
      object.maxIncomingConnections !== null
        ? Number(object.maxIncomingConnections)
        : undefined;
    return message;
  },

  toJSON(message: Mongosconfig36_Network): unknown {
    const obj: any = {};
    message.maxIncomingConnections !== undefined &&
      (obj.maxIncomingConnections = message.maxIncomingConnections);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongosconfig36_Network>, I>>(
    object: I
  ): Mongosconfig36_Network {
    const message = { ...baseMongosconfig36_Network } as Mongosconfig36_Network;
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongosconfig36_Network.$type, Mongosconfig36_Network);

const baseMongodconfigset36: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet3_6",
};

export const Mongodconfigset36 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet3_6" as const,

  encode(
    message: Mongodconfigset36,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      Mongodconfig36.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      Mongodconfig36.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      Mongodconfig36.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfigset36 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongodconfigset36 } as Mongodconfigset36;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = Mongodconfig36.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = Mongodconfig36.decode(reader, reader.uint32());
          break;
        case 3:
          message.defaultConfig = Mongodconfig36.decode(
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

  fromJSON(object: any): Mongodconfigset36 {
    const message = { ...baseMongodconfigset36 } as Mongodconfigset36;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Mongodconfig36.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Mongodconfig36.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Mongodconfig36.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfigset36): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? Mongodconfig36.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? Mongodconfig36.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? Mongodconfig36.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodconfigset36>, I>>(
    object: I
  ): Mongodconfigset36 {
    const message = { ...baseMongodconfigset36 } as Mongodconfigset36;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Mongodconfig36.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Mongodconfig36.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Mongodconfig36.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongodconfigset36.$type, Mongodconfigset36);

const baseMongocfgconfigset36: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet3_6",
};

export const Mongocfgconfigset36 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet3_6" as const,

  encode(
    message: Mongocfgconfigset36,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      Mongocfgconfig36.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      Mongocfgconfig36.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      Mongocfgconfig36.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfigset36 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongocfgconfigset36 } as Mongocfgconfigset36;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = Mongocfgconfig36.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = Mongocfgconfig36.decode(reader, reader.uint32());
          break;
        case 3:
          message.defaultConfig = Mongocfgconfig36.decode(
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

  fromJSON(object: any): Mongocfgconfigset36 {
    const message = { ...baseMongocfgconfigset36 } as Mongocfgconfigset36;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Mongocfgconfig36.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Mongocfgconfig36.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Mongocfgconfig36.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: Mongocfgconfigset36): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? Mongocfgconfig36.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? Mongocfgconfig36.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? Mongocfgconfig36.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongocfgconfigset36>, I>>(
    object: I
  ): Mongocfgconfigset36 {
    const message = { ...baseMongocfgconfigset36 } as Mongocfgconfigset36;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Mongocfgconfig36.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Mongocfgconfig36.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Mongocfgconfig36.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongocfgconfigset36.$type, Mongocfgconfigset36);

const baseMongosconfigset36: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet3_6",
};

export const Mongosconfigset36 = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet3_6" as const,

  encode(
    message: Mongosconfigset36,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      Mongosconfig36.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      Mongosconfig36.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      Mongosconfig36.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mongosconfigset36 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongosconfigset36 } as Mongosconfigset36;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = Mongosconfig36.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = Mongosconfig36.decode(reader, reader.uint32());
          break;
        case 3:
          message.defaultConfig = Mongosconfig36.decode(
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

  fromJSON(object: any): Mongosconfigset36 {
    const message = { ...baseMongosconfigset36 } as Mongosconfigset36;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Mongosconfig36.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Mongosconfig36.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Mongosconfig36.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: Mongosconfigset36): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? Mongosconfig36.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? Mongosconfig36.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? Mongosconfig36.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongosconfigset36>, I>>(
    object: I
  ): Mongosconfigset36 {
    const message = { ...baseMongosconfigset36 } as Mongosconfigset36;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Mongosconfig36.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Mongosconfig36.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Mongosconfig36.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Mongosconfigset36.$type, Mongosconfigset36);

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
