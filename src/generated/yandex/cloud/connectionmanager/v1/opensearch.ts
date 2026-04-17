/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { TLSParams, UserPasswordAuth } from './common';

export const protobufPackage = 'yandex.cloud.connectionmanager.v1';

export interface OpenSearchAuth {
    userPassword?: UserPasswordAuth | undefined;
}

export interface OpenSearchCluster {
    hosts: OpenSearchCluster_Host[];
    tlsParams?: TLSParams;
}

export interface OpenSearchCluster_Host {
    host: string;
    port: number;
    health: OpenSearchCluster_Host_Health;
    roles: OpenSearchCluster_Host_GroupRole[];
}

export enum OpenSearchCluster_Host_GroupRole {
    GROUP_ROLE_UNSPECIFIED = 0,
    DATA = 1,
    MANAGER = 2,
    UNRECOGNIZED = -1,
}

export function openSearchCluster_Host_GroupRoleFromJSON(
    object: any,
): OpenSearchCluster_Host_GroupRole {
    switch (object) {
        case 0:
        case 'GROUP_ROLE_UNSPECIFIED':
            return OpenSearchCluster_Host_GroupRole.GROUP_ROLE_UNSPECIFIED;
        case 1:
        case 'DATA':
            return OpenSearchCluster_Host_GroupRole.DATA;
        case 2:
        case 'MANAGER':
            return OpenSearchCluster_Host_GroupRole.MANAGER;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return OpenSearchCluster_Host_GroupRole.UNRECOGNIZED;
    }
}

export function openSearchCluster_Host_GroupRoleToJSON(
    object: OpenSearchCluster_Host_GroupRole,
): string {
    switch (object) {
        case OpenSearchCluster_Host_GroupRole.GROUP_ROLE_UNSPECIFIED:
            return 'GROUP_ROLE_UNSPECIFIED';
        case OpenSearchCluster_Host_GroupRole.DATA:
            return 'DATA';
        case OpenSearchCluster_Host_GroupRole.MANAGER:
            return 'MANAGER';
        default:
            return 'UNKNOWN';
    }
}

export enum OpenSearchCluster_Host_Health {
    HEALTH_UNSPECIFIED = 0,
    ALIVE = 1,
    DEAD = 2,
    DEGRADED = 3,
    READONLY = 4,
    UNRECOGNIZED = -1,
}

export function openSearchCluster_Host_HealthFromJSON(object: any): OpenSearchCluster_Host_Health {
    switch (object) {
        case 0:
        case 'HEALTH_UNSPECIFIED':
            return OpenSearchCluster_Host_Health.HEALTH_UNSPECIFIED;
        case 1:
        case 'ALIVE':
            return OpenSearchCluster_Host_Health.ALIVE;
        case 2:
        case 'DEAD':
            return OpenSearchCluster_Host_Health.DEAD;
        case 3:
        case 'DEGRADED':
            return OpenSearchCluster_Host_Health.DEGRADED;
        case 4:
        case 'READONLY':
            return OpenSearchCluster_Host_Health.READONLY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return OpenSearchCluster_Host_Health.UNRECOGNIZED;
    }
}

export function openSearchCluster_Host_HealthToJSON(object: OpenSearchCluster_Host_Health): string {
    switch (object) {
        case OpenSearchCluster_Host_Health.HEALTH_UNSPECIFIED:
            return 'HEALTH_UNSPECIFIED';
        case OpenSearchCluster_Host_Health.ALIVE:
            return 'ALIVE';
        case OpenSearchCluster_Host_Health.DEAD:
            return 'DEAD';
        case OpenSearchCluster_Host_Health.DEGRADED:
            return 'DEGRADED';
        case OpenSearchCluster_Host_Health.READONLY:
            return 'READONLY';
        default:
            return 'UNKNOWN';
    }
}

export interface OpenSearchConnection {
    /**
     * When creating/updating Connection, the field "cluster" is mutually
     * exclusive with "managed_cluster_id".
     */
    cluster?: OpenSearchCluster;
    /**
     * When creating/updating Connection, the field "managed_cluster_id" is
     * mutually exclusive with "cluster".
     */
    managedClusterId: string;
    auth?: OpenSearchAuth;
}

const baseOpenSearchAuth: object = {};

