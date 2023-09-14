/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";

export enum YdbCleanupPolicy {
  YDB_CLEANUP_POLICY_UNSPECIFIED = 0,
  YDB_CLEANUP_POLICY_DISABLED = 1,
  YDB_CLEANUP_POLICY_DROP = 2,
  UNRECOGNIZED = -1,
}

export function ydbCleanupPolicyFromJSON(object: any): YdbCleanupPolicy {
  switch (object) {
    case 0:
    case "YDB_CLEANUP_POLICY_UNSPECIFIED":
      return YdbCleanupPolicy.YDB_CLEANUP_POLICY_UNSPECIFIED;
    case 1:
    case "YDB_CLEANUP_POLICY_DISABLED":
      return YdbCleanupPolicy.YDB_CLEANUP_POLICY_DISABLED;
    case 2:
    case "YDB_CLEANUP_POLICY_DROP":
      return YdbCleanupPolicy.YDB_CLEANUP_POLICY_DROP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return YdbCleanupPolicy.UNRECOGNIZED;
  }
}

export function ydbCleanupPolicyToJSON(object: YdbCleanupPolicy): string {
  switch (object) {
    case YdbCleanupPolicy.YDB_CLEANUP_POLICY_UNSPECIFIED:
      return "YDB_CLEANUP_POLICY_UNSPECIFIED";
    case YdbCleanupPolicy.YDB_CLEANUP_POLICY_DISABLED:
      return "YDB_CLEANUP_POLICY_DISABLED";
    case YdbCleanupPolicy.YDB_CLEANUP_POLICY_DROP:
      return "YDB_CLEANUP_POLICY_DROP";
    default:
      return "UNKNOWN";
  }
}

export interface YdbSource {
  $type: "yandex.cloud.datatransfer.v1.endpoint.YdbSource";
  /** Path in YDB where to store tables */
  database: string;
  /** Instance of YDB. example: ydb-ru-prestable.yandex.net:2135 */
  instance: string;
  serviceAccountId: string;
  paths: string[];
  /** Network interface for endpoint. If none will assume public ipv4 */
  subnetId: string;
  /** Security groups */
  securityGroups: string[];
  /** Authorization Key */
  saKeyContent: string;
}

export interface YdbTarget {
  $type: "yandex.cloud.datatransfer.v1.endpoint.YdbTarget";
  /** Path in YDB where to store tables */
  database: string;
  /** Instance of YDB. example: ydb-ru-prestable.yandex.net:2135 */
  instance: string;
  serviceAccountId: string;
  /** Path extension for database, each table will be layouted into this path */
  path: string;
  /** Network interface for endpoint. If none will assume public ipv4 */
  subnetId: string;
  /** Security groups */
  securityGroups: string[];
  /** SA content */
  saKeyContent: string;
  /** Cleanup policy */
  cleanupPolicy: YdbCleanupPolicy;
}

const baseYdbSource: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.YdbSource",
  database: "",
  instance: "",
  serviceAccountId: "",
  paths: "",
  subnetId: "",
  securityGroups: "",
  saKeyContent: "",
};

export const YdbSource = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.YdbSource" as const,

  encode(
    message: YdbSource,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.database !== "") {
      writer.uint32(10).string(message.database);
    }
    if (message.instance !== "") {
      writer.uint32(18).string(message.instance);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(50).string(message.serviceAccountId);
    }
    for (const v of message.paths) {
      writer.uint32(42).string(v!);
    }
    if (message.subnetId !== "") {
      writer.uint32(242).string(message.subnetId);
    }
    for (const v of message.securityGroups) {
      writer.uint32(274).string(v!);
    }
    if (message.saKeyContent !== "") {
      writer.uint32(266).string(message.saKeyContent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): YdbSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseYdbSource } as YdbSource;
    message.paths = [];
    message.securityGroups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.database = reader.string();
          break;
        case 2:
          message.instance = reader.string();
          break;
        case 6:
          message.serviceAccountId = reader.string();
          break;
        case 5:
          message.paths.push(reader.string());
          break;
        case 30:
          message.subnetId = reader.string();
          break;
        case 34:
          message.securityGroups.push(reader.string());
          break;
        case 33:
          message.saKeyContent = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): YdbSource {
    const message = { ...baseYdbSource } as YdbSource;
    message.database =
      object.database !== undefined && object.database !== null
        ? String(object.database)
        : "";
    message.instance =
      object.instance !== undefined && object.instance !== null
        ? String(object.instance)
        : "";
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.paths = (object.paths ?? []).map((e: any) => String(e));
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    message.securityGroups = (object.securityGroups ?? []).map((e: any) =>
      String(e)
    );
    message.saKeyContent =
      object.saKeyContent !== undefined && object.saKeyContent !== null
        ? String(object.saKeyContent)
        : "";
    return message;
  },

  toJSON(message: YdbSource): unknown {
    const obj: any = {};
    message.database !== undefined && (obj.database = message.database);
    message.instance !== undefined && (obj.instance = message.instance);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    if (message.paths) {
      obj.paths = message.paths.map((e) => e);
    } else {
      obj.paths = [];
    }
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    if (message.securityGroups) {
      obj.securityGroups = message.securityGroups.map((e) => e);
    } else {
      obj.securityGroups = [];
    }
    message.saKeyContent !== undefined &&
      (obj.saKeyContent = message.saKeyContent);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<YdbSource>, I>>(
    object: I
  ): YdbSource {
    const message = { ...baseYdbSource } as YdbSource;
    message.database = object.database ?? "";
    message.instance = object.instance ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.paths = object.paths?.map((e) => e) || [];
    message.subnetId = object.subnetId ?? "";
    message.securityGroups = object.securityGroups?.map((e) => e) || [];
    message.saKeyContent = object.saKeyContent ?? "";
    return message;
  },
};

