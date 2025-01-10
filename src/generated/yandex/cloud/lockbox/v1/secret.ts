/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { BoolValue } from '../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.lockbox.v1';

/** A secret that may contain several versions of the payload. */
export interface Secret {
    $type: 'yandex.cloud.lockbox.v1.Secret';
    /** ID of the secret. */
    id: string;
    /** ID of the folder that the secret belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Name of the secret. */
    name: string;
    /** Description of the secret. */
    description: string;
    /** Custom labels for the secret as `key:value` pairs. Maximum 64 per key. */
    labels: { [key: string]: string };
    /** Optional ID of the KMS key will be used to encrypt and decrypt the secret. */
    kmsKeyId: string;
    /** Status of the secret. */
    status: Secret_Status;
    /** Current (i.e. the `latest`) version of the secret. */
    currentVersion?: Version;
    /** Flag that inhibits deletion of the secret. */
    deletionProtection: boolean;
    passwordPayloadSpecification?: PasswordPayloadSpecification | undefined;
}

export enum Secret_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - The secret is being created. */
    CREATING = 1,
    /**
     * ACTIVE - The secret is active and the secret payload can be accessed.
     *
     * Can be set to INACTIVE using the [SecretService.Deactivate] method.
     */
    ACTIVE = 2,
    /**
     * INACTIVE - The secret is inactive and unusable.
     *
     * Can be set to ACTIVE using the [SecretService.Deactivate] method.
     */
    INACTIVE = 3,
    UNRECOGNIZED = -1,
}

export function secret_StatusFromJSON(object: any): Secret_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Secret_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return Secret_Status.CREATING;
        case 2:
        case 'ACTIVE':
            return Secret_Status.ACTIVE;
        case 3:
        case 'INACTIVE':
            return Secret_Status.INACTIVE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Secret_Status.UNRECOGNIZED;
    }
}

export function secret_StatusToJSON(object: Secret_Status): string {
    switch (object) {
        case Secret_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Secret_Status.CREATING:
            return 'CREATING';
        case Secret_Status.ACTIVE:
            return 'ACTIVE';
        case Secret_Status.INACTIVE:
            return 'INACTIVE';
        default:
            return 'UNKNOWN';
    }
}

export interface Secret_LabelsEntry {
    $type: 'yandex.cloud.lockbox.v1.Secret.LabelsEntry';
    key: string;
    value: string;
}

export interface Version {
    $type: 'yandex.cloud.lockbox.v1.Version';
    /** ID of the version. */
    id: string;
    /** ID of the secret that the version belongs to. */
    secretId: string;
    /** Time when the version was created. */
    createdAt?: Date;
    /**
     * Time when the version is going to be destroyed. Empty unless the status
     * is `SCHEDULED_FOR_DESTRUCTION`.
     */
    destroyAt?: Date;
    /** Description of the version. */
    description: string;
    /** Status of the secret. */
    status: Version_Status;
    /** Keys of the entries contained in the version payload. */
    payloadEntryKeys: string[];
    passwordPayloadSpecification?: PasswordPayloadSpecification | undefined;
}

export enum Version_Status {
    STATUS_UNSPECIFIED = 0,
    /** ACTIVE - The version is active and the secret payload can be accessed. */
    ACTIVE = 1,
    /**
     * SCHEDULED_FOR_DESTRUCTION - The version is scheduled for destruction, the time when it will be destroyed
     * is specified in the [Version.destroy_at] field.
     */
    SCHEDULED_FOR_DESTRUCTION = 2,
    /** DESTROYED - The version is destroyed and cannot be recovered. */
    DESTROYED = 3,
    UNRECOGNIZED = -1,
}

export function version_StatusFromJSON(object: any): Version_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Version_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'ACTIVE':
            return Version_Status.ACTIVE;
        case 2:
        case 'SCHEDULED_FOR_DESTRUCTION':
            return Version_Status.SCHEDULED_FOR_DESTRUCTION;
        case 3:
        case 'DESTROYED':
            return Version_Status.DESTROYED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Version_Status.UNRECOGNIZED;
    }
}

export function version_StatusToJSON(object: Version_Status): string {
    switch (object) {
        case Version_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Version_Status.ACTIVE:
            return 'ACTIVE';
        case Version_Status.SCHEDULED_FOR_DESTRUCTION:
            return 'SCHEDULED_FOR_DESTRUCTION';
        case Version_Status.DESTROYED:
            return 'DESTROYED';
        default:
            return 'UNKNOWN';
    }
}

