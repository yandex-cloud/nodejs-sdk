/* eslint-disable */
import { messageTypeRegistry } from '../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.mdb.elasticsearch.v1';

export interface AuthProviders {
    $type: 'yandex.cloud.mdb.elasticsearch.v1.AuthProviders';
    providers: AuthProvider[];
}

export interface AuthProvider {
    $type: 'yandex.cloud.mdb.elasticsearch.v1.AuthProvider';
    type: AuthProvider_Type;
    name: string;
    order: number;
    enabled: boolean;
    /** selector ui settings */
    hidden: boolean;
    description: string;
    hint: string;
    icon: string;
    saml?: SamlSettings | undefined;
}

export enum AuthProvider_Type {
    TYPE_UNSPECIFIED = 0,
    NATIVE = 1,
    /**
     * SAML - OPENID = 3;
     * ANONYMOUS = 4;
     */
    SAML = 2,
    UNRECOGNIZED = -1,
}

export function authProvider_TypeFromJSON(object: any): AuthProvider_Type {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return AuthProvider_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'NATIVE':
            return AuthProvider_Type.NATIVE;
        case 2:
        case 'SAML':
            return AuthProvider_Type.SAML;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return AuthProvider_Type.UNRECOGNIZED;
    }
}

export function authProvider_TypeToJSON(object: AuthProvider_Type): string {
    switch (object) {
        case AuthProvider_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case AuthProvider_Type.NATIVE:
            return 'NATIVE';
        case AuthProvider_Type.SAML:
            return 'SAML';
        default:
            return 'UNKNOWN';
    }
}

export interface SamlSettings {
    $type: 'yandex.cloud.mdb.elasticsearch.v1.SamlSettings';
    idpEntityId: string;
    idpMetadataFile: Buffer;
    spEntityId: string;
    kibanaUrl: string;
    attributePrincipal: string;
    attributeGroups: string;
    attributeName: string;
    attributeEmail: string;
    attributeDn: string;
}

const baseAuthProviders: object = { $type: 'yandex.cloud.mdb.elasticsearch.v1.AuthProviders' };

