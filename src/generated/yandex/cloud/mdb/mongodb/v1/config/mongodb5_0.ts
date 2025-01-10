/* eslint-disable */
import { messageTypeRegistry } from '../../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { DoubleValue, BoolValue, Int64Value } from '../../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.mdb.mongodb.v1.config';

/**
 * Configuration of a mongod daemon. Supported options are a limited subset of all
 * options described in [MongoDB documentation](https://docs.mongodb.com/v5.0/reference/configuration-options/).
 */
export interface Mongodconfig50 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0';
    /** `storage` section of mongod configuration. */
    storage?: Mongodconfig50_Storage;
    /** `operationProfiling` section of mongod configuration. */
    operationProfiling?: Mongodconfig50_OperationProfiling;
    /** `net` section of mongod configuration. */
    net?: Mongodconfig50_Network;
    /** `SetParameter` section of mongod configuration. */
    setParameter?: Mongodconfig50_SetParameter;
}

export interface Mongodconfig50_Storage {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage';
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger?: Mongodconfig50_Storage_WiredTiger;
    /** Configuration of the MongoDB [journal](https://docs.mongodb.com/v5.0/reference/glossary/#term-journal). */
    journal?: Mongodconfig50_Storage_Journal;
}

/** Configuration of WiredTiger storage engine. */
export interface Mongodconfig50_Storage_WiredTiger {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger';
    /** Engine configuration for WiredTiger. */
    engineConfig?: Mongodconfig50_Storage_WiredTiger_EngineConfig;
    /** Collection configuration for WiredTiger. */
    collectionConfig?: Mongodconfig50_Storage_WiredTiger_CollectionConfig;
    /** Index configuration for WiredTiger */
    indexConfig?: Mongodconfig50_Storage_WiredTiger_IndexConfig;
}

export interface Mongodconfig50_Storage_WiredTiger_EngineConfig {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger.EngineConfig';
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb?: number;
}

export interface Mongodconfig50_Storage_WiredTiger_CollectionConfig {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger.CollectionConfig';
    /** Default type of compression to use for collection data. */
    blockCompressor: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor;
}

export enum Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor {
    COMPRESSOR_UNSPECIFIED = 0,
    /** NONE - No compression. */
    NONE = 1,
    /** SNAPPY - The [Snappy](https://docs.mongodb.com/v5.0/reference/glossary/#term-snappy) compression. */
    SNAPPY = 2,
    /** ZLIB - The [zlib](https://docs.mongodb.com/v5.0/reference/glossary/#term-zlib) compression. */
    ZLIB = 3,
    /** ZSTD - The [zstd](https://docs.mongodb.com/v5.0/reference/glossary/#term-zstd) compression. */
    ZSTD = 4,
    UNRECOGNIZED = -1,
}

export function mongodconfig50_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
    object: any,
): Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor {
    switch (object) {
        case 0:
        case 'COMPRESSOR_UNSPECIFIED':
            return Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED;
        case 1:
        case 'NONE':
            return Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor.NONE;
        case 2:
        case 'SNAPPY':
            return Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY;
        case 3:
        case 'ZLIB':
            return Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB;
        case 4:
        case 'ZSTD':
            return Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED;
    }
}

export function mongodconfig50_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
    object: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor,
): string {
    switch (object) {
        case Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED:
            return 'COMPRESSOR_UNSPECIFIED';
        case Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor.NONE:
            return 'NONE';
        case Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY:
            return 'SNAPPY';
        case Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB:
            return 'ZLIB';
        case Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD:
            return 'ZSTD';
        default:
            return 'UNKNOWN';
    }
}

export interface Mongodconfig50_Storage_WiredTiger_IndexConfig {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger.IndexConfig';
    /** Enables or disables [prefix compression](https://www.mongodb.com/docs/manual/reference/glossary/#std-term-prefix-compression) */
    prefixCompression?: boolean;
}

export interface Mongodconfig50_Storage_Journal {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.Journal';
    /**
     * Commit interval between journal operations, in milliseconds.
     * Default: 100.
     */
    commitInterval?: number;
}

export interface Mongodconfig50_OperationProfiling {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.OperationProfiling';
    /** Mode which specifies operations that should be profiled. */
    mode: Mongodconfig50_OperationProfiling_Mode;
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

export enum Mongodconfig50_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1,
}

export function mongodconfig50_OperationProfiling_ModeFromJSON(
    object: any,
): Mongodconfig50_OperationProfiling_Mode {
    switch (object) {
        case 0:
        case 'MODE_UNSPECIFIED':
            return Mongodconfig50_OperationProfiling_Mode.MODE_UNSPECIFIED;
        case 1:
        case 'OFF':
            return Mongodconfig50_OperationProfiling_Mode.OFF;
        case 2:
        case 'SLOW_OP':
            return Mongodconfig50_OperationProfiling_Mode.SLOW_OP;
        case 3:
        case 'ALL':
            return Mongodconfig50_OperationProfiling_Mode.ALL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongodconfig50_OperationProfiling_Mode.UNRECOGNIZED;
    }
}

export function mongodconfig50_OperationProfiling_ModeToJSON(
    object: Mongodconfig50_OperationProfiling_Mode,
): string {
    switch (object) {
        case Mongodconfig50_OperationProfiling_Mode.MODE_UNSPECIFIED:
            return 'MODE_UNSPECIFIED';
        case Mongodconfig50_OperationProfiling_Mode.OFF:
            return 'OFF';
        case Mongodconfig50_OperationProfiling_Mode.SLOW_OP:
            return 'SLOW_OP';
        case Mongodconfig50_OperationProfiling_Mode.ALL:
            return 'ALL';
        default:
            return 'UNKNOWN';
    }
}

export interface Mongodconfig50_Network {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Network';
    /** The maximum number of simultaneous connections that mongod will accept. */
    maxIncomingConnections?: number;
    /** Compression settings */
    compression?: Mongodconfig50_Network_Compression;
}

export interface Mongodconfig50_Network_Compression {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Network.Compression';
    /**
     * Specifies the default compressor(s) to use for communication between this mongod or mongos instance and:
     * - other members of the deployment if the instance is part of a replica set or a sharded cluster
     * - mongosh
     * - drivers that support the OP_COMPRESSED message format.
     * MongoDB supports the following compressors:
     */
    compressors: Mongodconfig50_Network_Compression_Compressor[];
}

