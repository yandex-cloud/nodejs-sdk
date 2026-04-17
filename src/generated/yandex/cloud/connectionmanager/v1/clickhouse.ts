/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { TLSParams, UserPasswordAuth } from './common';

export const protobufPackage = 'yandex.cloud.connectionmanager.v1';

export interface ClickHouseAuth {
    userPassword?: UserPasswordAuth | undefined;
}

export interface ClickHouseCluster {
    tlsParams?: TLSParams;
    hosts: ClickHouseCluster_Host[];
    shardGroups: ClickHouseCluster_ShardGroup[];
}

export interface ClickHouseCluster_Host {
    host: string;
    /** depends on tls params may vary as http or https */
    httpPort: number;
    tcpPort: number;
    shardName: string;
    health: ClickHouseCluster_Host_Health;
}

export enum ClickHouseCluster_Host_Health {
    HEALTH_UNKNOWN = 0,
    ALIVE = 1,
    DEAD = 2,
    DEGRADED = 3,
    UNRECOGNIZED = -1,
}

export function clickHouseCluster_Host_HealthFromJSON(object: any): ClickHouseCluster_Host_Health {
    switch (object) {
        case 0:
        case 'HEALTH_UNKNOWN':
            return ClickHouseCluster_Host_Health.HEALTH_UNKNOWN;
        case 1:
        case 'ALIVE':
            return ClickHouseCluster_Host_Health.ALIVE;
        case 2:
        case 'DEAD':
            return ClickHouseCluster_Host_Health.DEAD;
        case 3:
        case 'DEGRADED':
            return ClickHouseCluster_Host_Health.DEGRADED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ClickHouseCluster_Host_Health.UNRECOGNIZED;
    }
}

export function clickHouseCluster_Host_HealthToJSON(object: ClickHouseCluster_Host_Health): string {
    switch (object) {
        case ClickHouseCluster_Host_Health.HEALTH_UNKNOWN:
            return 'HEALTH_UNKNOWN';
        case ClickHouseCluster_Host_Health.ALIVE:
            return 'ALIVE';
        case ClickHouseCluster_Host_Health.DEAD:
            return 'DEAD';
        case ClickHouseCluster_Host_Health.DEGRADED:
            return 'DEGRADED';
        default:
            return 'UNKNOWN';
    }
}

export interface ClickHouseCluster_ShardGroup {
    name: string;
    shardNames: string[];
}

export interface ClickHouseConnection {
    /**
     * When creating/updating Connection, the field "cluster" is mutually
     * exclusive with "managed_cluster_id".
     */
    cluster?: ClickHouseCluster;
    /**
     * When creating/updating Connection, the field "managed_cluster_id" is
     * mutually exclusive with "cluster".
     */
    managedClusterId: string;
    auth?: ClickHouseAuth;
    databases: string[];
}

const baseClickHouseAuth: object = {};

