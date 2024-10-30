/* eslint-disable */
import { messageTypeRegistry } from '../../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
    PromptTruncationOptions,
    CompletionOptions,
} from '../../../../../../yandex/cloud/ai/assistants/v1/common';
import { Timestamp } from '../../../../../../google/protobuf/timestamp';
import { Error } from '../../../../../../yandex/cloud/ai/common/common';
import { Message } from '../../../../../../yandex/cloud/ai/assistants/v1/threads/message';

export const protobufPackage = 'yandex.cloud.ai.assistants.v1.runs';

export interface Run {
    $type: 'yandex.cloud.ai.assistants.v1.runs.Run';
    id: string;
    assistantId: string;
    threadId: string;
    createdBy: string;
    createdAt?: Date;
    labels: { [key: string]: string };
    state?: RunState;
    usage?: ContentUsage;
    customPromptTruncationOptions?: PromptTruncationOptions;
    customCompletionOptions?: CompletionOptions;
}

export interface Run_LabelsEntry {
    $type: 'yandex.cloud.ai.assistants.v1.runs.Run.LabelsEntry';
    key: string;
    value: string;
}

export interface RunState {
    $type: 'yandex.cloud.ai.assistants.v1.runs.RunState';
    status: RunState_RunStatus;
    error?: Error | undefined;
    completedMessage?: Message | undefined;
}

export enum RunState_RunStatus {
    RUN_STATUS_UNSPECIFIED = 0,
    PENDING = 1,
    IN_PROGRESS = 2,
    FAILED = 3,
    COMPLETED = 4,
    UNRECOGNIZED = -1,
}

export function runState_RunStatusFromJSON(object: any): RunState_RunStatus {
    switch (object) {
        case 0:
        case 'RUN_STATUS_UNSPECIFIED':
            return RunState_RunStatus.RUN_STATUS_UNSPECIFIED;
        case 1:
        case 'PENDING':
            return RunState_RunStatus.PENDING;
        case 2:
        case 'IN_PROGRESS':
            return RunState_RunStatus.IN_PROGRESS;
        case 3:
        case 'FAILED':
            return RunState_RunStatus.FAILED;
        case 4:
        case 'COMPLETED':
            return RunState_RunStatus.COMPLETED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return RunState_RunStatus.UNRECOGNIZED;
    }
}

export function runState_RunStatusToJSON(object: RunState_RunStatus): string {
    switch (object) {
        case RunState_RunStatus.RUN_STATUS_UNSPECIFIED:
            return 'RUN_STATUS_UNSPECIFIED';
        case RunState_RunStatus.PENDING:
            return 'PENDING';
        case RunState_RunStatus.IN_PROGRESS:
            return 'IN_PROGRESS';
        case RunState_RunStatus.FAILED:
            return 'FAILED';
        case RunState_RunStatus.COMPLETED:
            return 'COMPLETED';
        default:
            return 'UNKNOWN';
    }
}

export interface ContentUsage {
    $type: 'yandex.cloud.ai.assistants.v1.runs.ContentUsage';
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
}

const baseRun: object = {
    $type: 'yandex.cloud.ai.assistants.v1.runs.Run',
    id: '',
    assistantId: '',
    threadId: '',
    createdBy: '',
};