export enum Mongodconfig50_Network_Compression_Compressor {
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

export function mongodconfig50_Network_Compression_CompressorFromJSON(
    object: any,
): Mongodconfig50_Network_Compression_Compressor {
    switch (object) {
        case 0:
        case 'COMPRESSOR_UNSPECIFIED':
            return Mongodconfig50_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED;
        case 1:
        case 'SNAPPY':
            return Mongodconfig50_Network_Compression_Compressor.SNAPPY;
        case 2:
        case 'ZLIB':
            return Mongodconfig50_Network_Compression_Compressor.ZLIB;
        case 3:
        case 'ZSTD':
            return Mongodconfig50_Network_Compression_Compressor.ZSTD;
        case 4:
        case 'DISABLED':
            return Mongodconfig50_Network_Compression_Compressor.DISABLED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongodconfig50_Network_Compression_Compressor.UNRECOGNIZED;
    }
}

export function mongodconfig50_Network_Compression_CompressorToJSON(
    object: Mongodconfig50_Network_Compression_Compressor,
): string {
    switch (object) {
        case Mongodconfig50_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED:
            return 'COMPRESSOR_UNSPECIFIED';
        case Mongodconfig50_Network_Compression_Compressor.SNAPPY:
            return 'SNAPPY';
        case Mongodconfig50_Network_Compression_Compressor.ZLIB:
            return 'ZLIB';
        case Mongodconfig50_Network_Compression_Compressor.ZSTD:
            return 'ZSTD';
        case Mongodconfig50_Network_Compression_Compressor.DISABLED:
            return 'DISABLED';
        default:
            return 'UNKNOWN';
    }
}

export interface Mongodconfig50_SetParameter {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.SetParameter';
    /**
     * Enables or disables the mechanism that controls the rate at which the primary applies its writes with the
     * goal of keeping the secondary members [majority committed](https://www.mongodb.com/docs/v4.2/reference/command/replSetGetStatus/#replSetGetStatus.optimes.lastCommittedOpTime)
     * lag under a configurable maximum value.
     */
    enableFlowControl?: boolean;
    /** The minimum time window in seconds for which the storage engine keeps the snapshot history. */
    minSnapshotHistoryWindowInSeconds?: number;
}

export interface Mongocfgconfig50 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0';
    /** `storage` section of mongocfg configuration. */
    storage?: Mongocfgconfig50_Storage;
    /** `operationProfiling` section of mongocfg configuration. */
    operationProfiling?: Mongocfgconfig50_OperationProfiling;
    /** `net` section of mongocfg configuration. */
    net?: Mongocfgconfig50_Network;
}

export interface Mongocfgconfig50_Storage {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Storage';
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger?: Mongocfgconfig50_Storage_WiredTiger;
}

/** Configuration of WiredTiger storage engine. */
export interface Mongocfgconfig50_Storage_WiredTiger {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Storage.WiredTiger';
    /** Engine configuration for WiredTiger. */
    engineConfig?: Mongocfgconfig50_Storage_WiredTiger_EngineConfig;
}

export interface Mongocfgconfig50_Storage_WiredTiger_EngineConfig {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Storage.WiredTiger.EngineConfig';
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb?: number;
}

export interface Mongocfgconfig50_OperationProfiling {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.OperationProfiling';
    /** Mode which specifies operations that should be profiled. */
    mode: Mongocfgconfig50_OperationProfiling_Mode;
    /**
     * The slow operation time threshold, in milliseconds. Operations that run
     * for longer than this threshold are considered slow, and are processed by the profiler
     * running in the SLOW_OP mode. For details see [MongoDB documentation](https://docs.mongodb.com/v5.0/reference/configuration-options/#operationProfiling.slowOpThresholdMs).
     */
    slowOpThreshold?: number;
}

export enum Mongocfgconfig50_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1,
}

export function mongocfgconfig50_OperationProfiling_ModeFromJSON(
    object: any,
): Mongocfgconfig50_OperationProfiling_Mode {
    switch (object) {
        case 0:
        case 'MODE_UNSPECIFIED':
            return Mongocfgconfig50_OperationProfiling_Mode.MODE_UNSPECIFIED;
        case 1:
        case 'OFF':
            return Mongocfgconfig50_OperationProfiling_Mode.OFF;
        case 2:
        case 'SLOW_OP':
            return Mongocfgconfig50_OperationProfiling_Mode.SLOW_OP;
        case 3:
        case 'ALL':
            return Mongocfgconfig50_OperationProfiling_Mode.ALL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongocfgconfig50_OperationProfiling_Mode.UNRECOGNIZED;
    }
}

export function mongocfgconfig50_OperationProfiling_ModeToJSON(
    object: Mongocfgconfig50_OperationProfiling_Mode,
): string {
    switch (object) {
        case Mongocfgconfig50_OperationProfiling_Mode.MODE_UNSPECIFIED:
            return 'MODE_UNSPECIFIED';
        case Mongocfgconfig50_OperationProfiling_Mode.OFF:
            return 'OFF';
        case Mongocfgconfig50_OperationProfiling_Mode.SLOW_OP:
            return 'SLOW_OP';
        case Mongocfgconfig50_OperationProfiling_Mode.ALL:
            return 'ALL';
        default:
            return 'UNKNOWN';
    }
}

export interface Mongocfgconfig50_Network {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Network';
    /** The maximum number of simultaneous connections that mongocfg will accept. */
    maxIncomingConnections?: number;
}

export interface Mongosconfig50 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0';
    /** Network settings for mongos. */
    net?: Mongosconfig50_Network;
}

export interface Mongosconfig50_Network {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0.Network';
    /** The maximum number of simultaneous connections that mongos will accept. */
    maxIncomingConnections?: number;
    /** Compression settings */
    compression?: Mongosconfig50_Network_Compression;
}

export interface Mongosconfig50_Network_Compression {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0.Network.Compression';
    /**
     * Specifies the default compressor(s) to use for communication between this mongod or mongos instance and:
     * - other members of the deployment if the instance is part of a replica set or a sharded cluster
     * - mongosh
     * - drivers that support the OP_COMPRESSED message format.
     * MongoDB supports the following compressors:
     */
    compressors: Mongosconfig50_Network_Compression_Compressor[];
}

export enum Mongosconfig50_Network_Compression_Compressor {
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

export function mongosconfig50_Network_Compression_CompressorFromJSON(
    object: any,
): Mongosconfig50_Network_Compression_Compressor {
    switch (object) {
        case 0:
        case 'COMPRESSOR_UNSPECIFIED':
            return Mongosconfig50_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED;
        case 1:
        case 'SNAPPY':
            return Mongosconfig50_Network_Compression_Compressor.SNAPPY;
        case 2:
        case 'ZLIB':
            return Mongosconfig50_Network_Compression_Compressor.ZLIB;
        case 3:
        case 'ZSTD':
            return Mongosconfig50_Network_Compression_Compressor.ZSTD;
        case 4:
        case 'DISABLED':
            return Mongosconfig50_Network_Compression_Compressor.DISABLED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongosconfig50_Network_Compression_Compressor.UNRECOGNIZED;
    }
}

export function mongosconfig50_Network_Compression_CompressorToJSON(
    object: Mongosconfig50_Network_Compression_Compressor,
): string {
    switch (object) {
        case Mongosconfig50_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED:
            return 'COMPRESSOR_UNSPECIFIED';
        case Mongosconfig50_Network_Compression_Compressor.SNAPPY:
            return 'SNAPPY';
        case Mongosconfig50_Network_Compression_Compressor.ZLIB:
            return 'ZLIB';
        case Mongosconfig50_Network_Compression_Compressor.ZSTD:
            return 'ZSTD';
        case Mongosconfig50_Network_Compression_Compressor.DISABLED:
            return 'DISABLED';
        default:
            return 'UNKNOWN';
    }
}

export interface Mongodconfigset50 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet5_0';
    /**
     * Effective mongod settings for a MongoDB 5.0 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Mongodconfig50;
    /** User-defined mongod settings for a MongoDB 5.0 cluster. */
    userConfig?: Mongodconfig50;
    /** Default mongod configuration for a MongoDB 5.0 cluster. */
    defaultConfig?: Mongodconfig50;
}

