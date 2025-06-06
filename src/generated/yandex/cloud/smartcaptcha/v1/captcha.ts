/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.smartcaptcha.v1';

/** Captcha's complexity. */
export enum CaptchaComplexity {
    CAPTCHA_COMPLEXITY_UNSPECIFIED = 0,
    /** EASY - High chance to pass pre-check and easy advanced challenge. */
    EASY = 1,
    /** MEDIUM - Medium chance to pass pre-check and normal advanced challenge. */
    MEDIUM = 2,
    /** HARD - Little chance to pass pre-check and hard advanced challenge. */
    HARD = 3,
    /** FORCE_HARD - Impossible to pass pre-check and hard advanced challenge. */
    FORCE_HARD = 4,
    UNRECOGNIZED = -1,
}

export function captchaComplexityFromJSON(object: any): CaptchaComplexity {
    switch (object) {
        case 0:
        case 'CAPTCHA_COMPLEXITY_UNSPECIFIED':
            return CaptchaComplexity.CAPTCHA_COMPLEXITY_UNSPECIFIED;
        case 1:
        case 'EASY':
            return CaptchaComplexity.EASY;
        case 2:
        case 'MEDIUM':
            return CaptchaComplexity.MEDIUM;
        case 3:
        case 'HARD':
            return CaptchaComplexity.HARD;
        case 4:
        case 'FORCE_HARD':
            return CaptchaComplexity.FORCE_HARD;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return CaptchaComplexity.UNRECOGNIZED;
    }
}

export function captchaComplexityToJSON(object: CaptchaComplexity): string {
    switch (object) {
        case CaptchaComplexity.CAPTCHA_COMPLEXITY_UNSPECIFIED:
            return 'CAPTCHA_COMPLEXITY_UNSPECIFIED';
        case CaptchaComplexity.EASY:
            return 'EASY';
        case CaptchaComplexity.MEDIUM:
            return 'MEDIUM';
        case CaptchaComplexity.HARD:
            return 'HARD';
        case CaptchaComplexity.FORCE_HARD:
            return 'FORCE_HARD';
        default:
            return 'UNKNOWN';
    }
}

/** Captcha's basic check type, see [Task types / Main task](/docs/smartcaptcha/concepts/tasks#main-task). */
export enum CaptchaPreCheckType {
    CAPTCHA_PRE_CHECK_TYPE_UNSPECIFIED = 0,
    /** CHECKBOX - User must click the "I am not a robot" button. */
    CHECKBOX = 1,
    /** SLIDER - User must move the slider from left to right. */
    SLIDER = 2,
    UNRECOGNIZED = -1,
}

export function captchaPreCheckTypeFromJSON(object: any): CaptchaPreCheckType {
    switch (object) {
        case 0:
        case 'CAPTCHA_PRE_CHECK_TYPE_UNSPECIFIED':
            return CaptchaPreCheckType.CAPTCHA_PRE_CHECK_TYPE_UNSPECIFIED;
        case 1:
        case 'CHECKBOX':
            return CaptchaPreCheckType.CHECKBOX;
        case 2:
        case 'SLIDER':
            return CaptchaPreCheckType.SLIDER;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return CaptchaPreCheckType.UNRECOGNIZED;
    }
}

export function captchaPreCheckTypeToJSON(object: CaptchaPreCheckType): string {
    switch (object) {
        case CaptchaPreCheckType.CAPTCHA_PRE_CHECK_TYPE_UNSPECIFIED:
            return 'CAPTCHA_PRE_CHECK_TYPE_UNSPECIFIED';
        case CaptchaPreCheckType.CHECKBOX:
            return 'CHECKBOX';
        case CaptchaPreCheckType.SLIDER:
            return 'SLIDER';
        default:
            return 'UNKNOWN';
    }
}

