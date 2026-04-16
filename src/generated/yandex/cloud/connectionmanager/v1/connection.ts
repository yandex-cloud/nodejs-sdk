/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { PostgreSQLConnection } from './postgresql';
import { MySQLConnection } from './mysql';
import { MongoDBConnection } from './mongodb';
import { ClickHouseConnection } from './clickhouse';
import { KafkaConnection } from './kafka';
import { RedisConnection } from './redis';
import { OpenSearchConnection } from './opensearch';
import { TrinoConnection } from './trino';
import { ValkeyConnection } from './valkey';
import { GreenplumConnection } from './greenplum';
import { StoreDocConnection } from './storedoc';
import { BoolValue } from '../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.connectionmanager.v1';

/** Database or service type enumeration. */
export enum DBType {
    /** DB_TYPE_UNSPECIFIED - Unspecified database type. */
    DB_TYPE_UNSPECIFIED = 0,
    /** POSTGRESQL - PostgreSQL database. */
    POSTGRESQL = 1,
    /** MYSQL - MySQL database. */
    MYSQL = 2,
    /** CLICKHOUSE - ClickHouse database. */
    CLICKHOUSE = 3,
    /** MONGODB - MongoDB database. */
    MONGODB = 4,
    /** KAFKA - Apache Kafka message broker. */
    KAFKA = 5,
    /** REDIS - Redis in-memory data store. */
    REDIS = 6,
    /** OPENSEARCH - OpenSearch search engine. */
    OPENSEARCH = 7,
    /** TRINO - Trino distributed SQL query engine. */
    TRINO = 8,
    /** VALKEY - Valkey in-memory data store. */
    VALKEY = 9,
    /** GREENPLUM - Greenplum data warehouse. */
    GREENPLUM = 10,
    /** STOREDOC - StoreDoc document store. */
    STOREDOC = 11,
    UNRECOGNIZED = -1,
}

export function dBTypeFromJSON(object: any): DBType {
    switch (object) {
        case 0:
        case 'DB_TYPE_UNSPECIFIED':
            return DBType.DB_TYPE_UNSPECIFIED;
        case 1:
        case 'POSTGRESQL':
            return DBType.POSTGRESQL;
        case 2:
        case 'MYSQL':
            return DBType.MYSQL;
        case 3:
        case 'CLICKHOUSE':
            return DBType.CLICKHOUSE;
        case 4:
        case 'MONGODB':
            return DBType.MONGODB;
        case 5:
        case 'KAFKA':
            return DBType.KAFKA;
        case 6:
        case 'REDIS':
            return DBType.REDIS;
        case 7:
        case 'OPENSEARCH':
            return DBType.OPENSEARCH;
        case 8:
        case 'TRINO':
            return DBType.TRINO;
        case 9:
        case 'VALKEY':
            return DBType.VALKEY;
        case 10:
        case 'GREENPLUM':
            return DBType.GREENPLUM;
        case 11:
        case 'STOREDOC':
            return DBType.STOREDOC;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return DBType.UNRECOGNIZED;
    }
}

export function dBTypeToJSON(object: DBType): string {
    switch (object) {
        case DBType.DB_TYPE_UNSPECIFIED:
            return 'DB_TYPE_UNSPECIFIED';
        case DBType.POSTGRESQL:
            return 'POSTGRESQL';
        case DBType.MYSQL:
            return 'MYSQL';
        case DBType.CLICKHOUSE:
            return 'CLICKHOUSE';
        case DBType.MONGODB:
            return 'MONGODB';
        case DBType.KAFKA:
            return 'KAFKA';
        case DBType.REDIS:
            return 'REDIS';
        case DBType.OPENSEARCH:
            return 'OPENSEARCH';
        case DBType.TRINO:
            return 'TRINO';
        case DBType.VALKEY:
            return 'VALKEY';
        case DBType.GREENPLUM:
            return 'GREENPLUM';
        case DBType.STOREDOC:
            return 'STOREDOC';
        default:
            return 'UNKNOWN';
    }
}

