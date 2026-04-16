/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Duration } from '../../../../../google/protobuf/duration';
import { Timestamp } from '../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.organizationmanager.v1.saml';

export enum BindingType {
    BINDING_TYPE_UNSPECIFIED = 0,
    /** POST - HTTP POST binding. */
    POST = 1,
    /** REDIRECT - HTTP redirect binding. */
    REDIRECT = 2,
    /** ARTIFACT - HTTP artifact binding. */
    ARTIFACT = 3,
    UNRECOGNIZED = -1,
}

export function bindingTypeFromJSON(object: any): BindingType {
    switch (object) {
        case 0:
        case 'BINDING_TYPE_UNSPECIFIED':
            return BindingType.BINDING_TYPE_UNSPECIFIED;
        case 1:
        case 'POST':
            return BindingType.POST;
        case 2:
        case 'REDIRECT':
            return BindingType.REDIRECT;
        case 3:
        case 'ARTIFACT':
            return BindingType.ARTIFACT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return BindingType.UNRECOGNIZED;
    }
}

export function bindingTypeToJSON(object: BindingType): string {
    switch (object) {
        case BindingType.BINDING_TYPE_UNSPECIFIED:
            return 'BINDING_TYPE_UNSPECIFIED';
        case BindingType.POST:
            return 'POST';
        case BindingType.REDIRECT:
            return 'REDIRECT';
        case BindingType.ARTIFACT:
            return 'ARTIFACT';
        default:
            return 'UNKNOWN';
    }
}

/**
 * A federation.
 * For more information, see [SAML-compatible identity federations](/docs/iam/concepts/federations).
 */
export interface Federation {
    /** ID of the federation. */
    id: string;
    /** ID of the organization that the federation belongs to. */
    organizationId: string;
    /** Name of the federation. */
    name: string;
    /** Description of the federation. */
    description: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /**
     * Browser cookie lifetime in seconds.
     * If the cookie is still valid, the management console
     * authenticates the user immediately and redirects them to the home page.
     */
    cookieMaxAge?: Duration;
    /**
     * Add new users automatically on successful authentication.
     * The user becomes member of the organization automatically,
     * but you need to grant other roles to them.
     *
     * If the value is `false`, users who aren't added to the organization
     * can't log in, even if they have authenticated on your server.
     */
    autoCreateAccountOnLogin: boolean;
    /**
     * ID of the IdP server to be used for authentication.
     * The IdP server also responds to IAM with this ID after the user authenticates.
     */
    issuer: string;
    /**
     * Single sign-on endpoint binding type. Most Identity Providers support the `POST` binding type.
     *
     * SAML Binding is a mapping of a SAML protocol message onto standard messaging
     * formats and/or communications protocols.
     */
    ssoBinding: BindingType;
    /**
     * Single sign-on endpoint URL.
     * Specify the link to the IdP login page here.
     */
    ssoUrl: string;
    /** Federation security settings. */
    securitySettings?: FederationSecuritySettings;
    /** Use case insensitive Name IDs. */
    caseInsensitiveNameIds: boolean;
    /** Resource labels as `` key:value `` pairs. Maximum of 64 per resource. */
    labels: { [key: string]: string };
}

export interface Federation_LabelsEntry {
    key: string;
    value: string;
}

/** Federation security settings. */
export interface FederationSecuritySettings {
    /** Enable encrypted assertions. */
    encryptedAssertions: boolean;
    /** Value parameter ForceAuthn in SAMLRequest. */
    forceAuthn: boolean;
}

/** A domain. */
export interface Domain {
    /** Domain name */
    domain: string;
    /** Current status of the domain. */
    status: Domain_Status;
    /** Optional code providing details about validation errors. */
    statusCode: string;
    /** Timestamp of domain creation. */
    createdAt?: Date;
    /**
     * Timestamp when the domain was successfully validated.
     * Not set if validation hasn't been completed.
     */
    validatedAt?: Date;
    /** List of challenges to confirm domain ownership. */
    challenges: DomainChallenge[];
}