export interface PasswordPayloadSpecification {
    $type: 'yandex.cloud.lockbox.v1.PasswordPayloadSpecification';
    /** key of the entry to store generated password value */
    passwordKey: string;
    /** password length; by default, a reasonable length will be decided */
    length: number;
    /** whether at least one A..Z character is included in the password, true by default */
    includeUppercase?: boolean;
    /** whether at least one a..z character is included in the password, true by default */
    includeLowercase?: boolean;
    /** whether at least one 0..9 character is included in the password, true by default */
    includeDigits?: boolean;
    /**
     * whether at least one punctuation character is included in the password, true by default
     * punctuation characters by default (there are 32): !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
     * to customize the punctuation characters, see included_punctuation and excluded_punctuation below
     */
    includePunctuation?: boolean;
    /**
     * If include_punctuation is true, one of these two fields (not both) may be used optionally to customize the punctuation:
     * a string of specific punctuation characters to use (at most, all the 32)
     */
    includedPunctuation: string;
    /** a string of punctuation characters to exclude from the default (at most 31, it's not allowed to exclude all the 32) */
    excludedPunctuation: string;
}

const baseSecret: object = {
    $type: 'yandex.cloud.lockbox.v1.Secret',
    id: '',
    folderId: '',
    name: '',
    description: '',
    kmsKeyId: '',
    status: 0,
    deletionProtection: false,
};

