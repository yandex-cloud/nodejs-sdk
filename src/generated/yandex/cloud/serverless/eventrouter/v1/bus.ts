/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
    LogLevel_Level,
    logLevel_LevelFromJSON,
    logLevel_LevelToJSON,
} from '../../../../../yandex/cloud/logging/v1/log_entry';
import { Timestamp } from '../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.serverless.eventrouter.v1';

export interface LogOptions {
    /** Entry will be written to log group resolved by ID. */
    logGroupId: string | undefined;
    /** Entry will be written to default log group for specified folder. */
    folderId: string | undefined;
    /**
     * Minimum log entry level.
     *
     * See [LogLevel.Level] for details.
     */
    minLevel: LogLevel_Level;
    /** Service account, which has permission to write to destination */
    serviceAccountId: string;
}

export interface Bus {
    /** ID of the bus. */
    id: string;
    /** ID of the folder that the bus belongs to. */
    folderId: string;
    /** ID of the cloud that the bus resides in. */
    cloudId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Name of the bus. */
    name: string;
    /** Description of the bus. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** Deletion protection. */
    deletionProtection: boolean;
    /** Status of the bus. */
    status: Bus_Status;
    /** Is logging from the bus enabled. */
    loggingEnabled: boolean;
    /** Options for logging from the bus. */
    logOptions?: LogOptions;
}

export enum Bus_Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    ACTIVE = 2,
    DELETING = 3,
    UNRECOGNIZED = -1,
}

export function bus_StatusFromJSON(object: any): Bus_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Bus_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return Bus_Status.CREATING;
        case 2:
        case 'ACTIVE':
            return Bus_Status.ACTIVE;
        case 3:
        case 'DELETING':
            return Bus_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Bus_Status.UNRECOGNIZED;
    }
}

export function bus_StatusToJSON(object: Bus_Status): string {
    switch (object) {
        case Bus_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Bus_Status.CREATING:
            return 'CREATING';
        case Bus_Status.ACTIVE:
            return 'ACTIVE';
        case Bus_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}

export interface Bus_LabelsEntry {
    key: string;
    value: string;
}

const baseLogOptions: object = { minLevel: 0, serviceAccountId: '' };

export const LogOptions = {
    encode(message: LogOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.logGroupId !== undefined) {
            writer.uint32(10).string(message.logGroupId);
        }
        if (message.folderId !== undefined) {
            writer.uint32(18).string(message.folderId);
        }
        if (message.minLevel !== 0) {
            writer.uint32(24).int32(message.minLevel);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(34).string(message.serviceAccountId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LogOptions {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLogOptions } as LogOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logGroupId = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.minLevel = reader.int32() as any;
                    break;
                case 4:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LogOptions {
        const message = { ...baseLogOptions } as LogOptions;
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : undefined;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : undefined;
        message.minLevel =
            object.minLevel !== undefined && object.minLevel !== null
                ? logLevel_LevelFromJSON(object.minLevel)
                : 0;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        return message;
    },

    toJSON(message: LogOptions): unknown {
        const obj: any = {};
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.minLevel !== undefined && (obj.minLevel = logLevel_LevelToJSON(message.minLevel));
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LogOptions>, I>>(object: I): LogOptions {
        const message = { ...baseLogOptions } as LogOptions;
        message.logGroupId = object.logGroupId ?? undefined;
        message.folderId = object.folderId ?? undefined;
        message.minLevel = object.minLevel ?? 0;
        message.serviceAccountId = object.serviceAccountId ?? '';
        return message;
    },
};

const baseBus: object = {
    id: '',
    folderId: '',
    cloudId: '',
    name: '',
    description: '',
    deletionProtection: false,
    status: 0,
    loggingEnabled: false,
};

export const Bus = {
    encode(message: Bus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.cloudId !== '') {
            writer.uint32(26).string(message.cloudId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(42).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(50).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Bus_LabelsEntry.encode({ key: key as any, value }, writer.uint32(58).fork()).ldelim();
        });
        if (message.deletionProtection === true) {
            writer.uint32(64).bool(message.deletionProtection);
        }
        if (message.status !== 0) {
            writer.uint32(72).int32(message.status);
        }
        if (message.loggingEnabled === true) {
            writer.uint32(80).bool(message.loggingEnabled);
        }
        if (message.logOptions !== undefined) {
            LogOptions.encode(message.logOptions, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Bus {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBus } as Bus;
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
                    message.cloudId = reader.string();
                    break;
                case 4:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    const entry7 = Bus_LabelsEntry.decode(reader, reader.uint32());
                    if (entry7.value !== undefined) {
                        message.labels[entry7.key] = entry7.value;
                    }
                    break;
                case 8:
                    message.deletionProtection = reader.bool();
                    break;
                case 9:
                    message.status = reader.int32() as any;
                    break;
                case 10:
                    message.loggingEnabled = reader.bool();
                    break;
                case 11:
                    message.logOptions = LogOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Bus {
        const message = { ...baseBus } as Bus;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null ? String(object.cloudId) : '';
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
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.status =
            object.status !== undefined && object.status !== null
                ? bus_StatusFromJSON(object.status)
                : 0;
        message.loggingEnabled =
            object.loggingEnabled !== undefined && object.loggingEnabled !== null
                ? Boolean(object.loggingEnabled)
                : false;
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? LogOptions.fromJSON(object.logOptions)
                : undefined;
        return message;
    },

    toJSON(message: Bus): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.status !== undefined && (obj.status = bus_StatusToJSON(message.status));
        message.loggingEnabled !== undefined && (obj.loggingEnabled = message.loggingEnabled);
        message.logOptions !== undefined &&
            (obj.logOptions = message.logOptions
                ? LogOptions.toJSON(message.logOptions)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Bus>, I>>(object: I): Bus {
        const message = { ...baseBus } as Bus;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.cloudId = object.cloudId ?? '';
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
        message.deletionProtection = object.deletionProtection ?? false;
        message.status = object.status ?? 0;
        message.loggingEnabled = object.loggingEnabled ?? false;
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? LogOptions.fromPartial(object.logOptions)
                : undefined;
        return message;
    },
};

const baseBus_LabelsEntry: object = { key: '', value: '' };

export const Bus_LabelsEntry = {
    encode(message: Bus_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Bus_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBus_LabelsEntry } as Bus_LabelsEntry;
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

    fromJSON(object: any): Bus_LabelsEntry {
        const message = { ...baseBus_LabelsEntry } as Bus_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Bus_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Bus_LabelsEntry>, I>>(object: I): Bus_LabelsEntry {
        const message = { ...baseBus_LabelsEntry } as Bus_LabelsEntry;
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
