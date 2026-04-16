/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.organizationmanager.v1.idp.application.saml';

/** A signature certificate for SAML applications. */
export interface SignatureCertificate {
    /** Unique identifier of the signature certificate. */
    id: string;
    /** ID of the SAML application that the signature certificate belongs to. */
    applicationId: string;
    /** Current status of the signature certificate. */
    status: SignatureCertificate_Status;
    /** Name of the signature certificate. */
    name: string;
    /** Description of the signature certificate. */
    description: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Certificate data in PEM format. */
    data: string;
    /** SHA256-fingerprint of the signature certificate. */
    fingerprint: string;
    /** Time after which the signature certificate is not valid. */
    notAfter?: Date;
    /** Time before which the signature certificate is not valid. */
    notBefore?: Date;
}

/** Represents the current status of a signature certificate. */
export enum SignatureCertificate_Status {
    /** STATUS_UNSPECIFIED - The status is not specified. */
    STATUS_UNSPECIFIED = 0,
    /** ACTIVE - The certificate is active and can be used for signing. */
    ACTIVE = 1,
    /** INACTIVE - The certificate is inactive and cannot be used for signing. */
    INACTIVE = 2,
    UNRECOGNIZED = -1,
}

export function signatureCertificate_StatusFromJSON(object: any): SignatureCertificate_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return SignatureCertificate_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'ACTIVE':
            return SignatureCertificate_Status.ACTIVE;
        case 2:
        case 'INACTIVE':
            return SignatureCertificate_Status.INACTIVE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SignatureCertificate_Status.UNRECOGNIZED;
    }
}

export function signatureCertificate_StatusToJSON(object: SignatureCertificate_Status): string {
    switch (object) {
        case SignatureCertificate_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case SignatureCertificate_Status.ACTIVE:
            return 'ACTIVE';
        case SignatureCertificate_Status.INACTIVE:
            return 'INACTIVE';
        default:
            return 'UNKNOWN';
    }
}

const baseSignatureCertificate: object = {
    id: '',
    applicationId: '',
    status: 0,
    name: '',
    description: '',
    data: '',
    fingerprint: '',
};

export const SignatureCertificate: {
    encode(message: SignatureCertificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignatureCertificate;
    fromJSON(object: any): SignatureCertificate;
    toJSON(message: SignatureCertificate): unknown;
    fromPartial<I extends Exact<DeepPartial<SignatureCertificate>, I>>(object: I): SignatureCertificate;
} = {
    encode(message: SignatureCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.applicationId !== '') {
            writer.uint32(18).string(message.applicationId);
        }
        if (message.status !== 0) {
            writer.uint32(24).int32(message.status);
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
        }
        if (message.data !== '') {
            writer.uint32(58).string(message.data);
        }
        if (message.fingerprint !== '') {
            writer.uint32(66).string(message.fingerprint);
        }
        if (message.notAfter !== undefined) {
            Timestamp.encode(toTimestamp(message.notAfter), writer.uint32(74).fork()).ldelim();
        }
        if (message.notBefore !== undefined) {
            Timestamp.encode(toTimestamp(message.notBefore), writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SignatureCertificate {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSignatureCertificate } as SignatureCertificate;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.applicationId = reader.string();
                    break;
                case 3:
                    message.status = reader.int32() as any;
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.data = reader.string();
                    break;
                case 8:
                    message.fingerprint = reader.string();
                    break;
                case 9:
                    message.notAfter = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.notBefore = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SignatureCertificate {
        const message = { ...baseSignatureCertificate } as SignatureCertificate;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.applicationId =
            object.applicationId !== undefined && object.applicationId !== null
                ? String(object.applicationId)
                : '';
        message.status =
            object.status !== undefined && object.status !== null
                ? signatureCertificate_StatusFromJSON(object.status)
                : 0;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.data = object.data !== undefined && object.data !== null ? String(object.data) : '';
        message.fingerprint =
            object.fingerprint !== undefined && object.fingerprint !== null
                ? String(object.fingerprint)
                : '';
        message.notAfter =
            object.notAfter !== undefined && object.notAfter !== null
                ? fromJsonTimestamp(object.notAfter)
                : undefined;
        message.notBefore =
            object.notBefore !== undefined && object.notBefore !== null
                ? fromJsonTimestamp(object.notBefore)
                : undefined;
        return message;
    },

    toJSON(message: SignatureCertificate): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.applicationId !== undefined && (obj.applicationId = message.applicationId);
        message.status !== undefined &&
            (obj.status = signatureCertificate_StatusToJSON(message.status));
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.data !== undefined && (obj.data = message.data);
        message.fingerprint !== undefined && (obj.fingerprint = message.fingerprint);
        message.notAfter !== undefined && (obj.notAfter = message.notAfter.toISOString());
        message.notBefore !== undefined && (obj.notBefore = message.notBefore.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SignatureCertificate>, I>>(
        object: I,
    ): SignatureCertificate {
        const message = { ...baseSignatureCertificate } as SignatureCertificate;
        message.id = object.id ?? '';
        message.applicationId = object.applicationId ?? '';
        message.status = object.status ?? 0;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.data = object.data ?? '';
        message.fingerprint = object.fingerprint ?? '';
        message.notAfter = object.notAfter ?? undefined;
        message.notBefore = object.notBefore ?? undefined;
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
