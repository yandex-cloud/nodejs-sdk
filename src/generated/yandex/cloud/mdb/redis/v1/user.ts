/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { StringValue, BoolValue } from '../../../../../google/protobuf/wrappers';

export const protobufPackage = 'yandex.cloud.mdb.redis.v1';

/**
 * A Redis User resource. For more information, see the
 * [Developer's Guide](/docs/managed-redis/concepts).
 */
export interface User {
    /** Name of the Redis user. */
    name: string;
    /** ID of the Redis cluster the user belongs to. */
    clusterId: string;
    /** Set of permissions to grant to the user. */
    permissions?: Permissions;
    /** Is redis user enabled */
    enabled: boolean;
    /** Raw ACL string inside of Redis */
    aclOptions: string;
}

export interface Permissions {
    /** Keys patterns user has permission to. */
    patterns?: string;
    /** Channel patterns user has permissions to. */
    pubSubChannels?: string;
    /** Command categories user has permissions to. */
    categories?: string;
    /** Commands user can execute. */
    commands?: string;
    /** SanitizePayload parameter. */
    sanitizePayload?: string;
}

export interface UserSpec {
    /** Name of the Redis user. */
    name: string;
    /** Password of the Redis user. */
    passwords: string[];
    /** Set of permissions to grant to the user. */
    permissions?: Permissions;
    /** Is Redis user enabled */
    enabled?: boolean;
}

const baseUser: object = { name: '', clusterId: '', enabled: false, aclOptions: '' };

export const User = {
    encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.permissions !== undefined) {
            Permissions.encode(message.permissions, writer.uint32(26).fork()).ldelim();
        }
        if (message.enabled === true) {
            writer.uint32(32).bool(message.enabled);
        }
        if (message.aclOptions !== '') {
            writer.uint32(42).string(message.aclOptions);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): User {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUser } as User;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                case 3:
                    message.permissions = Permissions.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.enabled = reader.bool();
                    break;
                case 5:
                    message.aclOptions = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): User {
        const message = { ...baseUser } as User;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : '';
        message.permissions =
            object.permissions !== undefined && object.permissions !== null
                ? Permissions.fromJSON(object.permissions)
                : undefined;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.aclOptions =
            object.aclOptions !== undefined && object.aclOptions !== null
                ? String(object.aclOptions)
                : '';
        return message;
    },

    toJSON(message: User): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.permissions !== undefined &&
            (obj.permissions = message.permissions
                ? Permissions.toJSON(message.permissions)
                : undefined);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.aclOptions !== undefined && (obj.aclOptions = message.aclOptions);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
        const message = { ...baseUser } as User;
        message.name = object.name ?? '';
        message.clusterId = object.clusterId ?? '';
        message.permissions =
            object.permissions !== undefined && object.permissions !== null
                ? Permissions.fromPartial(object.permissions)
                : undefined;
        message.enabled = object.enabled ?? false;
        message.aclOptions = object.aclOptions ?? '';
        return message;
    },
};

const basePermissions: object = {};

export const Permissions = {
    encode(message: Permissions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.patterns !== undefined) {
            StringValue.encode({ value: message.patterns! }, writer.uint32(10).fork()).ldelim();
        }
        if (message.pubSubChannels !== undefined) {
            StringValue.encode(
                { value: message.pubSubChannels! },
                writer.uint32(18).fork(),
            ).ldelim();
        }
        if (message.categories !== undefined) {
            StringValue.encode({ value: message.categories! }, writer.uint32(26).fork()).ldelim();
        }
        if (message.commands !== undefined) {
            StringValue.encode({ value: message.commands! }, writer.uint32(34).fork()).ldelim();
        }
        if (message.sanitizePayload !== undefined) {
            StringValue.encode(
                { value: message.sanitizePayload! },
                writer.uint32(42).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Permissions {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePermissions } as Permissions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.patterns = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.pubSubChannels = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.categories = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.commands = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.sanitizePayload = StringValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Permissions {
        const message = { ...basePermissions } as Permissions;
        message.patterns =
            object.patterns !== undefined && object.patterns !== null
                ? String(object.patterns)
                : undefined;
        message.pubSubChannels =
            object.pubSubChannels !== undefined && object.pubSubChannels !== null
                ? String(object.pubSubChannels)
                : undefined;
        message.categories =
            object.categories !== undefined && object.categories !== null
                ? String(object.categories)
                : undefined;
        message.commands =
            object.commands !== undefined && object.commands !== null
                ? String(object.commands)
                : undefined;
        message.sanitizePayload =
            object.sanitizePayload !== undefined && object.sanitizePayload !== null
                ? String(object.sanitizePayload)
                : undefined;
        return message;
    },

    toJSON(message: Permissions): unknown {
        const obj: any = {};
        message.patterns !== undefined && (obj.patterns = message.patterns);
        message.pubSubChannels !== undefined && (obj.pubSubChannels = message.pubSubChannels);
        message.categories !== undefined && (obj.categories = message.categories);
        message.commands !== undefined && (obj.commands = message.commands);
        message.sanitizePayload !== undefined && (obj.sanitizePayload = message.sanitizePayload);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Permissions>, I>>(object: I): Permissions {
        const message = { ...basePermissions } as Permissions;
        message.patterns = object.patterns ?? undefined;
        message.pubSubChannels = object.pubSubChannels ?? undefined;
        message.categories = object.categories ?? undefined;
        message.commands = object.commands ?? undefined;
        message.sanitizePayload = object.sanitizePayload ?? undefined;
        return message;
    },
};

const baseUserSpec: object = { name: '', passwords: '' };

export const UserSpec = {
    encode(message: UserSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.passwords) {
            writer.uint32(18).string(v!);
        }
        if (message.permissions !== undefined) {
            Permissions.encode(message.permissions, writer.uint32(26).fork()).ldelim();
        }
        if (message.enabled !== undefined) {
            BoolValue.encode({ value: message.enabled! }, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UserSpec {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUserSpec } as UserSpec;
        message.passwords = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.passwords.push(reader.string());
                    break;
                case 3:
                    message.permissions = Permissions.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.enabled = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UserSpec {
        const message = { ...baseUserSpec } as UserSpec;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.passwords = (object.passwords ?? []).map((e: any) => String(e));
        message.permissions =
            object.permissions !== undefined && object.permissions !== null
                ? Permissions.fromJSON(object.permissions)
                : undefined;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : undefined;
        return message;
    },

    toJSON(message: UserSpec): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.passwords) {
            obj.passwords = message.passwords.map((e) => e);
        } else {
            obj.passwords = [];
        }
        message.permissions !== undefined &&
            (obj.permissions = message.permissions
                ? Permissions.toJSON(message.permissions)
                : undefined);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UserSpec>, I>>(object: I): UserSpec {
        const message = { ...baseUserSpec } as UserSpec;
        message.name = object.name ?? '';
        message.passwords = object.passwords?.map((e) => e) || [];
        message.permissions =
            object.permissions !== undefined && object.permissions !== null
                ? Permissions.fromPartial(object.permissions)
                : undefined;
        message.enabled = object.enabled ?? undefined;
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
