/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Duration } from '../../../../../google/protobuf/duration';
import { Timestamp } from '../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.organizationmanager.v1.idp';

/** Type of attribute mapping. */
export enum MappingType {
    /** MAPPING_TYPE_UNSPECIFIED - The mapping type is not specified. */
    MAPPING_TYPE_UNSPECIFIED = 0,
    /** DIRECT - Direct mapping from source to target. */
    DIRECT = 1,
    /** EMPTY - Empty mapping (no source attribute). */
    EMPTY = 2,
    UNRECOGNIZED = -1,
}

export function mappingTypeFromJSON(object: any): MappingType {
    switch (object) {
        case 0:
        case 'MAPPING_TYPE_UNSPECIFIED':
            return MappingType.MAPPING_TYPE_UNSPECIFIED;
        case 1:
        case 'DIRECT':
            return MappingType.DIRECT;
        case 2:
        case 'EMPTY':
            return MappingType.EMPTY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return MappingType.UNRECOGNIZED;
    }
}

export function mappingTypeToJSON(object: MappingType): string {
    switch (object) {
        case MappingType.MAPPING_TYPE_UNSPECIFIED:
            return 'MAPPING_TYPE_UNSPECIFIED';
        case MappingType.DIRECT:
            return 'DIRECT';
        case MappingType.EMPTY:
            return 'EMPTY';
        default:
            return 'UNKNOWN';
    }
}

/** Target attributes for user mapping. */
export enum UserTargetAttribute {
    /** USER_TARGET_ATTRIBUTE_UNSPECIFIED - The target attribute is not specified. */
    USER_TARGET_ATTRIBUTE_UNSPECIFIED = 0,
    /** FULL_NAME - Full name attribute. */
    FULL_NAME = 1,
    /** GIVEN_NAME - Given name attribute. */
    GIVEN_NAME = 2,
    /** FAMILY_NAME - Family name attribute. */
    FAMILY_NAME = 3,
    /** EMAIL - Email attribute. */
    EMAIL = 4,
    /** PHONE_NUMBER - Phone number attribute. */
    PHONE_NUMBER = 5,
    /** USERNAME - Username attribute. */
    USERNAME = 6,
    /** COMPANY_NAME - Company name attribute. */
    COMPANY_NAME = 7,
    /** JOB_TITLE - Job title attribute. */
    JOB_TITLE = 8,
    /** DEPARTMENT - Department attribute. */
    DEPARTMENT = 9,
    /** EMPLOYEE_ID - Employee ID attribute. */
    EMPLOYEE_ID = 10,
    UNRECOGNIZED = -1,
}

export function userTargetAttributeFromJSON(object: any): UserTargetAttribute {
    switch (object) {
        case 0:
        case 'USER_TARGET_ATTRIBUTE_UNSPECIFIED':
            return UserTargetAttribute.USER_TARGET_ATTRIBUTE_UNSPECIFIED;
        case 1:
        case 'FULL_NAME':
            return UserTargetAttribute.FULL_NAME;
        case 2:
        case 'GIVEN_NAME':
            return UserTargetAttribute.GIVEN_NAME;
        case 3:
        case 'FAMILY_NAME':
            return UserTargetAttribute.FAMILY_NAME;
        case 4:
        case 'EMAIL':
            return UserTargetAttribute.EMAIL;
        case 5:
        case 'PHONE_NUMBER':
            return UserTargetAttribute.PHONE_NUMBER;
        case 6:
        case 'USERNAME':
            return UserTargetAttribute.USERNAME;
        case 7:
        case 'COMPANY_NAME':
            return UserTargetAttribute.COMPANY_NAME;
        case 8:
        case 'JOB_TITLE':
            return UserTargetAttribute.JOB_TITLE;
        case 9:
        case 'DEPARTMENT':
            return UserTargetAttribute.DEPARTMENT;
        case 10:
        case 'EMPLOYEE_ID':
            return UserTargetAttribute.EMPLOYEE_ID;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserTargetAttribute.UNRECOGNIZED;
    }
}

