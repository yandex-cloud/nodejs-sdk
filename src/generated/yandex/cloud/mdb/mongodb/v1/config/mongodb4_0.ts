/* eslint-disable */
import { messageTypeRegistry } from '../../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { DoubleValue, Int64Value } from '../../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.mdb.mongodb.v1.config';

/**
 * Configuration of a mongod daemon. Supported options are a limited subset of all
 * options described in [MongoDB documentation](https://docs.mongodb.com/v4.0/reference/configuration-options/).
 */
export interface Mongodconfig40 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0';
    /** `storage` section of mongod configuration. */
    storage?: Mongodconfig40_Storage;
    /** `operationProfiling` section of mongod configuration. */
    operationProfiling?: Mongodconfig40_OperationProfiling;
    /** `net` section of mongod configuration. */
    net?: Mongodconfig40_Network;
}

export interface Mongodconfig40_Storage {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Storage';
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger?: Mongodconfig40_Storage_WiredTiger;
    /** Configuration of the MongoDB [journal](https://docs.mongodb.com/v4.0/reference/glossary/#term-journal). */
    journal?: Mongodconfig40_Storage_Journal;
}

/** Configuration of WiredTiger storage engine. */
export interface Mongodconfig40_Storage_WiredTiger {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Storage.WiredTiger';
    /** Engine configuration for WiredTiger. */
    engineConfig?: Mongodconfig40_Storage_WiredTiger_EngineConfig;
    /** Collection configuration for WiredTiger. */
    collectionConfig?: Mongodconfig40_Storage_WiredTiger_CollectionConfig;
}

export interface Mongodconfig40_Storage_WiredTiger_EngineConfig {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Storage.WiredTiger.EngineConfig';
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb?: number;
}

export interface Mongodconfig40_Storage_WiredTiger_CollectionConfig {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Storage.WiredTiger.CollectionConfig';
    /** Default type of compression to use for collection data. */
    blockCompressor: Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor;
}

export enum Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor {
    COMPRESSOR_UNSPECIFIED = 0,
    /** NONE - No compression. */
    NONE = 1,
    /** SNAPPY - The [Snappy](https://docs.mongodb.com/v4.0/reference/glossary/#term-snappy) compression. */
    SNAPPY = 2,
    /** ZLIB - The [zlib](https://docs.mongodb.com/v4.0/reference/glossary/#term-zlib) compression. */
    ZLIB = 3,
    UNRECOGNIZED = -1,
}

export function mongodconfig40_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
    object: any,
): Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor {
    switch (object) {
        case 0:
        case 'COMPRESSOR_UNSPECIFIED':
            return Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED;
        case 1:
        case 'NONE':
            return Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor.NONE;
        case 2:
        case 'SNAPPY':
            return Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY;
        case 3:
        case 'ZLIB':
            return Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED;
    }
}

export function mongodconfig40_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
    object: Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor,
): string {
    switch (object) {
        case Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED:
            return 'COMPRESSOR_UNSPECIFIED';
        case Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor.NONE:
            return 'NONE';
        case Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY:
            return 'SNAPPY';
        case Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB:
            return 'ZLIB';
        default:
            return 'UNKNOWN';
    }
}

export interface Mongodconfig40_Storage_Journal {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Storage.Journal';
    /**
     * Commit interval between journal operations, in milliseconds.
     * Default: 100.
     */
    commitInterval?: number;
}

export interface Mongodconfig40_OperationProfiling {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.OperationProfiling';
    /** Mode which specifies operations that should be profiled. */
    mode: Mongodconfig40_OperationProfiling_Mode;
    /**
     * The slow operation time threshold, in milliseconds. Operations that run
     * for longer than this threshold are considered slow, and are processed by the profiler
     * running in the SLOW_OP mode.
     */
    slowOpThreshold?: number;
}

export enum Mongodconfig40_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1,
}

export function mongodconfig40_OperationProfiling_ModeFromJSON(
    object: any,
): Mongodconfig40_OperationProfiling_Mode {
    switch (object) {
        case 0:
        case 'MODE_UNSPECIFIED':
            return Mongodconfig40_OperationProfiling_Mode.MODE_UNSPECIFIED;
        case 1:
        case 'OFF':
            return Mongodconfig40_OperationProfiling_Mode.OFF;
        case 2:
        case 'SLOW_OP':
            return Mongodconfig40_OperationProfiling_Mode.SLOW_OP;
        case 3:
        case 'ALL':
            return Mongodconfig40_OperationProfiling_Mode.ALL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongodconfig40_OperationProfiling_Mode.UNRECOGNIZED;
    }
}

export function mongodconfig40_OperationProfiling_ModeToJSON(
    object: Mongodconfig40_OperationProfiling_Mode,
): string {
    switch (object) {
        case Mongodconfig40_OperationProfiling_Mode.MODE_UNSPECIFIED:
            return 'MODE_UNSPECIFIED';
        case Mongodconfig40_OperationProfiling_Mode.OFF:
            return 'OFF';
        case Mongodconfig40_OperationProfiling_Mode.SLOW_OP:
            return 'SLOW_OP';
        case Mongodconfig40_OperationProfiling_Mode.ALL:
            return 'ALL';
        default:
            return 'UNKNOWN';
    }
}