export const Secret = {
    $type: 'yandex.cloud.lockbox.v1.Secret' as const,

    encode(message: Secret, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Secret_LabelsEntry.encode(
                { $type: 'yandex.cloud.lockbox.v1.Secret.LabelsEntry', key: key as any, value },
                writer.uint32(50).fork(),
            ).ldelim();
        });
        if (message.kmsKeyId !== '') {
            writer.uint32(58).string(message.kmsKeyId);
        }
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        if (message.currentVersion !== undefined) {
            Version.encode(message.currentVersion, writer.uint32(74).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(80).bool(message.deletionProtection);
        }
        if (message.passwordPayloadSpecification !== undefined) {
            PasswordPayloadSpecification.encode(
                message.passwordPayloadSpecification,
                writer.uint32(90).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Secret {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSecret } as Secret;
        message.labels = {};
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
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = Secret_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.kmsKeyId = reader.string();
                    break;
                case 8:
                    message.status = reader.int32() as any;
                    break;
                case 9:
                    message.currentVersion = Version.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.deletionProtection = reader.bool();
                    break;
                case 11:
                    message.passwordPayloadSpecification = PasswordPayloadSpecification.decode(
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

    fromJSON(object: any): Secret {
        const message = { ...baseSecret } as Secret;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
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
        message.kmsKeyId =
            object.kmsKeyId !== undefined && object.kmsKeyId !== null
                ? String(object.kmsKeyId)
                : '';
        message.status =
            object.status !== undefined && object.status !== null
                ? secret_StatusFromJSON(object.status)
                : 0;
        message.currentVersion =
            object.currentVersion !== undefined && object.currentVersion !== null
                ? Version.fromJSON(object.currentVersion)
                : undefined;
        message.deletionProtection =
            object.deletionProtection !== undefined && object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.passwordPayloadSpecification =
            object.passwordPayloadSpecification !== undefined &&
            object.passwordPayloadSpecification !== null
                ? PasswordPayloadSpecification.fromJSON(object.passwordPayloadSpecification)
                : undefined;
        return message;
    },

    toJSON(message: Secret): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.kmsKeyId !== undefined && (obj.kmsKeyId = message.kmsKeyId);
        message.status !== undefined && (obj.status = secret_StatusToJSON(message.status));
        message.currentVersion !== undefined &&
            (obj.currentVersion = message.currentVersion
                ? Version.toJSON(message.currentVersion)
                : undefined);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.passwordPayloadSpecification !== undefined &&
            (obj.passwordPayloadSpecification = message.passwordPayloadSpecification
                ? PasswordPayloadSpecification.toJSON(message.passwordPayloadSpecification)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Secret>, I>>(object: I): Secret {
        const message = { ...baseSecret } as Secret;
        message.id = object.id ?? '';
        message.folderId = object.folderId ?? '';
        message.createdAt = object.createdAt ?? undefined;
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
        message.kmsKeyId = object.kmsKeyId ?? '';
        message.status = object.status ?? 0;
        message.currentVersion =
            object.currentVersion !== undefined && object.currentVersion !== null
                ? Version.fromPartial(object.currentVersion)
                : undefined;
        message.deletionProtection = object.deletionProtection ?? false;
        message.passwordPayloadSpecification =
            object.passwordPayloadSpecification !== undefined &&
            object.passwordPayloadSpecification !== null
                ? PasswordPayloadSpecification.fromPartial(object.passwordPayloadSpecification)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Secret.$type, Secret);

const baseSecret_LabelsEntry: object = {
    $type: 'yandex.cloud.lockbox.v1.Secret.LabelsEntry',
    key: '',
    value: '',
};

export const Secret_LabelsEntry = {
    $type: 'yandex.cloud.lockbox.v1.Secret.LabelsEntry' as const,

    encode(message: Secret_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Secret_LabelsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSecret_LabelsEntry } as Secret_LabelsEntry;
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

    fromJSON(object: any): Secret_LabelsEntry {
        const message = { ...baseSecret_LabelsEntry } as Secret_LabelsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: Secret_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Secret_LabelsEntry>, I>>(
        object: I,
    ): Secret_LabelsEntry {
        const message = { ...baseSecret_LabelsEntry } as Secret_LabelsEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

messageTypeRegistry.set(Secret_LabelsEntry.$type, Secret_LabelsEntry);

const baseVersion: object = {
    $type: 'yandex.cloud.lockbox.v1.Version',
    id: '',
    secretId: '',
    description: '',
    status: 0,
    payloadEntryKeys: '',
};

export const Version = {
    $type: 'yandex.cloud.lockbox.v1.Version' as const,

    encode(message: Version, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.secretId !== '') {
            writer.uint32(18).string(message.secretId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.destroyAt !== undefined) {
            Timestamp.encode(toTimestamp(message.destroyAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        if (message.status !== 0) {
            writer.uint32(48).int32(message.status);
        }
        for (const v of message.payloadEntryKeys) {
            writer.uint32(58).string(v!);
        }
        if (message.passwordPayloadSpecification !== undefined) {
            PasswordPayloadSpecification.encode(
                message.passwordPayloadSpecification,
                writer.uint32(66).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Version {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVersion } as Version;
        message.payloadEntryKeys = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.secretId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.destroyAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.status = reader.int32() as any;
                    break;
                case 7:
                    message.payloadEntryKeys.push(reader.string());
                    break;
                case 8:
                    message.passwordPayloadSpecification = PasswordPayloadSpecification.decode(
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

    fromJSON(object: any): Version {
        const message = { ...baseVersion } as Version;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.secretId =
            object.secretId !== undefined && object.secretId !== null
                ? String(object.secretId)
                : '';
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.destroyAt =
            object.destroyAt !== undefined && object.destroyAt !== null
                ? fromJsonTimestamp(object.destroyAt)
                : undefined;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.status =
            object.status !== undefined && object.status !== null
                ? version_StatusFromJSON(object.status)
                : 0;
        message.payloadEntryKeys = (object.payloadEntryKeys ?? []).map((e: any) => String(e));
        message.passwordPayloadSpecification =
            object.passwordPayloadSpecification !== undefined &&
            object.passwordPayloadSpecification !== null
                ? PasswordPayloadSpecification.fromJSON(object.passwordPayloadSpecification)
                : undefined;
        return message;
    },

    toJSON(message: Version): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.destroyAt !== undefined && (obj.destroyAt = message.destroyAt.toISOString());
        message.description !== undefined && (obj.description = message.description);
        message.status !== undefined && (obj.status = version_StatusToJSON(message.status));
        if (message.payloadEntryKeys) {
            obj.payloadEntryKeys = message.payloadEntryKeys.map((e) => e);
        } else {
            obj.payloadEntryKeys = [];
        }
        message.passwordPayloadSpecification !== undefined &&
            (obj.passwordPayloadSpecification = message.passwordPayloadSpecification
                ? PasswordPayloadSpecification.toJSON(message.passwordPayloadSpecification)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Version>, I>>(object: I): Version {
        const message = { ...baseVersion } as Version;
        message.id = object.id ?? '';
        message.secretId = object.secretId ?? '';
        message.createdAt = object.createdAt ?? undefined;
        message.destroyAt = object.destroyAt ?? undefined;
        message.description = object.description ?? '';
        message.status = object.status ?? 0;
        message.payloadEntryKeys = object.payloadEntryKeys?.map((e) => e) || [];
        message.passwordPayloadSpecification =
            object.passwordPayloadSpecification !== undefined &&
            object.passwordPayloadSpecification !== null
                ? PasswordPayloadSpecification.fromPartial(object.passwordPayloadSpecification)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(Version.$type, Version);

const basePasswordPayloadSpecification: object = {
    $type: 'yandex.cloud.lockbox.v1.PasswordPayloadSpecification',
    passwordKey: '',
    length: 0,
    includedPunctuation: '',
    excludedPunctuation: '',
};

export const PasswordPayloadSpecification = {
    $type: 'yandex.cloud.lockbox.v1.PasswordPayloadSpecification' as const,

    encode(
        message: PasswordPayloadSpecification,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.passwordKey !== '') {
            writer.uint32(10).string(message.passwordKey);
        }
        if (message.length !== 0) {
            writer.uint32(16).int64(message.length);
        }
        if (message.includeUppercase !== undefined) {
            BoolValue.encode(
                { $type: 'google.protobuf.BoolValue', value: message.includeUppercase! },
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.includeLowercase !== undefined) {
            BoolValue.encode(
                { $type: 'google.protobuf.BoolValue', value: message.includeLowercase! },
                writer.uint32(34).fork(),
            ).ldelim();
        }
        if (message.includeDigits !== undefined) {
            BoolValue.encode(
                { $type: 'google.protobuf.BoolValue', value: message.includeDigits! },
                writer.uint32(42).fork(),
            ).ldelim();
        }
        if (message.includePunctuation !== undefined) {
            BoolValue.encode(
                { $type: 'google.protobuf.BoolValue', value: message.includePunctuation! },
                writer.uint32(50).fork(),
            ).ldelim();
        }
        if (message.includedPunctuation !== '') {
            writer.uint32(58).string(message.includedPunctuation);
        }
        if (message.excludedPunctuation !== '') {
            writer.uint32(66).string(message.excludedPunctuation);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordPayloadSpecification {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePasswordPayloadSpecification } as PasswordPayloadSpecification;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.passwordKey = reader.string();
                    break;
                case 2:
                    message.length = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.includeUppercase = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.includeLowercase = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.includeDigits = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.includePunctuation = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.includedPunctuation = reader.string();
                    break;
                case 8:
                    message.excludedPunctuation = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PasswordPayloadSpecification {
        const message = { ...basePasswordPayloadSpecification } as PasswordPayloadSpecification;
        message.passwordKey =
            object.passwordKey !== undefined && object.passwordKey !== null
                ? String(object.passwordKey)
                : '';
        message.length =
            object.length !== undefined && object.length !== null ? Number(object.length) : 0;
        message.includeUppercase =
            object.includeUppercase !== undefined && object.includeUppercase !== null
                ? Boolean(object.includeUppercase)
                : undefined;
        message.includeLowercase =
            object.includeLowercase !== undefined && object.includeLowercase !== null
                ? Boolean(object.includeLowercase)
                : undefined;
        message.includeDigits =
            object.includeDigits !== undefined && object.includeDigits !== null
                ? Boolean(object.includeDigits)
                : undefined;
        message.includePunctuation =
            object.includePunctuation !== undefined && object.includePunctuation !== null
                ? Boolean(object.includePunctuation)
                : undefined;
        message.includedPunctuation =
            object.includedPunctuation !== undefined && object.includedPunctuation !== null
                ? String(object.includedPunctuation)
                : '';
        message.excludedPunctuation =
            object.excludedPunctuation !== undefined && object.excludedPunctuation !== null
                ? String(object.excludedPunctuation)
                : '';
        return message;
    },

    toJSON(message: PasswordPayloadSpecification): unknown {
        const obj: any = {};
        message.passwordKey !== undefined && (obj.passwordKey = message.passwordKey);
        message.length !== undefined && (obj.length = Math.round(message.length));
        message.includeUppercase !== undefined && (obj.includeUppercase = message.includeUppercase);
        message.includeLowercase !== undefined && (obj.includeLowercase = message.includeLowercase);
        message.includeDigits !== undefined && (obj.includeDigits = message.includeDigits);
        message.includePunctuation !== undefined &&
            (obj.includePunctuation = message.includePunctuation);
        message.includedPunctuation !== undefined &&
            (obj.includedPunctuation = message.includedPunctuation);
        message.excludedPunctuation !== undefined &&
            (obj.excludedPunctuation = message.excludedPunctuation);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PasswordPayloadSpecification>, I>>(
        object: I,
    ): PasswordPayloadSpecification {
        const message = { ...basePasswordPayloadSpecification } as PasswordPayloadSpecification;
        message.passwordKey = object.passwordKey ?? '';
        message.length = object.length ?? 0;
        message.includeUppercase = object.includeUppercase ?? undefined;
        message.includeLowercase = object.includeLowercase ?? undefined;
        message.includeDigits = object.includeDigits ?? undefined;
        message.includePunctuation = object.includePunctuation ?? undefined;
        message.includedPunctuation = object.includedPunctuation ?? '';
        message.excludedPunctuation = object.excludedPunctuation ?? '';
        return message;
    },
};

messageTypeRegistry.set(PasswordPayloadSpecification.$type, PasswordPayloadSpecification);

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
