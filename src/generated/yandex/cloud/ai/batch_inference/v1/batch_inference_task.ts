/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Status } from '../../../../../google/rpc/status';
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import { BatchCompletionRequest } from '../../../../../yandex/cloud/ai/batch_inference/v1/inference_options';

export const protobufPackage = 'yandex.cloud.ai.batch_inference.v1';

export interface BatchInferenceTask {
    taskId: string;
    operationId: string;
    folderId: string;
    modelUri: string;
    sourceDatasetId: string;
    completionRequest?: BatchCompletionRequest | undefined;
    status: BatchInferenceTask_Status;
    resultDatasetId: string;
    labels: { [key: string]: string };
    createdBy: string;
    createdAt?: Date;
    startedAt?: Date;
    finishedAt?: Date;
    errors?: BatchInferenceTask_ErrorsInfo;
}

export enum BatchInferenceTask_Status {
    STATUS_UNSPECIFIED = 0,
    CREATED = 1,
    PENDING = 2,
    IN_PROGRESS = 3,
    COMPLETED = 4,
    FAILED = 5,
    CANCELED = 6,
    UNRECOGNIZED = -1,
}

export function batchInferenceTask_StatusFromJSON(object: any): BatchInferenceTask_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return BatchInferenceTask_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATED':
            return BatchInferenceTask_Status.CREATED;
        case 2:
        case 'PENDING':
            return BatchInferenceTask_Status.PENDING;
        case 3:
        case 'IN_PROGRESS':
            return BatchInferenceTask_Status.IN_PROGRESS;
        case 4:
        case 'COMPLETED':
            return BatchInferenceTask_Status.COMPLETED;
        case 5:
        case 'FAILED':
            return BatchInferenceTask_Status.FAILED;
        case 6:
        case 'CANCELED':
            return BatchInferenceTask_Status.CANCELED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return BatchInferenceTask_Status.UNRECOGNIZED;
    }
}

export function batchInferenceTask_StatusToJSON(object: BatchInferenceTask_Status): string {
    switch (object) {
        case BatchInferenceTask_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case BatchInferenceTask_Status.CREATED:
            return 'CREATED';
        case BatchInferenceTask_Status.PENDING:
            return 'PENDING';
        case BatchInferenceTask_Status.IN_PROGRESS:
            return 'IN_PROGRESS';
        case BatchInferenceTask_Status.COMPLETED:
            return 'COMPLETED';
        case BatchInferenceTask_Status.FAILED:
            return 'FAILED';
        case BatchInferenceTask_Status.CANCELED:
            return 'CANCELED';
        default:
            return 'UNKNOWN';
    }
}

export interface BatchInferenceTask_ErrorsInfo {
    /** If set and not OK - task failed */
    status?: Status;
    /** Errors by lines */
    lineErrors: BatchInferenceTask_ErrorsInfo_LineError[];
    /** Errors by batches */
    batchErrors: BatchInferenceTask_ErrorsInfo_BatchError[];
}

export interface BatchInferenceTask_ErrorsInfo_LineError {
    lineNumber: number;
    message: string;
}

export interface BatchInferenceTask_ErrorsInfo_BatchError {
    batchNumber: number;
    /** Range of lines in batch */
    firstLine: number;
    lastLine: number;
    message: string;
}

export interface BatchInferenceTask_LabelsEntry {
    key: string;
    value: string;
}

const baseBatchInferenceTask: object = {
    taskId: '',
    operationId: '',
    folderId: '',
    modelUri: '',
    sourceDatasetId: '',
    status: 0,
    resultDatasetId: '',
    createdBy: '',
};

