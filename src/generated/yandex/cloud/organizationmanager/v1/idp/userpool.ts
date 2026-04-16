/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Duration } from '../../../../../google/protobuf/duration';
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import { BoolValue } from '../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.organizationmanager.v1.idp';

/** A userpool is a container for users in the Identity Provider system. */
export interface Userpool {
    /** Unique identifier of the userpool. */
    id: string;
    /** ID of the organization this userpool belongs to. */
    organizationId: string;
    /** Name of the userpool. */
    name: string;
    /** Description of the userpool. */
    description: string;
    /** Resource labels as key:value pairs. */
    labels: { [key: string]: string };
    /** Timestamp when the userpool was created. */
    createdAt?: Date;
    /** Timestamp when the userpool was last updated. */
    updatedAt?: Date;
    /** List of domains associated with this userpool. */
    domains: string[];
    /** Current status of the userpool. */
    status: Userpool_Status;
    /** User settings for this userpool. */
    userSettings?: UserSettings;
    /** Password quality policy for this userpool. */
    passwordQualityPolicy?: PasswordQualityPolicy;
    /** Password lifetime policy for this userpool. */
    passwordLifetimePolicy?: PasswordLifetimePolicy;
    /** Bruteforce protection policy for this userpool. */
    bruteforceProtectionPolicy?: BruteforceProtectionPolicy;
    /** Password blacklist policy for this userpool. */
    passwordBlacklistPolicy?: PasswordBlacklistPolicy;
}

/** Represents the current status of a userpool. */
export enum Userpool_Status {
    /** STATUS_UNSPECIFIED - The status is not specified. */
    STATUS_UNSPECIFIED = 0,
    /** CREATING - The userpool is in the process of being created. */
    CREATING = 1,
    /** ACTIVE - The userpool is active and operational. */
    ACTIVE = 2,
    /** DELETING - The userpool is in the process of being deleted. */
    DELETING = 3,
    UNRECOGNIZED = -1,
}

export function userpool_StatusFromJSON(object: any): Userpool_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Userpool_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return Userpool_Status.CREATING;
        case 2:
        case 'ACTIVE':
            return Userpool_Status.ACTIVE;
        case 3:
        case 'DELETING':
            return Userpool_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Userpool_Status.UNRECOGNIZED;
    }
}

export function userpool_StatusToJSON(object: Userpool_Status): string {
    switch (object) {
        case Userpool_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Userpool_Status.CREATING:
            return 'CREATING';
        case Userpool_Status.ACTIVE:
            return 'ACTIVE';
        case Userpool_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}

export interface Userpool_LabelsEntry {
    key: string;
    value: string;
}

/** Settings that control user capabilities within a userpool. */
export interface UserSettings {
    /** Whether users can change their own passwords. */
    allowEditSelfPassword: boolean;
    /** Whether users can edit their own profile information. */
    allowEditSelfInfo: boolean;
    /** Whether users can edit their own contact information. */
    allowEditSelfContacts: boolean;
    /** Whether users can edit their own login information. */
    allowEditSelfLogin: boolean;
}

/** A domain associated with a userpool. */
export interface Domain {
    /** Domain name. */
    domain: string;
    /** Current status of the domain. */
    status: Domain_Status;
    /** Optional code providing details about validation errors. */
    statusCode: string;
    /** Timestamp when the domain was created. */
    createdAt?: Date;
    /** Timestamp when the domain was validated. */
    validatedAt?: Date;
    /** List of challenges associated with this domain. */
    challenges: DomainChallenge[];
    /** Whether the domain is protected from deletion. */
    deletionProtection: boolean;
}

/** Represents the current status of a domain. */
export enum Domain_Status {
    /** STATUS_UNSPECIFIED - The status is not specified. */
    STATUS_UNSPECIFIED = 0,
    /** NEED_TO_VALIDATE - The domain needs to be validated. */
    NEED_TO_VALIDATE = 1,
    /** VALIDATING - The domain is in the process of being validated. */
    VALIDATING = 2,
    /** VALID - The domain has been successfully validated. */
    VALID = 3,
    /** INVALID - The domain validation has failed. */
    INVALID = 4,
    /** DELETING - The domain is in the process of being deleted. */
    DELETING = 5,
    UNRECOGNIZED = -1,
}

export function domain_StatusFromJSON(object: any): Domain_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Domain_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'NEED_TO_VALIDATE':
            return Domain_Status.NEED_TO_VALIDATE;
        case 2:
        case 'VALIDATING':
            return Domain_Status.VALIDATING;
        case 3:
        case 'VALID':
            return Domain_Status.VALID;
        case 4:
        case 'INVALID':
            return Domain_Status.INVALID;
        case 5:
        case 'DELETING':
            return Domain_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Domain_Status.UNRECOGNIZED;
    }
}

export function domain_StatusToJSON(object: Domain_Status): string {
    switch (object) {
        case Domain_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Domain_Status.NEED_TO_VALIDATE:
            return 'NEED_TO_VALIDATE';
        case Domain_Status.VALIDATING:
            return 'VALIDATING';
        case Domain_Status.VALID:
            return 'VALID';
        case Domain_Status.INVALID:
            return 'INVALID';
        case Domain_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}

/** A challenge used to validate domain ownership. */
export interface DomainChallenge {
    /** Timestamp when the challenge was created. */
    createdAt?: Date;
    /** Timestamp when the challenge was last updated. */
    updatedAt?: Date;
    /** Type of the challenge. */
    type: DomainChallenge_Type;
    /** Current status of the challenge. */
    status: DomainChallenge_Status;
    /** DNS record challenge details. */
    dnsChallenge?: DomainChallenge_DnsRecord | undefined;
}

/** Type of domain challenge. */
export enum DomainChallenge_Type {
    /** TYPE_UNSPECIFIED - The type is not specified. */
    TYPE_UNSPECIFIED = 0,
    /** DNS_TXT - DNS TXT record challenge. */
    DNS_TXT = 1,
    UNRECOGNIZED = -1,
}

export function domainChallenge_TypeFromJSON(object: any): DomainChallenge_Type {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return DomainChallenge_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'DNS_TXT':
            return DomainChallenge_Type.DNS_TXT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return DomainChallenge_Type.UNRECOGNIZED;
    }
}

export function domainChallenge_TypeToJSON(object: DomainChallenge_Type): string {
    switch (object) {
        case DomainChallenge_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case DomainChallenge_Type.DNS_TXT:
            return 'DNS_TXT';
        default:
            return 'UNKNOWN';
    }
}

/** Status of the domain challenge. */
export enum DomainChallenge_Status {
    /** STATUS_UNSPECIFIED - The status is not specified. */
    STATUS_UNSPECIFIED = 0,
    /** PENDING - The challenge is pending verification. */
    PENDING = 1,
    /** PROCESSING - The challenge verification is in progress. */
    PROCESSING = 2,
    /** VALID - The challenge has been successfully verified. */
    VALID = 3,
    /** INVALID - The challenge verification has failed. */
    INVALID = 4,
    UNRECOGNIZED = -1,
}

