/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Password, TLSParams } from './common';
import { Empty } from '../../../../google/protobuf/empty';

export const protobufPackage = 'yandex.cloud.connectionmanager.v1';

export interface KafkaSaslSecurity {
    user: string;
    password?: Password;
    supportedMechanisms: KafkaSaslSecurity_Mechanism[];
}

export enum KafkaSaslSecurity_Mechanism {
    MECHANISM_UNSPECIFIED = 0,
    PLAIN = 1,
    SCRAM_SHA256 = 2,
    SCRAM_SHA512 = 3,
    UNRECOGNIZED = -1,
}

export function kafkaSaslSecurity_MechanismFromJSON(object: any): KafkaSaslSecurity_Mechanism {
    switch (object) {
        case 0:
        case 'MECHANISM_UNSPECIFIED':
            return KafkaSaslSecurity_Mechanism.MECHANISM_UNSPECIFIED;
        case 1:
        case 'PLAIN':
            return KafkaSaslSecurity_Mechanism.PLAIN;
        case 2:
        case 'SCRAM_SHA256':
            return KafkaSaslSecurity_Mechanism.SCRAM_SHA256;
        case 3:
        case 'SCRAM_SHA512':
            return KafkaSaslSecurity_Mechanism.SCRAM_SHA512;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return KafkaSaslSecurity_Mechanism.UNRECOGNIZED;
    }
}

export function kafkaSaslSecurity_MechanismToJSON(object: KafkaSaslSecurity_Mechanism): string {
    switch (object) {
        case KafkaSaslSecurity_Mechanism.MECHANISM_UNSPECIFIED:
            return 'MECHANISM_UNSPECIFIED';
        case KafkaSaslSecurity_Mechanism.PLAIN:
            return 'PLAIN';
        case KafkaSaslSecurity_Mechanism.SCRAM_SHA256:
            return 'SCRAM_SHA256';
        case KafkaSaslSecurity_Mechanism.SCRAM_SHA512:
            return 'SCRAM_SHA512';
        default:
            return 'UNKNOWN';
    }
}

export interface KafkaAuth {
    sasl?: KafkaSaslSecurity | undefined;
    disabled?: Empty | undefined;
}

export interface KafkaCluster {
    hosts: KafkaCluster_Host[];
    tlsParams?: TLSParams;
}

export interface KafkaCluster_Host {
    host: string;
    port: number;
    health: KafkaCluster_Host_Health;
}

export enum KafkaCluster_Host_Health {
    /** HEALTH_UNSPECIFIED - Host is in unknown state (we have no data) */
    HEALTH_UNSPECIFIED = 0,
    /** ALIVE - Host is alive and well (all services are alive) */
    ALIVE = 1,
    /** DEAD - Host is inoperable (it cannot perform any of its essential functions) */
    DEAD = 2,
    /** DEGRADED - Host is partially alive (it can perform some of its essential functions) */
    DEGRADED = 3,
    UNRECOGNIZED = -1,
}

export function kafkaCluster_Host_HealthFromJSON(object: any): KafkaCluster_Host_Health {
    switch (object) {
        case 0:
        case 'HEALTH_UNSPECIFIED':
            return KafkaCluster_Host_Health.HEALTH_UNSPECIFIED;
        case 1:
        case 'ALIVE':
            return KafkaCluster_Host_Health.ALIVE;
        case 2:
        case 'DEAD':
            return KafkaCluster_Host_Health.DEAD;
        case 3:
        case 'DEGRADED':
            return KafkaCluster_Host_Health.DEGRADED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return KafkaCluster_Host_Health.UNRECOGNIZED;
    }
}

export function kafkaCluster_Host_HealthToJSON(object: KafkaCluster_Host_Health): string {
    switch (object) {
        case KafkaCluster_Host_Health.HEALTH_UNSPECIFIED:
            return 'HEALTH_UNSPECIFIED';
        case KafkaCluster_Host_Health.ALIVE:
            return 'ALIVE';
        case KafkaCluster_Host_Health.DEAD:
            return 'DEAD';
        case KafkaCluster_Host_Health.DEGRADED:
            return 'DEGRADED';
        default:
            return 'UNKNOWN';
    }
}

export interface KafkaConnection {
    /**
     * When creating/updating Connection, the field "cluster" is mutually
     * exclusive with "managed_cluster_id".
     */
    cluster?: KafkaCluster;
    /**
     * When creating/updating Connection, the field "managed_cluster_id" is
     * mutually exclusive with "cluster".
     */
    managedClusterId: string;
    auth?: KafkaAuth;
}

const baseKafkaSaslSecurity: object = { user: '', supportedMechanisms: 0 };

