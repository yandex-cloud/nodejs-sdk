/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Int64Value, BoolValue } from "../../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.mdb.greenplum.v1";

/** A list of computational resources allocated to a host. */
export interface Resources {
  $type: "yandex.cloud.mdb.greenplum.v1.Resources";
  /**
   * ID of the preset for computational resources allocated to a host.
   * Available presets are listed in the [documentation](/docs/managed-greenplum/concepts/instance-types).
   */
  resourcePresetId: string;
  /** Volume of the storage used by the host, in bytes. */
  diskSize: number;
  /** Type of the storage used by the host: `network-hdd`, `network-ssd` or `local-ssd`. */
  diskTypeId: string;
}

/** Route server configuration. */
export interface ConnectionPoolerConfig {
  $type: "yandex.cloud.mdb.greenplum.v1.ConnectionPoolerConfig";
  /** Route server pool mode. */
  mode: ConnectionPoolerConfig_PoolMode;
  /**
   * The number of servers in the server pool. Clients are placed in a wait queue when all servers are busy.
   * Set to zero to disable the limit.
   */
  size?: number;
  /**
   * Server pool idle timeout, in seconds. A server connection closes after it has been idle for the specified duration.
   * Set to zero to disable the limit.
   */
  clientIdleTimeout?: number;
}

/** Route server pool mode. */
export enum ConnectionPoolerConfig_PoolMode {
  POOL_MODE_UNSPECIFIED = 0,
  /** SESSION - Assign server connection to a client until it disconnects. Default value. */
  SESSION = 1,
  /** TRANSACTION - Assign server connection to a client for a transaction processing. */
  TRANSACTION = 2,
  UNRECOGNIZED = -1,
}

export function connectionPoolerConfig_PoolModeFromJSON(
  object: any
): ConnectionPoolerConfig_PoolMode {
  switch (object) {
    case 0:
    case "POOL_MODE_UNSPECIFIED":
      return ConnectionPoolerConfig_PoolMode.POOL_MODE_UNSPECIFIED;
    case 1:
    case "SESSION":
      return ConnectionPoolerConfig_PoolMode.SESSION;
    case 2:
    case "TRANSACTION":
      return ConnectionPoolerConfig_PoolMode.TRANSACTION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ConnectionPoolerConfig_PoolMode.UNRECOGNIZED;
  }
}

export function connectionPoolerConfig_PoolModeToJSON(
  object: ConnectionPoolerConfig_PoolMode
): string {
  switch (object) {
    case ConnectionPoolerConfig_PoolMode.POOL_MODE_UNSPECIFIED:
      return "POOL_MODE_UNSPECIFIED";
    case ConnectionPoolerConfig_PoolMode.SESSION:
      return "SESSION";
    case ConnectionPoolerConfig_PoolMode.TRANSACTION:
      return "TRANSACTION";
    default:
      return "UNKNOWN";
  }
}

/** Configuration of the master subcluster. */
export interface MasterSubclusterConfig {
  $type: "yandex.cloud.mdb.greenplum.v1.MasterSubclusterConfig";
  /** Computational resources allocated to Greenplum® master subcluster hosts. */
  resources?: Resources;
}

/** Configuration of the segment subcluster. */
export interface SegmentSubclusterConfig {
  $type: "yandex.cloud.mdb.greenplum.v1.SegmentSubclusterConfig";
  /** Computational resources allocated to Greenplum® segment subcluster hosts. */
  resources?: Resources;
}