export interface Mongocfgconfigset50 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet5_0';
    /**
     * Effective mongocfg settings for a MongoDB 5.0 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Mongocfgconfig50;
    /** User-defined mongocfg settings for a MongoDB 5.0 cluster. */
    userConfig?: Mongocfgconfig50;
    /** Default mongocfg configuration for a MongoDB 5.0 cluster. */
    defaultConfig?: Mongocfgconfig50;
}

export interface Mongosconfigset50 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet5_0';
    /**
     * Effective mongos settings for a MongoDB 5.0 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Mongosconfig50;
    /** User-defined mongos settings for a MongoDB 5.0 cluster. */
    userConfig?: Mongosconfig50;
    /** Default mongos configuration for a MongoDB 5.0 cluster. */
    defaultConfig?: Mongosconfig50;
}

const baseMongodconfig50: object = { $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0' };

export const Mongodconfig50 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0' as const,

    encode(message: Mongodconfig50, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.storage !== undefined) {
            Mongodconfig50_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
        }
        if (message.operationProfiling !== undefined) {
            Mongodconfig50_OperationProfiling.encode(
                message.operationProfiling,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.net !== undefined) {
            Mongodconfig50_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
        }
        if (message.setParameter !== undefined) {
            Mongodconfig50_SetParameter.encode(
                message.setParameter,
                writer.uint32(34).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig50 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfig50 } as Mongodconfig50;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = Mongodconfig50_Storage.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.operationProfiling = Mongodconfig50_OperationProfiling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.net = Mongodconfig50_Network.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.setParameter = Mongodconfig50_SetParameter.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodconfig50 {
        const message = { ...baseMongodconfig50 } as Mongodconfig50;
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? Mongodconfig50_Storage.fromJSON(object.storage)
                : undefined;
        message.operationProfiling =
            object.operationProfiling !== undefined && object.operationProfiling !== null
                ? Mongodconfig50_OperationProfiling.fromJSON(object.operationProfiling)
                : undefined;
        message.net =
            object.net !== undefined && object.net !== null
                ? Mongodconfig50_Network.fromJSON(object.net)
                : undefined;
        message.setParameter =
            object.setParameter !== undefined && object.setParameter !== null
                ? Mongodconfig50_SetParameter.fromJSON(object.setParameter)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig50): unknown {
        const obj: any = {};
        message.storage !== undefined &&
            (obj.storage = message.storage
                ? Mongodconfig50_Storage.toJSON(message.storage)
                : undefined);
        message.operationProfiling !== undefined &&
            (obj.operationProfiling = message.operationProfiling
                ? Mongodconfig50_OperationProfiling.toJSON(message.operationProfiling)
                : undefined);
        message.net !== undefined &&
            (obj.net = message.net ? Mongodconfig50_Network.toJSON(message.net) : undefined);
        message.setParameter !== undefined &&
            (obj.setParameter = message.setParameter
                ? Mongodconfig50_SetParameter.toJSON(message.setParameter)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig50>, I>>(object: I): Mongodconfig50 {
        const message = { ...baseMongodconfig50 } as Mongodconfig50;
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? Mongodconfig50_Storage.fromPartial(object.storage)
                : undefined;
        message.operationProfiling =
            object.operationProfiling !== undefined && object.operationProfiling !== null
                ? Mongodconfig50_OperationProfiling.fromPartial(object.operationProfiling)
                : undefined;
        message.net =
            object.net !== undefined && object.net !== null
                ? Mongodconfig50_Network.fromPartial(object.net)
                : undefined;
        message.setParameter =
            object.setParameter !== undefined && object.setParameter !== null
                ? Mongodconfig50_SetParameter.fromPartial(object.setParameter)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongodconfig50.$type, Mongodconfig50);

const baseMongodconfig50_Storage: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage',
};

export const Mongodconfig50_Storage = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage' as const,

    encode(message: Mongodconfig50_Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.wiredTiger !== undefined) {
            Mongodconfig50_Storage_WiredTiger.encode(
                message.wiredTiger,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.journal !== undefined) {
            Mongodconfig50_Storage_Journal.encode(
                message.journal,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig50_Storage {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfig50_Storage } as Mongodconfig50_Storage;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiredTiger = Mongodconfig50_Storage_WiredTiger.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.journal = Mongodconfig50_Storage_Journal.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodconfig50_Storage {
        const message = { ...baseMongodconfig50_Storage } as Mongodconfig50_Storage;
        message.wiredTiger =
            object.wiredTiger !== undefined && object.wiredTiger !== null
                ? Mongodconfig50_Storage_WiredTiger.fromJSON(object.wiredTiger)
                : undefined;
        message.journal =
            object.journal !== undefined && object.journal !== null
                ? Mongodconfig50_Storage_Journal.fromJSON(object.journal)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig50_Storage): unknown {
        const obj: any = {};
        message.wiredTiger !== undefined &&
            (obj.wiredTiger = message.wiredTiger
                ? Mongodconfig50_Storage_WiredTiger.toJSON(message.wiredTiger)
                : undefined);
        message.journal !== undefined &&
            (obj.journal = message.journal
                ? Mongodconfig50_Storage_Journal.toJSON(message.journal)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig50_Storage>, I>>(
        object: I,
    ): Mongodconfig50_Storage {
        const message = { ...baseMongodconfig50_Storage } as Mongodconfig50_Storage;
        message.wiredTiger =
            object.wiredTiger !== undefined && object.wiredTiger !== null
                ? Mongodconfig50_Storage_WiredTiger.fromPartial(object.wiredTiger)
                : undefined;
        message.journal =
            object.journal !== undefined && object.journal !== null
                ? Mongodconfig50_Storage_Journal.fromPartial(object.journal)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongodconfig50_Storage.$type, Mongodconfig50_Storage);

const baseMongodconfig50_Storage_WiredTiger: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger',
};

export const Mongodconfig50_Storage_WiredTiger = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger' as const,

    encode(
        message: Mongodconfig50_Storage_WiredTiger,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.engineConfig !== undefined) {
            Mongodconfig50_Storage_WiredTiger_EngineConfig.encode(
                message.engineConfig,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.collectionConfig !== undefined) {
            Mongodconfig50_Storage_WiredTiger_CollectionConfig.encode(
                message.collectionConfig,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.indexConfig !== undefined) {
            Mongodconfig50_Storage_WiredTiger_IndexConfig.encode(
                message.indexConfig,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig50_Storage_WiredTiger {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger,
        } as Mongodconfig50_Storage_WiredTiger;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.engineConfig = Mongodconfig50_Storage_WiredTiger_EngineConfig.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.collectionConfig =
                        Mongodconfig50_Storage_WiredTiger_CollectionConfig.decode(
                            reader,
                            reader.uint32(),
                        );
                    break;
                case 3:
                    message.indexConfig = Mongodconfig50_Storage_WiredTiger_IndexConfig.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodconfig50_Storage_WiredTiger {
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger,
        } as Mongodconfig50_Storage_WiredTiger;
        message.engineConfig =
            object.engineConfig !== undefined && object.engineConfig !== null
                ? Mongodconfig50_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig)
                : undefined;
        message.collectionConfig =
            object.collectionConfig !== undefined && object.collectionConfig !== null
                ? Mongodconfig50_Storage_WiredTiger_CollectionConfig.fromJSON(
                      object.collectionConfig,
                  )
                : undefined;
        message.indexConfig =
            object.indexConfig !== undefined && object.indexConfig !== null
                ? Mongodconfig50_Storage_WiredTiger_IndexConfig.fromJSON(object.indexConfig)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig50_Storage_WiredTiger): unknown {
        const obj: any = {};
        message.engineConfig !== undefined &&
            (obj.engineConfig = message.engineConfig
                ? Mongodconfig50_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig)
                : undefined);
        message.collectionConfig !== undefined &&
            (obj.collectionConfig = message.collectionConfig
                ? Mongodconfig50_Storage_WiredTiger_CollectionConfig.toJSON(
                      message.collectionConfig,
                  )
                : undefined);
        message.indexConfig !== undefined &&
            (obj.indexConfig = message.indexConfig
                ? Mongodconfig50_Storage_WiredTiger_IndexConfig.toJSON(message.indexConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig50_Storage_WiredTiger>, I>>(
        object: I,
    ): Mongodconfig50_Storage_WiredTiger {
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger,
        } as Mongodconfig50_Storage_WiredTiger;
        message.engineConfig =
            object.engineConfig !== undefined && object.engineConfig !== null
                ? Mongodconfig50_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig)
                : undefined;
        message.collectionConfig =
            object.collectionConfig !== undefined && object.collectionConfig !== null
                ? Mongodconfig50_Storage_WiredTiger_CollectionConfig.fromPartial(
                      object.collectionConfig,
                  )
                : undefined;
        message.indexConfig =
            object.indexConfig !== undefined && object.indexConfig !== null
                ? Mongodconfig50_Storage_WiredTiger_IndexConfig.fromPartial(object.indexConfig)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongodconfig50_Storage_WiredTiger.$type, Mongodconfig50_Storage_WiredTiger);

const baseMongodconfig50_Storage_WiredTiger_EngineConfig: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger.EngineConfig',
};

export const Mongodconfig50_Storage_WiredTiger_EngineConfig = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger.EngineConfig' as const,

    encode(
        message: Mongodconfig50_Storage_WiredTiger_EngineConfig,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.cacheSizeGb !== undefined) {
            DoubleValue.encode(
                { $type: 'google.protobuf.DoubleValue', value: message.cacheSizeGb! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): Mongodconfig50_Storage_WiredTiger_EngineConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger_EngineConfig,
        } as Mongodconfig50_Storage_WiredTiger_EngineConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cacheSizeGb = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodconfig50_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger_EngineConfig,
        } as Mongodconfig50_Storage_WiredTiger_EngineConfig;
        message.cacheSizeGb =
            object.cacheSizeGb !== undefined && object.cacheSizeGb !== null
                ? Number(object.cacheSizeGb)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig50_Storage_WiredTiger_EngineConfig): unknown {
        const obj: any = {};
        message.cacheSizeGb !== undefined && (obj.cacheSizeGb = message.cacheSizeGb);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig50_Storage_WiredTiger_EngineConfig>, I>>(
        object: I,
    ): Mongodconfig50_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger_EngineConfig,
        } as Mongodconfig50_Storage_WiredTiger_EngineConfig;
        message.cacheSizeGb = object.cacheSizeGb ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(
    Mongodconfig50_Storage_WiredTiger_EngineConfig.$type,
    Mongodconfig50_Storage_WiredTiger_EngineConfig,
);

const baseMongodconfig50_Storage_WiredTiger_CollectionConfig: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger.CollectionConfig',
    blockCompressor: 0,
};

export const Mongodconfig50_Storage_WiredTiger_CollectionConfig = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger.CollectionConfig' as const,

    encode(
        message: Mongodconfig50_Storage_WiredTiger_CollectionConfig,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.blockCompressor !== 0) {
            writer.uint32(8).int32(message.blockCompressor);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): Mongodconfig50_Storage_WiredTiger_CollectionConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger_CollectionConfig,
        } as Mongodconfig50_Storage_WiredTiger_CollectionConfig;
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

    fromJSON(object: any): Mongodconfig50_Storage_WiredTiger_CollectionConfig {
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger_CollectionConfig,
        } as Mongodconfig50_Storage_WiredTiger_CollectionConfig;
        message.blockCompressor =
            object.blockCompressor !== undefined && object.blockCompressor !== null
                ? mongodconfig50_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
                      object.blockCompressor,
                  )
                : 0;
        return message;
    },

    toJSON(message: Mongodconfig50_Storage_WiredTiger_CollectionConfig): unknown {
        const obj: any = {};
        message.blockCompressor !== undefined &&
            (obj.blockCompressor =
                mongodconfig50_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
                    message.blockCompressor,
                ));
        return obj;
    },

    fromPartial<
        I extends Exact<DeepPartial<Mongodconfig50_Storage_WiredTiger_CollectionConfig>, I>,
    >(object: I): Mongodconfig50_Storage_WiredTiger_CollectionConfig {
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger_CollectionConfig,
        } as Mongodconfig50_Storage_WiredTiger_CollectionConfig;
        message.blockCompressor = object.blockCompressor ?? 0;
        return message;
    },
};

messageTypeRegistry.set(
    Mongodconfig50_Storage_WiredTiger_CollectionConfig.$type,
    Mongodconfig50_Storage_WiredTiger_CollectionConfig,
);

const baseMongodconfig50_Storage_WiredTiger_IndexConfig: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger.IndexConfig',
};

