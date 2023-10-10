/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  TLSMode,
  Secret,
  CleanupPolicy,
  cleanupPolicyFromJSON,
  cleanupPolicyToJSON,
} from "../../../../../yandex/cloud/datatransfer/v1/endpoint/common";

export const protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";

export interface OnPremiseMongo {
  $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseMongo";
  hosts: string[];
  port: number;
  tlsMode?: TLSMode;
  replicaSet: string;
}

export interface MongoConnectionOptions {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MongoConnectionOptions";
  mdbClusterId: string | undefined;
  onPremise?: OnPremiseMongo | undefined;
  /** User name */
  user: string;
  /** Password for user */
  password?: Secret;
  /** Database name associated with the credentials */
  authSource: string;
}

export interface MongoConnection {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MongoConnection";
  connectionOptions?: MongoConnectionOptions | undefined;
}

export interface MongoCollection {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MongoCollection";
  databaseName: string;
  collectionName: string;
}

export interface MongoSource {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MongoSource";
  connection?: MongoConnection;
  subnetId: string;
  /** Security groups */
  securityGroups: string[];
  /**
   * List of collections for replication. Empty list implies replication of all
   * tables on the deployment. Allowed to use * as collection name.
   */
  collections: MongoCollection[];
  /**
   * List of forbidden collections for replication. Allowed to use * as collection
   * name for forbid all collections of concrete schema.
   */
  excludedCollections: MongoCollection[];
  /** Read mode for mongo client */
  secondaryPreferredMode: boolean;
}

export interface MongoTarget {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MongoTarget";
  connection?: MongoConnection;
  subnetId: string;
  /** Security groups */
  securityGroups: string[];
  /** Database name */
  database: string;
  cleanupPolicy: CleanupPolicy;
}

const baseOnPremiseMongo: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseMongo",
  hosts: "",
  port: 0,
  replicaSet: "",
};

export const OnPremiseMongo = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseMongo" as const,

  encode(
    message: OnPremiseMongo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.hosts) {
      writer.uint32(10).string(v!);
    }
    if (message.port !== 0) {
      writer.uint32(16).int64(message.port);
    }
    if (message.tlsMode !== undefined) {
      TLSMode.encode(message.tlsMode, writer.uint32(50).fork()).ldelim();
    }
    if (message.replicaSet !== "") {
      writer.uint32(42).string(message.replicaSet);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OnPremiseMongo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOnPremiseMongo } as OnPremiseMongo;
    message.hosts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hosts.push(reader.string());
          break;
        case 2:
          message.port = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.tlsMode = TLSMode.decode(reader, reader.uint32());
          break;
        case 5:
          message.replicaSet = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OnPremiseMongo {
    const message = { ...baseOnPremiseMongo } as OnPremiseMongo;
    message.hosts = (object.hosts ?? []).map((e: any) => String(e));
    message.port =
      object.port !== undefined && object.port !== null
        ? Number(object.port)
        : 0;
    message.tlsMode =
      object.tlsMode !== undefined && object.tlsMode !== null
        ? TLSMode.fromJSON(object.tlsMode)
        : undefined;
    message.replicaSet =
      object.replicaSet !== undefined && object.replicaSet !== null
        ? String(object.replicaSet)
        : "";
    return message;
  },

  toJSON(message: OnPremiseMongo): unknown {
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
    message.replicaSet !== undefined && (obj.replicaSet = message.replicaSet);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OnPremiseMongo>, I>>(
    object: I
  ): OnPremiseMongo {
    const message = { ...baseOnPremiseMongo } as OnPremiseMongo;
    message.hosts = object.hosts?.map((e) => e) || [];
    message.port = object.port ?? 0;
    message.tlsMode =
      object.tlsMode !== undefined && object.tlsMode !== null
        ? TLSMode.fromPartial(object.tlsMode)
        : undefined;
    message.replicaSet = object.replicaSet ?? "";
    return message;
  },
};

messageTypeRegistry.set(OnPremiseMongo.$type, OnPremiseMongo);

const baseMongoConnectionOptions: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MongoConnectionOptions",
  user: "",
  authSource: "",
};