export interface Greenplumconfig617 {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_17";
  /** Maximum number of inbound connections on master segment */
  maxConnections?: number;
  /**
   * Specify the maximum size of WAL files that replication slots are allowed to retain in the pg_wal directory at checkpoint time.
   * https://www.postgresql.org/docs/current/runtime-config-replication.html
   */
  maxSlotWalKeepSize?: number;
  /**
   * Sets the maximum total disk size that all running queries are allowed to use for creating temporary spill files at each segment.
   * The default value is 0, which means a limit is not enforced.
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_workfile_limit_per_segment
   */
  gpWorkfileLimitPerSegment?: number;
  /**
   * Sets the maximum disk size an individual query is allowed to use for creating temporary spill files at each segment.
   * The default value is 0, which means a limit is not enforced.
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_workfile_limit_per_query
   */
  gpWorkfileLimitPerQuery?: number;
  /**
   * Sets the maximum number of temporary spill files (also known as workfiles) allowed per query per segment.
   * Spill files are created when executing a query that requires more memory than it is allocated.
   * The current query is terminated when the limit is exceeded.
   * Set the value to 0 (zero) to allow an unlimited number of spill files. master session reload
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_workfile_limit_files_per_query
   * Default value is 10000
   */
  gpWorkfileLimitFilesPerQuery?: number;
  /**
   * Sets the maximum number of transactions that can be in the "prepared" state simultaneously
   * https://www.postgresql.org/docs/9.6/runtime-config-resource.html
   */
  maxPreparedTransactions?: number;
  /**
   * Specifies whether the temporary files created, when a hash aggregation or hash join operation spills to disk, are compressed.
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_workfile_compression
   */
  gpWorkfileCompression?: boolean;
}

export interface Greenplumconfig619 {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_19";
  /** Maximum number of inbound connections on master segment */
  maxConnections?: number;
  /**
   * Specify the maximum size of WAL files that replication slots are allowed to retain in the pg_wal directory at checkpoint time.
   * https://www.postgresql.org/docs/current/runtime-config-replication.html
   */
  maxSlotWalKeepSize?: number;
  /**
   * Sets the maximum total disk size that all running queries are allowed to use for creating temporary spill files at each segment.
   * The default value is 0, which means a limit is not enforced.
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_workfile_limit_per_segment
   */
  gpWorkfileLimitPerSegment?: number;
  /**
   * Sets the maximum disk size an individual query is allowed to use for creating temporary spill files at each segment.
   * The default value is 0, which means a limit is not enforced.
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_workfile_limit_per_query
   */
  gpWorkfileLimitPerQuery?: number;
  /**
   * Sets the maximum number of temporary spill files (also known as workfiles) allowed per query per segment.
   * Spill files are created when executing a query that requires more memory than it is allocated.
   * The current query is terminated when the limit is exceeded.
   * Set the value to 0 (zero) to allow an unlimited number of spill files. master session reload
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_workfile_limit_files_per_query
   * Default value is 10000
   */
  gpWorkfileLimitFilesPerQuery?: number;
  /**
   * Sets the maximum number of transactions that can be in the "prepared" state simultaneously
   * https://www.postgresql.org/docs/9.6/runtime-config-resource.html
   */
  maxPreparedTransactions?: number;
  /**
   * Specifies whether the temporary files created, when a hash aggregation or hash join operation spills to disk, are compressed.
   * https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_workfile_compression
   */
  gpWorkfileCompression?: boolean;
}

export interface Greenplumconfigset617 {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_17";
  /**
   * Effective settings for a Greenplum (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?: Greenplumconfig617;
  /** User-defined settings for a Greenplum. */
  userConfig?: Greenplumconfig617;
  /** Default configuration for a Greenplum. */
  defaultConfig?: Greenplumconfig617;
}

export interface Greenplumconfigset619 {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_19";
  /**
   * Effective settings for a Greenplum (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?: Greenplumconfig619;
  /** User-defined settings for a Greenplum. */
  userConfig?: Greenplumconfig619;
  /** Default configuration for a Greenplum. */
  defaultConfig?: Greenplumconfig619;
}

export interface ConnectionPoolerConfigSet {
  $type: "yandex.cloud.mdb.greenplum.v1.ConnectionPoolerConfigSet";
  /**
   * Effective settings for a odyssey (a combination of settings defined
   * in [user_config] and [default_config]).
   */
  effectiveConfig?: ConnectionPoolerConfig;
  /** User-defined settings for a odyssey. */
  userConfig?: ConnectionPoolerConfig;
  /** Default configuration for a odyssey. */
  defaultConfig?: ConnectionPoolerConfig;
}

const baseResources: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.Resources",
  resourcePresetId: "",
  diskSize: 0,
  diskTypeId: "",
};