messageTypeRegistry.set(YdbSource.$type, YdbSource);

const baseYdbTarget: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.YdbTarget",
  database: "",
  instance: "",
  serviceAccountId: "",
  path: "",
  subnetId: "",
  securityGroups: "",
  saKeyContent: "",
  cleanupPolicy: 0,
};

export const YdbTarget = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.YdbTarget" as const,

  encode(
    message: YdbTarget,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.database !== "") {
      writer.uint32(10).string(message.database);
    }
    if (message.instance !== "") {
      writer.uint32(18).string(message.instance);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(90).string(message.serviceAccountId);
    }
    if (message.path !== "") {
      writer.uint32(82).string(message.path);
    }
    if (message.subnetId !== "") {
      writer.uint32(242).string(message.subnetId);
    }
    for (const v of message.securityGroups) {
      writer.uint32(266).string(v!);
    }
    if (message.saKeyContent !== "") {
      writer.uint32(258).string(message.saKeyContent);
    }
    if (message.cleanupPolicy !== 0) {
      writer.uint32(168).int32(message.cleanupPolicy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): YdbTarget {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseYdbTarget } as YdbTarget;
    message.securityGroups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.database = reader.string();
          break;
        case 2:
          message.instance = reader.string();
          break;
        case 11:
          message.serviceAccountId = reader.string();
          break;
        case 10:
          message.path = reader.string();
          break;
        case 30:
          message.subnetId = reader.string();
          break;
        case 33:
          message.securityGroups.push(reader.string());
          break;
        case 32:
          message.saKeyContent = reader.string();
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

  fromJSON(object: any): YdbTarget {
    const message = { ...baseYdbTarget } as YdbTarget;
    message.database =
      object.database !== undefined && object.database !== null
        ? String(object.database)
        : "";
    message.instance =
      object.instance !== undefined && object.instance !== null
        ? String(object.instance)
        : "";
    message.serviceAccountId =
      object.serviceAccountId !== undefined && object.serviceAccountId !== null
        ? String(object.serviceAccountId)
        : "";
    message.path =
      object.path !== undefined && object.path !== null
        ? String(object.path)
        : "";
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    message.securityGroups = (object.securityGroups ?? []).map((e: any) =>
      String(e)
    );
    message.saKeyContent =
      object.saKeyContent !== undefined && object.saKeyContent !== null
        ? String(object.saKeyContent)
        : "";
    message.cleanupPolicy =
      object.cleanupPolicy !== undefined && object.cleanupPolicy !== null
        ? ydbCleanupPolicyFromJSON(object.cleanupPolicy)
        : 0;
    return message;
  },

  toJSON(message: YdbTarget): unknown {
    const obj: any = {};
    message.database !== undefined && (obj.database = message.database);
    message.instance !== undefined && (obj.instance = message.instance);
    message.serviceAccountId !== undefined &&
      (obj.serviceAccountId = message.serviceAccountId);
    message.path !== undefined && (obj.path = message.path);
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    if (message.securityGroups) {
      obj.securityGroups = message.securityGroups.map((e) => e);
    } else {
      obj.securityGroups = [];
    }
    message.saKeyContent !== undefined &&
      (obj.saKeyContent = message.saKeyContent);
    message.cleanupPolicy !== undefined &&
      (obj.cleanupPolicy = ydbCleanupPolicyToJSON(message.cleanupPolicy));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<YdbTarget>, I>>(
    object: I
  ): YdbTarget {
    const message = { ...baseYdbTarget } as YdbTarget;
    message.database = object.database ?? "";
    message.instance = object.instance ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    message.path = object.path ?? "";
    message.subnetId = object.subnetId ?? "";
    message.securityGroups = object.securityGroups?.map((e) => e) || [];
    message.saKeyContent = object.saKeyContent ?? "";
    message.cleanupPolicy = object.cleanupPolicy ?? 0;
    return message;
  },
};

messageTypeRegistry.set(YdbTarget.$type, YdbTarget);

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
