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
    /** Disables the use of HTTP request data for training and improving the service's ML models. */
    disallowDataProcessing: boolean;
    /** Configures logging of requests processed by SWS to Audit Trails and Cloud Logging. */
    logOptions?: SecurityProfile_LogOptions;
    /** ID of the Cloud Logging log group to write SWS logs to. */
    logGroupId: string;
    /** ID of the default custom page shown to the user when a request is denied. */
    customPageId: string;
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

export interface SecurityProfile_LogOptions {
    /** ID of the Cloud Logging log group to write SWS logs to. */
    logGroupId: string;
    /** Enables logging of requests processed by SWS. */
    enable: boolean;
    /** List of modules whose requests will be logged. */
    enabledModules: SecurityProfile_LogOptions_Module[];
    /** List of verdicts for which requests will be logged. */
    enabledActions: SecurityProfile_LogOptions_Action[];
    /** Percentage of ALLOW verdicts to discard from logging (0-100). */
    discardAllowPercentage: number;
    /** List of log destinations: Cloud Logging and/or Audit Trails. */
    outputs: SecurityProfile_LogOptions_Output[];
}

/** SWS module that processed the request. */
export enum SecurityProfile_LogOptions_Module {
    MODULE_UNSPECIFIED = 0,
    /** RULE_CONDITION - Base rules condition check. */
    RULE_CONDITION = 1,
    /** SMART_PROTECTION - Smart Protection module. */
    SMART_PROTECTION = 2,
    /** WAF - Web Application Firewall module. */
    WAF = 3,
    /** ARL - Advanced Rate Limiter module. */
    ARL = 4,
    UNRECOGNIZED = -1,
}

export function securityProfile_LogOptions_ModuleFromJSON(
    object: any,
): SecurityProfile_LogOptions_Module {
    switch (object) {
        case 0:
        case 'MODULE_UNSPECIFIED':
            return SecurityProfile_LogOptions_Module.MODULE_UNSPECIFIED;
        case 1:
        case 'RULE_CONDITION':
            return SecurityProfile_LogOptions_Module.RULE_CONDITION;
        case 2:
        case 'SMART_PROTECTION':
            return SecurityProfile_LogOptions_Module.SMART_PROTECTION;
        case 3:
        case 'WAF':
            return SecurityProfile_LogOptions_Module.WAF;
        case 4:
        case 'ARL':
            return SecurityProfile_LogOptions_Module.ARL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SecurityProfile_LogOptions_Module.UNRECOGNIZED;
    }
}

export function securityProfile_LogOptions_ModuleToJSON(
    object: SecurityProfile_LogOptions_Module,
): string {
    switch (object) {
        case SecurityProfile_LogOptions_Module.MODULE_UNSPECIFIED:
            return 'MODULE_UNSPECIFIED';
        case SecurityProfile_LogOptions_Module.RULE_CONDITION:
            return 'RULE_CONDITION';
        case SecurityProfile_LogOptions_Module.SMART_PROTECTION:
            return 'SMART_PROTECTION';
        case SecurityProfile_LogOptions_Module.WAF:
            return 'WAF';
        case SecurityProfile_LogOptions_Module.ARL:
            return 'ARL';
        default:
            return 'UNKNOWN';
    }
}

/** Verdict assigned to the request by SWS. */
export enum SecurityProfile_LogOptions_Action {
    ACTION_UNSPECIFIED = 0,
    /** ALLOW - Request was allowed. */
    ALLOW = 1,
    /** DENY - Request was denied. */
    DENY = 2,
    /** CAPTCHA - Request was redirected to CAPTCHA. */
    CAPTCHA = 3,
    UNRECOGNIZED = -1,
}

export function securityProfile_LogOptions_ActionFromJSON(
    object: any,
): SecurityProfile_LogOptions_Action {
    switch (object) {
        case 0:
        case 'ACTION_UNSPECIFIED':
            return SecurityProfile_LogOptions_Action.ACTION_UNSPECIFIED;
        case 1:
        case 'ALLOW':
            return SecurityProfile_LogOptions_Action.ALLOW;
        case 2:
        case 'DENY':
            return SecurityProfile_LogOptions_Action.DENY;
        case 3:
        case 'CAPTCHA':
            return SecurityProfile_LogOptions_Action.CAPTCHA;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SecurityProfile_LogOptions_Action.UNRECOGNIZED;
    }
}

export function securityProfile_LogOptions_ActionToJSON(
    object: SecurityProfile_LogOptions_Action,
): string {
    switch (object) {
        case SecurityProfile_LogOptions_Action.ACTION_UNSPECIFIED:
            return 'ACTION_UNSPECIFIED';
        case SecurityProfile_LogOptions_Action.ALLOW:
            return 'ALLOW';
        case SecurityProfile_LogOptions_Action.DENY:
            return 'DENY';
        case SecurityProfile_LogOptions_Action.CAPTCHA:
            return 'CAPTCHA';
        default:
            return 'UNKNOWN';
    }
}

/** Log destination. */
export enum SecurityProfile_LogOptions_Output {
    OUTPUT_UNSPECIFIED = 0,
    /** CLOUD_LOGGING - Write logs to Cloud Logging. */
    CLOUD_LOGGING = 1,
    /** AUDIT_TRAILS - Write logs to Audit Trails. */
    AUDIT_TRAILS = 2,
    UNRECOGNIZED = -1,
}

export function securityProfile_LogOptions_OutputFromJSON(
    object: any,
): SecurityProfile_LogOptions_Output {
    switch (object) {
        case 0:
        case 'OUTPUT_UNSPECIFIED':
            return SecurityProfile_LogOptions_Output.OUTPUT_UNSPECIFIED;
        case 1:
        case 'CLOUD_LOGGING':
            return SecurityProfile_LogOptions_Output.CLOUD_LOGGING;
        case 2:
        case 'AUDIT_TRAILS':
            return SecurityProfile_LogOptions_Output.AUDIT_TRAILS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SecurityProfile_LogOptions_Output.UNRECOGNIZED;
    }
}

