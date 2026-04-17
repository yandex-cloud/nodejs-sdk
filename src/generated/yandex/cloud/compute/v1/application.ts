/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.compute.v1';

export interface Secret {
    /** ID of the secret. */
    id: string;
    /** Name of the key. */
    key: string;
    /** Version of the secret. */
    versionId: string;
}

export interface ContainerSolutionSpec {
    /** ID of the product. */
    productId: string;
    /** A list of the secrets. */
    secrets: { [key: string]: Secret };
    /** A list of the environmets. */
    environment: { [key: string]: string };
}

export interface ContainerSolutionSpec_SecretsEntry {
    key: string;
    value?: Secret;
}

export interface ContainerSolutionSpec_EnvironmentEntry {
    key: string;
    value: string;
}

export interface BackupSpec {
    /** If true, backup is enabled. */
    enabled: boolean;
    /** A list of policy IDs to apply after resource registration. */
    initialPolicyIds: string[];
    /** If true, recovery from backup starts on instance. */
    recoveryFromBackup: boolean;
    /** ID of the backup to recover from. */
    backupId: string;
    /** ID of the instance registration for cloud backup agent installation. */
    instanceRegistrationId: string;
}

export interface Application {
    /** Container specification. */
    containerSolution?: ContainerSolutionSpec | undefined;
    /** Backup settings. */
    cloudbackup?: BackupSpec;
}

const baseSecret: object = { id: '', key: '', versionId: '' };