export const Resources = {
  $type: "yandex.cloud.mdb.greenplum.v1.Resources" as const,

  encode(
    message: Resources,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resourcePresetId !== "") {
      writer.uint32(10).string(message.resourcePresetId);
    }
    if (message.diskSize !== 0) {
      writer.uint32(16).int64(message.diskSize);
    }
    if (message.diskTypeId !== "") {
      writer.uint32(26).string(message.diskTypeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resources {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResources } as Resources;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourcePresetId = reader.string();
          break;
        case 2:
          message.diskSize = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.diskTypeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Resources {
    const message = { ...baseResources } as Resources;
    message.resourcePresetId =
      object.resourcePresetId !== undefined && object.resourcePresetId !== null
        ? String(object.resourcePresetId)
        : "";
    message.diskSize =
      object.diskSize !== undefined && object.diskSize !== null
        ? Number(object.diskSize)
        : 0;
    message.diskTypeId =
      object.diskTypeId !== undefined && object.diskTypeId !== null
        ? String(object.diskTypeId)
        : "";
    return message;
  },

  toJSON(message: Resources): unknown {
    const obj: any = {};
    message.resourcePresetId !== undefined &&
      (obj.resourcePresetId = message.resourcePresetId);
    message.diskSize !== undefined &&
      (obj.diskSize = Math.round(message.diskSize));
    message.diskTypeId !== undefined && (obj.diskTypeId = message.diskTypeId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Resources>, I>>(
    object: I
  ): Resources {
    const message = { ...baseResources } as Resources;
    message.resourcePresetId = object.resourcePresetId ?? "";
    message.diskSize = object.diskSize ?? 0;
    message.diskTypeId = object.diskTypeId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Resources.$type, Resources);

const baseConnectionPoolerConfig: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.ConnectionPoolerConfig",
  mode: 0,
};

export const ConnectionPoolerConfig = {
  $type: "yandex.cloud.mdb.greenplum.v1.ConnectionPoolerConfig" as const,

  encode(
    message: ConnectionPoolerConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    if (message.size !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.size! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.clientIdleTimeout !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.clientIdleTimeout!,
        },
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ConnectionPoolerConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConnectionPoolerConfig } as ConnectionPoolerConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mode = reader.int32() as any;
          break;
        case 2:
          message.size = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 3:
          message.clientIdleTimeout = Int64Value.decode(
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

  fromJSON(object: any): ConnectionPoolerConfig {
    const message = { ...baseConnectionPoolerConfig } as ConnectionPoolerConfig;
    message.mode =
      object.mode !== undefined && object.mode !== null
        ? connectionPoolerConfig_PoolModeFromJSON(object.mode)
        : 0;
    message.size =
      object.size !== undefined && object.size !== null
        ? Number(object.size)
        : undefined;
    message.clientIdleTimeout =
      object.clientIdleTimeout !== undefined &&
      object.clientIdleTimeout !== null
        ? Number(object.clientIdleTimeout)
        : undefined;
    return message;
  },

  toJSON(message: ConnectionPoolerConfig): unknown {
    const obj: any = {};
    message.mode !== undefined &&
      (obj.mode = connectionPoolerConfig_PoolModeToJSON(message.mode));
    message.size !== undefined && (obj.size = message.size);
    message.clientIdleTimeout !== undefined &&
      (obj.clientIdleTimeout = message.clientIdleTimeout);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConnectionPoolerConfig>, I>>(
    object: I
  ): ConnectionPoolerConfig {
    const message = { ...baseConnectionPoolerConfig } as ConnectionPoolerConfig;
    message.mode = object.mode ?? 0;
    message.size = object.size ?? undefined;
    message.clientIdleTimeout = object.clientIdleTimeout ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ConnectionPoolerConfig.$type, ConnectionPoolerConfig);

const baseMasterSubclusterConfig: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.MasterSubclusterConfig",
};

export const MasterSubclusterConfig = {
  $type: "yandex.cloud.mdb.greenplum.v1.MasterSubclusterConfig" as const,

  encode(
    message: MasterSubclusterConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MasterSubclusterConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMasterSubclusterConfig } as MasterSubclusterConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MasterSubclusterConfig {
    const message = { ...baseMasterSubclusterConfig } as MasterSubclusterConfig;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: MasterSubclusterConfig): unknown {
    const obj: any = {};
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MasterSubclusterConfig>, I>>(
    object: I
  ): MasterSubclusterConfig {
    const message = { ...baseMasterSubclusterConfig } as MasterSubclusterConfig;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MasterSubclusterConfig.$type, MasterSubclusterConfig);

const baseSegmentSubclusterConfig: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.SegmentSubclusterConfig",
};

export const SegmentSubclusterConfig = {
  $type: "yandex.cloud.mdb.greenplum.v1.SegmentSubclusterConfig" as const,

  encode(
    message: SegmentSubclusterConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SegmentSubclusterConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSegmentSubclusterConfig,
    } as SegmentSubclusterConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SegmentSubclusterConfig {
    const message = {
      ...baseSegmentSubclusterConfig,
    } as SegmentSubclusterConfig;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromJSON(object.resources)
        : undefined;
    return message;
  },

  toJSON(message: SegmentSubclusterConfig): unknown {
    const obj: any = {};
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? Resources.toJSON(message.resources)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SegmentSubclusterConfig>, I>>(
    object: I
  ): SegmentSubclusterConfig {
    const message = {
      ...baseSegmentSubclusterConfig,
    } as SegmentSubclusterConfig;
    message.resources =
      object.resources !== undefined && object.resources !== null
        ? Resources.fromPartial(object.resources)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(SegmentSubclusterConfig.$type, SegmentSubclusterConfig);

const baseGreenplumconfig617: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_17",
};

export const Greenplumconfig617 = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_17" as const,

  encode(
    message: Greenplumconfig617,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maxConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxConnections! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.maxSlotWalKeepSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxSlotWalKeepSize!,
        },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.gpWorkfileLimitPerSegment !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.gpWorkfileLimitPerSegment!,
        },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.gpWorkfileLimitPerQuery !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.gpWorkfileLimitPerQuery!,
        },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.gpWorkfileLimitFilesPerQuery !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.gpWorkfileLimitFilesPerQuery!,
        },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.maxPreparedTransactions !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxPreparedTransactions!,
        },
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.gpWorkfileCompression !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.gpWorkfileCompression!,
        },
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Greenplumconfig617 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGreenplumconfig617 } as Greenplumconfig617;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxConnections = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 2:
          message.maxSlotWalKeepSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.gpWorkfileLimitPerSegment = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 4:
          message.gpWorkfileLimitPerQuery = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 5:
          message.gpWorkfileLimitFilesPerQuery = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 6:
          message.maxPreparedTransactions = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 7:
          message.gpWorkfileCompression = BoolValue.decode(
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

  fromJSON(object: any): Greenplumconfig617 {
    const message = { ...baseGreenplumconfig617 } as Greenplumconfig617;
    message.maxConnections =
      object.maxConnections !== undefined && object.maxConnections !== null
        ? Number(object.maxConnections)
        : undefined;
    message.maxSlotWalKeepSize =
      object.maxSlotWalKeepSize !== undefined &&
      object.maxSlotWalKeepSize !== null
        ? Number(object.maxSlotWalKeepSize)
        : undefined;
    message.gpWorkfileLimitPerSegment =
      object.gpWorkfileLimitPerSegment !== undefined &&
      object.gpWorkfileLimitPerSegment !== null
        ? Number(object.gpWorkfileLimitPerSegment)
        : undefined;
    message.gpWorkfileLimitPerQuery =
      object.gpWorkfileLimitPerQuery !== undefined &&
      object.gpWorkfileLimitPerQuery !== null
        ? Number(object.gpWorkfileLimitPerQuery)
        : undefined;
    message.gpWorkfileLimitFilesPerQuery =
      object.gpWorkfileLimitFilesPerQuery !== undefined &&
      object.gpWorkfileLimitFilesPerQuery !== null
        ? Number(object.gpWorkfileLimitFilesPerQuery)
        : undefined;
    message.maxPreparedTransactions =
      object.maxPreparedTransactions !== undefined &&
      object.maxPreparedTransactions !== null
        ? Number(object.maxPreparedTransactions)
        : undefined;
    message.gpWorkfileCompression =
      object.gpWorkfileCompression !== undefined &&
      object.gpWorkfileCompression !== null
        ? Boolean(object.gpWorkfileCompression)
        : undefined;
    return message;
  },

  toJSON(message: Greenplumconfig617): unknown {
    const obj: any = {};
    message.maxConnections !== undefined &&
      (obj.maxConnections = message.maxConnections);
    message.maxSlotWalKeepSize !== undefined &&
      (obj.maxSlotWalKeepSize = message.maxSlotWalKeepSize);
    message.gpWorkfileLimitPerSegment !== undefined &&
      (obj.gpWorkfileLimitPerSegment = message.gpWorkfileLimitPerSegment);
    message.gpWorkfileLimitPerQuery !== undefined &&
      (obj.gpWorkfileLimitPerQuery = message.gpWorkfileLimitPerQuery);
    message.gpWorkfileLimitFilesPerQuery !== undefined &&
      (obj.gpWorkfileLimitFilesPerQuery = message.gpWorkfileLimitFilesPerQuery);
    message.maxPreparedTransactions !== undefined &&
      (obj.maxPreparedTransactions = message.maxPreparedTransactions);
    message.gpWorkfileCompression !== undefined &&
      (obj.gpWorkfileCompression = message.gpWorkfileCompression);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Greenplumconfig617>, I>>(
    object: I
  ): Greenplumconfig617 {
    const message = { ...baseGreenplumconfig617 } as Greenplumconfig617;
    message.maxConnections = object.maxConnections ?? undefined;
    message.maxSlotWalKeepSize = object.maxSlotWalKeepSize ?? undefined;
    message.gpWorkfileLimitPerSegment =
      object.gpWorkfileLimitPerSegment ?? undefined;
    message.gpWorkfileLimitPerQuery =
      object.gpWorkfileLimitPerQuery ?? undefined;
    message.gpWorkfileLimitFilesPerQuery =
      object.gpWorkfileLimitFilesPerQuery ?? undefined;
    message.maxPreparedTransactions =
      object.maxPreparedTransactions ?? undefined;
    message.gpWorkfileCompression = object.gpWorkfileCompression ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Greenplumconfig617.$type, Greenplumconfig617);

const baseGreenplumconfig619: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_19",
};

export const Greenplumconfig619 = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_19" as const,

  encode(
    message: Greenplumconfig619,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maxConnections !== undefined) {
      Int64Value.encode(
        { $type: "google.protobuf.Int64Value", value: message.maxConnections! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.maxSlotWalKeepSize !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxSlotWalKeepSize!,
        },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.gpWorkfileLimitPerSegment !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.gpWorkfileLimitPerSegment!,
        },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.gpWorkfileLimitPerQuery !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.gpWorkfileLimitPerQuery!,
        },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.gpWorkfileLimitFilesPerQuery !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.gpWorkfileLimitFilesPerQuery!,
        },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.maxPreparedTransactions !== undefined) {
      Int64Value.encode(
        {
          $type: "google.protobuf.Int64Value",
          value: message.maxPreparedTransactions!,
        },
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.gpWorkfileCompression !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.gpWorkfileCompression!,
        },
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Greenplumconfig619 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGreenplumconfig619 } as Greenplumconfig619;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxConnections = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 2:
          message.maxSlotWalKeepSize = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.gpWorkfileLimitPerSegment = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 4:
          message.gpWorkfileLimitPerQuery = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 5:
          message.gpWorkfileLimitFilesPerQuery = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 6:
          message.maxPreparedTransactions = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 7:
          message.gpWorkfileCompression = BoolValue.decode(
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

  fromJSON(object: any): Greenplumconfig619 {
    const message = { ...baseGreenplumconfig619 } as Greenplumconfig619;
    message.maxConnections =
      object.maxConnections !== undefined && object.maxConnections !== null
        ? Number(object.maxConnections)
        : undefined;
    message.maxSlotWalKeepSize =
      object.maxSlotWalKeepSize !== undefined &&
      object.maxSlotWalKeepSize !== null
        ? Number(object.maxSlotWalKeepSize)
        : undefined;
    message.gpWorkfileLimitPerSegment =
      object.gpWorkfileLimitPerSegment !== undefined &&
      object.gpWorkfileLimitPerSegment !== null
        ? Number(object.gpWorkfileLimitPerSegment)
        : undefined;
    message.gpWorkfileLimitPerQuery =
      object.gpWorkfileLimitPerQuery !== undefined &&
      object.gpWorkfileLimitPerQuery !== null
        ? Number(object.gpWorkfileLimitPerQuery)
        : undefined;
    message.gpWorkfileLimitFilesPerQuery =
      object.gpWorkfileLimitFilesPerQuery !== undefined &&
      object.gpWorkfileLimitFilesPerQuery !== null
        ? Number(object.gpWorkfileLimitFilesPerQuery)
        : undefined;
    message.maxPreparedTransactions =
      object.maxPreparedTransactions !== undefined &&
      object.maxPreparedTransactions !== null
        ? Number(object.maxPreparedTransactions)
        : undefined;
    message.gpWorkfileCompression =
      object.gpWorkfileCompression !== undefined &&
      object.gpWorkfileCompression !== null
        ? Boolean(object.gpWorkfileCompression)
        : undefined;
    return message;
  },

  toJSON(message: Greenplumconfig619): unknown {
    const obj: any = {};
    message.maxConnections !== undefined &&
      (obj.maxConnections = message.maxConnections);
    message.maxSlotWalKeepSize !== undefined &&
      (obj.maxSlotWalKeepSize = message.maxSlotWalKeepSize);
    message.gpWorkfileLimitPerSegment !== undefined &&
      (obj.gpWorkfileLimitPerSegment = message.gpWorkfileLimitPerSegment);
    message.gpWorkfileLimitPerQuery !== undefined &&
      (obj.gpWorkfileLimitPerQuery = message.gpWorkfileLimitPerQuery);
    message.gpWorkfileLimitFilesPerQuery !== undefined &&
      (obj.gpWorkfileLimitFilesPerQuery = message.gpWorkfileLimitFilesPerQuery);
    message.maxPreparedTransactions !== undefined &&
      (obj.maxPreparedTransactions = message.maxPreparedTransactions);
    message.gpWorkfileCompression !== undefined &&
      (obj.gpWorkfileCompression = message.gpWorkfileCompression);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Greenplumconfig619>, I>>(
    object: I
  ): Greenplumconfig619 {
    const message = { ...baseGreenplumconfig619 } as Greenplumconfig619;
    message.maxConnections = object.maxConnections ?? undefined;
    message.maxSlotWalKeepSize = object.maxSlotWalKeepSize ?? undefined;
    message.gpWorkfileLimitPerSegment =
      object.gpWorkfileLimitPerSegment ?? undefined;
    message.gpWorkfileLimitPerQuery =
      object.gpWorkfileLimitPerQuery ?? undefined;
    message.gpWorkfileLimitFilesPerQuery =
      object.gpWorkfileLimitFilesPerQuery ?? undefined;
    message.maxPreparedTransactions =
      object.maxPreparedTransactions ?? undefined;
    message.gpWorkfileCompression = object.gpWorkfileCompression ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Greenplumconfig619.$type, Greenplumconfig619);

const baseGreenplumconfigset617: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_17",
};

export const Greenplumconfigset617 = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_17" as const,

  encode(
    message: Greenplumconfigset617,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      Greenplumconfig617.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      Greenplumconfig617.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      Greenplumconfig617.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Greenplumconfigset617 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGreenplumconfigset617 } as Greenplumconfigset617;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = Greenplumconfig617.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = Greenplumconfig617.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.defaultConfig = Greenplumconfig617.decode(
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

  fromJSON(object: any): Greenplumconfigset617 {
    const message = { ...baseGreenplumconfigset617 } as Greenplumconfigset617;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Greenplumconfig617.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Greenplumconfig617.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Greenplumconfig617.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: Greenplumconfigset617): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? Greenplumconfig617.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? Greenplumconfig617.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? Greenplumconfig617.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Greenplumconfigset617>, I>>(
    object: I
  ): Greenplumconfigset617 {
    const message = { ...baseGreenplumconfigset617 } as Greenplumconfigset617;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Greenplumconfig617.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Greenplumconfig617.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Greenplumconfig617.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Greenplumconfigset617.$type, Greenplumconfigset617);

const baseGreenplumconfigset619: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_19",
};

export const Greenplumconfigset619 = {
  $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_19" as const,

  encode(
    message: Greenplumconfigset619,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      Greenplumconfig619.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      Greenplumconfig619.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      Greenplumconfig619.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Greenplumconfigset619 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGreenplumconfigset619 } as Greenplumconfigset619;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = Greenplumconfig619.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = Greenplumconfig619.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.defaultConfig = Greenplumconfig619.decode(
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

  fromJSON(object: any): Greenplumconfigset619 {
    const message = { ...baseGreenplumconfigset619 } as Greenplumconfigset619;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Greenplumconfig619.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Greenplumconfig619.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Greenplumconfig619.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: Greenplumconfigset619): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? Greenplumconfig619.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? Greenplumconfig619.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? Greenplumconfig619.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Greenplumconfigset619>, I>>(
    object: I
  ): Greenplumconfigset619 {
    const message = { ...baseGreenplumconfigset619 } as Greenplumconfigset619;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? Greenplumconfig619.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? Greenplumconfig619.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? Greenplumconfig619.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Greenplumconfigset619.$type, Greenplumconfigset619);

const baseConnectionPoolerConfigSet: object = {
  $type: "yandex.cloud.mdb.greenplum.v1.ConnectionPoolerConfigSet",
};

export const ConnectionPoolerConfigSet = {
  $type: "yandex.cloud.mdb.greenplum.v1.ConnectionPoolerConfigSet" as const,

  encode(
    message: ConnectionPoolerConfigSet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.effectiveConfig !== undefined) {
      ConnectionPoolerConfig.encode(
        message.effectiveConfig,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.userConfig !== undefined) {
      ConnectionPoolerConfig.encode(
        message.userConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.defaultConfig !== undefined) {
      ConnectionPoolerConfig.encode(
        message.defaultConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ConnectionPoolerConfigSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseConnectionPoolerConfigSet,
    } as ConnectionPoolerConfigSet;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveConfig = ConnectionPoolerConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.userConfig = ConnectionPoolerConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.defaultConfig = ConnectionPoolerConfig.decode(
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

  fromJSON(object: any): ConnectionPoolerConfigSet {
    const message = {
      ...baseConnectionPoolerConfigSet,
    } as ConnectionPoolerConfigSet;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? ConnectionPoolerConfig.fromJSON(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? ConnectionPoolerConfig.fromJSON(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? ConnectionPoolerConfig.fromJSON(object.defaultConfig)
        : undefined;
    return message;
  },

  toJSON(message: ConnectionPoolerConfigSet): unknown {
    const obj: any = {};
    message.effectiveConfig !== undefined &&
      (obj.effectiveConfig = message.effectiveConfig
        ? ConnectionPoolerConfig.toJSON(message.effectiveConfig)
        : undefined);
    message.userConfig !== undefined &&
      (obj.userConfig = message.userConfig
        ? ConnectionPoolerConfig.toJSON(message.userConfig)
        : undefined);
    message.defaultConfig !== undefined &&
      (obj.defaultConfig = message.defaultConfig
        ? ConnectionPoolerConfig.toJSON(message.defaultConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConnectionPoolerConfigSet>, I>>(
    object: I
  ): ConnectionPoolerConfigSet {
    const message = {
      ...baseConnectionPoolerConfigSet,
    } as ConnectionPoolerConfigSet;
    message.effectiveConfig =
      object.effectiveConfig !== undefined && object.effectiveConfig !== null
        ? ConnectionPoolerConfig.fromPartial(object.effectiveConfig)
        : undefined;
    message.userConfig =
      object.userConfig !== undefined && object.userConfig !== null
        ? ConnectionPoolerConfig.fromPartial(object.userConfig)
        : undefined;
    message.defaultConfig =
      object.defaultConfig !== undefined && object.defaultConfig !== null
        ? ConnectionPoolerConfig.fromPartial(object.defaultConfig)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  ConnectionPoolerConfigSet.$type,
  ConnectionPoolerConfigSet
);

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
