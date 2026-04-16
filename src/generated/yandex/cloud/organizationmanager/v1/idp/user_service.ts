/* eslint-disable */
import Long from 'long';
import {
    makeGenericClientConstructor,
    ChannelCredentials,
    ChannelOptions,
    UntypedServiceImplementation,
    handleUnaryCall,
    Client,
    ClientUnaryCall,
    Metadata,
    CallOptions,
    ServiceError,
} from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import { User } from './user';
import { Operation } from '../../../operation/operation';
import { Empty } from '../../../../../google/protobuf/empty';
import { BoolValue } from '../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.organizationmanager.v1.idp';

/** Request to get a user by ID. */
export interface GetUserRequest {
    /** ID of the user to return. */
    userId: string;
}

/** Request to list users in a userpool. */
export interface ListUsersRequest {
    /** ID of the userpool to list users in. */
    userpoolId: string;
    /** The maximum number of results per page to return. */
    pageSize: number;
    /** Page token for pagination. */
    pageToken: string;
    /** A filter expression that filters resources listed in the response. */
    filter: string;
}

/** Response message for [UserService.List]. */
export interface ListUsersResponse {
    /** List of users. */
    users: User[];
    /** Token for getting the next page of the list. */
    nextPageToken: string;
}

/** Request to create a new user. */
export interface CreateUserRequest {
    /** ID of the userpool to create the user in. */
    userpoolId: string;
    /** Username for the new user. */
    username: string;
    /** Full name of the user. */
    fullName: string;
    /** First name of the user. */
    givenName: string;
    /** Last name of the user. */
    familyName: string;
    /** Email address of the user. */
    email: string;
    /** Phone number of the user. */
    phoneNumber: string;
    /** Password specification. Credentials type. Exactly one of credentials type must be specified. */
    passwordSpec?: PasswordSpec | undefined;
    /** Password hash. Credentials type. Exactly one of credentials type must be specified. */
    passwordHash?: PasswordHash | undefined;
    /** Whether the user is active. Default is true. */
    isActive?: boolean;
    /** External identifier for the user. */
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

/** Metadata for the [UserService.Create] operation. */
export interface CreateUserMetadata {
    /** ID of the user that is being created. */
    userId: string;
}

/** Request to update an existing user. */
export interface UpdateUserRequest {
    /** ID of the user to update. */
    userId: string;
    /** Field mask that specifies which fields of the user are going to be updated. */
    updateMask?: FieldMask;
    /** New username for the user. */
    username: string;
    /** New full name for the user. */
    fullName: string;
    /** New first name for the user. */
    givenName: string;
    /** New last name for the user. */
    familyName: string;
    /** New email address for the user. */
    email: string;
    /** New phone number for the user. */
    phoneNumber: string;
    /** New company name for the user. */
    companyName: string;
    /** New department for the user. */
    department: string;
    /** New job title for the user. */
    jobTitle: string;
    /** New employee ID for the user. */
    employeeId: string;
}

/** Metadata for the [UserService.Update] operation. */
export interface UpdateUserMetadata {
    /** ID of the user that is being updated. */
    userId: string;
}

/** Request to delete a user. */
export interface DeleteUserRequest {
    /** ID of the user to delete. */
    userId: string;
}

/** Metadata for the [UserService.Delete] operation. */
export interface DeleteUserMetadata {
    /** ID of the user that is being deleted. */
    userId: string;
}

/** Request to suspend a user. */
export interface SuspendUserRequest {
    /** ID of the user to suspend. */
    userId: string;
    /** Reason for suspending the user. */
    reason: string;
}

/** Metadata for the [UserService.Suspend] operation. */
export interface SuspendUserMetadata {
    /** ID of the user that is being suspended. */
    userId: string;
}

/** Request to reactivate a suspended user. */
export interface ReactivateUserRequest {
    /** ID of the user to reactivate. */
    userId: string;
}

/** Metadata for the [UserService.Reactivate] operation. */
export interface ReactivateUserMetadata {
    /** ID of the user that is being reactivated. */
    userId: string;
}

/** Request to set the authenticated user's password. */
export interface SetOwnPasswordRequest {
    /** New password specification. */
    passwordSpec?: PasswordSpec;
    /** Current password for verification. */
    oldPassword: string;
}

/** Metadata for the [UserService.SetOwnPassword] operation. */
export interface SetOwnPasswordMetadata {
    /** ID of the user whose password is being changed. */
    userId: string;
}

/** Response for the [UserService.SetOwnPassword] operation. */
export interface SetOwnPasswordResponse {}

/** Request to set another user's password. */
export interface SetOthersPasswordRequest {
    /** ID of the user whose password to set. */
    userId: string;
    /** New password specification. */
    passwordSpec?: PasswordSpec;
}

/** Metadata for the [UserService.SetOthersPassword] operation. */
export interface SetOthersPasswordMetadata {
    /** ID of the user whose password is being set. */
    userId: string;
}

/** Response for the [UserService.SetOthersPassword] operation. */
export interface SetOthersPasswordResponse {}

/** Request to generate a new password. */
export interface GeneratePasswordRequest {}

/** Response for the [UserService.GeneratePassword] operation. */
export interface GeneratePasswordResponse {
    /** Generated password specification. */
    passwordSpec?: PasswordSpec;
}

/** Password specification. */
export interface PasswordSpec {
    /** The password string. */
    password: string;
    /** Proof that the password was generated by the system. */
    generationProof: string;
}

/** Metadata about a user's password. */
export interface PasswordMetadata {
    /** Unique identifier of the password. */
    id: string;
    /** Type of the password. */
    type: PasswordMetadata_PasswordType;
    /** Timestamp when the password was created. */
    createdAt?: Date;
    /** Timestamp when the password expires. */
    expiresAt?: Date;
    /** Information about the last usage of the password. */
    lastUsage?: PasswordMetadata_PasswordUsage;
}

/** Types of passwords. */
export enum PasswordMetadata_PasswordType {
    /** PASSWORD_TYPE_UNSPECIFIED - The password type is not specified. */
    PASSWORD_TYPE_UNSPECIFIED = 0,
    /** TEMPORARY - Temporary password that must be changed on first use. */
    TEMPORARY = 1,
    /** PERMANENT - Permanent password. */
    PERMANENT = 2,
    UNRECOGNIZED = -1,
}

export function passwordMetadata_PasswordTypeFromJSON(object: any): PasswordMetadata_PasswordType {
    switch (object) {
        case 0:
        case 'PASSWORD_TYPE_UNSPECIFIED':
            return PasswordMetadata_PasswordType.PASSWORD_TYPE_UNSPECIFIED;
        case 1:
        case 'TEMPORARY':
            return PasswordMetadata_PasswordType.TEMPORARY;
        case 2:
        case 'PERMANENT':
            return PasswordMetadata_PasswordType.PERMANENT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PasswordMetadata_PasswordType.UNRECOGNIZED;
    }
}

export function passwordMetadata_PasswordTypeToJSON(object: PasswordMetadata_PasswordType): string {
    switch (object) {
        case PasswordMetadata_PasswordType.PASSWORD_TYPE_UNSPECIFIED:
            return 'PASSWORD_TYPE_UNSPECIFIED';
        case PasswordMetadata_PasswordType.TEMPORARY:
            return 'TEMPORARY';
        case PasswordMetadata_PasswordType.PERMANENT:
            return 'PERMANENT';
        default:
            return 'UNKNOWN';
    }
}

/** Information about password usage. */
export interface PasswordMetadata_PasswordUsage {
    /** Timestamp when the password was last used. */
    usedAt?: Date;
    /** IP address from which the password was used. */
    ipAddress: string;
}

/** Request to convert a user to use external authentication. */
export interface ConvertToExternalUserRequest {
    /** ID of the user to convert. */
    userId: string;
    /** External identifier to associate with the user. */
    externalId: string;
}

/** Metadata for the [UserService.ConvertToExternal] operation. */
export interface ConvertToExternalUserMetadata {
    /** ID of the user being converted. */
    userId: string;
    /** External identifier being associated with the user. */
    externalId: string;
}

/** Request to set a password hash for a user. */
export interface SetPasswordHashRequest {
    /** ID of the user to set the password hash for. */
    userId: string;
    /** Password hash to set. */
    hash?: PasswordHash;
}

/** Metadata for the [UserService.SetPasswordHash] operation. */
export interface SetPasswordHashMetadata {
    /** ID of the user whose password hash is being set. */
    userId: string;
}

/** Password hash information. */
export interface PasswordHash {
    /** The password hash string. */
    passwordHash: string;
    /** Type of the password hash. */
    passwordHashType: PasswordHash_PasswordHashType;
}

/** Types of password hashes. */
export enum PasswordHash_PasswordHashType {
    /** PASSWORD_HASH_TYPE_UNSPECIFIED - The password hash type is not specified. */
    PASSWORD_HASH_TYPE_UNSPECIFIED = 0,
    /** AD_MD4 - Microsoft Active Directory MD4 hash. */
    AD_MD4 = 1,
    UNRECOGNIZED = -1,
}

export function passwordHash_PasswordHashTypeFromJSON(object: any): PasswordHash_PasswordHashType {
    switch (object) {
        case 0:
        case 'PASSWORD_HASH_TYPE_UNSPECIFIED':
            return PasswordHash_PasswordHashType.PASSWORD_HASH_TYPE_UNSPECIFIED;
        case 1:
        case 'AD_MD4':
            return PasswordHash_PasswordHashType.AD_MD4;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PasswordHash_PasswordHashType.UNRECOGNIZED;
    }
}

export function passwordHash_PasswordHashTypeToJSON(object: PasswordHash_PasswordHashType): string {
    switch (object) {
        case PasswordHash_PasswordHashType.PASSWORD_HASH_TYPE_UNSPECIFIED:
            return 'PASSWORD_HASH_TYPE_UNSPECIFIED';
        case PasswordHash_PasswordHashType.AD_MD4:
            return 'AD_MD4';
        default:
            return 'UNKNOWN';
    }
}

/** Request to resolve external IDs to internal user IDs. */
export interface ResolveExternalIdsRequest {
    /** ID of the userpool to resolve external IDs in. */
    userpoolId: string;
    /** List of external IDs to resolve. */
    externalIds: string[];
}

/** Information about a resolved user. */
export interface ResolvedUser {
    /** Internal user ID. */
    userId: string;
    /** External identifier. */
    externalId: string;
    /** ID of the userpool the user belongs to. */
    userpoolId: string;
}

/** Response for the [UserService.ResolveExternalIds] operation. */
export interface ResolveExternalIdsResponse {
    /** List of resolved users. */
    resolvedUsers: ResolvedUser[];
}

const baseGetUserRequest: object = { userId: '' };

export const GetUserRequest: {
    encode(message: GetUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetUserRequest;
    fromJSON(object: any): GetUserRequest;
    toJSON(message: GetUserRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetUserRequest>, I>>(object: I): GetUserRequest;
} = {
    encode(message: GetUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userId !== '') {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetUserRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetUserRequest } as GetUserRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetUserRequest {
        const message = { ...baseGetUserRequest } as GetUserRequest;
        message.userId =
            object.userId !== undefined && object.userId !== null ? String(object.userId) : '';
        return message;
    },

    toJSON(message: GetUserRequest): unknown {
        const obj: any = {};
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetUserRequest>, I>>(object: I): GetUserRequest {
        const message = { ...baseGetUserRequest } as GetUserRequest;
        message.userId = object.userId ?? '';
        return message;
    },
};

const baseListUsersRequest: object = { userpoolId: '', pageSize: 0, pageToken: '', filter: '' };

export const ListUsersRequest: {
    encode(message: ListUsersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListUsersRequest;
    fromJSON(object: any): ListUsersRequest;
    toJSON(message: ListUsersRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListUsersRequest>, I>>(object: I): ListUsersRequest;
} = {
    encode(message: ListUsersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userpoolId !== '') {
            writer.uint32(10).string(message.userpoolId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListUsersRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListUsersRequest } as ListUsersRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userpoolId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListUsersRequest {
        const message = { ...baseListUsersRequest } as ListUsersRequest;
        message.userpoolId =
            object.userpoolId !== undefined && object.userpoolId !== null
                ? String(object.userpoolId)
                : '';
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null ? Number(object.pageSize) : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : '';
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        return message;
    },

    toJSON(message: ListUsersRequest): unknown {
        const obj: any = {};
        message.userpoolId !== undefined && (obj.userpoolId = message.userpoolId);
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListUsersRequest>, I>>(object: I): ListUsersRequest {
        const message = { ...baseListUsersRequest } as ListUsersRequest;
        message.userpoolId = object.userpoolId ?? '';
        message.pageSize = object.pageSize ?? 0;
        message.pageToken = object.pageToken ?? '';
        message.filter = object.filter ?? '';
        return message;
    },
};

const baseListUsersResponse: object = { nextPageToken: '' };

export const ListUsersResponse: {
    encode(message: ListUsersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListUsersResponse;
    fromJSON(object: any): ListUsersResponse;
    toJSON(message: ListUsersResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListUsersResponse>, I>>(object: I): ListUsersResponse;
} = {
    encode(message: ListUsersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.users) {
            User.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListUsersResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListUsersResponse } as ListUsersResponse;
        message.users = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.users.push(User.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListUsersResponse {
        const message = { ...baseListUsersResponse } as ListUsersResponse;
        message.users = (object.users ?? []).map((e: any) => User.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : '';
        return message;
    },

    toJSON(message: ListUsersResponse): unknown {
        const obj: any = {};
        if (message.users) {
            obj.users = message.users.map((e) => (e ? User.toJSON(e) : undefined));
        } else {
            obj.users = [];
        }
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListUsersResponse>, I>>(object: I): ListUsersResponse {
        const message = { ...baseListUsersResponse } as ListUsersResponse;
        message.users = object.users?.map((e) => User.fromPartial(e)) || [];
        message.nextPageToken = object.nextPageToken ?? '';
        return message;
    },
};

const baseCreateUserRequest: object = {
    userpoolId: '',
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

export const CreateUserRequest: {
    encode(message: CreateUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserRequest;
    fromJSON(object: any): CreateUserRequest;
    toJSON(message: CreateUserRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateUserRequest>, I>>(object: I): CreateUserRequest;
} = {
    encode(message: CreateUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userpoolId !== '') {
            writer.uint32(10).string(message.userpoolId);
        }
        if (message.username !== '') {
            writer.uint32(18).string(message.username);
        }
        if (message.fullName !== '') {
            writer.uint32(34).string(message.fullName);
        }
        if (message.givenName !== '') {
            writer.uint32(42).string(message.givenName);
        }
        if (message.familyName !== '') {
            writer.uint32(50).string(message.familyName);
        }
        if (message.email !== '') {
            writer.uint32(58).string(message.email);
        }
        if (message.phoneNumber !== '') {
            writer.uint32(66).string(message.phoneNumber);
        }
        if (message.passwordSpec !== undefined) {
            PasswordSpec.encode(message.passwordSpec, writer.uint32(74).fork()).ldelim();
        }
        if (message.passwordHash !== undefined) {
            PasswordHash.encode(message.passwordHash, writer.uint32(90).fork()).ldelim();
        }
        if (message.isActive !== undefined) {
            BoolValue.encode({ value: message.isActive! }, writer.uint32(82).fork()).ldelim();
        }
        if (message.externalId !== '') {
            writer.uint32(98).string(message.externalId);
        }
        if (message.companyName !== '') {
            writer.uint32(106).string(message.companyName);
        }
        if (message.department !== '') {
            writer.uint32(114).string(message.department);
        }
        if (message.jobTitle !== '') {
            writer.uint32(122).string(message.jobTitle);
        }
        if (message.employeeId !== '') {
            writer.uint32(130).string(message.employeeId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateUserRequest } as CreateUserRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userpoolId = reader.string();
                    break;
                case 2:
                    message.username = reader.string();
                    break;
                case 4:
                    message.fullName = reader.string();
                    break;
                case 5:
                    message.givenName = reader.string();
                    break;
                case 6:
                    message.familyName = reader.string();
                    break;
                case 7:
                    message.email = reader.string();
                    break;
                case 8:
                    message.phoneNumber = reader.string();
                    break;
                case 9:
                    message.passwordSpec = PasswordSpec.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.passwordHash = PasswordHash.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.isActive = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.externalId = reader.string();
                    break;
                case 13:
                    message.companyName = reader.string();
                    break;
                case 14:
                    message.department = reader.string();
                    break;
                case 15:
                    message.jobTitle = reader.string();
                    break;
                case 16:
                    message.employeeId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateUserRequest {
        const message = { ...baseCreateUserRequest } as CreateUserRequest;
        message.userpoolId =
            object.userpoolId !== undefined && object.userpoolId !== null
                ? String(object.userpoolId)
                : '';
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
        message.passwordSpec =
            object.passwordSpec !== undefined && object.passwordSpec !== null
                ? PasswordSpec.fromJSON(object.passwordSpec)
                : undefined;
        message.passwordHash =
            object.passwordHash !== undefined && object.passwordHash !== null
                ? PasswordHash.fromJSON(object.passwordHash)
                : undefined;
        message.isActive =
            object.isActive !== undefined && object.isActive !== null
                ? Boolean(object.isActive)
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

    toJSON(message: CreateUserRequest): unknown {
        const obj: any = {};
        message.userpoolId !== undefined && (obj.userpoolId = message.userpoolId);
        message.username !== undefined && (obj.username = message.username);
        message.fullName !== undefined && (obj.fullName = message.fullName);
        message.givenName !== undefined && (obj.givenName = message.givenName);
        message.familyName !== undefined && (obj.familyName = message.familyName);
        message.email !== undefined && (obj.email = message.email);
        message.phoneNumber !== undefined && (obj.phoneNumber = message.phoneNumber);
        message.passwordSpec !== undefined &&
            (obj.passwordSpec = message.passwordSpec
                ? PasswordSpec.toJSON(message.passwordSpec)
                : undefined);
        message.passwordHash !== undefined &&
            (obj.passwordHash = message.passwordHash
                ? PasswordHash.toJSON(message.passwordHash)
                : undefined);
        message.isActive !== undefined && (obj.isActive = message.isActive);
        message.externalId !== undefined && (obj.externalId = message.externalId);
        message.companyName !== undefined && (obj.companyName = message.companyName);
        message.department !== undefined && (obj.department = message.department);
        message.jobTitle !== undefined && (obj.jobTitle = message.jobTitle);
        message.employeeId !== undefined && (obj.employeeId = message.employeeId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateUserRequest>, I>>(object: I): CreateUserRequest {
        const message = { ...baseCreateUserRequest } as CreateUserRequest;
        message.userpoolId = object.userpoolId ?? '';
        message.username = object.username ?? '';
        message.fullName = object.fullName ?? '';
        message.givenName = object.givenName ?? '';
        message.familyName = object.familyName ?? '';
        message.email = object.email ?? '';
        message.phoneNumber = object.phoneNumber ?? '';
        message.passwordSpec =
            object.passwordSpec !== undefined && object.passwordSpec !== null
                ? PasswordSpec.fromPartial(object.passwordSpec)
                : undefined;
        message.passwordHash =
            object.passwordHash !== undefined && object.passwordHash !== null
                ? PasswordHash.fromPartial(object.passwordHash)
                : undefined;
        message.isActive = object.isActive ?? undefined;
        message.externalId = object.externalId ?? '';
        message.companyName = object.companyName ?? '';
        message.department = object.department ?? '';
        message.jobTitle = object.jobTitle ?? '';
        message.employeeId = object.employeeId ?? '';
        return message;
    },
};

const baseCreateUserMetadata: object = { userId: '' };

export const CreateUserMetadata: {
    encode(message: CreateUserMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserMetadata;
    fromJSON(object: any): CreateUserMetadata;
    toJSON(message: CreateUserMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateUserMetadata>, I>>(object: I): CreateUserMetadata;
} = {
    encode(message: CreateUserMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userId !== '') {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateUserMetadata } as CreateUserMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateUserMetadata {
        const message = { ...baseCreateUserMetadata } as CreateUserMetadata;
        message.userId =
            object.userId !== undefined && object.userId !== null ? String(object.userId) : '';
        return message;
    },

    toJSON(message: CreateUserMetadata): unknown {
        const obj: any = {};
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateUserMetadata>, I>>(
        object: I,
    ): CreateUserMetadata {
        const message = { ...baseCreateUserMetadata } as CreateUserMetadata;
        message.userId = object.userId ?? '';
        return message;
    },
};

const baseUpdateUserRequest: object = {
    userId: '',
    username: '',
    fullName: '',
    givenName: '',
    familyName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    department: '',
    jobTitle: '',
    employeeId: '',
};

export const UpdateUserRequest: {
    encode(message: UpdateUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserRequest;
    fromJSON(object: any): UpdateUserRequest;
    toJSON(message: UpdateUserRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateUserRequest>, I>>(object: I): UpdateUserRequest;
} = {
    encode(message: UpdateUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userId !== '') {
            writer.uint32(10).string(message.userId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.username !== '') {
            writer.uint32(26).string(message.username);
        }
        if (message.fullName !== '') {
            writer.uint32(42).string(message.fullName);
        }
        if (message.givenName !== '') {
            writer.uint32(50).string(message.givenName);
        }
        if (message.familyName !== '') {
            writer.uint32(58).string(message.familyName);
        }
        if (message.email !== '') {
            writer.uint32(66).string(message.email);
        }
        if (message.phoneNumber !== '') {
            writer.uint32(74).string(message.phoneNumber);
        }
        if (message.companyName !== '') {
            writer.uint32(82).string(message.companyName);
        }
        if (message.department !== '') {
            writer.uint32(90).string(message.department);
        }
        if (message.jobTitle !== '') {
            writer.uint32(98).string(message.jobTitle);
        }
        if (message.employeeId !== '') {
            writer.uint32(106).string(message.employeeId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateUserRequest } as UpdateUserRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.username = reader.string();
                    break;
                case 5:
                    message.fullName = reader.string();
                    break;
                case 6:
                    message.givenName = reader.string();
                    break;
                case 7:
                    message.familyName = reader.string();
                    break;
                case 8:
                    message.email = reader.string();
                    break;
                case 9:
                    message.phoneNumber = reader.string();
                    break;
                case 10:
                    message.companyName = reader.string();
                    break;
                case 11:
                    message.department = reader.string();
                    break;
                case 12:
                    message.jobTitle = reader.string();
                    break;
                case 13:
                    message.employeeId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateUserRequest {
        const message = { ...baseUpdateUserRequest } as UpdateUserRequest;
        message.userId =
            object.userId !== undefined && object.userId !== null ? String(object.userId) : '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
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

    toJSON(message: UpdateUserRequest): unknown {
        const obj: any = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.username !== undefined && (obj.username = message.username);
        message.fullName !== undefined && (obj.fullName = message.fullName);
        message.givenName !== undefined && (obj.givenName = message.givenName);
        message.familyName !== undefined && (obj.familyName = message.familyName);
        message.email !== undefined && (obj.email = message.email);
        message.phoneNumber !== undefined && (obj.phoneNumber = message.phoneNumber);
        message.companyName !== undefined && (obj.companyName = message.companyName);
        message.department !== undefined && (obj.department = message.department);
        message.jobTitle !== undefined && (obj.jobTitle = message.jobTitle);
        message.employeeId !== undefined && (obj.employeeId = message.employeeId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateUserRequest>, I>>(object: I): UpdateUserRequest {
        const message = { ...baseUpdateUserRequest } as UpdateUserRequest;
        message.userId = object.userId ?? '';
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.username = object.username ?? '';
        message.fullName = object.fullName ?? '';
        message.givenName = object.givenName ?? '';
        message.familyName = object.familyName ?? '';
        message.email = object.email ?? '';
        message.phoneNumber = object.phoneNumber ?? '';
        message.companyName = object.companyName ?? '';
        message.department = object.department ?? '';
        message.jobTitle = object.jobTitle ?? '';
        message.employeeId = object.employeeId ?? '';
        return message;
    },
};

const baseUpdateUserMetadata: object = { userId: '' };

export const UpdateUserMetadata: {
    encode(message: UpdateUserMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserMetadata;
    fromJSON(object: any): UpdateUserMetadata;
    toJSON(message: UpdateUserMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateUserMetadata>, I>>(object: I): UpdateUserMetadata;
} = {
    encode(message: UpdateUserMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userId !== '') {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateUserMetadata } as UpdateUserMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateUserMetadata {
        const message = { ...baseUpdateUserMetadata } as UpdateUserMetadata;
        message.userId =
            object.userId !== undefined && object.userId !== null ? String(object.userId) : '';
        return message;
    },

    toJSON(message: UpdateUserMetadata): unknown {
        const obj: any = {};
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateUserMetadata>, I>>(
        object: I,
    ): UpdateUserMetadata {
        const message = { ...baseUpdateUserMetadata } as UpdateUserMetadata;
        message.userId = object.userId ?? '';
        return message;
    },
};

const baseDeleteUserRequest: object = { userId: '' };

export const DeleteUserRequest: {
    encode(message: DeleteUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserRequest;
    fromJSON(object: any): DeleteUserRequest;
    toJSON(message: DeleteUserRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteUserRequest>, I>>(object: I): DeleteUserRequest;
} = {
    encode(message: DeleteUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userId !== '') {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteUserRequest } as DeleteUserRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteUserRequest {
        const message = { ...baseDeleteUserRequest } as DeleteUserRequest;
        message.userId =
            object.userId !== undefined && object.userId !== null ? String(object.userId) : '';
        return message;
    },

    toJSON(message: DeleteUserRequest): unknown {
        const obj: any = {};
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteUserRequest>, I>>(object: I): DeleteUserRequest {
        const message = { ...baseDeleteUserRequest } as DeleteUserRequest;
        message.userId = object.userId ?? '';
        return message;
    },
};

const baseDeleteUserMetadata: object = { userId: '' };

export const DeleteUserMetadata: {
    encode(message: DeleteUserMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserMetadata;
    fromJSON(object: any): DeleteUserMetadata;
    toJSON(message: DeleteUserMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteUserMetadata>, I>>(object: I): DeleteUserMetadata;
} = {
    encode(message: DeleteUserMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userId !== '') {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteUserMetadata } as DeleteUserMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteUserMetadata {
        const message = { ...baseDeleteUserMetadata } as DeleteUserMetadata;
        message.userId =
            object.userId !== undefined && object.userId !== null ? String(object.userId) : '';
        return message;
    },

    toJSON(message: DeleteUserMetadata): unknown {
        const obj: any = {};
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteUserMetadata>, I>>(
        object: I,
    ): DeleteUserMetadata {
        const message = { ...baseDeleteUserMetadata } as DeleteUserMetadata;
        message.userId = object.userId ?? '';
        return message;
    },
};

const baseSuspendUserRequest: object = { userId: '', reason: '' };

export const SuspendUserRequest: {
    encode(message: SuspendUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuspendUserRequest;
    fromJSON(object: any): SuspendUserRequest;
    toJSON(message: SuspendUserRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<SuspendUserRequest>, I>>(object: I): SuspendUserRequest;
} = {
    encode(message: SuspendUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userId !== '') {
            writer.uint32(10).string(message.userId);
        }
        if (message.reason !== '') {
            writer.uint32(18).string(message.reason);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SuspendUserRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSuspendUserRequest } as SuspendUserRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                case 2:
                    message.reason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SuspendUserRequest {
        const message = { ...baseSuspendUserRequest } as SuspendUserRequest;
        message.userId =
            object.userId !== undefined && object.userId !== null ? String(object.userId) : '';
        message.reason =
            object.reason !== undefined && object.reason !== null ? String(object.reason) : '';
        return message;
    },

    toJSON(message: SuspendUserRequest): unknown {
        const obj: any = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.reason !== undefined && (obj.reason = message.reason);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SuspendUserRequest>, I>>(
        object: I,
    ): SuspendUserRequest {
        const message = { ...baseSuspendUserRequest } as SuspendUserRequest;
        message.userId = object.userId ?? '';
        message.reason = object.reason ?? '';
        return message;
    },
};

const baseSuspendUserMetadata: object = { userId: '' };

export const SuspendUserMetadata: {
    encode(message: SuspendUserMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SuspendUserMetadata;
    fromJSON(object: any): SuspendUserMetadata;
    toJSON(message: SuspendUserMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<SuspendUserMetadata>, I>>(object: I): SuspendUserMetadata;
} = {
    encode(message: SuspendUserMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userId !== '') {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SuspendUserMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSuspendUserMetadata } as SuspendUserMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SuspendUserMetadata {
        const message = { ...baseSuspendUserMetadata } as SuspendUserMetadata;
        message.userId =
            object.userId !== undefined && object.userId !== null ? String(object.userId) : '';
        return message;
    },

    toJSON(message: SuspendUserMetadata): unknown {
        const obj: any = {};
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SuspendUserMetadata>, I>>(
        object: I,
    ): SuspendUserMetadata {
        const message = { ...baseSuspendUserMetadata } as SuspendUserMetadata;
        message.userId = object.userId ?? '';
        return message;
    },
};

const baseReactivateUserRequest: object = { userId: '' };

export const ReactivateUserRequest: {
    encode(message: ReactivateUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateUserRequest;
    fromJSON(object: any): ReactivateUserRequest;
    toJSON(message: ReactivateUserRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ReactivateUserRequest>, I>>(object: I): ReactivateUserRequest;
} = {
    encode(message: ReactivateUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userId !== '') {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateUserRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReactivateUserRequest } as ReactivateUserRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ReactivateUserRequest {
        const message = { ...baseReactivateUserRequest } as ReactivateUserRequest;
        message.userId =
            object.userId !== undefined && object.userId !== null ? String(object.userId) : '';
        return message;
    },

    toJSON(message: ReactivateUserRequest): unknown {
        const obj: any = {};
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ReactivateUserRequest>, I>>(
        object: I,
    ): ReactivateUserRequest {
        const message = { ...baseReactivateUserRequest } as ReactivateUserRequest;
        message.userId = object.userId ?? '';
        return message;
    },
};

const baseReactivateUserMetadata: object = { userId: '' };

export const ReactivateUserMetadata: {
    encode(message: ReactivateUserMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateUserMetadata;
    fromJSON(object: any): ReactivateUserMetadata;
    toJSON(message: ReactivateUserMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<ReactivateUserMetadata>, I>>(object: I): ReactivateUserMetadata;
} = {
    encode(message: ReactivateUserMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userId !== '') {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ReactivateUserMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReactivateUserMetadata } as ReactivateUserMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ReactivateUserMetadata {
        const message = { ...baseReactivateUserMetadata } as ReactivateUserMetadata;
        message.userId =
            object.userId !== undefined && object.userId !== null ? String(object.userId) : '';
        return message;
    },

    toJSON(message: ReactivateUserMetadata): unknown {
        const obj: any = {};
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ReactivateUserMetadata>, I>>(
        object: I,
    ): ReactivateUserMetadata {
        const message = { ...baseReactivateUserMetadata } as ReactivateUserMetadata;
        message.userId = object.userId ?? '';
        return message;
    },
};

const baseSetOwnPasswordRequest: object = { oldPassword: '' };

export const SetOwnPasswordRequest: {
    encode(message: SetOwnPasswordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetOwnPasswordRequest;
    fromJSON(object: any): SetOwnPasswordRequest;
    toJSON(message: SetOwnPasswordRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<SetOwnPasswordRequest>, I>>(object: I): SetOwnPasswordRequest;
} = {
    encode(message: SetOwnPasswordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.passwordSpec !== undefined) {
            PasswordSpec.encode(message.passwordSpec, writer.uint32(10).fork()).ldelim();
        }
        if (message.oldPassword !== '') {
            writer.uint32(18).string(message.oldPassword);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SetOwnPasswordRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSetOwnPasswordRequest } as SetOwnPasswordRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.passwordSpec = PasswordSpec.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.oldPassword = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SetOwnPasswordRequest {
        const message = { ...baseSetOwnPasswordRequest } as SetOwnPasswordRequest;
        message.passwordSpec =
            object.passwordSpec !== undefined && object.passwordSpec !== null
                ? PasswordSpec.fromJSON(object.passwordSpec)
                : undefined;
        message.oldPassword =
            object.oldPassword !== undefined && object.oldPassword !== null
                ? String(object.oldPassword)
                : '';
        return message;
    },

    toJSON(message: SetOwnPasswordRequest): unknown {
        const obj: any = {};
        message.passwordSpec !== undefined &&
            (obj.passwordSpec = message.passwordSpec
                ? PasswordSpec.toJSON(message.passwordSpec)
                : undefined);
        message.oldPassword !== undefined && (obj.oldPassword = message.oldPassword);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SetOwnPasswordRequest>, I>>(
        object: I,
    ): SetOwnPasswordRequest {
        const message = { ...baseSetOwnPasswordRequest } as SetOwnPasswordRequest;
        message.passwordSpec =
            object.passwordSpec !== undefined && object.passwordSpec !== null
                ? PasswordSpec.fromPartial(object.passwordSpec)
                : undefined;
        message.oldPassword = object.oldPassword ?? '';
        return message;
    },
};

const baseSetOwnPasswordMetadata: object = { userId: '' };

export const SetOwnPasswordMetadata: {
    encode(message: SetOwnPasswordMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetOwnPasswordMetadata;
    fromJSON(object: any): SetOwnPasswordMetadata;
    toJSON(message: SetOwnPasswordMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<SetOwnPasswordMetadata>, I>>(object: I): SetOwnPasswordMetadata;
} = {
    encode(message: SetOwnPasswordMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userId !== '') {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SetOwnPasswordMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSetOwnPasswordMetadata } as SetOwnPasswordMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SetOwnPasswordMetadata {
        const message = { ...baseSetOwnPasswordMetadata } as SetOwnPasswordMetadata;
        message.userId =
            object.userId !== undefined && object.userId !== null ? String(object.userId) : '';
        return message;
    },

    toJSON(message: SetOwnPasswordMetadata): unknown {
        const obj: any = {};
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SetOwnPasswordMetadata>, I>>(
        object: I,
    ): SetOwnPasswordMetadata {
        const message = { ...baseSetOwnPasswordMetadata } as SetOwnPasswordMetadata;
        message.userId = object.userId ?? '';
        return message;
    },
};

const baseSetOwnPasswordResponse: object = {};

export const SetOwnPasswordResponse: {
    encode(message: SetOwnPasswordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetOwnPasswordResponse;
    fromJSON(object: any): SetOwnPasswordResponse;
    toJSON(message: SetOwnPasswordResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<SetOwnPasswordResponse>, I>>(object: I): SetOwnPasswordResponse;
} = {
    encode(_: SetOwnPasswordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SetOwnPasswordResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSetOwnPasswordResponse } as SetOwnPasswordResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): SetOwnPasswordResponse {
        const message = { ...baseSetOwnPasswordResponse } as SetOwnPasswordResponse;
        return message;
    },

    toJSON(_: SetOwnPasswordResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SetOwnPasswordResponse>, I>>(
        _: I,
    ): SetOwnPasswordResponse {
        const message = { ...baseSetOwnPasswordResponse } as SetOwnPasswordResponse;
        return message;
    },
};

const baseSetOthersPasswordRequest: object = { userId: '' };

export const SetOthersPasswordRequest: {
    encode(message: SetOthersPasswordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetOthersPasswordRequest;
    fromJSON(object: any): SetOthersPasswordRequest;
    toJSON(message: SetOthersPasswordRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<SetOthersPasswordRequest>, I>>(object: I): SetOthersPasswordRequest;
} = {
    encode(
        message: SetOthersPasswordRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.userId !== '') {
            writer.uint32(10).string(message.userId);
        }
        if (message.passwordSpec !== undefined) {
            PasswordSpec.encode(message.passwordSpec, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SetOthersPasswordRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSetOthersPasswordRequest } as SetOthersPasswordRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                case 2:
                    message.passwordSpec = PasswordSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SetOthersPasswordRequest {
        const message = { ...baseSetOthersPasswordRequest } as SetOthersPasswordRequest;
        message.userId =
            object.userId !== undefined && object.userId !== null ? String(object.userId) : '';
        message.passwordSpec =
            object.passwordSpec !== undefined && object.passwordSpec !== null
                ? PasswordSpec.fromJSON(object.passwordSpec)
                : undefined;
        return message;
    },

    toJSON(message: SetOthersPasswordRequest): unknown {
        const obj: any = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.passwordSpec !== undefined &&
            (obj.passwordSpec = message.passwordSpec
                ? PasswordSpec.toJSON(message.passwordSpec)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SetOthersPasswordRequest>, I>>(
        object: I,
    ): SetOthersPasswordRequest {
        const message = { ...baseSetOthersPasswordRequest } as SetOthersPasswordRequest;
        message.userId = object.userId ?? '';
        message.passwordSpec =
            object.passwordSpec !== undefined && object.passwordSpec !== null
                ? PasswordSpec.fromPartial(object.passwordSpec)
                : undefined;
        return message;
    },
};

const baseSetOthersPasswordMetadata: object = { userId: '' };

export const SetOthersPasswordMetadata: {
    encode(message: SetOthersPasswordMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetOthersPasswordMetadata;
    fromJSON(object: any): SetOthersPasswordMetadata;
    toJSON(message: SetOthersPasswordMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<SetOthersPasswordMetadata>, I>>(object: I): SetOthersPasswordMetadata;
} = {
    encode(
        message: SetOthersPasswordMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.userId !== '') {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SetOthersPasswordMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSetOthersPasswordMetadata } as SetOthersPasswordMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SetOthersPasswordMetadata {
        const message = { ...baseSetOthersPasswordMetadata } as SetOthersPasswordMetadata;
        message.userId =
            object.userId !== undefined && object.userId !== null ? String(object.userId) : '';
        return message;
    },

    toJSON(message: SetOthersPasswordMetadata): unknown {
        const obj: any = {};
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SetOthersPasswordMetadata>, I>>(
        object: I,
    ): SetOthersPasswordMetadata {
        const message = { ...baseSetOthersPasswordMetadata } as SetOthersPasswordMetadata;
        message.userId = object.userId ?? '';
        return message;
    },
};

const baseSetOthersPasswordResponse: object = {};

export const SetOthersPasswordResponse: {
    encode(message: SetOthersPasswordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetOthersPasswordResponse;
    fromJSON(object: any): SetOthersPasswordResponse;
    toJSON(message: SetOthersPasswordResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<SetOthersPasswordResponse>, I>>(object: I): SetOthersPasswordResponse;
} = {
    encode(_: SetOthersPasswordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SetOthersPasswordResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSetOthersPasswordResponse } as SetOthersPasswordResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): SetOthersPasswordResponse {
        const message = { ...baseSetOthersPasswordResponse } as SetOthersPasswordResponse;
        return message;
    },

    toJSON(_: SetOthersPasswordResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SetOthersPasswordResponse>, I>>(
        _: I,
    ): SetOthersPasswordResponse {
        const message = { ...baseSetOthersPasswordResponse } as SetOthersPasswordResponse;
        return message;
    },
};

const baseGeneratePasswordRequest: object = {};

export const GeneratePasswordRequest: {
    encode(message: GeneratePasswordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GeneratePasswordRequest;
    fromJSON(object: any): GeneratePasswordRequest;
    toJSON(message: GeneratePasswordRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GeneratePasswordRequest>, I>>(object: I): GeneratePasswordRequest;
} = {
    encode(_: GeneratePasswordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GeneratePasswordRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGeneratePasswordRequest } as GeneratePasswordRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): GeneratePasswordRequest {
        const message = { ...baseGeneratePasswordRequest } as GeneratePasswordRequest;
        return message;
    },

    toJSON(_: GeneratePasswordRequest): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GeneratePasswordRequest>, I>>(
        _: I,
    ): GeneratePasswordRequest {
        const message = { ...baseGeneratePasswordRequest } as GeneratePasswordRequest;
        return message;
    },
};

const baseGeneratePasswordResponse: object = {};

export const GeneratePasswordResponse: {
    encode(message: GeneratePasswordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GeneratePasswordResponse;
    fromJSON(object: any): GeneratePasswordResponse;
    toJSON(message: GeneratePasswordResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<GeneratePasswordResponse>, I>>(object: I): GeneratePasswordResponse;
} = {
    encode(
        message: GeneratePasswordResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.passwordSpec !== undefined) {
            PasswordSpec.encode(message.passwordSpec, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GeneratePasswordResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGeneratePasswordResponse } as GeneratePasswordResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.passwordSpec = PasswordSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GeneratePasswordResponse {
        const message = { ...baseGeneratePasswordResponse } as GeneratePasswordResponse;
        message.passwordSpec =
            object.passwordSpec !== undefined && object.passwordSpec !== null
                ? PasswordSpec.fromJSON(object.passwordSpec)
                : undefined;
        return message;
    },

    toJSON(message: GeneratePasswordResponse): unknown {
        const obj: any = {};
        message.passwordSpec !== undefined &&
            (obj.passwordSpec = message.passwordSpec
                ? PasswordSpec.toJSON(message.passwordSpec)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GeneratePasswordResponse>, I>>(
        object: I,
    ): GeneratePasswordResponse {
        const message = { ...baseGeneratePasswordResponse } as GeneratePasswordResponse;
        message.passwordSpec =
            object.passwordSpec !== undefined && object.passwordSpec !== null
                ? PasswordSpec.fromPartial(object.passwordSpec)
                : undefined;
        return message;
    },
};

const basePasswordSpec: object = { password: '', generationProof: '' };

export const PasswordSpec: {
    encode(message: PasswordSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordSpec;
    fromJSON(object: any): PasswordSpec;
    toJSON(message: PasswordSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<PasswordSpec>, I>>(object: I): PasswordSpec;
} = {
    encode(message: PasswordSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.password !== '') {
            writer.uint32(10).string(message.password);
        }
        if (message.generationProof !== '') {
            writer.uint32(18).string(message.generationProof);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePasswordSpec } as PasswordSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.password = reader.string();
                    break;
                case 2:
                    message.generationProof = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PasswordSpec {
        const message = { ...basePasswordSpec } as PasswordSpec;
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
                : '';
        message.generationProof =
            object.generationProof !== undefined && object.generationProof !== null
                ? String(object.generationProof)
                : '';
        return message;
    },

    toJSON(message: PasswordSpec): unknown {
        const obj: any = {};
        message.password !== undefined && (obj.password = message.password);
        message.generationProof !== undefined && (obj.generationProof = message.generationProof);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PasswordSpec>, I>>(object: I): PasswordSpec {
        const message = { ...basePasswordSpec } as PasswordSpec;
        message.password = object.password ?? '';
        message.generationProof = object.generationProof ?? '';
        return message;
    },
};

const basePasswordMetadata: object = { id: '', type: 0 };

export const PasswordMetadata: {
    encode(message: PasswordMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordMetadata;
    fromJSON(object: any): PasswordMetadata;
    toJSON(message: PasswordMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<PasswordMetadata>, I>>(object: I): PasswordMetadata;
} = {
    encode(message: PasswordMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.expiresAt !== undefined) {
            Timestamp.encode(toTimestamp(message.expiresAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.lastUsage !== undefined) {
            PasswordMetadata_PasswordUsage.encode(
                message.lastUsage,
                writer.uint32(42).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePasswordMetadata } as PasswordMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.type = reader.int32() as any;
                    break;
                case 3:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.expiresAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.lastUsage = PasswordMetadata_PasswordUsage.decode(
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

    fromJSON(object: any): PasswordMetadata {
        const message = { ...basePasswordMetadata } as PasswordMetadata;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.type =
            object.type !== undefined && object.type !== null
                ? passwordMetadata_PasswordTypeFromJSON(object.type)
                : 0;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.expiresAt =
            object.expiresAt !== undefined && object.expiresAt !== null
                ? fromJsonTimestamp(object.expiresAt)
                : undefined;
        message.lastUsage =
            object.lastUsage !== undefined && object.lastUsage !== null
                ? PasswordMetadata_PasswordUsage.fromJSON(object.lastUsage)
                : undefined;
        return message;
    },

    toJSON(message: PasswordMetadata): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined &&
            (obj.type = passwordMetadata_PasswordTypeToJSON(message.type));
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.expiresAt !== undefined && (obj.expiresAt = message.expiresAt.toISOString());
        message.lastUsage !== undefined &&
            (obj.lastUsage = message.lastUsage
                ? PasswordMetadata_PasswordUsage.toJSON(message.lastUsage)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PasswordMetadata>, I>>(object: I): PasswordMetadata {
        const message = { ...basePasswordMetadata } as PasswordMetadata;
        message.id = object.id ?? '';
        message.type = object.type ?? 0;
        message.createdAt = object.createdAt ?? undefined;
        message.expiresAt = object.expiresAt ?? undefined;
        message.lastUsage =
            object.lastUsage !== undefined && object.lastUsage !== null
                ? PasswordMetadata_PasswordUsage.fromPartial(object.lastUsage)
                : undefined;
        return message;
    },
};

const basePasswordMetadata_PasswordUsage: object = { ipAddress: '' };

export const PasswordMetadata_PasswordUsage: {
    encode(message: PasswordMetadata_PasswordUsage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordMetadata_PasswordUsage;
    fromJSON(object: any): PasswordMetadata_PasswordUsage;
    toJSON(message: PasswordMetadata_PasswordUsage): unknown;
    fromPartial<I extends Exact<DeepPartial<PasswordMetadata_PasswordUsage>, I>>(object: I): PasswordMetadata_PasswordUsage;
} = {
    encode(
        message: PasswordMetadata_PasswordUsage,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.usedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.usedAt), writer.uint32(10).fork()).ldelim();
        }
        if (message.ipAddress !== '') {
            writer.uint32(18).string(message.ipAddress);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordMetadata_PasswordUsage {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePasswordMetadata_PasswordUsage } as PasswordMetadata_PasswordUsage;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.usedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.ipAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PasswordMetadata_PasswordUsage {
        const message = { ...basePasswordMetadata_PasswordUsage } as PasswordMetadata_PasswordUsage;
        message.usedAt =
            object.usedAt !== undefined && object.usedAt !== null
                ? fromJsonTimestamp(object.usedAt)
                : undefined;
        message.ipAddress =
            object.ipAddress !== undefined && object.ipAddress !== null
                ? String(object.ipAddress)
                : '';
        return message;
    },

    toJSON(message: PasswordMetadata_PasswordUsage): unknown {
        const obj: any = {};
        message.usedAt !== undefined && (obj.usedAt = message.usedAt.toISOString());
        message.ipAddress !== undefined && (obj.ipAddress = message.ipAddress);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PasswordMetadata_PasswordUsage>, I>>(
        object: I,
    ): PasswordMetadata_PasswordUsage {
        const message = { ...basePasswordMetadata_PasswordUsage } as PasswordMetadata_PasswordUsage;
        message.usedAt = object.usedAt ?? undefined;
        message.ipAddress = object.ipAddress ?? '';
        return message;
    },
};

const baseConvertToExternalUserRequest: object = { userId: '', externalId: '' };

export const ConvertToExternalUserRequest: {
    encode(message: ConvertToExternalUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConvertToExternalUserRequest;
    fromJSON(object: any): ConvertToExternalUserRequest;
    toJSON(message: ConvertToExternalUserRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ConvertToExternalUserRequest>, I>>(object: I): ConvertToExternalUserRequest;
} = {
    encode(
        message: ConvertToExternalUserRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.userId !== '') {
            writer.uint32(10).string(message.userId);
        }
        if (message.externalId !== '') {
            writer.uint32(18).string(message.externalId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ConvertToExternalUserRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConvertToExternalUserRequest } as ConvertToExternalUserRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                case 2:
                    message.externalId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ConvertToExternalUserRequest {
        const message = { ...baseConvertToExternalUserRequest } as ConvertToExternalUserRequest;
        message.userId =
            object.userId !== undefined && object.userId !== null ? String(object.userId) : '';
        message.externalId =
            object.externalId !== undefined && object.externalId !== null
                ? String(object.externalId)
                : '';
        return message;
    },

    toJSON(message: ConvertToExternalUserRequest): unknown {
        const obj: any = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.externalId !== undefined && (obj.externalId = message.externalId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ConvertToExternalUserRequest>, I>>(
        object: I,
    ): ConvertToExternalUserRequest {
        const message = { ...baseConvertToExternalUserRequest } as ConvertToExternalUserRequest;
        message.userId = object.userId ?? '';
        message.externalId = object.externalId ?? '';
        return message;
    },
};

const baseConvertToExternalUserMetadata: object = { userId: '', externalId: '' };

export const ConvertToExternalUserMetadata: {
    encode(message: ConvertToExternalUserMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConvertToExternalUserMetadata;
    fromJSON(object: any): ConvertToExternalUserMetadata;
    toJSON(message: ConvertToExternalUserMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<ConvertToExternalUserMetadata>, I>>(object: I): ConvertToExternalUserMetadata;
} = {
    encode(
        message: ConvertToExternalUserMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.userId !== '') {
            writer.uint32(10).string(message.userId);
        }
        if (message.externalId !== '') {
            writer.uint32(18).string(message.externalId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ConvertToExternalUserMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConvertToExternalUserMetadata } as ConvertToExternalUserMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                case 2:
                    message.externalId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ConvertToExternalUserMetadata {
        const message = { ...baseConvertToExternalUserMetadata } as ConvertToExternalUserMetadata;
        message.userId =
            object.userId !== undefined && object.userId !== null ? String(object.userId) : '';
        message.externalId =
            object.externalId !== undefined && object.externalId !== null
                ? String(object.externalId)
                : '';
        return message;
    },

    toJSON(message: ConvertToExternalUserMetadata): unknown {
        const obj: any = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.externalId !== undefined && (obj.externalId = message.externalId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ConvertToExternalUserMetadata>, I>>(
        object: I,
    ): ConvertToExternalUserMetadata {
        const message = { ...baseConvertToExternalUserMetadata } as ConvertToExternalUserMetadata;
        message.userId = object.userId ?? '';
        message.externalId = object.externalId ?? '';
        return message;
    },
};

const baseSetPasswordHashRequest: object = { userId: '' };

export const SetPasswordHashRequest: {
    encode(message: SetPasswordHashRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetPasswordHashRequest;
    fromJSON(object: any): SetPasswordHashRequest;
    toJSON(message: SetPasswordHashRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<SetPasswordHashRequest>, I>>(object: I): SetPasswordHashRequest;
} = {
    encode(message: SetPasswordHashRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userId !== '') {
            writer.uint32(10).string(message.userId);
        }
        if (message.hash !== undefined) {
            PasswordHash.encode(message.hash, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SetPasswordHashRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSetPasswordHashRequest } as SetPasswordHashRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                case 2:
                    message.hash = PasswordHash.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SetPasswordHashRequest {
        const message = { ...baseSetPasswordHashRequest } as SetPasswordHashRequest;
        message.userId =
            object.userId !== undefined && object.userId !== null ? String(object.userId) : '';
        message.hash =
            object.hash !== undefined && object.hash !== null
                ? PasswordHash.fromJSON(object.hash)
                : undefined;
        return message;
    },

    toJSON(message: SetPasswordHashRequest): unknown {
        const obj: any = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.hash !== undefined &&
            (obj.hash = message.hash ? PasswordHash.toJSON(message.hash) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SetPasswordHashRequest>, I>>(
        object: I,
    ): SetPasswordHashRequest {
        const message = { ...baseSetPasswordHashRequest } as SetPasswordHashRequest;
        message.userId = object.userId ?? '';
        message.hash =
            object.hash !== undefined && object.hash !== null
                ? PasswordHash.fromPartial(object.hash)
                : undefined;
        return message;
    },
};

const baseSetPasswordHashMetadata: object = { userId: '' };

export const SetPasswordHashMetadata: {
    encode(message: SetPasswordHashMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetPasswordHashMetadata;
    fromJSON(object: any): SetPasswordHashMetadata;
    toJSON(message: SetPasswordHashMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<SetPasswordHashMetadata>, I>>(object: I): SetPasswordHashMetadata;
} = {
    encode(message: SetPasswordHashMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userId !== '') {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SetPasswordHashMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSetPasswordHashMetadata } as SetPasswordHashMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SetPasswordHashMetadata {
        const message = { ...baseSetPasswordHashMetadata } as SetPasswordHashMetadata;
        message.userId =
            object.userId !== undefined && object.userId !== null ? String(object.userId) : '';
        return message;
    },

    toJSON(message: SetPasswordHashMetadata): unknown {
        const obj: any = {};
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SetPasswordHashMetadata>, I>>(
        object: I,
    ): SetPasswordHashMetadata {
        const message = { ...baseSetPasswordHashMetadata } as SetPasswordHashMetadata;
        message.userId = object.userId ?? '';
        return message;
    },
};

const basePasswordHash: object = { passwordHash: '', passwordHashType: 0 };

export const PasswordHash: {
    encode(message: PasswordHash, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordHash;
    fromJSON(object: any): PasswordHash;
    toJSON(message: PasswordHash): unknown;
    fromPartial<I extends Exact<DeepPartial<PasswordHash>, I>>(object: I): PasswordHash;
} = {
    encode(message: PasswordHash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.passwordHash !== '') {
            writer.uint32(10).string(message.passwordHash);
        }
        if (message.passwordHashType !== 0) {
            writer.uint32(16).int32(message.passwordHashType);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordHash {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePasswordHash } as PasswordHash;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.passwordHash = reader.string();
                    break;
                case 2:
                    message.passwordHashType = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PasswordHash {
        const message = { ...basePasswordHash } as PasswordHash;
        message.passwordHash =
            object.passwordHash !== undefined && object.passwordHash !== null
                ? String(object.passwordHash)
                : '';
        message.passwordHashType =
            object.passwordHashType !== undefined && object.passwordHashType !== null
                ? passwordHash_PasswordHashTypeFromJSON(object.passwordHashType)
                : 0;
        return message;
    },

    toJSON(message: PasswordHash): unknown {
        const obj: any = {};
        message.passwordHash !== undefined && (obj.passwordHash = message.passwordHash);
        message.passwordHashType !== undefined &&
            (obj.passwordHashType = passwordHash_PasswordHashTypeToJSON(message.passwordHashType));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PasswordHash>, I>>(object: I): PasswordHash {
        const message = { ...basePasswordHash } as PasswordHash;
        message.passwordHash = object.passwordHash ?? '';
        message.passwordHashType = object.passwordHashType ?? 0;
        return message;
    },
};

const baseResolveExternalIdsRequest: object = { userpoolId: '', externalIds: '' };

export const ResolveExternalIdsRequest: {
    encode(message: ResolveExternalIdsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResolveExternalIdsRequest;
    fromJSON(object: any): ResolveExternalIdsRequest;
    toJSON(message: ResolveExternalIdsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ResolveExternalIdsRequest>, I>>(object: I): ResolveExternalIdsRequest;
} = {
    encode(
        message: ResolveExternalIdsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.userpoolId !== '') {
            writer.uint32(10).string(message.userpoolId);
        }
        for (const v of message.externalIds) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResolveExternalIdsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResolveExternalIdsRequest } as ResolveExternalIdsRequest;
        message.externalIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userpoolId = reader.string();
                    break;
                case 2:
                    message.externalIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResolveExternalIdsRequest {
        const message = { ...baseResolveExternalIdsRequest } as ResolveExternalIdsRequest;
        message.userpoolId =
            object.userpoolId !== undefined && object.userpoolId !== null
                ? String(object.userpoolId)
                : '';
        message.externalIds = (object.externalIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: ResolveExternalIdsRequest): unknown {
        const obj: any = {};
        message.userpoolId !== undefined && (obj.userpoolId = message.userpoolId);
        if (message.externalIds) {
            obj.externalIds = message.externalIds.map((e) => e);
        } else {
            obj.externalIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResolveExternalIdsRequest>, I>>(
        object: I,
    ): ResolveExternalIdsRequest {
        const message = { ...baseResolveExternalIdsRequest } as ResolveExternalIdsRequest;
        message.userpoolId = object.userpoolId ?? '';
        message.externalIds = object.externalIds?.map((e) => e) || [];
        return message;
    },
};

const baseResolvedUser: object = { userId: '', externalId: '', userpoolId: '' };

export const ResolvedUser: {
    encode(message: ResolvedUser, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResolvedUser;
    fromJSON(object: any): ResolvedUser;
    toJSON(message: ResolvedUser): unknown;
    fromPartial<I extends Exact<DeepPartial<ResolvedUser>, I>>(object: I): ResolvedUser;
} = {
    encode(message: ResolvedUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.userId !== '') {
            writer.uint32(10).string(message.userId);
        }
        if (message.externalId !== '') {
            writer.uint32(18).string(message.externalId);
        }
        if (message.userpoolId !== '') {
            writer.uint32(26).string(message.userpoolId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResolvedUser {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResolvedUser } as ResolvedUser;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                case 2:
                    message.externalId = reader.string();
                    break;
                case 3:
                    message.userpoolId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResolvedUser {
        const message = { ...baseResolvedUser } as ResolvedUser;
        message.userId =
            object.userId !== undefined && object.userId !== null ? String(object.userId) : '';
        message.externalId =
            object.externalId !== undefined && object.externalId !== null
                ? String(object.externalId)
                : '';
        message.userpoolId =
            object.userpoolId !== undefined && object.userpoolId !== null
                ? String(object.userpoolId)
                : '';
        return message;
    },

    toJSON(message: ResolvedUser): unknown {
        const obj: any = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.externalId !== undefined && (obj.externalId = message.externalId);
        message.userpoolId !== undefined && (obj.userpoolId = message.userpoolId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResolvedUser>, I>>(object: I): ResolvedUser {
        const message = { ...baseResolvedUser } as ResolvedUser;
        message.userId = object.userId ?? '';
        message.externalId = object.externalId ?? '';
        message.userpoolId = object.userpoolId ?? '';
        return message;
    },
};

const baseResolveExternalIdsResponse: object = {};

export const ResolveExternalIdsResponse: {
    encode(message: ResolveExternalIdsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResolveExternalIdsResponse;
    fromJSON(object: any): ResolveExternalIdsResponse;
    toJSON(message: ResolveExternalIdsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ResolveExternalIdsResponse>, I>>(object: I): ResolveExternalIdsResponse;
} = {
    encode(
        message: ResolveExternalIdsResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.resolvedUsers) {
            ResolvedUser.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResolveExternalIdsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResolveExternalIdsResponse } as ResolveExternalIdsResponse;
        message.resolvedUsers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resolvedUsers.push(ResolvedUser.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResolveExternalIdsResponse {
        const message = { ...baseResolveExternalIdsResponse } as ResolveExternalIdsResponse;
        message.resolvedUsers = (object.resolvedUsers ?? []).map((e: any) =>
            ResolvedUser.fromJSON(e),
        );
        return message;
    },

    toJSON(message: ResolveExternalIdsResponse): unknown {
        const obj: any = {};
        if (message.resolvedUsers) {
            obj.resolvedUsers = message.resolvedUsers.map((e) =>
                e ? ResolvedUser.toJSON(e) : undefined,
            );
        } else {
            obj.resolvedUsers = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResolveExternalIdsResponse>, I>>(
        object: I,
    ): ResolveExternalIdsResponse {
        const message = { ...baseResolveExternalIdsResponse } as ResolveExternalIdsResponse;
        message.resolvedUsers = object.resolvedUsers?.map((e) => ResolvedUser.fromPartial(e)) || [];
        return message;
    },
};

/** A set of methods for managing users in the Identity Provider system. */
export const UserServiceService = {
    /**
     * Returns the specified user.
     *
     * To get the list of available users, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.organizationmanager.v1.idp.UserService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetUserRequest) =>
            Buffer.from(GetUserRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetUserRequest.decode(value),
        responseSerialize: (value: User) => Buffer.from(User.encode(value).finish()),
        responseDeserialize: (value: Buffer) => User.decode(value),
    },
    /** Retrieves the list of users in the specified userpool. */
    list: {
        path: '/yandex.cloud.organizationmanager.v1.idp.UserService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListUsersRequest) =>
            Buffer.from(ListUsersRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListUsersRequest.decode(value),
        responseSerialize: (value: ListUsersResponse) =>
            Buffer.from(ListUsersResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListUsersResponse.decode(value),
    },
    /** Creates a user in the specified userpool. */
    create: {
        path: '/yandex.cloud.organizationmanager.v1.idp.UserService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateUserRequest) =>
            Buffer.from(CreateUserRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateUserRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified user. */
    update: {
        path: '/yandex.cloud.organizationmanager.v1.idp.UserService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateUserRequest) =>
            Buffer.from(UpdateUserRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateUserRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified user. */
    delete: {
        path: '/yandex.cloud.organizationmanager.v1.idp.UserService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteUserRequest) =>
            Buffer.from(DeleteUserRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteUserRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Sets the password for the authenticated user. */
    setOwnPassword: {
        path: '/yandex.cloud.organizationmanager.v1.idp.UserService/SetOwnPassword',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetOwnPasswordRequest) =>
            Buffer.from(SetOwnPasswordRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetOwnPasswordRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Sets the password for another user. */
    setOthersPassword: {
        path: '/yandex.cloud.organizationmanager.v1.idp.UserService/SetOthersPassword',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetOthersPasswordRequest) =>
            Buffer.from(SetOthersPasswordRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetOthersPasswordRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Suspends the specified user. */
    suspend: {
        path: '/yandex.cloud.organizationmanager.v1.idp.UserService/Suspend',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SuspendUserRequest) =>
            Buffer.from(SuspendUserRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SuspendUserRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Reactivates a previously suspended user. */
    reactivate: {
        path: '/yandex.cloud.organizationmanager.v1.idp.UserService/Reactivate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ReactivateUserRequest) =>
            Buffer.from(ReactivateUserRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ReactivateUserRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Generates a new password. */
    generatePassword: {
        path: '/yandex.cloud.organizationmanager.v1.idp.UserService/GeneratePassword',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GeneratePasswordRequest) =>
            Buffer.from(GeneratePasswordRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GeneratePasswordRequest.decode(value),
        responseSerialize: (value: GeneratePasswordResponse) =>
            Buffer.from(GeneratePasswordResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GeneratePasswordResponse.decode(value),
    },
    /** Returns metadata about the authenticated user's password. */
    getSelfPasswordMetadata: {
        path: '/yandex.cloud.organizationmanager.v1.idp.UserService/GetSelfPasswordMetadata',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
        requestDeserialize: (value: Buffer) => Empty.decode(value),
        responseSerialize: (value: PasswordMetadata) =>
            Buffer.from(PasswordMetadata.encode(value).finish()),
        responseDeserialize: (value: Buffer) => PasswordMetadata.decode(value),
    },
    /** Converts a user to use external authentication. */
    convertToExternal: {
        path: '/yandex.cloud.organizationmanager.v1.idp.UserService/ConvertToExternal',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ConvertToExternalUserRequest) =>
            Buffer.from(ConvertToExternalUserRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ConvertToExternalUserRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Sets a password hash for the specified user. */
    setPasswordHash: {
        path: '/yandex.cloud.organizationmanager.v1.idp.UserService/SetPasswordHash',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetPasswordHashRequest) =>
            Buffer.from(SetPasswordHashRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetPasswordHashRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Resolves external IDs to internal user IDs. */
    resolveExternalIds: {
        path: '/yandex.cloud.organizationmanager.v1.idp.UserService/ResolveExternalIds',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ResolveExternalIdsRequest) =>
            Buffer.from(ResolveExternalIdsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ResolveExternalIdsRequest.decode(value),
        responseSerialize: (value: ResolveExternalIdsResponse) =>
            Buffer.from(ResolveExternalIdsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ResolveExternalIdsResponse.decode(value),
    },
} as const;

export interface UserServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified user.
     *
     * To get the list of available users, make a [List] request.
     */
    get: handleUnaryCall<GetUserRequest, User>;
    /** Retrieves the list of users in the specified userpool. */
    list: handleUnaryCall<ListUsersRequest, ListUsersResponse>;
    /** Creates a user in the specified userpool. */
    create: handleUnaryCall<CreateUserRequest, Operation>;
    /** Updates the specified user. */
    update: handleUnaryCall<UpdateUserRequest, Operation>;
    /** Deletes the specified user. */
    delete: handleUnaryCall<DeleteUserRequest, Operation>;
    /** Sets the password for the authenticated user. */
    setOwnPassword: handleUnaryCall<SetOwnPasswordRequest, Operation>;
    /** Sets the password for another user. */
    setOthersPassword: handleUnaryCall<SetOthersPasswordRequest, Operation>;
    /** Suspends the specified user. */
    suspend: handleUnaryCall<SuspendUserRequest, Operation>;
    /** Reactivates a previously suspended user. */
    reactivate: handleUnaryCall<ReactivateUserRequest, Operation>;
    /** Generates a new password. */
    generatePassword: handleUnaryCall<GeneratePasswordRequest, GeneratePasswordResponse>;
    /** Returns metadata about the authenticated user's password. */
    getSelfPasswordMetadata: handleUnaryCall<Empty, PasswordMetadata>;
    /** Converts a user to use external authentication. */
    convertToExternal: handleUnaryCall<ConvertToExternalUserRequest, Operation>;
    /** Sets a password hash for the specified user. */
    setPasswordHash: handleUnaryCall<SetPasswordHashRequest, Operation>;
    /** Resolves external IDs to internal user IDs. */
    resolveExternalIds: handleUnaryCall<ResolveExternalIdsRequest, ResolveExternalIdsResponse>;
}

export interface UserServiceClient extends Client {
    /**
     * Returns the specified user.
     *
     * To get the list of available users, make a [List] request.
     */
    get(
        request: GetUserRequest,
        callback: (error: ServiceError | null, response: User) => void,
    ): ClientUnaryCall;
    get(
        request: GetUserRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: User) => void,
    ): ClientUnaryCall;
    get(
        request: GetUserRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: User) => void,
    ): ClientUnaryCall;
    /** Retrieves the list of users in the specified userpool. */
    list(
        request: ListUsersRequest,
        callback: (error: ServiceError | null, response: ListUsersResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListUsersRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListUsersResponse) => void,
    ): ClientUnaryCall;
    list(
        request: ListUsersRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListUsersResponse) => void,
    ): ClientUnaryCall;
    /** Creates a user in the specified userpool. */
    create(
        request: CreateUserRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateUserRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    create(
        request: CreateUserRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates the specified user. */
    update(
        request: UpdateUserRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateUserRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    update(
        request: UpdateUserRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes the specified user. */
    delete(
        request: DeleteUserRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteUserRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    delete(
        request: DeleteUserRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Sets the password for the authenticated user. */
    setOwnPassword(
        request: SetOwnPasswordRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setOwnPassword(
        request: SetOwnPasswordRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setOwnPassword(
        request: SetOwnPasswordRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Sets the password for another user. */
    setOthersPassword(
        request: SetOthersPasswordRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setOthersPassword(
        request: SetOthersPasswordRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setOthersPassword(
        request: SetOthersPasswordRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Suspends the specified user. */
    suspend(
        request: SuspendUserRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    suspend(
        request: SuspendUserRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    suspend(
        request: SuspendUserRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Reactivates a previously suspended user. */
    reactivate(
        request: ReactivateUserRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    reactivate(
        request: ReactivateUserRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    reactivate(
        request: ReactivateUserRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Generates a new password. */
    generatePassword(
        request: GeneratePasswordRequest,
        callback: (error: ServiceError | null, response: GeneratePasswordResponse) => void,
    ): ClientUnaryCall;
    generatePassword(
        request: GeneratePasswordRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GeneratePasswordResponse) => void,
    ): ClientUnaryCall;
    generatePassword(
        request: GeneratePasswordRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GeneratePasswordResponse) => void,
    ): ClientUnaryCall;
    /** Returns metadata about the authenticated user's password. */
    getSelfPasswordMetadata(
        request: Empty,
        callback: (error: ServiceError | null, response: PasswordMetadata) => void,
    ): ClientUnaryCall;
    getSelfPasswordMetadata(
        request: Empty,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: PasswordMetadata) => void,
    ): ClientUnaryCall;
    getSelfPasswordMetadata(
        request: Empty,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: PasswordMetadata) => void,
    ): ClientUnaryCall;
    /** Converts a user to use external authentication. */
    convertToExternal(
        request: ConvertToExternalUserRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    convertToExternal(
        request: ConvertToExternalUserRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    convertToExternal(
        request: ConvertToExternalUserRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Sets a password hash for the specified user. */
    setPasswordHash(
        request: SetPasswordHashRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setPasswordHash(
        request: SetPasswordHashRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setPasswordHash(
        request: SetPasswordHashRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Resolves external IDs to internal user IDs. */
    resolveExternalIds(
        request: ResolveExternalIdsRequest,
        callback: (error: ServiceError | null, response: ResolveExternalIdsResponse) => void,
    ): ClientUnaryCall;
    resolveExternalIds(
        request: ResolveExternalIdsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ResolveExternalIdsResponse) => void,
    ): ClientUnaryCall;
    resolveExternalIds(
        request: ResolveExternalIdsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ResolveExternalIdsResponse) => void,
    ): ClientUnaryCall;
}

export const UserServiceClient = makeGenericClientConstructor(
    UserServiceService,
    'yandex.cloud.organizationmanager.v1.idp.UserService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): UserServiceClient;
    service: typeof UserServiceService;
};

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
