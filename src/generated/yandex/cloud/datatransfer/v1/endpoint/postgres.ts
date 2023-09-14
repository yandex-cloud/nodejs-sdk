/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  ObjectTransferStage,
  TLSMode,
  Secret,
  CleanupPolicy,
  objectTransferStageFromJSON,
  objectTransferStageToJSON,
  cleanupPolicyFromJSON,
  cleanupPolicyToJSON,
} from "../../../../../yandex/cloud/datatransfer/v1/endpoint/common";

export const protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";

export interface PostgresObjectTransferSettings {
  $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresObjectTransferSettings";
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
  /**  */
  sequenceSet: ObjectTransferStage;
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
   * Materialized views
   *
   * CREATE MATERIALIZED VIEW ...
   */
  materializedView: ObjectTransferStage;
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
}

export interface OnPremisePostgres {
  $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremisePostgres";
  hosts: string[];
  /** Will be used if the cluster ID is not specified. */
  port: number;
  /** TLS settings for server connection. Disabled by default. */
  tlsMode?: TLSMode;
  /** Network interface for endpoint. If none will assume public ipv4 */
  subnetId: string;
}

export interface PostgresConnection {
  $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresConnection";
  /** Managed Service for PostgreSQL cluster ID */
  mdbClusterId: string | undefined;
  /** Connection options for on-premise PostgreSQL */
  onPremise?: OnPremisePostgres | undefined;
}

export interface PostgresSource {
  $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresSource";
  /** Database connection settings */
  connection?: PostgresConnection;
  /** Security groups */
  securityGroups: string[];
  /** Database name */
  database: string;
  /** User for database access. */
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
}

export interface PostgresTarget {
  $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresTarget";
  /** Database connection settings */
  connection?: PostgresConnection;
  /** Security groups */
  securityGroups: string[];
  /** Database name */
  database: string;
  /** User for database access. */
  user: string;
  /** Password for database access. */
  password?: Secret;
  /**
   * Cleanup policy for activate, reactivate and reupload processes. Default is
   * truncate.
   */
  cleanupPolicy: CleanupPolicy;
}

const basePostgresObjectTransferSettings: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresObjectTransferSettings",
  sequence: 0,
  sequenceOwnedBy: 0,
  sequenceSet: 0,
  table: 0,
  primaryKey: 0,
  fkConstraint: 0,
  defaultValues: 0,
  constraint: 0,
  index: 0,
  view: 0,
  materializedView: 0,
  function: 0,
  trigger: 0,
  type: 0,
  rule: 0,
  collation: 0,
  policy: 0,
  cast: 0,
};

