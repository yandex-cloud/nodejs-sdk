/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
    ObjectTransferStage,
    TLSMode,
    Secret,
    CleanupPolicy,
    ConnectionManagerConnection,
    objectTransferStageFromJSON,
    objectTransferStageToJSON,
    cleanupPolicyFromJSON,
    cleanupPolicyToJSON,
} from '../../../../../yandex/cloud/datatransfer/v1/endpoint/common';

export const protobufPackage = 'yandex.cloud.datatransfer.v1.endpoint';

export interface PostgresObjectTransferSettings {
    /**
     * Sequences
     *
     * CREATE SEQUENCE ...
     */
    sequence: ObjectTransferStage;
    /**
     * Owned sequences
     *
     * CREATE SEQUENCE ... OWNED BY ...
     */
    sequenceOwnedBy: ObjectTransferStage;
    /**
     * Tables
     *
     * CREATE TABLE ...
     */
    table: ObjectTransferStage;
    /**
     * Primary keys
     *
     * ALTER TABLE ... ADD PRIMARY KEY ...
     */
    primaryKey: ObjectTransferStage;
    /**
     * Foreign keys
     *
     * ALTER TABLE ... ADD FOREIGN KEY ...
     */
    fkConstraint: ObjectTransferStage;
    /**
     * Default values
     *
     * ALTER TABLE ... ALTER COLUMN ... SET DEFAULT ...
     */
    defaultValues: ObjectTransferStage;
    /**
     * Constraints
     *
     * ALTER TABLE ... ADD CONSTRAINT ...
     */
    constraint: ObjectTransferStage;
    /**
     * Indexes
     *
     * CREATE INDEX ...
     */
    index: ObjectTransferStage;
    /**
     * Views
     *
     * CREATE VIEW ...
     */
    view: ObjectTransferStage;
    /**
     * Functions
     *
     * CREATE FUNCTION ...
     */
    function: ObjectTransferStage;
    /**
     * Triggers
     *
     * CREATE TRIGGER ...
     */
    trigger: ObjectTransferStage;
    /**
     * Types
     *
     * CREATE TYPE ...
     */
    type: ObjectTransferStage;
    /**
     * Rules
     *
     * CREATE RULE ...
     */
    rule: ObjectTransferStage;
    /**
     * Collations
     *
     * CREATE COLLATION ...
     */
    collation: ObjectTransferStage;
    /**
     * Policies
     *
     * CREATE POLICY ...
     */
    policy: ObjectTransferStage;
    /**
     * Casts
     *
     * CREATE CAST ...
     */
    cast: ObjectTransferStage;
    /**
     * Materialized views
     *
     * CREATE MATERIALIZED VIEW ...
     */
    materializedView: ObjectTransferStage;
    /**
     * Sequence sets
     *
     * CREATE SEQUENCE ...
     */
    sequenceSet: ObjectTransferStage;
}

export interface OnPremisePostgres {
    /** Will be used if the cluster ID is not specified. */
    port: number;
    /** Network interface for endpoint. If none will assume public ipv4 */
    subnetId: string;
    hosts: string[];
    /** TLS settings for server connection. Disabled by default. */
    tlsMode?: TLSMode;
}

export interface PostgresConnection {
    /** Managed Service for PostgreSQL cluster ID */
    mdbClusterId: string | undefined;
    /** Connection options for on-premise PostgreSQL */
    onPremise?: OnPremisePostgres | undefined;
    connectionManagerConnection?: ConnectionManagerConnection | undefined;
}