export const Mongodconfig50_Storage_WiredTiger_IndexConfig = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.WiredTiger.IndexConfig' as const,

    encode(
        message: Mongodconfig50_Storage_WiredTiger_IndexConfig,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.prefixCompression !== undefined) {
            BoolValue.encode(
                { $type: 'google.protobuf.BoolValue', value: message.prefixCompression! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): Mongodconfig50_Storage_WiredTiger_IndexConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger_IndexConfig,
        } as Mongodconfig50_Storage_WiredTiger_IndexConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.prefixCompression = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodconfig50_Storage_WiredTiger_IndexConfig {
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger_IndexConfig,
        } as Mongodconfig50_Storage_WiredTiger_IndexConfig;
        message.prefixCompression =
            object.prefixCompression !== undefined && object.prefixCompression !== null
                ? Boolean(object.prefixCompression)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig50_Storage_WiredTiger_IndexConfig): unknown {
        const obj: any = {};
        message.prefixCompression !== undefined &&
            (obj.prefixCompression = message.prefixCompression);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig50_Storage_WiredTiger_IndexConfig>, I>>(
        object: I,
    ): Mongodconfig50_Storage_WiredTiger_IndexConfig {
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger_IndexConfig,
        } as Mongodconfig50_Storage_WiredTiger_IndexConfig;
        message.prefixCompression = object.prefixCompression ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(
    Mongodconfig50_Storage_WiredTiger_IndexConfig.$type,
    Mongodconfig50_Storage_WiredTiger_IndexConfig,
);

const baseMongodconfig50_Storage_Journal: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.Journal',
};

