/* eslint-disable */
import { messageTypeRegistry } from '../../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { DoubleValue, BoolValue, Int64Value } from '../../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.mdb.mongodb.v1.config';

/**
 * Configuration of a mongod daemon. Supported options are a limited subset of all
 * options described in [MongoDB documentation](https://docs.mongodb.com/v6.0/reference/configuration-options/).
 */
export interface Mongodconfig60 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0';
    /** `storage` section of mongod configuration. */
    storage?: Mongodconfig60_Storage;
    /** `operationProfiling` section of mongod configuration. */
    operationProfiling?: Mongodconfig60_OperationProfiling;
    /** `net` section of mongod configuration. */
    net?: Mongodconfig60_Network;
    /** `SetParameter` section of mongod configuration. */
    setParameter?: Mongodconfig60_SetParameter;
}

export interface Mongodconfig60_Storage {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage';
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger?: Mongodconfig60_Storage_WiredTiger;
    /** Configuration of the MongoDB [journal](https://docs.mongodb.com/v6.0/reference/glossary/#term-journal). */
    journal?: Mongodconfig60_Storage_Journal;
}

/** Configuration of WiredTiger storage engine. */
export interface Mongodconfig60_Storage_WiredTiger {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger';
    /** Engine configuration for WiredTiger. */
    engineConfig?: Mongodconfig60_Storage_WiredTiger_EngineConfig;
    /** Collection configuration for WiredTiger. */
    collectionConfig?: Mongodconfig60_Storage_WiredTiger_CollectionConfig;
    /** Index configuration for WiredTiger */
    indexConfig?: Mongodconfig60_Storage_WiredTiger_IndexConfig;
}

export interface Mongodconfig60_Storage_WiredTiger_EngineConfig {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger.EngineConfig';
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb?: number;
}

export interface Mongodconfig60_Storage_WiredTiger_CollectionConfig {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger.CollectionConfig';
    /** Default type of compression to use for collection data. */
    blockCompressor: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor;
}

export enum Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor {
    COMPRESSOR_UNSPECIFIED = 0,
    /** NONE - No compression. */
    NONE = 1,
    /** SNAPPY - The [Snappy](https://docs.mongodb.com/v6.0/reference/glossary/#term-snappy) compression. */
    SNAPPY = 2,
    /** ZLIB - The [zlib](https://docs.mongodb.com/v6.0/reference/glossary/#term-zlib) compression. */
    ZLIB = 3,
    /** ZSTD - The [zstd](https://docs.mongodb.com/v6.0/reference/glossary/#term-zstd) compression. */
    ZSTD = 4,
    UNRECOGNIZED = -1,
}

export function mongodconfig60_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
    object: any,
): Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor {
    switch (object) {
        case 0:
        case 'COMPRESSOR_UNSPECIFIED':
            return Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED;
        case 1:
        case 'NONE':
            return Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor.NONE;
        case 2:
        case 'SNAPPY':
            return Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY;
        case 3:
        case 'ZLIB':
            return Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB;
        case 4:
        case 'ZSTD':
            return Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED;
    }
}

export function mongodconfig60_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
    object: Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor,
): string {
    switch (object) {
        case Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED:
            return 'COMPRESSOR_UNSPECIFIED';
        case Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor.NONE:
            return 'NONE';
        case Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY:
            return 'SNAPPY';
        case Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB:
            return 'ZLIB';
        case Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD:
            return 'ZSTD';
        default:
            return 'UNKNOWN';
    }
}

export interface Mongodconfig60_Storage_WiredTiger_IndexConfig {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger.IndexConfig';
    /** Enables or disables [prefix compression](https://www.mongodb.com/docs/manual/reference/glossary/#std-term-prefix-compression) */
    prefixCompression?: boolean;
}

export interface Mongodconfig60_Storage_Journal {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.Journal';
    /**
     * Commit interval between journal operations, in milliseconds.
     * Default: 100.
     */
    commitInterval?: number;
}

export interface Mongodconfig60_OperationProfiling {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.OperationProfiling';
    /** Mode which specifies operations that should be profiled. */
    mode: Mongodconfig60_OperationProfiling_Mode;
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

export enum Mongodconfig60_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1,
}

export function mongodconfig60_OperationProfiling_ModeFromJSON(
    object: any,
): Mongodconfig60_OperationProfiling_Mode {
    switch (object) {
        case 0:
        case 'MODE_UNSPECIFIED':
            return Mongodconfig60_OperationProfiling_Mode.MODE_UNSPECIFIED;
        case 1:
        case 'OFF':
            return Mongodconfig60_OperationProfiling_Mode.OFF;
        case 2:
        case 'SLOW_OP':
            return Mongodconfig60_OperationProfiling_Mode.SLOW_OP;
        case 3:
        case 'ALL':
            return Mongodconfig60_OperationProfiling_Mode.ALL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongodconfig60_OperationProfiling_Mode.UNRECOGNIZED;
    }
}

export function mongodconfig60_OperationProfiling_ModeToJSON(
    object: Mongodconfig60_OperationProfiling_Mode,
): string {
    switch (object) {
        case Mongodconfig60_OperationProfiling_Mode.MODE_UNSPECIFIED:
            return 'MODE_UNSPECIFIED';
        case Mongodconfig60_OperationProfiling_Mode.OFF:
            return 'OFF';
        case Mongodconfig60_OperationProfiling_Mode.SLOW_OP:
            return 'SLOW_OP';
        case Mongodconfig60_OperationProfiling_Mode.ALL:
            return 'ALL';
        default:
            return 'UNKNOWN';
    }
}

export interface Mongodconfig60_Network {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Network';
    /** The maximum number of simultaneous connections that mongod will accept. */
    maxIncomingConnections?: number;
    /** Compression settings */
    compression?: Mongodconfig60_Network_Compression;
}

export interface Mongodconfig60_Network_Compression {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Network.Compression';
    /**
     * Specifies the default compressor(s) to use for communication between this mongod or mongos instance and:
     * - other members of the deployment if the instance is part of a replica set or a sharded cluster
     * - mongosh
     * - drivers that support the OP_COMPRESSED message format.
     * MongoDB supports the following compressors:
     */
    compressors: Mongodconfig60_Network_Compression_Compressor[];
}