export interface PostgresSource {
    /** Database connection settings */
    connection?: PostgresConnection;
    /** Database name */
    database: string;
    /** User for database access. not required as may be in connection */
    user: string;
    /** Password for database access. */
    password?: Secret;
    /**
     * Included tables
     *
     * If none or empty list is presented, all tables are replicated. Full table name
     * with schema. Can contain schema_name.* patterns.
     */
    includeTables: string[];
    /**
     * Excluded tables
     *
     * If none or empty list is presented, all tables are replicated. Full table name
     * with schema. Can contain schema_name.* patterns.
     */
    excludeTables: string[];
    /**
     * Maximum lag of replication slot (in bytes); after exceeding this limit
     * replication will be aborted.
     */
    slotByteLagLimit: number;
    /**
     * Database schema for service tables (__consumer_keeper,
     * __data_transfer_mole_finder). Default is public
     */
    serviceSchema: string;
    /** Select database objects to be transferred during activation or deactivation. */
    objectTransferSettings?: PostgresObjectTransferSettings;
    /** Security groups */
    securityGroups: string[];
}

export interface PostgresTarget {
    /** Database connection settings */
    connection?: PostgresConnection;
    /** Database name */
    database: string;
    /** User for database access. not required as may be in connection */
    user: string;
    /** Password for database access. */
    password?: Secret;
    /**
     * Cleanup policy for activate, reactivate and reupload processes. Default is
     * truncate.
     */
    cleanupPolicy: CleanupPolicy;
    /** Security groups */
    securityGroups: string[];
}

const basePostgresObjectTransferSettings: object = {
    sequence: 0,
    sequenceOwnedBy: 0,
    table: 0,
    primaryKey: 0,
    fkConstraint: 0,
    defaultValues: 0,
    constraint: 0,
    index: 0,
    view: 0,
    function: 0,
    trigger: 0,
    type: 0,
    rule: 0,
    collation: 0,
    policy: 0,
    cast: 0,
    materializedView: 0,
    sequenceSet: 0,
};

