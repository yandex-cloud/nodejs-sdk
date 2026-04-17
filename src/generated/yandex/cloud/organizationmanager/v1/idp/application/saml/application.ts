/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../../../../google/protobuf/timestamp';
import { Int64Value } from '../../../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.organizationmanager.v1.idp.application.saml';

/** Group distribution types for SAML applications. */
export enum GroupDistributionType {
    /** GROUP_DISTRIBUTION_TYPE_UNSPECIFIED - The group distribution type is not specified. */
    GROUP_DISTRIBUTION_TYPE_UNSPECIFIED = 0,
    /** NONE - No groups are provided to the application. */
    NONE = 1,
    /** ASSIGNED_GROUPS - Only assigned groups are provided to the application. */
    ASSIGNED_GROUPS = 2,
    /** ALL_GROUPS - All groups are provided to the application. */
    ALL_GROUPS = 3,
    UNRECOGNIZED = -1,
}

export function groupDistributionTypeFromJSON(object: any): GroupDistributionType {
    switch (object) {
        case 0:
        case 'GROUP_DISTRIBUTION_TYPE_UNSPECIFIED':
            return GroupDistributionType.GROUP_DISTRIBUTION_TYPE_UNSPECIFIED;
        case 1:
        case 'NONE':
            return GroupDistributionType.NONE;
        case 2:
        case 'ASSIGNED_GROUPS':
            return GroupDistributionType.ASSIGNED_GROUPS;
        case 3:
        case 'ALL_GROUPS':
            return GroupDistributionType.ALL_GROUPS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return GroupDistributionType.UNRECOGNIZED;
    }
}

export function groupDistributionTypeToJSON(object: GroupDistributionType): string {
    switch (object) {
        case GroupDistributionType.GROUP_DISTRIBUTION_TYPE_UNSPECIFIED:
            return 'GROUP_DISTRIBUTION_TYPE_UNSPECIFIED';
        case GroupDistributionType.NONE:
            return 'NONE';
        case GroupDistributionType.ASSIGNED_GROUPS:
            return 'ASSIGNED_GROUPS';
        case GroupDistributionType.ALL_GROUPS:
            return 'ALL_GROUPS';
        default:
            return 'UNKNOWN';
    }
}

/** A SAML application resource. */
export interface Application {
    /** Unique identifier of the SAML application. */
    id: string;
    /** ID of the organization that the application belongs to. */
    organizationId: string;
    /** Name of the SAML application. */
    name: string;
    /** Description of the SAML application. */
    description: string;
    /** Current status of the SAML application. */
    status: Application_Status;
    /** Resource labels as `` key:value `` pairs. */
    labels: { [key: string]: string };
    /** Creation timestamp. */
    createdAt?: Date;
    /** Modification timestamp. */
    updatedAt?: Date;
    /** Service provider configuration for the SAML application. */
    serviceProvider?: ServiceProvider;
    /** Security settings for the SAML application. */
    securitySettings?: SecuritySettings;
    /** Attribute mapping configuration for the SAML application. */
    attributeMapping?: AttributeMapping;
    /** Group claims settings for the SAML application. */
    groupClaimsSettings?: GroupClaimsSettings;
    /** Identity provider metadata for the SAML application. */
    identityProviderMetadata?: IdentityProviderMetadata;
}

/** Represents the status of a SAML application. */
export enum Application_Status {
    /** STATUS_UNSPECIFIED - The status is not specified. */
    STATUS_UNSPECIFIED = 0,
    /** CREATING - The application is in the process of being created. */
    CREATING = 1,
    /** ACTIVE - The application is active and can be used for authentication. */
    ACTIVE = 2,
    /** SUSPENDED - The application is suspended. I.e. authentication via this application is disabled. */
    SUSPENDED = 3,
    /** DELETING - The application is in the process of being deleted. */
    DELETING = 4,
    UNRECOGNIZED = -1,
}

export function application_StatusFromJSON(object: any): Application_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Application_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return Application_Status.CREATING;
        case 2:
        case 'ACTIVE':
            return Application_Status.ACTIVE;
        case 3:
        case 'SUSPENDED':
            return Application_Status.SUSPENDED;
        case 4:
        case 'DELETING':
            return Application_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Application_Status.UNRECOGNIZED;
    }
}

