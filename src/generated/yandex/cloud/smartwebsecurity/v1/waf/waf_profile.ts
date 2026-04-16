/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Condition } from '../security_profile';
import { Timestamp } from '../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.smartwebsecurity.v1.waf';

export interface WafProfile {
    /** ID of the WAF profile. */
    id: string;
    /** ID of the folder that the WAF profile belongs to. */
    folderId: string;
    /** ID of the cloud that the WAF profile belongs to. */
    cloudId: string;
    /** Name of the WAF profile. The name is unique within the folder. 1-50 characters long. */
    name: string;
    /** Optional description of the WAF profile. */
    description: string;
    /** Labels as `` key:value `` pairs. Maximum of 64 per resource. */
    labels: { [key: string]: string };
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt?: Date;
    /** Settings for each rule in rule set. */
    rules: WafProfileRule[];
    /** List of exclusion rules. See [Rules](/docs/smartwebsecurity/concepts/waf#exclusion-rules). */
    exclusionRules: WafProfileExclusionRule[];
    /**
     * The parameter is deprecated. Core rule set settings.
     *
     * @deprecated
     */
    coreRuleSet?: WafProfile_CoreRuleSet | undefined;
    /**
     * The parameter is deprecated. Parameters for request body analyzer.
     *
     * @deprecated
     */
    analyzeRequestBody?: WafProfile_AnalyzeRequestBody;
    /** List of rule sets. */
    ruleSets: WafProfile_WafProfileRuleSet[];
    /** Determines */
    matchAllRuleSets: boolean;
}

export interface WafProfile_LabelsEntry {
    key: string;
    value: string;
}

export interface WafProfile_CoreRuleSet {
    /**
     * Anomaly score.
     * Enter an integer within the range of 2 and 10000.
     * The higher this value, the more likely it is that the request that satisfies the rule is an attack.
     * See [Rules](/docs/smartwebsecurity/concepts/waf#anomaly) for more details.
     */
    inboundAnomalyScore: number;
    /**
     * Paranoia level.
     * Enter an integer within the range of 1 and 4.
     * Paranoia level classifies rules according to their aggression. The higher the paranoia level, the better your protection,
     * but also the higher the probability of WAF false positives.
     * See [Rules](/docs/smartwebsecurity/concepts/waf#paranoia) for more details.
     * NOTE: this option has no effect on enabling or disabling rules.
     * it is used only as recommendation for user to enable all rules with paranoia_level <= this value.
     */
    paranoiaLevel: number;
    /** Rule set. */
    ruleSet?: RuleSet;
}

export interface WafProfile_AnalyzeRequestBody {
    /** Possible to turn analyzer on and turn if off. */
    isEnabled: boolean;
    /** Maximum size of body to pass to analyzer. In kilobytes. */
    sizeLimit: number;
    /** Action to perform if maximum size of body exceeded. */
    sizeLimitAction: WafProfile_AnalyzeRequestBody_Action;
}

/** Action to perform if maximum size of body exceeded. */
export enum WafProfile_AnalyzeRequestBody_Action {
    ACTION_UNSPECIFIED = 0,
    /** IGNORE - Ignore request. */
    IGNORE = 1,
    /** DENY - Deny request. */
    DENY = 2,
    UNRECOGNIZED = -1,
}

export function wafProfile_AnalyzeRequestBody_ActionFromJSON(
    object: any,
): WafProfile_AnalyzeRequestBody_Action {
    switch (object) {
        case 0:
        case 'ACTION_UNSPECIFIED':
            return WafProfile_AnalyzeRequestBody_Action.ACTION_UNSPECIFIED;
        case 1:
        case 'IGNORE':
            return WafProfile_AnalyzeRequestBody_Action.IGNORE;
        case 2:
        case 'DENY':
            return WafProfile_AnalyzeRequestBody_Action.DENY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return WafProfile_AnalyzeRequestBody_Action.UNRECOGNIZED;
    }
}

export function wafProfile_AnalyzeRequestBody_ActionToJSON(
    object: WafProfile_AnalyzeRequestBody_Action,
): string {
    switch (object) {
        case WafProfile_AnalyzeRequestBody_Action.ACTION_UNSPECIFIED:
            return 'ACTION_UNSPECIFIED';
        case WafProfile_AnalyzeRequestBody_Action.IGNORE:
            return 'IGNORE';
        case WafProfile_AnalyzeRequestBody_Action.DENY:
            return 'DENY';
        default:
            return 'UNKNOWN';
    }
}

export interface WafProfile_WafProfileRuleSet {
    /** Core rule set settings. See [Basic rule set](/docs/smartwebsecurity/concepts/waf#rules-set) for details. */
    coreRuleSet?: WafProfile_WafProfileRuleSet_WafProfileCoreRuleSet | undefined;
    /** Yandex rule set settings. */
    yaRuleSet?: WafProfile_WafProfileRuleSet_WafProfileYaRuleSet | undefined;
    /** Yandex Machine learning rule set settings. */
    mlRuleSet?: WafProfile_WafProfileRuleSet_WafProfileMlRuleSet | undefined;
    /** Priority of rule set. */
    priority: number;
    /** Determines is it rule set enabled or not. */
    isEnabled: boolean;
    /** Action to perfome on rule set match. */
    action: WafProfile_WafProfileRuleSet_RuleSetAction;
}

/** Types on actions on rule set match. */
export enum WafProfile_WafProfileRuleSet_RuleSetAction {
    RULE_SET_ACTION_UNSPECIFIED = 0,
    /** DENY - Deny request. */
    DENY = 1,
    /** CAPTCHA - Show captcha. */
    CAPTCHA = 2,
    UNRECOGNIZED = -1,
}

export function wafProfile_WafProfileRuleSet_RuleSetActionFromJSON(
    object: any,
): WafProfile_WafProfileRuleSet_RuleSetAction {
    switch (object) {
        case 0:
        case 'RULE_SET_ACTION_UNSPECIFIED':
            return WafProfile_WafProfileRuleSet_RuleSetAction.RULE_SET_ACTION_UNSPECIFIED;
        case 1:
        case 'DENY':
            return WafProfile_WafProfileRuleSet_RuleSetAction.DENY;
        case 2:
        case 'CAPTCHA':
            return WafProfile_WafProfileRuleSet_RuleSetAction.CAPTCHA;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return WafProfile_WafProfileRuleSet_RuleSetAction.UNRECOGNIZED;
    }
}