export const Run = {
    $type: 'yandex.cloud.ai.assistants.v1.runs.Run' as const,

    encode(message: Run, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.assistantId !== '') {
            writer.uint32(18).string(message.assistantId);
        }
        if (message.threadId !== '') {
            writer.uint32(26).string(message.threadId);
        }
        if (message.createdBy !== '') {
            writer.uint32(34).string(message.createdBy);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Run_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.ai.assistants.v1.runs.Run.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        if (message.state !== undefined) {
            RunState.encode(message.state, writer.uint32(58).fork()).ldelim();
        }
        if (message.usage !== undefined) {
            ContentUsage.encode(message.usage, writer.uint32(66).fork()).ldelim();
        }
        if (message.customPromptTruncationOptions !== undefined) {
            PromptTruncationOptions.encode(
                message.customPromptTruncationOptions,
                writer.uint32(74).fork(),
            ).ldelim();
        }
        if (message.customCompletionOptions !== undefined) {
            CompletionOptions.encode(
                message.customCompletionOptions,
                writer.uint32(82).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Run {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRun } as Run;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.assistantId = reader.string();
                    break;
                case 3:
                    message.threadId = reader.string();
                    break;
                case 4:
                    message.createdBy = reader.string();
                    break;
                case 5:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    const entry6 = Run_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.state = RunState.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.usage = ContentUsage.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.customPromptTruncationOptions = PromptTruncationOptions.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 10:
                    message.customCompletionOptions = CompletionOptions.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Run {
        const message = { ...baseRun } as Run;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.assistantId =
            object.assistantId !== undefined && object.assistantId !== null
                ? String(object.assistantId)
                : '';
        message.threadId =
            object.threadId !== undefined && object.threadId !== null
                ? String(object.threadId)
                : '';
        message.createdBy =
            object.createdBy !== undefined && object.createdBy !== null
                ? String(object.createdBy)
                : '';
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
        message.state =
            object.state !== undefined && object.state !== null
                ? RunState.fromJSON(object.state)
                : undefined;
        message.usage =
            object.usage !== undefined && object.usage !== null
                ? ContentUsage.fromJSON(object.usage)
                : undefined;
        message.customPromptTruncationOptions =
            object.customPromptTruncationOptions !== undefined &&
            object.customPromptTruncationOptions !== null
                ? PromptTruncationOptions.fromJSON(object.customPromptTruncationOptions)
                : undefined;
        message.customCompletionOptions =
            object.customCompletionOptions !== undefined && object.customCompletionOptions !== null
                ? CompletionOptions.fromJSON(object.customCompletionOptions)
                : undefined;
        return message;
    },

    toJSON(message: Run): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.assistantId !== undefined && (obj.assistantId = message.assistantId);
        message.threadId !== undefined && (obj.threadId = message.threadId);
        message.createdBy !== undefined && (obj.createdBy = message.createdBy);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.state !== undefined &&
            (obj.state = message.state ? RunState.toJSON(message.state) : undefined);
        message.usage !== undefined &&
            (obj.usage = message.usage ? ContentUsage.toJSON(message.usage) : undefined);
        message.customPromptTruncationOptions !== undefined &&
            (obj.customPromptTruncationOptions = message.customPromptTruncationOptions
                ? PromptTruncationOptions.toJSON(message.customPromptTruncationOptions)
                : undefined);
        message.customCompletionOptions !== undefined &&
            (obj.customCompletionOptions = message.customCompletionOptions
                ? CompletionOptions.toJSON(message.customCompletionOptions)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Run>, I>>(object: I): Run {
        const message = { ...baseRun } as Run;
        message.id = object.id ?? '';
        message.assistantId = object.assistantId ?? '';
        message.threadId = object.threadId ?? '';
        message.createdBy = object.createdBy ?? '';
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
        message.state =
            object.state !== undefined && object.state !== null
                ? RunState.fromPartial(object.state)
                : undefined;
        message.usage =
            object.usage !== undefined && object.usage !== null
                ? ContentUsage.fromPartial(object.usage)
                : undefined;
        message.customPromptTruncationOptions =
            object.customPromptTruncationOptions !== undefined &&
            object.customPromptTruncationOptions !== null
                ? PromptTruncationOptions.fromPartial(object.customPromptTruncationOptions)
                : undefined;
        message.customCompletionOptions =
            object.customCompletionOptions !== undefined && object.customCompletionOptions !== null
                ? CompletionOptions.fromPartial(object.customCompletionOptions)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Run.$type, Run);

const baseRun_LabelsEntry: object = {
    $type: 'yandex.cloud.ai.assistants.v1.runs.Run.LabelsEntry',
    key: '',
    value: '',
};

export const Run_LabelsEntry = {
    $type: 'yandex.cloud.ai.assistants.v1.runs.Run.LabelsEntry' as const,

    encode(message: Run_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Run_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRun_LabelsEntry } as Run_LabelsEntry;
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

    fromJSON(object: any): Run_LabelsEntry {
        const message = { ...baseRun_LabelsEntry } as Run_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Run_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Run_LabelsEntry>, I>>(object: I): Run_LabelsEntry {
        const message = { ...baseRun_LabelsEntry } as Run_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(Run_LabelsEntry.$type, Run_LabelsEntry);

const baseRunState: object = { $type: 'yandex.cloud.ai.assistants.v1.runs.RunState', status: 0 };

export const RunState = {
    $type: 'yandex.cloud.ai.assistants.v1.runs.RunState' as const,

    encode(message: RunState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        if (message.error !== undefined) {
            Error.encode(message.error, writer.uint32(18).fork()).ldelim();
        }
        if (message.completedMessage !== undefined) {
            Message.encode(message.completedMessage, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RunState {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRunState } as RunState;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32() as any;
                    break;
                case 2:
                    message.error = Error.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.completedMessage = Message.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RunState {
        const message = { ...baseRunState } as RunState;
        message.status =
            object.status !== undefined && object.status !== null
                ? runState_RunStatusFromJSON(object.status)
                : 0;
        message.error =
            object.error !== undefined && object.error !== null
                ? Error.fromJSON(object.error)
                : undefined;
        message.completedMessage =
            object.completedMessage !== undefined && object.completedMessage !== null
                ? Message.fromJSON(object.completedMessage)
                : undefined;
        return message;
    },

    toJSON(message: RunState): unknown {
        const obj: any = {};
        message.status !== undefined && (obj.status = runState_RunStatusToJSON(message.status));
        message.error !== undefined &&
            (obj.error = message.error ? Error.toJSON(message.error) : undefined);
        message.completedMessage !== undefined &&
            (obj.completedMessage = message.completedMessage
                ? Message.toJSON(message.completedMessage)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RunState>, I>>(object: I): RunState {
        const message = { ...baseRunState } as RunState;
        message.status = object.status ?? 0;
        message.error =
            object.error !== undefined && object.error !== null
                ? Error.fromPartial(object.error)
                : undefined;
        message.completedMessage =
            object.completedMessage !== undefined && object.completedMessage !== null
                ? Message.fromPartial(object.completedMessage)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(RunState.$type, RunState);

const baseContentUsage: object = {
    $type: 'yandex.cloud.ai.assistants.v1.runs.ContentUsage',
    promptTokens: 0,
    completionTokens: 0,
    totalTokens: 0,
};

export const ContentUsage = {
    $type: 'yandex.cloud.ai.assistants.v1.runs.ContentUsage' as const,

    encode(message: ContentUsage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.promptTokens !== 0) {
            writer.uint32(8).int64(message.promptTokens);
        }
        if (message.completionTokens !== 0) {
            writer.uint32(16).int64(message.completionTokens);
        }
        if (message.totalTokens !== 0) {
            writer.uint32(24).int64(message.totalTokens);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ContentUsage {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseContentUsage } as ContentUsage;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.promptTokens = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.completionTokens = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.totalTokens = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ContentUsage {
        const message = { ...baseContentUsage } as ContentUsage;
        message.promptTokens =
            object.promptTokens !== undefined && object.promptTokens !== null
                ? Number(object.promptTokens)
                : 0;
        message.completionTokens =
            object.completionTokens !== undefined && object.completionTokens !== null
                ? Number(object.completionTokens)
                : 0;
        message.totalTokens =
            object.totalTokens !== undefined && object.totalTokens !== null
                ? Number(object.totalTokens)
                : 0;
        return message;
    },

    toJSON(message: ContentUsage): unknown {
        const obj: any = {};
        message.promptTokens !== undefined && (obj.promptTokens = Math.round(message.promptTokens));
        message.completionTokens !== undefined &&
            (obj.completionTokens = Math.round(message.completionTokens));
        message.totalTokens !== undefined && (obj.totalTokens = Math.round(message.totalTokens));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ContentUsage>, I>>(object: I): ContentUsage {
        const message = { ...baseContentUsage } as ContentUsage;
        message.promptTokens = object.promptTokens ?? 0;
        message.completionTokens = object.completionTokens ?? 0;
        message.totalTokens = object.totalTokens ?? 0;
        return message;
    },
};

messageTypeRegistry.set(ContentUsage.$type, ContentUsage);

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
