/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.cloudregistry.v1';

/** Type of deletion for lifecycle rules. */
export enum DeleteLifecycleRuleKind {
    DELETE_LIFECYCLE_RULE_KIND_UNSPECIFIED = 0,
    /** HARD_DELETE - Hard delete - artifacts are permanently removed. */
    HARD_DELETE = 1,
    /** SOFT_DELETE - Soft delete - artifacts are marked for deletion but can be recovered. */
    SOFT_DELETE = 2,
    UNRECOGNIZED = -1,
}

export function deleteLifecycleRuleKindFromJSON(object: any): DeleteLifecycleRuleKind {
    switch (object) {
        case 0:
        case 'DELETE_LIFECYCLE_RULE_KIND_UNSPECIFIED':
            return DeleteLifecycleRuleKind.DELETE_LIFECYCLE_RULE_KIND_UNSPECIFIED;
        case 1:
        case 'HARD_DELETE':
            return DeleteLifecycleRuleKind.HARD_DELETE;
        case 2:
        case 'SOFT_DELETE':
            return DeleteLifecycleRuleKind.SOFT_DELETE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return DeleteLifecycleRuleKind.UNRECOGNIZED;
    }
}

export function deleteLifecycleRuleKindToJSON(object: DeleteLifecycleRuleKind): string {
    switch (object) {
        case DeleteLifecycleRuleKind.DELETE_LIFECYCLE_RULE_KIND_UNSPECIFIED:
            return 'DELETE_LIFECYCLE_RULE_KIND_UNSPECIFIED';
        case DeleteLifecycleRuleKind.HARD_DELETE:
            return 'HARD_DELETE';
        case DeleteLifecycleRuleKind.SOFT_DELETE:
            return 'SOFT_DELETE';
        default:
            return 'UNKNOWN';
    }
}

/** State of the lifecycle policy. */
export enum LifecyclePolicyState {
    LIFECYCLE_POLICY_STATE_UNSPECIFIED = 0,
    /** DISABLED - Policy is disabled and won't be executed. */
    DISABLED = 1,
    /** ENABLED - Policy is enabled and will be executed according to schedule. */
    ENABLED = 2,
    UNRECOGNIZED = -1,
}

export function lifecyclePolicyStateFromJSON(object: any): LifecyclePolicyState {
    switch (object) {
        case 0:
        case 'LIFECYCLE_POLICY_STATE_UNSPECIFIED':
            return LifecyclePolicyState.LIFECYCLE_POLICY_STATE_UNSPECIFIED;
        case 1:
        case 'DISABLED':
            return LifecyclePolicyState.DISABLED;
        case 2:
        case 'ENABLED':
            return LifecyclePolicyState.ENABLED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return LifecyclePolicyState.UNRECOGNIZED;
    }
}

export function lifecyclePolicyStateToJSON(object: LifecyclePolicyState): string {
    switch (object) {
        case LifecyclePolicyState.LIFECYCLE_POLICY_STATE_UNSPECIFIED:
            return 'LIFECYCLE_POLICY_STATE_UNSPECIFIED';
        case LifecyclePolicyState.DISABLED:
            return 'DISABLED';
        case LifecyclePolicyState.ENABLED:
            return 'ENABLED';
        default:
            return 'UNKNOWN';
    }
}

/** A LifecyclePolicy resource. */
export interface LifecyclePolicy {
    /** ID of the lifecycle policy. */
    id: string;
    /** Name of the lifecycle policy. */
    name: string;
    /** Description of the lifecycle policy. 0-1024 characters long. */
    description: string;
    /** List of lifecycle rules. */
    rules: LifecycleRule[];
    /** Current state of the lifecycle policy. */
    state: LifecyclePolicyState;
    /** ID of the registry that the lifecycle policy belongs to. */
    registryId: string;
    /** Output only. Creation timestamp. */
    createdAt?: Date;
    /** Output only. Modification timestamp. */
    modifiedAt?: Date;
    /** Output only. ID of the user who created the lifecycle policy. */
    createdBy: string;
    /** Output only. ID of the user who last modified the lifecycle policy. */
    modifiedBy: string;
}

