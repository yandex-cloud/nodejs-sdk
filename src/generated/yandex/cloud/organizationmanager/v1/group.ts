/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.organizationmanager.v1';

/**
 * A Group resource.
 * For more information, see [Groups](/docs/organization/operations/manage-groups).
 */
export interface Group {
    /** ID of the group. */
    id: string;
    /** ID of the organization that the group belongs to. */
    organizationId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Name of the group. */
    name: string;
    /** Description of the group. */
    description: string;
    /** Id of the subject container that external group belongs to. It is set if group is external. */
    subjectContainerId: string;
    /** Id of the group from external system. It is set if group is external. */
    externalId: string;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
}

export interface Group_LabelsEntry {
    key: string;
    value: string;
}

const baseGroup: object = {
    id: '',
    organizationId: '',
    name: '',
    description: '',
    subjectContainerId: '',
    externalId: '',
};

export const Group: {
    encode(message: Group, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Group;
    fromJSON(object: any): Group;
    toJSON(message: Group): unknown;
    fromPartial<I extends Exact<DeepPartial<Group>, I>>(object: I): Group;
} = {
    encode(message: Group, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.organizationId !== '') {
            writer.uint32(18).string(message.organizationId);
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
        if (message.subjectContainerId !== '') {
            writer.uint32(50).string(message.subjectContainerId);
        }
        if (message.externalId !== '') {
            writer.uint32(58).string(message.externalId);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Group_LabelsEntry.encode({ key: key as any, value }, writer.uint32(66).fork()).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Group {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGroup } as Group;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.organizationId = reader.string();
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
                    message.subjectContainerId = reader.string();
                    break;
                case 7:
                    message.externalId = reader.string();
                    break;
                case 8:
                    const entry8 = Group_LabelsEntry.decode(reader, reader.uint32());
                    if (entry8.value !== undefined) {
                        message.labels[entry8.key] = entry8.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Group {
        const message = { ...baseGroup } as Group;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
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
        message.subjectContainerId =
            object.subjectContainerId !== undefined && object.subjectContainerId !== null
                ? String(object.subjectContainerId)
                : '';
        message.externalId =
            object.externalId !== undefined && object.externalId !== null
                ? String(object.externalId)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: Group): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.subjectContainerId !== undefined &&
            (obj.subjectContainerId = message.subjectContainerId);
        message.externalId !== undefined && (obj.externalId = message.externalId);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Group>, I>>(object: I): Group {
        const message = { ...baseGroup } as Group;
        message.id = object.id ?? '';
        message.organizationId = object.organizationId ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.subjectContainerId = object.subjectContainerId ?? '';
        message.externalId = object.externalId ?? '';
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

const baseGroup_LabelsEntry: object = { key: '', value: '' };

export const Group_LabelsEntry: {
    encode(message: Group_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Group_LabelsEntry;
    fromJSON(object: any): Group_LabelsEntry;
    toJSON(message: Group_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<Group_LabelsEntry>, I>>(object: I): Group_LabelsEntry;
} = {
    encode(message: Group_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Group_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGroup_LabelsEntry } as Group_LabelsEntry;
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

    fromJSON(object: any): Group_LabelsEntry {
        const message = { ...baseGroup_LabelsEntry } as Group_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Group_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Group_LabelsEntry>, I>>(object: I): Group_LabelsEntry {
        const message = { ...baseGroup_LabelsEntry } as Group_LabelsEntry;
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
