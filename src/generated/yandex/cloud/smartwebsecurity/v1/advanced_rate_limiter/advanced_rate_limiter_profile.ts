/* eslint-disable */
import { messageTypeRegistry } from '../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Condition } from '../../../../../yandex/cloud/smartwebsecurity/v1/security_profile';
import { Timestamp } from '../../../../../google/protobuf/timestamp';

export const protobufPackage = 'yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter';

/** A AdvancedRateLimiterProfile (ARL) resource. */
export interface AdvancedRateLimiterProfile {
    $type: 'yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterProfile';
    /** ID of the ARL profile. */
    id: string;
    /** ID of the folder that the ARL profile belongs to. */
    folderId: string;
    /** Labels as `` key:value `` pairs. Maximum of 64 per resource. */
    labels: { [key: string]: string };
    /** Name of the ARL profile. The name is unique within the folder. 1-50 characters long. */
    name: string;
    /** Optional description of the ARL profile. */
    description: string;
    /** List of rules. */
    advancedRateLimiterRules: AdvancedRateLimiterRule[];
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt?: Date;
    /** ID of the cloud that the ARL profile belongs to. */
    cloudId: string;
}

export interface AdvancedRateLimiterProfile_LabelsEntry {
    $type: 'yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterProfile.LabelsEntry';
    key: string;
    value: string;
}

/** A AdvancedRateLimiterRule object, see [Rules](/docs/smartwebsecurity/concepts/arl#traffic-conditions). */
export interface AdvancedRateLimiterRule {
    $type: 'yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterRule';
    /** Name of the rule. The name is unique within the ARL profile. 1-50 characters long. */
    name: string;
    /**
     * Determines the priority in case there are several matched rules.
     * Enter an integer within the range of 1 and 999999.
     * The rule priority must be unique within the entire ARL profile.
     * A lower numeric value means a higher priority.
     */
    priority: number;
    /** Optional description of the rule. 0-512 characters long. */
    description: string;
    /**
     * This allows you to evaluate backend capabilities and find the optimum limit values.
     * Requests will not be blocked in this mode.
     */
    dryRun: boolean;
    /** Static quota. Counting each request individually. */
    staticQuota?: AdvancedRateLimiterRule_StaticQuota | undefined;
    /** Dynamic quota. Grouping requests by a certain attribute and limiting the number of groups. */
    dynamicQuota?: AdvancedRateLimiterRule_DynamicQuota | undefined;
}

/** Type of action to perform if this rule matched. */
export enum AdvancedRateLimiterRule_Action {
    ACTION_UNSPECIFIED = 0,
    /** DENY - Deny request. */
    DENY = 1,
    UNRECOGNIZED = -1,
}

export function advancedRateLimiterRule_ActionFromJSON(
    object: any,
): AdvancedRateLimiterRule_Action {
    switch (object) {
        case 0:
        case 'ACTION_UNSPECIFIED':
            return AdvancedRateLimiterRule_Action.ACTION_UNSPECIFIED;
        case 1:
        case 'DENY':
            return AdvancedRateLimiterRule_Action.DENY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return AdvancedRateLimiterRule_Action.UNRECOGNIZED;
    }
}

export function advancedRateLimiterRule_ActionToJSON(
    object: AdvancedRateLimiterRule_Action,
): string {
    switch (object) {
        case AdvancedRateLimiterRule_Action.ACTION_UNSPECIFIED:
            return 'ACTION_UNSPECIFIED';
        case AdvancedRateLimiterRule_Action.DENY:
            return 'DENY';
        default:
            return 'UNKNOWN';
    }
}

/** StaticQuota object. */
export interface AdvancedRateLimiterRule_StaticQuota {
    $type: 'yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterRule.StaticQuota';
    /** Action in case of exceeding this quota. */
    action: AdvancedRateLimiterRule_Action;
    /** The condition for matching the quota. */
    condition?: Condition;
    /**
     * Desired maximum number of requests per period.
     * Enter an integer within the range of 1 and 9999999999999.
     */
    limit: number;
    /** Period of time in seconds. */
    period: number;
}

