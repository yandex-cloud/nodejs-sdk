/* eslint-disable */
import { messageTypeRegistry } from "../../../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "yandex.cloud.mdb.mysql.v1alpha";

/** A MySQL user. For more information, see the [documentation](/docs/managed-mysql/concepts). */
export interface User {
  $type: "yandex.cloud.mdb.mysql.v1alpha.User";
  /** Name of the MySQL user. */
  name: string;
  /** ID of the MySQL cluster the user belongs to. */
  clusterId: string;
  /** Set of permissions granted to the user. */
  permissions: Permission[];
}

export interface Permission {
  $type: "yandex.cloud.mdb.mysql.v1alpha.Permission";
  /** Name of the database that the permission grants access to. */
  databaseName: string;
  /** Roles granted to the user within the database. */
  roles: Permission_Privilege[];
}

export enum Permission_Privilege {
  PRIVILEGE_UNSPECIFIED = 0,
  /** ALL_PRIVILEGES - All privileges that can be made available to the user. */
  ALL_PRIVILEGES = 1,
  /** ALTER - Altering tables. */
  ALTER = 2,
  /** ALTER_ROUTINE - Altering stored routines (stored procedures and functions). */
  ALTER_ROUTINE = 3,
  /** CREATE - Creating tables or indexes. */
  CREATE = 4,
  /** CREATE_ROUTINE - Creating stored routines. */
  CREATE_ROUTINE = 5,
  /** CREATE_TEMPORARY_TABLES - Creating temporary tables. */
  CREATE_TEMPORARY_TABLES = 6,
  /** CREATE_VIEW - Creating views. */
  CREATE_VIEW = 7,
  /** DELETE - Deleting tables. */
  DELETE = 8,
  /** DROP - Removing tables or views. */
  DROP = 9,
  /** EVENT - Creating, altering, dropping, or displaying events for the Event Scheduler. */
  EVENT = 10,
  /** EXECUTE - Executing stored routines. */
  EXECUTE = 11,
  /** INDEX - Creating and removing indexes. */
  INDEX = 12,
  /** INSERT - Inserting rows into the database. */
  INSERT = 13,
  /** LOCK_TABLES - Using LOCK TABLES statement for tables available with SELECT privilege. */
  LOCK_TABLES = 14,
  /**
   * SELECT - Selecting rows from tables.
   *
   * Some SELECT statements can be allowed without the SELECT privilege. All statements that read column values require the SELECT privilege. See details in [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/privileges-provided.html#priv_select).
   */
  SELECT = 15,
  /** SHOW_VIEW - Using the SHOW CREATE VIEW statement. Also needed for views used with EXPLAIN. */
  SHOW_VIEW = 16,
  /** TRIGGER - Creating, removing, executing, or displaying triggers for a table. */
  TRIGGER = 17,
  /** UPDATE - Updating rows in the database. */
  UPDATE = 18,
  UNRECOGNIZED = -1,
}

export function permission_PrivilegeFromJSON(
  object: any
): Permission_Privilege {
  switch (object) {
    case 0:
    case "PRIVILEGE_UNSPECIFIED":
      return Permission_Privilege.PRIVILEGE_UNSPECIFIED;
    case 1:
    case "ALL_PRIVILEGES":
      return Permission_Privilege.ALL_PRIVILEGES;
    case 2:
    case "ALTER":
      return Permission_Privilege.ALTER;
    case 3:
    case "ALTER_ROUTINE":
      return Permission_Privilege.ALTER_ROUTINE;
    case 4:
    case "CREATE":
      return Permission_Privilege.CREATE;
    case 5:
    case "CREATE_ROUTINE":
      return Permission_Privilege.CREATE_ROUTINE;
    case 6:
    case "CREATE_TEMPORARY_TABLES":
      return Permission_Privilege.CREATE_TEMPORARY_TABLES;
    case 7:
    case "CREATE_VIEW":
      return Permission_Privilege.CREATE_VIEW;
    case 8:
    case "DELETE":
      return Permission_Privilege.DELETE;
    case 9:
    case "DROP":
      return Permission_Privilege.DROP;
    case 10:
    case "EVENT":
      return Permission_Privilege.EVENT;
    case 11:
    case "EXECUTE":
      return Permission_Privilege.EXECUTE;
    case 12:
    case "INDEX":
      return Permission_Privilege.INDEX;
    case 13:
    case "INSERT":
      return Permission_Privilege.INSERT;
    case 14:
    case "LOCK_TABLES":
      return Permission_Privilege.LOCK_TABLES;
    case 15:
    case "SELECT":
      return Permission_Privilege.SELECT;
    case 16:
    case "SHOW_VIEW":
      return Permission_Privilege.SHOW_VIEW;
    case 17:
    case "TRIGGER":
      return Permission_Privilege.TRIGGER;
    case 18:
    case "UPDATE":
      return Permission_Privilege.UPDATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Permission_Privilege.UNRECOGNIZED;
  }
}

