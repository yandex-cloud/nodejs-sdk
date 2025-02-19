/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { DoubleValue, BoolValue, Int64Value } from '../../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.mdb.mongodb.v1.config';

/**
 * Configuration of a mongod daemon. Supported options are a limited subset of all
 * options described in [MongoDB documentation](https://docs.mongodb.com/v7.0/reference/configuration-options/).
 */
export interface MongodConfig {
    /** `storage` section of mongod configuration. */
    storage?: MongodConfig_Storage;
    /** `operationProfiling` section of mongod configuration. */
    operationProfiling?: MongodConfig_OperationProfiling;
    /** `net` section of mongod configuration. */
    net?: MongodConfig_Network;
    /** `security` section of mongod configuration. */
    security?: MongodConfig_Security;
    /** `AuditLog` section of mongod configuration. */
    auditLog?: MongodConfig_AuditLog;
    /** `SetParameter` section of mongod configuration. */
    setParameter?: MongodConfig_SetParameter;
}

export interface MongodConfig_Storage {
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger?: MongodConfig_Storage_WiredTiger;
    /** Configuration of the MongoDB [journal](https://docs.mongodb.com/v7.0/reference/glossary/#std-term-journal). */
    journal?: MongodConfig_Storage_Journal;
}

/** Configuration of WiredTiger storage engine. */
export interface MongodConfig_Storage_WiredTiger {
    /** Engine configuration for WiredTiger. */
    engineConfig?: MongodConfig_Storage_WiredTiger_EngineConfig;
    /** Collection configuration for WiredTiger. */
    collectionConfig?: MongodConfig_Storage_WiredTiger_CollectionConfig;
    /** Index configuration for WiredTiger */
    indexConfig?: MongodConfig_Storage_WiredTiger_IndexConfig;
}

export interface MongodConfig_Storage_WiredTiger_EngineConfig {
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb?: number;
}

export interface MongodConfig_Storage_WiredTiger_CollectionConfig {
    /** Default type of compression to use for collection data. */
    blockCompressor: MongodConfig_Storage_WiredTiger_CollectionConfig_Compressor;
}

export enum MongodConfig_Storage_WiredTiger_CollectionConfig_Compressor {
    COMPRESSOR_UNSPECIFIED = 0,
    /** NONE - No compression. */
    NONE = 1,
    /** SNAPPY - The [Snappy](https://docs.mongodb.com/v7.0/reference/glossary/#std-term-snappy) compression. */
    SNAPPY = 2,
    /** ZLIB - The [zlib](https://docs.mongodb.com/v7.0/reference/glossary/#std-term-zlib) compression. */
    ZLIB = 3,
    /** ZSTD - The [zstd](https://docs.mongodb.com/v7.0/reference/glossary/#std-term-zstd) compression. */
    ZSTD = 4,
    UNRECOGNIZED = -1,
}

export function mongodConfig_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
    object: any,
): MongodConfig_Storage_WiredTiger_CollectionConfig_Compressor {
    switch (object) {
        case 0:
        case 'COMPRESSOR_UNSPECIFIED':
            return MongodConfig_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED;
        case 1:
        case 'NONE':
            return MongodConfig_Storage_WiredTiger_CollectionConfig_Compressor.NONE;
        case 2:
        case 'SNAPPY':
            return MongodConfig_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY;
        case 3:
        case 'ZLIB':
            return MongodConfig_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB;
        case 4:
        case 'ZSTD':
            return MongodConfig_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return MongodConfig_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED;
    }
}

export function mongodConfig_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
    object: MongodConfig_Storage_WiredTiger_CollectionConfig_Compressor,
): string {
    switch (object) {
        case MongodConfig_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED:
            return 'COMPRESSOR_UNSPECIFIED';
        case MongodConfig_Storage_WiredTiger_CollectionConfig_Compressor.NONE:
            return 'NONE';
        case MongodConfig_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY:
            return 'SNAPPY';
        case MongodConfig_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB:
            return 'ZLIB';
        case MongodConfig_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD:
            return 'ZSTD';
        default:
            return 'UNKNOWN';
    }
}

export interface MongodConfig_Storage_WiredTiger_IndexConfig {
    /** Enables or disables [prefix compression](https://www.mongodb.com/docs/manual/reference/glossary/#std-term-prefix-compression) */
    prefixCompression?: boolean;
}

export interface MongodConfig_Storage_Journal {
    /**
     * Commit interval between journal operations, in milliseconds.
     * Default: 100.
     */
    commitInterval?: number;
}

export interface MongodConfig_OperationProfiling {
    /** Mode which specifies operations that should be profiled. */
    mode: MongodConfig_OperationProfiling_Mode;
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

export enum MongodConfig_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1,
}

export function mongodConfig_OperationProfiling_ModeFromJSON(
    object: any,
): MongodConfig_OperationProfiling_Mode {
    switch (object) {
        case 0:
        case 'MODE_UNSPECIFIED':
            return MongodConfig_OperationProfiling_Mode.MODE_UNSPECIFIED;
        case 1:
        case 'OFF':
            return MongodConfig_OperationProfiling_Mode.OFF;
        case 2:
        case 'SLOW_OP':
            return MongodConfig_OperationProfiling_Mode.SLOW_OP;
        case 3:
        case 'ALL':
            return MongodConfig_OperationProfiling_Mode.ALL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return MongodConfig_OperationProfiling_Mode.UNRECOGNIZED;
    }
}

export function mongodConfig_OperationProfiling_ModeToJSON(
    object: MongodConfig_OperationProfiling_Mode,
): string {
    switch (object) {
        case MongodConfig_OperationProfiling_Mode.MODE_UNSPECIFIED:
            return 'MODE_UNSPECIFIED';
        case MongodConfig_OperationProfiling_Mode.OFF:
            return 'OFF';
        case MongodConfig_OperationProfiling_Mode.SLOW_OP:
            return 'SLOW_OP';
        case MongodConfig_OperationProfiling_Mode.ALL:
            return 'ALL';
        default:
            return 'UNKNOWN';
    }
}

export interface MongodConfig_Network {
    /** The maximum number of simultaneous connections that mongod will accept. */
    maxIncomingConnections?: number;
    /** Compression settings */
    compression?: MongodConfig_Network_Compression;
}

export interface MongodConfig_Network_Compression {
    /**
     * Specifies the default compressor(s) to use for communication between this mongod or mongos instance and:
     * - other members of the deployment if the instance is part of a replica set or a sharded cluster
     * - mongosh
     * - drivers that support the OP_COMPRESSED message format.
     * MongoDB supports the following compressors:
     */
    compressors: MongodConfig_Network_Compression_Compressor[];
}

