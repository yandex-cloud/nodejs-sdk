/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.smartwebsecurity.v1';

/** A SecurityProfile resource. */
export interface SecurityProfile {
    /** ID of the security profile. */
    id: string;
    /** ID of the folder that the security profile belongs to. */
    folderId: string;
    /** Labels as `` key:value `` pairs. Maximum of 64 per resource. */
    labels: { [key: string]: string };
    /** Name of the security profile. The name is unique within the folder. 1-50 characters long. */
    name: string;
    /** Optional description of the security profile. */
    description: string;
    /** Action to perform if none of rules matched. */
    defaultAction: SecurityProfile_DefaultAction;
    /** List of security rules. */
    securityRules: SecurityRule[];
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt?: Date;
    /** ID of the cloud that the security profile belongs to. */
    cloudId: string;
    /** Captcha ID to use with this security profile. Set empty to use default. */
    captchaId: string;
    /** Advanced rate limiter profile ID to use with this security profile. Set empty to use default. */
    advancedRateLimiterProfileId: string;
    /** Parameters for request body analyzer. */
    analyzeRequestBody?: SecurityProfile_AnalyzeRequestBody;
}

/** Action to perform if none of rules matched. */
export enum SecurityProfile_DefaultAction {
    DEFAULT_ACTION_UNSPECIFIED = 0,
    /** ALLOW - Pass request to service. */
    ALLOW = 1,
    /** DENY - Deny request. */
    DENY = 2,
    UNRECOGNIZED = -1,
}

export function securityProfile_DefaultActionFromJSON(object: any): SecurityProfile_DefaultAction {
    switch (object) {
        case 0:
        case 'DEFAULT_ACTION_UNSPECIFIED':
            return SecurityProfile_DefaultAction.DEFAULT_ACTION_UNSPECIFIED;
        case 1:
        case 'ALLOW':
            return SecurityProfile_DefaultAction.ALLOW;
        case 2:
        case 'DENY':
            return SecurityProfile_DefaultAction.DENY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SecurityProfile_DefaultAction.UNRECOGNIZED;
    }
}

export function securityProfile_DefaultActionToJSON(object: SecurityProfile_DefaultAction): string {
    switch (object) {
        case SecurityProfile_DefaultAction.DEFAULT_ACTION_UNSPECIFIED:
            return 'DEFAULT_ACTION_UNSPECIFIED';
        case SecurityProfile_DefaultAction.ALLOW:
            return 'ALLOW';
        case SecurityProfile_DefaultAction.DENY:
            return 'DENY';
        default:
            return 'UNKNOWN';
    }
}

export interface SecurityProfile_AnalyzeRequestBody {
    /** Maximum size of body to pass to analyzer. In kilobytes. */
    sizeLimit: number;
    /** Action to perform if maximum size of body exceeded. */
    sizeLimitAction: SecurityProfile_AnalyzeRequestBody_Action;
}

/** Action to perform if maximum size of body exceeded. */
export enum SecurityProfile_AnalyzeRequestBody_Action {
    ACTION_UNSPECIFIED = 0,
    /** IGNORE - Ignore body. */
    IGNORE = 1,
    /** DENY - Deny request. */
    DENY = 2,
    UNRECOGNIZED = -1,
}

export function securityProfile_AnalyzeRequestBody_ActionFromJSON(
    object: any,
): SecurityProfile_AnalyzeRequestBody_Action {
    switch (object) {
        case 0:
        case 'ACTION_UNSPECIFIED':
            return SecurityProfile_AnalyzeRequestBody_Action.ACTION_UNSPECIFIED;
        case 1:
        case 'IGNORE':
            return SecurityProfile_AnalyzeRequestBody_Action.IGNORE;
        case 2:
        case 'DENY':
            return SecurityProfile_AnalyzeRequestBody_Action.DENY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SecurityProfile_AnalyzeRequestBody_Action.UNRECOGNIZED;
    }
}

export function securityProfile_AnalyzeRequestBody_ActionToJSON(
    object: SecurityProfile_AnalyzeRequestBody_Action,
): string {
    switch (object) {
        case SecurityProfile_AnalyzeRequestBody_Action.ACTION_UNSPECIFIED:
            return 'ACTION_UNSPECIFIED';
        case SecurityProfile_AnalyzeRequestBody_Action.IGNORE:
            return 'IGNORE';
        case SecurityProfile_AnalyzeRequestBody_Action.DENY:
            return 'DENY';
        default:
            return 'UNKNOWN';
    }
}

export interface SecurityProfile_LabelsEntry {
    key: string;
    value: string;
}

/** A SecurityRule object, see [Rules](/docs/smartwebsecurity/concepts/rules). */
export interface SecurityRule {
    /** Name of the rule. The name is unique within the security profile. 1-50 characters long. */
    name: string;
    /**
     * Determines the priority for checking the incoming traffic.
     * Enter an integer within the range of 1 and 999999.
     * The rule priority must be unique within the entire security profile.
     * A lower numeric value means a higher priority.
     * The default_action has the lowest priority.
     */
    priority: number;
    /**
     * This mode allows you to test your security profile or a single rule.
     * For example, you can have the number of alarms for a specific rule displayed.
     * Note: if this option is true, no real action affecting your traffic regarding this rule will be taken.
     */
    dryRun: boolean;
    /** Rule actions, see [Rule actions](/docs/smartwebsecurity/concepts/rules#rule-action). */
    ruleCondition?: SecurityRule_RuleCondition | undefined;
    /** Smart Protection rule, see [Smart Protection rules](/docs/smartwebsecurity/concepts/rules#smart-protection-rules). */
    smartProtection?: SecurityRule_SmartProtection | undefined;
    /** Web Application Firewall (WAF) rule, see [WAF rules](/docs/smartwebsecurity/concepts/rules#waf-rules). */
    waf?: SecurityRule_Waf | undefined;
    /** Optional description of the rule. 0-512 characters long. */
    description: string;
}

/** RuleCondition object. */
export interface SecurityRule_RuleCondition {
    /** Action to perform if this rule matched. */
    action: SecurityRule_RuleCondition_Action;
    /** The condition for matching the rule. */
    condition?: Condition;
}

