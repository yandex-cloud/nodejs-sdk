/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Password, TLSParams } from './common';

export const protobufPackage = 'yandex.cloud.connectionmanager.v1';

export interface ValkeyAuth {
    userPassword?: ValkeyAuth_UserPasswordAuth | undefined;
}

export interface ValkeyAuth_UserPasswordAuth {
    user: string;
    password?: Password;
}

export interface ValkeyCluster {
    hosts: ValkeyCluster_Host[];
    sentinelPort: number;
    tlsParams?: TLSParams;
}

export interface ValkeyCluster_Host {
    host: string;
    port: number;
    role: ValkeyCluster_Host_Role;
    health: ValkeyCluster_Host_Health;
    shardName: string;
}

export enum ValkeyCluster_Host_Role {
    ROLE_UNSPECIFIED = 0,
    MASTER = 1,
    REPLICA = 2,
    UNRECOGNIZED = -1,
}

export function valkeyCluster_Host_RoleFromJSON(object: any): ValkeyCluster_Host_Role {
    switch (object) {
        case 0:
        case 'ROLE_UNSPECIFIED':
            return ValkeyCluster_Host_Role.ROLE_UNSPECIFIED;
        case 1:
        case 'MASTER':
            return ValkeyCluster_Host_Role.MASTER;
        case 2:
        case 'REPLICA':
            return ValkeyCluster_Host_Role.REPLICA;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ValkeyCluster_Host_Role.UNRECOGNIZED;
    }
}

export function valkeyCluster_Host_RoleToJSON(object: ValkeyCluster_Host_Role): string {
    switch (object) {
        case ValkeyCluster_Host_Role.ROLE_UNSPECIFIED:
            return 'ROLE_UNSPECIFIED';
        case ValkeyCluster_Host_Role.MASTER:
            return 'MASTER';
        case ValkeyCluster_Host_Role.REPLICA:
            return 'REPLICA';
        default:
            return 'UNKNOWN';
    }
}

export enum ValkeyCluster_Host_Health {
    HEALTH_UNSPECIFIED = 0,
    ALIVE = 1,
    DEAD = 2,
    DEGRADED = 3,
    UNRECOGNIZED = -1,
}

export function valkeyCluster_Host_HealthFromJSON(object: any): ValkeyCluster_Host_Health {
    switch (object) {
        case 0:
        case 'HEALTH_UNSPECIFIED':
            return ValkeyCluster_Host_Health.HEALTH_UNSPECIFIED;
        case 1:
        case 'ALIVE':
            return ValkeyCluster_Host_Health.ALIVE;
        case 2:
        case 'DEAD':
            return ValkeyCluster_Host_Health.DEAD;
        case 3:
        case 'DEGRADED':
            return ValkeyCluster_Host_Health.DEGRADED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ValkeyCluster_Host_Health.UNRECOGNIZED;
    }
}

export function valkeyCluster_Host_HealthToJSON(object: ValkeyCluster_Host_Health): string {
    switch (object) {
        case ValkeyCluster_Host_Health.HEALTH_UNSPECIFIED:
            return 'HEALTH_UNSPECIFIED';
        case ValkeyCluster_Host_Health.ALIVE:
            return 'ALIVE';
        case ValkeyCluster_Host_Health.DEAD:
            return 'DEAD';
        case ValkeyCluster_Host_Health.DEGRADED:
            return 'DEGRADED';
        default:
            return 'UNKNOWN';
    }
}

export interface ValkeyConnection {
    /**
     * When creating/updating Connection, the field "cluster" is mutually
     * exclusive with "managed_cluster_id".
     */
    cluster?: ValkeyCluster;
    /**
     * When creating/updating Connection, the field "managed_cluster_id" is
     * mutually exclusive with "cluster".
     */
    managedClusterId: string;
    auth?: ValkeyAuth;
    databases: number[];
}

const baseValkeyAuth: object = {};