/** Connection parameters for various database and service types. */
export interface ConnectionParams {
    /** PostgreSQL database connection parameters. */
    postgresql?: PostgreSQLConnection | undefined;
    /** MySQL database connection parameters. */
    mysql?: MySQLConnection | undefined;
    /** MongoDB database connection parameters. */
    mongodb?: MongoDBConnection | undefined;
    /** ClickHouse database connection parameters. */
    clickhouse?: ClickHouseConnection | undefined;
    /** Apache Kafka message broker connection parameters. */
    kafka?: KafkaConnection | undefined;
    /** Redis in-memory data store connection parameters. */
    redis?: RedisConnection | undefined;
    /** OpenSearch search engine connection parameters. */
    opensearch?: OpenSearchConnection | undefined;
    /** Trino distributed SQL query engine connection parameters. */
    trino?: TrinoConnection | undefined;
    /** Valkey in-memory data store connection parameters. */
    valkey?: ValkeyConnection | undefined;
    /** Greenplum data warehouse connection parameters. */
    greenplum?: GreenplumConnection | undefined;
    /** StoreDoc document store connection parameters. */
    storedoc?: StoreDocConnection | undefined;
}

/** Reference to a Lockbox secret. */
export interface LockboxSecret {
    /** ID of the Lockbox secret. */
    id: string;
    /** Lockbox secret version. */
    version: string;
    /** The newest available version of the Lockbox secret. */
    newestVersion: string;
}

/** Specification for creating a new Lockbox secret. */
export interface LockboxSecretSpec {
    /** ID of the folder where the Lockbox secret will be created. If omitted, the secret will be created in the connection's folder. */
    folderId: string;
}

/** A Connection resource represents a configured connection to a database or service. */
export interface Connection {
    /** Reference to the Lockbox secret containing connection credentials. */
    lockboxSecret?: LockboxSecret | undefined;
    /** Specification for creating a new Lockbox secret. */
    lockboxSecretSpec?: LockboxSecretSpec | undefined;
    /** ID of the connection. Generated at creation time. */
    id: string;
    /** ID of the folder that the connection belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Last update timestamp. */
    updatedAt?: Date;
    /** Name of the connection. */
    name: string;
    /** Description of the connection. */
    description: string;
    /** Connection labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** ID of the subject which created the connection. */
    createdBy: string;
    /** Connection parameters specific to the database or service type. */
    params?: ConnectionParams;
    /** Whether this connection is managed by the system (e.g. an MDB cluster). */
    isManaged: boolean;
    /** Whether the current user can use this connection. Filled only when `with_can_use` has been requested in ListConnectionRequest. */
    canUse?: boolean;
}

export interface Connection_LabelsEntry {
    key: string;
    value: string;
}

const baseConnectionParams: object = {};