/** A rule that defines lifecycle policy behavior. */
export interface LifecycleRule {
    /** Rule that keeps artifacts by age. */
    keepByAge?: KeepByAgeLifecycleRule | undefined;
    /** Rule that keeps artifacts by version count. */
    keepByVersion?: KeepByVersionLifecycleRule | undefined;
    /** Rule that deletes artifacts. */
    delete?: DeleteLifecycleRule | undefined;
    /** Docker-specific filters. */
    dockerFilters?: DockerFilters | undefined;
    /** Maven-specific filters. */
    mavenFilters?: MavenFilters | undefined;
    /** Path prefix to which the rule applies. */
    pathPrefix: string;
    /** Regular expression pattern to match package version or docker tag. */
    versionRegexp: string;
}

/** Docker-specific filters for lifecycle rules. */
export interface DockerFilters {
    /** Filter by tag status. */
    tagStatus: DockerFilters_TagStatus;
}

export enum DockerFilters_TagStatus {
    TAG_STATUS_UNSPECIFIED = 0,
    /** TAG_STATUS_ANY - Any tag status. */
    TAG_STATUS_ANY = 1,
    /** TAGGED - Only tagged images. */
    TAGGED = 2,
    /** UNTAGGED - Only untagged images. */
    UNTAGGED = 3,
    UNRECOGNIZED = -1,
}

export function dockerFilters_TagStatusFromJSON(object: any): DockerFilters_TagStatus {
    switch (object) {
        case 0:
        case 'TAG_STATUS_UNSPECIFIED':
            return DockerFilters_TagStatus.TAG_STATUS_UNSPECIFIED;
        case 1:
        case 'TAG_STATUS_ANY':
            return DockerFilters_TagStatus.TAG_STATUS_ANY;
        case 2:
        case 'TAGGED':
            return DockerFilters_TagStatus.TAGGED;
        case 3:
        case 'UNTAGGED':
            return DockerFilters_TagStatus.UNTAGGED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return DockerFilters_TagStatus.UNRECOGNIZED;
    }
}

export function dockerFilters_TagStatusToJSON(object: DockerFilters_TagStatus): string {
    switch (object) {
        case DockerFilters_TagStatus.TAG_STATUS_UNSPECIFIED:
            return 'TAG_STATUS_UNSPECIFIED';
        case DockerFilters_TagStatus.TAG_STATUS_ANY:
            return 'TAG_STATUS_ANY';
        case DockerFilters_TagStatus.TAGGED:
            return 'TAGGED';
        case DockerFilters_TagStatus.UNTAGGED:
            return 'UNTAGGED';
        default:
            return 'UNKNOWN';
    }
}

/** Maven-specific filters for lifecycle rules. */
export interface MavenFilters {
    /** Filter by version type. */
    versionType: MavenFilters_VersionType;
}

export enum MavenFilters_VersionType {
    VERSION_TYPE_UNSPECIFIED = 0,
    /** VERSION_TYPE_ANY - Any version type. */
    VERSION_TYPE_ANY = 1,
    /** RELEASE - Only release versions. */
    RELEASE = 2,
    /** SNAPSHOT - Only snapshot versions. */
    SNAPSHOT = 3,
    UNRECOGNIZED = -1,
}

export function mavenFilters_VersionTypeFromJSON(object: any): MavenFilters_VersionType {
    switch (object) {
        case 0:
        case 'VERSION_TYPE_UNSPECIFIED':
            return MavenFilters_VersionType.VERSION_TYPE_UNSPECIFIED;
        case 1:
        case 'VERSION_TYPE_ANY':
            return MavenFilters_VersionType.VERSION_TYPE_ANY;
        case 2:
        case 'RELEASE':
            return MavenFilters_VersionType.RELEASE;
        case 3:
        case 'SNAPSHOT':
            return MavenFilters_VersionType.SNAPSHOT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return MavenFilters_VersionType.UNRECOGNIZED;
    }
}

export function mavenFilters_VersionTypeToJSON(object: MavenFilters_VersionType): string {
    switch (object) {
        case MavenFilters_VersionType.VERSION_TYPE_UNSPECIFIED:
            return 'VERSION_TYPE_UNSPECIFIED';
        case MavenFilters_VersionType.VERSION_TYPE_ANY:
            return 'VERSION_TYPE_ANY';
        case MavenFilters_VersionType.RELEASE:
            return 'RELEASE';
        case MavenFilters_VersionType.SNAPSHOT:
            return 'SNAPSHOT';
        default:
            return 'UNKNOWN';
    }
}