/** Additional task, see [Task types / Additional task](/docs/smartcaptcha/concepts/tasks#additional-task). */
export enum CaptchaChallengeType {
    CAPTCHA_CHALLENGE_TYPE_UNSPECIFIED = 0,
    /** IMAGE_TEXT - Text recognition: The user has to type a distorted text from the picture into a special field. */
    IMAGE_TEXT = 1,
    /** SILHOUETTES - Silhouettes: The user has to mark several icons from the picture in a particular order. */
    SILHOUETTES = 2,
    /** KALEIDOSCOPE - Kaleidoscope: The user has to build a picture from individual parts by shuffling them using a slider. */
    KALEIDOSCOPE = 3,
    UNRECOGNIZED = -1,
}

export function captchaChallengeTypeFromJSON(object: any): CaptchaChallengeType {
    switch (object) {
        case 0:
        case 'CAPTCHA_CHALLENGE_TYPE_UNSPECIFIED':
            return CaptchaChallengeType.CAPTCHA_CHALLENGE_TYPE_UNSPECIFIED;
        case 1:
        case 'IMAGE_TEXT':
            return CaptchaChallengeType.IMAGE_TEXT;
        case 2:
        case 'SILHOUETTES':
            return CaptchaChallengeType.SILHOUETTES;
        case 3:
        case 'KALEIDOSCOPE':
            return CaptchaChallengeType.KALEIDOSCOPE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return CaptchaChallengeType.UNRECOGNIZED;
    }
}

export function captchaChallengeTypeToJSON(object: CaptchaChallengeType): string {
    switch (object) {
        case CaptchaChallengeType.CAPTCHA_CHALLENGE_TYPE_UNSPECIFIED:
            return 'CAPTCHA_CHALLENGE_TYPE_UNSPECIFIED';
        case CaptchaChallengeType.IMAGE_TEXT:
            return 'IMAGE_TEXT';
        case CaptchaChallengeType.SILHOUETTES:
            return 'SILHOUETTES';
        case CaptchaChallengeType.KALEIDOSCOPE:
            return 'KALEIDOSCOPE';
        default:
            return 'UNKNOWN';
    }
}

/** A Captcha resource. */
export interface Captcha {
    /** ID of the captcha. */
    id: string;
    /** ID of the folder that the captcha belongs to. */
    folderId: string;
    /** ID of the cloud that the captcha belongs to. */
    cloudId: string;
    /** Client key of the captcha, see [CAPTCHA keys](/docs/smartcaptcha/concepts/keys). */
    clientKey: string;
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt?: Date;
    /** Name of the captcha. The name is unique within the folder. 3-63 characters long. */
    name: string;
    /** List of allowed host names, see [Domain validation](/docs/smartcaptcha/concepts/domain-validation). */
    allowedSites: string[];
    /** Complexity of the captcha. */
    complexity: CaptchaComplexity;
    /** JSON with variables to define the captcha appearance. For more details see generated JSON in cloud console. */
    styleJson: string;
    /** Determines that the captcha is currently in restricted mode, see [SmartCaptcha restricted mode](/docs/smartcaptcha/concepts/restricted-mode). */
    suspend: boolean;
    /** Turn off host name check, see [Domain validation](/docs/smartcaptcha/concepts/domain-validation). */
    turnOffHostnameCheck: boolean;
    /** Basic check type of the captcha. */
    preCheckType: CaptchaPreCheckType;
    /** Additional task type of the captcha. */
    challengeType: CaptchaChallengeType;
    /** List of security rules. */
    securityRules: SecurityRule[];
    /** Determines whether captcha is protected from being deleted. */
    deletionProtection: boolean;
    /** List of variants to use in security_rules */
    overrideVariants: OverrideVariant[];
}

/** OverrideVariant object. Contains the settings to override. */
export interface OverrideVariant {
    /** Unique identifier of the variant. */
    uuid: string;
    /** Optional description of the rule. 0-512 characters long. */
    description: string;
    /** Complexity of the captcha. */
    complexity: CaptchaComplexity;
    /** Basic check type of the captcha. */
    preCheckType: CaptchaPreCheckType;
    /** Additional task type of the captcha. */
    challengeType: CaptchaChallengeType;
}

/** CaptchaSecretKey object. Contains captcha data that need to keep in secret. */
export interface CaptchaSecretKey {
    /** Server key of the captcha, see [CAPTCHA keys](/docs/smartcaptcha/concepts/keys). */
    serverKey: string;
}

