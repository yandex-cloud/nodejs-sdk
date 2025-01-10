/* eslint-disable */
import { messageTypeRegistry } from '../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.mdb.greenplum.v1';

export interface HBARule {
    $type: 'yandex.cloud.mdb.greenplum.v1.HBARule';
    /** Priority of the Greenplum cluster rule. */
    priority: number;
    connectionType: HBARule_ConnectionType;
    /** Specifies which database names this record matches. */
    database: string;
    /** Specifies which database role names this user matches. */
    user: string;
    /** Specifies the client machine addresses that this record matches. */
    address: string;
    /**
     * Specifies the authentication method to use when a connection matches this record.
     * https://gpdb.docs.pivotal.io/6-6/security-guide/topics/Authenticate.html
     */
    authMethod: HBARule_AuthMethod;
}

export enum HBARule_ConnectionType {
    CONNECTION_TYPE_UNSPECIFIED = 0,
    /** HOST - Matches connection attempts made using TCP/IP. */
    HOST = 1,
    /** HOSTSSL - Matches connection attempts made using TCP/IP, but only when the connection is made with SSL encryption. */
    HOSTSSL = 2,
    /** HOSTNOSSL - Matches connection attempts made over TCP/IP that do not use SSL. */
    HOSTNOSSL = 3,
    UNRECOGNIZED = -1,
}

export function hBARule_ConnectionTypeFromJSON(object: any): HBARule_ConnectionType {
    switch (object) {
        case 0:
        case 'CONNECTION_TYPE_UNSPECIFIED':
            return HBARule_ConnectionType.CONNECTION_TYPE_UNSPECIFIED;
        case 1:
        case 'HOST':
            return HBARule_ConnectionType.HOST;
        case 2:
        case 'HOSTSSL':
            return HBARule_ConnectionType.HOSTSSL;
        case 3:
        case 'HOSTNOSSL':
            return HBARule_ConnectionType.HOSTNOSSL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return HBARule_ConnectionType.UNRECOGNIZED;
    }
}

export function hBARule_ConnectionTypeToJSON(object: HBARule_ConnectionType): string {
    switch (object) {
        case HBARule_ConnectionType.CONNECTION_TYPE_UNSPECIFIED:
            return 'CONNECTION_TYPE_UNSPECIFIED';
        case HBARule_ConnectionType.HOST:
            return 'HOST';
        case HBARule_ConnectionType.HOSTSSL:
            return 'HOSTSSL';
        case HBARule_ConnectionType.HOSTNOSSL:
            return 'HOSTNOSSL';
        default:
            return 'UNKNOWN';
    }
}

export enum HBARule_AuthMethod {
    AUTH_METHOD_UNSPECIFIED = 0,
    /** MD5 - Perform SCRAM-SHA-256 or MD5 authentication to verify the user's password. */
    MD5 = 1,
    /** LDAP - Perform LDAP authentication, if MDB_GREENPLUM_LDAP flag is set */
    LDAP = 2,
    /** REJECT - Disable authentication */
    REJECT = 3,
    UNRECOGNIZED = -1,
}

export function hBARule_AuthMethodFromJSON(object: any): HBARule_AuthMethod {
    switch (object) {
        case 0:
        case 'AUTH_METHOD_UNSPECIFIED':
            return HBARule_AuthMethod.AUTH_METHOD_UNSPECIFIED;
        case 1:
        case 'MD5':
            return HBARule_AuthMethod.MD5;
        case 2:
        case 'LDAP':
            return HBARule_AuthMethod.LDAP;
        case 3:
        case 'REJECT':
            return HBARule_AuthMethod.REJECT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return HBARule_AuthMethod.UNRECOGNIZED;
    }
}

export function hBARule_AuthMethodToJSON(object: HBARule_AuthMethod): string {
    switch (object) {
        case HBARule_AuthMethod.AUTH_METHOD_UNSPECIFIED:
            return 'AUTH_METHOD_UNSPECIFIED';
        case HBARule_AuthMethod.MD5:
            return 'MD5';
        case HBARule_AuthMethod.LDAP:
            return 'LDAP';
        case HBARule_AuthMethod.REJECT:
            return 'REJECT';
        default:
            return 'UNKNOWN';
    }
}

const baseHBARule: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.HBARule',
    priority: 0,
    connectionType: 0,
    database: '',
    user: '',
    address: '',
    authMethod: 0,
};

export const HBARule = {
    $type: 'yandex.cloud.mdb.greenplum.v1.HBARule' as const,

    encode(message: HBARule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.priority !== 0) {
            writer.uint32(8).int64(message.priority);
        }
        if (message.connectionType !== 0) {
            writer.uint32(16).int32(message.connectionType);
        }
        if (message.database !== '') {
            writer.uint32(26).string(message.database);
        }
        if (message.user !== '') {
            writer.uint32(34).string(message.user);
        }
        if (message.address !== '') {
            writer.uint32(42).string(message.address);
        }
        if (message.authMethod !== 0) {
            writer.uint32(48).int32(message.authMethod);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HBARule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHBARule } as HBARule;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.priority = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.connectionType = reader.int32() as any;
                    break;
                case 3:
                    message.database = reader.string();
                    break;
                case 4:
                    message.user = reader.string();
                    break;
                case 5:
                    message.address = reader.string();
                    break;
                case 6:
                    message.authMethod = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HBARule {
        const message = { ...baseHBARule } as HBARule;
        message.priority =
            object.priority !== undefined && object.priority !== null ? Number(object.priority) : 0;
        message.connectionType =
            object.connectionType !== undefined && object.connectionType !== null
                ? hBARule_ConnectionTypeFromJSON(object.connectionType)
                : 0;
        message.database =
            object.database !== undefined && object.database !== null
                ? String(object.database)
                : '';
        message.user = object.user !== undefined && object.user !== null ? String(object.user) : '';
        message.address =
            object.address !== undefined && object.address !== null ? String(object.address) : '';
        message.authMethod =
            object.authMethod !== undefined && object.authMethod !== null
                ? hBARule_AuthMethodFromJSON(object.authMethod)
                : 0;
        return message;
    },

    toJSON(message: HBARule): unknown {
        const obj: any = {};
        message.priority !== undefined && (obj.priority = Math.round(message.priority));
        message.connectionType !== undefined &&
            (obj.connectionType = hBARule_ConnectionTypeToJSON(message.connectionType));
        message.database !== undefined && (obj.database = message.database);
        message.user !== undefined && (obj.user = message.user);
        message.address !== undefined && (obj.address = message.address);
        message.authMethod !== undefined &&
            (obj.authMethod = hBARule_AuthMethodToJSON(message.authMethod));
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<HBARule>, I>>(object: I): HBARule {
        const message = { ...baseHBARule } as HBARule;
        message.priority = object.priority ?? 0;
        message.connectionType = object.connectionType ?? 0;
        message.database = object.database ?? '';
        message.user = object.user ?? '';
        message.address = object.address ?? '';
        message.authMethod = object.authMethod ?? 0;
        return message;
    },
};

messageTypeRegistry.set(HBARule.$type, HBARule);

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