export const ClickHouseAuth: {
    encode(message: ClickHouseAuth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClickHouseAuth;
    fromJSON(object: any): ClickHouseAuth;
    toJSON(message: ClickHouseAuth): unknown;
    fromPartial<I extends Exact<DeepPartial<ClickHouseAuth>, I>>(object: I): ClickHouseAuth;
} = {
    encode(message: ClickHouseAuth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userPassword !== undefined) {
            UserPasswordAuth.encode(message.userPassword, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClickHouseAuth {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClickHouseAuth } as ClickHouseAuth;
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

    fromJSON(object: any): ClickHouseAuth {
        const message = { ...baseClickHouseAuth } as ClickHouseAuth;
        message.userPassword =
            object.userPassword !== undefined && object.userPassword !== null
                ? UserPasswordAuth.fromJSON(object.userPassword)
                : undefined;
        return message;
    },

    toJSON(message: ClickHouseAuth): unknown {
        const obj: any = {};
        message.userPassword !== undefined &&
            (obj.userPassword = message.userPassword
                ? UserPasswordAuth.toJSON(message.userPassword)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClickHouseAuth>, I>>(object: I): ClickHouseAuth {
        const message = { ...baseClickHouseAuth } as ClickHouseAuth;
        message.userPassword =
            object.userPassword !== undefined && object.userPassword !== null
                ? UserPasswordAuth.fromPartial(object.userPassword)
                : undefined;
        return message;
    },
};

const baseClickHouseCluster: object = {};

export const ClickHouseCluster: {
    encode(message: ClickHouseCluster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClickHouseCluster;
    fromJSON(object: any): ClickHouseCluster;
    toJSON(message: ClickHouseCluster): unknown;
    fromPartial<I extends Exact<DeepPartial<ClickHouseCluster>, I>>(object: I): ClickHouseCluster;
} = {
    encode(message: ClickHouseCluster, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.tlsParams !== undefined) {
            TLSParams.encode(message.tlsParams, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.hosts) {
            ClickHouseCluster_Host.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.shardGroups) {
            ClickHouseCluster_ShardGroup.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClickHouseCluster {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClickHouseCluster } as ClickHouseCluster;
        message.hosts = [];
        message.shardGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 4:
                    message.tlsParams = TLSParams.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.hosts.push(ClickHouseCluster_Host.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.shardGroups.push(
                        ClickHouseCluster_ShardGroup.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClickHouseCluster {
        const message = { ...baseClickHouseCluster } as ClickHouseCluster;
        message.tlsParams =
            object.tlsParams !== undefined && object.tlsParams !== null
                ? TLSParams.fromJSON(object.tlsParams)
                : undefined;
        message.hosts = (object.hosts ?? []).map((e: any) => ClickHouseCluster_Host.fromJSON(e));
        message.shardGroups = (object.shardGroups ?? []).map((e: any) =>
            ClickHouseCluster_ShardGroup.fromJSON(e),
        );
        return message;
    },

    toJSON(message: ClickHouseCluster): unknown {
        const obj: any = {};
        message.tlsParams !== undefined &&
            (obj.tlsParams = message.tlsParams ? TLSParams.toJSON(message.tlsParams) : undefined);
        if (message.hosts) {
            obj.hosts = message.hosts.map((e) =>
                e ? ClickHouseCluster_Host.toJSON(e) : undefined,
            );
        } else {
            obj.hosts = [];
        }
        if (message.shardGroups) {
            obj.shardGroups = message.shardGroups.map((e) =>
                e ? ClickHouseCluster_ShardGroup.toJSON(e) : undefined,
            );
        } else {
            obj.shardGroups = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClickHouseCluster>, I>>(object: I): ClickHouseCluster {
        const message = { ...baseClickHouseCluster } as ClickHouseCluster;
        message.tlsParams =
            object.tlsParams !== undefined && object.tlsParams !== null
                ? TLSParams.fromPartial(object.tlsParams)
                : undefined;
        message.hosts = object.hosts?.map((e) => ClickHouseCluster_Host.fromPartial(e)) || [];
        message.shardGroups =
            object.shardGroups?.map((e) => ClickHouseCluster_ShardGroup.fromPartial(e)) || [];
        return message;
    },
};

const baseClickHouseCluster_Host: object = {
    host: '',
    httpPort: 0,
    tcpPort: 0,
    shardName: '',
    health: 0,
};

export const ClickHouseCluster_Host: {
    encode(message: ClickHouseCluster_Host, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClickHouseCluster_Host;
    fromJSON(object: any): ClickHouseCluster_Host;
    toJSON(message: ClickHouseCluster_Host): unknown;
    fromPartial<I extends Exact<DeepPartial<ClickHouseCluster_Host>, I>>(object: I): ClickHouseCluster_Host;
} = {
    encode(message: ClickHouseCluster_Host, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.host !== '') {
            writer.uint32(10).string(message.host);
        }
        if (message.httpPort !== 0) {
            writer.uint32(16).int64(message.httpPort);
        }
        if (message.tcpPort !== 0) {
            writer.uint32(24).int64(message.tcpPort);
        }
        if (message.shardName !== '') {
            writer.uint32(34).string(message.shardName);
        }
        if (message.health !== 0) {
            writer.uint32(40).int32(message.health);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClickHouseCluster_Host {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClickHouseCluster_Host } as ClickHouseCluster_Host;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.host = reader.string();
                    break;
                case 2:
                    message.httpPort = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.tcpPort = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.shardName = reader.string();
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

    fromJSON(object: any): ClickHouseCluster_Host {
        const message = { ...baseClickHouseCluster_Host } as ClickHouseCluster_Host;
        message.host = object.host !== undefined && object.host !== null ? String(object.host) : '';
        message.httpPort =
            object.httpPort !== undefined && object.httpPort !== null ? Number(object.httpPort) : 0;
        message.tcpPort =
            object.tcpPort !== undefined && object.tcpPort !== null ? Number(object.tcpPort) : 0;
        message.shardName =
            object.shardName !== undefined && object.shardName !== null
                ? String(object.shardName)
                : '';
        message.health =
            object.health !== undefined && object.health !== null
                ? clickHouseCluster_Host_HealthFromJSON(object.health)
                : 0;
        return message;
    },

    toJSON(message: ClickHouseCluster_Host): unknown {
        const obj: any = {};
        message.host !== undefined && (obj.host = message.host);
        message.httpPort !== undefined && (obj.httpPort = Math.round(message.httpPort));
        message.tcpPort !== undefined && (obj.tcpPort = Math.round(message.tcpPort));
        message.shardName !== undefined && (obj.shardName = message.shardName);
        message.health !== undefined &&
            (obj.health = clickHouseCluster_Host_HealthToJSON(message.health));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClickHouseCluster_Host>, I>>(
        object: I,
    ): ClickHouseCluster_Host {
        const message = { ...baseClickHouseCluster_Host } as ClickHouseCluster_Host;
        message.host = object.host ?? '';
        message.httpPort = object.httpPort ?? 0;
        message.tcpPort = object.tcpPort ?? 0;
        message.shardName = object.shardName ?? '';
        message.health = object.health ?? 0;
        return message;
    },
};

const baseClickHouseCluster_ShardGroup: object = { name: '', shardNames: '' };

export const ClickHouseCluster_ShardGroup: {
    encode(message: ClickHouseCluster_ShardGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClickHouseCluster_ShardGroup;
    fromJSON(object: any): ClickHouseCluster_ShardGroup;
    toJSON(message: ClickHouseCluster_ShardGroup): unknown;
    fromPartial<I extends Exact<DeepPartial<ClickHouseCluster_ShardGroup>, I>>(object: I): ClickHouseCluster_ShardGroup;
} = {
    encode(
        message: ClickHouseCluster_ShardGroup,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.shardNames) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClickHouseCluster_ShardGroup {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClickHouseCluster_ShardGroup } as ClickHouseCluster_ShardGroup;
        message.shardNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.shardNames.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClickHouseCluster_ShardGroup {
        const message = { ...baseClickHouseCluster_ShardGroup } as ClickHouseCluster_ShardGroup;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.shardNames = (object.shardNames ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: ClickHouseCluster_ShardGroup): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.shardNames) {
            obj.shardNames = message.shardNames.map((e) => e);
        } else {
            obj.shardNames = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClickHouseCluster_ShardGroup>, I>>(
        object: I,
    ): ClickHouseCluster_ShardGroup {
        const message = { ...baseClickHouseCluster_ShardGroup } as ClickHouseCluster_ShardGroup;
        message.name = object.name ?? '';
        message.shardNames = object.shardNames?.map((e) => e) || [];
        return message;
    },
};

const baseClickHouseConnection: object = { managedClusterId: '', databases: '' };

export const ClickHouseConnection: {
    encode(message: ClickHouseConnection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClickHouseConnection;
    fromJSON(object: any): ClickHouseConnection;
    toJSON(message: ClickHouseConnection): unknown;
    fromPartial<I extends Exact<DeepPartial<ClickHouseConnection>, I>>(object: I): ClickHouseConnection;
} = {
    encode(message: ClickHouseConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.cluster !== undefined) {
            ClickHouseCluster.encode(message.cluster, writer.uint32(10).fork()).ldelim();
        }
        if (message.managedClusterId !== '') {
            writer.uint32(18).string(message.managedClusterId);
        }
        if (message.auth !== undefined) {
            ClickHouseAuth.encode(message.auth, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.databases) {
            writer.uint32(34).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClickHouseConnection {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClickHouseConnection } as ClickHouseConnection;
        message.databases = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cluster = ClickHouseCluster.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.managedClusterId = reader.string();
                    break;
                case 3:
                    message.auth = ClickHouseAuth.decode(reader, reader.uint32());
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

    fromJSON(object: any): ClickHouseConnection {
        const message = { ...baseClickHouseConnection } as ClickHouseConnection;
        message.cluster =
            object.cluster !== undefined && object.cluster !== null
                ? ClickHouseCluster.fromJSON(object.cluster)
                : undefined;
        message.managedClusterId =
            object.managedClusterId !== undefined && object.managedClusterId !== null
                ? String(object.managedClusterId)
                : '';
        message.auth =
            object.auth !== undefined && object.auth !== null
                ? ClickHouseAuth.fromJSON(object.auth)
                : undefined;
        message.databases = (object.databases ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: ClickHouseConnection): unknown {
        const obj: any = {};
        message.cluster !== undefined &&
            (obj.cluster = message.cluster ? ClickHouseCluster.toJSON(message.cluster) : undefined);
        message.managedClusterId !== undefined && (obj.managedClusterId = message.managedClusterId);
        message.auth !== undefined &&
            (obj.auth = message.auth ? ClickHouseAuth.toJSON(message.auth) : undefined);
        if (message.databases) {
            obj.databases = message.databases.map((e) => e);
        } else {
            obj.databases = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClickHouseConnection>, I>>(
        object: I,
    ): ClickHouseConnection {
        const message = { ...baseClickHouseConnection } as ClickHouseConnection;
        message.cluster =
            object.cluster !== undefined && object.cluster !== null
                ? ClickHouseCluster.fromPartial(object.cluster)
                : undefined;
        message.managedClusterId = object.managedClusterId ?? '';
        message.auth =
            object.auth !== undefined && object.auth !== null
                ? ClickHouseAuth.fromPartial(object.auth)
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