/** Type of action to perform if this rule matched. */
export enum SecurityRule_RuleCondition_Action {
    ACTION_UNSPECIFIED = 0,
    /** ALLOW - Pass request to service. */
    ALLOW = 1,
    /** DENY - Deny request. */
    DENY = 2,
    UNRECOGNIZED = -1,
}

export function securityRule_RuleCondition_ActionFromJSON(
    object: any,
): SecurityRule_RuleCondition_Action {
    switch (object) {
        case 0:
        case 'ACTION_UNSPECIFIED':
            return SecurityRule_RuleCondition_Action.ACTION_UNSPECIFIED;
        case 1:
        case 'ALLOW':
            return SecurityRule_RuleCondition_Action.ALLOW;
        case 2:
        case 'DENY':
            return SecurityRule_RuleCondition_Action.DENY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SecurityRule_RuleCondition_Action.UNRECOGNIZED;
    }
}

export function securityRule_RuleCondition_ActionToJSON(
    object: SecurityRule_RuleCondition_Action,
): string {
    switch (object) {
        case SecurityRule_RuleCondition_Action.ACTION_UNSPECIFIED:
            return 'ACTION_UNSPECIFIED';
        case SecurityRule_RuleCondition_Action.ALLOW:
            return 'ALLOW';
        case SecurityRule_RuleCondition_Action.DENY:
            return 'DENY';
        default:
            return 'UNKNOWN';
    }
}

/** SmartProtection object. */
export interface SecurityRule_SmartProtection {
    /** Mode of protection. */
    mode: SecurityRule_SmartProtection_Mode;
    /** The condition for matching the rule. */
    condition?: Condition;
}

/** Mode of protection. */
export enum SecurityRule_SmartProtection_Mode {
    MODE_UNSPECIFIED = 0,
    /**
     * FULL - Full protection means that the traffic will be checked based on ML models and behavioral analysis,
     * with suspicious requests being sent to SmartCaptcha.
     */
    FULL = 1,
    /**
     * API - API protection means checking the traffic based on ML models and behavioral analysis without sending suspicious
     * requests to SmartCaptcha. The suspicious requests will be blocked.
     */
    API = 2,
    UNRECOGNIZED = -1,
}

export function securityRule_SmartProtection_ModeFromJSON(
    object: any,
): SecurityRule_SmartProtection_Mode {
    switch (object) {
        case 0:
        case 'MODE_UNSPECIFIED':
            return SecurityRule_SmartProtection_Mode.MODE_UNSPECIFIED;
        case 1:
        case 'FULL':
            return SecurityRule_SmartProtection_Mode.FULL;
        case 2:
        case 'API':
            return SecurityRule_SmartProtection_Mode.API;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SecurityRule_SmartProtection_Mode.UNRECOGNIZED;
    }
}

export function securityRule_SmartProtection_ModeToJSON(
    object: SecurityRule_SmartProtection_Mode,
): string {
    switch (object) {
        case SecurityRule_SmartProtection_Mode.MODE_UNSPECIFIED:
            return 'MODE_UNSPECIFIED';
        case SecurityRule_SmartProtection_Mode.FULL:
            return 'FULL';
        case SecurityRule_SmartProtection_Mode.API:
            return 'API';
        default:
            return 'UNKNOWN';
    }
}

/** Waf object. */
export interface SecurityRule_Waf {
    /** Mode of protection. */
    mode: SecurityRule_Waf_Mode;
    /** The condition for matching the rule. */
    condition?: Condition;
    /** ID of WAF profile to use in this rule. */
    wafProfileId: string;
}

/** Mode of protection. */
export enum SecurityRule_Waf_Mode {
    MODE_UNSPECIFIED = 0,
    /**
     * FULL - Full protection means that the traffic will be checked based on ML models and behavioral analysis,
     * with suspicious requests being sent to SmartCaptcha.
     */
    FULL = 1,
    /**
     * API - API protection means checking the traffic based on ML models and behavioral analysis without sending suspicious
     * requests to SmartCaptcha. The suspicious requests will be blocked.
     */
    API = 2,
    UNRECOGNIZED = -1,
}

export function securityRule_Waf_ModeFromJSON(object: any): SecurityRule_Waf_Mode {
    switch (object) {
        case 0:
        case 'MODE_UNSPECIFIED':
            return SecurityRule_Waf_Mode.MODE_UNSPECIFIED;
        case 1:
        case 'FULL':
            return SecurityRule_Waf_Mode.FULL;
        case 2:
        case 'API':
            return SecurityRule_Waf_Mode.API;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SecurityRule_Waf_Mode.UNRECOGNIZED;
    }
}

export function securityRule_Waf_ModeToJSON(object: SecurityRule_Waf_Mode): string {
    switch (object) {
        case SecurityRule_Waf_Mode.MODE_UNSPECIFIED:
            return 'MODE_UNSPECIFIED';
        case SecurityRule_Waf_Mode.FULL:
            return 'FULL';
        case SecurityRule_Waf_Mode.API:
            return 'API';
        default:
            return 'UNKNOWN';
    }
}

/**
 * Condition object. AND semantics implied.
 * See [documentation](/docs/smartwebsecurity/concepts/conditions) for matchers description.
 */
export interface Condition {
    /** Match authority (Host header). */
    authority?: Condition_AuthorityMatcher;
    /** Match HTTP method. */
    httpMethod?: Condition_HttpMethodMatcher;
    /** Match Request URI. */
    requestUri?: Condition_RequestUriMatcher;
    /** Match HTTP headers. */
    headers: Condition_HeaderMatcher[];
    /** Match IP. */
    sourceIp?: Condition_IpMatcher;
}

/** StringMatcher object. */
export interface Condition_StringMatcher {
    exactMatch: string | undefined;
    exactNotMatch: string | undefined;
    prefixMatch: string | undefined;
    prefixNotMatch: string | undefined;
    pireRegexMatch: string | undefined;
    pireRegexNotMatch: string | undefined;
}

/** HttpMethodMatcher object. */
export interface Condition_HttpMethodMatcher {
    /** List of HTTP methods. OR semantics implied. */
    httpMethods: Condition_StringMatcher[];
}

/** AuthorityMatcher object. */
export interface Condition_AuthorityMatcher {
    /** List of authorities. OR semantics implied. */
    authorities: Condition_StringMatcher[];
}

