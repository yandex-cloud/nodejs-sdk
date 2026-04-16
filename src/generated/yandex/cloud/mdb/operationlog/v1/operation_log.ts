/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.mdb.operationlog.v1';

export interface HostEntity {
    fqdn: string;
    action: string;
    startedAt?: Date;
}

export interface ClusterEntity {
    clusterId: string;
    action: string;
    startedAt?: Date;
    hosts: HostEntity[];
}

export interface OperationLog {
    entities: ClusterEntity[];
}

const baseHostEntity: object = { fqdn: '', action: '' };

export const HostEntity: {
    encode(message: HostEntity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HostEntity;
    fromJSON(object: any): HostEntity;
    toJSON(message: HostEntity): unknown;
    fromPartial<I extends Exact<DeepPartial<HostEntity>, I>>(object: I): HostEntity;
} = {
    encode(message: HostEntity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.fqdn !== '') {
            writer.uint32(10).string(message.fqdn);
        }
        if (message.action !== '') {
            writer.uint32(18).string(message.action);
        }
        if (message.startedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HostEntity {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHostEntity } as HostEntity;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fqdn = reader.string();
                    break;
                case 2:
                    message.action = reader.string();
                    break;
                case 3:
                    message.startedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HostEntity {
        const message = { ...baseHostEntity } as HostEntity;
        message.fqdn = object.fqdn !== undefined && object.fqdn !== null ? String(object.fqdn) : '';
        message.action =
            object.action !== undefined && object.action !== null ? String(object.action) : '';
        message.startedAt =
            object.startedAt !== undefined && object.startedAt !== null
                ? fromJsonTimestamp(object.startedAt)
                : undefined;
        return message;
    },

    toJSON(message: HostEntity): unknown {
        const obj: any = {};
        message.fqdn !== undefined && (obj.fqdn = message.fqdn);
        message.action !== undefined && (obj.action = message.action);
        message.startedAt !== undefined && (obj.startedAt = message.startedAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HostEntity>, I>>(object: I): HostEntity {
        const message = { ...baseHostEntity } as HostEntity;
        message.fqdn = object.fqdn ?? '';
        message.action = object.action ?? '';
        message.startedAt = object.startedAt ?? undefined;
        return message;
    },
};

const baseClusterEntity: object = { clusterId: '', action: '' };

export const ClusterEntity: {
    encode(message: ClusterEntity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClusterEntity;
    fromJSON(object: any): ClusterEntity;
    toJSON(message: ClusterEntity): unknown;
    fromPartial<I extends Exact<DeepPartial<ClusterEntity>, I>>(object: I): ClusterEntity;
} = {
    encode(message: ClusterEntity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.action !== '') {
            writer.uint32(18).string(message.action);
        }
        if (message.startedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.hosts) {
            HostEntity.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClusterEntity {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClusterEntity } as ClusterEntity;
        message.hosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.action = reader.string();
                    break;
                case 3:
                    message.startedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.hosts.push(HostEntity.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClusterEntity {
        const message = { ...baseClusterEntity } as ClusterEntity;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.action =
            object.action !== undefined && object.action !== null ? String(object.action) : '';
        message.startedAt =
            object.startedAt !== undefined && object.startedAt !== null
                ? fromJsonTimestamp(object.startedAt)
                : undefined;
        message.hosts = (object.hosts ?? []).map((e: any) => HostEntity.fromJSON(e));
        return message;
    },

    toJSON(message: ClusterEntity): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.action !== undefined && (obj.action = message.action);
        message.startedAt !== undefined && (obj.startedAt = message.startedAt.toISOString());
        if (message.hosts) {
            obj.hosts = message.hosts.map((e) => (e ? HostEntity.toJSON(e) : undefined));
        } else {
            obj.hosts = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ClusterEntity>, I>>(object: I): ClusterEntity {
        const message = { ...baseClusterEntity } as ClusterEntity;
        message.clusterId = object.clusterId ?? '';
        message.action = object.action ?? '';
        message.startedAt = object.startedAt ?? undefined;
        message.hosts = object.hosts?.map((e) => HostEntity.fromPartial(e)) || [];
        return message;
    },
};

const baseOperationLog: object = {};

export const OperationLog: {
    encode(message: OperationLog, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OperationLog;
    fromJSON(object: any): OperationLog;
    toJSON(message: OperationLog): unknown;
    fromPartial<I extends Exact<DeepPartial<OperationLog>, I>>(object: I): OperationLog;
} = {
    encode(message: OperationLog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.entities) {
            ClusterEntity.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OperationLog {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOperationLog } as OperationLog;
        message.entities = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entities.push(ClusterEntity.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OperationLog {
        const message = { ...baseOperationLog } as OperationLog;
        message.entities = (object.entities ?? []).map((e: any) => ClusterEntity.fromJSON(e));
        return message;
    },

    toJSON(message: OperationLog): unknown {
        const obj: any = {};
        if (message.entities) {
            obj.entities = message.entities.map((e) => (e ? ClusterEntity.toJSON(e) : undefined));
        } else {
            obj.entities = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OperationLog>, I>>(object: I): OperationLog {
        const message = { ...baseOperationLog } as OperationLog;
        message.entities = object.entities?.map((e) => ClusterEntity.fromPartial(e)) || [];
        return message;
    },
};

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

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
