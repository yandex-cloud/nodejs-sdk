/* eslint-disable */
import { messageTypeRegistry } from '../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { ExpirationConfig } from '../../../../../yandex/cloud/ai/common/common';
import { Timestamp } from '../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.ai.files.v1';

export interface File {
    $type: 'yandex.cloud.ai.files.v1.File';
    /** Unique identifier of the file. */
    id: string;
    /** ID of the folder that the file belongs to. */
    folderId: string;
    /** Name of the file. */
    name: string;
    /** Description of the file. */
    description: string;
    /** MIME type of the file, indicating the file's format (e.g., "application/pdf") */
    mimeType: string;
    /** Identifier of the subject who created this file. */
    createdBy: string;
    /** Timestamp representing when the file was created. */
    createdAt?: Date;
    /** Identifier of the subject who last updated this file. */
    updatedBy: string;
    /** Timestamp representing the last time this file was updated. */
    updatedAt?: Date;
    /** Configuration for the expiration of the file, defining when and how the file will expire. */
    expirationConfig?: ExpirationConfig;
    /** Timestamp representing when the file will expire. */
    expiresAt?: Date;
    /** Set of key-value pairs that can be used to organize and categorize the file. */
    labels: { [key: string]: string };
}

export interface File_LabelsEntry {
    $type: 'yandex.cloud.ai.files.v1.File.LabelsEntry';
    key: string;
    value: string;
}

const baseFile: object = {
    $type: 'yandex.cloud.ai.files.v1.File',
    id: '',
    folderId: '',
    name: '',
    description: '',
    mimeType: '',
    createdBy: '',
    updatedBy: '',
};

export const File = {
    $type: 'yandex.cloud.ai.files.v1.File' as const,

    encode(message: File, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.mimeType !== '') {
            writer.uint32(42).string(message.mimeType);
        }
        if (message.createdBy !== '') {
            writer.uint32(50).string(message.createdBy);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(58).fork()).ldelim();
        }
        if (message.updatedBy !== '') {
            writer.uint32(66).string(message.updatedBy);
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(74).fork()).ldelim();
        }
        if (message.expirationConfig !== undefined) {
            ExpirationConfig.encode(message.expirationConfig, writer.uint32(82).fork()).ldelim();
        }
        if (message.expiresAt !== undefined) {
            Timestamp.encode(toTimestamp(message.expiresAt), writer.uint32(90).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            File_LabelsEntry.encode(
                { $type: 'yandex.cloud.ai.files.v1.File.LabelsEntry', key: key as any, value },
                writer.uint32(98).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): File {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFile } as File;
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
                    message.description = reader.string();
                    break;
                case 5:
                    message.mimeType = reader.string();
                    break;
                case 6:
                    message.createdBy = reader.string();
                    break;
                case 7:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.updatedBy = reader.string();
                    break;
                case 9:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.expirationConfig = ExpirationConfig.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.expiresAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 12:
                    const entry12 = File_LabelsEntry.decode(reader, reader.uint32());
                    if (entry12.value !== undefined) {
                        message.labels[entry12.key] = entry12.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): File {
        const message = { ...baseFile } as File;
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
        message.mimeType =
            object.mimeType !== undefined && object.mimeType !== null
                ? String(object.mimeType)
                : '';
        message.createdBy =
            object.createdBy !== undefined && object.createdBy !== null
                ? String(object.createdBy)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.updatedBy =
            object.updatedBy !== undefined && object.updatedBy !== null
                ? String(object.updatedBy)
                : '';
        message.updatedAt =
            object.updatedAt !== undefined && object.updatedAt !== null
                ? fromJsonTimestamp(object.updatedAt)
                : undefined;
        message.expirationConfig =
            object.expirationConfig !== undefined && object.expirationConfig !== null
                ? ExpirationConfig.fromJSON(object.expirationConfig)
                : undefined;
        message.expiresAt =
            object.expiresAt !== undefined && object.expiresAt !== null
                ? fromJsonTimestamp(object.expiresAt)
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

    toJSON(message: File): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.mimeType !== undefined && (obj.mimeType = message.mimeType);
        message.createdBy !== undefined && (obj.createdBy = message.createdBy);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedBy !== undefined && (obj.updatedBy = message.updatedBy);
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        message.expirationConfig !== undefined &&
            (obj.expirationConfig = message.expirationConfig
                ? ExpirationConfig.toJSON(message.expirationConfig)
                : undefined);
        message.expiresAt !== undefined && (obj.expiresAt = message.expiresAt.toISOString());
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<File>, I>>(object: I): File {
        const message = { ...baseFile } as File;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.mimeType = object.mimeType ?? '';
        message.createdBy = object.createdBy ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.updatedBy = object.updatedBy ?? '';
        message.updatedAt = object.updatedAt ?? undefined;
        message.expirationConfig =
            object.expirationConfig !== undefined && object.expirationConfig !== null
                ? ExpirationConfig.fromPartial(object.expirationConfig)
                : undefined;
        message.expiresAt = object.expiresAt ?? undefined;
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

messageTypeRegistry.set(File.$type, File);

const baseFile_LabelsEntry: object = {
    $type: 'yandex.cloud.ai.files.v1.File.LabelsEntry',
    key: '',
    value: '',
};

export const File_LabelsEntry = {
    $type: 'yandex.cloud.ai.files.v1.File.LabelsEntry' as const,

    encode(message: File_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): File_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFile_LabelsEntry } as File_LabelsEntry;
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

    fromJSON(object: any): File_LabelsEntry {
        const message = { ...baseFile_LabelsEntry } as File_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: File_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<File_LabelsEntry>, I>>(object: I): File_LabelsEntry {
        const message = { ...baseFile_LabelsEntry } as File_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(File_LabelsEntry.$type, File_LabelsEntry);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
              Exclude<keyof I, KeysOfUnion<P> | '$type'>,
              never
          >;

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
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
