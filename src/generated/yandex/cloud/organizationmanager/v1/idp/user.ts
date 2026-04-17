/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.organizationmanager.v1.idp';

/**
 * A user in the Identity Provider system.
 *
 * Users are created within a userpool and can authenticate to access cloud resources.
 * Each user has a unique identifier, credentials, and profile information.
 */
export interface User {
    /**
     * Unique identifier of the user.
     * This ID is generated automatically when the user is created.
     */
    id: string;
    /**
     * ID of the userpool this user belongs to.
     * To get the userpool ID, make a [UserpoolService.List] request.
     */
    userpoolId: string;
    /**
     * Current status of the user.
     * Determines whether the user can authenticate and access the system.
     */
    status: User_Status;
    /**
     * Username used for authentication.
     * Usually in the format of an email address.
     */
    username: string;
    /**
     * User's full name (display name).
     * This is typically shown in the UI and used for identification purposes.
     */
    fullName: string;
    /**
     * User's first name.
     * Part of the user's profile information.
     */
    givenName: string;
    /**
     * User's last name.
     * Part of the user's profile information.
     */
    familyName: string;
    /** User's email address. */
    email: string;
    /** User's phone number. */
    phoneNumber: string;
    /** Timestamp when the user was created. */
    createdAt?: Date;
    /** Timestamp when the user was last updated. */
    updatedAt?: Date;
    /**
     * External identifier for federation with external identity systems.
     * This ID can be used to link this user with an account in an external system.
     */
    externalId: string;
    /** User's company name. */
    companyName: string;
    /** User's department. */
    department: string;
    /** User's job title. */
    jobTitle: string;
    /** User's employee ID */
    employeeId: string;
}

/** Represents the current status of a user in the Identity Provider system. */
export enum User_Status {
    /** STATUS_UNSPECIFIED - The status is not specified. */
    STATUS_UNSPECIFIED = 0,
    /** CREATING - The user is in the process of being created. */
    CREATING = 4,
    /**
     * ACTIVE - The user is active and can authenticate.
     * Active users have full access to the system according to their permissions.
     */
    ACTIVE = 1,
    /**
     * SUSPENDED - The user is suspended and cannot authenticate.
     * Suspended users retain their data but cannot access the system.
     */
    SUSPENDED = 2,
    /**
     * DELETING - The user is in the process of being deleted.
     * This is a transitional state before the user is completely removed from the system.
     */
    DELETING = 3,
    UNRECOGNIZED = -1,
}

export function user_StatusFromJSON(object: any): User_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return User_Status.STATUS_UNSPECIFIED;
        case 4:
        case 'CREATING':
            return User_Status.CREATING;
        case 1:
        case 'ACTIVE':
            return User_Status.ACTIVE;
        case 2:
        case 'SUSPENDED':
            return User_Status.SUSPENDED;
        case 3:
        case 'DELETING':
            return User_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return User_Status.UNRECOGNIZED;
    }
}