/** Status of the domain. */
export enum Domain_Status {
    STATUS_UNSPECIFIED = 0,
    /** NEED_TO_VALIDATE - Domain requires ownership validation. */
    NEED_TO_VALIDATE = 1,
    /** VALIDATING - Domain validation is in progress. */
    VALIDATING = 2,
    /** VALID - Domain has been successfully validated and is active. */
    VALID = 3,
    /** INVALID - Domain validation failed (check status_code for details). */
    INVALID = 4,
    /** DELETING - Domain is being deleted. */
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

/** A domain validation challenge. */
export interface DomainChallenge {
    /** Timestamp of challenge creation. */
    createdAt?: Date;
    /** Timestamp of the last challenge status update. */
    updatedAt?: Date;
    /** Type of the validation challenge. */
    type: DomainChallenge_Type;
    /** Current status of the challenge. */
    status: DomainChallenge_Status;
    /** DNS record configuration for domain verification. */
    dnsChallenge?: DomainChallenge_DnsRecord | undefined;
}

/** Type of validation challenge. */
export enum DomainChallenge_Type {
    TYPE_UNSPECIFIED = 0,
    /** DNS_TXT - DNS TXT record validation method. */
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

/** Status of the validation challenge. */
export enum DomainChallenge_Status {
    STATUS_UNSPECIFIED = 0,
    /** PENDING - Challenge is awaiting completion. */
    PENDING = 1,
    /** PROCESSING - Challenge verification is in progress. */
    PROCESSING = 2,
    /** VALID - Challenge has been completed successfully. */
    VALID = 3,
    /** INVALID - Challenge verification failed. */
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

/** DNS record data for validation challenges. */
export interface DomainChallenge_DnsRecord {
    /** Fully qualified domain name for the record. */
    name: string;
    /** DNS record type (always TXT for current implementation). */
    type: DomainChallenge_DnsRecord_Type;
    /** Value to set in the DNS record for verification. */
    value: string;
}

/** Type of DNS record. */
export enum DomainChallenge_DnsRecord_Type {
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

const baseFederation: object = {
    id: '',
    organizationId: '',
    name: '',
    description: '',
    autoCreateAccountOnLogin: false,
    issuer: '',
    ssoBinding: 0,
    ssoUrl: '',
    caseInsensitiveNameIds: false,
};

export const Federation: {
    encode(message: Federation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Federation;
    fromJSON(object: any): Federation;
    toJSON(message: Federation): unknown;
    fromPartial<I extends Exact<DeepPartial<Federation>, I>>(object: I): Federation;
} = {
    encode(message: Federation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.cookieMaxAge !== undefined) {
            Duration.encode(message.cookieMaxAge, writer.uint32(50).fork()).ldelim();
        }
        if (message.autoCreateAccountOnLogin === true) {
            writer.uint32(56).bool(message.autoCreateAccountOnLogin);
        }
        if (message.issuer !== '') {
            writer.uint32(66).string(message.issuer);
        }
        if (message.ssoBinding !== 0) {
            writer.uint32(72).int32(message.ssoBinding);
        }
        if (message.ssoUrl !== '') {
            writer.uint32(82).string(message.ssoUrl);
        }
        if (message.securitySettings !== undefined) {
            FederationSecuritySettings.encode(
                message.securitySettings,
                writer.uint32(90).fork(),
            ).ldelim();
        }
        if (message.caseInsensitiveNameIds === true) {
            writer.uint32(96).bool(message.caseInsensitiveNameIds);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Federation_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(106).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Federation {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFederation } as Federation;
        message.labels = {};
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
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.cookieMaxAge = Duration.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.autoCreateAccountOnLogin = reader.bool();
                    break;
                case 8:
                    message.issuer = reader.string();
                    break;
                case 9:
                    message.ssoBinding = reader.int32() as any;
                    break;
                case 10:
                    message.ssoUrl = reader.string();
                    break;
                case 11:
                    message.securitySettings = FederationSecuritySettings.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 12:
                    message.caseInsensitiveNameIds = reader.bool();
                    break;
                case 13:
                    const entry13 = Federation_LabelsEntry.decode(reader, reader.uint32());
                    if (entry13.value !== undefined) {
                        message.labels[entry13.key] = entry13.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Federation {
        const message = { ...baseFederation } as Federation;
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
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.cookieMaxAge =
            object.cookieMaxAge !== undefined && object.cookieMaxAge !== null
                ? Duration.fromJSON(object.cookieMaxAge)
                : undefined;
        message.autoCreateAccountOnLogin =
            object.autoCreateAccountOnLogin !== undefined &&
            object.autoCreateAccountOnLogin !== null
                ? Boolean(object.autoCreateAccountOnLogin)
                : false;
        message.issuer =
            object.issuer !== undefined && object.issuer !== null ? String(object.issuer) : '';
        message.ssoBinding =
            object.ssoBinding !== undefined && object.ssoBinding !== null
                ? bindingTypeFromJSON(object.ssoBinding)
                : 0;
        message.ssoUrl =
            object.ssoUrl !== undefined && object.ssoUrl !== null ? String(object.ssoUrl) : '';
        message.securitySettings =
            object.securitySettings !== undefined && object.securitySettings !== null
                ? FederationSecuritySettings.fromJSON(object.securitySettings)
                : undefined;
        message.caseInsensitiveNameIds =
            object.caseInsensitiveNameIds !== undefined && object.caseInsensitiveNameIds !== null
                ? Boolean(object.caseInsensitiveNameIds)
                : false;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        return message;
    },

    toJSON(message: Federation): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.cookieMaxAge !== undefined &&
            (obj.cookieMaxAge = message.cookieMaxAge
                ? Duration.toJSON(message.cookieMaxAge)
                : undefined);
        message.autoCreateAccountOnLogin !== undefined &&
            (obj.autoCreateAccountOnLogin = message.autoCreateAccountOnLogin);
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.ssoBinding !== undefined &&
            (obj.ssoBinding = bindingTypeToJSON(message.ssoBinding));
        message.ssoUrl !== undefined && (obj.ssoUrl = message.ssoUrl);
        message.securitySettings !== undefined &&
            (obj.securitySettings = message.securitySettings
                ? FederationSecuritySettings.toJSON(message.securitySettings)
                : undefined);
        message.caseInsensitiveNameIds !== undefined &&
            (obj.caseInsensitiveNameIds = message.caseInsensitiveNameIds);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Federation>, I>>(object: I): Federation {
        const message = { ...baseFederation } as Federation;
        message.id = object.id ?? '';
        message.organizationId = object.organizationId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.cookieMaxAge =
            object.cookieMaxAge !== undefined && object.cookieMaxAge !== null
                ? Duration.fromPartial(object.cookieMaxAge)
                : undefined;
        message.autoCreateAccountOnLogin = object.autoCreateAccountOnLogin ?? false;
        message.issuer = object.issuer ?? '';
        message.ssoBinding = object.ssoBinding ?? 0;
        message.ssoUrl = object.ssoUrl ?? '';
        message.securitySettings =
            object.securitySettings !== undefined && object.securitySettings !== null
                ? FederationSecuritySettings.fromPartial(object.securitySettings)
                : undefined;
        message.caseInsensitiveNameIds = object.caseInsensitiveNameIds ?? false;
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        return message;
    },
};

const baseFederation_LabelsEntry: object = { key: '', value: '' };

export const Federation_LabelsEntry: {
    encode(message: Federation_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Federation_LabelsEntry;
    fromJSON(object: any): Federation_LabelsEntry;
    toJSON(message: Federation_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<Federation_LabelsEntry>, I>>(object: I): Federation_LabelsEntry;
} = {
    encode(message: Federation_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Federation_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFederation_LabelsEntry } as Federation_LabelsEntry;
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

    fromJSON(object: any): Federation_LabelsEntry {
        const message = { ...baseFederation_LabelsEntry } as Federation_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Federation_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Federation_LabelsEntry>, I>>(
        object: I,
    ): Federation_LabelsEntry {
        const message = { ...baseFederation_LabelsEntry } as Federation_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseFederationSecuritySettings: object = { encryptedAssertions: false, forceAuthn: false };

export const FederationSecuritySettings: {
    encode(message: FederationSecuritySettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FederationSecuritySettings;
    fromJSON(object: any): FederationSecuritySettings;
    toJSON(message: FederationSecuritySettings): unknown;
    fromPartial<I extends Exact<DeepPartial<FederationSecuritySettings>, I>>(object: I): FederationSecuritySettings;
} = {
    encode(
        message: FederationSecuritySettings,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.encryptedAssertions === true) {
            writer.uint32(8).bool(message.encryptedAssertions);
        }
        if (message.forceAuthn === true) {
            writer.uint32(16).bool(message.forceAuthn);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): FederationSecuritySettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFederationSecuritySettings } as FederationSecuritySettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.encryptedAssertions = reader.bool();
                    break;
                case 2:
                    message.forceAuthn = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): FederationSecuritySettings {
        const message = { ...baseFederationSecuritySettings } as FederationSecuritySettings;
        message.encryptedAssertions =
            object.encryptedAssertions !== undefined && object.encryptedAssertions !== null
                ? Boolean(object.encryptedAssertions)
                : false;
        message.forceAuthn =
            object.forceAuthn !== undefined && object.forceAuthn !== null
                ? Boolean(object.forceAuthn)
                : false;
        return message;
    },

    toJSON(message: FederationSecuritySettings): unknown {
        const obj: any = {};
        message.encryptedAssertions !== undefined &&
            (obj.encryptedAssertions = message.encryptedAssertions);
        message.forceAuthn !== undefined && (obj.forceAuthn = message.forceAuthn);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<FederationSecuritySettings>, I>>(
        object: I,
    ): FederationSecuritySettings {
        const message = { ...baseFederationSecuritySettings } as FederationSecuritySettings;
        message.encryptedAssertions = object.encryptedAssertions ?? false;
        message.forceAuthn = object.forceAuthn ?? false;
        return message;
    },
};

const baseDomain: object = { domain: '', status: 0, statusCode: '' };

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
            DomainChallenge.encode(v!, writer.uint32(50).fork()).ldelim();
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
                case 6:
                    message.challenges.push(DomainChallenge.decode(reader, reader.uint32()));
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
            writer.uint32(24).int32(message.type);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.dnsChallenge !== undefined) {
            DomainChallenge_DnsRecord.encode(
                message.dnsChallenge,
                writer.uint32(42).fork(),
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
                case 3:
                    message.type = reader.int32() as any;
                    break;
                case 4:
                    message.status = reader.int32() as any;
                    break;
                case 5:
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
