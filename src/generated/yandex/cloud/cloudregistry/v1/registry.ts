/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.cloudregistry.v1';

/** A Registry resource. */
export interface Registry {
    /** Output only. ID of the registry. */
    id: string;
    /** ID of the folder that the registry belongs to. */
    folderId: string;
    /** Name of the registry. */
    name: string;
    /** Kind of the registry. */
    kind: Registry_Kind;
    /** Type of the registry. */
    type: Registry_Type;
    /** Output only. Status of the registry. */
    status: Registry_Status;
    /** Description of the registry. */
    description: string;
    /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
    labels: { [key: string]: string };
    /** Resource properties as `key:value` pairs. Maximum of 64 per resource. */
    properties: { [key: string]: string };
    /** Output only. Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt?: Date;
    /** Output only. Modification timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    modifiedAt?: Date;
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

export enum Registry_Kind {
    KIND_UNSPECIFIED = 0,
    /** MAVEN - Registry kind is maven. */
    MAVEN = 1,
    /** NPM - Registry kind is npm. */
    NPM = 2,
    /** DOCKER - Registry kind is docker. */
    DOCKER = 3,
    /** NUGET - Registry kind is nuget. */
    NUGET = 4,
    UNRECOGNIZED = -1,
}

export function registry_KindFromJSON(object: any): Registry_Kind {
    switch (object) {
        case 0:
        case 'KIND_UNSPECIFIED':
            return Registry_Kind.KIND_UNSPECIFIED;
        case 1:
        case 'MAVEN':
            return Registry_Kind.MAVEN;
        case 2:
        case 'NPM':
            return Registry_Kind.NPM;
        case 3:
        case 'DOCKER':
            return Registry_Kind.DOCKER;
        case 4:
        case 'NUGET':
            return Registry_Kind.NUGET;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Registry_Kind.UNRECOGNIZED;
    }
}

export function registry_KindToJSON(object: Registry_Kind): string {
    switch (object) {
        case Registry_Kind.KIND_UNSPECIFIED:
            return 'KIND_UNSPECIFIED';
        case Registry_Kind.MAVEN:
            return 'MAVEN';
        case Registry_Kind.NPM:
            return 'NPM';
        case Registry_Kind.DOCKER:
            return 'DOCKER';
        case Registry_Kind.NUGET:
            return 'NUGET';
        default:
            return 'UNKNOWN';
    }
}

export enum Registry_Type {
    TYPE_UNSPECIFIED = 0,
    /** LOCAL - Registry type is local. */
    LOCAL = 1,
    REMOTE = 2,
    VIRTUAL = 3,
    UNRECOGNIZED = -1,
}

export function registry_TypeFromJSON(object: any): Registry_Type {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return Registry_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'LOCAL':
            return Registry_Type.LOCAL;
        case 2:
        case 'REMOTE':
            return Registry_Type.REMOTE;
        case 3:
        case 'VIRTUAL':
            return Registry_Type.VIRTUAL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Registry_Type.UNRECOGNIZED;
    }
}

export function registry_TypeToJSON(object: Registry_Type): string {
    switch (object) {
        case Registry_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case Registry_Type.LOCAL:
            return 'LOCAL';
        case Registry_Type.REMOTE:
            return 'REMOTE';
        case Registry_Type.VIRTUAL:
            return 'VIRTUAL';
        default:
            return 'UNKNOWN';
    }
}

export interface Registry_LabelsEntry {
    key: string;
    value: string;
}

export interface Registry_PropertiesEntry {
    key: string;
    value: string;
}

const baseRegistry: object = {
    id: '',
    folderId: '',
    name: '',
    kind: 0,
    type: 0,
    status: 0,
    description: '',
};

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
        if (message.kind !== 0) {
            writer.uint32(32).int32(message.kind);
        }
        if (message.type !== 0) {
            writer.uint32(40).int32(message.type);
        }
        if (message.status !== 0) {
            writer.uint32(48).int32(message.status);
        }
        if (message.description !== '') {
            writer.uint32(58).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Registry_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(66).fork(),
            ).ldelim();
        });
        Object.entries(message.properties).forEach(([key, value]) => {
            Registry_PropertiesEntry.encode(
                { key: key as any, value },
                writer.uint32(74).fork(),
            ).ldelim();
        });
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(82).fork()).ldelim();
        }
        if (message.modifiedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.modifiedAt), writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Registry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRegistry } as Registry;
        message.labels = {};
        message.properties = {};
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
                    message.kind = reader.int32() as any;
                    break;
                case 5:
                    message.type = reader.int32() as any;
                    break;
                case 6:
                    message.status = reader.int32() as any;
                    break;
                case 7:
                    message.description = reader.string();
                    break;
                case 8:
                    const entry8 = Registry_LabelsEntry.decode(reader, reader.uint32());
                    if (entry8.value !== undefined) {
                        message.labels[entry8.key] = entry8.value;
                    }
                    break;
                case 9:
                    const entry9 = Registry_PropertiesEntry.decode(reader, reader.uint32());
                    if (entry9.value !== undefined) {
                        message.properties[entry9.key] = entry9.value;
                    }
                    break;
                case 10:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.modifiedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
        message.kind =
            object.kind !== undefined && object.kind !== null
                ? registry_KindFromJSON(object.kind)
                : 0;
        message.type =
            object.type !== undefined && object.type !== null
                ? registry_TypeFromJSON(object.type)
                : 0;
        message.status =
            object.status !== undefined && object.status !== null
                ? registry_StatusFromJSON(object.status)
                : 0;
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
        message.properties = Object.entries(object.properties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.modifiedAt =
            object.modifiedAt !== undefined && object.modifiedAt !== null
                ? fromJsonTimestamp(object.modifiedAt)
                : undefined;
        return message;
    },

    toJSON(message: Registry): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.kind !== undefined && (obj.kind = registry_KindToJSON(message.kind));
        message.type !== undefined && (obj.type = registry_TypeToJSON(message.type));
        message.status !== undefined && (obj.status = registry_StatusToJSON(message.status));
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.modifiedAt !== undefined && (obj.modifiedAt = message.modifiedAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Registry>, I>>(object: I): Registry {
        const message = { ...baseRegistry } as Registry;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.name = object.name ?? '';
        message.kind = object.kind ?? 0;
        message.type = object.type ?? 0;
        message.status = object.status ?? 0;
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
        message.properties = Object.entries(object.properties ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.createdAt = object.createdAt ?? undefined;
        message.modifiedAt = object.modifiedAt ?? undefined;
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

const baseRegistry_PropertiesEntry: object = { key: '', value: '' };

export const Registry_PropertiesEntry = {
    encode(
        message: Registry_PropertiesEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Registry_PropertiesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRegistry_PropertiesEntry } as Registry_PropertiesEntry;
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

    fromJSON(object: any): Registry_PropertiesEntry {
        const message = { ...baseRegistry_PropertiesEntry } as Registry_PropertiesEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Registry_PropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Registry_PropertiesEntry>, I>>(
        object: I,
    ): Registry_PropertiesEntry {
        const message = { ...baseRegistry_PropertiesEntry } as Registry_PropertiesEntry;
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