export function user_StatusToJSON(object: User_Status): string {
    switch (object) {
        case User_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case User_Status.CREATING:
            return 'CREATING';
        case User_Status.ACTIVE:
            return 'ACTIVE';
        case User_Status.SUSPENDED:
            return 'SUSPENDED';
        case User_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}

const baseUser: object = {
    id: '',
    userpoolId: '',
    status: 0,
    username: '',
    fullName: '',
    givenName: '',
    familyName: '',
    email: '',
    phoneNumber: '',
    externalId: '',
    companyName: '',
    department: '',
    jobTitle: '',
    employeeId: '',
};

export const User: {
    encode(message: User, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): User;
    fromJSON(object: any): User;
    toJSON(message: User): unknown;
    fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User;
} = {
    encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.userpoolId !== '') {
            writer.uint32(18).string(message.userpoolId);
        }
        if (message.status !== 0) {
            writer.uint32(24).int32(message.status);
        }
        if (message.username !== '') {
            writer.uint32(34).string(message.username);
        }
        if (message.fullName !== '') {
            writer.uint32(50).string(message.fullName);
        }
        if (message.givenName !== '') {
            writer.uint32(58).string(message.givenName);
        }
        if (message.familyName !== '') {
            writer.uint32(66).string(message.familyName);
        }
        if (message.email !== '') {
            writer.uint32(74).string(message.email);
        }
        if (message.phoneNumber !== '') {
            writer.uint32(82).string(message.phoneNumber);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(90).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(98).fork()).ldelim();
        }
        if (message.externalId !== '') {
            writer.uint32(106).string(message.externalId);
        }
        if (message.companyName !== '') {
            writer.uint32(114).string(message.companyName);
        }
        if (message.department !== '') {
            writer.uint32(122).string(message.department);
        }
        if (message.jobTitle !== '') {
            writer.uint32(130).string(message.jobTitle);
        }
        if (message.employeeId !== '') {
            writer.uint32(138).string(message.employeeId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): User {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUser } as User;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.userpoolId = reader.string();
                    break;
                case 3:
                    message.status = reader.int32() as any;
                    break;
                case 4:
                    message.username = reader.string();
                    break;
                case 6:
                    message.fullName = reader.string();
                    break;
                case 7:
                    message.givenName = reader.string();
                    break;
                case 8:
                    message.familyName = reader.string();
                    break;
                case 9:
                    message.email = reader.string();
                    break;
                case 10:
                    message.phoneNumber = reader.string();
                    break;
                case 11:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.externalId = reader.string();
                    break;
                case 14:
                    message.companyName = reader.string();
                    break;
                case 15:
                    message.department = reader.string();
                    break;
                case 16:
                    message.jobTitle = reader.string();
                    break;
                case 17:
                    message.employeeId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): User {
        const message = { ...baseUser } as User;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.userpoolId =
            object.userpoolId !== undefined && object.userpoolId !== null
                ? String(object.userpoolId)
                : '';
        message.status =
            object.status !== undefined && object.status !== null
                ? user_StatusFromJSON(object.status)
                : 0;
        message.username =
            object.username !== undefined && object.username !== null
                ? String(object.username)
                : '';
        message.fullName =
            object.fullName !== undefined && object.fullName !== null
                ? String(object.fullName)
                : '';
        message.givenName =
            object.givenName !== undefined && object.givenName !== null
                ? String(object.givenName)
                : '';
        message.familyName =
            object.familyName !== undefined && object.familyName !== null
                ? String(object.familyName)
                : '';
        message.email =
            object.email !== undefined && object.email !== null ? String(object.email) : '';
        message.phoneNumber =
            object.phoneNumber !== undefined && object.phoneNumber !== null
                ? String(object.phoneNumber)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.updatedAt =
            object.updatedAt !== undefined && object.updatedAt !== null
                ? fromJsonTimestamp(object.updatedAt)
                : undefined;
        message.externalId =
            object.externalId !== undefined && object.externalId !== null
                ? String(object.externalId)
                : '';
        message.companyName =
            object.companyName !== undefined && object.companyName !== null
                ? String(object.companyName)
                : '';
        message.department =
            object.department !== undefined && object.department !== null
                ? String(object.department)
                : '';
        message.jobTitle =
            object.jobTitle !== undefined && object.jobTitle !== null
                ? String(object.jobTitle)
                : '';
        message.employeeId =
            object.employeeId !== undefined && object.employeeId !== null
                ? String(object.employeeId)
                : '';
        return message;
    },

    toJSON(message: User): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.userpoolId !== undefined && (obj.userpoolId = message.userpoolId);
        message.status !== undefined && (obj.status = user_StatusToJSON(message.status));
        message.username !== undefined && (obj.username = message.username);
        message.fullName !== undefined && (obj.fullName = message.fullName);
        message.givenName !== undefined && (obj.givenName = message.givenName);
        message.familyName !== undefined && (obj.familyName = message.familyName);
        message.email !== undefined && (obj.email = message.email);
        message.phoneNumber !== undefined && (obj.phoneNumber = message.phoneNumber);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        message.externalId !== undefined && (obj.externalId = message.externalId);
        message.companyName !== undefined && (obj.companyName = message.companyName);
        message.department !== undefined && (obj.department = message.department);
        message.jobTitle !== undefined && (obj.jobTitle = message.jobTitle);
        message.employeeId !== undefined && (obj.employeeId = message.employeeId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
        const message = { ...baseUser } as User;
        message.id = object.id ?? '';
        message.userpoolId = object.userpoolId ?? '';
        message.status = object.status ?? 0;
        message.username = object.username ?? '';
        message.fullName = object.fullName ?? '';
        message.givenName = object.givenName ?? '';
        message.familyName = object.familyName ?? '';
        message.email = object.email ?? '';
        message.phoneNumber = object.phoneNumber ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        message.externalId = object.externalId ?? '';
        message.companyName = object.companyName ?? '';
        message.department = object.department ?? '';
        message.jobTitle = object.jobTitle ?? '';
        message.employeeId = object.employeeId ?? '';
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
