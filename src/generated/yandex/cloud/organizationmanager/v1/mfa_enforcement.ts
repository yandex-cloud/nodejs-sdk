/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Duration } from '../../../../google/protobuf/duration';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.organizationmanager.v1';

export enum MfaEnforcementStatus {
    MFA_ENFORCEMENT_STATUS_UNSPECIFIED = 0,
    MFA_ENFORCEMENT_STATUS_ACTIVE = 1,
    MFA_ENFORCEMENT_STATUS_INACTIVE = 2,
    MFA_ENFORCEMENT_STATUS_DELETING = 3,
    UNRECOGNIZED = -1,
}

export function mfaEnforcementStatusFromJSON(object: any): MfaEnforcementStatus {
    switch (object) {
        case 0:
        case 'MFA_ENFORCEMENT_STATUS_UNSPECIFIED':
            return MfaEnforcementStatus.MFA_ENFORCEMENT_STATUS_UNSPECIFIED;
        case 1:
        case 'MFA_ENFORCEMENT_STATUS_ACTIVE':
            return MfaEnforcementStatus.MFA_ENFORCEMENT_STATUS_ACTIVE;
        case 2:
        case 'MFA_ENFORCEMENT_STATUS_INACTIVE':
            return MfaEnforcementStatus.MFA_ENFORCEMENT_STATUS_INACTIVE;
        case 3:
        case 'MFA_ENFORCEMENT_STATUS_DELETING':
            return MfaEnforcementStatus.MFA_ENFORCEMENT_STATUS_DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return MfaEnforcementStatus.UNRECOGNIZED;
    }
}

export function mfaEnforcementStatusToJSON(object: MfaEnforcementStatus): string {
    switch (object) {
        case MfaEnforcementStatus.MFA_ENFORCEMENT_STATUS_UNSPECIFIED:
            return 'MFA_ENFORCEMENT_STATUS_UNSPECIFIED';
        case MfaEnforcementStatus.MFA_ENFORCEMENT_STATUS_ACTIVE:
            return 'MFA_ENFORCEMENT_STATUS_ACTIVE';
        case MfaEnforcementStatus.MFA_ENFORCEMENT_STATUS_INACTIVE:
            return 'MFA_ENFORCEMENT_STATUS_INACTIVE';
        case MfaEnforcementStatus.MFA_ENFORCEMENT_STATUS_DELETING:
            return 'MFA_ENFORCEMENT_STATUS_DELETING';
        default:
            return 'UNKNOWN';
    }
}

/** MFA enforcement resource */
export interface MfaEnforcement {
    /** id of the MFA enforcement */
    id: string;
    /** organization id of the MFA enforcement */
    organizationId: string;
    /** acr id of the MFA enforcement */
    acrId: string;
    /**
     * the period during which the entered MFA factor is considered valid and the
     * corresponding acr is regarded as satisfied
     */
    ttl?: Duration;
    /** MFA enforcement status */
    status: MfaEnforcementStatus;
    /** the MFA enforcement application start time. */
    applyAt?: Date;
    /**
     * the time window during which the user is allowed to create an MFA profile.
     * this window is measured relative to the MFA enforcement application start time
     * and the user's most recent successful authentication that falls under the rule
     * (or the user's creation time, if there has been no authentication).
     */
    enrollWindow?: Duration;
    /** name of the MFA enforcement */
    name: string;
    /** description of the MFA enforcement */
    description: string;
    /** creation timestamp */
    createdAt?: Date;
}

const baseMfaEnforcement: object = {
    id: '',
    organizationId: '',
    acrId: '',
    status: 0,
    name: '',
    description: '',
};

export const MfaEnforcement: {
    encode(message: MfaEnforcement, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MfaEnforcement;
    fromJSON(object: any): MfaEnforcement;
    toJSON(message: MfaEnforcement): unknown;
    fromPartial<I extends Exact<DeepPartial<MfaEnforcement>, I>>(object: I): MfaEnforcement;
} = {
    encode(message: MfaEnforcement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.organizationId !== '') {
            writer.uint32(18).string(message.organizationId);
        }
        if (message.acrId !== '') {
            writer.uint32(26).string(message.acrId);
        }
        if (message.ttl !== undefined) {
            Duration.encode(message.ttl, writer.uint32(34).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.applyAt !== undefined) {
            Timestamp.encode(toTimestamp(message.applyAt), writer.uint32(50).fork()).ldelim();
        }
        if (message.enrollWindow !== undefined) {
            Duration.encode(message.enrollWindow, writer.uint32(58).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(66).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(74).string(message.description);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MfaEnforcement {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMfaEnforcement } as MfaEnforcement;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.organizationId = reader.string();
                    break;
                case 3:
                    message.acrId = reader.string();
                    break;
                case 4:
                    message.ttl = Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.status = reader.int32() as any;
                    break;
                case 6:
                    message.applyAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.enrollWindow = Duration.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.name = reader.string();
                    break;
                case 9:
                    message.description = reader.string();
                    break;
                case 10:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MfaEnforcement {
        const message = { ...baseMfaEnforcement } as MfaEnforcement;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.acrId =
            object.acrId !== undefined && object.acrId !== null ? String(object.acrId) : '';
        message.ttl =
            object.ttl !== undefined && object.ttl !== null
                ? Duration.fromJSON(object.ttl)
                : undefined;
        message.status =
            object.status !== undefined && object.status !== null
                ? mfaEnforcementStatusFromJSON(object.status)
                : 0;
        message.applyAt =
            object.applyAt !== undefined && object.applyAt !== null
                ? fromJsonTimestamp(object.applyAt)
                : undefined;
        message.enrollWindow =
            object.enrollWindow !== undefined && object.enrollWindow !== null
                ? Duration.fromJSON(object.enrollWindow)
                : undefined;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        return message;
    },

    toJSON(message: MfaEnforcement): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.acrId !== undefined && (obj.acrId = message.acrId);
        message.ttl !== undefined &&
            (obj.ttl = message.ttl ? Duration.toJSON(message.ttl) : undefined);
        message.status !== undefined && (obj.status = mfaEnforcementStatusToJSON(message.status));
        message.applyAt !== undefined && (obj.applyAt = message.applyAt.toISOString());
        message.enrollWindow !== undefined &&
            (obj.enrollWindow = message.enrollWindow
                ? Duration.toJSON(message.enrollWindow)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MfaEnforcement>, I>>(object: I): MfaEnforcement {
        const message = { ...baseMfaEnforcement } as MfaEnforcement;
        message.id = object.id ?? '';
        message.organizationId = object.organizationId ?? '';
        message.acrId = object.acrId ?? '';
        message.ttl =
            object.ttl !== undefined && object.ttl !== null
                ? Duration.fromPartial(object.ttl)
                : undefined;
        message.status = object.status ?? 0;
        message.applyAt = object.applyAt ?? undefined;
        message.enrollWindow =
            object.enrollWindow !== undefined && object.enrollWindow !== null
                ? Duration.fromPartial(object.enrollWindow)
                : undefined;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
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
