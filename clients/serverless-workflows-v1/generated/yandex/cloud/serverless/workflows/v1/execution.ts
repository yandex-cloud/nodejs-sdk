/* eslint-disable */
import { messageTypeRegistry } from '../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Duration } from '../../../../../google/protobuf/duration';
import { Timestamp } from '../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.serverless.workflows.v1';

export interface Execution {
    $type: 'yandex.cloud.serverless.workflows.v1.Execution';
    /** ID of the Workflow execution. Generated at creation time. */
    id: string;
    /** ID of the Workflow. */
    workflowId: string;
    /** Input data for the Workflow execution. */
    input?: ExecutionInput;
    /** Result of the Workflow execution. */
    result?: ExecutionResult;
    /** Error details, in case Workflow execution failed. */
    error?: ExecutionError;
    /** Status of the Workflow execution */
    status: Execution_Status;
    /** Start timestamp for the Workflow execution. */
    startedAt?: Date;
    /** Duration of the Workflow execution. */
    duration?: Duration;
}

export enum Execution_Status {
    STATUS_UNSPECIFIED = 0,
    /** QUEUED - Workflow execution is being queued. */
    QUEUED = 1,
    /** RUNNING - Workflow execution is running. */
    RUNNING = 2,
    /** PAUSED - Workflow execution is being paused. */
    PAUSED = 3,
    /** STOPPED - Workflow execution is stopped. */
    STOPPED = 4,
    /** FAILED - Workflow execution is failed. */
    FAILED = 5,
    /** FINISHED - Workflow execution is finished. */
    FINISHED = 6,
    UNRECOGNIZED = -1,
}

export function execution_StatusFromJSON(object: any): Execution_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Execution_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'QUEUED':
            return Execution_Status.QUEUED;
        case 2:
        case 'RUNNING':
            return Execution_Status.RUNNING;
        case 3:
        case 'PAUSED':
            return Execution_Status.PAUSED;
        case 4:
        case 'STOPPED':
            return Execution_Status.STOPPED;
        case 5:
        case 'FAILED':
            return Execution_Status.FAILED;
        case 6:
        case 'FINISHED':
            return Execution_Status.FINISHED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Execution_Status.UNRECOGNIZED;
    }
}

export function execution_StatusToJSON(object: Execution_Status): string {
    switch (object) {
        case Execution_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Execution_Status.QUEUED:
            return 'QUEUED';
        case Execution_Status.RUNNING:
            return 'RUNNING';
        case Execution_Status.PAUSED:
            return 'PAUSED';
        case Execution_Status.STOPPED:
            return 'STOPPED';
        case Execution_Status.FAILED:
            return 'FAILED';
        case Execution_Status.FINISHED:
            return 'FINISHED';
        default:
            return 'UNKNOWN';
    }
}

export interface ExecutionPreview {
    $type: 'yandex.cloud.serverless.workflows.v1.ExecutionPreview';
    /** ID of the Workflow execution. Generated at creation time. */
    id: string;
    /** ID of the Workflow. */
    workflowId: string;
    /** Status of the Workflow execution */
    status: Execution_Status;
    /** Start timestamp for the Workflow execution. */
    startedAt?: Date;
    /** Duration of the Workflow execution. */
    duration?: Duration;
}

export interface ExecutionInput {
    $type: 'yandex.cloud.serverless.workflows.v1.ExecutionInput';
    /** JSON input data for the Workflow execution. */
    inputJson: string | undefined;
}

export interface ExecutionResult {
    $type: 'yandex.cloud.serverless.workflows.v1.ExecutionResult';
    /** JSON result of the Workflow execution. */
    resultJson: string | undefined;
}

export interface ExecutionError {
    $type: 'yandex.cloud.serverless.workflows.v1.ExecutionError';
    /** Error message of the Workflow execution. */
    message: string;
    /** Error code of the Workflow execution. */
    errorCode: string;
}

const baseExecution: object = {
    $type: 'yandex.cloud.serverless.workflows.v1.Execution',
    id: '',
    workflowId: '',
    status: 0,
};