export enum Mongodconfig60_Network_Compression_Compressor {
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

export function mongodconfig60_Network_Compression_CompressorFromJSON(
    object: any,
): Mongodconfig60_Network_Compression_Compressor {
    switch (object) {
        case 0:
        case 'COMPRESSOR_UNSPECIFIED':
            return Mongodconfig60_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED;
        case 1:
        case 'SNAPPY':
            return Mongodconfig60_Network_Compression_Compressor.SNAPPY;
        case 2:
        case 'ZLIB':
            return Mongodconfig60_Network_Compression_Compressor.ZLIB;
        case 3:
        case 'ZSTD':
            return Mongodconfig60_Network_Compression_Compressor.ZSTD;
        case 4:
        case 'DISABLED':
            return Mongodconfig60_Network_Compression_Compressor.DISABLED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongodconfig60_Network_Compression_Compressor.UNRECOGNIZED;
    }
}

export function mongodconfig60_Network_Compression_CompressorToJSON(
    object: Mongodconfig60_Network_Compression_Compressor,
): string {
    switch (object) {
        case Mongodconfig60_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED:
            return 'COMPRESSOR_UNSPECIFIED';
        case Mongodconfig60_Network_Compression_Compressor.SNAPPY:
            return 'SNAPPY';
        case Mongodconfig60_Network_Compression_Compressor.ZLIB:
            return 'ZLIB';
        case Mongodconfig60_Network_Compression_Compressor.ZSTD:
            return 'ZSTD';
        case Mongodconfig60_Network_Compression_Compressor.DISABLED:
            return 'DISABLED';
        default:
            return 'UNKNOWN';
    }
}

export interface Mongodconfig60_SetParameter {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.SetParameter';
    /**
     * Enables or disables the mechanism that controls the rate at which the primary applies its writes with the
     * goal of keeping the secondary members [majority committed](https://www.mongodb.com/docs/v4.2/reference/command/replSetGetStatus/#replSetGetStatus.optimes.lastCommittedOpTime)
     * lag under a configurable maximum value.
     */
    enableFlowControl?: boolean;
    /** The minimum time window in seconds for which the storage engine keeps the snapshot history. */
    minSnapshotHistoryWindowInSeconds?: number;
}

export interface Mongocfgconfig60 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0';
    /** `storage` section of mongocfg configuration. */
    storage?: Mongocfgconfig60_Storage;
    /** `operationProfiling` section of mongocfg configuration. */
    operationProfiling?: Mongocfgconfig60_OperationProfiling;
    /** `net` section of mongocfg configuration. */
    net?: Mongocfgconfig60_Network;
}

export interface Mongocfgconfig60_Storage {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage';
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger?: Mongocfgconfig60_Storage_WiredTiger;
}

/** Configuration of WiredTiger storage engine. */
export interface Mongocfgconfig60_Storage_WiredTiger {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage.WiredTiger';
    /** Engine configuration for WiredTiger. */
    engineConfig?: Mongocfgconfig60_Storage_WiredTiger_EngineConfig;
}

export interface Mongocfgconfig60_Storage_WiredTiger_EngineConfig {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage.WiredTiger.EngineConfig';
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb?: number;
}

export interface Mongocfgconfig60_OperationProfiling {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.OperationProfiling';
    /** Mode which specifies operations that should be profiled. */
    mode: Mongocfgconfig60_OperationProfiling_Mode;
    /**
     * The slow operation time threshold, in milliseconds. Operations that run
     * for longer than this threshold are considered slow, and are processed by the profiler
     * running in the SLOW_OP mode. For details see [MongoDB documentation](https://docs.mongodb.com/v6.0/reference/configuration-options/#operationProfiling.slowOpThresholdMs).
     */
    slowOpThreshold?: number;
}

export enum Mongocfgconfig60_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1,
}

export function mongocfgconfig60_OperationProfiling_ModeFromJSON(
    object: any,
): Mongocfgconfig60_OperationProfiling_Mode {
    switch (object) {
        case 0:
        case 'MODE_UNSPECIFIED':
            return Mongocfgconfig60_OperationProfiling_Mode.MODE_UNSPECIFIED;
        case 1:
        case 'OFF':
            return Mongocfgconfig60_OperationProfiling_Mode.OFF;
        case 2:
        case 'SLOW_OP':
            return Mongocfgconfig60_OperationProfiling_Mode.SLOW_OP;
        case 3:
        case 'ALL':
            return Mongocfgconfig60_OperationProfiling_Mode.ALL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongocfgconfig60_OperationProfiling_Mode.UNRECOGNIZED;
    }
}

export function mongocfgconfig60_OperationProfiling_ModeToJSON(
    object: Mongocfgconfig60_OperationProfiling_Mode,
): string {
    switch (object) {
        case Mongocfgconfig60_OperationProfiling_Mode.MODE_UNSPECIFIED:
            return 'MODE_UNSPECIFIED';
        case Mongocfgconfig60_OperationProfiling_Mode.OFF:
            return 'OFF';
        case Mongocfgconfig60_OperationProfiling_Mode.SLOW_OP:
            return 'SLOW_OP';
        case Mongocfgconfig60_OperationProfiling_Mode.ALL:
            return 'ALL';
        default:
            return 'UNKNOWN';
    }
}

export interface Mongocfgconfig60_Network {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Network';
    /** The maximum number of simultaneous connections that mongocfg will accept. */
    maxIncomingConnections?: number;
}

export interface Mongosconfig60 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0';
    /** Network settings for mongos. */
    net?: Mongosconfig60_Network;
}

export interface Mongosconfig60_Network {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0.Network';
    /** The maximum number of simultaneous connections that mongos will accept. */
    maxIncomingConnections?: number;
    /** Compression settings */
    compression?: Mongosconfig60_Network_Compression;
}

export interface Mongosconfig60_Network_Compression {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0.Network.Compression';
    /**
     * Specifies the default compressor(s) to use for communication between this mongod or mongos instance and:
     * - other members of the deployment if the instance is part of a replica set or a sharded cluster
     * - mongosh
     * - drivers that support the OP_COMPRESSED message format.
     * MongoDB supports the following compressors:
     */
    compressors: Mongosconfig60_Network_Compression_Compressor[];
}

export enum Mongosconfig60_Network_Compression_Compressor {
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

export function mongosconfig60_Network_Compression_CompressorFromJSON(
    object: any,
): Mongosconfig60_Network_Compression_Compressor {
    switch (object) {
        case 0:
        case 'COMPRESSOR_UNSPECIFIED':
            return Mongosconfig60_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED;
        case 1:
        case 'SNAPPY':
            return Mongosconfig60_Network_Compression_Compressor.SNAPPY;
        case 2:
        case 'ZLIB':
            return Mongosconfig60_Network_Compression_Compressor.ZLIB;
        case 3:
        case 'ZSTD':
            return Mongosconfig60_Network_Compression_Compressor.ZSTD;
        case 4:
        case 'DISABLED':
            return Mongosconfig60_Network_Compression_Compressor.DISABLED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongosconfig60_Network_Compression_Compressor.UNRECOGNIZED;
    }
}

export function mongosconfig60_Network_Compression_CompressorToJSON(
    object: Mongosconfig60_Network_Compression_Compressor,
): string {
    switch (object) {
        case Mongosconfig60_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED:
            return 'COMPRESSOR_UNSPECIFIED';
        case Mongosconfig60_Network_Compression_Compressor.SNAPPY:
            return 'SNAPPY';
        case Mongosconfig60_Network_Compression_Compressor.ZLIB:
            return 'ZLIB';
        case Mongosconfig60_Network_Compression_Compressor.ZSTD:
            return 'ZSTD';
        case Mongosconfig60_Network_Compression_Compressor.DISABLED:
            return 'DISABLED';
        default:
            return 'UNKNOWN';
    }
}

export interface Mongodconfigset60 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet6_0';
    /**
     * Effective mongod settings for a MongoDB 6.0 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Mongodconfig60;
    /** User-defined mongod settings for a MongoDB 6.0 cluster. */
    userConfig?: Mongodconfig60;
    /** Default mongod configuration for a MongoDB 6.0 cluster. */
    defaultConfig?: Mongodconfig60;
}

