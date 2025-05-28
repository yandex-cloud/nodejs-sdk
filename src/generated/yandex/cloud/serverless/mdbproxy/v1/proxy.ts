/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.serverless.mdbproxy.v1';

export interface Proxy {
    /** ID of the proxy. */
    id: string;
    /** ID of the folder that the proxy belongs to. */
    folderId: string;
    /** Creation timestamp for the proxy. */
    createdAt?: Date;
    /** Name of the proxy. */
    name: string;
    /** Description of the proxy. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** MDB specific settings. */
    target?: Target;
}

export interface Proxy_LabelsEntry {
    key: string;
    value: string;
}

export interface Target {
    /** Clickhouse settings for proxy. */
    clickhouse?: Target_ClickHouse | undefined;
    /** PostgreSQL settings for proxy. */
    postgresql?: Target_PostgreSQL | undefined;
}

export interface Target_PostgreSQL {
    /** Cluster identifier for postgresql. */
    clusterId: string;
    /** PostgreSQL user. */
    user: string;
    /** PostgreSQL password, input only field. */
    password: string;
    /** PostgreSQL database name. */
    db: string;
    /** PostgreSQL proxy-host for connection, output only field. */
    endpoint: string;
}

export interface Target_ClickHouse {
    /** Cluster identifier for clickhouse. */
    clusterId: string;
    /** Clickhouse user. */
    user: string;
    /** Clickhouse password, input only field. */
    password: string;
    /** Clickhouse database name. */
    db: string;
    /** Clickhouse proxy-host for connection, output only field. */
    endpoint: string;
}

const baseProxy: object = { id: '', folderId: '', name: '', description: '' };