export function userTargetAttributeToJSON(object: UserTargetAttribute): string {
    switch (object) {
        case UserTargetAttribute.USER_TARGET_ATTRIBUTE_UNSPECIFIED:
            return 'USER_TARGET_ATTRIBUTE_UNSPECIFIED';
        case UserTargetAttribute.FULL_NAME:
            return 'FULL_NAME';
        case UserTargetAttribute.GIVEN_NAME:
            return 'GIVEN_NAME';
        case UserTargetAttribute.FAMILY_NAME:
            return 'FAMILY_NAME';
        case UserTargetAttribute.EMAIL:
            return 'EMAIL';
        case UserTargetAttribute.PHONE_NUMBER:
            return 'PHONE_NUMBER';
        case UserTargetAttribute.USERNAME:
            return 'USERNAME';
        case UserTargetAttribute.COMPANY_NAME:
            return 'COMPANY_NAME';
        case UserTargetAttribute.JOB_TITLE:
            return 'JOB_TITLE';
        case UserTargetAttribute.DEPARTMENT:
            return 'DEPARTMENT';
        case UserTargetAttribute.EMPLOYEE_ID:
            return 'EMPLOYEE_ID';
        default:
            return 'UNKNOWN';
    }
}

/** Target attributes for group mapping. */
export enum GroupTargetAttribute {
    /** GROUP_TARGET_ATTRIBUTE_UNSPECIFIED - The target attribute is not specified. */
    GROUP_TARGET_ATTRIBUTE_UNSPECIFIED = 0,
    /** NAME - Name attribute. */
    NAME = 1,
    /** DESCRIPTION - Description attribute. */
    DESCRIPTION = 2,
    UNRECOGNIZED = -1,
}

export function groupTargetAttributeFromJSON(object: any): GroupTargetAttribute {
    switch (object) {
        case 0:
        case 'GROUP_TARGET_ATTRIBUTE_UNSPECIFIED':
            return GroupTargetAttribute.GROUP_TARGET_ATTRIBUTE_UNSPECIFIED;
        case 1:
        case 'NAME':
            return GroupTargetAttribute.NAME;
        case 2:
        case 'DESCRIPTION':
            return GroupTargetAttribute.DESCRIPTION;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return GroupTargetAttribute.UNRECOGNIZED;
    }
}

export function groupTargetAttributeToJSON(object: GroupTargetAttribute): string {
    switch (object) {
        case GroupTargetAttribute.GROUP_TARGET_ATTRIBUTE_UNSPECIFIED:
            return 'GROUP_TARGET_ATTRIBUTE_UNSPECIFIED';
        case GroupTargetAttribute.NAME:
            return 'NAME';
        case GroupTargetAttribute.DESCRIPTION:
            return 'DESCRIPTION';
        default:
            return 'UNKNOWN';
    }
}

/** Behavior when removing users during synchronization. */
export enum RemoveUserBehavior {
    /** REMOVE_USER_BEHAVIOR_UNSPECIFIED - The behavior is not specified. */
    REMOVE_USER_BEHAVIOR_UNSPECIFIED = 0,
    /** REMOVE - Remove the user. */
    REMOVE = 1,
    /** BLOCK - Block the user. */
    BLOCK = 2,
    UNRECOGNIZED = -1,
}

export function removeUserBehaviorFromJSON(object: any): RemoveUserBehavior {
    switch (object) {
        case 0:
        case 'REMOVE_USER_BEHAVIOR_UNSPECIFIED':
            return RemoveUserBehavior.REMOVE_USER_BEHAVIOR_UNSPECIFIED;
        case 1:
        case 'REMOVE':
            return RemoveUserBehavior.REMOVE;
        case 2:
        case 'BLOCK':
            return RemoveUserBehavior.BLOCK;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return RemoveUserBehavior.UNRECOGNIZED;
    }
}

export function removeUserBehaviorToJSON(object: RemoveUserBehavior): string {
    switch (object) {
        case RemoveUserBehavior.REMOVE_USER_BEHAVIOR_UNSPECIFIED:
            return 'REMOVE_USER_BEHAVIOR_UNSPECIFIED';
        case RemoveUserBehavior.REMOVE:
            return 'REMOVE';
        case RemoveUserBehavior.BLOCK:
            return 'BLOCK';
        default:
            return 'UNKNOWN';
    }
}

