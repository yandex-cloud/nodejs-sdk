/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.clouddesktop.v1.api';

/** A desktop image resource. */
export interface DesktopImage {
    /** ID of the image. */
    id: string;
    /** ID of the folder that the image belongs to. */
    folderId: string;
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt?: Date;
    /** Status of the image. */
    status: DesktopImage_Status;
    /** Name of the image. */
    name: string;
    /** Description of the image. */
    labels: { [key: string]: string };
    /** Size of the image, specified in bytes. */
    storageSize: number;
    /** Minimum disk size in bytes required to use the image. */
    minDiskSize: number;
}

export enum DesktopImage_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Image is being created. */
    CREATING = 1,
    /** ACTIVE - Image is ready to use. */
    ACTIVE = 2,
    /** DELETING - Image is being deleted. */
    DELETING = 3,
    UNRECOGNIZED = -1,
}

export function desktopImage_StatusFromJSON(object: any): DesktopImage_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return DesktopImage_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return DesktopImage_Status.CREATING;
        case 2:
        case 'ACTIVE':
            return DesktopImage_Status.ACTIVE;
        case 3:
        case 'DELETING':
            return DesktopImage_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return DesktopImage_Status.UNRECOGNIZED;
    }
}

export function desktopImage_StatusToJSON(object: DesktopImage_Status): string {
    switch (object) {
        case DesktopImage_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case DesktopImage_Status.CREATING:
            return 'CREATING';
        case DesktopImage_Status.ACTIVE:
            return 'ACTIVE';
        case DesktopImage_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}

export interface DesktopImage_LabelsEntry {
    key: string;
    value: string;
}

const baseDesktopImage: object = {
    id: '',
    folderId: '',
    status: 0,
    name: '',
    storageSize: 0,
    minDiskSize: 0,
};

export const DesktopImage = {
    encode(message: DesktopImage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.name !== '') {
            writer.uint32(90).string(message.name);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            DesktopImage_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(106).fork(),
            ).ldelim();
        });
        if (message.storageSize !== 0) {
            writer.uint32(112).int64(message.storageSize);
        }
        if (message.minDiskSize !== 0) {
            writer.uint32(120).int64(message.minDiskSize);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DesktopImage {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDesktopImage } as DesktopImage;
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
                case 4:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.status = reader.int32() as any;
                    break;
                case 11:
                    message.name = reader.string();
                    break;
                case 13:
                    const entry13 = DesktopImage_LabelsEntry.decode(reader, reader.uint32());
                    if (entry13.value !== undefined) {
                        message.labels[entry13.key] = entry13.value;
                    }
                    break;
                case 14:
                    message.storageSize = longToNumber(reader.int64() as Long);
                    break;
                case 15:
                    message.minDiskSize = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DesktopImage {
        const message = { ...baseDesktopImage } as DesktopImage;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.status =
            object.status !== undefined && object.status !== null
                ? desktopImage_StatusFromJSON(object.status)
                : 0;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.storageSize =
            object.storageSize !== undefined && object.storageSize !== null
                ? Number(object.storageSize)
                : 0;
        message.minDiskSize =
            object.minDiskSize !== undefined && object.minDiskSize !== null
                ? Number(object.minDiskSize)
                : 0;
        return message;
    },

    toJSON(message: DesktopImage): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.status !== undefined && (obj.status = desktopImage_StatusToJSON(message.status));
        message.name !== undefined && (obj.name = message.name);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.storageSize !== undefined && (obj.storageSize = Math.round(message.storageSize));
        message.minDiskSize !== undefined && (obj.minDiskSize = Math.round(message.minDiskSize));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DesktopImage>, I>>(object: I): DesktopImage {
        const message = { ...baseDesktopImage } as DesktopImage;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.status = object.status ?? 0;
        message.name = object.name ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.storageSize = object.storageSize ?? 0;
        message.minDiskSize = object.minDiskSize ?? 0;
        return message;
    },
};

const baseDesktopImage_LabelsEntry: object = { key: '', value: '' };

export const DesktopImage_LabelsEntry = {
    encode(
        message: DesktopImage_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): DesktopImage_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDesktopImage_LabelsEntry } as DesktopImage_LabelsEntry;
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

    fromJSON(object: any): DesktopImage_LabelsEntry {
        const message = { ...baseDesktopImage_LabelsEntry } as DesktopImage_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: DesktopImage_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DesktopImage_LabelsEntry>, I>>(
        object: I,
    ): DesktopImage_LabelsEntry {
        const message = { ...baseDesktopImage_LabelsEntry } as DesktopImage_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
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
