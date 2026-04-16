/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Password, TLSParams } from './common';

export const protobufPackage = 'yandex.cloud.connectionmanager.v1';

export interface RedisAuth {
    userPassword?: RedisAuth_UserPasswordAuth | undefined;
}

export interface RedisAuth_UserPasswordAuth {
    user: string;
    password?: Password;
}

export interface RedisCluster {
    hosts: RedisCluster_Host[];
    sentinelPort: number;
    tlsParams?: TLSParams;
}

export interface RedisCluster_Host {
    host: string;
    port: number;
    role: RedisCluster_Host_Role;
    health: RedisCluster_Host_Health;
    shardName: string;
}

export enum RedisCluster_Host_Role {
    ROLE_UNSPECIFIED = 0,
    MASTER = 1,
    REPLICA = 2,
    UNRECOGNIZED = -1,
}

export function redisCluster_Host_RoleFromJSON(object: any): RedisCluster_Host_Role {
    switch (object) {
        case 0:
        case 'ROLE_UNSPECIFIED':
            return RedisCluster_Host_Role.ROLE_UNSPECIFIED;
        case 1:
        case 'MASTER':
            return RedisCluster_Host_Role.MASTER;
        case 2:
        case 'REPLICA':
            return RedisCluster_Host_Role.REPLICA;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return RedisCluster_Host_Role.UNRECOGNIZED;
    }
}

export function redisCluster_Host_RoleToJSON(object: RedisCluster_Host_Role): string {
    switch (object) {
        case RedisCluster_Host_Role.ROLE_UNSPECIFIED:
            return 'ROLE_UNSPECIFIED';
        case RedisCluster_Host_Role.MASTER:
            return 'MASTER';
        case RedisCluster_Host_Role.REPLICA:
            return 'REPLICA';
        default:
            return 'UNKNOWN';
    }
}

export enum RedisCluster_Host_Health {
    HEALTH_UNSPECIFIED = 0,
    ALIVE = 1,
    DEAD = 2,
    DEGRADED = 3,
    UNRECOGNIZED = -1,
}

export function redisCluster_Host_HealthFromJSON(object: any): RedisCluster_Host_Health {
    switch (object) {
        case 0:
        case 'HEALTH_UNSPECIFIED':
            return RedisCluster_Host_Health.HEALTH_UNSPECIFIED;
        case 1:
        case 'ALIVE':
            return RedisCluster_Host_Health.ALIVE;
        case 2:
        case 'DEAD':
            return RedisCluster_Host_Health.DEAD;
        case 3:
        case 'DEGRADED':
            return RedisCluster_Host_Health.DEGRADED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return RedisCluster_Host_Health.UNRECOGNIZED;
    }
}

export function redisCluster_Host_HealthToJSON(object: RedisCluster_Host_Health): string {
    switch (object) {
        case RedisCluster_Host_Health.HEALTH_UNSPECIFIED:
            return 'HEALTH_UNSPECIFIED';
        case RedisCluster_Host_Health.ALIVE:
            return 'ALIVE';
        case RedisCluster_Host_Health.DEAD:
            return 'DEAD';
        case RedisCluster_Host_Health.DEGRADED:
            return 'DEGRADED';
        default:
            return 'UNKNOWN';
    }
}

export interface RedisConnection {
    cluster?: RedisCluster;
    auth?: RedisAuth;
    databases: number[];
}

const baseRedisAuth: object = {};

