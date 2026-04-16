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
import {
    SynchronizationFilter,
    RemoveUserBehavior,
    UserTargetAttribute,
    GroupTargetAttribute,
    MappingType,
    SessionType,
    UserAttributeMapping,
    GroupAttributeMapping,
    SynchronizationSettings,
    removeUserBehaviorFromJSON,
    removeUserBehaviorToJSON,
    userTargetAttributeFromJSON,
    userTargetAttributeToJSON,
    groupTargetAttributeFromJSON,
    groupTargetAttributeToJSON,
    mappingTypeFromJSON,
    mappingTypeToJSON,
    sessionTypeFromJSON,
    sessionTypeToJSON,
} from './synchronization_settings';
import { Duration } from '../../../../../google/protobuf/duration';
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Operation } from '../../../operation/operation';

export const protobufPackage = 'yandex.cloud.organizationmanager.v1.idp';

/** Flavor of attributes to list. */
export enum AttributesFlavor {
    /** ATTRIBUTES_FLAVOR_UNSPECIFIED - The flavor is not specified. */
    ATTRIBUTES_FLAVOR_UNSPECIFIED = 0,
    /** ACTIVE_DIRECTORY - Active Directory attributes. */
    ACTIVE_DIRECTORY = 1,
    UNRECOGNIZED = -1,
}

export function attributesFlavorFromJSON(object: any): AttributesFlavor {
    switch (object) {
        case 0:
        case 'ATTRIBUTES_FLAVOR_UNSPECIFIED':
            return AttributesFlavor.ATTRIBUTES_FLAVOR_UNSPECIFIED;
        case 1:
        case 'ACTIVE_DIRECTORY':
            return AttributesFlavor.ACTIVE_DIRECTORY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return AttributesFlavor.UNRECOGNIZED;
    }
}

export function attributesFlavorToJSON(object: AttributesFlavor): string {
    switch (object) {
        case AttributesFlavor.ATTRIBUTES_FLAVOR_UNSPECIFIED:
            return 'ATTRIBUTES_FLAVOR_UNSPECIFIED';
        case AttributesFlavor.ACTIVE_DIRECTORY:
            return 'ACTIVE_DIRECTORY';
        default:
            return 'UNKNOWN';
    }
}

/** Request to create synchronization settings. */
export interface CreateSynchronizationSettingsRequest {
    /** ID of the subject container. */
    subjectContainerId: string;
    /** Filter configuration for synchronization. */
    filter?: SynchronizationFilter;
    /** Domain replacement configuration. */
    replacementDomain: string;
    /** Behavior when removing users. */
    removeUserBehavior: RemoveUserBehavior;
    /** Interval between synchronization runs. */
    synchronizationInterval?: Duration;
    /** Whether users can be captured during synchronization. */
    allowToCaptureUsers: boolean;
    /** Whether groups can be captured during synchronization. */
    allowToCaptureGroups: boolean;
    /** User attribute mappings. */
    userAttributeMappings: UserAttributeMapping[];
    /** Group attribute mappings. */
    groupAttributeMappings: GroupAttributeMapping[];
}

/** Metadata for the [SynchronizationService.CreateSynchronizationSettings] operation. */
export interface CreateSynchronizationSettingsMetadata {
    /** ID of the subject container. */
    subjectContainerId: string;
}

/** Request to update synchronization settings. */
export interface UpdateSynchronizationSettingsRequest {
    /** ID of the subject container. */
    subjectContainerId: string;
    /** Filter configuration for synchronization. */
    filter?: SynchronizationFilter;
    /** Domain replacement configuration. */
    replacementDomain: string;
    /** Behavior when removing users. */
    removeUserBehavior: RemoveUserBehavior;
    /** Interval between synchronization runs. */
    synchronizationInterval?: Duration;
    /** Whether users can be captured during synchronization. */
    allowToCaptureUsers: boolean;
    /** Whether groups can be captured during synchronization. */
    allowToCaptureGroups: boolean;
    /** User attribute mappings. */
    userAttributeMappings: UserAttributeMapping[];
    /** Group attribute mappings. */
    groupAttributeMappings: GroupAttributeMapping[];
    /** Field mask that specifies which fields are going to be updated. */
    updateMask?: FieldMask;
}

/** Metadata for the [SynchronizationService.UpdateSynchronizationSettings] operation. */
export interface UpdateSynchronizationSettingsMetadata {
    /** ID of the subject container. */
    subjectContainerId: string;
}

/** Request to delete synchronization settings. */
export interface DeleteSynchronizationSettingsRequest {
    /** ID of the subject container. */
    subjectContainerId: string;
}

/** Metadata for the [SynchronizationService.DeleteSynchronizationSettings] operation. */
export interface DeleteSynchronizationSettingsMetadata {
    /** ID of the subject container. */
    subjectContainerId: string;
}

/** Request to get synchronization settings. */
export interface GetSynchronizationSettingsRequest {
    /** ID of the subject container. */
    subjectContainerId: string;
}

/** Request to list supported attributes. */
export interface ListSupportedAttributesRequest {
    /** Flavor of attributes to list. */
    flavor: AttributesFlavor;
}

/** Response message for [SynchronizationService.ListSupportedAttributes]. */
export interface ListSupportedAttributesResponse {
    /** List of supported user attributes. */
    userSupportedAttributes: UserSupportedAttribute[];
    /** List of supported group attributes. */
    groupSupportedAttributes: GroupSupportedAttribute[];
}

/** Supported user attribute configuration. */
export interface UserSupportedAttribute {
    /** Target attribute to map to. */
    targetAttribute: UserTargetAttribute;
    /** List of source attribute configurations. */
    sourceAttributes: SourceAttributes[];
}

/** Supported group attribute configuration. */
export interface GroupSupportedAttribute {
    /** Target attribute to map to. */
    targetAttribute: GroupTargetAttribute;
    /** List of source attribute configurations. */
    sourceAttributes: SourceAttributes[];
}

/** Source attribute configuration. */
export interface SourceAttributes {
    /** Type of mapping. */
    type: MappingType;
    /** List of source attribute names. Empty for EMPTY type. */
    attributes: string[];
}

/** Request to set replication token. */
export interface SetReplicationTokenRequest {
    /** ID of the subject container. */
    subjectContainerId: string;
    /** Replication token value. */
    replicationToken: string;
    /** Type of synchronization session. */
    sessionType: SessionType;
}

/** Metadata for the [SynchronizationService.SetReplicationToken] operation. */
export interface SetReplicationTokenMetadata {
    /** ID of the subject container. */
    subjectContainerId: string;
}

