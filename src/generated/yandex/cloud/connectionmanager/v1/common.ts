/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Empty } from '../../../../google/protobuf/empty';
import { BoolValue } from '../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.connectionmanager.v1';

export interface TLSParams {
    disabled?: Empty | undefined;
    tls?: TLSConfig | undefined;
}

export interface TLSConfig {
    caCertificate: string;
}

export interface Password {
    /** Read-only. Do not fill this field in create/update requests. */
    lockboxSecretKey: string | undefined;
    /**
     * When creating/updating Password, the field "raw" is mutually exclusive
     * with "password_generation_options". In order to switch to the "raw"
     * password you have to explicitly clear the "password_generation_options"
     * field.
     */
    raw: string;
    /**
     * When creating/updating Password, the field "password_generation_options"
     * is mutually exclusive with "raw". In order to switch to the
     * "password_generation_options" you have to explicitly clear the "raw"
     * field.
     */
    passwordGenerationOptions?: PasswordGenerationOptions;
}

export interface PasswordGenerationOptions {
    lockboxPasswordGenerationOptions?: LockboxPasswordGenerationOptions | undefined;
    /**
     * Cookie is an arbitrary non-sensitive string that is saved with the
     * password. When updating PasswordGenerationOptions, if the cookie passed
     * in the update request differs from the cookie in the current
     * PasswordGenerationOptions, the password will be re-generated. If the
     * same cookie is passed, the password will not change.
     */
    cookie: string;
}

export interface LockboxPasswordGenerationOptions {
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
     * punctuation characters by default: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
     * to customize the punctuation characters, see included_punctuation and excluded_punctuation below
     */
    includePunctuation?: boolean;
    /**
     * If include_punctuation is true, one of these two fields (not both) may be used optionally to customize the punctuation:
     * a string of specific punctuation characters to use
     */
    includedPunctuation: string;
    /** a string of punctuation characters to exclude from the default */
    excludedPunctuation: string;
}

export interface UserPasswordAuth {
    user: string;
    password?: Password;
}

const baseTLSParams: object = {};

