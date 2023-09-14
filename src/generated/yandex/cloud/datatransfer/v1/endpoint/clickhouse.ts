/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  TLSMode,
  Secret,
  ColumnValue,
  AltName,
} from "../../../../../yandex/cloud/datatransfer/v1/endpoint/common";
import { Empty } from "../../../../../google/protobuf/empty";

export const protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";

export enum ClickhouseCleanupPolicy {
  CLICKHOUSE_CLEANUP_POLICY_UNSPECIFIED = 0,
  CLICKHOUSE_CLEANUP_POLICY_DISABLED = 1,
  CLICKHOUSE_CLEANUP_POLICY_DROP = 2,
  CLICKHOUSE_CLEANUP_POLICY_TRUNCATE = 3,
  UNRECOGNIZED = -1,
}

export function clickhouseCleanupPolicyFromJSON(
  object: any
): ClickhouseCleanupPolicy {
  switch (object) {
    case 0:
    case "CLICKHOUSE_CLEANUP_POLICY_UNSPECIFIED":
      return ClickhouseCleanupPolicy.CLICKHOUSE_CLEANUP_POLICY_UNSPECIFIED;
    case 1:
    case "CLICKHOUSE_CLEANUP_POLICY_DISABLED":
      return ClickhouseCleanupPolicy.CLICKHOUSE_CLEANUP_POLICY_DISABLED;
    case 2:
    case "CLICKHOUSE_CLEANUP_POLICY_DROP":
      return ClickhouseCleanupPolicy.CLICKHOUSE_CLEANUP_POLICY_DROP;
    case 3:
    case "CLICKHOUSE_CLEANUP_POLICY_TRUNCATE":
      return ClickhouseCleanupPolicy.CLICKHOUSE_CLEANUP_POLICY_TRUNCATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClickhouseCleanupPolicy.UNRECOGNIZED;
  }
}

export function clickhouseCleanupPolicyToJSON(
  object: ClickhouseCleanupPolicy
): string {
  switch (object) {
    case ClickhouseCleanupPolicy.CLICKHOUSE_CLEANUP_POLICY_UNSPECIFIED:
      return "CLICKHOUSE_CLEANUP_POLICY_UNSPECIFIED";
    case ClickhouseCleanupPolicy.CLICKHOUSE_CLEANUP_POLICY_DISABLED:
      return "CLICKHOUSE_CLEANUP_POLICY_DISABLED";
    case ClickhouseCleanupPolicy.CLICKHOUSE_CLEANUP_POLICY_DROP:
      return "CLICKHOUSE_CLEANUP_POLICY_DROP";
    case ClickhouseCleanupPolicy.CLICKHOUSE_CLEANUP_POLICY_TRUNCATE:
      return "CLICKHOUSE_CLEANUP_POLICY_TRUNCATE";
    default:
      return "UNKNOWN";
  }
}

export interface ClickhouseShard {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseShard";
  name: string;
  hosts: string[];
}

export interface OnPremiseClickhouse {
  $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseClickhouse";
  shards: ClickhouseShard[];
  httpPort: number;
  nativePort: number;
  tlsMode?: TLSMode;
}

export interface ClickhouseConnectionOptions {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseConnectionOptions";
  mdbClusterId: string | undefined;
  onPremise?: OnPremiseClickhouse | undefined;
  /** Database */
  database: string;
  user: string;
  password?: Secret;
}

export interface ClickhouseConnection {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseConnection";
  connectionOptions?: ClickhouseConnectionOptions | undefined;
}

export interface ClickhouseSharding {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding";
  columnValueHash?: ClickhouseSharding_ColumnValueHash | undefined;
  customMapping?: ClickhouseSharding_ColumnValueMapping | undefined;
  transferId?: Empty | undefined;
}

export interface ClickhouseSharding_ColumnValueHash {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueHash";
  columnName: string;
}

export interface ClickhouseSharding_ColumnValueMapping {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueMapping";
  columnName: string;
  mapping: ClickhouseSharding_ColumnValueMapping_ValueToShard[];
}