export function securityProfile_LogOptions_OutputToJSON(
    object: SecurityProfile_LogOptions_Output,
): string {
    switch (object) {
        case SecurityProfile_LogOptions_Output.OUTPUT_UNSPECIFIED:
            return 'OUTPUT_UNSPECIFIED';
        case SecurityProfile_LogOptions_Output.CLOUD_LOGGING:
            return 'CLOUD_LOGGING';
        case SecurityProfile_LogOptions_Output.AUDIT_TRAILS:
            return 'AUDIT_TRAILS';
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
    /** ID of the custom page shown to the user when the rule denies a request. */
    customPageId: string;
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
    /** Match cookies. */
    cookies: Condition_CookieMatcher[];
    /** Match bot category. */
    botCategory?: Condition_BotCategoryMatcher;
    /** Match bot name. */
    botName?: Condition_BotNameMatcher;
    /** Match bot score. */
    botScore?: Condition_BotScoreMatcher;
    /** Match verified bot. */
    verifiedBot?: Condition_VerifiedBotMatcher;
    /** Match fingerprint. */
    fingerPrint?: Condition_FingerPrintMatcher;
}

/** StringMatcher object. */
export interface Condition_StringMatcher {
    /** Exact match condition. */
    exactMatch: string | undefined;
    /** Exact not match condition. */
    exactNotMatch: string | undefined;
    /** Prefix match condition. */
    prefixMatch: string | undefined;
    /** Prefix not match condition. */
    prefixNotMatch: string | undefined;
    /** PIRE regex match condition. */
    pireRegexMatch: string | undefined;
    /** PIRE regex not match condition. */
    pireRegexNotMatch: string | undefined;
    /** Matches if the field is defined. */
    defined: boolean | undefined;
    /** Matches against string and regular expression lists. */
    listsMatchers?: Condition_ListsMatchers | undefined;
}

/** ListsMatcher object. */
export interface Condition_ListsMatcher {
    /** List of list IDs to match against. OR semantics implied. */
    listIds: string[];
}

/** ListsMatchers object. */
export interface Condition_ListsMatchers {
    /** String lists to match with. */
    strListsMatch?: Condition_ListsMatcher;
    /** String lists to not match with. */
    strListsNotMatch?: Condition_ListsMatcher;
    /** Regular expression lists to match with. */
    regExpListsMatch?: Condition_ListsMatcher;
    /** Regular expression lists to not match with. */
    regExpListsNotMatch?: Condition_ListsMatcher;
}

/** HttpMethodMatcher object. */
export interface Condition_HttpMethodMatcher {
    /**
     * List of HTTP methods. OR semantics implied.
     *
     * @deprecated
     */
    httpMethods: Condition_StringMatcher[];
    /** HTTP method matcher. */
    httpMethodMatcher?: Condition_StringMatcher;
}

/** AuthorityMatcher object. */
export interface Condition_AuthorityMatcher {
    /**
     * List of authorities. OR semantics implied.
     *
     * @deprecated
     */
    authorities: Condition_StringMatcher[];
    /** Authority matcher. */
    authorityMatcher?: Condition_StringMatcher;
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
    /** IP ranges to match with. */
    ipRangesMatch?: Condition_IpRangesMatcher;
    /** IP ranges to not match with. */
    ipRangesNotMatch?: Condition_IpRangesMatcher;
    /** Geo locations to match with. */
    geoIpMatch?: Condition_GeoIpMatcher;
    /** Geo locations to not match with. */
    geoIpNotMatch?: Condition_GeoIpMatcher;
    /** IP lists to match with. */
    ipListsMatch?: Condition_ListsMatcher;
    /** IP lists to not match with. */
    ipListsNotMatch?: Condition_ListsMatcher;
    /** ASN ranges to match with. */
    asnRangesMatch?: Condition_AsnRangesMatcher;
    /** ASN ranges to not match with. */
    asnRangesNotMatch?: Condition_AsnRangesMatcher;
    /** ASN lists to match with. */
    asnListsMatch?: Condition_ListsMatcher;
    /** ASN lists to not match with. */
    asnListsNotMatch?: Condition_ListsMatcher;
}

/** BotCategoryMatcher object. AND semantics implied. */
export interface Condition_BotCategoryMatcher {
    /** Bot category lists to match with. */
    botCategoryListsMatch?: Condition_ListsMatcher;
    /** Bot category lists to not match with. */
    botCategoryListsNotMatch?: Condition_ListsMatcher;
}

/** BotNameMatcher object. AND semantics implied. */
export interface Condition_BotNameMatcher {
    /** Bot name lists to match with. */
    botNameListsMatch?: Condition_ListsMatcher;
    /** Bot name lists to not match with. */
    botNameListsNotMatch?: Condition_ListsMatcher;
}

/** BoolMatcher object. */
export interface Condition_BoolMatcher {
    /** Boolean value to match against. */
    match: boolean;
}

/** IntLEMatcher object. */
export interface Condition_IntLEMatcher {
    /** Upper bound value (inclusive). */
    value: number;
}

/** IntGEMatcher object. */
export interface Condition_IntGEMatcher {
    /** Lower bound value (inclusive). */
    value: number;
}

/** IntEQMatcher object. */
export interface Condition_IntEQMatcher {
    /** Value to match against. */
    value: number;
}

/** IntNEMatcher object. */
export interface Condition_IntNEMatcher {
    /** Value to not match against. */
    value: number;
}

/** IntMatcher object. */
export interface Condition_IntMatcher {
    /** Less than or equal condition. */
    leMatch?: Condition_IntLEMatcher | undefined;
    /** Greater than or equal condition. */
    geMatch?: Condition_IntGEMatcher | undefined;
    /** Equal condition. */
    eqMatch?: Condition_IntEQMatcher | undefined;
    /** Not equal condition. */
    neMatch?: Condition_IntNEMatcher | undefined;
}

/** BotScoreMatcher object. */
export interface Condition_BotScoreMatcher {
    /** List of integer matchers for bot score. OR semantics implied. */
    value: Condition_IntMatcher[];
}

/** VerifiedBotMatcher object. */
export interface Condition_VerifiedBotMatcher {
    /** Matches if the bot is verified or not. */
    verified?: Condition_BoolMatcher;
}

/** FingerPrintMatcher object. */
export interface Condition_FingerPrintMatcher {
    /**
     * List of JA3 fingerprint matchers. OR semantics implied.
     *
     * @deprecated
     */
    ja3Ranges: Condition_StringMatcher[];
    /**
     * List of JA4 fingerprint matchers. OR semantics implied.
     *
     * @deprecated
     */
    ja4Ranges: Condition_StringMatcher[];
    /** JA3 fingerprint matcher. */
    ja3Matcher?: Condition_StringMatcher;
    /** JA4 fingerprint matcher. */
    ja4Matcher?: Condition_StringMatcher;
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

/** AsnRangesMatcher object. */
export interface Condition_AsnRangesMatcher {
    /** List of ASN values to match against. OR semantics implied. */
    asnRanges: number[];
}

/** CookieMatcher object. */
export interface Condition_CookieMatcher {
    /** Name of the cookie parametr. */
    name: string;
    /** Value of the cookie parametr. */
    value?: Condition_StringMatcher;
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
    disallowDataProcessing: false,
    logGroupId: '',
    customPageId: '',
};

export const SecurityProfile: {
    encode(message: SecurityProfile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SecurityProfile;
    fromJSON(object: any): SecurityProfile;
    toJSON(message: SecurityProfile): unknown;
    fromPartial<I extends Exact<DeepPartial<SecurityProfile>, I>>(object: I): SecurityProfile;
} = {
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
        if (message.disallowDataProcessing === true) {
            writer.uint32(112).bool(message.disallowDataProcessing);
        }
        if (message.logOptions !== undefined) {
            SecurityProfile_LogOptions.encode(
                message.logOptions,
                writer.uint32(122).fork(),
            ).ldelim();
        }
        if (message.logGroupId !== '') {
            writer.uint32(130).string(message.logGroupId);
        }
        if (message.customPageId !== '') {
            writer.uint32(154).string(message.customPageId);
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
                case 14:
                    message.disallowDataProcessing = reader.bool();
                    break;
                case 15:
                    message.logOptions = SecurityProfile_LogOptions.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.logGroupId = reader.string();
                    break;
                case 19:
                    message.customPageId = reader.string();
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
        message.disallowDataProcessing =
            object.disallowDataProcessing !== undefined && object.disallowDataProcessing !== null
                ? Boolean(object.disallowDataProcessing)
                : false;
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? SecurityProfile_LogOptions.fromJSON(object.logOptions)
                : undefined;
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : '';
        message.customPageId =
            object.customPageId !== undefined && object.customPageId !== null
                ? String(object.customPageId)
                : '';
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
        message.disallowDataProcessing !== undefined &&
            (obj.disallowDataProcessing = message.disallowDataProcessing);
        message.logOptions !== undefined &&
            (obj.logOptions = message.logOptions
                ? SecurityProfile_LogOptions.toJSON(message.logOptions)
                : undefined);
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        message.customPageId !== undefined && (obj.customPageId = message.customPageId);
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
        message.disallowDataProcessing = object.disallowDataProcessing ?? false;
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? SecurityProfile_LogOptions.fromPartial(object.logOptions)
                : undefined;
        message.logGroupId = object.logGroupId ?? '';
        message.customPageId = object.customPageId ?? '';
        return message;
    },
};

const baseSecurityProfile_AnalyzeRequestBody: object = { sizeLimit: 0, sizeLimitAction: 0 };

export const SecurityProfile_AnalyzeRequestBody: {
    encode(message: SecurityProfile_AnalyzeRequestBody, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SecurityProfile_AnalyzeRequestBody;
    fromJSON(object: any): SecurityProfile_AnalyzeRequestBody;
    toJSON(message: SecurityProfile_AnalyzeRequestBody): unknown;
    fromPartial<I extends Exact<DeepPartial<SecurityProfile_AnalyzeRequestBody>, I>>(object: I): SecurityProfile_AnalyzeRequestBody;
} = {
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

const baseSecurityProfile_LogOptions: object = {
    logGroupId: '',
    enable: false,
    enabledModules: 0,
    enabledActions: 0,
    discardAllowPercentage: 0,
    outputs: 0,
};

export const SecurityProfile_LogOptions: {
    encode(message: SecurityProfile_LogOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SecurityProfile_LogOptions;
    fromJSON(object: any): SecurityProfile_LogOptions;
    toJSON(message: SecurityProfile_LogOptions): unknown;
    fromPartial<I extends Exact<DeepPartial<SecurityProfile_LogOptions>, I>>(object: I): SecurityProfile_LogOptions;
} = {
    encode(
        message: SecurityProfile_LogOptions,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.logGroupId !== '') {
            writer.uint32(10).string(message.logGroupId);
        }
        if (message.enable === true) {
            writer.uint32(16).bool(message.enable);
        }
        writer.uint32(26).fork();
        for (const v of message.enabledModules) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(34).fork();
        for (const v of message.enabledActions) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.discardAllowPercentage !== 0) {
            writer.uint32(40).int64(message.discardAllowPercentage);
        }
        writer.uint32(50).fork();
        for (const v of message.outputs) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SecurityProfile_LogOptions {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSecurityProfile_LogOptions } as SecurityProfile_LogOptions;
        message.enabledModules = [];
        message.enabledActions = [];
        message.outputs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logGroupId = reader.string();
                    break;
                case 2:
                    message.enable = reader.bool();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.enabledModules.push(reader.int32() as any);
                        }
                    } else {
                        message.enabledModules.push(reader.int32() as any);
                    }
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.enabledActions.push(reader.int32() as any);
                        }
                    } else {
                        message.enabledActions.push(reader.int32() as any);
                    }
                    break;
                case 5:
                    message.discardAllowPercentage = longToNumber(reader.int64() as Long);
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.outputs.push(reader.int32() as any);
                        }
                    } else {
                        message.outputs.push(reader.int32() as any);
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SecurityProfile_LogOptions {
        const message = { ...baseSecurityProfile_LogOptions } as SecurityProfile_LogOptions;
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : '';
        message.enable =
            object.enable !== undefined && object.enable !== null ? Boolean(object.enable) : false;
        message.enabledModules = (object.enabledModules ?? []).map((e: any) =>
            securityProfile_LogOptions_ModuleFromJSON(e),
        );
        message.enabledActions = (object.enabledActions ?? []).map((e: any) =>
            securityProfile_LogOptions_ActionFromJSON(e),
        );
        message.discardAllowPercentage =
            object.discardAllowPercentage !== undefined && object.discardAllowPercentage !== null
                ? Number(object.discardAllowPercentage)
                : 0;
        message.outputs = (object.outputs ?? []).map((e: any) =>
            securityProfile_LogOptions_OutputFromJSON(e),
        );
        return message;
    },

    toJSON(message: SecurityProfile_LogOptions): unknown {
        const obj: any = {};
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        message.enable !== undefined && (obj.enable = message.enable);
        if (message.enabledModules) {
            obj.enabledModules = message.enabledModules.map((e) =>
                securityProfile_LogOptions_ModuleToJSON(e),
            );
        } else {
            obj.enabledModules = [];
        }
        if (message.enabledActions) {
            obj.enabledActions = message.enabledActions.map((e) =>
                securityProfile_LogOptions_ActionToJSON(e),
            );
        } else {
            obj.enabledActions = [];
        }
        message.discardAllowPercentage !== undefined &&
            (obj.discardAllowPercentage = Math.round(message.discardAllowPercentage));
        if (message.outputs) {
            obj.outputs = message.outputs.map((e) => securityProfile_LogOptions_OutputToJSON(e));
        } else {
            obj.outputs = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SecurityProfile_LogOptions>, I>>(
        object: I,
    ): SecurityProfile_LogOptions {
        const message = { ...baseSecurityProfile_LogOptions } as SecurityProfile_LogOptions;
        message.logGroupId = object.logGroupId ?? '';
        message.enable = object.enable ?? false;
        message.enabledModules = object.enabledModules?.map((e) => e) || [];
        message.enabledActions = object.enabledActions?.map((e) => e) || [];
        message.discardAllowPercentage = object.discardAllowPercentage ?? 0;
        message.outputs = object.outputs?.map((e) => e) || [];
        return message;
    },
};

const baseSecurityProfile_LabelsEntry: object = { key: '', value: '' };

export const SecurityProfile_LabelsEntry: {
    encode(message: SecurityProfile_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SecurityProfile_LabelsEntry;
    fromJSON(object: any): SecurityProfile_LabelsEntry;
    toJSON(message: SecurityProfile_LabelsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<SecurityProfile_LabelsEntry>, I>>(object: I): SecurityProfile_LabelsEntry;
} = {
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

const baseSecurityRule: object = {
    name: '',
    priority: 0,
    dryRun: false,
    description: '',
    customPageId: '',
};

export const SecurityRule: {
    encode(message: SecurityRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SecurityRule;
    fromJSON(object: any): SecurityRule;
    toJSON(message: SecurityRule): unknown;
    fromPartial<I extends Exact<DeepPartial<SecurityRule>, I>>(object: I): SecurityRule;
} = {
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
        if (message.customPageId !== '') {
            writer.uint32(74).string(message.customPageId);
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
                case 9:
                    message.customPageId = reader.string();
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
        message.customPageId =
            object.customPageId !== undefined && object.customPageId !== null
                ? String(object.customPageId)
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
        message.customPageId !== undefined && (obj.customPageId = message.customPageId);
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
        message.customPageId = object.customPageId ?? '';
        return message;
    },
};

const baseSecurityRule_RuleCondition: object = { action: 0 };

export const SecurityRule_RuleCondition: {
    encode(message: SecurityRule_RuleCondition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SecurityRule_RuleCondition;
    fromJSON(object: any): SecurityRule_RuleCondition;
    toJSON(message: SecurityRule_RuleCondition): unknown;
    fromPartial<I extends Exact<DeepPartial<SecurityRule_RuleCondition>, I>>(object: I): SecurityRule_RuleCondition;
} = {
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

export const SecurityRule_SmartProtection: {
    encode(message: SecurityRule_SmartProtection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SecurityRule_SmartProtection;
    fromJSON(object: any): SecurityRule_SmartProtection;
    toJSON(message: SecurityRule_SmartProtection): unknown;
    fromPartial<I extends Exact<DeepPartial<SecurityRule_SmartProtection>, I>>(object: I): SecurityRule_SmartProtection;
} = {
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

export const SecurityRule_Waf: {
    encode(message: SecurityRule_Waf, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SecurityRule_Waf;
    fromJSON(object: any): SecurityRule_Waf;
    toJSON(message: SecurityRule_Waf): unknown;
    fromPartial<I extends Exact<DeepPartial<SecurityRule_Waf>, I>>(object: I): SecurityRule_Waf;
} = {
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

export const Condition: {
    encode(message: Condition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Condition;
    fromJSON(object: any): Condition;
    toJSON(message: Condition): unknown;
    fromPartial<I extends Exact<DeepPartial<Condition>, I>>(object: I): Condition;
} = {
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
        for (const v of message.cookies) {
            Condition_CookieMatcher.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        if (message.botCategory !== undefined) {
            Condition_BotCategoryMatcher.encode(
                message.botCategory,
                writer.uint32(66).fork(),
            ).ldelim();
        }
        if (message.botName !== undefined) {
            Condition_BotNameMatcher.encode(message.botName, writer.uint32(74).fork()).ldelim();
        }
        if (message.botScore !== undefined) {
            Condition_BotScoreMatcher.encode(message.botScore, writer.uint32(82).fork()).ldelim();
        }
        if (message.verifiedBot !== undefined) {
            Condition_VerifiedBotMatcher.encode(
                message.verifiedBot,
                writer.uint32(90).fork(),
            ).ldelim();
        }
        if (message.fingerPrint !== undefined) {
            Condition_FingerPrintMatcher.encode(
                message.fingerPrint,
                writer.uint32(98).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Condition {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition } as Condition;
        message.headers = [];
        message.cookies = [];
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
                case 7:
                    message.cookies.push(Condition_CookieMatcher.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.botCategory = Condition_BotCategoryMatcher.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 9:
                    message.botName = Condition_BotNameMatcher.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.botScore = Condition_BotScoreMatcher.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.verifiedBot = Condition_VerifiedBotMatcher.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 12:
                    message.fingerPrint = Condition_FingerPrintMatcher.decode(
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
        message.cookies = (object.cookies ?? []).map((e: any) =>
            Condition_CookieMatcher.fromJSON(e),
        );
        message.botCategory =
            object.botCategory !== undefined && object.botCategory !== null
                ? Condition_BotCategoryMatcher.fromJSON(object.botCategory)
                : undefined;
        message.botName =
            object.botName !== undefined && object.botName !== null
                ? Condition_BotNameMatcher.fromJSON(object.botName)
                : undefined;
        message.botScore =
            object.botScore !== undefined && object.botScore !== null
                ? Condition_BotScoreMatcher.fromJSON(object.botScore)
                : undefined;
        message.verifiedBot =
            object.verifiedBot !== undefined && object.verifiedBot !== null
                ? Condition_VerifiedBotMatcher.fromJSON(object.verifiedBot)
                : undefined;
        message.fingerPrint =
            object.fingerPrint !== undefined && object.fingerPrint !== null
                ? Condition_FingerPrintMatcher.fromJSON(object.fingerPrint)
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
        if (message.cookies) {
            obj.cookies = message.cookies.map((e) =>
                e ? Condition_CookieMatcher.toJSON(e) : undefined,
            );
        } else {
            obj.cookies = [];
        }
        message.botCategory !== undefined &&
            (obj.botCategory = message.botCategory
                ? Condition_BotCategoryMatcher.toJSON(message.botCategory)
                : undefined);
        message.botName !== undefined &&
            (obj.botName = message.botName
                ? Condition_BotNameMatcher.toJSON(message.botName)
                : undefined);
        message.botScore !== undefined &&
            (obj.botScore = message.botScore
                ? Condition_BotScoreMatcher.toJSON(message.botScore)
                : undefined);
        message.verifiedBot !== undefined &&
            (obj.verifiedBot = message.verifiedBot
                ? Condition_VerifiedBotMatcher.toJSON(message.verifiedBot)
                : undefined);
        message.fingerPrint !== undefined &&
            (obj.fingerPrint = message.fingerPrint
                ? Condition_FingerPrintMatcher.toJSON(message.fingerPrint)
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
        message.cookies = object.cookies?.map((e) => Condition_CookieMatcher.fromPartial(e)) || [];
        message.botCategory =
            object.botCategory !== undefined && object.botCategory !== null
                ? Condition_BotCategoryMatcher.fromPartial(object.botCategory)
                : undefined;
        message.botName =
            object.botName !== undefined && object.botName !== null
                ? Condition_BotNameMatcher.fromPartial(object.botName)
                : undefined;
        message.botScore =
            object.botScore !== undefined && object.botScore !== null
                ? Condition_BotScoreMatcher.fromPartial(object.botScore)
                : undefined;
        message.verifiedBot =
            object.verifiedBot !== undefined && object.verifiedBot !== null
                ? Condition_VerifiedBotMatcher.fromPartial(object.verifiedBot)
                : undefined;
        message.fingerPrint =
            object.fingerPrint !== undefined && object.fingerPrint !== null
                ? Condition_FingerPrintMatcher.fromPartial(object.fingerPrint)
                : undefined;
        return message;
    },
};

const baseCondition_StringMatcher: object = {};

export const Condition_StringMatcher: {
    encode(message: Condition_StringMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_StringMatcher;
    fromJSON(object: any): Condition_StringMatcher;
    toJSON(message: Condition_StringMatcher): unknown;
    fromPartial<I extends Exact<DeepPartial<Condition_StringMatcher>, I>>(object: I): Condition_StringMatcher;
} = {
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
        if (message.defined !== undefined) {
            writer.uint32(56).bool(message.defined);
        }
        if (message.listsMatchers !== undefined) {
            Condition_ListsMatchers.encode(
                message.listsMatchers,
                writer.uint32(66).fork(),
            ).ldelim();
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
                case 7:
                    message.defined = reader.bool();
                    break;
                case 8:
                    message.listsMatchers = Condition_ListsMatchers.decode(reader, reader.uint32());
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
        message.defined =
            object.defined !== undefined && object.defined !== null
                ? Boolean(object.defined)
                : undefined;
        message.listsMatchers =
            object.listsMatchers !== undefined && object.listsMatchers !== null
                ? Condition_ListsMatchers.fromJSON(object.listsMatchers)
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
        message.defined !== undefined && (obj.defined = message.defined);
        message.listsMatchers !== undefined &&
            (obj.listsMatchers = message.listsMatchers
                ? Condition_ListsMatchers.toJSON(message.listsMatchers)
                : undefined);
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
        message.defined = object.defined ?? undefined;
        message.listsMatchers =
            object.listsMatchers !== undefined && object.listsMatchers !== null
                ? Condition_ListsMatchers.fromPartial(object.listsMatchers)
                : undefined;
        return message;
    },
};

const baseCondition_ListsMatcher: object = { listIds: '' };

export const Condition_ListsMatcher: {
    encode(message: Condition_ListsMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_ListsMatcher;
    fromJSON(object: any): Condition_ListsMatcher;
    toJSON(message: Condition_ListsMatcher): unknown;
    fromPartial<I extends Exact<DeepPartial<Condition_ListsMatcher>, I>>(object: I): Condition_ListsMatcher;
} = {
    encode(message: Condition_ListsMatcher, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.listIds) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_ListsMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition_ListsMatcher } as Condition_ListsMatcher;
        message.listIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.listIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Condition_ListsMatcher {
        const message = { ...baseCondition_ListsMatcher } as Condition_ListsMatcher;
        message.listIds = (object.listIds ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: Condition_ListsMatcher): unknown {
        const obj: any = {};
        if (message.listIds) {
            obj.listIds = message.listIds.map((e) => e);
        } else {
            obj.listIds = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Condition_ListsMatcher>, I>>(
        object: I,
    ): Condition_ListsMatcher {
        const message = { ...baseCondition_ListsMatcher } as Condition_ListsMatcher;
        message.listIds = object.listIds?.map((e) => e) || [];
        return message;
    },
};

const baseCondition_ListsMatchers: object = {};

export const Condition_ListsMatchers: {
    encode(message: Condition_ListsMatchers, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_ListsMatchers;
    fromJSON(object: any): Condition_ListsMatchers;
    toJSON(message: Condition_ListsMatchers): unknown;
    fromPartial<I extends Exact<DeepPartial<Condition_ListsMatchers>, I>>(object: I): Condition_ListsMatchers;
} = {
    encode(message: Condition_ListsMatchers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.strListsMatch !== undefined) {
            Condition_ListsMatcher.encode(message.strListsMatch, writer.uint32(10).fork()).ldelim();
        }
        if (message.strListsNotMatch !== undefined) {
            Condition_ListsMatcher.encode(
                message.strListsNotMatch,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.regExpListsMatch !== undefined) {
            Condition_ListsMatcher.encode(
                message.regExpListsMatch,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.regExpListsNotMatch !== undefined) {
            Condition_ListsMatcher.encode(
                message.regExpListsNotMatch,
                writer.uint32(34).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_ListsMatchers {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition_ListsMatchers } as Condition_ListsMatchers;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.strListsMatch = Condition_ListsMatcher.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.strListsNotMatch = Condition_ListsMatcher.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 3:
                    message.regExpListsMatch = Condition_ListsMatcher.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 4:
                    message.regExpListsNotMatch = Condition_ListsMatcher.decode(
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

    fromJSON(object: any): Condition_ListsMatchers {
        const message = { ...baseCondition_ListsMatchers } as Condition_ListsMatchers;
        message.strListsMatch =
            object.strListsMatch !== undefined && object.strListsMatch !== null
                ? Condition_ListsMatcher.fromJSON(object.strListsMatch)
                : undefined;
        message.strListsNotMatch =
            object.strListsNotMatch !== undefined && object.strListsNotMatch !== null
                ? Condition_ListsMatcher.fromJSON(object.strListsNotMatch)
                : undefined;
        message.regExpListsMatch =
            object.regExpListsMatch !== undefined && object.regExpListsMatch !== null
                ? Condition_ListsMatcher.fromJSON(object.regExpListsMatch)
                : undefined;
        message.regExpListsNotMatch =
            object.regExpListsNotMatch !== undefined && object.regExpListsNotMatch !== null
                ? Condition_ListsMatcher.fromJSON(object.regExpListsNotMatch)
                : undefined;
        return message;
    },

    toJSON(message: Condition_ListsMatchers): unknown {
        const obj: any = {};
        message.strListsMatch !== undefined &&
            (obj.strListsMatch = message.strListsMatch
                ? Condition_ListsMatcher.toJSON(message.strListsMatch)
                : undefined);
        message.strListsNotMatch !== undefined &&
            (obj.strListsNotMatch = message.strListsNotMatch
                ? Condition_ListsMatcher.toJSON(message.strListsNotMatch)
                : undefined);
        message.regExpListsMatch !== undefined &&
            (obj.regExpListsMatch = message.regExpListsMatch
                ? Condition_ListsMatcher.toJSON(message.regExpListsMatch)
                : undefined);
        message.regExpListsNotMatch !== undefined &&
            (obj.regExpListsNotMatch = message.regExpListsNotMatch
                ? Condition_ListsMatcher.toJSON(message.regExpListsNotMatch)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Condition_ListsMatchers>, I>>(
        object: I,
    ): Condition_ListsMatchers {
        const message = { ...baseCondition_ListsMatchers } as Condition_ListsMatchers;
        message.strListsMatch =
            object.strListsMatch !== undefined && object.strListsMatch !== null
                ? Condition_ListsMatcher.fromPartial(object.strListsMatch)
                : undefined;
        message.strListsNotMatch =
            object.strListsNotMatch !== undefined && object.strListsNotMatch !== null
                ? Condition_ListsMatcher.fromPartial(object.strListsNotMatch)
                : undefined;
        message.regExpListsMatch =
            object.regExpListsMatch !== undefined && object.regExpListsMatch !== null
                ? Condition_ListsMatcher.fromPartial(object.regExpListsMatch)
                : undefined;
        message.regExpListsNotMatch =
            object.regExpListsNotMatch !== undefined && object.regExpListsNotMatch !== null
                ? Condition_ListsMatcher.fromPartial(object.regExpListsNotMatch)
                : undefined;
        return message;
    },
};

const baseCondition_HttpMethodMatcher: object = {};

export const Condition_HttpMethodMatcher: {
    encode(message: Condition_HttpMethodMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_HttpMethodMatcher;
    fromJSON(object: any): Condition_HttpMethodMatcher;
    toJSON(message: Condition_HttpMethodMatcher): unknown;
    fromPartial<I extends Exact<DeepPartial<Condition_HttpMethodMatcher>, I>>(object: I): Condition_HttpMethodMatcher;
} = {
    encode(
        message: Condition_HttpMethodMatcher,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.httpMethods) {
            Condition_StringMatcher.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.httpMethodMatcher !== undefined) {
            Condition_StringMatcher.encode(
                message.httpMethodMatcher,
                writer.uint32(18).fork(),
            ).ldelim();
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
                case 2:
                    message.httpMethodMatcher = Condition_StringMatcher.decode(
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

    fromJSON(object: any): Condition_HttpMethodMatcher {
        const message = { ...baseCondition_HttpMethodMatcher } as Condition_HttpMethodMatcher;
        message.httpMethods = (object.httpMethods ?? []).map((e: any) =>
            Condition_StringMatcher.fromJSON(e),
        );
        message.httpMethodMatcher =
            object.httpMethodMatcher !== undefined && object.httpMethodMatcher !== null
                ? Condition_StringMatcher.fromJSON(object.httpMethodMatcher)
                : undefined;
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
        message.httpMethodMatcher !== undefined &&
            (obj.httpMethodMatcher = message.httpMethodMatcher
                ? Condition_StringMatcher.toJSON(message.httpMethodMatcher)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Condition_HttpMethodMatcher>, I>>(
        object: I,
    ): Condition_HttpMethodMatcher {
        const message = { ...baseCondition_HttpMethodMatcher } as Condition_HttpMethodMatcher;
        message.httpMethods =
            object.httpMethods?.map((e) => Condition_StringMatcher.fromPartial(e)) || [];
        message.httpMethodMatcher =
            object.httpMethodMatcher !== undefined && object.httpMethodMatcher !== null
                ? Condition_StringMatcher.fromPartial(object.httpMethodMatcher)
                : undefined;
        return message;
    },
};

const baseCondition_AuthorityMatcher: object = {};

export const Condition_AuthorityMatcher: {
    encode(message: Condition_AuthorityMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_AuthorityMatcher;
    fromJSON(object: any): Condition_AuthorityMatcher;
    toJSON(message: Condition_AuthorityMatcher): unknown;
    fromPartial<I extends Exact<DeepPartial<Condition_AuthorityMatcher>, I>>(object: I): Condition_AuthorityMatcher;
} = {
    encode(
        message: Condition_AuthorityMatcher,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.authorities) {
            Condition_StringMatcher.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.authorityMatcher !== undefined) {
            Condition_StringMatcher.encode(
                message.authorityMatcher,
                writer.uint32(18).fork(),
            ).ldelim();
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
                case 2:
                    message.authorityMatcher = Condition_StringMatcher.decode(
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

    fromJSON(object: any): Condition_AuthorityMatcher {
        const message = { ...baseCondition_AuthorityMatcher } as Condition_AuthorityMatcher;
        message.authorities = (object.authorities ?? []).map((e: any) =>
            Condition_StringMatcher.fromJSON(e),
        );
        message.authorityMatcher =
            object.authorityMatcher !== undefined && object.authorityMatcher !== null
                ? Condition_StringMatcher.fromJSON(object.authorityMatcher)
                : undefined;
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
        message.authorityMatcher !== undefined &&
            (obj.authorityMatcher = message.authorityMatcher
                ? Condition_StringMatcher.toJSON(message.authorityMatcher)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Condition_AuthorityMatcher>, I>>(
        object: I,
    ): Condition_AuthorityMatcher {
        const message = { ...baseCondition_AuthorityMatcher } as Condition_AuthorityMatcher;
        message.authorities =
            object.authorities?.map((e) => Condition_StringMatcher.fromPartial(e)) || [];
        message.authorityMatcher =
            object.authorityMatcher !== undefined && object.authorityMatcher !== null
                ? Condition_StringMatcher.fromPartial(object.authorityMatcher)
                : undefined;
        return message;
    },
};

const baseCondition_RequestUriMatcher: object = {};

export const Condition_RequestUriMatcher: {
    encode(message: Condition_RequestUriMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_RequestUriMatcher;
    fromJSON(object: any): Condition_RequestUriMatcher;
    toJSON(message: Condition_RequestUriMatcher): unknown;
    fromPartial<I extends Exact<DeepPartial<Condition_RequestUriMatcher>, I>>(object: I): Condition_RequestUriMatcher;
} = {
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

export const Condition_QueryMatcher: {
    encode(message: Condition_QueryMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_QueryMatcher;
    fromJSON(object: any): Condition_QueryMatcher;
    toJSON(message: Condition_QueryMatcher): unknown;
    fromPartial<I extends Exact<DeepPartial<Condition_QueryMatcher>, I>>(object: I): Condition_QueryMatcher;
} = {
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

export const Condition_HeaderMatcher: {
    encode(message: Condition_HeaderMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_HeaderMatcher;
    fromJSON(object: any): Condition_HeaderMatcher;
    toJSON(message: Condition_HeaderMatcher): unknown;
    fromPartial<I extends Exact<DeepPartial<Condition_HeaderMatcher>, I>>(object: I): Condition_HeaderMatcher;
} = {
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

export const Condition_IpMatcher: {
    encode(message: Condition_IpMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_IpMatcher;
    fromJSON(object: any): Condition_IpMatcher;
    toJSON(message: Condition_IpMatcher): unknown;
    fromPartial<I extends Exact<DeepPartial<Condition_IpMatcher>, I>>(object: I): Condition_IpMatcher;
} = {
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
        if (message.ipListsMatch !== undefined) {
            Condition_ListsMatcher.encode(message.ipListsMatch, writer.uint32(42).fork()).ldelim();
        }
        if (message.ipListsNotMatch !== undefined) {
            Condition_ListsMatcher.encode(
                message.ipListsNotMatch,
                writer.uint32(50).fork(),
            ).ldelim();
        }
        if (message.asnRangesMatch !== undefined) {
            Condition_AsnRangesMatcher.encode(
                message.asnRangesMatch,
                writer.uint32(58).fork(),
            ).ldelim();
        }
        if (message.asnRangesNotMatch !== undefined) {
            Condition_AsnRangesMatcher.encode(
                message.asnRangesNotMatch,
                writer.uint32(66).fork(),
            ).ldelim();
        }
        if (message.asnListsMatch !== undefined) {
            Condition_ListsMatcher.encode(message.asnListsMatch, writer.uint32(74).fork()).ldelim();
        }
        if (message.asnListsNotMatch !== undefined) {
            Condition_ListsMatcher.encode(
                message.asnListsNotMatch,
                writer.uint32(82).fork(),
            ).ldelim();
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
                case 5:
                    message.ipListsMatch = Condition_ListsMatcher.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.ipListsNotMatch = Condition_ListsMatcher.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 7:
                    message.asnRangesMatch = Condition_AsnRangesMatcher.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 8:
                    message.asnRangesNotMatch = Condition_AsnRangesMatcher.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 9:
                    message.asnListsMatch = Condition_ListsMatcher.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.asnListsNotMatch = Condition_ListsMatcher.decode(
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
        message.ipListsMatch =
            object.ipListsMatch !== undefined && object.ipListsMatch !== null
                ? Condition_ListsMatcher.fromJSON(object.ipListsMatch)
                : undefined;
        message.ipListsNotMatch =
            object.ipListsNotMatch !== undefined && object.ipListsNotMatch !== null
                ? Condition_ListsMatcher.fromJSON(object.ipListsNotMatch)
                : undefined;
        message.asnRangesMatch =
            object.asnRangesMatch !== undefined && object.asnRangesMatch !== null
                ? Condition_AsnRangesMatcher.fromJSON(object.asnRangesMatch)
                : undefined;
        message.asnRangesNotMatch =
            object.asnRangesNotMatch !== undefined && object.asnRangesNotMatch !== null
                ? Condition_AsnRangesMatcher.fromJSON(object.asnRangesNotMatch)
                : undefined;
        message.asnListsMatch =
            object.asnListsMatch !== undefined && object.asnListsMatch !== null
                ? Condition_ListsMatcher.fromJSON(object.asnListsMatch)
                : undefined;
        message.asnListsNotMatch =
            object.asnListsNotMatch !== undefined && object.asnListsNotMatch !== null
                ? Condition_ListsMatcher.fromJSON(object.asnListsNotMatch)
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
        message.ipListsMatch !== undefined &&
            (obj.ipListsMatch = message.ipListsMatch
                ? Condition_ListsMatcher.toJSON(message.ipListsMatch)
                : undefined);
        message.ipListsNotMatch !== undefined &&
            (obj.ipListsNotMatch = message.ipListsNotMatch
                ? Condition_ListsMatcher.toJSON(message.ipListsNotMatch)
                : undefined);
        message.asnRangesMatch !== undefined &&
            (obj.asnRangesMatch = message.asnRangesMatch
                ? Condition_AsnRangesMatcher.toJSON(message.asnRangesMatch)
                : undefined);
        message.asnRangesNotMatch !== undefined &&
            (obj.asnRangesNotMatch = message.asnRangesNotMatch
                ? Condition_AsnRangesMatcher.toJSON(message.asnRangesNotMatch)
                : undefined);
        message.asnListsMatch !== undefined &&
            (obj.asnListsMatch = message.asnListsMatch
                ? Condition_ListsMatcher.toJSON(message.asnListsMatch)
                : undefined);
        message.asnListsNotMatch !== undefined &&
            (obj.asnListsNotMatch = message.asnListsNotMatch
                ? Condition_ListsMatcher.toJSON(message.asnListsNotMatch)
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
        message.ipListsMatch =
            object.ipListsMatch !== undefined && object.ipListsMatch !== null
                ? Condition_ListsMatcher.fromPartial(object.ipListsMatch)
                : undefined;
        message.ipListsNotMatch =
            object.ipListsNotMatch !== undefined && object.ipListsNotMatch !== null
                ? Condition_ListsMatcher.fromPartial(object.ipListsNotMatch)
                : undefined;
        message.asnRangesMatch =
            object.asnRangesMatch !== undefined && object.asnRangesMatch !== null
                ? Condition_AsnRangesMatcher.fromPartial(object.asnRangesMatch)
                : undefined;
        message.asnRangesNotMatch =
            object.asnRangesNotMatch !== undefined && object.asnRangesNotMatch !== null
                ? Condition_AsnRangesMatcher.fromPartial(object.asnRangesNotMatch)
                : undefined;
        message.asnListsMatch =
            object.asnListsMatch !== undefined && object.asnListsMatch !== null
                ? Condition_ListsMatcher.fromPartial(object.asnListsMatch)
                : undefined;
        message.asnListsNotMatch =
            object.asnListsNotMatch !== undefined && object.asnListsNotMatch !== null
                ? Condition_ListsMatcher.fromPartial(object.asnListsNotMatch)
                : undefined;
        return message;
    },
};

const baseCondition_BotCategoryMatcher: object = {};

export const Condition_BotCategoryMatcher: {
    encode(message: Condition_BotCategoryMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_BotCategoryMatcher;
    fromJSON(object: any): Condition_BotCategoryMatcher;
    toJSON(message: Condition_BotCategoryMatcher): unknown;
    fromPartial<I extends Exact<DeepPartial<Condition_BotCategoryMatcher>, I>>(object: I): Condition_BotCategoryMatcher;
} = {
    encode(
        message: Condition_BotCategoryMatcher,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.botCategoryListsMatch !== undefined) {
            Condition_ListsMatcher.encode(
                message.botCategoryListsMatch,
                writer.uint32(42).fork(),
            ).ldelim();
        }
        if (message.botCategoryListsNotMatch !== undefined) {
            Condition_ListsMatcher.encode(
                message.botCategoryListsNotMatch,
                writer.uint32(50).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_BotCategoryMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition_BotCategoryMatcher } as Condition_BotCategoryMatcher;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 5:
                    message.botCategoryListsMatch = Condition_ListsMatcher.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 6:
                    message.botCategoryListsNotMatch = Condition_ListsMatcher.decode(
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

    fromJSON(object: any): Condition_BotCategoryMatcher {
        const message = { ...baseCondition_BotCategoryMatcher } as Condition_BotCategoryMatcher;
        message.botCategoryListsMatch =
            object.botCategoryListsMatch !== undefined && object.botCategoryListsMatch !== null
                ? Condition_ListsMatcher.fromJSON(object.botCategoryListsMatch)
                : undefined;
        message.botCategoryListsNotMatch =
            object.botCategoryListsNotMatch !== undefined &&
            object.botCategoryListsNotMatch !== null
                ? Condition_ListsMatcher.fromJSON(object.botCategoryListsNotMatch)
                : undefined;
        return message;
    },

    toJSON(message: Condition_BotCategoryMatcher): unknown {
        const obj: any = {};
        message.botCategoryListsMatch !== undefined &&
            (obj.botCategoryListsMatch = message.botCategoryListsMatch
                ? Condition_ListsMatcher.toJSON(message.botCategoryListsMatch)
                : undefined);
        message.botCategoryListsNotMatch !== undefined &&
            (obj.botCategoryListsNotMatch = message.botCategoryListsNotMatch
                ? Condition_ListsMatcher.toJSON(message.botCategoryListsNotMatch)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Condition_BotCategoryMatcher>, I>>(
        object: I,
    ): Condition_BotCategoryMatcher {
        const message = { ...baseCondition_BotCategoryMatcher } as Condition_BotCategoryMatcher;
        message.botCategoryListsMatch =
            object.botCategoryListsMatch !== undefined && object.botCategoryListsMatch !== null
                ? Condition_ListsMatcher.fromPartial(object.botCategoryListsMatch)
                : undefined;
        message.botCategoryListsNotMatch =
            object.botCategoryListsNotMatch !== undefined &&
            object.botCategoryListsNotMatch !== null
                ? Condition_ListsMatcher.fromPartial(object.botCategoryListsNotMatch)
                : undefined;
        return message;
    },
};

const baseCondition_BotNameMatcher: object = {};

export const Condition_BotNameMatcher: {
    encode(message: Condition_BotNameMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_BotNameMatcher;
    fromJSON(object: any): Condition_BotNameMatcher;
    toJSON(message: Condition_BotNameMatcher): unknown;
    fromPartial<I extends Exact<DeepPartial<Condition_BotNameMatcher>, I>>(object: I): Condition_BotNameMatcher;
} = {
    encode(
        message: Condition_BotNameMatcher,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.botNameListsMatch !== undefined) {
            Condition_ListsMatcher.encode(
                message.botNameListsMatch,
                writer.uint32(42).fork(),
            ).ldelim();
        }
        if (message.botNameListsNotMatch !== undefined) {
            Condition_ListsMatcher.encode(
                message.botNameListsNotMatch,
                writer.uint32(50).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_BotNameMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition_BotNameMatcher } as Condition_BotNameMatcher;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 5:
                    message.botNameListsMatch = Condition_ListsMatcher.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 6:
                    message.botNameListsNotMatch = Condition_ListsMatcher.decode(
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

    fromJSON(object: any): Condition_BotNameMatcher {
        const message = { ...baseCondition_BotNameMatcher } as Condition_BotNameMatcher;
        message.botNameListsMatch =
            object.botNameListsMatch !== undefined && object.botNameListsMatch !== null
                ? Condition_ListsMatcher.fromJSON(object.botNameListsMatch)
                : undefined;
        message.botNameListsNotMatch =
            object.botNameListsNotMatch !== undefined && object.botNameListsNotMatch !== null
                ? Condition_ListsMatcher.fromJSON(object.botNameListsNotMatch)
                : undefined;
        return message;
    },

    toJSON(message: Condition_BotNameMatcher): unknown {
        const obj: any = {};
        message.botNameListsMatch !== undefined &&
            (obj.botNameListsMatch = message.botNameListsMatch
                ? Condition_ListsMatcher.toJSON(message.botNameListsMatch)
                : undefined);
        message.botNameListsNotMatch !== undefined &&
            (obj.botNameListsNotMatch = message.botNameListsNotMatch
                ? Condition_ListsMatcher.toJSON(message.botNameListsNotMatch)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Condition_BotNameMatcher>, I>>(
        object: I,
    ): Condition_BotNameMatcher {
        const message = { ...baseCondition_BotNameMatcher } as Condition_BotNameMatcher;
        message.botNameListsMatch =
            object.botNameListsMatch !== undefined && object.botNameListsMatch !== null
                ? Condition_ListsMatcher.fromPartial(object.botNameListsMatch)
                : undefined;
        message.botNameListsNotMatch =
            object.botNameListsNotMatch !== undefined && object.botNameListsNotMatch !== null
                ? Condition_ListsMatcher.fromPartial(object.botNameListsNotMatch)
                : undefined;
        return message;
    },
};

const baseCondition_BoolMatcher: object = { match: false };

export const Condition_BoolMatcher: {
    encode(message: Condition_BoolMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_BoolMatcher;
    fromJSON(object: any): Condition_BoolMatcher;
    toJSON(message: Condition_BoolMatcher): unknown;
    fromPartial<I extends Exact<DeepPartial<Condition_BoolMatcher>, I>>(object: I): Condition_BoolMatcher;
} = {
    encode(message: Condition_BoolMatcher, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.match === true) {
            writer.uint32(8).bool(message.match);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_BoolMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition_BoolMatcher } as Condition_BoolMatcher;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.match = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Condition_BoolMatcher {
        const message = { ...baseCondition_BoolMatcher } as Condition_BoolMatcher;
        message.match =
            object.match !== undefined && object.match !== null ? Boolean(object.match) : false;
        return message;
    },

    toJSON(message: Condition_BoolMatcher): unknown {
        const obj: any = {};
        message.match !== undefined && (obj.match = message.match);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Condition_BoolMatcher>, I>>(
        object: I,
    ): Condition_BoolMatcher {
        const message = { ...baseCondition_BoolMatcher } as Condition_BoolMatcher;
        message.match = object.match ?? false;
        return message;
    },
};

const baseCondition_IntLEMatcher: object = { value: 0 };

export const Condition_IntLEMatcher: {
    encode(message: Condition_IntLEMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_IntLEMatcher;
    fromJSON(object: any): Condition_IntLEMatcher;
    toJSON(message: Condition_IntLEMatcher): unknown;
    fromPartial<I extends Exact<DeepPartial<Condition_IntLEMatcher>, I>>(object: I): Condition_IntLEMatcher;
} = {
    encode(message: Condition_IntLEMatcher, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.value !== 0) {
            writer.uint32(8).int64(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_IntLEMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition_IntLEMatcher } as Condition_IntLEMatcher;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Condition_IntLEMatcher {
        const message = { ...baseCondition_IntLEMatcher } as Condition_IntLEMatcher;
        message.value =
            object.value !== undefined && object.value !== null ? Number(object.value) : 0;
        return message;
    },

    toJSON(message: Condition_IntLEMatcher): unknown {
        const obj: any = {};
        message.value !== undefined && (obj.value = Math.round(message.value));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Condition_IntLEMatcher>, I>>(
        object: I,
    ): Condition_IntLEMatcher {
        const message = { ...baseCondition_IntLEMatcher } as Condition_IntLEMatcher;
        message.value = object.value ?? 0;
        return message;
    },
};

const baseCondition_IntGEMatcher: object = { value: 0 };

export const Condition_IntGEMatcher: {
    encode(message: Condition_IntGEMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_IntGEMatcher;
    fromJSON(object: any): Condition_IntGEMatcher;
    toJSON(message: Condition_IntGEMatcher): unknown;
    fromPartial<I extends Exact<DeepPartial<Condition_IntGEMatcher>, I>>(object: I): Condition_IntGEMatcher;
} = {
    encode(message: Condition_IntGEMatcher, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.value !== 0) {
            writer.uint32(8).int64(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_IntGEMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition_IntGEMatcher } as Condition_IntGEMatcher;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Condition_IntGEMatcher {
        const message = { ...baseCondition_IntGEMatcher } as Condition_IntGEMatcher;
        message.value =
            object.value !== undefined && object.value !== null ? Number(object.value) : 0;
        return message;
    },

    toJSON(message: Condition_IntGEMatcher): unknown {
        const obj: any = {};
        message.value !== undefined && (obj.value = Math.round(message.value));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Condition_IntGEMatcher>, I>>(
        object: I,
    ): Condition_IntGEMatcher {
        const message = { ...baseCondition_IntGEMatcher } as Condition_IntGEMatcher;
        message.value = object.value ?? 0;
        return message;
    },
};

const baseCondition_IntEQMatcher: object = { value: 0 };

export const Condition_IntEQMatcher: {
    encode(message: Condition_IntEQMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_IntEQMatcher;
    fromJSON(object: any): Condition_IntEQMatcher;
    toJSON(message: Condition_IntEQMatcher): unknown;
    fromPartial<I extends Exact<DeepPartial<Condition_IntEQMatcher>, I>>(object: I): Condition_IntEQMatcher;
} = {
    encode(message: Condition_IntEQMatcher, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.value !== 0) {
            writer.uint32(8).int64(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_IntEQMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition_IntEQMatcher } as Condition_IntEQMatcher;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Condition_IntEQMatcher {
        const message = { ...baseCondition_IntEQMatcher } as Condition_IntEQMatcher;
        message.value =
            object.value !== undefined && object.value !== null ? Number(object.value) : 0;
        return message;
    },

    toJSON(message: Condition_IntEQMatcher): unknown {
        const obj: any = {};
        message.value !== undefined && (obj.value = Math.round(message.value));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Condition_IntEQMatcher>, I>>(
        object: I,
    ): Condition_IntEQMatcher {
        const message = { ...baseCondition_IntEQMatcher } as Condition_IntEQMatcher;
        message.value = object.value ?? 0;
        return message;
    },
};

const baseCondition_IntNEMatcher: object = { value: 0 };

export const Condition_IntNEMatcher: {
    encode(message: Condition_IntNEMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_IntNEMatcher;
    fromJSON(object: any): Condition_IntNEMatcher;
    toJSON(message: Condition_IntNEMatcher): unknown;
    fromPartial<I extends Exact<DeepPartial<Condition_IntNEMatcher>, I>>(object: I): Condition_IntNEMatcher;
} = {
    encode(message: Condition_IntNEMatcher, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.value !== 0) {
            writer.uint32(8).int64(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_IntNEMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition_IntNEMatcher } as Condition_IntNEMatcher;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Condition_IntNEMatcher {
        const message = { ...baseCondition_IntNEMatcher } as Condition_IntNEMatcher;
        message.value =
            object.value !== undefined && object.value !== null ? Number(object.value) : 0;
        return message;
    },

    toJSON(message: Condition_IntNEMatcher): unknown {
        const obj: any = {};
        message.value !== undefined && (obj.value = Math.round(message.value));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Condition_IntNEMatcher>, I>>(
        object: I,
    ): Condition_IntNEMatcher {
        const message = { ...baseCondition_IntNEMatcher } as Condition_IntNEMatcher;
        message.value = object.value ?? 0;
        return message;
    },
};

const baseCondition_IntMatcher: object = {};

export const Condition_IntMatcher: {
    encode(message: Condition_IntMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_IntMatcher;
    fromJSON(object: any): Condition_IntMatcher;
    toJSON(message: Condition_IntMatcher): unknown;
    fromPartial<I extends Exact<DeepPartial<Condition_IntMatcher>, I>>(object: I): Condition_IntMatcher;
} = {
    encode(message: Condition_IntMatcher, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.leMatch !== undefined) {
            Condition_IntLEMatcher.encode(message.leMatch, writer.uint32(10).fork()).ldelim();
        }
        if (message.geMatch !== undefined) {
            Condition_IntGEMatcher.encode(message.geMatch, writer.uint32(18).fork()).ldelim();
        }
        if (message.eqMatch !== undefined) {
            Condition_IntEQMatcher.encode(message.eqMatch, writer.uint32(26).fork()).ldelim();
        }
        if (message.neMatch !== undefined) {
            Condition_IntNEMatcher.encode(message.neMatch, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_IntMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition_IntMatcher } as Condition_IntMatcher;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.leMatch = Condition_IntLEMatcher.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.geMatch = Condition_IntGEMatcher.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.eqMatch = Condition_IntEQMatcher.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.neMatch = Condition_IntNEMatcher.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Condition_IntMatcher {
        const message = { ...baseCondition_IntMatcher } as Condition_IntMatcher;
        message.leMatch =
            object.leMatch !== undefined && object.leMatch !== null
                ? Condition_IntLEMatcher.fromJSON(object.leMatch)
                : undefined;
        message.geMatch =
            object.geMatch !== undefined && object.geMatch !== null
                ? Condition_IntGEMatcher.fromJSON(object.geMatch)
                : undefined;
        message.eqMatch =
            object.eqMatch !== undefined && object.eqMatch !== null
                ? Condition_IntEQMatcher.fromJSON(object.eqMatch)
                : undefined;
        message.neMatch =
            object.neMatch !== undefined && object.neMatch !== null
                ? Condition_IntNEMatcher.fromJSON(object.neMatch)
                : undefined;
        return message;
    },

    toJSON(message: Condition_IntMatcher): unknown {
        const obj: any = {};
        message.leMatch !== undefined &&
            (obj.leMatch = message.leMatch
                ? Condition_IntLEMatcher.toJSON(message.leMatch)
                : undefined);
        message.geMatch !== undefined &&
            (obj.geMatch = message.geMatch
                ? Condition_IntGEMatcher.toJSON(message.geMatch)
                : undefined);
        message.eqMatch !== undefined &&
            (obj.eqMatch = message.eqMatch
                ? Condition_IntEQMatcher.toJSON(message.eqMatch)
                : undefined);
        message.neMatch !== undefined &&
            (obj.neMatch = message.neMatch
                ? Condition_IntNEMatcher.toJSON(message.neMatch)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Condition_IntMatcher>, I>>(
        object: I,
    ): Condition_IntMatcher {
        const message = { ...baseCondition_IntMatcher } as Condition_IntMatcher;
        message.leMatch =
            object.leMatch !== undefined && object.leMatch !== null
                ? Condition_IntLEMatcher.fromPartial(object.leMatch)
                : undefined;
        message.geMatch =
            object.geMatch !== undefined && object.geMatch !== null
                ? Condition_IntGEMatcher.fromPartial(object.geMatch)
                : undefined;
        message.eqMatch =
            object.eqMatch !== undefined && object.eqMatch !== null
                ? Condition_IntEQMatcher.fromPartial(object.eqMatch)
                : undefined;
        message.neMatch =
            object.neMatch !== undefined && object.neMatch !== null
                ? Condition_IntNEMatcher.fromPartial(object.neMatch)
                : undefined;
        return message;
    },
};

const baseCondition_BotScoreMatcher: object = {};

export const Condition_BotScoreMatcher: {
    encode(message: Condition_BotScoreMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_BotScoreMatcher;
    fromJSON(object: any): Condition_BotScoreMatcher;
    toJSON(message: Condition_BotScoreMatcher): unknown;
    fromPartial<I extends Exact<DeepPartial<Condition_BotScoreMatcher>, I>>(object: I): Condition_BotScoreMatcher;
} = {
    encode(
        message: Condition_BotScoreMatcher,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.value) {
            Condition_IntMatcher.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_BotScoreMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition_BotScoreMatcher } as Condition_BotScoreMatcher;
        message.value = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value.push(Condition_IntMatcher.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Condition_BotScoreMatcher {
        const message = { ...baseCondition_BotScoreMatcher } as Condition_BotScoreMatcher;
        message.value = (object.value ?? []).map((e: any) => Condition_IntMatcher.fromJSON(e));
        return message;
    },

    toJSON(message: Condition_BotScoreMatcher): unknown {
        const obj: any = {};
        if (message.value) {
            obj.value = message.value.map((e) => (e ? Condition_IntMatcher.toJSON(e) : undefined));
        } else {
            obj.value = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Condition_BotScoreMatcher>, I>>(
        object: I,
    ): Condition_BotScoreMatcher {
        const message = { ...baseCondition_BotScoreMatcher } as Condition_BotScoreMatcher;
        message.value = object.value?.map((e) => Condition_IntMatcher.fromPartial(e)) || [];
        return message;
    },
};

const baseCondition_VerifiedBotMatcher: object = {};

export const Condition_VerifiedBotMatcher: {
    encode(message: Condition_VerifiedBotMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_VerifiedBotMatcher;
    fromJSON(object: any): Condition_VerifiedBotMatcher;
    toJSON(message: Condition_VerifiedBotMatcher): unknown;
    fromPartial<I extends Exact<DeepPartial<Condition_VerifiedBotMatcher>, I>>(object: I): Condition_VerifiedBotMatcher;
} = {
    encode(
        message: Condition_VerifiedBotMatcher,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.verified !== undefined) {
            Condition_BoolMatcher.encode(message.verified, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_VerifiedBotMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition_VerifiedBotMatcher } as Condition_VerifiedBotMatcher;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.verified = Condition_BoolMatcher.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Condition_VerifiedBotMatcher {
        const message = { ...baseCondition_VerifiedBotMatcher } as Condition_VerifiedBotMatcher;
        message.verified =
            object.verified !== undefined && object.verified !== null
                ? Condition_BoolMatcher.fromJSON(object.verified)
                : undefined;
        return message;
    },

    toJSON(message: Condition_VerifiedBotMatcher): unknown {
        const obj: any = {};
        message.verified !== undefined &&
            (obj.verified = message.verified
                ? Condition_BoolMatcher.toJSON(message.verified)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Condition_VerifiedBotMatcher>, I>>(
        object: I,
    ): Condition_VerifiedBotMatcher {
        const message = { ...baseCondition_VerifiedBotMatcher } as Condition_VerifiedBotMatcher;
        message.verified =
            object.verified !== undefined && object.verified !== null
                ? Condition_BoolMatcher.fromPartial(object.verified)
                : undefined;
        return message;
    },
};

const baseCondition_FingerPrintMatcher: object = {};

export const Condition_FingerPrintMatcher: {
    encode(message: Condition_FingerPrintMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_FingerPrintMatcher;
    fromJSON(object: any): Condition_FingerPrintMatcher;
    toJSON(message: Condition_FingerPrintMatcher): unknown;
    fromPartial<I extends Exact<DeepPartial<Condition_FingerPrintMatcher>, I>>(object: I): Condition_FingerPrintMatcher;
} = {
    encode(
        message: Condition_FingerPrintMatcher,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.ja3Ranges) {
            Condition_StringMatcher.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.ja4Ranges) {
            Condition_StringMatcher.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        if (message.ja3Matcher !== undefined) {
            Condition_StringMatcher.encode(message.ja3Matcher, writer.uint32(26).fork()).ldelim();
        }
        if (message.ja4Matcher !== undefined) {
            Condition_StringMatcher.encode(message.ja4Matcher, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_FingerPrintMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition_FingerPrintMatcher } as Condition_FingerPrintMatcher;
        message.ja3Ranges = [];
        message.ja4Ranges = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ja3Ranges.push(Condition_StringMatcher.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.ja4Ranges.push(Condition_StringMatcher.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.ja3Matcher = Condition_StringMatcher.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.ja4Matcher = Condition_StringMatcher.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Condition_FingerPrintMatcher {
        const message = { ...baseCondition_FingerPrintMatcher } as Condition_FingerPrintMatcher;
        message.ja3Ranges = (object.ja3Ranges ?? []).map((e: any) =>
            Condition_StringMatcher.fromJSON(e),
        );
        message.ja4Ranges = (object.ja4Ranges ?? []).map((e: any) =>
            Condition_StringMatcher.fromJSON(e),
        );
        message.ja3Matcher =
            object.ja3Matcher !== undefined && object.ja3Matcher !== null
                ? Condition_StringMatcher.fromJSON(object.ja3Matcher)
                : undefined;
        message.ja4Matcher =
            object.ja4Matcher !== undefined && object.ja4Matcher !== null
                ? Condition_StringMatcher.fromJSON(object.ja4Matcher)
                : undefined;
        return message;
    },

    toJSON(message: Condition_FingerPrintMatcher): unknown {
        const obj: any = {};
        if (message.ja3Ranges) {
            obj.ja3Ranges = message.ja3Ranges.map((e) =>
                e ? Condition_StringMatcher.toJSON(e) : undefined,
            );
        } else {
            obj.ja3Ranges = [];
        }
        if (message.ja4Ranges) {
            obj.ja4Ranges = message.ja4Ranges.map((e) =>
                e ? Condition_StringMatcher.toJSON(e) : undefined,
            );
        } else {
            obj.ja4Ranges = [];
        }
        message.ja3Matcher !== undefined &&
            (obj.ja3Matcher = message.ja3Matcher
                ? Condition_StringMatcher.toJSON(message.ja3Matcher)
                : undefined);
        message.ja4Matcher !== undefined &&
            (obj.ja4Matcher = message.ja4Matcher
                ? Condition_StringMatcher.toJSON(message.ja4Matcher)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Condition_FingerPrintMatcher>, I>>(
        object: I,
    ): Condition_FingerPrintMatcher {
        const message = { ...baseCondition_FingerPrintMatcher } as Condition_FingerPrintMatcher;
        message.ja3Ranges =
            object.ja3Ranges?.map((e) => Condition_StringMatcher.fromPartial(e)) || [];
        message.ja4Ranges =
            object.ja4Ranges?.map((e) => Condition_StringMatcher.fromPartial(e)) || [];
        message.ja3Matcher =
            object.ja3Matcher !== undefined && object.ja3Matcher !== null
                ? Condition_StringMatcher.fromPartial(object.ja3Matcher)
                : undefined;
        message.ja4Matcher =
            object.ja4Matcher !== undefined && object.ja4Matcher !== null
                ? Condition_StringMatcher.fromPartial(object.ja4Matcher)
                : undefined;
        return message;
    },
};

const baseCondition_IpRangesMatcher: object = { ipRanges: '' };

export const Condition_IpRangesMatcher: {
    encode(message: Condition_IpRangesMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_IpRangesMatcher;
    fromJSON(object: any): Condition_IpRangesMatcher;
    toJSON(message: Condition_IpRangesMatcher): unknown;
    fromPartial<I extends Exact<DeepPartial<Condition_IpRangesMatcher>, I>>(object: I): Condition_IpRangesMatcher;
} = {
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

export const Condition_GeoIpMatcher: {
    encode(message: Condition_GeoIpMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_GeoIpMatcher;
    fromJSON(object: any): Condition_GeoIpMatcher;
    toJSON(message: Condition_GeoIpMatcher): unknown;
    fromPartial<I extends Exact<DeepPartial<Condition_GeoIpMatcher>, I>>(object: I): Condition_GeoIpMatcher;
} = {
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

const baseCondition_AsnRangesMatcher: object = { asnRanges: 0 };

export const Condition_AsnRangesMatcher: {
    encode(message: Condition_AsnRangesMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_AsnRangesMatcher;
    fromJSON(object: any): Condition_AsnRangesMatcher;
    toJSON(message: Condition_AsnRangesMatcher): unknown;
    fromPartial<I extends Exact<DeepPartial<Condition_AsnRangesMatcher>, I>>(object: I): Condition_AsnRangesMatcher;
} = {
    encode(
        message: Condition_AsnRangesMatcher,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        writer.uint32(10).fork();
        for (const v of message.asnRanges) {
            writer.int64(v);
        }
        writer.ldelim();
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_AsnRangesMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition_AsnRangesMatcher } as Condition_AsnRangesMatcher;
        message.asnRanges = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.asnRanges.push(longToNumber(reader.int64() as Long));
                        }
                    } else {
                        message.asnRanges.push(longToNumber(reader.int64() as Long));
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Condition_AsnRangesMatcher {
        const message = { ...baseCondition_AsnRangesMatcher } as Condition_AsnRangesMatcher;
        message.asnRanges = (object.asnRanges ?? []).map((e: any) => Number(e));
        return message;
    },

    toJSON(message: Condition_AsnRangesMatcher): unknown {
        const obj: any = {};
        if (message.asnRanges) {
            obj.asnRanges = message.asnRanges.map((e) => Math.round(e));
        } else {
            obj.asnRanges = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Condition_AsnRangesMatcher>, I>>(
        object: I,
    ): Condition_AsnRangesMatcher {
        const message = { ...baseCondition_AsnRangesMatcher } as Condition_AsnRangesMatcher;
        message.asnRanges = object.asnRanges?.map((e) => e) || [];
        return message;
    },
};

const baseCondition_CookieMatcher: object = { name: '' };

export const Condition_CookieMatcher: {
    encode(message: Condition_CookieMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_CookieMatcher;
    fromJSON(object: any): Condition_CookieMatcher;
    toJSON(message: Condition_CookieMatcher): unknown;
    fromPartial<I extends Exact<DeepPartial<Condition_CookieMatcher>, I>>(object: I): Condition_CookieMatcher;
} = {
    encode(message: Condition_CookieMatcher, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.value !== undefined) {
            Condition_StringMatcher.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_CookieMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition_CookieMatcher } as Condition_CookieMatcher;
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

    fromJSON(object: any): Condition_CookieMatcher {
        const message = { ...baseCondition_CookieMatcher } as Condition_CookieMatcher;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.value =
            object.value !== undefined && object.value !== null
                ? Condition_StringMatcher.fromJSON(object.value)
                : undefined;
        return message;
    },

    toJSON(message: Condition_CookieMatcher): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.value !== undefined &&
            (obj.value = message.value ? Condition_StringMatcher.toJSON(message.value) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Condition_CookieMatcher>, I>>(
        object: I,
    ): Condition_CookieMatcher {
        const message = { ...baseCondition_CookieMatcher } as Condition_CookieMatcher;
        message.name = object.name ?? '';
        message.value =
            object.value !== undefined && object.value !== null
                ? Condition_StringMatcher.fromPartial(object.value)
                : undefined;
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