/** SecurityRule object. Defines the condition and action: when and which variant to show. */
export interface SecurityRule {
    /** Name of the rule. The name is unique within the captcha. 1-50 characters long. */
    name: string;
    /** Priority of the rule. Lower value means higher priority. */
    priority: number;
    /** Optional description of the rule. 0-512 characters long. */
    description: string;
    /** The condition for matching the rule. */
    condition?: Condition;
    /** Variant UUID to show in case of match the rule. Keep empty to use defaults. */
    overrideVariantUuid: string;
}

/** Condition object. AND semantics implied. */
export interface Condition {
    /** Host where captcha placed. */
    host?: Condition_HostMatcher;
    /** URI where captcha placed. */
    uri?: Condition_UriMatcher;
    /** Captcha request headers. */
    headers: Condition_HeaderMatcher[];
    /** The IP address of the requester. */
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

/** HostMatcher object. */
export interface Condition_HostMatcher {
    /** List of hosts. OR semantics implied. */
    hosts: Condition_StringMatcher[];
}

/** UriMatcher object. AND semantics implied. */
export interface Condition_UriMatcher {
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

const baseCaptcha: object = {
    id: '',
    folderId: '',
    cloudId: '',
    clientKey: '',
    name: '',
    allowedSites: '',
    complexity: 0,
    styleJson: '',
    suspend: false,
    turnOffHostnameCheck: false,
    preCheckType: 0,
    challengeType: 0,
    deletionProtection: false,
};

export const Captcha = {
    encode(message: Captcha, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(170).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.cloudId !== '') {
            writer.uint32(98).string(message.cloudId);
        }
        if (message.clientKey !== '') {
            writer.uint32(26).string(message.clientKey);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(58).string(message.name);
        }
        for (const v of message.allowedSites) {
            writer.uint32(66).string(v!);
        }
        if (message.complexity !== 0) {
            writer.uint32(72).int32(message.complexity);
        }
        if (message.styleJson !== '') {
            writer.uint32(82).string(message.styleJson);
        }
        if (message.suspend === true) {
            writer.uint32(104).bool(message.suspend);
        }
        if (message.turnOffHostnameCheck === true) {
            writer.uint32(112).bool(message.turnOffHostnameCheck);
        }
        if (message.preCheckType !== 0) {
            writer.uint32(128).int32(message.preCheckType);
        }
        if (message.challengeType !== 0) {
            writer.uint32(136).int32(message.challengeType);
        }
        for (const v of message.securityRules) {
            SecurityRule.encode(v!, writer.uint32(154).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(176).bool(message.deletionProtection);
        }
        for (const v of message.overrideVariants) {
            OverrideVariant.encode(v!, writer.uint32(186).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Captcha {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCaptcha } as Captcha;
        message.allowedSites = [];
        message.securityRules = [];
        message.overrideVariants = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 21:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 12:
                    message.cloudId = reader.string();
                    break;
                case 3:
                    message.clientKey = reader.string();
                    break;
                case 5:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.name = reader.string();
                    break;
                case 8:
                    message.allowedSites.push(reader.string());
                    break;
                case 9:
                    message.complexity = reader.int32() as any;
                    break;
                case 10:
                    message.styleJson = reader.string();
                    break;
                case 13:
                    message.suspend = reader.bool();
                    break;
                case 14:
                    message.turnOffHostnameCheck = reader.bool();
                    break;
                case 16:
                    message.preCheckType = reader.int32() as any;
                    break;
                case 17:
                    message.challengeType = reader.int32() as any;
                    break;
                case 19:
                    message.securityRules.push(SecurityRule.decode(reader, reader.uint32()));
                    break;
                case 22:
                    message.deletionProtection = reader.bool();
                    break;
                case 23:
                    message.overrideVariants.push(OverrideVariant.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Captcha {
        const message = { ...baseCaptcha } as Captcha;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null ? String(object.cloudId) : '';
        message.clientKey =
            object.clientKey !== undefined && object.clientKey !== null
                ? String(object.clientKey)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.allowedSites = (object.allowedSites ?? []).map((e: any) => String(e));
        message.complexity =
            object.complexity !== undefined && object.complexity !== null
                ? captchaComplexityFromJSON(object.complexity)
                : 0;
        message.styleJson =
            object.styleJson !== undefined && object.styleJson !== null
                ? String(object.styleJson)
                : '';
        message.suspend =
            object.suspend !== undefined && object.suspend !== null
                ? Boolean(object.suspend)
                : false;
        message.turnOffHostnameCheck =
            object.turnOffHostnameCheck !== undefined && object.turnOffHostnameCheck !== null
                ? Boolean(object.turnOffHostnameCheck)
                : false;
        message.preCheckType =
            object.preCheckType !== undefined && object.preCheckType !== null
                ? captchaPreCheckTypeFromJSON(object.preCheckType)
                : 0;
        message.challengeType =
            object.challengeType !== undefined && object.challengeType !== null
                ? captchaChallengeTypeFromJSON(object.challengeType)
                : 0;
        message.securityRules = (object.securityRules ?? []).map((e: any) =>
            SecurityRule.fromJSON(e),
        );
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.overrideVariants = (object.overrideVariants ?? []).map((e: any) =>
            OverrideVariant.fromJSON(e),
        );
        return message;
    },

    toJSON(message: Captcha): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        message.clientKey !== undefined && (obj.clientKey = message.clientKey);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        if (message.allowedSites) {
            obj.allowedSites = message.allowedSites.map((e) => e);
        } else {
            obj.allowedSites = [];
        }
        message.complexity !== undefined &&
            (obj.complexity = captchaComplexityToJSON(message.complexity));
        message.styleJson !== undefined && (obj.styleJson = message.styleJson);
        message.suspend !== undefined && (obj.suspend = message.suspend);
        message.turnOffHostnameCheck !== undefined &&
            (obj.turnOffHostnameCheck = message.turnOffHostnameCheck);
        message.preCheckType !== undefined &&
            (obj.preCheckType = captchaPreCheckTypeToJSON(message.preCheckType));
        message.challengeType !== undefined &&
            (obj.challengeType = captchaChallengeTypeToJSON(message.challengeType));
        if (message.securityRules) {
            obj.securityRules = message.securityRules.map((e) =>
                e ? SecurityRule.toJSON(e) : undefined,
            );
        } else {
            obj.securityRules = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        if (message.overrideVariants) {
            obj.overrideVariants = message.overrideVariants.map((e) =>
                e ? OverrideVariant.toJSON(e) : undefined,
            );
        } else {
            obj.overrideVariants = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Captcha>, I>>(object: I): Captcha {
        const message = { ...baseCaptcha } as Captcha;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.cloudId = object.cloudId ?? '';
        message.clientKey = object.clientKey ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.name = object.name ?? '';
        message.allowedSites = object.allowedSites?.map((e) => e) || [];
        message.complexity = object.complexity ?? 0;
        message.styleJson = object.styleJson ?? '';
        message.suspend = object.suspend ?? false;
        message.turnOffHostnameCheck = object.turnOffHostnameCheck ?? false;
        message.preCheckType = object.preCheckType ?? 0;
        message.challengeType = object.challengeType ?? 0;
        message.securityRules = object.securityRules?.map((e) => SecurityRule.fromPartial(e)) || [];
        message.deletionProtection = object.deletionProtection ?? false;
        message.overrideVariants =
            object.overrideVariants?.map((e) => OverrideVariant.fromPartial(e)) || [];
        return message;
    },
};

const baseOverrideVariant: object = {
    uuid: '',
    description: '',
    complexity: 0,
    preCheckType: 0,
    challengeType: 0,
};

export const OverrideVariant = {
    encode(message: OverrideVariant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.uuid !== '') {
            writer.uint32(10).string(message.uuid);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (message.complexity !== 0) {
            writer.uint32(24).int32(message.complexity);
        }
        if (message.preCheckType !== 0) {
            writer.uint32(32).int32(message.preCheckType);
        }
        if (message.challengeType !== 0) {
            writer.uint32(40).int32(message.challengeType);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OverrideVariant {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOverrideVariant } as OverrideVariant;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.complexity = reader.int32() as any;
                    break;
                case 4:
                    message.preCheckType = reader.int32() as any;
                    break;
                case 5:
                    message.challengeType = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OverrideVariant {
        const message = { ...baseOverrideVariant } as OverrideVariant;
        message.uuid = object.uuid !== undefined && object.uuid !== null ? String(object.uuid) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.complexity =
            object.complexity !== undefined && object.complexity !== null
                ? captchaComplexityFromJSON(object.complexity)
                : 0;
        message.preCheckType =
            object.preCheckType !== undefined && object.preCheckType !== null
                ? captchaPreCheckTypeFromJSON(object.preCheckType)
                : 0;
        message.challengeType =
            object.challengeType !== undefined && object.challengeType !== null
                ? captchaChallengeTypeFromJSON(object.challengeType)
                : 0;
        return message;
    },

    toJSON(message: OverrideVariant): unknown {
        const obj: any = {};
        message.uuid !== undefined && (obj.uuid = message.uuid);
        message.description !== undefined && (obj.description = message.description);
        message.complexity !== undefined &&
            (obj.complexity = captchaComplexityToJSON(message.complexity));
        message.preCheckType !== undefined &&
            (obj.preCheckType = captchaPreCheckTypeToJSON(message.preCheckType));
        message.challengeType !== undefined &&
            (obj.challengeType = captchaChallengeTypeToJSON(message.challengeType));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<OverrideVariant>, I>>(object: I): OverrideVariant {
        const message = { ...baseOverrideVariant } as OverrideVariant;
        message.uuid = object.uuid ?? '';
        message.description = object.description ?? '';
        message.complexity = object.complexity ?? 0;
        message.preCheckType = object.preCheckType ?? 0;
        message.challengeType = object.challengeType ?? 0;
        return message;
    },
};

const baseCaptchaSecretKey: object = { serverKey: '' };

export const CaptchaSecretKey = {
    encode(message: CaptchaSecretKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.serverKey !== '') {
            writer.uint32(10).string(message.serverKey);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CaptchaSecretKey {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCaptchaSecretKey } as CaptchaSecretKey;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serverKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CaptchaSecretKey {
        const message = { ...baseCaptchaSecretKey } as CaptchaSecretKey;
        message.serverKey =
            object.serverKey !== undefined && object.serverKey !== null
                ? String(object.serverKey)
                : '';
        return message;
    },

    toJSON(message: CaptchaSecretKey): unknown {
        const obj: any = {};
        message.serverKey !== undefined && (obj.serverKey = message.serverKey);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CaptchaSecretKey>, I>>(object: I): CaptchaSecretKey {
        const message = { ...baseCaptchaSecretKey } as CaptchaSecretKey;
        message.serverKey = object.serverKey ?? '';
        return message;
    },
};

const baseSecurityRule: object = {
    name: '',
    priority: 0,
    description: '',
    overrideVariantUuid: '',
};

export const SecurityRule = {
    encode(message: SecurityRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.priority !== 0) {
            writer.uint32(16).int64(message.priority);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.condition !== undefined) {
            Condition.encode(message.condition, writer.uint32(34).fork()).ldelim();
        }
        if (message.overrideVariantUuid !== '') {
            writer.uint32(50).string(message.overrideVariantUuid);
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
                    message.description = reader.string();
                    break;
                case 4:
                    message.condition = Condition.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.overrideVariantUuid = reader.string();
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
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.condition =
            object.condition !== undefined && object.condition !== null
                ? Condition.fromJSON(object.condition)
                : undefined;
        message.overrideVariantUuid =
            object.overrideVariantUuid !== undefined && object.overrideVariantUuid !== null
                ? String(object.overrideVariantUuid)
                : '';
        return message;
    },

    toJSON(message: SecurityRule): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.priority !== undefined && (obj.priority = Math.round(message.priority));
        message.description !== undefined && (obj.description = message.description);
        message.condition !== undefined &&
            (obj.condition = message.condition ? Condition.toJSON(message.condition) : undefined);
        message.overrideVariantUuid !== undefined &&
            (obj.overrideVariantUuid = message.overrideVariantUuid);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SecurityRule>, I>>(object: I): SecurityRule {
        const message = { ...baseSecurityRule } as SecurityRule;
        message.name = object.name ?? '';
        message.priority = object.priority ?? 0;
        message.description = object.description ?? '';
        message.condition =
            object.condition !== undefined && object.condition !== null
                ? Condition.fromPartial(object.condition)
                : undefined;
        message.overrideVariantUuid = object.overrideVariantUuid ?? '';
        return message;
    },
};

const baseCondition: object = {};

export const Condition = {
    encode(message: Condition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.host !== undefined) {
            Condition_HostMatcher.encode(message.host, writer.uint32(10).fork()).ldelim();
        }
        if (message.uri !== undefined) {
            Condition_UriMatcher.encode(message.uri, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.headers) {
            Condition_HeaderMatcher.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        if (message.sourceIp !== undefined) {
            Condition_IpMatcher.encode(message.sourceIp, writer.uint32(34).fork()).ldelim();
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
                    message.host = Condition_HostMatcher.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.uri = Condition_UriMatcher.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.headers.push(Condition_HeaderMatcher.decode(reader, reader.uint32()));
                    break;
                case 4:
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
        message.host =
            object.host !== undefined && object.host !== null
                ? Condition_HostMatcher.fromJSON(object.host)
                : undefined;
        message.uri =
            object.uri !== undefined && object.uri !== null
                ? Condition_UriMatcher.fromJSON(object.uri)
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
        message.host !== undefined &&
            (obj.host = message.host ? Condition_HostMatcher.toJSON(message.host) : undefined);
        message.uri !== undefined &&
            (obj.uri = message.uri ? Condition_UriMatcher.toJSON(message.uri) : undefined);
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
        message.host =
            object.host !== undefined && object.host !== null
                ? Condition_HostMatcher.fromPartial(object.host)
                : undefined;
        message.uri =
            object.uri !== undefined && object.uri !== null
                ? Condition_UriMatcher.fromPartial(object.uri)
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

const baseCondition_HostMatcher: object = {};

export const Condition_HostMatcher = {
    encode(message: Condition_HostMatcher, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.hosts) {
            Condition_StringMatcher.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_HostMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition_HostMatcher } as Condition_HostMatcher;
        message.hosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hosts.push(Condition_StringMatcher.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Condition_HostMatcher {
        const message = { ...baseCondition_HostMatcher } as Condition_HostMatcher;
        message.hosts = (object.hosts ?? []).map((e: any) => Condition_StringMatcher.fromJSON(e));
        return message;
    },

    toJSON(message: Condition_HostMatcher): unknown {
        const obj: any = {};
        if (message.hosts) {
            obj.hosts = message.hosts.map((e) =>
                e ? Condition_StringMatcher.toJSON(e) : undefined,
            );
        } else {
            obj.hosts = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Condition_HostMatcher>, I>>(
        object: I,
    ): Condition_HostMatcher {
        const message = { ...baseCondition_HostMatcher } as Condition_HostMatcher;
        message.hosts = object.hosts?.map((e) => Condition_StringMatcher.fromPartial(e)) || [];
        return message;
    },
};

const baseCondition_UriMatcher: object = {};

export const Condition_UriMatcher = {
    encode(message: Condition_UriMatcher, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.path !== undefined) {
            Condition_StringMatcher.encode(message.path, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.queries) {
            Condition_QueryMatcher.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Condition_UriMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition_UriMatcher } as Condition_UriMatcher;
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

    fromJSON(object: any): Condition_UriMatcher {
        const message = { ...baseCondition_UriMatcher } as Condition_UriMatcher;
        message.path =
            object.path !== undefined && object.path !== null
                ? Condition_StringMatcher.fromJSON(object.path)
                : undefined;
        message.queries = (object.queries ?? []).map((e: any) =>
            Condition_QueryMatcher.fromJSON(e),
        );
        return message;
    },

    toJSON(message: Condition_UriMatcher): unknown {
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

    fromPartial<I extends Exact<DeepPartial<Condition_UriMatcher>, I>>(
        object: I,
    ): Condition_UriMatcher {
        const message = { ...baseCondition_UriMatcher } as Condition_UriMatcher;
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
