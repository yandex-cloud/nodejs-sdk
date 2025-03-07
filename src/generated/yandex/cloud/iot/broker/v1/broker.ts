/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
    LogLevel_Level,
    logLevel_LevelFromJSON,
    logLevel_LevelToJSON,
} from '../../../../../yandex/cloud/logging/v1/log_entry';
import { Timestamp } from '../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.iot.broker.v1';

/** A broker. */
export interface Broker {
    /** ID of the broker. */
    id: string;
    /** ID of the folder that the broker belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Name of the broker. The name is unique within the folder. */
    name: string;
    /** Description of the broker. 0-256 characters long. */
    description: string;
    /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
    labels: { [key: string]: string };
    /** Status of the broker. */
    status: Broker_Status;
    /** Options for logging broker events */
    logOptions?: LogOptions;
}

export enum Broker_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Broker is being created. */
    CREATING = 1,
    /** ACTIVE - Broker is ready to use. */
    ACTIVE = 2,
    /** DELETING - Broker is being deleted. */
    DELETING = 3,
    UNRECOGNIZED = -1,
}

export function broker_StatusFromJSON(object: any): Broker_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Broker_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return Broker_Status.CREATING;
        case 2:
        case 'ACTIVE':
            return Broker_Status.ACTIVE;
        case 3:
        case 'DELETING':
            return Broker_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Broker_Status.UNRECOGNIZED;
    }
}

