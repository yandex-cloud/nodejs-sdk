/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { DoubleValue, BoolValue, Int64Value } from '../../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.mdb.mongodb.v1.config';

/**
 * Configuration of a mongod daemon. Supported options are a limited subset of all
 * options described in [MongoDB documentation](https://docs.mongodb.com/v5.0/reference/configuration-options/).
 */
export interface Mongodconfig50Enterprise {
    /** `storage` section of mongod configuration. */
    storage?: Mongodconfig50Enterprise_Storage;
    /** `operationProfiling` section of mongod configuration. */
    operationProfiling?: Mongodconfig50Enterprise_OperationProfiling;
    /** `net` section of mongod configuration. */
    net?: Mongodconfig50Enterprise_Network;
    /** `security` section of mongod configuration. */
    security?: Mongodconfig50Enterprise_Security;
    /** `AuditLog` section of mongod configuration. */
    auditLog?: Mongodconfig50Enterprise_AuditLog;
    /** `SetParameter` section of mongod configuration. */
    setParameter?: Mongodconfig50Enterprise_SetParameter;
}

export interface Mongodconfig50Enterprise_Storage {
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger?: Mongodconfig50Enterprise_Storage_WiredTiger;
    /** Configuration of the MongoDB [journal](https://docs.mongodb.com/v5.0/reference/glossary/#term-journal). */
    journal?: Mongodconfig50Enterprise_Storage_Journal;
}

/** Configuration of WiredTiger storage engine. */
export interface Mongodconfig50Enterprise_Storage_WiredTiger {
    /** Engine configuration for WiredTiger. */
    engineConfig?: Mongodconfig50Enterprise_Storage_WiredTiger_EngineConfig;
    /** Collection configuration for WiredTiger. */
    collectionConfig?: Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig;
    /** Index configuration for WiredTiger */
    indexConfig?: Mongodconfig50Enterprise_Storage_WiredTiger_IndexConfig;
}

export interface Mongodconfig50Enterprise_Storage_WiredTiger_EngineConfig {
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb?: number;
}

export interface Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig {
    /** Default type of compression to use for collection data. */
    blockCompressor: Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor;
}

export enum Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor {
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

export function mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
    object: any,
): Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor {
    switch (object) {
        case 0:
        case 'COMPRESSOR_UNSPECIFIED':
            return Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED;
        case 1:
        case 'NONE':
            return Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.NONE;
        case 2:
        case 'SNAPPY':
            return Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY;
        case 3:
        case 'ZLIB':
            return Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB;
        case 4:
        case 'ZSTD':
            return Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED;
    }
}

export function mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
    object: Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor,
): string {
    switch (object) {
        case Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED:
            return 'COMPRESSOR_UNSPECIFIED';
        case Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.NONE:
            return 'NONE';
        case Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY:
            return 'SNAPPY';
        case Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB:
            return 'ZLIB';
        case Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD:
            return 'ZSTD';
        default:
            return 'UNKNOWN';
    }
}

export interface Mongodconfig50Enterprise_Storage_WiredTiger_IndexConfig {
    /** Enables or disables [prefix compression](https://www.mongodb.com/docs/manual/reference/glossary/#std-term-prefix-compression) */
    prefixCompression?: boolean;
}

export interface Mongodconfig50Enterprise_Storage_Journal {
    /**
     * Commit interval between journal operations, in milliseconds.
     * Default: 100.
     */
    commitInterval?: number;
}

export interface Mongodconfig50Enterprise_OperationProfiling {
    /** Mode which specifies operations that should be profiled. */
    mode: Mongodconfig50Enterprise_OperationProfiling_Mode;
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

export enum Mongodconfig50Enterprise_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1,
}

export function mongodconfig50Enterprise_OperationProfiling_ModeFromJSON(
    object: any,
): Mongodconfig50Enterprise_OperationProfiling_Mode {
    switch (object) {
        case 0:
        case 'MODE_UNSPECIFIED':
            return Mongodconfig50Enterprise_OperationProfiling_Mode.MODE_UNSPECIFIED;
        case 1:
        case 'OFF':
            return Mongodconfig50Enterprise_OperationProfiling_Mode.OFF;
        case 2:
        case 'SLOW_OP':
            return Mongodconfig50Enterprise_OperationProfiling_Mode.SLOW_OP;
        case 3:
        case 'ALL':
            return Mongodconfig50Enterprise_OperationProfiling_Mode.ALL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongodconfig50Enterprise_OperationProfiling_Mode.UNRECOGNIZED;
    }
}

export function mongodconfig50Enterprise_OperationProfiling_ModeToJSON(
    object: Mongodconfig50Enterprise_OperationProfiling_Mode,
): string {
    switch (object) {
        case Mongodconfig50Enterprise_OperationProfiling_Mode.MODE_UNSPECIFIED:
            return 'MODE_UNSPECIFIED';
        case Mongodconfig50Enterprise_OperationProfiling_Mode.OFF:
            return 'OFF';
        case Mongodconfig50Enterprise_OperationProfiling_Mode.SLOW_OP:
            return 'SLOW_OP';
        case Mongodconfig50Enterprise_OperationProfiling_Mode.ALL:
            return 'ALL';
        default:
            return 'UNKNOWN';
    }
}

export interface Mongodconfig50Enterprise_Network {
    /** The maximum number of simultaneous connections that mongod will accept. */
    maxIncomingConnections?: number;
    /** Compression settings */
    compression?: Mongodconfig50Enterprise_Network_Compression;
}

export interface Mongodconfig50Enterprise_Network_Compression {
    /**
     * Specifies the default compressor(s) to use for communication between this mongod or mongos instance and:
     * - other members of the deployment if the instance is part of a replica set or a sharded cluster
     * - mongosh
     * - drivers that support the OP_COMPRESSED message format.
     * MongoDB supports the following compressors:
     */
    compressors: Mongodconfig50Enterprise_Network_Compression_Compressor[];
}

