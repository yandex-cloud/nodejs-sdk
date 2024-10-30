/* eslint-disable */
import { messageTypeRegistry } from '../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.mdb.sqlserver.v1';

/** Set of server roles. */
export enum ServerRole {
    SERVER_ROLE_UNSPECIFIED = 0,
    /**
     * MDB_MONITOR - Effectively grants VIEW SERVER STATE to the login.
     *
     * That gives an ability to use various dynamic management views to monitor server state, including Activity Monitor tool that is built-in into SSMS.
     *
     * No intrusive actions are allowed, so this is pretty safe to grant.
     */
    MDB_MONITOR = 1,
    UNRECOGNIZED = -1,
}

export function serverRoleFromJSON(object: any): ServerRole {
    switch (object) {
        case 0:
        case 'SERVER_ROLE_UNSPECIFIED':
            return ServerRole.SERVER_ROLE_UNSPECIFIED;
        case 1:
        case 'MDB_MONITOR':
            return ServerRole.MDB_MONITOR;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ServerRole.UNRECOGNIZED;
    }
}

export function serverRoleToJSON(object: ServerRole): string {
    switch (object) {
        case ServerRole.SERVER_ROLE_UNSPECIFIED:
            return 'SERVER_ROLE_UNSPECIFIED';
        case ServerRole.MDB_MONITOR:
            return 'MDB_MONITOR';
        default:
            return 'UNKNOWN';
    }
}

/** An SQL Server user. */
export interface User {
    $type: 'yandex.cloud.mdb.sqlserver.v1.User';
    /** Name of the SQL Server user. */
    name: string;
    /** ID of the SQL Server cluster the user belongs to. */
    clusterId: string;
    /** Set of permissions granted to the user. */
    permissions: Permission[];
    /** Set of server roles granted to the login. */
    serverRoles: ServerRole[];
}

export interface Permission {
    $type: 'yandex.cloud.mdb.sqlserver.v1.Permission';
    /** Name of the database the permission grants access to. */
    databaseName: string;
    /** Roles granted to the user within the database. */
    roles: Permission_Role[];
}

/** Role granted to the user within the database. */
export enum Permission_Role {
    ROLE_UNSPECIFIED = 0,
    /** DB_OWNER - Members of this fixed database role can perform all configuration and maintenance activities on a database and can also drop a database in SQL Server. */
    DB_OWNER = 1,
    /** DB_SECURITYADMIN - Members of this fixed database role can modify role membership for custom roles only and manage permissions. They can potentially elevate their privileges and their actions should be monitored. */
    DB_SECURITYADMIN = 2,
    /** DB_ACCESSADMIN - Members of this fixed database role can add or remove access to a database for Windows logins, Windows groups, and SQL Server logins. */
    DB_ACCESSADMIN = 3,
    /** DB_BACKUPOPERATOR - Members of this fixed database role can back up the database. */
    DB_BACKUPOPERATOR = 4,
    /** DB_DDLADMIN - Members of this fixed database role can run any Data Definition Language (DDL) command in a database. */
    DB_DDLADMIN = 5,
    /** DB_DATAWRITER - Members of this fixed database role can add, delete, or change data in all user tables. */
    DB_DATAWRITER = 6,
    /** DB_DATAREADER - Members of this fixed database role can read all data from all user tables. */
    DB_DATAREADER = 7,
    /** DB_DENYDATAWRITER - Members of this fixed database role cannot add, modify, or delete any data in the user tables within a database. A denial has a higher priority than a grant, so you can use this role to quickly restrict one's privileges without explicitly revoking permissions or roles. */
    DB_DENYDATAWRITER = 8,
    /** DB_DENYDATAREADER - Members of this fixed database role cannot read any data in the user tables within a database. A denial has a higher priority than a grant, so you can use this role to quickly restrict one's privileges without explicitly revoking permissions or roles. */
    DB_DENYDATAREADER = 9,
    UNRECOGNIZED = -1,
}

export function permission_RoleFromJSON(object: any): Permission_Role {
    switch (object) {
        case 0:
        case 'ROLE_UNSPECIFIED':
            return Permission_Role.ROLE_UNSPECIFIED;
        case 1:
        case 'DB_OWNER':
            return Permission_Role.DB_OWNER;
        case 2:
        case 'DB_SECURITYADMIN':
            return Permission_Role.DB_SECURITYADMIN;
        case 3:
        case 'DB_ACCESSADMIN':
            return Permission_Role.DB_ACCESSADMIN;
        case 4:
        case 'DB_BACKUPOPERATOR':
            return Permission_Role.DB_BACKUPOPERATOR;
        case 5:
        case 'DB_DDLADMIN':
            return Permission_Role.DB_DDLADMIN;
        case 6:
        case 'DB_DATAWRITER':
            return Permission_Role.DB_DATAWRITER;
        case 7:
        case 'DB_DATAREADER':
            return Permission_Role.DB_DATAREADER;
        case 8:
        case 'DB_DENYDATAWRITER':
            return Permission_Role.DB_DENYDATAWRITER;
        case 9:
        case 'DB_DENYDATAREADER':
            return Permission_Role.DB_DENYDATAREADER;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Permission_Role.UNRECOGNIZED;
    }
}

