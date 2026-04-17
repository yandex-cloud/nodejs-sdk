/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { TLSParams, UserPasswordAuth } from './common';

export const protobufPackage = 'yandex.cloud.connectionmanager.v1';

export interface MySQLAuth {
    userPassword?: UserPasswordAuth | undefined;
}

export interface MySQLCluster {
    tlsParams?: TLSParams;
    hosts: MySQLCluster_Host[];
}

export interface MySQLCluster_Host {
    host: string;
    port: number;
    role: MySQLCluster_Host_Role;
    health: MySQLCluster_Host_Health;
}

export enum MySQLCluster_Host_Role {
    ROLE_UNSPECIFIED = 0,
    MASTER = 1,
    REPLICA = 2,
    UNRECOGNIZED = -1,
}

export function mySQLCluster_Host_RoleFromJSON(object: any): MySQLCluster_Host_Role {
    switch (object) {
        case 0:
        case 'ROLE_UNSPECIFIED':
            return MySQLCluster_Host_Role.ROLE_UNSPECIFIED;
        case 1:
        case 'MASTER':
            return MySQLCluster_Host_Role.MASTER;
        case 2:
        case 'REPLICA':
            return MySQLCluster_Host_Role.REPLICA;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return MySQLCluster_Host_Role.UNRECOGNIZED;
    }
}

export function mySQLCluster_Host_RoleToJSON(object: MySQLCluster_Host_Role): string {
    switch (object) {
        case MySQLCluster_Host_Role.ROLE_UNSPECIFIED:
            return 'ROLE_UNSPECIFIED';
        case MySQLCluster_Host_Role.MASTER:
            return 'MASTER';
        case MySQLCluster_Host_Role.REPLICA:
            return 'REPLICA';
        default:
            return 'UNKNOWN';
    }
}

export enum MySQLCluster_Host_Health {
    HEALTH_UNSPECIFIED = 0,
    ALIVE = 1,
    DEAD = 2,
    DEGRADED = 3,
    READONLY = 4,
    UNRECOGNIZED = -1,
}

export function mySQLCluster_Host_HealthFromJSON(object: any): MySQLCluster_Host_Health {
    switch (object) {
        case 0:
        case 'HEALTH_UNSPECIFIED':
            return MySQLCluster_Host_Health.HEALTH_UNSPECIFIED;
        case 1:
        case 'ALIVE':
            return MySQLCluster_Host_Health.ALIVE;
        case 2:
        case 'DEAD':
            return MySQLCluster_Host_Health.DEAD;
        case 3:
        case 'DEGRADED':
            return MySQLCluster_Host_Health.DEGRADED;
        case 4:
        case 'READONLY':
            return MySQLCluster_Host_Health.READONLY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return MySQLCluster_Host_Health.UNRECOGNIZED;
    }
}

export function mySQLCluster_Host_HealthToJSON(object: MySQLCluster_Host_Health): string {
    switch (object) {
        case MySQLCluster_Host_Health.HEALTH_UNSPECIFIED:
            return 'HEALTH_UNSPECIFIED';
        case MySQLCluster_Host_Health.ALIVE:
            return 'ALIVE';
        case MySQLCluster_Host_Health.DEAD:
            return 'DEAD';
        case MySQLCluster_Host_Health.DEGRADED:
            return 'DEGRADED';
        case MySQLCluster_Host_Health.READONLY:
            return 'READONLY';
        default:
            return 'UNKNOWN';
    }
}

export interface MySQLConnection {
    /**
     * When creating/updating Connection, the field "cluster" is mutually
     * exclusive with "managed_cluster_id".
     */
    cluster?: MySQLCluster;
    /**
     * When creating/updating Connection, the field "managed_cluster_id" is
     * mutually exclusive with "cluster".
     */
    managedClusterId: string;
    auth?: MySQLAuth;
    databases: string[];
}

const baseMySQLAuth: object = {};