/** Request to reset replication token. */
export interface ResetReplicationTokenRequest {
    /** ID of the subject container. */
    subjectContainerId: string;
}

/** Metadata for the [SynchronizationService.ResetReplicationToken] operation. */
export interface ResetReplicationTokenMetadata {
    /** ID of the subject container. */
    subjectContainerId: string;
}

const baseCreateSynchronizationSettingsRequest: object = {
    subjectContainerId: '',
    replacementDomain: '',
    removeUserBehavior: 0,
    allowToCaptureUsers: false,
    allowToCaptureGroups: false,
};

export const CreateSynchronizationSettingsRequest: {
    encode(message: CreateSynchronizationSettingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateSynchronizationSettingsRequest;
    fromJSON(object: any): CreateSynchronizationSettingsRequest;
    toJSON(message: CreateSynchronizationSettingsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateSynchronizationSettingsRequest>, I>>(object: I): CreateSynchronizationSettingsRequest;
} = {
    encode(
        message: CreateSynchronizationSettingsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.subjectContainerId !== '') {
            writer.uint32(10).string(message.subjectContainerId);
        }
        if (message.filter !== undefined) {
            SynchronizationFilter.encode(message.filter, writer.uint32(18).fork()).ldelim();
        }
        if (message.replacementDomain !== '') {
            writer.uint32(26).string(message.replacementDomain);
        }
        if (message.removeUserBehavior !== 0) {
            writer.uint32(32).int32(message.removeUserBehavior);
        }
        if (message.synchronizationInterval !== undefined) {
            Duration.encode(message.synchronizationInterval, writer.uint32(42).fork()).ldelim();
        }
        if (message.allowToCaptureUsers === true) {
            writer.uint32(48).bool(message.allowToCaptureUsers);
        }
        if (message.allowToCaptureGroups === true) {
            writer.uint32(56).bool(message.allowToCaptureGroups);
        }
        for (const v of message.userAttributeMappings) {
            UserAttributeMapping.encode(v!, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.groupAttributeMappings) {
            GroupAttributeMapping.encode(v!, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateSynchronizationSettingsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateSynchronizationSettingsRequest,
        } as CreateSynchronizationSettingsRequest;
        message.userAttributeMappings = [];
        message.groupAttributeMappings = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectContainerId = reader.string();
                    break;
                case 2:
                    message.filter = SynchronizationFilter.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.replacementDomain = reader.string();
                    break;
                case 4:
                    message.removeUserBehavior = reader.int32() as any;
                    break;
                case 5:
                    message.synchronizationInterval = Duration.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.allowToCaptureUsers = reader.bool();
                    break;
                case 7:
                    message.allowToCaptureGroups = reader.bool();
                    break;
                case 8:
                    message.userAttributeMappings.push(
                        UserAttributeMapping.decode(reader, reader.uint32()),
                    );
                    break;
                case 9:
                    message.groupAttributeMappings.push(
                        GroupAttributeMapping.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateSynchronizationSettingsRequest {
        const message = {
            ...baseCreateSynchronizationSettingsRequest,
        } as CreateSynchronizationSettingsRequest;
        message.subjectContainerId =
            object.subjectContainerId !== undefined && object.subjectContainerId !== null
                ? String(object.subjectContainerId)
                : '';
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? SynchronizationFilter.fromJSON(object.filter)
                : undefined;
        message.replacementDomain =
            object.replacementDomain !== undefined && object.replacementDomain !== null
                ? String(object.replacementDomain)
                : '';
        message.removeUserBehavior =
            object.removeUserBehavior !== undefined && object.removeUserBehavior !== null
                ? removeUserBehaviorFromJSON(object.removeUserBehavior)
                : 0;
        message.synchronizationInterval =
            object.synchronizationInterval !== undefined && object.synchronizationInterval !== null
                ? Duration.fromJSON(object.synchronizationInterval)
                : undefined;
        message.allowToCaptureUsers =
            object.allowToCaptureUsers !== undefined && object.allowToCaptureUsers !== null
                ? Boolean(object.allowToCaptureUsers)
                : false;
        message.allowToCaptureGroups =
            object.allowToCaptureGroups !== undefined && object.allowToCaptureGroups !== null
                ? Boolean(object.allowToCaptureGroups)
                : false;
        message.userAttributeMappings = (object.userAttributeMappings ?? []).map((e: any) =>
            UserAttributeMapping.fromJSON(e),
        );
        message.groupAttributeMappings = (object.groupAttributeMappings ?? []).map((e: any) =>
            GroupAttributeMapping.fromJSON(e),
        );
        return message;
    },

    toJSON(message: CreateSynchronizationSettingsRequest): unknown {
        const obj: any = {};
        message.subjectContainerId !== undefined &&
            (obj.subjectContainerId = message.subjectContainerId);
        message.filter !== undefined &&
            (obj.filter = message.filter
                ? SynchronizationFilter.toJSON(message.filter)
                : undefined);
        message.replacementDomain !== undefined &&
            (obj.replacementDomain = message.replacementDomain);
        message.removeUserBehavior !== undefined &&
            (obj.removeUserBehavior = removeUserBehaviorToJSON(message.removeUserBehavior));
        message.synchronizationInterval !== undefined &&
            (obj.synchronizationInterval = message.synchronizationInterval
                ? Duration.toJSON(message.synchronizationInterval)
                : undefined);
        message.allowToCaptureUsers !== undefined &&
            (obj.allowToCaptureUsers = message.allowToCaptureUsers);
        message.allowToCaptureGroups !== undefined &&
            (obj.allowToCaptureGroups = message.allowToCaptureGroups);
        if (message.userAttributeMappings) {
            obj.userAttributeMappings = message.userAttributeMappings.map((e) =>
                e ? UserAttributeMapping.toJSON(e) : undefined,
            );
        } else {
            obj.userAttributeMappings = [];
        }
        if (message.groupAttributeMappings) {
            obj.groupAttributeMappings = message.groupAttributeMappings.map((e) =>
                e ? GroupAttributeMapping.toJSON(e) : undefined,
            );
        } else {
            obj.groupAttributeMappings = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateSynchronizationSettingsRequest>, I>>(
        object: I,
    ): CreateSynchronizationSettingsRequest {
        const message = {
            ...baseCreateSynchronizationSettingsRequest,
        } as CreateSynchronizationSettingsRequest;
        message.subjectContainerId = object.subjectContainerId ?? '';
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? SynchronizationFilter.fromPartial(object.filter)
                : undefined;
        message.replacementDomain = object.replacementDomain ?? '';
        message.removeUserBehavior = object.removeUserBehavior ?? 0;
        message.synchronizationInterval =
            object.synchronizationInterval !== undefined && object.synchronizationInterval !== null
                ? Duration.fromPartial(object.synchronizationInterval)
                : undefined;
        message.allowToCaptureUsers = object.allowToCaptureUsers ?? false;
        message.allowToCaptureGroups = object.allowToCaptureGroups ?? false;
        message.userAttributeMappings =
            object.userAttributeMappings?.map((e) => UserAttributeMapping.fromPartial(e)) || [];
        message.groupAttributeMappings =
            object.groupAttributeMappings?.map((e) => GroupAttributeMapping.fromPartial(e)) || [];
        return message;
    },
};

const baseCreateSynchronizationSettingsMetadata: object = { subjectContainerId: '' };

export const CreateSynchronizationSettingsMetadata: {
    encode(message: CreateSynchronizationSettingsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateSynchronizationSettingsMetadata;
    fromJSON(object: any): CreateSynchronizationSettingsMetadata;
    toJSON(message: CreateSynchronizationSettingsMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateSynchronizationSettingsMetadata>, I>>(object: I): CreateSynchronizationSettingsMetadata;
} = {
    encode(
        message: CreateSynchronizationSettingsMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.subjectContainerId !== '') {
            writer.uint32(10).string(message.subjectContainerId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateSynchronizationSettingsMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateSynchronizationSettingsMetadata,
        } as CreateSynchronizationSettingsMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectContainerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateSynchronizationSettingsMetadata {
        const message = {
            ...baseCreateSynchronizationSettingsMetadata,
        } as CreateSynchronizationSettingsMetadata;
        message.subjectContainerId =
            object.subjectContainerId !== undefined && object.subjectContainerId !== null
                ? String(object.subjectContainerId)
                : '';
        return message;
    },

    toJSON(message: CreateSynchronizationSettingsMetadata): unknown {
        const obj: any = {};
        message.subjectContainerId !== undefined &&
            (obj.subjectContainerId = message.subjectContainerId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CreateSynchronizationSettingsMetadata>, I>>(
        object: I,
    ): CreateSynchronizationSettingsMetadata {
        const message = {
            ...baseCreateSynchronizationSettingsMetadata,
        } as CreateSynchronizationSettingsMetadata;
        message.subjectContainerId = object.subjectContainerId ?? '';
        return message;
    },
};

const baseUpdateSynchronizationSettingsRequest: object = {
    subjectContainerId: '',
    replacementDomain: '',
    removeUserBehavior: 0,
    allowToCaptureUsers: false,
    allowToCaptureGroups: false,
};

export const UpdateSynchronizationSettingsRequest: {
    encode(message: UpdateSynchronizationSettingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSynchronizationSettingsRequest;
    fromJSON(object: any): UpdateSynchronizationSettingsRequest;
    toJSON(message: UpdateSynchronizationSettingsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateSynchronizationSettingsRequest>, I>>(object: I): UpdateSynchronizationSettingsRequest;
} = {
    encode(
        message: UpdateSynchronizationSettingsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.subjectContainerId !== '') {
            writer.uint32(10).string(message.subjectContainerId);
        }
        if (message.filter !== undefined) {
            SynchronizationFilter.encode(message.filter, writer.uint32(18).fork()).ldelim();
        }
        if (message.replacementDomain !== '') {
            writer.uint32(26).string(message.replacementDomain);
        }
        if (message.removeUserBehavior !== 0) {
            writer.uint32(32).int32(message.removeUserBehavior);
        }
        if (message.synchronizationInterval !== undefined) {
            Duration.encode(message.synchronizationInterval, writer.uint32(42).fork()).ldelim();
        }
        if (message.allowToCaptureUsers === true) {
            writer.uint32(48).bool(message.allowToCaptureUsers);
        }
        if (message.allowToCaptureGroups === true) {
            writer.uint32(56).bool(message.allowToCaptureGroups);
        }
        for (const v of message.userAttributeMappings) {
            UserAttributeMapping.encode(v!, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.groupAttributeMappings) {
            GroupAttributeMapping.encode(v!, writer.uint32(74).fork()).ldelim();
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSynchronizationSettingsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSynchronizationSettingsRequest,
        } as UpdateSynchronizationSettingsRequest;
        message.userAttributeMappings = [];
        message.groupAttributeMappings = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectContainerId = reader.string();
                    break;
                case 2:
                    message.filter = SynchronizationFilter.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.replacementDomain = reader.string();
                    break;
                case 4:
                    message.removeUserBehavior = reader.int32() as any;
                    break;
                case 5:
                    message.synchronizationInterval = Duration.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.allowToCaptureUsers = reader.bool();
                    break;
                case 7:
                    message.allowToCaptureGroups = reader.bool();
                    break;
                case 8:
                    message.userAttributeMappings.push(
                        UserAttributeMapping.decode(reader, reader.uint32()),
                    );
                    break;
                case 9:
                    message.groupAttributeMappings.push(
                        GroupAttributeMapping.decode(reader, reader.uint32()),
                    );
                    break;
                case 10:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateSynchronizationSettingsRequest {
        const message = {
            ...baseUpdateSynchronizationSettingsRequest,
        } as UpdateSynchronizationSettingsRequest;
        message.subjectContainerId =
            object.subjectContainerId !== undefined && object.subjectContainerId !== null
                ? String(object.subjectContainerId)
                : '';
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? SynchronizationFilter.fromJSON(object.filter)
                : undefined;
        message.replacementDomain =
            object.replacementDomain !== undefined && object.replacementDomain !== null
                ? String(object.replacementDomain)
                : '';
        message.removeUserBehavior =
            object.removeUserBehavior !== undefined && object.removeUserBehavior !== null
                ? removeUserBehaviorFromJSON(object.removeUserBehavior)
                : 0;
        message.synchronizationInterval =
            object.synchronizationInterval !== undefined && object.synchronizationInterval !== null
                ? Duration.fromJSON(object.synchronizationInterval)
                : undefined;
        message.allowToCaptureUsers =
            object.allowToCaptureUsers !== undefined && object.allowToCaptureUsers !== null
                ? Boolean(object.allowToCaptureUsers)
                : false;
        message.allowToCaptureGroups =
            object.allowToCaptureGroups !== undefined && object.allowToCaptureGroups !== null
                ? Boolean(object.allowToCaptureGroups)
                : false;
        message.userAttributeMappings = (object.userAttributeMappings ?? []).map((e: any) =>
            UserAttributeMapping.fromJSON(e),
        );
        message.groupAttributeMappings = (object.groupAttributeMappings ?? []).map((e: any) =>
            GroupAttributeMapping.fromJSON(e),
        );
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromJSON(object.updateMask)
                : undefined;
        return message;
    },

    toJSON(message: UpdateSynchronizationSettingsRequest): unknown {
        const obj: any = {};
        message.subjectContainerId !== undefined &&
            (obj.subjectContainerId = message.subjectContainerId);
        message.filter !== undefined &&
            (obj.filter = message.filter
                ? SynchronizationFilter.toJSON(message.filter)
                : undefined);
        message.replacementDomain !== undefined &&
            (obj.replacementDomain = message.replacementDomain);
        message.removeUserBehavior !== undefined &&
            (obj.removeUserBehavior = removeUserBehaviorToJSON(message.removeUserBehavior));
        message.synchronizationInterval !== undefined &&
            (obj.synchronizationInterval = message.synchronizationInterval
                ? Duration.toJSON(message.synchronizationInterval)
                : undefined);
        message.allowToCaptureUsers !== undefined &&
            (obj.allowToCaptureUsers = message.allowToCaptureUsers);
        message.allowToCaptureGroups !== undefined &&
            (obj.allowToCaptureGroups = message.allowToCaptureGroups);
        if (message.userAttributeMappings) {
            obj.userAttributeMappings = message.userAttributeMappings.map((e) =>
                e ? UserAttributeMapping.toJSON(e) : undefined,
            );
        } else {
            obj.userAttributeMappings = [];
        }
        if (message.groupAttributeMappings) {
            obj.groupAttributeMappings = message.groupAttributeMappings.map((e) =>
                e ? GroupAttributeMapping.toJSON(e) : undefined,
            );
        } else {
            obj.groupAttributeMappings = [];
        }
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateSynchronizationSettingsRequest>, I>>(
        object: I,
    ): UpdateSynchronizationSettingsRequest {
        const message = {
            ...baseUpdateSynchronizationSettingsRequest,
        } as UpdateSynchronizationSettingsRequest;
        message.subjectContainerId = object.subjectContainerId ?? '';
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? SynchronizationFilter.fromPartial(object.filter)
                : undefined;
        message.replacementDomain = object.replacementDomain ?? '';
        message.removeUserBehavior = object.removeUserBehavior ?? 0;
        message.synchronizationInterval =
            object.synchronizationInterval !== undefined && object.synchronizationInterval !== null
                ? Duration.fromPartial(object.synchronizationInterval)
                : undefined;
        message.allowToCaptureUsers = object.allowToCaptureUsers ?? false;
        message.allowToCaptureGroups = object.allowToCaptureGroups ?? false;
        message.userAttributeMappings =
            object.userAttributeMappings?.map((e) => UserAttributeMapping.fromPartial(e)) || [];
        message.groupAttributeMappings =
            object.groupAttributeMappings?.map((e) => GroupAttributeMapping.fromPartial(e)) || [];
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? FieldMask.fromPartial(object.updateMask)
                : undefined;
        return message;
    },
};

const baseUpdateSynchronizationSettingsMetadata: object = { subjectContainerId: '' };

export const UpdateSynchronizationSettingsMetadata: {
    encode(message: UpdateSynchronizationSettingsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSynchronizationSettingsMetadata;
    fromJSON(object: any): UpdateSynchronizationSettingsMetadata;
    toJSON(message: UpdateSynchronizationSettingsMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateSynchronizationSettingsMetadata>, I>>(object: I): UpdateSynchronizationSettingsMetadata;
} = {
    encode(
        message: UpdateSynchronizationSettingsMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.subjectContainerId !== '') {
            writer.uint32(10).string(message.subjectContainerId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSynchronizationSettingsMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSynchronizationSettingsMetadata,
        } as UpdateSynchronizationSettingsMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectContainerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateSynchronizationSettingsMetadata {
        const message = {
            ...baseUpdateSynchronizationSettingsMetadata,
        } as UpdateSynchronizationSettingsMetadata;
        message.subjectContainerId =
            object.subjectContainerId !== undefined && object.subjectContainerId !== null
                ? String(object.subjectContainerId)
                : '';
        return message;
    },

    toJSON(message: UpdateSynchronizationSettingsMetadata): unknown {
        const obj: any = {};
        message.subjectContainerId !== undefined &&
            (obj.subjectContainerId = message.subjectContainerId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateSynchronizationSettingsMetadata>, I>>(
        object: I,
    ): UpdateSynchronizationSettingsMetadata {
        const message = {
            ...baseUpdateSynchronizationSettingsMetadata,
        } as UpdateSynchronizationSettingsMetadata;
        message.subjectContainerId = object.subjectContainerId ?? '';
        return message;
    },
};

const baseDeleteSynchronizationSettingsRequest: object = { subjectContainerId: '' };

export const DeleteSynchronizationSettingsRequest: {
    encode(message: DeleteSynchronizationSettingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSynchronizationSettingsRequest;
    fromJSON(object: any): DeleteSynchronizationSettingsRequest;
    toJSON(message: DeleteSynchronizationSettingsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteSynchronizationSettingsRequest>, I>>(object: I): DeleteSynchronizationSettingsRequest;
} = {
    encode(
        message: DeleteSynchronizationSettingsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.subjectContainerId !== '') {
            writer.uint32(10).string(message.subjectContainerId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSynchronizationSettingsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteSynchronizationSettingsRequest,
        } as DeleteSynchronizationSettingsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectContainerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteSynchronizationSettingsRequest {
        const message = {
            ...baseDeleteSynchronizationSettingsRequest,
        } as DeleteSynchronizationSettingsRequest;
        message.subjectContainerId =
            object.subjectContainerId !== undefined && object.subjectContainerId !== null
                ? String(object.subjectContainerId)
                : '';
        return message;
    },

    toJSON(message: DeleteSynchronizationSettingsRequest): unknown {
        const obj: any = {};
        message.subjectContainerId !== undefined &&
            (obj.subjectContainerId = message.subjectContainerId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteSynchronizationSettingsRequest>, I>>(
        object: I,
    ): DeleteSynchronizationSettingsRequest {
        const message = {
            ...baseDeleteSynchronizationSettingsRequest,
        } as DeleteSynchronizationSettingsRequest;
        message.subjectContainerId = object.subjectContainerId ?? '';
        return message;
    },
};

const baseDeleteSynchronizationSettingsMetadata: object = { subjectContainerId: '' };

export const DeleteSynchronizationSettingsMetadata: {
    encode(message: DeleteSynchronizationSettingsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSynchronizationSettingsMetadata;
    fromJSON(object: any): DeleteSynchronizationSettingsMetadata;
    toJSON(message: DeleteSynchronizationSettingsMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteSynchronizationSettingsMetadata>, I>>(object: I): DeleteSynchronizationSettingsMetadata;
} = {
    encode(
        message: DeleteSynchronizationSettingsMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.subjectContainerId !== '') {
            writer.uint32(10).string(message.subjectContainerId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSynchronizationSettingsMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteSynchronizationSettingsMetadata,
        } as DeleteSynchronizationSettingsMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectContainerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteSynchronizationSettingsMetadata {
        const message = {
            ...baseDeleteSynchronizationSettingsMetadata,
        } as DeleteSynchronizationSettingsMetadata;
        message.subjectContainerId =
            object.subjectContainerId !== undefined && object.subjectContainerId !== null
                ? String(object.subjectContainerId)
                : '';
        return message;
    },

    toJSON(message: DeleteSynchronizationSettingsMetadata): unknown {
        const obj: any = {};
        message.subjectContainerId !== undefined &&
            (obj.subjectContainerId = message.subjectContainerId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteSynchronizationSettingsMetadata>, I>>(
        object: I,
    ): DeleteSynchronizationSettingsMetadata {
        const message = {
            ...baseDeleteSynchronizationSettingsMetadata,
        } as DeleteSynchronizationSettingsMetadata;
        message.subjectContainerId = object.subjectContainerId ?? '';
        return message;
    },
};

const baseGetSynchronizationSettingsRequest: object = { subjectContainerId: '' };

export const GetSynchronizationSettingsRequest: {
    encode(message: GetSynchronizationSettingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSynchronizationSettingsRequest;
    fromJSON(object: any): GetSynchronizationSettingsRequest;
    toJSON(message: GetSynchronizationSettingsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetSynchronizationSettingsRequest>, I>>(object: I): GetSynchronizationSettingsRequest;
} = {
    encode(
        message: GetSynchronizationSettingsRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.subjectContainerId !== '') {
            writer.uint32(10).string(message.subjectContainerId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetSynchronizationSettingsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetSynchronizationSettingsRequest,
        } as GetSynchronizationSettingsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectContainerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetSynchronizationSettingsRequest {
        const message = {
            ...baseGetSynchronizationSettingsRequest,
        } as GetSynchronizationSettingsRequest;
        message.subjectContainerId =
            object.subjectContainerId !== undefined && object.subjectContainerId !== null
                ? String(object.subjectContainerId)
                : '';
        return message;
    },

    toJSON(message: GetSynchronizationSettingsRequest): unknown {
        const obj: any = {};
        message.subjectContainerId !== undefined &&
            (obj.subjectContainerId = message.subjectContainerId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GetSynchronizationSettingsRequest>, I>>(
        object: I,
    ): GetSynchronizationSettingsRequest {
        const message = {
            ...baseGetSynchronizationSettingsRequest,
        } as GetSynchronizationSettingsRequest;
        message.subjectContainerId = object.subjectContainerId ?? '';
        return message;
    },
};

const baseListSupportedAttributesRequest: object = { flavor: 0 };

export const ListSupportedAttributesRequest: {
    encode(message: ListSupportedAttributesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListSupportedAttributesRequest;
    fromJSON(object: any): ListSupportedAttributesRequest;
    toJSON(message: ListSupportedAttributesRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListSupportedAttributesRequest>, I>>(object: I): ListSupportedAttributesRequest;
} = {
    encode(
        message: ListSupportedAttributesRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.flavor !== 0) {
            writer.uint32(8).int32(message.flavor);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListSupportedAttributesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListSupportedAttributesRequest } as ListSupportedAttributesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.flavor = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListSupportedAttributesRequest {
        const message = { ...baseListSupportedAttributesRequest } as ListSupportedAttributesRequest;
        message.flavor =
            object.flavor !== undefined && object.flavor !== null
                ? attributesFlavorFromJSON(object.flavor)
                : 0;
        return message;
    },

    toJSON(message: ListSupportedAttributesRequest): unknown {
        const obj: any = {};
        message.flavor !== undefined && (obj.flavor = attributesFlavorToJSON(message.flavor));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListSupportedAttributesRequest>, I>>(
        object: I,
    ): ListSupportedAttributesRequest {
        const message = { ...baseListSupportedAttributesRequest } as ListSupportedAttributesRequest;
        message.flavor = object.flavor ?? 0;
        return message;
    },
};

const baseListSupportedAttributesResponse: object = {};

export const ListSupportedAttributesResponse: {
    encode(message: ListSupportedAttributesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListSupportedAttributesResponse;
    fromJSON(object: any): ListSupportedAttributesResponse;
    toJSON(message: ListSupportedAttributesResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListSupportedAttributesResponse>, I>>(object: I): ListSupportedAttributesResponse;
} = {
    encode(
        message: ListSupportedAttributesResponse,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.userSupportedAttributes) {
            UserSupportedAttribute.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.groupSupportedAttributes) {
            GroupSupportedAttribute.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListSupportedAttributesResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListSupportedAttributesResponse,
        } as ListSupportedAttributesResponse;
        message.userSupportedAttributes = [];
        message.groupSupportedAttributes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userSupportedAttributes.push(
                        UserSupportedAttribute.decode(reader, reader.uint32()),
                    );
                    break;
                case 2:
                    message.groupSupportedAttributes.push(
                        GroupSupportedAttribute.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListSupportedAttributesResponse {
        const message = {
            ...baseListSupportedAttributesResponse,
        } as ListSupportedAttributesResponse;
        message.userSupportedAttributes = (object.userSupportedAttributes ?? []).map((e: any) =>
            UserSupportedAttribute.fromJSON(e),
        );
        message.groupSupportedAttributes = (object.groupSupportedAttributes ?? []).map((e: any) =>
            GroupSupportedAttribute.fromJSON(e),
        );
        return message;
    },

    toJSON(message: ListSupportedAttributesResponse): unknown {
        const obj: any = {};
        if (message.userSupportedAttributes) {
            obj.userSupportedAttributes = message.userSupportedAttributes.map((e) =>
                e ? UserSupportedAttribute.toJSON(e) : undefined,
            );
        } else {
            obj.userSupportedAttributes = [];
        }
        if (message.groupSupportedAttributes) {
            obj.groupSupportedAttributes = message.groupSupportedAttributes.map((e) =>
                e ? GroupSupportedAttribute.toJSON(e) : undefined,
            );
        } else {
            obj.groupSupportedAttributes = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ListSupportedAttributesResponse>, I>>(
        object: I,
    ): ListSupportedAttributesResponse {
        const message = {
            ...baseListSupportedAttributesResponse,
        } as ListSupportedAttributesResponse;
        message.userSupportedAttributes =
            object.userSupportedAttributes?.map((e) => UserSupportedAttribute.fromPartial(e)) || [];
        message.groupSupportedAttributes =
            object.groupSupportedAttributes?.map((e) => GroupSupportedAttribute.fromPartial(e)) ||
            [];
        return message;
    },
};

const baseUserSupportedAttribute: object = { targetAttribute: 0 };

export const UserSupportedAttribute: {
    encode(message: UserSupportedAttribute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserSupportedAttribute;
    fromJSON(object: any): UserSupportedAttribute;
    toJSON(message: UserSupportedAttribute): unknown;
    fromPartial<I extends Exact<DeepPartial<UserSupportedAttribute>, I>>(object: I): UserSupportedAttribute;
} = {
    encode(message: UserSupportedAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.targetAttribute !== 0) {
            writer.uint32(8).int32(message.targetAttribute);
        }
        for (const v of message.sourceAttributes) {
            SourceAttributes.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UserSupportedAttribute {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUserSupportedAttribute } as UserSupportedAttribute;
        message.sourceAttributes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetAttribute = reader.int32() as any;
                    break;
                case 2:
                    message.sourceAttributes.push(SourceAttributes.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UserSupportedAttribute {
        const message = { ...baseUserSupportedAttribute } as UserSupportedAttribute;
        message.targetAttribute =
            object.targetAttribute !== undefined && object.targetAttribute !== null
                ? userTargetAttributeFromJSON(object.targetAttribute)
                : 0;
        message.sourceAttributes = (object.sourceAttributes ?? []).map((e: any) =>
            SourceAttributes.fromJSON(e),
        );
        return message;
    },

    toJSON(message: UserSupportedAttribute): unknown {
        const obj: any = {};
        message.targetAttribute !== undefined &&
            (obj.targetAttribute = userTargetAttributeToJSON(message.targetAttribute));
        if (message.sourceAttributes) {
            obj.sourceAttributes = message.sourceAttributes.map((e) =>
                e ? SourceAttributes.toJSON(e) : undefined,
            );
        } else {
            obj.sourceAttributes = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UserSupportedAttribute>, I>>(
        object: I,
    ): UserSupportedAttribute {
        const message = { ...baseUserSupportedAttribute } as UserSupportedAttribute;
        message.targetAttribute = object.targetAttribute ?? 0;
        message.sourceAttributes =
            object.sourceAttributes?.map((e) => SourceAttributes.fromPartial(e)) || [];
        return message;
    },
};

const baseGroupSupportedAttribute: object = { targetAttribute: 0 };

export const GroupSupportedAttribute: {
    encode(message: GroupSupportedAttribute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GroupSupportedAttribute;
    fromJSON(object: any): GroupSupportedAttribute;
    toJSON(message: GroupSupportedAttribute): unknown;
    fromPartial<I extends Exact<DeepPartial<GroupSupportedAttribute>, I>>(object: I): GroupSupportedAttribute;
} = {
    encode(message: GroupSupportedAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.targetAttribute !== 0) {
            writer.uint32(8).int32(message.targetAttribute);
        }
        for (const v of message.sourceAttributes) {
            SourceAttributes.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GroupSupportedAttribute {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGroupSupportedAttribute } as GroupSupportedAttribute;
        message.sourceAttributes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetAttribute = reader.int32() as any;
                    break;
                case 2:
                    message.sourceAttributes.push(SourceAttributes.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GroupSupportedAttribute {
        const message = { ...baseGroupSupportedAttribute } as GroupSupportedAttribute;
        message.targetAttribute =
            object.targetAttribute !== undefined && object.targetAttribute !== null
                ? groupTargetAttributeFromJSON(object.targetAttribute)
                : 0;
        message.sourceAttributes = (object.sourceAttributes ?? []).map((e: any) =>
            SourceAttributes.fromJSON(e),
        );
        return message;
    },

    toJSON(message: GroupSupportedAttribute): unknown {
        const obj: any = {};
        message.targetAttribute !== undefined &&
            (obj.targetAttribute = groupTargetAttributeToJSON(message.targetAttribute));
        if (message.sourceAttributes) {
            obj.sourceAttributes = message.sourceAttributes.map((e) =>
                e ? SourceAttributes.toJSON(e) : undefined,
            );
        } else {
            obj.sourceAttributes = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GroupSupportedAttribute>, I>>(
        object: I,
    ): GroupSupportedAttribute {
        const message = { ...baseGroupSupportedAttribute } as GroupSupportedAttribute;
        message.targetAttribute = object.targetAttribute ?? 0;
        message.sourceAttributes =
            object.sourceAttributes?.map((e) => SourceAttributes.fromPartial(e)) || [];
        return message;
    },
};

const baseSourceAttributes: object = { type: 0, attributes: '' };

export const SourceAttributes: {
    encode(message: SourceAttributes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SourceAttributes;
    fromJSON(object: any): SourceAttributes;
    toJSON(message: SourceAttributes): unknown;
    fromPartial<I extends Exact<DeepPartial<SourceAttributes>, I>>(object: I): SourceAttributes;
} = {
    encode(message: SourceAttributes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        for (const v of message.attributes) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SourceAttributes {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSourceAttributes } as SourceAttributes;
        message.attributes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32() as any;
                    break;
                case 2:
                    message.attributes.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SourceAttributes {
        const message = { ...baseSourceAttributes } as SourceAttributes;
        message.type =
            object.type !== undefined && object.type !== null
                ? mappingTypeFromJSON(object.type)
                : 0;
        message.attributes = (object.attributes ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: SourceAttributes): unknown {
        const obj: any = {};
        message.type !== undefined && (obj.type = mappingTypeToJSON(message.type));
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e);
        } else {
            obj.attributes = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SourceAttributes>, I>>(object: I): SourceAttributes {
        const message = { ...baseSourceAttributes } as SourceAttributes;
        message.type = object.type ?? 0;
        message.attributes = object.attributes?.map((e) => e) || [];
        return message;
    },
};

const baseSetReplicationTokenRequest: object = {
    subjectContainerId: '',
    replicationToken: '',
    sessionType: 0,
};

export const SetReplicationTokenRequest: {
    encode(message: SetReplicationTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetReplicationTokenRequest;
    fromJSON(object: any): SetReplicationTokenRequest;
    toJSON(message: SetReplicationTokenRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<SetReplicationTokenRequest>, I>>(object: I): SetReplicationTokenRequest;
} = {
    encode(
        message: SetReplicationTokenRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.subjectContainerId !== '') {
            writer.uint32(10).string(message.subjectContainerId);
        }
        if (message.replicationToken !== '') {
            writer.uint32(18).string(message.replicationToken);
        }
        if (message.sessionType !== 0) {
            writer.uint32(24).int32(message.sessionType);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SetReplicationTokenRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSetReplicationTokenRequest } as SetReplicationTokenRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectContainerId = reader.string();
                    break;
                case 2:
                    message.replicationToken = reader.string();
                    break;
                case 3:
                    message.sessionType = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SetReplicationTokenRequest {
        const message = { ...baseSetReplicationTokenRequest } as SetReplicationTokenRequest;
        message.subjectContainerId =
            object.subjectContainerId !== undefined && object.subjectContainerId !== null
                ? String(object.subjectContainerId)
                : '';
        message.replicationToken =
            object.replicationToken !== undefined && object.replicationToken !== null
                ? String(object.replicationToken)
                : '';
        message.sessionType =
            object.sessionType !== undefined && object.sessionType !== null
                ? sessionTypeFromJSON(object.sessionType)
                : 0;
        return message;
    },

    toJSON(message: SetReplicationTokenRequest): unknown {
        const obj: any = {};
        message.subjectContainerId !== undefined &&
            (obj.subjectContainerId = message.subjectContainerId);
        message.replicationToken !== undefined && (obj.replicationToken = message.replicationToken);
        message.sessionType !== undefined &&
            (obj.sessionType = sessionTypeToJSON(message.sessionType));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SetReplicationTokenRequest>, I>>(
        object: I,
    ): SetReplicationTokenRequest {
        const message = { ...baseSetReplicationTokenRequest } as SetReplicationTokenRequest;
        message.subjectContainerId = object.subjectContainerId ?? '';
        message.replicationToken = object.replicationToken ?? '';
        message.sessionType = object.sessionType ?? 0;
        return message;
    },
};

const baseSetReplicationTokenMetadata: object = { subjectContainerId: '' };

export const SetReplicationTokenMetadata: {
    encode(message: SetReplicationTokenMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetReplicationTokenMetadata;
    fromJSON(object: any): SetReplicationTokenMetadata;
    toJSON(message: SetReplicationTokenMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<SetReplicationTokenMetadata>, I>>(object: I): SetReplicationTokenMetadata;
} = {
    encode(
        message: SetReplicationTokenMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.subjectContainerId !== '') {
            writer.uint32(10).string(message.subjectContainerId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SetReplicationTokenMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSetReplicationTokenMetadata } as SetReplicationTokenMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectContainerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SetReplicationTokenMetadata {
        const message = { ...baseSetReplicationTokenMetadata } as SetReplicationTokenMetadata;
        message.subjectContainerId =
            object.subjectContainerId !== undefined && object.subjectContainerId !== null
                ? String(object.subjectContainerId)
                : '';
        return message;
    },

    toJSON(message: SetReplicationTokenMetadata): unknown {
        const obj: any = {};
        message.subjectContainerId !== undefined &&
            (obj.subjectContainerId = message.subjectContainerId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SetReplicationTokenMetadata>, I>>(
        object: I,
    ): SetReplicationTokenMetadata {
        const message = { ...baseSetReplicationTokenMetadata } as SetReplicationTokenMetadata;
        message.subjectContainerId = object.subjectContainerId ?? '';
        return message;
    },
};

const baseResetReplicationTokenRequest: object = { subjectContainerId: '' };

export const ResetReplicationTokenRequest: {
    encode(message: ResetReplicationTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetReplicationTokenRequest;
    fromJSON(object: any): ResetReplicationTokenRequest;
    toJSON(message: ResetReplicationTokenRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ResetReplicationTokenRequest>, I>>(object: I): ResetReplicationTokenRequest;
} = {
    encode(
        message: ResetReplicationTokenRequest,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.subjectContainerId !== '') {
            writer.uint32(10).string(message.subjectContainerId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResetReplicationTokenRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResetReplicationTokenRequest } as ResetReplicationTokenRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectContainerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResetReplicationTokenRequest {
        const message = { ...baseResetReplicationTokenRequest } as ResetReplicationTokenRequest;
        message.subjectContainerId =
            object.subjectContainerId !== undefined && object.subjectContainerId !== null
                ? String(object.subjectContainerId)
                : '';
        return message;
    },

    toJSON(message: ResetReplicationTokenRequest): unknown {
        const obj: any = {};
        message.subjectContainerId !== undefined &&
            (obj.subjectContainerId = message.subjectContainerId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResetReplicationTokenRequest>, I>>(
        object: I,
    ): ResetReplicationTokenRequest {
        const message = { ...baseResetReplicationTokenRequest } as ResetReplicationTokenRequest;
        message.subjectContainerId = object.subjectContainerId ?? '';
        return message;
    },
};

const baseResetReplicationTokenMetadata: object = { subjectContainerId: '' };

export const ResetReplicationTokenMetadata: {
    encode(message: ResetReplicationTokenMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResetReplicationTokenMetadata;
    fromJSON(object: any): ResetReplicationTokenMetadata;
    toJSON(message: ResetReplicationTokenMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<ResetReplicationTokenMetadata>, I>>(object: I): ResetReplicationTokenMetadata;
} = {
    encode(
        message: ResetReplicationTokenMetadata,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.subjectContainerId !== '') {
            writer.uint32(10).string(message.subjectContainerId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ResetReplicationTokenMetadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResetReplicationTokenMetadata } as ResetReplicationTokenMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectContainerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResetReplicationTokenMetadata {
        const message = { ...baseResetReplicationTokenMetadata } as ResetReplicationTokenMetadata;
        message.subjectContainerId =
            object.subjectContainerId !== undefined && object.subjectContainerId !== null
                ? String(object.subjectContainerId)
                : '';
        return message;
    },

    toJSON(message: ResetReplicationTokenMetadata): unknown {
        const obj: any = {};
        message.subjectContainerId !== undefined &&
            (obj.subjectContainerId = message.subjectContainerId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ResetReplicationTokenMetadata>, I>>(
        object: I,
    ): ResetReplicationTokenMetadata {
        const message = { ...baseResetReplicationTokenMetadata } as ResetReplicationTokenMetadata;
        message.subjectContainerId = object.subjectContainerId ?? '';
        return message;
    },
};

/** A set of methods for managing synchronization settings. */
export const SynchronizationServiceService = {
    /** Sets the replication token for synchronization. */
    setReplicationToken: {
        path: '/yandex.cloud.organizationmanager.v1.idp.SynchronizationService/SetReplicationToken',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetReplicationTokenRequest) =>
            Buffer.from(SetReplicationTokenRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => SetReplicationTokenRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Resets the replication token for synchronization. */
    resetReplicationToken: {
        path: '/yandex.cloud.organizationmanager.v1.idp.SynchronizationService/ResetReplicationToken',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ResetReplicationTokenRequest) =>
            Buffer.from(ResetReplicationTokenRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ResetReplicationTokenRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Creates synchronization settings for a subject container. */
    createSynchronizationSettings: {
        path: '/yandex.cloud.organizationmanager.v1.idp.SynchronizationService/CreateSynchronizationSettings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateSynchronizationSettingsRequest) =>
            Buffer.from(CreateSynchronizationSettingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateSynchronizationSettingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates synchronization settings for a subject container. */
    updateSynchronizationSettings: {
        path: '/yandex.cloud.organizationmanager.v1.idp.SynchronizationService/UpdateSynchronizationSettings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateSynchronizationSettingsRequest) =>
            Buffer.from(UpdateSynchronizationSettingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateSynchronizationSettingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes synchronization settings for a subject container. */
    deleteSynchronizationSettings: {
        path: '/yandex.cloud.organizationmanager.v1.idp.SynchronizationService/DeleteSynchronizationSettings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteSynchronizationSettingsRequest) =>
            Buffer.from(DeleteSynchronizationSettingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteSynchronizationSettingsRequest.decode(value),
        responseSerialize: (value: Operation) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Returns synchronization settings for a subject container. */
    getSynchronizationSettings: {
        path: '/yandex.cloud.organizationmanager.v1.idp.SynchronizationService/GetSynchronizationSettings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetSynchronizationSettingsRequest) =>
            Buffer.from(GetSynchronizationSettingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetSynchronizationSettingsRequest.decode(value),
        responseSerialize: (value: SynchronizationSettings) =>
            Buffer.from(SynchronizationSettings.encode(value).finish()),
        responseDeserialize: (value: Buffer) => SynchronizationSettings.decode(value),
    },
    /** Lists supported attributes for synchronization. */
    listSupportedAttributes: {
        path: '/yandex.cloud.organizationmanager.v1.idp.SynchronizationService/ListSupportedAttributes',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListSupportedAttributesRequest) =>
            Buffer.from(ListSupportedAttributesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListSupportedAttributesRequest.decode(value),
        responseSerialize: (value: ListSupportedAttributesResponse) =>
            Buffer.from(ListSupportedAttributesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListSupportedAttributesResponse.decode(value),
    },
} as const;

export interface SynchronizationServiceServer extends UntypedServiceImplementation {
    /** Sets the replication token for synchronization. */
    setReplicationToken: handleUnaryCall<SetReplicationTokenRequest, Operation>;
    /** Resets the replication token for synchronization. */
    resetReplicationToken: handleUnaryCall<ResetReplicationTokenRequest, Operation>;
    /** Creates synchronization settings for a subject container. */
    createSynchronizationSettings: handleUnaryCall<CreateSynchronizationSettingsRequest, Operation>;
    /** Updates synchronization settings for a subject container. */
    updateSynchronizationSettings: handleUnaryCall<UpdateSynchronizationSettingsRequest, Operation>;
    /** Deletes synchronization settings for a subject container. */
    deleteSynchronizationSettings: handleUnaryCall<DeleteSynchronizationSettingsRequest, Operation>;
    /** Returns synchronization settings for a subject container. */
    getSynchronizationSettings: handleUnaryCall<
        GetSynchronizationSettingsRequest,
        SynchronizationSettings
    >;
    /** Lists supported attributes for synchronization. */
    listSupportedAttributes: handleUnaryCall<
        ListSupportedAttributesRequest,
        ListSupportedAttributesResponse
    >;
}

export interface SynchronizationServiceClient extends Client {
    /** Sets the replication token for synchronization. */
    setReplicationToken(
        request: SetReplicationTokenRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setReplicationToken(
        request: SetReplicationTokenRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    setReplicationToken(
        request: SetReplicationTokenRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Resets the replication token for synchronization. */
    resetReplicationToken(
        request: ResetReplicationTokenRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    resetReplicationToken(
        request: ResetReplicationTokenRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    resetReplicationToken(
        request: ResetReplicationTokenRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Creates synchronization settings for a subject container. */
    createSynchronizationSettings(
        request: CreateSynchronizationSettingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    createSynchronizationSettings(
        request: CreateSynchronizationSettingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    createSynchronizationSettings(
        request: CreateSynchronizationSettingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Updates synchronization settings for a subject container. */
    updateSynchronizationSettings(
        request: UpdateSynchronizationSettingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateSynchronizationSettings(
        request: UpdateSynchronizationSettingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    updateSynchronizationSettings(
        request: UpdateSynchronizationSettingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Deletes synchronization settings for a subject container. */
    deleteSynchronizationSettings(
        request: DeleteSynchronizationSettingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deleteSynchronizationSettings(
        request: DeleteSynchronizationSettingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    deleteSynchronizationSettings(
        request: DeleteSynchronizationSettingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void,
    ): ClientUnaryCall;
    /** Returns synchronization settings for a subject container. */
    getSynchronizationSettings(
        request: GetSynchronizationSettingsRequest,
        callback: (error: ServiceError | null, response: SynchronizationSettings) => void,
    ): ClientUnaryCall;
    getSynchronizationSettings(
        request: GetSynchronizationSettingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: SynchronizationSettings) => void,
    ): ClientUnaryCall;
    getSynchronizationSettings(
        request: GetSynchronizationSettingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: SynchronizationSettings) => void,
    ): ClientUnaryCall;
    /** Lists supported attributes for synchronization. */
    listSupportedAttributes(
        request: ListSupportedAttributesRequest,
        callback: (error: ServiceError | null, response: ListSupportedAttributesResponse) => void,
    ): ClientUnaryCall;
    listSupportedAttributes(
        request: ListSupportedAttributesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ListSupportedAttributesResponse) => void,
    ): ClientUnaryCall;
    listSupportedAttributes(
        request: ListSupportedAttributesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ListSupportedAttributesResponse) => void,
    ): ClientUnaryCall;
}

export const SynchronizationServiceClient = makeGenericClientConstructor(
    SynchronizationServiceService,
    'yandex.cloud.organizationmanager.v1.idp.SynchronizationService',
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): SynchronizationServiceClient;
    service: typeof SynchronizationServiceService;
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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