export function permission_RoleToJSON(object: Permission_Role): string {
    switch (object) {
        case Permission_Role.ROLE_UNSPECIFIED:
            return 'ROLE_UNSPECIFIED';
        case Permission_Role.DB_OWNER:
            return 'DB_OWNER';
        case Permission_Role.DB_SECURITYADMIN:
            return 'DB_SECURITYADMIN';
        case Permission_Role.DB_ACCESSADMIN:
            return 'DB_ACCESSADMIN';
        case Permission_Role.DB_BACKUPOPERATOR:
            return 'DB_BACKUPOPERATOR';
        case Permission_Role.DB_DDLADMIN:
            return 'DB_DDLADMIN';
        case Permission_Role.DB_DATAWRITER:
            return 'DB_DATAWRITER';
        case Permission_Role.DB_DATAREADER:
            return 'DB_DATAREADER';
        case Permission_Role.DB_DENYDATAWRITER:
            return 'DB_DENYDATAWRITER';
        case Permission_Role.DB_DENYDATAREADER:
            return 'DB_DENYDATAREADER';
        default:
            return 'UNKNOWN';
    }
}

export interface UserSpec {
    $type: 'yandex.cloud.mdb.sqlserver.v1.UserSpec';
    /** Name of the SQL Server user. */
    name: string;
    /** Password of the SQL Server user. */
    password: string;
    /** Set of permissions to grant to the user. */
    permissions: Permission[];
    /** Set of server roles. */
    serverRoles: ServerRole[];
}

const baseUser: object = {
    $type: 'yandex.cloud.mdb.sqlserver.v1.User',
    name: '',
    clusterId: '',
    serverRoles: 0,
};

export const User = {
    $type: 'yandex.cloud.mdb.sqlserver.v1.User' as const,

    encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        for (const v of message.permissions) {
            Permission.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        writer.uint32(34).fork();
        for (const v of message.serverRoles) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): User {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUser } as User;
        message.permissions = [];
        message.serverRoles = [];
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
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.serverRoles.push(reader.int32() as any);
                        }
                    } else {
                        message.serverRoles.push(reader.int32() as any);
                    }
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
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.permissions = (object.permissions ?? []).map((e: any) => Permission.fromJSON(e));
        message.serverRoles = (object.serverRoles ?? []).map((e: any) => serverRoleFromJSON(e));
        return message;
    },

    toJSON(message: User): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.permissions) {
            obj.permissions = message.permissions.map((e) =>
                e ? Permission.toJSON(e) : undefined,
            );
        } else {
            obj.permissions = [];
        }
        if (message.serverRoles) {
            obj.serverRoles = message.serverRoles.map((e) => serverRoleToJSON(e));
        } else {
            obj.serverRoles = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
        const message = { ...baseUser } as User;
        message.name = object.name ?? '';
        message.clusterId = object.clusterId ?? '';
        message.permissions = object.permissions?.map((e) => Permission.fromPartial(e)) || [];
        message.serverRoles = object.serverRoles?.map((e) => e) || [];
        return message;
    },
};

messageTypeRegistry.set(User.$type, User);

const basePermission: object = {
    $type: 'yandex.cloud.mdb.sqlserver.v1.Permission',
    databaseName: '',
    roles: 0,
};

export const Permission = {
    $type: 'yandex.cloud.mdb.sqlserver.v1.Permission' as const,

    encode(message: Permission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.databaseName !== '') {
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
                : '';
        message.roles = (object.roles ?? []).map((e: any) => permission_RoleFromJSON(e));
        return message;
    },

    toJSON(message: Permission): unknown {
        const obj: any = {};
        message.databaseName !== undefined && (obj.databaseName = message.databaseName);
        if (message.roles) {
            obj.roles = message.roles.map((e) => permission_RoleToJSON(e));
        } else {
            obj.roles = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Permission>, I>>(object: I): Permission {
        const message = { ...basePermission } as Permission;
        message.databaseName = object.databaseName ?? '';
        message.roles = object.roles?.map((e) => e) || [];
        return message;
    },
};

messageTypeRegistry.set(Permission.$type, Permission);

const baseUserSpec: object = {
    $type: 'yandex.cloud.mdb.sqlserver.v1.UserSpec',
    name: '',
    password: '',
    serverRoles: 0,
};

export const UserSpec = {
    $type: 'yandex.cloud.mdb.sqlserver.v1.UserSpec' as const,

    encode(message: UserSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.password !== '') {
            writer.uint32(18).string(message.password);
        }
        for (const v of message.permissions) {
            Permission.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        writer.uint32(34).fork();
        for (const v of message.serverRoles) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UserSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUserSpec } as UserSpec;
        message.permissions = [];
        message.serverRoles = [];
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
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.serverRoles.push(reader.int32() as any);
                        }
                    } else {
                        message.serverRoles.push(reader.int32() as any);
                    }
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
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
                : '';
        message.permissions = (object.permissions ?? []).map((e: any) => Permission.fromJSON(e));
        message.serverRoles = (object.serverRoles ?? []).map((e: any) => serverRoleFromJSON(e));
        return message;
    },

    toJSON(message: UserSpec): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.password !== undefined && (obj.password = message.password);
        if (message.permissions) {
            obj.permissions = message.permissions.map((e) =>
                e ? Permission.toJSON(e) : undefined,
            );
        } else {
            obj.permissions = [];
        }
        if (message.serverRoles) {
            obj.serverRoles = message.serverRoles.map((e) => serverRoleToJSON(e));
        } else {
            obj.serverRoles = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UserSpec>, I>>(object: I): UserSpec {
        const message = { ...baseUserSpec } as UserSpec;
        message.name = object.name ?? '';
        message.password = object.password ?? '';
        message.permissions = object.permissions?.map((e) => Permission.fromPartial(e)) || [];
        message.serverRoles = object.serverRoles?.map((e) => e) || [];
        return message;
    },
};

messageTypeRegistry.set(UserSpec.$type, UserSpec);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
              Exclude<keyof I, KeysOfUnion<P> | '$type'>,
              never
          >;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