/** Rule that keeps a specified number of recent versions. */
export interface KeepByVersionLifecycleRule {
    /** Number of versions to keep. */
    keepVersionsCount: number;
}

/** Rule that keeps artifacts younger than specified age. */
export interface KeepByAgeLifecycleRule {
    /** Keep artifacts younger than this number of days. */
    youngerThanDays: number;
}

/** Rule that deletes artifacts based on specified conditions. */
export interface DeleteLifecycleRule {
    /** Delete artifacts older than specified days. */
    olderThanDays: number | undefined;
    /** Delete artifacts by version count condition. */
    versionCondition?: DeleteByVersionCondition | undefined;
    /** Always delete (use with caution). */
    always: boolean | undefined;
    /** Type of deletion. */
    type: DeleteLifecycleRuleKind;
    /** Cooldown period in days before deletion. */
    cooldownPeriodDays: number;
}

/** Condition for deletion based on version count. */
export interface DeleteByVersionCondition {
    /** Delete when version count exceeds this number. */
    versionsCountGreaterThan: number;
}

const baseLifecyclePolicy: object = {
    id: '',
    name: '',
    description: '',
    state: 0,
    registryId: '',
    createdBy: '',
    modifiedBy: '',
};

export const LifecyclePolicy: {
    encode(message: LifecyclePolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LifecyclePolicy;
    fromJSON(object: any): LifecyclePolicy;
    toJSON(message: LifecyclePolicy): unknown;
    fromPartial<I extends Exact<DeepPartial<LifecyclePolicy>, I>>(object: I): LifecyclePolicy;
} = {
    encode(message: LifecyclePolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        for (const v of message.rules) {
            LifecycleRule.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(40).int32(message.state);
        }
        if (message.registryId !== '') {
            writer.uint32(50).string(message.registryId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(58).fork()).ldelim();
        }
        if (message.modifiedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.modifiedAt), writer.uint32(66).fork()).ldelim();
        }
        if (message.createdBy !== '') {
            writer.uint32(74).string(message.createdBy);
        }
        if (message.modifiedBy !== '') {
            writer.uint32(82).string(message.modifiedBy);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LifecyclePolicy {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLifecyclePolicy } as LifecyclePolicy;
        message.rules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.rules.push(LifecycleRule.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.state = reader.int32() as any;
                    break;
                case 6:
                    message.registryId = reader.string();
                    break;
                case 7:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.modifiedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.createdBy = reader.string();
                    break;
                case 10:
                    message.modifiedBy = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LifecyclePolicy {
        const message = { ...baseLifecyclePolicy } as LifecyclePolicy;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.rules = (object.rules ?? []).map((e: any) => LifecycleRule.fromJSON(e));
        message.state =
            object.state !== undefined && object.state !== null
                ? lifecyclePolicyStateFromJSON(object.state)
                : 0;
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.modifiedAt =
            object.modifiedAt !== undefined && object.modifiedAt !== null
                ? fromJsonTimestamp(object.modifiedAt)
                : undefined;
        message.createdBy =
            object.createdBy !== undefined && object.createdBy !== null
                ? String(object.createdBy)
                : '';
        message.modifiedBy =
            object.modifiedBy !== undefined && object.modifiedBy !== null
                ? String(object.modifiedBy)
                : '';
        return message;
    },

    toJSON(message: LifecyclePolicy): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        if (message.rules) {
            obj.rules = message.rules.map((e) => (e ? LifecycleRule.toJSON(e) : undefined));
        } else {
            obj.rules = [];
        }
        message.state !== undefined && (obj.state = lifecyclePolicyStateToJSON(message.state));
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.modifiedAt !== undefined && (obj.modifiedAt = message.modifiedAt.toISOString());
        message.createdBy !== undefined && (obj.createdBy = message.createdBy);
        message.modifiedBy !== undefined && (obj.modifiedBy = message.modifiedBy);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LifecyclePolicy>, I>>(object: I): LifecyclePolicy {
        const message = { ...baseLifecyclePolicy } as LifecyclePolicy;
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.rules = object.rules?.map((e) => LifecycleRule.fromPartial(e)) || [];
        message.state = object.state ?? 0;
        message.registryId = object.registryId ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.modifiedAt = object.modifiedAt ?? undefined;
        message.createdBy = object.createdBy ?? '';
        message.modifiedBy = object.modifiedBy ?? '';
        return message;
    },
};

const baseLifecycleRule: object = { pathPrefix: '', versionRegexp: '' };

export const LifecycleRule: {
    encode(message: LifecycleRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LifecycleRule;
    fromJSON(object: any): LifecycleRule;
    toJSON(message: LifecycleRule): unknown;
    fromPartial<I extends Exact<DeepPartial<LifecycleRule>, I>>(object: I): LifecycleRule;
} = {
    encode(message: LifecycleRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.keepByAge !== undefined) {
            KeepByAgeLifecycleRule.encode(message.keepByAge, writer.uint32(18).fork()).ldelim();
        }
        if (message.keepByVersion !== undefined) {
            KeepByVersionLifecycleRule.encode(
                message.keepByVersion,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.delete !== undefined) {
            DeleteLifecycleRule.encode(message.delete, writer.uint32(34).fork()).ldelim();
        }
        if (message.dockerFilters !== undefined) {
            DockerFilters.encode(message.dockerFilters, writer.uint32(42).fork()).ldelim();
        }
        if (message.mavenFilters !== undefined) {
            MavenFilters.encode(message.mavenFilters, writer.uint32(50).fork()).ldelim();
        }
        if (message.pathPrefix !== '') {
            writer.uint32(10).string(message.pathPrefix);
        }
        if (message.versionRegexp !== '') {
            writer.uint32(58).string(message.versionRegexp);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LifecycleRule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLifecycleRule } as LifecycleRule;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.keepByAge = KeepByAgeLifecycleRule.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.keepByVersion = KeepByVersionLifecycleRule.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 4:
                    message.delete = DeleteLifecycleRule.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.dockerFilters = DockerFilters.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.mavenFilters = MavenFilters.decode(reader, reader.uint32());
                    break;
                case 1:
                    message.pathPrefix = reader.string();
                    break;
                case 7:
                    message.versionRegexp = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LifecycleRule {
        const message = { ...baseLifecycleRule } as LifecycleRule;
        message.keepByAge =
            object.keepByAge !== undefined && object.keepByAge !== null
                ? KeepByAgeLifecycleRule.fromJSON(object.keepByAge)
                : undefined;
        message.keepByVersion =
            object.keepByVersion !== undefined && object.keepByVersion !== null
                ? KeepByVersionLifecycleRule.fromJSON(object.keepByVersion)
                : undefined;
        message.delete =
            object.delete !== undefined && object.delete !== null
                ? DeleteLifecycleRule.fromJSON(object.delete)
                : undefined;
        message.dockerFilters =
            object.dockerFilters !== undefined && object.dockerFilters !== null
                ? DockerFilters.fromJSON(object.dockerFilters)
                : undefined;
        message.mavenFilters =
            object.mavenFilters !== undefined && object.mavenFilters !== null
                ? MavenFilters.fromJSON(object.mavenFilters)
                : undefined;
        message.pathPrefix =
            object.pathPrefix !== undefined && object.pathPrefix !== null
                ? String(object.pathPrefix)
                : '';
        message.versionRegexp =
            object.versionRegexp !== undefined && object.versionRegexp !== null
                ? String(object.versionRegexp)
                : '';
        return message;
    },

    toJSON(message: LifecycleRule): unknown {
        const obj: any = {};
        message.keepByAge !== undefined &&
            (obj.keepByAge = message.keepByAge
                ? KeepByAgeLifecycleRule.toJSON(message.keepByAge)
                : undefined);
        message.keepByVersion !== undefined &&
            (obj.keepByVersion = message.keepByVersion
                ? KeepByVersionLifecycleRule.toJSON(message.keepByVersion)
                : undefined);
        message.delete !== undefined &&
            (obj.delete = message.delete ? DeleteLifecycleRule.toJSON(message.delete) : undefined);
        message.dockerFilters !== undefined &&
            (obj.dockerFilters = message.dockerFilters
                ? DockerFilters.toJSON(message.dockerFilters)
                : undefined);
        message.mavenFilters !== undefined &&
            (obj.mavenFilters = message.mavenFilters
                ? MavenFilters.toJSON(message.mavenFilters)
                : undefined);
        message.pathPrefix !== undefined && (obj.pathPrefix = message.pathPrefix);
        message.versionRegexp !== undefined && (obj.versionRegexp = message.versionRegexp);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<LifecycleRule>, I>>(object: I): LifecycleRule {
        const message = { ...baseLifecycleRule } as LifecycleRule;
        message.keepByAge =
            object.keepByAge !== undefined && object.keepByAge !== null
                ? KeepByAgeLifecycleRule.fromPartial(object.keepByAge)
                : undefined;
        message.keepByVersion =
            object.keepByVersion !== undefined && object.keepByVersion !== null
                ? KeepByVersionLifecycleRule.fromPartial(object.keepByVersion)
                : undefined;
        message.delete =
            object.delete !== undefined && object.delete !== null
                ? DeleteLifecycleRule.fromPartial(object.delete)
                : undefined;
        message.dockerFilters =
            object.dockerFilters !== undefined && object.dockerFilters !== null
                ? DockerFilters.fromPartial(object.dockerFilters)
                : undefined;
        message.mavenFilters =
            object.mavenFilters !== undefined && object.mavenFilters !== null
                ? MavenFilters.fromPartial(object.mavenFilters)
                : undefined;
        message.pathPrefix = object.pathPrefix ?? '';
        message.versionRegexp = object.versionRegexp ?? '';
        return message;
    },
};

const baseDockerFilters: object = { tagStatus: 0 };

export const DockerFilters: {
    encode(message: DockerFilters, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DockerFilters;
    fromJSON(object: any): DockerFilters;
    toJSON(message: DockerFilters): unknown;
    fromPartial<I extends Exact<DeepPartial<DockerFilters>, I>>(object: I): DockerFilters;
} = {
    encode(message: DockerFilters, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.tagStatus !== 0) {
            writer.uint32(8).int32(message.tagStatus);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DockerFilters {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDockerFilters } as DockerFilters;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tagStatus = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DockerFilters {
        const message = { ...baseDockerFilters } as DockerFilters;
        message.tagStatus =
            object.tagStatus !== undefined && object.tagStatus !== null
                ? dockerFilters_TagStatusFromJSON(object.tagStatus)
                : 0;
        return message;
    },

    toJSON(message: DockerFilters): unknown {
        const obj: any = {};
        message.tagStatus !== undefined &&
            (obj.tagStatus = dockerFilters_TagStatusToJSON(message.tagStatus));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DockerFilters>, I>>(object: I): DockerFilters {
        const message = { ...baseDockerFilters } as DockerFilters;
        message.tagStatus = object.tagStatus ?? 0;
        return message;
    },
};

const baseMavenFilters: object = { versionType: 0 };

export const MavenFilters: {
    encode(message: MavenFilters, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MavenFilters;
    fromJSON(object: any): MavenFilters;
    toJSON(message: MavenFilters): unknown;
    fromPartial<I extends Exact<DeepPartial<MavenFilters>, I>>(object: I): MavenFilters;
} = {
    encode(message: MavenFilters, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.versionType !== 0) {
            writer.uint32(8).int32(message.versionType);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MavenFilters {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMavenFilters } as MavenFilters;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.versionType = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MavenFilters {
        const message = { ...baseMavenFilters } as MavenFilters;
        message.versionType =
            object.versionType !== undefined && object.versionType !== null
                ? mavenFilters_VersionTypeFromJSON(object.versionType)
                : 0;
        return message;
    },

    toJSON(message: MavenFilters): unknown {
        const obj: any = {};
        message.versionType !== undefined &&
            (obj.versionType = mavenFilters_VersionTypeToJSON(message.versionType));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MavenFilters>, I>>(object: I): MavenFilters {
        const message = { ...baseMavenFilters } as MavenFilters;
        message.versionType = object.versionType ?? 0;
        return message;
    },
};

const baseKeepByVersionLifecycleRule: object = { keepVersionsCount: 0 };

export const KeepByVersionLifecycleRule: {
    encode(message: KeepByVersionLifecycleRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeepByVersionLifecycleRule;
    fromJSON(object: any): KeepByVersionLifecycleRule;
    toJSON(message: KeepByVersionLifecycleRule): unknown;
    fromPartial<I extends Exact<DeepPartial<KeepByVersionLifecycleRule>, I>>(object: I): KeepByVersionLifecycleRule;
} = {
    encode(
        message: KeepByVersionLifecycleRule,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.keepVersionsCount !== 0) {
            writer.uint32(8).int64(message.keepVersionsCount);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): KeepByVersionLifecycleRule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseKeepByVersionLifecycleRule } as KeepByVersionLifecycleRule;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keepVersionsCount = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): KeepByVersionLifecycleRule {
        const message = { ...baseKeepByVersionLifecycleRule } as KeepByVersionLifecycleRule;
        message.keepVersionsCount =
            object.keepVersionsCount !== undefined && object.keepVersionsCount !== null
                ? Number(object.keepVersionsCount)
                : 0;
        return message;
    },

    toJSON(message: KeepByVersionLifecycleRule): unknown {
        const obj: any = {};
        message.keepVersionsCount !== undefined &&
            (obj.keepVersionsCount = Math.round(message.keepVersionsCount));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<KeepByVersionLifecycleRule>, I>>(
        object: I,
    ): KeepByVersionLifecycleRule {
        const message = { ...baseKeepByVersionLifecycleRule } as KeepByVersionLifecycleRule;
        message.keepVersionsCount = object.keepVersionsCount ?? 0;
        return message;
    },
};

const baseKeepByAgeLifecycleRule: object = { youngerThanDays: 0 };

export const KeepByAgeLifecycleRule: {
    encode(message: KeepByAgeLifecycleRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeepByAgeLifecycleRule;
    fromJSON(object: any): KeepByAgeLifecycleRule;
    toJSON(message: KeepByAgeLifecycleRule): unknown;
    fromPartial<I extends Exact<DeepPartial<KeepByAgeLifecycleRule>, I>>(object: I): KeepByAgeLifecycleRule;
} = {
    encode(message: KeepByAgeLifecycleRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.youngerThanDays !== 0) {
            writer.uint32(8).int64(message.youngerThanDays);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): KeepByAgeLifecycleRule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseKeepByAgeLifecycleRule } as KeepByAgeLifecycleRule;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.youngerThanDays = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): KeepByAgeLifecycleRule {
        const message = { ...baseKeepByAgeLifecycleRule } as KeepByAgeLifecycleRule;
        message.youngerThanDays =
            object.youngerThanDays !== undefined && object.youngerThanDays !== null
                ? Number(object.youngerThanDays)
                : 0;
        return message;
    },

    toJSON(message: KeepByAgeLifecycleRule): unknown {
        const obj: any = {};
        message.youngerThanDays !== undefined &&
            (obj.youngerThanDays = Math.round(message.youngerThanDays));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<KeepByAgeLifecycleRule>, I>>(
        object: I,
    ): KeepByAgeLifecycleRule {
        const message = { ...baseKeepByAgeLifecycleRule } as KeepByAgeLifecycleRule;
        message.youngerThanDays = object.youngerThanDays ?? 0;
        return message;
    },
};

const baseDeleteLifecycleRule: object = { type: 0, cooldownPeriodDays: 0 };

export const DeleteLifecycleRule: {
    encode(message: DeleteLifecycleRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteLifecycleRule;
    fromJSON(object: any): DeleteLifecycleRule;
    toJSON(message: DeleteLifecycleRule): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteLifecycleRule>, I>>(object: I): DeleteLifecycleRule;
} = {
    encode(message: DeleteLifecycleRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.olderThanDays !== undefined) {
            writer.uint32(24).int64(message.olderThanDays);
        }
        if (message.versionCondition !== undefined) {
            DeleteByVersionCondition.encode(
                message.versionCondition,
                writer.uint32(34).fork(),
            ).ldelim();
        }
        if (message.always !== undefined) {
            writer.uint32(40).bool(message.always);
        }
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.cooldownPeriodDays !== 0) {
            writer.uint32(16).int64(message.cooldownPeriodDays);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteLifecycleRule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteLifecycleRule } as DeleteLifecycleRule;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.olderThanDays = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.versionCondition = DeleteByVersionCondition.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 5:
                    message.always = reader.bool();
                    break;
                case 1:
                    message.type = reader.int32() as any;
                    break;
                case 2:
                    message.cooldownPeriodDays = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteLifecycleRule {
        const message = { ...baseDeleteLifecycleRule } as DeleteLifecycleRule;
        message.olderThanDays =
            object.olderThanDays !== undefined && object.olderThanDays !== null
                ? Number(object.olderThanDays)
                : undefined;
        message.versionCondition =
            object.versionCondition !== undefined && object.versionCondition !== null
                ? DeleteByVersionCondition.fromJSON(object.versionCondition)
                : undefined;
        message.always =
            object.always !== undefined && object.always !== null
                ? Boolean(object.always)
                : undefined;
        message.type =
            object.type !== undefined && object.type !== null
                ? deleteLifecycleRuleKindFromJSON(object.type)
                : 0;
        message.cooldownPeriodDays =
            object.cooldownPeriodDays !== undefined && object.cooldownPeriodDays !== null
                ? Number(object.cooldownPeriodDays)
                : 0;
        return message;
    },

    toJSON(message: DeleteLifecycleRule): unknown {
        const obj: any = {};
        message.olderThanDays !== undefined &&
            (obj.olderThanDays = Math.round(message.olderThanDays));
        message.versionCondition !== undefined &&
            (obj.versionCondition = message.versionCondition
                ? DeleteByVersionCondition.toJSON(message.versionCondition)
                : undefined);
        message.always !== undefined && (obj.always = message.always);
        message.type !== undefined && (obj.type = deleteLifecycleRuleKindToJSON(message.type));
        message.cooldownPeriodDays !== undefined &&
            (obj.cooldownPeriodDays = Math.round(message.cooldownPeriodDays));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteLifecycleRule>, I>>(
        object: I,
    ): DeleteLifecycleRule {
        const message = { ...baseDeleteLifecycleRule } as DeleteLifecycleRule;
        message.olderThanDays = object.olderThanDays ?? undefined;
        message.versionCondition =
            object.versionCondition !== undefined && object.versionCondition !== null
                ? DeleteByVersionCondition.fromPartial(object.versionCondition)
                : undefined;
        message.always = object.always ?? undefined;
        message.type = object.type ?? 0;
        message.cooldownPeriodDays = object.cooldownPeriodDays ?? 0;
        return message;
    },
};

const baseDeleteByVersionCondition: object = { versionsCountGreaterThan: 0 };

export const DeleteByVersionCondition: {
    encode(message: DeleteByVersionCondition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteByVersionCondition;
    fromJSON(object: any): DeleteByVersionCondition;
    toJSON(message: DeleteByVersionCondition): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteByVersionCondition>, I>>(object: I): DeleteByVersionCondition;
} = {
    encode(
        message: DeleteByVersionCondition,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.versionsCountGreaterThan !== 0) {
            writer.uint32(8).int64(message.versionsCountGreaterThan);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteByVersionCondition {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteByVersionCondition } as DeleteByVersionCondition;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.versionsCountGreaterThan = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteByVersionCondition {
        const message = { ...baseDeleteByVersionCondition } as DeleteByVersionCondition;
        message.versionsCountGreaterThan =
            object.versionsCountGreaterThan !== undefined &&
            object.versionsCountGreaterThan !== null
                ? Number(object.versionsCountGreaterThan)
                : 0;
        return message;
    },

    toJSON(message: DeleteByVersionCondition): unknown {
        const obj: any = {};
        message.versionsCountGreaterThan !== undefined &&
            (obj.versionsCountGreaterThan = Math.round(message.versionsCountGreaterThan));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<DeleteByVersionCondition>, I>>(
        object: I,
    ): DeleteByVersionCondition {
        const message = { ...baseDeleteByVersionCondition } as DeleteByVersionCondition;
        message.versionsCountGreaterThan = object.versionsCountGreaterThan ?? 0;
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