export const PostgresObjectTransferSettings = {
  $type:
    "yandex.cloud.datatransfer.v1.endpoint.PostgresObjectTransferSettings" as const,

  encode(
    message: PostgresObjectTransferSettings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sequence !== 0) {
      writer.uint32(8).int32(message.sequence);
    }
    if (message.sequenceOwnedBy !== 0) {
      writer.uint32(16).int32(message.sequenceOwnedBy);
    }
    if (message.sequenceSet !== 0) {
      writer.uint32(144).int32(message.sequenceSet);
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
    if (message.materializedView !== 0) {
      writer.uint32(136).int32(message.materializedView);
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
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PostgresObjectTransferSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePostgresObjectTransferSettings,
    } as PostgresObjectTransferSettings;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.int32() as any;
          break;
        case 2:
          message.sequenceOwnedBy = reader.int32() as any;
          break;
        case 18:
          message.sequenceSet = reader.int32() as any;
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
        case 17:
          message.materializedView = reader.int32() as any;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PostgresObjectTransferSettings {
    const message = {
      ...basePostgresObjectTransferSettings,
    } as PostgresObjectTransferSettings;
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? objectTransferStageFromJSON(object.sequence)
        : 0;
    message.sequenceOwnedBy =
      object.sequenceOwnedBy !== undefined && object.sequenceOwnedBy !== null
        ? objectTransferStageFromJSON(object.sequenceOwnedBy)
        : 0;
    message.sequenceSet =
      object.sequenceSet !== undefined && object.sequenceSet !== null
        ? objectTransferStageFromJSON(object.sequenceSet)
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
    message.materializedView =
      object.materializedView !== undefined && object.materializedView !== null
        ? objectTransferStageFromJSON(object.materializedView)
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
    return message;
  },

  toJSON(message: PostgresObjectTransferSettings): unknown {
    const obj: any = {};
    message.sequence !== undefined &&
      (obj.sequence = objectTransferStageToJSON(message.sequence));
    message.sequenceOwnedBy !== undefined &&
      (obj.sequenceOwnedBy = objectTransferStageToJSON(
        message.sequenceOwnedBy
      ));
    message.sequenceSet !== undefined &&
      (obj.sequenceSet = objectTransferStageToJSON(message.sequenceSet));
    message.table !== undefined &&
      (obj.table = objectTransferStageToJSON(message.table));
    message.primaryKey !== undefined &&
      (obj.primaryKey = objectTransferStageToJSON(message.primaryKey));
    message.fkConstraint !== undefined &&
      (obj.fkConstraint = objectTransferStageToJSON(message.fkConstraint));
    message.defaultValues !== undefined &&
      (obj.defaultValues = objectTransferStageToJSON(message.defaultValues));
    message.constraint !== undefined &&
      (obj.constraint = objectTransferStageToJSON(message.constraint));
    message.index !== undefined &&
      (obj.index = objectTransferStageToJSON(message.index));
    message.view !== undefined &&
      (obj.view = objectTransferStageToJSON(message.view));
    message.materializedView !== undefined &&
      (obj.materializedView = objectTransferStageToJSON(
        message.materializedView
      ));
    message.function !== undefined &&
      (obj.function = objectTransferStageToJSON(message.function));
    message.trigger !== undefined &&
      (obj.trigger = objectTransferStageToJSON(message.trigger));
    message.type !== undefined &&
      (obj.type = objectTransferStageToJSON(message.type));
    message.rule !== undefined &&
      (obj.rule = objectTransferStageToJSON(message.rule));
    message.collation !== undefined &&
      (obj.collation = objectTransferStageToJSON(message.collation));
    message.policy !== undefined &&
      (obj.policy = objectTransferStageToJSON(message.policy));
    message.cast !== undefined &&
      (obj.cast = objectTransferStageToJSON(message.cast));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PostgresObjectTransferSettings>, I>>(
    object: I
  ): PostgresObjectTransferSettings {
    const message = {
      ...basePostgresObjectTransferSettings,
    } as PostgresObjectTransferSettings;
    message.sequence = object.sequence ?? 0;
    message.sequenceOwnedBy = object.sequenceOwnedBy ?? 0;
    message.sequenceSet = object.sequenceSet ?? 0;
    message.table = object.table ?? 0;
    message.primaryKey = object.primaryKey ?? 0;
    message.fkConstraint = object.fkConstraint ?? 0;
    message.defaultValues = object.defaultValues ?? 0;
    message.constraint = object.constraint ?? 0;
    message.index = object.index ?? 0;
    message.view = object.view ?? 0;
    message.materializedView = object.materializedView ?? 0;
    message.function = object.function ?? 0;
    message.trigger = object.trigger ?? 0;
    message.type = object.type ?? 0;
    message.rule = object.rule ?? 0;
    message.collation = object.collation ?? 0;
    message.policy = object.policy ?? 0;
    message.cast = object.cast ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  PostgresObjectTransferSettings.$type,
  PostgresObjectTransferSettings
);

const baseOnPremisePostgres: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremisePostgres",
  hosts: "",
  port: 0,
  subnetId: "",
};

export const OnPremisePostgres = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremisePostgres" as const,

  encode(
    message: OnPremisePostgres,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.hosts) {
      writer.uint32(42).string(v!);
    }
    if (message.port !== 0) {
      writer.uint32(16).int64(message.port);
    }
    if (message.tlsMode !== undefined) {
      TLSMode.encode(message.tlsMode, writer.uint32(50).fork()).ldelim();
    }
    if (message.subnetId !== "") {
      writer.uint32(34).string(message.subnetId);
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
        case 5:
          message.hosts.push(reader.string());
          break;
        case 2:
          message.port = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.tlsMode = TLSMode.decode(reader, reader.uint32());
          break;
        case 4:
          message.subnetId = reader.string();
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
    message.hosts = (object.hosts ?? []).map((e: any) => String(e));
    message.port =
      object.port !== undefined && object.port !== null
        ? Number(object.port)
        : 0;
    message.tlsMode =
      object.tlsMode !== undefined && object.tlsMode !== null
        ? TLSMode.fromJSON(object.tlsMode)
        : undefined;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    return message;
  },

  toJSON(message: OnPremisePostgres): unknown {
    const obj: any = {};
    if (message.hosts) {
      obj.hosts = message.hosts.map((e) => e);
    } else {
      obj.hosts = [];
    }
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.tlsMode !== undefined &&
      (obj.tlsMode = message.tlsMode
        ? TLSMode.toJSON(message.tlsMode)
        : undefined);
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OnPremisePostgres>, I>>(
    object: I
  ): OnPremisePostgres {
    const message = { ...baseOnPremisePostgres } as OnPremisePostgres;
    message.hosts = object.hosts?.map((e) => e) || [];
    message.port = object.port ?? 0;
    message.tlsMode =
      object.tlsMode !== undefined && object.tlsMode !== null
        ? TLSMode.fromPartial(object.tlsMode)
        : undefined;
    message.subnetId = object.subnetId ?? "";
    return message;
  },
};

messageTypeRegistry.set(OnPremisePostgres.$type, OnPremisePostgres);

const basePostgresConnection: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresConnection",
};

export const PostgresConnection = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresConnection" as const,

  encode(
    message: PostgresConnection,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mdbClusterId !== undefined) {
      writer.uint32(10).string(message.mdbClusterId);
    }
    if (message.onPremise !== undefined) {
      OnPremisePostgres.encode(
        message.onPremise,
        writer.uint32(18).fork()
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
    return message;
  },

  toJSON(message: PostgresConnection): unknown {
    const obj: any = {};
    message.mdbClusterId !== undefined &&
      (obj.mdbClusterId = message.mdbClusterId);
    message.onPremise !== undefined &&
      (obj.onPremise = message.onPremise
        ? OnPremisePostgres.toJSON(message.onPremise)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PostgresConnection>, I>>(
    object: I
  ): PostgresConnection {
    const message = { ...basePostgresConnection } as PostgresConnection;
    message.mdbClusterId = object.mdbClusterId ?? undefined;
    message.onPremise =
      object.onPremise !== undefined && object.onPremise !== null
        ? OnPremisePostgres.fromPartial(object.onPremise)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(PostgresConnection.$type, PostgresConnection);

const basePostgresSource: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresSource",
  securityGroups: "",
  database: "",
  user: "",
  includeTables: "",
  excludeTables: "",
  slotByteLagLimit: 0,
  serviceSchema: "",
};

export const PostgresSource = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresSource" as const,

  encode(
    message: PostgresSource,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connection !== undefined) {
      PostgresConnection.encode(
        message.connection,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.securityGroups) {
      writer.uint32(114).string(v!);
    }
    if (message.database !== "") {
      writer.uint32(18).string(message.database);
    }
    if (message.user !== "") {
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
    if (message.serviceSchema !== "") {
      writer.uint32(74).string(message.serviceSchema);
    }
    if (message.objectTransferSettings !== undefined) {
      PostgresObjectTransferSettings.encode(
        message.objectTransferSettings,
        writer.uint32(106).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostgresSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePostgresSource } as PostgresSource;
    message.securityGroups = [];
    message.includeTables = [];
    message.excludeTables = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection = PostgresConnection.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.securityGroups.push(reader.string());
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
          message.objectTransferSettings =
            PostgresObjectTransferSettings.decode(reader, reader.uint32());
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
    message.securityGroups = (object.securityGroups ?? []).map((e: any) =>
      String(e)
    );
    message.database =
      object.database !== undefined && object.database !== null
        ? String(object.database)
        : "";
    message.user =
      object.user !== undefined && object.user !== null
        ? String(object.user)
        : "";
    message.password =
      object.password !== undefined && object.password !== null
        ? Secret.fromJSON(object.password)
        : undefined;
    message.includeTables = (object.includeTables ?? []).map((e: any) =>
      String(e)
    );
    message.excludeTables = (object.excludeTables ?? []).map((e: any) =>
      String(e)
    );
    message.slotByteLagLimit =
      object.slotByteLagLimit !== undefined && object.slotByteLagLimit !== null
        ? Number(object.slotByteLagLimit)
        : 0;
    message.serviceSchema =
      object.serviceSchema !== undefined && object.serviceSchema !== null
        ? String(object.serviceSchema)
        : "";
    message.objectTransferSettings =
      object.objectTransferSettings !== undefined &&
      object.objectTransferSettings !== null
        ? PostgresObjectTransferSettings.fromJSON(object.objectTransferSettings)
        : undefined;
    return message;
  },

  toJSON(message: PostgresSource): unknown {
    const obj: any = {};
    message.connection !== undefined &&
      (obj.connection = message.connection
        ? PostgresConnection.toJSON(message.connection)
        : undefined);
    if (message.securityGroups) {
      obj.securityGroups = message.securityGroups.map((e) => e);
    } else {
      obj.securityGroups = [];
    }
    message.database !== undefined && (obj.database = message.database);
    message.user !== undefined && (obj.user = message.user);
    message.password !== undefined &&
      (obj.password = message.password
        ? Secret.toJSON(message.password)
        : undefined);
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
    message.serviceSchema !== undefined &&
      (obj.serviceSchema = message.serviceSchema);
    message.objectTransferSettings !== undefined &&
      (obj.objectTransferSettings = message.objectTransferSettings
        ? PostgresObjectTransferSettings.toJSON(message.objectTransferSettings)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PostgresSource>, I>>(
    object: I
  ): PostgresSource {
    const message = { ...basePostgresSource } as PostgresSource;
    message.connection =
      object.connection !== undefined && object.connection !== null
        ? PostgresConnection.fromPartial(object.connection)
        : undefined;
    message.securityGroups = object.securityGroups?.map((e) => e) || [];
    message.database = object.database ?? "";
    message.user = object.user ?? "";
    message.password =
      object.password !== undefined && object.password !== null
        ? Secret.fromPartial(object.password)
        : undefined;
    message.includeTables = object.includeTables?.map((e) => e) || [];
    message.excludeTables = object.excludeTables?.map((e) => e) || [];
    message.slotByteLagLimit = object.slotByteLagLimit ?? 0;
    message.serviceSchema = object.serviceSchema ?? "";
    message.objectTransferSettings =
      object.objectTransferSettings !== undefined &&
      object.objectTransferSettings !== null
        ? PostgresObjectTransferSettings.fromPartial(
            object.objectTransferSettings
          )
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(PostgresSource.$type, PostgresSource);

const basePostgresTarget: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresTarget",
  securityGroups: "",
  database: "",
  user: "",
  cleanupPolicy: 0,
};

export const PostgresTarget = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresTarget" as const,

  encode(
    message: PostgresTarget,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connection !== undefined) {
      PostgresConnection.encode(
        message.connection,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.securityGroups) {
      writer.uint32(58).string(v!);
    }
    if (message.database !== "") {
      writer.uint32(18).string(message.database);
    }
    if (message.user !== "") {
      writer.uint32(26).string(message.user);
    }
    if (message.password !== undefined) {
      Secret.encode(message.password, writer.uint32(34).fork()).ldelim();
    }
    if (message.cleanupPolicy !== 0) {
      writer.uint32(40).int32(message.cleanupPolicy);
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
          message.connection = PostgresConnection.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.securityGroups.push(reader.string());
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
    message.securityGroups = (object.securityGroups ?? []).map((e: any) =>
      String(e)
    );
    message.database =
      object.database !== undefined && object.database !== null
        ? String(object.database)
        : "";
    message.user =
      object.user !== undefined && object.user !== null
        ? String(object.user)
        : "";
    message.password =
      object.password !== undefined && object.password !== null
        ? Secret.fromJSON(object.password)
        : undefined;
    message.cleanupPolicy =
      object.cleanupPolicy !== undefined && object.cleanupPolicy !== null
        ? cleanupPolicyFromJSON(object.cleanupPolicy)
        : 0;
    return message;
  },

  toJSON(message: PostgresTarget): unknown {
    const obj: any = {};
    message.connection !== undefined &&
      (obj.connection = message.connection
        ? PostgresConnection.toJSON(message.connection)
        : undefined);
    if (message.securityGroups) {
      obj.securityGroups = message.securityGroups.map((e) => e);
    } else {
      obj.securityGroups = [];
    }
    message.database !== undefined && (obj.database = message.database);
    message.user !== undefined && (obj.user = message.user);
    message.password !== undefined &&
      (obj.password = message.password
        ? Secret.toJSON(message.password)
        : undefined);
    message.cleanupPolicy !== undefined &&
      (obj.cleanupPolicy = cleanupPolicyToJSON(message.cleanupPolicy));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PostgresTarget>, I>>(
    object: I
  ): PostgresTarget {
    const message = { ...basePostgresTarget } as PostgresTarget;
    message.connection =
      object.connection !== undefined && object.connection !== null
        ? PostgresConnection.fromPartial(object.connection)
        : undefined;
    message.securityGroups = object.securityGroups?.map((e) => e) || [];
    message.database = object.database ?? "";
    message.user = object.user ?? "";
    message.password =
      object.password !== undefined && object.password !== null
        ? Secret.fromPartial(object.password)
        : undefined;
    message.cleanupPolicy = object.cleanupPolicy ?? 0;
    return message;
  },
};

messageTypeRegistry.set(PostgresTarget.$type, PostgresTarget);

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
