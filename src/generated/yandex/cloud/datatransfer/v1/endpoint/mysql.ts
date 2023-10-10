/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  TLSMode,
  ObjectTransferStage,
  Secret,
  CleanupPolicy,
  objectTransferStageFromJSON,
  objectTransferStageToJSON,
  cleanupPolicyFromJSON,
  cleanupPolicyToJSON,
} from "../../../../../yandex/cloud/datatransfer/v1/endpoint/common";

export const protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";

export interface OnPremiseMysql {
  $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseMysql";
  hosts: string[];
  /** Database port */
  port: number;
  /** TLS settings for server connection. Disabled by default. */
  tlsMode?: TLSMode;
  /** Network interface for endpoint. If none will assume public ipv4 */
  subnetId: string;
}

export interface MysqlConnection {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlConnection";
  /** Managed Service for MySQL cluster ID */
  mdbClusterId: string | undefined;
  /** Connection options for on-premise MySQL */
  onPremise?: OnPremiseMysql | undefined;
}

export interface MysqlObjectTransferSettings {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlObjectTransferSettings";
  /**
   * Views
   *
   * CREATE VIEW ...
   */
  view: ObjectTransferStage;
  /**
   * Routines
   *
   * CREATE PROCEDURE ... ; CREATE FUNCTION ... ;
   */
  routine: ObjectTransferStage;
  /**
   * Triggers
   *
   * CREATE TRIGGER ...
   */
  trigger: ObjectTransferStage;
  tables: ObjectTransferStage;
}

export interface MysqlSource {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlSource";
  /** Database connection settings */
  connection?: MysqlConnection;
  /** Security groups */
  securityGroups: string[];
  /**
   * Database name
   *
   * You can leave it empty, then it will be possible to transfer tables from several
   * databases at the same time from this source.
   */
  database: string;
  /**
   * Database for service tables
   *
   * Default: data source database. Here created technical tables (__tm_keeper,
   * __tm_gtid_keeper).
   */
  serviceDatabase: string;
  /** User for database access. */
  user: string;
  /** Password for database access. */
  password?: Secret;
  includeTablesRegex: string[];
  excludeTablesRegex: string[];
  /**
   * Database timezone
   *
   * Is used for parsing timestamps for saving source timezones. Accepts values from
   * IANA timezone database. Default: local timezone.
   */
  timezone: string;
  /**
   * Schema migration
   *
   * Select database objects to be transferred during activation or deactivation.
   */
  objectTransferSettings?: MysqlObjectTransferSettings;
}

export interface MysqlTarget {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlTarget";
  /** Database connection settings */
  connection?: MysqlConnection;
  /** Security groups */
  securityGroups: string[];
  /**
   * Database name
   *
   * Allowed to leave it empty, then the tables will be created in databases with the
   * same names as on the source. If this field is empty, then you must fill below db
   * schema for service table.
   */
  database: string;
  /** User for database access. */
  user: string;
  /** Password for database access. */
  password?: Secret;
  /** Default: NO_AUTO_VALUE_ON_ZERO,NO_DIR_IN_CREATE,NO_ENGINE_SUBSTITUTION. */
  sqlMode: string;
  /**
   * Disable constraints checks
   *
   * Recommend to disable for increase replication speed, but if schema contain
   * cascading operations we don't recommend to disable. This option set
   * FOREIGN_KEY_CHECKS=0 and UNIQUE_CHECKS=0.
   */
  skipConstraintChecks: boolean;
  /**
   * Database timezone
   *
   * Is used for parsing timestamps for saving source timezones. Accepts values from
   * IANA timezone database. Default: local timezone.
   */
  timezone: string;
  /**
   * Cleanup policy
   *
   * Cleanup policy for activate, reactivate and reupload processes. Default is
   * DISABLED.
   */
  cleanupPolicy: CleanupPolicy;
  /**
   * Database schema for service table
   *
   * Default: db name. Here created technical tables (__tm_keeper, __tm_gtid_keeper).
   */
  serviceDatabase: string;
}

const baseOnPremiseMysql: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseMysql",
  hosts: "",
  port: 0,
  subnetId: "",
};