export interface Mongodconfig40_Network {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Network';
    /** The maximum number of simultaneous connections that mongod will accept. */
    maxIncomingConnections?: number;
}

export interface Mongocfgconfig40 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0';
    /** `storage` section of mongocfg configuration. */
    storage?: Mongocfgconfig40_Storage;
    /** `operationProfiling` section of mongocfg configuration. */
    operationProfiling?: Mongocfgconfig40_OperationProfiling;
    /** `net` section of mongocfg configuration. */
    net?: Mongocfgconfig40_Network;
}

export interface Mongocfgconfig40_Storage {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0.Storage';
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger?: Mongocfgconfig40_Storage_WiredTiger;
}

/** Configuration of WiredTiger storage engine. */
export interface Mongocfgconfig40_Storage_WiredTiger {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0.Storage.WiredTiger';
    /** Engine configuration for WiredTiger. */
    engineConfig?: Mongocfgconfig40_Storage_WiredTiger_EngineConfig;
}

export interface Mongocfgconfig40_Storage_WiredTiger_EngineConfig {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0.Storage.WiredTiger.EngineConfig';
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb?: number;
}

export interface Mongocfgconfig40_OperationProfiling {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0.OperationProfiling';
    /** Mode which specifies operations that should be profiled. */
    mode: Mongocfgconfig40_OperationProfiling_Mode;
    /**
     * The slow operation time threshold, in milliseconds. Operations that run
     * for longer than this threshold are considered slow, and are processed by the profiler
     * running in the SLOW_OP mode. For details see [MongoDB documentation](https://docs.mongodb.com/v4.0/reference/configuration-options/#operationProfiling.slowOpThresholdMs).
     */
    slowOpThreshold?: number;
}

export enum Mongocfgconfig40_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1,
}

export function mongocfgconfig40_OperationProfiling_ModeFromJSON(
    object: any,
): Mongocfgconfig40_OperationProfiling_Mode {
    switch (object) {
        case 0:
        case 'MODE_UNSPECIFIED':
            return Mongocfgconfig40_OperationProfiling_Mode.MODE_UNSPECIFIED;
        case 1:
        case 'OFF':
            return Mongocfgconfig40_OperationProfiling_Mode.OFF;
        case 2:
        case 'SLOW_OP':
            return Mongocfgconfig40_OperationProfiling_Mode.SLOW_OP;
        case 3:
        case 'ALL':
            return Mongocfgconfig40_OperationProfiling_Mode.ALL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongocfgconfig40_OperationProfiling_Mode.UNRECOGNIZED;
    }
}

export function mongocfgconfig40_OperationProfiling_ModeToJSON(
    object: Mongocfgconfig40_OperationProfiling_Mode,
): string {
    switch (object) {
        case Mongocfgconfig40_OperationProfiling_Mode.MODE_UNSPECIFIED:
            return 'MODE_UNSPECIFIED';
        case Mongocfgconfig40_OperationProfiling_Mode.OFF:
            return 'OFF';
        case Mongocfgconfig40_OperationProfiling_Mode.SLOW_OP:
            return 'SLOW_OP';
        case Mongocfgconfig40_OperationProfiling_Mode.ALL:
            return 'ALL';
        default:
            return 'UNKNOWN';
    }
}

export interface Mongocfgconfig40_Network {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0.Network';
    /** The maximum number of simultaneous connections that mongocfg will accept. */
    maxIncomingConnections?: number;
}

export interface Mongosconfig40 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_0';
    /** Network settings for mongos. */
    net?: Mongosconfig40_Network;
}

export interface Mongosconfig40_Network {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_0.Network';
    /** The maximum number of simultaneous connections that mongos will accept. */
    maxIncomingConnections?: number;
}

export interface Mongodconfigset40 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_0';
    /**
     * Effective mongod settings for a MongoDB 4.0 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Mongodconfig40;
    /** User-defined mongod settings for a MongoDB 4.0 cluster. */
    userConfig?: Mongodconfig40;
    /** Default mongod configuration for a MongoDB 4.0 cluster. */
    defaultConfig?: Mongodconfig40;
}

export interface Mongocfgconfigset40 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_0';
    /**
     * Effective mongocfg settings for a MongoDB 4.0 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Mongocfgconfig40;
    /** User-defined mongocfg settings for a MongoDB 4.0 cluster. */
    userConfig?: Mongocfgconfig40;
    /** Default mongocfg configuration for a MongoDB 4.0 cluster. */
    defaultConfig?: Mongocfgconfig40;
}

export interface Mongosconfigset40 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_0';
    /**
     * Effective mongos settings for a MongoDB 4.0 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Mongosconfig40;
    /** User-defined mongos settings for a MongoDB 4.0 cluster. */
    userConfig?: Mongosconfig40;
    /** Default mongos configuration for a MongoDB 4.0 cluster. */
    defaultConfig?: Mongosconfig40;
}

