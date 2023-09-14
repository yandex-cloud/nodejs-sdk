/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../../../google/protobuf/empty";

export const protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";

export enum ObjectTransferStage {
  OBJECT_TRANSFER_STAGE_UNSPECIFIED = 0,
  /** BEFORE_DATA - Before data transfer */
  BEFORE_DATA = 1,
  /** AFTER_DATA - After data transfer */
  AFTER_DATA = 2,
  /** NEVER - Don't copy */
  NEVER = 3,
  UNRECOGNIZED = -1,
}

export function objectTransferStageFromJSON(object: any): ObjectTransferStage {
  switch (object) {
    case 0:
    case "OBJECT_TRANSFER_STAGE_UNSPECIFIED":
      return ObjectTransferStage.OBJECT_TRANSFER_STAGE_UNSPECIFIED;
    case 1:
    case "BEFORE_DATA":
      return ObjectTransferStage.BEFORE_DATA;
    case 2:
    case "AFTER_DATA":
      return ObjectTransferStage.AFTER_DATA;
    case 3:
    case "NEVER":
      return ObjectTransferStage.NEVER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ObjectTransferStage.UNRECOGNIZED;
  }
}

export function objectTransferStageToJSON(object: ObjectTransferStage): string {
  switch (object) {
    case ObjectTransferStage.OBJECT_TRANSFER_STAGE_UNSPECIFIED:
      return "OBJECT_TRANSFER_STAGE_UNSPECIFIED";
    case ObjectTransferStage.BEFORE_DATA:
      return "BEFORE_DATA";
    case ObjectTransferStage.AFTER_DATA:
      return "AFTER_DATA";
    case ObjectTransferStage.NEVER:
      return "NEVER";
    default:
      return "UNKNOWN";
  }
}

export enum CleanupPolicy {
  CLEANUP_POLICY_UNSPECIFIED = 0,
  /** DISABLED - Don't cleanup */
  DISABLED = 1,
  /** DROP - Drop */
  DROP = 2,
  /** TRUNCATE - Truncate */
  TRUNCATE = 3,
  UNRECOGNIZED = -1,
}

export function cleanupPolicyFromJSON(object: any): CleanupPolicy {
  switch (object) {
    case 0:
    case "CLEANUP_POLICY_UNSPECIFIED":
      return CleanupPolicy.CLEANUP_POLICY_UNSPECIFIED;
    case 1:
    case "DISABLED":
      return CleanupPolicy.DISABLED;
    case 2:
    case "DROP":
      return CleanupPolicy.DROP;
    case 3:
    case "TRUNCATE":
      return CleanupPolicy.TRUNCATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CleanupPolicy.UNRECOGNIZED;
  }
}

export function cleanupPolicyToJSON(object: CleanupPolicy): string {
  switch (object) {
    case CleanupPolicy.CLEANUP_POLICY_UNSPECIFIED:
      return "CLEANUP_POLICY_UNSPECIFIED";
    case CleanupPolicy.DISABLED:
      return "DISABLED";
    case CleanupPolicy.DROP:
      return "DROP";
    case CleanupPolicy.TRUNCATE:
      return "TRUNCATE";
    default:
      return "UNKNOWN";
  }
}

export enum ColumnType {
  COLUMN_TYPE_UNSPECIFIED = 0,
  INT64 = 14,
  INT32 = 1,
  INT16 = 2,
  INT8 = 3,
  UINT64 = 4,
  UINT32 = 5,
  UINT16 = 6,
  UINT8 = 7,
  DOUBLE = 8,
  BOOLEAN = 9,
  STRING = 10,
  UTF8 = 11,
  ANY = 12,
  DATETIME = 13,
  UNRECOGNIZED = -1,
}

export function columnTypeFromJSON(object: any): ColumnType {
  switch (object) {
    case 0:
    case "COLUMN_TYPE_UNSPECIFIED":
      return ColumnType.COLUMN_TYPE_UNSPECIFIED;
    case 14:
    case "INT64":
      return ColumnType.INT64;
    case 1:
    case "INT32":
      return ColumnType.INT32;
    case 2:
    case "INT16":
      return ColumnType.INT16;
    case 3:
    case "INT8":
      return ColumnType.INT8;
    case 4:
    case "UINT64":
      return ColumnType.UINT64;
    case 5:
    case "UINT32":
      return ColumnType.UINT32;
    case 6:
    case "UINT16":
      return ColumnType.UINT16;
    case 7:
    case "UINT8":
      return ColumnType.UINT8;
    case 8:
    case "DOUBLE":
      return ColumnType.DOUBLE;
    case 9:
    case "BOOLEAN":
      return ColumnType.BOOLEAN;
    case 10:
    case "STRING":
      return ColumnType.STRING;
    case 11:
    case "UTF8":
      return ColumnType.UTF8;
    case 12:
    case "ANY":
      return ColumnType.ANY;
    case 13:
    case "DATETIME":
      return ColumnType.DATETIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ColumnType.UNRECOGNIZED;
  }
}

