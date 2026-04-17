/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.iam.v1';

/** An OauthClientSecretResource */
export interface OAuthClientSecret {
    /** ID of the oauth client secret. */
    id: string;
    /** ID of the oauth client that the secret belongs to. */
    oauthClientId: string;
    /** Description of the oauth client secret. */
    description: string;
    /** Masked value of the oauth client secret: `yccs__[a-f0-9]{10}\*{4}` */
    maskedSecret: string;
    /** Creation timestamp. */
    createdAt?: Date;
}

const baseOAuthClientSecret: object = {
    id: '',
    oauthClientId: '',
    description: '',
    maskedSecret: '',
};

export const OAuthClientSecret: {
    encode(message: OAuthClientSecret, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OAuthClientSecret;
    fromJSON(object: any): OAuthClientSecret;
    toJSON(message: OAuthClientSecret): unknown;
    fromPartial<I extends Exact<DeepPartial<OAuthClientSecret>, I>>(object: I): OAuthClientSecret;
} = {
    encode(message: OAuthClientSecret, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.oauthClientId !== '') {
            writer.uint32(18).string(message.oauthClientId);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.maskedSecret !== '') {
            writer.uint32(34).string(message.maskedSecret);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OAuthClientSecret {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOAuthClientSecret } as OAuthClientSecret;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.oauthClientId = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.maskedSecret = reader.string();
                    break;
                case 5:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OAuthClientSecret {
        const message = { ...baseOAuthClientSecret } as OAuthClientSecret;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.oauthClientId =
            object.oauthClientId !== undefined && object.oauthClientId !== null
                ? String(object.oauthClientId)
                : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.maskedSecret =
            object.maskedSecret !== undefined && object.maskedSecret !== null
                ? String(object.maskedSecret)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        return message;
    },

    toJSON(message: OAuthClientSecret): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.oauthClientId !== undefined && (obj.oauthClientId = message.oauthClientId);
        message.description !== undefined && (obj.description = message.description);
        message.maskedSecret !== undefined && (obj.maskedSecret = message.maskedSecret);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OAuthClientSecret>, I>>(object: I): OAuthClientSecret {
        const message = { ...baseOAuthClientSecret } as OAuthClientSecret;
        message.id = object.id ?? '';
        message.oauthClientId = object.oauthClientId ?? '';
        message.description = object.description ?? '';
        message.maskedSecret = object.maskedSecret ?? '';
        message.createdAt = object.createdAt ?? undefined;
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