/** Type of synchronization session. */
export enum SessionType {
    /** SESSION_TYPE_UNSPECIFIED - The session type is not specified. */
    SESSION_TYPE_UNSPECIFIED = 0,
    /** AD_SYNC - Active Directory synchronization session. */
    AD_SYNC = 1,
    /** AD_PASSWORD_HASH - Active Directory password hash session. */
    AD_PASSWORD_HASH = 2,
    /** AD_USER_CONTROL - Active Directory user control session. */
    AD_USER_CONTROL = 3,
    UNRECOGNIZED = -1,
}

export function sessionTypeFromJSON(object: any): SessionType {
    switch (object) {
        case 0:
        case 'SESSION_TYPE_UNSPECIFIED':
            return SessionType.SESSION_TYPE_UNSPECIFIED;
        case 1:
        case 'AD_SYNC':
            return SessionType.AD_SYNC;
        case 2:
        case 'AD_PASSWORD_HASH':
            return SessionType.AD_PASSWORD_HASH;
        case 3:
        case 'AD_USER_CONTROL':
            return SessionType.AD_USER_CONTROL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SessionType.UNRECOGNIZED;
    }
}

export function sessionTypeToJSON(object: SessionType): string {
    switch (object) {
        case SessionType.SESSION_TYPE_UNSPECIFIED:
            return 'SESSION_TYPE_UNSPECIFIED';
        case SessionType.AD_SYNC:
            return 'AD_SYNC';
        case SessionType.AD_PASSWORD_HASH:
            return 'AD_PASSWORD_HASH';
        case SessionType.AD_USER_CONTROL:
            return 'AD_USER_CONTROL';
        default:
            return 'UNKNOWN';
    }
}

/** Synchronization settings for a subject container. */
export interface SynchronizationSettings {
    /** ID of the subject container. */
    subjectContainerId: string;
    /** Filter configuration for synchronization. */
    filter?: SynchronizationFilter;
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
    /** Timestamp when the settings were created. */
    createdAt?: Date;
    /** Domain replacement configuration. */
    replacementDomain: string;
}

/** Filter configuration for synchronization. */
export interface SynchronizationFilter {
    /** Domain to synchronize. */
    domain: string;
    /** List of groups to synchronize. */
    groups: string[];
    /** List of organizational units to synchronize. */
    organizationUnits: string[];
}

/** User attribute mapping configuration. */
export interface UserAttributeMapping {
    /** Source attribute name. */
    source: string;
    /** Target attribute to map to. */
    target: UserTargetAttribute;
    /** Type of mapping. */
    type: MappingType;
}

/** Group attribute mapping configuration. */
export interface GroupAttributeMapping {
    /** Source attribute name. */
    source: string;
    /** Target attribute to map to. */
    target: GroupTargetAttribute;
    /** Type of mapping. */
    type: MappingType;
}

const baseSynchronizationSettings: object = {
    subjectContainerId: '',
    removeUserBehavior: 0,
    allowToCaptureUsers: false,
    allowToCaptureGroups: false,
    replacementDomain: '',
};