export const PostgresObjectTransferSettings = {
    encode(
        message: PostgresObjectTransferSettings,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.sequence !== 0) {
            writer.uint32(8).int32(message.sequence);
        }
        if (message.sequenceOwnedBy !== 0) {
            writer.uint32(16).int32(message.sequenceOwnedBy);
        }
        if (message.table !== 0) {
            writer.uint32(24).int32(message.table);
        }
        if (message.primaryKey !== 0) {
            writer.uint32(32).int32(message.primaryKey);
        }
        if (message.fkConstraint !== 0) {
            writer.uint32(40).int32(message.fkConstraint);
        }
        if (message.defaultValues !== 0) {
            writer.uint32(48).int32(message.defaultValues);
        }
        if (message.constraint !== 0) {
            writer.uint32(56).int32(message.constraint);
        }
        if (message.index !== 0) {
            writer.uint32(64).int32(message.index);
        }
        if (message.view !== 0) {
            writer.uint32(72).int32(message.view);
        }
        if (message.function !== 0) {
            writer.uint32(80).int32(message.function);
        }
        if (message.trigger !== 0) {
            writer.uint32(88).int32(message.trigger);
        }
        if (message.type !== 0) {
            writer.uint32(96).int32(message.type);
        }
        if (message.rule !== 0) {
            writer.uint32(104).int32(message.rule);
        }
        if (message.collation !== 0) {
            writer.uint32(112).int32(message.collation);
        }
        if (message.policy !== 0) {
            writer.uint32(120).int32(message.policy);
        }
        if (message.cast !== 0) {
            writer.uint32(128).int32(message.cast);
        }
        if (message.materializedView !== 0) {
            writer.uint32(136).int32(message.materializedView);
        }
        if (message.sequenceSet !== 0) {
            writer.uint32(144).int32(message.sequenceSet);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PostgresObjectTransferSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePostgresObjectTransferSettings } as PostgresObjectTransferSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.int32() as any;
                    break;
                case 2:
                    message.sequenceOwnedBy = reader.int32() as any;
                    break;
                case 3:
                    message.table = reader.int32() as any;
                    break;
                case 4:
                    message.primaryKey = reader.int32() as any;
                    break;
                case 5:
                    message.fkConstraint = reader.int32() as any;
                    break;
                case 6:
                    message.defaultValues = reader.int32() as any;
                    break;
                case 7:
                    message.constraint = reader.int32() as any;
                    break;
                case 8:
                    message.index = reader.int32() as any;
                    break;
                case 9:
                    message.view = reader.int32() as any;
                    break;
                case 10:
                    message.function = reader.int32() as any;
                    break;
                case 11:
                    message.trigger = reader.int32() as any;
                    break;
                case 12:
                    message.type = reader.int32() as any;
                    break;
                case 13:
                    message.rule = reader.int32() as any;
                    break;
                case 14:
                    message.collation = reader.int32() as any;
                    break;
                case 15:
                    message.policy = reader.int32() as any;
                    break;
                case 16:
                    message.cast = reader.int32() as any;
                    break;
                case 17:
                    message.materializedView = reader.int32() as any;
                    break;
                case 18:
                    message.sequenceSet = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PostgresObjectTransferSettings {
        const message = { ...basePostgresObjectTransferSettings } as PostgresObjectTransferSettings;
        message.sequence =
            object.sequence !== undefined && object.sequence !== null
                ? objectTransferStageFromJSON(object.sequence)
                : 0;
        message.sequenceOwnedBy =
            object.sequenceOwnedBy !== undefined && object.sequenceOwnedBy !== null
                ? objectTransferStageFromJSON(object.sequenceOwnedBy)
                : 0;
        message.table =
            object.table !== undefined && object.table !== null
                ? objectTransferStageFromJSON(object.table)
                : 0;
        message.primaryKey =
            object.primaryKey !== undefined && object.primaryKey !== null
                ? objectTransferStageFromJSON(object.primaryKey)
                : 0;
        message.fkConstraint =
            object.fkConstraint !== undefined && object.fkConstraint !== null
                ? objectTransferStageFromJSON(object.fkConstraint)
                : 0;
        message.defaultValues =
            object.defaultValues !== undefined && object.defaultValues !== null
                ? objectTransferStageFromJSON(object.defaultValues)
                : 0;
        message.constraint =
            object.constraint !== undefined && object.constraint !== null
                ? objectTransferStageFromJSON(object.constraint)
                : 0;
        message.index =
            object.index !== undefined && object.index !== null
                ? objectTransferStageFromJSON(object.index)
                : 0;
        message.view =
            object.view !== undefined && object.view !== null
                ? objectTransferStageFromJSON(object.view)
                : 0;
        message.function =
            object.function !== undefined && object.function !== null
                ? objectTransferStageFromJSON(object.function)
                : 0;
        message.trigger =
            object.trigger !== undefined && object.trigger !== null
                ? objectTransferStageFromJSON(object.trigger)
                : 0;
        message.type =
            object.type !== undefined && object.type !== null
                ? objectTransferStageFromJSON(object.type)
                : 0;
        message.rule =
            object.rule !== undefined && object.rule !== null
                ? objectTransferStageFromJSON(object.rule)
                : 0;
        message.collation =
            object.collation !== undefined && object.collation !== null
                ? objectTransferStageFromJSON(object.collation)
                : 0;
        message.policy =
            object.policy !== undefined && object.policy !== null
                ? objectTransferStageFromJSON(object.policy)
                : 0;
        message.cast =
            object.cast !== undefined && object.cast !== null
                ? objectTransferStageFromJSON(object.cast)
                : 0;
        message.materializedView =
            object.materializedView !== undefined && object.materializedView !== null
                ? objectTransferStageFromJSON(object.materializedView)
                : 0;
        message.sequenceSet =
            object.sequenceSet !== undefined && object.sequenceSet !== null
                ? objectTransferStageFromJSON(object.sequenceSet)
                : 0;
        return message;
    },

    toJSON(message: PostgresObjectTransferSettings): unknown {
        const obj: any = {};
        message.sequence !== undefined &&
            (obj.sequence = objectTransferStageToJSON(message.sequence));
        message.sequenceOwnedBy !== undefined &&
            (obj.sequenceOwnedBy = objectTransferStageToJSON(message.sequenceOwnedBy));
        message.table !== undefined && (obj.table = objectTransferStageToJSON(message.table));
        message.primaryKey !== undefined &&
            (obj.primaryKey = objectTransferStageToJSON(message.primaryKey));
        message.fkConstraint !== undefined &&
            (obj.fkConstraint = objectTransferStageToJSON(message.fkConstraint));
        message.defaultValues !== undefined &&
            (obj.defaultValues = objectTransferStageToJSON(message.defaultValues));
        message.constraint !== undefined &&
            (obj.constraint = objectTransferStageToJSON(message.constraint));
        message.index !== undefined && (obj.index = objectTransferStageToJSON(message.index));
        message.view !== undefined && (obj.view = objectTransferStageToJSON(message.view));
        message.function !== undefined &&
            (obj.function = objectTransferStageToJSON(message.function));
        message.trigger !== undefined && (obj.trigger = objectTransferStageToJSON(message.trigger));
        message.type !== undefined && (obj.type = objectTransferStageToJSON(message.type));
        message.rule !== undefined && (obj.rule = objectTransferStageToJSON(message.rule));
        message.collation !== undefined &&
            (obj.collation = objectTransferStageToJSON(message.collation));
        message.policy !== undefined && (obj.policy = objectTransferStageToJSON(message.policy));
        message.cast !== undefined && (obj.cast = objectTransferStageToJSON(message.cast));
        message.materializedView !== undefined &&
            (obj.materializedView = objectTransferStageToJSON(message.materializedView));
        message.sequenceSet !== undefined &&
            (obj.sequenceSet = objectTransferStageToJSON(message.sequenceSet));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PostgresObjectTransferSettings>, I>>(
        object: I,
    ): PostgresObjectTransferSettings {
        const message = { ...basePostgresObjectTransferSettings } as PostgresObjectTransferSettings;
        message.sequence = object.sequence ?? 0;
        message.sequenceOwnedBy = object.sequenceOwnedBy ?? 0;
        message.table = object.table ?? 0;
        message.primaryKey = object.primaryKey ?? 0;
        message.fkConstraint = object.fkConstraint ?? 0;
        message.defaultValues = object.defaultValues ?? 0;
        message.constraint = object.constraint ?? 0;
        message.index = object.index ?? 0;
        message.view = object.view ?? 0;
        message.function = object.function ?? 0;
        message.trigger = object.trigger ?? 0;
        message.type = object.type ?? 0;
        message.rule = object.rule ?? 0;
        message.collation = object.collation ?? 0;
        message.policy = object.policy ?? 0;
        message.cast = object.cast ?? 0;
        message.materializedView = object.materializedView ?? 0;
        message.sequenceSet = object.sequenceSet ?? 0;
        return message;
    },
};

const baseOnPremisePostgres: object = { port: 0, subnetId: '', hosts: '' };

export const OnPremisePostgres = {
    encode(message: OnPremisePostgres, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.port !== 0) {
            writer.uint32(16).int64(message.port);
        }
        if (message.subnetId !== '') {
            writer.uint32(34).string(message.subnetId);
        }
        for (const v of message.hosts) {
            writer.uint32(42).string(v!);
        }
        if (message.tlsMode !== undefined) {
            TLSMode.encode(message.tlsMode, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OnPremisePostgres {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOnPremisePostgres } as OnPremisePostgres;
        message.hosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.port = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.subnetId = reader.string();
                    break;
                case 5:
                    message.hosts.push(reader.string());
                    break;
                case 6:
                    message.tlsMode = TLSMode.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OnPremisePostgres {
        const message = { ...baseOnPremisePostgres } as OnPremisePostgres;
        message.port = object.port !== undefined && object.port !== null ? Number(object.port) : 0;
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : '';
        message.hosts = (object.hosts ?? []).map((e: any) => String(e));
        message.tlsMode =
            object.tlsMode !== undefined && object.tlsMode !== null
                ? TLSMode.fromJSON(object.tlsMode)
                : undefined;
        return message;
    },

    toJSON(message: OnPremisePostgres): unknown {
        const obj: any = {};
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        if (message.hosts) {
            obj.hosts = message.hosts.map((e) => e);
        } else {
            obj.hosts = [];
        }
        message.tlsMode !== undefined &&
            (obj.tlsMode = message.tlsMode ? TLSMode.toJSON(message.tlsMode) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OnPremisePostgres>, I>>(object: I): OnPremisePostgres {
        const message = { ...baseOnPremisePostgres } as OnPremisePostgres;
        message.port = object.port ?? 0;
        message.subnetId = object.subnetId ?? '';
        message.hosts = object.hosts?.map((e) => e) || [];
        message.tlsMode =
            object.tlsMode !== undefined && object.tlsMode !== null
                ? TLSMode.fromPartial(object.tlsMode)
                : undefined;
        return message;
    },
};

const basePostgresConnection: object = {};

export const PostgresConnection = {
    encode(message: PostgresConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mdbClusterId !== undefined) {
            writer.uint32(10).string(message.mdbClusterId);
        }
        if (message.onPremise !== undefined) {
            OnPremisePostgres.encode(message.onPremise, writer.uint32(18).fork()).ldelim();
        }
        if (message.connectionManagerConnection !== undefined) {
            ConnectionManagerConnection.encode(
                message.connectionManagerConnection,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PostgresConnection {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePostgresConnection } as PostgresConnection;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mdbClusterId = reader.string();
                    break;
                case 2:
                    message.onPremise = OnPremisePostgres.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.connectionManagerConnection = ConnectionManagerConnection.decode(
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

    fromJSON(object: any): PostgresConnection {
        const message = { ...basePostgresConnection } as PostgresConnection;
        message.mdbClusterId =
            object.mdbClusterId !== undefined && object.mdbClusterId !== null
                ? String(object.mdbClusterId)
                : undefined;
        message.onPremise =
            object.onPremise !== undefined && object.onPremise !== null
                ? OnPremisePostgres.fromJSON(object.onPremise)
                : undefined;
        message.connectionManagerConnection =
            object.connectionManagerConnection !== undefined &&
            object.connectionManagerConnection !== null
                ? ConnectionManagerConnection.fromJSON(object.connectionManagerConnection)
                : undefined;
        return message;
    },

    toJSON(message: PostgresConnection): unknown {
        const obj: any = {};
        message.mdbClusterId !== undefined && (obj.mdbClusterId = message.mdbClusterId);
        message.onPremise !== undefined &&
            (obj.onPremise = message.onPremise
                ? OnPremisePostgres.toJSON(message.onPremise)
                : undefined);
        message.connectionManagerConnection !== undefined &&
            (obj.connectionManagerConnection = message.connectionManagerConnection
                ? ConnectionManagerConnection.toJSON(message.connectionManagerConnection)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PostgresConnection>, I>>(
        object: I,
    ): PostgresConnection {
        const message = { ...basePostgresConnection } as PostgresConnection;
        message.mdbClusterId = object.mdbClusterId ?? undefined;
        message.onPremise =
            object.onPremise !== undefined && object.onPremise !== null
                ? OnPremisePostgres.fromPartial(object.onPremise)
                : undefined;
        message.connectionManagerConnection =
            object.connectionManagerConnection !== undefined &&
            object.connectionManagerConnection !== null
                ? ConnectionManagerConnection.fromPartial(object.connectionManagerConnection)
                : undefined;
        return message;
    },
};

const basePostgresSource: object = {
    database: '',
    user: '',
    includeTables: '',
    excludeTables: '',
    slotByteLagLimit: 0,
    serviceSchema: '',
    securityGroups: '',
};

export const PostgresSource = {
    encode(message: PostgresSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.connection !== undefined) {
            PostgresConnection.encode(message.connection, writer.uint32(10).fork()).ldelim();
        }
        if (message.database !== '') {
            writer.uint32(18).string(message.database);
        }
        if (message.user !== '') {
            writer.uint32(26).string(message.user);
        }
        if (message.password !== undefined) {
            Secret.encode(message.password, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.includeTables) {
            writer.uint32(42).string(v!);
        }
        for (const v of message.excludeTables) {
            writer.uint32(50).string(v!);
        }
        if (message.slotByteLagLimit !== 0) {
            writer.uint32(64).int64(message.slotByteLagLimit);
        }
        if (message.serviceSchema !== '') {
            writer.uint32(74).string(message.serviceSchema);
        }
        if (message.objectTransferSettings !== undefined) {
            PostgresObjectTransferSettings.encode(
                message.objectTransferSettings,
                writer.uint32(106).fork(),
            ).ldelim();
        }
        for (const v of message.securityGroups) {
            writer.uint32(114).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PostgresSource {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePostgresSource } as PostgresSource;
        message.includeTables = [];
        message.excludeTables = [];
        message.securityGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection = PostgresConnection.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.database = reader.string();
                    break;
                case 3:
                    message.user = reader.string();
                    break;
                case 4:
                    message.password = Secret.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.includeTables.push(reader.string());
                    break;
                case 6:
                    message.excludeTables.push(reader.string());
                    break;
                case 8:
                    message.slotByteLagLimit = longToNumber(reader.int64() as Long);
                    break;
                case 9:
                    message.serviceSchema = reader.string();
                    break;
                case 13:
                    message.objectTransferSettings = PostgresObjectTransferSettings.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 14:
                    message.securityGroups.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PostgresSource {
        const message = { ...basePostgresSource } as PostgresSource;
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? PostgresConnection.fromJSON(object.connection)
                : undefined;
        message.database =
            object.database !== undefined && object.database !== null
                ? String(object.database)
                : '';
        message.user = object.user !== undefined && object.user !== null ? String(object.user) : '';
        message.password =
            object.password !== undefined && object.password !== null
                ? Secret.fromJSON(object.password)
                : undefined;
        message.includeTables = (object.includeTables ?? []).map((e: any) => String(e));
        message.excludeTables = (object.excludeTables ?? []).map((e: any) => String(e));
        message.slotByteLagLimit =
            object.slotByteLagLimit !== undefined && object.slotByteLagLimit !== null
                ? Number(object.slotByteLagLimit)
                : 0;
        message.serviceSchema =
            object.serviceSchema !== undefined && object.serviceSchema !== null
                ? String(object.serviceSchema)
                : '';
        message.objectTransferSettings =
            object.objectTransferSettings !== undefined && object.objectTransferSettings !== null
                ? PostgresObjectTransferSettings.fromJSON(object.objectTransferSettings)
                : undefined;
        message.securityGroups = (object.securityGroups ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: PostgresSource): unknown {
        const obj: any = {};
        message.connection !== undefined &&
            (obj.connection = message.connection
                ? PostgresConnection.toJSON(message.connection)
                : undefined);
        message.database !== undefined && (obj.database = message.database);
        message.user !== undefined && (obj.user = message.user);
        message.password !== undefined &&
            (obj.password = message.password ? Secret.toJSON(message.password) : undefined);
        if (message.includeTables) {
            obj.includeTables = message.includeTables.map((e) => e);
        } else {
            obj.includeTables = [];
        }
        if (message.excludeTables) {
            obj.excludeTables = message.excludeTables.map((e) => e);
        } else {
            obj.excludeTables = [];
        }
        message.slotByteLagLimit !== undefined &&
            (obj.slotByteLagLimit = Math.round(message.slotByteLagLimit));
        message.serviceSchema !== undefined && (obj.serviceSchema = message.serviceSchema);
        message.objectTransferSettings !== undefined &&
            (obj.objectTransferSettings = message.objectTransferSettings
                ? PostgresObjectTransferSettings.toJSON(message.objectTransferSettings)
                : undefined);
        if (message.securityGroups) {
            obj.securityGroups = message.securityGroups.map((e) => e);
        } else {
            obj.securityGroups = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PostgresSource>, I>>(object: I): PostgresSource {
        const message = { ...basePostgresSource } as PostgresSource;
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? PostgresConnection.fromPartial(object.connection)
                : undefined;
        message.database = object.database ?? '';
        message.user = object.user ?? '';
        message.password =
            object.password !== undefined && object.password !== null
                ? Secret.fromPartial(object.password)
                : undefined;
        message.includeTables = object.includeTables?.map((e) => e) || [];
        message.excludeTables = object.excludeTables?.map((e) => e) || [];
        message.slotByteLagLimit = object.slotByteLagLimit ?? 0;
        message.serviceSchema = object.serviceSchema ?? '';
        message.objectTransferSettings =
            object.objectTransferSettings !== undefined && object.objectTransferSettings !== null
                ? PostgresObjectTransferSettings.fromPartial(object.objectTransferSettings)
                : undefined;
        message.securityGroups = object.securityGroups?.map((e) => e) || [];
        return message;
    },
};

const basePostgresTarget: object = { database: '', user: '', cleanupPolicy: 0, securityGroups: '' };

export const PostgresTarget = {
    encode(message: PostgresTarget, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.connection !== undefined) {
            PostgresConnection.encode(message.connection, writer.uint32(10).fork()).ldelim();
        }
        if (message.database !== '') {
            writer.uint32(18).string(message.database);
        }
        if (message.user !== '') {
            writer.uint32(26).string(message.user);
        }
        if (message.password !== undefined) {
            Secret.encode(message.password, writer.uint32(34).fork()).ldelim();
        }
        if (message.cleanupPolicy !== 0) {
            writer.uint32(40).int32(message.cleanupPolicy);
        }
        for (const v of message.securityGroups) {
            writer.uint32(58).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PostgresTarget {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePostgresTarget } as PostgresTarget;
        message.securityGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection = PostgresConnection.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.database = reader.string();
                    break;
                case 3:
                    message.user = reader.string();
                    break;
                case 4:
                    message.password = Secret.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.cleanupPolicy = reader.int32() as any;
                    break;
                case 7:
                    message.securityGroups.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PostgresTarget {
        const message = { ...basePostgresTarget } as PostgresTarget;
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? PostgresConnection.fromJSON(object.connection)
                : undefined;
        message.database =
            object.database !== undefined && object.database !== null
                ? String(object.database)
                : '';
        message.user = object.user !== undefined && object.user !== null ? String(object.user) : '';
        message.password =
            object.password !== undefined && object.password !== null
                ? Secret.fromJSON(object.password)
                : undefined;
        message.cleanupPolicy =
            object.cleanupPolicy !== undefined && object.cleanupPolicy !== null
                ? cleanupPolicyFromJSON(object.cleanupPolicy)
                : 0;
        message.securityGroups = (object.securityGroups ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: PostgresTarget): unknown {
        const obj: any = {};
        message.connection !== undefined &&
            (obj.connection = message.connection
                ? PostgresConnection.toJSON(message.connection)
                : undefined);
        message.database !== undefined && (obj.database = message.database);
        message.user !== undefined && (obj.user = message.user);
        message.password !== undefined &&
            (obj.password = message.password ? Secret.toJSON(message.password) : undefined);
        message.cleanupPolicy !== undefined &&
            (obj.cleanupPolicy = cleanupPolicyToJSON(message.cleanupPolicy));
        if (message.securityGroups) {
            obj.securityGroups = message.securityGroups.map((e) => e);
        } else {
            obj.securityGroups = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PostgresTarget>, I>>(object: I): PostgresTarget {
        const message = { ...basePostgresTarget } as PostgresTarget;
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? PostgresConnection.fromPartial(object.connection)
                : undefined;
        message.database = object.database ?? '';
        message.user = object.user ?? '';
        message.password =
            object.password !== undefined && object.password !== null
                ? Secret.fromPartial(object.password)
                : undefined;
        message.cleanupPolicy = object.cleanupPolicy ?? 0;
        message.securityGroups = object.securityGroups?.map((e) => e) || [];
        return message;
    },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

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

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