export const Execution = {
    $type: 'yandex.cloud.serverless.workflows.v1.Execution' as const,

    encode(message: Execution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.workflowId !== '') {
            writer.uint32(18).string(message.workflowId);
        }
        if (message.input !== undefined) {
            ExecutionInput.encode(message.input, writer.uint32(34).fork()).ldelim();
        }
        if (message.result !== undefined) {
            ExecutionResult.encode(message.result, writer.uint32(42).fork()).ldelim();
        }
        if (message.error !== undefined) {
            ExecutionError.encode(message.error, writer.uint32(50).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.startedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(66).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Execution {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExecution } as Execution;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.workflowId = reader.string();
                    break;
                case 4:
                    message.input = ExecutionInput.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.result = ExecutionResult.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.error = ExecutionError.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.status = reader.int32() as any;
                    break;
                case 8:
                    message.startedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.duration = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Execution {
        const message = { ...baseExecution } as Execution;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.workflowId =
            object.workflowId !== undefined && object.workflowId !== null
                ? String(object.workflowId)
                : '';
        message.input =
            object.input !== undefined && object.input !== null
                ? ExecutionInput.fromJSON(object.input)
                : undefined;
        message.result =
            object.result !== undefined && object.result !== null
                ? ExecutionResult.fromJSON(object.result)
                : undefined;
        message.error =
            object.error !== undefined && object.error !== null
                ? ExecutionError.fromJSON(object.error)
                : undefined;
        message.status =
            object.status !== undefined && object.status !== null
                ? execution_StatusFromJSON(object.status)
                : 0;
        message.startedAt =
            object.startedAt !== undefined && object.startedAt !== null
                ? fromJsonTimestamp(object.startedAt)
                : undefined;
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Duration.fromJSON(object.duration)
                : undefined;
        return message;
    },

    toJSON(message: Execution): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.workflowId !== undefined && (obj.workflowId = message.workflowId);
        message.input !== undefined &&
            (obj.input = message.input ? ExecutionInput.toJSON(message.input) : undefined);
        message.result !== undefined &&
            (obj.result = message.result ? ExecutionResult.toJSON(message.result) : undefined);
        message.error !== undefined &&
            (obj.error = message.error ? ExecutionError.toJSON(message.error) : undefined);
        message.status !== undefined && (obj.status = execution_StatusToJSON(message.status));
        message.startedAt !== undefined && (obj.startedAt = message.startedAt.toISOString());
        message.duration !== undefined &&
            (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Execution>, I>>(object: I): Execution {
        const message = { ...baseExecution } as Execution;
        message.id = object.id ?? '';
        message.workflowId = object.workflowId ?? '';
        message.input =
            object.input !== undefined && object.input !== null
                ? ExecutionInput.fromPartial(object.input)
                : undefined;
        message.result =
            object.result !== undefined && object.result !== null
                ? ExecutionResult.fromPartial(object.result)
                : undefined;
        message.error =
            object.error !== undefined && object.error !== null
                ? ExecutionError.fromPartial(object.error)
                : undefined;
        message.status = object.status ?? 0;
        message.startedAt = object.startedAt ?? undefined;
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Duration.fromPartial(object.duration)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Execution.$type, Execution);

const baseExecutionPreview: object = {
    $type: 'yandex.cloud.serverless.workflows.v1.ExecutionPreview',
    id: '',
    workflowId: '',
    status: 0,
};

export const ExecutionPreview = {
    $type: 'yandex.cloud.serverless.workflows.v1.ExecutionPreview' as const,

    encode(message: ExecutionPreview, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.workflowId !== '') {
            writer.uint32(18).string(message.workflowId);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.startedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ExecutionPreview {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExecutionPreview } as ExecutionPreview;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.workflowId = reader.string();
                    break;
                case 4:
                    message.status = reader.int32() as any;
                    break;
                case 5:
                    message.startedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.duration = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ExecutionPreview {
        const message = { ...baseExecutionPreview } as ExecutionPreview;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.workflowId =
            object.workflowId !== undefined && object.workflowId !== null
                ? String(object.workflowId)
                : '';
        message.status =
            object.status !== undefined && object.status !== null
                ? execution_StatusFromJSON(object.status)
                : 0;
        message.startedAt =
            object.startedAt !== undefined && object.startedAt !== null
                ? fromJsonTimestamp(object.startedAt)
                : undefined;
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Duration.fromJSON(object.duration)
                : undefined;
        return message;
    },

    toJSON(message: ExecutionPreview): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.workflowId !== undefined && (obj.workflowId = message.workflowId);
        message.status !== undefined && (obj.status = execution_StatusToJSON(message.status));
        message.startedAt !== undefined && (obj.startedAt = message.startedAt.toISOString());
        message.duration !== undefined &&
            (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ExecutionPreview>, I>>(object: I): ExecutionPreview {
        const message = { ...baseExecutionPreview } as ExecutionPreview;
        message.id = object.id ?? '';
        message.workflowId = object.workflowId ?? '';
        message.status = object.status ?? 0;
        message.startedAt = object.startedAt ?? undefined;
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Duration.fromPartial(object.duration)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(ExecutionPreview.$type, ExecutionPreview);

const baseExecutionInput: object = { $type: 'yandex.cloud.serverless.workflows.v1.ExecutionInput' };

export const ExecutionInput = {
    $type: 'yandex.cloud.serverless.workflows.v1.ExecutionInput' as const,

    encode(message: ExecutionInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.inputJson !== undefined) {
            writer.uint32(10).string(message.inputJson);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ExecutionInput {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExecutionInput } as ExecutionInput;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inputJson = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ExecutionInput {
        const message = { ...baseExecutionInput } as ExecutionInput;
        message.inputJson =
            object.inputJson !== undefined && object.inputJson !== null
                ? String(object.inputJson)
                : undefined;
        return message;
    },

    toJSON(message: ExecutionInput): unknown {
        const obj: any = {};
        message.inputJson !== undefined && (obj.inputJson = message.inputJson);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ExecutionInput>, I>>(object: I): ExecutionInput {
        const message = { ...baseExecutionInput } as ExecutionInput;
        message.inputJson = object.inputJson ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(ExecutionInput.$type, ExecutionInput);

const baseExecutionResult: object = {
    $type: 'yandex.cloud.serverless.workflows.v1.ExecutionResult',
};

export const ExecutionResult = {
    $type: 'yandex.cloud.serverless.workflows.v1.ExecutionResult' as const,

    encode(message: ExecutionResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.resultJson !== undefined) {
            writer.uint32(10).string(message.resultJson);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ExecutionResult {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExecutionResult } as ExecutionResult;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resultJson = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ExecutionResult {
        const message = { ...baseExecutionResult } as ExecutionResult;
        message.resultJson =
            object.resultJson !== undefined && object.resultJson !== null
                ? String(object.resultJson)
                : undefined;
        return message;
    },

    toJSON(message: ExecutionResult): unknown {
        const obj: any = {};
        message.resultJson !== undefined && (obj.resultJson = message.resultJson);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ExecutionResult>, I>>(object: I): ExecutionResult {
        const message = { ...baseExecutionResult } as ExecutionResult;
        message.resultJson = object.resultJson ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(ExecutionResult.$type, ExecutionResult);

const baseExecutionError: object = {
    $type: 'yandex.cloud.serverless.workflows.v1.ExecutionError',
    message: '',
    errorCode: '',
};

export const ExecutionError = {
    $type: 'yandex.cloud.serverless.workflows.v1.ExecutionError' as const,

    encode(message: ExecutionError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.message !== '') {
            writer.uint32(10).string(message.message);
        }
        if (message.errorCode !== '') {
            writer.uint32(18).string(message.errorCode);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ExecutionError {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExecutionError } as ExecutionError;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                case 2:
                    message.errorCode = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ExecutionError {
        const message = { ...baseExecutionError } as ExecutionError;
        message.message =
            object.message !== undefined && object.message !== null ? String(object.message) : '';
        message.errorCode =
            object.errorCode !== undefined && object.errorCode !== null
                ? String(object.errorCode)
                : '';
        return message;
    },

    toJSON(message: ExecutionError): unknown {
        const obj: any = {};
        message.message !== undefined && (obj.message = message.message);
        message.errorCode !== undefined && (obj.errorCode = message.errorCode);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ExecutionError>, I>>(object: I): ExecutionError {
        const message = { ...baseExecutionError } as ExecutionError;
        message.message = object.message ?? '';
        message.errorCode = object.errorCode ?? '';
        return message;
    },
};

messageTypeRegistry.set(ExecutionError.$type, ExecutionError);

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
