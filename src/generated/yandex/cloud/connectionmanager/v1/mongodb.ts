/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { TLSParams, UserPasswordAuth } from './common';

export const protobufPackage = 'yandex.cloud.connectionmanager.v1';

export interface MongoDBAuth {
    userPassword?: UserPasswordAuth | undefined;
    authSource: string;
}

export interface MongoDBCluster {
    hosts: MongoDBCluster_Host[];
    tlsParams?: TLSParams;
}

export interface MongoDBCluster_Host {
    host: string;
    port: number;
    role: MongoDBCluster_Host_Role;
    health: MongoDBCluster_Host_Health;
    type: MongoDBCluster_Host_Type;
}

export enum MongoDBCluster_Host_Type {
    TYPE_UNSPECIFIED = 0,
    MONGOD = 1,
    MONGOS = 2,
    MONGOINFRA = 3,
    UNRECOGNIZED = -1,
}

export function mongoDBCluster_Host_TypeFromJSON(object: any): MongoDBCluster_Host_Type {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return MongoDBCluster_Host_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'MONGOD':
            return MongoDBCluster_Host_Type.MONGOD;
        case 2:
        case 'MONGOS':
            return MongoDBCluster_Host_Type.MONGOS;
        case 3:
        case 'MONGOINFRA':
            return MongoDBCluster_Host_Type.MONGOINFRA;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return MongoDBCluster_Host_Type.UNRECOGNIZED;
    }
}

export function mongoDBCluster_Host_TypeToJSON(object: MongoDBCluster_Host_Type): string {
    switch (object) {
        case MongoDBCluster_Host_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case MongoDBCluster_Host_Type.MONGOD:
            return 'MONGOD';
        case MongoDBCluster_Host_Type.MONGOS:
            return 'MONGOS';
        case MongoDBCluster_Host_Type.MONGOINFRA:
            return 'MONGOINFRA';
        default:
            return 'UNKNOWN';
    }
}

export enum MongoDBCluster_Host_Role {
    ROLE_UNSPECIFIED = 0,
    PRIMARY = 1,
    SECONDARY = 2,
    UNRECOGNIZED = -1,
}

export function mongoDBCluster_Host_RoleFromJSON(object: any): MongoDBCluster_Host_Role {
    switch (object) {
        case 0:
        case 'ROLE_UNSPECIFIED':
            return MongoDBCluster_Host_Role.ROLE_UNSPECIFIED;
        case 1:
        case 'PRIMARY':
            return MongoDBCluster_Host_Role.PRIMARY;
        case 2:
        case 'SECONDARY':
            return MongoDBCluster_Host_Role.SECONDARY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return MongoDBCluster_Host_Role.UNRECOGNIZED;
    }
}

export function mongoDBCluster_Host_RoleToJSON(object: MongoDBCluster_Host_Role): string {
    switch (object) {
        case MongoDBCluster_Host_Role.ROLE_UNSPECIFIED:
            return 'ROLE_UNSPECIFIED';
        case MongoDBCluster_Host_Role.PRIMARY:
            return 'PRIMARY';
        case MongoDBCluster_Host_Role.SECONDARY:
            return 'SECONDARY';
        default:
            return 'UNKNOWN';
    }
}

export enum MongoDBCluster_Host_Health {
    HEALTH_UNSPECIFIED = 0,
    ALIVE = 1,
    DEAD = 2,
    DEGRADED = 3,
    UNRECOGNIZED = -1,
}

export function mongoDBCluster_Host_HealthFromJSON(object: any): MongoDBCluster_Host_Health {
    switch (object) {
        case 0:
        case 'HEALTH_UNSPECIFIED':
            return MongoDBCluster_Host_Health.HEALTH_UNSPECIFIED;
        case 1:
        case 'ALIVE':
            return MongoDBCluster_Host_Health.ALIVE;
        case 2:
        case 'DEAD':
            return MongoDBCluster_Host_Health.DEAD;
        case 3:
        case 'DEGRADED':
            return MongoDBCluster_Host_Health.DEGRADED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return MongoDBCluster_Host_Health.UNRECOGNIZED;
    }
}

export function mongoDBCluster_Host_HealthToJSON(object: MongoDBCluster_Host_Health): string {
    switch (object) {
        case MongoDBCluster_Host_Health.HEALTH_UNSPECIFIED:
            return 'HEALTH_UNSPECIFIED';
        case MongoDBCluster_Host_Health.ALIVE:
            return 'ALIVE';
        case MongoDBCluster_Host_Health.DEAD:
            return 'DEAD';
        case MongoDBCluster_Host_Health.DEGRADED:
            return 'DEGRADED';
        default:
            return 'UNKNOWN';
    }
}

