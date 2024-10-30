/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.iam.v1';

/** An ApiKey resource. For more information, see [Api-Key](/docs/iam/concepts/authorization/api-key). */
export interface ApiKey {
    $type: 'yandex.cloud.iam.v1.ApiKey';
    /** ID of the API Key. */
    id: string;
    /** ID of the service account that the API key belongs to. */
    serviceAccountId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Description of the API key. 0-256 characters long. */
    description: string;
    /** Timestamp for the last authentication using this API key. */
    lastUsedAt?: Date;
    /** Scope of the API key. 0-256 characters long. */
    scope: string;
    /** API key expiration timestamp. */
    expiresAt?: Date;
}

const baseApiKey: object = {
    $type: 'yandex.cloud.iam.v1.ApiKey',
    id: '',
    serviceAccountId: '',
    description: '',
    scope: '',
};

export const ApiKey = {
    $type: 'yandex.cloud.iam.v1.ApiKey' as const,

    encode(message: ApiKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
        if (message.lastUsedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.lastUsedAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.scope !== '') {
            writer.uint32(50).string(message.scope);
        }
        if (message.expiresAt !== undefined) {
            Timestamp.encode(toTimestamp(message.expiresAt), writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ApiKey {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseApiKey } as ApiKey;
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
                    message.lastUsedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.scope = reader.string();
                    break;
                case 7:
                    message.expiresAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ApiKey {
        const message = { ...baseApiKey } as ApiKey;
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
        message.lastUsedAt =
            object.lastUsedAt !== undefined && object.lastUsedAt !== null
                ? fromJsonTimestamp(object.lastUsedAt)
                : undefined;
        message.scope =
            object.scope !== undefined && object.scope !== null ? String(object.scope) : '';
        message.expiresAt =
            object.expiresAt !== undefined && object.expiresAt !== null
                ? fromJsonTimestamp(object.expiresAt)
                : undefined;
        return message;
    },

    toJSON(message: ApiKey): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.description !== undefined && (obj.description = message.description);
        message.lastUsedAt !== undefined && (obj.lastUsedAt = message.lastUsedAt.toISOString());
        message.scope !== undefined && (obj.scope = message.scope);
        message.expiresAt !== undefined && (obj.expiresAt = message.expiresAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ApiKey>, I>>(object: I): ApiKey {
        const message = { ...baseApiKey } as ApiKey;
        message.id = object.id ?? '';
        message.serviceAccountId = object.serviceAccountId ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.description = object.description ?? '';
        message.lastUsedAt = object.lastUsedAt ?? undefined;
        message.scope = object.scope ?? '';
        message.expiresAt = object.expiresAt ?? undefined;
        return message;
    },
};

messageTypeRegistry.set(ApiKey.$type, ApiKey);

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
