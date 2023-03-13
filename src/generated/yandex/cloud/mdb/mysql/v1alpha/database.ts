/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.mdb.mysql.v1alpha";

/** A MySQL database. For more information, see the [documentation](/docs/managed-mysql/concepts). */
export interface Database {
  $type: "yandex.cloud.mdb.mysql.v1alpha.Database";
  /** Name of the database. */
  name: string;
  /** ID of the MySQL cluster that the database belongs to. */
  clusterId: string;
}

export interface DatabaseSpec {
  $type: "yandex.cloud.mdb.mysql.v1alpha.DatabaseSpec";
  /** Name of the MySQL database. */
  name: string;
}

const baseDatabase: object = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.Database",
  name: "",
  clusterId: "",
};

export const Database = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.Database" as const,

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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Database {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDatabase } as Database;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.clusterId = reader.string();
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
    return message;
  },

  toJSON(message: Database): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Database>, I>>(object: I): Database {
    const message = { ...baseDatabase } as Database;
    message.name = object.name ?? "";
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Database.$type, Database);

const baseDatabaseSpec: object = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.DatabaseSpec",
  name: "",
};

export const DatabaseSpec = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.DatabaseSpec" as const,

  encode(
    message: DatabaseSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DatabaseSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDatabaseSpec } as DatabaseSpec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
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
    return message;
  },

  toJSON(message: DatabaseSpec): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DatabaseSpec>, I>>(
    object: I
  ): DatabaseSpec {
    const message = { ...baseDatabaseSpec } as DatabaseSpec;
    message.name = object.name ?? "";
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
