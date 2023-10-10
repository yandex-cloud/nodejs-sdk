/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { BoolValue } from "../../../../../google/protobuf/wrappers";

export const protobufPackage = "yandex.cloud.mdb.postgresql.v1";

/**
 * A PostgreSQL Database resource. For more information, see
 * the [Developer's Guide](/docs/managed-postgresql/concepts).
 */
export interface Database {
  $type: "yandex.cloud.mdb.postgresql.v1.Database";
  /** Name of the database. */
  name: string;
  /** ID of the PostgreSQL cluster that the database belongs to. */
  clusterId: string;
  /** Name of the user assigned as the owner of the database. */
  owner: string;
  /**
   * POSIX locale for string sorting order.
   * Can only be set at creation time.
   */
  lcCollate: string;
  /**
   * POSIX locale for character classification.
   * Can only be set at creation time.
   */
  lcCtype: string;
  /** PostgreSQL extensions enabled for the database. */
  extensions: Extension[];
  /** Name of the database template. */
  templateDb: string;
  /**
   * Deletion Protection inhibits deletion of the database
   *
   * Default value: `unspecified` (inherits cluster's deletion_protection)
   */
  deletionProtection?: boolean;
}

export interface Extension {
  $type: "yandex.cloud.mdb.postgresql.v1.Extension";
  /**
   * Name of the extension, e.g. `pg_trgm` or `pg_btree`.
   * Extensions supported by Managed Service for PostgreSQL are [listed in the Developer's Guide](/docs/managed-postgresql/operations/extensions/cluster-extensions).
   */
  name: string;
  /** Version of the extension. */
  version: string;
}

export interface DatabaseSpec {
  $type: "yandex.cloud.mdb.postgresql.v1.DatabaseSpec";
  /** Name of the PostgreSQL database. 1-63 characters long. */
  name: string;
  /**
   * Name of the user to be assigned as the owner of the database.
   * To get the list of available PostgreSQL users, make a [UserService.List] request.
   */
  owner: string;
  /**
   * POSIX locale for string sorting order.
   * Can only be set at creation time.
   */
  lcCollate: string;
  /**
   * POSIX locale for character classification.
   * Can only be set at creation time.
   */
  lcCtype: string;
  /** PostgreSQL extensions to be enabled for the database. */
  extensions: Extension[];
  /** Name of the PostgreSQL database template. */
  templateDb: string;
  /**
   * Deletion Protection inhibits deletion of the database
   *
   * Default value: `unspecified` (inherits cluster's deletion_protection)
   */
  deletionProtection?: boolean;
}

const baseDatabase: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.Database",
  name: "",
  clusterId: "",
  owner: "",
  lcCollate: "",
  lcCtype: "",
  templateDb: "",
};