export const Secret: {
    encode(message: Secret, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Secret;
    fromJSON(object: any): Secret;
    toJSON(message: Secret): unknown;
    fromPartial<I extends Exact<DeepPartial<Secret>, I>>(object: I): Secret;
} = {
    encode(message: Secret, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.key !== '') {
            writer.uint32(18).string(message.key);
        }
        if (message.versionId !== '') {
            writer.uint32(26).string(message.versionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Secret {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSecret } as Secret;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.key = reader.string();
                    break;
                case 3:
                    message.versionId = reader.string();
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
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : '';
        return message;
    },

    toJSON(message: Secret): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.key !== undefined && (obj.key = message.key);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Secret>, I>>(object: I): Secret {
        const message = { ...baseSecret } as Secret;
        message.id = object.id ?? '';
        message.key = object.key ?? '';
        message.versionId = object.versionId ?? '';
        return message;
    },
};

const baseContainerSolutionSpec: object = { productId: '' };

export const ContainerSolutionSpec: {
    encode(message: ContainerSolutionSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContainerSolutionSpec;
    fromJSON(object: any): ContainerSolutionSpec;
    toJSON(message: ContainerSolutionSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<ContainerSolutionSpec>, I>>(object: I): ContainerSolutionSpec;
} = {
    encode(message: ContainerSolutionSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.productId !== '') {
            writer.uint32(10).string(message.productId);
        }
        Object.entries(message.secrets).forEach(([key, value]) => {
            ContainerSolutionSpec_SecretsEntry.encode(
                { key: key as any, value },
                writer.uint32(18).fork(),
            ).ldelim();
        });
        Object.entries(message.environment).forEach(([key, value]) => {
            ContainerSolutionSpec_EnvironmentEntry.encode(
                { key: key as any, value },
                writer.uint32(26).fork(),
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ContainerSolutionSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseContainerSolutionSpec } as ContainerSolutionSpec;
        message.secrets = {};
        message.environment = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.productId = reader.string();
                    break;
                case 2:
                    const entry2 = ContainerSolutionSpec_SecretsEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry2.value !== undefined) {
                        message.secrets[entry2.key] = entry2.value;
                    }
                    break;
                case 3:
                    const entry3 = ContainerSolutionSpec_EnvironmentEntry.decode(
                        reader,
                        reader.uint32(),
                    );
                    if (entry3.value !== undefined) {
                        message.environment[entry3.key] = entry3.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ContainerSolutionSpec {
        const message = { ...baseContainerSolutionSpec } as ContainerSolutionSpec;
        message.productId =
            object.productId !== undefined && object.productId !== null
                ? String(object.productId)
                : '';
        message.secrets = Object.entries(object.secrets ?? {}).reduce<{ [key: string]: Secret }>(
            (acc, [key, value]) => {
                acc[key] = Secret.fromJSON(value);
                return acc;
            },
            {},
        );
        message.environment = Object.entries(object.environment ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },

    toJSON(message: ContainerSolutionSpec): unknown {
        const obj: any = {};
        message.productId !== undefined && (obj.productId = message.productId);
        obj.secrets = {};
        if (message.secrets) {
            Object.entries(message.secrets).forEach(([k, v]) => {
                obj.secrets[k] = Secret.toJSON(v);
            });
        }
        obj.environment = {};
        if (message.environment) {
            Object.entries(message.environment).forEach(([k, v]) => {
                obj.environment[k] = v;
            });
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ContainerSolutionSpec>, I>>(
        object: I,
    ): ContainerSolutionSpec {
        const message = { ...baseContainerSolutionSpec } as ContainerSolutionSpec;
        message.productId = object.productId ?? '';
        message.secrets = Object.entries(object.secrets ?? {}).reduce<{ [key: string]: Secret }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = Secret.fromPartial(value);
                }
                return acc;
            },
            {},
        );
        message.environment = Object.entries(object.environment ?? {}).reduce<{
            [key: string]: string;
        }>((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};

const baseContainerSolutionSpec_SecretsEntry: object = { key: '' };

export const ContainerSolutionSpec_SecretsEntry: {
    encode(message: ContainerSolutionSpec_SecretsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContainerSolutionSpec_SecretsEntry;
    fromJSON(object: any): ContainerSolutionSpec_SecretsEntry;
    toJSON(message: ContainerSolutionSpec_SecretsEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<ContainerSolutionSpec_SecretsEntry>, I>>(object: I): ContainerSolutionSpec_SecretsEntry;
} = {
    encode(
        message: ContainerSolutionSpec_SecretsEntry,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            Secret.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ContainerSolutionSpec_SecretsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseContainerSolutionSpec_SecretsEntry,
        } as ContainerSolutionSpec_SecretsEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = Secret.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ContainerSolutionSpec_SecretsEntry {
        const message = {
            ...baseContainerSolutionSpec_SecretsEntry,
        } as ContainerSolutionSpec_SecretsEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null
                ? Secret.fromJSON(object.value)
                : undefined;
        return message;
    },

    toJSON(message: ContainerSolutionSpec_SecretsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? Secret.toJSON(message.value) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ContainerSolutionSpec_SecretsEntry>, I>>(
        object: I,
    ): ContainerSolutionSpec_SecretsEntry {
        const message = {
            ...baseContainerSolutionSpec_SecretsEntry,
        } as ContainerSolutionSpec_SecretsEntry;
        message.key = object.key ?? '';
        message.value =
            object.value !== undefined && object.value !== null
                ? Secret.fromPartial(object.value)
                : undefined;
        return message;
    },
};

const baseContainerSolutionSpec_EnvironmentEntry: object = { key: '', value: '' };

export const ContainerSolutionSpec_EnvironmentEntry: {
    encode(message: ContainerSolutionSpec_EnvironmentEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContainerSolutionSpec_EnvironmentEntry;
    fromJSON(object: any): ContainerSolutionSpec_EnvironmentEntry;
    toJSON(message: ContainerSolutionSpec_EnvironmentEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<ContainerSolutionSpec_EnvironmentEntry>, I>>(object: I): ContainerSolutionSpec_EnvironmentEntry;
} = {
    encode(
        message: ContainerSolutionSpec_EnvironmentEntry,
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
    ): ContainerSolutionSpec_EnvironmentEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseContainerSolutionSpec_EnvironmentEntry,
        } as ContainerSolutionSpec_EnvironmentEntry;
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

    fromJSON(object: any): ContainerSolutionSpec_EnvironmentEntry {
        const message = {
            ...baseContainerSolutionSpec_EnvironmentEntry,
        } as ContainerSolutionSpec_EnvironmentEntry;
        message.key = object.key !== undefined && object.key !== null ? String(object.key) : '';
        message.value =
            object.value !== undefined && object.value !== null ? String(object.value) : '';
        return message;
    },

    toJSON(message: ContainerSolutionSpec_EnvironmentEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ContainerSolutionSpec_EnvironmentEntry>, I>>(
        object: I,
    ): ContainerSolutionSpec_EnvironmentEntry {
        const message = {
            ...baseContainerSolutionSpec_EnvironmentEntry,
        } as ContainerSolutionSpec_EnvironmentEntry;
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

const baseBackupSpec: object = {
    enabled: false,
    initialPolicyIds: '',
    recoveryFromBackup: false,
    backupId: '',
    instanceRegistrationId: '',
};

export const BackupSpec: {
    encode(message: BackupSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BackupSpec;
    fromJSON(object: any): BackupSpec;
    toJSON(message: BackupSpec): unknown;
    fromPartial<I extends Exact<DeepPartial<BackupSpec>, I>>(object: I): BackupSpec;
} = {
    encode(message: BackupSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        for (const v of message.initialPolicyIds) {
            writer.uint32(18).string(v!);
        }
        if (message.recoveryFromBackup === true) {
            writer.uint32(24).bool(message.recoveryFromBackup);
        }
        if (message.backupId !== '') {
            writer.uint32(34).string(message.backupId);
        }
        if (message.instanceRegistrationId !== '') {
            writer.uint32(42).string(message.instanceRegistrationId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BackupSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBackupSpec } as BackupSpec;
        message.initialPolicyIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.initialPolicyIds.push(reader.string());
                    break;
                case 3:
                    message.recoveryFromBackup = reader.bool();
                    break;
                case 4:
                    message.backupId = reader.string();
                    break;
                case 5:
                    message.instanceRegistrationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BackupSpec {
        const message = { ...baseBackupSpec } as BackupSpec;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.initialPolicyIds = (object.initialPolicyIds ?? []).map((e: any) => String(e));
        message.recoveryFromBackup =
            object.recoveryFromBackup !== undefined && object.recoveryFromBackup !== null
                ? Boolean(object.recoveryFromBackup)
                : false;
        message.backupId =
            object.backupId !== undefined && object.backupId !== null
                ? String(object.backupId)
                : '';
        message.instanceRegistrationId =
            object.instanceRegistrationId !== undefined && object.instanceRegistrationId !== null
                ? String(object.instanceRegistrationId)
                : '';
        return message;
    },

    toJSON(message: BackupSpec): unknown {
        const obj: any = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        if (message.initialPolicyIds) {
            obj.initialPolicyIds = message.initialPolicyIds.map((e) => e);
        } else {
            obj.initialPolicyIds = [];
        }
        message.recoveryFromBackup !== undefined &&
            (obj.recoveryFromBackup = message.recoveryFromBackup);
        message.backupId !== undefined && (obj.backupId = message.backupId);
        message.instanceRegistrationId !== undefined &&
            (obj.instanceRegistrationId = message.instanceRegistrationId);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<BackupSpec>, I>>(object: I): BackupSpec {
        const message = { ...baseBackupSpec } as BackupSpec;
        message.enabled = object.enabled ?? false;
        message.initialPolicyIds = object.initialPolicyIds?.map((e) => e) || [];
        message.recoveryFromBackup = object.recoveryFromBackup ?? false;
        message.backupId = object.backupId ?? '';
        message.instanceRegistrationId = object.instanceRegistrationId ?? '';
        return message;
    },
};

const baseApplication: object = {};

export const Application: {
    encode(message: Application, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Application;
    fromJSON(object: any): Application;
    toJSON(message: Application): unknown;
    fromPartial<I extends Exact<DeepPartial<Application>, I>>(object: I): Application;
} = {
    encode(message: Application, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.containerSolution !== undefined) {
            ContainerSolutionSpec.encode(
                message.containerSolution,
                writer.uint32(10).fork(),
            ).ldelim();
        }
        if (message.cloudbackup !== undefined) {
            BackupSpec.encode(message.cloudbackup, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Application {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseApplication } as Application;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containerSolution = ContainerSolutionSpec.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 2:
                    message.cloudbackup = BackupSpec.decode(reader, reader.uint32());
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
        message.containerSolution =
            object.containerSolution !== undefined && object.containerSolution !== null
                ? ContainerSolutionSpec.fromJSON(object.containerSolution)
                : undefined;
        message.cloudbackup =
            object.cloudbackup !== undefined && object.cloudbackup !== null
                ? BackupSpec.fromJSON(object.cloudbackup)
                : undefined;
        return message;
    },

    toJSON(message: Application): unknown {
        const obj: any = {};
        message.containerSolution !== undefined &&
            (obj.containerSolution = message.containerSolution
                ? ContainerSolutionSpec.toJSON(message.containerSolution)
                : undefined);
        message.cloudbackup !== undefined &&
            (obj.cloudbackup = message.cloudbackup
                ? BackupSpec.toJSON(message.cloudbackup)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Application>, I>>(object: I): Application {
        const message = { ...baseApplication } as Application;
        message.containerSolution =
            object.containerSolution !== undefined && object.containerSolution !== null
                ? ContainerSolutionSpec.fromPartial(object.containerSolution)
                : undefined;
        message.cloudbackup =
            object.cloudbackup !== undefined && object.cloudbackup !== null
                ? BackupSpec.fromPartial(object.cloudbackup)
                : undefined;
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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