export function permission_PrivilegeToJSON(
  object: Permission_Privilege
): string {
  switch (object) {
    case Permission_Privilege.PRIVILEGE_UNSPECIFIED:
      return "PRIVILEGE_UNSPECIFIED";
    case Permission_Privilege.ALL_PRIVILEGES:
      return "ALL_PRIVILEGES";
    case Permission_Privilege.ALTER:
      return "ALTER";
    case Permission_Privilege.ALTER_ROUTINE:
      return "ALTER_ROUTINE";
    case Permission_Privilege.CREATE:
      return "CREATE";
    case Permission_Privilege.CREATE_ROUTINE:
      return "CREATE_ROUTINE";
    case Permission_Privilege.CREATE_TEMPORARY_TABLES:
      return "CREATE_TEMPORARY_TABLES";
    case Permission_Privilege.CREATE_VIEW:
      return "CREATE_VIEW";
    case Permission_Privilege.DELETE:
      return "DELETE";
    case Permission_Privilege.DROP:
      return "DROP";
    case Permission_Privilege.EVENT:
      return "EVENT";
    case Permission_Privilege.EXECUTE:
      return "EXECUTE";
    case Permission_Privilege.INDEX:
      return "INDEX";
    case Permission_Privilege.INSERT:
      return "INSERT";
    case Permission_Privilege.LOCK_TABLES:
      return "LOCK_TABLES";
    case Permission_Privilege.SELECT:
      return "SELECT";
    case Permission_Privilege.SHOW_VIEW:
      return "SHOW_VIEW";
    case Permission_Privilege.TRIGGER:
      return "TRIGGER";
    case Permission_Privilege.UPDATE:
      return "UPDATE";
    default:
      return "UNKNOWN";
  }
}

export interface UserSpec {
  $type: "yandex.cloud.mdb.mysql.v1alpha.UserSpec";
  /** Name of the MySQL user. */
  name: string;
  /** Password of the MySQL user. */
  password: string;
  /** Set of permissions to grant to the user. */
  permissions: Permission[];
}

const baseUser: object = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.User",
  name: "",
  clusterId: "",
};

export const User = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.User" as const,

  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.clusterId !== "") {
      writer.uint32(18).string(message.clusterId);
    }
    for (const v of message.permissions) {
      Permission.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUser } as User;
    message.permissions = [];
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
          message.permissions.push(Permission.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): User {
    const message = { ...baseUser } as User;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.clusterId =
      object.clusterId !== undefined && object.clusterId !== null
        ? String(object.clusterId)
        : "";
    message.permissions = (object.permissions ?? []).map((e: any) =>
      Permission.fromJSON(e)
    );
    return message;
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.clusterId !== undefined && (obj.clusterId = message.clusterId);
    if (message.permissions) {
      obj.permissions = message.permissions.map((e) =>
        e ? Permission.toJSON(e) : undefined
      );
    } else {
      obj.permissions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = { ...baseUser } as User;
    message.name = object.name ?? "";
    message.clusterId = object.clusterId ?? "";
    message.permissions =
      object.permissions?.map((e) => Permission.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(User.$type, User);

const basePermission: object = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.Permission",
  databaseName: "",
  roles: 0,
};

export const Permission = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.Permission" as const,

  encode(
    message: Permission,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.databaseName !== "") {
      writer.uint32(10).string(message.databaseName);
    }
    writer.uint32(18).fork();
    for (const v of message.roles) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Permission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePermission } as Permission;
    message.roles = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.databaseName = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.roles.push(reader.int32() as any);
            }
          } else {
            message.roles.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Permission {
    const message = { ...basePermission } as Permission;
    message.databaseName =
      object.databaseName !== undefined && object.databaseName !== null
        ? String(object.databaseName)
        : "";
    message.roles = (object.roles ?? []).map((e: any) =>
      permission_PrivilegeFromJSON(e)
    );
    return message;
  },

  toJSON(message: Permission): unknown {
    const obj: any = {};
    message.databaseName !== undefined &&
      (obj.databaseName = message.databaseName);
    if (message.roles) {
      obj.roles = message.roles.map((e) => permission_PrivilegeToJSON(e));
    } else {
      obj.roles = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Permission>, I>>(
    object: I
  ): Permission {
    const message = { ...basePermission } as Permission;
    message.databaseName = object.databaseName ?? "";
    message.roles = object.roles?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Permission.$type, Permission);

const baseUserSpec: object = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.UserSpec",
  name: "",
  password: "",
};

export const UserSpec = {
  $type: "yandex.cloud.mdb.mysql.v1alpha.UserSpec" as const,

  encode(
    message: UserSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    for (const v of message.permissions) {
      Permission.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserSpec } as UserSpec;
    message.permissions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.password = reader.string();
          break;
        case 3:
          message.permissions.push(Permission.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserSpec {
    const message = { ...baseUserSpec } as UserSpec;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.password =
      object.password !== undefined && object.password !== null
        ? String(object.password)
        : "";
    message.permissions = (object.permissions ?? []).map((e: any) =>
      Permission.fromJSON(e)
    );
    return message;
  },

  toJSON(message: UserSpec): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.password !== undefined && (obj.password = message.password);
    if (message.permissions) {
      obj.permissions = message.permissions.map((e) =>
        e ? Permission.toJSON(e) : undefined
      );
    } else {
      obj.permissions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserSpec>, I>>(object: I): UserSpec {
    const message = { ...baseUserSpec } as UserSpec;
    message.name = object.name ?? "";
    message.password = object.password ?? "";
    message.permissions =
      object.permissions?.map((e) => Permission.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(UserSpec.$type, UserSpec);

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