export function columnTypeToJSON(object: ColumnType): string {
  switch (object) {
    case ColumnType.COLUMN_TYPE_UNSPECIFIED:
      return "COLUMN_TYPE_UNSPECIFIED";
    case ColumnType.INT64:
      return "INT64";
    case ColumnType.INT32:
      return "INT32";
    case ColumnType.INT16:
      return "INT16";
    case ColumnType.INT8:
      return "INT8";
    case ColumnType.UINT64:
      return "UINT64";
    case ColumnType.UINT32:
      return "UINT32";
    case ColumnType.UINT16:
      return "UINT16";
    case ColumnType.UINT8:
      return "UINT8";
    case ColumnType.DOUBLE:
      return "DOUBLE";
    case ColumnType.BOOLEAN:
      return "BOOLEAN";
    case ColumnType.STRING:
      return "STRING";
    case ColumnType.UTF8:
      return "UTF8";
    case ColumnType.ANY:
      return "ANY";
    case ColumnType.DATETIME:
      return "DATETIME";
    default:
      return "UNKNOWN";
  }
}

export interface AltName {
  $type: "yandex.cloud.datatransfer.v1.endpoint.AltName";
  /** Source table name */
  fromName: string;
  /** Target table name */
  toName: string;
}

export interface Secret {
  $type: "yandex.cloud.datatransfer.v1.endpoint.Secret";
  /** Raw secret value */
  raw: string | undefined;
}

export interface ColSchema {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ColSchema";
  name: string;
  type: ColumnType;
  key: boolean;
  required: boolean;
  path: string;
}

export interface TLSMode {
  $type: "yandex.cloud.datatransfer.v1.endpoint.TLSMode";
  disabled?: Empty | undefined;
  enabled?: TLSConfig | undefined;
}

export interface TLSConfig {
  $type: "yandex.cloud.datatransfer.v1.endpoint.TLSConfig";
  /**
   * CA certificate
   *
   * X.509 certificate of the certificate authority which issued the server's
   * certificate, in PEM format. When CA certificate is specified TLS is used to
   * connect to the server.
   */
  caCertificate: string;
}

export interface ColumnValue {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ColumnValue";
  stringValue: string | undefined;
}

export interface DataTransformationOptions {
  $type: "yandex.cloud.datatransfer.v1.endpoint.DataTransformationOptions";
  /** Cloud function */
  cloudFunction: string;
  /** Service account */
  serviceAccountId: string;
  /** Number of retries */
  numberOfRetries: number;
  /** Buffer size for function */
  bufferSize: string;
  /** Flush interval */
  bufferFlushInterval: string;
  /** Invocation timeout */
  invocationTimeout: string;
}

export interface FieldList {
  $type: "yandex.cloud.datatransfer.v1.endpoint.FieldList";
  /** Column schema */
  fields: ColSchema[];
}

export interface DataSchema {
  $type: "yandex.cloud.datatransfer.v1.endpoint.DataSchema";
  fields?: FieldList | undefined;
  jsonFields: string | undefined;
}

/** No authentication */
export interface NoAuth {
  $type: "yandex.cloud.datatransfer.v1.endpoint.NoAuth";
}

const baseAltName: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.AltName",
  fromName: "",
  toName: "",
};

