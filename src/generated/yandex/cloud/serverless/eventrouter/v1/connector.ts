/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Duration } from '../../../../../google/protobuf/duration';
import { Timestamp } from '../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.serverless.eventrouter.v1';

export interface Connector {
    /** ID of the connector. */
    id: string;
    /** ID of the bus that the connector belongs to. */
    busId: string;
    /** ID of the folder that the connector resides in. */
    folderId: string;
    /** ID of the cloud that the connector resides in. */
    cloudId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Name of the connector. */
    name: string;
    /** Description of the connector. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** Source of the connector. */
    source?: Source;
    /** Deletion protection. */
    deletionProtection: boolean;
    /** Status of the connector. */
    status: Connector_Status;
}

/** Status of the connector. */
export enum Connector_Status {
    STATUS_UNSPECIFIED = 0,
    RUNNING = 1,
    /** STOPPED - disabled by user */
    STOPPED = 2,
    /** RESOURCE_NOT_FOUND - source does not exist */
    RESOURCE_NOT_FOUND = 3,
    /** PERMISSION_DENIED - service account does not have read permission on source */
    PERMISSION_DENIED = 4,
    /** SUBJECT_NOT_FOUND - service account not found */
    SUBJECT_NOT_FOUND = 5,
    /** DELETING - deletion in progress */
    DELETING = 7,
    /** CREATING - creation in progress */
    CREATING = 8,
    UNRECOGNIZED = -1,
}

export function connector_StatusFromJSON(object: any): Connector_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Connector_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'RUNNING':
            return Connector_Status.RUNNING;
        case 2:
        case 'STOPPED':
            return Connector_Status.STOPPED;
        case 3:
        case 'RESOURCE_NOT_FOUND':
            return Connector_Status.RESOURCE_NOT_FOUND;
        case 4:
        case 'PERMISSION_DENIED':
            return Connector_Status.PERMISSION_DENIED;
        case 5:
        case 'SUBJECT_NOT_FOUND':
            return Connector_Status.SUBJECT_NOT_FOUND;
        case 7:
        case 'DELETING':
            return Connector_Status.DELETING;
        case 8:
        case 'CREATING':
            return Connector_Status.CREATING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Connector_Status.UNRECOGNIZED;
    }
}

export function connector_StatusToJSON(object: Connector_Status): string {
    switch (object) {
        case Connector_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Connector_Status.RUNNING:
            return 'RUNNING';
        case Connector_Status.STOPPED:
            return 'STOPPED';
        case Connector_Status.RESOURCE_NOT_FOUND:
            return 'RESOURCE_NOT_FOUND';
        case Connector_Status.PERMISSION_DENIED:
            return 'PERMISSION_DENIED';
        case Connector_Status.SUBJECT_NOT_FOUND:
            return 'SUBJECT_NOT_FOUND';
        case Connector_Status.DELETING:
            return 'DELETING';
        case Connector_Status.CREATING:
            return 'CREATING';
        default:
            return 'UNKNOWN';
    }
}

export interface Connector_LabelsEntry {
    key: string;
    value: string;
}

export interface Source {
    dataStream?: DataStream | undefined;
    messageQueue?: MessageQueue | undefined;
    timer?: Timer | undefined;
}

export interface DataStream {
    /**
     * Stream database.
     * example: /ru-central1/aoegtvhtp8ob******** /cc8004q4lbo6********
     */
    database: string;
    /** Stream name, absolute or relative. */
    streamName: string;
    /** Consumer name. */
    consumer: string;
    /** Service account which has read permission on the stream. */
    serviceAccountId: string;
}

export interface MessageQueue {
    /**
     * Queue ARN.
     * Example: yrn:yc:ymq:ru-central1:aoe***:test
     */
    queueArn: string;
    /** Service account which has read access to the queue. */
    serviceAccountId: string;
    /** Queue visibility timeout override. */
    visibilityTimeout?: Duration;
    /** Batch size for polling. */
    batchSize: number;
    /** Queue polling timeout. */
    pollingTimeout?: Duration;
}