export const Database = {
  $type: "yandex.cloud.mdb.postgresql.v1.Database" as const,

  encode(
    message: Database,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.clusterId !== "") {
      writer.uint32(18).string(message.clusterId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.lcCollate !== "") {
      writer.uint32(34).string(message.lcCollate);
    }
    if (message.lcCtype !== "") {
      writer.uint32(42).string(message.lcCtype);
    }
    for (const v of message.extensions) {
      Extension.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.templateDb !== "") {
      writer.uint32(58).string(message.templateDb);
    }
    if (message.deletionProtection !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.deletionProtection!,
        },
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Database {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDatabase } as Database;
    message.extensions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.clusterId = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.lcCollate = reader.string();
          break;
        case 5:
          message.lcCtype = reader.string();
          break;
        case 6:
          message.extensions.push(Extension.decode(reader, reader.uint32()));
          break;
        case 7:
          message.templateDb = reader.string();
          break;
        case 8:
          message.deletionProtection = BoolValue.decode(
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

  fromJSON(object: any): Database {
    const message = { ...baseDatabase } as Database;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.owner =
      object.owner !== undefined && object.owner !== null
        ? String(object.owner)
        : "";
    message.lcCollate =
      object.lcCollate !== undefined && object.lcCollate !== null
        ? String(object.lcCollate)
        : "";
    message.lcCtype =
      object.lcCtype !== undefined && object.lcCtype !== null
        ? String(object.lcCtype)
        : "";
    message.extensions = (object.extensions ?? []).map((e: any) =>
      Extension.fromJSON(e)
    );
    message.templateDb =
      object.templateDb !== undefined && object.templateDb !== null
        ? String(object.templateDb)
        : "";
    message.deletionProtection =
      object.deletionProtection !== undefined &&
      object.deletionProtection !== null
        ? Boolean(object.deletionProtection)
        : undefined;
    return message;
  },

  toJSON(message: Database): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    message.owner !== undefined && (obj.owner = message.owner);
    message.lcCollate !== undefined && (obj.lcCollate = message.lcCollate);
    message.lcCtype !== undefined && (obj.lcCtype = message.lcCtype);
    if (message.extensions) {
      obj.extensions = message.extensions.map((e) =>
        e ? Extension.toJSON(e) : undefined
      );
    } else {
      obj.extensions = [];
    }
    message.templateDb !== undefined && (obj.templateDb = message.templateDb);
    message.deletionProtection !== undefined &&
      (obj.deletionProtection = message.deletionProtection);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Database>, I>>(object: I): Database {
    const message = { ...baseDatabase } as Database;
    message.name = object.name ?? "";
    message.clusterId = object.clusterId ?? "";
    message.owner = object.owner ?? "";
    message.lcCollate = object.lcCollate ?? "";
    message.lcCtype = object.lcCtype ?? "";
    message.extensions =
      object.extensions?.map((e) => Extension.fromPartial(e)) || [];
    message.templateDb = object.templateDb ?? "";
    message.deletionProtection = object.deletionProtection ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Database.$type, Database);

const baseExtension: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.Extension",
  name: "",
  version: "",
};

export const Extension = {
  $type: "yandex.cloud.mdb.postgresql.v1.Extension" as const,

  encode(
    message: Extension,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Extension {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExtension } as Extension;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Extension {
    const message = { ...baseExtension } as Extension;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.version =
      object.version !== undefined && object.version !== null
        ? String(object.version)
        : "";
    return message;
  },

  toJSON(message: Extension): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.version !== undefined && (obj.version = message.version);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Extension>, I>>(
    object: I
  ): Extension {
    const message = { ...baseExtension } as Extension;
    message.name = object.name ?? "";
    message.version = object.version ?? "";
    return message;
  },
};

messageTypeRegistry.set(Extension.$type, Extension);

const baseDatabaseSpec: object = {
  $type: "yandex.cloud.mdb.postgresql.v1.DatabaseSpec",
  name: "",
  owner: "",
  lcCollate: "",
  lcCtype: "",
  templateDb: "",
};

export const DatabaseSpec = {
  $type: "yandex.cloud.mdb.postgresql.v1.DatabaseSpec" as const,

  encode(
    message: DatabaseSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.lcCollate !== "") {
      writer.uint32(26).string(message.lcCollate);
    }
    if (message.lcCtype !== "") {
      writer.uint32(34).string(message.lcCtype);
    }
    for (const v of message.extensions) {
      Extension.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.templateDb !== "") {
      writer.uint32(50).string(message.templateDb);
    }
    if (message.deletionProtection !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.deletionProtection!,
        },
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DatabaseSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDatabaseSpec } as DatabaseSpec;
    message.extensions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.lcCollate = reader.string();
          break;
        case 4:
          message.lcCtype = reader.string();
          break;
        case 5:
          message.extensions.push(Extension.decode(reader, reader.uint32()));
          break;
        case 6:
          message.templateDb = reader.string();
          break;
        case 7:
          message.deletionProtection = BoolValue.decode(
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

  fromJSON(object: any): DatabaseSpec {
    const message = { ...baseDatabaseSpec } as DatabaseSpec;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.owner =
      object.owner !== undefined && object.owner !== null
        ? String(object.owner)
        : "";
    message.lcCollate =
      object.lcCollate !== undefined && object.lcCollate !== null
        ? String(object.lcCollate)
        : "";
    message.lcCtype =
      object.lcCtype !== undefined && object.lcCtype !== null
        ? String(object.lcCtype)
        : "";
    message.extensions = (object.extensions ?? []).map((e: any) =>
      Extension.fromJSON(e)
    );
    message.templateDb =
      object.templateDb !== undefined && object.templateDb !== null
        ? String(object.templateDb)
        : "";
    message.deletionProtection =
      object.deletionProtection !== undefined &&
      object.deletionProtection !== null
        ? Boolean(object.deletionProtection)
        : undefined;
    return message;
  },

  toJSON(message: DatabaseSpec): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.owner !== undefined && (obj.owner = message.owner);
    message.lcCollate !== undefined && (obj.lcCollate = message.lcCollate);
    message.lcCtype !== undefined && (obj.lcCtype = message.lcCtype);
    if (message.extensions) {
      obj.extensions = message.extensions.map((e) =>
        e ? Extension.toJSON(e) : undefined
      );
    } else {
      obj.extensions = [];
    }
    message.templateDb !== undefined && (obj.templateDb = message.templateDb);
    message.deletionProtection !== undefined &&
      (obj.deletionProtection = message.deletionProtection);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DatabaseSpec>, I>>(
    object: I
  ): DatabaseSpec {
    const message = { ...baseDatabaseSpec } as DatabaseSpec;
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    message.lcCollate = object.lcCollate ?? "";
    message.lcCtype = object.lcCtype ?? "";
    message.extensions =
      object.extensions?.map((e) => Extension.fromPartial(e)) || [];
    message.templateDb = object.templateDb ?? "";
    message.deletionProtection = object.deletionProtection ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(DatabaseSpec.$type, DatabaseSpec);

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