export function broker_StatusToJSON(object: Broker_Status): string {
    switch (object) {
        case Broker_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Broker_Status.CREATING:
            return 'CREATING';
        case Broker_Status.ACTIVE:
            return 'ACTIVE';
        case Broker_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}

export interface Broker_LabelsEntry {
    key: string;
    value: string;
}

/** A broker certificate. */
export interface BrokerCertificate {
    /** ID of the broker that the certificate belongs to. */
    brokerId: string;
    /** SHA256 hash of the certificates. */
    fingerprint: string;
    /** Public part of the certificate. */
    certificateData: string;
    /** Creation timestamp. */
    createdAt?: Date;
}

/** A broker password. */
export interface BrokerPassword {
    /** ID of the broker that the password belongs to. */
    brokerId: string;
    /** ID of the password. */
    id: string;
    /** Creation timestamp. */
    createdAt?: Date;
}

export interface LogOptions {
    /** Is logging from broker disabled. */
    disabled: boolean;
    /** Entry should be written to log group resolved by ID. */
    logGroupId: string | undefined;
    /** Entry should be written to default log group for specified folder. */
    folderId: string | undefined;
    /**
     * Minimum log entry level.
     *
     * See [LogLevel.Level] for details.
     */
    minLevel: LogLevel_Level;
}

const baseBroker: object = { id: '', folderId: '', name: '', description: '', status: 0 };

export const Broker = {
    encode(message: Broker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
            Broker_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.logOptions !== undefined) {
            LogOptions.encode(message.logOptions, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Broker {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBroker } as Broker;
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
                    const entry6 = Broker_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.status = reader.int32() as any;
                    break;
                case 8:
                    message.logOptions = LogOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Broker {
        const message = { ...baseBroker } as Broker;
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
        message.status =
            object.status !== undefined && object.status !== null
                ? broker_StatusFromJSON(object.status)
                : 0;
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? LogOptions.fromJSON(object.logOptions)
                : undefined;
        return message;
    },

    toJSON(message: Broker): unknown {
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
        message.status !== undefined && (obj.status = broker_StatusToJSON(message.status));
        message.logOptions !== undefined &&
            (obj.logOptions = message.logOptions
                ? LogOptions.toJSON(message.logOptions)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Broker>, I>>(object: I): Broker {
        const message = { ...baseBroker } as Broker;
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
        message.status = object.status ?? 0;
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? LogOptions.fromPartial(object.logOptions)
                : undefined;
        return message;
    },
};

const baseBroker_LabelsEntry: object = { key: '', value: '' };

export const Broker_LabelsEntry = {
    encode(message: Broker_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Broker_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBroker_LabelsEntry } as Broker_LabelsEntry;
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

    fromJSON(object: any): Broker_LabelsEntry {
        const message = { ...baseBroker_LabelsEntry } as Broker_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Broker_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Broker_LabelsEntry>, I>>(
        object: I,
    ): Broker_LabelsEntry {
        const message = { ...baseBroker_LabelsEntry } as Broker_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseBrokerCertificate: object = { brokerId: '', fingerprint: '', certificateData: '' };

export const BrokerCertificate = {
    encode(message: BrokerCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.brokerId !== '') {
            writer.uint32(10).string(message.brokerId);
        }
        if (message.fingerprint !== '') {
            writer.uint32(18).string(message.fingerprint);
        }
        if (message.certificateData !== '') {
            writer.uint32(26).string(message.certificateData);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BrokerCertificate {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBrokerCertificate } as BrokerCertificate;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.brokerId = reader.string();
                    break;
                case 2:
                    message.fingerprint = reader.string();
                    break;
                case 3:
                    message.certificateData = reader.string();
                    break;
                case 4:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BrokerCertificate {
        const message = { ...baseBrokerCertificate } as BrokerCertificate;
        message.brokerId =
            object.brokerId !== undefined && object.brokerId !== null
                ? String(object.brokerId)
                : '';
        message.fingerprint =
            object.fingerprint !== undefined && object.fingerprint !== null
                ? String(object.fingerprint)
                : '';
        message.certificateData =
            object.certificateData !== undefined && object.certificateData !== null
                ? String(object.certificateData)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        return message;
    },

    toJSON(message: BrokerCertificate): unknown {
        const obj: any = {};
        message.brokerId !== undefined && (obj.brokerId = message.brokerId);
        message.fingerprint !== undefined && (obj.fingerprint = message.fingerprint);
        message.certificateData !== undefined && (obj.certificateData = message.certificateData);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BrokerCertificate>, I>>(object: I): BrokerCertificate {
        const message = { ...baseBrokerCertificate } as BrokerCertificate;
        message.brokerId = object.brokerId ?? '';
        message.fingerprint = object.fingerprint ?? '';
        message.certificateData = object.certificateData ?? '';
        message.createdAt = object.createdAt ?? undefined;
        return message;
    },
};

const baseBrokerPassword: object = { brokerId: '', id: '' };

export const BrokerPassword = {
    encode(message: BrokerPassword, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.brokerId !== '') {
            writer.uint32(10).string(message.brokerId);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BrokerPassword {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBrokerPassword } as BrokerPassword;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.brokerId = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BrokerPassword {
        const message = { ...baseBrokerPassword } as BrokerPassword;
        message.brokerId =
            object.brokerId !== undefined && object.brokerId !== null
                ? String(object.brokerId)
                : '';
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        return message;
    },

    toJSON(message: BrokerPassword): unknown {
        const obj: any = {};
        message.brokerId !== undefined && (obj.brokerId = message.brokerId);
        message.id !== undefined && (obj.id = message.id);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BrokerPassword>, I>>(object: I): BrokerPassword {
        const message = { ...baseBrokerPassword } as BrokerPassword;
        message.brokerId = object.brokerId ?? '';
        message.id = object.id ?? '';
        message.createdAt = object.createdAt ?? undefined;
        return message;
    },
};

const baseLogOptions: object = { disabled: false, minLevel: 0 };

export const LogOptions = {
    encode(message: LogOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.disabled === true) {
            writer.uint32(8).bool(message.disabled);
        }
        if (message.logGroupId !== undefined) {
            writer.uint32(18).string(message.logGroupId);
        }
        if (message.folderId !== undefined) {
            writer.uint32(26).string(message.folderId);
        }
        if (message.minLevel !== 0) {
            writer.uint32(32).int32(message.minLevel);
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
                    message.disabled = reader.bool();
                    break;
                case 2:
                    message.logGroupId = reader.string();
                    break;
                case 3:
                    message.folderId = reader.string();
                    break;
                case 4:
                    message.minLevel = reader.int32() as any;
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
        message.disabled =
            object.disabled !== undefined && object.disabled !== null
                ? Boolean(object.disabled)
                : false;
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
        return message;
    },

    toJSON(message: LogOptions): unknown {
        const obj: any = {};
        message.disabled !== undefined && (obj.disabled = message.disabled);
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.minLevel !== undefined && (obj.minLevel = logLevel_LevelToJSON(message.minLevel));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LogOptions>, I>>(object: I): LogOptions {
        const message = { ...baseLogOptions } as LogOptions;
        message.disabled = object.disabled ?? false;
        message.logGroupId = object.logGroupId ?? undefined;
        message.folderId = object.folderId ?? undefined;
        message.minLevel = object.minLevel ?? 0;
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
