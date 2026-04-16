/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { TLSParams, UserPasswordAuth } from './common';

export const protobufPackage = 'yandex.cloud.connectionmanager.v1';

export interface TrinoAuth {
    userPassword?: UserPasswordAuth | undefined;
}

export interface TrinoCluster {
    coordinator?: TrinoCluster_Coordinator;
    tlsParams?: TLSParams;
}

export interface TrinoCluster_Coordinator {
    host: string;
    port: number;
}

export interface TrinoConnection {
    cluster?: TrinoCluster;
    auth?: TrinoAuth;
}

const baseTrinoAuth: object = {};

export const TrinoAuth: {
    encode(message: TrinoAuth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TrinoAuth;
    fromJSON(object: any): TrinoAuth;
    toJSON(message: TrinoAuth): unknown;
    fromPartial<I extends Exact<DeepPartial<TrinoAuth>, I>>(object: I): TrinoAuth;
} = {
    encode(message: TrinoAuth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userPassword !== undefined) {
            UserPasswordAuth.encode(message.userPassword, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TrinoAuth {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrinoAuth } as TrinoAuth;
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

    fromJSON(object: any): TrinoAuth {
        const message = { ...baseTrinoAuth } as TrinoAuth;
        message.userPassword =
            object.userPassword !== undefined && object.userPassword !== null
                ? UserPasswordAuth.fromJSON(object.userPassword)
                : undefined;
        return message;
    },

    toJSON(message: TrinoAuth): unknown {
        const obj: any = {};
        message.userPassword !== undefined &&
            (obj.userPassword = message.userPassword
                ? UserPasswordAuth.toJSON(message.userPassword)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TrinoAuth>, I>>(object: I): TrinoAuth {
        const message = { ...baseTrinoAuth } as TrinoAuth;
        message.userPassword =
            object.userPassword !== undefined && object.userPassword !== null
                ? UserPasswordAuth.fromPartial(object.userPassword)
                : undefined;
        return message;
    },
};

const baseTrinoCluster: object = {};

export const TrinoCluster: {
    encode(message: TrinoCluster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TrinoCluster;
    fromJSON(object: any): TrinoCluster;
    toJSON(message: TrinoCluster): unknown;
    fromPartial<I extends Exact<DeepPartial<TrinoCluster>, I>>(object: I): TrinoCluster;
} = {
    encode(message: TrinoCluster, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.coordinator !== undefined) {
            TrinoCluster_Coordinator.encode(message.coordinator, writer.uint32(10).fork()).ldelim();
        }
        if (message.tlsParams !== undefined) {
            TLSParams.encode(message.tlsParams, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TrinoCluster {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrinoCluster } as TrinoCluster;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coordinator = TrinoCluster_Coordinator.decode(reader, reader.uint32());
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

    fromJSON(object: any): TrinoCluster {
        const message = { ...baseTrinoCluster } as TrinoCluster;
        message.coordinator =
            object.coordinator !== undefined && object.coordinator !== null
                ? TrinoCluster_Coordinator.fromJSON(object.coordinator)
                : undefined;
        message.tlsParams =
            object.tlsParams !== undefined && object.tlsParams !== null
                ? TLSParams.fromJSON(object.tlsParams)
                : undefined;
        return message;
    },

    toJSON(message: TrinoCluster): unknown {
        const obj: any = {};
        message.coordinator !== undefined &&
            (obj.coordinator = message.coordinator
                ? TrinoCluster_Coordinator.toJSON(message.coordinator)
                : undefined);
        message.tlsParams !== undefined &&
            (obj.tlsParams = message.tlsParams ? TLSParams.toJSON(message.tlsParams) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TrinoCluster>, I>>(object: I): TrinoCluster {
        const message = { ...baseTrinoCluster } as TrinoCluster;
        message.coordinator =
            object.coordinator !== undefined && object.coordinator !== null
                ? TrinoCluster_Coordinator.fromPartial(object.coordinator)
                : undefined;
        message.tlsParams =
            object.tlsParams !== undefined && object.tlsParams !== null
                ? TLSParams.fromPartial(object.tlsParams)
                : undefined;
        return message;
    },
};

const baseTrinoCluster_Coordinator: object = { host: '', port: 0 };

export const TrinoCluster_Coordinator: {
    encode(message: TrinoCluster_Coordinator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TrinoCluster_Coordinator;
    fromJSON(object: any): TrinoCluster_Coordinator;
    toJSON(message: TrinoCluster_Coordinator): unknown;
    fromPartial<I extends Exact<DeepPartial<TrinoCluster_Coordinator>, I>>(object: I): TrinoCluster_Coordinator;
} = {
    encode(
        message: TrinoCluster_Coordinator,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.host !== '') {
            writer.uint32(10).string(message.host);
        }
        if (message.port !== 0) {
            writer.uint32(16).int64(message.port);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TrinoCluster_Coordinator {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrinoCluster_Coordinator } as TrinoCluster_Coordinator;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.host = reader.string();
                    break;
                case 2:
                    message.port = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TrinoCluster_Coordinator {
        const message = { ...baseTrinoCluster_Coordinator } as TrinoCluster_Coordinator;
        message.host = object.host !== undefined && object.host !== null ? String(object.host) : '';
        message.port = object.port !== undefined && object.port !== null ? Number(object.port) : 0;
        return message;
    },

    toJSON(message: TrinoCluster_Coordinator): unknown {
        const obj: any = {};
        message.host !== undefined && (obj.host = message.host);
        message.port !== undefined && (obj.port = Math.round(message.port));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TrinoCluster_Coordinator>, I>>(
        object: I,
    ): TrinoCluster_Coordinator {
        const message = { ...baseTrinoCluster_Coordinator } as TrinoCluster_Coordinator;
        message.host = object.host ?? '';
        message.port = object.port ?? 0;
        return message;
    },
};

const baseTrinoConnection: object = {};

export const TrinoConnection: {
    encode(message: TrinoConnection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TrinoConnection;
    fromJSON(object: any): TrinoConnection;
    toJSON(message: TrinoConnection): unknown;
    fromPartial<I extends Exact<DeepPartial<TrinoConnection>, I>>(object: I): TrinoConnection;
} = {
    encode(message: TrinoConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.cluster !== undefined) {
            TrinoCluster.encode(message.cluster, writer.uint32(10).fork()).ldelim();
        }
        if (message.auth !== undefined) {
            TrinoAuth.encode(message.auth, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TrinoConnection {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrinoConnection } as TrinoConnection;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cluster = TrinoCluster.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.auth = TrinoAuth.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TrinoConnection {
        const message = { ...baseTrinoConnection } as TrinoConnection;
        message.cluster =
            object.cluster !== undefined && object.cluster !== null
                ? TrinoCluster.fromJSON(object.cluster)
                : undefined;
        message.auth =
            object.auth !== undefined && object.auth !== null
                ? TrinoAuth.fromJSON(object.auth)
                : undefined;
        return message;
    },

    toJSON(message: TrinoConnection): unknown {
        const obj: any = {};
        message.cluster !== undefined &&
            (obj.cluster = message.cluster ? TrinoCluster.toJSON(message.cluster) : undefined);
        message.auth !== undefined &&
            (obj.auth = message.auth ? TrinoAuth.toJSON(message.auth) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TrinoConnection>, I>>(object: I): TrinoConnection {
        const message = { ...baseTrinoConnection } as TrinoConnection;
        message.cluster =
            object.cluster !== undefined && object.cluster !== null
                ? TrinoCluster.fromPartial(object.cluster)
                : undefined;
        message.auth =
            object.auth !== undefined && object.auth !== null
                ? TrinoAuth.fromPartial(object.auth)
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