export const RedisAuth: {
    encode(message: RedisAuth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RedisAuth;
    fromJSON(object: any): RedisAuth;
    toJSON(message: RedisAuth): unknown;
    fromPartial<I extends Exact<DeepPartial<RedisAuth>, I>>(object: I): RedisAuth;
} = {
    encode(message: RedisAuth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userPassword !== undefined) {
            RedisAuth_UserPasswordAuth.encode(
                message.userPassword,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RedisAuth {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRedisAuth } as RedisAuth;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userPassword = RedisAuth_UserPasswordAuth.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RedisAuth {
        const message = { ...baseRedisAuth } as RedisAuth;
        message.userPassword =
            object.userPassword !== undefined && object.userPassword !== null
                ? RedisAuth_UserPasswordAuth.fromJSON(object.userPassword)
                : undefined;
        return message;
    },

    toJSON(message: RedisAuth): unknown {
        const obj: any = {};
        message.userPassword !== undefined &&
            (obj.userPassword = message.userPassword
                ? RedisAuth_UserPasswordAuth.toJSON(message.userPassword)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RedisAuth>, I>>(object: I): RedisAuth {
        const message = { ...baseRedisAuth } as RedisAuth;
        message.userPassword =
            object.userPassword !== undefined && object.userPassword !== null
                ? RedisAuth_UserPasswordAuth.fromPartial(object.userPassword)
                : undefined;
        return message;
    },
};

const baseRedisAuth_UserPasswordAuth: object = { user: '' };

export const RedisAuth_UserPasswordAuth: {
    encode(message: RedisAuth_UserPasswordAuth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RedisAuth_UserPasswordAuth;
    fromJSON(object: any): RedisAuth_UserPasswordAuth;
    toJSON(message: RedisAuth_UserPasswordAuth): unknown;
    fromPartial<I extends Exact<DeepPartial<RedisAuth_UserPasswordAuth>, I>>(object: I): RedisAuth_UserPasswordAuth;
} = {
    encode(
        message: RedisAuth_UserPasswordAuth,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.user !== '') {
            writer.uint32(10).string(message.user);
        }
        if (message.password !== undefined) {
            Password.encode(message.password, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RedisAuth_UserPasswordAuth {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRedisAuth_UserPasswordAuth } as RedisAuth_UserPasswordAuth;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.user = reader.string();
                    break;
                case 2:
                    message.password = Password.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RedisAuth_UserPasswordAuth {
        const message = { ...baseRedisAuth_UserPasswordAuth } as RedisAuth_UserPasswordAuth;
        message.user = object.user !== undefined && object.user !== null ? String(object.user) : '';
        message.password =
            object.password !== undefined && object.password !== null
                ? Password.fromJSON(object.password)
                : undefined;
        return message;
    },

    toJSON(message: RedisAuth_UserPasswordAuth): unknown {
        const obj: any = {};
        message.user !== undefined && (obj.user = message.user);
        message.password !== undefined &&
            (obj.password = message.password ? Password.toJSON(message.password) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RedisAuth_UserPasswordAuth>, I>>(
        object: I,
    ): RedisAuth_UserPasswordAuth {
        const message = { ...baseRedisAuth_UserPasswordAuth } as RedisAuth_UserPasswordAuth;
        message.user = object.user ?? '';
        message.password =
            object.password !== undefined && object.password !== null
                ? Password.fromPartial(object.password)
                : undefined;
        return message;
    },
};

const baseRedisCluster: object = { sentinelPort: 0 };

export const RedisCluster: {
    encode(message: RedisCluster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RedisCluster;
    fromJSON(object: any): RedisCluster;
    toJSON(message: RedisCluster): unknown;
    fromPartial<I extends Exact<DeepPartial<RedisCluster>, I>>(object: I): RedisCluster;
} = {
    encode(message: RedisCluster, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.hosts) {
            RedisCluster_Host.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        if (message.sentinelPort !== 0) {
            writer.uint32(24).int64(message.sentinelPort);
        }
        if (message.tlsParams !== undefined) {
            TLSParams.encode(message.tlsParams, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RedisCluster {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRedisCluster } as RedisCluster;
        message.hosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 6:
                    message.hosts.push(RedisCluster_Host.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.sentinelPort = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.tlsParams = TLSParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RedisCluster {
        const message = { ...baseRedisCluster } as RedisCluster;
        message.hosts = (object.hosts ?? []).map((e: any) => RedisCluster_Host.fromJSON(e));
        message.sentinelPort =
            object.sentinelPort !== undefined && object.sentinelPort !== null
                ? Number(object.sentinelPort)
                : 0;
        message.tlsParams =
            object.tlsParams !== undefined && object.tlsParams !== null
                ? TLSParams.fromJSON(object.tlsParams)
                : undefined;
        return message;
    },

    toJSON(message: RedisCluster): unknown {
        const obj: any = {};
        if (message.hosts) {
            obj.hosts = message.hosts.map((e) => (e ? RedisCluster_Host.toJSON(e) : undefined));
        } else {
            obj.hosts = [];
        }
        message.sentinelPort !== undefined && (obj.sentinelPort = Math.round(message.sentinelPort));
        message.tlsParams !== undefined &&
            (obj.tlsParams = message.tlsParams ? TLSParams.toJSON(message.tlsParams) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RedisCluster>, I>>(object: I): RedisCluster {
        const message = { ...baseRedisCluster } as RedisCluster;
        message.hosts = object.hosts?.map((e) => RedisCluster_Host.fromPartial(e)) || [];
        message.sentinelPort = object.sentinelPort ?? 0;
        message.tlsParams =
            object.tlsParams !== undefined && object.tlsParams !== null
                ? TLSParams.fromPartial(object.tlsParams)
                : undefined;
        return message;
    },
};

const baseRedisCluster_Host: object = { host: '', port: 0, role: 0, health: 0, shardName: '' };

export const RedisCluster_Host: {
    encode(message: RedisCluster_Host, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RedisCluster_Host;
    fromJSON(object: any): RedisCluster_Host;
    toJSON(message: RedisCluster_Host): unknown;
    fromPartial<I extends Exact<DeepPartial<RedisCluster_Host>, I>>(object: I): RedisCluster_Host;
} = {
    encode(message: RedisCluster_Host, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
        if (message.shardName !== '') {
            writer.uint32(42).string(message.shardName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RedisCluster_Host {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRedisCluster_Host } as RedisCluster_Host;
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
                    message.shardName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RedisCluster_Host {
        const message = { ...baseRedisCluster_Host } as RedisCluster_Host;
        message.host = object.host !== undefined && object.host !== null ? String(object.host) : '';
        message.port = object.port !== undefined && object.port !== null ? Number(object.port) : 0;
        message.role =
            object.role !== undefined && object.role !== null
                ? redisCluster_Host_RoleFromJSON(object.role)
                : 0;
        message.health =
            object.health !== undefined && object.health !== null
                ? redisCluster_Host_HealthFromJSON(object.health)
                : 0;
        message.shardName =
            object.shardName !== undefined && object.shardName !== null
                ? String(object.shardName)
                : '';
        return message;
    },

    toJSON(message: RedisCluster_Host): unknown {
        const obj: any = {};
        message.host !== undefined && (obj.host = message.host);
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.role !== undefined && (obj.role = redisCluster_Host_RoleToJSON(message.role));
        message.health !== undefined &&
            (obj.health = redisCluster_Host_HealthToJSON(message.health));
        message.shardName !== undefined && (obj.shardName = message.shardName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RedisCluster_Host>, I>>(object: I): RedisCluster_Host {
        const message = { ...baseRedisCluster_Host } as RedisCluster_Host;
        message.host = object.host ?? '';
        message.port = object.port ?? 0;
        message.role = object.role ?? 0;
        message.health = object.health ?? 0;
        message.shardName = object.shardName ?? '';
        return message;
    },
};

const baseRedisConnection: object = { databases: 0 };

export const RedisConnection: {
    encode(message: RedisConnection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RedisConnection;
    fromJSON(object: any): RedisConnection;
    toJSON(message: RedisConnection): unknown;
    fromPartial<I extends Exact<DeepPartial<RedisConnection>, I>>(object: I): RedisConnection;
} = {
    encode(message: RedisConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.cluster !== undefined) {
            RedisCluster.encode(message.cluster, writer.uint32(10).fork()).ldelim();
        }
        if (message.auth !== undefined) {
            RedisAuth.encode(message.auth, writer.uint32(26).fork()).ldelim();
        }
        writer.uint32(34).fork();
        for (const v of message.databases) {
            writer.int64(v);
        }
        writer.ldelim();
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RedisConnection {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRedisConnection } as RedisConnection;
        message.databases = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cluster = RedisCluster.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.auth = RedisAuth.decode(reader, reader.uint32());
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.databases.push(longToNumber(reader.int64() as Long));
                        }
                    } else {
                        message.databases.push(longToNumber(reader.int64() as Long));
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RedisConnection {
        const message = { ...baseRedisConnection } as RedisConnection;
        message.cluster =
            object.cluster !== undefined && object.cluster !== null
                ? RedisCluster.fromJSON(object.cluster)
                : undefined;
        message.auth =
            object.auth !== undefined && object.auth !== null
                ? RedisAuth.fromJSON(object.auth)
                : undefined;
        message.databases = (object.databases ?? []).map((e: any) => Number(e));
        return message;
    },

    toJSON(message: RedisConnection): unknown {
        const obj: any = {};
        message.cluster !== undefined &&
            (obj.cluster = message.cluster ? RedisCluster.toJSON(message.cluster) : undefined);
        message.auth !== undefined &&
            (obj.auth = message.auth ? RedisAuth.toJSON(message.auth) : undefined);
        if (message.databases) {
            obj.databases = message.databases.map((e) => Math.round(e));
        } else {
            obj.databases = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RedisConnection>, I>>(object: I): RedisConnection {
        const message = { ...baseRedisConnection } as RedisConnection;
        message.cluster =
            object.cluster !== undefined && object.cluster !== null
                ? RedisCluster.fromPartial(object.cluster)
                : undefined;
        message.auth =
            object.auth !== undefined && object.auth !== null
                ? RedisAuth.fromPartial(object.auth)
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