export function wafProfile_WafProfileRuleSet_RuleSetActionToJSON(
    object: WafProfile_WafProfileRuleSet_RuleSetAction,
): string {
    switch (object) {
        case WafProfile_WafProfileRuleSet_RuleSetAction.RULE_SET_ACTION_UNSPECIFIED:
            return 'RULE_SET_ACTION_UNSPECIFIED';
        case WafProfile_WafProfileRuleSet_RuleSetAction.DENY:
            return 'DENY';
        case WafProfile_WafProfileRuleSet_RuleSetAction.CAPTCHA:
            return 'CAPTCHA';
        default:
            return 'UNKNOWN';
    }
}

export interface WafProfile_WafProfileRuleSet_RuleGroup {
    /** ID of the rule group. */
    id: string;
    /** Action to perfome on rule group match. */
    action: WafProfile_WafProfileRuleSet_RuleGroup_Action;
    /** Anomaly score. */
    inboundAnomalyScore: number;
    /** Determines is it rule group enabled or not. */
    isEnabled: boolean;
}

/** Types on actions on rule group match. */
export enum WafProfile_WafProfileRuleSet_RuleGroup_Action {
    ACTION_UNSPECIFIED = 0,
    /** DENY - Deny request. */
    DENY = 1,
    /** LOG - Log request. */
    LOG = 2,
    /** IGNORE - Ignore request. */
    IGNORE = 3,
    UNRECOGNIZED = -1,
}

export function wafProfile_WafProfileRuleSet_RuleGroup_ActionFromJSON(
    object: any,
): WafProfile_WafProfileRuleSet_RuleGroup_Action {
    switch (object) {
        case 0:
        case 'ACTION_UNSPECIFIED':
            return WafProfile_WafProfileRuleSet_RuleGroup_Action.ACTION_UNSPECIFIED;
        case 1:
        case 'DENY':
            return WafProfile_WafProfileRuleSet_RuleGroup_Action.DENY;
        case 2:
        case 'LOG':
            return WafProfile_WafProfileRuleSet_RuleGroup_Action.LOG;
        case 3:
        case 'IGNORE':
            return WafProfile_WafProfileRuleSet_RuleGroup_Action.IGNORE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return WafProfile_WafProfileRuleSet_RuleGroup_Action.UNRECOGNIZED;
    }
}

export function wafProfile_WafProfileRuleSet_RuleGroup_ActionToJSON(
    object: WafProfile_WafProfileRuleSet_RuleGroup_Action,
): string {
    switch (object) {
        case WafProfile_WafProfileRuleSet_RuleGroup_Action.ACTION_UNSPECIFIED:
            return 'ACTION_UNSPECIFIED';
        case WafProfile_WafProfileRuleSet_RuleGroup_Action.DENY:
            return 'DENY';
        case WafProfile_WafProfileRuleSet_RuleGroup_Action.LOG:
            return 'LOG';
        case WafProfile_WafProfileRuleSet_RuleGroup_Action.IGNORE:
            return 'IGNORE';
        default:
            return 'UNKNOWN';
    }
}

export interface WafProfile_WafProfileRuleSet_WafProfileCoreRuleSet {
    /** Rule set. */
    ruleSet?: RuleSet;
    /**
     * Anomaly score.
     * Enter an integer within the range of 2 and 10000.
     * The higher this value, the more likely it is that the request that satisfies the rule is an attack.
     * See [Rules](/docs/smartwebsecurity/concepts/waf#anomaly) for more details.
     */
    inboundAnomalyScore: number;
    /**
     * Paranoia level.
     * Enter an integer within the range of 1 and 4.
     * Paranoia level classifies rules according to their aggression. The higher the paranoia level, the better your protection,
     * but also the higher the probability of WAF false positives.
     * See [Rules](/docs/smartwebsecurity/concepts/waf#paranoia) for more details.
     * NOTE: this option has no effect on enabling or disabling rules.
     * it is used only as recommendation for user to enable all rules with paranoia_level <= this value.
     */
    paranoiaLevel: number;
}

export interface WafProfile_WafProfileRuleSet_WafProfileYaRuleSet {
    /** Rule set. */
    ruleSet?: RuleSet;
    /** List of rule groups. */
    ruleGroups: WafProfile_WafProfileRuleSet_RuleGroup[];
}

export interface WafProfile_WafProfileRuleSet_WafProfileMlRuleSet {
    /** Rule set. */
    ruleSet?: RuleSet;
    /** List of rule groups. */
    ruleGroups: WafProfile_WafProfileRuleSet_RuleGroup[];
}

/** WafProfileRule object. Determines settings for each rule_id in rule set. */
export interface WafProfileRule {
    /** Rule ID. */
    ruleId: string;
    /** Determines is it rule enabled or not. */
    isEnabled: boolean;
    /** Determines is it rule blocking or not. */
    isBlocking: boolean;
}

/** A WafProfileExclusionRule object. See [Exclusion rules](/docs/smartwebsecurity/concepts/waf#exclusion-rules). */
export interface WafProfileExclusionRule {
    /** Name of exclusion rule. */
    name: string;
    /** Optional description of the rule. 0-512 characters long. */
    description: string;
    /** The condition for matching traffic. */
    condition?: Condition;
    /** Exclude rules. */
    excludeRules?: WafProfileExclusionRule_ExcludeRules;
    /** Records the fact that an exception rule is triggered. */
    logExcluded: boolean;
}

/** Determines list of excluded rules. */
export interface WafProfileExclusionRule_ExcludeRules {
    /** Set this option true to exclude all rules. */
    excludeAll: boolean;
    /** List of rules to exclude. */
    ruleIds: string[];
}

/** A RuleSet object. Determines name and version of rule set. */
export interface RuleSet {
    /** Name of rule set. */
    name: string;
    /** Version of rule set. */
    version: string;
    /** Type of rule set. */
    type: RuleSet_RuleSetType;
    /** ID of rule set. */
    id: string;
}

/** Type of rule set. */
export enum RuleSet_RuleSetType {
    RULE_SET_TYPE_UNSPECIFIED = 0,
    /** CORE - Core rule set. */
    CORE = 1,
    /** YA - Yandex rule set. */
    YA = 2,
    /** ML - Yandex machine learning rule set. */
    ML = 3,
    UNRECOGNIZED = -1,
}

export function ruleSet_RuleSetTypeFromJSON(object: any): RuleSet_RuleSetType {
    switch (object) {
        case 0:
        case 'RULE_SET_TYPE_UNSPECIFIED':
            return RuleSet_RuleSetType.RULE_SET_TYPE_UNSPECIFIED;
        case 1:
        case 'CORE':
            return RuleSet_RuleSetType.CORE;
        case 2:
        case 'YA':
            return RuleSet_RuleSetType.YA;
        case 3:
        case 'ML':
            return RuleSet_RuleSetType.ML;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return RuleSet_RuleSetType.UNRECOGNIZED;
    }
}