export const TLSParams: {
    encode(message: TLSParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TLSParams;
    fromJSON(object: any): TLSParams;
    toJSON(message: TLSParams): unknown;
    fromPartial<I extends Exact<DeepPartial<TLSParams>, I>>(object: I): TLSParams;
} = {
    encode(message: TLSParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.disabled !== undefined) {
            Empty.encode(message.disabled, writer.uint32(10).fork()).ldelim();
        }
        if (message.tls !== undefined) {
            TLSConfig.encode(message.tls, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TLSParams {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTLSParams } as TLSParams;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.disabled = Empty.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.tls = TLSConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TLSParams {
        const message = { ...baseTLSParams } as TLSParams;
        message.disabled =
            object.disabled !== undefined && object.disabled !== null
                ? Empty.fromJSON(object.disabled)
                : undefined;
        message.tls =
            object.tls !== undefined && object.tls !== null
                ? TLSConfig.fromJSON(object.tls)
                : undefined;
        return message;
    },

    toJSON(message: TLSParams): unknown {
        const obj: any = {};
        message.disabled !== undefined &&
            (obj.disabled = message.disabled ? Empty.toJSON(message.disabled) : undefined);
        message.tls !== undefined &&
            (obj.tls = message.tls ? TLSConfig.toJSON(message.tls) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TLSParams>, I>>(object: I): TLSParams {
        const message = { ...baseTLSParams } as TLSParams;
        message.disabled =
            object.disabled !== undefined && object.disabled !== null
                ? Empty.fromPartial(object.disabled)
                : undefined;
        message.tls =
            object.tls !== undefined && object.tls !== null
                ? TLSConfig.fromPartial(object.tls)
                : undefined;
        return message;
    },
};

const baseTLSConfig: object = { caCertificate: '' };

export const TLSConfig: {
    encode(message: TLSConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TLSConfig;
    fromJSON(object: any): TLSConfig;
    toJSON(message: TLSConfig): unknown;
    fromPartial<I extends Exact<DeepPartial<TLSConfig>, I>>(object: I): TLSConfig;
} = {
    encode(message: TLSConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.caCertificate !== '') {
            writer.uint32(10).string(message.caCertificate);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TLSConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTLSConfig } as TLSConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.caCertificate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TLSConfig {
        const message = { ...baseTLSConfig } as TLSConfig;
        message.caCertificate =
            object.caCertificate !== undefined && object.caCertificate !== null
                ? String(object.caCertificate)
                : '';
        return message;
    },

    toJSON(message: TLSConfig): unknown {
        const obj: any = {};
        message.caCertificate !== undefined && (obj.caCertificate = message.caCertificate);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TLSConfig>, I>>(object: I): TLSConfig {
        const message = { ...baseTLSConfig } as TLSConfig;
        message.caCertificate = object.caCertificate ?? '';
        return message;
    },
};

const basePassword: object = { raw: '' };

export const Password: {
    encode(message: Password, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Password;
    fromJSON(object: any): Password;
    toJSON(message: Password): unknown;
    fromPartial<I extends Exact<DeepPartial<Password>, I>>(object: I): Password;
} = {
    encode(message: Password, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.lockboxSecretKey !== undefined) {
            writer.uint32(18).string(message.lockboxSecretKey);
        }
        if (message.raw !== '') {
            writer.uint32(10).string(message.raw);
        }
        if (message.passwordGenerationOptions !== undefined) {
            PasswordGenerationOptions.encode(
                message.passwordGenerationOptions,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Password {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePassword } as Password;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.lockboxSecretKey = reader.string();
                    break;
                case 1:
                    message.raw = reader.string();
                    break;
                case 3:
                    message.passwordGenerationOptions = PasswordGenerationOptions.decode(
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

    fromJSON(object: any): Password {
        const message = { ...basePassword } as Password;
        message.lockboxSecretKey =
            object.lockboxSecretKey !== undefined && object.lockboxSecretKey !== null
                ? String(object.lockboxSecretKey)
                : undefined;
        message.raw = object.raw !== undefined && object.raw !== null ? String(object.raw) : '';
        message.passwordGenerationOptions =
            object.passwordGenerationOptions !== undefined &&
            object.passwordGenerationOptions !== null
                ? PasswordGenerationOptions.fromJSON(object.passwordGenerationOptions)
                : undefined;
        return message;
    },

    toJSON(message: Password): unknown {
        const obj: any = {};
        message.lockboxSecretKey !== undefined && (obj.lockboxSecretKey = message.lockboxSecretKey);
        message.raw !== undefined && (obj.raw = message.raw);
        message.passwordGenerationOptions !== undefined &&
            (obj.passwordGenerationOptions = message.passwordGenerationOptions
                ? PasswordGenerationOptions.toJSON(message.passwordGenerationOptions)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Password>, I>>(object: I): Password {
        const message = { ...basePassword } as Password;
        message.lockboxSecretKey = object.lockboxSecretKey ?? undefined;
        message.raw = object.raw ?? '';
        message.passwordGenerationOptions =
            object.passwordGenerationOptions !== undefined &&
            object.passwordGenerationOptions !== null
                ? PasswordGenerationOptions.fromPartial(object.passwordGenerationOptions)
                : undefined;
        return message;
    },
};

const basePasswordGenerationOptions: object = { cookie: '' };

export const PasswordGenerationOptions: {
    encode(message: PasswordGenerationOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordGenerationOptions;
    fromJSON(object: any): PasswordGenerationOptions;
    toJSON(message: PasswordGenerationOptions): unknown;
    fromPartial<I extends Exact<DeepPartial<PasswordGenerationOptions>, I>>(object: I): PasswordGenerationOptions;
} = {
    encode(
        message: PasswordGenerationOptions,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.lockboxPasswordGenerationOptions !== undefined) {
            LockboxPasswordGenerationOptions.encode(
                message.lockboxPasswordGenerationOptions,
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.cookie !== '') {
            writer.uint32(10).string(message.cookie);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PasswordGenerationOptions {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePasswordGenerationOptions } as PasswordGenerationOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.lockboxPasswordGenerationOptions =
                        LockboxPasswordGenerationOptions.decode(reader, reader.uint32());
                    break;
                case 1:
                    message.cookie = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PasswordGenerationOptions {
        const message = { ...basePasswordGenerationOptions } as PasswordGenerationOptions;
        message.lockboxPasswordGenerationOptions =
            object.lockboxPasswordGenerationOptions !== undefined &&
            object.lockboxPasswordGenerationOptions !== null
                ? LockboxPasswordGenerationOptions.fromJSON(object.lockboxPasswordGenerationOptions)
                : undefined;
        message.cookie =
            object.cookie !== undefined && object.cookie !== null ? String(object.cookie) : '';
        return message;
    },

    toJSON(message: PasswordGenerationOptions): unknown {
        const obj: any = {};
        message.lockboxPasswordGenerationOptions !== undefined &&
            (obj.lockboxPasswordGenerationOptions = message.lockboxPasswordGenerationOptions
                ? LockboxPasswordGenerationOptions.toJSON(message.lockboxPasswordGenerationOptions)
                : undefined);
        message.cookie !== undefined && (obj.cookie = message.cookie);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PasswordGenerationOptions>, I>>(
        object: I,
    ): PasswordGenerationOptions {
        const message = { ...basePasswordGenerationOptions } as PasswordGenerationOptions;
        message.lockboxPasswordGenerationOptions =
            object.lockboxPasswordGenerationOptions !== undefined &&
            object.lockboxPasswordGenerationOptions !== null
                ? LockboxPasswordGenerationOptions.fromPartial(
                      object.lockboxPasswordGenerationOptions,
                  )
                : undefined;
        message.cookie = object.cookie ?? '';
        return message;
    },
};

const baseLockboxPasswordGenerationOptions: object = {
    length: 0,
    includedPunctuation: '',
    excludedPunctuation: '',
};

export const LockboxPasswordGenerationOptions: {
    encode(message: LockboxPasswordGenerationOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LockboxPasswordGenerationOptions;
    fromJSON(object: any): LockboxPasswordGenerationOptions;
    toJSON(message: LockboxPasswordGenerationOptions): unknown;
    fromPartial<I extends Exact<DeepPartial<LockboxPasswordGenerationOptions>, I>>(object: I): LockboxPasswordGenerationOptions;
} = {
    encode(
        message: LockboxPasswordGenerationOptions,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.length !== 0) {
            writer.uint32(16).int64(message.length);
        }
        if (message.includeUppercase !== undefined) {
            BoolValue.encode(
                { value: message.includeUppercase! },
                writer.uint32(26).fork(),
            ).ldelim();
        }
        if (message.includeLowercase !== undefined) {
            BoolValue.encode(
                { value: message.includeLowercase! },
                writer.uint32(34).fork(),
            ).ldelim();
        }
        if (message.includeDigits !== undefined) {
            BoolValue.encode({ value: message.includeDigits! }, writer.uint32(42).fork()).ldelim();
        }
        if (message.includePunctuation !== undefined) {
            BoolValue.encode(
                { value: message.includePunctuation! },
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

    decode(input: _m0.Reader | Uint8Array, length?: number): LockboxPasswordGenerationOptions {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseLockboxPasswordGenerationOptions,
        } as LockboxPasswordGenerationOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
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

    fromJSON(object: any): LockboxPasswordGenerationOptions {
        const message = {
            ...baseLockboxPasswordGenerationOptions,
        } as LockboxPasswordGenerationOptions;
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

    toJSON(message: LockboxPasswordGenerationOptions): unknown {
        const obj: any = {};
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

    fromPartial<I extends Exact<DeepPartial<LockboxPasswordGenerationOptions>, I>>(
        object: I,
    ): LockboxPasswordGenerationOptions {
        const message = {
            ...baseLockboxPasswordGenerationOptions,
        } as LockboxPasswordGenerationOptions;
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

const baseUserPasswordAuth: object = { user: '' };

export const UserPasswordAuth: {
    encode(message: UserPasswordAuth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserPasswordAuth;
    fromJSON(object: any): UserPasswordAuth;
    toJSON(message: UserPasswordAuth): unknown;
    fromPartial<I extends Exact<DeepPartial<UserPasswordAuth>, I>>(object: I): UserPasswordAuth;
} = {
    encode(message: UserPasswordAuth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.user !== '') {
            writer.uint32(10).string(message.user);
        }
        if (message.password !== undefined) {
            Password.encode(message.password, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UserPasswordAuth {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUserPasswordAuth } as UserPasswordAuth;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.user = reader.string();
                    break;
                case 2:
                    message.password = Password.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UserPasswordAuth {
        const message = { ...baseUserPasswordAuth } as UserPasswordAuth;
        message.user = object.user !== undefined && object.user !== null ? String(object.user) : '';
        message.password =
            object.password !== undefined && object.password !== null
                ? Password.fromJSON(object.password)
                : undefined;
        return message;
    },

    toJSON(message: UserPasswordAuth): unknown {
        const obj: any = {};
        message.user !== undefined && (obj.user = message.user);
        message.password !== undefined &&
            (obj.password = message.password ? Password.toJSON(message.password) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UserPasswordAuth>, I>>(object: I): UserPasswordAuth {
        const message = { ...baseUserPasswordAuth } as UserPasswordAuth;
        message.user = object.user ?? '';
        message.password =
            object.password !== undefined && object.password !== null
                ? Password.fromPartial(object.password)
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