export const Proxy = {
    encode(message: Proxy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Proxy_LabelsEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).ldelim();
        });
        if (message.target !== undefined) {
            Target.encode(message.target, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Proxy {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseProxy } as Proxy;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = Proxy_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.target = Target.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Proxy {
        const message = { ...baseProxy } as Proxy;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.target =
            object.target !== undefined && object.target !== null
                ? Target.fromJSON(object.target)
                : undefined;
        return message;
    },

    toJSON(message: Proxy): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.target !== undefined &&
            (obj.target = message.target ? Target.toJSON(message.target) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Proxy>, I>>(object: I): Proxy {
        const message = { ...baseProxy } as Proxy;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.target =
            object.target !== undefined && object.target !== null
                ? Target.fromPartial(object.target)
                : undefined;
        return message;
    },
};

const baseProxy_LabelsEntry: object = { key: '', value: '' };

export const Proxy_LabelsEntry = {
    encode(message: Proxy_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Proxy_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseProxy_LabelsEntry } as Proxy_LabelsEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Proxy_LabelsEntry {
        const message = { ...baseProxy_LabelsEntry } as Proxy_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Proxy_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Proxy_LabelsEntry>, I>>(object: I): Proxy_LabelsEntry {
        const message = { ...baseProxy_LabelsEntry } as Proxy_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseTarget: object = {};

export const Target = {
    encode(message: Target, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clickhouse !== undefined) {
            Target_ClickHouse.encode(message.clickhouse, writer.uint32(10).fork()).ldelim();
        }
        if (message.postgresql !== undefined) {
            Target_PostgreSQL.encode(message.postgresql, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Target {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTarget } as Target;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clickhouse = Target_ClickHouse.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.postgresql = Target_PostgreSQL.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Target {
        const message = { ...baseTarget } as Target;
        message.clickhouse =
            object.clickhouse !== undefined && object.clickhouse !== null
                ? Target_ClickHouse.fromJSON(object.clickhouse)
                : undefined;
        message.postgresql =
            object.postgresql !== undefined && object.postgresql !== null
                ? Target_PostgreSQL.fromJSON(object.postgresql)
                : undefined;
        return message;
    },

    toJSON(message: Target): unknown {
        const obj: any = {};
        message.clickhouse !== undefined &&
            (obj.clickhouse = message.clickhouse
                ? Target_ClickHouse.toJSON(message.clickhouse)
                : undefined);
        message.postgresql !== undefined &&
            (obj.postgresql = message.postgresql
                ? Target_PostgreSQL.toJSON(message.postgresql)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Target>, I>>(object: I): Target {
        const message = { ...baseTarget } as Target;
        message.clickhouse =
            object.clickhouse !== undefined && object.clickhouse !== null
                ? Target_ClickHouse.fromPartial(object.clickhouse)
                : undefined;
        message.postgresql =
            object.postgresql !== undefined && object.postgresql !== null
                ? Target_PostgreSQL.fromPartial(object.postgresql)
                : undefined;
        return message;
    },
};

const baseTarget_PostgreSQL: object = {
    clusterId: '',
    user: '',
    password: '',
    db: '',
    endpoint: '',
};

export const Target_PostgreSQL = {
    encode(message: Target_PostgreSQL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.user !== '') {
            writer.uint32(18).string(message.user);
        }
        if (message.password !== '') {
            writer.uint32(26).string(message.password);
        }
        if (message.db !== '') {
            writer.uint32(34).string(message.db);
        }
        if (message.endpoint !== '') {
            writer.uint32(42).string(message.endpoint);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Target_PostgreSQL {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTarget_PostgreSQL } as Target_PostgreSQL;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.user = reader.string();
                    break;
                case 3:
                    message.password = reader.string();
                    break;
                case 4:
                    message.db = reader.string();
                    break;
                case 5:
                    message.endpoint = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Target_PostgreSQL {
        const message = { ...baseTarget_PostgreSQL } as Target_PostgreSQL;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.user = object.user !== undefined && object.user !== null ? String(object.user) : '';
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
                : '';
        message.db = object.db !== undefined && object.db !== null ? String(object.db) : '';
        message.endpoint =
            object.endpoint !== undefined && object.endpoint !== null
                ? String(object.endpoint)
                : '';
        return message;
    },

    toJSON(message: Target_PostgreSQL): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.user !== undefined && (obj.user = message.user);
        message.password !== undefined && (obj.password = message.password);
        message.db !== undefined && (obj.db = message.db);
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Target_PostgreSQL>, I>>(object: I): Target_PostgreSQL {
        const message = { ...baseTarget_PostgreSQL } as Target_PostgreSQL;
        message.clusterId = object.clusterId ?? '';
        message.user = object.user ?? '';
        message.password = object.password ?? '';
        message.db = object.db ?? '';
        message.endpoint = object.endpoint ?? '';
        return message;
    },
};

const baseTarget_ClickHouse: object = {
    clusterId: '',
    user: '',
    password: '',
    db: '',
    endpoint: '',
};

export const Target_ClickHouse = {
    encode(message: Target_ClickHouse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.user !== '') {
            writer.uint32(18).string(message.user);
        }
        if (message.password !== '') {
            writer.uint32(26).string(message.password);
        }
        if (message.db !== '') {
            writer.uint32(34).string(message.db);
        }
        if (message.endpoint !== '') {
            writer.uint32(42).string(message.endpoint);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Target_ClickHouse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTarget_ClickHouse } as Target_ClickHouse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.user = reader.string();
                    break;
                case 3:
                    message.password = reader.string();
                    break;
                case 4:
                    message.db = reader.string();
                    break;
                case 5:
                    message.endpoint = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Target_ClickHouse {
        const message = { ...baseTarget_ClickHouse } as Target_ClickHouse;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.user = object.user !== undefined && object.user !== null ? String(object.user) : '';
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
                : '';
        message.db = object.db !== undefined && object.db !== null ? String(object.db) : '';
        message.endpoint =
            object.endpoint !== undefined && object.endpoint !== null
                ? String(object.endpoint)
                : '';
        return message;
    },

    toJSON(message: Target_ClickHouse): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.user !== undefined && (obj.user = message.user);
        message.password !== undefined && (obj.password = message.password);
        message.db !== undefined && (obj.db = message.db);
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Target_ClickHouse>, I>>(object: I): Target_ClickHouse {
        const message = { ...baseTarget_ClickHouse } as Target_ClickHouse;
        message.clusterId = object.clusterId ?? '';
        message.user = object.user ?? '';
        message.password = object.password ?? '';
        message.db = object.db ?? '';
        message.endpoint = object.endpoint ?? '';
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