export function domainChallenge_StatusFromJSON(object: any): DomainChallenge_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return DomainChallenge_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'PENDING':
            return DomainChallenge_Status.PENDING;
        case 2:
        case 'PROCESSING':
            return DomainChallenge_Status.PROCESSING;
        case 3:
        case 'VALID':
            return DomainChallenge_Status.VALID;
        case 4:
        case 'INVALID':
            return DomainChallenge_Status.INVALID;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return DomainChallenge_Status.UNRECOGNIZED;
    }
}

export function domainChallenge_StatusToJSON(object: DomainChallenge_Status): string {
    switch (object) {
        case DomainChallenge_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case DomainChallenge_Status.PENDING:
            return 'PENDING';
        case DomainChallenge_Status.PROCESSING:
            return 'PROCESSING';
        case DomainChallenge_Status.VALID:
            return 'VALID';
        case DomainChallenge_Status.INVALID:
            return 'INVALID';
        default:
            return 'UNKNOWN';
    }
}

/** DNS record information for domain validation. */
export interface DomainChallenge_DnsRecord {
    /** Name of the DNS record. */
    name: string;
    /** Type of the DNS record. */
    type: DomainChallenge_DnsRecord_Type;
    /** Value of the DNS record. */
    value: string;
}

/** Type of DNS record. */
export enum DomainChallenge_DnsRecord_Type {
    /** TYPE_UNSPECIFIED - The type is not specified. */
    TYPE_UNSPECIFIED = 0,
    /** TXT - TXT record type. */
    TXT = 1,
    UNRECOGNIZED = -1,
}

export function domainChallenge_DnsRecord_TypeFromJSON(
    object: any,
): DomainChallenge_DnsRecord_Type {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return DomainChallenge_DnsRecord_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'TXT':
            return DomainChallenge_DnsRecord_Type.TXT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return DomainChallenge_DnsRecord_Type.UNRECOGNIZED;
    }
}

export function domainChallenge_DnsRecord_TypeToJSON(
    object: DomainChallenge_DnsRecord_Type,
): string {
    switch (object) {
        case DomainChallenge_DnsRecord_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case DomainChallenge_DnsRecord_Type.TXT:
            return 'TXT';
        default:
            return 'UNKNOWN';
    }
}

/** Policy that defines password quality requirements. */
export interface PasswordQualityPolicy {
    /** Whether passwords similar to previous ones are allowed. */
    allowSimilar: boolean;
    /** Maximum password length. Zero means no maximum length is enforced. */
    maxLength: number;
    /**
     * Deprecated. Use Fixed instead.
     *
     * @deprecated
     */
    minLength: number;
    /** Minimum length of substrings to check for similarity to vulnerable sequences. */
    matchLength: number;
    /**
     * Deprecated. Use Fixed instead.
     *
     * @deprecated
     */
    requiredClasses?: PasswordQualityPolicy_RequiredClasses;
    /**
     * Deprecated. Use Smart instead.
     *
     * @deprecated
     */
    minLengthByClassSettings?: PasswordQualityPolicy_MinLengthByClassSettings;
    /** Fixed complexity requirements. Exactly one of complexity requirements must be specified. */
    fixed?: PasswordQualityPolicy_Fixed | undefined;
    /** Smart complexity requirements. Exactly one of complexity requirements must be specified. */
    smart?: PasswordQualityPolicy_Smart | undefined;
}

/** Deprecated. Use Fixed instead. */
export interface PasswordQualityPolicy_RequiredClasses {
    /** Whether lowercase letters are required. */
    lowers: boolean;
    /** Whether uppercase letters are required. */
    uppers: boolean;
    /** Whether digits are required. */
    digits: boolean;
    /** Whether special characters are required. */
    specials: boolean;
}

/** Deprecated. Use Smart instead. */
export interface PasswordQualityPolicy_MinLengthByClassSettings {
    /** Minimum length for passwords with one character class. */
    one: number;
    /** Minimum length for passwords with two character classes. */
    two: number;
    /** Minimum length for passwords with three character classes. */
    three: number;
}

/** Fixed complexity policy enforces uniform password rules with required character classes and minimum length. */
export interface PasswordQualityPolicy_Fixed {
    /** Whether lowercase letters are required in the password. */
    lowersRequired: boolean;
    /** Whether uppercase letters are required in the password. */
    uppersRequired: boolean;
    /** Whether digits are required in the password. */
    digitsRequired: boolean;
    /** Whether special characters are required in the password. */
    specialsRequired: boolean;
    /** Minimum length required for all passwords. */
    minLength: number;
}

/**
 * Smart complexity policy applies adaptive requirements based on character class diversity.
 * Zero value means passwords with this number of classes are forbidden.
 */
export interface PasswordQualityPolicy_Smart {
    /** For passwords with one class of characters */
    oneClass: number;
    /** For passwords with two classes of characters */
    twoClasses: number;
    /** For passwords with three classes of characters */
    threeClasses: number;
    /** For passwords with all four classes of characters */
    fourClasses: number;
}

/** Policy that defines password lifetime requirements. */
export interface PasswordLifetimePolicy {
    /** Minimum number of days before a password can be changed. */
    minDaysCount: number;
    /**
     * Maximum number of days a password remains valid.
     * Zero means passwords never expire.
     */
    maxDaysCount: number;
}

/**
 * Policy that defines protection against brute force attacks.
 * Zero or empty values disable bruteforce protection.
 */
export interface BruteforceProtectionPolicy {
    /** Time window for counting failed authentication attempts. */
    window?: Duration;
    /** Duration of the block after too many failed attempts. */
    block?: Duration;
    /** Number of failed attempts allowed within the window before blocking. */
    attempts: number;
}

/** Policy that defines password blacklist requirements. */
export interface PasswordBlacklistPolicy {
    /** Whether check in common password database is enabled. Default value is true. */
    checkCommon?: boolean;
}

const baseUserpool: object = {
    id: '',
    organizationId: '',
    name: '',
    description: '',
    domains: '',
    status: 0,
};

