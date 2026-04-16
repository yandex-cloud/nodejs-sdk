/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.baremetal.v1alpha';

/** An Image resource. */
export interface Image {
    /** ID of the image. */
    id: string;
    /** ID of the folder that the image belongs to. */
    folderId: string;
    /**
     * Name of the image.
     * The name is unique within the folder.
     */
    name: string;
    /** Description of the image. */
    description: string;
    /** MD5 checksum of the image. */
    checksum: string;
    /** Status of the image. */
    status: Image_Status;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
}

/** Image status. */
export enum Image_Status {
    /** STATUS_UNSPECIFIED - Unspecified image status. */
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Image is being created. */
    CREATING = 1,
    /** READY - Image is ready to use. */
    READY = 2,
    /** ERROR - Image encountered an error. */
    ERROR = 3,
    /** DELETING - Image is being deleted. */
    DELETING = 4,
    /** UPDATING - Image is being updated. */
    UPDATING = 5,
    UNRECOGNIZED = -1,
}

export function image_StatusFromJSON(object: any): Image_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Image_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return Image_Status.CREATING;
        case 2:
        case 'READY':
            return Image_Status.READY;
        case 3:
        case 'ERROR':
            return Image_Status.ERROR;
        case 4:
        case 'DELETING':
            return Image_Status.DELETING;
        case 5:
        case 'UPDATING':
            return Image_Status.UPDATING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Image_Status.UNRECOGNIZED;
    }
}

export function image_StatusToJSON(object: Image_Status): string {
    switch (object) {
        case Image_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Image_Status.CREATING:
            return 'CREATING';
        case Image_Status.READY:
            return 'READY';
        case Image_Status.ERROR:
            return 'ERROR';
        case Image_Status.DELETING:
            return 'DELETING';
        case Image_Status.UPDATING:
            return 'UPDATING';
        default:
            return 'UNKNOWN';
    }
}

export interface Image_LabelsEntry {
    key: string;
    value: string;
}

const baseImage: object = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    checksum: '',
    status: 0,
};

export const Image = {
    encode(message: Image, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        if (message.checksum !== '') {
            writer.uint32(50).string(message.checksum);
        }
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(802).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Image_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(1602).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Image {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseImage } as Image;
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
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.checksum = reader.string();
                    break;
                case 7:
                    message.status = reader.int32() as any;
                    break;
                case 100:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 200:
                    const entry200 = Image_LabelsEntry.decode(reader, reader.uint32());
                    if (entry200.value !== undefined) {
                        message.labels[entry200.key] = entry200.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Image {
        const message = { ...baseImage } as Image;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.checksum =
            object.checksum !== undefined && object.checksum !== null
                ? String(object.checksum)
                : '';
        message.status =
            object.status !== undefined && object.status !== null
                ? image_StatusFromJSON(object.status)
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

    toJSON(message: Image): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.checksum !== undefined && (obj.checksum = message.checksum);
        message.status !== undefined && (obj.status = image_StatusToJSON(message.status));
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Image>, I>>(object: I): Image {
        const message = { ...baseImage } as Image;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.checksum = object.checksum ?? '';
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

const baseImage_LabelsEntry: object = { key: '', value: '' };

export const Image_LabelsEntry = {
    encode(message: Image_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Image_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseImage_LabelsEntry } as Image_LabelsEntry;
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

    fromJSON(object: any): Image_LabelsEntry {
        const message = { ...baseImage_LabelsEntry } as Image_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Image_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Image_LabelsEntry>, I>>(object: I): Image_LabelsEntry {
        const message = { ...baseImage_LabelsEntry } as Image_LabelsEntry;
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