export const SynchronizationSettings: {
    encode(message: SynchronizationSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SynchronizationSettings;
    fromJSON(object: any): SynchronizationSettings;
    toJSON(message: SynchronizationSettings): unknown;
    fromPartial<I extends Exact<DeepPartial<SynchronizationSettings>, I>>(object: I): SynchronizationSettings;
} = {
    encode(message: SynchronizationSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.subjectContainerId !== '') {
            writer.uint32(10).string(message.subjectContainerId);
        }
        if (message.filter !== undefined) {
            SynchronizationFilter.encode(message.filter, writer.uint32(18).fork()).ldelim();
        }
        if (message.removeUserBehavior !== 0) {
            writer.uint32(24).int32(message.removeUserBehavior);
        }
        if (message.synchronizationInterval !== undefined) {
            Duration.encode(message.synchronizationInterval, writer.uint32(34).fork()).ldelim();
        }
        if (message.allowToCaptureUsers === true) {
            writer.uint32(40).bool(message.allowToCaptureUsers);
        }
        if (message.allowToCaptureGroups === true) {
            writer.uint32(48).bool(message.allowToCaptureGroups);
        }
        for (const v of message.userAttributeMappings) {
            UserAttributeMapping.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.groupAttributeMappings) {
            GroupAttributeMapping.encode(v!, writer.uint32(66).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(74).fork()).ldelim();
        }
        if (message.replacementDomain !== '') {
            writer.uint32(82).string(message.replacementDomain);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SynchronizationSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSynchronizationSettings } as SynchronizationSettings;
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
                    message.removeUserBehavior = reader.int32() as any;
                    break;
                case 4:
                    message.synchronizationInterval = Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.allowToCaptureUsers = reader.bool();
                    break;
                case 6:
                    message.allowToCaptureGroups = reader.bool();
                    break;
                case 7:
                    message.userAttributeMappings.push(
                        UserAttributeMapping.decode(reader, reader.uint32()),
                    );
                    break;
                case 8:
                    message.groupAttributeMappings.push(
                        GroupAttributeMapping.decode(reader, reader.uint32()),
                    );
                    break;
                case 9:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.replacementDomain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SynchronizationSettings {
        const message = { ...baseSynchronizationSettings } as SynchronizationSettings;
        message.subjectContainerId =
            object.subjectContainerId !== undefined && object.subjectContainerId !== null
                ? String(object.subjectContainerId)
                : '';
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? SynchronizationFilter.fromJSON(object.filter)
                : undefined;
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
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.replacementDomain =
            object.replacementDomain !== undefined && object.replacementDomain !== null
                ? String(object.replacementDomain)
                : '';
        return message;
    },

    toJSON(message: SynchronizationSettings): unknown {
        const obj: any = {};
        message.subjectContainerId !== undefined &&
            (obj.subjectContainerId = message.subjectContainerId);
        message.filter !== undefined &&
            (obj.filter = message.filter
                ? SynchronizationFilter.toJSON(message.filter)
                : undefined);
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
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.replacementDomain !== undefined &&
            (obj.replacementDomain = message.replacementDomain);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SynchronizationSettings>, I>>(
        object: I,
    ): SynchronizationSettings {
        const message = { ...baseSynchronizationSettings } as SynchronizationSettings;
        message.subjectContainerId = object.subjectContainerId ?? '';
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? SynchronizationFilter.fromPartial(object.filter)
                : undefined;
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
        message.createdAt = object.createdAt ?? undefined;
        message.replacementDomain = object.replacementDomain ?? '';
        return message;
    },
};

const baseSynchronizationFilter: object = { domain: '', groups: '', organizationUnits: '' };

export const SynchronizationFilter: {
    encode(message: SynchronizationFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SynchronizationFilter;
    fromJSON(object: any): SynchronizationFilter;
    toJSON(message: SynchronizationFilter): unknown;
    fromPartial<I extends Exact<DeepPartial<SynchronizationFilter>, I>>(object: I): SynchronizationFilter;
} = {
    encode(message: SynchronizationFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.domain !== '') {
            writer.uint32(10).string(message.domain);
        }
        for (const v of message.groups) {
            writer.uint32(18).string(v!);
        }
        for (const v of message.organizationUnits) {
            writer.uint32(26).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SynchronizationFilter {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSynchronizationFilter } as SynchronizationFilter;
        message.groups = [];
        message.organizationUnits = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.domain = reader.string();
                    break;
                case 2:
                    message.groups.push(reader.string());
                    break;
                case 3:
                    message.organizationUnits.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SynchronizationFilter {
        const message = { ...baseSynchronizationFilter } as SynchronizationFilter;
        message.domain =
            object.domain !== undefined && object.domain !== null ? String(object.domain) : '';
        message.groups = (object.groups ?? []).map((e: any) => String(e));
        message.organizationUnits = (object.organizationUnits ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: SynchronizationFilter): unknown {
        const obj: any = {};
        message.domain !== undefined && (obj.domain = message.domain);
        if (message.groups) {
            obj.groups = message.groups.map((e) => e);
        } else {
            obj.groups = [];
        }
        if (message.organizationUnits) {
            obj.organizationUnits = message.organizationUnits.map((e) => e);
        } else {
            obj.organizationUnits = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SynchronizationFilter>, I>>(
        object: I,
    ): SynchronizationFilter {
        const message = { ...baseSynchronizationFilter } as SynchronizationFilter;
        message.domain = object.domain ?? '';
        message.groups = object.groups?.map((e) => e) || [];
        message.organizationUnits = object.organizationUnits?.map((e) => e) || [];
        return message;
    },
};

const baseUserAttributeMapping: object = { source: '', target: 0, type: 0 };

export const UserAttributeMapping: {
    encode(message: UserAttributeMapping, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserAttributeMapping;
    fromJSON(object: any): UserAttributeMapping;
    toJSON(message: UserAttributeMapping): unknown;
    fromPartial<I extends Exact<DeepPartial<UserAttributeMapping>, I>>(object: I): UserAttributeMapping;
} = {
    encode(message: UserAttributeMapping, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.source !== '') {
            writer.uint32(10).string(message.source);
        }
        if (message.target !== 0) {
            writer.uint32(16).int32(message.target);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UserAttributeMapping {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUserAttributeMapping } as UserAttributeMapping;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.source = reader.string();
                    break;
                case 2:
                    message.target = reader.int32() as any;
                    break;
                case 3:
                    message.type = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UserAttributeMapping {
        const message = { ...baseUserAttributeMapping } as UserAttributeMapping;
        message.source =
            object.source !== undefined && object.source !== null ? String(object.source) : '';
        message.target =
            object.target !== undefined && object.target !== null
                ? userTargetAttributeFromJSON(object.target)
                : 0;
        message.type =
            object.type !== undefined && object.type !== null
                ? mappingTypeFromJSON(object.type)
                : 0;
        return message;
    },

    toJSON(message: UserAttributeMapping): unknown {
        const obj: any = {};
        message.source !== undefined && (obj.source = message.source);
        message.target !== undefined && (obj.target = userTargetAttributeToJSON(message.target));
        message.type !== undefined && (obj.type = mappingTypeToJSON(message.type));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UserAttributeMapping>, I>>(
        object: I,
    ): UserAttributeMapping {
        const message = { ...baseUserAttributeMapping } as UserAttributeMapping;
        message.source = object.source ?? '';
        message.target = object.target ?? 0;
        message.type = object.type ?? 0;
        return message;
    },
};

const baseGroupAttributeMapping: object = { source: '', target: 0, type: 0 };

export const GroupAttributeMapping: {
    encode(message: GroupAttributeMapping, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GroupAttributeMapping;
    fromJSON(object: any): GroupAttributeMapping;
    toJSON(message: GroupAttributeMapping): unknown;
    fromPartial<I extends Exact<DeepPartial<GroupAttributeMapping>, I>>(object: I): GroupAttributeMapping;
} = {
    encode(message: GroupAttributeMapping, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.source !== '') {
            writer.uint32(10).string(message.source);
        }
        if (message.target !== 0) {
            writer.uint32(16).int32(message.target);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GroupAttributeMapping {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGroupAttributeMapping } as GroupAttributeMapping;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.source = reader.string();
                    break;
                case 2:
                    message.target = reader.int32() as any;
                    break;
                case 3:
                    message.type = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GroupAttributeMapping {
        const message = { ...baseGroupAttributeMapping } as GroupAttributeMapping;
        message.source =
            object.source !== undefined && object.source !== null ? String(object.source) : '';
        message.target =
            object.target !== undefined && object.target !== null
                ? groupTargetAttributeFromJSON(object.target)
                : 0;
        message.type =
            object.type !== undefined && object.type !== null
                ? mappingTypeFromJSON(object.type)
                : 0;
        return message;
    },

    toJSON(message: GroupAttributeMapping): unknown {
        const obj: any = {};
        message.source !== undefined && (obj.source = message.source);
        message.target !== undefined && (obj.target = groupTargetAttributeToJSON(message.target));
        message.type !== undefined && (obj.type = mappingTypeToJSON(message.type));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<GroupAttributeMapping>, I>>(
        object: I,
    ): GroupAttributeMapping {
        const message = { ...baseGroupAttributeMapping } as GroupAttributeMapping;
        message.source = object.source ?? '';
        message.target = object.target ?? 0;
        message.type = object.type ?? 0;
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