export enum MongodConfig_Network_Compression_Compressor {
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

export function mongodConfig_Network_Compression_CompressorFromJSON(
    object: any,
): MongodConfig_Network_Compression_Compressor {
    switch (object) {
        case 0:
        case 'COMPRESSOR_UNSPECIFIED':
            return MongodConfig_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED;
        case 1:
        case 'SNAPPY':
            return MongodConfig_Network_Compression_Compressor.SNAPPY;
        case 2:
        case 'ZLIB':
            return MongodConfig_Network_Compression_Compressor.ZLIB;
        case 3:
        case 'ZSTD':
            return MongodConfig_Network_Compression_Compressor.ZSTD;
        case 4:
        case 'DISABLED':
            return MongodConfig_Network_Compression_Compressor.DISABLED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return MongodConfig_Network_Compression_Compressor.UNRECOGNIZED;
    }
}

export function mongodConfig_Network_Compression_CompressorToJSON(
    object: MongodConfig_Network_Compression_Compressor,
): string {
    switch (object) {
        case MongodConfig_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED:
            return 'COMPRESSOR_UNSPECIFIED';
        case MongodConfig_Network_Compression_Compressor.SNAPPY:
            return 'SNAPPY';
        case MongodConfig_Network_Compression_Compressor.ZLIB:
            return 'ZLIB';
        case MongodConfig_Network_Compression_Compressor.ZSTD:
            return 'ZSTD';
        case MongodConfig_Network_Compression_Compressor.DISABLED:
            return 'DISABLED';
        default:
            return 'UNKNOWN';
    }
}

export interface MongodConfig_Security {
    /** If encryption at rest should be enabled or not */
    enableEncryption?: boolean;
    /** `kmip` section of mongod security config */
    kmip?: MongodConfig_Security_KMIP;
}

export interface MongodConfig_Security_KMIP {
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

export interface MongodConfig_AuditLog {
    /** Audit filter */
    filter: string;
    /** Allows runtime configuration of audit filter and auditAuthorizationSuccess */
    runtimeConfiguration?: boolean;
}

export interface MongodConfig_SetParameter {
    /** Enables the auditing of authorization successes */
    auditAuthorizationSuccess?: boolean;
    /**
     * Enables or disables the mechanism that controls the rate at which the primary applies its writes with the
     * goal of keeping the secondary members [majority committed](https://www.mongodb.com/docs/v7.0/reference/command/replSetGetStatus/#replSetGetStatus.optimes.lastCommittedOpTime)
     * lag under a configurable maximum value.
     */
    enableFlowControl?: boolean;
    /** The minimum time window in seconds for which the storage engine keeps the snapshot history. */
    minSnapshotHistoryWindowInSeconds?: number;
}

export interface MongoCfgConfig {
    /** `storage` section of mongocfg configuration. */
    storage?: MongoCfgConfig_Storage;
    /** `operationProfiling` section of mongocfg configuration. */
    operationProfiling?: MongoCfgConfig_OperationProfiling;
    /** `net` section of mongocfg configuration. */
    net?: MongoCfgConfig_Network;
}

export interface MongoCfgConfig_Storage {
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger?: MongoCfgConfig_Storage_WiredTiger;
}

/** Configuration of WiredTiger storage engine. */
export interface MongoCfgConfig_Storage_WiredTiger {
    /** Engine configuration for WiredTiger. */
    engineConfig?: MongoCfgConfig_Storage_WiredTiger_EngineConfig;
}

export interface MongoCfgConfig_Storage_WiredTiger_EngineConfig {
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb?: number;
}

export interface MongoCfgConfig_OperationProfiling {
    /** Mode which specifies operations that should be profiled. */
    mode: MongoCfgConfig_OperationProfiling_Mode;
    /**
     * The slow operation time threshold, in milliseconds. Operations that run
     * for longer than this threshold are considered slow, and are processed by the profiler
     * running in the SLOW_OP mode. For details see [MongoDB documentation](https://www.mongodb.com/docs/v7.0/reference/configuration-options/#mongodb-setting-operationProfiling.slowOpThresholdMs).
     */
    slowOpThreshold?: number;
}

export enum MongoCfgConfig_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1,
}

export function mongoCfgConfig_OperationProfiling_ModeFromJSON(
    object: any,
): MongoCfgConfig_OperationProfiling_Mode {
    switch (object) {
        case 0:
        case 'MODE_UNSPECIFIED':
            return MongoCfgConfig_OperationProfiling_Mode.MODE_UNSPECIFIED;
        case 1:
        case 'OFF':
            return MongoCfgConfig_OperationProfiling_Mode.OFF;
        case 2:
        case 'SLOW_OP':
            return MongoCfgConfig_OperationProfiling_Mode.SLOW_OP;
        case 3:
        case 'ALL':
            return MongoCfgConfig_OperationProfiling_Mode.ALL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return MongoCfgConfig_OperationProfiling_Mode.UNRECOGNIZED;
    }
}

export function mongoCfgConfig_OperationProfiling_ModeToJSON(
    object: MongoCfgConfig_OperationProfiling_Mode,
): string {
    switch (object) {
        case MongoCfgConfig_OperationProfiling_Mode.MODE_UNSPECIFIED:
            return 'MODE_UNSPECIFIED';
        case MongoCfgConfig_OperationProfiling_Mode.OFF:
            return 'OFF';
        case MongoCfgConfig_OperationProfiling_Mode.SLOW_OP:
            return 'SLOW_OP';
        case MongoCfgConfig_OperationProfiling_Mode.ALL:
            return 'ALL';
        default:
            return 'UNKNOWN';
    }
}

export interface MongoCfgConfig_Network {
    /** The maximum number of simultaneous connections that mongocfg will accept. */
    maxIncomingConnections?: number;
}

export interface MongosConfig {
    /** Network settings for mongos. */
    net?: MongosConfig_Network;
}

export interface MongosConfig_Network {
    /** The maximum number of simultaneous connections that mongos will accept. */
    maxIncomingConnections?: number;
    /** Compression settings */
    compression?: MongosConfig_Network_Compression;
}

export interface MongosConfig_Network_Compression {
    /**
     * Specifies the default compressor(s) to use for communication between this mongod or mongos instance and:
     * - other members of the deployment if the instance is part of a replica set or a sharded cluster
     * - mongosh
     * - drivers that support the OP_COMPRESSED message format.
     * MongoDB supports the following compressors:
     */
    compressors: MongosConfig_Network_Compression_Compressor[];
}

export enum MongosConfig_Network_Compression_Compressor {
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

export function mongosConfig_Network_Compression_CompressorFromJSON(
    object: any,
): MongosConfig_Network_Compression_Compressor {
    switch (object) {
        case 0:
        case 'COMPRESSOR_UNSPECIFIED':
            return MongosConfig_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED;
        case 1:
        case 'SNAPPY':
            return MongosConfig_Network_Compression_Compressor.SNAPPY;
        case 2:
        case 'ZLIB':
            return MongosConfig_Network_Compression_Compressor.ZLIB;
        case 3:
        case 'ZSTD':
            return MongosConfig_Network_Compression_Compressor.ZSTD;
        case 4:
        case 'DISABLED':
            return MongosConfig_Network_Compression_Compressor.DISABLED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return MongosConfig_Network_Compression_Compressor.UNRECOGNIZED;
    }
}

export function mongosConfig_Network_Compression_CompressorToJSON(
    object: MongosConfig_Network_Compression_Compressor,
): string {
    switch (object) {
        case MongosConfig_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED:
            return 'COMPRESSOR_UNSPECIFIED';
        case MongosConfig_Network_Compression_Compressor.SNAPPY:
            return 'SNAPPY';
        case MongosConfig_Network_Compression_Compressor.ZLIB:
            return 'ZLIB';
        case MongosConfig_Network_Compression_Compressor.ZSTD:
            return 'ZSTD';
        case MongosConfig_Network_Compression_Compressor.DISABLED:
            return 'DISABLED';
        default:
            return 'UNKNOWN';
    }
}

export interface MongodConfigSet {
    /**
     * Effective mongod settings for a MongoDB cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: MongodConfig;
    /** User-defined mongod settings for a MongoDB cluster. */
    userConfig?: MongodConfig;
    /** Default mongod configuration for a MongoDB cluster. */
    defaultConfig?: MongodConfig;
}

export interface MongoCfgConfigSet {
    /**
     * Effective mongocfg settings for a MongoDB cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: MongoCfgConfig;
    /** User-defined mongocfg settings for a MongoDB cluster. */
    userConfig?: MongoCfgConfig;
    /** Default mongocfg configuration for a MongoDB cluster. */
    defaultConfig?: MongoCfgConfig;
}

export interface MongosConfigSet {
    /**
     * Effective mongos settings for a MongoDB cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: MongosConfig;
    /** User-defined mongos settings for a MongoDB cluster. */
    userConfig?: MongosConfig;
    /** Default mongos configuration for a MongoDB cluster. */
    defaultConfig?: MongosConfig;
}

const baseMongodConfig: object = {};

export const MongodConfig = {
    encode(message: MongodConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.storage !== undefined) {
            MongodConfig_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
        }
        if (message.operationProfiling !== undefined) {
            MongodConfig_OperationProfiling.encode(
                message.operationProfiling,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.net !== undefined) {
            MongodConfig_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
        }
        if (message.security !== undefined) {
            MongodConfig_Security.encode(message.security, writer.uint32(34).fork()).ldelim();
        }
        if (message.auditLog !== undefined) {
            MongodConfig_AuditLog.encode(message.auditLog, writer.uint32(42).fork()).ldelim();
        }
        if (message.setParameter !== undefined) {
            MongodConfig_SetParameter.encode(
                message.setParameter,
                writer.uint32(50).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodConfig } as MongodConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = MongodConfig_Storage.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.operationProfiling = MongodConfig_OperationProfiling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.net = MongodConfig_Network.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.security = MongodConfig_Security.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.auditLog = MongodConfig_AuditLog.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.setParameter = MongodConfig_SetParameter.decode(
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

    fromJSON(object: any): MongodConfig {
        const message = { ...baseMongodConfig } as MongodConfig;
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? MongodConfig_Storage.fromJSON(object.storage)
                : undefined;
        message.operationProfiling =
            object.operationProfiling !== undefined && object.operationProfiling !== null
                ? MongodConfig_OperationProfiling.fromJSON(object.operationProfiling)
                : undefined;
        message.net =
            object.net !== undefined && object.net !== null
                ? MongodConfig_Network.fromJSON(object.net)
                : undefined;
        message.security =
            object.security !== undefined && object.security !== null
                ? MongodConfig_Security.fromJSON(object.security)
                : undefined;
        message.auditLog =
            object.auditLog !== undefined && object.auditLog !== null
                ? MongodConfig_AuditLog.fromJSON(object.auditLog)
                : undefined;
        message.setParameter =
            object.setParameter !== undefined && object.setParameter !== null
                ? MongodConfig_SetParameter.fromJSON(object.setParameter)
                : undefined;
        return message;
    },

    toJSON(message: MongodConfig): unknown {
        const obj: any = {};
        message.storage !== undefined &&
            (obj.storage = message.storage
                ? MongodConfig_Storage.toJSON(message.storage)
                : undefined);
        message.operationProfiling !== undefined &&
            (obj.operationProfiling = message.operationProfiling
                ? MongodConfig_OperationProfiling.toJSON(message.operationProfiling)
                : undefined);
        message.net !== undefined &&
            (obj.net = message.net ? MongodConfig_Network.toJSON(message.net) : undefined);
        message.security !== undefined &&
            (obj.security = message.security
                ? MongodConfig_Security.toJSON(message.security)
                : undefined);
        message.auditLog !== undefined &&
            (obj.auditLog = message.auditLog
                ? MongodConfig_AuditLog.toJSON(message.auditLog)
                : undefined);
        message.setParameter !== undefined &&
            (obj.setParameter = message.setParameter
                ? MongodConfig_SetParameter.toJSON(message.setParameter)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongodConfig>, I>>(object: I): MongodConfig {
        const message = { ...baseMongodConfig } as MongodConfig;
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? MongodConfig_Storage.fromPartial(object.storage)
                : undefined;
        message.operationProfiling =
            object.operationProfiling !== undefined && object.operationProfiling !== null
                ? MongodConfig_OperationProfiling.fromPartial(object.operationProfiling)
                : undefined;
        message.net =
            object.net !== undefined && object.net !== null
                ? MongodConfig_Network.fromPartial(object.net)
                : undefined;
        message.security =
            object.security !== undefined && object.security !== null
                ? MongodConfig_Security.fromPartial(object.security)
                : undefined;
        message.auditLog =
            object.auditLog !== undefined && object.auditLog !== null
                ? MongodConfig_AuditLog.fromPartial(object.auditLog)
                : undefined;
        message.setParameter =
            object.setParameter !== undefined && object.setParameter !== null
                ? MongodConfig_SetParameter.fromPartial(object.setParameter)
                : undefined;
        return message;
    },
};

const baseMongodConfig_Storage: object = {};

export const MongodConfig_Storage = {
    encode(message: MongodConfig_Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.wiredTiger !== undefined) {
            MongodConfig_Storage_WiredTiger.encode(
                message.wiredTiger,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.journal !== undefined) {
            MongodConfig_Storage_Journal.encode(message.journal, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig_Storage {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodConfig_Storage } as MongodConfig_Storage;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiredTiger = MongodConfig_Storage_WiredTiger.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.journal = MongodConfig_Storage_Journal.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MongodConfig_Storage {
        const message = { ...baseMongodConfig_Storage } as MongodConfig_Storage;
        message.wiredTiger =
            object.wiredTiger !== undefined && object.wiredTiger !== null
                ? MongodConfig_Storage_WiredTiger.fromJSON(object.wiredTiger)
                : undefined;
        message.journal =
            object.journal !== undefined && object.journal !== null
                ? MongodConfig_Storage_Journal.fromJSON(object.journal)
                : undefined;
        return message;
    },

    toJSON(message: MongodConfig_Storage): unknown {
        const obj: any = {};
        message.wiredTiger !== undefined &&
            (obj.wiredTiger = message.wiredTiger
                ? MongodConfig_Storage_WiredTiger.toJSON(message.wiredTiger)
                : undefined);
        message.journal !== undefined &&
            (obj.journal = message.journal
                ? MongodConfig_Storage_Journal.toJSON(message.journal)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongodConfig_Storage>, I>>(
        object: I,
    ): MongodConfig_Storage {
        const message = { ...baseMongodConfig_Storage } as MongodConfig_Storage;
        message.wiredTiger =
            object.wiredTiger !== undefined && object.wiredTiger !== null
                ? MongodConfig_Storage_WiredTiger.fromPartial(object.wiredTiger)
                : undefined;
        message.journal =
            object.journal !== undefined && object.journal !== null
                ? MongodConfig_Storage_Journal.fromPartial(object.journal)
                : undefined;
        return message;
    },
};

const baseMongodConfig_Storage_WiredTiger: object = {};

export const MongodConfig_Storage_WiredTiger = {
    encode(
        message: MongodConfig_Storage_WiredTiger,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.engineConfig !== undefined) {
            MongodConfig_Storage_WiredTiger_EngineConfig.encode(
                message.engineConfig,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.collectionConfig !== undefined) {
            MongodConfig_Storage_WiredTiger_CollectionConfig.encode(
                message.collectionConfig,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.indexConfig !== undefined) {
            MongodConfig_Storage_WiredTiger_IndexConfig.encode(
                message.indexConfig,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig_Storage_WiredTiger {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodConfig_Storage_WiredTiger,
        } as MongodConfig_Storage_WiredTiger;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.engineConfig = MongodConfig_Storage_WiredTiger_EngineConfig.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.collectionConfig =
                        MongodConfig_Storage_WiredTiger_CollectionConfig.decode(
                            reader,
                            reader.uint32(),
                        );
                    break;
                case 3:
                    message.indexConfig = MongodConfig_Storage_WiredTiger_IndexConfig.decode(
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

    fromJSON(object: any): MongodConfig_Storage_WiredTiger {
        const message = {
            ...baseMongodConfig_Storage_WiredTiger,
        } as MongodConfig_Storage_WiredTiger;
        message.engineConfig =
            object.engineConfig !== undefined && object.engineConfig !== null
                ? MongodConfig_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig)
                : undefined;
        message.collectionConfig =
            object.collectionConfig !== undefined && object.collectionConfig !== null
                ? MongodConfig_Storage_WiredTiger_CollectionConfig.fromJSON(object.collectionConfig)
                : undefined;
        message.indexConfig =
            object.indexConfig !== undefined && object.indexConfig !== null
                ? MongodConfig_Storage_WiredTiger_IndexConfig.fromJSON(object.indexConfig)
                : undefined;
        return message;
    },

    toJSON(message: MongodConfig_Storage_WiredTiger): unknown {
        const obj: any = {};
        message.engineConfig !== undefined &&
            (obj.engineConfig = message.engineConfig
                ? MongodConfig_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig)
                : undefined);
        message.collectionConfig !== undefined &&
            (obj.collectionConfig = message.collectionConfig
                ? MongodConfig_Storage_WiredTiger_CollectionConfig.toJSON(message.collectionConfig)
                : undefined);
        message.indexConfig !== undefined &&
            (obj.indexConfig = message.indexConfig
                ? MongodConfig_Storage_WiredTiger_IndexConfig.toJSON(message.indexConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongodConfig_Storage_WiredTiger>, I>>(
        object: I,
    ): MongodConfig_Storage_WiredTiger {
        const message = {
            ...baseMongodConfig_Storage_WiredTiger,
        } as MongodConfig_Storage_WiredTiger;
        message.engineConfig =
            object.engineConfig !== undefined && object.engineConfig !== null
                ? MongodConfig_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig)
                : undefined;
        message.collectionConfig =
            object.collectionConfig !== undefined && object.collectionConfig !== null
                ? MongodConfig_Storage_WiredTiger_CollectionConfig.fromPartial(
                      object.collectionConfig,
                  )
                : undefined;
        message.indexConfig =
            object.indexConfig !== undefined && object.indexConfig !== null
                ? MongodConfig_Storage_WiredTiger_IndexConfig.fromPartial(object.indexConfig)
                : undefined;
        return message;
    },
};

const baseMongodConfig_Storage_WiredTiger_EngineConfig: object = {};

export const MongodConfig_Storage_WiredTiger_EngineConfig = {
    encode(
        message: MongodConfig_Storage_WiredTiger_EngineConfig,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.cacheSizeGb !== undefined) {
            DoubleValue.encode({ value: message.cacheSizeGb! }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MongodConfig_Storage_WiredTiger_EngineConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodConfig_Storage_WiredTiger_EngineConfig,
        } as MongodConfig_Storage_WiredTiger_EngineConfig;
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

    fromJSON(object: any): MongodConfig_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongodConfig_Storage_WiredTiger_EngineConfig,
        } as MongodConfig_Storage_WiredTiger_EngineConfig;
        message.cacheSizeGb =
            object.cacheSizeGb !== undefined && object.cacheSizeGb !== null
                ? Number(object.cacheSizeGb)
                : undefined;
        return message;
    },

    toJSON(message: MongodConfig_Storage_WiredTiger_EngineConfig): unknown {
        const obj: any = {};
        message.cacheSizeGb !== undefined && (obj.cacheSizeGb = message.cacheSizeGb);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongodConfig_Storage_WiredTiger_EngineConfig>, I>>(
        object: I,
    ): MongodConfig_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongodConfig_Storage_WiredTiger_EngineConfig,
        } as MongodConfig_Storage_WiredTiger_EngineConfig;
        message.cacheSizeGb = object.cacheSizeGb ?? undefined;
        return message;
    },
};

const baseMongodConfig_Storage_WiredTiger_CollectionConfig: object = { blockCompressor: 0 };

export const MongodConfig_Storage_WiredTiger_CollectionConfig = {
    encode(
        message: MongodConfig_Storage_WiredTiger_CollectionConfig,
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
    ): MongodConfig_Storage_WiredTiger_CollectionConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodConfig_Storage_WiredTiger_CollectionConfig,
        } as MongodConfig_Storage_WiredTiger_CollectionConfig;
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

    fromJSON(object: any): MongodConfig_Storage_WiredTiger_CollectionConfig {
        const message = {
            ...baseMongodConfig_Storage_WiredTiger_CollectionConfig,
        } as MongodConfig_Storage_WiredTiger_CollectionConfig;
        message.blockCompressor =
            object.blockCompressor !== undefined && object.blockCompressor !== null
                ? mongodConfig_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
                      object.blockCompressor,
                  )
                : 0;
        return message;
    },

    toJSON(message: MongodConfig_Storage_WiredTiger_CollectionConfig): unknown {
        const obj: any = {};
        message.blockCompressor !== undefined &&
            (obj.blockCompressor =
                mongodConfig_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
                    message.blockCompressor,
                ));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongodConfig_Storage_WiredTiger_CollectionConfig>, I>>(
        object: I,
    ): MongodConfig_Storage_WiredTiger_CollectionConfig {
        const message = {
            ...baseMongodConfig_Storage_WiredTiger_CollectionConfig,
        } as MongodConfig_Storage_WiredTiger_CollectionConfig;
        message.blockCompressor = object.blockCompressor ?? 0;
        return message;
    },
};

const baseMongodConfig_Storage_WiredTiger_IndexConfig: object = {};

export const MongodConfig_Storage_WiredTiger_IndexConfig = {
    encode(
        message: MongodConfig_Storage_WiredTiger_IndexConfig,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.prefixCompression !== undefined) {
            BoolValue.encode(
                { value: message.prefixCompression! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MongodConfig_Storage_WiredTiger_IndexConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodConfig_Storage_WiredTiger_IndexConfig,
        } as MongodConfig_Storage_WiredTiger_IndexConfig;
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

    fromJSON(object: any): MongodConfig_Storage_WiredTiger_IndexConfig {
        const message = {
            ...baseMongodConfig_Storage_WiredTiger_IndexConfig,
        } as MongodConfig_Storage_WiredTiger_IndexConfig;
        message.prefixCompression =
            object.prefixCompression !== undefined && object.prefixCompression !== null
                ? Boolean(object.prefixCompression)
                : undefined;
        return message;
    },

    toJSON(message: MongodConfig_Storage_WiredTiger_IndexConfig): unknown {
        const obj: any = {};
        message.prefixCompression !== undefined &&
            (obj.prefixCompression = message.prefixCompression);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongodConfig_Storage_WiredTiger_IndexConfig>, I>>(
        object: I,
    ): MongodConfig_Storage_WiredTiger_IndexConfig {
        const message = {
            ...baseMongodConfig_Storage_WiredTiger_IndexConfig,
        } as MongodConfig_Storage_WiredTiger_IndexConfig;
        message.prefixCompression = object.prefixCompression ?? undefined;
        return message;
    },
};

const baseMongodConfig_Storage_Journal: object = {};

export const MongodConfig_Storage_Journal = {
    encode(
        message: MongodConfig_Storage_Journal,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.commitInterval !== undefined) {
            Int64Value.encode(
                { value: message.commitInterval! },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig_Storage_Journal {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodConfig_Storage_Journal } as MongodConfig_Storage_Journal;
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

    fromJSON(object: any): MongodConfig_Storage_Journal {
        const message = { ...baseMongodConfig_Storage_Journal } as MongodConfig_Storage_Journal;
        message.commitInterval =
            object.commitInterval !== undefined && object.commitInterval !== null
                ? Number(object.commitInterval)
                : undefined;
        return message;
    },

    toJSON(message: MongodConfig_Storage_Journal): unknown {
        const obj: any = {};
        message.commitInterval !== undefined && (obj.commitInterval = message.commitInterval);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongodConfig_Storage_Journal>, I>>(
        object: I,
    ): MongodConfig_Storage_Journal {
        const message = { ...baseMongodConfig_Storage_Journal } as MongodConfig_Storage_Journal;
        message.commitInterval = object.commitInterval ?? undefined;
        return message;
    },
};

const baseMongodConfig_OperationProfiling: object = { mode: 0 };

export const MongodConfig_OperationProfiling = {
    encode(
        message: MongodConfig_OperationProfiling,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.slowOpThreshold !== undefined) {
            Int64Value.encode(
                { value: message.slowOpThreshold! },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.slowOpSampleRate !== undefined) {
            DoubleValue.encode(
                { value: message.slowOpSampleRate! },
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig_OperationProfiling {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodConfig_OperationProfiling,
        } as MongodConfig_OperationProfiling;
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

    fromJSON(object: any): MongodConfig_OperationProfiling {
        const message = {
            ...baseMongodConfig_OperationProfiling,
        } as MongodConfig_OperationProfiling;
        message.mode =
            object.mode !== undefined && object.mode !== null
                ? mongodConfig_OperationProfiling_ModeFromJSON(object.mode)
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

    toJSON(message: MongodConfig_OperationProfiling): unknown {
        const obj: any = {};
        message.mode !== undefined &&
            (obj.mode = mongodConfig_OperationProfiling_ModeToJSON(message.mode));
        message.slowOpThreshold !== undefined && (obj.slowOpThreshold = message.slowOpThreshold);
        message.slowOpSampleRate !== undefined && (obj.slowOpSampleRate = message.slowOpSampleRate);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongodConfig_OperationProfiling>, I>>(
        object: I,
    ): MongodConfig_OperationProfiling {
        const message = {
            ...baseMongodConfig_OperationProfiling,
        } as MongodConfig_OperationProfiling;
        message.mode = object.mode ?? 0;
        message.slowOpThreshold = object.slowOpThreshold ?? undefined;
        message.slowOpSampleRate = object.slowOpSampleRate ?? undefined;
        return message;
    },
};

const baseMongodConfig_Network: object = {};

export const MongodConfig_Network = {
    encode(message: MongodConfig_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.maxIncomingConnections !== undefined) {
            Int64Value.encode(
                { value: message.maxIncomingConnections! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.compression !== undefined) {
            MongodConfig_Network_Compression.encode(
                message.compression,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig_Network {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodConfig_Network } as MongodConfig_Network;
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
                    message.compression = MongodConfig_Network_Compression.decode(
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

    fromJSON(object: any): MongodConfig_Network {
        const message = { ...baseMongodConfig_Network } as MongodConfig_Network;
        message.maxIncomingConnections =
            object.maxIncomingConnections !== undefined && object.maxIncomingConnections !== null
                ? Number(object.maxIncomingConnections)
                : undefined;
        message.compression =
            object.compression !== undefined && object.compression !== null
                ? MongodConfig_Network_Compression.fromJSON(object.compression)
                : undefined;
        return message;
    },

    toJSON(message: MongodConfig_Network): unknown {
        const obj: any = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        message.compression !== undefined &&
            (obj.compression = message.compression
                ? MongodConfig_Network_Compression.toJSON(message.compression)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongodConfig_Network>, I>>(
        object: I,
    ): MongodConfig_Network {
        const message = { ...baseMongodConfig_Network } as MongodConfig_Network;
        message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
        message.compression =
            object.compression !== undefined && object.compression !== null
                ? MongodConfig_Network_Compression.fromPartial(object.compression)
                : undefined;
        return message;
    },
};

const baseMongodConfig_Network_Compression: object = { compressors: 0 };

export const MongodConfig_Network_Compression = {
    encode(
        message: MongodConfig_Network_Compression,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        writer.uint32(10).fork();
        for (const v of message.compressors) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig_Network_Compression {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodConfig_Network_Compression,
        } as MongodConfig_Network_Compression;
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

    fromJSON(object: any): MongodConfig_Network_Compression {
        const message = {
            ...baseMongodConfig_Network_Compression,
        } as MongodConfig_Network_Compression;
        message.compressors = (object.compressors ?? []).map((e: any) =>
            mongodConfig_Network_Compression_CompressorFromJSON(e),
        );
        return message;
    },

    toJSON(message: MongodConfig_Network_Compression): unknown {
        const obj: any = {};
        if (message.compressors) {
            obj.compressors = message.compressors.map((e) =>
                mongodConfig_Network_Compression_CompressorToJSON(e),
            );
        } else {
            obj.compressors = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongodConfig_Network_Compression>, I>>(
        object: I,
    ): MongodConfig_Network_Compression {
        const message = {
            ...baseMongodConfig_Network_Compression,
        } as MongodConfig_Network_Compression;
        message.compressors = object.compressors?.map((e) => e) || [];
        return message;
    },
};

const baseMongodConfig_Security: object = {};

export const MongodConfig_Security = {
    encode(message: MongodConfig_Security, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.enableEncryption !== undefined) {
            BoolValue.encode(
                { value: message.enableEncryption! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.kmip !== undefined) {
            MongodConfig_Security_KMIP.encode(message.kmip, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig_Security {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodConfig_Security } as MongodConfig_Security;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enableEncryption = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.kmip = MongodConfig_Security_KMIP.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MongodConfig_Security {
        const message = { ...baseMongodConfig_Security } as MongodConfig_Security;
        message.enableEncryption =
            object.enableEncryption !== undefined && object.enableEncryption !== null
                ? Boolean(object.enableEncryption)
                : undefined;
        message.kmip =
            object.kmip !== undefined && object.kmip !== null
                ? MongodConfig_Security_KMIP.fromJSON(object.kmip)
                : undefined;
        return message;
    },

    toJSON(message: MongodConfig_Security): unknown {
        const obj: any = {};
        message.enableEncryption !== undefined && (obj.enableEncryption = message.enableEncryption);
        message.kmip !== undefined &&
            (obj.kmip = message.kmip ? MongodConfig_Security_KMIP.toJSON(message.kmip) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongodConfig_Security>, I>>(
        object: I,
    ): MongodConfig_Security {
        const message = { ...baseMongodConfig_Security } as MongodConfig_Security;
        message.enableEncryption = object.enableEncryption ?? undefined;
        message.kmip =
            object.kmip !== undefined && object.kmip !== null
                ? MongodConfig_Security_KMIP.fromPartial(object.kmip)
                : undefined;
        return message;
    },
};

const baseMongodConfig_Security_KMIP: object = {
    serverName: '',
    serverCa: '',
    clientCertificate: '',
    keyIdentifier: '',
};

export const MongodConfig_Security_KMIP = {
    encode(
        message: MongodConfig_Security_KMIP,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.serverName !== '') {
            writer.uint32(10).string(message.serverName);
        }
        if (message.port !== undefined) {
            Int64Value.encode({ value: message.port! }, writer.uint32(18).fork()).ldelim();
        }
        if (message.serverCa !== '') {
            writer.uint32(26).string(message.serverCa);
        }
        if (message.clientCertificate !== '') {
            writer.uint32(34).string(message.clientCertificate);
        }
        if (message.keyIdentifier !== '') {
            writer.uint32(42).string(message.keyIdentifier);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig_Security_KMIP {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodConfig_Security_KMIP } as MongodConfig_Security_KMIP;
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

    fromJSON(object: any): MongodConfig_Security_KMIP {
        const message = { ...baseMongodConfig_Security_KMIP } as MongodConfig_Security_KMIP;
        message.serverName =
            object.serverName !== undefined && object.serverName !== null
                ? String(object.serverName)
                : '';
        message.port =
            object.port !== undefined && object.port !== null ? Number(object.port) : undefined;
        message.serverCa =
            object.serverCa !== undefined && object.serverCa !== null
                ? String(object.serverCa)
                : '';
        message.clientCertificate =
            object.clientCertificate !== undefined && object.clientCertificate !== null
                ? String(object.clientCertificate)
                : '';
        message.keyIdentifier =
            object.keyIdentifier !== undefined && object.keyIdentifier !== null
                ? String(object.keyIdentifier)
                : '';
        return message;
    },

    toJSON(message: MongodConfig_Security_KMIP): unknown {
        const obj: any = {};
        message.serverName !== undefined && (obj.serverName = message.serverName);
        message.port !== undefined && (obj.port = message.port);
        message.serverCa !== undefined && (obj.serverCa = message.serverCa);
        message.clientCertificate !== undefined &&
            (obj.clientCertificate = message.clientCertificate);
        message.keyIdentifier !== undefined && (obj.keyIdentifier = message.keyIdentifier);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongodConfig_Security_KMIP>, I>>(
        object: I,
    ): MongodConfig_Security_KMIP {
        const message = { ...baseMongodConfig_Security_KMIP } as MongodConfig_Security_KMIP;
        message.serverName = object.serverName ?? '';
        message.port = object.port ?? undefined;
        message.serverCa = object.serverCa ?? '';
        message.clientCertificate = object.clientCertificate ?? '';
        message.keyIdentifier = object.keyIdentifier ?? '';
        return message;
    },
};

const baseMongodConfig_AuditLog: object = { filter: '' };

export const MongodConfig_AuditLog = {
    encode(message: MongodConfig_AuditLog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.filter !== '') {
            writer.uint32(10).string(message.filter);
        }
        if (message.runtimeConfiguration !== undefined) {
            BoolValue.encode(
                { value: message.runtimeConfiguration! },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig_AuditLog {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodConfig_AuditLog } as MongodConfig_AuditLog;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filter = reader.string();
                    break;
                case 2:
                    message.runtimeConfiguration = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MongodConfig_AuditLog {
        const message = { ...baseMongodConfig_AuditLog } as MongodConfig_AuditLog;
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        message.runtimeConfiguration =
            object.runtimeConfiguration !== undefined && object.runtimeConfiguration !== null
                ? Boolean(object.runtimeConfiguration)
                : undefined;
        return message;
    },

    toJSON(message: MongodConfig_AuditLog): unknown {
        const obj: any = {};
        message.filter !== undefined && (obj.filter = message.filter);
        message.runtimeConfiguration !== undefined &&
            (obj.runtimeConfiguration = message.runtimeConfiguration);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongodConfig_AuditLog>, I>>(
        object: I,
    ): MongodConfig_AuditLog {
        const message = { ...baseMongodConfig_AuditLog } as MongodConfig_AuditLog;
        message.filter = object.filter ?? '';
        message.runtimeConfiguration = object.runtimeConfiguration ?? undefined;
        return message;
    },
};

const baseMongodConfig_SetParameter: object = {};

export const MongodConfig_SetParameter = {
    encode(
        message: MongodConfig_SetParameter,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.auditAuthorizationSuccess !== undefined) {
            BoolValue.encode(
                { value: message.auditAuthorizationSuccess! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.enableFlowControl !== undefined) {
            BoolValue.encode(
                { value: message.enableFlowControl! },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.minSnapshotHistoryWindowInSeconds !== undefined) {
            Int64Value.encode(
                { value: message.minSnapshotHistoryWindowInSeconds! },
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfig_SetParameter {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodConfig_SetParameter } as MongodConfig_SetParameter;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auditAuthorizationSuccess = BoolValue.decode(
                        reader,
                        reader.uint32(),
                    ).value;
                    break;
                case 2:
                    message.enableFlowControl = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 3:
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

    fromJSON(object: any): MongodConfig_SetParameter {
        const message = { ...baseMongodConfig_SetParameter } as MongodConfig_SetParameter;
        message.auditAuthorizationSuccess =
            object.auditAuthorizationSuccess !== undefined &&
            object.auditAuthorizationSuccess !== null
                ? Boolean(object.auditAuthorizationSuccess)
                : undefined;
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

    toJSON(message: MongodConfig_SetParameter): unknown {
        const obj: any = {};
        message.auditAuthorizationSuccess !== undefined &&
            (obj.auditAuthorizationSuccess = message.auditAuthorizationSuccess);
        message.enableFlowControl !== undefined &&
            (obj.enableFlowControl = message.enableFlowControl);
        message.minSnapshotHistoryWindowInSeconds !== undefined &&
            (obj.minSnapshotHistoryWindowInSeconds = message.minSnapshotHistoryWindowInSeconds);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongodConfig_SetParameter>, I>>(
        object: I,
    ): MongodConfig_SetParameter {
        const message = { ...baseMongodConfig_SetParameter } as MongodConfig_SetParameter;
        message.auditAuthorizationSuccess = object.auditAuthorizationSuccess ?? undefined;
        message.enableFlowControl = object.enableFlowControl ?? undefined;
        message.minSnapshotHistoryWindowInSeconds =
            object.minSnapshotHistoryWindowInSeconds ?? undefined;
        return message;
    },
};

const baseMongoCfgConfig: object = {};

export const MongoCfgConfig = {
    encode(message: MongoCfgConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.storage !== undefined) {
            MongoCfgConfig_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
        }
        if (message.operationProfiling !== undefined) {
            MongoCfgConfig_OperationProfiling.encode(
                message.operationProfiling,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.net !== undefined) {
            MongoCfgConfig_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongoCfgConfig } as MongoCfgConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = MongoCfgConfig_Storage.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.operationProfiling = MongoCfgConfig_OperationProfiling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.net = MongoCfgConfig_Network.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MongoCfgConfig {
        const message = { ...baseMongoCfgConfig } as MongoCfgConfig;
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? MongoCfgConfig_Storage.fromJSON(object.storage)
                : undefined;
        message.operationProfiling =
            object.operationProfiling !== undefined && object.operationProfiling !== null
                ? MongoCfgConfig_OperationProfiling.fromJSON(object.operationProfiling)
                : undefined;
        message.net =
            object.net !== undefined && object.net !== null
                ? MongoCfgConfig_Network.fromJSON(object.net)
                : undefined;
        return message;
    },

    toJSON(message: MongoCfgConfig): unknown {
        const obj: any = {};
        message.storage !== undefined &&
            (obj.storage = message.storage
                ? MongoCfgConfig_Storage.toJSON(message.storage)
                : undefined);
        message.operationProfiling !== undefined &&
            (obj.operationProfiling = message.operationProfiling
                ? MongoCfgConfig_OperationProfiling.toJSON(message.operationProfiling)
                : undefined);
        message.net !== undefined &&
            (obj.net = message.net ? MongoCfgConfig_Network.toJSON(message.net) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongoCfgConfig>, I>>(object: I): MongoCfgConfig {
        const message = { ...baseMongoCfgConfig } as MongoCfgConfig;
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? MongoCfgConfig_Storage.fromPartial(object.storage)
                : undefined;
        message.operationProfiling =
            object.operationProfiling !== undefined && object.operationProfiling !== null
                ? MongoCfgConfig_OperationProfiling.fromPartial(object.operationProfiling)
                : undefined;
        message.net =
            object.net !== undefined && object.net !== null
                ? MongoCfgConfig_Network.fromPartial(object.net)
                : undefined;
        return message;
    },
};

const baseMongoCfgConfig_Storage: object = {};

export const MongoCfgConfig_Storage = {
    encode(message: MongoCfgConfig_Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.wiredTiger !== undefined) {
            MongoCfgConfig_Storage_WiredTiger.encode(
                message.wiredTiger,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig_Storage {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongoCfgConfig_Storage } as MongoCfgConfig_Storage;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiredTiger = MongoCfgConfig_Storage_WiredTiger.decode(
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

    fromJSON(object: any): MongoCfgConfig_Storage {
        const message = { ...baseMongoCfgConfig_Storage } as MongoCfgConfig_Storage;
        message.wiredTiger =
            object.wiredTiger !== undefined && object.wiredTiger !== null
                ? MongoCfgConfig_Storage_WiredTiger.fromJSON(object.wiredTiger)
                : undefined;
        return message;
    },

    toJSON(message: MongoCfgConfig_Storage): unknown {
        const obj: any = {};
        message.wiredTiger !== undefined &&
            (obj.wiredTiger = message.wiredTiger
                ? MongoCfgConfig_Storage_WiredTiger.toJSON(message.wiredTiger)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongoCfgConfig_Storage>, I>>(
        object: I,
    ): MongoCfgConfig_Storage {
        const message = { ...baseMongoCfgConfig_Storage } as MongoCfgConfig_Storage;
        message.wiredTiger =
            object.wiredTiger !== undefined && object.wiredTiger !== null
                ? MongoCfgConfig_Storage_WiredTiger.fromPartial(object.wiredTiger)
                : undefined;
        return message;
    },
};

const baseMongoCfgConfig_Storage_WiredTiger: object = {};

export const MongoCfgConfig_Storage_WiredTiger = {
    encode(
        message: MongoCfgConfig_Storage_WiredTiger,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.engineConfig !== undefined) {
            MongoCfgConfig_Storage_WiredTiger_EngineConfig.encode(
                message.engineConfig,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig_Storage_WiredTiger {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongoCfgConfig_Storage_WiredTiger,
        } as MongoCfgConfig_Storage_WiredTiger;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.engineConfig = MongoCfgConfig_Storage_WiredTiger_EngineConfig.decode(
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

    fromJSON(object: any): MongoCfgConfig_Storage_WiredTiger {
        const message = {
            ...baseMongoCfgConfig_Storage_WiredTiger,
        } as MongoCfgConfig_Storage_WiredTiger;
        message.engineConfig =
            object.engineConfig !== undefined && object.engineConfig !== null
                ? MongoCfgConfig_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig)
                : undefined;
        return message;
    },

    toJSON(message: MongoCfgConfig_Storage_WiredTiger): unknown {
        const obj: any = {};
        message.engineConfig !== undefined &&
            (obj.engineConfig = message.engineConfig
                ? MongoCfgConfig_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongoCfgConfig_Storage_WiredTiger>, I>>(
        object: I,
    ): MongoCfgConfig_Storage_WiredTiger {
        const message = {
            ...baseMongoCfgConfig_Storage_WiredTiger,
        } as MongoCfgConfig_Storage_WiredTiger;
        message.engineConfig =
            object.engineConfig !== undefined && object.engineConfig !== null
                ? MongoCfgConfig_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig)
                : undefined;
        return message;
    },
};

const baseMongoCfgConfig_Storage_WiredTiger_EngineConfig: object = {};

export const MongoCfgConfig_Storage_WiredTiger_EngineConfig = {
    encode(
        message: MongoCfgConfig_Storage_WiredTiger_EngineConfig,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.cacheSizeGb !== undefined) {
            DoubleValue.encode({ value: message.cacheSizeGb! }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): MongoCfgConfig_Storage_WiredTiger_EngineConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongoCfgConfig_Storage_WiredTiger_EngineConfig,
        } as MongoCfgConfig_Storage_WiredTiger_EngineConfig;
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

    fromJSON(object: any): MongoCfgConfig_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongoCfgConfig_Storage_WiredTiger_EngineConfig,
        } as MongoCfgConfig_Storage_WiredTiger_EngineConfig;
        message.cacheSizeGb =
            object.cacheSizeGb !== undefined && object.cacheSizeGb !== null
                ? Number(object.cacheSizeGb)
                : undefined;
        return message;
    },

    toJSON(message: MongoCfgConfig_Storage_WiredTiger_EngineConfig): unknown {
        const obj: any = {};
        message.cacheSizeGb !== undefined && (obj.cacheSizeGb = message.cacheSizeGb);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongoCfgConfig_Storage_WiredTiger_EngineConfig>, I>>(
        object: I,
    ): MongoCfgConfig_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongoCfgConfig_Storage_WiredTiger_EngineConfig,
        } as MongoCfgConfig_Storage_WiredTiger_EngineConfig;
        message.cacheSizeGb = object.cacheSizeGb ?? undefined;
        return message;
    },
};

const baseMongoCfgConfig_OperationProfiling: object = { mode: 0 };

export const MongoCfgConfig_OperationProfiling = {
    encode(
        message: MongoCfgConfig_OperationProfiling,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.slowOpThreshold !== undefined) {
            Int64Value.encode(
                { value: message.slowOpThreshold! },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig_OperationProfiling {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongoCfgConfig_OperationProfiling,
        } as MongoCfgConfig_OperationProfiling;
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

    fromJSON(object: any): MongoCfgConfig_OperationProfiling {
        const message = {
            ...baseMongoCfgConfig_OperationProfiling,
        } as MongoCfgConfig_OperationProfiling;
        message.mode =
            object.mode !== undefined && object.mode !== null
                ? mongoCfgConfig_OperationProfiling_ModeFromJSON(object.mode)
                : 0;
        message.slowOpThreshold =
            object.slowOpThreshold !== undefined && object.slowOpThreshold !== null
                ? Number(object.slowOpThreshold)
                : undefined;
        return message;
    },

    toJSON(message: MongoCfgConfig_OperationProfiling): unknown {
        const obj: any = {};
        message.mode !== undefined &&
            (obj.mode = mongoCfgConfig_OperationProfiling_ModeToJSON(message.mode));
        message.slowOpThreshold !== undefined && (obj.slowOpThreshold = message.slowOpThreshold);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongoCfgConfig_OperationProfiling>, I>>(
        object: I,
    ): MongoCfgConfig_OperationProfiling {
        const message = {
            ...baseMongoCfgConfig_OperationProfiling,
        } as MongoCfgConfig_OperationProfiling;
        message.mode = object.mode ?? 0;
        message.slowOpThreshold = object.slowOpThreshold ?? undefined;
        return message;
    },
};

const baseMongoCfgConfig_Network: object = {};

export const MongoCfgConfig_Network = {
    encode(message: MongoCfgConfig_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.maxIncomingConnections !== undefined) {
            Int64Value.encode(
                { value: message.maxIncomingConnections! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfig_Network {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongoCfgConfig_Network } as MongoCfgConfig_Network;
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

    fromJSON(object: any): MongoCfgConfig_Network {
        const message = { ...baseMongoCfgConfig_Network } as MongoCfgConfig_Network;
        message.maxIncomingConnections =
            object.maxIncomingConnections !== undefined && object.maxIncomingConnections !== null
                ? Number(object.maxIncomingConnections)
                : undefined;
        return message;
    },

    toJSON(message: MongoCfgConfig_Network): unknown {
        const obj: any = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongoCfgConfig_Network>, I>>(
        object: I,
    ): MongoCfgConfig_Network {
        const message = { ...baseMongoCfgConfig_Network } as MongoCfgConfig_Network;
        message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
        return message;
    },
};

const baseMongosConfig: object = {};

export const MongosConfig = {
    encode(message: MongosConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.net !== undefined) {
            MongosConfig_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongosConfig } as MongosConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.net = MongosConfig_Network.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MongosConfig {
        const message = { ...baseMongosConfig } as MongosConfig;
        message.net =
            object.net !== undefined && object.net !== null
                ? MongosConfig_Network.fromJSON(object.net)
                : undefined;
        return message;
    },

    toJSON(message: MongosConfig): unknown {
        const obj: any = {};
        message.net !== undefined &&
            (obj.net = message.net ? MongosConfig_Network.toJSON(message.net) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongosConfig>, I>>(object: I): MongosConfig {
        const message = { ...baseMongosConfig } as MongosConfig;
        message.net =
            object.net !== undefined && object.net !== null
                ? MongosConfig_Network.fromPartial(object.net)
                : undefined;
        return message;
    },
};

const baseMongosConfig_Network: object = {};

export const MongosConfig_Network = {
    encode(message: MongosConfig_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.maxIncomingConnections !== undefined) {
            Int64Value.encode(
                { value: message.maxIncomingConnections! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.compression !== undefined) {
            MongosConfig_Network_Compression.encode(
                message.compression,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfig_Network {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongosConfig_Network } as MongosConfig_Network;
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
                    message.compression = MongosConfig_Network_Compression.decode(
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

    fromJSON(object: any): MongosConfig_Network {
        const message = { ...baseMongosConfig_Network } as MongosConfig_Network;
        message.maxIncomingConnections =
            object.maxIncomingConnections !== undefined && object.maxIncomingConnections !== null
                ? Number(object.maxIncomingConnections)
                : undefined;
        message.compression =
            object.compression !== undefined && object.compression !== null
                ? MongosConfig_Network_Compression.fromJSON(object.compression)
                : undefined;
        return message;
    },

    toJSON(message: MongosConfig_Network): unknown {
        const obj: any = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        message.compression !== undefined &&
            (obj.compression = message.compression
                ? MongosConfig_Network_Compression.toJSON(message.compression)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongosConfig_Network>, I>>(
        object: I,
    ): MongosConfig_Network {
        const message = { ...baseMongosConfig_Network } as MongosConfig_Network;
        message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
        message.compression =
            object.compression !== undefined && object.compression !== null
                ? MongosConfig_Network_Compression.fromPartial(object.compression)
                : undefined;
        return message;
    },
};

const baseMongosConfig_Network_Compression: object = { compressors: 0 };

export const MongosConfig_Network_Compression = {
    encode(
        message: MongosConfig_Network_Compression,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        writer.uint32(10).fork();
        for (const v of message.compressors) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfig_Network_Compression {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongosConfig_Network_Compression,
        } as MongosConfig_Network_Compression;
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

    fromJSON(object: any): MongosConfig_Network_Compression {
        const message = {
            ...baseMongosConfig_Network_Compression,
        } as MongosConfig_Network_Compression;
        message.compressors = (object.compressors ?? []).map((e: any) =>
            mongosConfig_Network_Compression_CompressorFromJSON(e),
        );
        return message;
    },

    toJSON(message: MongosConfig_Network_Compression): unknown {
        const obj: any = {};
        if (message.compressors) {
            obj.compressors = message.compressors.map((e) =>
                mongosConfig_Network_Compression_CompressorToJSON(e),
            );
        } else {
            obj.compressors = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongosConfig_Network_Compression>, I>>(
        object: I,
    ): MongosConfig_Network_Compression {
        const message = {
            ...baseMongosConfig_Network_Compression,
        } as MongosConfig_Network_Compression;
        message.compressors = object.compressors?.map((e) => e) || [];
        return message;
    },
};

const baseMongodConfigSet: object = {};

export const MongodConfigSet = {
    encode(message: MongodConfigSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            MongodConfig.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            MongodConfig.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            MongodConfig.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongodConfigSet {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodConfigSet } as MongodConfigSet;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = MongodConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = MongodConfig.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = MongodConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MongodConfigSet {
        const message = { ...baseMongodConfigSet } as MongodConfigSet;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? MongodConfig.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? MongodConfig.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? MongodConfig.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },

    toJSON(message: MongodConfigSet): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? MongodConfig.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? MongodConfig.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? MongodConfig.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongodConfigSet>, I>>(object: I): MongodConfigSet {
        const message = { ...baseMongodConfigSet } as MongodConfigSet;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? MongodConfig.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? MongodConfig.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? MongodConfig.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};

const baseMongoCfgConfigSet: object = {};

export const MongoCfgConfigSet = {
    encode(message: MongoCfgConfigSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            MongoCfgConfig.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            MongoCfgConfig.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            MongoCfgConfig.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongoCfgConfigSet {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongoCfgConfigSet } as MongoCfgConfigSet;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = MongoCfgConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = MongoCfgConfig.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = MongoCfgConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MongoCfgConfigSet {
        const message = { ...baseMongoCfgConfigSet } as MongoCfgConfigSet;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? MongoCfgConfig.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? MongoCfgConfig.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? MongoCfgConfig.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },

    toJSON(message: MongoCfgConfigSet): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? MongoCfgConfig.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? MongoCfgConfig.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? MongoCfgConfig.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongoCfgConfigSet>, I>>(object: I): MongoCfgConfigSet {
        const message = { ...baseMongoCfgConfigSet } as MongoCfgConfigSet;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? MongoCfgConfig.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? MongoCfgConfig.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? MongoCfgConfig.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};

const baseMongosConfigSet: object = {};

export const MongosConfigSet = {
    encode(message: MongosConfigSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            MongosConfig.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            MongosConfig.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            MongosConfig.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongosConfigSet {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongosConfigSet } as MongosConfigSet;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = MongosConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = MongosConfig.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = MongosConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MongosConfigSet {
        const message = { ...baseMongosConfigSet } as MongosConfigSet;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? MongosConfig.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? MongosConfig.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? MongosConfig.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },

    toJSON(message: MongosConfigSet): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? MongosConfig.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? MongosConfig.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? MongosConfig.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongosConfigSet>, I>>(object: I): MongosConfigSet {
        const message = { ...baseMongosConfigSet } as MongosConfigSet;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? MongosConfig.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? MongosConfig.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? MongosConfig.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
