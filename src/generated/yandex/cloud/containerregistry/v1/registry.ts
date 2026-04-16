/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.containerregistry.v1';

/** A Registry resource. For more information, see the [Registry](/docs/container-registry/concepts/registry) section of the documentation. */
export interface Registry {
    /** Output only. ID of the registry. */
    id: string;
    /** ID of the folder that the registry belongs to. */
    folderId: string;
    /** Name of the registry. */
    name: string;
    /** Output only. Status of the registry. */
    status: Registry_Status;
    /** Output only. Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt?: Date;
    /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
    labels: { [key: string]: string };
}

export enum Registry_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Registry is being created. */
    CREATING = 1,
    /** ACTIVE - Registry is ready to use. */
    ACTIVE = 2,
    /** DELETING - Registry is being deleted. */
    DELETING = 3,
    UNRECOGNIZED = -1,
}

export function registry_StatusFromJSON(object: any): Registry_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Registry_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return Registry_Status.CREATING;
        case 2:
        case 'ACTIVE':
            return Registry_Status.ACTIVE;
        case 3:
        case 'DELETING':
            return Registry_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Registry_Status.UNRECOGNIZED;
    }
}

export function registry_StatusToJSON(object: Registry_Status): string {
    switch (object) {
        case Registry_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Registry_Status.CREATING:
            return 'CREATING';
        case Registry_Status.ACTIVE:
            return 'ACTIVE';
        case Registry_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}

export interface Registry_LabelsEntry {
    key: string;
    value: string;
}

const baseRegistry: object = { id: '', folderId: '', name: '', status: 0 };

export const Registry = {
    encode(message: Registry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Registry_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Registry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRegistry } as Registry;
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
                    message.name = reader.string();
                    break;
                case 4:
                    message.status = reader.int32() as any;
                    break;
                case 5:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    const entry6 = Registry_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Registry {
        const message = { ...baseRegistry } as Registry;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.status =
            object.status !== undefined && object.status !== null
                ? registry_StatusFromJSON(object.status)
                : 0;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: Registry): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.status !== undefined && (obj.status = registry_StatusToJSON(message.status));
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Registry>, I>>(object: I): Registry {
        const message = { ...baseRegistry } as Registry;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.name = object.name ?? '';
        message.status = object.status ?? 0;
        message.createdAt = object.createdAt ?? undefined;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        return message;
    },
};

const baseRegistry_LabelsEntry: object = { key: '', value: '' };

export const Registry_LabelsEntry = {
    encode(message: Registry_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Registry_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRegistry_LabelsEntry } as Registry_LabelsEntry;
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

    fromJSON(object: any): Registry_LabelsEntry {
        const message = { ...baseRegistry_LabelsEntry } as Registry_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Registry_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Registry_LabelsEntry>, I>>(
        object: I,
    ): Registry_LabelsEntry {
        const message = { ...baseRegistry_LabelsEntry } as Registry_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
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
