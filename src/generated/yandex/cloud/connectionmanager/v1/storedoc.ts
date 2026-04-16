/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { TLSParams, UserPasswordAuth } from './common';

export const protobufPackage = 'yandex.cloud.connectionmanager.v1';

export interface StoreDocAuth {
    userPassword?: UserPasswordAuth | undefined;
    authSource: string;
}

export interface StoreDocCluster {
    hosts: StoreDocCluster_Host[];
    tlsParams?: TLSParams;
}

export interface StoreDocCluster_Host {
    host: string;
    port: number;
    role: StoreDocCluster_Host_Role;
    health: StoreDocCluster_Host_Health;
    type: StoreDocCluster_Host_Type;
}

export enum StoreDocCluster_Host_Type {
    TYPE_UNSPECIFIED = 0,
    MONGOD = 1,
    MONGOS = 2,
    MONGOINFRA = 3,
    UNRECOGNIZED = -1,
}

export function storeDocCluster_Host_TypeFromJSON(object: any): StoreDocCluster_Host_Type {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return StoreDocCluster_Host_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'MONGOD':
            return StoreDocCluster_Host_Type.MONGOD;
        case 2:
        case 'MONGOS':
            return StoreDocCluster_Host_Type.MONGOS;
        case 3:
        case 'MONGOINFRA':
            return StoreDocCluster_Host_Type.MONGOINFRA;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return StoreDocCluster_Host_Type.UNRECOGNIZED;
    }
}

export function storeDocCluster_Host_TypeToJSON(object: StoreDocCluster_Host_Type): string {
    switch (object) {
        case StoreDocCluster_Host_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case StoreDocCluster_Host_Type.MONGOD:
            return 'MONGOD';
        case StoreDocCluster_Host_Type.MONGOS:
            return 'MONGOS';
        case StoreDocCluster_Host_Type.MONGOINFRA:
            return 'MONGOINFRA';
        default:
            return 'UNKNOWN';
    }
}

export enum StoreDocCluster_Host_Role {
    ROLE_UNSPECIFIED = 0,
    PRIMARY = 1,
    SECONDARY = 2,
    UNRECOGNIZED = -1,
}

export function storeDocCluster_Host_RoleFromJSON(object: any): StoreDocCluster_Host_Role {
    switch (object) {
        case 0:
        case 'ROLE_UNSPECIFIED':
            return StoreDocCluster_Host_Role.ROLE_UNSPECIFIED;
        case 1:
        case 'PRIMARY':
            return StoreDocCluster_Host_Role.PRIMARY;
        case 2:
        case 'SECONDARY':
            return StoreDocCluster_Host_Role.SECONDARY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return StoreDocCluster_Host_Role.UNRECOGNIZED;
    }
}

export function storeDocCluster_Host_RoleToJSON(object: StoreDocCluster_Host_Role): string {
    switch (object) {
        case StoreDocCluster_Host_Role.ROLE_UNSPECIFIED:
            return 'ROLE_UNSPECIFIED';
        case StoreDocCluster_Host_Role.PRIMARY:
            return 'PRIMARY';
        case StoreDocCluster_Host_Role.SECONDARY:
            return 'SECONDARY';
        default:
            return 'UNKNOWN';
    }
}

export enum StoreDocCluster_Host_Health {
    HEALTH_UNSPECIFIED = 0,
    ALIVE = 1,
    DEAD = 2,
    DEGRADED = 3,
    UNRECOGNIZED = -1,
}

export function storeDocCluster_Host_HealthFromJSON(object: any): StoreDocCluster_Host_Health {
    switch (object) {
        case 0:
        case 'HEALTH_UNSPECIFIED':
            return StoreDocCluster_Host_Health.HEALTH_UNSPECIFIED;
        case 1:
        case 'ALIVE':
            return StoreDocCluster_Host_Health.ALIVE;
        case 2:
        case 'DEAD':
            return StoreDocCluster_Host_Health.DEAD;
        case 3:
        case 'DEGRADED':
            return StoreDocCluster_Host_Health.DEGRADED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return StoreDocCluster_Host_Health.UNRECOGNIZED;
    }
}

export function storeDocCluster_Host_HealthToJSON(object: StoreDocCluster_Host_Health): string {
    switch (object) {
        case StoreDocCluster_Host_Health.HEALTH_UNSPECIFIED:
            return 'HEALTH_UNSPECIFIED';
        case StoreDocCluster_Host_Health.ALIVE:
            return 'ALIVE';
        case StoreDocCluster_Host_Health.DEAD:
            return 'DEAD';
        case StoreDocCluster_Host_Health.DEGRADED:
            return 'DEGRADED';
        default:
            return 'UNKNOWN';
    }
}