export interface ClickhouseSharding_ColumnValueMapping_ValueToShard {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueMapping.ValueToShard";
  columnValue?: ColumnValue;
  shardName: string;
}

export interface ClickhouseSource {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSource";
  connection?: ClickhouseConnection;
  subnetId: string;
  securityGroups: string[];
  /**
   * While list of tables for replication. If none or empty list is presented - will
   * replicate all tables. Can contain * patterns.
   */
  includeTables: string[];
  /**
   * Exclude list of tables for replication. If none or empty list is presented -
   * will replicate all tables. Can contain * patterns.
   */
  excludeTables: string[];
}

export interface ClickhouseTarget {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseTarget";
  connection?: ClickhouseConnection;
  subnetId: string;
  securityGroups: string[];
  clickhouseClusterName: string;
  /** Alternative table names in target */
  altNames: AltName[];
  sharding?: ClickhouseSharding;
  cleanupPolicy: ClickhouseCleanupPolicy;
}

const baseClickhouseShard: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseShard",
  name: "",
  hosts: "",
};

export const ClickhouseShard = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseShard" as const,

  encode(
    message: ClickhouseShard,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.hosts) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseShard {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClickhouseShard } as ClickhouseShard;
    message.hosts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.hosts.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClickhouseShard {
    const message = { ...baseClickhouseShard } as ClickhouseShard;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.hosts = (object.hosts ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: ClickhouseShard): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.hosts) {
      obj.hosts = message.hosts.map((e) => e);
    } else {
      obj.hosts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClickhouseShard>, I>>(
    object: I
  ): ClickhouseShard {
    const message = { ...baseClickhouseShard } as ClickhouseShard;
    message.name = object.name ?? "";
    message.hosts = object.hosts?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(ClickhouseShard.$type, ClickhouseShard);

const baseOnPremiseClickhouse: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseClickhouse",
  httpPort: 0,
  nativePort: 0,
};

export const OnPremiseClickhouse = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseClickhouse" as const,

  encode(
    message: OnPremiseClickhouse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.shards) {
      ClickhouseShard.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.httpPort !== 0) {
      writer.uint32(24).int64(message.httpPort);
    }
    if (message.nativePort !== 0) {
      writer.uint32(32).int64(message.nativePort);
    }
    if (message.tlsMode !== undefined) {
      TLSMode.encode(message.tlsMode, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OnPremiseClickhouse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOnPremiseClickhouse } as OnPremiseClickhouse;
    message.shards = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shards.push(ClickhouseShard.decode(reader, reader.uint32()));
          break;
        case 3:
          message.httpPort = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.nativePort = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.tlsMode = TLSMode.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OnPremiseClickhouse {
    const message = { ...baseOnPremiseClickhouse } as OnPremiseClickhouse;
    message.shards = (object.shards ?? []).map((e: any) =>
      ClickhouseShard.fromJSON(e)
    );
    message.httpPort =
      object.httpPort !== undefined && object.httpPort !== null
        ? Number(object.httpPort)
        : 0;
    message.nativePort =
      object.nativePort !== undefined && object.nativePort !== null
        ? Number(object.nativePort)
        : 0;
    message.tlsMode =
      object.tlsMode !== undefined && object.tlsMode !== null
        ? TLSMode.fromJSON(object.tlsMode)
        : undefined;
    return message;
  },

  toJSON(message: OnPremiseClickhouse): unknown {
    const obj: any = {};
    if (message.shards) {
      obj.shards = message.shards.map((e) =>
        e ? ClickhouseShard.toJSON(e) : undefined
      );
    } else {
      obj.shards = [];
    }
    message.httpPort !== undefined &&
      (obj.httpPort = Math.round(message.httpPort));
    message.nativePort !== undefined &&
      (obj.nativePort = Math.round(message.nativePort));
    message.tlsMode !== undefined &&
      (obj.tlsMode = message.tlsMode
        ? TLSMode.toJSON(message.tlsMode)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OnPremiseClickhouse>, I>>(
    object: I
  ): OnPremiseClickhouse {
    const message = { ...baseOnPremiseClickhouse } as OnPremiseClickhouse;
    message.shards =
      object.shards?.map((e) => ClickhouseShard.fromPartial(e)) || [];
    message.httpPort = object.httpPort ?? 0;
    message.nativePort = object.nativePort ?? 0;
    message.tlsMode =
      object.tlsMode !== undefined && object.tlsMode !== null
        ? TLSMode.fromPartial(object.tlsMode)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(OnPremiseClickhouse.$type, OnPremiseClickhouse);

const baseClickhouseConnectionOptions: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseConnectionOptions",
  database: "",
  user: "",
};

export const ClickhouseConnectionOptions = {
  $type:
    "yandex.cloud.datatransfer.v1.endpoint.ClickhouseConnectionOptions" as const,

  encode(
    message: ClickhouseConnectionOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mdbClusterId !== undefined) {
      writer.uint32(42).string(message.mdbClusterId);
    }
    if (message.onPremise !== undefined) {
      OnPremiseClickhouse.encode(
        message.onPremise,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.database !== "") {
      writer.uint32(66).string(message.database);
    }
    if (message.user !== "") {
      writer.uint32(50).string(message.user);
    }
    if (message.password !== undefined) {
      Secret.encode(message.password, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClickhouseConnectionOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClickhouseConnectionOptions,
    } as ClickhouseConnectionOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          message.mdbClusterId = reader.string();
          break;
        case 2:
          message.onPremise = OnPremiseClickhouse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.database = reader.string();
          break;
        case 6:
          message.user = reader.string();
          break;
        case 7:
          message.password = Secret.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClickhouseConnectionOptions {
    const message = {
      ...baseClickhouseConnectionOptions,
    } as ClickhouseConnectionOptions;
    message.mdbClusterId =
      object.mdbClusterId !== undefined && object.mdbClusterId !== null
        ? String(object.mdbClusterId)
        : undefined;
    message.onPremise =
      object.onPremise !== undefined && object.onPremise !== null
        ? OnPremiseClickhouse.fromJSON(object.onPremise)
        : undefined;
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
    return message;
  },

  toJSON(message: ClickhouseConnectionOptions): unknown {
    const obj: any = {};
    message.mdbClusterId !== undefined &&
      (obj.mdbClusterId = message.mdbClusterId);
    message.onPremise !== undefined &&
      (obj.onPremise = message.onPremise
        ? OnPremiseClickhouse.toJSON(message.onPremise)
        : undefined);
    message.database !== undefined && (obj.database = message.database);
    message.user !== undefined && (obj.user = message.user);
    message.password !== undefined &&
      (obj.password = message.password
        ? Secret.toJSON(message.password)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClickhouseConnectionOptions>, I>>(
    object: I
  ): ClickhouseConnectionOptions {
    const message = {
      ...baseClickhouseConnectionOptions,
    } as ClickhouseConnectionOptions;
    message.mdbClusterId = object.mdbClusterId ?? undefined;
    message.onPremise =
      object.onPremise !== undefined && object.onPremise !== null
        ? OnPremiseClickhouse.fromPartial(object.onPremise)
        : undefined;
    message.database = object.database ?? "";
    message.user = object.user ?? "";
    message.password =
      object.password !== undefined && object.password !== null
        ? Secret.fromPartial(object.password)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseConnectionOptions.$type,
  ClickhouseConnectionOptions
);

const baseClickhouseConnection: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseConnection",
};

export const ClickhouseConnection = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseConnection" as const,

  encode(
    message: ClickhouseConnection,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connectionOptions !== undefined) {
      ClickhouseConnectionOptions.encode(
        message.connectionOptions,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClickhouseConnection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClickhouseConnection } as ClickhouseConnection;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionOptions = ClickhouseConnectionOptions.decode(
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

  fromJSON(object: any): ClickhouseConnection {
    const message = { ...baseClickhouseConnection } as ClickhouseConnection;
    message.connectionOptions =
      object.connectionOptions !== undefined &&
      object.connectionOptions !== null
        ? ClickhouseConnectionOptions.fromJSON(object.connectionOptions)
        : undefined;
    return message;
  },

  toJSON(message: ClickhouseConnection): unknown {
    const obj: any = {};
    message.connectionOptions !== undefined &&
      (obj.connectionOptions = message.connectionOptions
        ? ClickhouseConnectionOptions.toJSON(message.connectionOptions)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClickhouseConnection>, I>>(
    object: I
  ): ClickhouseConnection {
    const message = { ...baseClickhouseConnection } as ClickhouseConnection;
    message.connectionOptions =
      object.connectionOptions !== undefined &&
      object.connectionOptions !== null
        ? ClickhouseConnectionOptions.fromPartial(object.connectionOptions)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ClickhouseConnection.$type, ClickhouseConnection);

const baseClickhouseSharding: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding",
};

export const ClickhouseSharding = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding" as const,

  encode(
    message: ClickhouseSharding,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.columnValueHash !== undefined) {
      ClickhouseSharding_ColumnValueHash.encode(
        message.columnValueHash,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.customMapping !== undefined) {
      ClickhouseSharding_ColumnValueMapping.encode(
        message.customMapping,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.transferId !== undefined) {
      Empty.encode(message.transferId, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseSharding {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClickhouseSharding } as ClickhouseSharding;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.columnValueHash = ClickhouseSharding_ColumnValueHash.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.customMapping = ClickhouseSharding_ColumnValueMapping.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.transferId = Empty.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClickhouseSharding {
    const message = { ...baseClickhouseSharding } as ClickhouseSharding;
    message.columnValueHash =
      object.columnValueHash !== undefined && object.columnValueHash !== null
        ? ClickhouseSharding_ColumnValueHash.fromJSON(object.columnValueHash)
        : undefined;
    message.customMapping =
      object.customMapping !== undefined && object.customMapping !== null
        ? ClickhouseSharding_ColumnValueMapping.fromJSON(object.customMapping)
        : undefined;
    message.transferId =
      object.transferId !== undefined && object.transferId !== null
        ? Empty.fromJSON(object.transferId)
        : undefined;
    return message;
  },

  toJSON(message: ClickhouseSharding): unknown {
    const obj: any = {};
    message.columnValueHash !== undefined &&
      (obj.columnValueHash = message.columnValueHash
        ? ClickhouseSharding_ColumnValueHash.toJSON(message.columnValueHash)
        : undefined);
    message.customMapping !== undefined &&
      (obj.customMapping = message.customMapping
        ? ClickhouseSharding_ColumnValueMapping.toJSON(message.customMapping)
        : undefined);
    message.transferId !== undefined &&
      (obj.transferId = message.transferId
        ? Empty.toJSON(message.transferId)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClickhouseSharding>, I>>(
    object: I
  ): ClickhouseSharding {
    const message = { ...baseClickhouseSharding } as ClickhouseSharding;
    message.columnValueHash =
      object.columnValueHash !== undefined && object.columnValueHash !== null
        ? ClickhouseSharding_ColumnValueHash.fromPartial(object.columnValueHash)
        : undefined;
    message.customMapping =
      object.customMapping !== undefined && object.customMapping !== null
        ? ClickhouseSharding_ColumnValueMapping.fromPartial(
            object.customMapping
          )
        : undefined;
    message.transferId =
      object.transferId !== undefined && object.transferId !== null
        ? Empty.fromPartial(object.transferId)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ClickhouseSharding.$type, ClickhouseSharding);

const baseClickhouseSharding_ColumnValueHash: object = {
  $type:
    "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueHash",
  columnName: "",
};

export const ClickhouseSharding_ColumnValueHash = {
  $type:
    "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueHash" as const,

  encode(
    message: ClickhouseSharding_ColumnValueHash,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.columnName !== "") {
      writer.uint32(10).string(message.columnName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClickhouseSharding_ColumnValueHash {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClickhouseSharding_ColumnValueHash,
    } as ClickhouseSharding_ColumnValueHash;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.columnName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClickhouseSharding_ColumnValueHash {
    const message = {
      ...baseClickhouseSharding_ColumnValueHash,
    } as ClickhouseSharding_ColumnValueHash;
    message.columnName =
      object.columnName !== undefined && object.columnName !== null
        ? String(object.columnName)
        : "";
    return message;
  },

  toJSON(message: ClickhouseSharding_ColumnValueHash): unknown {
    const obj: any = {};
    message.columnName !== undefined && (obj.columnName = message.columnName);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ClickhouseSharding_ColumnValueHash>, I>
  >(object: I): ClickhouseSharding_ColumnValueHash {
    const message = {
      ...baseClickhouseSharding_ColumnValueHash,
    } as ClickhouseSharding_ColumnValueHash;
    message.columnName = object.columnName ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseSharding_ColumnValueHash.$type,
  ClickhouseSharding_ColumnValueHash
);

const baseClickhouseSharding_ColumnValueMapping: object = {
  $type:
    "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueMapping",
  columnName: "",
};

export const ClickhouseSharding_ColumnValueMapping = {
  $type:
    "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueMapping" as const,

  encode(
    message: ClickhouseSharding_ColumnValueMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.columnName !== "") {
      writer.uint32(10).string(message.columnName);
    }
    for (const v of message.mapping) {
      ClickhouseSharding_ColumnValueMapping_ValueToShard.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClickhouseSharding_ColumnValueMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClickhouseSharding_ColumnValueMapping,
    } as ClickhouseSharding_ColumnValueMapping;
    message.mapping = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.columnName = reader.string();
          break;
        case 2:
          message.mapping.push(
            ClickhouseSharding_ColumnValueMapping_ValueToShard.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClickhouseSharding_ColumnValueMapping {
    const message = {
      ...baseClickhouseSharding_ColumnValueMapping,
    } as ClickhouseSharding_ColumnValueMapping;
    message.columnName =
      object.columnName !== undefined && object.columnName !== null
        ? String(object.columnName)
        : "";
    message.mapping = (object.mapping ?? []).map((e: any) =>
      ClickhouseSharding_ColumnValueMapping_ValueToShard.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ClickhouseSharding_ColumnValueMapping): unknown {
    const obj: any = {};
    message.columnName !== undefined && (obj.columnName = message.columnName);
    if (message.mapping) {
      obj.mapping = message.mapping.map((e) =>
        e
          ? ClickhouseSharding_ColumnValueMapping_ValueToShard.toJSON(e)
          : undefined
      );
    } else {
      obj.mapping = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ClickhouseSharding_ColumnValueMapping>, I>
  >(object: I): ClickhouseSharding_ColumnValueMapping {
    const message = {
      ...baseClickhouseSharding_ColumnValueMapping,
    } as ClickhouseSharding_ColumnValueMapping;
    message.columnName = object.columnName ?? "";
    message.mapping =
      object.mapping?.map((e) =>
        ClickhouseSharding_ColumnValueMapping_ValueToShard.fromPartial(e)
      ) || [];
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseSharding_ColumnValueMapping.$type,
  ClickhouseSharding_ColumnValueMapping
);

const baseClickhouseSharding_ColumnValueMapping_ValueToShard: object = {
  $type:
    "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueMapping.ValueToShard",
  shardName: "",
};

export const ClickhouseSharding_ColumnValueMapping_ValueToShard = {
  $type:
    "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueMapping.ValueToShard" as const,

  encode(
    message: ClickhouseSharding_ColumnValueMapping_ValueToShard,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.columnValue !== undefined) {
      ColumnValue.encode(
        message.columnValue,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.shardName !== "") {
      writer.uint32(18).string(message.shardName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClickhouseSharding_ColumnValueMapping_ValueToShard {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClickhouseSharding_ColumnValueMapping_ValueToShard,
    } as ClickhouseSharding_ColumnValueMapping_ValueToShard;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.columnValue = ColumnValue.decode(reader, reader.uint32());
          break;
        case 2:
          message.shardName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClickhouseSharding_ColumnValueMapping_ValueToShard {
    const message = {
      ...baseClickhouseSharding_ColumnValueMapping_ValueToShard,
    } as ClickhouseSharding_ColumnValueMapping_ValueToShard;
    message.columnValue =
      object.columnValue !== undefined && object.columnValue !== null
        ? ColumnValue.fromJSON(object.columnValue)
        : undefined;
    message.shardName =
      object.shardName !== undefined && object.shardName !== null
        ? String(object.shardName)
        : "";
    return message;
  },

  toJSON(message: ClickhouseSharding_ColumnValueMapping_ValueToShard): unknown {
    const obj: any = {};
    message.columnValue !== undefined &&
      (obj.columnValue = message.columnValue
        ? ColumnValue.toJSON(message.columnValue)
        : undefined);
    message.shardName !== undefined && (obj.shardName = message.shardName);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ClickhouseSharding_ColumnValueMapping_ValueToShard>,
      I
    >
  >(object: I): ClickhouseSharding_ColumnValueMapping_ValueToShard {
    const message = {
      ...baseClickhouseSharding_ColumnValueMapping_ValueToShard,
    } as ClickhouseSharding_ColumnValueMapping_ValueToShard;
    message.columnValue =
      object.columnValue !== undefined && object.columnValue !== null
        ? ColumnValue.fromPartial(object.columnValue)
        : undefined;
    message.shardName = object.shardName ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  ClickhouseSharding_ColumnValueMapping_ValueToShard.$type,
  ClickhouseSharding_ColumnValueMapping_ValueToShard
);

const baseClickhouseSource: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSource",
  subnetId: "",
  securityGroups: "",
  includeTables: "",
  excludeTables: "",
};

export const ClickhouseSource = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSource" as const,

  encode(
    message: ClickhouseSource,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connection !== undefined) {
      ClickhouseConnection.encode(
        message.connection,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.subnetId !== "") {
      writer.uint32(74).string(message.subnetId);
    }
    for (const v of message.securityGroups) {
      writer.uint32(82).string(v!);
    }
    for (const v of message.includeTables) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.excludeTables) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClickhouseSource } as ClickhouseSource;
    message.securityGroups = [];
    message.includeTables = [];
    message.excludeTables = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection = ClickhouseConnection.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.subnetId = reader.string();
          break;
        case 10:
          message.securityGroups.push(reader.string());
          break;
        case 7:
          message.includeTables.push(reader.string());
          break;
        case 8:
          message.excludeTables.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClickhouseSource {
    const message = { ...baseClickhouseSource } as ClickhouseSource;
    message.connection =
      object.connection !== undefined && object.connection !== null
        ? ClickhouseConnection.fromJSON(object.connection)
        : undefined;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    message.securityGroups = (object.securityGroups ?? []).map((e: any) =>
      String(e)
    );
    message.includeTables = (object.includeTables ?? []).map((e: any) =>
      String(e)
    );
    message.excludeTables = (object.excludeTables ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: ClickhouseSource): unknown {
    const obj: any = {};
    message.connection !== undefined &&
      (obj.connection = message.connection
        ? ClickhouseConnection.toJSON(message.connection)
        : undefined);
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    if (message.securityGroups) {
      obj.securityGroups = message.securityGroups.map((e) => e);
    } else {
      obj.securityGroups = [];
    }
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
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClickhouseSource>, I>>(
    object: I
  ): ClickhouseSource {
    const message = { ...baseClickhouseSource } as ClickhouseSource;
    message.connection =
      object.connection !== undefined && object.connection !== null
        ? ClickhouseConnection.fromPartial(object.connection)
        : undefined;
    message.subnetId = object.subnetId ?? "";
    message.securityGroups = object.securityGroups?.map((e) => e) || [];
    message.includeTables = object.includeTables?.map((e) => e) || [];
    message.excludeTables = object.excludeTables?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(ClickhouseSource.$type, ClickhouseSource);

const baseClickhouseTarget: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseTarget",
  subnetId: "",
  securityGroups: "",
  clickhouseClusterName: "",
  cleanupPolicy: 0,
};

export const ClickhouseTarget = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseTarget" as const,

  encode(
    message: ClickhouseTarget,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connection !== undefined) {
      ClickhouseConnection.encode(
        message.connection,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.subnetId !== "") {
      writer.uint32(98).string(message.subnetId);
    }
    for (const v of message.securityGroups) {
      writer.uint32(410).string(v!);
    }
    if (message.clickhouseClusterName !== "") {
      writer.uint32(402).string(message.clickhouseClusterName);
    }
    for (const v of message.altNames) {
      AltName.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    if (message.sharding !== undefined) {
      ClickhouseSharding.encode(
        message.sharding,
        writer.uint32(178).fork()
      ).ldelim();
    }
    if (message.cleanupPolicy !== 0) {
      writer.uint32(168).int32(message.cleanupPolicy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseTarget {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClickhouseTarget } as ClickhouseTarget;
    message.securityGroups = [];
    message.altNames = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.connection = ClickhouseConnection.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.subnetId = reader.string();
          break;
        case 51:
          message.securityGroups.push(reader.string());
          break;
        case 50:
          message.clickhouseClusterName = reader.string();
          break;
        case 17:
          message.altNames.push(AltName.decode(reader, reader.uint32()));
          break;
        case 22:
          message.sharding = ClickhouseSharding.decode(reader, reader.uint32());
          break;
        case 21:
          message.cleanupPolicy = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClickhouseTarget {
    const message = { ...baseClickhouseTarget } as ClickhouseTarget;
    message.connection =
      object.connection !== undefined && object.connection !== null
        ? ClickhouseConnection.fromJSON(object.connection)
        : undefined;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    message.securityGroups = (object.securityGroups ?? []).map((e: any) =>
      String(e)
    );
    message.clickhouseClusterName =
      object.clickhouseClusterName !== undefined &&
      object.clickhouseClusterName !== null
        ? String(object.clickhouseClusterName)
        : "";
    message.altNames = (object.altNames ?? []).map((e: any) =>
      AltName.fromJSON(e)
    );
    message.sharding =
      object.sharding !== undefined && object.sharding !== null
        ? ClickhouseSharding.fromJSON(object.sharding)
        : undefined;
    message.cleanupPolicy =
      object.cleanupPolicy !== undefined && object.cleanupPolicy !== null
        ? clickhouseCleanupPolicyFromJSON(object.cleanupPolicy)
        : 0;
    return message;
  },

  toJSON(message: ClickhouseTarget): unknown {
    const obj: any = {};
    message.connection !== undefined &&
      (obj.connection = message.connection
        ? ClickhouseConnection.toJSON(message.connection)
        : undefined);
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    if (message.securityGroups) {
      obj.securityGroups = message.securityGroups.map((e) => e);
    } else {
      obj.securityGroups = [];
    }
    message.clickhouseClusterName !== undefined &&
      (obj.clickhouseClusterName = message.clickhouseClusterName);
    if (message.altNames) {
      obj.altNames = message.altNames.map((e) =>
        e ? AltName.toJSON(e) : undefined
      );
    } else {
      obj.altNames = [];
    }
    message.sharding !== undefined &&
      (obj.sharding = message.sharding
        ? ClickhouseSharding.toJSON(message.sharding)
        : undefined);
    message.cleanupPolicy !== undefined &&
      (obj.cleanupPolicy = clickhouseCleanupPolicyToJSON(
        message.cleanupPolicy
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClickhouseTarget>, I>>(
    object: I
  ): ClickhouseTarget {
    const message = { ...baseClickhouseTarget } as ClickhouseTarget;
    message.connection =
      object.connection !== undefined && object.connection !== null
        ? ClickhouseConnection.fromPartial(object.connection)
        : undefined;
    message.subnetId = object.subnetId ?? "";
    message.securityGroups = object.securityGroups?.map((e) => e) || [];
    message.clickhouseClusterName = object.clickhouseClusterName ?? "";
    message.altNames =
      object.altNames?.map((e) => AltName.fromPartial(e)) || [];
    message.sharding =
      object.sharding !== undefined && object.sharding !== null
        ? ClickhouseSharding.fromPartial(object.sharding)
        : undefined;
    message.cleanupPolicy = object.cleanupPolicy ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ClickhouseTarget.$type, ClickhouseTarget);

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
