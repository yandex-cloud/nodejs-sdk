/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { TLSParams, UserPasswordAuth } from './common';

export const protobufPackage = 'yandex.cloud.connectionmanager.v1';

export interface GreenplumAuth {
    userPassword?: UserPasswordAuth | undefined;
}

export interface GreenplumCluster {
    coordinatorHosts: GreenplumCluster_Host[];
    tlsParams?: TLSParams;
}

export interface GreenplumCluster_Host {
    host: string;
    port: number;
    role: GreenplumCluster_Host_Role;
    health: GreenplumCluster_Host_Health;
}

export enum GreenplumCluster_Host_Role {
    ROLE_UNSPECIFIED = 0,
    MASTER = 1,
    REPLICA = 2,
    UNRECOGNIZED = -1,
}

export function greenplumCluster_Host_RoleFromJSON(object: any): GreenplumCluster_Host_Role {
    switch (object) {
        case 0:
        case 'ROLE_UNSPECIFIED':
            return GreenplumCluster_Host_Role.ROLE_UNSPECIFIED;
        case 1:
        case 'MASTER':
            return GreenplumCluster_Host_Role.MASTER;
        case 2:
        case 'REPLICA':
            return GreenplumCluster_Host_Role.REPLICA;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return GreenplumCluster_Host_Role.UNRECOGNIZED;
    }
}

export function greenplumCluster_Host_RoleToJSON(object: GreenplumCluster_Host_Role): string {
    switch (object) {
        case GreenplumCluster_Host_Role.ROLE_UNSPECIFIED:
            return 'ROLE_UNSPECIFIED';
        case GreenplumCluster_Host_Role.MASTER:
            return 'MASTER';
        case GreenplumCluster_Host_Role.REPLICA:
            return 'REPLICA';
        default:
            return 'UNKNOWN';
    }
}

export enum GreenplumCluster_Host_Health {
    HEALTH_UNSPECIFIED = 0,
    ALIVE = 1,
    DEAD = 2,
    DEGRADED = 3,
    UNBALANCED = 4,
    UNRECOGNIZED = -1,
}

export function greenplumCluster_Host_HealthFromJSON(object: any): GreenplumCluster_Host_Health {
    switch (object) {
        case 0:
        case 'HEALTH_UNSPECIFIED':
            return GreenplumCluster_Host_Health.HEALTH_UNSPECIFIED;
        case 1:
        case 'ALIVE':
            return GreenplumCluster_Host_Health.ALIVE;
        case 2:
        case 'DEAD':
            return GreenplumCluster_Host_Health.DEAD;
        case 3:
        case 'DEGRADED':
            return GreenplumCluster_Host_Health.DEGRADED;
        case 4:
        case 'UNBALANCED':
            return GreenplumCluster_Host_Health.UNBALANCED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return GreenplumCluster_Host_Health.UNRECOGNIZED;
    }
}

export function greenplumCluster_Host_HealthToJSON(object: GreenplumCluster_Host_Health): string {
    switch (object) {
        case GreenplumCluster_Host_Health.HEALTH_UNSPECIFIED:
            return 'HEALTH_UNSPECIFIED';
        case GreenplumCluster_Host_Health.ALIVE:
            return 'ALIVE';
        case GreenplumCluster_Host_Health.DEAD:
            return 'DEAD';
        case GreenplumCluster_Host_Health.DEGRADED:
            return 'DEGRADED';
        case GreenplumCluster_Host_Health.UNBALANCED:
            return 'UNBALANCED';
        default:
            return 'UNKNOWN';
    }
}

export interface GreenplumConnection {
    /**
     * When creating/updating Connection, the field "cluster" is mutually
     * exclusive with "managed_cluster_id".
     */
    cluster?: GreenplumCluster;
    /**
     * When creating/updating Connection, the field "managed_cluster_id" is
     * mutually exclusive with "cluster".
     */
    managedClusterId: string;
    auth?: GreenplumAuth;
    databases: string[];
}

const baseGreenplumAuth: object = {};