/** DynamicQuota object. */
export interface AdvancedRateLimiterRule_DynamicQuota {
    $type: 'yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterRule.DynamicQuota';
    /** Action in case of exceeding this quota. */
    action: AdvancedRateLimiterRule_Action;
    /** The condition for matching the quota. */
    condition?: Condition;
    /**
     * Desired maximum number of requests per period.
     * Enter an integer within the range of 1 and 9999999999999.
     */
    limit: number;
    /** Period of time in seconds. */
    period: number;
    /** List of characteristics. */
    characteristics: AdvancedRateLimiterRule_DynamicQuota_Characteristic[];
}

export interface AdvancedRateLimiterRule_DynamicQuota_Characteristic {
    $type: 'yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterRule.DynamicQuota.Characteristic';
    /**
     * Characteristic automatically based on the Request path, HTTP method, IP address, Region, and Host attributes.
     * See [Rules](/docs/smartwebsecurity/concepts/arl#requests-counting) for more details.
     */
    simpleCharacteristic?:
        | AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic
        | undefined;
    /**
     * Characteristic based on key match in the Query params, HTTP header, and HTTP cookie attributes.
     * See [Rules](/docs/smartwebsecurity/concepts/arl#requests-counting) for more details.
     */
    keyCharacteristic?:
        | AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic
        | undefined;
    /** Determines case-sensitive or case-insensitive keys matching. */
    caseInsensitive: boolean;
}

export interface AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic {
    $type: 'yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterRule.DynamicQuota.Characteristic.SimpleCharacteristic';
    /** Type of simple characteristic. */
    type: AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic_Type;
}

/** Type of simple characteristic. */
export enum AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic_Type {
    TYPE_UNSPECIFIED = 0,
    /** REQUEST_PATH - HTTP Request path. */
    REQUEST_PATH = 1,
    /** HTTP_METHOD - HTTP Method. */
    HTTP_METHOD = 2,
    /** IP - IP address. */
    IP = 3,
    /** GEO - Region. */
    GEO = 4,
    /** HOST - Host. */
    HOST = 5,
    UNRECOGNIZED = -1,
}

export function advancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic_TypeFromJSON(
    object: any,
): AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic_Type {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'REQUEST_PATH':
            return AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic_Type.REQUEST_PATH;
        case 2:
        case 'HTTP_METHOD':
            return AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic_Type.HTTP_METHOD;
        case 3:
        case 'IP':
            return AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic_Type.IP;
        case 4:
        case 'GEO':
            return AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic_Type.GEO;
        case 5:
        case 'HOST':
            return AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic_Type.HOST;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic_Type.UNRECOGNIZED;
    }
}

export function advancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic_TypeToJSON(
    object: AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic_Type,
): string {
    switch (object) {
        case AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic_Type.REQUEST_PATH:
            return 'REQUEST_PATH';
        case AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic_Type.HTTP_METHOD:
            return 'HTTP_METHOD';
        case AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic_Type.IP:
            return 'IP';
        case AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic_Type.GEO:
            return 'GEO';
        case AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic_Type.HOST:
            return 'HOST';
        default:
            return 'UNKNOWN';
    }
}

export interface AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic {
    $type: 'yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterRule.DynamicQuota.Characteristic.KeyCharacteristic';
    /** Type of key characteristic. */
    type: AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic_Type;
    /** String value of the key. */
    value: string;
}

/** Type of key characteristic. */
export enum AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic_Type {
    TYPE_UNSPECIFIED = 0,
    /** COOKIE_KEY - HTTP cookie key. */
    COOKIE_KEY = 1,
    /** HEADER_KEY - HTTP header key. */
    HEADER_KEY = 2,
    /** QUERY_KEY - Query params key. */
    QUERY_KEY = 3,
    UNRECOGNIZED = -1,
}

export function advancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic_TypeFromJSON(
    object: any,
): AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic_Type {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'COOKIE_KEY':
            return AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic_Type.COOKIE_KEY;
        case 2:
        case 'HEADER_KEY':
            return AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic_Type.HEADER_KEY;
        case 3:
        case 'QUERY_KEY':
            return AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic_Type.QUERY_KEY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic_Type.UNRECOGNIZED;
    }
}

