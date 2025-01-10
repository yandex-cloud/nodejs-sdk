/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.containerregistry.v1';

export enum IpPermissionAction {
    IP_PERMISSION_ACTION_UNSPECIFIED = 0,
    /** ADD - Addition of an ip permission. */
    ADD = 1,
    /** REMOVE - Removal of an ip permission. */
    REMOVE = 2,
    UNRECOGNIZED = -1,
}

export function ipPermissionActionFromJSON(object: any): IpPermissionAction {
    switch (object) {
        case 0:
        case 'IP_PERMISSION_ACTION_UNSPECIFIED':
            return IpPermissionAction.IP_PERMISSION_ACTION_UNSPECIFIED;
        case 1:
        case 'ADD':
            return IpPermissionAction.ADD;
        case 2:
        case 'REMOVE':
            return IpPermissionAction.REMOVE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return IpPermissionAction.UNRECOGNIZED;
    }
}

export function ipPermissionActionToJSON(object: IpPermissionAction): string {
    switch (object) {
        case IpPermissionAction.IP_PERMISSION_ACTION_UNSPECIFIED:
            return 'IP_PERMISSION_ACTION_UNSPECIFIED';
        case IpPermissionAction.ADD:
            return 'ADD';
        case IpPermissionAction.REMOVE:
            return 'REMOVE';
        default:
            return 'UNKNOWN';
    }
}

export interface IpPermission {
    $type: 'yandex.cloud.containerregistry.v1.IpPermission';
    action: IpPermission_Action;
    ip: string;
}

export enum IpPermission_Action {
    ACTION_UNSPECIFIED = 0,
    PULL = 1,
    PUSH = 2,
    UNRECOGNIZED = -1,
}

export function ipPermission_ActionFromJSON(object: any): IpPermission_Action {
    switch (object) {
        case 0:
        case 'ACTION_UNSPECIFIED':
            return IpPermission_Action.ACTION_UNSPECIFIED;
        case 1:
        case 'PULL':
            return IpPermission_Action.PULL;
        case 2:
        case 'PUSH':
            return IpPermission_Action.PUSH;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return IpPermission_Action.UNRECOGNIZED;
    }
}

export function ipPermission_ActionToJSON(object: IpPermission_Action): string {
    switch (object) {
        case IpPermission_Action.ACTION_UNSPECIFIED:
            return 'ACTION_UNSPECIFIED';
        case IpPermission_Action.PULL:
            return 'PULL';
        case IpPermission_Action.PUSH:
            return 'PUSH';
        default:
            return 'UNKNOWN';
    }
}

export interface IpPermissionDelta {
    $type: 'yandex.cloud.containerregistry.v1.IpPermissionDelta';
    /** The action that is being performed on an ip permission. */
    action: IpPermissionAction;
    /** Ip permission. */
    ipPermission?: IpPermission;
}

const baseIpPermission: object = {
    $type: 'yandex.cloud.containerregistry.v1.IpPermission',
    action: 0,
    ip: '',
};

export const IpPermission = {
    $type: 'yandex.cloud.containerregistry.v1.IpPermission' as const,

    encode(message: IpPermission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.action !== 0) {
            writer.uint32(8).int32(message.action);
        }
        if (message.ip !== '') {
            writer.uint32(18).string(message.ip);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): IpPermission {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIpPermission } as IpPermission;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.action = reader.int32() as any;
                    break;
                case 2:
                    message.ip = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): IpPermission {
        const message = { ...baseIpPermission } as IpPermission;
        message.action =
            object.action !== undefined && object.action !== null
                ? ipPermission_ActionFromJSON(object.action)
                : 0;
        message.ip = object.ip !== undefined && object.ip !== null ? String(object.ip) : '';
        return message;
    },

    toJSON(message: IpPermission): unknown {
        const obj: any = {};
        message.action !== undefined && (obj.action = ipPermission_ActionToJSON(message.action));
        message.ip !== undefined && (obj.ip = message.ip);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<IpPermission>, I>>(object: I): IpPermission {
        const message = { ...baseIpPermission } as IpPermission;
        message.action = object.action ?? 0;
        message.ip = object.ip ?? '';
        return message;
    },
};

messageTypeRegistry.set(IpPermission.$type, IpPermission);

const baseIpPermissionDelta: object = {
    $type: 'yandex.cloud.containerregistry.v1.IpPermissionDelta',
    action: 0,
};

export const IpPermissionDelta = {
    $type: 'yandex.cloud.containerregistry.v1.IpPermissionDelta' as const,

    encode(message: IpPermissionDelta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.action !== 0) {
            writer.uint32(8).int32(message.action);
        }
        if (message.ipPermission !== undefined) {
            IpPermission.encode(message.ipPermission, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): IpPermissionDelta {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIpPermissionDelta } as IpPermissionDelta;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.action = reader.int32() as any;
                    break;
                case 2:
                    message.ipPermission = IpPermission.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): IpPermissionDelta {
        const message = { ...baseIpPermissionDelta } as IpPermissionDelta;
        message.action =
            object.action !== undefined && object.action !== null
                ? ipPermissionActionFromJSON(object.action)
                : 0;
        message.ipPermission =
            object.ipPermission !== undefined && object.ipPermission !== null
                ? IpPermission.fromJSON(object.ipPermission)
                : undefined;
        return message;
    },

    toJSON(message: IpPermissionDelta): unknown {
        const obj: any = {};
        message.action !== undefined && (obj.action = ipPermissionActionToJSON(message.action));
        message.ipPermission !== undefined &&
            (obj.ipPermission = message.ipPermission
                ? IpPermission.toJSON(message.ipPermission)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<IpPermissionDelta>, I>>(object: I): IpPermissionDelta {
        const message = { ...baseIpPermissionDelta } as IpPermissionDelta;
        message.action = object.action ?? 0;
        message.ipPermission =
            object.ipPermission !== undefined && object.ipPermission !== null
                ? IpPermission.fromPartial(object.ipPermission)
                : undefined;
        return message;
    },
};

messageTypeRegistry.set(IpPermissionDelta.$type, IpPermissionDelta);

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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