export interface StoreDocConnection {
    /**
     * When creating/updating Connection, the field "cluster" is mutually
     * exclusive with "managed_cluster_id".
     */
    cluster?: StoreDocCluster;
    /**
     * When creating/updating Connection, the field "managed_cluster_id" is mutually
     * exclusive with "cluster".
     */
    managedClusterId: string;
    auth?: StoreDocAuth;
    databases: string[];
}

const baseStoreDocAuth: object = { authSource: '' };

export const StoreDocAuth: {
    encode(message: StoreDocAuth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StoreDocAuth;
    fromJSON(object: any): StoreDocAuth;
    toJSON(message: StoreDocAuth): unknown;
    fromPartial<I extends Exact<DeepPartial<StoreDocAuth>, I>>(object: I): StoreDocAuth;
} = {
    encode(message: StoreDocAuth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userPassword !== undefined) {
            UserPasswordAuth.encode(message.userPassword, writer.uint32(10).fork()).ldelim();
        }
        if (message.authSource !== '') {
            writer.uint32(18).string(message.authSource);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StoreDocAuth {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStoreDocAuth } as StoreDocAuth;
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

    fromJSON(object: any): StoreDocAuth {
        const message = { ...baseStoreDocAuth } as StoreDocAuth;
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

    toJSON(message: StoreDocAuth): unknown {
        const obj: any = {};
        message.userPassword !== undefined &&
            (obj.userPassword = message.userPassword
                ? UserPasswordAuth.toJSON(message.userPassword)
                : undefined);
        message.authSource !== undefined && (obj.authSource = message.authSource);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StoreDocAuth>, I>>(object: I): StoreDocAuth {
        const message = { ...baseStoreDocAuth } as StoreDocAuth;
        message.userPassword =
            object.userPassword !== undefined && object.userPassword !== null
                ? UserPasswordAuth.fromPartial(object.userPassword)
                : undefined;
        message.authSource = object.authSource ?? '';
        return message;
    },
};

const baseStoreDocCluster: object = {};

export const StoreDocCluster: {
    encode(message: StoreDocCluster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StoreDocCluster;
    fromJSON(object: any): StoreDocCluster;
    toJSON(message: StoreDocCluster): unknown;
    fromPartial<I extends Exact<DeepPartial<StoreDocCluster>, I>>(object: I): StoreDocCluster;
} = {
    encode(message: StoreDocCluster, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.hosts) {
            StoreDocCluster_Host.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.tlsParams !== undefined) {
            TLSParams.encode(message.tlsParams, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StoreDocCluster {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStoreDocCluster } as StoreDocCluster;
        message.hosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hosts.push(StoreDocCluster_Host.decode(reader, reader.uint32()));
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

    fromJSON(object: any): StoreDocCluster {
        const message = { ...baseStoreDocCluster } as StoreDocCluster;
        message.hosts = (object.hosts ?? []).map((e: any) => StoreDocCluster_Host.fromJSON(e));
        message.tlsParams =
            object.tlsParams !== undefined && object.tlsParams !== null
                ? TLSParams.fromJSON(object.tlsParams)
                : undefined;
        return message;
    },

    toJSON(message: StoreDocCluster): unknown {
        const obj: any = {};
        if (message.hosts) {
            obj.hosts = message.hosts.map((e) => (e ? StoreDocCluster_Host.toJSON(e) : undefined));
        } else {
            obj.hosts = [];
        }
        message.tlsParams !== undefined &&
            (obj.tlsParams = message.tlsParams ? TLSParams.toJSON(message.tlsParams) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StoreDocCluster>, I>>(object: I): StoreDocCluster {
        const message = { ...baseStoreDocCluster } as StoreDocCluster;
        message.hosts = object.hosts?.map((e) => StoreDocCluster_Host.fromPartial(e)) || [];
        message.tlsParams =
            object.tlsParams !== undefined && object.tlsParams !== null
                ? TLSParams.fromPartial(object.tlsParams)
                : undefined;
        return message;
    },
};

const baseStoreDocCluster_Host: object = { host: '', port: 0, role: 0, health: 0, type: 0 };

export const StoreDocCluster_Host: {
    encode(message: StoreDocCluster_Host, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StoreDocCluster_Host;
    fromJSON(object: any): StoreDocCluster_Host;
    toJSON(message: StoreDocCluster_Host): unknown;
    fromPartial<I extends Exact<DeepPartial<StoreDocCluster_Host>, I>>(object: I): StoreDocCluster_Host;
} = {
    encode(message: StoreDocCluster_Host, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): StoreDocCluster_Host {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStoreDocCluster_Host } as StoreDocCluster_Host;
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

    fromJSON(object: any): StoreDocCluster_Host {
        const message = { ...baseStoreDocCluster_Host } as StoreDocCluster_Host;
        message.host = object.host !== undefined && object.host !== null ? String(object.host) : '';
        message.port = object.port !== undefined && object.port !== null ? Number(object.port) : 0;
        message.role =
            object.role !== undefined && object.role !== null
                ? storeDocCluster_Host_RoleFromJSON(object.role)
                : 0;
        message.health =
            object.health !== undefined && object.health !== null
                ? storeDocCluster_Host_HealthFromJSON(object.health)
                : 0;
        message.type =
            object.type !== undefined && object.type !== null
                ? storeDocCluster_Host_TypeFromJSON(object.type)
                : 0;
        return message;
    },

    toJSON(message: StoreDocCluster_Host): unknown {
        const obj: any = {};
        message.host !== undefined && (obj.host = message.host);
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.role !== undefined && (obj.role = storeDocCluster_Host_RoleToJSON(message.role));
        message.health !== undefined &&
            (obj.health = storeDocCluster_Host_HealthToJSON(message.health));
        message.type !== undefined && (obj.type = storeDocCluster_Host_TypeToJSON(message.type));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StoreDocCluster_Host>, I>>(
        object: I,
    ): StoreDocCluster_Host {
        const message = { ...baseStoreDocCluster_Host } as StoreDocCluster_Host;
        message.host = object.host ?? '';
        message.port = object.port ?? 0;
        message.role = object.role ?? 0;
        message.health = object.health ?? 0;
        message.type = object.type ?? 0;
        return message;
    },
};

const baseStoreDocConnection: object = { managedClusterId: '', databases: '' };

export const StoreDocConnection: {
    encode(message: StoreDocConnection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StoreDocConnection;
    fromJSON(object: any): StoreDocConnection;
    toJSON(message: StoreDocConnection): unknown;
    fromPartial<I extends Exact<DeepPartial<StoreDocConnection>, I>>(object: I): StoreDocConnection;
} = {
    encode(message: StoreDocConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.cluster !== undefined) {
            StoreDocCluster.encode(message.cluster, writer.uint32(10).fork()).ldelim();
        }
        if (message.managedClusterId !== '') {
            writer.uint32(18).string(message.managedClusterId);
        }
        if (message.auth !== undefined) {
            StoreDocAuth.encode(message.auth, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.databases) {
            writer.uint32(34).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StoreDocConnection {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStoreDocConnection } as StoreDocConnection;
        message.databases = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cluster = StoreDocCluster.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.managedClusterId = reader.string();
                    break;
                case 3:
                    message.auth = StoreDocAuth.decode(reader, reader.uint32());
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

    fromJSON(object: any): StoreDocConnection {
        const message = { ...baseStoreDocConnection } as StoreDocConnection;
        message.cluster =
            object.cluster !== undefined && object.cluster !== null
                ? StoreDocCluster.fromJSON(object.cluster)
                : undefined;
        message.managedClusterId =
            object.managedClusterId !== undefined && object.managedClusterId !== null
                ? String(object.managedClusterId)
                : '';
        message.auth =
            object.auth !== undefined && object.auth !== null
                ? StoreDocAuth.fromJSON(object.auth)
                : undefined;
        message.databases = (object.databases ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: StoreDocConnection): unknown {
        const obj: any = {};
        message.cluster !== undefined &&
            (obj.cluster = message.cluster ? StoreDocCluster.toJSON(message.cluster) : undefined);
        message.managedClusterId !== undefined && (obj.managedClusterId = message.managedClusterId);
        message.auth !== undefined &&
            (obj.auth = message.auth ? StoreDocAuth.toJSON(message.auth) : undefined);
        if (message.databases) {
            obj.databases = message.databases.map((e) => e);
        } else {
            obj.databases = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<StoreDocConnection>, I>>(
        object: I,
    ): StoreDocConnection {
        const message = { ...baseStoreDocConnection } as StoreDocConnection;
        message.cluster =
            object.cluster !== undefined && object.cluster !== null
                ? StoreDocCluster.fromPartial(object.cluster)
                : undefined;
        message.managedClusterId = object.managedClusterId ?? '';
        message.auth =
            object.auth !== undefined && object.auth !== null
                ? StoreDocAuth.fromPartial(object.auth)
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