export const MySQLAuth: {
    encode(message: MySQLAuth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MySQLAuth;
    fromJSON(object: any): MySQLAuth;
    toJSON(message: MySQLAuth): unknown;
    fromPartial<I extends Exact<DeepPartial<MySQLAuth>, I>>(object: I): MySQLAuth;
} = {
    encode(message: MySQLAuth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userPassword !== undefined) {
            UserPasswordAuth.encode(message.userPassword, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MySQLAuth {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMySQLAuth } as MySQLAuth;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userPassword = UserPasswordAuth.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MySQLAuth {
        const message = { ...baseMySQLAuth } as MySQLAuth;
        message.userPassword =
            object.userPassword !== undefined && object.userPassword !== null
                ? UserPasswordAuth.fromJSON(object.userPassword)
                : undefined;
        return message;
    },

    toJSON(message: MySQLAuth): unknown {
        const obj: any = {};
        message.userPassword !== undefined &&
            (obj.userPassword = message.userPassword
                ? UserPasswordAuth.toJSON(message.userPassword)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MySQLAuth>, I>>(object: I): MySQLAuth {
        const message = { ...baseMySQLAuth } as MySQLAuth;
        message.userPassword =
            object.userPassword !== undefined && object.userPassword !== null
                ? UserPasswordAuth.fromPartial(object.userPassword)
                : undefined;
        return message;
    },
};

const baseMySQLCluster: object = {};

export const MySQLCluster: {
    encode(message: MySQLCluster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MySQLCluster;
    fromJSON(object: any): MySQLCluster;
    toJSON(message: MySQLCluster): unknown;
    fromPartial<I extends Exact<DeepPartial<MySQLCluster>, I>>(object: I): MySQLCluster;
} = {
    encode(message: MySQLCluster, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.tlsParams !== undefined) {
            TLSParams.encode(message.tlsParams, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.hosts) {
            MySQLCluster_Host.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MySQLCluster {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMySQLCluster } as MySQLCluster;
        message.hosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.tlsParams = TLSParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.hosts.push(MySQLCluster_Host.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MySQLCluster {
        const message = { ...baseMySQLCluster } as MySQLCluster;
        message.tlsParams =
            object.tlsParams !== undefined && object.tlsParams !== null
                ? TLSParams.fromJSON(object.tlsParams)
                : undefined;
        message.hosts = (object.hosts ?? []).map((e: any) => MySQLCluster_Host.fromJSON(e));
        return message;
    },

    toJSON(message: MySQLCluster): unknown {
        const obj: any = {};
        message.tlsParams !== undefined &&
            (obj.tlsParams = message.tlsParams ? TLSParams.toJSON(message.tlsParams) : undefined);
        if (message.hosts) {
            obj.hosts = message.hosts.map((e) => (e ? MySQLCluster_Host.toJSON(e) : undefined));
        } else {
            obj.hosts = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MySQLCluster>, I>>(object: I): MySQLCluster {
        const message = { ...baseMySQLCluster } as MySQLCluster;
        message.tlsParams =
            object.tlsParams !== undefined && object.tlsParams !== null
                ? TLSParams.fromPartial(object.tlsParams)
                : undefined;
        message.hosts = object.hosts?.map((e) => MySQLCluster_Host.fromPartial(e)) || [];
        return message;
    },
};

const baseMySQLCluster_Host: object = { host: '', port: 0, role: 0, health: 0 };

export const MySQLCluster_Host: {
    encode(message: MySQLCluster_Host, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MySQLCluster_Host;
    fromJSON(object: any): MySQLCluster_Host;
    toJSON(message: MySQLCluster_Host): unknown;
    fromPartial<I extends Exact<DeepPartial<MySQLCluster_Host>, I>>(object: I): MySQLCluster_Host;
} = {
    encode(message: MySQLCluster_Host, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.host !== '') {
            writer.uint32(10).string(message.host);
        }
        if (message.port !== 0) {
            writer.uint32(16).int64(message.port);
        }
        if (message.role !== 0) {
            writer.uint32(24).int32(message.role);
        }
        if (message.health !== 0) {
            writer.uint32(32).int32(message.health);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MySQLCluster_Host {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMySQLCluster_Host } as MySQLCluster_Host;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.host = reader.string();
                    break;
                case 2:
                    message.port = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.role = reader.int32() as any;
                    break;
                case 4:
                    message.health = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MySQLCluster_Host {
        const message = { ...baseMySQLCluster_Host } as MySQLCluster_Host;
        message.host = object.host !== undefined && object.host !== null ? String(object.host) : '';
        message.port = object.port !== undefined && object.port !== null ? Number(object.port) : 0;
        message.role =
            object.role !== undefined && object.role !== null
                ? mySQLCluster_Host_RoleFromJSON(object.role)
                : 0;
        message.health =
            object.health !== undefined && object.health !== null
                ? mySQLCluster_Host_HealthFromJSON(object.health)
                : 0;
        return message;
    },

    toJSON(message: MySQLCluster_Host): unknown {
        const obj: any = {};
        message.host !== undefined && (obj.host = message.host);
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.role !== undefined && (obj.role = mySQLCluster_Host_RoleToJSON(message.role));
        message.health !== undefined &&
            (obj.health = mySQLCluster_Host_HealthToJSON(message.health));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MySQLCluster_Host>, I>>(object: I): MySQLCluster_Host {
        const message = { ...baseMySQLCluster_Host } as MySQLCluster_Host;
        message.host = object.host ?? '';
        message.port = object.port ?? 0;
        message.role = object.role ?? 0;
        message.health = object.health ?? 0;
        return message;
    },
};

const baseMySQLConnection: object = { managedClusterId: '', databases: '' };

export const MySQLConnection: {
    encode(message: MySQLConnection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MySQLConnection;
    fromJSON(object: any): MySQLConnection;
    toJSON(message: MySQLConnection): unknown;
    fromPartial<I extends Exact<DeepPartial<MySQLConnection>, I>>(object: I): MySQLConnection;
} = {
    encode(message: MySQLConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.cluster !== undefined) {
            MySQLCluster.encode(message.cluster, writer.uint32(10).fork()).ldelim();
        }
        if (message.managedClusterId !== '') {
            writer.uint32(18).string(message.managedClusterId);
        }
        if (message.auth !== undefined) {
            MySQLAuth.encode(message.auth, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.databases) {
            writer.uint32(34).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MySQLConnection {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMySQLConnection } as MySQLConnection;
        message.databases = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cluster = MySQLCluster.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.managedClusterId = reader.string();
                    break;
                case 3:
                    message.auth = MySQLAuth.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.databases.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MySQLConnection {
        const message = { ...baseMySQLConnection } as MySQLConnection;
        message.cluster =
            object.cluster !== undefined && object.cluster !== null
                ? MySQLCluster.fromJSON(object.cluster)
                : undefined;
        message.managedClusterId =
            object.managedClusterId !== undefined && object.managedClusterId !== null
                ? String(object.managedClusterId)
                : '';
        message.auth =
            object.auth !== undefined && object.auth !== null
                ? MySQLAuth.fromJSON(object.auth)
                : undefined;
        message.databases = (object.databases ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: MySQLConnection): unknown {
        const obj: any = {};
        message.cluster !== undefined &&
            (obj.cluster = message.cluster ? MySQLCluster.toJSON(message.cluster) : undefined);
        message.managedClusterId !== undefined && (obj.managedClusterId = message.managedClusterId);
        message.auth !== undefined &&
            (obj.auth = message.auth ? MySQLAuth.toJSON(message.auth) : undefined);
        if (message.databases) {
            obj.databases = message.databases.map((e) => e);
        } else {
            obj.databases = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MySQLConnection>, I>>(object: I): MySQLConnection {
        const message = { ...baseMySQLConnection } as MySQLConnection;
        message.cluster =
            object.cluster !== undefined && object.cluster !== null
                ? MySQLCluster.fromPartial(object.cluster)
                : undefined;
        message.managedClusterId = object.managedClusterId ?? '';
        message.auth =
            object.auth !== undefined && object.auth !== null
                ? MySQLAuth.fromPartial(object.auth)
                : undefined;
        message.databases = object.databases?.map((e) => e) || [];
        return message;
    },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

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

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