/** RequestUriMatcher object. AND semantics implied. */
export interface Condition_RequestUriMatcher {
    /** Path of the URI [RFC3986](https://datatracker.ietf.org/doc/html/rfc3986#section-3.3). */
    path?: Condition_StringMatcher;
    /** List of query matchers. AND semantics implied. */
    queries: Condition_QueryMatcher[];
}

/** QueryMatcher object. */
export interface Condition_QueryMatcher {
    /** Key of the query parameter. */
    key: string;
    /** Value of the query parameter. */
    value?: Condition_StringMatcher;
}

/** HeaderMatcher object. */
export interface Condition_HeaderMatcher {
    /** Name of header (case insensitive). */
    name: string;
    /** Value of the header. */
    value?: Condition_StringMatcher;
}

/** IpMatcher object. AND semantics implied. */
export interface Condition_IpMatcher {
    ipRangesMatch?: Condition_IpRangesMatcher;
    ipRangesNotMatch?: Condition_IpRangesMatcher;
    geoIpMatch?: Condition_GeoIpMatcher;
    geoIpNotMatch?: Condition_GeoIpMatcher;
}

/** IpRangesMatcher object. */
export interface Condition_IpRangesMatcher {
    /** List of IP ranges. OR semantics implied. */
    ipRanges: string[];
}

/** GeoIpMatcher object. */
export interface Condition_GeoIpMatcher {
    /** ISO 3166-1 alpha 2. OR semantics implied. */
    locations: string[];
}

const baseSecurityProfile: object = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    defaultAction: 0,
    cloudId: '',
    captchaId: '',
    advancedRateLimiterProfileId: '',
};

export const SecurityProfile = {
    encode(message: SecurityProfile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            SecurityProfile_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(26).fork(),
            ).ldelim();
        });
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        if (message.defaultAction !== 0) {
            writer.uint32(48).int32(message.defaultAction);
        }
        for (const v of message.securityRules) {
            SecurityRule.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(66).fork()).ldelim();
        }
        if (message.cloudId !== '') {
            writer.uint32(82).string(message.cloudId);
        }
        if (message.captchaId !== '') {
            writer.uint32(90).string(message.captchaId);
        }
        if (message.advancedRateLimiterProfileId !== '') {
            writer.uint32(98).string(message.advancedRateLimiterProfileId);
        }
        if (message.analyzeRequestBody !== undefined) {
            SecurityProfile_AnalyzeRequestBody.encode(
                message.analyzeRequestBody,
                writer.uint32(106).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SecurityProfile {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSecurityProfile } as SecurityProfile;
        message.labels = {};
        message.securityRules = [];
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
                    const entry3 = SecurityProfile_LabelsEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.labels[entry3.key] = entry3.value;
                    }
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.defaultAction = reader.int32() as any;
                    break;
                case 7:
                    message.securityRules.push(SecurityRule.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.cloudId = reader.string();
                    break;
                case 11:
                    message.captchaId = reader.string();
                    break;
                case 12:
                    message.advancedRateLimiterProfileId = reader.string();
                    break;
                case 13:
                    message.analyzeRequestBody = SecurityProfile_AnalyzeRequestBody.decode(
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

    fromJSON(object: any): SecurityProfile {
        const message = { ...baseSecurityProfile } as SecurityProfile;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            },
            {},
        );
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.defaultAction =
            object.defaultAction !== undefined && object.defaultAction !== null
                ? securityProfile_DefaultActionFromJSON(object.defaultAction)
                : 0;
        message.securityRules = (object.securityRules ?? []).map((e: any) =>
            SecurityRule.fromJSON(e),
        );
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null ? String(object.cloudId) : '';
        message.captchaId =
            object.captchaId !== undefined && object.captchaId !== null
                ? String(object.captchaId)
                : '';
        message.advancedRateLimiterProfileId =
            object.advancedRateLimiterProfileId !== undefined &&
            object.advancedRateLimiterProfileId !== null
                ? String(object.advancedRateLimiterProfileId)
                : '';
        message.analyzeRequestBody =
            object.analyzeRequestBody !== undefined && object.analyzeRequestBody !== null
                ? SecurityProfile_AnalyzeRequestBody.fromJSON(object.analyzeRequestBody)
                : undefined;
        return message;
    },

    toJSON(message: SecurityProfile): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.defaultAction !== undefined &&
            (obj.defaultAction = securityProfile_DefaultActionToJSON(message.defaultAction));
        if (message.securityRules) {
            obj.securityRules = message.securityRules.map((e) =>
                e ? SecurityRule.toJSON(e) : undefined,
            );
        } else {
            obj.securityRules = [];
        }
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        message.captchaId !== undefined && (obj.captchaId = message.captchaId);
        message.advancedRateLimiterProfileId !== undefined &&
            (obj.advancedRateLimiterProfileId = message.advancedRateLimiterProfileId);
        message.analyzeRequestBody !== undefined &&
            (obj.analyzeRequestBody = message.analyzeRequestBody
                ? SecurityProfile_AnalyzeRequestBody.toJSON(message.analyzeRequestBody)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SecurityProfile>, I>>(object: I): SecurityProfile {
        const message = { ...baseSecurityProfile } as SecurityProfile;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {},
        );
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.defaultAction = object.defaultAction ?? 0;
        message.securityRules = object.securityRules?.map((e) => SecurityRule.fromPartial(e)) || [];
        message.createdAt = object.createdAt ?? undefined;
        message.cloudId = object.cloudId ?? '';
        message.captchaId = object.captchaId ?? '';
        message.advancedRateLimiterProfileId = object.advancedRateLimiterProfileId ?? '';
        message.analyzeRequestBody =
            object.analyzeRequestBody !== undefined && object.analyzeRequestBody !== null
                ? SecurityProfile_AnalyzeRequestBody.fromPartial(object.analyzeRequestBody)
                : undefined;
        return message;
    },
};

const baseSecurityProfile_AnalyzeRequestBody: object = { sizeLimit: 0, sizeLimitAction: 0 };

