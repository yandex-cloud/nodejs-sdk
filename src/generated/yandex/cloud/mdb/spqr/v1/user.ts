/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Int64Value } from '../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.mdb.spqr.v1';

/**
 * A SPQR User resource. For more information, see the
 * [Developer's Guide](/docs/managed-spqr/concepts).
 */
export interface User {
    /** Name of the SPQR user. */
    name: string;
    /** ID of the SPQR cluster the user belongs to. */
    clusterId: string;
    /** Set of permissions granted to the user. */
    permissions: Permission[];
    /** SPQR Settings for this user */
    settings?: UserSettings;
    /** User grants */
    grants: string[];
}

export interface Permission {
    /** Name of the database that the permission grants access to. */
    databaseName: string;
}

export interface UserSpec {
    /** Name of the SPQR user. */
    name: string;
    /** Password of the SPQR user. */
    password: string;
    /** Set of permissions to grant to the user. */
    permissions: Permission[];
    /** SPQR Settings for this user */
    settings?: UserSettings;
    /** User grants */
    grants: string[];
}

export interface UserSettings {
    connectionLimit?: number;
    connectionRetries?: number;
}

const baseUser: object = { name: '', clusterId: '', grants: '' };

export const User = {
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
        if (message.settings !== undefined) {
            UserSettings.encode(message.settings, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.grants) {
            writer.uint32(42).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): User {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUser } as User;
        message.permissions = [];
        message.grants = [];
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
                    message.settings = UserSettings.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.grants.push(reader.string());
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
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? UserSettings.fromJSON(object.settings)
                : undefined;
        message.grants = (object.grants ?? []).map((e: any) => String(e));
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
        message.settings !== undefined &&
            (obj.settings = message.settings ? UserSettings.toJSON(message.settings) : undefined);
        if (message.grants) {
            obj.grants = message.grants.map((e) => e);
        } else {
            obj.grants = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
        const message = { ...baseUser } as User;
        message.name = object.name ?? '';
        message.clusterId = object.clusterId ?? '';
        message.permissions = object.permissions?.map((e) => Permission.fromPartial(e)) || [];
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? UserSettings.fromPartial(object.settings)
                : undefined;
        message.grants = object.grants?.map((e) => e) || [];
        return message;
    },
};

const basePermission: object = { databaseName: '' };

export const Permission = {
    encode(message: Permission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.databaseName !== '') {
            writer.uint32(10).string(message.databaseName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Permission {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePermission } as Permission;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseName = reader.string();
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
        return message;
    },

    toJSON(message: Permission): unknown {
        const obj: any = {};
        message.databaseName !== undefined && (obj.databaseName = message.databaseName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Permission>, I>>(object: I): Permission {
        const message = { ...basePermission } as Permission;
        message.databaseName = object.databaseName ?? '';
        return message;
    },
};

const baseUserSpec: object = { name: '', password: '', grants: '' };

export const UserSpec = {
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
        if (message.settings !== undefined) {
            UserSettings.encode(message.settings, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.grants) {
            writer.uint32(42).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UserSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUserSpec } as UserSpec;
        message.permissions = [];
        message.grants = [];
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
                    message.settings = UserSettings.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.grants.push(reader.string());
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
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? UserSettings.fromJSON(object.settings)
                : undefined;
        message.grants = (object.grants ?? []).map((e: any) => String(e));
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
        message.settings !== undefined &&
            (obj.settings = message.settings ? UserSettings.toJSON(message.settings) : undefined);
        if (message.grants) {
            obj.grants = message.grants.map((e) => e);
        } else {
            obj.grants = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UserSpec>, I>>(object: I): UserSpec {
        const message = { ...baseUserSpec } as UserSpec;
        message.name = object.name ?? '';
        message.password = object.password ?? '';
        message.permissions = object.permissions?.map((e) => Permission.fromPartial(e)) || [];
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? UserSettings.fromPartial(object.settings)
                : undefined;
        message.grants = object.grants?.map((e) => e) || [];
        return message;
    },
};

const baseUserSettings: object = {};

export const UserSettings = {
    encode(message: UserSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.connectionLimit !== undefined) {
            Int64Value.encode(
                { value: message.connectionLimit! },
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.connectionRetries !== undefined) {
            Int64Value.encode(
                { value: message.connectionRetries! },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UserSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUserSettings } as UserSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionLimit = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.connectionRetries = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UserSettings {
        const message = { ...baseUserSettings } as UserSettings;
        message.connectionLimit =
            object.connectionLimit !== undefined && object.connectionLimit !== null
                ? Number(object.connectionLimit)
                : undefined;
        message.connectionRetries =
            object.connectionRetries !== undefined && object.connectionRetries !== null
                ? Number(object.connectionRetries)
                : undefined;
        return message;
    },

    toJSON(message: UserSettings): unknown {
        const obj: any = {};
        message.connectionLimit !== undefined && (obj.connectionLimit = message.connectionLimit);
        message.connectionRetries !== undefined &&
            (obj.connectionRetries = message.connectionRetries);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UserSettings>, I>>(object: I): UserSettings {
        const message = { ...baseUserSettings } as UserSettings;
        message.connectionLimit = object.connectionLimit ?? undefined;
        message.connectionRetries = object.connectionRetries ?? undefined;
        return message;
    },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