export const OpenSearchAuth: {
    encode(message: OpenSearchAuth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OpenSearchAuth;
    fromJSON(object: any): OpenSearchAuth;
    toJSON(message: OpenSearchAuth): unknown;
    fromPartial<I extends Exact<DeepPartial<OpenSearchAuth>, I>>(object: I): OpenSearchAuth;
} = {
    encode(message: OpenSearchAuth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userPassword !== undefined) {
            UserPasswordAuth.encode(message.userPassword, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OpenSearchAuth {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOpenSearchAuth } as OpenSearchAuth;
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

    fromJSON(object: any): OpenSearchAuth {
        const message = { ...baseOpenSearchAuth } as OpenSearchAuth;
        message.userPassword =
            object.userPassword !== undefined && object.userPassword !== null
                ? UserPasswordAuth.fromJSON(object.userPassword)
                : undefined;
        return message;
    },

    toJSON(message: OpenSearchAuth): unknown {
        const obj: any = {};
        message.userPassword !== undefined &&
            (obj.userPassword = message.userPassword
                ? UserPasswordAuth.toJSON(message.userPassword)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OpenSearchAuth>, I>>(object: I): OpenSearchAuth {
        const message = { ...baseOpenSearchAuth } as OpenSearchAuth;
        message.userPassword =
            object.userPassword !== undefined && object.userPassword !== null
                ? UserPasswordAuth.fromPartial(object.userPassword)
                : undefined;
        return message;
    },
};

const baseOpenSearchCluster: object = {};

export const OpenSearchCluster: {
    encode(message: OpenSearchCluster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OpenSearchCluster;
    fromJSON(object: any): OpenSearchCluster;
    toJSON(message: OpenSearchCluster): unknown;
    fromPartial<I extends Exact<DeepPartial<OpenSearchCluster>, I>>(object: I): OpenSearchCluster;
} = {
    encode(message: OpenSearchCluster, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.hosts) {
            OpenSearchCluster_Host.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.tlsParams !== undefined) {
            TLSParams.encode(message.tlsParams, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OpenSearchCluster {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOpenSearchCluster } as OpenSearchCluster;
        message.hosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hosts.push(OpenSearchCluster_Host.decode(reader, reader.uint32()));
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

    fromJSON(object: any): OpenSearchCluster {
        const message = { ...baseOpenSearchCluster } as OpenSearchCluster;
        message.hosts = (object.hosts ?? []).map((e: any) => OpenSearchCluster_Host.fromJSON(e));
        message.tlsParams =
            object.tlsParams !== undefined && object.tlsParams !== null
                ? TLSParams.fromJSON(object.tlsParams)
                : undefined;
        return message;
    },

    toJSON(message: OpenSearchCluster): unknown {
        const obj: any = {};
        if (message.hosts) {
            obj.hosts = message.hosts.map((e) =>
                e ? OpenSearchCluster_Host.toJSON(e) : undefined,
            );
        } else {
            obj.hosts = [];
        }
        message.tlsParams !== undefined &&
            (obj.tlsParams = message.tlsParams ? TLSParams.toJSON(message.tlsParams) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OpenSearchCluster>, I>>(object: I): OpenSearchCluster {
        const message = { ...baseOpenSearchCluster } as OpenSearchCluster;
        message.hosts = object.hosts?.map((e) => OpenSearchCluster_Host.fromPartial(e)) || [];
        message.tlsParams =
            object.tlsParams !== undefined && object.tlsParams !== null
                ? TLSParams.fromPartial(object.tlsParams)
                : undefined;
        return message;
    },
};

const baseOpenSearchCluster_Host: object = { host: '', port: 0, health: 0, roles: 0 };

export const OpenSearchCluster_Host: {
    encode(message: OpenSearchCluster_Host, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OpenSearchCluster_Host;
    fromJSON(object: any): OpenSearchCluster_Host;
    toJSON(message: OpenSearchCluster_Host): unknown;
    fromPartial<I extends Exact<DeepPartial<OpenSearchCluster_Host>, I>>(object: I): OpenSearchCluster_Host;
} = {
    encode(message: OpenSearchCluster_Host, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.host !== '') {
            writer.uint32(26).string(message.host);
        }
        if (message.port !== 0) {
            writer.uint32(32).int64(message.port);
        }
        if (message.health !== 0) {
            writer.uint32(48).int32(message.health);
        }
        writer.uint32(58).fork();
        for (const v of message.roles) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OpenSearchCluster_Host {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOpenSearchCluster_Host } as OpenSearchCluster_Host;
        message.roles = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.host = reader.string();
                    break;
                case 4:
                    message.port = longToNumber(reader.int64() as Long);
                    break;
                case 6:
                    message.health = reader.int32() as any;
                    break;
                case 7:
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

    fromJSON(object: any): OpenSearchCluster_Host {
        const message = { ...baseOpenSearchCluster_Host } as OpenSearchCluster_Host;
        message.host = object.host !== undefined && object.host !== null ? String(object.host) : '';
        message.port = object.port !== undefined && object.port !== null ? Number(object.port) : 0;
        message.health =
            object.health !== undefined && object.health !== null
                ? openSearchCluster_Host_HealthFromJSON(object.health)
                : 0;
        message.roles = (object.roles ?? []).map((e: any) =>
            openSearchCluster_Host_GroupRoleFromJSON(e),
        );
        return message;
    },

    toJSON(message: OpenSearchCluster_Host): unknown {
        const obj: any = {};
        message.host !== undefined && (obj.host = message.host);
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.health !== undefined &&
            (obj.health = openSearchCluster_Host_HealthToJSON(message.health));
        if (message.roles) {
            obj.roles = message.roles.map((e) => openSearchCluster_Host_GroupRoleToJSON(e));
        } else {
            obj.roles = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OpenSearchCluster_Host>, I>>(
        object: I,
    ): OpenSearchCluster_Host {
        const message = { ...baseOpenSearchCluster_Host } as OpenSearchCluster_Host;
        message.host = object.host ?? '';
        message.port = object.port ?? 0;
        message.health = object.health ?? 0;
        message.roles = object.roles?.map((e) => e) || [];
        return message;
    },
};

const baseOpenSearchConnection: object = { managedClusterId: '' };

export const OpenSearchConnection: {
    encode(message: OpenSearchConnection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OpenSearchConnection;
    fromJSON(object: any): OpenSearchConnection;
    toJSON(message: OpenSearchConnection): unknown;
    fromPartial<I extends Exact<DeepPartial<OpenSearchConnection>, I>>(object: I): OpenSearchConnection;
} = {
    encode(message: OpenSearchConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.cluster !== undefined) {
            OpenSearchCluster.encode(message.cluster, writer.uint32(10).fork()).ldelim();
        }
        if (message.managedClusterId !== '') {
            writer.uint32(18).string(message.managedClusterId);
        }
        if (message.auth !== undefined) {
            OpenSearchAuth.encode(message.auth, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OpenSearchConnection {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOpenSearchConnection } as OpenSearchConnection;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cluster = OpenSearchCluster.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.managedClusterId = reader.string();
                    break;
                case 4:
                    message.auth = OpenSearchAuth.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OpenSearchConnection {
        const message = { ...baseOpenSearchConnection } as OpenSearchConnection;
        message.cluster =
            object.cluster !== undefined && object.cluster !== null
                ? OpenSearchCluster.fromJSON(object.cluster)
                : undefined;
        message.managedClusterId =
            object.managedClusterId !== undefined && object.managedClusterId !== null
                ? String(object.managedClusterId)
                : '';
        message.auth =
            object.auth !== undefined && object.auth !== null
                ? OpenSearchAuth.fromJSON(object.auth)
                : undefined;
        return message;
    },

    toJSON(message: OpenSearchConnection): unknown {
        const obj: any = {};
        message.cluster !== undefined &&
            (obj.cluster = message.cluster ? OpenSearchCluster.toJSON(message.cluster) : undefined);
        message.managedClusterId !== undefined && (obj.managedClusterId = message.managedClusterId);
        message.auth !== undefined &&
            (obj.auth = message.auth ? OpenSearchAuth.toJSON(message.auth) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OpenSearchConnection>, I>>(
        object: I,
    ): OpenSearchConnection {
        const message = { ...baseOpenSearchConnection } as OpenSearchConnection;
        message.cluster =
            object.cluster !== undefined && object.cluster !== null
                ? OpenSearchCluster.fromPartial(object.cluster)
                : undefined;
        message.managedClusterId = object.managedClusterId ?? '';
        message.auth =
            object.auth !== undefined && object.auth !== null
                ? OpenSearchAuth.fromPartial(object.auth)
                : undefined;
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
