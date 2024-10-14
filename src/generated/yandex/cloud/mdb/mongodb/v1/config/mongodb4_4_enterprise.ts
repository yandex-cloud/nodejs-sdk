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
 * options described in [MongoDB documentation](https://docs.mongodb.com/v4.4/reference/configuration-options/).
 */
export interface Mongodconfig44Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise";
  /** `storage` section of mongod configuration. */
  storage?: Mongodconfig44Enterprise_Storage;
  /** `operationProfiling` section of mongod configuration. */
  operationProfiling?: Mongodconfig44Enterprise_OperationProfiling;
  /** `net` section of mongod configuration. */
  net?: Mongodconfig44Enterprise_Network;
  /** `security` section of mongod configuration. */
  security?: Mongodconfig44Enterprise_Security;
  /** `AuditLog` section of mongod configuration. */
  auditLog?: Mongodconfig44Enterprise_AuditLog;
  /** `SetParameter` section of mongod configuration. */
  setParameter?: Mongodconfig44Enterprise_SetParameter;
}

export interface Mongodconfig44Enterprise_Storage {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage";
  /** Configuration of the WiredTiger storage engine. */
  wiredTiger?: Mongodconfig44Enterprise_Storage_WiredTiger;
  /** Configuration of the MongoDB [journal](https://docs.mongodb.com/v4.4/reference/glossary/#term-journal). */
  journal?: Mongodconfig44Enterprise_Storage_Journal;
}

/** Configuration of WiredTiger storage engine. */
export interface Mongodconfig44Enterprise_Storage_WiredTiger {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger";
  /** Engine configuration for WiredTiger. */
  engineConfig?: Mongodconfig44Enterprise_Storage_WiredTiger_EngineConfig;
  /** Collection configuration for WiredTiger. */
  collectionConfig?: Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig;
  /** Index configuration for WiredTiger */
  indexConfig?: Mongodconfig44Enterprise_Storage_WiredTiger_IndexConfig;
}

export interface Mongodconfig44Enterprise_Storage_WiredTiger_EngineConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger.EngineConfig";
  /** The maximum size of the internal cache that WiredTiger will use for all data. */
  cacheSizeGb?: number;
}

export interface Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger.CollectionConfig";
  /** Default type of compression to use for collection data. */
  blockCompressor: Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor;
}

export enum Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor {
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

export function mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
  object: any
): Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor {
  switch (object) {
    case 0:
    case "COMPRESSOR_UNSPECIFIED":
      return Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED;
    case 1:
    case "NONE":
      return Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.NONE;
    case 2:
    case "SNAPPY":
      return Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY;
    case 3:
    case "ZLIB":
      return Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB;
    case 4:
    case "ZSTD":
      return Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED;
  }
}

export function mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
  object: Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor
): string {
  switch (object) {
    case Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED:
      return "COMPRESSOR_UNSPECIFIED";
    case Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.NONE:
      return "NONE";
    case Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY:
      return "SNAPPY";
    case Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB:
      return "ZLIB";
    case Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD:
      return "ZSTD";
    default:
      return "UNKNOWN";
  }
}

export interface Mongodconfig44Enterprise_Storage_WiredTiger_IndexConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger.IndexConfig";
  /** Enables or disables [prefix compression](https://www.mongodb.com/docs/manual/reference/glossary/#std-term-prefix-compression) */
  prefixCompression?: boolean;
}

export interface Mongodconfig44Enterprise_Storage_Journal {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.Journal";
  /**
   * Commit interval between journal operations, in milliseconds.
   * Default: 100.
   */
  commitInterval?: number;
}

export interface Mongodconfig44Enterprise_OperationProfiling {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.OperationProfiling";
  /** Mode which specifies operations that should be profiled. */
  mode: Mongodconfig44Enterprise_OperationProfiling_Mode;
  /**
   * The slow operation time threshold, in milliseconds. Operations that run
   * for longer than this threshold are considered slow, and are processed by the profiler
   * running in the SLOW_OP mode.
   */
  slowOpThreshold?: number;
  /**
   * The fraction of slow operations that should be profiled or logged.
   * operationProfiling.slowOpSampleRate accepts values between 0 and 1, inclusive.
   */
  slowOpSampleRate?: number;
}

export enum Mongodconfig44Enterprise_OperationProfiling_Mode {
  MODE_UNSPECIFIED = 0,
  /** OFF - The profiler is off and does not collect any data. */
  OFF = 1,
  /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
  SLOW_OP = 2,
  /** ALL - The profiler collects data for all operations. */
  ALL = 3,
  UNRECOGNIZED = -1,
}

export function mongodconfig44Enterprise_OperationProfiling_ModeFromJSON(
  object: any
): Mongodconfig44Enterprise_OperationProfiling_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return Mongodconfig44Enterprise_OperationProfiling_Mode.MODE_UNSPECIFIED;
    case 1:
    case "OFF":
      return Mongodconfig44Enterprise_OperationProfiling_Mode.OFF;
    case 2:
    case "SLOW_OP":
      return Mongodconfig44Enterprise_OperationProfiling_Mode.SLOW_OP;
    case 3:
    case "ALL":
      return Mongodconfig44Enterprise_OperationProfiling_Mode.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mongodconfig44Enterprise_OperationProfiling_Mode.UNRECOGNIZED;
  }
}

export function mongodconfig44Enterprise_OperationProfiling_ModeToJSON(
  object: Mongodconfig44Enterprise_OperationProfiling_Mode
): string {
  switch (object) {
    case Mongodconfig44Enterprise_OperationProfiling_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case Mongodconfig44Enterprise_OperationProfiling_Mode.OFF:
      return "OFF";
    case Mongodconfig44Enterprise_OperationProfiling_Mode.SLOW_OP:
      return "SLOW_OP";
    case Mongodconfig44Enterprise_OperationProfiling_Mode.ALL:
      return "ALL";
    default:
      return "UNKNOWN";
  }
}

export interface Mongodconfig44Enterprise_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Network";
  /** The maximum number of simultaneous connections that mongod will accept. */
  maxIncomingConnections?: number;
  /** Compression settings */
  compression?: Mongodconfig44Enterprise_Network_Compression;
}

export interface Mongodconfig44Enterprise_Network_Compression {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Network.Compression";
  /**
   * Specifies the default compressor(s) to use for communication between this mongod or mongos instance and:
   * - other members of the deployment if the instance is part of a replica set or a sharded cluster
   * - mongosh
   * - drivers that support the OP_COMPRESSED message format.
   * MongoDB supports the following compressors:
   */
  compressors: Mongodconfig44Enterprise_Network_Compression_Compressor[];
}

export enum Mongodconfig44Enterprise_Network_Compression_Compressor {
  COMPRESSOR_UNSPECIFIED = 0,
  /** SNAPPY - The [Snappy](https://docs.mongodb.com/v4.2/reference/glossary/#term-snappy) compression. */
  SNAPPY = 1,
  /** ZLIB - The [zlib](https://docs.mongodb.com/v4.2/reference/glossary/#term-zlib) compression. */
  ZLIB = 2,
  /** ZSTD - The [zstd](https://docs.mongodb.com/v4.2/reference/glossary/#term-zstd) compression. */
  ZSTD = 3,
  /** DISABLED - No compression */
  DISABLED = 4,
  UNRECOGNIZED = -1,
}

export function mongodconfig44Enterprise_Network_Compression_CompressorFromJSON(
  object: any
): Mongodconfig44Enterprise_Network_Compression_Compressor {
  switch (object) {
    case 0:
    case "COMPRESSOR_UNSPECIFIED":
      return Mongodconfig44Enterprise_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED;
    case 1:
    case "SNAPPY":
      return Mongodconfig44Enterprise_Network_Compression_Compressor.SNAPPY;
    case 2:
    case "ZLIB":
      return Mongodconfig44Enterprise_Network_Compression_Compressor.ZLIB;
    case 3:
    case "ZSTD":
      return Mongodconfig44Enterprise_Network_Compression_Compressor.ZSTD;
    case 4:
    case "DISABLED":
      return Mongodconfig44Enterprise_Network_Compression_Compressor.DISABLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mongodconfig44Enterprise_Network_Compression_Compressor.UNRECOGNIZED;
  }
}

export function mongodconfig44Enterprise_Network_Compression_CompressorToJSON(
  object: Mongodconfig44Enterprise_Network_Compression_Compressor
): string {
  switch (object) {
    case Mongodconfig44Enterprise_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED:
      return "COMPRESSOR_UNSPECIFIED";
    case Mongodconfig44Enterprise_Network_Compression_Compressor.SNAPPY:
      return "SNAPPY";
    case Mongodconfig44Enterprise_Network_Compression_Compressor.ZLIB:
      return "ZLIB";
    case Mongodconfig44Enterprise_Network_Compression_Compressor.ZSTD:
      return "ZSTD";
    case Mongodconfig44Enterprise_Network_Compression_Compressor.DISABLED:
      return "DISABLED";
    default:
      return "UNKNOWN";
  }
}