export interface Mongocfgconfigset60 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet6_0';
    /**
     * Effective mongocfg settings for a MongoDB 6.0 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Mongocfgconfig60;
    /** User-defined mongocfg settings for a MongoDB 6.0 cluster. */
    userConfig?: Mongocfgconfig60;
    /** Default mongocfg configuration for a MongoDB 6.0 cluster. */
    defaultConfig?: Mongocfgconfig60;
}

export interface Mongosconfigset60 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet6_0';
    /**
     * Effective mongos settings for a MongoDB 6.0 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Mongosconfig60;
    /** User-defined mongos settings for a MongoDB 6.0 cluster. */
    userConfig?: Mongosconfig60;
    /** Default mongos configuration for a MongoDB 6.0 cluster. */
    defaultConfig?: Mongosconfig60;
}

const baseMongodconfig60: object = { $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0' };

export const Mongodconfig60 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0' as const,

    encode(message: Mongodconfig60, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.storage !== undefined) {
            Mongodconfig60_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
        }
        if (message.operationProfiling !== undefined) {
            Mongodconfig60_OperationProfiling.encode(
                message.operationProfiling,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.net !== undefined) {
            Mongodconfig60_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
        }
        if (message.setParameter !== undefined) {
            Mongodconfig60_SetParameter.encode(
                message.setParameter,
                writer.uint32(34).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig60 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfig60 } as Mongodconfig60;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = Mongodconfig60_Storage.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.operationProfiling = Mongodconfig60_OperationProfiling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.net = Mongodconfig60_Network.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.setParameter = Mongodconfig60_SetParameter.decode(
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

    fromJSON(object: any): Mongodconfig60 {
        const message = { ...baseMongodconfig60 } as Mongodconfig60;
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? Mongodconfig60_Storage.fromJSON(object.storage)
                : undefined;
        message.operationProfiling =
            object.operationProfiling !== undefined && object.operationProfiling !== null
                ? Mongodconfig60_OperationProfiling.fromJSON(object.operationProfiling)
                : undefined;
        message.net =
            object.net !== undefined && object.net !== null
                ? Mongodconfig60_Network.fromJSON(object.net)
                : undefined;
        message.setParameter =
            object.setParameter !== undefined && object.setParameter !== null
                ? Mongodconfig60_SetParameter.fromJSON(object.setParameter)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig60): unknown {
        const obj: any = {};
        message.storage !== undefined &&
            (obj.storage = message.storage
                ? Mongodconfig60_Storage.toJSON(message.storage)
                : undefined);
        message.operationProfiling !== undefined &&
            (obj.operationProfiling = message.operationProfiling
                ? Mongodconfig60_OperationProfiling.toJSON(message.operationProfiling)
                : undefined);
        message.net !== undefined &&
            (obj.net = message.net ? Mongodconfig60_Network.toJSON(message.net) : undefined);
        message.setParameter !== undefined &&
            (obj.setParameter = message.setParameter
                ? Mongodconfig60_SetParameter.toJSON(message.setParameter)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig60>, I>>(object: I): Mongodconfig60 {
        const message = { ...baseMongodconfig60 } as Mongodconfig60;
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? Mongodconfig60_Storage.fromPartial(object.storage)
                : undefined;
        message.operationProfiling =
            object.operationProfiling !== undefined && object.operationProfiling !== null
                ? Mongodconfig60_OperationProfiling.fromPartial(object.operationProfiling)
                : undefined;
        message.net =
            object.net !== undefined && object.net !== null
                ? Mongodconfig60_Network.fromPartial(object.net)
                : undefined;
        message.setParameter =
            object.setParameter !== undefined && object.setParameter !== null
                ? Mongodconfig60_SetParameter.fromPartial(object.setParameter)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongodconfig60.$type, Mongodconfig60);

const baseMongodconfig60_Storage: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage',
};

export const Mongodconfig60_Storage = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage' as const,

    encode(message: Mongodconfig60_Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.wiredTiger !== undefined) {
            Mongodconfig60_Storage_WiredTiger.encode(
                message.wiredTiger,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.journal !== undefined) {
            Mongodconfig60_Storage_Journal.encode(
                message.journal,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig60_Storage {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfig60_Storage } as Mongodconfig60_Storage;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiredTiger = Mongodconfig60_Storage_WiredTiger.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.journal = Mongodconfig60_Storage_Journal.decode(
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

    fromJSON(object: any): Mongodconfig60_Storage {
        const message = { ...baseMongodconfig60_Storage } as Mongodconfig60_Storage;
        message.wiredTiger =
            object.wiredTiger !== undefined && object.wiredTiger !== null
                ? Mongodconfig60_Storage_WiredTiger.fromJSON(object.wiredTiger)
                : undefined;
        message.journal =
            object.journal !== undefined && object.journal !== null
                ? Mongodconfig60_Storage_Journal.fromJSON(object.journal)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig60_Storage): unknown {
        const obj: any = {};
        message.wiredTiger !== undefined &&
            (obj.wiredTiger = message.wiredTiger
                ? Mongodconfig60_Storage_WiredTiger.toJSON(message.wiredTiger)
                : undefined);
        message.journal !== undefined &&
            (obj.journal = message.journal
                ? Mongodconfig60_Storage_Journal.toJSON(message.journal)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig60_Storage>, I>>(
        object: I,
    ): Mongodconfig60_Storage {
        const message = { ...baseMongodconfig60_Storage } as Mongodconfig60_Storage;
        message.wiredTiger =
            object.wiredTiger !== undefined && object.wiredTiger !== null
                ? Mongodconfig60_Storage_WiredTiger.fromPartial(object.wiredTiger)
                : undefined;
        message.journal =
            object.journal !== undefined && object.journal !== null
                ? Mongodconfig60_Storage_Journal.fromPartial(object.journal)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongodconfig60_Storage.$type, Mongodconfig60_Storage);

const baseMongodconfig60_Storage_WiredTiger: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger',
};

export const Mongodconfig60_Storage_WiredTiger = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger' as const,

    encode(
        message: Mongodconfig60_Storage_WiredTiger,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.engineConfig !== undefined) {
            Mongodconfig60_Storage_WiredTiger_EngineConfig.encode(
                message.engineConfig,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.collectionConfig !== undefined) {
            Mongodconfig60_Storage_WiredTiger_CollectionConfig.encode(
                message.collectionConfig,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.indexConfig !== undefined) {
            Mongodconfig60_Storage_WiredTiger_IndexConfig.encode(
                message.indexConfig,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig60_Storage_WiredTiger {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig60_Storage_WiredTiger,
        } as Mongodconfig60_Storage_WiredTiger;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.engineConfig = Mongodconfig60_Storage_WiredTiger_EngineConfig.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.collectionConfig =
                        Mongodconfig60_Storage_WiredTiger_CollectionConfig.decode(
                            reader,
                            reader.uint32(),
                        );
                    break;
                case 3:
                    message.indexConfig = Mongodconfig60_Storage_WiredTiger_IndexConfig.decode(
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

    fromJSON(object: any): Mongodconfig60_Storage_WiredTiger {
        const message = {
            ...baseMongodconfig60_Storage_WiredTiger,
        } as Mongodconfig60_Storage_WiredTiger;
        message.engineConfig =
            object.engineConfig !== undefined && object.engineConfig !== null
                ? Mongodconfig60_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig)
                : undefined;
        message.collectionConfig =
            object.collectionConfig !== undefined && object.collectionConfig !== null
                ? Mongodconfig60_Storage_WiredTiger_CollectionConfig.fromJSON(
                      object.collectionConfig,
                  )
                : undefined;
        message.indexConfig =
            object.indexConfig !== undefined && object.indexConfig !== null
                ? Mongodconfig60_Storage_WiredTiger_IndexConfig.fromJSON(object.indexConfig)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig60_Storage_WiredTiger): unknown {
        const obj: any = {};
        message.engineConfig !== undefined &&
            (obj.engineConfig = message.engineConfig
                ? Mongodconfig60_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig)
                : undefined);
        message.collectionConfig !== undefined &&
            (obj.collectionConfig = message.collectionConfig
                ? Mongodconfig60_Storage_WiredTiger_CollectionConfig.toJSON(
                      message.collectionConfig,
                  )
                : undefined);
        message.indexConfig !== undefined &&
            (obj.indexConfig = message.indexConfig
                ? Mongodconfig60_Storage_WiredTiger_IndexConfig.toJSON(message.indexConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig60_Storage_WiredTiger>, I>>(
        object: I,
    ): Mongodconfig60_Storage_WiredTiger {
        const message = {
            ...baseMongodconfig60_Storage_WiredTiger,
        } as Mongodconfig60_Storage_WiredTiger;
        message.engineConfig =
            object.engineConfig !== undefined && object.engineConfig !== null
                ? Mongodconfig60_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig)
                : undefined;
        message.collectionConfig =
            object.collectionConfig !== undefined && object.collectionConfig !== null
                ? Mongodconfig60_Storage_WiredTiger_CollectionConfig.fromPartial(
                      object.collectionConfig,
                  )
                : undefined;
        message.indexConfig =
            object.indexConfig !== undefined && object.indexConfig !== null
                ? Mongodconfig60_Storage_WiredTiger_IndexConfig.fromPartial(object.indexConfig)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongodconfig60_Storage_WiredTiger.$type, Mongodconfig60_Storage_WiredTiger);

const baseMongodconfig60_Storage_WiredTiger_EngineConfig: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger.EngineConfig',
};

export const Mongodconfig60_Storage_WiredTiger_EngineConfig = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger.EngineConfig' as const,

    encode(
        message: Mongodconfig60_Storage_WiredTiger_EngineConfig,
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
    ): Mongodconfig60_Storage_WiredTiger_EngineConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig60_Storage_WiredTiger_EngineConfig,
        } as Mongodconfig60_Storage_WiredTiger_EngineConfig;
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

    fromJSON(object: any): Mongodconfig60_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongodconfig60_Storage_WiredTiger_EngineConfig,
        } as Mongodconfig60_Storage_WiredTiger_EngineConfig;
        message.cacheSizeGb =
            object.cacheSizeGb !== undefined && object.cacheSizeGb !== null
                ? Number(object.cacheSizeGb)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig60_Storage_WiredTiger_EngineConfig): unknown {
        const obj: any = {};
        message.cacheSizeGb !== undefined && (obj.cacheSizeGb = message.cacheSizeGb);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig60_Storage_WiredTiger_EngineConfig>, I>>(
        object: I,
    ): Mongodconfig60_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongodconfig60_Storage_WiredTiger_EngineConfig,
        } as Mongodconfig60_Storage_WiredTiger_EngineConfig;
        message.cacheSizeGb = object.cacheSizeGb ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(
    Mongodconfig60_Storage_WiredTiger_EngineConfig.$type,
    Mongodconfig60_Storage_WiredTiger_EngineConfig,
);

const baseMongodconfig60_Storage_WiredTiger_CollectionConfig: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger.CollectionConfig',
    blockCompressor: 0,
};

export const Mongodconfig60_Storage_WiredTiger_CollectionConfig = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger.CollectionConfig' as const,

    encode(
        message: Mongodconfig60_Storage_WiredTiger_CollectionConfig,
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
    ): Mongodconfig60_Storage_WiredTiger_CollectionConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig60_Storage_WiredTiger_CollectionConfig,
        } as Mongodconfig60_Storage_WiredTiger_CollectionConfig;
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

    fromJSON(object: any): Mongodconfig60_Storage_WiredTiger_CollectionConfig {
        const message = {
            ...baseMongodconfig60_Storage_WiredTiger_CollectionConfig,
        } as Mongodconfig60_Storage_WiredTiger_CollectionConfig;
        message.blockCompressor =
            object.blockCompressor !== undefined && object.blockCompressor !== null
                ? mongodconfig60_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
                      object.blockCompressor,
                  )
                : 0;
        return message;
    },

    toJSON(message: Mongodconfig60_Storage_WiredTiger_CollectionConfig): unknown {
        const obj: any = {};
        message.blockCompressor !== undefined &&
            (obj.blockCompressor =
                mongodconfig60_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
                    message.blockCompressor,
                ));
        return obj;
    },

    fromPartial<
        I extends Exact<DeepPartial<Mongodconfig60_Storage_WiredTiger_CollectionConfig>, I>,
    >(object: I): Mongodconfig60_Storage_WiredTiger_CollectionConfig {
        const message = {
            ...baseMongodconfig60_Storage_WiredTiger_CollectionConfig,
        } as Mongodconfig60_Storage_WiredTiger_CollectionConfig;
        message.blockCompressor = object.blockCompressor ?? 0;
        return message;
    },
};

messageTypeRegistry.set(
    Mongodconfig60_Storage_WiredTiger_CollectionConfig.$type,
    Mongodconfig60_Storage_WiredTiger_CollectionConfig,
);

const baseMongodconfig60_Storage_WiredTiger_IndexConfig: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger.IndexConfig',
};

export const Mongodconfig60_Storage_WiredTiger_IndexConfig = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger.IndexConfig' as const,

    encode(
        message: Mongodconfig60_Storage_WiredTiger_IndexConfig,
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
    ): Mongodconfig60_Storage_WiredTiger_IndexConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig60_Storage_WiredTiger_IndexConfig,
        } as Mongodconfig60_Storage_WiredTiger_IndexConfig;
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

    fromJSON(object: any): Mongodconfig60_Storage_WiredTiger_IndexConfig {
        const message = {
            ...baseMongodconfig60_Storage_WiredTiger_IndexConfig,
        } as Mongodconfig60_Storage_WiredTiger_IndexConfig;
        message.prefixCompression =
            object.prefixCompression !== undefined && object.prefixCompression !== null
                ? Boolean(object.prefixCompression)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig60_Storage_WiredTiger_IndexConfig): unknown {
        const obj: any = {};
        message.prefixCompression !== undefined &&
            (obj.prefixCompression = message.prefixCompression);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig60_Storage_WiredTiger_IndexConfig>, I>>(
        object: I,
    ): Mongodconfig60_Storage_WiredTiger_IndexConfig {
        const message = {
            ...baseMongodconfig60_Storage_WiredTiger_IndexConfig,
        } as Mongodconfig60_Storage_WiredTiger_IndexConfig;
        message.prefixCompression = object.prefixCompression ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(
    Mongodconfig60_Storage_WiredTiger_IndexConfig.$type,
    Mongodconfig60_Storage_WiredTiger_IndexConfig,
);

const baseMongodconfig60_Storage_Journal: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.Journal',
};

export const Mongodconfig60_Storage_Journal = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.Journal' as const,

    encode(
        message: Mongodconfig60_Storage_Journal,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.commitInterval !== undefined) {
            Int64Value.encode(
                { $type: 'google.protobuf.Int64Value', value: message.commitInterval! },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig60_Storage_Journal {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfig60_Storage_Journal } as Mongodconfig60_Storage_Journal;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.commitInterval = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodconfig60_Storage_Journal {
        const message = { ...baseMongodconfig60_Storage_Journal } as Mongodconfig60_Storage_Journal;
        message.commitInterval =
            object.commitInterval !== undefined && object.commitInterval !== null
                ? Number(object.commitInterval)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig60_Storage_Journal): unknown {
        const obj: any = {};
        message.commitInterval !== undefined && (obj.commitInterval = message.commitInterval);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig60_Storage_Journal>, I>>(
        object: I,
    ): Mongodconfig60_Storage_Journal {
        const message = { ...baseMongodconfig60_Storage_Journal } as Mongodconfig60_Storage_Journal;
        message.commitInterval = object.commitInterval ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongodconfig60_Storage_Journal.$type, Mongodconfig60_Storage_Journal);

const baseMongodconfig60_OperationProfiling: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.OperationProfiling',
    mode: 0,
};

export const Mongodconfig60_OperationProfiling = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.OperationProfiling' as const,

    encode(
        message: Mongodconfig60_OperationProfiling,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig60_OperationProfiling {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig60_OperationProfiling,
        } as Mongodconfig60_OperationProfiling;
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

    fromJSON(object: any): Mongodconfig60_OperationProfiling {
        const message = {
            ...baseMongodconfig60_OperationProfiling,
        } as Mongodconfig60_OperationProfiling;
        message.mode =
            object.mode !== undefined && object.mode !== null
                ? mongodconfig60_OperationProfiling_ModeFromJSON(object.mode)
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

    toJSON(message: Mongodconfig60_OperationProfiling): unknown {
        const obj: any = {};
        message.mode !== undefined &&
            (obj.mode = mongodconfig60_OperationProfiling_ModeToJSON(message.mode));
        message.slowOpThreshold !== undefined && (obj.slowOpThreshold = message.slowOpThreshold);
        message.slowOpSampleRate !== undefined && (obj.slowOpSampleRate = message.slowOpSampleRate);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig60_OperationProfiling>, I>>(
        object: I,
    ): Mongodconfig60_OperationProfiling {
        const message = {
            ...baseMongodconfig60_OperationProfiling,
        } as Mongodconfig60_OperationProfiling;
        message.mode = object.mode ?? 0;
        message.slowOpThreshold = object.slowOpThreshold ?? undefined;
        message.slowOpSampleRate = object.slowOpSampleRate ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongodconfig60_OperationProfiling.$type, Mongodconfig60_OperationProfiling);

const baseMongodconfig60_Network: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Network',
};

export const Mongodconfig60_Network = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Network' as const,

    encode(message: Mongodconfig60_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.maxIncomingConnections !== undefined) {
            Int64Value.encode(
                { $type: 'google.protobuf.Int64Value', value: message.maxIncomingConnections! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.compression !== undefined) {
            Mongodconfig60_Network_Compression.encode(
                message.compression,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig60_Network {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfig60_Network } as Mongodconfig60_Network;
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
                    message.compression = Mongodconfig60_Network_Compression.decode(
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

    fromJSON(object: any): Mongodconfig60_Network {
        const message = { ...baseMongodconfig60_Network } as Mongodconfig60_Network;
        message.maxIncomingConnections =
            object.maxIncomingConnections !== undefined && object.maxIncomingConnections !== null
                ? Number(object.maxIncomingConnections)
                : undefined;
        message.compression =
            object.compression !== undefined && object.compression !== null
                ? Mongodconfig60_Network_Compression.fromJSON(object.compression)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig60_Network): unknown {
        const obj: any = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        message.compression !== undefined &&
            (obj.compression = message.compression
                ? Mongodconfig60_Network_Compression.toJSON(message.compression)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig60_Network>, I>>(
        object: I,
    ): Mongodconfig60_Network {
        const message = { ...baseMongodconfig60_Network } as Mongodconfig60_Network;
        message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
        message.compression =
            object.compression !== undefined && object.compression !== null
                ? Mongodconfig60_Network_Compression.fromPartial(object.compression)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongodconfig60_Network.$type, Mongodconfig60_Network);

const baseMongodconfig60_Network_Compression: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Network.Compression',
    compressors: 0,
};

export const Mongodconfig60_Network_Compression = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Network.Compression' as const,

    encode(
        message: Mongodconfig60_Network_Compression,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        writer.uint32(10).fork();
        for (const v of message.compressors) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig60_Network_Compression {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig60_Network_Compression,
        } as Mongodconfig60_Network_Compression;
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

    fromJSON(object: any): Mongodconfig60_Network_Compression {
        const message = {
            ...baseMongodconfig60_Network_Compression,
        } as Mongodconfig60_Network_Compression;
        message.compressors = (object.compressors ?? []).map((e: any) =>
            mongodconfig60_Network_Compression_CompressorFromJSON(e),
        );
        return message;
    },

    toJSON(message: Mongodconfig60_Network_Compression): unknown {
        const obj: any = {};
        if (message.compressors) {
            obj.compressors = message.compressors.map((e) =>
                mongodconfig60_Network_Compression_CompressorToJSON(e),
            );
        } else {
            obj.compressors = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig60_Network_Compression>, I>>(
        object: I,
    ): Mongodconfig60_Network_Compression {
        const message = {
            ...baseMongodconfig60_Network_Compression,
        } as Mongodconfig60_Network_Compression;
        message.compressors = object.compressors?.map((e) => e) || [];
        return message;
    },
};

messageTypeRegistry.set(
    Mongodconfig60_Network_Compression.$type,
    Mongodconfig60_Network_Compression,
);

const baseMongodconfig60_SetParameter: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.SetParameter',
};

export const Mongodconfig60_SetParameter = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.SetParameter' as const,

    encode(
        message: Mongodconfig60_SetParameter,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig60_SetParameter {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfig60_SetParameter } as Mongodconfig60_SetParameter;
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

    fromJSON(object: any): Mongodconfig60_SetParameter {
        const message = { ...baseMongodconfig60_SetParameter } as Mongodconfig60_SetParameter;
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

    toJSON(message: Mongodconfig60_SetParameter): unknown {
        const obj: any = {};
        message.enableFlowControl !== undefined &&
            (obj.enableFlowControl = message.enableFlowControl);
        message.minSnapshotHistoryWindowInSeconds !== undefined &&
            (obj.minSnapshotHistoryWindowInSeconds = message.minSnapshotHistoryWindowInSeconds);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig60_SetParameter>, I>>(
        object: I,
    ): Mongodconfig60_SetParameter {
        const message = { ...baseMongodconfig60_SetParameter } as Mongodconfig60_SetParameter;
        message.enableFlowControl = object.enableFlowControl ?? undefined;
        message.minSnapshotHistoryWindowInSeconds =
            object.minSnapshotHistoryWindowInSeconds ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongodconfig60_SetParameter.$type, Mongodconfig60_SetParameter);

const baseMongocfgconfig60: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0',
};

export const Mongocfgconfig60 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0' as const,

    encode(message: Mongocfgconfig60, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.storage !== undefined) {
            Mongocfgconfig60_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
        }
        if (message.operationProfiling !== undefined) {
            Mongocfgconfig60_OperationProfiling.encode(
                message.operationProfiling,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.net !== undefined) {
            Mongocfgconfig60_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfig60 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongocfgconfig60 } as Mongocfgconfig60;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = Mongocfgconfig60_Storage.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.operationProfiling = Mongocfgconfig60_OperationProfiling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.net = Mongocfgconfig60_Network.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongocfgconfig60 {
        const message = { ...baseMongocfgconfig60 } as Mongocfgconfig60;
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? Mongocfgconfig60_Storage.fromJSON(object.storage)
                : undefined;
        message.operationProfiling =
            object.operationProfiling !== undefined && object.operationProfiling !== null
                ? Mongocfgconfig60_OperationProfiling.fromJSON(object.operationProfiling)
                : undefined;
        message.net =
            object.net !== undefined && object.net !== null
                ? Mongocfgconfig60_Network.fromJSON(object.net)
                : undefined;
        return message;
    },

    toJSON(message: Mongocfgconfig60): unknown {
        const obj: any = {};
        message.storage !== undefined &&
            (obj.storage = message.storage
                ? Mongocfgconfig60_Storage.toJSON(message.storage)
                : undefined);
        message.operationProfiling !== undefined &&
            (obj.operationProfiling = message.operationProfiling
                ? Mongocfgconfig60_OperationProfiling.toJSON(message.operationProfiling)
                : undefined);
        message.net !== undefined &&
            (obj.net = message.net ? Mongocfgconfig60_Network.toJSON(message.net) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongocfgconfig60>, I>>(object: I): Mongocfgconfig60 {
        const message = { ...baseMongocfgconfig60 } as Mongocfgconfig60;
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? Mongocfgconfig60_Storage.fromPartial(object.storage)
                : undefined;
        message.operationProfiling =
            object.operationProfiling !== undefined && object.operationProfiling !== null
                ? Mongocfgconfig60_OperationProfiling.fromPartial(object.operationProfiling)
                : undefined;
        message.net =
            object.net !== undefined && object.net !== null
                ? Mongocfgconfig60_Network.fromPartial(object.net)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongocfgconfig60.$type, Mongocfgconfig60);

const baseMongocfgconfig60_Storage: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage',
};

export const Mongocfgconfig60_Storage = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage' as const,

    encode(
        message: Mongocfgconfig60_Storage,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.wiredTiger !== undefined) {
            Mongocfgconfig60_Storage_WiredTiger.encode(
                message.wiredTiger,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfig60_Storage {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongocfgconfig60_Storage } as Mongocfgconfig60_Storage;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiredTiger = Mongocfgconfig60_Storage_WiredTiger.decode(
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

    fromJSON(object: any): Mongocfgconfig60_Storage {
        const message = { ...baseMongocfgconfig60_Storage } as Mongocfgconfig60_Storage;
        message.wiredTiger =
            object.wiredTiger !== undefined && object.wiredTiger !== null
                ? Mongocfgconfig60_Storage_WiredTiger.fromJSON(object.wiredTiger)
                : undefined;
        return message;
    },

    toJSON(message: Mongocfgconfig60_Storage): unknown {
        const obj: any = {};
        message.wiredTiger !== undefined &&
            (obj.wiredTiger = message.wiredTiger
                ? Mongocfgconfig60_Storage_WiredTiger.toJSON(message.wiredTiger)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongocfgconfig60_Storage>, I>>(
        object: I,
    ): Mongocfgconfig60_Storage {
        const message = { ...baseMongocfgconfig60_Storage } as Mongocfgconfig60_Storage;
        message.wiredTiger =
            object.wiredTiger !== undefined && object.wiredTiger !== null
                ? Mongocfgconfig60_Storage_WiredTiger.fromPartial(object.wiredTiger)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongocfgconfig60_Storage.$type, Mongocfgconfig60_Storage);

const baseMongocfgconfig60_Storage_WiredTiger: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage.WiredTiger',
};

export const Mongocfgconfig60_Storage_WiredTiger = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage.WiredTiger' as const,

    encode(
        message: Mongocfgconfig60_Storage_WiredTiger,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.engineConfig !== undefined) {
            Mongocfgconfig60_Storage_WiredTiger_EngineConfig.encode(
                message.engineConfig,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfig60_Storage_WiredTiger {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig60_Storage_WiredTiger,
        } as Mongocfgconfig60_Storage_WiredTiger;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.engineConfig = Mongocfgconfig60_Storage_WiredTiger_EngineConfig.decode(
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

    fromJSON(object: any): Mongocfgconfig60_Storage_WiredTiger {
        const message = {
            ...baseMongocfgconfig60_Storage_WiredTiger,
        } as Mongocfgconfig60_Storage_WiredTiger;
        message.engineConfig =
            object.engineConfig !== undefined && object.engineConfig !== null
                ? Mongocfgconfig60_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig)
                : undefined;
        return message;
    },

    toJSON(message: Mongocfgconfig60_Storage_WiredTiger): unknown {
        const obj: any = {};
        message.engineConfig !== undefined &&
            (obj.engineConfig = message.engineConfig
                ? Mongocfgconfig60_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongocfgconfig60_Storage_WiredTiger>, I>>(
        object: I,
    ): Mongocfgconfig60_Storage_WiredTiger {
        const message = {
            ...baseMongocfgconfig60_Storage_WiredTiger,
        } as Mongocfgconfig60_Storage_WiredTiger;
        message.engineConfig =
            object.engineConfig !== undefined && object.engineConfig !== null
                ? Mongocfgconfig60_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(
    Mongocfgconfig60_Storage_WiredTiger.$type,
    Mongocfgconfig60_Storage_WiredTiger,
);

const baseMongocfgconfig60_Storage_WiredTiger_EngineConfig: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage.WiredTiger.EngineConfig',
};

export const Mongocfgconfig60_Storage_WiredTiger_EngineConfig = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage.WiredTiger.EngineConfig' as const,

    encode(
        message: Mongocfgconfig60_Storage_WiredTiger_EngineConfig,
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
    ): Mongocfgconfig60_Storage_WiredTiger_EngineConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig60_Storage_WiredTiger_EngineConfig,
        } as Mongocfgconfig60_Storage_WiredTiger_EngineConfig;
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

    fromJSON(object: any): Mongocfgconfig60_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongocfgconfig60_Storage_WiredTiger_EngineConfig,
        } as Mongocfgconfig60_Storage_WiredTiger_EngineConfig;
        message.cacheSizeGb =
            object.cacheSizeGb !== undefined && object.cacheSizeGb !== null
                ? Number(object.cacheSizeGb)
                : undefined;
        return message;
    },

    toJSON(message: Mongocfgconfig60_Storage_WiredTiger_EngineConfig): unknown {
        const obj: any = {};
        message.cacheSizeGb !== undefined && (obj.cacheSizeGb = message.cacheSizeGb);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongocfgconfig60_Storage_WiredTiger_EngineConfig>, I>>(
        object: I,
    ): Mongocfgconfig60_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongocfgconfig60_Storage_WiredTiger_EngineConfig,
        } as Mongocfgconfig60_Storage_WiredTiger_EngineConfig;
        message.cacheSizeGb = object.cacheSizeGb ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(
    Mongocfgconfig60_Storage_WiredTiger_EngineConfig.$type,
    Mongocfgconfig60_Storage_WiredTiger_EngineConfig,
);

const baseMongocfgconfig60_OperationProfiling: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.OperationProfiling',
    mode: 0,
};

export const Mongocfgconfig60_OperationProfiling = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.OperationProfiling' as const,

    encode(
        message: Mongocfgconfig60_OperationProfiling,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfig60_OperationProfiling {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig60_OperationProfiling,
        } as Mongocfgconfig60_OperationProfiling;
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

    fromJSON(object: any): Mongocfgconfig60_OperationProfiling {
        const message = {
            ...baseMongocfgconfig60_OperationProfiling,
        } as Mongocfgconfig60_OperationProfiling;
        message.mode =
            object.mode !== undefined && object.mode !== null
                ? mongocfgconfig60_OperationProfiling_ModeFromJSON(object.mode)
                : 0;
        message.slowOpThreshold =
            object.slowOpThreshold !== undefined && object.slowOpThreshold !== null
                ? Number(object.slowOpThreshold)
                : undefined;
        return message;
    },

    toJSON(message: Mongocfgconfig60_OperationProfiling): unknown {
        const obj: any = {};
        message.mode !== undefined &&
            (obj.mode = mongocfgconfig60_OperationProfiling_ModeToJSON(message.mode));
        message.slowOpThreshold !== undefined && (obj.slowOpThreshold = message.slowOpThreshold);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongocfgconfig60_OperationProfiling>, I>>(
        object: I,
    ): Mongocfgconfig60_OperationProfiling {
        const message = {
            ...baseMongocfgconfig60_OperationProfiling,
        } as Mongocfgconfig60_OperationProfiling;
        message.mode = object.mode ?? 0;
        message.slowOpThreshold = object.slowOpThreshold ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(
    Mongocfgconfig60_OperationProfiling.$type,
    Mongocfgconfig60_OperationProfiling,
);

const baseMongocfgconfig60_Network: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Network',
};

export const Mongocfgconfig60_Network = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Network' as const,

    encode(
        message: Mongocfgconfig60_Network,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfig60_Network {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongocfgconfig60_Network } as Mongocfgconfig60_Network;
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

    fromJSON(object: any): Mongocfgconfig60_Network {
        const message = { ...baseMongocfgconfig60_Network } as Mongocfgconfig60_Network;
        message.maxIncomingConnections =
            object.maxIncomingConnections !== undefined && object.maxIncomingConnections !== null
                ? Number(object.maxIncomingConnections)
                : undefined;
        return message;
    },

    toJSON(message: Mongocfgconfig60_Network): unknown {
        const obj: any = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongocfgconfig60_Network>, I>>(
        object: I,
    ): Mongocfgconfig60_Network {
        const message = { ...baseMongocfgconfig60_Network } as Mongocfgconfig60_Network;
        message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongocfgconfig60_Network.$type, Mongocfgconfig60_Network);

const baseMongosconfig60: object = { $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0' };

export const Mongosconfig60 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0' as const,

    encode(message: Mongosconfig60, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.net !== undefined) {
            Mongosconfig60_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongosconfig60 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongosconfig60 } as Mongosconfig60;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.net = Mongosconfig60_Network.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongosconfig60 {
        const message = { ...baseMongosconfig60 } as Mongosconfig60;
        message.net =
            object.net !== undefined && object.net !== null
                ? Mongosconfig60_Network.fromJSON(object.net)
                : undefined;
        return message;
    },

    toJSON(message: Mongosconfig60): unknown {
        const obj: any = {};
        message.net !== undefined &&
            (obj.net = message.net ? Mongosconfig60_Network.toJSON(message.net) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongosconfig60>, I>>(object: I): Mongosconfig60 {
        const message = { ...baseMongosconfig60 } as Mongosconfig60;
        message.net =
            object.net !== undefined && object.net !== null
                ? Mongosconfig60_Network.fromPartial(object.net)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongosconfig60.$type, Mongosconfig60);

const baseMongosconfig60_Network: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0.Network',
};

export const Mongosconfig60_Network = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0.Network' as const,

    encode(message: Mongosconfig60_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.maxIncomingConnections !== undefined) {
            Int64Value.encode(
                { $type: 'google.protobuf.Int64Value', value: message.maxIncomingConnections! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.compression !== undefined) {
            Mongosconfig60_Network_Compression.encode(
                message.compression,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongosconfig60_Network {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongosconfig60_Network } as Mongosconfig60_Network;
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
                    message.compression = Mongosconfig60_Network_Compression.decode(
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

    fromJSON(object: any): Mongosconfig60_Network {
        const message = { ...baseMongosconfig60_Network } as Mongosconfig60_Network;
        message.maxIncomingConnections =
            object.maxIncomingConnections !== undefined && object.maxIncomingConnections !== null
                ? Number(object.maxIncomingConnections)
                : undefined;
        message.compression =
            object.compression !== undefined && object.compression !== null
                ? Mongosconfig60_Network_Compression.fromJSON(object.compression)
                : undefined;
        return message;
    },

    toJSON(message: Mongosconfig60_Network): unknown {
        const obj: any = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        message.compression !== undefined &&
            (obj.compression = message.compression
                ? Mongosconfig60_Network_Compression.toJSON(message.compression)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongosconfig60_Network>, I>>(
        object: I,
    ): Mongosconfig60_Network {
        const message = { ...baseMongosconfig60_Network } as Mongosconfig60_Network;
        message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
        message.compression =
            object.compression !== undefined && object.compression !== null
                ? Mongosconfig60_Network_Compression.fromPartial(object.compression)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongosconfig60_Network.$type, Mongosconfig60_Network);

const baseMongosconfig60_Network_Compression: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0.Network.Compression',
    compressors: 0,
};

export const Mongosconfig60_Network_Compression = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0.Network.Compression' as const,

    encode(
        message: Mongosconfig60_Network_Compression,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        writer.uint32(10).fork();
        for (const v of message.compressors) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongosconfig60_Network_Compression {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongosconfig60_Network_Compression,
        } as Mongosconfig60_Network_Compression;
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

    fromJSON(object: any): Mongosconfig60_Network_Compression {
        const message = {
            ...baseMongosconfig60_Network_Compression,
        } as Mongosconfig60_Network_Compression;
        message.compressors = (object.compressors ?? []).map((e: any) =>
            mongosconfig60_Network_Compression_CompressorFromJSON(e),
        );
        return message;
    },

    toJSON(message: Mongosconfig60_Network_Compression): unknown {
        const obj: any = {};
        if (message.compressors) {
            obj.compressors = message.compressors.map((e) =>
                mongosconfig60_Network_Compression_CompressorToJSON(e),
            );
        } else {
            obj.compressors = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongosconfig60_Network_Compression>, I>>(
        object: I,
    ): Mongosconfig60_Network_Compression {
        const message = {
            ...baseMongosconfig60_Network_Compression,
        } as Mongosconfig60_Network_Compression;
        message.compressors = object.compressors?.map((e) => e) || [];
        return message;
    },
};

messageTypeRegistry.set(
    Mongosconfig60_Network_Compression.$type,
    Mongosconfig60_Network_Compression,
);

const baseMongodconfigset60: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet6_0',
};

export const Mongodconfigset60 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet6_0' as const,

    encode(message: Mongodconfigset60, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            Mongodconfig60.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            Mongodconfig60.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            Mongodconfig60.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfigset60 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfigset60 } as Mongodconfigset60;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = Mongodconfig60.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = Mongodconfig60.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = Mongodconfig60.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodconfigset60 {
        const message = { ...baseMongodconfigset60 } as Mongodconfigset60;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? Mongodconfig60.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? Mongodconfig60.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? Mongodconfig60.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfigset60): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? Mongodconfig60.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? Mongodconfig60.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? Mongodconfig60.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfigset60>, I>>(object: I): Mongodconfigset60 {
        const message = { ...baseMongodconfigset60 } as Mongodconfigset60;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? Mongodconfig60.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? Mongodconfig60.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? Mongodconfig60.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongodconfigset60.$type, Mongodconfigset60);

const baseMongocfgconfigset60: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet6_0',
};

export const Mongocfgconfigset60 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet6_0' as const,

    encode(message: Mongocfgconfigset60, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            Mongocfgconfig60.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            Mongocfgconfig60.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            Mongocfgconfig60.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfigset60 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongocfgconfigset60 } as Mongocfgconfigset60;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = Mongocfgconfig60.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = Mongocfgconfig60.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = Mongocfgconfig60.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongocfgconfigset60 {
        const message = { ...baseMongocfgconfigset60 } as Mongocfgconfigset60;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? Mongocfgconfig60.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? Mongocfgconfig60.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? Mongocfgconfig60.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },

    toJSON(message: Mongocfgconfigset60): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? Mongocfgconfig60.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? Mongocfgconfig60.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? Mongocfgconfig60.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongocfgconfigset60>, I>>(
        object: I,
    ): Mongocfgconfigset60 {
        const message = { ...baseMongocfgconfigset60 } as Mongocfgconfigset60;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? Mongocfgconfig60.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? Mongocfgconfig60.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? Mongocfgconfig60.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongocfgconfigset60.$type, Mongocfgconfigset60);

const baseMongosconfigset60: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet6_0',
};

export const Mongosconfigset60 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet6_0' as const,

    encode(message: Mongosconfigset60, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            Mongosconfig60.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            Mongosconfig60.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            Mongosconfig60.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongosconfigset60 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongosconfigset60 } as Mongosconfigset60;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = Mongosconfig60.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = Mongosconfig60.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = Mongosconfig60.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongosconfigset60 {
        const message = { ...baseMongosconfigset60 } as Mongosconfigset60;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? Mongosconfig60.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? Mongosconfig60.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? Mongosconfig60.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },

    toJSON(message: Mongosconfigset60): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? Mongosconfig60.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? Mongosconfig60.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? Mongosconfig60.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongosconfigset60>, I>>(object: I): Mongosconfigset60 {
        const message = { ...baseMongosconfigset60 } as Mongosconfigset60;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? Mongosconfig60.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? Mongosconfig60.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? Mongosconfig60.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongosconfigset60.$type, Mongosconfigset60);

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