export const OnPremiseMysql = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseMysql" as const,

  encode(
    message: OnPremiseMysql,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): OnPremiseMysql {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOnPremiseMysql } as OnPremiseMysql;
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

  fromJSON(object: any): OnPremiseMysql {
    const message = { ...baseOnPremiseMysql } as OnPremiseMysql;
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

  toJSON(message: OnPremiseMysql): unknown {
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

  fromPartial<I extends Exact<DeepPartial<OnPremiseMysql>, I>>(
    object: I
  ): OnPremiseMysql {
    const message = { ...baseOnPremiseMysql } as OnPremiseMysql;
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

messageTypeRegistry.set(OnPremiseMysql.$type, OnPremiseMysql);

const baseMysqlConnection: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlConnection",
};

export const MysqlConnection = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlConnection" as const,

  encode(
    message: MysqlConnection,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mdbClusterId !== undefined) {
      writer.uint32(10).string(message.mdbClusterId);
    }
    if (message.onPremise !== undefined) {
      OnPremiseMysql.encode(
        message.onPremise,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MysqlConnection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMysqlConnection } as MysqlConnection;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mdbClusterId = reader.string();
          break;
        case 2:
          message.onPremise = OnPremiseMysql.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MysqlConnection {
    const message = { ...baseMysqlConnection } as MysqlConnection;
    message.mdbClusterId =
      object.mdbClusterId !== undefined && object.mdbClusterId !== null
        ? String(object.mdbClusterId)
        : undefined;
    message.onPremise =
      object.onPremise !== undefined && object.onPremise !== null
        ? OnPremiseMysql.fromJSON(object.onPremise)
        : undefined;
    return message;
  },

  toJSON(message: MysqlConnection): unknown {
    const obj: any = {};
    message.mdbClusterId !== undefined &&
      (obj.mdbClusterId = message.mdbClusterId);
    message.onPremise !== undefined &&
      (obj.onPremise = message.onPremise
        ? OnPremiseMysql.toJSON(message.onPremise)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MysqlConnection>, I>>(
    object: I
  ): MysqlConnection {
    const message = { ...baseMysqlConnection } as MysqlConnection;
    message.mdbClusterId = object.mdbClusterId ?? undefined;
    message.onPremise =
      object.onPremise !== undefined && object.onPremise !== null
        ? OnPremiseMysql.fromPartial(object.onPremise)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MysqlConnection.$type, MysqlConnection);

const baseMysqlObjectTransferSettings: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlObjectTransferSettings",
  view: 0,
  routine: 0,
  trigger: 0,
  tables: 0,
};

export const MysqlObjectTransferSettings = {
  $type:
    "yandex.cloud.datatransfer.v1.endpoint.MysqlObjectTransferSettings" as const,

  encode(
    message: MysqlObjectTransferSettings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.view !== 0) {
      writer.uint32(8).int32(message.view);
    }
    if (message.routine !== 0) {
      writer.uint32(16).int32(message.routine);
    }
    if (message.trigger !== 0) {
      writer.uint32(24).int32(message.trigger);
    }
    if (message.tables !== 0) {
      writer.uint32(32).int32(message.tables);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MysqlObjectTransferSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMysqlObjectTransferSettings,
    } as MysqlObjectTransferSettings;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.view = reader.int32() as any;
          break;
        case 2:
          message.routine = reader.int32() as any;
          break;
        case 3:
          message.trigger = reader.int32() as any;
          break;
        case 4:
          message.tables = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MysqlObjectTransferSettings {
    const message = {
      ...baseMysqlObjectTransferSettings,
    } as MysqlObjectTransferSettings;
    message.view =
      object.view !== undefined && object.view !== null
        ? objectTransferStageFromJSON(object.view)
        : 0;
    message.routine =
      object.routine !== undefined && object.routine !== null
        ? objectTransferStageFromJSON(object.routine)
        : 0;
    message.trigger =
      object.trigger !== undefined && object.trigger !== null
        ? objectTransferStageFromJSON(object.trigger)
        : 0;
    message.tables =
      object.tables !== undefined && object.tables !== null
        ? objectTransferStageFromJSON(object.tables)
        : 0;
    return message;
  },

  toJSON(message: MysqlObjectTransferSettings): unknown {
    const obj: any = {};
    message.view !== undefined &&
      (obj.view = objectTransferStageToJSON(message.view));
    message.routine !== undefined &&
      (obj.routine = objectTransferStageToJSON(message.routine));
    message.trigger !== undefined &&
      (obj.trigger = objectTransferStageToJSON(message.trigger));
    message.tables !== undefined &&
      (obj.tables = objectTransferStageToJSON(message.tables));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MysqlObjectTransferSettings>, I>>(
    object: I
  ): MysqlObjectTransferSettings {
    const message = {
      ...baseMysqlObjectTransferSettings,
    } as MysqlObjectTransferSettings;
    message.view = object.view ?? 0;
    message.routine = object.routine ?? 0;
    message.trigger = object.trigger ?? 0;
    message.tables = object.tables ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  MysqlObjectTransferSettings.$type,
  MysqlObjectTransferSettings
);

const baseMysqlSource: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlSource",
  securityGroups: "",
  database: "",
  serviceDatabase: "",
  user: "",
  includeTablesRegex: "",
  excludeTablesRegex: "",
  timezone: "",
};

export const MysqlSource = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlSource" as const,

  encode(
    message: MysqlSource,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connection !== undefined) {
      MysqlConnection.encode(
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
    if (message.serviceDatabase !== "") {
      writer.uint32(122).string(message.serviceDatabase);
    }
    if (message.user !== "") {
      writer.uint32(26).string(message.user);
    }
    if (message.password !== undefined) {
      Secret.encode(message.password, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.includeTablesRegex) {
      writer.uint32(98).string(v!);
    }
    for (const v of message.excludeTablesRegex) {
      writer.uint32(106).string(v!);
    }
    if (message.timezone !== "") {
      writer.uint32(66).string(message.timezone);
    }
    if (message.objectTransferSettings !== undefined) {
      MysqlObjectTransferSettings.encode(
        message.objectTransferSettings,
        writer.uint32(90).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MysqlSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMysqlSource } as MysqlSource;
    message.securityGroups = [];
    message.includeTablesRegex = [];
    message.excludeTablesRegex = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection = MysqlConnection.decode(reader, reader.uint32());
          break;
        case 14:
          message.securityGroups.push(reader.string());
          break;
        case 2:
          message.database = reader.string();
          break;
        case 15:
          message.serviceDatabase = reader.string();
          break;
        case 3:
          message.user = reader.string();
          break;
        case 4:
          message.password = Secret.decode(reader, reader.uint32());
          break;
        case 12:
          message.includeTablesRegex.push(reader.string());
          break;
        case 13:
          message.excludeTablesRegex.push(reader.string());
          break;
        case 8:
          message.timezone = reader.string();
          break;
        case 11:
          message.objectTransferSettings = MysqlObjectTransferSettings.decode(
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

  fromJSON(object: any): MysqlSource {
    const message = { ...baseMysqlSource } as MysqlSource;
    message.connection =
      object.connection !== undefined && object.connection !== null
        ? MysqlConnection.fromJSON(object.connection)
        : undefined;
    message.securityGroups = (object.securityGroups ?? []).map((e: any) =>
      String(e)
    );
    message.database =
      object.database !== undefined && object.database !== null
        ? String(object.database)
        : "";
    message.serviceDatabase =
      object.serviceDatabase !== undefined && object.serviceDatabase !== null
        ? String(object.serviceDatabase)
        : "";
    message.user =
      object.user !== undefined && object.user !== null
        ? String(object.user)
        : "";
    message.password =
      object.password !== undefined && object.password !== null
        ? Secret.fromJSON(object.password)
        : undefined;
    message.includeTablesRegex = (object.includeTablesRegex ?? []).map(
      (e: any) => String(e)
    );
    message.excludeTablesRegex = (object.excludeTablesRegex ?? []).map(
      (e: any) => String(e)
    );
    message.timezone =
      object.timezone !== undefined && object.timezone !== null
        ? String(object.timezone)
        : "";
    message.objectTransferSettings =
      object.objectTransferSettings !== undefined &&
      object.objectTransferSettings !== null
        ? MysqlObjectTransferSettings.fromJSON(object.objectTransferSettings)
        : undefined;
    return message;
  },

  toJSON(message: MysqlSource): unknown {
    const obj: any = {};
    message.connection !== undefined &&
      (obj.connection = message.connection
        ? MysqlConnection.toJSON(message.connection)
        : undefined);
    if (message.securityGroups) {
      obj.securityGroups = message.securityGroups.map((e) => e);
    } else {
      obj.securityGroups = [];
    }
    message.database !== undefined && (obj.database = message.database);
    message.serviceDatabase !== undefined &&
      (obj.serviceDatabase = message.serviceDatabase);
    message.user !== undefined && (obj.user = message.user);
    message.password !== undefined &&
      (obj.password = message.password
        ? Secret.toJSON(message.password)
        : undefined);
    if (message.includeTablesRegex) {
      obj.includeTablesRegex = message.includeTablesRegex.map((e) => e);
    } else {
      obj.includeTablesRegex = [];
    }
    if (message.excludeTablesRegex) {
      obj.excludeTablesRegex = message.excludeTablesRegex.map((e) => e);
    } else {
      obj.excludeTablesRegex = [];
    }
    message.timezone !== undefined && (obj.timezone = message.timezone);
    message.objectTransferSettings !== undefined &&
      (obj.objectTransferSettings = message.objectTransferSettings
        ? MysqlObjectTransferSettings.toJSON(message.objectTransferSettings)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MysqlSource>, I>>(
    object: I
  ): MysqlSource {
    const message = { ...baseMysqlSource } as MysqlSource;
    message.connection =
      object.connection !== undefined && object.connection !== null
        ? MysqlConnection.fromPartial(object.connection)
        : undefined;
    message.securityGroups = object.securityGroups?.map((e) => e) || [];
    message.database = object.database ?? "";
    message.serviceDatabase = object.serviceDatabase ?? "";
    message.user = object.user ?? "";
    message.password =
      object.password !== undefined && object.password !== null
        ? Secret.fromPartial(object.password)
        : undefined;
    message.includeTablesRegex = object.includeTablesRegex?.map((e) => e) || [];
    message.excludeTablesRegex = object.excludeTablesRegex?.map((e) => e) || [];
    message.timezone = object.timezone ?? "";
    message.objectTransferSettings =
      object.objectTransferSettings !== undefined &&
      object.objectTransferSettings !== null
        ? MysqlObjectTransferSettings.fromPartial(object.objectTransferSettings)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MysqlSource.$type, MysqlSource);

const baseMysqlTarget: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlTarget",
  securityGroups: "",
  database: "",
  user: "",
  sqlMode: "",
  skipConstraintChecks: false,
  timezone: "",
  cleanupPolicy: 0,
  serviceDatabase: "",
};

export const MysqlTarget = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlTarget" as const,

  encode(
    message: MysqlTarget,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connection !== undefined) {
      MysqlConnection.encode(
        message.connection,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.securityGroups) {
      writer.uint32(130).string(v!);
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
    if (message.sqlMode !== "") {
      writer.uint32(42).string(message.sqlMode);
    }
    if (message.skipConstraintChecks === true) {
      writer.uint32(48).bool(message.skipConstraintChecks);
    }
    if (message.timezone !== "") {
      writer.uint32(58).string(message.timezone);
    }
    if (message.cleanupPolicy !== 0) {
      writer.uint32(64).int32(message.cleanupPolicy);
    }
    if (message.serviceDatabase !== "") {
      writer.uint32(122).string(message.serviceDatabase);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MysqlTarget {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMysqlTarget } as MysqlTarget;
    message.securityGroups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection = MysqlConnection.decode(reader, reader.uint32());
          break;
        case 16:
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
          message.sqlMode = reader.string();
          break;
        case 6:
          message.skipConstraintChecks = reader.bool();
          break;
        case 7:
          message.timezone = reader.string();
          break;
        case 8:
          message.cleanupPolicy = reader.int32() as any;
          break;
        case 15:
          message.serviceDatabase = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MysqlTarget {
    const message = { ...baseMysqlTarget } as MysqlTarget;
    message.connection =
      object.connection !== undefined && object.connection !== null
        ? MysqlConnection.fromJSON(object.connection)
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
    message.sqlMode =
      object.sqlMode !== undefined && object.sqlMode !== null
        ? String(object.sqlMode)
        : "";
    message.skipConstraintChecks =
      object.skipConstraintChecks !== undefined &&
      object.skipConstraintChecks !== null
        ? Boolean(object.skipConstraintChecks)
        : false;
    message.timezone =
      object.timezone !== undefined && object.timezone !== null
        ? String(object.timezone)
        : "";
    message.cleanupPolicy =
      object.cleanupPolicy !== undefined && object.cleanupPolicy !== null
        ? cleanupPolicyFromJSON(object.cleanupPolicy)
        : 0;
    message.serviceDatabase =
      object.serviceDatabase !== undefined && object.serviceDatabase !== null
        ? String(object.serviceDatabase)
        : "";
    return message;
  },

  toJSON(message: MysqlTarget): unknown {
    const obj: any = {};
    message.connection !== undefined &&
      (obj.connection = message.connection
        ? MysqlConnection.toJSON(message.connection)
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
    message.sqlMode !== undefined && (obj.sqlMode = message.sqlMode);
    message.skipConstraintChecks !== undefined &&
      (obj.skipConstraintChecks = message.skipConstraintChecks);
    message.timezone !== undefined && (obj.timezone = message.timezone);
    message.cleanupPolicy !== undefined &&
      (obj.cleanupPolicy = cleanupPolicyToJSON(message.cleanupPolicy));
    message.serviceDatabase !== undefined &&
      (obj.serviceDatabase = message.serviceDatabase);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MysqlTarget>, I>>(
    object: I
  ): MysqlTarget {
    const message = { ...baseMysqlTarget } as MysqlTarget;
    message.connection =
      object.connection !== undefined && object.connection !== null
        ? MysqlConnection.fromPartial(object.connection)
        : undefined;
    message.securityGroups = object.securityGroups?.map((e) => e) || [];
    message.database = object.database ?? "";
    message.user = object.user ?? "";
    message.password =
      object.password !== undefined && object.password !== null
        ? Secret.fromPartial(object.password)
        : undefined;
    message.sqlMode = object.sqlMode ?? "";
    message.skipConstraintChecks = object.skipConstraintChecks ?? false;
    message.timezone = object.timezone ?? "";
    message.cleanupPolicy = object.cleanupPolicy ?? 0;
    message.serviceDatabase = object.serviceDatabase ?? "";
    return message;
  },
};

messageTypeRegistry.set(MysqlTarget.$type, MysqlTarget);

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