export interface Timer {
    /** cron expression, with second precision */
    cronExpression: string;
    /** time zone, e.g. Europe/Moscow */
    timeZone: string;
    /** payload to send to target */
    payload: string;
}

const baseConnector: object = {
    id: '',
    busId: '',
    folderId: '',
    cloudId: '',
    name: '',
    description: '',
    deletionProtection: false,
    status: 0,
};

export const Connector = {
    encode(message: Connector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.busId !== '') {
            writer.uint32(18).string(message.busId);
        }
        if (message.folderId !== '') {
            writer.uint32(26).string(message.folderId);
        }
        if (message.cloudId !== '') {
            writer.uint32(34).string(message.cloudId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(50).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(58).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Connector_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(66).fork(),
            ).ldelim();
        });
        if (message.source !== undefined) {
            Source.encode(message.source, writer.uint32(74).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(80).bool(message.deletionProtection);
        }
        if (message.status !== 0) {
            writer.uint32(88).int32(message.status);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Connector {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConnector } as Connector;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.busId = reader.string();
                    break;
                case 3:
                    message.folderId = reader.string();
                    break;
                case 4:
                    message.cloudId = reader.string();
                    break;
                case 5:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.name = reader.string();
                    break;
                case 7:
                    message.description = reader.string();
                    break;
                case 8:
                    const entry8 = Connector_LabelsEntry.decode(reader, reader.uint32());
                    if (entry8.value !== undefined) {
                        message.labels[entry8.key] = entry8.value;
                    }
                    break;
                case 9:
                    message.source = Source.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.deletionProtection = reader.bool();
                    break;
                case 11:
                    message.status = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Connector {
        const message = { ...baseConnector } as Connector;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.busId =
            object.busId !== undefined && object.busId !== null ? String(object.busId) : '';
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
        message.source =
            object.source !== undefined && object.source !== null
                ? Source.fromJSON(object.source)
                : undefined;
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.status =
            object.status !== undefined && object.status !== null
                ? connector_StatusFromJSON(object.status)
                : 0;
        return message;
    },

    toJSON(message: Connector): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.busId !== undefined && (obj.busId = message.busId);
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
        message.source !== undefined &&
            (obj.source = message.source ? Source.toJSON(message.source) : undefined);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.status !== undefined && (obj.status = connector_StatusToJSON(message.status));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Connector>, I>>(object: I): Connector {
        const message = { ...baseConnector } as Connector;
        message.id = object.id ?? '';
        message.busId = object.busId ?? '';
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
        message.source =
            object.source !== undefined && object.source !== null
                ? Source.fromPartial(object.source)
                : undefined;
        message.deletionProtection = object.deletionProtection ?? false;
        message.status = object.status ?? 0;
        return message;
    },
};

const baseConnector_LabelsEntry: object = { key: '', value: '' };

export const Connector_LabelsEntry = {
    encode(message: Connector_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Connector_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConnector_LabelsEntry } as Connector_LabelsEntry;
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

    fromJSON(object: any): Connector_LabelsEntry {
        const message = { ...baseConnector_LabelsEntry } as Connector_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Connector_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Connector_LabelsEntry>, I>>(
        object: I,
    ): Connector_LabelsEntry {
        const message = { ...baseConnector_LabelsEntry } as Connector_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseSource: object = {};

export const Source = {
    encode(message: Source, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.dataStream !== undefined) {
            DataStream.encode(message.dataStream, writer.uint32(10).fork()).ldelim();
        }
        if (message.messageQueue !== undefined) {
            MessageQueue.encode(message.messageQueue, writer.uint32(18).fork()).ldelim();
        }
        if (message.timer !== undefined) {
            Timer.encode(message.timer, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Source {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSource } as Source;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataStream = DataStream.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.messageQueue = MessageQueue.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.timer = Timer.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Source {
        const message = { ...baseSource } as Source;
        message.dataStream =
            object.dataStream !== undefined && object.dataStream !== null
                ? DataStream.fromJSON(object.dataStream)
                : undefined;
        message.messageQueue =
            object.messageQueue !== undefined && object.messageQueue !== null
                ? MessageQueue.fromJSON(object.messageQueue)
                : undefined;
        message.timer =
            object.timer !== undefined && object.timer !== null
                ? Timer.fromJSON(object.timer)
                : undefined;
        return message;
    },

    toJSON(message: Source): unknown {
        const obj: any = {};
        message.dataStream !== undefined &&
            (obj.dataStream = message.dataStream
                ? DataStream.toJSON(message.dataStream)
                : undefined);
        message.messageQueue !== undefined &&
            (obj.messageQueue = message.messageQueue
                ? MessageQueue.toJSON(message.messageQueue)
                : undefined);
        message.timer !== undefined &&
            (obj.timer = message.timer ? Timer.toJSON(message.timer) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Source>, I>>(object: I): Source {
        const message = { ...baseSource } as Source;
        message.dataStream =
            object.dataStream !== undefined && object.dataStream !== null
                ? DataStream.fromPartial(object.dataStream)
                : undefined;
        message.messageQueue =
            object.messageQueue !== undefined && object.messageQueue !== null
                ? MessageQueue.fromPartial(object.messageQueue)
                : undefined;
        message.timer =
            object.timer !== undefined && object.timer !== null
                ? Timer.fromPartial(object.timer)
                : undefined;
        return message;
    },
};

const baseDataStream: object = { database: '', streamName: '', consumer: '', serviceAccountId: '' };

export const DataStream = {
    encode(message: DataStream, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.database !== '') {
            writer.uint32(10).string(message.database);
        }
        if (message.streamName !== '') {
            writer.uint32(18).string(message.streamName);
        }
        if (message.consumer !== '') {
            writer.uint32(26).string(message.consumer);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(34).string(message.serviceAccountId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DataStream {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDataStream } as DataStream;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.database = reader.string();
                    break;
                case 2:
                    message.streamName = reader.string();
                    break;
                case 3:
                    message.consumer = reader.string();
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

    fromJSON(object: any): DataStream {
        const message = { ...baseDataStream } as DataStream;
        message.database =
            object.database !== undefined && object.database !== null
                ? String(object.database)
                : '';
        message.streamName =
            object.streamName !== undefined && object.streamName !== null
                ? String(object.streamName)
                : '';
        message.consumer =
            object.consumer !== undefined && object.consumer !== null
                ? String(object.consumer)
                : '';
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        return message;
    },

    toJSON(message: DataStream): unknown {
        const obj: any = {};
        message.database !== undefined && (obj.database = message.database);
        message.streamName !== undefined && (obj.streamName = message.streamName);
        message.consumer !== undefined && (obj.consumer = message.consumer);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DataStream>, I>>(object: I): DataStream {
        const message = { ...baseDataStream } as DataStream;
        message.database = object.database ?? '';
        message.streamName = object.streamName ?? '';
        message.consumer = object.consumer ?? '';
        message.serviceAccountId = object.serviceAccountId ?? '';
        return message;
    },
};

const baseMessageQueue: object = { queueArn: '', serviceAccountId: '', batchSize: 0 };

export const MessageQueue = {
    encode(message: MessageQueue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.queueArn !== '') {
            writer.uint32(10).string(message.queueArn);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(18).string(message.serviceAccountId);
        }
        if (message.visibilityTimeout !== undefined) {
            Duration.encode(message.visibilityTimeout, writer.uint32(26).fork()).ldelim();
        }
        if (message.batchSize !== 0) {
            writer.uint32(32).int64(message.batchSize);
        }
        if (message.pollingTimeout !== undefined) {
            Duration.encode(message.pollingTimeout, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MessageQueue {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMessageQueue } as MessageQueue;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queueArn = reader.string();
                    break;
                case 2:
                    message.serviceAccountId = reader.string();
                    break;
                case 3:
                    message.visibilityTimeout = Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.batchSize = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.pollingTimeout = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MessageQueue {
        const message = { ...baseMessageQueue } as MessageQueue;
        message.queueArn =
            object.queueArn !== undefined && object.queueArn !== null
                ? String(object.queueArn)
                : '';
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        message.visibilityTimeout =
            object.visibilityTimeout !== undefined && object.visibilityTimeout !== null
                ? Duration.fromJSON(object.visibilityTimeout)
                : undefined;
        message.batchSize =
            object.batchSize !== undefined && object.batchSize !== null
                ? Number(object.batchSize)
                : 0;
        message.pollingTimeout =
            object.pollingTimeout !== undefined && object.pollingTimeout !== null
                ? Duration.fromJSON(object.pollingTimeout)
                : undefined;
        return message;
    },

    toJSON(message: MessageQueue): unknown {
        const obj: any = {};
        message.queueArn !== undefined && (obj.queueArn = message.queueArn);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.visibilityTimeout !== undefined &&
            (obj.visibilityTimeout = message.visibilityTimeout
                ? Duration.toJSON(message.visibilityTimeout)
                : undefined);
        message.batchSize !== undefined && (obj.batchSize = Math.round(message.batchSize));
        message.pollingTimeout !== undefined &&
            (obj.pollingTimeout = message.pollingTimeout
                ? Duration.toJSON(message.pollingTimeout)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MessageQueue>, I>>(object: I): MessageQueue {
        const message = { ...baseMessageQueue } as MessageQueue;
        message.queueArn = object.queueArn ?? '';
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.visibilityTimeout =
            object.visibilityTimeout !== undefined && object.visibilityTimeout !== null
                ? Duration.fromPartial(object.visibilityTimeout)
                : undefined;
        message.batchSize = object.batchSize ?? 0;
        message.pollingTimeout =
            object.pollingTimeout !== undefined && object.pollingTimeout !== null
                ? Duration.fromPartial(object.pollingTimeout)
                : undefined;
        return message;
    },
};

const baseTimer: object = { cronExpression: '', timeZone: '', payload: '' };

export const Timer = {
    encode(message: Timer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.cronExpression !== '') {
            writer.uint32(10).string(message.cronExpression);
        }
        if (message.timeZone !== '') {
            writer.uint32(18).string(message.timeZone);
        }
        if (message.payload !== '') {
            writer.uint32(34).string(message.payload);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Timer {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTimer } as Timer;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cronExpression = reader.string();
                    break;
                case 2:
                    message.timeZone = reader.string();
                    break;
                case 4:
                    message.payload = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Timer {
        const message = { ...baseTimer } as Timer;
        message.cronExpression =
            object.cronExpression !== undefined && object.cronExpression !== null
                ? String(object.cronExpression)
                : '';
        message.timeZone =
            object.timeZone !== undefined && object.timeZone !== null
                ? String(object.timeZone)
                : '';
        message.payload =
            object.payload !== undefined && object.payload !== null ? String(object.payload) : '';
        return message;
    },

    toJSON(message: Timer): unknown {
        const obj: any = {};
        message.cronExpression !== undefined && (obj.cronExpression = message.cronExpression);
        message.timeZone !== undefined && (obj.timeZone = message.timeZone);
        message.payload !== undefined && (obj.payload = message.payload);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Timer>, I>>(object: I): Timer {
        const message = { ...baseTimer } as Timer;
        message.cronExpression = object.cronExpression ?? '';
        message.timeZone = object.timeZone ?? '';
        message.payload = object.payload ?? '';
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
