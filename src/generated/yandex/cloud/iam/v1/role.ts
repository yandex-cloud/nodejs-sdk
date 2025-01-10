/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.iam.v1';

/** A Role resource. For more information, see [Roles](/docs/iam/concepts/access-control/roles). */
export interface Role {
    $type: 'yandex.cloud.iam.v1.Role';
    /** ID of the role. */
    id: string;
    /** Description of the role. 0-256 characters long. */
    description: string;
}

const baseRole: object = { $type: 'yandex.cloud.iam.v1.Role', id: '', description: '' };

export const Role = {
    $type: 'yandex.cloud.iam.v1.Role' as const,

    encode(message: Role, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Role {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRole } as Role;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Role {
        const message = { ...baseRole } as Role;
        message.id = object.id !== undefined && object.id !== null ? String(object.id) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        return message;
    },

    toJSON(message: Role): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Role>, I>>(object: I): Role {
        const message = { ...baseRole } as Role;
        message.id = object.id ?? '';
        message.description = object.description ?? '';
        return message;
    },
};

messageTypeRegistry.set(Role.$type, Role);

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
