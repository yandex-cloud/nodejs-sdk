/* eslint-disable */
import { messageTypeRegistry } from '../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.ai.tuning.v1';

export interface TuningTask {
    $type: 'yandex.cloud.ai.tuning.v1.TuningTask';
    taskId: string;
    operationId: string;
    status: TuningTask_Status;
    folderId: string;
    createdBy: string;
    createdAt?: Date;
    startedAt?: Date;
    finishedAt?: Date;
    sourceModelUri: string;
    targetModelUri: string;
}

export enum TuningTask_Status {
    STATUS_UNSPECIFIED = 0,
    CREATED = 1,
    PENDING = 2,
    IN_PROGRESS = 3,
    COMPLETED = 4,
    FAILED = 5,
    UNRECOGNIZED = -1,
}

export function tuningTask_StatusFromJSON(object: any): TuningTask_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return TuningTask_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATED':
            return TuningTask_Status.CREATED;
        case 2:
        case 'PENDING':
            return TuningTask_Status.PENDING;
        case 3:
        case 'IN_PROGRESS':
            return TuningTask_Status.IN_PROGRESS;
        case 4:
        case 'COMPLETED':
            return TuningTask_Status.COMPLETED;
        case 5:
        case 'FAILED':
            return TuningTask_Status.FAILED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return TuningTask_Status.UNRECOGNIZED;
    }
}

export function tuningTask_StatusToJSON(object: TuningTask_Status): string {
    switch (object) {
        case TuningTask_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case TuningTask_Status.CREATED:
            return 'CREATED';
        case TuningTask_Status.PENDING:
            return 'PENDING';
        case TuningTask_Status.IN_PROGRESS:
            return 'IN_PROGRESS';
        case TuningTask_Status.COMPLETED:
            return 'COMPLETED';
        case TuningTask_Status.FAILED:
            return 'FAILED';
        default:
            return 'UNKNOWN';
    }
}

const baseTuningTask: object = {
    $type: 'yandex.cloud.ai.tuning.v1.TuningTask',
    taskId: '',
    operationId: '',
    status: 0,
    folderId: '',
    createdBy: '',
    sourceModelUri: '',
    targetModelUri: '',
};

export const TuningTask = {
    $type: 'yandex.cloud.ai.tuning.v1.TuningTask' as const,

    encode(message: TuningTask, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.taskId !== '') {
            writer.uint32(10).string(message.taskId);
        }
        if (message.operationId !== '') {
            writer.uint32(26).string(message.operationId);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.folderId !== '') {
            writer.uint32(42).string(message.folderId);
        }
        if (message.createdBy !== '') {
            writer.uint32(50).string(message.createdBy);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(58).fork()).ldelim();
        }
        if (message.startedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(66).fork()).ldelim();
        }
        if (message.finishedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.finishedAt), writer.uint32(74).fork()).ldelim();
        }
        if (message.sourceModelUri !== '') {
            writer.uint32(82).string(message.sourceModelUri);
        }
        if (message.targetModelUri !== '') {
            writer.uint32(90).string(message.targetModelUri);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TuningTask {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTuningTask } as TuningTask;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.taskId = reader.string();
                    break;
                case 3:
                    message.operationId = reader.string();
                    break;
                case 4:
                    message.status = reader.int32() as any;
                    break;
                case 5:
                    message.folderId = reader.string();
                    break;
                case 6:
                    message.createdBy = reader.string();
                    break;
                case 7:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.startedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.finishedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.sourceModelUri = reader.string();
                    break;
                case 11:
                    message.targetModelUri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TuningTask {
        const message = { ...baseTuningTask } as TuningTask;
        message.taskId =
            object.taskId !== undefined && object.taskId !== null ? String(object.taskId) : '';
        message.operationId =
            object.operationId !== undefined && object.operationId !== null
                ? String(object.operationId)
                : '';
        message.status =
            object.status !== undefined && object.status !== null
                ? tuningTask_StatusFromJSON(object.status)
                : 0;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.createdBy =
            object.createdBy !== undefined && object.createdBy !== null
                ? String(object.createdBy)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.startedAt =
            object.startedAt !== undefined && object.startedAt !== null
                ? fromJsonTimestamp(object.startedAt)
                : undefined;
        message.finishedAt =
            object.finishedAt !== undefined && object.finishedAt !== null
                ? fromJsonTimestamp(object.finishedAt)
                : undefined;
        message.sourceModelUri =
            object.sourceModelUri !== undefined && object.sourceModelUri !== null
                ? String(object.sourceModelUri)
                : '';
        message.targetModelUri =
            object.targetModelUri !== undefined && object.targetModelUri !== null
                ? String(object.targetModelUri)
                : '';
        return message;
    },

    toJSON(message: TuningTask): unknown {
        const obj: any = {};
        message.taskId !== undefined && (obj.taskId = message.taskId);
        message.operationId !== undefined && (obj.operationId = message.operationId);
        message.status !== undefined && (obj.status = tuningTask_StatusToJSON(message.status));
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdBy !== undefined && (obj.createdBy = message.createdBy);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.startedAt !== undefined && (obj.startedAt = message.startedAt.toISOString());
        message.finishedAt !== undefined && (obj.finishedAt = message.finishedAt.toISOString());
        message.sourceModelUri !== undefined && (obj.sourceModelUri = message.sourceModelUri);
        message.targetModelUri !== undefined && (obj.targetModelUri = message.targetModelUri);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TuningTask>, I>>(object: I): TuningTask {
        const message = { ...baseTuningTask } as TuningTask;
        message.taskId = object.taskId ?? '';
        message.operationId = object.operationId ?? '';
        message.status = object.status ?? 0;
        message.folderId = object.folderId ?? '';
        message.createdBy = object.createdBy ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.startedAt = object.startedAt ?? undefined;
        message.finishedAt = object.finishedAt ?? undefined;
        message.sourceModelUri = object.sourceModelUri ?? '';
        message.targetModelUri = object.targetModelUri ?? '';
        return message;
    },
};

messageTypeRegistry.set(TuningTask.$type, TuningTask);

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