export function advancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic_TypeToJSON(
    object: AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic_Type,
): string {
    switch (object) {
        case AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic_Type.COOKIE_KEY:
            return 'COOKIE_KEY';
        case AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic_Type.HEADER_KEY:
            return 'HEADER_KEY';
        case AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic_Type.QUERY_KEY:
            return 'QUERY_KEY';
        default:
            return 'UNKNOWN';
    }
}

const baseAdvancedRateLimiterProfile: object = {
    $type: 'yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterProfile',
    id: '',
    folderId: '',
    name: '',
    description: '',
    cloudId: '',
};

export const AdvancedRateLimiterProfile = {
    $type: 'yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterProfile' as const,

    encode(
        message: AdvancedRateLimiterProfile,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            AdvancedRateLimiterProfile_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterProfile.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(26).fork(),
            ).ldelim();
        });
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        for (const v of message.advancedRateLimiterRules) {
            AdvancedRateLimiterRule.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(58).fork()).ldelim();
        }
        if (message.cloudId !== '') {
            writer.uint32(74).string(message.cloudId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AdvancedRateLimiterProfile {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAdvancedRateLimiterProfile } as AdvancedRateLimiterProfile;
        message.labels = {};
        message.advancedRateLimiterRules = [];
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
                    const entry3 = AdvancedRateLimiterProfile_LabelsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
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
                    message.advancedRateLimiterRules.push(
                        AdvancedRateLimiterRule.decode(reader, reader.uint32()),
                    );
                    break;
                case 7:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.cloudId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AdvancedRateLimiterProfile {
        const message = { ...baseAdvancedRateLimiterProfile } as AdvancedRateLimiterProfile;
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
        message.advancedRateLimiterRules = (object.advancedRateLimiterRules ?? []).map((e: any) =>
            AdvancedRateLimiterRule.fromJSON(e),
        );
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null ? String(object.cloudId) : '';
        return message;
    },

    toJSON(message: AdvancedRateLimiterProfile): unknown {
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
        if (message.advancedRateLimiterRules) {
            obj.advancedRateLimiterRules = message.advancedRateLimiterRules.map((e) =>
                e ? AdvancedRateLimiterRule.toJSON(e) : undefined,
            );
        } else {
            obj.advancedRateLimiterRules = [];
        }
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AdvancedRateLimiterProfile>, I>>(
        object: I,
    ): AdvancedRateLimiterProfile {
        const message = { ...baseAdvancedRateLimiterProfile } as AdvancedRateLimiterProfile;
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
        message.advancedRateLimiterRules =
            object.advancedRateLimiterRules?.map((e) => AdvancedRateLimiterRule.fromPartial(e)) ||
            [];
        message.createdAt = object.createdAt ?? undefined;
        message.cloudId = object.cloudId ?? '';
        return message;
    },
};

messageTypeRegistry.set(AdvancedRateLimiterProfile.$type, AdvancedRateLimiterProfile);

const baseAdvancedRateLimiterProfile_LabelsEntry: object = {
    $type: 'yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterProfile.LabelsEntry',
    key: '',
    value: '',
};

export const AdvancedRateLimiterProfile_LabelsEntry = {
    $type: 'yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterProfile.LabelsEntry' as const,

    encode(
        message: AdvancedRateLimiterProfile_LabelsEntry,
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): AdvancedRateLimiterProfile_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAdvancedRateLimiterProfile_LabelsEntry,
        } as AdvancedRateLimiterProfile_LabelsEntry;
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

    fromJSON(object: any): AdvancedRateLimiterProfile_LabelsEntry {
        const message = {
            ...baseAdvancedRateLimiterProfile_LabelsEntry,
        } as AdvancedRateLimiterProfile_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: AdvancedRateLimiterProfile_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AdvancedRateLimiterProfile_LabelsEntry>, I>>(
        object: I,
    ): AdvancedRateLimiterProfile_LabelsEntry {
        const message = {
            ...baseAdvancedRateLimiterProfile_LabelsEntry,
        } as AdvancedRateLimiterProfile_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(
    AdvancedRateLimiterProfile_LabelsEntry.$type,
    AdvancedRateLimiterProfile_LabelsEntry,
);

const baseAdvancedRateLimiterRule: object = {
    $type: 'yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterRule',
    name: '',
    priority: 0,
    description: '',
    dryRun: false,
};

export const AdvancedRateLimiterRule = {
    $type: 'yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterRule' as const,

    encode(message: AdvancedRateLimiterRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.priority !== 0) {
            writer.uint32(16).int64(message.priority);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.dryRun === true) {
            writer.uint32(32).bool(message.dryRun);
        }
        if (message.staticQuota !== undefined) {
            AdvancedRateLimiterRule_StaticQuota.encode(
                message.staticQuota,
                writer.uint32(42).fork(),
            ).ldelim();
        }
        if (message.dynamicQuota !== undefined) {
            AdvancedRateLimiterRule_DynamicQuota.encode(
                message.dynamicQuota,
                writer.uint32(50).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AdvancedRateLimiterRule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAdvancedRateLimiterRule } as AdvancedRateLimiterRule;
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
                    message.dryRun = reader.bool();
                    break;
                case 5:
                    message.staticQuota = AdvancedRateLimiterRule_StaticQuota.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 6:
                    message.dynamicQuota = AdvancedRateLimiterRule_DynamicQuota.decode(
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

    fromJSON(object: any): AdvancedRateLimiterRule {
        const message = { ...baseAdvancedRateLimiterRule } as AdvancedRateLimiterRule;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.priority =
            object.priority !== undefined && object.priority !== null ? Number(object.priority) : 0;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.dryRun =
            object.dryRun !== undefined && object.dryRun !== null ? Boolean(object.dryRun) : false;
        message.staticQuota =
            object.staticQuota !== undefined && object.staticQuota !== null
                ? AdvancedRateLimiterRule_StaticQuota.fromJSON(object.staticQuota)
                : undefined;
        message.dynamicQuota =
            object.dynamicQuota !== undefined && object.dynamicQuota !== null
                ? AdvancedRateLimiterRule_DynamicQuota.fromJSON(object.dynamicQuota)
                : undefined;
        return message;
    },

    toJSON(message: AdvancedRateLimiterRule): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.priority !== undefined && (obj.priority = Math.round(message.priority));
        message.description !== undefined && (obj.description = message.description);
        message.dryRun !== undefined && (obj.dryRun = message.dryRun);
        message.staticQuota !== undefined &&
            (obj.staticQuota = message.staticQuota
                ? AdvancedRateLimiterRule_StaticQuota.toJSON(message.staticQuota)
                : undefined);
        message.dynamicQuota !== undefined &&
            (obj.dynamicQuota = message.dynamicQuota
                ? AdvancedRateLimiterRule_DynamicQuota.toJSON(message.dynamicQuota)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AdvancedRateLimiterRule>, I>>(
        object: I,
    ): AdvancedRateLimiterRule {
        const message = { ...baseAdvancedRateLimiterRule } as AdvancedRateLimiterRule;
        message.name = object.name ?? '';
        message.priority = object.priority ?? 0;
        message.description = object.description ?? '';
        message.dryRun = object.dryRun ?? false;
        message.staticQuota =
            object.staticQuota !== undefined && object.staticQuota !== null
                ? AdvancedRateLimiterRule_StaticQuota.fromPartial(object.staticQuota)
                : undefined;
        message.dynamicQuota =
            object.dynamicQuota !== undefined && object.dynamicQuota !== null
                ? AdvancedRateLimiterRule_DynamicQuota.fromPartial(object.dynamicQuota)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(AdvancedRateLimiterRule.$type, AdvancedRateLimiterRule);

const baseAdvancedRateLimiterRule_StaticQuota: object = {
    $type: 'yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterRule.StaticQuota',
    action: 0,
    limit: 0,
    period: 0,
};

export const AdvancedRateLimiterRule_StaticQuota = {
    $type: 'yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterRule.StaticQuota' as const,

    encode(
        message: AdvancedRateLimiterRule_StaticQuota,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.action !== 0) {
            writer.uint32(8).int32(message.action);
        }
        if (message.condition !== undefined) {
            Condition.encode(message.condition, writer.uint32(18).fork()).ldelim();
        }
        if (message.limit !== 0) {
            writer.uint32(24).int64(message.limit);
        }
        if (message.period !== 0) {
            writer.uint32(32).int64(message.period);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AdvancedRateLimiterRule_StaticQuota {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAdvancedRateLimiterRule_StaticQuota,
        } as AdvancedRateLimiterRule_StaticQuota;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.action = reader.int32() as any;
                    break;
                case 2:
                    message.condition = Condition.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.limit = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.period = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AdvancedRateLimiterRule_StaticQuota {
        const message = {
            ...baseAdvancedRateLimiterRule_StaticQuota,
        } as AdvancedRateLimiterRule_StaticQuota;
        message.action =
            object.action !== undefined && object.action !== null
                ? advancedRateLimiterRule_ActionFromJSON(object.action)
                : 0;
        message.condition =
            object.condition !== undefined && object.condition !== null
                ? Condition.fromJSON(object.condition)
                : undefined;
        message.limit =
            object.limit !== undefined && object.limit !== null ? Number(object.limit) : 0;
        message.period =
            object.period !== undefined && object.period !== null ? Number(object.period) : 0;
        return message;
    },

    toJSON(message: AdvancedRateLimiterRule_StaticQuota): unknown {
        const obj: any = {};
        message.action !== undefined &&
            (obj.action = advancedRateLimiterRule_ActionToJSON(message.action));
        message.condition !== undefined &&
            (obj.condition = message.condition ? Condition.toJSON(message.condition) : undefined);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.period !== undefined && (obj.period = Math.round(message.period));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AdvancedRateLimiterRule_StaticQuota>, I>>(
        object: I,
    ): AdvancedRateLimiterRule_StaticQuota {
        const message = {
            ...baseAdvancedRateLimiterRule_StaticQuota,
        } as AdvancedRateLimiterRule_StaticQuota;
        message.action = object.action ?? 0;
        message.condition =
            object.condition !== undefined && object.condition !== null
                ? Condition.fromPartial(object.condition)
                : undefined;
        message.limit = object.limit ?? 0;
        message.period = object.period ?? 0;
        return message;
    },
};

messageTypeRegistry.set(
    AdvancedRateLimiterRule_StaticQuota.$type,
    AdvancedRateLimiterRule_StaticQuota,
);

const baseAdvancedRateLimiterRule_DynamicQuota: object = {
    $type: 'yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterRule.DynamicQuota',
    action: 0,
    limit: 0,
    period: 0,
};

export const AdvancedRateLimiterRule_DynamicQuota = {
    $type: 'yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterRule.DynamicQuota' as const,

    encode(
        message: AdvancedRateLimiterRule_DynamicQuota,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.action !== 0) {
            writer.uint32(8).int32(message.action);
        }
        if (message.condition !== undefined) {
            Condition.encode(message.condition, writer.uint32(18).fork()).ldelim();
        }
        if (message.limit !== 0) {
            writer.uint32(24).int64(message.limit);
        }
        if (message.period !== 0) {
            writer.uint32(32).int64(message.period);
        }
        for (const v of message.characteristics) {
            AdvancedRateLimiterRule_DynamicQuota_Characteristic.encode(
                v!,
                writer.uint32(42).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AdvancedRateLimiterRule_DynamicQuota {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAdvancedRateLimiterRule_DynamicQuota,
        } as AdvancedRateLimiterRule_DynamicQuota;
        message.characteristics = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.action = reader.int32() as any;
                    break;
                case 2:
                    message.condition = Condition.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.limit = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.period = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.characteristics.push(
                        AdvancedRateLimiterRule_DynamicQuota_Characteristic.decode(
                            reader,
                            reader.uint32(),
                        ),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AdvancedRateLimiterRule_DynamicQuota {
        const message = {
            ...baseAdvancedRateLimiterRule_DynamicQuota,
        } as AdvancedRateLimiterRule_DynamicQuota;
        message.action =
            object.action !== undefined && object.action !== null
                ? advancedRateLimiterRule_ActionFromJSON(object.action)
                : 0;
        message.condition =
            object.condition !== undefined && object.condition !== null
                ? Condition.fromJSON(object.condition)
                : undefined;
        message.limit =
            object.limit !== undefined && object.limit !== null ? Number(object.limit) : 0;
        message.period =
            object.period !== undefined && object.period !== null ? Number(object.period) : 0;
        message.characteristics = (object.characteristics ?? []).map((e: any) =>
            AdvancedRateLimiterRule_DynamicQuota_Characteristic.fromJSON(e),
        );
        return message;
    },

    toJSON(message: AdvancedRateLimiterRule_DynamicQuota): unknown {
        const obj: any = {};
        message.action !== undefined &&
            (obj.action = advancedRateLimiterRule_ActionToJSON(message.action));
        message.condition !== undefined &&
            (obj.condition = message.condition ? Condition.toJSON(message.condition) : undefined);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.period !== undefined && (obj.period = Math.round(message.period));
        if (message.characteristics) {
            obj.characteristics = message.characteristics.map((e) =>
                e ? AdvancedRateLimiterRule_DynamicQuota_Characteristic.toJSON(e) : undefined,
            );
        } else {
            obj.characteristics = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AdvancedRateLimiterRule_DynamicQuota>, I>>(
        object: I,
    ): AdvancedRateLimiterRule_DynamicQuota {
        const message = {
            ...baseAdvancedRateLimiterRule_DynamicQuota,
        } as AdvancedRateLimiterRule_DynamicQuota;
        message.action = object.action ?? 0;
        message.condition =
            object.condition !== undefined && object.condition !== null
                ? Condition.fromPartial(object.condition)
                : undefined;
        message.limit = object.limit ?? 0;
        message.period = object.period ?? 0;
        message.characteristics =
            object.characteristics?.map((e) =>
                AdvancedRateLimiterRule_DynamicQuota_Characteristic.fromPartial(e),
            ) || [];
        return message;
    },
};

messageTypeRegistry.set(
    AdvancedRateLimiterRule_DynamicQuota.$type,
    AdvancedRateLimiterRule_DynamicQuota,
);

const baseAdvancedRateLimiterRule_DynamicQuota_Characteristic: object = {
    $type: 'yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterRule.DynamicQuota.Characteristic',
    caseInsensitive: false,
};

export const AdvancedRateLimiterRule_DynamicQuota_Characteristic = {
    $type: 'yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterRule.DynamicQuota.Characteristic' as const,

    encode(
        message: AdvancedRateLimiterRule_DynamicQuota_Characteristic,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.simpleCharacteristic !== undefined) {
            AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic.encode(
                message.simpleCharacteristic,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.keyCharacteristic !== undefined) {
            AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic.encode(
                message.keyCharacteristic,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.caseInsensitive === true) {
            writer.uint32(80).bool(message.caseInsensitive);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): AdvancedRateLimiterRule_DynamicQuota_Characteristic {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAdvancedRateLimiterRule_DynamicQuota_Characteristic,
        } as AdvancedRateLimiterRule_DynamicQuota_Characteristic;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.simpleCharacteristic =
                        AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic.decode(
                            reader,
                            reader.uint32(),
                        );
                    break;
                case 2:
                    message.keyCharacteristic =
                        AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic.decode(
                            reader,
                            reader.uint32(),
                        );
                    break;
                case 10:
                    message.caseInsensitive = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AdvancedRateLimiterRule_DynamicQuota_Characteristic {
        const message = {
            ...baseAdvancedRateLimiterRule_DynamicQuota_Characteristic,
        } as AdvancedRateLimiterRule_DynamicQuota_Characteristic;
        message.simpleCharacteristic =
            object.simpleCharacteristic !== undefined && object.simpleCharacteristic !== null
                ? AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic.fromJSON(
                      object.simpleCharacteristic,
                  )
                : undefined;
        message.keyCharacteristic =
            object.keyCharacteristic !== undefined && object.keyCharacteristic !== null
                ? AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic.fromJSON(
                      object.keyCharacteristic,
                  )
                : undefined;
        message.caseInsensitive =
            object.caseInsensitive !== undefined && object.caseInsensitive !== null
                ? Boolean(object.caseInsensitive)
                : false;
        return message;
    },

    toJSON(message: AdvancedRateLimiterRule_DynamicQuota_Characteristic): unknown {
        const obj: any = {};
        message.simpleCharacteristic !== undefined &&
            (obj.simpleCharacteristic = message.simpleCharacteristic
                ? AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic.toJSON(
                      message.simpleCharacteristic,
                  )
                : undefined);
        message.keyCharacteristic !== undefined &&
            (obj.keyCharacteristic = message.keyCharacteristic
                ? AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic.toJSON(
                      message.keyCharacteristic,
                  )
                : undefined);
        message.caseInsensitive !== undefined && (obj.caseInsensitive = message.caseInsensitive);
        return obj;
    },

    fromPartial<
        I extends Exact<DeepPartial<AdvancedRateLimiterRule_DynamicQuota_Characteristic>, I>,
    >(object: I): AdvancedRateLimiterRule_DynamicQuota_Characteristic {
        const message = {
            ...baseAdvancedRateLimiterRule_DynamicQuota_Characteristic,
        } as AdvancedRateLimiterRule_DynamicQuota_Characteristic;
        message.simpleCharacteristic =
            object.simpleCharacteristic !== undefined && object.simpleCharacteristic !== null
                ? AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic.fromPartial(
                      object.simpleCharacteristic,
                  )
                : undefined;
        message.keyCharacteristic =
            object.keyCharacteristic !== undefined && object.keyCharacteristic !== null
                ? AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic.fromPartial(
                      object.keyCharacteristic,
                  )
                : undefined;
        message.caseInsensitive = object.caseInsensitive ?? false;
        return message;
    },
};

messageTypeRegistry.set(
    AdvancedRateLimiterRule_DynamicQuota_Characteristic.$type,
    AdvancedRateLimiterRule_DynamicQuota_Characteristic,
);

const baseAdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic: object = {
    $type: 'yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterRule.DynamicQuota.Characteristic.SimpleCharacteristic',
    type: 0,
};

export const AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic = {
    $type: 'yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterRule.DynamicQuota.Characteristic.SimpleCharacteristic' as const,

    encode(
        message: AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic,
        } as AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(
        object: any,
    ): AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic {
        const message = {
            ...baseAdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic,
        } as AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic;
        message.type =
            object.type !== undefined && object.type !== null
                ? advancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic_TypeFromJSON(
                      object.type,
                  )
                : 0;
        return message;
    },

    toJSON(
        message: AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic,
    ): unknown {
        const obj: any = {};
        message.type !== undefined &&
            (obj.type =
                advancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic_TypeToJSON(
                    message.type,
                ));
        return obj;
    },

    fromPartial<
        I extends Exact<
            DeepPartial<AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic>,
            I
        >,
    >(object: I): AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic {
        const message = {
            ...baseAdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic,
        } as AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic;
        message.type = object.type ?? 0;
        return message;
    },
};

messageTypeRegistry.set(
    AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic.$type,
    AdvancedRateLimiterRule_DynamicQuota_Characteristic_SimpleCharacteristic,
);

const baseAdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic: object = {
    $type: 'yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterRule.DynamicQuota.Characteristic.KeyCharacteristic',
    type: 0,
    value: '',
};

export const AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic = {
    $type: 'yandex.cloud.smartwebsecurity.v1.advanced_rate_limiter.AdvancedRateLimiterRule.DynamicQuota.Characteristic.KeyCharacteristic' as const,

    encode(
        message: AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic,
        } as AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32() as any;
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

    fromJSON(object: any): AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic {
        const message = {
            ...baseAdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic,
        } as AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic;
        message.type =
            object.type !== undefined && object.type !== null
                ? advancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic_TypeFromJSON(
                      object.type,
                  )
                : 0;
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(
        message: AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic,
    ): unknown {
        const obj: any = {};
        message.type !== undefined &&
            (obj.type =
                advancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic_TypeToJSON(
                    message.type,
                ));
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<
        I extends Exact<
            DeepPartial<AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic>,
            I
        >,
    >(object: I): AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic {
        const message = {
            ...baseAdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic,
        } as AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic;
        message.type = object.type ?? 0;
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(
    AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic.$type,
    AdvancedRateLimiterRule_DynamicQuota_Characteristic_KeyCharacteristic,
);

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
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
              Exclude<keyof I, KeysOfUnion<P> | '$type'>,
              never
          >;

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
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
