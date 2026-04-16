/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.iam.v1.awscompatibility';

/**
 * An access key.
 * For more information, see [AWS-compatible access keys](/docs/iam/concepts/authorization/access-key).
 */
export interface AccessKey {
    /**
     * ID of the AccessKey resource.
     * It is used to manage secret credentials: an access key ID and a secret access key.
     */
    id: string;
    /** ID of the service account that the access key belongs to. */
    serviceAccountId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Description of the access key. 0-256 characters long. */
    description: string;
    /**
     * ID of the access key.
     * The key is AWS compatible.
     */
    keyId: string;
    /** Timestamp for the last authentication using this Access key. */
    lastUsedAt?: Date;
}

const baseAccessKey: object = { id: '', serviceAccountId: '', description: '', keyId: '' };

export const AccessKey = {
    encode(message: AccessKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(18).string(message.serviceAccountId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.keyId !== '') {
            writer.uint32(42).string(message.keyId);
        }
        if (message.lastUsedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.lastUsedAt), writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AccessKey {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAccessKey } as AccessKey;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.serviceAccountId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.keyId = reader.string();
                    break;
                case 7:
                    message.lastUsedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AccessKey {
        const message = { ...baseAccessKey } as AccessKey;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.keyId =
            object.keyId !== undefined && object.keyId !== null ? String(object.keyId) : '';
        message.lastUsedAt =
            object.lastUsedAt !== undefined && object.lastUsedAt !== null
                ? fromJsonTimestamp(object.lastUsedAt)
                : undefined;
        return message;
    },

    toJSON(message: AccessKey): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.description !== undefined && (obj.description = message.description);
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.lastUsedAt !== undefined && (obj.lastUsedAt = message.lastUsedAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AccessKey>, I>>(object: I): AccessKey {
        const message = { ...baseAccessKey } as AccessKey;
        message.id = object.id ?? '';
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.description = object.description ?? '';
        message.keyId = object.keyId ?? '';
        message.lastUsedAt = object.lastUsedAt ?? undefined;
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
