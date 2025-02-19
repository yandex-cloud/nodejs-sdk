/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
    Status,
    statusFromJSON,
    statusToJSON,
} from '../../../../../../yandex/cloud/loadtesting/api/v1/test/status';
import { ImbalancePoint } from '../../../../../../yandex/cloud/loadtesting/api/v1/test/imbalance_point';
import { FilePointer } from '../../../../../../yandex/cloud/loadtesting/api/v1/test/file_pointer';
import { Timestamp } from '../../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.loadtesting.api.v1.test';

/** Process of test and some results */
export interface Summary {
    /** Status of the test. */
    status: Status;
    /** Creation timestamp. */
    createdAt?: Date;
    /** UA or SA that created the test. */
    createdBy: string;
    /**
     * Test start timestamp.
     *
     * Empty if the test has not been started yet.
     */
    startedAt?: Date;
    /**
     * Test finish timestamp.
     *
     * Empty if the test has not been finished yet.
     */
    finishedAt?: Date;
    /** Indicates whether the test is finished. */
    isFinished: boolean;
    /** Error message. */
    error: string;
    /**
     * Detected imbalance point.
     *
     * Contains information about a state at the moment it has been
     * [auto-stopped](/docs/load-testing/concepts/auto-stop).
     *
     * Empty if no auto-stop occured.
     */
    imbalancePoint?: ImbalancePoint;
    /** ID of the agent that executed the test. */
    assignedAgentId: string;
    /**
     * Test output artifacts.
     *
     * Link to the artifacts output target containing `.log` and other files collected
     * during test execution.
     */
    artifacts?: FilePointer;
}

const baseSummary: object = {
    status: 0,
    createdBy: '',
    isFinished: false,
    error: '',
    assignedAgentId: '',
};

export const Summary = {
    encode(message: Summary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
        }
        if (message.createdBy !== '') {
            writer.uint32(26).string(message.createdBy);
        }
        if (message.startedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.finishedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.finishedAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.isFinished === true) {
            writer.uint32(48).bool(message.isFinished);
        }
        if (message.error !== '') {
            writer.uint32(58).string(message.error);
        }
        if (message.imbalancePoint !== undefined) {
            ImbalancePoint.encode(message.imbalancePoint, writer.uint32(66).fork()).ldelim();
        }
        if (message.assignedAgentId !== '') {
            writer.uint32(74).string(message.assignedAgentId);
        }
        if (message.artifacts !== undefined) {
            FilePointer.encode(message.artifacts, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Summary {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSummary } as Summary;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32() as any;
                    break;
                case 2:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.createdBy = reader.string();
                    break;
                case 4:
                    message.startedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.finishedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.isFinished = reader.bool();
                    break;
                case 7:
                    message.error = reader.string();
                    break;
                case 8:
                    message.imbalancePoint = ImbalancePoint.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.assignedAgentId = reader.string();
                    break;
                case 10:
                    message.artifacts = FilePointer.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Summary {
        const message = { ...baseSummary } as Summary;
        message.status =
            object.status !== undefined && object.status !== null
                ? statusFromJSON(object.status)
                : 0;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.createdBy =
            object.createdBy !== undefined && object.createdBy !== null
                ? String(object.createdBy)
                : '';
        message.startedAt =
            object.startedAt !== undefined && object.startedAt !== null
                ? fromJsonTimestamp(object.startedAt)
                : undefined;
        message.finishedAt =
            object.finishedAt !== undefined && object.finishedAt !== null
                ? fromJsonTimestamp(object.finishedAt)
                : undefined;
        message.isFinished =
            object.isFinished !== undefined && object.isFinished !== null
                ? Boolean(object.isFinished)
                : false;
        message.error =
            object.error !== undefined && object.error !== null ? String(object.error) : '';
        message.imbalancePoint =
            object.imbalancePoint !== undefined && object.imbalancePoint !== null
                ? ImbalancePoint.fromJSON(object.imbalancePoint)
                : undefined;
        message.assignedAgentId =
            object.assignedAgentId !== undefined && object.assignedAgentId !== null
                ? String(object.assignedAgentId)
                : '';
        message.artifacts =
            object.artifacts !== undefined && object.artifacts !== null
                ? FilePointer.fromJSON(object.artifacts)
                : undefined;
        return message;
    },

    toJSON(message: Summary): unknown {
        const obj: any = {};
        message.status !== undefined && (obj.status = statusToJSON(message.status));
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.createdBy !== undefined && (obj.createdBy = message.createdBy);
        message.startedAt !== undefined && (obj.startedAt = message.startedAt.toISOString());
        message.finishedAt !== undefined && (obj.finishedAt = message.finishedAt.toISOString());
        message.isFinished !== undefined && (obj.isFinished = message.isFinished);
        message.error !== undefined && (obj.error = message.error);
        message.imbalancePoint !== undefined &&
            (obj.imbalancePoint = message.imbalancePoint
                ? ImbalancePoint.toJSON(message.imbalancePoint)
                : undefined);
        message.assignedAgentId !== undefined && (obj.assignedAgentId = message.assignedAgentId);
        message.artifacts !== undefined &&
            (obj.artifacts = message.artifacts ? FilePointer.toJSON(message.artifacts) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Summary>, I>>(object: I): Summary {
        const message = { ...baseSummary } as Summary;
        message.status = object.status ?? 0;
        message.createdAt = object.createdAt ?? undefined;
        message.createdBy = object.createdBy ?? '';
        message.startedAt = object.startedAt ?? undefined;
        message.finishedAt = object.finishedAt ?? undefined;
        message.isFinished = object.isFinished ?? false;
        message.error = object.error ?? '';
        message.imbalancePoint =
            object.imbalancePoint !== undefined && object.imbalancePoint !== null
                ? ImbalancePoint.fromPartial(object.imbalancePoint)
                : undefined;
        message.assignedAgentId = object.assignedAgentId ?? '';
        message.artifacts =
            object.artifacts !== undefined && object.artifacts !== null
                ? FilePointer.fromPartial(object.artifacts)
                : undefined;
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