export const AltName = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.AltName" as const,

  encode(
    message: AltName,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fromName !== "") {
      writer.uint32(10).string(message.fromName);
    }
    if (message.toName !== "") {
      writer.uint32(18).string(message.toName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AltName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAltName } as AltName;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromName = reader.string();
          break;
        case 2:
          message.toName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AltName {
    const message = { ...baseAltName } as AltName;
    message.fromName =
      object.fromName !== undefined && object.fromName !== null
        ? String(object.fromName)
        : "";
    message.toName =
      object.toName !== undefined && object.toName !== null
        ? String(object.toName)
        : "";
    return message;
  },

  toJSON(message: AltName): unknown {
    const obj: any = {};
    message.fromName !== undefined && (obj.fromName = message.fromName);
    message.toName !== undefined && (obj.toName = message.toName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AltName>, I>>(object: I): AltName {
    const message = { ...baseAltName } as AltName;
    message.fromName = object.fromName ?? "";
    message.toName = object.toName ?? "";
    return message;
  },
};

messageTypeRegistry.set(AltName.$type, AltName);

const baseSecret: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.Secret",
};

export const Secret = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.Secret" as const,

  encode(
    message: Secret,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.raw !== undefined) {
      writer.uint32(10).string(message.raw);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Secret {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSecret } as Secret;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.raw = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Secret {
    const message = { ...baseSecret } as Secret;
    message.raw =
      object.raw !== undefined && object.raw !== null
        ? String(object.raw)
        : undefined;
    return message;
  },

  toJSON(message: Secret): unknown {
    const obj: any = {};
    message.raw !== undefined && (obj.raw = message.raw);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Secret>, I>>(object: I): Secret {
    const message = { ...baseSecret } as Secret;
    message.raw = object.raw ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Secret.$type, Secret);

const baseColSchema: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ColSchema",
  name: "",
  type: 0,
  key: false,
  required: false,
  path: "",
};

export const ColSchema = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ColSchema" as const,

  encode(
    message: ColSchema,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.key === true) {
      writer.uint32(24).bool(message.key);
    }
    if (message.required === true) {
      writer.uint32(32).bool(message.required);
    }
    if (message.path !== "") {
      writer.uint32(42).string(message.path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ColSchema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseColSchema } as ColSchema;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.key = reader.bool();
          break;
        case 4:
          message.required = reader.bool();
          break;
        case 5:
          message.path = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ColSchema {
    const message = { ...baseColSchema } as ColSchema;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.type =
      object.type !== undefined && object.type !== null
        ? columnTypeFromJSON(object.type)
        : 0;
    message.key =
      object.key !== undefined && object.key !== null
        ? Boolean(object.key)
        : false;
    message.required =
      object.required !== undefined && object.required !== null
        ? Boolean(object.required)
        : false;
    message.path =
      object.path !== undefined && object.path !== null
        ? String(object.path)
        : "";
    return message;
  },

  toJSON(message: ColSchema): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = columnTypeToJSON(message.type));
    message.key !== undefined && (obj.key = message.key);
    message.required !== undefined && (obj.required = message.required);
    message.path !== undefined && (obj.path = message.path);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ColSchema>, I>>(
    object: I
  ): ColSchema {
    const message = { ...baseColSchema } as ColSchema;
    message.name = object.name ?? "";
    message.type = object.type ?? 0;
    message.key = object.key ?? false;
    message.required = object.required ?? false;
    message.path = object.path ?? "";
    return message;
  },
};

messageTypeRegistry.set(ColSchema.$type, ColSchema);

const baseTLSMode: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.TLSMode",
};