export interface Mongodconfig44Enterprise_Security {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Security";
  /** If encryption at rest should be enabled or not */
  enableEncryption?: boolean;
  /** `kmip` section of mongod security config */
  kmip?: Mongodconfig44Enterprise_Security_KMIP;
}

export interface Mongodconfig44Enterprise_Security_KMIP {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Security.KMIP";
  /** KMIP server name */
  serverName: string;
  /** KMIP server port */
  port?: number;
  /** KMIP Server CA */
  serverCa: string;
  /** KMIP client certificate + private key (unencrypted) */
  clientCertificate: string;
  /** KMIP Key identifier (if any) */
  keyIdentifier: string;
}

export interface Mongodconfig44Enterprise_AuditLog {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.AuditLog";
  /** Audit filter */
  filter: string;
}

export interface Mongodconfig44Enterprise_SetParameter {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.SetParameter";
  /** Enables the auditing of authorization successes */
  auditAuthorizationSuccess?: boolean;
  /**
   * Enables or disables the mechanism that controls the rate at which the primary applies its writes with the
   * goal of keeping the secondary members [majority committed](https://www.mongodb.com/docs/v4.2/reference/command/replSetGetStatus/#replSetGetStatus.optimes.lastCommittedOpTime)
   * lag under a configurable maximum value.
   */
  enableFlowControl?: boolean;
}

export interface Mongocfgconfig44Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise";
  /** `storage` section of mongocfg configuration. */
  storage?: Mongocfgconfig44Enterprise_Storage;
  /** `operationProfiling` section of mongocfg configuration. */
  operationProfiling?: Mongocfgconfig44Enterprise_OperationProfiling;
  /** `net` section of mongocfg configuration. */
  net?: Mongocfgconfig44Enterprise_Network;
}

export interface Mongocfgconfig44Enterprise_Storage {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Storage";
  /** Configuration of the WiredTiger storage engine. */
  wiredTiger?: Mongocfgconfig44Enterprise_Storage_WiredTiger;
}

/** Configuration of WiredTiger storage engine. */
export interface Mongocfgconfig44Enterprise_Storage_WiredTiger {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Storage.WiredTiger";
  /** Engine configuration for WiredTiger. */
  engineConfig?: Mongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig;
}

export interface Mongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Storage.WiredTiger.EngineConfig";
  /** The maximum size of the internal cache that WiredTiger will use for all data. */
  cacheSizeGb?: number;
}

export interface Mongocfgconfig44Enterprise_OperationProfiling {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.OperationProfiling";
  /** Mode which specifies operations that should be profiled. */
  mode: Mongocfgconfig44Enterprise_OperationProfiling_Mode;
  /**
   * The slow operation time threshold, in milliseconds. Operations that run
   * for longer than this threshold are considered slow, and are processed by the profiler
   * running in the SLOW_OP mode. For details see [MongoDB documentation](https://docs.mongodb.com/v4.4/reference/configuration-options/#operationProfiling.slowOpThresholdMs).
   */
  slowOpThreshold?: number;
}

export enum Mongocfgconfig44Enterprise_OperationProfiling_Mode {
  MODE_UNSPECIFIED = 0,
  /** OFF - The profiler is off and does not collect any data. */
  OFF = 1,
  /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
  SLOW_OP = 2,
  /** ALL - The profiler collects data for all operations. */
  ALL = 3,
  UNRECOGNIZED = -1,
}

export function mongocfgconfig44Enterprise_OperationProfiling_ModeFromJSON(
  object: any
): Mongocfgconfig44Enterprise_OperationProfiling_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return Mongocfgconfig44Enterprise_OperationProfiling_Mode.MODE_UNSPECIFIED;
    case 1:
    case "OFF":
      return Mongocfgconfig44Enterprise_OperationProfiling_Mode.OFF;
    case 2:
    case "SLOW_OP":
      return Mongocfgconfig44Enterprise_OperationProfiling_Mode.SLOW_OP;
    case 3:
    case "ALL":
      return Mongocfgconfig44Enterprise_OperationProfiling_Mode.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mongocfgconfig44Enterprise_OperationProfiling_Mode.UNRECOGNIZED;
  }
}

export function mongocfgconfig44Enterprise_OperationProfiling_ModeToJSON(
  object: Mongocfgconfig44Enterprise_OperationProfiling_Mode
): string {
  switch (object) {
    case Mongocfgconfig44Enterprise_OperationProfiling_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case Mongocfgconfig44Enterprise_OperationProfiling_Mode.OFF:
      return "OFF";
    case Mongocfgconfig44Enterprise_OperationProfiling_Mode.SLOW_OP:
      return "SLOW_OP";
    case Mongocfgconfig44Enterprise_OperationProfiling_Mode.ALL:
      return "ALL";
    default:
      return "UNKNOWN";
  }
}

export interface Mongocfgconfig44Enterprise_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Network";
  /** The maximum number of simultaneous connections that mongocfg will accept. */
  maxIncomingConnections?: number;
}

export interface Mongosconfig44Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4_enterprise";
  /** Network settings for mongos. */
  net?: Mongosconfig44Enterprise_Network;
}

export interface Mongosconfig44Enterprise_Network {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4_enterprise.Network";
  /** The maximum number of simultaneous connections that mongos will accept. */
  maxIncomingConnections?: number;
  /** Compression settings */
  compression?: Mongosconfig44Enterprise_Network_Compression;
}

export interface Mongosconfig44Enterprise_Network_Compression {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4_enterprise.Network.Compression";
  /**
   * Specifies the default compressor(s) to use for communication between this mongod or mongos instance and:
   * - other members of the deployment if the instance is part of a replica set or a sharded cluster
   * - mongosh
   * - drivers that support the OP_COMPRESSED message format.
   * MongoDB supports the following compressors:
   */
  compressors: Mongosconfig44Enterprise_Network_Compression_Compressor[];
}

export enum Mongosconfig44Enterprise_Network_Compression_Compressor {
  COMPRESSOR_UNSPECIFIED = 0,
  /** SNAPPY - The [Snappy](https://docs.mongodb.com/v4.2/reference/glossary/#term-snappy) compression. */
  SNAPPY = 1,
  /** ZLIB - The [zlib](https://docs.mongodb.com/v4.2/reference/glossary/#term-zlib) compression. */
  ZLIB = 2,
  /** ZSTD - The [zstd](https://docs.mongodb.com/v4.2/reference/glossary/#term-zstd) compression. */
  ZSTD = 3,
  /** DISABLED - No compression */
  DISABLED = 4,
  UNRECOGNIZED = -1,
}

export function mongosconfig44Enterprise_Network_Compression_CompressorFromJSON(
  object: any
): Mongosconfig44Enterprise_Network_Compression_Compressor {
  switch (object) {
    case 0:
    case "COMPRESSOR_UNSPECIFIED":
      return Mongosconfig44Enterprise_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED;
    case 1:
    case "SNAPPY":
      return Mongosconfig44Enterprise_Network_Compression_Compressor.SNAPPY;
    case 2:
    case "ZLIB":
      return Mongosconfig44Enterprise_Network_Compression_Compressor.ZLIB;
    case 3:
    case "ZSTD":
      return Mongosconfig44Enterprise_Network_Compression_Compressor.ZSTD;
    case 4:
    case "DISABLED":
      return Mongosconfig44Enterprise_Network_Compression_Compressor.DISABLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mongosconfig44Enterprise_Network_Compression_Compressor.UNRECOGNIZED;
  }
}

export function mongosconfig44Enterprise_Network_Compression_CompressorToJSON(
  object: Mongosconfig44Enterprise_Network_Compression_Compressor
): string {
  switch (object) {
    case Mongosconfig44Enterprise_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED:
      return "COMPRESSOR_UNSPECIFIED";
    case Mongosconfig44Enterprise_Network_Compression_Compressor.SNAPPY:
      return "SNAPPY";
    case Mongosconfig44Enterprise_Network_Compression_Compressor.ZLIB:
      return "ZLIB";
    case Mongosconfig44Enterprise_Network_Compression_Compressor.ZSTD:
      return "ZSTD";
    case Mongosconfig44Enterprise_Network_Compression_Compressor.DISABLED:
      return "DISABLED";
    default:
      return "UNKNOWN";
  }
}

export interface Mongodconfigset44Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_4_enterprise";
  /**
   * Effective mongod settings for a MongoDB 4.4 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?: Mongodconfig44Enterprise;
  /** User-defined mongod settings for a MongoDB 4.4 cluster. */
  userConfig?: Mongodconfig44Enterprise;
  /** Default mongod configuration for a MongoDB 4.4 cluster. */
  defaultConfig?: Mongodconfig44Enterprise;
}

export interface Mongocfgconfigset44Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_4_enterprise";
  /**
   * Effective mongocfg settings for a MongoDB 4.4 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?: Mongocfgconfig44Enterprise;
  /** User-defined mongocfg settings for a MongoDB 4.4 cluster. */
  userConfig?: Mongocfgconfig44Enterprise;
  /** Default mongocfg configuration for a MongoDB 4.4 cluster. */
  defaultConfig?: Mongocfgconfig44Enterprise;
}