export interface MongoDBConnection {
    /**
     * When creating/updating Connection, the field "cluster" is mutually
     * exclusive with "managed_cluster_id".
     */
    cluster?: MongoDBCluster;
    /**
     * When creating/updating Connection, the field "managed_cluster_id" is
     * mutually exclusive with "cluster".
     */
    managedClusterId: string;
    auth?: MongoDBAuth;
    databases: string[];
}

const baseMongoDBAuth: object = { authSource: '' };

export const MongoDBAuth: {
    encode(message: MongoDBAuth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MongoDBAuth;
    fromJSON(object: any): MongoDBAuth;
    toJSON(message: MongoDBAuth): unknown;
    fromPartial<I extends Exact<DeepPartial<MongoDBAuth>, I>>(object: I): MongoDBAuth;
} = {
    encode(message: MongoDBAuth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userPassword !== undefined) {
            UserPasswordAuth.encode(message.userPassword, writer.uint32(10).fork()).ldelim();
        }
        if (message.authSource !== '') {
            writer.uint32(18).string(message.authSource);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongoDBAuth {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongoDBAuth } as MongoDBAuth;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userPassword = UserPasswordAuth.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.authSource = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MongoDBAuth {
        const message = { ...baseMongoDBAuth } as MongoDBAuth;
        message.userPassword =
            object.userPassword !== undefined && object.userPassword !== null
                ? UserPasswordAuth.fromJSON(object.userPassword)
                : undefined;
        message.authSource =
            object.authSource !== undefined && object.authSource !== null
                ? String(object.authSource)
                : '';
        return message;
    },

    toJSON(message: MongoDBAuth): unknown {
        const obj: any = {};
        message.userPassword !== undefined &&
            (obj.userPassword = message.userPassword
                ? UserPasswordAuth.toJSON(message.userPassword)
                : undefined);
        message.authSource !== undefined && (obj.authSource = message.authSource);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongoDBAuth>, I>>(object: I): MongoDBAuth {
        const message = { ...baseMongoDBAuth } as MongoDBAuth;
        message.userPassword =
            object.userPassword !== undefined && object.userPassword !== null
                ? UserPasswordAuth.fromPartial(object.userPassword)
                : undefined;
        message.authSource = object.authSource ?? '';
        return message;
    },
};

const baseMongoDBCluster: object = {};

export const MongoDBCluster: {
    encode(message: MongoDBCluster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MongoDBCluster;
    fromJSON(object: any): MongoDBCluster;
    toJSON(message: MongoDBCluster): unknown;
    fromPartial<I extends Exact<DeepPartial<MongoDBCluster>, I>>(object: I): MongoDBCluster;
} = {
    encode(message: MongoDBCluster, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.hosts) {
            MongoDBCluster_Host.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.tlsParams !== undefined) {
            TLSParams.encode(message.tlsParams, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongoDBCluster {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongoDBCluster } as MongoDBCluster;
        message.hosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hosts.push(MongoDBCluster_Host.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.tlsParams = TLSParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MongoDBCluster {
        const message = { ...baseMongoDBCluster } as MongoDBCluster;
        message.hosts = (object.hosts ?? []).map((e: any) => MongoDBCluster_Host.fromJSON(e));
        message.tlsParams =
            object.tlsParams !== undefined && object.tlsParams !== null
                ? TLSParams.fromJSON(object.tlsParams)
                : undefined;
        return message;
    },

    toJSON(message: MongoDBCluster): unknown {
        const obj: any = {};
        if (message.hosts) {
            obj.hosts = message.hosts.map((e) => (e ? MongoDBCluster_Host.toJSON(e) : undefined));
        } else {
            obj.hosts = [];
        }
        message.tlsParams !== undefined &&
            (obj.tlsParams = message.tlsParams ? TLSParams.toJSON(message.tlsParams) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongoDBCluster>, I>>(object: I): MongoDBCluster {
        const message = { ...baseMongoDBCluster } as MongoDBCluster;
        message.hosts = object.hosts?.map((e) => MongoDBCluster_Host.fromPartial(e)) || [];
        message.tlsParams =
            object.tlsParams !== undefined && object.tlsParams !== null
                ? TLSParams.fromPartial(object.tlsParams)
                : undefined;
        return message;
    },
};

const baseMongoDBCluster_Host: object = { host: '', port: 0, role: 0, health: 0, type: 0 };

export const MongoDBCluster_Host: {
    encode(message: MongoDBCluster_Host, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MongoDBCluster_Host;
    fromJSON(object: any): MongoDBCluster_Host;
    toJSON(message: MongoDBCluster_Host): unknown;
    fromPartial<I extends Exact<DeepPartial<MongoDBCluster_Host>, I>>(object: I): MongoDBCluster_Host;
} = {
    encode(message: MongoDBCluster_Host, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
        if (message.type !== 0) {
            writer.uint32(40).int32(message.type);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongoDBCluster_Host {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongoDBCluster_Host } as MongoDBCluster_Host;
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
                case 5:
                    message.type = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MongoDBCluster_Host {
        const message = { ...baseMongoDBCluster_Host } as MongoDBCluster_Host;
        message.host = object.host !== undefined && object.host !== null ? String(object.host) : '';
        message.port = object.port !== undefined && object.port !== null ? Number(object.port) : 0;
        message.role =
            object.role !== undefined && object.role !== null
                ? mongoDBCluster_Host_RoleFromJSON(object.role)
                : 0;
        message.health =
            object.health !== undefined && object.health !== null
                ? mongoDBCluster_Host_HealthFromJSON(object.health)
                : 0;
        message.type =
            object.type !== undefined && object.type !== null
                ? mongoDBCluster_Host_TypeFromJSON(object.type)
                : 0;
        return message;
    },

    toJSON(message: MongoDBCluster_Host): unknown {
        const obj: any = {};
        message.host !== undefined && (obj.host = message.host);
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.role !== undefined && (obj.role = mongoDBCluster_Host_RoleToJSON(message.role));
        message.health !== undefined &&
            (obj.health = mongoDBCluster_Host_HealthToJSON(message.health));
        message.type !== undefined && (obj.type = mongoDBCluster_Host_TypeToJSON(message.type));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongoDBCluster_Host>, I>>(
        object: I,
    ): MongoDBCluster_Host {
        const message = { ...baseMongoDBCluster_Host } as MongoDBCluster_Host;
        message.host = object.host ?? '';
        message.port = object.port ?? 0;
        message.role = object.role ?? 0;
        message.health = object.health ?? 0;
        message.type = object.type ?? 0;
        return message;
    },
};

const baseMongoDBConnection: object = { managedClusterId: '', databases: '' };

export const MongoDBConnection: {
    encode(message: MongoDBConnection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MongoDBConnection;
    fromJSON(object: any): MongoDBConnection;
    toJSON(message: MongoDBConnection): unknown;
    fromPartial<I extends Exact<DeepPartial<MongoDBConnection>, I>>(object: I): MongoDBConnection;
} = {
    encode(message: MongoDBConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.cluster !== undefined) {
            MongoDBCluster.encode(message.cluster, writer.uint32(10).fork()).ldelim();
        }
        if (message.managedClusterId !== '') {
            writer.uint32(18).string(message.managedClusterId);
        }
        if (message.auth !== undefined) {
            MongoDBAuth.encode(message.auth, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.databases) {
            writer.uint32(34).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MongoDBConnection {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongoDBConnection } as MongoDBConnection;
        message.databases = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cluster = MongoDBCluster.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.managedClusterId = reader.string();
                    break;
                case 3:
                    message.auth = MongoDBAuth.decode(reader, reader.uint32());
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

    fromJSON(object: any): MongoDBConnection {
        const message = { ...baseMongoDBConnection } as MongoDBConnection;
        message.cluster =
            object.cluster !== undefined && object.cluster !== null
                ? MongoDBCluster.fromJSON(object.cluster)
                : undefined;
        message.managedClusterId =
            object.managedClusterId !== undefined && object.managedClusterId !== null
                ? String(object.managedClusterId)
                : '';
        message.auth =
            object.auth !== undefined && object.auth !== null
                ? MongoDBAuth.fromJSON(object.auth)
                : undefined;
        message.databases = (object.databases ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: MongoDBConnection): unknown {
        const obj: any = {};
        message.cluster !== undefined &&
            (obj.cluster = message.cluster ? MongoDBCluster.toJSON(message.cluster) : undefined);
        message.managedClusterId !== undefined && (obj.managedClusterId = message.managedClusterId);
        message.auth !== undefined &&
            (obj.auth = message.auth ? MongoDBAuth.toJSON(message.auth) : undefined);
        if (message.databases) {
            obj.databases = message.databases.map((e) => e);
        } else {
            obj.databases = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MongoDBConnection>, I>>(object: I): MongoDBConnection {
        const message = { ...baseMongoDBConnection } as MongoDBConnection;
        message.cluster =
            object.cluster !== undefined && object.cluster !== null
                ? MongoDBCluster.fromPartial(object.cluster)
                : undefined;
        message.managedClusterId = object.managedClusterId ?? '';
        message.auth =
            object.auth !== undefined && object.auth !== null
                ? MongoDBAuth.fromPartial(object.auth)
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