export function ruleSet_RuleSetTypeToJSON(object: RuleSet_RuleSetType): string {
    switch (object) {
        case RuleSet_RuleSetType.RULE_SET_TYPE_UNSPECIFIED:
            return 'RULE_SET_TYPE_UNSPECIFIED';
        case RuleSet_RuleSetType.CORE:
            return 'CORE';
        case RuleSet_RuleSetType.YA:
            return 'YA';
        case RuleSet_RuleSetType.ML:
            return 'ML';
        default:
            return 'UNKNOWN';
    }
}

const baseWafProfile: object = {
    id: '',
    folderId: '',
    cloudId: '',
    name: '',
    description: '',
    matchAllRuleSets: false,
};

export const WafProfile: {
    encode(message: WafProfile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WafProfile;
    fromJSON(object: any): WafProfile;
    toJSON(message: WafProfile): unknown;
    fromPartial<I extends Exact<DeepPartial<WafProfile>, I>>(object: I): WafProfile;
} = {
    encode(message: WafProfile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.cloudId !== '') {
            writer.uint32(26).string(message.cloudId);
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            WafProfile_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.rules) {
            WafProfileRule.encode(v!, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.exclusionRules) {
            WafProfileExclusionRule.encode(v!, writer.uint32(82).fork()).ldelim();
        }
        if (message.coreRuleSet !== undefined) {
            WafProfile_CoreRuleSet.encode(message.coreRuleSet, writer.uint32(90).fork()).ldelim();
        }
        if (message.analyzeRequestBody !== undefined) {
            WafProfile_AnalyzeRequestBody.encode(
                message.analyzeRequestBody,
                writer.uint32(98).fork(),
            ).ldelim();
        }
        for (const v of message.ruleSets) {
            WafProfile_WafProfileRuleSet.encode(v!, writer.uint32(106).fork()).ldelim();
        }
        if (message.matchAllRuleSets === true) {
            writer.uint32(112).bool(message.matchAllRuleSets);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): WafProfile {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWafProfile } as WafProfile;
        message.labels = {};
        message.rules = [];
        message.exclusionRules = [];
        message.ruleSets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.cloudId = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = WafProfile_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.rules.push(WafProfileRule.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.exclusionRules.push(
                        WafProfileExclusionRule.decode(reader, reader.uint32()),
                    );
                    break;
                case 11:
                    message.coreRuleSet = WafProfile_CoreRuleSet.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.analyzeRequestBody = WafProfile_AnalyzeRequestBody.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 13:
                    message.ruleSets.push(
                        WafProfile_WafProfileRuleSet.decode(reader, reader.uint32()),
                    );
                    break;
                case 14:
                    message.matchAllRuleSets = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WafProfile {
        const message = { ...baseWafProfile } as WafProfile;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null ? String(object.cloudId) : '';
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
        message.rules = (object.rules ?? []).map((e: any) => WafProfileRule.fromJSON(e));
        message.exclusionRules = (object.exclusionRules ?? []).map((e: any) =>
            WafProfileExclusionRule.fromJSON(e),
        );
        message.coreRuleSet =
            object.coreRuleSet !== undefined && object.coreRuleSet !== null
                ? WafProfile_CoreRuleSet.fromJSON(object.coreRuleSet)
                : undefined;
        message.analyzeRequestBody =
            object.analyzeRequestBody !== undefined && object.analyzeRequestBody !== null
                ? WafProfile_AnalyzeRequestBody.fromJSON(object.analyzeRequestBody)
                : undefined;
        message.ruleSets = (object.ruleSets ?? []).map((e: any) =>
            WafProfile_WafProfileRuleSet.fromJSON(e),
        );
        message.matchAllRuleSets =
            object.matchAllRuleSets !== undefined && object.matchAllRuleSets !== null
                ? Boolean(object.matchAllRuleSets)
                : false;
        return message;
    },

    toJSON(message: WafProfile): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        if (message.rules) {
            obj.rules = message.rules.map((e) => (e ? WafProfileRule.toJSON(e) : undefined));
        } else {
            obj.rules = [];
        }
        if (message.exclusionRules) {
            obj.exclusionRules = message.exclusionRules.map((e) =>
                e ? WafProfileExclusionRule.toJSON(e) : undefined,
            );
        } else {
            obj.exclusionRules = [];
        }
        message.coreRuleSet !== undefined &&
            (obj.coreRuleSet = message.coreRuleSet
                ? WafProfile_CoreRuleSet.toJSON(message.coreRuleSet)
                : undefined);
        message.analyzeRequestBody !== undefined &&
            (obj.analyzeRequestBody = message.analyzeRequestBody
                ? WafProfile_AnalyzeRequestBody.toJSON(message.analyzeRequestBody)
                : undefined);
        if (message.ruleSets) {
            obj.ruleSets = message.ruleSets.map((e) =>
                e ? WafProfile_WafProfileRuleSet.toJSON(e) : undefined,
            );
        } else {
            obj.ruleSets = [];
        }
        message.matchAllRuleSets !== undefined && (obj.matchAllRuleSets = message.matchAllRuleSets);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<WafProfile>, I>>(object: I): WafProfile {
        const message = { ...baseWafProfile } as WafProfile;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.cloudId = object.cloudId ?? '';
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
        message.rules = object.rules?.map((e) => WafProfileRule.fromPartial(e)) || [];
        message.exclusionRules =
            object.exclusionRules?.map((e) => WafProfileExclusionRule.fromPartial(e)) || [];
        message.coreRuleSet =
            object.coreRuleSet !== undefined && object.coreRuleSet !== null
                ? WafProfile_CoreRuleSet.fromPartial(object.coreRuleSet)
                : undefined;
        message.analyzeRequestBody =
            object.analyzeRequestBody !== undefined && object.analyzeRequestBody !== null
                ? WafProfile_AnalyzeRequestBody.fromPartial(object.analyzeRequestBody)
                : undefined;
        message.ruleSets =
            object.ruleSets?.map((e) => WafProfile_WafProfileRuleSet.fromPartial(e)) || [];
        message.matchAllRuleSets = object.matchAllRuleSets ?? false;
        return message;
    },
};

const baseWafProfile_LabelsEntry: object = { key: '', value: '' };

export const WafProfile_LabelsEntry: {
    encode(message: WafProfile_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WafProfile_LabelsEntry;
    fromJSON(object: any): WafProfile_LabelsEntry;
    toJSON(message: WafProfile_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<WafProfile_LabelsEntry>, I>>(object: I): WafProfile_LabelsEntry;
} = {
    encode(message: WafProfile_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): WafProfile_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWafProfile_LabelsEntry } as WafProfile_LabelsEntry;
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

    fromJSON(object: any): WafProfile_LabelsEntry {
        const message = { ...baseWafProfile_LabelsEntry } as WafProfile_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: WafProfile_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<WafProfile_LabelsEntry>, I>>(
        object: I,
    ): WafProfile_LabelsEntry {
        const message = { ...baseWafProfile_LabelsEntry } as WafProfile_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseWafProfile_CoreRuleSet: object = { inboundAnomalyScore: 0, paranoiaLevel: 0 };

export const WafProfile_CoreRuleSet: {
    encode(message: WafProfile_CoreRuleSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WafProfile_CoreRuleSet;
    fromJSON(object: any): WafProfile_CoreRuleSet;
    toJSON(message: WafProfile_CoreRuleSet): unknown;
    fromPartial<I extends Exact<DeepPartial<WafProfile_CoreRuleSet>, I>>(object: I): WafProfile_CoreRuleSet;
} = {
    encode(message: WafProfile_CoreRuleSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.inboundAnomalyScore !== 0) {
            writer.uint32(8).int64(message.inboundAnomalyScore);
        }
        if (message.paranoiaLevel !== 0) {
            writer.uint32(16).int64(message.paranoiaLevel);
        }
        if (message.ruleSet !== undefined) {
            RuleSet.encode(message.ruleSet, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): WafProfile_CoreRuleSet {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWafProfile_CoreRuleSet } as WafProfile_CoreRuleSet;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inboundAnomalyScore = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.paranoiaLevel = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.ruleSet = RuleSet.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WafProfile_CoreRuleSet {
        const message = { ...baseWafProfile_CoreRuleSet } as WafProfile_CoreRuleSet;
        message.inboundAnomalyScore =
            object.inboundAnomalyScore !== undefined && object.inboundAnomalyScore !== null
                ? Number(object.inboundAnomalyScore)
                : 0;
        message.paranoiaLevel =
            object.paranoiaLevel !== undefined && object.paranoiaLevel !== null
                ? Number(object.paranoiaLevel)
                : 0;
        message.ruleSet =
            object.ruleSet !== undefined && object.ruleSet !== null
                ? RuleSet.fromJSON(object.ruleSet)
                : undefined;
        return message;
    },

    toJSON(message: WafProfile_CoreRuleSet): unknown {
        const obj: any = {};
        message.inboundAnomalyScore !== undefined &&
            (obj.inboundAnomalyScore = Math.round(message.inboundAnomalyScore));
        message.paranoiaLevel !== undefined &&
            (obj.paranoiaLevel = Math.round(message.paranoiaLevel));
        message.ruleSet !== undefined &&
            (obj.ruleSet = message.ruleSet ? RuleSet.toJSON(message.ruleSet) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<WafProfile_CoreRuleSet>, I>>(
        object: I,
    ): WafProfile_CoreRuleSet {
        const message = { ...baseWafProfile_CoreRuleSet } as WafProfile_CoreRuleSet;
        message.inboundAnomalyScore = object.inboundAnomalyScore ?? 0;
        message.paranoiaLevel = object.paranoiaLevel ?? 0;
        message.ruleSet =
            object.ruleSet !== undefined && object.ruleSet !== null
                ? RuleSet.fromPartial(object.ruleSet)
                : undefined;
        return message;
    },
};

const baseWafProfile_AnalyzeRequestBody: object = {
    isEnabled: false,
    sizeLimit: 0,
    sizeLimitAction: 0,
};

export const WafProfile_AnalyzeRequestBody: {
    encode(message: WafProfile_AnalyzeRequestBody, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WafProfile_AnalyzeRequestBody;
    fromJSON(object: any): WafProfile_AnalyzeRequestBody;
    toJSON(message: WafProfile_AnalyzeRequestBody): unknown;
    fromPartial<I extends Exact<DeepPartial<WafProfile_AnalyzeRequestBody>, I>>(object: I): WafProfile_AnalyzeRequestBody;
} = {
    encode(
        message: WafProfile_AnalyzeRequestBody,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.isEnabled === true) {
            writer.uint32(8).bool(message.isEnabled);
        }
        if (message.sizeLimit !== 0) {
            writer.uint32(16).int64(message.sizeLimit);
        }
        if (message.sizeLimitAction !== 0) {
            writer.uint32(24).int32(message.sizeLimitAction);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): WafProfile_AnalyzeRequestBody {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWafProfile_AnalyzeRequestBody } as WafProfile_AnalyzeRequestBody;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.isEnabled = reader.bool();
                    break;
                case 2:
                    message.sizeLimit = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.sizeLimitAction = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WafProfile_AnalyzeRequestBody {
        const message = { ...baseWafProfile_AnalyzeRequestBody } as WafProfile_AnalyzeRequestBody;
        message.isEnabled =
            object.isEnabled !== undefined && object.isEnabled !== null
                ? Boolean(object.isEnabled)
                : false;
        message.sizeLimit =
            object.sizeLimit !== undefined && object.sizeLimit !== null
                ? Number(object.sizeLimit)
                : 0;
        message.sizeLimitAction =
            object.sizeLimitAction !== undefined && object.sizeLimitAction !== null
                ? wafProfile_AnalyzeRequestBody_ActionFromJSON(object.sizeLimitAction)
                : 0;
        return message;
    },

    toJSON(message: WafProfile_AnalyzeRequestBody): unknown {
        const obj: any = {};
        message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
        message.sizeLimit !== undefined && (obj.sizeLimit = Math.round(message.sizeLimit));
        message.sizeLimitAction !== undefined &&
            (obj.sizeLimitAction = wafProfile_AnalyzeRequestBody_ActionToJSON(
                message.sizeLimitAction,
            ));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<WafProfile_AnalyzeRequestBody>, I>>(
        object: I,
    ): WafProfile_AnalyzeRequestBody {
        const message = { ...baseWafProfile_AnalyzeRequestBody } as WafProfile_AnalyzeRequestBody;
        message.isEnabled = object.isEnabled ?? false;
        message.sizeLimit = object.sizeLimit ?? 0;
        message.sizeLimitAction = object.sizeLimitAction ?? 0;
        return message;
    },
};

const baseWafProfile_WafProfileRuleSet: object = { priority: 0, isEnabled: false, action: 0 };

export const WafProfile_WafProfileRuleSet: {
    encode(message: WafProfile_WafProfileRuleSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WafProfile_WafProfileRuleSet;
    fromJSON(object: any): WafProfile_WafProfileRuleSet;
    toJSON(message: WafProfile_WafProfileRuleSet): unknown;
    fromPartial<I extends Exact<DeepPartial<WafProfile_WafProfileRuleSet>, I>>(object: I): WafProfile_WafProfileRuleSet;
} = {
    encode(
        message: WafProfile_WafProfileRuleSet,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.coreRuleSet !== undefined) {
            WafProfile_WafProfileRuleSet_WafProfileCoreRuleSet.encode(
                message.coreRuleSet,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.yaRuleSet !== undefined) {
            WafProfile_WafProfileRuleSet_WafProfileYaRuleSet.encode(
                message.yaRuleSet,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.mlRuleSet !== undefined) {
            WafProfile_WafProfileRuleSet_WafProfileMlRuleSet.encode(
                message.mlRuleSet,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.priority !== 0) {
            writer.uint32(32).int64(message.priority);
        }
        if (message.isEnabled === true) {
            writer.uint32(40).bool(message.isEnabled);
        }
        if (message.action !== 0) {
            writer.uint32(48).int32(message.action);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): WafProfile_WafProfileRuleSet {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWafProfile_WafProfileRuleSet } as WafProfile_WafProfileRuleSet;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coreRuleSet = WafProfile_WafProfileRuleSet_WafProfileCoreRuleSet.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.yaRuleSet = WafProfile_WafProfileRuleSet_WafProfileYaRuleSet.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.mlRuleSet = WafProfile_WafProfileRuleSet_WafProfileMlRuleSet.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 4:
                    message.priority = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.isEnabled = reader.bool();
                    break;
                case 6:
                    message.action = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WafProfile_WafProfileRuleSet {
        const message = { ...baseWafProfile_WafProfileRuleSet } as WafProfile_WafProfileRuleSet;
        message.coreRuleSet =
            object.coreRuleSet !== undefined && object.coreRuleSet !== null
                ? WafProfile_WafProfileRuleSet_WafProfileCoreRuleSet.fromJSON(object.coreRuleSet)
                : undefined;
        message.yaRuleSet =
            object.yaRuleSet !== undefined && object.yaRuleSet !== null
                ? WafProfile_WafProfileRuleSet_WafProfileYaRuleSet.fromJSON(object.yaRuleSet)
                : undefined;
        message.mlRuleSet =
            object.mlRuleSet !== undefined && object.mlRuleSet !== null
                ? WafProfile_WafProfileRuleSet_WafProfileMlRuleSet.fromJSON(object.mlRuleSet)
                : undefined;
        message.priority =
            object.priority !== undefined && object.priority !== null ? Number(object.priority) : 0;
        message.isEnabled =
            object.isEnabled !== undefined && object.isEnabled !== null
                ? Boolean(object.isEnabled)
                : false;
        message.action =
            object.action !== undefined && object.action !== null
                ? wafProfile_WafProfileRuleSet_RuleSetActionFromJSON(object.action)
                : 0;
        return message;
    },

    toJSON(message: WafProfile_WafProfileRuleSet): unknown {
        const obj: any = {};
        message.coreRuleSet !== undefined &&
            (obj.coreRuleSet = message.coreRuleSet
                ? WafProfile_WafProfileRuleSet_WafProfileCoreRuleSet.toJSON(message.coreRuleSet)
                : undefined);
        message.yaRuleSet !== undefined &&
            (obj.yaRuleSet = message.yaRuleSet
                ? WafProfile_WafProfileRuleSet_WafProfileYaRuleSet.toJSON(message.yaRuleSet)
                : undefined);
        message.mlRuleSet !== undefined &&
            (obj.mlRuleSet = message.mlRuleSet
                ? WafProfile_WafProfileRuleSet_WafProfileMlRuleSet.toJSON(message.mlRuleSet)
                : undefined);
        message.priority !== undefined && (obj.priority = Math.round(message.priority));
        message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
        message.action !== undefined &&
            (obj.action = wafProfile_WafProfileRuleSet_RuleSetActionToJSON(message.action));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<WafProfile_WafProfileRuleSet>, I>>(
        object: I,
    ): WafProfile_WafProfileRuleSet {
        const message = { ...baseWafProfile_WafProfileRuleSet } as WafProfile_WafProfileRuleSet;
        message.coreRuleSet =
            object.coreRuleSet !== undefined && object.coreRuleSet !== null
                ? WafProfile_WafProfileRuleSet_WafProfileCoreRuleSet.fromPartial(object.coreRuleSet)
                : undefined;
        message.yaRuleSet =
            object.yaRuleSet !== undefined && object.yaRuleSet !== null
                ? WafProfile_WafProfileRuleSet_WafProfileYaRuleSet.fromPartial(object.yaRuleSet)
                : undefined;
        message.mlRuleSet =
            object.mlRuleSet !== undefined && object.mlRuleSet !== null
                ? WafProfile_WafProfileRuleSet_WafProfileMlRuleSet.fromPartial(object.mlRuleSet)
                : undefined;
        message.priority = object.priority ?? 0;
        message.isEnabled = object.isEnabled ?? false;
        message.action = object.action ?? 0;
        return message;
    },
};

const baseWafProfile_WafProfileRuleSet_RuleGroup: object = {
    id: '',
    action: 0,
    inboundAnomalyScore: 0,
    isEnabled: false,
};

export const WafProfile_WafProfileRuleSet_RuleGroup: {
    encode(message: WafProfile_WafProfileRuleSet_RuleGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WafProfile_WafProfileRuleSet_RuleGroup;
    fromJSON(object: any): WafProfile_WafProfileRuleSet_RuleGroup;
    toJSON(message: WafProfile_WafProfileRuleSet_RuleGroup): unknown;
    fromPartial<I extends Exact<DeepPartial<WafProfile_WafProfileRuleSet_RuleGroup>, I>>(object: I): WafProfile_WafProfileRuleSet_RuleGroup;
} = {
    encode(
        message: WafProfile_WafProfileRuleSet_RuleGroup,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.action !== 0) {
            writer.uint32(16).int32(message.action);
        }
        if (message.inboundAnomalyScore !== 0) {
            writer.uint32(24).int64(message.inboundAnomalyScore);
        }
        if (message.isEnabled === true) {
            writer.uint32(32).bool(message.isEnabled);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): WafProfile_WafProfileRuleSet_RuleGroup {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseWafProfile_WafProfileRuleSet_RuleGroup,
        } as WafProfile_WafProfileRuleSet_RuleGroup;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.action = reader.int32() as any;
                    break;
                case 3:
                    message.inboundAnomalyScore = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.isEnabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WafProfile_WafProfileRuleSet_RuleGroup {
        const message = {
            ...baseWafProfile_WafProfileRuleSet_RuleGroup,
        } as WafProfile_WafProfileRuleSet_RuleGroup;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.action =
            object.action !== undefined && object.action !== null
                ? wafProfile_WafProfileRuleSet_RuleGroup_ActionFromJSON(object.action)
                : 0;
        message.inboundAnomalyScore =
            object.inboundAnomalyScore !== undefined && object.inboundAnomalyScore !== null
                ? Number(object.inboundAnomalyScore)
                : 0;
        message.isEnabled =
            object.isEnabled !== undefined && object.isEnabled !== null
                ? Boolean(object.isEnabled)
                : false;
        return message;
    },

    toJSON(message: WafProfile_WafProfileRuleSet_RuleGroup): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.action !== undefined &&
            (obj.action = wafProfile_WafProfileRuleSet_RuleGroup_ActionToJSON(message.action));
        message.inboundAnomalyScore !== undefined &&
            (obj.inboundAnomalyScore = Math.round(message.inboundAnomalyScore));
        message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<WafProfile_WafProfileRuleSet_RuleGroup>, I>>(
        object: I,
    ): WafProfile_WafProfileRuleSet_RuleGroup {
        const message = {
            ...baseWafProfile_WafProfileRuleSet_RuleGroup,
        } as WafProfile_WafProfileRuleSet_RuleGroup;
        message.id = object.id ?? '';
        message.action = object.action ?? 0;
        message.inboundAnomalyScore = object.inboundAnomalyScore ?? 0;
        message.isEnabled = object.isEnabled ?? false;
        return message;
    },
};

const baseWafProfile_WafProfileRuleSet_WafProfileCoreRuleSet: object = {
    inboundAnomalyScore: 0,
    paranoiaLevel: 0,
};

export const WafProfile_WafProfileRuleSet_WafProfileCoreRuleSet: {
    encode(message: WafProfile_WafProfileRuleSet_WafProfileCoreRuleSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WafProfile_WafProfileRuleSet_WafProfileCoreRuleSet;
    fromJSON(object: any): WafProfile_WafProfileRuleSet_WafProfileCoreRuleSet;
    toJSON(message: WafProfile_WafProfileRuleSet_WafProfileCoreRuleSet): unknown;
    fromPartial<I extends Exact<DeepPartial<WafProfile_WafProfileRuleSet_WafProfileCoreRuleSet>, I>>(object: I): WafProfile_WafProfileRuleSet_WafProfileCoreRuleSet;
} = {
    encode(
        message: WafProfile_WafProfileRuleSet_WafProfileCoreRuleSet,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.ruleSet !== undefined) {
            RuleSet.encode(message.ruleSet, writer.uint32(10).fork()).ldelim();
        }
        if (message.inboundAnomalyScore !== 0) {
            writer.uint32(16).int64(message.inboundAnomalyScore);
        }
        if (message.paranoiaLevel !== 0) {
            writer.uint32(24).int64(message.paranoiaLevel);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): WafProfile_WafProfileRuleSet_WafProfileCoreRuleSet {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseWafProfile_WafProfileRuleSet_WafProfileCoreRuleSet,
        } as WafProfile_WafProfileRuleSet_WafProfileCoreRuleSet;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ruleSet = RuleSet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.inboundAnomalyScore = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.paranoiaLevel = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WafProfile_WafProfileRuleSet_WafProfileCoreRuleSet {
        const message = {
            ...baseWafProfile_WafProfileRuleSet_WafProfileCoreRuleSet,
        } as WafProfile_WafProfileRuleSet_WafProfileCoreRuleSet;
        message.ruleSet =
            object.ruleSet !== undefined && object.ruleSet !== null
                ? RuleSet.fromJSON(object.ruleSet)
                : undefined;
        message.inboundAnomalyScore =
            object.inboundAnomalyScore !== undefined && object.inboundAnomalyScore !== null
                ? Number(object.inboundAnomalyScore)
                : 0;
        message.paranoiaLevel =
            object.paranoiaLevel !== undefined && object.paranoiaLevel !== null
                ? Number(object.paranoiaLevel)
                : 0;
        return message;
    },

    toJSON(message: WafProfile_WafProfileRuleSet_WafProfileCoreRuleSet): unknown {
        const obj: any = {};
        message.ruleSet !== undefined &&
            (obj.ruleSet = message.ruleSet ? RuleSet.toJSON(message.ruleSet) : undefined);
        message.inboundAnomalyScore !== undefined &&
            (obj.inboundAnomalyScore = Math.round(message.inboundAnomalyScore));
        message.paranoiaLevel !== undefined &&
            (obj.paranoiaLevel = Math.round(message.paranoiaLevel));
        return obj;
    },

    fromPartial<
        I extends Exact<DeepPartial<WafProfile_WafProfileRuleSet_WafProfileCoreRuleSet>, I>,
    >(object: I): WafProfile_WafProfileRuleSet_WafProfileCoreRuleSet {
        const message = {
            ...baseWafProfile_WafProfileRuleSet_WafProfileCoreRuleSet,
        } as WafProfile_WafProfileRuleSet_WafProfileCoreRuleSet;
        message.ruleSet =
            object.ruleSet !== undefined && object.ruleSet !== null
                ? RuleSet.fromPartial(object.ruleSet)
                : undefined;
        message.inboundAnomalyScore = object.inboundAnomalyScore ?? 0;
        message.paranoiaLevel = object.paranoiaLevel ?? 0;
        return message;
    },
};

const baseWafProfile_WafProfileRuleSet_WafProfileYaRuleSet: object = {};

export const WafProfile_WafProfileRuleSet_WafProfileYaRuleSet: {
    encode(message: WafProfile_WafProfileRuleSet_WafProfileYaRuleSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WafProfile_WafProfileRuleSet_WafProfileYaRuleSet;
    fromJSON(object: any): WafProfile_WafProfileRuleSet_WafProfileYaRuleSet;
    toJSON(message: WafProfile_WafProfileRuleSet_WafProfileYaRuleSet): unknown;
    fromPartial<I extends Exact<DeepPartial<WafProfile_WafProfileRuleSet_WafProfileYaRuleSet>, I>>(object: I): WafProfile_WafProfileRuleSet_WafProfileYaRuleSet;
} = {
    encode(
        message: WafProfile_WafProfileRuleSet_WafProfileYaRuleSet,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.ruleSet !== undefined) {
            RuleSet.encode(message.ruleSet, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.ruleGroups) {
            WafProfile_WafProfileRuleSet_RuleGroup.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): WafProfile_WafProfileRuleSet_WafProfileYaRuleSet {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseWafProfile_WafProfileRuleSet_WafProfileYaRuleSet,
        } as WafProfile_WafProfileRuleSet_WafProfileYaRuleSet;
        message.ruleGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ruleSet = RuleSet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.ruleGroups.push(
                        WafProfile_WafProfileRuleSet_RuleGroup.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WafProfile_WafProfileRuleSet_WafProfileYaRuleSet {
        const message = {
            ...baseWafProfile_WafProfileRuleSet_WafProfileYaRuleSet,
        } as WafProfile_WafProfileRuleSet_WafProfileYaRuleSet;
        message.ruleSet =
            object.ruleSet !== undefined && object.ruleSet !== null
                ? RuleSet.fromJSON(object.ruleSet)
                : undefined;
        message.ruleGroups = (object.ruleGroups ?? []).map((e: any) =>
            WafProfile_WafProfileRuleSet_RuleGroup.fromJSON(e),
        );
        return message;
    },

    toJSON(message: WafProfile_WafProfileRuleSet_WafProfileYaRuleSet): unknown {
        const obj: any = {};
        message.ruleSet !== undefined &&
            (obj.ruleSet = message.ruleSet ? RuleSet.toJSON(message.ruleSet) : undefined);
        if (message.ruleGroups) {
            obj.ruleGroups = message.ruleGroups.map((e) =>
                e ? WafProfile_WafProfileRuleSet_RuleGroup.toJSON(e) : undefined,
            );
        } else {
            obj.ruleGroups = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<WafProfile_WafProfileRuleSet_WafProfileYaRuleSet>, I>>(
        object: I,
    ): WafProfile_WafProfileRuleSet_WafProfileYaRuleSet {
        const message = {
            ...baseWafProfile_WafProfileRuleSet_WafProfileYaRuleSet,
        } as WafProfile_WafProfileRuleSet_WafProfileYaRuleSet;
        message.ruleSet =
            object.ruleSet !== undefined && object.ruleSet !== null
                ? RuleSet.fromPartial(object.ruleSet)
                : undefined;
        message.ruleGroups =
            object.ruleGroups?.map((e) => WafProfile_WafProfileRuleSet_RuleGroup.fromPartial(e)) ||
            [];
        return message;
    },
};

const baseWafProfile_WafProfileRuleSet_WafProfileMlRuleSet: object = {};

export const WafProfile_WafProfileRuleSet_WafProfileMlRuleSet: {
    encode(message: WafProfile_WafProfileRuleSet_WafProfileMlRuleSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WafProfile_WafProfileRuleSet_WafProfileMlRuleSet;
    fromJSON(object: any): WafProfile_WafProfileRuleSet_WafProfileMlRuleSet;
    toJSON(message: WafProfile_WafProfileRuleSet_WafProfileMlRuleSet): unknown;
    fromPartial<I extends Exact<DeepPartial<WafProfile_WafProfileRuleSet_WafProfileMlRuleSet>, I>>(object: I): WafProfile_WafProfileRuleSet_WafProfileMlRuleSet;
} = {
    encode(
        message: WafProfile_WafProfileRuleSet_WafProfileMlRuleSet,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.ruleSet !== undefined) {
            RuleSet.encode(message.ruleSet, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.ruleGroups) {
            WafProfile_WafProfileRuleSet_RuleGroup.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): WafProfile_WafProfileRuleSet_WafProfileMlRuleSet {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseWafProfile_WafProfileRuleSet_WafProfileMlRuleSet,
        } as WafProfile_WafProfileRuleSet_WafProfileMlRuleSet;
        message.ruleGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ruleSet = RuleSet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.ruleGroups.push(
                        WafProfile_WafProfileRuleSet_RuleGroup.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WafProfile_WafProfileRuleSet_WafProfileMlRuleSet {
        const message = {
            ...baseWafProfile_WafProfileRuleSet_WafProfileMlRuleSet,
        } as WafProfile_WafProfileRuleSet_WafProfileMlRuleSet;
        message.ruleSet =
            object.ruleSet !== undefined && object.ruleSet !== null
                ? RuleSet.fromJSON(object.ruleSet)
                : undefined;
        message.ruleGroups = (object.ruleGroups ?? []).map((e: any) =>
            WafProfile_WafProfileRuleSet_RuleGroup.fromJSON(e),
        );
        return message;
    },

    toJSON(message: WafProfile_WafProfileRuleSet_WafProfileMlRuleSet): unknown {
        const obj: any = {};
        message.ruleSet !== undefined &&
            (obj.ruleSet = message.ruleSet ? RuleSet.toJSON(message.ruleSet) : undefined);
        if (message.ruleGroups) {
            obj.ruleGroups = message.ruleGroups.map((e) =>
                e ? WafProfile_WafProfileRuleSet_RuleGroup.toJSON(e) : undefined,
            );
        } else {
            obj.ruleGroups = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<WafProfile_WafProfileRuleSet_WafProfileMlRuleSet>, I>>(
        object: I,
    ): WafProfile_WafProfileRuleSet_WafProfileMlRuleSet {
        const message = {
            ...baseWafProfile_WafProfileRuleSet_WafProfileMlRuleSet,
        } as WafProfile_WafProfileRuleSet_WafProfileMlRuleSet;
        message.ruleSet =
            object.ruleSet !== undefined && object.ruleSet !== null
                ? RuleSet.fromPartial(object.ruleSet)
                : undefined;
        message.ruleGroups =
            object.ruleGroups?.map((e) => WafProfile_WafProfileRuleSet_RuleGroup.fromPartial(e)) ||
            [];
        return message;
    },
};

const baseWafProfileRule: object = { ruleId: '', isEnabled: false, isBlocking: false };

export const WafProfileRule: {
    encode(message: WafProfileRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WafProfileRule;
    fromJSON(object: any): WafProfileRule;
    toJSON(message: WafProfileRule): unknown;
    fromPartial<I extends Exact<DeepPartial<WafProfileRule>, I>>(object: I): WafProfileRule;
} = {
    encode(message: WafProfileRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.ruleId !== '') {
            writer.uint32(10).string(message.ruleId);
        }
        if (message.isEnabled === true) {
            writer.uint32(16).bool(message.isEnabled);
        }
        if (message.isBlocking === true) {
            writer.uint32(24).bool(message.isBlocking);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): WafProfileRule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWafProfileRule } as WafProfileRule;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ruleId = reader.string();
                    break;
                case 2:
                    message.isEnabled = reader.bool();
                    break;
                case 3:
                    message.isBlocking = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WafProfileRule {
        const message = { ...baseWafProfileRule } as WafProfileRule;
        message.ruleId =
            object.ruleId !== undefined && object.ruleId !== null ? String(object.ruleId) : '';
        message.isEnabled =
            object.isEnabled !== undefined && object.isEnabled !== null
                ? Boolean(object.isEnabled)
                : false;
        message.isBlocking =
            object.isBlocking !== undefined && object.isBlocking !== null
                ? Boolean(object.isBlocking)
                : false;
        return message;
    },

    toJSON(message: WafProfileRule): unknown {
        const obj: any = {};
        message.ruleId !== undefined && (obj.ruleId = message.ruleId);
        message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
        message.isBlocking !== undefined && (obj.isBlocking = message.isBlocking);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<WafProfileRule>, I>>(object: I): WafProfileRule {
        const message = { ...baseWafProfileRule } as WafProfileRule;
        message.ruleId = object.ruleId ?? '';
        message.isEnabled = object.isEnabled ?? false;
        message.isBlocking = object.isBlocking ?? false;
        return message;
    },
};

const baseWafProfileExclusionRule: object = { name: '', description: '', logExcluded: false };

export const WafProfileExclusionRule: {
    encode(message: WafProfileExclusionRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WafProfileExclusionRule;
    fromJSON(object: any): WafProfileExclusionRule;
    toJSON(message: WafProfileExclusionRule): unknown;
    fromPartial<I extends Exact<DeepPartial<WafProfileExclusionRule>, I>>(object: I): WafProfileExclusionRule;
} = {
    encode(message: WafProfileExclusionRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (message.condition !== undefined) {
            Condition.encode(message.condition, writer.uint32(26).fork()).ldelim();
        }
        if (message.excludeRules !== undefined) {
            WafProfileExclusionRule_ExcludeRules.encode(
                message.excludeRules,
                writer.uint32(34).fork(),
            ).ldelim();
        }
        if (message.logExcluded === true) {
            writer.uint32(40).bool(message.logExcluded);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): WafProfileExclusionRule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWafProfileExclusionRule } as WafProfileExclusionRule;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.condition = Condition.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.excludeRules = WafProfileExclusionRule_ExcludeRules.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 5:
                    message.logExcluded = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WafProfileExclusionRule {
        const message = { ...baseWafProfileExclusionRule } as WafProfileExclusionRule;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.condition =
            object.condition !== undefined && object.condition !== null
                ? Condition.fromJSON(object.condition)
                : undefined;
        message.excludeRules =
            object.excludeRules !== undefined && object.excludeRules !== null
                ? WafProfileExclusionRule_ExcludeRules.fromJSON(object.excludeRules)
                : undefined;
        message.logExcluded =
            object.logExcluded !== undefined && object.logExcluded !== null
                ? Boolean(object.logExcluded)
                : false;
        return message;
    },

    toJSON(message: WafProfileExclusionRule): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.condition !== undefined &&
            (obj.condition = message.condition ? Condition.toJSON(message.condition) : undefined);
        message.excludeRules !== undefined &&
            (obj.excludeRules = message.excludeRules
                ? WafProfileExclusionRule_ExcludeRules.toJSON(message.excludeRules)
                : undefined);
        message.logExcluded !== undefined && (obj.logExcluded = message.logExcluded);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<WafProfileExclusionRule>, I>>(
        object: I,
    ): WafProfileExclusionRule {
        const message = { ...baseWafProfileExclusionRule } as WafProfileExclusionRule;
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.condition =
            object.condition !== undefined && object.condition !== null
                ? Condition.fromPartial(object.condition)
                : undefined;
        message.excludeRules =
            object.excludeRules !== undefined && object.excludeRules !== null
                ? WafProfileExclusionRule_ExcludeRules.fromPartial(object.excludeRules)
                : undefined;
        message.logExcluded = object.logExcluded ?? false;
        return message;
    },
};

const baseWafProfileExclusionRule_ExcludeRules: object = { excludeAll: false, ruleIds: '' };

export const WafProfileExclusionRule_ExcludeRules: {
    encode(message: WafProfileExclusionRule_ExcludeRules, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WafProfileExclusionRule_ExcludeRules;
    fromJSON(object: any): WafProfileExclusionRule_ExcludeRules;
    toJSON(message: WafProfileExclusionRule_ExcludeRules): unknown;
    fromPartial<I extends Exact<DeepPartial<WafProfileExclusionRule_ExcludeRules>, I>>(object: I): WafProfileExclusionRule_ExcludeRules;
} = {
    encode(
        message: WafProfileExclusionRule_ExcludeRules,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.excludeAll === true) {
            writer.uint32(8).bool(message.excludeAll);
        }
        for (const v of message.ruleIds) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): WafProfileExclusionRule_ExcludeRules {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseWafProfileExclusionRule_ExcludeRules,
        } as WafProfileExclusionRule_ExcludeRules;
        message.ruleIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.excludeAll = reader.bool();
                    break;
                case 2:
                    message.ruleIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WafProfileExclusionRule_ExcludeRules {
        const message = {
            ...baseWafProfileExclusionRule_ExcludeRules,
        } as WafProfileExclusionRule_ExcludeRules;
        message.excludeAll =
            object.excludeAll !== undefined && object.excludeAll !== null
                ? Boolean(object.excludeAll)
                : false;
        message.ruleIds = (object.ruleIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: WafProfileExclusionRule_ExcludeRules): unknown {
        const obj: any = {};
        message.excludeAll !== undefined && (obj.excludeAll = message.excludeAll);
        if (message.ruleIds) {
            obj.ruleIds = message.ruleIds.map((e) => e);
        } else {
            obj.ruleIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<WafProfileExclusionRule_ExcludeRules>, I>>(
        object: I,
    ): WafProfileExclusionRule_ExcludeRules {
        const message = {
            ...baseWafProfileExclusionRule_ExcludeRules,
        } as WafProfileExclusionRule_ExcludeRules;
        message.excludeAll = object.excludeAll ?? false;
        message.ruleIds = object.ruleIds?.map((e) => e) || [];
        return message;
    },
};

const baseRuleSet: object = { name: '', version: '', type: 0, id: '' };

export const RuleSet: {
    encode(message: RuleSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RuleSet;
    fromJSON(object: any): RuleSet;
    toJSON(message: RuleSet): unknown;
    fromPartial<I extends Exact<DeepPartial<RuleSet>, I>>(object: I): RuleSet;
} = {
    encode(message: RuleSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.version !== '') {
            writer.uint32(18).string(message.version);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.id !== '') {
            writer.uint32(34).string(message.id);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RuleSet {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRuleSet } as RuleSet;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.type = reader.int32() as any;
                    break;
                case 4:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RuleSet {
        const message = { ...baseRuleSet } as RuleSet;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.version =
            object.version !== undefined && object.version !== null ? String(object.version) : '';
        message.type =
            object.type !== undefined && object.type !== null
                ? ruleSet_RuleSetTypeFromJSON(object.type)
                : 0;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        return message;
    },

    toJSON(message: RuleSet): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.version !== undefined && (obj.version = message.version);
        message.type !== undefined && (obj.type = ruleSet_RuleSetTypeToJSON(message.type));
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<RuleSet>, I>>(object: I): RuleSet {
        const message = { ...baseRuleSet } as RuleSet;
        message.name = object.name ?? '';
        message.version = object.version ?? '';
        message.type = object.type ?? 0;
        message.id = object.id ?? '';
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