export enum Mongodconfig50Enterprise_Network_Compression_Compressor {
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

export function mongodconfig50Enterprise_Network_Compression_CompressorFromJSON(
    object: any,
): Mongodconfig50Enterprise_Network_Compression_Compressor {
    switch (object) {
        case 0:
        case 'COMPRESSOR_UNSPECIFIED':
            return Mongodconfig50Enterprise_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED;
        case 1:
        case 'SNAPPY':
            return Mongodconfig50Enterprise_Network_Compression_Compressor.SNAPPY;
        case 2:
        case 'ZLIB':
            return Mongodconfig50Enterprise_Network_Compression_Compressor.ZLIB;
        case 3:
        case 'ZSTD':
            return Mongodconfig50Enterprise_Network_Compression_Compressor.ZSTD;
        case 4:
        case 'DISABLED':
            return Mongodconfig50Enterprise_Network_Compression_Compressor.DISABLED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongodconfig50Enterprise_Network_Compression_Compressor.UNRECOGNIZED;
    }
}

export function mongodconfig50Enterprise_Network_Compression_CompressorToJSON(
    object: Mongodconfig50Enterprise_Network_Compression_Compressor,
): string {
    switch (object) {
        case Mongodconfig50Enterprise_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED:
            return 'COMPRESSOR_UNSPECIFIED';
        case Mongodconfig50Enterprise_Network_Compression_Compressor.SNAPPY:
            return 'SNAPPY';
        case Mongodconfig50Enterprise_Network_Compression_Compressor.ZLIB:
            return 'ZLIB';
        case Mongodconfig50Enterprise_Network_Compression_Compressor.ZSTD:
            return 'ZSTD';
        case Mongodconfig50Enterprise_Network_Compression_Compressor.DISABLED:
            return 'DISABLED';
        default:
            return 'UNKNOWN';
    }
}

export interface Mongodconfig50Enterprise_Security {
    /** If encryption at rest should be enabled or not */
    enableEncryption?: boolean;
    /** `kmip` section of mongod security config */
    kmip?: Mongodconfig50Enterprise_Security_KMIP;
}

export interface Mongodconfig50Enterprise_Security_KMIP {
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

export interface Mongodconfig50Enterprise_AuditLog {
    /** Audit filter */
    filter: string;
    /** Allows runtime configuration of audit filter and auditAuthorizationSuccess */
    runtimeConfiguration?: boolean;
}

export interface Mongodconfig50Enterprise_SetParameter {
    /** Enables the auditing of authorization successes */
    auditAuthorizationSuccess?: boolean;
    /**
     * Enables or disables the mechanism that controls the rate at which the primary applies its writes with the
     * goal of keeping the secondary members [majority committed](https://www.mongodb.com/docs/v4.2/reference/command/replSetGetStatus/#replSetGetStatus.optimes.lastCommittedOpTime)
     * lag under a configurable maximum value.
     */
    enableFlowControl?: boolean;
    /** The minimum time window in seconds for which the storage engine keeps the snapshot history. */
    minSnapshotHistoryWindowInSeconds?: number;
}

export interface Mongocfgconfig50Enterprise {
    /** `storage` section of mongocfg configuration. */
    storage?: Mongocfgconfig50Enterprise_Storage;
    /** `operationProfiling` section of mongocfg configuration. */
    operationProfiling?: Mongocfgconfig50Enterprise_OperationProfiling;
    /** `net` section of mongocfg configuration. */
    net?: Mongocfgconfig50Enterprise_Network;
}

export interface Mongocfgconfig50Enterprise_Storage {
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger?: Mongocfgconfig50Enterprise_Storage_WiredTiger;
}

/** Configuration of WiredTiger storage engine. */
export interface Mongocfgconfig50Enterprise_Storage_WiredTiger {
    /** Engine configuration for WiredTiger. */
    engineConfig?: Mongocfgconfig50Enterprise_Storage_WiredTiger_EngineConfig;
}

export interface Mongocfgconfig50Enterprise_Storage_WiredTiger_EngineConfig {
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb?: number;
}

export interface Mongocfgconfig50Enterprise_OperationProfiling {
    /** Mode which specifies operations that should be profiled. */
    mode: Mongocfgconfig50Enterprise_OperationProfiling_Mode;
    /**
     * The slow operation time threshold, in milliseconds. Operations that run
     * for longer than this threshold are considered slow, and are processed by the profiler
     * running in the SLOW_OP mode. For details see [MongoDB documentation](https://docs.mongodb.com/v5.0/reference/configuration-options/#operationProfiling.slowOpThresholdMs).
     */
    slowOpThreshold?: number;
}

export enum Mongocfgconfig50Enterprise_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1,
}

export function mongocfgconfig50Enterprise_OperationProfiling_ModeFromJSON(
    object: any,
): Mongocfgconfig50Enterprise_OperationProfiling_Mode {
    switch (object) {
        case 0:
        case 'MODE_UNSPECIFIED':
            return Mongocfgconfig50Enterprise_OperationProfiling_Mode.MODE_UNSPECIFIED;
        case 1:
        case 'OFF':
            return Mongocfgconfig50Enterprise_OperationProfiling_Mode.OFF;
        case 2:
        case 'SLOW_OP':
            return Mongocfgconfig50Enterprise_OperationProfiling_Mode.SLOW_OP;
        case 3:
        case 'ALL':
            return Mongocfgconfig50Enterprise_OperationProfiling_Mode.ALL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongocfgconfig50Enterprise_OperationProfiling_Mode.UNRECOGNIZED;
    }
}

export function mongocfgconfig50Enterprise_OperationProfiling_ModeToJSON(
    object: Mongocfgconfig50Enterprise_OperationProfiling_Mode,
): string {
    switch (object) {
        case Mongocfgconfig50Enterprise_OperationProfiling_Mode.MODE_UNSPECIFIED:
            return 'MODE_UNSPECIFIED';
        case Mongocfgconfig50Enterprise_OperationProfiling_Mode.OFF:
            return 'OFF';
        case Mongocfgconfig50Enterprise_OperationProfiling_Mode.SLOW_OP:
            return 'SLOW_OP';
        case Mongocfgconfig50Enterprise_OperationProfiling_Mode.ALL:
            return 'ALL';
        default:
            return 'UNKNOWN';
    }
}

export interface Mongocfgconfig50Enterprise_Network {
    /** The maximum number of simultaneous connections that mongocfg will accept. */
    maxIncomingConnections?: number;
}

export interface Mongosconfig50Enterprise {
    /** Network settings for mongos. */
    net?: Mongosconfig50Enterprise_Network;
}

export interface Mongosconfig50Enterprise_Network {
    /** The maximum number of simultaneous connections that mongos will accept. */
    maxIncomingConnections?: number;
    /** Compression settings */
    compression?: Mongosconfig50Enterprise_Network_Compression;
}

export interface Mongosconfig50Enterprise_Network_Compression {
    /**
     * Specifies the default compressor(s) to use for communication between this mongod or mongos instance and:
     * - other members of the deployment if the instance is part of a replica set or a sharded cluster
     * - mongosh
     * - drivers that support the OP_COMPRESSED message format.
     * MongoDB supports the following compressors:
     */
    compressors: Mongosconfig50Enterprise_Network_Compression_Compressor[];
}

export enum Mongosconfig50Enterprise_Network_Compression_Compressor {
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

export function mongosconfig50Enterprise_Network_Compression_CompressorFromJSON(
    object: any,
): Mongosconfig50Enterprise_Network_Compression_Compressor {
    switch (object) {
        case 0:
        case 'COMPRESSOR_UNSPECIFIED':
            return Mongosconfig50Enterprise_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED;
        case 1:
        case 'SNAPPY':
            return Mongosconfig50Enterprise_Network_Compression_Compressor.SNAPPY;
        case 2:
        case 'ZLIB':
            return Mongosconfig50Enterprise_Network_Compression_Compressor.ZLIB;
        case 3:
        case 'ZSTD':
            return Mongosconfig50Enterprise_Network_Compression_Compressor.ZSTD;
        case 4:
        case 'DISABLED':
            return Mongosconfig50Enterprise_Network_Compression_Compressor.DISABLED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongosconfig50Enterprise_Network_Compression_Compressor.UNRECOGNIZED;
    }
}

export function mongosconfig50Enterprise_Network_Compression_CompressorToJSON(
    object: Mongosconfig50Enterprise_Network_Compression_Compressor,
): string {
    switch (object) {
        case Mongosconfig50Enterprise_Network_Compression_Compressor.COMPRESSOR_UNSPECIFIED:
            return 'COMPRESSOR_UNSPECIFIED';
        case Mongosconfig50Enterprise_Network_Compression_Compressor.SNAPPY:
            return 'SNAPPY';
        case Mongosconfig50Enterprise_Network_Compression_Compressor.ZLIB:
            return 'ZLIB';
        case Mongosconfig50Enterprise_Network_Compression_Compressor.ZSTD:
            return 'ZSTD';
        case Mongosconfig50Enterprise_Network_Compression_Compressor.DISABLED:
            return 'DISABLED';
        default:
            return 'UNKNOWN';
    }
}

export interface Mongodconfigset50Enterprise {
    /**
     * Effective mongod settings for a MongoDB 5.0 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Mongodconfig50Enterprise;
    /** User-defined mongod settings for a MongoDB 5.0 cluster. */
    userConfig?: Mongodconfig50Enterprise;
    /** Default mongod configuration for a MongoDB 5.0 cluster. */
    defaultConfig?: Mongodconfig50Enterprise;
}

export interface Mongocfgconfigset50Enterprise {
    /**
     * Effective mongocfg settings for a MongoDB 5.0 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Mongocfgconfig50Enterprise;
    /** User-defined mongocfg settings for a MongoDB 5.0 cluster. */
    userConfig?: Mongocfgconfig50Enterprise;
    /** Default mongocfg configuration for a MongoDB 5.0 cluster. */
    defaultConfig?: Mongocfgconfig50Enterprise;
}

export interface Mongosconfigset50Enterprise {
    /**
     * Effective mongos settings for a MongoDB 5.0 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig?: Mongosconfig50Enterprise;
    /** User-defined mongos settings for a MongoDB 5.0 cluster. */
    userConfig?: Mongosconfig50Enterprise;
    /** Default mongos configuration for a MongoDB 5.0 cluster. */
    defaultConfig?: Mongosconfig50Enterprise;
}

const baseMongodconfig50Enterprise: object = {};

export const Mongodconfig50Enterprise = {
    encode(
        message: Mongodconfig50Enterprise,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.storage !== undefined) {
            Mongodconfig50Enterprise_Storage.encode(
                message.storage,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.operationProfiling !== undefined) {
            Mongodconfig50Enterprise_OperationProfiling.encode(
                message.operationProfiling,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.net !== undefined) {
            Mongodconfig50Enterprise_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
        }
        if (message.security !== undefined) {
            Mongodconfig50Enterprise_Security.encode(
                message.security,
                writer.uint32(34).fork(),
            ).ldelim();
        }
        if (message.auditLog !== undefined) {
            Mongodconfig50Enterprise_AuditLog.encode(
                message.auditLog,
                writer.uint32(42).fork(),
            ).ldelim();
        }
        if (message.setParameter !== undefined) {
            Mongodconfig50Enterprise_SetParameter.encode(
                message.setParameter,
                writer.uint32(50).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig50Enterprise {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfig50Enterprise } as Mongodconfig50Enterprise;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = Mongodconfig50Enterprise_Storage.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.operationProfiling = Mongodconfig50Enterprise_OperationProfiling.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.net = Mongodconfig50Enterprise_Network.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.security = Mongodconfig50Enterprise_Security.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 5:
                    message.auditLog = Mongodconfig50Enterprise_AuditLog.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 6:
                    message.setParameter = Mongodconfig50Enterprise_SetParameter.decode(
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

    fromJSON(object: any): Mongodconfig50Enterprise {
        const message = { ...baseMongodconfig50Enterprise } as Mongodconfig50Enterprise;
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? Mongodconfig50Enterprise_Storage.fromJSON(object.storage)
                : undefined;
        message.operationProfiling =
            object.operationProfiling !== undefined && object.operationProfiling !== null
                ? Mongodconfig50Enterprise_OperationProfiling.fromJSON(object.operationProfiling)
                : undefined;
        message.net =
            object.net !== undefined && object.net !== null
                ? Mongodconfig50Enterprise_Network.fromJSON(object.net)
                : undefined;
        message.security =
            object.security !== undefined && object.security !== null
                ? Mongodconfig50Enterprise_Security.fromJSON(object.security)
                : undefined;
        message.auditLog =
            object.auditLog !== undefined && object.auditLog !== null
                ? Mongodconfig50Enterprise_AuditLog.fromJSON(object.auditLog)
                : undefined;
        message.setParameter =
            object.setParameter !== undefined && object.setParameter !== null
                ? Mongodconfig50Enterprise_SetParameter.fromJSON(object.setParameter)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig50Enterprise): unknown {
        const obj: any = {};
        message.storage !== undefined &&
            (obj.storage = message.storage
                ? Mongodconfig50Enterprise_Storage.toJSON(message.storage)
                : undefined);
        message.operationProfiling !== undefined &&
            (obj.operationProfiling = message.operationProfiling
                ? Mongodconfig50Enterprise_OperationProfiling.toJSON(message.operationProfiling)
                : undefined);
        message.net !== undefined &&
            (obj.net = message.net
                ? Mongodconfig50Enterprise_Network.toJSON(message.net)
                : undefined);
        message.security !== undefined &&
            (obj.security = message.security
                ? Mongodconfig50Enterprise_Security.toJSON(message.security)
                : undefined);
        message.auditLog !== undefined &&
            (obj.auditLog = message.auditLog
                ? Mongodconfig50Enterprise_AuditLog.toJSON(message.auditLog)
                : undefined);
        message.setParameter !== undefined &&
            (obj.setParameter = message.setParameter
                ? Mongodconfig50Enterprise_SetParameter.toJSON(message.setParameter)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig50Enterprise>, I>>(
        object: I,
    ): Mongodconfig50Enterprise {
        const message = { ...baseMongodconfig50Enterprise } as Mongodconfig50Enterprise;
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? Mongodconfig50Enterprise_Storage.fromPartial(object.storage)
                : undefined;
        message.operationProfiling =
            object.operationProfiling !== undefined && object.operationProfiling !== null
                ? Mongodconfig50Enterprise_OperationProfiling.fromPartial(object.operationProfiling)
                : undefined;
        message.net =
            object.net !== undefined && object.net !== null
                ? Mongodconfig50Enterprise_Network.fromPartial(object.net)
                : undefined;
        message.security =
            object.security !== undefined && object.security !== null
                ? Mongodconfig50Enterprise_Security.fromPartial(object.security)
                : undefined;
        message.auditLog =
            object.auditLog !== undefined && object.auditLog !== null
                ? Mongodconfig50Enterprise_AuditLog.fromPartial(object.auditLog)
                : undefined;
        message.setParameter =
            object.setParameter !== undefined && object.setParameter !== null
                ? Mongodconfig50Enterprise_SetParameter.fromPartial(object.setParameter)
                : undefined;
        return message;
    },
};

const baseMongodconfig50Enterprise_Storage: object = {};

export const Mongodconfig50Enterprise_Storage = {
    encode(
        message: Mongodconfig50Enterprise_Storage,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.wiredTiger !== undefined) {
            Mongodconfig50Enterprise_Storage_WiredTiger.encode(
                message.wiredTiger,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.journal !== undefined) {
            Mongodconfig50Enterprise_Storage_Journal.encode(
                message.journal,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig50Enterprise_Storage {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50Enterprise_Storage,
        } as Mongodconfig50Enterprise_Storage;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiredTiger = Mongodconfig50Enterprise_Storage_WiredTiger.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.journal = Mongodconfig50Enterprise_Storage_Journal.decode(
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

    fromJSON(object: any): Mongodconfig50Enterprise_Storage {
        const message = {
            ...baseMongodconfig50Enterprise_Storage,
        } as Mongodconfig50Enterprise_Storage;
        message.wiredTiger =
            object.wiredTiger !== undefined && object.wiredTiger !== null
                ? Mongodconfig50Enterprise_Storage_WiredTiger.fromJSON(object.wiredTiger)
                : undefined;
        message.journal =
            object.journal !== undefined && object.journal !== null
                ? Mongodconfig50Enterprise_Storage_Journal.fromJSON(object.journal)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig50Enterprise_Storage): unknown {
        const obj: any = {};
        message.wiredTiger !== undefined &&
            (obj.wiredTiger = message.wiredTiger
                ? Mongodconfig50Enterprise_Storage_WiredTiger.toJSON(message.wiredTiger)
                : undefined);
        message.journal !== undefined &&
            (obj.journal = message.journal
                ? Mongodconfig50Enterprise_Storage_Journal.toJSON(message.journal)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig50Enterprise_Storage>, I>>(
        object: I,
    ): Mongodconfig50Enterprise_Storage {
        const message = {
            ...baseMongodconfig50Enterprise_Storage,
        } as Mongodconfig50Enterprise_Storage;
        message.wiredTiger =
            object.wiredTiger !== undefined && object.wiredTiger !== null
                ? Mongodconfig50Enterprise_Storage_WiredTiger.fromPartial(object.wiredTiger)
                : undefined;
        message.journal =
            object.journal !== undefined && object.journal !== null
                ? Mongodconfig50Enterprise_Storage_Journal.fromPartial(object.journal)
                : undefined;
        return message;
    },
};

const baseMongodconfig50Enterprise_Storage_WiredTiger: object = {};

export const Mongodconfig50Enterprise_Storage_WiredTiger = {
    encode(
        message: Mongodconfig50Enterprise_Storage_WiredTiger,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.engineConfig !== undefined) {
            Mongodconfig50Enterprise_Storage_WiredTiger_EngineConfig.encode(
                message.engineConfig,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.collectionConfig !== undefined) {
            Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig.encode(
                message.collectionConfig,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.indexConfig !== undefined) {
            Mongodconfig50Enterprise_Storage_WiredTiger_IndexConfig.encode(
                message.indexConfig,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): Mongodconfig50Enterprise_Storage_WiredTiger {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50Enterprise_Storage_WiredTiger,
        } as Mongodconfig50Enterprise_Storage_WiredTiger;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.engineConfig =
                        Mongodconfig50Enterprise_Storage_WiredTiger_EngineConfig.decode(
                            reader,
                            reader.uint32(),
                        );
                    break;
                case 2:
                    message.collectionConfig =
                        Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig.decode(
                            reader,
                            reader.uint32(),
                        );
                    break;
                case 3:
                    message.indexConfig =
                        Mongodconfig50Enterprise_Storage_WiredTiger_IndexConfig.decode(
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

    fromJSON(object: any): Mongodconfig50Enterprise_Storage_WiredTiger {
        const message = {
            ...baseMongodconfig50Enterprise_Storage_WiredTiger,
        } as Mongodconfig50Enterprise_Storage_WiredTiger;
        message.engineConfig =
            object.engineConfig !== undefined && object.engineConfig !== null
                ? Mongodconfig50Enterprise_Storage_WiredTiger_EngineConfig.fromJSON(
                      object.engineConfig,
                  )
                : undefined;
        message.collectionConfig =
            object.collectionConfig !== undefined && object.collectionConfig !== null
                ? Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig.fromJSON(
                      object.collectionConfig,
                  )
                : undefined;
        message.indexConfig =
            object.indexConfig !== undefined && object.indexConfig !== null
                ? Mongodconfig50Enterprise_Storage_WiredTiger_IndexConfig.fromJSON(
                      object.indexConfig,
                  )
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig50Enterprise_Storage_WiredTiger): unknown {
        const obj: any = {};
        message.engineConfig !== undefined &&
            (obj.engineConfig = message.engineConfig
                ? Mongodconfig50Enterprise_Storage_WiredTiger_EngineConfig.toJSON(
                      message.engineConfig,
                  )
                : undefined);
        message.collectionConfig !== undefined &&
            (obj.collectionConfig = message.collectionConfig
                ? Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig.toJSON(
                      message.collectionConfig,
                  )
                : undefined);
        message.indexConfig !== undefined &&
            (obj.indexConfig = message.indexConfig
                ? Mongodconfig50Enterprise_Storage_WiredTiger_IndexConfig.toJSON(
                      message.indexConfig,
                  )
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig50Enterprise_Storage_WiredTiger>, I>>(
        object: I,
    ): Mongodconfig50Enterprise_Storage_WiredTiger {
        const message = {
            ...baseMongodconfig50Enterprise_Storage_WiredTiger,
        } as Mongodconfig50Enterprise_Storage_WiredTiger;
        message.engineConfig =
            object.engineConfig !== undefined && object.engineConfig !== null
                ? Mongodconfig50Enterprise_Storage_WiredTiger_EngineConfig.fromPartial(
                      object.engineConfig,
                  )
                : undefined;
        message.collectionConfig =
            object.collectionConfig !== undefined && object.collectionConfig !== null
                ? Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig.fromPartial(
                      object.collectionConfig,
                  )
                : undefined;
        message.indexConfig =
            object.indexConfig !== undefined && object.indexConfig !== null
                ? Mongodconfig50Enterprise_Storage_WiredTiger_IndexConfig.fromPartial(
                      object.indexConfig,
                  )
                : undefined;
        return message;
    },
};

const baseMongodconfig50Enterprise_Storage_WiredTiger_EngineConfig: object = {};

export const Mongodconfig50Enterprise_Storage_WiredTiger_EngineConfig = {
    encode(
        message: Mongodconfig50Enterprise_Storage_WiredTiger_EngineConfig,
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
    ): Mongodconfig50Enterprise_Storage_WiredTiger_EngineConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50Enterprise_Storage_WiredTiger_EngineConfig,
        } as Mongodconfig50Enterprise_Storage_WiredTiger_EngineConfig;
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

    fromJSON(object: any): Mongodconfig50Enterprise_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongodconfig50Enterprise_Storage_WiredTiger_EngineConfig,
        } as Mongodconfig50Enterprise_Storage_WiredTiger_EngineConfig;
        message.cacheSizeGb =
            object.cacheSizeGb !== undefined && object.cacheSizeGb !== null
                ? Number(object.cacheSizeGb)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig50Enterprise_Storage_WiredTiger_EngineConfig): unknown {
        const obj: any = {};
        message.cacheSizeGb !== undefined && (obj.cacheSizeGb = message.cacheSizeGb);
        return obj;
    },

    fromPartial<
        I extends Exact<DeepPartial<Mongodconfig50Enterprise_Storage_WiredTiger_EngineConfig>, I>,
    >(object: I): Mongodconfig50Enterprise_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongodconfig50Enterprise_Storage_WiredTiger_EngineConfig,
        } as Mongodconfig50Enterprise_Storage_WiredTiger_EngineConfig;
        message.cacheSizeGb = object.cacheSizeGb ?? undefined;
        return message;
    },
};

const baseMongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig: object = {
    blockCompressor: 0,
};

export const Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig = {
    encode(
        message: Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig,
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
    ): Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig,
        } as Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig;
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

    fromJSON(object: any): Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig {
        const message = {
            ...baseMongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig,
        } as Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig;
        message.blockCompressor =
            object.blockCompressor !== undefined && object.blockCompressor !== null
                ? mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
                      object.blockCompressor,
                  )
                : 0;
        return message;
    },

    toJSON(message: Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig): unknown {
        const obj: any = {};
        message.blockCompressor !== undefined &&
            (obj.blockCompressor =
                mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
                    message.blockCompressor,
                ));
        return obj;
    },

    fromPartial<
        I extends Exact<
            DeepPartial<Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig>,
            I
        >,
    >(object: I): Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig {
        const message = {
            ...baseMongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig,
        } as Mongodconfig50Enterprise_Storage_WiredTiger_CollectionConfig;
        message.blockCompressor = object.blockCompressor ?? 0;
        return message;
    },
};

const baseMongodconfig50Enterprise_Storage_WiredTiger_IndexConfig: object = {};

export const Mongodconfig50Enterprise_Storage_WiredTiger_IndexConfig = {
    encode(
        message: Mongodconfig50Enterprise_Storage_WiredTiger_IndexConfig,
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
    ): Mongodconfig50Enterprise_Storage_WiredTiger_IndexConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50Enterprise_Storage_WiredTiger_IndexConfig,
        } as Mongodconfig50Enterprise_Storage_WiredTiger_IndexConfig;
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

    fromJSON(object: any): Mongodconfig50Enterprise_Storage_WiredTiger_IndexConfig {
        const message = {
            ...baseMongodconfig50Enterprise_Storage_WiredTiger_IndexConfig,
        } as Mongodconfig50Enterprise_Storage_WiredTiger_IndexConfig;
        message.prefixCompression =
            object.prefixCompression !== undefined && object.prefixCompression !== null
                ? Boolean(object.prefixCompression)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig50Enterprise_Storage_WiredTiger_IndexConfig): unknown {
        const obj: any = {};
        message.prefixCompression !== undefined &&
            (obj.prefixCompression = message.prefixCompression);
        return obj;
    },

    fromPartial<
        I extends Exact<DeepPartial<Mongodconfig50Enterprise_Storage_WiredTiger_IndexConfig>, I>,
    >(object: I): Mongodconfig50Enterprise_Storage_WiredTiger_IndexConfig {
        const message = {
            ...baseMongodconfig50Enterprise_Storage_WiredTiger_IndexConfig,
        } as Mongodconfig50Enterprise_Storage_WiredTiger_IndexConfig;
        message.prefixCompression = object.prefixCompression ?? undefined;
        return message;
    },
};

const baseMongodconfig50Enterprise_Storage_Journal: object = {};

export const Mongodconfig50Enterprise_Storage_Journal = {
    encode(
        message: Mongodconfig50Enterprise_Storage_Journal,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.commitInterval !== undefined) {
            Int64Value.encode(
                { value: message.commitInterval! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): Mongodconfig50Enterprise_Storage_Journal {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50Enterprise_Storage_Journal,
        } as Mongodconfig50Enterprise_Storage_Journal;
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

    fromJSON(object: any): Mongodconfig50Enterprise_Storage_Journal {
        const message = {
            ...baseMongodconfig50Enterprise_Storage_Journal,
        } as Mongodconfig50Enterprise_Storage_Journal;
        message.commitInterval =
            object.commitInterval !== undefined && object.commitInterval !== null
                ? Number(object.commitInterval)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig50Enterprise_Storage_Journal): unknown {
        const obj: any = {};
        message.commitInterval !== undefined && (obj.commitInterval = message.commitInterval);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig50Enterprise_Storage_Journal>, I>>(
        object: I,
    ): Mongodconfig50Enterprise_Storage_Journal {
        const message = {
            ...baseMongodconfig50Enterprise_Storage_Journal,
        } as Mongodconfig50Enterprise_Storage_Journal;
        message.commitInterval = object.commitInterval ?? undefined;
        return message;
    },
};

const baseMongodconfig50Enterprise_OperationProfiling: object = { mode: 0 };

export const Mongodconfig50Enterprise_OperationProfiling = {
    encode(
        message: Mongodconfig50Enterprise_OperationProfiling,
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): Mongodconfig50Enterprise_OperationProfiling {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50Enterprise_OperationProfiling,
        } as Mongodconfig50Enterprise_OperationProfiling;
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

    fromJSON(object: any): Mongodconfig50Enterprise_OperationProfiling {
        const message = {
            ...baseMongodconfig50Enterprise_OperationProfiling,
        } as Mongodconfig50Enterprise_OperationProfiling;
        message.mode =
            object.mode !== undefined && object.mode !== null
                ? mongodconfig50Enterprise_OperationProfiling_ModeFromJSON(object.mode)
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

    toJSON(message: Mongodconfig50Enterprise_OperationProfiling): unknown {
        const obj: any = {};
        message.mode !== undefined &&
            (obj.mode = mongodconfig50Enterprise_OperationProfiling_ModeToJSON(message.mode));
        message.slowOpThreshold !== undefined && (obj.slowOpThreshold = message.slowOpThreshold);
        message.slowOpSampleRate !== undefined && (obj.slowOpSampleRate = message.slowOpSampleRate);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig50Enterprise_OperationProfiling>, I>>(
        object: I,
    ): Mongodconfig50Enterprise_OperationProfiling {
        const message = {
            ...baseMongodconfig50Enterprise_OperationProfiling,
        } as Mongodconfig50Enterprise_OperationProfiling;
        message.mode = object.mode ?? 0;
        message.slowOpThreshold = object.slowOpThreshold ?? undefined;
        message.slowOpSampleRate = object.slowOpSampleRate ?? undefined;
        return message;
    },
};

const baseMongodconfig50Enterprise_Network: object = {};

export const Mongodconfig50Enterprise_Network = {
    encode(
        message: Mongodconfig50Enterprise_Network,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.maxIncomingConnections !== undefined) {
            Int64Value.encode(
                { value: message.maxIncomingConnections! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.compression !== undefined) {
            Mongodconfig50Enterprise_Network_Compression.encode(
                message.compression,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig50Enterprise_Network {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50Enterprise_Network,
        } as Mongodconfig50Enterprise_Network;
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
                    message.compression = Mongodconfig50Enterprise_Network_Compression.decode(
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

    fromJSON(object: any): Mongodconfig50Enterprise_Network {
        const message = {
            ...baseMongodconfig50Enterprise_Network,
        } as Mongodconfig50Enterprise_Network;
        message.maxIncomingConnections =
            object.maxIncomingConnections !== undefined && object.maxIncomingConnections !== null
                ? Number(object.maxIncomingConnections)
                : undefined;
        message.compression =
            object.compression !== undefined && object.compression !== null
                ? Mongodconfig50Enterprise_Network_Compression.fromJSON(object.compression)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig50Enterprise_Network): unknown {
        const obj: any = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        message.compression !== undefined &&
            (obj.compression = message.compression
                ? Mongodconfig50Enterprise_Network_Compression.toJSON(message.compression)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig50Enterprise_Network>, I>>(
        object: I,
    ): Mongodconfig50Enterprise_Network {
        const message = {
            ...baseMongodconfig50Enterprise_Network,
        } as Mongodconfig50Enterprise_Network;
        message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
        message.compression =
            object.compression !== undefined && object.compression !== null
                ? Mongodconfig50Enterprise_Network_Compression.fromPartial(object.compression)
                : undefined;
        return message;
    },
};

const baseMongodconfig50Enterprise_Network_Compression: object = { compressors: 0 };

export const Mongodconfig50Enterprise_Network_Compression = {
    encode(
        message: Mongodconfig50Enterprise_Network_Compression,
        writer: _m0.Writer = _m0.Writer.create(),
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
        length?: number,
    ): Mongodconfig50Enterprise_Network_Compression {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50Enterprise_Network_Compression,
        } as Mongodconfig50Enterprise_Network_Compression;
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

    fromJSON(object: any): Mongodconfig50Enterprise_Network_Compression {
        const message = {
            ...baseMongodconfig50Enterprise_Network_Compression,
        } as Mongodconfig50Enterprise_Network_Compression;
        message.compressors = (object.compressors ?? []).map((e: any) =>
            mongodconfig50Enterprise_Network_Compression_CompressorFromJSON(e),
        );
        return message;
    },

    toJSON(message: Mongodconfig50Enterprise_Network_Compression): unknown {
        const obj: any = {};
        if (message.compressors) {
            obj.compressors = message.compressors.map((e) =>
                mongodconfig50Enterprise_Network_Compression_CompressorToJSON(e),
            );
        } else {
            obj.compressors = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig50Enterprise_Network_Compression>, I>>(
        object: I,
    ): Mongodconfig50Enterprise_Network_Compression {
        const message = {
            ...baseMongodconfig50Enterprise_Network_Compression,
        } as Mongodconfig50Enterprise_Network_Compression;
        message.compressors = object.compressors?.map((e) => e) || [];
        return message;
    },
};

const baseMongodconfig50Enterprise_Security: object = {};

export const Mongodconfig50Enterprise_Security = {
    encode(
        message: Mongodconfig50Enterprise_Security,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.enableEncryption !== undefined) {
            BoolValue.encode(
                { value: message.enableEncryption! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.kmip !== undefined) {
            Mongodconfig50Enterprise_Security_KMIP.encode(
                message.kmip,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig50Enterprise_Security {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50Enterprise_Security,
        } as Mongodconfig50Enterprise_Security;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enableEncryption = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.kmip = Mongodconfig50Enterprise_Security_KMIP.decode(
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

    fromJSON(object: any): Mongodconfig50Enterprise_Security {
        const message = {
            ...baseMongodconfig50Enterprise_Security,
        } as Mongodconfig50Enterprise_Security;
        message.enableEncryption =
            object.enableEncryption !== undefined && object.enableEncryption !== null
                ? Boolean(object.enableEncryption)
                : undefined;
        message.kmip =
            object.kmip !== undefined && object.kmip !== null
                ? Mongodconfig50Enterprise_Security_KMIP.fromJSON(object.kmip)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig50Enterprise_Security): unknown {
        const obj: any = {};
        message.enableEncryption !== undefined && (obj.enableEncryption = message.enableEncryption);
        message.kmip !== undefined &&
            (obj.kmip = message.kmip
                ? Mongodconfig50Enterprise_Security_KMIP.toJSON(message.kmip)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig50Enterprise_Security>, I>>(
        object: I,
    ): Mongodconfig50Enterprise_Security {
        const message = {
            ...baseMongodconfig50Enterprise_Security,
        } as Mongodconfig50Enterprise_Security;
        message.enableEncryption = object.enableEncryption ?? undefined;
        message.kmip =
            object.kmip !== undefined && object.kmip !== null
                ? Mongodconfig50Enterprise_Security_KMIP.fromPartial(object.kmip)
                : undefined;
        return message;
    },
};

const baseMongodconfig50Enterprise_Security_KMIP: object = {
    serverName: '',
    serverCa: '',
    clientCertificate: '',
    keyIdentifier: '',
};

export const Mongodconfig50Enterprise_Security_KMIP = {
    encode(
        message: Mongodconfig50Enterprise_Security_KMIP,
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): Mongodconfig50Enterprise_Security_KMIP {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50Enterprise_Security_KMIP,
        } as Mongodconfig50Enterprise_Security_KMIP;
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

    fromJSON(object: any): Mongodconfig50Enterprise_Security_KMIP {
        const message = {
            ...baseMongodconfig50Enterprise_Security_KMIP,
        } as Mongodconfig50Enterprise_Security_KMIP;
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

    toJSON(message: Mongodconfig50Enterprise_Security_KMIP): unknown {
        const obj: any = {};
        message.serverName !== undefined && (obj.serverName = message.serverName);
        message.port !== undefined && (obj.port = message.port);
        message.serverCa !== undefined && (obj.serverCa = message.serverCa);
        message.clientCertificate !== undefined &&
            (obj.clientCertificate = message.clientCertificate);
        message.keyIdentifier !== undefined && (obj.keyIdentifier = message.keyIdentifier);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig50Enterprise_Security_KMIP>, I>>(
        object: I,
    ): Mongodconfig50Enterprise_Security_KMIP {
        const message = {
            ...baseMongodconfig50Enterprise_Security_KMIP,
        } as Mongodconfig50Enterprise_Security_KMIP;
        message.serverName = object.serverName ?? '';
        message.port = object.port ?? undefined;
        message.serverCa = object.serverCa ?? '';
        message.clientCertificate = object.clientCertificate ?? '';
        message.keyIdentifier = object.keyIdentifier ?? '';
        return message;
    },
};

const baseMongodconfig50Enterprise_AuditLog: object = { filter: '' };

export const Mongodconfig50Enterprise_AuditLog = {
    encode(
        message: Mongodconfig50Enterprise_AuditLog,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig50Enterprise_AuditLog {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50Enterprise_AuditLog,
        } as Mongodconfig50Enterprise_AuditLog;
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

    fromJSON(object: any): Mongodconfig50Enterprise_AuditLog {
        const message = {
            ...baseMongodconfig50Enterprise_AuditLog,
        } as Mongodconfig50Enterprise_AuditLog;
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        message.runtimeConfiguration =
            object.runtimeConfiguration !== undefined && object.runtimeConfiguration !== null
                ? Boolean(object.runtimeConfiguration)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfig50Enterprise_AuditLog): unknown {
        const obj: any = {};
        message.filter !== undefined && (obj.filter = message.filter);
        message.runtimeConfiguration !== undefined &&
            (obj.runtimeConfiguration = message.runtimeConfiguration);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig50Enterprise_AuditLog>, I>>(
        object: I,
    ): Mongodconfig50Enterprise_AuditLog {
        const message = {
            ...baseMongodconfig50Enterprise_AuditLog,
        } as Mongodconfig50Enterprise_AuditLog;
        message.filter = object.filter ?? '';
        message.runtimeConfiguration = object.runtimeConfiguration ?? undefined;
        return message;
    },
};

const baseMongodconfig50Enterprise_SetParameter: object = {};

export const Mongodconfig50Enterprise_SetParameter = {
    encode(
        message: Mongodconfig50Enterprise_SetParameter,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig50Enterprise_SetParameter {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50Enterprise_SetParameter,
        } as Mongodconfig50Enterprise_SetParameter;
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

    fromJSON(object: any): Mongodconfig50Enterprise_SetParameter {
        const message = {
            ...baseMongodconfig50Enterprise_SetParameter,
        } as Mongodconfig50Enterprise_SetParameter;
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

    toJSON(message: Mongodconfig50Enterprise_SetParameter): unknown {
        const obj: any = {};
        message.auditAuthorizationSuccess !== undefined &&
            (obj.auditAuthorizationSuccess = message.auditAuthorizationSuccess);
        message.enableFlowControl !== undefined &&
            (obj.enableFlowControl = message.enableFlowControl);
        message.minSnapshotHistoryWindowInSeconds !== undefined &&
            (obj.minSnapshotHistoryWindowInSeconds = message.minSnapshotHistoryWindowInSeconds);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfig50Enterprise_SetParameter>, I>>(
        object: I,
    ): Mongodconfig50Enterprise_SetParameter {
        const message = {
            ...baseMongodconfig50Enterprise_SetParameter,
        } as Mongodconfig50Enterprise_SetParameter;
        message.auditAuthorizationSuccess = object.auditAuthorizationSuccess ?? undefined;
        message.enableFlowControl = object.enableFlowControl ?? undefined;
        message.minSnapshotHistoryWindowInSeconds =
            object.minSnapshotHistoryWindowInSeconds ?? undefined;
        return message;
    },
};

const baseMongocfgconfig50Enterprise: object = {};

export const Mongocfgconfig50Enterprise = {
    encode(
        message: Mongocfgconfig50Enterprise,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.storage !== undefined) {
            Mongocfgconfig50Enterprise_Storage.encode(
                message.storage,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.operationProfiling !== undefined) {
            Mongocfgconfig50Enterprise_OperationProfiling.encode(
                message.operationProfiling,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.net !== undefined) {
            Mongocfgconfig50Enterprise_Network.encode(
                message.net,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfig50Enterprise {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongocfgconfig50Enterprise } as Mongocfgconfig50Enterprise;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = Mongocfgconfig50Enterprise_Storage.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.operationProfiling =
                        Mongocfgconfig50Enterprise_OperationProfiling.decode(
                            reader,
                            reader.uint32(),
                        );
                    break;
                case 3:
                    message.net = Mongocfgconfig50Enterprise_Network.decode(
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

    fromJSON(object: any): Mongocfgconfig50Enterprise {
        const message = { ...baseMongocfgconfig50Enterprise } as Mongocfgconfig50Enterprise;
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? Mongocfgconfig50Enterprise_Storage.fromJSON(object.storage)
                : undefined;
        message.operationProfiling =
            object.operationProfiling !== undefined && object.operationProfiling !== null
                ? Mongocfgconfig50Enterprise_OperationProfiling.fromJSON(object.operationProfiling)
                : undefined;
        message.net =
            object.net !== undefined && object.net !== null
                ? Mongocfgconfig50Enterprise_Network.fromJSON(object.net)
                : undefined;
        return message;
    },

    toJSON(message: Mongocfgconfig50Enterprise): unknown {
        const obj: any = {};
        message.storage !== undefined &&
            (obj.storage = message.storage
                ? Mongocfgconfig50Enterprise_Storage.toJSON(message.storage)
                : undefined);
        message.operationProfiling !== undefined &&
            (obj.operationProfiling = message.operationProfiling
                ? Mongocfgconfig50Enterprise_OperationProfiling.toJSON(message.operationProfiling)
                : undefined);
        message.net !== undefined &&
            (obj.net = message.net
                ? Mongocfgconfig50Enterprise_Network.toJSON(message.net)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongocfgconfig50Enterprise>, I>>(
        object: I,
    ): Mongocfgconfig50Enterprise {
        const message = { ...baseMongocfgconfig50Enterprise } as Mongocfgconfig50Enterprise;
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? Mongocfgconfig50Enterprise_Storage.fromPartial(object.storage)
                : undefined;
        message.operationProfiling =
            object.operationProfiling !== undefined && object.operationProfiling !== null
                ? Mongocfgconfig50Enterprise_OperationProfiling.fromPartial(
                      object.operationProfiling,
                  )
                : undefined;
        message.net =
            object.net !== undefined && object.net !== null
                ? Mongocfgconfig50Enterprise_Network.fromPartial(object.net)
                : undefined;
        return message;
    },
};

const baseMongocfgconfig50Enterprise_Storage: object = {};

export const Mongocfgconfig50Enterprise_Storage = {
    encode(
        message: Mongocfgconfig50Enterprise_Storage,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.wiredTiger !== undefined) {
            Mongocfgconfig50Enterprise_Storage_WiredTiger.encode(
                message.wiredTiger,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfig50Enterprise_Storage {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig50Enterprise_Storage,
        } as Mongocfgconfig50Enterprise_Storage;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiredTiger = Mongocfgconfig50Enterprise_Storage_WiredTiger.decode(
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

    fromJSON(object: any): Mongocfgconfig50Enterprise_Storage {
        const message = {
            ...baseMongocfgconfig50Enterprise_Storage,
        } as Mongocfgconfig50Enterprise_Storage;
        message.wiredTiger =
            object.wiredTiger !== undefined && object.wiredTiger !== null
                ? Mongocfgconfig50Enterprise_Storage_WiredTiger.fromJSON(object.wiredTiger)
                : undefined;
        return message;
    },

    toJSON(message: Mongocfgconfig50Enterprise_Storage): unknown {
        const obj: any = {};
        message.wiredTiger !== undefined &&
            (obj.wiredTiger = message.wiredTiger
                ? Mongocfgconfig50Enterprise_Storage_WiredTiger.toJSON(message.wiredTiger)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongocfgconfig50Enterprise_Storage>, I>>(
        object: I,
    ): Mongocfgconfig50Enterprise_Storage {
        const message = {
            ...baseMongocfgconfig50Enterprise_Storage,
        } as Mongocfgconfig50Enterprise_Storage;
        message.wiredTiger =
            object.wiredTiger !== undefined && object.wiredTiger !== null
                ? Mongocfgconfig50Enterprise_Storage_WiredTiger.fromPartial(object.wiredTiger)
                : undefined;
        return message;
    },
};

const baseMongocfgconfig50Enterprise_Storage_WiredTiger: object = {};

export const Mongocfgconfig50Enterprise_Storage_WiredTiger = {
    encode(
        message: Mongocfgconfig50Enterprise_Storage_WiredTiger,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.engineConfig !== undefined) {
            Mongocfgconfig50Enterprise_Storage_WiredTiger_EngineConfig.encode(
                message.engineConfig,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): Mongocfgconfig50Enterprise_Storage_WiredTiger {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig50Enterprise_Storage_WiredTiger,
        } as Mongocfgconfig50Enterprise_Storage_WiredTiger;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.engineConfig =
                        Mongocfgconfig50Enterprise_Storage_WiredTiger_EngineConfig.decode(
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

    fromJSON(object: any): Mongocfgconfig50Enterprise_Storage_WiredTiger {
        const message = {
            ...baseMongocfgconfig50Enterprise_Storage_WiredTiger,
        } as Mongocfgconfig50Enterprise_Storage_WiredTiger;
        message.engineConfig =
            object.engineConfig !== undefined && object.engineConfig !== null
                ? Mongocfgconfig50Enterprise_Storage_WiredTiger_EngineConfig.fromJSON(
                      object.engineConfig,
                  )
                : undefined;
        return message;
    },

    toJSON(message: Mongocfgconfig50Enterprise_Storage_WiredTiger): unknown {
        const obj: any = {};
        message.engineConfig !== undefined &&
            (obj.engineConfig = message.engineConfig
                ? Mongocfgconfig50Enterprise_Storage_WiredTiger_EngineConfig.toJSON(
                      message.engineConfig,
                  )
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongocfgconfig50Enterprise_Storage_WiredTiger>, I>>(
        object: I,
    ): Mongocfgconfig50Enterprise_Storage_WiredTiger {
        const message = {
            ...baseMongocfgconfig50Enterprise_Storage_WiredTiger,
        } as Mongocfgconfig50Enterprise_Storage_WiredTiger;
        message.engineConfig =
            object.engineConfig !== undefined && object.engineConfig !== null
                ? Mongocfgconfig50Enterprise_Storage_WiredTiger_EngineConfig.fromPartial(
                      object.engineConfig,
                  )
                : undefined;
        return message;
    },
};

const baseMongocfgconfig50Enterprise_Storage_WiredTiger_EngineConfig: object = {};

export const Mongocfgconfig50Enterprise_Storage_WiredTiger_EngineConfig = {
    encode(
        message: Mongocfgconfig50Enterprise_Storage_WiredTiger_EngineConfig,
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
    ): Mongocfgconfig50Enterprise_Storage_WiredTiger_EngineConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig50Enterprise_Storage_WiredTiger_EngineConfig,
        } as Mongocfgconfig50Enterprise_Storage_WiredTiger_EngineConfig;
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

    fromJSON(object: any): Mongocfgconfig50Enterprise_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongocfgconfig50Enterprise_Storage_WiredTiger_EngineConfig,
        } as Mongocfgconfig50Enterprise_Storage_WiredTiger_EngineConfig;
        message.cacheSizeGb =
            object.cacheSizeGb !== undefined && object.cacheSizeGb !== null
                ? Number(object.cacheSizeGb)
                : undefined;
        return message;
    },

    toJSON(message: Mongocfgconfig50Enterprise_Storage_WiredTiger_EngineConfig): unknown {
        const obj: any = {};
        message.cacheSizeGb !== undefined && (obj.cacheSizeGb = message.cacheSizeGb);
        return obj;
    },

    fromPartial<
        I extends Exact<DeepPartial<Mongocfgconfig50Enterprise_Storage_WiredTiger_EngineConfig>, I>,
    >(object: I): Mongocfgconfig50Enterprise_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongocfgconfig50Enterprise_Storage_WiredTiger_EngineConfig,
        } as Mongocfgconfig50Enterprise_Storage_WiredTiger_EngineConfig;
        message.cacheSizeGb = object.cacheSizeGb ?? undefined;
        return message;
    },
};

const baseMongocfgconfig50Enterprise_OperationProfiling: object = { mode: 0 };

export const Mongocfgconfig50Enterprise_OperationProfiling = {
    encode(
        message: Mongocfgconfig50Enterprise_OperationProfiling,
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): Mongocfgconfig50Enterprise_OperationProfiling {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig50Enterprise_OperationProfiling,
        } as Mongocfgconfig50Enterprise_OperationProfiling;
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

    fromJSON(object: any): Mongocfgconfig50Enterprise_OperationProfiling {
        const message = {
            ...baseMongocfgconfig50Enterprise_OperationProfiling,
        } as Mongocfgconfig50Enterprise_OperationProfiling;
        message.mode =
            object.mode !== undefined && object.mode !== null
                ? mongocfgconfig50Enterprise_OperationProfiling_ModeFromJSON(object.mode)
                : 0;
        message.slowOpThreshold =
            object.slowOpThreshold !== undefined && object.slowOpThreshold !== null
                ? Number(object.slowOpThreshold)
                : undefined;
        return message;
    },

    toJSON(message: Mongocfgconfig50Enterprise_OperationProfiling): unknown {
        const obj: any = {};
        message.mode !== undefined &&
            (obj.mode = mongocfgconfig50Enterprise_OperationProfiling_ModeToJSON(message.mode));
        message.slowOpThreshold !== undefined && (obj.slowOpThreshold = message.slowOpThreshold);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongocfgconfig50Enterprise_OperationProfiling>, I>>(
        object: I,
    ): Mongocfgconfig50Enterprise_OperationProfiling {
        const message = {
            ...baseMongocfgconfig50Enterprise_OperationProfiling,
        } as Mongocfgconfig50Enterprise_OperationProfiling;
        message.mode = object.mode ?? 0;
        message.slowOpThreshold = object.slowOpThreshold ?? undefined;
        return message;
    },
};

const baseMongocfgconfig50Enterprise_Network: object = {};

export const Mongocfgconfig50Enterprise_Network = {
    encode(
        message: Mongocfgconfig50Enterprise_Network,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.maxIncomingConnections !== undefined) {
            Int64Value.encode(
                { value: message.maxIncomingConnections! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfig50Enterprise_Network {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig50Enterprise_Network,
        } as Mongocfgconfig50Enterprise_Network;
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

    fromJSON(object: any): Mongocfgconfig50Enterprise_Network {
        const message = {
            ...baseMongocfgconfig50Enterprise_Network,
        } as Mongocfgconfig50Enterprise_Network;
        message.maxIncomingConnections =
            object.maxIncomingConnections !== undefined && object.maxIncomingConnections !== null
                ? Number(object.maxIncomingConnections)
                : undefined;
        return message;
    },

    toJSON(message: Mongocfgconfig50Enterprise_Network): unknown {
        const obj: any = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongocfgconfig50Enterprise_Network>, I>>(
        object: I,
    ): Mongocfgconfig50Enterprise_Network {
        const message = {
            ...baseMongocfgconfig50Enterprise_Network,
        } as Mongocfgconfig50Enterprise_Network;
        message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
        return message;
    },
};

const baseMongosconfig50Enterprise: object = {};

export const Mongosconfig50Enterprise = {
    encode(
        message: Mongosconfig50Enterprise,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.net !== undefined) {
            Mongosconfig50Enterprise_Network.encode(message.net, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongosconfig50Enterprise {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongosconfig50Enterprise } as Mongosconfig50Enterprise;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.net = Mongosconfig50Enterprise_Network.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongosconfig50Enterprise {
        const message = { ...baseMongosconfig50Enterprise } as Mongosconfig50Enterprise;
        message.net =
            object.net !== undefined && object.net !== null
                ? Mongosconfig50Enterprise_Network.fromJSON(object.net)
                : undefined;
        return message;
    },

    toJSON(message: Mongosconfig50Enterprise): unknown {
        const obj: any = {};
        message.net !== undefined &&
            (obj.net = message.net
                ? Mongosconfig50Enterprise_Network.toJSON(message.net)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongosconfig50Enterprise>, I>>(
        object: I,
    ): Mongosconfig50Enterprise {
        const message = { ...baseMongosconfig50Enterprise } as Mongosconfig50Enterprise;
        message.net =
            object.net !== undefined && object.net !== null
                ? Mongosconfig50Enterprise_Network.fromPartial(object.net)
                : undefined;
        return message;
    },
};

const baseMongosconfig50Enterprise_Network: object = {};

export const Mongosconfig50Enterprise_Network = {
    encode(
        message: Mongosconfig50Enterprise_Network,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.maxIncomingConnections !== undefined) {
            Int64Value.encode(
                { value: message.maxIncomingConnections! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.compression !== undefined) {
            Mongosconfig50Enterprise_Network_Compression.encode(
                message.compression,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongosconfig50Enterprise_Network {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongosconfig50Enterprise_Network,
        } as Mongosconfig50Enterprise_Network;
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
                    message.compression = Mongosconfig50Enterprise_Network_Compression.decode(
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

    fromJSON(object: any): Mongosconfig50Enterprise_Network {
        const message = {
            ...baseMongosconfig50Enterprise_Network,
        } as Mongosconfig50Enterprise_Network;
        message.maxIncomingConnections =
            object.maxIncomingConnections !== undefined && object.maxIncomingConnections !== null
                ? Number(object.maxIncomingConnections)
                : undefined;
        message.compression =
            object.compression !== undefined && object.compression !== null
                ? Mongosconfig50Enterprise_Network_Compression.fromJSON(object.compression)
                : undefined;
        return message;
    },

    toJSON(message: Mongosconfig50Enterprise_Network): unknown {
        const obj: any = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        message.compression !== undefined &&
            (obj.compression = message.compression
                ? Mongosconfig50Enterprise_Network_Compression.toJSON(message.compression)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongosconfig50Enterprise_Network>, I>>(
        object: I,
    ): Mongosconfig50Enterprise_Network {
        const message = {
            ...baseMongosconfig50Enterprise_Network,
        } as Mongosconfig50Enterprise_Network;
        message.maxIncomingConnections = object.maxIncomingConnections ?? undefined;
        message.compression =
            object.compression !== undefined && object.compression !== null
                ? Mongosconfig50Enterprise_Network_Compression.fromPartial(object.compression)
                : undefined;
        return message;
    },
};

const baseMongosconfig50Enterprise_Network_Compression: object = { compressors: 0 };

export const Mongosconfig50Enterprise_Network_Compression = {
    encode(
        message: Mongosconfig50Enterprise_Network_Compression,
        writer: _m0.Writer = _m0.Writer.create(),
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
        length?: number,
    ): Mongosconfig50Enterprise_Network_Compression {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongosconfig50Enterprise_Network_Compression,
        } as Mongosconfig50Enterprise_Network_Compression;
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

    fromJSON(object: any): Mongosconfig50Enterprise_Network_Compression {
        const message = {
            ...baseMongosconfig50Enterprise_Network_Compression,
        } as Mongosconfig50Enterprise_Network_Compression;
        message.compressors = (object.compressors ?? []).map((e: any) =>
            mongosconfig50Enterprise_Network_Compression_CompressorFromJSON(e),
        );
        return message;
    },

    toJSON(message: Mongosconfig50Enterprise_Network_Compression): unknown {
        const obj: any = {};
        if (message.compressors) {
            obj.compressors = message.compressors.map((e) =>
                mongosconfig50Enterprise_Network_Compression_CompressorToJSON(e),
            );
        } else {
            obj.compressors = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongosconfig50Enterprise_Network_Compression>, I>>(
        object: I,
    ): Mongosconfig50Enterprise_Network_Compression {
        const message = {
            ...baseMongosconfig50Enterprise_Network_Compression,
        } as Mongosconfig50Enterprise_Network_Compression;
        message.compressors = object.compressors?.map((e) => e) || [];
        return message;
    },
};

const baseMongodconfigset50Enterprise: object = {};

export const Mongodconfigset50Enterprise = {
    encode(
        message: Mongodconfigset50Enterprise,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            Mongodconfig50Enterprise.encode(
                message.effectiveConfig,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.userConfig !== undefined) {
            Mongodconfig50Enterprise.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            Mongodconfig50Enterprise.encode(
                message.defaultConfig,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfigset50Enterprise {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfigset50Enterprise } as Mongodconfigset50Enterprise;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = Mongodconfig50Enterprise.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.userConfig = Mongodconfig50Enterprise.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = Mongodconfig50Enterprise.decode(
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

    fromJSON(object: any): Mongodconfigset50Enterprise {
        const message = { ...baseMongodconfigset50Enterprise } as Mongodconfigset50Enterprise;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? Mongodconfig50Enterprise.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? Mongodconfig50Enterprise.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? Mongodconfig50Enterprise.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },

    toJSON(message: Mongodconfigset50Enterprise): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? Mongodconfig50Enterprise.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? Mongodconfig50Enterprise.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? Mongodconfig50Enterprise.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongodconfigset50Enterprise>, I>>(
        object: I,
    ): Mongodconfigset50Enterprise {
        const message = { ...baseMongodconfigset50Enterprise } as Mongodconfigset50Enterprise;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? Mongodconfig50Enterprise.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? Mongodconfig50Enterprise.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? Mongodconfig50Enterprise.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};

const baseMongocfgconfigset50Enterprise: object = {};

export const Mongocfgconfigset50Enterprise = {
    encode(
        message: Mongocfgconfigset50Enterprise,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            Mongocfgconfig50Enterprise.encode(
                message.effectiveConfig,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.userConfig !== undefined) {
            Mongocfgconfig50Enterprise.encode(
                message.userConfig,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            Mongocfgconfig50Enterprise.encode(
                message.defaultConfig,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfigset50Enterprise {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongocfgconfigset50Enterprise } as Mongocfgconfigset50Enterprise;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = Mongocfgconfig50Enterprise.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.userConfig = Mongocfgconfig50Enterprise.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = Mongocfgconfig50Enterprise.decode(
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

    fromJSON(object: any): Mongocfgconfigset50Enterprise {
        const message = { ...baseMongocfgconfigset50Enterprise } as Mongocfgconfigset50Enterprise;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? Mongocfgconfig50Enterprise.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? Mongocfgconfig50Enterprise.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? Mongocfgconfig50Enterprise.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },

    toJSON(message: Mongocfgconfigset50Enterprise): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? Mongocfgconfig50Enterprise.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? Mongocfgconfig50Enterprise.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? Mongocfgconfig50Enterprise.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongocfgconfigset50Enterprise>, I>>(
        object: I,
    ): Mongocfgconfigset50Enterprise {
        const message = { ...baseMongocfgconfigset50Enterprise } as Mongocfgconfigset50Enterprise;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? Mongocfgconfig50Enterprise.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? Mongocfgconfig50Enterprise.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? Mongocfgconfig50Enterprise.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};

const baseMongosconfigset50Enterprise: object = {};

export const Mongosconfigset50Enterprise = {
    encode(
        message: Mongosconfigset50Enterprise,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            Mongosconfig50Enterprise.encode(
                message.effectiveConfig,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.userConfig !== undefined) {
            Mongosconfig50Enterprise.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            Mongosconfig50Enterprise.encode(
                message.defaultConfig,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongosconfigset50Enterprise {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongosconfigset50Enterprise } as Mongosconfigset50Enterprise;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = Mongosconfig50Enterprise.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.userConfig = Mongosconfig50Enterprise.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = Mongosconfig50Enterprise.decode(
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

    fromJSON(object: any): Mongosconfigset50Enterprise {
        const message = { ...baseMongosconfigset50Enterprise } as Mongosconfigset50Enterprise;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? Mongosconfig50Enterprise.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? Mongosconfig50Enterprise.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? Mongosconfig50Enterprise.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },

    toJSON(message: Mongosconfigset50Enterprise): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? Mongosconfig50Enterprise.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? Mongosconfig50Enterprise.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? Mongosconfig50Enterprise.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Mongosconfigset50Enterprise>, I>>(
        object: I,
    ): Mongosconfigset50Enterprise {
        const message = { ...baseMongosconfigset50Enterprise } as Mongosconfigset50Enterprise;
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? Mongosconfig50Enterprise.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? Mongosconfig50Enterprise.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? Mongosconfig50Enterprise.fromPartial(object.defaultConfig)
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