export const ValkeyAuth: {
    encode(message: ValkeyAuth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValkeyAuth;
    fromJSON(object: any): ValkeyAuth;
    toJSON(message: ValkeyAuth): unknown;
    fromPartial<I extends Exact<DeepPartial<ValkeyAuth>, I>>(object: I): ValkeyAuth;
} = {
    encode(message: ValkeyAuth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userPassword !== undefined) {
            ValkeyAuth_UserPasswordAuth.encode(
                message.userPassword,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ValkeyAuth {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseValkeyAuth } as ValkeyAuth;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userPassword = ValkeyAuth_UserPasswordAuth.decode(
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

    fromJSON(object: any): ValkeyAuth {
        const message = { ...baseValkeyAuth } as ValkeyAuth;
        message.userPassword =
            object.userPassword !== undefined && object.userPassword !== null
                ? ValkeyAuth_UserPasswordAuth.fromJSON(object.userPassword)
                : undefined;
        return message;
    },

    toJSON(message: ValkeyAuth): unknown {
        const obj: any = {};
        message.userPassword !== undefined &&
            (obj.userPassword = message.userPassword
                ? ValkeyAuth_UserPasswordAuth.toJSON(message.userPassword)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ValkeyAuth>, I>>(object: I): ValkeyAuth {
        const message = { ...baseValkeyAuth } as ValkeyAuth;
        message.userPassword =
            object.userPassword !== undefined && object.userPassword !== null
                ? ValkeyAuth_UserPasswordAuth.fromPartial(object.userPassword)
                : undefined;
        return message;
    },
};

const baseValkeyAuth_UserPasswordAuth: object = { user: '' };

export const ValkeyAuth_UserPasswordAuth: {
    encode(message: ValkeyAuth_UserPasswordAuth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValkeyAuth_UserPasswordAuth;
    fromJSON(object: any): ValkeyAuth_UserPasswordAuth;
    toJSON(message: ValkeyAuth_UserPasswordAuth): unknown;
    fromPartial<I extends Exact<DeepPartial<ValkeyAuth_UserPasswordAuth>, I>>(object: I): ValkeyAuth_UserPasswordAuth;
} = {
    encode(
        message: ValkeyAuth_UserPasswordAuth,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ValkeyAuth_UserPasswordAuth {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseValkeyAuth_UserPasswordAuth } as ValkeyAuth_UserPasswordAuth;
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

    fromJSON(object: any): ValkeyAuth_UserPasswordAuth {
        const message = { ...baseValkeyAuth_UserPasswordAuth } as ValkeyAuth_UserPasswordAuth;
        message.user = object.user !== undefined && object.user !== null ? String(object.user) : '';
        message.password =
            object.password !== undefined && object.password !== null
                ? Password.fromJSON(object.password)
                : undefined;
        return message;
    },

    toJSON(message: ValkeyAuth_UserPasswordAuth): unknown {
        const obj: any = {};
        message.user !== undefined && (obj.user = message.user);
        message.password !== undefined &&
            (obj.password = message.password ? Password.toJSON(message.password) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ValkeyAuth_UserPasswordAuth>, I>>(
        object: I,
    ): ValkeyAuth_UserPasswordAuth {
        const message = { ...baseValkeyAuth_UserPasswordAuth } as ValkeyAuth_UserPasswordAuth;
        message.user = object.user ?? '';
        message.password =
            object.password !== undefined && object.password !== null
                ? Password.fromPartial(object.password)
                : undefined;
        return message;
    },
};

const baseValkeyCluster: object = { sentinelPort: 0 };

export const ValkeyCluster: {
    encode(message: ValkeyCluster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValkeyCluster;
    fromJSON(object: any): ValkeyCluster;
    toJSON(message: ValkeyCluster): unknown;
    fromPartial<I extends Exact<DeepPartial<ValkeyCluster>, I>>(object: I): ValkeyCluster;
} = {
    encode(message: ValkeyCluster, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.hosts) {
            ValkeyCluster_Host.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.sentinelPort !== 0) {
            writer.uint32(16).int64(message.sentinelPort);
        }
        if (message.tlsParams !== undefined) {
            TLSParams.encode(message.tlsParams, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ValkeyCluster {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseValkeyCluster } as ValkeyCluster;
        message.hosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hosts.push(ValkeyCluster_Host.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.sentinelPort = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.tlsParams = TLSParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ValkeyCluster {
        const message = { ...baseValkeyCluster } as ValkeyCluster;
        message.hosts = (object.hosts ?? []).map((e: any) => ValkeyCluster_Host.fromJSON(e));
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

    toJSON(message: ValkeyCluster): unknown {
        const obj: any = {};
        if (message.hosts) {
            obj.hosts = message.hosts.map((e) => (e ? ValkeyCluster_Host.toJSON(e) : undefined));
        } else {
            obj.hosts = [];
        }
        message.sentinelPort !== undefined && (obj.sentinelPort = Math.round(message.sentinelPort));
        message.tlsParams !== undefined &&
            (obj.tlsParams = message.tlsParams ? TLSParams.toJSON(message.tlsParams) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ValkeyCluster>, I>>(object: I): ValkeyCluster {
        const message = { ...baseValkeyCluster } as ValkeyCluster;
        message.hosts = object.hosts?.map((e) => ValkeyCluster_Host.fromPartial(e)) || [];
        message.sentinelPort = object.sentinelPort ?? 0;
        message.tlsParams =
            object.tlsParams !== undefined && object.tlsParams !== null
                ? TLSParams.fromPartial(object.tlsParams)
                : undefined;
        return message;
    },
};

const baseValkeyCluster_Host: object = { host: '', port: 0, role: 0, health: 0, shardName: '' };

export const ValkeyCluster_Host: {
    encode(message: ValkeyCluster_Host, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValkeyCluster_Host;
    fromJSON(object: any): ValkeyCluster_Host;
    toJSON(message: ValkeyCluster_Host): unknown;
    fromPartial<I extends Exact<DeepPartial<ValkeyCluster_Host>, I>>(object: I): ValkeyCluster_Host;
} = {
    encode(message: ValkeyCluster_Host, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ValkeyCluster_Host {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseValkeyCluster_Host } as ValkeyCluster_Host;
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

    fromJSON(object: any): ValkeyCluster_Host {
        const message = { ...baseValkeyCluster_Host } as ValkeyCluster_Host;
        message.host = object.host !== undefined && object.host !== null ? String(object.host) : '';
        message.port = object.port !== undefined && object.port !== null ? Number(object.port) : 0;
        message.role =
            object.role !== undefined && object.role !== null
                ? valkeyCluster_Host_RoleFromJSON(object.role)
                : 0;
        message.health =
            object.health !== undefined && object.health !== null
                ? valkeyCluster_Host_HealthFromJSON(object.health)
                : 0;
        message.shardName =
            object.shardName !== undefined && object.shardName !== null
                ? String(object.shardName)
                : '';
        return message;
    },

    toJSON(message: ValkeyCluster_Host): unknown {
        const obj: any = {};
        message.host !== undefined && (obj.host = message.host);
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.role !== undefined && (obj.role = valkeyCluster_Host_RoleToJSON(message.role));
        message.health !== undefined &&
            (obj.health = valkeyCluster_Host_HealthToJSON(message.health));
        message.shardName !== undefined && (obj.shardName = message.shardName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ValkeyCluster_Host>, I>>(
        object: I,
    ): ValkeyCluster_Host {
        const message = { ...baseValkeyCluster_Host } as ValkeyCluster_Host;
        message.host = object.host ?? '';
        message.port = object.port ?? 0;
        message.role = object.role ?? 0;
        message.health = object.health ?? 0;
        message.shardName = object.shardName ?? '';
        return message;
    },
};

const baseValkeyConnection: object = { managedClusterId: '', databases: 0 };

export const ValkeyConnection: {
    encode(message: ValkeyConnection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValkeyConnection;
    fromJSON(object: any): ValkeyConnection;
    toJSON(message: ValkeyConnection): unknown;
    fromPartial<I extends Exact<DeepPartial<ValkeyConnection>, I>>(object: I): ValkeyConnection;
} = {
    encode(message: ValkeyConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.cluster !== undefined) {
            ValkeyCluster.encode(message.cluster, writer.uint32(10).fork()).ldelim();
        }
        if (message.managedClusterId !== '') {
            writer.uint32(18).string(message.managedClusterId);
        }
        if (message.auth !== undefined) {
            ValkeyAuth.encode(message.auth, writer.uint32(26).fork()).ldelim();
        }
        writer.uint32(34).fork();
        for (const v of message.databases) {
            writer.int64(v);
        }
        writer.ldelim();
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ValkeyConnection {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseValkeyConnection } as ValkeyConnection;
        message.databases = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cluster = ValkeyCluster.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.managedClusterId = reader.string();
                    break;
                case 3:
                    message.auth = ValkeyAuth.decode(reader, reader.uint32());
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

    fromJSON(object: any): ValkeyConnection {
        const message = { ...baseValkeyConnection } as ValkeyConnection;
        message.cluster =
            object.cluster !== undefined && object.cluster !== null
                ? ValkeyCluster.fromJSON(object.cluster)
                : undefined;
        message.managedClusterId =
            object.managedClusterId !== undefined && object.managedClusterId !== null
                ? String(object.managedClusterId)
                : '';
        message.auth =
            object.auth !== undefined && object.auth !== null
                ? ValkeyAuth.fromJSON(object.auth)
                : undefined;
        message.databases = (object.databases ?? []).map((e: any) => Number(e));
        return message;
    },

    toJSON(message: ValkeyConnection): unknown {
        const obj: any = {};
        message.cluster !== undefined &&
            (obj.cluster = message.cluster ? ValkeyCluster.toJSON(message.cluster) : undefined);
        message.managedClusterId !== undefined && (obj.managedClusterId = message.managedClusterId);
        message.auth !== undefined &&
            (obj.auth = message.auth ? ValkeyAuth.toJSON(message.auth) : undefined);
        if (message.databases) {
            obj.databases = message.databases.map((e) => Math.round(e));
        } else {
            obj.databases = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ValkeyConnection>, I>>(object: I): ValkeyConnection {
        const message = { ...baseValkeyConnection } as ValkeyConnection;
        message.cluster =
            object.cluster !== undefined && object.cluster !== null
                ? ValkeyCluster.fromPartial(object.cluster)
                : undefined;
        message.managedClusterId = object.managedClusterId ?? '';
        message.auth =
            object.auth !== undefined && object.auth !== null
                ? ValkeyAuth.fromPartial(object.auth)
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