export const TLSMode = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.TLSMode" as const,

  encode(
    message: TLSMode,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.disabled !== undefined) {
      Empty.encode(message.disabled, writer.uint32(10).fork()).ldelim();
    }
    if (message.enabled !== undefined) {
      TLSConfig.encode(message.enabled, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TLSMode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTLSMode } as TLSMode;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disabled = Empty.decode(reader, reader.uint32());
          break;
        case 2:
          message.enabled = TLSConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TLSMode {
    const message = { ...baseTLSMode } as TLSMode;
    message.disabled =
      object.disabled !== undefined && object.disabled !== null
        ? Empty.fromJSON(object.disabled)
        : undefined;
    message.enabled =
      object.enabled !== undefined && object.enabled !== null
        ? TLSConfig.fromJSON(object.enabled)
        : undefined;
    return message;
  },

  toJSON(message: TLSMode): unknown {
    const obj: any = {};
    message.disabled !== undefined &&
      (obj.disabled = message.disabled
        ? Empty.toJSON(message.disabled)
        : undefined);
    message.enabled !== undefined &&
      (obj.enabled = message.enabled
        ? TLSConfig.toJSON(message.enabled)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TLSMode>, I>>(object: I): TLSMode {
    const message = { ...baseTLSMode } as TLSMode;
    message.disabled =
      object.disabled !== undefined && object.disabled !== null
        ? Empty.fromPartial(object.disabled)
        : undefined;
    message.enabled =
      object.enabled !== undefined && object.enabled !== null
        ? TLSConfig.fromPartial(object.enabled)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(TLSMode.$type, TLSMode);

const baseTLSConfig: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.TLSConfig",
  caCertificate: "",
};

export const TLSConfig = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.TLSConfig" as const,

  encode(
    message: TLSConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.caCertificate !== "") {
      writer.uint32(10).string(message.caCertificate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TLSConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTLSConfig } as TLSConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.caCertificate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TLSConfig {
    const message = { ...baseTLSConfig } as TLSConfig;
    message.caCertificate =
      object.caCertificate !== undefined && object.caCertificate !== null
        ? String(object.caCertificate)
        : "";
    return message;
  },

  toJSON(message: TLSConfig): unknown {
    const obj: any = {};
    message.caCertificate !== undefined &&
      (obj.caCertificate = message.caCertificate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TLSConfig>, I>>(
    object: I
  ): TLSConfig {
    const message = { ...baseTLSConfig } as TLSConfig;
    message.caCertificate = object.caCertificate ?? "";
    return message;
  },
};

messageTypeRegistry.set(TLSConfig.$type, TLSConfig);

const baseColumnValue: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ColumnValue",
};

export const ColumnValue = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.ColumnValue" as const,

  encode(
    message: ColumnValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stringValue !== undefined) {
      writer.uint32(10).string(message.stringValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ColumnValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseColumnValue } as ColumnValue;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stringValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ColumnValue {
    const message = { ...baseColumnValue } as ColumnValue;
    message.stringValue =
      object.stringValue !== undefined && object.stringValue !== null
        ? String(object.stringValue)
        : undefined;
    return message;
  },

  toJSON(message: ColumnValue): unknown {
    const obj: any = {};
    message.stringValue !== undefined &&
      (obj.stringValue = message.stringValue);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ColumnValue>, I>>(
    object: I
  ): ColumnValue {
    const message = { ...baseColumnValue } as ColumnValue;
    message.stringValue = object.stringValue ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(ColumnValue.$type, ColumnValue);

const baseDataTransformationOptions: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.DataTransformationOptions",
  cloudFunction: "",
  serviceAccountId: "",
  numberOfRetries: 0,
  bufferSize: "",
  bufferFlushInterval: "",
  invocationTimeout: "",
};

export const DataTransformationOptions = {
  $type:
    "yandex.cloud.datatransfer.v1.endpoint.DataTransformationOptions" as const,

  encode(
    message: DataTransformationOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cloudFunction !== "") {
      writer.uint32(10).string(message.cloudFunction);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(66).string(message.serviceAccountId);
    }
    if (message.numberOfRetries !== 0) {
      writer.uint32(16).int64(message.numberOfRetries);
    }
    if (message.bufferSize !== "") {
      writer.uint32(26).string(message.bufferSize);
    }
    if (message.bufferFlushInterval !== "") {
      writer.uint32(34).string(message.bufferFlushInterval);
    }
    if (message.invocationTimeout !== "") {
      writer.uint32(42).string(message.invocationTimeout);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DataTransformationOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDataTransformationOptions,
    } as DataTransformationOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cloudFunction = reader.string();
          break;
        case 8:
          message.serviceAccountId = reader.string();
          break;
        case 2:
          message.numberOfRetries = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.bufferSize = reader.string();
          break;
        case 4:
          message.bufferFlushInterval = reader.string();
          break;
        case 5:
          message.invocationTimeout = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataTransformationOptions {
    const message = {
      ...baseDataTransformationOptions,
    } as DataTransformationOptions;
    message.cloudFunction =
      object.cloudFunction !== undefined && object.cloudFunction !== null
        ? String(object.cloudFunction)
        : "";
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.numberOfRetries =
      object.numberOfRetries !== undefined && object.numberOfRetries !== null
        ? Number(object.numberOfRetries)
        : 0;
    message.bufferSize =
      object.bufferSize !== undefined && object.bufferSize !== null
        ? String(object.bufferSize)
        : "";
    message.bufferFlushInterval =
      object.bufferFlushInterval !== undefined &&
      object.bufferFlushInterval !== null
        ? String(object.bufferFlushInterval)
        : "";
    message.invocationTimeout =
      object.invocationTimeout !== undefined &&
      object.invocationTimeout !== null
        ? String(object.invocationTimeout)
        : "";
    return message;
  },

  toJSON(message: DataTransformationOptions): unknown {
    const obj: any = {};
    message.cloudFunction !== undefined &&
      (obj.cloudFunction = message.cloudFunction);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.numberOfRetries !== undefined &&
      (obj.numberOfRetries = Math.round(message.numberOfRetries));
    message.bufferSize !== undefined && (obj.bufferSize = message.bufferSize);
    message.bufferFlushInterval !== undefined &&
      (obj.bufferFlushInterval = message.bufferFlushInterval);
    message.invocationTimeout !== undefined &&
      (obj.invocationTimeout = message.invocationTimeout);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DataTransformationOptions>, I>>(
    object: I
  ): DataTransformationOptions {
    const message = {
      ...baseDataTransformationOptions,
    } as DataTransformationOptions;
    message.cloudFunction = object.cloudFunction ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.numberOfRetries = object.numberOfRetries ?? 0;
    message.bufferSize = object.bufferSize ?? "";
    message.bufferFlushInterval = object.bufferFlushInterval ?? "";
    message.invocationTimeout = object.invocationTimeout ?? "";
    return message;
  },
};

messageTypeRegistry.set(
  DataTransformationOptions.$type,
  DataTransformationOptions
);

const baseFieldList: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.FieldList",
};

export const FieldList = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.FieldList" as const,

  encode(
    message: FieldList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.fields) {
      ColSchema.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FieldList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFieldList } as FieldList;
    message.fields = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.fields.push(ColSchema.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FieldList {
    const message = { ...baseFieldList } as FieldList;
    message.fields = (object.fields ?? []).map((e: any) =>
      ColSchema.fromJSON(e)
    );
    return message;
  },

  toJSON(message: FieldList): unknown {
    const obj: any = {};
    if (message.fields) {
      obj.fields = message.fields.map((e) =>
        e ? ColSchema.toJSON(e) : undefined
      );
    } else {
      obj.fields = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FieldList>, I>>(
    object: I
  ): FieldList {
    const message = { ...baseFieldList } as FieldList;
    message.fields = object.fields?.map((e) => ColSchema.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(FieldList.$type, FieldList);

const baseDataSchema: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.DataSchema",
};

export const DataSchema = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.DataSchema" as const,

  encode(
    message: DataSchema,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fields !== undefined) {
      FieldList.encode(message.fields, writer.uint32(18).fork()).ldelim();
    }
    if (message.jsonFields !== undefined) {
      writer.uint32(10).string(message.jsonFields);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataSchema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDataSchema } as DataSchema;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.fields = FieldList.decode(reader, reader.uint32());
          break;
        case 1:
          message.jsonFields = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataSchema {
    const message = { ...baseDataSchema } as DataSchema;
    message.fields =
      object.fields !== undefined && object.fields !== null
        ? FieldList.fromJSON(object.fields)
        : undefined;
    message.jsonFields =
      object.jsonFields !== undefined && object.jsonFields !== null
        ? String(object.jsonFields)
        : undefined;
    return message;
  },

  toJSON(message: DataSchema): unknown {
    const obj: any = {};
    message.fields !== undefined &&
      (obj.fields = message.fields
        ? FieldList.toJSON(message.fields)
        : undefined);
    message.jsonFields !== undefined && (obj.jsonFields = message.jsonFields);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DataSchema>, I>>(
    object: I
  ): DataSchema {
    const message = { ...baseDataSchema } as DataSchema;
    message.fields =
      object.fields !== undefined && object.fields !== null
        ? FieldList.fromPartial(object.fields)
        : undefined;
    message.jsonFields = object.jsonFields ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(DataSchema.$type, DataSchema);

const baseNoAuth: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.NoAuth",
};

export const NoAuth = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.NoAuth" as const,

  encode(_: NoAuth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NoAuth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNoAuth } as NoAuth;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): NoAuth {
    const message = { ...baseNoAuth } as NoAuth;
    return message;
  },

  toJSON(_: NoAuth): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NoAuth>, I>>(_: I): NoAuth {
    const message = { ...baseNoAuth } as NoAuth;
    return message;
  },
};

messageTypeRegistry.set(NoAuth.$type, NoAuth);

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
