/* eslint-disable */
import { messageTypeRegistry } from "../../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  Int64Value,
  BoolValue,
} from "../../../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.mdb.sqlserver.v1.config";

/**
 * SQL Server 2019 Standard edition supported configuration options are listed here.
 *
 * Detailed description for each set of options is available in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/server-configuration-options-sql-server?view=sql-server-2019).
 *
 * Any options that are not listed here are not supported.
 */
export interface SQLServerConfig2019std {
  $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfig2019std";
  /**
   * Limits the number of processors to use in parallel plan execution per task.
   *
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-max-degree-of-parallelism-server-configuration-option?view=sql-server-2019).
   */
  maxDegreeOfParallelism?: number;
  /**
   * Specifies the threshold at which SQL Server creates and runs parallel plans for queries.
   *
   * SQL Server creates and runs a parallel plan for a query only when the estimated cost to run a serial plan for the same query is higher than the value of the option.
   *
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-cost-threshold-for-parallelism-server-configuration-option?view=sql-server-2019).
   */
  costThresholdForParallelism?: number;
  /**
   * Describes how to configure login auditing to monitor SQL Server Database Engine login activity.
   *
   * Possible values:
   * * 0 - do not log login attempts;
   * * 1 - log only failed login attempts;
   * * 2 - log only successful login attempts (not recommended);
   * * 3 - log all login attempts (not recommended).
   *
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/ssms/configure-login-auditing-sql-server-management-studio?view=sql-server-2019).
   */
  auditLevel?: number;
  /**
   * Manages the fill factor server configuration option.
   *
   * When an index is created or rebuilt, the fill factor determines the percentage of space on each index leaf-level page to be filled with data, reserving the rest as free space for future growth.
   *
   * Values 0 and 100 mean full page usage (no space reserved).
   *
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-fill-factor-server-configuration-option?view=sql-server-2019).
   */
  fillFactorPercent?: number;
  /**
   * Determines whether plans should be cached only after second execution.
   *
   * Allows to avoid SQL cache bloat because of single-use plans.
   *
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/optimize-for-ad-hoc-workloads-server-configuration-option?view=sql-server-2019).
   */
  optimizeForAdHocWorkloads?: boolean;
}

export interface SQLServerConfigSet2019std {
  $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfigSet2019std";
  /** Effective settings for an SQL Server 2019 cluster (a combination of settings defined in [user_config] and [default_config]). */
  effectiveConfig?: SQLServerConfig2019std;
  /** User-defined settings for an SQL Server 2019 cluster. */
  userConfig?: SQLServerConfig2019std;
  /** Default configuration for an SQL Server 2019 cluster. */
  defaultConfig?: SQLServerConfig2019std;
}

/**
 * SQL Server 2019 Enterprise edition supported configuration options are listed here.
 *
 * Detailed description for each set of options is available in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/server-configuration-options-sql-server?view=sql-server-2019).
 *
 * Any options that are not listed here are not supported.
 */
export interface SQLServerConfig2019ent {
  $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfig2019ent";
  /**
   * Limits the number of processors to use in parallel plan execution per task.
   *
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-max-degree-of-parallelism-server-configuration-option?view=sql-server-2019).
   */
  maxDegreeOfParallelism?: number;
  /**
   * Specifies the threshold at which SQL Server creates and runs parallel plans for queries.
   *
   * SQL Server creates and runs a parallel plan for a query only when the estimated cost to run a serial plan for the same query is higher than the value of the option.
   *
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-cost-threshold-for-parallelism-server-configuration-option?view=sql-server-2019).
   */
  costThresholdForParallelism?: number;
  /**
   * Describes how to configure login auditing to monitor SQL Server Database Engine login activity.
   *
   * Possible values:
   * * 0 - do not log login attempts;
   * * 1 - log only failed login attempts;
   * * 2 - log only successful login attempts (not recommended);
   * * 3 - log all login attempts (not recommended).
   *
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/ssms/configure-login-auditing-sql-server-management-studio?view=sql-server-2019).
   */
  auditLevel?: number;
  /**
   * Manages the fill factor server configuration option.
   * When an index is created or rebuilt, the fill factor determines the percentage of space on each index leaf-level page to be filled with data, reserving the rest as free space for future growth.
   *
   * Values 0 and 100 mean full page usage (no space reserved).
   *
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-fill-factor-server-configuration-option?view=sql-server-2019).
   */
  fillFactorPercent?: number;
  /**
   * Determines whether plans should be cached only after second execution.
   *
   * Allows to avoid SQL cache bloat because of single-use plans.
   *
   * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/optimize-for-ad-hoc-workloads-server-configuration-option?view=sql-server-2019).
   */
  optimizeForAdHocWorkloads?: boolean;
}

export interface SQLServerConfigSet2019ent {
  $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfigSet2019ent";
  /** Effective settings for an SQL Server 2019 cluster (a combination of settings defined in [user_config] and [default_config]). */
  effectiveConfig?: SQLServerConfig2019ent;
  /** User-defined settings for an SQL Server 2019 cluster. */
  userConfig?: SQLServerConfig2019ent;
  /** Default configuration for an SQL Server 2019 cluster. */
  defaultConfig?: SQLServerConfig2019ent;
}

