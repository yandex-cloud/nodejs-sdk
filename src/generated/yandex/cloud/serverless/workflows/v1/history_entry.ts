/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Duration } from '../../../../../google/protobuf/duration';
import { Timestamp } from '../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.serverless.workflows.v1';

export interface HistoryEntry {
    /** ID of the Workflow step. */
    id: string;
    /** Title of the Workflow step. */
    title: string;
    /** Description of the Workflow step. */
    description: string;
    /** Start timestamp for the Workflow step. */
    startedAt?: Date;
    /** Duration of the Workflow step. */
    duration?: Duration;
    /** Input data for the Workflow step. */
    input?: HistoryEntryInput;
    /** Result of the Workflow step. */
    output?: HistoryEntryOutput;
    /** Error details, in case Workflow step failed. */
    error?: HistoryEntryError;
    /** Status of the Workflow step. */
    status: HistoryEntry_Status;
    /** Type of the Workflow step (for example, FunctionCall or HttpCall). */
    type: string;
    /** Number of attempts (including all retries of unsuccessful attempts). Value "1" means there were no retries. */
    attempts: number;
    /** Last received error details in case of retries. */
    lastError?: HistoryEntryError;
}

export enum HistoryEntry_Status {
    STATUS_UNSPECIFIED = 0,
    /** SCHEDULED - Step execution is being scheduled. */
    SCHEDULED = 1,
    /** STARTED - Step execution is started. */
    STARTED = 2,
    /** COMPLETED - Step execution is completed. */
    COMPLETED = 3,
    /** FAILED - Step execution is failed. */
    FAILED = 4,
    /** CANCEL_REQUESTED - Step execution is requested to be cancelled. */
    CANCEL_REQUESTED = 5,
    /** CANCELLED - Step execution is canceled. */
    CANCELLED = 6,
    UNRECOGNIZED = -1,
}

export function historyEntry_StatusFromJSON(object: any): HistoryEntry_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return HistoryEntry_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'SCHEDULED':
            return HistoryEntry_Status.SCHEDULED;
        case 2:
        case 'STARTED':
            return HistoryEntry_Status.STARTED;
        case 3:
        case 'COMPLETED':
            return HistoryEntry_Status.COMPLETED;
        case 4:
        case 'FAILED':
            return HistoryEntry_Status.FAILED;
        case 5:
        case 'CANCEL_REQUESTED':
            return HistoryEntry_Status.CANCEL_REQUESTED;
        case 6:
        case 'CANCELLED':
            return HistoryEntry_Status.CANCELLED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return HistoryEntry_Status.UNRECOGNIZED;
    }
}

export function historyEntry_StatusToJSON(object: HistoryEntry_Status): string {
    switch (object) {
        case HistoryEntry_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case HistoryEntry_Status.SCHEDULED:
            return 'SCHEDULED';
        case HistoryEntry_Status.STARTED:
            return 'STARTED';
        case HistoryEntry_Status.COMPLETED:
            return 'COMPLETED';
        case HistoryEntry_Status.FAILED:
            return 'FAILED';
        case HistoryEntry_Status.CANCEL_REQUESTED:
            return 'CANCEL_REQUESTED';
        case HistoryEntry_Status.CANCELLED:
            return 'CANCELLED';
        default:
            return 'UNKNOWN';
    }
}

export interface HistoryEntry_FailedAttempt {
    /** Start timestamp for the attempt. */
    startedAt?: Date;
    /** Duration of the attempt. */
    duration?: Duration;
    /** Error details. */
    error?: HistoryEntryError;
}

export interface HistoryEntryInput {
    /** JSON input data for the Workflow step. */
    inputJson: string | undefined;
}

export interface HistoryEntryOutput {
    /** JSON result for the Workflow step. */
    outputJson: string | undefined;
}

export interface HistoryEntryError {
    /** Error message of the Workflow step. */
    message: string;
    /** Error code of the Workflow step. */
    errorCode: string;
}

const baseHistoryEntry: object = {
    id: '',
    title: '',
    description: '',
    status: 0,
    type: '',
    attempts: 0,
};