export const KafkaSaslSecurity: {
    encode(message: KafkaSaslSecurity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KafkaSaslSecurity;
    fromJSON(object: any): KafkaSaslSecurity;
    toJSON(message: KafkaSaslSecurity): unknown;
    fromPartial<I extends Exact<DeepPartial<KafkaSaslSecurity>, I>>(object: I): KafkaSaslSecurity;
} = {
    encode(message: KafkaSaslSecurity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.user !== '') {
            writer.uint32(10).string(message.user);
        }
        if (message.password !== undefined) {
            Password.encode(message.password, writer.uint32(18).fork()).ldelim();
        }
        writer.uint32(26).fork();
        for (const v of message.supportedMechanisms) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): KafkaSaslSecurity {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseKafkaSaslSecurity } as KafkaSaslSecurity;
        message.supportedMechanisms = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.user = reader.string();
                    break;
                case 2:
                    message.password = Password.decode(reader, reader.uint32());
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.supportedMechanisms.push(reader.int32() as any);
                        }
                    } else {
                        message.supportedMechanisms.push(reader.int32() as any);
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): KafkaSaslSecurity {
        const message = { ...baseKafkaSaslSecurity } as KafkaSaslSecurity;
        message.user = object.user !== undefined && object.user !== null ? String(object.user) : '';
        message.password =
            object.password !== undefined && object.password !== null
                ? Password.fromJSON(object.password)
                : undefined;
        message.supportedMechanisms = (object.supportedMechanisms ?? []).map((e: any) =>
            kafkaSaslSecurity_MechanismFromJSON(e),
        );
        return message;
    },

    toJSON(message: KafkaSaslSecurity): unknown {
        const obj: any = {};
        message.user !== undefined && (obj.user = message.user);
        message.password !== undefined &&
            (obj.password = message.password ? Password.toJSON(message.password) : undefined);
        if (message.supportedMechanisms) {
            obj.supportedMechanisms = message.supportedMechanisms.map((e) =>
                kafkaSaslSecurity_MechanismToJSON(e),
            );
        } else {
            obj.supportedMechanisms = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<KafkaSaslSecurity>, I>>(object: I): KafkaSaslSecurity {
        const message = { ...baseKafkaSaslSecurity } as KafkaSaslSecurity;
        message.user = object.user ?? '';
        message.password =
            object.password !== undefined && object.password !== null
                ? Password.fromPartial(object.password)
                : undefined;
        message.supportedMechanisms = object.supportedMechanisms?.map((e) => e) || [];
        return message;
    },
};

const baseKafkaAuth: object = {};

export const KafkaAuth: {
    encode(message: KafkaAuth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KafkaAuth;
    fromJSON(object: any): KafkaAuth;
    toJSON(message: KafkaAuth): unknown;
    fromPartial<I extends Exact<DeepPartial<KafkaAuth>, I>>(object: I): KafkaAuth;
} = {
    encode(message: KafkaAuth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.sasl !== undefined) {
            KafkaSaslSecurity.encode(message.sasl, writer.uint32(10).fork()).ldelim();
        }
        if (message.disabled !== undefined) {
            Empty.encode(message.disabled, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): KafkaAuth {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseKafkaAuth } as KafkaAuth;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sasl = KafkaSaslSecurity.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.disabled = Empty.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): KafkaAuth {
        const message = { ...baseKafkaAuth } as KafkaAuth;
        message.sasl =
            object.sasl !== undefined && object.sasl !== null
                ? KafkaSaslSecurity.fromJSON(object.sasl)
                : undefined;
        message.disabled =
            object.disabled !== undefined && object.disabled !== null
                ? Empty.fromJSON(object.disabled)
                : undefined;
        return message;
    },

    toJSON(message: KafkaAuth): unknown {
        const obj: any = {};
        message.sasl !== undefined &&
            (obj.sasl = message.sasl ? KafkaSaslSecurity.toJSON(message.sasl) : undefined);
        message.disabled !== undefined &&
            (obj.disabled = message.disabled ? Empty.toJSON(message.disabled) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<KafkaAuth>, I>>(object: I): KafkaAuth {
        const message = { ...baseKafkaAuth } as KafkaAuth;
        message.sasl =
            object.sasl !== undefined && object.sasl !== null
                ? KafkaSaslSecurity.fromPartial(object.sasl)
                : undefined;
        message.disabled =
            object.disabled !== undefined && object.disabled !== null
                ? Empty.fromPartial(object.disabled)
                : undefined;
        return message;
    },
};

const baseKafkaCluster: object = {};

export const KafkaCluster: {
    encode(message: KafkaCluster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KafkaCluster;
    fromJSON(object: any): KafkaCluster;
    toJSON(message: KafkaCluster): unknown;
    fromPartial<I extends Exact<DeepPartial<KafkaCluster>, I>>(object: I): KafkaCluster;
} = {
    encode(message: KafkaCluster, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.hosts) {
            KafkaCluster_Host.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.tlsParams !== undefined) {
            TLSParams.encode(message.tlsParams, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): KafkaCluster {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseKafkaCluster } as KafkaCluster;
        message.hosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hosts.push(KafkaCluster_Host.decode(reader, reader.uint32()));
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

    fromJSON(object: any): KafkaCluster {
        const message = { ...baseKafkaCluster } as KafkaCluster;
        message.hosts = (object.hosts ?? []).map((e: any) => KafkaCluster_Host.fromJSON(e));
        message.tlsParams =
            object.tlsParams !== undefined && object.tlsParams !== null
                ? TLSParams.fromJSON(object.tlsParams)
                : undefined;
        return message;
    },

    toJSON(message: KafkaCluster): unknown {
        const obj: any = {};
        if (message.hosts) {
            obj.hosts = message.hosts.map((e) => (e ? KafkaCluster_Host.toJSON(e) : undefined));
        } else {
            obj.hosts = [];
        }
        message.tlsParams !== undefined &&
            (obj.tlsParams = message.tlsParams ? TLSParams.toJSON(message.tlsParams) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<KafkaCluster>, I>>(object: I): KafkaCluster {
        const message = { ...baseKafkaCluster } as KafkaCluster;
        message.hosts = object.hosts?.map((e) => KafkaCluster_Host.fromPartial(e)) || [];
        message.tlsParams =
            object.tlsParams !== undefined && object.tlsParams !== null
                ? TLSParams.fromPartial(object.tlsParams)
                : undefined;
        return message;
    },
};

const baseKafkaCluster_Host: object = { host: '', port: 0, health: 0 };

export const KafkaCluster_Host: {
    encode(message: KafkaCluster_Host, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KafkaCluster_Host;
    fromJSON(object: any): KafkaCluster_Host;
    toJSON(message: KafkaCluster_Host): unknown;
    fromPartial<I extends Exact<DeepPartial<KafkaCluster_Host>, I>>(object: I): KafkaCluster_Host;
} = {
    encode(message: KafkaCluster_Host, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.host !== '') {
            writer.uint32(10).string(message.host);
        }
        if (message.port !== 0) {
            writer.uint32(16).int64(message.port);
        }
        if (message.health !== 0) {
            writer.uint32(24).int32(message.health);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): KafkaCluster_Host {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseKafkaCluster_Host } as KafkaCluster_Host;
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
                    message.health = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): KafkaCluster_Host {
        const message = { ...baseKafkaCluster_Host } as KafkaCluster_Host;
        message.host = object.host !== undefined && object.host !== null ? String(object.host) : '';
        message.port = object.port !== undefined && object.port !== null ? Number(object.port) : 0;
        message.health =
            object.health !== undefined && object.health !== null
                ? kafkaCluster_Host_HealthFromJSON(object.health)
                : 0;
        return message;
    },

    toJSON(message: KafkaCluster_Host): unknown {
        const obj: any = {};
        message.host !== undefined && (obj.host = message.host);
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.health !== undefined &&
            (obj.health = kafkaCluster_Host_HealthToJSON(message.health));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<KafkaCluster_Host>, I>>(object: I): KafkaCluster_Host {
        const message = { ...baseKafkaCluster_Host } as KafkaCluster_Host;
        message.host = object.host ?? '';
        message.port = object.port ?? 0;
        message.health = object.health ?? 0;
        return message;
    },
};

const baseKafkaConnection: object = { managedClusterId: '' };

export const KafkaConnection: {
    encode(message: KafkaConnection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KafkaConnection;
    fromJSON(object: any): KafkaConnection;
    toJSON(message: KafkaConnection): unknown;
    fromPartial<I extends Exact<DeepPartial<KafkaConnection>, I>>(object: I): KafkaConnection;
} = {
    encode(message: KafkaConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.cluster !== undefined) {
            KafkaCluster.encode(message.cluster, writer.uint32(10).fork()).ldelim();
        }
        if (message.managedClusterId !== '') {
            writer.uint32(18).string(message.managedClusterId);
        }
        if (message.auth !== undefined) {
            KafkaAuth.encode(message.auth, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): KafkaConnection {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseKafkaConnection } as KafkaConnection;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cluster = KafkaCluster.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.managedClusterId = reader.string();
                    break;
                case 3:
                    message.auth = KafkaAuth.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): KafkaConnection {
        const message = { ...baseKafkaConnection } as KafkaConnection;
        message.cluster =
            object.cluster !== undefined && object.cluster !== null
                ? KafkaCluster.fromJSON(object.cluster)
                : undefined;
        message.managedClusterId =
            object.managedClusterId !== undefined && object.managedClusterId !== null
                ? String(object.managedClusterId)
                : '';
        message.auth =
            object.auth !== undefined && object.auth !== null
                ? KafkaAuth.fromJSON(object.auth)
                : undefined;
        return message;
    },

    toJSON(message: KafkaConnection): unknown {
        const obj: any = {};
        message.cluster !== undefined &&
            (obj.cluster = message.cluster ? KafkaCluster.toJSON(message.cluster) : undefined);
        message.managedClusterId !== undefined && (obj.managedClusterId = message.managedClusterId);
        message.auth !== undefined &&
            (obj.auth = message.auth ? KafkaAuth.toJSON(message.auth) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<KafkaConnection>, I>>(object: I): KafkaConnection {
        const message = { ...baseKafkaConnection } as KafkaConnection;
        message.cluster =
            object.cluster !== undefined && object.cluster !== null
                ? KafkaCluster.fromPartial(object.cluster)
                : undefined;
        message.managedClusterId = object.managedClusterId ?? '';
        message.auth =
            object.auth !== undefined && object.auth !== null
                ? KafkaAuth.fromPartial(object.auth)
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
