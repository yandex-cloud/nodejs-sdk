/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { TLSParams, UserPasswordAuth } from './common';

export const protobufPackage = 'yandex.cloud.connectionmanager.v1';

export interface PostgreSQLAuth {
    userPassword?: UserPasswordAuth | undefined;
}

export interface PostgreSQLCluster {
    tlsParams?: TLSParams;
    hosts: PostgreSQLCluster_Host[];
}

export interface PostgreSQLCluster_Host {
    host: string;
    port: number;
    role: PostgreSQLCluster_Host_Role;
    replicaType: PostgreSQLCluster_Host_ReplicaType;
    health: PostgreSQLCluster_Host_Health;
}

export enum PostgreSQLCluster_Host_Role {
    ROLE_UNSPECIFIED = 0,
    MASTER = 1,
    REPLICA = 2,
    UNRECOGNIZED = -1,
}

export function postgreSQLCluster_Host_RoleFromJSON(object: any): PostgreSQLCluster_Host_Role {
    switch (object) {
        case 0:
        case 'ROLE_UNSPECIFIED':
            return PostgreSQLCluster_Host_Role.ROLE_UNSPECIFIED;
        case 1:
        case 'MASTER':
            return PostgreSQLCluster_Host_Role.MASTER;
        case 2:
        case 'REPLICA':
            return PostgreSQLCluster_Host_Role.REPLICA;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgreSQLCluster_Host_Role.UNRECOGNIZED;
    }
}

export function postgreSQLCluster_Host_RoleToJSON(object: PostgreSQLCluster_Host_Role): string {
    switch (object) {
        case PostgreSQLCluster_Host_Role.ROLE_UNSPECIFIED:
            return 'ROLE_UNSPECIFIED';
        case PostgreSQLCluster_Host_Role.MASTER:
            return 'MASTER';
        case PostgreSQLCluster_Host_Role.REPLICA:
            return 'REPLICA';
        default:
            return 'UNKNOWN';
    }
}

export enum PostgreSQLCluster_Host_ReplicaType {
    REPLICA_TYPE_UNSPECIFIED = 0,
    ASYNC = 1,
    SYNC = 2,
    QUORUM = 3,
    UNRECOGNIZED = -1,
}

export function postgreSQLCluster_Host_ReplicaTypeFromJSON(
    object: any,
): PostgreSQLCluster_Host_ReplicaType {
    switch (object) {
        case 0:
        case 'REPLICA_TYPE_UNSPECIFIED':
            return PostgreSQLCluster_Host_ReplicaType.REPLICA_TYPE_UNSPECIFIED;
        case 1:
        case 'ASYNC':
            return PostgreSQLCluster_Host_ReplicaType.ASYNC;
        case 2:
        case 'SYNC':
            return PostgreSQLCluster_Host_ReplicaType.SYNC;
        case 3:
        case 'QUORUM':
            return PostgreSQLCluster_Host_ReplicaType.QUORUM;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgreSQLCluster_Host_ReplicaType.UNRECOGNIZED;
    }
}

export function postgreSQLCluster_Host_ReplicaTypeToJSON(
    object: PostgreSQLCluster_Host_ReplicaType,
): string {
    switch (object) {
        case PostgreSQLCluster_Host_ReplicaType.REPLICA_TYPE_UNSPECIFIED:
            return 'REPLICA_TYPE_UNSPECIFIED';
        case PostgreSQLCluster_Host_ReplicaType.ASYNC:
            return 'ASYNC';
        case PostgreSQLCluster_Host_ReplicaType.SYNC:
            return 'SYNC';
        case PostgreSQLCluster_Host_ReplicaType.QUORUM:
            return 'QUORUM';
        default:
            return 'UNKNOWN';
    }
}

export enum PostgreSQLCluster_Host_Health {
    HEALTH_UNSPECIFIED = 0,
    ALIVE = 1,
    DEAD = 2,
    DEGRADED = 3,
    READONLY = 4,
    UNRECOGNIZED = -1,
}

export function postgreSQLCluster_Host_HealthFromJSON(object: any): PostgreSQLCluster_Host_Health {
    switch (object) {
        case 0:
        case 'HEALTH_UNSPECIFIED':
            return PostgreSQLCluster_Host_Health.HEALTH_UNSPECIFIED;
        case 1:
        case 'ALIVE':
            return PostgreSQLCluster_Host_Health.ALIVE;
        case 2:
        case 'DEAD':
            return PostgreSQLCluster_Host_Health.DEAD;
        case 3:
        case 'DEGRADED':
            return PostgreSQLCluster_Host_Health.DEGRADED;
        case 4:
        case 'READONLY':
            return PostgreSQLCluster_Host_Health.READONLY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgreSQLCluster_Host_Health.UNRECOGNIZED;
    }
}

export function postgreSQLCluster_Host_HealthToJSON(object: PostgreSQLCluster_Host_Health): string {
    switch (object) {
        case PostgreSQLCluster_Host_Health.HEALTH_UNSPECIFIED:
            return 'HEALTH_UNSPECIFIED';
        case PostgreSQLCluster_Host_Health.ALIVE:
            return 'ALIVE';
        case PostgreSQLCluster_Host_Health.DEAD:
            return 'DEAD';
        case PostgreSQLCluster_Host_Health.DEGRADED:
            return 'DEGRADED';
        case PostgreSQLCluster_Host_Health.READONLY:
            return 'READONLY';
        default:
            return 'UNKNOWN';
    }
}