export const Userpool: {
    encode(message: Userpool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Userpool;
    fromJSON(object: any): Userpool;
    toJSON(message: Userpool): unknown;
    fromPartial<I extends Exact<DeepPartial<Userpool>, I>>(object: I): Userpool;
} = {
    encode(message: Userpool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.organizationId !== '') {
            writer.uint32(18).string(message.organizationId);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Userpool_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork(),
            ).ldelim();
        });
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.domains) {
            writer.uint32(66).string(v!);
        }
        if (message.status !== 0) {
            writer.uint32(72).int32(message.status);
        }
        if (message.userSettings !== undefined) {
            UserSettings.encode(message.userSettings, writer.uint32(82).fork()).ldelim();
        }
        if (message.passwordQualityPolicy !== undefined) {
            PasswordQualityPolicy.encode(
                message.passwordQualityPolicy,
                writer.uint32(90).fork(),
            ).ldelim();
        }
        if (message.passwordLifetimePolicy !== undefined) {
            PasswordLifetimePolicy.encode(
                message.passwordLifetimePolicy,
                writer.uint32(98).fork(),
            ).ldelim();
        }
        if (message.bruteforceProtectionPolicy !== undefined) {
            BruteforceProtectionPolicy.encode(
                message.bruteforceProtectionPolicy,
                writer.uint32(106).fork(),
            ).ldelim();
        }
        if (message.passwordBlacklistPolicy !== undefined) {
            PasswordBlacklistPolicy.encode(
                message.passwordBlacklistPolicy,
                writer.uint32(114).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Userpool {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUserpool } as Userpool;
        message.labels = {};
        message.domains = [];
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
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = Userpool_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.domains.push(reader.string());
                    break;
                case 9:
                    message.status = reader.int32() as any;
                    break;
                case 10:
                    message.userSettings = UserSettings.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.passwordQualityPolicy = PasswordQualityPolicy.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 12:
                    message.passwordLifetimePolicy = PasswordLifetimePolicy.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 13:
                    message.bruteforceProtectionPolicy = BruteforceProtectionPolicy.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 14:
                    message.passwordBlacklistPolicy = PasswordBlacklistPolicy.decode(
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

    fromJSON(object: any): Userpool {
        const message = { ...baseUserpool } as Userpool;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.updatedAt =
            object.updatedAt !== undefined && object.updatedAt !== null
                ? fromJsonTimestamp(object.updatedAt)
                : undefined;
        message.domains = (object.domains ?? []).map((e: any) => String(e));
        message.status =
            object.status !== undefined && object.status !== null
                ? userpool_StatusFromJSON(object.status)
                : 0;
        message.userSettings =
            object.userSettings !== undefined && object.userSettings !== null
                ? UserSettings.fromJSON(object.userSettings)
                : undefined;
        message.passwordQualityPolicy =
            object.passwordQualityPolicy !== undefined && object.passwordQualityPolicy !== null
                ? PasswordQualityPolicy.fromJSON(object.passwordQualityPolicy)
                : undefined;
        message.passwordLifetimePolicy =
            object.passwordLifetimePolicy !== undefined && object.passwordLifetimePolicy !== null
                ? PasswordLifetimePolicy.fromJSON(object.passwordLifetimePolicy)
                : undefined;
        message.bruteforceProtectionPolicy =
            object.bruteforceProtectionPolicy !== undefined &&
            object.bruteforceProtectionPolicy !== null
                ? BruteforceProtectionPolicy.fromJSON(object.bruteforceProtectionPolicy)
                : undefined;
        message.passwordBlacklistPolicy =
            object.passwordBlacklistPolicy !== undefined && object.passwordBlacklistPolicy !== null
                ? PasswordBlacklistPolicy.fromJSON(object.passwordBlacklistPolicy)
                : undefined;
        return message;
    },

    toJSON(message: Userpool): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        if (message.domains) {
            obj.domains = message.domains.map((e) => e);
        } else {
            obj.domains = [];
        }
        message.status !== undefined && (obj.status = userpool_StatusToJSON(message.status));
        message.userSettings !== undefined &&
            (obj.userSettings = message.userSettings
                ? UserSettings.toJSON(message.userSettings)
                : undefined);
        message.passwordQualityPolicy !== undefined &&
            (obj.passwordQualityPolicy = message.passwordQualityPolicy
                ? PasswordQualityPolicy.toJSON(message.passwordQualityPolicy)
                : undefined);
        message.passwordLifetimePolicy !== undefined &&
            (obj.passwordLifetimePolicy = message.passwordLifetimePolicy
                ? PasswordLifetimePolicy.toJSON(message.passwordLifetimePolicy)
                : undefined);
        message.bruteforceProtectionPolicy !== undefined &&
            (obj.bruteforceProtectionPolicy = message.bruteforceProtectionPolicy
                ? BruteforceProtectionPolicy.toJSON(message.bruteforceProtectionPolicy)
                : undefined);
        message.passwordBlacklistPolicy !== undefined &&
            (obj.passwordBlacklistPolicy = message.passwordBlacklistPolicy
                ? PasswordBlacklistPolicy.toJSON(message.passwordBlacklistPolicy)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Userpool>, I>>(object: I): Userpool {
        const message = { ...baseUserpool } as Userpool;
        message.id = object.id ?? '';
        message.organizationId = object.organizationId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        message.domains = object.domains?.map((e) => e) || [];
        message.status = object.status ?? 0;
        message.userSettings =
            object.userSettings !== undefined && object.userSettings !== null
                ? UserSettings.fromPartial(object.userSettings)
                : undefined;
        message.passwordQualityPolicy =
            object.passwordQualityPolicy !== undefined && object.passwordQualityPolicy !== null
                ? PasswordQualityPolicy.fromPartial(object.passwordQualityPolicy)
                : undefined;
        message.passwordLifetimePolicy =
            object.passwordLifetimePolicy !== undefined && object.passwordLifetimePolicy !== null
                ? PasswordLifetimePolicy.fromPartial(object.passwordLifetimePolicy)
                : undefined;
        message.bruteforceProtectionPolicy =
            object.bruteforceProtectionPolicy !== undefined &&
            object.bruteforceProtectionPolicy !== null
                ? BruteforceProtectionPolicy.fromPartial(object.bruteforceProtectionPolicy)
                : undefined;
        message.passwordBlacklistPolicy =
            object.passwordBlacklistPolicy !== undefined && object.passwordBlacklistPolicy !== null
                ? PasswordBlacklistPolicy.fromPartial(object.passwordBlacklistPolicy)
                : undefined;
        return message;
    },
};

const baseUserpool_LabelsEntry: object = { key: '', value: '' };

export const Userpool_LabelsEntry: {
    encode(message: Userpool_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Userpool_LabelsEntry;
    fromJSON(object: any): Userpool_LabelsEntry;
    toJSON(message: Userpool_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<Userpool_LabelsEntry>, I>>(object: I): Userpool_LabelsEntry;
} = {
    encode(message: Userpool_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Userpool_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUserpool_LabelsEntry } as Userpool_LabelsEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Userpool_LabelsEntry {
        const message = { ...baseUserpool_LabelsEntry } as Userpool_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Userpool_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Userpool_LabelsEntry>, I>>(
        object: I,
    ): Userpool_LabelsEntry {
        const message = { ...baseUserpool_LabelsEntry } as Userpool_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseUserSettings: object = {
    allowEditSelfPassword: false,
    allowEditSelfInfo: false,
    allowEditSelfContacts: false,
    allowEditSelfLogin: false,
};

export const UserSettings: {
    encode(message: UserSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserSettings;
    fromJSON(object: any): UserSettings;
    toJSON(message: UserSettings): unknown;
    fromPartial<I extends Exact<DeepPartial<UserSettings>, I>>(object: I): UserSettings;
} = {
    encode(message: UserSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.allowEditSelfPassword === true) {
            writer.uint32(8).bool(message.allowEditSelfPassword);
        }
        if (message.allowEditSelfInfo === true) {
            writer.uint32(16).bool(message.allowEditSelfInfo);
        }
        if (message.allowEditSelfContacts === true) {
            writer.uint32(24).bool(message.allowEditSelfContacts);
        }
        if (message.allowEditSelfLogin === true) {
            writer.uint32(32).bool(message.allowEditSelfLogin);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UserSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUserSettings } as UserSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowEditSelfPassword = reader.bool();
                    break;
                case 2:
                    message.allowEditSelfInfo = reader.bool();
                    break;
                case 3:
                    message.allowEditSelfContacts = reader.bool();
                    break;
                case 4:
                    message.allowEditSelfLogin = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UserSettings {
        const message = { ...baseUserSettings } as UserSettings;
        message.allowEditSelfPassword =
            object.allowEditSelfPassword !== undefined && object.allowEditSelfPassword !== null
                ? Boolean(object.allowEditSelfPassword)
                : false;
        message.allowEditSelfInfo =
            object.allowEditSelfInfo !== undefined && object.allowEditSelfInfo !== null
                ? Boolean(object.allowEditSelfInfo)
                : false;
        message.allowEditSelfContacts =
            object.allowEditSelfContacts !== undefined && object.allowEditSelfContacts !== null
                ? Boolean(object.allowEditSelfContacts)
                : false;
        message.allowEditSelfLogin =
            object.allowEditSelfLogin !== undefined && object.allowEditSelfLogin !== null
                ? Boolean(object.allowEditSelfLogin)
                : false;
        return message;
    },

    toJSON(message: UserSettings): unknown {
        const obj: any = {};
        message.allowEditSelfPassword !== undefined &&
            (obj.allowEditSelfPassword = message.allowEditSelfPassword);
        message.allowEditSelfInfo !== undefined &&
            (obj.allowEditSelfInfo = message.allowEditSelfInfo);
        message.allowEditSelfContacts !== undefined &&
            (obj.allowEditSelfContacts = message.allowEditSelfContacts);
        message.allowEditSelfLogin !== undefined &&
            (obj.allowEditSelfLogin = message.allowEditSelfLogin);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UserSettings>, I>>(object: I): UserSettings {
        const message = { ...baseUserSettings } as UserSettings;
        message.allowEditSelfPassword = object.allowEditSelfPassword ?? false;
        message.allowEditSelfInfo = object.allowEditSelfInfo ?? false;
        message.allowEditSelfContacts = object.allowEditSelfContacts ?? false;
        message.allowEditSelfLogin = object.allowEditSelfLogin ?? false;
        return message;
    },
};

const baseDomain: object = { domain: '', status: 0, statusCode: '', deletionProtection: false };

export const Domain: {
    encode(message: Domain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Domain;
    fromJSON(object: any): Domain;
    toJSON(message: Domain): unknown;
    fromPartial<I extends Exact<DeepPartial<Domain>, I>>(object: I): Domain;
} = {
    encode(message: Domain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.domain !== '') {
            writer.uint32(10).string(message.domain);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        if (message.statusCode !== '') {
            writer.uint32(26).string(message.statusCode);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.validatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.validatedAt), writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.challenges) {
            DomainChallenge.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(64).bool(message.deletionProtection);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Domain {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDomain } as Domain;
        message.challenges = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.domain = reader.string();
                    break;
                case 2:
                    message.status = reader.int32() as any;
                    break;
                case 3:
                    message.statusCode = reader.string();
                    break;
                case 4:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.validatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.challenges.push(DomainChallenge.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.deletionProtection = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Domain {
        const message = { ...baseDomain } as Domain;
        message.domain =
            object.domain !== undefined && object.domain !== null ? String(object.domain) : '';
        message.status =
            object.status !== undefined && object.status !== null
                ? domain_StatusFromJSON(object.status)
                : 0;
        message.statusCode =
            object.statusCode !== undefined && object.statusCode !== null
                ? String(object.statusCode)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.validatedAt =
            object.validatedAt !== undefined && object.validatedAt !== null
                ? fromJsonTimestamp(object.validatedAt)
                : undefined;
        message.challenges = (object.challenges ?? []).map((e: any) => DomainChallenge.fromJSON(e));
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        return message;
    },

    toJSON(message: Domain): unknown {
        const obj: any = {};
        message.domain !== undefined && (obj.domain = message.domain);
        message.status !== undefined && (obj.status = domain_StatusToJSON(message.status));
        message.statusCode !== undefined && (obj.statusCode = message.statusCode);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.validatedAt !== undefined && (obj.validatedAt = message.validatedAt.toISOString());
        if (message.challenges) {
            obj.challenges = message.challenges.map((e) =>
                e ? DomainChallenge.toJSON(e) : undefined,
            );
        } else {
            obj.challenges = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Domain>, I>>(object: I): Domain {
        const message = { ...baseDomain } as Domain;
        message.domain = object.domain ?? '';
        message.status = object.status ?? 0;
        message.statusCode = object.statusCode ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.validatedAt = object.validatedAt ?? undefined;
        message.challenges = object.challenges?.map((e) => DomainChallenge.fromPartial(e)) || [];
        message.deletionProtection = object.deletionProtection ?? false;
        return message;
    },
};

const baseDomainChallenge: object = { type: 0, status: 0 };

export const DomainChallenge: {
    encode(message: DomainChallenge, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DomainChallenge;
    fromJSON(object: any): DomainChallenge;
    toJSON(message: DomainChallenge): unknown;
    fromPartial<I extends Exact<DeepPartial<DomainChallenge>, I>>(object: I): DomainChallenge;
} = {
    encode(message: DomainChallenge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(10).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(18).fork()).ldelim();
        }
        if (message.type !== 0) {
            writer.uint32(32).int32(message.type);
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.dnsChallenge !== undefined) {
            DomainChallenge_DnsRecord.encode(
                message.dnsChallenge,
                writer.uint32(50).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DomainChallenge {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDomainChallenge } as DomainChallenge;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.type = reader.int32() as any;
                    break;
                case 5:
                    message.status = reader.int32() as any;
                    break;
                case 6:
                    message.dnsChallenge = DomainChallenge_DnsRecord.decode(
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

    fromJSON(object: any): DomainChallenge {
        const message = { ...baseDomainChallenge } as DomainChallenge;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.updatedAt =
            object.updatedAt !== undefined && object.updatedAt !== null
                ? fromJsonTimestamp(object.updatedAt)
                : undefined;
        message.type =
            object.type !== undefined && object.type !== null
                ? domainChallenge_TypeFromJSON(object.type)
                : 0;
        message.status =
            object.status !== undefined && object.status !== null
                ? domainChallenge_StatusFromJSON(object.status)
                : 0;
        message.dnsChallenge =
            object.dnsChallenge !== undefined && object.dnsChallenge !== null
                ? DomainChallenge_DnsRecord.fromJSON(object.dnsChallenge)
                : undefined;
        return message;
    },

    toJSON(message: DomainChallenge): unknown {
        const obj: any = {};
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        message.type !== undefined && (obj.type = domainChallenge_TypeToJSON(message.type));
        message.status !== undefined && (obj.status = domainChallenge_StatusToJSON(message.status));
        message.dnsChallenge !== undefined &&
            (obj.dnsChallenge = message.dnsChallenge
                ? DomainChallenge_DnsRecord.toJSON(message.dnsChallenge)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DomainChallenge>, I>>(object: I): DomainChallenge {
        const message = { ...baseDomainChallenge } as DomainChallenge;
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        message.type = object.type ?? 0;
        message.status = object.status ?? 0;
        message.dnsChallenge =
            object.dnsChallenge !== undefined && object.dnsChallenge !== null
                ? DomainChallenge_DnsRecord.fromPartial(object.dnsChallenge)
                : undefined;
        return message;
    },
};

const baseDomainChallenge_DnsRecord: object = { name: '', type: 0, value: '' };

export const DomainChallenge_DnsRecord: {
    encode(message: DomainChallenge_DnsRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DomainChallenge_DnsRecord;
    fromJSON(object: any): DomainChallenge_DnsRecord;
    toJSON(message: DomainChallenge_DnsRecord): unknown;
    fromPartial<I extends Exact<DeepPartial<DomainChallenge_DnsRecord>, I>>(object: I): DomainChallenge_DnsRecord;
} = {
    encode(
        message: DomainChallenge_DnsRecord,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        if (message.value !== '') {
            writer.uint32(26).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DomainChallenge_DnsRecord {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDomainChallenge_DnsRecord } as DomainChallenge_DnsRecord;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.type = reader.int32() as any;
                    break;
                case 3:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DomainChallenge_DnsRecord {
        const message = { ...baseDomainChallenge_DnsRecord } as DomainChallenge_DnsRecord;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.type =
            object.type !== undefined && object.type !== null
                ? domainChallenge_DnsRecord_TypeFromJSON(object.type)
                : 0;
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: DomainChallenge_DnsRecord): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.type !== undefined &&
            (obj.type = domainChallenge_DnsRecord_TypeToJSON(message.type));
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DomainChallenge_DnsRecord>, I>>(
        object: I,
    ): DomainChallenge_DnsRecord {
        const message = { ...baseDomainChallenge_DnsRecord } as DomainChallenge_DnsRecord;
        message.name = object.name ?? '';
        message.type = object.type ?? 0;
        message.value = object.value ?? '';
        return message;
    },
};

const basePasswordQualityPolicy: object = {
    allowSimilar: false,
    maxLength: 0,
    minLength: 0,
    matchLength: 0,
};

export const PasswordQualityPolicy: {
    encode(message: PasswordQualityPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordQualityPolicy;
    fromJSON(object: any): PasswordQualityPolicy;
    toJSON(message: PasswordQualityPolicy): unknown;
    fromPartial<I extends Exact<DeepPartial<PasswordQualityPolicy>, I>>(object: I): PasswordQualityPolicy;
} = {
    encode(message: PasswordQualityPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.allowSimilar === true) {
            writer.uint32(8).bool(message.allowSimilar);
        }
        if (message.maxLength !== 0) {
            writer.uint32(16).int64(message.maxLength);
        }
        if (message.minLength !== 0) {
            writer.uint32(24).int64(message.minLength);
        }
        if (message.matchLength !== 0) {
            writer.uint32(32).int64(message.matchLength);
        }
        if (message.requiredClasses !== undefined) {
            PasswordQualityPolicy_RequiredClasses.encode(
                message.requiredClasses,
                writer.uint32(42).fork(),
            ).ldelim();
        }
        if (message.minLengthByClassSettings !== undefined) {
            PasswordQualityPolicy_MinLengthByClassSettings.encode(
                message.minLengthByClassSettings,
                writer.uint32(50).fork(),
            ).ldelim();
        }
        if (message.fixed !== undefined) {
            PasswordQualityPolicy_Fixed.encode(message.fixed, writer.uint32(58).fork()).ldelim();
        }
        if (message.smart !== undefined) {
            PasswordQualityPolicy_Smart.encode(message.smart, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordQualityPolicy {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePasswordQualityPolicy } as PasswordQualityPolicy;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowSimilar = reader.bool();
                    break;
                case 2:
                    message.maxLength = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.minLength = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.matchLength = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.requiredClasses = PasswordQualityPolicy_RequiredClasses.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 6:
                    message.minLengthByClassSettings =
                        PasswordQualityPolicy_MinLengthByClassSettings.decode(
                            reader,
                            reader.uint32(),
                        );
                    break;
                case 7:
                    message.fixed = PasswordQualityPolicy_Fixed.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.smart = PasswordQualityPolicy_Smart.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PasswordQualityPolicy {
        const message = { ...basePasswordQualityPolicy } as PasswordQualityPolicy;
        message.allowSimilar =
            object.allowSimilar !== undefined && object.allowSimilar !== null
                ? Boolean(object.allowSimilar)
                : false;
        message.maxLength =
            object.maxLength !== undefined && object.maxLength !== null
                ? Number(object.maxLength)
                : 0;
        message.minLength =
            object.minLength !== undefined && object.minLength !== null
                ? Number(object.minLength)
                : 0;
        message.matchLength =
            object.matchLength !== undefined && object.matchLength !== null
                ? Number(object.matchLength)
                : 0;
        message.requiredClasses =
            object.requiredClasses !== undefined && object.requiredClasses !== null
                ? PasswordQualityPolicy_RequiredClasses.fromJSON(object.requiredClasses)
                : undefined;
        message.minLengthByClassSettings =
            object.minLengthByClassSettings !== undefined &&
            object.minLengthByClassSettings !== null
                ? PasswordQualityPolicy_MinLengthByClassSettings.fromJSON(
                      object.minLengthByClassSettings,
                  )
                : undefined;
        message.fixed =
            object.fixed !== undefined && object.fixed !== null
                ? PasswordQualityPolicy_Fixed.fromJSON(object.fixed)
                : undefined;
        message.smart =
            object.smart !== undefined && object.smart !== null
                ? PasswordQualityPolicy_Smart.fromJSON(object.smart)
                : undefined;
        return message;
    },

    toJSON(message: PasswordQualityPolicy): unknown {
        const obj: any = {};
        message.allowSimilar !== undefined && (obj.allowSimilar = message.allowSimilar);
        message.maxLength !== undefined && (obj.maxLength = Math.round(message.maxLength));
        message.minLength !== undefined && (obj.minLength = Math.round(message.minLength));
        message.matchLength !== undefined && (obj.matchLength = Math.round(message.matchLength));
        message.requiredClasses !== undefined &&
            (obj.requiredClasses = message.requiredClasses
                ? PasswordQualityPolicy_RequiredClasses.toJSON(message.requiredClasses)
                : undefined);
        message.minLengthByClassSettings !== undefined &&
            (obj.minLengthByClassSettings = message.minLengthByClassSettings
                ? PasswordQualityPolicy_MinLengthByClassSettings.toJSON(
                      message.minLengthByClassSettings,
                  )
                : undefined);
        message.fixed !== undefined &&
            (obj.fixed = message.fixed
                ? PasswordQualityPolicy_Fixed.toJSON(message.fixed)
                : undefined);
        message.smart !== undefined &&
            (obj.smart = message.smart
                ? PasswordQualityPolicy_Smart.toJSON(message.smart)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PasswordQualityPolicy>, I>>(
        object: I,
    ): PasswordQualityPolicy {
        const message = { ...basePasswordQualityPolicy } as PasswordQualityPolicy;
        message.allowSimilar = object.allowSimilar ?? false;
        message.maxLength = object.maxLength ?? 0;
        message.minLength = object.minLength ?? 0;
        message.matchLength = object.matchLength ?? 0;
        message.requiredClasses =
            object.requiredClasses !== undefined && object.requiredClasses !== null
                ? PasswordQualityPolicy_RequiredClasses.fromPartial(object.requiredClasses)
                : undefined;
        message.minLengthByClassSettings =
            object.minLengthByClassSettings !== undefined &&
            object.minLengthByClassSettings !== null
                ? PasswordQualityPolicy_MinLengthByClassSettings.fromPartial(
                      object.minLengthByClassSettings,
                  )
                : undefined;
        message.fixed =
            object.fixed !== undefined && object.fixed !== null
                ? PasswordQualityPolicy_Fixed.fromPartial(object.fixed)
                : undefined;
        message.smart =
            object.smart !== undefined && object.smart !== null
                ? PasswordQualityPolicy_Smart.fromPartial(object.smart)
                : undefined;
        return message;
    },
};

const basePasswordQualityPolicy_RequiredClasses: object = {
    lowers: false,
    uppers: false,
    digits: false,
    specials: false,
};

export const PasswordQualityPolicy_RequiredClasses: {
    encode(message: PasswordQualityPolicy_RequiredClasses, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordQualityPolicy_RequiredClasses;
    fromJSON(object: any): PasswordQualityPolicy_RequiredClasses;
    toJSON(message: PasswordQualityPolicy_RequiredClasses): unknown;
    fromPartial<I extends Exact<DeepPartial<PasswordQualityPolicy_RequiredClasses>, I>>(object: I): PasswordQualityPolicy_RequiredClasses;
} = {
    encode(
        message: PasswordQualityPolicy_RequiredClasses,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.lowers === true) {
            writer.uint32(8).bool(message.lowers);
        }
        if (message.uppers === true) {
            writer.uint32(16).bool(message.uppers);
        }
        if (message.digits === true) {
            writer.uint32(24).bool(message.digits);
        }
        if (message.specials === true) {
            writer.uint32(32).bool(message.specials);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordQualityPolicy_RequiredClasses {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePasswordQualityPolicy_RequiredClasses,
        } as PasswordQualityPolicy_RequiredClasses;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lowers = reader.bool();
                    break;
                case 2:
                    message.uppers = reader.bool();
                    break;
                case 3:
                    message.digits = reader.bool();
                    break;
                case 4:
                    message.specials = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PasswordQualityPolicy_RequiredClasses {
        const message = {
            ...basePasswordQualityPolicy_RequiredClasses,
        } as PasswordQualityPolicy_RequiredClasses;
        message.lowers =
            object.lowers !== undefined && object.lowers !== null ? Boolean(object.lowers) : false;
        message.uppers =
            object.uppers !== undefined && object.uppers !== null ? Boolean(object.uppers) : false;
        message.digits =
            object.digits !== undefined && object.digits !== null ? Boolean(object.digits) : false;
        message.specials =
            object.specials !== undefined && object.specials !== null
                ? Boolean(object.specials)
                : false;
        return message;
    },

    toJSON(message: PasswordQualityPolicy_RequiredClasses): unknown {
        const obj: any = {};
        message.lowers !== undefined && (obj.lowers = message.lowers);
        message.uppers !== undefined && (obj.uppers = message.uppers);
        message.digits !== undefined && (obj.digits = message.digits);
        message.specials !== undefined && (obj.specials = message.specials);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PasswordQualityPolicy_RequiredClasses>, I>>(
        object: I,
    ): PasswordQualityPolicy_RequiredClasses {
        const message = {
            ...basePasswordQualityPolicy_RequiredClasses,
        } as PasswordQualityPolicy_RequiredClasses;
        message.lowers = object.lowers ?? false;
        message.uppers = object.uppers ?? false;
        message.digits = object.digits ?? false;
        message.specials = object.specials ?? false;
        return message;
    },
};

const basePasswordQualityPolicy_MinLengthByClassSettings: object = { one: 0, two: 0, three: 0 };

export const PasswordQualityPolicy_MinLengthByClassSettings: {
    encode(message: PasswordQualityPolicy_MinLengthByClassSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordQualityPolicy_MinLengthByClassSettings;
    fromJSON(object: any): PasswordQualityPolicy_MinLengthByClassSettings;
    toJSON(message: PasswordQualityPolicy_MinLengthByClassSettings): unknown;
    fromPartial<I extends Exact<DeepPartial<PasswordQualityPolicy_MinLengthByClassSettings>, I>>(object: I): PasswordQualityPolicy_MinLengthByClassSettings;
} = {
    encode(
        message: PasswordQualityPolicy_MinLengthByClassSettings,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.one !== 0) {
            writer.uint32(8).int64(message.one);
        }
        if (message.two !== 0) {
            writer.uint32(16).int64(message.two);
        }
        if (message.three !== 0) {
            writer.uint32(24).int64(message.three);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): PasswordQualityPolicy_MinLengthByClassSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePasswordQualityPolicy_MinLengthByClassSettings,
        } as PasswordQualityPolicy_MinLengthByClassSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.one = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.two = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.three = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PasswordQualityPolicy_MinLengthByClassSettings {
        const message = {
            ...basePasswordQualityPolicy_MinLengthByClassSettings,
        } as PasswordQualityPolicy_MinLengthByClassSettings;
        message.one = object.one !== undefined && object.one !== null ? Number(object.one) : 0;
        message.two = object.two !== undefined && object.two !== null ? Number(object.two) : 0;
        message.three =
            object.three !== undefined && object.three !== null ? Number(object.three) : 0;
        return message;
    },

    toJSON(message: PasswordQualityPolicy_MinLengthByClassSettings): unknown {
        const obj: any = {};
        message.one !== undefined && (obj.one = Math.round(message.one));
        message.two !== undefined && (obj.two = Math.round(message.two));
        message.three !== undefined && (obj.three = Math.round(message.three));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PasswordQualityPolicy_MinLengthByClassSettings>, I>>(
        object: I,
    ): PasswordQualityPolicy_MinLengthByClassSettings {
        const message = {
            ...basePasswordQualityPolicy_MinLengthByClassSettings,
        } as PasswordQualityPolicy_MinLengthByClassSettings;
        message.one = object.one ?? 0;
        message.two = object.two ?? 0;
        message.three = object.three ?? 0;
        return message;
    },
};

const basePasswordQualityPolicy_Fixed: object = {
    lowersRequired: false,
    uppersRequired: false,
    digitsRequired: false,
    specialsRequired: false,
    minLength: 0,
};

export const PasswordQualityPolicy_Fixed: {
    encode(message: PasswordQualityPolicy_Fixed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordQualityPolicy_Fixed;
    fromJSON(object: any): PasswordQualityPolicy_Fixed;
    toJSON(message: PasswordQualityPolicy_Fixed): unknown;
    fromPartial<I extends Exact<DeepPartial<PasswordQualityPolicy_Fixed>, I>>(object: I): PasswordQualityPolicy_Fixed;
} = {
    encode(
        message: PasswordQualityPolicy_Fixed,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.lowersRequired === true) {
            writer.uint32(8).bool(message.lowersRequired);
        }
        if (message.uppersRequired === true) {
            writer.uint32(16).bool(message.uppersRequired);
        }
        if (message.digitsRequired === true) {
            writer.uint32(24).bool(message.digitsRequired);
        }
        if (message.specialsRequired === true) {
            writer.uint32(32).bool(message.specialsRequired);
        }
        if (message.minLength !== 0) {
            writer.uint32(40).int64(message.minLength);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordQualityPolicy_Fixed {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePasswordQualityPolicy_Fixed } as PasswordQualityPolicy_Fixed;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lowersRequired = reader.bool();
                    break;
                case 2:
                    message.uppersRequired = reader.bool();
                    break;
                case 3:
                    message.digitsRequired = reader.bool();
                    break;
                case 4:
                    message.specialsRequired = reader.bool();
                    break;
                case 5:
                    message.minLength = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PasswordQualityPolicy_Fixed {
        const message = { ...basePasswordQualityPolicy_Fixed } as PasswordQualityPolicy_Fixed;
        message.lowersRequired =
            object.lowersRequired !== undefined && object.lowersRequired !== null
                ? Boolean(object.lowersRequired)
                : false;
        message.uppersRequired =
            object.uppersRequired !== undefined && object.uppersRequired !== null
                ? Boolean(object.uppersRequired)
                : false;
        message.digitsRequired =
            object.digitsRequired !== undefined && object.digitsRequired !== null
                ? Boolean(object.digitsRequired)
                : false;
        message.specialsRequired =
            object.specialsRequired !== undefined && object.specialsRequired !== null
                ? Boolean(object.specialsRequired)
                : false;
        message.minLength =
            object.minLength !== undefined && object.minLength !== null
                ? Number(object.minLength)
                : 0;
        return message;
    },

    toJSON(message: PasswordQualityPolicy_Fixed): unknown {
        const obj: any = {};
        message.lowersRequired !== undefined && (obj.lowersRequired = message.lowersRequired);
        message.uppersRequired !== undefined && (obj.uppersRequired = message.uppersRequired);
        message.digitsRequired !== undefined && (obj.digitsRequired = message.digitsRequired);
        message.specialsRequired !== undefined && (obj.specialsRequired = message.specialsRequired);
        message.minLength !== undefined && (obj.minLength = Math.round(message.minLength));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PasswordQualityPolicy_Fixed>, I>>(
        object: I,
    ): PasswordQualityPolicy_Fixed {
        const message = { ...basePasswordQualityPolicy_Fixed } as PasswordQualityPolicy_Fixed;
        message.lowersRequired = object.lowersRequired ?? false;
        message.uppersRequired = object.uppersRequired ?? false;
        message.digitsRequired = object.digitsRequired ?? false;
        message.specialsRequired = object.specialsRequired ?? false;
        message.minLength = object.minLength ?? 0;
        return message;
    },
};

const basePasswordQualityPolicy_Smart: object = {
    oneClass: 0,
    twoClasses: 0,
    threeClasses: 0,
    fourClasses: 0,
};

export const PasswordQualityPolicy_Smart: {
    encode(message: PasswordQualityPolicy_Smart, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordQualityPolicy_Smart;
    fromJSON(object: any): PasswordQualityPolicy_Smart;
    toJSON(message: PasswordQualityPolicy_Smart): unknown;
    fromPartial<I extends Exact<DeepPartial<PasswordQualityPolicy_Smart>, I>>(object: I): PasswordQualityPolicy_Smart;
} = {
    encode(
        message: PasswordQualityPolicy_Smart,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.oneClass !== 0) {
            writer.uint32(8).int64(message.oneClass);
        }
        if (message.twoClasses !== 0) {
            writer.uint32(16).int64(message.twoClasses);
        }
        if (message.threeClasses !== 0) {
            writer.uint32(24).int64(message.threeClasses);
        }
        if (message.fourClasses !== 0) {
            writer.uint32(32).int64(message.fourClasses);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordQualityPolicy_Smart {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePasswordQualityPolicy_Smart } as PasswordQualityPolicy_Smart;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oneClass = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.twoClasses = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.threeClasses = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.fourClasses = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PasswordQualityPolicy_Smart {
        const message = { ...basePasswordQualityPolicy_Smart } as PasswordQualityPolicy_Smart;
        message.oneClass =
            object.oneClass !== undefined && object.oneClass !== null ? Number(object.oneClass) : 0;
        message.twoClasses =
            object.twoClasses !== undefined && object.twoClasses !== null
                ? Number(object.twoClasses)
                : 0;
        message.threeClasses =
            object.threeClasses !== undefined && object.threeClasses !== null
                ? Number(object.threeClasses)
                : 0;
        message.fourClasses =
            object.fourClasses !== undefined && object.fourClasses !== null
                ? Number(object.fourClasses)
                : 0;
        return message;
    },

    toJSON(message: PasswordQualityPolicy_Smart): unknown {
        const obj: any = {};
        message.oneClass !== undefined && (obj.oneClass = Math.round(message.oneClass));
        message.twoClasses !== undefined && (obj.twoClasses = Math.round(message.twoClasses));
        message.threeClasses !== undefined && (obj.threeClasses = Math.round(message.threeClasses));
        message.fourClasses !== undefined && (obj.fourClasses = Math.round(message.fourClasses));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PasswordQualityPolicy_Smart>, I>>(
        object: I,
    ): PasswordQualityPolicy_Smart {
        const message = { ...basePasswordQualityPolicy_Smart } as PasswordQualityPolicy_Smart;
        message.oneClass = object.oneClass ?? 0;
        message.twoClasses = object.twoClasses ?? 0;
        message.threeClasses = object.threeClasses ?? 0;
        message.fourClasses = object.fourClasses ?? 0;
        return message;
    },
};

const basePasswordLifetimePolicy: object = { minDaysCount: 0, maxDaysCount: 0 };

export const PasswordLifetimePolicy: {
    encode(message: PasswordLifetimePolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordLifetimePolicy;
    fromJSON(object: any): PasswordLifetimePolicy;
    toJSON(message: PasswordLifetimePolicy): unknown;
    fromPartial<I extends Exact<DeepPartial<PasswordLifetimePolicy>, I>>(object: I): PasswordLifetimePolicy;
} = {
    encode(message: PasswordLifetimePolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.minDaysCount !== 0) {
            writer.uint32(8).int64(message.minDaysCount);
        }
        if (message.maxDaysCount !== 0) {
            writer.uint32(16).int64(message.maxDaysCount);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordLifetimePolicy {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePasswordLifetimePolicy } as PasswordLifetimePolicy;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minDaysCount = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.maxDaysCount = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PasswordLifetimePolicy {
        const message = { ...basePasswordLifetimePolicy } as PasswordLifetimePolicy;
        message.minDaysCount =
            object.minDaysCount !== undefined && object.minDaysCount !== null
                ? Number(object.minDaysCount)
                : 0;
        message.maxDaysCount =
            object.maxDaysCount !== undefined && object.maxDaysCount !== null
                ? Number(object.maxDaysCount)
                : 0;
        return message;
    },

    toJSON(message: PasswordLifetimePolicy): unknown {
        const obj: any = {};
        message.minDaysCount !== undefined && (obj.minDaysCount = Math.round(message.minDaysCount));
        message.maxDaysCount !== undefined && (obj.maxDaysCount = Math.round(message.maxDaysCount));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PasswordLifetimePolicy>, I>>(
        object: I,
    ): PasswordLifetimePolicy {
        const message = { ...basePasswordLifetimePolicy } as PasswordLifetimePolicy;
        message.minDaysCount = object.minDaysCount ?? 0;
        message.maxDaysCount = object.maxDaysCount ?? 0;
        return message;
    },
};

const baseBruteforceProtectionPolicy: object = { attempts: 0 };

export const BruteforceProtectionPolicy: {
    encode(message: BruteforceProtectionPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BruteforceProtectionPolicy;
    fromJSON(object: any): BruteforceProtectionPolicy;
    toJSON(message: BruteforceProtectionPolicy): unknown;
    fromPartial<I extends Exact<DeepPartial<BruteforceProtectionPolicy>, I>>(object: I): BruteforceProtectionPolicy;
} = {
    encode(
        message: BruteforceProtectionPolicy,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.window !== undefined) {
            Duration.encode(message.window, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            Duration.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        if (message.attempts !== 0) {
            writer.uint32(24).int64(message.attempts);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BruteforceProtectionPolicy {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBruteforceProtectionPolicy } as BruteforceProtectionPolicy;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.window = Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.block = Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.attempts = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BruteforceProtectionPolicy {
        const message = { ...baseBruteforceProtectionPolicy } as BruteforceProtectionPolicy;
        message.window =
            object.window !== undefined && object.window !== null
                ? Duration.fromJSON(object.window)
                : undefined;
        message.block =
            object.block !== undefined && object.block !== null
                ? Duration.fromJSON(object.block)
                : undefined;
        message.attempts =
            object.attempts !== undefined && object.attempts !== null ? Number(object.attempts) : 0;
        return message;
    },

    toJSON(message: BruteforceProtectionPolicy): unknown {
        const obj: any = {};
        message.window !== undefined &&
            (obj.window = message.window ? Duration.toJSON(message.window) : undefined);
        message.block !== undefined &&
            (obj.block = message.block ? Duration.toJSON(message.block) : undefined);
        message.attempts !== undefined && (obj.attempts = Math.round(message.attempts));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BruteforceProtectionPolicy>, I>>(
        object: I,
    ): BruteforceProtectionPolicy {
        const message = { ...baseBruteforceProtectionPolicy } as BruteforceProtectionPolicy;
        message.window =
            object.window !== undefined && object.window !== null
                ? Duration.fromPartial(object.window)
                : undefined;
        message.block =
            object.block !== undefined && object.block !== null
                ? Duration.fromPartial(object.block)
                : undefined;
        message.attempts = object.attempts ?? 0;
        return message;
    },
};

const basePasswordBlacklistPolicy: object = {};

export const PasswordBlacklistPolicy: {
    encode(message: PasswordBlacklistPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordBlacklistPolicy;
    fromJSON(object: any): PasswordBlacklistPolicy;
    toJSON(message: PasswordBlacklistPolicy): unknown;
    fromPartial<I extends Exact<DeepPartial<PasswordBlacklistPolicy>, I>>(object: I): PasswordBlacklistPolicy;
} = {
    encode(message: PasswordBlacklistPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.checkCommon !== undefined) {
            BoolValue.encode({ value: message.checkCommon! }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordBlacklistPolicy {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePasswordBlacklistPolicy } as PasswordBlacklistPolicy;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.checkCommon = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PasswordBlacklistPolicy {
        const message = { ...basePasswordBlacklistPolicy } as PasswordBlacklistPolicy;
        message.checkCommon =
            object.checkCommon !== undefined && object.checkCommon !== null
                ? Boolean(object.checkCommon)
                : undefined;
        return message;
    },

    toJSON(message: PasswordBlacklistPolicy): unknown {
        const obj: any = {};
        message.checkCommon !== undefined && (obj.checkCommon = message.checkCommon);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PasswordBlacklistPolicy>, I>>(
        object: I,
    ): PasswordBlacklistPolicy {
        const message = { ...basePasswordBlacklistPolicy } as PasswordBlacklistPolicy;
        message.checkCommon = object.checkCommon ?? undefined;
        return message;
    },
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