export function application_StatusToJSON(object: Application_Status): string {
    switch (object) {
        case Application_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Application_Status.CREATING:
            return 'CREATING';
        case Application_Status.ACTIVE:
            return 'ACTIVE';
        case Application_Status.SUSPENDED:
            return 'SUSPENDED';
        case Application_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}

export interface Application_LabelsEntry {
    key: string;
    value: string;
}

/** Identity provider metadata for SAML applications. */
export interface IdentityProviderMetadata {
    /** Identity provider issuer identifier. */
    issuer: string;
    /** Identity provider Single Sign-On URL. */
    ssoUrl: string;
    /** Identity provider metadata URL. */
    metadataUrl: string;
    /** Identity provider Single Logout URL. */
    sloUrl: string;
}

/** Service provider configuration for SAML applications. */
export interface ServiceProvider {
    /** Service provider entity ID. */
    entityId: string;
    /** Assertion Consumer Service URLs. */
    acsUrls: AssertionConsumerServiceURL[];
    /** Single Logout Service URLs. */
    sloUrls: SingleLogoutServiceURL[];
}

/** Assertion Consumer Service URL configuration. */
export interface AssertionConsumerServiceURL {
    /** The URL where SAML responses are sent. */
    url: string;
    /** Optional index for the assertion consumer service. */
    index?: number;
}

/** Single Logout Service URL configuration. */
export interface SingleLogoutServiceURL {
    /** The URL where logout requests are sent. */
    url: string;
    /** Optional separate URL for logout responses. */
    responseUrl: string;
    /** Protocol binding supported by the logout endpoint. */
    protocolBinding: SingleLogoutServiceURL_ProtocolBinding;
}

/** Protocol bindings supported by the logout endpoint. */
export enum SingleLogoutServiceURL_ProtocolBinding {
    /** PROTOCOL_BINDING_UNSPECIFIED - The protocol binding is not specified. */
    PROTOCOL_BINDING_UNSPECIFIED = 0,
    /** HTTP_POST - HTTP POST binding. */
    HTTP_POST = 1,
    /** HTTP_REDIRECT - HTTP Redirect binding. */
    HTTP_REDIRECT = 2,
    UNRECOGNIZED = -1,
}

export function singleLogoutServiceURL_ProtocolBindingFromJSON(
    object: any,
): SingleLogoutServiceURL_ProtocolBinding {
    switch (object) {
        case 0:
        case 'PROTOCOL_BINDING_UNSPECIFIED':
            return SingleLogoutServiceURL_ProtocolBinding.PROTOCOL_BINDING_UNSPECIFIED;
        case 1:
        case 'HTTP_POST':
            return SingleLogoutServiceURL_ProtocolBinding.HTTP_POST;
        case 2:
        case 'HTTP_REDIRECT':
            return SingleLogoutServiceURL_ProtocolBinding.HTTP_REDIRECT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SingleLogoutServiceURL_ProtocolBinding.UNRECOGNIZED;
    }
}

export function singleLogoutServiceURL_ProtocolBindingToJSON(
    object: SingleLogoutServiceURL_ProtocolBinding,
): string {
    switch (object) {
        case SingleLogoutServiceURL_ProtocolBinding.PROTOCOL_BINDING_UNSPECIFIED:
            return 'PROTOCOL_BINDING_UNSPECIFIED';
        case SingleLogoutServiceURL_ProtocolBinding.HTTP_POST:
            return 'HTTP_POST';
        case SingleLogoutServiceURL_ProtocolBinding.HTTP_REDIRECT:
            return 'HTTP_REDIRECT';
        default:
            return 'UNKNOWN';
    }
}

/** Security settings for SAML applications. */
export interface SecuritySettings {
    /** Signature mode for SAML messages. */
    signatureMode: SecuritySettings_SignatureMode;
    /** ID of the signature certificate to use. */
    signatureCertificateId: string;
}

/** Signature modes for SAML messages. */
export enum SecuritySettings_SignatureMode {
    /** SIGNATURE_MODE_UNSPECIFIED - The signature mode is not specified. */
    SIGNATURE_MODE_UNSPECIFIED = 0,
    /** ASSERTIONS - Sign individual assertions. */
    ASSERTIONS = 1,
    /** RESPONSE - Sign the entire response. */
    RESPONSE = 2,
    /** RESPONSE_AND_ASSERTIONS - Sign both the response and individual assertions. */
    RESPONSE_AND_ASSERTIONS = 3,
    UNRECOGNIZED = -1,
}

export function securitySettings_SignatureModeFromJSON(
    object: any,
): SecuritySettings_SignatureMode {
    switch (object) {
        case 0:
        case 'SIGNATURE_MODE_UNSPECIFIED':
            return SecuritySettings_SignatureMode.SIGNATURE_MODE_UNSPECIFIED;
        case 1:
        case 'ASSERTIONS':
            return SecuritySettings_SignatureMode.ASSERTIONS;
        case 2:
        case 'RESPONSE':
            return SecuritySettings_SignatureMode.RESPONSE;
        case 3:
        case 'RESPONSE_AND_ASSERTIONS':
            return SecuritySettings_SignatureMode.RESPONSE_AND_ASSERTIONS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SecuritySettings_SignatureMode.UNRECOGNIZED;
    }
}

export function securitySettings_SignatureModeToJSON(
    object: SecuritySettings_SignatureMode,
): string {
    switch (object) {
        case SecuritySettings_SignatureMode.SIGNATURE_MODE_UNSPECIFIED:
            return 'SIGNATURE_MODE_UNSPECIFIED';
        case SecuritySettings_SignatureMode.ASSERTIONS:
            return 'ASSERTIONS';
        case SecuritySettings_SignatureMode.RESPONSE:
            return 'RESPONSE';
        case SecuritySettings_SignatureMode.RESPONSE_AND_ASSERTIONS:
            return 'RESPONSE_AND_ASSERTIONS';
        default:
            return 'UNKNOWN';
    }
}

/** Attribute mapping configuration for SAML applications. */
export interface AttributeMapping {
    /** NameID configuration for the SAML application. */
    nameId?: NameId;
    /** List of attribute mappings. */
    attributes: Attribute[];
}

/** NameID configuration for SAML applications. */
export interface NameId {
    /** Format of the NameID. */
    format: NameId_Format;
    /** Value of the NameID. */
    value: string;
}

/** NameID formats supported by SAML. */
export enum NameId_Format {
    /** FORMAT_UNSPECIFIED - The NameID format is not specified. */
    FORMAT_UNSPECIFIED = 0,
    /**
     * PERSISTENT - Persistent NameID format.
     * This provides a stable, opaque identifier for the user.
     */
    PERSISTENT = 1,
    /**
     * EMAIL - Email NameID format.
     * This uses the user's email address as the identifier.
     */
    EMAIL = 2,
    UNRECOGNIZED = -1,
}

export function nameId_FormatFromJSON(object: any): NameId_Format {
    switch (object) {
        case 0:
        case 'FORMAT_UNSPECIFIED':
            return NameId_Format.FORMAT_UNSPECIFIED;
        case 1:
        case 'PERSISTENT':
            return NameId_Format.PERSISTENT;
        case 2:
        case 'EMAIL':
            return NameId_Format.EMAIL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return NameId_Format.UNRECOGNIZED;
    }
}

export function nameId_FormatToJSON(object: NameId_Format): string {
    switch (object) {
        case NameId_Format.FORMAT_UNSPECIFIED:
            return 'FORMAT_UNSPECIFIED';
        case NameId_Format.PERSISTENT:
            return 'PERSISTENT';
        case NameId_Format.EMAIL:
            return 'EMAIL';
        default:
            return 'UNKNOWN';
    }
}

/** Attribute mapping for SAML applications. */
export interface Attribute {
    /** Name of the SAML attribute. */
    name: string;
    /** Value of the SAML attribute. */
    value: string;
}

/** Group claims settings for SAML applications. */
export interface GroupClaimsSettings {
    /** Distribution type for group claims. */
    groupDistributionType: GroupDistributionType;
    /** Name of the SAML attribute that contains group information. */
    groupAttributeName: string;
}

const baseApplication: object = {
    id: '',
    organizationId: '',
    name: '',
    description: '',
    status: 0,
};

export const Application: {
    encode(message: Application, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Application;
    fromJSON(object: any): Application;
    toJSON(message: Application): unknown;
    fromPartial<I extends Exact<DeepPartial<Application>, I>>(object: I): Application;
} = {
    encode(message: Application, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Application_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(58).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(66).fork()).ldelim();
        }
        if (message.serviceProvider !== undefined) {
            ServiceProvider.encode(message.serviceProvider, writer.uint32(74).fork()).ldelim();
        }
        if (message.securitySettings !== undefined) {
            SecuritySettings.encode(message.securitySettings, writer.uint32(82).fork()).ldelim();
        }
        if (message.attributeMapping !== undefined) {
            AttributeMapping.encode(message.attributeMapping, writer.uint32(90).fork()).ldelim();
        }
        if (message.groupClaimsSettings !== undefined) {
            GroupClaimsSettings.encode(
                message.groupClaimsSettings,
                writer.uint32(98).fork(),
            ).ldelim();
        }
        if (message.identityProviderMetadata !== undefined) {
            IdentityProviderMetadata.encode(
                message.identityProviderMetadata,
                writer.uint32(106).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Application {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseApplication } as Application;
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
                    message.status = reader.int32() as any;
                    break;
                case 6:
                    const entry6 = Application_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.serviceProvider = ServiceProvider.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.securitySettings = SecuritySettings.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.attributeMapping = AttributeMapping.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.groupClaimsSettings = GroupClaimsSettings.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 13:
                    message.identityProviderMetadata = IdentityProviderMetadata.decode(
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

    fromJSON(object: any): Application {
        const message = { ...baseApplication } as Application;
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
        message.status =
            object.status !== undefined && object.status !== null
                ? application_StatusFromJSON(object.status)
                : 0;
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
        message.serviceProvider =
            object.serviceProvider !== undefined && object.serviceProvider !== null
                ? ServiceProvider.fromJSON(object.serviceProvider)
                : undefined;
        message.securitySettings =
            object.securitySettings !== undefined && object.securitySettings !== null
                ? SecuritySettings.fromJSON(object.securitySettings)
                : undefined;
        message.attributeMapping =
            object.attributeMapping !== undefined && object.attributeMapping !== null
                ? AttributeMapping.fromJSON(object.attributeMapping)
                : undefined;
        message.groupClaimsSettings =
            object.groupClaimsSettings !== undefined && object.groupClaimsSettings !== null
                ? GroupClaimsSettings.fromJSON(object.groupClaimsSettings)
                : undefined;
        message.identityProviderMetadata =
            object.identityProviderMetadata !== undefined &&
            object.identityProviderMetadata !== null
                ? IdentityProviderMetadata.fromJSON(object.identityProviderMetadata)
                : undefined;
        return message;
    },

    toJSON(message: Application): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.status !== undefined && (obj.status = application_StatusToJSON(message.status));
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        message.serviceProvider !== undefined &&
            (obj.serviceProvider = message.serviceProvider
                ? ServiceProvider.toJSON(message.serviceProvider)
                : undefined);
        message.securitySettings !== undefined &&
            (obj.securitySettings = message.securitySettings
                ? SecuritySettings.toJSON(message.securitySettings)
                : undefined);
        message.attributeMapping !== undefined &&
            (obj.attributeMapping = message.attributeMapping
                ? AttributeMapping.toJSON(message.attributeMapping)
                : undefined);
        message.groupClaimsSettings !== undefined &&
            (obj.groupClaimsSettings = message.groupClaimsSettings
                ? GroupClaimsSettings.toJSON(message.groupClaimsSettings)
                : undefined);
        message.identityProviderMetadata !== undefined &&
            (obj.identityProviderMetadata = message.identityProviderMetadata
                ? IdentityProviderMetadata.toJSON(message.identityProviderMetadata)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Application>, I>>(object: I): Application {
        const message = { ...baseApplication } as Application;
        message.id = object.id ?? '';
        message.organizationId = object.organizationId ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.status = object.status ?? 0;
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
        message.serviceProvider =
            object.serviceProvider !== undefined && object.serviceProvider !== null
                ? ServiceProvider.fromPartial(object.serviceProvider)
                : undefined;
        message.securitySettings =
            object.securitySettings !== undefined && object.securitySettings !== null
                ? SecuritySettings.fromPartial(object.securitySettings)
                : undefined;
        message.attributeMapping =
            object.attributeMapping !== undefined && object.attributeMapping !== null
                ? AttributeMapping.fromPartial(object.attributeMapping)
                : undefined;
        message.groupClaimsSettings =
            object.groupClaimsSettings !== undefined && object.groupClaimsSettings !== null
                ? GroupClaimsSettings.fromPartial(object.groupClaimsSettings)
                : undefined;
        message.identityProviderMetadata =
            object.identityProviderMetadata !== undefined &&
            object.identityProviderMetadata !== null
                ? IdentityProviderMetadata.fromPartial(object.identityProviderMetadata)
                : undefined;
        return message;
    },
};

const baseApplication_LabelsEntry: object = { key: '', value: '' };

export const Application_LabelsEntry: {
    encode(message: Application_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Application_LabelsEntry;
    fromJSON(object: any): Application_LabelsEntry;
    toJSON(message: Application_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<Application_LabelsEntry>, I>>(object: I): Application_LabelsEntry;
} = {
    encode(message: Application_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Application_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseApplication_LabelsEntry } as Application_LabelsEntry;
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

    fromJSON(object: any): Application_LabelsEntry {
        const message = { ...baseApplication_LabelsEntry } as Application_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Application_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Application_LabelsEntry>, I>>(
        object: I,
    ): Application_LabelsEntry {
        const message = { ...baseApplication_LabelsEntry } as Application_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseIdentityProviderMetadata: object = {
    issuer: '',
    ssoUrl: '',
    metadataUrl: '',
    sloUrl: '',
};

export const IdentityProviderMetadata: {
    encode(message: IdentityProviderMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IdentityProviderMetadata;
    fromJSON(object: any): IdentityProviderMetadata;
    toJSON(message: IdentityProviderMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<IdentityProviderMetadata>, I>>(object: I): IdentityProviderMetadata;
} = {
    encode(
        message: IdentityProviderMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.issuer !== '') {
            writer.uint32(10).string(message.issuer);
        }
        if (message.ssoUrl !== '') {
            writer.uint32(18).string(message.ssoUrl);
        }
        if (message.metadataUrl !== '') {
            writer.uint32(26).string(message.metadataUrl);
        }
        if (message.sloUrl !== '') {
            writer.uint32(34).string(message.sloUrl);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): IdentityProviderMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIdentityProviderMetadata } as IdentityProviderMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.issuer = reader.string();
                    break;
                case 2:
                    message.ssoUrl = reader.string();
                    break;
                case 3:
                    message.metadataUrl = reader.string();
                    break;
                case 4:
                    message.sloUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): IdentityProviderMetadata {
        const message = { ...baseIdentityProviderMetadata } as IdentityProviderMetadata;
        message.issuer =
            object.issuer !== undefined && object.issuer !== null ? String(object.issuer) : '';
        message.ssoUrl =
            object.ssoUrl !== undefined && object.ssoUrl !== null ? String(object.ssoUrl) : '';
        message.metadataUrl =
            object.metadataUrl !== undefined && object.metadataUrl !== null
                ? String(object.metadataUrl)
                : '';
        message.sloUrl =
            object.sloUrl !== undefined && object.sloUrl !== null ? String(object.sloUrl) : '';
        return message;
    },

    toJSON(message: IdentityProviderMetadata): unknown {
        const obj: any = {};
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.ssoUrl !== undefined && (obj.ssoUrl = message.ssoUrl);
        message.metadataUrl !== undefined && (obj.metadataUrl = message.metadataUrl);
        message.sloUrl !== undefined && (obj.sloUrl = message.sloUrl);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<IdentityProviderMetadata>, I>>(
        object: I,
    ): IdentityProviderMetadata {
        const message = { ...baseIdentityProviderMetadata } as IdentityProviderMetadata;
        message.issuer = object.issuer ?? '';
        message.ssoUrl = object.ssoUrl ?? '';
        message.metadataUrl = object.metadataUrl ?? '';
        message.sloUrl = object.sloUrl ?? '';
        return message;
    },
};

const baseServiceProvider: object = { entityId: '' };

export const ServiceProvider: {
    encode(message: ServiceProvider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceProvider;
    fromJSON(object: any): ServiceProvider;
    toJSON(message: ServiceProvider): unknown;
    fromPartial<I extends Exact<DeepPartial<ServiceProvider>, I>>(object: I): ServiceProvider;
} = {
    encode(message: ServiceProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.entityId !== '') {
            writer.uint32(10).string(message.entityId);
        }
        for (const v of message.acsUrls) {
            AssertionConsumerServiceURL.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.sloUrls) {
            SingleLogoutServiceURL.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceProvider {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseServiceProvider } as ServiceProvider;
        message.acsUrls = [];
        message.sloUrls = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entityId = reader.string();
                    break;
                case 2:
                    message.acsUrls.push(
                        AssertionConsumerServiceURL.decode(reader, reader.uint32()),
                    );
                    break;
                case 3:
                    message.sloUrls.push(SingleLogoutServiceURL.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ServiceProvider {
        const message = { ...baseServiceProvider } as ServiceProvider;
        message.entityId =
            object.entityId !== undefined && object.entityId !== null
                ? String(object.entityId)
                : '';
        message.acsUrls = (object.acsUrls ?? []).map((e: any) =>
            AssertionConsumerServiceURL.fromJSON(e),
        );
        message.sloUrls = (object.sloUrls ?? []).map((e: any) =>
            SingleLogoutServiceURL.fromJSON(e),
        );
        return message;
    },

    toJSON(message: ServiceProvider): unknown {
        const obj: any = {};
        message.entityId !== undefined && (obj.entityId = message.entityId);
        if (message.acsUrls) {
            obj.acsUrls = message.acsUrls.map((e) =>
                e ? AssertionConsumerServiceURL.toJSON(e) : undefined,
            );
        } else {
            obj.acsUrls = [];
        }
        if (message.sloUrls) {
            obj.sloUrls = message.sloUrls.map((e) =>
                e ? SingleLogoutServiceURL.toJSON(e) : undefined,
            );
        } else {
            obj.sloUrls = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ServiceProvider>, I>>(object: I): ServiceProvider {
        const message = { ...baseServiceProvider } as ServiceProvider;
        message.entityId = object.entityId ?? '';
        message.acsUrls =
            object.acsUrls?.map((e) => AssertionConsumerServiceURL.fromPartial(e)) || [];
        message.sloUrls = object.sloUrls?.map((e) => SingleLogoutServiceURL.fromPartial(e)) || [];
        return message;
    },
};

const baseAssertionConsumerServiceURL: object = { url: '' };

export const AssertionConsumerServiceURL: {
    encode(message: AssertionConsumerServiceURL, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssertionConsumerServiceURL;
    fromJSON(object: any): AssertionConsumerServiceURL;
    toJSON(message: AssertionConsumerServiceURL): unknown;
    fromPartial<I extends Exact<DeepPartial<AssertionConsumerServiceURL>, I>>(object: I): AssertionConsumerServiceURL;
} = {
    encode(
        message: AssertionConsumerServiceURL,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.url !== '') {
            writer.uint32(10).string(message.url);
        }
        if (message.index !== undefined) {
            Int64Value.encode({ value: message.index! }, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AssertionConsumerServiceURL {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAssertionConsumerServiceURL } as AssertionConsumerServiceURL;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                case 2:
                    message.index = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AssertionConsumerServiceURL {
        const message = { ...baseAssertionConsumerServiceURL } as AssertionConsumerServiceURL;
        message.url = object.url !== undefined && object.url !== null ? String(object.url) : '';
        message.index =
            object.index !== undefined && object.index !== null ? Number(object.index) : undefined;
        return message;
    },

    toJSON(message: AssertionConsumerServiceURL): unknown {
        const obj: any = {};
        message.url !== undefined && (obj.url = message.url);
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AssertionConsumerServiceURL>, I>>(
        object: I,
    ): AssertionConsumerServiceURL {
        const message = { ...baseAssertionConsumerServiceURL } as AssertionConsumerServiceURL;
        message.url = object.url ?? '';
        message.index = object.index ?? undefined;
        return message;
    },
};

const baseSingleLogoutServiceURL: object = { url: '', responseUrl: '', protocolBinding: 0 };

export const SingleLogoutServiceURL: {
    encode(message: SingleLogoutServiceURL, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SingleLogoutServiceURL;
    fromJSON(object: any): SingleLogoutServiceURL;
    toJSON(message: SingleLogoutServiceURL): unknown;
    fromPartial<I extends Exact<DeepPartial<SingleLogoutServiceURL>, I>>(object: I): SingleLogoutServiceURL;
} = {
    encode(message: SingleLogoutServiceURL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.url !== '') {
            writer.uint32(10).string(message.url);
        }
        if (message.responseUrl !== '') {
            writer.uint32(18).string(message.responseUrl);
        }
        if (message.protocolBinding !== 0) {
            writer.uint32(24).int32(message.protocolBinding);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SingleLogoutServiceURL {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSingleLogoutServiceURL } as SingleLogoutServiceURL;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                case 2:
                    message.responseUrl = reader.string();
                    break;
                case 3:
                    message.protocolBinding = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SingleLogoutServiceURL {
        const message = { ...baseSingleLogoutServiceURL } as SingleLogoutServiceURL;
        message.url = object.url !== undefined && object.url !== null ? String(object.url) : '';
        message.responseUrl =
            object.responseUrl !== undefined && object.responseUrl !== null
                ? String(object.responseUrl)
                : '';
        message.protocolBinding =
            object.protocolBinding !== undefined && object.protocolBinding !== null
                ? singleLogoutServiceURL_ProtocolBindingFromJSON(object.protocolBinding)
                : 0;
        return message;
    },

    toJSON(message: SingleLogoutServiceURL): unknown {
        const obj: any = {};
        message.url !== undefined && (obj.url = message.url);
        message.responseUrl !== undefined && (obj.responseUrl = message.responseUrl);
        message.protocolBinding !== undefined &&
            (obj.protocolBinding = singleLogoutServiceURL_ProtocolBindingToJSON(
                message.protocolBinding,
            ));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SingleLogoutServiceURL>, I>>(
        object: I,
    ): SingleLogoutServiceURL {
        const message = { ...baseSingleLogoutServiceURL } as SingleLogoutServiceURL;
        message.url = object.url ?? '';
        message.responseUrl = object.responseUrl ?? '';
        message.protocolBinding = object.protocolBinding ?? 0;
        return message;
    },
};

const baseSecuritySettings: object = { signatureMode: 0, signatureCertificateId: '' };

export const SecuritySettings: {
    encode(message: SecuritySettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SecuritySettings;
    fromJSON(object: any): SecuritySettings;
    toJSON(message: SecuritySettings): unknown;
    fromPartial<I extends Exact<DeepPartial<SecuritySettings>, I>>(object: I): SecuritySettings;
} = {
    encode(message: SecuritySettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.signatureMode !== 0) {
            writer.uint32(8).int32(message.signatureMode);
        }
        if (message.signatureCertificateId !== '') {
            writer.uint32(18).string(message.signatureCertificateId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SecuritySettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSecuritySettings } as SecuritySettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signatureMode = reader.int32() as any;
                    break;
                case 2:
                    message.signatureCertificateId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SecuritySettings {
        const message = { ...baseSecuritySettings } as SecuritySettings;
        message.signatureMode =
            object.signatureMode !== undefined && object.signatureMode !== null
                ? securitySettings_SignatureModeFromJSON(object.signatureMode)
                : 0;
        message.signatureCertificateId =
            object.signatureCertificateId !== undefined && object.signatureCertificateId !== null
                ? String(object.signatureCertificateId)
                : '';
        return message;
    },

    toJSON(message: SecuritySettings): unknown {
        const obj: any = {};
        message.signatureMode !== undefined &&
            (obj.signatureMode = securitySettings_SignatureModeToJSON(message.signatureMode));
        message.signatureCertificateId !== undefined &&
            (obj.signatureCertificateId = message.signatureCertificateId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SecuritySettings>, I>>(object: I): SecuritySettings {
        const message = { ...baseSecuritySettings } as SecuritySettings;
        message.signatureMode = object.signatureMode ?? 0;
        message.signatureCertificateId = object.signatureCertificateId ?? '';
        return message;
    },
};

const baseAttributeMapping: object = {};

export const AttributeMapping: {
    encode(message: AttributeMapping, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributeMapping;
    fromJSON(object: any): AttributeMapping;
    toJSON(message: AttributeMapping): unknown;
    fromPartial<I extends Exact<DeepPartial<AttributeMapping>, I>>(object: I): AttributeMapping;
} = {
    encode(message: AttributeMapping, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.nameId !== undefined) {
            NameId.encode(message.nameId, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.attributes) {
            Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AttributeMapping {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAttributeMapping } as AttributeMapping;
        message.attributes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nameId = NameId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.attributes.push(Attribute.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AttributeMapping {
        const message = { ...baseAttributeMapping } as AttributeMapping;
        message.nameId =
            object.nameId !== undefined && object.nameId !== null
                ? NameId.fromJSON(object.nameId)
                : undefined;
        message.attributes = (object.attributes ?? []).map((e: any) => Attribute.fromJSON(e));
        return message;
    },

    toJSON(message: AttributeMapping): unknown {
        const obj: any = {};
        message.nameId !== undefined &&
            (obj.nameId = message.nameId ? NameId.toJSON(message.nameId) : undefined);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => (e ? Attribute.toJSON(e) : undefined));
        } else {
            obj.attributes = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AttributeMapping>, I>>(object: I): AttributeMapping {
        const message = { ...baseAttributeMapping } as AttributeMapping;
        message.nameId =
            object.nameId !== undefined && object.nameId !== null
                ? NameId.fromPartial(object.nameId)
                : undefined;
        message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
        return message;
    },
};

const baseNameId: object = { format: 0, value: '' };

export const NameId: {
    encode(message: NameId, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NameId;
    fromJSON(object: any): NameId;
    toJSON(message: NameId): unknown;
    fromPartial<I extends Exact<DeepPartial<NameId>, I>>(object: I): NameId;
} = {
    encode(message: NameId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.format !== 0) {
            writer.uint32(8).int32(message.format);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): NameId {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNameId } as NameId;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.format = reader.int32() as any;
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

    fromJSON(object: any): NameId {
        const message = { ...baseNameId } as NameId;
        message.format =
            object.format !== undefined && object.format !== null
                ? nameId_FormatFromJSON(object.format)
                : 0;
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: NameId): unknown {
        const obj: any = {};
        message.format !== undefined && (obj.format = nameId_FormatToJSON(message.format));
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<NameId>, I>>(object: I): NameId {
        const message = { ...baseNameId } as NameId;
        message.format = object.format ?? 0;
        message.value = object.value ?? '';
        return message;
    },
};

const baseAttribute: object = { name: '', value: '' };

export const Attribute: {
    encode(message: Attribute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Attribute;
    fromJSON(object: any): Attribute;
    toJSON(message: Attribute): unknown;
    fromPartial<I extends Exact<DeepPartial<Attribute>, I>>(object: I): Attribute;
} = {
    encode(message: Attribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Attribute {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAttribute } as Attribute;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
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

    fromJSON(object: any): Attribute {
        const message = { ...baseAttribute } as Attribute;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Attribute): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Attribute>, I>>(object: I): Attribute {
        const message = { ...baseAttribute } as Attribute;
        message.name = object.name ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseGroupClaimsSettings: object = { groupDistributionType: 0, groupAttributeName: '' };

export const GroupClaimsSettings: {
    encode(message: GroupClaimsSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GroupClaimsSettings;
    fromJSON(object: any): GroupClaimsSettings;
    toJSON(message: GroupClaimsSettings): unknown;
    fromPartial<I extends Exact<DeepPartial<GroupClaimsSettings>, I>>(object: I): GroupClaimsSettings;
} = {
    encode(message: GroupClaimsSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.groupDistributionType !== 0) {
            writer.uint32(8).int32(message.groupDistributionType);
        }
        if (message.groupAttributeName !== '') {
            writer.uint32(18).string(message.groupAttributeName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GroupClaimsSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGroupClaimsSettings } as GroupClaimsSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupDistributionType = reader.int32() as any;
                    break;
                case 2:
                    message.groupAttributeName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GroupClaimsSettings {
        const message = { ...baseGroupClaimsSettings } as GroupClaimsSettings;
        message.groupDistributionType =
            object.groupDistributionType !== undefined && object.groupDistributionType !== null
                ? groupDistributionTypeFromJSON(object.groupDistributionType)
                : 0;
        message.groupAttributeName =
            object.groupAttributeName !== undefined && object.groupAttributeName !== null
                ? String(object.groupAttributeName)
                : '';
        return message;
    },

    toJSON(message: GroupClaimsSettings): unknown {
        const obj: any = {};
        message.groupDistributionType !== undefined &&
            (obj.groupDistributionType = groupDistributionTypeToJSON(
                message.groupDistributionType,
            ));
        message.groupAttributeName !== undefined &&
            (obj.groupAttributeName = message.groupAttributeName);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GroupClaimsSettings>, I>>(
        object: I,
    ): GroupClaimsSettings {
        const message = { ...baseGroupClaimsSettings } as GroupClaimsSettings;
        message.groupDistributionType = object.groupDistributionType ?? 0;
        message.groupAttributeName = object.groupAttributeName ?? '';
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