export const ConnectionParams: {
    encode(message: ConnectionParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionParams;
    fromJSON(object: any): ConnectionParams;
    toJSON(message: ConnectionParams): unknown;
    fromPartial<I extends Exact<DeepPartial<ConnectionParams>, I>>(object: I): ConnectionParams;
} = {
    encode(message: ConnectionParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.postgresql !== undefined) {
            PostgreSQLConnection.encode(message.postgresql, writer.uint32(10).fork()).ldelim();
        }
        if (message.mysql !== undefined) {
            MySQLConnection.encode(message.mysql, writer.uint32(18).fork()).ldelim();
        }
        if (message.mongodb !== undefined) {
            MongoDBConnection.encode(message.mongodb, writer.uint32(26).fork()).ldelim();
        }
        if (message.clickhouse !== undefined) {
            ClickHouseConnection.encode(message.clickhouse, writer.uint32(34).fork()).ldelim();
        }
        if (message.kafka !== undefined) {
            KafkaConnection.encode(message.kafka, writer.uint32(42).fork()).ldelim();
        }
        if (message.redis !== undefined) {
            RedisConnection.encode(message.redis, writer.uint32(50).fork()).ldelim();
        }
        if (message.opensearch !== undefined) {
            OpenSearchConnection.encode(message.opensearch, writer.uint32(58).fork()).ldelim();
        }
        if (message.trino !== undefined) {
            TrinoConnection.encode(message.trino, writer.uint32(66).fork()).ldelim();
        }
        if (message.valkey !== undefined) {
            ValkeyConnection.encode(message.valkey, writer.uint32(74).fork()).ldelim();
        }
        if (message.greenplum !== undefined) {
            GreenplumConnection.encode(message.greenplum, writer.uint32(82).fork()).ldelim();
        }
        if (message.storedoc !== undefined) {
            StoreDocConnection.encode(message.storedoc, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionParams {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConnectionParams } as ConnectionParams;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.postgresql = PostgreSQLConnection.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mysql = MySQLConnection.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mongodb = MongoDBConnection.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.clickhouse = ClickHouseConnection.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.kafka = KafkaConnection.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.redis = RedisConnection.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.opensearch = OpenSearchConnection.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.trino = TrinoConnection.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.valkey = ValkeyConnection.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.greenplum = GreenplumConnection.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.storedoc = StoreDocConnection.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ConnectionParams {
        const message = { ...baseConnectionParams } as ConnectionParams;
        message.postgresql =
            object.postgresql !== undefined && object.postgresql !== null
                ? PostgreSQLConnection.fromJSON(object.postgresql)
                : undefined;
        message.mysql =
            object.mysql !== undefined && object.mysql !== null
                ? MySQLConnection.fromJSON(object.mysql)
                : undefined;
        message.mongodb =
            object.mongodb !== undefined && object.mongodb !== null
                ? MongoDBConnection.fromJSON(object.mongodb)
                : undefined;
        message.clickhouse =
            object.clickhouse !== undefined && object.clickhouse !== null
                ? ClickHouseConnection.fromJSON(object.clickhouse)
                : undefined;
        message.kafka =
            object.kafka !== undefined && object.kafka !== null
                ? KafkaConnection.fromJSON(object.kafka)
                : undefined;
        message.redis =
            object.redis !== undefined && object.redis !== null
                ? RedisConnection.fromJSON(object.redis)
                : undefined;
        message.opensearch =
            object.opensearch !== undefined && object.opensearch !== null
                ? OpenSearchConnection.fromJSON(object.opensearch)
                : undefined;
        message.trino =
            object.trino !== undefined && object.trino !== null
                ? TrinoConnection.fromJSON(object.trino)
                : undefined;
        message.valkey =
            object.valkey !== undefined && object.valkey !== null
                ? ValkeyConnection.fromJSON(object.valkey)
                : undefined;
        message.greenplum =
            object.greenplum !== undefined && object.greenplum !== null
                ? GreenplumConnection.fromJSON(object.greenplum)
                : undefined;
        message.storedoc =
            object.storedoc !== undefined && object.storedoc !== null
                ? StoreDocConnection.fromJSON(object.storedoc)
                : undefined;
        return message;
    },

    toJSON(message: ConnectionParams): unknown {
        const obj: any = {};
        message.postgresql !== undefined &&
            (obj.postgresql = message.postgresql
                ? PostgreSQLConnection.toJSON(message.postgresql)
                : undefined);
        message.mysql !== undefined &&
            (obj.mysql = message.mysql ? MySQLConnection.toJSON(message.mysql) : undefined);
        message.mongodb !== undefined &&
            (obj.mongodb = message.mongodb ? MongoDBConnection.toJSON(message.mongodb) : undefined);
        message.clickhouse !== undefined &&
            (obj.clickhouse = message.clickhouse
                ? ClickHouseConnection.toJSON(message.clickhouse)
                : undefined);
        message.kafka !== undefined &&
            (obj.kafka = message.kafka ? KafkaConnection.toJSON(message.kafka) : undefined);
        message.redis !== undefined &&
            (obj.redis = message.redis ? RedisConnection.toJSON(message.redis) : undefined);
        message.opensearch !== undefined &&
            (obj.opensearch = message.opensearch
                ? OpenSearchConnection.toJSON(message.opensearch)
                : undefined);
        message.trino !== undefined &&
            (obj.trino = message.trino ? TrinoConnection.toJSON(message.trino) : undefined);
        message.valkey !== undefined &&
            (obj.valkey = message.valkey ? ValkeyConnection.toJSON(message.valkey) : undefined);
        message.greenplum !== undefined &&
            (obj.greenplum = message.greenplum
                ? GreenplumConnection.toJSON(message.greenplum)
                : undefined);
        message.storedoc !== undefined &&
            (obj.storedoc = message.storedoc
                ? StoreDocConnection.toJSON(message.storedoc)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ConnectionParams>, I>>(object: I): ConnectionParams {
        const message = { ...baseConnectionParams } as ConnectionParams;
        message.postgresql =
            object.postgresql !== undefined && object.postgresql !== null
                ? PostgreSQLConnection.fromPartial(object.postgresql)
                : undefined;
        message.mysql =
            object.mysql !== undefined && object.mysql !== null
                ? MySQLConnection.fromPartial(object.mysql)
                : undefined;
        message.mongodb =
            object.mongodb !== undefined && object.mongodb !== null
                ? MongoDBConnection.fromPartial(object.mongodb)
                : undefined;
        message.clickhouse =
            object.clickhouse !== undefined && object.clickhouse !== null
                ? ClickHouseConnection.fromPartial(object.clickhouse)
                : undefined;
        message.kafka =
            object.kafka !== undefined && object.kafka !== null
                ? KafkaConnection.fromPartial(object.kafka)
                : undefined;
        message.redis =
            object.redis !== undefined && object.redis !== null
                ? RedisConnection.fromPartial(object.redis)
                : undefined;
        message.opensearch =
            object.opensearch !== undefined && object.opensearch !== null
                ? OpenSearchConnection.fromPartial(object.opensearch)
                : undefined;
        message.trino =
            object.trino !== undefined && object.trino !== null
                ? TrinoConnection.fromPartial(object.trino)
                : undefined;
        message.valkey =
            object.valkey !== undefined && object.valkey !== null
                ? ValkeyConnection.fromPartial(object.valkey)
                : undefined;
        message.greenplum =
            object.greenplum !== undefined && object.greenplum !== null
                ? GreenplumConnection.fromPartial(object.greenplum)
                : undefined;
        message.storedoc =
            object.storedoc !== undefined && object.storedoc !== null
                ? StoreDocConnection.fromPartial(object.storedoc)
                : undefined;
        return message;
    },
};

const baseLockboxSecret: object = { id: '', version: '', newestVersion: '' };

export const LockboxSecret: {
    encode(message: LockboxSecret, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LockboxSecret;
    fromJSON(object: any): LockboxSecret;
    toJSON(message: LockboxSecret): unknown;
    fromPartial<I extends Exact<DeepPartial<LockboxSecret>, I>>(object: I): LockboxSecret;
} = {
    encode(message: LockboxSecret, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.version !== '') {
            writer.uint32(18).string(message.version);
        }
        if (message.newestVersion !== '') {
            writer.uint32(26).string(message.newestVersion);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LockboxSecret {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLockboxSecret } as LockboxSecret;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.newestVersion = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LockboxSecret {
        const message = { ...baseLockboxSecret } as LockboxSecret;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.version =
            object.version !== undefined && object.version !== null ? String(object.version) : '';
        message.newestVersion =
            object.newestVersion !== undefined && object.newestVersion !== null
                ? String(object.newestVersion)
                : '';
        return message;
    },

    toJSON(message: LockboxSecret): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.version !== undefined && (obj.version = message.version);
        message.newestVersion !== undefined && (obj.newestVersion = message.newestVersion);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LockboxSecret>, I>>(object: I): LockboxSecret {
        const message = { ...baseLockboxSecret } as LockboxSecret;
        message.id = object.id ?? '';
        message.version = object.version ?? '';
        message.newestVersion = object.newestVersion ?? '';
        return message;
    },
};

const baseLockboxSecretSpec: object = { folderId: '' };

export const LockboxSecretSpec: {
    encode(message: LockboxSecretSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LockboxSecretSpec;
    fromJSON(object: any): LockboxSecretSpec;
    toJSON(message: LockboxSecretSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<LockboxSecretSpec>, I>>(object: I): LockboxSecretSpec;
} = {
    encode(message: LockboxSecretSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LockboxSecretSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLockboxSecretSpec } as LockboxSecretSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LockboxSecretSpec {
        const message = { ...baseLockboxSecretSpec } as LockboxSecretSpec;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        return message;
    },

    toJSON(message: LockboxSecretSpec): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LockboxSecretSpec>, I>>(object: I): LockboxSecretSpec {
        const message = { ...baseLockboxSecretSpec } as LockboxSecretSpec;
        message.folderId = object.folderId ?? '';
        return message;
    },
};

const baseConnection: object = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    createdBy: '',
    isManaged: false,
};

export const Connection: {
    encode(message: Connection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Connection;
    fromJSON(object: any): Connection;
    toJSON(message: Connection): unknown;
    fromPartial<I extends Exact<DeepPartial<Connection>, I>>(object: I): Connection;
} = {
    encode(message: Connection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.lockboxSecret !== undefined) {
            LockboxSecret.encode(message.lockboxSecret, writer.uint32(82).fork()).ldelim();
        }
        if (message.lockboxSecretSpec !== undefined) {
            LockboxSecretSpec.encode(message.lockboxSecretSpec, writer.uint32(114).fork()).ldelim();
        }
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(42).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(50).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Connection_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(58).fork(),
            ).ldelim();
        });
        if (message.createdBy !== '') {
            writer.uint32(66).string(message.createdBy);
        }
        if (message.params !== undefined) {
            ConnectionParams.encode(message.params, writer.uint32(74).fork()).ldelim();
        }
        if (message.isManaged === true) {
            writer.uint32(96).bool(message.isManaged);
        }
        if (message.canUse !== undefined) {
            BoolValue.encode({ value: message.canUse! }, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Connection {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConnection } as Connection;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 10:
                    message.lockboxSecret = LockboxSecret.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.lockboxSecretSpec = LockboxSecretSpec.decode(reader, reader.uint32());
                    break;
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    const entry7 = Connection_LabelsEntry.decode(reader, reader.uint32());
                    if (entry7.value !== undefined) {
                        message.labels[entry7.key] = entry7.value;
                    }
                    break;
                case 8:
                    message.createdBy = reader.string();
                    break;
                case 9:
                    message.params = ConnectionParams.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.isManaged = reader.bool();
                    break;
                case 13:
                    message.canUse = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Connection {
        const message = { ...baseConnection } as Connection;
        message.lockboxSecret =
            object.lockboxSecret !== undefined && object.lockboxSecret !== null
                ? LockboxSecret.fromJSON(object.lockboxSecret)
                : undefined;
        message.lockboxSecretSpec =
            object.lockboxSecretSpec !== undefined && object.lockboxSecretSpec !== null
                ? LockboxSecretSpec.fromJSON(object.lockboxSecretSpec)
                : undefined;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.updatedAt =
            object.updatedAt !== undefined && object.updatedAt !== null
                ? fromJsonTimestamp(object.updatedAt)
                : undefined;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.createdBy =
            object.createdBy !== undefined && object.createdBy !== null
                ? String(object.createdBy)
                : '';
        message.params =
            object.params !== undefined && object.params !== null
                ? ConnectionParams.fromJSON(object.params)
                : undefined;
        message.isManaged =
            object.isManaged !== undefined && object.isManaged !== null
                ? Boolean(object.isManaged)
                : false;
        message.canUse =
            object.canUse !== undefined && object.canUse !== null
                ? Boolean(object.canUse)
                : undefined;
        return message;
    },

    toJSON(message: Connection): unknown {
        const obj: any = {};
        message.lockboxSecret !== undefined &&
            (obj.lockboxSecret = message.lockboxSecret
                ? LockboxSecret.toJSON(message.lockboxSecret)
                : undefined);
        message.lockboxSecretSpec !== undefined &&
            (obj.lockboxSecretSpec = message.lockboxSecretSpec
                ? LockboxSecretSpec.toJSON(message.lockboxSecretSpec)
                : undefined);
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.createdBy !== undefined && (obj.createdBy = message.createdBy);
        message.params !== undefined &&
            (obj.params = message.params ? ConnectionParams.toJSON(message.params) : undefined);
        message.isManaged !== undefined && (obj.isManaged = message.isManaged);
        message.canUse !== undefined && (obj.canUse = message.canUse);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Connection>, I>>(object: I): Connection {
        const message = { ...baseConnection } as Connection;
        message.lockboxSecret =
            object.lockboxSecret !== undefined && object.lockboxSecret !== null
                ? LockboxSecret.fromPartial(object.lockboxSecret)
                : undefined;
        message.lockboxSecretSpec =
            object.lockboxSecretSpec !== undefined && object.lockboxSecretSpec !== null
                ? LockboxSecretSpec.fromPartial(object.lockboxSecretSpec)
                : undefined;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.createdBy = object.createdBy ?? '';
        message.params =
            object.params !== undefined && object.params !== null
                ? ConnectionParams.fromPartial(object.params)
                : undefined;
        message.isManaged = object.isManaged ?? false;
        message.canUse = object.canUse ?? undefined;
        return message;
    },
};

const baseConnection_LabelsEntry: object = { key: '', value: '' };

export const Connection_LabelsEntry: {
    encode(message: Connection_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Connection_LabelsEntry;
    fromJSON(object: any): Connection_LabelsEntry;
    toJSON(message: Connection_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<Connection_LabelsEntry>, I>>(object: I): Connection_LabelsEntry;
} = {
    encode(message: Connection_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Connection_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConnection_LabelsEntry } as Connection_LabelsEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Connection_LabelsEntry {
        const message = { ...baseConnection_LabelsEntry } as Connection_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Connection_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Connection_LabelsEntry>, I>>(
        object: I,
    ): Connection_LabelsEntry {
        const message = { ...baseConnection_LabelsEntry } as Connection_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
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

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