export interface PostgreSQLConnection {
    /**
     * When creating/updating Connection, the field "cluster" is mutually
     * exclusive with "managed_cluster_id".
     */
    cluster?: PostgreSQLCluster;
    /**
     * When creating/updating Connection, the field "managed_cluster_id" is
     * mutually exclusive with "cluster".
     */
    managedClusterId: string;
    auth?: PostgreSQLAuth;
    databases: string[];
}

const basePostgreSQLAuth: object = {};

export const PostgreSQLAuth: {
    encode(message: PostgreSQLAuth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PostgreSQLAuth;
    fromJSON(object: any): PostgreSQLAuth;
    toJSON(message: PostgreSQLAuth): unknown;
    fromPartial<I extends Exact<DeepPartial<PostgreSQLAuth>, I>>(object: I): PostgreSQLAuth;
} = {
    encode(message: PostgreSQLAuth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userPassword !== undefined) {
            UserPasswordAuth.encode(message.userPassword, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PostgreSQLAuth {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePostgreSQLAuth } as PostgreSQLAuth;
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

    fromJSON(object: any): PostgreSQLAuth {
        const message = { ...basePostgreSQLAuth } as PostgreSQLAuth;
        message.userPassword =
            object.userPassword !== undefined && object.userPassword !== null
                ? UserPasswordAuth.fromJSON(object.userPassword)
                : undefined;
        return message;
    },

    toJSON(message: PostgreSQLAuth): unknown {
        const obj: any = {};
        message.userPassword !== undefined &&
            (obj.userPassword = message.userPassword
                ? UserPasswordAuth.toJSON(message.userPassword)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PostgreSQLAuth>, I>>(object: I): PostgreSQLAuth {
        const message = { ...basePostgreSQLAuth } as PostgreSQLAuth;
        message.userPassword =
            object.userPassword !== undefined && object.userPassword !== null
                ? UserPasswordAuth.fromPartial(object.userPassword)
                : undefined;
        return message;
    },
};

const basePostgreSQLCluster: object = {};

export const PostgreSQLCluster: {
    encode(message: PostgreSQLCluster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PostgreSQLCluster;
    fromJSON(object: any): PostgreSQLCluster;
    toJSON(message: PostgreSQLCluster): unknown;
    fromPartial<I extends Exact<DeepPartial<PostgreSQLCluster>, I>>(object: I): PostgreSQLCluster;
} = {
    encode(message: PostgreSQLCluster, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.tlsParams !== undefined) {
            TLSParams.encode(message.tlsParams, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.hosts) {
            PostgreSQLCluster_Host.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PostgreSQLCluster {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePostgreSQLCluster } as PostgreSQLCluster;
        message.hosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.tlsParams = TLSParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.hosts.push(PostgreSQLCluster_Host.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PostgreSQLCluster {
        const message = { ...basePostgreSQLCluster } as PostgreSQLCluster;
        message.tlsParams =
            object.tlsParams !== undefined && object.tlsParams !== null
                ? TLSParams.fromJSON(object.tlsParams)
                : undefined;
        message.hosts = (object.hosts ?? []).map((e: any) => PostgreSQLCluster_Host.fromJSON(e));
        return message;
    },

    toJSON(message: PostgreSQLCluster): unknown {
        const obj: any = {};
        message.tlsParams !== undefined &&
            (obj.tlsParams = message.tlsParams ? TLSParams.toJSON(message.tlsParams) : undefined);
        if (message.hosts) {
            obj.hosts = message.hosts.map((e) =>
                e ? PostgreSQLCluster_Host.toJSON(e) : undefined,
            );
        } else {
            obj.hosts = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PostgreSQLCluster>, I>>(object: I): PostgreSQLCluster {
        const message = { ...basePostgreSQLCluster } as PostgreSQLCluster;
        message.tlsParams =
            object.tlsParams !== undefined && object.tlsParams !== null
                ? TLSParams.fromPartial(object.tlsParams)
                : undefined;
        message.hosts = object.hosts?.map((e) => PostgreSQLCluster_Host.fromPartial(e)) || [];
        return message;
    },
};

const basePostgreSQLCluster_Host: object = {
    host: '',
    port: 0,
    role: 0,
    replicaType: 0,
    health: 0,
};

export const PostgreSQLCluster_Host: {
    encode(message: PostgreSQLCluster_Host, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PostgreSQLCluster_Host;
    fromJSON(object: any): PostgreSQLCluster_Host;
    toJSON(message: PostgreSQLCluster_Host): unknown;
    fromPartial<I extends Exact<DeepPartial<PostgreSQLCluster_Host>, I>>(object: I): PostgreSQLCluster_Host;
} = {
    encode(message: PostgreSQLCluster_Host, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.host !== '') {
            writer.uint32(10).string(message.host);
        }
        if (message.port !== 0) {
            writer.uint32(16).int64(message.port);
        }
        if (message.role !== 0) {
            writer.uint32(24).int32(message.role);
        }
        if (message.replicaType !== 0) {
            writer.uint32(32).int32(message.replicaType);
        }
        if (message.health !== 0) {
            writer.uint32(40).int32(message.health);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PostgreSQLCluster_Host {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePostgreSQLCluster_Host } as PostgreSQLCluster_Host;
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
                    message.replicaType = reader.int32() as any;
                    break;
                case 5:
                    message.health = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PostgreSQLCluster_Host {
        const message = { ...basePostgreSQLCluster_Host } as PostgreSQLCluster_Host;
        message.host = object.host !== undefined && object.host !== null ? String(object.host) : '';
        message.port = object.port !== undefined && object.port !== null ? Number(object.port) : 0;
        message.role =
            object.role !== undefined && object.role !== null
                ? postgreSQLCluster_Host_RoleFromJSON(object.role)
                : 0;
        message.replicaType =
            object.replicaType !== undefined && object.replicaType !== null
                ? postgreSQLCluster_Host_ReplicaTypeFromJSON(object.replicaType)
                : 0;
        message.health =
            object.health !== undefined && object.health !== null
                ? postgreSQLCluster_Host_HealthFromJSON(object.health)
                : 0;
        return message;
    },

    toJSON(message: PostgreSQLCluster_Host): unknown {
        const obj: any = {};
        message.host !== undefined && (obj.host = message.host);
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.role !== undefined && (obj.role = postgreSQLCluster_Host_RoleToJSON(message.role));
        message.replicaType !== undefined &&
            (obj.replicaType = postgreSQLCluster_Host_ReplicaTypeToJSON(message.replicaType));
        message.health !== undefined &&
            (obj.health = postgreSQLCluster_Host_HealthToJSON(message.health));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PostgreSQLCluster_Host>, I>>(
        object: I,
    ): PostgreSQLCluster_Host {
        const message = { ...basePostgreSQLCluster_Host } as PostgreSQLCluster_Host;
        message.host = object.host ?? '';
        message.port = object.port ?? 0;
        message.role = object.role ?? 0;
        message.replicaType = object.replicaType ?? 0;
        message.health = object.health ?? 0;
        return message;
    },
};

const basePostgreSQLConnection: object = { managedClusterId: '', databases: '' };

export const PostgreSQLConnection: {
    encode(message: PostgreSQLConnection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PostgreSQLConnection;
    fromJSON(object: any): PostgreSQLConnection;
    toJSON(message: PostgreSQLConnection): unknown;
    fromPartial<I extends Exact<DeepPartial<PostgreSQLConnection>, I>>(object: I): PostgreSQLConnection;
} = {
    encode(message: PostgreSQLConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.cluster !== undefined) {
            PostgreSQLCluster.encode(message.cluster, writer.uint32(10).fork()).ldelim();
        }
        if (message.managedClusterId !== '') {
            writer.uint32(18).string(message.managedClusterId);
        }
        if (message.auth !== undefined) {
            PostgreSQLAuth.encode(message.auth, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.databases) {
            writer.uint32(42).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PostgreSQLConnection {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePostgreSQLConnection } as PostgreSQLConnection;
        message.databases = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cluster = PostgreSQLCluster.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.managedClusterId = reader.string();
                    break;
                case 4:
                    message.auth = PostgreSQLAuth.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.databases.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PostgreSQLConnection {
        const message = { ...basePostgreSQLConnection } as PostgreSQLConnection;
        message.cluster =
            object.cluster !== undefined && object.cluster !== null
                ? PostgreSQLCluster.fromJSON(object.cluster)
                : undefined;
        message.managedClusterId =
            object.managedClusterId !== undefined && object.managedClusterId !== null
                ? String(object.managedClusterId)
                : '';
        message.auth =
            object.auth !== undefined && object.auth !== null
                ? PostgreSQLAuth.fromJSON(object.auth)
                : undefined;
        message.databases = (object.databases ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: PostgreSQLConnection): unknown {
        const obj: any = {};
        message.cluster !== undefined &&
            (obj.cluster = message.cluster ? PostgreSQLCluster.toJSON(message.cluster) : undefined);
        message.managedClusterId !== undefined && (obj.managedClusterId = message.managedClusterId);
        message.auth !== undefined &&
            (obj.auth = message.auth ? PostgreSQLAuth.toJSON(message.auth) : undefined);
        if (message.databases) {
            obj.databases = message.databases.map((e) => e);
        } else {
            obj.databases = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PostgreSQLConnection>, I>>(
        object: I,
    ): PostgreSQLConnection {
        const message = { ...basePostgreSQLConnection } as PostgreSQLConnection;
        message.cluster =
            object.cluster !== undefined && object.cluster !== null
                ? PostgreSQLCluster.fromPartial(object.cluster)
                : undefined;
        message.managedClusterId = object.managedClusterId ?? '';
        message.auth =
            object.auth !== undefined && object.auth !== null
                ? PostgreSQLAuth.fromPartial(object.auth)
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