export const BatchInferenceTask = {
    encode(message: BatchInferenceTask, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.taskId !== '') {
            writer.uint32(10).string(message.taskId);
        }
        if (message.operationId !== '') {
            writer.uint32(18).string(message.operationId);
        }
        if (message.folderId !== '') {
            writer.uint32(26).string(message.folderId);
        }
        if (message.modelUri !== '') {
            writer.uint32(34).string(message.modelUri);
        }
        if (message.sourceDatasetId !== '') {
            writer.uint32(42).string(message.sourceDatasetId);
        }
        if (message.completionRequest !== undefined) {
            BatchCompletionRequest.encode(
                message.completionRequest,
                writer.uint32(50).fork(),
            ).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.resultDatasetId !== '') {
            writer.uint32(66).string(message.resultDatasetId);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            BatchInferenceTask_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(74).fork(),
            ).ldelim();
        });
        if (message.createdBy !== '') {
            writer.uint32(82).string(message.createdBy);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(90).fork()).ldelim();
        }
        if (message.startedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(98).fork()).ldelim();
        }
        if (message.finishedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.finishedAt), writer.uint32(106).fork()).ldelim();
        }
        if (message.errors !== undefined) {
            BatchInferenceTask_ErrorsInfo.encode(
                message.errors,
                writer.uint32(114).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchInferenceTask {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchInferenceTask } as BatchInferenceTask;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.taskId = reader.string();
                    break;
                case 2:
                    message.operationId = reader.string();
                    break;
                case 3:
                    message.folderId = reader.string();
                    break;
                case 4:
                    message.modelUri = reader.string();
                    break;
                case 5:
                    message.sourceDatasetId = reader.string();
                    break;
                case 6:
                    message.completionRequest = BatchCompletionRequest.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 7:
                    message.status = reader.int32() as any;
                    break;
                case 8:
                    message.resultDatasetId = reader.string();
                    break;
                case 9:
                    const entry9 = BatchInferenceTask_LabelsEntry.decode(reader, reader.uint32());
                    if (entry9.value !== undefined) {
                        message.labels[entry9.key] = entry9.value;
                    }
                    break;
                case 10:
                    message.createdBy = reader.string();
                    break;
                case 11:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.startedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.finishedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.errors = BatchInferenceTask_ErrorsInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchInferenceTask {
        const message = { ...baseBatchInferenceTask } as BatchInferenceTask;
        message.taskId =
            object.taskId !== undefined && object.taskId !== null ? String(object.taskId) : '';
        message.operationId =
            object.operationId !== undefined && object.operationId !== null
                ? String(object.operationId)
                : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.modelUri =
            object.modelUri !== undefined && object.modelUri !== null
                ? String(object.modelUri)
                : '';
        message.sourceDatasetId =
            object.sourceDatasetId !== undefined && object.sourceDatasetId !== null
                ? String(object.sourceDatasetId)
                : '';
        message.completionRequest =
            object.completionRequest !== undefined && object.completionRequest !== null
                ? BatchCompletionRequest.fromJSON(object.completionRequest)
                : undefined;
        message.status =
            object.status !== undefined && object.status !== null
                ? batchInferenceTask_StatusFromJSON(object.status)
                : 0;
        message.resultDatasetId =
            object.resultDatasetId !== undefined && object.resultDatasetId !== null
                ? String(object.resultDatasetId)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
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
        message.errors =
            object.errors !== undefined && object.errors !== null
                ? BatchInferenceTask_ErrorsInfo.fromJSON(object.errors)
                : undefined;
        return message;
    },

    toJSON(message: BatchInferenceTask): unknown {
        const obj: any = {};
        message.taskId !== undefined && (obj.taskId = message.taskId);
        message.operationId !== undefined && (obj.operationId = message.operationId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.modelUri !== undefined && (obj.modelUri = message.modelUri);
        message.sourceDatasetId !== undefined && (obj.sourceDatasetId = message.sourceDatasetId);
        message.completionRequest !== undefined &&
            (obj.completionRequest = message.completionRequest
                ? BatchCompletionRequest.toJSON(message.completionRequest)
                : undefined);
        message.status !== undefined &&
            (obj.status = batchInferenceTask_StatusToJSON(message.status));
        message.resultDatasetId !== undefined && (obj.resultDatasetId = message.resultDatasetId);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.createdBy !== undefined && (obj.createdBy = message.createdBy);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.startedAt !== undefined && (obj.startedAt = message.startedAt.toISOString());
        message.finishedAt !== undefined && (obj.finishedAt = message.finishedAt.toISOString());
        message.errors !== undefined &&
            (obj.errors = message.errors
                ? BatchInferenceTask_ErrorsInfo.toJSON(message.errors)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchInferenceTask>, I>>(
        object: I,
    ): BatchInferenceTask {
        const message = { ...baseBatchInferenceTask } as BatchInferenceTask;
        message.taskId = object.taskId ?? '';
        message.operationId = object.operationId ?? '';
        message.folderId = object.folderId ?? '';
        message.modelUri = object.modelUri ?? '';
        message.sourceDatasetId = object.sourceDatasetId ?? '';
        message.completionRequest =
            object.completionRequest !== undefined && object.completionRequest !== null
                ? BatchCompletionRequest.fromPartial(object.completionRequest)
                : undefined;
        message.status = object.status ?? 0;
        message.resultDatasetId = object.resultDatasetId ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.createdBy = object.createdBy ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.startedAt = object.startedAt ?? undefined;
        message.finishedAt = object.finishedAt ?? undefined;
        message.errors =
            object.errors !== undefined && object.errors !== null
                ? BatchInferenceTask_ErrorsInfo.fromPartial(object.errors)
                : undefined;
        return message;
    },
};

const baseBatchInferenceTask_ErrorsInfo: object = {};

export const BatchInferenceTask_ErrorsInfo = {
    encode(
        message: BatchInferenceTask_ErrorsInfo,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.status !== undefined) {
            Status.encode(message.status, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.lineErrors) {
            BatchInferenceTask_ErrorsInfo_LineError.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.batchErrors) {
            BatchInferenceTask_ErrorsInfo_BatchError.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchInferenceTask_ErrorsInfo {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchInferenceTask_ErrorsInfo } as BatchInferenceTask_ErrorsInfo;
        message.lineErrors = [];
        message.batchErrors = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = Status.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.lineErrors.push(
                        BatchInferenceTask_ErrorsInfo_LineError.decode(reader, reader.uint32()),
                    );
                    break;
                case 3:
                    message.batchErrors.push(
                        BatchInferenceTask_ErrorsInfo_BatchError.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchInferenceTask_ErrorsInfo {
        const message = { ...baseBatchInferenceTask_ErrorsInfo } as BatchInferenceTask_ErrorsInfo;
        message.status =
            object.status !== undefined && object.status !== null
                ? Status.fromJSON(object.status)
                : undefined;
        message.lineErrors = (object.lineErrors ?? []).map((e: any) =>
            BatchInferenceTask_ErrorsInfo_LineError.fromJSON(e),
        );
        message.batchErrors = (object.batchErrors ?? []).map((e: any) =>
            BatchInferenceTask_ErrorsInfo_BatchError.fromJSON(e),
        );
        return message;
    },

    toJSON(message: BatchInferenceTask_ErrorsInfo): unknown {
        const obj: any = {};
        message.status !== undefined &&
            (obj.status = message.status ? Status.toJSON(message.status) : undefined);
        if (message.lineErrors) {
            obj.lineErrors = message.lineErrors.map((e) =>
                e ? BatchInferenceTask_ErrorsInfo_LineError.toJSON(e) : undefined,
            );
        } else {
            obj.lineErrors = [];
        }
        if (message.batchErrors) {
            obj.batchErrors = message.batchErrors.map((e) =>
                e ? BatchInferenceTask_ErrorsInfo_BatchError.toJSON(e) : undefined,
            );
        } else {
            obj.batchErrors = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchInferenceTask_ErrorsInfo>, I>>(
        object: I,
    ): BatchInferenceTask_ErrorsInfo {
        const message = { ...baseBatchInferenceTask_ErrorsInfo } as BatchInferenceTask_ErrorsInfo;
        message.status =
            object.status !== undefined && object.status !== null
                ? Status.fromPartial(object.status)
                : undefined;
        message.lineErrors =
            object.lineErrors?.map((e) => BatchInferenceTask_ErrorsInfo_LineError.fromPartial(e)) ||
            [];
        message.batchErrors =
            object.batchErrors?.map((e) =>
                BatchInferenceTask_ErrorsInfo_BatchError.fromPartial(e),
            ) || [];
        return message;
    },
};

const baseBatchInferenceTask_ErrorsInfo_LineError: object = { lineNumber: 0, message: '' };

export const BatchInferenceTask_ErrorsInfo_LineError = {
    encode(
        message: BatchInferenceTask_ErrorsInfo_LineError,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.lineNumber !== 0) {
            writer.uint32(8).int64(message.lineNumber);
        }
        if (message.message !== '') {
            writer.uint32(18).string(message.message);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): BatchInferenceTask_ErrorsInfo_LineError {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseBatchInferenceTask_ErrorsInfo_LineError,
        } as BatchInferenceTask_ErrorsInfo_LineError;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lineNumber = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchInferenceTask_ErrorsInfo_LineError {
        const message = {
            ...baseBatchInferenceTask_ErrorsInfo_LineError,
        } as BatchInferenceTask_ErrorsInfo_LineError;
        message.lineNumber =
            object.lineNumber !== undefined && object.lineNumber !== null
                ? Number(object.lineNumber)
                : 0;
        message.message =
            object.message !== undefined && object.message !== null ? String(object.message) : '';
        return message;
    },

    toJSON(message: BatchInferenceTask_ErrorsInfo_LineError): unknown {
        const obj: any = {};
        message.lineNumber !== undefined && (obj.lineNumber = Math.round(message.lineNumber));
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchInferenceTask_ErrorsInfo_LineError>, I>>(
        object: I,
    ): BatchInferenceTask_ErrorsInfo_LineError {
        const message = {
            ...baseBatchInferenceTask_ErrorsInfo_LineError,
        } as BatchInferenceTask_ErrorsInfo_LineError;
        message.lineNumber = object.lineNumber ?? 0;
        message.message = object.message ?? '';
        return message;
    },
};

const baseBatchInferenceTask_ErrorsInfo_BatchError: object = {
    batchNumber: 0,
    firstLine: 0,
    lastLine: 0,
    message: '',
};

export const BatchInferenceTask_ErrorsInfo_BatchError = {
    encode(
        message: BatchInferenceTask_ErrorsInfo_BatchError,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.batchNumber !== 0) {
            writer.uint32(8).int64(message.batchNumber);
        }
        if (message.firstLine !== 0) {
            writer.uint32(16).int64(message.firstLine);
        }
        if (message.lastLine !== 0) {
            writer.uint32(24).int64(message.lastLine);
        }
        if (message.message !== '') {
            writer.uint32(34).string(message.message);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): BatchInferenceTask_ErrorsInfo_BatchError {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseBatchInferenceTask_ErrorsInfo_BatchError,
        } as BatchInferenceTask_ErrorsInfo_BatchError;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchNumber = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.firstLine = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.lastLine = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BatchInferenceTask_ErrorsInfo_BatchError {
        const message = {
            ...baseBatchInferenceTask_ErrorsInfo_BatchError,
        } as BatchInferenceTask_ErrorsInfo_BatchError;
        message.batchNumber =
            object.batchNumber !== undefined && object.batchNumber !== null
                ? Number(object.batchNumber)
                : 0;
        message.firstLine =
            object.firstLine !== undefined && object.firstLine !== null
                ? Number(object.firstLine)
                : 0;
        message.lastLine =
            object.lastLine !== undefined && object.lastLine !== null ? Number(object.lastLine) : 0;
        message.message =
            object.message !== undefined && object.message !== null ? String(object.message) : '';
        return message;
    },

    toJSON(message: BatchInferenceTask_ErrorsInfo_BatchError): unknown {
        const obj: any = {};
        message.batchNumber !== undefined && (obj.batchNumber = Math.round(message.batchNumber));
        message.firstLine !== undefined && (obj.firstLine = Math.round(message.firstLine));
        message.lastLine !== undefined && (obj.lastLine = Math.round(message.lastLine));
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchInferenceTask_ErrorsInfo_BatchError>, I>>(
        object: I,
    ): BatchInferenceTask_ErrorsInfo_BatchError {
        const message = {
            ...baseBatchInferenceTask_ErrorsInfo_BatchError,
        } as BatchInferenceTask_ErrorsInfo_BatchError;
        message.batchNumber = object.batchNumber ?? 0;
        message.firstLine = object.firstLine ?? 0;
        message.lastLine = object.lastLine ?? 0;
        message.message = object.message ?? '';
        return message;
    },
};

const baseBatchInferenceTask_LabelsEntry: object = { key: '', value: '' };

export const BatchInferenceTask_LabelsEntry = {
    encode(
        message: BatchInferenceTask_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): BatchInferenceTask_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBatchInferenceTask_LabelsEntry } as BatchInferenceTask_LabelsEntry;
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

    fromJSON(object: any): BatchInferenceTask_LabelsEntry {
        const message = { ...baseBatchInferenceTask_LabelsEntry } as BatchInferenceTask_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: BatchInferenceTask_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BatchInferenceTask_LabelsEntry>, I>>(
        object: I,
    ): BatchInferenceTask_LabelsEntry {
        const message = { ...baseBatchInferenceTask_LabelsEntry } as BatchInferenceTask_LabelsEntry;
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