export const HistoryEntry = {
    encode(message: HistoryEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.title !== '') {
            writer.uint32(18).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.startedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(42).fork()).ldelim();
        }
        if (message.input !== undefined) {
            HistoryEntryInput.encode(message.input, writer.uint32(50).fork()).ldelim();
        }
        if (message.output !== undefined) {
            HistoryEntryOutput.encode(message.output, writer.uint32(58).fork()).ldelim();
        }
        if (message.error !== undefined) {
            HistoryEntryError.encode(message.error, writer.uint32(66).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(72).int32(message.status);
        }
        if (message.type !== '') {
            writer.uint32(82).string(message.type);
        }
        if (message.attempts !== 0) {
            writer.uint32(96).int64(message.attempts);
        }
        if (message.lastError !== undefined) {
            HistoryEntryError.encode(message.lastError, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HistoryEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHistoryEntry } as HistoryEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.startedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.duration = Duration.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.input = HistoryEntryInput.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.output = HistoryEntryOutput.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.error = HistoryEntryError.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.status = reader.int32() as any;
                    break;
                case 10:
                    message.type = reader.string();
                    break;
                case 12:
                    message.attempts = longToNumber(reader.int64() as Long);
                    break;
                case 13:
                    message.lastError = HistoryEntryError.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HistoryEntry {
        const message = { ...baseHistoryEntry } as HistoryEntry;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.title =
            object.title !== undefined && object.title !== null ? String(object.title) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.startedAt =
            object.startedAt !== undefined && object.startedAt !== null
                ? fromJsonTimestamp(object.startedAt)
                : undefined;
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Duration.fromJSON(object.duration)
                : undefined;
        message.input =
            object.input !== undefined && object.input !== null
                ? HistoryEntryInput.fromJSON(object.input)
                : undefined;
        message.output =
            object.output !== undefined && object.output !== null
                ? HistoryEntryOutput.fromJSON(object.output)
                : undefined;
        message.error =
            object.error !== undefined && object.error !== null
                ? HistoryEntryError.fromJSON(object.error)
                : undefined;
        message.status =
            object.status !== undefined && object.status !== null
                ? historyEntry_StatusFromJSON(object.status)
                : 0;
        message.type = object.type !== undefined && object.type !== null ? String(object.type) : '';
        message.attempts =
            object.attempts !== undefined && object.attempts !== null ? Number(object.attempts) : 0;
        message.lastError =
            object.lastError !== undefined && object.lastError !== null
                ? HistoryEntryError.fromJSON(object.lastError)
                : undefined;
        return message;
    },

    toJSON(message: HistoryEntry): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.startedAt !== undefined && (obj.startedAt = message.startedAt.toISOString());
        message.duration !== undefined &&
            (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
        message.input !== undefined &&
            (obj.input = message.input ? HistoryEntryInput.toJSON(message.input) : undefined);
        message.output !== undefined &&
            (obj.output = message.output ? HistoryEntryOutput.toJSON(message.output) : undefined);
        message.error !== undefined &&
            (obj.error = message.error ? HistoryEntryError.toJSON(message.error) : undefined);
        message.status !== undefined && (obj.status = historyEntry_StatusToJSON(message.status));
        message.type !== undefined && (obj.type = message.type);
        message.attempts !== undefined && (obj.attempts = Math.round(message.attempts));
        message.lastError !== undefined &&
            (obj.lastError = message.lastError
                ? HistoryEntryError.toJSON(message.lastError)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HistoryEntry>, I>>(object: I): HistoryEntry {
        const message = { ...baseHistoryEntry } as HistoryEntry;
        message.id = object.id ?? '';
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.startedAt = object.startedAt ?? undefined;
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Duration.fromPartial(object.duration)
                : undefined;
        message.input =
            object.input !== undefined && object.input !== null
                ? HistoryEntryInput.fromPartial(object.input)
                : undefined;
        message.output =
            object.output !== undefined && object.output !== null
                ? HistoryEntryOutput.fromPartial(object.output)
                : undefined;
        message.error =
            object.error !== undefined && object.error !== null
                ? HistoryEntryError.fromPartial(object.error)
                : undefined;
        message.status = object.status ?? 0;
        message.type = object.type ?? '';
        message.attempts = object.attempts ?? 0;
        message.lastError =
            object.lastError !== undefined && object.lastError !== null
                ? HistoryEntryError.fromPartial(object.lastError)
                : undefined;
        return message;
    },
};

const baseHistoryEntry_FailedAttempt: object = {};

export const HistoryEntry_FailedAttempt = {
    encode(
        message: HistoryEntry_FailedAttempt,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.startedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(10).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        if (message.error !== undefined) {
            HistoryEntryError.encode(message.error, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HistoryEntry_FailedAttempt {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHistoryEntry_FailedAttempt } as HistoryEntry_FailedAttempt;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.duration = Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.error = HistoryEntryError.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HistoryEntry_FailedAttempt {
        const message = { ...baseHistoryEntry_FailedAttempt } as HistoryEntry_FailedAttempt;
        message.startedAt =
            object.startedAt !== undefined && object.startedAt !== null
                ? fromJsonTimestamp(object.startedAt)
                : undefined;
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Duration.fromJSON(object.duration)
                : undefined;
        message.error =
            object.error !== undefined && object.error !== null
                ? HistoryEntryError.fromJSON(object.error)
                : undefined;
        return message;
    },

    toJSON(message: HistoryEntry_FailedAttempt): unknown {
        const obj: any = {};
        message.startedAt !== undefined && (obj.startedAt = message.startedAt.toISOString());
        message.duration !== undefined &&
            (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
        message.error !== undefined &&
            (obj.error = message.error ? HistoryEntryError.toJSON(message.error) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HistoryEntry_FailedAttempt>, I>>(
        object: I,
    ): HistoryEntry_FailedAttempt {
        const message = { ...baseHistoryEntry_FailedAttempt } as HistoryEntry_FailedAttempt;
        message.startedAt = object.startedAt ?? undefined;
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Duration.fromPartial(object.duration)
                : undefined;
        message.error =
            object.error !== undefined && object.error !== null
                ? HistoryEntryError.fromPartial(object.error)
                : undefined;
        return message;
    },
};

const baseHistoryEntryInput: object = {};

export const HistoryEntryInput = {
    encode(message: HistoryEntryInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.inputJson !== undefined) {
            writer.uint32(10).string(message.inputJson);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HistoryEntryInput {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHistoryEntryInput } as HistoryEntryInput;
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

    fromJSON(object: any): HistoryEntryInput {
        const message = { ...baseHistoryEntryInput } as HistoryEntryInput;
        message.inputJson =
            object.inputJson !== undefined && object.inputJson !== null
                ? String(object.inputJson)
                : undefined;
        return message;
    },

    toJSON(message: HistoryEntryInput): unknown {
        const obj: any = {};
        message.inputJson !== undefined && (obj.inputJson = message.inputJson);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HistoryEntryInput>, I>>(object: I): HistoryEntryInput {
        const message = { ...baseHistoryEntryInput } as HistoryEntryInput;
        message.inputJson = object.inputJson ?? undefined;
        return message;
    },
};

const baseHistoryEntryOutput: object = {};

export const HistoryEntryOutput = {
    encode(message: HistoryEntryOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.outputJson !== undefined) {
            writer.uint32(10).string(message.outputJson);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HistoryEntryOutput {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHistoryEntryOutput } as HistoryEntryOutput;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.outputJson = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HistoryEntryOutput {
        const message = { ...baseHistoryEntryOutput } as HistoryEntryOutput;
        message.outputJson =
            object.outputJson !== undefined && object.outputJson !== null
                ? String(object.outputJson)
                : undefined;
        return message;
    },

    toJSON(message: HistoryEntryOutput): unknown {
        const obj: any = {};
        message.outputJson !== undefined && (obj.outputJson = message.outputJson);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HistoryEntryOutput>, I>>(
        object: I,
    ): HistoryEntryOutput {
        const message = { ...baseHistoryEntryOutput } as HistoryEntryOutput;
        message.outputJson = object.outputJson ?? undefined;
        return message;
    },
};

const baseHistoryEntryError: object = { message: '', errorCode: '' };

export const HistoryEntryError = {
    encode(message: HistoryEntryError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.message !== '') {
            writer.uint32(10).string(message.message);
        }
        if (message.errorCode !== '') {
            writer.uint32(18).string(message.errorCode);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HistoryEntryError {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHistoryEntryError } as HistoryEntryError;
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

    fromJSON(object: any): HistoryEntryError {
        const message = { ...baseHistoryEntryError } as HistoryEntryError;
        message.message =
            object.message !== undefined && object.message !== null ? String(object.message) : '';
        message.errorCode =
            object.errorCode !== undefined && object.errorCode !== null
                ? String(object.errorCode)
                : '';
        return message;
    },

    toJSON(message: HistoryEntryError): unknown {
        const obj: any = {};
        message.message !== undefined && (obj.message = message.message);
        message.errorCode !== undefined && (obj.errorCode = message.errorCode);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HistoryEntryError>, I>>(object: I): HistoryEntryError {
        const message = { ...baseHistoryEntryError } as HistoryEntryError;
        message.message = object.message ?? '';
        message.errorCode = object.errorCode ?? '';
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