const baseMongodconfig40: object = { $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0' };

export const Mongodconfig40 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0' as const,

    encode(message: Mongodconfig40, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.storage !== undefined) {
            Mongodconfig40_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
        }
        if (message.operationProfiling !== undefined) {
            Mongodconfig40_OperationProfiling.encode(
                message.operationProfiling,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.net !== undefined) {
            Mongodconfig40_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig40 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfig40 } as Mongodconfig40;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = Mongodconfig40_Storage.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.operationProfiling = Mongodconfig40_OperationProfiling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.net = Mongodconfig40_Network.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodconfig40 {
        const message = { ...baseMongodconfig40 } as Mongodconfig40;
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? Mongodconfig40_Storage.fromJSON(object.storage)
                : undefined;
        message.operationProfiling =
            object.operationProfiling !== undefined && object.operationProfiling !== null
                ? Mongodconfig40_OperationProfiling.fromJSON(object.operationProfiling)
                : undefined;
        message.net =
            object.net !== undefined && object.net !== null
                ? Mongodconfig40_Network.fromJSON(object.net)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig40): unknown {
        const obj: any = {};
        message.storage !== undefined &&
            (obj.storage = message.storage
                ? Mongodconfig40_Storage.toJSON(message.storage)
                : undefined);
        message.operationProfiling !== undefined &&
            (obj.operationProfiling = message.operationProfiling
                ? Mongodconfig40_OperationProfiling.toJSON(message.operationProfiling)
                : undefined);
        message.net !== undefined &&
            (obj.net = message.net ? Mongodconfig40_Network.toJSON(message.net) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig40>, I>>(object: I): Mongodconfig40 {
        const message = { ...baseMongodconfig40 } as Mongodconfig40;
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? Mongodconfig40_Storage.fromPartial(object.storage)
                : undefined;
        message.operationProfiling =
            object.operationProfiling !== undefined && object.operationProfiling !== null
                ? Mongodconfig40_OperationProfiling.fromPartial(object.operationProfiling)
                : undefined;
        message.net =
            object.net !== undefined && object.net !== null
                ? Mongodconfig40_Network.fromPartial(object.net)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongodconfig40.$type, Mongodconfig40);

const baseMongodconfig40_Storage: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Storage',
};

export const Mongodconfig40_Storage = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Storage' as const,

    encode(message: Mongodconfig40_Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.wiredTiger !== undefined) {
            Mongodconfig40_Storage_WiredTiger.encode(
                message.wiredTiger,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.journal !== undefined) {
            Mongodconfig40_Storage_Journal.encode(
                message.journal,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig40_Storage {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfig40_Storage } as Mongodconfig40_Storage;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiredTiger = Mongodconfig40_Storage_WiredTiger.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.journal = Mongodconfig40_Storage_Journal.decode(
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

    fromJSON(object: any): Mongodconfig40_Storage {
        const message = { ...baseMongodconfig40_Storage } as Mongodconfig40_Storage;
        message.wiredTiger =
            object.wiredTiger !== undefined && object.wiredTiger !== null
                ? Mongodconfig40_Storage_WiredTiger.fromJSON(object.wiredTiger)
                : undefined;
        message.journal =
            object.journal !== undefined && object.journal !== null
                ? Mongodconfig40_Storage_Journal.fromJSON(object.journal)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig40_Storage): unknown {
        const obj: any = {};
        message.wiredTiger !== undefined &&
            (obj.wiredTiger = message.wiredTiger
                ? Mongodconfig40_Storage_WiredTiger.toJSON(message.wiredTiger)
                : undefined);
        message.journal !== undefined &&
            (obj.journal = message.journal
                ? Mongodconfig40_Storage_Journal.toJSON(message.journal)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig40_Storage>, I>>(
        object: I,
    ): Mongodconfig40_Storage {
        const message = { ...baseMongodconfig40_Storage } as Mongodconfig40_Storage;
        message.wiredTiger =
            object.wiredTiger !== undefined && object.wiredTiger !== null
                ? Mongodconfig40_Storage_WiredTiger.fromPartial(object.wiredTiger)
                : undefined;
        message.journal =
            object.journal !== undefined && object.journal !== null
                ? Mongodconfig40_Storage_Journal.fromPartial(object.journal)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongodconfig40_Storage.$type, Mongodconfig40_Storage);

const baseMongodconfig40_Storage_WiredTiger: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Storage.WiredTiger',
};

export const Mongodconfig40_Storage_WiredTiger = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Storage.WiredTiger' as const,

    encode(
        message: Mongodconfig40_Storage_WiredTiger,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.engineConfig !== undefined) {
            Mongodconfig40_Storage_WiredTiger_EngineConfig.encode(
                message.engineConfig,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.collectionConfig !== undefined) {
            Mongodconfig40_Storage_WiredTiger_CollectionConfig.encode(
                message.collectionConfig,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig40_Storage_WiredTiger {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig40_Storage_WiredTiger,
        } as Mongodconfig40_Storage_WiredTiger;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.engineConfig = Mongodconfig40_Storage_WiredTiger_EngineConfig.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.collectionConfig =
                        Mongodconfig40_Storage_WiredTiger_CollectionConfig.decode(
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

    fromJSON(object: any): Mongodconfig40_Storage_WiredTiger {
        const message = {
            ...baseMongodconfig40_Storage_WiredTiger,
        } as Mongodconfig40_Storage_WiredTiger;
        message.engineConfig =
            object.engineConfig !== undefined && object.engineConfig !== null
                ? Mongodconfig40_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig)
                : undefined;
        message.collectionConfig =
            object.collectionConfig !== undefined && object.collectionConfig !== null
                ? Mongodconfig40_Storage_WiredTiger_CollectionConfig.fromJSON(
                      object.collectionConfig,
                  )
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig40_Storage_WiredTiger): unknown {
        const obj: any = {};
        message.engineConfig !== undefined &&
            (obj.engineConfig = message.engineConfig
                ? Mongodconfig40_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig)
                : undefined);
        message.collectionConfig !== undefined &&
            (obj.collectionConfig = message.collectionConfig
                ? Mongodconfig40_Storage_WiredTiger_CollectionConfig.toJSON(
                      message.collectionConfig,
                  )
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig40_Storage_WiredTiger>, I>>(
        object: I,
    ): Mongodconfig40_Storage_WiredTiger {
        const message = {
            ...baseMongodconfig40_Storage_WiredTiger,
        } as Mongodconfig40_Storage_WiredTiger;
        message.engineConfig =
            object.engineConfig !== undefined && object.engineConfig !== null
                ? Mongodconfig40_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig)
                : undefined;
        message.collectionConfig =
            object.collectionConfig !== undefined && object.collectionConfig !== null
                ? Mongodconfig40_Storage_WiredTiger_CollectionConfig.fromPartial(
                      object.collectionConfig,
                  )
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongodconfig40_Storage_WiredTiger.$type, Mongodconfig40_Storage_WiredTiger);

const baseMongodconfig40_Storage_WiredTiger_EngineConfig: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Storage.WiredTiger.EngineConfig',
};

export const Mongodconfig40_Storage_WiredTiger_EngineConfig = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Storage.WiredTiger.EngineConfig' as const,

    encode(
        message: Mongodconfig40_Storage_WiredTiger_EngineConfig,
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
    ): Mongodconfig40_Storage_WiredTiger_EngineConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig40_Storage_WiredTiger_EngineConfig,
        } as Mongodconfig40_Storage_WiredTiger_EngineConfig;
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

    fromJSON(object: any): Mongodconfig40_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongodconfig40_Storage_WiredTiger_EngineConfig,
        } as Mongodconfig40_Storage_WiredTiger_EngineConfig;
        message.cacheSizeGb =
            object.cacheSizeGb !== undefined && object.cacheSizeGb !== null
                ? Number(object.cacheSizeGb)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig40_Storage_WiredTiger_EngineConfig): unknown {
        const obj: any = {};
        message.cacheSizeGb !== undefined && (obj.cacheSizeGb = message.cacheSizeGb);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig40_Storage_WiredTiger_EngineConfig>, I>>(
        object: I,
    ): Mongodconfig40_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongodconfig40_Storage_WiredTiger_EngineConfig,
        } as Mongodconfig40_Storage_WiredTiger_EngineConfig;
        message.cacheSizeGb = object.cacheSizeGb ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(
    Mongodconfig40_Storage_WiredTiger_EngineConfig.$type,
    Mongodconfig40_Storage_WiredTiger_EngineConfig,
);

const baseMongodconfig40_Storage_WiredTiger_CollectionConfig: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Storage.WiredTiger.CollectionConfig',
    blockCompressor: 0,
};

export const Mongodconfig40_Storage_WiredTiger_CollectionConfig = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Storage.WiredTiger.CollectionConfig' as const,

    encode(
        message: Mongodconfig40_Storage_WiredTiger_CollectionConfig,
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
    ): Mongodconfig40_Storage_WiredTiger_CollectionConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig40_Storage_WiredTiger_CollectionConfig,
        } as Mongodconfig40_Storage_WiredTiger_CollectionConfig;
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

    fromJSON(object: any): Mongodconfig40_Storage_WiredTiger_CollectionConfig {
        const message = {
            ...baseMongodconfig40_Storage_WiredTiger_CollectionConfig,
        } as Mongodconfig40_Storage_WiredTiger_CollectionConfig;
        message.blockCompressor =
            object.blockCompressor !== undefined && object.blockCompressor !== null
                ? mongodconfig40_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
                      object.blockCompressor,
                  )
                : 0;
        return message;
    },

    toJSON(message: Mongodconfig40_Storage_WiredTiger_CollectionConfig): unknown {
        const obj: any = {};
        message.blockCompressor !== undefined &&
            (obj.blockCompressor =
                mongodconfig40_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
                    message.blockCompressor,
                ));
        return obj;
    },

    fromPartial<
        I extends Exact<DeepPartial<Mongodconfig40_Storage_WiredTiger_CollectionConfig>, I>,
    >(object: I): Mongodconfig40_Storage_WiredTiger_CollectionConfig {
        const message = {
            ...baseMongodconfig40_Storage_WiredTiger_CollectionConfig,
        } as Mongodconfig40_Storage_WiredTiger_CollectionConfig;
        message.blockCompressor = object.blockCompressor ?? 0;
        return message;
    },
};

messageTypeRegistry.set(
    Mongodconfig40_Storage_WiredTiger_CollectionConfig.$type,
    Mongodconfig40_Storage_WiredTiger_CollectionConfig,
);

const baseMongodconfig40_Storage_Journal: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Storage.Journal',
};

export const Mongodconfig40_Storage_Journal = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Storage.Journal' as const,

    encode(
        message: Mongodconfig40_Storage_Journal,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig40_Storage_Journal {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfig40_Storage_Journal } as Mongodconfig40_Storage_Journal;
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

    fromJSON(object: any): Mongodconfig40_Storage_Journal {
        const message = { ...baseMongodconfig40_Storage_Journal } as Mongodconfig40_Storage_Journal;
        message.commitInterval =
            object.commitInterval !== undefined && object.commitInterval !== null
                ? Number(object.commitInterval)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig40_Storage_Journal): unknown {
        const obj: any = {};
        message.commitInterval !== undefined && (obj.commitInterval = message.commitInterval);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig40_Storage_Journal>, I>>(
        object: I,
    ): Mongodconfig40_Storage_Journal {
        const message = { ...baseMongodconfig40_Storage_Journal } as Mongodconfig40_Storage_Journal;
        message.commitInterval = object.commitInterval ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongodconfig40_Storage_Journal.$type, Mongodconfig40_Storage_Journal);

const baseMongodconfig40_OperationProfiling: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.OperationProfiling',
    mode: 0,
};

export const Mongodconfig40_OperationProfiling = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.OperationProfiling' as const,

    encode(
        message: Mongodconfig40_OperationProfiling,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig40_OperationProfiling {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig40_OperationProfiling,
        } as Mongodconfig40_OperationProfiling;
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

    fromJSON(object: any): Mongodconfig40_OperationProfiling {
        const message = {
            ...baseMongodconfig40_OperationProfiling,
        } as Mongodconfig40_OperationProfiling;
        message.mode =
            object.mode !== undefined && object.mode !== null
                ? mongodconfig40_OperationProfiling_ModeFromJSON(object.mode)
                : 0;
        message.slowOpThreshold =
            object.slowOpThreshold !== undefined && object.slowOpThreshold !== null
                ? Number(object.slowOpThreshold)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig40_OperationProfiling): unknown {
        const obj: any = {};
        message.mode !== undefined &&
            (obj.mode = mongodconfig40_OperationProfiling_ModeToJSON(message.mode));
        message.slowOpThreshold !== undefined && (obj.slowOpThreshold = message.slowOpThreshold);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig40_OperationProfiling>, I>>(
        object: I,
    ): Mongodconfig40_OperationProfiling {
        const message = {
            ...baseMongodconfig40_OperationProfiling,
        } as Mongodconfig40_OperationProfiling;
        message.mode = object.mode ?? 0;
        message.slowOpThreshold = object.slowOpThreshold ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongodconfig40_OperationProfiling.$type, Mongodconfig40_OperationProfiling);

const baseMongodconfig40_Network: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Network',
};

export const Mongodconfig40_Network = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Network' as const,

    encode(message: Mongodconfig40_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.maxIncomingConnections !== undefined) {
            Int64Value.encode(
                { $type: 'google.protobuf.Int64Value', value: message.maxIncomingConnections! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig40_Network {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfig40_Network } as Mongodconfig40_Network;
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

    fromJSON(object: any): Mongodconfig40_Network {
        const message = { ...baseMongodconfig40_Network } as Mongodconfig40_Network;
        message.maxIncomingConnections =
            object.maxIncomingConnections !== undefined && object.maxIncomingConnections !== null
                ? Number(object.maxIncomingConnections)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig40_Network): unknown {
        const obj: any = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig40_Network>, I>>(
        object: I,
    ): Mongodconfig40_Network {
        const message = { ...baseMongodconfig40_Network } as Mongodconfig40_Network;
        message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongodconfig40_Network.$type, Mongodconfig40_Network);

const baseMongocfgconfig40: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0',
};

export const Mongocfgconfig40 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0' as const,

    encode(message: Mongocfgconfig40, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.storage !== undefined) {
            Mongocfgconfig40_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
        }
        if (message.operationProfiling !== undefined) {
            Mongocfgconfig40_OperationProfiling.encode(
                message.operationProfiling,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.net !== undefined) {
            Mongocfgconfig40_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfig40 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongocfgconfig40 } as Mongocfgconfig40;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = Mongocfgconfig40_Storage.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.operationProfiling = Mongocfgconfig40_OperationProfiling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.net = Mongocfgconfig40_Network.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongocfgconfig40 {
        const message = { ...baseMongocfgconfig40 } as Mongocfgconfig40;
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? Mongocfgconfig40_Storage.fromJSON(object.storage)
                : undefined;
        message.operationProfiling =
            object.operationProfiling !== undefined && object.operationProfiling !== null
                ? Mongocfgconfig40_OperationProfiling.fromJSON(object.operationProfiling)
                : undefined;
        message.net =
            object.net !== undefined && object.net !== null
                ? Mongocfgconfig40_Network.fromJSON(object.net)
                : undefined;
        return message;
    },

    toJSON(message: Mongocfgconfig40): unknown {
        const obj: any = {};
        message.storage !== undefined &&
            (obj.storage = message.storage
                ? Mongocfgconfig40_Storage.toJSON(message.storage)
                : undefined);
        message.operationProfiling !== undefined &&
            (obj.operationProfiling = message.operationProfiling
                ? Mongocfgconfig40_OperationProfiling.toJSON(message.operationProfiling)
                : undefined);
        message.net !== undefined &&
            (obj.net = message.net ? Mongocfgconfig40_Network.toJSON(message.net) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongocfgconfig40>, I>>(object: I): Mongocfgconfig40 {
        const message = { ...baseMongocfgconfig40 } as Mongocfgconfig40;
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? Mongocfgconfig40_Storage.fromPartial(object.storage)
                : undefined;
        message.operationProfiling =
            object.operationProfiling !== undefined && object.operationProfiling !== null
                ? Mongocfgconfig40_OperationProfiling.fromPartial(object.operationProfiling)
                : undefined;
        message.net =
            object.net !== undefined && object.net !== null
                ? Mongocfgconfig40_Network.fromPartial(object.net)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongocfgconfig40.$type, Mongocfgconfig40);

const baseMongocfgconfig40_Storage: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0.Storage',
};

export const Mongocfgconfig40_Storage = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0.Storage' as const,

    encode(
        message: Mongocfgconfig40_Storage,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.wiredTiger !== undefined) {
            Mongocfgconfig40_Storage_WiredTiger.encode(
                message.wiredTiger,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfig40_Storage {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongocfgconfig40_Storage } as Mongocfgconfig40_Storage;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiredTiger = Mongocfgconfig40_Storage_WiredTiger.decode(
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

    fromJSON(object: any): Mongocfgconfig40_Storage {
        const message = { ...baseMongocfgconfig40_Storage } as Mongocfgconfig40_Storage;
        message.wiredTiger =
            object.wiredTiger !== undefined && object.wiredTiger !== null
                ? Mongocfgconfig40_Storage_WiredTiger.fromJSON(object.wiredTiger)
                : undefined;
        return message;
    },

    toJSON(message: Mongocfgconfig40_Storage): unknown {
        const obj: any = {};
        message.wiredTiger !== undefined &&
            (obj.wiredTiger = message.wiredTiger
                ? Mongocfgconfig40_Storage_WiredTiger.toJSON(message.wiredTiger)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongocfgconfig40_Storage>, I>>(
        object: I,
    ): Mongocfgconfig40_Storage {
        const message = { ...baseMongocfgconfig40_Storage } as Mongocfgconfig40_Storage;
        message.wiredTiger =
            object.wiredTiger !== undefined && object.wiredTiger !== null
                ? Mongocfgconfig40_Storage_WiredTiger.fromPartial(object.wiredTiger)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongocfgconfig40_Storage.$type, Mongocfgconfig40_Storage);

const baseMongocfgconfig40_Storage_WiredTiger: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0.Storage.WiredTiger',
};

export const Mongocfgconfig40_Storage_WiredTiger = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0.Storage.WiredTiger' as const,

    encode(
        message: Mongocfgconfig40_Storage_WiredTiger,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.engineConfig !== undefined) {
            Mongocfgconfig40_Storage_WiredTiger_EngineConfig.encode(
                message.engineConfig,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfig40_Storage_WiredTiger {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig40_Storage_WiredTiger,
        } as Mongocfgconfig40_Storage_WiredTiger;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.engineConfig = Mongocfgconfig40_Storage_WiredTiger_EngineConfig.decode(
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

    fromJSON(object: any): Mongocfgconfig40_Storage_WiredTiger {
        const message = {
            ...baseMongocfgconfig40_Storage_WiredTiger,
        } as Mongocfgconfig40_Storage_WiredTiger;
        message.engineConfig =
            object.engineConfig !== undefined && object.engineConfig !== null
                ? Mongocfgconfig40_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig)
                : undefined;
        return message;
    },

    toJSON(message: Mongocfgconfig40_Storage_WiredTiger): unknown {
        const obj: any = {};
        message.engineConfig !== undefined &&
            (obj.engineConfig = message.engineConfig
                ? Mongocfgconfig40_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongocfgconfig40_Storage_WiredTiger>, I>>(
        object: I,
    ): Mongocfgconfig40_Storage_WiredTiger {
        const message = {
            ...baseMongocfgconfig40_Storage_WiredTiger,
        } as Mongocfgconfig40_Storage_WiredTiger;
        message.engineConfig =
            object.engineConfig !== undefined && object.engineConfig !== null
                ? Mongocfgconfig40_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(
    Mongocfgconfig40_Storage_WiredTiger.$type,
    Mongocfgconfig40_Storage_WiredTiger,
);

const baseMongocfgconfig40_Storage_WiredTiger_EngineConfig: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0.Storage.WiredTiger.EngineConfig',
};

export const Mongocfgconfig40_Storage_WiredTiger_EngineConfig = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0.Storage.WiredTiger.EngineConfig' as const,

    encode(
        message: Mongocfgconfig40_Storage_WiredTiger_EngineConfig,
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
    ): Mongocfgconfig40_Storage_WiredTiger_EngineConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig40_Storage_WiredTiger_EngineConfig,
        } as Mongocfgconfig40_Storage_WiredTiger_EngineConfig;
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

    fromJSON(object: any): Mongocfgconfig40_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongocfgconfig40_Storage_WiredTiger_EngineConfig,
        } as Mongocfgconfig40_Storage_WiredTiger_EngineConfig;
        message.cacheSizeGb =
            object.cacheSizeGb !== undefined && object.cacheSizeGb !== null
                ? Number(object.cacheSizeGb)
                : undefined;
        return message;
    },

    toJSON(message: Mongocfgconfig40_Storage_WiredTiger_EngineConfig): unknown {
        const obj: any = {};
        message.cacheSizeGb !== undefined && (obj.cacheSizeGb = message.cacheSizeGb);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongocfgconfig40_Storage_WiredTiger_EngineConfig>, I>>(
        object: I,
    ): Mongocfgconfig40_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongocfgconfig40_Storage_WiredTiger_EngineConfig,
        } as Mongocfgconfig40_Storage_WiredTiger_EngineConfig;
        message.cacheSizeGb = object.cacheSizeGb ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(
    Mongocfgconfig40_Storage_WiredTiger_EngineConfig.$type,
    Mongocfgconfig40_Storage_WiredTiger_EngineConfig,
);

const baseMongocfgconfig40_OperationProfiling: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0.OperationProfiling',
    mode: 0,
};

export const Mongocfgconfig40_OperationProfiling = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0.OperationProfiling' as const,

    encode(
        message: Mongocfgconfig40_OperationProfiling,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfig40_OperationProfiling {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig40_OperationProfiling,
        } as Mongocfgconfig40_OperationProfiling;
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

    fromJSON(object: any): Mongocfgconfig40_OperationProfiling {
        const message = {
            ...baseMongocfgconfig40_OperationProfiling,
        } as Mongocfgconfig40_OperationProfiling;
        message.mode =
            object.mode !== undefined && object.mode !== null
                ? mongocfgconfig40_OperationProfiling_ModeFromJSON(object.mode)
                : 0;
        message.slowOpThreshold =
            object.slowOpThreshold !== undefined && object.slowOpThreshold !== null
                ? Number(object.slowOpThreshold)
                : undefined;
        return message;
    },

    toJSON(message: Mongocfgconfig40_OperationProfiling): unknown {
        const obj: any = {};
        message.mode !== undefined &&
            (obj.mode = mongocfgconfig40_OperationProfiling_ModeToJSON(message.mode));
        message.slowOpThreshold !== undefined && (obj.slowOpThreshold = message.slowOpThreshold);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongocfgconfig40_OperationProfiling>, I>>(
        object: I,
    ): Mongocfgconfig40_OperationProfiling {
        const message = {
            ...baseMongocfgconfig40_OperationProfiling,
        } as Mongocfgconfig40_OperationProfiling;
        message.mode = object.mode ?? 0;
        message.slowOpThreshold = object.slowOpThreshold ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(
    Mongocfgconfig40_OperationProfiling.$type,
    Mongocfgconfig40_OperationProfiling,
);

const baseMongocfgconfig40_Network: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0.Network',
};

export const Mongocfgconfig40_Network = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0.Network' as const,

    encode(
        message: Mongocfgconfig40_Network,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfig40_Network {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongocfgconfig40_Network } as Mongocfgconfig40_Network;
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

    fromJSON(object: any): Mongocfgconfig40_Network {
        const message = { ...baseMongocfgconfig40_Network } as Mongocfgconfig40_Network;
        message.maxIncomingConnections =
            object.maxIncomingConnections !== undefined && object.maxIncomingConnections !== null
                ? Number(object.maxIncomingConnections)
                : undefined;
        return message;
    },

    toJSON(message: Mongocfgconfig40_Network): unknown {
        const obj: any = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongocfgconfig40_Network>, I>>(
        object: I,
    ): Mongocfgconfig40_Network {
        const message = { ...baseMongocfgconfig40_Network } as Mongocfgconfig40_Network;
        message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongocfgconfig40_Network.$type, Mongocfgconfig40_Network);

const baseMongosconfig40: object = { $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_0' };

export const Mongosconfig40 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_0' as const,

    encode(message: Mongosconfig40, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.net !== undefined) {
            Mongosconfig40_Network.encode(message.net, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongosconfig40 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongosconfig40 } as Mongosconfig40;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.net = Mongosconfig40_Network.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongosconfig40 {
        const message = { ...baseMongosconfig40 } as Mongosconfig40;
        message.net =
            object.net !== undefined && object.net !== null
                ? Mongosconfig40_Network.fromJSON(object.net)
                : undefined;
        return message;
    },

    toJSON(message: Mongosconfig40): unknown {
        const obj: any = {};
        message.net !== undefined &&
            (obj.net = message.net ? Mongosconfig40_Network.toJSON(message.net) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongosconfig40>, I>>(object: I): Mongosconfig40 {
        const message = { ...baseMongosconfig40 } as Mongosconfig40;
        message.net =
            object.net !== undefined && object.net !== null
                ? Mongosconfig40_Network.fromPartial(object.net)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongosconfig40.$type, Mongosconfig40);

const baseMongosconfig40_Network: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_0.Network',
};

export const Mongosconfig40_Network = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_0.Network' as const,

    encode(message: Mongosconfig40_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.maxIncomingConnections !== undefined) {
            Int64Value.encode(
                { $type: 'google.protobuf.Int64Value', value: message.maxIncomingConnections! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongosconfig40_Network {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongosconfig40_Network } as Mongosconfig40_Network;
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

    fromJSON(object: any): Mongosconfig40_Network {
        const message = { ...baseMongosconfig40_Network } as Mongosconfig40_Network;
        message.maxIncomingConnections =
            object.maxIncomingConnections !== undefined && object.maxIncomingConnections !== null
                ? Number(object.maxIncomingConnections)
                : undefined;
        return message;
    },

    toJSON(message: Mongosconfig40_Network): unknown {
        const obj: any = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongosconfig40_Network>, I>>(
        object: I,
    ): Mongosconfig40_Network {
        const message = { ...baseMongosconfig40_Network } as Mongosconfig40_Network;
        message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongosconfig40_Network.$type, Mongosconfig40_Network);

const baseMongodconfigset40: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_0',
};

export const Mongodconfigset40 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_0' as const,

    encode(message: Mongodconfigset40, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            Mongodconfig40.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            Mongodconfig40.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            Mongodconfig40.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfigset40 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfigset40 } as Mongodconfigset40;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = Mongodconfig40.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = Mongodconfig40.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = Mongodconfig40.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodconfigset40 {
        const message = { ...baseMongodconfigset40 } as Mongodconfigset40;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? Mongodconfig40.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? Mongodconfig40.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? Mongodconfig40.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfigset40): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? Mongodconfig40.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? Mongodconfig40.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? Mongodconfig40.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfigset40>, I>>(object: I): Mongodconfigset40 {
        const message = { ...baseMongodconfigset40 } as Mongodconfigset40;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? Mongodconfig40.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? Mongodconfig40.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? Mongodconfig40.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongodconfigset40.$type, Mongodconfigset40);

const baseMongocfgconfigset40: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_0',
};

export const Mongocfgconfigset40 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_0' as const,

    encode(message: Mongocfgconfigset40, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            Mongocfgconfig40.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            Mongocfgconfig40.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            Mongocfgconfig40.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfigset40 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongocfgconfigset40 } as Mongocfgconfigset40;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = Mongocfgconfig40.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = Mongocfgconfig40.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = Mongocfgconfig40.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongocfgconfigset40 {
        const message = { ...baseMongocfgconfigset40 } as Mongocfgconfigset40;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? Mongocfgconfig40.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? Mongocfgconfig40.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? Mongocfgconfig40.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },

    toJSON(message: Mongocfgconfigset40): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? Mongocfgconfig40.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? Mongocfgconfig40.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? Mongocfgconfig40.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongocfgconfigset40>, I>>(
        object: I,
    ): Mongocfgconfigset40 {
        const message = { ...baseMongocfgconfigset40 } as Mongocfgconfigset40;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? Mongocfgconfig40.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? Mongocfgconfig40.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? Mongocfgconfig40.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongocfgconfigset40.$type, Mongocfgconfigset40);

const baseMongosconfigset40: object = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_0',
};

export const Mongosconfigset40 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_0' as const,

    encode(message: Mongosconfigset40, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            Mongosconfig40.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            Mongosconfig40.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            Mongosconfig40.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongosconfigset40 {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongosconfigset40 } as Mongosconfigset40;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = Mongosconfig40.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = Mongosconfig40.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = Mongosconfig40.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongosconfigset40 {
        const message = { ...baseMongosconfigset40 } as Mongosconfigset40;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? Mongosconfig40.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? Mongosconfig40.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? Mongosconfig40.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },

    toJSON(message: Mongosconfigset40): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? Mongosconfig40.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? Mongosconfig40.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? Mongosconfig40.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongosconfigset40>, I>>(object: I): Mongosconfigset40 {
        const message = { ...baseMongosconfigset40 } as Mongosconfigset40;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? Mongosconfig40.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? Mongosconfig40.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? Mongosconfig40.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Mongosconfigset40.$type, Mongosconfigset40);

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