export const GreenplumAuth: {
    encode(message: GreenplumAuth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumAuth;
    fromJSON(object: any): GreenplumAuth;
    toJSON(message: GreenplumAuth): unknown;
    fromPartial<I extends Exact<DeepPartial<GreenplumAuth>, I>>(object: I): GreenplumAuth;
} = {
    encode(message: GreenplumAuth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userPassword !== undefined) {
            UserPasswordAuth.encode(message.userPassword, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumAuth {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGreenplumAuth } as GreenplumAuth;
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

    fromJSON(object: any): GreenplumAuth {
        const message = { ...baseGreenplumAuth } as GreenplumAuth;
        message.userPassword =
            object.userPassword !== undefined && object.userPassword !== null
                ? UserPasswordAuth.fromJSON(object.userPassword)
                : undefined;
        return message;
    },

    toJSON(message: GreenplumAuth): unknown {
        const obj: any = {};
        message.userPassword !== undefined &&
            (obj.userPassword = message.userPassword
                ? UserPasswordAuth.toJSON(message.userPassword)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GreenplumAuth>, I>>(object: I): GreenplumAuth {
        const message = { ...baseGreenplumAuth } as GreenplumAuth;
        message.userPassword =
            object.userPassword !== undefined && object.userPassword !== null
                ? UserPasswordAuth.fromPartial(object.userPassword)
                : undefined;
        return message;
    },
};

const baseGreenplumCluster: object = {};

export const GreenplumCluster: {
    encode(message: GreenplumCluster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumCluster;
    fromJSON(object: any): GreenplumCluster;
    toJSON(message: GreenplumCluster): unknown;
    fromPartial<I extends Exact<DeepPartial<GreenplumCluster>, I>>(object: I): GreenplumCluster;
} = {
    encode(message: GreenplumCluster, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.coordinatorHosts) {
            GreenplumCluster_Host.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.tlsParams !== undefined) {
            TLSParams.encode(message.tlsParams, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumCluster {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGreenplumCluster } as GreenplumCluster;
        message.coordinatorHosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coordinatorHosts.push(
                        GreenplumCluster_Host.decode(reader, reader.uint32()),
                    );
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

    fromJSON(object: any): GreenplumCluster {
        const message = { ...baseGreenplumCluster } as GreenplumCluster;
        message.coordinatorHosts = (object.coordinatorHosts ?? []).map((e: any) =>
            GreenplumCluster_Host.fromJSON(e),
        );
        message.tlsParams =
            object.tlsParams !== undefined && object.tlsParams !== null
                ? TLSParams.fromJSON(object.tlsParams)
                : undefined;
        return message;
    },

    toJSON(message: GreenplumCluster): unknown {
        const obj: any = {};
        if (message.coordinatorHosts) {
            obj.coordinatorHosts = message.coordinatorHosts.map((e) =>
                e ? GreenplumCluster_Host.toJSON(e) : undefined,
            );
        } else {
            obj.coordinatorHosts = [];
        }
        message.tlsParams !== undefined &&
            (obj.tlsParams = message.tlsParams ? TLSParams.toJSON(message.tlsParams) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GreenplumCluster>, I>>(object: I): GreenplumCluster {
        const message = { ...baseGreenplumCluster } as GreenplumCluster;
        message.coordinatorHosts =
            object.coordinatorHosts?.map((e) => GreenplumCluster_Host.fromPartial(e)) || [];
        message.tlsParams =
            object.tlsParams !== undefined && object.tlsParams !== null
                ? TLSParams.fromPartial(object.tlsParams)
                : undefined;
        return message;
    },
};

const baseGreenplumCluster_Host: object = { host: '', port: 0, role: 0, health: 0 };

export const GreenplumCluster_Host: {
    encode(message: GreenplumCluster_Host, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumCluster_Host;
    fromJSON(object: any): GreenplumCluster_Host;
    toJSON(message: GreenplumCluster_Host): unknown;
    fromPartial<I extends Exact<DeepPartial<GreenplumCluster_Host>, I>>(object: I): GreenplumCluster_Host;
} = {
    encode(message: GreenplumCluster_Host, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumCluster_Host {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGreenplumCluster_Host } as GreenplumCluster_Host;
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

    fromJSON(object: any): GreenplumCluster_Host {
        const message = { ...baseGreenplumCluster_Host } as GreenplumCluster_Host;
        message.host = object.host !== undefined && object.host !== null ? String(object.host) : '';
        message.port = object.port !== undefined && object.port !== null ? Number(object.port) : 0;
        message.role =
            object.role !== undefined && object.role !== null
                ? greenplumCluster_Host_RoleFromJSON(object.role)
                : 0;
        message.health =
            object.health !== undefined && object.health !== null
                ? greenplumCluster_Host_HealthFromJSON(object.health)
                : 0;
        return message;
    },

    toJSON(message: GreenplumCluster_Host): unknown {
        const obj: any = {};
        message.host !== undefined && (obj.host = message.host);
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.role !== undefined && (obj.role = greenplumCluster_Host_RoleToJSON(message.role));
        message.health !== undefined &&
            (obj.health = greenplumCluster_Host_HealthToJSON(message.health));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GreenplumCluster_Host>, I>>(
        object: I,
    ): GreenplumCluster_Host {
        const message = { ...baseGreenplumCluster_Host } as GreenplumCluster_Host;
        message.host = object.host ?? '';
        message.port = object.port ?? 0;
        message.role = object.role ?? 0;
        message.health = object.health ?? 0;
        return message;
    },
};

const baseGreenplumConnection: object = { managedClusterId: '', databases: '' };

export const GreenplumConnection: {
    encode(message: GreenplumConnection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumConnection;
    fromJSON(object: any): GreenplumConnection;
    toJSON(message: GreenplumConnection): unknown;
    fromPartial<I extends Exact<DeepPartial<GreenplumConnection>, I>>(object: I): GreenplumConnection;
} = {
    encode(message: GreenplumConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.cluster !== undefined) {
            GreenplumCluster.encode(message.cluster, writer.uint32(10).fork()).ldelim();
        }
        if (message.managedClusterId !== '') {
            writer.uint32(18).string(message.managedClusterId);
        }
        if (message.auth !== undefined) {
            GreenplumAuth.encode(message.auth, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.databases) {
            writer.uint32(34).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumConnection {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGreenplumConnection } as GreenplumConnection;
        message.databases = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cluster = GreenplumCluster.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.managedClusterId = reader.string();
                    break;
                case 3:
                    message.auth = GreenplumAuth.decode(reader, reader.uint32());
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

    fromJSON(object: any): GreenplumConnection {
        const message = { ...baseGreenplumConnection } as GreenplumConnection;
        message.cluster =
            object.cluster !== undefined && object.cluster !== null
                ? GreenplumCluster.fromJSON(object.cluster)
                : undefined;
        message.managedClusterId =
            object.managedClusterId !== undefined && object.managedClusterId !== null
                ? String(object.managedClusterId)
                : '';
        message.auth =
            object.auth !== undefined && object.auth !== null
                ? GreenplumAuth.fromJSON(object.auth)
                : undefined;
        message.databases = (object.databases ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: GreenplumConnection): unknown {
        const obj: any = {};
        message.cluster !== undefined &&
            (obj.cluster = message.cluster ? GreenplumCluster.toJSON(message.cluster) : undefined);
        message.managedClusterId !== undefined && (obj.managedClusterId = message.managedClusterId);
        message.auth !== undefined &&
            (obj.auth = message.auth ? GreenplumAuth.toJSON(message.auth) : undefined);
        if (message.databases) {
            obj.databases = message.databases.map((e) => e);
        } else {
            obj.databases = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GreenplumConnection>, I>>(
        object: I,
    ): GreenplumConnection {
        const message = { ...baseGreenplumConnection } as GreenplumConnection;
        message.cluster =
            object.cluster !== undefined && object.cluster !== null
                ? GreenplumCluster.fromPartial(object.cluster)
                : undefined;
        message.managedClusterId = object.managedClusterId ?? '';
        message.auth =
            object.auth !== undefined && object.auth !== null
                ? GreenplumAuth.fromPartial(object.auth)
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