export const SecurityProfile_AnalyzeRequestBody = {
    encode(
        message: SecurityProfile_AnalyzeRequestBody,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.sizeLimit !== 0) {
            writer.uint32(8).int64(message.sizeLimit);
        }
        if (message.sizeLimitAction !== 0) {
            writer.uint32(16).int32(message.sizeLimitAction);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SecurityProfile_AnalyzeRequestBody {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSecurityProfile_AnalyzeRequestBody,
        } as SecurityProfile_AnalyzeRequestBody;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sizeLimit = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.sizeLimitAction = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SecurityProfile_AnalyzeRequestBody {
        const message = {
            ...baseSecurityProfile_AnalyzeRequestBody,
        } as SecurityProfile_AnalyzeRequestBody;
        message.sizeLimit =
            object.sizeLimit !== undefined && object.sizeLimit !== null
                ? Number(object.sizeLimit)
                : 0;
        message.sizeLimitAction =
            object.sizeLimitAction !== undefined && object.sizeLimitAction !== null
                ? securityProfile_AnalyzeRequestBody_ActionFromJSON(object.sizeLimitAction)
                : 0;
        return message;
    },

    toJSON(message: SecurityProfile_AnalyzeRequestBody): unknown {
        const obj: any = {};
        message.sizeLimit !== undefined && (obj.sizeLimit = Math.round(message.sizeLimit));
        message.sizeLimitAction !== undefined &&
            (obj.sizeLimitAction = securityProfile_AnalyzeRequestBody_ActionToJSON(
                message.sizeLimitAction,
            ));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SecurityProfile_AnalyzeRequestBody>, I>>(
        object: I,
    ): SecurityProfile_AnalyzeRequestBody {
        const message = {
            ...baseSecurityProfile_AnalyzeRequestBody,
        } as SecurityProfile_AnalyzeRequestBody;
        message.sizeLimit = object.sizeLimit ?? 0;
        message.sizeLimitAction = object.sizeLimitAction ?? 0;
        return message;
    },
};

const baseSecurityProfile_LabelsEntry: object = { key: '', value: '' };

export const SecurityProfile_LabelsEntry = {
    encode(
        message: SecurityProfile_LabelsEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SecurityProfile_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSecurityProfile_LabelsEntry } as SecurityProfile_LabelsEntry;
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

    fromJSON(object: any): SecurityProfile_LabelsEntry {
        const message = { ...baseSecurityProfile_LabelsEntry } as SecurityProfile_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: SecurityProfile_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SecurityProfile_LabelsEntry>, I>>(
        object: I,
    ): SecurityProfile_LabelsEntry {
        const message = { ...baseSecurityProfile_LabelsEntry } as SecurityProfile_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseSecurityRule: object = { name: '', priority: 0, dryRun: false, description: '' };

export const SecurityRule = {
    encode(message: SecurityRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.priority !== 0) {
            writer.uint32(16).int64(message.priority);
        }
        if (message.dryRun === true) {
            writer.uint32(24).bool(message.dryRun);
        }
        if (message.ruleCondition !== undefined) {
            SecurityRule_RuleCondition.encode(
                message.ruleCondition,
                writer.uint32(34).fork(),
            ).ldelim();
        }
        if (message.smartProtection !== undefined) {
            SecurityRule_SmartProtection.encode(
                message.smartProtection,
                writer.uint32(42).fork(),
            ).ldelim();
        }
        if (message.waf !== undefined) {
            SecurityRule_Waf.encode(message.waf, writer.uint32(50).fork()).ldelim();
        }
        if (message.description !== '') {
            writer.uint32(58).string(message.description);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SecurityRule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSecurityRule } as SecurityRule;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.priority = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.dryRun = reader.bool();
                    break;
                case 4:
                    message.ruleCondition = SecurityRule_RuleCondition.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 5:
                    message.smartProtection = SecurityRule_SmartProtection.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 6:
                    message.waf = SecurityRule_Waf.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SecurityRule {
        const message = { ...baseSecurityRule } as SecurityRule;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.priority =
            object.priority !== undefined && object.priority !== null ? Number(object.priority) : 0;
        message.dryRun =
            object.dryRun !== undefined && object.dryRun !== null ? Boolean(object.dryRun) : false;
        message.ruleCondition =
            object.ruleCondition !== undefined && object.ruleCondition !== null
                ? SecurityRule_RuleCondition.fromJSON(object.ruleCondition)
                : undefined;
        message.smartProtection =
            object.smartProtection !== undefined && object.smartProtection !== null
                ? SecurityRule_SmartProtection.fromJSON(object.smartProtection)
                : undefined;
        message.waf =
            object.waf !== undefined && object.waf !== null
                ? SecurityRule_Waf.fromJSON(object.waf)
                : undefined;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        return message;
    },

    toJSON(message: SecurityRule): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.priority !== undefined && (obj.priority = Math.round(message.priority));
        message.dryRun !== undefined && (obj.dryRun = message.dryRun);
        message.ruleCondition !== undefined &&
            (obj.ruleCondition = message.ruleCondition
                ? SecurityRule_RuleCondition.toJSON(message.ruleCondition)
                : undefined);
        message.smartProtection !== undefined &&
            (obj.smartProtection = message.smartProtection
                ? SecurityRule_SmartProtection.toJSON(message.smartProtection)
                : undefined);
        message.waf !== undefined &&
            (obj.waf = message.waf ? SecurityRule_Waf.toJSON(message.waf) : undefined);
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SecurityRule>, I>>(object: I): SecurityRule {
        const message = { ...baseSecurityRule } as SecurityRule;
        message.name = object.name ?? '';
        message.priority = object.priority ?? 0;
        message.dryRun = object.dryRun ?? false;
        message.ruleCondition =
            object.ruleCondition !== undefined && object.ruleCondition !== null
                ? SecurityRule_RuleCondition.fromPartial(object.ruleCondition)
                : undefined;
        message.smartProtection =
            object.smartProtection !== undefined && object.smartProtection !== null
                ? SecurityRule_SmartProtection.fromPartial(object.smartProtection)
                : undefined;
        message.waf =
            object.waf !== undefined && object.waf !== null
                ? SecurityRule_Waf.fromPartial(object.waf)
                : undefined;
        message.description = object.description ?? '';
        return message;
    },
};

const baseSecurityRule_RuleCondition: object = { action: 0 };

export const SecurityRule_RuleCondition = {
    encode(
        message: SecurityRule_RuleCondition,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.action !== 0) {
            writer.uint32(8).int32(message.action);
        }
        if (message.condition !== undefined) {
            Condition.encode(message.condition, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SecurityRule_RuleCondition {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSecurityRule_RuleCondition } as SecurityRule_RuleCondition;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.action = reader.int32() as any;
                    break;
                case 2:
                    message.condition = Condition.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SecurityRule_RuleCondition {
        const message = { ...baseSecurityRule_RuleCondition } as SecurityRule_RuleCondition;
        message.action =
            object.action !== undefined && object.action !== null
                ? securityRule_RuleCondition_ActionFromJSON(object.action)
                : 0;
        message.condition =
            object.condition !== undefined && object.condition !== null
                ? Condition.fromJSON(object.condition)
                : undefined;
        return message;
    },

    toJSON(message: SecurityRule_RuleCondition): unknown {
        const obj: any = {};
        message.action !== undefined &&
            (obj.action = securityRule_RuleCondition_ActionToJSON(message.action));
        message.condition !== undefined &&
            (obj.condition = message.condition ? Condition.toJSON(message.condition) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SecurityRule_RuleCondition>, I>>(
        object: I,
    ): SecurityRule_RuleCondition {
        const message = { ...baseSecurityRule_RuleCondition } as SecurityRule_RuleCondition;
        message.action = object.action ?? 0;
        message.condition =
            object.condition !== undefined && object.condition !== null
                ? Condition.fromPartial(object.condition)
                : undefined;
        return message;
    },
};

const baseSecurityRule_SmartProtection: object = { mode: 0 };

export const SecurityRule_SmartProtection = {
    encode(
        message: SecurityRule_SmartProtection,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.condition !== undefined) {
            Condition.encode(message.condition, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SecurityRule_SmartProtection {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSecurityRule_SmartProtection } as SecurityRule_SmartProtection;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32() as any;
                    break;
                case 2:
                    message.condition = Condition.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SecurityRule_SmartProtection {
        const message = { ...baseSecurityRule_SmartProtection } as SecurityRule_SmartProtection;
        message.mode =
            object.mode !== undefined && object.mode !== null
                ? securityRule_SmartProtection_ModeFromJSON(object.mode)
                : 0;
        message.condition =
            object.condition !== undefined && object.condition !== null
                ? Condition.fromJSON(object.condition)
                : undefined;
        return message;
    },

    toJSON(message: SecurityRule_SmartProtection): unknown {
        const obj: any = {};
        message.mode !== undefined &&
            (obj.mode = securityRule_SmartProtection_ModeToJSON(message.mode));
        message.condition !== undefined &&
            (obj.condition = message.condition ? Condition.toJSON(message.condition) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SecurityRule_SmartProtection>, I>>(
        object: I,
    ): SecurityRule_SmartProtection {
        const message = { ...baseSecurityRule_SmartProtection } as SecurityRule_SmartProtection;
        message.mode = object.mode ?? 0;
        message.condition =
            object.condition !== undefined && object.condition !== null
                ? Condition.fromPartial(object.condition)
                : undefined;
        return message;
    },
};

const baseSecurityRule_Waf: object = { mode: 0, wafProfileId: '' };

export const SecurityRule_Waf = {
    encode(message: SecurityRule_Waf, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.condition !== undefined) {
            Condition.encode(message.condition, writer.uint32(18).fork()).ldelim();
        }
        if (message.wafProfileId !== '') {
            writer.uint32(26).string(message.wafProfileId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SecurityRule_Waf {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSecurityRule_Waf } as SecurityRule_Waf;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32() as any;
                    break;
                case 2:
                    message.condition = Condition.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.wafProfileId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SecurityRule_Waf {
        const message = { ...baseSecurityRule_Waf } as SecurityRule_Waf;
        message.mode =
            object.mode !== undefined && object.mode !== null
                ? securityRule_Waf_ModeFromJSON(object.mode)
                : 0;
        message.condition =
            object.condition !== undefined && object.condition !== null
                ? Condition.fromJSON(object.condition)
                : undefined;
        message.wafProfileId =
            object.wafProfileId !== undefined && object.wafProfileId !== null
                ? String(object.wafProfileId)
                : '';
        return message;
    },

    toJSON(message: SecurityRule_Waf): unknown {
        const obj: any = {};
        message.mode !== undefined && (obj.mode = securityRule_Waf_ModeToJSON(message.mode));
        message.condition !== undefined &&
            (obj.condition = message.condition ? Condition.toJSON(message.condition) : undefined);
        message.wafProfileId !== undefined && (obj.wafProfileId = message.wafProfileId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SecurityRule_Waf>, I>>(object: I): SecurityRule_Waf {
        const message = { ...baseSecurityRule_Waf } as SecurityRule_Waf;
        message.mode = object.mode ?? 0;
        message.condition =
            object.condition !== undefined && object.condition !== null
                ? Condition.fromPartial(object.condition)
                : undefined;
        message.wafProfileId = object.wafProfileId ?? '';
        return message;
    },
};

const baseCondition: object = {};

export const Condition = {
    encode(message: Condition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.authority !== undefined) {
            Condition_AuthorityMatcher.encode(message.authority, writer.uint32(10).fork()).ldelim();
        }
        if (message.httpMethod !== undefined) {
            Condition_HttpMethodMatcher.encode(
                message.httpMethod,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.requestUri !== undefined) {
            Condition_RequestUriMatcher.encode(
                message.requestUri,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        for (const v of message.headers) {
            Condition_HeaderMatcher.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        if (message.sourceIp !== undefined) {
            Condition_IpMatcher.encode(message.sourceIp, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Condition {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition } as Condition;
        message.headers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = Condition_AuthorityMatcher.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.httpMethod = Condition_HttpMethodMatcher.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.requestUri = Condition_RequestUriMatcher.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 4:
                    message.headers.push(Condition_HeaderMatcher.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.sourceIp = Condition_IpMatcher.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Condition {
        const message = { ...baseCondition } as Condition;
        message.authority =
            object.authority !== undefined && object.authority !== null
                ? Condition_AuthorityMatcher.fromJSON(object.authority)
                : undefined;
        message.httpMethod =
            object.httpMethod !== undefined && object.httpMethod !== null
                ? Condition_HttpMethodMatcher.fromJSON(object.httpMethod)
                : undefined;
        message.requestUri =
            object.requestUri !== undefined && object.requestUri !== null
                ? Condition_RequestUriMatcher.fromJSON(object.requestUri)
                : undefined;
        message.headers = (object.headers ?? []).map((e: any) =>
            Condition_HeaderMatcher.fromJSON(e),
        );
        message.sourceIp =
            object.sourceIp !== undefined && object.sourceIp !== null
                ? Condition_IpMatcher.fromJSON(object.sourceIp)
                : undefined;
        return message;
    },

    toJSON(message: Condition): unknown {
        const obj: any = {};
        message.authority !== undefined &&
            (obj.authority = message.authority
                ? Condition_AuthorityMatcher.toJSON(message.authority)
                : undefined);
        message.httpMethod !== undefined &&
            (obj.httpMethod = message.httpMethod
                ? Condition_HttpMethodMatcher.toJSON(message.httpMethod)
                : undefined);
        message.requestUri !== undefined &&
            (obj.requestUri = message.requestUri
                ? Condition_RequestUriMatcher.toJSON(message.requestUri)
                : undefined);
        if (message.headers) {
            obj.headers = message.headers.map((e) =>
                e ? Condition_HeaderMatcher.toJSON(e) : undefined,
            );
        } else {
            obj.headers = [];
        }
        message.sourceIp !== undefined &&
            (obj.sourceIp = message.sourceIp
                ? Condition_IpMatcher.toJSON(message.sourceIp)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Condition>, I>>(object: I): Condition {
        const message = { ...baseCondition } as Condition;
        message.authority =
            object.authority !== undefined && object.authority !== null
                ? Condition_AuthorityMatcher.fromPartial(object.authority)
                : undefined;
        message.httpMethod =
            object.httpMethod !== undefined && object.httpMethod !== null
                ? Condition_HttpMethodMatcher.fromPartial(object.httpMethod)
                : undefined;
        message.requestUri =
            object.requestUri !== undefined && object.requestUri !== null
                ? Condition_RequestUriMatcher.fromPartial(object.requestUri)
                : undefined;
        message.headers = object.headers?.map((e) => Condition_HeaderMatcher.fromPartial(e)) || [];
        message.sourceIp =
            object.sourceIp !== undefined && object.sourceIp !== null
                ? Condition_IpMatcher.fromPartial(object.sourceIp)
                : undefined;
        return message;
    },
};

const baseCondition_StringMatcher: object = {};

export const Condition_StringMatcher = {
    encode(message: Condition_StringMatcher, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.exactMatch !== undefined) {
            writer.uint32(10).string(message.exactMatch);
        }
        if (message.exactNotMatch !== undefined) {
            writer.uint32(18).string(message.exactNotMatch);
        }
        if (message.prefixMatch !== undefined) {
            writer.uint32(26).string(message.prefixMatch);
        }
        if (message.prefixNotMatch !== undefined) {
            writer.uint32(34).string(message.prefixNotMatch);
        }
        if (message.pireRegexMatch !== undefined) {
            writer.uint32(42).string(message.pireRegexMatch);
        }
        if (message.pireRegexNotMatch !== undefined) {
            writer.uint32(50).string(message.pireRegexNotMatch);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_StringMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition_StringMatcher } as Condition_StringMatcher;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exactMatch = reader.string();
                    break;
                case 2:
                    message.exactNotMatch = reader.string();
                    break;
                case 3:
                    message.prefixMatch = reader.string();
                    break;
                case 4:
                    message.prefixNotMatch = reader.string();
                    break;
                case 5:
                    message.pireRegexMatch = reader.string();
                    break;
                case 6:
                    message.pireRegexNotMatch = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Condition_StringMatcher {
        const message = { ...baseCondition_StringMatcher } as Condition_StringMatcher;
        message.exactMatch =
            object.exactMatch !== undefined && object.exactMatch !== null
                ? String(object.exactMatch)
                : undefined;
        message.exactNotMatch =
            object.exactNotMatch !== undefined && object.exactNotMatch !== null
                ? String(object.exactNotMatch)
                : undefined;
        message.prefixMatch =
            object.prefixMatch !== undefined && object.prefixMatch !== null
                ? String(object.prefixMatch)
                : undefined;
        message.prefixNotMatch =
            object.prefixNotMatch !== undefined && object.prefixNotMatch !== null
                ? String(object.prefixNotMatch)
                : undefined;
        message.pireRegexMatch =
            object.pireRegexMatch !== undefined && object.pireRegexMatch !== null
                ? String(object.pireRegexMatch)
                : undefined;
        message.pireRegexNotMatch =
            object.pireRegexNotMatch !== undefined && object.pireRegexNotMatch !== null
                ? String(object.pireRegexNotMatch)
                : undefined;
        return message;
    },

    toJSON(message: Condition_StringMatcher): unknown {
        const obj: any = {};
        message.exactMatch !== undefined && (obj.exactMatch = message.exactMatch);
        message.exactNotMatch !== undefined && (obj.exactNotMatch = message.exactNotMatch);
        message.prefixMatch !== undefined && (obj.prefixMatch = message.prefixMatch);
        message.prefixNotMatch !== undefined && (obj.prefixNotMatch = message.prefixNotMatch);
        message.pireRegexMatch !== undefined && (obj.pireRegexMatch = message.pireRegexMatch);
        message.pireRegexNotMatch !== undefined &&
            (obj.pireRegexNotMatch = message.pireRegexNotMatch);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Condition_StringMatcher>, I>>(
        object: I,
    ): Condition_StringMatcher {
        const message = { ...baseCondition_StringMatcher } as Condition_StringMatcher;
        message.exactMatch = object.exactMatch ?? undefined;
        message.exactNotMatch = object.exactNotMatch ?? undefined;
        message.prefixMatch = object.prefixMatch ?? undefined;
        message.prefixNotMatch = object.prefixNotMatch ?? undefined;
        message.pireRegexMatch = object.pireRegexMatch ?? undefined;
        message.pireRegexNotMatch = object.pireRegexNotMatch ?? undefined;
        return message;
    },
};

const baseCondition_HttpMethodMatcher: object = {};

export const Condition_HttpMethodMatcher = {
    encode(
        message: Condition_HttpMethodMatcher,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.httpMethods) {
            Condition_StringMatcher.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_HttpMethodMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition_HttpMethodMatcher } as Condition_HttpMethodMatcher;
        message.httpMethods = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpMethods.push(
                        Condition_StringMatcher.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Condition_HttpMethodMatcher {
        const message = { ...baseCondition_HttpMethodMatcher } as Condition_HttpMethodMatcher;
        message.httpMethods = (object.httpMethods ?? []).map((e: any) =>
            Condition_StringMatcher.fromJSON(e),
        );
        return message;
    },

    toJSON(message: Condition_HttpMethodMatcher): unknown {
        const obj: any = {};
        if (message.httpMethods) {
            obj.httpMethods = message.httpMethods.map((e) =>
                e ? Condition_StringMatcher.toJSON(e) : undefined,
            );
        } else {
            obj.httpMethods = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Condition_HttpMethodMatcher>, I>>(
        object: I,
    ): Condition_HttpMethodMatcher {
        const message = { ...baseCondition_HttpMethodMatcher } as Condition_HttpMethodMatcher;
        message.httpMethods =
            object.httpMethods?.map((e) => Condition_StringMatcher.fromPartial(e)) || [];
        return message;
    },
};

const baseCondition_AuthorityMatcher: object = {};

export const Condition_AuthorityMatcher = {
    encode(
        message: Condition_AuthorityMatcher,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.authorities) {
            Condition_StringMatcher.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_AuthorityMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition_AuthorityMatcher } as Condition_AuthorityMatcher;
        message.authorities = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authorities.push(
                        Condition_StringMatcher.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Condition_AuthorityMatcher {
        const message = { ...baseCondition_AuthorityMatcher } as Condition_AuthorityMatcher;
        message.authorities = (object.authorities ?? []).map((e: any) =>
            Condition_StringMatcher.fromJSON(e),
        );
        return message;
    },

    toJSON(message: Condition_AuthorityMatcher): unknown {
        const obj: any = {};
        if (message.authorities) {
            obj.authorities = message.authorities.map((e) =>
                e ? Condition_StringMatcher.toJSON(e) : undefined,
            );
        } else {
            obj.authorities = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Condition_AuthorityMatcher>, I>>(
        object: I,
    ): Condition_AuthorityMatcher {
        const message = { ...baseCondition_AuthorityMatcher } as Condition_AuthorityMatcher;
        message.authorities =
            object.authorities?.map((e) => Condition_StringMatcher.fromPartial(e)) || [];
        return message;
    },
};

const baseCondition_RequestUriMatcher: object = {};

export const Condition_RequestUriMatcher = {
    encode(
        message: Condition_RequestUriMatcher,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.path !== undefined) {
            Condition_StringMatcher.encode(message.path, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.queries) {
            Condition_QueryMatcher.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_RequestUriMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition_RequestUriMatcher } as Condition_RequestUriMatcher;
        message.queries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = Condition_StringMatcher.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.queries.push(Condition_QueryMatcher.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Condition_RequestUriMatcher {
        const message = { ...baseCondition_RequestUriMatcher } as Condition_RequestUriMatcher;
        message.path =
            object.path !== undefined && object.path !== null
                ? Condition_StringMatcher.fromJSON(object.path)
                : undefined;
        message.queries = (object.queries ?? []).map((e: any) =>
            Condition_QueryMatcher.fromJSON(e),
        );
        return message;
    },

    toJSON(message: Condition_RequestUriMatcher): unknown {
        const obj: any = {};
        message.path !== undefined &&
            (obj.path = message.path ? Condition_StringMatcher.toJSON(message.path) : undefined);
        if (message.queries) {
            obj.queries = message.queries.map((e) =>
                e ? Condition_QueryMatcher.toJSON(e) : undefined,
            );
        } else {
            obj.queries = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Condition_RequestUriMatcher>, I>>(
        object: I,
    ): Condition_RequestUriMatcher {
        const message = { ...baseCondition_RequestUriMatcher } as Condition_RequestUriMatcher;
        message.path =
            object.path !== undefined && object.path !== null
                ? Condition_StringMatcher.fromPartial(object.path)
                : undefined;
        message.queries = object.queries?.map((e) => Condition_QueryMatcher.fromPartial(e)) || [];
        return message;
    },
};

const baseCondition_QueryMatcher: object = { key: '' };

export const Condition_QueryMatcher = {
    encode(message: Condition_QueryMatcher, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            Condition_StringMatcher.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_QueryMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition_QueryMatcher } as Condition_QueryMatcher;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = Condition_StringMatcher.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Condition_QueryMatcher {
        const message = { ...baseCondition_QueryMatcher } as Condition_QueryMatcher;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null
                ? Condition_StringMatcher.fromJSON(object.value)
                : undefined;
        return message;
    },

    toJSON(message: Condition_QueryMatcher): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? Condition_StringMatcher.toJSON(message.value) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Condition_QueryMatcher>, I>>(
        object: I,
    ): Condition_QueryMatcher {
        const message = { ...baseCondition_QueryMatcher } as Condition_QueryMatcher;
        message.key = object.key ?? '';
        message.value =
            object.value !== undefined && object.value !== null
                ? Condition_StringMatcher.fromPartial(object.value)
                : undefined;
        return message;
    },
};

const baseCondition_HeaderMatcher: object = { name: '' };

export const Condition_HeaderMatcher = {
    encode(message: Condition_HeaderMatcher, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.value !== undefined) {
            Condition_StringMatcher.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_HeaderMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition_HeaderMatcher } as Condition_HeaderMatcher;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.value = Condition_StringMatcher.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Condition_HeaderMatcher {
        const message = { ...baseCondition_HeaderMatcher } as Condition_HeaderMatcher;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.value =
            object.value !== undefined && object.value !== null
                ? Condition_StringMatcher.fromJSON(object.value)
                : undefined;
        return message;
    },

    toJSON(message: Condition_HeaderMatcher): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.value !== undefined &&
            (obj.value = message.value ? Condition_StringMatcher.toJSON(message.value) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Condition_HeaderMatcher>, I>>(
        object: I,
    ): Condition_HeaderMatcher {
        const message = { ...baseCondition_HeaderMatcher } as Condition_HeaderMatcher;
        message.name = object.name ?? '';
        message.value =
            object.value !== undefined && object.value !== null
                ? Condition_StringMatcher.fromPartial(object.value)
                : undefined;
        return message;
    },
};

const baseCondition_IpMatcher: object = {};

export const Condition_IpMatcher = {
    encode(message: Condition_IpMatcher, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.ipRangesMatch !== undefined) {
            Condition_IpRangesMatcher.encode(
                message.ipRangesMatch,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.ipRangesNotMatch !== undefined) {
            Condition_IpRangesMatcher.encode(
                message.ipRangesNotMatch,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.geoIpMatch !== undefined) {
            Condition_GeoIpMatcher.encode(message.geoIpMatch, writer.uint32(26).fork()).ldelim();
        }
        if (message.geoIpNotMatch !== undefined) {
            Condition_GeoIpMatcher.encode(message.geoIpNotMatch, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_IpMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition_IpMatcher } as Condition_IpMatcher;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ipRangesMatch = Condition_IpRangesMatcher.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.ipRangesNotMatch = Condition_IpRangesMatcher.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.geoIpMatch = Condition_GeoIpMatcher.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.geoIpNotMatch = Condition_GeoIpMatcher.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Condition_IpMatcher {
        const message = { ...baseCondition_IpMatcher } as Condition_IpMatcher;
        message.ipRangesMatch =
            object.ipRangesMatch !== undefined && object.ipRangesMatch !== null
                ? Condition_IpRangesMatcher.fromJSON(object.ipRangesMatch)
                : undefined;
        message.ipRangesNotMatch =
            object.ipRangesNotMatch !== undefined && object.ipRangesNotMatch !== null
                ? Condition_IpRangesMatcher.fromJSON(object.ipRangesNotMatch)
                : undefined;
        message.geoIpMatch =
            object.geoIpMatch !== undefined && object.geoIpMatch !== null
                ? Condition_GeoIpMatcher.fromJSON(object.geoIpMatch)
                : undefined;
        message.geoIpNotMatch =
            object.geoIpNotMatch !== undefined && object.geoIpNotMatch !== null
                ? Condition_GeoIpMatcher.fromJSON(object.geoIpNotMatch)
                : undefined;
        return message;
    },

    toJSON(message: Condition_IpMatcher): unknown {
        const obj: any = {};
        message.ipRangesMatch !== undefined &&
            (obj.ipRangesMatch = message.ipRangesMatch
                ? Condition_IpRangesMatcher.toJSON(message.ipRangesMatch)
                : undefined);
        message.ipRangesNotMatch !== undefined &&
            (obj.ipRangesNotMatch = message.ipRangesNotMatch
                ? Condition_IpRangesMatcher.toJSON(message.ipRangesNotMatch)
                : undefined);
        message.geoIpMatch !== undefined &&
            (obj.geoIpMatch = message.geoIpMatch
                ? Condition_GeoIpMatcher.toJSON(message.geoIpMatch)
                : undefined);
        message.geoIpNotMatch !== undefined &&
            (obj.geoIpNotMatch = message.geoIpNotMatch
                ? Condition_GeoIpMatcher.toJSON(message.geoIpNotMatch)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Condition_IpMatcher>, I>>(
        object: I,
    ): Condition_IpMatcher {
        const message = { ...baseCondition_IpMatcher } as Condition_IpMatcher;
        message.ipRangesMatch =
            object.ipRangesMatch !== undefined && object.ipRangesMatch !== null
                ? Condition_IpRangesMatcher.fromPartial(object.ipRangesMatch)
                : undefined;
        message.ipRangesNotMatch =
            object.ipRangesNotMatch !== undefined && object.ipRangesNotMatch !== null
                ? Condition_IpRangesMatcher.fromPartial(object.ipRangesNotMatch)
                : undefined;
        message.geoIpMatch =
            object.geoIpMatch !== undefined && object.geoIpMatch !== null
                ? Condition_GeoIpMatcher.fromPartial(object.geoIpMatch)
                : undefined;
        message.geoIpNotMatch =
            object.geoIpNotMatch !== undefined && object.geoIpNotMatch !== null
                ? Condition_GeoIpMatcher.fromPartial(object.geoIpNotMatch)
                : undefined;
        return message;
    },
};

const baseCondition_IpRangesMatcher: object = { ipRanges: '' };

export const Condition_IpRangesMatcher = {
    encode(
        message: Condition_IpRangesMatcher,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.ipRanges) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_IpRangesMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition_IpRangesMatcher } as Condition_IpRangesMatcher;
        message.ipRanges = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ipRanges.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Condition_IpRangesMatcher {
        const message = { ...baseCondition_IpRangesMatcher } as Condition_IpRangesMatcher;
        message.ipRanges = (object.ipRanges ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: Condition_IpRangesMatcher): unknown {
        const obj: any = {};
        if (message.ipRanges) {
            obj.ipRanges = message.ipRanges.map((e) => e);
        } else {
            obj.ipRanges = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Condition_IpRangesMatcher>, I>>(
        object: I,
    ): Condition_IpRangesMatcher {
        const message = { ...baseCondition_IpRangesMatcher } as Condition_IpRangesMatcher;
        message.ipRanges = object.ipRanges?.map((e) => e) || [];
        return message;
    },
};

const baseCondition_GeoIpMatcher: object = { locations: '' };

export const Condition_GeoIpMatcher = {
    encode(message: Condition_GeoIpMatcher, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.locations) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_GeoIpMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition_GeoIpMatcher } as Condition_GeoIpMatcher;
        message.locations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locations.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Condition_GeoIpMatcher {
        const message = { ...baseCondition_GeoIpMatcher } as Condition_GeoIpMatcher;
        message.locations = (object.locations ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: Condition_GeoIpMatcher): unknown {
        const obj: any = {};
        if (message.locations) {
            obj.locations = message.locations.map((e) => e);
        } else {
            obj.locations = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Condition_GeoIpMatcher>, I>>(
        object: I,
    ): Condition_GeoIpMatcher {
        const message = { ...baseCondition_GeoIpMatcher } as Condition_GeoIpMatcher;
        message.locations = object.locations?.map((e) => e) || [];
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