export const AuthProviders = {
    $type: 'yandex.cloud.mdb.elasticsearch.v1.AuthProviders' as const,

    encode(message: AuthProviders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.providers) {
            AuthProvider.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AuthProviders {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAuthProviders } as AuthProviders;
        message.providers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.providers.push(AuthProvider.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AuthProviders {
        const message = { ...baseAuthProviders } as AuthProviders;
        message.providers = (object.providers ?? []).map((e: any) => AuthProvider.fromJSON(e));
        return message;
    },

    toJSON(message: AuthProviders): unknown {
        const obj: any = {};
        if (message.providers) {
            obj.providers = message.providers.map((e) => (e ? AuthProvider.toJSON(e) : undefined));
        } else {
            obj.providers = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AuthProviders>, I>>(object: I): AuthProviders {
        const message = { ...baseAuthProviders } as AuthProviders;
        message.providers = object.providers?.map((e) => AuthProvider.fromPartial(e)) || [];
        return message;
    },
};

messageTypeRegistry.set(AuthProviders.$type, AuthProviders);

const baseAuthProvider: object = {
    $type: 'yandex.cloud.mdb.elasticsearch.v1.AuthProvider',
    type: 0,
    name: '',
    order: 0,
    enabled: false,
    hidden: false,
    description: '',
    hint: '',
    icon: '',
};

export const AuthProvider = {
    $type: 'yandex.cloud.mdb.elasticsearch.v1.AuthProvider' as const,

    encode(message: AuthProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.order !== 0) {
            writer.uint32(24).int64(message.order);
        }
        if (message.enabled === true) {
            writer.uint32(32).bool(message.enabled);
        }
        if (message.hidden === true) {
            writer.uint32(40).bool(message.hidden);
        }
        if (message.description !== '') {
            writer.uint32(50).string(message.description);
        }
        if (message.hint !== '') {
            writer.uint32(58).string(message.hint);
        }
        if (message.icon !== '') {
            writer.uint32(66).string(message.icon);
        }
        if (message.saml !== undefined) {
            SamlSettings.encode(message.saml, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AuthProvider {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAuthProvider } as AuthProvider;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32() as any;
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.order = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.enabled = reader.bool();
                    break;
                case 5:
                    message.hidden = reader.bool();
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    message.hint = reader.string();
                    break;
                case 8:
                    message.icon = reader.string();
                    break;
                case 9:
                    message.saml = SamlSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AuthProvider {
        const message = { ...baseAuthProvider } as AuthProvider;
        message.type =
            object.type !== undefined && object.type !== null
                ? authProvider_TypeFromJSON(object.type)
                : 0;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.order =
            object.order !== undefined && object.order !== null ? Number(object.order) : 0;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.hidden =
            object.hidden !== undefined && object.hidden !== null ? Boolean(object.hidden) : false;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        message.hint = object.hint !== undefined && object.hint !== null ? String(object.hint) : '';
        message.icon = object.icon !== undefined && object.icon !== null ? String(object.icon) : '';
        message.saml =
            object.saml !== undefined && object.saml !== null
                ? SamlSettings.fromJSON(object.saml)
                : undefined;
        return message;
    },

    toJSON(message: AuthProvider): unknown {
        const obj: any = {};
        message.type !== undefined && (obj.type = authProvider_TypeToJSON(message.type));
        message.name !== undefined && (obj.name = message.name);
        message.order !== undefined && (obj.order = Math.round(message.order));
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.hidden !== undefined && (obj.hidden = message.hidden);
        message.description !== undefined && (obj.description = message.description);
        message.hint !== undefined && (obj.hint = message.hint);
        message.icon !== undefined && (obj.icon = message.icon);
        message.saml !== undefined &&
            (obj.saml = message.saml ? SamlSettings.toJSON(message.saml) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AuthProvider>, I>>(object: I): AuthProvider {
        const message = { ...baseAuthProvider } as AuthProvider;
        message.type = object.type ?? 0;
        message.name = object.name ?? '';
        message.order = object.order ?? 0;
        message.enabled = object.enabled ?? false;
        message.hidden = object.hidden ?? false;
        message.description = object.description ?? '';
        message.hint = object.hint ?? '';
        message.icon = object.icon ?? '';
        message.saml =
            object.saml !== undefined && object.saml !== null
                ? SamlSettings.fromPartial(object.saml)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(AuthProvider.$type, AuthProvider);

const baseSamlSettings: object = {
    $type: 'yandex.cloud.mdb.elasticsearch.v1.SamlSettings',
    idpEntityId: '',
    spEntityId: '',
    kibanaUrl: '',
    attributePrincipal: '',
    attributeGroups: '',
    attributeName: '',
    attributeEmail: '',
    attributeDn: '',
};

export const SamlSettings = {
    $type: 'yandex.cloud.mdb.elasticsearch.v1.SamlSettings' as const,

    encode(message: SamlSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.idpEntityId !== '') {
            writer.uint32(10).string(message.idpEntityId);
        }
        if (message.idpMetadataFile.length !== 0) {
            writer.uint32(18).bytes(message.idpMetadataFile);
        }
        if (message.spEntityId !== '') {
            writer.uint32(26).string(message.spEntityId);
        }
        if (message.kibanaUrl !== '') {
            writer.uint32(34).string(message.kibanaUrl);
        }
        if (message.attributePrincipal !== '') {
            writer.uint32(42).string(message.attributePrincipal);
        }
        if (message.attributeGroups !== '') {
            writer.uint32(50).string(message.attributeGroups);
        }
        if (message.attributeName !== '') {
            writer.uint32(58).string(message.attributeName);
        }
        if (message.attributeEmail !== '') {
            writer.uint32(66).string(message.attributeEmail);
        }
        if (message.attributeDn !== '') {
            writer.uint32(74).string(message.attributeDn);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SamlSettings {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSamlSettings } as SamlSettings;
        message.idpMetadataFile = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.idpEntityId = reader.string();
                    break;
                case 2:
                    message.idpMetadataFile = reader.bytes() as Buffer;
                    break;
                case 3:
                    message.spEntityId = reader.string();
                    break;
                case 4:
                    message.kibanaUrl = reader.string();
                    break;
                case 5:
                    message.attributePrincipal = reader.string();
                    break;
                case 6:
                    message.attributeGroups = reader.string();
                    break;
                case 7:
                    message.attributeName = reader.string();
                    break;
                case 8:
                    message.attributeEmail = reader.string();
                    break;
                case 9:
                    message.attributeDn = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SamlSettings {
        const message = { ...baseSamlSettings } as SamlSettings;
        message.idpEntityId =
            object.idpEntityId !== undefined && object.idpEntityId !== null
                ? String(object.idpEntityId)
                : '';
        message.idpMetadataFile =
            object.idpMetadataFile !== undefined && object.idpMetadataFile !== null
                ? Buffer.from(bytesFromBase64(object.idpMetadataFile))
                : Buffer.alloc(0);
        message.spEntityId =
            object.spEntityId !== undefined && object.spEntityId !== null
                ? String(object.spEntityId)
                : '';
        message.kibanaUrl =
            object.kibanaUrl !== undefined && object.kibanaUrl !== null
                ? String(object.kibanaUrl)
                : '';
        message.attributePrincipal =
            object.attributePrincipal !== undefined && object.attributePrincipal !== null
                ? String(object.attributePrincipal)
                : '';
        message.attributeGroups =
            object.attributeGroups !== undefined && object.attributeGroups !== null
                ? String(object.attributeGroups)
                : '';
        message.attributeName =
            object.attributeName !== undefined && object.attributeName !== null
                ? String(object.attributeName)
                : '';
        message.attributeEmail =
            object.attributeEmail !== undefined && object.attributeEmail !== null
                ? String(object.attributeEmail)
                : '';
        message.attributeDn =
            object.attributeDn !== undefined && object.attributeDn !== null
                ? String(object.attributeDn)
                : '';
        return message;
    },

    toJSON(message: SamlSettings): unknown {
        const obj: any = {};
        message.idpEntityId !== undefined && (obj.idpEntityId = message.idpEntityId);
        message.idpMetadataFile !== undefined &&
            (obj.idpMetadataFile = base64FromBytes(
                message.idpMetadataFile !== undefined ? message.idpMetadataFile : Buffer.alloc(0),
            ));
        message.spEntityId !== undefined && (obj.spEntityId = message.spEntityId);
        message.kibanaUrl !== undefined && (obj.kibanaUrl = message.kibanaUrl);
        message.attributePrincipal !== undefined &&
            (obj.attributePrincipal = message.attributePrincipal);
        message.attributeGroups !== undefined && (obj.attributeGroups = message.attributeGroups);
        message.attributeName !== undefined && (obj.attributeName = message.attributeName);
        message.attributeEmail !== undefined && (obj.attributeEmail = message.attributeEmail);
        message.attributeDn !== undefined && (obj.attributeDn = message.attributeDn);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SamlSettings>, I>>(object: I): SamlSettings {
        const message = { ...baseSamlSettings } as SamlSettings;
        message.idpEntityId = object.idpEntityId ?? '';
        message.idpMetadataFile = object.idpMetadataFile ?? Buffer.alloc(0);
        message.spEntityId = object.spEntityId ?? '';
        message.kibanaUrl = object.kibanaUrl ?? '';
        message.attributePrincipal = object.attributePrincipal ?? '';
        message.attributeGroups = object.attributeGroups ?? '';
        message.attributeName = object.attributeName ?? '';
        message.attributeEmail = object.attributeEmail ?? '';
        message.attributeDn = object.attributeDn ?? '';
        return message;
    },
};

messageTypeRegistry.set(SamlSettings.$type, SamlSettings);

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

const atob: (b64: string) => string =
    globalThis.atob || ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}

const btoa: (bin: string) => string =
    globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
    const bin: string[] = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(''));
}

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