export interface Mongosconfigset44Enterprise {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_4_enterprise";
  /**
   * Effective mongos settings for a MongoDB 4.4 cluster (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?: Mongosconfig44Enterprise;
  /** User-defined mongos settings for a MongoDB 4.4 cluster. */
  userConfig?: Mongosconfig44Enterprise;
  /** Default mongos configuration for a MongoDB 4.4 cluster. */
  defaultConfig?: Mongosconfig44Enterprise;
}

const baseMongodconfig44Enterprise: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise",
};

export const Mongodconfig44Enterprise = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise" as const,

  encode(
    message: Mongodconfig44Enterprise,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.storage !== undefined) {
      Mongodconfig44Enterprise_Storage.encode(
        message.storage,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.operationProfiling !== undefined) {
      Mongodconfig44Enterprise_OperationProfiling.encode(
        message.operationProfiling,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.net !== undefined) {
      Mongodconfig44Enterprise_Network.encode(
        message.net,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.security !== undefined) {
      Mongodconfig44Enterprise_Security.encode(
        message.security,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.auditLog !== undefined) {
      Mongodconfig44Enterprise_AuditLog.encode(
        message.auditLog,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.setParameter !== undefined) {
      Mongodconfig44Enterprise_SetParameter.encode(
        message.setParameter,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongodconfig44Enterprise {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfig44Enterprise,
    } as Mongodconfig44Enterprise;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storage = Mongodconfig44Enterprise_Storage.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.operationProfiling =
            Mongodconfig44Enterprise_OperationProfiling.decode(
              reader,
              reader.uint32()
            );
          break;
        case 3:
          message.net = Mongodconfig44Enterprise_Network.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.security = Mongodconfig44Enterprise_Security.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.auditLog = Mongodconfig44Enterprise_AuditLog.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.setParameter = Mongodconfig44Enterprise_SetParameter.decode(
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

  fromJSON(object: any): Mongodconfig44Enterprise {
    const message = {
      ...baseMongodconfig44Enterprise,
    } as Mongodconfig44Enterprise;
    message.storage =
      object.storage !== undefined && object.storage !== null
        ? Mongodconfig44Enterprise_Storage.fromJSON(object.storage)
        : undefined;
    message.operationProfiling =
      object.operationProfiling !== undefined &&
      object.operationProfiling !== null
        ? Mongodconfig44Enterprise_OperationProfiling.fromJSON(
            object.operationProfiling
          )
        : undefined;
    message.net =
      object.net !== undefined && object.net !== null
        ? Mongodconfig44Enterprise_Network.fromJSON(object.net)
        : undefined;
    message.security =
      object.security !== undefined && object.security !== null
        ? Mongodconfig44Enterprise_Security.fromJSON(object.security)
        : undefined;
    message.auditLog =
      object.auditLog !== undefined && object.auditLog !== null
        ? Mongodconfig44Enterprise_AuditLog.fromJSON(object.auditLog)
        : undefined;
    message.setParameter =
      object.setParameter !== undefined && object.setParameter !== null
        ? Mongodconfig44Enterprise_SetParameter.fromJSON(object.setParameter)
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfig44Enterprise): unknown {
    const obj: any = {};
    message.storage !== undefined &&
      (obj.storage = message.storage
        ? Mongodconfig44Enterprise_Storage.toJSON(message.storage)
        : undefined);
    message.operationProfiling !== undefined &&
      (obj.operationProfiling = message.operationProfiling
        ? Mongodconfig44Enterprise_OperationProfiling.toJSON(
            message.operationProfiling
          )
        : undefined);
    message.net !== undefined &&
      (obj.net = message.net
        ? Mongodconfig44Enterprise_Network.toJSON(message.net)
        : undefined);
    message.security !== undefined &&
      (obj.security = message.security
        ? Mongodconfig44Enterprise_Security.toJSON(message.security)
        : undefined);
    message.auditLog !== undefined &&
      (obj.auditLog = message.auditLog
        ? Mongodconfig44Enterprise_AuditLog.toJSON(message.auditLog)
        : undefined);
    message.setParameter !== undefined &&
      (obj.setParameter = message.setParameter
        ? Mongodconfig44Enterprise_SetParameter.toJSON(message.setParameter)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodconfig44Enterprise>, I>>(
    object: I
  ): Mongodconfig44Enterprise {
    const message = {
      ...baseMongodconfig44Enterprise,
    } as Mongodconfig44Enterprise;
    message.storage =
      object.storage !== undefined && object.storage !== null
        ? Mongodconfig44Enterprise_Storage.fromPartial(object.storage)
        : undefined;
    message.operationProfiling =
      object.operationProfiling !== undefined &&
      object.operationProfiling !== null
        ? Mongodconfig44Enterprise_OperationProfiling.fromPartial(
            object.operationProfiling
          )
        : undefined;
    message.net =
      object.net !== undefined && object.net !== null
        ? Mongodconfig44Enterprise_Network.fromPartial(object.net)
        : undefined;
    message.security =
      object.security !== undefined && object.security !== null
        ? Mongodconfig44Enterprise_Security.fromPartial(object.security)
        : undefined;
    message.auditLog =
      object.auditLog !== undefined && object.auditLog !== null
        ? Mongodconfig44Enterprise_AuditLog.fromPartial(object.auditLog)
        : undefined;
    message.setParameter =
      object.setParameter !== undefined && object.setParameter !== null
        ? Mongodconfig44Enterprise_SetParameter.fromPartial(object.setParameter)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfig44Enterprise.$type,
  Mongodconfig44Enterprise
);

const baseMongodconfig44Enterprise_Storage: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage",
};

export const Mongodconfig44Enterprise_Storage = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage" as const,

  encode(
    message: Mongodconfig44Enterprise_Storage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.wiredTiger !== undefined) {
      Mongodconfig44Enterprise_Storage_WiredTiger.encode(
        message.wiredTiger,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.journal !== undefined) {
      Mongodconfig44Enterprise_Storage_Journal.encode(
        message.journal,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongodconfig44Enterprise_Storage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfig44Enterprise_Storage,
    } as Mongodconfig44Enterprise_Storage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wiredTiger =
            Mongodconfig44Enterprise_Storage_WiredTiger.decode(
              reader,
              reader.uint32()
            );
          break;
        case 2:
          message.journal = Mongodconfig44Enterprise_Storage_Journal.decode(
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

  fromJSON(object: any): Mongodconfig44Enterprise_Storage {
    const message = {
      ...baseMongodconfig44Enterprise_Storage,
    } as Mongodconfig44Enterprise_Storage;
    message.wiredTiger =
      object.wiredTiger !== undefined && object.wiredTiger !== null
        ? Mongodconfig44Enterprise_Storage_WiredTiger.fromJSON(
            object.wiredTiger
          )
        : undefined;
    message.journal =
      object.journal !== undefined && object.journal !== null
        ? Mongodconfig44Enterprise_Storage_Journal.fromJSON(object.journal)
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfig44Enterprise_Storage): unknown {
    const obj: any = {};
    message.wiredTiger !== undefined &&
      (obj.wiredTiger = message.wiredTiger
        ? Mongodconfig44Enterprise_Storage_WiredTiger.toJSON(message.wiredTiger)
        : undefined);
    message.journal !== undefined &&
      (obj.journal = message.journal
        ? Mongodconfig44Enterprise_Storage_Journal.toJSON(message.journal)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Mongodconfig44Enterprise_Storage>, I>
  >(object: I): Mongodconfig44Enterprise_Storage {
    const message = {
      ...baseMongodconfig44Enterprise_Storage,
    } as Mongodconfig44Enterprise_Storage;
    message.wiredTiger =
      object.wiredTiger !== undefined && object.wiredTiger !== null
        ? Mongodconfig44Enterprise_Storage_WiredTiger.fromPartial(
            object.wiredTiger
          )
        : undefined;
    message.journal =
      object.journal !== undefined && object.journal !== null
        ? Mongodconfig44Enterprise_Storage_Journal.fromPartial(object.journal)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfig44Enterprise_Storage.$type,
  Mongodconfig44Enterprise_Storage
);

const baseMongodconfig44Enterprise_Storage_WiredTiger: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger",
};

export const Mongodconfig44Enterprise_Storage_WiredTiger = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger" as const,

  encode(
    message: Mongodconfig44Enterprise_Storage_WiredTiger,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.engineConfig !== undefined) {
      Mongodconfig44Enterprise_Storage_WiredTiger_EngineConfig.encode(
        message.engineConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.collectionConfig !== undefined) {
      Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig.encode(
        message.collectionConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.indexConfig !== undefined) {
      Mongodconfig44Enterprise_Storage_WiredTiger_IndexConfig.encode(
        message.indexConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongodconfig44Enterprise_Storage_WiredTiger {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfig44Enterprise_Storage_WiredTiger,
    } as Mongodconfig44Enterprise_Storage_WiredTiger;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.engineConfig =
            Mongodconfig44Enterprise_Storage_WiredTiger_EngineConfig.decode(
              reader,
              reader.uint32()
            );
          break;
        case 2:
          message.collectionConfig =
            Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig.decode(
              reader,
              reader.uint32()
            );
          break;
        case 3:
          message.indexConfig =
            Mongodconfig44Enterprise_Storage_WiredTiger_IndexConfig.decode(
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

  fromJSON(object: any): Mongodconfig44Enterprise_Storage_WiredTiger {
    const message = {
      ...baseMongodconfig44Enterprise_Storage_WiredTiger,
    } as Mongodconfig44Enterprise_Storage_WiredTiger;
    message.engineConfig =
      object.engineConfig !== undefined && object.engineConfig !== null
        ? Mongodconfig44Enterprise_Storage_WiredTiger_EngineConfig.fromJSON(
            object.engineConfig
          )
        : undefined;
    message.collectionConfig =
      object.collectionConfig !== undefined && object.collectionConfig !== null
        ? Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig.fromJSON(
            object.collectionConfig
          )
        : undefined;
    message.indexConfig =
      object.indexConfig !== undefined && object.indexConfig !== null
        ? Mongodconfig44Enterprise_Storage_WiredTiger_IndexConfig.fromJSON(
            object.indexConfig
          )
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfig44Enterprise_Storage_WiredTiger): unknown {
    const obj: any = {};
    message.engineConfig !== undefined &&
      (obj.engineConfig = message.engineConfig
        ? Mongodconfig44Enterprise_Storage_WiredTiger_EngineConfig.toJSON(
            message.engineConfig
          )
        : undefined);
    message.collectionConfig !== undefined &&
      (obj.collectionConfig = message.collectionConfig
        ? Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig.toJSON(
            message.collectionConfig
          )
        : undefined);
    message.indexConfig !== undefined &&
      (obj.indexConfig = message.indexConfig
        ? Mongodconfig44Enterprise_Storage_WiredTiger_IndexConfig.toJSON(
            message.indexConfig
          )
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Mongodconfig44Enterprise_Storage_WiredTiger>, I>
  >(object: I): Mongodconfig44Enterprise_Storage_WiredTiger {
    const message = {
      ...baseMongodconfig44Enterprise_Storage_WiredTiger,
    } as Mongodconfig44Enterprise_Storage_WiredTiger;
    message.engineConfig =
      object.engineConfig !== undefined && object.engineConfig !== null
        ? Mongodconfig44Enterprise_Storage_WiredTiger_EngineConfig.fromPartial(
            object.engineConfig
          )
        : undefined;
    message.collectionConfig =
      object.collectionConfig !== undefined && object.collectionConfig !== null
        ? Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig.fromPartial(
            object.collectionConfig
          )
        : undefined;
    message.indexConfig =
      object.indexConfig !== undefined && object.indexConfig !== null
        ? Mongodconfig44Enterprise_Storage_WiredTiger_IndexConfig.fromPartial(
            object.indexConfig
          )
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfig44Enterprise_Storage_WiredTiger.$type,
  Mongodconfig44Enterprise_Storage_WiredTiger
);

const baseMongodconfig44Enterprise_Storage_WiredTiger_EngineConfig: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger.EngineConfig",
};

export const Mongodconfig44Enterprise_Storage_WiredTiger_EngineConfig = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger.EngineConfig" as const,

  encode(
    message: Mongodconfig44Enterprise_Storage_WiredTiger_EngineConfig,
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
  ): Mongodconfig44Enterprise_Storage_WiredTiger_EngineConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfig44Enterprise_Storage_WiredTiger_EngineConfig,
    } as Mongodconfig44Enterprise_Storage_WiredTiger_EngineConfig;
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

  fromJSON(
    object: any
  ): Mongodconfig44Enterprise_Storage_WiredTiger_EngineConfig {
    const message = {
      ...baseMongodconfig44Enterprise_Storage_WiredTiger_EngineConfig,
    } as Mongodconfig44Enterprise_Storage_WiredTiger_EngineConfig;
    message.cacheSizeGb =
      object.cacheSizeGb !== undefined && object.cacheSizeGb !== null
        ? Number(object.cacheSizeGb)
        : undefined;
    return message;
  },

  toJSON(
    message: Mongodconfig44Enterprise_Storage_WiredTiger_EngineConfig
  ): unknown {
    const obj: any = {};
    message.cacheSizeGb !== undefined &&
      (obj.cacheSizeGb = message.cacheSizeGb);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<Mongodconfig44Enterprise_Storage_WiredTiger_EngineConfig>,
      I
    >
  >(object: I): Mongodconfig44Enterprise_Storage_WiredTiger_EngineConfig {
    const message = {
      ...baseMongodconfig44Enterprise_Storage_WiredTiger_EngineConfig,
    } as Mongodconfig44Enterprise_Storage_WiredTiger_EngineConfig;
    message.cacheSizeGb = object.cacheSizeGb ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfig44Enterprise_Storage_WiredTiger_EngineConfig.$type,
  Mongodconfig44Enterprise_Storage_WiredTiger_EngineConfig
);

const baseMongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig: object =
  {
    $type:
      "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger.CollectionConfig",
    blockCompressor: 0,
  };

export const Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger.CollectionConfig" as const,

  encode(
    message: Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig,
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
  ): Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig,
    } as Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig;
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

  fromJSON(
    object: any
  ): Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig {
    const message = {
      ...baseMongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig,
    } as Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig;
    message.blockCompressor =
      object.blockCompressor !== undefined && object.blockCompressor !== null
        ? mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
            object.blockCompressor
          )
        : 0;
    return message;
  },

  toJSON(
    message: Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig
  ): unknown {
    const obj: any = {};
    message.blockCompressor !== undefined &&
      (obj.blockCompressor =
        mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
          message.blockCompressor
        ));
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig>,
      I
    >
  >(object: I): Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig {
    const message = {
      ...baseMongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig,
    } as Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig;
    message.blockCompressor = object.blockCompressor ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig.$type,
  Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig
);

const baseMongodconfig44Enterprise_Storage_WiredTiger_IndexConfig: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger.IndexConfig",
};

export const Mongodconfig44Enterprise_Storage_WiredTiger_IndexConfig = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger.IndexConfig" as const,

  encode(
    message: Mongodconfig44Enterprise_Storage_WiredTiger_IndexConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.prefixCompression !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.prefixCompression!,
        },
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongodconfig44Enterprise_Storage_WiredTiger_IndexConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfig44Enterprise_Storage_WiredTiger_IndexConfig,
    } as Mongodconfig44Enterprise_Storage_WiredTiger_IndexConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prefixCompression = BoolValue.decode(
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

  fromJSON(
    object: any
  ): Mongodconfig44Enterprise_Storage_WiredTiger_IndexConfig {
    const message = {
      ...baseMongodconfig44Enterprise_Storage_WiredTiger_IndexConfig,
    } as Mongodconfig44Enterprise_Storage_WiredTiger_IndexConfig;
    message.prefixCompression =
      object.prefixCompression !== undefined &&
      object.prefixCompression !== null
        ? Boolean(object.prefixCompression)
        : undefined;
    return message;
  },

  toJSON(
    message: Mongodconfig44Enterprise_Storage_WiredTiger_IndexConfig
  ): unknown {
    const obj: any = {};
    message.prefixCompression !== undefined &&
      (obj.prefixCompression = message.prefixCompression);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<Mongodconfig44Enterprise_Storage_WiredTiger_IndexConfig>,
      I
    >
  >(object: I): Mongodconfig44Enterprise_Storage_WiredTiger_IndexConfig {
    const message = {
      ...baseMongodconfig44Enterprise_Storage_WiredTiger_IndexConfig,
    } as Mongodconfig44Enterprise_Storage_WiredTiger_IndexConfig;
    message.prefixCompression = object.prefixCompression ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfig44Enterprise_Storage_WiredTiger_IndexConfig.$type,
  Mongodconfig44Enterprise_Storage_WiredTiger_IndexConfig
);

const baseMongodconfig44Enterprise_Storage_Journal: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.Journal",
};

export const Mongodconfig44Enterprise_Storage_Journal = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.Journal" as const,

  encode(
    message: Mongodconfig44Enterprise_Storage_Journal,
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
  ): Mongodconfig44Enterprise_Storage_Journal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfig44Enterprise_Storage_Journal,
    } as Mongodconfig44Enterprise_Storage_Journal;
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

  fromJSON(object: any): Mongodconfig44Enterprise_Storage_Journal {
    const message = {
      ...baseMongodconfig44Enterprise_Storage_Journal,
    } as Mongodconfig44Enterprise_Storage_Journal;
    message.commitInterval =
      object.commitInterval !== undefined && object.commitInterval !== null
        ? Number(object.commitInterval)
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfig44Enterprise_Storage_Journal): unknown {
    const obj: any = {};
    message.commitInterval !== undefined &&
      (obj.commitInterval = message.commitInterval);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Mongodconfig44Enterprise_Storage_Journal>, I>
  >(object: I): Mongodconfig44Enterprise_Storage_Journal {
    const message = {
      ...baseMongodconfig44Enterprise_Storage_Journal,
    } as Mongodconfig44Enterprise_Storage_Journal;
    message.commitInterval = object.commitInterval ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfig44Enterprise_Storage_Journal.$type,
  Mongodconfig44Enterprise_Storage_Journal
);

const baseMongodconfig44Enterprise_OperationProfiling: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.OperationProfiling",
  mode: 0,
};

export const Mongodconfig44Enterprise_OperationProfiling = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.OperationProfiling" as const,

  encode(
    message: Mongodconfig44Enterprise_OperationProfiling,
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
    if (message.slowOpSampleRate !== undefined) {
      DoubleValue.encode(
        {
          $type: "google.protobuf.DoubleValue",
          value: message.slowOpSampleRate!,
        },
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongodconfig44Enterprise_OperationProfiling {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfig44Enterprise_OperationProfiling,
    } as Mongodconfig44Enterprise_OperationProfiling;
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
        case 3:
          message.slowOpSampleRate = DoubleValue.decode(
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

  fromJSON(object: any): Mongodconfig44Enterprise_OperationProfiling {
    const message = {
      ...baseMongodconfig44Enterprise_OperationProfiling,
    } as Mongodconfig44Enterprise_OperationProfiling;
    message.mode =
      object.mode !== undefined && object.mode !== null
        ? mongodconfig44Enterprise_OperationProfiling_ModeFromJSON(object.mode)
        : 0;
    message.slowOpThreshold =
      object.slowOpThreshold !== undefined && object.slowOpThreshold !== null
        ? Number(object.slowOpThreshold)
        : undefined;
    message.slowOpSampleRate =
      object.slowOpSampleRate !== undefined && object.slowOpSampleRate !== null
        ? Number(object.slowOpSampleRate)
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfig44Enterprise_OperationProfiling): unknown {
    const obj: any = {};
    message.mode !== undefined &&
      (obj.mode = mongodconfig44Enterprise_OperationProfiling_ModeToJSON(
        message.mode
      ));
    message.slowOpThreshold !== undefined &&
      (obj.slowOpThreshold = message.slowOpThreshold);
    message.slowOpSampleRate !== undefined &&
      (obj.slowOpSampleRate = message.slowOpSampleRate);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Mongodconfig44Enterprise_OperationProfiling>, I>
  >(object: I): Mongodconfig44Enterprise_OperationProfiling {
    const message = {
      ...baseMongodconfig44Enterprise_OperationProfiling,
    } as Mongodconfig44Enterprise_OperationProfiling;
    message.mode = object.mode ?? 0;
    message.slowOpThreshold = object.slowOpThreshold ?? undefined;
    message.slowOpSampleRate = object.slowOpSampleRate ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfig44Enterprise_OperationProfiling.$type,
  Mongodconfig44Enterprise_OperationProfiling
);

const baseMongodconfig44Enterprise_Network: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Network",
};

export const Mongodconfig44Enterprise_Network = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Network" as const,

  encode(
    message: Mongodconfig44Enterprise_Network,
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
    if (message.compression !== undefined) {
      Mongodconfig44Enterprise_Network_Compression.encode(
        message.compression,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongodconfig44Enterprise_Network {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfig44Enterprise_Network,
    } as Mongodconfig44Enterprise_Network;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxIncomingConnections = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 2:
          message.compression =
            Mongodconfig44Enterprise_Network_Compression.decode(
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

  fromJSON(object: any): Mongodconfig44Enterprise_Network {
    const message = {
      ...baseMongodconfig44Enterprise_Network,
    } as Mongodconfig44Enterprise_Network;
    message.maxIncomingConnections =
      object.maxIncomingConnections !== undefined &&
      object.maxIncomingConnections !== null
        ? Number(object.maxIncomingConnections)
        : undefined;
    message.compression =
      object.compression !== undefined && object.compression !== null
        ? Mongodconfig44Enterprise_Network_Compression.fromJSON(
            object.compression
          )
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfig44Enterprise_Network): unknown {
    const obj: any = {};
    message.maxIncomingConnections !== undefined &&
      (obj.maxIncomingConnections = message.maxIncomingConnections);
    message.compression !== undefined &&
      (obj.compression = message.compression
        ? Mongodconfig44Enterprise_Network_Compression.toJSON(
            message.compression
          )
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Mongodconfig44Enterprise_Network>, I>
  >(object: I): Mongodconfig44Enterprise_Network {
    const message = {
      ...baseMongodconfig44Enterprise_Network,
    } as Mongodconfig44Enterprise_Network;
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    message.compression =
      object.compression !== undefined && object.compression !== null
        ? Mongodconfig44Enterprise_Network_Compression.fromPartial(
            object.compression
          )
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfig44Enterprise_Network.$type,
  Mongodconfig44Enterprise_Network
);

const baseMongodconfig44Enterprise_Network_Compression: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Network.Compression",
  compressors: 0,
};

export const Mongodconfig44Enterprise_Network_Compression = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Network.Compression" as const,

  encode(
    message: Mongodconfig44Enterprise_Network_Compression,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.compressors) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongodconfig44Enterprise_Network_Compression {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfig44Enterprise_Network_Compression,
    } as Mongodconfig44Enterprise_Network_Compression;
    message.compressors = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.compressors.push(reader.int32() as any);
            }
          } else {
            message.compressors.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Mongodconfig44Enterprise_Network_Compression {
    const message = {
      ...baseMongodconfig44Enterprise_Network_Compression,
    } as Mongodconfig44Enterprise_Network_Compression;
    message.compressors = (object.compressors ?? []).map((e: any) =>
      mongodconfig44Enterprise_Network_Compression_CompressorFromJSON(e)
    );
    return message;
  },

  toJSON(message: Mongodconfig44Enterprise_Network_Compression): unknown {
    const obj: any = {};
    if (message.compressors) {
      obj.compressors = message.compressors.map((e) =>
        mongodconfig44Enterprise_Network_Compression_CompressorToJSON(e)
      );
    } else {
      obj.compressors = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<Mongodconfig44Enterprise_Network_Compression>,
      I
    >
  >(object: I): Mongodconfig44Enterprise_Network_Compression {
    const message = {
      ...baseMongodconfig44Enterprise_Network_Compression,
    } as Mongodconfig44Enterprise_Network_Compression;
    message.compressors = object.compressors?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfig44Enterprise_Network_Compression.$type,
  Mongodconfig44Enterprise_Network_Compression
);

const baseMongodconfig44Enterprise_Security: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Security",
};

export const Mongodconfig44Enterprise_Security = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Security" as const,

  encode(
    message: Mongodconfig44Enterprise_Security,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enableEncryption !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.enableEncryption!,
        },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.kmip !== undefined) {
      Mongodconfig44Enterprise_Security_KMIP.encode(
        message.kmip,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongodconfig44Enterprise_Security {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfig44Enterprise_Security,
    } as Mongodconfig44Enterprise_Security;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enableEncryption = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 2:
          message.kmip = Mongodconfig44Enterprise_Security_KMIP.decode(
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

  fromJSON(object: any): Mongodconfig44Enterprise_Security {
    const message = {
      ...baseMongodconfig44Enterprise_Security,
    } as Mongodconfig44Enterprise_Security;
    message.enableEncryption =
      object.enableEncryption !== undefined && object.enableEncryption !== null
        ? Boolean(object.enableEncryption)
        : undefined;
    message.kmip =
      object.kmip !== undefined && object.kmip !== null
        ? Mongodconfig44Enterprise_Security_KMIP.fromJSON(object.kmip)
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfig44Enterprise_Security): unknown {
    const obj: any = {};
    message.enableEncryption !== undefined &&
      (obj.enableEncryption = message.enableEncryption);
    message.kmip !== undefined &&
      (obj.kmip = message.kmip
        ? Mongodconfig44Enterprise_Security_KMIP.toJSON(message.kmip)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Mongodconfig44Enterprise_Security>, I>
  >(object: I): Mongodconfig44Enterprise_Security {
    const message = {
      ...baseMongodconfig44Enterprise_Security,
    } as Mongodconfig44Enterprise_Security;
    message.enableEncryption = object.enableEncryption ?? undefined;
    message.kmip =
      object.kmip !== undefined && object.kmip !== null
        ? Mongodconfig44Enterprise_Security_KMIP.fromPartial(object.kmip)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfig44Enterprise_Security.$type,
  Mongodconfig44Enterprise_Security
);

const baseMongodconfig44Enterprise_Security_KMIP: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Security.KMIP",
  serverName: "",
  serverCa: "",
  clientCertificate: "",
  keyIdentifier: "",
};

export const Mongodconfig44Enterprise_Security_KMIP = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Security.KMIP" as const,

  encode(
    message: Mongodconfig44Enterprise_Security_KMIP,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.serverName !== "") {
      writer.uint32(10).string(message.serverName);
    }
    if (message.port !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.port! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.serverCa !== "") {
      writer.uint32(26).string(message.serverCa);
    }
    if (message.clientCertificate !== "") {
      writer.uint32(34).string(message.clientCertificate);
    }
    if (message.keyIdentifier !== "") {
      writer.uint32(42).string(message.keyIdentifier);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongodconfig44Enterprise_Security_KMIP {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfig44Enterprise_Security_KMIP,
    } as Mongodconfig44Enterprise_Security_KMIP;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serverName = reader.string();
          break;
        case 2:
          message.port = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 3:
          message.serverCa = reader.string();
          break;
        case 4:
          message.clientCertificate = reader.string();
          break;
        case 5:
          message.keyIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Mongodconfig44Enterprise_Security_KMIP {
    const message = {
      ...baseMongodconfig44Enterprise_Security_KMIP,
    } as Mongodconfig44Enterprise_Security_KMIP;
    message.serverName =
      object.serverName !== undefined && object.serverName !== null
        ? String(object.serverName)
        : "";
    message.port =
      object.port !== undefined && object.port !== null
        ? Number(object.port)
        : undefined;
    message.serverCa =
      object.serverCa !== undefined && object.serverCa !== null
        ? String(object.serverCa)
        : "";
    message.clientCertificate =
      object.clientCertificate !== undefined &&
      object.clientCertificate !== null
        ? String(object.clientCertificate)
        : "";
    message.keyIdentifier =
      object.keyIdentifier !== undefined && object.keyIdentifier !== null
        ? String(object.keyIdentifier)
        : "";
    return message;
  },

  toJSON(message: Mongodconfig44Enterprise_Security_KMIP): unknown {
    const obj: any = {};
    message.serverName !== undefined && (obj.serverName = message.serverName);
    message.port !== undefined && (obj.port = message.port);
    message.serverCa !== undefined && (obj.serverCa = message.serverCa);
    message.clientCertificate !== undefined &&
      (obj.clientCertificate = message.clientCertificate);
    message.keyIdentifier !== undefined &&
      (obj.keyIdentifier = message.keyIdentifier);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Mongodconfig44Enterprise_Security_KMIP>, I>
  >(object: I): Mongodconfig44Enterprise_Security_KMIP {
    const message = {
      ...baseMongodconfig44Enterprise_Security_KMIP,
    } as Mongodconfig44Enterprise_Security_KMIP;
    message.serverName = object.serverName ?? "";
    message.port = object.port ?? undefined;
    message.serverCa = object.serverCa ?? "";
    message.clientCertificate = object.clientCertificate ?? "";
    message.keyIdentifier = object.keyIdentifier ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfig44Enterprise_Security_KMIP.$type,
  Mongodconfig44Enterprise_Security_KMIP
);

const baseMongodconfig44Enterprise_AuditLog: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.AuditLog",
  filter: "",
};

export const Mongodconfig44Enterprise_AuditLog = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.AuditLog" as const,

  encode(
    message: Mongodconfig44Enterprise_AuditLog,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.filter !== "") {
      writer.uint32(10).string(message.filter);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongodconfig44Enterprise_AuditLog {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfig44Enterprise_AuditLog,
    } as Mongodconfig44Enterprise_AuditLog;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Mongodconfig44Enterprise_AuditLog {
    const message = {
      ...baseMongodconfig44Enterprise_AuditLog,
    } as Mongodconfig44Enterprise_AuditLog;
    message.filter =
      object.filter !== undefined && object.filter !== null
        ? String(object.filter)
        : "";
    return message;
  },

  toJSON(message: Mongodconfig44Enterprise_AuditLog): unknown {
    const obj: any = {};
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Mongodconfig44Enterprise_AuditLog>, I>
  >(object: I): Mongodconfig44Enterprise_AuditLog {
    const message = {
      ...baseMongodconfig44Enterprise_AuditLog,
    } as Mongodconfig44Enterprise_AuditLog;
    message.filter = object.filter ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfig44Enterprise_AuditLog.$type,
  Mongodconfig44Enterprise_AuditLog
);

const baseMongodconfig44Enterprise_SetParameter: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.SetParameter",
};

export const Mongodconfig44Enterprise_SetParameter = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.SetParameter" as const,

  encode(
    message: Mongodconfig44Enterprise_SetParameter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.auditAuthorizationSuccess !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.auditAuthorizationSuccess!,
        },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.enableFlowControl !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.enableFlowControl!,
        },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongodconfig44Enterprise_SetParameter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfig44Enterprise_SetParameter,
    } as Mongodconfig44Enterprise_SetParameter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auditAuthorizationSuccess = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 2:
          message.enableFlowControl = BoolValue.decode(
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

  fromJSON(object: any): Mongodconfig44Enterprise_SetParameter {
    const message = {
      ...baseMongodconfig44Enterprise_SetParameter,
    } as Mongodconfig44Enterprise_SetParameter;
    message.auditAuthorizationSuccess =
      object.auditAuthorizationSuccess !== undefined &&
      object.auditAuthorizationSuccess !== null
        ? Boolean(object.auditAuthorizationSuccess)
        : undefined;
    message.enableFlowControl =
      object.enableFlowControl !== undefined &&
      object.enableFlowControl !== null
        ? Boolean(object.enableFlowControl)
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfig44Enterprise_SetParameter): unknown {
    const obj: any = {};
    message.auditAuthorizationSuccess !== undefined &&
      (obj.auditAuthorizationSuccess = message.auditAuthorizationSuccess);
    message.enableFlowControl !== undefined &&
      (obj.enableFlowControl = message.enableFlowControl);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Mongodconfig44Enterprise_SetParameter>, I>
  >(object: I): Mongodconfig44Enterprise_SetParameter {
    const message = {
      ...baseMongodconfig44Enterprise_SetParameter,
    } as Mongodconfig44Enterprise_SetParameter;
    message.auditAuthorizationSuccess =
      object.auditAuthorizationSuccess ?? undefined;
    message.enableFlowControl = object.enableFlowControl ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfig44Enterprise_SetParameter.$type,
  Mongodconfig44Enterprise_SetParameter
);

const baseMongocfgconfig44Enterprise: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise",
};

export const Mongocfgconfig44Enterprise = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise" as const,

  encode(
    message: Mongocfgconfig44Enterprise,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.storage !== undefined) {
      Mongocfgconfig44Enterprise_Storage.encode(
        message.storage,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.operationProfiling !== undefined) {
      Mongocfgconfig44Enterprise_OperationProfiling.encode(
        message.operationProfiling,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.net !== undefined) {
      Mongocfgconfig44Enterprise_Network.encode(
        message.net,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongocfgconfig44Enterprise {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongocfgconfig44Enterprise,
    } as Mongocfgconfig44Enterprise;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storage = Mongocfgconfig44Enterprise_Storage.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.operationProfiling =
            Mongocfgconfig44Enterprise_OperationProfiling.decode(
              reader,
              reader.uint32()
            );
          break;
        case 3:
          message.net = Mongocfgconfig44Enterprise_Network.decode(
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

  fromJSON(object: any): Mongocfgconfig44Enterprise {
    const message = {
      ...baseMongocfgconfig44Enterprise,
    } as Mongocfgconfig44Enterprise;
    message.storage =
      object.storage !== undefined && object.storage !== null
        ? Mongocfgconfig44Enterprise_Storage.fromJSON(object.storage)
        : undefined;
    message.operationProfiling =
      object.operationProfiling !== undefined &&
      object.operationProfiling !== null
        ? Mongocfgconfig44Enterprise_OperationProfiling.fromJSON(
            object.operationProfiling
          )
        : undefined;
    message.net =
      object.net !== undefined && object.net !== null
        ? Mongocfgconfig44Enterprise_Network.fromJSON(object.net)
        : undefined;
    return message;
  },

  toJSON(message: Mongocfgconfig44Enterprise): unknown {
    const obj: any = {};
    message.storage !== undefined &&
      (obj.storage = message.storage
        ? Mongocfgconfig44Enterprise_Storage.toJSON(message.storage)
        : undefined);
    message.operationProfiling !== undefined &&
      (obj.operationProfiling = message.operationProfiling
        ? Mongocfgconfig44Enterprise_OperationProfiling.toJSON(
            message.operationProfiling
          )
        : undefined);
    message.net !== undefined &&
      (obj.net = message.net
        ? Mongocfgconfig44Enterprise_Network.toJSON(message.net)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongocfgconfig44Enterprise>, I>>(
    object: I
  ): Mongocfgconfig44Enterprise {
    const message = {
      ...baseMongocfgconfig44Enterprise,
    } as Mongocfgconfig44Enterprise;
    message.storage =
      object.storage !== undefined && object.storage !== null
        ? Mongocfgconfig44Enterprise_Storage.fromPartial(object.storage)
        : undefined;
    message.operationProfiling =
      object.operationProfiling !== undefined &&
      object.operationProfiling !== null
        ? Mongocfgconfig44Enterprise_OperationProfiling.fromPartial(
            object.operationProfiling
          )
        : undefined;
    message.net =
      object.net !== undefined && object.net !== null
        ? Mongocfgconfig44Enterprise_Network.fromPartial(object.net)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongocfgconfig44Enterprise.$type,
  Mongocfgconfig44Enterprise
);

const baseMongocfgconfig44Enterprise_Storage: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Storage",
};

export const Mongocfgconfig44Enterprise_Storage = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Storage" as const,

  encode(
    message: Mongocfgconfig44Enterprise_Storage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.wiredTiger !== undefined) {
      Mongocfgconfig44Enterprise_Storage_WiredTiger.encode(
        message.wiredTiger,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongocfgconfig44Enterprise_Storage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongocfgconfig44Enterprise_Storage,
    } as Mongocfgconfig44Enterprise_Storage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wiredTiger =
            Mongocfgconfig44Enterprise_Storage_WiredTiger.decode(
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

  fromJSON(object: any): Mongocfgconfig44Enterprise_Storage {
    const message = {
      ...baseMongocfgconfig44Enterprise_Storage,
    } as Mongocfgconfig44Enterprise_Storage;
    message.wiredTiger =
      object.wiredTiger !== undefined && object.wiredTiger !== null
        ? Mongocfgconfig44Enterprise_Storage_WiredTiger.fromJSON(
            object.wiredTiger
          )
        : undefined;
    return message;
  },

  toJSON(message: Mongocfgconfig44Enterprise_Storage): unknown {
    const obj: any = {};
    message.wiredTiger !== undefined &&
      (obj.wiredTiger = message.wiredTiger
        ? Mongocfgconfig44Enterprise_Storage_WiredTiger.toJSON(
            message.wiredTiger
          )
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Mongocfgconfig44Enterprise_Storage>, I>
  >(object: I): Mongocfgconfig44Enterprise_Storage {
    const message = {
      ...baseMongocfgconfig44Enterprise_Storage,
    } as Mongocfgconfig44Enterprise_Storage;
    message.wiredTiger =
      object.wiredTiger !== undefined && object.wiredTiger !== null
        ? Mongocfgconfig44Enterprise_Storage_WiredTiger.fromPartial(
            object.wiredTiger
          )
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongocfgconfig44Enterprise_Storage.$type,
  Mongocfgconfig44Enterprise_Storage
);

const baseMongocfgconfig44Enterprise_Storage_WiredTiger: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Storage.WiredTiger",
};

export const Mongocfgconfig44Enterprise_Storage_WiredTiger = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Storage.WiredTiger" as const,

  encode(
    message: Mongocfgconfig44Enterprise_Storage_WiredTiger,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.engineConfig !== undefined) {
      Mongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig.encode(
        message.engineConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongocfgconfig44Enterprise_Storage_WiredTiger {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongocfgconfig44Enterprise_Storage_WiredTiger,
    } as Mongocfgconfig44Enterprise_Storage_WiredTiger;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.engineConfig =
            Mongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig.decode(
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

  fromJSON(object: any): Mongocfgconfig44Enterprise_Storage_WiredTiger {
    const message = {
      ...baseMongocfgconfig44Enterprise_Storage_WiredTiger,
    } as Mongocfgconfig44Enterprise_Storage_WiredTiger;
    message.engineConfig =
      object.engineConfig !== undefined && object.engineConfig !== null
        ? Mongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig.fromJSON(
            object.engineConfig
          )
        : undefined;
    return message;
  },

  toJSON(message: Mongocfgconfig44Enterprise_Storage_WiredTiger): unknown {
    const obj: any = {};
    message.engineConfig !== undefined &&
      (obj.engineConfig = message.engineConfig
        ? Mongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig.toJSON(
            message.engineConfig
          )
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<Mongocfgconfig44Enterprise_Storage_WiredTiger>,
      I
    >
  >(object: I): Mongocfgconfig44Enterprise_Storage_WiredTiger {
    const message = {
      ...baseMongocfgconfig44Enterprise_Storage_WiredTiger,
    } as Mongocfgconfig44Enterprise_Storage_WiredTiger;
    message.engineConfig =
      object.engineConfig !== undefined && object.engineConfig !== null
        ? Mongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig.fromPartial(
            object.engineConfig
          )
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongocfgconfig44Enterprise_Storage_WiredTiger.$type,
  Mongocfgconfig44Enterprise_Storage_WiredTiger
);

const baseMongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Storage.WiredTiger.EngineConfig",
};

export const Mongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Storage.WiredTiger.EngineConfig" as const,

  encode(
    message: Mongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig,
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
  ): Mongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig,
    } as Mongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig;
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

  fromJSON(
    object: any
  ): Mongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig {
    const message = {
      ...baseMongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig,
    } as Mongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig;
    message.cacheSizeGb =
      object.cacheSizeGb !== undefined && object.cacheSizeGb !== null
        ? Number(object.cacheSizeGb)
        : undefined;
    return message;
  },

  toJSON(
    message: Mongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig
  ): unknown {
    const obj: any = {};
    message.cacheSizeGb !== undefined &&
      (obj.cacheSizeGb = message.cacheSizeGb);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<Mongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig>,
      I
    >
  >(object: I): Mongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig {
    const message = {
      ...baseMongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig,
    } as Mongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig;
    message.cacheSizeGb = object.cacheSizeGb ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig.$type,
  Mongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig
);

const baseMongocfgconfig44Enterprise_OperationProfiling: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.OperationProfiling",
  mode: 0,
};

export const Mongocfgconfig44Enterprise_OperationProfiling = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.OperationProfiling" as const,

  encode(
    message: Mongocfgconfig44Enterprise_OperationProfiling,
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
  ): Mongocfgconfig44Enterprise_OperationProfiling {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongocfgconfig44Enterprise_OperationProfiling,
    } as Mongocfgconfig44Enterprise_OperationProfiling;
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

  fromJSON(object: any): Mongocfgconfig44Enterprise_OperationProfiling {
    const message = {
      ...baseMongocfgconfig44Enterprise_OperationProfiling,
    } as Mongocfgconfig44Enterprise_OperationProfiling;
    message.mode =
      object.mode !== undefined && object.mode !== null
        ? mongocfgconfig44Enterprise_OperationProfiling_ModeFromJSON(
            object.mode
          )
        : 0;
    message.slowOpThreshold =
      object.slowOpThreshold !== undefined && object.slowOpThreshold !== null
        ? Number(object.slowOpThreshold)
        : undefined;
    return message;
  },

  toJSON(message: Mongocfgconfig44Enterprise_OperationProfiling): unknown {
    const obj: any = {};
    message.mode !== undefined &&
      (obj.mode = mongocfgconfig44Enterprise_OperationProfiling_ModeToJSON(
        message.mode
      ));
    message.slowOpThreshold !== undefined &&
      (obj.slowOpThreshold = message.slowOpThreshold);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<Mongocfgconfig44Enterprise_OperationProfiling>,
      I
    >
  >(object: I): Mongocfgconfig44Enterprise_OperationProfiling {
    const message = {
      ...baseMongocfgconfig44Enterprise_OperationProfiling,
    } as Mongocfgconfig44Enterprise_OperationProfiling;
    message.mode = object.mode ?? 0;
    message.slowOpThreshold = object.slowOpThreshold ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongocfgconfig44Enterprise_OperationProfiling.$type,
  Mongocfgconfig44Enterprise_OperationProfiling
);

const baseMongocfgconfig44Enterprise_Network: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Network",
};

export const Mongocfgconfig44Enterprise_Network = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Network" as const,

  encode(
    message: Mongocfgconfig44Enterprise_Network,
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
  ): Mongocfgconfig44Enterprise_Network {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongocfgconfig44Enterprise_Network,
    } as Mongocfgconfig44Enterprise_Network;
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

  fromJSON(object: any): Mongocfgconfig44Enterprise_Network {
    const message = {
      ...baseMongocfgconfig44Enterprise_Network,
    } as Mongocfgconfig44Enterprise_Network;
    message.maxIncomingConnections =
      object.maxIncomingConnections !== undefined &&
      object.maxIncomingConnections !== null
        ? Number(object.maxIncomingConnections)
        : undefined;
    return message;
  },

  toJSON(message: Mongocfgconfig44Enterprise_Network): unknown {
    const obj: any = {};
    message.maxIncomingConnections !== undefined &&
      (obj.maxIncomingConnections = message.maxIncomingConnections);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Mongocfgconfig44Enterprise_Network>, I>
  >(object: I): Mongocfgconfig44Enterprise_Network {
    const message = {
      ...baseMongocfgconfig44Enterprise_Network,
    } as Mongocfgconfig44Enterprise_Network;
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongocfgconfig44Enterprise_Network.$type,
  Mongocfgconfig44Enterprise_Network
);

const baseMongosconfig44Enterprise: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4_enterprise",
};

export const Mongosconfig44Enterprise = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4_enterprise" as const,

  encode(
    message: Mongosconfig44Enterprise,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.net !== undefined) {
      Mongosconfig44Enterprise_Network.encode(
        message.net,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongosconfig44Enterprise {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongosconfig44Enterprise,
    } as Mongosconfig44Enterprise;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.net = Mongosconfig44Enterprise_Network.decode(
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

  fromJSON(object: any): Mongosconfig44Enterprise {
    const message = {
      ...baseMongosconfig44Enterprise,
    } as Mongosconfig44Enterprise;
    message.net =
      object.net !== undefined && object.net !== null
        ? Mongosconfig44Enterprise_Network.fromJSON(object.net)
        : undefined;
    return message;
  },

  toJSON(message: Mongosconfig44Enterprise): unknown {
    const obj: any = {};
    message.net !== undefined &&
      (obj.net = message.net
        ? Mongosconfig44Enterprise_Network.toJSON(message.net)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongosconfig44Enterprise>, I>>(
    object: I
  ): Mongosconfig44Enterprise {
    const message = {
      ...baseMongosconfig44Enterprise,
    } as Mongosconfig44Enterprise;
    message.net =
      object.net !== undefined && object.net !== null
        ? Mongosconfig44Enterprise_Network.fromPartial(object.net)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongosconfig44Enterprise.$type,
  Mongosconfig44Enterprise
);

const baseMongosconfig44Enterprise_Network: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4_enterprise.Network",
};

export const Mongosconfig44Enterprise_Network = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4_enterprise.Network" as const,

  encode(
    message: Mongosconfig44Enterprise_Network,
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
    if (message.compression !== undefined) {
      Mongosconfig44Enterprise_Network_Compression.encode(
        message.compression,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongosconfig44Enterprise_Network {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongosconfig44Enterprise_Network,
    } as Mongosconfig44Enterprise_Network;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxIncomingConnections = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 2:
          message.compression =
            Mongosconfig44Enterprise_Network_Compression.decode(
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

  fromJSON(object: any): Mongosconfig44Enterprise_Network {
    const message = {
      ...baseMongosconfig44Enterprise_Network,
    } as Mongosconfig44Enterprise_Network;
    message.maxIncomingConnections =
      object.maxIncomingConnections !== undefined &&
      object.maxIncomingConnections !== null
        ? Number(object.maxIncomingConnections)
        : undefined;
    message.compression =
      object.compression !== undefined && object.compression !== null
        ? Mongosconfig44Enterprise_Network_Compression.fromJSON(
            object.compression
          )
        : undefined;
    return message;
  },

  toJSON(message: Mongosconfig44Enterprise_Network): unknown {
    const obj: any = {};
    message.maxIncomingConnections !== undefined &&
      (obj.maxIncomingConnections = message.maxIncomingConnections);
    message.compression !== undefined &&
      (obj.compression = message.compression
        ? Mongosconfig44Enterprise_Network_Compression.toJSON(
            message.compression
          )
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Mongosconfig44Enterprise_Network>, I>
  >(object: I): Mongosconfig44Enterprise_Network {
    const message = {
      ...baseMongosconfig44Enterprise_Network,
    } as Mongosconfig44Enterprise_Network;
    message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
    message.compression =
      object.compression !== undefined && object.compression !== null
        ? Mongosconfig44Enterprise_Network_Compression.fromPartial(
            object.compression
          )
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongosconfig44Enterprise_Network.$type,
  Mongosconfig44Enterprise_Network
);

const baseMongosconfig44Enterprise_Network_Compression: object = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4_enterprise.Network.Compression",
  compressors: 0,
};

export const Mongosconfig44Enterprise_Network_Compression = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4_enterprise.Network.Compression" as const,

  encode(
    message: Mongosconfig44Enterprise_Network_Compression,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.compressors) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongosconfig44Enterprise_Network_Compression {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongosconfig44Enterprise_Network_Compression,
    } as Mongosconfig44Enterprise_Network_Compression;
    message.compressors = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.compressors.push(reader.int32() as any);
            }
          } else {
            message.compressors.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Mongosconfig44Enterprise_Network_Compression {
    const message = {
      ...baseMongosconfig44Enterprise_Network_Compression,
    } as Mongosconfig44Enterprise_Network_Compression;
    message.compressors = (object.compressors ?? []).map((e: any) =>
      mongosconfig44Enterprise_Network_Compression_CompressorFromJSON(e)
    );
    return message;
  },

  toJSON(message: Mongosconfig44Enterprise_Network_Compression): unknown {
    const obj: any = {};
    if (message.compressors) {
      obj.compressors = message.compressors.map((e) =>
        mongosconfig44Enterprise_Network_Compression_CompressorToJSON(e)
      );
    } else {
      obj.compressors = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<Mongosconfig44Enterprise_Network_Compression>,
      I
    >
  >(object: I): Mongosconfig44Enterprise_Network_Compression {
    const message = {
      ...baseMongosconfig44Enterprise_Network_Compression,
    } as Mongosconfig44Enterprise_Network_Compression;
    message.compressors = object.compressors?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  Mongosconfig44Enterprise_Network_Compression.$type,
  Mongosconfig44Enterprise_Network_Compression
);

const baseMongodconfigset44Enterprise: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_4_enterprise",
};

export const Mongodconfigset44Enterprise = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_4_enterprise" as const,

  encode(
    message: Mongodconfigset44Enterprise,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      Mongodconfig44Enterprise.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      Mongodconfig44Enterprise.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      Mongodconfig44Enterprise.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongodconfigset44Enterprise {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongodconfigset44Enterprise,
    } as Mongodconfigset44Enterprise;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = Mongodconfig44Enterprise.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = Mongodconfig44Enterprise.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.defaultConfig = Mongodconfig44Enterprise.decode(
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

  fromJSON(object: any): Mongodconfigset44Enterprise {
    const message = {
      ...baseMongodconfigset44Enterprise,
    } as Mongodconfigset44Enterprise;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Mongodconfig44Enterprise.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Mongodconfig44Enterprise.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Mongodconfig44Enterprise.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: Mongodconfigset44Enterprise): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? Mongodconfig44Enterprise.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? Mongodconfig44Enterprise.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? Mongodconfig44Enterprise.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongodconfigset44Enterprise>, I>>(
    object: I
  ): Mongodconfigset44Enterprise {
    const message = {
      ...baseMongodconfigset44Enterprise,
    } as Mongodconfigset44Enterprise;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Mongodconfig44Enterprise.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Mongodconfig44Enterprise.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Mongodconfig44Enterprise.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongodconfigset44Enterprise.$type,
  Mongodconfigset44Enterprise
);

const baseMongocfgconfigset44Enterprise: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_4_enterprise",
};

export const Mongocfgconfigset44Enterprise = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_4_enterprise" as const,

  encode(
    message: Mongocfgconfigset44Enterprise,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      Mongocfgconfig44Enterprise.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      Mongocfgconfig44Enterprise.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      Mongocfgconfig44Enterprise.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongocfgconfigset44Enterprise {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongocfgconfigset44Enterprise,
    } as Mongocfgconfigset44Enterprise;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = Mongocfgconfig44Enterprise.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = Mongocfgconfig44Enterprise.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.defaultConfig = Mongocfgconfig44Enterprise.decode(
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

  fromJSON(object: any): Mongocfgconfigset44Enterprise {
    const message = {
      ...baseMongocfgconfigset44Enterprise,
    } as Mongocfgconfigset44Enterprise;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Mongocfgconfig44Enterprise.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Mongocfgconfig44Enterprise.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Mongocfgconfig44Enterprise.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: Mongocfgconfigset44Enterprise): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? Mongocfgconfig44Enterprise.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? Mongocfgconfig44Enterprise.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? Mongocfgconfig44Enterprise.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongocfgconfigset44Enterprise>, I>>(
    object: I
  ): Mongocfgconfigset44Enterprise {
    const message = {
      ...baseMongocfgconfigset44Enterprise,
    } as Mongocfgconfigset44Enterprise;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Mongocfgconfig44Enterprise.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Mongocfgconfig44Enterprise.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Mongocfgconfig44Enterprise.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongocfgconfigset44Enterprise.$type,
  Mongocfgconfigset44Enterprise
);

const baseMongosconfigset44Enterprise: object = {
  $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_4_enterprise",
};

export const Mongosconfigset44Enterprise = {
  $type:
    "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_4_enterprise" as const,

  encode(
    message: Mongosconfigset44Enterprise,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      Mongosconfig44Enterprise.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      Mongosconfig44Enterprise.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      Mongosconfig44Enterprise.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Mongosconfigset44Enterprise {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMongosconfigset44Enterprise,
    } as Mongosconfigset44Enterprise;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = Mongosconfig44Enterprise.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = Mongosconfig44Enterprise.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.defaultConfig = Mongosconfig44Enterprise.decode(
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

  fromJSON(object: any): Mongosconfigset44Enterprise {
    const message = {
      ...baseMongosconfigset44Enterprise,
    } as Mongosconfigset44Enterprise;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Mongosconfig44Enterprise.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Mongosconfig44Enterprise.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Mongosconfig44Enterprise.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: Mongosconfigset44Enterprise): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? Mongosconfig44Enterprise.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? Mongosconfig44Enterprise.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? Mongosconfig44Enterprise.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mongosconfigset44Enterprise>, I>>(
    object: I
  ): Mongosconfigset44Enterprise {
    const message = {
      ...baseMongosconfigset44Enterprise,
    } as Mongosconfigset44Enterprise;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Mongosconfig44Enterprise.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Mongosconfig44Enterprise.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Mongosconfig44Enterprise.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  Mongosconfigset44Enterprise.$type,
  Mongosconfigset44Enterprise
);

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