export const Mongodconfig50_Storage_Journal = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Storage.Journal' as const,

    encode(
        message: Mongodconfig50_Storage_Journal,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.commitInterval !== undefined) {
            Int64Value.encode(
                { $type: 'google.protobuf.Int64Value', value: message.commitInterval! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig50_Storage_Journal {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfig50_Storage_Journal } as Mongodconfig50_Storage_Journal;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commitInterval = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodconfig50_Storage_Journal {
        const message = { ...baseMongodconfig50_Storage_Journal } as Mongodconfig50_Storage_Journal;
        message.commitInterval =
            object.commitInterval !== undefined && object.commitInterval !== null
                ? Number(object.commitInterval)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig50_Storage_Journal): unknown {
        const obj: any = {};
        message.commitInterval !== undefined && (obj.commitInterval = message.commitInterval);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig50_Storage_Journal>, I>>(
        object: I,
    ): Mongodconfig50_Storage_Journal {
        const message = { ...baseMongodconfig50_Storage_Journal } as Mongodconfig50_Storage_Journal;
        message.commitInterval = object.commitInterval ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongodconfig50_Storage_Journal.$type, Mongodconfig50_Storage_Journal);

const baseMongodconfig50_OperationProfiling: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.OperationProfiling',
    mode: 0,
};

export const Mongodconfig50_OperationProfiling = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.OperationProfiling' as const,

    encode(
        message: Mongodconfig50_OperationProfiling,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.slowOpThreshold !== undefined) {
            Int64Value.encode(
                { $type: 'google.protobuf.Int64Value', value: message.slowOpThreshold! },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.slowOpSampleRate !== undefined) {
            DoubleValue.encode(
                { $type: 'google.protobuf.DoubleValue', value: message.slowOpSampleRate! },
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig50_OperationProfiling {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50_OperationProfiling,
        } as Mongodconfig50_OperationProfiling;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32() as any;
                    break;
                case 2:
                    message.slowOpThreshold = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.slowOpSampleRate = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodconfig50_OperationProfiling {
        const message = {
            ...baseMongodconfig50_OperationProfiling,
        } as Mongodconfig50_OperationProfiling;
        message.mode =
            object.mode !== undefined && object.mode !== null
                ? mongodconfig50_OperationProfiling_ModeFromJSON(object.mode)
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

    toJSON(message: Mongodconfig50_OperationProfiling): unknown {
        const obj: any = {};
        message.mode !== undefined &&
            (obj.mode = mongodconfig50_OperationProfiling_ModeToJSON(message.mode));
        message.slowOpThreshold !== undefined && (obj.slowOpThreshold = message.slowOpThreshold);
        message.slowOpSampleRate !== undefined && (obj.slowOpSampleRate = message.slowOpSampleRate);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig50_OperationProfiling>, I>>(
        object: I,
    ): Mongodconfig50_OperationProfiling {
        const message = {
            ...baseMongodconfig50_OperationProfiling,
        } as Mongodconfig50_OperationProfiling;
        message.mode = object.mode ?? 0;
        message.slowOpThreshold = object.slowOpThreshold ?? undefined;
        message.slowOpSampleRate = object.slowOpSampleRate ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongodconfig50_OperationProfiling.$type, Mongodconfig50_OperationProfiling);

const baseMongodconfig50_Network: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Network',
};

export const Mongodconfig50_Network = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Network' as const,

    encode(message: Mongodconfig50_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.maxIncomingConnections !== undefined) {
            Int64Value.encode(
                { $type: 'google.protobuf.Int64Value', value: message.maxIncomingConnections! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.compression !== undefined) {
            Mongodconfig50_Network_Compression.encode(
                message.compression,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig50_Network {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfig50_Network } as Mongodconfig50_Network;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxIncomingConnections = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 2:
                    message.compression = Mongodconfig50_Network_Compression.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodconfig50_Network {
        const message = { ...baseMongodconfig50_Network } as Mongodconfig50_Network;
        message.maxIncomingConnections =
            object.maxIncomingConnections !== undefined && object.maxIncomingConnections !== null
                ? Number(object.maxIncomingConnections)
                : undefined;
        message.compression =
            object.compression !== undefined && object.compression !== null
                ? Mongodconfig50_Network_Compression.fromJSON(object.compression)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig50_Network): unknown {
        const obj: any = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        message.compression !== undefined &&
            (obj.compression = message.compression
                ? Mongodconfig50_Network_Compression.toJSON(message.compression)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig50_Network>, I>>(
        object: I,
    ): Mongodconfig50_Network {
        const message = { ...baseMongodconfig50_Network } as Mongodconfig50_Network;
        message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
        message.compression =
            object.compression !== undefined && object.compression !== null
                ? Mongodconfig50_Network_Compression.fromPartial(object.compression)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongodconfig50_Network.$type, Mongodconfig50_Network);

const baseMongodconfig50_Network_Compression: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Network.Compression',
    compressors: 0,
};

export const Mongodconfig50_Network_Compression = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.Network.Compression' as const,

    encode(
        message: Mongodconfig50_Network_Compression,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        writer.uint32(10).fork();
        for (const v of message.compressors) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig50_Network_Compression {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50_Network_Compression,
        } as Mongodconfig50_Network_Compression;
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

    fromJSON(object: any): Mongodconfig50_Network_Compression {
        const message = {
            ...baseMongodconfig50_Network_Compression,
        } as Mongodconfig50_Network_Compression;
        message.compressors = (object.compressors ?? []).map((e: any) =>
            mongodconfig50_Network_Compression_CompressorFromJSON(e),
        );
        return message;
    },

    toJSON(message: Mongodconfig50_Network_Compression): unknown {
        const obj: any = {};
        if (message.compressors) {
            obj.compressors = message.compressors.map((e) =>
                mongodconfig50_Network_Compression_CompressorToJSON(e),
            );
        } else {
            obj.compressors = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig50_Network_Compression>, I>>(
        object: I,
    ): Mongodconfig50_Network_Compression {
        const message = {
            ...baseMongodconfig50_Network_Compression,
        } as Mongodconfig50_Network_Compression;
        message.compressors = object.compressors?.map((e) => e) || [];
        return message;
    },
};

messageTypeRegistry.set(
    Mongodconfig50_Network_Compression.$type,
    Mongodconfig50_Network_Compression,
);

const baseMongodconfig50_SetParameter: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.SetParameter',
};

export const Mongodconfig50_SetParameter = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig5_0.SetParameter' as const,

    encode(
        message: Mongodconfig50_SetParameter,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.enableFlowControl !== undefined) {
            BoolValue.encode(
                { $type: 'google.protobuf.BoolValue', value: message.enableFlowControl! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.minSnapshotHistoryWindowInSeconds !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.minSnapshotHistoryWindowInSeconds!,
                },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig50_SetParameter {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfig50_SetParameter } as Mongodconfig50_SetParameter;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enableFlowControl = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.minSnapshotHistoryWindowInSeconds = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodconfig50_SetParameter {
        const message = { ...baseMongodconfig50_SetParameter } as Mongodconfig50_SetParameter;
        message.enableFlowControl =
            object.enableFlowControl !== undefined && object.enableFlowControl !== null
                ? Boolean(object.enableFlowControl)
                : undefined;
        message.minSnapshotHistoryWindowInSeconds =
            object.minSnapshotHistoryWindowInSeconds !== undefined &&
            object.minSnapshotHistoryWindowInSeconds !== null
                ? Number(object.minSnapshotHistoryWindowInSeconds)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig50_SetParameter): unknown {
        const obj: any = {};
        message.enableFlowControl !== undefined &&
            (obj.enableFlowControl = message.enableFlowControl);
        message.minSnapshotHistoryWindowInSeconds !== undefined &&
            (obj.minSnapshotHistoryWindowInSeconds = message.minSnapshotHistoryWindowInSeconds);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig50_SetParameter>, I>>(
        object: I,
    ): Mongodconfig50_SetParameter {
        const message = { ...baseMongodconfig50_SetParameter } as Mongodconfig50_SetParameter;
        message.enableFlowControl = object.enableFlowControl ?? undefined;
        message.minSnapshotHistoryWindowInSeconds =
            object.minSnapshotHistoryWindowInSeconds ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongodconfig50_SetParameter.$type, Mongodconfig50_SetParameter);

const baseMongocfgconfig50: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0',
};

export const Mongocfgconfig50 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0' as const,

    encode(message: Mongocfgconfig50, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.storage !== undefined) {
            Mongocfgconfig50_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
        }
        if (message.operationProfiling !== undefined) {
            Mongocfgconfig50_OperationProfiling.encode(
                message.operationProfiling,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.net !== undefined) {
            Mongocfgconfig50_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfig50 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongocfgconfig50 } as Mongocfgconfig50;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = Mongocfgconfig50_Storage.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.operationProfiling = Mongocfgconfig50_OperationProfiling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.net = Mongocfgconfig50_Network.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongocfgconfig50 {
        const message = { ...baseMongocfgconfig50 } as Mongocfgconfig50;
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? Mongocfgconfig50_Storage.fromJSON(object.storage)
                : undefined;
        message.operationProfiling =
            object.operationProfiling !== undefined && object.operationProfiling !== null
                ? Mongocfgconfig50_OperationProfiling.fromJSON(object.operationProfiling)
                : undefined;
        message.net =
            object.net !== undefined && object.net !== null
                ? Mongocfgconfig50_Network.fromJSON(object.net)
                : undefined;
        return message;
    },

    toJSON(message: Mongocfgconfig50): unknown {
        const obj: any = {};
        message.storage !== undefined &&
            (obj.storage = message.storage
                ? Mongocfgconfig50_Storage.toJSON(message.storage)
                : undefined);
        message.operationProfiling !== undefined &&
            (obj.operationProfiling = message.operationProfiling
                ? Mongocfgconfig50_OperationProfiling.toJSON(message.operationProfiling)
                : undefined);
        message.net !== undefined &&
            (obj.net = message.net ? Mongocfgconfig50_Network.toJSON(message.net) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongocfgconfig50>, I>>(object: I): Mongocfgconfig50 {
        const message = { ...baseMongocfgconfig50 } as Mongocfgconfig50;
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? Mongocfgconfig50_Storage.fromPartial(object.storage)
                : undefined;
        message.operationProfiling =
            object.operationProfiling !== undefined && object.operationProfiling !== null
                ? Mongocfgconfig50_OperationProfiling.fromPartial(object.operationProfiling)
                : undefined;
        message.net =
            object.net !== undefined && object.net !== null
                ? Mongocfgconfig50_Network.fromPartial(object.net)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongocfgconfig50.$type, Mongocfgconfig50);

const baseMongocfgconfig50_Storage: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Storage',
};

export const Mongocfgconfig50_Storage = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Storage' as const,

    encode(
        message: Mongocfgconfig50_Storage,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.wiredTiger !== undefined) {
            Mongocfgconfig50_Storage_WiredTiger.encode(
                message.wiredTiger,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfig50_Storage {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongocfgconfig50_Storage } as Mongocfgconfig50_Storage;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiredTiger = Mongocfgconfig50_Storage_WiredTiger.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongocfgconfig50_Storage {
        const message = { ...baseMongocfgconfig50_Storage } as Mongocfgconfig50_Storage;
        message.wiredTiger =
            object.wiredTiger !== undefined && object.wiredTiger !== null
                ? Mongocfgconfig50_Storage_WiredTiger.fromJSON(object.wiredTiger)
                : undefined;
        return message;
    },

    toJSON(message: Mongocfgconfig50_Storage): unknown {
        const obj: any = {};
        message.wiredTiger !== undefined &&
            (obj.wiredTiger = message.wiredTiger
                ? Mongocfgconfig50_Storage_WiredTiger.toJSON(message.wiredTiger)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongocfgconfig50_Storage>, I>>(
        object: I,
    ): Mongocfgconfig50_Storage {
        const message = { ...baseMongocfgconfig50_Storage } as Mongocfgconfig50_Storage;
        message.wiredTiger =
            object.wiredTiger !== undefined && object.wiredTiger !== null
                ? Mongocfgconfig50_Storage_WiredTiger.fromPartial(object.wiredTiger)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongocfgconfig50_Storage.$type, Mongocfgconfig50_Storage);

const baseMongocfgconfig50_Storage_WiredTiger: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Storage.WiredTiger',
};

export const Mongocfgconfig50_Storage_WiredTiger = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Storage.WiredTiger' as const,

    encode(
        message: Mongocfgconfig50_Storage_WiredTiger,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.engineConfig !== undefined) {
            Mongocfgconfig50_Storage_WiredTiger_EngineConfig.encode(
                message.engineConfig,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfig50_Storage_WiredTiger {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig50_Storage_WiredTiger,
        } as Mongocfgconfig50_Storage_WiredTiger;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.engineConfig = Mongocfgconfig50_Storage_WiredTiger_EngineConfig.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongocfgconfig50_Storage_WiredTiger {
        const message = {
            ...baseMongocfgconfig50_Storage_WiredTiger,
        } as Mongocfgconfig50_Storage_WiredTiger;
        message.engineConfig =
            object.engineConfig !== undefined && object.engineConfig !== null
                ? Mongocfgconfig50_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig)
                : undefined;
        return message;
    },

    toJSON(message: Mongocfgconfig50_Storage_WiredTiger): unknown {
        const obj: any = {};
        message.engineConfig !== undefined &&
            (obj.engineConfig = message.engineConfig
                ? Mongocfgconfig50_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongocfgconfig50_Storage_WiredTiger>, I>>(
        object: I,
    ): Mongocfgconfig50_Storage_WiredTiger {
        const message = {
            ...baseMongocfgconfig50_Storage_WiredTiger,
        } as Mongocfgconfig50_Storage_WiredTiger;
        message.engineConfig =
            object.engineConfig !== undefined && object.engineConfig !== null
                ? Mongocfgconfig50_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(
    Mongocfgconfig50_Storage_WiredTiger.$type,
    Mongocfgconfig50_Storage_WiredTiger,
);

const baseMongocfgconfig50_Storage_WiredTiger_EngineConfig: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Storage.WiredTiger.EngineConfig',
};

export const Mongocfgconfig50_Storage_WiredTiger_EngineConfig = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Storage.WiredTiger.EngineConfig' as const,

    encode(
        message: Mongocfgconfig50_Storage_WiredTiger_EngineConfig,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.cacheSizeGb !== undefined) {
            DoubleValue.encode(
                { $type: 'google.protobuf.DoubleValue', value: message.cacheSizeGb! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): Mongocfgconfig50_Storage_WiredTiger_EngineConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig50_Storage_WiredTiger_EngineConfig,
        } as Mongocfgconfig50_Storage_WiredTiger_EngineConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cacheSizeGb = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongocfgconfig50_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongocfgconfig50_Storage_WiredTiger_EngineConfig,
        } as Mongocfgconfig50_Storage_WiredTiger_EngineConfig;
        message.cacheSizeGb =
            object.cacheSizeGb !== undefined && object.cacheSizeGb !== null
                ? Number(object.cacheSizeGb)
                : undefined;
        return message;
    },

    toJSON(message: Mongocfgconfig50_Storage_WiredTiger_EngineConfig): unknown {
        const obj: any = {};
        message.cacheSizeGb !== undefined && (obj.cacheSizeGb = message.cacheSizeGb);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongocfgconfig50_Storage_WiredTiger_EngineConfig>, I>>(
        object: I,
    ): Mongocfgconfig50_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongocfgconfig50_Storage_WiredTiger_EngineConfig,
        } as Mongocfgconfig50_Storage_WiredTiger_EngineConfig;
        message.cacheSizeGb = object.cacheSizeGb ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(
    Mongocfgconfig50_Storage_WiredTiger_EngineConfig.$type,
    Mongocfgconfig50_Storage_WiredTiger_EngineConfig,
);

const baseMongocfgconfig50_OperationProfiling: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.OperationProfiling',
    mode: 0,
};

export const Mongocfgconfig50_OperationProfiling = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.OperationProfiling' as const,

    encode(
        message: Mongocfgconfig50_OperationProfiling,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.slowOpThreshold !== undefined) {
            Int64Value.encode(
                { $type: 'google.protobuf.Int64Value', value: message.slowOpThreshold! },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfig50_OperationProfiling {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig50_OperationProfiling,
        } as Mongocfgconfig50_OperationProfiling;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32() as any;
                    break;
                case 2:
                    message.slowOpThreshold = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongocfgconfig50_OperationProfiling {
        const message = {
            ...baseMongocfgconfig50_OperationProfiling,
        } as Mongocfgconfig50_OperationProfiling;
        message.mode =
            object.mode !== undefined && object.mode !== null
                ? mongocfgconfig50_OperationProfiling_ModeFromJSON(object.mode)
                : 0;
        message.slowOpThreshold =
            object.slowOpThreshold !== undefined && object.slowOpThreshold !== null
                ? Number(object.slowOpThreshold)
                : undefined;
        return message;
    },

    toJSON(message: Mongocfgconfig50_OperationProfiling): unknown {
        const obj: any = {};
        message.mode !== undefined &&
            (obj.mode = mongocfgconfig50_OperationProfiling_ModeToJSON(message.mode));
        message.slowOpThreshold !== undefined && (obj.slowOpThreshold = message.slowOpThreshold);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongocfgconfig50_OperationProfiling>, I>>(
        object: I,
    ): Mongocfgconfig50_OperationProfiling {
        const message = {
            ...baseMongocfgconfig50_OperationProfiling,
        } as Mongocfgconfig50_OperationProfiling;
        message.mode = object.mode ?? 0;
        message.slowOpThreshold = object.slowOpThreshold ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(
    Mongocfgconfig50_OperationProfiling.$type,
    Mongocfgconfig50_OperationProfiling,
);

const baseMongocfgconfig50_Network: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Network',
};

export const Mongocfgconfig50_Network = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig5_0.Network' as const,

    encode(
        message: Mongocfgconfig50_Network,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.maxIncomingConnections !== undefined) {
            Int64Value.encode(
                { $type: 'google.protobuf.Int64Value', value: message.maxIncomingConnections! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfig50_Network {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongocfgconfig50_Network } as Mongocfgconfig50_Network;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxIncomingConnections = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongocfgconfig50_Network {
        const message = { ...baseMongocfgconfig50_Network } as Mongocfgconfig50_Network;
        message.maxIncomingConnections =
            object.maxIncomingConnections !== undefined && object.maxIncomingConnections !== null
                ? Number(object.maxIncomingConnections)
                : undefined;
        return message;
    },

    toJSON(message: Mongocfgconfig50_Network): unknown {
        const obj: any = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongocfgconfig50_Network>, I>>(
        object: I,
    ): Mongocfgconfig50_Network {
        const message = { ...baseMongocfgconfig50_Network } as Mongocfgconfig50_Network;
        message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongocfgconfig50_Network.$type, Mongocfgconfig50_Network);

const baseMongosconfig50: object = { $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0' };

export const Mongosconfig50 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0' as const,

    encode(message: Mongosconfig50, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.net !== undefined) {
            Mongosconfig50_Network.encode(message.net, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongosconfig50 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongosconfig50 } as Mongosconfig50;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.net = Mongosconfig50_Network.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongosconfig50 {
        const message = { ...baseMongosconfig50 } as Mongosconfig50;
        message.net =
            object.net !== undefined && object.net !== null
                ? Mongosconfig50_Network.fromJSON(object.net)
                : undefined;
        return message;
    },

    toJSON(message: Mongosconfig50): unknown {
        const obj: any = {};
        message.net !== undefined &&
            (obj.net = message.net ? Mongosconfig50_Network.toJSON(message.net) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongosconfig50>, I>>(object: I): Mongosconfig50 {
        const message = { ...baseMongosconfig50 } as Mongosconfig50;
        message.net =
            object.net !== undefined && object.net !== null
                ? Mongosconfig50_Network.fromPartial(object.net)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongosconfig50.$type, Mongosconfig50);

const baseMongosconfig50_Network: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0.Network',
};

export const Mongosconfig50_Network = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0.Network' as const,

    encode(message: Mongosconfig50_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.maxIncomingConnections !== undefined) {
            Int64Value.encode(
                { $type: 'google.protobuf.Int64Value', value: message.maxIncomingConnections! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.compression !== undefined) {
            Mongosconfig50_Network_Compression.encode(
                message.compression,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongosconfig50_Network {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongosconfig50_Network } as Mongosconfig50_Network;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxIncomingConnections = Int64Value.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 2:
                    message.compression = Mongosconfig50_Network_Compression.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongosconfig50_Network {
        const message = { ...baseMongosconfig50_Network } as Mongosconfig50_Network;
        message.maxIncomingConnections =
            object.maxIncomingConnections !== undefined && object.maxIncomingConnections !== null
                ? Number(object.maxIncomingConnections)
                : undefined;
        message.compression =
            object.compression !== undefined && object.compression !== null
                ? Mongosconfig50_Network_Compression.fromJSON(object.compression)
                : undefined;
        return message;
    },

    toJSON(message: Mongosconfig50_Network): unknown {
        const obj: any = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        message.compression !== undefined &&
            (obj.compression = message.compression
                ? Mongosconfig50_Network_Compression.toJSON(message.compression)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongosconfig50_Network>, I>>(
        object: I,
    ): Mongosconfig50_Network {
        const message = { ...baseMongosconfig50_Network } as Mongosconfig50_Network;
        message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
        message.compression =
            object.compression !== undefined && object.compression !== null
                ? Mongosconfig50_Network_Compression.fromPartial(object.compression)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongosconfig50_Network.$type, Mongosconfig50_Network);

const baseMongosconfig50_Network_Compression: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0.Network.Compression',
    compressors: 0,
};

export const Mongosconfig50_Network_Compression = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig5_0.Network.Compression' as const,

    encode(
        message: Mongosconfig50_Network_Compression,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        writer.uint32(10).fork();
        for (const v of message.compressors) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongosconfig50_Network_Compression {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongosconfig50_Network_Compression,
        } as Mongosconfig50_Network_Compression;
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

    fromJSON(object: any): Mongosconfig50_Network_Compression {
        const message = {
            ...baseMongosconfig50_Network_Compression,
        } as Mongosconfig50_Network_Compression;
        message.compressors = (object.compressors ?? []).map((e: any) =>
            mongosconfig50_Network_Compression_CompressorFromJSON(e),
        );
        return message;
    },

    toJSON(message: Mongosconfig50_Network_Compression): unknown {
        const obj: any = {};
        if (message.compressors) {
            obj.compressors = message.compressors.map((e) =>
                mongosconfig50_Network_Compression_CompressorToJSON(e),
            );
        } else {
            obj.compressors = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongosconfig50_Network_Compression>, I>>(
        object: I,
    ): Mongosconfig50_Network_Compression {
        const message = {
            ...baseMongosconfig50_Network_Compression,
        } as Mongosconfig50_Network_Compression;
        message.compressors = object.compressors?.map((e) => e) || [];
        return message;
    },
};

messageTypeRegistry.set(
    Mongosconfig50_Network_Compression.$type,
    Mongosconfig50_Network_Compression,
);

const baseMongodconfigset50: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet5_0',
};

export const Mongodconfigset50 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet5_0' as const,

    encode(message: Mongodconfigset50, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            Mongodconfig50.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            Mongodconfig50.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            Mongodconfig50.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfigset50 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfigset50 } as Mongodconfigset50;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = Mongodconfig50.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = Mongodconfig50.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = Mongodconfig50.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodconfigset50 {
        const message = { ...baseMongodconfigset50 } as Mongodconfigset50;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? Mongodconfig50.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? Mongodconfig50.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? Mongodconfig50.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfigset50): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? Mongodconfig50.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? Mongodconfig50.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? Mongodconfig50.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfigset50>, I>>(object: I): Mongodconfigset50 {
        const message = { ...baseMongodconfigset50 } as Mongodconfigset50;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? Mongodconfig50.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? Mongodconfig50.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? Mongodconfig50.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongodconfigset50.$type, Mongodconfigset50);

const baseMongocfgconfigset50: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet5_0',
};

export const Mongocfgconfigset50 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet5_0' as const,

    encode(message: Mongocfgconfigset50, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            Mongocfgconfig50.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            Mongocfgconfig50.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            Mongocfgconfig50.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfigset50 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongocfgconfigset50 } as Mongocfgconfigset50;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = Mongocfgconfig50.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = Mongocfgconfig50.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = Mongocfgconfig50.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongocfgconfigset50 {
        const message = { ...baseMongocfgconfigset50 } as Mongocfgconfigset50;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? Mongocfgconfig50.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? Mongocfgconfig50.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? Mongocfgconfig50.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },

    toJSON(message: Mongocfgconfigset50): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? Mongocfgconfig50.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? Mongocfgconfig50.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? Mongocfgconfig50.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongocfgconfigset50>, I>>(
        object: I,
    ): Mongocfgconfigset50 {
        const message = { ...baseMongocfgconfigset50 } as Mongocfgconfigset50;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? Mongocfgconfig50.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? Mongocfgconfig50.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? Mongocfgconfig50.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongocfgconfigset50.$type, Mongocfgconfigset50);

const baseMongosconfigset50: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet5_0',
};

export const Mongosconfigset50 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet5_0' as const,

    encode(message: Mongosconfigset50, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            Mongosconfig50.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            Mongosconfig50.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            Mongosconfig50.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongosconfigset50 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongosconfigset50 } as Mongosconfigset50;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = Mongosconfig50.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = Mongosconfig50.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = Mongosconfig50.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongosconfigset50 {
        const message = { ...baseMongosconfigset50 } as Mongosconfigset50;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? Mongosconfig50.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? Mongosconfig50.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? Mongosconfig50.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },

    toJSON(message: Mongosconfigset50): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? Mongosconfig50.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? Mongosconfig50.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? Mongosconfig50.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongosconfigset50>, I>>(object: I): Mongosconfigset50 {
        const message = { ...baseMongosconfigset50 } as Mongosconfigset50;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? Mongosconfig50.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? Mongosconfig50.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? Mongosconfig50.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongosconfigset50.$type, Mongosconfigset50);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
              Exclude<keyof I, KeysOfUnion<P> | '$type'>,
              never
          >;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