const baseSQLServerConfig2019std: object = {
  $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfig2019std",
};

export const SQLServerConfig2019std = {
  $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfig2019std" as const,

  encode(
    message: SQLServerConfig2019std,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maxDegreeOfParallelism !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxDegreeOfParallelism!,
        },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.costThresholdForParallelism !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.costThresholdForParallelism!,
        },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.auditLevel !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.auditLevel! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.fillFactorPercent !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.fillFactorPercent!,
        },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.optimizeForAdHocWorkloads !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.optimizeForAdHocWorkloads!,
        },
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SQLServerConfig2019std {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSQLServerConfig2019std } as SQLServerConfig2019std;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxDegreeOfParallelism = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 2:
          message.costThresholdForParallelism = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.auditLevel = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 4:
          message.fillFactorPercent = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 5:
          message.optimizeForAdHocWorkloads = BoolValue.decode(
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

  fromJSON(object: any): SQLServerConfig2019std {
    const message = { ...baseSQLServerConfig2019std } as SQLServerConfig2019std;
    message.maxDegreeOfParallelism =
      object.maxDegreeOfParallelism !== undefined &&
      object.maxDegreeOfParallelism !== null
        ? Number(object.maxDegreeOfParallelism)
        : undefined;
    message.costThresholdForParallelism =
      object.costThresholdForParallelism !== undefined &&
      object.costThresholdForParallelism !== null
        ? Number(object.costThresholdForParallelism)
        : undefined;
    message.auditLevel =
      object.auditLevel !== undefined && object.auditLevel !== null
        ? Number(object.auditLevel)
        : undefined;
    message.fillFactorPercent =
      object.fillFactorPercent !== undefined &&
      object.fillFactorPercent !== null
        ? Number(object.fillFactorPercent)
        : undefined;
    message.optimizeForAdHocWorkloads =
      object.optimizeForAdHocWorkloads !== undefined &&
      object.optimizeForAdHocWorkloads !== null
        ? Boolean(object.optimizeForAdHocWorkloads)
        : undefined;
    return message;
  },

  toJSON(message: SQLServerConfig2019std): unknown {
    const obj: any = {};
    message.maxDegreeOfParallelism !== undefined &&
      (obj.maxDegreeOfParallelism = message.maxDegreeOfParallelism);
    message.costThresholdForParallelism !== undefined &&
      (obj.costThresholdForParallelism = message.costThresholdForParallelism);
    message.auditLevel !== undefined && (obj.auditLevel = message.auditLevel);
    message.fillFactorPercent !== undefined &&
      (obj.fillFactorPercent = message.fillFactorPercent);
    message.optimizeForAdHocWorkloads !== undefined &&
      (obj.optimizeForAdHocWorkloads = message.optimizeForAdHocWorkloads);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SQLServerConfig2019std>, I>>(
    object: I
  ): SQLServerConfig2019std {
    const message = { ...baseSQLServerConfig2019std } as SQLServerConfig2019std;
    message.maxDegreeOfParallelism = object.maxDegreeOfParallelism ?? undefined;
    message.costThresholdForParallelism =
      object.costThresholdForParallelism ?? undefined;
    message.auditLevel = object.auditLevel ?? undefined;
    message.fillFactorPercent = object.fillFactorPercent ?? undefined;
    message.optimizeForAdHocWorkloads =
      object.optimizeForAdHocWorkloads ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(SQLServerConfig2019std.$type, SQLServerConfig2019std);

const baseSQLServerConfigSet2019std: object = {
  $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfigSet2019std",
};

export const SQLServerConfigSet2019std = {
  $type:
    "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfigSet2019std" as const,

  encode(
    message: SQLServerConfigSet2019std,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      SQLServerConfig2019std.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      SQLServerConfig2019std.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      SQLServerConfig2019std.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SQLServerConfigSet2019std {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSQLServerConfigSet2019std,
    } as SQLServerConfigSet2019std;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = SQLServerConfig2019std.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = SQLServerConfig2019std.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.defaultConfig = SQLServerConfig2019std.decode(
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

  fromJSON(object: any): SQLServerConfigSet2019std {
    const message = {
      ...baseSQLServerConfigSet2019std,
    } as SQLServerConfigSet2019std;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? SQLServerConfig2019std.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? SQLServerConfig2019std.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? SQLServerConfig2019std.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: SQLServerConfigSet2019std): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? SQLServerConfig2019std.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? SQLServerConfig2019std.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? SQLServerConfig2019std.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SQLServerConfigSet2019std>, I>>(
    object: I
  ): SQLServerConfigSet2019std {
    const message = {
      ...baseSQLServerConfigSet2019std,
    } as SQLServerConfigSet2019std;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? SQLServerConfig2019std.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? SQLServerConfig2019std.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? SQLServerConfig2019std.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  SQLServerConfigSet2019std.$type,
  SQLServerConfigSet2019std
);

const baseSQLServerConfig2019ent: object = {
  $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfig2019ent",
};

export const SQLServerConfig2019ent = {
  $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfig2019ent" as const,

  encode(
    message: SQLServerConfig2019ent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maxDegreeOfParallelism !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxDegreeOfParallelism!,
        },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.costThresholdForParallelism !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.costThresholdForParallelism!,
        },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.auditLevel !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.auditLevel! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.fillFactorPercent !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.fillFactorPercent!,
        },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.optimizeForAdHocWorkloads !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.optimizeForAdHocWorkloads!,
        },
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SQLServerConfig2019ent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSQLServerConfig2019ent } as SQLServerConfig2019ent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxDegreeOfParallelism = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 2:
          message.costThresholdForParallelism = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.auditLevel = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 4:
          message.fillFactorPercent = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 5:
          message.optimizeForAdHocWorkloads = BoolValue.decode(
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

  fromJSON(object: any): SQLServerConfig2019ent {
    const message = { ...baseSQLServerConfig2019ent } as SQLServerConfig2019ent;
    message.maxDegreeOfParallelism =
      object.maxDegreeOfParallelism !== undefined &&
      object.maxDegreeOfParallelism !== null
        ? Number(object.maxDegreeOfParallelism)
        : undefined;
    message.costThresholdForParallelism =
      object.costThresholdForParallelism !== undefined &&
      object.costThresholdForParallelism !== null
        ? Number(object.costThresholdForParallelism)
        : undefined;
    message.auditLevel =
      object.auditLevel !== undefined && object.auditLevel !== null
        ? Number(object.auditLevel)
        : undefined;
    message.fillFactorPercent =
      object.fillFactorPercent !== undefined &&
      object.fillFactorPercent !== null
        ? Number(object.fillFactorPercent)
        : undefined;
    message.optimizeForAdHocWorkloads =
      object.optimizeForAdHocWorkloads !== undefined &&
      object.optimizeForAdHocWorkloads !== null
        ? Boolean(object.optimizeForAdHocWorkloads)
        : undefined;
    return message;
  },

  toJSON(message: SQLServerConfig2019ent): unknown {
    const obj: any = {};
    message.maxDegreeOfParallelism !== undefined &&
      (obj.maxDegreeOfParallelism = message.maxDegreeOfParallelism);
    message.costThresholdForParallelism !== undefined &&
      (obj.costThresholdForParallelism = message.costThresholdForParallelism);
    message.auditLevel !== undefined && (obj.auditLevel = message.auditLevel);
    message.fillFactorPercent !== undefined &&
      (obj.fillFactorPercent = message.fillFactorPercent);
    message.optimizeForAdHocWorkloads !== undefined &&
      (obj.optimizeForAdHocWorkloads = message.optimizeForAdHocWorkloads);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SQLServerConfig2019ent>, I>>(
    object: I
  ): SQLServerConfig2019ent {
    const message = { ...baseSQLServerConfig2019ent } as SQLServerConfig2019ent;
    message.maxDegreeOfParallelism = object.maxDegreeOfParallelism ?? undefined;
    message.costThresholdForParallelism =
      object.costThresholdForParallelism ?? undefined;
    message.auditLevel = object.auditLevel ?? undefined;
    message.fillFactorPercent = object.fillFactorPercent ?? undefined;
    message.optimizeForAdHocWorkloads =
      object.optimizeForAdHocWorkloads ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(SQLServerConfig2019ent.$type, SQLServerConfig2019ent);

const baseSQLServerConfigSet2019ent: object = {
  $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfigSet2019ent",
};

export const SQLServerConfigSet2019ent = {
  $type:
    "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfigSet2019ent" as const,

  encode(
    message: SQLServerConfigSet2019ent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      SQLServerConfig2019ent.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      SQLServerConfig2019ent.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      SQLServerConfig2019ent.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SQLServerConfigSet2019ent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSQLServerConfigSet2019ent,
    } as SQLServerConfigSet2019ent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = SQLServerConfig2019ent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = SQLServerConfig2019ent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.defaultConfig = SQLServerConfig2019ent.decode(
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

  fromJSON(object: any): SQLServerConfigSet2019ent {
    const message = {
      ...baseSQLServerConfigSet2019ent,
    } as SQLServerConfigSet2019ent;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? SQLServerConfig2019ent.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? SQLServerConfig2019ent.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? SQLServerConfig2019ent.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: SQLServerConfigSet2019ent): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? SQLServerConfig2019ent.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? SQLServerConfig2019ent.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? SQLServerConfig2019ent.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SQLServerConfigSet2019ent>, I>>(
    object: I
  ): SQLServerConfigSet2019ent {
    const message = {
      ...baseSQLServerConfigSet2019ent,
    } as SQLServerConfigSet2019ent;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? SQLServerConfig2019ent.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? SQLServerConfig2019ent.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? SQLServerConfig2019ent.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  SQLServerConfigSet2019ent.$type,
  SQLServerConfigSet2019ent
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