export const MongoConnectionOptions = {
  $type:
    "yandex.cloud.datatransfer.v1.endpoint.MongoConnectionOptions" as const,

  encode(
    message: MongoConnectionOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mdbClusterId !== undefined) {
      writer.uint32(10).string(message.mdbClusterId);
    }
    if (message.onPremise !== undefined) {
      OnPremiseMongo.encode(
        message.onPremise,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.user !== "") {
      writer.uint32(26).string(message.user);
    }
    if (message.password !== undefined) {
      Secret.encode(message.password, writer.uint32(34).fork()).ldelim();
    }
    if (message.authSource !== "") {
      writer.uint32(42).string(message.authSource);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MongoConnectionOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongoConnectionOptions } as MongoConnectionOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mdbClusterId = reader.string();
          break;
        case 2:
          message.onPremise = OnPremiseMongo.decode(reader, reader.uint32());
          break;
        case 3:
          message.user = reader.string();
          break;
        case 4:
          message.password = Secret.decode(reader, reader.uint32());
          break;
        case 5:
          message.authSource = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MongoConnectionOptions {
    const message = { ...baseMongoConnectionOptions } as MongoConnectionOptions;
    message.mdbClusterId =
      object.mdbClusterId !== undefined && object.mdbClusterId !== null
        ? String(object.mdbClusterId)
        : undefined;
    message.onPremise =
      object.onPremise !== undefined && object.onPremise !== null
        ? OnPremiseMongo.fromJSON(object.onPremise)
        : undefined;
    message.user =
      object.user !== undefined && object.user !== null
        ? String(object.user)
        : "";
    message.password =
      object.password !== undefined && object.password !== null
        ? Secret.fromJSON(object.password)
        : undefined;
    message.authSource =
      object.authSource !== undefined && object.authSource !== null
        ? String(object.authSource)
        : "";
    return message;
  },

  toJSON(message: MongoConnectionOptions): unknown {
    const obj: any = {};
    message.mdbClusterId !== undefined &&
      (obj.mdbClusterId = message.mdbClusterId);
    message.onPremise !== undefined &&
      (obj.onPremise = message.onPremise
        ? OnPremiseMongo.toJSON(message.onPremise)
        : undefined);
    message.user !== undefined && (obj.user = message.user);
    message.password !== undefined &&
      (obj.password = message.password
        ? Secret.toJSON(message.password)
        : undefined);
    message.authSource !== undefined && (obj.authSource = message.authSource);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MongoConnectionOptions>, I>>(
    object: I
  ): MongoConnectionOptions {
    const message = { ...baseMongoConnectionOptions } as MongoConnectionOptions;
    message.mdbClusterId = object.mdbClusterId ?? undefined;
    message.onPremise =
      object.onPremise !== undefined && object.onPremise !== null
        ? OnPremiseMongo.fromPartial(object.onPremise)
        : undefined;
    message.user = object.user ?? "";
    message.password =
      object.password !== undefined && object.password !== null
        ? Secret.fromPartial(object.password)
        : undefined;
    message.authSource = object.authSource ?? "";
    return message;
  },
};

messageTypeRegistry.set(MongoConnectionOptions.$type, MongoConnectionOptions);

const baseMongoConnection: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MongoConnection",
};

export const MongoConnection = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MongoConnection" as const,

  encode(
    message: MongoConnection,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connectionOptions !== undefined) {
      MongoConnectionOptions.encode(
        message.connectionOptions,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoConnection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongoConnection } as MongoConnection;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.connectionOptions = MongoConnectionOptions.decode(
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

  fromJSON(object: any): MongoConnection {
    const message = { ...baseMongoConnection } as MongoConnection;
    message.connectionOptions =
      object.connectionOptions !== undefined &&
      object.connectionOptions !== null
        ? MongoConnectionOptions.fromJSON(object.connectionOptions)
        : undefined;
    return message;
  },

  toJSON(message: MongoConnection): unknown {
    const obj: any = {};
    message.connectionOptions !== undefined &&
      (obj.connectionOptions = message.connectionOptions
        ? MongoConnectionOptions.toJSON(message.connectionOptions)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MongoConnection>, I>>(
    object: I
  ): MongoConnection {
    const message = { ...baseMongoConnection } as MongoConnection;
    message.connectionOptions =
      object.connectionOptions !== undefined &&
      object.connectionOptions !== null
        ? MongoConnectionOptions.fromPartial(object.connectionOptions)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MongoConnection.$type, MongoConnection);

const baseMongoCollection: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MongoCollection",
  databaseName: "",
  collectionName: "",
};

export const MongoCollection = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MongoCollection" as const,

  encode(
    message: MongoCollection,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.databaseName !== "") {
      writer.uint32(10).string(message.databaseName);
    }
    if (message.collectionName !== "") {
      writer.uint32(18).string(message.collectionName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoCollection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongoCollection } as MongoCollection;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.databaseName = reader.string();
          break;
        case 2:
          message.collectionName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MongoCollection {
    const message = { ...baseMongoCollection } as MongoCollection;
    message.databaseName =
      object.databaseName !== undefined && object.databaseName !== null
        ? String(object.databaseName)
        : "";
    message.collectionName =
      object.collectionName !== undefined && object.collectionName !== null
        ? String(object.collectionName)
        : "";
    return message;
  },

  toJSON(message: MongoCollection): unknown {
    const obj: any = {};
    message.databaseName !== undefined &&
      (obj.databaseName = message.databaseName);
    message.collectionName !== undefined &&
      (obj.collectionName = message.collectionName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MongoCollection>, I>>(
    object: I
  ): MongoCollection {
    const message = { ...baseMongoCollection } as MongoCollection;
    message.databaseName = object.databaseName ?? "";
    message.collectionName = object.collectionName ?? "";
    return message;
  },
};

messageTypeRegistry.set(MongoCollection.$type, MongoCollection);

const baseMongoSource: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MongoSource",
  subnetId: "",
  securityGroups: "",
  secondaryPreferredMode: false,
};

export const MongoSource = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MongoSource" as const,

  encode(
    message: MongoSource,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connection !== undefined) {
      MongoConnection.encode(
        message.connection,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.subnetId !== "") {
      writer.uint32(18).string(message.subnetId);
    }
    for (const v of message.securityGroups) {
      writer.uint32(90).string(v!);
    }
    for (const v of message.collections) {
      MongoCollection.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.excludedCollections) {
      MongoCollection.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.secondaryPreferredMode === true) {
      writer.uint32(64).bool(message.secondaryPreferredMode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongoSource } as MongoSource;
    message.securityGroups = [];
    message.collections = [];
    message.excludedCollections = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection = MongoConnection.decode(reader, reader.uint32());
          break;
        case 2:
          message.subnetId = reader.string();
          break;
        case 11:
          message.securityGroups.push(reader.string());
          break;
        case 6:
          message.collections.push(
            MongoCollection.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.excludedCollections.push(
            MongoCollection.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.secondaryPreferredMode = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MongoSource {
    const message = { ...baseMongoSource } as MongoSource;
    message.connection =
      object.connection !== undefined && object.connection !== null
        ? MongoConnection.fromJSON(object.connection)
        : undefined;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    message.securityGroups = (object.securityGroups ?? []).map((e: any) =>
      String(e)
    );
    message.collections = (object.collections ?? []).map((e: any) =>
      MongoCollection.fromJSON(e)
    );
    message.excludedCollections = (object.excludedCollections ?? []).map(
      (e: any) => MongoCollection.fromJSON(e)
    );
    message.secondaryPreferredMode =
      object.secondaryPreferredMode !== undefined &&
      object.secondaryPreferredMode !== null
        ? Boolean(object.secondaryPreferredMode)
        : false;
    return message;
  },

  toJSON(message: MongoSource): unknown {
    const obj: any = {};
    message.connection !== undefined &&
      (obj.connection = message.connection
        ? MongoConnection.toJSON(message.connection)
        : undefined);
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    if (message.securityGroups) {
      obj.securityGroups = message.securityGroups.map((e) => e);
    } else {
      obj.securityGroups = [];
    }
    if (message.collections) {
      obj.collections = message.collections.map((e) =>
        e ? MongoCollection.toJSON(e) : undefined
      );
    } else {
      obj.collections = [];
    }
    if (message.excludedCollections) {
      obj.excludedCollections = message.excludedCollections.map((e) =>
        e ? MongoCollection.toJSON(e) : undefined
      );
    } else {
      obj.excludedCollections = [];
    }
    message.secondaryPreferredMode !== undefined &&
      (obj.secondaryPreferredMode = message.secondaryPreferredMode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MongoSource>, I>>(
    object: I
  ): MongoSource {
    const message = { ...baseMongoSource } as MongoSource;
    message.connection =
      object.connection !== undefined && object.connection !== null
        ? MongoConnection.fromPartial(object.connection)
        : undefined;
    message.subnetId = object.subnetId ?? "";
    message.securityGroups = object.securityGroups?.map((e) => e) || [];
    message.collections =
      object.collections?.map((e) => MongoCollection.fromPartial(e)) || [];
    message.excludedCollections =
      object.excludedCollections?.map((e) => MongoCollection.fromPartial(e)) ||
      [];
    message.secondaryPreferredMode = object.secondaryPreferredMode ?? false;
    return message;
  },
};

messageTypeRegistry.set(MongoSource.$type, MongoSource);

const baseMongoTarget: object = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MongoTarget",
  subnetId: "",
  securityGroups: "",
  database: "",
  cleanupPolicy: 0,
};

export const MongoTarget = {
  $type: "yandex.cloud.datatransfer.v1.endpoint.MongoTarget" as const,

  encode(
    message: MongoTarget,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connection !== undefined) {
      MongoConnection.encode(
        message.connection,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.subnetId !== "") {
      writer.uint32(58).string(message.subnetId);
    }
    for (const v of message.securityGroups) {
      writer.uint32(66).string(v!);
    }
    if (message.database !== "") {
      writer.uint32(18).string(message.database);
    }
    if (message.cleanupPolicy !== 0) {
      writer.uint32(48).int32(message.cleanupPolicy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MongoTarget {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMongoTarget } as MongoTarget;
    message.securityGroups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection = MongoConnection.decode(reader, reader.uint32());
          break;
        case 7:
          message.subnetId = reader.string();
          break;
        case 8:
          message.securityGroups.push(reader.string());
          break;
        case 2:
          message.database = reader.string();
          break;
        case 6:
          message.cleanupPolicy = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MongoTarget {
    const message = { ...baseMongoTarget } as MongoTarget;
    message.connection =
      object.connection !== undefined && object.connection !== null
        ? MongoConnection.fromJSON(object.connection)
        : undefined;
    message.subnetId =
      object.subnetId !== undefined && object.subnetId !== null
        ? String(object.subnetId)
        : "";
    message.securityGroups = (object.securityGroups ?? []).map((e: any) =>
      String(e)
    );
    message.database =
      object.database !== undefined && object.database !== null
        ? String(object.database)
        : "";
    message.cleanupPolicy =
      object.cleanupPolicy !== undefined && object.cleanupPolicy !== null
        ? cleanupPolicyFromJSON(object.cleanupPolicy)
        : 0;
    return message;
  },

  toJSON(message: MongoTarget): unknown {
    const obj: any = {};
    message.connection !== undefined &&
      (obj.connection = message.connection
        ? MongoConnection.toJSON(message.connection)
        : undefined);
    message.subnetId !== undefined && (obj.subnetId = message.subnetId);
    if (message.securityGroups) {
      obj.securityGroups = message.securityGroups.map((e) => e);
    } else {
      obj.securityGroups = [];
    }
    message.database !== undefined && (obj.database = message.database);
    message.cleanupPolicy !== undefined &&
      (obj.cleanupPolicy = cleanupPolicyToJSON(message.cleanupPolicy));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MongoTarget>, I>>(
    object: I
  ): MongoTarget {
    const message = { ...baseMongoTarget } as MongoTarget;
    message.connection =
      object.connection !== undefined && object.connection !== null
        ? MongoConnection.fromPartial(object.connection)
        : undefined;
    message.subnetId = object.subnetId ?? "";
    message.securityGroups = object.securityGroups?.map((e) => e) || [];
    message.database = object.database ?? "";
    message.cleanupPolicy = object.cleanupPolicy ?? 0;
    return message;
  },
};

messageTypeRegistry.set(MongoTarget.$type, MongoTarget);

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
