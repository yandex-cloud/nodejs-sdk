/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Any } from '../../../google/protobuf/any';
import { Timestamp } from '../../../google/protobuf/timestamp';
import { Status } from '../../../google/rpc/status';

export const protobufPackage = 'yandex.cloud.operation';

/** An Operation resource. For more information, see [Operation](/docs/api-design-guide/concepts/operation). */
export interface Operation {
    $type: 'yandex.cloud.operation.Operation';
    /** ID of the operation. */
    id: string;
    /** Description of the operation. 0-256 characters long. */
    description: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /** ID of the user or service account who initiated the operation. */
    createdBy: string;
    /** The time when the Operation resource was last modified. */
    modifiedAt?: Date;
    /**
     * If the value is `false`, it means the operation is still in progress.
     * If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done: boolean;
    /**
     * Service-specific metadata associated with the operation.
     * It typically contains the ID of the target resource that the operation is performed on.
     * Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: Any;
    /** The error result of the operation in case of failure or cancellation. */
    error?: Status | undefined;
    /**
     * The normal response of the operation in case of success.
     * If the original method returns no data on success, such as Delete,
     * the response is [google.protobuf.Empty].
     * If the original method is the standard Create/Update,
     * the response should be the target resource of the operation.
     * Any method that returns a long-running operation should document the response type, if any.
     */
    response?: Any | undefined;
}

const baseOperation: object = {
    $type: 'yandex.cloud.operation.Operation',
    id: '',
    description: '',
    createdBy: '',
    done: false,
};

export const Operation = {
    $type: 'yandex.cloud.operation.Operation' as const,

    encode(message: Operation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.createdBy !== '') {
            writer.uint32(34).string(message.createdBy);
        }
        if (message.modifiedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.modifiedAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.done === true) {
            writer.uint32(48).bool(message.done);
        }
        if (message.metadata !== undefined) {
            Any.encode(message.metadata, writer.uint32(58).fork()).ldelim();
        }
        if (message.error !== undefined) {
            Status.encode(message.error, writer.uint32(66).fork()).ldelim();
        }
        if (message.response !== undefined) {
            Any.encode(message.response, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Operation {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOperation } as Operation;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.createdBy = reader.string();
                    break;
                case 5:
                    message.modifiedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.done = reader.bool();
                    break;
                case 7:
                    message.metadata = Any.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.error = Status.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.response = Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Operation {
        const message = { ...baseOperation } as Operation;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.createdBy =
            object.createdBy !== undefined && object.createdBy !== null
                ? String(object.createdBy)
                : '';
        message.modifiedAt =
            object.modifiedAt !== undefined && object.modifiedAt !== null
                ? fromJsonTimestamp(object.modifiedAt)
                : undefined;
        message.done =
            object.done !== undefined && object.done !== null ? Boolean(object.done) : false;
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? Any.fromJSON(object.metadata)
                : undefined;
        message.error =
            object.error !== undefined && object.error !== null
                ? Status.fromJSON(object.error)
                : undefined;
        message.response =
            object.response !== undefined && object.response !== null
                ? Any.fromJSON(object.response)
                : undefined;
        return message;
    },

    toJSON(message: Operation): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.description !== undefined && (obj.description = message.description);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.createdBy !== undefined && (obj.createdBy = message.createdBy);
        message.modifiedAt !== undefined && (obj.modifiedAt = message.modifiedAt.toISOString());
        message.done !== undefined && (obj.done = message.done);
        message.metadata !== undefined &&
            (obj.metadata = message.metadata ? Any.toJSON(message.metadata) : undefined);
        message.error !== undefined &&
            (obj.error = message.error ? Status.toJSON(message.error) : undefined);
        message.response !== undefined &&
            (obj.response = message.response ? Any.toJSON(message.response) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Operation>, I>>(object: I): Operation {
        const message = { ...baseOperation } as Operation;
        message.id = object.id ?? '';
        message.description = object.description ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.createdBy = object.createdBy ?? '';
        message.modifiedAt = object.modifiedAt ?? undefined;
        message.done = object.done ?? false;
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? Any.fromPartial(object.metadata)
                : undefined;
        message.error =
            object.error !== undefined && object.error !== null
                ? Status.fromPartial(object.error)
                : undefined;
        message.response =
            object.response !== undefined && object.response !== null
                ? Any.fromPartial(object.response)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Operation.$type, Operation);

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
