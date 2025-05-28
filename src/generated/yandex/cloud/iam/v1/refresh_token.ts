/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.iam.v1';

export interface RefreshToken {
    /** Refresh Token id. */
    id: string;
    /** Information about the app for which the Refresh Token was issued. */
    clientInstanceInfo: string;
    /** The OAuth client identifier for which the Refresh Token was issued. */
    clientId: string;
    /** The subject identifier for whom the Refresh Token was issued. */
    subjectId: string;
    /** Refresh token creation time. */
    createdAt?: Date;
    /** Refresh token expiration time. */
    expiresAt?: Date;
    /** Timestamp for the last authentication using this Refresh Token. */
    lastUsedAt?: Date;
    /**
     * Protection level of the refresh token.
     *
     * It shows whether DPOP was used to protect the Refresh Token and and the level of security of the storage used for the DPOP key.
     */
    protectionLevel: RefreshToken_ProtectionLevel;
}

/** Protection level of the refresh token. */
export enum RefreshToken_ProtectionLevel {
    PROTECTION_LEVEL_UNSPECIFIED = 0,
    /** NO_PROTECTION - Refresh token without DPOP */
    NO_PROTECTION = 1,
    /** INSECURE_KEY_DPOP - Refresh token with dpop. The dpop key is not a YubiKey PIV key with required pin/touch policy and attestation. */
    INSECURE_KEY_DPOP = 2,
    /** SECURE_KEY_DPOP - Refresh token with dpop. The dpop key is a YubiKey PIV key with required pin/touch policy and attestation. */
    SECURE_KEY_DPOP = 3,
    UNRECOGNIZED = -1,
}

export function refreshToken_ProtectionLevelFromJSON(object: any): RefreshToken_ProtectionLevel {
    switch (object) {
        case 0:
        case 'PROTECTION_LEVEL_UNSPECIFIED':
            return RefreshToken_ProtectionLevel.PROTECTION_LEVEL_UNSPECIFIED;
        case 1:
        case 'NO_PROTECTION':
            return RefreshToken_ProtectionLevel.NO_PROTECTION;
        case 2:
        case 'INSECURE_KEY_DPOP':
            return RefreshToken_ProtectionLevel.INSECURE_KEY_DPOP;
        case 3:
        case 'SECURE_KEY_DPOP':
            return RefreshToken_ProtectionLevel.SECURE_KEY_DPOP;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return RefreshToken_ProtectionLevel.UNRECOGNIZED;
    }
}

export function refreshToken_ProtectionLevelToJSON(object: RefreshToken_ProtectionLevel): string {
    switch (object) {
        case RefreshToken_ProtectionLevel.PROTECTION_LEVEL_UNSPECIFIED:
            return 'PROTECTION_LEVEL_UNSPECIFIED';
        case RefreshToken_ProtectionLevel.NO_PROTECTION:
            return 'NO_PROTECTION';
        case RefreshToken_ProtectionLevel.INSECURE_KEY_DPOP:
            return 'INSECURE_KEY_DPOP';
        case RefreshToken_ProtectionLevel.SECURE_KEY_DPOP:
            return 'SECURE_KEY_DPOP';
        default:
            return 'UNKNOWN';
    }
}

const baseRefreshToken: object = {
    id: '',
    clientInstanceInfo: '',
    clientId: '',
    subjectId: '',
    protectionLevel: 0,
};

export const RefreshToken = {
    encode(message: RefreshToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.clientInstanceInfo !== '') {
            writer.uint32(18).string(message.clientInstanceInfo);
        }
        if (message.clientId !== '') {
            writer.uint32(26).string(message.clientId);
        }
        if (message.subjectId !== '') {
            writer.uint32(34).string(message.subjectId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.expiresAt !== undefined) {
            Timestamp.encode(toTimestamp(message.expiresAt), writer.uint32(50).fork()).ldelim();
        }
        if (message.lastUsedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.lastUsedAt), writer.uint32(58).fork()).ldelim();
        }
        if (message.protectionLevel !== 0) {
            writer.uint32(64).int32(message.protectionLevel);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RefreshToken {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRefreshToken } as RefreshToken;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.clientInstanceInfo = reader.string();
                    break;
                case 3:
                    message.clientId = reader.string();
                    break;
                case 4:
                    message.subjectId = reader.string();
                    break;
                case 5:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.expiresAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.lastUsedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.protectionLevel = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RefreshToken {
        const message = { ...baseRefreshToken } as RefreshToken;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.clientInstanceInfo =
            object.clientInstanceInfo !== undefined && object.clientInstanceInfo !== null
                ? String(object.clientInstanceInfo)
                : '';
        message.clientId =
            object.clientId !== undefined && object.clientId !== null
                ? String(object.clientId)
                : '';
        message.subjectId =
            object.subjectId !== undefined && object.subjectId !== null
                ? String(object.subjectId)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.expiresAt =
            object.expiresAt !== undefined && object.expiresAt !== null
                ? fromJsonTimestamp(object.expiresAt)
                : undefined;
        message.lastUsedAt =
            object.lastUsedAt !== undefined && object.lastUsedAt !== null
                ? fromJsonTimestamp(object.lastUsedAt)
                : undefined;
        message.protectionLevel =
            object.protectionLevel !== undefined && object.protectionLevel !== null
                ? refreshToken_ProtectionLevelFromJSON(object.protectionLevel)
                : 0;
        return message;
    },

    toJSON(message: RefreshToken): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.clientInstanceInfo !== undefined &&
            (obj.clientInstanceInfo = message.clientInstanceInfo);
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.subjectId !== undefined && (obj.subjectId = message.subjectId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.expiresAt !== undefined && (obj.expiresAt = message.expiresAt.toISOString());
        message.lastUsedAt !== undefined && (obj.lastUsedAt = message.lastUsedAt.toISOString());
        message.protectionLevel !== undefined &&
            (obj.protectionLevel = refreshToken_ProtectionLevelToJSON(message.protectionLevel));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RefreshToken>, I>>(object: I): RefreshToken {
        const message = { ...baseRefreshToken } as RefreshToken;
        message.id = object.id ?? '';
        message.clientInstanceInfo = object.clientInstanceInfo ?? '';
        message.clientId = object.clientId ?? '';
        message.subjectId = object.subjectId ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.expiresAt = object.expiresAt ?? undefined;
        message.lastUsedAt = object.lastUsedAt ?? undefined;
        message.protectionLevel = object.protectionLevel ?? 0;
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
